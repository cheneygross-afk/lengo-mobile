// Remembers the lesson player's listen-first toggle (see listenFirst.ts)
// on this device. Same key as the website's localStorage setting.
import { useEffect, useState } from "react";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

const KEY = "deepend-listen-first";
let cached: boolean | null = null;
const listeners = new Set<(on: boolean) => void>();

export async function getListenFirst(): Promise<boolean> {
  if (cached === null) cached = (await readJSON<boolean>(KEY, false)) === true;
  return cached;
}

export async function setListenFirst(on: boolean): Promise<void> {
  cached = on;
  listeners.forEach((l) => l(on));
  await writeJSON(KEY, on);
}

export function useListenFirst(): boolean {
  const [on, setOn] = useState(cached ?? false);
  useEffect(() => {
    let alive = true;
    void getListenFirst().then((v) => alive && setOn(v));
    listeners.add(setOn);
    return () => {
      alive = false;
      listeners.delete(setOn);
    };
  }, []);
  return on;
}
