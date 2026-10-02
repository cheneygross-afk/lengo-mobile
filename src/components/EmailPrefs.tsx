// Settings > Emails: the daily study reminder and first-week tips
// toggles (both on by default), the same profiles columns as the
// website's Settings. Reads and saves on its own, and hides itself until
// those columns exist (supabase/schema_retention.sql in the website repo).
import { useEffect, useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { supabase } from "@/lib/supabase/client";

type Column = "study_reminder_emails" | "tips_emails";

const ROWS: { column: Column; label: string; body: string }[] = [
  { column: "study_reminder_emails", label: "Daily study reminder", body: "One email in the evening, only on days you haven't studied yet." },
  { column: "tips_emails", label: "Tips for getting started", body: "A few emails in your first week about what to try next." },
];

export default function EmailPrefs() {
  const [values, setValues] = useState<Record<Column, boolean> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: session } = await supabase.auth.getSession();
      const userId = session.session?.user.id;
      if (!userId) return;
      const { data, error } = await supabase
        .from("profiles")
        .select("study_reminder_emails, tips_emails")
        .eq("id", userId)
        .single();
      if (cancelled || error || !data) return;
      setValues({
        study_reminder_emails: data.study_reminder_emails !== false,
        tips_emails: data.tips_emails !== false,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function toggle(column: Column, next: boolean) {
    if (!values) return;
    const { data: session } = await supabase.auth.getSession();
    const userId = session.session?.user.id;
    if (!userId) return;
    setSaving(true);
    setValues({ ...values, [column]: next });
    const { error } = await supabase.from("profiles").update({ [column]: next }).eq("id", userId);
    if (error) setValues({ ...values, [column]: !next });
    setSaving(false);
  }

  if (!values) return null;

  return (
    <View style={s.section}>
      <Text style={s.title}>Emails</Text>
      {ROWS.map((row) => (
        <View key={row.column} style={s.row}>
          <View style={s.rowText}>
            <Text style={s.label}>{row.label}</Text>
            <Text style={s.sub}>{row.body}</Text>
          </View>
          <Switch value={values[row.column]} onValueChange={(v) => void toggle(row.column, v)} disabled={saving} />
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  section: { marginTop: 28, gap: 10 },
  title: { fontSize: 15, fontWeight: "700", color: "#000" },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 },
  rowText: { flex: 1 },
  label: { fontSize: 14, color: "#000" },
  sub: { fontSize: 12.5, color: "#00000080", marginTop: 2 },
});
