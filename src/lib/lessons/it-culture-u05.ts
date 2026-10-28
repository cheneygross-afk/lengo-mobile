// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u05.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 5: Gestures and Body Language.
// Famous gestures and what they say, greetings and kisses, gestures to
// avoid, tone and volume with interjections (boh, mah, dai, magari),
// regional gestures, a short history (Quintilian, de Jorio, Munari), and a
// scene told without words. Intermediate grammar.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U05: Lesson[] = [
  {
    slug: "culture-famous-gestures",
    level: "IT-Culture",
    number: 1,
    title: "Famous Gestures",
    summary: "Read the best-known Italian gestures: the pinched fingers of ma che vuoi?, the disbelief of ma dai!, and the shrug of boh.",
    duration: "15 min",
    sections: [
      {
        heading: "Le dita unite",
        body: [
          "The most famous Italian gesture: the fingertips of one hand pressed together, pointing up, and the hand shaken up and down from the wrist. Italians call it \"la mano a borsa\" (the purse hand) or \"a carciofo\" (artichoke). It doesn't mean delicious. It means \"Ma che vuoi?\" (what do you want?) or \"Ma che dici?\" (what are you saying?): impatience, disbelief, mild annoyance.",
          "The faster the shake, the stronger the feeling. Since 2020 it even has its own emoji, which Italians use exactly the same way.",
        ],
        examples: [
          { es: "Ma che vuoi?", en: "What do you want?" },
          { es: "Ma che dici?", en: "What are you talking about?" },
          { es: "Ha fatto il gesto della mano a borsa.", en: "He made the pinched-fingers gesture." },
          { es: "Quel gesto non vuol dire buono.", en: "That gesture doesn't mean tasty." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you talking about?", answer: "Ma che dici?", altAnswers: ["Che dici?", "Ma cosa dici?", "Cosa dici?", "Ma che cosa dici?"], explanation: "\"Ma\" at the start adds emphasis, not but." },
          { type: "multiple-choice", question: "A driver shakes his pinched fingers at you. What does he mean?", options: ["What are you doing?!", "Delicious!", "Perfect!", "Goodbye."], correctIndex: 0, explanation: "Impatience: \"Ma che fai?\", \"Ma che vuoi?\"." },
        ],
      },
      {
        heading: "Ma dai!",
        body: [
          "\"Dai\" (from \"dare\", to give) is everywhere. \"Dai!\" alone is come on!, to encourage or to push: \"Dai, andiamo!\". \"Ma dai!\" with raised eyebrows and open palms means no way!, really?, sometimes delighted, sometimes doubtful. \"Ma dai, non è vero!\" is you're kidding.",
          "The tone decides. A rising \"Ma daaai!\" is surprise; a flat, tired \"Ma dai...\" is come on, be serious.",
        ],
        examples: [
          { es: "Dai, andiamo, è tardi!", en: "Come on, let's go, it's late!" },
          { es: "Si sposano? Ma dai!", en: "They're getting married? No way!" },
          { es: "Ma dai, non è vero!", en: "Come on, that's not true!" },
          { es: "Dai, che ce la fai!", en: "Come on, you can do it!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come on, you can do it!", answer: "Dai, che ce la fai!", altAnswers: ["Dai, ce la fai!", "Forza, che ce la fai!", "Dai che ce la fai!"], explanation: "\"Farcela\" = to manage; \"ce la fai\" = you can do it." },
          { type: "listen-choose", audio: "Si sposano? Ma dai!", question: "How does the speaker feel?", options: ["surprised", "angry", "bored", "sad"], correctIndex: 0, explanation: "\"Ma dai!\" here is no way!" },
        ],
      },
      {
        heading: "Boh e mah",
        body: [
          "Two tiny words come with their own body language. \"Boh\" is I don't know, said with a shrug, a pout and sometimes open hands: \"Dov'è Marco?\" \"Boh!\". It's casual; with a stranger say \"Non lo so\".",
          "\"Mah\" expresses doubt or resignation, often with a tilt of the head: \"Mah, vedremo\" (well, we'll see). Both are spoken, never in formal writing.",
        ],
        examples: [
          { es: "Dov'è Marco? Boh!", en: "Where's Marco? No idea!" },
          { es: "Mah, vedremo.", en: "Well, we'll see." },
          { es: "Non lo so, mi dispiace.", en: "I don't know, I'm sorry." },
          { es: "Ha alzato le spalle.", en: "He shrugged." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He shrugged.", answer: "Ha alzato le spalle.", altAnswers: ["Ha fatto spallucce.", "Lui ha alzato le spalle."], explanation: "\"Alzare le spalle\" = to shrug." },
          { type: "multiple-choice", question: "A stranger at the station asks you when the train leaves. You don't know. What's best?", options: ["Mi dispiace, non lo so.", "Boh!", "Mah!", "Ma dai!"], correctIndex: 0, explanation: "\"Boh\" is too casual for a stranger." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you want?", answer: "Ma che vuoi?", altAnswers: ["Che vuoi?", "Cosa vuoi?", "Ma cosa vuoi?", "Che cosa vuoi?"], explanation: "The words behind the pinched fingers." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come on, let's go, it's late!", answer: "Dai, andiamo, è tardi!", altAnswers: ["Dai, andiamo che è tardi!", "Forza, andiamo, è tardi!"], explanation: "\"Dai\" = come on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Well, we'll see.", answer: "Mah, vedremo.", altAnswers: ["Mah, si vedrà.", "Boh, vedremo."], explanation: "Future \"vedremo\" = we'll see." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That gesture doesn't mean tasty.", answer: "Quel gesto non vuol dire buono.", altAnswers: ["Quel gesto non significa buono.", "Quel gesto non vuole dire buono."], explanation: "\"Voler dire\" = to mean." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come on, that's not true!", answer: "Ma dai, non è vero!", altAnswers: ["Dai, non è vero!"], explanation: "\"Ma dai\" = you're kidding." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He made [the pinched-fingers gesture].", sentence: "Ha fatto ___.", answer: "il gesto della mano a borsa", altAnswers: ["la mano a borsa"], explanation: "\"Fare un gesto\" = to make a gesture." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I don't know], I'm sorry.", sentence: "___, mi dispiace.", answer: "Non lo so", explanation: "\"Lo\" = it: you always say \"non lo so\"." },
      { type: "word-order", prompt: "Put the words in order to say: Italians speak with their hands.", words: ["Gli", "italiani", "parlano", "con", "le", "mani."], translation: "Italians speak with their hands.", explanation: "\"La mano\" → \"le mani\": feminine, irregular plural." },
      { type: "multiple-choice", question: "Your friend says \"Boh!\". What does it mean?", options: ["I don't know.", "Yes, of course.", "Be careful!", "Hello!"], correctIndex: 0, explanation: "A casual I don't know, with a shrug." },
      { type: "dictation", audio: "Ma che dici? Non è vero!", explanation: "\"Ma\" for emphasis." },
      { type: "speak", text: "Ma dai! Non ci credo!", prompt: "Say it in Italian: No way! I don't believe it!", tip: "Stretch the \"dai\" and raise your voice at the end.", explanation: "\"Crederci\": \"non ci credo\" = I don't believe it." },
    ],
  },
  {
    slug: "culture-gestures-meaning",
    level: "IT-Culture",
    number: 2,
    title: "What They Mean",
    summary: "Learn ten everyday gestures and the Italian words that go with them, from buono! and occhio! to soldi and così così.",
    duration: "15 min",
    sections: [
      {
        heading: "Food, money, danger",
        body: [
          "Twisting the tip of the index finger into the cheek means \"Buono!\": tasty, often about food. A flat hand tapping the side of the waist means \"Ho fame\", I'm hungry. Rubbing the thumb against the first two fingers means money: \"Costa un sacco di soldi\", it costs a fortune.",
          "Pulling down the lower eyelid with one finger means \"Occhio!\": watch out, keep your eyes open, or that guy is sly. Tapping the temple can mean think! or \"Sei matto?\" (are you crazy?), depending on the face.",
        ],
        examples: [
          { es: "Che buono questo tiramisù!", en: "This tiramisù is so good!" },
          { es: "Ho una fame da lupi.", en: "I'm starving." },
          { es: "Costa un sacco di soldi.", en: "It costs a fortune." },
          { es: "Occhio al portafoglio!", en: "Watch your wallet!" },
          { es: "Sei matto?", en: "Are you crazy?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Watch your wallet!", answer: "Occhio al portafoglio!", altAnswers: ["Attento al portafoglio!", "Attenta al portafoglio!", "Attenzione al portafoglio!"], explanation: "\"Occhio a\" + noun = watch out for." },
          { type: "multiple-choice", question: "Someone twists a fingertip into their cheek. What do they mean?", options: ["It's delicious.", "I have a toothache.", "You're crazy.", "I'm tired."], correctIndex: 0, explanation: "The \"buono!\" gesture." },
        ],
      },
      {
        heading: "Five more",
        body: [
          "A flat hand rocking side to side: \"così così\", so-so. Two index fingers held side by side: \"quei due stanno insieme\", those two are a couple, or are in it together. A hand opening and closing like a beak: \"parla troppo\", blah blah, a chatterbox.",
          "Thumb and little finger held to the ear: \"ti chiamo\", I'll call you. Fingertips of thumb and index pinched together and drawn across the air: \"perfetto\", exactly, precisely.",
        ],
        examples: [
          { es: "Com'è andato l'esame? Così così.", en: "How did the exam go? So-so." },
          { es: "Secondo me quei due stanno insieme.", en: "I think those two are a couple." },
          { es: "Parla, parla, parla: è un chiacchierone.", en: "He talks and talks: he's a chatterbox." },
          { es: "Ti chiamo stasera!", en: "I'll call you tonight!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think those two are a couple.", answer: "Secondo me quei due stanno insieme.", altAnswers: ["Penso che quei due stiano insieme.", "Secondo me stanno insieme quei due."], explanation: "\"Stare insieme\" = to be a couple." },
          { type: "listen-choose", audio: "Com'è andato l'esame? Così così.", question: "How did the exam go?", options: ["so-so", "very well", "badly", "it hasn't happened yet"], correctIndex: 0, explanation: "\"Così così\" with a rocking hand." },
        ],
      },
      {
        heading: "Gesture plus words",
        body: [
          "Italians rarely gesture in silence: the hand underlines the words. Learn the phrase with the gesture and you'll recognize both. Children learn them at home, so even Italians abroad keep them for generations.",
          "When you don't understand a gesture, ask: \"Che cosa vuol dire questo gesto?\". Italians love explaining them.",
        ],
        examples: [
          { es: "Che cosa vuol dire questo gesto?", en: "What does this gesture mean?" },
          { es: "Me lo fai vedere?", en: "Will you show me?" },
          { es: "Si fa così.", en: "You do it like this." },
          { es: "Mia nonna lo faceva sempre.", en: "My grandmother always used to do it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What does this gesture mean?", answer: "Che cosa vuol dire questo gesto?", altAnswers: ["Cosa vuol dire questo gesto?", "Che cosa significa questo gesto?", "Cosa significa questo gesto?", "Che vuol dire questo gesto?"], explanation: "\"Voler dire\" = to mean." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You do it] like this.", sentence: "___ così.", answer: "Si fa", explanation: "\"Si fa\" = one does it." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm starving.", answer: "Ho una fame da lupi.", altAnswers: ["Ho una fame da lupo.", "Muoio di fame.", "Ho tanta fame."], explanation: "\"Una fame da lupi\" = a wolf's hunger." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It costs a fortune.", answer: "Costa un sacco di soldi.", altAnswers: ["Costa una fortuna.", "Costa un occhio della testa."], explanation: "\"Un sacco di\" = loads of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call you tonight!", answer: "Ti chiamo stasera!", altAnswers: ["Ti telefono stasera!", "Stasera ti chiamo!"], explanation: "Present for a near future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you crazy?", answer: "Sei matto?", altAnswers: ["Sei matta?", "Sei pazzo?", "Sei pazza?"], explanation: "Agree with the person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's a chatterbox.", answer: "È un chiacchierone.", altAnswers: ["Lui è un chiacchierone.", "Parla troppo."], explanation: "\"Chiacchierare\" = to chat." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This tiramisù is [so good]!", sentence: "___ questo tiramisù!", answer: "Che buono", explanation: "\"Che\" + adjective = how..., so..." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Watch out]! That guy is sly.", sentence: "___! Quello è furbo.", answer: "Occhio", altAnswers: ["Attento", "Attenta", "Attenzione"], explanation: "\"Occhio!\" with the eyelid gesture." },
      { type: "word-order", prompt: "Put the words in order to say: Will you show me?", words: ["Me", "lo", "fai", "vedere?"], translation: "Will you show me?", explanation: "\"Me lo\": two pronouns before \"fai\"." },
      {
        type: "matching",
        instructions: "Match the gesture's words to their meaning.",
        pairs: [
          { left: "Buono!", right: "Tasty!" },
          { left: "Occhio!", right: "Watch out!" },
          { left: "Così così", right: "So-so" },
          { left: "Ti chiamo", right: "I'll call you" },
          { left: "Perfetto", right: "Exactly" },
        ],
        explanation: "Five gestures, five phrases.",
      },
      { type: "dictation", audio: "Occhio al portafoglio!", explanation: "\"Occhio\": double c." },
      { type: "speak", text: "Che buono! Ho una fame da lupi.", prompt: "Say it in Italian: So good! I'm starving.", tip: "Twist your finger into your cheek as you say \"buono\".", explanation: "Gesture and words together." },
    ],
  },
  {
    slug: "culture-greetings-body",
    level: "IT-Culture",
    number: 3,
    title: "Greetings and Kisses",
    summary: "Know when to kiss, when to shake hands and how close to stand, from first meetings to old friends.",
    duration: "15 min",
    sections: [
      {
        heading: "Due baci",
        body: [
          "Friends and family greet with \"due baci\", a light kiss on each cheek, usually cheek touching cheek with a kissing sound rather than lips on skin. Women do it with women and men; in much of Italy, and especially in the South, male friends and relatives kiss too. There's no fixed rule about which side first: follow the other person and don't hesitate.",
          "You also kiss when you leave. Arriving at a dinner of ten people means twenty kisses, and so does leaving.",
        ],
        examples: [
          { es: "Ci salutiamo con due baci.", en: "We greet each other with two kisses." },
          { es: "Ciao, bella! Come stai?", en: "Hi, gorgeous! How are you?" },
          { es: "Anche gli uomini si danno i baci.", en: "Men kiss each other on the cheek too." },
          { es: "Prima di andare via saluta tutti.", en: "Before leaving, say goodbye to everyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We greet each other with two kisses.", answer: "Ci salutiamo con due baci.", altAnswers: ["Noi ci salutiamo con due baci."], explanation: "\"Salutarsi\" = to greet each other." },
          { type: "multiple-choice", question: "Which cheek should you kiss first?", options: ["There's no fixed rule: follow the other person.", "Always the left.", "Always the right.", "Only one kiss, on the forehead."], correctIndex: 0, explanation: "Practice varies; just follow their lead." },
        ],
      },
      {
        heading: "La stretta di mano",
        body: [
          "A first meeting, a work situation or an older person you don't know calls for a handshake, \"una stretta di mano\": firm, brief, with eye contact and \"Piacere\". In offices colleagues shake hands, and you shake hands with everyone again when you leave.",
          "Kisses arrive with friendship. Among young people, friends of friends often kiss at once; in a business meeting, never at first.",
        ],
        examples: [
          { es: "Piacere, Giulia.", en: "Nice to meet you, I'm Giulia." },
          { es: "Ci siamo stretti la mano.", en: "We shook hands." },
          { es: "Al lavoro ci diamo la mano.", en: "At work we shake hands." },
          { es: "Una stretta di mano decisa.", en: "A firm handshake." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At work we shake hands.", answer: "Al lavoro ci diamo la mano.", altAnswers: ["Al lavoro ci stringiamo la mano.", "Sul lavoro ci diamo la mano."], explanation: "\"Darsi la mano\" = to shake hands." },
          { type: "listen-choose", audio: "Piacere, Giulia.", question: "When would you say this?", options: ["meeting someone for the first time", "saying goodbye forever", "thanking someone for a gift", "ordering at a bar"], correctIndex: 0, explanation: "\"Piacere\" = nice to meet you." },
        ],
      },
      {
        heading: "Close and touching",
        body: [
          "Italians stand closer than Americans or northern Europeans and touch more: a hand on the arm, a pat on the shoulder, linking arms on a walk. It signals warmth, not invasion. Stepping back may look cold.",
          "Hugs, \"gli abbracci\", are for close friends and family. Eye contact is direct and long; looking away while someone talks can seem rude or shifty.",
        ],
        examples: [
          { es: "Mi ha dato una pacca sulla spalla.", en: "He gave me a pat on the shoulder." },
          { es: "Un abbraccio forte!", en: "A big hug!" },
          { es: "Guardami negli occhi.", en: "Look me in the eye." },
          { es: "Gli italiani stanno più vicini.", en: "Italians stand closer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A big hug!", answer: "Un abbraccio forte!", altAnswers: ["Un forte abbraccio!", "Un abbraccione!"], explanation: "Also the standard close of a friendly email." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He gave me [a pat] on the shoulder.", sentence: "Mi ha dato ___ sulla spalla.", answer: "una pacca", explanation: "\"Una pacca\" = a pat; double c." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nice to meet you, I'm Marco.", answer: "Piacere, Marco.", altAnswers: ["Piacere, sono Marco.", "Piacere, mi chiamo Marco."], explanation: "\"Piacere\" + your name." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We shook hands.", answer: "Ci siamo stretti la mano.", altAnswers: ["Ci siamo strette la mano.", "Ci siamo dati la mano.", "Ci siamo date la mano."], explanation: "Reflexive passato prossimo with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Look me in the eye.", answer: "Guardami negli occhi.", altAnswers: ["Mi guardi negli occhi."], explanation: "\"Guarda\" + \"mi\"; \"negli occhi\" = in the eyes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Men kiss each other on the cheek too.", answer: "Anche gli uomini si danno i baci.", altAnswers: ["Anche gli uomini si baciano sulle guance.", "Anche gli uomini si danno due baci."], explanation: "\"L'uomo\" → \"gli uomini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Before leaving, say goodbye to everyone.", answer: "Prima di andare via saluta tutti.", altAnswers: ["Prima di andartene saluta tutti.", "Prima di uscire saluta tutti."], explanation: "\"Prima di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We greet each other [with two kisses].", sentence: "Ci salutiamo ___.", answer: "con due baci", explanation: "\"Il bacio\" → \"i baci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Italians [stand closer].", sentence: "Gli italiani ___.", answer: "stanno più vicini", explanation: "\"Stare vicino\" = to stand close." },
      { type: "word-order", prompt: "Put the words in order to say: In the South male friends kiss each other.", words: ["Al", "Sud", "gli", "amici", "si", "baciano."], translation: "In the South male friends kiss each other.", explanation: "\"Baciarsi\" = to kiss each other." },
      { type: "multiple-choice", question: "You meet your Italian colleague's boss for the first time. What do you do?", options: ["Shake hands and say \"Piacere\".", "Give two kisses.", "Hug him.", "Wave from a distance."], correctIndex: 0, explanation: "A handshake for first and work meetings." },
      { type: "dictation", audio: "Ci salutiamo con due baci.", explanation: "\"Baci\": one c." },
      { type: "speak", text: "Piacere di conoscerla, dottor Rossi.", prompt: "Say it in Italian: Pleased to meet you, Dr. Rossi.", tip: "Co-NO-scer-la: the la is the formal you.", explanation: "Formal greeting with a handshake." },
    ],
  },
  {
    slug: "culture-gestures-dont",
    level: "IT-Culture",
    number: 4,
    title: "Gestures to Avoid",
    summary: "Recognize the rude gestures, the superstitious ones, and the innocent habits that can be misunderstood in Italy.",
    duration: "15 min",
    sections: [
      {
        heading: "Rude gestures",
        body: [
          "Some gestures are insults. \"Il gesto dell'ombrello\", one forearm raised and the other hand slapped onto its elbow, is a crude go to hell. Flicking the back of the fingers out from under the chin means \"non me ne importa niente\", I couldn't care less, and is dismissive. The middle finger works as everywhere.",
          "\"Le corna\", the index and little fingers held up, pointed at someone means their partner is cheating on them, a serious insult. Avoid it in photos too, even as a rock-concert joke.",
        ],
        examples: [
          { es: "Quel gesto è molto offensivo.", en: "That gesture is very offensive." },
          { es: "Non me ne importa niente.", en: "I couldn't care less." },
          { es: "Non fare quel gesto!", en: "Don't make that gesture!" },
          { es: "Si è offeso.", en: "He took offense." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't make that gesture!", answer: "Non fare quel gesto!", altAnswers: ["Non faccia quel gesto!", "Non fate quel gesto!"], explanation: "\"Quel\" before a consonant: \"quel gesto\"." },
          { type: "multiple-choice", question: "Why should you avoid pointing \"le corna\" at someone?", options: ["It suggests their partner is cheating.", "It means you love them.", "It's a sign of victory.", "It means you're hungry."], correctIndex: 0, explanation: "\"Cornuto\" = cuckold, an insult." },
        ],
      },
      {
        heading: "Superstitions",
        body: [
          "The same horns, pointed down, ward off bad luck: \"fare le corna\" or \"facciamo le corna\" when someone mentions a danger. Italians touch iron, not wood: \"tocca ferro!\". A red horn-shaped charm, \"il cornetto\" or \"cornicello\", hangs in Neapolitan cars and shops.",
          "Black cats crossing the road, spilled oil and the number 17 are unlucky; Friday the 17th, not the 13th, is the bad day. Many people never put a hat on a bed. Before an exam or an interview, Italians rarely say \"buona fortuna\": they say \"in bocca al lupo\", and the traditional answer is \"crepi!\".",
        ],
        examples: [
          { es: "Tocca ferro!", en: "Knock on wood!" },
          { es: "In bocca al lupo! Crepi!", en: "Good luck! Thanks!" },
          { es: "Venerdì 17 porta sfortuna.", en: "Friday the 17th brings bad luck." },
          { es: "Facciamo le corna!", en: "Let's knock on wood!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Friday the 17th brings bad luck.", answer: "Venerdì 17 porta sfortuna.", altAnswers: ["Venerdì diciassette porta sfortuna.", "Il venerdì 17 porta sfortuna.", "Venerdì 17 porta male."], explanation: "\"La sfortuna\" = bad luck." },
          { type: "listen-choose", audio: "In bocca al lupo!", question: "What's the right reply?", options: ["Crepi!", "Grazie mille!", "Anche a te!", "Buona fortuna!"], correctIndex: 0, explanation: "\"In bocca al lupo\" (into the wolf's mouth) is answered \"Crepi!\" (may it die)." },
        ],
      },
      {
        heading: "Innocent but confusing",
        body: [
          "Italians count on their fingers starting from the thumb: thumb is one, thumb and index are two. Hold up your index and middle finger to order two coffees and the barista may read three. Italians usually call people over with the palm down, fingers scooping toward them; a palm-up curled finger is understood but can feel brusque or cheeky.",
          "A thumbs-up is fine, and so is the OK circle. When in doubt, use words.",
        ],
        examples: [
          { es: "Si conta partendo dal pollice.", en: "You count starting from the thumb." },
          { es: "Due caffè, per favore.", en: "Two espressos, please." },
          { es: "Vieni qui!", en: "Come here!" },
          { es: "Ho capito male il gesto.", en: "I misunderstood the gesture." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I misunderstood the gesture.", answer: "Ho capito male il gesto.", altAnswers: ["Non ho capito il gesto.", "Ho frainteso il gesto."], explanation: "\"Capire male\" = to misunderstand." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You count [starting from the thumb].", sentence: "Si conta ___.", answer: "partendo dal pollice", altAnswers: ["dal pollice"], explanation: "\"Il pollice\" = thumb; \"partendo da\" = starting from." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That gesture is very offensive.", answer: "Quel gesto è molto offensivo.", altAnswers: ["Quel gesto è offensivo."], explanation: "\"Offensivo\" = offensive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Knock on wood!", answer: "Tocca ferro!", altAnswers: ["Tocchiamo ferro!", "Facciamo le corna!"], explanation: "Italians touch iron, not wood: \"tocca ferro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come here!", answer: "Vieni qui!", altAnswers: ["Vieni qua!", "Venga qui!", "Venga qua!"], explanation: "\"Qui\" and \"qua\" have no accent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He took offense.", answer: "Si è offeso.", altAnswers: ["Lui si è offeso.", "Si è arrabbiato."], explanation: "\"Offendersi\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I couldn't care less.", answer: "Non me ne importa niente.", altAnswers: ["Non me ne importa nulla.", "Non mi importa niente."], explanation: "The words behind the chin flick." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Good luck! [Thanks!]", sentence: "In bocca al lupo! ___!", answer: "Crepi", altAnswers: ["Crepi il lupo"], explanation: "The traditional answer to \"in bocca al lupo\" is \"crepi\" (may the wolf die), not \"grazie\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A black cat [brings bad luck].", sentence: "Un gatto nero ___.", answer: "porta sfortuna", altAnswers: ["porta male", "porta iella"], explanation: "\"Portare sfortuna\" = to bring bad luck." },
      { type: "word-order", prompt: "Put the words in order to say: Never put a hat on the bed.", words: ["Non", "mettere", "mai", "il", "cappello", "sul", "letto."], translation: "Never put a hat on the bed.", explanation: "\"Non... mai\" around the infinitive." },
      { type: "multiple-choice", question: "You want two coffees and show your thumb and index finger. What does the barista understand?", options: ["two", "three", "one", "OK"], correctIndex: 0, explanation: "Italians count from the thumb, so thumb + index = two." },
      { type: "dictation", audio: "In bocca al lupo! Crepi!", explanation: "\"Lupo\" = wolf." },
      { type: "speak", text: "Domani ho un esame. In bocca al lupo! Crepi!", prompt: "Say it in Italian: I have an exam tomorrow. Good luck! Thanks!", tip: "CRE-pi: stress the first syllable.", explanation: "The ritual good-luck exchange." },
    ],
  },
  {
    slug: "culture-tone-of-voice",
    level: "IT-Culture",
    number: 5,
    title: "Tone and Volume",
    summary: "Understand how loudly and how fast Italians talk, why overlapping isn't rude, and the little words that carry the tone: eh, uffa, magari, figurati.",
    duration: "15 min",
    sections: [
      {
        heading: "Loud is not angry",
        body: [
          "To foreign ears a group of Italians often sounds like an argument. Usually it isn't: Italians speak louder, with wider intonation, and show interest by reacting, not by staying quiet. A raised voice can mean enthusiasm, not anger.",
          "Overlapping, \"parlarsi sopra\", is normal in informal talk: jumping in shows you're following. Waiting politely for a long pause may mean you never speak. In formal settings, meetings and offices, people take turns more.",
        ],
        examples: [
          { es: "Non stiamo litigando, stiamo parlando!", en: "We're not arguing, we're talking!" },
          { es: "Parliamo tutti insieme.", en: "We all talk at the same time." },
          { es: "Scusa se ti interrompo...", en: "Sorry to interrupt you..." },
          { es: "Abbassa la voce, il bambino dorme.", en: "Lower your voice, the baby's asleep." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're not arguing, we're talking!", answer: "Non stiamo litigando, stiamo parlando!", altAnswers: ["Non litighiamo, parliamo!"], explanation: "\"Stare\" + gerund for what's happening right now." },
          { type: "multiple-choice", question: "In a lively dinner conversation, an Italian jumps in before you finish. What does it usually signal?", options: ["Interest and involvement", "Contempt", "That they want you to leave", "That they didn't hear you"], correctIndex: 0, explanation: "Overlap shows engagement in informal talk." },
        ],
      },
      {
        heading: "Words that carry the tone",
        body: [
          "Short interjections do a lot. \"Eh!\" can mean well, yes, or you see?; \"Eh?\" asks what?. \"Uffa!\" is a child's and adult's sigh of annoyance. \"Magari!\" means if only!: \"Vai in vacanza?\" \"Magari!\". \"Figurati!\" (\"Si figuri!\" with Lei) answers thanks: don't mention it.",
          "\"Insomma\" means so-so or in short, and \"Allora...\" opens almost every sentence: so, well then. \"Ecco!\" means there you go!, that's it!.",
        ],
        examples: [
          { es: "Uffa, sempre la stessa storia!", en: "Ugh, always the same story!" },
          { es: "Vai in vacanza? Magari!", en: "Are you going on vacation? If only!" },
          { es: "Grazie mille! Figurati!", en: "Thanks a lot! Don't mention it!" },
          { es: "Com'era il film? Insomma...", en: "How was the movie? So-so..." },
          { es: "Ecco, hai visto?", en: "There you go, you see?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thanks a lot! Don't mention it!", answer: "Grazie mille! Figurati!", altAnswers: ["Grazie mille! Si figuri!", "Grazie mille! Di niente!", "Grazie mille! Prego!"], explanation: "\"Figurati\" with tu, \"si figuri\" with Lei." },
          { type: "listen-choose", audio: "Vai in vacanza? Magari!", question: "Is the person going on vacation?", options: ["No, but they wish they were.", "Yes, tomorrow.", "Yes, they just got back.", "They don't like vacations."], correctIndex: 0, explanation: "\"Magari!\" = if only!" },
        ],
      },
      {
        heading: "Melody",
        body: [
          "Italian questions often have no special word order: \"Vieni stasera?\" is a question only because the voice rises. Exclamations rise and fall widely, and the hands follow the melody.",
          "If you speak Italian flatly, you may sound bored or cold. Exaggerate a little: stretch \"Ma daaai!\", lift the end of questions, and let your hands move. Italians will hear you as warmer.",
        ],
        examples: [
          { es: "Vieni stasera?", en: "Are you coming tonight?" },
          { es: "Vieni stasera.", en: "You're coming tonight." },
          { es: "Che bello!", en: "How lovely!" },
          { es: "Ma sei sicuro?", en: "Are you sure?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming tonight?", answer: "Vieni stasera?", altAnswers: ["Stasera vieni?", "Viene stasera?", "Venite stasera?"], explanation: "Same words as the statement; the voice rises." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How lovely!", answer: "Che bello!", altAnswers: ["Che bella!", "Bellissimo!", "Com'è bello!"], explanation: "\"Che\" + adjective." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lower your voice, the baby's asleep.", answer: "Abbassa la voce, il bambino dorme.", altAnswers: ["Abbassa la voce, la bambina dorme.", "Parla piano, il bambino dorme."], explanation: "\"Abbassare\" = to lower." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry to interrupt you.", answer: "Scusa se ti interrompo.", altAnswers: ["Scusi se la interrompo.", "Scusa se t'interrompo."], explanation: "\"Interrompere\" = to interrupt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ugh, always the same story!", answer: "Uffa, sempre la stessa storia!", explanation: "\"Uffa\" = ugh, annoyed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We all talk at the same time.", answer: "Parliamo tutti insieme.", altAnswers: ["Parliamo tutti nello stesso momento.", "Parliamo tutti contemporaneamente."], explanation: "\"Tutti insieme\" = all together." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you sure?", answer: "Sei sicuro?", altAnswers: ["Ma sei sicuro?", "Sei sicura?", "Ma sei sicura?", "È sicuro?", "È sicura?"], explanation: "The voice makes it a question." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Are you going on vacation? [If only]!", sentence: "Vai in vacanza? ___!", answer: "Magari", explanation: "\"Magari\" = if only; also maybe." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "How was the movie? [So-so]...", sentence: "Com'era il film? ___...", answer: "Insomma", altAnswers: ["Così così"], explanation: "\"Insomma\" alone = not great." },
      { type: "word-order", prompt: "Put the words in order to say: Italians speak louder.", words: ["Gli", "italiani", "parlano", "a", "voce", "più", "alta."], translation: "Italians speak louder.", explanation: "\"A voce alta\" = loudly." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "Uffa!", right: "Ugh!" },
          { left: "Magari!", right: "If only!" },
          { left: "Figurati!", right: "Don't mention it!" },
          { left: "Ecco!", right: "There you go!" },
          { left: "Boh!", right: "No idea!" },
        ],
        explanation: "Interjections that carry tone.",
      },
      { type: "dictation", audio: "Non stiamo litigando, stiamo parlando!", explanation: "\"Litigare\" = to argue." },
      { type: "speak", text: "Allora, com'è andata? Dai, racconta!", prompt: "Say it in Italian: So, how did it go? Come on, tell me!", tip: "Let your voice rise on \"andata\" and jump on \"racconta\".", explanation: "\"Allora\" opens, \"dai\" pushes." },
    ],
  },
  {
    slug: "culture-regional-gestures",
    level: "IT-Culture",
    number: 6,
    title: "Regional Gestures",
    summary: "See how gestures change across Italy: the gesture-rich South, the Neapolitan repertoire and the southern no with a raised chin.",
    duration: "15 min",
    sections: [
      {
        heading: "Napoli, capitale del gesto",
        body: [
          "Naples is famous for the richest gestural language in Italy. Neapolitans can hold whole exchanges across a street without a word: a question about the time, a comment on a passer-by, an invitation to coffee. In 1832 a Neapolitan priest, Andrea de Jorio, wrote a whole book comparing the gestures of his city with those painted on ancient Greek vases and in Pompeii.",
          "The North is often described as more reserved: fewer gestures, smaller movements. It's a stereotype with some truth, but every Italian uses the basic repertoire.",
        ],
        examples: [
          { es: "I napoletani parlano anche senza parole.", en: "Neapolitans talk even without words." },
          { es: "Mi ha chiesto l'ora con un gesto.", en: "He asked me the time with a gesture." },
          { es: "Al Nord si gesticola di meno.", en: "In the North people gesture less." },
          { es: "Questo libro è del 1832.", en: "This book dates from 1832." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the North people gesture less.", answer: "Al Nord si gesticola di meno.", altAnswers: ["Al Nord si gesticola meno.", "Nel Nord si gesticola di meno.", "Al Nord gesticolano di meno."], explanation: "\"Gesticolare\" = to gesture; \"di meno\" = less." },
          { type: "multiple-choice", question: "What did Andrea de Jorio compare in his 1832 book?", options: ["Neapolitan gestures and ancient art", "Northern and southern accents", "Italian and French cooking", "Opera and folk songs"], correctIndex: 0, explanation: "He matched living gestures to Greek vases and Pompeian paintings." },
        ],
      },
      {
        heading: "Il no del Sud",
        body: [
          "In parts of the South, especially Sicily, Calabria and around Naples, a quick upward jerk of the chin, often with raised eyebrows and a small click of the tongue, means no. It probably goes back to the Greek settlers of southern Italy; people in Greece do the same.",
          "Northerners and foreigners can mistake it for a nod. If a Sicilian barman raises his chin when you ask for something, the answer is probably no.",
        ],
        examples: [
          { es: "Ha alzato il mento: vuol dire no.", en: "He raised his chin: it means no." },
          { es: "Al Sud si dice no anche così.", en: "In the South you also say no like this." },
          { es: "Ho pensato che dicesse sì.", en: "I thought he was saying yes." },
          { es: "È un gesto di origine greca.", en: "It's a gesture of Greek origin." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He raised his chin: it means no.", answer: "Ha alzato il mento: vuol dire no.", altAnswers: ["Ha alzato il mento: significa no.", "Lui ha alzato il mento: vuol dire no."], explanation: "\"Il mento\" = chin." },
          { type: "listen-choose", audio: "È un gesto di origine greca.", question: "What does it mean?", options: ["It's a gesture of Greek origin.", "It's a very old gesture.", "It's a rude gesture.", "It's a gesture from the North."], correctIndex: 0, explanation: "\"Di origine greca\" = of Greek origin." },
        ],
      },
      {
        heading: "Local signs",
        body: [
          "In Naples the red horn charm, \"il corno\", is everywhere, and gestures against bad luck are frequent. Romans use a hand flicked from the wrist with \"ammazza!\", wow!. Every area has its own small codes, and Italians from different regions sometimes misread each other.",
          "As a learner, master the national ones first, and ask about local ones: \"Qui che cosa vuol dire questo?\".",
        ],
        examples: [
          { es: "A Napoli il corno porta fortuna.", en: "In Naples the horn brings good luck." },
          { es: "Ammazza, che caldo!", en: "Wow, it's so hot!" },
          { es: "Qui che cosa vuol dire?", en: "What does it mean here?" },
          { es: "Ogni regione ha i suoi gesti.", en: "Every region has its own gestures." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every region has its own gestures.", answer: "Ogni regione ha i suoi gesti.", altAnswers: ["Ogni regione ha i propri gesti."], explanation: "\"Ogni\" + singular, \"i suoi\" for the plural noun." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Naples the horn [brings good luck].", sentence: "A Napoli il corno ___.", answer: "porta fortuna", explanation: "\"Portare fortuna\" = to bring luck." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Neapolitans talk even without words.", answer: "I napoletani parlano anche senza parole.", altAnswers: ["I napoletani parlano persino senza parole."], explanation: "\"Anche\" = even, also." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me the time with a gesture.", answer: "Mi ha chiesto l'ora con un gesto.", altAnswers: ["Lui mi ha chiesto l'ora con un gesto."], explanation: "\"Chiedere l'ora\" = to ask the time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought he was saying yes.", answer: "Ho pensato che dicesse sì.", altAnswers: ["Pensavo che dicesse sì.", "Credevo che dicesse sì."], explanation: "\"Pensare che\" + imperfect subjunctive in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wow, it's so hot!", answer: "Ammazza, che caldo!", altAnswers: ["Accidenti, che caldo!", "Mamma mia, che caldo!"], explanation: "\"Ammazza\" is Roman for wow." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What does it mean here?", answer: "Qui che cosa vuol dire?", altAnswers: ["Qui cosa vuol dire?", "Che cosa vuol dire qui?", "Cosa vuol dire qui?", "Qui cosa significa?"], explanation: "\"Voler dire\" = to mean." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the South [you also say] no like this.", sentence: "Al Sud ___ no anche così.", answer: "si dice", explanation: "\"Si dice\" = one says." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He raised [his chin].", sentence: "Ha alzato ___.", answer: "il mento", explanation: "Body parts take the article, not a possessive." },
      { type: "word-order", prompt: "Put the words in order to say: Naples is the capital of gestures.", words: ["Napoli", "è", "la", "capitale", "del", "gesto."], translation: "Naples is the capital of gestures.", explanation: "\"Del gesto\" = of the gesture, in general." },
      { type: "multiple-choice", question: "A barman in Palermo raises his chin and clicks his tongue when you ask if there are arancine left. What does he mean?", options: ["No, there aren't any.", "Yes, plenty.", "Wait a moment.", "Pay first."], correctIndex: 0, explanation: "The southern chin-up no." },
      { type: "dictation", audio: "Ogni regione ha i suoi gesti.", explanation: "\"Gesti\": soft g." },
      { type: "speak", text: "Scusi, qui che cosa vuol dire questo gesto?", prompt: "Say it in Italian: Excuse me, what does this gesture mean here?", tip: "GE-sto: soft g, like the j in jet.", explanation: "A polite question to a local." },
    ],
  },
  {
    slug: "culture-gestures-history",
    level: "IT-Culture",
    number: 7,
    title: "A Brief History",
    summary: "Trace Italian gestures from the orators of ancient Rome to Neapolitan streets, an illustrated dictionary and the emoji age.",
    duration: "15 min",
    sections: [
      {
        heading: "Gli antichi romani",
        body: [
          "Romans trained their hands as well as their voices. In the first century AD the teacher of rhetoric Quintilian described, in his book on the education of an orator, how hands should move to persuade: which gestures suit an argument, a question or a farewell, and which look vulgar.",
          "Ancient paintings and statues show figures pointing, counting and greeting in ways still visible in Italian streets. Whether the line is continuous is debated, but the habit of speaking with the body is very old.",
        ],
        examples: [
          { es: "Gli oratori romani usavano molto le mani.", en: "Roman orators used their hands a lot." },
          { es: "Quintiliano ha scritto sui gesti.", en: "Quintilian wrote about gestures." },
          { es: "Le statue antiche fanno gli stessi gesti.", en: "Ancient statues make the same gestures." },
          { es: "È un'abitudine molto antica.", en: "It's a very old habit." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Roman orators used their hands a lot.", answer: "Gli oratori romani usavano molto le mani.", altAnswers: ["Gli oratori romani usavano tanto le mani."], explanation: "Imperfetto for a past habit." },
          { type: "multiple-choice", question: "Who described an orator's gestures in the first century AD?", options: ["Quintilian", "Dante", "Leonardo", "Garibaldi"], correctIndex: 0, explanation: "\"Quintiliano\", a Roman teacher of rhetoric." },
        ],
      },
      {
        heading: "Why so many gestures?",
        body: [
          "Scholars offer several explanations, none proven. Crowded, noisy cities favored signs that work at a distance. For centuries Italy was divided into states with different dialects, and foreign rulers came and went: gestures crossed language barriers. Theater, from the masked commedia dell'arte to Neapolitan street performers, made them an art.",
          "Whatever the cause, gestures traveled with emigrants: you can see them in Italian American neighborhoods a century later.",
        ],
        examples: [
          { es: "Nelle città affollate i gesti sono utili.", en: "In crowded cities gestures are useful." },
          { es: "L'Italia era divisa in tanti Stati.", en: "Italy was divided into many states." },
          { es: "I gesti superano i dialetti.", en: "Gestures get past dialects." },
          { es: "Gli emigrati hanno portato i gesti in America.", en: "Emigrants took the gestures to America." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy was divided into many states.", answer: "L'Italia era divisa in tanti Stati.", altAnswers: ["L'Italia era divisa in molti Stati.", "L'Italia era divisa in tanti stati.", "L'Italia era divisa in molti stati."], explanation: "Imperfetto \"era divisa\" describes a past situation." },
          { type: "listen-choose", audio: "Gli emigrati hanno portato i gesti in America.", question: "What does it mean?", options: ["Emigrants took the gestures to America.", "Americans brought gestures to Italy.", "Emigrants forgot the gestures.", "Gestures came from America."], correctIndex: 0, explanation: "\"Hanno portato\" = took, brought." },
        ],
      },
      {
        heading: "From dictionary to emoji",
        body: [
          "In 1958 the designer Bruno Munari published an illustrated \"Supplemento al dizionario italiano\", a supplement to the Italian dictionary made entirely of gestures, with photos of hands and their meanings. Researchers since have counted well over a hundred common Italian gestures.",
          "Today the gestures live on screens too: the pinched-fingers emoji arrived in 2020 and Italians adopted it instantly. Television hosts, politicians and footballers still speak with their hands.",
        ],
        examples: [
          { es: "Munari ha fatto un dizionario dei gesti.", en: "Munari made a dictionary of gestures." },
          { es: "Ci sono più di cento gesti comuni.", en: "There are more than a hundred common gestures." },
          { es: "Ho mandato l'emoji della mano a borsa.", en: "I sent the pinched-fingers emoji." },
          { es: "Anche in TV parlano con le mani.", en: "On TV too they talk with their hands." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are more than a hundred common gestures.", answer: "Ci sono più di cento gesti comuni.", altAnswers: ["Esistono più di cento gesti comuni."], explanation: "\"Più di\" + number." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Munari made [a dictionary of gestures].", sentence: "Munari ha fatto ___.", answer: "un dizionario dei gesti", explanation: "\"Dei gesti\": \"di\" + \"i\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a very old habit.", answer: "È un'abitudine molto antica.", altAnswers: ["È un'abitudine antichissima.", "È un'abitudine molto vecchia."], explanation: "\"Abitudine\" is feminine: \"un'abitudine\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Quintilian wrote about gestures.", answer: "Quintiliano ha scritto sui gesti.", altAnswers: ["Quintiliano scrisse sui gesti.", "Quintiliano ha scritto dei gesti."], explanation: "\"Scrivere su\" = to write about." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In crowded cities gestures are useful.", answer: "Nelle città affollate i gesti sono utili.", explanation: "\"Città\" doesn't change in the plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I sent the pinched-fingers emoji.", answer: "Ho mandato l'emoji della mano a borsa.", altAnswers: ["Ho mandato l'emoji delle dita unite.", "Ho inviato l'emoji della mano a borsa."], explanation: "\"Mandare\" = to send." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On TV too they talk with their hands.", answer: "Anche in TV parlano con le mani.", altAnswers: ["Anche in televisione parlano con le mani.", "Pure in TV parlano con le mani."], explanation: "\"In TV\" = on TV." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Gestures [get past] dialects.", sentence: "I gesti ___ i dialetti.", answer: "superano", explanation: "\"Superare\" = to overcome, get past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Ancient statues make [the same] gestures.", sentence: "Le statue antiche fanno ___ gesti.", answer: "gli stessi", explanation: "\"Lo stesso\" → \"gli stessi\"." },
      { type: "word-order", prompt: "Put the words in order to say: Theater made gestures an art.", words: ["Il", "teatro", "ha", "fatto", "dei", "gesti", "un'arte."], translation: "Theater made gestures an art.", explanation: "\"Fare di qualcosa un'arte\" = to make an art of something." },
      { type: "multiple-choice", question: "When did the pinched-fingers emoji appear?", options: ["2020", "1958", "1832", "2001"], correctIndex: 0, explanation: "1958 is Munari's book, 1832 de Jorio's." },
      { type: "dictation", audio: "È un'abitudine molto antica.", explanation: "\"Un'abitudine\": apostrophe before a feminine noun." },
      { type: "speak", text: "I gesti italiani hanno una storia lunghissima, dai romani a oggi.", prompt: "Say it in Italian: Italian gestures have a very long history, from the Romans to today.", tip: "Lun-GHIS-si-ma: the h keeps the g hard.", explanation: "\"Da... a...\" = from... to..." },
    ],
  },
  {
    slug: "culture-dialogue-without-words",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: Without Words",
    summary: "Watch a silent scene in a Naples café and describe in Italian what each gesture says.",
    duration: "15 min",
    sections: [
      {
        heading: "La scena",
        body: [
          "You're sitting in a café in Naples with your friend Chiara, watching the street. A waiter, Gennaro, sees a regular across the road. He lifts an imaginary cup to his lips: \"un caffè?\". The man nods, then holds up his thumb and index finger: two coffees.",
          "Chiara explains: \"Ha chiesto se voleva un caffè, e lui ha detto sì, due.\" You describe gestures with \"fare un gesto\", \"indicare\" (to point at), \"alzare\" (to raise) and \"vuol dire\".",
        ],
        examples: [
          { es: "Il cameriere fa il gesto della tazzina.", en: "The waiter mimes a coffee cup." },
          { es: "Ha chiesto se voleva un caffè.", en: "He asked if he wanted a coffee." },
          { es: "Ha alzato due dita: pollice e indice.", en: "He held up two fingers: thumb and index." },
          { es: "Indica il bar dall'altra parte della strada.", en: "He points to the bar across the street." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked if he wanted a coffee.", answer: "Ha chiesto se voleva un caffè.", altAnswers: ["Gli ha chiesto se voleva un caffè.", "Ha chiesto se volesse un caffè."], explanation: "Reported question: \"se\" + imperfetto." },
          { type: "multiple-choice", question: "The man shows his thumb and index finger. How many coffees?", options: ["two", "three", "one", "none"], correctIndex: 0, explanation: "Italians count from the thumb." },
        ],
      },
      {
        heading: "Il traffico",
        body: [
          "A scooter stops in the middle of the street. The driver behind spreads his arms and shakes his pinched fingers: \"Ma che fai?!\". The scooter rider points at a delivery van blocking the way and shrugs: \"Che ci posso fare?\". The first driver lifts both palms to the sky: \"Mamma mia!\", and then waves: \"Vabbè, vai\".",
          "Chiara laughs: \"Hanno litigato e fatto pace in dieci secondi, senza dire una parola.\"",
        ],
        examples: [
          { es: "Allarga le braccia.", en: "He spreads his arms." },
          { es: "Che ci posso fare?", en: "What can I do about it?" },
          { es: "Vabbè, vai.", en: "OK, fine, go." },
          { es: "Hanno fatto pace in dieci secondi.", en: "They made up in ten seconds." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What can I do about it?", answer: "Che ci posso fare?", altAnswers: ["Cosa ci posso fare?", "Che posso farci?", "Cosa posso farci?"], explanation: "\"Ci\" = about it." },
          { type: "listen-choose", audio: "Hanno fatto pace in dieci secondi.", question: "What happened?", options: ["They made up in ten seconds.", "They argued for ten minutes.", "They left in ten seconds.", "They called the police."], correctIndex: 0, explanation: "\"Fare pace\" = to make up." },
        ],
      },
      {
        heading: "Il saluto",
        body: [
          "Gennaro brings the coffees across the road. The regular rubs his thumb and fingers together, \"quanto?\", and Gennaro waves the question away with a flat hand: \"Lascia stare, offro io\". The man puts his hand on his heart: thank you.",
          "You: \"Ho capito tutto senza sentire niente!\" Chiara: \"Benvenuto a Napoli!\"",
        ],
        examples: [
          { es: "Si mette la mano sul cuore.", en: "He puts his hand on his heart." },
          { es: "Lascia stare, offro io.", en: "Forget it, it's on me." },
          { es: "Ho capito tutto senza sentire niente!", en: "I understood everything without hearing anything!" },
          { es: "Benvenuto a Napoli!", en: "Welcome to Naples!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Forget it, it's on me.", answer: "Lascia stare, offro io.", altAnswers: ["Lascia perdere, offro io.", "Lasci stare, offro io.", "Lasci perdere, offro io."], explanation: "\"Lascia stare\" = forget it, leave it." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I understood everything [without hearing anything]!", sentence: "Ho capito tutto ___!", answer: "senza sentire niente", altAnswers: ["senza sentire nulla"], explanation: "\"Senza\" + infinitive; \"niente\" needs no \"non\" here." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He spreads his arms.", answer: "Allarga le braccia.", altAnswers: ["Lui allarga le braccia.", "Apre le braccia."], explanation: "\"Il braccio\" → \"le braccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He points to the bar.", answer: "Indica il bar.", altAnswers: ["Lui indica il bar."], explanation: "\"Indicare\" = to point at." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Welcome to Naples!", answer: "Benvenuto a Napoli!", altAnswers: ["Benvenuta a Napoli!", "Benvenuti a Napoli!"], explanation: "\"Benvenuto\" agrees with the guest." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They argued and made up.", answer: "Hanno litigato e hanno fatto pace.", altAnswers: ["Hanno litigato e fatto pace."], explanation: "\"Litigare\" and \"fare pace\" both take \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He puts his hand on his heart.", answer: "Si mette la mano sul cuore.", altAnswers: ["Mette la mano sul cuore."], explanation: "Reflexive \"si\" instead of a possessive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The waiter [mimes] a coffee cup.", sentence: "Il cameriere ___ della tazzina.", answer: "fa il gesto", explanation: "\"Fare il gesto di\" = to mime." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[OK, fine], go.", sentence: "___, vai.", answer: "Vabbè", altAnswers: ["Va bene", "Va be'"], explanation: "\"Vabbè\" = \"va bene\" said with resignation." },
      { type: "word-order", prompt: "Put the words in order to say: He held up two fingers.", words: ["Ha", "alzato", "due", "dita."], translation: "He held up two fingers.", explanation: "\"Il dito\" → \"le dita\"." },
      { type: "multiple-choice", question: "Someone rubs thumb and fingers together and looks at you questioningly. What are they asking?", options: ["How much is it?", "What time is it?", "Is it tasty?", "Where are you going?"], correctIndex: 0, explanation: "The money gesture: \"Quanto costa?\"." },
      { type: "dictation", audio: "Che ci posso fare?", explanation: "\"Ci\" = about it." },
      { type: "speak", text: "Ha fatto il gesto della tazzina: vuol dire che ti offre un caffè.", prompt: "Say it in Italian: He mimed a coffee cup: it means he's offering you a coffee.", tip: "Taz-ZI-na: z = ts, held double.", explanation: "Describe a gesture and its meaning." },
    ],
  },
];

export const IT_CULTURE_U05_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a message to an Italian friend about a funny moment when gestures or body language confused you (in Italy or with Italians at home). Describe what happened, the gesture or greeting, what you thought it meant and what it really meant, and finish with one tip for other foreigners.",
  minWords: 70,
  maxWords: 150,
  rubric: [
    "Tells the story in the past with passato prossimo and imperfetto (ha fatto, pensavo, voleva dire)",
    "Describes a gesture precisely (ha alzato il mento, ha unito le dita, mi ha dato due baci)",
    "Explains the real meaning accurately, with the words that go with it (Ma che vuoi?, Occhio!, Boh)",
    "Gives a tip with an imperative or si impersonale (non fare..., si conta dal pollice)",
  ],
  modelAnswer: "Ciao Matteo! Ti racconto una cosa buffa. Ieri ero in un bar a Palermo e ho chiesto al barista se c'erano ancora arancine. Lui ha alzato il mento e ha fatto un piccolo rumore con la lingua. Io pensavo che volesse dire sì, così ho aspettato dieci minuti! Alla fine una signora mi ha spiegato che al Sud quel gesto vuol dire no. Che figuraccia! Poi, per ordinare due caffè, ho alzato l'indice e il medio e il barista me ne ha portati tre. Il mio consiglio per gli stranieri: in Italia si conta dal pollice, e se non capite un gesto, chiedete. A presto!",
  explanation: "\"Ha alzato il mento\" and \"ho alzato l'indice e il medio\" describe gestures precisely; \"pensavo che volesse dire sì\" and \"quel gesto vuol dire no\" contrast belief and meaning; the tip uses \"si conta\" and the imperative \"chiedete\". \"Che figuraccia!\" means how embarrassing.",
};
