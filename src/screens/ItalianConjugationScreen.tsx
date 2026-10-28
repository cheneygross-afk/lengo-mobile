import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, Keyboard } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { ITALIAN_LANG, speak } from "@/lib/speech";
import { conjugate, reflexiveInfinitive } from "@/lib/it-conjugation/conjugate";
import { describeItHit, itVerbPageFor, searchItVerbs, warmUpItLookup } from "@/lib/it-conjugation/lookup";
import { IT_VERB_SPECS } from "@/lib/it-conjugation/verbs";
import { impLabel, isImperative, speechFor, subjectPrefix } from "@/lib/it-conjugation/text";
import { TENSES, personsOf, type Auxiliary, type Irregularity, type ItConjugation, type Person, type TenseId } from "@/lib/it-conjugation/types";
import {
  IT_DRILL_PERSONS,
  IT_DRILL_TENSES,
  IT_VERB_SETS,
  gradeItDrillAnswer,
  itDrillTenseLabel,
  itDrillTenseName,
  itVerbsInSet,
  makeItDrill,
  type ItDrillQuestion,
  type ItVerbSetId,
} from "@/lib/it-conjugation/drill";

type Props = NativeStackScreenProps<AppStackParamList, "ItalianConjugation">;

const BRAND = "#8B0000";
const LANG = ITALIAN_LANG;
const POPULAR = [
  "essere", "avere", "andare", "fare", "dire", "venire", "potere", "volere", "dovere", "sapere", "stare", "dare", "uscire", "bere",
  "parlare", "finire", "piacere", "alzarsi", "andarsene",
];
// Which tenses appear together, in the order a learner meets them (the
// website's ItVerbTablesView).
const GROUPS: { title: string; it: string; note?: string; tenses: TenseId[] }[] = [
  { title: "Indicative", it: "Indicativo", tenses: ["pres", "pp", "impf", "trap", "fut", "futant"] },
  {
    title: "Conditional",
    it: "Condizionale",
    note: 'Would, and polite requests: "vorrei" (I\'d like), "potrebbe aiutarmi?" (could you help me?).',
    tenses: ["cond", "condp"],
  },
  {
    title: "Subjunctive",
    it: "Congiuntivo",
    note: 'Shown with "che", the word that usually brings it in: "penso che sia vero" (I think it\'s true). After "se" the imperfect and pluperfect make if-clauses: "se avessi tempo" (if I had time).',
    tenses: ["cgpres", "cgpass", "cgimpf", "cgtrap"],
  },
  {
    title: "Imperative",
    it: "Imperativo",
    note: 'The Lei and Loro forms are the subjunctive: "parli!" (speak! to someone you call Lei). With "tu", the negative is "non" plus the infinitive: "non parlare!".',
    tenses: ["imp", "impn"],
  },
  {
    title: "Remote past",
    it: "Passato remoto",
    note: "The past of books, history and fairy tales; in speech, Italians mostly say the passato prossimo. The trapassato remoto is literary only: you need to recognize it, not use it.",
    tenses: ["pr", "trem"],
  },
];
const KIND_LABEL: Record<ItConjugation["kind"], string> = {
  regular: "Regular verb",
  spelling: "Regular, with spelling changes",
  isc: "Regular -ire verb with -isc-",
  irregular: "Irregular verb",
};
const PERSON_LABEL: Record<Person, string> = { io: "io", tu: "tu", lui: "lui/lei/Lei", noi: "noi", voi: "voi", loro: "loro" };
const SPECIAL = ["à", "è", "é", "ì", "ò", "ù", "'"];

