import { useEffect, useState } from "react";
import { EXAMS } from "@/lib/exams";
import { frenchExamsIfLoaded, loadFrenchExams } from "@/lib/exams/french";
import { germanExamsIfLoaded, loadGermanExams } from "@/lib/exams/german";
import { loadPortugueseExams, portugueseExamsIfLoaded } from "@/lib/exams/portuguese";
import type { Exam } from "@/lib/exams/types";
import type { ExamCourse } from "./examCourse";

/** A course's practice exams: the DELE ones right away, the DELF/DALF,
 * Goethe-Zertifikat and Celpe-Bras ones once loaded (null until then). */
export function useCourseExams(course: ExamCourse): Exam[] | null {
  const [french, setFrench] = useState<Exam[] | null>(frenchExamsIfLoaded);
  const [german, setGerman] = useState<Exam[] | null>(germanExamsIfLoaded);
  const [portuguese, setPortuguese] = useState<Exam[] | null>(portugueseExamsIfLoaded);
  useEffect(() => {
    if (course !== "fr" || french) return;
    let cancelled = false;
    loadFrenchExams().then((exams) => {
      if (!cancelled) setFrench(exams);
    });
    return () => {
      cancelled = true;
    };
  }, [course, french]);
  useEffect(() => {
    if (course !== "de" || german) return;
    let cancelled = false;
    loadGermanExams().then((exams) => {
      if (!cancelled) setGerman(exams);
    });
    return () => {
      cancelled = true;
    };
  }, [course, german]);
  useEffect(() => {
    if (course !== "pt" || portuguese) return;
    let cancelled = false;
    loadPortugueseExams().then((exams) => {
      if (!cancelled) setPortuguese(exams);
    });
    return () => {
      cancelled = true;
    };
  }, [course, portuguese]);
  return course === "fr" ? french : course === "de" ? german : course === "pt" ? portuguese : EXAMS;
}
