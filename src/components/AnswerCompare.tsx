import { Text, View, StyleSheet } from "react-native";
import { speak, type SpeechLang } from "@/lib/speech";

// After a typed or built answer is checked: what the learner gave, next to
// the right answer, so they can see exactly where it went wrong (and,
// when a different wording was accepted, what they wrote that passed).
// The website's src/components/lessons/AnswerCompare.tsx does the same.

/** The two answers are the same apart from case, spacing and punctuation. */
export function sameAnswer(a: string, b: string): boolean {
  const norm = (s: string) =>
    s
      .replace(/\{([^|}]+)\|[^}]*\}/g, "$1")
      .normalize("NFC")
      .toLowerCase()
      .replace(/[\s.,;:!?¿¡"'“”‘’«»()\-–—。、，！？：；「」『』（）]/g, "");
  return norm(a) === norm(b);
}

/** "Your answer: …" (red when marked wrong, shown only when it differs
 * from the correct one) and "Correct answer: …" (shown when wrong, or
 * always with `alwaysShowCorrect`). */
export function AnswerCompare({
  given,
  expected,
  correct,
  lang,
  alwaysShowCorrect = false,
  correctLabel = "Correct answer:",
}: {
  given: string;
  expected: string;
  correct: boolean;
  lang: SpeechLang;
  alwaysShowCorrect?: boolean;
  correctLabel?: string;
}) {
  const showGiven = given.trim() !== "" && !sameAnswer(given, expected);
  const showCorrect = !correct || alwaysShowCorrect;
  if (!showGiven && !showCorrect) return null;
  return (
    <View style={s.box}>
      {showGiven && (
        <Text style={s.line}>
          <Text style={s.label}>Your answer: </Text>
          <Text style={[s.value, !correct && s.wrong]}>{given}</Text>
        </Text>
      )}
      {showCorrect && (
        <Text style={s.line}>
          <Text style={s.label}>{correctLabel} </Text>
          <Text style={[s.value, s.right]} onPress={() => speak(expected, lang)}>
            {expected}
          </Text>
        </Text>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  box: { marginTop: 8, gap: 4 },
  line: { fontSize: 14, color: "#000" },
  label: { color: "#00000099" },
  value: { fontWeight: "600" },
  wrong: { color: "#b91c1c" },
  right: { color: "#15803d" },
});
