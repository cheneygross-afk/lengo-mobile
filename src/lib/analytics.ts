import { Platform } from "react-native";
import { supabase } from "@/lib/supabase/client";

// The app's side of the website's event log (/api/analytics/track, read on
// /admin/analytics): sign-up, onboarding, lesson started and finished, so
// the first-lesson numbers count phone learners too. Fire-and-forget: a
// tracking failure never touches the lesson. Every event carries
// platform "ios" or "android" so the dashboard can tell them apart.
const TRACK_URL = "https://deependspanish.com/api/analytics/track";

export function trackEvent(event: string, metadata: Record<string, unknown> = {}, path?: string): void {
  void (async () => {
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      await fetch(TRACK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ event_name: event, path: path ? `app:${path}` : "app", metadata: { ...metadata, platform: Platform.OS } }),
      });
    } catch {
      // ignore
    }
  })();
}
