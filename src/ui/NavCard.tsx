import { Pressable, StyleSheet, Text, View } from "react-native";
import { Icon, IconTile, type IconName, type Tint } from "@/ui/Icon";
import { card, colors, fonts } from "@/ui/theme";

/** A white raised card that opens a screen: icon tile, title, one line, chevron. */
export default function NavCard({ icon, tint, title, body, onPress }: {
  icon: IconName;
  tint?: Tint;
  title: string;
  body: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]} onPress={onPress}>
      <IconTile name={icon} tint={tint} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
      <Icon name="chevron" size={18} color={colors.inkMuted} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { ...card, flexDirection: "row", alignItems: "center", gap: 14, padding: 16 },
  pressed: { transform: [{ scale: 0.985 }], opacity: 0.92 },
  text: { flex: 1 },
  title: { fontFamily: fonts.display, fontSize: 18, color: colors.ink, marginBottom: 2 },
  body: { fontSize: 13.5, lineHeight: 19, color: colors.inkSoft },
});
