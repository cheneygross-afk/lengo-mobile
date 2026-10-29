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
import { CELPE_BANDS, celpePassMarkExplanation, celpeResult, isPractice } from "@/lib/exams/pt/scoring";
import {
  SECTION_PASS as CILS_PASS,
  SECTION_POINTS as CILS_POINTS,
  cilsName,
  cilsPassMarkExplanation,
  cilsResult,
  sectionScore as cilsSectionScore,
} from "@/lib/exams/it/scoring";
import { SECTIONS as CILS_SECTIONS } from "@/lib/exams/it/text";
import { SECTION_POINTS, TOPIK_LEVELS, sectionScore, topikKind, topikPassMarkExplanation, topikResult } from "@/lib/exams/ko/scoring";
import { useCourseExams } from "@/components/exams/useCourseExams";
import TapText from "@/components/TapText";
import { GERMAN_LANG, ITALIAN_LANG, KOREAN_LANG, PORTUGUESE_LANG } from "@/lib/speech";
import type { Exam } from "@/lib/exams/types";

type Props = NativeStackScreenProps<AppStackParamList, "Exam">;

const BRAND = "#8B0000";
const KIND_LABEL = { reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking" } as const;

// Mobile port of the website's /exams/[slug] page: the four papers, how
// the real exam is marked, and the learner's latest scores on this device
// with the group totals and the pass verdict.
export default function ExamScreen(props: Props) {
  const course = props.route.params.course;
  if (course === "fr") return <FrenchExamScreen {...props} />;
  if (course === "de") return <GermanExamScreen {...props} />;
  if (course === "pt") return <PortugueseExamScreen {...props} />;
  if (course === "ko") return <KoreanExamScreen {...props} />;
  if (course === "it") return <ItalianExamScreen {...props} />;
  return <SpanishExamScreen {...props} />;
}

// A TOPIK practice test of the Korean course (the website's
// /lessons/ko/tools/topik/[slug]): its sections (TOPIK II in two sittings,
// 교시), how the real test is scored -- each section out of 100, only the
// total deciding the level -- and the latest scores (the website's
// TopikResults).
function KoreanExamScreen({ navigation, route }: Props) {
  const exams = useCourseExams("ko");
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
        <Text style={[s.intro, { padding: 20 }]}>This test isn&apos;t available.</Text>
      </View>
    );
  }

  const periods = new Set(exam.papers.map((p) => p.group)).size;
  const result = topikResult(exam, scores);
  const anyScore = Object.keys(scores).length > 0;
  const lowest = TOPIK_LEVELS[result.kind][0];
  const verdict = result.complete
    ? result.level
      ? `Level ${result.level} (${result.level}급): ${result.total} of ${result.max} points.`
      : `${result.total} of ${result.max} points: below the ${lowest.from} needed for level ${lowest.level}.`
    : `Finish all ${exam.papers.length} sections for a level: only the total counts.`;

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.h1}>{exam.title}</Text>
      <TapText text={exam.description} lang={KOREAN_LANG} mode="mixed" style={s.intro} />

      {exam.papers.map((paper, i) => {
        const questions = paperItems(paper).length;
        const points = scores[paper.id];
        return (
          <Pressable
            key={paper.id}
            style={s.card}
            onPress={() => navigation.navigate("ExamPaper", { slug: exam.slug, paperId: paper.id, course: "ko" })}
          >
            <Text style={s.overline}>
              TOPIK {topikKind(exam)} · {periods > 1 ? `${paper.group}교시 · ` : ""}SECTION {i + 1} · {KIND_LABEL[paper.kind].toUpperCase()}
            </Text>
            <TapText text={paper.title} lang={KOREAN_LANG} mode="target" style={s.title} />
            <Text style={s.meta}>
              {formatMinutes(paper.minutes)} · {questions ? `${questions} questions` : `${paper.tasks.length} questions (51-54)`} ·{" "}
              {SECTION_POINTS} points
            </Text>
            {points !== undefined ? (
              <Text style={s.score}>
                Last attempt: {sectionScore(points)}/{SECTION_POINTS}
              </Text>
            ) : null}
          </Pressable>
        );
      })}

      {anyScore ? (
        <View style={s.card}>
          <Text style={s.h2}>Your results</Text>
          <Text style={s.body}>
            Total: {result.total}/{result.max}
          </Text>
          {result.sections.map(({ paper, score }) => (
            <Text key={paper.id} style={s.body}>
              <TapText text={paper.title} lang={KOREAN_LANG} mode="target" style={s.body} />:{" "}
              {score === null ? "not done yet" : `${score}/${SECTION_POINTS}`}
            </Text>
          ))}
          <TapText text={verdict} lang={KOREAN_LANG} mode="mixed" style={[s.body, s.bold]} />
        </View>
      ) : null}

      <Text style={s.h2}>How it&apos;s scored</Text>
      <Text style={s.body}>{topikPassMarkExplanation(exam)}</Text>
      {exam.papers.some((p) => p.kind === "writing") ? (
        <Text style={s.body}>
          Here, each writing answer gets a mark from 1 to 5 from the feedback, which you can keep or change after comparing with the
          model answer; the mark&apos;s share of 5 gives the question&apos;s points. A question you don&apos;t mark counts as 0.
          Scores are saved on this device.
        </Text>
      ) : (
        <Text style={s.body}>Every question is marked automatically. Scores are saved on this device.</Text>
      )}
    </ScrollView>
  );
}

