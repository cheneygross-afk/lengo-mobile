// Synced from cheneygross-afk/lengo:src/lib/lessons/targetTask.ts by scripts/sync-content.mjs -- edit it there, not here.
// A "translate" item whose source is a sentence in the language being
// learned, with a task prompt ("Make it negative.", "Correct the sentence.",
// "Corrige la phrase."), is a transform or correction task, not a
// translation from English: its source should read and sound like the
// target language. Spanish has its own check (it also strips framing like
// "Corrige: «…»"); this one covers the other courses.

const TASK_PROMPT =
  /^(make|change|turn|rewrite|switch|fix|replace|correct|combine|join|put|transform|use|corrige|corrigez|transforme|transformez|mets|mettez|remplace|remplacez|réécris|réécrivez|reformule|korrigiere|korrigieren|verbessere|forme|setze|ersetze|schreibe|corrija|reescreva|troque|substitua|passe|coloque|correggi|trasforma|riscrivi|sostituisci|metti|volgi|unisci)\b/i;

// Chinese task prompts from C1 up: 改写 (rewrite), 改正 / 改错 (correct).
const ZH_TASK_PROMPT = /^(改写|改正|改错|改成|换成)/;

const HAN_KANA = /[぀-ヿ㐀-鿿]/;
const HANGUL = /[가-힯]/;

export function isTargetTask(prompt: string, source: string, lang: string): boolean {
  if (!TASK_PROMPT.test(prompt.trim()) && !ZH_TASK_PROMPT.test(prompt.trim())) return false;
  if (lang.startsWith("zh") || lang.startsWith("ja")) return HAN_KANA.test(source);
  if (lang.startsWith("ko")) return HANGUL.test(source);
  return /^(fr|de|pt|it)/.test(lang);
}
