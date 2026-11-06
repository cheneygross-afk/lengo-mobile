// The state behind the on-screen "Loading audio..." / "Couldn't play the
// audio -- Retry" prompt (SpeechStatusToast). Mirrors the website's
// src/lib/speechStatus.ts.
export type SpeechStatus = { state: "idle" } | { state: "loading" } | { state: "failed"; retry: () => void };

let status: SpeechStatus = { state: "idle" };
const listeners = new Set<(s: SpeechStatus) => void>();

export function getSpeechStatus(): SpeechStatus {
  return status;
}

export function setSpeechStatus(next: SpeechStatus): void {
  status = next;
  for (const listener of listeners) listener(next);
}

/** Listens for audio loading/failure, for the on-screen retry prompt. */
export function subscribeSpeechStatus(listener: (s: SpeechStatus) => void): () => void {
  listeners.add(listener);
  listener(status);
  return () => {
    listeners.delete(listener);
  };
}
