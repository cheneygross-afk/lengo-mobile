import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/ui/theme";

// Line icons in the website's style (24px grid, round strokes).
const PATHS = {
  lessons: "M4 19.5V6a2 2 0 0 1 2-2h12v14H6a2 2 0 0 0-2 2zm0 0A1.5 1.5 0 0 0 5.5 21H18 M8 8h6",
  flashcards: "M7 4h11a2 2 0 0 1 2 2v9 M4 8h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z",
  readings: "M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2zm0 0v13",
  review: "M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4",
  writing: "M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4z M13.5 6.5l4 4",
  tools: "M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z",
  grammar: "M5 4h10l4 4v12H5z M15 4v4h4 M8 12h8 M8 16h6",
  conjugation: "M4 7h16 M4 12h10 M4 17h6 M17 14l3 3-3 3",
  exam: "M9 4h6v3H9z M7 5H5v15h14V5h-2 M8.5 13l2.5 2.5 4.5-5",
  glossary: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20 20l-4-4",
  placement: "M12 3l8 4-8 4-8-4 8-4z M4 12l8 4 8-4 M4 17l8 4 8-4",
  vocab: "M4 6h16 M4 12h16 M4 18h10",
  chevron: "M9 6l6 6-6 6",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  flame: "M12 21c4 0 7-2.7 7-6.5 0-3.5-2.5-5.5-4-8.5-1 2-2 3-3.5 3.5C11 7 11 5 10 3 7 6 5 9.5 5 14.5 5 18.3 8 21 12 21z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2",
  check: "M5 12.5l4.5 4.5L19 7",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 22, color = colors.foreground, strokeWidth = 1.8 }: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d={PATHS[name]} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export type Tint = "saffron" | "sea" | "rose";

const TINTS: Record<Tint, { bg: string; fg: string }> = {
  saffron: { bg: colors.saffronSoft, fg: "#B4741A" },
  sea: { bg: colors.seaSoft, fg: colors.sea },
  rose: { bg: colors.roseSoft, fg: colors.foreground },
};

/** The tinted rounded square an icon sits in, as on the website's tool cards. */
export function IconTile({ name, tint = "rose", size = 44 }: { name: IconName; tint?: Tint; size?: number }) {
  const t = TINTS[tint];
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.3,
        backgroundColor: t.bg,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name={name} color={t.fg} size={size * 0.5} />
    </View>
  );
}
