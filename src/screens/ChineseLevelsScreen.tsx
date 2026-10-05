import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { getCompletedMap } from "@/lib/lessons/completion";
import { ZH_MODULES } from "@/lib/lessons/zh";

type Props = NativeStackScreenProps<AppStackParamList, "ChineseLevels">;

// The Chinese beta's level picker -- mirrors the website's /lessons/zh
// page. Module names and descriptions come from lessons/zh/index.ts
// (synced from the website), so a new module only needs its registry key.
const MODULES = ZH_MODULES.map((m) => ({ ...m, key: `zh-${m.path}` as LessonModuleKey })).filter(
  (m) => m.key in LESSON_SOURCES
);

export default function ChineseLevelsScreen({ navigation }: Props) {
  const [completed, setCompleted] = useState<Record<string, number>>({});

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      Promise.all(MODULES.map((m) => getCompletedMap(LESSON_SOURCES[m.key].levelPath))).then((maps) => {
        if (cancelled) return;
        const next: Record<string, number> = {};
        MODULES.forEach((m, i) => {
          next[m.key] = Object.keys(maps[i]).filter((slug) => maps[i][slug]).length;
        });
        setCompleted(next);
      });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>Bite-sized, self-paced lessons. Start with pinyin and tones.</Text>
      <View style={styles.cards}>
        {MODULES.map((mod) => (
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
              {completed[mod.key] ?? 0} of {LESSON_SOURCES[mod.key].lessons.length} completed
            </Text>
          </Pressable>
        ))}
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
  cardCode: { fontSize: 18, fontWeight: "800", color: "#7A1F1F" },
  cardName: { fontSize: 14, color: "#00000099", flexShrink: 1 },
  cardDescription: { fontSize: 14, color: "#000000cc", lineHeight: 19, marginBottom: 10 },
  cardMeta: { fontSize: 12, color: "#00000066", textTransform: "uppercase" },
});
