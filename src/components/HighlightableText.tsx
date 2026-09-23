import { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  type LayoutChangeEvent,
  type GestureResponderEvent,
  type PanResponderGestureState,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";
import type { LessonHighlight } from "@/lib/highlights";

// Mobile has no equivalent of the web app's window.getSelection() (see
// src/components/lessons/HighlightableText.tsx there), so this builds
// word-level drag selection from scratch: every block of prose is split
// into individually-touchable word spans laid out in a flex-wrapped
// row, a PanResponder on that row hit-tests which word is under the
// finger on press and on every move, and the anchor..current word range
// becomes the live selection preview. Releasing shows a small
// "Highlight" pill; tapping it computes the exact start/end character
// offsets of the selected words within this block's full text (the
// same precision the website saves) and hands them to onAdd. Tapping an
// already-highlighted word removes that highlight, mirroring the
// website's click-to-remove <mark>.

type WordRect = { x: number; y: number; width: number; height: number };
type Token = { start: number; end: number; value: string; isWord: boolean };

type Props = {
  text: string;
  blockKey: string;
  highlights: LessonHighlight[];
  // Only logged-in learners can persist highlights (mirrors the
  // website's lesson_highlights RLS). When false this renders plain,
  // static text -- no PanResponder, no onPress -- so logged-out readers
  // pay zero cost for the feature.
  enabled: boolean;
  onAdd: (start: number, end: number, text: string) => void;
  onRemove: (id: string) => void;
  // Styling for each word span -- pass the paragraph/example's normal
  // font styling here (size, color, line height, etc).
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  // Hex background for a confirmed highlight, from the learner's chosen
  // highlight color (see src/lib/highlightColors.ts' highlightMarkColor).
  markColor: string;
};

// Splits into alternating runs of non-whitespace ("words", individually
// touchable/draggable) and whitespace (rendered plain, but still
// highlight-aware so a highlight spanning multiple words reads as one
// continuous band instead of gapping at every space). Nothing is
// trimmed -- every character of `text` appears in exactly one token --
// so offsets computed from these tokens line up exactly with the plain-
// text offsets the website's selection-based offsets would produce for
// the same substring.
function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  const re = /\S+|\s+/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    tokens.push({ start: m.index, end: m.index + m[0].length, value: m[0], isWord: !/^\s/.test(m[0]) });
  }
  return tokens;
}

