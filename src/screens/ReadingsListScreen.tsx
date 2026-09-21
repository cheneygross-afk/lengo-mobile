import { useMemo } from "react";
import { View, Text, SectionList, Pressable, Linking, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { A1_STORIES } from "@/lib/stories/a1";
import { A1_READINGS } from "@/lib/readings/a1";
import type { Story } from "@/lib/stories/types";
import type { Reading } from "@/lib/readings/types";

type Props = NativeStackScreenProps<AppStackParamList, "ReadingsList">;

// Mobile port of the web app's ReadingList: A1's free in-app stories
// (unlimited length -- no 10-minute cap, unlike lessons) plus the
// curated book recommendations, which open to an Amazon search rather
// than a specific listing (see amazonSearchUrl in @/lib/readings/types).
type Row = { kind: "story"; story: Story } | { kind: "book"; reading: Reading };

export default function ReadingsListScreen({ navigation }: Props) {
  const sections = useMemo(
    () => [
      {
        title: "Short stories",
        subtitle: `${A1_STORIES.length} free stories with comprehension questions`,
        data: A1_STORIES.map((story): Row => ({ kind: "story", story })),
      },
      {
        title: "Books",
        subtitle: `${A1_READINGS.length} books to buy and read at your own pace`,
        data: A1_READINGS.map((reading): Row => ({ kind: "book", reading })),
      },
    ],
    []
  );

  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.list}
      sections={sections}
      keyExtractor={(row, i) => (row.kind === "story" ? row.story.slug : row.reading.title + i)}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
        </View>
      )}
      renderItem={({ item }) =>
        item.kind === "story" ? (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate("StoryReader", { slug: item.story.slug })}
          >
            <Text style={styles.rowTitle}>{item.story.title}</Text>
            <Text style={styles.rowSummary} numberOfLines={2}>
              {item.story.subtitle}
            </Text>
          </Pressable>
        ) : (
          <Pressable style={styles.row} onPress={() => Linking.openURL(item.reading.amazonUrl)}>
            <Text style={styles.rowTitle}>{item.reading.title}</Text>
            <Text style={styles.rowAuthor}>{item.reading.author}</Text>
            <Text style={styles.rowSummary} numberOfLines={3}>
              {item.reading.description}
            </Text>
            <Text style={styles.buyLink}>Buy on Amazon ↗</Text>
          </Pressable>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  list: { padding: 16, paddingBottom: 32 },
  sectionHeader: { paddingTop: 20, paddingBottom: 8 },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#7A1F1F" },
  sectionSubtitle: { fontSize: 12, color: "#00000066", marginTop: 2 },
  row: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#00000012",
    marginBottom: 10,
  },
  rowTitle: { fontSize: 16, fontWeight: "600", color: "#000" },
  rowAuthor: { fontSize: 13, color: "#00000099", marginTop: 2 },
  rowSummary: { fontSize: 13, color: "#00000099", marginTop: 4 },
  buyLink: { fontSize: 12, color: "#7A1F1F", fontWeight: "700", marginTop: 8 },
});
