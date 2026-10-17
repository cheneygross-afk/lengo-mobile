import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { GERMAN_LANG } from "@/lib/speech";
import { DE_VOCAB_LEVELS, deQueryForms, foldGerman, loadDeLessons, loadDeVocab, type DeLessonRow, type DeVocabRow } from "@/lib/de-tools/data";
import { deVerbPageFor } from "@/lib/de-conjugation/lookup";
import { buildFlashcardEntry, loadFlashcards, makeFlashcardId, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";

type Props = NativeStackScreenProps<AppStackParamList, "GermanGlossary">;

const BRAND = "#8B0000";

type Entry = { row: DeVocabRow; level: string; de: string; en: string };

const ARTICLE = /^(der |die |das |den |dem |ein |eine |einen |sich )/;

/** How well an entry matches one folded form of the query (lower is
 * better), or -1 for no match. Same ranking as the website. */
function rank(e: Entry, q: string): number {
  const bare = e.de.replace(ARTICLE, "");
  if (e.de === q || bare === q) return 0;
  const senses = e.en.split(/;\s*|,\s*/).map((s) => s.replace(/^(to|a|an|the) /, ""));
  if (senses.includes(q.replace(/^(to|a|an|the) /, ""))) return 1;
  if (bare.startsWith(q) || e.de.startsWith(q)) return 2;
  if (new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(e.en)) return 3;
  if (e.de.includes(q)) return 4;
  if (e.en.includes(q)) return 5;
  return -1;
}

/** The best rank over the query's folded forms ("Maedchen" is tried as
 * typed and as "Mädchen"). */
function bestRank(e: Entry, forms: string[]): number {
  let best = -1;
  for (const q of forms) {
    const r = rank(e, q);
    if (r >= 0 && (best < 0 || r < best)) best = r;
  }
  return best;
}

/** The flashcard the website's German glossary saves (DeVocabFlashcards deVocabCard), so a word saved on either side is the same card. */
function deVocabCard(row: DeVocabRow, lesson: DeLessonRow): FlashcardEntry {
  return {
    ...buildFlashcardEntry({
      lessonSlug: lesson[0],
      lessonTitle: lesson[1],
      es: row[0],
      en: row[1],
      level: lesson[3],
      levelPath: `de/${lesson[2]}`,
    }),
    // Part-of-speech guessing only knows Spanish.
    pos: "",
  };
}

// Mobile port of the website's German glossary (/lessons/de/tools/glossary):
// every word and phrase the German lessons teach, searchable in German or
// English (umlauts optional), with the level where it's first taught. The
// word lists are small JSON files synced from the website and loaded when
// the screen opens.
export default function GermanGlossaryScreen({ navigation }: Props) {
  const [data, setData] = useState<{ entries: Entry[]; lessons: DeLessonRow[] } | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [cards, setCards] = useState<Record<string, FlashcardEntry>>({});
  const deferred = useDeferredValue(query);

  useEffect(() => {
    let cancelled = false;
    void loadFlashcards().then((c) => !cancelled && setCards(c));
    Promise.all([loadDeLessons(), ...DE_VOCAB_LEVELS.map((l) => loadDeVocab(l.path))])
      .then(([lessons, ...levels]) => {
        if (cancelled) return;
        const entries = (levels as DeVocabRow[][]).flatMap((rows, i) =>
          rows.map((row) => ({ row, level: DE_VOCAB_LEVELS[i].code, de: foldGerman(row[0]), en: row[1].toLowerCase() }))
        );
        setData({ entries, lessons: lessons as DeLessonRow[] });
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const hits = useMemo(() => {
    const forms = deQueryForms(deferred.trim().replace(/\s+/g, " "));
    if (!data || !forms[0]) return [];
    const scored: { e: Entry; r: number }[] = [];
    for (const e of data.entries) {
      if (level !== "All" && e.level !== level) continue;
      const r = bestRank(e, forms);
      if (r >= 0) scored.push({ e, r });
    }
    scored.sort((a, b) => a.r - b.r || a.e.de.length - b.e.de.length);
    return scored.slice(0, 60).map((s) => s.e);
  }, [data, deferred, level]);

  async function save(e: Entry, lesson: DeLessonRow) {
    const all = await loadFlashcards();
    const card = deVocabCard(e.row, lesson);
    if (!all[card.id]) {
      all[card.id] = card;
      await saveFlashcards(all);
    }
    setCards({ ...all });
  }

  return (
    <FlatList
      style={s.flex}
      contentContainerStyle={s.content}
      keyboardShouldPersistTaps="handled"
      data={data ? hits : []}
      keyExtractor={(e) => `${e.row[0]}|${e.level}`}
      ListHeaderComponent={
        <View>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="German or English (umlauts optional)"
            autoCapitalize="none"
            autoCorrect={false}
            style={s.input}
          />
          <View style={s.chips}>
            {["All", ...DE_VOCAB_LEVELS.map((l) => l.code)].map((lv) => (
              <Pressable key={lv} onPress={() => setLevel(lv)} style={[s.chip, level === lv && s.chipOn]}>
                <Text style={[s.chipText, level === lv && s.chipTextOn]}>{lv === "All" ? "All levels" : lv}</Text>
              </Pressable>
            ))}
          </View>
          {error && <Text style={[s.muted, { marginTop: 14, color: "#b91c1c" }]}>The glossary couldn't be loaded.</Text>}
          {!data && !error && <ActivityIndicator style={{ marginTop: 20 }} color={BRAND} />}
          {data && !deferred.trim() && (
            <Text style={[s.muted, { marginTop: 14 }]}>
              {data.entries.length.toLocaleString()} words and phrases from the German lessons, with the level where
              you first meet each one. Tap a word to hear it. ae, oe, ue and ss work for ä, ö, ü and ß.
            </Text>
          )}
          {data && deferred.trim() !== "" && hits.length === 0 && <Text style={[s.muted, { marginTop: 14 }]}>Nothing found.</Text>}
        </View>
      }
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: e }) => {
        if (!data) return null;
        const lesson = data.lessons[e.row[2]];
        const levelName = DE_VOCAB_LEVELS.find((l) => l.code === e.level)?.name ?? e.level;
        // An infinitive ("fahren", "sich freuen", "anfangen") links to its conjugation tables.
        const verb = /^(sich )?[a-zäöüß]+n$/.test(e.row[0]) ? deVerbPageFor(e.row[0]) : undefined;
        const saved = !!lesson && !!cards[makeFlashcardId(lesson[0], e.row[0])];
        return (
          <View style={s.card}>
            <View style={s.headRow}>
              <TapText text={e.row[0]} lang={GERMAN_LANG} mode="target" style={s.de} />
              <Text style={s.badge}>First met: {levelName}</Text>
            </View>
            <TapText text={e.row[1]} lang={GERMAN_LANG} mode="english" style={[s.meaning, { marginTop: 4 }]} />
            {lesson && (
              <Pressable onPress={() => navigation.navigate("LessonRunner", { slug: lesson[0], levelPath: `de/${lesson[2]}` })}>
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
                <Pressable onPress={() => navigation.navigate("GermanConjugation", { verb: verb.infinitive })} style={s.action}>
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
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  headRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  de: { fontSize: 18, fontWeight: "700", color: "#2A1513", flexShrink: 1 },
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
