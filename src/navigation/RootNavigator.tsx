import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { planCovers, useAuth } from "@/lib/auth/AuthContext";
import type { AppStackParamList, AuthStackParamList } from "@/navigation/types";
import LoginScreen from "@/screens/LoginScreen";
import SignupScreen from "@/screens/SignupScreen";
import HomeScreen from "@/screens/HomeScreen";
import LessonListScreen from "@/screens/LessonListScreen";
import SpanishLevelsScreen from "@/screens/SpanishLevelsScreen";
import FrenchLevelsScreen from "@/screens/FrenchLevelsScreen";
import GermanLevelsScreen from "@/screens/GermanLevelsScreen";
import JapaneseLevelsScreen from "@/screens/JapaneseLevelsScreen";
import ChineseLevelsScreen from "@/screens/ChineseLevelsScreen";
import ChineseReviewScreen from "@/screens/ChineseReviewScreen";
import ChinesePlacementScreen from "@/screens/ChinesePlacementScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import OnboardingScreen from "@/screens/OnboardingScreen";
import LessonRunnerScreen from "@/screens/LessonRunnerScreen";
import ReviewListScreen from "@/screens/ReviewListScreen";
import TodayReviewScreen from "@/screens/TodayReviewScreen";
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
import FrenchPlacementTestScreen from "@/screens/FrenchPlacementTestScreen";
import FrenchConjugationScreen from "@/screens/FrenchConjugationScreen";
import FrenchGlossaryScreen from "@/screens/FrenchGlossaryScreen";
import GermanPlacementTestScreen from "@/screens/GermanPlacementTestScreen";
import GermanConjugationScreen from "@/screens/GermanConjugationScreen";
import GermanGlossaryScreen from "@/screens/GermanGlossaryScreen";
import PortugueseLevelsScreen from "@/screens/PortugueseLevelsScreen";
import PortuguesePlacementTestScreen from "@/screens/PortuguesePlacementTestScreen";
import PortugueseConjugationScreen from "@/screens/PortugueseConjugationScreen";
import PortugueseGlossaryScreen from "@/screens/PortugueseGlossaryScreen";
import WritingScreen from "@/screens/WritingScreen";
import StudyToolsScreen from "@/screens/StudyToolsScreen";
import { withPlan } from "@/components/withPlan";
import PlanLock from "@/components/PlanLock";
import { courseOfLevelPath } from "@/lib/courses";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getReadingLevel } from "@/lib/stories/registry";

// Study tools that come with a plan (withPlan.tsx): the conjugators and
// glossaries. Everything in the app already needs an account.
const ConjugationPaid = withPlan(ConjugationScreen, "es");
const GlossaryPaid = withPlan(GlossaryScreen, "es");
const FrenchConjugationPaid = withPlan(FrenchConjugationScreen, "fr");
const FrenchGlossaryPaid = withPlan(FrenchGlossaryScreen, "fr");
const GermanConjugationPaid = withPlan(GermanConjugationScreen, "de");
const GermanGlossaryPaid = withPlan(GermanGlossaryScreen, "de");
const PortugueseConjugationPaid = withPlan(PortugueseConjugationScreen, "pt");
const PortugueseGlossaryPaid = withPlan(PortugueseGlossaryScreen, "pt");

