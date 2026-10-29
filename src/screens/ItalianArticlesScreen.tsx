import { useRef, useState, type ReactNode } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { ItMixed, ItSay as Say } from "@/components/ItSay";
import { ITALIAN_LANG, speak } from "@/lib/speech";
import {
  ARTICLE_DRILL,
  ARTICLE_DRILL_KINDS,
  ARTICLE_SLOTS,
  ARTICLES_LESSONS,
  ARTICULATED,
  ARTICULATED_EXAMPLES,
  DEFINITE_ROWS,
  INDEFINITE_ROWS,
  PARTITIVE_ALTERNATIVES,
  PARTITIVE_EXAMPLES,
  PREPOSITIONS,
  drillOptions,
  drillPhrase,
  isDrillAnswerRight,
  type ArticleDrillItem,
  type ArticleDrillKind,
  type ArticleRow,
} from "@/lib/it-tools/articles";

type Props = NativeStackScreenProps<AppStackParamList, "ItalianArticles">;

const BRAND = "#8B0000";
const LANG = ITALIAN_LANG;
const COUNTS = [10, 20, 30];
// The course's level names for the lessons' level paths (names, never codes).
const LEVEL_NAME: Record<string, string> = {
  a1: "Beginner",
  a2: "Elementary",
  b1: "Intermediate",
  b2: "Upper Intermediate",
  c1: "Advanced",
  c2: "Mastery",
};

/** What to play for a form: an elided one is read with a word after it ("l'amico"). */
const spoken = (form: string) => (form.endsWith("'") ? `${form}${form.startsWith("un") ? "amica" : "amico"}` : form);

