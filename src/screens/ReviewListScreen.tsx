import { useCallback, useMemo, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { A1_LESSONS } from "@/lib/lessons/a1";
import { getReviewSlugs, removeFromReview } from "@/lib/lessons/review";

type Props = NativeStackScreenProps<AppStackParamList, "Review">;

const LEVEL_PATH = "a1";

// Screen 7: lessons a learner added to review from the lesson-complete
// screen, so they can find and retry them later without hunting through
// the full lesson list.
export default function ReviewListScreen({ navigation }: Props) {
  const [slugs, setSlugs] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getReviewSlugs(LEVEL_PATH).then((list) => {
        if (!cancelled) setSlugs(list);
      });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  const lessons = useMemo(
    () => slugs.map((slug) => A1_LESSONS.find((l) => l.slug === slug)).filter((l): l is (typeof A1_LESSONS)[number] => !!l),
    [slugs]
  );

  async function handleRemove(slug: string) {
    setSlugs((prev) => prev.filter((s) => s !== slug));
    await removeFromReview(LEVEL_PATH, slug);
  }

  if (lessons.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Nothing here yet</Text>
        <Text style={styles.emptyBody}>
          After you finish a lesson, tap "Add to review" to save it here and try it again later.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{lessons.length} lesson{lessons.length === 1 ? "" : "s"} saved for review</Text>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Pressable
              style={styles.rowBody}
              onPress={() => navigation.navigate("LessonRunner", { slug: item.slug })}
            >
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowSummary} numberOfLines={2}>
                {item.summary}
              </Text>
            </Pressable>
            <Pressable style={styles.removeBtn} onPress={() => handleRemove(item.slug)} hitSlop={8}>
              <Text style={styles.removeBtnText}>Remove</Text>
            </Pressable>
          </View>
        )}
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
  list: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 24 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#00000012",
    marginBottom: 10,
  },
  rowBody: { flex: 1 },
  rowTitle: { fontSize: 16, fontWeight: "600", color: "#000" },
  rowSummary: { fontSize: 13, color: "#00000099", marginTop: 2 },
  removeBtn: { paddingVertical: 6, paddingHorizontal: 8 },
  removeBtnText: { color: "#dc2626", fontSize: 12, fontWeight: "600" },
  emptyContainer: { flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center", padding: 32 },
  emptyTitle: { fontSize: 18, fontWeight: "700", color: "#000", marginBottom: 8 },
  emptyBody: { fontSize: 14, color: "#00000099", textAlign: "center", lineHeight: 20 },
});
