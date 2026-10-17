import { StyleSheet, View } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

// The warm glows behind every website page: saffron top left, sea top
// right. Static (nothing moves) and drawn behind the screen's content.
export default function GlowBackground() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width="100%" height="100%">
        <Defs>
          <RadialGradient id="glowSaffron" cx="0%" cy="0%" r="75%" fx="0%" fy="0%">
            <Stop offset="0" stopColor="#E9A23B" stopOpacity={0.22} />
            <Stop offset="1" stopColor="#E9A23B" stopOpacity={0} />
          </RadialGradient>
          <RadialGradient id="glowSea" cx="100%" cy="8%" r="60%" fx="100%" fy="8%">
            <Stop offset="0" stopColor="#1F6F78" stopOpacity={0.12} />
            <Stop offset="1" stopColor="#1F6F78" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="60%" fill="url(#glowSaffron)" />
        <Rect x="0" y="0" width="100%" height="60%" fill="url(#glowSea)" />
      </Svg>
    </View>
  );
}
