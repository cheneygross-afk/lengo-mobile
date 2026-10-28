import { useLayoutEffect } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useCourseExams } from "@/components/exams/useCourseExams";
import { formatMinutes } from "@/lib/exams/scoring";
import TapText from "@/components/TapText";
import { ITALIAN_LANG, KOREAN_LANG, PORTUGUESE_LANG } from "@/lib/speech";
import { COURSE_FOR_LEVEL, TOPIK_LEVELS, paperItems, topikKind } from "@/lib/exams/ko/scoring";
import { CILS_LEVELS, SECTION_PASS, SECTION_POINTS } from "@/lib/exams/it/scoring";
import type { Exam } from "@/lib/exams/types";

type Props = NativeStackScreenProps<AppStackParamList, "Exams">;

const BRAND = "#8B0000";

// Mobile port of the website's /exams page: one full-length DELE practice
// exam per level (src/lib/exams, synced from the website). With course
// "fr", the French course's DELF/DALF exams (src/lib/exams/fr), as on the
// website's /lessons/fr/tools/delf; with "de", the German course's
// Goethe-Zertifikat exams (src/lib/exams/de, /lessons/de/tools/goethe);
// with "pt", the Portuguese course's Celpe-Bras exams and the Deep End A2
// practice test (src/lib/exams/pt, /lessons/pt/tools/celpe-bras); with
// "ko" the Korean beta's TOPIK tests and with "it" the Italian beta's CILS
// practice exams (src/lib/exams/it, /lessons/it/tools/cils).
export default function ExamsScreen({ navigation, route }: Props) {
  const course = route.params?.course ?? "es";
  const exams = useCourseExams(course);
  useLayoutEffect(() => {
    if (course === "fr") navigation.setOptions({ title: "DELF & DALF practice" });
    if (course === "de") navigation.setOptions({ title: "Goethe-Zertifikat practice" });
    if (course === "pt") navigation.setOptions({ title: "Celpe-Bras practice" });
    if (course === "ko") navigation.setOptions({ title: "TOPIK practice" });
    if (course === "it") navigation.setOptions({ title: "CILS practice" });
  }, [navigation, course]);
  if (!exams) {
    return (
      <View style={[s.screen, s.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  if (course === "ko") return <KoreanExams exams={exams} onOpen={(slug) => navigation.navigate("Exam", { slug, course: "ko" })} />;
  if (course === "it") return <ItalianExams exams={exams} onOpen={(slug) => navigation.navigate("Exam", { slug, course: "it" })} />;
  if (course === "pt") return <PortugueseExams exams={exams} onOpen={(slug) => navigation.navigate("Exam", { slug, course: "pt" })} />;
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.intro}>
        {course === "fr"
          ? "Practice exams in the format of the DELF and DALF, A1 to C2: listening with audio, reading, writing with feedback and speaking with timers and model answers, marked the way the real exam is."
          : course === "de"
            ? "Full-length practice exams modelled on the Goethe-Zertifikat, A1 to C2: reading, listening with audio, writing with feedback and speaking with timers and model answers, marked the way the real exam is."
            : "Full-length practice exams modelled on the DELE: reading, listening with audio, writing with feedback and speaking with timers and model answers, marked the way the real exam is."}
      </Text>
      {exams.map((exam) => {
        const total = exam.papers.reduce((m, p) => m + p.minutes, 0);
        return (
          <Pressable
            key={exam.slug}
            style={s.card}
            onPress={() => navigation.navigate("Exam", course === "es" ? { slug: exam.slug } : { slug: exam.slug, course })}
          >
            <View style={s.titleRow}>
              <Text style={s.badge}>{exam.level}</Text>
              <Text style={s.title}>{exam.title}</Text>
            </View>
            <Text style={s.meta}>
              {course === "es" ? 4 : exam.papers.length} papers · about {formatMinutes(total)}
            </Text>
            <Text style={s.description}>{exam.description}</Text>
          </Pressable>
        );
      })}
      <Text style={s.note}>
        {course === "fr"
          ? "DELF and DALF are diplomas of the French Ministry of Education, administered by France Éducation international. These practice exams are written by Deep End and are not official exam material."
          : course === "de"
            ? "The Goethe-Zertifikat is an exam of the Goethe-Institut. These practice exams are written by Deep End and are not official exam material."
            : "DELE is a trademark of the Instituto Cervantes. These practice exams are written by Deep End and are not official exam material."}
      </Text>
    </ScrollView>
  );
}

// The website's /lessons/pt/tools/celpe-bras: the four Celpe-Bras practice
// exams (one exam for everyone, as the real Celpe-Bras is) and, below them,
// the Deep End A2 practice test for learners not yet at B1.
function PortugueseExams({ exams, onOpen }: { exams: Exam[]; onOpen: (slug: string) => void }) {
  const isPractice = (e: Exam) => e.slug === "pt-pratica-a2";
  const card = (exam: Exam) => {
    const total = exam.papers.reduce((m, p) => m + p.minutes, 0);
    const tasks = exam.papers.reduce((m, p) => m + p.tasks.length, 0);
    return (
      <Pressable key={exam.slug} style={s.card} onPress={() => onOpen(exam.slug)}>
        <Text style={s.kicker}>{isPractice(exam) ? "Deep End A2 practice (not Celpe-Bras)" : "Celpe-Bras"}</Text>
        <Text style={s.title}>{exam.title}</Text>
        <TapText text={exam.description} lang={PORTUGUESE_LANG} mode="mixed" style={s.description} />
        <Text style={s.meta}>
          {exam.papers.length} parts · about {formatMinutes(total)} · {tasks} tasks, writing and speaking
        </Text>
      </Pressable>
    );
  };
  const practice = exams.filter(isPractice);
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <TapText
        text={`Full-length practice exams in the format of the Celpe-Bras, Brazil's official certificate of Portuguese for foreigners. It's one exam for every candidate: the "Parte Coletiva" asks you to write four texts, each for a stated reader and purpose, from a video, a recording and two reading texts, and the "Parte Individual" is a 20-minute conversation with an examiner.`}
        lang={PORTUGUESE_LANG}
        mode="mixed"
        style={s.intro}
      />
      <Text style={s.intro}>
        Writing gets feedback on your text against the Celpe-Bras criteria, and speaking gives you the examiner&apos;s questions,
        timers and a model answer. Take a part untimed to practise, or switch on timed mode to rehearse the real thing.
      </Text>
      <Text style={s.section}>Celpe-Bras practice exams</Text>
      {exams.filter((e) => !isPractice(e)).map(card)}
      {practice.length > 0 ? (
        <>
          <Text style={s.section}>Not at B1 yet? Deep End practice</Text>
          <Text style={s.intro}>
            The Celpe-Bras has no A1 or A2 level. This shorter test is Deep End practice at A2 in the same integrated style, to get
            used to writing for a reader from something you heard or read. It is not a Celpe-Bras exam and gives no certificate
            level.
          </Text>
          {practice.map(card)}
        </>
      ) : null}
      <Text style={s.note}>
        The Celpe-Bras is an exam of Inep, for Brazil&apos;s Ministry of Education. These practice exams are written by Deep End and
        are not official exam material.
      </Text>
    </ScrollView>
  );
}

// The Korean beta's TOPIK practice (the website's /lessons/ko/tools/topik):
// two full TOPIK I tests (levels 1-2) and two full TOPIK II tests (levels
// 3-6), each level shown beside the course level that teaches up to it.
function KoreanExams({ exams, onOpen }: { exams: Exam[]; onOpen: (slug: string) => void }) {
  const card = (exam: Exam) => {
    const minutes = exam.papers.reduce((m, p) => m + p.minutes, 0);
    const questions = exam.papers.reduce((m, p) => m + paperItems(p).length, 0);
    const writing = exam.papers.some((p) => p.kind === "writing");
    const levels = TOPIK_LEVELS[topikKind(exam)].map((l) => l.level);
    return (
      <Pressable key={exam.slug} style={s.card} onPress={() => onOpen(exam.slug)}>
        <Text style={s.kicker}>
          TOPIK {topikKind(exam)} · levels {levels[0]}-{levels[levels.length - 1]} · {levels.map((l) => COURSE_FOR_LEVEL[l].name).join(", ")}
        </Text>
        <Text style={s.title}>{exam.title}</Text>
        <TapText text={exam.description} lang={KOREAN_LANG} mode="mixed" style={s.description} />
        <Text style={s.meta}>
          {exam.papers.length} sections · about {formatMinutes(minutes)} · {questions} questions{writing ? " and 4 writing tasks" : ""}
        </Text>
      </Pressable>
    );
  };
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.intro}>
        Full-length practice tests in the format of the TOPIK, the Test of Proficiency in Korean: the same sections, the same kinds
        of questions in the same order, the same timings and the same scoring. TOPIK I tests listening and reading for levels 1 and
        2; TOPIK II adds writing and certifies levels 3 to 6.
      </Text>
      <Text style={s.intro}>
        Every question is marked for you with an explanation in English, and your writing answers get feedback with a model answer
        to compare. Take a section untimed to practise, or switch on timed mode: the clock runs and each recording plays as often
        as in the test.
      </Text>
      <Text style={s.section}>TOPIK I (levels 1-2)</Text>
      <Text style={s.intro}>For the course&apos;s Beginner and Elementary levels: listening and reading, 200 points.</Text>
      {exams.filter((e) => topikKind(e) === "I").map(card)}
      <Text style={s.section}>TOPIK II (levels 3-6)</Text>
      <Text style={s.intro}>From the course&apos;s Intermediate level up: listening, writing and reading, 300 points.</Text>
      {exams.filter((e) => topikKind(e) === "II").map(card)}
      <Text style={s.note}>
        The TOPIK is run by the National Institute for International Education (NIIED) of Korea&apos;s Ministry of Education. These
        practice tests are written by Deep End and are not official test material.
      </Text>
    </ScrollView>
  );
}

