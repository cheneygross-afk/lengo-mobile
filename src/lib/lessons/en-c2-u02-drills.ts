// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u02-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u02 (contracts and official notices): a short recap, then graded practice.

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

export const EN_C2_U02_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Contract anatomy, liability and obligations, notices and
  // deadlines, deeds and certification
  // ---------------------------------------------------------------------
  drill(
    "en-c2-contracts-unit-drill-1",
    "Drill: Contract Structure, Liability, Deadlines and Certification",
    "Recognize and produce the parts of a contract, the language of liability and promises, deadline expressions such as within, by and failing which, and the vocabulary of notaries, deeds and certified documents.",
    "Recap: from the parties to the apostille",
    [
      "A contract names the parties after \"between\", gives each a capitalized defined term (always with \"the\": \"the Supplier\"), explains the background in \"Recitals\" or \"Background\" (never *They expose), defines terms with \"means\", and ends with termination, \"governed by and construed in accordance with\" and \"for and on behalf of\". «Rescindir» and «resolver» are usually \"terminate\".",
      "Legal responsibility for loss is \"liable for\" (\"jointly and severally liable\" = «solidariamente»); you \"warrant\" facts, \"undertake to\" do things, \"indemnify\" against claims, \"waive\" rights and \"remedy\" a breach. «Compromiso» is a commitment, undertaking or obligation; a \"compromise\" is a middle way.",
      "Deadlines: \"within 14 days of\" (any time during the period), \"by\", \"no later than\" or \"on or before\" a date; \"in 14 days\" is at the end of the period and \"until\" is only for something that continues. «Días hábiles» are business days, «días naturales» calendar days, and \"failing which\" states the consequence. A US notary public only certifies signatures; know deed, closing, affidavit, apostille, certified copy and power of attorney.",
    ],
    [
      ["This Agreement is made between Harbor Logistics Inc. (the Carrier) and Lumen Foods LLC (the Customer).", "El presente Contrato se celebra entre Harbor Logistics Inc. (en adelante, el Transportista) y Lumen Foods LLC (en adelante, el Cliente)."],
      ["The Carrier shall not be liable for delays caused by force majeure.", "El Transportista no será responsable de los retrasos debidos a fuerza mayor."],
      ["Please return the signed form within ten business days of receipt.", "Devuelva el formulario firmado en un plazo de diez días hábiles desde su recepción."],
      ["You will need a certified copy of your birth certificate.", "Necesitará una copia certificada de su acta de nacimiento."],
    ],
    [
      mc(
        "A Spanish contract has a section headed «EXPONEN». What heading does an English contract use?",
        ["Recitals", "They expose", "Manifestations", "Interveners"],
        0,
        "The background paragraphs are the \"Recitals\" (or \"Background\"), traditionally introduced by \"Whereas\". A word-for-word *They expose is impossible in English.",
      ),
      tr(
        "Por «Día Hábil» se entenderá cualquier día que no sea sábado, domingo ni feriado.",
        "Business Day means any day other than a Saturday, Sunday or public holiday.",
        [
          "Business Day means a day other than a Saturday, Sunday or public holiday.",
          "Business Day means any day other than a Saturday, a Sunday or a public holiday.",
          "Business Day means any day other than a Saturday, Sunday or a public holiday.",
          "Business Day means a day other than a Saturday, a Sunday or a public holiday.",
          "Business Day means any day other than Saturday, Sunday or a public holiday.",
          "\"Business Day\" means any day other than a Saturday, Sunday or public holiday.",
        ],
        "Definitions use \"means\" (exhaustive), not *signifies or *will be understood as. «Día hábil» is \"business day\", never *hábil day.",
      ),
      kw(
        "TERMINATE",
        "Either party can end this contract early if it tells the other in writing three months in advance.",
        "Either party may ___ this Agreement by giving three months' written notice.",
        "terminate",
        [],
        "«Resolver» or «rescindir» a contract is usually \"terminate\". *Rescind is a technical remedy that undoes a contract as if it had never existed, so it is not the default translation.",
      ),
      tr(
        "El presente Contrato se regirá e interpretará de conformidad con las leyes del Estado de California.",
        "This Agreement shall be governed by and construed in accordance with the laws of the State of California.",
        [
          "This Agreement is governed by and construed in accordance with the laws of the State of California.",
          "This Agreement shall be governed by and construed in accordance with the laws of California.",
          "This Agreement shall be governed by and interpreted in accordance with the laws of the State of California.",
          "This agreement shall be governed by and construed in accordance with the laws of the State of California.",
          "This Agreement will be governed by and construed in accordance with the laws of the State of California.",
        ],
        "The governing law clause has a fixed shape: \"governed by and construed in accordance with\". Both participles share \"the laws\", so do not repeat it, and never write *in accordance to.",
      ),
      wo(
        "Signed by Daniel Reyes for and on behalf of Harbor Logistics Inc.",
        "Firmado por Daniel Reyes, en nombre y representación de Harbor Logistics Inc.",
        "A signatory signs \"for and on behalf of\" the company: the fixed equivalent of «en nombre y representación de».",
      ),
      mc(
        "Which sentence follows the conventions of English contract drafting?",
        [
          "The Customer shall pay each invoice within 30 days.",
          "Customer shall pay each invoice within 30 days.",
          "The customer will pay to the Supplier each invoice in 30 days.",
          "The Customer compromises to pay each invoice in 30 days.",
        ],
        0,
        "A defined term keeps its capital and its article (\"the Customer\"), obligations take \"shall\", and the deadline is \"within\". \"In 30 days\" means after 30 days, and *compromises to is a false friend of «se compromete a».",
      ),
      tr(
        "El Transportista no será responsable de ninguna pérdida causada por un embalaje deficiente.",
        "The Carrier shall not be liable for any loss caused by inadequate packaging.",
        [
          "The Carrier shall not be liable for any loss caused by poor packaging.",
          "The Carrier shall not be liable for any loss caused by defective packaging.",
          "The Carrier will not be liable for any loss caused by inadequate packaging.",
          "The Carrier will not be liable for any loss caused by poor packaging.",
          "The Carrier is not liable for any loss caused by inadequate packaging.",
          "The Carrier is not liable for any loss caused by poor packaging.",
          "The carrier shall not be liable for any loss caused by inadequate packaging.",
          "The Carrier shall not be liable for any loss caused by deficient packaging.",
        ],
        "In a contract, «responsable» with legal consequences is \"liable for\". \"Responsible for\" means in charge of or to blame, and *responsible of is always wrong.",
      ),
      fb(
        "The two guarantors are jointly and ___ liable for the loan.",
        "severally",
        "Los dos avalistas responden [solidariamente] del préstamo.",
        [],
        "\"Jointly and severally liable\" = «responsables solidarios»: each guarantor can be made to pay the whole amount. \"Jointly liable\" alone is closer to «mancomunadamente».",
      ),
      kw(
        "UNDERTAKES",
        "The Buyer formally promises to keep the price confidential.",
        "The Buyer ___ the price confidential.",
        "undertakes to keep",
        [],
        "\"Undertake to\" + infinitive is the formal promise to do something: one of the best translations of «se compromete a». The noun is \"an undertaking\".",
      ),
      mc(
        "The contract says: \"The Seller warrants that the vehicle has never been in an accident.\" What does this mean?",
        [
          "The Seller formally states that this is true and is liable if it is not.",
          "The Seller promises to repair the vehicle if it breaks down.",
          "The Seller agrees to pay the Buyer's debts if the Buyer cannot.",
          "The Seller believes this is true but takes no responsibility.",
        ],
        0,
        "\"Warrant\" = state formally that something is true, with legal consequences if it is false. A promise to repair is a manufacturer's guarantee, and paying another's debt is a guarantee in the sense of «aval».",
      ),
      tr(
        "El Contratista mantendrá indemne al Cliente frente a cualquier reclamación de terceros.",
        "The Contractor shall indemnify the Client against any third-party claims.",
        [
          "The Contractor shall indemnify the Client against all third-party claims.",
          "The Contractor shall indemnify the Client against any claims by third parties.",
          "The Contractor shall indemnify the Client against all claims by third parties.",
          "The Contractor shall indemnify and hold harmless the Client against any third-party claims.",
          "The Contractor shall indemnify the Client against any third party claims.",
          "The Contractor must indemnify the Client against any third-party claims.",
        ],
        "\"Indemnify someone against\" claims = protect them in advance and compensate any loss («mantener indemne»). The obligation takes \"shall\" (or \"must\"), not \"will\".",
      ),
      mt(
        "Match each English term with the kind of «indemnización» or «compromiso» it names.",
        [
          ["damages", "money a court awards for a breach"],
          ["severance pay", "money paid to a dismissed employee"],
          ["compensation", "general payment for a loss"],
          ["indemnity", "a contractual protection against another's losses"],
          ["undertaking", "a formal promise in a contract"],
        ],
        "Spanish «indemnización» splits into several English words, and «compromiso» in a contract is an \"undertaking\" or \"obligation\", never a *compromise.",
      ),
      fb(
        "Repeated late delivery constitutes a ___ breach of this Agreement.",
        "material",
        "La entrega tardía reiterada constituye un incumplimiento [grave] del presente Contrato.",
        [],
        "A \"material breach\" is a serious one that usually gives the other side the right to terminate. *Incompliance does not exist; \"breach\" is the contract word.",
      ),
      tr(
        "La parte incumplidora dispondrá de 15 días para subsanar el incumplimiento.",
        "The defaulting party shall have 15 days to remedy the breach.",
        [
          "The defaulting party has 15 days to remedy the breach.",
          "The defaulting party will have 15 days to remedy the breach.",
          "The party in breach shall have 15 days to remedy the breach.",
          "The party in breach has 15 days to remedy the breach.",
          "The defaulting party shall have fifteen days to remedy the breach.",
        ],
        "«Subsanar el incumplimiento» is \"remedy the breach\" (also \"cure\" in US drafting). *Correct the incompliance mixes a calque and a non-word.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The Landlord has agreed to waive the late-payment fee.",
          "The Landlord has agreed to wave the late-payment fee.",
          "The Landlord has agreed to renounce to the late-payment fee.",
          "The Landlord has agreed to make a waive of the late-payment fee.",
        ],
        0,
        "To give up a right is to \"waive\" it (noun: \"waiver\"). \"Wave\" is what you do with your hand, *renounce to copies «renunciar a», and \"waive\" is a verb, not a noun.",
      ),
      tr(
        "La empresa se compromete a entregar los planos antes de julio.",
        "The company undertakes to deliver the plans by July.",
        [
          "The company undertakes to deliver the plans before July.",
          "The Company undertakes to deliver the plans by July.",
          "The company agrees to deliver the plans by July.",
          "The company agrees to deliver the plans before July.",
          "The company commits to delivering the plans by July.",
          "The company commits to delivering the plans before July.",
          "The company shall deliver the plans by July.",
          "The company undertakes to deliver the drawings by July.",
        ],
        "«Se compromete a» = \"undertakes to\", \"agrees to\" or \"commits to\" + -ing. *The company compromises to deliver says nothing of the kind: \"compromise\" means meet halfway or put at risk.",
      ),
      tr(
        "Pida una cotización sin compromiso.",
        "Ask for a quote with no obligation.",
        [
          "Request a quote with no obligation.",
          "Ask for a no-obligation quote.",
          "Request a no-obligation quote.",
          "Get a no-obligation quote.",
          "Ask for a quote without obligation.",
          "Request a quote without obligation.",
          "Get a quote with no obligation.",
        ],
        "«Sin compromiso» = \"with no obligation\", \"no-obligation\" or \"no strings attached\". *Without compromise would mean refusing to meet anyone halfway.",
      ),
      lc(
        "After weeks of talks, management and the union finally reached a compromise.",
        "What happened?",
        [
          "Each side gave something up to reach an agreement",
          "Both sides made a firm commitment to their original positions",
          "Management promised to do everything the union asked",
          "The talks put the company at risk",
        ],
        0,
        "A \"compromise\" is a middle way in which both sides give something up. It is not «compromiso» in the sense of commitment.",
      ),
      tr(
        "Por la presente se comunica que la asamblea anual de socios se celebrará el 9 de abril.",
        "Notice is hereby given that the annual meeting of members will be held on April 9.",
        [
          "Notice is hereby given that the annual members' meeting will be held on April 9.",
          "Notice is hereby given that the annual general meeting will be held on April 9.",
          "Notice is hereby given that the annual meeting of members will be held on 9 April.",
          "Notice is hereby given that the annual general meeting will be held on 9 April.",
          "Notice is hereby given that the annual meeting of members will take place on April 9.",
          "Notice is hereby given that the annual members' meeting will take place on April 9.",
        ],
        "\"Notice is hereby given that...\" is the fixed opening of a formal notice. The meeting \"will be held\": here \"will\" is a genuine future, not a duty, so \"shall\" would be wrong.",
      ),
      fb(
        "You must pay the balance ___ 30 days of the date of this invoice.",
        "within",
        "Debe pagar el saldo [en un plazo de] 30 días a partir de la fecha de esta factura.",
        [],
        "\"Within 30 days of\" = at any time during those 30 days. \"In 30 days\" would mean at the end of them, and *within 30 days since is not English.",
      ),
      mc(
        "The deadline to pay is May 15. Which sentence is correct?",
        [
          "You must pay by May 15.",
          "You must pay until May 15.",
          "You must pay in May 15.",
          "You must pay within May 15.",
        ],
        0,
        "A deadline is \"by\" (or \"no later than\", \"on or before\"). \"Until\" is only for a situation that continues up to a point (\"The offer is valid until May 15\"): *pay until is the classic error.",
      ),
      lc(
        "Your new contract starts in ten days.",
        "When does the contract start?",
        [
          "When ten days have passed",
          "At any time during the next ten days",
          "No later than ten days from now",
          "Ten days ago",
        ],
        0,
        "\"In ten days\" = at the end of that period («dentro de diez días»). \"Within ten days\" would mean at any time during the period.",
      ),
      tr(
        "El reembolso se hará en un plazo de siete días hábiles.",
        "The refund will be made within seven business days.",
        [
          "The refund will be made within seven working days.",
          "The refund will be processed within seven business days.",
          "The refund will be processed within seven working days.",
          "The refund will be issued within seven business days.",
          "The refund will be issued within seven working days.",
          "You will be refunded within seven business days.",
        ],
        "«Días hábiles» = \"business days\" (or \"working days\"), never *hábil days or *enabled days. \"Within\" gives the maximum time allowed.",
      ),
      fb(
        "The deadline is 45 ___ days from the date of delivery, weekends included.",
        "calendar",
        "El plazo es de 45 días [naturales] desde la fecha de entrega, incluidos los fines de semana.",
        [],
        "Days in which every day counts are \"calendar days\". *Natural days is a calque that an English reader will not understand.",
      ),
      kw(
        "FAILING",
        "Pay the outstanding amount within ten days. If you do not, proceedings will be issued.",
        "Pay the outstanding amount within ten days, ___ proceedings will be issued.",
        "failing which",
        [],
        "\"Failing which\" = «en caso contrario, de no hacerlo»: the most formal way to attach the consequence. Less formal options are \"otherwise\" or \"if you do not\".",
      ),
      tr(
        "Su servicio será suspendido sin más aviso.",
        "Your service will be suspended without further notice.",
        [
          "Your service will be suspended without any further notice.",
          "Your service will be cut off without further notice.",
        ],
        "«Sin más aviso» = \"without further notice\". English notices state the consequence flatly, in the passive, without threats or exclamation marks.",
      ),
      wo(
        "The rent shall be paid on or before the fifth day of each month.",
        "La renta se abonará como máximo el quinto día de cada mes.",
        "\"On or before\" includes the date itself, which plain \"before\" might not. That is why drafters prefer it for deadlines.",
      ),
      mc(
        "In most US states, what does a notary public do?",
        [
          "Checks identity, witnesses signatures and administers oaths",
          "Drafts property sales and wills, like a Spanish «notario»",
          "Gives legal advice on contracts",
          "Judges minor civil cases",
        ],
        0,
        "A US notary public certifies signatures and is not allowed to give legal advice. The work of a Spanish «notario» is spread among lawyers, conveyancers and others.",
      ),
      mc(
        "The last page of a contract says \"Executed as a deed\". What does \"execute\" mean here?",
        [
          "Sign formally",
          "Enforce a court judgment",
          "Carry out the works described",
          "Cancel",
        ],
        0,
        "To \"execute\" a document is to sign it with the required formalities. It is not «ejecutar» a judgment, which is \"enforce\".",
      ),
      tr(
        "Tuve que firmar la declaración ante notario en el banco.",
        "I had to sign the statement in front of a notary at the bank.",
        [
          "I had to sign the statement before a notary at the bank.",
          "I had to sign the statement in front of a notary public at the bank.",
          "I had to sign the statement before a notary public at the bank.",
          "I had to get the statement notarized at the bank.",
          "I had to have the statement notarized at the bank.",
          "I had to get the statement notarised at the bank.",
        ],
        "«Firmar ante notario» = sign \"in front of\" or \"before a notary (public)\", or \"get it notarized\". In the US many notaries work in banks.",
      ),
      fb(
        "The university asked for a ___ copy of my diploma.",
        "certified",
        "La universidad pidió una copia [certificada] de mi título.",
        [],
        "A copy stamped as identical to the original is a \"certified copy\" (or \"certified true copy\"). There is no English *compulsed copy.",
      ),
      tr(
        "Le otorgó a su hija un poder notarial para vender la casa.",
        "She gave her daughter power of attorney to sell the house.",
        [
          "She granted her daughter power of attorney to sell the house.",
          "He gave his daughter power of attorney to sell the house.",
          "He granted his daughter power of attorney to sell the house.",
          "She gave her daughter a power of attorney to sell the house.",
          "She granted her daughter a power of attorney to sell the house.",
          "He gave his daughter a power of attorney to sell the house.",
        ],
        "«Poder notarial» = \"power of attorney\", which you \"give\" or \"grant\". In British usage the person appointed is your \"attorney\", even if they are not a lawyer.",
      ),
      fb(
        "Could you ___ my signature on this form?",
        "witness",
        "¿Podrías [firmar como testigo de] mi firma en este formulario?",
        [],
        "To \"witness a signature\" is to watch someone sign and then sign yourself to confirm it. One verb in English does the work of «firmar como testigo».",
      ),
      lc(
        "The documents need an apostille before you can use them in Mexico.",
        "What do the documents need?",
        [
          "A certificate confirming that the signature or seal is genuine",
          "A sworn translation into Spanish",
          "A new signature from a lawyer",
          "A stamp showing that they are legal to export",
        ],
        0,
        "An \"apostille\" («apostilla de La Haya») confirms that the signature or seal on a public document is genuine, so it can be used abroad.",
      ),
      dt(
        "Closing is scheduled for the last week of June.",
        "In the US, \"closing\" (UK \"completion\") is the day the sale is formally completed and the keys are handed over: what Spanish speakers call «la firma de la escritura».",
      ),
      dt(
        "She swore an affidavit confirming that she had lived at the address.",
        "You \"swear\" (or \"affirm\") an affidavit: a written statement made under oath and used as evidence.",
      ),
      sp(
        "The Buyer undertakes to pay the balance on closing.",
        "El Comprador se compromete a pagar el saldo en la firma de la escritura.",
        "Stress the third syllable: \"under-TAKES\", /ˌʌndərˈteɪks/.",
        "\"Undertakes to\" is the formal «se compromete a»; \"on closing\" (UK \"on completion\") is the moment the sale is completed.",
      ),
      sp(
        "Payment must be received within fourteen days, failing which your account will be closed.",
        "El pago debe recibirse en un plazo de catorce días; de lo contrario, se cerrará su cuenta.",
        "Pause briefly at the comma before \"failing which\".",
        "A complete formal notice in one sentence: the deadline (\"within\") and the consequence (\"failing which\" + passive).",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Tenancy agreements, clause errors, the solicitor's office,
  // appeals and complaints, plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-contracts-unit-drill-2",
    "Drill: Leases, Clause Errors, Negotiation, Appeals and Complaints",
    "Read the risky clauses of a lease, fix the prepositions, shall and ambiguities that spoil a draft, ask a lawyer about a contract and negotiate changes, and write the key sentences of a formal appeal or complaint, mixing the whole unit.",
    "Recap: reading, fixing and answering documents",
    [
      "In a lease, check the rent (\"payable in advance\"), the deposit and the \"deductions\" the landlord may make, the break clause (when, how much notice, in what form), \"fair wear and tear\" (normal deterioration, not the tenant's fault) and consent \"not to be unreasonably withheld\".",
      "Fix drafts by checking prepositions (\"responsible for\", \"in accordance with\", \"subject to\", \"comply with\"), keeping \"shall\" for duties only (\"If the Buyer fails to pay\", not *shall fail), replacing \"and/or\" with \"A or B or both\", and avoiding calques like *the present contract. With a lawyer, ask \"What exactly does this commit me to?\" and negotiate tentatively: \"Would they be open to...?\".",
      "Appeals and complaints state the purpose first (\"I am writing to appeal against...\"), give numbered \"grounds\", cite the rule (\"Under section 5...\"), request a remedy with the subjunctive (\"I request that the fine be cancelled\") and stay firm but courteous: \"I would be grateful if you could...\", \"I will have no option but to...\".",
    ],
    [
      ["The Landlord may deduct any unpaid rent from the deposit.", "El Arrendador podrá descontar de la fianza cualquier renta adeudada."],
      ["If the Tenant fails to pay the rent, interest will accrue.", "Si el Arrendatario no paga la renta, se devengarán intereses."],
      ["Would they be open to a six-month break clause?", "¿Estarían dispuestos a aceptar una cláusula de rescisión anticipada a los seis meses?"],
      ["I therefore request that the penalty be withdrawn.", "Por todo lo expuesto, solicito que se retire la sanción."],
    ],
    [
      tr(
        "La renta es de 1.500 dólares al mes, pagadera por adelantado.",
        "The rent is $1,500 per month, payable in advance.",
        [
          "The rent is $1,500 a month, payable in advance.",
          "The rent is 1,500 dollars per month, payable in advance.",
          "The rent is 1,500 dollars a month, payable in advance.",
          "The rent is $1,500 per calendar month, payable in advance.",
          "The rent is $1500 per month, payable in advance.",
          "The rent is $1500 a month, payable in advance.",
        ],
        "«Por adelantado» = \"in advance\": at the start of the period it covers. Note the English number format: a comma for thousands, not a period.",
      ),
      fb(
        "The Landlord may ___ any rent owed from the deposit.",
        "deduct",
        "El Arrendador podrá [descontar] de la fianza cualquier renta adeudada.",
        [],
        "The landlord \"deducts\" sums from the deposit; these are the \"deductions\". *Discount means a price reduction, not keeping part of a deposit.",
      ),
      mc(
        "In a lease, what is «la fianza»?",
        ["the deposit", "the bail", "the guarantee", "the guarantor"],
        0,
        "«Fianza» is the \"deposit\" (US \"security deposit\"). \"Bail\" is money paid so an accused person can leave custody, and a \"guarantor\" («avalista») is a person who promises to pay if the tenant does not.",
      ),
      lc(
        "There's a break clause, so either of us can end the lease after the first six months.",
        "What does the speaker mean?",
        [
          "The lease can be ended early by either party once six months have passed",
          "The lease automatically ends after six months",
          "The tenant must pay a penalty for anything broken in the first six months",
          "Neither party can end the lease before it expires",
        ],
        0,
        "A \"break clause\" lets a party end a fixed-term tenancy early, usually after a minimum period and with written notice.",
      ),
      mc(
        "The clause says: \"The Tenant may terminate this tenancy at any time after the first six months by giving not less than two months' written notice.\" Which notice is valid?",
        [
          "A letter sent in the eighth month giving two months' notice",
          "A phone call in the eighth month giving three months' notice",
          "A letter sent in the eighth month giving six weeks' notice",
          "A letter sent in the second month giving two months' notice",
        ],
        0,
        "Check three details: when (after six months), how much notice (not less than two months) and in what form (in writing). A phone call fails the form, six weeks is too short, and the second month is too early.",
      ),
      fb(
        "The Tenant shall keep the carpets clean, fair wear and ___ excepted.",
        "tear",
        "El Arrendatario mantendrá limpias las alfombras, salvo el [desgaste] normal por el uso.",
        [],
        "\"Fair wear and tear\" is the fixed phrase for normal deterioration («desgaste normal»); \"fair wear and tear excepted\" excludes it from the tenant's duty.",
      ),
      mc(
        "Which of these would normally count as fair wear and tear?",
        [
          "Curtains that have faded in the sun after three years",
          "A burn in the carpet from a dropped iron",
          "A window broken by a soccer ball",
          "A door chewed by the tenant's dog",
        ],
        0,
        "Fair wear and tear happens even with careful use. Burns, breakages and pet damage are caused by the tenant, so the landlord may deduct the cost from the deposit.",
      ),
      kw(
        "UNREASONABLY",
        "The Landlord must not refuse consent without a good reason.",
        "Such consent shall not be ___.",
        "unreasonably withheld",
        [],
        "\"Such consent not to be unreasonably withheld\" is the standard hedge in consent clauses: «no podrá denegarse sin causa justificada».",
      ),
      tr(
        "El Arrendador podrá acceder a la vivienda con un preaviso de 48 horas, salvo en caso de emergencia.",
        "The Landlord may enter the Property on giving 48 hours' notice, except in an emergency.",
        [
          "The Landlord may enter the Property with 48 hours' notice, except in an emergency.",
          "The Landlord may access the Property on giving 48 hours' notice, except in an emergency.",
          "The Landlord may access the Property with 48 hours' notice, except in an emergency.",
          "The Landlord may enter the Property on giving 48 hours' notice, except in emergencies.",
          "The Landlord may enter the Property with 48 hours' notice, except in emergencies.",
          "The landlord may enter the property with 48 hours' notice, except in an emergency.",
          "The Landlord may enter the Property after giving 48 hours' notice, except in an emergency.",
        ],
        "«Podrá» = \"may\" (a right), and the notice period takes the possessive: \"48 hours' notice\". «Salvo en caso de» = \"except in\".",
      ),
      mc(
        "Which clause is correct?",
        [
          "The Contractor shall comply with all safety regulations.",
          "The Contractor shall comply all safety regulations.",
          "The Contractor shall comply to all safety regulations.",
          "The Contractor shall accomplish with all safety regulations.",
        ],
        0,
        "The verb is always \"comply with\". *Comply the law and *comply to are the usual errors, and *accomplish is a false friend of «cumplir».",
      ),
      fb(
        "The Supplier is responsible ___ obtaining all export licenses.",
        "for",
        "El Proveedor es responsable [de] obtener todas las licencias de exportación.",
        [],
        "\"Responsible for\" + -ing. *Responsible of copies Spanish «de» and is the error an English lawyer notices first.",
      ),
      tr(
        "La entrega está sujeta a la disponibilidad de existencias.",
        "Delivery is subject to stock availability.",
        [
          "Delivery is subject to the availability of stock.",
          "Delivery is subject to availability of stock.",
          "Delivery is subject to availability.",
          "Delivery is subject to stock being available.",
        ],
        "«Sujeto a» = \"subject to\", never *subject of. Other fixed pairs: \"in accordance with\", \"entitled to\", \"in breach of\".",
      ),
      fb(
        "If the Customer ___ to pay on time, the Supplier may suspend deliveries.",
        "fails",
        "Si el Cliente [no paga] a tiempo, el Proveedor podrá suspender las entregas.",
        [],
        "Conditions take the present tense, as in everyday English: \"If the Customer fails to pay\". *If the Customer shall fail misuses \"shall\", which is only for duties.",
      ),
      tr(
        "El Licenciatario podrá usar el software en Chile, en Perú o en ambos países.",
        "The Licensee may use the software in Chile or Peru or both.",
        [
          "The Licensee may use the software in Chile, Peru or both.",
          "The Licensee may use the software in Chile or in Peru or in both.",
          "The Licensee may use the software in Chile or Peru, or both.",
          "The Licensee may use the software in Chile or in Peru or both.",
          "The Licensee may use the software in Chile, in Peru or in both countries.",
          "The Licensee may use the software in Chile or Peru or in both countries.",
        ],
        "Spell out the options (\"A or B or both\") instead of *Chile and/or Peru, which courts and style guides criticize as ambiguous.",
      ),
      mc(
        "A clause says: \"The Supplier shall replace all parts, which are defective.\" How would a court probably read it?",
        [
          "All the parts must be replaced, and they are all described as defective.",
          "Only the parts that are defective must be replaced.",
          "The Supplier may choose which parts to replace.",
          "No parts need to be replaced unless the Customer asks.",
        ],
        0,
        "The comma makes the relative clause non-defining: it describes all the parts. To limit the duty, write \"all parts that are defective\" with no comma.",
      ),
      tr(
        "En lo no previsto en el presente contrato, se aplicará la legislación mexicana.",
        "Any matter not provided for in this Agreement shall be governed by Mexican law.",
        [
          "Any matter not provided for in this Agreement is governed by Mexican law.",
          "Any matter not provided for in this Agreement will be governed by Mexican law.",
          "Mexican law shall apply to any matter not provided for in this Agreement.",
          "Mexican law applies to any matter not provided for in this Agreement.",
          "Mexican law will apply to any matter not provided for in this Agreement.",
          "Any matter not provided for in this contract shall be governed by Mexican law.",
        ],
        "«En lo no previsto en» = \"any matter not provided for in\", and «el presente contrato» = \"this Agreement\" (never *the present contract).",
      ),
      wo(
        "The parties sign this Agreement in duplicate on the date stated above.",
        "Las partes firman el presente Contrato por duplicado en la fecha arriba indicada.",
        "«Por duplicado» = \"in duplicate\"; «arriba indicada» = \"stated above\", after the noun.",
      ),
      tr(
        "¿A qué me obliga exactamente la cláusula de confidencialidad?",
        "What exactly does the confidentiality clause commit me to?",
        [
          "What does the confidentiality clause commit me to exactly?",
          "What exactly does the confidentiality clause oblige me to do?",
          "What exactly does the confidentiality clause require me to do?",
          "What exactly does the confidentiality clause bind me to?",
        ],
        "\"Commit someone to something\" = bind them to it: the natural English for «obligar a». Keep the preposition at the end of the question and use \"does\".",
      ),
      mc(
        "Which question is correct?",
        [
          "Can you tell me what this term means?",
          "Can you tell me what means this term?",
          "Can you tell me what does this term mean?",
          "What means this term?",
        ],
        0,
        "Indirect questions keep statement order with no \"does\": \"what this term means\". A direct question needs \"does\": \"What does this term mean?\".",
      ),
      fb(
        "___ simply, you would have to pay all their legal costs.",
        "Put",
        "[Dicho] de forma sencilla, tendría que pagar todos sus costos legales.",
        [],
        "\"Put simply,\" is a lawyer's opener for a plain-English explanation, like \"In plain English,\" or \"Essentially,\". *Said simply is not the fixed phrase.",
      ),
      tr(
        "Le aconsejo que no firme hasta que cambien esa cláusula.",
        "I'd advise against signing until they change that clause.",
        [
          "I would advise against signing until they change that clause.",
          "I'd advise you not to sign until they change that clause.",
          "I would advise you not to sign until they change that clause.",
          "I'd advise against signing until that clause is changed.",
          "I would advise against signing until that clause is changed.",
          "I'd advise you not to sign until that clause is changed.",
          "I would advise you not to sign until that clause is changed.",
        ],
        "«Le aconsejo que no» = \"I'd advise you not to\" or \"I'd advise against\" + -ing. *I advise you that you don't sign is a calque. \"Would\" softens the advice.",
      ),
      wo(
        "Would they be open to a longer payment period?",
        "¿Estarían dispuestos a aceptar un plazo de pago más largo?",
        "\"Would they be open to\" + noun is a tentative request: it negotiates without demanding.",
      ),
      tr(
        "No estamos dispuestos a aceptar el contrato tal como está.",
        "We are not prepared to accept the contract as it stands.",
        [
          "We're not prepared to accept the contract as it stands.",
          "We are not willing to accept the contract as it stands.",
          "We're not willing to accept the contract as it stands.",
          "We are not prepared to accept the contract as it is.",
          "We're not prepared to accept the contract as it is.",
        ],
        "\"Not prepared to\" is polite but firm. «Tal como está» about a document is \"as it stands\".",
      ),
      lc(
        "The catch is that the penalty applies to you, but not to them.",
        "What is the speaker pointing out?",
        [
          "A hidden disadvantage in the contract",
          "A mistake in the spelling of a clause",
          "A benefit that both sides share",
          "A clause that has already been removed",
        ],
        0,
        "\"The catch is that...\" introduces a hidden problem («la trampa está en que...»). Lawyers use it to flag one-sided terms.",
      ),
      mc(
        "Which opening line of a formal appeal is correct?",
        [
          "I am writing to appeal against the decision to refuse my application.",
          "I am writing to appeal to the decision to refuse my application.",
          "By means of the present I appeal the decision to refuse my application.",
          "I write you for appealing the decision to refuse my application.",
        ],
        0,
        "British English says \"appeal against a decision\" (American English \"appeal a decision\"). \"Appeal to\" means ask someone or attract them, and «por medio de la presente» is simply \"I am writing to\".",
      ),
      tr(
        "Mis motivos para recurrir son los siguientes.",
        "My grounds for appeal are as follows.",
        [
          "My grounds for appealing are as follows.",
          "My grounds of appeal are as follows.",
          "My grounds for appeal are the following.",
          "My grounds for the appeal are as follows.",
        ],
        "The reasons in an appeal are its \"grounds\" («motivos»). *My motives sounds as if you are explaining your personal intentions.",
      ),
      tr(
        "Según el artículo 7 del reglamento, debe enviarse un aviso antes de imponer una multa.",
        "Under section 7 of the regulations, a warning must be sent before a fine is imposed.",
        [
          "Under section 7 of the regulations, a warning must be issued before a fine is imposed.",
          "Under section 7 of the regulations, a warning must be sent before a fine is issued.",
          "Under section 7 of the regulations, a warning must be issued before a fine is issued.",
          "Under section 7 of the regulations, a warning must be sent before imposing a fine.",
          "Under section 7 of the regulations, a warning must be issued before imposing a fine.",
          "According to section 7 of the regulations, a warning must be sent before a fine is imposed.",
          "Under Article 7 of the regulations, a warning must be sent before a fine is imposed.",
          "According to Article 7 of the regulations, a warning must be sent before a fine is imposed.",
        ],
        "Citing a rule: \"Under section 7\" (or \"According to\"). Avoid *in virtue of. The impersonal «debe enviarse» becomes a passive.",
      ),
      fb(
        "I therefore request that the fine ___ withdrawn.",
        "be",
        "Por lo tanto, solicito que la multa [sea] retirada.",
        ["should be"],
        "After \"request that\" formal English uses the bare subjunctive: \"be withdrawn\", not *is withdrawn. «Solicito» is \"I request\", never *I solicit.",
      ),
      mc(
        "You are writing to a US company and opened with \"Dear Ms. Patel\". How do you close?",
        ["Sincerely,", "Yours faithfully,", "Attentively,", "At your entire disposition,"],
        0,
        "\"Sincerely\" works for any US letter (UK \"Yours sincerely\" after a name). \"Yours faithfully\" belongs after \"Dear Sir or Madam\", and *Attentively and *At your entire disposition are calques.",
      ),
      tr(
        "Les agradecería que me enviaran un reemplazo lo antes posible.",
        "I would be grateful if you could send me a replacement as soon as possible.",
        [
          "I'd be grateful if you could send me a replacement as soon as possible.",
          "I would be grateful if you would send me a replacement as soon as possible.",
          "I would be grateful if you could send a replacement as soon as possible.",
          "I would appreciate it if you could send me a replacement as soon as possible.",
        ],
        "\"I would be grateful if you could...\" is the workhorse of polite formal requests. *I would thank you if... is a calque.",
      ),
      kw(
        "OPTION",
        "If you don't reply in 14 days, I'll have to take the matter to the ombudsman.",
        "If I have not received a reply within 14 days, I will have ___ refer the matter to the ombudsman.",
        "no option but to",
        [],
        "\"I will have no option but to\" + verb is firm but courteous: it states the consequence without threatening.",
      ),
      tr(
        "Les ruego que solucionen el problema con carácter urgente.",
        "I would ask you to resolve the problem as a matter of urgency.",
        [
          "I would ask you to resolve this problem as a matter of urgency.",
          "I would ask you to rectify the problem as a matter of urgency.",
          "I would ask you to rectify this as a matter of urgency.",
          "I would ask you to solve the problem as a matter of urgency.",
          "Please resolve the problem as a matter of urgency.",
          "Please resolve the problem urgently.",
          "I would ask you to resolve the problem urgently.",
        ],
        "«Les ruego que» = \"I would ask you to\" or \"Please\". *I beg you to sounds desperate in English.",
      ),
      dt(
        "Please find attached copies of the two invoices and the delivery note.",
        "\"Please find attached\" (email) or \"enclosed\" (letter). The verb \"find\" comes first; the objects follow the participle.",
      ),
      sp(
        "Could we ask for the notice period to be reduced to one month?",
        "¿Podríamos pedir que se reduzca el plazo de preaviso a un mes?",
        "Let the intonation fall on \"one month\": it is a polite request, not a real yes/no question.",
        "\"Ask for something to be done\" is a tentative way to request an amendment.",
      ),
      sp(
        "I would be grateful if you could confirm the refund in writing by Friday.",
        "Les agradecería que me confirmaran el reembolso por escrito a más tardar el viernes.",
        "Keep \"would be\" light and stress \"grateful\", \"writing\" and \"Friday\".",
        "Polite request plus a deadline with \"by\": firm but courteous.",
      ),
      tr(
        "Si el Proveedor no entrega los bienes dentro del plazo, el Cliente podrá resolver el contrato.",
        "If the Supplier fails to deliver the Goods on time, the Customer may terminate the Agreement.",
        [
          "If the Supplier fails to deliver the Goods on time, the Customer may terminate this Agreement.",
          "If the Supplier does not deliver the Goods on time, the Customer may terminate the Agreement.",
          "If the Supplier does not deliver the Goods on time, the Customer may terminate this Agreement.",
          "If the Supplier fails to deliver the goods on time, the Customer may terminate the contract.",
          "If the Supplier fails to deliver the Goods within the deadline, the Customer may terminate the Agreement.",
          "If the Supplier fails to deliver the Goods in time, the Customer may terminate the Agreement.",
          "If the Supplier fails to deliver the Goods on time, the Customer may terminate the contract.",
        ],
        "Whole-unit trap: present tense in the condition (not *shall fail), \"may\" for the right («podrá»), and \"terminate\" for «resolver» (not *resolve or *rescind).",
      ),
      dt(
        "Please pay the outstanding rent within seven days, failing which we will take legal action.",
        "\"Within seven days\" sets the maximum period; \"failing which\" introduces the consequence. *Until seven days and *failing what are typical errors.",
      ),
    ],
  ),
];
