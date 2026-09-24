import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Linking, ActivityIndicator, ScrollView } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import { supabase } from "@/lib/supabase/client";
import { HIGHLIGHT_COLORS, DEFAULT_HIGHLIGHT_COLOR, type HighlightColor } from "@/lib/highlightColors";
import { PRONUNCIATION_VOICES, DEFAULT_PRONUNCIATION_VOICE, type PronunciationVoice } from "@/lib/pronunciationVoice";
import { setPreferredVoice } from "@/lib/speech";

// Screen reached from Home's "Settings" link (previously a bare "Log
// out" link there). "Get Premium" is a plain hyperlink out to the
// website's own plan-purchase page (Stripe Checkout lives there, behind
// SubscribeButton) -- deliberately NOT any in-app purchase flow, so no
// purchase is ever made inside the app itself, and the app stays clear
// of Apple/Google's in-app-purchase requirements for a subscription sold
// this way.
const PREMIUM_URL = "https://deependspanish.com/settings#plans";
const HANDOFF_URL = "https://deependspanish.com/api/mobile/handoff";

// Mirrors the minimum enforced on both SignupScreen and the web app's
// /reset-password form -- there's no separate/stricter policy on the
// Supabase project itself, so this stays in step with those.
const MIN_PASSWORD_LENGTH = 6;

