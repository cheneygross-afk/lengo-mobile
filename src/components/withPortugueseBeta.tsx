import type { ComponentType } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";

/** Whether a screen's route params point into the Brazilian Portuguese
 * course: a "pt" lang/course, a portugueseLevel or a "pt/..." levelPath. */
export function paramsArePortuguese(params: unknown): boolean {
  if (!params || typeof params !== "object") return false;
  const p = params as Record<string, unknown>;
  if (p.lang === "pt" || p.course === "pt" || typeof p.portugueseLevel === "string") return true;
  if (typeof p.levelPath === "string" && (p.levelPath === "pt" || p.levelPath.startsWith("pt/"))) return true;
  return false;
}

/** The Brazilian Portuguese course is a private beta (lib/portugueseBeta.ts,
 * the website's allowlist). A Portuguese screen -- or a shared screen
 * opened with Portuguese params -- shows a plain "not found" to everyone
 * else, the way the website 404s /lessons/pt, so the beta isn't advertised.
 * `which` is true for screens that are Portuguese whatever their params,
 * or a screen's own test of its params (paramsArePortuguese by default). */
export function withPortugueseBeta<P extends { route: { params?: unknown } }>(
  Screen: ComponentType<P>,
  which: boolean | ((params: unknown) => boolean) = paramsArePortuguese
): ComponentType<P> {
  function PortugueseBetaScreen(props: P) {
    const { portugueseBeta } = useAuth();
    const portuguese = typeof which === "boolean" ? which : which(props.route.params);
    if (!portugueseBeta && portuguese) {
      return (
        <View style={styles.wrap}>
          <Text style={styles.text}>This page could not be found.</Text>
        </View>
      );
    }
    return <Screen {...props} />;
  }
  PortugueseBetaScreen.displayName = `withPortugueseBeta(${Screen.displayName ?? Screen.name ?? "Screen"})`;
  return PortugueseBetaScreen;
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: "#FAF6F1" },
  text: { fontSize: 16, color: "#555", textAlign: "center" },
});
