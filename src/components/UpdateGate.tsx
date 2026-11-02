import { useEffect, useState } from "react";
import { Linking, Modal, Platform, Pressable, Text, View } from "react-native";
import * as Application from "expo-application";

// Asks people on an old store build to update. The website publishes
// https://deependspanish.com/app-version.json, e.g.
//   { "android": { "minBuild": 4, "url": "https://play.google.com/..." } }
// If this install's build number (Android versionCode / iOS build) is below
// minBuild, a full-screen notice with an Update button is shown. Any network
// or parsing problem means no prompt, so the app never gets stuck.
const VERSION_URL = "https://deependspanish.com/app-version.json";
const ANDROID_STORE = "market://details?id=com.deependspanish.app";
const ANDROID_STORE_WEB = "https://play.google.com/store/apps/details?id=com.deependspanish.app";

type Rule = { minBuild?: number; url?: string };

export default function UpdateGate() {
  const [storeUrl, setStoreUrl] = useState<string | null>(null);

  useEffect(() => {
    if (Platform.OS !== "android" && Platform.OS !== "ios") return;
    const build = Number(Application.nativeBuildVersion);
    if (!Number.isFinite(build) || build <= 0) return;
    let cancelled = false;
    fetch(VERSION_URL, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const rule: Rule | undefined = data?.[Platform.OS];
        if (cancelled || !rule || typeof rule.minBuild !== "number") return;
        if (build >= rule.minBuild) return;
        const url = rule.url ?? (Platform.OS === "android" ? ANDROID_STORE_WEB : null);
        if (url) setStoreUrl(url);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!storeUrl) return null;

  const openStore = async () => {
    if (Platform.OS === "android") {
      try {
        await Linking.openURL(ANDROID_STORE);
        return;
      } catch {
        // Play Store app missing: fall back to the web listing.
      }
    }
    Linking.openURL(storeUrl).catch(() => {});
  };

  return (
    <Modal visible animationType="fade" statusBarTranslucent onRequestClose={() => {}}>
      <View style={{ flex: 1, backgroundColor: "#FAF7F2", alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#8B0000", textAlign: "center", marginBottom: 12 }}>
          Time to update Deep End
        </Text>
        <Text style={{ fontSize: 16, color: "#333", textAlign: "center", lineHeight: 23, marginBottom: 28 }}>
          A new version is ready with fixes and improvements. Please update to keep learning.
        </Text>
        <Pressable
          onPress={openStore}
          accessibilityRole="button"
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#6E0000" : "#8B0000",
            paddingVertical: 14,
            paddingHorizontal: 36,
            borderRadius: 12,
          })}
        >
          <Text style={{ color: "#fff", fontSize: 17, fontWeight: "700" }}>Update</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
