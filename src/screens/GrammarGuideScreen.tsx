import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import type { LessonModuleKey } from "@/lib/lessons/registry";
import { GRAMMAR_GUIDES } from "@/lib/grammar/guides";
import { lessonsForGuide } from "@/lib/lessons/grammarLinks";
import { findLessonBySlug } from "@/lib/lessons/registry";
import TapText from "@/components/TapText";
import { ENGLISH_LANG, SPANISH_LANG, type SpeechLang } from "@/lib/speech";
import type { GrammarGuide } from "@/lib/grammar/types";
import { GUIDE_COURSES, guideLevelName, type CourseGuide, type GuideCourse } from "@/lib/grammar/courseGuides";
import type { FrenchLevelKey } from "@/lib/lessons/french";
import type { GermanLevelKey } from "@/lib/lessons/german";
import type { PortugueseLevelKey } from "@/lib/lessons/portuguese";
import type { ItalianLevelKey } from "@/lib/lessons/italian";
import { loadItLessons } from "@/lib/it-tools/data";
import type { FrenchStoryLevel } from "@/lib/stories/fr";
import type { GermanStoryLevel } from "@/lib/stories/de";
import type { PortugueseStoryLevel } from "@/lib/stories/pt";
import type { ItalianStoryLevel } from "@/lib/stories/it";
import type { KoreanStoryLevel } from "@/lib/stories/ko";
import type { KoreanLevelKey } from "@/lib/lessons/korean";
import { loadKoreanGuides } from "@/lib/grammar/korean";
import type { KoGrammarGuide } from "@/lib/grammar/ko-types";
import { KOREAN_LANG } from "@/lib/speech";
import { loadKoLessons, koToolLevel, type KoLessonRow } from "@/lib/ko-tools/data";
import { koGuideLevelLabel } from "./GrammarListScreen";

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
  const lang = props.route.params.lang;
  if (lang === "ko") return <KoreanGrammarGuideScreen {...props} />;
  return lang === "fr" || lang === "de" || lang === "pt" || lang === "it" ? (
    <CourseGrammarGuideScreen {...props} course={lang} />
  ) : (
    <SpanishGrammarGuideScreen {...props} />
  );
}

// What the guide layout below needs, whichever course the guide is from.
// (A Korean mistake can be a register slip rather than an error: shown as
// "less natural here", not crossed out.)
type GuideBody = Pick<GrammarGuide, "title" | "intro" | "sections" | "faqs"> & {
  level: string;
  mistakes: (GrammarGuide["mistakes"][number] & { register?: boolean })[];
};

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

