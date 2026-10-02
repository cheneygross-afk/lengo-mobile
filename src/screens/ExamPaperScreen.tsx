import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { ExamAudioPlayer, ExamItems, MarkPicker, SpeakTask, TextBlock, WriteTask, LANG, BRAND, clock } from "@/components/exams/ExamParts";
import { ENGLISH_LANG, stopReadAloud } from "@/lib/speech";
import { getExam } from "@/lib/exams";
import {
  PAPER_POINTS,
  formatMinutes,
  isAutoMarked,
  paperItems,
  scoreAutoPaper,
  scoreRatedPaper,
  type ExamAnswers,
} from "@/lib/exams/scoring";
import type { Exam, ExamPaper } from "@/lib/exams/types";
import { loadPaperProgress, savePaperProgress } from "@/lib/examProgress";
import { creditStudy, type CreditResult } from "@/lib/studyDays";
import { examPaperMinutes } from "@/lib/studyCredit";
import StudyCreditNote from "@/components/StudyCreditNote";

type Props = NativeStackScreenProps<AppStackParamList, "ExamPaper">;

// Mobile port of the website's ExamPaperRunner: reading and listening
// are answered and marked automatically; writing uses the course's
// "write" exercise (with feedback when available) and speaking gives a
// cue card with timers and a model answer, both marked 1-5 per task.
// Timed mode runs the paper's real time limit and, in listening, allows
// each recording two plays, as in the exam.
export default function ExamPaperScreen({ route, navigation }: Props) {
  const exam = getExam(route.params.slug);
  const paper = exam?.papers.find((p) => p.id === route.params.paperId);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (paper) navigation.setOptions({ title: paper.title });
  }, [navigation, paper]);

  if (!exam || !paper) {
    return (
      <View style={s.screen}>
        <Text style={[s.muted, { padding: 20 }]}>This paper isn&apos;t available.</Text>
      </View>
    );
  }
  return <Runner key={attempt} exam={exam} paper={paper} onRestart={() => setAttempt((n) => n + 1)} onBack={() => navigation.goBack()} />;
}

