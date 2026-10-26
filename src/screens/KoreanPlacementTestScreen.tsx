import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import {
  KO_PLACEMENT_FIRST_LESSON,
  KO_PLACEMENT_LEVEL_NAME,
  KO_PLACEMENT_LEVEL_TOPIK,
  KO_PLACEMENT_PROGRESS_KEY,
  KO_PLACEMENT_TOTAL,
  KO_ROUTER_QUESTIONS,
  koMissedQuestions,
  koPlacementQuestionText,
  nextKoPlacementQuestion,
  normalizeKoPlacementProgress,
  scoreKoPlacementTest,
  type KoPlacementAnswers,
  type KoPlacementLevel,
  type KoPlacementLevelResult,
} from "@/lib/ko-placementTest";
import type { KoreanLevelKey } from "@/lib/lessons/korean";
import ExerciseBlock from "@/components/ExerciseBlock";
import TapText from "@/components/TapText";
import { KOREAN_LANG } from "@/lib/speech";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<AppStackParamList, "KoreanPlacement">;

const LEVEL_KEY: Record<KoPlacementLevel, KoreanLevelKey> = {
  Hangul: "hangul",
  A1: "a1",
  A2: "a2",
  B1: "b1",
  B2: "b2",
  C1: "c1",
  C2: "c2",
};

const LEVEL_NAME = KO_PLACEMENT_LEVEL_NAME;

/** "Beginner · TOPIK 1"; just "Hangul" for the Hangul module. */
function withTopik(level: KoPlacementLevel): string {
  const topik = KO_PLACEMENT_LEVEL_TOPIK[level];
  return topik ? `${LEVEL_NAME[level]} · ${topik}` : LEVEL_NAME[level];
}

// Same key and shape as the website's KoPlacementTestRunner (version 1).
function saveProgress(answers: KoPlacementAnswers | null) {
  if (answers) void writeJSON(KO_PLACEMENT_PROGRESS_KEY, { version: 1, answers, updatedAt: Date.now() });
  else void AsyncStorage.removeItem(KO_PLACEMENT_PROGRESS_KEY).catch(() => {});
}

function statusText(r: KoPlacementLevelResult): string {
  if (r.status === "gaps") return `${r.correct}/${r.total} · gaps`;
  return r.passed ? `${r.correct}/${r.total} ✓` : `${r.correct}/${r.total}`;
}

