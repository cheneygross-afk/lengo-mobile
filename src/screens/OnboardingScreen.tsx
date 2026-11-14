import SpanishVarietyPicker from "@/components/SpanishVarietyPicker";
import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, Switch, Alert, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { SPANISH_LEVELS, requiredLessons, type SpanishLevelPath } from "@/lib/lessons/levels";
import { LESSON_SOURCES } from "@/lib/lessons/registry";
import { getCompletedMap, markLessonsCompletedBulk } from "@/lib/lessons/completion";
import ExerciseBlock from "@/components/ExerciseBlock";
import { PLACEMENT_LEVELS, ROUTER_QUESTIONS } from "@/lib/placementTest";
import { trackEvent } from "@/lib/analytics";
import { syncPrefs, updatePrefs } from "@/lib/learnerPrefs";
import {
  DAILY_GOAL_LABELS,
  DAILY_GOAL_OPTIONS,
  DEFAULT_DAILY_GOAL,
  levelsBelow,
  type DailyGoalMinutes,
} from "@/lib/learnerPlan";

type Props = NativeStackScreenProps<AppStackParamList, "Onboarding">;

// First-run setup, opened from Home, as on the website's /welcome: "Have
// you learned any Spanish before?" Brand new goes straight into A1 lesson
// 1; "some" answers a quick level check (one question per level, stopping
// at the first miss) and starts at that level; DELE takers go to the mock
// exams. Picking a level and a daily goal by hand is still there. Saved to
// the learner prefs, which the website shares through the account.

// One router question per level, easiest first (placementTest.ts).
const LADDER = PLACEMENT_LEVELS.map((lv) => ROUTER_QUESTIONS.find((q) => q.level === lv)).filter(
  (q): q is (typeof ROUTER_QUESTIONS)[number] => !!q
);

// The first lesson of a level not done yet (lesson 1 for a new learner).
async function firstLessonSlug(levelPath: SpanishLevelPath): Promise<string | null> {
  const lessons = requiredLessons(LESSON_SOURCES[levelPath].lessons);
  const done = await getCompletedMap(levelPath).catch(() => ({}) as Record<string, boolean>);
  return (lessons.find((l) => !done[l.slug]) ?? lessons[0])?.slug ?? null;
}

