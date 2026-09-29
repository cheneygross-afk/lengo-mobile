import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { getCompletedMap, syncCompletedMapFromCloud } from "@/lib/lessons/completion";
import { SPANISH_LEVELS, requiredLessons } from "@/lib/lessons/levels";

type Props = NativeStackScreenProps<AppStackParamList, "SpanishLevels">;

// Spanish's own level picker -- mirrors the website's /lessons page
// (A1 through C2, plus the standalone Cosas Coloquiales culture module).
// Home used to jump straight into LessonList hardcoded to moduleKey
// "a1", which was the only level ever wired up on mobile -- every
// account, including full-access ones, was stuck on A1 with no way to
// reach anything more advanced. This screen is the fix: same pattern as
// JapaneseLevelsScreen, just for the Spanish track.
type LevelCard = { key: LessonModuleKey; label: string; description: string };

// A1-C2 with their CEFR codes (names shared with the website via the
// synced levels.ts), then the standalone culture module.
const LEVELS: LevelCard[] = [
  ...SPANISH_LEVELS.map((level) => ({ key: level.levelPath, label: level.label, description: level.description })),
  {
    key: "cosas-coloquiales",
    label: "Colloquial Spanish & Culture",
    description:
      "Festivals and traditions, food culture, soccer, music and dance, folk beliefs, and social etiquette across the Hispanic world.",
  },
];

// Done / required, counted exactly like each level's own list
// (LessonListScreen): only required lessons, only ones in the level.
function countDone(key: LessonModuleKey, map: Record<string, boolean>): number {
  return requiredLessons(LESSON_SOURCES[key].lessons).filter((l) => map[l.slug]).length;
}

export default function SpanishLevelsScreen({ navigation }: Props) {
  const [completed, setCompleted] = useState<Partial<Record<LessonModuleKey, number>>>({});

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      const load = (read: (levelPath: string) => Promise<Record<string, boolean>>) =>
        Promise.all(LEVELS.map((lvl) => read(LESSON_SOURCES[lvl.key].levelPath))).then((maps) => {
          if (cancelled) return;
          const next: Partial<Record<LessonModuleKey, number>> = {};
          LEVELS.forEach((lvl, i) => {
            next[lvl.key] = countDone(lvl.key, maps[i]);
          });
          setCompleted(next);
        });
      // Local first, then again once completions from the website (or
      // another device) are merged in, as the lesson list does.
      void load(getCompletedMap).then(() => load(syncCompletedMapFromCloud));
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>Bite-sized, self-paced lessons organized by level.</Text>
      <View style={styles.cards}>
        {LEVELS.map((lvl) => {
          const source = LESSON_SOURCES[lvl.key];
          const done = completed[lvl.key] ?? 0;
          const total = requiredLessons(source.lessons).length;
          return (
            <Pressable
              key={lvl.key}
              style={styles.card}
              onPress={() => navigation.navigate("LessonList", { moduleKey: lvl.key })}
            >
              <View style={styles.cardTop}>
                <Text style={styles.cardName}>{lvl.label}</Text>
              </View>
              <Text style={styles.cardDescription}>{lvl.description}</Text>
              <Text style={styles.cardMeta}>
                {done} of {total} required completed
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
  cardName: { fontSize: 18, fontWeight: "800", color: "#7A1F1F", flexShrink: 1 },
  cardDescription: { fontSize: 14, color: "#000000cc", lineHeight: 19, marginBottom: 10 },
  cardMeta: { fontSize: 12, color: "#00000066", textTransform: "uppercase" },
});
