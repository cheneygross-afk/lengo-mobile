import { useDeferredValue, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { KOREAN_LANG } from "@/lib/speech";
import {
  KO_VOCAB_LEVELS,
  choseong,
  foldKorean,
  isChoseongQuery,
  koIndexLetter,
  loadKoLessons,
  loadKoVocab,
  type KoLessonRow,
  type KoVocabRow,
} from "@/lib/ko-tools/data";
import { koWordBySlug } from "@/lib/ko-conjugation/lookup";
import { buildFlashcardEntry, loadFlashcards, makeFlashcardId, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";
import { loadPrefsLocal } from "@/lib/learnerPrefs";

type Props = NativeStackScreenProps<AppStackParamList, "KoreanGlossary">;

const BRAND = "#8B0000";

type Entry = { row: KoVocabRow; level: string; ko: string; initials: string; en: string };

/** A verb or adjective in its dictionary form ("먹다", "공부하다") glossed
 * as one ("to ..."), which has conjugation tables. */
function verbOf(row: KoVocabRow): string | undefined {
  return /^[가-힣]+다$/.test(row[0]) && /^to /.test(row[1]) ? row[0] : undefined;
}

/** How well an entry matches the query (lower is better), or -1 for no
 * match. Same ranking as the website's KoGlossaryView: `q` is folded, and
 * `initials` is set when the query is only initial consonants (ㅎㄱ for 학교). */
function rank(e: Entry, q: string, initials: boolean): number {
  if (initials) {
    if (e.initials === q) return 0;
    if (e.initials.startsWith(q)) return 2;
    return e.initials.includes(q) ? 4 : -1;
  }
  if (e.ko === q) return 0;
  const senses = e.en.split(/;\s*|,\s*/).map((s) => foldKorean(s.replace(/^(to|a|an|the) /, "")));
  if (senses.includes(q.replace(/^(to|a|an|the)/, ""))) return 1;
  if (e.ko.startsWith(q)) return 2;
  if (new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(e.en)) return 3;
  if (e.ko.includes(q)) return 4;
  if (foldKorean(e.en).includes(q)) return 5;
  return -1;
}

/** The flashcard a vocabulary row becomes: the same card (and id) as the
 * website's KoVocabFlashcards and as starring the word in its lesson, filed
 * in the Korean deck ("ko/<level>"). */
function koVocabCard(row: KoVocabRow, lesson: KoLessonRow): FlashcardEntry {
  return {
    ...buildFlashcardEntry({
      lessonSlug: lesson[0],
      lessonTitle: lesson[1],
      es: row[0],
      en: row[1],
      level: lesson[3],
      levelPath: `ko/${lesson[2]}`,
    }),
    // Part-of-speech guessing only knows Spanish.
    pos: "",
  };
}

const levelLabel = (path: string) => {
  const l = KO_VOCAB_LEVELS.find((x) => x.path === path);
  return !l ? path : l.path === "culture" ? "Culture lessons" : l.topik ? `${l.name} · ${l.topik}` : l.name;
};

// Mobile port of the Korean beta's glossary and vocabulary pages (the
// website's /lessons/ko/tools/glossary and /lessons/ko/tools/vocabulary):
// every word and phrase the lessons teach, searchable in Korean, English or
// by initial consonants (ㅎㄱ finds 학교), with the level where it's first
// met and its lesson. Pick a level without searching to see that level's
// words in 가나다 order and add them all to the Korean flashcards. The word
// lists are small JSON files synced from the website and loaded when the
// screen opens. Every Korean word plays when tapped.
export default function KoreanGlossaryScreen({ navigation, route }: Props) {
  const [data, setData] = useState<{ entries: Entry[]; lessons: KoLessonRow[] } | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState(route.params?.level ?? "all");
  const [cards, setCards] = useState<Record<string, FlashcardEntry>>({});
  const [message, setMessage] = useState<string | null>(null);
  const deferred = useDeferredValue(query);

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params?.level ? "Korean vocabulary" : "Korean glossary" });
  }, [navigation, route.params?.level]);

  useEffect(() => {
    let cancelled = false;
    void loadFlashcards().then((c) => !cancelled && setCards(c));
    Promise.all([loadKoLessons(), ...KO_VOCAB_LEVELS.map((l) => loadKoVocab(l.path))])
      .then(([lessons, ...levels]) => {
        if (cancelled) return;
        const entries = (levels as KoVocabRow[][]).flatMap((rows, i) =>
          rows.map((row) => ({
            row,
            level: KO_VOCAB_LEVELS[i].path,
            ko: foldKorean(row[0]),
            initials: choseong(row[0]),
            en: row[1].toLowerCase(),
          }))
        );
        setData({ entries, lessons: lessons as KoLessonRow[] });
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const raw = deferred.trim().normalize("NFC");
  const initials = isChoseongQuery(raw);
  const q = initials ? raw.replace(/\s/g, "") : foldKorean(raw);
  // A level picked with nothing typed: that level's words, in 가나다 order.
  const browsing = !q && level !== "all";

  const hits = useMemo(() => {
    if (!data) return [];
    if (!q) return level === "all" ? [] : data.entries.filter((e) => e.level === level);
    const scored: { e: Entry; r: number }[] = [];
    for (const e of data.entries) {
      if (level !== "all" && e.level !== level) continue;
      const r = rank(e, q, initials);
      if (r >= 0) scored.push({ e, r });
    }
    // Best match first, then shorter (more basic) entries.
    scored.sort((a, b) => a.r - b.r || a.e.ko.length - b.e.ko.length);
    return scored.slice(0, 60).map((s) => s.e);
  }, [data, q, initials, level]);

  const idOf = (e: Entry) => (data ? makeFlashcardId(data.lessons[e.row[2]][0], e.row[0]) : "");
  const levelSaved = browsing ? hits.filter((e) => !!cards[idOf(e)]).length : 0;

  async function save(e: Entry, lesson: KoLessonRow) {
    const all = await loadFlashcards();
    const card = koVocabCard(e.row, lesson);
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
      const card = koVocabCard(e.row, lesson);
      if (all[card.id]) continue;
      all[card.id] = card;
      added++;
    }
    await saveFlashcards(all);
    setCards({ ...all });
    const perDay = (await loadPrefsLocal()).newCardsPerDay;
    setMessage(
      `Added ${added.toLocaleString()} words to your Korean flashcards` +
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
            onChangeText={(t) => setQuery(t.normalize("NFC"))}
            placeholder="Korean or English, e.g. 눈치, ㅎㄱ, to look for"
            autoCapitalize="none"
            autoCorrect={false}
            style={s.input}
          />
          <View style={s.chips}>
            {["all", ...KO_VOCAB_LEVELS.map((l) => l.path)].map((lv) => (
              <Pressable
                key={lv}
                onPress={() => {
                  setLevel(lv);
                  setMessage(null);
                }}
                style={[s.chip, level === lv && s.chipOn]}
              >
                <Text style={[s.chipText, level === lv && s.chipTextOn]}>
                  {lv === "all" ? "All levels" : lv === "culture" ? "Culture" : KO_VOCAB_LEVELS.find((l) => l.path === lv)?.name}
                </Text>
              </Pressable>
            ))}
          </View>
          {error && <Text style={[s.muted, { marginTop: 14, color: "#b91c1c" }]}>The glossary couldn&apos;t be loaded.</Text>}
          {!data && !error && <ActivityIndicator style={{ marginTop: 20 }} color={BRAND} />}
          {data && !q && level === "all" && (
            <TapText
              text={`${data.entries.length.toLocaleString()} words and phrases from the Korean lessons, with the level where you first meet each one and the lesson it comes from. Search in Korean or English, or by initial consonants: ㅎㄱ finds 학교. Pick a level to see its words in 가나다 order.`}
              lang={KOREAN_LANG}
              style={[s.muted, { marginTop: 14 }]}
            />
          )}
          {data && browsing && (
            <View style={s.levelBox}>
              <Text style={s.levelTitle}>
                {levelLabel(level)} vocabulary · {hits.length.toLocaleString()} words
              </Text>
              <Text style={s.muted}>
                Add them to your Korean flashcards and spaced repetition brings them up a few a day.
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
      renderItem={({ item: e, index }) => {
        if (!data) return null;
        const lesson = data.lessons[e.row[2]];
        const verb = verbOf(e.row);
        const conjugable = verb && koWordBySlug(verb);
        const saved = !!lesson && !!cards[makeFlashcardId(lesson[0], e.row[0])];
        // Browsing a level: a heading at each new initial consonant (ㄱ, ㄴ ...).
        const letter = browsing ? koIndexLetter(e.row[0]) : null;
        const newLetter = browsing && (index === 0 || koIndexLetter(hits[index - 1].row[0]) !== letter);
        return (
          <View>
            {newLetter ? <Text style={s.letter}>{letter}</Text> : null}
            <View style={s.card}>
              <View style={s.headRow}>
                <TapText text={e.row[0]} lang={KOREAN_LANG} mode="target" style={s.ko} />
                {!browsing && <Text style={s.badge}>{e.level === "culture" ? "Culture lessons" : `First met: ${levelLabel(e.level).split(" · ")[0]}`}</Text>}
              </View>
              <TapText text={e.row[1]} lang={KOREAN_LANG} mode="english" style={[s.meaning, { marginTop: 4 }]} />
              {lesson && (
                <Pressable onPress={() => navigation.navigate("LessonRunner", { slug: lesson[0], levelPath: `ko/${lesson[2]}` })}>
                  <Text style={s.source}>{lesson[1]}</Text>
                </Pressable>
              )}
              <View style={s.actions}>
                {lesson && (
                  <Pressable onPress={() => void save(e, lesson)} disabled={saved} style={[s.action, saved && { opacity: 0.6 }]}>
                    <Text style={s.actionText}>{saved ? "Saved to flashcards" : "Save to flashcards"}</Text>
                  </Pressable>
                )}
                {conjugable && (
                  <Pressable onPress={() => navigation.navigate("KoreanConjugation", { verb: verb })} style={s.action}>
                    <Text style={s.actionText}>Conjugate</Text>
                  </Pressable>
                )}
              </View>
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
  muted: { fontSize: 14, color: "#2A151399", lineHeight: 20 },
  levelBox: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff", marginBottom: 12, gap: 6 },
  levelTitle: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  levelBtn: { alignSelf: "flex-start", backgroundColor: "#2A1513", borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, marginTop: 4 },
  levelBtnText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  letter: { fontSize: 18, fontWeight: "800", color: "#2A1513", marginTop: 8, marginBottom: 8 },
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  headRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  ko: { fontSize: 19, fontWeight: "700", color: "#2A1513", flexShrink: 1 },
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
