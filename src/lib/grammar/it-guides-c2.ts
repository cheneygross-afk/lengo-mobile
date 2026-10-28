// Synced from cheneygross-afk/lengo:src/lib/grammar/it-guides-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ItGrammarGuide } from "./it-types";

// Italian grammar guides, C2 (see the notes at the top of ./it-types.ts).
export const IT_C2_GUIDES: ItGrammarGuide[] = [
  {
    slug: "reading-old-italian",
    title: "Nel Mezzo del Cammin: Reading Dante, Petrarca and Boccaccio",
    description:
      "How to read the Italian of the Trecento: apocopated forms (cammin, amor), old pronouns (ei, elli, lui as an object), enclitics on finite verbs, Latinate and verb-final word order in Boccaccio's prose, and how modern Italian descends from Florentine.",
    level: "C2",
    intro: [
      `Modern Italian is remarkably close to the Florentine of the 14th century. An educated Italian can read Dante's "Nel mezzo del cammin di nostra vita" (Midway along the journey of our life) with only a few notes; an English speaker cannot say the same of Chaucer. That closeness is no accident: Italian was standardised on the model of the three great Florentine writers, Dante, Petrarca and Boccaccio, the tre corone.`,
      `What separates you from these texts is a limited set of old forms and a freer word order. Learn to recognise them and you can read the classics in the original, with a commentary at hand.`,
    ],
    sections: [
      {
        heading: `Old forms you will meet`,
        body: [
          `Words lose their final vowel or syllable (apocope), especially in verse: "cammin" (cammino), "amor" (amore), "piè" (piede), "fé" (fede), "ver" (vero). Verbs have older endings: "avea" (aveva), "fia" (sarà), "fûr" (furono), "vo'" (voglio), "dienno" (diedero).`,
          `Pronouns differ too: "ei" and "elli" for "egli", "e'" for "essi", "lui" and "lei" used only as objects or after prepositions, "vi" and "ne" often for "ci". Pronouns attach to finite verbs ("dissemi" = "mi disse") and "il" and "lo" are distributed differently ("lo cuore").`,
        ],
        table: {
          headers: ["Old form", "Modern Italian", "Meaning"],
          rows: [
            ["cammin", "cammino", "path, journey"],
            ["piè", "piede", "foot"],
            ["avea", "aveva", "had"],
            ["fia", "sarà", "will be"],
            ["vo'", "voglio", "I want"],
            ["elli, ei", "egli, lui", "he"],
            ["dissemi", "mi disse", "he said to me"],
            ["omo", "uomo", "man"],
            ["lo cuore", "il cuore", "the heart"],
          ],
        },
        examples: [
          { it: "Nel mezzo del cammin di nostra vita", en: "Midway along the journey of our life" },
          { it: "Amor, ch'a nullo amato amar perdona", en: "Love, which excuses no one who is loved from loving in return" },
          { it: "Dissemi: «Vieni.» = Mi disse: «Vieni.»", en: "He said to me: 'Come.'" },
        ],
      },
      {
        heading: `Word order in verse and in Boccaccio`,
        body: [
          `Verse moves words for rhythm and rhyme: the verb can come last, the adjective before or far from its noun, the object first. Rebuild the sentence in modern order before you translate: subject, verb, object.`,
          `Boccaccio's prose imitates Latin: long periods, participles and gerunds stacked at the start, the verb at the end of the clause ("e quivi, la notte venuta, a dormire si misero"). Find the main verb first, then attach the rest.`,
        ],
        examples: [
          { it: "Quivi, la notte venuta, a dormire si misero. → Quando venne la notte, lì si misero a dormire.", en: "There, when night came, they went to sleep." },
          { it: "Gran tempo era passato. → Era passato molto tempo.", en: "A long time had passed." },
          { it: "In Firenze fu già un mercatante assai ricco. → A Firenze c'era una volta un mercante molto ricco.", en: "In Florence there once lived a very rich merchant." },
        ],
      },
      {
        heading: `From Florentine to Italian`,
        body: [
          `Many words that survive in modern Italian with a special meaning come from Dante: "galeotto" (a go-between, from the book that brings Paolo and Francesca together), "senza infamia e senza lode" (neither good nor bad), "stai fresco" (you're in trouble, from the traitors frozen in ice).`,
          `Reading a canto or a novella, use three steps: modernise forms, reorder the syntax, then interpret. A good commented edition does the first two for you in its notes; the third is the pleasure of reading.`,
        ],
        examples: [
          { it: "Il film è senza infamia e senza lode.", en: "The film is nothing special, neither good nor bad." },
          { it: "Se pensi di finire stasera, stai fresco!", en: "If you think you'll finish tonight, you've got another think coming!" },
          { it: "Galeotto fu quel viaggio a Venezia.", en: "That trip to Venice was what brought them together." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Nel mezzo del cammino della nostra vita... (quoting Dante)",
        right: "Nel mezzo del cammin di nostra vita",
        why: `Quote the original exactly; the apocope and the missing article are part of the line.`,
      },
      {
        wrong: "Dissemi di aspettare.",
        right: "Mi disse di aspettare.",
        why: `Enclitics on finite verbs belong to old texts; modern Italian puts the pronoun before the verb.`,
      },
      {
        wrong: "Il lavoro fia pronto domani.",
        right: "Il lavoro sarà pronto domani.",
        why: `"Fia" is an archaic future of "essere": read it, never write it.`,
      },
    ],
    faqs: [
      {
        q: `Can a modern Italian really read Dante without help?`,
        a: `The general sense, often yes; the details, no. Italian students read the Commedia with notes, as you should.`,
      },
      {
        q: `Why is Florentine the basis of Italian?`,
        a: `Because of the prestige of the tre corone, reinforced in the 1500s by Pietro Bembo, who proposed Petrarca and Boccaccio as models, and later by Manzoni.`,
      },
      {
        q: `What is the terza rima?`,
        a: `Dante's verse scheme in the Commedia: three-line stanzas of hendecasyllables rhyming ABA BCB CDC, each tercet linked to the next.`,
      },
    ],
    related: ["literary-italian", "figures-of-speech-and-poetic-language", "history-of-italian"],
    lessons: [
      "c2-dante-life-and-times",
      "c2-inferno-canto-1",
      "c2-inferno-canto-5",
      "c2-old-italian-forms",
      "c2-dante-everyday-phrases",
      "c2-drill-old-to-modern",
      "c2-tuscan-standard",
      "c2-boccaccio-syntax",
      "c2-drill-trecento-reading",
      "c2-retelling-a-novella",
    ],
  },
  {
    slug: "figures-of-speech-and-poetic-language",
    title: "Troncamento, Enjambement, Ossimoro: The Language of Poetry",
    description:
      "The tools of Italian poetry: troncamento and elisione, inversion, poetic vocabulary (augelli, speme, rimembrare), the endecasillabo and settenario, and the main figures of speech (metafora, sineddoche, enjambement, ossimoro).",
    level: "C2",
    intro: [
      `Italian poetry from Petrarca to Leopardi and beyond has its own vocabulary and its own grammar of sound. Words are shortened to fit the metre ("cor", "amor"), replaced by Latinate equivalents ("speme" for hope, "augelli" for birds), and moved around to create rhythm.`,
      `To read and comment on a poem you need three things: the poetic forms, the basic metres, and the names of the figures of speech that Italian schools use in every literary commentary.`,
    ],
    sections: [
      {
        heading: `Shortening and poetic words`,
        body: [
          `"Troncamento" drops a final vowel or syllable without an apostrophe, before a consonant too: "cor", "amor", "mar", "fior", "son". "Elisione" drops a vowel before another vowel, with an apostrophe: "ch'io", "quest'ermo", "dov'era". Modern Italian keeps troncamento in fixed cases ("un amico", "buon giorno", "signor Rossi").`,
          `Poetic vocabulary prefers Latinate and older words: "speme" (speranza), "augelli" (uccelli), "rimembrare" (ricordare), "veltro" (greyhound), "desio" (desiderio), "loco" (luogo), "aere" (aria), "lume" (luce, eye), "core" or "cor" (cuore).`,
        ],
        table: {
          headers: ["Poetic", "Ordinary", "Meaning"],
          rows: [
            ["speme", "speranza", "hope"],
            ["augelli", "uccelli", "birds"],
            ["rimembrare", "ricordare", "to remember"],
            ["desio", "desiderio", "desire"],
            ["loco", "luogo", "place"],
            ["aere", "aria", "air"],
            ["lume", "luce", "light"],
            ["cor", "cuore", "heart"],
          ],
        },
        examples: [
          { it: "Sempre caro mi fu quest'ermo colle", en: "This lonely hill was always dear to me" },
          { it: "Silvia, rimembri ancora", en: "Silvia, do you still remember" },
          { it: "Il cor mi trema. = Il cuore mi trema.", en: "My heart trembles." },
        ],
      },
      {
        heading: `Metre`,
        body: [
          `Italian metre counts syllables up to the last stressed syllable plus one. The "endecasillabo" (eleven syllables, stress on the 10th) is the line of Dante, Petrarca and Leopardi; the "settenario" (seven syllables, stress on the 6th) is its lighter companion, and Leopardi's canzoni mix the two freely.`,
          `When counting, a vowel at the end of a word usually merges with the vowel that starts the next one (sinalefe): "come un" counts as two syllables, not three. "Nel mez-zo del cam-min di no-stra vi-ta" has eleven syllables.`,
        ],
        examples: [
          { it: "Nel / mez / zo / del / cam / min / di / no / stra / vi / ta (11)", en: "Eleven syllables: an endecasillabo." },
          { it: "Sem / pre / ca / ro / mi / fu / que / st'er / mo / col / le (11)", en: "Another endecasillabo, with the stress on the tenth syllable." },
        ],
      },
      {
        heading: `Figures of speech`,
        body: [
          `The figures you need for any Italian literary commentary: "metafora" (a hidden comparison: "la primavera della vita"), "similitudine" (an explicit one, with "come"), "sineddoche" (part for the whole: "le vele" for ships), "metonimia" (one thing for another linked to it: "leggere Dante" for his works), "ossimoro" (opposites joined: "un silenzio assordante"), "enjambement" (a sentence running over the end of a line), "anafora", "allitterazione", "iperbato" (inverted word order) and "sinestesia" (mixed senses: "un colore caldo").`,
          `In a commentary, name the figure, quote the words and say what it does: "l'enjambement isola la parola, che acquista rilievo".`,
        ],
        table: {
          headers: ["Figure", "Example", "Effect"],
          rows: [
            ["metafora", "la primavera della vita", "youth as spring"],
            ["sineddoche", "un tetto per tutti", "roof for house"],
            ["metonimia", "bere un bicchiere", "container for content"],
            ["ossimoro", "un silenzio assordante", "opposites joined"],
            ["sinestesia", "una voce calda", "senses mixed"],
            ["iperbato", "di nostra vita il cammin", "inverted order"],
          ],
        },
        examples: [
          { it: "C'era un silenzio assordante.", en: "There was a deafening silence." },
          { it: "Cerchiamo un tetto per tutti.", en: "We're looking for a roof over everyone's head." },
          { it: "L'enjambement spezza la frase e mette in rilievo l'ultima parola del verso.", en: "The enjambement breaks the sentence and highlights the last word of the line." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Un'amico mio",
        right: "Un amico mio",
        why: `Before a masculine noun "uno" is truncated, not elided: no apostrophe. "Un'amica" is the feminine elision.`,
      },
      {
        wrong: "Qual'è il verso più famoso?",
        right: "Qual è il verso più famoso?",
        why: `"Qual" is a troncamento, not an elision: no apostrophe.`,
      },
      {
        wrong: "Rimembro che ho chiuso la porta.",
        right: "Ricordo di aver chiuso la porta.",
        why: `"Rimembrare" is poetic; in ordinary Italian it sounds comic.`,
      },
    ],
    faqs: [
      {
        q: `How do I know when to use an apostrophe?`,
        a: `Apostrophe for elision (a vowel drops before another vowel: "l'amica", "un'amica"); none for troncamento (a form that also exists before consonants: "un amico", "qual è", "buon anno").`,
      },
      {
        q: `Is it worth learning metre?`,
        a: `For reading aloud and for literary commentary, yes: the endecasillabo is the backbone of Italian poetry, and recognising it helps you feel the rhythm.`,
      },
      {
        q: `Are these figures the same as in English?`,
        a: `Mostly, with the same Greek names. Italian schools use them heavily, so a commentary is expected to name them.`,
      },
    ],
    related: ["reading-old-italian", "rhetoric-and-persuasion", "punctuation-and-style"],
    lessons: [
      "c2-leopardi-infinito",
      "c2-leopardi-silvia",
      "c2-poetic-vocabulary",
      "c2-metre-and-figures",
      "c2-drill-poetic-language",
      "c2-other-poets",
      "c2-poetry-commentary",
      "c2-petrarca-canzoniere",
      "c2-commentary-petrarca",
      "c2-mission-write-a-poem",
    ],
  },
  {
    slug: "history-of-italian",
    title: "Bembo, the Crusca and Television: How Standard Italian Was Made",
    description:
      "The questione della lingua: Bembo and the Accademia della Crusca, Manzoni's risciacquatura in Arno, Italian at unification, the role of school and television, and the neo-standard Italian spoken today.",
    level: "C2",
    intro: [
      `For most of its history Italian was a written language. At unification in 1861, only a small minority of Italians spoke it; the rest spoke their dialects. How a literary Florentine became the everyday language of sixty million people is one of the great stories of European linguistics, and Italians still debate it as the questione della lingua.`,
      `Knowing this history explains why written Italian is so conservative, why dialects remain alive, and why today's spoken standard is drifting away from school grammar.`,
    ],
    sections: [
      {
        heading: `From Bembo to Manzoni`,
        body: [
          `In 1525 Pietro Bembo proposed Petrarca (for verse) and Boccaccio (for prose) as the models of literary Italian, against those who wanted a mixed courtly language. The Accademia della Crusca, founded in Florence in 1583, published the first great Italian dictionary in 1612, based on the Florentine authors.`,
          `In the 1800s Alessandro Manzoni rewrote "I promessi sposi" to bring its language closer to the Florentine spoken by educated people; he called it "risciacquare i panni in Arno" (rinsing his clothes in the Arno). After unification he argued that contemporary Florentine should be the national language.`,
        ],
        examples: [
          { it: "Nel 1612 l'Accademia della Crusca pubblicò il suo Vocabolario.", en: "In 1612 the Accademia della Crusca published its dictionary." },
          { it: "Manzoni volle risciacquare i panni in Arno.", en: "Manzoni wanted to rinse his clothes in the Arno." },
          { it: "Bembo indicò Petrarca e Boccaccio come modelli.", en: "Bembo named Petrarca and Boccaccio as models." },
        ],
      },
      {
        heading: `Unification, school and television`,
        body: [
          `After 1861 Italian spread through compulsory schooling, military service, migration to cities, bureaucracy and newspapers. The linguist Tullio De Mauro (1932-2017) showed how slow the process was; according to his estimates, the great majority of Italians still used dialect at home in the mid 1900s.`,
          `Radio and especially television, from 1954, brought spoken Italian into every home. A famous programme, "Non è mai troppo tardi" (1960-1968), taught reading and writing to adults on TV.`,
        ],
        examples: [
          { it: "La televisione ha contribuito a diffondere l'italiano parlato.", en: "Television helped spread spoken Italian." },
          { it: "Molti italiani impararono l'italiano a scuola o sotto le armi.", en: "Many Italians learned Italian at school or in military service." },
          { it: "Oggi quasi tutti parlano italiano, e molti anche un dialetto.", en: "Today almost everyone speaks Italian, and many speak a dialect too." },
        ],
      },
      {
        heading: `Neo-standard Italian today`,
        body: [
          `Linguists call today's educated spoken Italian the italiano neo-standard. It accepts features that school grammar once rejected: "lui", "lei", "loro" as subjects (not "egli", "ella", "essi"); "gli" for "a loro" ("gli ho detto" to several people); dislocation ("il libro l'ho letto"); "che" in place of "in cui" in time expressions ("il giorno che ti ho visto"); the indicative after some opinion verbs in speech; the imperfetto in hypotheticals ("se lo sapevo, venivo").`,
          `Some of these are now fully acceptable in writing (lui and lei as subjects, "gli" for "a loro"); others remain informal. A Mastery-level writer knows which is which.`,
        ],
        table: {
          headers: ["Feature", "Status in careful writing"],
          rows: [
            ["lui / lei / loro as subjects", "fully standard"],
            ["gli for a loro", "accepted"],
            ["dislocation: il libro l'ho letto", "accepted in relaxed prose"],
            ["il giorno che (for in cui)", "accepted in time expressions"],
            ["penso che è vero", "informal only"],
            ["se lo sapevo, venivo", "informal only"],
            ["a me mi piace", "informal only"],
          ],
        },
        examples: [
          { it: "Ho visto i tuoi genitori e gli ho detto tutto.", en: "I saw your parents and told them everything." },
          { it: "Il giorno che ci siamo conosciuti pioveva.", en: "It was raining the day we met." },
          { it: "Lui sostiene che la lingua cambi più in fretta delle regole.", en: "He maintains that language changes faster than the rules." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Manzoni scrisse la Divina Commedia.",
        right: "Dante scrisse la Divina Commedia; Manzoni scrisse I promessi sposi.",
        why: `Keep the landmarks straight: Dante, Trecento; Manzoni, Ottocento.`,
      },
      {
        wrong: "L'Accademia della Crusca è un'istituzione romana.",
        right: "L'Accademia della Crusca ha sede a Firenze.",
        why: `The Crusca was founded in Florence and is still there.`,
      },
      {
        wrong: "Gli ho detto a loro di venire.",
        right: "Gli ho detto di venire. / Ho detto loro di venire.",
        why: `Use one pronoun: "gli" (accepted) or "loro" after the verb (formal), not both.`,
      },
    ],
    faqs: [
      {
        q: `Does the Accademia della Crusca make the rules?`,
        a: `No. It studies and advises; it does not legislate. Its answers to readers' questions are a respected reference on doubtful usage.`,
      },
      {
        q: `Is neo-standard Italian "wrong"?`,
        a: `It is the language of educated speakers today. Some features are already standard in writing; others are spoken only. Knowing the difference is part of Mastery-level competence.`,
      },
      {
        q: `What does "risciacquare i panni in Arno" mean?`,
        a: `Manzoni's metaphor for revising his novel on the model of living Florentine usage: washing his language in the river of Florence.`,
      },
    ],
    related: ["reading-old-italian", "dialects-and-regional-languages", "native-errors-and-hypercorrection"],
    lessons: [
      "c2-bembo-crusca",
      "c2-manzoni-language",
      "c2-unification-and-language",
      "c2-television-and-italian",
      "c2-drill-history-of-language",
      "c2-neo-standard-today",
      "c2-reading-lab-crusca",
      "c2-debate-language-change",
      "c2-mission-language-essay",
    ],
  },
  {
    slug: "dialects-and-regional-languages",
    title: "Napoletano, Sardo, Friulano: Italy's Dialects and Languages",
    description:
      "The difference between dialect, regional language and regional Italian; the main groups (Neapolitan, Sicilian, Venetian, Milanese, Roman, Sardinian, Friulian, Ladin), their place in literature, theatre and music, and how to gloss them in standard Italian.",
    level: "C2",
    intro: [
      `The Italian "dialetti" are not dialects of Italian in the English sense. They are sister languages, descended independently from Latin, as different from Italian as Spanish is. A speaker of Venetian and a speaker of Sicilian, each using their dialect, would barely understand each other.`,
      `Some of them (Sardinian, Friulian, Ladin) are officially recognised as minority languages. All of them have literatures, theatres and songs, and many Italians still speak one at home alongside Italian.`,
    ],
    sections: [
      {
        heading: `Dialect, regional language, regional Italian`,
        body: [
          `Three levels coexist. The dialect is a separate Romance language with its own grammar (Neapolitan "'o", Venetian "xe" for "è"). Regional Italian is standard Italian coloured by local pronunciation and words. Some varieties, such as Sardinian and Friulian, are protected by law (Law 482 of 1999) as minority languages.`,
          `Linguists group the dialects into northern (Gallo-Italic and Venetian), central (Tuscan, Roman, Umbrian, Marchigiano), southern (Neapolitan, Apulian, Calabrian in part) and extreme southern (Sicilian, southern Calabrian, Salentino), with Sardinian as a group of its own.`,
        ],
        table: {
          headers: ["Group", "Examples", "Typical feature"],
          rows: [
            ["Gallo-Italic", "Milanese, Piedmontese, Emilian", "front rounded vowels, dropped final vowels"],
            ["Venetian", "Venetian, Triestine", "xe for è, many final vowels kept"],
            ["Central", "Roman, Umbrian", "close to Italian"],
            ["Southern", "Neapolitan, Apulian", "weak final vowels, articles 'o, 'a"],
            ["Extreme southern", "Sicilian, Salentino", "final -u and -i for -o and -e"],
            ["Sardinian", "Logudorese, Campidanese", "a separate Romance language"],
          ],
        },
        examples: [
          { it: "Mia nonna parla solo dialetto, ma capisce benissimo l'italiano.", en: "My grandmother speaks only dialect, but she understands Italian perfectly." },
          { it: "Il sardo è riconosciuto come lingua minoritaria.", en: "Sardinian is recognised as a minority language." },
          { it: "In Friuli molti cartelli sono bilingui, in italiano e in friulano.", en: "In Friuli many signs are bilingual, in Italian and Friulian." },
        ],
      },
      {
        heading: `Recognising the main dialects`,
        body: [
          `Neapolitan reduces final vowels to a weak sound and uses the articles "'o" and "'a" ("'o sole", the sun); "guaglione" is a boy. Sicilian has final "-u" and "-i" where Italian has "-o" and "-e" ("u figghiu", the son) and keeps the passato remoto. Venetian says "xe" for "è" and "ciao" comes from its "s-ciavo" (your servant). Milanese drops final vowels ("el bagaj", the boy) and has front rounded vowels.`,
          `You are not expected to speak a dialect, but to recognise which one you are hearing and to render a sentence in standard Italian.`,
        ],
        examples: [
          { it: "In napoletano «'o sole» significa «il sole».", en: "In Neapolitan 'o sole means the sun." },
          { it: "In veneziano «xe» corrisponde all'italiano «è».", en: "In Venetian xe corresponds to Italian è." },
          { it: "La parola «ciao» viene dal veneziano «s-ciavo», cioè «schiavo».", en: "The word ciao comes from Venetian s-ciavo, that is, slave (your servant)." },
        ],
      },
      {
        heading: `Dialect in literature, theatre and music`,
        body: [
          `Dialect literature has a long, prestigious history: the Roman sonnets of Giuseppe Gioachino Belli, the Milanese poetry of Carlo Porta, the Neapolitan theatre of Eduardo De Filippo, Venetian comedy from Goldoni. Twentieth-century novelists mixed dialect into Italian for realism, and Neapolitan song is known worldwide.`,
          `When you quote dialect in an Italian text, add a gloss in standard Italian, in parentheses or a note: "«Nun te preoccupà» (non preoccuparti)".`,
        ],
        examples: [
          { it: "Eduardo De Filippo scriveva le sue commedie in napoletano.", en: "Eduardo De Filippo wrote his plays in Neapolitan." },
          { it: "Le poesie di Belli sono scritte in romanesco.", en: "Belli's poems are written in Roman dialect." },
          { it: "Nel testo, ogni frase in dialetto è seguita dalla traduzione in italiano.", en: "In the text, each sentence in dialect is followed by its Italian translation." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il napoletano è un italiano sbagliato.",
        right: "Il napoletano è una lingua romanza con una sua grammatica.",
        why: `Dialects are not corrupted Italian but sister languages from Latin.`,
      },
      {
        wrong: "Il sardo è un dialetto dell'italiano.",
        right: "Il sardo è una lingua romanza distinta, riconosciuta come minoritaria.",
        why: `Sardinian is a separate Romance language, recognised by law.`,
      },
      {
        wrong: "Un dialetto è uguale all'italiano regionale.",
        right: "Un dialetto è diverso dall'italiano regionale.",
        why: `Regional Italian is Italian with local features; a dialect is another language.`,
      },
    ],
    faqs: [
      {
        q: `Do young Italians still speak dialect?`,
        a: `Fewer than before, but many understand it, use dialect words and phrases in Italian, and switch to dialect with family. It is strongest in the Veneto, Campania, Calabria and Sicily.`,
      },
      {
        q: `Is it rude to try speaking dialect?`,
        a: `Not rude, but it can sound funny or patronising if done badly. Recognising and appreciating dialect is more useful than imitating it.`,
      },
      {
        q: `Which dialects are protected by law?`,
        a: `Law 482 of 1999 protects twelve historical minority languages, including Sardinian, Friulian and Ladin, and the Albanian, Catalan, German-speaking, Greek, Slovenian, Croatian, French, Franco-Provençal and Occitan communities. The Italo-Romance dialects themselves are not on the list.`,
      },
    ],
    related: ["regional-italian", "history-of-italian", "slang-and-youth-language"],
    lessons: [
      "c2-dialect-map",
      "c2-neapolitan",
      "c2-sicilian",
      "c2-venetian-and-northern",
      "c2-sardinian-friulian-ladin",
      "c2-drill-dialect-to-standard",
      "c2-dialect-in-literature",
      "c2-listening-lab-dialects",
      "c2-mission-dialect-report",
      "c2-reading-lab-dialect-debate",
    ],
  },
  {
    slug: "near-synonyms-and-collocations",
    title: "Casa, Abitazione, Dimora: Near-Synonyms and Collocations",
    description:
      "Choosing the exact Italian word: near-synonym sets (casa / abitazione / dimora / alloggio; paura / timore / terrore; guardare / osservare / fissare / scrutare), precise verbs instead of fare and dire, connotation, and fixed collocations like prendere una decisione and porre un problema.",
    level: "C2",
    intro: [
      `At Mastery level, the question is no longer whether a word is correct but whether it is the right one. "Casa", "abitazione", "dimora" and "alloggio" all mean home, but they belong to different registers and situations; "timore" is not "terrore"; one "fa" a question but "pone" a problem.`,
      `This guide covers the main near-synonym sets, the precise verbs that replace "fare", "dire" and "mettere", and the collocations native speakers use without thinking.`,
    ],
    sections: [
      {
        heading: `Near-synonym sets`,
        body: [
          `Each set has a neutral word and others marked for register or intensity. "Casa" is neutral; "abitazione" is administrative ("cambio di abitazione"); "dimora" is literary or legal ("dimora abituale"); "alloggio" is lodging provided by someone ("vitto e alloggio"). "Paura" is neutral fear; "timore" is milder and more formal; "terrore" is extreme; "spavento" is a sudden fright.`,
          `Verbs of seeing: "guardare" (look), "osservare" (observe with attention), "fissare" (stare), "scrutare" (scan, search with the eyes), "intravedere" (glimpse), "notare" (notice).`,
        ],
        table: {
          headers: ["Neutral", "Formal / technical", "Intense or literary"],
          rows: [
            ["casa", "abitazione, alloggio", "dimora"],
            ["paura", "timore", "terrore, spavento (sudden)"],
            ["guardare", "osservare", "fissare, scrutare"],
            ["finire", "concludere, terminare", "ultimare"],
            ["cominciare", "avviare, intraprendere", "dare inizio a"],
            ["bello", "gradevole, piacevole", "splendido, incantevole"],
          ],
        },
        examples: [
          { it: "Indichi l'indirizzo della Sua abitazione.", en: "Please state your home address." },
          { it: "Il contratto include vitto e alloggio.", en: "The contract includes board and lodging." },
          { it: "Esprimo il timore che la situazione peggiori.", en: "I fear the situation may get worse." },
          { it: "Mi fissava senza dire una parola.", en: "He was staring at me without saying a word." },
          { it: "Scrutava l'orizzonte in cerca della nave.", en: "She scanned the horizon for the ship." },
        ],
      },
      {
        heading: `Precise verbs instead of fare, dire, mettere`,
        body: [
          `Everyday Italian uses "fare", "dire" and "mettere" for everything; precise writing replaces them. "Dire" becomes "affermare", "sostenere", "dichiarare", "riferire", "raccontare"; "fare" becomes "svolgere" (un'attività), "compiere" (un gesto), "effettuare" (un pagamento), "realizzare" (un progetto), "preparare" (la cena); "mettere" becomes "inserire", "collocare", "indossare", "riporre".`,
          `Don't overdo it: "effettuare una telefonata" for "telefonare" is bureaucratic. The aim is precision, not inflation.`,
        ],
        examples: [
          { it: "L'azienda svolge attività di ricerca.", en: "The company carries out research." },
          { it: "Il pagamento può essere effettuato online.", en: "Payment can be made online." },
          { it: "Inserisca la tessera nel lettore.", en: "Insert the card into the reader." },
          { it: "Ha riferito ai colleghi quanto era successo.", en: "She told her colleagues what had happened." },
        ],
      },
      {
        heading: `Collocations`,
        body: [
          `Collocations are word pairs that "go together" for no logical reason: in Italian you "prendere una decisione" (make a decision), "fare una domanda" (ask a question), "porre un problema" or "una domanda" (raise), "commettere un errore", "rivolgere la parola" (address someone), "svolgere un ruolo", "nutrire dubbi" (harbour doubts), "esprimere un parere", "sollevare una questione".`,
          `English make and take often mislead: "fare una foto" (take a photo), "fare una passeggiata" (take a walk), "prendere un caffè" (have a coffee).`,
        ],
        table: {
          headers: ["Italian", "English"],
          rows: [
            ["prendere una decisione", "make a decision"],
            ["fare una domanda", "ask a question"],
            ["porre un problema", "raise a problem"],
            ["commettere un errore", "make a mistake"],
            ["nutrire dubbi", "harbour doubts"],
            ["svolgere un ruolo", "play a role"],
            ["sollevare una questione", "raise an issue"],
            ["fare una foto", "take a photo"],
          ],
        },
        examples: [
          { it: "Dobbiamo prendere una decisione entro domani.", en: "We must make a decision by tomorrow." },
          { it: "Posso farti una domanda?", en: "Can I ask you a question?" },
          { it: "La nuova legge pone diversi problemi.", en: "The new law raises several problems." },
          { it: "Nutro qualche dubbio sulla sua sincerità.", en: "I have some doubts about his sincerity." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ho fatto una decisione.",
        right: "Ho preso una decisione.",
        why: `The collocation is "prendere una decisione".`,
      },
      {
        wrong: "Ho fatto un errore grave. (in a formal report)",
        right: "Ho commesso un errore grave.",
        why: `"Fare un errore" is fine in speech; formal writing prefers "commettere".`,
      },
      {
        wrong: "Ho preso una foto del Duomo.",
        right: "Ho fatto una foto del Duomo.",
        why: `Take a photo is "fare una foto" (or "scattare").`,
      },
      {
        wrong: "Ho effettuato una telefonata a mia madre.",
        right: "Ho telefonato a mia madre.",
        why: `Precision is not inflation: in ordinary contexts the simple verb is better.`,
      },
    ],
    faqs: [
      {
        q: `How do I learn collocations?`,
        a: `Notice them while reading and note the whole phrase, not the single word: "nutrire dubbi", not nutrire = to feed. A monolingual dictionary with examples is the best tool.`,
      },
      {
        q: `"Porre una domanda" or "fare una domanda"?`,
        a: `Both are correct. "Fare" is everyday; "porre" is formal and frequent in writing and official contexts.`,
      },
      {
        q: `Is "realizzare" for to realise really wrong?`,
        a: `It is widespread under English influence and many dictionaries now record it, but careful writers prefer "rendersi conto" and keep "realizzare" for to carry out.`,
      },
    ],
    related: ["translating-from-english", "register-shifting", "punctuation-and-style"],
    lessons: [
      "b2-instead-of-dire",
      "b2-instead-of-fare",
      "b2-instead-of-mettere-avere",
      "b2-precise-adjectives",
      "c2-near-synonyms-nouns",
      "c2-near-synonyms-verbs",
      "c2-near-synonyms-adjectives",
      "c2-collocations",
      "c2-drill-shades",
      "c2-error-hunt-shades",
      "c2-mission-precise-text",
    ],
  },
  {
    slug: "irony-and-humour",
    title: "Come No! Irony, Wordplay and Humour",
    description:
      "How Italian marks irony (figurati!, come no!, bravo! said with a certain tone, ironic diminutives), puns and double meanings, understatement, the barzelletta, and the language of satire and comic writing.",
    level: "C2",
    intro: [
      `Understanding a joke is one of the last frontiers in a foreign language. Italian humour relies on irony marked by tone and a few key phrases ("come no!", "figurati!", "bella roba!"), on wordplay, on regional stereotypes and on the barzelletta, the short told joke with a set structure.`,
      `This guide gives you the signals that tell you someone is being ironic, the forms of Italian wordplay, and the conventions of satire and comic prose.`,
    ],
    sections: [
      {
        heading: `Irony markers`,
        body: [
          `Some expressions are almost always ironic: "come no!" (yeah, right!), "sì, ciao!" (as if!), "bella roba!" (great, that's just what we needed), "ma va'?" (you don't say?), "grazie al cavolo!" (well, obviously!). Others are ironic depending on tone: "bravo!", "complimenti!", "che bello!", "figurati!".`,
          `Ironic praise often uses superlatives and diminutives: "un lavoretto da niente" for a huge job, "un attimino" for a long time, "che genio!".`,
        ],
        examples: [
          { it: "Domani ti restituisco i soldi. Sì, come no!", en: "I'll give you the money back tomorrow. Yeah, right!" },
          { it: "Ha piovuto tutta la settimana di vacanza. Bella roba!", en: "It rained all week of the holiday. Great, just great!" },
          { it: "Hai lasciato le chiavi in macchina? Complimenti!", en: "You left the keys in the car? Well done!" },
          { it: "Il film dura solo quattro ore: un attimino.", en: "The film is only four hours long: just a tiny bit." },
          { it: "L'acqua è bagnata. Ma va'?", en: "Water is wet. You don't say?" },
        ],
      },
      {
        heading: `Wordplay and double meanings`,
        body: [
          `Italian puns (giochi di parole) exploit homophones and double meanings: "pesca" (peach and fishing), "riso" (rice and laughter), "porta" (door and he/she carries), "lira" (the old currency and the instrument), "sale" (salt and he/she goes up). Ad slogans and newspaper headlines love them.`,
          `Understatement (litote) is common in dry humour: "non è proprio un genio", "non mi dispiacerebbe un caffè" (I'd love a coffee).`,
        ],
        table: {
          headers: ["Word", "Meaning 1", "Meaning 2"],
          rows: [
            ["pesca", "peach", "fishing"],
            ["riso", "rice", "laughter"],
            ["porta", "door", "carries"],
            ["sale", "salt", "goes up"],
            ["miglio", "mile", "millet"],
            ["pianta", "plant", "leaves (someone)"],
          ],
        },
        examples: [
          { it: "Il riso fa buon sangue.", en: "Laughter is good for you." },
          { it: "Non è proprio un genio della matematica.", en: "He's not exactly a maths genius." },
          { it: "Non mi dispiacerebbe un caffè.", en: "I wouldn't say no to a coffee." },
        ],
      },
      {
        heading: `The barzelletta and satire`,
        body: [
          `A barzelletta has a fixed frame: "c'è un tizio che...", "sai quella di...?" (do you know the one about...?), "ci sono un italiano, un francese e un tedesco...", and ends with a punchline (la battuta finale). Tell it in the present tense and keep the punchline short.`,
          `Satire (la satira) and comic writing exaggerate the official style: bureaucratic language applied to everyday trivia, the grand political register for small matters. Recognising the register being parodied is half the joke.`,
        ],
        examples: [
          { it: "Sai quella del carabiniere che va in biblioteca?", en: "Do you know the one about the carabiniere who goes to the library?" },
          { it: "C'è un tizio che entra in un bar e chiede...", en: "There's this guy who walks into a bar and asks..." },
          { it: "Si comunica alla cittadinanza che il caffè di stamattina era freddo.", en: "Citizens are hereby informed that this morning's coffee was cold." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ha fatto un gioco della parola.",
        right: "Ha fatto un gioco di parole.",
        why: `A pun is "un gioco di parole", fixed, with the plural.`,
      },
      {
        wrong: "Grazie al cavolo per il regalo, è bellissimo!",
        right: "Grazie mille per il regalo, è bellissimo!",
        why: `"Grazie al cavolo" is only ironic (well, obviously!); never use it to thank someone sincerely.`,
      },
      {
        wrong: "Grazie del cavolo!",
        right: "Grazie al cavolo!",
        why: `The fixed ironic expression is "grazie al cavolo" (well, obviously).`,
      },
    ],
    faqs: [
      {
        q: `Is "come no" always ironic?`,
        a: `No. "Vieni anche tu? Come no!" can sincerely mean of course. Only tone and context tell you; when in doubt, reply as if it were sincere.`,
      },
      {
        q: `Are regional jokes offensive?`,
        a: `Many barzellette play on regional stereotypes. Among friends they are often affectionate; as a foreigner, it is wiser to listen than to tell them.`,
      },
      {
        q: `How do I translate Italian puns?`,
        a: `Usually you can't keep both meanings. Translators look for an English pun with the same effect, or add a note.`,
      },
    ],
    related: ["spoken-italian", "rhetoric-and-persuasion", "advanced-idioms-and-latin"],
    lessons: [
      "c2-irony",
      "c2-puns",
      "c2-barzellette",
      "c2-satire",
      "c2-drill-humour",
      "c2-reading-lab-comic-text",
      "c2-listening-lab-comedy",
      "c2-error-hunt-humour",
      "c2-mission-funny-story",
      "c2-dialogue-lab-banter",
      "c2-translating-humour",
    ],
  },
  {
    slug: "advanced-idioms-and-latin",
    title: "Cadere dalle Nuvole, Una Tantum: Rare Idioms and Latin in Italian",
    description:
      "Less common Italian idioms (fare orecchie da mercante, avere le mani in pasta, prendere lucciole per lanterne, menare il can per l'aia), idioms from history and literature (passare il Rubicone, una vittoria di Pirro), and Latin phrases in everyday Italian (ad hoc, una tantum, in extremis).",
    level: "C2",
    intro: [
      `Beyond the everyday idioms lies a layer that marks a truly cultivated speaker: expressions from history, literature and Latin, and vivid idioms that newspapers and good conversationalists use to make a point. "Ha fatto orecchie da mercante" (he turned a deaf ear), "è stata una vittoria di Pirro", "un contributo una tantum".`,
      `Latin in particular is far more alive in Italian than in English, in politics, law, journalism and even conversation.`,
    ],
    sections: [
      {
        heading: `Vivid idioms`,
        body: [
          `These idioms are common in the press and in educated speech. Learn the whole phrase, with its verb.`,
        ],
        table: {
          headers: ["Idiom", "Meaning"],
          rows: [
            ["fare orecchie da mercante", "to turn a deaf ear"],
            ["avere le mani in pasta", "to be involved, have connections"],
            ["cadere dalle nuvole", "to be astonished, have no idea"],
            ["prendere lucciole per lanterne", "to get hold of the wrong end of the stick"],
            ["essere come il prezzemolo", "to turn up everywhere"],
            ["menare il can per l'aia", "to beat about the bush"],
            ["avere un diavolo per capello", "to be furious"],
            ["fare di tutta l'erba un fascio", "to lump everything together"],
          ],
        },
        examples: [
          { it: "Gli ho chiesto i soldi, ma ha fatto orecchie da mercante.", en: "I asked him for the money, but he turned a deaf ear." },
          { it: "Quando gliel'ho detto, è caduto dalle nuvole.", en: "When I told him, he was completely taken aback." },
          { it: "Smettila di menare il can per l'aia e dimmi la verità.", en: "Stop beating about the bush and tell me the truth." },
          { it: "Non bisogna fare di tutta l'erba un fascio.", en: "You shouldn't lump everyone together." },
          { it: "Quella giornalista è come il prezzemolo: la vedi in ogni programma.", en: "That journalist is everywhere: you see her on every programme." },
        ],
      },
      {
        heading: `Idioms from history and literature`,
        body: [
          `"Passare il Rubicone" (to cross the Rubicon, take an irreversible step), "una vittoria di Pirro" (a Pyrrhic victory), "la Babele" or "una babele" (chaos of languages), "il tallone d'Achille", "il cavallo di Troia", "essere un Don Abbondio" (to be a coward, from Manzoni's priest), "un carneade" (a nobody, also from Manzoni), "la spada di Damocle".`,
        ],
        examples: [
          { it: "Con le dimissioni ha passato il Rubicone.", en: "With his resignation he crossed the Rubicon." },
          { it: "È stata una vittoria di Pirro: ha vinto la causa ma ha perso tutti i clienti.", en: "It was a Pyrrhic victory: he won the case but lost all his clients." },
          { it: "Alla riunione c'era una babele di lingue.", en: "At the meeting there was a babel of languages." },
          { it: "Quel debito è una spada di Damocle sull'azienda.", en: "That debt hangs over the company like the sword of Damocles." },
        ],
      },
      {
        heading: `Latin in Italian`,
        body: [
          `Italian uses Latin phrases naturally, pronounced the Italian way: "ad hoc" (made for the purpose), "de facto", "una tantum" (one-off: "un bonus una tantum"), "in extremis" (at the last moment), "ex novo" (from scratch), "pro capite" (per head), "sine die" (indefinitely), "lapsus", "curriculum", "referendum", "ultimatum", "post mortem", "par condicio" (equal airtime in politics).`,
          `Latin plurals do not change in Italian: "i curriculum", "i referendum".`,
        ],
        table: {
          headers: ["Latin", "Meaning", "Example"],
          rows: [
            ["una tantum", "one-off", "un contributo una tantum"],
            ["ex novo", "from scratch", "rifare ex novo"],
            ["in extremis", "at the last moment", "salvarsi in extremis"],
            ["sine die", "indefinitely", "rinviato sine die"],
            ["pro capite", "per head", "il reddito pro capite"],
            ["ad hoc", "made for the purpose", "una commissione ad hoc"],
          ],
        },
        examples: [
          { it: "Il governo ha previsto un contributo una tantum per le famiglie.", en: "The government has planned a one-off payment for families." },
          { it: "Si sono salvati in extremis.", en: "They were saved at the last minute." },
          { it: "La riunione è stata rinviata sine die.", en: "The meeting has been postponed indefinitely." },
          { it: "Abbiamo dovuto rifare il progetto ex novo.", en: "We had to redo the project from scratch." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ha fatto orecchie da mercanti.",
        right: "Ha fatto orecchie da mercante.",
        why: `The idiom is fixed in the singular: "orecchie da mercante".`,
      },
      {
        wrong: "Ho inviato tre curricula.",
        right: "Ho inviato tre curriculum.",
        why: `In Italian, Latin loanwords are invariable: "i curriculum".`,
      },
      {
        wrong: "È caduto delle nuvole.",
        right: "È caduto dalle nuvole.",
        why: `To fall from = "cadere da": "dalle nuvole".`,
      },
      {
        wrong: "Un contributo una volta tantum.",
        right: "Un contributo una tantum.",
        why: `"Una tantum" is already Latin for one time only; don't add "volta".`,
      },
    ],
    faqs: [
      {
        q: `How do Italians pronounce Latin?`,
        a: `As Italian: "ad hoc" with a silent "h", "curriculum" with Italian vowels. The "ecclesiastical" pronunciation is the norm, not the reconstructed classical one.`,
      },
      {
        q: `Is "curricula" wrong?`,
        a: `It is the Latin plural and some careful writers use it, but the rule for loanwords in Italian makes "i curriculum" the standard.`,
      },
      {
        q: `What is a "carneade"?`,
        a: `An obscure person nobody has heard of: in "I promessi sposi" Don Abbondio wonders "Carneade! Chi era costui?". It is a classic example of a literary idiom.`,
      },
    ],
    related: ["idioms-and-proverbs", "irony-and-humour", "legal-italian"],
    lessons: [
      "c2-idioms-advanced-1",
      "c2-idioms-advanced-2",
      "c2-historical-idioms",
      "c2-latin-in-italian",
      "c2-drill-idioms-advanced",
      "c2-reading-lab-idioms",
      "c2-error-hunt-idioms-advanced",
      "c2-dialogue-lab-idioms-advanced",
      "c2-mission-idiom-essay",
      "c2-spiral-idioms",
    ],
  },
  {
    slug: "slang-and-youth-language",
    title: "Figo, Scialla, Cmq: Slang, Texting and Euphemisms",
    description:
      "Italian slang with register labels (figo, ganzo, sclerare, scialla, raga, tipo, bro), texting abbreviations (cmq, nn, xké, tvb), mild swearing and euphemisms (cavolo, accidenti), and Anglicisms in youth speech.",
    level: "C2",
    intro: [
      `Young Italians speak and text in a register of their own, full of slang, abbreviations and English words. You need to understand it to follow chats, social media, films and conversations with people under thirty, even if you rarely use it yourself.`,
      `Every item in this guide has a register label: neutral, informal, very informal, or vulgar. Recognise first; use only what fits your age and your relationship with the other person.`,
    ],
    sections: [
      {
        heading: `Youth slang`,
        body: [
          `Some words are now national and generational: "figo" (cool, attractive), "ganzo" (cool, Tuscan), "sclerare" (to freak out), "scialla" (chill, relax, from Roman slang), "raga" (guys), "bella!" (hi! or great!), "tipo" (like), "bro" (bro), "spaccare" (to be awesome: "questo pezzo spacca"), "che sbatti!" (what a hassle!), "boh".`,
          `Slang ages fast: what sounds fresh this year may sound dated in five. Treat it as listening vocabulary and use it with care.`,
        ],
        table: {
          headers: ["Slang", "Meaning", "Register"],
          rows: [
            ["figo / figa", "cool, attractive", "informal (figa can be vulgar)"],
            ["sclerare", "to freak out", "informal"],
            ["scialla", "chill, relax", "informal"],
            ["raga", "guys", "informal"],
            ["bella!", "hi! / great!", "informal"],
            ["che sbatti", "what a hassle", "informal"],
            ["spaccare", "to be great", "informal"],
          ],
        },
        examples: [
          { it: "Raga, stasera tutti da me!", en: "Guys, everybody at mine tonight!" },
          { it: "Scialla, non è successo niente.", en: "Chill, nothing happened." },
          { it: "Quando ha visto il voto è sclerato.", en: "When he saw the mark he freaked out." },
          { it: "Che figata questo concerto!", en: "This concert is so cool!" },
        ],
      },
      {
        heading: `Texting`,
        body: [
          `Text abbreviations cut letters and use symbols: "cmq" (comunque), "nn" (non), "xké" or "xché" (perché, with "x" for "per", as in the multiplication sign), "tvb" (ti voglio bene), "tvtb" (ti voglio tanto bene), "qlc" (qualcosa), "dv" (dove), "k" for "ch" ("ke" for "che"), "ki" (chi). Many are used less now that phones have predictive text, but older chats are full of them.`,
          `Never use them outside personal chats: in an email to a teacher or employer they look careless.`,
        ],
        table: {
          headers: ["Abbreviation", "Full form"],
          rows: [
            ["cmq", "comunque"],
            ["nn", "non"],
            ["xké", "perché"],
            ["tvb", "ti voglio bene"],
            ["qlc", "qualcosa"],
            ["x", "per"],
            ["ke", "che"],
          ],
        },
        examples: [
          { it: "Cmq domani nn ci sono. = Comunque domani non ci sono.", en: "Anyway, I'm not around tomorrow." },
          { it: "Xké nn rispondi? = Perché non rispondi?", en: "Why aren't you answering?" },
          { it: "Buonanotte, tvb! = Buonanotte, ti voglio bene!", en: "Good night, love you!" },
        ],
      },
      {
        heading: `Euphemisms and Anglicisms`,
        body: [
          `Italians soften swearwords with euphemisms that are acceptable in most company: "cavolo!" and "accidenti!" (damn!), "caspita!" (wow!), "mannaggia!" (darn, southern and now national), "cacchio" (milder slang, still informal), "che palle!" (what a drag, informal). Stronger words exist, of course; learn to recognise them, but leave them to native speakers.`,
          `English words are everywhere in youth speech, often Italianised: "cringe", "crush", "ghostare" (to ghost someone), "shippare" (to want two people together), "flexare" (to show off), "postare", "taggare".`,
        ],
        examples: [
          { it: "Cavolo, ho perso l'autobus!", en: "Damn, I've missed the bus!" },
          { it: "Mannaggia, ho dimenticato il portafoglio.", en: "Darn it, I've forgotten my wallet." },
          { it: "Mi ha ghostato dopo il primo appuntamento.", en: "He ghosted me after the first date." },
          { it: "Hai postato le foto della festa?", en: "Have you posted the photos from the party?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Gentile professoressa, cmq nn ho capito l'esercizio.",
        right: "Gentile professoressa, comunque non ho capito l'esercizio.",
        why: `Text abbreviations never belong in a formal email.`,
      },
      {
        wrong: "Raga, buongiorno signor direttore.",
        right: "Buongiorno, signor direttore.",
        why: `"Raga" is for friends your own age.`,
      },
      {
        wrong: "Mi ha ghosted.",
        right: "Mi ha ghostato.",
        why: `English verbs are Italianised with "-are" and conjugated normally.`,
      },
    ],
    faqs: [
      {
        q: `Should I use slang to sound natural?`,
        a: `Natural Italian comes from good standard usage. A few common words ("figo", "boh", "dai") are safe; heavy slang from a non-native speaker can sound forced.`,
      },
      {
        q: `Is "figo" rude?`,
        a: `No, it is informal but harmless. The feminine noun "figa" is vulgar in some uses; "figata" (something cool) is fine.`,
      },
      {
        q: `Where does "scialla" come from?`,
        a: `From Roman youth slang, probably from Arabic "inshallah" via dialect. It spread nationally through films and music.`,
      },
    ],
    related: ["register-shifting", "spoken-italian", "dialects-and-regional-languages"],
    lessons: [
      "c2-youth-slang",
      "c2-texting",
      "c2-euphemisms",
      "c2-anglicisms-youth",
      "c2-drill-slang-to-standard",
      "c2-reading-lab-chat",
      "c2-listening-lab-youth",
      "c2-error-hunt-slang",
      "c2-mission-explain-slang",
      "c2-dialogue-lab-youth",
    ],
  },
  {
    slug: "legal-italian",
    title: "Il Conduttore Pagherà: Legal and Administrative Italian",
    description:
      "The syntax and vocabulary of Italian legal texts: long periods, the future of obligation (il conduttore pagherà), the present of law (è vietato), contracts, laws and decrees, court language (la sentenza, il ricorso, la querela, il TAR) and Latin in law.",
    level: "C2",
    intro: [
      `Italian legal language is famous for its length and density. A single article of a contract can be one sentence of eighty words, held together by participles, relative clauses and "nonché". Yet it follows predictable rules, and once you know them, contracts, laws and judgments become readable.`,
      `This guide covers the tense conventions, the main sentence patterns, the vocabulary of contracts and courts, and how to summarise a legal text in plain Italian.`,
    ],
    sections: [
      {
        heading: `Tenses of obligation`,
        body: [
          `Laws and contracts state obligations in the present or the future indicative, not with "dovere": "il conduttore paga il canone entro il giorno 5 di ogni mese" or "il conduttore pagherà...". Prohibitions use "è vietato", "è fatto divieto di", "non è consentito". Permissions use "è facoltà di", "può".`,
          `The present of law ("il presidente nomina", "la legge stabilisce") describes how things are and must be. The future of obligation is typical of contracts. Both sound categorical precisely because they do not use a modal verb.`,
        ],
        examples: [
          { it: "Il conduttore pagherà il canone entro il giorno 5 di ogni mese.", en: "The tenant shall pay the rent by the 5th of each month." },
          { it: "È vietato fumare nei locali pubblici.", en: "Smoking is prohibited in public premises." },
          { it: "È fatto divieto di sostare davanti al passo carrabile.", en: "Parking in front of the driveway is prohibited." },
          { it: "È facoltà del locatore recedere dal contratto con sei mesi di preavviso.", en: "The landlord may withdraw from the contract with six months' notice." },
        ],
      },
      {
        heading: `Sentence patterns`,
        body: [
          `Legal periods pile up conditions and specifications: "qualora", "salvo che", "fatto salvo", "ai sensi di", "nonché" (as well as), "ovvero" (or, that is), "anche ove" (even where), "in deroga a" (by way of exception to). Judgments open with fixed absolute participles: "visto", "considerato", "ritenuto", "letti gli atti".`,
          `References are precise: "ai sensi dell'art. 1571 c.c." (codice civile), "D.Lgs." (decreto legislativo), "L." (legge), "comma" (paragraph), "lett. a)" (letter a).`,
        ],
        table: {
          headers: ["Term", "Meaning"],
          rows: [
            ["salvo che", "unless"],
            ["fatto salvo", "without prejudice to"],
            ["nonché", "as well as"],
            ["ovvero", "or; that is (in law)"],
            ["in deroga a", "by way of exception to"],
            ["comma", "paragraph of an article"],
            ["c.c. / c.p.", "civil code / criminal code"],
          ],
        },
        examples: [
          { it: "Salvo che sia diversamente pattuito, il contratto si rinnova tacitamente.", en: "Unless otherwise agreed, the contract renews automatically." },
          { it: "Fatto salvo quanto previsto dall'art. 3, le spese sono a carico dell'acquirente.", en: "Without prejudice to Article 3, the costs are borne by the buyer." },
          { it: "Visto il ricorso e letti gli atti, il giudice dispone quanto segue.", en: "Having seen the appeal and read the documents, the judge orders as follows." },
        ],
      },
      {
        heading: `Courts and Latin`,
        body: [
          `Key words: "la sentenza" (judgment), "il ricorso" (appeal to a court, also against an administrative act), "la querela" (criminal complaint by the victim), "la denuncia" (report of a crime), "l'imputato" (defendant), "il TAR" (Tribunale Amministrativo Regionale), "la Corte di Cassazione" (supreme court), "il decreto", "la delibera" (resolution).`,
          `Latin is everywhere in law: "de iure", "de facto", "erga omnes" (towards everyone), "ex lege" (by law), "in dubio pro reo", "una tantum", "ad personam", "pro tempore". In plain summaries, translate them.`,
        ],
        examples: [
          { it: "La Corte di Cassazione ha confermato la sentenza.", en: "The Court of Cassation upheld the judgment." },
          { it: "Ha presentato ricorso al TAR contro il provvedimento.", en: "He appealed to the regional administrative court against the decision." },
          { it: "La vittima ha sporto querela contro l'aggressore.", en: "The victim filed a complaint against the attacker." },
          { it: "Il sindaco pro tempore firma l'ordinanza.", en: "The mayor in office signs the order." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "È vietato di fumare nei locali.",
        right: "È vietato fumare nei locali.",
        why: `"È vietato" takes a bare infinitive, with no "di".`,
      },
      {
        wrong: "Ha fatto una querela alla polizia per il furto della bici.",
        right: "Ha fatto denuncia alla polizia per il furto della bici.",
        why: `A "denuncia" reports a crime; a "querela" is the victim's formal request to prosecute certain offences.`,
      },
      {
        wrong: "Ai sensi dell'articolo 3, comma 2 e del comma 4 nonché anche...",
        right: "Ai sensi dell'art. 3, commi 2 e 4, nonché...",
        why: `"Nonché" already means as well as; don't add "anche".`,
      },
    ],
    faqs: [
      {
        q: `Does "ovvero" mean or or that is?`,
        a: `Both, which causes real legal disputes. In traditional usage it means or; in modern usage it often means that is. Legislative drafting guidelines advise avoiding the ambiguity.`,
      },
      {
        q: `What is the difference between a "decreto legge" and a "decreto legislativo"?`,
        a: `A decreto legge is an urgent government measure that Parliament must convert into law within sixty days; a decreto legislativo is issued by the government on Parliament's delegation.`,
      },
      {
        q: `Is plain legal Italian possible?`,
        a: `Yes, and it is encouraged: shorter sentences, active verbs, defined terms. Summarising a contract for a client in plain Italian is a real professional skill.`,
      },
    ],
    related: ["burocratese", "advanced-idioms-and-latin", "formal-syntax"],
    lessons: [
      "c2-legal-syntax",
      "c2-contracts-in-depth",
      "c2-laws-and-decrees",
      "c2-court-language",
      "c2-drill-legal",
      "c2-reading-lab-sentence",
      "c2-error-hunt-legal",
      "c2-plain-legal",
      "c2-mission-legal-summary",
      "c2-listening-lab-legal",
    ],
  },
  {
    slug: "scientific-and-financial-italian",
    title: "Lo Spread, la Diagnosi: Scientific, Medical and Financial Italian",
    description:
      "The registers of Italian science, medicine and finance: passive, nominalisation and hedging in research papers, Greek and Latin roots in medical terms, case reports, and the vocabulary of markets and public finance (lo spread, i titoli di Stato, la manovra).",
    level: "C2",
    intro: [
      `Scientific and financial Italian share a style: impersonal, nominal, precise with numbers and cautious with claims. "Si è osservata una riduzione significativa dei sintomi" (a significant reduction in symptoms was observed); "il rendimento dei titoli decennali è salito al 4%".`,
      `Their vocabularies differ, but both rely on international roots: Greek and Latin in medicine, English in finance.`,
    ],
    sections: [
      {
        heading: `The scientific register`,
        body: [
          `Research papers use the impersonal "si" and the passive ("sono stati arruolati 120 pazienti"), nominal phrases ("la somministrazione del farmaco"), and hedging ("i risultati suggeriscono", "sembrerebbe", "non si può escludere che"). The structure is fixed: introduzione, materiali e metodi, risultati, discussione, conclusioni.`,
          `Numbers follow Italian conventions: decimal comma ("3,5 mg"), the percent sign without a space in most styles ("il 12%"), and the article before percentages ("il 40% dei pazienti").`,
        ],
        examples: [
          { it: "Sono stati arruolati 120 pazienti di età compresa tra 18 e 65 anni.", en: "120 patients aged between 18 and 65 were enrolled." },
          { it: "Si è osservata una riduzione significativa dei sintomi.", en: "A significant reduction in symptoms was observed." },
          { it: "Non si può escludere che altri fattori abbiano influito sui risultati.", en: "It cannot be ruled out that other factors influenced the results." },
          { it: "Il 40% dei partecipanti ha riferito effetti collaterali lievi.", en: "40% of participants reported mild side effects." },
        ],
      },
      {
        heading: `Medical terminology`,
        body: [
          `Medical words are built from Greek and Latin roots, mostly as in English, with Italian endings: "-ite" for inflammation ("tonsillite", "gastrite"), "-algia" for pain ("nevralgia"), "-ectomia" for removal ("appendicectomia"), "-logia", "-patia", "iper-" and "ipo-" ("ipertensione", "ipoglicemia").`,
          `Patients and doctors also use everyday equivalents: "la pressione alta" (ipertensione), "il mal di testa" (cefalea), "la glicemia" for blood sugar. A case report (caso clinico) uses the passato prossimo and imperfetto: "il paziente si è presentato con febbre e tosse".`,
        ],
        table: {
          headers: ["Root", "Meaning", "Example"],
          rows: [
            ["-ite", "inflammation", "gastrite, otite"],
            ["-algia", "pain", "nevralgia, lombalgia"],
            ["-ectomia", "surgical removal", "appendicectomia"],
            ["iper- / ipo-", "above / below normal", "ipertensione, ipotiroidismo"],
            ["cardio-", "heart", "cardiologo, cardiopatia"],
            ["emo-", "blood", "emorragia, emoglobina"],
          ],
        },
        examples: [
          { it: "Il paziente si è presentato al pronto soccorso con febbre alta e tosse.", en: "The patient came to A&E with a high temperature and a cough." },
          { it: "Gli è stata diagnosticata una gastrite.", en: "He was diagnosed with gastritis." },
          { it: "Soffre di ipertensione, cioè ha la pressione alta.", en: "She suffers from hypertension, that is, high blood pressure." },
        ],
      },
      {
        heading: `Financial Italian`,
        body: [
          `Finance mixes Italian and English: "la Borsa" (stock exchange), "i titoli di Stato" (government bonds, such as BTP), "lo spread" (the yield gap with German bonds), "il rendimento" (yield), "il debito pubblico", "il PIL" (GDP), "la manovra" (the budget package), "l'inflazione", "il tasso di interesse", "i mercati", "il rating".`,
          `Trends have their verbs: "salire", "crescere", "aumentare" vs "scendere", "calare", "diminuire", "crollare" (to collapse), "segnare un rialzo / un ribasso", "chiudere in rialzo / in calo". Note "lo spread" (masculine, with "lo" before "s" + consonant).`,
        ],
        examples: [
          { it: "Lo spread tra BTP e Bund è sceso sotto i 150 punti.", en: "The spread between Italian and German bonds fell below 150 points." },
          { it: "Piazza Affari ha chiuso in rialzo dell'1,2%.", en: "The Milan stock exchange closed up 1.2%." },
          { it: "Il debito pubblico ha superato il 140% del PIL.", en: "Public debt exceeded 140% of GDP." },
          { it: "La manovra prevede un taglio delle tasse sul lavoro.", en: "The budget includes a cut in taxes on labour." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il 3.5% dei pazienti",
        right: "Il 3,5% dei pazienti",
        why: `Italian uses the decimal comma.`,
      },
      {
        wrong: "40% dei pazienti è guarito.",
        right: "Il 40% dei pazienti è guarito.",
        why: `Percentages take the article in Italian.`,
      },
      {
        wrong: "Il spread è salito.",
        right: "Lo spread è salito.",
        why: `"S" + consonant takes "lo".`,
      },
      {
        wrong: "I risultati provano che il farmaco funziona sempre.",
        right: "I risultati suggeriscono che il farmaco sia efficace.",
        why: `Scientific prose hedges its claims; "suggerire che" usually takes the subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `"Il PIL" or "il Pil"?`,
        a: `Both are used; newspapers increasingly write acronyms that are read as words with only the first capital: "il Pil", "l'Istat".`,
      },
      {
        q: `What is "Piazza Affari"?`,
        a: `The square in Milan where the stock exchange stands, used as a name for the Borsa itself, as Wall Street is.`,
      },
      {
        q: `How do I popularise a scientific text?`,
        a: `Turn nouns back into verbs, use the active voice, explain terms in everyday words ("ipertensione, cioè pressione alta") and give examples. Italian has a strong tradition of scientific popularisation (divulgazione).`,
      },
    ],
    related: ["academic-italian", "nominal-style", "passive-and-impersonal-in-writing"],
    lessons: [
      "c2-scientific-register",
      "c2-medical-terminology",
      "c2-research-papers",
      "c2-case-reports",
      "c2-drill-scientific",
      "c2-error-hunt-science",
      "c2-popularising",
      "c2-financial-markets",
      "c2-public-finance",
      "c2-banking",
      "c2-financial-analysis",
      "c2-drill-financial",
      "c2-error-hunt-finance",
    ],
  },
  {
    slug: "punctuation-and-style",
    title: "Virgola, Punto e Virgola, « »: Punctuation and Style",
    description:
      "The rules of Italian punctuation (the comma, the semicolon, the colon, the dash and the quotation marks « »), paratactic and hypotactic style, sentence rhythm, and how to avoid repetition with synonyms, pronouns and ellipsis.",
    level: "C2",
    intro: [
      `Italian punctuation follows logic more than breath. The commas that English writers add by feel are often wrong in Italian, and vice versa. At Mastery level your punctuation and rhythm are what make a text sound native.`,
      `Style is the second half: choosing between short, juxtaposed sentences (paratassi) and long, subordinated ones (ipotassi), varying rhythm, and avoiding the repetition Italian readers dislike far more than English readers do.`,
    ],
    sections: [
      {
        heading: `The comma and the semicolon`,
        body: [
          `Never put a comma between subject and verb, or between verb and object. Use commas to set off incidental phrases ("Marco, che conosci, arriva domani"), vocatives ("Giulia, vieni qui"), introductory subordinates ("se piove, restiamo a casa") and before contrastive conjunctions ("è bravo, ma lento").`,
          `A restrictive relative clause takes no comma: "gli studenti che hanno superato l'esame" (only those); a non-restrictive one does: "gli studenti, che hanno superato l'esame," (all of them). The semicolon separates long, related blocks or items that already contain commas, and is more common in Italian than in modern English.`,
        ],
        examples: [
          { it: "Marco, che conosci già, arriva domani.", en: "Marco, whom you already know, arrives tomorrow." },
          { it: "Gli studenti che hanno superato l'esame riceveranno un attestato.", en: "The students who passed the exam will receive a certificate." },
          { it: "Gli studenti, che hanno superato l'esame, riceveranno un attestato.", en: "The students, who all passed the exam, will receive a certificate." },
          { it: "Il primo giorno visitammo Firenze; il secondo, Siena; il terzo, San Gimignano.", en: "The first day we visited Florence; the second, Siena; the third, San Gimignano." },
        ],
      },
      {
        heading: `Colon, dash and quotation marks`,
        body: [
          `The colon introduces an explanation, a list or direct speech: "una cosa è certa: non torneremo". No capital after it unless direct speech follows. The dash (lineetta) sets off an aside, like brackets but more lively — "e qui viene il bello" — and in some novels introduces dialogue.`,
          `Italian printed texts use « » (caporali) for direct speech and quotations, and " " for quotations inside them or for words used in a special sense. Punctuation goes after the closing mark when it belongs to the main sentence: «Arrivo subito», disse.`,
        ],
        examples: [
          { it: "Una cosa è certa: non torneremo in quell'albergo.", en: "One thing is certain: we won't go back to that hotel." },
          { it: "«Arrivo subito», disse, e chiuse la porta.", en: "'I'll be right there,' she said, and shut the door." },
          { it: "Il problema — e qui viene il bello — è che nessuno lo sapeva.", en: "The problem — and here's the best part — is that nobody knew." },
        ],
      },
      {
        heading: `Rhythm and repetition`,
        body: [
          `Paratactic prose (short main clauses side by side) is fast and modern; hypotactic prose (subordination) is reflective and formal. Good Italian writers alternate them: a long sentence that builds, then a short one that lands.`,
          `Italian readers notice repeated words within a few lines. Replace them with synonyms ("la città" → "il capoluogo", "il centro"), pronouns ("lo", "ne", "questo"), or ellipsis (dropping the repeated element: "Marco ha scelto il mare, Giulia la montagna").`,
        ],
        examples: [
          { it: "Marco ha scelto il mare, Giulia la montagna.", en: "Marco chose the seaside, Giulia the mountains." },
          { it: "Bologna è una città universitaria; il capoluogo emiliano attira studenti da tutta Italia.", en: "Bologna is a university city; the Emilian capital attracts students from all over Italy." },
          { it: "Arrivò di notte, senza bagagli, senza avvisare nessuno. Nessuno lo aspettava.", en: "He arrived at night, with no luggage, without telling anyone. No one was expecting him." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il direttore della scuola, ha annunciato le nuove regole.",
        right: "Il direttore della scuola ha annunciato le nuove regole.",
        why: `No comma between subject and verb, however long the subject.`,
      },
      {
        wrong: "«Arrivo subito.», disse.",
        right: "«Arrivo subito», disse.",
        why: `No full stop inside the quotation when the sentence continues with the reporting verb.`,
      },
      {
        wrong: "Una cosa è certa: Non torneremo.",
        right: "Una cosa è certa: non torneremo.",
        why: `No capital after a colon, except for direct speech or proper names.`,
      },
      {
        wrong: "Ho comprato una casa. La casa è grande. La casa ha un giardino.",
        right: "Ho comprato una casa grande, con giardino.",
        why: `Avoid repetition: combine, use pronouns or synonyms.`,
      },
    ],
    faqs: [
      {
        q: `Is the Oxford comma used in Italian?`,
        a: `No. Italian normally has no comma before the final "e" of a list: "pane, burro e marmellata".`,
      },
      {
        q: `Which quotation marks should I use?`,
        a: `« » in print and formal writing; " " is accepted in informal texts and on screens. Be consistent within a text.`,
      },
      {
        q: `Should I avoid repetition even in technical texts?`,
        a: `In technical and legal texts, repeat the exact term when precision matters: a synonym could suggest a different thing. Variation is a virtue of narrative and essay prose.`,
      },
    ],
    related: ["formal-syntax", "native-errors-and-hypercorrection", "near-synonyms-and-collocations"],
    lessons: [
      "c2-punctuation",
      "c2-parataxis-hypotaxis",
      "c2-rhythm",
      "c2-avoiding-repetition",
      "c2-drill-style",
      "c2-reading-lab-styles",
      "c2-error-hunt-punctuation",
      "c2-editing-own-text",
      "c2-mission-stylistic-rewrite",
      "c2-listening-lab-reading-aloud",
    ],
  },
  {
    slug: "native-errors-and-hypercorrection",
    title: "Qual È, Un Po', Se Fossi: The Errors Italians Make",
    description:
      "The mistakes native Italians make and editors correct: qual'è, un pò, se sarei, a me mi, gli for le, piuttosto che for o, pultroppo, propio, daccordo, ce and c'è, perchè; hypercorrection; and consistency of tense and register.",
    level: "C2",
    intro: [
      `By Mastery level your Italian may be more correct than that of many native speakers, and you will see their typical errors on signs, in messages and even in newspapers. Knowing them protects you from picking them up, and lets you edit a text as an Italian proofreader would.`,
      `The list is surprisingly stable: a dozen spelling slips, a few grammar errors, and the opposite problem, hypercorrection, where speakers "correct" something that was right.`,
    ],
    sections: [
      {
        heading: `Spelling`,
        body: [
          `"Qual è" has no apostrophe (it is a troncamento: "qual" exists alone). "Un po'" has an apostrophe, not an accent (it is short for "poco"). "Perché", "poiché", "affinché" take an acute accent, not a grave one. "D'accordo" is two words with an apostrophe. "Ce" and "c'è" are different words. "Purtroppo" and "proprio" are often mispronounced and miswritten as "pultroppo" and "propio".`,
        ],
        table: {
          headers: ["Wrong", "Right", "Why"],
          rows: [
            ["qual'è", "qual è", "troncamento, no apostrophe"],
            ["un pò", "un po'", "apocope of poco"],
            ["perchè", "perché", "closed e: acute accent"],
            ["daccordo", "d'accordo", "di + accordo"],
            ["propio", "proprio", "two r's"],
            ["pultroppo", "purtroppo", "pur + troppo"],
            ["c'è l'ho", "ce l'ho", "ci + lo, not c'è"],
            ["sopratutto", "soprattutto", "double t"],
          ],
        },
        examples: [
          { it: "Qual è il problema?", en: "What's the problem?" },
          { it: "Aspetta un po', arrivo.", en: "Wait a bit, I'm coming." },
          { it: "Le chiavi? Sì, ce l'ho io.", en: "The keys? Yes, I've got them." },
          { it: "Purtroppo non sono proprio d'accordo.", en: "Unfortunately I don't really agree." },
        ],
      },
      {
        heading: `Grammar`,
        body: [
          `"Se sarei" for "se fossi" is the most stigmatised error in Italian. "A me mi piace" doubles the pronoun. "Gli" for "le" (to her) is spreading in speech ("gli ho detto" to a woman) but remains wrong in writing. "Piuttosto che" used to mean or ("pasta piuttosto che riso piuttosto che pizza") is a recent fashion that creates ambiguity, because it really means rather than.`,
          `Other frequent slips: "un altro" wrongly written with an apostrophe, "vadi" and "facci" for "vada" and "faccia", "stassi" for "stessi", "ho uscito" for "sono uscito", and "dasse" for "desse".`,
        ],
        examples: [
          { it: "Se fossi in te, accetterei.", en: "If I were you, I'd accept." },
          { it: "Ho visto Chiara e le ho detto tutto.", en: "I saw Chiara and told her everything." },
          { it: "Preferisco il treno piuttosto che la macchina.", en: "I prefer the train rather than the car." },
          { it: "Spero che lei vada dal medico.", en: "I hope she goes to the doctor." },
        ],
      },
      {
        heading: `Hypercorrection and consistency`,
        body: [
          `Hypercorrection is "fixing" what was right: writing "qual'è" because "qual" "must" be elided; using "egli" in a casual text; avoiding "gli" for "a loro", which is actually accepted; adding a subjunctive where the indicative is required ("so che sia vero" instead of "so che è vero").`,
          `A good editor also checks consistency: one tense system for the narrative (don't slip from passato remoto to passato prossimo), one address form ("tu" or "Lei", not both), one register, one spelling of names and numbers.`,
        ],
        examples: [
          { it: "So che è vero.", en: "I know it's true." },
          { it: "Ho parlato con i vicini e gli ho spiegato il problema.", en: "I spoke to the neighbours and explained the problem to them." },
          { it: "Ognuno pensa a sé stesso.", en: "Everyone thinks of themselves." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se sarei ricco, comprerei una barca.",
        right: "Se fossi ricco, comprerei una barca.",
        why: `Never the conditional after "se" in a condition.`,
      },
      {
        wrong: "Ho incontrato Marta e gli ho dato il libro.",
        right: "Ho incontrato Marta e le ho dato il libro.",
        why: `To her = "le"; "gli" is masculine (or plural).`,
      },
      {
        wrong: "È un'altro problema.",
        right: "È un altro problema.",
        why: `"Altro" is masculine: no apostrophe after "un".`,
      },
      {
        wrong: "So che sia vero.",
        right: "So che è vero.",
        why: `Hypercorrection: "sapere" states a certainty and takes the indicative.`,
      },
      {
        wrong: "Spero che vadi tutto bene.",
        right: "Spero che vada tutto bene.",
        why: `The present subjunctive of "andare" is "vada".`,
      },
    ],
    faqs: [
      {
        q: `"Sé stesso" or "se stesso"?`,
        a: `Both are correct. The traditional rule dropped the accent before "stesso"; today many grammars and the Accademia della Crusca accept, or even prefer, "sé stesso" for consistency.`,
      },
      {
        q: `Is "piuttosto che" meaning or really wrong?`,
        a: `It is widely criticised by linguists and editors because it is ambiguous. In careful writing use "o" or "oppure", and keep "piuttosto che" for rather than.`,
      },
      {
        q: `Why do so many Italians write "qual'è"?`,
        a: `By analogy with "dov'è" and "com'è", which are real elisions. "Qual" is different: it exists before consonants too ("qual buon vento"), so it is a troncamento.`,
      },
    ],
    related: ["punctuation-and-style", "history-of-italian", "hypothetical-if-sentences"],
    lessons: [
      "c2-native-spelling-errors",
      "c2-native-grammar-errors",
      "c2-hypercorrection",
      "c2-consistency",
      "c2-drill-proofreading",
      "c2-reading-lab-flawed-texts",
      "c2-editing-professional",
      "c2-error-hunt-native",
      "c2-mission-edit-a-text",
      "c2-listening-lab-errors",
    ],
  },
];
