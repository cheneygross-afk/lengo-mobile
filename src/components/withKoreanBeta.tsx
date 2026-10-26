import type { ComponentType } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import { colors } from "@/ui/theme";

/** Whether a screen's route params point into the Korean course: a "ko"
 * lang/course, a koreanLevel or a "ko/..." levelPath. */
export function paramsAreKorean(params: unknown): boolean {
  if (!params || typeof params !== "object") return false;
  const p = params as Record<string, unknown>;
  if (p.lang === "ko" || p.course === "ko" || typeof p.koreanLevel === "string") return true;
  if (typeof p.levelPath === "string" && (p.levelPath === "ko" || p.levelPath.startsWith("ko/"))) return true;
  return false;
}

/** The Korean course is a private beta (lib/koreanBeta.ts, the website's
 * allowlist). A Korean screen -- or a shared screen opened with Korean
 * params -- shows a plain "not found" to everyone else, the way the
 * website 404s /lessons/ko, so the beta isn't advertised. `which` is true
 * for screens that are Korean whatever their params, or a screen's own
 * test of its params (paramsAreKorean by default). */
export function withKoreanBeta<P extends { route: { params?: unknown } }>(
  Screen: ComponentType<P>,
  which: boolean | ((params: unknown) => boolean) = paramsAreKorean
): ComponentType<P> {
  function KoreanBetaScreen(props: P) {
    const { koreanBeta } = useAuth();
    const korean = typeof which === "boolean" ? which : which(props.route.params);
    if (!koreanBeta && korean) {
      return (
        <View style={styles.wrap}>
          <Text style={styles.text}>This page could not be found.</Text>
        </View>
      );
    }
    return <Screen {...props} />;
  }
  KoreanBetaScreen.displayName = `withKoreanBeta(${Screen.displayName ?? Screen.name ?? "Screen"})`;
  return KoreanBetaScreen;
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: colors.background },
  text: { fontSize: 16, color: colors.inkSoft, textAlign: "center" },
});