// Mobile port of the Korean beta's placement test (the website's
// KoPlacementTestRunner), laid out like PortuguesePlacementTestScreen: the
// same two-stage adaptive test and scoring (src/lib/ko-placementTest.ts,
// synced from the website) from Hangul to Mastery, one question at a time
// with progress saved after every answer, then a results screen that
// recommends a level (by name, with its TOPIK level) and links every missed
// question to its lesson. Typed answers use the phone's Korean keyboard and
// the "ko" grading rules; every Hangul word can be tapped to hear it.
export default function KoreanPlacementTestScreen({ navigation }: Props) {
  const [answers, setAnswers] = useState<KoPlacementAnswers>({});
  const [saved, setSaved] = useState<KoPlacementAnswers | null>(null);
  const [started, setStarted] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    let live = true;
    void readJSON<unknown>(KO_PLACEMENT_PROGRESS_KEY, null).then((raw) => {
      if (live) setSaved(normalizeKoPlacementProgress(raw));
    });
    return () => {
      live = false;
    };
  }, []);

  const current = useMemo(() => {
    const withoutPending = pendingId ? Object.fromEntries(Object.entries(answers).filter(([id]) => id !== pendingId)) : answers;
    return nextKoPlacementQuestion(withoutPending);
  }, [answers, pendingId]);

  function scrollTop() {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  function begin(from: KoPlacementAnswers) {
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

  function finish() {
    saveProgress(null);
    setSaved(null);
    setPendingId(null);
    setShowResults(true);
    scrollTop();
  }

  function goNext() {
    setPendingId(null);
    if (!nextKoPlacementQuestion(answers)) finish();
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
    const result = scoreKoPlacementTest(answers);
    const missed = koMissedQuestions(answers);
    return (
      <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={s.content}>
        <Text style={s.title}>Your results</Text>
        <Text style={s.body}>
          {result.correct} of {result.total} correct.
        </Text>

        <View style={s.card}>
          <Text style={s.cardKicker}>We recommend starting at</Text>
          <Text style={s.cardLevel}>{withTopik(result.recommendedLevel)}</Text>
          <Text style={s.cardBody}>
            {result.masteredEverything
              ? "You passed every level, up to Mastery. Those lessons (literature and classical verse, the dialects, legal, medical and news Korean, humour and wordplay, translation and style) are there to polish the details."
              : result.recommendedLevel === "Hangul"
                ? "Everything in the course is written in Hangul, the Korean alphabet, so learning to read it comes first. It takes a few hours: every letter, how they stack into syllable blocks, how they sound, and typing Korean. Then Beginner follows straight on."
                : "That's the first level where gaps started showing up. Each level builds on the one before it, so starting there is what closes those gaps."}
          </Text>
          <Pressable
            style={s.bigBtn}
            onPress={() =>
              navigation.navigate("LessonRunner", {
                slug: KO_PLACEMENT_FIRST_LESSON[result.recommendedLevel],
                levelPath: `ko/${LEVEL_KEY[result.recommendedLevel]}`,
              })
            }
          >
            <Text style={s.bigBtnText}>Start at {LEVEL_NAME[result.recommendedLevel]}</Text>
          </Pressable>
          <Pressable
            style={s.secondaryBtn}
            onPress={() => navigation.navigate("LessonList", { koreanLevel: LEVEL_KEY[result.recommendedLevel] })}
          >
            <Text style={s.secondaryBtnText}>See the {LEVEL_NAME[result.recommendedLevel]} lessons</Text>
          </Pressable>
          <Pressable style={s.secondaryBtn} onPress={() => navigation.navigate("KoreanLevels")}>
            <Text style={s.secondaryBtnText}>See all levels</Text>
          </Pressable>
        </View>

        <Text style={s.sectionHeader}>Breakdown by level</Text>
        {result.results.map((r) => (
          <View key={r.level} style={s.row}>
            <Text style={s.rowTitle}>{withTopik(r.level)}</Text>
            <Text style={[s.rowScore, r.passed && s.rowScorePassed]}>{statusText(r)}</Text>
          </View>
        ))}
        <Text style={s.progress}>
          The first {KO_ROUTER_QUESTIONS.length} questions checked your Hangul and covered every level; the rest focused on {LEVEL_NAME[result.band[0]]} and{" "}
          {LEVEL_NAME[result.band[1]]}.
        </Text>

        {missed.length > 0 && (
          <>
            <Text style={s.sectionHeader}>Lessons to revisit ({missed.length})</Text>
            <Text style={s.body}>Every question you missed, with the lesson that teaches it.</Text>
            {missed.map((question) => (
              <View key={question.id} style={s.missed}>
                <TapText text={koPlacementQuestionText(question)} lang={KOREAN_LANG} style={s.missedQuestion} />
                <Pressable
                  onPress={() =>
                    navigation.navigate("LessonRunner", {
                      slug: question.relatedLessonSlug,
                      levelPath: `ko/${LEVEL_KEY[question.level]}`,
                    })
                  }
                  hitSlop={6}
                >
                  <Text style={s.missedLink}>{LEVEL_NAME[question.level]} · Review →</Text>
                </Pressable>
              </View>
            ))}
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
        <Text style={s.title}>Korean placement test</Text>
        {/* Someone who can't read Hangul would only be guessing. */}
        <View style={s.skipCard}>
          <Text style={s.skipText}>Can&apos;t read Hangul yet? Skip the test.</Text>
          <Pressable
            style={s.skipBtn}
            accessibilityRole="button"
            onPress={() => navigation.navigate("LessonRunner", { slug: KO_PLACEMENT_FIRST_LESSON.Hangul, levelPath: "ko/hangul" })}
          >
            <Text style={s.skipBtnText}>Start with Hangul →</Text>
          </Pressable>
        </View>
        <Text style={s.body}>
          {KO_PLACEMENT_TOTAL} questions, about 10 minutes. The first {KO_ROUTER_QUESTIONS.length} check that you can read Hangul
          and cover every level from Beginner to Mastery (TOPIK 1 to 6); the rest focus on the two levels closest to yours. Some
          questions are spoken, so turn your sound on, and some ask you to type Korean with your phone&apos;s Korean keyboard. Tap
          any Korean word in a question to hear it.
        </Text>
        <Text style={s.progress}>Your progress is saved as you go, so you can stop and come back later.</Text>
        {saved && savedCount > 0 ? (
          <>
            <Pressable style={s.bigBtn} onPress={() => begin(saved)}>
              <Text style={s.bigBtnText}>
                Resume: question {savedCount + 1} of {KO_PLACEMENT_TOTAL}
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
          Question {index + 1} of {KO_PLACEMENT_TOTAL} · Part {stage} of 2
        </Text>
        <Pressable onPress={() => navigation.goBack()} hitSlop={8} accessibilityRole="button">
          <Text style={s.exit}>Save and exit</Text>
        </Pressable>
      </View>
      <View style={s.bar}>
        <View style={[s.barFill, { width: `${(index / KO_PLACEMENT_TOTAL) * 100}%` }]} />
      </View>
      {stage === 2 && index === KO_ROUTER_QUESTIONS.length && !answeredNow ? (
        <Text style={s.body}>Part 2: questions around your level.</Text>
      ) : null}

      <View style={s.question}>
        <ExerciseBlock
          key={`${attempt}-${question.id}`}
          exercise={question}
          index={index}
          lang={KOREAN_LANG}
          level={`KO-${question.level}`}
          onChecked={(correct) => answer(question.id, correct)}
        />
      </View>

      {answeredNow ? (
        <Pressable style={s.bigBtn} onPress={goNext}>
          <Text style={s.bigBtnText}>{nextKoPlacementQuestion(answers) ? "Next question" : "See my results"}</Text>
        </Pressable>
      ) : (
        <Pressable
          hitSlop={8}
          onPress={() => {
            const next = answer(question.id, false);
            setPendingId(null);
            if (!nextKoPlacementQuestion(next)) finish();
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
  screen: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { padding: 20, paddingBottom: 48 },
  title: { fontSize: 24, fontWeight: "800", color: "#2A1513", marginBottom: 10 },
  body: { fontSize: 15, lineHeight: 22, color: "#2A1513cc", marginBottom: 10 },
  skipCard: {
    borderWidth: 1,
    borderColor: "#2A151318",
    borderRadius: 12,
    padding: 14,
    backgroundColor: "#fff",
    marginBottom: 14,
    gap: 10,
  },
  skipText: { fontSize: 14, color: "#2A1513cc" },
  skipBtn: { alignSelf: "flex-start", backgroundColor: "#2A1513", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 14 },
  skipBtnText: { color: "#fff", fontSize: 14, fontWeight: "700" },
  progress: { fontSize: 13, color: "#2A1513aa", marginBottom: 16, marginTop: 4 },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  progressTop: { fontSize: 13, color: "#2A1513aa" },
  exit: { fontSize: 13, color: "#8B0000", fontWeight: "700" },
  bar: { height: 8, borderRadius: 4, backgroundColor: "#2A15131a", overflow: "hidden", marginBottom: 18 },
  barFill: { height: 8, backgroundColor: "#8B0000" },
  question: { marginBottom: 22 },
  card: {
    borderWidth: 1,
    borderColor: "#2A151325",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
    marginVertical: 12,
  },
  cardKicker: { fontSize: 13, color: "#2A151399" },
  cardLevel: { fontSize: 22, fontWeight: "800", color: "#8B0000", marginVertical: 6 },
  cardBody: { fontSize: 14, lineHeight: 20, color: "#2A1513cc" },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "800",
    color: "#2A151366",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: 18,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#2A151312",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    marginBottom: 6,
  },
  rowTitle: { fontSize: 14, fontWeight: "600", color: "#2A1513" },
  rowScore: { fontSize: 14, color: "#2A151380" },
  rowScorePassed: { color: "#15803d" },
  missed: {
    borderWidth: 1,
    borderColor: "#2A151312",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
    gap: 6,
  },
  missedQuestion: { fontSize: 14, color: "#2A1513cc", lineHeight: 20 },
  missedLink: { fontSize: 13, fontWeight: "700", color: "#8B0000" },
  bigBtn: { backgroundColor: "#8B0000", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: "#8B0000",
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryBtnText: { color: "#8B0000", fontWeight: "700", fontSize: 15 },
  retake: { fontSize: 14, color: "#2A151399", textDecorationLine: "underline" },
});
