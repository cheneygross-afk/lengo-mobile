import { useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { A1_STORIES } from "@/lib/stories/a1";
import { toExercises } from "@/lib/stories/types";
import ExerciseBlock from "@/components/ExerciseBlock";

type Props = NativeStackScreenProps<AppStackParamList, "StoryReader">;

// Mobile port of the web app's StoryReader -- no length cap (stories can
// run however long they run, unlike lessons), same comprehension-check
// pattern reusing ExerciseBlock in multiple-choice mode.
export default function StoryReaderScreen({ route, navigation }: Props) {
  const { slug } = route.params;
  const index = useMemo(() => A1_STORIES.findIndex((s) => s.slug === slug), [slug]);
  const story = A1_STORIES[index];
  const nextStory = A1_STORIES[index + 1];
  const exercises = useMemo(() => (story ? toExercises(story.questions) : []), [story]);

  const [answered, setAnswered] = useState<Record<number, boolean>>({});
  const answeredCount = Object.keys(answered).length;
  const correctCount = Object.values(answered).filter(Boolean).length;
  const allAnswered = answeredCount === exercises.length && exercises.length > 0;

  if (!story) {
    return (
      <View style={s.center}>
        <Text>Story not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.kicker}>Short story</Text>
      <Text style={s.title}>{story.title}</Text>
      <Text style={s.subtitle}>{story.subtitle}</Text>

      <View style={s.paragraphs}>
        {story.paragraphs.map((p, i) => (
          <Text key={i} style={s.paragraph}>
            {p}
          </Text>
        ))}
      </View>

      <View style={s.divider} />
      <Text style={s.checkHeading}>Comprehension check</Text>
      <Text style={s.checkMeta}>
        {answeredCount}/{exercises.length} answered
        {answeredCount > 0 ? ` · ${correctCount} correct` : ""}
      </Text>

      {exercises.map((exercise, i) => (
        <ExerciseBlock
          key={i}
          exercise={exercise}
          index={i}
          onAnswered={(correct) => setAnswered((prev) => ({ ...prev, [i]: correct }))}
        />
      ))}

      {allAnswered && (
        <View style={s.doneBox}>
          <Text style={s.doneTitle}>Nice work!</Text>
          <Text style={s.doneBody}>
            You got {correctCount} of {exercises.length} right.
          </Text>
          <Pressable
            style={s.nextButton}
            onPress={() =>
              nextStory
                ? navigation.replace("StoryReader", { slug: nextStory.slug })
                : navigation.goBack()
            }
          >
            <Text style={s.nextButtonText}>
              {nextStory ? `Next: ${nextStory.title} →` : "Back to readings"}
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 16, paddingBottom: 48 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  kicker: { fontSize: 11, color: "#00000066", textTransform: "uppercase", letterSpacing: 0.5 },
  title: { fontSize: 22, fontWeight: "800", color: "#000", marginTop: 4 },
  subtitle: { fontSize: 14, color: "#00000099", marginTop: 6, marginBottom: 16 },
  paragraphs: { gap: 12, marginBottom: 20 },
  paragraph: { fontSize: 15, color: "#000000dd", lineHeight: 23 },
  divider: { height: 1, backgroundColor: "#00000018", marginBottom: 16 },
  checkHeading: { fontSize: 17, fontWeight: "700", color: "#000", marginBottom: 2 },
  checkMeta: { fontSize: 13, color: "#00000099", marginBottom: 12 },
  doneBox: {
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#16a34a4d",
    backgroundColor: "#16a34a0d",
    padding: 16,
    alignItems: "center",
    gap: 8,
  },
  doneTitle: { fontSize: 16, fontWeight: "700", color: "#15803d" },
  doneBody: { fontSize: 13, color: "#000000cc" },
  nextButton: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 12, paddingHorizontal: 20, marginTop: 4 },
  nextButtonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
});
