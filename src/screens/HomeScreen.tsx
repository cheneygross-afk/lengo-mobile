import { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useAuth } from "@/lib/auth/AuthContext";
import TranslateBar from "@/components/TranslateBar";
import GlowBackground from "@/ui/GlowBackground";
import NavCard from "@/ui/NavCard";
import { Icon } from "@/ui/Icon";
import { card, cardShadow, colors, fonts } from "@/ui/theme";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { LESSON_SOURCES } from "@/lib/lessons/registry";
import { getCompletedMap, syncCompletedMapFromCloud } from "@/lib/lessons/completion";
import { displayTitle, spanishLevel } from "@/lib/lessons/levels";
import { loadFlashcards } from "@/lib/flashcards/store";
import { getDueCardsForToday, loadPrefsLocal, syncPrefs } from "@/lib/learnerPrefs";
import { getStudySummary, syncStudyDays } from "@/lib/studyDays";
import {
  getFrenchReviewCounts,
  getGermanReviewCounts,
  getPortugueseReviewCounts,
  getItalianReviewCounts,
  getTodaysReviewCounts,
  seedScheduleFromCompletions } from "@/lib/todaysReview";
import { todaysReviewTotal } from "@/lib/dailyReview";
import { SPANISH_LEVEL_ORDER, nextLessonToContinue, type ContinueLesson, type LearnerPrefs } from "@/lib/learnerPlan";
import { formatMinutes } from "@/lib/duration";
import { courseOfLevelPath } from "@/lib/courses";
import { FRENCH_LEVELS, loadFrenchLevel, nextFrenchLesson } from "@/lib/lessons/french";
import { GERMAN_LEVELS, loadGermanLevel, nextGermanLesson } from "@/lib/lessons/german";
import { PORTUGUESE_LEVELS, loadPortugueseLevel, nextPortugueseLesson } from "@/lib/lessons/portuguese";
import { KOREAN_PATH_LEVELS, loadKoreanLevel, nextKoreanLesson } from "@/lib/lessons/korean";
import { ITALIAN_PATH_LEVELS, loadItalianLevel, nextItalianLesson } from "@/lib/lessons/italian";
import { ITALIAN_TOOLS, italianToolsSummary } from "@/lib/italianTools";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

// "ko" (Korean) is a private beta: its pill, cards and counts appear only
// for the beta account (useAuth().koreanBeta, lib/koreanBeta.ts). "it"
// (Italian) the same way, for its beta accounts (useAuth().italianBeta,
// lib/italianBeta.ts).
type Language = "es" | "fr" | "de" | "pt" | "ja" | "zh" | "ko" | "it";

// French's, German's and Portuguese's "Continue" card: the next lesson on
// its path, worked out only while that course is selected (its lessons
// load on demand, lessons/french.ts, lessons/german.ts, lessons/portuguese.ts).
type CourseNext = { slug: string; levelPath: string; label: string; number: number; title: string } | null;

type LazyCourse = "fr" | "de" | "pt" | "ko" | "it";

async function loadCourseNext(course: LazyCourse, fromCloud: boolean): Promise<CourseNext> {
  const levels: { levelPath: string }[] =
    course === "fr"
      ? FRENCH_LEVELS
      : course === "de"
        ? GERMAN_LEVELS
        : course === "pt"
          ? PORTUGUESE_LEVELS
          : course === "ko"
            ? KOREAN_PATH_LEVELS
            : ITALIAN_PATH_LEVELS;
  const maps = await Promise.all(
    levels.map((l) => (fromCloud ? syncCompletedMapFromCloud(l.levelPath) : getCompletedMap(l.levelPath)))
  );
  const completed = Object.fromEntries(levels.map((l, i) => [l.levelPath, maps[i]]));
  const found =
    course === "fr"
      ? await nextFrenchLesson(completed)
      : course === "de"
        ? await nextGermanLesson(completed)
        : course === "pt"
          ? await nextPortugueseLesson(completed)
          : course === "ko"
            ? await nextKoreanLesson(completed)
            : await nextItalianLesson(completed);
  if (!found) return null;
  const data =
    course === "fr"
      ? await loadFrenchLevel(found.level.key as Parameters<typeof loadFrenchLevel>[0])
      : course === "de"
        ? await loadGermanLevel(found.level.key as Parameters<typeof loadGermanLevel>[0])
        : course === "pt"
          ? await loadPortugueseLevel(found.level.key as Parameters<typeof loadPortugueseLevel>[0])
          : course === "ko"
            ? await loadKoreanLevel(found.level.key as Parameters<typeof loadKoreanLevel>[0])
            : await loadItalianLevel(found.level.key as Parameters<typeof loadItalianLevel>[0]);
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
  const ko = cards.filter((c) => courseOfLevelPath(c.levelPath) === "ko");
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
      pt: todaysReviewTotal(await getPortugueseReviewCounts()),
      ja: (await getDueCardsForToday(ja, prefs)).length,
      zh: (await getDueCardsForToday(zh, prefs)).length,
      ko: (await getDueCardsForToday(ko, prefs)).length,
      it: todaysReviewTotal(await getItalianReviewCounts()),
    },
    streak: study.streak.current,
    studiedToday: study.streak.studiedToday,
    minutesToday: study.minutesToday,
  };
}

