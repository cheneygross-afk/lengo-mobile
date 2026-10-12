// What changes between the Spanish (DELE), French (DELF/DALF) and German
// (Goethe-Zertifikat) practice exams in the shared exam components -- the app's port of the website's
// src/components/exams/examCourse.ts: the voice and tap-to-hear language,
// the level sent to the writing feedback, the 1-5 mark descriptors and the
// few target-language labels. The UI chrome stays in English for all of them.
// Screens provide the course with ExamCourseContext; without one it's "es",
// so the Spanish exam screens are unchanged.
import { createContext, useContext } from "react";
import { FRENCH_LANG, GERMAN_LANG, SPANISH_LANG, type SpeechLang } from "@/lib/speech";
import { TASK_MARKS } from "@/lib/exams/scoring";
import { FR_TASK_MARKS } from "@/lib/exams/fr/scoring";
import { DE_TASK_MARKS } from "@/lib/exams/de/scoring";

export type ExamCourse = "es" | "fr" | "de";

export type ExamCourseConfig = {
  lang: SpeechLang;
  /** The level the writing feedback route expects. */
  writeLevel: (level: string) => string;
  taskMarks: { mark: number; label: string; hint: string }[];
  transcript: string;
  she: string;
  he: string;
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
};

export const ExamCourseContext = createContext<ExamCourse>("es");

export function useExamCourse(): ExamCourseConfig {
  return EXAM_COURSES[useContext(ExamCourseContext)];
}
