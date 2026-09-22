import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

// Mobile equivalent of the web app's server-side getCurrentUserAndRole --
// there's no server component / cookie middleware here, so session state
// lives in a context instead, hydrated once from AsyncStorage (via the
// Supabase client's own persisted session) and kept live with
// onAuthStateChange.
type AuthState = {
  session: Session | null;
  loading: boolean;
  // Invite-only flag for the hidden Japanese track -- mirrors the web
  // app's profiles.japanese_beta_access / getEntitlements(). Unrelated to
  // billing; set manually per account, no self-serve signup. Staff
  // (instructor/admin role) always see it, same as on web.
  hasJapaneseBetaAccess: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasJapaneseBetaAccess, setHasJapaneseBetaAccess] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    let cancelled = false;
    const userId = session?.user?.id;
    if (!userId) {
      setHasJapaneseBetaAccess(false);
      return;
    }
    supabase
      .from("profiles")
      .select("role, japanese_beta_access")
      .eq("id", userId)
      .single()
      .then(({ data: profile }) => {
        if (cancelled) return;
        const isStaff = profile?.role === "instructor" || profile?.role === "admin";
        setHasJapaneseBetaAccess(isStaff || !!profile?.japanese_beta_access);
      });
    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  const value = useMemo<AuthState>(
    () => ({
      session,
      loading,
      hasJapaneseBetaAccess,
      signOut: async () => {
        await supabase.auth.signOut();
      },
    }),
    [session, loading, hasJapaneseBetaAccess]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
