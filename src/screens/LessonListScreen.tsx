import { useCallback, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { A1_LESSONS } from "@/lib/lessons/a1";
import { getCompletedMap } from "@/lib/lessons/completion";

type Props = NativeStackScreenProps<AppStackParamList, "LessonList">;

// MVP ships A1 only -- the other levels (a2.ts, b1.ts, ...) are the exact
// same shape and can be copied over from the web repo (src/lib/lessons/)
// and added here the same way once there's a level picker.
const LEVEL_PATH = "a1";

export default function LessonListScreen({ navigation }: Props) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  // Re-read completion state every time this screen gains focus (e.g.
  // coming back from finishing a lesson), same as the web app re-reading
  // localStorage on mount.
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

  const completedCount = A1_LESSONS.filter((l) => completed[l.slug]).length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {completedCount} of {A1_LESSONS.length} completed
      </Text>
      <FlatList
        data={A1_LESSONS}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => {
          const done = !!completed[item.slug];
          return (
            <Pressable
              style={styles.row}
              onPress={() => navigation.navigate("LessonRunner", { slug: item.slug })}
            >
              <View style={[styles.badge, done && styles.badgeDone]}>
                <Text style={[styles.badgeText, done && styles.badgeTextDone]}>
                  {done ? "✓" : index + 1}
                </Text>
              </View>
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowSummary} numberOfLines={2}>
                  {item.summary}
                </Text>
              </View>
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
    fontSize: 13,
    color: "#00000099",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  list: { paddingHorizontal: 16, paddingBottom: 24, gap: 10 },
  row: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#00000012",
    alignItems: "center",
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
  badgeText: { fontWeight: "700", color: "#000" },
  badgeTextDone: { color: "#fff" },
  rowBody: { flex: 1 },
  rowTitle: { fontSize: 16, fontWeight: "600", color: "#000" },
  rowSummary: { fontSize: 13, color: "#00000099", marginTop: 2 },
});