const CILS_SECTION_EN = Object.fromEntries(CILS_SECTIONS.map((x) => [x.id, x.en])) as Record<string, string>;

// A CILS practice exam of the Italian beta (the website's
// /lessons/it/tools/cils/[slug]): its five sections, how the real exam is
// marked -- each section out of 20, at least 11 in every one to pass --
// and the latest scores (the website's CilsResults).
function ItalianExamScreen({ navigation, route }: Props) {
  const exams = useCourseExams("it");
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

  const result = cilsResult(exam, scores);
  const anyScore = Object.keys(scores).length > 0;
  const failed = result.sections.filter((x) => x.score !== null && !x.passed).length;
  const verdict = result.complete
    ? result.passed
      ? `Passed: every section at ${CILS_PASS} or more, ${result.total} of ${result.max} points. You're working at ${cilsName(exam.level)} level.`
      : `${result.total} of ${result.max} points, but ${failed} section${failed === 1 ? "" : "s"} below ${CILS_PASS}: in the real exam you would keep the sections you passed and resit the others.`
    : `Finish all ${exam.papers.length} sections for a verdict: you need ${CILS_PASS} of ${CILS_POINTS} in each one.`;

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.h1}>{exam.title}</Text>
      <TapText text={exam.description} lang={ITALIAN_LANG} mode="mixed" style={s.intro} />

      {exam.papers.map((paper, i) => {
        const questions = paperItems(paper).length;
        const points = scores[paper.id];
        return (
          <Pressable
            key={paper.id}
            style={s.card}
            onPress={() => navigation.navigate("ExamPaper", { slug: exam.slug, paperId: paper.id, course: "it" })}
          >
            <Text style={s.overline}>
              SECTION {i + 1} · {(CILS_SECTION_EN[paper.id] ?? KIND_LABEL[paper.kind]).toUpperCase()}
            </Text>
            <TapText text={paper.title} lang={ITALIAN_LANG} mode="target" style={s.title} />
            <Text style={s.meta}>
              {formatMinutes(paper.minutes)} · {questions ? `${questions} questions` : `${paper.tasks.length} tasks`} · {CILS_POINTS} points
            </Text>
            {points !== undefined ? (
              <Text style={s.score}>
                Last attempt: {cilsSectionScore(points)}/{CILS_POINTS}
              </Text>
            ) : null}
          </Pressable>
        );
      })}

      {anyScore ? (
        <View style={s.card}>
          <Text style={s.h2}>Your results</Text>
          <Text style={s.body}>
            Total: {result.total}/{result.max}
          </Text>
          {result.sections.map(({ paper, score, passed }) => (
            <Text key={paper.id} style={s.body}>
              <TapText text={paper.title} lang={ITALIAN_LANG} mode="target" style={s.body} />:{" "}
              {score === null ? "not done yet" : `${score}/${CILS_POINTS}`}
              {score !== null ? (
                <Text style={{ color: passed ? "#15803d" : "#b91c1c" }}> · {passed ? "passed" : `below ${CILS_PASS}`}</Text>
              ) : null}
            </Text>
          ))}
          <TapText text={verdict} lang={ITALIAN_LANG} mode="mixed" style={[s.body, s.bold]} />
        </View>
      ) : null}

      <Text style={s.h2}>How it&apos;s marked</Text>
      <Text style={s.body}>{cilsPassMarkExplanation(exam)}</Text>
      <Text style={s.body}>
        Here, listening, reading and structures are marked automatically. Every writing and speaking task gets a mark from 1 to 5
        -- from the writing feedback when it&apos;s available, otherwise your own honest comparison with the model answer -- and the
        section&apos;s points are that mark&apos;s share of 5. A task you don&apos;t mark counts as 0. Scores are saved on this
        device.
      </Text>
    </ScrollView>
  );
}

const celpeEnLevel = (level: string | null) => CELPE_BANDS.find((b) => b.level === level)?.en;