function Runner({ exam, paper, onRestart, onBack }: { exam: Exam; paper: ExamPaper; onRestart: () => void; onBack: () => void }) {
  const auto = isAutoMarked(paper);
  const scroll = useRef<ScrollView>(null);
  const [answers, setAnswers] = useState<ExamAnswers>({});
  const [marks, setMarks] = useState<(number | undefined)[]>([]);
  const [points, setPoints] = useState<number | null>(null);
  const [previous, setPrevious] = useState<number | null>(null);
  const [timerEnds, setTimerEnds] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [timeUp, setTimeUp] = useState(false);
  const marked = points !== null;
  const itemCount = useMemo(() => paperItems(paper).length, [paper]);
  // When this attempt began (a retake remounts Runner), so handing in
  // credits the time actually spent, never more than the section's time.
  const [openedAt] = useState(() => Date.now());
  const [credit, setCredit] = useState<CreditResult | null>(null);

  useEffect(() => {
    void loadPaperProgress(exam.slug, paper.id).then((saved) => {
      if (saved?.points !== undefined) setPrevious(saved.points);
    });
    return () => stopReadAloud();
  }, [exam.slug, paper.id]);

  function finish() {
    const score = auto ? scoreAutoPaper(paper, answers) : scoreRatedPaper(paper, marks);
    setPoints(score.points);
    setTimerEnds(null);
    stopReadAloud();
    void savePaperProgress(exam.slug, paper.id, { answers, marks, points: score.points, finishedAt: Date.now() });
    void creditStudy(examPaperMinutes(paper.minutes, openedAt), { counts: true }).then(setCredit);
    scroll.current?.scrollTo({ y: 0, animated: true });
  }

  useEffect(() => {
    if (timerEnds === null) return;
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (t >= timerEnds) {
        setTimerEnds(null);
        setTimeUp(true);
      }
    }, 500);
    return () => clearInterval(id);
  }, [timerEnds]);

  // When time runs out on a reading or listening paper, hand it in as it is.
  const finishRef = useRef(finish);
  useEffect(() => {
    finishRef.current = finish;
  });
  useEffect(() => {
    if (timeUp && auto && points === null) finishRef.current();
  }, [timeUp, auto, points]);

  const answered = Object.keys(answers).length;
  const markedTasks = marks.filter((m) => m !== undefined).length;
  const score = marked && auto ? scoreAutoPaper(paper, answers) : null;
  const examMode = timerEnds !== null || timeUp;
  const setMark = (t: number) => (m: number) => setMarks((prev) => Object.assign([...prev], { [t]: m }));

  return (
    <ScrollView ref={scroll} style={s.screen} contentContainerStyle={s.content}>
      <View style={s.header}>
        <Text style={s.headerText}>
          {formatMinutes(paper.minutes)}
          {paper.prepMinutes ? ` + ${paper.prepMinutes} min preparation` : ""} · {paper.tasks.length} tasks
          {auto ? ` · ${itemCount} questions` : ""}
        </Text>
        {marked ? <StudyCreditNote result={credit} /> : null}
        {previous !== null && !marked ? (
          <Text style={s.muted}>
            Last attempt: {previous}/{PAPER_POINTS}
          </Text>
        ) : null}
        {marked ? (
          <Text style={s.result}>
            {points}/{PAPER_POINTS} points{score ? ` · ${score.correct}/${score.total} right` : ""}
          </Text>
        ) : timerEnds !== null ? (
          <View style={s.row}>
            <Text style={[s.timer, timerEnds - now < 5 * 60_000 && s.timerHot]}>{clock(timerEnds - now)}</Text>
            <Pressable onPress={() => setTimerEnds(null)}>
              <Text style={s.link}>Stop timer</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={s.primaryBtn}
            onPress={() => {
              setTimeUp(false);
              setNow(Date.now());
              setTimerEnds(Date.now() + paper.minutes * 60_000);
            }}
          >
            <Text style={s.primaryBtnText}>Timed mode: start {formatMinutes(paper.minutes)}</Text>
          </Pressable>
        )}
      </View>

      {timeUp && !marked && !auto ? (
        <Text style={s.warn}>{"Time's up. In the exam you would stop here; finish your marking below."}</Text>
      ) : null}

      {paper.tasks.map((task, t) => (
        <View key={t} style={s.section}>
          <Text style={s.h2}>{task.title}</Text>
          <TapText text={task.instructions} lang={LANG} mode="target" style={s.instructions} />
          {task.instructionsEn ? <TapText text={task.instructionsEn} lang={ENGLISH_LANG} mode="english" style={s.muted} /> : null}

          {task.texts?.map((text, i) => <TextBlock key={i} text={text} />)}
          {task.audio?.map((a, i) => <ExamAudioPlayer key={i} audio={a} limitPlays={examMode && !marked} showTranscript={marked} />)}

          <ExamItems
            task={task}
            taskIndex={t}
            answers={answers}
            marked={marked}
            onAnswer={(key, option) => setAnswers((prev) => ({ ...prev, [key]: option }))}
          />

          {task.write ? <WriteTask options={task.write} level={exam.level} mark={marks[t]} onMark={setMark(t)} /> : null}

          {task.speak ? (
            <>
              <SpeakTask task={task.speak} />
              <MarkPicker value={marks[t]} onChange={setMark(t)} />
            </>
          ) : null}
        </View>
      ))}

      <View style={s.footer}>
        {marked ? (
          <>
            <Text style={s.body}>
              {points}/{PAPER_POINTS} points. Your score is saved on this device.
            </Text>
            <View style={s.row}>
              <Pressable style={s.secondaryBtn} onPress={onRestart}>
                <Text style={s.secondaryBtnText}>Try again</Text>
              </Pressable>
              <Pressable style={s.primaryBtn} onPress={onBack}>
                <Text style={s.primaryBtnText}>Back to the exam</Text>
              </Pressable>
            </View>
          </>
        ) : (
          <>
            <Text style={s.muted}>
              {auto
                ? `${answered} of ${itemCount} questions answered.`
                : `${markedTasks} of ${paper.tasks.length} tasks marked. Unmarked tasks count as 0.`}
            </Text>
            <Pressable
              style={[s.primaryBtn, (auto ? answered === 0 : markedTasks === 0) && s.disabled]}
              disabled={auto ? answered === 0 : markedTasks === 0}
              onPress={finish}
            >
              <Text style={s.primaryBtnText}>{auto ? "Mark my answers" : "Finish this paper"}</Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 16, gap: 24, paddingBottom: 60 },
  header: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#00000014", padding: 14, gap: 8 },
  headerText: { fontSize: 14, fontWeight: "600", color: "#000" },
  result: { fontSize: 18, fontWeight: "700", color: "#000" },
  row: { flexDirection: "row", alignItems: "center", gap: 12, flexWrap: "wrap" },
  timer: { fontSize: 22, fontWeight: "700", color: "#000", fontVariant: ["tabular-nums"] },
  timerHot: { color: "#b91c1c" },
  link: { color: BRAND, fontWeight: "600", fontSize: 13 },
  warn: { backgroundColor: "#f59e0b1a", borderRadius: 8, padding: 10, fontSize: 14, color: "#000" },
  section: { gap: 12 },
  h2: { fontSize: 19, fontWeight: "700", color: "#000" },
  instructions: { fontSize: 14, color: "#000", lineHeight: 20 },
  body: { fontSize: 14, color: "#000", lineHeight: 20 },
  muted: { fontSize: 13, color: "#00000099", lineHeight: 18 },
  footer: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#00000014", padding: 14, gap: 10 },
  primaryBtn: { backgroundColor: BRAND, borderRadius: 999, paddingVertical: 10, paddingHorizontal: 16, alignSelf: "flex-start" },
  primaryBtnText: { color: "#fff", fontWeight: "700" },
  secondaryBtn: { borderWidth: 1, borderColor: "#00000030", borderRadius: 999, paddingVertical: 9, paddingHorizontal: 14 },
  secondaryBtnText: { fontSize: 14, color: "#000" },
  disabled: { opacity: 0.4 },
});
