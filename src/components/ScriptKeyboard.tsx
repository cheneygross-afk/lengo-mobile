// On-screen keyboards for answers in a language that doesn't use the Latin
// alphabet, so a learner who hasn't added a Japanese, Korean or Chinese
// keyboard to their phone can still type the answer. The website has the
// same (src/components/lessons/ScriptKeyboard.tsx there).
//
// - Japanese: romaji typed on the phone's own keyboard turns into kana as
//   you go ("konnichiha" -> こんにちは; see lib/kana.ts), and a tap-to-type
//   kana keyboard (hiragana or katakana) opens under the box.
// - Korean: a Hangul keyboard on the standard two-set layout; tap the
//   letters and the syllable blocks build themselves (lib/hangul.ts).
// - Chinese: a pinyin box that offers characters and words from the course
//   (lib/zhIme.ts); tap one to add it.
//
// A phone's own Japanese, Korean or Chinese keyboard keeps working as
// normal. While an on-screen keyboard is open, the answer box doesn't call
// up the phone's keyboard as well, so the two don't stack up.
//
// Use: const kb = useScriptKeyboard(lang, value, setValue, !checked);
//      <TextInput onChangeText={kb.onChangeText} showSoftInputOnFocus={kb.showSoftInputOnFocus} ... />
//      {kb.panel}
import { useEffect, useState, type ReactNode } from "react";
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { JA_PUNCTUATION, KANA_ROWS, romajiToKana, toKatakana } from "@/lib/kana";
import { HANGUL_KEY_ROWS, deleteJamo, typeJamo } from "@/lib/hangul";
import { imeCandidates, pinyinKey, type ImeEntry } from "@/lib/zhIme";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { colors } from "@/ui/theme";

export type Script = "ja" | "ko" | "zh";

/** The keyboard a course's answers need, or null for a Latin-alphabet course. */
export function scriptFor(lang: string): Script | null {
  if (lang.startsWith("ja")) return "ja";
  if (lang.startsWith("ko")) return "ko";
  if (lang.startsWith("zh")) return "zh";
  return null;
}

const OPEN_KEY = "deepend-script-keyboard-open";

/** Converts the romaji run at the end of what was just typed into kana. */
export function romajiTyped(prev: string, next: string): string {
  if (next.length < prev.length) return next;
  const run = next.match(/[A-Za-z'\-,.]+$/)?.[0];
  if (!run) return next;
  const kana = romajiToKana(run, false);
  return kana === run ? next : next.slice(0, next.length - run.length) + kana;
}

/** Deletes the last character (for Korean, the last letter of the block). */
function backspace(script: Script, value: string): string {
  if (script === "ko" && /[ㄱ-ㆎ가-힣]$/.test(value)) return deleteJamo(value);
  return Array.from(value).slice(0, -1).join("");
}

export function useScriptKeyboard(
  lang: string,
  value: string,
  onChange: (value: string) => void,
  enabled = true,
): { onChangeText: (text: string) => void; showSoftInputOnFocus: boolean; panel: ReactNode } {
  const script = scriptFor(lang);
  const [open, setOpen] = useState(false);
  const [romaji, setRomaji] = useState(true);

  useEffect(() => {
    if (!script) return;
    let live = true;
    void readJSON<Partial<Record<Script, boolean>>>(OPEN_KEY, {}).then((all) => {
      if (live && all[script]) setOpen(true);
    });
    return () => {
      live = false;
    };
  }, [script]);

  function toggle() {
    if (!script) return;
    const next = !open;
    setOpen(next);
    if (next) Keyboard.dismiss();
    void readJSON<Partial<Record<Script, boolean>>>(OPEN_KEY, {}).then((all) =>
      writeJSON(OPEN_KEY, { ...all, [script]: next }),
    );
  }

  const onChangeText = (text: string) => {
    const nfc = text.normalize("NFC");
    onChange(script === "ja" && romaji ? romajiTyped(value, nfc) : nfc);
  };

  if (!script || !enabled) return { onChangeText, showSoftInputOnFocus: true, panel: null };

  const label = script === "ja" ? "Kana keyboard" : script === "ko" ? "Korean keyboard" : "Pinyin keyboard";
  const panel = (
    <View style={s.wrap}>
      <View style={s.toolRow}>
        <Pressable onPress={toggle} style={[s.tool, open && s.toolOn]} accessibilityRole="button" accessibilityState={{ expanded: open }}>
          <Text style={[s.toolText, open && s.toolTextOn]}>{open ? `Hide ${label.toLowerCase()}` : `⌨ ${label}`}</Text>
        </Pressable>
        {script === "ja" && (
          <Pressable
            onPress={() => setRomaji((r) => !r)}
            style={s.tool}
            accessibilityRole="switch"
            accessibilityState={{ checked: romaji }}
          >
            <Text style={s.toolText}>{romaji ? "Romaji → かな: on" : "Romaji → かな: off"}</Text>
          </Pressable>
        )}
      </View>
      {script === "ja" && romaji && !open && (
        <Text style={s.help}>Type romaji (konnichiha) and it turns into kana. Capitals give katakana.</Text>
      )}
      {open && script === "ja" && <KanaKeys value={value} onChange={onChange} />}
      {open && script === "ko" && <HangulKeys value={value} onChange={onChange} />}
      {open && script === "zh" && <PinyinKeys value={value} onChange={onChange} />}
    </View>
  );
  // Chinese is typed in the pinyin box, so the answer box can still use
  // the phone's keyboard for edits; the kana and Hangul keys replace it.
  return { onChangeText, showSoftInputOnFocus: !(open && script !== "zh"), panel };
}

// ---- keys -------------------------------------------------------------

function Key({ label, onPress, flex = 1, a11y }: { label: string; onPress?: () => void; flex?: number; a11y?: string }) {
  if (!label) return <View style={[s.key, s.keyBlank, { flex }]} />;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [s.key, { flex }, pressed && s.keyPressed]}
      accessibilityRole="button"
      accessibilityLabel={a11y ?? label}
    >
      <Text style={s.keyText}>{label}</Text>
    </Pressable>
  );
}

