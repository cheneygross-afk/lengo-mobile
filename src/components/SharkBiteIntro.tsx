import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Circle, Defs, LinearGradient, Path, Polygon, Stop } from "react-native-svg";

const SCREEN_H = Dimensions.get("window").height;

// Local shark artwork coordinates (viewBox 0 0 200 180). The two eyes sit
// at (62,12) and (138,12) -- local point (100,12), their midpoint, gets
// aligned to the measured center of the "ee" in "Deep" at runtime, so
// this lines up on any device/screen size.
const VB_W = 200;
const VB_H = 180;
const LOCAL_MID_X = 100;
const LOCAL_MID_Y = 12;
const LOCAL_EYE_SPACING = 76;

// A front-on, "rising from below" shark head -- deliberately abstract and
// angular rather than a cute cartoon face: a sharp geometric silhouette,
// four bold fangs instead of a fussy row of little teeth, and the eyes
// are just plain solid dots in the brand maroon (no sclera/pupil/brows)
// so they read cleanly as stand-ins for the wordmark's two "e"s.
function Shark({ size }: { size: number }) {
  const w = size;
  const h = (VB_H / VB_W) * size;
  return (
    <Svg width={w} height={h} viewBox="0 0 200 180">
      <Defs>
        <LinearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#3E5568" />
          <Stop offset="100%" stopColor="#1C2833" />
        </LinearGradient>
      </Defs>
      <Polygon points="150,90 172,55 158,25" fill="#1C2833" />
      <Polygon points="35,120 5,145 30,155" fill="#1C2833" />
      <Polygon points="165,120 195,145 170,155" fill="#1C2833" />
      <Polygon
        points="100,176 32,144 14,84 22,42 50,10 80,2 120,2 150,10 178,42 186,84 168,144"
        fill="url(#bodyGrad)"
        stroke="#12181e"
        strokeWidth={2}
      />
      <Path d="M 26,48 L 60,20 L 140,20 L 174,48 L 140,76 L 60,76 Z" fill="#7A1F1F" stroke="#12181e" strokeWidth={2} />
      <Polygon points="68,20 88,20 78,40" fill="#F7F3EC" />
      <Polygon points="112,20 132,20 122,40" fill="#F7F3EC" />
      <Polygon points="70,76 90,76 80,56" fill="#F7F3EC" />
      <Polygon points="110,76 130,76 120,56" fill="#F7F3EC" />
      <Circle cx={62} cy={12} r={8} fill="#7A1F1F" />
      <Circle cx={138} cy={12} r={8} fill="#7A1F1F" />
    </Svg>
  );
}

type Target = { x: number; y: number; scale: number };
type Rect = { x: number; y: number; width: number; height: number };

