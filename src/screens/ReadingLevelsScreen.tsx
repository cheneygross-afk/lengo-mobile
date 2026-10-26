import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { card, cardShadow, colors, fonts } from "@/ui/theme";
import type { AppStackParamList } from "@/navigation/types";
import { READING_LEVELS } from "@/lib/stories/registry";
import { STORY_COURSES, type CourseStories, type StoryCourse } from "@/lib/stories/courseStories";

type Props = NativeStackScreenProps<AppStackParamList, "ReadingLevels">;

// Mobile port of the website's /readings index -- one card per level,
// each opening that level's ReadingsList (stories + book picks). Same
// card layout as SpanishLevelsScreen.
export default function ReadingLevelsScreen(props: Props) {
  const lang = props.route.params?.lang;
  return lang === "fr" || lang === "de" || lang === "pt" || lang === "ko" ? (
    <CourseStoryLevels {...props} course={lang} key={lang} />
  ) : (
    <SpanishReadingLevels {...props} />
  );
}

function SpanishReadingLevels({ navigation }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>
        Free original stories with comprehension questions, plus real Spanish books for every level.
      </Text>
      <View style={styles.cards}>
        {READING_LEVELS.map((lvl) => (
          <Pressable
            key={lvl.levelPath}
            style={styles.card}
            onPress={() => navigation.navigate("ReadingsList", { levelPath: lvl.levelPath })}
          >
            <View style={styles.cardTop}>
              <Text style={styles.cardCode}>{lvl.code}</Text>
              <Text style={styles.cardName}>{lvl.name}</Text>
            </View>
            <Text style={styles.cardDescription}>{lvl.description}</Text>
            <Text style={styles.cardMeta}>
              {lvl.stories.length} stories · {lvl.readings.length} books
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

// The French or German course's, the Portuguese course's or the Korean
// beta's stories (lib/stories/courseStories.ts), level by level, as on the
// website's /lessons/fr/stories, /lessons/de/stories, /lessons/pt/stories
// and /lessons/ko/stories (Korean levels by name only: Beginner ...
// Mastery; gated to the beta account in RootNavigator): graded
// original stories with audio and glosses (no whole-text translation: tap
// any word for its meaning). No book picks for these courses.
function CourseStoryLevels({ navigation, course }: Props & { course: StoryCourse }) {
  const config = STORY_COURSES[course];
  const [data, setData] = useState<CourseStories | null>(config.ifLoaded);
  useLayoutEffect(() => {
    navigation.setOptions({ title: `${config.name} stories` });
  }, [navigation, config.name]);
  useEffect(() => {
    if (data) return;
    let cancelled = false;
    config.load().then((d) => {
      if (!cancelled) setData(d);
    });
    return () => {
      cancelled = true;
    };
  }, [data, config]);

  if (!data) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>
        {course === "pt"
          ? "Original Brazilian Portuguese stories for every level, with audio and comprehension questions. Tap any word for its meaning."
          : course === "ko"
          ? "Original Korean stories for every level, from Beginner to Mastery, with audio and comprehension questions. Tap any word for its meaning."
          : `Original ${config.name} stories for every level, with audio, an English translation and comprehension questions.`}
      </Text>
      <View style={styles.cards}>
        {data.levels.map((lvl) => (
          <Pressable
            key={lvl.path}
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                "ReadingsList",
                course === "fr"
                  ? { frenchLevel: lvl.path }
                  : course === "pt"
                  ? { portugueseLevel: lvl.path }
                  : course === "ko"
                  ? { koreanLevel: lvl.path }
                  : { germanLevel: lvl.path }
              )
            }
          >
            <View style={styles.cardTop}>
              <Text style={styles.cardCode}>{lvl.label}</Text>
              {config.namedLevels ? null : <Text style={styles.cardName}>{lvl.name}</Text>}
            </View>
            <Text style={styles.cardMeta}>{lvl.stories.length} stories</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  loading: { alignItems: "center", justifyContent: "center" },
  subtitle: { fontSize: 15, lineHeight: 21, color: colors.inkSoft, marginBottom: 20 },
  cards: { gap: 14 },
  card: { ...card, padding: 18, paddingLeft: 20, borderLeftWidth: 5, borderLeftColor: colors.saffron },
  cardTop: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", gap: 8, marginBottom: 6 },
  cardCode: { fontFamily: fonts.display, fontSize: 21, color: colors.foreground },
  cardName: { fontSize: 14, color: colors.inkSoft, flexShrink: 1 },
  cardDescription: { fontSize: 14, color: colors.inkSoft, lineHeight: 20, marginBottom: 10 },
  cardMeta: { fontSize: 12, fontWeight: "600", color: colors.inkMuted },
});
