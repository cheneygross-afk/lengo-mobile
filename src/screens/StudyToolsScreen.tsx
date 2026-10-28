import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import NavCard from "@/ui/NavCard";
import type { IconName, Tint } from "@/ui/Icon";
import { colors } from "@/ui/theme";
import { ITALIAN_TOOLS } from "@/lib/italianTools";

// Each tool's icon and tile color, picked from its title.
function toolLook(title: string): { icon: IconName; tint: Tint } {
  const t = title.toLowerCase();
  if (t.includes("grammar")) return { icon: "grammar", tint: "rose" };
  if (t.includes("conjugation")) return { icon: "conjugation", tint: "saffron" };
  if (t.includes("exam") || t.includes("topik") || t.includes("cils")) return { icon: "exam", tint: "sea" };
  if (t.includes("writing")) return { icon: "writing", tint: "saffron" };
  if (t.includes("roots")) return { icon: "lessons", tint: "rose" };
  if (t.includes("glossary")) return { icon: "glossary", tint: "rose" };
  if (t.includes("placement")) return { icon: "placement", tint: "sea" };
  return { icon: "vocab", tint: "saffron" };
}

type Props = NativeStackScreenProps<AppStackParamList, "StudyTools">;

type Tool = { route: "Grammar" | "Conjugation" | "Exams" | "Glossary"; title: string; body: string };

type CourseTool = { title: string; body: string; open: (navigation: Props["navigation"]) => void };

// The French course's counterpart (the website's /lessons/fr/tools): the
// same tools, for French.
const FRENCH_TOOLS: CourseTool[] = [
  {
    title: "Grammar Guides",
    body: "Short explanations of the grammar points learners get stuck on, from beginner to advanced.",
    open: (n) => n.navigate("Grammar", { lang: "fr" }),
  },
  {
    title: "Verb Conjugation",
    body: "Full tables for any verb with the irregular forms marked, plus drills by tense.",
    open: (n) => n.navigate("FrenchConjugation"),
  },
  {
    title: "DELF & DALF Exam Practice",
    body: "Practice exams for every level from DELF A1 to DALF C2, in the format of the real exam.",
    open: (n) => n.navigate("Exams", { course: "fr" }),
  },
  {
    title: "Glossary",
    body: "Look up any word taught in the course, with its meaning and the lesson it comes from.",
    open: (n) => n.navigate("FrenchGlossary"),
  },
];

// The German course's (the website's /lessons/de/tools).
const GERMAN_TOOLS: CourseTool[] = [
  {
    title: "Grammar Guides",
    body: "Short explanations of the grammar points learners get stuck on, from beginner to advanced.",
    open: (n) => n.navigate("Grammar", { lang: "de" }),
  },
  {
    title: "Verb Conjugation",
    body: "Full tables for any verb with the irregular forms marked, plus drills by tense.",
    open: (n) => n.navigate("GermanConjugation"),
  },
  {
    title: "Goethe-Zertifikat Exam Practice",
    body: "Practice exams for every level from Goethe A1 to C2, in the format of the real exam.",
    open: (n) => n.navigate("Exams", { course: "de" }),
  },
  {
    title: "Glossary",
    body: "Look up any word taught in the course, with its meaning and the lessons it comes from.",
    open: (n) => n.navigate("GermanGlossary"),
  },
];

// The Brazilian Portuguese course's (the website's /lessons/pt/tools).
// Writing practice has its own card on Home, as for French and German.
const PORTUGUESE_TOOLS: CourseTool[] = [
  {
    title: "Grammar Guides",
    body: "Short explanations of the grammar points learners get stuck on, from beginner to advanced.",
    open: (n) => n.navigate("Grammar", { lang: "pt" }),
  },
  {
    title: "Verb Conjugation",
    body: "Full tables for any verb with the irregular forms marked, plus drills by tense.",
    open: (n) => n.navigate("PortugueseConjugation"),
  },
  {
    title: "Celpe-Bras Exam Practice",
    body: "Practice exams in the format of the Celpe-Bras, Brazil's official certificate, plus a practice test for the Elementary level.",
    open: (n) => n.navigate("Exams", { course: "pt" }),
  },
  {
    title: "Glossary",
    body: "Look up any word taught in the course, with its meaning and the lessons it comes from.",
    open: (n) => n.navigate("PortugueseGlossary"),
  },
];

