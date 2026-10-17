// The website's look (deependspanish.com, src/app/globals.css): warm
// paper background, deep red, saffron and sea accents, Fraunces for
// headings and Pacifico for the wordmark. Screens pull from here so the
// app and the site read as one product.
import { Platform, type ViewStyle } from "react-native";

export const colors = {
  background: "#FAF7F2",
  foreground: "#8B0000",
  ink: "#2A1513",
  inkSoft: "#2A1513A6",
  inkMuted: "#2A151380",
  border: "#8B000014",
  card: "#FFFFFF",
  saffron: "#E9A23B",
  saffronSoft: "#FCEFD6",
  sea: "#1F6F78",
  seaSoft: "#DCEFEE",
  roseSoft: "#F6E3E0",
  success: "#16A34A",
};

// One color per level, saffron (beginner) deepening to red (mastery),
// the same ramp as the website's level cards and roadmap.
export const LEVEL_COLORS = ["#E9A23B", "#DF8A32", "#CF6A2B", "#B94625", "#A2231B", "#8B0000"];

export function levelColor(index: number): string {
  return LEVEL_COLORS[Math.max(0, Math.min(LEVEL_COLORS.length - 1, index))];
}

export const fonts = {
  display: "Fraunces_600SemiBold",
  displayBold: "Fraunces_700Bold",
  logo: "Pacifico_400Regular",
};

// The soft lift the website's white cards have.
export const cardShadow: ViewStyle = Platform.select({
  android: { elevation: 2 },
  default: {
    shadowColor: "#8B0000",
    shadowOpacity: 0.07,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
  },
}) as ViewStyle;

export const card: ViewStyle = {
  backgroundColor: colors.card,
  borderRadius: 18,
  borderWidth: 1,
  borderColor: colors.border,
  ...cardShadow,
};
