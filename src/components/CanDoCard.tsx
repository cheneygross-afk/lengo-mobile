import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import TapText from "@/components/TapText";
import { ENGLISH_LANG, SPANISH_LANG } from "@/lib/speech";
import type { SpanishLevelPath } from "@/lib/lessons/levels";
import { CAN_DO_SKILL_LABELS, canDoFor, canDoLanguage } from "@/lib/lessons/canDo";

// The level's CEFR can-do statements at the top of its lesson list (the
// website's CanDoList): what you'll be able to do once you finish it.
// English at A1/A2, Spanish from B1 up; every word is tap-to-hear.
export default function CanDoCard({ levelPath }: { levelPath: SpanishLevelPath }) {
  const lang = canDoLanguage(levelPath);
  const statements = canDoFor(levelPath);
  const [open, setOpen] = useState(true);
  const heading = lang === "es" ? "Al terminar este nivel, podrás…" : "By the end of this level you can…";
  const speech = lang === "es" ? SPANISH_LANG : ENGLISH_LANG;
  const mode = lang === "es" ? ("target" as const) : ("english" as const);
  if (!statements.length) return null;

  return (
    <View style={styles.card}>
      <Pressable style={styles.headerRow} onPress={() => setOpen((o) => !o)} accessibilityRole="button">
        <TapText text={heading} lang={speech} mode={mode} style={styles.heading} />
        <Text style={styles.toggle}>{open ? "Hide" : "Show"}</Text>
      </Pressable>
      {open &&
        statements.map((s) => (
          <View key={s.en} style={styles.row}>
            <TapText text={CAN_DO_SKILL_LABELS[s.skill][lang]} lang={speech} mode={mode} style={styles.skill} />
            <TapText text={s[lang]} lang={speech} mode={mode} style={styles.statement} />
          </View>
        ))}
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
  toggle: { fontSize: 12, color: "#00000080" },
  row: { marginTop: 10 },
  skill: { fontSize: 11, fontWeight: "700", color: "#00000080", textTransform: "uppercase", letterSpacing: 0.5 },
  statement: { fontSize: 14, color: "#000000CC", marginTop: 2, lineHeight: 20 },
});
