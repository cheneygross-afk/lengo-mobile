// What changes between the Spanish (DELE), French (DELF/DALF), German
// (Goethe-Zertifikat), Brazilian Portuguese (Celpe-Bras), Korean (TOPIK) and Italian (CILS) practice exams in the shared exam components -- the app's port of the website's
// src/components/exams/examCourse.ts: the voice and tap-to-hear language,
// the level sent to the writing feedback, the 1-5 mark descriptors and the
// few target-language labels. The UI chrome stays in English for all of them.
// Screens provide the course with ExamCourseContext; without one it's "es",
// so the Spanish exam screens are unchanged.
import { createContext, useContext } from "react";
import { FRENCH_LANG, GERMAN_LANG, ITALIAN_LANG, KOREAN_LANG, PORTUGUESE_LANG, SPANISH_LANG, type SpeechLang } from "@/lib/speech";
import { TASK_MARKS } from "@/lib/exams/scoring";
import { FR_TASK_MARKS } from "@/lib/exams/fr/scoring";
import { DE_TASK_MARKS } from "@/lib/exams/de/scoring";
import { PT_TASK_MARKS } from "@/lib/exams/pt/scoring";
import { KO_TASK_MARKS } from "@/lib/exams/ko/scoring";
import { IT_TASK_MARKS } from "@/lib/exams/it/scoring";

export type ExamCourse = "es" | "fr" | "de" | "pt" | "ko" | "it";

export type ExamCourseConfig = {
  lang: SpeechLang;
  /** The level the writing feedback route expects. */
  writeLevel: (level: string) => string;
  taskMarks: { mark: number; label: string; hint: string }[];
  transcript: string;
  she: string;
  he: string;
  /** What a paper is shown out of, when not the shared 25 points (TOPIK: 100 per section; CILS: 20). */
  paperMax?: number;
};

export const EXAM_COURSES: Record<ExamCourse, ExamCourseConfig> = {
  es: {
    lang: SPANISH_LANG,
    writeLevel: (level) => level,
    taskMarks: TASK_MARKS,
    transcript: "TRANSCRIPCIÓN",
    she: "Ella: ",
    he: "Él: ",
  },
  fr: {
    lang: FRENCH_LANG,
    writeLevel: (level) => `FR-${level}`,
    taskMarks: FR_TASK_MARKS,
    transcript: "TRANSCRIPTION",
    she: "Elle : ",
    he: "Lui : ",
  },
  de: {
    lang: GERMAN_LANG,
    writeLevel: (level) => `DE-${level}`,
    taskMarks: DE_TASK_MARKS,
    transcript: "TRANSKRIPT",
    she: "Sie: ",
    he: "Er: ",
  },
  pt: {
    lang: PORTUGUESE_LANG,
    writeLevel: (level) => `PT-${level}`,
    taskMarks: PT_TASK_MARKS,
    transcript: "TRANSCRIÇÃO",
    she: "Ela: ",
    he: "Ele: ",
  },
  // The Korean course's TOPIK practice tests: each section shown out of 100.
  ko: {
    lang: KOREAN_LANG,
    writeLevel: (level) => `KO-${level}`,
    taskMarks: KO_TASK_MARKS,
    transcript: "듣기 대본",
    she: "여자: ",
    he: "남자: ",
    paperMax: 100,
  },
  // The Italian course's CILS practice exams: each section shown out of 20.
  it: {
    lang: ITALIAN_LANG,
    writeLevel: (level) => `IT-${level}`,
    taskMarks: IT_TASK_MARKS,
    transcript: "TRASCRIZIONE",
    she: "Lei: ",
    he: "Lui: ",
    paperMax: 20,
  },
};

export const ExamCourseContext = createContext<ExamCourse>("es");

export function useExamCourse(): ExamCourseConfig {
  return EXAM_COURSES[useContext(ExamCourseContext)];
}
