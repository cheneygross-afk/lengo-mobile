import { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useAuth } from "@/lib/auth/AuthContext";
import TranslateBar from "@/components/TranslateBar";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { LESSON_SOURCES } from "@/lib/lessons/registry";
import { getCompletedMap, syncCompletedMapFromCloud } from "@/lib/lessons/completion";
import { displayTitle, spanishLevel } from "@/lib/lessons/levels";
import { loadFlashcards } from "@/lib/flashcards/store";
import { getDueCardsForToday, loadPrefsLocal, syncPrefs } from "@/lib/learnerPrefs";
import { getStudySummary, syncStudyDays } from "@/lib/studyDays";
import { getFrenchReviewCounts, getGermanReviewCounts, getTodaysReviewCounts, seedScheduleFromCompletions } from "@/lib/todaysReview";
import { todaysReviewTotal } from "@/lib/dailyReview";
import { SPANISH_LEVEL_ORDER, nextLessonToContinue, type ContinueLesson, type LearnerPrefs } from "@/lib/learnerPlan";
import { formatMinutes } from "@/lib/duration";
import { courseOfLevelPath } from "@/lib/courses";
import { FRENCH_LEVELS, loadFrenchLevel, nextFrenchLesson } from "@/lib/lessons/french";
import { GERMAN_LEVELS, loadGermanLevel, nextGermanLesson } from "@/lib/lessons/german";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

type Language = "es" | "fr" | "de" | "ja" | "zh";

// French's and German's "Continue" card: the next lesson on its path,
// worked out only while that course is selected (its lessons load on
// demand, lessons/french.ts and lessons/german.ts).
type CourseNext = { slug: string; levelPath: string; label: string; number: number; title: string } | null;

async function loadCourseNext(course: "fr" | "de", fromCloud: boolean): Promise<CourseNext> {
  const levels = course === "fr" ? FRENCH_LEVELS : GERMAN_LEVELS;
  const maps = await Promise.all(
    levels.map((l) => (fromCloud ? syncCompletedMapFromCloud(l.levelPath) : getCompletedMap(l.levelPath)))
  );
  const completed = Object.fromEntries(levels.map((l, i) => [l.levelPath, maps[i]]));
  const found = course === "fr" ? await nextFrenchLesson(completed) : await nextGermanLesson(completed);
  if (!found) return null;
  const data = course === "fr" ? await loadFrenchLevel(found.level.key) : await loadGermanLevel(found.level.key);
  return {
    slug: found.lesson.slug,
    levelPath: found.level.levelPath,
    label: found.level.label,
    number: found.lesson.number,
    title: displayTitle(found.lesson, data.lessons),
  };
}

const LANGUAGE_STORAGE_KEY = "deepend-selected-language";

const SPANISH_LESSONS_BY_LEVEL = Object.fromEntries(
  SPANISH_LEVEL_ORDER.map((lp) => [lp, LESSON_SOURCES[lp].lessons])
);

// What the top of Home shows: the next lesson on the learner's path,
// what's due in today's review (Spanish: missed questions, the daily mix
// and flashcards; Japanese: flashcards), the streak (synced with the
// account), and today's minutes toward the goal.
type Summary = {
  prefs: LearnerPrefs;
  next: ContinueLesson | null;
  hasSpanishProgress: boolean;
  dueByLang: Record<Language, number>;
  streak: number;
  studiedToday: boolean;
  minutesToday: number;
};

