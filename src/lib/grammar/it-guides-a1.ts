// Synced from cheneygross-afk/lengo:src/lib/grammar/it-guides-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ItGrammarGuide } from "./it-types";

// Italian grammar guides, A1 (see the notes at the top of ./it-types.ts).
export const IT_A1_GUIDES: ItGrammarGuide[] = [
  {
    slug: "pronunciation-and-spelling",
    title: "How Italian Sounds: Vowels, C and G, Double Consonants and Stress",
    description:
      "Read any Italian word aloud from its spelling: the five pure vowels, c and g before e and i, ch and gh, gli, gn, sc and z, double consonants, and where the stress falls.",
    level: "A1",
    intro: [
      `Italian is spelled almost exactly as it sounds, so you can read a word aloud the first time you see it once you know a handful of rules. There are no silent letters except "h", and every vowel is pronounced, including the final one: "pane" is PAH-neh, never pain.`,
      `What English speakers get wrong is not the spelling but the habits they bring with them: gliding vowels, swallowing double consonants and putting the stress in the wrong place. This guide covers each one, with the words you meet in the first lessons.`,
    ],
    sections: [
      {
        heading: `Five pure vowels`,
        body: [
          `Italian has five vowel letters, "a", "e", "i", "o", "u", and each one is short and clean. English tends to slide at the end of a vowel (no sounds like no-oo, say like say-ee). Italian does not: "no" is one pure o, "sì" is one pure i. Keep your mouth still until the vowel is finished.`,
          `"E" and "o" each have an open and a closed version ("è" is open, as in bet; "perché" ends in a closed e). The difference varies from region to region, and Italians understand you either way, so learn to recognise it rather than worrying about it.`,
          `Unstressed vowels keep their full sound. In "banana" all three a's are the same a; in "telefono" every vowel is clear. English reduces them to a vague uh, which makes Italian words hard to understand.`,
        ],
        examples: [
          { it: "Ciao, come stai?", en: "Hi, how are you?" },
          { it: "No, grazie.", en: "No, thanks." },
          { it: "La pasta è buona.", en: "The pasta is good." },
          { it: "Il telefono è sul tavolo.", en: "The phone is on the table." },
        ],
      },
      {
        heading: `C, G, SC: hard or soft?`,
        body: [
          `Before "e" and "i", "c" sounds like the ch in church and "g" like the j in jam: "cena", "ciao", "gelato", "Giulia". Before "a", "o", "u" and consonants they are hard, as in cat and go: "casa", "gola", "grazie".`,
          `To keep the hard sound before "e" or "i", Italian adds an "h": "che" (keh), "chi" (kee), "spaghetti", "laghi". The "h" is always silent on its own: "ho", "hai", "hotel" start with a vowel sound. When the "i" in "ci", "gi" is only there to soften the consonant, it is not pronounced as a separate vowel: "ciao" is chow, "Giovanni" is jo-VAHN-nee.`,
          `Three more letter groups have one sound each: "gli" is close to the lli in million ("figlio", "famiglia"); "gn" is like the ny in canyon ("bagno", "gnocchi"); "sc" before "e" or "i" is sh ("pesce", "scienza"), but "sch" and "sc" before other letters stay sk ("scuola", "schiena"). "Z" is ts or dz: "pizza", "zero", "stazione".`,
        ],
        table: {
          headers: ["Spelling", "Sound", "Examples"],
          rows: [
            ["ca, co, cu, che, chi", "k", "casa, cosa, cuore, che, chiave"],
            ["ce, ci (cia, cio, ciu)", "ch in church", "cena, cinema, ciao, cioccolato"],
            ["ga, go, gu, ghe, ghi", "g in go", "gatto, gola, spaghetti, ghiaccio"],
            ["ge, gi (gia, gio, giu)", "j in jam", "gelato, gita, giardino, giorno"],
            ["sce, sci", "sh", "pesce, sci, sciarpa"],
            ["sca, sco, scu, sche, schi", "sk", "scarpa, scuola, scherzo, schiena"],
            ["gli", "lli in million", "figlio, famiglia, luglio"],
            ["gn", "ny in canyon", "bagno, lasagne, sogno"],
          ],
        },
        examples: [
          { it: "Buongiorno, signora!", en: "Good morning, madam!" },
          { it: "Che cos'è? È un gelato.", en: "What is it? It's an ice cream." },
          { it: "Mio figlio va a scuola.", en: "My son goes to school." },
          { it: "Il bagno è a destra.", en: "The bathroom is on the right." },
          { it: "Ho una pizza e una birra.", en: "I've got a pizza and a beer." },
        ],
      },
      {
        heading: `Double consonants and stress`,
        body: [
          `A double consonant is held longer than a single one, and it changes the meaning: "nonno" (grandfather) and "nono" (ninth), "anno" (year) and "ano" (anus), "caro" (dear) and "carro" (cart), "sete" (thirst) and "sette" (seven). For "tt", "pp", "cc" you close your mouth and pause briefly before releasing; for "ll", "nn", "mm", "ss" you simply hold the sound. The vowel before a double consonant is a little shorter.`,
          `Most Italian words are stressed on the second-to-last syllable: ra-GAZ-zo, i-ta-LIA-no, man-GIA-mo. When the last syllable is stressed, Italian writes an accent on it: "città", "caffè", "perché", "lunedì", "però". Many words are stressed further back, and nothing in the spelling tells you: "tavolo", "camera", "telefono", "abitano". Learn these with their sound.`,
        ],
        table: {
          headers: ["Single", "Double"],
          rows: [
            ["nono (ninth)", "nonno (grandfather)"],
            ["pala (shovel)", "palla (ball)"],
            ["caro (dear)", "carro (cart)"],
            ["sete (thirst)", "sette (seven)"],
            ["pena (pity)", "penna (pen)"],
          ],
        },
        examples: [
          { it: "Mio nonno ha settantotto anni.", en: "My grandfather is seventy-eight." },
          { it: "Un cappuccino e un cornetto, per favore.", en: "A cappuccino and a croissant, please." },
          { it: "Abito in una piccola città.", en: "I live in a small town." },
          { it: "Perché non vieni al caffè?", en: "Why don't you come to the café?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ho sete anni.",
        right: "Ho sette anni.",
        why: `"Sete" with one t is thirst; seven is "sette". Hold the double t.`,
      },
      {
        wrong: "Vorrei un capucino.",
        right: "Vorrei un cappuccino.",
        why: `Both the "pp" and the "cc" are double, and both are held.`,
      },
      {
        wrong: "Lui e di Roma.",
        right: "Lui è di Roma.",
        why: `"È" with an accent is the verb (is); "e" without one means and. The accent is part of the spelling.`,
      },
      {
        wrong: "Mi piacciono gli spagetti.",
        right: "Mi piacciono gli spaghetti.",
        why: `Without the "h", "ge" would sound like jeh. "Ghe" keeps the hard g.`,
      },
      {
        wrong: "Vado in citta.",
        right: "Vado in città.",
        why: `A stressed final vowel always carries a written accent: "città", "caffè", "università".`,
      },
    ],
    faqs: [
      {
        q: `How do I type the accents?`,
        a: `On a phone, hold the vowel key. On a computer, the Italian keyboard has keys for "à", "è", "ì", "ò", "ù" and the closed e of "perché"; with an American keyboard, the US International layout or your system's accent menu works. Writing "e'" for "è" is a typing workaround, not correct spelling.`,
      },
      {
        q: `Which accent goes where, è or é?`,
        a: `Almost always the grave accent: "à", "è", "ì", "ò", "ù". The acute accent appears on a closed final e, mainly in "perché", "poiché", "benché", "affinché", "né", "sé" and the numbers ending in "-tré" ("ventitré").`,
      },
      {
        q: `Should I learn a regional accent?`,
        a: `No. Aim for clear standard Italian: pure vowels, held double consonants and the right stress. Every Italian has a regional colour in their speech, and you will learn to hear the main ones later in the course.`,
      },
    ],
    related: ["essere-and-subject-pronouns", "nouns-gender-and-plural", "articles"],
    lessons: [
      "a1-how-italian-sounds",
      "a1-reading-italian-aloud",
      "a1-sound-double-consonants-1",
      "a1-sound-gli",
      "a1-sound-stress-in-numbers",
      "a1-sound-stress-in-verbs",
      "a1-contrast-cerco-cerchi",
      "a1-sound-sc",
      "a1-sound-double-consonants-2",
      "a1-sound-z",
      "a1-sound-gn",
    ],
  },
  {
    slug: "essere-and-subject-pronouns",
    title: "Essere, Tu and Lei: To Be and Who You Are Talking To",
    description:
      "The verb essere in the present (sono, sei, è, siamo, siete, sono), the subject pronouns and when to drop them, sono di + city, nationalities, and choosing between tu and Lei.",
    level: "A1",
    intro: [
      `"Essere" (to be) is the first verb you need: "Sono Marco, sono di Torino, sono ingegnere." (I'm Marco, I'm from Torino, I'm an engineer.) It is irregular, as to be is in English, so its six forms are learned by heart.`,
      `With it comes a choice English doesn't have: how to say you. Italian uses "tu" with friends and "Lei" with strangers, and "Lei" takes the same verb form as he and she. Getting this right from the start makes you sound polite rather than overfamiliar.`,
    ],
    sections: [
      {
        heading: `The forms of "essere"`,
        body: [
          `Each person has its own ending, so Italians usually leave the subject pronoun out: "Sono stanco" (I'm tired), "Siete italiani?" (are you Italian?, to several people). Use the pronoun for contrast or emphasis: "Io sono di Roma, lui è di Napoli."`,
          `Two forms are the same: "sono" means both I am and they are. Context almost always decides; if it doesn't, add "io" or "loro". "È" with an accent is the verb (is); without the accent, "e" means and.`,
        ],
        table: {
          headers: ["Pronoun", "Essere", "Example"],
          rows: [
            ["io", "sono", "Sono americana."],
            ["tu", "sei", "Sei di Milano?"],
            ["lui, lei, Lei", "è", "Lei è il signor Bianchi?"],
            ["noi", "siamo", "Siamo amici."],
            ["voi", "siete", "Siete pronti?"],
            ["loro", "sono", "Sono in ufficio."],
          ],
        },
        examples: [
          { it: "Sono Chiara. E tu?", en: "I'm Chiara. And you?" },
          { it: "Marco è il mio collega.", en: "Marco is my colleague." },
          { it: "Siamo in vacanza a Bari.", en: "We're on vacation in Bari." },
          { it: "Voi siete studenti?", en: "Are you students? (to a group)" },
          { it: "Non sono di qui.", en: "I'm not from here." },
        ],
      },
      {
        heading: `Where you are from: "sono di" and nationalities`,
        body: [
          `To say your home town, use "essere di" plus the city: "Sono di Boston", "Giulia è di Palermo". The question is "Di dove sei?" (to a friend) or "Di dov'è?" (to someone you call Lei). Use "di" here, never "da".`,
          `Nationalities are adjectives, so they agree with the person and take no capital letter: "Tom è americano", "Kate è americana", "Siamo americani". Those ending in "-e" are the same for men and women: "Lui è inglese, lei è inglese", plural "inglesi". Jobs take no article after "essere": "Sono medico" (I'm a doctor).`,
        ],
        examples: [
          { it: "Di dove sei? Sono di Chicago.", en: "Where are you from? I'm from Chicago." },
          { it: "Laura è canadese, di Toronto.", en: "Laura is Canadian, from Toronto." },
          { it: "Le mie amiche sono francesi.", en: "My friends are French." },
          { it: "Mio padre è avvocato.", en: "My father is a lawyer." },
        ],
      },
      {
        heading: `Tu, Lei and voi`,
        body: [
          `"Tu" is for friends, family, children, and people your own age in relaxed settings. "Lei" is the polite you, for strangers, shop and office staff, older people and anyone you would call by their surname. Use "Lei" until the other person offers the "tu" ("Possiamo darci del tu?").`,
          `"Lei" (polite you) is grammatically the same as "lei" (she): it takes the third-person form "è", never "sei". The course writes it with a capital L so you can see it. The same goes for the greetings that go with it: "Come sta?" (Lei) but "Come stai?" (tu); "Scusi" (Lei) but "Scusa" (tu).`,
          `"Voi" is you for more than one person, formal or not: "Ragazzi, siete pronti?", "Signori, siete in ritardo." You may hear "Voi" to one person in parts of the South; it is not taught in this course.`,
        ],
        examples: [
          { it: "Scusi, Lei è la dottoressa Ferri?", en: "Excuse me, are you Dr. Ferri?" },
          { it: "Come sta, signora?", en: "How are you, madam?" },
          { it: "Ciao Luca, come stai?", en: "Hi Luca, how are you?" },
          { it: "Ragazzi, di dove siete?", en: "Guys, where are you from?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Lei sei italiano?",
        right: "Lei è italiano?",
        why: `"Lei" (polite you) always takes the third-person form, like he and she.`,
      },
      {
        wrong: "Sono da Chicago.",
        right: "Sono di Chicago.",
        why: `Your home town takes "di": "sono di Chicago", "di dove sei?".`,
      },
      {
        wrong: "Sono Americano.",
        right: "Sono americano.",
        why: `Nationalities are written with a small letter in Italian.`,
      },
      {
        wrong: "Marco e di Torino.",
        right: "Marco è di Torino.",
        why: `The verb is "è" with an accent; "e" means and.`,
      },
      {
        wrong: "Lei è un medico.",
        right: "Lei è medico.",
        why: `No article before a job after "essere", unless you add an adjective: "è un medico bravissimo".`,
      },
    ],
    faqs: [
      {
        q: `Do I say "io" every time?`,
        a: `No. The ending already shows the person, so "io sono" sounds emphatic in most sentences. Say "Sono Paolo", not "Io sono Paolo", unless you are contrasting yourself with someone else.`,
      },
      {
        q: `Is "Lei" rude to a young shop assistant?`,
        a: `No. "Lei" is the normal way to speak to staff in shops, bars, banks and offices, whatever their age. Young people among themselves switch to "tu" quickly, and in a casual bar the staff may use "tu" with you; follow their lead.`,
      },
      {
        q: `What about "Ella" or "Voi" in old letters?`,
        a: `"Ella" is an old formal pronoun you will only meet in old texts. "Voi" for one person survives in some southern speech and old commercial letters. Modern standard Italian uses "Lei".`,
      },
    ],
    related: ["avere", "adjectives-and-agreement", "c-e-and-ci-sono", "present-tense-regular-verbs"],
    lessons: [
      "a1-essere-1",
      "a1-essere-2",
      "a1-tu-or-lei",
      "a1-where-are-you-from",
      "a1-error-hunt-first-words",
      "a1-ciao-extra-2",
      "a1-ciao-extra-3",
    ],
  },
  {
    slug: "nouns-gender-and-plural",
    title: "Masculine, Feminine, Singular, Plural: Italian Nouns",
    description:
      "How to tell the gender of a noun from its ending, the four plural patterns (-o to -i, -a to -e, -e to -i, no change), the spelling of amica / amiche, and the irregular plurals worth knowing.",
    level: "A1",
    intro: [
      `Every Italian noun is masculine or feminine, and the article, the adjectives and later the past participle all agree with it. The good news is that the ending usually tells you the gender, and the plural is made by changing the last vowel, not by adding an s.`,
    ],
    sections: [
      {
        heading: `Gender from the ending`,
        body: [
          `Nouns ending in "-o" are almost all masculine: "il libro", "il ragazzo", "il treno". Nouns ending in "-a" are almost all feminine: "la casa", "la ragazza", "la pizza". Nouns ending in "-e" can be either, so learn them with their article: "il pane", "il giornale", "il ristorante" but "la chiave", "la notte", "la lezione".`,
          `A few useful patterns: nouns in "-zione" and "-tà" are feminine ("la stazione", "la città"); nouns in "-ore" are masculine ("il fiore", "il colore"). Common exceptions: "la mano" (hand), "la radio", "la foto", "la moto" (short for longer feminine words) are feminine; "il problema", "il programma", "il sistema", "il cinema" are masculine.`,
        ],
        examples: [
          { it: "Il treno è in ritardo.", en: "The train is late." },
          { it: "La lezione è alle nove.", en: "The lesson is at nine." },
          { it: "C'è un problema con la chiave.", en: "There's a problem with the key." },
          { it: "La foto è molto bella.", en: "The photo is very nice." },
        ],
      },
      {
        heading: `Making the plural`,
        body: [
          `Italian changes the final vowel. Masculine "-o" becomes "-i" ("libro, libri"); feminine "-a" becomes "-e" ("casa, case"); "-e" becomes "-i" for both genders ("chiave, chiavi", "giornale, giornali"). Masculine nouns in "-a" make their plural in "-i": "problema, problemi".`,
          `Some nouns don't change at all: nouns with a stressed final vowel ("il caffè, i caffè", "la città, le città"), nouns ending in a consonant, usually borrowed ("il bar, i bar", "il film, i film", "lo sport, gli sport"), and shortened words ("la foto, le foto"). Only the article shows the plural.`,
        ],
        table: {
          headers: ["Singular", "Plural", "Pattern"],
          rows: [
            ["il libro", "i libri", "-o → -i"],
            ["la casa", "le case", "-a → -e"],
            ["il giornale", "i giornali", "-e → -i"],
            ["la chiave", "le chiavi", "-e → -i"],
            ["il problema", "i problemi", "masculine -a → -i"],
            ["la città", "le città", "no change"],
            ["il bar", "i bar", "no change"],
          ],
        },
        examples: [
          { it: "Ho due fratelli e tre sorelle.", en: "I have two brothers and three sisters." },
          { it: "Due caffè, per favore.", en: "Two coffees, please." },
          { it: "Le lezioni sono il lunedì.", en: "The lessons are on Mondays." },
          { it: "Ci sono molti bar in centro.", en: "There are lots of bars downtown." },
        ],
      },
      {
        heading: `Spelling changes and irregular plurals`,
        body: [
          `Feminine nouns in "-ca" and "-ga" add an "h" to keep the hard sound: "amica, amiche", "banca, banche", "riga, righe". Masculine nouns in "-co" and "-go" usually do too ("lago, laghi", "tedesco, tedeschi"), but some very common ones don't: "amico, amici", "medico, medici", "greco, greci". Learn those by ear.`,
          `A few nouns are irregular: "l'uomo, gli uomini" (man, men), "il dio, gli dei". Some body parts and a few other nouns are masculine in the singular and feminine in "-a" in the plural: "il braccio, le braccia", "il dito, le dita", "il ginocchio, le ginocchia", "l'uovo, le uova".`,
        ],
        examples: [
          { it: "Le mie amiche sono di Bologna.", en: "My friends are from Bologna." },
          { it: "I miei amici sono simpatici.", en: "My friends are nice." },
          { it: "Ci sono tre uomini e due donne.", en: "There are three men and two women." },
          { it: "Compro sei uova.", en: "I'm buying six eggs." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "i caffès",
        right: "i caffè",
        why: `Italian never adds an "-s" for the plural. Nouns with a stressed final vowel don't change.`,
      },
      {
        wrong: "le amice",
        right: "le amiche",
        why: `Feminine "-ca" becomes "-che" in the plural to keep the hard k sound.`,
      },
      {
        wrong: "la problema",
        right: "il problema",
        why: `"Problema" ends in "-a" but is masculine, like "il sistema", "il programma".`,
      },
      {
        wrong: "Stasera guardiamo due films.",
        right: "Stasera guardiamo due film.",
        why: `Borrowed words ending in a consonant don't change in the plural: "il film, i film", "lo sport, gli sport".`,
      },
      {
        wrong: "Mi fa male il mano.",
        right: "Mi fa male la mano.",
        why: `"Mano" ends in "-o" but is feminine: "la mano", plural "le mani".`,
      },
    ],
    faqs: [
      {
        q: `How do I know the gender of a word in "-e"?`,
        a: `Learn it with its article from the start: not "chiave" but "la chiave". A dictionary marks it m. or f. Endings help a little: "-zione", "-ione" are feminine, "-ore" masculine.`,
      },
      {
        q: `What about people, like "studente" or "cantante"?`,
        a: `Many words for people in "-e" or "-ista" are the same for both sexes; only the article changes: "il cantante, la cantante", "il giornalista, la giornalista". Others have a feminine form: "lo studente, la studentessa", "il professore, la professoressa".`,
      },
      {
        q: `Why "amici" but "laghi"?`,
        a: `There is no fully reliable rule for masculine "-co" and "-go". Words stressed on the second-to-last syllable tend to keep the hard sound ("tedeschi", "laghi"), words stressed further back tend to soften ("medici", "simpatici"), with exceptions like "amici". Learn the common ones as you meet them.`,
      },
    ],
    related: ["articles", "adjectives-and-agreement", "c-e-and-ci-sono"],
    lessons: [
      "a1-gender-of-nouns",
      "a1-plurals",
      "a1-contrast-singular-plural",
      "a1-transform-make-it-plural",
      "a1-things-extra-1",
      "a2-drill-body-plurals",
    ],
  },
  {
    slug: "articles",
    title: "Il, Lo, La, Un, Uno, Una: Italian Articles",
    description:
      "The definite articles il, lo, l', la, i, gli, le and the indefinite un, uno, una, un': how the first sound of the next word decides, with tables, examples and the classic mistakes.",
    level: "A1",
    pinned: true,
    intro: [
      `English has the and a. Italian has seven forms of the and four of a, and choosing between them is the first wall every learner hits. The choice depends on two things: the gender and number of the noun, and the sound the next word begins with.`,
      `It looks like a lot, but it is one system. Once you know which sounds call for "lo" and "uno", and that "l'" and "un'" appear before vowels, the rest follows. Italians also use the article much more often than English does (see the guide to article use), so you will practise these forms constantly.`,
    ],
    sections: [
      {
        heading: `The definite article: "il", "lo", "l'", "la", "i", "gli", "le"`,
        body: [
          `Masculine nouns take "il" in the singular and "i" in the plural: "il libro, i libri". Before a vowel they take "l'" and "gli": "l'amico, gli amici". Before "s" + consonant, "z", "gn", "ps", "pn", "x" and "y" they take "lo" and "gli": "lo studente, gli studenti", "lo zaino, gli zaini", "lo psicologo".`,
          `Feminine nouns take "la" and "le": "la casa, le case". Before a vowel, "la" becomes "l'" ("l'amica"), but the plural stays "le" ("le amiche"). It is the next word that counts, not the noun: "lo zio" but "il vecchio zio"; "l'amico" but "il mio amico".`,
        ],
        table: {
          headers: ["", "Singular", "Plural", "Used before"],
          rows: [
            ["masculine", "il", "i", "most consonants: il treno, i treni"],
            ["masculine", "lo", "gli", "s + consonant, z, gn, ps, x: lo sport, gli sport"],
            ["masculine", "l'", "gli", "a vowel: l'albero, gli alberi"],
            ["feminine", "la", "le", "a consonant: la porta, le porte"],
            ["feminine", "l'", "le", "a vowel: l'isola, le isole"],
          ],
        },
        examples: [
          { it: "Il treno per Firenze parte alle otto.", en: "The train for Florence leaves at eight." },
          { it: "Lo zucchero è nell'armadio.", en: "The sugar is in the cupboard." },
          { it: "Gli studenti sono in aula.", en: "The students are in the classroom." },
          { it: "L'acqua è fredda.", en: "The water is cold." },
          { it: "Le amiche di Sara sono simpatiche.", en: "Sara's friends are nice." },
        ],
      },
      {
        heading: `The indefinite article: "un", "uno", "una", "un'"`,
        body: [
          `The indefinite article follows the same sound rules in the singular. Masculine nouns take "un" ("un libro", "un amico") and "uno" before s + consonant, z, gn, ps ("uno studente", "uno zaino"). Feminine nouns take "una" ("una casa") and "un'" before a vowel ("un'amica", "un'idea").`,
          `The apostrophe is the classic trap: "un'" only appears before a feminine word. "Un amico" (a male friend) has no apostrophe; "un'amica" (a female friend) has one. In speech they sound the same, so the spelling is how a reader knows who you mean.`,
          `There is no plural of a. Italian uses "dei", "degli", "delle" (some) or nothing: "Ho degli amici a Roma", "Ho amici a Roma". The partitive is covered with the articulated prepositions.`,
        ],
        table: {
          headers: ["", "Article", "Used before", "Examples"],
          rows: [
            ["masculine", "un", "most sounds, and vowels", "un caffè, un albergo"],
            ["masculine", "uno", "s + consonant, z, gn, ps", "uno spritz, uno zio"],
            ["feminine", "una", "consonants", "una birra, una zia"],
            ["feminine", "un'", "vowels", "un'aranciata, un'ora"],
          ],
        },
        examples: [
          { it: "Vorrei un caffè e un'acqua frizzante.", en: "I'd like a coffee and a sparkling water." },
          { it: "Mio fratello è uno studente di medicina.", en: "My brother is a medical student." },
          { it: "C'è uno sciopero dei treni.", en: "There's a train strike." },
          { it: "Ho un'idea!", en: "I've got an idea!" },
        ],
      },
      {
        heading: `Hearing the rule: why "lo" and "gli"`,
        body: [
          `The forms exist to keep Italian easy to pronounce. "Il studente" would put three consonants together (l-s-t), so Italian uses "lo studente". "La amica" would put two a's together, so they merge into "l'amica". Say the pairs aloud and you will start to hear which one sounds right.`,
          `The same pattern returns later in words that copy the article: "quello" (that) and "bello" (beautiful) change exactly like it: "quel libro, quello zaino, quell'amico", "un bel ragazzo, un bello spettacolo". So does "nessuno" (no, none): "nessun problema, nessuno studente".`,
        ],
        examples: [
          { it: "Quel ragazzo è lo zio di Marta.", en: "That boy is Marta's uncle." },
          { it: "Gli zii arrivano domani.", en: "My aunt and uncle arrive tomorrow." },
          { it: "Che bel giardino!", en: "What a beautiful garden!" },
          { it: "Non c'è nessun problema.", en: "There's no problem at all." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "il studente",
        right: "lo studente",
        why: `Before s + consonant the masculine article is "lo" (plural "gli studenti").`,
      },
      {
        wrong: "i amici",
        right: "gli amici",
        why: `Masculine plurals before a vowel take "gli".`,
      },
      {
        wrong: "un'amico",
        right: "un amico",
        why: `"Un'" with an apostrophe is only for feminine words: "un'amica", but "un amico".`,
      },
      {
        wrong: "la amica",
        right: "l'amica",
        why: `"La" before a vowel elides to "l'". The plural stays "le amiche".`,
      },
      {
        wrong: "un zaino",
        right: "uno zaino",
        why: `Before "z" the masculine indefinite article is "uno", like "lo zaino".`,
      },
      {
        wrong: "gli case",
        right: "le case",
        why: `"Gli" is masculine only. Every feminine plural takes "le".`,
      },
    ],
    faqs: [
      {
        q: `Is it "il gnocco" or "lo gnocco"?`,
        a: `Standard Italian says "lo gnocco, gli gnocchi", because "gn" takes "lo". In speech you will hear "i gnocchi" too, but write "gli gnocchi".`,
      },
      {
        q: `What about words starting with "h", like "hotel"?`,
        a: `The "h" is silent, so the word starts with a vowel sound: "l'hotel", "un hotel", plural "gli hotel". With "w" from English the article follows the sound: "il weekend", "il whisky", "il web".`,
      },
      {
        q: `Does "le" ever elide to "l'"?`,
        a: `Not in modern Italian. You may see "l'amiche" in old books, but write "le amiche", "le isole".`,
      },
    ],
    related: ["nouns-gender-and-plural", "article-uses", "articulated-prepositions", "adjectives-and-agreement"],
    lessons: [
      "a1-indefinite-article",
      "a1-drill-indefinite-article",
      "a1-definite-article-1",
      "a1-definite-article-2",
      "a1-drill-definite-article",
      "a1-contrast-il-lo-la",
      "a1-error-hunt-articles",
      "a1-things-extra-2",
      "a1-article-extra-1",
      "a1-article-extra-2",
    ],
  },
  {
    slug: "adjectives-and-agreement",
    title: "Adjectives That Agree: Rosso, Rossa, Rossi, Rosse",
    description:
      "How Italian adjectives agree with the noun, the two adjective patterns, where adjectives go, invariable colours like blu and rosa, and questo and quello.",
    level: "A1",
    intro: [
      `In Italian an adjective changes its ending to match the noun it describes: masculine or feminine, singular or plural. "Un libro rosso, una macchina rossa, due libri rossi, due macchine rosse." It sounds like a lot of endings, but it is the same vowel game as nouns.`,
    ],
    sections: [
      {
        heading: `Two kinds of adjective`,
        body: [
          `Adjectives in "-o" have four forms: "-o", "-a", "-i", "-e" ("piccolo, piccola, piccoli, piccole"). Adjectives in "-e" have only two: "-e" for the singular, "-i" for the plural, whatever the gender ("grande, grandi", "inglese, inglesi").`,
          `The adjective agrees with the noun, not with its own ending, so the endings don't always rhyme: "una lezione interessante", "un problema serio", "le chiavi nuove". When an adjective describes a group of mixed gender, it is masculine plural: "Marco e Giulia sono stanchi."`,
        ],
        table: {
          headers: ["", "Singular", "Plural"],
          rows: [
            ["masculine", "un vestito nero", "due vestiti neri"],
            ["feminine", "una borsa nera", "due borse nere"],
            ["masculine", "un film divertente", "due film divertenti"],
            ["feminine", "una storia divertente", "due storie divertenti"],
          ],
        },
        examples: [
          { it: "La casa è piccola ma luminosa.", en: "The house is small but bright." },
          { it: "I ragazzi sono stanchi.", en: "The boys are tired." },
          { it: "Ho una domanda importante.", en: "I've got an important question." },
          { it: "Le mie colleghe sono gentili.", en: "My colleagues are kind." },
        ],
      },
      {
        heading: `Where adjectives go`,
        body: [
          `Most adjectives come after the noun: "una macchina rossa", "un ragazzo simpatico", "il vino bianco". Colours, nationalities and shapes always do. A few short, common adjectives usually come before: "bello", "brutto", "buono", "cattivo", "grande", "piccolo", "nuovo", "vecchio", "giovane", "lungo", "breve": "una bella giornata", "un piccolo problema".`,
          `"Molto" in front of an adjective means very and doesn't change: "molto bello", "molto belle". The intensifying ending "-issimo" works too: "bellissimo", "buonissima".`,
          `Some colours never change: "blu", "rosa", "viola", and borrowed words like "beige": "una giacca blu, due giacche blu", "le scarpe rosa".`,
        ],
        examples: [
          { it: "Abito in una casa vecchia in centro.", en: "I live in an old house downtown." },
          { it: "È una bella giornata.", en: "It's a beautiful day." },
          { it: "Il film è molto lungo.", en: "The movie is very long." },
          { it: "Ho due magliette blu.", en: "I have two blue T-shirts." },
        ],
      },
      {
        heading: `This and that: "questo" and "quello"`,
        body: [
          `"Questo" (this) is a regular four-form adjective: "questo libro, questa borsa, questi libri, queste borse". Before a vowel the singular may elide: "quest'anno", "quest'estate".`,
          `"Quello" (that) changes like the definite article: "quel libro" (il), "quello zaino" (lo), "quell'amico" (l'), "quella casa", "quei libri" (i), "quegli zaini" (gli), "quelle case". On its own, as a pronoun, it is regular: "Quale vuoi? Quello." "Bello" before a noun follows the same pattern: "un bel posto", "dei begli occhi", "una bella città".`,
        ],
        table: {
          headers: ["Article", "Quello", "Bello"],
          rows: [
            ["il", "quel treno", "bel treno"],
            ["lo", "quello studio", "bello studio"],
            ["l'", "quell'albero", "bell'albero"],
            ["la", "quella piazza", "bella piazza"],
            ["i", "quei treni", "bei treni"],
            ["gli", "quegli alberi", "begli alberi"],
            ["le", "quelle piazze", "belle piazze"],
          ],
        },
        examples: [
          { it: "Questa pizza è buonissima.", en: "This pizza is delicious." },
          { it: "Chi è quel signore?", en: "Who's that man?" },
          { it: "Quegli occhiali sono tuoi?", en: "Are those glasses yours?" },
          { it: "Che bel vestito!", en: "What a nice dress!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "una macchina rosso",
        right: "una macchina rossa",
        why: `The adjective agrees with the noun: "macchina" is feminine.`,
      },
      {
        wrong: "le ragazze inglesie",
        right: "le ragazze inglesi",
        why: `Adjectives in "-e" have only two forms: "-e" and "-i".`,
      },
      {
        wrong: "due giacche blue",
        right: "due giacche blu",
        why: `"Blu", "rosa" and "viola" never change.`,
      },
      {
        wrong: "quello libro",
        right: "quel libro",
        why: `Before a noun "quello" behaves like the article: "il libro", so "quel libro".`,
      },
      {
        wrong: "Marco e Anna sono stanche.",
        right: "Marco e Anna sono stanchi.",
        why: `A mixed group takes the masculine plural.`,
      },
    ],
    faqs: [
      {
        q: `Does the position of an adjective change its meaning?`,
        a: `Sometimes. "Un grande uomo" is a great man, "un uomo grande" is a big man; "un vecchio amico" is an old friend (for years), "un amico vecchio" is an elderly friend. For now, put adjectives after the noun unless they are on the short list.`,
      },
      {
        q: `Why "simpatici" but "stanchi"?`,
        a: `It is the same spelling question as with nouns: "-co" adjectives stressed on the second-to-last syllable keep the hard sound ("stanco, stanchi", "bianco, bianchi"); those stressed earlier usually soften ("simpatico, simpatici", "pratico, pratici"). Feminine plurals always keep it: "stanche", "simpatiche".`,
      },
      {
        q: `Does "buono" change like "bello"?`,
        a: `In the singular it follows the indefinite article: "un buon caffè", "un buono stipendio", "una buona idea", "una buon'amica". In the plural it is regular: "buoni amici", "buone notizie".`,
      },
    ],
    related: ["nouns-gender-and-plural", "articles", "comparatives-and-superlatives"],
    lessons: [
      "a1-adjectives-agreement",
      "a1-contrast-singular-plural",
      "a1-this-and-that",
      "a2-quello-forms",
      "a2-bello-forms",
      "a2-drill-quello-bello",
    ],
  },
  {
    slug: "c-e-and-ci-sono",
    title: "C'è and Ci Sono: There Is, There Are",
    description:
      "How to say there is and there are with c'è and ci sono, the negative, questions, and the difference between c'è and è, and between c'è and dov'è.",
    level: "A1",
    intro: [
      `To say that something exists or is present somewhere, Italian uses "c'è" (there is) with a singular noun and "ci sono" (there are) with a plural one. "C'è un bar qui vicino. Ci sono due farmacie in via Roma."`,
    ],
    sections: [
      {
        heading: `Forms and use`,
        body: [
          `"C'è" is "ci" + "è", with the "i" dropped before the vowel. "Ci sono" is never shortened. The verb agrees with what follows: one thing, "c'è"; several things, "ci sono".`,
          `For the negative, put "non" in front: "Non c'è latte", "Non ci sono problemi". The question is the same sentence with a rising tone: "C'è un bancomat qui?" In the past, "c'era" and "c'erano", or "c'è stato" for an event: "C'era molta gente", "C'è stato un incidente".`,
        ],
        examples: [
          { it: "C'è un supermercato in questa via?", en: "Is there a supermarket on this street?" },
          { it: "Ci sono tre camere e un bagno.", en: "There are three bedrooms and a bathroom." },
          { it: "Oggi non c'è lezione.", en: "There's no class today." },
          { it: "Non ci sono più biglietti.", en: "There are no tickets left." },
          { it: "C'è Marco? No, non c'è.", en: "Is Marco there? No, he isn't." },
        ],
      },
      {
        heading: `"C'è" or "è"? "C'è" or "dov'è"?`,
        body: [
          `"È" alone means it is or he/she is: "È un bar" (it's a bar). "C'è un bar" means there is a bar. Don't drop the "ci".`,
          `Use "c'è" to ask whether something exists, usually with "un" or "una". Use "dov'è" (where is) when you already know it exists and want the place, usually with "il" or "la": "C'è una farmacia qui vicino?" but "Dov'è la farmacia?"`,
          `"C'è" also means is in, is here, for people: "C'è la signora Neri?" (is Mrs. Neri in?). On the phone or at a door, this is the natural question.`,
        ],
        examples: [
          { it: "Scusi, c'è una banca qui vicino?", en: "Excuse me, is there a bank near here?" },
          { it: "Dov'è la stazione?", en: "Where is the station?" },
          { it: "È un ristorante molto buono.", en: "It's a very good restaurant." },
          { it: "Pronto, c'è Giulia?", en: "Hello, is Giulia there?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "È un problema con la camera?",
        right: "C'è un problema con la camera?",
        why: `"È un problema" means it's a problem; to ask if there is one, use "c'è".`,
      },
      {
        wrong: "C'è due bar in piazza.",
        right: "Ci sono due bar in piazza.",
        why: `With a plural noun use "ci sono".`,
      },
      {
        wrong: "Ce sono molti turisti.",
        right: "Ci sono molti turisti.",
        why: `The form is "ci sono"; "ce" appears only before other pronouns ("ce n'è").`,
      },
      {
        wrong: "C'è la stazione?",
        right: "Dov'è la stazione?",
        why: `To find something you know exists, ask "dov'è". "C'è una stazione qui?" asks whether there is one.`,
      },
    ],
    faqs: [
      {
        q: `How do I say there is some milk?`,
        a: `"C'è del latte" or simply "C'è latte?" In a question, the bare noun is the most natural: "C'è pane?", "Ci sono uova?".`,
      },
      {
        q: `What is "ce n'è" or "ce ne sono"?`,
        a: `That is "ci" + "ne" (of it, of them): "Quanti bar ci sono? Ce ne sono tre." You will meet it with the pronoun "ne" at the Elementary level.`,
      },
      {
        q: `Does "c'è" agree with the first noun in a list?`,
        a: `In everyday speech, yes: "C'è un tavolo e due sedie" is very common. In careful writing, a list counts as plural: "Ci sono un tavolo e due sedie."`,
      },
    ],
    related: ["essere-and-subject-pronouns", "nouns-gender-and-plural", "ci", "ne"],
    lessons: ["a1-c-e-ci-sono", "a1-dialogue-lab-whats-in-the-room", "a1-things-extra-3"],
  },
  {
    slug: "present-tense-regular-verbs",
    title: "Parlo, Prendo, Dormo, Capisco: The Present Tense",
    description:
      "The three regular verb groups (-are, -ere, -ire), the -isc- verbs like capire and finire, spelling changes in cercare and mangiare, and the many meanings of the Italian present.",
    level: "A1",
    intro: [
      `Italian verbs are grouped by their infinitive ending: "-are" ("parlare", to speak), "-ere" ("prendere", to take) and "-ire" ("dormire", to sleep). To make the present, take off the ending and add one for each person. Learn one verb from each group and you can conjugate thousands.`,
      `The Italian present covers more ground than the English one: "lavoro" means I work, I'm working and, with a time word, I'll work ("Domani lavoro"). It also translates I have been doing with "da": "Studio italiano da un anno."`,
    ],
    sections: [
      {
        heading: `The three groups`,
        body: [
          `The endings for "io", "tu" and "noi" are the same in all three groups: "-o", "-i", "-iamo". The others change with the vowel of the infinitive: "parla, parlate, parlano"; "prende, prendete, prendono"; "dorme, dormite, dormono".`,
          `Stress is the trap in the "loro" form: it falls on the same syllable as in the "io" form, not on the ending. "PAR-lano", "PREN-dono", "DOR-mono", "A-bitano". Saying "parLAno" is a common foreign accent.`,
        ],
        table: {
          headers: ["", "parlare", "prendere", "dormire"],
          rows: [
            ["io", "parlo", "prendo", "dormo"],
            ["tu", "parli", "prendi", "dormi"],
            ["lui, lei, Lei", "parla", "prende", "dorme"],
            ["noi", "parliamo", "prendiamo", "dormiamo"],
            ["voi", "parlate", "prendete", "dormite"],
            ["loro", "parlano", "prendono", "dormono"],
          ],
        },
        examples: [
          { it: "Lavoro in banca, e tu?", en: "I work in a bank, and you?" },
          { it: "Prendiamo un caffè?", en: "Shall we get a coffee?" },
          { it: "Il treno parte alle sei.", en: "The train leaves at six." },
          { it: "I miei genitori abitano a Bari.", en: "My parents live in Bari." },
          { it: "Domani dormo fino alle dieci.", en: "Tomorrow I'm sleeping until ten." },
        ],
      },
      {
        heading: `Verbs with "-isc-"`,
        body: [
          `Many "-ire" verbs add "-isc-" between the stem and the ending in four persons: "io", "tu", "lui/lei" and "loro". "Noi" and "voi" are regular. The common ones are "capire" (to understand), "finire" (to finish), "preferire" (to prefer), "pulire" (to clean), "spedire" (to send) and "costruire" (to build).`,
          `The "sc" is soft (sh) before "i" and "e" ("capisci", "capisce") and hard (sk) before "o" ("capisco", "capiscono"). The dictionary tells you whether an "-ire" verb takes "-isc-"; "dormire", "partire", "sentire", "aprire" and "offrire" don't.`,
        ],
        table: {
          headers: ["", "capire", "finire"],
          rows: [
            ["io", "capisco", "finisco"],
            ["tu", "capisci", "finisci"],
            ["lui, lei, Lei", "capisce", "finisce"],
            ["noi", "capiamo", "finiamo"],
            ["voi", "capite", "finite"],
            ["loro", "capiscono", "finiscono"],
          ],
        },
        examples: [
          { it: "Scusi, non capisco.", en: "Sorry, I don't understand." },
          { it: "A che ora finisci di lavorare?", en: "What time do you finish work?" },
          { it: "Preferisco il tè.", en: "I prefer tea." },
          { it: "Capite l'italiano?", en: "Do you understand Italian? (to several people)" },
        ],
      },
      {
        heading: `Spelling: "cerchi", "paghi", "mangi", "studi"`,
        body: [
          `Verbs in "-care" and "-gare" add an "h" before "i" to keep the hard sound: "cercare: cerco, cerchi, cerchiamo"; "pagare: pago, paghi, paghiamo".`,
          `Verbs in "-ciare", "-giare" and most verbs in "-iare" don't double the "i": "mangiare: mangi, mangiamo" (never "mangii"); "cominciare: cominci"; "studiare: studi, studiamo". The "i" of the stem was only there to soften the "c" or "g", or it merges with the ending.`,
        ],
        examples: [
          { it: "Cosa cerchi?", en: "What are you looking for?" },
          { it: "Paghi tu o pago io?", en: "Are you paying or am I?" },
          { it: "Mangiamo a casa stasera.", en: "We're eating at home tonight." },
          { it: "Studi o lavori?", en: "Do you study or work?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Tu cerci un albergo?",
        right: "Tu cerchi un albergo?",
        why: `"-care" verbs add an "h" before "i" to keep the k sound.`,
      },
      {
        wrong: "Tu mangii troppo.",
        right: "Tu mangi troppo.",
        why: `"Mangiare" loses the stem "i" before the ending "-i": "mangi".`,
      },
      {
        wrong: "Io capo l'italiano.",
        right: "Io capisco l'italiano.",
        why: `"Capire" is an "-isc-" verb: "capisco, capisci, capisce".`,
      },
      {
        wrong: "Noi capisciamo.",
        right: "Noi capiamo.",
        why: `"Noi" and "voi" never take "-isc-": "capiamo", "capite".`,
      },
      {
        wrong: "Sto lavorando qui da due anni.",
        right: "Lavoro qui da due anni.",
        why: `I've been working here for two years is the simple present with "da" in Italian.`,
      },
    ],
    faqs: [
      {
        q: `How do I say I am eating?`,
        a: `Usually just "mangio". "Sto mangiando" exists and stresses that you are in the middle of it right now; the guide to time expressions covers it. "Cosa fai?" "Mangio." is perfectly natural.`,
      },
      {
        q: `How do I know if a verb is regular?`,
        a: `Most "-are" verbs are regular; the main exceptions are "andare", "dare", "fare", "stare". Among "-ere" and "-ire" verbs there are more irregulars ("essere", "avere", "volere", "potere", "dovere", "venire", "uscire", "dire"), covered in their own guides.`,
      },
      {
        q: `Where does the stress fall in "abitano"?`,
        a: `On the same syllable as in "abito": A-bi-ta-no. The same with "telefonano" (te-LE-fo-na-no) and "ordinano" (OR-di-na-no). The ending "-ano" is never stressed.`,
      },
    ],
    related: ["questions-and-negation", "irregular-present-verbs", "avere", "reflexive-verbs"],
    lessons: [
      "a1-are-verbs-1",
      "a1-are-verbs-2",
      "a1-drill-are-verbs",
      "a1-pronouns-when-to-use",
      "a1-contrast-cerco-cerchi",
      "a1-transform-change-the-person",
      "a1-are-extra-1",
      "a1-ere-verbs",
      "a1-ire-verbs",
      "a1-isc-verbs",
      "a1-drill-ere-ire",
      "a1-error-hunt-present",
      "a1-ere-ire-extra-1",
      "a1-ere-ire-extra-2",
    ],
  },
  {
    slug: "avere",
    title: "Avere: To Have, and Ho Fame, Ho Freddo, Ho 30 Anni",
    description:
      "The verb avere in the present (ho, hai, ha, abbiamo, avete, hanno), the silent h, and the avere expressions where English uses to be: hunger, thirst, age, cold, fear and being right.",
    level: "A1",
    intro: [
      `"Avere" means to have, and it is one of the two verbs you will use most, together with "essere". Later it also builds the past tense ("ho mangiato"), so learn its forms well now.`,
      `Italian uses "avere" in many expressions where English uses to be: "Ho fame" (I'm hungry, literally I have hunger), "Ho trent'anni" (I'm thirty). These are the places learners slip.`,
    ],
    sections: [
      {
        heading: `The forms of "avere"`,
        body: [
          `Four forms are written with a silent "h": "ho", "hai", "ha", "hanno". The "h" is there only to tell them apart from other words: "ho" (I have) and "o" (or), "ha" (has) and "a" (to, at), "hanno" (they have) and "anno" (year). Never pronounce it.`,
        ],
        table: {
          headers: ["Pronoun", "Avere", "Example"],
          rows: [
            ["io", "ho", "Ho una sorella."],
            ["tu", "hai", "Hai tempo?"],
            ["lui, lei, Lei", "ha", "Ha un documento, signora?"],
            ["noi", "abbiamo", "Abbiamo una prenotazione."],
            ["voi", "avete", "Avete figli?"],
            ["loro", "hanno", "Hanno una casa al mare."],
          ],
        },
        examples: [
          { it: "Ho una domanda.", en: "I have a question." },
          { it: "Hai una penna?", en: "Have you got a pen?" },
          { it: "Mia sorella ha due gatti.", en: "My sister has two cats." },
          { it: "Avete una camera per stasera?", en: "Do you have a room for tonight?" },
        ],
      },
      {
        heading: `"Avere" where English says to be`,
        body: [
          `Physical sensations and age take "avere" plus a noun: "ho fame" (hungry), "ho sete" (thirsty), "ho sonno" (sleepy), "ho caldo" (hot), "ho freddo" (cold), "ho trent'anni" (I'm thirty). Since these are nouns, very is "molta" or "molto": "Ho molta fame", "Ho molto freddo".`,
          `Others describe a state of mind: "ho paura" (I'm afraid), "ho ragione" (I'm right), "ho torto" (I'm wrong), "ho fretta" (I'm in a hurry), "ho bisogno di" (I need), "ho voglia di" (I feel like). "Hai ragione!" is one of the most useful phrases in any conversation.`,
        ],
        table: {
          headers: ["Italian", "English"],
          rows: [
            ["avere fame / sete", "to be hungry / thirsty"],
            ["avere caldo / freddo", "to be hot / cold (a person)"],
            ["avere sonno", "to be sleepy"],
            ["avere ... anni", "to be ... years old"],
            ["avere paura (di)", "to be afraid (of)"],
            ["avere ragione / torto", "to be right / wrong"],
            ["avere fretta", "to be in a hurry"],
            ["avere bisogno di", "to need"],
            ["avere voglia di", "to feel like"],
          ],
        },
        examples: [
          { it: "Quanti anni hai? Ho ventisei anni.", en: "How old are you? I'm twenty-six." },
          { it: "Ho molta sete, c'è dell'acqua?", en: "I'm really thirsty, is there any water?" },
          { it: "Hai ragione, è tardi.", en: "You're right, it's late." },
          { it: "Mio figlio ha paura dei cani.", en: "My son is afraid of dogs." },
          { it: "Ho bisogno di un taxi.", en: "I need a taxi." },
          { it: "Non ho voglia di uscire.", en: "I don't feel like going out." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Sono trenta anni.",
        right: "Ho trent'anni.",
        why: `Age takes "avere": "ho trent'anni". "Trenta" usually elides before "anni".`,
      },
      {
        wrong: "Sono fame.",
        right: "Ho fame.",
        why: `Hunger, thirst, sleepiness, heat and cold take "avere" with a noun.`,
      },
      {
        wrong: "Ho molto fame.",
        right: "Ho molta fame.",
        why: `"Fame" is a feminine noun, so "molto" agrees: "molta fame", "molta sete", but "molto freddo", "molto sonno".`,
      },
      {
        wrong: "Io o una macchina.",
        right: "Io ho una macchina.",
        why: `"Ho" (I have) is spelled with an "h"; "o" means or.`,
      },
      {
        wrong: "Sono freddo.",
        right: "Ho freddo.",
        why: `A person who feels cold "ha freddo". "Fa freddo" is the weather; "è freddo" is used for objects ("il caffè è freddo").`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between "ho caldo", "fa caldo" and "è caldo"?`,
        a: `"Ho caldo": I feel hot. "Fa caldo": it's hot (the weather). "È caldo": it is hot to the touch, said of a thing ("il forno è caldo").`,
      },
      {
        q: `Do Italians say "ce l'ho"?`,
        a: `Yes, constantly, for have it, have got it: "Hai la chiave? Sì, ce l'ho." It combines "ci" and "lo" with "ho", and has its own lesson at the Elementary level.`,
      },
      {
        q: `"Essere" or "avere": how do I choose?`,
        a: `"Essere" says what or how someone is with an adjective ("sono stanco"); "avere" says what someone has, including the nouns of hunger, age and fear ("ho fame", "ho paura"). If the word after the verb is a noun, it is usually "avere".`,
      },
    ],
    related: ["essere-and-subject-pronouns", "present-tense-regular-verbs", "passato-prossimo", "ci"],
    lessons: [
      "a1-how-old-are-you",
      "a1-avere",
      "a1-avere-idioms",
      "a1-contrast-essere-avere",
      "a1-ere-ire-extra-3",
      "a1-numbers-extra-3",
    ],
  },
  {
    slug: "questions-and-negation",
    title: "Non and Question Words: Saying No and Asking Questions",
    description:
      "How to make a sentence negative with non, double negatives with mai and niente, yes-no questions by intonation, and the question words chi, che cosa, dove, quando, come, perché, quanto and quale.",
    level: "A1",
    intro: [
      `Two of the easiest things in Italian: to make a sentence negative, put "non" before the verb; to ask a yes-no question, keep the sentence the same and raise your voice at the end. There is no do or does to add.`,
    ],
    sections: [
      {
        heading: `"Non" before the verb`,
        body: [
          `"Non" goes directly before the verb, with nothing in between except object pronouns: "Non parlo tedesco", "Non lo so". "No" alone is the answer word: "Sei stanco? No, non sono stanco."`,
          `Italian uses double negatives, and they are correct: "Non vedo niente" (I don't see anything, literally I don't see nothing), "Non vado mai al cinema" (I never go to the movies), "Non c'è nessuno" (there's nobody). When the negative word comes first, drop "non": "Nessuno parla", "Niente è impossibile".`,
        ],
        examples: [
          { it: "Non abito a Roma.", en: "I don't live in Rome." },
          { it: "Non mangio mai la carne.", en: "I never eat meat." },
          { it: "Non capisco niente!", en: "I don't understand anything!" },
          { it: "Oggi non c'è nessuno in ufficio.", en: "There's nobody in the office today." },
          { it: "Non ancora.", en: "Not yet." },
        ],
      },
      {
        heading: `Yes-no questions`,
        body: [
          `A statement and a question have the same words; only the melody changes. "Sei italiano." (you're Italian) falls at the end; "Sei italiano?" rises. In writing the question mark does the job.`,
          `The subject, when there is one, can stay before the verb or move to the end: "Marco viene stasera?" or "Viene stasera, Marco?" Both are natural. Tag questions use "vero?" or "no?": "Sei di Napoli, vero?"`,
        ],
        examples: [
          { it: "Parli inglese?", en: "Do you speak English?" },
          { it: "Il museo è aperto oggi?", en: "Is the museum open today?" },
          { it: "Hai fame? Sì, un po'.", en: "Are you hungry? Yes, a bit." },
          { it: "Vieni anche tu, no?", en: "You're coming too, aren't you?" },
        ],
      },
      {
        heading: `Question words`,
        body: [
          `Question words come first, and the subject usually goes after the verb: "Dove abita Luca?", "Quando arriva il treno?". "Che cosa", "cosa" and "che" all mean what; "cosa" is the most common in speech. "Come" drops its "e" before "è": "Com'è?" (what is it like?). "Dove" does the same: "Dov'è?".`,
          `"Quanto" agrees with the noun: "quanto tempo", "quanta pasta", "quanti anni", "quante persone". "Quale" (which, what) becomes "qual" before "è", with no apostrophe: "Qual è il tuo numero?" The plural is "quali".`,
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["chi", "who", "Chi è?"],
            ["(che) cosa", "what", "Cosa fai stasera?"],
            ["dove", "where", "Dove vai?"],
            ["quando", "when", "Quando parti?"],
            ["come", "how", "Come ti chiami?"],
            ["perché", "why", "Perché ridi?"],
            ["quanto, -a, -i, -e", "how much, how many", "Quanto costa? Quante sono?"],
            ["quale, quali", "which, what", "Qual è il tuo indirizzo?"],
            ["di dove", "where ... from", "Di dove sei?"],
            ["a che ora", "at what time", "A che ora apre?"],
          ],
        },
        examples: [
          { it: "Dove abita tua sorella?", en: "Where does your sister live?" },
          { it: "Perché non vieni? Perché ho da fare.", en: "Why aren't you coming? Because I'm busy." },
          { it: "Quanti fratelli hai?", en: "How many brothers and sisters do you have?" },
          { it: "Com'è la tua nuova casa?", en: "What's your new house like?" },
          { it: "Con chi parli?", en: "Who are you talking to?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Io parlo non inglese.",
        right: "Io non parlo inglese.",
        why: `"Non" goes before the verb.`,
      },
      {
        wrong: "Vedo niente.",
        right: "Non vedo niente.",
        why: `When "niente", "nessuno" or "mai" follow the verb, "non" goes before it.`,
      },
      {
        wrong: "Qual'è il tuo nome?",
        right: "Qual è il tuo nome?",
        why: `"Qual è" has no apostrophe: "qual" is a complete word, not a shortened one.`,
      },
      {
        wrong: "Perchè?",
        right: "Perché?",
        why: `"Perché" takes an acute accent (é), with a closed e.`,
      },
      {
        wrong: "Chi tu parli con?",
        right: "Con chi parli?",
        why: `A preposition always goes before the question word: "con chi", "di dove", "a che ora".`,
      },
    ],
    faqs: [
      {
        q: `"Che", "cosa" or "che cosa"?`,
        a: `All three mean what and are correct. "Cosa" is the most common in speech, "che cosa" is a little fuller, and "che" alone is common in the north and in set phrases ("Che fai?", "Che ore sono?").`,
      },
      {
        q: `How do I say why and because?`,
        a: `Both are "perché". "Perché studi l'italiano?" "Perché amo l'Italia."`,
      },
      {
        q: `Is "no" before a noun possible, as in no problem?`,
        a: `Use "nessun" or "nessuna", which change like "un": "nessun problema", "nessuna idea". "No problem" itself is "Nessun problema" or "Non c'è problema".`,
      },
    ],
    related: ["present-tense-regular-verbs", "essere-and-subject-pronouns"],
    lessons: ["a1-negation-non", "a1-question-words", "a1-sound-intonation", "a1-are-extra-2", "a1-are-extra-3", "a1-routine-extra-3"],
  },
  {
    slug: "irregular-present-verbs",
    title: "Andare, Venire, Fare, Stare: Everyday Irregular Verbs",
    description:
      "The present of the irregular verbs you use every day: andare, venire, fare, stare, dare, dire, uscire, bere, rimanere, with andare vs venire and the expressions with fare and stare.",
    level: "A1",
    intro: [
      `The verbs Italians use most are irregular, as in English. The good news is that their irregularities follow a few patterns, and the "noi" and "voi" forms are almost always regular ("andiamo, andate", "facciamo, fate").`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `"Andare" changes its stem to "vad-" in four persons; "venire" adds a "g" in "io" and "loro" and an "ie" in "tu" and "lui/lei". "Fare", "dare" and "stare" are short and similar to each other ("faccio, fai, fa", "do, dai, dà", "sto, stai, sta"). "Dire" uses the old stem "dic-", and "uscire" changes its "u" to "e" in four forms.`,
          `Keep the accent on "dà" (gives), which tells it apart from the preposition "da". "Fa" and "sta" have no accent.`,
        ],
        table: {
          headers: ["", "andare", "venire", "fare", "stare", "dire", "uscire"],
          rows: [
            ["io", "vado", "vengo", "faccio", "sto", "dico", "esco"],
            ["tu", "vai", "vieni", "fai", "stai", "dici", "esci"],
            ["lui, lei", "va", "viene", "fa", "sta", "dice", "esce"],
            ["noi", "andiamo", "veniamo", "facciamo", "stiamo", "diciamo", "usciamo"],
            ["voi", "andate", "venite", "fate", "state", "dite", "uscite"],
            ["loro", "vanno", "vengono", "fanno", "stanno", "dicono", "escono"],
          ],
        },
        examples: [
          { it: "Stasera esco con i colleghi.", en: "I'm going out with my colleagues tonight." },
          { it: "Cosa fai nel fine settimana?", en: "What are you doing at the weekend?" },
          { it: "Come stai? Sto bene, grazie.", en: "How are you? I'm fine, thanks." },
          { it: "Gli studenti vanno in biblioteca.", en: "The students are going to the library." },
          { it: "Cosa dice il professore?", en: "What is the teacher saying?" },
        ],
      },
      {
        heading: `"Andare" or "venire"?`,
        body: [
          `"Andare" is to go, away from where you are. "Venire" is to come, toward the speaker or the listener, or to join someone: "Vieni al cinema con noi?" (are you coming to the cinema with us?). English uses I'm coming for moving toward the listener; Italian does the same: "Arrivo!" or "Vengo!", never "vado" when someone calls you.`,
          `"Andare" takes "a" with cities and infinitives ("vado a Roma", "vado a dormire") and "in" with countries, regions and many places ("vado in Italia", "vado in banca"). "Andare a piedi" is to walk, "andare in macchina, in treno, in bici" to go by car, train, bike.`,
        ],
        examples: [
          { it: "Vado a fare la spesa.", en: "I'm going to do the shopping." },
          { it: "Vieni alla festa sabato?", en: "Are you coming to the party on Saturday?" },
          { it: "Andiamo in treno o in macchina?", en: "Shall we go by train or by car?" },
          { it: "Da dove vieni?", en: "Where are you coming from?" },
        ],
      },
      {
        heading: `Expressions with "fare" and "stare"`,
        body: [
          `"Fare" (to do, to make) appears in dozens of everyday expressions: "fare colazione" (have breakfast), "fare la doccia" (take a shower), "fare la spesa" (do the grocery shopping), "fare una passeggiata" (take a walk), "fare una foto", and the weather: "fa caldo", "fa freddo", "fa bel tempo".`,
          `"Stare" means to stay, and also to be in a few fixed uses: health ("Come stai?"), "stare zitto" (be quiet), "stare attento" (be careful). Later it builds "sto mangiando" (I'm eating). "Dare" (to give) also has fixed phrases: "dare una mano" (lend a hand), "dare un esame" (take an exam).`,
        ],
        examples: [
          { it: "Facciamo colazione al bar.", en: "We have breakfast at the café." },
          { it: "Oggi fa molto caldo.", en: "It's very hot today." },
          { it: "Stai attento, la strada è bagnata!", en: "Be careful, the road is wet!" },
          { it: "Mi dai una mano?", en: "Can you give me a hand?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Io ando al lavoro.",
        right: "Io vado al lavoro.",
        why: `"Andare" uses the stem "vad-" in "vado, vai, va, vanno".`,
      },
      {
        wrong: "Loro veniono domani.",
        right: "Loro vengono domani.",
        why: `"Venire" adds a "g" in the "io" and "loro" forms: "vengo", "vengono".`,
      },
      {
        wrong: "Io fo la doccia.",
        right: "Io faccio la doccia.",
        why: `The "io" form of "fare" is "faccio".`,
      },
      {
        wrong: "Mi da il sale?",
        right: "Mi dà il sale?",
        why: `"Dà" (gives) takes an accent to tell it apart from the preposition "da".`,
      },
      {
        wrong: "Vado! Arrivo subito.",
        right: "Vengo! Arrivo subito.",
        why: `Moving toward the person who calls you is "venire" (or simply "arrivo").`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between "uscire" and "partire"?`,
        a: `"Uscire" is to go out, leave a building or go out socially ("esco di casa alle otto", "esci stasera?"). "Partire" is to leave on a journey ("parto per Napoli domani").`,
      },
      {
        q: `Is "bere" irregular?`,
        a: `Yes, it uses the old stem "bev-" but is otherwise regular: "bevo, bevi, beve, beviamo, bevete, bevono". "Rimanere" (to stay) adds a "g": "rimango, rimani, rimane, rimaniamo, rimanete, rimangono".`,
      },
      {
        q: `How do I say I'm going to do something?`,
        a: `Use the present, often with a time word: "Domani compro i biglietti" (I'm going to buy the tickets tomorrow). "Vado a" + infinitive means going somewhere in order to do it: "vado a comprare il pane" (I'm off to buy bread).`,
      },
    ],
    related: ["modal-verbs", "present-tense-regular-verbs", "simple-prepositions"],
    lessons: [
      "a1-andare-venire",
      "a1-fare",
      "a1-stare-dare-dire",
      "a1-uscire-and-the-weekend",
      "a1-drill-irregular-verbs",
      "a1-contrast-andare-venire",
      "a1-transform-plans",
      "a1-irregular-extra-1",
      "a1-irregular-extra-2",
    ],
  },
  {
    slug: "modal-verbs",
    title: "Volere, Potere, Dovere, Sapere: Want, Can, Must, Know How",
    description:
      "The modal verbs volere, potere and dovere with an infinitive, vorrei for polite requests, and the difference between potere and sapere and between sapere and conoscere.",
    level: "A1",
    intro: [
      `"Volere" (to want), "potere" (can, may) and "dovere" (must, have to) are followed directly by an infinitive, with no "to" in between: "Voglio partire", "Posso entrare?", "Devo lavorare". "Sapere" (to know) works the same way when it means to know how.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `All four are irregular, but the patterns are close: "voglio, vogliono"; "posso, possono"; "devo, devono"; "so, sanno". The "noi" form always ends in "-iamo" ("vogliamo", "possiamo", "dobbiamo", "sappiamo").`,
          `Object and reflexive pronouns can go before the modal or be attached to the infinitive: "Lo devo fare" or "Devo farlo"; "Mi voglio riposare" or "Voglio riposarmi". Both are correct and equally common.`,
        ],
        table: {
          headers: ["", "volere", "potere", "dovere", "sapere"],
          rows: [
            ["io", "voglio", "posso", "devo", "so"],
            ["tu", "vuoi", "puoi", "devi", "sai"],
            ["lui, lei, Lei", "vuole", "può", "deve", "sa"],
            ["noi", "vogliamo", "possiamo", "dobbiamo", "sappiamo"],
            ["voi", "volete", "potete", "dovete", "sapete"],
            ["loro", "vogliono", "possono", "devono", "sanno"],
          ],
        },
        examples: [
          { it: "Vuoi venire con noi?", en: "Do you want to come with us?" },
          { it: "Posso pagare con la carta?", en: "Can I pay by card?" },
          { it: "Domani devo alzarmi presto.", en: "Tomorrow I have to get up early." },
          { it: "Sai nuotare?", en: "Can you swim?" },
          { it: "Dobbiamo cambiare treno a Bologna.", en: "We have to change trains in Bologna." },
        ],
      },
      {
        heading: `"Voglio" or "vorrei"?`,
        body: [
          `"Voglio" (I want) is direct. Between friends it's fine ("Voglio una pizza!"), but to ask for something in a shop, a bar or an office it sounds blunt, like a child's I want. Use "vorrei" (I would like), the conditional of "volere": "Vorrei un biglietto per Roma." You can also simply say what you're having: "Prendo un cappuccino."`,
          `"Potere" in a question is the polite way to ask a favour: "Può ripetere, per favore?" (could you repeat that?). The conditional "potrebbe" is even more polite.`,
        ],
        examples: [
          { it: "Vorrei un etto di prosciutto, per favore.", en: "I'd like a hundred grams of ham, please." },
          { it: "Può parlare più piano?", en: "Could you speak more slowly?" },
          { it: "Voglio cambiare lavoro.", en: "I want to change jobs." },
          { it: "Per me un caffè, grazie.", en: "A coffee for me, thanks." },
        ],
      },
      {
        heading: `Can: "potere" or "sapere"? To know: "sapere" or "conoscere"?`,
        body: [
          `"Potere" is can in the sense of being able or allowed: "Non posso venire, ho un esame." "Sapere" + infinitive is can in the sense of knowing how, a learned skill: "So cucinare", "Non so guidare". English uses can for both.`,
          `To know a fact is "sapere" ("So dove abita", "Non lo so"); to know a person or a place is "conoscere" ("Conosci Marco?", "Conosco bene Napoli"). "Conoscere" is a regular "-ere" verb.`,
        ],
        examples: [
          { it: "Sai suonare la chitarra?", en: "Can you play the guitar?" },
          { it: "Oggi non posso suonare, mi fa male la mano.", en: "I can't play today, my hand hurts." },
          { it: "Sai a che ora apre la farmacia?", en: "Do you know what time the pharmacy opens?" },
          { it: "Conosci un buon ristorante qui vicino?", en: "Do you know a good restaurant near here?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Voglio a partire.",
        right: "Voglio partire.",
        why: `Modal verbs are followed directly by the infinitive, with no preposition.`,
      },
      {
        wrong: "Posso nuotare molto bene.",
        right: "So nuotare molto bene.",
        why: `A skill you have learned is "sapere" + infinitive.`,
      },
      {
        wrong: "Conosco dove abita.",
        right: "So dove abita.",
        why: `Facts and information are "sapere"; people and places are "conoscere".`,
      },
      {
        wrong: "Lui puo venire.",
        right: "Lui può venire.",
        why: `"Può" has a written accent.`,
      },
      {
        wrong: "Noi dovemo partire.",
        right: "Noi dobbiamo partire.",
        why: `The "noi" form of "dovere" is "dobbiamo".`,
      },
    ],
    faqs: [
      {
        q: `How do I say I don't know?`,
        a: `"Non lo so", with the "lo" (it). "Non so" alone is also heard, but "non lo so" is the standard answer.`,
      },
      {
        q: `How do I say must not?`,
        a: `"Non devi" means you mustn't: "Non devi fumare qui." Don't have to is "non è necessario" or "non c'è bisogno di": "Non c'è bisogno di prenotare."`,
      },
      {
        q: `Can "volere" mean it takes?`,
        a: `Yes, with "ci": "Ci vuole un'ora" (it takes an hour). That use has its own lesson with the pronoun "ci" at the Elementary level.`,
      },
    ],
    related: ["irregular-present-verbs", "conditional", "pronoun-position", "essere-or-avere"],
    lessons: [
      "a1-contrast-vorrei-voglio",
      "a1-modal-verbs",
      "a1-sapere",
      "a1-drill-irregular-verbs",
      "a1-dialogue-lab-invitation",
      "a1-irregular-extra-3",
    ],
  },
  {
    slug: "simple-prepositions",
    title: "Di, A, Da, In, Con, Su, Per, Tra: Simple Prepositions",
    description:
      "The main uses of the Italian prepositions di, a, da, in, con, su, per and tra / fra, and the choice between a and in with cities, countries and places.",
    level: "A1",
    intro: [
      `Italian has nine simple prepositions: "di", "a", "da", "in", "con", "su", "per", "tra" and "fra". They don't map one-to-one onto English, so the best way to learn them is in fixed patterns: "a Roma", "in Italia", "di Torino", "da Marco".`,
      `When they meet a definite article, five of them merge with it ("a + il = al", "in + la = nella"). Those articulated prepositions have their own guide; here are the basic meanings.`,
    ],
    sections: [
      {
        heading: `What each preposition does`,
        body: [
          `"Di" is of, from (home town), and the possessive: "una tazza di tè", "sono di Firenze", "la macchina di Paolo". "A" is to, at with cities and times: "vado a Milano", "alle otto". "Da" is from (a starting point), at someone's place, and since: "il treno da Roma", "vado da Lucia", "studio qui da maggio". "In" is in, into, and transport: "in Italia", "in centro", "in treno".`,
          `"Con" is with, "su" is on and about, "per" is for and through, "tra" and "fra" (interchangeable) are between, among and in (time from now): "tra due giorni" (in two days).`,
        ],
        table: {
          headers: ["Preposition", "Main uses", "Examples"],
          rows: [
            ["di", "of, from (origin), possession", "un bicchiere di vino, sono di Bari, il libro di Anna"],
            ["a", "to, at (cities, times), + infinitive", "vado a Torino, a mezzanotte, vado a dormire"],
            ["da", "from, at someone's place, since", "parto da Napoli, vado dal medico, da lunedì"],
            ["in", "in, into, to (countries, rooms), by", "in Spagna, in cucina, in aereo"],
            ["con", "with", "con gli amici, caffè con latte"],
            ["su", "on, about", "su Internet, un libro su Roma"],
            ["per", "for, through, in order to", "per te, per tre giorni, passo per Pisa"],
            ["tra, fra", "between, among, in (time)", "tra Roma e Napoli, fra un'ora"],
          ],
        },
        examples: [
          { it: "Sono di Verona, ma abito a Padova.", en: "I'm from Verona, but I live in Padua." },
          { it: "Stasera ceniamo da Giulia.", en: "We're having dinner at Giulia's tonight." },
          { it: "Il treno da Milano arriva tra dieci minuti.", en: "The train from Milan arrives in ten minutes." },
          { it: "Vado in ufficio in bici.", en: "I go to the office by bike." },
          { it: "Questo regalo è per te.", en: "This present is for you." },
        ],
      },
      {
        heading: `"A" or "in" with places?`,
        body: [
          `Cities and small islands take "a", for both being there and going there: "Abito a Roma", "Vado a Venezia", "a Capri". Countries, regions, big islands and continents take "in": "in Italia", "in Toscana", "in Sicilia", "in Europa".`,
          `Many everyday places take "in" with no article: "in banca", "in farmacia", "in ufficio", "in centro", "in montagna", "in vacanza". Others take "a": "a casa", "a scuola", "a teatro", "a letto", "al mare", "al cinema". People take "da": "dal dentista", "da mia madre". These are set phrases, worth learning as chunks.`,
        ],
        table: {
          headers: ["a", "in", "da"],
          rows: [
            ["a Roma, a Parigi", "in Italia, in Francia", "da Marco"],
            ["a casa", "in banca", "dal medico"],
            ["a scuola", "in ufficio", "dal parrucchiere"],
            ["a teatro", "in centro", "da mia nonna"],
            ["al mare, al cinema", "in montagna, in vacanza", "dagli amici"],
          ],
        },
        examples: [
          { it: "Quest'estate vado in Sardegna.", en: "This summer I'm going to Sardinia." },
          { it: "Mia sorella vive a Londra.", en: "My sister lives in London." },
          { it: "Sei a casa? No, sono in centro.", en: "Are you at home? No, I'm downtown." },
          { it: "Domani vado dal dentista.", en: "Tomorrow I'm going to the dentist's." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Abito in Roma.",
        right: "Abito a Roma.",
        why: `Cities take "a", for both living and going.`,
      },
      {
        wrong: "Vado a Italia.",
        right: "Vado in Italia.",
        why: `Countries take "in".`,
      },
      {
        wrong: "Vado al dottore.",
        right: "Vado dal dottore.",
        why: `Going to a person, or to their office or home, takes "da".`,
      },
      {
        wrong: "Parto in due giorni.",
        right: "Parto tra due giorni.",
        why: `In two days (from now) is "tra" or "fra". "In due giorni" means taking two days to do it.`,
      },
      {
        wrong: "Il libro da Anna è qui.",
        right: "Il libro di Anna è qui.",
        why: `Possession is "di", never "da".`,
      },
    ],
    faqs: [
      {
        q: `Is there a difference between "tra" and "fra"?`,
        a: `No. Choose by sound: Italians avoid "tra" before words starting with "tr" ("fra tre giorni") and "fra" before "fr" ("tra fratelli").`,
      },
      {
        q: `Why "in centro" but "nel centro storico"?`,
        a: `Set phrases like "in centro", "in cucina", "in banca" have no article. Once you add a description, the article returns and merges: "nel centro storico", "nella cucina di mia madre", "nella banca vicino a casa".`,
      },
      {
        q: `What about the United States?`,
        a: `Plural country names take the article: "negli Stati Uniti" (in + gli). Countries with an adjective do too: "nell'Italia del Nord".`,
      },
    ],
    related: ["articulated-prepositions", "articles", "irregular-present-verbs", "time-expressions"],
    lessons: [
      "a1-where-are-you-from",
      "a1-prepositions-a-in",
      "a1-prepositions-di-da-con-per",
      "a1-wheres-the-station",
      "a1-drill-prepositions",
      "a1-contrast-a-in",
      "a1-error-hunt-places",
      "a1-places-extra-1",
    ],
  },
  {
    slug: "piacere",
    title: "Mi Piace, Mi Piacciono: How to Say You Like Something",
    description:
      "How piacere works (the thing you like is the subject), piace vs piacciono, mi, ti, gli, le, Le, ci, vi, anche a me and neanche a me, and verbs that work the same way.",
    level: "A1",
    intro: [
      `Italian has no verb that works like to like. Instead it says that something is pleasing to someone: "Mi piace il caffè" is literally the coffee is pleasing to me. The thing you like is the subject, and the person who likes it is an indirect object ("mi", "ti", "gli", "le").`,
      `Once you see it this way, the two forms make sense: "piace" when one thing pleases, "piacciono" when several things do.`,
    ],
    sections: [
      {
        heading: `"Piace" or "piacciono"?`,
        body: [
          `The verb agrees with the thing liked, not with the person. One thing or an infinitive takes "piace": "Mi piace la pizza", "Mi piace viaggiare". Several things take "piacciono": "Mi piacciono i film italiani". The person doesn't change the verb: "Ci piace il mare" (we like the sea), "Gli piacciono i gatti" (he likes cats).`,
          `The article stays with general nouns: "Mi piace il vino", "Ti piacciono gli animali?". English says I like wine, with no article; Italian needs it.`,
        ],
        table: {
          headers: ["Who likes", "One thing / an action", "Several things"],
          rows: [
            ["I", "mi piace", "mi piacciono"],
            ["you (tu)", "ti piace", "ti piacciono"],
            ["he", "gli piace", "gli piacciono"],
            ["she", "le piace", "le piacciono"],
            ["you (Lei)", "Le piace", "Le piacciono"],
            ["we", "ci piace", "ci piacciono"],
            ["you (voi)", "vi piace", "vi piacciono"],
            ["they", "gli piace", "gli piacciono"],
          ],
        },
        examples: [
          { it: "Mi piace molto questa città.", en: "I really like this city." },
          { it: "Ti piacciono le lasagne?", en: "Do you like lasagne?" },
          { it: "Le piace l'Italia, signora?", en: "Do you like Italy, madam?" },
          { it: "Ai bambini piace giocare in piazza.", en: "Children like playing in the square." },
          { it: "Non mi piacciono i film dell'orrore.", en: "I don't like horror movies." },
        ],
      },
      {
        heading: `With names, and "a me", "a te"`,
        body: [
          `With a name or a noun, use "a": "A Marco piace il calcio" (Marco likes football), "Alla mia ragazza piacciono i fiori". For emphasis or contrast, use the stressed pronouns "a me", "a te", "a lui", "a lei", "a noi", "a voi", "a loro": "A me piace il mare, a lui piace la montagna."`,
          `To agree or disagree, Italians answer with the stressed form: "Anche a me" (me too), "A me no" (not me), "Neanche a me" (me neither), "A me sì" (I do). "Anch'io" is wrong here, because the person is not the subject.`,
        ],
        examples: [
          { it: "A Giulia piace cucinare.", en: "Giulia likes cooking." },
          { it: "Mi piace il jazz. Anche a me!", en: "I like jazz. Me too!" },
          { it: "Non mi piace il caffè americano. Neanche a me.", en: "I don't like American coffee. Me neither." },
          { it: "A te piace ballare? A me no.", en: "Do you like dancing? I don't." },
        ],
      },
      {
        heading: `Other verbs that work like "piacere"`,
        body: [
          `A few common verbs follow the same pattern, with the thing as the subject: "mancare" (to be missed: "Mi manchi" means I miss you), "servire" (to be needed: "Mi serve una penna"), "interessare" ("Ti interessa l'arte?"), "sembrare" ("Mi sembra giusto"), "bastare" (to be enough: "Mi bastano dieci minuti").`,
          `"Mi manchi" is the famous trap: the person missed is the subject. "Mi manca Roma" is I miss Rome; "Manchi a tua madre" is your mother misses you.`,
        ],
        examples: [
          { it: "Mi serve un'altra sedia.", en: "I need another chair." },
          { it: "Ci mancano i nostri amici.", en: "We miss our friends." },
          { it: "Ti interessa la storia?", en: "Are you interested in history?" },
          { it: "Mi bastano cinque minuti.", en: "Five minutes is enough for me." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Io piaccio la pizza.",
        right: "Mi piace la pizza.",
        why: `The pizza is the subject; you are the indirect object "mi". "Io piaccio" means I am liked.`,
      },
      {
        wrong: "Mi piace i gatti.",
        right: "Mi piacciono i gatti.",
        why: `Several things take "piacciono".`,
      },
      {
        wrong: "Mi piace caffè.",
        right: "Mi piace il caffè.",
        why: `General nouns take the article in Italian.`,
      },
      {
        wrong: "Marco piace il calcio.",
        right: "A Marco piace il calcio.",
        why: `The person who likes needs "a" before a name.`,
      },
      {
        wrong: "Mi piace il vino. Anch'io!",
        right: "Mi piace il vino. Anche a me!",
        why: `The liker is "a me", so me too is "anche a me".`,
      },
    ],
    faqs: [
      {
        q: `How do I say I like you?`,
        a: `"Mi piaci" (you are pleasing to me). It usually means you are attracted to someone. For friends, family and partners, "Ti voglio bene" (I care about you, I love you) is the usual phrase.`,
      },
      {
        q: `How do I say I like it?`,
        a: `"Mi piace" alone; there is no word for it. "Ti piace questo vestito? Sì, mi piace molto."`,
      },
      {
        q: `And in the past?`,
        a: `"Piacere" takes "essere" in the past, and the participle agrees with the thing: "Mi è piaciuto il film", "Mi è piaciuta la cena", "Mi sono piaciuti i musei".`,
      },
    ],
    related: ["indirect-object-pronouns", "pronouns", "passato-prossimo"],
    lessons: [
      "a1-mi-piace",
      "a1-ti-gli-le-piace",
      "a1-agreeing-disagreeing",
      "a1-drill-piace-piacciono",
      "a1-contrast-piace-piacciono",
      "a1-error-hunt-likes",
      "a1-likes-extra-1",
      "a1-likes-extra-2",
      "a2-piacere-in-the-past",
      "a2-verbs-like-piacere",
    ],
  },
  {
    slug: "reflexive-verbs",
    title: "Mi Alzo, Mi Lavo, Ci Vediamo: Reflexive Verbs",
    description:
      "Reflexive verbs like alzarsi, chiamarsi and vestirsi in the present, where the pronoun goes, reflexives with modal verbs, reciprocal ci vediamo, and the past with essere.",
    level: "A1",
    intro: [
      `A reflexive verb is one where the subject does something to itself: "Mi lavo" (I wash myself, I wash). Italian uses reflexive verbs for most of the daily routine, including many where English has no myself: "mi alzo" (I get up), "mi sveglio" (I wake up), "mi chiamo" (my name is).`,
      `In the dictionary the infinitive ends in "-si": "alzarsi", "vestirsi", "divertirsi". Drop the "-si", conjugate the verb as usual, and put the matching pronoun in front.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `Each person has its own pronoun: "mi", "ti", "si", "ci", "vi", "si". It goes before the conjugated verb: "Mi sveglio alle sette", "A che ora ti alzi?". In the negative, "non" goes before the pronoun: "Non mi ricordo".`,
          `The verb itself is regular or irregular as usual: "alzarsi" is a regular "-are" verb, "vestirsi" a regular "-ire" verb.`,
        ],
        table: {
          headers: ["", "alzarsi", "vestirsi"],
          rows: [
            ["io", "mi alzo", "mi vesto"],
            ["tu", "ti alzi", "ti vesti"],
            ["lui, lei, Lei", "si alza", "si veste"],
            ["noi", "ci alziamo", "ci vestiamo"],
            ["voi", "vi alzate", "vi vestite"],
            ["loro", "si alzano", "si vestono"],
          ],
        },
        examples: [
          { it: "Di solito mi sveglio alle sette.", en: "I usually wake up at seven." },
          { it: "Come si chiama tuo fratello?", en: "What's your brother's name?" },
          { it: "La domenica ci alziamo tardi.", en: "On Sundays we get up late." },
          { it: "Ti diverti a Bologna?", en: "Are you having fun in Bologna?" },
          { it: "I bambini si lavano i denti.", en: "The children brush their teeth." },
        ],
      },
      {
        heading: `Body parts, modals and "each other"`,
        body: [
          `With parts of the body and clothes, Italian uses the reflexive and the article instead of a possessive: "Mi lavo le mani" (I wash my hands), "Si mette la giacca" (he puts on his jacket).`,
          `With "volere", "potere", "dovere" and other verbs + infinitive, the pronoun can go before the first verb or be attached to the infinitive, which loses its final "e": "Mi devo alzare presto" or "Devo alzarmi presto". The pronoun always matches the subject: "Dobbiamo prepararci".`,
          `In the plural, the same forms can mean each other: "Ci vediamo domani" (see you tomorrow, literally we see each other), "Si conoscono da anni" (they've known each other for years), "Vi sentite spesso?".`,
        ],
        examples: [
          { it: "Mi lavo le mani prima di mangiare.", en: "I wash my hands before eating." },
          { it: "Domani devo svegliarmi alle cinque.", en: "Tomorrow I have to wake up at five." },
          { it: "Non ti puoi sedere qui.", en: "You can't sit here." },
          { it: "Ci vediamo stasera!", en: "See you tonight!" },
        ],
      },
      {
        heading: `Reflexives in the past`,
        body: [
          `All reflexive verbs take "essere" in the passato prossimo, and the participle agrees with the subject: "Mi sono alzato" (a man), "Mi sono alzata" (a woman), "Ci siamo divertiti". The guide to "essere" and "avere" covers this in detail.`,
        ],
        examples: [
          { it: "Stamattina mi sono svegliata tardi.", en: "I woke up late this morning. (a woman speaking)" },
          { it: "Vi siete divertiti alla festa?", en: "Did you have fun at the party?" },
          { it: "Ci siamo conosciuti a Napoli.", en: "We met in Naples." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Io alzo alle sette.",
        right: "Mi alzo alle sette.",
        why: `"Alzare" alone means to lift something; getting up is "alzarsi".`,
      },
      {
        wrong: "Mi lavo i miei capelli.",
        right: "Mi lavo i capelli.",
        why: `With body parts, the reflexive already shows whose they are; use the article, not a possessive.`,
      },
      {
        wrong: "Devo alzarsi presto.",
        right: "Devo alzarmi presto.",
        why: `The pronoun on the infinitive matches the subject: "devo alzarmi", "devi alzarti".`,
      },
      {
        wrong: "Mi ho alzato tardi.",
        right: "Mi sono alzato tardi.",
        why: `Reflexive verbs take "essere" in the past.`,
      },
      {
        wrong: "Non ci vediamo domani? Ci vedremo domani!",
        right: "Ci vediamo domani!",
        why: `See you tomorrow is the simple present in Italian.`,
      },
    ],
    faqs: [
      {
        q: `Is "mi chiamo" reflexive?`,
        a: `Yes: "chiamarsi" means to be called, literally to call oneself. "Mi chiamo Anna, e tu come ti chiami?"`,
      },
      {
        q: `What's the difference between "sveglio" and "mi sveglio"?`,
        a: `"Sveglio" is I wake someone else up ("Sveglio i bambini alle sette"); "mi sveglio" is I wake up. Many verbs pair up like this: "lavo la macchina / mi lavo", "chiamo Marco / mi chiamo Marco".`,
      },
      {
        q: `Which verbs are reflexive in Italian but not in English?`,
        a: `The common ones: "alzarsi" (get up), "svegliarsi" (wake up), "sedersi" (sit down), "riposarsi" (rest), "divertirsi" (have fun), "sentirsi" (feel), "ricordarsi" (remember), "dimenticarsi" (forget), "sposarsi" (get married), "trasferirsi" (move house).`,
      },
    ],
    related: ["present-tense-regular-verbs", "essere-or-avere", "pronoun-position", "impersonal-si"],
    lessons: [
      "a1-my-name-is",
      "a1-reflexive-verbs-1",
      "a1-reflexive-verbs-2",
      "a1-drill-reflexive",
      "a1-transform-routine",
      "a1-routine-extra-1",
      "a2-reflexives-in-the-past",
      "a2-drill-reflexives-past",
      "b1-reciprocal-verbs",
    ],
  },
  {
    slug: "possessives",
    title: "Il Mio, La Tua, I Suoi: Possessives",
    description:
      "Italian possessive adjectives and pronouns (mio, tuo, suo, nostro, vostro, loro), why they take the article, the family exception (mia madre but la mia mamma), and suo for his, her and your.",
    level: "A1",
    intro: [
      `Italian possessives agree with the thing owned, not with the owner, and they usually come with the article: "il mio libro" (my book), "la mia casa" (my house). The exception is singular family members: "mia madre", "tuo fratello".`,
    ],
    sections: [
      {
        heading: `The forms, with the article`,
        body: [
          `Each possessive has four forms, like an "-o" adjective, except "loro", which never changes. The article goes in front: "il mio amico", "la mia amica", "i miei amici", "le mie amiche". Note the irregular masculine plurals: "miei", "tuoi", "suoi".`,
          `The possessive agrees with the noun it describes: "Marco e la sua macchina" (Marco and his car) has "sua" because "macchina" is feminine, even though Marco is a man.`,
        ],
        table: {
          headers: ["Owner", "masc. sing.", "fem. sing.", "masc. pl.", "fem. pl."],
          rows: [
            ["io", "il mio", "la mia", "i miei", "le mie"],
            ["tu", "il tuo", "la tua", "i tuoi", "le tue"],
            ["lui, lei, Lei", "il suo", "la sua", "i suoi", "le sue"],
            ["noi", "il nostro", "la nostra", "i nostri", "le nostre"],
            ["voi", "il vostro", "la vostra", "i vostri", "le vostre"],
            ["loro", "il loro", "la loro", "i loro", "le loro"],
          ],
        },
        examples: [
          { it: "Dov'è il mio telefono?", en: "Where's my phone?" },
          { it: "Ti piace la nostra nuova casa?", en: "Do you like our new house?" },
          { it: "I miei amici abitano a Genova.", en: "My friends live in Genoa." },
          { it: "Paolo cerca la sua borsa.", en: "Paolo is looking for his bag." },
          { it: "Le loro figlie studiano a Pisa.", en: "Their daughters study in Pisa." },
        ],
      },
      {
        heading: `Family: "mia madre" but "i miei genitori"`,
        body: [
          `With a singular family noun, drop the article: "mio padre", "mia sorella", "tuo zio", "suo marito", "nostra figlia". The article comes back in four cases: in the plural ("i miei fratelli"), with "loro" ("il loro figlio"), with an adjective or a suffix ("la mia sorella maggiore", "il mio fratellino"), and with affectionate words ("la mia mamma", "il mio papà").`,
          `"I miei" on its own means my parents, my folks: "Stasera ceno dai miei."`,
        ],
        examples: [
          { it: "Mia madre è di Lecce.", en: "My mother is from Lecce." },
          { it: "I miei genitori sono in pensione.", en: "My parents are retired." },
          { it: "Il loro figlio fa il medico.", en: "Their son is a doctor." },
          { it: "La mia nonna paterna ha novant'anni.", en: "My paternal grandmother is ninety." },
        ],
      },
      {
        heading: `"Suo": his, her, your`,
        body: [
          `"Suo" means his, her and its: "il suo libro" can be his book or her book, and context tells you which. With "Lei", the same form means your (polite): "Signora, questo è il Suo ombrello?" Write it with a capital S in formal letters.`,
          `Possessive pronouns (mine, yours) are the same words: "Questa borsa è tua? No, la mia è nera." After "essere" the article is usually dropped: "È mio" (it's mine).`,
        ],
        examples: [
          { it: "Giulia è con suo marito.", en: "Giulia is with her husband." },
          { it: "Mi dà il Suo nome, per favore?", en: "Could I have your name, please?" },
          { it: "Di chi è questa giacca? È mia.", en: "Whose jacket is this? It's mine." },
          { it: "La mia macchina è vecchia, la tua è nuova.", en: "My car is old, yours is new." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mio libro è sul tavolo.",
        right: "Il mio libro è sul tavolo.",
        why: `Possessives usually take the article: "il mio libro".`,
      },
      {
        wrong: "La mia madre è italiana.",
        right: "Mia madre è italiana.",
        why: `Singular family members drop the article.`,
      },
      {
        wrong: "Marco ama suo moglie.",
        right: "Marco ama sua moglie.",
        why: `The possessive agrees with "moglie" (feminine), not with Marco.`,
      },
      {
        wrong: "I mii amici",
        right: "I miei amici",
        why: `The masculine plural is irregular: "miei", "tuoi", "suoi".`,
      },
      {
        wrong: "Loro figlio è medico.",
        right: "Il loro figlio è medico.",
        why: `"Loro" always keeps the article, even with family.`,
      },
    ],
    faqs: [
      {
        q: `How do I say a friend of mine?`,
        a: `"Un mio amico" or "una mia amica", with the indefinite article: "Stasera esco con un mio collega."`,
      },
      {
        q: `How do I make clear whether "suo" is his or her?`,
        a: `Usually context is enough. If it isn't, use "di lui" or "di lei": "la macchina di lei" (her car). In everyday speech you can also just use the name: "la macchina di Anna".`,
      },
      {
        q: `Why "casa mia" without the article?`,
        a: `A few fixed phrases put the possessive after the noun with no article: "a casa mia", "a casa tua", "mamma mia!", "è colpa mia" (it's my fault).`,
      },
    ],
    related: ["articles", "adjectives-and-agreement", "article-uses"],
    lessons: [
      "a1-family",
      "a1-whose-is-it",
      "a1-possessives-1",
      "a1-possessives-2",
      "a1-possessives-family",
      "a1-drill-possessives",
      "a1-error-hunt-possessives",
      "a1-review-extra-1",
    ],
  },
];
