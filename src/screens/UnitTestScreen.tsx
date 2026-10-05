import { useMemo, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { findUnit } from "@/lib/lessons/units";
import {
  UNIT_TEST_PASS_PERCENT,
  pickUnitTestQuestions,
  unitTestPassed,
  type UnitTestQuestion,
} from "@/lib/lessons/levels";
import { markLessonCompleted } from "@/lib/lessons/completion";
import ExerciseBlock from "@/components/ExerciseBlock";
import { langForLevelPath } from "@/lib/speech";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { curriculumFor } from "@/lib/lessons/curricula";
import { testOutItems } from "@/lib/curriculum/assess";
import type { Lesson } from "@/lib/lessons/types";

/** A unit from units.ts (Spanish), or a module's assembled units (Chinese). */
function lookUpUnit(levelPath: string, unitId: string): { label: string; required: Lesson[] } | undefined {
  return findUnit(levelPath, unitId) ?? LESSON_SOURCES[levelPath as LessonModuleKey]?.units?.find((u) => u.id === unitId);
}

/** Curriculum-engine courses draw from their tagged item bank, covering
 * every concept the unit teaches; others keep the round-robin pick. */
function pickQuestions(levelPath: string, unitId: string, lessons: Lesson[]): UnitTestQuestion[] {
  const curriculum = curriculumFor(levelPath);
  if (!curriculum) return pickUnitTestQuestions(lessons);
  const numberOf = new Map(lessons.map((l) => [l.slug, l.number]));
  return testOutItems(lessons, curriculum.plugin, `${unitId}-${Date.now()}-${Math.random()}`).map((i) => ({
    exercise: i.exercise,
    lessonSlug: i.lessonSlug,
    lessonNumber: numberOf.get(i.lessonSlug) ?? 0,
  }));
}

type Props = NativeStackScreenProps<AppStackParamList, "UnitTest">;

type Phase = "intro" | "testing" | "saving" | "passed" | "failed";

// "Test out" of a unit (see units.ts), reached from LessonList: a short
// quiz drawn from the unit's required lessons (pickUnitTestQuestions,
// shared with the website). At UNIT_TEST_PASS_PERCENT or better every
// required lesson in the unit is marked complete through the same
// markLessonCompleted a finished lesson uses, so the website sees it too.
export default function UnitTestScreen({ route, navigation }: Props) {
  const { levelPath, unitId } = route.params;
  const unit = useMemo(() => lookUpUnit(levelPath, unitId), [levelPath, unitId]);
  const lang = langForLevelPath(levelPath);

  const [phase, setPhase] = useState<Phase>("intro");
  const [attempt, setAttempt] = useState(0);
  const questions = useMemo<UnitTestQuestion[]>(
    () => (unit ? pickQuestions(levelPath, unitId, unit.required) : []),
    // A fresh draw for every attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [unit, attempt]
  );
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const correctRef = useRef(0);

  if (!unit) {
    return (
      <View style={s.screen}>
        <Text style={s.body}>This unit couldn't be found.</Text>
      </View>
    );
  }
  const total = questions.length;
  const percent = total ? Math.round((correctCount / total) * 100) : 0;

  function start() {
    correctRef.current = 0;
    setCorrectCount(0);
    setIndex(0);
    setChecked(false);
    setPhase("testing");
  }

  async function finish() {
    if (!unit) return;
    if (!unitTestPassed(correctRef.current, total)) {
      setPhase("failed");
      return;
    }
    setPhase("saving");
    // One at a time: each call reads and rewrites the same stored map.
    for (const lesson of unit.required) await markLessonCompleted(levelPath, lesson.slug, lesson.number);
    setPhase("passed");
  }

  function next() {
    if (index + 1 >= total) {
      void finish();
      return;
    }
    setIndex((i) => i + 1);
    setChecked(false);
  }

  const current = questions[index];

  return (
    <View style={s.screen}>
      <ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
        {phase === "intro" && (
          <View>
            <Text style={s.kicker}>Test out</Text>
            <Text style={s.title}>{unit.label}</Text>
            <Text style={s.body}>
              {total} questions from this unit's lessons. Get {UNIT_TEST_PASS_PERCENT}% right and all{" "}
              {unit.required.length} required lessons in the unit are marked complete.
            </Text>
            <Pressable style={s.bigBtn} onPress={start} disabled={total === 0}>
              <Text style={s.bigBtnText}>{total === 0 ? "No questions in this unit" : "Start"}</Text>
            </Pressable>
          </View>
        )}

        {phase === "testing" && current && (
          <View>
            <Text style={s.badge}>
              Question {index + 1} of {total}
            </Text>
            <ExerciseBlock
              key={`${attempt}-${index}`}
              exercise={current.exercise}
              index={index}
              hideIndexLabel
              lang={lang}
              onChecked={(correct) => {
                if (correct) {
                  correctRef.current += 1;
                  setCorrectCount(correctRef.current);
                }
                setChecked(true);
              }}
            />
            {checked && (
              <Pressable style={s.bigBtn} onPress={next}>
                <Text style={s.bigBtnText}>{index + 1 >= total ? "See result" : "Next question"}</Text>
              </Pressable>
            )}
          </View>
        )}

        {phase === "saving" && <Text style={s.body}>Saving…</Text>}

        {phase === "passed" && (
          <View style={s.center}>
            <Text style={s.title}>Passed with {percent}%</Text>
            <Text style={s.body}>{unit.label} is complete. On to the next unit!</Text>
            <Pressable style={s.bigBtn} onPress={() => navigation.goBack()}>
              <Text style={s.bigBtnText}>Back to lessons</Text>
            </Pressable>
          </View>
        )}

        {phase === "failed" && (
          <View style={s.center}>
            <Text style={s.title}>{percent}%: not quite</Text>
            <Text style={s.body}>
              You need {UNIT_TEST_PASS_PERCENT}% to test out. Work through the lessons, or try a new set of questions.
            </Text>
            <Pressable
              style={s.bigBtn}
              onPress={() => {
                setAttempt((a) => a + 1);
                start();
              }}
            >
              <Text style={s.bigBtnText}>Try again</Text>
            </Pressable>
            <Pressable style={s.linkBtn} onPress={() => navigation.goBack()}>
              <Text style={s.linkBtnText}>Back to lessons</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 40 },
  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#7A1F1F", marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 10 },
  body: { fontSize: 15, lineHeight: 22, color: "#000000cc", marginBottom: 10 },
  badge: { fontSize: 12, color: "#00000066", textTransform: "uppercase", marginBottom: 4, fontWeight: "600" },
  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 18 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  linkBtn: { paddingVertical: 14, alignItems: "center" },
  linkBtnText: { color: "#7A1F1F", fontWeight: "600", fontSize: 15 },
  center: { alignItems: "stretch", paddingTop: 30 },
});
