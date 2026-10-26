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
  KOREAN_LEVELS,
  loadKoreanLevel,
  nextKoreanLesson,
  type KoreanLevelInfo,
  type KoreanLevelKey,
  type KoreanLevelPath,
} from "@/lib/lessons/korean";
import type { Lesson } from "@/lib/lessons/types";
import TapText from "@/components/TapText";
import { KOREAN_LANG } from "@/lib/speech";

type Props = NativeStackScreenProps<AppStackParamList, "KoreanLevels">;

type Next = { levelPath: KoreanLevelPath; label: string; lesson: Lesson; title: string; unitLabel?: string };

const AVAILABLE = KOREAN_LEVELS.filter((l) => l.available);
const MAIN = KOREAN_LEVELS.filter((l) => l.kind !== "bonus");
const BONUS = KOREAN_LEVELS.filter((l) => l.kind === "bonus");

// The Korean beta's level picker -- mirrors the website's /lessons/ko page:
// the Hangul module first (like Japanese's kana), then Beginner ... Mastery,
// each shown by its name with its TOPIK level beside it (never the CEFR
// code), and the optional Korean Culture & Everyday Life module as a bonus
// card outside the main path. A "Continue" card picks up where the learner
// left off. Each level's lessons load on demand (lessons/korean.ts), so the
// counts fill in as they load. Only the beta account reaches it
// (RootNavigator's withKoreanBeta).
export default function KoreanLevelsScreen({ navigation }: Props) {
  // Required lessons done / in each level; undefined until that level loads.
  const [counts, setCounts] = useState<Partial<Record<KoreanLevelKey, { done: number; total: number }>>>({});
  // undefined while working it out, null once Hangul-Mastery are all done.
  const [next, setNext] = useState<Next | null | undefined>(undefined);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      const load = async (read: (levelPath: string) => Promise<Record<string, boolean>>) => {
        const maps = await Promise.all(AVAILABLE.map((l) => read(l.levelPath)));
        if (cancelled) return;
        const byPath = Object.fromEntries(AVAILABLE.map((l, i) => [l.levelPath, maps[i]])) as Partial<
          Record<KoreanLevelPath, Record<string, boolean>>
        >;
        const found = await nextKoreanLesson(byPath);
        if (cancelled) return;
        if (found) {
          const data = await loadKoreanLevel(found.level.key);
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
        for (const level of AVAILABLE) {
          const data = await loadKoreanLevel(level.key);
          if (cancelled) return;
          const required = requiredLessons(data.lessons);
          const done = required.filter((l) => byPath[level.levelPath]?.[l.slug]).length;
          setCounts((prev) => ({ ...prev, [level.key]: { done, total: required.length } }));
        }
      };
      // Local first, then again once completions from the website (or
      // another device) are merged in, as the other courses do.
      void load(getCompletedMap).then(() => load(syncCompletedMapFromCloud));
      return () => {
        cancelled = true;
      };
    }, [])
  );

  const levelCard = (level: KoreanLevelInfo, i: number) => {
    const count = counts[level.key];
    const color = level.kind === "bonus" ? colors.sea : levelColor(i);
    const body = (
      <>
        <View style={styles.cardTop}>
          <Text style={styles.cardName}>{level.label}</Text>
          {level.topik ? <Text style={styles.cardExam}>{level.topik}</Text> : null}
          {level.kind === "intro" ? <Text style={styles.cardExam}>Start here</Text> : null}
        </View>
        <TapText text={level.description} lang={KOREAN_LANG} mode="mixed" style={styles.cardDescription} />
        {level.available ? (
          <>
            <ProgressBar done={count?.done ?? 0} total={count?.total ?? 0} color={color} />
            <Text style={styles.cardMeta}>
              {count ? `${count.done} of ${count.total} ${level.kind === "intro" ? "lessons" : "required"} completed` : "Loading…"}
            </Text>
          </>
        ) : (
          <Text style={styles.cardMeta}>Coming soon to the app</Text>
        )}
      </>
    );
    if (!level.available) {
      return (
        <View key={level.key} style={[styles.card, styles.cardSoon, { borderLeftColor: color }]}>
          {body}
        </View>
      );
    }
    return (
      <Pressable
        key={level.key}
        style={[styles.card, { borderLeftColor: color }]}
        onPress={() => navigation.navigate("LessonList", { koreanLevel: level.key })}
      >
        {body}
      </Pressable>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>Beta · Hangul to TOPIK 6</Text>
      <Text style={styles.subtitle}>
        Bite-sized, self-paced Korean lessons organized by level and lined up with the TOPIK. Tap any Korean word to hear it. This
        course is a private beta: only your account can see it.
      </Text>
      {next && (
        <Pressable
          style={styles.continueCard}
          onPress={() => navigation.navigate("LessonRunner", { slug: next.lesson.slug, levelPath: next.levelPath })}
        >
          <Text style={styles.continueKicker}>
            {next.levelPath === "ko/hangul" && next.lesson.number === 1 ? "Start" : "Continue"} · {next.label}
            {next.unitLabel ? ` · ${next.unitLabel}` : ""}
          </Text>
          <Text style={styles.continueTitle}>
            Lesson {next.lesson.number}: {next.title} →
          </Text>
        </Pressable>
      )}
      {next === null && <Text style={styles.doneNote}>You've finished every required lesson from Hangul to Mastery.</Text>}
      <View style={styles.cards}>{MAIN.map((level, i) => levelCard(level, i))}</View>
      {BONUS.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Bonus · optional</Text>
          <View style={styles.cards}>{BONUS.map((level, i) => levelCard(level, MAIN.length + i))}</View>
        </>
      )}
      <View style={styles.links}>
        <Pressable style={styles.link} onPress={() => navigation.navigate("Flashcards", { lang: "ko" })}>
          <Text style={styles.linkTitle}>Flashcards</Text>
          <Text style={styles.linkBody}>Star a word or sentence in any lesson to add it to your Korean flashcards.</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => navigation.navigate("Review", { lang: "ko" })}>
          <Text style={styles.linkTitle}>Saved lessons</Text>
          <Text style={styles.linkBody}>The Korean lessons you saved to review.</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", color: colors.sea, marginBottom: 6 },
  subtitle: { fontSize: 15, lineHeight: 21, color: colors.inkSoft, marginBottom: 20 },
  continueCard: { backgroundColor: colors.foreground, borderRadius: 20, padding: 18, marginBottom: 22, overflow: "hidden", ...cardShadow },
  continueKicker: { fontSize: 11, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", color: colors.saffronSoft },
  continueTitle: { fontFamily: fonts.display, fontSize: 19, lineHeight: 25, color: "#fff", marginTop: 6 },
  doneNote: { fontSize: 14, color: "#15803d", fontWeight: "600", marginBottom: 20 },
  cards: { gap: 14 },
  card: { ...card, padding: 18, paddingLeft: 20, borderLeftWidth: 5, borderLeftColor: colors.saffron },
  cardSoon: { opacity: 0.7 },
  cardTop: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", gap: 8, marginBottom: 6 },
  cardName: { fontFamily: fonts.display, fontSize: 21, color: colors.ink, flexShrink: 1 },
  cardExam: { fontSize: 12, fontWeight: "700", color: colors.sea },
  cardDescription: { fontSize: 14, color: colors.inkSoft, lineHeight: 20, marginBottom: 12 },
  cardMeta: { fontSize: 12, fontWeight: "600", color: colors.inkMuted, marginTop: 8 },
  sectionTitle: { fontFamily: fonts.display, fontSize: 18, color: colors.ink, marginTop: 26, marginBottom: 12 },
  links: { gap: 10, marginTop: 26 },
  link: { ...card, padding: 16 },
  linkTitle: { fontFamily: fonts.display, fontSize: 17, color: colors.ink },
  linkBody: { fontSize: 13, color: colors.inkSoft, lineHeight: 18, marginTop: 4 },
});