// A Celpe-Bras practice exam of the Brazilian Portuguese course (the
// website's /lessons/pt/tools/celpe-bras/[slug]), or the Deep End A2
// practice test: the two parts, how the real exam is marked -- a 0-5 mark
// per part, the weaker part setting the certificate level -- and the
// latest scores (the website's CelpeBrasResults).
function PortugueseExamScreen({ navigation, route }: Props) {
  const exams = useCourseExams("pt");
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

  const practice = isPractice(exam);
  const result = celpeResult(exam, scores);
  const anyScore = Object.keys(scores).length > 0;
  const verdict = result.practice
    ? result.complete
      ? (result.finalMark ?? 0) >= 3
        ? "You handle A2 tasks comfortably: you're ready to start working towards B1 and the Celpe-Bras."
        : "Not yet comfortable at A2: aim for about 3 out of 5 on every task before moving on."
      : "Finish both parts for a verdict."
    : result.complete
      ? result.level
        ? `Overall: "${result.level}" (${celpeEnLevel(result.level)}), set by your weaker part.`
        : `Below the 2.00 needed for the lowest certificate, "Intermediário", in at least one part.`
      : "Finish both parts for an overall level: the weaker part decides it.";

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.h1}>{exam.title}</Text>
      {practice ? (
        <Text style={s.note}>
          Deep End practice, not a Celpe-Bras exam: an A2 test in the Celpe-Bras&apos;s integrated style, with no certificate level.
        </Text>
      ) : null}
      <TapText text={exam.description} lang={PORTUGUESE_LANG} mode="mixed" style={s.intro} />

      {exam.papers.map((paper, i) => {
        const points = scores[paper.id];
        return (
          <Pressable
            key={paper.id}
            style={s.card}
            onPress={() => navigation.navigate("ExamPaper", { slug: exam.slug, paperId: paper.id, course: "pt" })}
          >
            <Text style={s.overline}>
              PART {i + 1} · {KIND_LABEL[paper.kind].toUpperCase()}
            </Text>
            <TapText text={paper.title} lang={PORTUGUESE_LANG} mode="target" style={s.title} />
            <Text style={s.meta}>
              {formatMinutes(paper.minutes)} · {paper.tasks.length} task{paper.tasks.length === 1 ? "" : "s"}
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
          {result.papers.map(({ paper, points, mark, level }) => (
            <Text key={paper.id} style={s.body}>
              <TapText text={paper.title} lang={PORTUGUESE_LANG} mode="target" style={s.body} />:{" "}
              {points === null ? "not done yet" : `${points}/${PAPER_POINTS} · mark ${mark?.toFixed(2)} of 5`}
              {points !== null && !result.practice ? (
                <Text style={{ color: level ? "#15803d" : "#b91c1c" }}>
                  {" "}
                  · {level ? <TapText text={level} lang={PORTUGUESE_LANG} mode="target" /> : "no certificate level"}
                </Text>
              ) : null}
            </Text>
          ))}
          <TapText text={verdict} lang={PORTUGUESE_LANG} mode="mixed" style={[s.body, s.bold]} />
        </View>
      ) : null}

      <Text style={s.h2}>How it&apos;s marked</Text>
      <TapText text={celpePassMarkExplanation(exam)} lang={PORTUGUESE_LANG} mode="mixed" style={s.body} />
      <Text style={s.body}>
        Here, every task gets a mark from 1 to 5 -- from the writing feedback when it&apos;s available, otherwise your own honest
        comparison with the model answer. A task you don&apos;t mark counts as 0. Scores are saved on this device.
      </Text>
    </ScrollView>
  );
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
  screen: { flex: 1, backgroundColor: "#FAF7F2" },
  loading: { alignItems: "center", justifyContent: "center" },
  content: { padding: 20, gap: 14, paddingBottom: 40 },
  h1: { fontSize: 22, fontWeight: "700", color: "#2A1513" },
  h2: { fontSize: 17, fontWeight: "700", color: "#2A1513", marginTop: 6 },
  intro: { fontSize: 14, color: "#2A151399", lineHeight: 20 },
  body: { fontSize: 14, color: "#2A1513cc", lineHeight: 20 },
  bold: { fontWeight: "700", color: "#2A1513" },
  card: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#2A151314", padding: 16, gap: 4 },
  overline: { fontSize: 11, letterSpacing: 0.8, color: "#2A151366" },
  title: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  meta: { fontSize: 13, color: "#2A151377" },
  score: { fontSize: 13, color: BRAND, fontWeight: "600" },
  note: { fontSize: 13, color: "#2A1513", backgroundColor: "#f59e0b1a", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8 },
});
