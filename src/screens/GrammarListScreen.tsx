import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, SectionList, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { GRAMMAR_GUIDES } from "@/lib/grammar/guides";
import { GUIDE_COURSES, guideLevelName, type CourseGuide, type GuideCourse } from "@/lib/grammar/courseGuides";
import TapText from "@/components/TapText";
import { loadKoreanGuides } from "@/lib/grammar/korean";
import { KO_LEVEL_ORDER, TOPIK_FOR_LEVEL, type KoGrammarGuide, type KoLevel } from "@/lib/grammar/ko-types";
import { KOREAN_LANG } from "@/lib/speech";

type Props = NativeStackScreenProps<AppStackParamList, "Grammar">;

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

// Mobile port of the website's /grammar index: the free grammar guides
// (src/lib/grammar, synced from the website), grouped by level.
export default function GrammarListScreen(props: Props) {
  const lang = props.route.params?.lang;
  if (lang === "ko") return <KoreanGrammarList {...props} />;
  return lang === "fr" || lang === "de" || lang === "pt" || lang === "it" ? (
    <CourseGrammarList {...props} course={lang} key={lang} />
  ) : (
    <SpanishGrammarList {...props} />
  );
}

// The French or German course's, the Portuguese course's or the Italian
// beta's grammar guides (lib/grammar/courseGuides.ts, loaded on demand), by
// level, as on the website's /lessons/fr/tools/grammar,
// /lessons/de/tools/grammar, /lessons/pt/tools/grammar and
// /lessons/it/tools/grammar (Italian levels by name, never by code, with
// the pinned guides first in a "Start here" group).
function CourseGrammarList({ navigation, course }: Props & { course: GuideCourse }) {
  const config = GUIDE_COURSES[course];
  const [guides, setGuides] = useState<CourseGuide[] | null>(null);
  useLayoutEffect(() => {
    navigation.setOptions({ title: `${config.name} grammar` });
  }, [navigation, config.name]);
  useEffect(() => {
    let cancelled = false;
    config.load().then((g) => {
      if (!cancelled) setGuides(g);
    });
    return () => {
      cancelled = true;
    };
  }, [config]);
  if (!guides) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  const pinned = guides.filter((g) => g.pinned);
  const sections = [
    ...(pinned.length ? [{ title: "Start here", data: pinned }] : []),
    ...LEVEL_ORDER.map((level) => {
      const name = guideLevelName(config, level);
      return {
        title: config.diploma[level] ? `${name} · ${config.diploma[level]}` : name,
        data: guides.filter((g) => g.level === level),
      };
    }),
  ].filter((s) => s.data.length > 0);
  const range = config.levelNames ? `${config.levelNames.A1} to ${config.levelNames.C2}` : "A1 to C2";
  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(g, i) => `${g.slug}-${i}`}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <Text style={styles.subtitle}>
          Clear explanations of {config.name} grammar from {range}, with tables, examples and the mistakes to avoid.
        </Text>
      }
      renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      renderItem={({ item }) => (
        <Pressable style={styles.card} onPress={() => navigation.navigate("GrammarGuide", { slug: item.slug, lang: course })}>
          {course === "pt" || course === "it" ? (
            // The Portuguese and Italian courses: their words in the titles are tap-to-hear too.
            <>
              <TapText text={item.title} lang={config.lang} style={styles.cardTitle} />
              <TapText text={item.description} lang={config.lang} style={styles.cardBody} />
            </>
          ) : (
            <>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardBody} numberOfLines={3}>
                {item.description}
              </Text>
            </>
          )}
        </Pressable>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
}

/** "Beginner · TOPIK 1"; the Hangul module's guides are "Hangul and Pronunciation". */
export function koGuideLevelLabel(level: KoLevel): string {
  const name = { Hangul: "Hangul and Pronunciation", A1: "Beginner", A2: "Elementary", B1: "Intermediate", B2: "Upper-intermediate", C1: "Advanced", C2: "Mastery" }[level];
  return TOPIK_FOR_LEVEL[level] ? `${name} · ${TOPIK_FOR_LEVEL[level]}` : name;
}

// The Korean course's grammar guides (the website's /lessons/ko/tools/grammar,
// loaded on demand): the sound system first, then Beginner ... Mastery,
// each level shown by name with its TOPIK level, never the code. Every
// Korean word in a title or description plays when tapped.
function KoreanGrammarList({ navigation }: Props) {
  const [guides, setGuides] = useState<KoGrammarGuide[] | null>(null);
  useLayoutEffect(() => {
    navigation.setOptions({ title: "Korean grammar" });
  }, [navigation]);
  useEffect(() => {
    let cancelled = false;
    loadKoreanGuides().then((g) => {
      if (!cancelled) setGuides(g);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  if (!guides) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  const sections = KO_LEVEL_ORDER.map((level) => ({
    title: koGuideLevelLabel(level),
    data: guides.filter((g) => g.level === level),
  })).filter((s) => s.data.length > 0);
  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(g) => g.slug}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <TapText
          text={`${guides.length} short explanations of the grammar points learners get stuck on, each with tables, examples and the mistakes English speakers make. Pronunciation is shown in Hangul brackets: 읽다 [익따]. Tap any Korean word to hear it.`}
          lang={KOREAN_LANG}
          style={styles.subtitle}
        />
      }
      renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      renderItem={({ item }) => (
        <Pressable style={styles.card} onPress={() => navigation.navigate("GrammarGuide", { slug: item.slug, lang: "ko" })}>
          <TapText text={item.title} lang={KOREAN_LANG} style={styles.cardTitle} />
          <TapText text={item.description} lang={KOREAN_LANG} style={styles.cardBody} />
        </Pressable>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
}

function SpanishGrammarList({ navigation }: Props) {
  const sections = LEVEL_ORDER.map((level) => ({
    title: level,
    data: GRAMMAR_GUIDES.filter((g) => g.level === level),
  })).filter((s) => s.data.length > 0);

  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(g) => g.slug}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <Text style={styles.subtitle}>
          Clear explanations of Spanish grammar from A1 to C2, with tables, examples and the mistakes to avoid.
        </Text>
      }
      renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      renderItem={({ item }) => (
        <Pressable style={styles.card} onPress={() => navigation.navigate("GrammarGuide", { slug: item.slug })}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardBody} numberOfLines={3}>
            {item.description}
          </Text>
        </Pressable>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  loading: { alignItems: "center", justifyContent: "center" },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 14, color: "#2A151399", marginBottom: 8 },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "800",
    color: "#2A151366",
    letterSpacing: 0.5,
    marginTop: 18,
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#2A151318",
    borderRadius: 14,
    padding: 16,
    backgroundColor: "#fff",
  },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#2A1513", marginBottom: 4 },
  cardBody: { fontSize: 13.5, color: "#2A151399", lineHeight: 19 },
});