async function loadSummary(fromCloud: boolean): Promise<Summary> {
  const prefs = fromCloud ? await syncPrefs() : await loadPrefsLocal();
  const maps = await Promise.all(
    SPANISH_LEVEL_ORDER.map((lp) => (fromCloud ? syncCompletedMapFromCloud(lp) : getCompletedMap(lp)))
  );
  const completed = Object.fromEntries(SPANISH_LEVEL_ORDER.map((lp, i) => [lp, maps[i]]));
  const cards = Object.values(await loadFlashcards());
  const ja = cards.filter((c) => courseOfLevelPath(c.levelPath) === "ja");
  const zh = cards.filter((c) => courseOfLevelPath(c.levelPath) === "zh");
  const study = fromCloud ? await syncStudyDays() : await getStudySummary();
  // Lessons finished before the daily review mix existed (or on the
  // website) join it once their completions are here.
  if (fromCloud) await seedScheduleFromCompletions();
  return {
    prefs,
    next: nextLessonToContinue(SPANISH_LESSONS_BY_LEVEL, completed, prefs.startLevel),
    hasSpanishProgress: maps.some((m) => Object.values(m).some(Boolean)),
    dueByLang: {
      es: todaysReviewTotal(await getTodaysReviewCounts()),
      fr: todaysReviewTotal(await getFrenchReviewCounts()),
      de: todaysReviewTotal(await getGermanReviewCounts()),
      ja: (await getDueCardsForToday(ja, prefs)).length,
      zh: (await getDueCardsForToday(zh, prefs)).length,
    },
    streak: study.streak.current,
    studiedToday: study.streak.studiedToday,
    minutesToday: study.minutesToday,
  };
}

