// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u01-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u01 (legal English): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const kw = (key: string, original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, explanation };

const mc = (question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "multiple-choice", question, options, correctIndex, explanation,
});

const wo = (sentence: string, translation: string, explanation: string, alts: string[] = []): Ex =>
  alts.length
    ? { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, altOrders: alts.map((a) => a.split(" ")), explanation }
    : { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, explanation };

const dt = (audio: string, explanation: string): Ex => ({ type: "dictation", audio, explanation });

const lc = (audio: string, question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "listen-choose", audio, question, options, correctIndex, explanation,
});

const sp = (text: string, spanish: string, tip: string, explanation: string): Ex => ({
  type: "speak", text, prompt: `Say in English: «${spanish}»`, tip, explanation,
});

const mt = (instructions: string, pairs: [string, string][], explanation: string): Ex => ({
  type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation,
});

const drill = (
  slug: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Ex[],
): Lesson => {
  const seconds = exercises.reduce((t, e) => t + SECONDS[e.type], 0) + 45;
  return {
    slug,
    level: "EN-C2",
    number: 1,
    title,
    summary,
    duration: `${Math.round(seconds / 60)} min`,
    sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
    exercises,
  };
};

export const EN_C2_U01_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Legalese formulas, shall/may/must, who's who, the courtroom
  // ---------------------------------------------------------------------
  drill(
    "en-c2-legal-unit-drill-1",
    "Drill: Legal Formulas, Drafting Modals and the People in a Case",
    "Read and produce legal formulas such as hereby, pursuant to and notwithstanding, use shall, may and must exactly as drafters do, and name the people and steps of a court case without the Spanish false friends.",
    "Recap: formulas, modals and the courtroom",
    [
      "Legal formulas leave no room for a second reading: \"hereby\" (by this document), \"herein\" (in this document), \"thereof\" (of it), \"pursuant to\" (under), \"in accordance with\" (complying with), \"subject to\" (the other provision wins) and \"notwithstanding\" (this provision wins). Never *according with, *in base to or *in virtue of, and never *the present contract for «el presente contrato».",
      "In drafting, \"shall\" imposes a duty, \"may\" grants a permission, \"shall not\" and \"may not\" forbid, and \"is not required to\" or \"need not\" only removes a duty. Plain English uses \"must\" and \"must not\" and keeps \"will\" for genuine future events.",
      "In court: plaintiff (US) or claimant (UK), defendant, the prosecution, attorney, solicitor, barrister, counsel, magistrate (a low-level judge), jury, witness, clerk. «Proceso» is proceedings or trial, «sentencia» is a judgment or ruling (a sentence is the punishment), and you bring a case, report a crime, press charges and plead guilty.",
    ],
    [
      ["The Licensee shall notify the Licensor of any defect forthwith.", "El licenciatario notificará de inmediato al licenciante cualquier defecto."],
      ["Subject to clause 7, the Buyer may return the goods within 10 days.", "Con sujeción a la cláusula 7, el comprador podrá devolver la mercancía en un plazo de 10 días."],
      ["The claimant brought a case against the builder.", "La demandante puso una demanda contra el constructor."],
      ["The defendant pleaded guilty to two of the charges.", "El acusado se declaró culpable de dos de los cargos."],
    ],
    [
      fb(
        "I ___ give notice of my intention to vacate the apartment on June 30.",
        "hereby",
        "[Por la presente] notifico mi intención de desocupar el departamento el 30 de junio.",
        [],
        "Performative \"hereby\" means «por la presente»: the act happens by means of this statement. It goes before the main verb (\"I hereby give notice\", \"I hereby resign\"). *By the present is a calque.",
      ),
      fb(
        "The warehouse and all the goods stored ___ are insured against fire.",
        "therein",
        "El almacén y toda la mercancía almacenada [en él] están asegurados contra incendios.",
        [],
        "The \"there\" words point back to something already mentioned: \"therein\" = in it (the warehouse). \"Herein\" would mean in this document, which makes no sense here.",
      ),
      mc(
        "Which phrase means «en lo sucesivo» in \"Brightline Inc. (___ referred to as the Supplier)\"?",
        ["hereinafter", "thereof", "whereby", "hereto"],
        0,
        "\"Hereinafter\" = from now on in this document; it introduces a defined term. \"Thereof\" means of it, \"whereby\" means by which, and \"hereto\" means to this document (\"the parties hereto\").",
      ),
      tr(
        "El presente contrato entra en vigor el 1 de marzo.",
        "This Agreement comes into force on March 1.",
        [
          "This agreement comes into force on March 1.",
          "This contract comes into force on March 1.",
          "This Agreement takes effect on March 1.",
          "This agreement takes effect on March 1.",
          "This contract takes effect on March 1.",
          "This Agreement enters into force on March 1.",
          "This Agreement comes into force on 1 March.",
          "This Agreement takes effect on 1 March.",
        ],
        "«El presente contrato» is \"this Agreement\" or \"this contract\". *The present contract is a classic calque: in English \"present\" in this position sounds like «actual», not «este».",
      ),
      fb(
        "All refunds will be processed ___ the store's returns policy.",
        "in accordance with",
        "Todos los reembolsos se tramitarán [conforme a] la política de devoluciones de la tienda.",
        [],
        "Conduct that complies with a rule is done \"in accordance with\" it. Avoid the hybrids *according with and *in accordance to. \"According to\" reports what a source says (\"according to the policy, refunds take ten days\").",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The fee was calculated on the basis of the hours worked.",
          "The fee was calculated in base to the hours worked.",
          "The fee was calculated in base of the hours worked.",
          "The fee was calculated in accordance to the hours worked.",
        ],
        0,
        "«En base a» is \"on the basis of\" or \"based on\". *In base to/of are word-for-word calques, and the correct formula is \"in accordance with\", never *in accordance to.",
      ),
      mc(
        "A contract says: \"Notwithstanding clause 4, the Employer may change the shift pattern at short notice.\" What does this mean?",
        [
          "If this sentence and clause 4 conflict, this sentence wins.",
          "If this sentence and clause 4 conflict, clause 4 wins.",
          "The Employer may change shifts only when clause 4 allows it.",
          "Clause 4 has been removed from the contract.",
        ],
        0,
        "\"Notwithstanding X\" = despite X: this provision overrides X. The opposite formula, \"subject to clause 4\", would make clause 4 prevail.",
      ),
      kw(
        "SUBJECT",
        "The job offer depends on a satisfactory background check.",
        "The job offer is ___ a satisfactory background check.",
        "subject to",
        [],
        "\"Subject to\" = depending on, or limited by. «Sujeto a» is a true friend here, but the preposition is always \"to\".",
      ),
      tr(
        "En virtud de su cargo, la directora firma todos los contratos.",
        "By virtue of her position, the director signs all contracts.",
        [
          "By virtue of her position, the director signs all the contracts.",
          "By virtue of her position, the director signs every contract.",
          "By virtue of her post, the director signs all contracts.",
          "By virtue of her position, the director signs all of the contracts.",
        ],
        "«En virtud de» = \"by virtue of\" (because of, by the power of). *In virtue of is a Spanish-shaped error. In a legal sense \"under\" or \"pursuant to\" also work: \"under Section 3\".",
      ),
      mc(
        "Which is the best plain-English version of \"In the event that the device malfunctions, notify the Company forthwith\"?",
        [
          "If the device stops working, tell us immediately.",
          "If the device stops working, you will tell us soon.",
          "When the device breaks, you can tell us later.",
          "If the device stops working, you may tell us.",
        ],
        0,
        "\"In the event that\" > \"if\", \"forthwith\" > \"immediately\", and the duty becomes an imperative. A plain version must keep the meaning: \"soon\", \"later\" or \"may\" weaken the obligation.",
      ),
      wo(
        "The Tenant shall not alter the Property without the Landlord's written consent.",
        "El arrendatario no podrá modificar el inmueble sin el consentimiento por escrito del arrendador.",
        "\"Shall not\" + base verb forbids. The repeated, capitalized defined terms (the Tenant, the Property, the Landlord) replace pronouns so nobody can misread who is meant.",
      ),
      fb(
        "Each employee ___ to 15 days' paid leave per year.",
        "is entitled",
        "Cada empleado [tiene derecho] a 15 días de vacaciones retribuidas al año.",
        [],
        "\"Be entitled to\" states a right. Note the possessive apostrophe in \"15 days' paid leave\". *Has right to is a calque of «tiene derecho a».",
      ),
      tr(
        "El proveedor entregará los equipos en un plazo de 15 días.",
        "The Supplier shall deliver the equipment within 15 days.",
        [
          "The supplier shall deliver the equipment within 15 days.",
          "The Supplier must deliver the equipment within 15 days.",
          "The supplier must deliver the equipment within 15 days.",
          "The Supplier shall deliver the equipment within fifteen days.",
        ],
        "In a contract, the Spanish future («entregará») imposes a duty, so English uses \"shall\" (or plain-language \"must\"). \"Will deliver\" would read as a prediction or a promise, not an obligation. «Equipo» as hardware is uncountable \"equipment\".",
      ),
      mc(
        "Which clause forbids subletting?",
        [
          "The Tenant may not sublet the Property.",
          "The Tenant need not sublet the Property.",
          "The Tenant is not required to sublet the Property.",
          "The Tenant may sublet the Property.",
        ],
        0,
        "\"May not\" (like \"shall not\") denies permission. \"Need not\" and \"is not required to\" only remove a duty: the tenant would still be free to sublet.",
      ),
      tr(
        "Los solicitantes no tienen que traducir sus títulos.",
        "Applicants need not translate their degrees.",
        [
          "Applicants are not required to translate their degrees.",
          "Applicants don't have to translate their degrees.",
          "Applicants need not translate their diplomas.",
          "Applicants are not required to translate their diplomas.",
          "Applicants do not need to translate their degrees.",
          "Applicants do not need to translate their diplomas.",
        ],
        "«No tienen que» is the absence of a duty: \"need not\", \"are not required to\", \"don't have to\". \"Must not\" would forbid the translation, which is not what the Spanish says.",
      ),
      tr(
        "Prohibido estacionar frente a la salida de emergencia.",
        "You must not park in front of the emergency exit.",
        [
          "You may not park in front of the emergency exit.",
          "Do not park in front of the emergency exit.",
          "No parking in front of the emergency exit.",
          "Parking in front of the emergency exit is prohibited.",
          "Parking in front of the emergency exit is not permitted.",
        ],
        "A prohibition is \"must not\" or \"may not\". *You don't have to park here would only say that parking is optional: the classic Spanish-speaker confusion between «no tener que» and «no deber».",
      ),
      kw(
        "MUST",
        "The Borrower shall repay the loan in 12 monthly installments.",
        "You ___ the loan in 12 monthly installments.",
        "must repay",
        ["must pay back"],
        "Plain-language drafting replaces \"shall\" with \"must\" for duties and addresses the reader as \"you\". Keep \"will\" for real future events (\"We will send you a statement\").",
      ),
      dt(
        "Either party may terminate this agreement by giving thirty days' notice.",
        "\"May\" grants a right, not a duty. Listen for the possessive in \"thirty days' notice\": the s is the plural, the apostrophe comes after it.",
      ),
      lc(
        "The Tenant is not required to repaint the walls at the end of the tenancy.",
        "What does the clause say?",
        [
          "Repainting is optional for the tenant",
          "The tenant is forbidden to repaint",
          "The tenant must repaint",
          "The landlord must repaint",
        ],
        0,
        "\"Is not required to\" removes the duty but forbids nothing: the tenant may repaint or not. A prohibition would be \"shall not\" or \"may not\".",
      ),
      mt(
        "Match each term with its meaning.",
        [
          ["claimant", "«demandante» in England and Wales"],
          ["the prosecution", "the side bringing criminal charges"],
          ["counsel", "the lawyers representing a party in court"],
          ["magistrate", "a low-level, often lay judge in England"],
          ["juror", "one member of a jury"],
        ],
        "\"Plaintiff\" is the US (and older UK) word; \"claimant\" has been official in England since 1999. An English magistrate is near the bottom of the system, unlike a Spanish «magistrado».",
      ),
      tr(
        "La acusación no pudo demostrar que el acusado estuviera en el lugar de los hechos.",
        "The prosecution could not prove that the defendant was at the scene.",
        [
          "The prosecution could not prove that the defendant had been at the scene.",
          "The prosecution was unable to prove that the defendant was at the scene.",
          "The prosecution failed to prove that the defendant was at the scene.",
          "The prosecution could not prove that the accused was at the scene.",
          "The prosecution couldn't prove the defendant was at the scene.",
          "The prosecution could not prove that the defendant was at the scene of the crime.",
        ],
        "«La acusación» is \"the prosecution\" (not *the accusation), and «el acusado» is \"the defendant\" or \"the accused\". English uses the indicative after \"prove that\".",
      ),
      mc(
        "In England, which lawyer would normally draft your will and handle the sale of your house?",
        ["a solicitor", "a barrister", "a magistrate", "a clerk of the court"],
        0,
        "Solicitors deal with clients directly: advice, contracts, wills and property. Barristers specialize in advocacy in the higher courts and are usually instructed through a solicitor.",
      ),
      tr(
        "La sentencia del Tribunal Supremo se dio a conocer ayer.",
        "The Supreme Court ruling was announced yesterday.",
        [
          "The Supreme Court's ruling was announced yesterday.",
          "The Supreme Court judgment was announced yesterday.",
          "The Supreme Court's judgment was announced yesterday.",
          "The Supreme Court decision was announced yesterday.",
          "The Supreme Court's decision was announced yesterday.",
          "The Supreme Court ruling was made public yesterday.",
          "The Supreme Court handed down its ruling yesterday.",
          "The Supreme Court handed down its judgment yesterday.",
        ],
        "«Sentencia» as a court's decision is a \"ruling\", \"judgment\" or \"decision\". An English \"sentence\" is only the punishment for a crime, so *the Supreme Court sentence is wrong.",
      ),
      tr(
        "La jueza lo condenó a tres años de prisión.",
        "The judge sentenced him to three years in prison.",
        [
          "The judge sentenced him to three years' imprisonment.",
          "The judge sentenced him to three years of prison.",
          "The judge sentenced him to three years in jail.",
        ],
        "«Condenar a X años» is \"sentence someone to\". *Condemned him to three years sounds archaic or moral, and \"convicted\" refers to the guilty verdict, not the punishment.",
      ),
      tr(
        "La defensa presentó pruebas nuevas.",
        "The defense presented new evidence.",
        [
          "The defense submitted new evidence.",
          "The defense produced new evidence.",
          "The defence presented new evidence.",
          "The defense introduced new evidence.",
          "The defense presented fresh evidence.",
        ],
        "Courtroom «pruebas» = \"evidence\", an uncountable noun: no plural and no \"an\". For one item say \"a piece of evidence\". *New evidences is the classic error.",
      ),
      tr(
        "Denuncié el robo de mi celular a la policía.",
        "I reported the theft of my cell phone to the police.",
        [
          "I reported the theft of my phone to the police.",
          "I reported the theft of my cellphone to the police.",
          "I reported the theft of my mobile phone to the police.",
          "I reported my cell phone stolen to the police.",
        ],
        "To tell the police about a crime is to \"report\" it. *I put a denunciation is a calque of «poner una denuncia»; English \"denunciation\" means public condemnation.",
      ),
      wo(
        "The defendant pleaded not guilty to all the charges.",
        "El acusado se declaró no culpable de todos los cargos.",
        "\"Plead (not) guilty to\" + charges. *Declared himself not guilty is a calque of «se declaró». In the US the past \"pled\" is also common.",
      ),
      fb(
        "Objection ___. The witness may answer the question.",
        "overruled",
        "Objeción: [no ha lugar]. El testigo puede responder a la pregunta.",
        [],
        "The judge \"overrules\" an objection to reject it («no ha lugar») and \"sustains\" it to accept it («ha lugar»). Since the witness may answer, the objection was rejected.",
      ),
      mc(
        "A British newspaper reports: \"Bailiffs arrived to seize the family's car.\" Who are the bailiffs here?",
        [
          "Enforcement agents who collect debts and take goods",
          "Courtroom officers who keep order during a trial",
          "Members of the jury",
          "Lawyers for the creditor",
        ],
        0,
        "In England a bailiff is an enforcement agent; the courtroom job is done by the \"usher\". In the US, by contrast, the \"bailiff\" keeps order in court.",
      ),
      tr(
        "Mi vecina prefirió llegar a un acuerdo extrajudicial antes que ir a juicio.",
        "My neighbor preferred to settle out of court rather than go to trial.",
        [
          "My neighbor chose to settle out of court rather than go to trial.",
          "My neighbor preferred to settle out of court rather than going to trial.",
          "My neighbour preferred to settle out of court rather than go to trial.",
          "My neighbor decided to settle out of court rather than go to trial.",
          "My neighbor preferred settling out of court to going to trial.",
        ],
        "«Llegar a un acuerdo extrajudicial» is the fixed collocation \"settle out of court\". «Juicio» is \"trial\"; *go to judgment is not English.",
      ),
      tr(
        "El jurado tardó tres días en llegar a un veredicto.",
        "The jury took three days to reach a verdict.",
        [
          "The jury took three days to return a verdict.",
          "It took the jury three days to reach a verdict.",
          "It took the jury three days to return a verdict.",
        ],
        "A jury \"reaches\" or \"returns\" a verdict. «Tardar X en» is \"take X to\" + infinitive, not *delay three days in.",
      ),
      sp(
        "Pursuant to clause 6, the landlord may inspect the property on 24 hours' notice.",
        "Conforme a la cláusula 6, el arrendador podrá inspeccionar el inmueble con un preaviso de 24 horas.",
        "Stress \"pur-SU-ant\" and keep \"to\" weak: /pərˈsuːənt tə/.",
        "\"Pursuant to\" = under, as allowed by. \"May\" grants the landlord a right; \"on 24 hours' notice\" fixes the condition.",
      ),
      sp(
        "The court adjourned the hearing until Thursday.",
        "El tribunal aplazó la audiencia hasta el jueves.",
        "\"Adjourned\" is /əˈdʒɜːrnd/: the d in the spelling is silent.",
        "\"Adjourn\" = «aplazar, suspender». It has nothing to do with «adjuntar» (\"attach\").",
      ),
      dt(
        "The defendant was acquitted of fraud but convicted of forgery.",
        "\"Acquitted of\" («absuelto de») and \"convicted of\" («condenado por») both take \"of\". Note the double t in \"acquitted\".",
      ),
      lc(
        "She has no previous convictions.",
        "What does this mean?",
        [
          "No tiene antecedentes penales.",
          "No tiene convicciones previas.",
          "No ha sido acusada nunca.",
          "No tiene ninguna sentencia firme a favor.",
        ],
        0,
        "\"Previous convictions\" = «antecedentes penales» (also \"a criminal record\"). In law \"conviction\" is a guilty finding, not a belief.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The judge sentenced him to five years after the jury found him guilty.",
          "The judge condemned him to five years after the jury found him guilty.",
          "The judge sentenced him to five years after the jury declared him culpable.",
          "The judge gave a sentence that the contract was void.",
        ],
        0,
        "The jury finds someone guilty (the verdict), then the judge sentences (the punishment). *Condemned and *culpable are Spanish-shaped, and a decision on a contract is a \"ruling\" or \"judgment\", not a sentence.",
      ),
      tr(
        "El acusado se declaró culpable de todos los cargos.",
        "The defendant pleaded guilty to all the charges.",
        [
          "The defendant pleaded guilty to all charges.",
          "The defendant pled guilty to all the charges.",
          "The defendant pled guilty to all charges.",
          "The accused pleaded guilty to all the charges.",
          "The accused pleaded guilty to all charges.",
          "The defendant pleaded guilty to all of the charges.",
        ],
        "«Declararse culpable» = \"plead guilty to\". *Declared himself guilty is the classic calque. A guilty plea usually means there is no full trial.",
      ),
      dt(
        "The witness took the stand and testified for nearly an hour.",
        "In the US a witness \"takes the stand\" (UK \"goes into the witness box\") and \"testifies\", that is, gives evidence under oath.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Plain English rewrites, Latin, near-synonyms, official
  // passives and the subjunctive, plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-legal-unit-drill-2",
    "Drill: Rewrites, Latin, Near-Synonyms and Official Grammar",
    "Move between legalese and plain English, use Latin terms with their real English meaning, choose between sue, prosecute, charge and accuse or guilty and liable, and write official passives and subjunctives, mixing the whole unit.",
    "Recap: rewriting, Latin and official grammar",
    [
      "Formal drafting turns verbs into nouns (\"failure to comply\", \"upon receipt of\", \"non-payment\") and hides the agent with passives (\"Late entries will not be accepted\"); plain English restores the verb and the person (\"If you do not pay, we will...\"). Formulas: \"without prejudice to\", \"for the avoidance of doubt\", \"unless otherwise agreed\".",
      "Latin terms keep their English meaning: \"bona fide\" (genuine), \"de facto\" (in practice), \"ad hoc\" (for one purpose, not «adecuado»), \"per se\" (in itself), \"ex officio\" (by virtue of office, not «de oficio»). You sue someone for, prosecute someone for, charge someone with, accuse someone of; you are guilty of a crime, liable for damage and responsible for (never *of) a mess.",
      "Orders use the base form for every person (\"ordered that he be released\", \"that the name not be published\"); impersonal sentences need \"it\" (\"It is required that...\") or a personal passive (\"Applicants are required to...\"); and reports hedge with \"is alleged to have\" + participle.",
    ],
    [
      ["Upon receipt of your payment, your account will be reactivated.", "Una vez recibido su pago, se reactivará su cuenta."],
      ["The museum director is an ex officio member of the board.", "La directora del museo es miembro nato del consejo."],
      ["The landlord was found liable for the tenant's injuries.", "El dueño del departamento fue declarado responsable de las lesiones del inquilino."],
      ["The court ordered that the documents be returned within a week.", "El tribunal ordenó que los documentos se devolvieran en una semana."],
    ],
    [
      kw(
        "FAILURE",
        "If you do not renew your license, it will be canceled.",
        "___ to renew your license will result in its cancellation.",
        "Failure",
        [],
        "Nominal style: \"if you do not renew\" becomes \"failure to renew\". The noun takes \"to\" + infinitive; *Failure of renewing is not idiomatic.",
      ),
      fb(
        "Upon ___ of your application, we will send you a reference number.",
        "receipt",
        "Una vez [recibida] su solicitud, le enviaremos un número de referencia.",
        [],
        "The noun of \"receive\" in this formula is \"receipt\" (\"upon receipt of\", \"within 14 days of receipt\"). *Upon reception of is a calque of «recepción»; \"reception\" is a front desk or a party.",
      ),
      tr(
        "No se admitirán solicitudes incompletas.",
        "Incomplete applications will not be accepted.",
        [
          "Incomplete applications shall not be accepted.",
          "Incomplete applications won't be accepted.",
          "We will not accept incomplete applications.",
          "Incomplete applications will not be admitted.",
        ],
        "Impersonal «se» becomes an agentless passive with the noun as subject. *It will not be admitted incomplete applications is a calque; the plain version uses \"we\".",
      ),
      tr(
        "Se ruega a los clientes que no dejen su equipaje sin vigilancia.",
        "Customers are requested not to leave their luggage unattended.",
        [
          "Customers are asked not to leave their luggage unattended.",
          "Customers are requested not to leave their baggage unattended.",
          "Customers are asked not to leave their baggage unattended.",
          "Customers are kindly requested not to leave their luggage unattended.",
          "Please do not leave your luggage unattended.",
        ],
        "«Se ruega a X que no...» is a personal passive: \"X are requested (or asked) not to\" + verb. Note the position of \"not\" before the infinitive.",
      ),
      kw(
        "WE",
        "Interest will be charged on late payments.",
        "___ interest on late payments.",
        "We will charge",
        ["We'll charge", "We shall charge"],
        "Plain English turns the agentless passive around and names the agent: \"we\" for the company, \"you\" for the reader. The meaning, including the future, must survive.",
      ),
      fb(
        "This policy is ___ prejudice to your statutory rights.",
        "without",
        "Esta política se entiende [sin] perjuicio de sus derechos legales.",
        [],
        "\"Without prejudice to\" = it does not limit or affect: you keep your statutory rights as well. A true friend of «sin perjuicio de».",
      ),
      tr(
        "A efectos aclaratorios, el precio no incluye impuestos.",
        "For the avoidance of doubt, the price does not include taxes.",
        [
          "For the avoidance of doubt, the price does not include tax.",
          "For the avoidance of doubt, the price excludes taxes.",
          "For the avoidance of doubt, the price excludes tax.",
          "For the avoidance of doubt, the price is exclusive of tax.",
          "For the avoidance of doubt, the price is exclusive of taxes.",
          "To be clear, the price does not include taxes.",
          "To be clear, the price does not include tax.",
        ],
        "\"For the avoidance of doubt\" introduces a clarification that is stated anyway. Plain English says \"To be clear,\". *For avoiding doubts is not the formula.",
      ),
      tr(
        "Salvo pacto en contrario, la garantía es de dos años.",
        "Unless otherwise agreed, the warranty is for two years.",
        [
          "Unless otherwise agreed, the warranty lasts two years.",
          "Unless otherwise agreed, the warranty lasts for two years.",
          "Unless otherwise agreed, the guarantee is for two years.",
          "Unless otherwise agreed, the guarantee lasts two years.",
          "Unless otherwise agreed, the warranty period is two years.",
        ],
        "«Salvo pacto en contrario» = \"unless otherwise agreed\" (in writing, if the contract says so). The adverb \"otherwise\" sits before the participle; *unless agreed in contrary is a calque.",
      ),
      mc(
        "Which is the best plain-English version of \"The Tenant shall, within 7 days of receipt of a written request, provide proof of insurance\"?",
        [
          "You must show us proof of insurance within 7 days of getting our written request.",
          "You must show us proof of insurance quickly when we ask.",
          "You may show us proof of insurance within 7 days of getting our written request.",
          "You must show us proof of insurance within 7 days.",
        ],
        0,
        "A plain rewrite keeps every condition: the duty (\"must\"), the time limit (7 days) and the trigger (from receipt of a written request). \"Quickly\" loses the deadline, \"may\" turns the duty into an option, and the last version drops the trigger.",
      ),
      mt(
        "Match each Latin term with its meaning in English.",
        [
          ["bona fide", "genuine, sincere"],
          ["ad hoc", "created for one particular purpose"],
          ["per se", "in itself"],
          ["inter alia", "among other things"],
          ["quid pro quo", "a favor given in exchange for another"],
        ],
        "These meanings differ from Spanish usage in places: Spanish «ad hoc» can mean «adecuado» and «quid pro quo» can mean a mix-up, and English has neither sense.",
      ),
      mc(
        "How do you say «Llevó ropa ad hoc para la entrevista»?",
        [
          "She wore appropriate clothes for the interview.",
          "She wore ad hoc clothes for the interview.",
          "She wore bona fide clothes for the interview.",
          "She wore clothes per se for the interview.",
        ],
        0,
        "English \"ad hoc\" means improvised for one purpose (\"an ad hoc committee\"), never «adecuado». For suitable clothes say \"appropriate\" or \"suitable\".",
      ),
      tr(
        "La acusada tuvo un abogado de oficio.",
        "The defendant had a court-appointed lawyer.",
        [
          "The defendant had a public defender.",
          "The defendant had a legal aid lawyer.",
          "The accused had a court-appointed lawyer.",
          "The accused had a public defender.",
          "The defendant was represented by a court-appointed lawyer.",
          "The defendant was represented by a public defender.",
        ],
        "«Abogado de oficio» is a \"court-appointed lawyer\" (US criminal cases: \"public defender\"; UK: \"legal aid lawyer\"). *Ex officio lawyer is a false friend: \"ex officio\" means by virtue of one's position.",
      ),
      fb(
        "The tax is not the problem ___; the paperwork is.",
        "per se",
        "El impuesto no es el problema [en sí]; el papeleo sí.",
        [],
        "\"Per se\" = in itself, and it follows the word it modifies. The spelling *per say is a common mistake even among native speakers.",
      ),
      tr(
        "El vicepresidente es el líder de facto del partido.",
        "The vice president is the de facto leader of the party.",
        [
          "The vice-president is the de facto leader of the party.",
          "The vice president is the party's de facto leader.",
          "The vice-president is the party's de facto leader.",
        ],
        "\"De facto\" contrasts practice with law: he leads in practice, not officially. It goes before the noun like an adjective.",
      ),
      lc(
        "Our firm takes on several pro bono cases every year.",
        "What does the speaker mean?",
        [
          "The firm does some legal work free of charge for the public good",
          "The firm handles several cases on behalf of the state",
          "The firm takes several cases for a fixed fee",
          "The firm takes cases that are good for its reputation",
        ],
        0,
        "\"Pro bono\" work is professional work done free for the public good. It says nothing about fixed fees or the state.",
      ),
      mc(
        "Which sentence uses \"de facto\" as careful writers do?",
        [
          "No law forbids it, but the high fees amount to a de facto ban.",
          "If you sign the form, you de facto accept the conditions.",
          "The meeting ended de facto at six o'clock.",
          "He is de facto a very kind person.",
        ],
        0,
        "\"De facto\" contrasts what happens in practice with what the law says. Using it as a vague «automáticamente» or «realmente» is a common error.",
      ),
      fb(
        "The family is ___ the hospital for negligence.",
        "suing",
        "La familia [está demandando] al hospital por negligencia.",
        [],
        "A civil claim for money or another remedy is \"sue someone for\". \"Prosecute\" is criminal and done by the state, so it does not fit a family's claim.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "She accused her manager of lying about the figures.",
          "She accused her manager for lying about the figures.",
          "She charged her manager of lying about the figures.",
          "She sued her manager of lying about the figures.",
        ],
        0,
        "\"Accuse someone of\" is the general verb. \"Charge\" takes \"with\" and is done by police or prosecutors; \"sue\" takes \"for\" and is civil. *Accused for and *charged of are the usual errors.",
      ),
      tr(
        "Lo procesaron por evasión de impuestos.",
        "He was prosecuted for tax evasion.",
        [
          "They prosecuted him for tax evasion.",
          "He was prosecuted for evading taxes.",
          "He was prosecuted for evading tax.",
        ],
        "Criminal proceedings by the state: \"prosecute someone for\" an offense. «Procesar» is not *process, which in law means the papers that summon someone to court.",
      ),
      tr(
        "Manejar sin cinturón de seguridad es una infracción.",
        "Driving without a seat belt is an offense.",
        [
          "Driving without a seat belt is an offence.",
          "Driving without a seatbelt is an offense.",
          "Driving without a seatbelt is an offence.",
          "It is an offense to drive without a seat belt.",
          "It is an offense to drive without a seatbelt.",
          "It is an offence to drive without a seat belt.",
          "Driving without a seat belt is a traffic offense.",
        ],
        "\"Offense\" (UK \"offence\") is the technical term for any breach of the law, however minor. \"Crime\" sounds serious, and *delict is a term of Scots law.",
      ),
      fb(
        "The bill was ___ by a large majority in the Senate.",
        "passed",
        "El proyecto de ley fue [aprobado] por amplia mayoría en el Senado.",
        ["approved"],
        "A legislature \"passes\" a bill (news style also says \"approved\"); once signed, it becomes an act. «Proyecto de ley» = \"bill\", never *law project.",
      ),
      wo(
        "The company was found liable for the damage to the building.",
        "La empresa fue declarada responsable de los daños al edificio.",
        "In a civil case you are found \"liable for\", not guilty. Uncountable \"damage\" is physical harm; \"damages\" would be the money awarded.",
      ),
      tr(
        "¿Quién es el responsable de la seguridad en esta obra?",
        "Who is responsible for safety on this site?",
        [
          "Who is responsible for safety at this site?",
          "Who is responsible for safety on this construction site?",
          "Who is responsible for safety at this construction site?",
          "Who's in charge of safety on this site?",
          "Who is in charge of safety on this site?",
        ],
        "\"Responsible\" is the everyday word, and it takes \"for\". *Responsible of is a calque of «responsable de».",
      ),
      lc(
        "This road is liable to flood after heavy rain.",
        "What does the speaker mean?",
        [
          "The road tends to flood when it rains a lot",
          "The road's owner must pay for flood damage",
          "The road has been closed because of a flood",
          "The road was built to resist floods",
        ],
        0,
        "\"Liable to\" + verb = likely to (usually something bad). \"Liable for\" + noun is the legal sense of responsibility for paying.",
      ),
      fb(
        "The court ordered that the company ___ all its customers' data.",
        "delete",
        "El tribunal ordenó que la empresa [borrara] todos los datos de sus clientes.",
        ["should delete", "erase"],
        "After \"order that\", formal English uses the bare base form for every person: \"that the company delete\", with no -s. *The court ordered that the company deletes is the indicative error.",
      ),
      fb(
        "The judge directed that the photographs ___ shown to the jury.",
        "not be",
        "La jueza ordenó que las fotografías [no se mostraran] al jurado.",
        ["should not be"],
        "Negative subjunctive: \"not\" + \"be\", with no \"do\" and no \"were\". British English may use \"should not be\".",
      ),
      kw(
        "ALLEGED",
        "People say that the manager took the money.",
        "The manager ___ the money.",
        "is alleged to have taken",
        [],
        "Subject + \"is alleged\" + perfect infinitive, because the taking happened before the reporting. Do not mix patterns: *The manager is alleged that he took.",
      ),
      tr(
        "Se cree que el sospechoso salió del país en barco.",
        "The suspect is believed to have left the country by boat.",
        [
          "It is believed that the suspect left the country by boat.",
          "The suspect is thought to have left the country by boat.",
          "It is thought that the suspect left the country by boat.",
          "The suspect is believed to have fled the country by boat.",
        ],
        "Passive reporting avoids stating an unproven fact. With the person as subject use the perfect infinitive (\"to have left\"); with \"it\" use a full clause.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "It is required that all staff complete the training.",
          "Is required that all staff complete the training.",
          "It is required that all staff completes the training.",
          "All staff are required that they complete the training.",
        ],
        0,
        "An English sentence needs a subject, so dummy \"it\" is obligatory, and the clause takes the base form (\"complete\"). The alternative is \"All staff are required to complete the training\".",
      ),
      wo(
        "Applicants are advised to keep a copy of the completed form.",
        "Se aconseja a los solicitantes que guarden una copia del formulario completado.",
        "Official «se aconseja a X que...» becomes a personal passive: \"X are advised to\" + infinitive.",
      ),
      wo(
        "The company is understood to be considering an appeal against the ruling.",
        "Según parece, la empresa está estudiando recurrir la sentencia.",
        "Subject + \"is understood\" + continuous infinitive for something in progress. In British usage you \"appeal against\" a ruling; Americans \"appeal\" it directly.",
      ),
      dt(
        "It is essential that every visitor wear a badge at all times.",
        "After \"essential that\" the verb stays in the base form: \"every visitor wear\", not *wears.",
      ),
      dt(
        "Non-payment of the fine will result in further legal proceedings.",
        "\"Non-payment\" is hyphenated, and \"proceedings\" is always plural: «proceso judicial» is never *process.",
      ),
      sp(
        "The defendant is alleged to have destroyed the evidence.",
        "Presuntamente, el acusado destruyó las pruebas.",
        "Link \"alleged to\": /əˈledʒd tə/, and keep \"have\" weak: /əv/.",
        "«Presuntamente» = \"allegedly\" or \"is alleged to have\" + participle. \"Evidence\" stays singular.",
      ),
      sp(
        "She sued her landlord for the return of her deposit.",
        "Demandó al dueño del departamento para recuperar el depósito.",
        "Stress \"SUED\" and \"deposit\" on its second syllable: /dɪˈpɑːzɪt/.",
        "A private, civil claim: \"sue someone for\" something. \"Accuse\" or \"charge\" would suggest a crime.",
      ),
      tr(
        "No obstante lo dispuesto en la cláusula 3, el comprador podrá cancelar el pedido.",
        "Notwithstanding clause 3, the Buyer may cancel the order.",
        [
          "Notwithstanding clause 3, the buyer may cancel the order.",
          "Notwithstanding clause 3, the Buyer shall be entitled to cancel the order.",
          "Notwithstanding clause 3, the Buyer is entitled to cancel the order.",
          "Notwithstanding clause 3, the buyer is entitled to cancel the order.",
          "Notwithstanding the provisions of clause 3, the Buyer may cancel the order.",
        ],
        "«No obstante lo dispuesto en» = \"notwithstanding\": this provision wins over clause 3. «Podrá» grants permission, so \"may\", not *shall cancel (a duty) or *will cancel (a prediction).",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The company was found liable and ordered to pay $20,000 in damages.",
          "The company was found guilty and ordered to pay $20,000 in damage.",
          "The company was found responsible of the accident and paid damages.",
          "The company was condemned to pay $20,000 in damages.",
        ],
        0,
        "Civil cases end with liability and an award of \"damages\" (plural, money). \"Guilty\" is criminal, uncountable \"damage\" is physical harm, *responsible of is a calque, and *condemned to pay mirrors «condenado a pagar».",
      ),
      tr(
        "Conforme a la ley, los inquilinos tienen derecho a un preaviso de dos meses.",
        "Under the law, tenants are entitled to two months' notice.",
        [
          "By law, tenants are entitled to two months' notice.",
          "Under the law, tenants are entitled to two months notice.",
          "Pursuant to the law, tenants are entitled to two months' notice.",
          "Under the law, tenants have the right to two months' notice.",
          "By law, tenants have the right to two months' notice.",
          "Under the law, tenants are entitled to a two-month notice period.",
          "Under the law, tenants are entitled to two months' prior notice.",
        ],
        "«Conforme a la ley» stating a legal basis is \"under the law\" or \"by law\" (formally \"pursuant to\"). A right is \"be entitled to\", and \"two months' notice\" needs the possessive apostrophe.",
      ),
    ],
  ),
];
