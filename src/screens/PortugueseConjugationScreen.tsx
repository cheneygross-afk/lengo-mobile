import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, Keyboard } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { PORTUGUESE_LANG, speak } from "@/lib/speech";
import { conjugate, ptSpecFor } from "@/lib/pt-conjugation/conjugate";
import { describePtHit, searchPtVerbs, warmUpPtLookup } from "@/lib/pt-conjugation/lookup";
import { PT_VERB_SPECS } from "@/lib/pt-conjugation/verbs";
import { impLabel, isImperative, speechFor, subjectPrefix } from "@/lib/pt-conjugation/text";
import { EXTRA_PERSONS, TENSES, personsOf, type Irregularity, type Person, type PtConjugation, type TenseId } from "@/lib/pt-conjugation/types";
import {
  PT_DRILL_PERSONS,
  PT_DRILL_TENSES,
  PT_VERB_SETS,
  gradePtDrillAnswer,
  makePtDrill,
  ptDrillTenseLabel,
  ptDrillTenseName,
  ptVerbsInSet,
  type PtDrillQuestion,
  type PtVerbSetId,
} from "@/lib/pt-conjugation/drill";

type Props = NativeStackScreenProps<AppStackParamList, "PortugueseConjugation">;

const BRAND = "#8B0000";
const LANG = PORTUGUESE_LANG;
const POPULAR = [
  "ser", "estar", "ter", "ir", "fazer", "poder", "querer", "saber", "dizer", "vir", "ver", "dar", "pôr", "ficar", "falar", "comer",
  "gostar", "levantar-se",
];
// Which tenses appear together, in the order a learner meets them (the
// website's PtVerbTablesView).
const GROUPS: { title: string; pt: string; note?: string; tenses: TenseId[] }[] = [
  { title: "Indicative", pt: "Indicativo", tenses: ["pres", "pret", "impf", "ppc", "mqpc"] },
  {
    title: "Future and conditional",
    pt: "Futuro do presente e do pretérito",
    note: 'Mostly written and formal. In speech Brazilians say "vou falar" for the future and often "eu falava" for the conditional.',
    tenses: ["fut", "futc", "cond", "condc"],
  },
  {
    title: "Subjunctive",
    pt: "Subjuntivo",
    note: 'Shown with the word that usually brings it in: "que" (present), "se" (imperfect), "quando" (future). The future subjunctive has no English equivalent: "quando eu chegar" is \'when I arrive\'.',
    tenses: ["sbpres", "sbimpf", "sbfut", "sbppc", "sbmqp", "sbfutc"],
  },
  { title: "Imperative", pt: "Imperativo", tenses: ["impa", "impn"] },
  { title: "Personal infinitive", pt: "Infinitivo pessoal", tenses: ["infp"] },
];
const KIND_LABEL: Record<PtConjugation["kind"], string> = {
  regular: "Regular verb",
  spelling: "Regular, with spelling changes",
  stem: "Stem-changing verb",
  irregular: "Irregular verb",
};
const PERSON_LABEL: Record<Person, string> = { eu: "eu", tu: "tu", ele: "você/ele/ela", nos: "nós", vos: "vós", eles: "vocês/eles/elas" };
const SPECIAL = ["á", "â", "ã", "à", "é", "ê", "í", "ó", "ô", "õ", "ú", "ç"];

