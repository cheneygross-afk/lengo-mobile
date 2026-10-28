// Synced from cheneygross-afk/lengo:src/lib/grammar/it-guides-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ItGrammarGuide } from "./it-types";

// Italian grammar guides, A2 (see the notes at the top of ./it-types.ts).
export const IT_A2_GUIDES: ItGrammarGuide[] = [
  {
    slug: "articulated-prepositions",
    title: "Del, Al, Dal, Nel, Sul: Articulated Prepositions",
    description:
      "How di, a, da, in and su merge with the definite article (del, allo, dall', nella, sui ...), the full table, con il or col, when the article is used or left out, and the partitive del pane, dei biscotti.",
    level: "A2",
    pinned: true,
    intro: [
      `When "di", "a", "da", "in" or "su" come right before a definite article, they merge with it into one word: "a + il = al", "in + la = nella", "di + gli = degli". Italians do this every time, so "a il bar" or "in la cucina" are simply wrong.`,
      `The table has 35 forms, but there is only one rule to learn: the preposition takes the form of the article. If you know that a noun takes "lo", you know it takes "allo", "dallo", "nello", "sullo", "dello". "In" becomes "ne-" and "di" becomes "de-"; the double "l" appears wherever the article starts with "l".`,
    ],
    sections: [
      {
        heading: `The full table`,
        body: [
          `Read the table by rows: each preposition is glued to each article. Note the double "l" before every article beginning with "l" ("alla", "dello", "nell'"), and the single "l" before "i" ("ai", "dei", "nei", "sui"). The forms before a vowel keep the apostrophe: "all'aeroporto", "dell'acqua", "nell'armadio".`,
          `"Con" can merge too ("col", "coi"), but modern Italian usually keeps it apart: "con il treno", "con gli amici". "Per" and "tra / fra" never merge: "per il centro", "tra le case".`,
        ],
        table: {
          headers: ["", "il", "lo", "l'", "la", "i", "gli", "le"],
          rows: [
            ["di", "del", "dello", "dell'", "della", "dei", "degli", "delle"],
            ["a", "al", "allo", "all'", "alla", "ai", "agli", "alle"],
            ["da", "dal", "dallo", "dall'", "dalla", "dai", "dagli", "dalle"],
            ["in", "nel", "nello", "nell'", "nella", "nei", "negli", "nelle"],
            ["su", "sul", "sullo", "sull'", "sulla", "sui", "sugli", "sulle"],
          ],
        },
        examples: [
          { it: "Le chiavi sono sul tavolo.", en: "The keys are on the table." },
          { it: "Andiamo al mare o in montagna?", en: "Shall we go to the beach or to the mountains?" },
          { it: "Il latte è nel frigo.", en: "The milk is in the fridge." },
          { it: "Torno dall'ufficio alle sette.", en: "I get back from the office at seven." },
          { it: "Ho dato il regalo agli zii.", en: "I gave the present to my aunt and uncle." },
          { it: "Il prezzo dei biglietti è aumentato.", en: "The price of the tickets has gone up." },
        ],
      },
      {
        heading: `With or without the article: "in centro" or "nel centro"?`,
        body: [
          `Contractions only happen when there is an article. Set phrases for everyday places have none: "in banca", "in ufficio", "in cucina", "in centro", "a casa", "a scuola", "a letto", "in treno". Add a description and the article returns: "nella banca di via Roma", "nel centro storico", "nella cucina di mia nonna".`,
          `Some places always take the article and so always contract: "al mare", "al cinema", "al bar", "al ristorante", "allo stadio", "all'università", "dal medico", "dal parrucchiere". Times take it too: "alle otto", "all'una", "dalle nove alle cinque". Plural and modified country names contract: "negli Stati Uniti", "nell'Italia del Sud".`,
        ],
        examples: [
          { it: "Lavoro in centro, nel palazzo dietro il Duomo.", en: "I work downtown, in the building behind the cathedral." },
          { it: "Il museo è aperto dalle nove alle diciannove.", en: "The museum is open from nine to seven p.m." },
          { it: "Stasera andiamo al cinema.", en: "We're going to the movies tonight." },
          { it: "Mio cugino vive negli Stati Uniti.", en: "My cousin lives in the United States." },
        ],
      },
      {
        heading: `The partitive: "del pane", "dei biscotti"`,
        body: [
          `"Di" + article also means some, any: "del pane" (some bread), "dell'acqua", "dei biscotti" (some biscuits), "delle mele". In the plural it works as the plural of "un", "una": "un amico, degli amici".`,
          `It is often optional, and it is left out in negative sentences and many questions: "Compro pane e latte", "Non ho biscotti", "Hai zucchero?". With nouns that can't be counted, "un po' di" (a bit of) is very common: "un po' di pane", "un po' di pazienza". "Qualche" (some, a few) is always followed by a singular noun: "qualche biscotto".`,
        ],
        examples: [
          { it: "Vuoi del vino?", en: "Would you like some wine?" },
          { it: "Ho comprato delle pesche al mercato.", en: "I bought some peaches at the market." },
          { it: "Ci sono degli studenti in corridoio.", en: "There are some students in the hallway." },
          { it: "Mi dai un po' d'acqua?", en: "Can you give me a bit of water?" },
          { it: "Abbiamo invitato qualche amico.", en: "We invited a few friends." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vado a il bar.",
        right: "Vado al bar.",
        why: `"A" + "il" always merges into "al".`,
      },
      {
        wrong: "Le chiavi sono nel la borsa.",
        right: "Le chiavi sono nella borsa.",
        why: `The preposition and the article are one word, with a double "l": "nella".`,
      },
      {
        wrong: "Il libro è sul il tavolo.",
        right: "Il libro è sul tavolo.",
        why: `"Sul" already contains the article; don't repeat it.`,
      },
      {
        wrong: "il professore dei studenti",
        right: "il professore degli studenti",
        why: `"Studenti" takes "gli", so "di + gli = degli".`,
      },
      {
        wrong: "Lavoro nella banca.",
        right: "Lavoro in banca.",
        why: `Set phrases for everyday places take no article: "in banca", "in ufficio". Use "nella banca" only with a description.`,
      },
      {
        wrong: "Ho qualche biscotti.",
        right: "Ho qualche biscotto.",
        why: `"Qualche" means some but always takes a singular noun.`,
      },
    ],
    faqs: [
      {
        q: `Is "col" still used?`,
        a: `"Col" and "coi" are heard in speech, especially in Tuscany and in fixed phrases ("col tempo", "coi fiocchi"), but "con il" and "con i" are more common in writing. The other forms ("collo", "colla") are old and also mean neck and glue, so avoid them.`,
      },
      {
        q: `How do I remember "a" versus "in" with articles?`,
        a: `Learn the place with its preposition as a chunk: "al bar", "al mare", "allo stadio", "in centro", "in piscina", "nel parco". The Articles & Prepositions tool and the Drill lessons give you the repetition.`,
      },
      {
        q: `Does "da" mean from or at?`,
        a: `Both. "Vengo dal supermercato" (from), "Sono dal medico" (at the doctor's), "Vado dal medico" (to the doctor's). With people and shops named after people, "da" is the at and to word.`,
      },
    ],
    related: ["articles", "simple-prepositions", "article-uses", "ne"],
    lessons: [
      "a1-first-articulated-prepositions",
      "a1-drill-prepositions",
      "a2-articulated-prepositions-1",
      "a2-articulated-prepositions-2",
      "a2-preposition-with-or-without-article",
      "a2-drill-articulated-prepositions-1",
      "a2-partitive",
      "a2-drill-articulated-prepositions-2",
      "a2-contrast-a-in-da",
      "a2-error-hunt-prepositions",
      "a2-sound-contractions",
    ],
  },
  {
    slug: "article-uses",
    title: "Il Caffè, La Signora Rossi, Il Lunedì: When Italian Uses the Article",
    description:
      "Where Italian uses the definite article and English doesn't (general nouns, titles, countries, possessives, il lunedì, percentages) and where Italian leaves it out (jobs, set phrases, lists).",
    level: "A2",
    intro: [
      `Knowing the forms of the article is half the job; the other half is knowing when to use one. Italian uses the definite article in many places where English has none: "Il caffè fa bene" (coffee is good for you), "L'Italia è bella", "La signora Rossi è arrivata".`,
    ],
    sections: [
      {
        heading: `Italian uses the article, English doesn't`,
        body: [
          `General nouns, things in general, take the article: "Mi piace il cioccolato", "Gli italiani bevono molto caffè", "La vita è bella". Abstract nouns too: "la pazienza", "la libertà".`,
          `Countries, regions, big islands and continents take the article when they are the subject or object: "L'Italia è lunga", "Visito la Toscana", "Conosci la Sicilia?". After "in" with no description, the article disappears: "Vivo in Italia".`,
          `Titles take the article when you talk about someone, not when you speak to them: "Il dottor Bianchi è in ferie" but "Buongiorno, dottor Bianchi". "La signora Rossi", "il professor Neri". Possessives take it too, as you saw: "il mio libro".`,
        ],
        examples: [
          { it: "Il vino rosso mi piace più del bianco.", en: "I like red wine more than white." },
          { it: "La Sardegna ha un mare bellissimo.", en: "Sardinia has a beautiful sea." },
          { it: "La signora Ferri è in riunione.", en: "Mrs. Ferri is in a meeting." },
          { it: "Buonasera, signora Ferri.", en: "Good evening, Mrs. Ferri." },
          { it: "Il tempo è denaro.", en: "Time is money." },
        ],
      },
      {
        heading: `Days, dates, times and percentages`,
        body: [
          `A day with the article means every: "il lunedì" (on Mondays), "la domenica" (on Sundays). Without it, a day is this coming or last one: "Lunedì ho un esame" (on Monday). Dates and times take it: "il 25 aprile", "alle tre", "È l'una". Years and percentages too: "nel 2024", "il 20% degli italiani".`,
          `Body parts and clothes take the article where English uses a possessive: "Mi fa male la testa", "Si è tolto il cappotto".`,
        ],
        examples: [
          { it: "Il sabato vado in palestra.", en: "I go to the gym on Saturdays." },
          { it: "Sabato vado a una festa.", en: "On Saturday I'm going to a party." },
          { it: "Sono nato nel 1990.", en: "I was born in 1990." },
          { it: "Il 60% degli studenti ha superato l'esame.", en: "Sixty percent of the students passed the exam." },
        ],
      },
      {
        heading: `No article where English has one`,
        body: [
          `Jobs, religions and nationalities after "essere" take no article: "È ingegnere", "Sono cattolico". Many set phrases have none: "in macchina", "a casa", "in vacanza", "avere fretta", "fare colazione". In lists and headings, articles are often dropped: "Ingredienti: farina, uova, latte".`,
          `Some expressions with "di" describe a type rather than a possession and take no article: "una lezione di storia", "un biglietto di andata", "un succo di frutta", "la carta di credito".`,
        ],
        examples: [
          { it: "Mia sorella fa l'infermiera.", en: "My sister is a nurse." },
          { it: "Mia sorella è infermiera.", en: "My sister is a nurse." },
          { it: "Andiamo in vacanza in agosto.", en: "We go on vacation in August." },
          { it: "Ho una lezione di chimica alle dieci.", en: "I have a chemistry class at ten." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Italiani mangiano tanta pasta.",
        right: "Gli italiani mangiano tanta pasta.",
        why: `People and things in general take the article.`,
      },
      {
        wrong: "Italia è un paese bellissimo.",
        right: "L'Italia è un paese bellissimo.",
        why: `Countries take the article, except after "in" or "di" in set phrases.`,
      },
      {
        wrong: "Il dottor Bianchi, buongiorno! Come sta il dottor Bianchi?",
        right: "Buongiorno, dottor Bianchi! Come sta?",
        why: `Drop the article when you speak to the person directly.`,
      },
      {
        wrong: "Mi fa male mia testa.",
        right: "Mi fa male la testa.",
        why: `Body parts take the article, not a possessive.`,
      },
      {
        wrong: "Il lunedì prossimo ho un esame.",
        right: "Lunedì prossimo ho un esame.",
        why: `"Il lunedì" means every Monday; a single coming Monday has no article.`,
      },
    ],
    faqs: [
      {
        q: `"Fa l'infermiera" or "è infermiera"?`,
        a: `Both mean she's a nurse. "Fare" + article + job is very common in speech: "Faccio l'insegnante", "Che lavoro fai?". With "essere" there is no article.`,
      },
      {
        q: `Why "in Italia" but "nell'Italia del Sud"?`,
        a: `"In" + a bare country name is a set pattern. As soon as the country is described or specified, the article is back and merges: "nell'Italia del Sud", "negli Stati Uniti" (a plural name).`,
      },
      {
        q: `Do cities take the article?`,
        a: `No: "Roma è bellissima", "Amo Napoli". A few have it built into their name: "La Spezia", "L'Aquila", "Il Cairo".`,
      },
    ],
    related: ["articles", "articulated-prepositions", "possessives"],
    lessons: [
      "a1-contrast-lunedi-il-lunedi",
      "a1-days-of-the-week",
      "a1-possessives-family",
      "a2-preposition-with-or-without-article",
    ],
  },
  {
    slug: "passato-prossimo",
    title: "Ho Mangiato, Sono Andato: The Passato Prossimo",
    description:
      "The everyday past tense: avere or essere plus the past participle, regular participles in -ato, -uto, -ito, the common irregular ones (fatto, detto, preso, visto), agreement with essere, and the time words that go with it.",
    level: "A2",
    intro: [
      `The passato prossimo is the past tense Italians use most in conversation: for what happened yesterday, last year or a moment ago. It is made like the English present perfect, with a helping verb and a past participle ("ho mangiato" = I have eaten), but it also translates the simple past: "Ieri ho mangiato al ristorante" (yesterday I ate at a restaurant).`,
      `The helping verb is "avere" for most verbs and "essere" for verbs of movement and change, and with "essere" the participle agrees like an adjective. The choice between the two has its own guide; this one covers the forms.`,
    ],
    sections: [
      {
        heading: `With "avere"`,
        body: [
          `Take the present of "avere" and add the past participle. Regular participles replace the infinitive ending: "-are" becomes "-ato" ("parlato"), "-ere" becomes "-uto" ("venduto"), "-ire" becomes "-ito" ("dormito", "finito"). With "avere" the participle does not change: "Ho mangiato", "Abbiamo mangiato", "Maria ha mangiato".`,
          `Negatives put "non" before the helping verb: "Non ho capito". Adverbs like "già", "mai", "ancora", "appena", "sempre" usually go between the two parts: "Ho già mangiato", "Non ho mai visto Venezia".`,
        ],
        table: {
          headers: ["", "parlare", "vendere", "dormire"],
          rows: [
            ["io", "ho parlato", "ho venduto", "ho dormito"],
            ["tu", "hai parlato", "hai venduto", "hai dormito"],
            ["lui, lei, Lei", "ha parlato", "ha venduto", "ha dormito"],
            ["noi", "abbiamo parlato", "abbiamo venduto", "abbiamo dormito"],
            ["voi", "avete parlato", "avete venduto", "avete dormito"],
            ["loro", "hanno parlato", "hanno venduto", "hanno dormito"],
          ],
        },
        examples: [
          { it: "Ieri sera ho guardato un film.", en: "Last night I watched a movie." },
          { it: "Hai già mangiato?", en: "Have you eaten yet?" },
          { it: "Abbiamo venduto la macchina.", en: "We sold the car." },
          { it: "Non ho dormito bene.", en: "I didn't sleep well." },
          { it: "Avete finito i compiti?", en: "Have you finished your homework?" },
        ],
      },
      {
        heading: `Irregular participles`,
        body: [
          `Many common verbs, mostly in "-ere", have irregular participles. They have to be learned, but they come in families: "-tto" ("fatto", "detto", "scritto", "letto", "rotto"), "-so" ("preso", "chiuso", "deciso", "speso", "messo" with double s), "-sto" ("visto", "chiesto", "risposto", "rimasto"), and "-erto" ("aperto", "offerto", "scoperto").`,
          `Watch the double consonants: "fatto", "detto", "scritto", "letto", "messo". Saying "fato" or "deto" is understood but sounds clearly foreign.`,
        ],
        table: {
          headers: ["Infinitive", "Participle", "Infinitive", "Participle"],
          rows: [
            ["fare", "fatto", "prendere", "preso"],
            ["dire", "detto", "mettere", "messo"],
            ["scrivere", "scritto", "chiudere", "chiuso"],
            ["leggere", "letto", "vedere", "visto"],
            ["rompere", "rotto", "chiedere", "chiesto"],
            ["aprire", "aperto", "rispondere", "risposto"],
            ["offrire", "offerto", "spendere", "speso"],
            ["bere", "bevuto", "vincere", "vinto"],
          ],
        },
        examples: [
          { it: "Cosa hai fatto nel fine settimana?", en: "What did you do at the weekend?" },
          { it: "Ho letto un libro bellissimo.", en: "I read a wonderful book." },
          { it: "Chi ha aperto la finestra?", en: "Who opened the window?" },
          { it: "Abbiamo preso il treno delle otto.", en: "We took the eight o'clock train." },
          { it: "Mi ha detto la verità.", en: "He told me the truth." },
        ],
      },
      {
        heading: `With "essere": agreement`,
        body: [
          `Verbs like "andare", "venire", "arrivare", "partire", "uscire", "tornare", "nascere", "stare" and "restare" use "essere". The participle then agrees with the subject like an adjective: "-o", "-a", "-i", "-e". A man says "sono andato", a woman "sono andata"; a group "siamo andati", a group of women "siamo andate".`,
          `Irregular participles of "essere" verbs: "essere" itself ("sono stato"), "venire" ("venuto"), "nascere" ("nato"), "morire" ("morto"), "rimanere" ("rimasto"), "succedere" ("successo"). "Stato" serves both "essere" and "stare": "Sono stato a Roma" (I've been to Rome).`,
        ],
        table: {
          headers: ["andare", "a man, a male group", "a woman, a female group"],
          rows: [
            ["io", "sono andato", "sono andata"],
            ["tu", "sei andato", "sei andata"],
            ["lui, lei", "è andato", "è andata"],
            ["noi", "siamo andati", "siamo andate"],
            ["voi", "siete andati", "siete andate"],
            ["loro", "sono andati", "sono andate"],
          ],
        },
        examples: [
          { it: "Sono andata in Puglia ad agosto.", en: "I went to Puglia in August. (a woman speaking)" },
          { it: "Marco è arrivato tardi.", en: "Marco arrived late." },
          { it: "Le ragazze sono uscite alle nove.", en: "The girls went out at nine." },
          { it: "Siete mai stati a Venezia?", en: "Have you ever been to Venice?" },
          { it: "Mia nonna è nata a Lecce.", en: "My grandmother was born in Lecce." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ho andato al cinema.",
        right: "Sono andato al cinema.",
        why: `"Andare" takes "essere". Verbs of movement from place to place use "essere".`,
      },
      {
        wrong: "Ho fato la spesa.",
        right: "Ho fatto la spesa.",
        why: `"Fatto" has a double t; so do "detto", "scritto", "letto", "rotto".`,
      },
      {
        wrong: "Ho prenduto un caffè.",
        right: "Ho preso un caffè.",
        why: `"Prendere" has an irregular participle, "preso".`,
      },
      {
        wrong: "Giulia è andato a casa.",
        right: "Giulia è andata a casa.",
        why: `With "essere" the participle agrees with the subject: Giulia is feminine.`,
      },
      {
        wrong: "Ho mangiata la pizza.",
        right: "Ho mangiato la pizza.",
        why: `With "avere" the participle normally doesn't change. (It agrees only with a pronoun "lo", "la", "li", "le" before it.)`,
      },
      {
        wrong: "Io ho visto Roma l'anno scorso.",
        right: "Sono stato a Roma l'anno scorso.",
        why: `To say you've been to or visited a place, Italians say "sono stato a". "Ho visto Roma" is possible but means you saw it.`,
      },
    ],
    faqs: [
      {
        q: `Is the passato prossimo the same as the English present perfect?`,
        a: `In form, yes. In use it covers both I have done and I did: "Ieri ho lavorato" (yesterday I worked). English needs the simple past with a finished time like yesterday; Italian uses the passato prossimo.`,
      },
      {
        q: `What about the passato remoto I see in books?`,
        a: `It is a second past tense ("parlò", "fece"), used in literature, history and in parts of southern Italy. In most of Italy, everyday speech uses the passato prossimo. You will learn to recognise the passato remoto at the Intermediate level.`,
      },
      {
        q: `Which time words go with it?`,
        a: `"Ieri" (yesterday), "l'altro ieri" (the day before yesterday), "stamattina" (this morning), "la settimana scorsa", "il mese scorso", "l'anno scorso" (last week, month, year), "due giorni fa" (two days ago), "nel 2019", "già", "appena", "mai", "non ancora".`,
      },
    ],
    related: ["essere-or-avere", "past-tenses", "imperfetto", "direct-object-pronouns"],
    lessons: [
      "a2-passato-prossimo-avere-1",
      "a2-passato-prossimo-avere-2",
      "a2-drill-regular-participles",
      "a2-drill-irregular-participles",
      "a2-time-expressions-past",
      "a2-sound-participle-doubles",
      "a2-error-hunt-avere-past",
      "a2-transform-today-yesterday",
      "a2-passato-prossimo-essere-1",
      "a2-passato-prossimo-essere-2",
      "a2-drill-essere-participles",
      "a2-error-hunt-essere-past",
      "a2-transform-change-the-traveller",
      "a2-sound-endings-in-past",
    ],
  },
  {
    slug: "essere-or-avere",
    title: "Essere or Avere? Choosing the Helping Verb",
    description:
      "Which verbs take essere in the passato prossimo (movement, change of state, reflexives, piacere), the verbs that take both, modal verbs in the past (sono dovuto andare), and già, ancora, appena and mai.",
    level: "A2",
    intro: [
      `Every compound tense in Italian needs a helping verb, "avere" or "essere", and choosing the wrong one is the most noticeable mistake learners make in the past: "ho andato" sounds to Italians the way I have went sounds to you.`,
      `Most verbs take "avere". The "essere" verbs are a smaller group, and they share a meaning: the subject moves, changes state, or the action falls back on itself. Learn the rule, then learn the core list by heart.`,
    ],
    sections: [
      {
        heading: `The rule`,
        body: [
          `Transitive verbs, those that can take a direct object (to eat something, to buy something), take "avere": "ho mangiato una pizza", "ho comprato il pane". Most verbs with no object take "avere" too: "ho dormito", "ho lavorato", "ho camminato", "ho viaggiato".`,
          `"Essere" goes with verbs that have no direct object and describe going somewhere ("andare", "venire", "arrivare", "partire", "entrare", "uscire", "tornare", "salire", "scendere", "cadere"), staying or being ("essere", "stare", "restare", "rimanere"), or a change in the subject ("nascere", "morire", "diventare", "crescere", "invecchiare", "dimagrire", "ingrassare"). Add all reflexive verbs ("mi sono alzato"), and verbs like "piacere", "sembrare", "succedere", "costare", "mancare", "bastare", "servire".`,
        ],
        table: {
          headers: ["Takes essere", "Examples"],
          rows: [
            ["movement to, from or through a place", "è arrivata, siamo partiti, sono uscito, sono caduta"],
            ["being, staying", "sono stato, è rimasta, siamo restati"],
            ["change of state", "è nato, è morta, sono diventati, è cresciuto"],
            ["reflexive verbs", "mi sono svegliato, ci siamo sposati"],
            ["piacere and similar", "mi è piaciuto, è successo, è costato, mi è servito"],
          ],
        },
        examples: [
          { it: "Siamo tornati a casa a mezzanotte.", en: "We got back home at midnight." },
          { it: "Mio figlio è cresciuto tanto!", en: "My son has grown so much!" },
          { it: "Cos'è successo?", en: "What happened?" },
          { it: "Il biglietto è costato 50 euro.", en: "The ticket cost 50 euros." },
          { it: "Abbiamo camminato per tre ore.", en: "We walked for three hours." },
        ],
      },
      {
        heading: `Verbs that take both`,
        body: [
          `Some verbs take "avere" when they have a direct object and "essere" when they don't: "Ho cominciato il lavoro" (I started the job) but "Il film è cominciato" (the film started). The same with "finire", "cambiare", "passare", "salire", "scendere", "aumentare": "Ho finito il libro" / "La lezione è finita"; "Ho cambiato casa" / "Sei cambiata!".`,
          `Verbs of movement without a destination can take "avere": "correre" and "volare" take "avere" for the activity ("Ho corso per un'ora") and "essere" with a destination ("Sono corso a casa"). Weather verbs take either: "è piovuto" or "ha piovuto".`,
        ],
        examples: [
          { it: "Ho finito il lavoro alle sei.", en: "I finished work at six." },
          { it: "La festa è finita tardi.", en: "The party ended late." },
          { it: "Abbiamo passato una bella serata.", en: "We had a lovely evening." },
          { it: "Il tempo è passato in fretta.", en: "The time went by quickly." },
          { it: "Ieri ha piovuto tutto il giorno.", en: "It rained all day yesterday." },
        ],
      },
      {
        heading: `Modal verbs in the past`,
        body: [
          `"Volere", "potere" and "dovere" normally take the helping verb of the infinitive that follows: "Ho dovuto lavorare" (avere, because "lavorare" takes "avere"), "Sono dovuto partire" (essere, because "partire" takes "essere"). In everyday speech "ho dovuto partire" is also common and accepted.`,
          `With a reflexive verb, the position of the pronoun decides: "Mi sono dovuto alzare presto" (pronoun first, "essere"), but "Ho dovuto alzarmi presto" (pronoun attached, "avere"). Both are correct.`,
        ],
        examples: [
          { it: "Non sono potuta venire, scusa.", en: "I couldn't come, sorry. (a woman speaking)" },
          { it: "Ho voluto provare la cucina siciliana.", en: "I wanted to try Sicilian cooking." },
          { it: "Siamo dovuti tornare a piedi.", en: "We had to walk back." },
          { it: "Ho dovuto svegliarmi alle cinque.", en: "I had to wake up at five." },
        ],
      },
      {
        heading: `"Già", "ancora", "appena", "mai"`,
        body: [
          `These four sit between the helping verb and the participle. "Già" is already or yet in questions ("Hai già mangiato?"); "non ... ancora" is not yet ("Non è ancora arrivato"); "appena" is just ("Sono appena tornato"); "mai" is ever in questions and never with "non" ("Sei mai stato in Sicilia? No, non ci sono mai stato").`,
        ],
        examples: [
          { it: "Il treno è già partito.", en: "The train has already left." },
          { it: "Non ho ancora finito.", en: "I haven't finished yet." },
          { it: "Ho appena parlato con Luca.", en: "I've just spoken to Luca." },
          { it: "Non ho mai mangiato il polpo.", en: "I've never eaten octopus." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ho arrivato ieri.",
        right: "Sono arrivato ieri.",
        why: `"Arrivare" is a verb of movement with no object: "essere".`,
      },
      {
        wrong: "Sono mangiato troppo.",
        right: "Ho mangiato troppo.",
        why: `"Mangiare" can take an object, so it takes "avere".`,
      },
      {
        wrong: "Mi ho divertito molto.",
        right: "Mi sono divertito molto.",
        why: `Reflexive verbs always take "essere".`,
      },
      {
        wrong: "Mi ha piaciuto il film.",
        right: "Mi è piaciuto il film.",
        why: `"Piacere" takes "essere", and the participle agrees with the thing liked.`,
      },
      {
        wrong: "Il concerto ha cominciato alle nove.",
        right: "Il concerto è cominciato alle nove.",
        why: `Without an object, "cominciare" takes "essere".`,
      },
      {
        wrong: "Ho già non mangiato.",
        right: "Non ho ancora mangiato.",
        why: `Not yet is "non ... ancora", around the helping verb and before the participle.`,
      },
    ],
    faqs: [
      {
        q: `Is there a quick test?`,
        a: `Ask whether the verb can have a direct object (what? whom?). If yes, it takes "avere". If no, check whether the subject moves, stays or changes: then it's "essere". "Camminare", "dormire", "lavorare", "viaggiare" have no object and no change of place, so they take "avere".`,
      },
      {
        q: `Why "ho viaggiato" but "sono andato"?`,
        a: `"Viaggiare" describes the activity, not going to a destination, so it takes "avere", like "camminare" and "nuotare". "Andare" always implies a destination, so it takes "essere".`,
      },
      {
        q: `"È piaciuto" or "è piaciuta"?`,
        a: `It agrees with the thing that pleased: "Mi è piaciuto il libro", "Mi è piaciuta la mostra", "Ci sono piaciuti i musei".`,
      },
    ],
    related: ["passato-prossimo", "reflexive-verbs", "modal-verbs", "past-tenses"],
    lessons: [
      "a2-reflexives-in-the-past",
      "a2-piacere-in-the-past",
      "a2-auxiliary-rule",
      "a2-verbs-with-both-auxiliaries",
      "a2-modals-in-the-past",
      "a2-already-yet-just",
      "a2-drill-auxiliary-choice",
      "a2-drill-already-yet",
      "a2-contrast-auxiliary-pairs",
      "a2-error-hunt-auxiliary",
      "a2-spiral-past-tense",
    ],
  },
  {
    slug: "imperfetto",
    title: "Ero, Avevo, Facevo: The Imperfetto",
    description:
      "The forms of the imperfetto (regular, essere, fare, dire, bere) and its uses: past habits, descriptions, age, time and weather, ongoing actions with mentre, and polite requests.",
    level: "A2",
    intro: [
      `The imperfetto is the past tense of description and habit. It paints the background of a story ("Era una bella giornata, il sole splendeva...") and tells what used to happen ("Da bambino andavo al mare ogni estate"). English uses was doing, used to do or would do for these; Italian uses one tense.`,
      `It is also the most regular tense in Italian. Learn three endings and a handful of irregular stems, and you have it.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `Take the infinitive, drop the final "-re", and add "-vo", "-vi", "-va", "-vamo", "-vate", "-vano": "parla-vo", "prende-vo", "dormi-vo". The stress falls on the vowel before the "v", except in "noi" and "voi": "parLAvo", "parLAvano", but "parlaVAmo", "parlaVAte".`,
          `"Essere" is the real irregular: "ero, eri, era, eravamo, eravate, erano". A few verbs use their old Latin stem: "fare" ("facevo"), "dire" ("dicevo"), "bere" ("bevevo"), "tradurre" ("traducevo"), "porre" ("ponevo").`,
        ],
        table: {
          headers: ["", "parlare", "avere", "essere", "fare"],
          rows: [
            ["io", "parlavo", "avevo", "ero", "facevo"],
            ["tu", "parlavi", "avevi", "eri", "facevi"],
            ["lui, lei, Lei", "parlava", "aveva", "era", "faceva"],
            ["noi", "parlavamo", "avevamo", "eravamo", "facevamo"],
            ["voi", "parlavate", "avevate", "eravate", "facevate"],
            ["loro", "parlavano", "avevano", "erano", "facevano"],
          ],
        },
        examples: [
          { it: "Da piccola avevo un cane bianco.", en: "When I was little I had a white dog." },
          { it: "Mio nonno faceva il falegname.", en: "My grandfather was a carpenter." },
          { it: "Eravamo molto stanchi.", en: "We were very tired." },
          { it: "Cosa dicevi?", en: "What were you saying?" },
        ],
      },
      {
        heading: `Habits and descriptions`,
        body: [
          `Use the imperfetto for things that happened regularly in the past, often with "da bambino", "da giovane", "ogni estate", "di solito", "sempre", "spesso": "Ogni domenica pranzavamo dalla nonna."`,
          `It also describes how things were: people, places, feelings, physical states, age, the time and the weather. "La casa era piccola", "Avevo vent'anni", "Erano le otto", "Pioveva", "Ero contento". In a story these are the background, not the events.`,
        ],
        examples: [
          { it: "Da bambino giocavo a calcio in cortile.", en: "As a child I used to play football in the courtyard." },
          { it: "D'estate andavamo sempre in Liguria.", en: "In the summer we always went to Liguria." },
          { it: "Mia nonna era alta e aveva gli occhi verdi.", en: "My grandmother was tall and had green eyes." },
          { it: "Erano le dieci e faceva freddo.", en: "It was ten o'clock and it was cold." },
          { it: "Quando avevo diciotto anni, abitavo a Torino.", en: "When I was eighteen, I lived in Turin." },
        ],
      },
      {
        heading: `Ongoing actions: "mentre"`,
        body: [
          `The imperfetto describes an action in progress at a moment in the past, often with "mentre" (while): "Mentre cucinavo, ascoltavo la radio" (two background actions at the same time). When something interrupts it, the interruption is in the passato prossimo: "Mentre cucinavo, è suonato il telefono." The guide to the two past tenses covers this contrast.`,
          `"Stavo" + gerund stresses that you were in the middle of it: "Stavo uscendo quando hai chiamato." In requests, the imperfetto softens: "Volevo un'informazione" (I wanted some information) is a polite way to start at a counter.`,
        ],
        examples: [
          { it: "Mentre aspettavo il treno, leggevo il giornale.", en: "While I was waiting for the train, I was reading the paper." },
          { it: "Dormivo quando è arrivato Paolo.", en: "I was sleeping when Paolo arrived." },
          { it: "Stavamo cenando.", en: "We were having dinner." },
          { it: "Buongiorno, volevo prenotare un tavolo.", en: "Good morning, I'd like to book a table." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Da bambino ho giocato a calcio ogni giorno.",
        right: "Da bambino giocavo a calcio ogni giorno.",
        why: `Repeated habits in the past take the imperfetto.`,
      },
      {
        wrong: "Quando sono uscito, ha piovuto molto.",
        right: "Quando sono uscito, pioveva molto.",
        why: `The weather as the background to an event takes the imperfetto.`,
      },
      {
        wrong: "Io facevevo",
        right: "Io facevo",
        why: `"Fare" uses the stem "face-" plus the normal ending: "facevo".`,
      },
      {
        wrong: "Quando ho avuto dieci anni, abitavo a Bari.",
        right: "Quando avevo dieci anni, abitavo a Bari.",
        why: `Age in the past is a description: "avevo dieci anni".`,
      },
      {
        wrong: "Mentre ho cucinato, ascoltavo la radio.",
        right: "Mentre cucinavo, ascoltavo la radio.",
        why: `"Mentre" introduces an action in progress, so it takes the imperfetto.`,
      },
    ],
    faqs: [
      {
        q: `Is the imperfetto like used to?`,
        a: `It covers used to ("Abitavo a Roma" = I used to live in Rome), but also was doing ("Leggevo" = I was reading) and plain was for descriptions ("Era tardi"). One Italian tense for three English structures.`,
      },
      {
        q: `How do I say I was born?`,
        a: `"Sono nato" / "sono nata", in the passato prossimo: birth is an event. But "Quando ero piccolo" (when I was little) is a description, so it's the imperfetto.`,
      },
      {
        q: `What is the imperfetto in "se lo sapevo, venivo"?`,
        a: `Spoken Italian sometimes uses the imperfetto in if-sentences about the past: if I'd known, I'd have come. It is very common in conversation but informal; the standard form, with the subjunctive, comes at the Upper-intermediate level.`,
      },
    ],
    related: ["past-tenses", "passato-prossimo", "trapassato-prossimo", "time-expressions"],
    lessons: [
      "a2-imperfetto-forms",
      "a2-imperfetto-habits",
      "a2-imperfetto-descriptions",
      "a2-imperfetto-ongoing",
      "a2-drill-imperfetto-forms",
      "a2-sound-imperfetto-stress",
      "a2-error-hunt-imperfetto",
      "a2-transform-now-and-then",
    ],
  },
  {
    slug: "past-tenses",
    title: "Passato Prossimo or Imperfetto? The Two Past Tenses",
    description:
      "How to choose between the passato prossimo and the imperfetto: events vs background, finished periods vs habits, interrupted actions, verbs that change meaning (conoscevo / ho conosciuto), and an overview of every Italian past tense.",
    level: "A2",
    pinned: true,
    intro: [
      `Italian conversation uses two past tenses side by side. The passato prossimo ("ho fatto", "sono andato") tells what happened: the events, the steps of the story. The imperfetto ("facevo", "andavo") describes how things were and what used to happen: the setting, the background, the habits.`,
      `English often uses the same simple past for both (I went, I was), so English speakers have to decide each time. Think of a film: the passato prossimo is the action that moves the plot; the imperfetto is the scenery and what's going on behind it.`,
    ],
    sections: [
      {
        heading: `Event or background?`,
        body: [
          `Ask what the sentence does. If it moves the story forward (and then, and then), use the passato prossimo: "Sono uscito, ho preso un taxi e sono andato in stazione." If it describes the scene, a state, a feeling, the time or the weather, use the imperfetto: "Era tardi, pioveva ed ero stanco."`,
          `A real story mixes both: "Era una sera d'inverno (background). Faceva freddo e le strade erano vuote (background). All'improvviso qualcuno ha bussato alla porta (event)." Words like "all'improvviso", "a un certo punto", "poi", "dopo" usually introduce events.`,
        ],
        table: {
          headers: ["Passato prossimo", "Imperfetto"],
          rows: [
            ["a completed event: Ho visto un film.", "a description: Il film era lungo."],
            ["a sequence of events: Mi sono alzato, ho fatto la doccia e sono uscito.", "an action in progress: Mentre facevo la doccia, cantavo."],
            ["one time, or a fixed number of times: Sono stato a Roma tre volte.", "a habit: Andavo a Roma ogni estate."],
            ["a closed period: Ho abitato a Milano per due anni.", "an open state: Abitavo a Milano quando ho conosciuto Paolo."],
          ],
        },
        examples: [
          { it: "Ieri sono andata al mare: c'era un sole bellissimo.", en: "Yesterday I went to the beach: there was beautiful sunshine." },
          { it: "Quando sono arrivato, tutti dormivano.", en: "When I arrived, everyone was asleep." },
          { it: "Da ragazzo leggevo molto; ieri ho letto un giallo intero.", en: "As a boy I used to read a lot; yesterday I read a whole mystery novel." },
          { it: "Non sono uscito perché ero stanco.", en: "I didn't go out because I was tired." },
        ],
      },
      {
        heading: `Interrupted actions and limited periods`,
        body: [
          `When an action in progress is interrupted, the ongoing one is in the imperfetto and the interruption in the passato prossimo: "Mentre guardavo la TV, è andata via la luce." "Quando" usually introduces the event, "mentre" the background.`,
          `A period with clear limits takes the passato prossimo, however long it lasted: "Ho vissuto a Londra per dieci anni" (and then it ended), "Ieri ho lavorato dalle nove alle sei", "Abbiamo aspettato un'ora". This surprises English speakers who feel that a long time should be imperfetto.`,
        ],
        examples: [
          { it: "Stavo per uscire quando ha chiamato mia madre.", en: "I was about to go out when my mother called." },
          { it: "Mentre camminavo, ho incontrato un vecchio amico.", en: "While I was walking, I ran into an old friend." },
          { it: "Ho studiato a Bologna per cinque anni.", en: "I studied in Bologna for five years." },
          { it: "Siamo rimasti in spiaggia tutto il giorno.", en: "We stayed on the beach all day." },
        ],
      },
      {
        heading: `Verbs that change meaning`,
        body: [
          `With some verbs the tense changes the English translation. "Conoscevo Marco" is I knew Marco (already); "Ho conosciuto Marco" is I met Marco (for the first time). "Sapevo" is I knew; "ho saputo" is I found out. "Dovevo partire" is I was supposed to leave (maybe I didn't); "sono dovuto partire" is I had to leave (and I did). "Potevo" is I could have, I had the chance; "ho potuto" is I managed to.`,
        ],
        table: {
          headers: ["Verb", "Imperfetto", "Passato prossimo"],
          rows: [
            ["conoscere", "conoscevo: I knew", "ho conosciuto: I met"],
            ["sapere", "sapevo: I knew", "ho saputo: I found out"],
            ["dovere", "dovevo: I was supposed to", "ho dovuto: I had to (and did)"],
            ["potere", "potevo: I could, was able", "ho potuto: I managed to"],
            ["volere", "volevo: I wanted", "ho voluto: I insisted, decided"],
          ],
        },
        examples: [
          { it: "Ho conosciuto mia moglie in Erasmus.", en: "I met my wife on an Erasmus exchange." },
          { it: "Non sapevo che eri qui!", en: "I didn't know you were here!" },
          { it: "Ho saputo la notizia stamattina.", en: "I heard the news this morning." },
          { it: "Dovevo chiamarti, ma me ne sono dimenticato.", en: "I was supposed to call you, but I forgot." },
        ],
      },
      {
        heading: `All the Italian past tenses`,
        body: [
          `The passato prossimo and the imperfetto carry everyday conversation. The trapassato prossimo ("avevo fatto", "ero andato") is the past before the past: "Quando sono arrivato, il film era già cominciato". The passato remoto ("feci", "andò") is the past of novels, history and fairy tales, and is still spoken in parts of the South. The trapassato remoto ("ebbi fatto") is literary and rare.`,
        ],
        table: {
          headers: ["Tense", "Example", "Use", "When you learn it"],
          rows: [
            ["passato prossimo", "ho mangiato, sono andata", "events, everyday past", "Elementary"],
            ["imperfetto", "mangiavo, andavo", "background, habits", "Elementary"],
            ["trapassato prossimo", "avevo mangiato, ero andata", "the past before the past", "Intermediate"],
            ["passato remoto", "mangiai, andò", "literature, history, the South", "Intermediate (reading), Advanced (writing)"],
          ],
        },
        examples: [
          { it: "Quando siamo arrivati, la festa era già finita.", en: "When we arrived, the party had already ended." },
          { it: "Garibaldi nacque a Nizza nel 1807.", en: "Garibaldi was born in Nice in 1807." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ieri pioveva, allora sono restato a casa e leggevo un libro.",
        right: "Ieri pioveva, allora sono restato a casa e ho letto un libro.",
        why: `Reading the book is one of the events of the day, so it's the passato prossimo; the rain is background.`,
      },
      {
        wrong: "Ho abitato a Roma quando ho conosciuto Luca.",
        right: "Abitavo a Roma quando ho conosciuto Luca.",
        why: `Living in Rome is the open background to the event of meeting Luca.`,
      },
      {
        wrong: "Abitavo a Roma per tre anni.",
        right: "Ho abitato a Roma per tre anni.",
        why: `A closed period ("per tre anni") takes the passato prossimo.`,
      },
      {
        wrong: "Ho conosciuto Marco da molti anni.",
        right: "Conosco Marco da molti anni.",
        why: `I've known him for years, and still do, is the present with "da".`,
      },
      {
        wrong: "Mentre ho dormito, è arrivato un messaggio.",
        right: "Mentre dormivo, è arrivato un messaggio.",
        why: `The interrupted action is in the imperfetto.`,
      },
    ],
    faqs: [
      {
        q: `Is there one rule that always works?`,
        a: `Ask: does this sentence tell me what happened next, or describe how things were? Events are passato prossimo; descriptions, habits and actions in progress are imperfetto. Then check for a closed period ("per due ore", "dal 2010 al 2015"), which takes the passato prossimo.`,
      },
      {
        q: `Can both tenses be correct?`,
        a: `Sometimes, with a change of meaning. "Ieri ero a casa" describes where you were; "Ieri sono stato a casa" presents it as what you did all day. Native speakers choose based on what they want to stress.`,
      },
      {
        q: `What about English would for past habits?`,
        a: `English would in 'Every summer we would go to the lake' is a past habit: imperfetto, "andavamo". Don't translate it with the conditional.`,
      },
    ],
    related: ["passato-prossimo", "imperfetto", "essere-or-avere", "trapassato-prossimo", "passato-remoto"],
    lessons: [
      "a2-pp-vs-imperfetto-1",
      "a2-pp-vs-imperfetto-2",
      "a2-time-limits",
      "a2-meaning-changers",
      "a2-drill-pp-imperfetto-1",
      "a2-drill-pp-imperfetto-2",
      "a2-contrast-conoscevo-ho-conosciuto",
      "a2-error-hunt-two-pasts",
      "a2-spiral-past-tenses",
      "a2-spiral-past-tenses-final",
      "b1-three-past-tenses",
      "b1-drill-past-tense-choice",
    ],
  },
  {
    slug: "pronouns",
    title: "Lo, Gli, Ci, Ne: A Map of Italian Pronouns",
    description:
      "Every family of Italian pronouns in one place: subject, direct and indirect object, reflexive, stressed, ci and ne, and the combined forms, with where they go in the sentence and links to each guide.",
    level: "A2",
    pinned: true,
    intro: [
      `Pronouns are what make Italian sound natural, and also what makes learners sound like a textbook if they avoid them. Instead of repeating the noun, Italians say "Lo compro" (I'll buy it), "Gli scrivo" (I'll write to him), "Ci vado domani" (I'm going there tomorrow), "Ne prendo due" (I'll take two of them).`,
      `There are several families, and the course teaches them one at a time, from the Elementary to the Upper-intermediate level. This guide is the map: what each family is for, what the forms look like side by side, and the two rules of position that apply to all of them.`,
    ],
    sections: [
      {
        heading: `The families side by side`,
        body: [
          `Subject pronouns ("io", "tu", "lui") are usually dropped. Stressed pronouns ("me", "te", "lui", "lei") are used after prepositions and for emphasis: "per me", "con lei", "Chiamo te, non lui!". The unstressed object pronouns are the small words that go with the verb: direct ("mi", "ti", "lo", "la"), indirect ("mi", "ti", "gli", "le") and reflexive ("mi", "ti", "si").`,
          `Notice how much they share: "mi", "ti", "ci", "vi" are the same in all three object families. Only the third person differs: direct "lo, la, li, le", indirect "gli, le" (and "gli" or "loro" for them), reflexive "si".`,
        ],
        table: {
          headers: ["Subject", "Direct object", "Indirect object", "Reflexive", "Stressed"],
          rows: [
            ["io", "mi", "mi", "mi", "me"],
            ["tu", "ti", "ti", "ti", "te"],
            ["lui", "lo", "gli", "si", "lui"],
            ["lei", "la", "le", "si", "lei"],
            ["Lei", "La", "Le", "si", "Lei"],
            ["noi", "ci", "ci", "ci", "noi"],
            ["voi", "vi", "vi", "vi", "voi"],
            ["loro", "li (m.), le (f.)", "gli (loro)", "si", "loro"],
          ],
        },
        examples: [
          { it: "Conosci Marta? Sì, la conosco bene.", en: "Do you know Marta? Yes, I know her well." },
          { it: "Hai chiamato Luca? Sì, gli ho scritto un messaggio.", en: "Did you call Luca? Yes, I sent him a message." },
          { it: "Questo regalo è per te.", en: "This present is for you." },
          { it: "Ci vediamo domani.", en: "See you tomorrow." },
        ],
      },
      {
        heading: `Ci, ne and the combined forms`,
        body: [
          `"Ci" replaces a place or a phrase with "a": "Vai a Roma? Sì, ci vado." "Ne" replaces a quantity or a phrase with "di": "Quanti caffè bevi? Ne bevo tre." Neither has an English equivalent, which is why each has its own guide.`,
          `When two pronouns meet, the first one changes its "i" to "e" and goes first: "me lo", "te la", "ce li", "ve ne". "Gli" and "le" both become "glie-" and join the second pronoun in one word: "glielo", "gliela", "gliene". Reflexive "si" becomes "se": "se lo mette".`,
        ],
        table: {
          headers: ["", "+ lo", "+ la", "+ li", "+ le", "+ ne"],
          rows: [
            ["mi", "me lo", "me la", "me li", "me le", "me ne"],
            ["ti", "te lo", "te la", "te li", "te le", "te ne"],
            ["gli, le, Le", "glielo", "gliela", "glieli", "gliele", "gliene"],
            ["si", "se lo", "se la", "se li", "se le", "se ne"],
            ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"],
            ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"],
          ],
        },
        examples: [
          { it: "Quando vai in farmacia? Ci vado dopo.", en: "When are you going to the pharmacy? I'm going later." },
          { it: "Hai figli? Sì, ne ho due.", en: "Do you have children? Yes, I have two." },
          { it: "Mi presti la bici? Sì, te la presto.", en: "Will you lend me the bike? Yes, I'll lend it to you." },
          { it: "Hai dato il libro a Paolo? Sì, gliel'ho dato.", en: "Did you give the book to Paolo? Yes, I gave it to him." },
        ],
      },
      {
        heading: `Where pronouns go`,
        body: [
          `Rule one: unstressed pronouns go before a conjugated verb: "Lo vedo", "Non gli piace", "Ce l'ho". In compound tenses they go before the helping verb: "L'ho visto", "Gli ho telefonato".`,
          `Rule two: they attach to the end of an infinitive, a gerund, the informal imperative and "ecco": "Voglio vederlo", "Vedendolo", "Guardalo!", "Eccolo!". With "volere", "potere", "dovere" and "sapere" you can choose: "Lo voglio vedere" or "Voglio vederlo". The guide to pronoun position covers every case.`,
        ],
        examples: [
          { it: "Non l'ho ancora letto.", en: "I haven't read it yet." },
          { it: "Devo chiamarla stasera.", en: "I have to call her tonight." },
          { it: "La devo chiamare stasera.", en: "I have to call her tonight." },
          { it: "Dimmi tutto!", en: "Tell me everything!" },
          { it: "Eccoti, finalmente!", en: "There you are, at last!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vedo lo.",
        right: "Lo vedo.",
        why: `Object pronouns go before a conjugated verb.`,
      },
      {
        wrong: "Gli ho visto ieri.",
        right: "L'ho visto ieri.",
        why: `"Vedere" takes a direct object: him is "lo". "Gli" means to him.`,
      },
      {
        wrong: "Questo è per mi.",
        right: "Questo è per me.",
        why: `After a preposition use the stressed form: "per me", "con te", "da lui".`,
      },
      {
        wrong: "Mi lo dai?",
        right: "Me lo dai?",
        why: `In a pair the first pronoun changes "i" to "e": "me lo", "te la", "ce li".`,
      },
      {
        wrong: "Voglio lo comprare.",
        right: "Voglio comprarlo.",
        why: `The pronoun goes before the whole verb group ("Lo voglio comprare") or on the end of the infinitive, never between them.`,
      },
    ],
    faqs: [
      {
        q: `In what order should I learn them?`,
        a: `As the course does: direct ("lo, la, li, le"), indirect ("gli, le"), then "ci" and "ne", then the combined forms ("me lo", "glielo"), then their position with infinitives, modals and commands.`,
      },
      {
        q: `Is "loro" still used for to them?`,
        a: `"Ho scritto loro" (after the verb) is correct and appears in formal writing. In speech and most writing, "gli" is the normal form: "Gli ho scritto" means I wrote to him or to them.`,
      },
      {
        q: `Why does "lo" become "l'"?`,
        a: `"Lo" and "la" elide before a vowel and before forms of "avere" with "h": "L'ho visto", "L'aspetto". The plurals "li" and "le" never elide: "Li ho visti", "Le ho viste".`,
      },
    ],
    related: ["direct-object-pronouns", "indirect-object-pronouns", "ci", "ne", "combined-pronouns", "pronoun-position"],
    lessons: ["a2-spiral-pronouns", "a2-spiral-pronouns-final", "b1-drill-pronouns-spiral", "b1-drill-pronouns-mixed-tenses"],
  },
  {
    slug: "direct-object-pronouns",
    title: "Lo, La, Li, Le: Direct Object Pronouns",
    description:
      "The direct object pronouns mi, ti, lo, la, La, ci, vi, li, le, their position before the verb, l' before a vowel, lo for whole ideas (non lo so), and agreement of the past participle (le ho viste).",
    level: "A2",
    intro: [
      `A direct object answers the question what? or whom? after the verb: "Compro il giornale" (what do I buy? the newspaper). The direct object pronoun replaces it: "Lo compro" (I buy it). Italian uses them constantly, both to avoid repeating a noun and in set phrases like "Non lo so" and "Lo prendo".`,
    ],
    sections: [
      {
        heading: `The forms and where they go`,
        body: [
          `"Lo" is him or it (masculine), "la" her or it (feminine), "li" them (masculine or mixed), "le" them (feminine). It is the grammatical gender that counts: "il libro, lo leggo"; "la pizza, la mangio". "La" with a capital is you (Lei): "La ringrazio" (thank you, formal).`,
          `The pronoun goes right before the conjugated verb, after "non": "Non la conosco". Before a vowel or an "h", "lo" and "la" usually elide: "L'aspetto" (I'm waiting for him/her), "L'ho comprato". "Li" and "le" don't.`,
        ],
        table: {
          headers: ["Pronoun", "Meaning", "Example"],
          rows: [
            ["mi", "me", "Mi senti?"],
            ["ti", "you", "Ti chiamo dopo."],
            ["lo", "him, it (m.)", "Il caffè? Lo prendo amaro."],
            ["la", "her, it (f.)", "La macchina? La uso poco."],
            ["La", "you (Lei)", "La aspetto alle tre, dottore."],
            ["ci", "us", "Ci accompagni?"],
            ["vi", "you (voi)", "Vi vedo stanchi."],
            ["li", "them (m.)", "I biglietti? Li ho io."],
            ["le", "them (f.)", "Le chiavi? Le cerco da un'ora."],
          ],
        },
        examples: [
          { it: "Dov'è Paolo? Non lo vedo.", en: "Where's Paolo? I can't see him." },
          { it: "Questa giacca mi piace. La prendo.", en: "I like this jacket. I'll take it." },
          { it: "I tuoi genitori? Li conosco bene.", en: "Your parents? I know them well." },
          { it: "Ti aspetto davanti al cinema.", en: "I'll wait for you in front of the movie theater." },
          { it: "Arrivederci, La chiamo domani.", en: "Goodbye, I'll call you tomorrow." },
        ],
      },
      {
        heading: `In the past: "l'ho vista", "li ho presi"`,
        body: [
          `With "avere", the past participle normally never changes. But when "lo", "la", "li" or "le" comes before it, the participle agrees with the pronoun: "Hai visto Maria? Sì, l'ho vista." "Le chiavi? Le ho prese io." "I biglietti? Li ho comprati ieri."`,
          `The agreement is required with "la", "li", "le", and it is how listeners know what "l'" stands for: "L'ho visto" (him, it) vs "L'ho vista" (her). With "mi", "ti", "ci", "vi" it is optional: "Ci ha visto" or "Ci ha visti".`,
        ],
        examples: [
          { it: "La torta? L'ho fatta io.", en: "The cake? I made it." },
          { it: "Hai sentito le notizie? Sì, le ho sentite.", en: "Did you hear the news? Yes, I heard it." },
          { it: "Dove sono i ragazzi? Li ho lasciati al parco.", en: "Where are the kids? I left them at the park." },
          { it: "Non l'ho ancora letto.", en: "I haven't read it yet." },
        ],
      },
      {
        heading: `"Lo" for a whole idea, and "ecco"`,
        body: [
          `"Lo" can stand for a whole sentence or idea: "Non lo so" (I don't know), "Lo so" (I know), "Lo sapevo!" (I knew it!), "Te lo prometto" (I promise you). English often has nothing here; Italian needs the "lo".`,
          `With an infinitive the pronoun attaches to the end ("Voglio vederlo", "È difficile capirla"), and with "ecco" too: "Eccolo!" (here it is, here he is), "Eccole!" (here they are).`,
        ],
        examples: [
          { it: "Dov'è la stazione? Non lo so, mi dispiace.", en: "Where's the station? I don't know, sorry." },
          { it: "Lo sapevo che eri tu!", en: "I knew it was you!" },
          { it: "Le chiavi? Eccole!", en: "The keys? Here they are!" },
          { it: "Devo finirlo entro venerdì.", en: "I have to finish it by Friday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Compro lo.",
        right: "Lo compro.",
        why: `The pronoun goes before a conjugated verb.`,
      },
      {
        wrong: "Hai visto Anna? Sì, l'ho visto.",
        right: "Hai visto Anna? Sì, l'ho vista.",
        why: `With "la" before the verb the participle agrees: "vista".`,
      },
      {
        wrong: "Le chiavi? Le ho preso.",
        right: "Le chiavi? Le ho prese.",
        why: `"Le" before "avere" makes the participle feminine plural.`,
      },
      {
        wrong: "Non so.",
        right: "Non lo so.",
        why: `Italians say "non lo so", with "lo" standing for the answer you don't know.`,
      },
      {
        wrong: "Li ho l'ho comprati.",
        right: "Li ho comprati.",
        why: `One pronoun per object. "Li" already stands for the things you bought.`,
      },
    ],
    faqs: [
      {
        q: `How do I know whether "l'ho visto" means him or it?`,
        a: `From context, as with English it. "L'ho visto" can be I saw him or I saw it (a film, the bus). "L'ho vista" can be I saw her or I saw it, if "it" is a feminine noun like "la partita".`,
      },
      {
        q: `Which verbs take a direct object in Italian but not in English?`,
        a: `"Aspettare" (to wait for: "Ti aspetto"), "cercare" (to look for: "Lo cerco"), "ascoltare" (to listen to: "Ascoltami!"), "guardare" (to look at: "Guardala"), "pagare" (to pay for: "Lo pago io").`,
      },
      {
        q: `And the other way round?`,
        a: `"Telefonare a" (to phone), "rispondere a" (to answer), "chiedere a" (to ask), "dire a" (to tell) take an indirect object: "Gli telefono", "Le rispondo". See the guide to indirect pronouns.`,
      },
    ],
    related: ["pronouns", "indirect-object-pronouns", "combined-pronouns", "ne"],
    lessons: [
      "a2-direct-pronouns-1",
      "a2-direct-pronouns-2",
      "a2-direct-pronouns-past",
      "a2-direct-pronouns-infinitive",
      "a2-drill-direct-pronouns",
      "a2-drill-pronoun-agreement",
      "a2-contrast-lo-la-li-le",
      "a2-error-hunt-direct-pronouns",
      "a2-sound-pronouns-at-speed",
    ],
  },
  {
    slug: "indirect-object-pronouns",
    title: "Gli, Le, Mi, Ti: Indirect Object Pronouns",
    description:
      "The indirect object pronouns mi, ti, gli, le, Le, ci, vi, gli (loro): to whom, for whom, the verbs that take them (telefonare, dire, chiedere, piacere), and lo or gli.",
    level: "A2",
    intro: [
      `An indirect object answers the question to whom? or for whom?: "Scrivo a Marco" (I write to Marco). The pronoun replaces "a" + the person: "Gli scrivo". Italian puts it before the verb, like the direct pronouns, and it never takes a preposition.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `"Gli" is to him, "le" to her, "Le" to you (Lei). In the plural, "gli" is the normal everyday form for to them, for men and women alike: "I miei genitori? Gli telefono ogni sera." Formal writing uses "loro" after the verb: "Telefono loro".`,
          `"Mi", "ti", "ci", "vi" are the same as the direct forms. "Gli" never elides, and "le" rarely does: "Gli ho parlato", "Le ho scritto".`,
        ],
        table: {
          headers: ["Pronoun", "Meaning", "Example"],
          rows: [
            ["mi", "to me", "Mi dici la verità?"],
            ["ti", "to you", "Ti mando le foto."],
            ["gli", "to him", "Gli ho regalato un libro."],
            ["le", "to her", "Le ho scritto una mail."],
            ["Le", "to you (Lei)", "Le posso offrire un caffè?"],
            ["ci", "to us", "Ci hanno dato una mano."],
            ["vi", "to you (voi)", "Vi spiego tutto."],
            ["gli (loro)", "to them", "Gli telefono domani."],
          ],
        },
        examples: [
          { it: "Cosa regali a tua madre? Le regalo dei fiori.", en: "What are you giving your mother? I'm giving her some flowers." },
          { it: "Hai risposto a Luca? No, gli rispondo stasera.", en: "Have you answered Luca? No, I'll answer him tonight." },
          { it: "Mi passi il sale?", en: "Could you pass me the salt?" },
          { it: "Signora, Le porto il menù.", en: "Madam, I'll bring you the menu." },
          { it: "I clienti aspettano: gli mando il preventivo oggi.", en: "The clients are waiting: I'm sending them the estimate today." },
        ],
      },
      {
        heading: `Verbs that take an indirect object`,
        body: [
          `Verbs of giving and communicating take "a" + person, so they take an indirect pronoun: "dare", "regalare", "mandare", "prestare", "dire", "chiedere", "rispondere", "telefonare", "scrivere", "spiegare", "insegnare". Several take a direct object in English: "Gli telefono" (I'll call him), "Le chiedo" (I'll ask her).`,
          `Verbs like "piacere", "mancare", "servire", "sembrare", "interessare" also use indirect pronouns for the person: "Gli piace il jazz", "Le manca la famiglia". In the past the participle agrees with the subject, not with the pronoun: "Le è piaciuto il film".`,
        ],
        examples: [
          { it: "Ho chiesto a Sara di venire. Le ho chiesto di venire.", en: "I asked Sara to come. I asked her to come." },
          { it: "Gli ho spiegato la strada.", en: "I explained the way to him." },
          { it: "Ci serve una macchina più grande.", en: "We need a bigger car." },
          { it: "Non le sembra strano?", en: "Doesn't it seem strange to her?" },
        ],
      },
      {
        heading: `"Lo" or "gli"? "La" or "le"?`,
        body: [
          `Look at the Italian verb, not the English one. If the verb takes a direct object ("vedere qualcuno", "aiutare qualcuno", "aspettare qualcuno"), use "lo, la, li, le". If it takes "a" + person ("telefonare a", "parlare a", "dire a"), use "gli, le".`,
          `Remember the participle: it agrees with a direct "la" ("L'ho vista") but never with an indirect "le" ("Le ho parlato").`,
        ],
        table: {
          headers: ["Direct (lo, la)", "Indirect (gli, le)"],
          rows: [
            ["vedere: la vedo", "telefonare a: le telefono"],
            ["aiutare: lo aiuto", "parlare a: gli parlo"],
            ["aspettare: la aspetto", "rispondere a: le rispondo"],
            ["chiamare: lo chiamo", "scrivere a: gli scrivo"],
            ["ringraziare: la ringrazio", "dire a: le dico"],
          ],
        },
        examples: [
          { it: "Vedo Chiara domani e le do il pacco.", en: "I'm seeing Chiara tomorrow and I'll give her the parcel." },
          { it: "Lo aiuto con i compiti.", en: "I help him with his homework." },
          { it: "La chiamo e le dico tutto.", en: "I'll call her and tell her everything." },
          { it: "Le ho parlato ieri.", en: "I spoke to her yesterday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "La telefono stasera.",
        right: "Le telefono stasera.",
        why: `"Telefonare a" takes an indirect object: to her is "le".`,
      },
      {
        wrong: "Gli aiuto con la valigia.",
        right: "Lo aiuto con la valigia.",
        why: `"Aiutare" takes a direct object: "lo".`,
      },
      {
        wrong: "Ho dato a lui un regalo.",
        right: "Gli ho dato un regalo.",
        why: `"A lui" is correct but only for emphasis ("a lui, non a lei"); the normal form is "gli".`,
      },
      {
        wrong: "Le ho parlata ieri.",
        right: "Le ho parlato ieri.",
        why: `The participle never agrees with an indirect pronoun.`,
      },
      {
        wrong: "Gli ho chiamato.",
        right: "L'ho chiamato.",
        why: `"Chiamare" takes a direct object.`,
      },
    ],
    faqs: [
      {
        q: `Isn't "gli" for them wrong?`,
        a: `No. It has been standard in speech for centuries and is accepted in most writing today. "Loro" after the verb ("Ho scritto loro") is the formal alternative.`,
      },
      {
        q: `How do I say to him, not to her?`,
        a: `For contrast use the stressed form after the verb: "Ho scritto a lui, non a lei." Otherwise the unstressed "gli" or "le" before the verb is normal.`,
      },
      {
        q: `What about "Le" for you?`,
        a: `"Le" (capital L in writing) is to you when you use "Lei": "Le auguro una buona giornata", "Posso chiederLe una cosa?". It is the formal partner of "ti".`,
      },
    ],
    related: ["direct-object-pronouns", "pronouns", "piacere", "combined-pronouns"],
    lessons: [
      "a1-ti-gli-le-piace",
      "a2-indirect-pronouns-1",
      "a2-indirect-pronouns-2",
      "a2-verbs-like-piacere",
      "a2-drill-indirect-pronouns",
      "a2-contrast-direct-indirect",
      "a2-drill-direct-indirect-mixed",
      "a2-error-hunt-indirect",
      "a2-sound-gli-li",
    ],
  },
  {
    slug: "future-tense",
    title: "Parlerò, Andrò, Sarà: The Future Tense",
    description:
      "The futuro semplice: regular endings, the -care / -giare spellings, the irregular stems (andrò, sarò, avrò, verrò, vorrò), when Italians use the present instead, quando and se with the future, and the future of probability (sarà a casa).",
    level: "A2",
    intro: [
      `Italian has a one-word future: "parlerò" (I will speak), "partiremo" (we will leave). It is regular in its endings, and its irregular verbs follow a couple of patterns. But Italians use it less than English speakers expect: for plans in the near future the present is enough ("Domani parto").`,
      `The future also has a second job that English handles with must: guessing. "Sarà stanco" means he must be tired.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `Take the infinitive, drop the final "-e", and add "-ò", "-ai", "-à", "-emo", "-ete", "-anno". "-Are" verbs change their "a" to "e": "parlare" becomes "parler-ò". So all three groups share one set of endings: "parlerò", "prenderò", "dormirò". The stress always falls on the ending in "io" and "lui/lei" forms, which carry an accent: "parlerò", "parlerà".`,
          `Spelling: "-care" and "-gare" add an "h" ("cercherò", "pagherò"); "-ciare" and "-giare" lose the "i" ("comincerò", "mangerò").`,
        ],
        table: {
          headers: ["", "parlare", "prendere", "partire"],
          rows: [
            ["io", "parlerò", "prenderò", "partirò"],
            ["tu", "parlerai", "prenderai", "partirai"],
            ["lui, lei, Lei", "parlerà", "prenderà", "partirà"],
            ["noi", "parleremo", "prenderemo", "partiremo"],
            ["voi", "parlerete", "prenderete", "partirete"],
            ["loro", "parleranno", "prenderanno", "partiranno"],
          ],
        },
        examples: [
          { it: "L'anno prossimo studierò a Firenze.", en: "Next year I'll study in Florence." },
          { it: "A che ora arriverete?", en: "What time will you arrive?" },
          { it: "Domani pioverà al Nord.", en: "Tomorrow it will rain in the North." },
          { it: "Ti pagherò la settimana prossima.", en: "I'll pay you next week." },
        ],
      },
      {
        heading: `Irregular stems`,
        body: [
          `Irregular verbs keep the regular endings but shorten or change the stem. Some drop a vowel: "andare: andrò", "avere: avrò", "dovere: dovrò", "potere: potrò", "sapere: saprò", "vedere: vedrò", "vivere: vivrò". Some double the "r": "volere: vorrò", "venire: verrò", "tenere: terrò", "rimanere: rimarrò", "bere: berrò". "Essere" becomes "sarò", and "fare", "dare", "stare" keep their "a": "farò", "darò", "starò".`,
        ],
        table: {
          headers: ["Infinitive", "Future (io)", "Infinitive", "Future (io)"],
          rows: [
            ["essere", "sarò", "volere", "vorrò"],
            ["avere", "avrò", "venire", "verrò"],
            ["andare", "andrò", "rimanere", "rimarrò"],
            ["potere", "potrò", "bere", "berrò"],
            ["dovere", "dovrò", "fare", "farò"],
            ["vedere", "vedrò", "stare", "starò"],
          ],
        },
        examples: [
          { it: "Sarò a casa dopo le otto.", en: "I'll be home after eight." },
          { it: "Verrai alla festa?", en: "Will you come to the party?" },
          { it: "Non potremo venire, purtroppo.", en: "We won't be able to come, unfortunately." },
          { it: "Cosa farete quest'estate?", en: "What will you do this summer?" },
        ],
      },
      {
        heading: `Future or present? "Quando" and "se"`,
        body: [
          `For fixed plans and timetables in the near future, Italians use the present: "Stasera esco con Marta", "Il treno parte alle 7". The future sounds more like a prediction, a promise or a plan that is further off or less certain: "Un giorno vivrò in Italia", "Te lo prometto, ti chiamerò".`,
          `After "quando" and "se" about the future, Italian uses the future where English uses the present: "Quando arriverò, ti chiamerò" (when I arrive, I'll call you). In casual speech the present also appears after "se": "Se piove, restiamo a casa".`,
        ],
        examples: [
          { it: "Domani vado dal medico.", en: "I'm going to the doctor's tomorrow." },
          { it: "Quando finirò l'università, cercherò lavoro all'estero.", en: "When I finish university, I'll look for work abroad." },
          { it: "Se avrai tempo, passerai da me?", en: "If you have time, will you drop by?" },
          { it: "Prima o poi imparerò a cucinare.", en: "Sooner or later I'll learn to cook." },
        ],
      },
      {
        heading: `The future of probability`,
        body: [
          `The future also expresses a guess about the present: "Dov'è Luca? Sarà al lavoro" (he must be at work, he's probably at work). "Che ore sono? Saranno le tre" (it must be about three). Italians use this constantly; it is not about the future at all.`,
        ],
        examples: [
          { it: "Non risponde: sarà ancora in riunione.", en: "He isn't answering: he must still be in the meeting." },
          { it: "Quanti anni avrà? Ne avrà quaranta.", en: "How old do you think he is? He must be forty." },
          { it: "Avrai fame, vero?", en: "You must be hungry, right?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Io anderò a Roma.",
        right: "Io andrò a Roma.",
        why: `"Andare" has a shortened stem: "andrò".`,
      },
      {
        wrong: "Quando arrivo a Roma, ti chiamerò.",
        right: "Quando arriverò a Roma, ti chiamerò.",
        why: `After "quando" about the future, Italian uses the future in both parts.`,
      },
      {
        wrong: "Mangierò alle otto.",
        right: "Mangerò alle otto.",
        why: `"-giare" and "-ciare" verbs drop the "i": "mangerò", "comincerò".`,
      },
      {
        wrong: "Io pagerò il conto.",
        right: "Io pagherò il conto.",
        why: `"-gare" and "-care" verbs add an "h": "pagherò", "cercherò".`,
      },
      {
        wrong: "Lui parlera domani.",
        right: "Lui parlerà domani.",
        why: `The "io" and "lui/lei" forms are stressed on the last vowel and carry an accent: "parlerò", "parlerà".`,
      },
    ],
    faqs: [
      {
        q: `Is there a going to future?`,
        a: `No special form. Use the present for plans ("Stasera guardo un film"), "avere intenzione di" for intentions ("Ho intenzione di cambiare casa"), and "stare per" for something about to happen ("Sta per piovere").`,
      },
      {
        q: `How do I tell "parleremo" from "parleremmo"?`,
        a: `"Parleremo" (one m) is the future: we will speak. "Parleremmo" (double m) is the conditional: we would speak. Hold the double m when you say it.`,
      },
      {
        q: `What is "avrò finito"?`,
        a: `The future perfect: I will have finished. It is common after "quando" and "dopo che" ("Quando avrò finito, uscirò") and for guesses about the past ("Avrà perso il treno"). It is taught at the Intermediate level.`,
      },
    ],
    related: ["conditional", "future-perfect", "time-expressions", "if-sentences-real"],
    lessons: [
      "a2-future-regular",
      "a2-future-irregular",
      "a2-future-or-present",
      "a2-future-of-probability",
      "a2-drill-future-forms",
      "a2-quando-se-future",
      "a2-drill-future-in-context",
      "a2-sound-future-stress",
      "a2-error-hunt-future",
    ],
  },
  {
    slug: "comparatives-and-superlatives",
    title: "Più ... Di, Più ... Che, Il Più: Comparisons",
    description:
      "How to compare in Italian: più / meno ... di or che, (così) ... come and tanto ... quanto, the superlative il più ... di, -issimo, and migliore, peggiore, maggiore and minore.",
    level: "A2",
    intro: [
      `To compare two things Italian uses "più" (more) and "meno" (less), with the adjective in between: "Roma è più grande di Firenze." There is no -er ending like bigger: "più grande" for every adjective, short or long.`,
      `The tricky part is the word for than: sometimes "di", sometimes "che". The rule is simple once you see what is being compared.`,
    ],
    sections: [
      {
        heading: `More than, less than: "di" or "che"?`,
        body: [
          `Use "di" when you compare two people or things (nouns or pronouns) on one quality: "Luca è più alto di Marco", "Il treno è meno caro dell'aereo", "Sei più bravo di me". "Di" merges with the article: "del", "della", "dei".`,
          `Use "che" when you compare two qualities, two actions, two quantities or two places with a preposition: "È più bello che utile" (more beautiful than useful), "Preferisco camminare che prendere l'autobus", "Ci sono più turisti che abitanti", "Fa più caldo a Palermo che a Milano".`,
        ],
        table: {
          headers: ["What you compare", "Than", "Example"],
          rows: [
            ["two people or things", "di", "Anna è più giovane di Sara."],
            ["with a pronoun", "di", "Lui è più alto di me."],
            ["two adjectives", "che", "È più simpatico che bello."],
            ["two verbs", "che", "Mi piace più leggere che guardare la TV."],
            ["two nouns as quantities", "che", "Bevo più acqua che vino."],
            ["two phrases with a preposition", "che", "Si mangia meglio a Bologna che a Londra."],
          ],
        },
        examples: [
          { it: "Milano è più cara di Napoli.", en: "Milan is more expensive than Naples." },
          { it: "Il film è meno interessante del libro.", en: "The movie is less interesting than the book." },
          { it: "È più facile parlare che scrivere.", en: "It's easier to speak than to write." },
          { it: "In questa classe ci sono più ragazze che ragazzi.", en: "There are more girls than boys in this class." },
        ],
      },
      {
        heading: `As ... as, and the most`,
        body: [
          `Equality uses "come" or "quanto": "Marco è alto come suo padre", "È (tanto) bravo quanto te". "Così" and "tanto" in front are optional and usually dropped. With nouns, "tanto" agrees: "Ho tanti libri quanti dischi".`,
          `The superlative (the most) is the article + "più" + adjective, and "of" or "in" is "di": "È il ristorante più buono della città" (the best restaurant in town), "la persona più simpatica del gruppo". The article goes before the noun, "più" after it.`,
          `To say very or extremely, add "-issimo" to the adjective, which then agrees: "bello, bellissimo, bellissima"; "caro, carissimi". It is everywhere in Italian: "Grazie mille, sei gentilissima!"`,
        ],
        examples: [
          { it: "Il mio appartamento è grande come il tuo.", en: "My apartment is as big as yours." },
          { it: "È la città più bella d'Italia.", en: "It's the most beautiful city in Italy." },
          { it: "È lo studente meno puntuale della classe.", en: "He's the least punctual student in the class." },
          { it: "La cena era buonissima.", en: "Dinner was delicious." },
        ],
      },
      {
        heading: `Better, worse, older, younger`,
        body: [
          `"Buono" and "cattivo" have irregular forms besides the regular ones: "migliore" (better), "peggiore" (worse), "il migliore" (the best), "il peggiore" (the worst). "Grande" and "piccolo" have "maggiore" and "minore" for age and importance: "mio fratello maggiore" (my older brother), "la sorella minore".`,
          `Adverbs are different: "bene" becomes "meglio" (better) and "male" becomes "peggio" (worse). "Migliore" describes a noun ("un lavoro migliore"); "meglio" describes a verb or follows "essere" impersonally ("Lavora meglio", "È meglio partire presto").`,
        ],
        table: {
          headers: ["Base", "Comparative", "Superlative"],
          rows: [
            ["buono", "migliore (più buono)", "il migliore, ottimo"],
            ["cattivo", "peggiore (più cattivo)", "il peggiore, pessimo"],
            ["grande", "maggiore (più grande)", "il maggiore, massimo"],
            ["piccolo", "minore (più piccolo)", "il minore, minimo"],
            ["bene", "meglio", "benissimo"],
            ["male", "peggio", "malissimo"],
          ],
        },
        examples: [
          { it: "Questa pizza è migliore di quella di ieri.", en: "This pizza is better than yesterday's." },
          { it: "Oggi mi sento meglio.", en: "I feel better today." },
          { it: "Mia sorella minore vive a Bari.", en: "My younger sister lives in Bari." },
          { it: "È il peggior film dell'anno.", en: "It's the worst movie of the year." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Roma è più grande che Milano.",
        right: "Roma è più grande di Milano.",
        why: `Two places compared on one quality take "di".`,
      },
      {
        wrong: "È più bello di utile.",
        right: "È più bello che utile.",
        why: `Two adjectives compared take "che".`,
      },
      {
        wrong: "È più migliore.",
        right: "È migliore.",
        why: `"Migliore" already means better; don't add "più".`,
      },
      {
        wrong: "Parli italiano migliore di me.",
        right: "Parli italiano meglio di me.",
        why: `How you speak is an adverb: "meglio". "Migliore" describes nouns.`,
      },
      {
        wrong: "È la più bella città in Italia.",
        right: "È la città più bella d'Italia.",
        why: `The superlative usually puts "più" after the noun, and in is "di".`,
      },
    ],
    faqs: [
      {
        q: `"Più buono" or "migliore"?`,
        a: `Both are correct. "Più buono" is common for food and kind people ("più buono del tiramisù"); "migliore" is more common for quality in general ("una scelta migliore").`,
      },
      {
        q: `How do I say more and more?`,
        a: `"Sempre più": "Fa sempre più caldo", "Ci sono sempre più turisti". Less and less is "sempre meno".`,
      },
      {
        q: `How do I say than I thought?`,
        a: `"Di quanto" + verb: "È più difficile di quanto pensassi" (with the subjunctive) or, in speech, "più difficile di quello che pensavo".`,
      },
    ],
    related: ["adjectives-and-agreement", "articulated-prepositions"],
    lessons: [
      "a2-comparatives-di",
      "a2-comparatives-che",
      "a2-equality",
      "a2-superlatives",
      "a2-irregular-comparatives",
      "a2-drill-comparatives",
      "a2-contrast-di-che",
      "a2-error-hunt-comparisons",
      "a2-sound-issimo",
    ],
  },
  {
    slug: "imperative",
    title: "Parla! Non Parlare! Scusi! The Imperative",
    description:
      "Commands for tu, noi, voi and Lei: the regular forms, the negative non + infinitive, the short irregulars va', fa', da', di', sta', pronouns attached (dimmi, fallo) or before Lei (mi dica), and infinitive instructions on signs.",
    level: "A2",
    intro: [
      `You hear the imperative all day in Italy: "Senti!", "Guarda!", "Dai!", "Scusi!", "Prego, si accomodi". It gives orders, but much more often it gives directions, advice, instructions and invitations, and with "per favore" it is perfectly polite.`,
      `There are two sets of forms: the informal ones (tu, noi, voi), which mostly look like the present, and the formal one (Lei), which borrows the subjunctive.`,
    ],
    sections: [
      {
        heading: `Tu, noi, voi`,
        body: [
          `The "noi" and "voi" forms are the same as the present: "Andiamo!" (let's go), "Mangiate!". The "tu" form of "-ere" and "-ire" verbs is also the present ("Prendi!", "Senti!", "Finisci!"), but "-are" verbs end in "-a": "Parla!", "Guarda!", "Aspetta!", "Mangia!".`,
          `The negative for "tu" is "non" + infinitive: "Non parlare!", "Non toccare!", "Non preoccuparti!". "Noi" and "voi" just add "non": "Non andiamo", "Non correte".`,
          `Five short verbs have one-syllable "tu" forms: "va'" (andare), "fa'" (fare), "da'" (dare), "sta'" (stare), "di'" (dire). Speech often uses the present instead ("vai", "fai", "dai", "stai"). "Essere" and "avere" are irregular: "sii", "siate" and "abbi", "abbiate" ("Sii paziente!").`,
        ],
        table: {
          headers: ["", "guardare", "prendere", "sentire", "finire"],
          rows: [
            ["tu", "guarda", "prendi", "senti", "finisci"],
            ["tu, negative", "non guardare", "non prendere", "non sentire", "non finire"],
            ["noi", "guardiamo", "prendiamo", "sentiamo", "finiamo"],
            ["voi", "guardate", "prendete", "sentite", "finite"],
          ],
        },
        examples: [
          { it: "Aspetta un attimo!", en: "Wait a moment!" },
          { it: "Prendi un ombrello, piove.", en: "Take an umbrella, it's raining." },
          { it: "Non dimenticare le chiavi!", en: "Don't forget the keys!" },
          { it: "Ragazzi, venite a tavola!", en: "Kids, come to the table!" },
          { it: "Andiamo al mare domenica!", en: "Let's go to the beach on Sunday!" },
        ],
      },
      {
        heading: `Lei: "Scusi", "Senta", "Prenda"`,
        body: [
          `The formal command uses the present subjunctive: "-are" verbs end in "-i", "-ere" and "-ire" verbs in "-a". "Scusi!" (excuse me), "Senta!" (listen, said to get attention), "Prenda pure" (go ahead, take it), "Giri a destra" (turn right). Irregular verbs build it from the "io" form of the present: "vengo: venga", "faccio: faccia", "dico: dica", "vado: vada", "esco: esca".`,
          `The negative just adds "non": "Non si preoccupi". The rare plural formal form ("Signori, vengano") is replaced by "voi" in modern Italian: "Signori, venite pure."`,
        ],
        table: {
          headers: ["Infinitive", "Tu", "Lei"],
          rows: [
            ["scusare", "scusa", "scusi"],
            ["sentire", "senti", "senta"],
            ["prendere", "prendi", "prenda"],
            ["andare", "va' / vai", "vada"],
            ["venire", "vieni", "venga"],
            ["fare", "fa' / fai", "faccia"],
            ["dire", "di'", "dica"],
            ["essere", "sii", "sia"],
            ["avere", "abbi", "abbia"],
          ],
        },
        examples: [
          { it: "Scusi, sa dov'è la fermata?", en: "Excuse me, do you know where the stop is?" },
          { it: "Vada sempre dritto e poi giri a sinistra.", en: "Go straight on and then turn left." },
          { it: "Prego, si accomodi.", en: "Please, have a seat." },
          { it: "Mi dica, signora.", en: "How can I help you, madam?" },
          { it: "Non si preoccupi, è tutto a posto.", en: "Don't worry, everything's fine." },
        ],
      },
      {
        heading: `Commands with pronouns`,
        body: [
          `With "tu", "noi" and "voi", pronouns attach to the end of the command: "Guardalo!", "Diciamoglielo", "Alzatevi!". After the one-syllable forms the consonant of the pronoun doubles: "dimmi" (tell me), "fammi vedere" (let me see), "dallo a me", "vacci" (go there), "stammi bene". The exception is "gli": "digli".`,
          `In the negative "tu" form, the pronoun can attach to the infinitive or go before it: "Non dirlo!" or "Non lo dire!". With "Lei", pronouns always go before: "Mi dica", "Si sieda", "Lo prenda pure".`,
        ],
        examples: [
          { it: "Dimmi la verità!", en: "Tell me the truth!" },
          { it: "Fammi un favore.", en: "Do me a favor." },
          { it: "Il pane? Compralo tu, per favore.", en: "The bread? You buy it, please." },
          { it: "Non preoccuparti!", en: "Don't worry!" },
          { it: "Si sieda, il dottore arriva subito.", en: "Have a seat, the doctor will be right with you." },
        ],
      },
      {
        heading: `Instructions with the infinitive`,
        body: [
          `Signs, recipes, forms and instructions for the general public use the infinitive instead of the imperative: "Spingere" (push), "Non fumare" (no smoking), "Agitare prima dell'uso" (shake before use), "Cuocere per dieci minuti". You will see these everywhere, but don't use them to speak to a person.`,
        ],
        examples: [
          { it: "Tirare la maniglia in caso di emergenza.", en: "Pull the handle in an emergency." },
          { it: "Non oltrepassare la linea gialla.", en: "Do not cross the yellow line." },
          { it: "Aggiungere il sale e mescolare.", en: "Add the salt and stir." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Non parla!",
        right: "Non parlare!",
        why: `The negative "tu" command is "non" + infinitive.`,
      },
      {
        wrong: "Scusa, signora, dov'è il Duomo?",
        right: "Scusi, signora, dov'è il Duomo?",
        why: `To someone you call "Lei", use the formal form "scusi".`,
      },
      {
        wrong: "Marco, mangi la pasta!",
        right: "Marco, mangia la pasta!",
        why: `The "tu" command of "-are" verbs ends in "-a". "Mangi" is the Lei form.`,
      },
      {
        wrong: "Dime tutto!",
        right: "Dimmi tutto!",
        why: `After "di'", "fa'", "da'", "va'", "sta'" the pronoun doubles its consonant: "dimmi", "fammi".`,
      },
      {
        wrong: "Dicami, signore.",
        right: "Mi dica, signore.",
        why: `With "Lei" the pronoun goes before the verb.`,
      },
    ],
    faqs: [
      {
        q: `Is the imperative rude?`,
        a: `No. Italians use it naturally for directions, invitations and advice: "Prendi un altro biscotto!", "Venga pure". Tone and "per favore" do the rest. For requests to strangers, a question with "potrebbe" is softer.`,
      },
      {
        q: `What does "Dai!" mean?`,
        a: `Literally give!, but as an interjection it means come on!, both to encourage ("Dai, ce la fai!") and to protest ("Ma dai!", no way!).`,
      },
      {
        q: `What is "pure" in "Entri pure"?`,
        a: `It softens a command into a permission: go ahead. "Prego, entri pure", "Prendi pure".`,
      },
    ],
    related: ["pronoun-position", "direct-object-pronouns", "reflexive-verbs", "present-subjunctive"],
    lessons: [
      "a2-imperative-tu",
      "a2-imperative-noi-voi",
      "a2-imperative-negative",
      "a2-imperative-irregular",
      "a2-drill-imperative-forms",
      "a2-imperative-pronouns",
      "a2-drill-imperative-pronouns",
      "a2-sound-dimmi-fammi",
      "a2-error-hunt-imperative",
      "a2-imperative-lei",
      "a2-imperative-lei-irregular",
      "a2-imperative-lei-pronouns",
      "a2-drill-lei-imperative",
      "a2-infinitive-instructions",
      "a2-contrast-tu-lei-commands",
      "a2-drill-tu-lei-mixed",
      "a2-error-hunt-lei-commands",
      "a2-reading-lab-signs",
    ],
  },
  {
    slug: "conditional",
    title: "Vorrei, Potrei, Dovresti: The Conditional",
    description:
      "The present conditional (parlerei, sarei, vorrei), its stems shared with the future, and its uses: polite requests, advice with dovresti, wishes with mi piacerebbe, and parleremo vs parleremmo.",
    level: "A2",
    intro: [
      `The conditional is the would form: "Parlerei" (I would speak), "Andrei" (I would go). You already know its most famous form, "vorrei" (I would like). Italians use it to be polite, to give advice, to talk about wishes, and, as in English, in sentences with if.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `The conditional uses the same stem as the future ("parler-", "prender-", "sar-", "andr-", "vorr-") with the endings "-ei", "-esti", "-ebbe", "-emmo", "-este", "-ebbero". If you know a verb's future, you know its conditional: "farò, farei"; "verrò, verrei"; "potrò, potrei".`,
          `Watch the "noi" form: the conditional has a double m ("parleremmo", we would speak), the future a single one ("parleremo", we will speak). The difference is in the pronunciation too.`,
        ],
        table: {
          headers: ["", "parlare", "essere", "volere", "potere"],
          rows: [
            ["io", "parlerei", "sarei", "vorrei", "potrei"],
            ["tu", "parleresti", "saresti", "vorresti", "potresti"],
            ["lui, lei, Lei", "parlerebbe", "sarebbe", "vorrebbe", "potrebbe"],
            ["noi", "parleremmo", "saremmo", "vorremmo", "potremmo"],
            ["voi", "parlereste", "sareste", "vorreste", "potreste"],
            ["loro", "parlerebbero", "sarebbero", "vorrebbero", "potrebbero"],
          ],
        },
        examples: [
          { it: "Vorrei un tavolo per due.", en: "I'd like a table for two." },
          { it: "Sarebbe bello andare in Sicilia.", en: "It would be nice to go to Sicily." },
          { it: "Al tuo posto, accetterei.", en: "In your shoes, I'd accept." },
          { it: "Verreste con noi a cena?", en: "Would you come to dinner with us?" },
        ],
      },
      {
        heading: `Polite requests and advice`,
        body: [
          `The conditional softens a request: "Potrebbe chiudere la finestra?" (could you close the window?), "Mi darebbe una mano?", "Avrebbe un minuto?". At a counter, "vorrei" is the standard way to ask for something.`,
          `"Dovresti" (you should) gives advice: "Dovresti riposare". "Al tuo posto" or "Se fossi in te" (if I were you) + conditional is another common way: "Se fossi in te, chiamerei il medico."`,
        ],
        examples: [
          { it: "Scusi, potrebbe ripetere?", en: "Sorry, could you say that again?" },
          { it: "Mi presteresti la macchina?", en: "Would you lend me your car?" },
          { it: "Dovresti mangiare di più.", en: "You should eat more." },
          { it: "Non dovreste uscire con questo tempo.", en: "You shouldn't go out in this weather." },
        ],
      },
      {
        heading: `Wishes: "mi piacerebbe"`,
        body: [
          `"Mi piacerebbe" (I would like) works like "piacere": "Mi piacerebbe vivere al mare", "Ci piacerebbe conoscerti". Other wishes use "vorrei" or "sarebbe bello": "Vorrei imparare a suonare il piano."`,
          `With "se" + the imperfect subjunctive, the conditional makes hypothetical sentences: "Se avessi tempo, viaggerei di più." You will study this pattern in full later; for now, learn "se fossi in te" and "se potessi" as fixed phrases.`,
        ],
        examples: [
          { it: "Mi piacerebbe fare un viaggio in Giappone.", en: "I'd love to take a trip to Japan." },
          { it: "Ti piacerebbe venire?", en: "Would you like to come?" },
          { it: "Se potessi, partirei domani.", en: "If I could, I'd leave tomorrow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Voglio un caffè, per favore.",
        right: "Vorrei un caffè, per favore.",
        why: `"Voglio" sounds blunt when ordering. "Vorrei" or "Prendo" is the polite way.`,
      },
      {
        wrong: "Noi parleremo volentieri, ma non abbiamo tempo.",
        right: "Noi parleremmo volentieri, ma non abbiamo tempo.",
        why: `The conditional "noi" form has a double m: "parleremmo".`,
      },
      {
        wrong: "Io anderei con te.",
        right: "Io andrei con te.",
        why: `The conditional uses the same short stem as the future: "andr-".`,
      },
      {
        wrong: "Se ho tempo, verrei.",
        right: "Se ho tempo, vengo.",
        why: `A real possibility takes the present (or future); "verrei" goes with "se avessi tempo".`,
      },
      {
        wrong: "Tu dovrebbi studiare.",
        right: "Tu dovresti studiare.",
        why: `The "tu" ending is "-esti".`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between "potrei" and "posso"?`,
        a: `"Posso aprire la finestra?" is a normal request; "Potrei aprire la finestra?" is a little more polite. With strangers and in offices, the conditional is a safe choice.`,
      },
      {
        q: `How do I say I would have?`,
        a: `That's the past conditional: "avrei voluto", "sarei venuto". It comes at the Intermediate level, together with the future in the past ("Ha detto che sarebbe venuto").`,
      },
      {
        q: `Why do newspapers use the conditional?`,
        a: `To report unconfirmed news: "Il ministro sarebbe pronto a dimettersi" (the minister is reportedly ready to resign). It signals that the paper is not vouching for it.`,
      },
    ],
    related: ["future-tense", "modal-verbs", "past-conditional", "if-sentences-real"],
    lessons: [
      "a2-conditional-forms",
      "a2-conditional-irregular",
      "a2-conditional-polite",
      "a2-conditional-advice",
      "a2-conditional-wishes",
      "a2-drill-conditional-forms",
      "a2-sound-emmo-emo",
      "a2-drill-future-vs-conditional",
      "a2-error-hunt-conditional",
      "a2-mission-polite-email",
    ],
  },
  {
    slug: "ci",
    title: "Ci Vado, Ci Vuole, Ce L'Ho: The Many Jobs of Ci",
    description:
      "The pronoun ci for places (ci vado), for a + thing (ci penso, ci credo, ci riesco), in ci vuole and metterci (it takes), in ce l'ho, and as us and each other.",
    level: "A2",
    intro: [
      `"Ci" is one of the most frequent words in Italian, and it has no single English equivalent. You already know it as us ("Ci vedi?") and in "c'è" (there is). This guide covers its other jobs: there (a place already mentioned), about it after verbs with "a", and the fixed expressions "ci vuole", "metterci" and "ce l'ho".`,
    ],
    sections: [
      {
        heading: `"Ci" for places`,
        body: [
          `"Ci" replaces a place introduced by "a", "in", "da" or "su": "Vai spesso a Roma? Sì, ci vado ogni mese." "Sei mai stato in Sicilia? No, non ci sono mai stato." English often says there or nothing at all ("I go every month"), but Italian needs the "ci".`,
          `It goes before the conjugated verb, or attaches to an infinitive, a gerund or an informal command: "Devo andarci", "Andiamoci!". Before "e" it becomes "c'": "C'eravamo anche noi."`,
        ],
        examples: [
          { it: "Conosci quel bar? Sì, ci vado spesso.", en: "Do you know that bar? Yes, I go there often." },
          { it: "Quando torni in ufficio? Ci torno lunedì.", en: "When are you going back to the office? On Monday." },
          { it: "Il museo è bello, ma non ci sono ancora entrato.", en: "The museum is nice, but I haven't been inside yet." },
          { it: "Dal dentista? Ci devo andare domani.", en: "To the dentist? I have to go tomorrow." },
        ],
      },
      {
        heading: `"Ci" for "a" + thing: "ci penso", "ci credo"`,
        body: [
          `Verbs followed by "a" + a thing or an idea use "ci" to replace it: "pensare a" ("Ci penso io", I'll take care of it), "credere a" ("Non ci credo!", I don't believe it), "riuscire a" ("Non ci riesco", I can't manage it), "provare a" ("Ci provo"), "tenere a" ("Ci tengo", it matters to me), "fare caso a" ("Non ci ho fatto caso").`,
          `For people, use the stressed pronoun instead: "Penso a mia madre" becomes "Penso a lei", not "ci penso".`,
        ],
        examples: [
          { it: "Hai pensato al regalo? Sì, ci ho pensato.", en: "Have you thought about the present? Yes, I have." },
          { it: "Ha vinto la lotteria? Non ci credo!", en: "He won the lottery? I don't believe it!" },
          { it: "Apri tu la bottiglia? Io non ci riesco.", en: "Will you open the bottle? I can't do it." },
          { it: "Vieni alla mia festa, ci teniamo tutti!", en: "Come to my party, it really matters to all of us!" },
        ],
      },
      {
        heading: `It takes: "ci vuole" and "metterci"`,
        body: [
          `"Volerci" means it takes, said of the time or the things needed in general. It agrees with what is needed: "Ci vuole un'ora", "Ci vogliono due ore", "Per il tiramisù ci vogliono le uova". In the past it takes "essere": "Ci è voluta una settimana".`,
          `"Metterci" means it takes a particular person or vehicle that much time, and agrees with the person: "Ci metto venti minuti" (it takes me twenty minutes), "Quanto ci metti?", "Il treno ci mette tre ore". In the past it takes "avere": "Ci ho messo un'ora".`,
        ],
        table: {
          headers: ["", "Ci vuole / ci vogliono", "Metterci"],
          rows: [
            ["subject", "the time or thing needed", "the person or vehicle"],
            ["present", "Ci vogliono due ore.", "Ci metto due ore."],
            ["past", "Ci sono volute due ore.", "Ci ho messo due ore."],
            ["question", "Quanto ci vuole?", "Quanto ci metti?"],
          ],
        },
        examples: [
          { it: "Quanto ci vuole da qui alla stazione?", en: "How long does it take from here to the station?" },
          { it: "Ci vogliono pazienza e tempo.", en: "It takes patience and time." },
          { it: "Quanto ci mettete in macchina?", en: "How long does it take you by car?" },
          { it: "Ci ho messo tre ore a finire.", en: "It took me three hours to finish." },
        ],
      },
      {
        heading: `"Ce l'ho": have it, have got it`,
        body: [
          `When "avere" has a pronoun object ("lo", "la", "li", "le"), spoken Italian adds "ci", which becomes "ce" before the other pronoun: "Hai la patente? Sì, ce l'ho." "Hai le chiavi? No, non ce le ho." In the plural forms "li" and "le" don't elide: "ce li ho", "ce le ho".`,
          `Related fixed expressions: "farcela" (to manage, make it: "Ce la faccio!", "Non ce la faccio più") and "avercela con" (to be angry with someone).`,
        ],
        examples: [
          { it: "Hai una penna? Sì, ce l'ho.", en: "Have you got a pen? Yes, I have." },
          { it: "Hai i biglietti? No, non ce li ho.", en: "Have you got the tickets? No, I haven't." },
          { it: "Ce la fai a venire alle otto?", en: "Can you make it by eight?" },
          { it: "Non ce la faccio più!", en: "I can't take it anymore!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vai a Napoli? Sì, vado domani.",
        right: "Vai a Napoli? Sì, ci vado domani.",
        why: `"Andare" needs a destination; "ci" stands for the place already mentioned.`,
      },
      {
        wrong: "Ci vuole due ore.",
        right: "Ci vogliono due ore.",
        why: `"Volerci" agrees with what's needed: two hours is plural.`,
      },
      {
        wrong: "Io ci voglio venti minuti.",
        right: "Io ci metto venti minuti.",
        why: `When the subject is a person, use "metterci".`,
      },
      {
        wrong: "Hai la chiave? Sì, l'ho.",
        right: "Hai la chiave? Sì, ce l'ho.",
        why: `"Avere" with "lo" or "la" adds "ci" in normal speech: "ce l'ho".`,
      },
      {
        wrong: "Penso a mio padre. Ci penso spesso.",
        right: "Penso a mio padre. Penso spesso a lui.",
        why: `For people, use the stressed pronoun "a lui", "a lei".`,
      },
    ],
    faqs: [
      {
        q: `How is "ce l'ho" written in texts?`,
        a: `Standard spelling is "ce l'ho". In chats you may see "ce lo" or "ciò"; avoid them.`,
      },
      {
        q: `Is "ci" in "c'è" the same word?`,
        a: `Yes, originally there: "c'è" is there is. In "ci vuole" and "ce l'ho" the meaning has faded into a fixed part of the expression.`,
      },
      {
        q: `What about "vi" for there?`,
        a: `"Vi" can replace "ci" for places in formal writing ("vi si accede dal cortile"), but in speech and normal writing "ci" is used.`,
      },
    ],
    related: ["ne", "pronouns", "c-e-and-ci-sono", "pronominal-verbs"],
    lessons: [
      "a2-ci-places",
      "a2-ci-pensare-credere",
      "a2-ci-vuole-metterci",
      "a2-ce-l-ho",
      "a2-drill-ci",
      "a2-contrast-ci-vuole-metterci",
      "a2-error-hunt-ci",
      "a2-sound-ce-l-ho",
      "a2-spiral-ci-ne",
    ],
  },
  {
    slug: "ne",
    title: "Ne Voglio Due: The Pronoun Ne",
    description:
      "The pronoun ne for quantities (ne ho tre, ne voglio un po'), for di + something (che ne pensi?, ne parliamo), agreement in the past (ne ho mangiati tre), and ne or lo.",
    level: "A2",
    intro: [
      `"Ne" replaces a noun when you say how much or how many of it, and it replaces a phrase with "di". English usually says of it, of them, or nothing at all: "Quanti fratelli hai? Ne ho due." (I have two.) Italian can't leave it out.`,
    ],
    sections: [
      {
        heading: `"Ne" with quantities`,
        body: [
          `Whenever you give a number or a quantity without repeating the noun, use "ne": "Quante mele vuoi? Ne voglio tre." "Hai degli amici a Roma? Sì, ne ho molti." "Vuoi del vino? Sì, ne prendo un po'." "Non ne ho" means I haven't got any.`,
          `"Ne" goes before the verb like the other pronouns: "Ne compro due". Before "è" it elides: "Ce n'è uno" (there is one), "Quanti ce ne sono?".`,
        ],
        examples: [
          { it: "Quanti caffè bevi al giorno? Ne bevo tre.", en: "How many coffees do you drink a day? Three." },
          { it: "Vorrei delle pesche. Quante ne vuole?", en: "I'd like some peaches. How many would you like?" },
          { it: "Hai sigarette? No, non ne ho.", en: "Have you got any cigarettes? No, I haven't got any." },
          { it: "Di pane ce n'è ancora un po'.", en: "There's still a bit of bread." },
          { it: "Quanti anni ha tuo figlio? Ne ha sei.", en: "How old is your son? He's six." },
        ],
      },
      {
        heading: `"Ne" for "di" + something`,
        body: [
          `Verbs and phrases with "di" use "ne" to replace what follows: "parlare di" ("Ne parliamo domani", let's talk about it tomorrow), "pensare di" ("Che ne pensi?", what do you think of it?), "avere bisogno di" ("Ne ho bisogno", I need it), "avere voglia di" ("Non ne ho voglia"), "essere sicuro di" ("Ne sono sicuro").`,
          `Note the contrast with "ci": "pensare a" is to think about (have in mind), "Ci penso"; "pensare di" is to have an opinion of, "Che ne pensi?".`,
        ],
        examples: [
          { it: "Che ne pensi del nuovo sindaco?", en: "What do you think of the new mayor?" },
          { it: "È successo un disastro, ma non ne voglio parlare.", en: "Something terrible happened, but I don't want to talk about it." },
          { it: "Ti serve la macchina? Sì, ne ho bisogno stasera.", en: "Do you need the car? Yes, I need it tonight." },
          { it: "Sei sicura? Sì, ne sono sicura.", en: "Are you sure? Yes, I'm sure." },
        ],
      },
      {
        heading: `"Ne" in the past, and "ne" or "lo"?`,
        body: [
          `In compound tenses the past participle agrees with the noun that "ne" replaces: "Ho comprato delle mele. Ne ho comprate cinque." "Quante pizze avete mangiato? Ne abbiamo mangiate tre." With "ne" meaning of it or about it (no quantity), the participle doesn't change: "Ne abbiamo parlato".`,
          `"Lo", "la", "li", "le" replace the whole thing; "ne" replaces part of it. "Le mele? Le ho mangiate" (all of them). "Le mele? Ne ho mangiate due" (two of them).`,
        ],
        examples: [
          { it: "Quanti libri hai letto quest'anno? Ne ho letti dieci.", en: "How many books have you read this year? Ten." },
          { it: "La torta? L'ho mangiata tutta.", en: "The cake? I ate all of it." },
          { it: "La torta? Ne ho mangiata una fetta.", en: "The cake? I had a slice of it." },
          { it: "Ne abbiamo parlato ieri.", en: "We talked about it yesterday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quanti figli hai? Ho due.",
        right: "Quanti figli hai? Ne ho due.",
        why: `With a number and no noun, Italian needs "ne".`,
      },
      {
        wrong: "Le mele? Ne ho mangiato tre.",
        right: "Le mele? Ne ho mangiate tre.",
        why: `With a quantity, the participle agrees with the noun "ne" replaces.`,
      },
      {
        wrong: "Il vino? Lo voglio un po'.",
        right: "Il vino? Ne voglio un po'.",
        why: `Part of something is "ne"; "lo" means all of it.`,
      },
      {
        wrong: "Il film? Che ci pensi?",
        right: "Il film? Che ne pensi?",
        why: `An opinion about something is "pensare di", so "ne".`,
      },
      {
        wrong: "Ce ne è uno.",
        right: "Ce n'è uno.",
        why: `"Ne" elides before "è".`,
      },
    ],
    faqs: [
      {
        q: `Do Italians really always say "ne"?`,
        a: `Yes. "Ne ho due", "Ne voglio un chilo", "Quanti ne vuoi?" sound natural; without "ne" the sentence sounds incomplete.`,
      },
      {
        q: `What is "me ne vado"?`,
        a: `"Andarsene" is a pronominal verb meaning to leave, go away: "Me ne vado" (I'm off). "Ne" has lost its literal meaning (from there) in it. Verbs like this have their own guide at the Intermediate level.`,
      },
      {
        q: `How does "ne" combine with other pronouns?`,
        a: `It goes second, and the first pronoun changes "i" to "e": "me ne", "te ne", "ce ne", "gliene". "Ce ne sono tre" (there are three of them), "Me ne dai uno?" (will you give me one?).`,
      },
    ],
    related: ["ci", "pronouns", "direct-object-pronouns", "articulated-prepositions"],
    lessons: [
      "a2-ne-quantities",
      "a2-ne-of-about",
      "a2-ne-in-the-past",
      "a2-drill-ne",
      "a2-contrast-ne-lo",
      "a2-drill-ne-lo-mixed",
      "a2-error-hunt-ne",
      "a2-dialogue-lab-market-quantities",
    ],
  },
  {
    slug: "time-expressions",
    title: "Da, Fa, Per, Tra and Sto Mangiando: Time and Duration",
    description:
      "How to say since and for (studio qui da due anni), ago (tre giorni fa), for a finished period (per due ore), in (tra un'ora), and the progressive stare + gerund and stare per.",
    level: "A2",
    intro: [
      `English time expressions don't translate word for word. I have been living here for two years becomes "Abito qui da due anni", in the present. This guide gathers the small words of time ("da", "fa", "per", "tra") and the two "stare" constructions: "sto mangiando" (I'm eating) and "sto per uscire" (I'm about to go out).`,
    ],
    sections: [
      {
        heading: `"Da" + present: since and for`,
        body: [
          `For something that started in the past and is still going on, Italian uses the present tense with "da": "Studio italiano da sei mesi" (I've been studying Italian for six months), "Abito a Torino dal 2019" (since 2019), "Ti aspetto da un'ora!" (I've been waiting for you for an hour!). The question is "Da quanto tempo...?".`,
          `Using the passato prossimo here ("ho studiato per sei mesi") means it's over: you studied for six months and stopped.`,
        ],
        examples: [
          { it: "Da quanto tempo lavori qui? Da tre anni.", en: "How long have you been working here? For three years." },
          { it: "Ci conosciamo da quando eravamo bambini.", en: "We've known each other since we were children." },
          { it: "Non lo vedo da Natale.", en: "I haven't seen him since Christmas." },
          { it: "Piove da stamattina.", en: "It's been raining since this morning." },
        ],
      },
      {
        heading: `"Fa", "per", "tra"`,
        body: [
          `"Fa" (ago) goes after the time: "due anni fa", "poco fa", "molto tempo fa". "Per" + a length of time is for, for a finished period, usually with the passato prossimo or the future: "Ho dormito per dieci ore", "Starò a Roma per una settimana". It is often left out: "Ho aspettato un'ora".`,
          `"Tra" or "fra" + time is in, meaning from now: "Il treno parte tra cinque minuti", "Ci vediamo fra un mese". "In" + time means how long something takes: "Ho finito il lavoro in due ore".`,
        ],
        table: {
          headers: ["Italian", "English", "Example"],
          rows: [
            ["da + present", "for, since (still true)", "Vivo qui da un anno."],
            ["... fa", "ago", "Sono arrivato un'ora fa."],
            ["per", "for (closed period)", "Ho lavorato lì per due anni."],
            ["tra, fra", "in (from now)", "Arrivo tra dieci minuti."],
            ["in", "in (time taken)", "L'ho fatto in un'ora."],
          ],
        },
        examples: [
          { it: "Ho cambiato lavoro un anno fa.", en: "I changed jobs a year ago." },
          { it: "Abbiamo vissuto a Londra per cinque anni.", en: "We lived in London for five years." },
          { it: "Torno tra mezz'ora.", en: "I'll be back in half an hour." },
          { it: "Ha imparato a sciare in una settimana.", en: "He learned to ski in a week." },
        ],
      },
      {
        heading: `"Stare" + gerund and "stare per"`,
        body: [
          `"Stare" + gerund stresses an action in progress at this very moment: "Sto mangiando, ti richiamo" (I'm eating, I'll call you back). The gerund ends in "-ando" for "-are" verbs and "-endo" for the others: "parlando", "leggendo", "dormendo"; "fare" gives "facendo", "dire" "dicendo", "bere" "bevendo". In the past: "Stavo uscendo quando hai chiamato."`,
          `It is used less than the English -ing: for habits and plans, the simple present is the norm. "Cosa fai stasera?" (what are you doing tonight?), not "Cosa stai facendo stasera?".`,
          `"Stare per" + infinitive means to be about to: "Sto per uscire", "Il film sta per cominciare".`,
        ],
        examples: [
          { it: "Cosa stai facendo? Sto scrivendo una mail.", en: "What are you doing? I'm writing an email." },
          { it: "Non posso parlare, sto guidando.", en: "I can't talk, I'm driving." },
          { it: "Stavamo cenando quando è arrivato Luca.", en: "We were having dinner when Luca arrived." },
          { it: "Sbrigati, il treno sta per partire!", en: "Hurry up, the train is about to leave!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Studio italiano per due anni.",
        right: "Studio italiano da due anni.",
        why: `Something still going on takes the present with "da".`,
      },
      {
        wrong: "Ho studiato italiano da due anni.",
        right: "Studio italiano da due anni.",
        why: `I have been studying is the present in Italian, not the passato prossimo.`,
      },
      {
        wrong: "Sono arrivato fa due ore.",
        right: "Sono arrivato due ore fa.",
        why: `"Fa" comes after the time expression.`,
      },
      {
        wrong: "Parto in tre giorni.",
        right: "Parto tra tre giorni.",
        why: `In three days from now is "tra" or "fra".`,
      },
      {
        wrong: "Domani sto lavorando.",
        right: "Domani lavoro.",
        why: `Plans for the future use the simple present, not "stare" + gerund.`,
      },
    ],
    faqs: [
      {
        q: `How do I say I haven't seen her for ages?`,
        a: `"Non la vedo da secoli" or "È da tanto che non la vedo." The "è da ... che" pattern is very common: "È da un'ora che ti aspetto."`,
      },
      {
        q: `Is "stare" + gerund ever wrong?`,
        a: `It is not used with "essere" and "avere" ("sto essendo" is impossible), and rarely with states like "sapere" or "piacere". Use it only for real actions in progress.`,
      },
      {
        q: `Can I use the imperfetto with "da"?`,
        a: `Yes, for something that had been going on in the past: "Abitavo lì da due anni quando l'ho conosciuto" (I'd been living there for two years when I met him).`,
      },
    ],
    related: ["present-tense-regular-verbs", "simple-prepositions", "gerund", "past-tenses"],
    lessons: [
      "a2-da-with-present",
      "a2-fa-per-tra",
      "a2-stare-gerund",
      "a2-stare-per",
      "a2-drill-da-fa-per",
      "a2-drill-gerund",
      "a2-contrast-present-progressive",
      "a2-error-hunt-time",
      "b1-stavo-gerund-story",
    ],
  },
  {
    slug: "relative-pronouns",
    title: "Che, Cui, Chi, Dove: Relative Pronouns",
    description:
      "How to join sentences with che (who, which, that), cui after prepositions (la persona con cui parlo, il motivo per cui), dove, and chi (whoever, the person who).",
    level: "A2",
    intro: [
      `Relative pronouns link two sentences: "Ho un amico. L'amico abita a Roma" becomes "Ho un amico che abita a Roma." English chooses between who, which and that, and can leave the word out (the book I read). Italian uses "che" for people and things, and it can never be left out.`,
    ],
    sections: [
      {
        heading: `"Che": who, which, that`,
        body: [
          `"Che" works as subject or direct object, for people and things, singular and plural: "La ragazza che parla è mia sorella" (subject), "Il libro che leggo è giallo" (object), "I ragazzi che ho conosciuto ieri". It never changes.`,
          `English often drops that: the film I saw. Italian always keeps "che": "il film che ho visto". With "avere" before the participle, there is no agreement with "che" in normal usage: "la torta che ho fatto".`,
        ],
        examples: [
          { it: "Il treno che parte alle otto è un Frecciarossa.", en: "The train that leaves at eight is a Frecciarossa." },
          { it: "La signora che abita sopra di noi è molto gentile.", en: "The lady who lives above us is very kind." },
          { it: "Ti è piaciuto il film che abbiamo visto?", en: "Did you like the movie we saw?" },
          { it: "È la persona che cercavo.", en: "She's the person I was looking for." },
        ],
      },
      {
        heading: `"Cui" after a preposition`,
        body: [
          `After a preposition, "che" becomes "cui": "la persona con cui parlo" (the person I'm talking to, literally with whom), "la città in cui sono nato", "il motivo per cui ti chiamo" (the reason why I'm calling you), "l'amico a cui ho prestato la bici". English often puts the preposition at the end; Italian always puts it before "cui".`,
          `"In cui" for places can be replaced by "dove": "la casa dove abito". "Il giorno in cui" (the day when) is the usual form for time: "il giorno in cui ci siamo conosciuti".`,
        ],
        table: {
          headers: ["Preposition + cui", "Example"],
          rows: [
            ["di cui", "il libro di cui ti ho parlato"],
            ["a cui", "la collega a cui ho scritto"],
            ["da cui", "la città da cui vengo"],
            ["in cui", "il periodo in cui vivevo a Roma"],
            ["con cui", "gli amici con cui esco"],
            ["per cui", "il motivo per cui sono qui"],
            ["su cui", "la sedia su cui sei seduto"],
          ],
        },
        examples: [
          { it: "Questo è il ristorante di cui ti ho parlato.", en: "This is the restaurant I told you about." },
          { it: "È un'amica con cui parlo di tutto.", en: "She's a friend I talk to about everything." },
          { it: "Non so il motivo per cui è arrabbiato.", en: "I don't know why he's angry." },
          { it: "Ricordo il giorno in cui sono arrivata in Italia.", en: "I remember the day I arrived in Italy." },
          { it: "Il paese dove sono cresciuto è in Abruzzo.", en: "The village where I grew up is in Abruzzo." },
        ],
      },
      {
        heading: `"Chi": the person who, whoever`,
        body: [
          `"Chi" as a relative means the person who, those who, whoever, with no noun before it. It always takes a singular verb: "Chi arriva tardi non entra" (whoever arrives late doesn't get in). It is common in proverbs: "Chi cerca trova" (seek and you shall find), "Chi dorme non piglia pesci".`,
        ],
        examples: [
          { it: "Chi vuole il caffè alzi la mano.", en: "Whoever wants coffee, raise your hand." },
          { it: "C'è chi preferisce il mare e chi la montagna.", en: "Some people prefer the sea and some the mountains." },
          { it: "Non parlo con chi non conosco.", en: "I don't talk to people I don't know." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il libro ho letto è bello.",
        right: "Il libro che ho letto è bello.",
        why: `Italian never drops the relative pronoun.`,
      },
      {
        wrong: "La ragazza con che esco",
        right: "La ragazza con cui esco",
        why: `After a preposition, use "cui".`,
      },
      {
        wrong: "L'amico che ho parlato con",
        right: "L'amico con cui ho parlato",
        why: `The preposition goes before "cui", never at the end of the sentence.`,
      },
      {
        wrong: "Chi vogliono venire devono prenotare.",
        right: "Chi vuole venire deve prenotare.",
        why: `"Chi" always takes a singular verb.`,
      },
      {
        wrong: "Il ragazzo cui ho visto",
        right: "Il ragazzo che ho visto",
        why: `"Cui" needs a preposition (or is "il cui", whose); a direct object takes "che".`,
      },
    ],
    faqs: [
      {
        q: `Can I use "il quale" instead?`,
        a: `Yes, "il quale", "la quale", "i quali", "le quali" (with articulated prepositions: "con il quale", "della quale") replace "che" and "cui", mostly in formal writing or to avoid ambiguity. They come at the Intermediate level.`,
      },
      {
        q: `How do I say whose?`,
        a: `"Il cui", "la cui", "i cui", "le cui", agreeing with the thing owned: "lo scrittore il cui libro ho letto". It is mainly written.`,
      },
      {
        q: `How do I say what, as in what I want?`,
        a: `"Quello che" or "ciò che": "Quello che voglio è un po' di silenzio." Not "che" alone.`,
      },
    ],
    related: ["relative-pronouns-advanced", "questions-and-negation"],
    lessons: [
      "a2-relative-che",
      "a2-relative-cui",
      "a2-relative-dove-chi",
      "a2-drill-relatives",
      "a2-contrast-che-cui",
      "a2-error-hunt-relatives",
      "a2-reading-lab-proverbs",
      "a2-sound-relatives-at-speed",
    ],
  },
];
