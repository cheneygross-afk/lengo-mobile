import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pacifico_400Regular, useFonts } from "@expo-google-fonts/pacifico";
import { AuthProvider } from "@/lib/auth/AuthContext";
import RootNavigator from "@/navigation/RootNavigator";

export default function App() {
  // The wordmark font used in the shark-bite intro and the login screen --
  // same Pacifico face the web app's header uses. Block on it loading so
  // neither screen ever flashes a fallback system font first.
  const [fontsLoaded] = useFonts({ Pacifico_400Regular });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: "#FAF6F1" }} />;
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
