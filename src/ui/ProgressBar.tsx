import { View } from "react-native";
import { colors } from "@/ui/theme";

/** A thin rounded progress bar, filled in the level's color. */
export default function ProgressBar({ done, total, color = colors.saffron }: { done: number; total: number; color?: string }) {
  const pct = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
  return (
    <View style={{ height: 6, borderRadius: 3, backgroundColor: "#2A15130F", overflow: "hidden" }}>
      <View style={{ height: 6, borderRadius: 3, width: `${pct}%`, backgroundColor: color }} />
    </View>
  );
}
