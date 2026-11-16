import { Linking } from "react-native";
import { supabase } from "@/lib/supabase/client";
import { APP_WEBSITE } from "@/lib/appVariant";

// Plans are bought on the website (Stripe Checkout lives there), never in
// the app, so the app stays clear of Apple's and Google's in-app-purchase
// rules. This opens the website's pricing page in the browser, already
// signed in through a one-time handoff link when it can get one.
// Each app opens its own website (lib/appVariant.ts).
const PREMIUM_URL = `${APP_WEBSITE}/pricing`;
const HANDOFF_URL = `${APP_WEBSITE}/api/mobile/handoff`;

export async function openPremium(): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (token) {
      const res = await fetch(HANDOFF_URL, { method: "POST", headers: { Authorization: `Bearer ${token}` } });
      const json = await res.json();
      if (json.ok && json.url) {
        await Linking.openURL(json.url);
        return;
      }
    }
  } catch {
    // fall through to the plain link below
  }
  await Linking.openURL(PREMIUM_URL);
}
