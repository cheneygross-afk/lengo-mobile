import type { ReactNode } from "react";
import { View, Text, Image, Pressable, Linking, StyleSheet, type StyleProp, type ViewStyle } from "react-native";
import TapText from "@/components/TapText";
import { SPANISH_LANG } from "@/lib/speech";
import { videoUrlFor, type LessonVideo } from "@/lib/lessons/lessonVideos";
import { displayTitle, splitSource, videoThumbnailUrl } from "@/lib/lessons/videoTopics";
import { quizFor, quizPassed, type VideoQuizResult } from "@/lib/lessons/videoQuizzes";
import { markVideoOpened, useVideoQuizStore } from "@/lib/videoQuizProgress";

// A linked (not embedded) YouTube video, opened in YouTube or the browser:
// thumbnail with a play badge, title, channel and an optional variety tag.
// "tile" stacks the thumbnail on top (the level's swipeable row); "row" puts
// it beside the text with a small label (the video in a lesson). With
// `tapTitle`, the title's words are tap-to-hear like the rest of a lesson,
// and the thumbnail and label open the video.
//
// When the video has a quiz (videoQuizzes.ts) and the caller passes
// `onQuiz`, the thumbnail carries a "Quiz" badge (or the latest score), and
// once the video has been opened on this device the card offers "Done
// watching? Check your understanding", which calls onQuiz. Videos without a
// quiz render exactly as before.

function open(video: LessonVideo) {
  markVideoOpened(video.videoId);
  void Linking.openURL(videoUrlFor(video.videoId));
}

function QuizBadge({ result }: { result?: VideoQuizResult }) {
  const passed = !!result && quizPassed(result);
  return (
    <View style={[s.quizBadge, passed && s.quizBadgePassed]}>
      <Text style={[s.quizBadgeText, passed && s.quizBadgeTextPassed]}>
        {result ? `${passed ? "✓ " : ""}${result.correct}/${result.total}` : "Quiz"}
      </Text>
    </View>
  );
}

function Thumb({
  video,
  style,
  badge,
  quizBadge,
}: {
  video: LessonVideo;
  style: StyleProp<ViewStyle>;
  badge: number;
  quizBadge?: ReactNode;
}) {
  return (
    <View style={[s.thumb, style]}>
      <Image
        source={{ uri: videoThumbnailUrl(video.videoId) }}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        accessibilityIgnoresInvertColors
      />
      <View style={[s.play, { width: badge, height: badge, borderRadius: badge / 2 }]}>
        <Text style={[s.playIcon, { fontSize: badge * 0.4 }]}>▶</Text>
      </View>
      {quizBadge}
    </View>
  );
}

