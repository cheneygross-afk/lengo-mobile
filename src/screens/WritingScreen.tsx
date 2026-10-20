import { useLayoutEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { Write } from "@/components/SkillExercises";
import PlanLock from "@/components/PlanLock";
import { planCovers, useAuth } from "@/lib/auth/AuthContext";
import type { SpeechLang } from "@/lib/speech";
import type { WriteExercise } from "@/lib/lessons/types";
import { longPrompts, longRange, type PromptLevel } from "@/lib/writingPrompts";

type Props = NativeStackScreenProps<AppStackParamList, "Writing">;
type Lang = "es" | "fr" | "de" | "pt" | "ja" | "zh";

// Writing practice: the website's Writing page (/writing,
// /lessons/<course>/tools/writing) for the app. Open writing tasks for
// each level, from a few sentences to a couple of pages, marked by the AI
// writing feedback. src/lib/writingPrompts.ts is a copy of the website's
// file. Spanish, French, German and Portuguese need a plan, like on the
// website (planCovers).
const COURSE: Record<Lang, { name: string; speech: SpeechLang; prefix: string }> = {
  es: { name: "Spanish", speech: "es-ES", prefix: "" },
  fr: { name: "French", speech: "fr-FR", prefix: "FR-" },
  de: { name: "German", speech: "de-DE", prefix: "DE-" },
  pt: { name: "Portuguese", speech: "pt-BR", prefix: "PT-" },
  ja: { name: "Japanese", speech: "ja-JP", prefix: "JA-" },
  zh: { name: "Chinese", speech: "zh-CN", prefix: "ZH-" },
};

const LEVELS: { level: PromptLevel; label: string }[] = [
  { level: "a1", label: "Beginner" },
  { level: "a2", label: "Elementary" },
  { level: "b1", label: "Intermediate" },
  { level: "b2", label: "Upper-intermediate" },
  { level: "c1", label: "Advanced" },
  { level: "c2", label: "Mastery" },
];

export default function WritingScreen({ route, navigation }: Props) {
  const lang: Lang = route.params?.lang ?? "es";
  const course = COURSE[lang];
  const { lessonsCourses } = useAuth();
  const [level, setLevel] = useState<PromptLevel>("a1");
  const [open, setOpen] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${course.name} writing` });
  }, [navigation, course.name]);

  if ((lang === "es" || lang === "fr" || lang === "de" || lang === "pt") && !planCovers(lessonsCourses, lang)) {
    return <PlanLock course={lang} kind="tool" />;
  }

  const characters = lang === "ja" || lang === "zh";
  const [minWords, maxWords] = longRange(level, characters);
  const gradeLevel = `${course.prefix}${level.toUpperCase()}`;
  const unit = characters ? "characters" : "words";

  function pick(id: string | null) {
    setOpen(id);
    setDone(false);
    setAttempt((n) => n + 1);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.subtitle}>
        Write anything from a few sentences to a couple of pages and get instant feedback: a score, corrections with reasons,
        and a check against what the task asks for.
      </Text>

      <View style={styles.levels}>
        {LEVELS.map((l) => (
          <Pressable
            key={l.level}
            onPress={() => {
              setLevel(l.level);
              pick(null);
            }}
            style={[styles.chip, l.level === level && styles.chipOn]}
          >
            <Text style={[styles.chipText, l.level === level && styles.chipTextOn]}>{l.label}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.list}>
        {longPrompts(level).map((p) => {
          const exercise: WriteExercise = { type: "write", prompt: p.prompt, rubric: p.rubric, minWords, maxWords, modelAnswer: "", explanation: "" };
          const isOpen = open === p.id;
          return (
            <View key={p.id} style={styles.card}>
              <Pressable onPress={() => pick(isOpen ? null : p.id)}>
                <Text style={styles.meta}>
                  {p.genre} · {minWords}–{maxWords} {unit}
                </Text>
                <Text style={styles.cardBody}>{p.prompt}</Text>
              </Pressable>
              {isOpen && (
                <View style={{ marginTop: 12 }}>
                  <Write key={attempt} exercise={exercise} lang={course.speech} level={gradeLevel} checked={done} submit={() => setDone(true)} />
                  {done && (
                    <Pressable
                      style={styles.again}
                      onPress={() => {
                        setDone(false);
                        setAttempt((n) => n + 1);
                      }}
                    >
                      <Text style={styles.againText}>Write it again</Text>
                    </Pressable>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { padding: 20, paddingBottom: 60 },
  subtitle: { fontSize: 14, color: "#2A151399", marginBottom: 16 },
  levels: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  chip: { borderWidth: 1, borderColor: "#2A151325", borderRadius: 999, paddingVertical: 6, paddingHorizontal: 12, backgroundColor: "#fff" },
  chipOn: { backgroundColor: "#2A1513", borderColor: "#2A1513" },
  chipText: { fontSize: 13, color: "#2A1513" },
  chipTextOn: { color: "#fff" },
  list: { gap: 10 },
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 16, backgroundColor: "#fff" },
  meta: { fontSize: 12, color: "#2A151380", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 },
  cardBody: { fontSize: 14.5, color: "#2A1513", lineHeight: 20 },
  again: { marginTop: 10, alignSelf: "flex-start", borderWidth: 1, borderColor: "#2A151340", borderRadius: 999, paddingVertical: 6, paddingHorizontal: 12 },
  againText: { fontSize: 13, color: "#2A1513" },
});
