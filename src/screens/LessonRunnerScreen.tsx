import { useMemo, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { A1_LESSONS } from "@/lib/lessons/a1";
import ExerciseBlock from "@/components/ExerciseBlock";
import { markLessonCompleted } from "@/lib/lessons/completion";
import { autoEnrollLessonVocabulary } from "@/lib/flashcards/store";

type Props = NativeStackScreenProps<AppStackParamList, "LessonRunner">;

const LEVEL_PATH = "a1";

export default function LessonRunnerScreen({ route, navigation }: Props) {
  const { slug } = route.params;
  const lesson = useMemo(() => A1_LESSONS.find((l) => l.slug === slug), [slug]);

  const totalExercises = lesson
    ? lesson.sections.reduce((n, s) => n + (s.checkpoint?.length ?? 0), 0) + lesson.exercises.length
    : 0;
  const answeredCorrectly = useRef(new Set<string>());
  const [answeredCount, setAnsweredCount] = useState(0);
  const [finishing, setFinishing] = useState(false);
  const [done, setDone] = useState(false);

  if (!lesson) {
    return (
      <View style={s.center}>
        <Text>Lesson not found.</Text>
      </View>
    );
  }

  function handleAnswered(id: string) {
    if (!answeredCorrectly.current.has(id)) {
      answeredCorrectly.current.add(id);
      setAnsweredCount(answeredCorrectly.current.size);
    }
  }

  const allAnswered = answeredCount >= totalExercises && totalExercises > 0;

  async function finish() {
    if (!lesson) return;
    setFinishing(true);
    const { wasAlreadyDone } = await markLessonCompleted(LEVEL_PATH, lesson.slug);
    if (!wasAlreadyDone) {
      const examples = lesson.sections.flatMap((sec) => sec.examples ?? []);
      if (examples.length > 0) {
        await autoEnrollLessonVocabulary({
          lessonSlug: lesson.slug,
          level: lesson.level,
          levelPath: LEVEL_PATH,
          lessonTitle: lesson.title,
          examples,
        });
      }
    }
    setFinishing(false);
    setDone(true);
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.level}>
        {lesson.level} · Lesson {lesson.number}
      </Text>
      <Text style={s.title}>{lesson.title}</Text>
      <Text style={s.summary}>{lesson.summary}</Text>

      {lesson.sections.map((section, si) => (
        <View key={si} style={s.section}>
          <Text style={s.sectionHeading}>{section.heading}</Text>
          {section.body.map((p, pi) => (
            <Text key={pi} style={s.paragraph}>
              {p}
            </Text>
          ))}
          {section.examples?.map((ex, ei) => (
            <View key={ei} style={s.example}>
              <Text style={s.exampleEs}>{ex.es}</Text>
              {ex.en ? <Text style={s.exampleEn}>{ex.en}</Text> : null}
            </View>
          ))}
          {section.checkpoint?.map((ex, ei) => (
            <ExerciseBlock
              key={`cp-${si}-${ei}`}
              exercise={ex}
              index={ei}
              onAnswered={() => handleAnswered(`cp-${si}-${ei}`)}
            />
          ))}
        </View>
      ))}

      {lesson.exercises.length > 0 && (
        <View style={s.section}>
          <Text style={s.sectionHeading}>Review</Text>
          {lesson.exercises.map((ex, ei) => (
            <ExerciseBlock
              key={`ex-${ei}`}
              exercise={ex}
              index={ei}
              onAnswered={() => handleAnswered(`ex-${ei}`)}
            />
          ))}
        </View>
      )}

      {done ? (
        <View style={s.doneBox}>
          <Text style={s.doneTitle}>Lesson complete!</Text>
          <Pressable style={s.finishButton} onPress={() => navigation.goBack()}>
            <Text style={s.finishButtonText}>Back to lessons</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={[s.finishButton, !allAnswered && s.finishButtonDisabled]}
          disabled={!allAnswered || finishing}
          onPress={finish}
        >
          <Text style={s.finishButtonText}>
            {finishing
              ? "Saving…"
              : allAnswered
                ? "Mark lesson complete"
                : `Answer all questions (${answeredCount}/${totalExercises})`}
          </Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 16, paddingBottom: 48 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  level: { fontSize: 12, color: "#7A1F1F", fontWeight: "700", textTransform: "uppercase" },
  title: { fontSize: 22, fontWeight: "800", color: "#000", marginTop: 4 },
  summary: { fontSize: 14, color: "#00000099", marginTop: 6, marginBottom: 16 },
  section: { marginBottom: 20 },
  sectionHeading: { fontSize: 17, fontWeight: "700", color: "#000", marginBottom: 8 },
  paragraph: { fontSize: 15, color: "#000000dd", lineHeight: 22, marginBottom: 8 },
  example: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#00000012",
  },
  exampleEs: { fontSize: 15, color: "#000", fontWeight: "600" },
  exampleEn: { fontSize: 13, color: "#00000099", marginTop: 2 },
  doneBox: { alignItems: "center", gap: 12, marginTop: 12 },
  doneTitle: { fontSize: 18, fontWeight: "700", color: "#16a34a" },
  finishButton: {
    backgroundColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 12,
  },
  finishButtonDisabled: { opacity: 0.4 },
  finishButtonText: { color: "#fff", fontWeight: "700", fontSize: 15 },
});
