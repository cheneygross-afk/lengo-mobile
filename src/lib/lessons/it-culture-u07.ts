// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u07.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 7: Music. Opera (Verdi, Puccini,
// Rossini, La Scala), Neapolitan song, the cantautori, the Sanremo
// festival, Italian words in music, music today, Vivaldi and Monteverdi,
// and planning a concert. No song lyrics are quoted, only titles.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U07: Lesson[] = [
  {
    slug: "culture-opera",
    level: "IT-Culture",
    number: 1,
    title: "Opera",
    summary: "Meet Verdi, Puccini and Rossini, learn how a night at La Scala or the Arena di Verona works, and what to shout at the end.",
    duration: "15 min",
    sections: [
      {
        heading: "Verdi, Puccini, Rossini",
        body: [
          "Opera was born in Italy around 1600, and Italian is still its language. Three names fill the theaters. Gioachino Rossini (1792-1868), from Pesaro, wrote comic operas like \"Il barbiere di Siviglia\" (1816), then stopped composing operas at thirty-seven and devoted himself to food. Giuseppe Verdi (1813-1901) wrote \"Nabucco\", \"Rigoletto\", \"La traviata\" and \"Aida\"; his music became a symbol of Italian unity.",
          "Giacomo Puccini (1858-1924), from Lucca, wrote \"La bohème\", \"Tosca\" and \"Madama Butterfly\", and died before finishing \"Turandot\". In 2023 UNESCO added Italian opera singing to its intangible heritage list.",
        ],
        examples: [
          { es: "Verdi ha scritto ventotto opere.", en: "Verdi wrote twenty-eight operas." },
          { es: "Puccini è morto prima di finire la Turandot.", en: "Puccini died before finishing Turandot." },
          { es: "Rossini amava la buona cucina.", en: "Rossini loved good food." },
          { es: "L'opera è nata in Italia.", en: "Opera was born in Italy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Opera was born in Italy.", answer: "L'opera è nata in Italia.", altAnswers: ["L'opera lirica è nata in Italia."], explanation: "\"L'opera\" = opera; also any work." },
          { type: "multiple-choice", question: "Which opera is by Puccini?", options: ["Tosca", "Aida", "Il barbiere di Siviglia", "Nabucco"], correctIndex: 0, explanation: "\"Aida\" and \"Nabucco\" are Verdi's; \"Il barbiere\" is Rossini's." },
        ],
      },
      {
        heading: "La Scala e l'Arena",
        body: [
          "Milan's \"Teatro alla Scala\" opened in 1778. Its season opens every 7 December, the feast of Sant'Ambrogio, Milan's patron saint, with a gala night broadcast on TV. In the top gallery, \"il loggione\", the most demanding fans sit: they cheer a great performance and boo a weak one without mercy.",
          "In summer the Roman \"Arena di Verona\" hosts opera under the stars for thousands of people. Naples has the \"Teatro di San Carlo\" (1737), the oldest opera house in Europe still in use.",
        ],
        examples: [
          { es: "La stagione della Scala comincia il 7 dicembre.", en: "La Scala's season begins on December 7." },
          { es: "Il loggione è severissimo.", en: "The top gallery is extremely demanding." },
          { es: "All'Arena si vede l'opera sotto le stelle.", en: "At the Arena you see opera under the stars." },
          { es: "Porta un cuscino: i gradini sono di pietra.", en: "Bring a cushion: the steps are stone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "La Scala's season begins on December 7.", answer: "La stagione della Scala comincia il 7 dicembre.", altAnswers: ["La stagione della Scala inizia il 7 dicembre.", "La stagione della Scala comincia il sette dicembre."], explanation: "\"Alla Scala\" → \"della Scala\" with \"di\"." },
          { type: "listen-choose", audio: "Porta un cuscino: i gradini sono di pietra.", question: "Why bring a cushion?", options: ["The steps are stone.", "The show is long.", "It's cold at night.", "The seats are wet."], correctIndex: 0, explanation: "\"Di pietra\" = made of stone." },
        ],
      },
      {
        heading: "Bravo, brava, bravi!",
        body: [
          "At the end of an aria, shout \"Bravo!\" to a man, \"Brava!\" to a woman, \"Bravi!\" to a group. Calling for a repeat is \"bis!\", not encore. \"Fischiare\", whistling, is booing in Italy, so don't whistle to show enthusiasm.",
          "Dress is smart for La Scala's main evenings, more relaxed elsewhere. Surtitles, \"i sopratitoli\", often in English too, help you follow.",
        ],
        examples: [
          { es: "Brava! Bis!", en: "Bravo! Encore!" },
          { es: "Il pubblico ha fischiato il tenore.", en: "The audience booed the tenor." },
          { es: "Ci sono i sopratitoli in inglese.", en: "There are surtitles in English." },
          { es: "Che voce meravigliosa!", en: "What a wonderful voice!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a wonderful voice!", answer: "Che voce meravigliosa!", altAnswers: ["Che voce stupenda!", "Che bella voce!"], explanation: "\"Che\" + noun + adjective." },
          { type: "multiple-choice", question: "A soprano finishes a beautiful aria. What do you shout?", options: ["Brava!", "Bravo!", "Bravi!", "Encore!"], correctIndex: 0, explanation: "\"Brava\" for a woman." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rossini loved good food.", answer: "Rossini amava la buona cucina.", altAnswers: ["Rossini amava il buon cibo.", "A Rossini piaceva la buona cucina."], explanation: "Imperfetto for a lasting trait." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are surtitles in English.", answer: "Ci sono i sopratitoli in inglese.", altAnswers: ["Ci sono sopratitoli in inglese."], explanation: "\"Sopra\" (above) + \"titoli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The audience booed the tenor.", answer: "Il pubblico ha fischiato il tenore.", explanation: "\"Fischiare\" = to whistle, to boo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the Arena you see opera under the stars.", answer: "All'Arena si vede l'opera sotto le stelle.", altAnswers: ["All'Arena vedi l'opera sotto le stelle."], explanation: "\"Si vede\" = you see." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Verdi wrote Aida.", answer: "Verdi ha scritto l'Aida.", altAnswers: ["Verdi ha scritto Aida.", "Verdi scrisse l'Aida.", "Verdi scrisse Aida."], explanation: "Opera titles often take an article: \"l'Aida\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Puccini died [before finishing] Turandot.", sentence: "Puccini è morto ___ la Turandot.", answer: "prima di finire", explanation: "\"Prima di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The top gallery] is extremely demanding.", sentence: "___ è severissimo.", answer: "Il loggione", explanation: "\"Il loggione\" = the gallery and its fans." },
      { type: "word-order", prompt: "Put the words in order to say: We've got tickets for La traviata.", words: ["Abbiamo", "i", "biglietti", "per", "la", "Traviata."], translation: "We've got tickets for La traviata.", explanation: "\"Per\" + show." },
      {
        type: "matching",
        instructions: "Match the composer to the opera.",
        pairs: [
          { left: "Verdi", right: "La traviata" },
          { left: "Puccini", right: "La bohème" },
          { left: "Rossini", right: "The Barber of Seville" },
          { left: "Monteverdi", right: "L'Orfeo" },
        ],
        explanation: "One opera each.",
      },
      { type: "dictation", audio: "Brava! Bis!", explanation: "\"Bis\" = encore." },
      { type: "speak", text: "Stasera andiamo all'Arena di Verona a vedere l'Aida.", prompt: "Say it in Italian: Tonight we're going to the Arena di Verona to see Aida.", tip: "a-I-da: three syllables, stress on the i.", explanation: "\"Andare a vedere\" = to go and see." },
    ],
  },
  {
    slug: "culture-canzone-napoletana",
    level: "IT-Culture",
    number: 2,
    title: "Neapolitan Song",
    summary: "Discover the tradition of Neapolitan song, from 'O sole mio and Funiculì funiculà to the tenors who took it around the world.",
    duration: "15 min",
    sections: [
      {
        heading: "La canzone classica",
        body: [
          "Naples has its own song tradition, written in Neapolitan, a language distinct from Italian. Its golden age ran from the late 1800s to the mid-1900s. \"'O sole mio\" (1898) sings of a sun brighter than the real one: the beloved's face. \"Funiculì funiculà\" (1880) was written to advertise the new funicular railway up Vesuvius, and became a hit across Europe.",
          "In Neapolitan the article \"il\" becomes \"'o\" and \"la\" becomes \"'a\", with an apostrophe for the dropped l: \"'o sole\" is \"il sole\".",
        ],
        examples: [
          { es: "In napoletano o sole vuol dire il sole.", en: "In Neapolitan, o sole means the sun." },
          { es: "La canzone parla del sole e dell'amore.", en: "The song is about the sun and love." },
          { es: "Era la pubblicità di una funicolare.", en: "It was an ad for a funicular railway." },
          { es: "Il napoletano è una lingua.", en: "Neapolitan is a language." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The song is about the sun and love.", answer: "La canzone parla del sole e dell'amore.", altAnswers: ["La canzone parla del sole e d'amore."], explanation: "\"Parlare di\" = to be about." },
          { type: "multiple-choice", question: "Why was \"Funiculì funiculà\" written?", options: ["To advertise the Vesuvius funicular", "For a royal wedding", "As a protest song", "For a football club"], correctIndex: 0, explanation: "It celebrated the new funicular railway." },
        ],
      },
      {
        heading: "I tenori e il mondo",
        body: [
          "Emigrants took the songs to the Americas, and great tenors made them famous everywhere: Enrico Caruso, born in Naples in 1873, recorded them in the early days of the gramophone; later Luciano Pavarotti sang them in stadiums. Many foreigners think they are opera; Neapolitans know they are something else, closer to the street.",
          "Every September the festival of Piedigrotta, with its song contests, launched new hits for decades.",
        ],
        examples: [
          { es: "Caruso è nato a Napoli nel 1873.", en: "Caruso was born in Naples in 1873." },
          { es: "Gli emigrati hanno portato le canzoni in America.", en: "Emigrants took the songs to America." },
          { es: "Non è opera, è canzone napoletana.", en: "It's not opera, it's Neapolitan song." },
          { es: "Pavarotti la cantava negli stadi.", en: "Pavarotti used to sing it in stadiums." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not opera, it's Neapolitan song.", answer: "Non è opera, è canzone napoletana.", altAnswers: ["Non è lirica, è canzone napoletana.", "Non è l'opera, è la canzone napoletana."], explanation: "City adjectives are lowercase: \"napoletana\"." },
          { type: "listen-choose", audio: "Pavarotti la cantava negli stadi.", question: "What does it mean?", options: ["Pavarotti used to sing it in stadiums.", "Pavarotti never sang it.", "Pavarotti wrote it.", "Pavarotti sang it once in Naples."], correctIndex: 0, explanation: "Imperfetto \"cantava\" for a habit." },
        ],
      },
      {
        heading: "Mandolini e oltre",
        body: [
          "The classic sound is voice, guitar and \"il mandolino\". In the 1950s Renato Carosone mixed Neapolitan with swing and jazz and joked about Italians copying American ways; later Pino Daniele blended it with blues. Today rappers from Naples write in Neapolitan, and TV series set in the city have made its sound popular all over Italy.",
          "Neapolitan isn't easy even for Italians: songs often come with Italian subtitles on TV.",
        ],
        examples: [
          { es: "Suona il mandolino da quando era piccolo.", en: "He's played the mandolin since he was little." },
          { es: "Questa canzone mescola napoletano e jazz.", en: "This song mixes Neapolitan and jazz." },
          { es: "Anche i rapper scrivono in napoletano.", en: "Rappers write in Neapolitan too." },
          { es: "Senza sottotitoli non capisco niente.", en: "Without subtitles I don't understand a thing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rappers write in Neapolitan too.", answer: "Anche i rapper scrivono in napoletano.", altAnswers: ["Pure i rapper scrivono in napoletano."], explanation: "Foreign words like \"rapper\" don't change in the plural." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Without subtitles] I don't understand a thing.", sentence: "___ non capisco niente.", answer: "Senza sottotitoli", explanation: "\"Senza\" + plural noun, no article." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Neapolitan is a language.", answer: "Il napoletano è una lingua.", explanation: "Language names take \"il\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Caruso was born in Naples.", answer: "Caruso è nato a Napoli.", altAnswers: ["Caruso nacque a Napoli."], explanation: "\"Nascere\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This song mixes Neapolitan and jazz.", answer: "Questa canzone mescola napoletano e jazz.", altAnswers: ["Questa canzone mescola il napoletano e il jazz.", "Questa canzone unisce napoletano e jazz."], explanation: "\"Mescolare\" = to mix." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Emigrants took the songs to America.", answer: "Gli emigrati hanno portato le canzoni in America.", altAnswers: ["Gli emigranti hanno portato le canzoni in America."], explanation: "\"Portare\" = to take, carry." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't understand a thing.", answer: "Non capisco niente.", altAnswers: ["Non capisco nulla.", "Non ci capisco niente."], explanation: "Double negative: \"non... niente\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's played [the mandolin] since he was little.", sentence: "Suona ___ da quando era piccolo.", answer: "il mandolino", explanation: "\"Suonare\" + instrument." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Neapolitan, \"'o sole\" means [the sun].", sentence: "In napoletano \"'o sole\" vuol dire ___.", answer: "il sole", explanation: "\"'O\" = \"il\"." },
      { type: "word-order", prompt: "Put the words in order to say: It was an ad for a funicular railway.", words: ["Era", "la", "pubblicità", "di", "una", "funicolare."], translation: "It was an ad for a funicular railway.", explanation: "\"La pubblicità\" = advertising, an ad." },
      { type: "multiple-choice", question: "In Neapolitan, what does \"'a\" before a feminine noun correspond to?", options: ["la", "a (to)", "ha (has)", "una"], correctIndex: 0, explanation: "\"'A\" = \"la\", with the l dropped." },
      { type: "dictation", audio: "Il napoletano è una lingua.", explanation: "Lowercase \"napoletano\"." },
      { type: "speak", text: "La canzone napoletana mi fa pensare al mare e al sole.", prompt: "Say it in Italian: Neapolitan song makes me think of the sea and the sun.", tip: "Na-po-le-TA-na: stress on -ta-.", explanation: "\"Fare pensare a\" = to make someone think of." },
    ],
  },
  {
    slug: "culture-cantautori",
    level: "IT-Culture",
    number: 3,
    title: "The Cantautori",
    summary: "Meet the cantautori, Italy's singer-songwriters of the 1960s to 1980s, from the Genoa school to Lucio Dalla and Lucio Battisti.",
    duration: "15 min",
    sections: [
      {
        heading: "Cantante + autore",
        body: [
          "A \"cantautore\" (from \"cantante\", singer, and \"autore\", author) writes and sings their own songs, with lyrics that count as much as the music. The movement grew in the late 1950s and 1960s, partly in reaction to light festival pop. Lyrics talked about love, but also about war, poverty, outsiders, politics.",
          "Genoa produced a whole school: Gino Paoli, Luigi Tenco, Bruno Lauzi and above all Fabrizio De André (1940-1999), whose songs about prostitutes, thieves and the marginalized are now studied in schools.",
        ],
        examples: [
          { es: "Un cantautore scrive le sue canzoni.", en: "A cantautore writes his own songs." },
          { es: "I testi sono importanti quanto la musica.", en: "The lyrics are as important as the music." },
          { es: "De André era di Genova.", en: "De André was from Genoa." },
          { es: "Le sue canzoni si studiano a scuola.", en: "His songs are studied at school." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lyrics are as important as the music.", answer: "I testi sono importanti quanto la musica.", altAnswers: ["I testi sono importanti come la musica.", "Le parole sono importanti quanto la musica."], explanation: "\"Quanto\" or \"come\" for as... as; lyrics = \"i testi\"." },
          { type: "multiple-choice", question: "What is a \"cantautore\"?", options: ["a singer who writes their own songs", "an opera singer", "a music critic", "a street musician"], correctIndex: 0, explanation: "\"Cantante\" + \"autore\"." },
        ],
      },
      {
        heading: "Dalla, Battisti e gli altri",
        body: [
          "Bologna had Lucio Dalla (1943-2012), playful and inventive, and Francesco Guccini, the bearded voice of student generations. Lucio Battisti (1943-1998), who wrote with the lyricist Mogol, sold millions of records and almost never gave interviews. Rome had Francesco De Gregori; Sicily, the eclectic Franco Battiato.",
          "These songs are the soundtrack of Italian life: sung around campfires, on long car journeys and at the end of every party, by people who weren't born when they came out.",
        ],
        examples: [
          { es: "Mio padre ascoltava sempre Battisti.", en: "My father always listened to Battisti." },
          { es: "Conosci qualche canzone di Dalla?", en: "Do you know any songs by Dalla?" },
          { es: "Alle feste cantiamo tutti insieme.", en: "At parties we all sing together." },
          { es: "Queste canzoni le conoscono tutti.", en: "Everybody knows these songs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My father always listened to Battisti.", answer: "Mio padre ascoltava sempre Battisti.", altAnswers: ["Mio papà ascoltava sempre Battisti."], explanation: "\"Ascoltare\" takes a direct object: no word for to." },
          { type: "listen-choose", audio: "Queste canzoni le conoscono tutti.", question: "What does it mean?", options: ["Everybody knows these songs.", "Nobody knows these songs.", "These songs are new.", "Everybody sings these songs badly."], correctIndex: 0, explanation: "Object first, repeated by \"le\"." },
        ],
      },
      {
        heading: "Una canzone famosa",
        body: [
          "One song conquered the world first: Domenico Modugno's \"Nel blu dipinto di blu\", better known as \"Volare\", won the Sanremo festival in 1958 and then two Grammy awards. Modugno, arms wide open on stage, changed the style of Italian singing.",
          "To talk about songs: \"il testo\" (lyrics), \"il ritornello\" (chorus), \"la strofa\" (verse), \"l'album\", \"il singolo\".",
        ],
        examples: [
          { es: "Ha vinto il Festival di Sanremo nel 1958.", en: "It won the Sanremo Festival in 1958." },
          { es: "Tutti conoscono il ritornello.", en: "Everyone knows the chorus." },
          { es: "Il testo è bellissimo.", en: "The lyrics are beautiful." },
          { es: "Qual è la tua canzone italiana preferita?", en: "What's your favorite Italian song?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's your favorite Italian song?", answer: "Qual è la tua canzone italiana preferita?", altAnswers: ["Qual è la Sua canzone italiana preferita?"], explanation: "\"Qual è\", no apostrophe." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everyone knows [the chorus].", sentence: "Tutti conoscono ___.", answer: "il ritornello", explanation: "\"Il ritornello\" = chorus, refrain." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "De André was from Genoa.", answer: "De André era di Genova.", explanation: "\"Era di\" for origin in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His songs are studied at school.", answer: "Le sue canzoni si studiano a scuola.", altAnswers: ["Le sue canzoni vengono studiate a scuola.", "Le sue canzoni sono studiate a scuola."], explanation: "\"Si studiano\": plural with a plural subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you know any songs by Dalla?", answer: "Conosci qualche canzone di Dalla?", altAnswers: ["Conosci delle canzoni di Dalla?", "Conosce qualche canzone di Dalla?"], explanation: "\"Qualche\" + singular noun = some, any." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lyrics are beautiful.", answer: "Il testo è bellissimo.", altAnswers: ["Le parole sono bellissime.", "Il testo è molto bello."], explanation: "Italian uses the singular: \"il testo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At parties we all sing together.", answer: "Alle feste cantiamo tutti insieme.", explanation: "\"Alle feste\" = at parties." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A cantautore writes [his own songs].", sentence: "Un cantautore scrive ___.", answer: "le sue canzoni", altAnswers: ["le proprie canzoni"], explanation: "\"Le sue\" = his own." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Battisti [almost never] gave interviews.", sentence: "Battisti ___ dava interviste.", answer: "non quasi mai", altAnswers: ["quasi mai"], explanation: "\"Quasi mai\" = almost never; \"non\" is optional before it here." },
      { type: "word-order", prompt: "Put the words in order to say: It won the Sanremo Festival in 1958.", words: ["Ha", "vinto", "il", "Festival", "di", "Sanremo", "nel", "1958."], translation: "It won the Sanremo Festival in 1958.", explanation: "\"Vincere\" → \"vinto\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il testo", right: "the lyrics" },
          { left: "il ritornello", right: "the chorus" },
          { left: "la strofa", right: "the verse" },
          { left: "il cantautore", right: "the singer-songwriter" },
          { left: "il singolo", right: "the single" },
        ],
        explanation: "Song vocabulary.",
      },
      { type: "dictation", audio: "Tutti conoscono il ritornello.", explanation: "\"Ritornello\": double l." },
      { type: "speak", text: "Mi piacciono i cantautori perché i testi raccontano storie vere.", prompt: "Say it in Italian: I like the cantautori because their lyrics tell true stories.", tip: "Can-tau-TO-ri: stress on -to-.", explanation: "\"Mi piacciono\" for plural things." },
    ],
  },
  {
    slug: "culture-sanremo",
    level: "IT-Culture",
    number: 4,
    title: "Sanremo",
    summary: "Understand the Sanremo Festival: five nights in February, the songs, the arguments and the road to Eurovision.",
    duration: "15 min",
    sections: [
      {
        heading: "Il Festival",
        body: [
          "\"Il Festival della Canzone Italiana\", held every year since 1951 in Sanremo, a town on the Ligurian coast, is the biggest event of Italian television. For five evenings in February, on RAI, artists compete with new songs in the Teatro Ariston, its home since 1977. Shows run past midnight and half the country watches, or pretends not to.",
          "Everyone has an opinion: the songs, the outfits, the hosts, the scandals, the voting. Offices discuss it the next morning as they discuss a football match.",
        ],
        examples: [
          { es: "Il Festival si fa ogni anno a febbraio.", en: "The Festival is held every February." },
          { es: "Hai visto Sanremo ieri sera?", en: "Did you watch Sanremo last night?" },
          { es: "La serata è finita all'una di notte.", en: "The evening ended at one in the morning." },
          { es: "Quest'anno le canzoni erano bruttine.", en: "This year the songs were pretty bad." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you watch Sanremo last night?", answer: "Hai visto Sanremo ieri sera?", altAnswers: ["Hai guardato Sanremo ieri sera?", "Ieri sera hai visto Sanremo?"], explanation: "\"Sanremo\" stands for the Festival itself." },
          { type: "multiple-choice", question: "Where is the Festival held?", options: ["in a theater in a Ligurian town", "in Rome's Olympic stadium", "in Milan's La Scala", "in different cities each year"], correctIndex: 0, explanation: "The Teatro Ariston in Sanremo, Liguria." },
        ],
      },
      {
        heading: "Vincere e perdere",
        body: [
          "A mix of public televoting, the press room and a jury chooses the winner. Winning isn't everything: many songs that came nowhere became classics, and the critics' prize is named after the singer Mia Martini.",
          "The winner usually represents Italy at Eurovision. Italy has won Eurovision three times: in 1964, 1990 and 2021, when the Roman rock band Måneskin won Sanremo and then Europe.",
        ],
        examples: [
          { es: "Ha vinto grazie al televoto.", en: "He won thanks to the televote." },
          { es: "È arrivata ultima, ma la canzone è diventata famosa.", en: "She came last, but the song became famous." },
          { es: "Il vincitore va all'Eurovision.", en: "The winner goes to Eurovision." },
          { es: "L'Italia ha vinto nel 2021.", en: "Italy won in 2021." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The winner goes to Eurovision.", answer: "Il vincitore va all'Eurovision.", altAnswers: ["Chi vince va all'Eurovision.", "Il vincitore va all'Eurovisione."], explanation: "\"Il vincitore\" = the winner." },
          { type: "listen-choose", audio: "È arrivata ultima, ma la canzone è diventata famosa.", question: "What happened?", options: ["She came last, but the song became famous.", "She won and became famous.", "She didn't take part.", "The song was banned."], correctIndex: 0, explanation: "\"Arrivare ultima\" = to come last." },
        ],
      },
      {
        heading: "Il rito",
        body: [
          "Sanremo week has its rituals: parties with friends on the sofa, a running commentary on social media, \"il FantaSanremo\", a fantasy game where players earn points for what artists do on stage, and the morning chat at the bar.",
          "Learn the vocabulary: \"il conduttore\" (host), \"la gara\" (competition), \"la classifica\" (ranking), \"il televoto\", \"la serata delle cover\" (covers night), \"il vincitore\".",
        ],
        examples: [
          { es: "Guardiamo Sanremo tutti insieme sul divano.", en: "We watch Sanremo all together on the sofa." },
          { es: "Chi è il conduttore quest'anno?", en: "Who's the host this year?" },
          { es: "Chi è primo in classifica?", en: "Who's first in the ranking?" },
          { es: "Faccio il tifo per lei.", en: "I'm rooting for her." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's the host this year?", answer: "Chi è il conduttore quest'anno?", altAnswers: ["Chi conduce quest'anno?", "Chi presenta quest'anno?"], explanation: "\"Il conduttore\" = TV host." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [rooting for] her.", sentence: "___ per lei.", answer: "Faccio il tifo", explanation: "\"Fare il tifo per\" = to root for." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Festival is held every February.", answer: "Il Festival si fa ogni anno a febbraio.", altAnswers: ["Il Festival si tiene ogni anno a febbraio.", "Il Festival è ogni anno a febbraio."], explanation: "\"A febbraio\" = in February." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy won in 2021.", answer: "L'Italia ha vinto nel 2021.", explanation: "\"Nel\" + year." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's first in the ranking?", answer: "Chi è primo in classifica?", altAnswers: ["Chi è il primo in classifica?", "Chi è prima in classifica?"], explanation: "\"In classifica\" = in the chart." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We watch Sanremo on the sofa.", answer: "Guardiamo Sanremo sul divano.", altAnswers: ["Noi guardiamo Sanremo sul divano."], explanation: "\"Sul divano\" = on the sofa." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He won thanks to the televote.", answer: "Ha vinto grazie al televoto.", altAnswers: ["Lui ha vinto grazie al televoto."], explanation: "\"Grazie a\" = thanks to." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The evening ended [at one in the morning].", sentence: "La serata è finita ___.", answer: "all'una di notte", explanation: "\"Di notte\" for small hours." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This year the songs were [pretty bad].", sentence: "Quest'anno le canzoni erano ___.", answer: "bruttine", altAnswers: ["brutte", "così così"], explanation: "\"-ine\" softens: \"bruttine\" = not great." },
      { type: "word-order", prompt: "Put the words in order to say: The Festival has existed since 1951.", words: ["Il", "Festival", "esiste", "dal", "1951."], translation: "The Festival has existed since 1951.", explanation: "Present + \"dal\" + year." },
      { type: "multiple-choice", question: "Which band won Sanremo and then Eurovision in 2021?", options: ["Måneskin", "a Neapolitan choir", "an opera trio", "a Sardinian folk group"], correctIndex: 0, explanation: "The Roman rock band." },
      { type: "dictation", audio: "Hai visto Sanremo ieri sera?", explanation: "\"Ieri sera\" = last night." },
      { type: "speak", text: "Quest'anno faccio il tifo per una cantante giovane: la sua canzone è bellissima.", prompt: "Say it in Italian: This year I'm rooting for a young singer: her song is beautiful.", tip: "Can-TAN-te: same word for male and female; the article changes.", explanation: "\"Una cantante\" = a female singer." },
    ],
  },
  {
    slug: "culture-music-words",
    level: "IT-Culture",
    number: 5,
    title: "Italian Words in Music",
    summary: "Learn why music speaks Italian everywhere, from \"allegro\" to \"pianoforte\", and what these words mean in everyday Italian.",
    duration: "15 min",
    sections: [
      {
        heading: "La lingua della musica",
        body: [
          "When composers across Europe began writing directions on their scores in the 1600s and 1700s, Italian music led the way, so the directions were written in Italian. They still are: a pianist in Tokyo or Chicago reads \"allegro\", \"andante\" and \"adagio\" just like a pianist in Milan.",
          "Tempo words describe speed. From slowest to fastest: \"lento\" (slow), \"adagio\" (slowly, at ease), \"andante\" (at a walking pace, from \"andare\"), \"moderato\", \"allegro\" (lively) and \"presto\" (fast).",
        ],
        examples: [
          { es: "Il primo movimento è un allegro.", en: "The first movement is an allegro." },
          { es: "\"Andante\" viene dal verbo \"andare\".", en: "\"Andante\" comes from the verb \"andare\"." },
          { es: "Questo pezzo è troppo lento.", en: "This piece is too slow." },
          { es: "Suona più adagio, per favore.", en: "Play more slowly, please." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This piece is too slow.", answer: "Questo pezzo è troppo lento.", altAnswers: ["Questo brano è troppo lento."], explanation: "\"Il pezzo\" = a piece of music." },
          { type: "multiple-choice", question: "Which tempo word is the fastest?", options: ["presto", "andante", "adagio", "lento"], correctIndex: 0, explanation: "\"Presto\" = fast; \"lento\" = slow." },
        ],
      },
      {
        heading: "Piano e forte",
        body: [
          "Volume has its own words: \"piano\" (soft), \"forte\" (loud), \"crescendo\" (getting louder) and \"diminuendo\" (getting softer). Around 1700 in Florence, Bartolomeo Cristofori built a keyboard that could play both soft and loud, depending on how hard you pressed the keys. People called it \"il pianoforte\", the soft-loud, and English shortened it to piano.",
          "Other words travelled too: \"a cappella\" (in chapel style, voices without instruments), \"il libretto\" (the little book with an opera's words), \"il solista\", \"il virtuoso\" and \"il maestro\", the title Italians still give to conductors.",
        ],
        examples: [
          { es: "Il pianoforte è nato a Firenze.", en: "The piano was born in Florence." },
          { es: "Qui devi suonare piano.", en: "Here you have to play softly." },
          { es: "Il coro canta a cappella.", en: "The choir sings a cappella." },
          { es: "Il maestro ha diretto l'orchestra.", en: "The conductor led the orchestra." },
          { es: "Ho letto il libretto prima dell'opera.", en: "I read the libretto before the opera." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The piano was born in Florence.", answer: "Il pianoforte è nato a Firenze.", altAnswers: ["Il piano è nato a Firenze."], explanation: "\"A Firenze\" for cities." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [conductor] led the orchestra.", sentence: "Il ___ ha diretto l'orchestra.", answer: "maestro", altAnswers: ["direttore"], explanation: "\"Maestro\" is how Italians address conductors." },
        ],
      },
      {
        heading: "Nella vita di tutti i giorni",
        body: [
          "These are ordinary Italian words, and outside music they keep their everyday meanings. \"Allegro\" means cheerful: \"un ragazzo allegro\". \"Presto\" means early or soon: \"a presto!\" (see you soon). \"Piano\" means slowly or quietly, and also floor: \"parla piano\" (speak quietly), \"abito al terzo piano\".",
          "\"Forte\" means strong or loud, and young people use it for cool: \"che forte!\" A \"maestro\" or \"maestra\" is also a primary school teacher. So when an Italian says \"vado piano\", they're driving slowly, not playing music.",
        ],
        examples: [
          { es: "Mia nonna è sempre allegra.", en: "My grandmother is always cheerful." },
          { es: "Domani mi alzo presto.", en: "Tomorrow I'm getting up early." },
          { es: "Parla piano, il bambino dorme.", en: "Speak quietly, the baby is sleeping." },
          { es: "Abito al terzo piano.", en: "I live on the third floor." },
          { es: "Il concerto è stato fortissimo!", en: "The concert was amazing!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow I'm getting up early.", answer: "Domani mi alzo presto.", altAnswers: ["Mi alzo presto domani.", "Domani mi sveglio presto."], explanation: "\"Presto\" = early." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I live on the third floor.", answer: "Abito al terzo piano.", altAnswers: ["Vivo al terzo piano.", "Sto al terzo piano."], explanation: "\"Al ... piano\" = on the ... floor." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother is always cheerful.", answer: "Mia nonna è sempre allegra.", altAnswers: ["La mia nonna è sempre allegra."], explanation: "\"Allegra\" agrees with \"nonna\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Speak quietly, the baby is sleeping.", answer: "Parla piano, il bambino dorme.", altAnswers: ["Parla piano, il bambino sta dormendo.", "Parla piano, la bambina dorme."], explanation: "\"Piano\" = quietly." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The choir sings a cappella.", answer: "Il coro canta a cappella.", explanation: "Two p's in \"cappella\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you soon!", answer: "A presto!", explanation: "\"Presto\" = soon." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I read the libretto before the opera.", answer: "Ho letto il libretto prima dell'opera.", altAnswers: ["Prima dell'opera ho letto il libretto."], explanation: "\"Prima di\" + \"l'opera\" → \"prima dell'opera\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Here you have to play [softly].", sentence: "Qui devi suonare ___.", answer: "piano", explanation: "\"Piano\" = softly." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The concert was [amazing]!", sentence: "Il concerto è stato ___!", answer: "fortissimo", altAnswers: ["forte", "bellissimo"], explanation: "Informal \"forte\" = cool; \"-issimo\" makes it stronger." },
      { type: "word-order", prompt: "Put the words in order to say: \"Andante\" comes from the verb \"andare\".", words: ["\"Andante\"", "viene", "dal", "verbo", "\"andare\"."], translation: "\"Andante\" comes from the verb \"andare\".", explanation: "\"Venire da\" = to come from." },
      {
        type: "matching",
        instructions: "Match each word to its everyday meaning.",
        pairs: [
          { left: "allegro", right: "cheerful" },
          { left: "presto", right: "early, soon" },
          { left: "piano", right: "slowly, floor" },
          { left: "forte", right: "strong, loud" },
          { left: "maestra", right: "primary school teacher" },
        ],
        explanation: "Music words are everyday words.",
      },
      { type: "dictation", audio: "Il pianoforte è nato a Firenze.", explanation: "\"Pianoforte\" = \"piano\" + \"forte\"." },
      { type: "speak", text: "Allegro, andante, adagio: in musica parliamo tutti italiano.", prompt: "Say it in Italian: Allegro, andante, adagio: in music we all speak Italian.", tip: "A-DA-gio: the \"gi\" is soft, like \"j\" in jam.", explanation: "\"Parlare italiano\" without an article." },
    ],
  },
  {
    slug: "culture-music-today",
    level: "IT-Culture",
    number: 6,
    title: "Music Today",
    summary: "Explore what Italians listen to now: rap and indie, the summer hit, free concerts on 1 May and nights in the stadiums.",
    duration: "15 min",
    sections: [
      {
        heading: "Rap, trap e indie",
        body: [
          "Italians mostly listen to music in Italian. The streaming charts are full of Italian rap, trap and pop, and young artists often grow up in the suburbs of Milan, Rome or Naples, mixing Italian with dialect and slang.",
          "Next to them there's \"l'indie\" (often called \"itpop\"): guitar pop with ironic, everyday lyrics about love, the city and growing up. Many of these artists later end up on the stage of Sanremo, which no longer belongs only to the old songs.",
        ],
        examples: [
          { es: "Ascolto soprattutto rap italiano.", en: "I mostly listen to Italian rap." },
          { es: "Questa canzone è in testa alle classifiche.", en: "This song is at the top of the charts." },
          { es: "Usa molte parole in dialetto.", en: "He uses a lot of words in dialect." },
          { es: "Lo ascolto in streaming.", en: "I listen to him on streaming." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I mostly listen to Italian rap.", answer: "Ascolto soprattutto rap italiano.", altAnswers: ["Ascolto soprattutto il rap italiano.", "Io ascolto soprattutto rap italiano."], explanation: "\"Soprattutto\" = mostly, above all." },
          { type: "multiple-choice", question: "What do Italians mostly listen to?", options: ["music in Italian", "only British rock", "only opera", "mainly instrumental music"], correctIndex: 0, explanation: "The charts are dominated by songs in Italian." },
        ],
      },
      {
        heading: "Il tormentone estivo",
        body: [
          "Every summer has its \"tormentone\" (from \"tormentare\", to torment): a catchy song you hear on every beach, in every bar and at every wedding until September, whether you like it or not. By October, nobody wants to hear it again.",
          "Ask an Italian about a summer from their youth and they'll remember it by its song: \"l'estate di quella canzone\". The word is also used for any phrase or joke that everyone repeats for weeks.",
        ],
        examples: [
          { es: "Qual è il tormentone di quest'estate?", en: "What's this summer's big hit?" },
          { es: "L'ho sentita cento volte in spiaggia.", en: "I heard it a hundred times at the beach." },
          { es: "Non ne posso più di questa canzone!", en: "I can't stand this song anymore!" },
          { es: "Mi è rimasta in testa.", en: "It got stuck in my head." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It got stuck in my head.", answer: "Mi è rimasta in testa.", altAnswers: ["Mi è rimasto in testa.", "Ce l'ho in testa."], explanation: "\"La canzone\" → \"rimasta\" agrees." },
          { type: "listen-choose", audio: "Non ne posso più di questa canzone!", question: "How does the speaker feel?", options: ["They're sick of the song.", "They love the song.", "They don't know the song.", "They want to buy the song."], correctIndex: 0, explanation: "\"Non ne posso più\" = I can't take any more." },
        ],
      },
      {
        heading: "Concerti e festival",
        body: [
          "On 1 May, Labor Day, the unions organize \"il Concertone\" in Piazza San Giovanni in Rome: a free concert from afternoon to night, broadcast live on RAI, with dozens of artists and a huge crowd.",
          "In summer, the big names fill the stadiums, from San Siro in Milan to the Olimpico in Rome, and Italians sing every word. Smaller artists tour \"i palazzetti\" (indoor sports arenas) and summer festivals in squares and on beaches.",
        ],
        examples: [
          { es: "Il Concertone è gratuito.", en: "The big concert is free." },
          { es: "Siamo andati al concerto a San Siro.", en: "We went to the concert at San Siro." },
          { es: "Lo stadio cantava tutte le canzoni.", en: "The stadium was singing every song." },
          { es: "Il concerto è all'aperto.", en: "The concert is outdoors." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The concert is outdoors.", answer: "Il concerto è all'aperto.", altAnswers: ["Il concerto si fa all'aperto."], explanation: "\"All'aperto\" = outdoors." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The big concert is [free].", sentence: "Il Concertone è ___.", answer: "gratuito", altAnswers: ["gratis"], explanation: "\"Gratuito\" or \"gratis\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This song is at the top of the charts.", answer: "Questa canzone è in testa alle classifiche.", altAnswers: ["Questa canzone è prima in classifica.", "Questa canzone è al primo posto in classifica."], explanation: "\"In testa a\" = at the top of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's this summer's big hit?", answer: "Qual è il tormentone di quest'estate?", altAnswers: ["Qual è il tormentone dell'estate?"], explanation: "No apostrophe in \"qual è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We went to the concert at San Siro.", answer: "Siamo andati al concerto a San Siro.", altAnswers: ["Siamo andate al concerto a San Siro."], explanation: "\"Andare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I heard it a hundred times at the beach.", answer: "L'ho sentita cento volte in spiaggia.", altAnswers: ["L'ho sentito cento volte in spiaggia.", "L'ho ascoltata cento volte in spiaggia."], explanation: "\"In spiaggia\" = at the beach." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He uses a lot of words in dialect.", answer: "Usa molte parole in dialetto.", altAnswers: ["Usa tante parole in dialetto.", "Lui usa molte parole in dialetto."], explanation: "\"In dialetto\" = in dialect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I can't stand] this song [anymore]!", sentence: "___ di questa canzone!", answer: "Non ne posso più", explanation: "\"Non poterne più di\" = to be fed up with." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The stadium [was singing] every song.", sentence: "Lo stadio ___ tutte le canzoni.", answer: "cantava", explanation: "Imperfect for an ongoing scene." },
      { type: "word-order", prompt: "Put the words in order to say: On 1 May there's a free concert in Rome.", words: ["Il", "primo", "maggio", "c'è", "un", "concerto", "gratuito", "a", "Roma."], translation: "On 1 May there's a free concert in Rome.", explanation: "\"Il primo maggio\": dates use the article." },
      { type: "multiple-choice", question: "What is a \"tormentone\"?", options: ["a summer hit everyone hears everywhere", "an opera aria", "a music teacher", "a concert hall"], correctIndex: 0, explanation: "From \"tormentare\", to torment." },
      { type: "dictation", audio: "Mi è rimasta in testa.", explanation: "\"Rimasta\" agrees with \"la canzone\"." },
      { type: "speak", text: "D'estate vado sempre ai concerti all'aperto con i miei amici.", prompt: "Say it in Italian: In summer I always go to outdoor concerts with my friends.", tip: "All'a-PER-to: link the words together.", explanation: "\"D'estate\" = in summer." },
    ],
  },
  {
    slug: "culture-classical-music",
    level: "IT-Culture",
    number: 7,
    title: "Classical Music",
    summary: "Meet Monteverdi and Vivaldi, visit the violin makers of Cremona and hear the legend of Paganini.",
    duration: "15 min",
    sections: [
      {
        heading: "Monteverdi e Vivaldi",
        body: [
          "Claudio Monteverdi (1567-1643), born in Cremona, wrote \"L'Orfeo\", first performed in Mantua in 1607 and often called the first great opera. He ended his career in Venice, as music director of St Mark's.",
          "Antonio Vivaldi (1678-1741) was born in Venice. He was a priest, nicknamed \"il prete rosso\" for his red hair, and taught music at the Ospedale della Pietà, a home for orphan girls famous for its all-female orchestra. \"Le quattro stagioni\", four violin concertos, were published in 1725. He died poor in Vienna and was forgotten for two centuries.",
        ],
        examples: [
          { es: "Vivaldi era un prete.", en: "Vivaldi was a priest." },
          { es: "Lo chiamavano \"il prete rosso\".", en: "They called him \"the red priest\"." },
          { es: "Monteverdi è nato a Cremona.", en: "Monteverdi was born in Cremona." },
          { es: "Le orfane suonavano in orchestra.", en: "The orphan girls played in the orchestra." },
          { es: "È morto povero a Vienna.", en: "He died poor in Vienna." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Vivaldi was a priest.", answer: "Vivaldi era un prete.", altAnswers: ["Vivaldi era un sacerdote."], explanation: "\"Era\" for a lasting state in the past." },
          { type: "multiple-choice", question: "Why was Vivaldi called \"il prete rosso\"?", options: ["for his red hair", "for his red robes", "for his politics", "for his wine"], correctIndex: 0, explanation: "\"Rosso\" = red." },
        ],
      },
      {
        heading: "I violini di Cremona",
        body: [
          "Cremona, in Lombardy, is the capital of violin making. In the 1600s and 1700s the Amati, Guarneri and Stradivari families built instruments there that musicians still prize above all others. A Stradivarius by Antonio Stradivari (around 1644-1737) can sell for millions.",
          "Today more than a hundred workshops still make violins by hand, and in 2012 UNESCO added Cremona's traditional violin craftsmanship to its intangible heritage list. A maker is \"un liutaio\" and the craft is \"la liuteria\".",
        ],
        examples: [
          { es: "A Cremona ci sono tante botteghe di liutai.", en: "In Cremona there are many violin makers' workshops." },
          { es: "Questo violino è fatto a mano.", en: "This violin is handmade." },
          { es: "Uno Stradivari costa milioni.", en: "A Stradivarius costs millions." },
          { es: "Il liutaio lavora il legno.", en: "The violin maker works the wood." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This violin is handmade.", answer: "Questo violino è fatto a mano.", altAnswers: ["Questo violino è stato fatto a mano."], explanation: "\"Fatto a mano\" = handmade." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [violin maker] works the wood.", sentence: "Il ___ lavora il legno.", answer: "liutaio", explanation: "From \"liuto\", lute." },
        ],
      },
      {
        heading: "Paganini",
        body: [
          "Niccolò Paganini (1782-1840), from Genoa, was the most famous violinist of his time. He played so fast that people whispered he had sold his soul to the devil. His 24 \"Capricci\" for solo violin are still a test for every great player.",
          "His favorite violin, made by Guarneri, was nicknamed \"il Cannone\" for its powerful sound. It belongs to the city of Genoa, and young winners of the Paganini competition sometimes get to play it.",
        ],
        examples: [
          { es: "Paganini suonava velocissimo.", en: "Paganini played incredibly fast." },
          { es: "Dicevano che aveva venduto l'anima al diavolo.", en: "They said he had sold his soul to the devil." },
          { es: "Il suo violino si chiama \"il Cannone\".", en: "His violin is called \"the Cannon\"." },
          { es: "Il violino è a Genova.", en: "The violin is in Genoa." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The violin is in Genoa.", answer: "Il violino è a Genova.", altAnswers: ["Il violino si trova a Genova."], explanation: "\"Genova\" = Genoa." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paganini played incredibly fast.", answer: "Paganini suonava velocissimo.", altAnswers: ["Paganini suonava velocissimamente.", "Paganini suonava molto veloce."], explanation: "Spoken Italian often uses \"veloce\" as an adverb." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Monteverdi was born in Cremona.", answer: "Monteverdi è nato a Cremona.", explanation: "\"Nascere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He died poor in Vienna.", answer: "È morto povero a Vienna.", altAnswers: ["Morì povero a Vienna."], explanation: "\"Morire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A Stradivarius costs millions.", answer: "Uno Stradivari costa milioni.", altAnswers: ["Uno Stradivari costa milioni di euro."], explanation: "\"Uno\" before \"st-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They called him \"the red priest\".", answer: "Lo chiamavano \"il prete rosso\".", altAnswers: ["Lo chiamavano il prete rosso."], explanation: "Imperfect for a habit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The orphan girls played in the orchestra.", answer: "Le orfane suonavano in orchestra.", altAnswers: ["Le orfane suonavano nell'orchestra."], explanation: "\"Suonare\" = to play an instrument." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They said he had sold [his soul] to the devil.", sentence: "Dicevano che aveva venduto ___ al diavolo.", answer: "l'anima", explanation: "\"L'anima\" = the soul." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Cremona there are many [workshops].", sentence: "A Cremona ci sono tante ___.", answer: "botteghe", explanation: "\"Bottega\" → \"botteghe\": the h keeps the hard g." },
      { type: "word-order", prompt: "Put the words in order to say: The Four Seasons are four violin concertos.", words: ["Le", "Quattro", "stagioni", "sono", "quattro", "concerti", "per", "violino."], translation: "The Four Seasons are four violin concertos.", explanation: "\"Per violino\" = for violin." },
      {
        type: "matching",
        instructions: "Match the person to the city.",
        pairs: [
          { left: "Vivaldi", right: "Venice" },
          { left: "Paganini", right: "Genoa" },
          { left: "Stradivari", right: "Cremona" },
          { left: "Cristofori", right: "Florence" },
        ],
        explanation: "Monteverdi was born in Cremona too, and worked in Mantua and Venice.",
      },
      { type: "dictation", audio: "Questo violino è fatto a mano.", explanation: "\"Fatto a mano\": two t's." },
      { type: "speak", text: "A Cremona i liutai costruiscono ancora i violini a mano.", prompt: "Say it in Italian: In Cremona the violin makers still build violins by hand.", tip: "Liu-TA-i: three syllables after \"li\".", explanation: "\"Ancora\" = still." },
    ],
  },
  {
    slug: "culture-dialogue-concert",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: Going to a Concert",
    summary: "Follow Giulia and Marco as they hunt for tickets, choose seats in a theater and talk about the show afterwards.",
    duration: "15 min",
    sections: [
      {
        heading: "I biglietti",
        body: [
          "Giulia: \"Hai visto? Il concerto a Verona è già esaurito!\" Marco: \"Lo so, sono finiti in dieci minuti. Ci sono ancora biglietti in prevendita per la data di Bologna.\" Giulia: \"Attento ai bagarini, eh. Compriamo solo sul sito ufficiale.\"",
          "\"Esaurito\" means sold out. \"La prevendita\" is advance sales, often with a booking fee. \"I bagarini\" are scalpers. For big concerts tickets are often \"nominativi\", with the buyer's name printed on them, and you may need to show ID at the entrance.",
        ],
        examples: [
          { es: "Il concerto è già esaurito.", en: "The concert is already sold out." },
          { es: "I biglietti sono finiti in dieci minuti.", en: "The tickets sold out in ten minutes." },
          { es: "Compriamo solo sul sito ufficiale.", en: "Let's buy only on the official site." },
          { es: "Il biglietto è nominativo.", en: "The ticket has your name on it." },
          { es: "Porta un documento.", en: "Bring an ID." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The concert is already sold out.", answer: "Il concerto è già esaurito.", altAnswers: ["Il concerto è già tutto esaurito."], explanation: "\"Esaurito\" = sold out." },
          { type: "multiple-choice", question: "Who are \"i bagarini\"?", options: ["scalpers", "ushers", "drummers", "fans"], correctIndex: 0, explanation: "They resell tickets at high prices." },
        ],
      },
      {
        heading: "A teatro",
        body: [
          "For a classical concert, Marco wants seats at the theater. Marco: \"Platea o palco?\" Giulia: \"Il palco costa troppo. Prendiamo due posti in galleria, si sente benissimo.\"",
          "Italian theaters have \"la platea\" (the stalls, on the ground floor), \"i palchi\" (boxes in tiers around the hall) and \"la galleria\" or \"il loggione\" at the top, the cheapest seats. Arrive early: once the music starts, late arrivals usually wait for a break.",
        ],
        examples: [
          { es: "Prendiamo due posti in galleria.", en: "Let's get two seats in the gallery." },
          { es: "Il palco costa troppo.", en: "The box costs too much." },
          { es: "Da qui si sente benissimo.", en: "You can hear really well from here." },
          { es: "Siamo in platea, fila dodici.", en: "We're in the stalls, row twelve." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's get two seats in the gallery.", answer: "Prendiamo due posti in galleria.", altAnswers: ["Prendiamo due posti nella galleria."], explanation: "\"Il posto\" = seat." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We're in the stalls, [row] twelve.", sentence: "Siamo in platea, ___ dodici.", answer: "fila", explanation: "\"La fila\" = row; also a line of people." },
        ],
      },
      {
        heading: "Dopo il concerto",
        body: [
          "After the show they stop for a drink. Giulia: \"Allora, ti è piaciuto?\" Marco: \"Moltissimo! Il pianista era bravissimo. E tu?\" Giulia: \"Sì, anche se il secondo tempo era un po' lungo.\"",
          "Useful phrases: \"ti è piaciuto?\" (did you like it?), \"il primo tempo\" and \"il secondo tempo\" (the two halves of a show), \"l'intervallo\" (the intermission) and \"mi sono emozionato\" (it moved me).",
        ],
        examples: [
          { es: "Allora, ti è piaciuto?", en: "So, did you like it?" },
          { es: "Il pianista era bravissimo.", en: "The pianist was excellent." },
          { es: "Il secondo tempo era un po' lungo.", en: "The second half was a bit long." },
          { es: "Ci vediamo all'intervallo.", en: "See you at the intermission." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So, did you like it?", answer: "Allora, ti è piaciuto?", altAnswers: ["Allora, ti è piaciuta?"], explanation: "\"Piacere\" takes \"essere\"." },
          { type: "listen-choose", audio: "Il secondo tempo era un po' lungo.", question: "What did Giulia think?", options: ["The second half was a bit long.", "The second half was too short.", "The pianist was late.", "The seats were bad."], correctIndex: 0, explanation: "\"Un po' lungo\" = a bit long." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tickets sold out in ten minutes.", answer: "I biglietti sono finiti in dieci minuti.", altAnswers: ["I biglietti sono andati esauriti in dieci minuti."], explanation: "\"Finire\" here takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The box costs too much.", answer: "Il palco costa troppo.", explanation: "\"Il palco\" = theater box; also the stage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pianist was excellent.", answer: "Il pianista era bravissimo.", altAnswers: ["Il pianista era bravo.", "La pianista era bravissima."], explanation: "\"Il pianista\" ends in -a but is masculine here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bring an ID.", answer: "Porta un documento.", altAnswers: ["Porta un documento d'identità.", "Portate un documento."], explanation: "\"Un documento\" = an ID." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you at the intermission.", answer: "Ci vediamo all'intervallo.", explanation: "\"L'intervallo\" = intermission." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Let's buy only on the [official site].", sentence: "Compriamo solo sul ___.", answer: "sito ufficiale", explanation: "\"Ufficiale\": two f's." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You can [hear] really well from here.", sentence: "Da qui si ___ benissimo.", answer: "sente", explanation: "\"Si sente\" = one hears." },
      { type: "word-order", prompt: "Put the words in order to say: The ticket has your name on it.", words: ["Il", "biglietto", "è", "nominativo."], translation: "The ticket has your name on it.", explanation: "\"Nominativo\" = in someone's name." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la platea", right: "the stalls" },
          { left: "il palco", right: "the box" },
          { left: "la galleria", right: "the gallery" },
          { left: "l'intervallo", right: "the intermission" },
          { left: "la prevendita", right: "advance sales" },
        ],
        explanation: "Theater vocabulary.",
      },
      { type: "dictation", audio: "Il concerto è già esaurito.", explanation: "\"Già\" ends with an accent." },
      { type: "speak", text: "Vorrei due biglietti in platea per sabato sera, per favore.", prompt: "Say it in Italian: I'd like two tickets in the stalls for Saturday night, please.", tip: "Pla-TE-a: stress on the e.", explanation: "\"Vorrei\" is the polite way to ask." },
    ],
  },
];

export const IT_CULTURE_U07_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write to an Italian friend about music in your life. Say what kind of music you listen to, describe a concert you went to (where, with whom, how it was) and invite your friend to a concert or an opera in Italy.",
  minWords: 60,
  maxWords: 150,
  rubric: [
    "Says what music you listen to, using \"ascolto\" and \"mi piace\" or \"mi piacciono\"",
    "Describes a past concert with the passato prossimo and the imperfetto",
    "Uses at least three words from the unit (for example \"esaurito\", \"platea\", \"tormentone\", \"cantautore\")",
    "Ends with an invitation and a greeting",
  ],
  modelAnswer: "Cara Giulia,\nio ascolto soprattutto musica pop, ma mi piacciono anche i cantautori italiani. L'anno scorso sono andato a un concerto all'aperto a Roma con mia sorella. C'era tantissima gente e lo stadio cantava tutte le canzoni. Il secondo tempo era un po' lungo, ma alla fine mi sono emozionato. Quest'estate il tormentone mi è rimasto in testa per settimane!\nA dicembre vengo in Italia. Vuoi venire con me all'opera? Alla Scala i biglietti sono quasi esauriti, ma ci sono ancora due posti in galleria. Si sente benissimo e costano poco.\nFammi sapere!\nUn abbraccio,\nTom",
  explanation: "Use the passato prossimo for what happened (\"sono andato\") and the imperfetto for the scene (\"c'era\", \"cantava\"). Remember that \"andare\" and \"piacere\" take \"essere\".",
};
