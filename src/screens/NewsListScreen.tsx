import { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { card, colors, fonts } from "@/ui/theme";
import type { AppStackParamList } from "@/navigation/types";
import { TOPIC_EMOJI, TOPIC_LABELS, type InterestProfile } from "@/lib/interests";
import { fetchNews, newsDate, NEWS_LEVEL_NOTE, type AppNewsArticle } from "@/lib/news/api";
import { orderForLearner } from "@/lib/news/pick";
import { loadNewsInterests, rememberNewsLevel, startingNewsLevel } from "@/lib/news/level";
import type { NewsLevel } from "@/lib/news/types";
import NewsLevelTabs from "@/components/NewsLevelTabs";

type Props = NativeStackScreenProps<AppStackParamList, "NewsList">;

// Readings > News: the website's fresh Spanish news (GET /api/news), at
// the level picked above; articles on the learner's survey topics first.
export default function NewsListScreen({ navigation }: Props) {
  const [articles, setArticles] = useState<AppNewsArticle[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [level, setLevel] = useState<NewsLevel>("a1");
  const [profile, setProfile] = useState<InterestProfile | null>(null);

  const load = useCallback(() => {
    setFailed(false);
    fetchNews().then(setArticles, () => setFailed(true));
  }, []);
  useEffect(() => {
    load();
    startingNewsLevel().then(setLevel);
    loadNewsInterests().then(setProfile);
  }, [load]);
  const ordered = useMemo(() => orderForLearner(articles ?? [], profile), [articles, profile]);

  function pick(l: NewsLevel) {
    setLevel(l);
    rememberNewsLevel(l);
  }

  if (!articles) {
    return (
      <View style={[s.container, s.center]}>
        {failed ? (
          <Pressable onPress={load}>
            <Text style={s.subtitle}>Couldn't load the news. Tap to try again.</Text>
          </Pressable>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.subtitle}>
        Real stories from Spanish-language news, new every couple of days, each at your level. Tap any word to hear it.
      </Text>
      <NewsLevelTabs level={level} onChange={pick} />
      <Text style={s.note}>{NEWS_LEVEL_NOTE[level]}</Text>
      {ordered.length === 0 && <Text style={s.subtitle}>The first stories are on their way. Check back in a few hours.</Text>}
      <View style={s.cards}>
        {ordered.map(({ article: a, forYou }) => {
          const v = a.versions[level];
          const words = v.paragraphs.join(" ").split(/\s+/).length;
          return (
            <Pressable key={a.slug} style={s.card} onPress={() => navigation.navigate("NewsReader", { slug: a.slug, level })}>
              <View style={s.metaRow}>
                {a.topics[0] && (
                  <Text style={s.chip}>
                    {TOPIC_EMOJI[a.topics[0]]} {TOPIC_LABELS[a.topics[0]]}
                  </Text>
                )}
                {forYou && <Text style={[s.chip, s.forYou]}>For you</Text>}
                <Text style={s.date}>{newsDate(a.publishedAt)}</Text>
              </View>
              <Text style={s.title}>{v.title}</Text>
              <Text style={s.teaser} numberOfLines={3}>
                {v.paragraphs.join(" ")}
              </Text>
              <Text style={s.meta}>
                {a.credit.sourceName} · {Math.max(1, Math.round(words / 130))} min read
              </Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  center: { alignItems: "center", justifyContent: "center", padding: 24 },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 15, lineHeight: 21, color: colors.inkSoft, marginBottom: 16 },
  note: { fontSize: 13, color: colors.inkMuted, marginTop: 8, marginBottom: 16 },
  cards: { gap: 14 },
  card: { ...card, padding: 16 },
  metaRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 6, marginBottom: 8 },
  chip: { fontSize: 12, color: colors.inkSoft, borderWidth: 1, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2, overflow: "hidden" },
  forYou: { backgroundColor: colors.seaSoft, color: colors.sea, fontWeight: "700", borderColor: colors.seaSoft },
  date: { marginLeft: "auto", fontSize: 12, color: colors.inkMuted },
  title: { fontFamily: fonts.display, fontSize: 18, color: colors.ink, marginBottom: 6 },
  teaser: { fontSize: 14, lineHeight: 20, color: colors.inkSoft, marginBottom: 8 },
  meta: { fontSize: 12, color: colors.inkMuted },
});
