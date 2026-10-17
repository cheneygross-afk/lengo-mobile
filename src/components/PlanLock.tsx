import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { openPremium } from "@/lib/premium";
import { courseName } from "@/lib/courses";
import type { CourseId } from "@/lib/courses";

// Shown in place of a lesson or study tool the learner's plan doesn't
// open: what it is, that it's part of the paid plans, and a button out to
// the website's pricing page (see lib/premium.ts). The plan itself is
// bought there; AuthContext reloads it when the app comes back.
export default function PlanLock({
  title,
  course,
  kind = "lesson",
}: {
  title?: string;
  course: CourseId;
  kind?: "lesson" | "tool";
}) {
  const [opening, setOpening] = useState(false);
  const language = courseName(course);
  return (
    <View style={s.wrap}>
      <Text style={s.lock}>🔒</Text>
      {title ? <Text style={s.title}>{title}</Text> : null}
      <Text style={s.body}>
        {kind === "lesson"
          ? `This lesson is part of Focused Lessons for ${language} (or All Access, for every language).`
          : `This study tool comes with Focused Lessons for ${language} (or All Access, for every language).`}
      </Text>
      <Pressable
        style={[s.btn, opening && s.btnDisabled]}
        disabled={opening}
        onPress={async () => {
          setOpening(true);
          await openPremium();
          setOpening(false);
        }}
      >
        <Text style={s.btnText}>{opening ? "Opening…" : "See plans"}</Text>
      </Pressable>
      <Text style={s.note}>Opens deependspanish.com in your browser, already signed in.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: "#FAF7F2" },
  lock: { fontSize: 32, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: "700", color: "#2A1513", textAlign: "center", marginBottom: 8 },
  body: { fontSize: 15, color: "#333", textAlign: "center", lineHeight: 22, marginBottom: 20, maxWidth: 360 },
  btn: { backgroundColor: "#8B0000", borderRadius: 999, paddingVertical: 14, paddingHorizontal: 28 },
  btnDisabled: { opacity: 0.6 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  note: { marginTop: 10, fontSize: 12, color: "#666", textAlign: "center" },
});
