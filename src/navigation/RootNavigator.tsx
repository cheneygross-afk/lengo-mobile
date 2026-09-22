import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import type { AppStackParamList, AuthStackParamList } from "@/navigation/types";
import IntroScreen from "@/screens/IntroScreen";
import LoginScreen from "@/screens/LoginScreen";
import SignupScreen from "@/screens/SignupScreen";
import HomeScreen from "@/screens/HomeScreen";
import LessonListScreen from "@/screens/LessonListScreen";
import JapaneseLevelsScreen from "@/screens/JapaneseLevelsScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import LessonRunnerScreen from "@/screens/LessonRunnerScreen";
import ReviewListScreen from "@/screens/ReviewListScreen";
import ReviewDrillScreen from "@/screens/ReviewDrillScreen";
import FlashcardsScreen from "@/screens/FlashcardsScreen";
import ReadingsListScreen from "@/screens/ReadingsListScreen";
import StoryReaderScreen from "@/screens/StoryReaderScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

function AppNavigator() {
  // The translate bar lives only on Home (screen 3) now -- see
  // HomeScreen.tsx -- not globally across the app.
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FAF6F1" },
        headerTintColor: "#000",
        headerShadowVisible: false,
      }}
    >
      <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <AppStack.Screen name="LessonList" component={LessonListScreen} options={{ title: "Lessons" }} />
      <AppStack.Screen name="JapaneseLevels" component={JapaneseLevelsScreen} options={{ title: "Japanese" }} />
      <AppStack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />
      <AppStack.Screen
        name="LessonRunner"
        component={LessonRunnerScreen}
        options={{ title: "" }}
      />
      <AppStack.Screen name="Review" component={ReviewListScreen} options={{ title: "Review" }} />
      <AppStack.Screen name="ReviewDrill" component={ReviewDrillScreen} options={{ title: "Review" }} />
      <AppStack.Screen name="Flashcards" component={FlashcardsScreen} options={{ title: "Flashcards" }} />
      <AppStack.Screen name="ReadingsList" component={ReadingsListScreen} options={{ title: "Readings" }} />
      <AppStack.Screen name="StoryReader" component={StoryReaderScreen} options={{ title: "" }} />
    </AppStack.Navigator>
  );
}

export default function RootNavigator() {
  // The shark-bite intro plays once per cold launch, ahead of even the
  // session check -- it doesn't wait on auth to resolve.
  const [introDone, setIntroDone] = useState(false);
  const { session, loading } = useAuth();

  if (!introDone) {
    return <IntroScreen onFinish={() => setIntroDone(true)} />;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FAF6F1" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>{session ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
}
