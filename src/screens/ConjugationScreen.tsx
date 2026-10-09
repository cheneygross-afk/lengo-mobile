import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, Keyboard } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { SPANISH_LANG, speak } from "@/lib/speech";
import { conjugate, specFor } from "@/lib/conjugation/conjugate";
import { describeHit, searchVerbs, warmUpLookup } from "@/lib/conjugation/lookup";
import { VERB_SPECS } from "@/lib/conjugation/verbs";
import { TENSES, personLabel, personsOf, type Person, type TenseId } from "@/lib/conjugation/types";
import {
  DRILL_PERSONS,
  DRILL_TENSES,
  VERB_SETS,
  drillTenseLabel,
  gradeDrillAnswer,
  makeDrill,
  verbsInSet,
  type DrillQuestion,
  type VerbSetId,
} from "@/lib/conjugation/drill";
import { LEVEL_VERBS } from "@/lib/conjugation/levelVerbs";

type Props = NativeStackScreenProps<AppStackParamList, "Conjugation">;

const BRAND = "#7A1F1F";
const POPULAR = ["ser", "estar", "tener", "hacer", "ir", "decir", "poder", "querer", "saber", "venir", "pedir", "dormir"];
const GROUPS: { title: string; tenses: TenseId[] }[] = [
  { title: "Indicative", tenses: ["pres", "pret", "impf", "fut", "pperf", "plup", "futperf"] },
  { title: "Conditional", tenses: ["cond", "condperf"] },
  { title: "Subjunctive", tenses: ["spres", "simpfRa", "simpfSe", "spperf", "splupRa", "splupSe"] },
  { title: "Imperative", tenses: ["impAff", "impNeg"] },
];
const RARE: TenseId[] = ["pant", "sfut", "sfutperf"];

