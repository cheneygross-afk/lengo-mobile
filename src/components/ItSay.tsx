import type { ReactNode } from "react";
import { Text, Pressable, StyleSheet, type StyleProp, type TextStyle } from "react-native";
import { ITALIAN_LANG, speak } from "@/lib/speech";

// The app's port of the website's ItSay (components/it-tools/ItToolSay.tsx)
// for the Italian course's reference screens (Articles & Prepositions,
// Pronunciation & Spelling): an Italian word or phrase, nested in a Text,
// that is read aloud whole in the Italian voice when tapped. `text` is what
// is spoken, `children` what is shown (the text itself by default).
export function ItSay({ text, children, style }: { text: string; children?: ReactNode; style?: StyleProp<TextStyle> }) {
  return (
    <Text style={[s.say, style]} onPress={() => speak(text, ITALIAN_LANG)} accessibilityRole="button" accessibilityHint="Plays it in Italian">
      {children ?? text}
    </Text>
  );
}

/** English with Italian in "double quotes": the quoted parts are tappable. */
export function ItMixed({ text, style }: { text: string; style?: StyleProp<TextStyle> }) {
  const parts = text.split(/"([^"]+)"/);
  return (
    <Text style={style}>
      {parts.map((p, i) => (i % 2 ? <ItSay key={i} text={p} /> : <Text key={i}>{p}</Text>))}
    </Text>
  );
}

/** A small speaker button that plays a word (the website's SayButton). */
export function ItSayButton({ text }: { text: string }) {
  return (
    <Pressable onPress={() => speak(text, ITALIAN_LANG)} hitSlop={8} accessibilityRole="button" accessibilityLabel={`Hear ${text}`}>
      <Text style={s.speaker}>🔊</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  say: { color: "#2A1513", textDecorationLine: "underline", textDecorationStyle: "dotted", textDecorationColor: "#2A151366" },
  speaker: { fontSize: 14, color: "#8B0000" },
});
