// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a1-u09.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A1 Unit 9: Irregular Everyday Verbs. Andare, venire, fare, stare,
// dare, dire, uscire, the modals volere / potere / dovere, sapere.
// Conventions: docs/italian-course/authoring.md.
export const IT_A1_U09: Lesson[] = [
  {
    slug: "a1-andare-venire",
    level: "IT-A1",
    number: 1,
    title: "Andare and Venire",
    summary: "Conjugate andare (to go) and venire (to come), use andare a + infinitive, and choose a or in after andare.",
    duration: "15 min",
    sections: [
      {
        heading: "Andare: vado, vai, va",
        body: [
          "\"Andare\" (to go) is irregular: \"vado, vai, va, andiamo, andate, vanno\". You've used \"vado\" as a chunk; now you have the full verb. Noi and voi look regular; the other four forms start with v-. Stress: VAN-no, with a double n.",
          "Places follow the rules from Unit 8: \"vado a Roma\", \"vai in Spagna?\", \"andiamo al cinema\", \"vanno in palestra\".",
        ],
        examples: [
          { es: "vado, vai, va", en: "I go, you go, he / she goes" },
          { es: "andiamo, andate, vanno", en: "we go, you (plural) go, they go" },
          { es: "Vai in vacanza ad agosto?", en: "Are you going on holiday in August?" },
          { es: "Andiamo al cinema stasera.", en: "We're going to the cinema tonight." },
          { es: "I ragazzi vanno a scuola in bici.", en: "The kids go to school by bike." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're going to the cinema tonight.", answer: "Andiamo al cinema stasera.", altAnswers: ["Stasera andiamo al cinema.", "Noi andiamo al cinema stasera."], explanation: "\"Andiamo\": regular-looking noi form." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The kids [go] to school by bike.", sentence: "I ragazzi ___ a scuola in bici.", answer: "vanno", explanation: "VAN-no: double n." },
        ],
      },
      {
        heading: "Andare a + infinitive",
        body: [
          "To say you're going to do something somewhere, use \"andare a\" + infinitive: \"Vado a mangiare\" (I'm going to eat), \"Andiamo a ballare?\" (shall we go dancing?). It's about going off to do it, not the English future going to.",
        ],
        examples: [
          { es: "Vado a mangiare.", en: "I'm going (off) to eat." },
          { es: "Andiamo a ballare?", en: "Shall we go dancing?" },
          { es: "Va a prendere il pane.", en: "She's going to get the bread." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go dancing?", answer: "Andiamo a ballare?", explanation: "\"Andare a\" + infinitive." },
        ],
      },
      {
        heading: "Venire: vengo, vieni, viene",
        body: [
          "\"Venire\" (to come): \"vengo, vieni, viene, veniamo, venite, vengono\". Watch the spelling: \"vengo\" and \"vengono\" have n + g (VEN-go), not the gn of \"ogni\". \"Vieni\" and \"viene\" add an i.",
          "\"Venire da\" says where you come from on a trip (\"vengo da Bologna\"); \"vieni con me?\" invites someone along.",
        ],
        examples: [
          { es: "vengo, vieni, viene", en: "I come, you come, he / she comes" },
          { es: "veniamo, venite, vengono", en: "we come, you (plural) come, they come" },
          { es: "Vieni con me?", en: "Are you coming with me?" },
          { es: "Veniamo da Bologna.", en: "We're coming from Bologna." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming with me? (to a friend)", answer: "Vieni con me?", altAnswers: ["Tu vieni con me?"], explanation: "\"Vieni\" for tu; \"me\" after \"con\"." },
          { type: "listen-choose", audio: "Vengono stasera.", question: "Who's coming tonight?", options: ["they", "I", "we", "you (plural)"], correctIndex: 0, explanation: "VEN-go-no = they come." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you going on holiday in August? (to a friend)", answer: "Vai in vacanza ad agosto?", altAnswers: ["Vai in vacanza in agosto?", "Tu vai in vacanza ad agosto?", "Vai in vacanza a agosto?"], explanation: "\"Vai\" for tu; \"ad\" before a vowel is common." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's going to get the bread.", answer: "Va a prendere il pane.", altAnswers: ["Lei va a prendere il pane."], explanation: "\"Andare a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're coming from Bologna.", answer: "Veniamo da Bologna.", altAnswers: ["Noi veniamo da Bologna."], explanation: "\"Venire da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They go to the gym on Mondays.", answer: "Vanno in palestra il lunedì.", altAnswers: ["Il lunedì vanno in palestra.", "Loro vanno in palestra il lunedì."], explanation: "\"Vanno\" + \"in palestra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming tonight? (plural)", answer: "Venite stasera?", altAnswers: ["Voi venite stasera?"], explanation: "\"Venite\" for voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to Rome by train.", answer: "Vado a Roma in treno.", altAnswers: ["Io vado a Roma in treno."], explanation: "City \"a\", transport \"in\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco [is coming] at eight.", sentence: "Marco ___ alle otto.", answer: "viene", explanation: "\"Viene\" for he." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Where [are you going]? (plural)", sentence: "Dove ___?", answer: "andate", altAnswers: ["andate voi"], explanation: "\"Andate\" for voi." },
      { type: "word-order", prompt: "Put the words in order to say: I'm going to eat with Luca.", words: ["Vado", "a", "mangiare", "con", "Luca."], translation: "I'm going to eat with Luca.", explanation: "\"Andare a\" + infinitive." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "vado", right: "I go" },
          { left: "vanno", right: "they go" },
          { left: "vengo", right: "I come" },
          { left: "vieni", right: "you come" },
          { left: "vengono", right: "they come" },
        ],
        explanation: "Two irregular verbs of movement.",
      },
      { type: "dictation", audio: "Vado al mare. Vieni con me?", explanation: "\"Vado\" (go), \"vieni\" (come)." },
      {
        type: "speak",
        text: "Stasera andiamo a ballare. Vieni con noi?",
        prompt: "Say it in Italian: Tonight we're going dancing. Are you coming with us?",
        tip: "VIE-ni: one syllable for vie.",
        explanation: "\"Andare a\" + infinitive, and \"venire con\".",
      },
    ],
  },
  {
    slug: "a1-fare",
    level: "IT-A1",
    number: 2,
    title: "The Verb Fare",
    summary: "Conjugate fare and use it for jobs, everyday activities and the weather.",
    duration: "15 min",
    sections: [
      {
        heading: "Faccio, fai, fa",
        body: [
          "\"Fare\" (to do, to make) is one of the most used verbs: \"faccio, fai, fa, facciamo, fate, fanno\". Note the double c in \"faccio\" and \"facciamo\", and the double n in \"fanno\" (FAN-no).",
          "\"Cosa fai?\" asks what you're doing or what you do. \"Che lavoro fai?\" asks about your job; the answer is \"faccio\" + article + job: \"Faccio l'ingegnere\", \"Faccio la cameriera\". With \"essere\" there's no article: \"Sono ingegnere\".",
        ],
        examples: [
          { es: "faccio, fai, fa", en: "I do, you do, he / she does" },
          { es: "facciamo, fate, fanno", en: "we do, you (plural) do, they do" },
          { es: "Che lavoro fai?", en: "What do you do for a living?" },
          { es: "Faccio l'ingegnere.", en: "I'm an engineer." },
          { es: "Cosa fate stasera?", en: "What are you doing tonight? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you do for a living? (to a friend)", answer: "Che lavoro fai?", altAnswers: ["Tu che lavoro fai?", "Che lavoro fai tu?"], explanation: "\"Fare\" for jobs." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm a nurse. (a woman, with fare)", answer: "Faccio l'infermiera.", altAnswers: ["Io faccio l'infermiera."], explanation: "\"Fare\" + article + job." },
        ],
      },
      {
        heading: "Fare for everyday things",
        body: [
          "Many daily activities use \"fare\" where English uses have, take or go: \"fare colazione\" (to have breakfast), \"fare la spesa\" (to do the food shopping), \"fare una passeggiata\" (to go for a walk), \"fare la doccia\" (to have a shower), \"fare sport\".",
        ],
        examples: [
          { es: "Faccio colazione al bar.", en: "I have breakfast at the bar." },
          { es: "Il sabato facciamo la spesa.", en: "On Saturdays we do the shopping." },
          { es: "Facciamo una passeggiata?", en: "Shall we go for a walk?" },
          { es: "Fai sport?", en: "Do you do any sport?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go for a walk?", answer: "Facciamo una passeggiata?", explanation: "\"Fare una passeggiata\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Saturdays [we do the shopping].", sentence: "Il sabato ___.", answer: "facciamo la spesa", altAnswers: ["noi facciamo la spesa"], explanation: "\"Fare la spesa\" = food shopping." },
        ],
      },
      {
        heading: "The weather: fa caldo",
        body: [
          "Weather uses \"fa\": \"fa caldo\" (it's hot), \"fa freddo\" (it's cold), \"fa bel tempo\" (the weather's nice), \"fa brutto tempo\" (the weather's bad). Compare \"ho freddo\" (I feel cold).",
        ],
        examples: [
          { es: "Oggi fa caldo.", en: "It's hot today." },
          { es: "A gennaio fa freddo.", en: "It's cold in January." },
          { es: "Fa bel tempo, andiamo al mare!", en: "The weather's nice, let's go to the beach!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's hot today.", answer: "Oggi fa caldo.", altAnswers: ["Fa caldo oggi."], explanation: "Weather: \"fa\"." },
          { type: "listen-choose", audio: "Fa brutto tempo.", question: "What's the weather like?", options: ["bad", "nice", "hot", "very cold"], correctIndex: 0, explanation: "\"Brutto tempo\" = bad weather." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have breakfast at the bar.", answer: "Faccio colazione al bar.", altAnswers: ["Io faccio colazione al bar."], explanation: "\"Fare colazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you doing tonight? (plural)", answer: "Cosa fate stasera?", altAnswers: ["Che cosa fate stasera?", "Che fate stasera?", "Stasera cosa fate?"], explanation: "\"Fate\" for voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you do any sport? (to a friend)", answer: "Fai sport?", altAnswers: ["Tu fai sport?", "Fai dello sport?"], explanation: "\"Fare sport\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's cold in January.", answer: "A gennaio fa freddo.", altAnswers: ["Fa freddo a gennaio.", "In gennaio fa freddo."], explanation: "\"Fa freddo\"; months are lower-case." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They have a shower in the evening.", answer: "Fanno la doccia la sera.", altAnswers: ["La sera fanno la doccia.", "Loro fanno la doccia la sera."], explanation: "\"Fanno\": FAN-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca is a waiter.", answer: "Luca fa il cameriere.", altAnswers: ["Luca è cameriere."], explanation: "\"Fare il\" + job, or \"essere\" + job." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The weather's nice] today.", sentence: "Oggi ___.", answer: "fa bel tempo", explanation: "\"Fare bel tempo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We do] a lot of sport.", sentence: "___ molto sport.", answer: "Facciamo", altAnswers: ["Noi facciamo"], explanation: "\"Facciamo\": double c." },
      { type: "word-order", prompt: "Put the words in order to say: It's hot, let's go for a walk by the sea.", words: ["Fa", "caldo,", "facciamo", "una", "passeggiata", "al", "mare."], translation: "It's hot, let's go for a walk by the sea.", explanation: "Two uses of \"fare\"." },
      { type: "multiple-choice", question: "Which means I'm cold (I feel cold)?", options: ["Ho freddo.", "Fa freddo.", "Sono freddo.", "Faccio freddo."], correctIndex: 0, explanation: "\"Fa freddo\" is the weather; a person \"ha freddo\"." },
      { type: "dictation", audio: "Cosa fai stasera? Faccio la spesa.", explanation: "\"Fai\", \"faccio\"." },
      {
        type: "speak",
        text: "Faccio colazione alle sette e poi faccio una passeggiata.",
        prompt: "Say it in Italian: I have breakfast at seven and then I go for a walk.",
        tip: "FAC-cio: hold the double c.",
        explanation: "Two \"fare\" expressions.",
      },
    ],
  },
  {
    slug: "a1-stare-dare-dire",
    level: "IT-A1",
    number: 3,
    title: "Stare, Dare and Dire",
    summary: "Conjugate stare, dare and dire and use them in everyday phrases: come stai?, dare una mano, cosa dici?",
    duration: "14 min",
    sections: [
      {
        heading: "Stare: how you are, where you stay",
        body: [
          "\"Stare\": \"sto, stai, sta, stiamo, state, stanno\". You know it from \"Come stai?\" (how are you?) and \"Sto bene\". It also means to stay: \"Stasera sto a casa\" (tonight I'm staying in). \"Stare zitto\" is to keep quiet.",
          "Health and staying use \"stare\"; describing someone uses \"essere\": \"Sto male\" (I feel ill) but \"Sono stanco\".",
        ],
        examples: [
          { es: "sto, stai, sta, stiamo, state, stanno", en: "I am, you are ... they are (stare)" },
          { es: "Come sta, signora?", en: "How are you, madam?" },
          { es: "Stasera sto a casa.", en: "Tonight I'm staying in." },
          { es: "I bambini stanno bene.", en: "The children are well." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tonight I'm staying in.", answer: "Stasera sto a casa.", altAnswers: ["Sto a casa stasera.", "Stasera resto a casa."], explanation: "\"Stare a casa\" = to stay home." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How are you, madam?", answer: "Come sta, signora?", altAnswers: ["Signora, come sta?"], explanation: "Lei: \"sta\"." },
        ],
      },
      {
        heading: "Dare: do, dai, dà",
        body: [
          "\"Dare\" (to give): \"do, dai, dà, diamo, date, danno\". \"Dà\" (gives) has an accent to tell it from \"da\" (from). \"Dare una mano\" means to lend a hand: \"Mi dai una mano?\" (can you give me a hand?). \"Mi\" here means to me.",
        ],
        examples: [
          { es: "Mi dai una mano?", en: "Can you give me a hand?" },
          { es: "Marco dà il libro a Sara.", en: "Marco gives the book to Sara." },
          { es: "Danno una festa sabato.", en: "They're having a party on Saturday." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco [gives] the book to Sara.", sentence: "Marco ___ il libro a Sara.", answer: "dà", explanation: "\"Dà\" with an accent: gives." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you give me a hand? (to a friend)", answer: "Mi dai una mano?", explanation: "\"Dare una mano\" = to help." },
        ],
      },
      {
        heading: "Dire: dico, dici, dice",
        body: [
          "\"Dire\" (to say, to tell): \"dico, dici, dice, diciamo, dite, dicono\". The c is hard in \"dico\" and \"dicono\" (DI-co-no), soft in \"dici\" and \"dice\". \"Cosa dici?\" means what are you saying?, or, with surprise, what are you talking about?",
        ],
        examples: [
          { es: "Dico la verità.", en: "I'm telling the truth." },
          { es: "Cosa dici?", en: "What are you saying?" },
          { es: "Come si dice in italiano?", en: "How do you say it in Italian?" },
          { es: "Dicono che è un buon ristorante.", en: "They say it's a good restaurant." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How do you say it in Italian?", answer: "Come si dice in italiano?", explanation: "A key phrase: \"come si dice?\"." },
          { type: "listen-choose", audio: "Dicono che è un buon ristorante.", question: "What do people say?", options: ["It's a good restaurant.", "It's a bad restaurant.", "The restaurant is closed.", "The restaurant is expensive."], correctIndex: 0, explanation: "DI-co-no che = they say that." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm telling the truth.", answer: "Dico la verità.", altAnswers: ["Io dico la verità."], explanation: "\"Dico\": hard c." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you saying? (to a friend)", answer: "Cosa dici?", altAnswers: ["Che cosa dici?", "Che dici?"], explanation: "\"Dici\": soft c." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children are well.", answer: "I bambini stanno bene.", explanation: "Health: \"stare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're having a party on Saturday.", answer: "Danno una festa sabato.", altAnswers: ["Sabato danno una festa.", "Fanno una festa sabato."], explanation: "\"Dare una festa\" = to throw a party." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel ill today.", answer: "Oggi sto male.", altAnswers: ["Sto male oggi."], explanation: "\"Stare male\" = to feel ill." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you give me a hand? (plural)", answer: "Mi date una mano?", altAnswers: ["Voi mi date una mano?"], explanation: "\"Date\" for voi." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "How [are you]? (plural)", sentence: "Come ___?", answer: "state", explanation: "\"State\" for voi." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Giulia [says] that it's late.", sentence: "Giulia ___ che è tardi.", answer: "dice", explanation: "\"Dice\": soft c." },
      { type: "word-order", prompt: "Put the words in order to say: We're staying home and resting.", words: ["Stiamo", "a", "casa", "e", "riposiamo."], translation: "We're staying home and resting.", explanation: "\"Stare a casa\"." },
      { type: "multiple-choice", question: "Which sentence means Marco gives?", options: ["Marco dà.", "Marco da.", "Marco dà da.", "Marco do."], correctIndex: 0, explanation: "\"Dà\" (verb) needs the accent." },
      { type: "dictation", audio: "Come stai? Sto bene, grazie.", explanation: "\"Stai\", \"sto\"." },
      {
        type: "speak",
        text: "Scusi, come si dice window in italiano?",
        prompt: "Ask your teacher: Excuse me, how do you say window in Italian?",
        tip: "\"Si dice\": soft c, like chess.",
        explanation: "\"Come si dice\" is the learner's best friend; the answer is \"finestra\".",
      },
    ],
  },
  {
    slug: "a1-uscire-and-the-weekend",
    level: "IT-A1",
    number: 4,
    title: "Uscire and Going Out",
    summary: "Conjugate uscire and talk about going out: esco stasera, usciamo insieme?, esco di casa alle otto.",
    duration: "14 min",
    sections: [
      {
        heading: "Esco, esci, esce",
        body: [
          "\"Uscire\" (to go out, to leave) changes its first vowel: \"esco, esci, esce, usciamo, uscite, escono\". The forms stressed on the stem start with e-; noi and voi keep u-. Listen to the sc: [sk] in \"esco\", \"escono\", [sh] in \"esci\", \"esce\".",
          "\"Uscire\" alone means to go out socially: \"Esci stasera?\" (are you going out tonight?), \"Usciamo insieme?\" (shall we go out together?).",
        ],
        examples: [
          { es: "esco, esci, esce", en: "I go out, you go out, he / she goes out" },
          { es: "usciamo, uscite, escono", en: "we go out, you (plural) go out, they go out" },
          { es: "Esci stasera?", en: "Are you going out tonight?" },
          { es: "Usciamo insieme sabato?", en: "Shall we go out together on Saturday?" },
          { es: "Esci con gli amici?", en: "Are you going out with your friends?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you going out tonight? (to a friend)", answer: "Esci stasera?", altAnswers: ["Stasera esci?", "Tu esci stasera?"], explanation: "\"Esci\": [sh]." },
          { type: "multiple-choice", question: "Which is the noi form of uscire?", options: ["usciamo", "esciamo", "escono", "usciono"], correctIndex: 0, explanation: "Noi and voi keep u-." },
        ],
      },
      {
        heading: "Uscire di casa, uscire da",
        body: [
          "To leave home is \"uscire di casa\": \"Esco di casa alle otto\". To come out of any other place, use \"da\" (joined to the article): \"Esco dall'ufficio alle sei\", \"Escono dal cinema\".",
        ],
        examples: [
          { es: "Esco di casa alle otto.", en: "I leave home at eight." },
          { es: "Esco dall'ufficio alle sei.", en: "I leave the office at six." },
          { es: "Escono dal cinema a mezzanotte.", en: "They come out of the cinema at midnight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I leave home at eight.", answer: "Esco di casa alle otto.", altAnswers: ["Esco da casa alle otto.", "Io esco di casa alle otto."], explanation: "\"Uscire di casa\"." },
          { type: "listen-choose", audio: "Escono dal cinema a mezzanotte.", question: "When do they come out of the cinema?", options: ["at midnight", "at noon", "at eleven", "at one"], correctIndex: 0, explanation: "\"A mezzanotte\" = at midnight." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go out together on Saturday?", answer: "Usciamo insieme sabato?", altAnswers: ["Sabato usciamo insieme?"], explanation: "\"Usciamo\": u- for noi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I leave the office at six.", answer: "Esco dall'ufficio alle sei.", altAnswers: ["Io esco dall'ufficio alle sei."], explanation: "da + l' = \"dall'\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you going out with your friends? (to a friend)", answer: "Esci con gli amici?", altAnswers: ["Tu esci con gli amici?", "Esci con i tuoi amici?"], explanation: "Italian often uses the article, not your." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They go out every Friday.", answer: "Escono ogni venerdì.", altAnswers: ["Escono tutti i venerdì.", "Loro escono ogni venerdì."], explanation: "ES-co-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you going out tonight? (plural)", answer: "Uscite stasera?", altAnswers: ["Stasera uscite?", "Voi uscite stasera?"], explanation: "\"Uscite\": u- for voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia doesn't go out on Sundays.", answer: "Giulia non esce la domenica.", explanation: "\"Esce\": [sh]." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm going out] with Marco.", sentence: "___ con Marco.", answer: "Esco", altAnswers: ["Io esco"], explanation: "\"Esco\": [sk]." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [leave home] early.", sentence: "___ presto.", answer: "Usciamo di casa", altAnswers: ["Noi usciamo di casa", "Usciamo da casa"], explanation: "\"Uscire di casa\"." },
      { type: "word-order", prompt: "Put the words in order to say: They come out of the office at five.", words: ["Escono", "dall'ufficio", "alle", "cinque."], translation: "They come out of the office at five.", explanation: "\"Uscire da\" + place." },
      { type: "multiple-choice", question: "Which form is wrong?", options: ["usco", "esco", "usciamo", "esce"], correctIndex: 0, explanation: "The io form is \"esco\"." },
      { type: "dictation", audio: "Esci stasera? No, esco domani.", explanation: "\"Esci\" [sh], \"esco\" [sk]." },
      {
        type: "speak",
        text: "Il venerdì esco con gli amici, ma il sabato sto a casa.",
        prompt: "Say it in Italian: On Fridays I go out with friends, but on Saturdays I stay home.",
        tip: "ES-co: stress on the first syllable.",
        explanation: "\"Uscire\" and \"stare\".",
      },
    ],
  },
  {
    slug: "a1-modal-verbs",
    level: "IT-A1",
    number: 5,
    title: "Want, Can, Must: Volere, Potere, Dovere",
    summary: "Conjugate volere, potere and dovere and use them with an infinitive to want, ask, offer and say what you must do.",
    duration: "15 min",
    sections: [
      {
        heading: "Volere: voglio, vuoi, vuole",
        body: [
          "\"Volere\" (to want): \"voglio, vuoi, vuole, vogliamo, volete, vogliono\". Add an infinitive straight after it, with no to: \"Voglio partire\" (I want to leave). \"Vuoi venire?\" (do you want to come?) is the usual way to invite.",
          "Remember from Unit 7: to order, \"vorrei\" is polite; \"voglio\" is for wishes and plans.",
        ],
        examples: [
          { es: "voglio, vuoi, vuole", en: "I want, you want, he / she wants" },
          { es: "vogliamo, volete, vogliono", en: "we want, you (plural) want, they want" },
          { es: "Vuoi venire al cinema?", en: "Do you want to come to the cinema?" },
          { es: "Vogliamo visitare Napoli.", en: "We want to visit Naples." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want to come to the cinema? (to a friend)", answer: "Vuoi venire al cinema?", altAnswers: ["Tu vuoi venire al cinema?"], explanation: "\"Vuoi\" + infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We want] to visit Naples.", sentence: "___ visitare Napoli.", answer: "Vogliamo", altAnswers: ["Noi vogliamo"], explanation: "\"Vogliamo\": gli as in \"famiglia\"." },
        ],
      },
      {
        heading: "Potere: posso, puoi, può",
        body: [
          "\"Potere\" (can, may): \"posso, puoi, può, possiamo, potete, possono\". \"Può\" has an accent. \"Posso?\" alone asks permission: may I? (to sit, to come in). \"Puoi\" + infinitive asks a favour: \"Puoi chiudere la finestra?\".",
        ],
        examples: [
          { es: "posso, puoi, può", en: "I can, you can, he / she can" },
          { es: "possiamo, potete, possono", en: "we can, you (plural) can, they can" },
          { es: "Posso?", en: "May I?" },
          { es: "Puoi chiudere la finestra?", en: "Can you close the window?" },
          { es: "Non possiamo venire.", en: "We can't come." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you close the window? (to a friend)", answer: "Puoi chiudere la finestra?", altAnswers: ["Tu puoi chiudere la finestra?"], explanation: "\"Puoi\" + infinitive: a favour." },
          { type: "listen-choose", audio: "Non possiamo venire.", question: "What do they say?", options: ["We can't come.", "We don't want to come.", "We must come.", "We're coming."], correctIndex: 0, explanation: "\"Non possiamo\" = we can't." },
        ],
      },
      {
        heading: "Dovere: devo, devi, deve",
        body: [
          "\"Dovere\" (must, have to): \"devo, devi, deve, dobbiamo, dovete, devono\". \"Devo lavorare\" (I have to work) is the standard excuse. Negative: \"non devi pagare\" means you don't have to pay.",
        ],
        examples: [
          { es: "devo, devi, deve", en: "I must, you must, he / she must" },
          { es: "dobbiamo, dovete, devono", en: "we must, you (plural) must, they must" },
          { es: "Devo lavorare sabato.", en: "I have to work on Saturday." },
          { es: "Dobbiamo prenotare.", en: "We have to book." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to work on Saturday.", answer: "Devo lavorare sabato.", altAnswers: ["Sabato devo lavorare.", "Io devo lavorare sabato."], explanation: "\"Devo\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to leave.", answer: "Voglio partire.", altAnswers: ["Io voglio partire.", "Voglio andare via."], explanation: "No word for to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can't come.", answer: "Non possiamo venire.", altAnswers: ["Noi non possiamo venire."], explanation: "\"Non\" + \"possiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have to book.", answer: "Dobbiamo prenotare.", altAnswers: ["Noi dobbiamo prenotare."], explanation: "\"Dobbiamo\": double b." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I pay by card? (in a shop)", answer: "Posso pagare con la carta?", altAnswers: ["Posso pagare con carta?"], explanation: "\"Posso\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want to come? (plural)", answer: "Volete venire?", altAnswers: ["Voi volete venire?"], explanation: "\"Volete\" for voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They have to study.", answer: "Devono studiare.", altAnswers: ["Loro devono studiare."], explanation: "DE-vo-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you speak more slowly? (polite)", answer: "Può parlare più piano?", altAnswers: ["Lei può parlare più piano?", "Può parlare più lentamente?"], explanation: "\"Può\": accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sara [wants] to go out.", sentence: "Sara ___ uscire.", answer: "vuole", explanation: "\"Vuole\" for she." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You [don't have to] pay. (to a friend)", sentence: "Non ___ pagare.", answer: "devi", explanation: "\"Non devi\" = you don't have to." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sorry, I can't, I have to work.", words: ["Mi", "dispiace,", "non", "posso,", "devo", "lavorare."], translation: "I'm sorry, I can't, I have to work.", explanation: "The standard polite refusal." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "vuoi", right: "you want" },
          { left: "puoi", right: "you can" },
          { left: "devi", right: "you must" },
          { left: "vogliono", right: "they want" },
          { left: "possono", right: "they can" },
          { left: "devono", right: "they must" },
        ],
        explanation: "Three modal verbs, tu and loro.",
      },
      { type: "dictation", audio: "Vuoi venire? Non posso, devo studiare.", explanation: "Three modals in one exchange." },
      {
        type: "speak",
        text: "Vuoi venire al concerto? Dobbiamo prenotare i biglietti.",
        prompt: "Say it in Italian: Do you want to come to the concert? We have to book the tickets.",
        tip: "dob-BIA-mo: double b.",
        explanation: "\"Vuoi\" + infinitive, \"dobbiamo\" + infinitive.",
      },
    ],
  },
  {
    slug: "a1-sapere",
    level: "IT-A1",
    number: 6,
    title: "Knowing Facts and Skills: Sapere",
    summary: "Conjugate sapere, say non lo so, ask sai dov'è?, and tell so nuotare (I know how to) from posso nuotare.",
    duration: "14 min",
    sections: [
      {
        heading: "So, sai, sa",
        body: [
          "\"Sapere\" (to know a fact): \"so, sai, sa, sappiamo, sapete, sanno\". The most useful phrase in the language: \"Non lo so\" (I don't know), with \"lo\" (it) as a fixed chunk. Ask with \"Sai\" + question word: \"Sai dov'è la stazione?\", \"Sa che ore sono?\" (Lei).",
          "For people and places you'll need \"conoscere\", which comes in the next level.",
        ],
        examples: [
          { es: "so, sai, sa", en: "I know, you know, he / she knows" },
          { es: "sappiamo, sapete, sanno", en: "we know, you (plural) know, they know" },
          { es: "Non lo so.", en: "I don't know." },
          { es: "Sai dov'è la stazione?", en: "Do you know where the station is?" },
          { es: "Scusi, sa che ore sono?", en: "Excuse me, do you know what time it is?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know.", answer: "Non lo so.", altAnswers: ["Io non lo so."], explanation: "\"Non lo so\": a fixed chunk." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you know where the station is? (to a friend)", answer: "Sai dov'è la stazione?", altAnswers: ["Sai dove è la stazione?", "Tu sai dov'è la stazione?"], explanation: "\"Sai\" + question word." },
        ],
      },
      {
        heading: "So nuotare: skills",
        body: [
          "\"Sapere\" + infinitive means to know how to: \"So nuotare\" (I can swim, I know how). \"Potere\" is about being able or allowed right now: \"Oggi non posso nuotare\" (I can't swim today: no time, or the pool is closed).",
          "English can covers both, so ask yourself: a skill (\"so\") or a possibility (\"posso\")?",
        ],
        examples: [
          { es: "So nuotare.", en: "I can swim." },
          { es: "Oggi non posso nuotare.", en: "I can't swim today." },
          { es: "Sai cucinare?", en: "Can you cook?" },
          { es: "Non sanno guidare.", en: "They can't drive." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "You've never learned to ski. What do you say?", options: ["Non so sciare.", "Non posso sciare.", "Non devo sciare.", "Non voglio sciare."], correctIndex: 0, explanation: "A missing skill: \"non so\"." },
          { type: "listen-choose", audio: "Oggi non posso nuotare.", question: "What does the speaker mean?", options: ["They can't swim today.", "They don't know how to swim.", "They don't want to swim.", "They swim every day."], correctIndex: 0, explanation: "\"Posso\": possibility, not skill." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, do you know what time it is? (polite)", answer: "Scusi, sa che ore sono?", altAnswers: ["Scusi, sa che ora è?"], explanation: "Lei: \"sa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can swim.", answer: "So nuotare.", altAnswers: ["Io so nuotare."], explanation: "A skill: \"so\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you cook? (to a friend)", answer: "Sai cucinare?", altAnswers: ["Tu sai cucinare?"], explanation: "A skill: \"sai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They can't drive.", answer: "Non sanno guidare.", altAnswers: ["Loro non sanno guidare."], explanation: "\"Sanno\": double n." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We don't know.", answer: "Non lo sappiamo.", altAnswers: ["Noi non lo sappiamo."], explanation: "\"Sappiamo\": double p." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't come today.", answer: "Oggi non posso venire.", altAnswers: ["Non posso venire oggi."], explanation: "Possibility: \"posso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you know] where Marco lives? (plural)", sentence: "___ dove abita Marco?", answer: "Sapete", altAnswers: ["Voi sapete"], explanation: "\"Sapete\" for voi." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara [can] speak four languages.", sentence: "Chiara ___ parlare quattro lingue.", answer: "sa", explanation: "A skill: \"sa\"." },
      { type: "word-order", prompt: "Put the words in order to say: I can swim, but today I can't.", words: ["So", "nuotare,", "ma", "oggi", "non", "posso."], translation: "I can swim, but today I can't.", explanation: "Skill vs possibility." },
      { type: "multiple-choice", question: "The pool is closed today. What do you say?", options: ["Oggi non posso nuotare.", "Oggi non so nuotare.", "Oggi non sono nuotare.", "Oggi non devo nuoto."], correctIndex: 0, explanation: "A possibility, not a skill." },
      { type: "dictation", audio: "Sai dov'è il museo? Non lo so.", explanation: "\"Sai\", \"so\"." },
      {
        type: "speak",
        text: "Non so cucinare, ma so fare il caffè!",
        prompt: "Say it in Italian: I can't cook, but I can make coffee!",
        tip: "\"So\": a short, clean o.",
        explanation: "\"Sapere\" + infinitive for skills.",
      },
    ],
  },
  {
    slug: "a1-drill-irregular-verbs",
    level: "IT-A1",
    number: 7,
    title: "Drill: The Irregular Twelve",
    summary: "Produce andare, venire, fare, stare, dare, dire, uscire, volere, potere, dovere, sapere, avere and essere in every person.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "The forms to know",
        body: [
          "Io: \"vado, vengo, faccio, sto, do, dico, esco, voglio, posso, devo, so, ho, sono\". Loro: \"vanno, vengono, fanno, stanno, danno, dicono, escono, vogliono, possono, devono, sanno, hanno, sono\". Noi is almost always regular: \"andiamo, veniamo, facciamo\", except \"dobbiamo\", \"sappiamo\", \"abbiamo\", \"siamo\".",
        ],
        examples: [
          { es: "Faccio la spesa e poi vado a casa.", en: "I do the shopping and then go home." },
          { es: "Dobbiamo uscire alle sette.", en: "We have to leave at seven." },
          { es: "Sanno dove andiamo?", en: "Do they know where we're going?" },
          { es: "Vengono anche loro.", en: "They're coming too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have to leave at seven.", answer: "Dobbiamo uscire alle sette.", altAnswers: ["Dobbiamo partire alle sette.", "Noi dobbiamo uscire alle sette."], explanation: "\"Dobbiamo\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're coming too.", answer: "Vengono anche loro.", altAnswers: ["Anche loro vengono."], explanation: "\"Vengono\": n + g." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you doing? (to a friend)", answer: "Cosa fai?", altAnswers: ["Che cosa fai?", "Che fai?"], explanation: "\"Fai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going out with Sara.", answer: "Esco con Sara.", altAnswers: ["Io esco con Sara."], explanation: "\"Esco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're going to the beach.", answer: "Vanno al mare.", altAnswers: ["Loro vanno al mare.", "Vanno in spiaggia."], explanation: "\"Vanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can we come in? (to a teacher)", answer: "Possiamo entrare?", explanation: "\"Possiamo\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do they say?", answer: "Cosa dicono?", altAnswers: ["Che cosa dicono?", "Che dicono?"], explanation: "DI-co-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We know the answer.", answer: "Sappiamo la risposta.", altAnswers: ["Noi sappiamo la risposta."], explanation: "\"Sappiamo\": double p." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you staying here? (plural)", answer: "State qui?", altAnswers: ["Restate qui?", "Voi state qui?"], explanation: "\"State\" for voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She wants to come.", answer: "Vuole venire.", altAnswers: ["Lei vuole venire."], explanation: "\"Vuole\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to read this book. (to a friend)", answer: "Devi leggere questo libro.", altAnswers: ["Tu devi leggere questo libro."], explanation: "\"Devi\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're having breakfast.", answer: "Fanno colazione.", altAnswers: ["Loro fanno colazione."], explanation: "\"Fanno colazione\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I give] a present to Giulia.", sentence: "___ un regalo a Giulia.", answer: "Do", altAnswers: ["Io do"], explanation: "\"Do\": no accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Are you coming] tomorrow? (plural)", sentence: "___ domani?", answer: "Venite", altAnswers: ["Voi venite"], explanation: "\"Venite\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco [can] play the guitar.", sentence: "Marco ___ suonare la chitarra.", answer: "sa", explanation: "A skill: \"sa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You go out] too much! (plural)", sentence: "___ troppo!", answer: "Uscite", altAnswers: ["Voi uscite"], explanation: "u- for voi." },
      {
        type: "matching",
        instructions: "Match each infinitive to its loro form.",
        pairs: [
          { left: "andare", right: "vanno" },
          { left: "fare", right: "fanno" },
          { left: "uscire", right: "escono" },
          { left: "dire", right: "dicono" },
          { left: "sapere", right: "sanno" },
          { left: "venire", right: "vengono" },
        ],
        explanation: "Loro forms keep the stem stress: VAN-no, ES-co-no, VEN-go-no.",
      },
      { type: "dictation", audio: "Vanno al cinema e poi escono a cena.", explanation: "VAN-no, ES-co-no." },
      { type: "dictation", audio: "Non posso, devo fare la spesa.", explanation: "Two modals and \"fare\"." },
      {
        type: "speak",
        text: "Vado, vengo, faccio, sto, esco, voglio, posso, devo, so.",
        prompt: "Say the io forms of andare, venire, fare, stare, uscire, volere, potere, dovere, sapere.",
        tip: "VEN-go: n + g, not gn.",
        explanation: "The irregular io forms.",
      },
    ],
  },
  {
    slug: "a1-contrast-andare-venire",
    level: "IT-A1",
    number: 8,
    title: "Contrast Clinic: Andare or Venire?",
    summary: "Choose venire for movement towards the speaker or listener, andare for everything else, and say arrivo! when someone calls you.",
    duration: "14 min",
    sections: [
      {
        heading: "Towards me or you: venire",
        body: [
          "\"Venire\" is movement towards where the speaker or the listener is (or will be). \"Vieni da me?\" (are you coming to my place?), \"Vengo alla tua festa\" (I'm coming to your party). \"Andare\" is movement anywhere else: \"Vado alla festa di Marco\" (Marco's party, where neither of us is).",
          "English uses come in the same way most of the time, so the main trap is the next one.",
        ],
        examples: [
          { es: "Vieni da me stasera?", en: "Are you coming to my place tonight?" },
          { es: "Sì, vengo alle otto.", en: "Yes, I'm coming at eight." },
          { es: "Vengo alla tua festa.", en: "I'm coming to your party." },
          { es: "Vado alla festa di Marco.", en: "I'm going to Marco's party." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming to my place tonight? (to a friend)", answer: "Vieni da me stasera?", altAnswers: ["Stasera vieni da me?", "Vieni a casa mia stasera?"], explanation: "\"Da me\" = to my place." },
          { type: "multiple-choice", question: "Your friend invites you to her party. You accept. What do you say?", options: ["Sì, vengo!", "Sì, vado!", "Sì, esco!", "Sì, sto!"], correctIndex: 0, explanation: "Towards the listener's party: \"vengo\"." },
        ],
      },
      {
        heading: "Someone calls you: arrivo!",
        body: [
          "When someone calls you (\"Luca, a tavola!\", dinner's ready!), English says I'm coming! Italian says \"Arrivo!\" or \"Vengo!\", never \"vado\". \"Vado\" would mean you're leaving for somewhere else.",
          "\"Andiamo!\" is let's go!, and \"Vado via\" is I'm leaving.",
        ],
        examples: [
          { es: "Luca, a tavola! Arrivo!", en: "Luca, dinner's ready! I'm coming!" },
          { es: "Mamma, vengo subito!", en: "Mum, I'm coming right away!" },
          { es: "Andiamo, è tardi!", en: "Let's go, it's late!" },
          { es: "Ciao, vado via.", en: "Bye, I'm off." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm coming! (when someone calls you)", answer: "Arrivo!", altAnswers: ["Vengo!", "Arrivo subito!", "Vengo subito!"], explanation: "Never \"vado!\" here." },
          { type: "listen-choose", audio: "Andiamo, è tardi!", question: "What does it mean?", options: ["Let's go, it's late!", "We're coming, it's late!", "We're late, sorry!", "Let's stay, it's early!"], correctIndex: 0, explanation: "\"Andiamo!\" = let's go." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm coming to your party. (to a friend)", answer: "Vengo alla tua festa.", altAnswers: ["Io vengo alla tua festa."], explanation: "Towards the listener's event." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to Marco's party.", answer: "Vado alla festa di Marco.", altAnswers: ["Io vado alla festa di Marco."], explanation: "Neither of us is there: \"vado\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's go, it's late!", answer: "Andiamo, è tardi!", explanation: "\"Andiamo\" = let's go." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bye, I'm off.", answer: "Ciao, vado via.", altAnswers: ["Ciao, me ne vado."], explanation: "\"Vado via\" = I'm leaving." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming with us to the beach? (to a friend)", answer: "Vieni con noi al mare?", altAnswers: ["Vieni al mare con noi?", "Tu vieni con noi al mare?"], explanation: "Join the speaker: \"venire con\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Mum, I'm coming right away!", answer: "Mamma, arrivo subito!", altAnswers: ["Mamma, vengo subito!"], explanation: "Called: \"arrivo\" / \"vengo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My parents [are coming] to visit me in Rome.", sentence: "I miei genitori ___ a trovarmi a Roma.", answer: "vengono", explanation: "Towards the speaker: \"vengono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This summer [I'm going] to Greece.", sentence: "Quest'estate ___ in Grecia.", answer: "vado", altAnswers: ["io vado"], explanation: "Away from both: \"vado\"." },
      { type: "word-order", prompt: "Put the words in order to say: Yes, I'm coming at eight.", words: ["Sì,", "vengo", "alle", "otto."], translation: "Yes, I'm coming at eight.", explanation: "Accepting: \"vengo\"." },
      { type: "multiple-choice", question: "Your flatmate shouts \"È pronto!\" (it's ready). What do you answer?", options: ["Arrivo!", "Vado!", "Vado via!", "Andiamo via!"], correctIndex: 0, explanation: "\"Arrivo!\" = I'm coming." },
      { type: "dictation", audio: "Vieni da me? Sì, arrivo tra dieci minuti.", explanation: "\"Vieni da me\", \"arrivo\"." },
      {
        type: "speak",
        text: "Sì, vengo alla tua festa! Arrivo alle nove.",
        prompt: "Accept your friend's invitation: Yes, I'm coming to your party! I'll be there at nine.",
        tip: "VEN-go: the n and g are separate sounds.",
        explanation: "\"Vengo\" towards the listener.",
      },
    ],
  },
  {
    slug: "a1-dialogue-lab-invitation",
    level: "IT-A1",
    number: 9,
    title: "Dialogue Lab: Are You Free Saturday?",
    summary: "Make plans by phone: ask what someone is doing, invite them, refuse with a reason and move the plan.",
    duration: "14 min",
    sections: [
      {
        heading: "The invitation",
        body: [
          "Francesca calls Alessandro. Italians answer the phone with \"Pronto?\". She asks \"Cosa fai sabato?\" and invites him: \"Vuoi venire al concerto con me?\" He has a problem: \"Mi dispiace, non posso. Devo lavorare.\" (\"Mi dispiace\" = I'm sorry.)",
        ],
        examples: [
          { es: "Pronto? Ciao, Ale!", en: "Hello? Hi, Ale!" },
          { es: "Cosa fai sabato?", en: "What are you doing on Saturday?" },
          { es: "Vuoi venire al concerto con me?", en: "Do you want to come to the concert with me?" },
          { es: "Mi dispiace, non posso. Devo lavorare.", en: "I'm sorry, I can't. I have to work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you doing on Saturday? (to a friend)", answer: "Cosa fai sabato?", altAnswers: ["Che cosa fai sabato?", "Che fai sabato?", "Sabato cosa fai?"], explanation: "\"Fai\" + day: a plan." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry, I can't. I have to work.", answer: "Mi dispiace, non posso. Devo lavorare.", explanation: "The standard refusal: sorry + can't + reason." },
        ],
      },
      {
        heading: "Moving the plan",
        body: [
          "Alessandro suggests another day: \"Possiamo andare domenica?\" Francesca checks: \"Domenica c'è un altro concerto alle nove. Va bene?\" \"Perfetto! Passo da te alle otto.\" \"Va bene?\" (is that OK?) and \"Va bene!\" (OK!) close most plans.",
        ],
        examples: [
          { es: "Possiamo andare domenica?", en: "Can we go on Sunday?" },
          { es: "Domenica c'è un altro concerto.", en: "On Sunday there's another concert." },
          { es: "Va bene? Va bene!", en: "Is that OK? OK!" },
          { es: "Passo da te alle otto.", en: "I'll pick you up at eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can we go on Sunday?", answer: "Possiamo andare domenica?", altAnswers: ["Domenica possiamo andare?"], explanation: "\"Possiamo\" + infinitive." },
          { type: "listen-choose", audio: "Passo da te alle otto.", question: "What will happen at eight?", options: ["She'll come by to pick him up.", "She'll call him.", "The concert starts.", "He has to work."], correctIndex: 0, explanation: "\"Passare da\" + person = to stop by someone's place." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want to come to the concert with me? (to a friend)", answer: "Vuoi venire al concerto con me?", altAnswers: ["Vuoi venire con me al concerto?"], explanation: "\"Vuoi\" + \"venire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is that OK?", answer: "Va bene?", explanation: "\"Va bene\" = OK." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll pick you up at eight. (to a friend)", answer: "Passo da te alle otto.", altAnswers: ["Passo a prenderti alle otto."], explanation: "\"Passare da\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't on Saturday, I have to study.", answer: "Sabato non posso, devo studiare.", altAnswers: ["Non posso sabato, devo studiare."], explanation: "Refusal + reason." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Hello? Hi, Francesca!", answer: "Pronto? Ciao, Francesca!", explanation: "\"Pronto\" on the phone." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm sorry], I can't.", sentence: "___, non posso.", answer: "Mi dispiace", explanation: "\"Mi dispiace\" = I'm sorry." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sunday [there's] another concert.", sentence: "Domenica ___ un altro concerto.", answer: "c'è", explanation: "\"C'è\" = there is." },
      { type: "word-order", prompt: "Put the words in order to say: Can we go on Sunday instead?", words: ["Possiamo", "andare", "domenica", "invece?"], translation: "Can we go on Sunday instead?", explanation: "\"Invece\" = instead." },
      { type: "multiple-choice", question: "Francesca says \"Vuoi venire al concerto?\". Alessandro is free. What does he say?", options: ["Sì, volentieri!", "Mi dispiace, non posso.", "Pronto?", "Non lo so."], correctIndex: 0, explanation: "\"Volentieri\" = gladly." },
      { type: "multiple-choice", question: "How do Italians answer the phone?", options: ["Pronto?", "Ciao!", "Sì?", "Prego?"], correctIndex: 0, explanation: "\"Pronto\" = ready, used for hello on the phone." },
      { type: "dictation", audio: "Cosa fai sabato? Vuoi venire con me?", explanation: "\"Fai\", \"vuoi\"." },
      {
        type: "speak",
        text: "Mi dispiace, sabato non posso, devo lavorare. Possiamo andare domenica?",
        prompt: "Refuse and suggest another day: I'm sorry, I can't on Saturday, I have to work. Can we go on Sunday?",
        tip: "Mi di-SPIA-ce: stress on spia.",
        explanation: "Sorry + can't + reason + new plan.",
      },
    ],
  },
  {
    slug: "a1-transform-plans",
    level: "IT-A1",
    number: 10,
    title: "Transformations: Accept, Refuse, Move",
    summary: "Turn an invitation into an acceptance, a refusal with a reason, or a counter-proposal.",
    duration: "14 min",
    sections: [
      {
        heading: "Accept",
        body: [
          "From an invitation (\"Vuoi venire al cinema?\"), build three answers. To accept: \"Sì, volentieri!\" (yes, gladly!), \"Certo!\", \"Perché no?\". Repeat the verb if you like: \"Sì, vengo!\".",
          "With Lei the invitation changes: \"Vuole venire?\", and you answer the same way: \"Volentieri, grazie\".",
        ],
        examples: [
          { es: "Vuoi venire al cinema? Sì, volentieri!", en: "Do you want to come to the cinema? Yes, gladly!" },
          { es: "Usciamo stasera? Perché no?", en: "Shall we go out tonight? Why not?" },
          { es: "Vuole venire a cena, signora? Volentieri, grazie.", en: "Would you like to come to dinner, madam? Gladly, thank you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn the invitation into an acceptance and write: Yes, gladly!", source: "Yes, gladly!", answer: "Sì, volentieri!", altAnswers: ["Volentieri!", "Sì, certo!"], explanation: "\"Volentieri\" = gladly." },
          { type: "translate", direction: "en-es", prompt: "Change \"Vuoi venire?\" to Lei and write: Would you like to come? (polite)", source: "Would you like to come? (polite)", answer: "Vuole venire?", altAnswers: ["Lei vuole venire?"], explanation: "Lei: \"vuole\"." },
        ],
      },
      {
        heading: "Refuse with a reason",
        body: [
          "A bare \"no\" sounds rude. Refuse with three parts: \"Mi dispiace\" + \"non posso\" + a reason with \"devo\": \"Mi dispiace, non posso: devo studiare\". Or with \"ho\": \"Non posso, ho un impegno\" (I've got something on).",
        ],
        examples: [
          { es: "Mi dispiace, non posso: devo studiare.", en: "I'm sorry, I can't: I have to study." },
          { es: "Non posso, ho un impegno.", en: "I can't, I've got something on." },
          { es: "Purtroppo devo lavorare.", en: "Unfortunately I have to work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn \"Sì, vengo\" into a refusal and write: I'm sorry, I can't: I have to study.", source: "I'm sorry, I can't: I have to study.", answer: "Mi dispiace, non posso: devo studiare.", altAnswers: ["Mi dispiace, non posso, devo studiare."], explanation: "Sorry + can't + reason." },
          { type: "listen-choose", audio: "Non posso, ho un impegno.", question: "Why can't the speaker come?", options: ["They have something on.", "They're ill.", "They don't want to.", "They have no money."], correctIndex: 0, explanation: "\"Un impegno\" = a commitment." },
        ],
      },
      {
        heading: "Move the plan",
        body: [
          "Counter-proposals use \"possiamo\" or \"perché non\" + noi form: \"Possiamo fare domenica?\" (can we make it Sunday?), \"Perché non andiamo al mare invece?\" (why don't we go to the beach instead?).",
        ],
        examples: [
          { es: "Possiamo fare domenica?", en: "Can we make it Sunday?" },
          { es: "Perché non andiamo al mare invece?", en: "Why don't we go to the beach instead?" },
          { es: "Facciamo alle nove?", en: "Shall we say nine o'clock?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why don't we go to the beach instead?", answer: "Perché non andiamo al mare invece?", altAnswers: ["Perché invece non andiamo al mare?", "Perché non andiamo in spiaggia invece?"], explanation: "\"Perché non\" + noi form." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Accept \"Usciamo stasera?\" and write: Why not?", source: "Why not?", answer: "Perché no?", explanation: "\"Perché no?\"." },
      { type: "translate", direction: "en-es", prompt: "Refuse and write: Unfortunately I have to work.", source: "Unfortunately I have to work.", answer: "Purtroppo devo lavorare.", altAnswers: ["Purtroppo io devo lavorare."], explanation: "\"Purtroppo\" = unfortunately." },
      { type: "translate", direction: "en-es", prompt: "Move the plan and write: Can we make it Sunday?", source: "Can we make it Sunday?", answer: "Possiamo fare domenica?", altAnswers: ["Facciamo domenica?"], explanation: "\"Fare\" + day = to make it." },
      { type: "translate", direction: "en-es", prompt: "Refuse and write: I can't, I've got something on.", source: "I can't, I've got something on.", answer: "Non posso, ho un impegno.", altAnswers: ["Non posso, ho già un impegno."], explanation: "\"Avere un impegno\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Vuoi venire a cena?\" to plural and write: Do you want to come to dinner?", source: "Do you want to come to dinner? (plural)", answer: "Volete venire a cena?", altAnswers: ["Voi volete venire a cena?"], explanation: "Voi: \"volete\"." },
      { type: "translate", direction: "en-es", prompt: "Accept for both of you and write: Yes, we're coming gladly!", source: "Yes, we're coming gladly!", answer: "Sì, veniamo volentieri!", altAnswers: ["Sì, volentieri, veniamo!"], explanation: "\"Veniamo\" towards the host." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Shall we say] nine o'clock?", sentence: "___ alle nove?", answer: "Facciamo", explanation: "\"Facciamo alle nove?\" fixes a time." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sorry, [we can't]: we have to leave.", sentence: "Mi dispiace, ___: dobbiamo partire.", answer: "non possiamo", explanation: "\"Non possiamo\"." },
      { type: "word-order", prompt: "Put the words in order to say: Thanks, but I can't on Friday.", words: ["Grazie,", "ma", "venerdì", "non", "posso."], translation: "Thanks, but I can't on Friday.", altOrders: [["Grazie,", "ma", "non", "posso", "venerdì."]], explanation: "A soft refusal." },
      { type: "multiple-choice", question: "Which is the most polite refusal?", options: ["Mi dispiace, non posso: devo lavorare.", "No.", "Non voglio.", "No, devo."], correctIndex: 0, explanation: "Sorry + can't + reason." },
      { type: "dictation", audio: "Perché non andiamo al cinema domenica?", explanation: "\"Perché non\" + noi form." },
      {
        type: "speak",
        text: "Grazie, volentieri! Ma sabato non posso. Facciamo domenica?",
        prompt: "Accept, but move the day: Thanks, gladly! But I can't on Saturday. Shall we make it Sunday?",
        tip: "vo-len-TIE-ri: stress on tie.",
        explanation: "Accept, refuse a detail, propose.",
      },
    ],
  },
  {
    slug: "a1-mission-plan-a-weekend",
    level: "IT-A1",
    number: 11,
    title: "Real-World Mission: Plan a Weekend",
    summary: "Write a message proposing a weekend in Napoli: what you want to do, where you can go and what you must book.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "What we want to do",
        body: [
          "Your mission: propose a weekend in Napoli to your friend Chiara. Say what you want to do with \"voglio\" / \"vogliamo\" + infinitive, and where you can go with \"possiamo\": \"Voglio mangiare una vera pizza napoletana\", \"Possiamo andare a Pompei in treno\".",
        ],
        examples: [
          { es: "Andiamo a Napoli a maggio?", en: "Shall we go to Naples in May?" },
          { es: "Voglio mangiare una vera pizza napoletana.", en: "I want to eat a real Neapolitan pizza." },
          { es: "Possiamo andare a Pompei in treno.", en: "We can go to Pompeii by train." },
          { es: "Sabato sera usciamo sul lungomare.", en: "On Saturday evening we'll go out on the seafront." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can go to Pompeii by train.", answer: "Possiamo andare a Pompei in treno.", altAnswers: ["Possiamo andare in treno a Pompei."], explanation: "\"Possiamo\" + infinitive; \"a\" + town, \"in\" + transport." },
          { type: "listen-choose", audio: "Voglio mangiare una vera pizza napoletana.", question: "What does the speaker want?", options: ["to eat a real Neapolitan pizza", "to make a pizza", "to visit a pizzeria in Rome", "to eat pasta"], correctIndex: 0, explanation: "\"Voglio mangiare\"." },
        ],
      },
      {
        heading: "What we have to do",
        body: [
          "Then the practical part with \"dobbiamo\": \"Dobbiamo prenotare l'albergo\", \"Dobbiamo comprare i biglietti del treno\". End with a question: \"Sei libera?\" (are you free?), \"Che ne dici?\" (what do you think?).",
        ],
        examples: [
          { es: "Dobbiamo prenotare l'albergo.", en: "We have to book the hotel." },
          { es: "Dobbiamo comprare i biglietti del treno.", en: "We have to buy the train tickets." },
          { es: "Sei libera il 10 maggio?", en: "Are you free on 10 May?" },
          { es: "Che ne dici?", en: "What do you think?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have to book the hotel.", answer: "Dobbiamo prenotare l'albergo.", altAnswers: ["Dobbiamo prenotare l'hotel.", "Noi dobbiamo prenotare l'albergo."], explanation: "\"Dobbiamo\" + infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What do you think]? (to a friend)", sentence: "___?", answer: "Che ne dici", altAnswers: ["Cosa ne dici", "Che ne pensi"], explanation: "\"Che ne dici?\" = what do you say to that?" },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go to Naples in May?", answer: "Andiamo a Napoli a maggio?", altAnswers: ["Andiamo a Napoli in maggio?"], explanation: "\"Andiamo\" as a suggestion." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to see the sea.", answer: "Voglio vedere il mare.", altAnswers: ["Io voglio vedere il mare."], explanation: "\"Voglio\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have to buy the train tickets.", answer: "Dobbiamo comprare i biglietti del treno.", altAnswers: ["Dobbiamo comprare i biglietti per il treno."], explanation: "\"Del treno\" = di + il." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you free on 10 May? (to a female friend)", answer: "Sei libera il 10 maggio?", altAnswers: ["Sei libera il dieci maggio?"], explanation: "Date: \"il\" + number + month." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sunday we can go to Pompeii.", answer: "Domenica possiamo andare a Pompei.", altAnswers: ["Possiamo andare a Pompei domenica."], explanation: "\"Possiamo\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The weather's nice in May.", answer: "A maggio fa bel tempo.", altAnswers: ["Fa bel tempo a maggio.", "In maggio fa bel tempo."], explanation: "Weather: \"fa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We leave] on Friday at six.", sentence: "___ venerdì alle sei.", answer: "Partiamo", altAnswers: ["Noi partiamo"], explanation: "\"Partire\" = to set off." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Saturday evening [we'll go out] on the seafront.", sentence: "Sabato sera ___ sul lungomare.", answer: "usciamo", explanation: "\"Usciamo\": u- for noi." },
      { type: "word-order", prompt: "Put the words in order to say: Do you want to come to Naples with me?", words: ["Vuoi", "venire", "a", "Napoli", "con", "me?"], translation: "Do you want to come to Naples with me?", explanation: "\"Vuoi venire\" invites." },
      { type: "multiple-choice", question: "Which sentence is about an obligation?", options: ["Dobbiamo prenotare l'albergo.", "Vogliamo vedere il mare.", "Possiamo andare a Pompei.", "Sappiamo dov'è l'albergo."], correctIndex: 0, explanation: "\"Dovere\" = have to." },
      { type: "dictation", audio: "Dobbiamo prenotare l'albergo. Che ne dici?", explanation: "\"Dobbiamo\", \"che ne dici\"." },
      {
        type: "speak",
        text: "Andiamo a Napoli a maggio? Voglio mangiare la pizza e possiamo andare a Pompei. Dobbiamo prenotare l'albergo!",
        prompt: "Propose the trip: Shall we go to Naples in May? I want to eat pizza and we can go to Pompeii. We have to book the hotel!",
        tip: "Three modals: VO-glio, pos-SIA-mo, dob-BIA-mo.",
        explanation: "Volere, potere, dovere in one plan.",
      },
    ],
  },
];

export const IT_A1_U09_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a message to an Italian friend proposing a weekend away in an Italian city. Say when you want to go and how, what you want to do there, what you can visit, and what you must book or buy. Ask if they're free and what they think.",
  minWords: 35,
  maxWords: 90,
  rubric: [
    "Uses volere, potere and dovere + infinitive correctly (voglio vedere, possiamo andare, dobbiamo prenotare)",
    "Uses irregular verbs in the right person (andiamo, vieni, facciamo, usciamo)",
    "Uses a / in correctly with cities, regions and transport (a Napoli, in treno)",
    "Asks the friend at least one question with the tu form (sei libero / libera?, che ne dici?)",
  ],
  modelAnswer: "Ciao Chiara! Andiamo a Napoli a maggio? Possiamo partire venerdì in treno. Voglio mangiare una vera pizza napoletana e vedere il mare. Sabato possiamo andare a Pompei e la sera usciamo sul lungomare. Dobbiamo prenotare l'albergo e comprare i biglietti del treno. Sei libera il 10 maggio? Che ne dici?",
  explanation: "\"Andiamo\" makes a suggestion; \"possiamo partire\", \"voglio mangiare\" and \"dobbiamo prenotare\" are modal + infinitive. \"Usciamo\" keeps u- for noi. \"A Napoli\", \"a Pompei\" (cities) and \"in treno\" (transport).",
};
