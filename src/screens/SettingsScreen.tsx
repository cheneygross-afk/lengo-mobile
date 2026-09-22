import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import { supabase } from "@/lib/supabase/client";
import { HIGHLIGHT_COLORS, DEFAULT_HIGHLIGHT_COLOR, type HighlightColor } from "@/lib/highlightColors";

// Screen reached from Home's "Settings" link (previously a bare "Log
// out" link there). "Get Premium" is a plain hyperlink out to the
// website's own plan-purchase page (Stripe Checkout lives there, behind
// SubscribeButton) -- deliberately NOT any in-app purchase flow, so no
// purchase is ever made inside the app itself, and the app stays clear
// of Apple/Google's in-app-purchase requirements for a subscription sold
// this way.
const PREMIUM_URL = "https://deependspanish.com/settings#plans";
const HANDOFF_URL = "https://deependspanish.com/api/mobile/handoff";

export default function SettingsScreen() {
  const { session, signOut } = useAuth();
  const userId = session?.user?.id;

  const [highlightColor, setHighlightColor] = useState<HighlightColor>(DEFAULT_HIGHLIGHT_COLOR);
  const [saving, setSaving] = useState<HighlightColor | null>(null);
  const [openingPremium, setOpeningPremium] = useState(false);

  // The app's session lives in AsyncStorage, not cookies, so just
  // opening PREMIUM_URL in the phone's browser would drop an
  // already-logged-in student on the website's login screen. Instead
  // this trades the app session's access token for a one-time sign-in
  // link scoped to that same account (see /api/mobile/handoff on the
  // website) and opens THAT -- falling back to the plain URL if
  // anything about that fails, so the button always does something.
  async function openPremium() {
    if (openingPremium) return;
    setOpeningPremium(true);
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (token) {
        const res = await fetch(HANDOFF_URL, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (json.ok && json.url) {
          await Linking.openURL(json.url);
          return;
        }
      }
    } catch {
      // fall through to the plain link below
    } finally {
      setOpeningPremium(false);
    }
    await Linking.openURL(PREMIUM_URL);
  }

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    supabase
      .from("profiles")
      .select("highlight_color")
      .eq("id", userId)
      .single()
      .then(({ data }) => {
        if (!cancelled && data?.highlight_color) setHighlightColor(data.highlight_color as HighlightColor);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  async function pickHighlightColor(next: HighlightColor) {
    if (!userId || next === highlightColor || saving) return;
    setSaving(next);
    const { error } = await supabase.from("profiles").update({ highlight_color: next }).eq("id", userId);
    setSaving(null);
    if (!error) setHighlightColor(next);
  }

  return (
    <View style={s.container}>
      <Text style={s.email}>{session?.user.email}</Text>

      <Pressable style={s.premiumBtn} onPress={openPremium} disabled={openingPremium}>
        <Text style={s.premiumBtnText}>{openingPremium ? "Opening…" : "Get Premium"}</Text>
        <Text style={s.premiumBtnSub}>Opens deependspanish.com in your browser, already signed in</Text>
      </Pressable>

      <View style={s.section}>
        <Text style={s.sectionTitle}>Highlighting</Text>
        <Text style={s.sectionSub}>
          Pick the color used for highlights you save in readings -- synced with your account on the
          website too.
        </Text>
        <View style={s.swatchRow}>
          {HIGHLIGHT_COLORS.map((c) => {
            const active = highlightColor === c.value;
            return (
              <Pressable
                key={c.value}
                accessibilityLabel={c.label}
                disabled={!!saving}
                onPress={() => pickHighlightColor(c.value)}
                style={[s.swatch, { backgroundColor: c.swatch }, active && s.swatchActive]}
              >
                {active && <Text style={s.swatchCheck}>✓</Text>}
              </Pressable>
            );
          })}
        </View>
      </View>

      <Pressable style={s.logoutBtn} onPress={signOut}>
        <Text style={s.logoutBtnText}>Log out</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1", padding: 24, gap: 16 },
  email: { fontSize: 14, color: "#00000099", marginBottom: 8 },
  premiumBtn: {
    backgroundColor: "#7A1F1F",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  premiumBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  premiumBtnSub: { color: "#ffffffaa", fontSize: 12, marginTop: 4 },
  section: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#00000012",
  },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#000" },
  sectionSub: { fontSize: 12.5, color: "#00000099", marginTop: 4, lineHeight: 17 },
  swatchRow: { flexDirection: "row", gap: 12, marginTop: 14 },
  swatch: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#00000018",
  },
  swatchActive: { borderWidth: 2, borderColor: "#000" },
  swatchCheck: { fontSize: 14, fontWeight: "800", color: "#000" },
  logoutBtn: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoutBtnText: { color: "#dc2626", fontWeight: "700", fontSize: 15 },
});