const pad = (row: string[], n = 5) => [...row, ...Array(Math.max(0, n - row.length)).fill("")];
const row = (kana: string) => KANA_ROWS.find((r) => r[0] === kana) ?? [];

// Two rows of the kana chart per line: あ and か, さ and た ...
const KANA_PAGES: { label: string; lines: string[][] }[] = [
  {
    label: "あ",
    lines: [
      ["あ", "か"],
      ["さ", "た"],
      ["な", "は"],
      ["ま", "や"],
      ["ら", "わ"],
    ].map(([a, b]) => [...pad(row(a)), ...pad(row(b))]),
  },
  {
    label: "が",
    lines: [
      ["が", "ざ"],
      ["だ", "ば"],
    ]
      .map(([a, b]) => [...pad(row(a)), ...pad(row(b))])
      .concat([pad(row("ぱ"), 10)]),
  },
  {
    label: "ゃ 、",
    lines: [pad(row("ゃ"), 10), pad(JA_PUNCTUATION, 10)],
  },
];

function KanaKeys({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [page, setPage] = useState(0);
  const [katakana, setKatakana] = useState(false);
  return (
    <View style={s.board} accessibilityLabel="Kana keyboard">
      <View style={s.toolRow}>
        {KANA_PAGES.map((p, i) => (
          <Pressable key={p.label} onPress={() => setPage(i)} style={[s.tool, page === i && s.toolOn]}>
            <Text style={[s.toolText, page === i && s.toolTextOn]}>{katakana ? toKatakana(p.label) : p.label}</Text>
          </Pressable>
        ))}
        <Pressable onPress={() => setKatakana((k) => !k)} style={[s.tool, katakana && s.toolOn]}>
          <Text style={[s.toolText, katakana && s.toolTextOn]}>{katakana ? "カタカナ" : "ひらがな"}</Text>
        </Pressable>
      </View>
      {KANA_PAGES[page].lines.map((line, li) => (
        <View key={li} style={s.keyRow}>
          {line.map((k, ki) => {
            const ch = katakana ? toKatakana(k) : k;
            return (
              <Key
                key={ki}
                label={ch === "　" ? "␣" : ch}
                a11y={ch === "　" ? "Space" : ch}
                onPress={() => onChange(value + ch)}
              />
            );
          })}
        </View>
      ))}
      <View style={s.keyRow}>
        <Key label="␣" a11y="Space" flex={4} onPress={() => onChange(`${value}　`)} />
        <Key label="⌫" a11y="Delete" flex={2} onPress={() => onChange(backspace("ja", value))} />
      </View>
    </View>
  );
}

function HangulKeys({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [shift, setShift] = useState(false);
  const press = (jamo: string) => {
    onChange(typeJamo(value, jamo));
    setShift(false);
  };
  return (
    <View style={s.board} accessibilityLabel="Korean keyboard">
      {HANGUL_KEY_ROWS.map((keys, ri) => (
        <View key={ri} style={[s.keyRow, { paddingHorizontal: `${ri * 4}%` }]}>
          {keys.map(([plain, shifted]) => {
            const jamo = shift ? shifted : plain;
            return <Key key={plain} label={jamo} onPress={() => press(jamo)} />;
          })}
        </View>
      ))}
      <View style={s.keyRow}>
        <Pressable
          onPress={() => setShift((v) => !v)}
          style={[s.key, { flex: 2 }, shift && s.toolOn]}
          accessibilityRole="button"
          accessibilityLabel="Shift"
          accessibilityState={{ selected: shift }}
        >
          <Text style={[s.keyText, shift && s.toolTextOn]}>⇧</Text>
        </Pressable>
        <Key label="␣" a11y="Space" flex={4} onPress={() => onChange(`${value} `)} />
        <Key label="?" onPress={() => onChange(`${value}?`)} />
        <Key label="." onPress={() => onChange(`${value}.`)} />
        <Key label="⌫" a11y="Delete" flex={2} onPress={() => onChange(backspace("ko", value))} />
      </View>
      <Text style={s.help}>Tap the letters and the blocks build themselves: ㅎ ㅏ ㄴ → 한. ⇧ gives ㄲ ㄸ ㅃ ㅆ ㅉ ㅒ ㅖ.</Text>
    </View>
  );
}

// The course's word list, from the website (the same one its pinyin
// keyboard uses). Fetched once, the first time the keyboard opens.
const DICTIONARY_URL = "https://deependlanguages.com/api/zh-dictionary";
let dictionary: Promise<ImeEntry[]> | null = null;
function loadDictionary(): Promise<ImeEntry[]> {
  dictionary ??= fetch(DICTIONARY_URL)
    .then((r) => (r.ok ? (r.json() as Promise<ImeEntry[]>) : []))
    .then((d) => {
      if (!d.length) dictionary = null;
      return d;
    })
    .catch(() => {
      dictionary = null;
      return [];
    });
  return dictionary;
}

const ZH_PUNCTUATION = ["，", "。", "？", "、", "“", "”", "「", "」"];

function PinyinKeys({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [dict, setDict] = useState<ImeEntry[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [pinyin, setPinyin] = useState("");
  const candidates = dict && pinyin ? imeCandidates(dict, pinyin) : [];

  useEffect(() => {
    let live = true;
    void loadDictionary().then((d) => {
      if (!live) return;
      setDict(d);
      setFailed(d.length === 0);
    });
    return () => {
      live = false;
    };
  }, []);

  function pick(entry: ImeEntry) {
    onChange(value + entry[0]);
    // Keep whatever part of the pinyin the pick didn't cover ("nihaoma"
    // -> pick 你好 -> "ma" stays).
    const key = pinyinKey(pinyin);
    setPinyin(key.startsWith(entry[2]) ? key.slice(entry[2].length) : "");
  }

  return (
    <View style={s.board} accessibilityLabel="Pinyin keyboard">
      <TextInput
        value={pinyin}
        onChangeText={(t) => setPinyin(t.replace(/[^A-Za-zÜüv' ]/g, ""))}
        onSubmitEditing={() => candidates[0] && pick(candidates[0])}
        placeholder="Type pinyin, e.g. nihao"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        textContentType="none"
        blurOnSubmit={false}
        style={s.pinyinInput}
        accessibilityLabel="Pinyin"
      />
      {pinyin !== "" && (
        <View style={s.candidates}>
          {dict === null && <Text style={s.help}>Loading…</Text>}
          {failed && <Text style={s.help}>The word list didn&apos;t load. Check your connection and reopen the keyboard.</Text>}
          {dict !== null && !failed && candidates.length === 0 && (
            <Text style={s.help}>No match in the course yet. Check the spelling.</Text>
          )}
          {candidates.map((c) => (
            <Pressable
              key={c[0] + c[2]}
              onPress={() => pick(c)}
              style={({ pressed }) => [s.candidate, pressed && s.keyPressed]}
              accessibilityRole="button"
              accessibilityLabel={`${c[0]}, ${c[1]}`}
            >
              <Text style={s.candidateText}>{c[0]}</Text>
              <Text style={s.candidatePinyin}>{c[1]}</Text>
            </Pressable>
          ))}
        </View>
      )}
      <View style={s.keyRow}>
        {ZH_PUNCTUATION.map((p) => (
          <Key key={p} label={p} onPress={() => onChange(value + p)} />
        ))}
        <Key label="⌫" a11y="Delete" flex={1.5} onPress={() => onChange(backspace("zh", value))} />
      </View>
      <Text style={s.help}>Type the pinyin without tones, then tap the characters. Tap ⌫ to delete one.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { marginTop: 8, gap: 6 },
  toolRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  tool: {
    borderWidth: 1,
    borderColor: "#2A151333",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.card,
  },
  toolOn: { backgroundColor: colors.ink, borderColor: colors.ink },
  toolText: { fontSize: 13, color: colors.ink },
  toolTextOn: { color: "#FFFFFF" },
  help: { fontSize: 12, color: colors.inkSoft },
  board: {
    borderWidth: 1,
    borderColor: "#2A151326",
    borderRadius: 10,
    padding: 6,
    gap: 5,
    backgroundColor: "#F3EEE6",
  },
  keyRow: { flexDirection: "row", gap: 4 },
  key: {
    minHeight: 40,
    borderRadius: 6,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: "#2A151320",
    alignItems: "center",
    justifyContent: "center",
  },
  keyBlank: { backgroundColor: "transparent", borderColor: "transparent" },
  keyPressed: { backgroundColor: "#2A151314" },
  keyText: { fontSize: 18, color: colors.ink },
  pinyinInput: {
    borderWidth: 1,
    borderColor: "#2A151330",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: colors.card,
    color: colors.ink,
  },
  candidates: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  candidate: {
    minHeight: 44,
    minWidth: 44,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: "#2A151326",
    alignItems: "center",
    justifyContent: "center",
  },
  candidateText: { fontSize: 20, color: colors.ink },
  candidatePinyin: { fontSize: 11, color: colors.inkSoft },
});
