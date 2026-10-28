// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u09.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 9: Sport and Calcio. Serie A and
// the derbies, the Azzurri, the Giro d'Italia, Ferrari, Monza and MotoGP,
// the Dolomites and Milano-Cortina 2026, the Palio di Siena, match talk and
// a day at the stadium. No current-season results are given.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U09: Lesson[] = [
  {
    slug: "culture-calcio",
    level: "IT-Culture",
    number: 1,
    title: "Calcio",
    summary: "Learn how Serie A works, who the big clubs are, what a derby means and why football is never just a game in Italy.",
    duration: "15 min",
    sections: [
      {
        heading: "La Serie A",
        body: [
          "Football is \"il calcio\" (literally kick), and it's the national passion. The top league, \"la Serie A\", has twenty teams; the champions win \"lo scudetto\", the small shield in the colors of the Italian flag that they wear on their shirts the following season.",
          "Juventus, from Turin, has won the most titles, followed by the two Milan clubs, Inter and Milan. Napoli's titles, including 1987 and 1990 in the Maradona years, are celebrated in the city like religious feasts. A club with ten titles adds a gold star above its badge.",
        ],
        examples: [
          { es: "Chi ha vinto lo scudetto?", en: "Who won the league title?" },
          { es: "La Serie A ha venti squadre.", en: "Serie A has twenty teams." },
          { es: "Per chi tifi?", en: "Which team do you support?" },
          { es: "Tifo per il Napoli da sempre.", en: "I've always supported Napoli." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which team do you support?", answer: "Per chi tifi?", altAnswers: ["Per che squadra tifi?", "Per quale squadra tifi?", "Di che squadra sei?"], explanation: "\"Tifare per\" = to support." },
          { type: "multiple-choice", question: "What is \"lo scudetto\"?", options: ["the league title and its shield badge", "a yellow card", "the national stadium", "the cup final"], correctIndex: 0, explanation: "\"Scudetto\" = little shield." },
        ],
      },
      {
        heading: "Il derby",
        body: [
          "A \"derby\" is a match between two teams from the same city, and the whole city stops for it. Inter and Milan play \"il derby della Madonnina\", named after the golden statue on top of the Duomo; Roma and Lazio play \"il derby della Capitale\"; Juventus and Torino play \"il derby della Mole\".",
          "In Milan and Rome the two rival clubs even share a stadium: San Siro and the Stadio Olimpico. Families can be divided, and the week after a derby, the losers hide from their colleagues.",
        ],
        examples: [
          { es: "Domenica c'è il derby.", en: "The derby is on Sunday." },
          { es: "Le due squadre giocano nello stesso stadio.", en: "The two teams play in the same stadium." },
          { es: "Mio padre è della Roma, mia madre della Lazio.", en: "My father supports Roma, my mother Lazio." },
          { es: "Abbiamo perso il derby.", en: "We lost the derby." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We lost the derby.", answer: "Abbiamo perso il derby.", explanation: "\"Perdere\" → \"perso\"." },
          { type: "listen-choose", audio: "Mio padre è della Roma, mia madre della Lazio.", question: "What do we learn about the family?", options: ["The parents support rival teams.", "The parents live in different cities.", "The parents don't like football.", "The parents play for Roma."], correctIndex: 0, explanation: "\"Essere della Roma\" = to support Roma." },
        ],
      },
      {
        heading: "Il calcio parlato",
        body: [
          "Football is talked about even more than it's played. \"La Gazzetta dello Sport\", printed on pink paper since 1899, along with the \"Corriere dello Sport\" and \"Tuttosport\", are among the most read papers in the country. TV shows replay every doubtful decision for hours.",
          "Fans are \"i tifosi\" (from \"tifo\", typhus: a fever). On Monday morning at the bar, everyone is a coach: \"Io avrei messo un altro attaccante!\"",
        ],
        examples: [
          { es: "La Gazzetta è rosa.", en: "La Gazzetta is pink." },
          { es: "Al bar si parla solo di calcio.", en: "At the bar people only talk about football." },
          { es: "I tifosi sono arrabbiati.", en: "The fans are angry." },
          { es: "Io avrei cambiato l'allenatore.", en: "I would have changed the coach." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The fans are angry.", answer: "I tifosi sono arrabbiati.", altAnswers: ["I tifosi sono arrabbiatissimi."], explanation: "\"Il tifoso\" = fan." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I would have changed the [coach].", sentence: "Io avrei cambiato l'___.", answer: "allenatore", explanation: "\"Allenare\" = to train." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who won the league title?", answer: "Chi ha vinto lo scudetto?", altAnswers: ["Chi ha vinto il campionato?"], explanation: "\"Lo scudetto\" = the Serie A title." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The derby is on Sunday.", answer: "Domenica c'è il derby.", altAnswers: ["Il derby è domenica.", "C'è il derby domenica."], explanation: "No preposition before days." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've always supported Napoli.", answer: "Tifo per il Napoli da sempre.", altAnswers: ["Ho sempre tifato per il Napoli.", "Sono sempre stato del Napoli."], explanation: "\"Il Napoli\": clubs are masculine, except some like \"la Roma\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the bar people only talk about football.", answer: "Al bar si parla solo di calcio.", altAnswers: ["Al bar parlano solo di calcio."], explanation: "\"Si parla\" = people talk." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Serie A has twenty teams.", answer: "La Serie A ha venti squadre.", explanation: "\"La squadra\" = team." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The two teams play in [the same stadium].", sentence: "Le due squadre giocano ___.", answer: "nello stesso stadio", explanation: "\"Lo stadio\" → \"nello stesso stadio\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My father [supports] Roma.", sentence: "Mio padre ___ della Roma.", answer: "è", explanation: "\"Essere di\" + team = to support." },
      { type: "word-order", prompt: "Put the words in order to say: Juventus has won the most titles.", words: ["La", "Juventus", "ha", "vinto", "più", "scudetti", "di", "tutti."], translation: "Juventus has won the most titles.", explanation: "\"Più ... di tutti\" = the most." },
      {
        type: "matching",
        instructions: "Match the derby to the teams.",
        pairs: [
          { left: "il derby della Madonnina", right: "Inter and Milan" },
          { left: "il derby della Capitale", right: "Roma and Lazio" },
          { left: "il derby della Mole", right: "Juventus and Torino" },
        ],
        explanation: "Milan, Rome and Turin.",
      },
      { type: "dictation", audio: "Chi ha vinto lo scudetto?", explanation: "\"Scudetto\": double t." },
      { type: "speak", text: "Sono della Lazio, ma mio fratello tifa per la Roma: il giorno del derby non ci parliamo.", prompt: "Say it in Italian: I support Lazio, but my brother supports Roma: on derby day we don't speak to each other.", tip: "LA-zio: stress on the first syllable.", explanation: "\"Parlarsi\" = to speak to each other." },
    ],
  },
  {
    slug: "culture-national-team",
    level: "IT-Culture",
    number: 2,
    title: "The Azzurri",
    summary: "Meet the national team: why it plays in blue, its four World Cups and two European titles, and the nights the whole country celebrated.",
    duration: "15 min",
    sections: [
      {
        heading: "Perché azzurro?",
        body: [
          "The Italian national teams are called \"gli Azzurri\" (and the women's team \"le Azzurre\"), from their sky-blue shirts. The color wasn't taken from the flag: it was the color of the House of Savoy, the royal family that ruled Italy until 1946.",
          "The coach of the national team is called \"il CT\", short for \"commissario tecnico\". When Italy plays a big match, squares fill with giant screens and people who never watch football suddenly have opinions.",
        ],
        examples: [
          { es: "La maglia è azzurra.", en: "The shirt is sky blue." },
          { es: "Stasera gioca la Nazionale.", en: "The national team is playing tonight." },
          { es: "Guardiamo la partita in piazza.", en: "Let's watch the match in the square." },
          { es: "Forza Azzurri!", en: "Come on, Azzurri!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The national team is playing tonight.", answer: "Stasera gioca la Nazionale.", altAnswers: ["La Nazionale gioca stasera.", "Stasera gioca l'Italia."], explanation: "\"La Nazionale\" = the national team." },
          { type: "multiple-choice", question: "Where does the blue of the Azzurri come from?", options: ["the royal House of Savoy", "the Italian flag", "the color of the sea", "a sponsor"], correctIndex: 0, explanation: "Savoy blue." },
        ],
      },
      {
        heading: "Quattro Mondiali",
        body: [
          "Italy has won the World Cup four times: in 1934 and 1938, in 1982 in Spain, and in 2006 in Germany, when it beat France on penalties in the final in Berlin. Only Brazil has won more.",
          "The 1982 victory, with Paolo Rossi scoring six goals, is a national memory: the elderly President of the Republic, Sandro Pertini, jumped up cheering in the stands of the final. Italy has also won the European Championship twice, in 1968 and in 2021, at Wembley against England.",
        ],
        examples: [
          { es: "L'Italia ha vinto quattro Mondiali.", en: "Italy has won four World Cups." },
          { es: "Abbiamo vinto ai rigori.", en: "We won on penalties." },
          { es: "Me lo ricordo come se fosse ieri.", en: "I remember it as if it were yesterday." },
          { es: "Solo il Brasile ne ha vinti di più.", en: "Only Brazil has won more." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We won on penalties.", answer: "Abbiamo vinto ai rigori.", explanation: "\"Ai rigori\" = on penalties." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Italy has won four [World Cups].", sentence: "L'Italia ha vinto quattro ___.", answer: "Mondiali", altAnswers: ["mondiali", "Coppe del Mondo"], explanation: "\"I Mondiali\" = the World Cup." },
        ],
      },
      {
        heading: "Le notti magiche",
        body: [
          "After a big win, people pour into the streets: car horns, flags from balconies, strangers hugging, fountains full of fans. The 1990 World Cup, held in Italy, is remembered as \"le notti magiche\" (the magic nights), even though Italy lost the semifinal on penalties.",
          "There have been bitter nights too: Italy failed to qualify for the 2018 and 2022 World Cups. Italians suffer with the team, and they call it \"soffrire\".",
        ],
        examples: [
          { es: "Tutti sono scesi in piazza.", en: "Everyone poured into the square." },
          { es: "Hanno suonato il clacson tutta la notte.", en: "They honked their horns all night." },
          { es: "Che sofferenza!", en: "What agony!" },
          { es: "Non ci siamo qualificati.", en: "We didn't qualify." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't qualify.", answer: "Non ci siamo qualificati.", altAnswers: ["Non ci siamo qualificate."], explanation: "\"Qualificarsi\" is reflexive." },
          { type: "listen-choose", audio: "Hanno suonato il clacson tutta la notte.", question: "What did people do?", options: ["They honked all night.", "They slept all night.", "They sang the anthem once.", "They stayed at home."], correctIndex: 0, explanation: "\"Il clacson\" = car horn." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy has won four World Cups.", answer: "L'Italia ha vinto quattro Mondiali.", altAnswers: ["L'Italia ha vinto quattro Coppe del Mondo.", "L'Italia ha vinto quattro mondiali."], explanation: "\"Il Mondiale\" → \"i Mondiali\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's watch the match in the square.", answer: "Guardiamo la partita in piazza.", altAnswers: ["Vediamo la partita in piazza."], explanation: "\"In piazza\" = in the square." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shirt is sky blue.", answer: "La maglia è azzurra.", altAnswers: ["La maglietta è azzurra."], explanation: "\"Azzurro\" = sky blue." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone poured into the square.", answer: "Tutti sono scesi in piazza.", altAnswers: ["Sono scesi tutti in piazza."], explanation: "\"Scendere in piazza\" = to go out and celebrate or protest." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What agony!", answer: "Che sofferenza!", explanation: "\"Soffrire\" → \"la sofferenza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I remember it [as if it were] yesterday.", sentence: "Me lo ricordo ___ ieri.", answer: "come se fosse", explanation: "\"Come se\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [coach of the national team] is called the CT.", sentence: "Il ___ si chiama CT.", answer: "commissario tecnico", explanation: "\"CT\" = \"commissario tecnico\"." },
      { type: "word-order", prompt: "Put the words in order to say: In 2006 Italy beat France on penalties.", words: ["Nel", "2006", "l'Italia", "ha", "battuto", "la", "Francia", "ai", "rigori."], translation: "In 2006 Italy beat France on penalties.", explanation: "\"Battere\" = to beat." },
      { type: "multiple-choice", question: "In which years did Italy win the World Cup?", options: ["1934, 1938, 1982, 2006", "1950, 1970, 1990, 2010", "1968 and 2021 only", "1982 only"], correctIndex: 0, explanation: "1968 and 2021 were the European Championships." },
      { type: "dictation", audio: "Abbiamo vinto ai rigori.", explanation: "\"Ai rigori\" = on penalties." },
      { type: "speak", text: "Quando l'Italia ha vinto, tutta la città è scesa in piazza a festeggiare.", prompt: "Say it in Italian: When Italy won, the whole city poured into the square to celebrate.", tip: "Fe-steg-GIA-re: double g.", explanation: "\"Festeggiare\" = to celebrate." },
    ],
  },
  {
    slug: "culture-cycling",
    level: "IT-Culture",
    number: 3,
    title: "Cycling",
    summary: "Follow the Giro d'Italia and its pink jersey, the rivalry of Coppi and Bartali, and Italy's Sunday cyclists.",
    duration: "15 min",
    sections: [
      {
        heading: "Il Giro d'Italia",
        body: [
          "\"Il Giro d'Italia\", or simply \"il Giro\", is a three-week bicycle race held every May since 1909, with breaks only for the world wars. It was created by \"La Gazzetta dello Sport\" to sell newspapers, and its leader wears \"la maglia rosa\", the pink jersey, the color of the Gazzetta's paper.",
          "Each day is \"una tappa\" (a stage). The most feared stages climb the Alps and the Dolomites, on passes like the Stelvio, and crowds wait for hours by the road to see the riders pass in a few seconds.",
        ],
        examples: [
          { es: "Il Giro parte a maggio.", en: "The Giro starts in May." },
          { es: "Chi ha la maglia rosa?", en: "Who's wearing the pink jersey?" },
          { es: "Oggi c'è la tappa di montagna.", en: "Today is the mountain stage." },
          { es: "Li abbiamo aspettati per tre ore.", en: "We waited three hours for them." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's wearing the pink jersey?", answer: "Chi ha la maglia rosa?", altAnswers: ["Chi indossa la maglia rosa?", "Chi porta la maglia rosa?"], explanation: "\"Avere la maglia rosa\" = to lead the Giro." },
          { type: "multiple-choice", question: "Why is the leader's jersey pink?", options: ["La Gazzetta dello Sport is printed on pink paper", "pink is the color of Rome", "the first winner chose it", "it's easy to see on TV"], correctIndex: 0, explanation: "The newspaper that created the race." },
        ],
      },
      {
        heading: "Coppi e Bartali",
        body: [
          "In the 1940s and 1950s Italy was divided between two cyclists. Gino Bartali, from Tuscany, was devout and old-fashioned; Fausto Coppi, from Piedmont, was modern and elegant. A famous photo shows them passing a water bottle to each other on a climb, and Italians still argue about who passed it to whom.",
          "Decades after his death, Bartali was honored as one of the Righteous Among the Nations, \"Giusto tra le Nazioni\": during the war he carried false documents hidden in his bicycle frame to help save Jews.",
        ],
        examples: [
          { es: "Erano grandi rivali.", en: "They were great rivals." },
          { es: "Si sono passati la borraccia.", en: "They passed each other the water bottle." },
          { es: "Nascondeva i documenti nella bicicletta.", en: "He hid the documents in the bicycle." },
          { es: "Ha salvato molte persone.", en: "He saved many people." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were great rivals.", answer: "Erano grandi rivali.", altAnswers: ["Erano dei grandi rivali."], explanation: "\"Rivale\" → \"rivali\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They passed each other the [water bottle].", sentence: "Si sono passati la ___.", answer: "borraccia", explanation: "\"La borraccia\" = water bottle." },
        ],
      },
      {
        heading: "Il ciclista della domenica",
        body: [
          "On Sunday mornings Italian roads fill with amateur cyclists in full team kit, riding in groups and stopping at a bar for a cappuccino halfway. Hills famous from the Giro are climbed every weekend by people of all ages.",
          "Useful words: \"pedalare\" (to pedal), \"la salita\" (the climb), \"la discesa\" (the descent), \"il gruppo\" (the pack) and \"la bici da corsa\" (road bike).",
        ],
        examples: [
          { es: "La domenica vado in bici con gli amici.", en: "On Sundays I go cycling with friends." },
          { es: "La salita è durissima.", en: "The climb is really hard." },
          { es: "Facciamo una pausa al bar.", en: "Let's take a break at the bar." },
          { es: "In discesa vado piano.", en: "Downhill I go slowly." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays I go cycling with friends.", answer: "La domenica vado in bici con gli amici.", altAnswers: ["La domenica vado in bicicletta con gli amici.", "Di domenica vado in bici con gli amici."], explanation: "\"La domenica\" = on Sundays." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The climb is really hard.", answer: "La salita è durissima.", altAnswers: ["La salita è molto dura.", "La salita è difficilissima."], explanation: "\"Duro\" = hard." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Giro starts in May.", answer: "Il Giro parte a maggio.", altAnswers: ["Il Giro comincia a maggio.", "Il Giro inizia a maggio."], explanation: "\"Partire\" = to start (a race)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today is the mountain stage.", answer: "Oggi c'è la tappa di montagna.", altAnswers: ["Oggi è la tappa di montagna."], explanation: "\"La tappa\" = stage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He saved many people.", answer: "Ha salvato molte persone.", altAnswers: ["Ha salvato tante persone."], explanation: "\"Salvare\" = to save." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's take a break at the bar.", answer: "Facciamo una pausa al bar.", altAnswers: ["Fermiamoci al bar."], explanation: "\"Fare una pausa\" = to take a break." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Downhill I go slowly.", answer: "In discesa vado piano.", altAnswers: ["In discesa vado lento.", "In discesa vado adagio."], explanation: "\"Piano\" = slowly." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He hid the documents in the [bicycle].", sentence: "Nascondeva i documenti nella ___.", answer: "bicicletta", altAnswers: ["bici"], explanation: "\"La bici\" is short for \"la bicicletta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We waited [three hours] for them.", sentence: "Li abbiamo aspettati per ___.", answer: "tre ore", explanation: "\"Aspettare\" takes a direct object." },
      { type: "word-order", prompt: "Put the words in order to say: The Giro has existed since 1909.", words: ["Il", "Giro", "esiste", "dal", "1909."], translation: "The Giro has existed since 1909.", explanation: "Present + \"dal\" + year." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la tappa", right: "the stage" },
          { left: "la salita", right: "the climb" },
          { left: "la discesa", right: "the descent" },
          { left: "il gruppo", right: "the pack" },
          { left: "la maglia rosa", right: "the leader's pink jersey" },
        ],
        explanation: "Cycling vocabulary.",
      },
      { type: "dictation", audio: "Chi ha la maglia rosa?", explanation: "\"Maglia\": gli sounds like the lli in million." },
      { type: "speak", text: "Domenica mattina faccio la salita dello Stelvio con la mia bici da corsa.", prompt: "Say it in Italian: On Sunday morning I'm riding up the Stelvio on my road bike.", tip: "STEL-vio: stress on the first syllable.", explanation: "\"Fare una salita\" = to ride up a climb." },
    ],
  },
  {
    slug: "culture-motor-sport",
    level: "IT-Culture",
    number: 4,
    title: "Motor Sport",
    summary: "Discover Ferrari and Maranello, the Monza circuit, and Italy's love affair with motorcycles at Mugello.",
    duration: "15 min",
    sections: [
      {
        heading: "La Ferrari",
        body: [
          "Enzo Ferrari (1898-1988) raced cars for Alfa Romeo before building his own in Maranello, near Modena. His team, \"la Scuderia Ferrari\", is the only one that has raced in every Formula 1 world championship since the first in 1950. Its symbol is \"il Cavallino rampante\", the prancing horse.",
          "Ferrari fans are simply \"i tifosi\", and when the red cars win, church bells in Maranello ring. In Italian, the brand is feminine: \"la Ferrari\", like \"la macchina\".",
        ],
        examples: [
          { es: "La Ferrari ha vinto il Gran Premio.", en: "Ferrari won the Grand Prix." },
          { es: "La fabbrica è a Maranello.", en: "The factory is in Maranello." },
          { es: "Sogno di guidare una Ferrari.", en: "I dream of driving a Ferrari." },
          { es: "Le campane suonano per la vittoria.", en: "The bells ring for the victory." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I dream of driving a Ferrari.", answer: "Sogno di guidare una Ferrari.", altAnswers: ["Il mio sogno è guidare una Ferrari."], explanation: "\"Sognare di\" + infinitive." },
          { type: "multiple-choice", question: "What is \"il Cavallino rampante\"?", options: ["Ferrari's prancing horse symbol", "a racetrack", "a racing driver", "a Formula 1 trophy"], correctIndex: 0, explanation: "\"Cavallino\" = little horse." },
        ],
      },
      {
        heading: "Monza",
        body: [
          "The Monza circuit, just north of Milan, opened in 1922 and is one of the oldest racetracks in the world. It's called \"il Tempio della velocità\", the temple of speed, because its long straights make it one of the fastest tracks on the calendar.",
          "The Italian Grand Prix is held there every September. At the end, fans flood onto the track and fill it with red under the podium.",
        ],
        examples: [
          { es: "Il circuito è vicino a Milano.", en: "The circuit is near Milan." },
          { es: "È una pista velocissima.", en: "It's a very fast track." },
          { es: "I tifosi invadono la pista.", en: "The fans flood onto the track." },
          { es: "Il Gran Premio è a settembre.", en: "The Grand Prix is in September." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Grand Prix is in September.", answer: "Il Gran Premio è a settembre.", altAnswers: ["Il Gran Premio si corre a settembre.", "Il Gran Premio si fa a settembre."], explanation: "\"Gran\" before a consonant." },
          { type: "listen-choose", audio: "I tifosi invadono la pista.", question: "What do the fans do?", options: ["They flood onto the track.", "They leave the circuit.", "They sit in silence.", "They buy tickets."], correctIndex: 0, explanation: "\"Invadere\" = to invade." },
        ],
      },
      {
        heading: "Le moto",
        body: [
          "Italy loves motorbikes too. Ducati (Bologna) and Aprilia (near Venice) race in MotoGP, and the Italian Grand Prix is held at Mugello, in the Tuscan hills. Valentino Rossi, from the Marche, won nine world titles and made the yellow number 46 famous.",
          "And in every city, scooters rule the traffic. A motorbike is \"la moto\" (feminine, short for \"la motocicletta\"), and a scooter is \"lo scooter\" or, often, \"il motorino\".",
        ],
        examples: [
          { es: "Vado al lavoro in motorino.", en: "I go to work on my scooter." },
          { es: "La moto è nuova.", en: "The motorbike is new." },
          { es: "Ha vinto nove titoli mondiali.", en: "He won nine world titles." },
          { es: "Metti il casco!", en: "Put your helmet on!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I go to work on my scooter.", answer: "Vado al lavoro in motorino.", altAnswers: ["Vado a lavorare in motorino.", "Vado al lavoro in scooter."], explanation: "\"In\" + vehicle." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Put your [helmet] on!", sentence: "Metti il ___!", answer: "casco", explanation: "\"Il casco\" = helmet." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ferrari won the Grand Prix.", answer: "La Ferrari ha vinto il Gran Premio.", explanation: "\"La Ferrari\": the team is feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The factory is in Maranello.", answer: "La fabbrica è a Maranello.", altAnswers: ["La fabbrica si trova a Maranello."], explanation: "\"La fabbrica\" = factory, not fabric." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The circuit is near Milan.", answer: "Il circuito è vicino a Milano.", altAnswers: ["Il circuito si trova vicino a Milano."], explanation: "\"Vicino a\" = near." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The motorbike is new.", answer: "La moto è nuova.", explanation: "\"La moto\" is feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He won nine world titles.", answer: "Ha vinto nove titoli mondiali.", altAnswers: ["Ha vinto nove mondiali."], explanation: "\"Il titolo\" → \"i titoli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a very [fast] track.", sentence: "È una pista ___.", answer: "velocissima", altAnswers: ["molto veloce"], explanation: "\"Veloce\" → \"velocissima\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [bells] ring for the victory.", sentence: "Le ___ suonano per la vittoria.", answer: "campane", explanation: "\"La campana\" = bell." },
      { type: "word-order", prompt: "Put the words in order to say: Monza is called the temple of speed.", words: ["Monza", "si", "chiama", "il", "Tempio", "della", "velocità."], translation: "Monza is called the temple of speed.", explanation: "\"La velocità\" = speed." },
      {
        type: "matching",
        instructions: "Match the place to what it's famous for.",
        pairs: [
          { left: "Maranello", right: "the Ferrari factory" },
          { left: "Monza", right: "the Italian Formula 1 Grand Prix" },
          { left: "Mugello", right: "the Italian MotoGP race" },
          { left: "Bologna", right: "Ducati motorbikes" },
        ],
        explanation: "Italy's motor sport map.",
      },
      { type: "dictation", audio: "Il circuito è vicino a Milano.", explanation: "\"Circuito\": the u is pronounced." },
      { type: "speak", text: "A settembre andiamo a Monza a vedere il Gran Premio: tifiamo tutti per la Ferrari.", prompt: "Say it in Italian: In September we're going to Monza to see the Grand Prix: we all root for Ferrari.", tip: "Ti-FIA-mo: one f, stress on -fia-.", explanation: "\"Tifare per\" = to root for." },
    ],
  },
  {
    slug: "culture-winter-sports",
    level: "IT-Culture",
    number: 5,
    title: "Winter Sports",
    summary: "Ski the Dolomites, learn the words for a \"settimana bianca\", and look back at the Milano-Cortina 2026 Winter Olympics.",
    duration: "15 min",
    sections: [
      {
        heading: "La settimana bianca",
        body: [
          "Many Italian families take \"la settimana bianca\" (the white week): a week of skiing in winter, often in February. The Alps run across the whole North, from Valle d'Aosta to Friuli, and the Dolomites, pale limestone peaks in Trentino-Alto Adige and Veneto, have been a UNESCO World Heritage site since 2009.",
          "At lunch skiers stop at \"un rifugio\", a mountain hut that serves polenta, soups and strudel, with a terrace in the sun.",
        ],
        examples: [
          { es: "A febbraio facciamo la settimana bianca.", en: "In February we go on a skiing vacation." },
          { es: "Andiamo a sciare in Trentino.", en: "We're going skiing in Trentino." },
          { es: "Pranziamo al rifugio.", en: "Let's have lunch at the mountain hut." },
          { es: "Le Dolomiti sono bellissime al tramonto.", en: "The Dolomites are beautiful at sunset." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're going skiing in Trentino.", answer: "Andiamo a sciare in Trentino.", altAnswers: ["Andiamo a sciare nel Trentino."], explanation: "\"Andare a\" + infinitive." },
          { type: "multiple-choice", question: "What is \"la settimana bianca\"?", options: ["a week of skiing in winter", "a week of snow closures", "a religious holiday", "a white wine festival"], correctIndex: 0, explanation: "\"Bianca\" for the snow." },
        ],
      },
      {
        heading: "Sulle piste",
        body: [
          "To ski you buy \"lo skipass\" and take \"la seggiovia\" (chairlift) or \"la cabinovia\" (gondola) up the mountain. Slopes are \"le piste\", marked by color: blue for easy, red for intermediate, black for difficult. Beginners take lessons with \"il maestro di sci\".",
          "Not everyone skis downhill: \"lo sci di fondo\" (cross-country skiing) and snowshoe walks are popular too, and for some the best part of the day is \"l'aperitivo\" after skiing.",
        ],
        examples: [
          { es: "Quanto costa lo skipass giornaliero?", en: "How much is a day pass?" },
          { es: "Prendiamo la seggiovia.", en: "Let's take the chairlift." },
          { es: "Questa pista è troppo difficile per me.", en: "This slope is too difficult for me." },
          { es: "Faccio lezione con un maestro di sci.", en: "I'm taking lessons with a ski instructor." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This slope is too difficult for me.", answer: "Questa pista è troppo difficile per me.", explanation: "\"La pista\" = ski slope." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Let's take the [chairlift].", sentence: "Prendiamo la ___.", answer: "seggiovia", explanation: "\"Seggio\" (seat) + \"via\"." },
        ],
      },
      {
        heading: "Milano-Cortina 2026",
        body: [
          "From 6 to 22 February 2026 Italy hosted the Winter Olympics for the third time, after Cortina d'Ampezzo in 1956 and Turin in 2006. Milano-Cortina was the first Winter Games officially named after two cities, with events spread across Lombardy, Veneto and Trentino-Alto Adige, from the ice rinks of Milan to the slopes of Bormio and Cortina.",
          "The opening ceremony was held at San Siro stadium in Milan and the closing ceremony in the Roman Arena of Verona. The Paralympic Games followed in March.",
        ],
        examples: [
          { es: "Le Olimpiadi si sono svolte in Lombardia e in Veneto.", en: "The Olympics took place in Lombardy and Veneto." },
          { es: "La cerimonia di apertura era a San Siro.", en: "The opening ceremony was at San Siro." },
          { es: "Cortina aveva già ospitato i Giochi nel 1956.", en: "Cortina had already hosted the Games in 1956." },
          { es: "Ho visto le gare in TV.", en: "I watched the events on TV." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I watched the events on TV.", answer: "Ho visto le gare in TV.", altAnswers: ["Ho guardato le gare in TV.", "Ho visto le gare in televisione."], explanation: "\"La gara\" = race, competition." },
          { type: "listen-choose", audio: "Cortina aveva già ospitato i Giochi nel 1956.", question: "What does the speaker say about Cortina?", options: ["It had already hosted the Games in 1956.", "It hosted the Games for the first time in 2026.", "It never hosted the Games.", "It hosted the Summer Games."], correctIndex: 0, explanation: "\"Aveva già ospitato\" = had already hosted." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's have lunch at the mountain hut.", answer: "Pranziamo al rifugio.", altAnswers: ["Mangiamo al rifugio."], explanation: "\"Il rifugio\" = mountain hut." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is a day pass?", answer: "Quanto costa lo skipass giornaliero?", altAnswers: ["Quanto costa lo skipass per un giorno?", "Quanto viene lo skipass giornaliero?"], explanation: "\"Giornaliero\" = for one day." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Dolomites are beautiful at sunset.", answer: "Le Dolomiti sono bellissime al tramonto.", altAnswers: ["Al tramonto le Dolomiti sono bellissime."], explanation: "\"Al tramonto\" = at sunset." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The opening ceremony was at San Siro.", answer: "La cerimonia di apertura era a San Siro.", altAnswers: ["La cerimonia d'apertura era a San Siro.", "La cerimonia di apertura è stata a San Siro."], explanation: "\"La cerimonia di apertura\" = opening ceremony." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm taking lessons with a ski instructor.", answer: "Faccio lezione con un maestro di sci.", altAnswers: ["Prendo lezioni da un maestro di sci.", "Faccio lezioni con un maestro di sci."], explanation: "\"Il maestro di sci\" = ski instructor." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In February we go on a [skiing vacation].", sentence: "A febbraio facciamo la ___.", answer: "settimana bianca", explanation: "\"La settimana bianca\" = ski week." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I prefer [cross-country skiing].", sentence: "Preferisco ___.", answer: "lo sci di fondo", explanation: "\"Lo sci\": \"lo\" before s + consonant." },
      { type: "word-order", prompt: "Put the words in order to say: Italy hosted the Winter Olympics in 2026.", words: ["L'Italia", "ha", "ospitato", "le", "Olimpiadi", "invernali", "nel", "2026."], translation: "Italy hosted the Winter Olympics in 2026.", explanation: "\"Ospitare\" = to host." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la seggiovia", right: "the chairlift" },
          { left: "la pista", right: "the ski slope" },
          { left: "il rifugio", right: "the mountain hut" },
          { left: "lo skipass", right: "the lift pass" },
          { left: "lo sci di fondo", right: "cross-country skiing" },
        ],
        explanation: "Mountain vocabulary.",
      },
      { type: "dictation", audio: "Prendiamo la seggiovia.", explanation: "\"Seggiovia\": double g." },
      { type: "speak", text: "Quest'inverno faccio la settimana bianca sulle Dolomiti con i miei amici.", prompt: "Say it in Italian: This winter I'm going on a ski week in the Dolomites with my friends.", tip: "Do-LO-mi-ti: stress on -lo-.", explanation: "\"Sulle Dolomiti\" = in (on) the Dolomites." },
    ],
  },
  {
    slug: "culture-palio",
    level: "IT-Culture",
    number: 6,
    title: "The Palio di Siena",
    summary: "Enter Siena's contrade and watch the Palio: a ninety-second bareback horse race around Piazza del Campo, run twice every summer.",
    duration: "15 min",
    sections: [
      {
        heading: "Le contrade",
        body: [
          "Siena is divided into seventeen \"contrade\", historic neighborhoods, each with its own name, animal symbol, colors, church, museum and fountain. Many are animals: the Goose, the She-Wolf, the Snail, the Porcupine. People are baptized into their contrada and stay loyal to it for life.",
          "Every contrada has allies and at least one rival, \"la contrada nemica\". For the Sienese it's not folklore: it's family, friendship and identity.",
        ],
        examples: [
          { es: "Siena ha diciassette contrade.", en: "Siena has seventeen contrade." },
          { es: "Di che contrada sei?", en: "Which contrada are you from?" },
          { es: "Sono nato nella contrada dell'Oca.", en: "I was born in the Goose contrada." },
          { es: "La Lupa e l'Istrice sono nemiche.", en: "The She-Wolf and the Porcupine are rivals." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which contrada are you from?", answer: "Di che contrada sei?", altAnswers: ["Di quale contrada sei?", "Tu di che contrada sei?"], explanation: "\"Essere di\" = to belong to." },
          { type: "multiple-choice", question: "How many contrade does Siena have?", options: ["seventeen", "ten", "three", "twenty-one"], correctIndex: 0, explanation: "Ten of them run in each Palio." },
        ],
      },
      {
        heading: "La corsa",
        body: [
          "The Palio is run twice a year, on 2 July and 16 August, in Piazza del Campo, the shell-shaped main square, covered for the occasion with a layer of earth. Ten contrade take part: the seven that didn't run in the same Palio the year before, plus three drawn by lot. Horses are assigned by lot too.",
          "The jockeys ride bareback, three laps, in about ninety seconds. Everything is allowed, even hitting rivals with a whip, and a horse that loses its jockey can still win: it's called \"il cavallo scosso\". The prize is a painted silk banner, \"il drappellone\".",
        ],
        examples: [
          { es: "Il Palio si corre il 2 luglio e il 16 agosto.", en: "The Palio is run on 2 July and 16 August." },
          { es: "I fantini montano a pelo.", en: "The jockeys ride bareback." },
          { es: "La corsa dura un minuto e mezzo.", en: "The race lasts a minute and a half." },
          { es: "Ha vinto il cavallo senza fantino!", en: "The horse without a jockey won!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The race lasts a minute and a half.", answer: "La corsa dura un minuto e mezzo.", explanation: "\"E mezzo\" = and a half." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [jockeys] ride bareback.", sentence: "I ___ montano a pelo.", answer: "fantini", explanation: "\"Il fantino\" = jockey." },
        ],
      },
      {
        heading: "Vincere e perdere",
        body: [
          "The winning contrada celebrates for weeks, with dinners in the street and the banner carried through the city. The contrada that has gone longest without a win is called \"la nonna\", the grandmother.",
          "For a contrada, the worst result isn't last place: it's seeing its rival win. And coming second is considered a defeat, not a success.",
        ],
        examples: [
          { es: "Abbiamo vinto il Palio!", en: "We won the Palio!" },
          { es: "Festeggiamo con una cena in strada.", en: "We celebrate with a dinner in the street." },
          { es: "Arrivare secondi è una sconfitta.", en: "Coming second is a defeat." },
          { es: "È la nonna: non vince da anni.", en: "It's the nonna: it hasn't won for years." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We won the Palio!", answer: "Abbiamo vinto il Palio!", explanation: "\"Vincere\" → \"vinto\"." },
          { type: "listen-choose", audio: "Arrivare secondi è una sconfitta.", question: "What does coming second mean in the Palio?", options: ["a defeat", "a good result", "a draw", "a reason to party"], correctIndex: 0, explanation: "\"La sconfitta\" = defeat." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Siena has seventeen contrade.", answer: "Siena ha diciassette contrade.", explanation: "\"Diciassette\": double s." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The jockeys ride bareback.", answer: "I fantini montano a pelo.", altAnswers: ["I fantini corrono a pelo.", "I fantini cavalcano a pelo."], explanation: "\"A pelo\" = bareback." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We celebrate with a dinner in the street.", answer: "Festeggiamo con una cena in strada.", altAnswers: ["Festeggiamo con una cena per strada."], explanation: "\"Festeggiare\" = to celebrate." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Coming second is a defeat.", answer: "Arrivare secondi è una sconfitta.", altAnswers: ["Arrivare secondo è una sconfitta."], explanation: "Infinitive as subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The horse without a jockey won!", answer: "Ha vinto il cavallo senza fantino!", altAnswers: ["Il cavallo senza fantino ha vinto!"], explanation: "\"Senza\" often drops the article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The horses are assigned [by lot].", sentence: "I cavalli sono assegnati ___.", answer: "a sorte", altAnswers: ["per sorteggio"], explanation: "\"La sorte\" = fate, lot." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It hasn't won [for years].", sentence: "Non vince ___.", answer: "da anni", explanation: "Present + \"da\" for something still true." },
      { type: "word-order", prompt: "Put the words in order to say: The race takes place in Piazza del Campo.", words: ["La", "corsa", "si", "svolge", "in", "Piazza", "del", "Campo."], translation: "The race takes place in Piazza del Campo.", explanation: "\"Svolgersi\" = to take place." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la contrada", right: "the neighborhood" },
          { left: "il fantino", right: "the jockey" },
          { left: "il drappellone", right: "the painted banner" },
          { left: "il cavallo scosso", right: "the horse that lost its jockey" },
          { left: "la nonna", right: "the contrada without a win for longest" },
        ],
        explanation: "Palio vocabulary.",
      },
      { type: "dictation", audio: "Abbiamo vinto il Palio!", explanation: "\"Palio\": stress on the first syllable." },
      { type: "speak", text: "Il 16 agosto andiamo a Siena a vedere il Palio in Piazza del Campo.", prompt: "Say it in Italian: On 16 August we're going to Siena to see the Palio in Piazza del Campo.", tip: "SIE-na: stress on the first syllable.", explanation: "\"Il\" + date." },
    ],
  },
  {
    slug: "culture-sport-language",
    level: "IT-Culture",
    number: 7,
    title: "Sports Language",
    summary: "Talk about a match like an Italian: scores, goals, referees, penalties and the endless replays.",
    duration: "15 min",
    sections: [
      {
        heading: "Il risultato",
        body: [
          "A match is \"una partita\". To score is \"segnare\" or \"fare gol\", and a team can \"vincere\", \"perdere\" or \"pareggiare\" (to draw). Scores are read with \"a\": 2-1 is \"due a uno\", and 0-0 is \"zero a zero\". A match has \"il primo tempo\" and \"il secondo tempo\", sometimes followed by \"i tempi supplementari\" (extra time) and \"i rigori\".",
          "To ask the score: \"Come è finita?\" or \"Quanto è finita?\" To ask who's winning: \"Chi sta vincendo?\"",
        ],
        examples: [
          { es: "Come è finita la partita?", en: "How did the match end?" },
          { es: "Abbiamo vinto due a uno.", en: "We won two to one." },
          { es: "È finita zero a zero.", en: "It ended nil-nil." },
          { es: "Chi ha segnato?", en: "Who scored?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who scored?", answer: "Chi ha segnato?", altAnswers: ["Chi ha fatto gol?"], explanation: "\"Segnare\" = to score." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We won [two to one].", sentence: "Abbiamo vinto ___.", answer: "due a uno", altAnswers: ["2 a 1"], explanation: "Scores use \"a\"." },
        ],
      },
      {
        heading: "In campo",
        body: [
          "The people on the pitch: \"il portiere\" (goalkeeper), \"il difensore\", \"il centrocampista\" (midfielder), \"l'attaccante\" (striker), \"l'arbitro\" (referee) and, on the bench, \"l'allenatore\", often called \"il mister\". Italian football has even given English a word: \"catenaccio\", a tight defensive style, literally a door bolt.",
          "Things that happen: \"il fallo\" (foul), \"il cartellino giallo\" or \"rosso\", \"il fuorigioco\" (offside), \"il calcio d'angolo\" (corner) and \"il rigore\" (penalty).",
        ],
        examples: [
          { es: "Il portiere ha parato il rigore.", en: "The goalkeeper saved the penalty." },
          { es: "L'arbitro ha dato il cartellino rosso.", en: "The referee gave a red card." },
          { es: "Era fuorigioco!", en: "It was offside!" },
          { es: "Il mister ha cambiato tre giocatori.", en: "The coach changed three players." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was offside!", answer: "Era fuorigioco!", altAnswers: ["Era fuori gioco!", "Era in fuorigioco!"], explanation: "\"Fuori\" + \"gioco\"." },
          { type: "multiple-choice", question: "What is \"il catenaccio\"?", options: ["a tight defensive style", "a fast attack", "a penalty kick", "a fan chant"], correctIndex: 0, explanation: "Literally a door bolt." },
        ],
      },
      {
        heading: "La moviola",
        body: [
          "After the match, the real game begins: arguing. For decades TV shows used \"la moviola\", slow-motion replays, to judge every decision. Today there's the VAR, but the arguments haven't stopped.",
          "Expressions you'll hear: \"Era rigore!\" (That was a penalty!), \"Ci hanno rubato la partita!\" (They stole the match from us!), \"Abbiamo giocato malissimo\" and the classic \"Arbitro venduto!\" (the referee's been bought!), shouted more out of habit than conviction.",
        ],
        examples: [
          { es: "Era rigore netto!", en: "That was a clear penalty!" },
          { es: "Ci hanno rubato la partita!", en: "They stole the match from us!" },
          { es: "Abbiamo giocato malissimo.", en: "We played terribly." },
          { es: "Rivediamo l'azione al VAR.", en: "Let's see the play again on VAR." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We played terribly.", answer: "Abbiamo giocato malissimo.", altAnswers: ["Abbiamo giocato molto male."], explanation: "\"Male\" → \"malissimo\"." },
          { type: "listen-choose", audio: "Ci hanno rubato la partita!", question: "How does the fan feel?", options: ["Cheated.", "Happy.", "Bored.", "Proud."], correctIndex: 0, explanation: "\"Rubare\" = to steal." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How did the match end?", answer: "Come è finita la partita?", altAnswers: ["Com'è finita la partita?", "Quanto è finita la partita?"], explanation: "\"Finire\" takes \"essere\" here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It ended nil-nil.", answer: "È finita zero a zero.", altAnswers: ["È finita 0 a 0."], explanation: "\"Finita\" agrees with \"la partita\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The goalkeeper saved the penalty.", answer: "Il portiere ha parato il rigore.", explanation: "\"Parare\" = to save." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The referee gave a red card.", answer: "L'arbitro ha dato il cartellino rosso.", altAnswers: ["L'arbitro ha dato un cartellino rosso."], explanation: "\"Il cartellino\" = card." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That was a clear penalty!", answer: "Era rigore netto!", altAnswers: ["Era un rigore netto!", "Era rigore!"], explanation: "\"Netto\" = clear." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [drew] one to one.", sentence: "Abbiamo ___ uno a uno.", answer: "pareggiato", explanation: "\"Pareggiare\" = to draw." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who's [winning]?", sentence: "Chi sta ___?", answer: "vincendo", explanation: "\"Stare\" + gerund." },
      { type: "word-order", prompt: "Put the words in order to say: The coach changed three players.", words: ["Il", "mister", "ha", "cambiato", "tre", "giocatori."], translation: "The coach changed three players.", explanation: "\"Il mister\" = the coach (football slang)." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il portiere", right: "the goalkeeper" },
          { left: "l'arbitro", right: "the referee" },
          { left: "il rigore", right: "the penalty" },
          { left: "il fuorigioco", right: "offside" },
          { left: "il pareggio", right: "the draw" },
        ],
        explanation: "Match vocabulary.",
      },
      { type: "dictation", audio: "Abbiamo vinto due a uno.", explanation: "\"Due a uno\" = 2-1." },
      { type: "speak", text: "Era rigore netto, ma l'arbitro non l'ha visto!", prompt: "Say it in Italian: It was a clear penalty, but the referee didn't see it!", tip: "AR-bi-tro: stress on the first syllable.", explanation: "\"L'ha visto\": \"lo\" + \"ha\"." },
    ],
  },
  {
    slug: "culture-dialogue-at-the-stadium",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: At the Stadium",
    summary: "Spend match day with Paolo and Emma: tickets and ID, the turnstiles, the curva, the match and a porchetta sandwich.",
    duration: "15 min",
    sections: [
      {
        heading: "I biglietti",
        body: [
          "Paolo: \"Ho preso i biglietti per domenica. Tribuna, non curva.\" Emma: \"Perché non in curva?\" Paolo: \"In curva stai in piedi e canti per novanta minuti. In tribuna vedi meglio.\" Emma: \"Va bene. Devo portare qualcosa?\" Paolo: \"Un documento: i biglietti sono nominativi.\"",
          "Stadiums have \"la tribuna\" (the main stand), \"i distinti\" (the side stands) and \"le curve\", behind the goals, where the most passionate fans stand, sing and wave flags. Tickets carry your name, and you show ID at \"i tornelli\" (turnstiles).",
        ],
        examples: [
          { es: "Ho preso i biglietti per domenica.", en: "I got the tickets for Sunday." },
          { es: "In curva si sta in piedi.", en: "In the curva people stand." },
          { es: "Devo portare un documento?", en: "Do I have to bring an ID?" },
          { es: "Ci vediamo ai tornelli.", en: "See you at the turnstiles." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got the tickets for Sunday.", answer: "Ho preso i biglietti per domenica.", altAnswers: ["Ho comprato i biglietti per domenica."], explanation: "\"Prendere\" = to get, buy." },
          { type: "multiple-choice", question: "Where do the most passionate fans stand?", options: ["in the curva", "in the tribuna", "in the parking lot", "on the pitch"], correctIndex: 0, explanation: "\"La curva\", behind the goal." },
        ],
      },
      {
        heading: "Allo stadio",
        body: [
          "Emma: \"Che atmosfera! Senti come cantano?\" Paolo: \"Aspetta che entrino le squadre.\" Twenty minutes later: \"Gol! Gol! Hai visto che gol?\" Then the other team scores. Paolo: \"Ma era fuorigioco! L'arbitro è cieco?\"",
          "At security, glass bottles, umbrellas and large bags usually aren't allowed. Arrive early: the queues at the turnstiles can be long.",
        ],
        examples: [
          { es: "Che atmosfera!", en: "What an atmosphere!" },
          { es: "Hai visto che gol?", en: "Did you see that goal?" },
          { es: "L'arbitro è cieco?", en: "Is the referee blind?" },
          { es: "Non si possono portare bottiglie.", en: "You can't bring bottles." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you see that goal?", answer: "Hai visto che gol?", altAnswers: ["Hai visto che goal?", "Hai visto quel gol?"], explanation: "\"Che\" + noun = what a." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You [can't bring] bottles.", sentence: "Non ___ portare bottiglie.", answer: "si possono", explanation: "\"Si possono\" agrees with \"bottiglie\"." },
        ],
      },
      {
        heading: "Dopo la partita",
        body: [
          "The match ends 1-1. Emma: \"Un pareggio. Poteva andare peggio.\" Paolo: \"Poteva andare meglio! Dai, andiamo a prendere un panino.\"",
          "Outside many stadiums, food vans sell sandwiches: in Rome \"il panino con la porchetta\" (roast pork), in Milan \"la salamella\", a sausage with onions and peppers. Fans eat them standing up while they replay the match in words.",
        ],
        examples: [
          { es: "Poteva andare peggio.", en: "It could have gone worse." },
          { es: "Andiamo a prendere un panino.", en: "Let's go get a sandwich." },
          { es: "Un panino con la porchetta, per favore.", en: "A roast pork sandwich, please." },
          { es: "C'è un traffico pazzesco.", en: "The traffic is crazy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It could have gone worse.", answer: "Poteva andare peggio.", altAnswers: ["Sarebbe potuta andare peggio.", "Poteva finire peggio."], explanation: "Spoken Italian uses \"poteva\" for could have." },
          { type: "listen-choose", audio: "Un pareggio. Poteva andare peggio.", question: "What was the result?", options: ["a draw", "a win", "a defeat", "the match was canceled"], correctIndex: 0, explanation: "\"Il pareggio\" = draw." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What an atmosphere!", answer: "Che atmosfera!", explanation: "\"Che\" + noun = what a." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I have to bring an ID?", answer: "Devo portare un documento?", altAnswers: ["Devo portare un documento d'identità?"], explanation: "\"Un documento\" = ID." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you at the turnstiles.", answer: "Ci vediamo ai tornelli.", explanation: "\"Il tornello\" = turnstile." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's go get a sandwich.", answer: "Andiamo a prendere un panino.", altAnswers: ["Andiamo a mangiare un panino."], explanation: "\"Andare a prendere\" = to go get." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the referee blind?", answer: "L'arbitro è cieco?", altAnswers: ["Ma l'arbitro è cieco?"], explanation: "\"Cieco\" = blind." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the curva people [stand].", sentence: "In curva si sta ___.", answer: "in piedi", explanation: "\"Stare in piedi\" = to stand." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The traffic is [crazy].", sentence: "C'è un traffico ___.", answer: "pazzesco", explanation: "\"Pazzesco\" = crazy, unbelievable." },
      { type: "word-order", prompt: "Put the words in order to say: The tickets have our names on them.", words: ["I", "biglietti", "sono", "nominativi."], translation: "The tickets have our names on them.", explanation: "\"Nominativo\" = in someone's name." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la tribuna", right: "the main stand" },
          { left: "la curva", right: "the end stand behind the goal" },
          { left: "i tornelli", right: "the turnstiles" },
          { left: "il pareggio", right: "the draw" },
          { left: "la porchetta", right: "roast pork" },
        ],
        explanation: "Match day vocabulary.",
      },
      { type: "dictation", audio: "Poteva andare peggio.", explanation: "\"Peggio\": double g." },
      { type: "speak", text: "Domenica andiamo allo stadio: ho preso due biglietti in tribuna.", prompt: "Say it in Italian: On Sunday we're going to the stadium: I got two tickets in the main stand.", tip: "TRI-bu-na: stress on the first syllable.", explanation: "\"Allo stadio\": \"lo\" before s + consonant." },
    ],
  },
];

export const IT_CULTURE_U09_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a message to an Italian friend about a sports event you watched, at the stadium, on TV or in person (a match, a race, the Olympics). Say where you watched it, what happened, the result and how you felt.",
  minWords: 60,
  maxWords: 150,
  rubric: [
    "Says where and with whom you watched the event",
    "Tells what happened with the passato prossimo (\"ha segnato\", \"abbiamo vinto\")",
    "Gives the result in the Italian way (\"due a uno\", \"è finita\")",
    "Uses at least three words from the unit (for example \"tifare\", \"rigore\", \"arbitro\", \"tappa\")",
  ],
  modelAnswer: "Ciao Marco!\nSabato sono andato allo stadio per la prima volta con mio cugino. Avevamo due biglietti in curva e abbiamo cantato per novanta minuti! Il primo tempo è finito zero a zero, ma nel secondo tempo il nostro attaccante ha segnato un gol bellissimo. Poi l'arbitro ha dato un rigore all'altra squadra: secondo me non era rigore! Per fortuna il portiere l'ha parato. Abbiamo vinto uno a zero.\nDopo la partita abbiamo mangiato un panino con la porchetta. Che giornata!\nE tu, per chi tifi?\nA presto,\nSam",
  explanation: "Use the passato prossimo for events (\"ha segnato\", \"ha parato\") and the imperfetto for background (\"avevamo due biglietti\"). Scores use \"a\": \"uno a zero\".",
};