export default function SettingsScreen() {
  const { session, signOut } = useAuth();
  const userId = session?.user?.id;

  const [highlightColor, setHighlightColor] = useState<HighlightColor>(DEFAULT_HIGHLIGHT_COLOR);
  const [saving, setSaving] = useState<HighlightColor | null>(null);
  const [openingPremium, setOpeningPremium] = useState(false);

  const [pronunciationVoice, setPronunciationVoice] = useState<PronunciationVoice>(DEFAULT_PRONUNCIATION_VOICE);
  const [savingVoice, setSavingVoice] = useState<PronunciationVoice | null>(null);

  // Personal info -- email is view-only (same "profiles.email" the web
  // app's PersonalInfoForm shows), "Username" in this UI maps onto
  // profiles.full_name: there's no dedicated username column anywhere in
  // the schema, and full_name/"Full name" is what the web app already
  // uses for this same editable-name concept, so this is that same field
  // under the label the user wants here.
  const [email, setEmail] = useState(session?.user?.email ?? "");
  const [fullName, setFullName] = useState("");
  const [savingUsername, setSavingUsername] = useState(false);
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);

  // Password -- real passwords are never readable (Supabase only stores
  // a one-way hash), so there's nothing to "unhide". Instead the masked
  // row's action expands a change-password form that calls
  // supabase.auth.updateUser directly, which works for an
  // already-authenticated session with no re-auth/email step needed.
  const [passwordExpanded, setPasswordExpanded] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordJustChanged, setPasswordJustChanged] = useState(false);

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
      .select("highlight_color, email, full_name, pronunciation_voice")
      .eq("id", userId)
      .single()
      .then(({ data }) => {
        if (cancelled || !data) return;
        if (data.highlight_color) setHighlightColor(data.highlight_color as HighlightColor);
        setEmail(data.email ?? session?.user?.email ?? "");
        setFullName(data.full_name ?? "");
        if (data.pronunciation_voice) setPronunciationVoice(data.pronunciation_voice as PronunciationVoice);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // Auto-clear the transient "Saved" / "Password updated" confirmations
  // after a few seconds, same idea as the loading/success states below.
  useEffect(() => {
    if (!usernameSaved) return;
    const t = setTimeout(() => setUsernameSaved(false), 2500);
    return () => clearTimeout(t);
  }, [usernameSaved]);

  useEffect(() => {
    if (!passwordJustChanged) return;
    const t = setTimeout(() => setPasswordJustChanged(false), 3000);
    return () => clearTimeout(t);
  }, [passwordJustChanged]);

  async function pickHighlightColor(next: HighlightColor) {
    if (!userId || next === highlightColor || saving) return;
    setSaving(next);
    const { error } = await supabase.from("profiles").update({ highlight_color: next }).eq("id", userId);
    setSaving(null);
    if (!error) setHighlightColor(next);
  }

  async function pickPronunciationVoice(next: PronunciationVoice) {
    if (!userId || next === pronunciationVoice || savingVoice) return;
    setSavingVoice(next);
    const { error } = await supabase.from("profiles").update({ pronunciation_voice: next }).eq("id", userId);
    setSavingVoice(null);
    if (!error) {
      setPronunciationVoice(next);
      // Takes effect immediately this session -- speak() reads this
      // in-memory value rather than re-fetching the profile per tap.
      setPreferredVoice(next);
    }
  }

  // Mirrors PersonalInfoForm.tsx's save on the web app: same table,
  // same column, same "trim or null" behavior.
  async function saveUsername() {
    if (!userId || savingUsername) return;
    setSavingUsername(true);
    setUsernameError(null);
    setUsernameSaved(false);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName.trim() || null })
      .eq("id", userId);
    setSavingUsername(false);
    if (error) {
      setUsernameError(error.message);
      return;
    }
    setUsernameSaved(true);
  }

  function cancelPasswordChange() {
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError(null);
    setPasswordExpanded(false);
  }

  async function changePassword() {
    if (changingPassword) return;
    setPasswordError(null);
    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords don't match.");
      return;
    }
    setChangingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setChangingPassword(false);
    if (error) {
      setPasswordError(error.message);
      return;
    }
    setNewPassword("");
    setConfirmPassword("");
    setPasswordExpanded(false);
    setPasswordJustChanged(true);
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <View style={s.section}>
        <Text style={s.sectionTitle}>Personal info</Text>

        <View style={s.fieldGroup}>
          <Text style={s.fieldLabel}>Email</Text>
          <View style={[s.input, s.inputDisabled]}>
            <Text style={s.inputDisabledText}>{email}</Text>
          </View>
        </View>

        <View style={s.fieldGroup}>
          <Text style={s.fieldLabel}>Username</Text>
          <TextInput
            style={s.input}
            placeholder="Your name"
            placeholderTextColor="#00000055"
            autoCapitalize="words"
            value={fullName}
            onChangeText={(t) => {
              setFullName(t);
              setUsernameSaved(false);
            }}
          />
        </View>

        <View style={s.saveRow}>
          <Pressable
            style={[s.saveBtn, savingUsername && s.buttonDisabled]}
            onPress={saveUsername}
            disabled={savingUsername}
          >
            {savingUsername ? <ActivityIndicator color="#fff" /> : <Text style={s.saveBtnText}>Save</Text>}
          </Pressable>
          {usernameSaved && <Text style={s.savedText}>Saved</Text>}
          {usernameError && <Text style={s.errorText}>{usernameError}</Text>}
        </View>
      </View>

      <View style={s.section}>
        <Text style={s.sectionTitle}>Password</Text>

        {!passwordExpanded ? (
          <>
            <View style={s.passwordRow}>
              <Text style={s.passwordDots}>••••••••</Text>
              <Pressable
                onPress={() => {
                  setPasswordError(null);
                  setPasswordExpanded(true);
                }}
              >
                <Text style={s.passwordAction}>Change</Text>
              </Pressable>
            </View>
            {passwordJustChanged && <Text style={s.savedText}>Password updated</Text>}
          </>
        ) : (
          <View style={s.fieldGroup}>
            <Text style={s.sectionSub}>
              Passwords are stored as a one-way hash, so we can't show your current one -- set a new
              one instead.
            </Text>
            <TextInput
              style={s.input}
              placeholder="New password"
              placeholderTextColor="#00000055"
              secureTextEntry
              autoComplete="new-password"
              value={newPassword}
              onChangeText={(t) => {
                setNewPassword(t);
                setPasswordError(null);
              }}
            />
            <TextInput
              style={s.input}
              placeholder="Confirm new password"
              placeholderTextColor="#00000055"
              secureTextEntry
              autoComplete="new-password"
              value={confirmPassword}
              onChangeText={(t) => {
                setConfirmPassword(t);
                setPasswordError(null);
              }}
            />
            {passwordError ? <Text style={s.errorText}>{passwordError}</Text> : null}
            <View style={s.saveRow}>
              <Pressable
                style={[s.saveBtn, changingPassword && s.buttonDisabled]}
                onPress={changePassword}
                disabled={changingPassword || !newPassword || !confirmPassword}
              >
                {changingPassword ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={s.saveBtnText}>Save new password</Text>
                )}
              </Pressable>
              <Pressable onPress={cancelPasswordChange} disabled={changingPassword}>
                <Text style={s.cancelText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>

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

      <View style={s.section}>
        <Text style={s.sectionTitle}>Pronunciation voice</Text>
        <Text style={s.sectionSub}>
          Pick the voice used when you tap a word to hear it said aloud -- synced with your account on
          the website too.
        </Text>
        <View style={s.voiceRow}>
          {PRONUNCIATION_VOICES.map((v) => {
            const active = pronunciationVoice === v.value;
            return (
              <Pressable
                key={v.value}
                disabled={!!savingVoice}
                onPress={() => pickPronunciationVoice(v.value)}
                style={[s.voicePill, active && s.voicePillActive]}
              >
                <Text style={[s.voicePillText, active && s.voicePillTextActive]}>{v.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <Pressable style={s.logoutBtn} onPress={signOut}>
        <Text style={s.logoutBtnText}>Log out</Text>
      </Pressable>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 24, paddingBottom: 48, gap: 16 },
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
  fieldGroup: { marginTop: 14, gap: 6 },
  fieldLabel: { fontSize: 12.5, fontWeight: "600", color: "#00000099" },
  input: {
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#000",
    backgroundColor: "#fff",
  },
  inputDisabled: { backgroundColor: "#00000008", justifyContent: "center" },
  inputDisabledText: { fontSize: 15, color: "#00000099" },
  saveRow: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 14 },
  saveBtn: {
    backgroundColor: "#7A1F1F",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 72,
  },
  buttonDisabled: { opacity: 0.6 },
  saveBtnText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  savedText: { color: "#15803d", fontSize: 13, fontWeight: "600" },
  errorText: { color: "#dc2626", fontSize: 13 },
  cancelText: { color: "#00000099", fontSize: 14, fontWeight: "600" },
  passwordRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
  passwordDots: { fontSize: 18, letterSpacing: 2, color: "#000" },
  passwordAction: { color: "#7A1F1F", fontSize: 14, fontWeight: "700" },
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
  voiceRow: { flexDirection: "row", gap: 10, marginTop: 14 },
  voicePill: {
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
  },
  voicePillActive: { backgroundColor: "#000", borderColor: "#000" },
  voicePillText: { fontSize: 14, fontWeight: "600", color: "#000" },
  voicePillTextActive: { color: "#fff" },
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
