import { useMemo, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, Keyboard, Switch } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { KOREAN_LANG, speak } from "@/lib/speech";
import { COPULA_NOUNS, conjugate } from "@/lib/ko-conjugation/conjugate";
import { KO_WORDS } from "@/lib/ko-conjugation/verbs";
import { CLASS_INFO, wordNote } from "@/lib/ko-conjugation/text";
import { LEVEL_NAMES, LEVEL_ORDER, guessKoWord, koWordBySlug, sameClass, searchKoWords } from "@/lib/ko-conjugation/lookup";
import {
  KO_DRILL_DEFAULT,
  KO_DRILL_FORMS,
  chipLabel,
  formLabel,
  gradeKoDrill,
  makeKoDrill,
  type KoDrillQuestion,
  type KoWordSet,
} from "@/lib/ko-conjugation/drill";
import {
  IRR_LABEL,
  LEVELS,
  OTHER_FORMS,
  POS_LABEL,
  TENSES,
  type Form,
  type FormId,
  type KoWord,
  type LevelCode,
  type OtherInfo,
} from "@/lib/ko-conjugation/types";

type Props = NativeStackScreenProps<AppStackParamList, "KoreanConjugation">;

const BRAND = "#8B0000";
const LANG = KOREAN_LANG;
const POPULAR = ["이다", "있다", "하다", "가다", "먹다", "듣다", "돕다", "살다", "모르다", "쓰다", "낫다", "하얗다", "춥다", "공부하다", "좋다"];
const GROUPS: { id: OtherInfo["group"]; title: string }[] = [
  { id: "connect", title: "Connecting forms" },
  { id: "modify", title: "Before a noun" },
  { id: "pattern", title: "Useful patterns" },
  { id: "command", title: "Requests and suggestions" },
];

// Mobile port of the Korean course's conjugation tool (the website's
// /lessons/ko/tools/conjugation, KoConjugationTool, KoVerbTables and
// KoConjugationDrill): look up a verb or adjective by its dictionary form,
// English, or any conjugated form (했어요, 도와주세요), see every form in
// the four speech levels with the irregular ones in bold red (and the
// honorific -(으)시- forms behind a switch), then drill forms by typing them
// on the phone's Korean keyboard, graded with the course's "ko" rules.
// Hangul only: no romanization, no Hanja. Every form plays when tapped.
export default function KoreanConjugationScreen({ route }: Props) {
  const [tab, setTab] = useState<"tables" | "drill">("tables");
  return (
    <View style={s.flex}>
      <View style={s.tabs}>
        {(["tables", "drill"] as const).map((t) => (
          <Pressable key={t} onPress={() => setTab(t)} style={[s.tab, tab === t && s.tabOn]}>
            <Text style={[s.tabText, tab === t && s.tabTextOn]}>{t === "tables" ? "Look up a word" : "Drill"}</Text>
          </Pressable>
        ))}
      </View>
      {tab === "tables" ? <Tables initial={route.params?.verb ?? null} /> : <Drill />}
    </View>
  );
}

// ---- Tables ------------------------------------------------------------

