import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import type { LessonModuleKey } from "@/lib/lessons/registry";
import { GRAMMAR_GUIDES } from "@/lib/grammar/guides";
import { lessonsForGuide } from "@/lib/lessons/grammarLinks";
import { findLessonBySlug } from "@/lib/lessons/registry";
import TapText from "@/components/TapText";
import { ENGLISH_LANG, FRENCH_LANG, SPANISH_LANG, type SpeechLang } from "@/lib/speech";
import type { GrammarGuide } from "@/lib/grammar/types";
import type { FrGrammarGuide } from "@/lib/grammar/fr-types";
import { loadFrenchGuides } from "@/lib/grammar/french";
import type { FrenchLevelKey } from "@/lib/lessons/french";
import type { FrenchStoryLevel } from "@/lib/stories/fr";

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
export default function GrammarGuideScreen(props: Props) {
  return props.route.params.lang === "fr" ? <FrenchGrammarGuideScreen {...props} /> : <SpanishGrammarGuideScreen {...props} />;
}

// What the guide layout below needs, whichever course the guide is from.
type GuideBody = Pick<GrammarGuide, "title" | "level" | "intro" | "sections" | "mistakes" | "faqs">;

function SpanishGrammarGuideScreen({ route, navigation }: Props) {
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
    <GuideLayout
      guide={guide}
      lang={SPANISH_LANG}
      practiceLabel={firstLesson ? "Practice this in lessons" : `Practice with the ${guide.level} lessons`}
      onPractice={() =>
        firstLesson
          ? navigation.navigate("LessonRunner", { slug: firstLesson.slug })
          : navigation.navigate("LessonList", { moduleKey: LESSONS_FOR_LEVEL[guide.level] })
      }
      storyLabel={`Read a ${guide.level} story`}
      onStory={() => navigation.navigate("ReadingsList", { levelPath: guide.readingLevelPath })}
      related={related}
      onRelated={(slug) => navigation.push("GrammarGuide", { slug })}
    />
  );
}

// A French grammar guide (src/lib/grammar/fr-guides*.ts, loaded on demand):
// the same layout, read in the French voice, with links into the French
// lessons and stories.
function FrenchGrammarGuideScreen({ route, navigation }: Props) {
  const [guides, setGuides] = useState<FrGrammarGuide[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    loadFrenchGuides().then((g) => {
      if (!cancelled) setGuides(g);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  if (!guides) {
    return (
      <View style={[s.screen, s.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  const guide = guides.find((g) => g.slug === route.params.slug);
  if (!guide) {
    return (
      <View style={s.screen}>
        <Text style={[s.body, { padding: 20 }]}>This guide isn’t available.</Text>
      </View>
    );
  }
  const levelPath = `fr/${guide.level.toLowerCase()}`;
  const firstLesson = guide.lessons[0];
  const related = guide.related
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter((g): g is FrGrammarGuide => !!g);
  // The layout's examples are { es, en }: the target language and English.
  const body: GuideBody = {
    ...guide,
    sections: guide.sections.map((sec) => ({ ...sec, examples: sec.examples?.map((ex) => ({ es: ex.fr, en: ex.en })) })),
  };
  return (
    <GuideLayout
      guide={body}
      lang={FRENCH_LANG}
      practiceLabel={firstLesson ? "Practice this in lessons" : `Practice with the ${guide.level} lessons`}
      onPractice={() =>
        firstLesson
          ? navigation.navigate("LessonRunner", { slug: firstLesson, levelPath })
          : navigation.navigate("LessonList", { frenchLevel: guide.level.toLowerCase() as FrenchLevelKey })
      }
      storyLabel={`Read a ${guide.level} story`}
      onStory={() => navigation.navigate("ReadingsList", { frenchLevel: guide.level.toLowerCase() as FrenchStoryLevel["path"] })}
      related={related}
      onRelated={(slug) => navigation.push("GrammarGuide", { slug, lang: "fr" })}
    />
  );
}

function GuideLayout({
  guide,
  lang,
  practiceLabel,
  onPractice,
  storyLabel,
  onStory,
  related,
  onRelated,
}: {
  guide: GuideBody;
  lang: SpeechLang;
  practiceLabel: string;
  onPractice: () => void;
  storyLabel: string;
  onStory: () => void;
  related: { slug: string; title: string }[];
  onRelated: (slug: string) => void;
}) {
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.kicker}>Level {guide.level}</Text>
      <TapText text={guide.title} lang={lang} style={s.title} />
      {guide.intro.map((p, i) => (
        <TapText key={i} text={p} lang={lang} style={s.body} />
      ))}

      {guide.sections.map((section) => (
        <View key={section.heading} style={s.section}>
          <TapText text={section.heading} lang={lang} style={s.heading} />
          {section.body.map((p, i) => (
            <TapText key={i} text={p} lang={lang} style={s.body} />
          ))}
          {section.table && (
            <ScrollView horizontal style={s.tableScroll} contentContainerStyle={s.table}>
              <View>
                <View style={[s.tableRow, s.tableHeaderRow]}>
                  {section.table.headers.map((h, i) => (
                    <View key={i} style={s.tableCell}>
                      <TapText text={h} lang={lang} style={s.tableHeader} />
                    </View>
                  ))}
                </View>
                {section.table.rows.map((row, r) => (
                  <View key={r} style={s.tableRow}>
                    {row.map((cell, c) => (
                      <View key={c} style={s.tableCell}>
                        <TapText text={cell} lang={lang} style={c === 0 ? s.tableLabel : s.tableText} />
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
          {section.examples?.map((ex) => (
            <View key={ex.es} style={s.example}>
              <TapText text={ex.es} lang={lang} mode="target" style={s.exampleEs} />
              <TapText text={ex.en} lang={ENGLISH_LANG} mode="english" style={s.exampleEn} />
            </View>
          ))}
        </View>
      ))}

      {guide.mistakes.length > 0 && (
        <View style={s.section}>
          <TapText text="Common mistakes" lang={lang} mode="english" style={s.heading} />
          {guide.mistakes.map((m) => (
            <View key={m.wrong} style={s.example}>
              <TapText text={m.wrong} lang={lang} mode="target" style={s.wrong} />
              <TapText text={m.right} lang={lang} mode="target" style={s.right} />
              <TapText text={m.why} lang={lang} style={s.exampleEn} />
            </View>
          ))}
        </View>
      )}

      {guide.faqs.length > 0 && (
        <View style={s.section}>
          <TapText text="Questions learners ask" lang={lang} mode="english" style={s.heading} />
          {guide.faqs.map((f) => (
            <View key={f.q} style={{ marginBottom: 12 }}>
              <TapText text={f.q} lang={lang} style={s.faqQ} />
              <TapText text={f.a} lang={lang} style={s.body} />
            </View>
          ))}
        </View>
      )}

      <Pressable style={s.bigBtn} onPress={onPractice}>
        <Text style={s.bigBtnText}>{practiceLabel}</Text>
      </Pressable>
      <Pressable style={s.secondaryBtn} onPress={onStory}>
        <Text style={s.secondaryBtnText}>{storyLabel}</Text>
      </Pressable>

      {related.length > 0 && (
        <View style={s.section}>
          <Text style={s.relatedHeader}>Related grammar guides</Text>
          {related.map((g) => (
            <Pressable key={g.slug} onPress={() => onRelated(g.slug)} hitSlop={4}>
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
  loading: { alignItems: "center", justifyContent: "center" },
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
