// Which linked videos this device has opened, and the latest result of
// each video's quiz (src/lib/lessons/videoQuizzes.ts) -- the mobile port of
// the website's src/lib/videoQuizProgress.ts (same key and shape), kept in
// AsyncStorage like the exam scores (examProgress.ts). Loaded once into
// memory and shared by every card and quiz on screen.
import { useEffect, useState } from "react";
import type { VideoQuizResult } from "@/lib/lessons/videoQuizzes";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

const KEY = "deepend-video-quizzes";

export type VideoQuizStore = {
  /** videoId -> when the learner last opened it on YouTube. */
  opened: Record<string, number>;
  /** videoId -> latest quiz result. */
  results: Record<string, VideoQuizResult>;
};

const EMPTY: VideoQuizStore = { opened: {}, results: {} };
let store: VideoQuizStore = EMPTY;
let loading: Promise<void> | null = null;
const listeners = new Set<(s: VideoQuizStore) => void>();

function load(): Promise<void> {
  if (!loading) {
    loading = readJSON<Partial<VideoQuizStore>>(KEY, {}).then((p) => {
      const loaded: VideoQuizStore = {
        opened: p && typeof p.opened === "object" && p.opened ? p.opened : {},
        results: p && typeof p.results === "object" && p.results ? p.results : {},
      };
      // Anything recorded before the read finished wins over what was read.
      store = {
        opened: { ...loaded.opened, ...store.opened },
        results: { ...loaded.results, ...store.results },
      };
      listeners.forEach((l) => l(store));
    });
  }
  return loading;
}

function update(change: (s: VideoQuizStore) => VideoQuizStore): void {
  store = change(store);
  listeners.forEach((l) => l(store));
  void load().then(() => writeJSON(KEY, store));
}

export function markVideoOpened(videoId: string): void {
  update((s) => ({ ...s, opened: { ...s.opened, [videoId]: Date.now() } }));
}

export function saveVideoQuizResult(videoId: string, correct: number, total: number): void {
  update((s) => ({ ...s, results: { ...s.results, [videoId]: { correct, total, finishedAt: Date.now() } } }));
}

export function useVideoQuizStore(): VideoQuizStore {
  const [s, setS] = useState(store);
  useEffect(() => {
    listeners.add(setS);
    void load();
    // A write may have landed between render and subscribing.
    setS(store);
    return () => {
      listeners.delete(setS);
    };
  }, []);
  return s;
}
