// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u19-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 19 Extra Practice: Relative Pronouns. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U19_EXTRA: Lesson[] = [
  {
    slug: "a2-relatives-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Che",
    summary: "Fresh sentences with che as subject and object.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Che, never dropped",
        body: [
          "\"Che\" = who, which, that, for people and things, subject or object. English often drops it; Italian never does.",
        ],
        examples: [
          { es: "La ragazza che canta è mia sorella.", en: "The girl who's singing is my sister." },
          { es: "Il regalo che mi hai fatto è perfetto.", en: "The present you gave me is perfect." },
          { es: "Ho un gatto che dorme tutto il giorno.", en: "I have a cat that sleeps all day." },
          { es: "I biscotti che fa mia nonna sono famosi.", en: "The biscuits my grandmother makes are famous." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The present you gave me is perfect. (to a friend)", answer: "Il regalo che mi hai fatto è perfetto.", altAnswers: ["Il regalo che mi hai dato è perfetto."], explanation: "\"Fare un regalo\" = to give a present." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a cat that sleeps all day.", answer: "Ho un gatto che dorme tutto il giorno.", explanation: "Subject \"che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girl who's singing is my sister.", answer: "La ragazza che canta è mia sorella.", altAnswers: ["La ragazza che sta cantando è mia sorella."], explanation: "Subject \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The biscuits my grandmother makes are famous.", answer: "I biscotti che fa mia nonna sono famosi.", altAnswers: ["I biscotti che mia nonna fa sono famosi."], explanation: "Object \"che\"; the subject can follow the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The jacket I bought is too big.", answer: "La giacca che ho comprato è troppo grande.", explanation: "Object \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Students who live far away can study online.", answer: "Gli studenti che abitano lontano possono studiare online.", altAnswers: ["Gli studenti che vivono lontano possono studiare online.", "Chi abita lontano può studiare online."], explanation: "Plural verb after \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The song we're listening to is old.", answer: "La canzone che ascoltiamo è vecchia.", altAnswers: ["La canzone che stiamo ascoltando è vecchia."], explanation: "\"Ascoltare\" → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is that the man who sold you the car? (to a friend)", answer: "È quello l'uomo che ti ha venduto la macchina?", altAnswers: ["È quello il signore che ti ha venduto la macchina?", "È lui l'uomo che ti ha venduto la macchina?"], explanation: "Subject \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The email [you wrote] is perfect.", sentence: "L'email ___ è perfetta.", answer: "che hai scritto", explanation: "Object \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The flowers [that grow] here are rare.", sentence: "I fiori ___ qui sono rari.", answer: "che crescono", explanation: "Plural verb after \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The dish [I prefer] is risotto.", sentence: "Il piatto ___ è il risotto.", answer: "che preferisco", explanation: "Object \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The friends [who came] yesterday are Spanish.", sentence: "Gli amici ___ ieri sono spagnoli.", answer: "che sono venuti", explanation: "\"Venire\" takes \"essere\"; agrees with \"amici\"." },
      { type: "word-order", prompt: "Put the words in order to say: The jacket I bought is too big.", words: ["La", "giacca", "che", "ho", "comprato", "è", "troppo", "grande."], translation: "The jacket I bought is too big.", explanation: "\"Che\" after the noun." },
      { type: "multiple-choice", question: "How do you say the car I want is expensive?", options: ["La macchina che voglio è cara.", "La macchina voglio è cara.", "La macchina cui voglio è cara.", "La macchina chi voglio è cara."], correctIndex: 0, explanation: "Object \"che\", never left out." },
      { type: "listen-choose", audio: "Il gatto che abita con noi si chiama Pepe.", question: "What's Pepe?", options: ["the cat that lives with them", "their neighbour's dog", "a cat they want", "the cat next door"], correctIndex: 0, explanation: "\"Che abita con noi\" = that lives with us." },
      { type: "dictation", audio: "La torta che fa mia madre è la migliore.", explanation: "Object \"che\"." },
      { type: "speak", text: "Il regalo che mi hai fatto è bellissimo, grazie!", prompt: "Say it in Italian: The present you gave me is beautiful, thanks!", tip: "\"Regalo\": re-GA-lo.", explanation: "Object \"che\"." },
    ],
  },
  {
    slug: "a2-relatives-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Cui",
    summary: "Fresh sentences with in cui, con cui, a cui, di cui, da cui and per cui.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Preposition + cui",
        body: [
          "The preposition the verb needs goes before \"cui\": \"parlare con\" → \"con cui\", \"pensare a\" → \"a cui\", \"parlare di\" → \"di cui\", \"venire da\" → \"da cui\".",
        ],
        examples: [
          { es: "Il professore con cui ho studiato è in pensione.", en: "The teacher I studied with has retired." },
          { es: "La lingua di cui ho più paura è il tedesco.", en: "The language I'm most scared of is German." },
          { es: "La finestra da cui si vede il mare è in camera.", en: "The window you can see the sea from is in the bedroom." },
          { es: "Non è una cosa a cui do importanza.", en: "It's not something I give importance to." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher I studied with has retired.", answer: "Il professore con cui ho studiato è in pensione.", altAnswers: ["La professoressa con cui ho studiato è in pensione.", "Il professore con cui ho studiato è andato in pensione."], explanation: "\"Studiare con\" → \"con cui\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The window you can see the sea from is in the bedroom.", answer: "La finestra da cui si vede il mare è in camera.", altAnswers: ["La finestra da cui si vede il mare è in camera da letto."], explanation: "\"Da cui\" = from which." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The language I'm most scared of is German.", answer: "La lingua di cui ho più paura è il tedesco.", explanation: "\"Avere paura di\" → \"di cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The friend I lent the money to has disappeared.", answer: "L'amico a cui ho prestato i soldi è sparito.", altAnswers: ["L'amica a cui ho prestato i soldi è sparita."], explanation: "\"Prestare a\" → \"a cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The reason I'm calling is simple.", answer: "Il motivo per cui chiamo è semplice.", altAnswers: ["Il motivo per cui ti chiamo è semplice.", "Il motivo per cui telefono è semplice."], explanation: "\"Il motivo per cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The year I was born was 1990.", answer: "L'anno in cui sono nato era il 1990.", altAnswers: ["L'anno in cui sono nata era il 1990.", "L'anno in cui sono nato è il 1990.", "L'anno in cui sono nata è il 1990."], explanation: "Time → \"in cui\", not \"dove\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The people I live with are very tidy.", answer: "Le persone con cui vivo sono molto ordinate.", altAnswers: ["Le persone con cui abito sono molto ordinate."], explanation: "\"Vivere con\" → \"con cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The town my parents come from is in Calabria.", answer: "Il paese da cui vengono i miei genitori è in Calabria.", altAnswers: ["Il paese da cui vengono i miei è in Calabria."], explanation: "\"Venire da\" → \"da cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The box [I put the books in] is heavy.", sentence: "La scatola ___ i libri è pesante.", answer: "in cui ho messo", explanation: "\"Mettere in\" → \"in cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The topic [we're talking about] is important.", sentence: "L'argomento ___ è importante.", answer: "di cui parliamo", altAnswers: ["di cui stiamo parlando"], explanation: "\"Parlare di\" → \"di cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The aunt [I send postcards to] lives in Canada.", sentence: "La zia ___ le cartoline vive in Canada.", answer: "a cui mando", altAnswers: ["a cui spedisco"], explanation: "\"Mandare a\" → \"a cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bridge [we walked across] is very old.", sentence: "Il ponte ___ siamo passati è antichissimo.", answer: "su cui", explanation: "\"Passare su\" → \"su cui\"." },
      { type: "word-order", prompt: "Put the words in order to say: The reason I'm calling is simple.", words: ["Il", "motivo", "per", "cui", "chiamo", "è", "semplice."], translation: "The reason I'm calling is simple.", explanation: "\"Per cui\" after \"motivo\"." },
      { type: "multiple-choice", question: "Il collega ___ ho chiesto aiuto è gentilissimo.", options: ["a cui", "che", "di cui", "da che"], correctIndex: 0, explanation: "\"Chiedere aiuto a qualcuno\" → \"a cui\"." },
      { type: "listen-choose", audio: "La casa in cui sono cresciuta adesso è un albergo.", question: "What is the house now?", options: ["a hotel", "a school", "a restaurant", "her parents' house"], correctIndex: 0, explanation: "\"In cui sono cresciuta\" = where I grew up." },
      { type: "dictation", audio: "Il libro di cui parlo è sul tavolo.", explanation: "\"Di cui\"." },
      { type: "speak", text: "La città da cui vengo è piccola, ma la amo.", prompt: "Say it in Italian: The town I come from is small, but I love it.", tip: "\"Da cui\": link the words, da-KWEE.", explanation: "\"Venire da\" → \"da cui\"." },
    ],
  },
  {
    slug: "a2-relatives-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Che or Cui?",
    summary: "Mixed sentences: choose che, cui, dove, chi or quello che.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Choose",
        body: [
          "No preposition → \"che\". Preposition → preposition + \"cui\". Place → \"dove\" too. Whoever → \"chi\". What → \"quello che\".",
        ],
        examples: [
          { es: "Il ristorante che mi hai consigliato è chiuso.", en: "The restaurant you recommended is closed." },
          { es: "Il ristorante in cui lavora mio fratello è aperto.", en: "The restaurant my brother works in is open." },
          { es: "Chi vuole venire è il benvenuto.", en: "Anyone who wants to come is welcome." },
          { es: "Non ho capito quello che hai detto.", en: "I didn't understand what you said." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant you recommended is closed. (to a friend)", answer: "Il ristorante che mi hai consigliato è chiuso.", explanation: "\"Consigliare qualcosa\" → \"che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anyone who wants to come is welcome.", answer: "Chi vuole venire è il benvenuto.", altAnswers: ["Chi vuole venire è benvenuto."], explanation: "\"Chi\" + singular verb." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant my brother works in is open.", answer: "Il ristorante in cui lavora mio fratello è aperto.", altAnswers: ["Il ristorante dove lavora mio fratello è aperto."], explanation: "Place → \"in cui\" or \"dove\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't understand what you said. (to a friend)", answer: "Non ho capito quello che hai detto.", altAnswers: ["Non ho capito ciò che hai detto.", "Non ho capito cosa hai detto."], explanation: "\"Quello che\" = what." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colleague I trust most is Elena.", answer: "La collega di cui mi fido di più è Elena.", explanation: "\"Fidarsi di\" → \"di cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colleague I see every day is Elena.", answer: "La collega che vedo ogni giorno è Elena.", altAnswers: ["La collega che vedo tutti i giorni è Elena."], explanation: "\"Vedere\" + direct object → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever finds the keys gets a coffee!", answer: "Chi trova le chiavi vince un caffè!", altAnswers: ["Chi trova le chiavi ha un caffè!"], explanation: "\"Chi\" = whoever." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The beach we go to is never crowded.", answer: "La spiaggia dove andiamo non è mai affollata.", altAnswers: ["La spiaggia in cui andiamo non è mai affollata.", "La spiaggia dove andiamo non è mai piena."], explanation: "Place → \"dove\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The friend [I'm waiting for] is late.", sentence: "L'amico ___ è in ritardo.", answer: "che aspetto", altAnswers: ["che sto aspettando"], explanation: "\"Aspettare\" → \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The friend [I'm going out with] is late.", sentence: "L'amico ___ è in ritardo.", answer: "con cui esco", explanation: "\"Uscire con\" → \"con cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What] I need is sleep.", sentence: "___ mi serve è dormire.", answer: "Quello che", altAnswers: ["Ciò che"], explanation: "\"Quello che\" = what." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[People who] smoke have to go outside.", sentence: "___ fuma deve uscire.", answer: "Chi", explanation: "\"Chi\" + singular verb." },
      { type: "word-order", prompt: "Put the words in order to say: I didn't understand what you said.", words: ["Non", "ho", "capito", "quello", "che", "hai", "detto."], translation: "I didn't understand what you said.", explanation: "\"Quello che\"." },
      { type: "multiple-choice", question: "L'hotel ___ abbiamo dormito era rumoroso.", options: ["in cui", "che", "chi", "di cui"], correctIndex: 0, explanation: "\"Dormire in\" → \"in cui\" (or \"dove\")." },
      { type: "listen-choose", audio: "Il ragazzo di cui ti fidi non mi piace.", question: "What does she say?", options: ["She doesn't like the boy her friend trusts.", "She doesn't trust the boy.", "The boy doesn't like her friend.", "She likes the boy her friend trusts."], correctIndex: 0, explanation: "\"Di cui ti fidi\" = you trust." },
      { type: "dictation", audio: "Chi trova un amico trova un tesoro.", explanation: "\"Chi\" = whoever." },
      { type: "speak", text: "Il ristorante che preferisco è quello in cui siamo andati ieri.", prompt: "Say it in Italian: The restaurant I like best is the one we went to yesterday.", tip: "\"Che\" first, then \"in cui\".", explanation: "Object \"che\"; place \"in cui\"." },
    ],
  },
];