export default function HomeScreen({ navigation }: Props) {
  const { session, koreanBeta, italianBeta } = useAuth();
  const [language, setLanguage] = useState<Language>("es");

  useFocusEffect(
    useCallback(() => {
      readJSON<Language>(LANGUAGE_STORAGE_KEY, "es").then((saved) => {
        // Every course is open to every account (lessons are gated one by
        // one, with a free opening) -- except the Korean and Italian betas,
        // which a saved "ko" / "it" opens only for their beta accounts.
        setLanguage(
          saved === "ja" ||
            saved === "zh" ||
            saved === "fr" ||
            saved === "de" ||
            saved === "pt" ||
            (saved === "ko" && koreanBeta) ||
            (saved === "it" && italianBeta)
            ? saved
            : "es"
        );
      });
    }, [koreanBeta, italianBeta])
  );

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

  // French's, German's or Portuguese's continue card, read while that course is
  // selected: local completions first, then once more with the account's
  // merged in.
  const [courseNext, setCourseNext] = useState<{ course: LazyCourse; next: CourseNext } | undefined>(undefined);
  const courseSyncedRef = useRef<Record<string, boolean>>({});
  useFocusEffect(
    useCallback(() => {
      if (language !== "fr" && language !== "de" && language !== "pt" && language !== "ko" && language !== "it") return;
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

  const studyToolsBody =
    language === "fr"
      ? "Grammar guides, verb conjugation, DELF and DALF practice and the glossary."
      : language === "de"
        ? "Grammar guides, verb conjugation, Goethe-Zertifikat practice and the glossary."
        : language === "pt"
          ? "Grammar guides, verb conjugation, Celpe-Bras practice and the glossary."
          : language === "it"
            ? italianToolsSummary()
            : "Grammar guides, verb conjugation, DELE practice and the glossary.";

  return (
    <View style={styles.flex}>
      <GlowBackground />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.centerSection}>
          <View style={styles.heading}>
            <Text style={styles.title}>Deep End</Text>
            <Text style={styles.subtitle}>{session?.user.email}</Text>
          </View>

          <View style={styles.langRow}>
            <LangPill label="Spanish" active={language === "es"} onPress={() => selectLanguage("es")} />
            <LangPill label="French" active={language === "fr"} onPress={() => selectLanguage("fr")} />
            <LangPill label="German" active={language === "de"} onPress={() => selectLanguage("de")} />
            <LangPill label="Portuguese" active={language === "pt"} onPress={() => selectLanguage("pt")} />
            <LangPill label="Japanese" active={language === "ja"} onPress={() => selectLanguage("ja")} />
            <LangPill label="Chinese" active={language === "zh"} onPress={() => selectLanguage("zh")} />
            {koreanBeta && <LangPill label="Korean" active={language === "ko"} onPress={() => selectLanguage("ko")} />}
            {italianBeta && <LangPill label="Italian" active={language === "it"} onPress={() => selectLanguage("it")} />}
          </View>

          {summary && language === "es" && (
            summary.next ? (
              <ContinueCard
                label={`Continue · ${spanishLevel(summary.next.levelPath).label} · Lesson ${summary.next.number}`}
                title={summary.next.title}
                cta="Start lesson"
                onPress={() => navigation.navigate("LessonRunner", { slug: summary.next!.slug })}
              />
            ) : (
              <ContinueCard
                label="All caught up"
                title="Every required lesson from your starting level up is done."
                onPress={() => navigation.navigate("SpanishLevels")}
              />
            )
          )}

          {courseNext && courseNext.course === language && (
            courseNext.next ? (
              <ContinueCard
                label={`Continue · ${courseNext.next.label} · Lesson ${courseNext.next.number}`}
                title={courseNext.next.title}
                cta="Start lesson"
                onPress={() =>
                  courseNext.next &&
                  navigation.navigate("LessonRunner", { slug: courseNext.next.slug, levelPath: courseNext.next.levelPath })
                }
              />
            ) : (
              <ContinueCard
                label="All caught up"
                title="Every required lesson from beginner to mastery is done."
                onPress={() => navigation.navigate(
                    courseNext.course === "fr"
                      ? "FrenchLevels"
                      : courseNext.course === "de"
                        ? "GermanLevels"
                        : courseNext.course === "pt"
                          ? "PortugueseLevels"
                          : courseNext.course === "ko"
                            ? "KoreanLevels"
                            : "ItalianLevels"
                  )}
              />
            )
          )}

          {summary && (
            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <View style={styles.statHead}>
                  <Icon name="clock" size={14} color={colors.sea} strokeWidth={2} />
                  <Text style={styles.statLabel}>Today</Text>
                </View>
                <Text style={styles.statValue}>{formatMinutes(summary.minutesToday)}</Text>
                <Text style={styles.statHint}>of {formatMinutes(goal)}</Text>
                <View style={styles.bar}>
                  <View
                    style={[styles.barFill, { width: `${goalPct}%` }, goalPct >= 100 && styles.barFillDone]}
                  />
                </View>
              </View>
              <Pressable
                style={({ pressed }) => [styles.stat, pressed && styles.pressed]}
                onPress={() =>
                  language === "es"
                    ? navigation.navigate("TodayReview")
                    : language === "fr" || language === "de" || language === "pt" || language === "it"
                      ? navigation.navigate("TodayReview", { lang: language })
                      : navigation.navigate("Flashcards", { lang: language })
                }
              >
                <View style={styles.statHead}>
                  <Icon name="review" size={14} color={colors.foreground} strokeWidth={2} />
                  <Text style={styles.statLabel}>
                    {language === "es" || language === "fr" || language === "de" || language === "pt" || language === "it" ? "Review" : "Due"}
                  </Text>
                </View>
                <Text style={styles.statValue}>{dueCount}</Text>
                <Text style={[styles.statHint, dueCount > 0 && styles.statHintAction]}>{dueCount > 0 ? "Review →" : "Caught up"}</Text>
              </Pressable>
              <View style={styles.stat}>
                <View style={styles.statHead}>
                  <Icon name="flame" size={14} color="#B4741A" strokeWidth={2} />
                  <Text style={styles.statLabel}>Streak</Text>
                </View>
                <Text style={styles.statValue}>{summary.streak}</Text>
                <Text style={styles.statHint}>
                  {summary.streak === 1 ? "day" : "days"}
                  {summary.studiedToday ? " ✓" : ""}
                </Text>
              </View>
            </View>
          )}

          <Text style={styles.sectionLabel}>Your course</Text>
          <View style={styles.cards}>
            {language === "es" ? (
              <NavCard icon="lessons" title="Lessons" body="Structured lessons, from beginner to advanced." onPress={() => navigation.navigate("SpanishLevels")} />
            ) : language === "fr" ? (
              <NavCard icon="lessons" title="Lessons" body="Structured lessons, from beginner to mastery." onPress={() => navigation.navigate("FrenchLevels")} />
            ) : language === "de" ? (
              <NavCard icon="lessons" title="Lessons" body="Structured lessons, from beginner to mastery." onPress={() => navigation.navigate("GermanLevels")} />
            ) : language === "pt" ? (
              <NavCard icon="lessons" title="Lessons" body="Structured lessons, from beginner to mastery." onPress={() => navigation.navigate("PortugueseLevels")} />
            ) : language === "ko" ? (
              <NavCard icon="lessons" title="Lessons" body="Hangul, then lessons from beginner to mastery. Beta." onPress={() => navigation.navigate("KoreanLevels")} />
            ) : language === "it" ? (
              <NavCard icon="lessons" title="Lessons" body="Structured lessons, from beginner to mastery. Beta." onPress={() => navigation.navigate("ItalianLevels")} />
            ) : language === "ja" ? (
              <NavCard icon="lessons" title="Lessons" body="Hiragana and katakana, then lessons level by level." onPress={() => navigation.navigate("JapaneseLevels")} />
            ) : (
              <NavCard icon="lessons" title="Lessons" body="Pinyin and tones, then lessons level by level." onPress={() => navigation.navigate("ChineseLevels")} />
            )}

            <NavCard
              icon="flashcards"
              tint="saffron"
              title="Flashcards"
              body="Review vocabulary due today."
              onPress={() => navigation.navigate("Flashcards", { lang: language })}
            />

            {/* No Japanese readings exist yet -- same as the website's own
                Japanese nav section, which has no Readings entry -- so
                this card is Spanish-only rather than linking to an empty
                screen. */}
            {language === "es" && (
              <NavCard icon="readings" tint="sea" title="Readings" body="Free short stories and book picks, any length." onPress={() => navigation.navigate("ReadingLevels")} />
            )}
            {(language === "fr" || language === "de") && (
              <NavCard
                icon="readings"
                tint="sea"
                title="Stories"
                body="Graded short stories with audio, translations and comprehension questions."
                onPress={() => navigation.navigate("ReadingLevels", { lang: language })}
              />
            )}
            {language === "pt" && (
              <NavCard
                icon="readings"
                tint="sea"
                title="Stories"
                body="Graded short stories with audio and comprehension questions. Tap any word for its meaning."
                onPress={() => navigation.navigate("ReadingLevels", { lang: "pt" })}
              />
            )}

            {language === "fr" || language === "de" || language === "pt" || language === "it" ? (
              <NavCard
                icon="review"
                title="Today's review"
                body={`Questions you missed in your ${
                  language === "fr" ? "French" : language === "de" ? "German" : language === "pt" ? "Portuguese" : "Italian"
                } lessons, then flashcards due today.`}
                onPress={() => navigation.navigate("TodayReview", { lang: language })}
              />
            ) : language === "es" ? (
              <NavCard
                icon="review"
                title="Today's review"
                body="Missed questions, earlier lessons and flashcards due today, in one place."
                onPress={() => navigation.navigate("TodayReview")}
              />
            ) : (
              <NavCard icon="review" title="Review" body="Lessons you saved to try again." onPress={() => navigation.navigate("Review", { lang: language })} />
            )}

            {/* Writing practice in every language, like the website's
                Writing tile on each course page. */}
            {/* Not for the Korean beta yet: its writing tasks are in each
                unit's review lesson. */}
            {language !== "ko" && (
              <NavCard
                icon="writing"
                tint="saffron"
                title="Writing"
                body="Write a few sentences or a couple of pages and get instant AI feedback at your level."
                onPress={() => navigation.navigate("Writing", { lang: language })}
              />
            )}

            {/* Grammar guides, verb conjugation, exam practice and the
                glossary -- grouped behind one card, like the website's
                Study Tools menu entry. The placement test lives on that
                screen and in Settings rather than here: most learners
                take it once. */}
            {/* The Italian beta: only once it has a tool (lib/italianTools.ts). */}
            {(language === "es" || language === "fr" || language === "de" || language === "pt" || (language === "it" && ITALIAN_TOOLS.length > 0)) && (
              <NavCard
                icon="tools"
                tint="sea"
                title="Study Tools"
                body={studyToolsBody}
                onPress={() => (language === "es" ? navigation.navigate("StudyTools") : navigation.navigate("StudyTools", { lang: language }))}
              />
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
      {/* The translator covers Spanish, French, German, Portuguese and Japanese. */}
      {language !== "zh" && language !== "ko" && language !== "it" && <TranslateBar language={language} />}
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

// The deep-red "pick up where you left off" card, with the website's
// saffron call-to-action pill. The circles are static decoration.
function ContinueCard({ label, title, cta, onPress }: { label: string; title: string; cta?: string; onPress: () => void }) {
  return (
    <Pressable style={({ pressed }) => [styles.continueCard, pressed && styles.pressed]} onPress={onPress}>
      <View pointerEvents="none" style={styles.continueGlowA} />
      <View pointerEvents="none" style={styles.continueGlowB} />
      <Text style={styles.continueLabel}>{label}</Text>
      <Text style={styles.continueTitle}>{title}</Text>
      {cta && (
        <View style={styles.continueCta}>
          <Text style={styles.continueCtaText}>{cta}</Text>
          <Icon name="arrow" size={16} color={colors.ink} strokeWidth={2.2} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  // flexGrow (not flex) so short content still centers and longer
  // content scrolls; the bottom padding clears the pinned TranslateBar.
  container: { flexGrow: 1, paddingHorizontal: 22, paddingTop: 40, paddingBottom: 96 },
  // Title + subtitle + the access cards are one block, centered in the
  // space above the settings link -- rather than pinned to the top,
  // which read as "Deep End" sitting uncomfortably high with the cards
  // crowded right underneath it.
  centerSection: { flex: 1, justifyContent: "center", gap: 18 },
  heading: { alignItems: "center" },
  title: { fontFamily: fonts.logo, fontSize: 38, lineHeight: 58, color: colors.foreground },
  subtitle: { fontSize: 13, color: colors.inkMuted, marginTop: 0 },
  langRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, justifyContent: "center" },
  langPill: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.card,
    ...cardShadow,
  },
  langPillActive: { backgroundColor: colors.foreground, borderColor: colors.foreground },
  langPillText: { fontSize: 13, fontWeight: "700", color: colors.foreground },
  langPillTextActive: { color: "#fff" },
  cards: { gap: 12 },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: colors.inkMuted,
    textTransform: "uppercase",
    marginTop: 6,
    marginBottom: -6,
    marginLeft: 4,
  },
  pressed: { transform: [{ scale: 0.985 }], opacity: 0.92 },
  continueCard: {
    borderRadius: 22,
    padding: 20,
    backgroundColor: colors.foreground,
    overflow: "hidden",
    ...cardShadow,
  },
  continueGlowA: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    right: -60,
    top: -70,
    backgroundColor: colors.saffron,
    opacity: 0.22,
  },
  continueGlowB: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    right: 40,
    bottom: -80,
    backgroundColor: "#ffffff",
    opacity: 0.06,
  },
  continueLabel: { fontSize: 11.5, fontWeight: "700", letterSpacing: 1, color: colors.saffronSoft, textTransform: "uppercase", opacity: 0.9 },
  continueTitle: { fontFamily: fonts.display, fontSize: 22, lineHeight: 28, color: "#fff", marginTop: 6 },
  continueCta: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    marginTop: 16,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: colors.saffron,
  },
  continueCtaText: { fontSize: 14, fontWeight: "700", color: colors.ink },
  statsRow: { flexDirection: "row", gap: 10 },
  stat: { ...card, flex: 1, padding: 12 },
  statHead: { flexDirection: "row", alignItems: "center", gap: 5 },
  statLabel: { fontSize: 11, fontWeight: "700", letterSpacing: 0.6, color: colors.inkMuted, textTransform: "uppercase" },
  statValue: { fontFamily: fonts.display, fontSize: 24, color: colors.ink, marginTop: 6 },
  statHint: { fontSize: 12, color: colors.inkMuted, marginTop: 2 },
  statHintAction: { color: colors.foreground, fontWeight: "700" },
  bar: { height: 6, borderRadius: 3, backgroundColor: colors.saffronSoft, marginTop: 6, overflow: "hidden" },
  barFill: { height: 6, borderRadius: 3, backgroundColor: colors.saffron },
  barFillDone: { backgroundColor: colors.success },
  settingsLink: { alignItems: "center", paddingVertical: 14 },
  settingsLinkText: { color: colors.inkMuted, fontSize: 14, fontWeight: "600" },
});
