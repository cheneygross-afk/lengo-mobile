import { useLayoutEffect } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useCourseExams } from "@/components/exams/useCourseExams";
import { formatMinutes } from "@/lib/exams/scoring";

type Props = NativeStackScreenProps<AppStackParamList, "Exams">;

const BRAND = "#7A1F1F";

// Mobile port of the website's /exams page: one full-length DELE practice
// exam per level (src/lib/exams, synced from the website). With course
// "fr", the French course's DELF/DALF exams (src/lib/exams/fr), as on the
// website's /lessons/fr/tools/delf.
export default function ExamsScreen({ navigation, route }: Props) {
  const course = route.params?.course ?? "es";
  const exams = useCourseExams(course);
  useLayoutEffect(() => {
    if (course === "fr") navigation.setOptions({ title: "DELF & DALF practice" });
  }, [navigation, course]);
  if (!exams) {
    return (
      <View style={[s.screen, s.loading]}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.intro}>
        {course === "fr"
          ? "Practice exams in the format of the DELF and DALF, A1 to C2: listening with audio, reading, writing with feedback and speaking with timers and model answers, marked the way the real exam is."
          : "Full-length practice exams modelled on the DELE: reading, listening with audio, writing with feedback and speaking with timers and model answers, marked the way the real exam is."}
      </Text>
      {exams.map((exam) => {
        const total = exam.papers.reduce((m, p) => m + p.minutes, 0);
        return (
          <Pressable
            key={exam.slug}
            style={s.card}
            onPress={() => navigation.navigate("Exam", course === "fr" ? { slug: exam.slug, course } : { slug: exam.slug })}
          >
            <View style={s.titleRow}>
              <Text style={s.badge}>{exam.level}</Text>
              <Text style={s.title}>{exam.title}</Text>
            </View>
            <Text style={s.meta}>
              {course === "fr" ? exam.papers.length : 4} papers · about {formatMinutes(total)}
            </Text>
            <Text style={s.description}>{exam.description}</Text>
          </Pressable>
        );
      })}
      <Text style={s.note}>
        {course === "fr"
          ? "DELF and DALF are diplomas of the French Ministry of Education, administered by France Éducation international. These practice exams are written by Deep End and are not official exam material."
          : "DELE is a trademark of the Instituto Cervantes. These practice exams are written by Deep End and are not official exam material."}
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  loading: { alignItems: "center", justifyContent: "center" },
  content: { padding: 20, gap: 14, paddingBottom: 40 },
  intro: { fontSize: 14, color: "#00000099", lineHeight: 20 },
  card: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#00000014", padding: 16, gap: 4 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  badge: {
    fontSize: 12,
    fontWeight: "700",
    color: BRAND,
    backgroundColor: "#7A1F1F14",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  title: { fontSize: 17, fontWeight: "700", color: "#000", flexShrink: 1 },
  meta: { fontSize: 13, color: "#00000066" },
  description: { fontSize: 14, color: "#000000aa", lineHeight: 20 },
  note: { fontSize: 12, color: "#00000066", lineHeight: 17 },
});