// Mobile port of the Italian beta's conjugation tool
// (/lessons/it/tools/conjugation): verb tables (every form tap-to-hear with
// its subject, irregular forms highlighted, the reflexive verb and the
// other auxiliary behind a toggle) and typed drills. The Portuguese
// counterpart is PortugueseConjugationScreen.
export default function ItalianConjugationScreen({ route }: Props) {
  const [tab, setTab] = useState<"tables" | "drill">("tables");
  useEffect(() => {
    const t = setTimeout(warmUpItLookup, 400);
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

/** The verb whose tables to show: a listed verb's page infinitive ("alzarsi"
 * shows alzare's tables, with the reflexive behind a toggle, as on the
 * website's verb pages), else what was typed (regular pattern). */
function tableVerb(inf: string): string {
  return itVerbPageFor(inf)?.infinitive ?? inf;
}

function Tables({ initialVerb }: { initialVerb: string | null }) {
  const [query, setQuery] = useState("");
  const [verb, setVerb] = useState<string | null>(() => {
    if (!initialVerb) return null;
    const hit = searchItVerbs(initialVerb, 1)[0]?.infinitive;
    return hit ? tableVerb(hit) : null;
  });
  const results = useMemo(() => (query.trim() ? searchItVerbs(query, 8) : []), [query]);
  const scrollRef = useRef<ScrollView>(null);

  function pick(inf: string) {
    setVerb(tableVerb(inf));
    setQuery("");
    Keyboard.dismiss();
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  return (
    <ScrollView ref={scrollRef} style={s.flex} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <TapText
        text={'Type a verb in Italian or English, or any conjugated form ("feci", "che io sappia", "avevo fatto", "mi alzo", "dimmi")'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginBottom: 6 }]}
      />
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="e.g. tradurre, lei ha fatto, to leave"
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
                    .map((h) => `${h.form}: ${describeItHit(h)}`)
                    .join("; ")}
                </Text>
              )}
              {!r.known && <Text style={s.small}>Not in the verb list: regular pattern</Text>}
            </Pressable>
          ))}
        </View>
      )}
      {verb ? (
        <VerbTables key={verb} infinitive={verb} />
      ) : (
        <View style={{ marginTop: 16 }}>
          <Text style={s.muted}>Popular verbs</Text>
          <View style={s.chips}>
            {POPULAR.map((v) => (
              <Pressable
                key={v}
                onPress={() => {
                  speak(v, LANG);
                  pick(v);
                }}
                style={s.chip}
              >
                <Text style={s.chipText}>{v}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={[s.small, { marginTop: 12 }]}>{IT_VERB_SPECS.length} verbs, with every irregular pattern.</Text>
          <TapText
            text={'Tip: tap any form in the tables to hear it, with its subject ("io faccio", "che lei sappia").'}
            lang={LANG}
            mode="mixed"
            style={[s.small, { marginTop: 6 }]}
          />
        </View>
      )}
    </ScrollView>
  );
}

function markStyle(mark: Irregularity | undefined) {
  return mark === "irregular" ? s.irregular : mark === "spelling" ? s.spelling : s.form;
}

/** One table row: "che io " + "parli", tap to hear the whole phrase. */
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
      {isImperative(tense) && <Text style={s.small}> ({impLabel(person)})</Text>}
    </View>
  );
}

function TenseCard({ verb, tense }: { verb: ItConjugation; tense: TenseId }) {
  const info = TENSES.find((t) => t.id === tense)!;
  const marks = verb.marks[tense] ?? {};
  const table = verb.tenses[tense];
  const persons = personsOf(tense).filter((p) =>
    verb.impersonal === "lui" ? p === "lui" : verb.impersonal === "3" ? p === "lui" || p === "loro" : true
  );
  const none = persons.every((p) => !table[p]);
  return (
    <View style={s.card}>
      <Text style={s.cardTitle}>{info.en}</Text>
      <TapText text={info.it} lang={LANG} mode="target" style={s.small} />
      <TapText text={info.use} lang={LANG} mode="mixed" style={[s.small, { marginTop: 4 }]} />
      {none ? (
        <Text style={[s.small, { marginTop: 8 }]}>
          {verb.impersonal ? "Not used: the verb has no subject." : "Not used in the imperative."}
        </Text>
      ) : (
        <View style={{ marginTop: 8, gap: 3 }}>
          {persons.map((p) => (
            <Cell key={p} person={p} tense={tense} form={table[p]} mark={marks[p]} subject={verb.impersonal ? "" : undefined} />
          ))}
        </View>
      )}
    </View>
  );
}

