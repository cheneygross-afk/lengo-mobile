import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import TapText from "@/components/TapText";
import { GRAMMAR_GUIDES } from "@/lib/grammar/guides";
import { guideForLesson } from "@/lib/lessons/grammarLinks";
import { STORIES_BY_LEVEL_PATH } from "@/lib/stories/byLevel";
import { pickStoryForLesson, type StoryLevelPath } from "@/lib/stories/pickStory";
import type { Story } from "@/lib/stories/types";
import { loadStoriesRead } from "@/lib/storiesRead";

// Shown under a finished lesson, like the website's LessonNextSteps: a
// story the learner hasn't read yet and is ready for (pickStoryForLesson). The website also
// links the matching grammar guide (see src/lib/lessons/grammarLinks.ts,
// guideForLesson), shown here too when one exists.
export default function LessonNextSteps({
  levelPath,
  lessonSlug,
  lessonNumber,
  onOpenStory,
  onOpenGuide,
}: {
  levelPath: string;
  lessonSlug: string;
  lessonNumber: number;
  onOpenStory: (slug: string) => void;
  onOpenGuide: (slug: string) => void;
}) {
  const guideSlug = guideForLesson(levelPath, lessonSlug);
  const guide = guideSlug ? GRAMMAR_GUIDES.find((g) => g.slug === guideSlug) : undefined;
  const [pick, setPick] = useState<{ story: Story; storyPath: StoryLevelPath } | null>(null);
  const story = pick?.story ?? null;

  useEffect(() => {
    let cancelled = false;
    loadStoriesRead().then((read) => {
      if (cancelled) return;
      setPick(pickStoryForLesson(levelPath, lessonNumber, STORIES_BY_LEVEL_PATH, (slug) => !!read[slug]));
    });
    return () => {
      cancelled = true;
    };
  }, [levelPath, lessonNumber]);

  if (!story && !guide) return null;
  return (
    <>
    {guide ? (
      <View style={s.card}>
        <Text style={s.kicker}>Review this grammar</Text>
        <TapText text={guide.title} lang="es-ES" mode="mixed" style={s.title} />
        <Pressable style={s.button} onPress={() => onOpenGuide(guide.slug)} accessibilityRole="button">
          <Text style={s.buttonText}>Open the guide →</Text>
        </Pressable>
      </View>
    ) : null}
    {story ? (
    <View style={s.card}>
      <Text style={s.kicker}>
        {levelPath === "a2" && pick?.storyPath === "a1" ? "Read an easier story" : "Read a story at this level"}
      </Text>
      <TapText text={story.title} lang="es-ES" mode="target" style={s.title} />
      <Pressable style={s.button} onPress={() => onOpenStory(story.slug)} accessibilityRole="button">
        <Text style={s.buttonText}>Read the story →</Text>
      </Pressable>
    </View>
    ) : null}
    </>
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
