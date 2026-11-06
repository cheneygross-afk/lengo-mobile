import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { setSpeechStatus, subscribeSpeechStatus, type SpeechStatus } from "@/lib/speechStatus";

/**
 * A small prompt at the bottom of the screen for tap-to-hear audio: shows
 * "Loading audio..." while a brand-new phrase is being recorded, and
 * "Couldn't play the audio" with a Retry button when a clip can't be
 * played. There is no robotic stand-in voice, so this is what the learner
 * sees instead of silence (see lib/speech.ts).
 */
export default function SpeechStatusToast() {
  const insets = useSafeAreaInsets();
  const [status, setStatus] = useState<SpeechStatus>({ state: "idle" });
  useEffect(() => subscribeSpeechStatus(setStatus), []);

  if (status.state === "idle") return null;
  return (
    <View
      pointerEvents="box-none"
      style={{ position: "absolute", left: 0, right: 0, bottom: insets.bottom + 80, alignItems: "center" }}
    >
      <View
        accessibilityLiveRegion="polite"
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#1F1F1F",
          borderRadius: 999,
          paddingVertical: 8,
          paddingHorizontal: 16,
          gap: 12,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          elevation: 4,
        }}
      >
        {status.state === "loading" ? (
          <Text style={{ color: "#fff", fontSize: 14 }}>Loading audio…</Text>
        ) : (
          <>
            <Text style={{ color: "#fff", fontSize: 14 }}>Couldn't play the audio.</Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => status.retry()}
              style={{ backgroundColor: "#fff", borderRadius: 999, paddingVertical: 5, paddingHorizontal: 12 }}
            >
              <Text style={{ color: "#1F1F1F", fontWeight: "700", fontSize: 14 }}>Retry</Text>
            </Pressable>
            <Pressable accessibilityRole="button" accessibilityLabel="Dismiss" onPress={() => setSpeechStatus({ state: "idle" })} hitSlop={8}>
              <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>✕</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}
