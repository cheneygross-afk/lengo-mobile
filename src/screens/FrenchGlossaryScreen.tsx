import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { FRENCH_LANG } from "@/lib/speech";
import { FR_VOCAB_LEVELS, foldFrench, loadFrLessons, loadFrVocab, type FrLessonRow, type FrVocabRow } from "@/lib/fr-tools/data";
import { frVerbPageFor } from "@/lib/fr-conjugation/lookup";
import { buildFlashcardEntry, loadFlashcards, makeFlashcardId, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";

type Props = NativeStackScreenProps<AppStackParamList, "FrenchGlossary">;

const BRAND = "#7A1F1F";

type Entry = { row: FrVocabRow; level: string; fr: string; en: string };

const ARTICLE = /^(le |la |les |l'|un |une |des |du |de la |de l'|se |s')/;

/** How well an entry matches (lower is better), or -1 for no match. Same ranking as the website. */
function rank(e: Entry, q: string): number {
  const bare = e.fr.replace(ARTICLE, "");
  if (e.fr === q || bare === q) return 0;
  const senses = e.en.split(/;\s*|,\s*/).map((s) => s.replace(/^(to|a|an|the) /, ""));
  if (senses.includes(q.replace(/^(to|a|an|the) /, ""))) return 1;
  if (bare.startsWith(q) || e.fr.startsWith(q)) return 2;
  if (new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(e.en)) return 3;
  if (e.fr.includes(q)) return 4;
  if (e.en.includes(q)) return 5;
  return -1;
}

/** The flashcard the website's French glossary saves (FrVocabFlashcards frVocabCard), so a word saved on either side is the same card. */
function frVocabCard(row: FrVocabRow, lesson: FrLessonRow): FlashcardEntry {
  return {
    ...buildFlashcardEntry({
      lessonSlug: lesson[0],
      lessonTitle: lesson[1],
      es: row[0],
      en: row[1],
      level: lesson[3],
      levelPath: `fr/${lesson[2]}`,
    }),
    // Part-of-speech guessing only knows Spanish.
    pos: "",
  };
}

// Mobile port of the website's French glossary (/lessons/fr/tools/glossary):
// every word and phrase the French lessons teach, searchable in French or
// English, with the level where it's first taught. The word lists are small
// JSON files synced from the website and loaded when the screen opens.
export default function FrenchGlossaryScreen({ navigation }: Props) {
  const [data, setData] = useState<{ entries: Entry[]; lessons: FrLessonRow[] } | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [cards, setCards] = useState<Record<string, FlashcardEntry>>({});
  const deferred = useDeferredValue(query);

  useEffect(() => {
    let cancelled = false;
    void loadFlashcards().then((c) => !cancelled && setCards(c));
    Promise.all([loadFrLessons(), ...FR_VOCAB_LEVELS.map((l) => loadFrVocab(l.path))])
      .then(([lessons, ...levels]) => {
        if (cancelled) return;
        const entries = (levels as FrVocabRow[][]).flatMap((rows, i) =>
          rows.map((row) => ({ row, level: FR_VOCAB_LEVELS[i].code, fr: foldFrench(row[0]), en: row[1].toLowerCase() }))
        );
        setData({ entries, lessons: lessons as FrLessonRow[] });
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const hits = useMemo(() => {
    const q = foldFrench(deferred.trim()).replace(/\s+/g, " ");
    if (!data || !q) return [];
    const scored: { e: Entry; r: number }[] = [];
    for (const e of data.entries) {
      if (level !== "All" && e.level !== level) continue;
      const r = rank(e, q);
      if (r >= 0) scored.push({ e, r });
    }
    scored.sort((a, b) => a.r - b.r || a.e.fr.length - b.e.fr.length);
    return scored.slice(0, 60).map((s) => s.e);
  }, [data, deferred, level]);

  async function save(e: Entry, lesson: FrLessonRow) {
    const all = await loadFlashcards();
    const card = frVocabCard(e.row, lesson);
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
            placeholder="French or English (accents optional)"
            autoCapitalize="none"
            autoCorrect={false}
            style={s.input}
          />
          <View style={s.chips}>
            {["All", ...FR_VOCAB_LEVELS.map((l) => l.code)].map((lv) => (
              <Pressable key={lv} onPress={() => setLevel(lv)} style={[s.chip, level === lv && s.chipOn]}>
                <Text style={[s.chipText, level === lv && s.chipTextOn]}>{lv === "All" ? "All levels" : lv}</Text>
              </Pressable>
            ))}
          </View>
          {error && <Text style={[s.muted, { marginTop: 14, color: "#b91c1c" }]}>The glossary couldn't be loaded.</Text>}
          {!data && !error && <ActivityIndicator style={{ marginTop: 20 }} color={BRAND} />}
          {data && !deferred.trim() && (
            <Text style={[s.muted, { marginTop: 14 }]}>
              {data.entries.length.toLocaleString()} words and phrases from the French lessons, with the level where
              you first meet each one. Tap a word to hear it.
            </Text>
          )}
          {data && deferred.trim() !== "" && hits.length === 0 && <Text style={[s.muted, { marginTop: 14 }]}>Nothing found.</Text>}
        </View>
      }
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: e }) => {
        if (!data) return null;
        const lesson = data.lessons[e.row[2]];
        const levelName = FR_VOCAB_LEVELS.find((l) => l.code === e.level)?.name ?? e.level;
        const verb = /^(se |s')?[a-zàâçéèêëîïôûùüÿœ]+(er|ir|re)$/.test(e.row[0]) ? frVerbPageFor(e.row[0]) : undefined;
        const saved = !!lesson && !!cards[makeFlashcardId(lesson[0], e.row[0])];
        return (
          <View style={s.card}>
            <View style={s.headRow}>
              <TapText text={e.row[0]} lang={FRENCH_LANG} mode="target" style={s.fr} />
              <Text style={s.badge}>First met: {levelName}</Text>
            </View>
            <TapText text={e.row[1]} lang={FRENCH_LANG} mode="english" style={[s.meaning, { marginTop: 4 }]} />
            {lesson && (
              <Pressable onPress={() => navigation.navigate("LessonRunner", { slug: lesson[0], levelPath: `fr/${lesson[2]}` })}>
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
                <Pressable onPress={() => navigation.navigate("FrenchConjugation", { verb: verb.infinitive })} style={s.action}>
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
  flex: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 60 },
  input: {
    borderWidth: 1,
    borderColor: "#00000033",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#000",
  },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10, marginBottom: 12 },
  chip: { borderWidth: 1, borderColor: "#00000022", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#fff" },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 13, color: "#000" },
  chipTextOn: { color: "#fff", fontWeight: "700" },
  muted: { fontSize: 14, color: "#00000099" },
  card: { borderWidth: 1, borderColor: "#00000018", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  headRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  fr: { fontSize: 18, fontWeight: "700", color: "#000", flexShrink: 1 },
  badge: {
    fontSize: 11,
    color: "#00000099",
    borderWidth: 1,
    borderColor: "#00000033",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  meaning: { fontSize: 15, color: "#000000cc" },
  source: { fontSize: 13, color: "#00000099", textDecorationLine: "underline", marginTop: 6 },
  actions: { flexDirection: "row", gap: 10, marginTop: 12, flexWrap: "wrap" },
  action: { borderWidth: 1, borderColor: "#00000022", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 7 },
  actionText: { fontSize: 13, color: "#000", fontWeight: "600" },
});
