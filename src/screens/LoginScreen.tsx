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
import { supabase } from "@/lib/supabase/client";

// Mobile port of the web app's /login page. Same call
// (supabase.auth.signInWithPassword) and the same account -- logging in
// here and on deependspanish.com just authenticate the same Supabase user
// through two different session stores (AsyncStorage vs. cookies).
export default function LoginScreen() {
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
          <Text style={styles.tagline}>Log in to keep going.</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#00000055"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#00000055"
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

        <Text style={styles.footer}>Don't have an account? Sign up at deependspanish.com</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF6F1" },
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 28 },
  brand: { alignItems: "center", marginBottom: 40 },
  wordmark: { fontFamily: "Pacifico_400Regular", fontSize: 44, color: "#7A1F1F" },
  tagline: { fontSize: 14, color: "#00000099", marginTop: 6 },
  form: { gap: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  error: { color: "#dc2626", fontSize: 14 },
  button: {
    backgroundColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 6,
  },
  buttonPressed: { opacity: 0.9 },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  footer: { textAlign: "center", color: "#00000066", fontSize: 13, marginTop: 28 },
});
