import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { READING_LEVELS } from "@/lib/stories/registry";

type Props = NativeStackScreenProps<AppStackParamList, "ReadingLevels">;

// Mobile port of the website's /readings index -- one card per level,
// each opening that level's ReadingsList (stories + book picks). Same
// card layout as SpanishLevelsScreen.
export default function ReadingLevelsScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>
        Free original stories with comprehension questions, plus real Spanish books for every level.
      </Text>
      <View style={styles.cards}>
        {READING_LEVELS.map((lvl) => (
          <Pressable
            key={lvl.levelPath}
            style={styles.card}
            onPress={() => navigation.navigate("ReadingsList", { levelPath: lvl.levelPath })}
          >
            <View style={styles.cardTop}>
              <Text style={styles.cardCode}>{lvl.code}</Text>
              <Text style={styles.cardName}>{lvl.name}</Text>
            </View>
            <Text style={styles.cardDescription}>{lvl.description}</Text>
            <Text style={styles.cardMeta}>
              {lvl.stories.length} stories · {lvl.readings.length} books
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 40 },
  subtitle: { fontSize: 14, color: "#00000099", marginBottom: 20 },
  cards: { gap: 14 },
  card: {
    borderWidth: 1,
    borderColor: "#00000018",
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#fff",
  },
  cardTop: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", gap: 8, marginBottom: 6 },
  cardCode: { fontSize: 13, fontWeight: "800", color: "#00000066" },
  cardName: { fontSize: 18, fontWeight: "800", color: "#7A1F1F", flexShrink: 1 },
  cardDescription: { fontSize: 14, color: "#000000cc", lineHeight: 19, marginBottom: 10 },
  cardMeta: { fontSize: 12, color: "#00000066", textTransform: "uppercase" },
});
