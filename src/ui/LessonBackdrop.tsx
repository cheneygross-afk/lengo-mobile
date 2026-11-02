import { StyleSheet, Text, View } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

// Behind a lesson: a wash of the level's colour from the top right, a warm
// saffron glow from the bottom left, and one big faint letter of the
// course's language in the corner, so the screen isn't a plain white page.
// Static (nothing moves), drawn behind the content and never read aloud.
export default function LessonBackdrop({ accent, glyph }: { accent: string; glyph: string }) {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill} accessible={false} importantForAccessibility="no-hide-descendants">
      <Svg width="100%" height="100%">
        <Defs>
          <RadialGradient id="lessonAccent" cx="100%" cy="0%" r="85%" fx="100%" fy="0%">
            <Stop offset="0" stopColor={accent} stopOpacity={0.26} />
            <Stop offset="1" stopColor={accent} stopOpacity={0} />
          </RadialGradient>
          <RadialGradient id="lessonSaffron" cx="0%" cy="100%" r="80%" fx="0%" fy="100%">
            <Stop offset="0" stopColor="#E9A23B" stopOpacity={0.22} />
            <Stop offset="1" stopColor="#E9A23B" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#lessonAccent)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#lessonSaffron)" />
      </Svg>
      <Text style={[styles.glyph, { color: accent }]}>{glyph}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  glyph: {
    position: "absolute",
    right: -18,
    bottom: 40,
    fontSize: 220,
    lineHeight: 260,
    opacity: 0.07,
    fontWeight: "700",
  },
});
