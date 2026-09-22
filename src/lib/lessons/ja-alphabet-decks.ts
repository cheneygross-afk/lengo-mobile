// Bundled starter flashcard decks for the Japanese beta's Flashcards
// screen. Unlike every other card in the shared flashcards store, these
// aren't written by a learner or starred from a lesson -- they're seeded
// once, automatically, the first time the Flashcards screen loads with
// Japanese selected, so hiragana/katakana review doesn't start from a
// completely empty screen. Content mirrors the row groupings taught in
// ja-alphabets.ts, so a deck's name matches the lesson that actually
// teaches those characters.
//
// Mobile port of the web app's src/lib/lessons/ja-alphabet-decks.ts --
// same deck content, but without that version's "folders" grouping
// feature, which this app's flashcards store doesn't have. Cards are
// seeded flat, same as any other auto-enrolled card.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { loadFlashcards, saveFlashcards, type FlashcardEntry } from "@/lib/flashcards/store";

type DeckCard = { kana: string; romaji: string };
type Deck = { name: string; cards: DeckCard[] };

const JA_ALPHABET_DECKS: Deck[] = [
  {
    name: "Hiragana: Vowels",
    cards: [
      { kana: "あ", romaji: "a" },
      { kana: "い", romaji: "i" },
      { kana: "う", romaji: "u" },
      { kana: "え", romaji: "e" },
      { kana: "お", romaji: "o" },
    ],
  },
  {
    name: "Hiragana: K & S Rows",
    cards: [
      { kana: "か", romaji: "ka" },
      { kana: "き", romaji: "ki" },
      { kana: "く", romaji: "ku" },
      { kana: "け", romaji: "ke" },
      { kana: "こ", romaji: "ko" },
      { kana: "さ", romaji: "sa" },
      { kana: "し", romaji: "shi" },
      { kana: "す", romaji: "su" },
      { kana: "せ", romaji: "se" },
      { kana: "そ", romaji: "so" },
    ],
  },
  {
    name: "Hiragana: T & N Rows",
    cards: [
      { kana: "た", romaji: "ta" },
      { kana: "ち", romaji: "chi" },
      { kana: "つ", romaji: "tsu" },
      { kana: "て", romaji: "te" },
      { kana: "と", romaji: "to" },
      { kana: "な", romaji: "na" },
      { kana: "に", romaji: "ni" },
      { kana: "ぬ", romaji: "nu" },
      { kana: "ね", romaji: "ne" },
      { kana: "の", romaji: "no" },
    ],
  },
  {
    name: "Hiragana: H & M Rows",
    cards: [
      { kana: "は", romaji: "ha" },
      { kana: "ひ", romaji: "hi" },
      { kana: "ふ", romaji: "fu" },
      { kana: "へ", romaji: "he" },
      { kana: "ほ", romaji: "ho" },
      { kana: "ま", romaji: "ma" },
      { kana: "み", romaji: "mi" },
      { kana: "む", romaji: "mu" },
      { kana: "め", romaji: "me" },
      { kana: "も", romaji: "mo" },
    ],
  },
  {
    name: "Hiragana: Y, R, W Rows & ん",
    cards: [
      { kana: "や", romaji: "ya" },
      { kana: "ゆ", romaji: "yu" },
      { kana: "よ", romaji: "yo" },
      { kana: "ら", romaji: "ra" },
      { kana: "り", romaji: "ri" },
      { kana: "る", romaji: "ru" },
      { kana: "れ", romaji: "re" },
      { kana: "ろ", romaji: "ro" },
      { kana: "わ", romaji: "wa" },
      { kana: "を", romaji: "o" },
      { kana: "ん", romaji: "n" },
    ],
  },
  {
    name: "Hiragana: Voiced & P Sounds",
    cards: [
      { kana: "が", romaji: "ga" },
      { kana: "ぎ", romaji: "gi" },
      { kana: "ぐ", romaji: "gu" },
      { kana: "げ", romaji: "ge" },
      { kana: "ご", romaji: "go" },
      { kana: "ざ", romaji: "za" },
      { kana: "じ", romaji: "ji" },
      { kana: "ず", romaji: "zu" },
      { kana: "ぜ", romaji: "ze" },
      { kana: "ぞ", romaji: "zo" },
      { kana: "だ", romaji: "da" },
      { kana: "で", romaji: "de" },
      { kana: "ど", romaji: "do" },
      { kana: "ば", romaji: "ba" },
      { kana: "び", romaji: "bi" },
      { kana: "ぶ", romaji: "bu" },
      { kana: "べ", romaji: "be" },
      { kana: "ぼ", romaji: "bo" },
      { kana: "ぱ", romaji: "pa" },
      { kana: "ぴ", romaji: "pi" },
      { kana: "ぷ", romaji: "pu" },
      { kana: "ぺ", romaji: "pe" },
      { kana: "ぽ", romaji: "po" },
    ],
  },
  {
    name: "Hiragana: Combination Sounds",
    cards: [
      { kana: "きゃ", romaji: "kya" },
      { kana: "きゅ", romaji: "kyu" },
      { kana: "きょ", romaji: "kyo" },
      { kana: "しゃ", romaji: "sha" },
      { kana: "しゅ", romaji: "shu" },
      { kana: "しょ", romaji: "sho" },
      { kana: "ちゃ", romaji: "cha" },
      { kana: "ちゅ", romaji: "chu" },
      { kana: "ちょ", romaji: "cho" },
    ],
  },
  {
    name: "Katakana: Vowels",
    cards: [
      { kana: "ア", romaji: "a" },
      { kana: "イ", romaji: "i" },
      { kana: "ウ", romaji: "u" },
      { kana: "エ", romaji: "e" },
      { kana: "オ", romaji: "o" },
    ],
  },
  {
    name: "Katakana: K & S Rows",
    cards: [
      { kana: "カ", romaji: "ka" },
      { kana: "キ", romaji: "ki" },
      { kana: "ク", romaji: "ku" },
      { kana: "ケ", romaji: "ke" },
      { kana: "コ", romaji: "ko" },
      { kana: "サ", romaji: "sa" },
      { kana: "シ", romaji: "shi" },
      { kana: "ス", romaji: "su" },
      { kana: "セ", romaji: "se" },
      { kana: "ソ", romaji: "so" },
    ],
  },
  {
    name: "Katakana: T & N Rows",
    cards: [
      { kana: "タ", romaji: "ta" },
      { kana: "チ", romaji: "chi" },
      { kana: "ツ", romaji: "tsu" },
      { kana: "テ", romaji: "te" },
      { kana: "ト", romaji: "to" },
      { kana: "ナ", romaji: "na" },
      { kana: "ニ", romaji: "ni" },
      { kana: "ヌ", romaji: "nu" },
      { kana: "ネ", romaji: "ne" },
      { kana: "ノ", romaji: "no" },
    ],
  },
  {
    name: "Katakana: H & M Rows",
    cards: [
      { kana: "ハ", romaji: "ha" },
      { kana: "ヒ", romaji: "hi" },
      { kana: "フ", romaji: "fu" },
      { kana: "ヘ", romaji: "he" },
      { kana: "ホ", romaji: "ho" },
      { kana: "マ", romaji: "ma" },
      { kana: "ミ", romaji: "mi" },
      { kana: "ム", romaji: "mu" },
      { kana: "メ", romaji: "me" },
      { kana: "モ", romaji: "mo" },
    ],
  },
  {
    name: "Katakana: Y, R, W Rows & ン",
    cards: [
      { kana: "ヤ", romaji: "ya" },
      { kana: "ユ", romaji: "yu" },
      { kana: "ヨ", romaji: "yo" },
      { kana: "ラ", romaji: "ra" },
      { kana: "リ", romaji: "ri" },
      { kana: "ル", romaji: "ru" },
      { kana: "レ", romaji: "re" },
      { kana: "ロ", romaji: "ro" },
      { kana: "ワ", romaji: "wa" },
      { kana: "ヲ", romaji: "o" },
      { kana: "ン", romaji: "n" },
    ],
  },
  {
    name: "Katakana: Voiced Sounds",
    cards: [
      { kana: "ガ", romaji: "ga" },
      { kana: "ギ", romaji: "gi" },
      { kana: "グ", romaji: "gu" },
      { kana: "ゲ", romaji: "ge" },
      { kana: "ゴ", romaji: "go" },
      { kana: "ザ", romaji: "za" },
      { kana: "ジ", romaji: "ji" },
      { kana: "ズ", romaji: "zu" },
      { kana: "ゼ", romaji: "ze" },
      { kana: "ゾ", romaji: "zo" },
      { kana: "ダ", romaji: "da" },
      { kana: "デ", romaji: "de" },
      { kana: "ド", romaji: "do" },
      { kana: "バ", romaji: "ba" },
      { kana: "ビ", romaji: "bi" },
      { kana: "ブ", romaji: "bu" },
      { kana: "ベ", romaji: "be" },
      { kana: "ボ", romaji: "bo" },
      { kana: "パ", romaji: "pa" },
      { kana: "ピ", romaji: "pi" },
      { kana: "プ", romaji: "pu" },
      { kana: "ペ", romaji: "pe" },
      { kana: "ポ", romaji: "po" },
    ],
  },
  {
    name: "Katakana: Common Loanwords",
    cards: [
      { kana: "コーヒー", romaji: "koohii -- coffee" },
      { kana: "テレビ", romaji: "terebi -- TV" },
      { kana: "カメラ", romaji: "kamera -- camera" },
      { kana: "レストラン", romaji: "resutoran -- restaurant" },
      { kana: "ホテル", romaji: "hoteru -- hotel" },
      { kana: "タクシー", romaji: "takushii -- taxi" },
      { kana: "インターネット", romaji: "intaanetto -- internet" },
      { kana: "パーティー", romaji: "paateii -- party" },
      { kana: "スーパー", romaji: "suupaa -- supermarket" },
      { kana: "ファイル", romaji: "fairu -- file" },
    ],
  },
];

