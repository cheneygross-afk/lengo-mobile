import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SPANISH_VARIETIES, setSpanishVariety, useSpanishVariety, type SpanishVariety } from "@/lib/spanishVariety";

// "Spanish I want to learn" -- sits under the pronunciation voice pills
// in SettingsScreen, styled to match them. Saves straight away (see
// spanishVariety.ts); synced with the website's Settings.
export default function SpanishVarietyPicker() {
  const variety = useSpanishVariety();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function pick(next: SpanishVariety) {
    if (next === variety || saving) return;
    setError(null);
    setSaving(true);
    const message = await setSpanishVariety(next);
    setSaving(false);
    if (message) setError(message);
  }

  return (
    <View style={s.wrap}>
      <Text style={s.label}>Spanish I want to learn</Text>
      <View style={s.row}>
        {SPANISH_VARIETIES.map((v) => {
          const active = variety === v.value;
          return (
            <Pressable
              key={v.value}
              disabled={saving}
              onPress={() => pick(v.value)}
              style={[s.pill, active && s.pillActive]}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
            >
              <Text style={[s.pillText, active && s.pillTextActive]}>{v.label}</Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={s.sub}>
        {variety === "latam"
          ? "Latin American voice. Vosotros forms are shown for recognition only; you won't be asked to produce them."
          : "Castilian voice, and vosotros forms are practised along with everything else."}
      </Text>
      {error && <Text style={s.error}>{error}</Text>}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { marginTop: 20 },
  label: { fontSize: 14, fontWeight: "600", color: "#000" },
  row: { flexDirection: "row", gap: 10, marginTop: 10, flexWrap: "wrap" },
  pill: {
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
  },
  pillActive: { backgroundColor: "#000", borderColor: "#000" },
  pillText: { fontSize: 14, fontWeight: "600", color: "#000" },
  pillTextActive: { color: "#fff" },
  sub: { fontSize: 12.5, color: "#00000099", marginTop: 10, lineHeight: 17 },
  error: { fontSize: 13, color: "#b91c1c", marginTop: 6 },
});
