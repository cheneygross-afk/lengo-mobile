import { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useAuth } from "@/lib/auth/AuthContext";
import TranslateBar from "@/components/TranslateBar";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

type Language = "es" | "ja";

const LANGUAGE_STORAGE_KEY = "deepend-selected-language";

export default function HomeScreen({ navigation }: Props) {
  const { session, signOut, hasJapaneseBetaAccess } = useAuth();
  const [language, setLanguage] = useState<Language>("es");

  useFocusEffect(
    useCallback(() => {
      readJSON<Language>(LANGUAGE_STORAGE_KEY, "es").then((saved) => {
        // An account without beta access (or one that's lost it) never
        // sees Japanese, even if a previous session on this device had
        // it selected.
        setLanguage(saved === "ja" && hasJapaneseBetaAccess ? "ja" : "es");
      });
    }, [hasJapaneseBetaAccess])
  );

  // Falls back to Spanish the moment access is lost mid-session too, not
  // just on next focus.
  useEffect(() => {
    if (language === "ja" && !hasJapaneseBetaAccess) setLanguage("es");
  }, [hasJapaneseBetaAccess, language]);

  function selectLanguage(next: Language) {
    setLanguage(next);
    void writeJSON(LANGUAGE_STORAGE_KEY, next);
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.centerSection}>
          <View style={styles.heading}>
            <Text style={styles.title}>Deep End</Text>
            <Text style={styles.subtitle}>{session?.user.email}</Text>
          </View>

          {hasJapaneseBetaAccess && (
            <View style={styles.langRow}>
              <LangPill label="Spanish" active={language === "es"} onPress={() => selectLanguage("es")} />
              <LangPill label="Japanese (beta)" active={language === "ja"} onPress={() => selectLanguage("ja")} />
            </View>
          )}

          <View style={styles.cards}>
            {language === "es" ? (
              <Pressable style={styles.card} onPress={() => navigation.navigate("LessonList", { moduleKey: "a1" })}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Structured lessons, A1 and up.</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.card} onPress={() => navigation.navigate("JapaneseLevels")}>
                <Text style={styles.cardTitle}>Lessons</Text>
                <Text style={styles.cardBody}>Hiragana, katakana, and A1 to B1.</Text>
              </Pressable>
            )}

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Flashcards", { lang: language })}
            >
              <Text style={styles.cardTitle}>Flashcards</Text>
              <Text style={styles.cardBody}>Review vocabulary due today.</Text>
            </Pressable>

            {/* No Japanese readings exist yet -- same as the website's own
                Japanese nav section, which has no Readings entry -- so
                this card is Spanish-only rather than linking to an empty
                screen. */}
            {language === "es" && (
              <Pressable style={styles.card} onPress={() => navigation.navigate("ReadingsList")}>
                <Text style={styles.cardTitle}>Readings</Text>
                <Text style={styles.cardBody}>Free short stories and book picks -- any length.</Text>
              </Pressable>
            )}

            <Pressable style={styles.card} onPress={() => navigation.navigate("Review")}>
              <Text style={styles.cardTitle}>Review</Text>
              <Text style={styles.cardBody}>Lessons you saved to try again.</Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.signOut} onPress={signOut}>
          <Text style={styles.signOutText}>Log out</Text>
        </Pressable>
      </View>

      {/* Only on Home (screen 3) -- not globally across the app, and not
          on the lesson player (screen 4). See components/TranslateBar. */}
      <TranslateBar />
    </KeyboardAvoidingView>
  );
}

function LangPill({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable style={[styles.langPill, active && styles.langPillActive]} onPress={onPress}>
      <Text style={[styles.langPillText, active && styles.langPillTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#FAF6F1" },
  container: { flex: 1, paddingHorizontal: 24, paddingBottom: 12 },
  // Title + subtitle + the four access cards are one block, centered in
  // the space above the sign-out link -- rather than pinned to the top,
  // which read as "Deep End" sitting uncomfortably high with the cards
  // crowded right underneath it.
  centerSection: { flex: 1, justifyContent: "center", gap: 24 },
  heading: { alignItems: "center" },
  title: { fontSize: 30, fontWeight: "800", color: "#7A1F1F" },
  subtitle: { fontSize: 14, color: "#00000099", marginTop: 6 },
  langRow: { flexDirection: "row", gap: 8, justifyContent: "center" },
  langPill: {
    borderWidth: 1.5,
    borderColor: "#7A1F1F33",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  langPillActive: { backgroundColor: "#7A1F1F", borderColor: "#7A1F1F" },
  langPillText: { fontSize: 13, fontWeight: "700", color: "#7A1F1F" },
  langPillTextActive: { color: "#fff" },
  cards: { gap: 14 },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
  },
  cardTitle: { fontSize: 18, fontWeight: "700", color: "#000", marginBottom: 4 },
  cardBody: { fontSize: 14, color: "#00000099" },
  signOut: { alignItems: "center", paddingVertical: 12 },
  signOutText: { color: "#00000066", fontSize: 14, textDecorationLine: "underline" },
});
