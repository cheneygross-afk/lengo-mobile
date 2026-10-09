import { useCallback, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import type { Lesson } from "@/lib/lessons/types";
import { ALL_LEVEL_PATHS, LESSON_SOURCES, findLessonBySlug, moduleKeyForLesson } from "@/lib/lessons/registry";
import { getReviewSlugs, removeFromReview } from "@/lib/lessons/review";
import { courseOfLevelPath } from "@/lib/courses";
import { FRENCH_LEVELS, loadFrenchLevel } from "@/lib/lessons/french";

type Saved = { lesson: Lesson; levelPath: string };

/** A course's saved lessons, with the levelPath each was saved under. */
async function loadSaved(lang: string): Promise<Saved[]> {
  if (lang === "fr") {
    // French slugs can repeat a Spanish one, so each is looked up in its
    // own level (loaded only when something there was saved).
    const lists = await Promise.all(FRENCH_LEVELS.map((l) => getReviewSlugs(l.levelPath)));
    const out: Saved[] = [];
    for (const [i, level] of FRENCH_LEVELS.entries()) {
      if (!lists[i].length) continue;
      const { lessons } = await loadFrenchLevel(level.key);
      for (const slug of lists[i]) {
        const lesson = lessons.find((l) => l.slug === slug);
        if (lesson) out.push({ lesson, levelPath: level.levelPath });
      }
    }
    return out;
  }
  const keys = ALL_LEVEL_PATHS.filter((key) => courseOfLevelPath(key) === lang);
  const lists = await Promise.all(keys.map((key) => getReviewSlugs(LESSON_SOURCES[key].levelPath)));
  return lists
    .flat()
    .map((slug) => findLessonBySlug(slug))
    .filter((l): l is Lesson => !!l)
    .map((lesson) => ({ lesson, levelPath: LESSON_SOURCES[moduleKeyForLesson(lesson)].levelPath }));
}

type Props = NativeStackScreenProps<AppStackParamList, "Review">;

// Screen 7: lessons a learner added to review from the lesson-complete
// screen, so they can find and retry them later without hunting through
// the full lesson list. Shared screen component across every track
// (Spanish + the Japanese beta's modules), but each track's review list
// is disjoint -- review is stored per levelPath (see lessons/review.ts),
// and this only reads the level paths belonging to the language passed
// in, the same "es"/"ja" split Flashcards and Home already use, rather
// than merging Spanish and Japanese into one list.
export default function ReviewListScreen({ navigation, route }: Props) {
  const lang = route.params?.lang ?? "es";
  const [lessons, setLessons] = useState<Saved[]>([]);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      loadSaved(lang).then((found) => {
        if (!cancelled) setLessons(found);
      });
      return () => {
        cancelled = true;
      };
    }, [lang])
  );

  async function handleRemove(item: Saved) {
    setLessons((prev) => prev.filter((l) => !(l.lesson.slug === item.lesson.slug && l.levelPath === item.levelPath)));
    await removeFromReview(item.levelPath, item.lesson.slug);
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
        keyExtractor={(item) => `${item.levelPath}/${item.lesson.slug}`}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Pressable
              style={styles.rowBody}
              onPress={() =>
                navigation.navigate(
                  "LessonRunner",
                  lang === "fr" ? { slug: item.lesson.slug, levelPath: item.levelPath } : { slug: item.lesson.slug }
                )
              }
            >
              <Text style={styles.rowTitle}>{item.lesson.title}</Text>
              <Text style={styles.rowSummary} numberOfLines={2}>
                {item.lesson.summary}
              </Text>
            </Pressable>
            <Pressable style={styles.removeBtn} onPress={() => handleRemove(item)} hitSlop={8}>
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
