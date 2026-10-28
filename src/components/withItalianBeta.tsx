import type { ComponentType } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import { colors } from "@/ui/theme";

/** Whether a screen's route params point into the Italian course: an "it"
 * lang/course, an italianLevel or an "it/..." levelPath. */
export function paramsAreItalian(params: unknown): boolean {
  if (!params || typeof params !== "object") return false;
  const p = params as Record<string, unknown>;
  if (p.lang === "it" || p.course === "it" || typeof p.italianLevel === "string") return true;
  if (typeof p.levelPath === "string" && (p.levelPath === "it" || p.levelPath.startsWith("it/"))) return true;
  return false;
}

/** The Italian course is a private beta (lib/italianBeta.ts, the website's
 * allowlist), gated the same way as the Korean one (withKoreanBeta.tsx).
 * An Italian screen -- or a shared screen opened with Italian params --
 * shows a plain "not found" to everyone else, the way the website 404s
 * /lessons/it, so the beta isn't advertised. `which` is true for screens
 * that are Italian whatever their params, or a screen's own test of its
 * params (paramsAreItalian by default). */
export function withItalianBeta<P extends { route: { params?: unknown } }>(
  Screen: ComponentType<P>,
  which: boolean | ((params: unknown) => boolean) = paramsAreItalian
): ComponentType<P> {
  function ItalianBetaScreen(props: P) {
    const { italianBeta } = useAuth();
    const italian = typeof which === "boolean" ? which : which(props.route.params);
    if (!italianBeta && italian) {
      return (
        <View style={styles.wrap}>
          <Text style={styles.text}>This page could not be found.</Text>
        </View>
      );
    }
    return <Screen {...props} />;
  }
  ItalianBetaScreen.displayName = `withItalianBeta(${Screen.displayName ?? Screen.name ?? "Screen"})`;
  return ItalianBetaScreen;
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: colors.background },
  text: { fontSize: 16, color: colors.inkSoft, textAlign: "center" },
});
