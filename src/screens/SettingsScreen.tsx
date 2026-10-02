import EmailPrefs from "@/components/EmailPrefs";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Switch, StyleSheet, Linking, ActivityIndicator, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useAuth } from "@/lib/auth/AuthContext";
import { supabase } from "@/lib/supabase/client";
import { HIGHLIGHT_COLORS, DEFAULT_HIGHLIGHT_COLOR, type HighlightColor } from "@/lib/highlightColors";
import {
  PRONUNCIATION_VOICES,
  DEFAULT_PRONUNCIATION_VOICE,
  DEFAULT_PRONUNCIATION_ENABLED,
  type PronunciationVoice,
} from "@/lib/pronunciationVoice";
import { setPreferredVoice, setPronunciationEnabled } from "@/lib/speech";
import SpanishVarietyPicker from "@/components/SpanishVarietyPicker";
import { syncPrefs, updatePrefs } from "@/lib/learnerPrefs";
import {
  DAILY_GOAL_LABELS,
  DAILY_GOAL_OPTIONS,
  DEFAULT_PREFS,
  NEW_CARDS_PER_DAY_OPTIONS,
  newCardsPerDayLabel,
  type LearnerPrefs,
} from "@/lib/learnerPlan";

// Screen reached from Home's "Settings" link (previously a bare "Log
// out" link there). "Get Premium" is a plain hyperlink out to the
// website's own plan-purchase page (Stripe Checkout lives there, behind
// SubscribeButton) -- deliberately NOT any in-app purchase flow, so no
// purchase is ever made inside the app itself, and the app stays clear
// of Apple/Google's in-app-purchase requirements for a subscription sold
// this way.
const PREMIUM_URL = "https://deependspanish.com/pricing";
const HANDOFF_URL = "https://deependspanish.com/api/mobile/handoff";
// Backs the "Delete account" link at the very bottom of this screen --
// required by Apple for apps with sign-up (Guideline 5.1.1(v)). The
// route cancels any Stripe subscription first, then deletes the user.
const DELETE_ACCOUNT_URL = "https://deependspanish.com/api/account/delete";

// Mirrors the minimum enforced on both SignupScreen and the web app's
// /reset-password form -- there's no separate/stricter policy on the
// Supabase project itself, so this stays in step with those.
const MIN_PASSWORD_LENGTH = 6;

