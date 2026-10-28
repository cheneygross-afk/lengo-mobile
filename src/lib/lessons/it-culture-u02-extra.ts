// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u02-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 2 Extra Practice: The Rhythm of the Day. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_CULTURE_U02_EXTRA: Lesson[] = [
  {
    slug: "culture-day-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Meals",
    summary: "Fresh sentences about Italian meals and mealtimes, from breakfast to a late dinner.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three meals, three rhythms",
        body: [
          "A quick reminder: breakfast is small and sweet, lunch can be the main meal, dinner is late. \"Fare colazione\", \"pranzare\", \"cenare\" are the verbs; \"a colazione\", \"a pranzo\", \"a cena\" mean at breakfast, lunch, dinner.",
        ],
        examples: [
          { es: "A colazione mangio pane e marmellata.", en: "At breakfast I eat bread and jam." },
          { es: "Pranziamo sempre insieme la domenica.", en: "We always have lunch together on Sundays." },
          { es: "A cena preferisco qualcosa di leggero.", en: "At dinner I prefer something light." },
          { es: "Mio padre cena davanti al telegiornale.", en: "My father has dinner in front of the TV news." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At breakfast I eat bread and jam.", answer: "A colazione mangio pane e marmellata.", altAnswers: ["A colazione mangio il pane con la marmellata.", "A colazione mangio pane con la marmellata.", "Io a colazione mangio pane e marmellata."], explanation: "\"A colazione\" = at breakfast." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At dinner I prefer [something light].", sentence: "A cena preferisco ___.", answer: "qualcosa di leggero", explanation: "\"Qualcosa di\" + adjective: something light." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We always have lunch together on Sundays.", answer: "La domenica pranziamo sempre insieme.", altAnswers: ["Pranziamo sempre insieme la domenica.", "Noi pranziamo sempre insieme la domenica."], explanation: "\"Pranzare\" = to have lunch." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time do you have dinner?", answer: "A che ora ceni?", altAnswers: ["A che ora cenate?", "A che ora cena?", "Tu a che ora ceni?"], explanation: "\"A che ora\" = at what time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't eat breakfast.", answer: "Non faccio colazione.", altAnswers: ["Io non faccio colazione."], explanation: "\"Fare colazione\": no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lunch is ready!", answer: "Il pranzo è pronto!", altAnswers: ["È pronto il pranzo!", "È pronto!"], explanation: "\"Pronto\" agrees with \"pranzo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dinner is at half past eight.", answer: "La cena è alle otto e mezza.", altAnswers: ["La cena è alle otto e mezzo.", "Si cena alle otto e mezza.", "Ceniamo alle otto e mezza."], explanation: "\"Alle otto e mezza\" = at half past eight." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For the first course there's lasagna.", answer: "Per primo ci sono le lasagne.", altAnswers: ["Come primo ci sono le lasagne.", "Di primo ci sono le lasagne.", "Per primo c'è la lasagna.", "Come primo c'è la lasagna."], explanation: "Italians usually say \"le lasagne\", plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm full!", answer: "Sono pieno!", altAnswers: ["Sono piena!", "Non ce la faccio più!"], explanation: "\"Pieno\" / \"piena\" agree with the speaker." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Can I [mop up the sauce with my bread]?", sentence: "Posso ___?", answer: "fare la scarpetta", explanation: "\"Fare la scarpetta\": fine at home, less so at a formal dinner." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I take my [lunch break] at one.", sentence: "Faccio la ___ all'una.", answer: "pausa pranzo", explanation: "\"La pausa pranzo\" = the lunch break." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My father has dinner [in front of] the TV news.", sentence: "Mio padre cena ___ telegiornale.", answer: "davanti al", explanation: "\"Davanti a\" + \"il\" = \"davanti al\"." },
      { type: "word-order", prompt: "Put the words in order to say: In the evening we eat late.", words: ["La", "sera", "mangiamo", "tardi."], translation: "In the evening we eat late.", explanation: "\"Tardi\" = late." },
      { type: "word-order", prompt: "Put the words in order to say: Could you bring us the check?", words: ["Ci", "porta", "il", "conto?"], translation: "Could you bring us the check?", explanation: "\"Ci\" = to us, before the verb." },
      { type: "multiple-choice", question: "Which order is the usual sequence of a full meal?", options: ["antipasto, primo, secondo, dolce", "primo, antipasto, dolce, secondo", "secondo, primo, antipasto, dolce", "dolce, primo, secondo, antipasto"], correctIndex: 0, explanation: "Starter, pasta or rice, meat or fish, dessert." },
      { type: "listen-choose", audio: "A cena preferisco qualcosa di leggero.", question: "What does it mean?", options: ["At dinner I prefer something light.", "At dinner I prefer meat.", "I prefer to skip dinner.", "I prefer lunch to dinner."], correctIndex: 0, explanation: "\"Leggero\" = light." },
      { type: "dictation", audio: "Pranziamo sempre insieme la domenica.", explanation: "\"Insieme\" = together." },
      { type: "speak", text: "Di solito pranzo all'una e ceno verso le nove.", prompt: "Say it in Italian: I usually have lunch at one and dinner around nine.", tip: "\"Verso\" = around, with times.", explanation: "Two meal verbs, two times." },
    ],
  },
  {
    slug: "culture-day-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Coffee",
    summary: "Fresh situations at the bar: ordering, paying and choosing the right coffee at the right time.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At the bar",
        body: [
          "Remember the essentials: \"un caffè\" is an espresso, milk drinks are for the morning, and you pay \"alla cassa\" or at the end. \"Mi fa...?\" and \"Vorrei...\" are the polite ways to order.",
        ],
        examples: [
          { es: "Vorrei un caffè lungo, per favore.", en: "I'd like a long espresso, please." },
          { es: "Mi fa un cappuccino senza schiuma?", en: "Could I have a cappuccino without foam?" },
          { es: "Il caffè lo prendo amaro, senza zucchero.", en: "I take my coffee black, without sugar." },
          { es: "Pago due caffè e un cornetto.", en: "I'm paying for two espressos and a croissant." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a long espresso, please.", answer: "Vorrei un caffè lungo, per favore.", altAnswers: ["Vorrei un caffè lungo, grazie.", "Mi fa un caffè lungo, per favore?"], explanation: "\"Lungo\" follows the noun." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I take my coffee [without sugar].", sentence: "Il caffè lo prendo ___.", answer: "senza zucchero", altAnswers: ["amaro"], explanation: "\"Amaro\" = bitter, unsweetened; double c in \"zucchero\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could I have a cappuccino without foam?", answer: "Mi fa un cappuccino senza schiuma?", altAnswers: ["Vorrei un cappuccino senza schiuma.", "Un cappuccino senza schiuma, per favore."], explanation: "\"La schiuma\" = foam." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two espressos and a macchiato.", answer: "Due caffè e un macchiato.", altAnswers: ["Due caffè e un caffè macchiato."], explanation: "\"Caffè\" is the same in the plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want sugar?", answer: "Vuoi lo zucchero?", altAnswers: ["Vuole lo zucchero?", "Vuoi zucchero?", "Vuole zucchero?"], explanation: "\"Lo zucchero\": \"lo\" before z." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have a decaf.", answer: "Prendo un deca.", altAnswers: ["Prendo un decaffeinato.", "Per me un deca.", "Per me un decaffeinato."], explanation: "\"Un deca\" in everyday speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where do I pay?", answer: "Dove pago?", altAnswers: ["Dove si paga?", "Dove devo pagare?"], explanation: "Simple and natural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "An iced coffee, please.", answer: "Un caffè shakerato, per favore.", altAnswers: ["Un caffè freddo, per favore.", "Un caffè in ghiaccio, per favore.", "Uno shakerato, per favore."], explanation: "In summer bars shake espresso with ice: \"il caffè shakerato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No cappuccino after lunch!", answer: "Niente cappuccino dopo pranzo!", altAnswers: ["Niente cappuccino dopo il pranzo!", "Mai il cappuccino dopo pranzo!", "Non si prende il cappuccino dopo pranzo!"], explanation: "\"Niente\" + noun = no..." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll have it [at the counter].", sentence: "Lo prendo ___.", answer: "al banco", explanation: "Standing at the counter is cheaper." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "An espresso [with a drop of sambuca].", sentence: "Un caffè ___ alla sambuca.", answer: "corretto", explanation: "\"Corretto\" = corrected with liqueur." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'll put on] the moka.", sentence: "___ la moka.", answer: "Metto su", explanation: "\"Mettere su\" = to put on the stove." },
      { type: "word-order", prompt: "Put the words in order to say: In Naples they leave a suspended coffee.", words: ["A", "Napoli", "lasciano", "un", "caffè", "sospeso."], translation: "In Naples they leave a suspended coffee.", explanation: "\"Sospeso\" = suspended, paid in advance for someone else." },
      { type: "word-order", prompt: "Put the words in order to say: Can I buy you a coffee?", words: ["Ti", "offro", "un", "caffè?"], translation: "Can I buy you a coffee?", explanation: "\"Ti\" = to you, before the verb." },
      { type: "multiple-choice", question: "You want hot milk with a little coffee. What do you order?", options: ["un latte macchiato", "un caffè macchiato", "un latte", "un caffè lungo"], correctIndex: 0, explanation: "\"Un latte\" alone is just milk." },
      { type: "listen-choose", audio: "Mi fa un macchiato caldo?", question: "What did you hear?", options: ["Mi fa un macchiato caldo?", "Mi fa un macchiato freddo?", "Mi fa un marocchino caldo?", "Mi fa un macchiato e un caldo?"], correctIndex: 0, explanation: "\"Caldo\" = hot (milk), \"freddo\" = cold." },
      { type: "dictation", audio: "Il caffè lo prendo senza zucchero.", explanation: "\"Zucchero\": double c." },
      { type: "speak", text: "Buongiorno! Un caffè al banco, per favore: ecco lo scontrino.", prompt: "Say it in Italian: Good morning! An espresso at the counter, please: here's the receipt.", tip: "Scon-TRI-no: stress on the second syllable.", explanation: "You hand over \"lo scontrino\" from the register as you order; \"lo\" before s + consonant." },
    ],
  },
];
