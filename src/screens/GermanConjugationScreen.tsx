import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, Keyboard } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { GERMAN_LANG, speak } from "@/lib/speech";
import { conjugate, deSpecFor } from "@/lib/de-conjugation/conjugate";
import { describeDeHit, searchDeVerbs, warmUpDeLookup } from "@/lib/de-conjugation/lookup";
import { DE_VERB_SPECS } from "@/lib/de-conjugation/verbs";
import { speechFor, subjectPrefix } from "@/lib/de-conjugation/text";
import { TENSES, personsOf, type DeConjugation, type Irregularity, type Person, type TenseId } from "@/lib/de-conjugation/types";
import {
  DE_DRILL_PERSONS,
  DE_DRILL_TENSES,
  DE_VERB_SETS,
  deDrillTenseLabel,
  deDrillTenseName,
  deVerbsInSet,
  gradeDeDrillAnswer,
  makeDeDrill,
  type DeDrillQuestion,
  type DeVerbSetId,
} from "@/lib/de-conjugation/drill";

type Props = NativeStackScreenProps<AppStackParamList, "GermanConjugation">;

const BRAND = "#7A1F1F";
const LANG = GERMAN_LANG;
const POPULAR = ["sein", "haben", "werden", "können", "müssen", "wollen", "machen", "gehen", "kommen", "sehen", "geben", "nehmen", "fahren", "wissen", "essen", "anfangen", "sich freuen"];
// Which tenses appear together, as the website's DeVerbTablesView has them.
const GROUPS: { title: string; de?: string; note?: string; tenses: TenseId[] }[] = [
  { title: "Indicative", tenses: ["pres", "perf", "praet", "pqp", "fut1", "fut2"] },
  { title: "Subjunctive II: conditional, wishes, politeness", de: "Konjunktiv II", tenses: ["k2w", "k2", "k2p"] },
  {
    title: "Subjunctive I: reported speech",
    de: "Konjunktiv I",
    note: "Mostly found in news and formal writing, nearly always in the er/sie/es form. Where it looks like the present, the Konjunktiv II is used instead.",
    tenses: ["k1", "k1p"],
  },
  { title: "Imperative", tenses: ["imp"] },
];
const COMPOUND: TenseId[] = ["perf", "pqp", "fut2", "k2p", "k1p"];
const KIND_LABEL: Record<DeConjugation["kind"], string> = {
  weak: "Weak (regular) verb",
  strong: "Strong verb",
  mixed: "Mixed verb",
  modal: "Modal verb",
  irregular: "Irregular verb",
};
const PERSON_LABEL: Partial<Record<Person, string>> = { ich: "ich", du: "du", er: "er/sie/es", wir: "wir", ihr: "ihr", sie: "sie/Sie" };
const SPECIAL = ["ä", "ö", "ü", "ß"];

// Mobile port of the website's German conjugation tool
// (/lessons/de/tools/conjugation): verb tables (every form tap-to-hear with
// its subject, irregular forms highlighted) and typed drills. The French
// counterpart is FrenchConjugationScreen.
export default function GermanConjugationScreen({ route }: Props) {
  const [tab, setTab] = useState<"tables" | "drill">("tables");
  useEffect(() => {
    const t = setTimeout(warmUpDeLookup, 400);
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
  const [verb, setVerb] = useState<string | null>(() => (initialVerb ? searchDeVerbs(initialVerb, 1)[0]?.infinitive ?? null : null));
  const results = useMemo(() => (query.trim() ? searchDeVerbs(query, 8) : []), [query]);
  const scrollRef = useRef<ScrollView>(null);

  function pick(inf: string) {
    setVerb(inf);
    setQuery("");
    Keyboard.dismiss();
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  return (
    <ScrollView ref={scrollRef} style={s.flex} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <TapText
        text={'Type a verb in German or English, or any conjugated form ("fing", "ich fange an", "hat sich gefreut")'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginBottom: 6 }]}
      />
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="e.g. sprechen, er fährt, to begin"
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
                    .map((h) => `${h.form}: ${describeDeHit(h)}`)
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
          <Text style={[s.small, { marginTop: 12 }]}>{DE_VERB_SPECS.length} verbs, with every strong, mixed and irregular pattern.</Text>
        </View>
      )}
    </ScrollView>
  );
}

function markStyle(mark: Irregularity | undefined) {
  return mark === "irregular" ? s.irregular : mark === "spelling" ? s.spelling : s.form;
}

