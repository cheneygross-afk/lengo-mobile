import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { loadFlashcards, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";
import { getDueCards, gradeCard, type ReviewGrade } from "@/lib/srs";

export default function FlashcardsScreen() {
  const [all, setAll] = useState<Record<string, FlashcardEntry>>({});
  const [due, setDue] = useState<FlashcardEntry[]>([]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      setLoading(true);
      loadFlashcards().then((map) => {
        if (cancelled) return;
        setAll(map);
        setDue(getDueCards(Object.values(map)));
        setIndex(0);
        setRevealed(false);
        setLoading(false);
      });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  async function grade(g: ReviewGrade) {
    const card = due[index];
    if (!card) return;
    const updated = gradeCard(card, g);
    const nextAll = { ...all, [updated.id]: updated };
    setAll(nextAll);
    await saveFlashcards(nextAll);
    setRevealed(false);
    setIndex((i) => i + 1);
  }

  if (loading) {
    return (
      <View style={s.center}>
        <Text>Loading…</Text>
      </View>
    );
  }

  const card = due[index];

  if (!card) {
    return (
      <View style={s.center}>
        <Text style={s.emptyTitle}>Nothing due right now</Text>
        <Text style={s.emptyBody}>
          {Object.keys(all).length === 0
            ? "Finish a lesson to start building your review deck."
            : "Come back later, or finish another lesson to add more cards."}
        </Text>
      </View>
    );
  }

  return (
    <View style={s.container}>
      <Text style={s.progress}>
        {index + 1} of {due.length} due
      </Text>
      <Pressable style={s.card} onPress={() => setRevealed((r) => !r)}>
        <Text style={s.es}>{card.es}</Text>
        {revealed ? (
          <>
            <View style={s.divider} />
            <Text style={s.en}>{card.en}</Text>
            {card.pos ? <Text style={s.pos}>{card.pos}</Text> : null}
          </>
        ) : (
          <Text style={s.tapHint}>Tap to reveal</Text>
        )}
      </Pressable>

      {revealed && (
        <View style={s.gradeRow}>
          <GradeButton label="Again" color="#dc2626" onPress={() => grade("again")} />
          <GradeButton label="Hard" color="#d97706" onPress={() => grade("hard")} />
          <GradeButton label="Good" color="#16a34a" onPress={() => grade("good")} />
          <GradeButton label="Easy" color="#2563eb" onPress={() => grade("easy")} />
        </View>
      )}
    </View>
  );
}

function GradeButton({ label, color, onPress }: { label: string; color: string; onPress: () => void }) {
  return (
    <Pressable style={[s.gradeButton, { borderColor: color }]} onPress={onPress}>
      <Text style={[s.gradeButtonText, { color }]}>{label}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1", padding: 20, justifyContent: "center", gap: 20 },
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, gap: 8 },
  progress: { textAlign: "center", fontSize: 13, color: "#00000066" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#00000014",
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: "center",
    minHeight: 220,
    justifyContent: "center",
  },
  es: { fontSize: 26, fontWeight: "700", color: "#000", textAlign: "center" },
  divider: { width: 40, height: 1, backgroundColor: "#00000022", marginVertical: 16 },
  en: { fontSize: 18, color: "#000000cc", textAlign: "center" },
  pos: { fontSize: 13, color: "#00000066", marginTop: 6, fontStyle: "italic" },
  tapHint: { marginTop: 16, fontSize: 13, color: "#00000055" },
  gradeRow: { flexDirection: "row", gap: 8, justifyContent: "center" },
  gradeButton: { flex: 1, borderWidth: 1.5, borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  gradeButtonText: { fontWeight: "700", fontSize: 13 },
  emptyTitle: { fontSize: 18, fontWeight: "700", color: "#000" },
  emptyBody: { fontSize: 14, color: "#00000099", textAlign: "center" },
});
