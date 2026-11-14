import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "@/navigation/types";
import { requiredLessons } from "@/lib/lessons/levels";
import { LESSON_SOURCES } from "@/lib/lessons/registry";
import { supabase } from "@/lib/supabase/client";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

// Mobile port of the web app's /login page. Same call
// (supabase.auth.signInWithPassword) and the same account -- logging in
// here and on deependspanish.com just authenticate the same Supabase user
// through two different session stores (AsyncStorage vs. cookies).
export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit() {
    setError(null);
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) setError(error.message);
    // On success, AuthProvider's onAuthStateChange picks up the new
    // session and RootNavigator swaps to the app stack automatically.
  }

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={styles.container}>
        <View style={styles.brand}>
          <Text style={styles.wordmark}>Deep End</Text>
          <Text style={styles.motto}>Jump in.</Text>
          <Text style={styles.tagline}>Log in to keep going.</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#2A151355"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#2A151355"
            autoComplete="current-password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              submitting && styles.buttonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={submitting || !email || !password}
          >
            {submitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Log in</Text>
            )}
          </Pressable>
        </View>

        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.footer}>Don't have an account? Sign up</Text>
        </Pressable>
        {/* New here: the first lesson right away, account after (TryLesson). */}
        <Pressable
          style={({ pressed }) => [styles.tryButton, pressed && styles.buttonPressed]}
          onPress={() => navigation.navigate("TryLesson", { slug: FIRST_LESSON_SLUG })}
        >
          <Text style={styles.tryText}>New to Spanish? Try your first lesson free →</Text>
          <Text style={styles.trySub}>About 5 minutes, no account needed.</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const FIRST_LESSON_SLUG = requiredLessons(LESSON_SOURCES.a1.lessons)[0]?.slug ?? "greetings-pronouns-ser-1";

const styles = StyleSheet.create({
  tryButton: {
    marginTop: 28,
    borderWidth: 2,
    borderColor: "#8B0000",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  tryText: { color: "#8B0000", fontWeight: "700", fontSize: 16, textAlign: "center" },
  trySub: { color: "#2A151399", fontSize: 13, marginTop: 4 },
  flex: { flex: 1, backgroundColor: "#FAF7F2" },
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 28 },
  brand: { alignItems: "center", marginBottom: 40 },
  // Pacifico's script letters swing past the edges of the box iOS measures
  // for them, which clipped the tail of the final "d". The side padding and
  // taller line give the glyphs room to draw.
  wordmark: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 44,
    lineHeight: 80,
    paddingHorizontal: 18,
    paddingBottom: 4,
    color: "#8B0000",
  },
  // The Deep End motto, in Fraunces bold italic like the QR sticker.
  motto: { fontFamily: "Fraunces_700Bold_Italic", fontSize: 22, color: "#2A1513", marginTop: -6 },
  tagline: { fontSize: 14, color: "#2A151399", marginTop: 6 },
  form: { gap: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#2A151322",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#2A1513",
    backgroundColor: "#fff",
  },
  error: { color: "#dc2626", fontSize: 14 },
  button: {
    backgroundColor: "#8B0000",
    borderRadius: 999,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 6,
  },
  buttonPressed: { opacity: 0.9 },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  footer: { textAlign: "center", color: "#8B0000", fontSize: 13, marginTop: 28, fontWeight: "600" },
});
