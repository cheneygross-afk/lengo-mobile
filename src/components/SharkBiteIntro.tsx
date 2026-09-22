import { useEffect, useRef } from "react";
import { Animated, Dimensions, Easing, StyleSheet } from "react-native";
import Svg, { Circle, Polygon } from "react-native-svg";

const SCREEN_W = Dimensions.get("window").width;

const SHARK_COLOR = "#3E5568";
const SHARK_OUTLINE = "#1F2A33";
const FIN_COLOR = "#2C3E4C";
const MOUTH_COLOR = "#7A1F1F";
const TOOTH_COLOR = "#FFFFFF";

// A simple flat-style shark, facing left with its mouth already open (a
// toothy cartoon grin rather than an animated jaw -- much easier to get
// looking right than rigging a hinge, and at animation speed the "bite"
// reads from the lunge + impact reaction, not jaw articulation).
function Shark() {
  return (
    <Svg width={190} height={104} viewBox="0 0 220 120">
      <Polygon points="188,50 215,22 198,62 215,100 188,72" fill={FIN_COLOR} stroke={SHARK_OUTLINE} strokeWidth={2} />
      <Polygon
        points="10,55 28,38 60,26 100,22 140,28 170,40 190,55 190,70 170,82 140,95 100,100 60,96 28,84"
        fill={SHARK_COLOR}
        stroke={SHARK_OUTLINE}
        strokeWidth={2}
      />
      <Polygon points="95,23 120,26 108,2" fill={FIN_COLOR} stroke={SHARK_OUTLINE} strokeWidth={2} />
      <Polygon points="90,88 110,92 96,108" fill={FIN_COLOR} stroke={SHARK_OUTLINE} strokeWidth={2} />
      <Circle cx={35} cy={48} r={5} fill="#fff" />
      <Circle cx={36.5} cy={48} r={2.2} fill="#111" />
      <Polygon points="58,55 14,40 14,70" fill={MOUTH_COLOR} stroke={SHARK_OUTLINE} strokeWidth={1.5} />
      <Polygon points="18,41 28,41 23,50" fill={TOOTH_COLOR} />
      <Polygon points="31,45 41,45 36,55" fill={TOOTH_COLOR} />
      <Polygon points="44,49 54,49 49,58" fill={TOOTH_COLOR} />
      <Polygon points="18,69 28,69 23,60" fill={TOOTH_COLOR} />
      <Polygon points="31,65 41,65 36,55" fill={TOOTH_COLOR} />
      <Polygon points="44,61 54,61 49,52" fill={TOOTH_COLOR} />
    </Svg>
  );
}

// Plays once on cold launch: the shark swims in from off-screen, lunges
// into the "Deep End" wordmark, the logo reacts, then it swims off and
// the whole scene fades so RootNavigator can hand off to Login/Home.
export default function SharkBiteIntro({ onFinish }: { onFinish: () => void }) {
  const sharkX = useRef(new Animated.Value(SCREEN_W * 0.75)).current;
  const sharkY = useRef(new Animated.Value(0)).current;
  const sharkTilt = useRef(new Animated.Value(0)).current;
  const sharkScale = useRef(new Animated.Value(1)).current;
  const sharkOpacity = useRef(new Animated.Value(1)).current;

  const logoScale = useRef(new Animated.Value(1)).current;
  const logoTilt = useRef(new Animated.Value(0)).current;
  const flash = useRef(new Animated.Value(0)).current;
  const shakeX = useRef(new Animated.Value(0)).current;
  const sceneOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const wiggle = Animated.loop(
      Animated.sequence([
        Animated.timing(sharkTilt, { toValue: 1, duration: 220, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(sharkTilt, { toValue: -1, duration: 220, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ]),
      { iterations: 5 }
    );
    const bob = Animated.loop(
      Animated.sequence([
        Animated.timing(sharkY, { toValue: -6, duration: 260, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(sharkY, { toValue: 6, duration: 260, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ]),
      { iterations: 5 }
    );
    wiggle.start();
    bob.start();

    Animated.sequence([
      Animated.timing(sharkX, {
        toValue: SCREEN_W * 0.08,
        duration: 850,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(sharkX, { toValue: -10, duration: 140, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
        Animated.sequence([
          Animated.timing(sharkScale, { toValue: 1.14, duration: 110, useNativeDriver: true }),
          Animated.timing(sharkScale, { toValue: 1, duration: 160, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(logoScale, { toValue: 0.86, duration: 90, useNativeDriver: true }),
          Animated.spring(logoScale, { toValue: 1, friction: 4, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(logoTilt, { toValue: -1, duration: 70, useNativeDriver: true }),
          Animated.timing(logoTilt, { toValue: 1, duration: 90, useNativeDriver: true }),
          Animated.timing(logoTilt, { toValue: 0, duration: 90, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(flash, { toValue: 1, duration: 60, useNativeDriver: true }),
          Animated.timing(flash, { toValue: 0, duration: 260, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(shakeX, { toValue: 6, duration: 40, useNativeDriver: true }),
          Animated.timing(shakeX, { toValue: -6, duration: 40, useNativeDriver: true }),
          Animated.timing(shakeX, { toValue: 4, duration: 40, useNativeDriver: true }),
          Animated.timing(shakeX, { toValue: 0, duration: 40, useNativeDriver: true }),
        ]),
      ]),
      Animated.delay(250),
      Animated.parallel([
        Animated.timing(sharkX, {
          toValue: -SCREEN_W * 0.6,
          duration: 650,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(sharkOpacity, { toValue: 0, duration: 500, delay: 150, useNativeDriver: true }),
      ]),
      Animated.delay(150),
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
  }, []);

  const tiltDeg = sharkTilt.interpolate({ inputRange: [-1, 1], outputRange: ["-6deg", "6deg"] });
  const logoTiltDeg = logoTilt.interpolate({ inputRange: [-1, 1], outputRange: ["-4deg", "4deg"] });

  return (
    <Animated.View style={[styles.container, { opacity: sceneOpacity }]}>
      <Animated.View style={[styles.center, { transform: [{ translateX: shakeX }] }]}>
        <Animated.View pointerEvents="none" style={[styles.flash, { opacity: flash }]} />
        <Animated.Text
          style={[styles.logo, { transform: [{ scale: logoScale }, { rotate: logoTiltDeg }] }]}
        >
          Deep End
        </Animated.Text>
        <Animated.View
          style={[
            styles.sharkWrap,
            {
              opacity: sharkOpacity,
              transform: [
                { translateX: sharkX },
                { translateY: sharkY },
                { scale: sharkScale },
                { rotate: tiltDeg },
              ],
            },
          ]}
        >
          <Shark />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" },
  center: { alignItems: "center", justifyContent: "center" },
  logo: { fontFamily: "Pacifico_400Regular", fontSize: 46, color: "#7A1F1F" },
  sharkWrap: { position: "absolute", top: -14 },
  flash: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#7A1F1F",
  },
});