export default function HomeScreen({ navigation }: Props) {
  const { session, hasJapaneseBetaAccess } = useAuth();
  const [language, setLanguage] = useState<Language>("es");

  useFocusEffect(
    useCallback(() => {
      readJSON<Language>(LANGUAGE_STORAGE_KEY, "es").then((saved) => {
        // An account without beta access (or one that's lost it) never
        // sees Japanese, even if a previous session on this device had
        // it selected. French and German are open to every account, like Spanish.
        setLanguage(
          (saved === "ja" || saved === "zh") && hasJapaneseBetaAccess ? saved : saved === "fr" || saved === "de" ? saved : "es"
        );
      });
    }, [hasJapaneseBetaAccess])
  );

  // Falls back to Spanish the moment access is lost mid-session too, not
  // just on next focus.
  useEffect(() => {
    if ((language === "ja" || language === "zh") && !hasJapaneseBetaAccess) setLanguage("es");
  }, [hasJapaneseBetaAccess, language]);

  const [summary, setSummary] = useState<Summary | null>(null);
  const syncedRef = useRef(false);
  const onboardingShownRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        // Local numbers right away; the first focus also merges in the
        // account's prefs and lesson completions from the website.
        const local = await loadSummary(false);
        if (cancelled) return;
        setSummary(local);
        if (syncedRef.current) return;
        syncedRef.current = true;
        const synced = await loadSummary(true);
        if (cancelled) return;
        setSummary(synced);
        // First run: set up a starting level and daily goal -- unless
        // it's been done (here or on the website) or this account
        // already has lessons done, which predates setup existing.
        if (!onboardingShownRef.current && synced.prefs.onboardedAt === null && !synced.hasSpanishProgress) {
          onboardingShownRef.current = true;
          navigation.navigate("Onboarding");
        }
      })();
      return () => {
        cancelled = true;
      };
    }, [navigation])
  );

  // French's or German's continue card, read while that course is
  // selected: local completions first, then once more with the account's
  // merged in.
  const [courseNext, setCourseNext] = useState<{ course: "fr" | "de"; next: CourseNext } | undefined>(undefined);
  const courseSyncedRef = useRef<Record<string, boolean>>({});
  useFocusEffect(
    useCallback(() => {
      if (language !== "fr" && language !== "de") return;
      const course = language;
      let cancelled = false;
      (async () => {
        const local = await loadCourseNext(course, false);
        if (cancelled) return;
        setCourseNext({ course, next: local });
        if (courseSyncedRef.current[course]) return;
        courseSyncedRef.current[course] = true;
        const synced = await loadCourseNext(course, true);
        if (!cancelled) setCourseNext({ course, next: synced });
      })().catch(() => {});
      return () => {
        cancelled = true;
      };
    }, [language])
  );

  function selectLanguage(next: Language) {
    setLanguage(next);
    void writeJSON(LANGUAGE_STORAGE_KEY, next);
  }

  const goal = summary?.prefs.dailyGoalMinutes ?? 0;
  const goalPct = summary && goal ? Math.min(100, Math.round((summary.minutesToday / goal) * 100)) : 0;
  const dueCount = summary?.dueByLang[language] ?? 0;

  return (
    <View style={styles.flex}>
      <ScrollView style={styles.flex} contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.centerSection}>
          <View style={styles.heading}>
            <Text style={styles.title}>Deep End</Text>
            <Text style={styles.subtitle}>{session?.user.email}</Text>
          </View>

          <View style={styles.langRow}>
            <LangPill label="Spanish" active={language === "es"} onPress={() => selectLanguage("es")} />
            <LangPill label="French" active={language === "fr"} onPress={() => selectLanguage("fr")} />
            <LangPill label="German" active={language === "de"} onPress={() => selectLanguage("de")} />
            {hasJapaneseBetaAccess && (
              <>
                <LangPill label="Japanese (beta)" active={language === "ja"} onPress={() => selectLanguage("ja")} />
                <LangPill label="Chinese (beta)" active={language === "zh"} onPress={() => selectLanguage("zh")} />
              </>
            )}
          </View>

          {summary && language === "es" && (
            summary.next ? (
              <Pressable
                style={styles.continueCard}
                onPress={() => navigation.navigate("LessonRunner", { slug: summary.next!.slug })}
              >
                <Text style={styles.continueLabel}>
                  Continue · {spanishLevel(summary.next.levelPath).label} · Lesson {summary.next.number}
                </Text>
                <Text style={styles.continueTitle}>{summary.next.title}</Text>
                <Text style={styles.continueCta}>Start lesson →</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.continueCard} onPress={() => navigation.navigate("SpanishLevels")}>
                <Text style={styles.continueLabel}>All caught up</Text>
                <Text style={styles.continueTitle}>Every required lesson from your starting level up is done.</Text>
              </Pressable>
            )
          )}

          {courseNext && courseNext.course === language && (
            courseNext.next ? (
              <Pressable
                style={styles.continueCard}
                onPress={() =>
                  courseNext.next &&
                  navigation.navigate("LessonRunner", { slug: courseNext.next.slug, levelPath: courseNext.next.levelPath })
                }
              >
                <Text style={styles.continueLabel}>
                  Continue · {courseNext.next.label} · Lesson {courseNext.next.number}
                </Text>
                <Text style={styles.continueTitle}>{courseNext.next.title}</Text>
                <Text style={styles.continueCta}>Start lesson →</Text>
              </Pressable>
            ) : (
              <Pressable
                style={styles.continueCard}
                onPress={() => navigation.navigate(courseNext.course === "fr" ? "FrenchLevels" : "GermanLevels")}
              >
                <Text style={styles.continueLabel}>All caught up</Text>
                <Text style={styles.continueTitle}>Every required lesson from A1 to C2 is done.</Text>
              </Pressable>
            )
          )}

          {summary && (
            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Today</Text>
                <Text style={styles.statValue}>
                  {formatMinutes(summary.minutesToday)}
                  <Text style={styles.statOf}> / {formatMinutes(goal)}</Text>
                </Text>
                <View style={styles.bar}>
                  <View
                    style={[styles.barFill, { width: `${goalPct}%` }, goalPct >= 100 && styles.barFillDone]}
                  />
                </View>
              </View>
              <Pressable
                style={styles.stat}
                onPress={() =>
                  language === "es"
                    ? navigation.navigate("TodayReview")
                    : language === "fr" || language === "de"
                      ? navigation.navigate("TodayReview", { lang: language })
                      : navigation.navigate("Flashcards", { lang: language })
                }
              >
                <Text style={styles.statLabel}>{language === "es" || language === "fr" || language === "de" ? "Review" : "Due"}</Text>
                <Text style={styles.statValue}>{dueCount}</Text>
                <Text style={styles.statHint}>{dueCount > 0 ? "Review →" : "Caught up"}</Text>
              </Pressable>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Streak</Text>
                <Text style={styles.statValue}>{summary.streak}</Text>
                <Text style={styles.statHint}>
                  {summary.streak === 1 ? "day" : "days"}
                  {summary.studiedToday ? " ✓" : ""}
                </Text>
              </View>
            </View>
          )}

          <View style={styles.cards}>
            {language === "es" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("SpanishLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Structured lessons, from beginner to advanced.</Text>
              </Pressable>
            ) : language === "fr" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("FrenchLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Structured lessons, from beginner (A1) to mastery (C2).</Text>
              </Pressable>
            ) : language === "de" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("GermanLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Structured lessons, from beginner (A1) to mastery (C2).</Text>
              </Pressable>
            ) : language === "ja" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("JapaneseLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Hiragana, katakana, and A1 to B1.</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.card} onPress={() => navigation.navigate("ChineseLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Pinyin and tones, then A1 Mandarin.</Text>
              </Pressable>
            )}

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Flashcards", { lang: language })}
            >
              <Text style={styles.cardTitle}>Flashcards</Text>
              <Text style={styles.cardBody}>Review vocabulary due today.</Text>
            </Pressable>

            {/* No Japanese readings exist yet -- same as the website's own
                Japanese nav section, which has no Readings entry -- so
                this card is Spanish-only rather than linking to an empty
                screen. */}
            {language === "es" && (
              <Pressable style={styles.card} onPress={() => navigation.navigate("ReadingLevels")}>
                <Text style={styles.cardTitle}>Readings</Text>
                <Text style={styles.cardBody}>Free short stories and book picks -- any length.</Text>
              </Pressable>
            )}
            {(language === "fr" || language === "de") && (
              <Pressable style={styles.card} onPress={() => navigation.navigate("ReadingLevels", { lang: language })}>
                <Text style={styles.cardTitle}>Stories</Text>
                <Text style={styles.cardBody}>Graded short stories with audio, translations and comprehension questions.</Text>
              </Pressable>
            )}

            {language === "fr" || language === "de" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("TodayReview", { lang: language })}>
                <Text style={styles.cardTitle}>Today&apos;s review</Text>
                <Text style={styles.cardBody}>
                  Questions you missed in your {language === "fr" ? "French" : "German"} lessons, then flashcards due today.
                </Text>
              </Pressable>
            ) : language === "es" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("TodayReview")}>
                <Text style={styles.cardTitle}>Today&apos;s review</Text>
                <Text style={styles.cardBody}>
                  Missed questions, earlier lessons and flashcards due today, in one place.
                </Text>
              </Pressable>
            ) : (
              <Pressable style={styles.card} onPress={() => navigation.navigate("Review", { lang: language })}>
                <Text style={styles.cardTitle}>Review</Text>
                <Text style={styles.cardBody}>Lessons you saved to try again.</Text>
              </Pressable>
            )}

            {/* Grammar guides, verb conjugation, DELE practice and the
                glossary (Spanish only) -- grouped behind one card, like the
                website's Study Tools menu entry. The placement test lives
                on that screen and in Settings rather than here: most
                learners take it once. */}
            {language === "es" && (
              <Pressable style={styles.card} onPress={() => navigation.navigate("StudyTools")}>
                <Text style={styles.cardTitle}>Study Tools</Text>
                <Text style={styles.cardBody}>Grammar guides, verb conjugation, DELE practice and the glossary.</Text>
              </Pressable>
            )}
            {language === "fr" && (
              <Pressable style={styles.card} onPress={() => navigation.navigate("StudyTools", { lang: "fr" })}>
                <Text style={styles.cardTitle}>Study Tools</Text>
                <Text style={styles.cardBody}>Grammar guides, verb conjugation, DELF and DALF practice and the glossary.</Text>
              </Pressable>
            )}
            {language === "de" && (
              <Pressable style={styles.card} onPress={() => navigation.navigate("StudyTools", { lang: "de" })}>
                <Text style={styles.cardTitle}>Study Tools</Text>
                <Text style={styles.cardBody}>
                  Grammar guides, verb conjugation, Goethe-Zertifikat practice and the glossary.
                </Text>
              </Pressable>
            )}
          </View>
        </View>

        <Pressable style={styles.settingsLink} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.settingsLinkText}>Settings</Text>
        </Pressable>
      </ScrollView>

      {/* Only on Home (screen 3) -- not globally across the app, and not
          on the lesson player (screen 4). See components/TranslateBar.
          It's a screen-pinned overlay (position: absolute in its own
          styles) so opening it, or the keyboard coming up while typing
          in it, covers whatever's behind it instead of shifting/
          squeezing this screen's own layout -- nothing here needs to
          react to it opening. */}
      {/* The translator covers Spanish, French, German and Japanese. */}
      {language !== "zh" && <TranslateBar language={language} />}
    </View>
  );
}

