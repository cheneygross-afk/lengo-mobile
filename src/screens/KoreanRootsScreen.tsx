import { useEffect, useMemo, useState, type ReactNode } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { KOREAN_LANG, speak } from "@/lib/speech";
import { KO_ROOT_LEVELS, koRootLevel, loadKoRoots, rootReadings, splitOnRoot, type KoRoot, type KoRootLevel } from "@/lib/ko-roots";

// The Korean course's optional Word Roots tool (the website's
// /lessons/ko/tools/roots and KoRootsLevelView): Sino-Korean roots with
// their Hanja, Korean readings, meanings and the course words built from
// them, by level, to browse, go through as flashcards or quiz. The only
// screens in the Korean course that show Hanja. Every Korean word and
// reading plays when tapped (ko-KR); a Hanja is plain text, never voiced,
// and the roots are never added to the learner's Korean flashcards.

const BRAND = "#8B0000";
const SET = 20;
const QUIZ_LENGTH = 10;

/** Korean that plays when tapped. */
function Ko({ text, children, style }: { text: string; children?: ReactNode; style?: object }) {
  return (
    <Text style={[s.ko, style]} onPress={() => speak(text, KOREAN_LANG)}>
      {children ?? text}
    </Text>
  );
}

/** A Hanja: shown, never voiced. */
function H({ children, style }: { children: string; style?: object }) {
  return <Text style={[s.hanja, style]}>{children}</Text>;
}

/** English text with any Hangul in it tappable (the reading notes). */
function Mixed({ text, style }: { text: string; style?: object }) {
  return (
    <Text style={style}>
      {text.split(/([가-힣]+)/).map((part, i) => (i % 2 === 1 ? <Ko key={i} text={part} /> : part))}
    </Text>
  );
}

/** A word with the root's syllable marked: 대학교 with 학 in bold red. */
function RootWord({ word, root, style }: { word: string; root: KoRoot; style?: object }) {
  const [before, mid, after] = splitOnRoot(word, root);
  return (
    <Ko text={word} style={style}>
      {before}
      {mid ? <Text style={s.mark}>{mid}</Text> : null}
      {after}
    </Ko>
  );
}

/** "녀 · 여 at the start of a word", every reading tappable. */
function Readings({ root, style }: { root: KoRoot; style?: object }) {
  return (
    <Text style={style}>
      <Ko text={root.r} />
      {root.initial ? (
        <>
          <Text style={s.dim}> · </Text>
          <Ko text={root.initial} />
          <Text style={s.small}> at the start of a word</Text>
        </>
      ) : null}
      {root.other ? (
        <>
          <Text style={s.dim}> · also </Text>
          <Ko text={root.other} />
        </>
      ) : null}
    </Text>
  );
}

// ---- The front page ----------------------------------------------------

