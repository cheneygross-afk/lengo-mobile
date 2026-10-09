import { useCallback, useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { getExam } from "@/lib/exams";
import { GROUP_PASS, GROUP_POINTS, PAPER_POINTS, examResult, formatMinutes, paperItems, passMarkExplanation } from "@/lib/exams/scoring";
import { loadExamScores } from "@/lib/examProgress";
import { PAPER_MIN, PASS_POINTS, TOTAL_POINTS, delfPassMarkExplanation, delfResult } from "@/lib/exams/fr/scoring";
import { useCourseExams } from "@/components/exams/useCourseExams";
import type { Exam } from "@/lib/exams/types";

type Props = NativeStackScreenProps<AppStackParamList, "Exam">;

const BRAND = "#7A1F1F";
const KIND_LABEL = { reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking" } as const;

// Mobile port of the website's /exams/[slug] page: the four papers, how
// the real exam is marked, and the learner's latest scores on this device
// with the group totals and the pass verdict.
export default function ExamScreen(props: Props) {
  return props.route.params.course === "fr" ? <FrenchExamScreen {...props} /> : <SpanishExamScreen {...props} />;
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
