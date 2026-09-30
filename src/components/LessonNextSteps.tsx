import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import TapText from "@/components/TapText";
import { STORIES_BY_LEVEL_PATH } from "@/lib/stories/byLevel";
import { pickStoryToRead, storyLevelPathForLesson } from "@/lib/stories/pickStory";
import type { Story } from "@/lib/stories/types";
import { loadStoriesRead } from "@/lib/storiesRead";

// Shown under a finished lesson, like the website's LessonNextSteps: a
// story at the lesson's level the learner hasn't read yet. The website also
// links the matching grammar guide (see src/lib/lessons/grammarLinks.ts,
// guideForLesson); the app has no guide screen yet, so that link is left
// out here.
export default function LessonNextSteps({
  levelPath,
  lessonNumber,
  onOpenStory,
}: {
  levelPath: string;
  lessonNumber: number;
  onOpenStory: (slug: string) => void;
}) {
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    const storyPath = storyLevelPathForLesson(levelPath);
    if (!storyPath) return;
    let cancelled = false;
    loadStoriesRead().then((read) => {
      if (cancelled) return;
      setStory(pickStoryToRead(STORIES_BY_LEVEL_PATH[storyPath] ?? [], (slug) => !!read[slug], lessonNumber));
    });
    return () => {
      cancelled = true;
    };
  }, [levelPath, lessonNumber]);

  if (!story) return null;
  return (
    <View style={s.card}>
      <Text style={s.kicker}>Read a story at this level</Text>
      <TapText text={story.title} lang="es-ES" mode="target" style={s.title} />
      <Pressable style={s.button} onPress={() => onOpenStory(story.slug)} accessibilityRole="button">
        <Text style={s.buttonText}>Read the story →</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    marginHorizontal: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 12,
    padding: 14,
    gap: 6,
  },
  kicker: { fontSize: 11, color: "#00000080", textTransform: "uppercase", letterSpacing: 0.5 },
  title: { fontSize: 16, fontWeight: "700", color: "#000" },
  button: { alignSelf: "flex-start", marginTop: 2 },
  buttonText: { fontSize: 14, fontWeight: "700", color: "#7A1F1F" },
});
