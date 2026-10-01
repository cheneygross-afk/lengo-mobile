import { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import VideoCard from "@/components/VideoCard";
import VideoQuizModal from "@/components/VideoQuizModal";
import { LEVEL_WATCH_VIDEOS, type LessonVideo } from "@/lib/lessons/lessonVideos";
import { listeningSummary } from "@/lib/lessons/videoQuizzes";
import { useVideoQuizStore } from "@/lib/videoQuizProgress";
import { WATCH_INTRO, filterByTopic, topicsIn, type VideoTopicFilter } from "@/lib/lessons/videoTopics";
import type { SpanishLevelPath } from "@/lib/lessons/levels";

// "Watch & listen" under a level's units, as on the website's level page:
// general listening videos at that level (LEVEL_WATCH_VIDEOS), as a
// swipeable row of thumbnail cards with topic chips. "Show all" lists the
// rest as full-width cards. Each opens YouTube. Videos with a quiz
// (videoQuizzes.ts) open it in a sheet, and the header sums up this
// level's quiz scores.
const SHOWN = 6;
const LEVEL_ORDER: SpanishLevelPath[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

function ListeningScore({ levelPath }: { levelPath: SpanishLevelPath }) {
  const store = useVideoQuizStore();
  const summary = listeningSummary(levelPath, store.results);
  if (summary.available === 0) return null;
  const next = LEVEL_ORDER[LEVEL_ORDER.indexOf(levelPath) + 1];
  return (
    <Text style={s.score}>
      <Text style={s.scoreLabel}>Listening score: </Text>
      {summary.taken === 0
        ? "videos marked Quiz have a short check once you've watched them."
        : `${summary.passed} of ${summary.taken} ${summary.taken === 1 ? "quiz" : "quizzes"} passed · ${Math.round(summary.average * 100)}% average`}
      {summary.readyForNext && next ? <Text style={s.ready}> · Ready for {next.toUpperCase()} videos</Text> : null}
    </Text>
  );
}

export default function LevelWatchSection({ levelPath }: { levelPath: SpanishLevelPath }) {
  const all = LEVEL_WATCH_VIDEOS[levelPath] ?? [];
  const [topic, setTopic] = useState<VideoTopicFilter>("all");
  const [expanded, setExpanded] = useState(false);
  const [quizVideo, setQuizVideo] = useState<LessonVideo | null>(null);
  if (all.length === 0) return null;

  const topics = topicsIn(all);
  const videos = filterByTopic(all, topic);
  const chips: { id: VideoTopicFilter; label: string; count: number }[] =
    topics.length > 0 ? [{ id: "all", label: "All", count: all.length }, ...topics] : [];

  function pick(t: VideoTopicFilter) {
    setTopic(t);
    setExpanded(false);
  }

  return (
    <View style={s.section}>
      <Text style={s.heading} accessibilityRole="header">
        Watch & listen
      </Text>
      <Text style={s.intro}>{WATCH_INTRO[levelPath]} Videos open on YouTube.</Text>
      <ListeningScore levelPath={levelPath} />

      {chips.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={s.bleed}
          contentContainerStyle={s.chipRow}
        >
          {chips.map((c) => {
            const active = topic === c.id;
            return (
              <Pressable
                key={c.id}
                onPress={() => pick(c.id)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                accessibilityLabel={`${c.label}, ${c.count} videos`}
                style={[s.chip, active && s.chipActive]}
              >
                <Text style={[s.chipText, active && s.chipTextActive]}>
                  {c.label} <Text style={active ? s.chipCountActive : s.chipCount}>{c.count}</Text>
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )}

      {expanded ? (
        <View style={s.list}>
          {videos.map((v) => (
            <VideoCard key={v.videoId} video={v} variant="row" tapTitle onQuiz={() => setQuizVideo(v)} />
          ))}
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={s.bleed}
          contentContainerStyle={s.cardRow}
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + GAP}
          snapToAlignment="start"
        >
          {videos.slice(0, SHOWN).map((v) => (
            <VideoCard key={v.videoId} video={v} style={s.tile} tapTitle onQuiz={() => setQuizVideo(v)} />
          ))}
        </ScrollView>
      )}

      {videos.length > SHOWN && (
        <Pressable
          onPress={() => setExpanded((e) => !e)}
          accessibilityRole="button"
          accessibilityState={{ expanded }}
          style={s.moreBtn}
        >
          <Text style={s.moreText}>{expanded ? "Show fewer" : `Show all ${videos.length}`}</Text>
        </Pressable>
      )}

      <VideoQuizModal video={quizVideo} onClose={() => setQuizVideo(null)} />
    </View>
  );
}

const CARD_WIDTH = 220;
const GAP = 12;

const s = StyleSheet.create({
  section: { marginTop: 28, paddingTop: 20, borderTopWidth: 1, borderTopColor: "#00000014" },
  heading: { fontSize: 18, fontWeight: "800", color: "#7A1F1F" },
  intro: { fontSize: 13, color: "#000000aa", marginTop: 4, lineHeight: 18 },
  score: { fontSize: 13, color: "#000000aa", marginTop: 6, lineHeight: 18 },
  scoreLabel: { fontWeight: "700", color: "#000" },
  ready: { fontWeight: "700", color: "#15803d" },
  // Rows run to the screen edges (the list has 16px side padding).
  bleed: { marginHorizontal: -16, marginTop: 12 },
  chipRow: { paddingHorizontal: 16, gap: 8 },
  chip: {
    borderWidth: 1,
    borderColor: "#7A1F1F40",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: "#fff",
  },
  chipActive: { backgroundColor: "#000", borderColor: "#000" },
  chipText: { fontSize: 13, color: "#7A1F1F", fontWeight: "600" },
  chipTextActive: { color: "#fff" },
  chipCount: { color: "#7A1F1F99", fontWeight: "400" },
  chipCountActive: { color: "#ffffffaa", fontWeight: "400" },
  cardRow: { paddingHorizontal: 16, gap: GAP },
  tile: { width: CARD_WIDTH },
  list: { marginTop: 12, gap: 10 },
  moreBtn: {
    alignSelf: "flex-start",
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#7A1F1F",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  moreText: { color: "#7A1F1F", fontWeight: "700", fontSize: 14 },
});
