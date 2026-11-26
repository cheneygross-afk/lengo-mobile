// Asks the website's /api/check-answer (answerCheck.ts) whether a typed
// answer the grader marked wrong is another correct answer. Null when it
// can't say (signed out, offline, slow): the grader's verdict then stands.
import { supabase } from "@/lib/supabase/client";
import type { AnswerCheckRequest, AnswerCheckResult } from "./answerCheck";

const API_URL = "https://deependspanish.com/api/check-answer";

export async function checkAnswerWithClaude(req: AnswerCheckRequest): Promise<AnswerCheckResult | null> {
  try {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return null;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 14000);
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(req),
      signal: controller.signal,
    }).finally(() => clearTimeout(timer));
    if (!res.ok) return null;
    const json = await res.json();
    return json?.ok && typeof json.correct === "boolean" ? { correct: json.correct, note: json.note } : null;
  } catch {
    return null;
  }
}
