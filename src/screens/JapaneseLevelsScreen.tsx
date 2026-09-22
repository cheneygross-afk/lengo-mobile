import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { getCompletedMap } from "@/lib/lessons/completion";

type Props = NativeStackScreenProps<AppStackParamList, "JapaneseLevels">;

// Japanese beta's own level picker -- mirrors the website's
// /lessons/ja page (Alphabets, A1, A2, B1), since unlike Spanish's single
// wired-up A1 level, the Japanese track has four modules to choose among.
const MODULES: { key: LessonModuleKey; code: string; name: string; description: string }[] = [
  {
    key: "ja-alphabets",
    code: "Alphabets",
    name: "Hiragana & Katakana",
    description: "The two phonetic scripts every other Japanese lesson assumes you can already read -- learned before A1.",
  },
  {
    key: "ja-a1",
    code: "A1",
    name: "Foundations",
    description: "Greetings, です/ます sentence patterns, particles, numbers, and adjectives.",
  },
  {
    key: "ja-a2",
    code: "A2",
    name: "Building Fluency",
    description: "Te-form requests, past tense, potential and たい forms, giving and receiving, and more particles.",
  },
  {
    key: "ja-b1",
    code: "B1",
    name: "Independent Use",
    description: "Passive and causative, conditions, comparison, keigo, and reading real Japanese.",
  },
];

export default function JapaneseLevelsScreen({ navigation }: Props) {
  const [completed, setCompleted] = useState<Record<LessonModuleKey, number>>({
    "a1": 0,
    "ja-alphabets": 0,
    "ja-a1": 0,
    "ja-a2": 0,
    "ja-b1": 0,
  });

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      Promise.all(MODULES.map((m) => getCompletedMap(LESSON_SOURCES[m.key].levelPath))).then((maps) => {
        if (cancelled) return;
        const next = { ...completed };
        MODULES.forEach((m, i) => {
          next[m.key] = Object.keys(maps[i]).filter((slug) => maps[i][slug]).length;
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
      <Text style={styles.subtitle}>Bite-sized, self-paced lessons. Start with the writing system.</Text>
      <View style={styles.cards}>
        {MODULES.map((mod) => {
          const source = LESSON_SOURCES[mod.key];
          const done = completed[mod.key];
          return (
            <Pressable
              key={mod.key}
              style={styles.card}
              onPress={() => navigation.navigate("LessonList", { moduleKey: mod.key })}
            >
              <View style={styles.cardTop}>
                <Text style={styles.cardCode}>{mod.code}</Text>
                <Text style={styles.cardName}>{mod.name}</Text>
              </View>
              <Text style={styles.cardDescription}>{mod.description}</Text>
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
  cardTop: { flexDirection: "row", alignItems: "baseline", gap: 8, marginBottom: 6 },
  cardCode: { fontSize: 18, fontWeight: "800", color: "#7A1F1F" },
  cardName: { fontSize: 14, color: "#00000099" },
  cardDescription: { fontSize: 14, color: "#000000cc", lineHeight: 19, marginBottom: 10 },
  cardMeta: { fontSize: 12, color: "#00000066", textTransform: "uppercase" },
});
