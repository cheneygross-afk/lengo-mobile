// The "Getting the audio ready" card shown while useAudioPreload makes a
// quiz's or tool's clips ready (same look as the lesson screen's).
import { View, Text, Pressable, StyleSheet, type StyleProp, type ViewStyle } from "react-native";
import { fonts } from "@/ui/theme";
import type { AudioPreload } from "@/lib/useAudioPreload";

export default function AudioGate({
  done,
  total,
  canSkip,
  skip,
  accent = "#8B0000",
  style,
}: Omit<AudioPreload, "ready"> & { accent?: string; style?: StyleProp<ViewStyle> }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return (
    <View style={[s.card, style]} accessibilityLiveRegion="polite">
      <Text style={s.icon}>🎧</Text>
      <Text style={s.title}>Getting the audio ready…</Text>
      <Text style={s.sub}>So every word plays instantly once you start.</Text>
      <View style={s.track}>
        <View style={[s.fill, { backgroundColor: accent, width: `${pct}%` }]} />
      </View>
      {total > 0 ? (
        <Text style={s.count}>
          {done} / {total}
        </Text>
      ) : null}
      {canSkip ? (
        <Pressable hitSlop={10} onPress={skip}>
          <Text style={s.skip}>Start now</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    margin: 16,
    marginTop: 24,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.92)",
    borderWidth: 1,
    borderColor: "rgba(42,21,19,0.08)",
    alignItems: "center",
  },
  icon: { fontSize: 30 },
  title: { marginTop: 8, fontSize: 20, color: "#2A1513", fontFamily: fonts.display, textAlign: "center" },
  sub: { marginTop: 4, fontSize: 14, color: "rgba(42,21,19,0.65)", textAlign: "center" },
  track: {
    marginTop: 18,
    height: 8,
    width: "80%",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "rgba(42,21,19,0.12)",
  },
  fill: { height: "100%", borderRadius: 4 },
  count: { marginTop: 8, fontSize: 12, color: "rgba(42,21,19,0.5)", fontVariant: ["tabular-nums"] },
  skip: { marginTop: 14, fontSize: 14, color: "rgba(42,21,19,0.6)", textDecorationLine: "underline" },
});
