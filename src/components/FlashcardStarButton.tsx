import { useEffect, useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useAuth } from "@/lib/auth/AuthContext";
import { buildFlashcardEntry, cardSource, loadFlashcards, makeFlashcardId, saveFlashcards } from "@/lib/flashcards/store";

type Card = { source: string; sourceTitle: string; es: string; en: string; level: string; levelPath: string };

/** "☆ Add to flashcards" (the website's FlashcardStar with a label): adds
 * the word to Flashcards, or takes it off again. Needs a (free) account. */
export default function FlashcardStarButton({ card }: { card: Card }) {
  const { session } = useAuth();
  const [on, setOn] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const id = makeFlashcardId(card.source, card.es);
  useEffect(() => {
    let cancelled = false;
    void loadFlashcards().then((all) => {
      if (!cancelled) setOn(!!all[id] && cardSource(all[id]) !== "auto");
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function tap() {
    if (!session?.user?.id) {
      setNote("Sign up free to save flashcards.");
      return;
    }
    const all = await loadFlashcards();
    const existing = all[id];
    if (existing && cardSource(existing) !== "auto") {
      delete all[id];
      setOn(false);
    } else {
      all[id] = existing
        ? { ...existing, source: "lesson" }
        : buildFlashcardEntry({ lessonSlug: card.source, lessonTitle: card.sourceTitle, es: card.es, en: card.en, level: card.level, levelPath: card.levelPath });
      setOn(true);
    }
    await saveFlashcards(all);
  }

  return (
    <>
      <Pressable onPress={() => void tap()} style={s.button} accessibilityRole="button" accessibilityState={{ selected: on }}>
        <Text style={s.text}>
          <Text style={on ? s.on : null}>{on ? "★" : "☆"}</Text> {on ? "In your flashcards" : "Add to flashcards"}
        </Text>
      </Pressable>
      {note && <Text style={s.note}>{note}</Text>}
    </>
  );
}

const s = StyleSheet.create({
  button: { alignSelf: "flex-start", marginTop: 8, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: "#2A151333" },
  text: { fontSize: 14, color: "#2A1513" },
  on: { color: "#F59E0B" },
  note: { fontSize: 12, color: "#2A1513aa", marginTop: 4 },
});