// The Italian beta's CILS practice (the website's /lessons/it/tools/cils):
// two full practice exams for each CILS level, grouped by level, each
// level shown with the course level that prepares for it (names, never
// codes).
function ItalianExams({ exams, onOpen }: { exams: Exam[]; onOpen: (slug: string) => void }) {
  const card = (exam: Exam) => {
    const minutes = exam.papers.reduce((m, p) => m + p.minutes, 0);
    const questions = exam.papers.reduce((m, p) => m + paperItems(p).length, 0);
    return (
      <Pressable key={exam.slug} style={s.card} onPress={() => onOpen(exam.slug)}>
        <Text style={s.title}>{exam.title}</Text>
        <TapText text={exam.description} lang={ITALIAN_LANG} mode="mixed" style={s.description} />
        <Text style={s.meta}>
          {exam.papers.length} sections · about {formatMinutes(minutes)} · {questions} questions, writing and speaking
        </Text>
      </Pressable>
    );
  };
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <TapText
        text={`Full-length practice exams in the style of the CILS ("Certificazione di Italiano come Lingua Straniera"), one of the official certificates of Italian for foreigners. Each level has its own exam, and every exam has the same five sections: listening ("ascolto"), reading ("comprensione della lettura"), grammar and vocabulary in context ("analisi delle strutture di comunicazione"), writing ("produzione scritta") and speaking ("produzione orale").`}
        lang={ITALIAN_LANG}
        mode="mixed"
        style={s.intro}
      />
      <Text style={s.intro}>
        Listening, reading and structures are marked as you go; writing gets feedback against the CILS-style criteria, and speaking
        gives you the examiner&apos;s questions, timers and a model answer. Each section is marked out of {SECTION_POINTS}, and you
        pass with {SECTION_PASS} in every section. Take a section untimed to practise, or switch on timed mode to rehearse the real
        thing.
      </Text>
      {CILS_LEVELS.map((l) => {
        const level = exams.filter((e) => e.level === l.level);
        if (!level.length) return null;
        return (
          <View key={l.level} style={s.group}>
            <Text style={s.section}>
              {l.exam} ({l.course})
            </Text>
            <Text style={s.intro}>For the end of the course&apos;s {l.course} level.</Text>
            {level.map(card)}
          </View>
        );
      })}
      <Text style={s.note}>
        The CILS is a certificate of the Università per Stranieri di Siena. These are unofficial practice exams in the CILS style,
        written by Deep End; they are not affiliated with or endorsed by the university and are not official exam material.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  group: { gap: 14 },
  screen: { flex: 1, backgroundColor: "#FAF7F2" },
  loading: { alignItems: "center", justifyContent: "center" },
  content: { padding: 20, gap: 14, paddingBottom: 40 },
  intro: { fontSize: 14, color: "#2A151399", lineHeight: 20 },
  card: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#2A151314", padding: 16, gap: 4 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  badge: {
    fontSize: 12,
    fontWeight: "700",
    color: BRAND,
    backgroundColor: "#8B000014",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  title: { fontSize: 17, fontWeight: "700", color: "#2A1513", flexShrink: 1 },
  meta: { fontSize: 13, color: "#2A151366" },
  description: { fontSize: 14, color: "#2A1513aa", lineHeight: 20 },
  note: { fontSize: 12, color: "#2A151366", lineHeight: 17 },
  kicker: { fontSize: 11, letterSpacing: 0.8, color: "#2A151366", textTransform: "uppercase" },
  section: { fontSize: 17, fontWeight: "700", color: "#2A1513", marginTop: 6 },
});
