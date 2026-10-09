import { useEffect, useState } from "react";
import { EXAMS } from "@/lib/exams";
import { frenchExamsIfLoaded, loadFrenchExams } from "@/lib/exams/french";
import type { Exam } from "@/lib/exams/types";
import type { ExamCourse } from "./examCourse";

/** A course's practice exams: the DELE ones right away, the DELF/DALF ones
 * once loaded (null until then). */
export function useCourseExams(course: ExamCourse): Exam[] | null {
  const [french, setFrench] = useState<Exam[] | null>(frenchExamsIfLoaded);
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
  return course === "fr" ? french : EXAMS;
}
