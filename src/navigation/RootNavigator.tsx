import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import type { AppStackParamList, AuthStackParamList } from "@/navigation/types";
import LoginScreen from "@/screens/LoginScreen";
import HomeScreen from "@/screens/HomeScreen";
import LessonListScreen from "@/screens/LessonListScreen";
import LessonRunnerScreen from "@/screens/LessonRunnerScreen";
import FlashcardsScreen from "@/screens/FlashcardsScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function AppNavigator() {
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
      <AppStack.Screen
        name="LessonRunner"
        component={LessonRunnerScreen}
        options={{ title: "" }}
      />
      <AppStack.Screen name="Flashcards" component={FlashcardsScreen} options={{ title: "Flashcards" }} />
    </AppStack.Navigator>
  );
}

export default function RootNavigator() {
  const { session, loading } = useAuth();

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
