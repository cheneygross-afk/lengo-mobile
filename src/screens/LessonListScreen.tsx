import { useCallback, useMemo, useState } from "react";
import { View, Text, SectionList, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { A1_MODULES, A1_MAX_DRILL_LESSON_NUMBER, groupLessonsByModule, type LessonSection } from "@/lib/lessons/modules";
import { getCompletedMap } from "@/lib/lessons/completion";
import { getPendingReviewBatch, type PendingReviewBatch } from "@/lib/lessons/reviewCadence";
import { parseDurationMinutes, formatMinutes } from "@/lib/duration";

type Props = NativeStackScreenProps<AppStackParamList, "LessonList">;

// Screen 4. Spanish's only wired-up level (A1) is the default when no
// moduleKey is passed, so every existing "Lessons" navigation call keeps
// working unchanged. The Japanese beta's four modules (see
// JapaneseLevelsScreen) navigate here too, each with its own moduleKey --
// same screen, same LessonRunner, same completion/review machinery,
// just a different lesson source.
export default function LessonListScreen({ navigation, route }: Props) {
  const moduleKey: LessonModuleKey = route.params?.moduleKey ?? "a1";
  const source = LESSON_SOURCES[moduleKey];
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [pendingReview, setPendingReview] = useState<PendingReviewBatch | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getCompletedMap(source.levelPath).then((map) => {
        if (!cancelled) setCompleted(map);
      });
      getPendingReviewBatch(source.levelPath).then((batch) => {
        if (!cancelled) setPendingReview(batch);
      });
      return () => {
        cancelled = true;
      };
    }, [source.levelPath])
  );

  // Reading Practice is left out of A1's list entirely -- see the comment
  // on A1_MODULES. Every other module (the Japanese tracks) has no such
  // duplicate-content block, so it's shown flat, ungrouped.
  const visibleLessons = useMemo(
    () => (moduleKey === "a1" ? source.lessons.filter((l) => l.number <= A1_MAX_DRILL_LESSON_NUMBER) : source.lessons),
    [moduleKey, source.lessons]
  );
  const sections: LessonSection[] = useMemo(
    () => (moduleKey === "a1" ? groupLessonsByModule(visibleLessons, A1_MODULES) : [{ title: source.title, data: visibleLessons }]),
    [moduleKey, visibleLessons, source.title]
  );
  const completedCount = visibleLessons.filter((l) => completed[l.slug]).length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {completedCount} of {visibleLessons.length} completed
      </Text>
      {pendingReview && (
        <Pressable
          style={styles.reviewCard}
          onPress={() =>
            navigation.navigate("ReviewDrill", {
              levelPath: source.levelPath,
              batch: pendingReview.batch,
              slugs: pendingReview.slugs,
            })
          }
        >
          <Text style={styles.reviewCardKicker}>Time for a check-in</Text>
          <Text style={styles.reviewCardTitle}>Review your last 4 lessons</Text>
          <Text style={styles.reviewCardBody}>Quick drill of anything you missed or flagged.</Text>
        </Pressable>
      )}
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
  reviewCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: "#7A1F1F",
    borderRadius: 14,
    padding: 16,
  },
  reviewCardKicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#ffffffaa" },
  reviewCardTitle: { fontSize: 17, fontWeight: "800", color: "#fff", marginTop: 4 },
  reviewCardBody: { fontSize: 13, color: "#ffffffcc", marginTop: 4 },
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
