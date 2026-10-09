import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { getCompletedMap, syncCompletedMapFromCloud } from "@/lib/lessons/completion";
import { displayTitle, requiredLessons } from "@/lib/lessons/levels";
import {
  FRENCH_LEVELS,
  loadFrenchLevel,
  nextFrenchLesson,
  type FrenchLevelKey,
  type FrenchLevelPath,
} from "@/lib/lessons/french";
import type { Lesson } from "@/lib/lessons/types";

type Props = NativeStackScreenProps<AppStackParamList, "FrenchLevels">;

type Next = { levelPath: FrenchLevelPath; code: string; lesson: Lesson; title: string; unitLabel?: string };

// The French course's level picker -- mirrors the website's /lessons/fr
// page and this app's SpanishLevelsScreen: A1 through C2, lined up with the
// DELF/DALF exams, then the Colloquial French & Culture module, with a
// "Continue" card for where the learner left off. Each level's lessons are
// loaded on demand (lessons/french.ts), so the counts fill in as they load.
export default function FrenchLevelsScreen({ navigation }: Props) {
  // Required lessons done / in each level; undefined until that level loads.
  const [counts, setCounts] = useState<Partial<Record<FrenchLevelKey, { done: number; total: number }>>>({});
  // undefined while working it out, null once A1-C2 are all done.
  const [next, setNext] = useState<Next | null | undefined>(undefined);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      const load = async (read: (levelPath: string) => Promise<Record<string, boolean>>) => {
        const maps = await Promise.all(FRENCH_LEVELS.map((l) => read(l.levelPath)));
        if (cancelled) return;
        const byPath = Object.fromEntries(FRENCH_LEVELS.map((l, i) => [l.levelPath, maps[i]])) as Record<
          FrenchLevelPath,
          Record<string, boolean>
        >;
        const found = await nextFrenchLesson(byPath);
        if (cancelled) return;
        if (found) {
          const data = await loadFrenchLevel(found.level.key);
          if (cancelled) return;
          setNext({
            levelPath: found.level.levelPath,
            code: found.level.code,
            lesson: found.lesson,
            title: displayTitle(found.lesson, data.lessons),
            unitLabel: found.unit?.label,
          });
        } else setNext(null);
        // One level at a time, so the first counts show up quickly.
        for (const level of FRENCH_LEVELS) {
          const data = await loadFrenchLevel(level.key);
          if (cancelled) return;
          const required = requiredLessons(data.lessons);
          const done = required.filter((l) => byPath[level.levelPath][l.slug]).length;
          setCounts((prev) => ({ ...prev, [level.key]: { done, total: required.length } }));
        }
      };
      // Local first, then again once completions from the website (or
      // another device) are merged in, as the Spanish levels do.
      void load(getCompletedMap).then(() => load(syncCompletedMapFromCloud));
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>Bite-sized, self-paced lessons organized by level, from DELF A1 to DALF C2.</Text>
      {next && (
        <Pressable
          style={styles.continueCard}
          onPress={() => navigation.navigate("LessonRunner", { slug: next.lesson.slug, levelPath: next.levelPath })}
        >
          <Text style={styles.continueKicker}>
            {next.levelPath === "fr/a1" && next.lesson.number === 1 ? "Start" : "Continue"} · {next.code}
            {next.unitLabel ? ` · ${next.unitLabel}` : ""}
          </Text>
          <Text style={styles.continueTitle}>
            Lesson {next.lesson.number}: {next.title} →
          </Text>
        </Pressable>
      )}
      {next === null && <Text style={styles.doneNote}>You've finished every required lesson from A1 to C2.</Text>}
      <View style={styles.cards}>
        {FRENCH_LEVELS.map((level) => {
          const count = counts[level.key];
          return (
            <Pressable
              key={level.key}
              style={styles.card}
              onPress={() => navigation.navigate("LessonList", { frenchLevel: level.key })}
            >
              <View style={styles.cardTop}>
                <Text style={styles.cardName}>{level.label}</Text>
                {level.exam ? <Text style={styles.cardExam}>{level.exam}</Text> : null}
              </View>
              <Text style={styles.cardDescription}>{level.description}</Text>
              <Text style={styles.cardMeta}>
                {count ? `${count.done} of ${count.total} required completed` : "Loading…"}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 14, color: "#00000099", marginBottom: 20 },
  continueCard: { backgroundColor: "#000", borderRadius: 14, padding: 16, marginBottom: 20 },
  continueKicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#ffffffaa" },
  continueTitle: { fontSize: 16, fontWeight: "700", color: "#fff", marginTop: 4 },
  doneNote: { fontSize: 14, color: "#15803d", fontWeight: "600", marginBottom: 20 },
  cards: { gap: 14 },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
  },
  cardTop: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", gap: 8, marginBottom: 6 },
  cardName: { fontSize: 18, fontWeight: "800", color: "#7A1F1F", flexShrink: 1 },
  cardExam: { fontSize: 12, fontWeight: "700", color: "#00000066" },
  cardDescription: { fontSize: 14, color: "#000000cc", lineHeight: 19, marginBottom: 10 },
  cardMeta: { fontSize: 12, color: "#00000066", textTransform: "uppercase" },
});
