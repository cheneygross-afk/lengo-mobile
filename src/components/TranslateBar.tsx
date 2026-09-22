import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import {
  detectDirection,
  swapDirection,
  directionPillLabel,
  directionHeading,
  sourceLabel,
  fetchTranslation,
  type Direction,
  type TranslationResult,
} from "@/lib/translate/api";
import { buildCustomFlashcardEntry, loadFlashcards, saveFlashcards } from "@/lib/flashcards/store";

// Mobile port of the web app's TranslateSearch, moved from the top nav
// bar (where the website keeps it, next to Log in/Settings) to a bar
// pinned at the bottom of the screen -- mobile has no persistent top
// chrome, and a bottom bar sits within thumb reach and stays out of the
// way of whatever screen is showing above it. Rendered once, outside the
// navigation stack, so it's available everywhere in the app the same way
// it is on every page of the website.
//
// `language` is whichever track is selected on Home -- it picks the
// active pair (Spanish<->English or Japanese<->English), same as the
// website's TranslateSearch picks en-ja/ja-en on /lessons/ja pages
// instead of en-es/es-en everywhere else. The swap button still reverses
// direction *within* that pair; it never crosses to the other language.
export default function TranslateBar({ language }: { language: "es" | "ja" }) {
  const [query, setQuery] = useState("");
  const [manualOverride, setManualOverride] = useState<Direction | null>(null);
  const direction = manualOverride ?? detectDirection(query, language === "ja");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [savedIndexes, setSavedIndexes] = useState<Set<number>>(new Set());

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    setManualOverride(null);
    setQuery("");
    setResult(null);
    setError(null);
    setOpen(false);
  }, [language]);

  useEffect(() => {
    const trimmed = query.trim();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!trimmed) {
      setResult(null);
      setError(null);
      setLoading(false);
      return;
    }

    const requestId = ++requestIdRef.current;
    debounceRef.current = setTimeout(() => {
      setLoading(true);
      fetchTranslation(trimmed, direction).then((outcome) => {
        if (requestId !== requestIdRef.current) return;
        setLoading(false);
        if (outcome.ok) {
          setResult(outcome.result);
          setSavedIndexes(new Set());
          setError(null);
        } else {
          setResult(null);
          setError(outcome.error);
        }
      });
    }, 450);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, direction]);

  async function saveSenseToFlashcards(sense: TranslationResult["senses"][number], index: number) {
    if (!result) return;
    const isJapanese = result.direction === "en-ja" || result.direction === "ja-en";
    // The flashcards store's "es" field always holds the foreign-language
    // term (Spanish or Japanese) and "en" holds the English side,
    // regardless of which direction this lookup ran in -- same
    // convention the website's TranslateSearch uses.
    const foreignIsTranslation = result.direction === "en-es" || result.direction === "en-ja";
    const [es, en] = foreignIsTranslation ? [sense.translation, result.input] : [result.input, sense.translation];
    const note = sense.example ? `e.g. "${sense.example.source}"` : sense.note;
    const entry = buildCustomFlashcardEntry({
      es,
      en,
      note,
      // guessPartOfSpeech()'s heuristics only make sense for Spanish, and
      // a Japanese-sourced card belongs in the Japanese Flashcards deck,
      // same as one typed there directly (see levelPath / FlashcardsScreen).
      levelPath: isJapanese ? "ja" : undefined,
      guessPos: !isJapanese,
    });
    const map = await loadFlashcards();
    map[entry.id] = entry;
    await saveFlashcards(map);
    setSavedIndexes((prev) => new Set(prev).add(index));
  }

  function close() {
    setOpen(false);
    Keyboard.dismiss();
  }

  return (
    <View style={s.wrap}>
      {open && query.trim() && (
        <View style={s.panel}>
          <View style={s.panelHeader}>
            <Text style={s.panelHeading}>{directionHeading(direction)}</Text>
            <Pressable style={s.panelCloseBtn} onPress={close} hitSlop={8}>
              <Text style={s.panelClose}>✕</Text>
            </Pressable>
          </View>
          <ScrollView style={s.panelScroll} keyboardShouldPersistTaps="handled">
            {loading ? (
              <ActivityIndicator style={{ marginVertical: 12 }} color="#7A1F1F" />
            ) : error ? (
              <Text style={s.panelMuted}>{error}</Text>
            ) : result && result.senses.length ? (
              <>
                {result.senses.map((sense, i) => {
                  const saved = savedIndexes.has(i);
                  return (
                    <View key={i} style={[s.sense, i > 0 && s.senseDivider]}>
                      <View style={s.senseTop}>
                        <View style={s.senseTextWrap}>
                          <Text style={s.senseTranslation}>
                            {sense.gender ? (sense.gender === "m" ? "el " : "la ") : ""}
                            {sense.translation}
                          </Text>
                          {(sense.partOfSpeech || sense.note) && (
                            <Text style={s.senseMeta}>
                              {[sense.partOfSpeech, sense.note].filter(Boolean).join(" · ")}
                            </Text>
                          )}
                        </View>
                        <Pressable
                          style={[s.saveBtn, saved && s.saveBtnSaved]}
                          disabled={saved}
                          onPress={() => saveSenseToFlashcards(sense, i)}
                        >
                          <Text style={[s.saveBtnText, saved && s.saveBtnTextSaved]}>
                            {saved ? "Saved ✓" : "+ Flashcard"}
                          </Text>
                        </Pressable>
                      </View>
                      {sense.example && (
                        <Text style={s.senseExample}>
                          "{sense.example.source}" <Text style={s.senseExampleArrow}>→</Text> {sense.example.target}
                        </Text>
                      )}
                    </View>
                  );
                })}
                <Text style={s.sourceLabel}>{sourceLabel(result.senses)}</Text>
              </>
            ) : null}
          </ScrollView>
        </View>
      )}

      <View style={s.bar}>
        <View style={s.pill}>
          <Text style={s.pillText}>{directionPillLabel(direction)}</Text>
        </View>
        <TextInput
          value={query}
          onChangeText={(value) => {
            setQuery(value);
            setOpen(true);
            if (!value.trim()) setManualOverride(null);
          }}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder="Translate…"
          placeholderTextColor="#00000040"
          style={s.input}
        />
        {query.trim().length > 0 && (
          <Pressable style={s.swapBtn} onPress={() => setManualOverride(swapDirection(direction))} hitSlop={8}>
            <Text style={s.swapBtnText}>⇄</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { backgroundColor: "#FAF6F1" },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 14,
    marginBottom: 12,
    marginTop: 2,
    paddingVertical: 6,
    paddingRight: 6,
    paddingLeft: 6,
    backgroundColor: "#fff",
    borderRadius: 22,
    shadowColor: "#1C140C",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  pill: {
    backgroundColor: "#7A1F1F",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  pillText: { fontSize: 11, fontWeight: "700", letterSpacing: 0.3, color: "#fff" },
  input: { flex: 1, fontSize: 15, color: "#1A1512", padding: 0 },
  swapBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F1EBE3",
    alignItems: "center",
    justifyContent: "center",
  },
  swapBtnText: { fontSize: 15, color: "#7A1F1F" },

  panel: {
    marginHorizontal: 14,
    marginBottom: 10,
    maxHeight: 320,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#1C140C",
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  panelHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  panelHeading: { fontSize: 11, fontWeight: "700", letterSpacing: 0.6, textTransform: "uppercase", color: "#7A1F1F", opacity: 0.8 },
  panelCloseBtn: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#F1EBE3",
    alignItems: "center",
    justifyContent: "center",
  },
  panelClose: { fontSize: 11, color: "#00000066" },
  panelScroll: { maxHeight: 260 },
  panelMuted: { color: "#00000066", fontSize: 14, paddingVertical: 4 },

  sense: { paddingVertical: 10 },
  senseDivider: { borderTopWidth: 1, borderTopColor: "#F1EBE3" },
  senseTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 10 },
  senseTextWrap: { flex: 1 },
  senseTranslation: { fontSize: 18, fontWeight: "700", color: "#1A1512" },
  senseMeta: { fontSize: 12, color: "#00000066", marginTop: 3 },
  senseExample: { fontSize: 12.5, color: "#00000090", marginTop: 8, fontStyle: "italic" },
  senseExampleArrow: { color: "#00000055", fontStyle: "normal" },
  saveBtn: {
    backgroundColor: "rgba(122,31,31,0.08)",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  saveBtnSaved: { backgroundColor: "#F1EBE3" },
  saveBtnText: { fontSize: 11, color: "#7A1F1F", fontWeight: "700" },
  saveBtnTextSaved: { color: "#00000044" },
  sourceLabel: { fontSize: 10.5, color: "#00000045", marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: "#F1EBE3" },
});