function rangesOverlap(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean {
  return aStart < bEnd && aEnd > bStart;
}

// A live drag preview and a confirmed-but-unsaved pending selection both
// render with this, distinct from a saved highlight's markColor.
const PREVIEW_COLOR = "#60a5fa77";
// How far (px) a touch has to move, and how much more horizontal than
// vertical that movement has to be, before a press is treated as a
// selection drag rather than a tap (word tap-to-remove, or a normal
// vertical swipe that should keep scrolling the lesson).
const DRAG_SLOP = 6;

export default function HighlightableText({
  text,
  highlights,
  enabled,
  onAdd,
  onRemove,
  textStyle,
  style,
  markColor,
}: Props) {
  const rowRef = useRef<View>(null);
  const containerOrigin = useRef({ x: 0, y: 0 });
  const wordRects = useRef<Map<number, WordRect>>(new Map());
  const anchorWord = useRef<number | null>(null);

  // Word-index range currently being dragged out (live preview only,
  // nothing saved yet) -- null when no drag is in progress.
  const [dragRange, setDragRange] = useState<{ start: number; end: number } | null>(null);
  // A finished drag, offered up with a "Highlight" pill for the learner
  // to confirm -- a confirm step (rather than saving on release) avoids
  // turning ordinary reading touches into accidental saved highlights.
  const [pending, setPending] = useState<{ start: number; end: number; x: number; y: number } | null>(null);

  const tokens = useMemo(() => tokenize(text), [text]);
  const words = useMemo(() => tokens.filter((t) => t.isWord), [tokens]);

  function measureOrigin(cb?: () => void) {
    rowRef.current?.measureInWindow((x, y) => {
      containerOrigin.current = { x, y };
      cb?.();
    });
  }

  // Finds the word whose measured rect the point falls in; if it's
  // between words (e.g. over a space, or in the gap between wrapped
  // lines) falls back to the closest one, first by row then by
  // horizontal distance, so a slightly-off touch still resolves to a
  // sensible word instead of nothing.
  function hitTestWord(localX: number, localY: number): number | null {
    let bestIdx: number | null = null;
    let bestDist = Infinity;
    for (const [idx, r] of wordRects.current) {
      if (localY >= r.y && localY <= r.y + r.height) {
        const dx = localX < r.x ? r.x - localX : localX > r.x + r.width ? localX - (r.x + r.width) : 0;
        if (dx < bestDist) {
          bestDist = dx;
          bestIdx = idx;
        }
      }
    }
    if (bestIdx != null) return bestIdx;
    let fallbackIdx: number | null = null;
    let fallbackDist = Infinity;
    for (const [idx, r] of wordRects.current) {
      const dy = localY < r.y ? r.y - localY : localY > r.y + r.height ? localY - (r.y + r.height) : 0;
      const dx = localX < r.x ? r.x - localX : localX > r.x + r.width ? localX - (r.x + r.width) : 0;
      const dist = dy * 1000 + dx;
      if (dist < fallbackDist) {
        fallbackDist = dist;
        fallbackIdx = idx;
      }
    }
    return fallbackIdx;
  }

  function existingHighlightAt(start: number, end: number): LessonHighlight | undefined {
    return highlights.find((h) => rangesOverlap(start, end, h.start, h.end));
  }

  function handleWordTap(word: Token) {
    const hit = existingHighlightAt(word.start, word.end);
    if (hit) {
      onRemove(hit.id);
      return;
    }
    // A tap that lands on plain (non-highlighted) text while a pending
    // pill is showing dismisses it, same as tapping away from web's
    // selection popover.
    if (pending) setPending(null);
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      // Only steal the gesture from the enclosing ScrollView (and from
      // a word's own onPress) once the drag is clearly more horizontal
      // than vertical -- a vertical drag started on a word is almost
      // always the reader trying to scroll, not select. The anchor word
      // itself is still resolved from the original touch-down point
      // (gestureState.x0/y0), not from wherever the finger is once this
      // threshold trips, so the selection always starts exactly where
      // the press began.
      onMoveShouldSetPanResponder: (_evt: GestureResponderEvent, g: PanResponderGestureState) =>
        enabled && Math.abs(g.dx) > DRAG_SLOP && Math.abs(g.dx) > Math.abs(g.dy),
      onMoveShouldSetPanResponderCapture: (_evt: GestureResponderEvent, g: PanResponderGestureState) =>
        enabled && Math.abs(g.dx) > DRAG_SLOP && Math.abs(g.dx) > Math.abs(g.dy),
      onPanResponderGrant: (_evt: GestureResponderEvent, g: PanResponderGestureState) => {
        setPending(null);
        measureOrigin(() => {
          const localX = g.x0 - containerOrigin.current.x;
          const localY = g.y0 - containerOrigin.current.y;
          const idx = hitTestWord(localX, localY);
          anchorWord.current = idx;
          if (idx != null) setDragRange({ start: idx, end: idx });
        });
      },
      onPanResponderMove: (_evt: GestureResponderEvent, g: PanResponderGestureState) => {
        if (anchorWord.current == null) return;
        const localX = g.moveX - containerOrigin.current.x;
        const localY = g.moveY - containerOrigin.current.y;
        const idx = hitTestWord(localX, localY);
        if (idx == null) return;
        setDragRange({ start: Math.min(anchorWord.current, idx), end: Math.max(anchorWord.current, idx) });
      },
      onPanResponderRelease: (_evt: GestureResponderEvent, g: PanResponderGestureState) => {
        const anchor = anchorWord.current;
        anchorWord.current = null;
        setDragRange(null);
        if (anchor == null || words.length === 0) return;
        const localX = g.moveX - containerOrigin.current.x;
        const localY = g.moveY - containerOrigin.current.y;
        const idx = hitTestWord(localX, localY) ?? anchor;
        const startIdx = Math.min(anchor, idx);
        const endIdx = Math.max(anchor, idx);
        const start = words[startIdx].start;
        const end = words[endIdx].end;
        if (end <= start) return;
        setPending({ start, end, x: localX, y: localY });
      },
      onPanResponderTerminate: () => {
        anchorWord.current = null;
        setDragRange(null);
      },
    })
  ).current;

  function confirmPending() {
    if (!pending) return;
    onAdd(pending.start, pending.end, text.slice(pending.start, pending.end));
    setPending(null);
  }

  let wordIndex = -1;

  return (
    <View
      ref={rowRef}
      style={[styles.row, style]}
      onLayout={() => measureOrigin()}
      {...(enabled ? panResponder.panHandlers : {})}
    >
      {tokens.map((token, i) => {
        if (!token.isWord) {
          const spaceHit = existingHighlightAt(token.start, token.end);
          return (
            <Text key={i} style={[textStyle, spaceHit ? { backgroundColor: markColor } : null]}>
              {token.value}
            </Text>
          );
        }
        wordIndex += 1;
        const idx = wordIndex;
        const hit = existingHighlightAt(token.start, token.end);
        const inDrag = !!dragRange && idx >= dragRange.start && idx <= dragRange.end;
        const inPending = !!pending && token.start >= pending.start && token.end <= pending.end;
        const bg = inDrag || inPending ? PREVIEW_COLOR : hit ? markColor : undefined;
        return (
          <Text
            key={i}
            onLayout={(e: LayoutChangeEvent) => {
              const { x, y, width, height } = e.nativeEvent.layout;
              wordRects.current.set(idx, { x, y, width, height });
            }}
            onPress={enabled ? () => handleWordTap(token) : undefined}
            style={[textStyle, styles.word, bg ? { backgroundColor: bg } : null]}
          >
            {token.value}
          </Text>
        );
      })}

      {enabled && pending && (
        <View pointerEvents="box-none" style={[styles.pillWrap, { left: pending.x, top: pending.y }]}>
          <Text onPress={confirmPending} style={styles.pillBtn}>
            Highlight
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" },
  word: { borderRadius: 2 },
  pillWrap: {
    position: "absolute",
    transform: [{ translateX: -24 }, { translateY: -40 }],
  },
  pillBtn: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    overflow: "hidden",
  },
});
