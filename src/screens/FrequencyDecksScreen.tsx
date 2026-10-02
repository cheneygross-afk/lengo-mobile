import { useCallback, useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { FREQUENCY_DECKS, deckFlashcards, deckLessonSlug, deckProgress, loadDeck, type DeckInfo } from "@/lib/decks";
import { loadFlashcards, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";
import { loadPrefsLocal } from "@/lib/learnerPrefs";

type Props = NativeStackScreenProps<AppStackParamList, "FrequencyDecks">;

const BRAND = "#7A1F1F";

// Mobile port of the "Frequency decks" panel on the website's Flashcards
// page: the 6,000 most frequent Spanish words (src/lib/decks, synced from
// the website), added to the learner's flashcards a deck at a time. They
// are ordinary cards, so the new-cards-per-day setting still decides how
// many come up each day, most frequent first.
export default function FrequencyDecksScreen({ navigation }: Props) {
  const [cards, setCards] = useState<FlashcardEntry[]>([]);
  const [busy, setBusy] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const map = await loadFlashcards();
    setCards(Object.values(map).filter((c) => !c.levelPath.startsWith("ja")));
  }, []);

  useFocusEffect(
    useCallback(() => {
      void refresh();
    }, [refresh])
  );

  async function addDeck(deck: DeckInfo) {
    setBusy(deck.id);
    setMessage(null);
    try {
      const deckCards = await loadDeck(deck.id);
      const map = await loadFlashcards();
      const spanish = Object.values(map).filter((c) => !c.levelPath.startsWith("ja"));
      const added = deckFlashcards(deck, deckCards, spanish);
      for (const card of added) map[card.id] = card;
      await saveFlashcards(map);
      await refresh();
      const skipped = deckCards.length - added.length;
      const perDay = (await loadPrefsLocal()).newCardsPerDay;
      setMessage(
        `Added ${added.length.toLocaleString()} cards from ${deck.title}` +
          (skipped > 0 ? ` (${skipped} you already had were skipped)` : "") +
          (perDay === "unlimited" ? "." : `. New cards come up ${perDay} a day, most frequent first.`)
      );
    } finally {
      setBusy(null);
    }
  }

  async function removeDeck(deck: DeckInfo) {
    const slug = deckLessonSlug(deck.id);
    const map = await loadFlashcards();
    let removed = 0;
    for (const [id, card] of Object.entries(map)) {
      // Cards already reviewed stay: they carry the learner's progress.
      if (card.lessonSlug === slug && !card.reviewCount) {
        delete map[id];
        removed++;
      }
    }
    await saveFlashcards(map);
    await refresh();
    setMessage(`Removed ${removed.toLocaleString()} unreviewed cards from ${deck.title}.`);
  }

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.intro}>
        The 6,000 most common words of spoken Spanish, by level, each with an example sentence. Add a deck and its
        words join your flashcard reviews.
      </Text>
      {FREQUENCY_DECKS.map((deck) => {
        const have = deckProgress(deck, cards);
        const size = deck.to - deck.from + 1;
        return (
          <View key={deck.id} style={s.deck}>
            <View style={s.titleRow}>
              <Text style={s.badge}>{deck.level}</Text>
              <Text style={s.title}>{deck.title}</Text>
            </View>
            <Text style={s.size}>{size.toLocaleString()} words</Text>
            <Text style={s.description}>{deck.description}</Text>
            {have > 0 ? <Text style={s.have}>{have.toLocaleString()} cards from this deck in your flashcards</Text> : null}
            <View style={s.buttons}>
              {have > 0 ? (
                <Pressable style={s.secondary} onPress={() => void removeDeck(deck)} disabled={busy !== null}>
                  <Text style={s.secondaryText}>Remove</Text>
                </Pressable>
              ) : null}
              <Pressable style={[s.primary, busy !== null && s.disabled]} onPress={() => void addDeck(deck)} disabled={busy !== null}>
                {busy === deck.id ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={s.primaryText}>{have > 0 ? "Add missing" : "Add deck"}</Text>
                )}
              </Pressable>
            </View>
          </View>
        );
      })}
      {message ? <Text style={s.message}>{message}</Text> : null}
      <Pressable style={s.link} onPress={() => navigation.navigate("Flashcards", { lang: "es" })}>
        <Text style={s.linkText}>Go to flashcard review ›</Text>
      </Pressable>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, gap: 14, paddingBottom: 40 },
  intro: { fontSize: 14, color: "#00000099", lineHeight: 20 },
  deck: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#00000014", padding: 16, gap: 4 },
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
  size: { fontSize: 13, color: "#00000066" },
  description: { fontSize: 14, color: "#000000aa", lineHeight: 20 },
  have: { fontSize: 12, color: "#00000077", marginTop: 2 },
  buttons: { flexDirection: "row", justifyContent: "flex-end", gap: 10, marginTop: 8 },
  primary: { backgroundColor: BRAND, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 16, minWidth: 110, alignItems: "center" },
  primaryText: { color: "#fff", fontWeight: "700" },
  disabled: { opacity: 0.5 },
  secondary: { borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 },
  secondaryText: { color: "#00000088", fontWeight: "600" },
  message: { fontSize: 14, color: "#000000cc", lineHeight: 20 },
  link: { alignSelf: "center", padding: 10 },
  linkText: { color: BRAND, fontWeight: "700" },
});
