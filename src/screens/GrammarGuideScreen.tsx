import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import type { LessonModuleKey } from "@/lib/lessons/registry";
import { GRAMMAR_GUIDES } from "@/lib/grammar/guides";
import { lessonsForGuide } from "@/lib/lessons/grammarLinks";
import { findLessonBySlug } from "@/lib/lessons/registry";
import TapText from "@/components/TapText";
import { ENGLISH_LANG, SPANISH_LANG } from "@/lib/speech";

type Props = NativeStackScreenProps<AppStackParamList, "GrammarGuide">;

const LESSONS_FOR_LEVEL: Record<string, LessonModuleKey> = {
  A1: "a1",
  A2: "a2",
  B1: "b1",
  B2: "b2",
  C1: "c1",
  C2: "c2",
};

// One grammar guide, laid out like the website's /grammar/[slug] page.
// Every word is tap-to-hear: English prose with Spanish mixed in is read
// word by word in whichever language each word is in.
export default function GrammarGuideScreen({ route, navigation }: Props) {
  const guide = GRAMMAR_GUIDES.find((g) => g.slug === route.params.slug);
  if (!guide) {
    return (
      <View style={s.screen}>
        <Text style={[s.body, { padding: 20 }]}>This guide isn’t available.</Text>
      </View>
    );
  }
  // The first lesson that teaches this topic (see grammarLinks.ts); the
  // level's lesson list when none is linked.
  const firstLesson = lessonsForGuide(guide.slug)
    .map((ref) => findLessonBySlug(ref.slug))
    .find((l) => !!l);
  const related = guide.related
    .map((slug) => GRAMMAR_GUIDES.find((g) => g.slug === slug))
    .filter((g): g is (typeof GRAMMAR_GUIDES)[number] => !!g);

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.kicker}>Level {guide.level}</Text>
      <TapText text={guide.title} lang={SPANISH_LANG} style={s.title} />
      {guide.intro.map((p, i) => (
        <TapText key={i} text={p} lang={SPANISH_LANG} style={s.body} />
      ))}

      {guide.sections.map((section) => (
        <View key={section.heading} style={s.section}>
          <TapText text={section.heading} lang={SPANISH_LANG} style={s.heading} />
          {section.body.map((p, i) => (
            <TapText key={i} text={p} lang={SPANISH_LANG} style={s.body} />
          ))}
          {section.table && (
            <ScrollView horizontal style={s.tableScroll} contentContainerStyle={s.table}>
              <View>
                <View style={[s.tableRow, s.tableHeaderRow]}>
                  {section.table.headers.map((h, i) => (
                    <View key={i} style={s.tableCell}>
                      <TapText text={h} lang={SPANISH_LANG} style={s.tableHeader} />
                    </View>
                  ))}
                </View>
                {section.table.rows.map((row, r) => (
                  <View key={r} style={s.tableRow}>
                    {row.map((cell, c) => (
                      <View key={c} style={s.tableCell}>
                        <TapText text={cell} lang={SPANISH_LANG} style={c === 0 ? s.tableLabel : s.tableText} />
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
          {section.examples?.map((ex) => (
            <View key={ex.es} style={s.example}>
              <TapText text={ex.es} lang={SPANISH_LANG} mode="target" style={s.exampleEs} />
              <TapText text={ex.en} lang={ENGLISH_LANG} mode="english" style={s.exampleEn} />
            </View>
          ))}
        </View>
      ))}

      {guide.mistakes.length > 0 && (
        <View style={s.section}>
          <TapText text="Common mistakes" lang={SPANISH_LANG} mode="english" style={s.heading} />
          {guide.mistakes.map((m) => (
            <View key={m.wrong} style={s.example}>
              <TapText text={m.wrong} lang={SPANISH_LANG} mode="target" style={s.wrong} />
              <TapText text={m.right} lang={SPANISH_LANG} mode="target" style={s.right} />
              <TapText text={m.why} lang={SPANISH_LANG} style={s.exampleEn} />
            </View>
          ))}
        </View>
      )}

      {guide.faqs.length > 0 && (
        <View style={s.section}>
          <TapText text="Questions learners ask" lang={SPANISH_LANG} mode="english" style={s.heading} />
          {guide.faqs.map((f) => (
            <View key={f.q} style={{ marginBottom: 12 }}>
              <TapText text={f.q} lang={SPANISH_LANG} style={s.faqQ} />
              <TapText text={f.a} lang={SPANISH_LANG} style={s.body} />
            </View>
          ))}
        </View>
      )}

      <Pressable
        style={s.bigBtn}
        onPress={() =>
          firstLesson
            ? navigation.navigate("LessonRunner", { slug: firstLesson.slug })
            : navigation.navigate("LessonList", { moduleKey: LESSONS_FOR_LEVEL[guide.level] })
        }
      >
        <Text style={s.bigBtnText}>{firstLesson ? "Practice this in lessons" : `Practice with the ${guide.level} lessons`}</Text>
      </Pressable>
      <Pressable
        style={s.secondaryBtn}
        onPress={() => navigation.navigate("ReadingsList", { levelPath: guide.readingLevelPath })}
      >
        <Text style={s.secondaryBtnText}>Read a {guide.level} story</Text>
      </Pressable>

      {related.length > 0 && (
        <View style={s.section}>
          <Text style={s.relatedHeader}>Related grammar guides</Text>
          {related.map((g) => (
            <Pressable key={g.slug} onPress={() => navigation.push("GrammarGuide", { slug: g.slug })} hitSlop={4}>
              <Text style={s.relatedLink}>{g.title}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 48 },
  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#7A1F1F", marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 14 },
  section: { marginTop: 22 },
  heading: { fontSize: 18, fontWeight: "700", color: "#000", marginBottom: 8 },
  body: { fontSize: 15, lineHeight: 22, color: "#000000cc", marginBottom: 10 },
  example: {
    borderWidth: 1,
    borderColor: "#00000012",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  tableScroll: { marginBottom: 10 },
  table: { borderWidth: 1, borderColor: "#00000012", borderRadius: 10, backgroundColor: "#fff" },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#0000000d" },
  tableHeaderRow: { borderBottomColor: "#00000033" },
  tableCell: { width: 150, paddingHorizontal: 10, paddingVertical: 8 },
  tableHeader: { fontSize: 13.5, fontWeight: "700", color: "#000" },
  tableLabel: { fontSize: 13.5, color: "#00000099" },
  tableText: { fontSize: 14, color: "#000" },
  exampleEs: { fontSize: 15, fontWeight: "600", color: "#000" },
  exampleEn: { fontSize: 13.5, color: "#00000099", marginTop: 2, lineHeight: 19 },
  wrong: { fontSize: 14, color: "#b91c1c", textDecorationLine: "line-through" },
  right: { fontSize: 15, fontWeight: "600", color: "#15803d", marginTop: 2 },
  faqQ: { fontSize: 15, fontWeight: "700", color: "#000", marginBottom: 4 },
  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 28 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryBtnText: { color: "#7A1F1F", fontWeight: "700", fontSize: 15 },
  relatedHeader: { fontSize: 13, fontWeight: "800", color: "#00000066", letterSpacing: 0.5, marginBottom: 8 },
  relatedLink: { fontSize: 15, color: "#7A1F1F", textDecorationLine: "underline", marginBottom: 8 },
});
