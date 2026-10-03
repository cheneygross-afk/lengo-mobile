import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import type { LessonModuleKey } from "@/lib/lessons/registry";
import { findLessonBySlug } from "@/lib/lessons/registry";
import {
  PLACEMENT_PROGRESS_KEY,
  PLACEMENT_TOTAL,
  ROUTER_QUESTIONS,
  getMissedQuestions,
  nextPlacementQuestion,
  normalizePlacementProgress,
  placementQuestionText,
  scorePlacementTest,
  type PlacementAnswers,
  type PlacementLevel,
} from "@/lib/placementTest";
import ExerciseBlock from "@/components/ExerciseBlock";
import TapText from "@/components/TapText";
import { SPANISH_LANG } from "@/lib/speech";
import { updatePrefs } from "@/lib/learnerPrefs";
import { levelPathFromCode } from "@/lib/learnerPlan";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Advanced",
  C1: "Mastery",
  C2: "Professional & Academic",
};

function saveProgress(answers: PlacementAnswers | null) {
  if (answers) void writeJSON(PLACEMENT_PROGRESS_KEY, { version: 2, answers, updatedAt: Date.now() });
  else void AsyncStorage.removeItem(PLACEMENT_PROGRESS_KEY).catch(() => {});
}

// Mobile port of the website's placement test (PlacementTestRunner): the
// same two-stage adaptive test and scoring (src/lib/placementTest.ts,
// synced from the website), one question at a time with progress saved
// after every answer, then a results screen that recommends a level and
// links every missed question to the lesson that teaches it.
export default function PlacementTestScreen({ navigation }: Props) {
  const [answers, setAnswers] = useState<PlacementAnswers>({});
  const [saved, setSaved] = useState<PlacementAnswers | null>(null);
  const [started, setStarted] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    let live = true;
    void readJSON<unknown>(PLACEMENT_PROGRESS_KEY, null).then((raw) => {
      if (live) setSaved(normalizePlacementProgress(raw)?.answers ?? null);
    });
    return () => {
      live = false;
    };
  }, []);

  const current = useMemo(() => {
    const withoutPending = pendingId ? Object.fromEntries(Object.entries(answers).filter(([id]) => id !== pendingId)) : answers;
    return nextPlacementQuestion(withoutPending);
  }, [answers, pendingId]);

  function scrollTop() {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  function begin(from: PlacementAnswers) {
    setAnswers(from);
    setPendingId(null);
    setStarted(true);
    setAttempt((n) => n + 1);
    scrollTop();
  }

  function answer(id: string, correct: boolean) {
    const next = { ...answers, [id]: correct };
    setAnswers(next);
    setPendingId(id);
    saveProgress(next);
    return next;
  }

  function finish(final: PlacementAnswers) {
    const score = scorePlacementTest(final);
    const level = levelPathFromCode(score.recommendedLevel);
    if (level) {
      void updatePrefs({
        placement: {
          level,
          correct: score.correct,
          total: score.total,
          masteredEverything: score.masteredEverything,
          takenAt: Date.now(),
        },
      });
    }
    saveProgress(null);
    setSaved(null);
    setPendingId(null);
    setShowResults(true);
    scrollTop();
  }

  function goNext() {
    setPendingId(null);
    if (!nextPlacementQuestion(answers)) finish(answers);
    else scrollTop();
  }

  function retake() {
    saveProgress(null);
    setSaved(null);
    setAnswers({});
    setPendingId(null);
    setShowResults(false);
    setStarted(false);
    scrollTop();
  }

  if (showResults) {
    const result = scorePlacementTest(answers);
    const missed = getMissedQuestions(answers);
    return (
      <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={s.content}>
        <Text style={s.title}>Your results</Text>
        <Text style={s.body}>
          {result.correct} of {result.total} correct.
        </Text>

        <View style={s.card}>
          <Text style={s.cardKicker}>We recommend starting at</Text>
          <Text style={s.cardLevel}>{LEVEL_NAME[result.recommendedLevel]}</Text>
          <Text style={s.cardBody}>
            {result.masteredEverything
              ? "You passed every level, up to Professional & Academic. Those lessons -- legal and medical Spanish, idioms, rhetoric and academic writing -- are there to polish the details."
              : "That's the first level where gaps started showing up. Each level builds on the one before it, so starting there is what closes those gaps."}
          </Text>
          <Pressable
            style={s.bigBtn}
            onPress={() => {
              const level = levelPathFromCode(result.recommendedLevel);
              if (level) void updatePrefs({ startLevel: level });
              navigation.navigate("LessonList", { moduleKey: LEVEL_KEY[result.recommendedLevel] });
            }}
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
              {r.passed ? " ✓" : r.status === "gaps" ? " · gaps" : ""}
            </Text>
          </View>
        ))}
        <Text style={s.progress}>
          The first {ROUTER_QUESTIONS.length} questions covered every level; the rest focused on {result.band[0]} and{" "}
          {result.band[1]}.
        </Text>

        {missed.length > 0 && (
          <>
            <Text style={s.sectionHeader}>Lessons to revisit ({missed.length})</Text>
            <Text style={s.body}>Every question you missed, with the lesson that teaches it.</Text>
            {missed.map(({ question }) => {
              const lesson = findLessonBySlug(question.relatedLessonSlug);
              return (
                <View key={question.id} style={s.missed}>
                  <TapText
                    text={placementQuestionText(question)}
                    lang={SPANISH_LANG}
                    style={s.missedQuestion}
                  />
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

  if (!started || !current) {
    const savedCount = saved ? Object.keys(saved).length : 0;
    return (
      <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={s.content}>
        <Text style={s.title}>Placement test</Text>
        {/* A true beginner would only be guessing. */}
        <View style={s.skipCard}>
          <Text style={s.skipText}>Starting from zero? Skip the test.</Text>
          <Pressable
            style={s.skipBtn}
            accessibilityRole="button"
            onPress={() => {
              void updatePrefs({ startLevel: "a1" });
              navigation.navigate("LessonList", { moduleKey: "a1" });
            }}
          >
            <Text style={s.skipBtnText}>I&apos;m a total beginner: start from the beginning →</Text>
          </Pressable>
        </View>
        <Text style={s.body}>
          {PLACEMENT_TOTAL} questions, about 10 minutes. The first {ROUTER_QUESTIONS.length} cover every level from
          beginner to mastery; the rest focus on the two levels closest to yours. Some questions are spoken, so turn
          your sound on, and some ask you to type the Spanish.
        </Text>
        <Text style={s.progress}>Your progress is saved as you go, so you can stop and come back later.</Text>
        {saved && savedCount > 0 ? (
          <>
            <Pressable style={s.bigBtn} onPress={() => begin(saved)}>
              <Text style={s.bigBtnText}>
                Resume: question {savedCount + 1} of {PLACEMENT_TOTAL}
              </Text>
            </Pressable>
            <Pressable
              style={s.secondaryBtn}
              onPress={() => {
                saveProgress(null);
                setSaved(null);
                begin({});
              }}
            >
              <Text style={s.secondaryBtnText}>Start over</Text>
            </Pressable>
          </>
        ) : (
          <Pressable style={s.bigBtn} onPress={() => begin({})}>
            <Text style={s.bigBtnText}>Start the test</Text>
          </Pressable>
        )}
      </ScrollView>
    );
  }

  const { question, index, stage } = current;
  const answeredNow = pendingId === question.id;
  return (
    <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <View style={s.topRow}>
        <Text style={s.progressTop}>
          Question {index + 1} of {PLACEMENT_TOTAL} · Part {stage} of 2
        </Text>
        <Pressable onPress={() => navigation.goBack()} hitSlop={8} accessibilityRole="button">
          <Text style={s.exit}>Save and exit</Text>
        </Pressable>
      </View>
      <View style={s.bar}>
        <View style={[s.barFill, { width: `${(index / PLACEMENT_TOTAL) * 100}%` }]} />
      </View>
      {stage === 2 && index === ROUTER_QUESTIONS.length && !answeredNow ? (
        <Text style={s.body}>Part 2: questions around your level.</Text>
      ) : null}

      <View style={s.question}>
        <ExerciseBlock
          key={`${attempt}-${question.id}`}
          exercise={question}
          index={index}
          lang={SPANISH_LANG}
          level={question.level}
          onChecked={(correct) => answer(question.id, correct)}
        />
      </View>

      {answeredNow ? (
        <Pressable style={s.bigBtn} onPress={goNext}>
          <Text style={s.bigBtnText}>{nextPlacementQuestion(answers) ? "Next question" : "See my results"}</Text>
        </Pressable>
      ) : (
        <Pressable
          hitSlop={8}
          onPress={() => {
            const next = answer(question.id, false);
            setPendingId(null);
            if (!nextPlacementQuestion(next)) finish(next);
            else scrollTop();
          }}
        >
          <Text style={s.retake}>I don&apos;t know -- skip</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 48 },
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 10 },
  body: { fontSize: 15, lineHeight: 22, color: "#000000cc", marginBottom: 10 },
  skipCard: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 12,
    padding: 14,
    backgroundColor: "#fff",
    marginBottom: 14,
    gap: 10,
  },
  skipText: { fontSize: 14, color: "#000000cc" },
  skipBtn: { alignSelf: "flex-start", backgroundColor: "#000", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 14 },
  skipBtnText: { color: "#fff", fontSize: 14, fontWeight: "700" },
  progress: { fontSize: 13, color: "#000000aa", marginBottom: 16, marginTop: 4 },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  progressTop: { fontSize: 13, color: "#000000aa" },
  exit: { fontSize: 13, color: "#7A1F1F", fontWeight: "700" },
  bar: { height: 8, borderRadius: 4, backgroundColor: "#0000001a", overflow: "hidden", marginBottom: 18 },
  barFill: { height: 8, backgroundColor: "#7A1F1F" },
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