export default function SettingsScreen({ navigation }: NativeStackScreenProps<AppStackParamList, "Settings">) {
  const { session, signOut } = useAuth();
  const userId = session?.user?.id;

  const [highlightColor, setHighlightColor] = useState<HighlightColor>(DEFAULT_HIGHLIGHT_COLOR);
  const [saving, setSaving] = useState<HighlightColor | null>(null);
  const [openingPremium, setOpeningPremium] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);

  // Daily goal + new flashcards per day -- the learner prefs shared with
  // the website through the account (see learnerPrefs.ts).
  const [learnerPrefs, setLearnerPrefs] = useState<LearnerPrefs>(DEFAULT_PREFS);
  useEffect(() => {
    let cancelled = false;
    void syncPrefs().then((p) => {
      if (!cancelled) setLearnerPrefs(p);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  async function saveLearnerPrefs(patch: Partial<Pick<LearnerPrefs, "dailyGoalMinutes" | "newCardsPerDay">>) {
    setLearnerPrefs((p) => ({ ...p, ...patch }));
    setLearnerPrefs(await updatePrefs(patch));
  }

  const [pronunciationVoice, setPronunciationVoice] = useState<PronunciationVoice>(DEFAULT_PRONUNCIATION_VOICE);
  const [savingVoice, setSavingVoice] = useState<PronunciationVoice | null>(null);
  const [pronunciationEnabled, setPronunciationEnabledValue] = useState<boolean>(DEFAULT_PRONUNCIATION_ENABLED);
  const [savingEnabled, setSavingEnabled] = useState(false);

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
      .select("highlight_color, email, full_name, pronunciation_voice, pronunciation_enabled")
      .eq("id", userId)
      .single()
      .then(({ data }) => {
        if (cancelled || !data) return;
        if (data.highlight_color) setHighlightColor(data.highlight_color as HighlightColor);
        setEmail(data.email ?? session?.user?.email ?? "");
        setFullName(data.full_name ?? "");
        if (data.pronunciation_voice) setPronunciationVoice(data.pronunciation_voice as PronunciationVoice);
        if (typeof data.pronunciation_enabled === "boolean") setPronunciationEnabledValue(data.pronunciation_enabled);
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

  function confirmDeleteAccount() {
    if (deletingAccount) return;
    Alert.alert(
      "Delete your account?",
      "This permanently deletes your account, lesson progress, flashcards, and highlights, and cancels any subscription. This can't be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: deleteAccount },
      ]
    );
  }

  async function deleteAccount() {
    setDeletingAccount(true);
    try {
      const token = session?.access_token;
      if (!token) throw new Error("Please log in again.");
      const res = await fetch(DELETE_ACCOUNT_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ confirm: "DELETE" }),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !json?.ok) throw new Error(json?.error ?? "Couldn't delete your account. Please try again.");
      // The server user is gone. Clear this device too, so a later sign-up
      // on the same phone doesn't inherit the deleted account's local
      // flashcards/progress, then drop the session (scope "local": the
      // server-side session no longer exists to revoke).
      await AsyncStorage.clear().catch(() => {});
      await supabase.auth.signOut({ scope: "local" }).catch(() => {});
      Alert.alert("Account deleted", "Your account and data have been permanently deleted.");
    } catch (err) {
      Alert.alert("Couldn't delete account", err instanceof Error ? err.message : "Please try again.");
    } finally {
      setDeletingAccount(false);
    }
  }

  async function pickHighlightColor(next: HighlightColor) {
    if (!userId || next === highlightColor || saving) return;
    setSaving(next);
    const { error } = await supabase.from("profiles").update({ highlight_color: next }).eq("id", userId);
    setSaving(null);
    if (!error) setHighlightColor(next);
  }

  async function togglePronunciationEnabled() {
    if (!userId || savingEnabled) return;
    const next = !pronunciationEnabled;
    setSavingEnabled(true);
    const { error } = await supabase.from("profiles").update({ pronunciation_enabled: next }).eq("id", userId);
    setSavingEnabled(false);
    if (!error) {
      setPronunciationEnabledValue(next);
      // Takes effect immediately this session -- also stops anything
      // currently playing if turned off.
      setPronunciationEnabled(next);
    }
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
        <Text style={s.premiumBtnSub}>
          Focused Lessons: 2 months free, then $5/mo. Cancel anytime. Opens deependspanish.com in your browser,
          already signed in.
        </Text>
      </Pressable>

      <View style={s.section}>
        <Text style={s.sectionTitle}>Daily goal</Text>
        <Text style={s.sectionSub}>Minutes per day. Lessons, stories, video quizzes, reviews and flashcards all count toward it.</Text>
        <View style={s.pillWrap}>
          {DAILY_GOAL_OPTIONS.map((m) => {
            const active = learnerPrefs.dailyGoalMinutes === m;
            return (
              <Pressable
                key={m}
                onPress={() => saveLearnerPrefs({ dailyGoalMinutes: m })}
                style={[s.voicePill, active && s.voicePillActive]}
              >
                <Text style={[s.voicePillText, active && s.voicePillTextActive]}>
                  {m} min · {DAILY_GOAL_LABELS[m]}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={s.section}>
        <Text style={s.sectionTitle}>New flashcards per day</Text>
        <Text style={s.sectionSub}>
          How many never-seen cards review adds each day. Cards already in review are always shown when due.
        </Text>
        <View style={s.pillWrap}>
          {NEW_CARDS_PER_DAY_OPTIONS.map((n) => {
            const active = learnerPrefs.newCardsPerDay === n;
            return (
              <Pressable
                key={String(n)}
                onPress={() => saveLearnerPrefs({ newCardsPerDay: n })}
                style={[s.voicePill, active && s.voicePillActive]}
              >
                <Text style={[s.voicePillText, active && s.voicePillTextActive]}>{newCardsPerDayLabel(n)}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* The placement test isn't on Home (most learners take it once),
          so it stays reachable here, next to the learning prefs, and on
          the Study Tools screen. */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Your level</Text>
        <Text style={s.sectionSub}>Not sure your Spanish level is right? Take the placement test again any time.</Text>
        <Pressable onPress={() => navigation.navigate("Placement")} style={s.placementLink}>
          <Text style={s.placementLinkText}>Retake the Spanish placement test →</Text>
        </Pressable>
      </View>

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
        <Text style={s.sectionTitle}>Pronunciation</Text>
        <View style={s.enabledRow}>
          <View style={s.enabledRowText}>
            <Text style={s.enabledLabel}>Hear words when tapped</Text>
            <Text style={s.sectionSub}>Tap any Spanish or Japanese word or phrase to hear it said aloud.</Text>
          </View>
          <Switch
            value={pronunciationEnabled}
            onValueChange={togglePronunciationEnabled}
            disabled={savingEnabled}
          />
        </View>
        <Text style={s.sectionSub}>
          Pick the voice used -- synced with your account on the website too.
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
        <SpanishVarietyPicker />
      </View>

      <EmailPrefs />

      <Pressable style={s.logoutBtn} onPress={signOut}>
        <Text style={s.logoutBtnText}>Log out</Text>
      </Pressable>

      <Pressable onPress={confirmDeleteAccount} disabled={deletingAccount} style={s.deleteAccountLink} hitSlop={8}>
        <Text style={s.deleteAccountText}>{deletingAccount ? "Deleting account…" : "Delete account"}</Text>
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
  placementLink: { marginTop: 12, alignSelf: "flex-start", paddingVertical: 4 },
  placementLinkText: { fontSize: 14, fontWeight: "700", color: "#7A1F1F" },
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
  errorText: { color: "#dc2626", fontSize: 13, flexShrink: 1 },
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
  enabledRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 4,
    marginBottom: 14,
  },
  enabledRowText: { flex: 1 },
  enabledLabel: { fontSize: 14, fontWeight: "600", color: "#000", marginBottom: 2 },
  voiceRow: { flexDirection: "row", gap: 10, marginTop: 14 },
  pillWrap: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 14 },
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
  // Deliberately low-key: small, muted, below Log out -- present and easy
  // to find in Settings (Apple requires that), but not a big red button.
  deleteAccountLink: { alignSelf: "center", paddingVertical: 6, marginTop: 4 },
  deleteAccountText: { color: "#00000059", fontSize: 12.5, textDecorationLine: "underline" },
});