/** An Italian word or phrase that speaks when tapped. */
function Spoken({ text, say, mark }: { text: string; say?: string; mark?: Irregularity }) {
  return (
    <Text style={mark === "irregular" ? s.irregular : s.form} onPress={() => speak(say ?? text, LANG)}>
      {text}
    </Text>
  );
}

function VerbTables({ infinitive }: { infinitive: string }) {
  // The website's verb page versions: the verb, its reflexive form (when the
  // verb list says it has a common one) and the other auxiliary (a verb that
  // takes both: ho finito / è finito).
  const [showRefl, setShowRefl] = useState(false);
  const [altAux, setAltAux] = useState(false);
  const base = conjugate(infinitive);
  if (!base) {
    return (
      <Text style={[s.muted, { marginTop: 16 }]}>
        That doesn&apos;t look like an Italian infinitive (they end in -are, -ere or -ire, or -rre).
      </Text>
    );
  }
  const reflVerb = base.prn === "also" && !base.reflexive ? conjugate(reflexiveInfinitive(base.base)) : null;
  const altAuxVerb = base.auxAlt ? conjugate(infinitive, base.auxAlt as Auxiliary) : null;
  const verb = showRefl && reflVerb ? reflVerb : altAux && altAuxVerb ? altAuxVerb : base;

  const ppMark = verb.marks.participle?.form;
  // Badges: English label, then the Italian word it is about (tap to hear).
  const badges: [string, string?][] = [[KIND_LABEL[verb.kind]]];
  if (ppMark === "irregular" && verb.kind !== "irregular") badges.push(["Irregular participle", verb.participle]);
  badges.push([verb.auxAlt ? "Takes avere or essere" : `Takes ${verb.aux}`]);
  if (verb.reflexive) badges.push(["Reflexive", "-si"]);
  else if (verb.clitic) badges.push(["With built-in pronouns", verb.infinitive.replace(new RegExp(`^${verb.base.slice(0, -1)}`), "-")]);
  if (verb.impersonal) badges.push(["Impersonal, only in the form", verb.tenses.pres.lui ?? undefined]);

  const pp = verb.participleAlt ? `${verb.participle} / ${verb.participleAlt}` : verb.participle;
  const keyForms: { label: string; text: string; speech: string; mark?: Irregularity }[] = [
    { label: "Infinitive", text: verb.infinitive, speech: verb.infinitive },
    { label: "Gerund", text: verb.gerund, speech: verb.gerund, mark: verb.marks.gerund?.form },
    { label: "Past participle", text: pp, speech: verb.participle, mark: ppMark },
    { label: "Past infinitive", text: verb.pastInfinitive, speech: verb.pastInfinitive.replace(/o\/a\b/, "o") },
    { label: "Past gerund", text: verb.pastGerund, speech: verb.pastGerund.replace(/o\/a\b/, "o") },
  ];
  const meaning = verb.reflexive && verb.enSe ? verb.enSe : verb.en;

  return (
    <View style={{ marginTop: 16 }}>
      <View style={s.headRow}>
        <TapText text={verb.infinitive} lang={LANG} mode="target" style={s.title} />
      </View>
      {meaning ? <TapText text={meaning} lang={LANG} mode="english" style={s.muted} /> : null}
      <View style={[s.chips, { marginTop: 8 }]}>
        {badges.map(([label, it]) => (
          <Text key={label} style={[s.badge, label === KIND_LABEL.irregular && s.badgeIrregular]}>
            {label}
            {it ? (
              <>
                {" "}
                <Text style={s.badgeWord} onPress={() => speak(it.replace(/^-/, "").split(" / ")[0], LANG)}>
                  {it}
                </Text>
              </>
            ) : null}
          </Text>
        ))}
      </View>
      {reflVerb && (
        <Pressable
          onPress={() => {
            setShowRefl((v) => !v);
            setAltAux(false);
          }}
        >
          <Text style={s.link}>{verb.reflexive ? `Show ${verb.base} without si` : `Show the reflexive verb (${reflVerb.infinitive})`}</Text>
        </Pressable>
      )}
      {altAuxVerb && !(showRefl && reflVerb) && (
        <Pressable onPress={() => setAltAux((v) => !v)}>
          <Text style={s.link}>Show the compound tenses with {verb.auxAlt}</Text>
        </Pressable>
      )}
      {!verb.known && (
        <Text style={s.warning}>
          This verb isn&apos;t in Deep End&apos;s verb list, so these tables follow the regular pattern of its ending (with the usual
          spelling changes; unknown -ire verbs are shown with -isc-, like finire, the larger group). Check a dictionary: if the verb is
          irregular, conjugated like dormire, or takes essere, some forms will be wrong.
        </Text>
      )}
      <View style={{ marginTop: 12, gap: 4 }}>
        {keyForms.map((row) => (
          <View key={row.label} style={s.row}>
            <Text style={[s.small, { width: 130 }]}>{row.label}</Text>
            <View style={s.flexRow}>
              <Spoken text={row.text} say={row.speech} mark={row.mark} />
            </View>
          </View>
        ))}
      </View>
      <Text style={[s.small, { marginTop: 10 }]}>
        <Text style={s.irregular}>Bold red</Text>: irregular form. <Text style={s.spelling}>Underlined</Text>: regular, with a spelling
        change to keep the sound (<Spoken text="cerchi" />, <Spoken text="comincerò" />) or to avoid a double i (<Spoken text="studi" />).
        Tap any form to hear it.
      </Text>
      <TapText
        text={'"lui", "lei" and "Lei" (you, formal) share a form: "Lei parla italiano?". With "essere" the participle agrees with the subject, like an adjective: "lui è andato", "lei è andata", "loro sono andati" (men or a mixed group) or "andate" (women).'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginTop: 8 }]}
      />
      {verb.notes.map((n) => (
        <TapText key={n} text={n} lang={LANG} mode="mixed" style={[s.small, { marginTop: 8, color: "#2A1513cc" }]} />
      ))}
      {GROUPS.map((g) => (
        <View key={g.title}>
          <Text style={s.section}>
            {g.title.toUpperCase()}
            <Text style={s.sectionPt} onPress={() => speak(g.it, LANG)}>
              {" · "}
              {g.it}
            </Text>
          </Text>
          {g.note ? <TapText text={g.note} lang={LANG} mode="mixed" style={[s.small, { marginBottom: 8 }]} /> : null}
          <View style={{ gap: 10 }}>
            {g.tenses.map((t) => (
              <TenseCard key={t} verb={verb} tense={t} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

// ---- Drill -------------------------------------------------------------

type Result = { q: ItDrillQuestion; typed: string; correct: boolean; note?: string };
const COUNTS = [10, 20, 30, 50];
const full = (q: ItDrillQuestion, answer: string) => `${q.prefix}${answer}`.trim();

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
  const [tenses, setTenses] = useState<TenseId[]>(["pres", "pp"]);
  const [persons, setPersons] = useState<Person[]>(["io", "tu", "lui", "noi", "voi", "loro"]);
  const [set, setSet] = useState<ItVerbSetId>("top25");
  const [count, setCount] = useState(20);
  const [questions, setQuestions] = useState<ItDrillQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [checked, setChecked] = useState<Result | null>(null);
  const [empty, setEmpty] = useState(false);

  const verbs = useMemo(() => itVerbsInSet(set), [set]);

  function start() {
    const qs = makeItDrill({ tenses, persons, verbs, count, seed: Date.now() });
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
    const g = gradeItDrillAnswer(q, typed);
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
    const imp = isImperative(q.tense);
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
            {itDrillTenseLabel(q.tense)} · <TapText text={itDrillTenseName(q.tense)} lang={LANG} mode="target" style={s.small} />
          </Text>
          <TapText text={q.infinitive} lang={LANG} mode="target" style={s.title} />
          {q.en ? <TapText text={q.en} lang={LANG} mode="english" style={s.muted} /> : null}
          <View style={[s.row, { marginTop: 16, gap: 10 }]}>
            {imp && q.subject ? <TapText text={q.subject} lang={LANG} mode="target" style={[s.subject, { color: "#2A151399" }]} /> : null}
            {q.prefix.trim() ? <TapText text={q.prefix.trim()} lang={LANG} mode="target" style={s.subject} /> : null}
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
            <View style={[s.row, { gap: 6, marginTop: 8, flexWrap: "wrap" }]}>
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
              {checked.note ? <TapText text={checked.note} lang={LANG} mode="mixed" style={s.small} /> : null}
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
          <Text key={i} style={[s.small, { marginTop: 6, color: "#2A1513cc" }]}>
            {itDrillTenseLabel(r.q.tense)}: <TapText text={r.q.infinitive} lang={LANG} mode="target" /> →{" "}
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
        {IT_DRILL_TENSES.map((t) => (
          <Chip key={t} on={tenses.includes(t)} onPress={() => setTenses((v) => toggle(v, t))} label={itDrillTenseLabel(t)} />
        ))}
      </View>
      <TapText
        text={'The subjunctive comes with "che" in front ("che lei"), the negative imperative with "non". With "essere" the participle agrees: "lei è andata", "lui è andato". For io, tu, noi, voi and loro either gender is right.'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginTop: 6 }]}
      />
      <Text style={s.section}>PERSONS</Text>
      <View style={s.chips}>
        {IT_DRILL_PERSONS.map((p) => (
          <Chip key={p} on={persons.includes(p)} onPress={() => setPersons((v) => toggle(v, p))} label={PERSON_LABEL[p]} />
        ))}
      </View>
      <TapText
        text={'"lui", "lei" and "Lei" (you, formal) share a form; the question shows which one, so the participle can agree. Type the verb after the subject ("feci", "ho fatto"); the subject itself is optional. Accents count ("parlò", "è"): use the buttons if your keyboard has none.'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginTop: 6 }]}
      />
      <Text style={s.section}>VERBS</Text>
      <View style={s.chips}>
        {IT_VERB_SETS.map((v) => (
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
          Those tenses and persons don&apos;t go together (the imperative has no io form). Add another tense or person.
        </Text>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF7F2" },
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
  resultTitle: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  muted: { fontSize: 14, color: "#2A151399" },
  small: { fontSize: 13, color: "#2A151380" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: { borderWidth: 1, borderColor: "#2A151322", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#fff" },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 13, color: "#2A1513" },
  chipTextOn: { color: "#fff", fontWeight: "700" },
  headRow: { flexDirection: "row", alignItems: "center", gap: 10, flexWrap: "wrap" },
  title: { fontSize: 24, fontWeight: "800", color: "#2A1513" },
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
  link: { fontSize: 14, color: "#2A151399", textDecorationLine: "underline", marginTop: 6 },
  warning: { marginTop: 10, padding: 10, borderRadius: 10, backgroundColor: "#fef3c7", borderWidth: 1, borderColor: "#fcd34d", fontSize: 13, color: "#2A1513" },
  section: { fontSize: 13, fontWeight: "800", color: "#2A151366", letterSpacing: 0.5, marginTop: 22, marginBottom: 8 },
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 14, backgroundColor: "#fff" },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  row: { flexDirection: "row", alignItems: "center" },
  flexRow: { flex: 1, flexDirection: "row", flexWrap: "wrap" },
  badgeWord: { color: "#2A1513" },
  sectionPt: { fontWeight: "400", letterSpacing: 0, color: "#2A151399" },
  special: { borderWidth: 1, borderColor: "#2A151322", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: "#fff" },
  prefix: { fontSize: 15, color: "#2A151380" },
  form: { fontSize: 15, color: "#2A1513" },
  irregular: { fontSize: 15, color: BRAND, fontWeight: "700" },
  spelling: { fontSize: 15, color: "#2A1513", textDecorationLine: "underline", textDecorationColor: "#f59e0b" },
  bold: { fontWeight: "700", color: "#2A1513" },
  subject: { fontSize: 18, color: "#2A1513" },
  feedback: { marginTop: 14, padding: 12, borderRadius: 10, borderWidth: 1, gap: 4 },
  feedbackRight: { backgroundColor: "#16a34a14", borderColor: "#16a34a55" },
  feedbackWrong: { backgroundColor: "#dc262614", borderColor: "#dc262655" },
  feedbackTitle: { fontSize: 15, fontWeight: "700", color: "#2A1513" },
  button: { marginTop: 18, backgroundColor: BRAND, borderRadius: 12, paddingVertical: 13, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
