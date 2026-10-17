import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { PORTUGUESE_LANG } from "@/lib/speech";
import { PT_VOCAB_LEVELS, foldPortuguese, loadPtLessons, loadPtVocab, type PtLessonRow, type PtVocabRow } from "@/lib/pt-tools/data";
import { ptVerbPageFor } from "@/lib/pt-conjugation/lookup";
import { buildFlashcardEntry, loadFlashcards, makeFlashcardId, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";
import { loadPrefsLocal } from "@/lib/learnerPrefs";

type Props = NativeStackScreenProps<AppStackParamList, "PortugueseGlossary">;

const BRAND = "#8B0000";

type Entry = { row: PtVocabRow; level: string; pt: string; en: string };

const ARTICLE = /^(o |a |os |as |um |uma |uns |umas )/;

/** An infinitive ("falar", "comer", "pôr", "levantar-se") glossed as a verb
 * ("to ..."), as the website's glossary finds them. */
function isVerb(row: PtVocabRow): boolean {
  return /^[a-zà-ÿ]+(?:ar|er|ir|or|ôr)(?:-se)?$/.test(row[0]) && /^to /.test(row[1]);
}

/** How well an entry matches the folded query (lower is better), or -1
 * for no match. Same ranking as the website's PtGlossaryView. */
function rank(e: Entry, q: string): number {
  const bare = e.pt.replace(ARTICLE, "");
  if (e.pt === q || bare === q) return 0;
  const senses = e.en.split(/;\s*|,\s*/).map((s) => s.replace(/^(to|a|an|the) /, ""));
  if (senses.includes(q.replace(/^(to|a|an|the) /, ""))) return 1;
  if (bare.startsWith(q) || e.pt.startsWith(q)) return 2;
  if (new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(e.en)) return 3;
  if (e.pt.includes(q)) return 4;
  if (e.en.includes(q)) return 5;
  return -1;
}

/** The flashcard the website's Portuguese glossary and vocabulary pages save
 * (PtVocabFlashcards ptVocabCard), so a word saved on either side is the
 * same card, filed in the Portuguese deck ("pt/<level>"). */
function ptVocabCard(row: PtVocabRow, lesson: PtLessonRow): FlashcardEntry {
  return {
    ...buildFlashcardEntry({
      lessonSlug: lesson[0],
      lessonTitle: lesson[1],
      es: row[0],
      en: row[1],
      level: lesson[3],
      levelPath: `pt/${lesson[2]}`,
    }),
    // Part-of-speech guessing only knows Spanish.
    pos: "",
  };
}

// Mobile port of the Brazilian Portuguese beta's glossary and vocabulary
// pages (/lessons/pt/tools/glossary, /lessons/pt/tools/vocabulary): every
// word and phrase the lessons teach, searchable in Portuguese or English
// (accents optional), with the level where it's first taught. Pick a level
// without searching to see that level's words A to Z and add them all to
// the Portuguese flashcards. The word lists are small JSON files synced
// from the website and loaded when the screen opens.
export default function PortugueseGlossaryScreen({ navigation }: Props) {
  const [data, setData] = useState<{ entries: Entry[]; lessons: PtLessonRow[] } | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [cards, setCards] = useState<Record<string, FlashcardEntry>>({});
  const [message, setMessage] = useState<string | null>(null);
  const deferred = useDeferredValue(query);

  useEffect(() => {
    let cancelled = false;
    void loadFlashcards().then((c) => !cancelled && setCards(c));
    Promise.all([loadPtLessons(), ...PT_VOCAB_LEVELS.map((l) => loadPtVocab(l.path))])
      .then(([lessons, ...levels]) => {
        if (cancelled) return;
        const entries = (levels as PtVocabRow[][]).flatMap((rows, i) =>
          rows.map((row) => ({ row, level: PT_VOCAB_LEVELS[i].code, pt: foldPortuguese(row[0]), en: row[1].toLowerCase() }))
        );
        setData({ entries, lessons: lessons as PtLessonRow[] });
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const q = foldPortuguese(deferred.trim().replace(/\s+/g, " "));
  // A level picked with nothing typed: that level's words, A to Z.
  const browsing = !q && level !== "All";

  const hits = useMemo(() => {
    if (!data) return [];
    if (!q) return level === "All" ? [] : data.entries.filter((e) => e.level === level);
    const scored: { e: Entry; r: number }[] = [];
    for (const e of data.entries) {
      if (level !== "All" && e.level !== level) continue;
      const r = rank(e, q);
      if (r >= 0) scored.push({ e, r });
    }
    // Best match first, then shorter (more basic) entries.
    scored.sort((a, b) => a.r - b.r || a.e.pt.length - b.e.pt.length);
    return scored.slice(0, 60).map((s) => s.e);
  }, [data, q, level]);

  const idOf = (e: Entry) => (data ? makeFlashcardId(data.lessons[e.row[2]][0], e.row[0]) : "");
  const levelSaved = browsing ? hits.filter((e) => !!cards[idOf(e)]).length : 0;

  async function save(e: Entry, lesson: PtLessonRow) {
    const all = await loadFlashcards();
    const card = ptVocabCard(e.row, lesson);
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
      const card = ptVocabCard(e.row, lesson);
      if (all[card.id]) continue;
      all[card.id] = card;
      added++;
    }
    await saveFlashcards(all);
    setCards({ ...all });
    const perDay = (await loadPrefsLocal()).newCardsPerDay;
    setMessage(
      `Added ${added.toLocaleString()} words to your Portuguese flashcards` +
        (added < hits.length ? ` (${(hits.length - added).toLocaleString()} you already had were skipped)` : "") +
        (perDay === "unlimited" ? "." : `. New cards come up ${perDay} a day.`)
    );
  }

  const levelName = (code: string) => PT_VOCAB_LEVELS.find((l) => l.code === code)?.name ?? code;

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
            placeholder="Portuguese or English (accents optional)"
            autoCapitalize="none"
            autoCorrect={false}
            style={s.input}
          />
          <View style={s.chips}>
            {["All", ...PT_VOCAB_LEVELS.map((l) => l.code)].map((lv) => (
              <Pressable
                key={lv}
                onPress={() => {
                  setLevel(lv);
                  setMessage(null);
                }}
                style={[s.chip, level === lv && s.chipOn]}
              >
                <Text style={[s.chipText, level === lv && s.chipTextOn]}>{lv === "All" ? "All levels" : lv}</Text>
              </Pressable>
            ))}
          </View>
          {error && <Text style={[s.muted, { marginTop: 14, color: "#b91c1c" }]}>The glossary couldn&apos;t be loaded.</Text>}
          {!data && !error && <ActivityIndicator style={{ marginTop: 20 }} color={BRAND} />}
          {data && !q && level === "All" && (
            <Text style={[s.muted, { marginTop: 14 }]}>
              {data.entries.length.toLocaleString()} words and phrases from the Portuguese lessons, with the level where you
              first meet each one. Tap a word to hear it; voce finds você. Pick a level to see its words A to Z.
            </Text>
          )}
          {data && browsing && (
            <View style={s.levelBox}>
              <Text style={s.levelTitle}>
                {levelName(level)} vocabulary · {hits.length.toLocaleString()} words
              </Text>
              <Text style={s.muted}>
                Add them to your Portuguese flashcards and spaced repetition brings them up a few a day.
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
        // An infinitive ("falar", "levantar-se") links to its conjugation tables.
        const verb = isVerb(e.row) ? ptVerbPageFor(e.row[0]) : undefined;
        const saved = !!lesson && !!cards[makeFlashcardId(lesson[0], e.row[0])];
        return (
          <View style={s.card}>
            <View style={s.headRow}>
              <TapText text={e.row[0]} lang={PORTUGUESE_LANG} mode="target" style={s.pt} />
              <Text style={s.badge}>First met: {levelName(e.level)}</Text>
            </View>
            <TapText text={e.row[1]} lang={PORTUGUESE_LANG} mode="english" style={[s.meaning, { marginTop: 4 }]} />
            {lesson && (
              <Pressable onPress={() => navigation.navigate("LessonRunner", { slug: lesson[0], levelPath: `pt/${lesson[2]}` })}>
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
                <Pressable onPress={() => navigation.navigate("PortugueseConjugation", { verb: verb.infinitive })} style={s.action}>
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

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { padding: 20, paddingBottom: 60 },
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
  muted: { fontSize: 14, color: "#2A151399" },
  levelBox: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff", marginBottom: 12, gap: 6 },
  levelTitle: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  levelBtn: { alignSelf: "flex-start", backgroundColor: "#2A1513", borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, marginTop: 4 },
  levelBtnText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  headRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  pt: { fontSize: 18, fontWeight: "700", color: "#2A1513", flexShrink: 1 },
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
});
