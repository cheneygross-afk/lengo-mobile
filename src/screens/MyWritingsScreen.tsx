import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { supabase } from "@/lib/supabase/client";
import { FeedbackView } from "@/components/SkillExercises";
import type { WritingFeedback } from "@/lib/writingFeedback";
import type { SpeechLang } from "@/lib/speech";
import { cardShadow, colors, fonts } from "@/ui/theme";

// My writings (mirror of the website's /my-writings): everything the
// learner has sent for writing feedback, on the website or in the app,
// with the prompt it answered and the date, newest first. The website's
// /api/writing-feedback saves each piece in Supabase table
// writing_submissions; this screen reads the learner's own rows for one
// course. Tap a piece to see all of it with its feedback. Needs a login.

type Props = NativeStackScreenProps<AppStackParamList, "MyWritings">;

const SPEECH: Record<string, SpeechLang> = {
  es: "es-ES", fr: "fr-FR", de: "de-DE", pt: "pt-BR", ja: "ja-JP", zh: "zh-CN", ko: "ko-KR", it: "it-IT", en: "en-US",
};

type Row = {
  id: string;
  prompt: string;
  body: string;
  feedback: WritingFeedback | null;
  source_title: string;
  source_path: string;
  created_at: string;
};

function when(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function from(r: Row): string {
  if (/\/writing(\/|$)/.test(r.source_path)) return "Writing practice";
  return r.source_title || (r.source_path ? "Lesson" : "App");
}

const plain = (text: string) => text.replace(/\{([^|}]+)\|[^}]*\}/g, "$1");

export default function MyWritingsScreen({ route }: Props) {
  const course = route.params?.course ?? "es";
  const lang = SPEECH[course] ?? "es-ES";
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  const [confirming, setConfirming] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      void (async () => {
        const { data: session } = await supabase.auth.getSession();
        const userId = session.session?.user.id;
        if (!userId) {
          if (!cancelled) {
            setSignedIn(false);
            setLoading(false);
          }
          return;
        }
        const { data } = await supabase
          .from("writing_submissions")
          .select("id, prompt, body, feedback, source_title, source_path, created_at")
          .eq("user_id", userId)
          .eq("course", course)
          .order("created_at", { ascending: false })
          .limit(300);
        if (cancelled) return;
        setSignedIn(true);
        setRows((data ?? []) as Row[]);
        setLoading(false);
      })();
      return () => {
        cancelled = true;
      };
    }, [course])
  );

  async function remove(id: string) {
    await supabase.from("writing_submissions").delete().eq("id", id);
    setRows((prev) => prev.filter((r) => r.id !== id));
    setConfirming(null);
  }

  if (loading) {
    return (
      <View style={s.center}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.intro}>
        Everything you&apos;ve written, in the app or on the website, with the prompt it answered. Newest first. Tap one to
        read it again with its feedback.
      </Text>
      {!signedIn ? (
        <View style={s.card}>
          <Text style={s.empty}>Log in with a free account to keep everything you write here.</Text>
        </View>
      ) : rows.length === 0 ? (
        <View style={s.card}>
          <Text style={s.empty}>Nothing here yet. Write something and send it for feedback. It shows up here right away.</Text>
        </View>
      ) : (
        rows.map((r) => {
          const isOpen = open === r.id;
          return (
            <View key={r.id} style={s.card}>
              <Pressable onPress={() => setOpen(isOpen ? null : r.id)} accessibilityRole="button">
                <Text style={s.meta}>
                  {when(r.created_at)} · {from(r)}
                </Text>
                <Text style={s.prompt}>{plain(r.prompt)}</Text>
                {!isOpen && (
                  <Text style={s.body} numberOfLines={3}>
                    {r.body}
                  </Text>
                )}
                {!isOpen && r.feedback && (
                  <Text style={s.stars}>
                    {"★".repeat(r.feedback.score)}
                    <Text style={{ color: "#2A151333" }}>{"★".repeat(5 - r.feedback.score)}</Text>
                  </Text>
                )}
              </Pressable>
              {isOpen && (
                <View style={{ marginTop: 10 }}>
                  <Text style={s.body} selectable>
                    {r.body}
                  </Text>
                  <View style={{ marginTop: 12 }}>
                    {r.feedback ? (
                      <FeedbackView feedback={r.feedback} lang={lang} green />
                    ) : (
                      <Text style={s.metaPlain}>No feedback was given for this one.</Text>
                    )}
                  </View>
                  <View style={s.actions}>
                    {confirming === r.id ? (
                      <View style={{ flexDirection: "row", gap: 14 }}>
                        <Pressable hitSlop={8} onPress={() => remove(r.id)}>
                          <Text style={s.deleteNow}>Delete</Text>
                        </Pressable>
                        <Pressable hitSlop={8} onPress={() => setConfirming(null)}>
                          <Text style={s.keep}>Keep</Text>
                        </Pressable>
                      </View>
                    ) : (
                      <Pressable hitSlop={8} onPress={() => setConfirming(r.id)}>
                        <Text style={s.keep}>Delete</Text>
                      </Pressable>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 18, paddingBottom: 48 },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.background },
  intro: { fontSize: 15, lineHeight: 22, color: colors.inkSoft, marginBottom: 18 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    ...cardShadow,
  },
  empty: { fontSize: 15, lineHeight: 22, color: colors.inkSoft },
  meta: { fontSize: 12, color: colors.inkMuted, textTransform: "uppercase", letterSpacing: 0.5 },
  metaPlain: { fontSize: 13, color: colors.inkMuted },
  prompt: { fontFamily: fonts.display, fontSize: 16, color: colors.ink, marginTop: 6 },
  body: { fontSize: 15, lineHeight: 22, color: colors.ink, marginTop: 8 },
  stars: { fontSize: 15, color: colors.ink, marginTop: 8 },
  actions: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginTop: 12 },
  deleteNow: { fontSize: 14, fontWeight: "700", color: "#B91C1C" },
  keep: { fontSize: 14, color: colors.inkMuted },
});
