import { useState, type ReactNode } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import { ItSay as Say, ItSayButton } from "@/components/ItSay";
import { ITALIAN_LANG, speak } from "@/lib/speech";
import {
  ACCENT_PAIRS,
  DOUBLE_PAIRS,
  FINAL_STRESS,
  LISTEN_DRILL,
  PRONUNCIATION_LESSONS,
  SILENT_H_PAIRS,
  SPELLING_ROWS,
  STRESS_EXAMPLES,
  type ListenItem,
  type Word,
} from "@/lib/it-tools/pronunciation";

type Props = NativeStackScreenProps<AppStackParamList, "ItalianPronunciation">;

const BRAND = "#8B0000";
const LANG = ITALIAN_LANG;
const COUNTS = [10, 20];
// The course's level names for the lessons' level paths (names, never codes).
const LEVEL_NAME: Record<string, string> = {
  a1: "Beginner",
  a2: "Elementary",
  b1: "Intermediate",
  b2: "Upper Intermediate",
  c1: "Advanced",
  c2: "Mastery",
};

// Mobile port of the Italian beta's Pronunciation & Spelling tool (the
// website's /lessons/it/tools/pronunciation, data in
// src/lib/it-tools/pronunciation.ts, synced): double consonants, stress,
// written accents and the letters that change their sound, the lessons
// that teach them, and the listen-and-choose drill (the website's
// ItListenDrill). Every Italian word is read aloud in the Italian voice
// when tapped.
export default function ItalianPronunciationScreen({ navigation }: Props) {
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.h1}>Pronunciation &amp; Spelling</Text>
      <Text style={s.intro}>
        Italian is spelled almost exactly as it sounds: once you know a handful of rules you can read any word aloud, and write down
        any word you hear. The rules below are the ones English speakers trip on. Tap any Italian word to hear it.
      </Text>

      <Section title="Double consonants">
        <Text style={s.body}>
          A double consonant is held for a moment longer, and the vowel before it is a little shorter. It is not decoration: it changes
          the word. Say <Say text="nonna">nonna</Say> with one n and you say ninth (<Say text="nona">nona</Say>); ask for{" "}
          <Say text="sette">sette</Say> with one t and you ask for thirst (<Say text="sete">sete</Say>). English has the same pause between
          words (the n of thin nose), so try that in the middle of the word.
        </Text>
        <PairTable pairs={DOUBLE_PAIRS} left="One consonant" right="Double consonant" />
        <Text style={s.body}>
          Some words are always doubled after a short stressed word or a prefix: <Say text="davvero">davvero</Say> (
          <Say text="da vero">da + vero</Say>), <Say text="soprattutto">soprattutto</Say>, <Say text="dimmi">dimmi</Say>,{" "}
          <Say text="fammi">fammi</Say>. And in central and southern Italy the first consonant of a word is often doubled in speech after{" "}
          <Say text="a">a</Say>, <Say text="e">e</Say>, <Say text="è">è</Say>, <Say text="tre">tre</Say> or <Say text="che">che</Say>:{" "}
          <Say text="a casa">a casa</Say> sounds like a-ccasa. That one is never written.
        </Text>
      </Section>

      <Section title="Stress">
        <Text style={s.body}>
          Most Italian words are stressed on the second-to-last syllable. Many are stressed one syllable earlier, and spelling
          doesn&apos;t show it, so learn the stress with the word. The verb ending <Say text="-ano">-ano</Say> never takes the stress:{" "}
          <Say text="abitano">abitano</Say>, <Say text="parlano">parlano</Say>.
        </Text>
        <View style={s.gap6}>
          {STRESS_EXAMPLES.map((w) => (
            <Text key={w.it} style={s.body}>
              <Say text={w.it} style={s.word} /> <Text style={s.faint}>{w.marked}</Text> <Text style={s.muted}>{w.en}</Text>
            </Text>
          ))}
        </View>
      </Section>

      <Section title="Written accents">
        <Text style={s.body}>
          A written accent appears in one place only: on a stressed final vowel. That is why <Say text="città">città</Say> and{" "}
          <Say text="perché">perché</Say> carry one and <Say text="tavolo">tavolo</Say> doesn&apos;t. Leaving it off is a spelling mistake,
          and sometimes a different word.
        </Text>
        <View style={s.wrapList}>
          {FINAL_STRESS.map((w) => (
            <Text key={w.it} style={s.body}>
              <Say text={w.it} style={s.word} /> <Text style={s.muted}>{w.en}</Text>
            </Text>
          ))}
        </View>
        <Bullet>
          <Text style={s.strong}>Grave or acute?</Text> Most final accents are grave: <Say text="à">à</Say>, <Say text="ì">ì</Say>,{" "}
          <Say text="ò">ò</Say>, <Say text="ù">ù</Say>, and the open <Say text="è">è</Say> (<Say text="è">è</Say>,{" "}
          <Say text="caffè">caffè</Say>). The closed é, with an acute, is found in <Say text="perché">perché</Say>,{" "}
          <Say text="poiché">poiché</Say>, <Say text="affinché">affinché</Say>, <Say text="né">né</Say>, <Say text="sé">sé</Say> and the
          numbers in -tré (<Say text="ventitré">ventitré</Say>). Writing perchè is a common slip.
        </Bullet>
        <Bullet>
          <Text style={s.strong}>One-syllable words</Text> usually take no accent (<Say text="qui">qui</Say>, <Say text="qua">qua</Say>,{" "}
          <Say text="su">su</Say>, <Say text="tre">tre</Say>, <Say text="blu">blu</Say>, <Say text="re">re</Say>). Those ending in two vowels
          do (<Say text="più">più</Say>, <Say text="già">già</Say>, <Say text="può">può</Say>, <Say text="giù">giù</Say>), and a few take one
          to tell them apart from a twin:
        </Bullet>
        <PairTable pairs={ACCENT_PAIRS} left="No accent" right="Accent" />
        <Text style={s.body}>
          <Say text="un po'">Un po&apos;</Say> takes an apostrophe (it is short for <Say text="poco">poco</Say>), and{" "}
          <Say text="qual è">qual è</Say> takes neither.
        </Text>
      </Section>

      <Section title="C, g, sc, gli, gn, z: letters that change their sound">
        <Text style={s.body}>
          C and g are hard before a, o and u, and soft before e and i. An h after them keeps them hard; an i after them keeps them soft
          before a, o and u, and isn&apos;t pronounced. That is why <Say text="cerco">cerco</Say> becomes <Say text="cerchi">cerchi</Say> and{" "}
          <Say text="amica">amica</Say> becomes <Say text="amiche">amiche</Say>: the h keeps the sound the same.
        </Text>
        <View style={s.gap8}>
          {SPELLING_ROWS.map((r) => (
            <View key={r.spelling} style={s.card}>
              <View style={s.rowBetween}>
                <Text style={s.spelling}>{r.spelling}</Text>
                <Text style={[s.muted, s.flexShrink]}>{r.sound}</Text>
              </View>
              <Text style={s.body}>
                {r.examples.map((w, i) => (
                  <Text key={w.it}>
                    {i > 0 ? ", " : ""}
                    <Say text={w.it} style={s.word} /> <Text style={s.faint}>({w.en})</Text>
                  </Text>
                ))}
              </Text>
            </View>
          ))}
        </View>
        <Text style={s.body}>
          The h is silent, and it is there to tell the forms of <Say text="avere">avere</Say> from their twins:
        </Text>
        <PairTable pairs={SILENT_H_PAIRS} left="With h" right="Without h" />
        <Text style={s.body}>
          The z sounds ts in <Say text="pizza">pizza</Say> and <Say text="grazie">grazie</Say> and dz in <Say text="zero">zero</Say> and{" "}
          <Say text="romanzo">romanzo</Say>, and the choice varies across Italy; you will be understood either way. The r is always
          tapped or rolled, never the English r: <Say text="Roma">Roma</Say>, <Say text="caro">caro</Say>, <Say text="carro">carro</Say>.
        </Text>
      </Section>

      <Section title="Lessons on this">
        {PRONUNCIATION_LESSONS.map(([level, slug, title]) => (
          <Pressable key={slug} onPress={() => navigation.navigate("LessonRunner", { slug, levelPath: `it/${level}` })}>
            <Text style={s.body}>
              <Text style={s.link}>{title}</Text>
              <Text style={s.muted}> · {LEVEL_NAME[level] ?? level}</Text>
            </Text>
          </Pressable>
        ))}
      </Section>

      <Section title="Listen and choose">
        <ListenDrill />
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

