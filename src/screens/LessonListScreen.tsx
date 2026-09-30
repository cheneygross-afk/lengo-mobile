import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { View, Text, SectionList, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import type { Lesson } from "@/lib/lessons/types";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { getCompletedMap, syncCompletedMapFromCloud } from "@/lib/lessons/completion";
import { displayTitle, firstIncompleteRequired, requiredLessons } from "@/lib/lessons/levels";
import { isUnitLevelPath, unitsFor, type CourseUnit } from "@/lib/lessons/units";
import { getPendingReviewBatch, type PendingReviewBatch } from "@/lib/lessons/reviewCadence";
import { parseDurationMinutes, formatMinutes } from "@/lib/duration";

type Props = NativeStackScreenProps<AppStackParamList, "LessonList">;

// One row in a unit: a lesson, the unit's "Test out" button, or the
// toggle for its folded Extra Practice lessons.
type Row =
  | { kind: "lesson"; lesson: Lesson }
  | { kind: "testout"; unit: CourseUnit }
  | { kind: "extras"; unit: CourseUnit; count: number; open: boolean };

type Section = { key: string; unit?: CourseUnit; title: string; data: Row[] };

// Screen 4. Spanish's A1 is the default when no moduleKey is passed, so
// every existing "Lessons" navigation call keeps working unchanged. The
// Spanish levels (and Cosas Coloquiales) show their units from the
// synced units.ts -- the same grouping as the website's level pages --
// each collapsible, with its progress and a "Test out" quiz; only the
// unit holding the next lesson starts open. The Japanese beta's modules
// (see JapaneseLevelsScreen) navigate here too and stay one flat list.
export default function LessonListScreen({ navigation, route }: Props) {
  const moduleKey: LessonModuleKey = route.params?.moduleKey ?? "a1";
  const source = LESSON_SOURCES[moduleKey];
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [pendingReview, setPendingReview] = useState<PendingReviewBatch | null>(null);
  // Units opened or closed by hand; the rest follow the default.
  const [toggled, setToggled] = useState<Record<string, boolean>>({});
  const [extrasOpen, setExtrasOpen] = useState<Record<string, boolean>>({});

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getCompletedMap(source.levelPath).then((map) => {
        if (!cancelled) setCompleted(map);
      });
      // Pulls in anything completed on the website (or another device)
      // and re-renders once the merge lands -- getCompletedMap above
      // already painted the local state immediately, so this just
      // reconciles shortly after rather than blocking the list.
      syncCompletedMapFromCloud(source.levelPath).then((map) => {
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

  const hasUnits = isUnitLevelPath(moduleKey);

  // Spanish levels are titled with their CEFR code and name
  // ("B2 · Upper-intermediate"), like the website's level header.
  useLayoutEffect(() => {
    if (hasUnits && moduleKey !== "cosas-coloquiales") navigation.setOptions({ title: source.title });
  }, [navigation, moduleKey, hasUnits, source.title]);

  const lessons = source.lessons;
  const units = useMemo(() => (isUnitLevelPath(moduleKey) ? unitsFor(moduleKey) : null), [moduleKey]);
  const titles = useMemo(() => new Map(lessons.map((l) => [l.slug, displayTitle(l, lessons)])), [lessons]);

  // Counts the required path only -- optional Extra Practice lessons (see
  // sequencing.ts) are extra. The level cards count the same set.
  const required = useMemo(() => requiredLessons(lessons), [lessons]);
  const completedCount = required.filter((l) => completed[l.slug]).length;
  const next = firstIncompleteRequired(lessons, completed);
  const currentUnit = next && units ? units.find((u) => u.required.some((l) => l.slug === next.slug)) : undefined;

  const sections: Section[] = useMemo(() => {
    if (!units) {
      return [{ key: "all", title: source.title, data: lessons.map((lesson) => ({ kind: "lesson" as const, lesson })) }];
    }
    return units.map((unit) => {
      const open = toggled[unit.id] ?? unit.id === currentUnit?.id;
      const data: Row[] = [];
      if (open) {
        if (unit.required.some((l) => !completed[l.slug])) data.push({ kind: "testout", unit });
        for (const lesson of unit.required) data.push({ kind: "lesson", lesson });
        if (unit.optional.length > 0) {
          const extras = !!extrasOpen[unit.id];
          data.push({ kind: "extras", unit, count: unit.optional.length, open: extras });
          if (extras) for (const lesson of unit.optional) data.push({ kind: "lesson", lesson });
        }
      }
      return { key: unit.id, unit, title: unit.label, data };
    });
  }, [units, lessons, source.title, toggled, extrasOpen, currentUnit?.id, completed]);

  const header = (
    <View>
      <Text style={styles.header}>
        {completedCount} of {required.length} required lessons completed
        {units ? ` · ${units.length} units` : ""}
      </Text>
      {next && units && (
        <Pressable style={styles.continueCard} onPress={() => navigation.navigate("LessonRunner", { slug: next.slug })}>
          <Text style={styles.continueKicker}>
            {completedCount === 0 ? "Start" : "Continue"}
            {currentUnit ? ` · ${currentUnit.label}` : ""}
          </Text>
          <Text style={styles.continueTitle}>
            Lesson {next.number}: {titles.get(next.slug)} →
          </Text>
        </Pressable>
      )}
      {!next && units && <Text style={styles.doneNote}>Every required lesson in this level is complete.</Text>}
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
          <Text style={styles.reviewCardTitle}>Review what's due</Text>
          <Text style={styles.reviewCardBody}>Quick drill of questions you missed or flagged, spaced out over days.</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(row, i) => (row.kind === "lesson" ? row.lesson.slug : `${row.kind}-${row.unit.id}-${i}`)}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={header}
        renderSectionHeader={({ section }) => {
          const unit = section.unit;
          if (!unit) {
            const done = section.data.filter((r) => r.kind === "lesson" && completed[r.lesson.slug]).length;
            const minutes = lessons.reduce((sum, l) => sum + parseDurationMinutes(l.duration), 0);
            return (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionMeta}>
                  {done}/{section.data.length} · {formatMinutes(minutes)}
                </Text>
              </View>
            );
          }
          const done = unit.required.filter((l) => completed[l.slug]).length;
          const total = unit.required.length;
          const open = section.data.length > 0;
          return (
            <Pressable
              style={[styles.unitCard, open && styles.unitCardOpen]}
              onPress={() => setToggled((t) => ({ ...t, [unit.id]: !open }))}
              accessibilityRole="button"
              accessibilityState={{ expanded: open }}
            >
              <View style={styles.unitTop}>
                <Text style={styles.unitTitle}>{unit.label}</Text>
                <Text style={[styles.unitMeta, done === total && styles.unitMetaDone]}>
                  {done}/{total} {open ? "▾" : "▸"}
                </Text>
              </View>
              <Text style={styles.unitDescription}>{unit.description}</Text>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    done === total && styles.progressFillDone,
                    { width: `${total ? (done / total) * 100 : 0}%` },
                  ]}
                />
              </View>
            </Pressable>
          );
        }}
        renderItem={({ item }) => {
          if (item.kind === "testout") {
            return (
              <View style={styles.testOutRow}>
                <Text style={styles.testOutText}>Already know this? Test out to skip the unit.</Text>
                <Pressable
                  style={styles.testOutBtn}
                  onPress={() => navigation.navigate("UnitTest", { levelPath: source.levelPath, unitId: item.unit.id })}
                >
                  <Text style={styles.testOutBtnText}>Test out</Text>
                </Pressable>
              </View>
            );
          }
          if (item.kind === "extras") {
            const doneExtras = item.unit.optional.filter((l) => completed[l.slug]).length;
            return (
              <Pressable
                style={styles.extrasRow}
                onPress={() => setExtrasOpen((e) => ({ ...e, [item.unit.id]: !item.open }))}
              >
                <Text style={styles.extrasText}>
                  {item.open ? "▾" : "▸"} Extra practice (optional) · {item.count} lessons
                  {doneExtras > 0 ? ` · ${doneExtras} done` : ""}
                </Text>
              </Pressable>
            );
          }
          const lesson = item.lesson;
          const done = !!completed[lesson.slug];
          return (
            <Pressable
              style={[styles.row, units && styles.rowInUnit]}
              onPress={() => navigation.navigate("LessonRunner", { slug: lesson.slug })}
            >
              <View style={[styles.badge, done && styles.badgeDone]}>
                <Text style={[styles.badgeText, done && styles.badgeTextDone]}>{done ? "✓" : lesson.number}</Text>
              </View>
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{titles.get(lesson.slug)}</Text>
                <Text style={styles.rowSummary} numberOfLines={2}>
                  {lesson.optional ? "Optional · " : ""}
                  {lesson.summary}
                </Text>
              </View>
              <Text style={styles.duration}>{lesson.duration}</Text>
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
    paddingTop: 16,
    paddingBottom: 4,
    fontSize: 13,
    color: "#00000099",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
  continueCard: { marginTop: 10, backgroundColor: "#000", borderRadius: 14, padding: 16 },
  continueKicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#ffffffaa" },
  continueTitle: { fontSize: 16, fontWeight: "700", color: "#fff", marginTop: 4 },
  doneNote: { marginTop: 10, fontSize: 14, color: "#15803d", fontWeight: "600" },
  reviewCard: {
    marginTop: 10,
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
  unitCard: {
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#00000018",
    padding: 14,
  },
  unitCardOpen: { marginBottom: 8, borderColor: "#7A1F1F55" },
  unitTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 10 },
  unitTitle: { flex: 1, fontSize: 16, fontWeight: "800", color: "#7A1F1F" },
  unitMeta: { fontSize: 13, color: "#00000080", fontWeight: "600" },
  unitMetaDone: { color: "#15803d" },
  unitDescription: { fontSize: 13, color: "#000000aa", marginTop: 4, lineHeight: 18 },
  progressTrack: { height: 5, borderRadius: 3, backgroundColor: "#00000012", marginTop: 10, overflow: "hidden" },
  progressFill: { height: 5, borderRadius: 3, backgroundColor: "#7A1F1F" },
  progressFillDone: { backgroundColor: "#16a34a" },
  testOutRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#7A1F1F0d",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    marginLeft: 8,
  },
  testOutText: { flex: 1, fontSize: 13, color: "#000000aa" },
  testOutBtn: { borderWidth: 1, borderColor: "#7A1F1F", borderRadius: 999, paddingHorizontal: 14, paddingVertical: 7 },
  testOutBtnText: { color: "#7A1F1F", fontWeight: "700", fontSize: 13 },
  extrasRow: { paddingVertical: 10, marginLeft: 8, marginBottom: 4 },
  extrasText: { fontSize: 14, color: "#00000099", fontWeight: "600" },
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
  rowInUnit: { marginLeft: 8 },
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
