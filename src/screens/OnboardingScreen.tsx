import SpanishVarietyPicker from "@/components/SpanishVarietyPicker";
import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, Switch, Alert, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { SPANISH_LEVELS, requiredLessons, type SpanishLevelPath } from "@/lib/lessons/levels";
import { LESSON_SOURCES } from "@/lib/lessons/registry";
import { markLessonsCompletedBulk } from "@/lib/lessons/completion";
import { syncPrefs, updatePrefs } from "@/lib/learnerPrefs";
import {
  DAILY_GOAL_LABELS,
  DAILY_GOAL_OPTIONS,
  DEFAULT_DAILY_GOAL,
  levelsBelow,
  type DailyGoalMinutes,
} from "@/lib/learnerPlan";

type Props = NativeStackScreenProps<AppStackParamList, "Onboarding">;

// First-run setup, opened from Home: a starting level (optionally marking
// the earlier levels as known) and a daily goal. Saved to the learner
// prefs, which the website's own setup (/welcome) shares through the
// account -- someone who set up on the website never sees this.
export default function OnboardingScreen({ navigation }: Props) {
  const [step, setStep] = useState<"level" | "goal">("level");
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
    navigation.goBack();
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.stepLabel}>Step {step === "level" ? 1 : 2} of 2</Text>

      {step === "level" ? (
        <>
          <Text style={s.title}>Where should you start?</Text>
          <Text style={s.sub}>
            Pick a starting level. You can take the placement test on the website any time, and change this later.
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
            <Pressable onPress={() => finish(true)} disabled={saving} hitSlop={8}>
              <Text style={s.skip}>Skip setup</Text>
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
  varietyHeading: { fontSize: 17, fontWeight: "700", color: "#000", marginTop: 20, marginBottom: 6 },
  varietyBody: { fontSize: 14, color: "#00000099", marginBottom: 10 },
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 24, paddingBottom: 48 },
  stepLabel: { fontSize: 12, fontWeight: "700", color: "#00000066", textTransform: "uppercase", marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#000" },
  sub: { fontSize: 14, color: "#00000099", marginTop: 6, marginBottom: 18, lineHeight: 20 },
  list: { gap: 10 },
  option: { borderWidth: 1, borderColor: "#00000018", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  optionActive: { backgroundColor: "#7A1F1F", borderColor: "#7A1F1F" },
  optionTitle: { fontSize: 16, fontWeight: "700", color: "#000" },
  optionTitleActive: { color: "#fff" },
  optionBody: { fontSize: 13, color: "#00000099", marginTop: 3, lineHeight: 18 },
  optionBodyActive: { color: "#ffffffcc" },
  knownRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 16,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#00000018",
    backgroundColor: "#fff",
  },
  knownText: { flex: 1 },
  knownTitle: { fontSize: 14, fontWeight: "700", color: "#000" },
  goalGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  goal: {
    flexGrow: 1,
    flexBasis: "30%",
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 12,
    backgroundColor: "#fff",
  },
  goalMinutes: { fontSize: 20, fontWeight: "800", color: "#000" },
  footer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 24 },
  skip: { fontSize: 14, color: "#00000099", fontWeight: "600" },
  primary: {
    backgroundColor: "#7A1F1F",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 110,
    alignItems: "center",
  },
  primaryText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  disabled: { opacity: 0.4 },
});
