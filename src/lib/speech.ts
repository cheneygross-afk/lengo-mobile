// Shared pronunciation helper used by Flashcards, the reading/highlight
// tap-to-hear feature, stories and lesson drills. Every sound is a
// studio-quality Google Cloud voice (Chirp 3 HD, see the website's
// /api/pronounce route, which both apps share): recorded once, the first
// time anyone anywhere asks for that exact text, then served from storage
// to everyone forever after.
//
// There is deliberately NO fallback to the phone's own text-to-speech
// voices (expo-speech): many of them sound robotic, and a learner copying
// a robotic voice learns the wrong sounds. When a clip can't be played
// (offline, a failed request), the learner gets a "Couldn't play the
// audio -- Retry" prompt instead (see speechStatus.ts and
// SpeechStatusToast).
import { createAudioPlayer, setAudioModeAsync, type AudioPlayer, type AudioStatus } from "expo-audio";
import { supabase } from "@/lib/supabase/client";
import {
  DEFAULT_PRONUNCIATION_VOICE,
  DEFAULT_PRONUNCIATION_ENABLED,
  VOICE_PREVIEW_TEXT,
  isPronunciationVoice,
  type PronunciationVoice,
} from "@/lib/pronunciationVoice";
import { getSpanishVariety, loadSpanishVariety, spanishSpeechLang } from "@/lib/spanishVariety";
import { getSpeechStatus as currentStatus, setSpeechStatus as setStatus } from "@/lib/speechStatus";

export type SpeechLang = "es-ES" | "es-US" | "ja-JP" | "en-US" | "zh-CN" | "fr-FR" | "de-DE" | "pt-BR" | "ko-KR" | "it-IT";

// Screens ask for Spanish as SPANISH_LANG (es-ES); the learner's "Spanish
// I want to learn" setting decides which voice actually speaks it --
// Castilian (es-ES) or Latin American (es-US). See voiceLang() below and
// spanishVariety.ts.
export const SPANISH_LANG: SpeechLang = "es-ES";
export const JAPANESE_LANG: SpeechLang = "ja-JP";
export const ENGLISH_LANG: SpeechLang = "en-US";
// Mandarin, for the Chinese beta (lessons/zh).
export const CHINESE_LANG: SpeechLang = "zh-CN";
// The French course (lessons/fr-*.ts).
export const FRENCH_LANG: SpeechLang = "fr-FR";
// The German course (lessons/de-*.ts).
export const GERMAN_LANG: SpeechLang = "de-DE";
// The Brazilian Portuguese course (lessons/pt-*.ts), spoken by Google's pt-BR voices.
export const PORTUGUESE_LANG: SpeechLang = "pt-BR";
// The Korean course (lessons/ko-*.ts), spoken by Google's ko-KR voices.
export const KOREAN_LANG: SpeechLang = "ko-KR";
// The Italian course (lessons/it-*.ts), spoken by Google's it-IT voices.
export const ITALIAN_LANG: SpeechLang = "it-IT";

// The course languages taught in English (French, German, Portuguese,
// Korean, Italian, Japanese, Chinese) name their language in English input hints; the
// Spanish course and the English course keep their Spanish hints.
const ENGLISH_TAUGHT_NAMES: Partial<Record<SpeechLang, string>> = {
  "fr-FR": "French",
  "de-DE": "German",
  "pt-BR": "Portuguese",
  "ko-KR": "Korean",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "zh-CN": "Chinese",
};

/** The language's English name when its course is taught in English, else null. */
export function englishTaughtName(lang: SpeechLang): string | null {
  return ENGLISH_TAUGHT_NAMES[lang] ?? null;
}

