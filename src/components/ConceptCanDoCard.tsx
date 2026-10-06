import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import type { CanDoStatement } from "@/lib/curriculum/assess";
import type { Lesson } from "@/lib/lessons/types";

// Can-do statements measured from progress, for the curriculum-engine
// courses (the Chinese beta; the website's ConceptCanDoList): a statement
// is ticked once the lessons teaching every concept it needs are done.
export default function ConceptCanDoCard({
  statements,
  lessons,
  completed,
}: {
  statements: CanDoStatement[];
  lessons: Lesson[];
  completed: Record<string, boolean>;
}) {
  const [open, setOpen] = useState(true);
  if (!statements.length) return null;
  const taughtBy = new Map<string, string>();
  for (const l of lessons) for (const c of l.teaches ?? []) if (!taughtBy.has(c)) taughtBy.set(c, l.slug);
  const can = (s: CanDoStatement) => s.concepts.every((c) => completed[taughtBy.get(c) ?? ""]);
  const done = statements.filter(can).length;

  return (
    <View style={styles.card}>
      <Pressable style={styles.headerRow} onPress={() => setOpen((o) => !o)} accessibilityRole="button">
        <Text style={styles.heading}>
          By the end of this level you can… <Text style={styles.count}>({done} of {statements.length} so far)</Text>
        </Text>
        <Text style={styles.toggle}>{open ? "Hide" : "Show"}</Text>
      </Pressable>
      {open &&
        statements.map((s) => {
          const ok = can(s);
          return (
            <View key={s.id} style={styles.row}>
              <Text style={[styles.mark, ok && styles.markDone]}>{ok ? "✓" : "○"}</Text>
              <View style={styles.rowText}>
                <Text style={styles.skill}>{s.skill}</Text>
                <Text style={[styles.statement, !ok && styles.statementTodo]}>{s.text}</Text>
              </View>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#00000012",
    marginBottom: 12,
  },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 },
  heading: { fontSize: 15, fontWeight: "600", color: "#000", flexShrink: 1 },
  count: { fontSize: 13, fontWeight: "400", color: "#00000099" },
  toggle: { fontSize: 12, color: "#00000080" },
  row: { marginTop: 10, flexDirection: "row", gap: 10 },
  mark: { width: 16, fontSize: 14, color: "#0000004D" },
  markDone: { color: "#15803D" },
  rowText: { flex: 1 },
  skill: { fontSize: 11, fontWeight: "700", color: "#00000080", textTransform: "uppercase", letterSpacing: 0.5 },
  statement: { fontSize: 14, color: "#000000CC", marginTop: 2, lineHeight: 20 },
  statementTodo: { color: "#00000099" },
});
