import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";

// Screen reached from Home's "Settings" link (previously a bare "Log
// out" link there). "Get Premium" is a plain hyperlink out to the
// website's own plan-purchase page (Stripe Checkout lives there, behind
// SubscribeButton) -- deliberately NOT any in-app purchase flow, so no
// purchase is ever made inside the app itself, and the app stays clear
// of Apple/Google's in-app-purchase requirements for a subscription sold
// this way.
const PREMIUM_URL = "https://deependspanish.com/settings";

export default function SettingsScreen() {
  const { session, signOut } = useAuth();

  return (
    <View style={s.container}>
      <Text style={s.email}>{session?.user.email}</Text>

      <Pressable style={s.premiumBtn} onPress={() => Linking.openURL(PREMIUM_URL)}>
        <Text style={s.premiumBtnText}>Get Premium</Text>
        <Text style={s.premiumBtnSub}>Opens deependspanish.com in your browser</Text>
      </Pressable>

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
