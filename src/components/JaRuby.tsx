import { useMemo } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";
import { JAPANESE_CHAR, hasRuby, rubyLayout, segmentJa } from "@/lib/japanese";
import { prefetchSpeech, speak, JAPANESE_LANG } from "@/lib/speech";

// Furigana for the Japanese course. Lesson text writes every kanji word as
// {漢字|かんじ} (lib/japanese.ts); here the reading is drawn small above the
// kanji, like <ruby> on the website.
//
// React Native has no ruby, and a line of Japanese has no spaces to wrap
// at, so marked-up text is laid out as a wrapping row of small pieces: a
// kanji word with its reading stacked on top, each other Japanese
// character on its own, and English words whole. Closing punctuation stays
// with the piece before it and an opening bracket with the piece after,
// so a line never starts with 。 or ends with 「.

export type JaToken = {
  /** Offsets into the plain text (markup removed). */
  start: number;
  end: number;
  value: string;
  /** The reading shown above, for a kanji word. */
  reading?: string;
  /** False for spaces. */
  isWord: boolean;
  /** Japanese: the word a tap on this piece says, and where it starts.
   * Undefined for anything else. */
  say?: string;
  sayStart?: number;
};

const CLOSERS = /[、。，．！？!?）)」』】〉》・…ー〜~：:；;]/;
const OPENERS = /[（(「『【〈《]/;

/** Marked-up text as plain text plus the pieces to lay out. */
export function jaTokens(text: string): { plain: string; tokens: JaToken[] } {
  const { plain, groupAt, groups } = rubyLayout(text);
  const tokens: JaToken[] = [];
  const isJa = (i: number) => groupAt[i] >= 0 || JAPANESE_CHAR.test(plain[i]);
  let i = 0;
  while (i < plain.length) {
    const ch = plain[i];
    if (/\s/.test(ch)) {
      let j = i + 1;
      while (j < plain.length && /\s/.test(plain[j])) j++;
      // A space rides at the end of the piece before it, so a wrapped line
      // never starts with one (it hangs, unseen, at the end of the line
      // above). Only a space at the very start stands alone.
      const prev = tokens[tokens.length - 1];
      if (prev && prev.isWord && !prev.value.endsWith("\n")) {
        prev.end = j;
        prev.value = plain.slice(prev.start, j);
      } else
        tokens.push({
          start: i,
          end: j,
          value: plain.slice(i, j),
          isWord: false,
        });
      i = j;
      continue;
    }
    let j: number;
    let reading: string | undefined;
    let ja = false;
    if (groupAt[i] >= 0) {
      const g = groups[groupAt[i]];
      j = g.end;
      reading = g.reading;
      ja = true;
    } else if (JAPANESE_CHAR.test(ch) || OPENERS.test(ch)) {
      j = i + 1;
      ja = JAPANESE_CHAR.test(ch);
      // An opening bracket takes the piece after it along.
      if (OPENERS.test(ch) && j < plain.length && !/\s/.test(plain[j])) {
        if (groupAt[j] >= 0) {
          // Keep a bracket + kanji word together, reading over the word only
          // isn't possible in one piece, so the bracket stands alone.
        } else if (JAPANESE_CHAR.test(plain[j])) {
          j += 1;
          ja = true;
        }
      }
    } else {
      // A run of anything else (an English word, digits, punctuation).
      j = i + 1;
      while (
        j < plain.length &&
        !/\s/.test(plain[j]) &&
        !isJa(j) &&
        !OPENERS.test(plain[j])
      )
        j++;
    }
    // Closing punctuation stays with what it closes.
    while (j < plain.length && CLOSERS.test(plain[j]) && groupAt[j] < 0) j++;
    tokens.push({
      start: i,
      end: j,
      value: plain.slice(i, j),
      reading,
      isWord: true,
      say: ja ? "" : undefined,
    });
    i = j;
  }
  // What a tap says: the word the piece is in (lib/japanese.ts segmentJa),
  // or the whole run of Japanese where the phone can't split words.
  const words: { start: number; end: number }[] = [];
  let r = 0;
  while (r < plain.length) {
    if (!isJa(r)) {
      r++;
      continue;
    }
    let e = r + 1;
    while (e < plain.length && isJa(e)) e++;
    for (const seg of segmentJa(plain.slice(r, e), r, groupAt)) words.push(seg);
    r = e;
  }
  for (const t of tokens) {
    if (t.say === undefined) continue;
    const w = words.find((seg) => seg.end > t.start && seg.start < t.end);
    if (w) {
      t.say = plain.slice(w.start, w.end);
      t.sayStart = w.start;
    } else t.say = undefined;
  }
  return { plain, tokens };
}

/** Sizes for the reading above a piece, from the text's own style. */
export function readingStyle(textStyle: StyleProp<TextStyle>): TextStyle {
  const flat = StyleSheet.flatten(textStyle) ?? {};
  const size = typeof flat.fontSize === "number" ? flat.fontSize : 14;
  const reading = Math.max(8, Math.round(size * 0.5));
  return {
    fontSize: reading,
    lineHeight: reading + 2,
    color: flat.color,
    opacity: 0.75,
    textAlign: "center",
  };
}

/** One piece: its text, with the reading above when it has one. The row
 * lines pieces up along the bottom, so a line's text sits level and only
 * a line that has a reading grows taller (as <ruby> does on the website). */
export function RubyPiece({
  token,
  textStyle,
  extraStyle,
  onPress,
  onPressIn,
  onLongPress,
  onLayout,
}: {
  token: JaToken;
  textStyle?: StyleProp<TextStyle>;
  extraStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  onPressIn?: () => void;
  onLongPress?: () => void;
  onLayout?: React.ComponentProps<typeof View>["onLayout"];
}) {
  const rt = readingStyle(textStyle);
  // A trailing space (see jaTokens) is drawn as room to the right, so the
  // reading stays centred over the word itself.
  const shown = token.value.replace(/\s+$/, "");
  const gap = shown.length < token.value.length && shown.length > 0;
  const size = (StyleSheet.flatten(textStyle) ?? {}).fontSize ?? 14;
  const body = (
    <>
      {token.reading ? (
        // The reading may be wider than its kanji (わたし over 私). It hangs
        // over the edges instead of widening the piece, so the kanji keeps
        // its normal spacing in the line, as <ruby> does on the website.
        <View style={{ height: rt.lineHeight as number, alignSelf: "stretch" }}>
          <View style={styles.readingRow}>
            <Text
              style={[
                rt,
                styles.readingText,
                { width: token.reading.length * (rt.fontSize as number) + 4 },
              ]}
            >
              {token.reading}
            </Text>
          </View>
        </View>
      ) : null}
      <Text style={[textStyle, styles.base, extraStyle]}>
        {gap ? shown : token.value}
      </Text>
    </>
  );
  if (!onPress && !onLongPress)
    return (
      <View
        style={[styles.piece, gap && { marginRight: size * 0.28 }]}
        onLayout={onLayout}
      >
        {body}
      </View>
    );
  return (
    <Pressable
      style={[styles.piece, gap && { marginRight: size * 0.28 }]}
      onPress={onPress}
      onPressIn={onPressIn}
      onLongPress={onLongPress}
      onLayout={onLayout}
    >
      {body}
    </Pressable>
  );
}

/** Marked-up text with furigana. `voiced` makes the Japanese tap-to-hear
 * (a tap says the phrase the piece is in). Text inside [square brackets]
 * is bold with `boldBrackets`, as in TapText. */
export default function JaRubyText({
  text,
  style,
  containerStyle,
  voiced = true,
  boldBrackets = false,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  voiced?: boolean;
  boldBrackets?: boolean;
}) {
  const { tokens, boldAt } = useMemo(() => {
    let source = text;
    const bold: boolean[] = [];
    if (boldBrackets) {
      // Brackets are dropped; which plain characters they held is kept.
      // (Markup characters between them never reach the plain text, so
      // the marks are worked out on the plain text itself below.)
      source = text.replace(/[[\]]/g, "");
      let inBold = false;
      let plainIndex = 0;
      let inReading = false;
      for (const ch of text) {
        if (ch === "[") inBold = true;
        else if (ch === "]") inBold = false;
        else if (ch === "{") continue;
        else if (ch === "|") inReading = true;
        else if (ch === "}") inReading = false;
        else if (!inReading) bold[plainIndex++] = inBold;
      }
    }
    return { tokens: jaTokens(source).tokens, boldAt: bold };
  }, [text, boldBrackets]);
  const { box, justify } = boxStyle(style);
  return (
    <View
      style={[styles.row, box, { justifyContent: justify }, containerStyle]}
    >
      {tokens.map((t, i) => {
        const say = voiced && t.say ? t.say : null;
        return (
          <RubyPiece
            key={i}
            token={t}
            textStyle={style}
            extraStyle={boldAt[t.start] ? styles.bold : undefined}
            onPressIn={
              say ? () => prefetchSpeech(say, JAPANESE_LANG) : undefined
            }
            onPress={say ? () => speak(say, JAPANESE_LANG) : undefined}
          />
        );
      })}
    </View>
  );
}

const BOX_KEYS = [
  "margin",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginVertical",
  "marginHorizontal",
  "flex",
  "flexGrow",
  "flexShrink",
  "flexBasis",
  "alignSelf",
  "width",
  "maxWidth",
  "minWidth",
] as const;

/** A paragraph's text style, as the part that belongs on the row of pieces
 * (margins, flex, width) and how the row lines its pieces up. */
export function boxStyle(style: StyleProp<TextStyle>): {
  box: ViewStyle;
  justify: "center" | "flex-end" | "flex-start";
} {
  const flat = (StyleSheet.flatten(style) ?? {}) as Record<string, unknown>;
  const box: Record<string, unknown> = {};
  for (const k of BOX_KEYS) if (flat[k] !== undefined) box[k] = flat[k];
  const justify =
    flat.textAlign === "center"
      ? "center"
      : flat.textAlign === "right"
        ? "flex-end"
        : "flex-start";
  return { box: box as ViewStyle, justify };
}

/** A short label (an answer option, a word tile): furigana when the text
 * is marked up, otherwise an ordinary Text. Not tap-to-hear itself; the
 * button around it speaks. */
export function RubyLabel({
  text,
  style,
  onPress,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  onPress?: React.ComponentProps<typeof Text>["onPress"];
}) {
  if (!hasRuby(text))
    return (
      <Text style={style} onPress={onPress}>
        {text}
      </Text>
    );
  return <JaRubyText text={text} style={style} voiced={false} />;
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end" },
  piece: { alignItems: "center" },
  // A row centres a child wider than itself by letting it overflow both
  // sides equally, which is how a long reading hangs over its kanji.
  // Absolute, so the reading never sizes the piece; the row centres a
  // reading wider than its kanji by letting it overflow both sides.
  readingRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "visible",
  },
  readingText: { flexShrink: 0, maxWidth: undefined },
  // The row places pieces; margins and alignment meant for a whole
  // paragraph must not repeat on every piece.
  base: {
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    flex: 0,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    alignSelf: "auto",
    width: undefined,
    textAlign: "center",
  },
  bold: { fontWeight: "700", color: "#2A1513" },
});
