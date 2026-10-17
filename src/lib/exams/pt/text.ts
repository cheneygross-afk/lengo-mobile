// Synced from cheneygross-afk/lengo:src/lib/exams/pt/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// Small helpers for writing the Portuguese exam data: a text of several
// paragraphs, and the standard wording shared by every Celpe-Bras
// practice exam (the real exam's enunciados repeat these lines).

/** Paragraphs joined with a blank line, as the exam's text blocks show them. */
export const paras = (...p: string[]): string => p.join("\n\n");

/** The English note on Tarefa 1: the real exam plays a video. */
export const VIDEO_NOTE =
  "In the real exam, \"Tarefa 1\" starts from a short video, shown twice to the whole room; here you hear its soundtrack, twice in timed mode, and the transcript appears when you finish the paper.";

/** The English note on Tarefa 2. */
export const AUDIO_NOTE =
  "In the real exam this recording is played twice to the whole room; here you can play it twice in timed mode, and the transcript appears when you finish the paper.";

/** The English note on the first stage of the Parte Individual. */
export const INTERVIEW_NOTE =
  "In the real exam the examiner starts from the questionnaire you filled in when you registered. Answer about yourself, out loud, for about five minutes.";

/** The English note on each elemento provocador. */
export const ELEMENT_NOTE =
  "In the real exam this is a printed page with a photo and a short text; here the photo is described. Read it for about a minute, then talk with the examiner for about four.";

export const INTERVIEW_INSTRUCTIONS =
  "Nos primeiros cinco minutos, o entrevistador conversa com você sobre seus interesses, seus estudos, seu trabalho e seus planos, a partir das informações do seu questionário de inscrição. Responda com naturalidade e desenvolva suas respostas.";

export const ELEMENT_INSTRUCTIONS =
  "Leia o elemento provocador em silêncio por cerca de um minuto. Depois, o entrevistador vai pedir que você fale sobre ele e vai fazer perguntas. Converse com ele por cerca de quatro minutos.";
