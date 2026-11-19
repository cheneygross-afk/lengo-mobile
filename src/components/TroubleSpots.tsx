// "You keep missing these": Spanish lesson topics whose questions keep going
// wrong (3+ misses after the lesson was passed, and not yet 3 right in a row
// since -- troubleConcepts in curriculum/memory.ts), each with a button back to
// the lesson. Same rule and wording as the website's TroubleSpots. Shown on
// Today's review and at the end of a Spanish lesson.
import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { loadAttempts } from "@/lib/attempts";
import { conceptCourse, masteryFromAttempts, troubleConcepts } from "@/lib/curriculum/memory";
import { courseOfLevelPath } from "@/lib/courses";
import { getMissedQuestions } from "@/lib/lessons/missedQuestions";
import { SPANISH_REVIEW_TRACKS } from "@/lib/todaysReview";

export type TroubleSpot = { levelPath: string; slug: string; title: string; number?: number; track: string };

const TRACK_LABEL: Record<string, string> = {
  a1: "Beginner",
  a2: "Elementary",
  b1: "Intermediate",
  b2: "Advanced",
  c1: "Mastery",
  c2: "Professional & Academic",
  "cosas-coloquiales": "Cosas Coloquiales",
};

function prettySlug(slug: string): string {
  const s = slug.replace(/-part-\d+$/, "").replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** The Spanish lessons the learner keeps missing questions from, shakiest first. */
export async function spanishTroubleSpots(exclude?: string): Promise<TroubleSpot[]> {
  const [attempts, pools] = await Promise.all([loadAttempts(), Promise.all(SPANISH_REVIEW_TRACKS.map((lp) => getMissedQuestions(lp)))]);
  const titles = new Map<string, { title: string; number: number }>();
  SPANISH_REVIEW_TRACKS.forEach((lp, i) => {
    for (const q of pools[i]) titles.set(`${lp}/${q.lessonSlug}`, { title: q.lessonTitle, number: q.lessonNumber });
  });
  const out: TroubleSpot[] = [];
  for (const c of troubleConcepts(masteryFromAttempts(attempts))) {
    if (conceptCourse(c, courseOfLevelPath) !== "es") continue;
    const m = /^lesson:([^/]+)\/(.+)$/.exec(c);
    if (!m || m[2] === exclude) continue;
    const known = titles.get(`${m[1]}/${m[2]}`);
    out.push({ levelPath: m[1], slug: m[2], title: known?.title ?? prettySlug(m[2]), number: known?.number, track: TRACK_LABEL[m[1]] ?? m[1] });
  }
  return out;
}

export default function TroubleSpots({
  exclude,
  max = 5,
  variant = "review",
  onOpen,
  refreshKey,
}: {
  exclude?: string;
  max?: number;
  variant?: "review" | "lesson";
  onOpen: (slug: string) => void;
  // Change it to read the attempts log again (e.g. when a screen regains focus).
  refreshKey?: unknown;
}) {
  const [spots, setSpots] = useState<TroubleSpot[]>([]);
  useEffect(() => {
    let alive = true;
    spanishTroubleSpots(exclude)
      .then((list) => alive && setSpots(list.slice(0, max)))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [exclude, max, refreshKey]);
  if (!spots.length) return null;
  return (
    <View style={s.box}>
      <Text style={s.title}>{variant === "lesson" ? "Before you move on: you keep missing these" : "You keep missing these"}</Text>
      <Text style={s.body}>Going over the lesson again now usually helps more than another round of questions. It only takes a few minutes.</Text>
      {spots.map((sp) => (
        <View key={`${sp.levelPath}/${sp.slug}`} style={s.row}>
          <Text style={s.lesson}>
            <Text style={s.track}>
              {sp.track}
              {sp.number ? ` · Lesson ${sp.number}` : ""}:{" "}
            </Text>
            {sp.title}
          </Text>
          <Pressable style={s.btn} onPress={() => onOpen(sp.slug)} accessibilityRole="button">
            <Text style={s.btnText}>Go over it now →</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  box: { borderRadius: 16, borderWidth: 1, borderColor: "#f59e0b66", backgroundColor: "#f59e0b1a", padding: 14, marginVertical: 12, alignSelf: "stretch" },
  title: { fontSize: 15, fontWeight: "700", color: "#92400e", marginBottom: 4 },
  body: { fontSize: 13.5, lineHeight: 19, color: "#2A1513b3", marginBottom: 8 },
  row: { marginTop: 6 },
  lesson: { fontSize: 14.5, lineHeight: 20, color: "#2A1513" },
  track: { color: "#2A15138c" },
  btn: { alignSelf: "flex-start", marginTop: 6, borderWidth: 1.5, borderColor: "#8B0000", borderRadius: 999, paddingVertical: 7, paddingHorizontal: 14 },
  btnText: { color: "#8B0000", fontWeight: "700", fontSize: 14 },
});