// The two ways language is keyed elsewhere in the app: a flashcard/story
// "levelPath" like "a1" or "ja-a1", or a Lesson's own "level" like "A1"
// or "JA-A1"/"JA-Alphabets"/"JA-B1".
export function langForLevelPath(levelPath: string): SpeechLang {
  if (levelPath.startsWith("zh")) return CHINESE_LANG;
  if (levelPath === "fr" || levelPath.startsWith("fr/")) return FRENCH_LANG;
  if (levelPath === "de" || levelPath.startsWith("de/")) return GERMAN_LANG;
  if (levelPath === "pt" || levelPath.startsWith("pt/")) return PORTUGUESE_LANG;
  if (levelPath === "ko" || levelPath.startsWith("ko/")) return KOREAN_LANG;
  if (levelPath === "it" || levelPath.startsWith("it/")) return ITALIAN_LANG;
  return levelPath.startsWith("ja") ? JAPANESE_LANG : SPANISH_LANG;
}

export function langForLevel(level: string): SpeechLang {
  if (level.startsWith("ZH")) return CHINESE_LANG;
  if (level.startsWith("FR-")) return FRENCH_LANG;
  if (level.startsWith("DE-")) return GERMAN_LANG;
  if (level.startsWith("PT-")) return PORTUGUESE_LANG;
  if (level.startsWith("KO-")) return KOREAN_LANG;
  if (level.startsWith("IT-")) return ITALIAN_LANG;
  return level.startsWith("JA") ? JAPANESE_LANG : SPANISH_LANG;
}

