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
import { supabase } from "@/lib/supabase/client";

type Props = NativeStackScreenProps<AuthStackParamList, "Signup">;

// Same Supabase project/account as the web app and LoginScreen --
// supabase.auth.signUp creates the user and (depending on the project's
// email-confirmation setting) either signs them straight in or leaves
// them to confirm via email first, in which case we tell them to check
// their inbox and drop them back on Login.
export default function SignupScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  async function handleSubmit() {
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setSubmitting(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    setSubmitting(false);
    if (error) {
      setError(error.message);
      return;
    }
    // If email confirmation is required, signUp succeeds but returns no
    // session -- AuthProvider won't see a session change, so tell the
    // user to confirm and send them back to Login. If confirmation is
    // off, a session comes back immediately and AuthProvider's
    // onAuthStateChange picks it up on its own, same as LoginScreen.
    if (!data.session) {
      setCheckEmail(true);
    }
  }

  if (checkEmail) {
    return (
      <View style={styles.container}>
        <View style={styles.brand}>
          <Text style={styles.wordmark}>Deep End</Text>
        </View>
        <Text style={styles.confirmTitle}>Check your email</Text>
        <Text style={styles.confirmBody}>
          We sent a confirmation link to {email}. Tap it, then come back and log in.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Back to log in</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={styles.container}>
        <View style={styles.brand}>
          <Text style={styles.wordmark}>Deep End</Text>
          <Text style={styles.tagline}>Create an account to get started.</Text>
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
            autoComplete="new-password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#00000055"
            autoComplete="new-password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              submitting && styles.buttonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={submitting || !email || !password || !confirmPassword}
          >
            {submitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Sign up</Text>
            )}
          </Pressable>
        </View>

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.footer}>Already have an account? Log in</Text>
        </Pressable>
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
  footer: { textAlign: "center", color: "#7A1F1F", fontSize: 13, marginTop: 28, fontWeight: "600" },
  confirmTitle: { fontSize: 20, fontWeight: "800", color: "#000", textAlign: "center", marginBottom: 10 },
  confirmBody: { fontSize: 14, color: "#00000099", textAlign: "center", lineHeight: 20, marginBottom: 24 },
});
