import type { ComponentType } from "react";
import { planCovers, useAuth } from "@/lib/auth/AuthContext";
import type { CourseId } from "@/lib/courses";
import PlanLock from "./PlanLock";

/** A study tool screen that needs a plan covering its course (the
 * conjugators and glossaries, like on the website); PlanLock otherwise. */
export function withPlan<P extends object>(Screen: ComponentType<P>, course: CourseId): ComponentType<P> {
  function PlanScreen(props: P) {
    const { lessonsCourses } = useAuth();
    if (!planCovers(lessonsCourses, course)) return <PlanLock course={course} kind="tool" />;
    return <Screen {...props} />;
  }
  PlanScreen.displayName = `withPlan(${Screen.displayName ?? Screen.name ?? "Screen"})`;
  return PlanScreen;
}
