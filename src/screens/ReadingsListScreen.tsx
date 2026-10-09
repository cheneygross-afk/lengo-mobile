import { useEffect, useMemo, useState } from "react";
import { View, Text, SectionList, Pressable, Linking, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { getReadingLevel } from "@/lib/stories/registry";
import { readinessLabel } from "@/lib/stories/pickStory";
import { LEVEL_INTROS } from "@/lib/readings/levelIntros";
import type { Story } from "@/lib/stories/types";
import type { Reading } from "@/lib/readings/types";
import { frenchStoriesIfLoaded, loadFrenchStories, type FrenchStories } from "@/lib/stories/french";
import { loadStoriesRead } from "@/lib/storiesRead";

type Props = NativeStackScreenProps<AppStackParamList, "ReadingsList">;

// Mobile port of the web app's ReadingList: one level's free in-app stories
// (unlimited length -- no 10-minute cap, unlike lessons) plus the
// curated book recommendations, which open to an Amazon search rather
// than a specific listing (see amazonSearchUrl in @/lib/readings/types).
type Row = { kind: "story"; story: Story } | { kind: "book"; reading: Reading };

export default function ReadingsListScreen(props: Props) {
  return props.route.params?.frenchLevel ? <FrenchStoriesList {...props} /> : <SpanishReadingsList {...props} />;
}

// One French level's stories (lib/stories/french.ts), read ones ticked.
function FrenchStoriesList({ route, navigation }: Props) {
  const path = route.params?.frenchLevel ?? "a1";
  const [data, setData] = useState<FrenchStories | null>(frenchStoriesIfLoaded);
  const [read, setRead] = useState<Record<string, number>>({});
  useEffect(() => {
    let cancelled = false;
    if (!data)
      loadFrenchStories().then((d) => {
        if (!cancelled) setData(d);
      });
    loadStoriesRead().then((r) => {
      if (!cancelled) setRead(r);
    });
    return () => {
      cancelled = true;
    };
  }, [data]);
  const level = data?.levels.find((l) => l.path === path);
  if (!level) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.list}
      data={level.stories}
      keyExtractor={(story) => story.slug}
      ListHeaderComponent={
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {level.label} · {level.name}
          </Text>
          <Text style={styles.sectionSubtitle}>{level.stories.length} stories with audio, translation and questions</Text>
        </View>
      }
      renderItem={({ item }) => (
        <Pressable
          style={styles.row}
          onPress={() => navigation.navigate("StoryReader", { slug: item.slug, levelPath: `fr/${level.path}` })}
        >
          <Text style={styles.rowTitle}>
            {read[item.slug] ? "✓ " : ""}
            {item.title}
          </Text>
          <Text style={styles.rowSummary} numberOfLines={2}>
            {item.subtitle}
          </Text>
          {item.genre ? <Text style={styles.rowReady}>{item.genre}</Text> : null}
        </Pressable>
      )}
    />
  );
}

function SpanishReadingsList({ route, navigation }: Props) {
  // levelPath defaults to "a1" so any older ReadingsList navigation with
  // no params still lands on the A1 list it always showed.
  const levelPath = route.params?.levelPath ?? "a1";
  const sections = useMemo(() => {
    const { stories, readings } = getReadingLevel(levelPath);
    // Nonfiction texts are Story objects with a genre; they get their own
    // section, as on the website.
    const fiction = stories.filter((story) => !story.genre);
    const nonfiction = stories.filter((story) => story.genre);
    return [
      {
        title: "Short stories",
        subtitle: `${fiction.length} free stories with comprehension questions`,
        data: fiction.map((story): Row => ({ kind: "story", story })),
      },
      ...(nonfiction.length
        ? [
            {
              title: "Nonfiction",
              subtitle: `${nonfiction.length} articles and essays with comprehension questions`,
              data: nonfiction.map((story): Row => ({ kind: "story", story })),
            },
          ]
        : []),
      {
        title: "Books",
        subtitle: `${readings.length} books to buy and read at your own pace`,
        data: readings.map((reading): Row => ({ kind: "book", reading })),
      },
    ];
  }, [levelPath]);

  const readyNote = LEVEL_INTROS[levelPath]?.readyNote;

  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.list}
      sections={sections}
      ListHeaderComponent={
        readyNote ? (
          <View style={styles.note}>
            <Text style={styles.noteTitle}>{readyNote.heading}</Text>
            <Text style={styles.noteBody}>{readyNote.body}</Text>
          </View>
        ) : null
      }
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
            {item.story.band || item.story.genre || readinessLabel(item.story.slug) ? (
              <Text style={styles.rowReady}>
                {[item.story.band, item.story.genre, readinessLabel(item.story.slug)].filter(Boolean).join(" · ")}
              </Text>
            ) : null}
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
  loading: { alignItems: "center", justifyContent: "center" },
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
  rowReady: { fontSize: 12, color: "#00000066", marginTop: 6 },
  note: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#00000012",
    marginTop: 4,
  },
  noteTitle: { fontSize: 14, fontWeight: "700", color: "#000" },
  noteBody: { fontSize: 13, color: "#000000B3", marginTop: 4, lineHeight: 19 },
  buyLink: { fontSize: 12, color: "#7A1F1F", fontWeight: "700", marginTop: 8 },
});
