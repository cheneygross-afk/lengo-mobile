import { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Linking } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors, fonts } from "@/ui/theme";
import type { AppStackParamList } from "@/navigation/types";
import TapText from "@/components/TapText";
import ExerciseBlock from "@/components/ExerciseBlock";
import { toExercises } from "@/lib/stories/types";
import { SPANISH_LANG } from "@/lib/speech";
import { cachedArticle, fetchNews, newsChanges, newsDate, NEWS_LEVEL_NOTE, type AppNewsArticle } from "@/lib/news/api";
import { rememberNewsLevel } from "@/lib/news/level";
import type { NewsLevel } from "@/lib/news/types";
import NewsLevelTabs from "@/components/NewsLevelTabs";

type Props = NativeStackScreenProps<AppStackParamList, "NewsReader">;

// One news article at the level picked in the tabs: the credit the
// licence asks for, the text (every word taps to play), then questions.
export default function NewsReaderScreen({ route }: Props) {
  const { slug } = route.params;
  const [article, setArticle] = useState<AppNewsArticle | null>(cachedArticle(slug) ?? null);
  const [missing, setMissing] = useState(false);
  const [level, setLevel] = useState<NewsLevel>(route.params.level ?? "a1");
  useEffect(() => {
    if (article) return;
    fetchNews().then(
      (all) => {
        const a = all.find((x) => x.slug === slug);
        if (a) setArticle(a);
        else setMissing(true);
      },
      () => setMissing(true),
    );
  }, [article, slug]);
  const v = article?.versions[level];
  const exercises = useMemo(() => (v ? toExercises(v.questions) : []), [v]);

  if (!article || !v) {
    return (
      <View style={[s.container, s.center]}>
        {missing ? <Text style={s.note}>This story is no longer up. Go back for the latest news.</Text> : <ActivityIndicator />}
      </View>
    );
  }
  function pick(l: NewsLevel) {
    setLevel(l);
    rememberNewsLevel(l);
  }
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <NewsLevelTabs level={level} onChange={pick} />
      <Text style={s.note}>{NEWS_LEVEL_NOTE[level]}</Text>
      <Text style={s.credit}>
        From{" "}
        <Text style={s.link} onPress={() => Linking.openURL(article.url)}>
          {article.versions.orig.title}
        </Text>{" "}
        by {article.author}, first published by {article.credit.sourceName} on {newsDate(article.publishedAt)}, under{" "}
        <Text style={s.link} onPress={() => Linking.openURL(article.credit.licenceUrl)}>
          {article.credit.licenceName}
        </Text>
        . {newsChanges(level)}
      </Text>
      <TapText text={v.title} lang={SPANISH_LANG} mode="target" style={s.title} />
      {v.paragraphs.map((p, i) => (
        <View key={`${level}-${i}`} style={s.para}>
          <TapText text={p} lang={SPANISH_LANG} mode="target" style={s.body} />
        </View>
      ))}
      <Text style={s.section}>{level === "b1" || level === "orig" ? "¿Lo entendiste?" : "Check your understanding"}</Text>
      <View style={s.questions} key={level}>
        {exercises.map((exercise, i) => (
          <ExerciseBlock key={i} exercise={exercise} index={i} lang={SPANISH_LANG} />
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  center: { alignItems: "center", justifyContent: "center", padding: 24 },
  content: { padding: 20, paddingBottom: 48 },
  note: { fontSize: 13, color: colors.inkMuted, marginTop: 8, marginBottom: 14 },
  credit: { fontSize: 12, lineHeight: 18, color: colors.inkSoft, backgroundColor: colors.card, borderRadius: 10, padding: 12, marginBottom: 18, borderWidth: 1, borderColor: colors.border },
  link: { textDecorationLine: "underline" },
  title: { fontFamily: fonts.display, fontSize: 24, lineHeight: 30, color: colors.ink, marginBottom: 14 },
  para: { marginBottom: 12 },
  body: { fontSize: 18, lineHeight: 27, color: colors.ink },
  section: { fontSize: 13, fontWeight: "700", letterSpacing: 0.6, textTransform: "uppercase", color: colors.inkMuted, marginTop: 20, marginBottom: 10 },
  questions: { gap: 12 },
});
