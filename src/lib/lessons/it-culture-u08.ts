// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u08.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 8: Cinema. Neorealism, Fellini,
// commedia all'italiana, Leone and Morricone, contemporary cinema and the
// Venice festival, Cinecittà, television and dubbing, and a movie night.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U08: Lesson[] = [
  {
    slug: "culture-neorealism",
    level: "IT-Culture",
    number: 1,
    title: "Neorealism",
    summary: "Discover the films Rossellini and De Sica made in the ruins of postwar Italy, with real streets and ordinary people.",
    duration: "15 min",
    sections: [
      {
        heading: "Il cinema dopo la guerra",
        body: [
          "In 1945 Italy was in ruins and the big studios were damaged or occupied. Directors took their cameras into the streets and filmed what they saw: poverty, unemployment, children without shoes, the war that had just ended. Critics called it \"il neorealismo\".",
          "Neorealist films used real locations instead of studio sets, natural light and often \"attori non professionisti\" (non-professional actors) who spoke in their own accents. The stories were simple and the endings were rarely happy.",
        ],
        examples: [
          { es: "Hanno girato il film per strada.", en: "They shot the film in the street." },
          { es: "Gli attori non erano professionisti.", en: "The actors weren't professionals." },
          { es: "Dopo la guerra c'era molta povertà.", en: "After the war there was a lot of poverty." },
          { es: "Il film non ha un lieto fine.", en: "The film doesn't have a happy ending." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They shot the film in the street.", answer: "Hanno girato il film per strada.", altAnswers: ["Hanno girato il film in strada.", "Il film è stato girato per strada."], explanation: "\"Girare un film\" = to shoot a film." },
          { type: "multiple-choice", question: "What was typical of neorealist films?", options: ["real locations and non-professional actors", "big studio sets and stars", "musical numbers", "science fiction stories"], correctIndex: 0, explanation: "They filmed real life in real places." },
        ],
      },
      {
        heading: "Rossellini",
        body: [
          "Roberto Rossellini's \"Roma città aperta\" (1945) was filmed only months after the Germans left Rome, while the war still went on in the north. It tells the story of the Resistance in Rome under German occupation, and the scene of Anna Magnani running after a truck became one of the most famous in Italian cinema.",
          "Rossellini followed it with \"Paisà\" (1946), six stories from the Allied advance through Italy, from Sicily to the Po delta. Both films made Italian cinema famous worldwide.",
        ],
        examples: [
          { es: "Il film racconta la Resistenza.", en: "The film tells the story of the Resistance." },
          { es: "Anna Magnani corre dietro al camion.", en: "Anna Magnani runs after the truck." },
          { es: "È una scena indimenticabile.", en: "It's an unforgettable scene." },
          { es: "Il film è uscito nel 1945.", en: "The film came out in 1945." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film came out in 1945.", answer: "Il film è uscito nel 1945.", altAnswers: ["Il film uscì nel 1945."], explanation: "\"Uscire\" = to be released." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's an [unforgettable] scene.", sentence: "È una scena ___.", answer: "indimenticabile", explanation: "\"In-\" + \"dimenticare\" + \"-abile\"." },
        ],
      },
      {
        heading: "De Sica",
        body: [
          "Vittorio De Sica directed \"Ladri di biciclette\" (1948), written with Cesare Zavattini. A poor man in Rome finally finds a job putting up posters, but he needs a bicycle, and on the first day it's stolen. He searches the city with his young son. The lead was played by a real factory worker, Lamberto Maggiorani.",
          "The film won an honorary Oscar and still appears on lists of the greatest films ever made. Its title is often mistranslated: it means \"bicycle thieves\", in the plural.",
        ],
        examples: [
          { es: "Gli rubano la bicicletta il primo giorno.", en: "They steal his bicycle on the first day." },
          { es: "Cerca la bici con suo figlio.", en: "He looks for the bike with his son." },
          { es: "Senza bicicletta perde il lavoro.", en: "Without a bicycle he loses the job." },
          { es: "Il protagonista era un operaio.", en: "The main actor was a factory worker." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He looks for the bike with his son.", answer: "Cerca la bici con suo figlio.", altAnswers: ["Cerca la bicicletta con suo figlio.", "Lui cerca la bici con suo figlio."], explanation: "\"Cercare\" = to look for, no \"per\"." },
          { type: "listen-choose", audio: "Gli rubano la bicicletta il primo giorno.", question: "What happens on the first day?", options: ["His bicycle is stolen.", "He buys a bicycle.", "He loses his son.", "He quits his job."], correctIndex: 0, explanation: "\"Rubare\" = to steal." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The actors weren't professionals.", answer: "Gli attori non erano professionisti.", altAnswers: ["Gli attori non erano dei professionisti."], explanation: "Imperfetto for a description." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After the war there was a lot of poverty.", answer: "Dopo la guerra c'era molta povertà.", altAnswers: ["Dopo la guerra c'era tanta povertà."], explanation: "\"C'era\" = there was." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film tells the story of the Resistance.", answer: "Il film racconta la Resistenza.", altAnswers: ["Il film racconta la storia della Resistenza."], explanation: "\"Raccontare\" = to tell." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Without a bicycle he loses the job.", answer: "Senza bicicletta perde il lavoro.", altAnswers: ["Senza la bicicletta perde il lavoro.", "Senza bici perde il lavoro."], explanation: "\"Senza\" often drops the article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film doesn't have a happy ending.", answer: "Il film non ha un lieto fine.", altAnswers: ["Il film non finisce bene.", "Il film non ha un finale felice."], explanation: "\"Il lieto fine\" = the happy ending." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The main actor was a [factory worker].", sentence: "Il protagonista era un ___.", answer: "operaio", explanation: "\"L'operaio\" = blue-collar worker." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Anna Magnani [runs after] the truck.", sentence: "Anna Magnani ___ al camion.", answer: "corre dietro", explanation: "\"Correre dietro a\" = to run after." },
      { type: "word-order", prompt: "Put the words in order to say: Neorealism was born after the war.", words: ["Il", "neorealismo", "è", "nato", "dopo", "la", "guerra."], translation: "Neorealism was born after the war.", explanation: "\"Nascere\" takes \"essere\"." },
      { type: "multiple-choice", question: "What does \"Ladri di biciclette\" mean?", options: ["Bicycle thieves", "The bicycle thief", "Stolen bicycles", "The bicycle race"], correctIndex: 0, explanation: "\"Ladri\" is plural." },
      { type: "dictation", audio: "Hanno girato il film per strada.", explanation: "\"Girare\" = to shoot (a film)." },
      { type: "speak", text: "Il neorealismo raccontava la vita della gente comune dopo la guerra.", prompt: "Say it in Italian: Neorealism told the life of ordinary people after the war.", tip: "Ne-o-re-a-LIS-mo: say every vowel.", explanation: "\"La gente comune\" = ordinary people." },
    ],
  },
  {
    slug: "culture-fellini",
    level: "IT-Culture",
    number: 2,
    title: "Fellini",
    summary: "Enter the world of Federico Fellini: La strada, the Trevi Fountain in La dolce vita, 8½ and the word \"paparazzo\".",
    duration: "15 min",
    sections: [
      {
        heading: "Da Rimini a Roma",
        body: [
          "Federico Fellini (1920-1993) was born in Rimini, on the Adriatic coast, and moved to Rome as a young man, where he drew cartoons and wrote for radio and cinema. He worked on Rossellini's \"Roma città aperta\" as a screenwriter.",
          "His first great success, \"La strada\" (1954), starred his wife Giulietta Masina as Gelsomina, a simple young woman sold to a traveling strongman. It won the Oscar for best foreign language film, the first of four Oscars for his films.",
        ],
        examples: [
          { es: "Fellini è nato a Rimini.", en: "Fellini was born in Rimini." },
          { es: "Da giovane disegnava fumetti.", en: "As a young man he drew comics." },
          { es: "Sua moglie era un'attrice.", en: "His wife was an actress." },
          { es: "Il film ha vinto l'Oscar.", en: "The film won the Oscar." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His wife was an actress.", answer: "Sua moglie era un'attrice.", altAnswers: ["Sua moglie faceva l'attrice."], explanation: "No article with \"sua moglie\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As a young man he [drew] comics.", sentence: "Da giovane ___ fumetti.", answer: "disegnava", explanation: "Imperfetto for a past habit." },
        ],
      },
      {
        heading: "La dolce vita",
        body: [
          "\"La dolce vita\" (1960) follows a journalist, played by Marcello Mastroianni, through a week of parties, nightclubs and empty glamor in Rome. Its most famous scene shows Anita Ekberg wading into the Trevi Fountain at night. It won the Palme d'Or at Cannes and shocked the Church.",
          "One character, a photographer chasing celebrities, is called Paparazzo. His name became the word for such photographers, in Italian and in English. The title itself became a phrase: \"fare la dolce vita\" means to live a carefree life of pleasure.",
        ],
        examples: [
          { es: "Entra nella Fontana di Trevi di notte.", en: "She walks into the Trevi Fountain at night." },
          { es: "I paparazzi aspettano fuori dal locale.", en: "The paparazzi are waiting outside the club." },
          { es: "Quella scena è famosa in tutto il mondo.", en: "That scene is famous all over the world." },
          { es: "Al mare facciamo la dolce vita.", en: "At the seaside we live the good life." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That scene is famous all over the world.", answer: "Quella scena è famosa in tutto il mondo.", altAnswers: ["Quella scena è conosciuta in tutto il mondo."], explanation: "\"In tutto il mondo\" = all over the world." },
          { type: "multiple-choice", question: "Where does the word \"paparazzo\" come from?", options: ["a character in La dolce vita", "a Roman newspaper", "a camera brand", "a Neapolitan song"], correctIndex: 0, explanation: "Fellini's celebrity photographer." },
        ],
      },
      {
        heading: "8½ e Amarcord",
        body: [
          "\"8½\" (\"Otto e mezzo\", 1963) is about a famous director who can't decide what film to make, and it mixes memories, dreams and reality. The title counts Fellini's own works: six full films, plus two short episodes and one co-directed film, each counted as a half; that makes seven and a half, so this was film number eight and a half.",
          "\"Amarcord\" (1973) returns to the Rimini of his youth. The title means \"I remember\" in the dialect of Romagna. His style gave Italian an adjective: \"felliniano\", for anything grotesque, dreamlike or bigger than life.",
        ],
        examples: [
          { es: "Il regista non sa che film fare.", en: "The director doesn't know what film to make." },
          { es: "Il film mescola sogni e ricordi.", en: "The film mixes dreams and memories." },
          { es: "\"Amarcord\" vuol dire \"mi ricordo\".", en: "\"Amarcord\" means \"mi ricordo\"." },
          { es: "È stata una festa felliniana.", en: "It was a wild, Fellini-like party." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The director doesn't know what film to make.", answer: "Il regista non sa che film fare.", altAnswers: ["Il regista non sa quale film fare."], explanation: "\"Il regista\" = film director." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film mixes dreams and memories.", answer: "Il film mescola sogni e ricordi.", altAnswers: ["Il film mescola i sogni e i ricordi.", "Il film mischia sogni e ricordi."], explanation: "\"Il ricordo\" = memory." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fellini was born in Rimini.", answer: "Fellini è nato a Rimini.", altAnswers: ["Fellini nacque a Rimini."], explanation: "\"Nascere\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film won the Oscar.", answer: "Il film ha vinto l'Oscar.", altAnswers: ["Il film ha vinto un Oscar."], explanation: "\"Vincere\" → \"vinto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The paparazzi are waiting outside the club.", answer: "I paparazzi aspettano fuori dal locale.", altAnswers: ["I paparazzi stanno aspettando fuori dal locale.", "I paparazzi aspettano davanti al locale."], explanation: "\"Fuori da\" = outside." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She walks into the Trevi Fountain at night.", answer: "Entra nella Fontana di Trevi di notte.", altAnswers: ["Di notte entra nella Fontana di Trevi."], explanation: "\"Di notte\" = at night." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the seaside we live the good life.", answer: "Al mare facciamo la dolce vita.", altAnswers: ["Al mare facciamo una vita dolce."], explanation: "\"Fare la dolce vita\" = to live it up." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [director] doesn't know what film to make.", sentence: "Il ___ non sa che film fare.", answer: "regista", explanation: "\"Il regista\": masculine despite -a." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Amarcord\" [means] \"mi ricordo\".", sentence: "\"Amarcord\" ___ \"mi ricordo\".", answer: "vuol dire", altAnswers: ["vuole dire", "significa"], explanation: "\"Voler dire\" = to mean." },
      { type: "word-order", prompt: "Put the words in order to say: \"La dolce vita\" won the Palme d'Or in 1960.", words: ["La", "dolce", "vita", "ha", "vinto", "la", "Palma", "d'oro", "nel", "1960."], translation: "\"La dolce vita\" won the Palme d'Or in 1960.", explanation: "Italians say \"la Palma d'oro\"." },
      {
        type: "matching",
        instructions: "Match the film to its subject.",
        pairs: [
          { left: "La strada", right: "a traveling strongman and Gelsomina" },
          { left: "La dolce vita", right: "a journalist in glamorous Rome" },
          { left: "Otto e mezzo", right: "a director with no ideas" },
          { left: "Amarcord", right: "memories of Rimini" },
        ],
        explanation: "Four Fellini classics.",
      },
      { type: "dictation", audio: "Il film mescola sogni e ricordi.", explanation: "\"Mescola\": stress on the first syllable." },
      { type: "speak", text: "Il mio film preferito di Fellini è Amarcord, perché parla della sua infanzia.", prompt: "Say it in Italian: My favorite Fellini film is \"Amarcord\", because it's about his childhood.", tip: "In-FAN-zia: stress on -fan-.", explanation: "\"Parlare di\" = to be about." },
    ],
  },
  {
    slug: "culture-commedia-all-italiana",
    level: "IT-Culture",
    number: 3,
    title: "Commedia all'Italiana",
    summary: "Laugh with Italy's great postwar comedies, which made fun of the country's own flaws.",
    duration: "15 min",
    sections: [
      {
        heading: "Ridere dei propri difetti",
        body: [
          "In the late 1950s and 1960s, as Italy grew rich during the economic boom, a new kind of comedy appeared: \"la commedia all'italiana\". The name comes from \"Divorzio all'italiana\" (1961), a film about a Sicilian nobleman who, since divorce was illegal, plans to get rid of his wife another way.",
          "These films laugh at Italian flaws: laziness, cunning, vanity, the obsession with appearances. They're funny, but often bitter, and many end badly.",
        ],
        examples: [
          { es: "Il divorzio era vietato.", en: "Divorce was forbidden." },
          { es: "Il film prende in giro gli italiani.", en: "The film makes fun of Italians." },
          { es: "Fa ridere, ma è anche triste.", en: "It's funny, but it's also sad." },
          { es: "Finisce male.", en: "It ends badly." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's funny, but it's also sad.", answer: "Fa ridere, ma è anche triste.", altAnswers: ["È divertente, ma è anche triste.", "Fa ridere ma è anche triste."], explanation: "\"Fa ridere\" = it makes you laugh." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film [makes fun of] Italians.", sentence: "Il film ___ gli italiani.", answer: "prende in giro", explanation: "\"Prendere in giro\" = to tease, mock." },
        ],
      },
      {
        heading: "I film",
        body: [
          "In \"I soliti ignoti\" (1958), by Mario Monicelli, a gang of clumsy small-time thieves plans a robbery that goes completely wrong. In \"Il sorpasso\" (1962), by Dino Risi, a loud, reckless man takes a shy student on a fast drive along the coast during the August holidays, overtaking every car on the road.",
          "\"Il sorpasso\" means overtaking another car, and the film is often read as a picture of the boom years: fast, fun and dangerous.",
        ],
        examples: [
          { es: "I ladri sono un disastro.", en: "The thieves are a disaster." },
          { es: "Il colpo va tutto storto.", en: "The heist goes completely wrong." },
          { es: "Guida troppo veloce.", en: "He drives too fast." },
          { es: "Fa un sorpasso pericoloso.", en: "He overtakes dangerously." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He drives too fast.", answer: "Guida troppo veloce.", altAnswers: ["Guida troppo velocemente.", "Lui guida troppo veloce."], explanation: "\"Guidare\" = to drive." },
          { type: "listen-choose", audio: "Il colpo va tutto storto.", question: "What happens to the heist?", options: ["It goes completely wrong.", "It works perfectly.", "It's canceled.", "The police help."], correctIndex: 0, explanation: "\"Andare storto\" = to go wrong." },
        ],
      },
      {
        heading: "I mattatori",
        body: [
          "The genre had its great actors, \"i mattatori\" (stars who dominate the stage): Alberto Sordi, the perfect average Italian, selfish and cowardly but lovable; Vittorio Gassman, loud and charming; Ugo Tognazzi; Nino Manfredi; and Monica Vitti, one of the few women who led comedies.",
          "Before them came Totò, the Neapolitan prince of comedy, whose lines Italians still quote. Many of these films play on TV every Christmas, and families know them by heart.",
        ],
        examples: [
          { es: "Sordi interpretava l'italiano medio.", en: "Sordi played the average Italian." },
          { es: "Monica Vitti era bravissima.", en: "Monica Vitti was brilliant." },
          { es: "Mio padre conosce le battute a memoria.", en: "My father knows the lines by heart." },
          { es: "Lo danno in TV ogni Natale.", en: "They show it on TV every Christmas." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They show it on TV every Christmas.", answer: "Lo danno in TV ogni Natale.", altAnswers: ["Lo fanno in TV ogni Natale.", "Lo danno in televisione ogni Natale.", "Lo trasmettono in TV ogni Natale."], explanation: "\"Dare\" = to show (a film)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My father knows the lines by heart.", answer: "Mio padre conosce le battute a memoria.", altAnswers: ["Mio padre sa le battute a memoria."], explanation: "\"La battuta\" = line, joke." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Divorce was forbidden.", answer: "Il divorzio era vietato.", altAnswers: ["Il divorzio era proibito.", "Il divorzio non era permesso."], explanation: "Divorce became legal in Italy in 1970." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It ends badly.", answer: "Finisce male.", explanation: "\"Male\" = badly." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The thieves are a disaster.", answer: "I ladri sono un disastro.", explanation: "\"Il ladro\" = thief." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sordi played the average Italian.", answer: "Sordi interpretava l'italiano medio.", altAnswers: ["Sordi faceva l'italiano medio.", "Sordi ha interpretato l'italiano medio."], explanation: "\"Interpretare\" = to play a role." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Monica Vitti was brilliant.", answer: "Monica Vitti era bravissima.", altAnswers: ["Monica Vitti era bravissima!", "Monica Vitti era geniale."], explanation: "\"Bravissima\" for a performer." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [overtakes] dangerously.", sentence: "Fa un ___ pericoloso.", answer: "sorpasso", explanation: "\"Fare un sorpasso\" = to overtake." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The heist goes [completely wrong].", sentence: "Il colpo va ___.", answer: "tutto storto", explanation: "\"Storto\" = crooked." },
      { type: "word-order", prompt: "Put the words in order to say: These films laugh at Italian flaws.", words: ["Questi", "film", "ridono", "dei", "difetti", "italiani."], translation: "These films laugh at Italian flaws.", explanation: "\"Ridere di\" = to laugh at." },
      { type: "multiple-choice", question: "Where does the name \"commedia all'italiana\" come from?", options: ["the film \"Divorzio all'italiana\"", "a theater in Naples", "a TV show", "a newspaper column"], correctIndex: 0, explanation: "Pietro Germi's 1961 film." },
      { type: "dictation", audio: "Fa ridere, ma è anche triste.", explanation: "\"Fa ridere\" = it's funny." },
      { type: "speak", text: "Questi film mi fanno ridere, ma alla fine mi lasciano un po' di amarezza.", prompt: "Say it in Italian: These films make me laugh, but in the end they leave me with some bitterness.", tip: "A-ma-REZ-za: the zz sounds like ts.", explanation: "\"L'amarezza\" = bitterness." },
    ],
  },
  {
    slug: "culture-spaghetti-western",
    level: "IT-Culture",
    number: 4,
    title: "Spaghetti Westerns",
    summary: "Ride with Sergio Leone and listen to Ennio Morricone: how Italians reinvented the American western.",
    duration: "15 min",
    sections: [
      {
        heading: "Il western all'italiana",
        body: [
          "In the 1960s Italian studios made hundreds of westerns. Foreigners called them spaghetti westerns; Italians usually say \"western all'italiana\". They were cheap to make, often filmed in the deserts of southern Spain with Italian, Spanish and American actors, and dubbed afterwards.",
          "Compared with Hollywood, the heroes were dirtier, greedier and more violent, the close-ups were longer and the silences were longer still.",
        ],
        examples: [
          { es: "Hanno girato il film nel deserto.", en: "They shot the film in the desert." },
          { es: "L'eroe non parla quasi mai.", en: "The hero hardly ever speaks." },
          { es: "Costava poco fare un western.", en: "Making a western was cheap." },
          { es: "Il film è stato doppiato dopo.", en: "The film was dubbed afterwards." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hero hardly ever speaks.", answer: "L'eroe non parla quasi mai.", altAnswers: ["L'eroe quasi non parla mai.", "L'eroe parla pochissimo."], explanation: "\"Non ... quasi mai\" = hardly ever." },
          { type: "multiple-choice", question: "What do Italians usually call these films?", options: ["western all'italiana", "spaghetti all'italiana", "cinema americano", "film storici"], correctIndex: 0, explanation: "\"Spaghetti western\" is the foreign nickname." },
        ],
      },
      {
        heading: "Sergio Leone",
        body: [
          "Sergio Leone (1929-1989), a Roman, made the genre famous. His \"Dollars trilogy\", \"Per un pugno di dollari\" (1964), \"Per qualche dollaro in più\" (1965) and \"Il buono, il brutto, il cattivo\" (1966), starred a then little-known American TV actor, Clint Eastwood, as a nameless gunman.",
          "Then came \"C'era una volta il West\" (1968), and later \"C'era una volta in America\" (1984), about gangsters in New York. Leone filmed faces in extreme close-up and made the final duel a long ritual.",
        ],
        examples: [
          { es: "Il protagonista non ha un nome.", en: "The main character has no name." },
          { es: "Il duello finale dura molto.", en: "The final duel lasts a long time." },
          { es: "Leone era romano.", en: "Leone was from Rome." },
          { es: "Ho visto la trilogia del dollaro.", en: "I've seen the Dollars trilogy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The main character has no name.", answer: "Il protagonista non ha un nome.", altAnswers: ["Il protagonista non ha nome."], explanation: "\"Il protagonista\" = the main character." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The final duel [lasts a long time].", sentence: "Il duello finale ___.", answer: "dura molto", altAnswers: ["dura tanto"], explanation: "\"Durare\" = to last." },
        ],
      },
      {
        heading: "Ennio Morricone",
        body: [
          "The music was half the film. Ennio Morricone (1928-2020), also Roman and an old school friend of Leone's, wrote scores with whistling, electric guitars, bells, whips, shouts and choirs. For some scenes Leone played the music on set while filming.",
          "Morricone wrote music for more than four hundred films and TV works. He received an honorary Oscar in 2007 and won the Oscar for best score in 2016, at eighty-seven.",
        ],
        examples: [
          { es: "La musica è metà del film.", en: "The music is half the film." },
          { es: "Erano compagni di scuola.", en: "They were schoolmates." },
          { es: "Nella colonna sonora c'è un fischio.", en: "There's whistling in the soundtrack." },
          { es: "Ha vinto l'Oscar a ottantasette anni.", en: "He won the Oscar at eighty-seven." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were schoolmates.", answer: "Erano compagni di scuola.", altAnswers: ["Erano compagni di classe."], explanation: "\"Il compagno di scuola\" = schoolmate." },
          { type: "listen-choose", audio: "Nella colonna sonora c'è un fischio.", question: "What's in the soundtrack?", options: ["whistling", "a piano", "silence", "a famous singer"], correctIndex: 0, explanation: "\"Il fischio\" = whistle." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They shot the film in the desert.", answer: "Hanno girato il film nel deserto.", altAnswers: ["Il film è stato girato nel deserto."], explanation: "\"Nel deserto\" = in the desert." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The music is half the film.", answer: "La musica è metà del film.", altAnswers: ["La musica è la metà del film."], explanation: "\"La metà\" = half." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leone was from Rome.", answer: "Leone era romano.", altAnswers: ["Leone era di Roma."], explanation: "\"Essere di\" + city = to be from." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He won the Oscar at eighty-seven.", answer: "Ha vinto l'Oscar a ottantasette anni.", altAnswers: ["Ha vinto l'Oscar a 87 anni."], explanation: "\"A\" + age + \"anni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film was dubbed afterwards.", answer: "Il film è stato doppiato dopo.", altAnswers: ["Il film è stato doppiato in seguito.", "Il film è stato doppiato più tardi."], explanation: "\"Doppiare\" = to dub." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's whistling in the [soundtrack].", sentence: "Nella ___ c'è un fischio.", answer: "colonna sonora", explanation: "\"La colonna sonora\" = soundtrack." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Making a western [was cheap].", sentence: "___ poco fare un western.", answer: "Costava", explanation: "\"Costare poco\" = to be cheap." },
      { type: "word-order", prompt: "Put the words in order to say: Morricone wrote music for more than four hundred films.", words: ["Morricone", "ha", "scritto", "musica", "per", "più", "di", "quattrocento", "film."], translation: "Morricone wrote music for more than four hundred films.", explanation: "\"Più di\" before numbers." },
      {
        type: "matching",
        instructions: "Match the Italian title to the English.",
        pairs: [
          { left: "Per un pugno di dollari", right: "A Fistful of Dollars" },
          { left: "Il buono, il brutto, il cattivo", right: "The Good, the Bad and the Ugly" },
          { left: "C'era una volta il West", right: "Once Upon a Time in the West" },
          { left: "Per qualche dollaro in più", right: "For a Few Dollars More" },
        ],
        explanation: "Note the order: in Italian \"il brutto\" comes before \"il cattivo\".",
      },
      { type: "dictation", audio: "L'eroe non parla quasi mai.", explanation: "\"L'eroe\": three vowels in a row." },
      { type: "speak", text: "Quando sento la musica di Morricone, penso subito al deserto e ai cowboy.", prompt: "Say it in Italian: When I hear Morricone's music, I immediately think of the desert and the cowboys.", tip: "Mor-ri-CO-ne: roll the double r.", explanation: "\"Pensare a\" = to think of." },
    ],
  },
  {
    slug: "culture-contemporary-cinema",
    level: "IT-Culture",
    number: 5,
    title: "Contemporary Cinema",
    summary: "Follow Italian cinema from Cinema Paradiso to La grande bellezza, and visit the Venice Film Festival.",
    duration: "15 min",
    sections: [
      {
        heading: "Gli Oscar",
        body: [
          "Italian cinema has kept winning abroad. Giuseppe Tornatore's \"Nuovo Cinema Paradiso\" (1988), about a boy and the projectionist of a village cinema in Sicily, won the Oscar for best foreign language film. Roberto Benigni's \"La vita è bella\" (1997), a comedy that turns into a story about a father protecting his son in a concentration camp, won three Oscars, including best actor.",
          "Paolo Sorrentino's \"La grande bellezza\" (2013), about an aging writer drifting through the nights of Rome, won in 2014 and was often compared with \"La dolce vita\".",
        ],
        examples: [
          { es: "Il film parla di un bambino e di un proiezionista.", en: "The film is about a boy and a projectionist." },
          { es: "Ha vinto tre premi Oscar.", en: "It won three Oscars." },
          { es: "All'inizio è una commedia.", en: "At first it's a comedy." },
          { es: "Mi ha fatto piangere.", en: "It made me cry." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It made me cry.", answer: "Mi ha fatto piangere.", altAnswers: ["Mi ha fatto piangere tanto."], explanation: "\"Fare\" + infinitive = to make someone do something." },
          { type: "multiple-choice", question: "Where is \"Nuovo Cinema Paradiso\" set?", options: ["in a Sicilian village", "in Milan", "in Venice", "in a concentration camp"], correctIndex: 0, explanation: "A village cinema in Sicily." },
        ],
      },
      {
        heading: "Registi di oggi",
        body: [
          "Other names to know: Nanni Moretti, who won the Palme d'Or in 2001 with \"La stanza del figlio\"; Matteo Garrone, whose \"Gomorra\" (2008) showed the Neapolitan Camorra without glamor; and Paola Cortellesi, whose black-and-white \"C'è ancora domani\" (2023), set in Rome in 1946, became one of the biggest Italian box-office hits of recent years.",
          "Italian films often deal with family, the South, organized crime, history and the gap between generations.",
        ],
        examples: [
          { es: "Il film è in bianco e nero.", en: "The film is in black and white." },
          { es: "È ambientato a Roma nel 1946.", en: "It's set in Rome in 1946." },
          { es: "Parla della criminalità organizzata.", en: "It's about organized crime." },
          { es: "È stato un grande successo.", en: "It was a big hit." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film is in black and white.", answer: "Il film è in bianco e nero.", explanation: "Always \"bianco e nero\", in that order." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's [set] in Rome in 1946.", sentence: "È ___ a Roma nel 1946.", answer: "ambientato", explanation: "\"Essere ambientato\" = to be set." },
        ],
      },
      {
        heading: "La Mostra di Venezia",
        body: [
          "The Venice Film Festival, officially \"la Mostra internazionale d'arte cinematografica\", began in 1932 and is the oldest film festival in the world. Every year, from late August to early September, stars walk the red carpet on the Lido, the long island between the lagoon and the sea.",
          "The top prize is \"il Leone d'oro\", the golden lion, after the symbol of Venice and St Mark. Italians just call the festival \"la Mostra\" or \"Venezia\".",
        ],
        examples: [
          { es: "La Mostra si tiene al Lido.", en: "The festival is held on the Lido." },
          { es: "Ha vinto il Leone d'oro.", en: "It won the Golden Lion." },
          { es: "Le star sfilano sul tappeto rosso.", en: "The stars walk the red carpet." },
          { es: "È il festival più antico del mondo.", en: "It's the oldest festival in the world." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It won the Golden Lion.", answer: "Ha vinto il Leone d'oro.", explanation: "\"D'oro\" = golden." },
          { type: "listen-choose", audio: "Le star sfilano sul tappeto rosso.", question: "What do the stars do?", options: ["They walk the red carpet.", "They sit in the audience.", "They vote for the films.", "They leave early."], correctIndex: 0, explanation: "\"Sfilare\" = to parade." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It won three Oscars.", answer: "Ha vinto tre premi Oscar.", altAnswers: ["Ha vinto tre Oscar."], explanation: "\"Oscar\" doesn't change in the plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's about organized crime.", answer: "Parla della criminalità organizzata.", altAnswers: ["Il film parla della criminalità organizzata.", "Parla di criminalità organizzata."], explanation: "\"Parlare di\" = to be about." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a big hit.", answer: "È stato un grande successo.", altAnswers: ["È stato un successo enorme.", "Ha avuto un grande successo."], explanation: "\"Il successo\" = success, hit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The festival is held on the Lido.", answer: "La Mostra si tiene al Lido.", altAnswers: ["Il festival si tiene al Lido.", "La Mostra si svolge al Lido."], explanation: "\"Al Lido\" = on the Lido." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At first it's a comedy.", answer: "All'inizio è una commedia.", altAnswers: ["Inizialmente è una commedia."], explanation: "\"All'inizio\" = at first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's [the oldest] festival in the world.", sentence: "È il festival ___ del mondo.", answer: "più antico", explanation: "Superlative: \"il più\" + adjective + \"del\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film is about a boy and a [projectionist].", sentence: "Il film parla di un bambino e di un ___.", answer: "proiezionista", explanation: "\"Il proiezionista\" runs the projector." },
      { type: "word-order", prompt: "Put the words in order to say: The Venice festival began in 1932.", words: ["La", "Mostra", "di", "Venezia", "è", "nata", "nel", "1932."], translation: "The Venice festival began in 1932.", explanation: "\"Nascere\" for things that start." },
      {
        type: "matching",
        instructions: "Match the film to its director.",
        pairs: [
          { left: "Nuovo Cinema Paradiso", right: "Giuseppe Tornatore" },
          { left: "La vita è bella", right: "Roberto Benigni" },
          { left: "La grande bellezza", right: "Paolo Sorrentino" },
          { left: "Gomorra", right: "Matteo Garrone" },
        ],
        explanation: "Four modern classics.",
      },
      { type: "dictation", audio: "Il film è in bianco e nero.", explanation: "\"Bianco e nero\" = black and white." },
      { type: "speak", text: "Ho visto La vita è bella tre volte e piango sempre alla fine.", prompt: "Say it in Italian: I've seen Life Is Beautiful three times and I always cry at the end.", tip: "PIAN-go: one syllable for \"pian\".", explanation: "\"Piangere\" = to cry." },
    ],
  },
  {
    slug: "culture-cinecitta",
    level: "IT-Culture",
    number: 6,
    title: "Cinecittà",
    summary: "Visit Rome's film city: its fascist-era origins, the years of \"Hollywood on the Tiber\" and Fellini's Studio 5.",
    duration: "15 min",
    sections: [
      {
        heading: "La città del cinema",
        body: [
          "\"Cinecittà\" means cinema city. The studios opened in 1937 on Via Tuscolana, on what was then the edge of Rome. The fascist government built them to make films that would compete with Hollywood and spread its propaganda.",
          "During and after the war the studios were damaged and then used as a camp for refugees and displaced people. Production started again in the late 1940s.",
        ],
        examples: [
          { es: "Gli studi sono stati inaugurati nel 1937.", en: "The studios were opened in 1937." },
          { es: "Erano alla periferia di Roma.", en: "They were on the outskirts of Rome." },
          { es: "Dopo la guerra ci vivevano i profughi.", en: "After the war refugees lived there." },
          { es: "Il regime voleva fare propaganda.", en: "The regime wanted to make propaganda." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The studios were opened in 1937.", answer: "Gli studi sono stati inaugurati nel 1937.", altAnswers: ["Gli studi sono stati aperti nel 1937."], explanation: "Passive: \"essere\" + participle." },
          { type: "multiple-choice", question: "What does \"Cinecittà\" mean?", options: ["cinema city", "city cinema", "cinema school", "a Roman street"], correctIndex: 0, explanation: "\"Cine\" + \"città\"." },
        ],
      },
      {
        heading: "Hollywood sul Tevere",
        body: [
          "In the 1950s and early 1960s costs in Italy were low, and American studios came to Rome to make big historical films: \"Quo Vadis\" (1951), \"Ben-Hur\" (1959), with its chariot race, and \"Cleopatra\" (1963). Rome was nicknamed \"Hollywood sul Tevere\", Hollywood on the Tiber.",
          "Stars filled the cafes of Via Veneto at night, and photographers followed them, just as in \"La dolce vita\".",
        ],
        examples: [
          { es: "Gli americani venivano a girare a Roma.", en: "The Americans came to shoot in Rome." },
          { es: "Costava meno che a Hollywood.", en: "It cost less than in Hollywood." },
          { es: "La corsa delle bighe è stata girata qui.", en: "The chariot race was filmed here." },
          { es: "La sera le star andavano in Via Veneto.", en: "In the evening the stars went to Via Veneto." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It cost less than in Hollywood.", answer: "Costava meno che a Hollywood.", altAnswers: ["Costava meno di Hollywood."], explanation: "\"Meno che\" before a place phrase." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The Americans [came] to shoot in Rome.", sentence: "Gli americani ___ a girare a Roma.", answer: "venivano", explanation: "Imperfetto for a repeated past action." },
        ],
      },
      {
        heading: "Il Teatro 5",
        body: [
          "Fellini loved Cinecittà more than real locations: in its huge \"Teatro 5\" (Studio 5) he rebuilt streets, the sea, even Via Veneto. It is still called \"il teatro di Fellini\", and his funeral wake was held there in 1993.",
          "Today Cinecittà still makes films and series, and visitors can tour the studios and old sets. You can get there by metro: line A has a stop called Cinecittà.",
        ],
        examples: [
          { es: "Fellini ricostruiva le strade in studio.", en: "Fellini rebuilt streets in the studio." },
          { es: "Si può visitare il set.", en: "You can visit the set." },
          { es: "Prendi la metro A e scendi a Cinecittà.", en: "Take metro line A and get off at Cinecittà." },
          { es: "Qui girano ancora film e serie.", en: "They still shoot films and series here." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can visit the set.", answer: "Si può visitare il set.", altAnswers: ["È possibile visitare il set.", "Puoi visitare il set."], explanation: "\"Si può\" = one can." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take metro line A and get off at Cinecittà.", answer: "Prendi la metro A e scendi a Cinecittà.", altAnswers: ["Prendi la linea A e scendi a Cinecittà.", "Prendi la metropolitana A e scendi a Cinecittà."], explanation: "\"Scendere\" = to get off." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were on the outskirts of Rome.", answer: "Erano alla periferia di Roma.", altAnswers: ["Erano nella periferia di Roma."], explanation: "\"La periferia\" = the outskirts." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After the war refugees lived there.", answer: "Dopo la guerra ci vivevano i profughi.", altAnswers: ["Dopo la guerra ci abitavano i profughi.", "Dopo la guerra i profughi vivevano lì."], explanation: "\"Ci\" = there." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The chariot race was filmed here.", answer: "La corsa delle bighe è stata girata qui.", altAnswers: ["La corsa delle bighe l'hanno girata qui."], explanation: "\"La biga\" = Roman chariot." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They still shoot films and series here.", answer: "Qui girano ancora film e serie.", altAnswers: ["Girano ancora film e serie qui.", "Qui si girano ancora film e serie."], explanation: "\"Film\" and \"serie\" don't change in the plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fellini rebuilt streets in the studio.", answer: "Fellini ricostruiva le strade in studio.", altAnswers: ["Fellini ricostruiva strade in studio.", "Fellini ha ricostruito le strade in studio."], explanation: "\"Ri-\" + \"costruire\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [regime] wanted to make propaganda.", sentence: "Il ___ voleva fare propaganda.", answer: "regime", explanation: "\"Il regime\" usually means the fascist regime." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the evening the stars [went] to Via Veneto.", sentence: "La sera le star ___ in Via Veneto.", answer: "andavano", explanation: "Imperfetto for a habit." },
      { type: "word-order", prompt: "Put the words in order to say: Rome was called Hollywood on the Tiber.", words: ["Roma", "era", "chiamata", "Hollywood", "sul", "Tevere."], translation: "Rome was called Hollywood on the Tiber.", explanation: "\"Sul Tevere\" = on the Tiber." },
      { type: "multiple-choice", question: "Which film's chariot race was shot at Cinecittà?", options: ["Ben-Hur", "La strada", "Ladri di biciclette", "Amarcord"], correctIndex: 0, explanation: "\"Ben-Hur\", 1959." },
      { type: "dictation", audio: "Si può visitare il set.", explanation: "\"Può\" ends with an accent." },
      { type: "speak", text: "Domani andiamo a Cinecittà a vedere i set dei film antichi.", prompt: "Say it in Italian: Tomorrow we're going to Cinecittà to see the sets of old films.", tip: "Ci-ne-cit-TÀ: stress the last syllable.", explanation: "\"Andare a\" + infinitive." },
    ],
  },
  {
    slug: "culture-tv",
    level: "IT-Culture",
    number: 7,
    title: "Television",
    summary: "Switch on Italian TV: the RAI, Carosello, the evening news, Italian drama series and the art of dubbing.",
    duration: "15 min",
    sections: [
      {
        heading: "Mamma RAI",
        body: [
          "Regular television in Italy began on 3 January 1954, with the RAI, the public broadcaster, nicknamed \"mamma RAI\". In a country where many people spoke mainly dialect, TV helped spread standard Italian. Households pay a license fee, \"il canone\", which since 2016 has been charged on the electricity bill.",
          "From 1957 to 1977 the most loved program was \"Carosello\", ten minutes of short comic sketches with advertising at the end, every evening after the news. For a generation of children the rule was \"dopo Carosello, tutti a letto\".",
        ],
        examples: [
          { es: "La TV ha insegnato l'italiano a tutti.", en: "TV taught everyone Italian." },
          { es: "Il canone si paga con la bolletta.", en: "The license fee is paid with the bill." },
          { es: "Dopo Carosello, tutti a letto!", en: "After Carosello, everyone to bed!" },
          { es: "Una volta c'era un solo canale.", en: "Once there was only one channel." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once there was only one channel.", answer: "Una volta c'era un solo canale.", altAnswers: ["Una volta c'era solo un canale."], explanation: "\"Una volta\" = once, in the old days." },
          { type: "multiple-choice", question: "What was \"Carosello\"?", options: ["short sketches with ads, every evening", "a quiz show", "the news", "a cooking show"], correctIndex: 0, explanation: "Ten minutes after the evening news, 1957-1977." },
        ],
      },
      {
        heading: "Il TG e la fiction",
        body: [
          "Today there are public and private channels, but some habits remain. Many families eat dinner with \"il TG\" (the news) on. Evenings bring talk shows, quiz shows and \"la fiction\": in Italian this word means a TV drama series.",
          "Popular Italian series include \"Il commissario Montalbano\", from Andrea Camilleri's detective novels set in Sicily, and \"L'amica geniale\", from Elena Ferrante's novels about two friends in Naples. Both were watched all over the world.",
        ],
        examples: [
          { es: "Ceniamo con il TG acceso.", en: "We have dinner with the news on." },
          { es: "Stasera c'è una fiction su Rai 1.", en: "There's a drama series on Rai 1 tonight." },
          { es: "Montalbano è un commissario siciliano.", en: "Montalbano is a Sicilian police inspector." },
          { es: "Ho guardato tutta la serie in una settimana.", en: "I watched the whole series in a week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have dinner with the news on.", answer: "Ceniamo con il TG acceso.", altAnswers: ["Ceniamo col TG acceso.", "Ceniamo con il telegiornale acceso."], explanation: "\"Acceso\" = on, switched on." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I watched [the whole series] in a week.", sentence: "Ho guardato ___ in una settimana.", answer: "tutta la serie", explanation: "\"Tutto\" + article + noun." },
        ],
      },
      {
        heading: "Il doppiaggio",
        body: [
          "In Italy almost every foreign film and series is dubbed. Italian dubbing is an art with a long tradition, and well-known actors have had the same Italian voice for decades. Many Italians find it strange to hear a famous star's real voice.",
          "Subtitles are becoming more common with streaming, and some cinemas show films \"in lingua originale\" (in the original language) on certain evenings. Look for \"V.O.\" or \"sottotitolato\".",
        ],
        examples: [
          { es: "Il film è doppiato in italiano.", en: "The film is dubbed into Italian." },
          { es: "Preferisco la versione originale.", en: "I prefer the original version." },
          { es: "Ci sono i sottotitoli?", en: "Are there subtitles?" },
          { es: "Ha sempre la stessa voce italiana.", en: "He always has the same Italian voice." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I prefer the original version.", answer: "Preferisco la versione originale.", altAnswers: ["Io preferisco la versione originale.", "Preferisco la lingua originale."], explanation: "\"Preferire\" → \"preferisco\"." },
          { type: "listen-choose", audio: "Il film è doppiato in italiano.", question: "What's true about the film?", options: ["It's dubbed into Italian.", "It has subtitles.", "It's silent.", "It's in English only."], correctIndex: 0, explanation: "\"Doppiato\" = dubbed." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "TV taught everyone Italian.", answer: "La TV ha insegnato l'italiano a tutti.", altAnswers: ["La televisione ha insegnato l'italiano a tutti."], explanation: "\"Insegnare qualcosa a qualcuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are there subtitles?", answer: "Ci sono i sottotitoli?", altAnswers: ["Ci sono sottotitoli?", "Ha i sottotitoli?"], explanation: "\"Il sottotitolo\" = subtitle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The license fee is paid with the bill.", answer: "Il canone si paga con la bolletta.", altAnswers: ["Il canone si paga nella bolletta."], explanation: "\"La bolletta\" = utility bill." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a drama series on Rai 1 tonight.", answer: "Stasera c'è una fiction su Rai 1.", altAnswers: ["C'è una fiction su Rai 1 stasera.", "Stasera su Rai 1 c'è una fiction."], explanation: "\"Su\" + channel." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He always has the same Italian voice.", answer: "Ha sempre la stessa voce italiana.", altAnswers: ["Lui ha sempre la stessa voce italiana."], explanation: "\"Lo stesso / la stessa\" = the same." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film is [dubbed] into Italian.", sentence: "Il film è ___ in italiano.", answer: "doppiato", explanation: "\"Doppiare\" = to dub." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Montalbano is a Sicilian [police inspector].", sentence: "Montalbano è un ___ siciliano.", answer: "commissario", explanation: "\"Il commissario\" = police inspector." },
      { type: "word-order", prompt: "Put the words in order to say: Many families eat dinner in front of the TV.", words: ["Molte", "famiglie", "cenano", "davanti", "alla", "TV."], translation: "Many families eat dinner in front of the TV.", explanation: "\"Davanti a\" = in front of." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il TG", right: "the news" },
          { left: "la fiction", right: "the TV drama series" },
          { left: "il canone", right: "the license fee" },
          { left: "il doppiaggio", right: "dubbing" },
          { left: "i sottotitoli", right: "subtitles" },
        ],
        explanation: "TV vocabulary.",
      },
      { type: "dictation", audio: "Ci sono i sottotitoli?", explanation: "\"Sottotitoli\": double t in \"sotto\"." },
      { type: "speak", text: "Io guardo le serie in lingua originale con i sottotitoli in italiano.", prompt: "Say it in Italian: I watch series in the original language with Italian subtitles.", tip: "Sot-to-TI-to-li: stress on -ti-.", explanation: "\"In lingua originale\" = in the original language." },
    ],
  },
  {
    slug: "culture-dialogue-movie-night",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: Movie Night",
    summary: "Follow Sara and Luca as they choose a film, buy tickets, sit through the intermission and argue about the ending.",
    duration: "15 min",
    sections: [
      {
        heading: "Che film danno?",
        body: [
          "Sara: \"Andiamo al cinema stasera? Che film danno?\" Luca: \"C'è una commedia italiana e un thriller americano, ma è doppiato.\" Sara: \"Allora la commedia. A che ora è lo spettacolo?\" Luca: \"Alle 20:30 o alle 22:30.\"",
          "To ask what's showing, Italians say \"che film danno?\" or \"cosa c'è al cinema?\". Each screening is \"uno spettacolo\", and \"l'ultimo spettacolo\" is the late show. Many cinemas have a cheaper midweek day, with \"il biglietto ridotto\"; the day and price vary, so check the cinema's website.",
        ],
        examples: [
          { es: "Andiamo al cinema stasera?", en: "Shall we go to the movies tonight?" },
          { es: "Che film danno?", en: "What films are showing?" },
          { es: "A che ora è lo spettacolo?", en: "What time is the show?" },
          { es: "Prendiamo l'ultimo spettacolo.", en: "Let's go to the late show." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go to the movies tonight?", answer: "Andiamo al cinema stasera?", altAnswers: ["Stasera andiamo al cinema?"], explanation: "Present tense for suggestions." },
          { type: "multiple-choice", question: "What does \"Che film danno?\" mean?", options: ["What films are showing?", "Who gives the films?", "Which film do you want?", "How much is the film?"], correctIndex: 0, explanation: "\"Dare\" = to show (a film)." },
        ],
      },
      {
        heading: "Alla cassa",
        body: [
          "Luca: \"Due biglietti per lo spettacolo delle 20:30, per favore.\" Cassiera: \"Ci sono ancora posti centrali in fila otto.\" Sara: \"Perfetto. Prendiamo anche i popcorn?\"",
          "Halfway through the film, the screen goes dark and the lights come on: many Italian cinemas, especially smaller ones, still have \"l'intervallo\", a short break between \"il primo tempo\" and \"il secondo tempo\". People stretch their legs or buy an ice cream.",
        ],
        examples: [
          { es: "Due biglietti per le 20:30, per favore.", en: "Two tickets for 8:30, please." },
          { es: "Ci sono ancora posti centrali?", en: "Are there still seats in the middle?" },
          { es: "Prendiamo anche i popcorn?", en: "Shall we get popcorn too?" },
          { es: "Siamo all'intervallo.", en: "It's the intermission." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are there still seats in the middle?", answer: "Ci sono ancora posti centrali?", altAnswers: ["Ci sono ancora dei posti centrali?", "Ci sono ancora posti al centro?"], explanation: "\"Centrale\" → \"centrali\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Two tickets for 8:30, [please].", sentence: "Due biglietti per le 20:30, ___.", answer: "per favore", altAnswers: ["per piacere"], explanation: "\"Per favore\" = please. Note the 24-hour clock in the time: \"le 20:30\"." },
        ],
      },
      {
        heading: "Ti è piaciuto?",
        body: [
          "Outside, the argument starts. Luca: \"Allora? A me è piaciuto un sacco.\" Sara: \"Il primo tempo sì, ma il finale mi ha deluso. Troppo prevedibile.\" Luca: \"Dai, non è vero! Comunque te lo consiglio, se ti piacciono le commedie.\"",
          "Useful phrases: \"mi è piaciuto un sacco\" (I loved it), \"mi ha deluso\" (it disappointed me), \"prevedibile\" (predictable), \"una noia mortale\" (deadly boring) and \"non fare spoiler!\".",
        ],
        examples: [
          { es: "Mi è piaciuto un sacco.", en: "I really loved it." },
          { es: "Il finale mi ha deluso.", en: "The ending disappointed me." },
          { es: "È stata una noia mortale.", en: "It was deadly boring." },
          { es: "Te lo consiglio.", en: "I recommend it to you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ending disappointed me.", answer: "Il finale mi ha deluso.", altAnswers: ["La fine mi ha deluso."], explanation: "\"Deludere\" → \"deluso\"." },
          { type: "listen-choose", audio: "Il primo tempo sì, ma il finale mi ha deluso.", question: "What did Sara think?", options: ["She liked the first half but not the ending.", "She loved the whole film.", "She hated the first half.", "She fell asleep."], correctIndex: 0, explanation: "\"Il finale\" = the ending." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time is the show?", answer: "A che ora è lo spettacolo?", altAnswers: ["A che ora comincia lo spettacolo?", "A che ora inizia lo spettacolo?"], explanation: "\"Lo spettacolo\" = screening, show." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we get popcorn too?", answer: "Prendiamo anche i popcorn?", altAnswers: ["Prendiamo anche il popcorn?", "Prendiamo anche dei popcorn?"], explanation: "Both \"i popcorn\" and \"il popcorn\" are heard." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I really loved it.", answer: "Mi è piaciuto un sacco.", altAnswers: ["Mi è piaciuto tantissimo.", "Mi è piaciuto moltissimo.", "Mi è piaciuta un sacco."], explanation: "\"Un sacco\" = a lot (informal)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I recommend it to you.", answer: "Te lo consiglio.", explanation: "\"Ti\" + \"lo\" → \"te lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's go to the late show.", answer: "Prendiamo l'ultimo spettacolo.", altAnswers: ["Andiamo all'ultimo spettacolo."], explanation: "\"L'ultimo spettacolo\" = the last screening." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The ending was too [predictable].", sentence: "Il finale era troppo ___.", answer: "prevedibile", explanation: "\"Pre-\" + \"vedere\" + \"-ibile\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was [deadly boring].", sentence: "È stata una ___.", answer: "noia mortale", explanation: "\"La noia\" = boredom." },
      { type: "word-order", prompt: "Put the words in order to say: There's a short break between the two halves.", words: ["C'è", "una", "breve", "pausa", "tra", "i", "due", "tempi."], translation: "There's a short break between the two halves.", explanation: "\"Il tempo\" = half (of a film or game)." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "lo spettacolo", right: "the screening" },
          { left: "il biglietto ridotto", right: "the discount ticket" },
          { left: "l'intervallo", right: "the intermission" },
          { left: "il finale", right: "the ending" },
          { left: "prevedibile", right: "predictable" },
        ],
        explanation: "Movie night vocabulary.",
      },
      { type: "dictation", audio: "Che film danno stasera?", explanation: "\"Danno\": double n, from \"dare\"." },
      { type: "speak", text: "Non fare spoiler! Non ho ancora visto il secondo tempo.", prompt: "Say it in Italian: No spoilers! I haven't seen the second half yet.", tip: "\"Spoiler\" is said the English way.", explanation: "\"Non ... ancora\" = not yet." },
    ],
  },
];

export const IT_CULTURE_U08_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a short review of an Italian film you have seen (or one from this unit). Say who directed it, what it is about, what you liked or didn't like, and whether you recommend it.",
  minWords: 60,
  maxWords: 150,
  rubric: [
    "Names the film and its director (\"è un film di ...\")",
    "Summarizes the story in the present tense (\"parla di\", \"è ambientato a\")",
    "Gives an opinion with \"mi è piaciuto\", \"mi ha deluso\" or similar",
    "Ends with a recommendation (\"te lo consiglio\", \"ve lo consiglio\")",
  ],
  modelAnswer: "Ieri sera ho visto \"Nuovo Cinema Paradiso\", un film di Giuseppe Tornatore del 1988. È ambientato in un piccolo paese della Sicilia e parla dell'amicizia tra un bambino, Totò, e Alfredo, il proiezionista del cinema. Totò cresce, va a Roma e diventa un regista famoso. Dopo trent'anni torna al paese per il funerale di Alfredo.\nMi è piaciuto un sacco: la musica è bellissima e gli attori sono bravissimi. Il primo tempo è un po' lento, ma il finale mi ha fatto piangere. È un film sulla memoria e sull'amore per il cinema.\nVe lo consiglio, ma tenete i fazzoletti vicini!",
  explanation: "Film plots are usually told in the present tense. Use \"parlare di\" for the subject, \"essere ambientato\" for the setting and \"fare\" + infinitive (\"mi ha fatto piangere\") for the effect on you.",
};