// Mobile port of the website's /conjugation page: verb tables (every form
// tap-to-hear, irregular forms highlighted) and typed drills.
export default function ConjugationScreen({ route }: Props) {
  const [tab, setTab] = useState<"tables" | "drill">("tables");
  // Build the verb-form index once the screen has opened, so the first
  // search doesn't pause.
  useEffect(() => {
    const t = setTimeout(warmUpLookup, 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <View style={s.flex}>
      <View style={s.tabs}>
        {(["tables", "drill"] as const).map((t) => (
          <Pressable key={t} onPress={() => setTab(t)} style={[s.tab, tab === t && s.tabOn]}>
            <Text style={[s.tabText, tab === t && s.tabTextOn]}>{t === "tables" ? "Verb tables" : "Drill"}</Text>
          </Pressable>
        ))}
      </View>
      {tab === "tables" ? <Tables initialVerb={route.params?.verb ?? null} /> : <Drill />}
    </View>
  );
}

// ---- Tables ------------------------------------------------------------

function Tables({ initialVerb }: { initialVerb: string | null }) {
  const [query, setQuery] = useState("");
  const [verb, setVerb] = useState<string | null>(() => (initialVerb ? searchVerbs(initialVerb, 1)[0]?.infinitive ?? null : null));
  const results = useMemo(() => (query.trim() ? searchVerbs(query, 8) : []), [query]);
  const scrollRef = useRef<ScrollView>(null);

  function pick(inf: string) {
    setVerb(inf);
    setQuery("");
    Keyboard.dismiss();
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  return (
    <ScrollView ref={scrollRef} style={s.flex} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Verb, conjugated form, or English"
        autoCapitalize="none"
        autoCorrect={false}
        style={s.input}
        returnKeyType="search"
        onSubmitEditing={() => results[0] && pick(results[0].infinitive)}
      />
      {query.trim() !== "" && (
        <View style={s.results}>
          {results.length === 0 && <Text style={s.muted}>No verb found.</Text>}
          {results.map((r) => (
            <Pressable key={r.infinitive} onPress={() => pick(r.infinitive)} style={s.resultRow}>
              <Text style={s.resultTitle}>
                {r.infinitive}
                {r.en ? <Text style={s.muted}> · {r.en}</Text> : null}
              </Text>
              {r.hits && (
                <Text style={s.small}>
                  {r.hits
                    .slice(0, 3)
                    .map((h) => `${h.form}: ${describeHit(h)}`)
                    .join("; ")}
                </Text>
              )}
              {!r.known && <Text style={s.small}>Not in the verb list: regular pattern</Text>}
            </Pressable>
          ))}
        </View>
      )}
      {verb ? (
        <VerbTables infinitive={verb} onPick={pick} />
      ) : (
        <View style={{ marginTop: 16 }}>
          <Text style={s.muted}>Popular verbs</Text>
          <View style={s.chips}>
            {POPULAR.map((v) => (
              <Pressable key={v} onPress={() => pick(v)} style={s.chip}>
                <Text style={s.chipText}>{v}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={[s.small, { marginTop: 12 }]}>{VERB_SPECS.length} verbs, with every irregular and stem-changing pattern.</Text>
        </View>
      )}
    </ScrollView>
  );
}

function Form({ form, mark }: { form: string | null | undefined; mark?: "irregular" | "spelling" }) {
  if (!form) return <Text style={s.muted}>—</Text>;
  return (
    <TapText
      text={form}
      lang={SPANISH_LANG}
      mode="target"
      style={mark === "irregular" ? s.irregular : mark === "spelling" ? s.spelling : s.form}
    />
  );
}

function TenseCard({ verb, tense }: { verb: NonNullable<ReturnType<typeof conjugate>>; tense: TenseId }) {
  const info = TENSES.find((t) => t.id === tense)!;
  const marks = verb.marks[tense] ?? {};
  return (
    <View style={s.card}>
      <Text style={s.cardTitle}>{info.en}</Text>
      <TapText text={info.es} lang={SPANISH_LANG} mode="target" style={s.small} />
      <View style={{ marginTop: 8, gap: 3 }}>
        {personsOf(tense).map((p: Person) => (
          <View key={p} style={s.row}>
            <TapText text={personLabel(p, tense)} lang={SPANISH_LANG} mode="target" style={s.person} />
            <View style={s.flex}>
              <Form form={verb.tenses[tense][p]} mark={marks[p]} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

function VerbTables({ infinitive, onPick }: { infinitive: string; onPick: (inf: string) => void }) {
  const [showRare, setShowRare] = useState(false);
  const verb = conjugate(infinitive);
  if (!verb) return <Text style={s.muted}>That doesn't look like a Spanish infinitive.</Text>;
  const canToggle = specFor(verb.base)?.prn === "also";
  return (
    <View style={{ marginTop: 16 }}>
      <View style={s.headRow}>
        <TapText text={verb.infinitive} lang={SPANISH_LANG} mode="target" style={s.title} />
        <Text style={[s.badge, verb.irregular && s.badgeIrregular]}>{verb.irregular ? "Irregular" : "Regular"}</Text>
      </View>
      {verb.en ? <TapText text={verb.en} lang={SPANISH_LANG} mode="english" style={s.muted} /> : null}
      {canToggle && (
        <Pressable onPress={() => onPick(verb.pronominal ? verb.base : `${verb.base}se`)}>
          <Text style={s.link}>{verb.pronominal ? `Show ${verb.base} without se` : `Show ${verb.base}se`}</Text>
        </Pressable>
      )}
      {!verb.known && (
        <Text style={s.warning}>
          This verb isn't in Deep End's verb list, so these tables follow the regular pattern (with the usual spelling
          changes). If the verb is irregular or stem-changing, some forms will be wrong.
        </Text>
      )}
      <View style={[s.row, { marginTop: 10, flexWrap: "wrap", gap: 16 }]}>
        <Text style={s.small}>
          Gerund{"  "}
          <Form form={verb.gerund} mark={verb.marks.gerund?.form} />
        </Text>
        <Text style={s.small}>
          Participle{"  "}
          <Form form={verb.participle} mark={verb.marks.participle?.form} />
        </Text>
      </View>
      <Text style={[s.small, { marginTop: 8 }]}>
        <Text style={s.irregular}>Red</Text>: irregular form. <Text style={s.spelling}>Underlined</Text>: regular, with a
        spelling or accent change. Tap any word to hear it. Vos has its own forms only in the present and affirmative
        commands; elsewhere it uses the tú form.
      </Text>
      {verb.notes.map((n) => (
        <TapText key={n} text={n} lang={SPANISH_LANG} mode="mixed" style={[s.small, { marginTop: 8, color: "#000000cc" }]} />
      ))}
      {GROUPS.map((g) => (
        <View key={g.title}>
          <Text style={s.section}>{g.title.toUpperCase()}</Text>
          <View style={{ gap: 10 }}>
            {g.tenses.map((t) => (
              <TenseCard key={t} verb={verb} tense={t} />
            ))}
          </View>
        </View>
      ))}
      <Pressable onPress={() => setShowRare((v) => !v)} style={{ marginTop: 18 }}>
        <Text style={s.link}>{showRare ? "Hide" : "Show"} rare and literary tenses</Text>
      </Pressable>
      {showRare && (
        <View style={{ gap: 10, marginTop: 10 }}>
          <TapText
            text="The past anterior and the future subjunctive survive mostly in literature, laws and set phrases (sea lo que fuere)."
            lang={SPANISH_LANG}
            mode="mixed"
            style={s.small}
          />
          {RARE.map((t) => (
            <TenseCard key={t} verb={verb} tense={t} />
          ))}
        </View>
      )}
    </View>
  );
}

// ---- Drill -------------------------------------------------------------

type SetChoice = VerbSetId | `level:${string}`;
type Result = { q: DrillQuestion; typed: string; correct: boolean; note?: string };
const COUNTS = [10, 20, 30, 50];
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

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
  const [tenses, setTenses] = useState<TenseId[]>(["pres", "pret"]);
  const [persons, setPersons] = useState<Person[]>(["yo", "tu", "el", "nos", "ellos"]);
  const [set, setSet] = useState<SetChoice>("top50");
  const [count, setCount] = useState(20);
  const [questions, setQuestions] = useState<DrillQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [checked, setChecked] = useState<Result | null>(null);
  const [empty, setEmpty] = useState(false);

  const verbs = set.startsWith("level:") ? LEVEL_VERBS[set.slice(6)] ?? [] : verbsInSet(set as VerbSetId);

  function start() {
    const qs = makeDrill({ tenses, persons, verbs, count, seed: Date.now() });
    setEmpty(qs.length === 0);
    if (qs.length === 0) return;
    setQuestions(qs);
    setIndex(0);
    setResults([]);
    setChecked(null);
    setTyped("");
  }

  function check() {
    if (!questions || checked || !typed.trim()) return;
    const q = questions[index];
    const g = gradeDrillAnswer(q, typed);
    const r = { q, typed, correct: g.correct, note: g.note };
    setChecked(r);
    setResults((prev) => [...prev, r]);
    speak(q.answers[0], SPANISH_LANG);
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
            Question {index + 1} of {questions.length} · Score {results.filter((r) => r.correct).length}/{results.length}
          </Text>
          <Pressable onPress={() => setQuestions(null)}>
            <Text style={s.link}>End drill</Text>
          </Pressable>
        </View>
        <View style={[s.card, { marginTop: 12, padding: 18 }]}>
          <Text style={s.small}>{drillTenseLabel(q.tense)}</Text>
          <TapText text={q.infinitive} lang={SPANISH_LANG} mode="target" style={s.title} />
          {q.en ? <TapText text={q.en} lang={SPANISH_LANG} mode="english" style={s.muted} /> : null}
          <View style={[s.row, { marginTop: 16, gap: 10 }]}>
            <TapText text={q.subject + (q.tense === "impNeg" ? " (no…)" : "")} lang={SPANISH_LANG} mode="target" style={s.subject} />
            <TextInput
              value={typed}
              onChangeText={setTyped}
              editable={!checked}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              style={[s.input, s.flex, checked && (checked.correct ? s.inputRight : s.inputWrong)]}
              returnKeyType="done"
              onSubmitEditing={() => (checked ? next() : check())}
              submitBehavior="submit"
            />
          </View>
          {checked && (
            <View style={[s.feedback, checked.correct ? s.feedbackRight : s.feedbackWrong]}>
              <Text style={s.feedbackTitle}>{checked.correct ? "Correct!" : "Not quite."}</Text>
              {checked.note ? <Text style={s.small}>{checked.note}</Text> : null}
              <Text style={s.form}>
                {checked.correct ? "Answer:" : "Correct answer:"}{" "}
                <TapText
                  text={q.answers.slice(0, q.tense === "impNeg" ? 1 : 2).join(" / ")}
                  lang={SPANISH_LANG}
                  mode="target"
                  style={s.form}
                />
              </Text>
            </View>
          )}
          <Pressable style={s.button} onPress={() => (checked ? next() : check())}>
            <Text style={s.buttonText}>{checked ? "Next" : "Check"}</Text>
          </Pressable>
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
        {missed.length > 0 && <Text style={[s.muted, { marginTop: 12 }]}>To go over:</Text>}
        {missed.map((r, i) => (
          <Text key={i} style={[s.small, { marginTop: 6, color: "#000000cc" }]}>
            {drillTenseLabel(r.q.tense)}, <TapText text={r.q.subject} lang={SPANISH_LANG} mode="target" />:{" "}
            <TapText text={r.q.infinitive} lang={SPANISH_LANG} mode="target" /> →{" "}
            <TapText text={r.q.answers[0]} lang={SPANISH_LANG} mode="target" style={s.bold} /> (you wrote{" "}
            <TapText text={r.typed} lang={SPANISH_LANG} mode="target" />)
          </Text>
        ))}
        <Pressable style={s.button} onPress={start}>
          <Text style={s.buttonText}>New drill</Text>
        </Pressable>
        <Pressable onPress={() => setQuestions(null)} style={{ marginTop: 12, alignItems: "center" }}>
          <Text style={s.link}>Change settings</Text>
        </Pressable>
      </ScrollView>
    );
  }

  const ready = tenses.length > 0 && persons.length > 0 && verbs.length > 0;
  return (
    <ScrollView style={s.flex} contentContainerStyle={s.content}>
      <Text style={s.section}>TENSES</Text>
      <View style={s.chips}>
        {DRILL_TENSES.map((t) => (
          <Chip key={t} on={tenses.includes(t)} onPress={() => setTenses((v) => toggle(v, t))} label={drillTenseLabel(t)} />
        ))}
      </View>
      <Text style={s.section}>PERSONS</Text>
      <View style={s.chips}>
        {DRILL_PERSONS.map((p) => (
          <Chip key={p} on={persons.includes(p)} onPress={() => setPersons((v) => toggle(v, p))} label={personLabel(p)} />
        ))}
      </View>
      <Text style={[s.small, { marginTop: 6 }]}>Vos is asked only in the present and in commands, where it has its own forms.</Text>
      <Text style={s.section}>VERBS</Text>
      <View style={s.chips}>
        {VERB_SETS.map((v) => (
          <Chip key={v.id} on={set === v.id} onPress={() => setSet(v.id)} label={v.label} />
        ))}
        {LEVELS.map((lv) => (
          <Chip key={lv} on={set === `level:${lv}`} onPress={() => setSet(`level:${lv}`)} label={`${lv} verbs`} />
        ))}
      </View>
      <Text style={[s.small, { marginTop: 6 }]}>
        {verbs.length} verbs{set.startsWith("level:") ? `: the ones the ${set.slice(6)} lessons introduce` : ""}.
      </Text>
      <Text style={s.section}>QUESTIONS</Text>
      <View style={s.chips}>
        {COUNTS.map((n) => (
          <Chip key={n} on={count === n} onPress={() => setCount(n)} label={String(n)} />
        ))}
      </View>
      <Pressable style={[s.button, !ready && { opacity: 0.4 }]} onPress={start} disabled={!ready}>
        <Text style={s.buttonText}>Start drill</Text>
      </Pressable>
      {!ready && <Text style={[s.small, { marginTop: 8 }]}>Pick at least one tense and one person.</Text>}
      {ready && empty && (
        <Text style={[s.small, { marginTop: 8 }]}>
          Those tenses and persons don't go together (vos only has its own forms in the present and in commands, and
          there are no yo commands). Add another tense or person.
        </Text>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 60 },
  tabs: { flexDirection: "row", gap: 8, paddingHorizontal: 20, paddingTop: 12, backgroundColor: "#FAF6F1" },
  tab: { flex: 1, borderWidth: 1.5, borderColor: `${BRAND}33`, borderRadius: 999, paddingVertical: 8, alignItems: "center", backgroundColor: "#fff" },
  tabOn: { backgroundColor: BRAND, borderColor: BRAND },
  tabText: { fontSize: 14, fontWeight: "700", color: BRAND },
  tabTextOn: { color: "#fff" },
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
  inputRight: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  inputWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  results: { marginTop: 8, borderWidth: 1, borderColor: "#00000018", borderRadius: 10, backgroundColor: "#fff" },
  resultRow: { paddingHorizontal: 12, paddingVertical: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#00000022" },
  resultTitle: { fontSize: 16, fontWeight: "700", color: "#000" },
  muted: { fontSize: 14, color: "#00000099" },
  small: { fontSize: 13, color: "#00000080" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: { borderWidth: 1, borderColor: "#00000022", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#fff" },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 13, color: "#000" },
  chipTextOn: { color: "#fff", fontWeight: "700" },
  headRow: { flexDirection: "row", alignItems: "center", gap: 10, flexWrap: "wrap" },
  title: { fontSize: 24, fontWeight: "800", color: "#000" },
  badge: {
    fontSize: 12,
    color: "#00000099",
    borderWidth: 1,
    borderColor: "#00000033",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  badgeIrregular: { color: BRAND, borderColor: `${BRAND}66` },
  link: { fontSize: 14, color: "#00000099", textDecorationLine: "underline", marginTop: 6 },
  warning: { marginTop: 10, padding: 10, borderRadius: 10, backgroundColor: "#fef3c7", borderWidth: 1, borderColor: "#fcd34d", fontSize: 13, color: "#000" },
  section: { fontSize: 13, fontWeight: "800", color: "#00000066", letterSpacing: 0.5, marginTop: 22, marginBottom: 8 },
  card: { borderWidth: 1, borderColor: "#00000018", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#000" },
  row: { flexDirection: "row", alignItems: "center" },
  person: { width: 130, fontSize: 14, color: "#00000080" },
  form: { fontSize: 15, color: "#000" },
  irregular: { fontSize: 15, color: BRAND, fontWeight: "700" },
  spelling: { fontSize: 15, color: "#000", textDecorationLine: "underline", textDecorationColor: "#f59e0b" },
  bold: { fontWeight: "700", color: "#000" },
  subject: { fontSize: 18, color: "#000" },
  feedback: { marginTop: 14, padding: 12, borderRadius: 10, borderWidth: 1, gap: 4 },
  feedbackRight: { backgroundColor: "#16a34a14", borderColor: "#16a34a55" },
  feedbackWrong: { backgroundColor: "#dc262614", borderColor: "#dc262655" },
  feedbackTitle: { fontSize: 15, fontWeight: "700", color: "#000" },
  button: { marginTop: 18, backgroundColor: BRAND, borderRadius: 12, paddingVertical: 13, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
