import { View, Text, Pressable, StyleSheet, SectionList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { GRAMMAR_GUIDES } from "@/lib/grammar/guides";

type Props = NativeStackScreenProps<AppStackParamList, "Grammar">;

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

// Mobile port of the website's /grammar index: the free grammar guides
// (src/lib/grammar, synced from the website), grouped by level.
export default function GrammarListScreen({ navigation }: Props) {
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
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 14, color: "#00000099", marginBottom: 8 },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "800",
    color: "#00000066",
    letterSpacing: 0.5,
    marginTop: 18,
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 16,
    backgroundColor: "#fff",
  },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#000", marginBottom: 4 },
  cardBody: { fontSize: 13.5, color: "#00000099", lineHeight: 19 },
});
