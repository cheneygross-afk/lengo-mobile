import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loadNotepad, saveNotepad } from "@/lib/lessonNotepad";
import { colors, fonts } from "@/ui/theme";

// The lesson's notepad (mirror of the website's LessonNotepad): a "Notes"
// chip in the lesson's top bar opens a sheet to type in. The text lives in
// the lesson screen, not in a step, so it is the same note on every step;
// it autosaves to the account (lib/lessonNotepad.ts) and is listed on the
// Notes screen.

export function useLessonNotepad({
  levelPath,
  lessonSlug,
  lessonTitle,
  levelLabel,
}: {
  levelPath: string;
  lessonSlug: string;
  lessonTitle: string;
  levelLabel: string;
}) {
  const [body, setBody] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "local">("idle");
  const userId = useRef<string | null>(null);
  const lastSaved = useRef("");
  const latest = useRef({ levelPath, lessonSlug, lessonTitle, levelLabel, body, loaded });
  latest.current = { levelPath, lessonSlug, lessonTitle, levelLabel, body, loaded };

  useEffect(() => {
    if (!lessonSlug) return;
    let cancelled = false;
    setLoaded(false);
    setStatus("idle");
    loadNotepad(levelPath, lessonSlug).then(({ userId: id, note }) => {
      if (cancelled) return;
      userId.current = id;
      lastSaved.current = note?.body ?? "";
      setBody(note?.body ?? "");
      setLoaded(true);
    });
    return () => {
      cancelled = true;
      // Leaving the lesson mid-typing: save what's there.
      const l = latest.current;
      if (l.loaded && l.body !== lastSaved.current) {
        lastSaved.current = l.body;
        void saveNotepad(userId.current, {
          levelPath: l.levelPath,
          lessonSlug: l.lessonSlug,
          lessonTitle: l.lessonTitle,
          levelLabel: l.levelLabel,
          body: l.body,
        });
      }
    };
  }, [levelPath, lessonSlug]);

  useEffect(() => {
    if (!loaded || body === lastSaved.current) return;
    setStatus("saving");
    const t = setTimeout(async () => {
      const ok = await saveNotepad(userId.current, { levelPath, lessonSlug, lessonTitle, levelLabel, body });
      lastSaved.current = body;
      setStatus(ok && userId.current ? "saved" : "local");
    }, 700);
    return () => clearTimeout(t);
  }, [body, loaded, levelPath, lessonSlug, lessonTitle, levelLabel]);

  return { body, setBody, loaded, status, hasText: body.trim().length > 0 };
}

export function NotepadChip({ onPress, hasText, accent }: { onPress: () => void; hasText: boolean; accent: string }) {
  return (
    <Pressable
      hitSlop={10}
      onPress={onPress}
      style={s.chip}
      accessibilityRole="button"
      accessibilityLabel={hasText ? "Your notes for this lesson (has notes)" : "Your notes for this lesson"}
    >
      <Text style={s.chipText}>📝 Notes</Text>
      {hasText && <View style={[s.dot, { backgroundColor: accent }]} />}
    </Pressable>
  );
}

export function NotepadSheet({
  visible,
  onClose,
  onOpenAll,
  lessonTitle,
  accent,
  pad,
}: {
  visible: boolean;
  onClose: () => void;
  onOpenAll: () => void;
  lessonTitle: string;
  accent: string;
  pad: ReturnType<typeof useLessonNotepad>;
}) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle={Platform.OS === "ios" ? "pageSheet" : undefined}
      onRequestClose={onClose}
    >
      <SafeAreaView style={s.sheet} edges={Platform.OS === "ios" ? ["bottom"] : ["top", "bottom"]}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <View style={[s.stripe, { backgroundColor: accent }]} />
          <View style={s.header}>
            <View style={{ flex: 1 }}>
              <Text style={s.title}>Your notes</Text>
              <Text style={s.subtitle} numberOfLines={1}>
                {lessonTitle}
              </Text>
            </View>
            <Pressable hitSlop={10} onPress={onClose} accessibilityRole="button" style={[s.done, { backgroundColor: accent }]}>
              <Text style={s.doneText}>Done</Text>
            </Pressable>
          </View>
          <TextInput
            style={s.input}
            value={pad.body}
            onChangeText={pad.setBody}
            editable={pad.loaded}
            multiline
            textAlignVertical="top"
            autoFocus={pad.loaded}
            placeholder={
              pad.loaded ? "Jot down words, rules, questions… Your notes stay here as you go through the lesson." : "Loading…"
            }
            placeholderTextColor={colors.inkMuted}
            accessibilityLabel="Your notes for this lesson"
          />
          <View style={s.footer}>
            <Text style={s.status}>
              {pad.status === "saving"
                ? "Saving…"
                : pad.status === "saved"
                  ? "Saved to your account"
                  : pad.status === "local"
                    ? "Saved on this phone"
                    : ""}
            </Text>
            <Pressable hitSlop={8} onPress={onOpenAll} accessibilityRole="link">
              <Text style={s.allLink}>All my notes →</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}

const s = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: "#2A151322",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  chipText: { fontSize: 13, color: colors.ink, fontWeight: "600" },
  dot: { position: "absolute", top: -2, right: -2, width: 9, height: 9, borderRadius: 5 },
  sheet: { flex: 1, backgroundColor: colors.background },
  stripe: { height: 4 },
  header: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 20, paddingTop: 18, paddingBottom: 10 },
  title: { fontFamily: fonts.display, fontSize: 22, color: colors.ink },
  subtitle: { fontSize: 13, color: colors.inkSoft, marginTop: 2 },
  done: { borderRadius: 999, paddingHorizontal: 16, paddingVertical: 8 },
  doneText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  input: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 6,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2A151322",
    backgroundColor: colors.card,
    fontSize: 17,
    lineHeight: 24,
    color: colors.ink,
  },
  footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 12 },
  status: { fontSize: 13, color: colors.inkMuted },
  allLink: { fontSize: 14, fontWeight: "700", color: colors.foreground },
});
