// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u19.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 19: Fare and Lasciare + Infinitive. Having things done,
// making people do things, farsi + infinitive, letting, pronouns and past
// agreement. Conventions: docs/italian-course/authoring.md.
export const IT_B1_U19: Lesson[] = [
  {
    slug: "b1-fare-infinitive",
    level: "IT-B1",
    number: 1,
    title: "Having Things Done: Fare + Infinitive",
    summary: "Say you're having something done with fare + infinitive: faccio riparare la bici, ho fatto pulire il tappeto, fammi vedere, fammi sapere.",
    duration: "17 min",
    sections: [
      {
        heading: "Faccio riparare la bici",
        body: [
          "English says I'm having my bike repaired or I'm getting my bike fixed. Italian uses \"fare\" + infinitive: \"Faccio riparare la bici\". Compare \"Riparo la bici\" (I repair it myself) with \"Faccio riparare la bici\" (someone else does it for me).",
          "Only \"fare\" changes tense; the infinitive stays the same: \"Ho fatto pulire il tappeto\" (I had the carpet cleaned), \"Domani farò tagliare l'erba\" (tomorrow I'll have the grass cut).",
          "To say who does the job, add \"da\": \"Ho fatto riparare la macchina dal meccanico\" (I had the car repaired by the mechanic).",
          "Don't copy English have + object + participle: \"Ho la macchina riparata\" only describes a state (my car is repaired, I have it back). The action of getting a job done is always \"fare\" + infinitive, and the object comes after the infinitive, not between the two verbs: \"Faccio riparare la bici\", never \"faccio la bici riparare\".",
        ],
        examples: [
          { es: "Faccio riparare la bici.", en: "I'm having my bike repaired." },
          { es: "Riparo la bici.", en: "I'm repairing my bike (myself)." },
          { es: "Ho fatto pulire il tappeto.", en: "I had the carpet cleaned." },
          { es: "Domani farò tagliare l'erba.", en: "Tomorrow I'll have the grass cut." },
          { es: "Ho fatto riparare la macchina dal meccanico.", en: "I had the car repaired by the mechanic." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm having my bike repaired.", answer: "Faccio riparare la bici.", altAnswers: ["Faccio riparare la bicicletta.", "Sto facendo riparare la bici.", "Faccio aggiustare la bici."], explanation: "\"Fare\" + infinitive: someone else does it." },
          { type: "multiple-choice", question: "Which sentence means the speaker paid someone to do it?", options: ["Ho fatto pulire il tappeto.", "Ho pulito il tappeto.", "Ho finito di pulire il tappeto.", "Ho cominciato a pulire il tappeto."], correctIndex: 0, explanation: "\"Ho fatto pulire\" = I had it cleaned." },
        ],
      },
      {
        heading: "Far controllare: before another infinitive",
        body: [
          "After a modal, \"fare\" usually drops its final e: \"Devo far controllare la caldaia\" (I need to have the boiler checked), \"Vorrei far stampare queste foto\". Both \"fare\" and \"far\" are correct; \"far\" is smoother.",
          "Common services: \"far riparare\", \"far controllare\", \"far lavare\", \"far tagliare\", \"far consegnare\" (have it delivered), \"far installare\".",
        ],
        examples: [
          { es: "Devo far controllare la caldaia.", en: "I need to have the boiler checked." },
          { es: "Vorrei far stampare queste foto.", en: "I'd like to have these photos printed." },
          { es: "Possiamo far consegnare il divano a casa?", en: "Can we have the sofa delivered to the house?" },
          { es: "Abbiamo fatto installare l'aria condizionata.", en: "We had air conditioning installed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need to have the boiler checked.", answer: "Devo far controllare la caldaia.", altAnswers: ["Devo fare controllare la caldaia.", "Bisogna far controllare la caldaia."], explanation: "\"Far\" before the second infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [had air conditioning installed].", sentence: "Abbiamo ___ l'aria condizionata.", answer: "fatto installare", explanation: "\"Fatto\" + infinitive." },
          { type: "listen-choose", audio: "Possiamo far consegnare il divano a casa?", question: "What does the customer want?", options: ["The sofa delivered", "The sofa repaired", "The sofa cleaned", "The sofa taken away"], correctIndex: 0, explanation: "\"Far consegnare\" = have it delivered." },
        ],
      },
      {
        heading: "Fammi vedere, fammi sapere",
        body: [
          "With the \"tu\" imperative \"fa'\", the pronoun attaches and doubles its consonant: \"fammi\" (let me, literally make me). Two everyday phrases: \"Fammi vedere!\" (show me, let me see) and \"Fammi sapere\" (let me know).",
          "Polite forms keep the pronoun in front: \"Mi faccia sapere\" (let me know, formal), \"Ci faccia vedere\" (show us).",
        ],
        examples: [
          { es: "Fammi vedere!", en: "Let me see!" },
          { es: "Fammi sapere se vieni.", en: "Let me know if you're coming." },
          { es: "Mi faccia sapere entro venerdì.", en: "Let me know by Friday. (formal)" },
          { es: "Facci vedere le foto!", en: "Show us the photos!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me know if you're coming. (to a friend)", answer: "Fammi sapere se vieni.", explanation: "\"Fammi sapere\" = let me know." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me know by Friday. (formal)", answer: "Mi faccia sapere entro venerdì.", explanation: "Formal imperative: pronoun before \"faccia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had the carpet cleaned.", answer: "Ho fatto pulire il tappeto.", altAnswers: ["Ho fatto lavare il tappeto."], explanation: "\"Fare\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow I'll have the grass cut.", answer: "Domani farò tagliare l'erba.", altAnswers: ["Domani faccio tagliare l'erba."], explanation: "Only \"fare\" changes tense." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had the car repaired by the mechanic.", answer: "Ho fatto riparare la macchina dal meccanico.", altAnswers: ["Ho fatto aggiustare la macchina dal meccanico."], explanation: "\"Da\" for the person who does it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to have these photos printed.", answer: "Vorrei far stampare queste foto.", altAnswers: ["Vorrei fare stampare queste foto."], explanation: "\"Far\" after a modal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me see! (to a friend)", answer: "Fammi vedere!", explanation: "\"Fa'\" + \"mi\" = \"fammi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Show us the photos! (to a friend)", answer: "Facci vedere le foto!", explanation: "\"Fa'\" + \"ci\" = \"facci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Can we [have the sofa delivered] to the house?", sentence: "Possiamo ___ a casa?", answer: "far consegnare il divano", altAnswers: ["fare consegnare il divano"], explanation: "\"Far consegnare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Every year we [have the chimney cleaned].", sentence: "Ogni anno ___ il camino.", answer: "facciamo pulire", explanation: "\"Fare\" in the present + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: I'm having the kitchen painted.", words: ["Faccio", "dipingere", "la", "cucina."], translation: "I'm having the kitchen painted.", explanation: "\"Fare\" + infinitive + object." },
      { type: "multiple-choice", question: "\"Domani faccio lavare la macchina.\" Who washes the car?", options: ["Someone else, for the speaker", "The speaker", "The speaker and a friend", "Nobody: it's already clean"], correctIndex: 0, explanation: "\"Fare\" + infinitive: having it done." },
      { type: "dictation", audio: "Devo far riparare la lavatrice prima di domenica.", explanation: "\"Far\" + infinitive." },
      { type: "speak", text: "Ho fatto riparare la bici. Fammi sapere se vuoi fare un giro domani.", prompt: "Say it in Italian: I had my bike repaired. Let me know if you want to go for a ride tomorrow.", tip: "\"Fammi\": a long double m, FAM-mi.", explanation: "\"Fare\" + infinitive and \"fammi sapere\"." },
    ],
  },
  {
    slug: "b1-making-people-do",
    level: "IT-B1",
    number: 2,
    title: "Making Someone Do Something",
    summary: "Make people do things with fare + infinitive: mi fa ridere, la fa piangere, faccio studiare i bambini, faccio leggere la lettera a Marco → gli faccio leggere la lettera.",
    duration: "17 min",
    sections: [
      {
        heading: "Mi fa ridere",
        body: [
          "\"Fare\" + infinitive also means make someone do something: \"Mi fa ridere\" (he makes me laugh), \"Questo film la fa sempre piangere\" (this film always makes her cry), \"Faccio studiare i bambini dopo cena\" (I make the children study after dinner).",
          "The person goes after the infinitive if it's a noun (\"Faccio entrare il signor Bassi\"), or before \"fare\" if it's a pronoun (\"Lo faccio entrare\": I'll show him in). Never between the two verbs: not \"faccio lui entrare\".",
        ],
        examples: [
          { es: "Mi fa ridere.", en: "He makes me laugh." },
          { es: "Questo film la fa sempre piangere.", en: "This film always makes her cry." },
          { es: "Faccio studiare i bambini dopo cena.", en: "I make the children study after dinner." },
          { es: "Faccio entrare il signor Bassi?", en: "Shall I show Mr. Bassi in?" },
          { es: "Sì, lo faccia entrare.", en: "Yes, show him in. (formal)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He makes me laugh.", answer: "Mi fa ridere.", altAnswers: ["Lui mi fa ridere."], explanation: "Pronoun before \"fare\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This film always makes her cry.", answer: "Questo film la fa sempre piangere.", altAnswers: ["Questo film la fa piangere sempre."], explanation: "\"La\" before \"fa\"." },
          { type: "multiple-choice", question: "How do you say: I make him wait?", options: ["Lo faccio aspettare.", "Faccio lui aspettare.", "Faccio aspettarlo.", "Gli faccio aspettare."], correctIndex: 0, explanation: "Pronoun before \"fare\"; one object, so direct \"lo\"." },
        ],
      },
      {
        heading: "Two objects: faccio leggere la lettera a Marco",
        body: [
          "When the infinitive has its own object, the person who does the action takes \"a\": \"Faccio leggere la lettera a Marco\" (I get Marco to read the letter). As a pronoun, Marco becomes indirect: \"Gli faccio leggere la lettera\".",
          "Compare: \"Faccio leggere Marco\" (I make Marco read; one object), \"Lo faccio leggere\"; but \"Faccio leggere la lettera a Marco\", \"Gli faccio leggere la lettera\".",
        ],
        examples: [
          { es: "Faccio leggere la lettera a Marco.", en: "I get Marco to read the letter." },
          { es: "Gli faccio leggere la lettera.", en: "I get him to read the letter." },
          { es: "Ho fatto assaggiare il sugo a mia madre.", en: "I had my mother taste the sauce." },
          { es: "Le ho fatto assaggiare il sugo.", en: "I had her taste the sauce." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I get him to read the letter.", answer: "Gli faccio leggere la lettera.", explanation: "Two objects: the person is indirect (\"gli\")." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [had her taste] the sauce.", sentence: "___ il sugo.", answer: "Le ho fatto assaggiare", explanation: "\"Le\": she is the indirect object." },
          { type: "listen-choose", audio: "Ho fatto assaggiare il sugo a mia madre.", question: "Who tasted the sauce?", options: ["The speaker's mother", "The speaker", "Both of them", "Nobody yet"], correctIndex: 0, explanation: "\"A mia madre\": she did the tasting." },
        ],
      },
      {
        heading: "Fare + feelings and states",
        body: [
          "Many everyday phrases use this pattern: \"far arrabbiare\" (make angry), \"far preoccupare\" (worry), \"far ridere\", \"far piangere\", \"far aspettare\" (keep waiting), \"far venire voglia di\" (make you want to). \"Non farmi arrabbiare!\" (don't make me angry!).",
          "In the past, \"fare\" always takes \"avere\", even when the infinitive on its own would take \"essere\": \"Ci hanno fatto entrare\" (they let us in), \"Mi hai fatto venire fame\". With \"mi\", \"ti\", \"ci\" and \"vi\" agreement is optional (\"ci hai fatto preoccupare\" or \"ci hai fatti preoccupare\"); with \"lo\", \"la\", \"li\", \"le\" it's needed: \"L'ho fatta ridere\".",
        ],
        examples: [
          { es: "Non farmi arrabbiare!", en: "Don't make me angry!" },
          { es: "Scusa se ti ho fatto aspettare.", en: "Sorry I kept you waiting." },
          { es: "Ci hai fatto preoccupare!", en: "You had us worried!" },
          { es: "Questo profumo mi fa venire fame.", en: "This smell makes me hungry." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry I kept you waiting. (to a friend)", answer: "Scusa se ti ho fatto aspettare.", altAnswers: ["Scusami se ti ho fatto aspettare."], explanation: "\"Far aspettare\" = keep someone waiting." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You had us worried! (to a friend)", answer: "Ci hai fatto preoccupare!", explanation: "\"Far preoccupare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I make the children study after dinner.", answer: "Faccio studiare i bambini dopo cena.", altAnswers: ["Faccio studiare i bambini dopo la cena.", "Dopo cena faccio studiare i bambini."], explanation: "Noun after the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't make me angry! (to a friend)", answer: "Non farmi arrabbiare!", altAnswers: ["Non mi far arrabbiare!", "Non mi fare arrabbiare!"], explanation: "Negative \"tu\" imperative: infinitive \"fare\" + pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I get Marco to read the letter.", answer: "Faccio leggere la lettera a Marco.", explanation: "Two objects: \"a\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This smell makes me hungry.", answer: "Questo profumo mi fa venire fame.", altAnswers: ["Questo odore mi fa venire fame.", "Questo profumino mi fa venire fame."], explanation: "\"Far venire fame\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Show him in. (formal)", answer: "Lo faccia entrare.", explanation: "Formal imperative: pronoun before \"faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher made us repeat the exercise.", answer: "La professoressa ci ha fatto ripetere l'esercizio.", altAnswers: ["Il professore ci ha fatto ripetere l'esercizio.", "L'insegnante ci ha fatto ripetere l'esercizio.", "La maestra ci ha fatto ripetere l'esercizio.", "Il maestro ci ha fatto ripetere l'esercizio."], explanation: "\"Ci\" before \"fare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "His jokes [make everyone laugh].", sentence: "Le sue battute ___.", answer: "fanno ridere tutti", explanation: "\"Fare ridere\" + noun after." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [had my brother try] the new bike.", sentence: "___ la bici nuova a mio fratello.", answer: "Ho fatto provare", explanation: "Two objects: \"a mio fratello\"." },
      { type: "word-order", prompt: "Put the words in order to say: You had us worried!", words: ["Ci", "hai", "fatto", "preoccupare!"], translation: "You had us worried!", explanation: "Pronoun before \"fare\"." },
      { type: "multiple-choice", question: "Replace \"a Marco\": \"Faccio vedere le foto a Marco.\"", options: ["Gli faccio vedere le foto.", "Lo faccio vedere le foto.", "Faccio lui vedere le foto.", "Faccio vederlo le foto."], correctIndex: 0, explanation: "Two objects: Marco becomes \"gli\"." },
      { type: "dictation", audio: "Scusa se ti ho fatto aspettare così tanto.", explanation: "\"Far aspettare\"." },
      { type: "speak", text: "Mio nonno mi faceva sempre ridere, ma mi faceva anche studiare tanto.", prompt: "Say it in Italian: My grandfather always made me laugh, but he also made me study a lot.", tip: "\"Faceva\": fa-CHE-va, soft c before e.", explanation: "\"Fare\" + infinitive in the imperfect." },
    ],
  },
  {
    slug: "b1-farsi-infinitive",
    level: "IT-B1",
    number: 3,
    title: "Farsi + Infinitive",
    summary: "Have something done for yourself with farsi: mi sono fatto tagliare i capelli, si è fatta accompagnare, farsi aiutare, fatti sentire.",
    duration: "17 min",
    sections: [
      {
        heading: "Mi sono fatto tagliare i capelli",
        body: [
          "When the thing done is for yourself or to you, use \"farsi\": \"Mi faccio tagliare i capelli\" (I'm having my hair cut), \"Si fa fare un vestito\" (she's having a dress made for her).",
          "Like every reflexive verb, \"farsi\" takes \"essere\" in the past, and the participle agrees with the subject: \"Mi sono fatto tagliare i capelli\" (a man), \"Mi sono fatta tagliare i capelli\" (a woman).",
        ],
        examples: [
          { es: "Mi faccio tagliare i capelli.", en: "I'm having my hair cut." },
          { es: "Mi sono fatto tagliare i capelli.", en: "I had my hair cut. (a man)" },
          { es: "Mi sono fatta tagliare i capelli.", en: "I had my hair cut. (a woman)" },
          { es: "Si è fatta fare un vestito su misura.", en: "She had a dress made to measure." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had my hair cut. (a woman speaking)", answer: "Mi sono fatta tagliare i capelli.", explanation: "\"Farsi\" + \"essere\"; \"fatta\" agrees." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Mi sono fatto tagliare i capelli.", "Mi ho fatto tagliare i capelli.", "Ho fatto tagliarmi i capelli.", "Mi sono fatto tagliato i capelli."], correctIndex: 0, explanation: "Reflexive: \"essere\"." },
        ],
      },
      {
        heading: "Farsi aiutare, farsi accompagnare",
        body: [
          "\"Farsi\" + infinitive also means get someone to do something to or for you: \"farsi aiutare\" (get help), \"farsi accompagnare\" (get someone to take you), \"farsi spiegare\" (get it explained), \"farsi prestare\" (borrow). The person who does it takes \"da\": \"Si è fatta accompagnare da un'amica\".",
          "English my hair, my car becomes the reflexive pronoun, not a possessive: \"Mi faccio tagliare i capelli\", not \"faccio tagliare i miei capelli\". Compare \"Faccio tagliare i capelli a mio figlio\" (my son's hair, so plain \"fare\"). And \"farsi prestare\" is the everyday way to say borrow, since Italian has no single verb for it: \"Mi sono fatto prestare cinquanta euro\".",
        ],
        examples: [
          { es: "Si è fatta accompagnare a casa da un'amica.", en: "She got a friend to take her home." },
          { es: "Fatti aiutare da tuo fratello.", en: "Get your brother to help you." },
          { es: "Mi sono fatto spiegare la strada.", en: "I got someone to explain the way to me." },
          { es: "Mi faccio prestare la macchina da mia sorella.", en: "I'm borrowing my sister's car." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Get your brother to help you. (to a friend)", answer: "Fatti aiutare da tuo fratello.", explanation: "\"Fa'\" + \"ti\" = \"fatti\"; \"da\" for the helper." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [got a friend to take her] home.", sentence: "___ a casa da un'amica.", answer: "Si è fatta accompagnare", explanation: "\"Farsi accompagnare\"; \"fatta\" agrees." },
          { type: "listen-choose", audio: "Mi faccio prestare la macchina da mia sorella.", question: "Whose car is the speaker using?", options: ["The sister's", "Their own", "A rented one", "A friend's"], correctIndex: 0, explanation: "\"Farsi prestare\" = to borrow." },
        ],
      },
      {
        heading: "Fatti sentire! Fixed phrases",
        body: [
          "A few \"farsi\" phrases are everyday Italian: \"Fatti sentire!\" (keep in touch, give me a call), \"farsi vedere\" (show up, or see a doctor: \"Fatti vedere da un medico\"), \"farsi capire\" (make yourself understood), \"farsi notare\" (get noticed).",
        ],
        examples: [
          { es: "Fatti sentire!", en: "Keep in touch!" },
          { es: "Non si fa vedere da mesi.", en: "He hasn't shown his face for months." },
          { es: "Fatti vedere da un medico.", en: "Go and see a doctor." },
          { es: "Riesco a farmi capire in italiano.", en: "I can make myself understood in Italian." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can make myself understood in Italian.", answer: "Riesco a farmi capire in italiano.", explanation: "\"Farsi capire\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Go and see a doctor. (to a friend)", answer: "Fatti vedere da un medico.", altAnswers: ["Fatti visitare da un medico.", "Vai da un medico."], explanation: "\"Farsi vedere da\" = to get yourself seen by." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm having my hair cut.", answer: "Mi faccio tagliare i capelli.", altAnswers: ["Mi sto facendo tagliare i capelli.", "Vado a farmi tagliare i capelli."], explanation: "\"Farsi\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had my hair cut. (a man speaking)", answer: "Mi sono fatto tagliare i capelli.", explanation: "\"Fatto\" agrees with a male speaker." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Keep in touch! (to a friend)", answer: "Fatti sentire!", explanation: "Fixed phrase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got someone to explain the way to me. (a man speaking)", answer: "Mi sono fatto spiegare la strada.", explanation: "\"Farsi spiegare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She had a dress made to measure.", answer: "Si è fatta fare un vestito su misura.", explanation: "\"Farsi fare\": \"fare\" twice is normal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He hasn't shown his face for months.", answer: "Non si fa vedere da mesi.", altAnswers: ["Sono mesi che non si fa vedere."], explanation: "\"Farsi vedere\" + present with \"da\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Why don't you [get someone to help you]? (to a friend)", sentence: "Perché non ___?", answer: "ti fai aiutare", explanation: "\"Farsi aiutare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I got a colleague to lend me] a pen. (a man speaking)", sentence: "___ una penna da un collega.", answer: "Mi sono fatto prestare", explanation: "\"Farsi prestare\" = to borrow; \"fatto\" agrees with the speaker." },
      { type: "word-order", prompt: "Put the words in order to say: She got her father to take her to the station.", words: ["Si", "è", "fatta", "accompagnare", "in", "stazione", "da", "suo", "padre."], translation: "She got her father to take her to the station.", explanation: "\"Farsi accompagnare da\"." },
      { type: "multiple-choice", question: "What does \"Fatti vedere ogni tanto!\" mean?", options: ["Come and see us now and then!", "Have a look sometimes!", "Get your eyes checked!", "Let me see you do it!"], correctIndex: 0, explanation: "\"Farsi vedere\" = to show up, visit." },
      { type: "dictation", audio: "Mi sono fatta prestare la macchina da mia sorella.", explanation: "\"Farsi prestare\"; \"fatta\" agrees." },
      { type: "speak", text: "Ieri mi sono fatto tagliare i capelli e mi sono fatto fare la barba.", prompt: "Say it in Italian: Yesterday I had my hair cut and I had a shave. (a man speaking)", tip: "\"Fatto fare\": two double sounds, FAT-to FA-re.", explanation: "\"Farsi\" + infinitive twice." },
    ],
  },
  {
    slug: "b1-lasciare-infinitive",
    level: "IT-B1",
    number: 4,
    title: "Letting: Lasciare + Infinitive",
    summary: "Let people do things with lasciare + infinitive: lasciami parlare, lascia stare, non lo lasciano uscire, mi lasci passare?",
    duration: "17 min",
    sections: [
      {
        heading: "Lasciami parlare",
        body: [
          "\"Lasciare\" + infinitive means let, allow: \"Lasciami parlare!\" (let me speak!), \"Lascia giocare i bambini\" (let the children play). It works like \"fare\": no preposition, and pronouns go before it or attach to the imperative.",
          "\"I suoi genitori non lo lasciano uscire la sera\" (his parents don't let him go out in the evening). Polite: \"Mi lasci passare, per favore?\" (could you let me through?).",
        ],
        examples: [
          { es: "Lasciami parlare!", en: "Let me speak!" },
          { es: "Lascia giocare i bambini.", en: "Let the children play." },
          { es: "Lasciali giocare.", en: "Let them play." },
          { es: "I suoi genitori non lo lasciano uscire la sera.", en: "His parents don't let him go out in the evening." },
          { es: "Mi lascia passare, per favore?", en: "Could you let me through, please? (formal)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me speak! (to a friend)", answer: "Lasciami parlare!", explanation: "No preposition; \"mi\" attaches." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His parents don't let him go out in the evening.", answer: "I suoi genitori non lo lasciano uscire la sera.", altAnswers: ["I suoi genitori non lo lasciano uscire di sera."], explanation: "\"Lo\" before \"lasciare\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Lasciami dormire!", "Lasciami di dormire!", "Lasciami a dormire!", "Lascia me dormire!"], correctIndex: 0, explanation: "\"Lasciare\" + infinitive, no preposition." },
        ],
      },
      {
        heading: "Lascia stare, lascia perdere",
        body: [
          "Two set phrases you'll hear every day: \"Lascia stare!\" and \"Lascia perdere!\" both mean forget it, never mind, leave it. \"Lascia stare, pago io\" (never mind, I'll pay). Polite: \"Lasci stare\".",
          "\"Lasciar(e) cadere\" is let fall, drop: \"Ha lasciato cadere il bicchiere\" (she dropped the glass).",
        ],
        examples: [
          { es: "Lascia stare, pago io.", en: "Never mind, I'll pay." },
          { es: "Lascia perdere, non ne vale la pena.", en: "Forget it, it's not worth it." },
          { es: "Ha lasciato cadere il bicchiere.", en: "She dropped the glass." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Never mind, I'll pay. (to a friend)", answer: "Lascia stare, pago io.", altAnswers: ["Lascia perdere, pago io.", "Lascia stare, offro io."], explanation: "\"Lascia stare\" = never mind." },
          { type: "listen-choose", audio: "Lascia perdere, non ne vale la pena.", question: "What is the speaker saying?", options: ["Forget it, it's not worth it.", "Don't lose it, it's valuable.", "Let it go, it's too expensive.", "Leave it here, it's heavy."], correctIndex: 0, explanation: "\"Lascia perdere\" = forget it." },
        ],
      },
      {
        heading: "Fare or lasciare?",
        body: [
          "\"Fare\" pushes, \"lasciare\" allows: \"Mi ha fatto guidare\" (he made me drive), \"Mi ha lasciato guidare\" (he let me drive). With two objects, the person is indirect with both: \"Gli lascio usare la macchina\" (I let him use the car).",
          "Careful with English let's: it's a suggestion, the \"noi\" form, not \"lasciare\". Let's go = \"Andiamo!\"; \"Lasciaci andare!\" means let us go, set us free. \"Lasciare\" can also take \"che\" + subjunctive, a little more formal: \"Lascia che ti spieghi\" (let me explain). In the past, \"lasciato\" agrees with \"lo\", \"la\", \"li\", \"le\": \"L'hanno lasciata uscire\".",
        ],
        examples: [
          { es: "Mi ha fatto guidare.", en: "He made me drive." },
          { es: "Mi ha lasciato guidare.", en: "He let me drive." },
          { es: "Gli lascio usare la macchina.", en: "I let him use the car." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He let me drive.", answer: "Mi ha lasciato guidare.", altAnswers: ["Mi ha lasciata guidare."], explanation: "\"Lasciare\" = let." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [let him use] the car.", sentence: "___ la macchina.", answer: "Gli lascio usare", explanation: "Two objects: indirect \"gli\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let the children play. (to a friend)", answer: "Lascia giocare i bambini.", altAnswers: ["Lascia che i bambini giochino."], explanation: "\"Lasciare\" + infinitive + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let them play. (to a friend)", answer: "Lasciali giocare.", explanation: "\"Li\" attaches to the imperative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you let me through, please? (formal)", answer: "Mi lascia passare, per favore?", altAnswers: ["Mi lasci passare, per favore?", "Mi fa passare, per favore?", "Permesso, mi lascia passare?"], explanation: "Polite \"Lei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Forget it, it's not worth it. (to a friend)", answer: "Lascia perdere, non ne vale la pena.", altAnswers: ["Lascia stare, non ne vale la pena."], explanation: "\"Lascia perdere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She dropped the glass.", answer: "Ha lasciato cadere il bicchiere.", altAnswers: ["Le è caduto il bicchiere.", "Ha fatto cadere il bicchiere."], explanation: "\"Lasciare cadere\" = let fall." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He made me drive.", answer: "Mi ha fatto guidare.", explanation: "\"Fare\" = make." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let me sleep]! (to a friend)", sentence: "___!", answer: "Lasciami dormire", explanation: "\"Lasciami\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [didn't let us in].", sentence: "Non ___.", answer: "ci hanno lasciato entrare", altAnswers: ["ci hanno lasciati entrare", "ci hanno lasciate entrare", "ci hanno fatto entrare"], explanation: "\"Lasciare entrare\"." },
      { type: "word-order", prompt: "Put the words in order to say: Let me finish talking!", words: ["Lasciami", "finire", "di", "parlare!"], translation: "Let me finish talking!", explanation: "\"Lasciami\" + infinitive." },
      { type: "multiple-choice", question: "Which means: he let me use his computer?", options: ["Mi ha lasciato usare il suo computer.", "Mi ha fatto usare il suo computer.", "Mi ha lasciato di usare il suo computer.", "Ha lasciato me usare il suo computer."], correctIndex: 0, explanation: "\"Lasciare\" = let; no preposition." },
      { type: "dictation", audio: "Lascia stare, ci penso io.", explanation: "\"Lascia stare\" = leave it." },
      { type: "speak", text: "Lasciami parlare! Mio padre non mi lasciava mai guidare la sua macchina.", prompt: "Say it in Italian: Let me speak! My father never let me drive his car.", tip: "\"Lasciami\": sc before i is soft, LA-sha-mi.", explanation: "\"Lasciare\" + infinitive." },
    ],
  },
  {
    slug: "b1-drill-fare-lasciare",
    level: "IT-B1",
    number: 5,
    title: "Drill: Fare and Lasciare",
    summary: "High-repetition production of fare, farsi and lasciare + infinitive: having things done, making people do things, letting them.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Have, make, let",
        body: [
          "Have it done: \"faccio riparare\". Make someone: \"lo faccio aspettare\". Have it done for yourself: \"mi faccio tagliare\" (past with \"essere\"). Let: \"lasciami parlare\". No preposition before the infinitive.",
        ],
        examples: [
          { es: "Faccio lavare le tende.", en: "I'm having the curtains washed." },
          { es: "Mi fai sempre ridere.", en: "You always make me laugh." },
          { es: "Mi sono fatta fare le unghie.", en: "I had my nails done." },
          { es: "Lasciala parlare!", en: "Let her speak!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm having the curtains washed.", answer: "Faccio lavare le tende.", altAnswers: ["Sto facendo lavare le tende."], explanation: "\"Fare\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let her speak! (to a friend)", answer: "Lasciala parlare!", explanation: "\"La\" attaches to \"lascia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had the windows changed.", answer: "Abbiamo fatto cambiare le finestre.", altAnswers: ["Abbiamo fatto sostituire le finestre."], explanation: "\"Fare\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You always make me laugh. (to a friend)", answer: "Mi fai sempre ridere.", explanation: "\"Mi\" before \"fare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had my nails done. (a woman speaking)", answer: "Mi sono fatta fare le unghie.", explanation: "\"Farsi fare\"; \"fatta\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't keep me waiting! (to a friend)", answer: "Non farmi aspettare!", altAnswers: ["Non mi far aspettare!", "Non mi fare aspettare!"], explanation: "\"Far aspettare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They don't let us use our phones at school.", answer: "Non ci lasciano usare il telefono a scuola.", altAnswers: ["A scuola non ci lasciano usare il telefono.", "Non ci lasciano usare i telefoni a scuola.", "Non ci lasciano usare il cellulare a scuola."], explanation: "\"Lasciare\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have the documents sent to you. (formal)", answer: "Le faccio mandare i documenti.", altAnswers: ["Le farò mandare i documenti.", "Le faccio inviare i documenti.", "Le farò inviare i documenti."], explanation: "\"Le\" = to you (formal)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Get someone to help you! (to a friend)", answer: "Fatti aiutare!", altAnswers: ["Fatti dare una mano!"], explanation: "\"Farsi aiutare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor made him stop smoking.", answer: "Il medico l'ha fatto smettere di fumare.", altAnswers: ["Il dottore l'ha fatto smettere di fumare.", "Il medico lo ha fatto smettere di fumare.", "Il medico gli ha fatto smettere di fumare.", "Il dottore gli ha fatto smettere di fumare."], explanation: "\"Di fumare\" isn't a direct object, so the textbook choice is direct \"lo\" (\"l'ha fatto smettere\"); \"gli ha fatto smettere\" is also very common and accepted." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [had the dog washed].", sentence: "___ il cane.", answer: "Ho fatto lavare", explanation: "\"Fatto\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let me know] how it goes! (to a friend)", sentence: "___ come va!", answer: "Fammi sapere", explanation: "\"Fammi sapere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My boss [let me leave] early.", sentence: "Il capo mi ha ___ prima.", answer: "lasciato uscire", altAnswers: ["lasciato andare", "lasciata uscire", "lasciata andare", "fatto uscire", "fatto andare"], explanation: "\"Lasciare\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [got a taxi to take us] to the airport.", sentence: "___ in aeroporto da un taxi.", answer: "Ci siamo fatti portare", altAnswers: ["Ci siamo fatte portare", "Ci siamo fatti accompagnare", "Ci siamo fatte accompagnare"], explanation: "\"Farsi portare\"; \"fatti\" agrees." },
      { type: "word-order", prompt: "Put the words in order to say: I made the children tidy their room.", words: ["Ho", "fatto", "mettere", "in", "ordine", "la", "camera", "ai", "bambini."], translation: "I made the children tidy their room.", explanation: "Two objects: \"ai bambini\"." },
      { type: "word-order", prompt: "Put the words in order to say: Could you let me through, please? (formal)", words: ["Mi", "lascia", "passare,", "per", "favore?"], translation: "Could you let me through, please?", explanation: "\"Lasciare\" + infinitive; \"mi\" before the conjugated verb." },
      { type: "multiple-choice", question: "Which means: I'm having my car washed?", options: ["Faccio lavare la macchina.", "Lavo la macchina.", "Lascio lavare la macchina.", "Mi lavo la macchina."], correctIndex: 0, explanation: "\"Fare\" + infinitive." },
      { type: "multiple-choice", question: "Which means: she let me try?", options: ["Mi ha lasciato provare.", "Mi ha fatto provare.", "Mi ha lasciato di provare.", "Ha lasciato me provare."], correctIndex: 0, explanation: "\"Lasciare\" = let." },
      { type: "listen-choose", audio: "Ci hanno fatto aspettare un'ora.", question: "What happened?", options: ["They were kept waiting an hour.", "They waited for someone for an hour.", "They let someone wait an hour.", "They were an hour late."], correctIndex: 0, explanation: "\"Far aspettare\" = keep waiting." },
      { type: "dictation", audio: "Domani faccio controllare i freni della macchina.", explanation: "\"Fare\" + infinitive." },
      { type: "speak", text: "Lascia stare! Faccio venire un idraulico domani mattina.", prompt: "Say it in Italian: Leave it! I'll get a plumber to come tomorrow morning.", tip: "\"Idraulico\": i-drau-LI-co.", explanation: "\"Lascia stare\" and \"far venire\"." },
    ],
  },
  {
    slug: "b1-drill-fare-pronouns",
    level: "IT-B1",
    number: 6,
    title: "Drill: Fare with Pronouns",
    summary: "High-repetition production with pronouns: la faccio riparare, me lo faccio mandare, gliel'ho fatto vedere, l'ho fatta riparare.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Pronouns go before fare",
        body: [
          "Pronouns go before the conjugated \"fare\", never on the infinitive: \"La faccio riparare\". They attach to a \"tu\" imperative or an infinitive \"fare\": \"Fammelo vedere\", \"Devo farla riparare\". In the past, \"fatto\" agrees with \"lo\", \"la\", \"li\", \"le\": \"L'ho fatta riparare\" (the car), \"Le ho fatte lavare\" (the shirts).",
        ],
        examples: [
          { es: "La macchina? La faccio riparare domani.", en: "The car? I'm having it repaired tomorrow." },
          { es: "L'ho fatta riparare ieri.", en: "I had it repaired yesterday." },
          { es: "Me lo faccio mandare per email.", en: "I'll have it sent to me by email." },
          { es: "Gliel'ho fatto vedere.", en: "I showed it to him." },
          { es: "Fammelo vedere!", en: "Let me see it!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The car? I had it repaired yesterday.", answer: "La macchina? L'ho fatta riparare ieri.", altAnswers: ["La macchina? L'ho fatta aggiustare ieri."], explanation: "\"Fatta\" agrees with \"la\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me see it! (to a friend)", answer: "Fammelo vedere!", altAnswers: ["Fammela vedere!", "Fammeli vedere!", "Fammele vedere!"], explanation: "\"Fa'\" + \"me\" + \"lo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The car? I'm having it repaired tomorrow.", answer: "La macchina? La faccio riparare domani.", altAnswers: ["La macchina? La faccio aggiustare domani.", "La macchina? Domani la faccio riparare."], explanation: "\"La\" before \"faccio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shirts? I had them washed.", answer: "Le camicie? Le ho fatte lavare.", explanation: "\"Fatte\" agrees with \"le\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have it sent to me by email. (the file)", answer: "Me lo faccio mandare per email.", altAnswers: ["Me lo faccio mandare via email.", "Me lo faccio inviare per email.", "Me lo farò mandare per email."], explanation: "\"Mi\" + \"lo\" = \"me lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I showed it to him. (the video)", answer: "Gliel'ho fatto vedere.", explanation: "\"Gli\" + \"lo\" = \"glielo\", elided to \"gliel'\" before \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need to have it checked. (the boiler)", answer: "Devo farla controllare.", altAnswers: ["La devo far controllare.", "La devo fare controllare."], explanation: "Pronoun on the infinitive \"far(e)\" or before the modal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Show them in. (formal, the guests)", answer: "Li faccia entrare.", explanation: "Formal imperative: \"li\" before \"faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll let you know. (to a friend)", answer: "Te lo faccio sapere.", altAnswers: ["Ti faccio sapere.", "Ti farò sapere.", "Te lo farò sapere."], explanation: "\"Ti\" + \"lo\" = \"te lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let them go out. (to a friend)", answer: "Lasciali uscire.", explanation: "Same pattern with \"lasciare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pizza? [We had it delivered].", sentence: "La pizza? ___.", answer: "L'abbiamo fatta portare", altAnswers: ["L'abbiamo fatta consegnare", "La abbiamo fatta portare"], explanation: "\"Fatta\" agrees with \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The letter? [I got her to read it].", sentence: "La lettera? ___.", answer: "Gliel'ho fatta leggere", explanation: "\"Le\" + \"la\" = \"gliela\"; \"fatta\" agrees with \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The photos? [Show them to me]! (to a friend)", sentence: "Le foto? ___!", answer: "Fammele vedere", explanation: "\"Fa'\" + \"me\" + \"le\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children? [I made them sleep] at eight.", sentence: "I bambini? ___ alle otto.", answer: "Li ho fatti dormire", altAnswers: ["Li ho fatti andare a letto"], explanation: "\"Fatti\" agrees with \"li\"." },
      { type: "word-order", prompt: "Put the words in order to say: My bike? I'll have it repaired on Monday.", words: ["La", "mia", "bici?", "La", "faccio", "riparare", "lunedì."], translation: "My bike? I'll have it repaired on Monday.", explanation: "Pronoun before \"faccio\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'll have it brought to you. (the menu, formal)", words: ["Glielo", "faccio", "portare."], translation: "I'll have it brought to you.", explanation: "\"Le\" (formal you) + \"lo\" = \"glielo\"." },
      { type: "multiple-choice", question: "The glasses (\"gli occhiali\")? Which is correct?", options: ["Li ho fatti riparare.", "Li ho fatto riparare.", "Ho fatto ripararli.", "Ho fattoli riparare."], correctIndex: 0, explanation: "Pronoun before \"avere\"; \"fatti\" agrees." },
      { type: "multiple-choice", question: "Replace both objects: \"Faccio vedere il video a Luca.\"", options: ["Glielo faccio vedere.", "Lo gli faccio vedere.", "Gli lo faccio vedere.", "Faccio vederglielo."], correctIndex: 0, explanation: "\"Gli\" + \"lo\" = \"glielo\", before \"faccio\"." },
      { type: "listen-choose", audio: "Il vestito? Me lo sono fatto fare a Napoli.", question: "What does the speaker say about the suit?", options: ["It was made for him in Naples.", "He made it himself in Naples.", "He bought it second-hand in Naples.", "He's going to Naples to have it made."], correctIndex: 0, explanation: "\"Farsi fare\" with \"me lo\"." },
      { type: "dictation", audio: "Le chiavi? Me le sono fatte dare dal portiere.", explanation: "\"Fatte\" agrees with \"le\"." },
      { type: "speak", text: "La lavatrice? L'ho fatta riparare, ma te lo faccio sapere se si rompe ancora.", prompt: "Say it in Italian: The washing machine? I had it repaired, but I'll let you know if it breaks again.", tip: "\"L'ho fatta\": lo-FAT-ta, one smooth chunk.", explanation: "Agreement \"fatta\" and \"te lo faccio sapere\"." },
    ],
  },
  {
    slug: "b1-error-hunt-fare",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Fare + Infinitive",
    summary: "Fix ho riparato la macchina dal meccanico, faccio lui leggere, mi ho fatto tagliare and lasciami di parlare.",
    duration: "17 min",
    sections: [
      {
        heading: "Who did the work?",
        body: [
          "Each sentence below was written by a learner and has one mistake. \"Ho riparato la macchina dal meccanico\" says you repaired it yourself, at the mechanic's. If the mechanic did it, you had it done: \"Ho fatto riparare la macchina dal meccanico\".",
          "The same goes for haircuts: \"Ho tagliato i capelli\" means you cut them yourself (or cut someone's). At the hairdresser's: \"Mi sono fatto tagliare i capelli\".",
        ],
        examples: [
          { es: "Ho fatto riparare la macchina dal meccanico.", en: "I had the car repaired by the mechanic." },
          { es: "Mi sono fatta tagliare i capelli.", en: "I had my hair cut. (a woman)" },
          { es: "Ho fatto pulire il divano.", en: "I had the sofa cleaned." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho riparato la macchina dal meccanico\". Write it correctly: I had the car repaired by the mechanic.", source: "I had the car repaired by the mechanic.", answer: "Ho fatto riparare la macchina dal meccanico.", altAnswers: ["Ho fatto aggiustare la macchina dal meccanico."], explanation: "Someone else did it: \"fare\" + infinitive." },
          { type: "multiple-choice", question: "You went to the hairdresser's. Which do you say?", options: ["Mi sono fatto tagliare i capelli.", "Ho tagliato i capelli.", "Mi sono tagliato i capelli.", "Ho tagliato i miei capelli."], correctIndex: 0, explanation: "\"Farsi tagliare\": the hairdresser did it." },
        ],
      },
      {
        heading: "Pronouns and auxiliaries",
        body: [
          "\"Faccio lui leggere\" copies English I make him read. The pronoun goes before \"fare\": \"Lo faccio leggere\". \"Mi ho fatto tagliare\" uses the wrong auxiliary: \"farsi\" is reflexive, so \"Mi sono fatto tagliare\".",
          "\"Ho fatto ripararla\" is also a slip: in compound tenses the pronoun goes before \"avere\" and \"fatto\" agrees: \"L'ho fatta riparare\".",
        ],
        examples: [
          { es: "Lo faccio leggere.", en: "I make him read." },
          { es: "Mi sono fatto tagliare i capelli.", en: "I had my hair cut. (a man)" },
          { es: "L'ho fatta riparare.", en: "I had it repaired." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Faccio lui leggere\". Write it correctly: I make him read.", source: "I make him read.", answer: "Lo faccio leggere.", explanation: "Pronoun before \"fare\"." },
          { type: "fill-blank", prompt: "A learner wrote \"Mi ho fatto tagliare i capelli\". Write the Italian for the bold words.", en: "[I had] my hair cut. (a man speaking)", sentence: "___ tagliare i capelli.", answer: "Mi sono fatto", explanation: "\"Farsi\" takes \"essere\"." },
          { type: "listen-choose", audio: "L'ho fatta riparare la settimana scorsa.", question: "What did the speaker do last week?", options: ["Had something repaired", "Repaired something alone", "Bought something new", "Broke something"], correctIndex: 0, explanation: "\"L'ho fatta riparare\" = I had it repaired." },
        ],
      },
      {
        heading: "No preposition",
        body: [
          "\"Lasciami di parlare\" adds a preposition that \"lasciare\" doesn't take: \"Lasciami parlare\". The same with \"fare\": not \"faccio a riparare\" but \"faccio riparare\".",
        ],
        examples: [
          { es: "Lasciami parlare.", en: "Let me speak." },
          { es: "Faccio riparare il tetto.", en: "I'm having the roof repaired." },
          { es: "Non mi lasciano entrare.", en: "They won't let me in." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Lasciami di parlare\". Write it correctly: Let me speak.", source: "Let me speak. (to a friend)", answer: "Lasciami parlare.", altAnswers: ["Lasciami parlare!"], explanation: "No preposition after \"lasciare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho pulito il tappeto in lavanderia\". Write it correctly: I had the carpet cleaned at the dry cleaner's.", source: "I had the carpet cleaned at the dry cleaner's.", answer: "Ho fatto pulire il tappeto in lavanderia.", altAnswers: ["Ho fatto lavare il tappeto in lavanderia."], explanation: "Someone else did it." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Faccio lei ridere\". Write it correctly: I make her laugh.", source: "I make her laugh.", answer: "La faccio ridere.", explanation: "\"La\" before \"faccio\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si ha fatta accompagnare\". Write it correctly: She got someone to take her.", source: "She got someone to take her.", answer: "Si è fatta accompagnare.", explanation: "\"Farsi\" + \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Lasciali a giocare\". Write it correctly: Let them play.", source: "Let them play. (to a friend)", answer: "Lasciali giocare.", explanation: "No preposition." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Lo faccio leggere la lettera\". Write it correctly: I get him to read the letter.", source: "I get him to read the letter.", answer: "Gli faccio leggere la lettera.", explanation: "Two objects: the person is indirect." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho fatto ripararle\" about the shoes. Write it correctly: I had them repaired.", source: "The shoes? I had them repaired.", answer: "Le scarpe? Le ho fatte riparare.", altAnswers: ["Le scarpe? Le ho fatte aggiustare."], explanation: "Pronoun before \"avere\"; \"fatte\" agrees." },
      { type: "fill-blank", prompt: "A learner wrote \"Fa mi vedere!\". Write the Italian for the bold words.", en: "[Let me see]! (to a friend)", sentence: "___!", answer: "Fammi vedere", explanation: "\"Fa'\" + \"mi\" = \"fammi\", one word." },
      { type: "fill-blank", prompt: "A learner wrote \"Devo fare a controllare la caldaia\". Write the Italian for the bold words.", en: "I need to [have the boiler checked].", sentence: "Devo ___.", answer: "far controllare la caldaia", altAnswers: ["fare controllare la caldaia"], explanation: "No preposition." },
      { type: "multiple-choice", question: "Which sentence has no mistake?", options: ["Mi sono fatta prestare la bici.", "Mi ho fatta prestare la bici.", "Mi sono fatto prestare di la bici.", "Ho fatto prestarmi la bici."], correctIndex: 0, explanation: "\"Farsi\" + \"essere\"; no preposition." },
      { type: "word-order", prompt: "Put the words in order to say: My parents never let me go out.", words: ["I", "miei", "non", "mi", "lasciavano", "mai", "uscire."], translation: "My parents never let me go out.", explanation: "\"Mi\" before \"lasciare\"." },
      { type: "dictation", audio: "Ho fatto riparare la macchina, ma non l'ho fatta lavare.", explanation: "\"Fatta\" agrees with \"la\"." },
      { type: "speak", text: "Mi sono fatto tagliare i capelli e ho fatto riparare la bici.", prompt: "Say it in Italian: I had my hair cut and I had my bike repaired. (a man speaking)", tip: "\"Sono fatto\" vs \"ho fatto\": reflexive, then not.", explanation: "\"Farsi\" with \"essere\", \"fare\" with \"avere\"." },
    ],
  },
  {
    slug: "b1-dialogue-lab-hairdresser",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: At the Hairdresser",
    summary: "At a hairdresser's in Verona, a customer asks for a trim: vorrei farmi tagliare i capelli, li faccio solo spuntare, mi lascio consigliare.",
    duration: "17 min",
    sections: [
      {
        heading: "Booking and arriving",
        body: [
          "Sofia calls a hairdresser's in Verona (\"il parrucchiere\") to book. \"Buongiorno, vorrei prendere un appuntamento per farmi tagliare i capelli\". The owner, Franco, offers Saturday at ten.",
          "On Saturday he asks what she'd like: \"Cosa facciamo oggi?\" Sofia isn't sure yet: \"Non lo so, forse li faccio solo spuntare\" (maybe I'll just have them trimmed).",
        ],
        examples: [
          { es: "Vorrei prendere un appuntamento per farmi tagliare i capelli.", en: "I'd like to book an appointment for a haircut." },
          { es: "Sabato alle dieci va bene?", en: "Is Saturday at ten all right?" },
          { es: "Cosa facciamo oggi?", en: "What are we doing today?" },
          { es: "Forse li faccio solo spuntare.", en: "Maybe I'll just have them trimmed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to book an appointment for a haircut.", answer: "Vorrei prendere un appuntamento per farmi tagliare i capelli.", altAnswers: ["Vorrei fissare un appuntamento per farmi tagliare i capelli.", "Vorrei prenotare per farmi tagliare i capelli."], explanation: "\"Farmi tagliare\": \"mi\" on the infinitive." },
          { type: "listen-choose", audio: "Forse li faccio solo spuntare.", question: "What does Sofia want?", options: ["Just a trim", "A completely new style", "A color", "Nothing at all"], correctIndex: 0, explanation: "\"Spuntare\" = to trim the ends." },
        ],
      },
      {
        heading: "Letting the expert decide",
        body: [
          "Franco suggests something bolder: \"Perché non li facciamo un po' più corti? Ti starebbero benissimo\". Sofia hesitates, then gives in: \"Va bene, mi lascio consigliare\" (all right, I'll take your advice).",
          "At the end: \"Ti faccio anche la piega?\" (shall I blow-dry it too?). \"Sì, grazie. E mi fai vedere dietro?\" (and can you show me the back?).",
        ],
        examples: [
          { es: "Perché non li facciamo un po' più corti?", en: "Why don't we make them a bit shorter?" },
          { es: "Va bene, mi lascio consigliare.", en: "All right, I'll take your advice." },
          { es: "Ti faccio anche la piega?", en: "Shall I blow-dry it too?" },
          { es: "Mi fai vedere dietro?", en: "Can you show me the back?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "All right, I'll take your advice.", answer: "Va bene, mi lascio consigliare.", altAnswers: ["Va bene, mi faccio consigliare.", "D'accordo, mi lascio consigliare."], explanation: "\"Lasciarsi consigliare\" = let yourself be advised." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you show me the back? (to the hairdresser, informal)", answer: "Mi fai vedere dietro?", altAnswers: ["Mi fai vedere di dietro?"], explanation: "\"Far vedere\" = to show." },
        ],
      },
      {
        heading: "Telling a friend",
        body: [
          "That evening Sofia meets her friend Beatrice. \"Ti piace? Me li sono fatti tagliare da Franco\". Beatrice loves it: \"Stai benissimo! Dammi il numero, che la prossima volta mi faccio fare la piega anch'io\".",
        ],
        examples: [
          { es: "Me li sono fatti tagliare da Franco.", en: "I had them cut by Franco." },
          { es: "Stai benissimo!", en: "You look great!" },
          { es: "La prossima volta mi faccio fare la piega anch'io.", en: "Next time I'll have a blow-dry too." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Next time [I'll have a blow-dry] too.", sentence: "La prossima volta ___ anch'io.", answer: "mi faccio fare la piega", explanation: "\"Farsi fare\"." },
          { type: "multiple-choice", question: "In \"Me li sono fatti tagliare\", why \"fatti\"?", options: ["It agrees with \"li\" (i capelli).", "It agrees with Sofia.", "It agrees with Franco.", "It's always \"fatti\" with \"farsi\"."], correctIndex: 0, explanation: "With a direct pronoun before it, the participle agrees with the pronoun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe I'll just have them trimmed.", answer: "Forse li faccio solo spuntare.", altAnswers: ["Forse li faccio spuntare e basta."], explanation: "\"Li\" = i capelli." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why don't we make them a bit shorter?", answer: "Perché non li facciamo un po' più corti?", explanation: "\"Fare\" + adjective = make them shorter." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall I blow-dry it too? (to a friend)", answer: "Ti faccio anche la piega?", explanation: "\"Fare la piega\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You look great! (to a friend)", answer: "Stai benissimo!", altAnswers: ["Stai molto bene!"], explanation: "\"Stare bene\" = to look good on someone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to have my hair colored.", answer: "Vorrei farmi fare il colore.", altAnswers: ["Vorrei farmi tingere i capelli.", "Vorrei fare il colore."], explanation: "\"Farsi fare il colore\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [had them cut] by Franco. (a woman speaking)", sentence: "Me li sono ___ da Franco.", answer: "fatti tagliare", explanation: "\"Fatti\" agrees with \"li\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [let myself be talked into] a new style.", sentence: "Mi sono ___ un taglio nuovo.", answer: "lasciata convincere a fare", altAnswers: ["lasciato convincere a fare", "fatta convincere a fare", "fatto convincere a fare"], explanation: "\"Lasciarsi convincere a\"." },
      { type: "word-order", prompt: "Put the words in order to say: Can you show me the back?", words: ["Mi", "fai", "vedere", "dietro?"], translation: "Can you show me the back?", explanation: "\"Far vedere\"." },
      { type: "multiple-choice", question: "Why does Sofia end up with shorter hair?", options: ["She let Franco advise her.", "Franco made a mistake.", "Beatrice told her to.", "She booked a different style."], correctIndex: 0, explanation: "\"Mi lascio consigliare\"." },
      { type: "listen-choose", audio: "Dammi il numero, che la prossima volta mi faccio fare la piega anch'io.", question: "What does Beatrice want?", options: ["The hairdresser's number", "Sofia's new address", "A haircut today", "Franco's opinion"], correctIndex: 0, explanation: "\"Dammi il numero\" = give me the number." },
      { type: "dictation", audio: "Vorrei farmi tagliare i capelli sabato mattina.", explanation: "\"Farmi tagliare\"." },
      { type: "speak", text: "Buongiorno, vorrei farmi tagliare i capelli, ma non troppo corti: solo una spuntatina.", prompt: "Say it in Italian: Good morning, I'd like a haircut, but not too short: just a little trim.", tip: "\"Spuntatina\": spun-ta-TI-na, a friendly diminutive.", explanation: "\"Farsi tagliare\"." },
    ],
  },
  {
    slug: "b1-reading-lab-services",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: Services Ads",
    summary: "Read ads for repairs, cleaning and deliveries full of fare and lasciare + infinitive: fallo riparare da noi, fatti consegnare la spesa, lasciati coccolare.",
    duration: "18 min",
    sections: [
      {
        heading: "Ad 1: phone repairs",
        body: [
          "Read the first ad, from a shop in Padua: \"Telefono rotto? Non buttarlo! Fallo riparare da noi in trenta minuti. Ti facciamo un preventivo gratis e, se vuoi, ti facciamo vedere il lavoro mentre lo facciamo\".",
          "\"Un preventivo\" is a quote, an estimate. \"Fallo riparare\" = have it repaired (\"fa'\" + \"lo\").",
        ],
        examples: [
          { es: "Telefono rotto? Non buttarlo!", en: "Broken phone? Don't throw it away!" },
          { es: "Fallo riparare da noi in trenta minuti.", en: "Have it repaired by us in thirty minutes." },
          { es: "Ti facciamo un preventivo gratis.", en: "We'll give you a free quote." },
          { es: "Ti facciamo vedere il lavoro mentre lo facciamo.", en: "We'll show you the work as we do it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have it repaired by us in thirty minutes. (to a customer, informal)", answer: "Fallo riparare da noi in trenta minuti.", altAnswers: ["Fallo riparare da noi in 30 minuti."], explanation: "\"Fa'\" + \"lo\" = \"fallo\"." },
          { type: "multiple-choice", question: "What does the shop offer for free?", options: ["A quote", "The repair", "A new phone", "Delivery"], correctIndex: 0, explanation: "\"Un preventivo gratis\"." },
        ],
      },
      {
        heading: "Ad 2: shopping delivered",
        body: [
          "The second ad is for a supermarket app: \"Non hai tempo di fare la spesa? Fattela portare a casa! Ordina entro le 12 e te la consegniamo in giornata. Lascia fare a noi\".",
          "\"Fattela portare\" = have it brought to you (\"fa'\" + \"te\" + \"la\"). \"Lascia fare a noi\" = leave it to us.",
        ],
        examples: [
          { es: "Non hai tempo di fare la spesa?", en: "No time to do the shopping?" },
          { es: "Fattela portare a casa!", en: "Have it brought to your home!" },
          { es: "Te la consegniamo in giornata.", en: "We'll deliver it to you the same day." },
          { es: "Lascia fare a noi.", en: "Leave it to us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leave it to us. (to a customer, informal)", answer: "Lascia fare a noi.", explanation: "\"Lasciar fare a\" = leave it to." },
          { type: "listen-choose", audio: "Ordina entro le dodici e te la consegniamo in giornata.", question: "When must you order for same-day delivery?", options: ["By midday", "By midnight", "By ten", "The day before"], correctIndex: 0, explanation: "\"Entro le dodici\" = by twelve." },
        ],
      },
      {
        heading: "Ad 3: a day spa",
        body: [
          "The last ad is for a spa near Lake Garda: \"Stanca della settimana? Lasciati coccolare! Massaggi, trattamenti viso, e il sabato ti facciamo provare gratis la nostra sauna. Regalalo a chi ami: fagli vivere una giornata di relax\".",
          "\"Lasciati coccolare\" = let yourself be pampered. \"Fagli vivere\" = let him or her experience (literally make them live).",
        ],
        examples: [
          { es: "Lasciati coccolare!", en: "Let yourself be pampered!" },
          { es: "Il sabato ti facciamo provare gratis la nostra sauna.", en: "On Saturdays we let you try our sauna for free." },
          { es: "Fagli vivere una giornata di relax.", en: "Give them a day of relaxation." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let yourself be pampered! (informal)", answer: "Lasciati coccolare!", explanation: "\"Lasciarsi\" + infinitive." },
          { type: "multiple-choice", question: "What can you try for free on Saturdays?", options: ["The sauna", "A massage", "A face treatment", "Lunch"], correctIndex: 0, explanation: "\"Ti facciamo provare gratis la nostra sauna\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Broken phone? Don't throw it away! (informal)", answer: "Telefono rotto? Non buttarlo!", altAnswers: ["Telefono rotto? Non lo buttare!", "Cellulare rotto? Non buttarlo!"], explanation: "Negative imperative + \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll give you a free quote. (informal)", answer: "Ti facciamo un preventivo gratis.", altAnswers: ["Ti facciamo un preventivo gratuito."], explanation: "\"Fare un preventivo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have your shopping brought to your home! (informal)", answer: "Fatti portare la spesa a casa!", altAnswers: ["Fatti consegnare la spesa a casa!"], explanation: "\"Farsi portare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll deliver it to you the same day. (informal, the shopping)", answer: "Te la consegniamo in giornata.", altAnswers: ["Te la consegniamo lo stesso giorno.", "Te la portiamo in giornata."], explanation: "\"Ti\" + \"la\" = \"te la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll show you the work. (informal)", answer: "Ti facciamo vedere il lavoro.", explanation: "\"Far vedere\" = to show." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Have it repaired] by us! (informal, the phone)", sentence: "___ da noi!", answer: "Fallo riparare", altAnswers: ["Fallo aggiustare"], explanation: "\"Fa'\" + \"lo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Saturdays [we let you try] the sauna. (informal)", sentence: "Il sabato ___ la sauna.", answer: "ti facciamo provare", altAnswers: ["ti lasciamo provare"], explanation: "\"Far provare\" = let you try (offer)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "No [time to do] the shopping?", sentence: "Non hai ___ la spesa?", answer: "tempo di fare", altAnswers: ["il tempo di fare"], explanation: "\"Tempo di\" + infinitive (Unit 18)." },
      { type: "word-order", prompt: "Put the words in order to say: Leave it to us.", words: ["Lascia", "fare", "a", "noi."], translation: "Leave it to us.", explanation: "\"Lasciar fare a\"." },
      { type: "multiple-choice", question: "Which ad would you answer if your washing machine broke?", options: ["None: they're for phones, shopping and a spa.", "Ad 1", "Ad 2", "Ad 3"], correctIndex: 0, explanation: "Ad 1 repairs phones only." },
      { type: "multiple-choice", question: "In \"Fattela portare a casa\", what does \"la\" refer to?", options: ["la spesa", "la casa", "la giornata", "l'app"], correctIndex: 0, explanation: "The shopping is what's brought." },
      { type: "listen-choose", audio: "Telefono rotto? Fallo riparare da noi in trenta minuti.", question: "How long does the repair take?", options: ["Thirty minutes", "Three hours", "Thirteen minutes", "Three days"], correctIndex: 0, explanation: "\"Trenta minuti\"." },
      { type: "dictation", audio: "Lasciati coccolare: ti facciamo provare la sauna.", explanation: "\"Lasciati\" + infinitive, \"far provare\"." },
      { type: "speak", text: "Telefono rotto? Non buttarlo! Fallo riparare da noi.", prompt: "Read the ad aloud: Broken phone? Don't throw it away! Have it repaired by us.", tip: "\"Fallo\": a long double l, FAL-lo.", explanation: "Imperative + pronoun." },
    ],
  },
  {
    slug: "b1-mission-list-of-errands",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: Errands",
    summary: "Write what you need to have done this week, and who will do what: devo far controllare la caldaia, mi faccio tagliare i capelli, lascio fare a mio fratello.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Your list",
        body: [
          "Your mission: you're going away on Monday and you send your roommate a list of what you need to have done this week. Use \"devo far\" + infinitive for jobs other people do: \"Devo far controllare la caldaia\", \"Devo far riparare la serratura\".",
          "Add one or two things for yourself with \"farsi\": \"Mi faccio tagliare i capelli giovedì\".",
        ],
        examples: [
          { es: "Devo far controllare la caldaia.", en: "I need to have the boiler checked." },
          { es: "Devo far riparare la serratura della porta.", en: "I need to have the door lock repaired." },
          { es: "Mi faccio tagliare i capelli giovedì.", en: "I'm having my hair cut on Thursday." },
          { es: "Ho già fatto lavare le tende.", en: "I've already had the curtains washed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need to have the door lock repaired.", answer: "Devo far riparare la serratura della porta.", altAnswers: ["Devo fare riparare la serratura della porta.", "Devo far aggiustare la serratura della porta."], explanation: "\"Devo far\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already had the curtains washed.", answer: "Ho già fatto lavare le tende.", explanation: "\"Già\" between \"ho\" and \"fatto\"." },
        ],
      },
      {
        heading: "Who does what",
        body: [
          "Finish by saying what you'll leave to others and asking for news: \"Il giardino? Lascio fare a mio fratello\", \"Il tecnico viene martedì: fallo entrare tu, per favore\", \"Fammi sapere se ci sono problemi\".",
        ],
        examples: [
          { es: "Il giardino? Lascio fare a mio fratello.", en: "The garden? I'll leave it to my brother." },
          { es: "Il tecnico viene martedì: fallo entrare tu, per favore.", en: "The technician's coming on Tuesday: can you let him in, please?" },
          { es: "Fammi sapere se ci sono problemi.", en: "Let me know if there are any problems." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me know if there are any problems. (to a friend)", answer: "Fammi sapere se ci sono problemi.", altAnswers: ["Fammi sapere se ci sono dei problemi."], explanation: "\"Fammi sapere\"." },
          { type: "listen-choose", audio: "Il tecnico viene martedì: fallo entrare tu, per favore.", question: "What should the roommate do on Tuesday?", options: ["Let the technician in", "Call the technician", "Pay the technician", "Fix the boiler"], correctIndex: 0, explanation: "\"Fallo entrare\" = let him in." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm having my hair cut on Thursday.", answer: "Mi faccio tagliare i capelli giovedì.", altAnswers: ["Giovedì mi faccio tagliare i capelli."], explanation: "\"Farsi tagliare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The garden? I'll leave it to my brother.", answer: "Il giardino? Lascio fare a mio fratello.", explanation: "\"Lasciar fare a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need to have the car serviced.", answer: "Devo far fare il tagliando alla macchina.", altAnswers: ["Devo fare il tagliando alla macchina.", "Devo far controllare la macchina."], explanation: "\"Il tagliando\" = a car service." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you let him in, please? (to a friend)", answer: "Fallo entrare tu, per favore.", altAnswers: ["Lo fai entrare tu, per favore?", "Puoi farlo entrare, per favore?"], explanation: "\"Far entrare\" = let in, show in." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The parcel? [I'll have it sent] to my office.", sentence: "Il pacco? ___ in ufficio.", answer: "Me lo faccio mandare", altAnswers: ["Me lo faccio spedire", "Me lo farò mandare", "Lo faccio mandare"], explanation: "\"Me lo faccio\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The boiler? [I had it checked] last year.", sentence: "La caldaia? ___ l'anno scorso.", answer: "L'ho fatta controllare", explanation: "\"Fatta\" agrees with \"la\"." },
      { type: "word-order", prompt: "Put the words in order to say: Don't let the cat out!", words: ["Non", "far", "uscire", "il", "gatto!"], translation: "Don't let the cat out!", explanation: "\"Far uscire\" = let out." },
      { type: "multiple-choice", question: "Which errand is something you do yourself?", options: ["Pago le bollette.", "Faccio riparare la serratura.", "Mi faccio tagliare i capelli.", "Faccio pulire i vetri."], correctIndex: 0, explanation: "No \"fare\" + infinitive: you do it." },
      { type: "dictation", audio: "Questa settimana devo far controllare la caldaia e far riparare la porta.", explanation: "\"Far\" + infinitive twice." },
      { type: "speak", text: "Lunedì faccio pulire i tappeti, mercoledì mi faccio tagliare i capelli, e la spesa me la faccio portare a casa.", prompt: "Say it in Italian: On Monday I'm having the carpets cleaned, on Wednesday I'm having my hair cut, and I'm having the shopping delivered.", tip: "\"Me la faccio\": three short syllables, me-la-FAC-cio.", explanation: "\"Fare\", \"farsi\" and \"me la faccio\"." },
    ],
  },
];

export const IT_B1_U19_WRITING: WriteExercise = {
  type: "write",
  prompt: "You're going away for a week, and your roommate will be at home. Write them a note: what you've already had done, what you still need to have done (and when the workers are coming), what you'll do for yourself, and what you leave to them.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses fare + infinitive for jobs done by others (ho fatto riparare, devo far controllare)",
    "Uses farsi + infinitive with essere in the past (mi sono fatto/a tagliare)",
    "Places pronouns before fare and makes fatto agree (l'ho fatta riparare)",
    "Uses lasciare + infinitive or fixed phrases (fammi sapere, lascia stare, fallo entrare)",
  ],
  modelAnswer: "Ciao Matteo, parto domani e ti lascio qualche istruzione. La lavatrice? L'ho fatta riparare lunedì, quindi adesso funziona. Le tende le ho fatte lavare, sono nell'armadio. Martedì viene il tecnico a controllare la caldaia: fallo entrare tu, per favore, e fatti dare la ricevuta. Giovedì dovrebbero portare il divano nuovo: me lo sono fatto consegnare a casa perché in ufficio non c'è posto! Io intanto mi sono fatta tagliare i capelli, così sono pronta per il viaggio. Le piante? Lascio fare a te. E non far uscire il gatto, mi raccomando! Fammi sapere se c'è qualche problema. Un abbraccio, Elena",
  explanation: "\"L'ho fatta riparare\" and \"le ho fatte lavare\" put the pronoun before \"avere\" and make \"fatto\" agree. \"Fallo entrare\", \"fatti dare\" and \"fammi sapere\" attach the pronoun to the \"tu\" imperative. \"Mi sono fatta tagliare\" and \"me lo sono fatto consegnare\" use \"essere\"; \"lascio fare a te\" and \"non far uscire\" complete the set.",
};
