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
import KoreanLevelsScreen from "@/screens/KoreanLevelsScreen";
import ItalianLevelsScreen from "@/screens/ItalianLevelsScreen";
import ItalianPlacementTestScreen from "@/screens/ItalianPlacementTestScreen";
import ItalianConjugationScreen from "@/screens/ItalianConjugationScreen";
import ItalianGlossaryScreen from "@/screens/ItalianGlossaryScreen";
import ItalianArticlesScreen from "@/screens/ItalianArticlesScreen";
import ItalianPronunciationScreen from "@/screens/ItalianPronunciationScreen";
import KoreanPlacementTestScreen from "@/screens/KoreanPlacementTestScreen";
import KoreanConjugationScreen from "@/screens/KoreanConjugationScreen";
import KoreanGlossaryScreen from "@/screens/KoreanGlossaryScreen";
import { KoreanRootsScreen, KoreanRootsLevelScreen } from "@/screens/KoreanRootsScreen";
import WritingScreen from "@/screens/WritingScreen";
import StudyToolsScreen from "@/screens/StudyToolsScreen";
import { withPlan } from "@/components/withPlan";
import { paramsAreItalian, withItalianBeta } from "@/components/withItalianBeta";
import { isItalianStorySlug } from "@/lib/stories/italian";
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
const KoreanConjugationPaid = withPlan(KoreanConjugationScreen, "ko");
const KoreanGlossaryPaid = withPlan(KoreanGlossaryScreen, "ko");
const ItalianConjugationPaid = withPlan(ItalianConjugationScreen, "it");
const ItalianGlossaryPaid = withPlan(ItalianGlossaryScreen, "it");

// Testing out of a unit is part of the plan for that unit's course.
function UnitTestPaid(props: NativeStackScreenProps<AppStackParamList, "UnitTest">) {
  const { lessonsCourses } = useAuth();
  const course = courseOfLevelPath(props.route.params.levelPath);
  if (!planCovers(lessonsCourses, course)) return <PlanLock course={course} />;
  return <UnitTestScreen {...props} />;
}

