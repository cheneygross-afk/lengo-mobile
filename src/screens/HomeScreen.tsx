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
import { spanishLevel } from "@/lib/lessons/levels";
import { loadFlashcards } from "@/lib/flashcards/store";
import { getDisplayStreak } from "@/lib/streak";
import { getDueCardsForToday, getMinutesToday, loadPrefsLocal, syncPrefs } from "@/lib/learnerPrefs";
import { SPANISH_LEVEL_ORDER, nextLessonToContinue, type ContinueLesson, type LearnerPrefs } from "@/lib/learnerPlan";
import { formatMinutes } from "@/lib/duration";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

type Language = "es" | "ja";

const LANGUAGE_STORAGE_KEY = "deepend-selected-language";

const SPANISH_LESSONS_BY_LEVEL = Object.fromEntries(
  SPANISH_LEVEL_ORDER.map((lp) => [lp, LESSON_SOURCES[lp].lessons])
);

// What the top of Home shows: the next lesson on the learner's path,
// flashcards due today, the streak, and today's minutes toward the goal.
type Summary = {
  prefs: LearnerPrefs;
  next: ContinueLesson | null;
  hasSpanishProgress: boolean;
  dueByLang: Record<Language, number>;
  streak: number;
  minutesToday: number;
};

async function loadSummary(fromCloud: boolean): Promise<Summary> {
  const prefs = fromCloud ? await syncPrefs() : await loadPrefsLocal();
  const maps = await Promise.all(
    SPANISH_LEVEL_ORDER.map((lp) => (fromCloud ? syncCompletedMapFromCloud(lp) : getCompletedMap(lp)))
  );
  const completed = Object.fromEntries(SPANISH_LEVEL_ORDER.map((lp, i) => [lp, maps[i]]));
  const cards = Object.values(await loadFlashcards());
  const es = cards.filter((c) => !c.levelPath.startsWith("ja"));
  const ja = cards.filter((c) => c.levelPath.startsWith("ja"));
  return {
    prefs,
    next: nextLessonToContinue(SPANISH_LESSONS_BY_LEVEL, completed, prefs.startLevel),
    hasSpanishProgress: maps.some((m) => Object.values(m).some(Boolean)),
    dueByLang: {
      es: (await getDueCardsForToday(es, prefs)).length,
      ja: (await getDueCardsForToday(ja, prefs)).length,
    },
    streak: await getDisplayStreak(),
    minutesToday: await getMinutesToday(),
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
        // it selected.
        setLanguage(saved === "ja" && hasJapaneseBetaAccess ? "ja" : "es");
      });
    }, [hasJapaneseBetaAccess])
  );

  // Falls back to Spanish the moment access is lost mid-session too, not
  // just on next focus.
  useEffect(() => {
    if (language === "ja" && !hasJapaneseBetaAccess) setLanguage("es");
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

          {hasJapaneseBetaAccess && (
            <View style={styles.langRow}>
              <LangPill label="Spanish" active={language === "es"} onPress={() => selectLanguage("es")} />
              <LangPill label="Japanese (beta)" active={language === "ja"} onPress={() => selectLanguage("ja")} />
            </View>
          )}

          {summary && language === "es" && (
            summary.next ? (
              <Pressable
                style={styles.continueCard}
                onPress={() => navigation.navigate("LessonRunner", { slug: summary.next!.slug })}
              >
                <Text style={styles.continueLabel}>
                  Continue · {spanishLevel(summary.next.levelPath).code} · Lesson {summary.next.number}
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

          {summary && (
            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Today</Text>
                <Text style={styles.statValue}>
                  {formatMinutes(summary.minutesToday)}
                  <Text style={styles.statOf}> / {goal}m</Text>
                </Text>
                <View style={styles.bar}>
                  <View
                    style={[styles.barFill, { width: `${goalPct}%` }, goalPct >= 100 && styles.barFillDone]}
                  />
                </View>
              </View>
              <Pressable style={styles.stat} onPress={() => navigation.navigate("Flashcards", { lang: language })}>
                <Text style={styles.statLabel}>Due</Text>
                <Text style={styles.statValue}>{dueCount}</Text>
                <Text style={styles.statHint}>{dueCount > 0 ? "Review →" : "Caught up"}</Text>
              </Pressable>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Streak</Text>
                <Text style={styles.statValue}>{summary.streak}</Text>
                <Text style={styles.statHint}>{summary.streak === 1 ? "day" : "days"}</Text>
              </View>
            </View>
          )}

          <View style={styles.cards}>
            {language === "es" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("SpanishLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Structured lessons, from beginner to advanced.</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.card} onPress={() => navigation.navigate("JapaneseLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Hiragana, katakana, and A1 to B1.</Text>
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

            <Pressable style={styles.card} onPress={() => navigation.navigate("Review", { lang: language })}>
              <Text style={styles.cardTitle}>Review</Text>
              <Text style={styles.cardBody}>Lessons you saved to try again.</Text>
            </Pressable>

            {/* Grammar guides + placement test (Spanish only) -- kept as
                one self-contained row so it's easy to move in a redesign. */}
            {language === "es" && (
              <View style={styles.extraRow}>
                <Pressable style={[styles.card, styles.extraCard]} onPress={() => navigation.navigate("Grammar")}>
                  <Text style={styles.cardTitle}>Grammar</Text>
                  <Text style={styles.cardBody}>Short guides with examples.</Text>
                </Pressable>
                <Pressable style={[styles.card, styles.extraCard]} onPress={() => navigation.navigate("Placement")}>
                  <Text style={styles.cardTitle}>Placement</Text>
                  <Text style={styles.cardBody}>Find your level.</Text>
                </Pressable>
              </View>
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
      <TranslateBar language={language} />
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
  langRow: { flexDirection: "row", gap: 8, justifyContent: "center" },
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
  extraRow: { flexDirection: "row", gap: 14 },
  extraCard: { flex: 1 },
  settingsLink: { alignItems: "center", paddingVertical: 12 },
  settingsLinkText: { color: "#00000066", fontSize: 14, textDecorationLine: "underline" },
});
