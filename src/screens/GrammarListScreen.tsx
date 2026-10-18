import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, SectionList, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { GRAMMAR_GUIDES } from "@/lib/grammar/guides";
import { GUIDE_COURSES, type CourseGuide, type GuideCourse } from "@/lib/grammar/courseGuides";
import TapText from "@/components/TapText";

type Props = NativeStackScreenProps<AppStackParamList, "Grammar">;

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

// Mobile port of the website's /grammar index: the free grammar guides
// (src/lib/grammar, synced from the website), grouped by level.
export default function GrammarListScreen(props: Props) {
  const lang = props.route.params?.lang;
  return lang === "fr" || lang === "de" || lang === "pt" ? (
    <CourseGrammarList {...props} course={lang} key={lang} />
  ) : (
    <SpanishGrammarList {...props} />
  );
}

// The French or German course's or the Portuguese course's grammar guides
// (lib/grammar/courseGuides.ts, loaded on demand), by level, as on the
// website's /lessons/fr/tools/grammar, /lessons/de/tools/grammar and
// /lessons/pt/tools/grammar.
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
  const sections = LEVEL_ORDER.map((level) => ({
    title: config.diploma[level] ? `${level} · ${config.diploma[level]}` : level,
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
        <Text style={styles.subtitle}>
          Clear explanations of {config.name} grammar from A1 to C2, with tables, examples and the mistakes to avoid.
        </Text>
      }
      renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      renderItem={({ item }) => (
        <Pressable style={styles.card} onPress={() => navigation.navigate("GrammarGuide", { slug: item.slug, lang: course })}>
          {course === "pt" ? (
            // The Portuguese course: its words in the titles are tap-to-hear too.
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
