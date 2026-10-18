import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProgressBar from "@/ui/ProgressBar";
import { card, cardShadow, colors, fonts, levelColor } from "@/ui/theme";
import type { AppStackParamList } from "@/navigation/types";
import { getCompletedMap, syncCompletedMapFromCloud } from "@/lib/lessons/completion";
import { displayTitle, requiredLessons } from "@/lib/lessons/levels";
import {
  PORTUGUESE_LEVELS,
  loadPortugueseLevel,
  nextPortugueseLesson,
  type PortugueseLevelKey,
  type PortugueseLevelPath,
} from "@/lib/lessons/portuguese";
import type { Lesson } from "@/lib/lessons/types";
import TapText from "@/components/TapText";
import { PORTUGUESE_LANG } from "@/lib/speech";

type Props = NativeStackScreenProps<AppStackParamList, "PortugueseLevels">;

type Next = { levelPath: PortugueseLevelPath; label: string; lesson: Lesson; title: string; unitLabel?: string };

// The Brazilian Portuguese course's level picker -- mirrors the website's
// /lessons/pt page and PortugueseLevelsScreen: A1 through C2 (B1-C2 lined up
// with the Celpe-Bras certificate levels), with a "Continue" card for where
// the learner left off. Each level's lessons are loaded on demand
// (lessons/portuguese.ts), so the counts fill in as they load.
export default function PortugueseLevelsScreen({ navigation }: Props) {
  // Required lessons done / in each level; undefined until that level loads.
  const [counts, setCounts] = useState<Partial<Record<PortugueseLevelKey, { done: number; total: number }>>>({});
  // undefined while working it out, null once A1-C2 are all done.
  const [next, setNext] = useState<Next | null | undefined>(undefined);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      const load = async (read: (levelPath: string) => Promise<Record<string, boolean>>) => {
        const maps = await Promise.all(PORTUGUESE_LEVELS.map((l) => read(l.levelPath)));
        if (cancelled) return;
        const byPath = Object.fromEntries(PORTUGUESE_LEVELS.map((l, i) => [l.levelPath, maps[i]])) as Record<
          PortugueseLevelPath,
          Record<string, boolean>
        >;
        const found = await nextPortugueseLesson(byPath);
        if (cancelled) return;
        if (found) {
          const data = await loadPortugueseLevel(found.level.key);
          if (cancelled) return;
          setNext({
            levelPath: found.level.levelPath,
            label: found.level.label,
            lesson: found.lesson,
            title: displayTitle(found.lesson, data.lessons),
            unitLabel: found.unit?.label,
          });
        } else setNext(null);
        // One level at a time, so the first counts show up quickly.
        for (const level of PORTUGUESE_LEVELS) {
          const data = await loadPortugueseLevel(level.key);
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
      <Text style={styles.subtitle}>Bite-sized, self-paced Brazilian Portuguese lessons organized by level, from your first Oi to the Mastery level.</Text>
      {next && (
        <Pressable
          style={styles.continueCard}
          onPress={() => navigation.navigate("LessonRunner", { slug: next.lesson.slug, levelPath: next.levelPath })}
        >
          <Text style={styles.continueKicker}>
            {next.levelPath === "pt/a1" && next.lesson.number === 1 ? "Start" : "Continue"} · {next.label}
            {next.unitLabel ? ` · ${next.unitLabel}` : ""}
          </Text>
          <Text style={styles.continueTitle}>
            Lesson {next.lesson.number}: {next.title} →
          </Text>
        </Pressable>
      )}
      {next === null && <Text style={styles.doneNote}>You've finished every required lesson from beginner to mastery.</Text>}
      <View style={styles.cards}>
        {PORTUGUESE_LEVELS.map((level, i) => {
          const count = counts[level.key];
          return (
            <Pressable
              key={level.key}
              style={[styles.card, { borderLeftColor: levelColor(i) }]}
              onPress={() => navigation.navigate("LessonList", { portugueseLevel: level.key })}
            >
              <View style={styles.cardTop}>
                <Text style={styles.cardName}>{level.label}</Text>
                {level.exam ? <Text style={styles.cardExam}>{level.exam}</Text> : null}
              </View>
              <TapText text={level.description} lang={PORTUGUESE_LANG} mode="mixed" style={styles.cardDescription} />
              <ProgressBar done={count?.done ?? 0} total={count?.total ?? 0} color={levelColor(i)} />
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
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 15, lineHeight: 21, color: colors.inkSoft, marginBottom: 20 },
  continueCard: { backgroundColor: colors.foreground, borderRadius: 20, padding: 18, marginBottom: 22, overflow: "hidden", ...cardShadow },
  continueKicker: { fontSize: 11, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", color: colors.saffronSoft },
  continueTitle: { fontFamily: fonts.display, fontSize: 19, lineHeight: 25, color: "#fff", marginTop: 6 },
  doneNote: { fontSize: 14, color: "#15803d", fontWeight: "600", marginBottom: 20 },
  cards: { gap: 14 },
  card: { ...card, padding: 18, paddingLeft: 20, borderLeftWidth: 5, borderLeftColor: colors.saffron },
  cardTop: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", gap: 8, marginBottom: 6 },
  cardName: { fontFamily: fonts.display, fontSize: 21, color: colors.ink, flexShrink: 1 },
  cardExam: { fontSize: 12, fontWeight: "700", color: colors.sea },
  cardDescription: { fontSize: 14, color: colors.inkSoft, lineHeight: 20, marginBottom: 12 },
  cardMeta: { fontSize: 12, fontWeight: "600", color: colors.inkMuted, marginTop: 8 },
});