// Testing out of a unit is part of the plan for that unit's course.
function UnitTestPaid(props: NativeStackScreenProps<AppStackParamList, "UnitTest">) {
  const { lessonsCourses } = useAuth();
  const course = courseOfLevelPath(props.route.params.levelPath);
  if (!planCovers(lessonsCourses, course)) return <PlanLock course={course} />;
  return <UnitTestScreen {...props} />;
}

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
        headerStyle: { backgroundColor: "#FAF7F2" },
        headerTintColor: "#8B0000",
        headerTitleStyle: { fontFamily: "Fraunces_600SemiBold", fontSize: 19, color: "#2A1513" },
        headerShadowVisible: false,
      }}
    >
      <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <AppStack.Screen name="SpanishLevels" component={SpanishLevelsScreen} options={{ title: "Spanish" }} />
      <AppStack.Screen name="FrenchLevels" component={FrenchLevelsScreen} options={{ title: "French" }} />
      <AppStack.Screen name="GermanLevels" component={GermanLevelsScreen} options={{ title: "German" }} />
      <AppStack.Screen name="PortugueseLevels" component={PortugueseLevelsScreen} options={{ title: "Portuguese" }} />
      <AppStack.Screen name="LessonList" component={LessonListScreen} options={{ title: "Lessons" }} />
      <AppStack.Screen name="JapaneseLevels" component={JapaneseLevelsScreen} options={{ title: "Japanese" }} />
      <AppStack.Screen name="ChineseLevels" component={ChineseLevelsScreen} options={{ title: "Chinese" }} />
      <AppStack.Screen name="ChineseReview" component={ChineseReviewScreen} options={{ title: "Today's review" }} />
      <AppStack.Screen name="ChinesePlacement" component={ChinesePlacementScreen} options={{ title: "Placement test" }} />
      <AppStack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />
      <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ title: "Welcome" }} />
      <AppStack.Screen
        name="LessonRunner"
        component={LessonRunnerScreen}
        options={{ title: "" }}
      />
      <AppStack.Screen name="Review" component={ReviewListScreen} options={{ title: "Review" }} />
      <AppStack.Screen name="ReviewDrill" component={ReviewDrillScreen} options={{ title: "Review" }} />
      <AppStack.Screen name="TodayReview" component={TodayReviewScreen} options={{ title: "Today's review" }} />
      <AppStack.Screen name="UnitTest" component={UnitTestPaid} options={{ title: "Test out" }} />
      <AppStack.Screen name="Flashcards" component={FlashcardsScreen} options={{ title: "Flashcards" }} />
      <AppStack.Screen name="FrequencyDecks" component={FrequencyDecksScreen} options={{ title: "Frequency decks" }} />
      <AppStack.Screen name="Exams" component={ExamsScreen} options={{ title: "Exam practice" }} />
      <AppStack.Screen
        name="Exam"
        component={ExamScreen}
        options={({ route }) => ({
          title:
            route.params.course === "fr"
              ? "DELF & DALF practice"
              : route.params.course === "de"
                ? "Goethe-Zertifikat practice"
                : route.params.course === "pt"
                  ? "Celpe-Bras practice"
                  : "DELE practice",
        })}
      />
      <AppStack.Screen name="ExamPaper" component={ExamPaperScreen} options={{ title: "" }} />
      <AppStack.Screen name="ReadingLevels" component={ReadingLevelsScreen} options={{ title: "Readings" }} />
      <AppStack.Screen
        name="ReadingsList"
        component={ReadingsListScreen}
        options={({ route }) => ({
          title: route.params?.frenchLevel
            ? `${route.params.frenchLevel.toUpperCase()} Stories`
            : route.params?.germanLevel
              ? `${route.params.germanLevel.toUpperCase()} Stories`
              : route.params?.portugueseLevel
                ? `${route.params.portugueseLevel.toUpperCase()} Stories`
                : `${getReadingLevel(route.params?.levelPath ?? "a1").code} Readings`,
        })}
      />
      <AppStack.Screen name="StoryReader" component={StoryReaderScreen} options={{ title: "" }} />
      <AppStack.Screen name="Writing" component={WritingScreen} options={{ title: "Writing" }} />
      <AppStack.Screen name="StudyTools" component={StudyToolsScreen} options={{ title: "Study tools" }} />
      <AppStack.Screen name="Grammar" component={GrammarListScreen} options={{ title: "Grammar" }} />
      <AppStack.Screen name="GrammarGuide" component={GrammarGuideScreen} options={{ title: "" }} />
      <AppStack.Screen name="Placement" component={PlacementTestScreen} options={{ title: "Placement test" }} />
      <AppStack.Screen name="Conjugation" component={ConjugationPaid} options={{ title: "Verb conjugation" }} />
      <AppStack.Screen name="Glossary" component={GlossaryPaid} options={{ title: "Glossary" }} />
      <AppStack.Screen name="FrenchPlacement" component={FrenchPlacementTestScreen} options={{ title: "French placement test" }} />
      <AppStack.Screen name="FrenchConjugation" component={FrenchConjugationPaid} options={{ title: "French verb conjugation" }} />
      <AppStack.Screen name="FrenchGlossary" component={FrenchGlossaryPaid} options={{ title: "French glossary" }} />
      <AppStack.Screen name="GermanPlacement" component={GermanPlacementTestScreen} options={{ title: "German placement test" }} />
      <AppStack.Screen name="GermanConjugation" component={GermanConjugationPaid} options={{ title: "German verb conjugation" }} />
      <AppStack.Screen name="GermanGlossary" component={GermanGlossaryPaid} options={{ title: "German glossary" }} />
      <AppStack.Screen name="PortuguesePlacement" component={PortuguesePlacementTestScreen} options={{ title: "Portuguese placement test" }} />
      <AppStack.Screen name="PortugueseConjugation" component={PortugueseConjugationPaid} options={{ title: "Portuguese verb conjugation" }} />
      <AppStack.Screen name="PortugueseGlossary" component={PortugueseGlossaryPaid} options={{ title: "Portuguese glossary" }} />
    </AppStack.Navigator>
  );
}

export default function RootNavigator() {
  // No animated intro: the native splash (app.json -- white "D" on the
  // brand red, matching the app icon) covers the cold launch instead.
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FAF7F2" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>{session ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
}