// Mobile port of the Italian course's Articles & Prepositions tool (the
// website's /lessons/it/tools/articles-prepositions, data in
// src/lib/it-tools/articles.ts, synced): the article and
// articulated-preposition tables, the partitive, the lessons that teach
// them, and the quick drill (the website's ItArticlesDrill). Every Italian
// word or phrase is read aloud in the Italian voice when tapped.
export default function ItalianArticlesScreen({ navigation }: Props) {
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <Text style={s.h1}>Articles &amp; Prepositions</Text>
      <Text style={s.intro}>
        Italian has seven words for the and four for a, and the common prepositions fuse with them: <Say text="a il mare">a + il</Say> is{" "}
        <Say text="al mare">al mare</Say>, <Say text="in la borsa">in + la</Say> is <Say text="nella borsa">nella borsa</Say>. The choice
        depends on the gender and number of the noun and on the sound the next word starts with. Here are the tables, the rules, and
        a drill. Tap any Italian word to hear it.
      </Text>

      <Section title="The: the definite article">
        <Text style={s.body}>
          The article agrees with the noun and is chosen by the sound of the word right after it. So{" "}
          <Say text="lo studente">lo studente</Say> but <Say text="il nuovo studente">il nuovo studente</Say>,{" "}
          <Say text="gli amici">gli amici</Say> but <Say text="i vecchi amici">i vecchi amici</Say>.
        </Text>
        <ArticleTable rows={DEFINITE_ROWS} />
        <Bullet>
          <Text style={s.strong}>The lo words</Text> are masculine words that start with s + consonant (<Say text="lo sport">lo sport</Say>,{" "}
          <Say text="lo specchio">lo specchio</Say>), z (<Say text="lo zio">lo zio</Say>), gn (<Say text="lo gnomo">lo gnomo</Say>), ps (
          <Say text="lo psicologo">lo psicologo</Say>), pn (<Say text="lo pneumatico">lo pneumatico</Say>, though{" "}
          <Say text="il pneumatico">il pneumatico</Say> is common in speech), x (<Say text="lo xilofono">lo xilofono</Say>) and y (
          <Say text="lo yogurt">lo yogurt</Say>). Their plural is <Say text="gli">gli</Say>.
        </Bullet>
        <Bullet>
          <Text style={s.strong}>Silent h</Text> counts as a vowel: <Say text="l'hotel">l&apos;hotel</Say>, <Say text="gli hotel">gli hotel</Say>.
          A <Text style={s.strong}>w</Text> in an English loanword counts as a consonant: <Say text="il weekend">il weekend</Say>,{" "}
          <Say text="il whisky">il whisky</Say>.
        </Bullet>
        <Bullet>
          <Text style={s.strong}>Le never shortens</Text> in modern Italian: <Say text="le amiche">le amiche</Say>,{" "}
          <Say text="le isole">le isole</Say>. Only the singular <Say text="la">la</Say> becomes <Say text="l'amica">l&apos;</Say>.
        </Bullet>
        <Bullet>
          <Text style={s.strong}>Italian uses the article more than English</Text>: with general statements (
          <Say text="Il caffè fa bene.">Il caffè fa bene.</Say>), with possessives (<Say text="la mia macchina">la mia macchina</Say>) and
          with titles (<Say text="la signora Rossi">la signora Rossi</Say>, <Say text="il dottor Bianchi">il dottor Bianchi</Say>).
        </Bullet>
        <Bullet>
          <Text style={s.strong}>One exception</Text>: <Say text="il dio">il dio</Say>, but <Say text="gli dei">gli dei</Say>.
        </Bullet>
      </Section>

      <Section title="A, an: the indefinite article">
        <Text style={s.body}>
          Same sounds, same logic as the definite article. The trap is the apostrophe: it marks a dropped vowel, so only the feminine{" "}
          <Say text="una">una</Say> takes one (<Say text="un'amica">un&apos;amica</Say>). The masculine is plain <Say text="un">un</Say> (
          <Say text="un amico">un amico</Say>, <Say text="un altro">un altro</Say>): writing <Text style={s.strike}>un&apos;amico</Text> is a
          mistake.
        </Text>
        <ArticleTable rows={INDEFINITE_ROWS} />
        <Text style={s.body}>
          There is no plural indefinite article: for some, see the partitive below (<Say text="dei libri">dei libri</Say>,{" "}
          <Say text="degli amici">degli amici</Say>).
        </Text>
      </Section>

      <Section title="Prepositions + the: the articulated prepositions">
        <Text style={s.body}>
          When <Say text="di">di</Say>, <Say text="a">a</Say>, <Say text="da">da</Say>, <Say text="in">in</Say> and <Say text="su">su</Say> meet
          a definite article, they join it in one word. <Say text="Di">Di</Say> becomes <Say text="de">de-</Say> and <Say text="in">in</Say>{" "}
          becomes <Say text="ne">ne-</Say>; the double l comes from the <Say text="l">l</Say> of the article (<Say text="della">della</Say>,{" "}
          <Say text="nello">nello</Say>). Pick the article first, then add the preposition.
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.gridScroll}>
          <View>
            <View style={[s.gridRow, s.gridHead]}>
              <Text style={[s.gridCell, s.gridFirst, s.muted]}>+</Text>
              {ARTICLE_SLOTS.map((slot) => (
                <Text key={slot} style={[s.gridCell, s.strong]}>
                  <Say text={spoken(slot)}>{slot}</Say>
                </Text>
              ))}
            </View>
            {PREPOSITIONS.map((p) => (
              <View key={p} style={s.gridRow}>
                <Text style={[s.gridCell, s.gridFirst, s.strong]}>
                  <Say text={p} />
                </Text>
                {ARTICLE_SLOTS.map((slot) => (
                  <Text key={slot} style={s.gridCell}>
                    <Say text={spoken(ARTICULATED[p][slot])}>{ARTICULATED[p][slot]}</Say>
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <Examples list={ARTICULATED_EXAMPLES} />
        <Bullet>
          <Text style={s.strong}>Con</Text> usually stays separate: <Say text="con il treno">con il treno</Say>,{" "}
          <Say text="con gli amici">con gli amici</Say>. The forms <Say text="col">col</Say> and <Say text="coi">coi</Say> are still heard (
          <Say text="col treno">col treno</Say>, <Say text="coi bambini">coi bambini</Say>); the others are old-fashioned.
        </Bullet>
        <Bullet>
          <Text style={s.strong}>Per</Text> never joins: <Say text="per il treno">per il treno</Say>, <Say text="per la mamma">per la mamma</Say>.
          So do <Say text="tra">tra</Say> and <Say text="fra">fra</Say>.
        </Bullet>
        <Bullet>
          <Text style={s.strong}>No article, no fusion</Text>: cities take a plain <Say text="a">a</Say> (<Say text="a Roma">a Roma</Say>), and
          many everyday places take a plain <Say text="in">in</Say> or <Say text="a">a</Say>: <Say text="in banca">in banca</Say>,{" "}
          <Say text="in ufficio">in ufficio</Say>, <Say text="in centro">in centro</Say>, <Say text="a casa">a casa</Say>,{" "}
          <Say text="a scuola">a scuola</Say>. Add a detail and the article comes back:{" "}
          <Say text="nella banca di mio padre">nella banca di mio padre</Say>.
        </Bullet>
        <Bullet>
          <Text style={s.strong}>Countries</Text> take <Say text="in">in</Say> without the article (<Say text="in Italia">in Italia</Say>,{" "}
          <Say text="in Francia">in Francia</Say>), except plural ones (<Say text="negli Stati Uniti">negli Stati Uniti</Say>) and ones with
          a detail (<Say text="nell'Italia del Sud">nell&apos;Italia del Sud</Say>).
        </Bullet>
        <Bullet>
          <Text style={s.strong}>Times</Text>: <Say text="alle otto">alle otto</Say>, <Say text="all'una">all&apos;una</Say>,{" "}
          <Say text="dalle nove alle cinque">dalle nove alle cinque</Say>.
        </Bullet>
      </Section>

      <Section title="Some: the partitive">
        <Text style={s.body}>
          <Say text="Di">Di</Say> + the article also means some or any, for an unspecified amount. It is the same form as the articulated
          preposition, so the table above covers it.
        </Text>
        <Examples list={PARTITIVE_EXAMPLES} />
        <Text style={s.body}>Other ways to say it, and when to leave it out:</Text>
        <Examples list={PARTITIVE_ALTERNATIVES} />
        <Text style={s.body}>
          In lists and short questions the partitive is often dropped:{" "}
          <Say text="Compro pane, latte e uova.">Compro pane, latte e uova.</Say>
        </Text>
      </Section>

      <Section title="Lessons on this">
        {ARTICLES_LESSONS.map(([level, slug, title]) => (
          <Pressable key={slug} onPress={() => navigation.navigate("LessonRunner", { slug, levelPath: `it/${level}` })}>
            <Text style={s.body}>
              <Text style={s.link}>{title}</Text>
              <Text style={s.muted}> · {LEVEL_NAME[level] ?? level}</Text>
            </Text>
          </Pressable>
        ))}
      </Section>

      <Section title="Quick drill">
        <Text style={s.body}>
          Choose or type the right article or preposition for each noun phrase. Each answer is checked at once and read aloud.
        </Text>
        <ArticlesDrill />
      </Section>
    </ScrollView>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={s.h2}>{title}</Text>
      {children}
    </View>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <View style={s.bulletRow}>
      <Text style={s.body}>•</Text>
      <Text style={[s.body, s.flex1]}>{children}</Text>
    </View>
  );
}

/** [Italian, English] examples: the Italian tappable, a short gloss after it. */
function Examples({ list }: { list: [string, string][] }) {
  return (
    <View style={s.gap6}>
      {list.map(([it, en]) => (
        <Text key={it} style={s.body}>
          <Say text={it} style={s.example} /> <Text style={s.muted}>{en}</Text>
        </Text>
      ))}
    </View>
  );
}

function ArticleTable({ rows }: { rows: ArticleRow[] }) {
  return (
    <View style={s.gap8}>
      {rows.map((r) => (
        <View key={`${r.label}-${r.form}`} style={s.card}>
          <View style={s.rowBetween}>
            <Text style={s.muted}>{r.label}</Text>
            <Text style={s.form}>
              <Say text={spoken(r.form)}>{r.form}</Say>
            </Text>
          </View>
          <ItMixed text={r.when} style={s.body} />
          <Text style={s.body}>
            {r.examples.map((e, i) => (
              <Text key={e}>
                {i > 0 ? ", " : ""}
                <Say text={e} />
              </Text>
            ))}
          </Text>
        </View>
      ))}
    </View>
  );
}

// ---- The quick drill (the website's ItArticlesDrill) ---------------------

type Mode = "choose" | "type";
type Result = { item: ArticleDrillItem; given: string; correct: boolean };

function shuffle<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Chip({ on, onPress, children }: { on: boolean; onPress: () => void; children: ReactNode }) {
  return (
    <Pressable onPress={onPress} style={[s.chip, on && s.chipOn]} accessibilityState={{ selected: on }}>
      <Text style={[s.chipText, on && s.chipTextOn]}>{children}</Text>
    </Pressable>
  );
}

/** The noun phrase with a gap where the article or preposition goes. */
function Gapped({ item }: { item: ArticleDrillItem }) {
  return (
    <Text style={s.phrase}>
      {item.before ? (
        <>
          <TapText text={item.before} lang={LANG} mode="target" style={s.phrase} />{" "}
        </>
      ) : null}
      <Text style={s.gap}> ? </Text> <TapText text={item.after} lang={LANG} mode="target" style={s.phrase} />
    </Text>
  );
}

function ArticlesDrill() {
  const [kinds, setKinds] = useState<ArticleDrillKind[]>(["definite", "indefinite", "preposition"]);
  const [mode, setMode] = useState<Mode>("choose");
  const [count, setCount] = useState(20);
  const [items, setItems] = useState<ArticleDrillItem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [checked, setChecked] = useState<Result | null>(null);
  const inputRef = useRef<TextInput>(null);

  function start() {
    const pool = ARTICLE_DRILL.filter((i) => kinds.includes(i.kind));
    if (!pool.length) return;
    setItems(shuffle(pool).slice(0, count));
    setIndex(0);
    setResults([]);
    setChecked(null);
    setTyped("");
  }

  function check(given: string) {
    if (!items || checked || !given.trim()) return;
    const item = items[index];
    const r = { item, given, correct: isDrillAnswerRight(item, given) };
    setChecked(r);
    setResults((prev) => [...prev, r]);
    speak(drillPhrase(item), LANG);
  }

  function next() {
    setChecked(null);
    setTyped("");
    setIndex((i) => i + 1);
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  if (items && index < items.length) {
    const item = items[index];
    const options = drillOptions(item);
    return (
      <View style={s.gap10}>
        <View style={s.rowBetween}>
          <Text style={s.muted}>
            Question {index + 1} of {items.length}
          </Text>
          <Pressable onPress={() => setItems(null)} hitSlop={8}>
            <Text style={[s.muted, s.underline]}>End drill</Text>
          </Pressable>
        </View>
        <View style={s.card}>
          <Text style={s.muted}>{item.en}</Text>
          {checked ? <TapText text={drillPhrase(item)} lang={LANG} mode="target" style={s.phrase} /> : <Gapped item={item} />}

          {mode === "choose" ? (
            <View style={s.options}>
              {options.map((o) => {
                const isAnswer = checked && o === item.answer;
                const isWrongPick = checked && !checked.correct && o === checked.given;
                return (
                  <Pressable
                    key={o}
                    disabled={!!checked}
                    onPress={() => check(o)}
                    style={[s.option, isAnswer ? s.optionRight : isWrongPick ? s.optionWrong : null]}
                  >
                    <Text style={s.optionText}>{o}</Text>
                  </Pressable>
                );
              })}
            </View>
          ) : (
            <View style={s.typeRow}>
              <TextInput
                ref={inputRef}
                value={typed}
                onChangeText={setTyped}
                editable={!checked}
                autoCapitalize="none"
                autoCorrect={false}
                spellCheck={false}
                autoFocus
                placeholder="il, lo, l' ... del, nello ..."
                placeholderTextColor="#2A151355"
                style={s.input}
                accessibilityLabel="Your answer"
                returnKeyType={checked ? "next" : "done"}
                blurOnSubmit={false}
                onSubmitEditing={() => (checked ? next() : check(typed))}
              />
              <Pressable style={s.btn} onPress={() => (checked ? next() : check(typed))}>
                <Text style={s.btnText}>{checked ? "Next" : "Check"}</Text>
              </Pressable>
            </View>
          )}

          {checked ? (
            <View style={[s.feedback, checked.correct ? s.feedbackRight : s.feedbackWrong]}>
              <Text style={s.strong}>{checked.correct ? "Correct!" : "Not quite."}</Text>
              <TapText text={item.why} lang={LANG} mode="mixed" style={s.body} />
              <Text style={s.body}>
                Answer: <TapText text={drillPhrase(item)} lang={LANG} mode="target" style={s.body} />
              </Text>
            </View>
          ) : null}
          {checked && mode === "choose" ? (
            <Pressable style={[s.btn, s.selfStart]} onPress={next}>
              <Text style={s.btnText}>Next</Text>
            </Pressable>
          ) : null}
        </View>
        <Text style={s.muted}>
          Score: {results.filter((r) => r.correct).length} / {results.length}
        </Text>
      </View>
    );
  }

  if (items && index >= items.length) {
    const right = results.filter((r) => r.correct).length;
    const missed = results.filter((r) => !r.correct);
    return (
      <View style={s.gap10}>
        <Text style={s.h3}>
          {right} / {results.length} right
        </Text>
        {missed.length > 0 ? (
          <View style={s.gap6}>
            <Text style={s.body}>To go over:</Text>
            {missed.map((r) => (
              <Text key={r.item.id} style={s.body}>
                <TapText text={drillPhrase(r.item)} lang={LANG} mode="target" style={s.strong} />{" "}
                <Text style={s.muted}>({r.item.en})</Text> <Text style={s.muted}>your answer: </Text>
                <TapText text={r.given} lang={LANG} mode="target" style={s.muted} />
              </Text>
            ))}
          </View>
        ) : null}
        <View style={s.row}>
          <Pressable style={s.btn} onPress={start}>
            <Text style={s.btnText}>New drill</Text>
          </Pressable>
          <Pressable style={s.btnOutline} onPress={() => setItems(null)}>
            <Text style={s.btnOutlineText}>Change settings</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const available = ARTICLE_DRILL.filter((i) => kinds.includes(i.kind)).length;
  return (
    <View style={s.gap14}>
      <View style={s.gap6}>
        <Text style={s.h3}>Practice</Text>
        <View style={s.chips}>
          {ARTICLE_DRILL_KINDS.map((k) => (
            <Chip
              key={k.id}
              on={kinds.includes(k.id)}
              onPress={() => setKinds((v) => (v.includes(k.id) ? v.filter((x) => x !== k.id) : [...v, k.id]))}
            >
              {k.label}
            </Chip>
          ))}
        </View>
        <Text style={s.small}>{available} noun phrases.</Text>
      </View>
      <View style={s.gap6}>
        <Text style={s.h3}>Answer by</Text>
        <View style={s.chips}>
          <Chip on={mode === "choose"} onPress={() => setMode("choose")}>
            Choosing
          </Chip>
          <Chip on={mode === "type"} onPress={() => setMode("type")}>
            Typing
          </Chip>
        </View>
      </View>
      <View style={s.gap6}>
        <Text style={s.h3}>Questions</Text>
        <View style={s.chips}>
          {COUNTS.map((n) => (
            <Chip key={n} on={count === n} onPress={() => setCount(n)}>
              {n}
            </Chip>
          ))}
        </View>
      </View>
      <Pressable style={[s.btn, s.selfStart, !available && s.disabled]} onPress={start} disabled={!available}>
        <Text style={s.btnText}>Start drill</Text>
      </Pressable>
      {!available ? <Text style={s.muted}>Pick at least one thing to practice.</Text> : null}
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { padding: 20, gap: 14, paddingBottom: 60 },
  h1: { fontSize: 28, fontFamily: "Fraunces_600SemiBold", color: "#2A1513" },
  h2: { fontSize: 19, fontWeight: "700", color: "#2A1513" },
  h3: { fontSize: 15, fontWeight: "600", color: "#2A1513" },
  intro: { fontSize: 15, color: "#2A1513b3", lineHeight: 22 },
  body: { fontSize: 14, color: "#2A1513cc", lineHeight: 21 },
  muted: { fontSize: 13, color: "#2A151399" },
  small: { fontSize: 12, color: "#2A151399" },
  strong: { fontWeight: "700", color: "#2A1513" },
  strike: { textDecorationLine: "line-through" },
  link: { color: "#2A1513", textDecorationLine: "underline" },
  underline: { textDecorationLine: "underline" },
  example: { fontSize: 15 },
  section: { gap: 10, marginTop: 14 },
  card: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#2A151314", padding: 14, gap: 6 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 },
  row: { flexDirection: "row", gap: 10, flexWrap: "wrap" },
  form: { fontSize: 20, fontWeight: "700", color: "#2A1513" },
  bulletRow: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
  flex1: { flex: 1 },
  gap6: { gap: 6 },
  gap8: { gap: 8 },
  gap10: { gap: 10 },
  gap14: { gap: 14 },
  gridScroll: { flexGrow: 0 },
  gridRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#2A15130d" },
  gridHead: { borderBottomColor: "#2A151326" },
  gridCell: { width: 62, paddingVertical: 7, textAlign: "center", fontSize: 15, color: "#2A1513" },
  gridFirst: { width: 36, textAlign: "left" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { borderWidth: 1, borderColor: "#2A151333", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 14, color: "#2A1513" },
  chipTextOn: { color: "#fff" },
  phrase: { fontSize: 22, fontWeight: "600", color: "#2A1513", lineHeight: 30 },
  gap: { color: "#2A151366", textDecorationLine: "underline" },
  options: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  option: { borderWidth: 1, borderColor: "#2A151333", borderRadius: 10, paddingHorizontal: 14, paddingVertical: 8 },
  optionRight: { backgroundColor: "#f0fdf4", borderColor: "#4ade80" },
  optionWrong: { backgroundColor: "#fef2f2", borderColor: "#fca5a5" },
  optionText: { fontSize: 18, color: "#2A1513" },
  typeRow: { flexDirection: "row", gap: 8, alignItems: "center", marginTop: 8 },
  input: {
    flex: 1,
    minWidth: 0,
    borderWidth: 1,
    borderColor: "#2A151340",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 18,
    color: "#2A1513",
    backgroundColor: "#fff",
  },
  feedback: { borderRadius: 10, borderWidth: 1, padding: 10, gap: 4, marginTop: 8 },
  feedbackRight: { backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" },
  feedbackWrong: { backgroundColor: "#fef2f2", borderColor: "#fecaca" },
  btn: { backgroundColor: BRAND, borderRadius: 10, paddingHorizontal: 16, paddingVertical: 10 },
  btnText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  btnOutline: { borderWidth: 1, borderColor: "#2A151333", borderRadius: 10, paddingHorizontal: 16, paddingVertical: 10 },
  btnOutlineText: { color: "#2A1513", fontSize: 15 },
  selfStart: { alignSelf: "flex-start", marginTop: 6 },
  disabled: { opacity: 0.4 },
});
