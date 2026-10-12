import { useCallback, useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { getExam } from "@/lib/exams";
import { GROUP_PASS, GROUP_POINTS, PAPER_POINTS, examResult, formatMinutes, paperItems, passMarkExplanation } from "@/lib/exams/scoring";
import { loadExamScores } from "@/lib/examProgress";
import { PAPER_MIN, PASS_POINTS, TOTAL_POINTS, delfPassMarkExplanation, delfResult } from "@/lib/exams/fr/scoring";
import {
  MODULE_PASS,
  PASS_POINTS as GOETHE_PASS_POINTS,
  TOTAL_POINTS as GOETHE_TOTAL_POINTS,
  goetheGrade,
  goethePassMarkExplanation,
  goetheResult,
} from "@/lib/exams/de/scoring";
import { useCourseExams } from "@/components/exams/useCourseExams";
import TapText from "@/components/TapText";
import { GERMAN_LANG } from "@/lib/speech";
import type { Exam } from "@/lib/exams/types";

type Props = NativeStackScreenProps<AppStackParamList, "Exam">;

const BRAND = "#7A1F1F";
const KIND_LABEL = { reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking" } as const;

// Mobile port of the website's /exams/[slug] page: the four papers, how
// the real exam is marked, and the learner's latest scores on this device
// with the group totals and the pass verdict.
export default function ExamScreen(props: Props) {
  const course = props.route.params.course;
  if (course === "fr") return <FrenchExamScreen {...props} />;
  if (course === "de") return <GermanExamScreen {...props} />;
  return <SpanishExamScreen {...props} />;
}

// A Goethe-Zertifikat practice exam (the website's /lessons/de/tools/goethe/[slug]):
// the four modules, how the real exam is marked -- 60 % to pass, of the
// whole exam at A1 and A2 and of every module from B1 -- and the latest
// scores with the Goethe-Institut grade.
function GermanExamScreen({ navigation, route }: Props) {
  const exams = useCourseExams("de");
  const exam: Exam | undefined = exams?.find((e) => e.slug === route.params.slug);
  const [scores, setScores] = useState<Record<string, number | undefined>>({});

  useFocusEffect(
    useCallback(() => {
      if (exam) void loadExamScores(exam.slug).then(setScores);
    }, [exam])
  );

  if (!exams) {
    return (
      <View style={[s.screen, s.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!exam) {
    return (
      <View style={s.screen}>
        <Text style={[s.intro, { padding: 20 }]}>This exam isn&apos;t available.</Text>
      </View>
    );
  }

  const result = goetheResult(exam, scores);
  const anyScore = Object.keys(scores).length > 0;
  const failed = result.papers.filter((p) => p.points !== null && !p.passed);
  const verdict = result.modular
    ? result.complete
      ? result.passed
        ? "Pass: all four modules, the full certificate."
        : `Not yet: you need ${MODULE_PASS}/${PAPER_POINTS} (60 %) in each module. Passed modules count on their own.`
      : failed.length
        ? `Not yet in ${failed.map((p) => p.paper.title).join(", ")}: each module needs ${MODULE_PASS}/${PAPER_POINTS} (60 %).`
        : "Finish all four modules for a full verdict; each module is passed on its own."
    : result.complete
      ? result.passed
        ? `Pass (${goetheGrade(result.points)}): you'd get this certificate.`
        : `Not yet: you need ${GOETHE_PASS_POINTS} of the ${GOETHE_TOTAL_POINTS} points.`
      : "Finish all four parts for a verdict.";

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.h1}>{exam.title}</Text>
      <TapText text={exam.description} lang={GERMAN_LANG} mode="mixed" style={s.intro} />

      {exam.papers.map((paper, i) => {
        const items = paperItems(paper).length;
        const points = scores[paper.id];
        return (
          <Pressable
            key={paper.id}
            style={s.card}
            onPress={() => navigation.navigate("ExamPaper", { slug: exam.slug, paperId: paper.id, course: "de" })}
          >
            <Text style={s.overline}>
              MODUL {i + 1} · {KIND_LABEL[paper.kind].toUpperCase()}
            </Text>
            <Text style={s.title}>{paper.title}</Text>
            <Text style={s.meta}>
              {formatMinutes(paper.minutes)}
              {paper.prepMinutes ? ` + ${paper.prepMinutes} min to prepare` : ""} · {paper.tasks.length} part
              {paper.tasks.length === 1 ? "" : "s"}
              {items ? ` · ${items} questions` : ""}
            </Text>
            {points !== undefined ? (
              <Text style={s.score}>
                Last attempt: {points}/{PAPER_POINTS}
              </Text>
            ) : null}
          </Pressable>
        );
      })}

      {anyScore ? (
        <View style={s.card}>
          <Text style={s.h2}>Your results</Text>
          {!result.modular ? (
            <Text style={s.body}>
              Total: {result.points}/{GOETHE_TOTAL_POINTS}
            </Text>
          ) : null}
          {result.papers.map(({ paper, points, passed }) => (
            <Text key={paper.id} style={s.body}>
              <TapText text={paper.title} lang={GERMAN_LANG} mode="target" style={s.body} />:{" "}
              {points === null ? "not done yet" : `${points}/${PAPER_POINTS}`}
              {result.modular && points !== null ? (
                <Text style={{ color: passed ? "#15803d" : "#b91c1c" }}>
                  {" "}
                  · {Math.round(points * 4)}/100,{" "}
                  <TapText text={goetheGrade(Math.round(points * 4))} lang={GERMAN_LANG} mode="target" />
                </Text>
              ) : null}
            </Text>
          ))}
          <TapText text={verdict} lang={GERMAN_LANG} mode="mixed" style={[s.body, s.bold]} />
        </View>
      ) : null}

      <Text style={s.h2}>How it&apos;s marked</Text>
      <TapText text={goethePassMarkExplanation(exam)} lang={GERMAN_LANG} mode="mixed" style={s.body} />
      <Text style={s.body}>
        Here, <TapText text="Lesen" lang={GERMAN_LANG} mode="target" /> and{" "}
        <TapText text="Hören" lang={GERMAN_LANG} mode="target" /> are marked automatically.{" "}
        <TapText text="Schreiben" lang={GERMAN_LANG} mode="target" /> and{" "}
        <TapText text="Sprechen" lang={GERMAN_LANG} mode="target" /> tasks get a mark from 1 to 5 -- from the writing
        feedback when it&apos;s available, otherwise your own honest comparison with the model answer -- and 3 out of 5 is
        roughly what a pass looks like. Scores are saved on this device.
      </Text>
    </ScrollView>
  );
}

// A DELF/DALF practice exam (the website's /lessons/fr/tools/delf/[slug]):
// the papers ("épreuves"), how the real exam is marked -- every paper out of
// 25, 50 of 100 to pass with at least 5 in each -- and the latest scores.
function FrenchExamScreen({ navigation, route }: Props) {
  const exams = useCourseExams("fr");
  const exam: Exam | undefined = exams?.find((e) => e.slug === route.params.slug);
  const [scores, setScores] = useState<Record<string, number | undefined>>({});

  useFocusEffect(
    useCallback(() => {
      if (exam) void loadExamScores(exam.slug).then(setScores);
    }, [exam])
  );

  if (!exams) {
    return (
      <View style={[s.screen, s.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!exam) {
    return (
      <View style={s.screen}>
        <Text style={[s.intro, { padding: 20 }]}>This exam isn&apos;t available.</Text>
      </View>
    );
  }

  const result = delfResult(exam, scores);
  const anyScore = Object.keys(scores).length > 0;

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.h1}>{exam.title}</Text>
      <Text style={s.intro}>{exam.description}</Text>

      {exam.papers.map((paper, i) => {
        const items = paperItems(paper).length;
        const points = scores[paper.id];
        return (
          <Pressable
            key={paper.id}
            style={s.card}
            onPress={() => navigation.navigate("ExamPaper", { slug: exam.slug, paperId: paper.id, course: "fr" })}
          >
            <Text style={s.overline}>
              ÉPREUVE {i + 1} · {KIND_LABEL[paper.kind].toUpperCase()}
            </Text>
            <Text style={s.title}>{paper.title}</Text>
            <Text style={s.meta}>
              {formatMinutes(paper.minutes)}
              {paper.prepMinutes ? ` + ${paper.prepMinutes} min to prepare` : ""} · {paper.tasks.length} task
              {paper.tasks.length === 1 ? "" : "s"}
              {items ? ` · ${items} questions` : ""}
            </Text>
            {points !== undefined ? (
              <Text style={s.score}>
                Last attempt: {points}/{PAPER_POINTS}
              </Text>
            ) : null}
          </Pressable>
        );
      })}

      {anyScore ? (
        <View style={s.card}>
          <Text style={s.h2}>Your results</Text>
          <Text style={s.body}>
            {result.points}/{TOTAL_POINTS} points
            {result.papers.some((p) => p.belowMinimum) ? ` · a paper below ${PAPER_MIN}` : ""}
          </Text>
          <Text style={[s.body, s.bold]}>
            {result.complete
              ? result.passed
                ? "Admis: you'd pass this exam."
                : `Not yet: you need ${PASS_POINTS} of ${TOTAL_POINTS} points and at least ${PAPER_MIN} in every paper.`
              : "Finish every paper for a verdict."}
          </Text>
        </View>
      ) : null}

      <Text style={s.h2}>How it&apos;s marked</Text>
      <Text style={s.body}>{delfPassMarkExplanation(exam)}</Text>
      <Text style={s.body}>
        Here, listening and reading are marked automatically. Writing and speaking tasks get a mark from 1 to 5 -- from
        the writing feedback when it&apos;s available, otherwise your own honest comparison with the model answer -- and
        3 out of 5 is roughly what a pass looks like. Scores are saved on this device.
      </Text>
    </ScrollView>
  );
}

function SpanishExamScreen({ navigation, route }: Props) {
  const exam = getExam(route.params.slug);
  const [scores, setScores] = useState<Record<string, number | undefined>>({});

  useFocusEffect(
    useCallback(() => {
      if (exam) void loadExamScores(exam.slug).then(setScores);
    }, [exam])
  );

  if (!exam) {
    return (
      <View style={s.screen}>
        <Text style={[s.intro, { padding: 20 }]}>This exam isn&apos;t available.</Text>
      </View>
    );
  }

  const result = examResult(exam, scores);
  const anyScore = Object.keys(scores).length > 0;

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.h1}>{exam.title}</Text>
      <Text style={s.intro}>{exam.description}</Text>

      {exam.papers.map((paper, i) => {
        const items = paperItems(paper).length;
        const points = scores[paper.id];
        return (
          <Pressable key={paper.id} style={s.card} onPress={() => navigation.navigate("ExamPaper", { slug: exam.slug, paperId: paper.id })}>
            <Text style={s.overline}>
              PRUEBA {i + 1} · {KIND_LABEL[paper.kind].toUpperCase()} · GROUP {paper.group}
            </Text>
            <Text style={s.title}>{paper.title}</Text>
            <Text style={s.meta}>
              {formatMinutes(paper.minutes)}
              {paper.prepMinutes ? ` + ${paper.prepMinutes} min to prepare` : ""} · {paper.tasks.length} tasks
              {items ? ` · ${items} questions` : ""}
            </Text>
            {points !== undefined ? (
              <Text style={s.score}>
                Last attempt: {points}/{PAPER_POINTS}
              </Text>
            ) : null}
          </Pressable>
        );
      })}

      {anyScore ? (
        <View style={s.card}>
          <Text style={s.h2}>Your results</Text>
          {result.groups.map((g) => (
            <Text key={g.group} style={s.body}>
              Group {g.group}: {g.points}/{GROUP_POINTS}
              {g.complete ? (g.passed ? " · pass" : ` · below ${GROUP_PASS}`) : " · not finished"}
            </Text>
          ))}
          <Text style={[s.body, s.bold]}>
            {result.complete
              ? result.passed
                ? "APTO: you'd pass this exam."
                : `NO APTO yet: you need ${GROUP_PASS} points in each group.`
              : "Finish all four papers for a verdict."}
          </Text>
        </View>
      ) : null}

      <Text style={s.h2}>How it&apos;s marked</Text>
      <Text style={s.body}>{passMarkExplanation(exam)}</Text>
      <Text style={s.body}>
        Here, reading and listening are marked automatically. Writing and speaking tasks get a mark from 1 to 5 -- from
        the writing feedback when it&apos;s available, otherwise your own honest comparison with the model answer -- and
        3 out of 5 is roughly what a pass looks like. Scores are saved on this device.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  loading: { alignItems: "center", justifyContent: "center" },
  content: { padding: 20, gap: 14, paddingBottom: 40 },
  h1: { fontSize: 22, fontWeight: "700", color: "#000" },
  h2: { fontSize: 17, fontWeight: "700", color: "#000", marginTop: 6 },
  intro: { fontSize: 14, color: "#00000099", lineHeight: 20 },
  body: { fontSize: 14, color: "#000000cc", lineHeight: 20 },
  bold: { fontWeight: "700", color: "#000" },
  card: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#00000014", padding: 16, gap: 4 },
  overline: { fontSize: 11, letterSpacing: 0.8, color: "#00000066" },
  title: { fontSize: 16, fontWeight: "700", color: "#000" },
  meta: { fontSize: 13, color: "#00000077" },
  score: { fontSize: 13, color: BRAND, fontWeight: "600" },
});