function Meta({ video }: { video: LessonVideo }) {
  const { channel, detail } = splitSource(video.source);
  return (
    <View style={s.meta}>
      <Text style={s.source} numberOfLines={1}>
        {channel}
        {detail ? <Text style={s.sourceDetail}> · {detail}</Text> : null}
      </Text>
      {video.variety ? (
        <View style={s.tag}>
          <Text style={s.tagText}>{video.variety}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default function VideoCard({
  video,
  variant = "tile",
  eyebrow,
  tapTitle = false,
  style,
  onQuiz,
}: {
  video: LessonVideo;
  variant?: "tile" | "row";
  eyebrow?: string;
  tapTitle?: boolean;
  style?: StyleProp<ViewStyle>;
  /** Opens this video's quiz; the card shows quiz affordances only when set. */
  onQuiz?: () => void;
}) {
  const store = useVideoQuizStore();
  const title = displayTitle(video.title);
  const hasQuiz = !!onQuiz && !!quizFor(video.videoId);
  const result = hasQuiz ? store.results[video.videoId] : undefined;
  const quizBadge = hasQuiz ? <QuizBadge result={result} /> : undefined;
  const label = `${eyebrow ? `${eyebrow}: ` : ""}${title}, ${video.source}${video.variety ? `, ${video.variety}` : ""}${hasQuiz ? ", has a quiz" : ""}. Opens YouTube.`;

  // Quiz cards: the link plus a footer inside one bordered card.
  const wrap = (link: ReactNode) =>
    hasQuiz ? (
      <View style={[s.card, style]}>
        {link}
        {result || store.opened[video.videoId] ? (
          <Pressable
            onPress={onQuiz}
            accessibilityRole="button"
            accessibilityLabel={`${result ? "Retake the quiz" : "Check your understanding"}: ${title}`}
            style={({ pressed }) => [s.quizFooter, pressed && s.pressed]}
          >
            {result ? (
              <Text style={s.quizFooterText}>
                <Text style={quizPassed(result) ? s.quizFooterPassed : undefined}>
                  {quizPassed(result) ? "✓ " : ""}Quiz {result.correct}/{result.total}
                </Text>{" "}
                · Retake →
              </Text>
            ) : (
              <Text style={s.quizFooterText}>Done watching? Check your understanding →</Text>
            )}
          </Pressable>
        ) : null}
      </View>
    ) : (
      link
    );
  const titleEl = tapTitle ? (
    <TapText text={title} lang={SPANISH_LANG} style={variant === "row" ? s.rowTitle : s.tileTitle} />
  ) : (
    <Text style={variant === "row" ? s.rowTitle : s.tileTitle} numberOfLines={2}>
      {title}
    </Text>
  );

  if (variant === "row") {
    return wrap(
      <Pressable
        onPress={() => open(video)}
        accessibilityRole="link"
        accessibilityLabel={label}
        style={({ pressed }) => [hasQuiz ? null : s.card, s.rowCard, pressed && s.pressed, hasQuiz ? null : style]}
      >
        <Thumb video={video} style={s.rowThumb} badge={30} quizBadge={quizBadge} />
        <View style={s.rowBody}>
          {eyebrow ? <Text style={s.eyebrow}>{eyebrow} ↗</Text> : null}
          {titleEl}
          <Meta video={video} />
        </View>
      </Pressable>,
    );
  }

  return wrap(
    <Pressable
      onPress={() => open(video)}
      accessibilityRole="link"
      accessibilityLabel={label}
      style={({ pressed }) => [hasQuiz ? s.grow : s.card, pressed && s.pressed, hasQuiz ? null : style]}
    >
      <Thumb video={video} style={s.tileThumb} badge={40} quizBadge={quizBadge} />
      <View style={s.tileBody}>
        {titleEl}
        <Meta video={video} />
      </View>
    </Pressable>,
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#00000018",
    overflow: "hidden",
  },
  pressed: { opacity: 0.85 },
  thumb: { aspectRatio: 16 / 9, backgroundColor: "#7A1F1F14", alignItems: "center", justifyContent: "center" },
  play: { backgroundColor: "#000000b3", alignItems: "center", justifyContent: "center" },
  playIcon: { color: "#fff", marginLeft: 3 },
  tileThumb: { width: "100%" },
  tileBody: { paddingHorizontal: 10, paddingTop: 8, paddingBottom: 10 },
  tileTitle: { fontSize: 14, fontWeight: "600", color: "#000", lineHeight: 19 },
  rowCard: { flexDirection: "row", alignItems: "center" },
  rowThumb: { width: 120 },
  rowBody: { flex: 1, paddingHorizontal: 12, paddingVertical: 10 },
  eyebrow: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#7A1F1F" },
  rowTitle: { fontSize: 14, fontWeight: "600", color: "#000", marginTop: 2, lineHeight: 19 },
  meta: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6, marginTop: 4 },
  source: { flexShrink: 1, fontSize: 12, color: "#00000080" },
  sourceDetail: { color: "#00000059" },
  tag: { backgroundColor: "#7A1F1F14", borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2 },
  tagText: { fontSize: 11, color: "#7A1F1F", fontWeight: "600" },
  grow: { flexGrow: 1 },
  quizBadge: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: "#fffffff2",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  quizBadgePassed: { backgroundColor: "#15803d" },
  quizBadgeText: { fontSize: 11, fontWeight: "700", color: "#000" },
  quizBadgeTextPassed: { color: "#fff" },
  quizFooter: {
    borderTopWidth: 1,
    borderTopColor: "#00000018",
    backgroundColor: "#7A1F1F0d",
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  quizFooterText: { fontSize: 13, fontWeight: "600", color: "#000" },
  quizFooterPassed: { color: "#15803d" },
});
