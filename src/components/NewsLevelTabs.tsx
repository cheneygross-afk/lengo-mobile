import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors, levelColor } from "@/ui/theme";
import { NEWS_LEVELS, type NewsLevel } from "@/lib/news/types";
import { NEWS_LEVEL_LABEL } from "@/lib/news/api";

// The level switch on the news screens, easiest first (as on the website).
export default function NewsLevelTabs({ level, onChange }: { level: NewsLevel; onChange: (l: NewsLevel) => void }) {
  return (
    <View style={s.row} accessibilityRole="tablist">
      {NEWS_LEVELS.map((l, i) => {
        const on = l === level;
        return (
          <Pressable
            key={l}
            accessibilityRole="tab"
            accessibilityState={{ selected: on }}
            onPress={() => onChange(l)}
            style={[s.tab, on && s.tabOn]}
          >
            <View style={[s.dot, { backgroundColor: levelColor(i === 3 ? 4 : i) }]} />
            <Text style={[s.label, on && s.labelOn]}>{NEWS_LEVEL_LABEL[l]}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tab: { flexDirection: "row", alignItems: "center", gap: 6, borderWidth: 1, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 7, backgroundColor: colors.card },
  tabOn: { backgroundColor: colors.ink, borderColor: colors.ink },
  dot: { width: 9, height: 9, borderRadius: 5 },
  label: { fontSize: 13, fontWeight: "600", color: colors.inkSoft },
  labelOn: { color: "#fff" },
});
