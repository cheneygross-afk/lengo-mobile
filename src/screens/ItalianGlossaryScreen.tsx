import { useDeferredValue, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { ITALIAN_LANG, speak } from "@/lib/speech";
import { IT_VOCAB_LEVELS, foldItalian, itLevelLabel, loadItLessons, loadItVocab, type ItLessonRow, type ItVocabRow } from "@/lib/it-tools/data";
import { IT_FALSE_FRIENDS, IT_GRAMMAR_TERMS } from "@/lib/it-tools/glossaryTerms";
import { buildFlashcardEntry, loadFlashcards, makeFlashcardId, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";
import { loadPrefsLocal } from "@/lib/learnerPrefs";

type Props = NativeStackScreenProps<AppStackParamList, "ItalianGlossary">;
type Section = "words" | "terms" | "falseFriends";

const BRAND = "#8B0000";
const LANG = ITALIAN_LANG;

type Entry = { row: ItVocabRow; level: string; it: string; en: string };

const ARTICLE = /^(?:il |lo |la |i |gli |le |un |uno |una |l'|un'|gl')/;

/** An infinitive ("parlare", "tradurre", "alzarsi") glossed as a verb
 * ("to ..."), which has conjugation tables (the website's ItGlossaryView). */
function verbOf(row: ItVocabRow): string | undefined {
  return /^[a-z]+(?:are|ere|ire|rre|arsi|ersi|irsi|rsi)$/.test(row[0]) && /^to /.test(row[1]) ? row[0] : undefined;
}

/** How well an entry matches the folded query (lower is better), or -1
 * for no match. Same ranking as the website's ItGlossaryView. */
function rank(e: Entry, q: string): number {
  const bare = e.it.replace(ARTICLE, "");
  if (e.it === q || bare === q) return 0;
  const senses = e.en.split(/;\s*|,\s*/).map((s) => s.replace(/^(to|a|an|the) /, ""));
  if (senses.includes(q.replace(/^(to|a|an|the) /, ""))) return 1;
  if (bare.startsWith(q) || e.it.startsWith(q)) return 2;
  if (new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(e.en)) return 3;
  if (e.it.includes(q)) return 4;
  if (e.en.includes(q)) return 5;
  return -1;
}

/** The flashcard a vocabulary row becomes: the same card (and id) as the
 * website's ItVocabFlashcards and as starring the word in its lesson, filed
 * in the Italian deck ("it/<level>"). */
function itVocabCard(row: ItVocabRow, lesson: ItLessonRow): FlashcardEntry {
  return {
    ...buildFlashcardEntry({
      lessonSlug: lesson[0],
      lessonTitle: lesson[1],
      es: row[0],
      en: row[1],
      level: lesson[3],
      levelPath: `it/${lesson[2]}`,
    }),
    // Part-of-speech guessing only knows Spanish.
    pos: "",
  };
}

/** "Beginner · CILS A1", "Italian Culture & Everyday Life": levels by name, never by code. */
const levelLabel = (path: string) => {
  const l = IT_VOCAB_LEVELS.find((x) => x.path === path);
  return l ? itLevelLabel(l) : path;
};
const levelName = (path: string) => {
  const l = IT_VOCAB_LEVELS.find((x) => x.path === path);
  return !l ? path : l.path === "culture" ? "Culture" : l.name;
};

const SECTIONS: { id: Section; label: string }[] = [
  { id: "words", label: "Words" },
  { id: "terms", label: `Grammar terms` },
  { id: "falseFriends", label: `False friends` },
];

// Mobile port of the Italian course's glossary and vocabulary pages (the
// website's /lessons/it/tools/glossary and /lessons/it/tools/vocabulary):
// every word and phrase the lessons teach, searchable in Italian or English
// (accents optional), with the level where it's first met and its lesson.
// Pick a level without searching to see that level's words A to Z and add
// them all to the Italian flashcards (Vocabulary by Level opens here on
// Beginner). The glossary page's two hand-written lists, the grammar terms
// and the false friends, are the other two tabs. The word lists are small
// JSON files synced from the website and loaded when the screen opens.
export default function ItalianGlossaryScreen({ navigation, route }: Props) {
  const [section, setSection] = useState<Section>(route.params?.section ?? "words");
  const vocabulary = !!route.params?.level;

  useLayoutEffect(() => {
    navigation.setOptions({ title: vocabulary ? "Italian vocabulary" : "Italian glossary" });
  }, [navigation, vocabulary]);

  const tabs = vocabulary ? null : (
    <View style={s.tabs}>
      {SECTIONS.map((t) => (
        <Pressable key={t.id} onPress={() => setSection(t.id)} style={[s.tab, section === t.id && s.tabOn]}>
          <Text style={[s.tabText, section === t.id && s.tabTextOn]} numberOfLines={1}>
            {t.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  return (
    <View style={s.flex}>
      {tabs}
      {section === "terms" && !vocabulary ? (
        <GrammarTerms onGuides={() => navigation.navigate("Grammar", { lang: "it" })} />
      ) : section === "falseFriends" && !vocabulary ? (
        <FalseFriends />
      ) : (
        <Words navigation={navigation} initialLevel={route.params?.level ?? "all"} />
      )}
    </View>
  );
}

function Words({ navigation, initialLevel }: { navigation: Props["navigation"]; initialLevel: string }) {
  const [data, setData] = useState<{ entries: Entry[]; lessons: ItLessonRow[] } | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState(initialLevel);
  const [cards, setCards] = useState<Record<string, FlashcardEntry>>({});
  const [message, setMessage] = useState<string | null>(null);
  const deferred = useDeferredValue(query);

  useEffect(() => {
    let cancelled = false;
    void loadFlashcards().then((c) => !cancelled && setCards(c));
    Promise.all([loadItLessons(), ...IT_VOCAB_LEVELS.map((l) => loadItVocab(l.path))])
      .then(([lessons, ...levels]) => {
        if (cancelled) return;
        const entries = (levels as ItVocabRow[][]).flatMap((rows, i) =>
          rows.map((row) => ({ row, level: IT_VOCAB_LEVELS[i].path, it: foldItalian(row[0]), en: row[1].toLowerCase() }))
        );
        setData({ entries, lessons: lessons as ItLessonRow[] });
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const q = foldItalian(deferred.trim().replace(/\s+/g, " "));
  // A level picked with nothing typed: that level's words, A to Z.
  const browsing = !q && level !== "all";

  const hits = useMemo(() => {
    if (!data) return [];
    if (!q) return level === "all" ? [] : data.entries.filter((e) => e.level === level);
    const scored: { e: Entry; r: number }[] = [];
    for (const e of data.entries) {
      if (level !== "all" && e.level !== level) continue;
      const r = rank(e, q);
      if (r >= 0) scored.push({ e, r });
    }
    // Best match first, then shorter (more basic) entries.
    scored.sort((a, b) => a.r - b.r || a.e.it.length - b.e.it.length);
    return scored.slice(0, 60).map((s) => s.e);
  }, [data, q, level]);

  const idOf = (e: Entry) => (data ? makeFlashcardId(data.lessons[e.row[2]][0], e.row[0]) : "");
  const levelSaved = browsing ? hits.filter((e) => !!cards[idOf(e)]).length : 0;

  async function save(e: Entry, lesson: ItLessonRow) {
    const all = await loadFlashcards();
    const card = itVocabCard(e.row, lesson);
    if (!all[card.id]) {
      all[card.id] = card;
      await saveFlashcards(all);
    }
    setCards({ ...all });
  }

  // "Add all of this level's words to my flashcards", as on the website's
  // vocabulary pages.
  async function saveLevel() {
    if (!data) return;
    const all = await loadFlashcards();
    let added = 0;
    for (const e of hits) {
      const lesson = data.lessons[e.row[2]];
      if (!lesson) continue;
      const card = itVocabCard(e.row, lesson);
      if (all[card.id]) continue;
      all[card.id] = card;
      added++;
    }
    await saveFlashcards(all);
    setCards({ ...all });
    const perDay = (await loadPrefsLocal()).newCardsPerDay;
    setMessage(
      `Added ${added.toLocaleString()} words to your Italian flashcards` +
        (added < hits.length ? ` (${(hits.length - added).toLocaleString()} you already had were skipped)` : "") +
        (perDay === "unlimited" ? "." : `. New cards come up ${perDay} a day.`)
    );
  }

  return (
    <FlatList
      style={s.flex}
      contentContainerStyle={s.content}
      keyboardShouldPersistTaps="handled"
      data={data ? hits : []}
      keyExtractor={(e) => `${e.row[0]}|${e.level}`}
      initialNumToRender={20}
      ListHeaderComponent={
        <View>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Italian or English, e.g. magari, citta, to look for"
            autoCapitalize="none"
            autoCorrect={false}
            style={s.input}
          />
          <View style={s.chips}>
            {["all", ...IT_VOCAB_LEVELS.map((l) => l.path)].map((lv) => (
              <Pressable
                key={lv}
                onPress={() => {
                  setLevel(lv);
                  setMessage(null);
                }}
                style={[s.chip, level === lv && s.chipOn]}
              >
                <Text style={[s.chipText, level === lv && s.chipTextOn]}>{lv === "all" ? "All levels" : levelName(lv)}</Text>
              </Pressable>
            ))}
          </View>
          {error && <Text style={[s.muted, { marginTop: 14, color: "#b91c1c" }]}>The glossary couldn&apos;t be loaded.</Text>}
          {!data && !error && <ActivityIndicator style={{ marginTop: 20 }} color={BRAND} />}
          {data && !q && level === "all" && (
            <Text style={[s.muted, { marginTop: 14 }]}>
              {data.entries.length.toLocaleString()} words and phrases from the Italian lessons, with the level where you first meet
              each one and the lesson it comes from. Tap a word to hear it; perche finds perché. Pick a level to see its words A to Z.
            </Text>
          )}
          {data && browsing && (
            <View style={s.levelBox}>
              <Text style={s.levelTitle}>
                {levelLabel(level)} vocabulary · {hits.length.toLocaleString()} words
              </Text>
              <Text style={s.muted}>
                Add them to your Italian flashcards and spaced repetition brings them up a few a day.
                {levelSaved > 0 ? ` ${levelSaved.toLocaleString()} of these are in your flashcards.` : ""}
              </Text>
              <Pressable
                onPress={() => void saveLevel()}
                disabled={levelSaved >= hits.length}
                style={[s.levelBtn, levelSaved >= hits.length && { opacity: 0.5 }]}
              >
                <Text style={s.levelBtnText}>{levelSaved > 0 ? "Add missing words" : "Add to my flashcards"}</Text>
              </Pressable>
              {message && <Text style={[s.muted, { marginTop: 8 }]}>{message}</Text>}
            </View>
          )}
          {data && q !== "" && hits.length === 0 && <Text style={[s.muted, { marginTop: 14 }]}>Nothing found.</Text>}
        </View>
      }
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: e }) => {
        if (!data) return null;
        const lesson = data.lessons[e.row[2]];
        const verb = verbOf(e.row);
        const saved = !!lesson && !!cards[makeFlashcardId(lesson[0], e.row[0])];
        return (
          <View style={s.card}>
            <View style={s.headRow}>
              <TapText text={e.row[0]} lang={LANG} mode="target" style={s.it} />
              {!browsing && <Text style={s.badge}>{e.level === "culture" ? "Culture module" : `First met: ${levelName(e.level)}`}</Text>}
            </View>
            <TapText text={e.row[1]} lang={LANG} mode="english" style={[s.meaning, { marginTop: 4 }]} />
            {lesson && (
              <Pressable onPress={() => navigation.navigate("LessonRunner", { slug: lesson[0], levelPath: `it/${lesson[2]}` })}>
                <Text style={s.source}>{lesson[1]}</Text>
              </Pressable>
            )}
            <View style={s.actions}>
              {lesson && (
                <Pressable onPress={() => void save(e, lesson)} disabled={saved} style={[s.action, saved && { opacity: 0.6 }]}>
                  <Text style={s.actionText}>{saved ? "Saved to flashcards" : "Save to flashcards"}</Text>
                </Pressable>
              )}
              {verb && (
                <Pressable onPress={() => navigation.navigate("ItalianConjugation", { verb })} style={s.action}>
                  <Text style={s.actionText}>Conjugate</Text>
                </Pressable>
              )}
            </View>
          </View>
        );
      }}
    />
  );
}

// The glossary page's grammar terms: the words the lessons and grammar
// guides use, with the name Italian grammars give them.
function GrammarTerms({ onGuides }: { onGuides: () => void }) {
  return (
    <ScrollView style={s.flex} contentContainerStyle={s.content}>
      <Text style={s.muted}>
        The words the lessons and{" "}
        <Text style={s.inlineLink} onPress={onGuides}>
          grammar guides
        </Text>{" "}
        use, with the name Italian grammars give them. Tap any Italian to hear it.
      </Text>
      <View style={{ gap: 16, marginTop: 16 }}>
        {IT_GRAMMAR_TERMS.map((t) => (
          <View key={t.term}>
            <Text style={s.term}>
              {t.term}
              <Text style={s.termIt} onPress={() => speak(t.it, LANG)}>
                {" · "}
                {t.it}
              </Text>
            </Text>
            <TapText text={t.def} lang={LANG} mode="mixed" style={[s.def, { marginTop: 4 }]} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// The glossary page's false friends: what each really means, the Italian
// for the English look-alike, and an example. Every Italian part speaks.
function FalseFriends() {
  return (
    <ScrollView style={s.flex} contentContainerStyle={s.content}>
      <Text style={s.muted}>
        Italian words that look like English ones but mean something else. Each one with what it really means, the Italian for the English
        look-alike, and an example. Tap the Italian to hear it.
      </Text>
      <View style={{ gap: 10, marginTop: 16 }}>
        {IT_FALSE_FRIENDS.map((f) => (
          <View key={f.it} style={s.card}>
            <Text style={s.meaning}>
              <Text style={s.it} onPress={() => speak(f.it, LANG)}>
                {f.it}
              </Text>{" "}
              = {f.means}
            </Text>
            <Text style={[s.muted, { marginTop: 4 }]}>
              Not “{f.notEn}”, which is{" "}
              <Text style={s.spoken} onPress={() => speak(f.notIt, LANG)}>
                {f.notIt}
              </Text>
              .
            </Text>
            <Text style={[s.def, { marginTop: 8 }]}>
              <Text style={s.spoken} onPress={() => speak(f.ex, LANG)}>
                {f.ex}
              </Text>{" "}
              <Text style={s.muted}>{f.exEn}</Text>
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { padding: 20, paddingBottom: 60 },
  tabs: { flexDirection: "row", gap: 8, paddingHorizontal: 20, paddingTop: 12, backgroundColor: "#FAF7F2" },
  tab: { flex: 1, borderWidth: 1.5, borderColor: `${BRAND}33`, borderRadius: 999, paddingVertical: 8, alignItems: "center", backgroundColor: "#fff" },
  tabOn: { backgroundColor: BRAND, borderColor: BRAND },
  tabText: { fontSize: 13, fontWeight: "700", color: BRAND },
  tabTextOn: { color: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#2A151333",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#2A1513",
  },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10, marginBottom: 12 },
  chip: { borderWidth: 1, borderColor: "#2A151322", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#fff" },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 13, color: "#2A1513" },
  chipTextOn: { color: "#fff", fontWeight: "700" },
  muted: { fontSize: 14, color: "#2A151399", lineHeight: 20 },
  levelBox: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff", marginBottom: 12, gap: 6 },
  levelTitle: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  levelBtn: { alignSelf: "flex-start", backgroundColor: "#2A1513", borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, marginTop: 4 },
  levelBtnText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  headRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  it: { fontSize: 18, fontWeight: "700", color: "#2A1513", flexShrink: 1 },
  badge: {
    fontSize: 11,
    color: "#2A151399",
    borderWidth: 1,
    borderColor: "#2A151333",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  meaning: { fontSize: 15, color: "#2A1513cc" },
  source: { fontSize: 13, color: "#2A151399", textDecorationLine: "underline", marginTop: 6 },
  actions: { flexDirection: "row", gap: 10, marginTop: 12, flexWrap: "wrap" },
  action: { borderWidth: 1, borderColor: "#2A151322", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 7 },
  actionText: { fontSize: 13, color: "#2A1513", fontWeight: "600" },
  inlineLink: { textDecorationLine: "underline", color: "#2A1513" },
  term: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  termIt: { fontWeight: "400", color: "#2A151399" },
  def: { fontSize: 14, lineHeight: 20, color: "#2A1513cc" },
  spoken: { color: "#2A1513", textDecorationLine: "underline", textDecorationStyle: "dotted" },
});
