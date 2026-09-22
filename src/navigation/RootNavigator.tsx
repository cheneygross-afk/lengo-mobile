import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import type { AppStackParamList, AuthStackParamList } from "@/navigation/types";
import IntroScreen from "@/screens/IntroScreen";
import LoginScreen from "@/screens/LoginScreen";
import SignupScreen from "@/screens/SignupScreen";
import HomeScreen from "@/screens/HomeScreen";
import LessonListScreen from "@/screens/LessonListScreen";
import LessonRunnerScreen from "@/screens/LessonRunnerScreen";
import ReviewListScreen from "@/screens/ReviewListScreen";
import FlashcardsScreen from "@/screens/FlashcardsScreen";
import ReadingsListScreen from "@/screens/ReadingsListScreen";
import StoryReaderScreen from "@/screens/StoryReaderScreen";
import TranslateBar from "@/components/TranslateBar";

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
  // The translate bar (mobile port of the web app's nav-bar translate
  // search, see components/TranslateBar) lives here, outside the stack,
  // so it's pinned to the bottom of every screen in the app the same way
  // it sits on every page of the website. KeyboardAvoidingView lets it
  // ride up above the keyboard instead of being covered by it.
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <AppStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#FAF6F1" },
          headerTintColor: "#000",
          headerShadowVisible: false,
        }}
      >
        <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <AppStack.Screen name="LessonList" component={LessonListScreen} options={{ title: "Lessons" }} />
        <AppStack.Screen
          name="LessonRunner"
          component={LessonRunnerScreen}
          options={{ title: "" }}
        />
        <AppStack.Screen name="Review" component={ReviewListScreen} options={{ title: "Review" }} />
        <AppStack.Screen name="Flashcards" component={FlashcardsScreen} options={{ title: "Flashcards" }} />
        <AppStack.Screen name="ReadingsList" component={ReadingsListScreen} options={{ title: "Readings" }} />
        <AppStack.Screen name="StoryReader" component={StoryReaderScreen} options={{ title: "" }} />
      </AppStack.Navigator>
      <TranslateBar />
    </KeyboardAvoidingView>
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
