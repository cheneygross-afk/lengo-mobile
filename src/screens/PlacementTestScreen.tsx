import { useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import type { LessonModuleKey } from "@/lib/lessons/registry";
import { findLessonBySlug } from "@/lib/lessons/registry";
import {
  PLACEMENT_QUESTIONS,
  getMissedQuestions,
  scorePlacementTest,
  type PlacementLevel,
} from "@/lib/placementTest";
import ExerciseBlock from "@/components/ExerciseBlock";
import TapText from "@/components/TapText";
import { SPANISH_LANG } from "@/lib/speech";

type Props = NativeStackScreenProps<AppStackParamList, "Placement">;

const LEVEL_KEY: Record<PlacementLevel, LessonModuleKey> = {
  A1: "a1",
  A2: "a2",
  B1: "b1",
  B2: "b2",
  C1: "c1",
  C2: "c2",
};

const LEVEL_NAME: Record<PlacementLevel, string> = {
  A1: "A1 · Beginner",
  A2: "A2 · Elementary",
  B1: "B1 · Intermediate",
  B2: "B2 · Upper-intermediate",
  C1: "C1 · Advanced",
  C2: "C2 · Mastery",
};

// Mobile port of the website's placement test (PlacementTestRunner):
// the same 35 questions and scoring (src/lib/placementTest.ts, synced
// from the website), then a results screen that recommends a level and
// links every missed question to the lesson that teaches it.
export default function PlacementTestScreen({ navigation }: Props) {
  const [answered, setAnswered] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const totalAnswered = Object.keys(answered).length;
  const allAnswered = totalAnswered === PLACEMENT_QUESTIONS.length;
  const correctByIndex = PLACEMENT_QUESTIONS.map((_, i) => !!answered[i]);

  function seeResults() {
    setShowResults(true);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  function retake() {
    setAnswered({});
    setShowResults(false);
    setAttempt((n) => n + 1);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  if (showResults) {
    const result = scorePlacementTest(correctByIndex);
    const missed = getMissedQuestions(correctByIndex);
    const correctCount = correctByIndex.filter(Boolean).length;
    return (
      <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={s.content}>
        <Text style={s.title}>Your results</Text>
        <Text style={s.body}>
          {correctCount} of {PLACEMENT_QUESTIONS.length} correct.
        </Text>

        <View style={s.card}>
          <Text style={s.cardKicker}>We recommend starting at</Text>
          <Text style={s.cardLevel}>{LEVEL_NAME[result.recommendedLevel]}</Text>
          <Text style={s.cardBody}>
            {result.masteredEverything
              ? "You passed every level, including Professional & Academic -- you're already working at a native level of mastery. C2 is there if you want to polish the details."
              : "That's the first level where gaps started showing up. Each level builds on the one before it, so starting there is what closes those gaps."}
          </Text>
          <Pressable
            style={s.bigBtn}
            onPress={() => navigation.navigate("LessonList", { moduleKey: LEVEL_KEY[result.recommendedLevel] })}
          >
            <Text style={s.bigBtnText}>Start at {LEVEL_NAME[result.recommendedLevel]}</Text>
          </Pressable>
          <Pressable style={s.secondaryBtn} onPress={() => navigation.navigate("SpanishLevels")}>
            <Text style={s.secondaryBtnText}>See all levels</Text>
          </Pressable>
        </View>

        <Text style={s.sectionHeader}>Breakdown by level</Text>
        {result.results.map((r) => (
          <View key={r.level} style={s.row}>
            <Text style={s.rowTitle}>{LEVEL_NAME[r.level]}</Text>
            <Text style={[s.rowScore, r.passed && s.rowScorePassed]}>
              {r.correct}/{r.total}
              {r.passed ? " ✓" : ""}
            </Text>
          </View>
        ))}

        {missed.length > 0 && (
          <>
            <Text style={s.sectionHeader}>Lessons to revisit ({missed.length})</Text>
            <Text style={s.body}>Every question you missed, with the lesson that teaches it.</Text>
            {missed.map(({ question, index }) => {
              const lesson = findLessonBySlug(question.relatedLessonSlug);
              return (
                <View key={index} style={s.missed}>
                  <TapText text={question.question} lang={SPANISH_LANG} style={s.missedQuestion} />
                  {lesson ? (
                    <Pressable
                      onPress={() => navigation.navigate("LessonRunner", { slug: lesson.slug })}
                      hitSlop={6}
                    >
                      <Text style={s.missedLink}>
                        {question.level} · Lesson {lesson.number}: {lesson.title} →
                      </Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => navigation.navigate("LessonList", { moduleKey: LEVEL_KEY[question.level] })}
                      hitSlop={6}
                    >
                      <Text style={s.missedLink}>{LEVEL_NAME[question.level]} lessons →</Text>
                    </Pressable>
                  )}
                </View>
              );
            })}
          </>
        )}

        <Pressable onPress={retake} hitSlop={8} style={{ marginTop: 18 }}>
          <Text style={s.retake}>← Retake the test</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <Text style={s.title}>Placement test</Text>
      <Text style={s.body}>
        35 questions spanning every level, from complete beginner to professional and academic mastery. Answer each
        one as best you can -- no time limit, and you&apos;ll see the explanation right after each question.
      </Text>
      <Text style={s.progress}>
        {totalAnswered} of {PLACEMENT_QUESTIONS.length} answered
      </Text>

      {PLACEMENT_QUESTIONS.map((question, i) => (
        <View key={`${attempt}-${i}`} style={s.question}>
          <ExerciseBlock
            exercise={question}
            index={i}
            lang={SPANISH_LANG}
            onChecked={(correct) => setAnswered((prev) => ({ ...prev, [i]: correct }))}
          />
        </View>
      ))}

      {allAnswered ? (
        <Pressable style={s.bigBtn} onPress={seeResults}>
          <Text style={s.bigBtnText}>See my results</Text>
        </Pressable>
      ) : (
        <Text style={s.progress}>Answer every question to see your results.</Text>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 48 },
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 10 },
  body: { fontSize: 15, lineHeight: 22, color: "#000000cc", marginBottom: 10 },
  progress: { fontSize: 13, color: "#00000066", marginBottom: 16, marginTop: 4 },
  question: { marginBottom: 22 },
  card: {
    borderWidth: 1,
    borderColor: "#00000025",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
    marginVertical: 12,
  },
  cardKicker: { fontSize: 13, color: "#00000099" },
  cardLevel: { fontSize: 22, fontWeight: "800", color: "#7A1F1F", marginVertical: 6 },
  cardBody: { fontSize: 14, lineHeight: 20, color: "#000000cc" },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "800",
    color: "#00000066",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: 18,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#00000012",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    marginBottom: 6,
  },
  rowTitle: { fontSize: 14, fontWeight: "600", color: "#000" },
  rowScore: { fontSize: 14, color: "#00000080" },
  rowScorePassed: { color: "#15803d" },
  missed: {
    borderWidth: 1,
    borderColor: "#00000012",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
    gap: 6,
  },
  missedQuestion: { fontSize: 14, color: "#000000cc", lineHeight: 20 },
  missedLink: { fontSize: 13, fontWeight: "700", color: "#7A1F1F" },
  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryBtnText: { color: "#7A1F1F", fontWeight: "700", fontSize: 15 },
  retake: { fontSize: 14, color: "#00000099", textDecorationLine: "underline" },
});
