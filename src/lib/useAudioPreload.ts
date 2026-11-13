// Gets every clip a quiz, drill or tool can play ready before the learner
// starts it, the way the lesson screen does (LessonRunnerScreen): a short
// "Getting the audio ready" wait (components/AudioGate), then no tap or
// auto-played answer waits on a recording or a download.
//
//   const audio = useAudioPreload(key, () => items);
//   if (!audio.ready) return <AudioGate {...audio} />;
//   useWarmSpeech(audio.ready, () => [...currentItems, ...nextItems], [index]);
//
// `key` changes when the set of clips changes (a new drill, a new story);
// null means nothing to load yet. With `background`, nothing waits: the
// clips are made ready behind the page (reference pages people browse).
import { useEffect, useRef, useState, type DependencyList } from "react";
import { preloadSpeech, warmSpeech, type SpeechItem } from "@/lib/speech";
import { loadSpanishVoiceLists } from "@/lib/spanishVoice";

// "Start now" shows after a few seconds; the wait never runs past the max.
const SKIP_AFTER_MS = 5_000;
const MAX_WAIT_MS = 20_000;

export type AudioPreload = {
  ready: boolean;
  done: number;
  total: number;
  canSkip: boolean;
  skip: () => void;
};

export function useAudioPreload(
  key: string | null,
  items: () => SpeechItem[],
  opts: { background?: boolean } = {}
): AudioPreload {
  const background = !!opts.background;
  // The key whose clips are ready (or whose wait was skipped), so a new
  // key is never shown as ready for even one frame.
  const [readyKey, setReadyKey] = useState<string | null>(null);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [canSkip, setCanSkip] = useState(false);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  useEffect(() => {
    if (key === null) return;
    let live = true;
    setCanSkip(false);
    setProgress({ done: 0, total: 0 });
    const skipTimer = background ? null : setTimeout(() => live && setCanSkip(true), SKIP_AFTER_MS);
    const giveUp = background ? null : setTimeout(() => live && setReadyKey(key), MAX_WAIT_MS);
    void (async () => {
      // Which Spanish words are voiced in Spanish vs English depends on
      // these lists, so they must be in before the items are worked out.
      await loadSpanishVoiceLists().catch(() => {});
      if (!live) return;
      const list = itemsRef.current();
      // The first clips go into players straight away, so even the
      // opening tap (or a skipped wait) plays at once.
      warmSpeech(list.slice(0, 20));
      await preloadSpeech(list, (done, total) => live && setProgress({ done, total }), () => !live);
      if (!live) return;
      setReadyKey(key);
      // Clips that were only just recorded weren't there to load above.
      warmSpeech(list.slice(0, 40));
    })();
    return () => {
      live = false;
      if (skipTimer) clearTimeout(skipTimer);
      if (giveUp) clearTimeout(giveUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return {
    ready: background || (key !== null && readyKey === key),
    done: progress.done,
    total: progress.total,
    canSkip,
    skip: () => setReadyKey(key),
  };
}

/** Loads the clips of what is on screen now and what comes next into
 * players, so their taps play at once. Re-runs when `deps` change. */
export function useWarmSpeech(ready: boolean, items: () => SpeechItem[], deps: DependencyList): void {
  useEffect(() => {
    if (ready) warmSpeech(items());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, ...deps]);
}
