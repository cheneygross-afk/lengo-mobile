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

// Apple and Google only allow a button out to web checkout in their US
// stores. Everywhere else the app may not point to buying elsewhere, so
// the "See plans" / "Get Premium" buttons are hidden there and the app
// works as a sign-in for plans bought on the website. The phone's region
// setting (en-US, es-MX, en-GB...) stands in for the store country; US
// territories count as the US store. No region at all is treated as not US.
const LINK_OUT_REGIONS = new Set(["US", "PR", "GU", "VI", "AS", "MP"]);

export function deviceRegion(): string | null {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale || "";
    const m = locale.match(/[-_]([A-Z]{2})(?:[-_]|$)/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

export function canLinkToWebPlans(): boolean {
  const region = deviceRegion();
  return region !== null && LINK_OUT_REGIONS.has(region);
}

export async function openPremium(): Promise<void> {
  if (!canLinkToWebPlans()) return;
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
