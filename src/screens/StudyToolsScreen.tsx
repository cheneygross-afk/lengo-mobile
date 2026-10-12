import { useLayoutEffect } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";

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
            <Pressable key={t.title} style={styles.card} onPress={() => t.open(navigation)}>
              <Text style={styles.cardTitle}>{t.title}</Text>
              <Text style={styles.cardBody}>{t.body}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.sectionHeader}>YOUR LEVEL</Text>
        <Pressable style={styles.card} onPress={() => navigation.navigate(course.placement)}>
          <Text style={styles.cardTitle}>Placement Test</Text>
          <Text style={styles.cardBody}>Find your level, retake anytime.</Text>
        </Pressable>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>Reference and practice tools to use alongside your lessons, whenever you need them.</Text>
      <View style={styles.list}>
        {TOOLS.map((t) => (
          <Pressable key={t.route} style={styles.card} onPress={() => navigation.navigate(t.route)}>
            <Text style={styles.cardTitle}>{t.title}</Text>
            <Text style={styles.cardBody}>{t.body}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.sectionHeader}>YOUR LEVEL</Text>
      <Pressable style={styles.card} onPress={() => navigation.navigate("Placement")}>
        <Text style={styles.cardTitle}>Placement Test</Text>
        <Text style={styles.cardBody}>Find your level, retake anytime.</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 14, color: "#00000099", marginBottom: 16 },
  list: { gap: 10 },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "800",
    color: "#00000066",
    letterSpacing: 0.5,
    marginTop: 24,
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 16,
    backgroundColor: "#fff",
  },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#000", marginBottom: 4 },
  cardBody: { fontSize: 13.5, color: "#00000099", lineHeight: 19 },
});