function PairWord({ w, bold }: { w: Word; bold?: boolean }) {
  return (
    <View style={s.pairCell}>
      <View style={s.pairWord}>
        <Text>
          <Say text={w.it} style={[s.word, bold && s.strong]} />
        </Text>
        <ItSayButton text={w.it} />
      </View>
      <Text style={s.muted}>{w.en}</Text>
    </View>
  );
}

function PairTable({ pairs, left, right }: { pairs: [Word, Word][]; left: string; right: string }) {
  return (
    <View style={s.pairTable}>
      <View style={[s.pairRow, s.pairHead]}>
        <Text style={[s.muted, s.pairCell]}>{left}</Text>
        <Text style={[s.muted, s.pairCell]}>{right}</Text>
      </View>
      {pairs.map(([a, b]) => (
        <View key={`${a.it}-${b.it}`} style={s.pairRow}>
          <PairWord w={a} />
          <PairWord w={b} bold />
        </View>
      ))}
    </View>
  );
}

// ---- The listen-and-choose drill (the website's ItListenDrill) -----------

type Result = { item: ListenItem; picked: number };

function shuffle<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ListenDrill() {
  const [count, setCount] = useState(10);
  const [items, setItems] = useState<ListenItem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [picked, setPicked] = useState<number | null>(null);

  const play = (item: ListenItem) => speak(item.options[item.answer].it, LANG);

  function start() {
    const list = shuffle(LISTEN_DRILL).slice(0, count);
    setItems(list);
    setIndex(0);
    setResults([]);
    setPicked(null);
    play(list[0]);
  }

  function choose(i: number) {
    if (!items || picked !== null) return;
    setPicked(i);
    setResults((prev) => [...prev, { item: items[index], picked: i }]);
  }

  function next() {
    if (!items) return;
    setPicked(null);
    const n = index + 1;
    setIndex(n);
    if (n < items.length) play(items[n]);
  }

  if (items && index < items.length) {
    const item = items[index];
    const right = picked === item.answer;
    const done = picked !== null;
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
          <Pressable style={[s.btnOutline, s.selfStart]} onPress={() => play(item)}>
            <Text style={s.btnOutlineText}>🔊 Play again</Text>
          </Pressable>
          <Text style={[s.muted, s.mt8]}>Which word did you hear?</Text>
          <View style={s.choiceRow}>
            {item.options.map((o, i) => (
              <Pressable
                key={o.it}
                onPress={() => (done ? speak(o.it, LANG) : choose(i))}
                style={[s.choice, done && i === item.answer ? s.optionRight : done && i === picked ? s.optionWrong : null]}
                accessibilityHint={done ? "Plays it in Italian" : undefined}
              >
                <Text style={s.choiceText}>{o.it}</Text>
                {done ? <Text style={s.small}>{o.en}</Text> : null}
              </Pressable>
            ))}
          </View>
          {done ? (
            <View style={[s.feedback, right ? s.feedbackRight : s.feedbackWrong]}>
              <Text style={s.body}>
                <Text style={s.strong}>{right ? "Correct!" : "Not quite."} You heard </Text>
                <TapText text={item.options[item.answer].it} lang={LANG} mode="target" style={s.strong} />
                <Text style={s.strong}>.</Text>
              </Text>
              <TapText text={item.tip} lang={LANG} mode="mixed" style={s.body} />
              <Text style={s.small}>Tap either word to compare them.</Text>
            </View>
          ) : null}
          {done ? (
            <Pressable style={[s.btn, s.selfStart, s.mt8]} onPress={next}>
              <Text style={s.btnText}>{index + 1 < items.length ? "Next" : "See my score"}</Text>
            </Pressable>
          ) : null}
        </View>
        <Text style={s.muted}>
          Score: {results.filter((r) => r.picked === r.item.answer).length} / {results.length}
        </Text>
      </View>
    );
  }

  if (items) {
    const right = results.filter((r) => r.picked === r.item.answer).length;
    const missed = results.filter((r) => r.picked !== r.item.answer);
    return (
      <View style={s.gap10}>
        <Text style={s.h3}>
          {right} / {results.length} right
        </Text>
        {missed.length > 0 ? (
          <View style={s.gap6}>
            <Text style={s.body}>To listen to again:</Text>
            {missed.map((r) => (
              <Text key={r.item.id} style={s.body}>
                <TapText text={r.item.options[r.item.answer].it} lang={LANG} mode="target" style={s.strong} />{" "}
                <Text style={s.muted}>({r.item.options[r.item.answer].en})</Text>, not{" "}
                <TapText text={r.item.options[r.picked].it} lang={LANG} mode="target" style={s.body} />{" "}
                <Text style={s.muted}>({r.item.options[r.picked].en})</Text>
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

  return (
    <View style={s.gap14}>
      <Text style={s.body}>
        A word is played; choose which of two spellings you heard: double consonants, stress, and the letters whose sound changes.
        Turn your sound on.
      </Text>
      <View style={s.gap6}>
        <Text style={s.h3}>Questions</Text>
        <View style={s.chips}>
          {COUNTS.map((n) => (
            <Pressable key={n} onPress={() => setCount(n)} style={[s.chip, count === n && s.chipOn]} accessibilityState={{ selected: count === n }}>
              <Text style={[s.chipText, count === n && s.chipTextOn]}>{n}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <Pressable style={[s.btn, s.selfStart]} onPress={start}>
        <Text style={s.btnText}>Start listening</Text>
      </Pressable>
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
  faint: { fontSize: 13, color: "#2A151380" },
  small: { fontSize: 12, color: "#2A151399" },
  strong: { fontWeight: "700", color: "#2A1513" },
  word: { fontSize: 17 },
  link: { color: "#2A1513", textDecorationLine: "underline" },
  underline: { textDecorationLine: "underline" },
  spelling: { fontSize: 15, fontWeight: "700", color: "#2A1513" },
  section: { gap: 10, marginTop: 14 },
  card: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#2A151314", padding: 14, gap: 6 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 },
  row: { flexDirection: "row", gap: 10, flexWrap: "wrap" },
  wrapList: { flexDirection: "row", flexWrap: "wrap", columnGap: 16, rowGap: 6 },
  bulletRow: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
  flex1: { flex: 1 },
  flexShrink: { flexShrink: 1, textAlign: "right" },
  gap6: { gap: 6 },
  gap8: { gap: 8 },
  gap10: { gap: 10 },
  gap14: { gap: 14 },
  mt8: { marginTop: 8 },
  pairTable: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#2A151314", paddingHorizontal: 12 },
  pairRow: { flexDirection: "row", gap: 12, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#2A15130d" },
  pairHead: { borderBottomColor: "#2A151326" },
  pairCell: { flex: 1, gap: 2 },
  pairWord: { flexDirection: "row", alignItems: "center", gap: 6 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { borderWidth: 1, borderColor: "#2A151333", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 14, color: "#2A1513" },
  chipTextOn: { color: "#fff" },
  choiceRow: { flexDirection: "row", gap: 8, marginTop: 4 },
  choice: { flex: 1, borderWidth: 1, borderColor: "#2A151333", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12, alignItems: "center", gap: 2 },
  choiceText: { fontSize: 20, color: "#2A1513" },
  optionRight: { backgroundColor: "#f0fdf4", borderColor: "#4ade80" },
  optionWrong: { backgroundColor: "#fef2f2", borderColor: "#fca5a5" },
  feedback: { borderRadius: 10, borderWidth: 1, padding: 10, gap: 4, marginTop: 8 },
  feedbackRight: { backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" },
  feedbackWrong: { backgroundColor: "#fef2f2", borderColor: "#fecaca" },
  btn: { backgroundColor: BRAND, borderRadius: 10, paddingHorizontal: 16, paddingVertical: 10 },
  btnText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  btnOutline: { borderWidth: 1, borderColor: "#2A151333", borderRadius: 10, paddingHorizontal: 16, paddingVertical: 10 },
  btnOutlineText: { color: "#2A1513", fontSize: 15 },
  selfStart: { alignSelf: "flex-start" },
});