// A French, German, Portuguese or Italian grammar guide
// (lib/grammar/courseGuides.ts, loaded on demand): the same layout, read in
// that course's voice, with links into its own lessons and stories. The
// Italian course is still being written, so its guides link only the
// lessons that exist (the small lesson list, src/lib/it-tools), as the
// website's do, and show levels by name.
function CourseGrammarGuideScreen({ route, navigation, course }: Props & { course: GuideCourse }) {
  const config = GUIDE_COURSES[course];
  const [guides, setGuides] = useState<CourseGuide[] | null>(null);
  // Italian only: the lessons written so far, slug -> level path ("a1").
  const [itLessons, setItLessons] = useState<Map<string, string> | null>(null);
  useEffect(() => {
    let cancelled = false;
    config.load().then((g) => {
      if (!cancelled) setGuides(g);
    });
    if (course === "it") {
      loadItLessons()
        .then((rows) => !cancelled && setItLessons(new Map(rows.map((r) => [r[0], r[2]]))))
        .catch(() => !cancelled && setItLessons(new Map()));
    }
    return () => {
      cancelled = true;
    };
  }, [config, course]);
  if (!guides || (course === "it" && !itLessons)) {
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
  const key = guide.level.toLowerCase();
  const levelPath = `${course}/${key}`;
  const levelName = guideLevelName(config, guide.level);
  const firstLesson = itLessons ? guide.lessons.find((slug) => itLessons.has(slug)) : guide.lessons[0];
  // Portuguese lesson slugs start with their own level ("a1-daily-routine"),
  // which a guide one level up can link to; an Italian lesson's level comes
  // from the lesson list.
  const lessonLevelPath =
    itLessons && firstLesson
      ? `it/${itLessons.get(firstLesson)}`
      : course === "pt" && firstLesson && /^(a1|a2|b1|b2|c1|c2)-/.test(firstLesson)
        ? `pt/${firstLesson.slice(0, 2)}`
        : levelPath;
  const related = guide.related
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter((g): g is CourseGuide => !!g);
  return (
    <GuideLayout
      guide={guide}
      kicker={
        config.levelNames ? (config.diploma[guide.level] ? `${levelName} · ${config.diploma[guide.level]}` : levelName) : undefined
      }
      lang={config.lang}
      practiceLabel={firstLesson ? "Practice this in lessons" : `Practice with the ${levelName} lessons`}
      onPractice={() =>
        firstLesson
          ? navigation.navigate("LessonRunner", { slug: firstLesson, levelPath: lessonLevelPath })
          : navigation.navigate(
              "LessonList",
              course === "fr"
                ? { frenchLevel: key as FrenchLevelKey }
                : course === "pt"
                  ? { portugueseLevel: key as PortugueseLevelKey }
                  : course === "it"
                    ? { italianLevel: key as ItalianLevelKey }
                    : { germanLevel: key as GermanLevelKey }
            )
      }
      storyLabel={`Read a ${levelName} story`}
      onStory={() =>
        navigation.navigate(
          "ReadingsList",
          course === "fr"
            ? { frenchLevel: key as FrenchStoryLevel["path"] }
            : course === "pt"
              ? { portugueseLevel: key as PortugueseStoryLevel["path"] }
              : course === "it"
                ? { italianLevel: key as ItalianStoryLevel["path"] }
                : { germanLevel: key as GermanStoryLevel["path"] }
        )
      }
      related={related}
      onRelated={(slug) => navigation.push("GrammarGuide", { slug, lang: course })}
    />
  );
}

// A Korean grammar guide (the website's /lessons/ko/tools/grammar/[slug],
// loaded on demand): the same layout, every Korean word read in the ko-KR
// voice (old Hangul shown but never voiced, see TapText), the level by name
// with its TOPIK level, and links into the Korean lessons that teach it
// (looked up in the small lesson list, src/lib/ko-tools) and its stories.
function KoreanGrammarGuideScreen({ route, navigation }: Props) {
  const [data, setData] = useState<{ guides: KoGrammarGuide[]; lessons: KoLessonRow[] } | null>(null);
  useEffect(() => {
    let cancelled = false;
    Promise.all([loadKoreanGuides(), loadKoLessons()]).then(([guides, lessons]) => {
      if (!cancelled) setData({ guides, lessons });
    });
    return () => {
      cancelled = true;
    };
  }, []);
  if (!data) {
    return (
      <View style={[s.screen, s.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  const guide = data.guides.find((g) => g.slug === route.params.slug);
  if (!guide) {
    return (
      <View style={s.screen}>
        <Text style={[s.body, { padding: 20 }]}>This guide isn’t available.</Text>
      </View>
    );
  }
  const bySlug = new Map(data.lessons.map((l) => [l[0], l]));
  const first = guide.lessons.map((slug) => bySlug.get(slug)).find((l): l is KoLessonRow => !!l);
  const levelKey = guide.level.toLowerCase() as KoreanLevelKey;
  const levelName = guide.level === "Hangul" ? "Hangul" : (koToolLevel(levelKey)?.name ?? "");
  const related = guide.related
    .map((slug) => data.guides.find((g) => g.slug === slug))
    .filter((g): g is KoGrammarGuide => !!g);
  return (
    <GuideLayout
      guide={{
        ...guide,
        sections: guide.sections.map((sec) => ({ ...sec, examples: sec.examples?.map((ex) => ({ es: ex.ko, en: ex.en })) })),
      }}
      kicker={koGuideLevelLabel(guide.level)}
      lang={KOREAN_LANG}
      practiceLabel={first ? "Practice this in lessons" : `Go to the ${levelName} lessons`}
      onPractice={() =>
        first
          ? navigation.navigate("LessonRunner", { slug: first[0], levelPath: `ko/${first[2]}` })
          : navigation.navigate("LessonList", { koreanLevel: levelKey })
      }
      storyLabel={guide.level === "Hangul" ? undefined : `Read a ${levelName} story`}
      onStory={() => navigation.navigate("ReadingsList", { koreanLevel: levelKey as KoreanStoryLevel["path"] })}
      related={related}
      onRelated={(slug) => navigation.push("GrammarGuide", { slug, lang: "ko" })}
    />
  );
}

function GuideLayout({
  guide,
  kicker,
  lang,
  practiceLabel,
  onPractice,
  storyLabel,
  onStory,
  related,
  onRelated,
}: {
  guide: GuideBody;
  /** The level line; "Level A1" when not given. */
  kicker?: string;
  lang: SpeechLang;
  practiceLabel: string;
  onPractice: () => void;
  /** No story button when not given. */
  storyLabel?: string;
  onStory: () => void;
  related: { slug: string; title: string }[];
  onRelated: (slug: string) => void;
}) {
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.kicker}>{kicker ?? `Level ${guide.level}`}</Text>
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
              {m.register ? (
                <Text style={s.registerRow}>
                  <Text style={s.registerLabel}>Less natural here: </Text>
                  <TapText text={m.wrong} lang={lang} mode="target" style={s.register} />
                </Text>
              ) : (
                <TapText text={m.wrong} lang={lang} mode="target" style={s.wrong} />
              )}
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
      {storyLabel ? (
        <Pressable style={s.secondaryBtn} onPress={onStory}>
          <Text style={s.secondaryBtnText}>{storyLabel}</Text>
        </Pressable>
      ) : null}

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
  screen: { flex: 1, backgroundColor: "#FAF7F2" },
  loading: { alignItems: "center", justifyContent: "center" },
  content: { padding: 20, paddingBottom: 48 },
  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#8B0000", marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#2A1513", marginBottom: 14 },
  section: { marginTop: 22 },
  heading: { fontSize: 18, fontWeight: "700", color: "#2A1513", marginBottom: 8 },
  body: { fontSize: 15, lineHeight: 22, color: "#2A1513cc", marginBottom: 10 },
  example: {
    borderWidth: 1,
    borderColor: "#2A151312",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  tableScroll: { marginBottom: 10 },
  table: { borderWidth: 1, borderColor: "#2A151312", borderRadius: 10, backgroundColor: "#fff" },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#2A15130d" },
  tableHeaderRow: { borderBottomColor: "#2A151333" },
  tableCell: { width: 150, paddingHorizontal: 10, paddingVertical: 8 },
  tableHeader: { fontSize: 13.5, fontWeight: "700", color: "#2A1513" },
  tableLabel: { fontSize: 13.5, color: "#2A151399" },
  tableText: { fontSize: 14, color: "#2A1513" },
  exampleEs: { fontSize: 15, fontWeight: "600", color: "#2A1513" },
  exampleEn: { fontSize: 13.5, color: "#2A151399", marginTop: 2, lineHeight: 19 },
  wrong: { fontSize: 14, color: "#b91c1c", textDecorationLine: "line-through" },
  registerRow: { fontSize: 14 },
  registerLabel: { fontSize: 12, color: "#2A151380" },
  register: { fontSize: 14, color: "#b45309" },
  right: { fontSize: 15, fontWeight: "600", color: "#15803d", marginTop: 2 },
  faqQ: { fontSize: 15, fontWeight: "700", color: "#2A1513", marginBottom: 4 },
  bigBtn: { backgroundColor: "#8B0000", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 28 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: "#8B0000",
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryBtnText: { color: "#8B0000", fontWeight: "700", fontSize: 15 },
  relatedHeader: { fontSize: 13, fontWeight: "800", color: "#2A151366", letterSpacing: 0.5, marginBottom: 8 },
  relatedLink: { fontSize: 15, color: "#8B0000", textDecorationLine: "underline", marginBottom: 8 },
});
