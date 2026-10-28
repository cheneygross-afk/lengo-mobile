// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u10.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 10: Comparisons. Più / meno ... di / che, come / quanto,
// relative and absolute superlatives, migliore / meglio, maggiore / minore.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U10: Lesson[] = [
  {
    slug: "a2-comparatives-di",
    level: "IT-A2",
    number: 1,
    title: "More Than, Less Than: Più ... Di",
    summary: "Compare two people or things with più / meno ... di: Roma è più grande di Firenze, Marco è meno alto di me.",
    duration: "15 min",
    sections: [
      {
        heading: "Più grande di",
        body: [
          "To compare two nouns or pronouns, use \"più\" (more) or \"meno\" (less) + adjective + \"di\" (than): \"Roma è più grande di Firenze\", \"Questo libro è meno interessante di quello\". \"Di\" joins the article: \"più alto del padre\", \"più cara della mia\".",
          "Italian has no -er ending: \"più grande\" = bigger, \"più veloce\" = faster.",
        ],
        examples: [
          { es: "Roma è più grande di Firenze.", en: "Rome is bigger than Florence." },
          { es: "Il treno è più veloce dell'autobus.", en: "The train is faster than the bus." },
          { es: "Questa giacca è meno cara di quella.", en: "This jacket is cheaper than that one." },
          { es: "Mia sorella è più alta di mio fratello.", en: "My sister is taller than my brother." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rome is bigger than Florence.", answer: "Roma è più grande di Firenze.", explanation: "\"Più\" + adjective + \"di\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train is faster [than the] bus.", sentence: "Il treno è più veloce ___ autobus.", answer: "dell'", explanation: "\"Di + l'\" = \"dell'\"." },
          { type: "multiple-choice", question: "\"Meno caro\" means:", options: ["cheaper", "more expensive", "very expensive", "as expensive"], correctIndex: 0, explanation: "Less expensive = cheaper." },
        ],
      },
      {
        heading: "Di me, di te; più di cento",
        body: [
          "After \"di\" use the stressed pronouns: \"di me\", \"di te\", \"di lui\", \"di lei\", \"di noi\", \"di voi\", \"di loro\". \"Marco è meno alto di me.\" \"Sei più bravo di lui.\"",
          "With numbers and quantities: \"Costa più di cento euro\" (more than a hundred euros), \"meno di un'ora\" (less than an hour).",
        ],
        examples: [
          { es: "Marco è meno alto di me.", en: "Marco is shorter than me." },
          { es: "Sei più bravo di lui in matematica.", en: "You're better than him at maths." },
          { es: "Costa più di cento euro.", en: "It costs more than a hundred euros." },
          { es: "Ci vuole meno di un'ora.", en: "It takes less than an hour." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco is shorter than me.", answer: "Marco è meno alto di me.", altAnswers: ["Marco è più basso di me."], explanation: "\"Di me\": stressed pronoun." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It costs more than a hundred euros.", answer: "Costa più di cento euro.", explanation: "\"Più di\" + number." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This jacket is cheaper than that one.", answer: "Questa giacca è meno cara di quella.", altAnswers: ["Questa giacca costa meno di quella."], explanation: "\"Meno cara di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister is taller than my brother.", answer: "Mia sorella è più alta di mio fratello.", explanation: "No article with \"mio fratello\", so plain \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're better than him at maths. (to a friend)", answer: "Sei più bravo di lui in matematica.", altAnswers: ["Sei più brava di lui in matematica.", "In matematica sei più bravo di lui.", "In matematica sei più brava di lui."], explanation: "\"Di lui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes less than an hour.", answer: "Ci vuole meno di un'ora.", explanation: "\"Meno di\" + quantity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Milan is more expensive than Naples.", answer: "Milano è più cara di Napoli.", altAnswers: ["Milano è più costosa di Napoli."], explanation: "Cities are feminine: \"cara\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sea is warmer than the lake.", answer: "Il mare è più caldo del lago.", explanation: "\"Di + il\" = \"del\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're younger than them.", answer: "Siamo più giovani di loro.", explanation: "\"Di loro\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sicily is bigger [than] Sardinia.", sentence: "La Sicilia è più grande ___ Sardegna.", answer: "della", explanation: "\"Di + la\" = \"della\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca is [less patient than] Anna.", sentence: "Luca è ___ Anna.", answer: "meno paziente di", explanation: "\"Meno ... di\"." },
      { type: "word-order", prompt: "Put the words in order to say: My car is older than yours.", words: ["La", "mia", "macchina", "è", "più", "vecchia", "della", "tua."], translation: "My car is older than yours.", explanation: "\"Della tua\"." },
      { type: "listen-choose", audio: "Il treno è più veloce dell'autobus, ma è meno comodo.", question: "What does the speaker say about the train?", options: ["faster but less comfortable", "slower but more comfortable", "faster and more comfortable", "cheaper than the bus"], correctIndex: 0, explanation: "\"Più veloce\", \"meno comodo\"." },
      { type: "speak", text: "Roma è più grande di Firenze, ma Firenze è meno caotica.", prompt: "Say it in Italian: Rome is bigger than Florence, but Florence is less chaotic.", tip: "Più ... di, meno ...", explanation: "Two comparatives." },
    ],
  },
  {
    slug: "a2-comparatives-che",
    level: "IT-A2",
    number: 2,
    title: "Più ... Che: The Other Comparative",
    summary: "Use che instead of di when you compare two adjectives, two verbs, two quantities or two phrases with prepositions.",
    duration: "15 min",
    sections: [
      {
        heading: "Same subject, two qualities or actions",
        body: [
          "\"Di\" compares two people or things on one quality. \"Che\" compares two qualities, two actions or two amounts of the same subject: \"Questa sedia è più bella che comoda\" (more beautiful than comfortable). \"È più facile parlare che scrivere\" (Speaking is easier than writing).",
          "With two quantities: \"Mangio più pasta che riso\" (I eat more pasta than rice). The thing compared is the object, not the subject.",
        ],
        examples: [
          { es: "Questa sedia è più bella che comoda.", en: "This chair is more beautiful than comfortable." },
          { es: "È più facile parlare che scrivere.", en: "Speaking is easier than writing." },
          { es: "Mangio più pasta che riso.", en: "I eat more pasta than rice." },
          { es: "Ho più amici che amiche.", en: "I have more male friends than female friends." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Speaking is easier than writing.", answer: "È più facile parlare che scrivere.", altAnswers: ["Parlare è più facile che scrivere."], explanation: "Two verbs: \"che\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I eat more pasta [than] rice.", sentence: "Mangio più pasta ___ riso.", answer: "che", explanation: "Two quantities: \"che\"." },
        ],
      },
      {
        heading: "With prepositions",
        body: [
          "If the two things you compare both start with a preposition, use \"che\": \"Lavoro più a Roma che a Milano\", \"Esco più con i colleghi che con gli amici\", \"Fa più freddo in casa che fuori\".",
        ],
        examples: [
          { es: "Lavoro più a Roma che a Milano.", en: "I work more in Rome than in Milan." },
          { es: "Fa più freddo in casa che fuori.", en: "It's colder inside than outside." },
          { es: "Esco più con i colleghi che con gli amici.", en: "I go out more with colleagues than with friends." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's colder inside than outside.", answer: "Fa più freddo in casa che fuori.", altAnswers: ["Fa più freddo dentro che fuori."], explanation: "Two places: \"che\"." },
          { type: "multiple-choice", question: "\"Lavoro più a Roma ___ a Milano.\"", options: ["che", "di", "del", "come"], correctIndex: 0, explanation: "Two phrases with \"a\": \"che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This chair is more beautiful than comfortable.", answer: "Questa sedia è più bella che comoda.", explanation: "Two adjectives: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work more in Rome than in Milan.", answer: "Lavoro più a Roma che a Milano.", explanation: "Two prepositional phrases." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I go out more with colleagues than with friends.", answer: "Esco più con i colleghi che con gli amici.", altAnswers: ["Esco più coi colleghi che con gli amici.", "Esco più con i colleghi che con le amiche."], explanation: "\"Con ... che con\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I drink more tea than coffee.", answer: "Bevo più tè che caffè.", explanation: "Two quantities." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better to walk than to take the car.", answer: "È meglio camminare che prendere la macchina.", altAnswers: ["È meglio andare a piedi che prendere la macchina.", "Meglio camminare che prendere la macchina."], explanation: "Two verbs: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film was more long than interesting.", answer: "Il film era più lungo che interessante.", altAnswers: ["Il film è stato più lungo che interessante."], explanation: "Two adjectives: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my town there are more bars than shops.", answer: "Nel mio paese ci sono più bar che negozi.", altAnswers: ["Nella mia città ci sono più bar che negozi."], explanation: "Two quantities." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's more tired [than] ill.", sentence: "È più stanca ___ malata.", answer: "che", explanation: "Two adjectives." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I prefer reading [than watching] TV.", sentence: "Preferisco leggere ___ la TV.", answer: "che guardare", altAnswers: ["piuttosto che guardare"], explanation: "Two verbs." },
      { type: "word-order", prompt: "Put the words in order to say: In summer there are more tourists than residents.", words: ["D'estate", "ci", "sono", "più", "turisti", "che", "abitanti."], translation: "In summer there are more tourists than residents.", explanation: "Two quantities." },
      { type: "dictation", audio: "È più facile parlare che scrivere.", explanation: "\"Che\" between two verbs." },
      { type: "speak", text: "Bevo più acqua che vino e mangio più verdura che carne.", prompt: "Say it in Italian: I drink more water than wine and I eat more vegetables than meat.", tip: "Two quantities each time: che.", explanation: "\"Più ... che\" twice." },
    ],
  },
  {
    slug: "a2-equality",
    level: "IT-A2",
    number: 3,
    title: "As ... As: Come and Quanto",
    summary: "Say two things are equal with (così) ... come or (tanto) ... quanto: Luca è alto come suo padre.",
    duration: "15 min",
    sections: [
      {
        heading: "Alto come",
        body: [
          "For as ... as, Italian uses \"come\" or \"quanto\" after the adjective: \"Luca è alto come suo padre\" = \"Luca è alto quanto suo padre\". \"Così\" or \"tanto\" before the adjective are optional and usually left out in speech.",
          "With pronouns: \"come me\", \"quanto te\": \"Sei stanco come me?\"",
        ],
        examples: [
          { es: "Luca è alto come suo padre.", en: "Luca is as tall as his father." },
          { es: "Questo vino è buono quanto quello.", en: "This wine is as good as that one." },
          { es: "Sei stanco come me?", en: "Are you as tired as me?" },
          { es: "Non è così difficile come pensi.", en: "It's not as difficult as you think." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca is as tall as his father.", answer: "Luca è alto come suo padre.", altAnswers: ["Luca è alto quanto suo padre.", "Luca è così alto come suo padre.", "Luca è tanto alto quanto suo padre."], explanation: "\"Come\" or \"quanto\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Are you as tired [as me]? (to a friend)", sentence: "Sei stanco ___?", answer: "come me", altAnswers: ["quanto me"], explanation: "Stressed pronoun after \"come\"." },
        ],
      },
      {
        heading: "Tanto quanto with verbs and nouns",
        body: [
          "With verbs: \"Mi piace tanto il mare quanto la montagna\" (I like the sea as much as the mountains). \"Lavoro quanto te\" (I work as much as you).",
          "With nouns, \"tanto\" agrees: \"Ho tanti libri quanto te\", \"Non ho tanta pazienza quanto lei\".",
        ],
        examples: [
          { es: "Mi piace tanto il mare quanto la montagna.", en: "I like the sea as much as the mountains." },
          { es: "Lavoro quanto te.", en: "I work as much as you." },
          { es: "Non ho tanta pazienza quanto lei.", en: "I don't have as much patience as her." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work as much as you. (to a friend)", answer: "Lavoro quanto te.", altAnswers: ["Lavoro tanto quanto te.", "Io lavoro quanto te."], explanation: "\"Quanto te\"." },
          { type: "multiple-choice", question: "\"Non ho ___ pazienza quanto lei.\"", options: ["tanta", "tanto", "tanti", "tante"], correctIndex: 0, explanation: "Agrees with \"pazienza\" (feminine singular)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This wine is as good as that one.", answer: "Questo vino è buono quanto quello.", altAnswers: ["Questo vino è buono come quello.", "Questo vino è tanto buono quanto quello."], explanation: "\"Quanto quello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not as difficult as you think. (to a friend)", answer: "Non è così difficile come pensi.", altAnswers: ["Non è difficile come pensi.", "Non è tanto difficile quanto pensi."], explanation: "\"Così ... come\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I like the sea as much as the mountains.", answer: "Mi piace tanto il mare quanto la montagna.", altAnswers: ["Mi piace il mare quanto la montagna.", "Mi piacciono tanto il mare quanto la montagna."], explanation: "\"Tanto ... quanto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't have as much patience as her.", answer: "Non ho tanta pazienza quanto lei.", altAnswers: ["Non ho la pazienza che ha lei."], explanation: "\"Tanta\" agrees with \"pazienza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turin is as beautiful as Milan.", answer: "Torino è bella come Milano.", altAnswers: ["Torino è bella quanto Milano.", "Torino è così bella come Milano.", "Torino è tanto bella quanto Milano."], explanation: "Equality." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My son eats as much as me.", answer: "Mio figlio mangia quanto me.", altAnswers: ["Mio figlio mangia tanto quanto me.", "Mio figlio mangia come me."], explanation: "\"Quanto me\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She has as many friends as her sister.", answer: "Ha tanti amici quanto sua sorella.", altAnswers: ["Ha tanti amici quanti sua sorella.", "Lei ha tanti amici quanto sua sorella."], explanation: "\"Tanti\" agrees with \"amici\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The exam wasn't [as hard as] last year.", sentence: "L'esame non è stato ___ l'anno scorso.", answer: "difficile come", altAnswers: ["così difficile come", "difficile quanto", "tanto difficile quanto"], explanation: "Equality in the negative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Paolo is as funny [as you]. (to a friend)", sentence: "Paolo è simpatico ___.", answer: "come te", altAnswers: ["quanto te"], explanation: "\"Come te\"." },
      { type: "word-order", prompt: "Put the words in order to say: This hotel is as expensive as that one.", words: ["Questo", "albergo", "è", "caro", "come", "quello."], translation: "This hotel is as expensive as that one.", explanation: "Adjective + \"come\"." },
      { type: "listen-choose", audio: "Mia figlia è alta quanto me.", question: "What does the speaker say?", options: ["Her daughter is as tall as her.", "Her daughter is taller.", "Her daughter is shorter.", "Her daughter is very tall."], correctIndex: 0, explanation: "\"Quanto me\" = as ... as me." },
      { type: "speak", text: "Mi piace tanto la città quanto la campagna.", prompt: "Say it in Italian: I like the city as much as the countryside.", tip: "Tanto ... quanto.", explanation: "Equality with \"piacere\"." },
    ],
  },
  {
    slug: "a2-superlatives",
    level: "IT-A2",
    number: 4,
    title: "The Most: Superlatives",
    summary: "Say the most and the least (il ristorante più caro della città) and very (buonissimo, bellissima) with -issimo.",
    duration: "15 min",
    sections: [
      {
        heading: "Il più ... di",
        body: [
          "The relative superlative is article + noun + \"più\" / \"meno\" + adjective + \"di\": \"il ristorante più caro della città\", \"la ragazza più simpatica della classe\". The noun can be left out: \"È il più caro di tutti.\"",
          "\"Di\" joins the article as usual: \"della città\", \"del mondo\", \"d'Italia\" (no article with \"Italia\" here).",
        ],
        examples: [
          { es: "È il ristorante più caro della città.", en: "It's the most expensive restaurant in the city." },
          { es: "Giulia è la ragazza più simpatica della classe.", en: "Giulia is the nicest girl in the class." },
          { es: "Venezia è la città più romantica d'Italia.", en: "Venice is the most romantic city in Italy." },
          { es: "È il meno caro di tutti.", en: "It's the cheapest of all." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the most expensive restaurant in the city.", answer: "È il ristorante più caro della città.", explanation: "\"In\" = \"di\" in superlatives." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Venice is the most romantic city [in] Italy.", sentence: "Venezia è la città più romantica ___ Italia.", answer: "d'", explanation: "\"D'Italia\"." },
        ],
      },
      {
        heading: "-issimo = very",
        body: [
          "Drop the final vowel and add \"-issimo, -issima, -issimi, -issime\": \"buono\" → \"buonissimo\", \"bella\" → \"bellissima\", \"cari\" → \"carissimi\". It means very, extremely: \"bellissimo\" = \"molto bello\". \"-co\" / \"-go\" adjectives add an \"h\": \"stanchissimo\", \"lunghissimo\".",
          "Don't combine them: \"molto bellissimo\" is wrong. Use one or the other.",
        ],
        examples: [
          { es: "La pizza era buonissima.", en: "The pizza was delicious." },
          { es: "Sono stanchissima.", en: "I'm exhausted." },
          { es: "Questi stivali sono carissimi.", en: "These boots are really expensive." },
          { es: "È una strada lunghissima.", en: "It's a very long road." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pizza was delicious.", answer: "La pizza era buonissima.", altAnswers: ["La pizza è stata buonissima.", "La pizza era molto buona."], explanation: "\"Buonissima\"." },
          { type: "multiple-choice", question: "\"Stanco\" + -issimo (a woman):", options: ["stanchissima", "stancissima", "stanchessima", "molto stanchissima"], correctIndex: 0, explanation: "\"-co\" → \"-chissimo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia is the nicest girl in the class.", answer: "Giulia è la ragazza più simpatica della classe.", explanation: "Article + noun + \"più\" + adjective + \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Venice is the most romantic city in Italy.", answer: "Venezia è la città più romantica d'Italia.", explanation: "\"D'Italia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the cheapest of all.", answer: "È il meno caro di tutti.", altAnswers: ["È il più economico di tutti.", "È la meno cara di tutte.", "È la più economica di tutte."], explanation: "\"Il meno caro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm exhausted. (a woman speaking)", answer: "Sono stanchissima.", altAnswers: ["Sono molto stanca."], explanation: "\"-chissima\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These boots are really expensive.", answer: "Questi stivali sono carissimi.", altAnswers: ["Questi stivali sono molto cari."], explanation: "\"Carissimi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the tallest building in the world.", answer: "È l'edificio più alto del mondo.", altAnswers: ["È il palazzo più alto del mondo."], explanation: "\"Del mondo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The weather was very nice.", answer: "Il tempo era bellissimo.", altAnswers: ["Il tempo è stato bellissimo.", "Faceva bellissimo.", "Il tempo era molto bello."], explanation: "\"Bellissimo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's [the longest] river in Italy.", sentence: "È ___ d'Italia.", answer: "il fiume più lungo", explanation: "\"Il fiume più lungo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These shoes are [very comfortable].", sentence: "Queste scarpe sono ___.", answer: "comodissime", altAnswers: ["molto comode"], explanation: "\"-issime\" for feminine plural." },
      { type: "word-order", prompt: "Put the words in order to say: She's the youngest of the group.", words: ["È", "la", "più", "giovane", "del", "gruppo."], translation: "She's the youngest of the group.", explanation: "Noun left out." },
      { type: "dictation", audio: "È il ristorante più caro della città, ma è buonissimo.", explanation: "Relative and absolute superlatives." },
      { type: "speak", text: "Venezia è la città più bella del mondo: è romanticissima!", prompt: "Say it in Italian: Venice is the most beautiful city in the world: it's so romantic!", tip: "Il più ... di, then -issima.", explanation: "Two superlatives." },
    ],
  },
  {
    slug: "a2-irregular-comparatives",
    level: "IT-A2",
    number: 5,
    title: "Better, Worse, Older, Younger",
    summary: "Use migliore / peggiore (adjectives) and meglio / peggio (adverbs), maggiore / minore for siblings, il migliore and ottimo.",
    duration: "15 min",
    sections: [
      {
        heading: "Migliore or meglio?",
        body: [
          "\"Migliore\" (better) and \"peggiore\" (worse) are adjectives: they describe a noun. \"Questo vino è migliore di quello.\" \"Il tempo oggi è peggiore di ieri.\" Plural: \"migliori\", \"peggiori\".",
          "\"Meglio\" (better) and \"peggio\" (worse) are adverbs: they go with a verb. \"Oggi sto meglio\" (I feel better today). \"Luca canta peggio di me.\" Also \"è meglio\" + infinitive: \"È meglio partire presto\".",
          "\"Più buono\" is also correct and very common, especially for food and people: \"Questa torta è più buona\". \"Più migliore\" and \"più meglio\" are always wrong: the \"più\" is already inside.",
        ],
        examples: [
          { es: "Questo vino è migliore di quello.", en: "This wine is better than that one." },
          { es: "Oggi sto meglio, grazie.", en: "I feel better today, thanks." },
          { es: "Luca canta peggio di me.", en: "Luca sings worse than me." },
          { es: "È meglio partire presto.", en: "It's better to leave early." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel better today, thanks.", answer: "Oggi sto meglio, grazie.", altAnswers: ["Sto meglio oggi, grazie.", "Oggi mi sento meglio, grazie."], explanation: "With a verb: \"meglio\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This wine is [better] than that one.", sentence: "Questo vino è ___ di quello.", answer: "migliore", altAnswers: ["più buono"], explanation: "With a noun: \"migliore\"." },
          { type: "multiple-choice", question: "\"Parli italiano ___ di me.\"", options: ["meglio", "migliore", "più meglio", "più migliore"], correctIndex: 0, explanation: "With a verb: \"meglio\"." },
        ],
      },
      {
        heading: "Il migliore, ottimo, maggiore, minore",
        body: [
          "\"Il migliore\" / \"il peggiore\" = the best / the worst: \"È il migliore ristorante della città\" or \"il ristorante migliore della città\". \"Ottimo\" = excellent, very good: \"un ottimo vino\".",
          "\"Maggiore\" and \"minore\" mean older and younger for brothers and sisters: \"mio fratello maggiore\", \"mia sorella minore\". You'll also hear \"più grande\" and \"più piccolo\" in speech.",
        ],
        examples: [
          { es: "È il migliore ristorante della città.", en: "It's the best restaurant in the city." },
          { es: "Abbiamo bevuto un ottimo vino.", en: "We drank an excellent wine." },
          { es: "Mio fratello maggiore vive a Londra.", en: "My older brother lives in London." },
          { es: "La mia sorella minore ha sedici anni.", en: "My younger sister is sixteen." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My older brother lives in London.", answer: "Mio fratello maggiore vive a Londra.", altAnswers: ["Mio fratello maggiore abita a Londra.", "Il mio fratello maggiore vive a Londra.", "Mio fratello più grande vive a Londra."], explanation: "\"Maggiore\" = older (sibling)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the best restaurant in the city.", answer: "È il migliore ristorante della città.", altAnswers: ["È il ristorante migliore della città.", "È il miglior ristorante della città."], explanation: "\"Il migliore\" before or after the noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca sings worse than me.", answer: "Luca canta peggio di me.", explanation: "Adverb: \"peggio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better to leave early.", answer: "È meglio partire presto.", altAnswers: ["Meglio partire presto."], explanation: "\"È meglio\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We drank an excellent wine.", answer: "Abbiamo bevuto un ottimo vino.", altAnswers: ["Abbiamo bevuto un vino ottimo."], explanation: "\"Ottimo\" = excellent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My younger sister is sixteen.", answer: "La mia sorella minore ha sedici anni.", altAnswers: ["Mia sorella minore ha sedici anni.", "Mia sorella più piccola ha sedici anni.", "La mia sorella più piccola ha sedici anni."], explanation: "\"Minore\" = younger." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The weather today is worse than yesterday.", answer: "Il tempo oggi è peggiore di ieri.", altAnswers: ["Oggi il tempo è peggiore di ieri.", "Oggi il tempo è peggio di ieri."], explanation: "With a noun: \"peggiore\" (\"peggio\" is common in speech)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You speak Italian better than me. (to a friend)", answer: "Parli italiano meglio di me.", altAnswers: ["Parli l'italiano meglio di me.", "Tu parli italiano meglio di me."], explanation: "With a verb: \"meglio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're my best friends.", answer: "Sono i miei migliori amici.", altAnswers: ["Sono le mie migliori amiche."], explanation: "Plural: \"migliori\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was [the worst] day of my life.", sentence: "È stato ___ giorno della mia vita.", answer: "il peggiore", altAnswers: ["il peggior"], explanation: "\"Il peggiore\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Things are going [better] now.", sentence: "Adesso le cose vanno ___.", answer: "meglio", explanation: "With \"andare\": \"meglio\"." },
      { type: "multiple-choice", question: "Which is NOT correct?", options: ["Questa pizza è più migliore.", "Questa pizza è migliore.", "Questa pizza è più buona.", "Questa pizza è ottima."], correctIndex: 0, explanation: "Never \"più migliore\"." },
      { type: "dictation", audio: "Oggi sto meglio, ma ieri stavo peggio.", explanation: "Adverbs with \"stare\"." },
      { type: "speak", text: "Mio fratello maggiore cucina meglio di me: fa la migliore carbonara di Roma!", prompt: "Say it in Italian: My older brother cooks better than me: he makes the best carbonara in Rome!", tip: "Meglio with a verb, migliore with a noun.", explanation: "Three irregular forms." },
    ],
  },
  {
    slug: "a2-drill-comparatives",
    level: "IT-A2",
    number: 6,
    title: "Drill: Comparisons",
    summary: "Forty quick comparisons: di vs che, come / quanto, superlatives and the irregular forms.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Checklist",
        body: [
          "Two people or things on one quality: \"di\". Two qualities, actions, amounts or prepositional phrases: \"che\". Equal: \"come\" / \"quanto\". The most: \"il più ... di\". Very: \"-issimo\". Adjective better: \"migliore\"; adverb better: \"meglio\".",
        ],
        examples: [
          { es: "Bologna è più piccola di Milano.", en: "Bologna is smaller than Milan." },
          { es: "Leggo più romanzi che giornali.", en: "I read more novels than newspapers." },
          { es: "È la piazza più famosa di Siena.", en: "It's the most famous square in Siena." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I read more novels than newspapers.", answer: "Leggo più romanzi che giornali.", explanation: "Two quantities: \"che\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Bologna is smaller [than] Milan.", sentence: "Bologna è più piccola ___ Milano.", answer: "di", explanation: "Two cities: \"di\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the most famous square in Siena.", answer: "È la piazza più famosa di Siena.", explanation: "Relative superlative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My flat is smaller than yours. (to a friend)", answer: "Il mio appartamento è più piccolo del tuo.", altAnswers: ["Il mio appartamento è meno grande del tuo.", "La mia casa è più piccola della tua."], explanation: "\"Del tuo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's more useful than beautiful.", answer: "È più utile che bello.", altAnswers: ["È più utile che bella."], explanation: "Two adjectives: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anna is as clever as her brother.", answer: "Anna è intelligente come suo fratello.", altAnswers: ["Anna è intelligente quanto suo fratello.", "Anna è brava come suo fratello.", "Anna è così intelligente come suo fratello."], explanation: "Equality." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The soup is very hot.", answer: "La minestra è caldissima.", altAnswers: ["La zuppa è caldissima.", "La minestra è molto calda.", "La zuppa è molto calda."], explanation: "\"-issima\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He drives better than his father.", answer: "Guida meglio di suo padre.", altAnswers: ["Lui guida meglio di suo padre."], explanation: "Adverb: \"meglio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This is the best ice cream in Rome.", answer: "Questo è il gelato più buono di Roma.", altAnswers: ["Questo è il miglior gelato di Roma.", "Questo è il migliore gelato di Roma.", "Questo è il gelato migliore di Roma."], explanation: "\"Più buono\" or \"migliore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's colder in Milan than in Rome.", answer: "Fa più freddo a Milano che a Roma.", explanation: "Two prepositional phrases: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paolo is less shy than his sister.", answer: "Paolo è meno timido di sua sorella.", explanation: "\"Meno ... di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My younger brother is called Matteo.", answer: "Mio fratello minore si chiama Matteo.", altAnswers: ["Il mio fratello minore si chiama Matteo.", "Mio fratello più piccolo si chiama Matteo."], explanation: "\"Minore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the worst film of the year.", answer: "È il peggiore film dell'anno.", altAnswers: ["È il film peggiore dell'anno.", "È il peggior film dell'anno."], explanation: "\"Il peggiore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are more cars than bikes.", answer: "Ci sono più macchine che bici.", altAnswers: ["Ci sono più auto che bici.", "Ci sono più macchine che biciclette."], explanation: "Two quantities." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Train tickets cost [less than] plane tickets.", sentence: "I biglietti del treno costano ___ quelli dell'aereo.", answer: "meno di", explanation: "\"Meno di\" + noun/pronoun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's [the tallest] in the family.", sentence: "È ___ della famiglia.", answer: "il più alto", explanation: "Noun left out." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I like reading more [than] writing.", sentence: "Mi piace più leggere ___ scrivere.", answer: "che", explanation: "Two verbs." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The museum is [very interesting].", sentence: "Il museo è ___.", answer: "interessantissimo", altAnswers: ["molto interessante"], explanation: "\"-issimo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandmother cooks [better] than everyone.", sentence: "Mia nonna cucina ___ di tutti.", answer: "meglio", explanation: "Adverb." },
      { type: "word-order", prompt: "Put the words in order to say: Sardinia's sea is clearer than Liguria's.", words: ["Il", "mare", "della", "Sardegna", "è", "più", "limpido", "di", "quello", "ligure."], translation: "Sardinia's sea is clearer than Liguria's.", explanation: "\"Di quello\" = than that of." },
      { type: "multiple-choice", question: "\"Ho più fratelli ___ sorelle.\"", options: ["che", "di", "delle", "come"], correctIndex: 0, explanation: "Two quantities: \"che\"." },
      { type: "dictation", audio: "Firenze è meno grande di Roma, ma è bellissima.", explanation: "Comparative and absolute superlative." },
      { type: "speak", text: "Il treno è più comodo dell'autobus, ma l'aereo è il mezzo più veloce di tutti.", prompt: "Say it in Italian: The train is more comfortable than the bus, but the plane is the fastest means of transport of all.", tip: "Comparative with di, then superlative.", explanation: "\"Più ... del\", \"il più ... di\"." },
    ],
  },
  {
    slug: "a2-contrast-di-che",
    level: "IT-A2",
    number: 7,
    title: "Contrast Clinic: Di or Che?",
    summary: "Compare pairs that test di and che: Milano è più grande di Torino / a Milano ci sono più uffici che negozi.",
    duration: "15 min",
    sections: [
      {
        heading: "Two subjects or one?",
        body: [
          "\"Di\": two different people or things, one quality. \"Milano è più grande di Torino\" (Milan vs Turin, size). \"Che\": one subject and two things about it. \"A Milano ci sono più uffici che negozi\" (in Milan: offices vs shops).",
          "Quick test: if what follows \"than\" in English is a noun or pronoun that could be the subject of the same sentence (Turin is big too), use \"di\". If it's an adjective, a verb, a phrase with a preposition, or a second amount of the same thing, use \"che\".",
        ],
        examples: [
          { es: "Milano è più grande di Torino.", en: "Milan is bigger than Turin." },
          { es: "A Milano ci sono più uffici che negozi.", en: "In Milan there are more offices than shops." },
          { es: "Marta è più simpatica di Laura.", en: "Marta is nicer than Laura." },
          { es: "Marta è più simpatica che bella.", en: "Marta is nice rather than beautiful." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Milan there are more offices than shops.", answer: "A Milano ci sono più uffici che negozi.", explanation: "Two amounts in one place: \"che\"." },
          { type: "multiple-choice", question: "\"Marta è più simpatica ___ Laura.\"", options: ["di", "che", "come", "della"], correctIndex: 0, explanation: "Two people: \"di\"." },
        ],
      },
      {
        heading: "Pairs",
        body: [
          "\"Studio più di mio fratello\" (I study more than my brother: two people) vs \"Studio più la sera che la mattina\" (two times). \"Il pesce costa più della carne\" vs \"Compro più pesce che carne\".",
        ],
        examples: [
          { es: "Studio più di mio fratello.", en: "I study more than my brother." },
          { es: "Studio più la sera che la mattina.", en: "I study more in the evening than in the morning." },
          { es: "Il pesce costa più della carne.", en: "Fish costs more than meat." },
          { es: "Compro più pesce che carne.", en: "I buy more fish than meat." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fish costs more than meat.", answer: "Il pesce costa più della carne.", explanation: "Two things compared: \"di\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I buy more fish than meat.", answer: "Compro più pesce che carne.", explanation: "Two amounts: \"che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Milan is bigger than Turin.", answer: "Milano è più grande di Torino.", explanation: "Two cities: \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I study more than my brother.", answer: "Studio più di mio fratello.", explanation: "Two people: \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I study more in the evening than in the morning.", answer: "Studio più la sera che la mattina.", altAnswers: ["Studio più di sera che di mattina."], explanation: "Two times: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This bag is more practical than elegant.", answer: "Questa borsa è più pratica che elegante.", explanation: "Two adjectives: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This bag is more practical than that one.", answer: "Questa borsa è più pratica di quella.", explanation: "Two bags: \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather go by train than by car.", answer: "Preferisco andare in treno che in macchina.", altAnswers: ["Preferisco viaggiare in treno che in macchina.", "Preferisco andare in treno piuttosto che in macchina."], explanation: "Two phrases with \"in\": \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train is faster than the car.", answer: "Il treno è più veloce della macchina.", altAnswers: ["Il treno è più veloce dell'auto."], explanation: "Two vehicles: \"di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There are more women [than] men in my class.", sentence: "Nella mia classe ci sono più donne ___ uomini.", answer: "che", explanation: "Two amounts." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Women in my class are more numerous [than the] men.", sentence: "Nella mia classe le donne sono più numerose ___ uomini.", answer: "degli", explanation: "Two groups compared on one quality: \"di + gli\"." },
      { type: "multiple-choice", question: "\"È più facile leggere ___ parlare.\"", options: ["che", "di", "del", "come"], correctIndex: 0, explanation: "Two verbs." },
      { type: "multiple-choice", question: "\"Ho meno tempo ___ te.\"", options: ["di", "che", "come", "del"], correctIndex: 0, explanation: "Two people: \"di te\"." },
      { type: "dictation", audio: "Il pesce costa più della carne, ma compro più pesce che carne.", explanation: "\"Della\" then \"che\"." },
      { type: "speak", text: "Roma è più grande di Firenze, ma a Firenze ci sono più musei che parchi.", prompt: "Say it in Italian: Rome is bigger than Florence, but in Florence there are more museums than parks.", tip: "Di, then che.", explanation: "One of each." },
    ],
  },
  {
    slug: "a2-error-hunt-comparisons",
    level: "IT-A2",
    number: 8,
    title: "Error Hunt: Comparisons",
    summary: "Fix the typical slips: più grande che Roma, il più bello di Italia, più migliore, molto bellissimo, il migliore ristorante di città.",
    duration: "15 min",
    sections: [
      {
        heading: "Di, che and the article",
        body: [
          "\"Milano è più grande che Roma\" uses \"che\" for two cities: it's \"di Roma\". \"Il più bello di Italia\" needs the elision: \"d'Italia\". \"È il migliore ristorante di città\" needs the article: \"della città\" (but \"d'Italia\", \"di Roma\", with no article for countries and cities here).",
        ],
        examples: [
          { es: "Milano è più piccola di Roma.", en: "Milan is smaller than Rome." },
          { es: "È il lago più bello d'Italia.", en: "It's the most beautiful lake in Italy." },
          { es: "È il migliore ristorante della città.", en: "It's the best restaurant in the city." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"È il lago più bello di Italia.\" Write it correctly: It's the most beautiful lake in Italy.", source: "It's the most beautiful lake in Italy.", answer: "È il lago più bello d'Italia.", explanation: "\"D'Italia\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"È il migliore ristorante di città.\" Write it correctly: It's the best restaurant in the city.", source: "It's the best restaurant in the city.", answer: "È il migliore ristorante della città.", altAnswers: ["È il ristorante migliore della città.", "È il miglior ristorante della città."], explanation: "\"Della città\"." },
        ],
      },
      {
        heading: "Double comparatives",
        body: [
          "\"Più migliore\" and \"più meglio\" say more twice: \"migliore\" and \"meglio\" already mean better. \"Molto bellissimo\" says very twice: choose \"molto bello\" or \"bellissimo\".",
        ],
        examples: [
          { es: "Questo è migliore.", en: "This one is better." },
          { es: "Sto meglio.", en: "I feel better." },
          { es: "È bellissimo.", en: "It's really beautiful." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Questo caffè è più migliore.\" Write it correctly: This coffee is better.", source: "This coffee is better.", answer: "Questo caffè è migliore.", altAnswers: ["Questo caffè è più buono."], explanation: "No \"più\" before \"migliore\"." },
          { type: "fill-blank", prompt: "A learner wrote \"Il panorama è molto bellissimo.\" Write the Italian for the bold words.", en: "The view is [really beautiful].", sentence: "Il panorama è ___.", answer: "bellissimo", altAnswers: ["molto bello"], explanation: "One intensifier only." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Napoli è più grande che Bari.\" Write it correctly: Naples is bigger than Bari.", source: "Naples is bigger than Bari.", answer: "Napoli è più grande di Bari.", explanation: "Two cities: \"di\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Oggi sto più meglio.\" Write it correctly: I feel better today.", source: "I feel better today.", answer: "Oggi sto meglio.", altAnswers: ["Sto meglio oggi.", "Oggi mi sento meglio."], explanation: "\"Meglio\" alone." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mangio più frutta di verdura.\" Write it correctly: I eat more fruit than vegetables.", source: "I eat more fruit than vegetables.", answer: "Mangio più frutta che verdura.", explanation: "Two amounts: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Lei è più alta che me.\" Write it correctly: She's taller than me.", source: "She's taller than me.", answer: "Lei è più alta di me.", altAnswers: ["È più alta di me."], explanation: "Pronoun: \"di me\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Canta migliore di me.\" Write it correctly: He sings better than me.", source: "He sings better than me.", answer: "Canta meglio di me.", altAnswers: ["Lui canta meglio di me."], explanation: "With a verb: \"meglio\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Sono molto stanchissimo.\" Write it correctly: I'm very tired. (a man speaking)", source: "I'm very tired.", answer: "Sono stanchissimo.", altAnswers: ["Sono molto stanco."], explanation: "One intensifier." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"È la più bella città del mondo di tutte.\" Write it correctly: It's the most beautiful city in the world.", source: "It's the most beautiful city in the world.", answer: "È la città più bella del mondo.", altAnswers: ["È la più bella città del mondo."], explanation: "One \"di\" phrase." },
      { type: "fill-blank", prompt: "A learner wrote \"Mio fratello più vecchio.\" Write the Italian for the bold words.", en: "My [older] brother is a doctor.", sentence: "Mio fratello ___ fa il medico.", answer: "maggiore", altAnswers: ["più grande"], explanation: "Siblings: \"maggiore\" or \"più grande\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Luca è alto come di Paolo.\" Write the Italian for the bold words.", en: "Luca is as tall [as] Paolo.", sentence: "Luca è alto ___ Paolo.", answer: "come", altAnswers: ["quanto"], explanation: "No \"di\" after \"come\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's the oldest bridge in Florence.", words: ["È", "il", "ponte", "più", "antico", "di", "Firenze."], translation: "It's the oldest bridge in Florence.", explanation: "\"Di\" + city, no article." },
      { type: "dictation", audio: "È il lago più bello d'Italia.", explanation: "\"D'Italia\"." },
      { type: "speak", text: "Questo gelato è migliore di quello, ed è il più buono della città!", prompt: "Say it correctly: This ice cream is better than that one, and it's the best in the city!", tip: "Migliore without più; della città.", explanation: "Corrected forms." },
    ],
  },
  {
    slug: "a2-dialogue-lab-which-city",
    level: "IT-A2",
    number: 9,
    title: "Dialogue Lab: Which City Should We Visit?",
    summary: "Three friends compare Napoli, Bologna and Torino for a long weekend and choose one.",
    duration: "15 min",
    sections: [
      {
        heading: "Napoli o Bologna?",
        body: [
          "Elisa, Marco and Giada have three days in October. Elisa: \"Napoli è la città più vivace d'Italia, e la pizza è la migliore del mondo!\" Marco: \"Sì, ma è più caotica di Bologna. Bologna è più piccola e più tranquilla.\" Giada: \"E a Bologna si mangia benissimo: i tortellini sono buonissimi.\"",
          "Note the mix: comparatives with \"di\" (\"più caotica di Bologna\"), superlatives (\"la più vivace d'Italia\"), \"-issimo\" (\"buonissimi\") and \"migliore\".",
        ],
        examples: [
          { es: "Napoli è la città più vivace d'Italia.", en: "Naples is the liveliest city in Italy." },
          { es: "È più caotica di Bologna.", en: "It's more chaotic than Bologna." },
          { es: "Bologna è più piccola e più tranquilla.", en: "Bologna is smaller and quieter." },
          { es: "A Bologna si mangia benissimo.", en: "In Bologna the food is excellent." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Naples is the liveliest city in Italy.", answer: "Napoli è la città più vivace d'Italia.", explanation: "Relative superlative + \"d'Italia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's more chaotic [than] Bologna.", sentence: "È più caotica ___ Bologna.", answer: "di", explanation: "Two cities: \"di\"." },
        ],
      },
      {
        heading: "E Torino?",
        body: [
          "Marco: \"E Torino? È elegante quanto Parigi e ha il museo egizio più importante dopo quello del Cairo.\" Elisa: \"Però è più lontana: ci vogliono più di sei ore in treno.\" Giada: \"Allora Bologna: è la meno lontana e costa meno delle altre.\" Tutti: \"Andiamo a Bologna!\"",
        ],
        examples: [
          { es: "Torino è elegante quanto Parigi.", en: "Turin is as elegant as Paris." },
          { es: "Ci vogliono più di sei ore in treno.", en: "It takes more than six hours by train." },
          { es: "Bologna costa meno delle altre.", en: "Bologna costs less than the others." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turin is as elegant as Paris.", answer: "Torino è elegante quanto Parigi.", altAnswers: ["Torino è elegante come Parigi.", "Torino è così elegante come Parigi."], explanation: "Equality." },
          { type: "listen-choose", audio: "Allora Bologna: è la meno lontana e costa meno delle altre.", question: "Why do they choose Bologna?", options: ["It's the closest and cheapest.", "It's the biggest.", "It has the best pizza.", "It's the most elegant."], correctIndex: 0, explanation: "\"La meno lontana\", \"costa meno\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bologna is smaller and quieter.", answer: "Bologna è più piccola e più tranquilla.", altAnswers: ["Bologna è più piccola e tranquilla."], explanation: "Two comparatives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pizza is the best in the world!", answer: "La pizza è la migliore del mondo!", altAnswers: ["La pizza è la più buona del mondo!"], explanation: "\"La migliore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tortellini are delicious.", answer: "I tortellini sono buonissimi.", explanation: "\"-issimi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes more than six hours by train.", answer: "Ci vogliono più di sei ore in treno.", explanation: "\"Più di\" + number." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bologna costs less than the others.", answer: "Bologna costa meno delle altre.", explanation: "\"Delle altre\" (città)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Naples is more chaotic but more fun.", answer: "Napoli è più caotica ma più divertente.", altAnswers: ["Napoli è più caotica, ma più divertente."], explanation: "Comparatives without a second term." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which is the cheapest city?", answer: "Qual è la città meno cara?", altAnswers: ["Qual è la città più economica?"], explanation: "\"Qual è\" with no apostrophe." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Turin is [farther than] Bologna.", sentence: "Torino è ___ Bologna.", answer: "più lontana di", explanation: "\"Più lontana di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Bologna [the food is excellent].", sentence: "A Bologna ___.", answer: "si mangia benissimo", explanation: "\"Benissimo\" = very well." },
      { type: "word-order", prompt: "Put the words in order to say: Naples is more beautiful than I thought.", words: ["Napoli", "è", "più", "bella", "di", "quanto", "pensavo."], translation: "Naples is more beautiful than I thought.", explanation: "\"Di quanto\" + verb: learn it as a chunk." },
      { type: "multiple-choice", question: "Marco says \"Bologna è più tranquilla di Napoli.\" What does he mean?", options: ["Bologna is quieter than Naples.", "Naples is quieter than Bologna.", "Both are equally quiet.", "Bologna is the quietest city in Italy."], correctIndex: 0, explanation: "\"Più tranquilla di\"." },
      { type: "speak", text: "Napoli è più vivace, ma Bologna è più vicina e costa meno. Andiamo a Bologna!", prompt: "Say it in Italian: Naples is livelier, but Bologna is closer and costs less. Let's go to Bologna!", tip: "Più ..., meno.", explanation: "Comparatives to make a choice." },
    ],
  },
  {
    slug: "a2-mission-compare-two-flats",
    level: "IT-A2",
    number: 10,
    title: "Real-World Mission: Compare Two Flats",
    summary: "Compare two rental listings and choose one, giving reasons with comparatives and superlatives.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "Two listings",
        body: [
          "Flat A, via Garibaldi: \"Bilocale, 50 metri quadri, terzo piano senza ascensore, centro storico, 750 euro al mese.\" Flat B, via Roma: \"Trilocale, 75 metri quadri, primo piano, balcone, zona periferica, 20 minuti dal centro in autobus, 650 euro al mese.\"",
          "\"Bilocale\" = two rooms (plus kitchen and bathroom), \"trilocale\" = three rooms. Compare them: \"L'appartamento B è più grande dell'A\", \"L'A è più caro del B\", \"Il B è meno centrale\".",
        ],
        examples: [
          { es: "L'appartamento B è più grande dell'appartamento A.", en: "Flat B is bigger than flat A." },
          { es: "L'A è più caro del B di cento euro.", en: "A is a hundred euros more expensive than B." },
          { es: "Il B è meno centrale, ma ha il balcone.", en: "B is less central, but it has a balcony." },
          { es: "Il centro è comodissimo per il lavoro.", en: "The centre is really convenient for work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Flat B is bigger than flat A.", answer: "L'appartamento B è più grande dell'appartamento A.", altAnswers: ["L'appartamento B è più grande dell'A.", "Il B è più grande dell'A."], explanation: "\"Di + l'\" = \"dell'\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "B is [less central], but it has a balcony.", sentence: "Il B è ___, ma ha il balcone.", answer: "meno centrale", explanation: "\"Meno\" + adjective." },
        ],
      },
      {
        heading: "Your choice",
        body: [
          "Give your decision and the reasons: \"Preferisco l'appartamento B perché è più spazioso e meno caro. È vero che è più lontano dal centro, ma è meglio avere più spazio che stare in centro.\"",
        ],
        examples: [
          { es: "Preferisco il B perché è più spazioso e meno caro.", en: "I prefer B because it's more spacious and cheaper." },
          { es: "È meglio avere più spazio che stare in centro.", en: "It's better to have more space than to be in the centre." },
          { es: "Per me il centro è più importante dello spazio.", en: "For me the centre is more important than space." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I prefer B because it's more spacious and cheaper.", answer: "Preferisco il B perché è più spazioso e meno caro.", altAnswers: ["Preferisco l'appartamento B perché è più spazioso e meno caro.", "Preferisco il B perché è più spazioso e costa meno."], explanation: "Two comparatives." },
          { type: "multiple-choice", question: "\"È meglio avere più spazio ___ stare in centro.\"", options: ["che", "di", "come", "dello"], correctIndex: 0, explanation: "Two verbs: \"che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A is a hundred euros more expensive than B.", answer: "L'A è più caro del B di cento euro.", altAnswers: ["L'A costa cento euro in più del B."], explanation: "\"Di\" + the difference." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For me the centre is more important than space.", answer: "Per me il centro è più importante dello spazio.", explanation: "\"Di + lo\" = \"dello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better to have more space than to be in the centre.", answer: "È meglio avere più spazio che stare in centro.", altAnswers: ["È meglio avere più spazio che abitare in centro.", "Meglio avere più spazio che stare in centro."], explanation: "Two verbs: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Flat A is the most central but the smallest.", answer: "L'appartamento A è il più centrale ma il più piccolo.", altAnswers: ["L'A è il più centrale ma il più piccolo."], explanation: "Two superlatives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The third floor without a lift is very tiring.", answer: "Il terzo piano senza ascensore è faticosissimo.", altAnswers: ["Il terzo piano senza ascensore è molto faticoso."], explanation: "\"-issimo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The kitchen in B is as big as the one in A.", answer: "La cucina del B è grande come quella dell'A.", altAnswers: ["La cucina del B è grande quanto quella dell'A."], explanation: "\"Come quella\" = as the one." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "B is [cheaper than] A.", sentence: "Il B è ___ A.", answer: "meno caro dell'", altAnswers: ["più economico dell'"], explanation: "\"Dell'\" before a vowel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bus takes [less than] twenty minutes.", sentence: "L'autobus ci mette ___ venti minuti.", answer: "meno di", explanation: "\"Meno di\" + number." },
      { type: "word-order", prompt: "Put the words in order to say: B has more rooms than A.", words: ["Il", "B", "ha", "più", "stanze", "dell'A."], translation: "B has more rooms than A.", explanation: "Two flats: \"di\"." },
      { type: "multiple-choice", question: "Which flat fits someone who wants to spend less?", options: ["B: 650 euro", "A: 750 euro", "Both cost the same.", "Neither"], correctIndex: 0, explanation: "\"Il B costa meno\"." },
      { type: "dictation", audio: "Il B è più spazioso e meno caro, ma è più lontano.", explanation: "Three comparatives." },
      { type: "speak", text: "Scelgo l'appartamento A: è più caro, ma è in centro ed è il più comodo per il lavoro.", prompt: "Say it in Italian: I'm choosing flat A: it's more expensive, but it's in the centre and it's the most convenient for work.", tip: "Comparative, then superlative.", explanation: "A reasoned choice." },
    ],
  },
  {
    slug: "a2-sound-issimo",
    level: "IT-A2",
    number: 11,
    title: "Sounds: -Issimo",
    summary: "Hear and say the stress and double s in -issimo forms: bellIssimo, buonIssimo.",
    duration: "15 min",
    sections: [
      {
        heading: "The stress moves",
        body: [
          "In \"-issimo\" the stress always falls on the first syllable of the ending, IS: \"BEL-lo\" → \"bel-LIS-si-mo\", \"BUO-no\" → \"buo-NIS-si-mo\", \"FA-ci-le\" → \"fa-ci-LIS-si-mo\". The original stress disappears.",
          "The \"ss\" is double: hold the hiss for a moment. \"Bellissimo\" has two double consonants: \"ll\" and \"ss\".",
        ],
        examples: [
          { es: "È bellissimo!", en: "It's beautiful!" },
          { es: "È facilissimo.", en: "It's really easy." },
          { es: "Sono velocissimi.", en: "They're very fast." },
          { es: "Grazie mille, gentilissima!", en: "Thank you so much, you're very kind!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's really easy.", answer: "È facilissimo.", altAnswers: ["È molto facile.", "È facilissima."], explanation: "fa-ci-LIS-si-mo." },
          { type: "dictation", audio: "È bellissimo e buonissimo!", explanation: "Double \"ll\" and \"ss\"." },
        ],
      },
      {
        heading: "Endings and spelling",
        body: [
          "Agreement: \"-issimo, -issima, -issimi, -issime\". Spelling: \"-co\" / \"-go\" usually add \"h\": \"stanco\" → \"stanchissimo\", \"lungo\" → \"lunghissimo\" (but \"simpatico\" → \"simpaticissimo\", \"economico\" → \"economicissimo\"). \"-io\" adjectives drop the \"i\": \"vecchio\" → \"vecchissimo\".",
          "Italians also use \"-issimo\" for warmth: \"Carissima Anna\" at the start of a letter, \"Gentilissimo\" in formal emails.",
        ],
        examples: [
          { es: "Carissima Anna, come stai?", en: "Dearest Anna, how are you?" },
          { es: "È una casa vecchissima.", en: "It's a very old house." },
          { es: "Un viaggio lunghissimo!", en: "A really long journey!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a very old house.", answer: "È una casa vecchissima.", altAnswers: ["È una casa molto vecchia."], explanation: "\"Vecchio\" → \"vecchissimo\"." },
          { type: "listen-choose", audio: "Un viaggio lunghissimo!", question: "What do you hear?", options: ["lunghissimo", "lunghisimo", "lungissimo", "lunghessimo"], correctIndex: 0, explanation: "\"Lunghissimo\": h + double s." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're very fast. (the trains)", answer: "Sono velocissimi.", altAnswers: ["Sono molto veloci."], explanation: "\"-issimi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you so much, you're very kind! (to a woman, formal)", answer: "Grazie mille, gentilissima!", altAnswers: ["Grazie mille, è gentilissima!", "Grazie mille, Lei è gentilissima!"], explanation: "\"Gentilissima\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dearest Anna, how are you?", answer: "Carissima Anna, come stai?", explanation: "A warm letter opening." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A really long journey!", answer: "Un viaggio lunghissimo!", explanation: "\"-go\" → \"-ghissimo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The exam was very difficult.", answer: "L'esame era difficilissimo.", altAnswers: ["L'esame è stato difficilissimo.", "L'esame era molto difficile."], explanation: "di-ffi-ci-LIS-si-mo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shoes are very cheap.", answer: "Le scarpe sono economicissime.", altAnswers: ["Le scarpe costano pochissimo.", "Le scarpe sono molto economiche."], explanation: "\"-issime\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm very happy to see you. (to a friend, a man speaking)", answer: "Sono contentissimo di vederti.", altAnswers: ["Sono felicissimo di vederti.", "Sono molto contento di vederti."], explanation: "con-ten-TIS-si-mo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The water is [very cold].", sentence: "L'acqua è ___.", answer: "freddissima", altAnswers: ["gelida", "molto fredda"], explanation: "\"-issima\"." },
      { type: "dictation", audio: "Grazie, è stata una serata bellissima.", explanation: "\"Bellissima\": ll + ss." },
      { type: "dictation", audio: "Sono stanchissima, ma felicissima.", explanation: "\"Stanchissima\" with \"h\"." },
      { type: "speak", text: "Bellissimo, buonissimo, facilissimo, lunghissimo.", prompt: "Say these four words with the stress on -is-.", tip: "Hold the double s.", explanation: "Stress always on the IS of the ending." },
      { type: "speak", text: "La cena era buonissima e il vino ottimo: una serata bellissima!", prompt: "Say it in Italian: Dinner was delicious and the wine excellent: a wonderful evening!", tip: "buo-NIS-si-ma, bel-LIS-si-ma.", explanation: "Absolute superlatives." },
    ],
  },
];

export const IT_A2_U10_WRITING: WriteExercise = {
  type: "write",
  prompt: "An Italian friend wants to visit your country. Compare two cities or places they could visit: size, prices, food, what there is to do. Say which is the best for them and why.",
  minWords: 40,
  maxWords: 100,
  rubric: [
    "Uses più / meno ... di correctly to compare two places or things (più grande di, meno cara di)",
    "Uses che when comparing two adjectives, verbs, amounts or prepositional phrases (più musei che parchi)",
    "Uses a relative superlative and at least one -issimo form (la città più bella, buonissimo)",
    "Uses migliore / meglio or equality (come / quanto) correctly",
  ],
  modelAnswer: "Cara Giulia, se vieni in Inghilterra puoi visitare Londra o York. Londra è molto più grande di York ed è carissima, ma ci sono più musei che in qualsiasi altra città. York è più piccola e più tranquilla, e costa meno. Le mura medievali sono bellissime e la cattedrale è la più famosa del nord. A York si mangia bene quanto a Londra, e i pub sono ottimi. Secondo me York è la scelta migliore per un weekend: è meglio camminare per le stradine che passare ore in metropolitana!",
  explanation: "\"Più grande di York\", \"più piccola\", \"costa meno\" compare two cities. \"È meglio camminare ... che passare ore\" compares two verbs with \"che\". \"La più famosa del nord\" is a relative superlative; \"carissima\", \"bellissime\" are absolute superlatives. \"Bene quanto a Londra\" shows equality, and \"la scelta migliore\", \"meglio\" and \"ottimi\" are the irregular forms.",
};
