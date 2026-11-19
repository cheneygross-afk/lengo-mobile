// The tables of a teaching section (LessonSection.tables), as on the
// website's LessonTables.tsx: conjugation grids and side-by-side
// comparisons. Every cell is tap-to-hear; a cell written with a leading
// "*" is shaded in the level colour (the irregular or key form).
import { StyleSheet, Text, View } from "react-native";
import TapText from "@/components/TapText";
import type { LessonTable } from "@/lib/lessons/types";
import type { SpeechLang } from "@/lib/speech";
import { colors } from "@/ui/theme";

export default function LessonTables({ tables, lang, accent }: { tables: LessonTable[]; lang: SpeechLang; accent: string }) {
  if (!tables.length) return null;
  return (
    <View style={s.wrap}>
      {tables.map((t, ti) => (
        <View key={ti} style={s.table}>
          {t.caption ? <Text style={s.caption}>{t.caption}</Text> : null}
          <View style={s.grid}>
            <View style={[s.row, { backgroundColor: `${accent}24` }]}>
              {t.head.map((h, hi) => (
                <View key={hi} style={[s.cell, hi === 0 && s.firstCell]}>
                  <TapText text={h} lang={lang} style={s.head} />
                </View>
              ))}
            </View>
            {t.rows.map((r, ri) => (
              <View key={ri} style={[s.row, s.bodyRow, ri % 2 === 1 && { backgroundColor: `${accent}0A` }]}>
                {r.map((c, ci) => {
                  const key = c.startsWith("*");
                  return (
                    <View key={ci} style={[s.cell, ci === 0 && s.firstCell, key && { backgroundColor: `${accent}33` }]}>
                      <TapText text={key ? c.slice(1) : c} lang={lang} style={[ci === 0 ? s.rowHead : s.text, key && s.key]} />
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
          {t.note ? <TapText text={t.note} lang={lang} style={s.note} /> : null}
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { marginTop: 4, marginBottom: 8, gap: 14 },
  table: {},
  caption: { fontSize: 12, fontWeight: "700", color: colors.inkMuted, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 6 },
  grid: { borderWidth: 1, borderColor: "#2A15131A", borderRadius: 14, overflow: "hidden", backgroundColor: "#fff" },
  row: { flexDirection: "row" },
  bodyRow: { borderTopWidth: 1, borderTopColor: "#2A151314" },
  cell: { flex: 1, paddingVertical: 8, paddingHorizontal: 8, justifyContent: "center" },
  firstCell: { flex: 0.9 },
  head: { fontSize: 14, fontWeight: "700", color: colors.ink },
  rowHead: { fontSize: 13, fontWeight: "600", color: colors.inkSoft },
  text: { fontSize: 15, color: colors.ink },
  key: { fontWeight: "700" },
  note: { fontSize: 13, color: colors.inkSoft, marginTop: 6 },
});