function LangPill({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable style={[styles.langPill, active && styles.langPillActive]} onPress={onPress}>
      <Text style={[styles.langPillText, active && styles.langPillTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF6F1" },
  // flexGrow (not flex) so short content still centers and longer
  // content scrolls; the bottom padding clears the pinned TranslateBar.
  container: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 48, paddingBottom: 96 },
  // Title + subtitle + the four access cards are one block, centered in
  // the space above the sign-out link -- rather than pinned to the top,
  // which read as "Deep End" sitting uncomfortably high with the cards
  // crowded right underneath it.
  centerSection: { flex: 1, justifyContent: "center", gap: 18 },
  heading: { alignItems: "center" },
  title: { fontSize: 30, fontWeight: "800", color: "#7A1F1F" },
  subtitle: { fontSize: 14, color: "#00000099", marginTop: 6 },
  langRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, justifyContent: "center" },
  langPill: {
    borderWidth: 1.5,
    borderColor: "#7A1F1F33",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  langPillActive: { backgroundColor: "#7A1F1F", borderColor: "#7A1F1F" },
  langPillText: { fontSize: 13, fontWeight: "700", color: "#7A1F1F" },
  langPillTextActive: { color: "#fff" },
  cards: { gap: 14 },
  continueCard: {
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#7A1F1F",
  },
  continueLabel: { fontSize: 12, fontWeight: "700", color: "#ffffffb3", textTransform: "uppercase" },
  continueTitle: { fontSize: 19, fontWeight: "800", color: "#fff", marginTop: 4 },
  continueCta: { fontSize: 14, fontWeight: "700", color: "#fff", marginTop: 10 },
  statsRow: { flexDirection: "row", gap: 10 },
  stat: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 12,
    backgroundColor: "#fff",
  },
  statLabel: { fontSize: 11, fontWeight: "700", color: "#00000080", textTransform: "uppercase" },
  statValue: { fontSize: 20, fontWeight: "800", color: "#000", marginTop: 4 },
  statOf: { fontSize: 13, fontWeight: "600", color: "#00000066" },
  statHint: { fontSize: 12, color: "#00000080", marginTop: 2 },
  bar: { height: 5, borderRadius: 3, backgroundColor: "#0000001a", marginTop: 8, overflow: "hidden" },
  barFill: { height: 5, borderRadius: 3, backgroundColor: "#7A1F1F" },
  barFillDone: { backgroundColor: "#16a34a" },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
  },
  cardTitle: { fontSize: 18, fontWeight: "700", color: "#000", marginBottom: 4 },
  cardBody: { fontSize: 14, color: "#00000099" },
  settingsLink: { alignItems: "center", paddingVertical: 12 },
  settingsLinkText: { color: "#00000066", fontSize: 14, textDecorationLine: "underline" },
});
