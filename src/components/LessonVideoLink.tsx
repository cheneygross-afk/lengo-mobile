import { useState } from "react";
import { View, StyleSheet } from "react-native";
import VideoCard from "@/components/VideoCard";
import VideoQuizModal from "@/components/VideoQuizModal";
import { LESSON_VIDEOS } from "@/lib/lessons/lessonVideos";
import type { Lesson } from "@/lib/lessons/types";

// The lesson's companion video (lessonVideos.ts, synced from the
// website) as a compact thumbnail card, linked -- not embedded -- and
// opened in YouTube or the browser. Renders nothing for lessons without one.
// A video with a quiz offers it once opened (see VideoCard).
export default function LessonVideoLink({ level, slug }: { level: Lesson["level"]; slug: string }) {
  const video = LESSON_VIDEOS[level]?.[slug];
  const [quizOpen, setQuizOpen] = useState(false);
  if (!video) return null;
  return (
    <View style={s.box}>
      <VideoCard video={video} variant="row" eyebrow="Video for this lesson" tapTitle onQuiz={() => setQuizOpen(true)} />
      <VideoQuizModal video={quizOpen ? video : null} onClose={() => setQuizOpen(false)} />
    </View>
  );
}

const s = StyleSheet.create({
  box: { marginBottom: 18 },
});