const SEEDED_KEY = "deepend-ja-alphabet-decks-seeded-v1";

/**
 * Seeds the decks above into the shared flashcards store, once ever, per
 * install -- safe to call every time the Flashcards screen mounts with
 * Japanese selected. After the first run, the sentinel key below
 * short-circuits it immediately, so a learner deleting or editing a
 * seeded card (they're ordinary cards afterward, no different from a
 * lesson-starred one) is respected instead of the deck silently
 * reappearing on a later visit.
 */
export async function seedJapaneseAlphabetDecks(): Promise<void> {
  const already = await readJSON<boolean>(SEEDED_KEY, false);
  if (already) return;

  const cardMap = await loadFlashcards();
  const baseTime = Date.now();

  JA_ALPHABET_DECKS.forEach((deck, deckIndex) => {
    deck.cards.forEach((card, cardIndex) => {
      const id = `ja-deck::${deckIndex}::${cardIndex}`;
      if (cardMap[id]) return;
      const entry: FlashcardEntry = {
        id,
        es: card.kana,
        en: card.romaji,
        pos: "",
        level: "JA-Alphabets",
        levelPath: "ja",
        lessonSlug: "",
        lessonTitle: `${deck.name} deck`,
        addedAt: baseTime - deckIndex * 1000 - cardIndex,
        source: "lesson",
      };
      cardMap[id] = entry;
    });
  });

  await saveFlashcards(cardMap);
  await writeJSON(SEEDED_KEY, true);
}
