import { View, Text, Pressable, StyleSheet, ActivityIndicator } from "react-native";
import { colors, fonts } from "@/ui/theme";

// What a screen shows while a course level is on its way (remoteLevels.ts):
// a spinner with a line of text the first time, since a level can take a
// few seconds to download, and a "Try again" when it couldn't be fetched
// (no connection and no copy on the phone yet).
export default function LevelDownload({ failed, onRetry }: { failed: boolean; onRetry: () => void }) {
  if (!failed) {
    return (
      <View style={styles.box}>
        <ActivityIndicator color={colors.foreground} />
        <Text style={styles.note}>Getting your lessons…</Text>
      </View>
    );
  }
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Couldn't load these lessons</Text>
      <Text style={styles.note}>
        A level downloads the first time you open it. Check your connection and try again; after that it works offline.
      </Text>
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onRetry}>
        <Text style={styles.buttonText}>Try again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flex: 1, alignItems: "center", justifyContent: "center", padding: 32, gap: 12, backgroundColor: colors.background },
  title: { fontFamily: fonts.display, fontSize: 20, color: colors.ink, textAlign: "center" },
  note: { fontSize: 14, lineHeight: 20, color: colors.inkSoft, textAlign: "center" },
  button: { marginTop: 8, backgroundColor: colors.foreground, borderRadius: 999, paddingVertical: 12, paddingHorizontal: 28 },
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  pressed: { opacity: 0.85 },
});
