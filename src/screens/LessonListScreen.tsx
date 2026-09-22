import { useCallback, useMemo, useState } from "react";
import { View, Text, SectionList, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { A1_LESSONS } from "@/lib/lessons/a1";
import { A1_MODULES, A1_MAX_DRILL_LESSON_NUMBER, groupLessonsByModule } from "@/lib/lessons/modules";
import { getCompletedMap } from "@/lib/lessons/completion";
import { parseDurationMinutes, formatMinutes } from "@/lib/duration";

type Props = NativeStackScreenProps<AppStackParamList, "LessonList">;

// MVP ships A1 only -- see README for how to add A2-C2 the same way.
const LEVEL_PATH = "a1";

export default function LessonListScreen({ navigation }: Props) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getCompletedMap(LEVEL_PATH).then((map) => {
        if (!cancelled) setCompleted(map);
      });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  // Reading Practice (the Spanish-story + English-quiz lessons) is left
  // out of the Lessons tab entirely -- see the comment on A1_MODULES.
  const drillLessons = useMemo(
    () => A1_LESSONS.filter((l) => l.number <= A1_MAX_DRILL_LESSON_NUMBER),
    []
  );
  const sections = useMemo(() => groupLessonsByModule(drillLessons, A1_MODULES), [drillLessons]);
  const completedCount = drillLessons.filter((l) => completed[l.slug]).length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {completedCount} of {drillLessons.length} completed
      </Text>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => {
          const doneInSection = section.data.filter((l) => completed[l.slug]).length;
          const sectionMinutes = section.data.reduce(
            (sum, l) => sum + parseDurationMinutes(l.duration),
            0
          );
          return (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionMeta}>
                {doneInSection}/{section.data.length} · {formatMinutes(sectionMinutes)}
              </Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          const done = !!completed[item.slug];
          return (
            <Pressable
              style={styles.row}
              onPress={() => navigation.navigate("LessonRunner", { slug: item.slug })}
            >
              <View style={[styles.badge, done && styles.badgeDone]}>
                <Text style={[styles.badgeText, done && styles.badgeTextDone]}>
                  {done ? "✓" : item.number}
                </Text>
              </View>
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowSummary} numberOfLines={2}>
                  {item.summary}
                </Text>
              </View>
              <Text style={styles.duration}>{item.duration}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  header: {
    padding: 16,
    paddingBottom: 4,
    fontSize: 13,
    color: "#00000099",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 20,
    paddingBottom: 8,
  },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#7A1F1F" },
  sectionMeta: { fontSize: 12, color: "#00000066" },
  row: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#00000012",
    alignItems: "center",
    marginBottom: 10,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#00000010",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeDone: { backgroundColor: "#7A1F1F" },
  badgeText: { fontWeight: "700", color: "#000", fontSize: 13 },
  badgeTextDone: { color: "#fff" },
  rowBody: { flex: 1 },
  rowTitle: { fontSize: 16, fontWeight: "600", color: "#000" },
  rowSummary: { fontSize: 13, color: "#00000099", marginTop: 2 },
  duration: { fontSize: 12, color: "#00000066", alignSelf: "flex-start", marginTop: 2 },
});