// Mobile port of the Brazilian Portuguese course's conjugation tool
// (/lessons/pt/tools/conjugation): verb tables (every form tap-to-hear with
// its subject, irregular forms highlighted, tu and vós behind a toggle) and
// typed drills. The German counterpart is GermanConjugationScreen.
export default function PortugueseConjugationScreen({ route }: Props) {
  const [tab, setTab] = useState<"tables" | "drill">("tables");
  useEffect(() => {
    const t = setTimeout(warmUpPtLookup, 400);
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
  const [verb, setVerb] = useState<string | null>(() => (initialVerb ? searchPtVerbs(initialVerb, 1)[0]?.infinitive ?? null : null));
  const results = useMemo(() => (query.trim() ? searchPtVerbs(query, 8) : []), [query]);
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
        text={'Type a verb in Portuguese or English, or any conjugated form ("fiz", "que eu saiba", "tinha feito", "me levanto")'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginBottom: 6 }]}
      />
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="e.g. trazer, ela fez, to leave"
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
                    .map((h) => `${h.form}: ${describePtHit(h)}`)
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
          <Text style={[s.small, { marginTop: 12 }]}>
            {PT_VERB_SPECS.length} verbs, with every irregular and stem-changing pattern.
          </Text>
          <TapText
            text={'Tip: tap any form in the tables to hear it, with its subject ("eu faço", "que ela saiba").'}
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

/** One table row: "que eu " + "fale", tap to hear the whole phrase. */
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

function TenseCard({ verb, tense, extra }: { verb: PtConjugation; tense: TenseId; extra: boolean }) {
  const info = TENSES.find((t) => t.id === tense)!;
  const marks = verb.marks[tense] ?? {};
  const table = verb.tenses[tense];
  const persons = personsOf(tense).filter((p) => (verb.impersonal ? p === "ele" : extra || !EXTRA_PERSONS.includes(p)));
  const none = persons.every((p) => !table[p]);
  return (
    <View style={s.card}>
      <Text style={s.cardTitle}>{info.en}</Text>
      <TapText text={info.pt} lang={LANG} mode="target" style={s.small} />
      <TapText text={info.use} lang={LANG} mode="mixed" style={[s.small, { marginTop: 4 }]} />
      {none ? (
        <Text style={[s.small, { marginTop: 8 }]}>
          {verb.impersonal ? "Not used: the verb has no subject." : "Not used in the imperative."}
        </Text>
      ) : (
        <View style={{ marginTop: 8, gap: 3 }}>
          {persons.map((p) => (
            <View key={p} style={EXTRA_PERSONS.includes(p) ? { opacity: 0.75 } : undefined}>
              <Cell person={p} tense={tense} form={table[p]} mark={marks[p]} subject={verb.impersonal ? "" : undefined} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

/** A Portuguese word or phrase that speaks when tapped. */
function Spoken({ text, say, mark }: { text: string; say?: string; mark?: Irregularity }) {
  return (
    <Text style={mark === "irregular" ? s.irregular : s.form} onPress={() => speak(say ?? text, LANG)}>
      {text}
    </Text>
  );
}

function VerbTables({ infinitive, onPick }: { infinitive: string; onPick: (inf: string) => void }) {
  const [extra, setExtra] = useState(false);
  const [showRare, setShowRare] = useState(false);
  const verb = conjugate(infinitive);
  if (!verb) {
    return (
      <Text style={[s.muted, { marginTop: 16 }]}>
        That doesn&apos;t look like a Portuguese infinitive (they end in -ar, -er or -ir, or -por).
      </Text>
    );
  }
  const canToggle = ptSpecFor(verb.base)?.prn === "also";
  const ppMark = verb.marks.participle?.form;
  // Badges: English label, then the Portuguese word it is about (tap to hear).
  const badges: [string, string?][] = [[KIND_LABEL[verb.kind]]];
  if (ppMark === "irregular" && !verb.doubleParticiple && verb.kind !== "irregular") badges.push(["Irregular participle", verb.participle]);
  if (verb.doubleParticiple) badges.push(["Two participles", [...new Set([...verb.doubleParticiple.ter, verb.doubleParticiple.serEstar])].join(" / ")]);
  if (verb.reflexive) badges.push(["Reflexive", "-se"]);
  if (verb.impersonal) badges.push(["Impersonal, only in the form", verb.tenses.pres.ele ?? undefined]);

  const ter = verb.doubleParticiple ? verb.doubleParticiple.ter.join(" / ") : verb.participle;
  const keyForms: { label: string; text: string; speech: string; mark?: Irregularity }[] = [
    { label: "Infinitive", text: verb.infinitive, speech: verb.infinitive },
    { label: "Gerund", text: verb.gerund, speech: verb.gerund, mark: verb.marks.gerund?.form },
    { label: verb.doubleParticiple ? "Participle with ter" : "Past participle", text: ter, speech: ter.split(" / ")[0], mark: ppMark },
  ];
  if (verb.doubleParticiple) {
    const se = verb.doubleParticiple.serEstar;
    keyForms.push({ label: "Participle with ser / estar", text: se, speech: se, mark: "irregular" });
  }
  keyForms.push(
    { label: "Past infinitive", text: verb.pastInfinitive, speech: verb.pastInfinitive },
    { label: "Past gerund", text: verb.pastGerund, speech: verb.pastGerund }
  );
  const meaning = verb.reflexive && verb.enSe ? verb.enSe : verb.en;

  return (
    <View style={{ marginTop: 16 }}>
      <View style={s.headRow}>
        <TapText text={verb.infinitive} lang={LANG} mode="target" style={s.title} />
      </View>
      {meaning ? <TapText text={meaning} lang={LANG} mode="english" style={s.muted} /> : null}
      <View style={[s.chips, { marginTop: 8 }]}>
        {badges.map(([label, pt]) => (
          <Text key={label} style={[s.badge, label === KIND_LABEL.irregular && s.badgeIrregular]}>
            {label}
            {pt ? (
              <>
                {" "}
                <Text style={s.badgeWord} onPress={() => speak(pt.replace(/^-/, "").split(" / ")[0], LANG)}>
                  {pt}
                </Text>
              </>
            ) : null}
          </Text>
        ))}
      </View>
      {canToggle && (
        <Pressable onPress={() => onPick(verb.reflexive ? verb.base : `${verb.base}-se`)}>
          <Text style={s.link}>{verb.reflexive ? `Show ${verb.base} without se` : `Show the reflexive verb (${verb.base}-se)`}</Text>
        </Pressable>
      )}
      <Pressable onPress={() => setExtra((v) => !v)}>
        <Text style={s.link}>{extra ? "Hide tu and vós" : "Show tu and vós"}</Text>
      </Pressable>
      {extra && (
        <TapText
          text={'"tu": used in Portugal and parts of Brazil (the South, the North and Northeast, Rio in speech), often with the você form ("tu fala"). "vós": archaic / liturgical, found in the Bible, prayers and old texts.'}
          lang={LANG}
          mode="mixed"
          style={[s.small, { marginTop: 6 }]}
        />
      )}
      {!verb.known && (
        <Text style={s.warning}>
          This verb isn&apos;t in Deep End&apos;s verb list, so these tables follow the regular pattern of its ending (with the usual
          spelling changes). Check a dictionary: if the verb is irregular or changes its stem vowel, some forms will be wrong.
        </Text>
      )}
      <View style={{ marginTop: 12, gap: 4 }}>
        {keyForms.map((row) => (
          <View key={row.label} style={s.row}>
            <Text style={[s.small, { width: 170 }]}>{row.label}</Text>
            <View style={s.flexRow}>
              <Spoken text={row.text} say={row.speech} mark={row.mark} />
            </View>
          </View>
        ))}
      </View>
      <Text style={[s.small, { marginTop: 10 }]}>
        <Text style={s.irregular}>Bold red</Text>: irregular or stem-changing form. <Text style={s.spelling}>Underlined</Text>:
        regular, with a spelling change to keep the sound (<Spoken text="fiquei" />, <Spoken text="conheço" />) or an accent (
        <Spoken text="saímos" />). Tap any form to hear it.
      </Text>
      <TapText
        text={'"você", "ele", "ela" and "a gente" (we, in speech) share a form: "a gente fala". So do "vocês", "eles" and "elas". The compound tenses use "ter"; formal writing can use "haver" instead ("havia falado").'}
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
            <Text style={s.sectionPt} onPress={() => speak(g.pt, LANG)}>
              {" · "}
              {g.pt}
            </Text>
          </Text>
          {g.note ? <TapText text={g.note} lang={LANG} mode="mixed" style={[s.small, { marginBottom: 8 }]} /> : null}
          <View style={{ gap: 10 }}>
            {g.tenses.map((t) => (
              <TenseCard key={t} verb={verb} tense={t} extra={extra} />
            ))}
          </View>
        </View>
      ))}
      <Pressable onPress={() => setShowRare((v) => !v)}>
        <Text style={[s.link, { marginTop: 16 }]}>{showRare ? "Hide" : "Show"} the literary tense</Text>
      </Pressable>
      {showRare && (
        <View style={{ marginTop: 8, gap: 10 }}>
          <TapText
            text={'The simple pluperfect ("eu falara") means the same as "eu tinha falado". It is only found in literature and formal writing; you need to recognize it, not use it. Careful: its eles form looks like the pretérito ("falaram").'}
            lang={LANG}
            mode="mixed"
            style={s.small}
          />
          <TenseCard verb={verb} tense="mqp" extra={extra} />
        </View>
      )}
    </View>
  );
}

// ---- Drill -------------------------------------------------------------

type Result = { q: PtDrillQuestion; typed: string; correct: boolean; note?: string };
const COUNTS = [10, 20, 30, 50];
const full = (q: PtDrillQuestion, answer: string) => `${q.prefix}${answer}`.trim();

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
  const [persons, setPersons] = useState<Person[]>(["eu", "ele", "nos", "eles"]);
  const [extra, setExtra] = useState(false);
  const [set, setSet] = useState<PtVerbSetId>("top25");
  const [count, setCount] = useState(20);
  const [questions, setQuestions] = useState<PtDrillQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [checked, setChecked] = useState<Result | null>(null);
  const [empty, setEmpty] = useState(false);

  const verbs = useMemo(() => ptVerbsInSet(set), [set]);
  const activePersons = extra ? persons : persons.filter((p) => !EXTRA_PERSONS.includes(p));

  function start() {
    const qs = makePtDrill({ tenses, persons: activePersons, verbs, count, seed: Date.now() });
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
    const g = gradePtDrillAnswer(q, typed);
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
            {ptDrillTenseLabel(q.tense)} · <TapText text={ptDrillTenseName(q.tense)} lang={LANG} mode="target" style={s.small} />
          </Text>
          <TapText text={q.infinitive} lang={LANG} mode="target" style={s.title} />
          {q.en ? <TapText text={q.en} lang={LANG} mode="english" style={s.muted} /> : null}
          <View style={[s.row, { marginTop: 16, gap: 10 }]}>
            {imp ? <TapText text={q.subject} lang={LANG} mode="target" style={[s.subject, { color: "#2A151399" }]} /> : null}
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
            {ptDrillTenseLabel(r.q.tense)}: <TapText text={r.q.infinitive} lang={LANG} mode="target" /> →{" "}
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

  const ready = tenses.length > 0 && activePersons.length > 0 && verbs.length > 0;
  return (
    <ScrollView style={s.flex} contentContainerStyle={s.content}>
      <Text style={s.section}>TENSES</Text>
      <View style={s.chips}>
        {PT_DRILL_TENSES.map((t) => (
          <Chip key={t} on={tenses.includes(t)} onPress={() => setTenses((v) => toggle(v, t))} label={ptDrillTenseLabel(t)} />
        ))}
      </View>
      <TapText
        text={'The subjunctive comes with its usual word in front ("que ela", "se eu", "quando nós"), the negative imperative with "não". The present perfect is "tenho falado" (I have been speaking lately).'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginTop: 6 }]}
      />
      <Text style={s.section}>PERSONS</Text>
      <View style={s.chips}>
        {PT_DRILL_PERSONS.filter((p) => extra || !EXTRA_PERSONS.includes(p)).map((p) => (
          <Chip key={p} on={persons.includes(p)} onPress={() => setPersons((v) => toggle(v, p))} label={PERSON_LABEL[p]} />
        ))}
      </View>
      <Pressable
        onPress={() => {
          if (!extra) setPersons((v) => [...new Set([...v, ...EXTRA_PERSONS])]);
          setExtra((v) => !v);
        }}
      >
        <Text style={s.link}>{extra ? "Leave out tu and vós" : "Add tu and vós"}</Text>
      </Pressable>
      <TapText
        text={'"tu": used in Portugal and parts of Brazil. "vós": archaic / liturgical. "a gente" (we, in speech) takes the você/ele/ela form: "a gente fala". Type the verb after the subject ("fiz", "tinha feito"); the subject itself is optional. Accents count: use the buttons if your keyboard has none.'}
        lang={LANG}
        mode="mixed"
        style={[s.small, { marginTop: 6 }]}
      />
      <Text style={s.section}>VERBS</Text>
      <View style={s.chips}>
        {PT_VERB_SETS.map((v) => (
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
          Those tenses and persons don&apos;t go together (the imperative has no eu form). Add another tense or person.
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