export function KoreanRootsScreen({ navigation }: NativeStackScreenProps<AppStackParamList, "KoreanRoots">) {
  const [counts, setCounts] = useState<Partial<Record<KoRootLevel, KoRoot[]>>>({});
  useEffect(() => {
    let live = true;
    void (async () => {
      for (const l of KO_ROOT_LEVELS) {
        const roots = await loadKoRoots(l.level);
        if (!live) return;
        setCounts((prev) => ({ ...prev, [l.level]: roots }));
      }
    })();
    return () => {
      live = false;
    };
  }, []);
  const total = Object.values(counts).reduce((n, r) => n + (r?.length ?? 0), 0);

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.optional}>Optional</Text>
      <Text style={s.body}>
        More than half the words in a Korean dictionary are Sino-Korean: built, long ago, from syllables borrowed from Chinese,
        each with a meaning of its own. <Ko text="학" /> means &ldquo;learn&rdquo;, so <Ko text="학교" /> is a school,{" "}
        <Ko text="학생" /> a student, <Ko text="학원" /> a private academy and <Ko text="과학" /> science. Learn a few hundred of these
        roots and new words start to explain themselves, especially the long formal ones of the news, work and TOPIK.
      </Text>
      <Text style={s.body}>
        Each root was once written with a Chinese character, called <Ko text="한자" /> (Hanja): <H>學</H> for <Ko text="학" />.
        Koreans today write almost everything in Hangul, and you never need Hanja to read, speak or pass TOPIK.{" "}
        <Text style={s.strong}>This tool is entirely optional</Text>, an extra for anyone who likes knowing where words come from. It
        is the only place in the course where Hanja appear, and you only need to recognise them, never to write them. They are the
        traditional forms used in Korea (<H>學</H>, <H>國</H>, <H>會</H>), not the simplified ones of mainland China.
      </Text>
      <Text style={s.body}>
        {total ? `${total} roots` : "The roots"}, grouped by the level where their words come up, each with words you meet in the
        lessons. Tap any Korean word or reading to hear it; the root&apos;s syllable is marked in each word.
      </Text>

      <Text style={s.h2}>One sound, many roots</Text>
      <Text style={s.body}>
        Korean has far fewer syllables than Chinese has characters, so one sound often stands for several roots. <Ko text="사" /> is{" "}
        <H>社</H> &ldquo;company&rdquo; in <Ko text="회사" />, <H>事</H> &ldquo;matter&rdquo; in <Ko text="사고" /> (accident),{" "}
        <H>四</H> &ldquo;four&rdquo; in <Ko text="사월" /> and <H>史</H> &ldquo;history&rdquo; in <Ko text="역사" />. The word around it
        tells you which one you have, so learn roots through their words, not on their own.
      </Text>

      <Text style={s.h2}>
        The initial-sound rule (<Ko text="두음 법칙" />)
      </Text>
      <Text style={s.body}>
        Some roots change their first sound when they start a word, because standard Korean avoids beginning a word with ㄹ, or with
        ㄴ before an &ldquo;i&rdquo; or &ldquo;y&rdquo; sound. The root is the same; only the spelling and sound at the start change:
      </Text>
      <Text style={s.bullet}>
        • ㄴ before ㅣ or a y-vowel drops to silent ㅇ: <H>女</H> <Ko text="녀" /> gives <Ko text="남녀" /> (men and women) but{" "}
        <Ko text="여자" /> (woman); <H>年</H> <Ko text="년" /> gives <Ko text="작년" /> but <Ko text="연세" />.
      </Text>
      <Text style={s.bullet}>
        • ㄹ before ㅣ or a y-vowel also drops to ㅇ: <H>力</H> <Ko text="력" /> gives <Ko text="노력" /> (effort) but{" "}
        <Ko text="역도" /> (weightlifting); <H>理</H> <Ko text="리" /> gives <Ko text="요리" /> (cooking) but <Ko text="이유" /> (reason).
      </Text>
      <Text style={s.bullet}>
        • ㄹ before any other vowel becomes ㄴ: <H>勞</H> <Ko text="로" /> gives <Ko text="근로" /> (work) but <Ko text="노동" /> (labour);{" "}
        <H>論</H> <Ko text="론" /> gives <Ko text="토론" /> (debate) but <Ko text="논문" /> (thesis).
      </Text>
      <Text style={s.bullet}>
        • The same change happens after a vowel or ㄴ in the roots <Ko text="렬" /> and <Ko text="률" />: <H>率</H> is{" "}
        <Ko text="확률" /> (probability) but <Ko text="비율" /> (ratio) and <Ko text="환율" /> (exchange rate).
      </Text>
      <Text style={s.body}>
        Each root shows its standard reading first and, where the rule applies, the form it takes at the start of a word:{" "}
        <Ko text="녀" /> · <Ko text="여" />.
      </Text>

      <Text style={s.h2}>Roots by level</Text>
      <View style={{ gap: 12 }}>
        {KO_ROOT_LEVELS.map((l) => {
          const roots = counts[l.level];
          return (
            <Pressable key={l.level} style={s.card} onPress={() => navigation.navigate("KoreanRootsLevel", { level: l.level })}>
              <Text style={s.cardTitle}>
                {l.name} roots
                <Text style={s.small}>
                  {" "}
                  · {roots ? `${roots.length} roots · ` : ""}
                  {l.topik}
                </Text>
              </Text>
              <Text style={s.small}>{l.blurb}</Text>
              {roots ? (
                <Text style={s.preview} numberOfLines={1}>
                  {roots
                    .slice(0, 16)
                    .map((r) => r.h)
                    .join("")}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

// ---- One level ---------------------------------------------------------

type Mode = "browse" | "flashcards" | "quiz";

function shuffle<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function KoreanRootsLevelScreen({ navigation, route }: NativeStackScreenProps<AppStackParamList, "KoreanRootsLevel">) {
  const info = koRootLevel(route.params.level);
  const [entries, setEntries] = useState<KoRoot[] | null>(null);
  const [mode, setMode] = useState<Mode>("browse");
  const [set, setSet] = useState<number | null>(null);

  useEffect(() => {
    if (info) navigation.setOptions({ title: `${info.name} word roots` });
  }, [navigation, info]);
  useEffect(() => {
    let live = true;
    if (info) void loadKoRoots(info.level).then((r) => live && setEntries(r));
    return () => {
      live = false;
    };
  }, [info]);

  const pool = useMemo(() => (!entries ? [] : set === null ? entries : entries.slice(set * SET, set * SET + SET)), [entries, set]);

  if (!info) {
    return (
      <View style={s.screen}>
        <Text style={[s.body, { padding: 20 }]}>This page could not be found.</Text>
      </View>
    );
  }
  if (!entries) {
    return (
      <View style={[s.screen, { alignItems: "center", justifyContent: "center" }]}>
        <ActivityIndicator />
      </View>
    );
  }
  const sets = Math.ceil(entries.length / SET);
  const i = KO_ROOT_LEVELS.indexOf(info);
  const harder = KO_ROOT_LEVELS[i + 1];

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <Text style={s.optional}>Optional</Text>
      <Text style={s.body}>
        {entries.length} Sino-Korean roots ({info.topik}), most useful first. Tap a root for its reading, meaning and the words built
        from it; tap any Korean word or reading to hear it. You never need Hanja to read or speak Korean: here you only need to
        recognise them.
      </Text>
      <View style={s.tabs}>
        {(["browse", "flashcards", "quiz"] as const).map((m) => (
          <Pressable key={m} onPress={() => setMode(m)} style={[s.tab, mode === m && s.tabOn]}>
            <Text style={[s.tabText, mode === m && s.tabTextOn]}>{m === "browse" ? "Browse" : m === "flashcards" ? "Flashcards" : "Quiz"}</Text>
          </Pressable>
        ))}
      </View>
      {mode !== "browse" && (
        <View style={{ marginBottom: 14 }}>
          <Text style={s.small}>Which roots?</Text>
          <View style={s.chips}>
            <Pressable onPress={() => setSet(null)} style={[s.chip, set === null && s.chipOn]}>
              <Text style={[s.chipText, set === null && s.chipTextOn]}>All {entries.length}</Text>
            </Pressable>
            {Array.from({ length: sets }, (_, n) => (
              <Pressable key={n} onPress={() => setSet(n)} style={[s.chip, set === n && s.chipOn]}>
                <Text style={[s.chipText, set === n && s.chipTextOn]}>
                  {n * SET + 1}–{Math.min(entries.length, (n + 1) * SET)}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
      {mode === "browse" && <Browse entries={entries} />}
      {mode === "flashcards" && <Flashcards key={`${set}`} pool={pool} onExit={() => setMode("browse")} />}
      {mode === "quiz" && <Quiz key={`${set}`} pool={pool} all={entries} onExit={() => setMode("browse")} />}
      {harder ? (
        <Pressable onPress={() => navigation.replace("KoreanRootsLevel", { level: harder.level })} style={{ marginTop: 24 }}>
          <Text style={s.link}>{harder.name} roots →</Text>
        </Pressable>
      ) : null}
    </ScrollView>
  );
}

function RootDetail({ root }: { root: KoRoot }) {
  return (
    <View style={[s.card, s.detail]}>
      <View style={s.detailHead}>
        <H style={s.hanjaBig}>{root.h}</H>
        <View style={{ flex: 1 }}>
          <Text style={s.cardTitle}>{root.m}</Text>
          <Text style={s.small}>
            Read <Readings root={root} style={s.readings} />
          </Text>
        </View>
      </View>
      {root.note ? <Mixed text={root.note} style={[s.small, { marginTop: 6 }]} /> : null}
      <View style={{ marginTop: 8, gap: 4 }}>
        {root.words.map((w) => (
          <Text key={w.ko}>
            <RootWord word={w.ko} root={root} style={s.word} />
            <Text style={s.small}> · {w.en}</Text>
          </Text>
        ))}
      </View>
    </View>
  );
}

function Browse({ entries }: { entries: KoRoot[] }) {
  const [selected, setSelected] = useState<KoRoot | null>(null);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().normalize("NFC");
    if (!q) return entries;
    const en = q.toLowerCase();
    return entries.filter(
      (r) =>
        r.h === q ||
        rootReadings(r).includes(q) ||
        r.m.toLowerCase().includes(en) ||
        r.words.some((w) => w.ko.includes(q) || w.en.toLowerCase().includes(en))
    );
  }, [entries, query]);
  return (
    <View>
      {selected ? <RootDetail root={selected} /> : null}
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Find a root: learn, 학, 학교"
        autoCapitalize="none"
        autoCorrect={false}
        style={s.input}
      />
      <View style={s.grid}>
        {filtered.map((r) => (
          <Pressable
            key={r.h}
            onPress={() => {
              setSelected(r);
              speak(r.r, KOREAN_LANG);
            }}
            style={[s.tile, selected?.h === r.h && s.tileOn]}
          >
            <H style={s.tileHanja}>{r.h}</H>
            <Text style={s.tileReading}>{r.r}</Text>
            <Text style={s.tileMeaning} numberOfLines={1}>
              {r.m}
            </Text>
          </Pressable>
        ))}
      </View>
      {filtered.length === 0 ? <Text style={s.small}>No root found.</Text> : null}
    </View>
  );
}

function Flashcards({ pool, onExit }: { pool: KoRoot[]; onExit: () => void }) {
  const [queue, setQueue] = useState(() => shuffle(pool));
  const [shown, setShown] = useState(false);
  const [known, setKnown] = useState(0);
  const card = queue[0];

  if (!card) {
    return (
      <View style={[s.card, { alignItems: "center", gap: 8 }]}>
        <Text style={s.cardTitle}>All {pool.length} done</Text>
        <Text style={s.small}>The ones you weren&apos;t sure of came back until you knew them.</Text>
        <View style={s.chips}>
          <Pressable
            style={s.button}
            onPress={() => {
              setQueue(shuffle(pool));
              setKnown(0);
              setShown(false);
            }}
          >
            <Text style={s.buttonText}>Again</Text>
          </Pressable>
          <Pressable style={s.buttonOutline} onPress={onExit}>
            <Text style={s.buttonOutlineText}>Done</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  function answer(knewIt: boolean) {
    setShown(false);
    setQueue((q) => (knewIt ? q.slice(1) : [...q.slice(1), q[0]]));
    if (knewIt) setKnown((n) => n + 1);
  }

  return (
    <View>
      <View style={[s.row, { justifyContent: "space-between", marginBottom: 10 }]}>
        <Text style={s.small}>
          {known} of {pool.length} known
        </Text>
        <Pressable onPress={onExit}>
          <Text style={s.link}>Stop</Text>
        </Pressable>
      </View>
      <View style={[s.card, { alignItems: "center", paddingVertical: 24 }]}>
        <H style={s.hanjaHuge}>{card.h}</H>
        {!shown ? (
          <>
            <Text style={[s.small, { marginVertical: 12 }]}>Its reading, its meaning, and a word you know with it?</Text>
            <Pressable style={s.button} onPress={() => setShown(true)}>
              <Text style={s.buttonText}>Show</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Readings root={card} style={s.readingsBig} />
            <Text style={s.cardTitle}>{card.m}</Text>
            <Text style={{ marginTop: 8, textAlign: "center" }}>
              {card.words.slice(0, 4).map((w, i) => (
                <Text key={w.ko}>
                  {i > 0 ? <Text style={s.dim}> · </Text> : null}
                  <RootWord word={w.ko} root={card} style={s.word} /> <Text style={s.small}>{w.en}</Text>
                </Text>
              ))}
            </Text>
            <View style={[s.chips, { marginTop: 16 }]}>
              <Pressable style={[s.buttonOutline, { borderColor: "#d97706" }]} onPress={() => answer(false)}>
                <Text style={[s.buttonOutlineText, { color: "#b45309" }]}>Not yet</Text>
              </Pressable>
              <Pressable style={[s.buttonOutline, { borderColor: "#16a34a" }]} onPress={() => answer(true)}>
                <Text style={[s.buttonOutlineText, { color: "#15803d" }]}>Knew it</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

type QuizKind = "meaning" | "reading" | "word";
type QuizQ = { kind: QuizKind; root: KoRoot; word?: { ko: string; en: string }; options: string[]; answer: string };

function optionOf(kind: QuizKind, r: KoRoot): string {
  return kind === "meaning" ? r.m : kind === "reading" ? r.r : r.h;
}

function makeQuiz(pool: KoRoot[], all: KoRoot[], kind: QuizKind): QuizQ[] {
  return shuffle(pool)
    .slice(0, QUIZ_LENGTH)
    .map((root) => {
      const answer = optionOf(kind, root);
      const word = kind === "word" ? root.words[Math.floor(Math.random() * root.words.length)] : undefined;
      // No wrong option that is also right (as on the website): never a
      // root read the same way, nor one whose sound is in the word.
      const wrong = shuffle(
        all.filter(
          (o) =>
            o.h !== root.h &&
            optionOf(kind, o) !== answer &&
            !(kind === "reading" && rootReadings(o).some((x) => rootReadings(root).includes(x))) &&
            !(word && rootReadings(o).some((x) => word.ko.includes(x)))
        )
      );
      const options = shuffle([answer, ...Array.from(new Set(wrong.map((o) => optionOf(kind, o)))).slice(0, 3)]);
      return { kind, root, word, options, answer };
    });
}

function Quiz({ pool, all, onExit }: { pool: KoRoot[]; all: KoRoot[]; onExit: () => void }) {
  const [kind, setKind] = useState<QuizKind | null>(null);
  const [qs, setQs] = useState<QuizQ[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [right, setRight] = useState(0);

  function start(k: QuizKind) {
    setKind(k);
    setQs(makeQuiz(pool, all, k));
    setI(0);
    setRight(0);
    setPicked(null);
  }

  if (!kind) {
    return (
      <View style={[s.card, { gap: 8 }]}>
        <Text style={s.cardTitle}>Quiz yourself on these {pool.length} roots</Text>
        <Text style={s.small}>{QUIZ_LENGTH} questions each time, in a random order.</Text>
        <View style={s.chips}>
          <Pressable style={s.button} onPress={() => start("meaning")}>
            <Text style={s.buttonText}>Meanings</Text>
          </Pressable>
          <Pressable style={s.buttonOutline} onPress={() => start("reading")}>
            <Text style={s.buttonOutlineText}>Readings</Text>
          </Pressable>
          <Pressable style={s.buttonOutline} onPress={() => start("word")}>
            <Text style={s.buttonOutlineText}>Roots in words</Text>
          </Pressable>
        </View>
        <Pressable onPress={onExit}>
          <Text style={s.link}>Back</Text>
        </Pressable>
      </View>
    );
  }

  const q = qs[i];
  if (!q) {
    return (
      <View style={[s.card, { alignItems: "center", gap: 8 }]}>
        <Text style={s.cardTitle}>
          {right} / {qs.length} right
        </Text>
        <Text style={s.small}>{right === qs.length ? "Perfect!" : "Go again: the questions change every time."}</Text>
        <View style={s.chips}>
          <Pressable style={s.button} onPress={() => start(kind)}>
            <Text style={s.buttonText}>Again</Text>
          </Pressable>
          <Pressable style={s.buttonOutline} onPress={() => setKind(null)}>
            <Text style={s.buttonOutlineText}>Done</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const prompt =
    q.kind === "meaning" ? "What does this root mean?" : q.kind === "reading" ? "How is this root read in Korean?" : "Which root is in this word?";

  return (
    <View>
      <View style={[s.row, { justifyContent: "space-between", marginBottom: 10 }]}>
        <Text style={s.small}>
          {i + 1} of {qs.length} · {right} right
        </Text>
        <Pressable onPress={() => setKind(null)}>
          <Text style={s.link}>Exit quiz</Text>
        </Pressable>
      </View>
      <View style={s.card}>
        <Text style={s.kicker}>{prompt.toUpperCase()}</Text>
        {q.kind === "word" && q.word ? (
          <View style={{ marginVertical: 12 }}>
            {picked === null ? <Ko text={q.word.ko} style={s.quizWord} /> : <RootWord word={q.word.ko} root={q.root} style={s.quizWord} />}
            <Text style={s.small}>{q.word.en}</Text>
          </View>
        ) : (
          <H style={s.hanjaHuge}>{q.root.h}</H>
        )}
        <View style={{ gap: 8 }}>
          {q.options.map((o) => {
            const state = picked === null ? null : o === q.answer ? s.optRight : o === picked ? s.optWrong : s.optDim;
            const opt = q.kind === "word" ? all.find((r) => r.h === o) : undefined;
            return (
              <Pressable
                key={o}
                disabled={picked !== null}
                onPress={() => {
                  setPicked(o);
                  if (o === q.answer) setRight((n) => n + 1);
                  // The Korean is said, never the Hanja.
                  speak(q.kind === "word" && q.word ? q.word.ko : q.root.r, KOREAN_LANG);
                }}
                style={[s.option, state]}
              >
                {q.kind === "word" ? (
                  <Text>
                    <H style={s.optHanja}>{o}</H>
                    <Text style={s.small}>  {opt?.m}</Text>
                  </Text>
                ) : (
                  <Text style={q.kind === "reading" ? s.optReading : s.optText}>{o}</Text>
                )}
              </Pressable>
            );
          })}
        </View>
        {picked !== null && (
          <View style={{ marginTop: 14, gap: 8 }}>
            <Text style={s.small}>
              <H style={s.optHanja}>{q.root.h}</H> <Readings root={q.root} /> · {q.root.m} ·{" "}
              {q.root.words.slice(0, 3).map((w, n) => (
                <Text key={w.ko}>
                  {n > 0 ? ", " : ""}
                  <RootWord word={w.ko} root={q.root} />
                </Text>
              ))}
            </Text>
            <Pressable
              style={s.button}
              onPress={() => {
                setI((n) => n + 1);
                setPicked(null);
              }}
            >
              <Text style={s.buttonText}>Next</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { padding: 20, paddingBottom: 60 },
  optional: {
    alignSelf: "flex-start",
    fontSize: 12,
    color: "#2A151399",
    borderWidth: 1,
    borderColor: "#2A151333",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 10,
    overflow: "hidden",
  },
  body: { fontSize: 15, lineHeight: 22, color: "#2A1513cc", marginBottom: 12 },
  bullet: { fontSize: 14.5, lineHeight: 21, color: "#2A1513cc", marginBottom: 8, paddingLeft: 4 },
  strong: { fontWeight: "700", color: "#2A1513" },
  h2: { fontSize: 18, fontWeight: "700", color: "#2A1513", marginTop: 14, marginBottom: 8 },
  ko: { color: "#2A1513" },
  hanja: { color: "#2A1513" },
  mark: { color: BRAND, fontWeight: "700" },
  dim: { color: "#2A151366" },
  small: { fontSize: 13, color: "#2A151399", lineHeight: 19 },
  link: { fontSize: 14, color: "#2A151399", textDecorationLine: "underline" },
  kicker: { fontSize: 11, letterSpacing: 0.6, color: "#2A151366", fontWeight: "700" },
  card: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 14, padding: 16, backgroundColor: "#fff" },
  cardTitle: { fontSize: 17, fontWeight: "700", color: "#2A1513" },
  preview: { fontSize: 24, color: "#2A1513", marginTop: 8, letterSpacing: 2 },
  tabs: { flexDirection: "row", gap: 8, marginBottom: 14 },
  tab: { flex: 1, borderWidth: 1.5, borderColor: `${BRAND}33`, borderRadius: 999, paddingVertical: 8, alignItems: "center", backgroundColor: "#fff" },
  tabOn: { backgroundColor: BRAND, borderColor: BRAND },
  tabText: { fontSize: 14, fontWeight: "700", color: BRAND },
  tabTextOn: { color: "#fff" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: { borderWidth: 1, borderColor: "#2A151322", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: "#fff" },
  chipOn: { backgroundColor: BRAND, borderColor: BRAND },
  chipText: { fontSize: 12, color: "#2A1513" },
  chipTextOn: { color: "#fff", fontWeight: "700" },
  input: {
    borderWidth: 1,
    borderColor: "#2A151333",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#2A1513",
    marginBottom: 12,
  },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tile: { width: 76, borderWidth: 1, borderColor: "#2A151322", borderRadius: 10, padding: 6, alignItems: "center", backgroundColor: "#fff" },
  tileOn: { borderColor: BRAND, backgroundColor: "#8B00000d" },
  tileHanja: { fontSize: 28 },
  tileReading: { fontSize: 14, color: "#2A1513" },
  tileMeaning: { fontSize: 10.5, color: "#2A151399" },
  detail: { marginBottom: 14 },
  detailHead: { flexDirection: "row", gap: 14, alignItems: "center" },
  hanjaBig: { fontSize: 56 },
  hanjaHuge: { fontSize: 72, textAlign: "center", marginVertical: 8 },
  readings: { fontSize: 18, color: "#2A1513" },
  readingsBig: { fontSize: 22, color: "#2A1513", marginBottom: 4 },
  word: { fontSize: 17, color: "#2A1513" },
  quizWord: { fontSize: 36, color: "#2A1513" },
  row: { flexDirection: "row", alignItems: "center" },
  option: { borderWidth: 1, borderColor: "#2A151333", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10 },
  optRight: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  optWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  optDim: { opacity: 0.6 },
  optHanja: { fontSize: 24, color: "#2A1513" },
  optReading: { fontSize: 20, color: "#2A1513" },
  optText: { fontSize: 15, color: "#2A1513" },
  button: { backgroundColor: BRAND, borderRadius: 999, paddingVertical: 10, paddingHorizontal: 18, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  buttonOutline: { borderWidth: 1.5, borderColor: BRAND, borderRadius: 999, paddingVertical: 9, paddingHorizontal: 16, alignItems: "center" },
  buttonOutlineText: { color: BRAND, fontWeight: "700", fontSize: 15 },
});
