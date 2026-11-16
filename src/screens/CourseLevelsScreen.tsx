import { useCallback, useLayoutEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { card, cardShadow, colors, fonts, levelColor } from "@/ui/theme";
import ProgressBar from "@/ui/ProgressBar";
import type { AppStackParamList } from "@/navigation/types";
import { getCompletedMap, syncCompletedMapFromCloud } from "@/lib/lessons/completion";
import { displayTitle } from "@/lib/lessons/levels";
import { loadCourseIndex } from "@/lib/lessons/remoteLevels";
import {
  REMOTE_COURSE_LEVELS,
  loadRemoteCourseLevel,
  nextRemoteCourseLesson,
  type RemoteCourseId,
} from "@/lib/lessons/remoteCourses";
import type { Lesson } from "@/lib/lessons/types";

type Props = NativeStackScreenProps<AppStackParamList, "CourseLevels">;

type Next = { levelPath: string; label: string; lesson: Lesson; title: string; unitLabel?: string };

// What each course's picker says. English is the course for Spanish
// speakers, so its words are in Spanish, like its lessons.
const COPY: Record<
  RemoteCourseId,
  { title: string; subtitle: string; start: string; cont: string; lesson: string; done: string; required: (d: number, t: number) => string; loading: string }
> = {
  ja: {
    title: "Japanese",
    subtitle: "Hiragana and katakana first, then bite-sized, self-paced lessons from JLPT N5 to beyond N1.",
    start: "Start",
    cont: "Continue",
    lesson: "Lesson",
    done: "You've finished every required lesson from beginner to mastery.",
    required: (d, t) => `${d} of ${t} required completed`,
    loading: "Loading…",
  },
  zh: {
    title: "Chinese",
    subtitle: "Pinyin and tones first, then bite-sized, self-paced lessons from HSK 1 to HSK 9.",
    start: "Start",
    cont: "Continue",
    lesson: "Lesson",
    done: "You've finished every required lesson from foundations to proficient.",
    required: (d, t) => `${d} of ${t} required completed`,
    loading: "Loading…",
  },
  en: {
    title: "Inglés",
    subtitle: "Lecciones cortas, a tu ritmo, organizadas por nivel: de A1 a C2.",
    start: "Empezar",
    cont: "Continuar",
    lesson: "Lección",
    done: "Has terminado todas las lecciones obligatorias, de A1 a C2.",
    required: (d, t) => `${d} de ${t} obligatorias completadas`,
    loading: "Cargando…",
  },
};

// The level picker of the Japanese, Chinese and English courses, like
// the website's /lessons/ja, /lessons/zh and /lessons/en: the starter
// module (kana, pinyin), then the levels, with a "Continue" card for where
// the learner left off. Lessons are downloaded a level at a time
// (lessons/remoteCourses.ts); the counts come from the course's small
// index, so this screen never downloads a level it doesn't open.
export default function CourseLevelsScreen({ navigation, route }: Props) {
  const course = route.params.course;
  const levels = REMOTE_COURSE_LEVELS[course];
  const copy = COPY[course];
  const [counts, setCounts] = useState<Record<string, { done: number; total: number }>>({});
  // undefined while working it out, null once everything is done.
  const [next, setNext] = useState<Next | null | undefined>(undefined);

  useLayoutEffect(() => {
    navigation.setOptions({ title: copy.title });
  }, [navigation, copy.title]);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      const load = async (read: (levelPath: string) => Promise<Record<string, boolean>>) => {
        const maps = await Promise.all(levels.map((l) => read(l.levelPath)));
        if (cancelled) return;
        const byPath = Object.fromEntries(levels.map((l, i) => [l.levelPath, maps[i]]));
        const index = await loadCourseIndex(course);
        if (cancelled) return;
        if (index) {
          const entries = levels.map((level) => {
            const required = index[level.key]?.required ?? [];
            const done = required.filter((slug) => byPath[level.levelPath]?.[slug]).length;
            return [level.key, { done, total: required.length }] as const;
          });
          setCounts(Object.fromEntries(entries));
        }
        const found = await nextRemoteCourseLesson(course, byPath);
        if (cancelled) return;
        if (found) {
          const data = await loadRemoteCourseLevel(found.level.levelPath);
          if (cancelled) return;
          setNext({
            levelPath: found.level.levelPath,
            label: found.level.label,
            lesson: found.lesson,
            title: displayTitle(found.lesson, data.lessons),
            unitLabel: found.unit?.label,
          });
        } else setNext(null);
      };
      // Local first, then again once completions from the website (or
      // another device) are merged in, as the other courses do. (A level
      // that can't be downloaded right now just leaves no "Continue"
      // card; the lesson list says what to do.)
      void load(getCompletedMap)
        .catch(() => {})
        .then(() => load(syncCompletedMapFromCloud))
        .catch(() => {});
      return () => {
        cancelled = true;
      };
    }, [course, levels])
  );

  // Starter modules (kana, pinyin) take the first colour too.
  const colorOf = (i: number) => levelColor(Math.max(0, i - (levels[0].starter ? 1 : 0)));
  const started = Object.values(counts).some((c) => c.done > 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>{copy.subtitle}</Text>
      {next && (
        <Pressable
          style={styles.continueCard}
          onPress={() => navigation.navigate("LessonRunner", { slug: next.lesson.slug, levelPath: next.levelPath })}
        >
          <Text style={styles.continueKicker}>
            {started ? copy.cont : copy.start} · {next.label}
            {next.unitLabel ? ` · ${next.unitLabel}` : ""}
          </Text>
          <Text style={styles.continueTitle}>
            {copy.lesson} {next.lesson.number}: {next.title} →
          </Text>
        </Pressable>
      )}
      {next === null && <Text style={styles.doneNote}>{copy.done}</Text>}
      <View style={styles.cards}>
        {levels.map((level, i) => {
          const count = counts[level.key];
          return (
            <Pressable
              key={level.key}
              style={[styles.card, { borderLeftColor: colorOf(i) }]}
              onPress={() => navigation.navigate("LessonList", { levelPath: level.levelPath })}
            >
              <View style={styles.cardTop}>
                <Text style={styles.cardName}>{level.label}</Text>
                {level.exam ? <Text style={styles.cardExam}>{level.exam}</Text> : null}
              </View>
              <Text style={styles.cardDescription}>{level.description}</Text>
              <ProgressBar done={count?.done ?? 0} total={count?.total ?? 0} color={colorOf(i)} />
              <Text style={styles.cardMeta}>{count ? copy.required(count.done, count.total) : copy.loading}</Text>
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