export default function OnboardingScreen({ navigation }: Props) {
  const [step, setStep] = useState<"start" | "check" | "level" | "goal">("start");
  // Quick check: question index, the answer to it, and the level found.
  const [checkAt, setCheckAt] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState<boolean | null>(null);
  const [found, setFound] = useState<{ level: SpanishLevelPath; right: number; asked: number } | null>(null);
  const [level, setLevel] = useState<SpanishLevelPath | null>(null);
  const [markKnown, setMarkKnown] = useState(false);
  const [goal, setGoal] = useState<DailyGoalMinutes>(DEFAULT_DAILY_GOAL);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void syncPrefs().then((p) => {
      if (cancelled) return;
      setLevel(p.startLevel ?? p.placement?.level ?? null);
      setGoal(p.dailyGoalMinutes);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const earlier = level ? levelsBelow(level) : [];
  const earlierLessons = earlier.map((lp) => ({
    levelPath: lp,
    lessons: requiredLessons(LESSON_SOURCES[lp].lessons).map((l) => ({ slug: l.slug, number: l.number })),
  }));
  const earlierCount = earlierLessons.reduce((n, l) => n + l.lessons.length, 0);
  const earlierNames = earlier.map((lp) => lp.toUpperCase()).join(", ");

  function continueFromLevel() {
    if (!level) return;
    if (markKnown && earlierCount > 0) {
      Alert.alert(
        "Mark earlier levels as known?",
        `This marks all ${earlierCount} required lessons in ${earlierNames} as complete. You can still open and redo any of them later.`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Mark as known", onPress: () => setStep("goal") },
        ]
      );
      return;
    }
    setStep("goal");
  }

  async function finish(skip = false) {
    if (saving) return;
    setSaving(true);
    if (skip) {
      await updatePrefs({ onboardedAt: Date.now() });
    } else {
      await updatePrefs({ startLevel: level, dailyGoalMinutes: goal, onboardedAt: Date.now() });
      if (level && markKnown) {
        for (const l of earlierLessons) await markLessonsCompletedBulk(l.levelPath, l.lessons);
      }
    }
    setSaving(false);
    if (skip || !level) return navigation.goBack();
    const slug = await firstLessonSlug(level);
    if (slug) navigation.replace("LessonRunner", { slug });
    else navigation.goBack();
  }

  // Straight into the first lesson at a level (daily goal stays default).
  async function startAt(levelPath: SpanishLevelPath, how: string) {
    if (saving) return;
    setSaving(true);
    trackEvent("onboarding_choice", { choice: how, level: levelPath });
    await updatePrefs({ startLevel: levelPath, onboardedAt: Date.now() });
    const slug = await firstLessonSlug(levelPath);
    setSaving(false);
    if (slug) navigation.replace("LessonRunner", { slug });
    else navigation.goBack();
  }

  async function startExams() {
    if (saving) return;
    setSaving(true);
    trackEvent("onboarding_choice", { choice: "exam" });
    await updatePrefs({ onboardedAt: Date.now() });
    setSaving(false);
    navigation.replace("Exams");
  }

  function nextCheck() {
    const q = LADDER[checkAt];
    if (!q || checkAnswer === null) return;
    const right = checkAnswer ? checkAt + 1 : checkAt;
    if (!checkAnswer || checkAt === LADDER.length - 1) {
      const code = checkAnswer ? "C2" : q.level;
      trackEvent("quick_check_completed", { level: code, right, asked: checkAt + 1 });
      setFound({ level: code.toLowerCase() as SpanishLevelPath, right, asked: checkAt + 1 });
      return;
    }
    setCheckAnswer(null);
    setCheckAt((i) => i + 1);
  }

  if (step === "start" || step === "check") {
    const q = LADDER[checkAt];
    return (
      <ScrollView style={s.container} contentContainerStyle={s.content}>
        {step === "start" ? (
          <>
            <Text style={s.title}>Have you learned any Spanish before?</Text>
            <Text style={s.sub}>Your first lesson starts right after this. You can change your level any time.</Text>
            <View style={s.list}>
              <Pressable style={[s.option, s.optionActive]} disabled={saving} onPress={() => startAt("a1", "new")}>
                <Text style={[s.optionTitle, s.optionTitleActive]}>No, I&apos;m brand new</Text>
                <Text style={[s.optionBody, s.optionBodyActive]}>
                  Start lesson 1 now: you&apos;ll introduce yourself in Spanish within a few minutes.
                </Text>
              </Pressable>
              <Pressable style={s.option} disabled={saving} onPress={() => setStep("check")}>
                <Text style={s.optionTitle}>Yes, some</Text>
                <Text style={s.optionBody}>Answer up to 6 quick questions (about 2 minutes) and start at your level.</Text>
              </Pressable>
              <Pressable style={s.option} disabled={saving} onPress={startExams}>
                <Text style={s.optionTitle}>I&apos;m preparing for a DELE exam</Text>
                <Text style={s.optionBody}>Go straight to the full mock exams, with lessons to back them up.</Text>
              </Pressable>
            </View>
            <View style={s.footer}>
              <Pressable onPress={() => finish(true)} disabled={saving} hitSlop={8}>
                <Text style={s.skip}>Skip setup</Text>
              </Pressable>
              <Pressable onPress={() => setStep("level")} disabled={saving} hitSlop={8}>
                <Text style={s.skip}>I&apos;ll pick my level</Text>
              </Pressable>
            </View>
            {saving && <ActivityIndicator style={{ marginTop: 16 }} />}
          </>
        ) : found ? (
          <>
            <Text style={s.title}>Start at {SPANISH_LEVELS.find((l) => l.levelPath === found.level)?.label ?? found.level.toUpperCase()}</Text>
            <Text style={s.sub}>
              {found.right > 0 ? `You got ${found.right} of ${found.asked} right, so this` : "This"} is where the course should feel
              challenging but doable. You can switch levels any time.
            </Text>
            <Pressable style={[s.primary, saving && s.disabled]} disabled={saving} onPress={() => startAt(found.level, "quick-check")}>
              {saving ? <ActivityIndicator color="#fff" /> : <Text style={s.primaryText}>Start my first lesson</Text>}
            </Pressable>
            <Pressable
              style={{ marginTop: 16, alignSelf: "center" }}
              hitSlop={8}
              onPress={() => {
                setLevel(found.level);
                setStep("level");
              }}
            >
              <Text style={s.skip}>Pick a different level</Text>
            </Pressable>
          </>
        ) : q ? (
          <>
            <Text style={s.title}>Quick level check</Text>
            <Text style={s.sub}>
              Question {checkAt + 1} of up to {LADDER.length}. It gets harder as you go, so a miss just means we found your level.
            </Text>
            <ExerciseBlock
              key={q.id}
              exercise={q}
              index={checkAt}
              hideIndexLabel
              level={q.level}
              onChecked={(correct) => setCheckAnswer(correct)}
            />
            <View style={s.footer}>
              <Pressable onPress={() => setStep("start")} hitSlop={8}>
                <Text style={s.skip}>Back</Text>
              </Pressable>
              <Pressable style={[s.primary, checkAnswer === null && s.disabled]} onPress={nextCheck} disabled={checkAnswer === null}>
                <Text style={s.primaryText}>Continue</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </ScrollView>
    );
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.stepLabel}>Step {step === "level" ? 1 : 2} of 2</Text>

      {step === "level" ? (
        <>
          <Text style={s.title}>Where should you start?</Text>
          <Text style={s.sub}>
            Pick a starting level. You can change it later.
          </Text>
          <View style={s.list}>
            {SPANISH_LEVELS.map((l) => {
              const active = level === l.levelPath;
              return (
                <Pressable
                  key={l.levelPath}
                  style={[s.option, active && s.optionActive]}
                  onPress={() => {
                    setLevel(l.levelPath);
                    if (l.levelPath === "a1") setMarkKnown(false);
                  }}
                >
                  <Text style={[s.optionTitle, active && s.optionTitleActive]}>{l.label}</Text>
                  <Text style={[s.optionBody, active && s.optionBodyActive]}>{l.description}</Text>
                </Pressable>
              );
            })}
          </View>

          {earlierCount > 0 && (
            <View style={s.knownRow}>
              <View style={s.knownText}>
                <Text style={s.knownTitle}>Mark earlier levels as known</Text>
                <Text style={s.optionBody}>
                  Counts the {earlierCount} required lessons in {earlierNames} as complete.
                </Text>
              </View>
              <Switch value={markKnown} onValueChange={setMarkKnown} />
            </View>
          )}

          <View style={s.footer}>
            <Pressable onPress={() => setStep("start")} disabled={saving} hitSlop={8}>
              <Text style={s.skip}>Back</Text>
            </Pressable>
            <Pressable style={[s.primary, !level && s.disabled]} onPress={continueFromLevel} disabled={!level}>
              <Text style={s.primaryText}>Continue</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          <Text style={s.title}>Set a daily goal</Text>
          <Text style={s.sub}>How much time each day? Lessons and flashcard reviews both count.</Text>
          <View style={s.goalGrid}>
            {DAILY_GOAL_OPTIONS.map((m) => {
              const active = goal === m;
              return (
                <Pressable key={m} style={[s.goal, active && s.optionActive]} onPress={() => setGoal(m)}>
                  <Text style={[s.goalMinutes, active && s.optionTitleActive]}>{m} min</Text>
                  <Text style={[s.optionBody, active && s.optionBodyActive]}>{DAILY_GOAL_LABELS[m]}</Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={s.varietyHeading}>Which Spanish do you want to learn?</Text>
          <Text style={s.varietyBody}>
            This sets the voice you hear. Latin America skips producing vosotros forms, but you'll still learn to recognise them.
          </Text>
          <SpanishVarietyPicker />

          <View style={s.footer}>
            <Pressable onPress={() => setStep("level")} disabled={saving} hitSlop={8}>
              <Text style={s.skip}>Back</Text>
            </Pressable>
            <Pressable style={[s.primary, saving && s.disabled]} onPress={() => finish()} disabled={saving}>
              {saving ? <ActivityIndicator color="#fff" /> : <Text style={s.primaryText}>Finish</Text>}
            </Pressable>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  varietyHeading: { fontSize: 17, fontWeight: "700", color: "#2A1513", marginTop: 20, marginBottom: 6 },
  varietyBody: { fontSize: 14, color: "#2A151399", marginBottom: 10 },
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { padding: 24, paddingBottom: 48 },
  stepLabel: { fontSize: 12, fontWeight: "700", color: "#2A151366", textTransform: "uppercase", marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#2A1513" },
  sub: { fontSize: 14, color: "#2A151399", marginTop: 6, marginBottom: 18, lineHeight: 20 },
  list: { gap: 10 },
  option: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  optionActive: { backgroundColor: "#8B0000", borderColor: "#8B0000" },
  optionTitle: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  optionTitleActive: { color: "#fff" },
  optionBody: { fontSize: 13, color: "#2A151399", marginTop: 3, lineHeight: 18 },
  optionBodyActive: { color: "#ffffffcc" },
  knownRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 16,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2A151318",
    backgroundColor: "#fff",
  },
  knownText: { flex: 1 },
  knownTitle: { fontSize: 14, fontWeight: "700", color: "#2A1513" },
  goalGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  goal: {
    flexGrow: 1,
    flexBasis: "30%",
    borderWidth: 1,
    borderColor: "#2A151318",
    borderRadius: 14,
    padding: 12,
    backgroundColor: "#fff",
  },
  goalMinutes: { fontSize: 20, fontWeight: "800", color: "#2A1513" },
  footer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 24 },
  skip: { fontSize: 14, color: "#2A151399", fontWeight: "600" },
  primary: {
    backgroundColor: "#8B0000",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 110,
    alignItems: "center",
  },
  primaryText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  disabled: { opacity: 0.4 },
});