/** One table row: "ich " + "fange an", tap to hear the whole phrase. */
function Cell({ person, tense, form, mark, subject }: { person: Person; tense: TenseId; form: string | null | undefined; mark?: Irregularity; subject?: string }) {
  if (!form) return <Text style={s.muted}>—</Text>;
  return (
    <View style={[s.row, { flexWrap: "wrap" }]}>
      {form.split(" / ").map((alt, i) => (
        <Pressable key={alt} onPress={() => speak(speechFor(person, tense, alt, subject), LANG)} style={s.row}>
          {i > 0 && <Text style={s.muted}> / </Text>}
          <Text style={s.form}>
            <Text style={s.prefix}>{subjectPrefix(person, tense, "table", subject)}</Text>
            <Text style={markStyle(mark)}>{alt}</Text>
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

function TenseCard({ verb, tense, altAux }: { verb: DeConjugation; tense: TenseId; altAux: boolean }) {
  const info = TENSES.find((t) => t.id === tense)!;
  const marks = verb.marks[tense] ?? {};
  const table = altAux && verb.altAuxTenses?.[tense] ? verb.altAuxTenses[tense]! : verb.tenses[tense];
  const persons = personsOf(tense).filter((p) => !verb.impersonal || p === "er");
  return (
    <View style={s.card}>
      <Text style={s.cardTitle}>{info.en}</Text>
      <TapText text={info.de} lang={LANG} mode="target" style={s.small} />
      {tense === "imp" && verb.kind === "modal" ? (
        <Text style={[s.small, { marginTop: 8 }]}>Modal verbs have no imperative.</Text>
      ) : (
        <View style={{ marginTop: 8, gap: 3 }}>
          {persons.map((p) => (
            <Cell key={p} person={p} tense={tense} form={table[p]} mark={marks[p]} subject={verb.impersonal ? "es" : undefined} />
          ))}
        </View>
      )}
    </View>
  );
}

/** A German word or phrase that speaks when tapped. */
function Spoken({ text, say, mark }: { text: string; say?: string; mark?: Irregularity }) {
  return (
    <Text style={mark === "irregular" ? s.irregular : s.form} onPress={() => speak(say ?? text, LANG)}>
      {text}
    </Text>
  );
}

function VerbTables({ infinitive, onPick }: { infinitive: string; onPick: (inf: string) => void }) {
  const [altAux, setAltAux] = useState(false);
  const verb = conjugate(infinitive);
  if (!verb) return <Text style={[s.muted, { marginTop: 16 }]}>That doesn't look like a German infinitive.</Text>;
  const canToggle = deSpecFor(verb.base)?.prn === "also";
  const er = verb.impersonal ? "es" : "er";
  // Badges: English label, then the German word it is about (tap to hear).
  const badges: [string, string?][] = [[KIND_LABEL[verb.kind]]];
  if (verb.separable) badges.push(["Separable prefix", `${verb.separable}-`]);
  if (verb.inseparable) badges.push(["Inseparable prefix", `${verb.inseparable}-`]);
  if (verb.ieren) badges.push(["Verb in", "-ieren"]);
  if (verb.reflexive) badges.push(verb.reflexiveCase === "dat" ? ["Reflexive, dative pronoun", "mir, dir"] : ["Reflexive", "sich"]);
  if (verb.aux === "sein") badges.push(["Perfect tense with", "sein"]);
  if (verb.aux === "sein" && verb.auxAlt) badges.push(["With a direct object:", "haben"]);
  else if (verb.auxAlt === "sein") badges.push(["Sometimes with", "sein"]);
  if (verb.impersonal) badges.push(["Impersonal, only with", "es"]);
  const shown = altAux && verb.auxAlt ? verb.auxAlt : verb.aux;
  const first = (f: string) => f.split(" / ")[0];
  const principal: { label: string; text: string; speech: string; mark?: Irregularity }[] = [
    { label: "Infinitive", text: verb.infinitive, speech: verb.infinitive },
    { label: "Present (er/sie/es)", text: `${er} ${verb.principal.present}`, speech: `${er} ${first(verb.principal.present)}`, mark: verb.marks.pres?.er },
    { label: "Simple past (er/sie/es)", text: `${er} ${verb.principal.preterite}`, speech: `${er} ${first(verb.principal.preterite)}`, mark: verb.marks.praet?.er },
    { label: "Perfect (er/sie/es)", text: `${er} ${verb.principal.participle}`, speech: `${er} ${first(verb.principal.participle)}`, mark: verb.marks.perf?.er },
    { label: "Partizip I", text: verb.partizip1, speech: verb.partizip1 },
    { label: "Partizip II", text: verb.partizip2, speech: first(verb.partizip2), mark: verb.marks.partizip2?.form },
    { label: "zu-infinitive", text: verb.zuInfinitive, speech: verb.zuInfinitive },
    { label: "Past infinitive", text: verb.pastInfinitive, speech: verb.pastInfinitive },
  ];
  return (
    <View style={{ marginTop: 16 }}>
      <View style={s.headRow}>
        <TapText text={verb.infinitive} lang={LANG} mode="target" style={s.title} />
      </View>
      {verb.en ? <TapText text={verb.en} lang={LANG} mode="english" style={s.muted} /> : null}
      <View style={[s.chips, { marginTop: 8 }]}>
        <Text style={[s.badge, verb.irregular && s.badgeIrregular]}>{verb.irregular ? "Irregular" : "Regular"}</Text>
        {badges.map(([label, de]) => (
          <Text key={label} style={s.badge}>
            {label}
            {de ? (
              <>
                {" "}
                <Text style={s.badgeWord} onPress={() => speak(de.replace(/^-|-$/g, ""), LANG)}>
                  {de}
                </Text>
              </>
            ) : null}
          </Text>
        ))}
      </View>
      {canToggle && (
        <Pressable onPress={() => onPick(verb.reflexive ? verb.base : `sich ${verb.base}`)}>
          <Text style={s.link}>{verb.reflexive ? `Show ${verb.base} without sich` : `Show the reflexive verb (sich ${verb.base})`}</Text>
        </Pressable>
      )}
      {verb.auxAlt && (
        <Pressable onPress={() => setAltAux((v) => !v)}>
          <Text style={s.link}>{altAux ? `Show the compound tenses with ${verb.aux}` : `Show the compound tenses with ${verb.auxAlt}`}</Text>
        </Pressable>
      )}
      {!verb.known && (
        <Text style={s.warning}>
          This verb isn't in Deep End's verb list, so these tables follow the regular (weak) pattern, or the pattern of the
          strong verb it seems to be built on. Check the auxiliary (haben or sein) and any prefix in a dictionary: if the verb
          is irregular, some forms will be wrong.
        </Text>
      )}
      <View style={{ marginTop: 12, gap: 4 }}>
        {principal.map((row) => (
          <View key={row.label} style={s.row}>
            <Text style={[s.small, { width: 160 }]}>{row.label}</Text>
            <View style={s.flexRow}>
              <Spoken text={row.text} say={row.speech} mark={row.mark} />
            </View>
          </View>
        ))}
      </View>
      <Text style={[s.small, { marginTop: 10 }]}>
        <Text style={s.irregular}>Bold red</Text>: irregular form. <Text style={s.spelling}>Underlined</Text>: regular, with a
        small adjustment (an extra -e-, a shorter du form, a dropped e). Compound tenses here use{" "}
        <Text style={s.bold} onPress={() => speak(shown, LANG)}>
          {shown}
        </Text>
        . Tap any form to hear it.
      </Text>
      {verb.notes.map((n) => (
        <TapText key={n} text={n} lang={LANG} mode="mixed" style={[s.small, { marginTop: 8, color: "#000000cc" }]} />
      ))}
      {GROUPS.map((g) => (
        <View key={g.title}>
          <Text style={s.section}>
            {g.title.toUpperCase()}
            {g.de ? (
              <Text style={s.sectionDe} onPress={() => speak(g.de!, LANG)}>
                {" · "}
                {g.de}
              </Text>
            ) : null}
          </Text>
          {g.note ? <Text style={[s.small, { marginBottom: 8 }]}>{g.note}</Text> : null}
          <View style={{ gap: 10 }}>
            {g.tenses.map((t) => (
              <TenseCard key={t} verb={verb} tense={t} altAux={altAux && COMPOUND.includes(t)} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

// ---- Drill -------------------------------------------------------------

type Result = { q: DeDrillQuestion; typed: string; correct: boolean; note?: string };
const COUNTS = [10, 20, 30, 50];
const full = (q: DeDrillQuestion, answer: string) => `${q.prefix}${answer}`.trim();

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
  const [tenses, setTenses] = useState<TenseId[]>(["pres", "perf"]);
  const [persons, setPersons] = useState<Person[]>(["ich", "du", "er", "wir", "ihr", "sie"]);
  const [set, setSet] = useState<DeVerbSetId>("top25");
  const [count, setCount] = useState(20);
  const [questions, setQuestions] = useState<DeDrillQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [checked, setChecked] = useState<Result | null>(null);
  const [empty, setEmpty] = useState(false);

  const verbs = useMemo(() => deVerbsInSet(set), [set]);

  function start() {
    const qs = makeDeDrill({ tenses, persons, verbs, count, seed: Date.now() });
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
    const g = gradeDeDrillAnswer(q, typed);
    const r = { q, typed, correct: g.correct, note: g.note };
    setChecked(r);
    setResults((prev) => [...prev, r]);
    speak(full(q, q.answers[0]), LANG);
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
          <Text style={s.small}>
            {deDrillTenseLabel(q.tense)} ·{" "}
            <TapText text={deDrillTenseName(q.tense)} lang={LANG} mode="target" style={s.small} />
          </Text>
          <TapText text={q.infinitive} lang={LANG} mode="target" style={s.title} />
          {q.en ? <TapText text={q.en} lang={LANG} mode="english" style={s.muted} /> : null}
          <View style={[s.row, { marginTop: 16, gap: 10 }]}>
            {q.tense === "imp" ? (
              <TapText text={q.subject} lang={LANG} mode="target" style={[s.subject, { color: "#00000099" }]} />
            ) : (
              <TapText text={q.prefix.trim()} lang={LANG} mode="target" style={s.subject} />
            )}
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
          {!checked && (
            <View style={[s.row, { gap: 6, marginTop: 8 }]}>
              {SPECIAL.map((ch) => (
                <Pressable key={ch} onPress={() => setTyped((t) => t + ch)} style={s.special}>
                  <Text style={s.chipText}>{ch}</Text>
                </Pressable>
              ))}
            </View>
          )}
          {checked && (
            <View style={[s.feedback, checked.correct ? s.feedbackRight : s.feedbackWrong]}>
              <Text style={s.feedbackTitle}>{checked.correct ? "Correct!" : "Not quite."}</Text>
              {checked.note ? <Text style={s.small}>{checked.note}</Text> : null}
              <Text style={s.form}>
                {checked.correct ? "Answer:" : "Correct answer:"}{" "}
                <TapText
                  text={q.answers
                    .slice(0, 2)
                    .map((a) => full(q, a))
                    .join(" / ")}
                  lang={LANG}
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
            {deDrillTenseLabel(r.q.tense)}: <TapText text={r.q.infinitive} lang={LANG} mode="target" /> →{" "}
            <TapText text={full(r.q, r.q.answers[0])} lang={LANG} mode="target" style={s.bold} /> (you wrote{" "}
            <TapText text={r.typed} lang={LANG} mode="target" />)
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
        {DE_DRILL_TENSES.map((t) => (
          <Chip key={t} on={tenses.includes(t)} onPress={() => setTenses((v) => toggle(v, t))} label={deDrillTenseLabel(t)} />
        ))}
      </View>
      <TapText
        text={'Subjunctive II asks for the real forms ("gäbe", "käme", "hätte"), so it only uses strong, mixed and irregular verbs; for the others, drill the würde-form (Conditional).'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginTop: 6 }]}
      />
      <Text style={s.section}>PERSONS</Text>
      <View style={s.chips}>
        {DE_DRILL_PERSONS.map((p) => (
          <Chip key={p} on={persons.includes(p)} onPress={() => setPersons((v) => toggle(v, p))} label={PERSON_LABEL[p] ?? p} />
        ))}
      </View>
      <TapText
        text={'The imperative has "du", "ihr" and "Sie" (pick sie/Sie for it). Type the whole verb phrase after the subject, with any separable prefix and reflexive pronoun ("fängt an", "hat sich gefreut"). ae, oe, ue and ss are fine for ä, ö, ü and ß.'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginTop: 6 }]}
      />
      <Text style={s.section}>VERBS</Text>
      <View style={s.chips}>
        {DE_VERB_SETS.map((v) => (
          <Chip key={v.id} on={set === v.id} onPress={() => setSet(v.id)} label={v.label} />
        ))}
      </View>
      <Text style={[s.small, { marginTop: 6 }]}>{verbs.length} verbs.</Text>
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
          Those tenses and persons don't go together (the imperative has no ich, er or wir form). Add another tense or
          person.
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
  flexRow: { flex: 1, flexDirection: "row", flexWrap: "wrap" },
  badgeWord: { color: "#000" },
  sectionDe: { fontWeight: "400", letterSpacing: 0, color: "#00000099" },
  special: { borderWidth: 1, borderColor: "#00000022", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: "#fff" },
  prefix: { fontSize: 15, color: "#00000080" },
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