// The Korean beta's (the website's /lessons/ko/tools): the Portuguese
// course's tools plus writing practice (Home has no Korean Writing card),
// vocabulary by level, and the optional Word Roots -- the only screens in
// the course that show Hanja.
const KOREAN_TOOLS: CourseTool[] = [
  {
    title: "Grammar Guides",
    body: "Short explanations of the grammar points learners get stuck on, from particles and speech levels to the written style, plus the pronunciation rules.",
    open: (n) => n.navigate("Grammar", { lang: "ko" }),
  },
  {
    title: "Verb Conjugation",
    body: "Every form of a verb or adjective in every speech level, with the irregular forms marked, plus drills.",
    open: (n) => n.navigate("KoreanConjugation"),
  },
  {
    title: "Writing Practice",
    body: "Write anything from a few sentences to a couple of pages and get instant AI feedback at your level.",
    open: (n) => n.navigate("Writing", { lang: "ko" }),
  },
  {
    title: "TOPIK Practice",
    body: "Practice tests in the format of the Test of Proficiency in Korean, TOPIK I and TOPIK II, scored like the real test.",
    open: (n) => n.navigate("Exams", { course: "ko" }),
  },
  {
    title: "Vocabulary by Level",
    body: "Every word and phrase the course teaches, Beginner to Mastery and the culture lessons, with audio and meanings.",
    open: (n) => n.navigate("KoreanGlossary", { level: "a1" }),
  },
  {
    title: "Glossary",
    body: "Look up any word taught in the course, in Korean or English, with its meaning and the lesson it comes from.",
    open: (n) => n.navigate("KoreanGlossary"),
  },
  {
    title: "Word Roots",
    body: "Optional: the Sino-Korean roots behind thousands of words, each with its Chinese character (Hanja) and the words you know from the course.",
    open: (n) => n.navigate("KoreanRoots"),
  },
];

// Mobile port of the website's /tools hub: the Spanish reference and
// practice tools behind one "Study Tools" card on Home, plus the
// placement test (most learners take it once, so it lives here and in
// Settings rather than on Home).
const TOOLS: Tool[] = [
  { route: "Grammar", title: "Grammar Guides", body: "Short explanations of the grammar points learners get stuck on, from A1 to C2." },
  { route: "Conjugation", title: "Verb Conjugation", body: "Full tables for any verb with the irregular forms marked, plus drills by tense." },
  { route: "Exams", title: "DELE Exam Practice", body: "Full-length practice exams for A1 to C2, marked like the real DELE." },
  {
    route: "Glossary",
    title: "Glossary",
    body: "Look up any word taught in the course, with its meaning and the lessons and stories it comes from.",
  },
];

export default function StudyToolsScreen({ navigation, route }: Props) {
  const lang = route.params?.lang;
  const course =
    lang === "fr"
      ? { name: "French", tools: FRENCH_TOOLS, placement: "FrenchPlacement" as const }
      : lang === "de"
        ? { name: "German", tools: GERMAN_TOOLS, placement: "GermanPlacement" as const }
        : lang === "pt"
          ? { name: "Portuguese", tools: PORTUGUESE_TOOLS, placement: "PortuguesePlacement" as const }
          : lang === "ko"
            ? { name: "Korean", tools: KOREAN_TOOLS, placement: "KoreanPlacement" as const }
            : lang === "it"
              ? // The Italian beta: the tools whose data the app has (lib/italianTools.ts); its placement test,
                // optional like every course's, sits apart under "Your level".
                {
                  name: "Italian",
                  tools: ITALIAN_TOOLS.filter((t) => !t.placement),
                  placement: ITALIAN_TOOLS.some((t) => t.placement) ? ("ItalianPlacement" as const) : null,
                }
              : null;
  useLayoutEffect(() => {
    if (course) navigation.setOptions({ title: `${course.name} study tools` });
  }, [navigation, course?.name]);
  if (course) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Reference and practice tools to use alongside your {course.name} lessons, whenever you need them.
        </Text>
        <View style={styles.list}>
          {course.tools.map((t) => (
            <NavCard key={t.title} {...toolLook(t.title)} title={t.title} body={t.body} onPress={() => t.open(navigation)} />
          ))}
        </View>
        {course.placement && (
          <>
            <Text style={styles.sectionHeader}>YOUR LEVEL</Text>
            <NavCard
              icon="placement"
              tint="sea"
              title="Placement Test"
              body={
                lang === "ko"
                  ? "Find your level, from Hangul to Mastery. Retake anytime."
                  : lang === "it"
                    ? (ITALIAN_TOOLS.find((t) => t.placement)?.body ?? "Find your level, retake anytime.")
                    : "Find your level, retake anytime."
              }
              onPress={() => {
                if (course.placement) navigation.navigate(course.placement);
              }}
            />
          </>
        )}
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>Reference and practice tools to use alongside your lessons, whenever you need them.</Text>
      <View style={styles.list}>
        {TOOLS.map((t) => (
          <NavCard key={t.route} {...toolLook(t.title)} title={t.title} body={t.body} onPress={() => navigation.navigate(t.route)} />
        ))}
      </View>
      <Text style={styles.sectionHeader}>YOUR LEVEL</Text>
      <NavCard icon="placement" tint="sea" title="Placement Test" body="Find your level, retake anytime." onPress={() => navigation.navigate("Placement")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 15, lineHeight: 21, color: colors.inkSoft, marginBottom: 18 },
  list: { gap: 12 },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.inkMuted,
    letterSpacing: 1.2,
    marginTop: 26,
    marginBottom: 10,
    marginLeft: 4,
  },
});
