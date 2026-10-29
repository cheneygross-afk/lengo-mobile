import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { AppState } from "react-native";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { syncFlashcardsFromCloud } from "@/lib/flashcards/store";
import type { CourseId } from "@/lib/courses";
import { isItalianBetaEmail } from "@/lib/italianBeta";

// Mobile equivalent of the web app's server-side getCurrentUserAndRole --
// there's no server component / cookie middleware here, so session state
// lives in a context instead, hydrated once from AsyncStorage (via the
// Supabase client's own persisted session) and kept live with
// onAuthStateChange.
type AuthState = {
  session: Session | null;
  loading: boolean;
  // The courses whose lessons and study tools are open -- mirrors the
  // website's getEntitlements(): "all" for All Access, the older plans
  // and staff; the courses picked for Focused Lessons (plus a company
  // seat's); empty without a plan. Plans are bought on the website, so
  // this reloads whenever the app comes back to the foreground.
  // "it" is in it only for the Italian beta accounts (lib/italianBeta.ts,
  // the website's allowlist): All Access doesn't open it, and nobody else
  // is shown anything Italian.
  lessonsCourses: "all" | CourseId[];
  /** Whether this account may see the Italian beta. */
  italianBeta: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [lessonsCourses, setLessonsCourses] = useState<"all" | CourseId[]>([]);
  const userId = session?.user?.id;
  const italianBeta = isItalianBetaEmail(session?.user?.email);

  const loadAccess = useCallback(async () => {
    if (!userId) {
      setLessonsCourses([]);
      return;
    }
    const [{ data: profile }, { data: business }] = await Promise.all([
      // "*": the website's schema decides the columns (lessons_plan_languages).
      supabase.from("profiles").select("*").eq("id", userId).single(),
      supabase.rpc("my_business"),
    ]);
    setLessonsCourses(withItalianBeta(coursesFor(profile, business), italianBeta));
  }, [userId, italianBeta]);

  useEffect(() => {
    void loadAccess();
    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active") void loadAccess();
    });
    return () => sub.remove();
  }, [loadAccess]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;
    // Once per session, as soon as a user is known -- pulls this
    // account's flashcards down from the website (or a previous app
    // session on another device) and merges them into the local store.
    // Lesson-completion sync happens per-track instead, from
    // LessonListScreen, since it needs a levelPath.
    void syncFlashcardsFromCloud();
  }, [userId]);

  const value = useMemo<AuthState>(
    () => ({
      session,
      loading,
      lessonsCourses,
      italianBeta,
      signOut: async () => {
        await supabase.auth.signOut();
      },
    }),
    [session, loading, lessonsCourses, italianBeta]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

type BusinessRow = { role: string; language: string | null; org_status: string };

/** The website's rule (getEntitlements in lengo's src/lib/entitlements.ts). */
function coursesFor(profile: Record<string, unknown> | null, business: unknown): "all" | CourseId[] {
  const isStaff = profile?.role === "instructor" || profile?.role === "admin";
  const languages = profile?.lessons_plan_languages as CourseId[] | null | undefined;
  let courses: "all" | CourseId[] =
    isStaff || profile?.unlimited_conversations || (profile?.lessons_plan_active && !languages)
      ? "all"
      : profile?.lessons_plan_active
        ? [...(languages ?? [])]
        : [];
  const seat = ((business ?? []) as BusinessRow[]).find(
    (r) => r.role === "employee" && (r.org_status === "active" || r.org_status === "past_due") && !!r.language,
  );
  const seatCourse: CourseId | null = seat ? (seat.language === "en" ? "en" : "es") : null;
  if (seatCourse && courses !== "all" && !courses.includes(seatCourse)) courses = [...courses, seatCourse];
  return courses;
}

// The Italian beta: every Italian lesson is open to the beta accounts (the
// website's entitlements do the same), whatever their plan, and "it" is
// added to no one else's list.
const ALL_ACCESS_COURSES: CourseId[] = ["es", "ja", "zh", "fr", "en", "de", "pt", "ko"];

function withItalianBeta(courses: "all" | CourseId[], italianBeta: boolean): "all" | CourseId[] {
  if (!italianBeta) return courses;
  return [...(courses === "all" ? ALL_ACCESS_COURSES : courses), "it"];
}

/** Whether the learner's plan opens a course. */
export function planCovers(courses: "all" | CourseId[], course: CourseId): boolean {
  // "all" never opens the Italian beta: only the beta accounts' lists have "it".
  if (course === "it") return courses !== "all" && courses.includes("it");
  return courses === "all" || courses.includes(course);
}
