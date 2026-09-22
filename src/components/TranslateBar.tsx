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
export default function TranslateBar() {
  const [query, setQuery] = useState("");
  const [manualOverride, setManualOverride] = useState<Direction | null>(null);
  const direction = manualOverride ?? detectDirection(query);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [savedIndexes, setSavedIndexes] = useState<Set<number>>(new Set());

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestIdRef = useRef(0);

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
    const foreignIsTranslation = result.direction === "en-es";
    const [es, en] = foreignIsTranslation ? [sense.translation, result.input] : [result.input, sense.translation];
    const note = sense.example ? `e.g. "${sense.example.source}"` : sense.note;
    const entry = buildCustomFlashcardEntry({ es, en, note });
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
            <Pressable onPress={close} hitSlop={8}>
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
        <Text style={s.pill}>{directionPillLabel(direction)}</Text>
        <TextInput
          value={query}
          onChangeText={(value) => {
            setQuery(value);
            setOpen(true);
            if (!value.trim()) setManualOverride(null);
          }}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder="Translate…"
          placeholderTextColor="#00000055"
          style={s.input}
        />
        {query.trim().length > 0 && (
          <Pressable onPress={() => setManualOverride(swapDirection(direction))} hitSlop={8}>
            <Text style={s.swapBtn}>⇄</Text>
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
    gap: 8,
    marginHorizontal: 14,
    marginBottom: 10,
    marginTop: 2,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#00000018",
  },
  pill: { fontSize: 10, fontWeight: "700", color: "#00000066" },
  input: { flex: 1, fontSize: 14, color: "#000", padding: 0 },
  swapBtn: { fontSize: 16, color: "#00000066", paddingHorizontal: 2 },

  panel: {
    marginHorizontal: 14,
    marginBottom: 8,
    maxHeight: 320,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#00000018",
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -2 },
    elevation: 6,
  },
  panelHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  panelHeading: { fontSize: 10, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#00000066" },
  panelClose: { fontSize: 14, color: "#00000055", padding: 2 },
  panelScroll: { maxHeight: 260 },
  panelMuted: { color: "#00000066", fontSize: 14, paddingVertical: 4 },

  sense: { paddingVertical: 8 },
  senseDivider: { borderTopWidth: 1, borderTopColor: "#00000010" },
  senseTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 10 },
  senseTextWrap: { flex: 1 },
  senseTranslation: { fontSize: 17, fontWeight: "700", color: "#000" },
  senseMeta: { fontSize: 12, color: "#00000066", marginTop: 2 },
  senseExample: { fontSize: 12, color: "#00000099", marginTop: 6, fontStyle: "italic" },
  senseExampleArrow: { color: "#00000055", fontStyle: "normal" },
  saveBtn: {
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  saveBtnSaved: { borderColor: "#00000012" },
  saveBtnText: { fontSize: 11, color: "#00000099", fontWeight: "600" },
  saveBtnTextSaved: { color: "#00000044" },
  sourceLabel: { fontSize: 10, color: "#00000044", marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: "#00000010" },
});
