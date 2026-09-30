import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { SPANISH_LANG } from "@/lib/speech";
import { GLOSSARY_ENTRIES, GLOSSARY_SOURCES } from "@/lib/glossary/data";
import { makeGlossary, sourceLabel, type GlossaryHit } from "@/lib/glossary/search";
import { specFor } from "@/lib/conjugation/conjugate";
import {
  buildCustomFlashcardEntry,
  buildFlashcardEntry,
  loadFlashcards,
  makeFlashcardId,
  saveFlashcards,
  type FlashcardEntry,
} from "@/lib/flashcards/store";

type Props = NativeStackScreenProps<AppStackParamList, "Glossary">;

const BRAND = "#7A1F1F";
const LEVELS = ["All", "A1", "A2", "B1", "B2", "C1", "C2"];

function verbOf(es: string): string | null {
  const w = es.trim().toLowerCase();
  if (!/^[a-záéíóúñ]+$/.test(w)) return null;
  return specFor(w.endsWith("se") ? w.slice(0, -2) : w) ? w : null;
}

function cardId(e: GlossaryHit): string {
  const src = e.sources[0];
  return src ? makeFlashcardId(src.slug, e.es) : `glossary::${e.es.toLowerCase()}`;
}

// Mobile port of the website's /glossary page: every word and phrase the
// lessons and stories teach, searchable in Spanish or English.
export default function GlossaryScreen({ navigation }: Props) {
  const glossary = useMemo(() => makeGlossary(GLOSSARY_SOURCES, GLOSSARY_ENTRIES), []);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [cards, setCards] = useState<Record<string, FlashcardEntry>>({});
  const deferred = useDeferredValue(query);

  useEffect(() => {
    void loadFlashcards().then(setCards);
  }, []);

  const hits = useMemo(() => {
    if (!deferred.trim()) return [];
    const all = glossary.search(deferred, 200);
    return (level === "All" ? all : all.filter((e) => e.level === level || (level === "C1" && e.level === "C1/C2"))).slice(0, 60);
  }, [glossary, deferred, level]);

  async function save(e: GlossaryHit) {
    const all = await loadFlashcards();
    const id = cardId(e);
    if (!all[id]) {
      const en = e.senses.join("; ");
      const src = e.sources[0];
      all[id] = src
        ? buildFlashcardEntry({
            lessonSlug: src.slug,
            lessonTitle: src.title,
            es: e.es,
            en,
            // Flashcards group by lesson level, which has no "C1/C2" for stories.
            level: src.kind === "story" && src.level === "C1/C2" ? "C1" : src.level,
            levelPath: src.levelPath,
          })
        : { ...buildCustomFlashcardEntry({ es: e.es, en, level: e.level, note: "Glossary" }), id };
      await saveFlashcards(all);
    }
    setCards({ ...all });
  }

  return (
    <FlatList
      style={s.flex}
      contentContainerStyle={s.content}
      keyboardShouldPersistTaps="handled"
      data={hits}
      keyExtractor={(e) => `${e.es}|${e.level}`}
      ListHeaderComponent={
        <View>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Spanish or English (accents optional)"
            autoCapitalize="none"
            autoCorrect={false}
            style={s.input}
          />
          <View style={s.chips}>
            {LEVELS.map((lv) => (
              <Pressable key={lv} onPress={() => setLevel(lv)} style={[s.chip, level === lv && s.chipOn]}>
                <Text style={[s.chipText, level === lv && s.chipTextOn]}>{lv === "All" ? "All levels" : lv}</Text>
              </Pressable>
            ))}
          </View>
          {!deferred.trim() && (
            <Text style={[s.muted, { marginTop: 14 }]}>
              {glossary.entries.length.toLocaleString()} words and phrases from the lessons and stories, with the level
              where you first meet each one. Tap a word to hear it.
            </Text>
          )}
          {deferred.trim() !== "" && hits.length === 0 && <Text style={[s.muted, { marginTop: 14 }]}>Nothing found.</Text>}
        </View>
      }
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: e }) => {
        const verb = verbOf(e.es);
        const saved = !!cards[cardId(e)];
        return (
          <View style={s.card}>
            <View style={s.headRow}>
              <TapText text={e.es} lang={SPANISH_LANG} mode="target" style={s.es} />
              <Text style={s.badge}>First met: {e.level}</Text>
            </View>
            {e.formOf && e.formOf !== e.es ? (
              <Text style={s.small}>
                <TapText text={deferred.trim()} lang={SPANISH_LANG} mode="target" /> is a form of{" "}
                <TapText text={e.formOf} lang={SPANISH_LANG} mode="target" />
              </Text>
            ) : null}
            <Text style={[s.meaning, { marginTop: 4 }]}>
              {e.def ? <Text style={s.small}>(definición) </Text> : null}
              <TapText text={e.senses.join("; ")} lang={SPANISH_LANG} mode={e.def ? "target" : "english"} style={s.meaning} />
            </Text>
            {e.sources.map((src) => (
              <Pressable
                key={`${src.kind}:${src.slug}`}
                onPress={() =>
                  src.kind === "lesson"
                    ? navigation.navigate("LessonRunner", { slug: src.slug })
                    : navigation.navigate("StoryReader", { slug: src.slug })
                }
              >
                <Text style={s.source}>{sourceLabel(src)}</Text>
              </Pressable>
            ))}
            <View style={s.actions}>
              <Pressable onPress={() => void save(e)} disabled={saved} style={[s.action, saved && { opacity: 0.6 }]}>
                <Text style={s.actionText}>{saved ? "Saved to flashcards" : "Save to flashcards"}</Text>
              </Pressable>
              {verb && (
                <Pressable onPress={() => navigation.navigate("Conjugation", { verb })} style={s.action}>
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
  small: { fontSize: 12, color: "#00000080" },
  card: { borderWidth: 1, borderColor: "#00000018", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  headRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  es: { fontSize: 18, fontWeight: "700", color: "#000", flexShrink: 1 },
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