// Strips the punctuation tokenize() in HighlightableText leaves attached
// to a word (it splits on whitespace only, not word boundaries) so it
// doesn't get read aloud or thrown off by a trailing "." or "¿" -- and so
// two requests differing only in trailing punctuation share one cached
// clip instead of generating (and paying for) two.
export function stripForSpeech(text: string): string {
  return text.replace(/[.,;:!?¿¡"'“”()\[\]]/g, "").trim();
}

// ---- Cached cloud pronunciation ------------------------------------

// Deterministic, dependency-free hash used to name cached pronunciation
// audio files. The identical algorithm is duplicated in the website's
// src/lib/speech.ts and its /api/pronounce route (see each file's own
// copy) so all three compute the same storage path for the same
// (text, lang) pair without a shared package or a network round trip
// just to agree on a filename. Two independent 32-bit FNV-1a passes
// combined into a 64-bit-equivalent hex string -- plain 32-bit FNV-1a
// alone starts to carry a non-negligible collision chance once the
// corpus reaches the thousands of unique strings this app has across two
// full language tracks; doubling it makes a collision practically
// impossible at any size this app will reach.
function fnv1a(str: string, seed: number): number {
  let h = seed;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function hashKey(text: string, lang: string, voice: PronunciationVoice): string {
  const input = `${lang}\u0000${voice}\u0000${text.normalize("NFC")}`;
  const a = fnv1a(input, 0x811c9dc5);
  const b = fnv1a(input, 0x9e3779b9);
  return a.toString(16).padStart(8, "0") + b.toString(16).padStart(8, "0");
}

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const STORAGE_BASE = `${SUPABASE_URL}/storage/v1/object/public/pronunciation-audio`;
const PRONOUNCE_API_URL = "https://deependspanish.com/api/pronounce";

// Clips live under a folder named for the voice generation that made
// them. Moving to the HD voices (2026-11) started a fresh "hd1" folder, so
// every clip is re-recorded with the new voices instead of replaying the
// older recordings. Must match AUDIO_VERSION in the website's speech.ts
// and /api/pronounce.
const AUDIO_VERSION = "hd1";

function audioUrl(text: string, lang: SpeechLang, voice: PronunciationVoice): string {
  return `${STORAGE_BASE}/${AUDIO_VERSION}/${lang}/${hashKey(text, lang, voice)}.mp3`;
}

// In-memory cache of the signed-in learner's saved pronunciation voice
// (profiles.pronunciation_voice). Loaded lazily -- the first speak() of
// a session awaits it -- rather than threaded as a prop through every
// screen that calls speak() (flashcards, exercises, tap-to-hear text),
// since it's one account-level setting, not something any of those call
// sites need to know about individually.
let preferredVoice: PronunciationVoice = DEFAULT_PRONUNCIATION_VOICE;
let pronunciationEnabled: boolean = DEFAULT_PRONUNCIATION_ENABLED;
let prefsLoaded = false;
let prefsLoadPromise: Promise<void> | null = null;

// Called by SettingsScreen the instant the learner changes their pick,
// so speak() reflects it immediately this session instead of waiting on
// a fresh profile fetch.
export function setPreferredVoice(voice: PronunciationVoice): void {
  preferredVoice = voice;
  prefsLoaded = true;
}

// Called by SettingsScreen the instant the learner flips pronunciation
// off -- also stops anything already playing right away, rather than
// waiting for the next tap to notice.
export function setPronunciationEnabled(enabled: boolean): void {
  pronunciationEnabled = enabled;
  prefsLoaded = true;
  if (!enabled) {
    stopReadAloud();
    stopPlayback();
    setStatus({ state: "idle" });
  }
}

// Start loading the settings when the app starts, not on the first tap.
setTimeout(() => {
  void loadPronunciationPrefs();
  void loadSpanishVariety();
  void ensureAudioMode();
}, 0);

function loadPronunciationPrefs(): Promise<void> {
  if (prefsLoaded) return Promise.resolve();
  if (prefsLoadPromise) return prefsLoadPromise;
  prefsLoadPromise = (async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("pronunciation_voice, pronunciation_enabled")
        .eq("id", user.id)
        .single();
      const v = data?.pronunciation_voice;
      if (isPronunciationVoice(v)) preferredVoice = v;
      if (typeof data?.pronunciation_enabled === "boolean") pronunciationEnabled = data.pronunciation_enabled;
    } catch {
      // Network hiccup or logged out -- stick with the defaults rather
      // than block speech on this.
    } finally {
      prefsLoaded = true;
    }
  })();
  return prefsLoadPromise;
}

// Spanish follows the learner's "Spanish I want to learn" setting --
// Castilian (es-ES) or Latin American (es-US). Every other language,
// English included, has its own HD cloud voice.
function voiceLang(lang: SpeechLang): SpeechLang {
  return lang.startsWith("es") ? spanishSpeechLang(getSpanishVariety()) : lang;
}

// Shows "Loading audio..." only when a clip takes a noticeable moment (a
// brand-new phrase being recorded), so ordinary taps never flash it.
const LOADING_DELAY_MS = 700;

function startLoading(isCurrent: () => boolean): () => void {
  const timer = setTimeout(() => {
    if (isCurrent()) setStatus({ state: "loading" });
  }, LOADING_DELAY_MS);
  return () => clearTimeout(timer);
}

let currentPlayer: AudioPlayer | null = null;

// Clips heard this session, kept loaded so tapping the same word again
// plays at once instead of streaming it again. Oldest dropped first past
// TAP_PLAYERS_SIZE.
const TAP_PLAYERS_SIZE = 60;
const tapPlayers = new Map<string, AudioPlayer>();
// The kept player playing right now, if any (paused, not removed, to stop).
let currentTap: AudioPlayer | null = null;

function keepPlayer(url: string, player: AudioPlayer): void {
  tapPlayers.delete(url);
  tapPlayers.set(url, player);
  for (const [oldUrl, old] of tapPlayers) {
    if (tapPlayers.size <= TAP_PLAYERS_SIZE) break;
    if (old === currentTap) continue;
    tapPlayers.delete(oldUrl);
    old.remove();
  }
}

/** Plays a kept clip from the start; false when there isn't one. */
function replayKept(url: string, rate: number): boolean {
  const player = tapPlayers.get(url);
  if (!player) return false;
  currentTap = player;
  player.setPlaybackRate(rate, "high");
  void player.seekTo(0).then(() => {
    if (currentTap === player) player.play();
  });
  return true;
}

function stopPlayback(): void {
  currentPlayer?.remove();
  currentPlayer = null;
  currentTap?.pause();
  currentTap = null;
  try {
    otherPlayer?.pause();
  } catch {}
  otherPlayer = null;
}

// A player that isn't a pronunciation clip (the learner's own recording),
// played through the same single channel: see playOtherAudio.
let otherPlayer: AudioPlayer | null = null;
// When the latest sound was asked for (0 once stopped); see stopAllAudio.
let lastStartedAt = 0;

/**
 * Plays a player that isn't a pronunciation clip (the learner's own
 * recording): whatever else is playing stops, and any later tap, step
 * change or screen change stops it.
 */
export function playOtherAudio(player: AudioPlayer): void {
  stopReadAloud();
  stopPlayback();
  otherPlayer = player;
  lastStartedAt = Date.now();
  player.play();
}

/**
 * Stops every sound the app is making. Called when the lesson step or the
 * screen changes, so nothing from the last screen is heard on the next.
 * With `spareNewerThanMs`, a sound the new screen itself started in the
 * last few milliseconds (a listening question playing as it appears) is
 * left playing.
 */
export function stopAllAudio(spareNewerThanMs = 0): void {
  if (spareNewerThanMs > 0 && lastStartedAt > 0 && Date.now() - lastStartedAt < spareNewerThanMs) return;
  lastStartedAt = 0;
  stopReadAloud();
  stopPlayback();
}

// iOS mutes app audio while the ring/silent switch is on silent unless the
// app opts out -- which left every Google clip silent on a phone in silent
// mode (the device voice, which ignores the switch, still spoke). A
// pronunciation tap is a deliberate request to hear something, so play
// through the switch. Set once, before the first clip.
let audioModePromise: Promise<void> | null = null;
function ensureAudioMode(): Promise<void> {
  if (!audioModePromise) {
    audioModePromise = setAudioModeAsync({ playsInSilentMode: true, interruptionMode: "duckOthers" }).catch(() => {});
  }
  return audioModePromise;
}

// A quick HEAD request says whether a clip is cached at all. Without it, a
// clip nobody has requested yet sat in the player until its 4-second
// timeout before generation even started, so a first tap stayed silent
// long enough to look broken.
async function clipExists(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

// How long a clip may take to start before the tap counts as failed (and
// the learner is offered a retry). Generous: a slow connection should
// still get the real voice, just a moment later.
const PLAY_TIMEOUT_MS = 8000;

// Tries to play a clip at `url`. Resolves true once playback has actually
// started, false if it errors or takes too long to load.
function tryPlayRemote(url: string, rate = 1): Promise<boolean> {
  return new Promise((resolve) => {
    let settled = false;
    let started = false;
    let timedOut = false;
    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      resolve(ok);
    };
    let player: AudioPlayer;
    try {
      player = createAudioPlayer(url);
    } catch {
      finish(false);
      return;
    }
    currentPlayer = player;
    const sub = player.addListener("playbackStatusUpdate", (status: AudioStatus) => {
      if (status.error) {
        if (currentPlayer === player) currentPlayer = null;
        sub.remove();
        try {
          player.remove();
        } catch {}
        finish(false);
        return;
      }
      if (status.isLoaded && !started) {
        started = true;
        if (timedOut) {
          // Too late for this tap: keep it loaded for the next one.
          if (currentPlayer === player) currentPlayer = null;
          keepPlayer(url, player);
          return;
        }
        // Pitch-corrected, so slowed-down speech doesn't sound deeper.
        if (rate !== 1) player.setPlaybackRate(rate, "high");
        player.play();
        finish(true);
      }
      if (status.didJustFinish && currentPlayer === player) {
        // Kept for the next tap on the same words.
        currentPlayer = null;
        keepPlayer(url, player);
      }
    });
    setTimeout(() => {
      if (!started) timedOut = true;
      finish(false);
    }, PLAY_TIMEOUT_MS);
  });
}

// Stops and frees the clip that's loading or playing (its load may still
// be in flight when the clip turns out not to exist).
function dropCurrentPlayer(): void {
  const player: AudioPlayer | null = currentPlayer;
  player?.remove();
  currentPlayer = null;
}

// Clips known to exist (played or checked this session): no need to ask
// storage again before playing them.
const knownClips = new Set<string>();
// Clips being generated right now, so a second tap waits on the same one.
const generating = new Map<string, Promise<string | null>>();

/** Has the cloud clip recorded (the website's /api/pronounce). Resolves the
 * clip's url once it's made, or null if it couldn't be. */
function generate(text: string, lang: SpeechLang, voice: PronunciationVoice, url: string): Promise<string | null> {
  let pending = generating.get(url);
  if (!pending) {
    pending = requestGeneration(text, lang, voice).then((generated) => {
      generating.delete(url);
      if (generated) knownClips.add(generated);
      return generated;
    });
    generating.set(url, pending);
  }
  return pending;
}

// Asks the website's shared /api/pronounce route to render this exact
// text (it isn't cached yet), uploading the result to storage for every
// future request -- mobile and web alike -- to find already cached.
// Requires the learner's own session (same auth model as the in-app
// translator, src/lib/translate/api.ts) so this costed call isn't wide
// open to anyone who isn't using the app.
async function requestGeneration(text: string, lang: SpeechLang, voice: PronunciationVoice): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return null;
    const res = await fetch(
      `${PRONOUNCE_API_URL}?text=${encodeURIComponent(text)}&lang=${encodeURIComponent(lang)}&voice=${voice}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return typeof json?.url === "string" ? json.url : null;
  } catch {
    return null;
  }
}

// Speaks `text` in `lang` with the HD cloud voice. The first time this
// exact text is ever requested anywhere, it's recorded first (a second or
// two) and then played. If it can't be played, the learner gets a retry
// prompt -- never a robotic stand-in voice. Cancels anything already
// playing first so rapid taps (flipping through flashcards, tapping
// several words) don't pile up overlapping audio. `rate` below 1 slows
// playback down (dictation's "slow" replay).
// A Portuguese sentence keeps its sentence punctuation, so a question
// rises and commas pause instead of the words running together flat.
// Single words (and every other course's text) share the stripped clip.
function speechText(text: string, lang: SpeechLang): string {
  if (lang === "pt-BR" && /\S\s+\S/.test(text.trim())) return text.replace(/[¿¡"“”()\[\]]/g, "").trim();
  return stripForSpeech(text);
}

export function speak(text: string, requestedLang: SpeechLang, rate = 1, voiceOverride?: PronunciationVoice) {
  const clean = speechText(text, requestedLang);
  if (!clean) return;

  stopReadAloud();
  stopPlayback();
  lastStartedAt = Date.now();
  // stopReadAloud() just bumped this; a later tap bumps it again, so a
  // tap still waiting on the network can tell it's been superseded.
  const run = readAloudRun;
  const current = () => run === readAloudRun;

  void (async () => {
    // Waits for the account's saved voice (loaded once, at app start), so
    // the voice never changes partway through a lesson.
    await Promise.all([loadPronunciationPrefs(), loadSpanishVariety()]);
    if (!current() || !pronunciationEnabled) return;
    const lang = voiceLang(requestedLang);
    if (currentStatus().state === "failed") setStatus({ state: "idle" });
    const cancelLoading = startLoading(current);
    const ok = await playCloud(clean, lang, voiceOverride ?? preferredVoice, rate, current);
    cancelLoading();
    if (!current()) return;
    setStatus(ok ? { state: "idle" } : { state: "failed", retry: () => speak(text, requestedLang, rate, voiceOverride) });
  })();
}

/** Plays a short English sample in `voice`, for the Settings voice picker. */
export function previewVoice(voice: PronunciationVoice): void {
  speak(VOICE_PREVIEW_TEXT, ENGLISH_LANG, 1, voice);
}

/** Plays the HD clip, recording it first if nobody has asked for this text
 * before. True when it played (or a newer tap took over). */
async function playCloud(
  clean: string,
  lang: SpeechLang,
  voice: PronunciationVoice,
  rate: number,
  current: () => boolean
): Promise<boolean> {
  await ensureAudioMode();
  const cachedUrl = audioUrl(clean, lang, voice);
  if (!current()) return true;
  if (replayKept(cachedUrl, rate)) return true;
  // Start loading the clip straight away, and (unless it's known to
  // exist) check in parallel that it's there: one round trip, not two.
  const playing = tryPlayRemote(cachedUrl, rate);
  if (!knownClips.has(cachedUrl)) {
    const cached = await clipExists(cachedUrl);
    if (!current()) return true;
    if (!cached) {
      // Nobody has asked for this text yet: have the clip recorded, then
      // play it.
      dropCurrentPlayer();
      const generated = await generate(clean, lang, voice, cachedUrl);
      if (!current()) return true;
      if (!generated) return false;
      return (await tryPlayRemote(generated, rate)) || !current();
    }
  }
  if (await playing) {
    knownClips.add(cachedUrl);
    return true;
  }
  return !current();
}

// Clips being fetched ahead of a tap, and ones found not to exist.
const prefetching = new Set<string>();
const prefetchMissing = new Set<string>();

/** Loads the clip for `text` before it is tapped (call it when the text
 * appears or on touch-down), so the tap plays at once instead of after a
 * download. Does nothing for a clip that isn't cached yet: those are made
 * on the first tap, not for every word on screen. */
export function prefetchSpeech(text: string, requestedLang: SpeechLang): void {
  if (!pronunciationEnabled) return;
  const clean = speechText(text, requestedLang);
  const lang = voiceLang(requestedLang);
  if (!clean) return;
  const url = audioUrl(clean, lang, preferredVoice);
  if (tapPlayers.has(url) || prefetching.has(url) || prefetchMissing.has(url)) return;
  prefetching.add(url);
  try {
    const player = createAudioPlayer(url);
    const sub = player.addListener("playbackStatusUpdate", (status: AudioStatus) => {
      if (status.error) {
        sub.remove();
        prefetching.delete(url);
        prefetchMissing.add(url);
        try {
          player.remove();
        } catch {}
      } else if (status.isLoaded) {
        sub.remove();
        prefetching.delete(url);
        knownClips.add(url);
        keepPlayer(url, player);
      }
    });
  } catch {
    prefetching.delete(url);
  }
}

// iOS only records while the audio session allows it, and while it does,
// playback goes to the quiet earpiece -- so the speak exercise turns
// recording on just for the recording and off again straight after.
export async function setRecordingMode(on: boolean): Promise<void> {
  try {
    await setAudioModeAsync(
      on
        ? { playsInSilentMode: true, allowsRecording: true, interruptionMode: "doNotMix" }
        : { playsInSilentMode: true, allowsRecording: false, interruptionMode: "duckOthers" }
    );
  } catch {
    // The recorder reports its own failure; playback keeps its last mode.
  }
}

export function stopSpeaking() {
  stopReadAloud();
  stopPlayback();
}

// ---- Reading a whole text aloud ------------------------------------
// Mirrors readAloud() in the website's src/lib/speech.ts.

// /api/pronounce renders at most 200 characters per clip, and a clip per
// sentence also lets a listener hear the story in natural pieces. Unlike
// speak(), punctuation is kept: it's what gives the voice its pauses and
// question intonation.
const MAX_CLIP_CHARS = 200;

/** Splits a paragraph into sentence-sized pieces for readAloud(). */
export function speechChunks(paragraph: string): string[] {
  const sentences = paragraph.match(/[^.!?…]+(?:[.!?…]+["”»')\]]*|$)/g) ?? [];
  const chunks: string[] = [];
  for (const raw of sentences) {
    let rest = raw.trim();
    while (rest.length > MAX_CLIP_CHARS) {
      const window = rest.slice(0, MAX_CLIP_CHARS);
      const cut = Math.max(window.lastIndexOf(", "), window.lastIndexOf("; "), window.lastIndexOf(": "));
      const at = cut > 40 ? cut + 1 : window.lastIndexOf(" ");
      chunks.push(rest.slice(0, at).trim());
      rest = rest.slice(at).trim();
    }
    // Hangul too, for the Korean course's stories.
    if (/[A-Za-zÁÉÍÓÚÜÑáéíóúüñÄÖäöß\u3040-\u30ff\u4e00-\u9fff\u3130-\u318f\uac00-\ud7af]/.test(rest)) chunks.push(rest);
  }
  return chunks;
}

type ClipResult = "ended" | "failed" | "stopped";

// Bumped by every new readAloud(), stopReadAloud(), speak() and
// stopSpeaking(), so a read-aloud loop can tell it has been replaced.
let readAloudRun = 0;
// Resolves the clip that's playing right now as "stopped".
let stopCurrentClip: (() => void) | null = null;

export function stopReadAloud(): void {
  readAloudRun++;
  const stop = stopCurrentClip;
  stopCurrentClip = null;
  stop?.();
  if (currentStatus().state === "loading") setStatus({ state: "idle" });
}

function playClipToEnd(url: string): Promise<ClipResult> {
  return new Promise((resolve) => {
    let settled = false;
    let started = false;
    let player: AudioPlayer | null = null;
    const finish = (result: ClipResult) => {
      if (settled) return;
      settled = true;
      if (stopCurrentClip === stop) stopCurrentClip = null;
      player?.remove();
      if (currentPlayer === player) currentPlayer = null;
      resolve(result);
    };
    const stop = () => finish("stopped");
    stopCurrentClip = stop;
    try {
      player = createAudioPlayer(url);
    } catch {
      finish("failed");
      return;
    }
    currentPlayer = player;
    player.addListener("playbackStatusUpdate", (status: AudioStatus) => {
      if (status.error) {
        finish(started ? "ended" : "failed");
        return;
      }
      if (status.isLoaded && !started) {
        started = true;
        player?.play();
      }
      if (status.didJustFinish) finish("ended");
    });
    setTimeout(() => {
      if (!started) finish("failed");
    }, PLAY_TIMEOUT_MS);
  });
}

// Makes sure the next clip is already generated and cached while the
// current one plays, so there's no pause between sentences on a story
// nobody has listened to before.
function warmClip(text: string, lang: SpeechLang, voice: PronunciationVoice): void {
  void fetch(audioUrl(text, lang, voice), { method: "HEAD" })
    .then((res) => (res.ok ? null : requestGeneration(text, lang, voice)))
    .catch(() => null);
}

async function playChunk(text: string, lang: SpeechLang, run: number, voice: PronunciationVoice = preferredVoice): Promise<ClipResult> {
  await ensureAudioMode();
  const cachedUrl = audioUrl(text, lang, voice);
  const cached = await clipExists(cachedUrl);
  if (run !== readAloudRun) return "stopped";
  let result: ClipResult = cached ? await playClipToEnd(cachedUrl) : "failed";
  if (result !== "failed") return result;
  if (run !== readAloudRun) return "stopped";
  const generatedUrl = await requestGeneration(text, lang, voice);
  // Stopped (a new screen, a new tap) while the clip was being recorded:
  // it must not start playing now, over whatever came next.
  if (run !== readAloudRun) return "stopped";
  if (generatedUrl) {
    result = await playClipToEnd(generatedUrl);
    if (result !== "failed") return result;
  }
  return run !== readAloudRun ? "stopped" : "failed";
}

/**
 * Reads `chunks` aloud one after another (see speechChunks), with the
 * same cached cloud voice speak() uses and the same device-voice
 * fallback. Calls onChunk(i) as each chunk starts and onChunk(null) when
 * it finishes. Any later speak(), readAloud(), stopReadAloud() or
 * stopSpeaking() call stops it. `voices` optionally picks a cloud voice
 * per chunk (a dialogue with two speakers); unset chunks use the
 * learner's preferred voice.
 */
export function readAloud(
  chunks: string[],
  requestedLang: SpeechLang,
  onChunk: (index: number | null) => void,
  voices?: (PronunciationVoice | undefined)[]
): void {
  stopReadAloud();
  stopPlayback();
  lastStartedAt = Date.now();
  const run = readAloudRun;
  void (async () => {
    await Promise.all([loadPronunciationPrefs(), loadSpanishVariety()]);
    if (run !== readAloudRun) return;
    if (!pronunciationEnabled) {
      onChunk(null);
      return;
    }
    const lang = voiceLang(requestedLang);
    if (currentStatus().state === "failed") setStatus({ state: "idle" });
    for (let i = 0; i < chunks.length; i++) {
      if (run !== readAloudRun) return;
      onChunk(i);
      if (i + 1 < chunks.length) warmClip(chunks[i + 1], lang, voices?.[i + 1] ?? preferredVoice);
      const cancelLoading = startLoading(() => run === readAloudRun);
      const result = await playChunk(chunks[i], lang, run, voices?.[i] ?? preferredVoice);
      cancelLoading();
      if (result === "stopped" || run !== readAloudRun) return;
      if (currentStatus().state === "loading") setStatus({ state: "idle" });
      if (result === "failed") {
        // Stop here and offer to pick up again from this sentence.
        onChunk(null);
        const from = i;
        setStatus({
          state: "failed",
          retry: () =>
            readAloud(chunks.slice(from), requestedLang, (idx) => onChunk(idx === null ? null : idx + from), voices?.slice(from)),
        });
        return;
      }
    }
    onChunk(null);
  })();
}

// ---- Getting a lesson's audio ready before it starts ----------------

export type SpeechItem = { text: string; lang: SpeechLang };

/**
 * Makes sure every clip in `items` exists (recording the ones nobody has
 * asked for yet), so no tap inside the lesson waits on a recording. Calls
 * onProgress(done, total) as it goes; stops early when `cancelled()` turns
 * true. warmSpeech() then loads the clips of the step on screen.
 */
export async function preloadSpeech(
  items: SpeechItem[],
  onProgress?: (done: number, total: number) => void,
  cancelled: () => boolean = () => false
): Promise<void> {
  await Promise.all([loadPronunciationPrefs(), loadSpanishVariety()]);
  if (!pronunciationEnabled) {
    onProgress?.(0, 0);
    return;
  }
  const voice = preferredVoice;
  const jobs = new Map<string, { clean: string; lang: SpeechLang }>();
  for (const item of items) {
    const clean = speechText(item.text, item.lang);
    if (!clean || clean.length > 200 || !HAS_LETTER.test(clean)) continue;
    const lang = voiceLang(item.lang);
    const url = audioUrl(clean, lang, voice);
    if (!knownClips.has(url)) jobs.set(url, { clean, lang });
  }
  const queue = [...jobs.entries()];
  const total = queue.length;
  let done = 0;
  onProgress?.(0, total);
  const worker = async () => {
    for (let job = queue.shift(); job; job = queue.shift()) {
      if (cancelled()) return;
      const [url, { clean, lang }] = job;
      if (await clipExists(url)) knownClips.add(url);
      else if (!cancelled() && (await generate(clean, lang, voice, url))) knownClips.add(url);
      if (knownClips.has(url)) prefetchMissing.delete(url);
      done++;
      onProgress?.(done, total);
    }
  };
  await Promise.all(Array.from({ length: Math.min(8, total) }, worker));
}

const HAS_LETTER = /[A-Za-z\u00C0-\u024F\u3040-\u30FF\u3400-\u9FFF\uAC00-\uD7AF]/;

/** Loads the clips for `items` into players (the step on screen and the
 * next one), so their taps play at once. */
export function warmSpeech(items: SpeechItem[]): void {
  const seen = new Set<string>();
  for (const item of items) {
    const key = `${item.lang}|${item.text}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (seen.size > 40) break;
    prefetchSpeech(item.text, item.lang);
  }
}