// The Italian beta (withItalianBeta.tsx): its own screens, and the shared
// ones when opened with Italian params, are "not found" for every account
// but the beta's. Other params pass straight through, so no other course
// changes.
const ItalianLevels = withItalianBeta(ItalianLevelsScreen, true);
const LessonList = withItalianBeta(LessonListScreen);
const LessonRunner = withItalianBeta(LessonRunnerScreen);
const UnitTest = withItalianBeta(UnitTestPaid);
const ReviewList = withItalianBeta(ReviewListScreen);
const ReviewDrill = withItalianBeta(ReviewDrillScreen);
const Flashcards = withItalianBeta(FlashcardsScreen);
const ReadingLevels = withItalianBeta(ReadingLevelsScreen);
const ReadingsList = withItalianBeta(ReadingsListScreen);
const TodayReview = withItalianBeta(TodayReviewScreen);
const StudyTools = withItalianBeta(StudyToolsScreen);
const GrammarList = withItalianBeta(GrammarListScreen);
const GrammarGuide = withItalianBeta(GrammarGuideScreen);
const Exams = withItalianBeta(ExamsScreen);
const Exam = withItalianBeta(ExamScreen);
const ExamPaper = withItalianBeta(ExamPaperScreen);
const Writing = withItalianBeta(WritingScreen);
const ItalianPlacement = withItalianBeta(ItalianPlacementTestScreen, true);
const ItalianConjugation = withItalianBeta(ItalianConjugationPaid, true);
const ItalianGlossary = withItalianBeta(ItalianGlossaryPaid, true);
const ItalianArticles = withItalianBeta(ItalianArticlesScreen, true);
const ItalianPronunciation = withItalianBeta(ItalianPronunciationScreen, true);
// An Italian story is Italian by its "it/..." levelPath or its "it-" slug.
const StoryReader = withItalianBeta(
  StoryReaderScreen,
  (params) => paramsAreItalian(params) || isItalianStorySlug((params as { slug?: string } | undefined)?.slug ?? "")
);

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
      <AppStack.Screen name="KoreanLevels" component={KoreanLevelsScreen} options={{ title: "Korean" }} />
      <AppStack.Screen name="ItalianLevels" component={ItalianLevels} options={{ title: "Italian" }} />
      <AppStack.Screen name="LessonList" component={LessonList} options={{ title: "Lessons" }} />
      <AppStack.Screen name="JapaneseLevels" component={JapaneseLevelsScreen} options={{ title: "Japanese" }} />
      <AppStack.Screen name="ChineseLevels" component={ChineseLevelsScreen} options={{ title: "Chinese" }} />
      <AppStack.Screen name="ChineseReview" component={ChineseReviewScreen} options={{ title: "Today's review" }} />
      <AppStack.Screen name="ChinesePlacement" component={ChinesePlacementScreen} options={{ title: "Placement test" }} />
      <AppStack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />
      <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ title: "Welcome" }} />
      <AppStack.Screen
        name="LessonRunner"
        component={LessonRunner}
        options={{ title: "" }}
      />
      <AppStack.Screen name="Review" component={ReviewList} options={{ title: "Review" }} />
      <AppStack.Screen name="ReviewDrill" component={ReviewDrill} options={{ title: "Review" }} />
      <AppStack.Screen name="TodayReview" component={TodayReview} options={{ title: "Today's review" }} />
      <AppStack.Screen name="UnitTest" component={UnitTest} options={{ title: "Test out" }} />
      <AppStack.Screen name="Flashcards" component={Flashcards} options={{ title: "Flashcards" }} />
      <AppStack.Screen name="FrequencyDecks" component={FrequencyDecksScreen} options={{ title: "Frequency decks" }} />
      <AppStack.Screen name="Exams" component={Exams} options={{ title: "Exam practice" }} />
      <AppStack.Screen
        name="Exam"
        component={Exam}
        options={({ route }) => ({
          title:
            route.params.course === "fr"
              ? "DELF & DALF practice"
              : route.params.course === "de"
                ? "Goethe-Zertifikat practice"
                : route.params.course === "pt"
                  ? "Celpe-Bras practice"
                  : route.params.course === "ko"
                    ? "TOPIK practice"
                    : route.params.course === "it"
                      ? "CILS practice"
                      : "DELE practice",
        })}
      />
      <AppStack.Screen name="ExamPaper" component={ExamPaper} options={{ title: "" }} />
      <AppStack.Screen name="ReadingLevels" component={ReadingLevels} options={{ title: "Readings" }} />
      <AppStack.Screen
        name="ReadingsList"
        component={ReadingsList}
        options={({ route }) => ({
          title: route.params?.frenchLevel
            ? `${route.params.frenchLevel.toUpperCase()} Stories`
            : route.params?.germanLevel
              ? `${route.params.germanLevel.toUpperCase()} Stories`
              : route.params?.portugueseLevel
                ? `${route.params.portugueseLevel.toUpperCase()} Stories`
                : route.params?.italianLevel
                  ? "Italian stories"
                  : `${getReadingLevel(route.params?.levelPath ?? "a1").code} Readings`,
        })}
      />
      <AppStack.Screen name="StoryReader" component={StoryReader} options={{ title: "" }} />
      <AppStack.Screen name="Writing" component={Writing} options={{ title: "Writing" }} />
      <AppStack.Screen name="StudyTools" component={StudyTools} options={{ title: "Study tools" }} />
      <AppStack.Screen name="Grammar" component={GrammarList} options={{ title: "Grammar" }} />
      <AppStack.Screen name="GrammarGuide" component={GrammarGuide} options={{ title: "" }} />
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
      <AppStack.Screen name="KoreanPlacement" component={KoreanPlacementTestScreen} options={{ title: "Korean placement test" }} />
      <AppStack.Screen name="KoreanConjugation" component={KoreanConjugationPaid} options={{ title: "Korean verb conjugation" }} />
      <AppStack.Screen
        name="KoreanGlossary"
        component={KoreanGlossaryPaid}
        options={({ route }) => ({ title: route.params?.level ? "Korean vocabulary" : "Korean glossary" })}
      />
      <AppStack.Screen name="KoreanRoots" component={KoreanRootsScreen} options={{ title: "Word Roots" }} />
      <AppStack.Screen name="KoreanRootsLevel" component={KoreanRootsLevelScreen} options={{ title: "Word Roots" }} />
      <AppStack.Screen name="ItalianPlacement" component={ItalianPlacement} options={{ title: "Italian placement test" }} />
      <AppStack.Screen name="ItalianConjugation" component={ItalianConjugation} options={{ title: "Italian verb conjugation" }} />
      <AppStack.Screen name="ItalianArticles" component={ItalianArticles} options={{ title: "Articles & Prepositions" }} />
      <AppStack.Screen name="ItalianPronunciation" component={ItalianPronunciation} options={{ title: "Pronunciation & Spelling" }} />
      <AppStack.Screen
        name="ItalianGlossary"
        component={ItalianGlossary}
        options={({ route }) => ({ title: route.params?.level ? "Italian vocabulary" : "Italian glossary" })}
      />
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
