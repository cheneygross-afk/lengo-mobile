import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pacifico_400Regular, useFonts } from "@expo-google-fonts/pacifico";
import { Fraunces_600SemiBold, Fraunces_700Bold } from "@expo-google-fonts/fraunces";
import { AuthProvider } from "@/lib/auth/AuthContext";
import RootNavigator from "@/navigation/RootNavigator";

export default function App() {
  // The wordmark font (Pacifico, as in the web app's header) and the
  // Fraunces heading face the website uses. Block on them loading so no
  // screen ever flashes a fallback system font first.
  const [fontsLoaded] = useFonts({ Pacifico_400Regular, Fraunces_600SemiBold, Fraunces_700Bold });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: "#FAF7F2" }} />;
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RootNavigator />
        <StatusBar style="auto" />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
