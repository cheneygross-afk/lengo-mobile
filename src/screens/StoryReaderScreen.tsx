import { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { findStory } from "@/lib/stories/registry";
import { toExercises } from "@/lib/stories/types";
import ExerciseBlock from "@/components/ExerciseBlock";
import HighlightableText from "@/components/HighlightableText";
import { langForLevelPath, readAloud, speechChunks, stopReadAloud } from "@/lib/speech";
import { glossKey, glossLookup, storyGlosses, storyKeyWords } from "@/lib/stories/glosses";
import TapText from "@/components/TapText";
import type { StoryGloss } from "@/lib/stories/types";
import { useAuth } from "@/lib/auth/AuthContext";
import { supabase } from "@/lib/supabase/client";
import {
  deleteLessonHighlight,
  loadLessonHighlights,
  saveLessonHighlight,
  type LessonHighlight,
} from "@/lib/highlights";
import { highlightMarkColor } from "@/lib/highlightColors";
import { buildFlashcardEntry, loadFlashcards, makeFlashcardId, saveFlashcards } from "@/lib/flashcards/store";
import { fetchTranslation } from "@/lib/translate/api";
import { markStoryRead } from "@/lib/storiesRead";
import { readinessLabel } from "@/lib/stories/pickStory";

type Props = NativeStackScreenProps<AppStackParamList, "StoryReader">;

// Mobile port of the web app's StoryReader -- no length cap (stories can
// run however long they run, unlike lessons), same comprehension-check
// pattern reusing ExerciseBlock in multiple-choice mode.
//
// The website's StoryReader doesn't have highlighting yet, so there's no
// existing blockKey scheme to match here the way LessonRunnerScreen
// matches LessonRunner.tsx -- paragraphs are keyed simply as `p${i}`.
// lesson_highlights doesn't care whether lessonSlug names a lesson or a
// story, so this reuses it exactly as-is (same table, same columns).
export default function StoryReaderScreen({ route, navigation }: Props) {
  const { slug } = route.params;
  // Looks the slug up across every level (see stories/registry.ts); "Next"
  // stays within the story's own level, same as the website's reader.
  const found = useMemo(() => findStory(slug), [slug]);
  const story = found?.story;
  const nextStory = found?.next;
  const exercises = useMemo(() => (story ? toExercises(story.questions) : []), [story]);
  // Mirrors the folder names the website's readings routes use
  // (/readings/a1, /readings/c1c2, ...).
  const levelPath = found?.level.levelPath ?? "a1";

  // Reading aids, same as the website's StoryText: a Listen control that
  // reads the story sentence by sentence (the paragraph being read is
  // shaded), and dotted-underlined glossed words whose English meaning
  // shows in a card when tapped.
  const glosses = useMemo(() => (story ? storyGlosses(story.slug) : []), [story]);
  const lookup = useMemo(() => glossLookup(glosses), [glosses]);
  // Pre-reading key vocabulary for A1/A2 stories (the website shows the same).
  const keyWords = useMemo(
    () => (story && (story.level === "A1" || story.level === "A2") ? storyKeyWords(story.paragraphs, glosses) : []),
    [story, glosses]
  );
  const chunks = useMemo(
    () => (story ? story.paragraphs.flatMap((p, pi) => speechChunks(p).map((text) => ({ text, pi }))) : []),
    [story]
  );
  const [playing, setPlaying] = useState<number | null>(null);
  const [shownGloss, setShownGloss] = useState<StoryGloss | null>(null);
  const [showWordList, setShowWordList] = useState(false);
  const playingParagraph = playing == null ? null : chunks[playing]?.pi ?? null;

  useEffect(() => {
    setPlaying(null);
    setShownGloss(null);
    return stopReadAloud;
  }, [slug]);

  function listenFrom(paragraph: number) {
    const start = chunks.findIndex((c) => c.pi === paragraph);
    if (start === -1) return;
    readAloud(
      chunks.slice(start).map((c) => c.text),
      langForLevelPath(levelPath),
      (i) => setPlaying(i == null ? null : i + start)
    );
  }

  function toggleListen() {
    if (playing != null) {
      stopReadAloud();
      setPlaying(null);
    } else {
      listenFrom(0);
    }
  }

  const [answered, setAnswered] = useState<Record<number, boolean>>({});
  const answeredCount = Object.keys(answered).length;
  const correctCount = Object.values(answered).filter(Boolean).length;
  const allAnswered = answeredCount === exercises.length && exercises.length > 0;

  // Finishing the comprehension check counts as reading the story, so the
  // end of a lesson stops suggesting it (see LessonNextSteps).
  useEffect(() => {
    if (allAnswered && story) void markStoryRead(story.slug);
  }, [allAnswered, story?.slug]);

  // Long-pressing a word saves it to Flashcards, filed under this story the
  // way a lesson's starred examples are filed under the lesson. The meaning
  // comes from the story's gloss when there is one, otherwise from the same
  // /api/translate lookup the translate bar uses.
  const [saveNotice, setSaveNotice] = useState<{ es: string; message: string } | null>(null);

  async function saveWord(es: string, en: string) {
    if (!story) return;
    const all = await loadFlashcards();
    const id = makeFlashcardId(story.slug, es);
    if (!all[id]) {
      all[id] = buildFlashcardEntry({
        lessonSlug: story.slug,
        lessonTitle: story.title,
        es,
        en,
        // Flashcards groups cards by lesson level, which has no "C1/C2".
        level: story.level === "C1/C2" ? "C1" : story.level,
        levelPath,
      });
      await saveFlashcards(all);
    }
    setSaveNotice({ es, message: `Saved to flashcards: ${en}` });
  }

  async function saveLongPressedWord(word: string) {
    const key = glossKey(word);
    if (!key) return;
    setShownGloss(null);
    const gloss = lookup.get(key);
    if (gloss) {
      await saveWord(gloss.es, gloss.en);
      return;
    }
    setSaveNotice({ es: key, message: "Saving…" });
    const outcome = await fetchTranslation(key, "es-en");
    if (outcome.ok) await saveWord(key, outcome.result.senses[0].translation);
    else setSaveNotice({ es: key, message: outcome.error });
  }

  // Same highlighting account feature as LessonRunnerScreen (see
  // src/lib/highlights.ts) -- read the learner's chosen color once per
  // account, and this story's saved highlights whenever the story or
  // login state changes.
  const { session } = useAuth();
  const loggedIn = !!session?.user?.id;
  const [highlightColor, setHighlightColor] = useState<string | null>(null);
  const [highlights, setHighlights] = useState<LessonHighlight[]>([]);
  const highlightMark = highlightMarkColor(highlightColor);

  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) {
      setHighlightColor(null);
      return;
    }
    let cancelled = false;
    supabase
      .from("profiles")
      .select("highlight_color")
      .eq("id", userId)
      .single()
      .then(({ data }) => {
        if (!cancelled) setHighlightColor(data?.highlight_color ?? null);
      });
    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  useEffect(() => {
    if (!loggedIn || !story) {
      setHighlights([]);
      return;
    }
    loadLessonHighlights(story.slug).then(setHighlights);
  }, [story?.slug, loggedIn]);

  function highlightsFor(blockKey: string): LessonHighlight[] {
    return highlights.filter((h) => h.blockKey === blockKey);
  }

  async function addHighlight(blockKey: string, blockText: string, start: number, end: number, text: string) {
    if (!story) return;
    const saved = await saveLessonHighlight({
      lessonSlug: story.slug,
      levelPath,
      blockKey,
      start,
      end,
      text,
      blockText,
      existing: highlightsFor(blockKey),
    });
    if (saved) {
      const fresh = await loadLessonHighlights(story.slug);
      setHighlights(fresh);
    }
  }

  async function removeHighlight(id: string) {
    const ok = await deleteLessonHighlight(id);
    if (ok) {
      setHighlights((prev) => prev.filter((h) => h.id !== id));
    }
  }

  if (!story) {
    return (
      <View style={s.center}>
        <Text>Story not found.</Text>
      </View>
    );
  }

  return (
    <View style={s.container}>
      <ScrollView style={s.container} contentContainerStyle={s.content}>
        <Text style={s.kicker}>
          {story.level} · Short story
          {readinessLabel(story.slug) ? ` · ${readinessLabel(story.slug)}` : ""}
        </Text>
        <Text style={s.title}>{story.title}</Text>
        <Text style={s.subtitle}>{story.subtitle}</Text>

        <View style={s.listenRow}>
          <Pressable style={s.listenButton} onPress={toggleListen} accessibilityRole="button">
            <Text style={s.listenButtonText}>{playing != null ? "■ Stop" : "▶ Listen to the story"}</Text>
          </Pressable>
        </View>

        {keyWords.length > 0 && (
          <View style={s.keyBox}>
            <Text style={s.wordBoxTitle}>Key words in this story</Text>
            {keyWords.map((g) => (
              <Text key={g.es + g.forms.join()} style={s.wordRow}>
                <TapText text={g.es} lang={langForLevelPath(levelPath)} mode="target" style={s.wordEs} />
                <Text> · </Text>
                <TapText text={g.en} lang="en-US" mode="english" />
              </Text>
            ))}
          </View>
        )}

        {glosses.length > 0 && (
          <View style={s.wordBox}>
            <Pressable onPress={() => setShowWordList((v) => !v)} accessibilityRole="button">
              <Text style={s.wordBoxTitle}>
                {showWordList ? "▾" : "▸"} Words to know ({glosses.length})
              </Text>
            </Pressable>
            {showWordList &&
              glosses.map((g) => (
                <Text key={g.es + g.forms.join()} style={s.wordRow}>
                  <Text style={s.wordEs}>{g.es}</Text> · {g.en}
                </Text>
              ))}
            {!showWordList && <Text style={s.wordHint}>Tap a dotted word in the story for its meaning.</Text>}
          </View>
        )}
        <Text style={s.saveHint}>Long-press any word to save it to your flashcards.</Text>

        <View style={s.paragraphs}>
          {story.paragraphs.map((p, i) => {
            const blockKey = `p${i}`;
            return (
              <View key={i} style={playingParagraph === i ? s.playingParagraph : null}>
                <HighlightableText
                  text={p}
                  blockKey={blockKey}
                  highlights={highlightsFor(blockKey)}
                  enabled={loggedIn}
                  markColor={highlightMark}
                  lang={langForLevelPath(levelPath)}
                  textStyle={s.paragraph}
                  onAdd={(start, end, selected) => addHighlight(blockKey, p, start, end, selected)}
                  onRemove={removeHighlight}
                  isMarked={(word) => lookup.has(glossKey(word))}
                  onWordTap={(word) => {
                    setSaveNotice(null);
                    setShownGloss(lookup.get(glossKey(word)) ?? null);
                  }}
                  onWordLongPress={saveLongPressedWord}
                />
                <Pressable
                  onPress={() => listenFrom(i)}
                  accessibilityRole="button"
                  accessibilityLabel={`Listen from paragraph ${i + 1}`}
                >
                  <Text style={s.fromHere}>▶ From here</Text>
                </Pressable>
              </View>
            );
          })}
        </View>

        <View style={s.divider} />
        <Text style={s.checkHeading}>Comprehension check</Text>
        <Text style={s.checkMeta}>
          {answeredCount}/{exercises.length} answered
          {answeredCount > 0 ? ` · ${correctCount} correct` : ""}
        </Text>

        {exercises.map((exercise, i) => (
          <ExerciseBlock
            key={i}
            exercise={exercise}
            index={i}
            lang={langForLevelPath(levelPath)}
            onAnswered={(correct) => setAnswered((prev) => ({ ...prev, [i]: correct }))}
          />
        ))}

        {allAnswered && (
          <View style={s.doneBox}>
            <Text style={s.doneTitle}>Nice work!</Text>
            <Text style={s.doneBody}>
              You got {correctCount} of {exercises.length} right.
            </Text>
            <Pressable
              style={s.nextButton}
              onPress={() =>
                nextStory
                  ? navigation.replace("StoryReader", { slug: nextStory.slug })
                  : navigation.goBack()
              }
            >
              <Text style={s.nextButtonText}>
                {nextStory ? `Next: ${nextStory.title} →` : "Back to readings"}
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
      {shownGloss && (
        <Pressable style={s.glossCard} onPress={() => setShownGloss(null)} accessibilityRole="button">
          <Text style={s.glossEs}>{shownGloss.es}</Text>
          <Text style={s.glossEn}>{shownGloss.en}</Text>
          <Pressable
            onPress={() => {
              const g = shownGloss;
              setShownGloss(null);
              void saveWord(g.es, g.en);
            }}
            accessibilityRole="button"
            style={s.glossSave}
          >
            <Text style={s.glossSaveText}>+ Save to flashcards</Text>
          </Pressable>
        </Pressable>
      )}
      {saveNotice && !shownGloss && (
        <Pressable style={s.glossCard} onPress={() => setSaveNotice(null)} accessibilityRole="button">
          <Text style={s.glossEs}>{saveNotice.es}</Text>
          <Text style={s.glossEn}>{saveNotice.message}</Text>
        </Pressable>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 16, paddingBottom: 48 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  kicker: { fontSize: 11, color: "#00000066", textTransform: "uppercase", letterSpacing: 0.5 },
  title: { fontSize: 22, fontWeight: "800", color: "#000", marginTop: 4 },
  subtitle: { fontSize: 14, color: "#00000099", marginTop: 6, marginBottom: 16 },
  paragraphs: { gap: 12, marginBottom: 20 },
  playingParagraph: { backgroundColor: "#FDE68A99", borderRadius: 6, marginHorizontal: -6, paddingHorizontal: 6 },
  fromHere: { fontSize: 12, color: "#00000066", marginTop: 4 },
  listenRow: { flexDirection: "row", marginBottom: 12 },
  listenButton: { borderWidth: 1, borderColor: "#00000033", borderRadius: 999, paddingVertical: 8, paddingHorizontal: 16 },
  listenButtonText: { fontSize: 14, fontWeight: "600", color: "#000" },
  wordBox: { borderWidth: 1, borderColor: "#00000022", borderRadius: 12, padding: 12, marginBottom: 16, gap: 4 },
  keyBox: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#00000018", borderRadius: 12, padding: 12, marginBottom: 12, gap: 4 },
  wordBoxTitle: { fontSize: 14, fontWeight: "600", color: "#000" },
  wordHint: { fontSize: 12, color: "#00000080" },
  wordRow: { fontSize: 13, color: "#000000aa" },
  wordEs: { fontWeight: "600", color: "#000" },
  glossCard: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 24,
    backgroundColor: "#111",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  glossEs: { color: "#fff", fontWeight: "700", fontSize: 15 },
  glossEn: { color: "#ffffffcc", fontSize: 14, marginTop: 2 },
  glossSave: { marginTop: 8, alignSelf: "flex-start" },
  glossSaveText: { color: "#fff", fontWeight: "700", fontSize: 14, textDecorationLine: "underline" },
  saveHint: { fontSize: 12, color: "#00000080", marginBottom: 12 },
  paragraph: { fontSize: 15, color: "#000000dd", lineHeight: 23 },
  divider: { height: 1, backgroundColor: "#00000018", marginBottom: 16 },
  checkHeading: { fontSize: 17, fontWeight: "700", color: "#000", marginBottom: 2 },
  checkMeta: { fontSize: 13, color: "#00000099", marginBottom: 12 },
  doneBox: {
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#16a34a4d",
    backgroundColor: "#16a34a0d",
    padding: 16,
    alignItems: "center",
    gap: 8,
  },
  doneTitle: { fontSize: 16, fontWeight: "700", color: "#15803d" },
  doneBody: { fontSize: 13, color: "#000000cc" },
  nextButton: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 12, paddingHorizontal: 20, marginTop: 4 },
  nextButtonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
});
