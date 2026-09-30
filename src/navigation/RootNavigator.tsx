import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import type { AppStackParamList, AuthStackParamList } from "@/navigation/types";
import LoginScreen from "@/screens/LoginScreen";
import SignupScreen from "@/screens/SignupScreen";
import HomeScreen from "@/screens/HomeScreen";
import LessonListScreen from "@/screens/LessonListScreen";
import SpanishLevelsScreen from "@/screens/SpanishLevelsScreen";
import JapaneseLevelsScreen from "@/screens/JapaneseLevelsScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import OnboardingScreen from "@/screens/OnboardingScreen";
import LessonRunnerScreen from "@/screens/LessonRunnerScreen";
import ReviewListScreen from "@/screens/ReviewListScreen";
import ReviewDrillScreen from "@/screens/ReviewDrillScreen";
import UnitTestScreen from "@/screens/UnitTestScreen";
import FlashcardsScreen from "@/screens/FlashcardsScreen";
import FrequencyDecksScreen from "@/screens/FrequencyDecksScreen";
import ExamsScreen from "@/screens/ExamsScreen";
import ExamScreen from "@/screens/ExamScreen";
import ExamPaperScreen from "@/screens/ExamPaperScreen";
import ReadingLevelsScreen from "@/screens/ReadingLevelsScreen";
import ReadingsListScreen from "@/screens/ReadingsListScreen";
import StoryReaderScreen from "@/screens/StoryReaderScreen";
import GrammarListScreen from "@/screens/GrammarListScreen";
import GrammarGuideScreen from "@/screens/GrammarGuideScreen";
import PlacementTestScreen from "@/screens/PlacementTestScreen";
import ConjugationScreen from "@/screens/ConjugationScreen";
import GlossaryScreen from "@/screens/GlossaryScreen";
import { getReadingLevel } from "@/lib/stories/registry";

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
      <AppStack.Screen name="SpanishLevels" component={SpanishLevelsScreen} options={{ title: "Spanish" }} />
      <AppStack.Screen name="LessonList" component={LessonListScreen} options={{ title: "Lessons" }} />
      <AppStack.Screen name="JapaneseLevels" component={JapaneseLevelsScreen} options={{ title: "Japanese" }} />
      <AppStack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />
      <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ title: "Welcome" }} />
      <AppStack.Screen
        name="LessonRunner"
        component={LessonRunnerScreen}
        options={{ title: "" }}
      />
      <AppStack.Screen name="Review" component={ReviewListScreen} options={{ title: "Review" }} />
      <AppStack.Screen name="ReviewDrill" component={ReviewDrillScreen} options={{ title: "Review" }} />
      <AppStack.Screen name="UnitTest" component={UnitTestScreen} options={{ title: "Test out" }} />
      <AppStack.Screen name="Flashcards" component={FlashcardsScreen} options={{ title: "Flashcards" }} />
      <AppStack.Screen name="FrequencyDecks" component={FrequencyDecksScreen} options={{ title: "Frequency decks" }} />
      <AppStack.Screen name="Exams" component={ExamsScreen} options={{ title: "Exam practice" }} />
      <AppStack.Screen name="Exam" component={ExamScreen} options={{ title: "DELE practice" }} />
      <AppStack.Screen name="ExamPaper" component={ExamPaperScreen} options={{ title: "" }} />
      <AppStack.Screen name="ReadingLevels" component={ReadingLevelsScreen} options={{ title: "Readings" }} />
      <AppStack.Screen
        name="ReadingsList"
        component={ReadingsListScreen}
        options={({ route }) => ({
          title: `${getReadingLevel(route.params?.levelPath ?? "a1").code} Readings`,
        })}
      />
      <AppStack.Screen name="StoryReader" component={StoryReaderScreen} options={{ title: "" }} />
      <AppStack.Screen name="Grammar" component={GrammarListScreen} options={{ title: "Grammar" }} />
      <AppStack.Screen name="GrammarGuide" component={GrammarGuideScreen} options={{ title: "" }} />
      <AppStack.Screen name="Placement" component={PlacementTestScreen} options={{ title: "Placement test" }} />
      <AppStack.Screen name="Conjugation" component={ConjugationScreen} options={{ title: "Verb conjugation" }} />
      <AppStack.Screen name="Glossary" component={GlossaryScreen} options={{ title: "Glossary" }} />
    </AppStack.Navigator>
  );
}

export default function RootNavigator() {
  // No animated intro: the native splash (app.json -- white "D" on the
  // brand red, matching the app icon) covers the cold launch instead.
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
