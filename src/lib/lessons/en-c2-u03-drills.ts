// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u03-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u03 (medical English): a short recap, then graded practice.

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

export const EN_C2_U03_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Symptoms, lay vs clinical terms, the consultation,
  // prescriptions and dosage
  // ---------------------------------------------------------------------
  drill(
    "en-c2-medical-unit-drill-1",
    "Drill: Symptoms, Lay and Clinical Terms, History Taking and Dosage",
    "Describe pain and symptoms precisely, choose the lay or clinical term for the listener, ask history questions with the right tense and auxiliaries, and give prescription and dosage instructions.",
    "Recap: from the patient's words to the prescription",
    [
      "Pain: \"My back hurts\" (no object: never *hurts me), \"I have a headache\", \"a pain in my knee\". Quality: sharp, dull, throbbing, stabbing, shooting, burning, tender. Movement: \"radiates down my arm\". Onset: \"It came on suddenly\". Duration: present perfect + for/since (\"I've had this cough for a month\"), never *I have it since a month. «Agudo» about duration is \"acute\", not \"sharp\".",
      "Use lay words with patients (heart attack, stroke, high blood pressure, nosebleed, shingles, bruise) and clinical words with colleagues; bridge them with \"what we call...\". Open a consultation with \"What brings you in today?\", keep the auxiliary in questions (\"Does anything make it worse?\"), and ask \"Are you on any medication?\" and \"Does anything run in the family?\".",
      "«Receta» is a \"prescription\" (a recipe is for cooking); you \"take\" medicine; \"medication\" is what a person is on, and \"drugs\" can suggest narcotics. Dosage: twice daily, every eight hours, on an empty stomach, with food, as needed, do not exceed the stated dose.",
    ],
    [
      ["I've had a stabbing pain in my side since last night.", "Tengo una punzada en el costado desde anoche."],
      ["Your blood pressure is a little high.", "Tiene la presión un poco alta."],
      ["How long have you been feeling like this?", "¿Cuánto tiempo lleva sintiéndose así?"],
      ["Take two tablets every six hours with food.", "Tome dos comprimidos cada seis horas con las comidas."],
    ],
    [
      mc(
        "How do you say «Me duele la cabeza»?",
        ["My head hurts.", "My head hurts me.", "I have pain of head.", "Me hurts the head."],
        0,
        "With a body part as subject, \"hurt\" takes no object: \"My head hurts\". \"Hurt me\" means something caused you pain (\"These shoes hurt me\"). You can also say \"I have a headache\".",
      ),
      tr(
        "Me duelen los hombros cuando levanto los brazos.",
        "My shoulders hurt when I lift my arms.",
        [
          "My shoulders hurt when I raise my arms.",
          "My shoulders hurt whenever I lift my arms.",
          "My shoulders hurt whenever I raise my arms.",
          "My shoulders hurt when I lift my arms up.",
        ],
        "English uses possessives with body parts (\"my shoulders\", \"my arms\") where Spanish uses the article, and \"hurt\" has no object: *My shoulders hurt me is the classic error.",
      ),
      fb(
        "I've had a ___ in my left knee since I fell.",
        "pain",
        "Tengo un [dolor] en la rodilla izquierda desde que me caí.",
        [],
        "For body parts without an -ache word, use \"a pain in\" + possessive: \"a pain in my knee\", never *pain of knee. The present perfect carries «desde que».",
      ),
      tr(
        "Mi hijo tiene dolor de oído.",
        "My son has an earache.",
        [
          "My son has earache.",
          "My son has got an earache.",
          "My son's got an earache.",
          "My son's got earache.",
          "My son's ear hurts.",
          "My son has a pain in his ear.",
        ],
        "Ear, head, tooth, stomach and back take the suffix -ache. In American English \"an earache\" usually keeps the article; British English often drops it.",
      ),
      mt(
        "Match each pain word with what it describes.",
        [
          ["sharp", "sudden and intense, in one exact spot"],
          ["dull", "constant, low-level and hard to locate"],
          ["throbbing", "beating in time with your pulse"],
          ["shooting", "traveling quickly along a line"],
          ["tender", "hurting when touched or pressed"],
        ],
        "Doctors ask \"What does the pain feel like?\" and expect one of these precise words. \"Tender\" here is purely clinical and has nothing to do with «tierno».",
      ),
      fb(
        "It's a ___ pain, like a heartbeat inside my tooth.",
        "throbbing",
        "Es un dolor [pulsátil], como un latido dentro de la muela.",
        [],
        "\"Throbbing\" pain beats in time with your pulse, typical of an infected tooth or a migraine. \"Stabbing\" comes in bursts, like a knife.",
      ),
      mc(
        "A report from Mexico says «pancreatitis aguda». Which English adjective is correct?",
        ["acute", "sharp", "stabbing", "severe"],
        0,
        "In medicine «agudo» about onset and duration is \"acute\" (the opposite of \"chronic\"). \"Sharp\" describes how a pain feels, not how long a disease lasts.",
      ),
      tr(
        "Tengo una sensación de ardor en el estómago después de comer.",
        "I have a burning sensation in my stomach after eating.",
        [
          "I get a burning sensation in my stomach after eating.",
          "I have a burning sensation in my stomach after I eat.",
          "I get a burning sensation in my stomach after I eat.",
          "I've got a burning sensation in my stomach after eating.",
          "I have a burning feeling in my stomach after eating.",
          "I get a burning feeling in my stomach after eating.",
          "I get a burning sensation in my stomach after meals.",
        ],
        "«Ardor» or «quemazón» is a \"burning\" sensation or pain. \"After eating\" uses the -ing form after the preposition.",
      ),
      wo(
        "The pain radiates down the back of my right leg.",
        "El dolor se irradia por la parte de atrás de la pierna derecha.",
        "\"Radiates\" + particle immediately after the verb: \"radiates down\", \"spreads up into\", \"goes through to\". *Radiates to the leg down is the typical error.",
      ),
      tr(
        "Empezó en la espalda y se extendió hasta el hombro.",
        "It started in my back and spread up into my shoulder.",
        [
          "It started in my back and spread to my shoulder.",
          "It started in my back and spread up to my shoulder.",
          "It started in my back and spread into my shoulder.",
          "It began in my back and spread up into my shoulder.",
          "It began in my back and spread to my shoulder.",
          "It started in my back and went up into my shoulder.",
        ],
        "Pain \"spreads\" or \"radiates\" with a direction particle (\"up into\", \"down\", \"through to\"). Note the possessives \"my back\", \"my shoulder\".",
      ),
      fb(
        "It came ___ suddenly while I was lifting a box.",
        "on",
        "[Empezó] de repente mientras levantaba una caja.",
        [],
        "Pains and illnesses \"come on\" suddenly or gradually. *It started to come or *It came suddenly miss the phrasal verb doctors expect.",
      ),
      tr(
        "Tengo esta tos desde hace un mes.",
        "I've had this cough for a month.",
        [
          "I have had this cough for a month.",
          "I've had this cough for one month.",
          "I've had this cough for a month now.",
          "I've been coughing like this for a month.",
        ],
        "«Desde hace» + period = present perfect + \"for\". *I have this cough since a month copies the Spanish present and preposition.",
      ),
      lc(
        "It comes and goes, but it's always worse first thing in the morning.",
        "What does the patient say about the symptom?",
        [
          "It is not constant, and it is worst when they wake up",
          "It is constant and gets worse during the day",
          "It started this morning and has now gone",
          "It only happens at night",
        ],
        0,
        "\"It comes and goes\" = «va y viene»; \"first thing in the morning\" = as soon as you wake up. Frequency and pattern are part of the time course doctors ask about.",
      ),
      tr(
        "Su padre ha tenido un infarto leve, pero está estable.",
        "Your father has had a mild heart attack, but he's stable.",
        [
          "Your father has had a mild heart attack, but he is stable.",
          "Your father had a mild heart attack, but he's stable.",
          "Your father had a mild heart attack, but he is stable.",
          "Your dad has had a mild heart attack, but he's stable.",
          "Your father has had a minor heart attack, but he's stable.",
        ],
        "To a family member, «infarto» is \"heart attack\". \"Infarct\" is a technical word for dead tissue that patients never use, and \"myocardial infarction\" belongs in the notes.",
      ),
      mc(
        "A boy's mother is worried because his nose won't stop bleeding. What should the doctor say?",
        [
          "He's had a nosebleed. It looks worse than it is.",
          "He has had an episode of epistaxis.",
          "He presents with an epistaxis of unclear origin.",
          "He has suffered a nasal hemorrhage.",
        ],
        0,
        "With patients and families, use the lay term. \"Epistaxis\" is accurate but useless to a worried mother and belongs in the notes.",
      ),
      fb(
        "On your letter you'll see it written as ___, but most people just call it high blood pressure.",
        "hypertension",
        "En su informe lo verá escrito como [hipertensión], pero casi todo el mundo lo llama presión alta.",
        [],
        "Plain word first, then the clinical term the patient will see on paperwork: \"you'll see it written as...\". Never *tension, which means stress or tightness.",
      ),
      tr(
        "Tengo la presión baja.",
        "I have low blood pressure.",
        [
          "I've got low blood pressure.",
          "My blood pressure is low.",
          "I suffer from low blood pressure.",
        ],
        "«La presión» (or «la tensión») is \"blood pressure\". *I have low tension means you are not stressed.",
      ),
      sp(
        "You've got what we call a kidney stone, which is a small, hard deposit in your kidney.",
        "Tiene lo que llamamos un cálculo renal, es decir, un pequeño depósito duro en el riñón.",
        "Stress \"KID-ney stone\" on the first word; \"deposit\" is /dɪˈpɑːzɪt/.",
        "The frame \"what we call..., which means...\" bridges lay and clinical vocabulary; \"kidney stone\" is the patient's word for «cálculo renal».",
      ),
      mc(
        "Which is the most natural way for a doctor to open a consultation?",
        [
          "What brings you in today?",
          "What happens to you?",
          "What's wrong with you?",
          "Which is your problem?",
        ],
        0,
        "\"What brings you in today?\" is open and warm. *What happens to you? is a calque of «¿Qué le pasa?», \"What's wrong with you?\" sounds blunt or even rude, and *Which is your problem? is ungrammatical here.",
      ),
      tr(
        "¿Cuánto tiempo lleva con mareos?",
        "How long have you been feeling dizzy?",
        [
          "How long have you felt dizzy?",
          "How long have you been dizzy?",
          "How long have you had dizziness?",
          "How long have you been having dizzy spells?",
          "How long have you been getting dizzy?",
        ],
        "«Llevar» + period becomes the present perfect (continuous): \"How long have you been feeling...?\". *How long are you dizzy? or *Since when you are dizzy? are typical slips.",
      ),
      fb(
        "She's ___ coughing since Sunday.",
        "been",
        "[Lleva] tosiendo desde el domingo.",
        [],
        "Present perfect continuous for an activity that started in the past and continues: \"She's been coughing since Sunday\". \"Since\" + a starting point.",
      ),
      kw(
        "FOR",
        "My back started hurting three days ago and it still hurts.",
        "My back ___ three days.",
        "has been hurting for",
        ["has hurt for"],
        "A state or feeling that continues up to now takes the present perfect (continuous) + \"for\" + period. *My back hurts since three days copies Spanish.",
      ),
      mc(
        "Which question is correct?",
        [
          "Does anything make it better or worse?",
          "What makes it worse it?",
          "Anything makes it better or worse?",
          "Does make anything it worse?",
        ],
        0,
        "A yes/no question needs an auxiliary before the subject: \"Does anything make...?\". Dropping it, the commonest slip in fast clinical speech, sounds careless.",
      ),
      wo(
        "Have you noticed anything that triggers the pain?",
        "¿Ha notado algo que le provoque el dolor?",
        "Auxiliary + subject + participle: \"Have you noticed\". \"Trigger\" = set off or provoke.",
      ),
      tr(
        "¿Es alérgica a algún medicamento?",
        "Are you allergic to any medication?",
        [
          "Are you allergic to any medications?",
          "Are you allergic to any medicines?",
          "Are you allergic to any drugs?",
          "Do you have any drug allergies?",
          "Do you have an allergy to any medication?",
          "Do you have any allergies to medication?",
        ],
        "\"Allergic to\" and \"an allergy to\" both take \"to\". *Do you have allergy of...? is a common slip.",
      ),
      tr(
        "Mi papá toma anticoagulantes desde hace años.",
        "My dad has been on blood thinners for years.",
        [
          "My father has been on blood thinners for years.",
          "My dad has been taking blood thinners for years.",
          "My father has been taking blood thinners for years.",
          "My dad has been on anticoagulants for years.",
          "My father has been on anticoagulants for years.",
          "My dad has taken blood thinners for years.",
        ],
        "\"Be on\" + medication is the idiomatic way to say someone takes it regularly. The duration still needs the present perfect + \"for\".",
      ),
      fb(
        "Diabetes ___ in my family.",
        "runs",
        "En mi familia [hay antecedentes de] diabetes.",
        [],
        "A condition \"runs in the family\". Medical «antecedentes» is \"(medical) history\", never *antecedents.",
      ),
      tr(
        "La doctora me recetó un jarabe para la tos.",
        "The doctor prescribed me a cough syrup.",
        [
          "The doctor prescribed me cough syrup.",
          "The doctor prescribed a cough syrup for me.",
          "The doctor prescribed cough syrup for me.",
          "The doctor gave me a prescription for cough syrup.",
          "The doctor gave me a prescription for a cough syrup.",
          "The doctor wrote me a prescription for cough syrup.",
          "The doctor prescribed me some cough syrup.",
        ],
        "«Recetar» = \"prescribe\"; «una receta» = \"a prescription\". A \"recipe\" tells you how to cook, so *The doctor gave me a recipe is a famous error.",
      ),
      lc(
        "You don't need to see a doctor for that. You can buy it over the counter.",
        "What does the speaker mean?",
        [
          "You can buy it without a prescription",
          "You need a prescription to buy it",
          "It is only sold in hospitals",
          "It is sold illegally",
        ],
        0,
        "\"Over the counter\" (OTC) = «sin receta». The opposite is \"prescription-only\" or \"only available on prescription\".",
      ),
      mc(
        "Which sentence about your daily pills sounds natural?",
        [
          "I take my blood pressure medication every morning.",
          "I drink my blood pressure pills every morning.",
          "I take drugs every morning.",
          "I take my blood pressure recipe every morning.",
        ],
        0,
        "You \"take\" medicine of any form, never *drink a pill. \"Medication\" is what a person is on; \"I take drugs\" suggests narcotics; a \"recipe\" is for cooking.",
      ),
      tr(
        "Tome un comprimido cada ocho horas, también por la noche.",
        "Take one tablet every eight hours, including at night.",
        [
          "Take one tablet every eight hours, even at night.",
          "Take one tablet every eight hours, also at night.",
          "Take a tablet every eight hours, including at night.",
          "Take a tablet every eight hours, even at night.",
          "Take one pill every eight hours, including at night.",
          "Take one tablet every eight hours, including during the night.",
        ],
        "\"Every eight hours\" means evenly spaced doses, night included; it is not the same as \"three times a day\" for a pharmacist.",
      ),
      fb(
        "Take this medicine on an ___ stomach, half an hour before breakfast.",
        "empty",
        "Tome este medicamento [en ayunas], media hora antes del desayuno.",
        [],
        "«En ayunas» = \"on an empty stomach\". The opposite instructions are \"with food\" or \"with meals\".",
      ),
      dt(
        "Avoid alcohol and do not take more than six tablets in twenty-four hours.",
        "Label warnings are short imperatives: \"Avoid...\", \"Do not take more than...\". Listen for \"in\" + period for the maximum dose.",
      ),
      dt(
        "This drug is contraindicated in patients with liver disease.",
        "\"Contraindicated in\" = a reason not to give the drug. In clinical writing \"drug\" is neutral; \"liver\" is «hígado», not the kidney.",
      ),
      sp(
        "Are you on any medication at the moment, and do you have any allergies?",
        "¿Toma alguna medicación en este momento y tiene alguna alergia?",
        "Rising intonation on \"moment\", then again on \"allergies\": two yes/no questions.",
        "\"Be on\" medication and \"any allergies\": the two background questions of every history.",
      ),
      tr(
        "Llevo dos días con un dolor sordo en el pecho.",
        "I've had a dull ache in my chest for two days.",
        [
          "I have had a dull ache in my chest for two days.",
          "I've had a dull pain in my chest for two days.",
          "I have had a dull pain in my chest for two days.",
          "I've had a dull ache in my chest for the last two days.",
          "I've had a dull pain in my chest for the last two days.",
        ],
        "Whole-lesson combination: «llevo» + period = present perfect + \"for\", «sordo» = \"dull\", and \"in my chest\" with a possessive.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I've had a sharp pain in my side since Monday.",
          "I have a sharp pain in my side since Monday.",
          "My side hurts me since Monday.",
          "I have pain of side since Monday.",
        ],
        0,
        "\"Since Monday\" needs the present perfect. The others copy Spanish: present tense with \"since\", an object after \"hurt\", and *pain of.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Clinical reports, consent and bad news, symptom vocabulary,
  // false friends and hedged deduction, plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-medical-unit-drill-2",
    "Drill: Reports, Consent, False Friends and Clinical Hedging",
    "Read and explain clinical reports, talk about risks and deliver bad news with care, use precise symptom words, avoid the medical false friends and grade a diagnosis with hedges and past deduction, mixing the whole unit.",
    "Recap: reports, conversations and certainty",
    [
      "Reports: \"presented with\", \"on examination\", \"unremarkable\" (normal: good news), \"?appendicitis\" read as \"query\" (suspected), \"referred to\", \"discharged\", NBM, NKDA, SOB. To explain a report, expand the abbreviations, use lay words and \"you\", and keep the hedges. Consent: \"a risk of\" + noun, \"carries a risk\", teach-back (\"Can you tell me in your own words...?\"); bad news starts with a warning shot: \"I'm afraid...\".",
      "Symptoms: a twinge, sore, nagging, excruciating; swelling (noun) vs swollen (adjective), numb, tingling, lightheaded, carsick. False friends: constipated = «estreñido» (a cold is \"a cold\"), intoxicated = drunk (\"food poisoning\"), sensible = «sensato» (\"sensitive\"), injury = «lesión», operate on someone, preservative = «conservante».",
      "Hedging: \"may well\", \"could\" (never *can for one case), \"must\" and \"can't\" for near certainty, \"consistent with\" for «compatible con», \"cannot be excluded\"; past deduction with \"must have\", \"can't have\", \"might have\" + participle (passive: \"must have been exposed\"). \"Had to have surgery\" is obligation, \"must have had surgery\" is deduction.",
    ],
    [
      ["A 38-year-old woman presented with a one-week history of headaches.", "Mujer de 38 años que acude por cefalea de una semana de evolución."],
      ["There's a small risk of infection, as with any operation.", "Como en cualquier operación, hay un pequeño riesgo de infección."],
      ["I've got a cold, so I'm all stuffed up.", "Estoy resfriado, así que tengo la nariz totalmente tapada."],
      ["He must have been exposed to the virus on the plane.", "Debió de contagiarse del virus en el avión."],
    ],
    [
      fb(
        "A 45-year-old man ___ with a three-day history of fever and cough.",
        "presented",
        "Varón de 45 años que [acude por] fiebre y tos de tres días de evolución.",
        [],
        "In reports a patient \"presents with\" a symptom («acude por, consulta por»). The past simple is usual in summaries; *came for fever is not report style.",
      ),
      mc(
        "A discharge summary says \"Chest X-ray unremarkable.\" What does this mean?",
        [
          "Nothing abnormal was found on the X-ray.",
          "The X-ray was of poor quality.",
          "The X-ray showed something worrying.",
          "The X-ray was not done.",
        ],
        0,
        "\"Unremarkable\" is the report word for normal, so it is good news. It does not mean «poco destacable» in any negative sense.",
      ),
      lc(
        "Query appendicitis. Nil by mouth from midnight.",
        "What does the note mean?",
        [
          "Appendicitis is suspected, and the patient must not eat or drink from midnight.",
          "Appendicitis has been confirmed, and the patient may eat normally.",
          "The patient asked about appendicitis and wants to fast.",
          "Appendicitis has been ruled out, and the patient can go home at midnight.",
        ],
        0,
        "\"Query\" (written ?) = suspected, not yet confirmed. \"Nil by mouth\" (NBM, US NPO) = «dieta absoluta», usually before surgery.",
      ),
      mt(
        "Match each abbreviation from the notes with its meaning.",
        [
          ["SOB", "shortness of breath"],
          ["NKDA", "no known drug allergies"],
          ["c/o", "complains of"],
          ["O/E", "on examination"],
          ["NAD", "no abnormality detected"],
        ],
        "Clinical notes compress whole phrases into a few letters. \"SOB on exertion\" is «disnea de esfuerzo»; NAD, like \"unremarkable\", is good news.",
      ),
      tr(
        "Se derivó a la paciente a dermatología.",
        "The patient was referred to dermatology.",
        [
          "The patient has been referred to dermatology.",
          "She was referred to dermatology.",
          "She has been referred to dermatology.",
          "The patient was referred to the dermatology department.",
          "The patient was referred to a dermatologist.",
        ],
        "«Derivar» a patient is \"refer\" (noun: \"a referral\"). *Derived to dermatology is a calque.",
      ),
      mc(
        "How would you explain \"No evidence of infection. F/U in clinic 6/52\" to a patient?",
        [
          "There are no signs of infection, and we'll see you in clinic in six weeks.",
          "There are no signs of infection, and we'll see you in clinic in six days.",
          "There are no signs of infection, and we'll see you in clinic in six months.",
          "We found an infection, and you need to come back in six weeks.",
        ],
        0,
        "Time spans are written as fractions: 6/52 = six weeks (of 52), 6/7 = six days, 6/12 = six months. Expanding a note means putting back \"you\", the verbs and the articles without changing the facts.",
      ),
      tr(
        "Pensamos que podía ser un cálculo renal, pero el escáner lo descartó.",
        "We thought it might be a kidney stone, but the scan ruled that out.",
        [
          "We thought it might be a kidney stone, but the scan ruled it out.",
          "We thought it could be a kidney stone, but the scan ruled that out.",
          "We thought it could be a kidney stone, but the scan ruled it out.",
          "We thought it might be a kidney stone, but the CT scan ruled it out.",
          "We thought it might be a kidney stone, but the scan ruled that out completely.",
        ],
        "Explaining a report: keep the hedge (\"might be\"), use the lay term (\"kidney stone\", not \"renal calculus\") and \"rule out\" for «descartar».",
      ),
      fb(
        "There's a small risk ___ infection after the procedure.",
        "of",
        "Hay un pequeño riesgo [de] infección después de la intervención.",
        [],
        "\"Risk\" takes \"of\" + noun or -ing: \"a risk of infection\", \"a risk of developing a clot\". *A risk to infection is the usual slip.",
      ),
      tr(
        "Esta intervención conlleva un pequeño riesgo de sangrado.",
        "This procedure carries a small risk of bleeding.",
        [
          "This operation carries a small risk of bleeding.",
          "This procedure carries a slight risk of bleeding.",
          "There is a small risk of bleeding with this procedure.",
          "This procedure involves a small risk of bleeding.",
        ],
        "A procedure \"carries\" a risk («conlleva»). Avoid *a risk that you bleed, a clumsy copy of «riesgo de que».",
      ),
      mc(
        "Which question best checks that a patient has understood the procedure?",
        [
          "Just to make sure I've explained it clearly, can you tell me in your own words what's going to happen?",
          "Do you understand?",
          "You understood everything, right?",
          "Is it clear or not?",
        ],
        0,
        "The teach-back method asks the patient to explain in their own words and puts the responsibility on the explainer. \"Do you understand?\" only invites a polite \"yes\".",
      ),
      fb(
        "Written consent was ___ before the operation.",
        "obtained",
        "Se [obtuvo] el consentimiento por escrito antes de la operación.",
        ["taken"],
        "Consent is \"given\" by the patient and \"obtained\" or \"taken\" by the doctor. The patient \"signs the consent form\".",
      ),
      lc(
        "I'm afraid the results aren't quite what we were hoping for.",
        "What is the doctor doing?",
        [
          "Preparing the patient for bad news",
          "Saying that she is frightened",
          "Telling the patient the results are excellent",
          "Asking the patient to repeat the tests",
        ],
        0,
        "This is a warning shot: a short sentence that signals bad news and gives the patient a moment to prepare. \"I'm afraid\" here means «me temo que», not fear.",
      ),
      tr(
        "Me temo que tengo malas noticias sobre la biopsia.",
        "I'm afraid I have some bad news about the biopsy.",
        [
          "I'm afraid I have bad news about the biopsy.",
          "I am afraid I have some bad news about the biopsy.",
          "I'm afraid I've got some bad news about the biopsy.",
          "I'm afraid I have some difficult news about the biopsy.",
          "I'm afraid the news about the biopsy isn't good.",
        ],
        "\"I'm afraid\" is the standard softener for bad news. \"News\" is uncountable: \"some bad news\", never *a bad news.",
      ),
      mc(
        "Which phrase should a doctor avoid when breaking bad news?",
        [
          "I know exactly how you feel.",
          "I can only imagine how hard this is for you.",
          "This must be very hard to hear.",
          "Would you like me to call someone to be with you?",
        ],
        0,
        "\"I know how you feel\" claims something the doctor cannot know. Acknowledging the emotion (\"This must be very hard to hear\") is respectful and honest.",
      ),
      tr(
        "No podemos curarlo, pero podemos hacer mucho para aliviar el dolor.",
        "We can't cure it, but there's a lot we can do to relieve the pain.",
        [
          "We can't cure it, but there is a lot we can do to relieve the pain.",
          "We cannot cure it, but there's a lot we can do to relieve the pain.",
          "We can't cure it, but we can do a lot to relieve the pain.",
          "We can't cure it, but there's a lot we can do to ease the pain.",
          "We can't cure it, but we can do a lot to ease the pain.",
          "We can't cure it, but there's a lot we can do to control the pain.",
        ],
        "Honest but not hope-destroying: never \"There's nothing more we can do\". \"There's a lot we can do to...\" keeps the focus on care.",
      ),
      fb(
        "I felt a ___ in my lower back when I bent down to tie my shoes.",
        "twinge",
        "Sentí una [punzadita] en la zona lumbar al agacharme para atarme los zapatos.",
        [],
        "A \"twinge\" is a brief, slight pain, at the mild end of the scale. A \"stabbing\" pain would be much stronger.",
      ),
      tr(
        "Tengo las piernas adoloridas por el partido de ayer.",
        "My legs are sore from yesterday's game.",
        [
          "My legs are sore after yesterday's game.",
          "My legs are sore from yesterday's match.",
          "My legs are sore after yesterday's match.",
          "My legs are really sore from yesterday's game.",
          "My legs are stiff from yesterday's game.",
          "My legs are stiff after yesterday's game.",
        ],
        "Muscle pain after exercise is \"sore\" or \"stiff\". *My legs hurt me or *I have pain of legs miss the natural word.",
      ),
      fb(
        "My ankle is really ___ after the fall.",
        "swollen",
        "Tengo el tobillo muy [hinchado] después de la caída.",
        [],
        "\"Swollen\" is the adjective; \"swelling\" is the noun (\"There's some swelling\"). *My ankle is swelling would mean it is getting bigger right now.",
      ),
      tr(
        "Me torcí la muñeca jugando tenis.",
        "I sprained my wrist playing tennis.",
        [
          "I twisted my wrist playing tennis.",
          "I sprained my wrist while playing tennis.",
          "I twisted my wrist while playing tennis.",
          "I sprained my wrist when I was playing tennis.",
        ],
        "«Muñeca» of the arm is \"wrist\" (a toy is a \"doll\"). English uses the possessive: \"my wrist\".",
      ),
      tr(
        "Estoy resfriado y tengo la nariz tapada.",
        "I've got a cold and my nose is blocked.",
        [
          "I have a cold and my nose is blocked.",
          "I've got a cold and my nose is stuffed up.",
          "I have a cold and my nose is stuffed up.",
          "I've got a cold and I'm all stuffed up.",
          "I have a cold and I'm all stuffed up.",
          "I've got a cold and I have a blocked nose.",
          "I have a cold and I have a stuffy nose.",
          "I've got a cold and my nose is stuffy.",
        ],
        "A cold is \"a cold\". *I'm constipated means «estoy estreñido», which is not what a Spanish speaker from Spain means by «constipado».",
      ),
      wo(
        "My teeth have become very sensitive to cold drinks.",
        "Los dientes se me han vuelto muy sensibles a las bebidas frías.",
        "«Sensible» = \"sensitive\". English \"sensible\" means «sensato» (\"a sensible decision\"). Note the possessive: \"my teeth\".",
      ),
      fb(
        "She's out for the rest of the season with a shoulder ___.",
        "injury",
        "Está fuera el resto de la temporada por una [lesión] de hombro.",
        [],
        "A sports «lesión» is always an \"injury\". \"Lesion\" is an abnormal area of tissue on a scan, and «injuria» is an insult.",
      ),
      tr(
        "Me operaron de la rodilla en marzo.",
        "I had an operation on my knee in March.",
        [
          "I had knee surgery in March.",
          "I had surgery on my knee in March.",
          "They operated on my knee in March.",
          "I had a knee operation in March.",
          "I had an operation on my knee last March.",
        ],
        "The patient \"has an operation\" or \"has surgery\"; the surgeon \"operates on\" someone. *I was operated of the knee is a calque.",
      ),
      lc(
        "This bread contains no artificial preservatives.",
        "What does the label say?",
        [
          "No contiene conservantes artificiales.",
          "No contiene preservativos.",
          "No contiene colorantes artificiales.",
          "No contiene azúcar añadida.",
        ],
        0,
        "A \"preservative\" is «conservante». «Preservativo» is a \"condom\": a confusion that has caused real embarrassment in supermarkets.",
      ),
      fb(
        "It ___ well be a viral infection, but we'll run some tests.",
        "may",
        "[Es muy posible que] sea una infección viral, pero haremos unas pruebas.",
        ["could", "might"],
        "\"May well\" (or \"could well\") raises the probability: «es muy posible que». *It can well be is not used for a specific case.",
      ),
      mc(
        "The pain is on the left side, so it ___ be appendicitis.",
        ["can't", "mustn't", "can", "doesn't have to"],
        0,
        "The negative of deduction \"must\" is \"can't\". \"Mustn't\" is normally a prohibition, \"can\" is not used for a guess about one case, and \"doesn't have to\" means it is not necessary.",
      ),
      tr(
        "Los síntomas son compatibles con una gripe.",
        "The symptoms are consistent with flu.",
        [
          "The symptoms are consistent with the flu.",
          "The symptoms are consistent with influenza.",
          "The symptoms are in keeping with flu.",
          "The symptoms are in keeping with the flu.",
          "The symptoms are consistent with a flu.",
        ],
        "Clinical «compatible con» is \"consistent with\" or \"in keeping with\" far more often than \"compatible with\". British English says \"flu\", American English often \"the flu\".",
      ),
      kw(
        "MUST",
        "I'm sure she caught the infection at the hospital.",
        "She ___ the infection at the hospital.",
        "must have caught",
        ["must have picked up"],
        "Past deduction: \"must have\" + past participle («debió de contagiarse»). \"She had to catch\" would mean she was obliged to.",
      ),
      tr(
        "No puede haber sido el antibiótico; dejó de tomarlo hace dos semanas.",
        "It can't have been the antibiotic; she stopped taking it two weeks ago.",
        [
          "It can't have been the antibiotic; he stopped taking it two weeks ago.",
          "It couldn't have been the antibiotic; she stopped taking it two weeks ago.",
          "It couldn't have been the antibiotic; he stopped taking it two weeks ago.",
          "It can't have been the antibiotic; she stopped taking it two weeks earlier.",
          "It can't have been the antibiotic, since she stopped taking it two weeks ago.",
          "It can't have been the antibiotics; she stopped taking them two weeks ago.",
        ],
        "Negative past deduction: \"can't have\" (or \"couldn't have\") + participle. *Mustn't have been is not the usual form.",
      ),
      wo(
        "The water may have been contaminated at the source.",
        "Puede que el agua estuviera contaminada en el origen.",
        "Passive past deduction: modal + \"have been\" + participle. Without \"been\" (*may have contaminated) the water becomes the agent.",
      ),
      mc(
        "From the scar, he ___ surgery on that knee.",
        ["must have had", "had to have", "must have", "can have had"],
        0,
        "Deduction from evidence = \"must have\" + participle («debió de operarse»). \"Had to have surgery\" means he was obliged to, and *can have had is not used for deduction.",
      ),
      dt(
        "Appearances are highly suggestive of a chest infection.",
        "\"Highly suggestive of\" is strong but not certain: one step below \"confirms\" on the report scale.",
      ),
      dt(
        "She presented with a two-week history of headaches and blurred vision.",
        "Report style: \"presented with\" + \"a two-week history of\". The compound adjective \"two-week\" has no plural s.",
      ),
      sp(
        "It's very unlikely to be anything serious, but let's do a blood test to be sure.",
        "Es muy poco probable que sea algo grave, pero hagamos un análisis de sangre para estar seguros.",
        "Stress \"UN-likely\" and \"SURE\"; keep \"to be\" weak.",
        "\"Unlikely to be\" + noun is the standard reassurance: a precise hedge, not a vague one.",
      ),
      sp(
        "Can you tell me in your own words what the operation involves?",
        "¿Me puede explicar con sus propias palabras en qué consiste la operación?",
        "Falling intonation at the end: it is a request, not a test.",
        "Teach-back: the indirect question keeps statement order (\"what the operation involves\"), with no \"does\".",
      ),
      tr(
        "Pensamos que podría ser una lesión de ligamento, pero la resonancia salió normal.",
        "We thought it might be a ligament injury, but the MRI was normal.",
        [
          "We thought it could be a ligament injury, but the MRI was normal.",
          "We thought it might be a ligament injury, but the MRI scan was normal.",
          "We thought it might be a ligament injury, but the MRI came back normal.",
          "We thought it might be a ligament injury, but the MRI was unremarkable.",
          "We thought it could be a ligament injury, but the MRI came back normal.",
          "We thought it might be an injury to the ligament, but the MRI was normal.",
        ],
        "Whole-unit mix: a hedge (\"might be\"), the false friend «lesión» = \"injury\" (not \"lesion\" for a sports injury), and plain words for the patient.",
      ),
      mc(
        "The report says \"?pneumonia. Chest X-ray may represent early consolidation.\" What should you tell the patient?",
        [
          "It might be the start of a chest infection, but the X-ray isn't conclusive yet.",
          "You have pneumonia; the X-ray proves it.",
          "Your X-ray was unremarkable, so it's nothing.",
          "You presented with consolidation of the lung parenchyma.",
        ],
        0,
        "Keep the level of certainty: \"?\" and \"may represent\" become \"might be\", not \"is\". Plain words replace \"consolidation\", and \"unremarkable\" would contradict the report.",
      ),
    ],
  ),
];
