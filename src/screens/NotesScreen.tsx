import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { deleteNotepad, loadAllNotepads, notepadKey, type LessonNotepad } from "@/lib/lessonNotepad";
import type { CourseId } from "@/lib/courses";
import { cardShadow, colors, fonts } from "@/ui/theme";

// The Notes screen (mirror of the website's /notes): every lesson
// notepad, grouped by course, with the lesson it came from and a way back
// to it. The app only offers Spanish for now (HomeScreen APP_LANGUAGES),
// so only those courses are listed; notes from other courses stay on the
// website's Notes page.
const APP_COURSES: CourseId[] = ["es"];
const COURSE_NAMES: Record<CourseId, string> = {
  es: "Spanish",
  zh: "Chinese",
  fr: "French",
  de: "German",
  pt: "Portuguese",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  en: "English",
};

type Props = NativeStackScreenProps<AppStackParamList, "Notes">;

function when(ms: number): string {
  if (!ms) return "";
  return new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export default function NotesScreen({ navigation, route }: Props) {
  const fromLesson = route.params?.fromLesson;
  const isFrom = (n: LessonNotepad) =>
    !!fromLesson && n.lessonSlug === fromLesson.slug && n.levelPath === fromLesson.levelPath;
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [notes, setNotes] = useState<LessonNotepad[]>([]);
  const [confirming, setConfirming] = useState<string | null>(null);

  // Reload whenever the screen comes back into view (e.g. after editing a
  // note inside a lesson opened from here).
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      loadAllNotepads().then(({ userId: id, notes: all }) => {
        if (cancelled) return;
        setUserId(id);
        setNotes(all.filter((n) => APP_COURSES.includes(n.course)));
        setLoading(false);
      });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  async function remove(n: LessonNotepad) {
    await deleteNotepad(userId, n.levelPath, n.lessonSlug);
    const key = notepadKey(n.levelPath, n.lessonSlug);
    setNotes((prev) => prev.filter((x) => notepadKey(x.levelPath, x.lessonSlug) !== key));
    setConfirming(null);
  }

  if (loading) {
    return (
      <View style={s.center}>
        <ActivityIndicator />
      </View>
    );
  }

  const courses = APP_COURSES.filter((c) => notes.some((n) => n.course === c));

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      {fromLesson && (
        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          style={s.backBtn}
          hitSlop={6}
        >
          <Text style={s.backText}>← Back to lesson</Text>
        </Pressable>
      )}
      <Text style={s.intro}>
        Everything you&apos;ve written in a lesson&apos;s notepad. In any lesson, tap 📝 Notes at the top to add more.
      </Text>

      {notes.length === 0 ? (
        <View style={s.card}>
          <Text style={s.empty}>
            No notes yet. Open a lesson, tap 📝 Notes at the top and start typing. Your notes stay with you through the
            lesson, save on their own and show up here.
          </Text>
        </View>
      ) : (
        courses.map((c) => {
          const list = notes.filter((n) => n.course === c);
          return (
            <View key={c} style={{ marginBottom: 24 }}>
              <Text style={s.courseTitle}>
                {COURSE_NAMES[c]} <Text style={s.count}>· {list.length} {list.length === 1 ? "lesson" : "lessons"}</Text>
              </Text>
              {list.map((n) => {
                const key = notepadKey(n.levelPath, n.lessonSlug);
                // The lesson this was opened from is still open underneath:
                // go back to it rather than starting it again.
                const here = isFrom(n);
                const open = () =>
                  here
                    ? navigation.goBack()
                    : navigation.navigate("LessonRunner", { slug: n.lessonSlug, levelPath: n.levelPath });
                return (
                  <View key={key} style={s.card}>
                    <Pressable onPress={open} accessibilityRole="link">
                      <Text style={s.lessonTitle}>{n.lessonTitle || n.lessonSlug}</Text>
                      <Text style={s.meta}>
                        {[n.levelLabel, when(n.updatedAt)].filter(Boolean).join(" · ")}
                      </Text>
                    </Pressable>
                    <Text style={s.body} selectable>
                      {n.body}
                    </Text>
                    <View style={s.actions}>
                      <Pressable hitSlop={8} onPress={open} accessibilityRole="link">
                        <Text style={s.openLink}>{here ? "Back to lesson →" : "Open lesson →"}</Text>
                      </Pressable>
                      {confirming === key ? (
                        <View style={{ flexDirection: "row", gap: 14 }}>
                          <Pressable hitSlop={8} onPress={() => remove(n)}>
                            <Text style={s.deleteNow}>Delete</Text>
                          </Pressable>
                          <Pressable hitSlop={8} onPress={() => setConfirming(null)}>
                            <Text style={s.keep}>Keep</Text>
                          </Pressable>
                        </View>
                      ) : (
                        <Pressable hitSlop={8} onPress={() => setConfirming(key)}>
                          <Text style={s.keep}>Delete</Text>
                        </Pressable>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  backBtn: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#2A151322",
    backgroundColor: colors.card,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginBottom: 14,
  },
  backText: { fontSize: 15, fontWeight: "700", color: colors.ink },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 18, paddingBottom: 48 },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.background },
  intro: { fontSize: 15, lineHeight: 22, color: colors.inkSoft, marginBottom: 18 },
  courseTitle: { fontFamily: fonts.display, fontSize: 22, color: colors.ink, marginBottom: 10 },
  count: { fontFamily: undefined, fontSize: 14, color: colors.inkMuted },
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
  lessonTitle: { fontSize: 16, fontWeight: "700", color: colors.ink },
  meta: { fontSize: 12, color: colors.inkMuted, marginTop: 2 },
  body: { fontSize: 15, lineHeight: 22, color: colors.ink, marginTop: 10 },
  actions: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12 },
  openLink: { fontSize: 14, fontWeight: "700", color: colors.foreground },
  deleteNow: { fontSize: 14, fontWeight: "700", color: "#B91C1C" },
  keep: { fontSize: 14, color: colors.inkMuted },
});