// Plays once on cold launch. The shark rises up from directly below the
// two "e"s in "Deep", bites them, and its own eyes take their place --
// then the scene holds a beat and fades so RootNavigator can hand off to
// Login/Home. The bite target is measured at runtime (via onLayout on the
// "ee" text run) rather than hard-coded, so it lines up regardless of
// screen size.
export default function SharkBiteIntro({ onFinish }: { onFinish: () => void }) {
  const [rowLayout, setRowLayout] = useState<{ x: number; y: number } | null>(null);
  const [eeLayout, setEeLayout] = useState<Rect | null>(null);
  const [target, setTarget] = useState<Target | null>(null);
  const started = useRef(false);

  const riseY = useRef(new Animated.Value(0)).current; // offset above/below resting spot
  const bobY = useRef(new Animated.Value(0)).current;
  const tilt = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;
  const eeOpacity = useRef(new Animated.Value(1)).current;
  const flash = useRef(new Animated.Value(0)).current;
  const shakeX = useRef(new Animated.Value(0)).current;
  const sceneOpacity = useRef(new Animated.Value(1)).current;

  // Safety net: don't hang the splash forever if layout measurement is
  // ever slow/unreliable on some device -- fall back to a reasonable
  // estimate for this copy/font size after half a second.
  useEffect(() => {
    const t = setTimeout(() => {
      if (!started.current) {
        setRowLayout((r) => r ?? { x: 0, y: 0 });
        setEeLayout((e) => e ?? { x: 90, y: 0, width: 37, height: 34 });
      }
    }, 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!rowLayout || !eeLayout || started.current) return;
    started.current = true;

    const absX = rowLayout.x + eeLayout.x + eeLayout.width / 2;
    // Text bounding boxes (from onLayout) include a font's internal
    // leading above/below the visible glyph ink -- with the logo's
    // lineHeight pinned to its fontSize (see styles.logo), that leading
    // works out to Pacifico's own ascent/descent, and the ink center for
    // "ee" sits at ~60% down that box (measured precisely against the
    // rendered web font; see the HTML preview this was ported from).
    const absY = rowLayout.y + eeLayout.y + eeLayout.height * 0.605;
    const scale = Math.max(0.3, Math.min(0.52, (eeLayout.width * 1.3) / LOCAL_EYE_SPACING));
    setTarget({ x: absX, y: absY, scale });

    const wiggle = Animated.loop(
      Animated.sequence([
        Animated.timing(tilt, { toValue: 1, duration: 220, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(tilt, { toValue: -1, duration: 220, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ]),
      { iterations: 4 }
    );
    const bob = Animated.loop(
      Animated.sequence([
        Animated.timing(bobY, { toValue: -4, duration: 260, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(bobY, { toValue: 4, duration: 260, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ]),
      { iterations: 4 }
    );
    wiggle.start();
    bob.start();

    riseY.setValue(SCREEN_H * 0.4);

    Animated.sequence([
      Animated.timing(riseY, { toValue: 0, duration: 850, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      Animated.parallel([
        Animated.sequence([
          Animated.timing(pulse, { toValue: 1.12, duration: 100, useNativeDriver: true }),
          Animated.timing(pulse, { toValue: 1, duration: 180, useNativeDriver: true }),
        ]),
        Animated.timing(eeOpacity, { toValue: 0, duration: 90, useNativeDriver: true }),
        Animated.sequence([
          Animated.timing(flash, { toValue: 1, duration: 60, useNativeDriver: true }),
          Animated.timing(flash, { toValue: 0, duration: 280, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(shakeX, { toValue: 6, duration: 40, useNativeDriver: true }),
          Animated.timing(shakeX, { toValue: -6, duration: 40, useNativeDriver: true }),
          Animated.timing(shakeX, { toValue: 4, duration: 40, useNativeDriver: true }),
          Animated.timing(shakeX, { toValue: 0, duration: 40, useNativeDriver: true }),
        ]),
      ]),
      Animated.delay(1150),
      Animated.timing(sceneOpacity, { toValue: 0, duration: 350, useNativeDriver: true }),
    ]).start(() => {
      wiggle.stop();
      bob.stop();
      onFinish();
    });

    return () => {
      wiggle.stop();
      bob.stop();
    };
  }, [rowLayout, eeLayout]);

  const tiltDeg = tilt.interpolate({ inputRange: [-1, 1], outputRange: ["-6deg", "6deg"] });
  const svgSize = target ? VB_W * target.scale : 0;
  const wrapLeft = target ? target.x - LOCAL_MID_X * target.scale : 0;
  const wrapTop = target ? target.y - LOCAL_MID_Y * target.scale : 0;

  return (
    <Animated.View style={[styles.container, { opacity: sceneOpacity }]}>
      <Animated.View style={[styles.stage, { transform: [{ translateX: shakeX }] }]}>
        {target && (
          <Animated.View
            pointerEvents="none"
            style={[styles.flash, { left: target.x - 37, top: target.y - 37, opacity: flash }]}
          />
        )}

        <View
          style={styles.logoRow}
          onLayout={(e: LayoutChangeEvent) => {
            const { x, y } = e.nativeEvent.layout;
            setRowLayout({ x, y });
          }}
        >
          <Text style={styles.logo}>D</Text>
          <Animated.Text
            style={[styles.logo, { opacity: eeOpacity }]}
            onLayout={(e: LayoutChangeEvent) => {
              const { x, y, width, height } = e.nativeEvent.layout;
              setEeLayout({ x, y, width, height });
            }}
          >
            ee
          </Animated.Text>
          <Text style={styles.logo}>p End</Text>
        </View>

        {target && (
          <Animated.View
            style={[
              styles.sharkWrap,
              {
                left: wrapLeft,
                top: wrapTop,
                transform: [{ translateY: Animated.add(riseY, bobY) }, { scale: pulse }, { rotate: tiltDeg }],
              },
            ]}
          >
            <Shark size={svgSize} />
          </Animated.View>
        )}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" },
  stage: { alignItems: "center", justifyContent: "center" },
  logoRow: { flexDirection: "row", alignItems: "baseline" },
  logo: { fontFamily: "Pacifico_400Regular", fontSize: 46, lineHeight: 46, color: "#7A1F1F" },
  sharkWrap: { position: "absolute" },
  flash: {
    position: "absolute",
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#7A1F1F",
    opacity: 0.5,
  },
});
