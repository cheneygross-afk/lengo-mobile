// A one-line "this counted" note for the end of a story, video quiz,
// exam paper or review: the minutes added to today's goal and the
// streak, with "+1 day" when this is what counted today. Mirrors the
// website's components/study/StudyCreditNote.
import { Text, StyleSheet, type StyleProp, type TextStyle } from "react-native";
import { formatMinutes } from "@/lib/duration";
import type { CreditResult } from "@/lib/studyDays";

export function creditNoteText(result: CreditResult): string {
  const parts: string[] = [];
  if (result.minutesAdded > 0) {
    parts.push(`+${formatMinutes(Math.max(1, Math.round(result.minutesAdded)))} toward today's goal`);
  }
  const streak = result.streak.current;
  if (streak > 0) parts.push(`🔥 ${streak}-day streak${result.dayJustCounted ? " (+1 day)" : ""}`);
  return parts.join(" · ");
}

export default function StudyCreditNote({ result, style }: { result: CreditResult | null; style?: StyleProp<TextStyle> }) {
  if (!result) return null;
  const text = creditNoteText(result);
  if (!text) return null;
  return <Text style={[s.note, style]}>{text}</Text>;
}

const s = StyleSheet.create({
  note: { fontSize: 13, color: "#000000a0", marginTop: 6 },
});
