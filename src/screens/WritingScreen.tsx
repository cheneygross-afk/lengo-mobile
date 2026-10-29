import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import TapText from "@/components/TapText";
import { loadKoWriting, type KoWritingLevel } from "@/lib/ko-tools/data";
import { loadItWriting } from "@/lib/it-tools/data";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { Write } from "@/components/SkillExercises";
import PlanLock from "@/components/PlanLock";
import { planCovers, useAuth } from "@/lib/auth/AuthContext";
import type { SpeechLang } from "@/lib/speech";
import type { WriteExercise } from "@/lib/lessons/types";
import { longPrompts, longRange, type PromptLevel } from "@/lib/writingPrompts";

type Props = NativeStackScreenProps<AppStackParamList, "Writing">;
type Lang = "es" | "fr" | "de" | "pt" | "ja" | "zh" | "ko" | "it";

// Writing practice: the website's Writing page (/writing,
// /lessons/<course>/tools/writing) for the app. Open writing tasks for
// each level, from a few sentences to a couple of pages, marked by the AI
// writing feedback. src/lib/writingPrompts.ts is a copy of the website's
// file. Spanish, French, German, Portuguese and Korean need a plan, like
// on the website (planCovers); the Italian beta is open to its accounts
// (and RootNavigator's withItalianBeta turns everyone else away).
const COURSE: Record<Lang, { name: string; speech: SpeechLang; prefix: string }> = {
  es: { name: "Spanish", speech: "es-ES", prefix: "" },
  fr: { name: "French", speech: "fr-FR", prefix: "FR-" },
  de: { name: "German", speech: "de-DE", prefix: "DE-" },
  pt: { name: "Portuguese", speech: "pt-BR", prefix: "PT-" },
  ja: { name: "Japanese", speech: "ja-JP", prefix: "JA-" },
  zh: { name: "Chinese", speech: "zh-CN", prefix: "ZH-" },
  ko: { name: "Korean", speech: "ko-KR", prefix: "KO-" },
  it: { name: "Italian", speech: "it-IT", prefix: "IT-" },
};

const LEVELS: { level: PromptLevel; label: string }[] = [
  { level: "a1", label: "Beginner" },
  { level: "a2", label: "Elementary" },
  { level: "b1", label: "Intermediate" },
  { level: "b2", label: "Upper-intermediate" },
  { level: "c1", label: "Advanced" },
  { level: "c2", label: "Mastery" },
];

export default function WritingScreen(props: Props) {
  const lang = props.route.params?.lang;
  const { lessonsCourses } = useAuth();
  if (lang === "ko" && !planCovers(lessonsCourses, "ko")) return <PlanLock course="ko" kind="tool" />;
  if (lang === "ko" || lang === "it") return <BetaWriting {...props} course={lang} key={lang} />;
  return <CourseWriting {...props} />;
}

function CourseWriting({ route, navigation }: Props) {
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

// The Korean course's and the Italian beta's writing practice (the website's
// /lessons/ko/tools/writing and /lessons/it/tools/writing): the open tasks
// every course shares, by level (Beginner ... Mastery), and every writing
// task from the course's lessons, unit by unit, Culture included
// (src/lib/ko-tools/data/writing.json, src/lib/it-tools/data/writing.json,
// loaded when the screen opens; the two have the same shape). Marked by the
// AI writing feedback at the "KO-" / "IT-" level; the course language in a
// task is tap-to-hear.
type KoChoice = PromptLevel | "culture";

const KO_LEVELS: { level: KoChoice; label: string }[] = [
  ...LEVELS.map((l) => ({ level: l.level as KoChoice, label: l.label })),
  { level: "culture", label: "Culture" },
];

const BETA_WRITING: Record<"ko" | "it", { load: () => Promise<KoWritingLevel[]>; keyboard: string }> = {
  ko: { load: loadKoWriting, keyboard: "Your phone's Korean keyboard is all you need." },
  it: { load: loadItWriting, keyboard: "Accents count: hold a vowel on your keyboard for à, è, é, ì, ò, ù." },
};

function BetaWriting({ navigation, course: lang }: Props & { course: "ko" | "it" }) {
  const course = COURSE[lang];
  const speech = course.speech;
  const [level, setLevel] = useState<KoChoice>("a1");
  const [lessonTasks, setLessonTasks] = useState<KoWritingLevel[] | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${course.name} writing` });
  }, [navigation, course.name]);
  useEffect(() => {
    let live = true;
    void BETA_WRITING[lang].load().then((l) => live && setLessonTasks(l));
    return () => {
      live = false;
    };
  }, [lang]);

  function pick(id: string | null) {
    setOpen(id);
    setDone(false);
    setAttempt((n) => n + 1);
  }

  const task = (id: string, exercise: WriteExercise, gradeLevel: string, meta: string, heading?: string) => {
    const isOpen = open === id;
    return (
      <View key={id} style={styles.card}>
        <Pressable onPress={() => pick(isOpen ? null : id)}>
          <Text style={styles.meta}>{meta}</Text>
          {heading ? <TapText text={heading} lang={speech} style={styles.cardHeading} /> : null}
          {!isOpen && <TapText text={exercise.prompt} lang={speech} style={styles.cardBody} />}
        </Pressable>
        {isOpen && (
          <View style={{ marginTop: 12 }}>
            <Write key={attempt} exercise={exercise} lang={speech} level={gradeLevel} checked={done} submit={() => setDone(true)} />
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
  };

  const fromLessons = lessonTasks?.find((l) => l.path === level);
  const [minWords, maxWords] = level === "culture" ? [0, 0] : longRange(level, false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.subtitle}>
        Write anything from a few sentences to a couple of pages in {course.name} and get instant feedback: a score, corrections
        with reasons, and a check against what the task asks for. {BETA_WRITING[lang].keyboard}
      </Text>

      <View style={styles.levels}>
        {KO_LEVELS.map((l) => (
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

      {level !== "culture" && (
        <>
          <Text style={styles.section}>Open tasks</Text>
          <View style={styles.list}>
            {longPrompts(level).map((p) =>
              task(
                p.id,
                { type: "write", prompt: p.prompt, rubric: p.rubric, minWords, maxWords, modelAnswer: "", explanation: "" },
                `${course.prefix}${level.toUpperCase()}`,
                `${p.genre} · ${minWords}–${maxWords} words`
              )
            )}
          </View>
        </>
      )}

      <Text style={styles.section}>From the lessons</Text>
      {!lessonTasks ? (
        <ActivityIndicator style={{ marginTop: 12 }} />
      ) : !fromLessons ? (
        <Text style={styles.subtitle}>No writing tasks at this level yet.</Text>
      ) : (
        fromLessons.units.map((u) => (
          <View key={u.label} style={{ marginBottom: 14 }}>
            <TapText text={u.label} lang={speech} style={styles.unit} />
            <View style={styles.list}>
              {u.tasks.map((t) =>
                task(t.id, t.exercise, t.gradeLevel, `${t.exercise.minWords}–${t.exercise.maxWords} words`, t.heading)
              )}
            </View>
          </View>
        ))
      )}
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
  section: { fontSize: 13, fontWeight: "800", color: "#2A151366", letterSpacing: 0.5, textTransform: "uppercase", marginTop: 8, marginBottom: 10 },
  unit: { fontSize: 15, fontWeight: "700", color: "#2A1513", marginBottom: 8 },
  cardHeading: { fontSize: 15, fontWeight: "700", color: "#2A1513", marginBottom: 4 },
});
