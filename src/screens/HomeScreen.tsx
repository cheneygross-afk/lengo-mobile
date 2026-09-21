import { View, Text, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { useAuth } from "@/lib/auth/AuthContext";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const { session, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deep End</Text>
      <Text style={styles.subtitle}>{session?.user.email}</Text>

      <Pressable style={styles.card} onPress={() => navigation.navigate("LessonList")}>
        <Text style={styles.cardTitle}>Lessons</Text>
        <Text style={styles.cardBody}>Structured lessons, A1 and up.</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={() => navigation.navigate("Flashcards")}>
        <Text style={styles.cardTitle}>Flashcards</Text>
        <Text style={styles.cardBody}>Review vocabulary due today.</Text>
      </Pressable>

      <Pressable style={styles.signOut} onPress={signOut}>
        <Text style={styles.signOutText}>Log out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1", padding: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: "800", color: "#7A1F1F", marginTop: 12 },
  subtitle: { fontSize: 14, color: "#00000099", marginBottom: 8 },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
  },
  cardTitle: { fontSize: 18, fontWeight: "700", color: "#000", marginBottom: 4 },
  cardBody: { fontSize: 14, color: "#00000099" },
  signOut: { marginTop: "auto", alignItems: "center", paddingVertical: 12 },
  signOutText: { color: "#00000066", fontSize: 14, textDecorationLine: "underline" },
});
