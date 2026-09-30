import { View, Text, Pressable, Linking, StyleSheet } from "react-native";
import TapText from "@/components/TapText";
import { SPANISH_LANG } from "@/lib/speech";
import { LESSON_VIDEOS, videoUrlFor } from "@/lib/lessons/lessonVideos";
import type { Lesson } from "@/lib/lessons/types";

// The lesson's companion video (lessonVideos.ts, synced from the
// website), linked -- not embedded -- and opened in YouTube or the
// browser. Renders nothing for lessons without one.
export default function LessonVideoLink({ level, slug }: { level: Lesson["level"]; slug: string }) {
  const video = LESSON_VIDEOS[level]?.[slug];
  if (!video) return null;
  return (
    <View style={s.box}>
      <Pressable onPress={() => void Linking.openURL(videoUrlFor(video.videoId))} hitSlop={6}>
        <Text style={s.link}>▶ Watch a video for this lesson</Text>
      </Pressable>
      <TapText text={video.title} lang={SPANISH_LANG} style={s.title} />
      <Text style={s.source}>{video.source}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 18,
  },
  link: { fontSize: 15, fontWeight: "700", color: "#7A1F1F" },
  title: { fontSize: 13, color: "#000000cc", marginTop: 4 },
  source: { fontSize: 12, color: "#00000066", marginTop: 2 },
});
