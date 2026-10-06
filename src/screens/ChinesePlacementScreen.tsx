import { useMemo, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import ExerciseBlock from "@/components/ExerciseBlock";
import { CHINESE_LANG } from "@/lib/speech";
import { drawPlacementStages } from "@/lib/lessons/zh/placement";
import { PLACEMENT_PASS, placementPassed, placementStart } from "@/lib/curriculum/assess";
import { recordAttempt } from "@/lib/attempts";
import { writeJSON } from "@/lib/storage/asyncStore";
import type { LessonModuleKey } from "@/lib/lessons/registry";

type Props = NativeStackScreenProps<AppStackParamList, "ChinesePlacement">;

/** Where the last result is kept, for ChineseLevelsScreen. */
export const ZH_PLACEMENT_KEY = "zh-placement";
export type SavedPlacement = { code: string; name: string; path: string; at: number };

type StageResult = { right: number; total: number };
type Phase = "intro" | "testing" | "stage-passed" | "done";

// The Chinese placement test -- the same test as the website's
// /lessons/zh/placement: one short stage per module (drawPlacementStages,
// synced from the website), climbing from pinyin to C2. Pass a stage and
// the next one follows; the first stage failed is where to start. Answers
// go into the attempts log as "placement" attempts.
export default function ChinesePlacementScreen({ navigation }: Props) {
  const stages = useMemo(() => drawPlacementStages(`${Date.now()}-${Math.random()}`), []);
  const [phase, setPhase] = useState<Phase>("intro");
  const [stage, setStage] = useState(0);
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<StageResult[]>([]);
  const rightRef = useRef(0);
  const pct = Math.round(PLACEMENT_PASS * 100);

  const current = stages[stage];
  const item = current?.items[index];

  function finish(all: StageResult[]) {
    const start = placementStart(all);
    const at = stages[Math.min(start, stages.length - 1)];
    void writeJSON(ZH_PLACEMENT_KEY, { code: at.code, name: at.name, path: at.path, at: Date.now() } satisfies SavedPlacement);
    setPhase("done");
  }

  function next() {
    if (index + 1 < current.items.length) {
      setIndex((i) => i + 1);
      setChecked(false);
      return;
    }
    const r = { right: rightRef.current, total: current.items.length };
    const all = [...results, r];
    setResults(all);
    if (placementPassed(r.right, r.total) && stage + 1 < stages.length) setPhase("stage-passed");
    else finish(all);
  }

  function nextStage() {
    rightRef.current = 0;
    setStage((s) => s + 1);
    setIndex(0);
    setChecked(false);
    setPhase("testing");
  }

  const start = placementStart(results);
  const beyond = start >= stages.length;
  const at = stages[Math.min(start, stages.length - 1)];

  return (
    <View style={s.screen}>
      <ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
        {phase === "intro" && (
          <View>
            <Text style={s.kicker}>Placement test</Text>
            <Text style={s.title}>Where should you start?</Text>
            <Text style={s.body}>
              A short test that climbs level by level, from pinyin to C2, and stops where you need to begin. Each level has{" "}
              {stages[0]?.items.length ?? 0} questions; get {pct}% right and you move up.
            </Text>
            <Text style={s.note}>From C1 the questions are entirely in Chinese, like the lessons.</Text>
            <Pressable style={s.bigBtn} onPress={() => setPhase("testing")} disabled={!stages.length}>
              <Text style={s.bigBtnText}>Start</Text>
            </Pressable>
          </View>
        )}

        {phase === "testing" && item && (
          <View>
            <Text style={s.badge}>
              {current.code} · question {index + 1} of {current.items.length}
            </Text>
            <ExerciseBlock
              key={`${stage}-${index}`}
              exercise={item.exercise}
              index={index}
              hideIndexLabel
              lang={CHINESE_LANG}
              onChecked={(correct) => {
                if (correct) rightRef.current += 1;
                void recordAttempt(item.id, item.concepts, correct ? "good" : "again", "placement");
                setChecked(true);
              }}
            />
            {checked && (
              <Pressable style={s.bigBtn} onPress={next}>
                <Text style={s.bigBtnText}>{index + 1 >= current.items.length ? "Finish this level" : "Next question"}</Text>
              </Pressable>
            )}
          </View>
        )}

        {phase === "stage-passed" && (
          <View style={s.center}>
            <Text style={s.title}>{current.code} passed</Text>
            <Text style={s.body}>
              {results[results.length - 1]?.right}/{results[results.length - 1]?.total} right. Next: {stages[stage + 1].code}{" "}
              {stages[stage + 1].name}.
            </Text>
            <Pressable style={s.bigBtn} onPress={nextStage}>
              <Text style={s.bigBtnText}>On to {stages[stage + 1].code}</Text>
            </Pressable>
          </View>
        )}

        {phase === "done" && (
          <View style={s.center}>
            <Text style={s.title}>{beyond ? "You passed every level" : `Start at ${at.code}: ${at.name}`}</Text>
            <Text style={s.body}>
              {beyond
                ? "C2 included. Use C2 to polish: its unit reviews and level test are a good place to start."
                : start === 0
                  ? "Begin at the beginning: the first module builds everything else."
                  : `You passed ${stages.slice(0, start).map((x) => x.code).join(", ")}. Inside ${at.code}, each unit has a test-out, so you can skip units you already know.`}
            </Text>
            {results.map((r, i) => (
              <Text key={stages[i].code} style={s.note}>
                {stages[i].code}: {r.right}/{r.total} {placementPassed(r.right, r.total) ? "· passed" : "· start here"}
              </Text>
            ))}
            <Pressable
              style={s.bigBtn}
              onPress={() => navigation.replace("LessonList", { moduleKey: `zh-${at.path}` as LessonModuleKey })}
            >
              <Text style={s.bigBtnText}>Go to {at.code}</Text>
            </Pressable>
            <Pressable style={s.linkBtn} onPress={() => navigation.goBack()}>
              <Text style={s.linkBtnText}>All Chinese levels</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 40 },
  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#7A1F1F", marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 10 },
  body: { fontSize: 15, lineHeight: 22, color: "#000000cc", marginBottom: 10 },
  note: { fontSize: 13, color: "#00000099", marginBottom: 4 },
  badge: { fontSize: 12, color: "#00000066", textTransform: "uppercase", marginBottom: 4, fontWeight: "600" },
  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 18 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  linkBtn: { paddingVertical: 14, alignItems: "center" },
  linkBtnText: { color: "#7A1F1F", fontWeight: "600", fontSize: 15 },
  center: { alignItems: "stretch", paddingTop: 30 },
});
