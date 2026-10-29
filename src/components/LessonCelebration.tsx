// The end-of-lesson screen's pieces, matching the website's lesson card
// (lengo src/components/lessons/LessonCelebration.tsx): a ring that fills to
// the score, a short confetti burst for a pass, and today's streak and study
// minutes. Plain Animated (native driver), nothing new to install.
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { colors, fonts } from "@/ui/theme";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScoreRing({ percent, color }: { percent: number; color: string }) {
  const fill = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fill, {
      toValue: Math.min(Math.max(percent, 0), 100) / 100,
      duration: 900,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [percent, fill]);
  const offset = fill.interpolate({ inputRange: [0, 1], outputRange: [CIRCUMFERENCE, 0] });
  return (
    <View style={ring.wrap}>
      <Svg width={96} height={96} viewBox="0 0 96 96" style={{ transform: [{ rotate: "-90deg" }] }}>
        <Circle cx={48} cy={48} r={RADIUS} fill="none" stroke="#8B00001A" strokeWidth={8} />
        <AnimatedCircle
          cx={48}
          cy={48}
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={`${CIRCUMFERENCE}`}
          strokeDashoffset={offset}
        />
      </Svg>
      <View style={ring.label}>
        <Text style={ring.percent}>{percent}%</Text>
      </View>
    </View>
  );
}

const ring = StyleSheet.create({
  wrap: { width: 96, height: 96, marginBottom: 18 },
  label: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, alignItems: "center", justifyContent: "center" },
  percent: { fontFamily: fonts.display, fontSize: 24, color: colors.ink },
});

// Fixed pieces: angle, distance and colour cycle through the site's palette.
const CONFETTI_COLORS = [colors.saffron, colors.sea, colors.foreground, "#DF8A32", colors.success];
const PIECES = Array.from({ length: 22 }, (_, i) => {
  const angle = (i / 22) * Math.PI * 2 + (i % 3) * 0.2;
  const dist = 80 + ((i * 37) % 60);
  return {
    dx: Math.round(Math.cos(angle) * dist * 1.4),
    dy: Math.round(Math.sin(angle) * dist - 30),
    rot: `${((i * 83) % 360) + 180}deg`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    round: i % 4 === 0,
  };
});

export function Confetti() {
  const t = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(t, { toValue: 1, duration: 1400, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
  }, [t]);
  return (
    <View pointerEvents="none" style={conf.origin}>
      {PIECES.map((p, i) => (
        <Animated.View
          key={i}
          style={[
            p.round ? conf.dot : conf.bit,
            {
              backgroundColor: p.color,
              opacity: t.interpolate({ inputRange: [0, 0.7, 1], outputRange: [1, 1, 0] }),
              transform: [
                { translateX: t.interpolate({ inputRange: [0, 1], outputRange: [0, p.dx] }) },
                { translateY: t.interpolate({ inputRange: [0, 1], outputRange: [0, p.dy] }) },
                { rotate: t.interpolate({ inputRange: [0, 1], outputRange: ["0deg", p.rot] }) },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
}

const conf = StyleSheet.create({
  origin: { position: "absolute", top: 108, left: "50%", width: 0, height: 0 },
  dot: { position: "absolute", width: 8, height: 8, borderRadius: 4 },
  bit: { position: "absolute", width: 6, height: 10, borderRadius: 2 },
});

export function TodayStats({
  streak,
  minutesToday,
  goal,
  color,
}: {
  streak: number;
  minutesToday: number;
  goal: number;
  color: string;
}) {
  const met = minutesToday >= goal;
  return (
    <View style={stats.row}>
      {streak > 0 && (
        <View style={stats.pill}>
          <Text style={stats.textBold}>🔥 {streak}-day streak</Text>
        </View>
      )}
      <View style={stats.pill}>
        <Text style={stats.text}>{met ? "🏅 Daily goal met!" : `⏱ ${minutesToday} of ${goal} min today`}</Text>
        <View style={stats.track}>
          <View style={[stats.fill, { width: `${Math.min(100, Math.round((minutesToday / goal) * 100))}%`, backgroundColor: color }]} />
        </View>
      </View>
    </View>
  );
}

const stats = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 20 },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2A151312",
    borderRadius: 999,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  text: { fontSize: 13, color: colors.ink },
  textBold: { fontSize: 13, color: colors.ink, fontWeight: "700" },
  track: { width: 48, height: 6, borderRadius: 3, backgroundColor: "#8B00001A", overflow: "hidden" },
  fill: { height: "100%", borderRadius: 3 },
});
