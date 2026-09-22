import { View, Text, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useAuth } from "@/lib/auth/AuthContext";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const { session, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.centerSection}>
        <View style={styles.heading}>
          <Text style={styles.title}>Deep End</Text>
          <Text style={styles.subtitle}>{session?.user.email}</Text>
        </View>

        <View style={styles.cards}>
          <Pressable style={styles.card} onPress={() => navigation.navigate("LessonList")}>
            <Text style={styles.cardTitle}>Lessons</Text>
            <Text style={styles.cardBody}>Structured lessons, A1 and up.</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => navigation.navigate("Flashcards")}>
            <Text style={styles.cardTitle}>Flashcards</Text>
            <Text style={styles.cardBody}>Review vocabulary due today.</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => navigation.navigate("ReadingsList")}>
            <Text style={styles.cardTitle}>Readings</Text>
            <Text style={styles.cardBody}>Free short stories and book picks -- any length.</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.signOut} onPress={signOut}>
        <Text style={styles.signOutText}>Log out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1", paddingHorizontal: 24, paddingBottom: 12 },
  // Title + subtitle + the three access cards are one block, centered in
  // the space above the sign-out link -- rather than pinned to the top,
  // which read as "Deep End" sitting uncomfortably high with the cards
  // crowded right underneath it.
  centerSection: { flex: 1, justifyContent: "center", gap: 36 },
  heading: { alignItems: "center" },
  title: { fontSize: 30, fontWeight: "800", color: "#7A1F1F" },
  subtitle: { fontSize: 14, color: "#00000099", marginTop: 6 },
  cards: { gap: 16 },
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