function Tables({ initial }: { initial: string | null }) {
  const [query, setQuery] = useState("");
  const [word, setWord] = useState<KoWord | null>(() => (initial ? (koWordBySlug(initial) ?? guessKoWord(initial)) : null));
  const hits = useMemo(() => (query.trim() ? searchKoWords(query, 10) : []), [query]);
  const guess = useMemo(() => (query.trim() && hits.length === 0 ? guessKoWord(query) : null), [query, hits]);
  const scrollRef = useRef<ScrollView>(null);

  function pick(w: KoWord) {
    setWord(w);
    setQuery("");
    Keyboard.dismiss();
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  return (
    <ScrollView ref={scrollRef} style={s.flex} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <Text style={[s.small, { marginBottom: 6 }]}>Type a verb or adjective in Korean or English, or any form of it</Text>
      <TextInput
        value={query}
        onChangeText={(t) => setQuery(t.normalize("NFC"))}
        placeholder="e.g. 듣다, 들었어요, to listen"
        autoCapitalize="none"
        autoCorrect={false}
        style={s.input}
        returnKeyType="search"
        onSubmitEditing={() => {
          if (hits[0]) pick(hits[0].word);
          else if (guess) pick(guess);
        }}
      />
      {query.trim() !== "" && (
        <View style={s.results}>
          {hits.length === 0 && !guess && (
            <TapText
              text="No word found. Type a dictionary form ending in 다 to conjugate any verb."
              lang={LANG}
              style={[s.muted, { padding: 12 }]}
            />
          )}
          {hits.map((h) => (
            <Pressable key={h.word.slug} onPress={() => pick(h.word)} style={s.resultRow}>
              <Text style={s.resultTitle}>
                {h.word.dict}
                <Text style={s.muted}> · {h.word.en}</Text>
              </Text>
              <TapText
                text={`${POS_LABEL[h.word.pos]}${h.word.irr !== "regular" ? ` · ${IRR_LABEL[h.word.irr]}` : ""}${h.formOf ? ` · you typed its ${formLabel(h.formOf)}` : ""}`}
                lang={LANG}
                style={s.small}
              />
            </Pressable>
          ))}
          {hits.length === 0 && guess && (
            <Pressable onPress={() => pick(guess)} style={s.resultRow}>
              <Text style={s.resultTitle}>{guess.dict}</Text>
              <TapText
                text={`Not in the word list: conjugated as ${guess.irr === "regular" ? "a regular" : `a ${IRR_LABEL[guess.irr]}`} ${guess.pos === "adj" ? "adjective" : "verb"}`}
                lang={LANG}
                style={s.small}
              />
            </Pressable>
          )}
        </View>
      )}
      {word ? (
        <WordPage word={word} onPick={pick} />
      ) : (
        <View style={{ marginTop: 16 }}>
          <Text style={s.muted}>Popular words</Text>
          <View style={s.chips}>
            {POPULAR.map((p) => {
              const w = koWordBySlug(p);
              if (!w) return null;
              return (
                <Pressable
                  key={p}
                  onPress={() => {
                    speak(w.dict, LANG);
                    pick(w);
                  }}
                  style={s.chip}
                >
                  <Text style={s.chipText}>{w.dict}</Text>
                </Pressable>
              );
            })}
          </View>
          <Text style={[s.small, { marginTop: 12 }]}>
            {KO_WORDS.length} verbs and adjectives, with every irregular class. Tap any form in the tables to hear it.
          </Text>
          <Text style={s.section}>HOW THE IRREGULAR VERBS WORK</Text>
          <View style={{ gap: 10 }}>
            {CLASS_INFO.map((c) => (
              <View key={c.id} style={s.card}>
                <TapText text={c.title} lang={LANG} style={s.cardTitle} />
                <TapText text={c.rule} lang={LANG} style={[s.small, { marginTop: 4, color: "#2A1513cc" }]} />
                <View style={s.chips}>
                  {c.examples.map((slug) => {
                    const w = koWordBySlug(slug);
                    if (!w) return null;
                    return (
                      <Pressable key={slug} onPress={() => pick(w)} style={s.chip}>
                        <Text style={s.chipText}>{w.dict}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

/** A Korean form that speaks when tapped. */
function Say({ text, style }: { text: string; style?: object }) {
  return (
    <Text style={style ?? s.form} onPress={() => speak(text, LANG)}>
      {text}
    </Text>
  );
}

function Cell({ form }: { form?: Form }) {
  if (!form) return <Text style={s.muted}>—</Text>;
  return (
    <View>
      <Say text={form.text} style={form.irregular ? s.irregular : s.form} />
      {form.alt && form.alt.length > 0 ? (
        <Text style={s.small}>
          also{" "}
          {form.alt.map((a, i) => (
            <Text key={a}>
              {i > 0 ? ", " : ""}
              <Say text={a} style={s.small} />
            </Text>
          ))}
        </Text>
      ) : null}
    </View>
  );
}

function WordPage({ word, onPick }: { word: KoWord; onPick: (w: KoWord) => void }) {
  const copula = word.pos === "copula";
  const [noun, setNoun] = useState<string>(COPULA_NOUNS[0]);
  const [hon, setHon] = useState(false);
  const listed = koWordBySlug(word.slug) === word;
  const { forms } = conjugate(word, copula ? noun : undefined);
  const canHon = !word.honSelf && !word.noHon;
  const showHon = hon && canHon;
  const idFor = (t: string, l: string) => (showHon ? `hon.${t}.${l}` : `${t}.${l}`) as FormId;
  const tenses = TENSES.filter((t) => LEVELS.some((l) => forms[idFor(t.id, l.id)]));
  const note = wordNote(word);
  const family = listed ? sameClass(word, 12) : [];

  return (
    <View style={{ marginTop: 16 }}>
      <Say text={word.dict} style={s.title} />
      {word.en ? <Text style={s.muted}>{word.en}</Text> : null}
      <View style={[s.chips, { marginTop: 8 }]}>
        <Text style={s.badge}>{POS_LABEL[word.pos]}</Text>
        {word.irr !== "regular" ? <TapText text={IRR_LABEL[word.irr]} lang={LANG} style={[s.badge, s.badgeIrregular]} /> : null}
        {listed ? <Text style={s.badge}>{LEVEL_NAMES[word.level]}</Text> : null}
        {word.hon ? (
          <Text style={s.badge}>
            Honorific <Say text={word.hon.dict} style={s.badgeWord} />
          </Text>
        ) : null}
      </View>
      {!listed && (
        <TapText
          text={`Not in the word list, so conjugated by the rules of its ending as ${word.irr === "regular" ? "a regular" : `a ${IRR_LABEL[word.irr]}`} ${word.pos === "adj" ? "adjective" : "verb"}. Stems in ㄷ, ㅂ and ㅅ can be regular or irregular (받다 받아요, 듣다 들어요): check a dictionary.`}
          lang={LANG}
          style={s.warning}
        />
      )}
      {note ? <TapText text={note} lang={LANG} style={[s.small, { marginTop: 10, color: "#2A1513cc" }]} /> : null}

      {copula && (
        <View style={[s.chips, { marginTop: 12 }]}>
          <Text style={s.small}>After a noun ending in</Text>
          {COPULA_NOUNS.map((n, i) => (
            <Pressable key={n} onPress={() => setNoun(n)} style={[s.chip, noun === n && s.chipOn]}>
              <Text style={[s.chipText, noun === n && s.chipTextOn]}>
                {i === 0 ? "a consonant" : "a vowel"}: {n}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      <Text style={s.section}>{showHon ? "HONORIFIC -(으)시- FORMS" : "SPEECH LEVELS"}</Text>
      {canHon && (
        <View style={[s.row, { gap: 10, marginBottom: 8 }]}>
          <Switch value={hon} onValueChange={setHon} trackColor={{ true: BRAND }} />
          <TapText text="Honorific (-시-): when the subject is someone you respect" lang={LANG} style={[s.small, s.flex1]} />
        </View>
      )}
      {word.honSelf && (
        <Text style={[s.small, { marginBottom: 8 }]}>This verb is already honorific: every form below honors its subject.</Text>
      )}
      <View style={{ gap: 10 }}>
        {tenses.map((t) => (
          <View key={t.id} style={s.card}>
            <TapText text={t.en} lang={LANG} style={s.cardTitle} />
            <View style={{ marginTop: 6, gap: 6 }}>
              {LEVELS.map((l) => (
                <View key={l.id} style={s.levelRow}>
                  <Text style={s.levelLabel}>
                    {l.en} <Text onPress={() => speak(l.ko, LANG)}>{l.ko}</Text>
                  </Text>
                  <View style={s.flex1}>
                    <Cell form={forms[idFor(t.id, l.id)]} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      <TapText
        text={
          word.noNeg && !copula
            ? "Questions use the same forms with rising intonation (and 합니다 becomes 합니까?). This word has no 안 negative: see the note above."
            : "Questions use the same forms with rising intonation; in the formal style -ㅂ니다/습니다 becomes -ㅂ니까/습니까?"
        }
        lang={LANG}
        style={[s.small, { marginTop: 8 }]}
      />
      <Text style={[s.small, { marginTop: 6 }]}>
        <Text style={s.irregularSmall}>Bold red</Text>: the stem changes here. Tap any form to hear it.
      </Text>

      {GROUPS.map((g) => {
        const items = OTHER_FORMS.filter((o) => o.group === g.id && forms[o.id]);
        if (items.length === 0) return null;
        return (
          <View key={g.id}>
            <Text style={s.section}>{g.title.toUpperCase()}</Text>
            <View style={s.card}>
              {items.map((o, i) => (
                <View key={o.id} style={[s.otherRow, i > 0 && s.otherRowBorder]}>
                  <View style={s.otherLabel}>
                    <Text style={s.small}>{o.en}</Text>
                    <Text style={s.small} onPress={() => speak(o.ko, LANG)}>
                      {o.ko}
                    </Text>
                  </View>
                  <View style={s.flex1}>
                    <Cell form={forms[o.id]} />
                    {o.note ? <TapText text={o.note} lang={LANG} style={s.small} /> : null}
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      })}

      {family.length > 0 && (
        <>
          <Text style={s.section}>CONJUGATED THE SAME WAY</Text>
          <View style={s.chips}>
            {family.map((w) => (
              <Pressable key={w.slug} onPress={() => onPick(w)} style={s.chip}>
                <Text style={s.chipText}>{w.dict}</Text>
              </Pressable>
            ))}
          </View>
        </>
      )}
    </View>
  );
}

// ---- Drill -------------------------------------------------------------

type Result = { q: KoDrillQuestion; typed: string; correct: boolean; note?: string };
const COUNTS = [10, 20, 30];
const SETS: { id: KoWordSet; label: string }[] = [
  { id: "all", label: "Verbs and adjectives" },
  { id: "verbs", label: "Verbs only" },
  { id: "adjectives", label: "Adjectives only" },
  { id: "irregular", label: "Irregular only" },
];

function Chip({ on, onPress, label }: { on: boolean; onPress: () => void; label: string }) {
  return (
    <Pressable onPress={onPress} style={[s.chip, on && s.chipOn]}>
      <Text style={[s.chipText, on && s.chipTextOn]}>{label}</Text>
    </Pressable>
  );
}

function toggle<T>(list: T[], item: T): T[] {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

function Drill() {
  const [forms, setForms] = useState<FormId[]>(KO_DRILL_DEFAULT);
  const [levels, setLevels] = useState<LevelCode[]>(["A1", "A2"]);
  const [set, setSet] = useState<KoWordSet>("all");
  const [count, setCount] = useState(20);
  const [questions, setQuestions] = useState<KoDrillQuestion[] | null>(null);
  const [empty, setEmpty] = useState(false);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [checked, setChecked] = useState<Result | null>(null);

  function start() {
    const qs = makeKoDrill({ forms, levels, set, count });
    setEmpty(qs.length === 0);
    if (qs.length === 0) return;
    setQuestions(qs);
    setIndex(0);
    setTyped("");
    setResults([]);
    setChecked(null);
  }

  function check(giveUp = false) {
    if (!questions || checked) return;
    if (!giveUp && !typed.trim()) return;
    const q = questions[index];
    const g: { correct: boolean; note?: string } = giveUp ? { correct: false } : gradeKoDrill(typed, q);
    const r: Result = { q, typed: giveUp ? "" : typed, correct: g.correct, note: g.note };
    setChecked(r);
    setResults((prev) => [...prev, r]);
    speak(q.answer, LANG);
  }

  function next() {
    setChecked(null);
    setTyped("");
    setIndex((i) => i + 1);
  }

  if (questions && index < questions.length) {
    const q = questions[index];
    return (
      <ScrollView style={s.flex} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
        <View style={[s.row, { justifyContent: "space-between" }]}>
          <Text style={s.small}>
            Question {index + 1} of {questions.length} · {results.filter((r) => r.correct).length} right
          </Text>
          <Pressable onPress={() => setQuestions(null)}>
            <Text style={s.link}>Change settings</Text>
          </Pressable>
        </View>
        <View style={[s.card, { marginTop: 12, padding: 18 }]}>
          <TapText text={formLabel(q.id)} lang={LANG} style={s.small} />
          <Text style={s.title}>
            {q.noun ? (
              <>
                <Say text={q.noun} style={s.title} /> +{" "}
              </>
            ) : null}
            <Say text={q.word.dict} style={s.title} />
          </Text>
          {q.word.en ? <Text style={s.muted}>{q.word.en}</Text> : null}
          <TextInput
            value={typed}
            onChangeText={(t) => setTyped(t.normalize("NFC"))}
            editable={!checked}
            placeholder="Type the Korean"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            style={[s.input, { marginTop: 16, fontSize: 18 }, checked && (checked.correct ? s.inputRight : s.inputWrong)]}
            returnKeyType="done"
            onSubmitEditing={() => (checked ? next() : check())}
            submitBehavior="submit"
          />
          {checked && (
            <View style={[s.feedback, checked.correct ? s.feedbackRight : s.feedbackWrong]}>
              <Text style={s.feedbackTitle}>{checked.correct ? "Right!" : "The answer is:"}</Text>
              <Say text={q.answer} style={q.irregular ? s.irregularBig : s.answerBig} />
              {checked.note ? <TapText text={checked.note} lang={LANG} style={s.small} /> : null}
              {q.answers.length > 1 ? (
                <Text style={s.small}>
                  Also right:{" "}
                  {q.answers.slice(1).map((a, i) => (
                    <Text key={a}>
                      {i > 0 ? ", " : ""}
                      <Say text={a} style={s.small} />
                    </Text>
                  ))}
                </Text>
              ) : null}
              {q.irregular ? <Text style={s.small}>In bold red: the stem changes here.</Text> : null}
            </View>
          )}
          <Pressable style={s.button} onPress={() => (checked ? next() : check())}>
            <Text style={s.buttonText}>{checked ? (index + 1 < questions.length ? "Next" : "See results") : "Check"}</Text>
          </Pressable>
          {!checked && (
            <Pressable onPress={() => check(true)} style={{ marginTop: 10, alignItems: "center" }}>
              <Text style={s.link}>Show answer</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    );
  }

  if (questions) {
    const right = results.filter((r) => r.correct).length;
    const missed = results.filter((r) => !r.correct);
    return (
      <ScrollView style={s.flex} contentContainerStyle={s.content}>
        <Text style={s.title}>
          {right} / {results.length} right
        </Text>
        <Text style={[s.muted, { marginTop: 6 }]}>{missed.length === 0 ? "Every one right." : "Worth another look:"}</Text>
        {missed.map((r, i) => (
          <View key={i} style={[s.card, { marginTop: 8 }]}>
            <Text style={s.small}>
              <Say text={`${r.q.noun ? `${r.q.noun} + ` : ""}${r.q.word.dict}`} style={s.small} /> · <Text>{formLabel(r.q.id)}</Text>
            </Text>
            <Say text={r.q.answer} style={s.formBold} />
            {r.typed ? <Text style={s.typedWrong}>{r.typed}</Text> : null}
          </View>
        ))}
        <Pressable style={s.button} onPress={start}>
          <Text style={s.buttonText}>Again</Text>
        </Pressable>
        <Pressable onPress={() => setQuestions(null)} style={{ marginTop: 12, alignItems: "center" }}>
          <Text style={s.link}>Change settings</Text>
        </Pressable>
      </ScrollView>
    );
  }

  const ready = forms.length > 0 && levels.length > 0;
  return (
    <ScrollView style={s.flex} contentContainerStyle={s.content}>
      <Text style={s.section}>FORMS</Text>
      <View style={s.chips}>
        {KO_DRILL_FORMS.map((id) => (
          <Chip key={id} on={forms.includes(id)} onPress={() => setForms((f) => toggle(f, id))} label={chipLabel(id)} />
        ))}
      </View>
      <Text style={s.section}>WORDS</Text>
      <View style={s.chips}>
        {LEVEL_ORDER.map((l) => (
          <Chip key={l} on={levels.includes(l)} onPress={() => setLevels((ls) => toggle(ls, l))} label={LEVEL_NAMES[l]} />
        ))}
      </View>
      <View style={s.chips}>
        {SETS.map((x) => (
          <Chip key={x.id} on={set === x.id} onPress={() => setSet(x.id)} label={x.label} />
        ))}
      </View>
      <Text style={s.section}>QUESTIONS</Text>
      <View style={s.chips}>
        {COUNTS.map((n) => (
          <Chip key={n} on={count === n} onPress={() => setCount(n)} label={String(n)} />
        ))}
      </View>
      <Pressable style={[s.button, !ready && { opacity: 0.4 }]} onPress={start} disabled={!ready}>
        <Text style={s.buttonText}>Start drill</Text>
      </Pressable>
      {!ready && <Text style={[s.small, { marginTop: 8 }]}>Pick at least one form and one level.</Text>}
      {ready && empty && <Text style={[s.small, { marginTop: 8 }]}>No words have those forms. Choose more forms or levels.</Text>}
      <TapText
        text="Type in Hangul with your phone's Korean keyboard. Spacing doesn't count: 갈 거예요 and 갈거예요 are both right."
        lang={LANG}
        style={[s.small, { marginTop: 12 }]}
      />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF7F2" },
  flex1: { flex: 1 },
  content: { padding: 20, paddingBottom: 60 },
  tabs: { flexDirection: "row", gap: 8, paddingHorizontal: 20, paddingTop: 12, backgroundColor: "#FAF7F2" },
  tab: { flex: 1, borderWidth: 1.5, borderColor: `${BRAND}33`, borderRadius: 999, paddingVertical: 8, alignItems: "center", backgroundColor: "#fff" },
  tabOn: { backgroundColor: BRAND, borderColor: BRAND },
  tabText: { fontSize: 14, fontWeight: "700", color: BRAND },
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
  inputRight: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  inputWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  results: { marginTop: 8, borderWidth: 1, borderColor: "#2A151318", borderRadius: 10, backgroundColor: "#fff" },
  resultRow: { paddingHorizontal: 12, paddingVertical: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#2A151322" },
  resultTitle: { fontSize: 18, fontWeight: "700", color: "#2A1513" },
  muted: { fontSize: 14, color: "#2A151399" },
  small: { fontSize: 13, color: "#2A151380", lineHeight: 18 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8, alignItems: "center" },
  chip: { borderWidth: 1, borderColor: "#2A151322", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#fff" },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 13, color: "#2A1513" },
  chipTextOn: { color: "#fff", fontWeight: "700" },
  title: { fontSize: 26, fontWeight: "800", color: "#2A1513" },
  badge: {
    fontSize: 12,
    color: "#2A151399",
    borderWidth: 1,
    borderColor: "#2A151333",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  badgeIrregular: { color: BRAND, borderColor: `${BRAND}66` },
  badgeWord: { color: "#2A1513", fontSize: 12 },
  link: { fontSize: 14, color: "#2A151399", textDecorationLine: "underline" },
  warning: { marginTop: 10, padding: 10, borderRadius: 10, backgroundColor: "#fef3c7", borderWidth: 1, borderColor: "#fcd34d", fontSize: 13, color: "#2A1513" },
  section: { fontSize: 13, fontWeight: "800", color: "#2A151366", letterSpacing: 0.5, marginTop: 22, marginBottom: 8 },
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#2A1513" },
  row: { flexDirection: "row", alignItems: "center" },
  levelRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  levelLabel: { width: 128, fontSize: 13, color: "#2A151399", paddingTop: 2 },
  otherRow: { flexDirection: "row", gap: 10, paddingVertical: 8 },
  otherRowBorder: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: "#2A151322" },
  otherLabel: { width: 128 },
  form: { fontSize: 17, color: "#2A1513" },
  formBold: { fontSize: 17, color: "#2A1513", fontWeight: "700", marginTop: 4 },
  irregular: { fontSize: 17, color: BRAND, fontWeight: "700" },
  irregularSmall: { color: BRAND, fontWeight: "700" },
  answerBig: { fontSize: 24, color: "#2A1513" },
  irregularBig: { fontSize: 24, color: BRAND, fontWeight: "700" },
  typedWrong: { fontSize: 14, color: "#b91c1c", textDecorationLine: "line-through", marginTop: 2 },
  feedback: { marginTop: 14, padding: 12, borderRadius: 10, borderWidth: 1, gap: 4 },
  feedbackRight: { backgroundColor: "#16a34a14", borderColor: "#16a34a55" },
  feedbackWrong: { backgroundColor: "#dc262614", borderColor: "#dc262655" },
  feedbackTitle: { fontSize: 15, fontWeight: "700", color: "#2A1513" },
  button: { marginTop: 18, backgroundColor: BRAND, borderRadius: 12, paddingVertical: 13, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
