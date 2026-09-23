import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { getCompletedMap } from "@/lib/lessons/completion";

type Props = NativeStackScreenProps<AppStackParamList, "SpanishLevels">;

// Spanish's own level picker -- mirrors the website's /lessons page
// (A1 through C2, plus the standalone Cosas Coloquiales culture module).
// Home used to jump straight into LessonList hardcoded to moduleKey
// "a1", which was the only level ever wired up on mobile -- every
// account, including full-access ones, was stuck on A1 with no way to
// reach anything more advanced. This screen is the fix: same pattern as
// JapaneseLevelsScreen, just for the Spanish track.
const LEVELS: { key: LessonModuleKey; code: string; name: string; description: string }[] = [
  {
    key: "a1",
    code: "A1",
    name: "Beginner",
    description:
      "The building blocks: greetings, pronouns, ser vs. estar, present-tense verbs, questions, and everyday vocabulary.",
  },
  {
    key: "a2",
    code: "A2",
    name: "Elementary",
    description: "Past tenses, comparisons, direct/indirect object pronouns, and more everyday situations.",
  },
  {
    key: "b1",
    code: "B1",
    name: "Intermediate",
    description: "Subjunctive mood basics, future and conditional tenses, and more complex storytelling.",
  },
  {
    key: "b2",
    code: "B2",
    name: "Upper Intermediate",
    description: "Advanced subjunctive, reported speech, and nuanced connectors for fluent conversation.",
  },
  {
    key: "c1",
    code: "C1",
    name: "Advanced",
    description:
      "Advanced grammar mastery: subjunctive nuance, nominalization, gerund vs. infinitive, and native-level passive constructions.",
  },
  {
    key: "c2",
    code: "C2",
    name: "Mastery",
    description: "Specialized registers, idiomatic fluency, and precision for professional and academic Spanish.",
  },
  {
    key: "cosas-coloquiales",
    code: "Cosas Coloquiales",
    name: "Colloquial Spanish & Culture",
    description:
      "Festivals and traditions, food culture, soccer, music and dance, folk beliefs, and social etiquette across the Hispanic world.",
  },
];

export default function SpanishLevelsScreen({ navigation }: Props) {
  const [completed, setCompleted] = useState<Record<LessonModuleKey, number>>({
    "a1": 0,
    "a2": 0,
    "b1": 0,
    "b2": 0,
    "c1": 0,
    "c2": 0,
    "cosas-coloquiales": 0,
    "ja-alphabets": 0,
    "ja-a1": 0,
    "ja-a2": 0,
    "ja-b1": 0,
    "ja-b2": 0,
  });

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      Promise.all(LEVELS.map((lvl) => getCompletedMap(LESSON_SOURCES[lvl.key].levelPath))).then((maps) => {
        if (cancelled) return;
        const next = { ...completed };
        LEVELS.forEach((lvl, i) => {
          next[lvl.key] = Object.keys(maps[i]).filter((slug) => maps[i][slug]).length;
        });
        setCompleted(next);
      });
      return () => {
        cancelled = true;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>Bite-sized, self-paced lessons organized by CEFR level.</Text>
      <View style={styles.cards}>
        {LEVELS.map((lvl) => {
          const source = LESSON_SOURCES[lvl.key];
          const done = completed[lvl.key];
          return (
            <Pressable
              key={lvl.key}
              style={styles.card}
              onPress={() => navigation.navigate("LessonList", { moduleKey: lvl.key })}
            >
              <View style={styles.cardTop}>
                <Text style={styles.cardCode}>{lvl.code}</Text>
                <Text style={styles.cardName}>{lvl.name}</Text>
              </View>
              <Text style={styles.cardDescription}>{lvl.description}</Text>
              <Text style={styles.cardMeta}>
                {done} of {source.lessons.length} completed
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
  cards: { gap: 14 },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
  },
  cardTop: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", gap: 8, marginBottom: 6 },
  cardCode: { fontSize: 18, fontWeight: "800", color: "#7A1F1F", flexShrink: 1 },
  cardName: { fontSize: 14, color: "#00000099", flexShrink: 1 },
  cardDescription: { fontSize: 14, color: "#000000cc", lineHeight: 19, marginBottom: 10 },
  cardMeta: { fontSize: 12, color: "#00000066", textTransform: "uppercase" },
});
