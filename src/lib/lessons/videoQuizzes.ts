// Synced from cheneygross-afk/lengo:src/lib/lessons/videoQuizzes.ts by scripts/sync-content.mjs -- edit it there, not here.
// Comprehension quizzes ("Check your understanding") for the linked YouTube
// videos in lessonVideos.ts. A video with an entry here gets a small "Quiz"
// badge on its card; once the learner has opened the video, the card offers
// the quiz, which runs one question at a time with feedback after each.
// Videos without an entry look and behave exactly as before.
//
// HOW TO ADD A QUIZ -- only after watching the whole video. Never write a
// question from a video's title or thumbnail, and never guess what is said.
//
//   VIDEO_QUIZZES = {
//     "<videoId>": {               // the 11-character id in lessonVideos.ts
//       checkedBy: "<name>",       // who watched it and checked the answers
//       questions: [               // 4-6 questions; check-content allows 3-8
//         {
//           question: "<question>",
//           options: ["<option>", "<option>", "<option>"],  // 3 or 4, shown shuffled
//           answerIndex: 0,         // which option is right (0-based)
//           explanation: "<why, citing what is said>",
//           atSeconds: 95,          // optional: where the answer is (1:35)
//         },
//         {
//           // True/false: exactly ["True", "False"] (A1-A2) or
//           // ["Verdadero", "Falso"] (B1+), kept in that order.
//           question: "<a statement about the video>",
//   //           answerIndex: 1,
//           explanation: "<what is actually said>",
//           atSeconds: 210,
//         },
//       ],
//     },
//   };
//
// Aim for a mix: one or two gist questions (what is the video mostly
// about, what happens in the end), two or three detail questions (a
// number, a place, who did what) and one inference question (why someone
// feels or acts as they do, what they probably mean). Options should all
// be plausible to someone who didn't follow the video.
//
// Language follows the course rule, by the video's level (videoLevel()):
// questions, options and explanations are in English for A1 and A2 videos
// and in Spanish for B1 and above. Quoting a Spanish word inside an English
// question is fine ("What does Pablo mean by 'qué chévere'?"); every word
// is tap-to-hear in the quiz.
//
// `atSeconds` powers the "Rewatch at m:ss" link after each answer, which
// opens the video at that moment on YouTube.
//
// `npm run check-content` checks every key is a videoId in lessonVideos.ts,
// each quiz has 3-8 questions, each question has 3-4 options (or is a
// True/False pair in the quiz's language) and answerIndex points at one.
import {
  LESSON_VIDEOS,
  LEVEL_WATCH_VIDEOS,
  type LessonVideo,
} from "./lessonVideos";
import type { SpanishLevelPath } from "./levels";

export type VideoQuizQuestion = {
  question: string;
  /** 3-4 options (shown shuffled), or a True/False pair (kept in order). */
  options: string[];
  answerIndex: number;
  /** Why the answer is right, shown after the learner answers. */
  explanation: string;
  /** Where in the video the answer is, in seconds. */
  atSeconds?: number;
};

export type VideoQuiz = {
  questions: VideoQuizQuestion[];
  /** Who watched the video and checked the questions against it. */
  checkedBy?: string;
};

export const VIDEO_QUIZZES: Record<string, VideoQuiz> = {
  "3G5dIfIrQAE": {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "Michelle's trip to visit her sister",
          "Ten things Michelle has learned from living alone",
          "How to cook a good pizza",
          "Michelle's favourite TV shows",
        ],
        answerIndex: 1,
        explanation:
          "Early on Michelle says she lives alone, not with her parents or sister, and now knows 10 things about living alone.",
        atSeconds: 64,
      },
      {
        question: "Who does Michelle say she does NOT live with?",
        options: [
          "Her friends Luis and Ana",
          "Her grandparents",
          "Her parents or her sister",
          "Her cat",
        ],
        answerIndex: 2,
        explanation:
          "At the start she explains she doesn't live at home with her parents or her sister.",
        atSeconds: 57,
      },
      {
        question:
          "According to Michelle, if you cook and the food doesn't taste good, what happens?",
        options: [
          "You have to eat it anyway",
          "You order a pizza",
          "You throw it in the trash",
          "You ask your mom to cook",
        ],
        answerIndex: 0,
        explanation:
          "In point 3 she says you are the chef, and if the food doesn't taste good, you have to eat it.",
        atSeconds: 144,
      },
      {
        question:
          "When you live alone, what do you have to do if there is a spider?",
        options: [
          "Call your parents",
          "Catch it yourself",
          "Leave the house",
          "Turn up the music",
        ],
        answerIndex: 1,
        explanation:
          "In point 5 she says you are a superhero: if there is a spider, you have to catch it.",
        atSeconds: 220,
      },
      {
        question:
          "True or false: Michelle says that when you live alone, you are the king of the house.",
        options: ["True", "False"],
        answerIndex: 0,
        explanation:
          "Her last point, number 10, is that when you live alone you are 'el rey de la casa'.",
        atSeconds: 385,
      },
    ],
  },
  "Iup1-H1ryes": {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "How to order food in a Spanish restaurant",
          "Good and bad manners in Spain",
          "How to make friends in Spain",
          "Spanish table vocabulary",
        ],
        answerIndex: 1,
        explanation:
          "At the very start the speaker says he will talk about things that are good and bad manners ('buena y mala educación') in Spain.",
        atSeconds: 12,
      },
      {
        question: "In a restaurant, when can you start eating?",
        options: [
          "As soon as your food arrives",
          "After you pay the bill",
          "When everyone has their food",
          "After the waiter says so",
        ],
        answerIndex: 2,
        explanation:
          "Early on he says you must wait until everyone has food; eating without waiting for the others is bad manners.",
        atSeconds: 98,
      },
      {
        question: "What does the speaker say about leaving a tip in Spain?",
        options: [
          "You must always leave a big tip",
          "It's fine not to leave a tip",
          "Leaving a tip is bad manners",
          "You leave a tip only for very good service",
        ],
        answerIndex: 1,
        explanation:
          "In the middle he says you don't have to leave a tip; leaving 0% is fine and not bad manners.",
        atSeconds: 143,
      },
      {
        question:
          "When two boys meet for the first time, what is good manners?",
        options: [
          "Kissing on the cheek",
          "Saying nothing",
          "Shaking hands",
          "Making 'horns' with the hand",
        ],
        answerIndex: 2,
        explanation:
          "Later he says boys don't kiss when they meet; shaking hands ('darse la mano') is good manners.",
        atSeconds: 222,
      },
      {
        question:
          "Which of these does the speaker say is bad manners in Spain?",
        options: [
          "Talking about money",
          "Saying hello in the elevator",
          "Kissing on the cheek when a boy and a girl meet",
          "Not leaving a tip",
        ],
        answerIndex: 0,
        explanation:
          "Near the end he says talking about money ('hablar de dinero') is also bad manners.",
        atSeconds: 253,
      },
    ],
  },
  S9WahQFFAw4: {
    questions: [
      {
        question: "What is the video about?",
        options: [
          "A Mexican legend about a crying woman",
          "A trip to a river in Spain",
          "A Spanish knight's wedding party",
          "A story about a rich family in Mexico City",
        ],
        answerIndex: 0,
        explanation:
          "He says he'll tell a legend from Mexico, the legend of 'la Llorona', a woman.",
        atSeconds: 49,
      },
      {
        question: "Who was the woman in love with?",
        options: [
          "A Mexican farmer",
          "A Spanish knight",
          "A rich merchant",
          "A man from the river",
        ],
        answerIndex: 1,
        explanation:
          "Near the beginning of the story he says the indigenous woman was in love with a Spanish gentleman ('caballero español').",
        atSeconds: 77,
      },
      {
        question:
          "Why didn't the knight want to tell everyone about their relationship?",
        options: [
          "He didn't love the woman",
          "He was already married",
          "He was afraid of what people would say",
          "He wanted to go back to Spain",
        ],
        answerIndex: 2,
        explanation:
          "In the middle, the woman asks to tell everyone, but the knight was afraid that people would talk.",
        atSeconds: 137,
      },
      {
        question: "Who did the knight marry?",
        options: [
          "The indigenous woman",
          "A rich woman",
          "A woman from the river",
          "Nobody",
        ],
        answerIndex: 1,
        explanation:
          "He left the woman and married a rich woman with a lot of money.",
        atSeconds: 162,
      },
      {
        question:
          "According to the legend, what can you sometimes see at the river today?",
        options: [
          "Three children playing",
          "A knight on a horse",
          "A woman in a white dress looking for her children",
          "A rich woman crying",
        ],
        answerIndex: 2,
        explanation:
          "At the end he says you can hear her crying and sometimes see a woman in a white dress searching for her children.",
        atSeconds: 226,
      },
    ],
  },
  "K-RE7L1pyQs": {
    questions: [
      {
        question: "What happens in the story overall?",
        options: [
          "Juan Parada looks for a new job all day",
          "Juan Parada stops people working and then forgets about them",
          "Juan Parada helps his neighbours clean the park",
          "Juan Parada writes a book about how to work",
        ],
        answerIndex: 1,
        explanation:
          "Juan tells several workers they are doing it wrong, makes them wait while he goes for a book, then goes home, naps and forgets them all.",
        atSeconds: 300,
      },
      {
        question: "What time does Juan get up every day?",
        options: ["At seven", "At nine", "At eleven", "At noon"],
        answerIndex: 2,
        explanation:
          "At the beginning the narrator says Juan gets up at eleven in the morning, very late.",
        atSeconds: 25,
      },
      {
        question:
          "What does Juan say he will go and get for the street sweeper?",
        options: [
          "A new broom",
          "A book about how to sweep",
          "A cup of coffee",
          "His friend the gardener",
        ],
        answerIndex: 1,
        explanation:
          "He tells the sweeper to wait while he looks for a book on how to sweep.",
        atSeconds: 105,
      },
      {
        question: "What is the painter painting?",
        options: ["A house", "A tree", "A park bench", "A car"],
        answerIndex: 2,
        explanation:
          "In the middle of the story the painter is painting a bench in the park ('un banco del parque').",
        atSeconds: 183,
      },
      {
        question: "How does Juan feel when he gets home?",
        options: [
          "Very tired",
          "Very happy",
          "Hungry",
          "Worried about the workers",
        ],
        answerIndex: 0,
        explanation:
          "At the end he arrives home and thinks he is very tired ('muy cansado'), so he takes a nap.",
        atSeconds: 287,
      },
    ],
  },
  oYBl3CcVmZ4: {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "Friends having breakfast together and talking about what they usually eat",
          "A cooking class in Mallorca",
          "A tour of Barcelona's cafés",
          "How to make the perfect coffee",
        ],
        answerIndex: 0,
        explanation:
          "Before going out to film in Barcelona, the group meets at Juanjo's flat for breakfast and each person says what they usually have.",
        atSeconds: 96,
      },
      {
        question: "Where do they go to have breakfast?",
        options: [
          "To a café in Barcelona",
          "To Juanjo's flat",
          "To Harry's house",
          "To a market",
        ],
        answerIndex: 1,
        explanation:
          "At the start they decide to go to Juanjo's flat ('al piso de Juanjo').",
        atSeconds: 27,
      },
      {
        question: "What is an 'ensaimada', according to the video?",
        options: [
          "A type of coffee maker",
          "A fried egg dish",
          "A typical pastry from Mallorca",
          "A kind of tea",
        ],
        answerIndex: 2,
        explanation:
          "One person says she'll share an ensaimada and explains it is a typical pastry from Mallorca.",
        atSeconds: 138,
      },
      {
        question: "Which type of eggs does the speaker say are her favourite?",
        options: ["Fried", "Scrambled", "Boiled", "Poached"],
        answerIndex: 3,
        explanation:
          "She likes fried, scrambled and boiled eggs, but says her favourites are poached ('pochados').",
        atSeconds: 207,
      },
      {
        question:
          "How does the last speaker usually start her day at breakfast?",
        options: [
          "With a cup of tea",
          "With orange juice",
          "With black coffee",
          "With a croissant",
        ],
        answerIndex: 0,
        explanation:
          "Near the end she says she prefers tea and normally has a cup of tea for breakfast, then shows how to make it.",
        atSeconds: 343,
      },
    ],
  },
  sQND3WdnIjg: {
    questions: [
      {
        question: "What do the presenters do in this video?",
        options: [
          "They visit a market in Mexico City",
          "They walk around the main campus of UNAM and describe what they see",
          "They cook raspados at home",
          "They take a bike tour of a park",
        ],
        answerIndex: 1,
        explanation:
          "At the start they say they are on the central campus of UNAM and will walk around to see some of its spaces.",
        atSeconds: 15,
      },
      {
        question: "What is the weather like today?",
        options: ["Rainy and cold", "Cloudy", "Very sunny and hot", "Windy"],
        answerIndex: 2,
        explanation:
          "Early on Baruch says it is very sunny and very hot, so he brought his sunglasses.",
        atSeconds: 61,
      },
      {
        question: "Why do families come to the university on this day?",
        options: [
          "Because it is Sunday and they come to relax",
          "Because there is a concert",
          "Because it is a school day",
          "Because the shops are closed",
        ],
        answerIndex: 0,
        explanation:
          "Baruch says today is Sunday, and on Sundays families come to the university to relax.",
        atSeconds: 116,
      },
      {
        question: "What is Baruch's favourite raspado flavour?",
        options: ["Lime", "Strawberry", "Mango", "Redcurrant (grosella)"],
        answerIndex: 3,
        explanation:
          "Later he explains what a raspado is and says his favourite flavour is grosella; Juan prefers lime.",
        atSeconds: 231,
      },
      {
        question: "Why does Baruch move from the bike lane onto the grass?",
        options: [
          "Because walking in the bike lane breaks the rules",
          "Because he wants to play football",
          "Because the grass is cooler",
          "Because a dog is in the lane",
        ],
        answerIndex: 0,
        explanation:
          "At the end he admits he is walking in the bike lane, says 'eso no se hace', that he is breaking the rules, and moves to the grass.",
        atSeconds: 289,
      },
    ],
  },
  "F-hu-kxZ-xc": {
    questions: [
      {
        question: "Where does this video take place?",
        options: [
          "In a bookshop",
          "In a library",
          "In a classroom",
          "In a café",
        ],
        answerIndex: 1,
        explanation:
          "At the very start Baruch says he is in a library ('una biblioteca') and they explore it.",
        atSeconds: 2,
      },
      {
        question: "Why is Baruch speaking so quietly?",
        options: [
          "He has a sore throat",
          "He is telling a secret",
          "In libraries you speak quietly so you don't bother others",
          "He is tired",
        ],
        answerIndex: 2,
        explanation:
          "He explains that in libraries people speak more quietly so as not to disturb others.",
        atSeconds: 7,
      },
      {
        question:
          "Which of these is NOT one of the prohibition signs Baruch explains?",
        options: [
          "No running",
          "No smoking",
          "No food or drinks",
          "No phones with sound",
        ],
        answerIndex: 0,
        explanation:
          "In the middle he explains signs for no loud talking, no smoking, no food or drinks and no phones with sound; there is no sign about running.",
        atSeconds: 97,
      },
      {
        question: "What are the young people in the study area doing?",
        options: ["Eating", "Sleeping", "Studying", "Playing games"],
        answerIndex: 2,
        explanation:
          "Baruch says the young people are studying ('están estudiando').",
        atSeconds: 143,
      },
      {
        question: "Why does Baruch think the library garden is empty?",
        options: [
          "Because it is raining",
          "Because it is Sunday and students are at home with their families",
          "Because the garden is closed",
          "Because it is very late at night",
        ],
        answerIndex: 1,
        explanation:
          "Near the end he says it is probably empty because today is Sunday and students are at home with their families.",
        atSeconds: 189,
      },
    ],
  },
  "82nmyWfWBYg": {
    questions: [
      {
        question: "What does the presenter show in this video?",
        options: [
          "What is in his fridge",
          "What is in his backpack",
          "His favourite theatre",
          "His university classroom",
        ],
        answerIndex: 1,
        explanation:
          "At the start he says he will show what is in his backpack ('mi mochila').",
        atSeconds: 9,
      },
      {
        question: "What does he use the notebook for?",
        options: [
          "To write down ideas that come to him in the street",
          "To do his homework",
          "To draw pictures",
          "To write his shopping list",
        ],
        answerIndex: 0,
        explanation:
          "Early on he says the notebook is where he writes things that occur to him in the street, for inspiration.",
        atSeconds: 45,
      },
      {
        question: "Why does he carry a sweater?",
        options: [
          "Because it is raining",
          "Because it's part of his costume",
          "Because it gets cold at night",
          "Because the library is cold",
        ],
        answerIndex: 2,
        explanation:
          "In the middle he says he brings a sweater because it is cold at night.",
        atSeconds: 127,
      },
      {
        question: "What is the CUEC, according to the presenter?",
        options: [
          "A theatre in the city centre",
          "A kind of sandwich",
          "UNAM's film school",
          "A phone company",
        ],
        answerIndex: 2,
        explanation:
          "He shows a programme from a CUEC film showing and explains the CUEC is UNAM's film school.",
        atSeconds: 198,
      },
      {
        question: "What is the last item he takes out of his backpack?",
        options: [
          "His house keys",
          "His wallet",
          "A mint-flavoured spray",
          "His phone charger",
        ],
        answerIndex: 2,
        explanation:
          "Near the end he says 'por último' and shows a spearmint ('hierbabuena') flavoured spray.",
        atSeconds: 279,
      },
    ],
  },
  "4p4L31m8LXQ": {
    questions: [
      {
        question: "What is the conversation mainly about?",
        options: [
          "Two friends showing each other what they bought at the supermarket",
          "Two teachers planning a Spanish class",
          "A cooking class about risotto",
          "A trip to Asturias",
        ],
        answerIndex: 0,
        explanation:
          "David and Aida meet by chance, sit down and show each other the shopping they have just done.",
        atSeconds: 25,
      },
      {
        question: "Which ingredient does David's gazpacho NOT have?",
        options: ["Tomato", "Pepper", "Cucumber", "Carrot"],
        answerIndex: 3,
        explanation:
          "Early on David says his gazpacho has tomato, pepper and cucumber, but no carrot.",
        atSeconds: 81,
      },
      {
        question: "Why does Aida drink the energy drink only sometimes?",
        options: [
          "Because it is expensive",
          "Because it has a lot of sugar",
          "Because she doesn't like the taste",
          "Because it makes her tired",
        ],
        answerIndex: 1,
        explanation:
          "She says she only drinks it sometimes because it has a lot of sugar.",
        atSeconds: 179,
      },
      {
        question:
          "What does David want to make with the dried mushrooms and rice?",
        options: ["Paella", "Hummus", "Risotto", "Fabada"],
        answerIndex: 2,
        explanation:
          "Later Aida guesses that rice and mushrooms sound like risotto, and David confirms it.",
        atSeconds: 487,
      },
      {
        question: "Why does David say he teaches his Spanish classes online?",
        options: [
          "Because he eats a lot of garlic",
          "Because he lives far away",
          "Because it's cheaper",
          "Because his students prefer it",
        ],
        answerIndex: 0,
        explanation:
          "Aida asks if he teaches after eating so much garlic, and he jokes that this is why he teaches online.",
        atSeconds: 551,
      },
    ],
  },
  tFGq5P7Z69Q: {
    questions: [
      {
        question: "What is the conversation mainly about?",
        options: [
          "Two friends catching up over coffee: Juanjo's holiday and Pau's news",
          "Planning a trip to Barcelona together",
          "How to make good coffee",
          "A problem with traffic in Mexico City",
        ],
        answerIndex: 0,
        explanation:
          "Juanjo and Pau have a coffee before recording; he talks about his holiday and she shares her news about moving to Berlin.",
        atSeconds: 19,
      },
      {
        question: "Why is Juanjo happy that it is spring?",
        options: [
          "Because he can see the jacaranda trees",
          "Because in Toluca it is very cold all year and now he can enjoy the sun",
          "Because he has no allergies",
          "Because he is on holiday",
        ],
        answerIndex: 1,
        explanation:
          "He says he's very happy because Toluca is cold all year, and now in spring he can enjoy the sun and outdoor activities.",
        atSeconds: 186,
      },
      {
        question: "What problem does Pau have in spring in Mexico City?",
        options: [
          "The pollen gives her allergies",
          "The traffic is worse",
          "It rains too much",
          "The trees lose their flowers",
        ],
        answerIndex: 0,
        explanation:
          "She loves the purple-flowered trees but says there is a lot of pollen and it gives her allergies; she sneezed many times.",
        atSeconds: 237,
      },
      {
        question: "What did Juanjo learn to do on his holiday?",
        options: ["Surf", "Skateboard", "Cook", "Speak German"],
        answerIndex: 1,
        explanation:
          "After the break he says he learned something he always wanted to do: to ride a skateboard ('patinar en patineta').",
        atSeconds: 382,
      },
      {
        question: "How does Pau feel about leaving for Berlin?",
        options: [
          "Only excited",
          "Only sad",
          "Mixed feelings: sad to leave home but excited to study",
          "Angry because she must leave her dog",
        ],
        answerIndex: 2,
        explanation:
          "Near the end she says she's a bit sad to leave her home but excited to study something she loves in Berlin: mixed feelings.",
        atSeconds: 609,
      },
    ],
  },
  "2wlMlDON1rg": {
    questions: [
      {
        question: "What do David and Aida talk about?",
        options: [
          "Their holidays abroad",
          "Their hobbies",
          "Their jobs",
          "Their families",
        ],
        answerIndex: 1,
        explanation:
          "At the start David says they will talk slowly about hobbies ('las aficiones').",
        atSeconds: 1,
      },
      {
        question: "Why aren't David's neighbours very happy?",
        options: [
          "Because he plays the guitar and isn't a professional",
          "Because he cooks late at night",
          "Because he listens to loud podcasts",
          "Because he plays football in the street",
        ],
        answerIndex: 0,
        explanation:
          "Early on he says he's played guitar for about six years but isn't a professional, so his neighbours aren't very happy.",
        atSeconds: 54,
      },
      {
        question: "How does Aida manage on days when she doesn't cook?",
        options: [
          "She eats at restaurants",
          "She cooks bigger amounts and eats them over a couple of days",
          "David cooks for her",
          "She buys ready meals",
        ],
        answerIndex: 1,
        explanation:
          "She explains that when she cooks she makes larger dishes so she can eat for a couple of days.",
        atSeconds: 192,
      },
      {
        question: "What hobby would David like to start in the future?",
        options: [
          "Painting with watercolours",
          "Learning Arabic",
          "Dancing, like salsa and cumbia",
          "Playing the clarinet",
        ],
        answerIndex: 2,
        explanation:
          "Later David says he'd like to learn to dance; he likes salsa and cumbia but has no rhythm and would like classes.",
        atSeconds: 428,
      },
      {
        question: "True or false: Aida says she is very good at surfing.",
        options: ["True", "False"],
        answerIndex: 1,
        explanation:
          "Near the end she says she only tried surfing a couple of times, for about two hours, and that's all.",
        atSeconds: 602,
      },
    ],
  },
  "6_5FnCLLYoA": {
    questions: [
      {
        question: "What is this lesson about?",
        options: [
          "Spanish verb conjugations",
          "About 100 everyday expressions in Spanish",
          "How to order food in Spanish",
          "Spanish songs and music",
        ],
        answerIndex: 1,
        explanation:
          "At the start Anna says that in today's class you will learn 100 expressions you can use every day.",
        atSeconds: 24,
      },
      {
        question:
          "According to Anna, what is the difference between 'ya voy' and 'ya me voy'?",
        options: [
          "'Ya voy' means 'I'm coming'; 'ya me voy' means 'I'm leaving'",
          "They mean exactly the same",
          "'Ya voy' is formal; 'ya me voy' is casual",
          "'Ya voy' means 'I'm back'; 'ya me voy' means 'I'm late'",
        ],
        answerIndex: 0,
        explanation:
          "Early on she explains 'ya voy' is 'I'm coming / on my way' and 'ya me voy' is 'I'm leaving'.",
        atSeconds: 234,
      },
      {
        question:
          "What does Anna say to herself when she decides not to buy something in a store?",
        options: ["Lo dudo", "Mejor no", "Se acabó", "Ni idea"],
        answerIndex: 1,
        explanation:
          "In the middle she describes almost buying something and changing her mind with 'mejor no' (better not).",
        atSeconds: 729,
      },
      {
        question:
          "According to Anna, when do you use 'está caliente' instead of 'hace calor'?",
        options: [
          "For hot weather",
          "For a hot drink like tea or coffee",
          "For a person you like",
          "For a spicy dish only",
        ],
        answerIndex: 1,
        explanation:
          "She says 'hace calor' is for the weather, while 'está caliente' is for something like your tea or coffee.",
        atSeconds: 945,
      },
      {
        question:
          "Which form does Anna say is correct for 'I hope you are well'?",
        options: [
          "Espero que estás bien",
          "Espero que estés bien",
          "Espero que eres bien",
          "Espero que estar bien",
        ],
        answerIndex: 1,
        explanation:
          "Later she warns that many learners say 'estás', but after 'espero que' you need 'estés', with an E.",
        atSeconds: 1325,
      },
    ],
  },
  TfNAo3OWXkI: {
    questions: [
      {
        question: "What is the story mainly about?",
        options: [
          "A boy who loses his bike in the snow",
          "A magic red book that connects a boy in a city with a boy on an island",
          "A teacher who draws maps on the board",
          "A man who sells balloons on the beach",
        ],
        answerIndex: 1,
        explanation:
          "The boy finds a red book; inside he sees an island and another boy, who also finds a red book showing the city, and they see each other.",
        atSeconds: 220,
      },
      {
        question: "Where does the boy find the red book?",
        options: [
          "In the classroom",
          "In the snow in the street",
          "On the beach",
          "Under a bus",
        ],
        answerIndex: 1,
        explanation:
          "Early on he is walking in the street in winter and suddenly sees something red in the snow.",
        atSeconds: 145,
      },
      {
        question: "What does the boy buy from the man in the street?",
        options: ["A scarf", "A map", "Balloons", "A bicycle"],
        answerIndex: 2,
        explanation:
          "In the middle, a man is selling balloons and the boy buys them with money.",
        atSeconds: 415,
      },
      {
        question:
          "How does the boy on the beach feel when he sees the book fall?",
        options: ["Very sad", "Very happy", "Angry", "Scared"],
        answerIndex: 0,
        explanation:
          "Later, the boy on the beach sees the book fall and becomes very sad ('muy triste'), until his friend arrives.",
        atSeconds: 493,
      },
      {
        question: "Who finds the red book at the end?",
        options: [
          "The teacher",
          "The balloon seller",
          "A child on a bicycle",
          "The boy's mother",
        ],
        answerIndex: 2,
        explanation:
          "At the end someone with a bicycle finds the book, puts it under his arm and rides away looking back.",
        atSeconds: 561,
      },
    ],
  },
  "fdyEWiPFS-I": {
    questions: [
      {
        question: "What happens in this story?",
        options: [
          "A girl gets into Harvard, expects parties like in the movies, and gets in trouble with the director",
          "A girl fails her exams at Harvard",
          "A girl organises a concert at her university",
          "A girl loses her bag on the first day of classes",
        ],
        answerIndex: 0,
        explanation:
          "She receives an email accepting her to Harvard, packs things for parties, and on her first day the director tells her that is forbidden.",
        atSeconds: 54,
      },
      {
        question:
          "How does the girl feel before she reads the email from Harvard?",
        options: ["Bored", "Nervous", "Angry", "Sleepy"],
        answerIndex: 1,
        explanation:
          "At the beginning, before reading the message, she says she is nervous ('estoy nerviosa').",
        atSeconds: 46,
      },
      {
        question: "Why does she pack a microphone?",
        options: [
          "To record her classes",
          "To sing, because she thinks there is a lot of music at university",
          "To give a speech",
          "As a present for the director",
        ],
        answerIndex: 1,
        explanation:
          "While packing she says the microphone is for singing, because at university there is a lot of music.",
        atSeconds: 117,
      },
      {
        question: "Why does she pack make-up?",
        options: [
          "Because she wants to look beautiful for the handsome boys",
          "Because it's for a friend",
          "Because she will be in a play",
          "Because the director asked her to",
        ],
        answerIndex: 0,
        explanation:
          "She says there are handsome boys there and she wants to look beautiful.",
        atSeconds: 182,
      },
      {
        question: "Who is the man she asks about the party?",
        options: [
          "Another student",
          "A party DJ",
          "The director",
          "Her father",
        ],
        answerIndex: 2,
        explanation:
          "Near the end he says he is the director, that her items are forbidden, and tells her to come to his office.",
        atSeconds: 322,
      },
    ],
  },
  b4ALAtrJVuw: {
    questions: [
      {
        question: "What happens in the story?",
        options: [
          "A mother hires a babysitter who mixes up all her instructions",
          "A mother takes her baby to a birthday party",
          "A babysitter cooks dinner for a family",
          "A friend helps a mother choose a dress",
        ],
        answerIndex: 0,
        explanation:
          "The mother goes to a party and hires Sara, who forgets where everything is and uses the wrong things, but the mother thinks she did well.",
        atSeconds: 217,
      },
      {
        question: "Why does the mother need a babysitter?",
        options: [
          "She has to go to work",
          "She is going to her friend's birthday party",
          "She is going to the doctor",
          "She is going shopping",
        ],
        answerIndex: 1,
        explanation:
          "At the start she says she is going to a party today because it's her friend's birthday.",
        atSeconds: 19,
      },
      {
        question: "Why does the mother choose Sara?",
        options: [
          "Because Sara is her friend",
          "Because Sara isn't dangerous and isn't expensive",
          "Because Sara is the cheapest",
          "Because Sara arrives very fast",
        ],
        answerIndex: 1,
        explanation:
          "She rejects one babysitter as too expensive and another as dangerous, then picks Sara because she isn't dangerous or expensive.",
        atSeconds: 175,
      },
      {
        question: "According to the mother's instructions, where is the milk?",
        options: [
          "In the bathroom",
          "In the bedroom",
          "In the kitchen",
          "In her bag",
        ],
        answerIndex: 2,
        explanation:
          "She tells Sara the milk is in the kitchen, the dummy in the bedroom and the nappies in the bathroom.",
        atSeconds: 228,
      },
      {
        question: "What does Sara use instead of a nappy?",
        options: ["A towel", "A shirt", "A blanket", "A bag"],
        answerIndex: 1,
        explanation:
          "In the middle she can't find the nappies, so she uses a shirt; at the end the mother sees it is her shirt.",
        atSeconds: 457,
      },
    ],
  },
  L71UG68wRMI: {
    questions: [
      {
        question: "What happens in the story?",
        options: [
          "A girl wins tickets to see BTS",
          "A girl gets money for a 'BTS' ticket, but it is for a different show",
          "A girl starts her own band",
          "A girl sells lemonade to her friends",
        ],
        answerIndex: 1,
        explanation:
          "She wants to see BTS but has no money; she finally gets money and buys a ticket, but it turns out 'BTS' means Bruno Torres Show.",
        atSeconds: 391,
      },
      {
        question: "What is the girl's problem at the beginning?",
        options: [
          "The concert is tomorrow and she has no money",
          "She doesn't like BTS",
          "She has lost her phone",
          "She is ill",
        ],
        answerIndex: 0,
        explanation:
          "Early on she says the concert is tomorrow and she doesn't have any money.",
        atSeconds: 62,
      },
      {
        question: "Why does she decide not to sell lemonade?",
        options: [
          "She doesn't know how to make it",
          "The ticket is expensive and there is no time",
          "It's too cold",
          "Her mother says no",
        ],
        answerIndex: 1,
        explanation:
          "She says the ticket isn't cheap, she'd have to sell a lot of lemonade and the concert is tomorrow, so she has no time.",
        atSeconds: 103,
      },
      {
        question: "What does she hold up when she tries to rob the man?",
        options: ["A knife", "A phone", "A nail clipper", "A watch"],
        answerIndex: 2,
        explanation:
          "In the middle the man points out that what she holds is a nail clipper ('un cortauñas'), not a knife.",
        atSeconds: 280,
      },
      {
        question: "How does she trick the man?",
        options: [
          "She says there's a kitten",
          "She says she is a police officer",
          "She calls her friends",
          "She offers him a ticket",
        ],
        answerIndex: 0,
        explanation:
          "She tells him to look at a kitten ('un gatito'); when he looks, she calls him silly and runs off with money.",
        atSeconds: 313,
      },
    ],
  },
  KQ76zWZSmbg: {
    questions: [
      {
        question: "What is the woman looking for at the agency?",
        options: [
          "A house to buy",
          "A house to rent for one year",
          "A job at the agency",
          "A car to rent",
        ],
        answerIndex: 1,
        explanation:
          "She says she wants to rent (alquilar), and for one year (por un año), not buy (comprar).",
        atSeconds: 39,
      },
      {
        question: "Why doesn't she take the first two houses she sees?",
        options: [
          "They are too small",
          "They are too ugly",
          "They are too expensive",
          "They are too far away",
        ],
        answerIndex: 2,
        explanation:
          'For both houses she says "es muy caro": they cost more than she has. She wants a cheaper house (más barata).',
        atSeconds: 109,
      },
      {
        question: "How does she describe the house she ends up renting?",
        options: [
          "Ugly and small",
          "Pretty and big",
          "Modern and cheap",
          "Old but pretty",
        ],
        answerIndex: 0,
        explanation:
          'She says it is "muy fea" (very ugly) and "muy pequeña" (very small). The agent calls it "clásica" and "especial" instead.',
        atSeconds: 166,
      },
      {
        question:
          "What does the agent keep saying every time he asks her to pay?",
        options: [
          '"Gracias, de nada"',
          '"Efectivo o tarjeta"',
          '"Firma aquí"',
          '"Mira esta casa"',
        ],
        answerIndex: 1,
        explanation:
          'Every time he asks for money he repeats "efectivo o tarjeta": cash or card. That repeated line is the joke of the video.',
        atSeconds: 246,
      },
      {
        question: "Who does she call at the end, and why?",
        options: [
          "Her friend, because she likes the house",
          "The police, because she thinks the agent is a thief",
          "The bank, because her card doesn't work",
          "Another agent, because she wants a new house",
        ],
        answerIndex: 1,
        explanation:
          'When he charges her even for the key, she calls him a thief (ladrón) and says "Voy a llamar a la policía."',
        atSeconds: 324,
      },
    ],
  },
  "sOduX-pwufc": {
    questions: [
      {
        question: "What happens overall in this video?",
        options: [
          "A woman books a cheap hotel in Miami, but the room looks nothing like the online photos",
          "A woman cannot find any hotel in Miami and goes home",
          "A woman works at a hotel reception in Miami",
          "A woman takes photos of the beach for her Instagram",
        ],
        answerIndex: 0,
        explanation:
          "She searches for a pretty, cheap hotel, books Hotel Dreaming, and then complains that the hotel and room do not look like the photos (from about 1:48 onward).",
        atSeconds: 182,
      },
      {
        question: "What is wrong with the first two hotels she looks at?",
        options: [
          "They are ugly",
          "They are very expensive",
          "They are far from the beach",
          "They are full",
        ],
        answerIndex: 1,
        explanation:
          'Near the start she says the first hotels are pretty but "muy caro" (very expensive).',
        atSeconds: 39,
      },
      {
        question: "What is her name?",
        options: ["Michelle", "Andrea", "Chelsin", "Dreaming"],
        answerIndex: 2,
        explanation:
          "At reception she gives her name as Chelsin (around 3:49), and the receptionist gives her the key to room 404.",
        atSeconds: 229,
      },
      {
        question: "What does she say about the bathroom?",
        options: [
          "It is big and has a jacuzzi",
          "It is small, has no jacuzzi and is dirty",
          "It is clean but has no window",
          "It is the same as in the photo",
        ],
        answerIndex: 1,
        explanation:
          "Around 6:13 she says the bathroom is small, has no jacuzzi and is dirty, unlike the photo.",
        atSeconds: 373,
      },
      {
        question: "How does the receptionist react to her complaints?",
        options: [
          "He apologizes and gives her another room",
          "He says everything is fine and thinks she is crazy",
          "He calls the hotel manager",
          "He gives her money back",
        ],
        answerIndex: 1,
        explanation:
          'He insists everything is perfect and around 7:50 says he thinks she is "loca" (crazy).',
        atSeconds: 470,
      },
    ],
  },
  pWtxyAWRLiI: {
    questions: [
      {
        question: "What is the story mainly about?",
        options: [
          "A woman thinks she is pregnant, and in the end it was a bad dream",
          "A woman wants to buy a crib for her baby",
          "A woman works in a pharmacy",
          "A doctor tells a woman she is sick",
        ],
        answerIndex: 0,
        explanation:
          'She worries she is pregnant, takes a test, sees a doctor, and at about 6:28 realizes it was "una pesadilla" (a nightmare).',
        atSeconds: 388,
      },
      {
        question: "Where does she go first to buy a pregnancy test?",
        options: [
          "To the doctor",
          "To the pharmacy",
          "To the supermarket",
          "To the hospital",
        ],
        answerIndex: 1,
        explanation:
          'At the beginning she decides "voy a la farmacia" and asks the pharmacist for a pregnancy test.',
        atSeconds: 46,
      },
      {
        question: "What does she think about the price of the test?",
        options: [
          "It is cheap",
          "It is free",
          "It is expensive",
          "It is the same as diapers",
        ],
        answerIndex: 2,
        explanation:
          'After hearing the price she says "Qué caro" (how expensive); the pharmacist replies that diapers and cribs cost more.',
        atSeconds: 115,
      },
      {
        question: "What does she tell the doctor about babies?",
        options: [
          "She loves babies",
          "She does not like babies",
          "She wants many babies",
          "She has a baby at home",
        ],
        answerIndex: 1,
        explanation:
          'Around 3:53 she tells the doctor it is not fantastic because "No me gustan los bebés".',
        atSeconds: 233,
      },
      {
        question: "How many babies does the doctor say she is having?",
        options: ["One", "Two", "Three", "Four"],
        answerIndex: 3,
        explanation:
          'Near the end (around 6:12) the doctor counts and says "Tú tienes cuatro bebés".',
        atSeconds: 372,
      },
    ],
  },
  "4hGfVk0VAGA": {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "A woman has one nightmare after another about her office",
          "A woman cannot find her office",
          "A woman buys a new bed and pillow",
          "A woman makes coffee for her boss",
        ],
        answerIndex: 0,
        explanation:
          'She keeps waking up from nightmares, saying "otra pesadilla" several times, each one about going to the office.',
        atSeconds: 154,
      },
      {
        question: "What does she count to fall asleep?",
        options: ["Hours", "Sheep", "Cups of coffee", "Pillows"],
        answerIndex: 1,
        explanation:
          'At the start, in bed, she counts "una oveja, dos ovejas, tres ovejas" (sheep).',
        atSeconds: 29,
      },
      {
        question: "In her nightmare, who is her coworker?",
        options: ["Her mother", "A doctor", "Satan", "A police officer"],
        answerIndex: 2,
        explanation:
          'Around 3:48 she tells her coworker that in her nightmare "tú eras Satán".',
        atSeconds: 228,
      },
      {
        question:
          "True or false: her coworker laughs when she tells him about the nightmare.",
        options: ["True", "False"],
        answerIndex: 0,
        explanation:
          "After she says he was Satan in her dream, he laughs and she asks why he is laughing, saying it is not funny (around 3:59).",
        atSeconds: 239,
      },
      {
        question: "What happens at the end of the last office scene?",
        options: [
          "The boss gives her a coffee",
          "The boss says she is fired",
          "The boss gives her a knife",
          "The boss sends her home to sleep",
        ],
        answerIndex: 1,
        explanation:
          'After she shows a knife, the boss says he is not Satan but her boss and that she is "despedida" (fired), around 6:54. Then she wakes up again.',
        atSeconds: 414,
      },
    ],
  },
  "-BJfyi_PS50": {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "A woman discovers she has no money because she spends too much",
          "A woman loses her bank card on the street",
          "A woman works in a phone shop",
          "A woman saves money for a trip to Cancún",
        ],
        answerIndex: 0,
        explanation:
          "She tries to buy a new phone, finds there is no money in her account, and then remembers everything she spent money on during the week (around 6:00 to 7:34).",
        atSeconds: 454,
      },
      {
        question: "Why does she want to buy a new phone?",
        options: [
          "Her phone is old",
          "Her phone breaks at the beginning",
          "She wants a phone as a gift",
          "Her phone has no internet",
        ],
        answerIndex: 1,
        explanation:
          'At the start something happens and she says "Ay, no, mi celular", then decides to buy another phone.',
        atSeconds: 20,
      },
      {
        question: "Where does she go after the ATM shows no money?",
        options: [
          "To the supermarket",
          "To her friend's house",
          "To the bank",
          "To the phone shop again",
        ],
        answerIndex: 2,
        explanation:
          'Around 3:13 she says "voy al banco" and asks the bank employee where her money is.',
        atSeconds: 193,
      },
      {
        question: "What did she spend money on on Tuesday?",
        options: [
          "Hamburgers",
          "Shoes on Temu",
          "A party and beer",
          "Ice cream",
        ],
        answerIndex: 2,
        explanation:
          'Remembering her week, she says Tuesday was "fiesta y cervezas" (a party and beers), around 6:19.',
        atSeconds: 379,
      },
      {
        question: "How does she get money to eat at the end?",
        options: [
          "Someone lends her money that she must pay back with extra",
          "Her boss pays her early",
          "She sells her new phone",
          "The bank gives her free money",
        ],
        answerIndex: 0,
        explanation:
          "Near the end (around 7:57) someone offers to give her money today if she pays back more in a month, and she accepts.",
        atSeconds: 477,
      },
    ],
  },
  FD3cN1rUOYo: {
    questions: [
      {
        question: "What is the main idea of the video?",
        options: [
          "A woman buys shoes from an old lady who does not work in the shop",
          "A woman returns shoes because they are too small",
          "A woman works in a shoe shop",
          "A woman buys white shoes for a party",
        ],
        answerIndex: 0,
        explanation:
          "After a confusing sale she pays an older woman, and near the end (around 7:14) the real owner says that lady is crazy and does not work there.",
        atSeconds: 434,
      },
      {
        question: "What color shoes does she want at first?",
        options: ["Black", "Cream", "White", "White and black"],
        answerIndex: 2,
        explanation:
          'At the beginning she says "Quiero zapatos blancos" and rejects shoes that are white with black.',
        atSeconds: 41,
      },
      {
        question: "What does she want instead of shoes?",
        options: ["Boots", "High heels", "Sandals", "Low heels"],
        answerIndex: 1,
        explanation:
          'Around 2:29 she says she doesn\'t want shoes, she wants "tacones", and later specifies "tacones altos" (high heels).',
        atSeconds: 149,
      },
      {
        question: "What size does she want?",
        options: ["Six", "Seven", "Eight", "Nine"],
        answerIndex: 1,
        explanation:
          'Around 4:30 she says the heels are size eight but she wants "talla siete".',
        atSeconds: 270,
      },
      {
        question: "Why does she think the price is very expensive?",
        options: [
          "The woman charges 50 for each shoe",
          "The shoes are made of gold",
          "She has to pay in cash",
          "The price is 80 for one shoe",
        ],
        answerIndex: 0,
        explanation:
          'Around 5:33 the woman says it is 50 for the left shoe and 50 for the right, and she complains "eso es muy caro".',
        atSeconds: 333,
      },
    ],
  },
  p5ZHNWifka4: {
    questions: [
      {
        question: "What happens overall in this video?",
        options: [
          "A woman gets lost in New York and has many problems",
          "A woman shows her friend around Manhattan",
          "A woman moves to New York to work",
          "A woman visits New York and everything goes perfectly",
        ],
        answerIndex: 0,
        explanation:
          'She arrives happy, takes the wrong train, ends up lost, loses her wallet, and says around 5:49 "no me gusta Nueva York".',
        atSeconds: 349,
      },
      {
        question: "Who lives in New York?",
        options: [
          "Her sister Jenny",
          "Her friend Jenny",
          "Her friend Shell",
          "Her boyfriend",
        ],
        answerIndex: 1,
        explanation: 'At the start she says "Mi amiga Jenny vive aquí".',
        atSeconds: 20,
      },
      {
        question: "Why can't she use Google Maps?",
        options: [
          "She has no internet",
          "Her phone has no battery",
          "She doesn't have a phone",
          "Google Maps is in English",
        ],
        answerIndex: 1,
        explanation:
          'In the subway around 2:22 she tries Google Maps and says "no tengo batería".',
        atSeconds: 142,
      },
      {
        question: "What does she discover when she wants to pay for the pizza?",
        options: [
          "The pizza is free",
          "Her wallet is missing",
          "She has no cash, only a card",
          "The pizza shop is closed",
        ],
        answerIndex: 1,
        explanation:
          'Around 4:56 she asks "¿Y mi cartera? ¿Dónde está mi cartera?" — her wallet is gone.',
        atSeconds: 296,
      },
      {
        question: "What does she lose at the very end?",
        options: [
          "Her phone",
          "Her wallet",
          "Her suitcase",
          "Her friend Jenny",
        ],
        answerIndex: 2,
        explanation:
          'After saying she loves New York, around 7:29 she asks "¿Y mi maleta?" — her suitcase is gone.',
        atSeconds: 449,
      },
    ],
  },
  _raLMEnUGbI: {
    questions: [
      {
        question: "What is the main problem in this café?",
        options: [
          "The customer keeps asking for chocolate cake, but there is none",
          "The café has no coffee",
          "The waiter gives the customer the wrong coffee",
          "The customer has no money",
        ],
        answerIndex: 0,
        explanation:
          'Again and again the customer asks for "tarta de chocolate", and the waiter keeps saying there isn\'t any, from 0:21 to the end.',
        atSeconds: 21,
      },
      {
        question: "What is the first drink the customer orders?",
        options: [
          "An espresso",
          "A cappuccino",
          "An orange juice",
          "An Americano",
        ],
        answerIndex: 0,
        explanation: 'At the start the customer asks for "un café expreso".',
        atSeconds: 13,
      },
      {
        question: "Which cake does the customer finally accept instead?",
        options: [
          "Cheesecake",
          "Pistachio cake",
          "Lemon cake",
          "Strawberry cake",
        ],
        answerIndex: 1,
        explanation:
          "Around 3:08 the customer says the pistachio cake looks good and orders it with orange juice.",
        atSeconds: 188,
      },
      {
        question: "Why is there no chocolate cake today?",
        options: [
          "The cook is sick",
          "Many people ate it yesterday",
          "The café never sells it",
          "It is too expensive",
        ],
        answerIndex: 1,
        explanation:
          "Around 4:03 the waiter explains that yesterday there was chocolate cake but many people ate it.",
        atSeconds: 243,
      },
      {
        question: "How does the waiter feel at the end?",
        options: [
          "Happy and calm",
          "Angry, because the customer does not listen",
          "Sad, because the café is closing",
          "Surprised, because the customer pays a lot",
        ],
        answerIndex: 1,
        explanation:
          'Around 5:15 he shouts "fuera" (out) and then complains that the girl "no escucha" (doesn\'t listen).',
        atSeconds: 328,
      },
    ],
  },
  L_KLfffFAwU: {
    questions: [
      {
        question: "What is the story about overall?",
        options: [
          "Detectives investigate Peter's death, but in the end Peter is alive",
          "Peter wins the lottery and shares it with his friends",
          "Marta organizes a birthday party for her daughter",
          "Luis and Juan open a business together",
        ],
        answerIndex: 0,
        explanation:
          "Detectives question Marta, Luis, Juan and the daughter; at the funeral they discover the body is not Peter, and the narrator says Peter was alive (around 14:18).",
        atSeconds: 858,
      },
      {
        question: "Why were they having dinner together?",
        options: [
          "It was Peter's birthday",
          "Peter won the lottery",
          "Marta and Peter got married",
          "Luis got a new job",
        ],
        answerIndex: 1,
        explanation:
          'Early on Marta says it was a celebration because her husband "ganó la lotería" the day before.',
        atSeconds: 91,
      },
      {
        question: "According to Luis, what did Peter believe?",
        options: [
          "That Luis wanted his money",
          "That Marta and Juan were together",
          "That his daughter was sick",
          "That Juan wanted to kill him",
        ],
        answerIndex: 1,
        explanation:
          "Around 4:09 Luis tells the detective it is a secret, but Peter believed his wife and his friend Juan were together.",
        atSeconds: 249,
      },
      {
        question: "How does Juan say he met Marta?",
        options: ["At work", "At the university", "At a party", "On a trip"],
        answerIndex: 1,
        explanation:
          'Around 6:36 Juan says he met her many years ago "en la universidad".',
        atSeconds: 396,
      },
      {
        question: "Why did Peter decide to disappear?",
        options: [
          "He wanted to keep all the lottery money for himself",
          "He discovered Marta and Juan's secret, including that his daughter was Juan's",
          "He was afraid of Luis",
          "The detectives told him to hide",
        ],
        answerIndex: 1,
        explanation:
          "Near the end (around 15:37 to 16:44) Peter sees a message from Juan on Marta's phone and then realizes his daughter is Juan's, so he feels his life is a lie.",
        atSeconds: 1004,
      },
    ],
  },
  "huE-VzHLJMQ": {
    questions: [
      {
        question: "What is the main joke of this video?",
        options: [
          "The priest charges the widow money for everything at the funeral",
          "The widow forgets her husband's name",
          "The priest refuses to do the funeral",
          "The husband's friends organize a party",
        ],
        answerIndex: 0,
        explanation:
          'Throughout the video the priest asks "efectivo o tarjeta" for the funeral, flowers, a cover, burial and even a tissue at the end (10:06).',
        atSeconds: 606,
      },
      {
        question: "At first, why does the priest think the woman is crying?",
        options: [
          "She lost her money",
          "She cut an onion",
          "She is sick",
          "It is raining",
        ],
        answerIndex: 1,
        explanation:
          'At the start he says "Has cortado una cebolla" (you\'ve cut an onion), before she explains her husband died.',
        atSeconds: 20,
      },
      {
        question:
          "What mistake does the priest make at the start of the funeral?",
        options: [
          "He says the wrong name, Peter instead of James",
          "He forgets the flowers",
          "He arrives late",
          "He goes to the wrong church",
        ],
        answerIndex: 0,
        explanation:
          "Around 3:25 he says goodbye to Peter, and she corrects him: her husband is not Peter, he is James.",
        atSeconds: 209,
      },
      {
        question: "What problem is there during the funeral?",
        options: [
          "It is very hot",
          "It is raining",
          "Nobody brought flowers",
          "The music is too loud",
        ],
        answerIndex: 1,
        explanation:
          'Around 5:28 she says "Padre, está lloviendo" and worries that James will get wet.',
        atSeconds: 328,
      },
      {
        question:
          "True or false: James's friends all came to the funeral and spoke about him.",
        options: ["True", "False"],
        answerIndex: 1,
        explanation:
          "Around 4:36 she notes his friends did not come, and the one man who appears thinks it is Peter's funeral.",
        atSeconds: 276,
      },
    ],
  },
  KTnxevIcYSA: {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "A girl's parents meet her boyfriend and change their opinion when they learn his family is rich",
          "A girl and her boyfriend go on a trip alone",
          "A boy asks a girl's father for a job",
          "A family goes to the cinema for a birthday",
        ],
        answerIndex: 0,
        explanation:
          "The parents dislike Juan at first, but after hearing his parents' shop is Adidas (around 4:44) they want to be with him all the time.",
        atSeconds: 284,
      },
      {
        question: "How old is the daughter?",
        options: ["15", "16", "17", "18"],
        answerIndex: 2,
        explanation:
          'Early on her parents say she can\'t have a boyfriend because she is 17 ("Tienes 17 años").',
        atSeconds: 76,
      },
      {
        question: "What does Juan study?",
        options: ["Medicine", "Law", "Music", "Business"],
        answerIndex: 2,
        explanation:
          'Around 2:44 Juan says "Yo estudio música", and the daughter adds he plays the guitar.',
        atSeconds: 164,
      },
      {
        question: "Where do they go first in the limousine?",
        options: [
          "To a restaurant",
          "To the cinema",
          "To Juan's house",
          "To the shop",
        ],
        answerIndex: 1,
        explanation:
          'Around 5:40 Juan says they are going "al cine", and the parents decide to come too.',
        atSeconds: 340,
      },
      {
        question: "Why does Juan break up with the daughter?",
        options: [
          "Because of her parents",
          "Because he moves to another city",
          "Because she doesn't like music",
          "Because she forgot his birthday",
        ],
        answerIndex: 0,
        explanation:
          'Near the end (around 8:33) she says Juan broke up with her, and when asked why she answers "Por ustedes" (because of you, her parents).',
        atSeconds: 513,
      },
    ],
  },
  N0v2qauFV6s: {
    questions: [
      {
        question: "This video is a funny modern version of which story?",
        options: [
          "Cinderella",
          "Little Red Riding Hood",
          "Snow White",
          "The Three Little Pigs",
        ],
        answerIndex: 1,
        explanation:
          'Her mother tells her to wear her "caperuza roja" (red hood), she meets a wolf on the way to grandma\'s house, and the wolf pretends to be grandma (from about 2:40).',
        atSeconds: 160,
      },
      {
        question: "What is the money for?",
        options: [
          "Video games for the girl",
          "Medicine for the grandmother",
          "A new phone",
          "Food for the family",
        ],
        answerIndex: 1,
        explanation:
          "At the start the mother says the money is for the grandmother, who needs to buy medicine.",
        atSeconds: 48,
      },
      {
        question: "Why doesn't the mother take the money herself?",
        options: [
          "She has to go to work",
          "Her back hurts and she is very tired",
          "She is still in pajamas",
          "She doesn't like the grandmother",
        ],
        answerIndex: 1,
        explanation:
          "Around 1:50 the mother says her back hurts a lot and she is very tired.",
        atSeconds: 110,
      },
      {
        question:
          "What does the 'Wall Street' wolf offer to do with the money?",
        options: [
          "Buy medicine at a lower price",
          "Invest it and multiply it by ten",
          "Keep it safe in a bank",
          "Give it to the grandmother",
        ],
        answerIndex: 1,
        explanation:
          "Around 5:03 the wolf says if she gives him the money he can multiply it by ten by investing it.",
        atSeconds: 303,
      },
      {
        question: "Why does the girl finally say no to the wolf?",
        options: [
          "She remembers her mother's warning about talking to strangers",
          "The hunter arrives and stops her",
          "The wolf asks for too much money",
          "Her grandmother calls her",
        ],
        answerIndex: 0,
        explanation:
          "Around 6:52 she remembers her mother's advice not to talk to people she doesn't know, and says the money is for her grandmother.",
        atSeconds: 412,
      },
    ],
  },
  "0-Y0ayj9F-w": {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "Women in an office talk about how attractive their coworker Gabriel is, but he is not interested in women",
          "Gabriel is the new boss of the office",
          "Two coworkers fight about who is late",
          "A new employee gets lost in the office",
        ],
        answerIndex: 0,
        explanation:
          "Two coworkers praise Gabriel's looks, a new woman tries to date him, and around 5:05 he answers that he also wants to date a handsome man.",
        atSeconds: 305,
      },
      {
        question: "Why does the man arriving at the start say he is late?",
        options: [
          "He was sick",
          "There was a lot of traffic",
          "His alarm didn't ring",
          "He lost his keys",
        ],
        answerIndex: 1,
        explanation:
          'Told he is ten minutes late, he says "Había mucho tráfico".',
        atSeconds: 27,
      },
      {
        question: "What do the women say about Gabriel's arms?",
        options: [
          "They are very strong",
          "They have many tattoos",
          "They are very thin",
          "They are tired",
        ],
        answerIndex: 0,
        explanation:
          'Around 2:29 they say "Qué brazos tan fuertes" (what strong arms).',
        atSeconds: 149,
      },
      {
        question: "What is the new woman's name?",
        options: ["Sheila", "Stephanie", "Cristín", "Gabriela"],
        answerIndex: 2,
        explanation:
          'Around 3:50 she introduces herself: "Yo soy Cristín. Soy nueva aquí."',
        atSeconds: 230,
      },
      {
        question:
          "True or false: the women heard that Gabriel is a millionaire.",
        options: ["True", "False"],
        answerIndex: 0,
        explanation:
          'Around 2:46 one says she heard that Gabriel "es millonario".',
        atSeconds: 166,
      },
    ],
  },
  "5-_Aog7Jsjk": {
    questions: [
      {
        question: "What is the story mainly about?",
        options: [
          "A woman tries many ways to lose weight before her beach holiday, then eats lots of cake",
          "A woman prepares a birthday party for her friend",
          "A woman becomes a personal trainer",
          "A woman travels to the beach with Kendall Jenner",
        ],
        answerIndex: 0,
        explanation:
          "She uses a cream, the gym, a detox juice and a medicine to lose weight, then at her friend's party eats lots of cake and ends up back at 62 kg (around 15:42).",
        atSeconds: 942,
      },
      {
        question: "Why is she so excited at the beginning?",
        options: [
          "It is her birthday",
          "Her beach holiday is in one week",
          "She got a new job",
          "Her friend is visiting",
        ],
        answerIndex: 1,
        explanation:
          "At the start she says that in one week she has her holidays at the beach.",
        atSeconds: 17,
      },
      {
        question: "What happens when she uses the weight-loss cream?",
        options: [
          "It smells very good",
          "It makes her skin itch a lot",
          "It works immediately",
          "She loses 4 kg in one night",
        ],
        answerIndex: 1,
        explanation:
          'Around 4:08 she says "me pica, y me pica mucho" (it itches a lot).',
        atSeconds: 248,
      },
      {
        question: "What does the gym trainer think of her?",
        options: [
          "That she is already thin",
          "That she needs to eat more cake",
          "That she looks like Kendall Jenner",
          "That she is too old for the gym",
        ],
        answerIndex: 0,
        explanation:
          "Around 6:16 the trainer says \"tú estás delgada, eres un hueso\" (you're thin, you're skin and bones).",
        atSeconds: 376,
      },
      {
        question: "How does the story end?",
        options: [
          "She decides she loves cake more than the beach",
          "She goes to the beach and is very happy",
          "She goes back to the gym every day",
          "She gives the cake to Sofi",
        ],
        answerIndex: 0,
        explanation:
          'At the very end she sees 62 kg again and says she likes the beach, but "amo el pastel" (I love cake).',
        atSeconds: 950,
      },
    ],
  },
  relDmMP55wM: {
    questions: [
      {
        question: "What is the video mainly about?",
        options: [
          "A woman has many problems getting her Christmas gift from Santa",
          "A woman buys Christmas gifts for her family",
          "Santa Claus loses his reindeer",
          "A woman works at the post office at Christmas",
        ],
        answerIndex: 0,
        explanation:
          "She asks Santa for a phone, but the post office, the website, Santa's visa and customs all cause problems (from 0:50 to about 7:31).",
        atSeconds: 328,
      },
      {
        question: "What gift does she want?",
        options: ["A computer", "An iPhone", "A camera", "A bicycle"],
        answerIndex: 1,
        explanation:
          "In her letter at the start she writes that she wants an iPhone.",
        atSeconds: 20,
      },
      {
        question: "What does the post office worker tell her?",
        options: [
          "They don't send letters to Santa anymore; she must order online",
          "The letter needs more stamps",
          "Santa lives too far away",
          "The post office is closed for Christmas",
        ],
        answerIndex: 0,
        explanation:
          'Around 0:58 the worker says they no longer send letters to Santa and she has to order "por internet".',
        atSeconds: 58,
      },
      {
        question: "Why can't Santa go to California?",
        options: [
          "His sleigh is broken",
          "He doesn't have a visa",
          "It is too hot",
          "The reindeer are sick",
        ],
        answerIndex: 1,
        explanation:
          'Around 3:52 he is asked for a "visado" and says he doesn\'t have one.',
        atSeconds: 232,
      },
      {
        question: "Where is her phone when it doesn't arrive on December 25?",
        options: [
          "At the post office",
          "At customs",
          "In Asia",
          "At Santa's house",
        ],
        answerIndex: 1,
        explanation:
          'Around 5:47 a notification says her phone is "en aduanas" (at customs), where she is asked to pay to get it.',
        atSeconds: 347,
      },
    ],
  },
  afb_4usA3S0: {
    questions: [
      {
        question: "What happens in this video?",
        options: [
          "A police officer catches a thief and falls in love with him",
          "A thief escapes from the police with the gold",
          "A police officer loses her gun",
          "A jewelry shop owner catches a thief",
        ],
        answerIndex: 0,
        explanation:
          "After arresting the thief, the officer admires his face and asks him to have a coffee (around 2:32), and at the end gives him her phone number.",
        atSeconds: 152,
      },
      {
        question: "Where is the thief?",
        options: [
          "In a bank",
          "In a jewelry shop",
          "In a supermarket",
          "In a museum",
        ],
        answerIndex: 1,
        explanation:
          'At the start someone reports a thief who is "en la joyería" (in the jewelry shop).',
        atSeconds: 22,
      },
      {
        question: "What does the officer tell the thief to drop first?",
        options: ["The gold", "The gun", "The phone", "The bag"],
        answerIndex: 1,
        explanation:
          'Around 0:45 she says "Eso no. La pistola. Suelta la pistola." — drop the gun; then she tells him to drop the gold too.',
        atSeconds: 45,
      },
      {
        question: "Instead of prison, what does the officer give the thief?",
        options: ["A fine", "A warning", "A medal", "A gift"],
        answerIndex: 0,
        explanation:
          'Around 3:27 she has an idea: no prison, only "una multa" (a fine).',
        atSeconds: 209,
      },
      {
        question: "What is the very large number written on the paper really?",
        options: [
          "The price of the gold",
          "The officer's phone number",
          "The thief's address",
          "The prison number",
        ],
        answerIndex: 1,
        explanation:
          'At the end (around 3:58) she says "Error" — it is her phone number, not the amount of the fine.',
        atSeconds: 238,
      },
    ],
  },
  hr8nHuFCQ2s: {
    questions: [
      {
        question: "What is the story about?",
        options: [
          "Juan travels far to find a special phone for Sofía, but she doesn't like it",
          "Juan and Sofía travel to Egypt on holiday",
          "Sofía buys a phone for Juan",
          "Juan works in an Apple shop",
        ],
        answerIndex: 0,
        explanation:
          "Juan goes to an Apple shop, a cemetery, France and Egypt to find the phone, and at the end (around 6:51) Sofía says she doesn't like gold phones.",
        atSeconds: 411,
      },
      {
        question: "What does Juan ask Sofía at the start?",
        options: [
          "If she wants to go to Egypt",
          "If she wants to marry him",
          "If she wants a new phone",
          "If she likes dragons",
        ],
        answerIndex: 1,
        explanation: 'Around 0:53 Juan asks "Sofía, ¿quieres casarte conmigo?"',
        atSeconds: 53,
      },
      {
        question: "In France, what does Juan find?",
        options: ["A pyramid", "A dragon", "Steve Jobs", "An Apple shop"],
        answerIndex: 1,
        explanation:
          "Around 3:34 the narrator says in France there is a dragon, but Juan has a sword.",
        atSeconds: 214,
      },
      {
        question: "Where is the phone finally found?",
        options: [
          "In a castle in France",
          "In a pyramid in Egypt",
          "In a cemetery",
          "In Sofía's house",
        ],
        answerIndex: 1,
        explanation:
          "The dragon says the phone is in a pyramid in Egypt (around 4:29), and Juan finds it there.",
        atSeconds: 269,
      },
      {
        question: "What color phones does Sofía like?",
        options: ["Gold", "Red or pink", "Black or white", "Blue"],
        answerIndex: 1,
        explanation:
          "Around 6:51 she says she likes red or pink phones, not gold ones.",
        atSeconds: 411,
      },
    ],
  },
  "3z5zt4duxFU": {
    questions: [
      {
        question: "What is the main problem in this video?",
        options: [
          "Shell's things keep disappearing, and at the end she finds out Ruby has them",
          "Shell is late for work",
          "Shell's studio is closed",
          "Shell has no food at home",
        ],
        answerIndex: 0,
        explanation:
          "All day she can't find her milk, phone, trousers and microphone; around 6:14 she sees Ruby with them and says those are her things.",
        atSeconds: 374,
      },
      {
        question: "What is missing from her breakfast?",
        options: ["The eggs", "The bread", "The milk", "The orange juice"],
        answerIndex: 2,
        explanation:
          "Around 1:52 she lists egg, orange juice and bread, then asks where the milk is.",
        atSeconds: 112,
      },
      {
        question: "What clothes does she finally choose?",
        options: ["A T-shirt", "A dress", "A hoodie", "Trousers"],
        answerIndex: 2,
        explanation:
          'After rejecting a T-shirt and a dress and not finding her trousers, around 3:37 she picks a hoodie and says "Esto sí".',
        atSeconds: 217,
      },
      {
        question: "What does she do in her studio?",
        options: ["She cooks", "She makes videos", "She sleeps", "She paints"],
        answerIndex: 1,
        explanation:
          "Around 5:27 she says this is her studio, where she makes and records videos.",
        atSeconds: 327,
      },
      {
        question: "What is missing when she starts recording?",
        options: ["Her camera", "Her microphone", "Her lights", "Her chair"],
        answerIndex: 1,
        explanation:
          'Around 5:54, after saying "Acción", she asks where her microphone is.',
        atSeconds: 354,
      },
    ],
  },
  bHsJMDhroiA: {
    questions: [
      {
        question: "What is the main idea of the video?",
        options: [
          "A woman who loves the cinema has a bad experience there and decides she prefers watching films at home",
          "A woman works at a cinema",
          "A woman makes a film with her friends",
          "A woman watches a film on a pirate website",
        ],
        answerIndex: 0,
        explanation:
          'She goes to the cinema because "el cine es lo mejor", but expensive prices and noisy people ruin it; around 7:22 she says she doesn\'t like the cinema and prefers films at home.',
        atSeconds: 442,
      },
      {
        question: "Why doesn't she watch the film on the internet?",
        options: [
          "She has no internet",
          "She prefers to see films at the cinema",
          "The website doesn't work",
          "Her phone is broken",
        ],
        answerIndex: 1,
        explanation:
          "Around 1:11 she rejects the free pirate website and says she will go to the cinema because she likes it.",
        atSeconds: 71,
      },
      {
        question: "What does she think of the ticket price?",
        options: [
          "It's cheap",
          "It's free",
          "It's very expensive",
          "It's a good deal",
        ],
        answerIndex: 2,
        explanation:
          'Around 2:28, after hearing the price of the ticket, she says "Es muy caro".',
        atSeconds: 148,
      },
      {
        question:
          "What is she told when she brings popcorn and Coca-Cola from a shop?",
        options: [
          "It is forbidden to bring them",
          "She must pay extra",
          "She can sit anywhere",
          "She can eat only outside",
        ],
        answerIndex: 0,
        explanation:
          'Around 3:15 the worker says "está prohibido traer palomitas y Coca-Cola".',
        atSeconds: 195,
      },
      {
        question: "What problem does she have inside the cinema?",
        options: [
          "The film doesn't start",
          "Other people talk and use their phones",
          "The screen is too small",
          "There is no sound",
        ],
        answerIndex: 1,
        explanation:
          "From around 5:09 other people talk, look at their phones and argue, so she can't watch the film in peace.",
        atSeconds: 309,
      },
    ],
  },
  iUdr4TKO65E: {
    questions: [
      {
        question: "What happens in this video overall?",
        options: [
          "Shell tries to cheer up Natalia on her birthday, but the boyfriend she finds prefers Shell",
          "Natalia organizes a surprise party for Shell",
          "Shell and Natalia open a café",
          "Natalia meets her boyfriend at work",
        ],
        answerIndex: 0,
        explanation:
          "Shell brings a cake and a dress and finds a date for Natalia, but at the café Andrés compliments Shell and leaves with her (around 5:36).",
        atSeconds: 336,
      },
      {
        question: "Why is Natalia unhappy on her birthday?",
        options: [
          "She feels very old",
          "She lost her job",
          "Her family forgot her",
          "She is sick",
        ],
        answerIndex: 0,
        explanation:
          'Around 1:13 Natalia says "Soy muy vieja" (I\'m very old), and later adds she has no boyfriend.',
        atSeconds: 73,
      },
      {
        question: "Why doesn't Natalia eat the birthday cake?",
        options: [
          "She doesn't like chocolate",
          "She thinks she will get fat",
          "She is not hungry",
          "She is allergic",
        ],
        answerIndex: 1,
        explanation:
          "Around 2:23 she says if she eats cake she will be old and fat.",
        atSeconds: 143,
      },
      {
        question: "What is the problem with the dress?",
        options: [
          "It is the wrong color",
          "It is too small for her",
          "It is too long",
          "It is broken",
        ],
        answerIndex: 1,
        explanation:
          "Around 3:07 she says the dress is size XS and she is size M, so it is too small.",
        atSeconds: 187,
      },
      {
        question: "What is Natalia offered at the café at the end?",
        options: ["Salad", "Yogurt", "Cakes", "Coffee"],
        answerIndex: 2,
        explanation:
          'At the end there is no salad and no yogurt; the waiter says "Tengo pasteles" (I have cakes).',
        atSeconds: 385,
      },
    ],
  },
  QkbiqHmFnXQ: {
    questions: [
      {
        question: "What is the main problem in this video?",
        options: [
          "A woman is very sleepy but many things stop her from sleeping",
          "A woman can't find her keys",
          "A woman is late for work",
          "A woman has a party at home",
        ],
        answerIndex: 0,
        explanation:
          'From the start she says "Tengo sueño", but a cockroach, noisy neighbors, a friend and coffee keep her awake until 3 a.m.',
        atSeconds: 11,
      },
      {
        question: "What does she find under the bed?",
        options: ["Her phone", "A cockroach", "Her shoes", "A book"],
        answerIndex: 1,
        explanation:
          'Looking for her pillow under the bed, around 0:54 she says "Una cucaracha".',
        atSeconds: 54,
      },
      {
        question: "What is the first neighbor doing?",
        options: [
          "Watching football",
          "Dancing flamenco",
          "Singing",
          "Cooking",
        ],
        answerIndex: 1,
        explanation: 'Around 2:20 the neighbor says "Estoy bailando flamenco".',
        atSeconds: 140,
      },
      {
        question: "Why does her friend come to see her?",
        options: [
          "Her boyfriend left her",
          "She lost her job",
          "It is her birthday",
          "She wants to watch football",
        ],
        answerIndex: 0,
        explanation:
          "Around 4:13 the friend says it is very important: she is very sad because her boyfriend left her.",
        atSeconds: 253,
      },
      {
        question: "Why can't she sleep after taking a pill?",
        options: [
          "She took caffeine by mistake",
          "The pill was too small",
          "The neighbors were still dancing",
          "She was hungry",
        ],
        answerIndex: 0,
        explanation:
          'Around 6:00 she realizes "Tomé cafeína" — she took caffeine instead of a sleeping pill.',
        atSeconds: 360,
      },
    ],
  },
  m77OOFdnLfE: {
    questions: [
      {
        question: "What is happening in this video?",
        options: [
          "A nervous woman has a driving lesson and makes many mistakes",
          "A woman teaches her friend to fly a helicopter",
          "Two friends go on a road trip",
          "A woman buys a new car",
        ],
        answerIndex: 0,
        explanation:
          "The instructor keeps correcting her (seat belt, key, mirror, right and left), and she says several times she is nervous (e.g. 0:43).",
        atSeconds: 43,
      },
      {
        question: "What does the instructor ask her to put on first?",
        options: ["Her glasses", "The seat belt", "Her jacket", "The radio"],
        answerIndex: 1,
        explanation:
          "At the start he tells her to put on the belt — the seat belt, not her trouser belt.",
        atSeconds: 33,
      },
      {
        question: "Which key does she try to use first?",
        options: [
          "The car key",
          "Her house key",
          "The office key",
          "The garage key",
        ],
        answerIndex: 1,
        explanation:
          'Around 1:13 she shows "la llave de mi casa", and he says she needs the car key.',
        atSeconds: 73,
      },
      {
        question: "What does she have trouble with when turning?",
        options: [
          "Knowing which way is right",
          "Finding the brake",
          "Seeing the road",
          "Hearing the instructor",
        ],
        answerIndex: 0,
        explanation:
          'Around 2:51 she asks "¿Cuál es la derecha?" (which one is right?).',
        atSeconds: 171,
      },
      {
        question: "How does the instructor go home at the end?",
        options: ["By bus", "By car", "By helicopter", "On foot"],
        answerIndex: 2,
        explanation:
          'When asked, he says not by bus but "en mi helicóptero" (around 4:43).',
        atSeconds: 283,
      },
    ],
  },
  "5zUgZA6_YoU": {
    questions: [
      {
        question: "What is the woman doing in this video?",
        options: [
          "Collecting ingredients to make arepas",
          "Shopping for rice and bread",
          "Cooking a bandeja paisa",
          "Selling arepas at a market",
        ],
        answerIndex: 0,
        explanation:
          'Her arepa is bad, so she decides to make arepas herself, finding flour, milk and an egg, and at 4:17 says "Arepa perfecta".',
        atSeconds: 257,
      },
      {
        question: "What is wrong with the first arepa?",
        options: ["It is cold", "It is bad", "It is too big", "It is burnt"],
        answerIndex: 1,
        explanation: 'Near the start she says "Esta arepa está mala".',
        atSeconds: 22,
      },
      {
        question: "Where does she get the milk?",
        options: [
          "From a shop",
          "From cows",
          "From the fridge",
          "From a neighbor",
        ],
        answerIndex: 1,
        explanation:
          'Around 2:28 she says "Vacas" (cows) and goes with her bottle to get milk.',
        atSeconds: 148,
      },
      {
        question: "Which three ingredients does she use?",
        options: [
          "Rice, bread and milk",
          "Flour, milk and egg",
          "Flour, water and salt",
          "Egg, cheese and rice",
        ],
        answerIndex: 1,
        explanation:
          'Around 3:34 she says "Tengo harina, leche y huevo" before going to the kitchen.',
        atSeconds: 214,
      },
      {
        question: "True or false: she decides to eat rice instead of arepas.",
        options: ["True", "False"],
        answerIndex: 1,
        explanation:
          'Around 1:15 she rejects rice ("Arroz, no") and bandeja paisa, and chooses arepas.',
        atSeconds: 75,
      },
    ],
  },
  "NdQWyeqN-R8": {
    questions: [
      {
        question: "What is the main problem in this video?",
        options: [
          "A tired woman tries many things to stop a baby crying",
          "A baby is sick and goes to the doctor",
          "A woman loses the baby's toys",
          "A baby can't find its mother",
        ],
        answerIndex: 0,
        explanation:
          "She wants to sleep, but the baby cries (0:36), and she tries a stuffed toy, a toy, video games and finally TikTok.",
        atSeconds: 36,
      },
      {
        question: "What is the first thing she gives the baby?",
        options: ["A stuffed animal", "A video game", "A phone", "A bottle"],
        answerIndex: 0,
        explanation: 'Around 1:02 she offers "Un peluche" (a stuffed toy).',
        atSeconds: 62,
      },
      {
        question: "Which animals does the baby like?",
        options: ["Pigeons", "Penguins", "Cats", "Dogs"],
        answerIndex: 1,
        explanation:
          "Around 1:44 the baby says it doesn't like pigeons, it likes penguins.",
        atSeconds: 104,
      },
      {
        question: "What does Adel first suggest?",
        options: [
          "Write to ChatGPT",
          "Call a doctor",
          "Sing a song",
          "Give the baby milk",
        ],
        answerIndex: 0,
        explanation:
          'Around 2:49 Adel says "Escribe a chat GPT", then suggests searching on TikTok.',
        atSeconds: 169,
      },
      {
        question: "What finally makes the baby stop crying?",
        options: ["TikTok videos", "A penguin toy", "Video games", "A song"],
        answerIndex: 0,
        explanation:
          'Around 3:15 she shows the baby TikTok, says "Perfecto", and goes to sleep.',
        atSeconds: 195,
      },
    ],
  },
  NyT5S_PQfpc: {
    questions: [
      {
        question: "What is the story about?",
        options: [
          "A thirsty man finds a genie who gives him exactly what he says, not what he means",
          "A man buys a magic lamp at a shop",
          "A genie asks a man for water",
          "A man and a genie go home together",
        ],
        answerIndex: 0,
        explanation:
          "Andrés wishes for water and gets a tiny bottle, then a big bottle with no water, because the genie follows his exact words (around 2:39 to 4:11).",
        atSeconds: 159,
      },
      {
        question: "Why does Andrés want water at the start?",
        options: [
          "It is very hot",
          "He is sick",
          "He wants to cook",
          "He wants to wash",
        ],
        answerIndex: 0,
        explanation:
          'At the beginning he says "¡Qué calor!" and that he wants water.',
        atSeconds: 8,
      },
      {
        question: "How many wishes does the genie give him?",
        options: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: 'Around 1:58 the genie says "tienes tres deseos".',
        atSeconds: 118,
      },
      {
        question: "What is wrong with the big bottle?",
        options: [
          "It is broken",
          "It has no water",
          "It is too heavy",
          "It is dirty",
        ],
        answerIndex: 1,
        explanation:
          "Around 3:19 Andrés says it is a big bottle, but it has no water.",
        atSeconds: 199,
      },
      {
        question: "What does the genie give him for his last wish, to go home?",
        options: ["A car", "A map", "A telephone", "A plane ticket"],
        answerIndex: 2,
        explanation:
          'Around 5:08 the genie gives him "un teléfono" and says goodbye, instead of taking him home.',
        atSeconds: 308,
      },
    ],
  },
  "5JqCG5mKt38": {
    questions: [
      {
        question: "What is this video mainly about?",
        options: [
          "Andrea introduces her friend Calcetín, a sock, and tells his story",
          "Andrea buys new socks in Canada",
          "Andrea travels to the Philippines",
          "Andrea teaches how to make coffee",
        ],
        answerIndex: 0,
        explanation:
          "At the start Andrea says Calcetín is a sock, and she explains where she got him and that he is her friend (0:31 onward).",
        atSeconds: 31,
      },
      {
        question: "Where is Andrea from?",
        options: ["Canada", "Mexico", "Peru", "Brazil"],
        answerIndex: 1,
        explanation:
          'Around 0:52 she says "Yo soy mexicana", while Calcetín is Canadian.',
        atSeconds: 52,
      },
      {
        question: "What color is Calcetín?",
        options: ["Blue", "Red", "Green", "White"],
        answerIndex: 1,
        explanation:
          'Around 3:31 she says Calcetín is red ("de color rojo") and very long.',
        atSeconds: 211,
      },
      {
        question: "Which country did Calcetín visit but Andrea did not?",
        options: ["Canada", "Mexico", "The Philippines", "The United States"],
        answerIndex: 2,
        explanation:
          "Around 5:40 she says Calcetín went to the Philippines but she didn't.",
        atSeconds: 340,
      },
      {
        question:
          "How does Calcetín feel when the other sock wants to have a coffee with him?",
        options: ["Very nervous", "Angry", "Bored", "Sad"],
        answerIndex: 0,
        explanation:
          'Around 9:22 Andrea says "calcetín está nervioso, muy nervioso".',
        atSeconds: 562,
      },
    ],
  },
  IpD2dWWU2XM: {
    questions: [
      {
        question: "What does Agustina do in this video?",
        options: [
          "She plays 'Where's Wally?' and looks for Wally in three pictures",
          "She goes skiing in the mountains",
          "She takes photos on the beach",
          "She runs a race",
        ],
        answerIndex: 0,
        explanation:
          'At the start she says today we play "dónde está Wally", and at the end she says they found Wally in three photos.',
        atSeconds: 27,
      },
      {
        question: "Where is Agustina from?",
        options: ["Spain", "Mexico", "Argentina", "Colombia"],
        answerIndex: 2,
        explanation: 'Around 0:22 she says "soy de Argentina".',
        atSeconds: 22,
      },
      {
        question: "Where is the first picture?",
        options: ["A beach", "A mountain", "A city", "A race track"],
        answerIndex: 0,
        explanation:
          'Around 0:58 she says "esto es una playa" with the sea and sand.',
        atSeconds: 58,
      },
      {
        question: "What is the weather like in the second picture?",
        options: ["Hot and sunny", "Cold, with lots of snow", "Rainy", "Windy"],
        answerIndex: 1,
        explanation:
          "Around 4:00 she says there are mountains with lots of snow and it is cold.",
        atSeconds: 240,
      },
      {
        question: "What is Wally wearing in the last picture?",
        options: [
          "A red and white striped sweater",
          "A blue jacket",
          "A black hat only",
          "A green T-shirt",
        ],
        answerIndex: 0,
        explanation:
          "Around 9:56 she describes Wally with his camera, glasses, hat and a sweater with red and white stripes.",
        atSeconds: 596,
      },
    ],
  },
  gjOdUIpyus0: {
    questions: [
      {
        question: "What is the topic of this video?",
        options: [
          "The speaker's ideal life, the life of her dreams",
          "The speaker's daily routine",
          "A trip around the world",
          "How to plant fruit trees",
        ],
        answerIndex: 0,
        explanation:
          'At the start she says she will talk about her ideal life, "la vida de mis sueños".',
        atSeconds: 0,
      },
      {
        question: "Where would her ideal house be?",
        options: [
          "In a big city",
          "In the countryside",
          "On the beach",
          "In the mountains of Mexico",
        ],
        answerIndex: 1,
        explanation:
          'Around 0:30 she says her house would be big and pretty, "en el campo", in nature.',
        atSeconds: 30,
      },
      {
        question: "Which animals would she have in her garden?",
        options: [
          "A cat and a horse",
          "A dog and a donkey",
          "Two dogs",
          "A donkey and a cow",
        ],
        answerIndex: 1,
        explanation:
          "Around 1:50 she says she would have a little dog and a little donkey, and that she loves donkeys.",
        atSeconds: 110,
      },
      {
        question: "Why would she have a cook?",
        options: [
          "She doesn't like cooking",
          "She has no kitchen",
          "Her husband can't cook",
          "She works too much",
        ],
        answerIndex: 0,
        explanation:
          'Around 4:30 she says she would never cook because "no me gusta cocinar".',
        atSeconds: 272,
      },
      {
        question: "In her ideal life, where would her friends live?",
        options: [
          "In Spain, close to her",
          "All over the world",
          "In Argentina",
          "In her house",
        ],
        answerIndex: 0,
        explanation:
          "Around 4:54 she says some friends live far away, but in her ideal life they would live in Spain, nearby.",
        atSeconds: 294,
      },
    ],
  },
  aelWcJxodNw: {
    questions: [
      {
        question: "What is the story about?",
        options: [
          "Nicolás hates his job, so he teaches a monkey to do it and moves to the beach",
          "Nicolás works at a zoo with monkeys",
          "Nicolás finds a new job in Punta Cana",
          "Nicolás buys a monkey as a pet",
        ],
        answerIndex: 0,
        explanation:
          "Nicolás hates his boring office job, steals a monkey, teaches it his work, and then goes to live at the beach (around 4:06).",
        atSeconds: 246,
      },
      {
        question: "Where does Nicolás work?",
        options: ["In a shop", "In an office", "In a zoo", "In a school"],
        answerIndex: 1,
        explanation:
          "Around 0:31 the narrator says Nicolás works in an office every day.",
        atSeconds: 31,
      },
      {
        question: "What does Nicolás do at work?",
        options: [
          "He sells clothes",
          "He writes emails and makes phone calls",
          "He feeds animals",
          "He drives a bus",
        ],
        answerIndex: 1,
        explanation:
          "Around 1:09 he turns on the computer, writes emails and makes phone calls.",
        atSeconds: 69,
      },
      {
        question: "Where does Nicolás get the monkey?",
        options: [
          "From a pet shop",
          "From the zoo",
          "From a friend",
          "From the beach",
        ],
        answerIndex: 1,
        explanation:
          "Around 2:29 the narrator says at night Nicolás goes to the zoo and steals a monkey.",
        atSeconds: 149,
      },
      {
        question: "Where does Nicolás go to live at the end?",
        options: [
          "Punta Cana, at the beach",
          "In the mountains",
          "At the zoo",
          "In a new office",
        ],
        answerIndex: 0,
        explanation:
          "Around 4:06 he goes to live in Punta Cana, at the beach, and never has to work again.",
        atSeconds: 246,
      },
    ],
  },
  xFXUVEnKZlc: {
    questions: [
      {
        question: "¿Cuál es el objetivo principal del vídeo?",
        options: [
          "Enseñar a pronunciar el español con acento argentino",
          "Comparar cómo se llaman los mismos objetos en Argentina, México, España y Colombia",
          "Explicar la historia de la ropa vaquera",
          "Hablar sobre viajes a distintos países hispanohablantes",
        ],
        answerIndex: 1,
        explanation:
          "Al principio Agustina explica que van a ver la foto de un objeto y comparar su nombre en los cuatro países de las participantes.",
        atSeconds: 75,
      },
      {
        question:
          'Según Alma, ¿por qué en España suena raro llamar "audífonos" a los auriculares?',
        options: [
          "Porque es una palabra muy antigua",
          "Porque en España un audífono es el aparato para personas que no oyen bien",
          'Porque en España solo se usa "cascos"',
          "Porque es una palabra que viene de México",
        ],
        answerIndex: 1,
        explanation:
          "Alma explica que en España un audífono es lo que se pone alguien que no oye bien, por eso bromea con que ella no está sorda.",
        atSeconds: 297,
      },
      {
        question: '¿Qué es una "alberca" en España, según Alma?',
        options: [
          "Una piscina pública grande",
          "Un depósito de agua para regar el huerto",
          "Un lugar para lavar la ropa",
          "Una piscina pequeña para niños",
        ],
        answerIndex: 1,
        explanation:
          "Alma cuenta que en España una alberca contiene agua para regar el huerto o la cosecha, como la de su abuelo, donde ella aprendió a nadar.",
        atSeconds: 776,
      },
      {
        question:
          '¿Por qué a Agustina le parece horrible la palabra española "frigorífico"?',
        options: [
          "Porque en Argentina es el lugar donde se guarda la carne de las vacas después de matarlas",
          "Porque suena demasiado formal",
          "Porque en Argentina significa congelador",
          "Porque no se puede pronunciar bien",
        ],
        answerIndex: 0,
        explanation:
          "Agustina explica que en Argentina un frigorífico es el lugar donde matan a las vacas y guardan la carne fría antes de llevarla a la carnicería.",
        atSeconds: 853,
      },
      {
        question:
          '¿Qué opinan casi todas las participantes sobre la palabra mexicana "puberto"?',
        options: [
          "Que es la palabra más bonita del vídeo",
          "Que es muy formal pero correcta",
          "Que suena fea, casi como un insulto",
          "Que también se usa mucho en España",
        ],
        answerIndex: 2,
        explanation:
          "Alma dice que es la palabra más horrible que ha oído, y las demás coinciden en que llamar así a alguien suena feo, como un insulto.",
        atSeconds: 1608,
      },
    ],
  },
  "Nvcr_dvP-S0": {
    questions: [
      {
        question: "¿Cuál es el propósito principal del vídeo de Agustina?",
        options: [
          "Recomendar las mejores aerolíneas low cost de Europa",
          "Explicar las estrategias que permiten a las aerolíneas low cost vender pasajes tan baratos",
          "Criticar a las aerolíneas low cost por el mal trato a los pasajeros",
          "Contar su experiencia personal como piloto en una aerolínea low cost",
        ],
        answerIndex: 1,
        explanation:
          "Al principio anuncia que va a explicar las medidas o decisiones que toman estas aerolíneas para vender pasajes a un precio tan barato, y el resto del vídeo repasa esas medidas una por una.",
        atSeconds: 51,
      },
      {
        question:
          "Según Agustina, ¿por qué conviene a una aerolínea low cost tener una flota formada por un solo modelo de avión?",
        options: [
          "Porque los aviones iguales consumen menos combustible",
          "Porque así los pasajeros se sienten más seguros",
          "Porque se reducen los costes de formación, mantenimiento y operación",
          "Porque los fabricantes ofrecen descuentos por comprar muchos aviones",
        ],
        answerIndex: 2,
        explanation:
          "Explica que con un solo tipo de avión basta un tipo de entrenamiento para pilotos y tripulantes, y los mecánicos solo tienen que conocer un modelo, así que los gastos son mucho menores.",
        atSeconds: 87,
      },
      {
        question:
          "¿Qué hacen muchas aerolíneas low cost con un avión que no va a volar por la noche, y por qué?",
        options: [
          "Lo dejan en el aeropuerto principal porque es más seguro",
          'Lo llevan vacío a un aeropuerto pequeño porque allí "dormir" cuesta mucho menos',
          "Lo alquilan a otra aerolínea para vuelos nocturnos",
          "Lo mandan a mantenimiento aprovechando que no vuela",
        ],
        answerIndex: 1,
        explanation:
          "Cuenta que hacen vuelos ferry con el avión vacío hacia un aeropuerto más pequeño para que el avión duerma allí, porque en aeropuertos grandes como Ezeiza no hay lugar o es carísimo.",
        atSeconds: 537,
      },
      {
        question:
          "Hacia el final, Agustina menciona otra desventaja que ella misma vivió en Ámsterdam. ¿Cuál fue?",
        options: [
          "Su vuelo salió a la una de la mañana",
          "Tuvo que pagar extra por la tarjeta de embarque",
          "Tuvo que caminar media hora hasta una puerta oscura en un subsuelo",
          "Tuvo que tomar un bus bajo la lluvia hasta el avión",
        ],
        answerIndex: 2,
        explanation:
          "Al final añade que las low cost tienen las peores puertas: en Ámsterdam caminó media hora hasta la puerta de Ryanair, que estaba en un subsuelo, todo oscuro.",
        atSeconds: 853,
      },
      {
        question:
          "¿Qué postura adopta Agustina ante el hecho de que las low cost cobren por todo (asiento, maleta, comida)?",
        options: [
          "Lo considera un abuso que debería prohibirse",
          "Lo comprende: con un billete tan barato no se puede incluir todo, y además ahorra peso y tiempo en tierra",
          "Le resulta indiferente porque nunca vuela en aerolíneas low cost",
          "Cree que solo lo hacen para engañar a los pasajeros con precios falsos",
        ],
        answerIndex: 1,
        explanation:
          'Reconoce que al pasajero le puede parecer mal, pero dice que es "entendible" si pagas 20 euros, y luego añade razones operativas: menos peso significa menos combustible y menos equipaje acelera la salida del avión.',
        atSeconds: 615,
      },
    ],
  },
  "-juyR8dX2fw": {
    questions: [
      {
        question: "¿Cómo presenta la propia hablante este vídeo?",
        options: [
          "Una guía completa de los museos de Madrid",
          "Una pequeña introducción a Madrid para que el público le diga qué temas le interesan",
          "Una clase de historia sobre la Reconquista de Toledo",
          "Un reportaje sobre la vida nocturna madrileña",
        ],
        answerIndex: 1,
        explanation:
          "Hacia el final dice que le gustaría dejar este vídeo como pequeña introducción de Madrid y pide a los espectadores que le digan qué les interesa, para dedicar vídeos a cada tema.",
        atSeconds: 531,
      },
      {
        question:
          'Según la hablante, ¿qué hace falta para ser considerado "gato" o "gata"?',
        options: [
          "Basta con haber nacido en Madrid",
          "Haber nacido, crecido y vivido en Madrid durante al menos treinta años",
          "Que tres generaciones anteriores a ti también hayan nacido, crecido y vivido en Madrid",
          "Saber bailar el chotis y vestirse de chulapo",
        ],
        answerIndex: 2,
        explanation:
          "Explica que no basta con haber nacido, crecido y vivido en Madrid: hace falta que tres generaciones más hayan hecho lo mismo.",
        atSeconds: 101,
      },
      {
        question: "¿Qué rasgo del chotis destaca la hablante?",
        options: [
          "Que lo bailan solo los niños en el colegio",
          "Que es la mujer quien dirige al hombre durante todo el baile",
          "Que es un baile de origen árabe",
          "Que se baila únicamente en Navidad",
        ],
        answerIndex: 1,
        explanation:
          "Al hablar del chotis de San Isidro comenta que lo bailan chulapos y chulapas y que en todo momento es la mujer quien dirige al hombre.",
        atSeconds: 395,
      },
      {
        question:
          "¿Cómo justifica la hablante la afición española a los bares, que menciona casi al final?",
        options: [
          "Dice que son más baratos que los restaurantes",
          'Reconoce que gustan "demasiado", pero los defiende como un lugar social de encuentro y reunión',
          "Afirma que es una costumbre que está desapareciendo",
          "Explica que los bares son el principal atractivo turístico de Madrid",
        ],
        answerIndex: 1,
        explanation:
          "Admite con humor que a los españoles les gusta demasiado ir de bares, pero matiza que es algo muy social, un lugar de encuentro y de reunión.",
        atSeconds: 598,
      },
      {
        question:
          "¿Qué actitud muestra la hablante respecto a la historia del muchacho que escaló la muralla?",
        options: [
          "La presenta como un hecho histórico documentado sin ninguna duda",
          "La cuenta con cierta reserva: admite que tiene la historia oxidada y que quizá sea una leyenda urbana",
          "La rechaza por considerarla ofensiva para los madrileños",
          "La considera más importante que el chotis o San Isidro",
        ],
        answerIndex: 1,
        explanation:
          'Tras narrarla duda de si la ciudad era Toledo, reconoce que tiene la historia "un poco oxidada" y añade que a lo mejor es una leyenda urbana.',
        atSeconds: 262,
      },
    ],
  },
};

// ---- Helpers shared by the website and the app ------------------------

/** A quiz counts as passed at this share of correct answers or more. */
export const VIDEO_QUIZ_PASS = 0.7;
/** "Ready for the next level's videos" once this many quizzes at a level
 * have been taken with at least this average. */
export const READY_MIN_QUIZZES = 5;
export const READY_MIN_AVERAGE = 0.8;

export const QUIZ_MIN_QUESTIONS = 3;
export const QUIZ_MAX_QUESTIONS = 8;

export function quizFor(videoId: string): VideoQuiz | undefined {
  const quiz = VIDEO_QUIZZES[videoId];
  return quiz && quiz.questions.length > 0 ? quiz : undefined;
}

const LESSON_LEVEL_PATH: Record<string, SpanishLevelPath> = {
  A1: "a1",
  A2: "a2",
  B1: "b1",
  B2: "b2",
  C1: "c1",
  C2: "c2",
  "C1/C2": "c1",
};

/** The level a video is listed at: its level page's watch list, or the
 * level of the lesson it follows. */
export function videoLevel(videoId: string): SpanishLevelPath | undefined {
  for (const [path, videos] of Object.entries(LEVEL_WATCH_VIDEOS)) {
    if (videos?.some((v) => v.videoId === videoId))
      return path as SpanishLevelPath;
  }
  for (const [level, byLesson] of Object.entries(LESSON_VIDEOS)) {
    if (Object.values(byLesson ?? {}).some((v) => v.videoId === videoId))
      return LESSON_LEVEL_PATH[level];
  }
  return undefined;
}

export function findVideo(videoId: string): LessonVideo | undefined {
  for (const videos of Object.values(LEVEL_WATCH_VIDEOS)) {
    const v = videos?.find((x) => x.videoId === videoId);
    if (v) return v;
  }
  for (const byLesson of Object.values(LESSON_VIDEOS)) {
    const v = Object.values(byLesson ?? {}).find((x) => x.videoId === videoId);
    if (v) return v;
  }
  return undefined;
}

/** Quiz text is English for A1/A2 videos, Spanish from B1 up. */
export function quizInEnglish(videoId: string): boolean {
  const level = videoLevel(videoId);
  return level === "a1" || level === "a2";
}

/** The interface words around a quiz, in the quiz's language. */
export function quizStrings(english: boolean) {
  return english
    ? {
        heading: "Check your understanding",
        trueFalse: "True or false?",
        correct: "Correct!",
        wrong: "Not quite.",
        rewatch: "Rewatch at",
        next: "Next question",
        finish: "See your score",
        retry: "Try again",
        close: "Close",
        questionOf: (n: number, total: number) => `Question ${n} of ${total}`,
        score: (c: number, t: number) => `You got ${c} of ${t} right.`,
        passed: "Well done, you followed this video.",
        notPassed: "Watch it again and see what you catch the second time.",
      }
    : {
        heading: "Comprueba lo que has entendido",
        trueFalse: "¿Verdadero o falso?",
        correct: "¡Correcto!",
        wrong: "No exactamente.",
        rewatch: "Volver a ver en",
        next: "Siguiente pregunta",
        finish: "Ver tu resultado",
        retry: "Intentar de nuevo",
        close: "Cerrar",
        questionOf: (n: number, total: number) => `Pregunta ${n} de ${total}`,
        score: (c: number, t: number) => `Has acertado ${c} de ${t}.`,
        passed: "¡Muy bien! Has seguido el vídeo.",
        notPassed:
          "Vuelve a verlo y fíjate en lo que entiendes la segunda vez.",
      };
}

const TRUE_FALSE = [
  ["True", "False"],
  ["Verdadero", "Falso"],
];

/** A two-option True/False (or Verdadero/Falso) question. */
export function isTrueFalse(q: VideoQuizQuestion): boolean {
  return q.options.length === 2;
}

/** 95 -> "1:35". */
export function formatTimestamp(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function videoUrlAt(videoId: string, seconds: number): string {
  return `https://www.youtube.com/watch?v=${videoId}&t=${Math.max(0, Math.floor(seconds))}s`;
}

export type VideoQuizResult = {
  correct: number;
  total: number;
  finishedAt: number;
};

export function quizPassed(r: VideoQuizResult): boolean {
  return r.total > 0 && r.correct / r.total >= VIDEO_QUIZ_PASS;
}

/** Every video listed at a level (watch list and lesson videos) that has
 * a quiz. */
export function quizVideoIdsAtLevel(level: SpanishLevelPath): string[] {
  const ids = new Set<string>();
  for (const v of LEVEL_WATCH_VIDEOS[level] ?? [])
    if (quizFor(v.videoId)) ids.add(v.videoId);
  for (const [lessonLevel, byLesson] of Object.entries(LESSON_VIDEOS)) {
    if (LESSON_LEVEL_PATH[lessonLevel] !== level) continue;
    for (const v of Object.values(byLesson ?? {}))
      if (quizFor(v.videoId)) ids.add(v.videoId);
  }
  return [...ids];
}

export type ListeningSummary = {
  /** Quizzes at this level. 0 means there's nothing to summarize. */
  available: number;
  taken: number;
  passed: number;
  /** Mean share correct over the quizzes taken, 0-1. */
  average: number;
  readyForNext: boolean;
};

export function listeningSummary(
  level: SpanishLevelPath,
  results: Readonly<Record<string, VideoQuizResult | undefined>>,
): ListeningSummary {
  const ids = quizVideoIdsAtLevel(level);
  const taken = ids
    .map((id) => results[id])
    .filter((r): r is VideoQuizResult => !!r && r.total > 0);
  const average = taken.length
    ? taken.reduce((sum, r) => sum + r.correct / r.total, 0) / taken.length
    : 0;
  return {
    available: ids.length,
    taken: taken.length,
    passed: taken.filter(quizPassed).length,
    average,
    readyForNext:
      level !== "c2" &&
      taken.length >= READY_MIN_QUIZZES &&
      average >= READY_MIN_AVERAGE,
  };
}

// ---- Content check (npm run check-content) ----------------------------

export function checkVideoQuizzes(): string[] {
  const problems: string[] = [];
  for (const [videoId, quiz] of Object.entries(VIDEO_QUIZZES)) {
    const where = `videoQuizzes.ts "${videoId}"`;
    if (!findVideo(videoId))
      problems.push(`${where}: not a videoId in lessonVideos.ts`);
    const n = quiz.questions.length;
    if (n < QUIZ_MIN_QUESTIONS || n > QUIZ_MAX_QUESTIONS) {
      problems.push(
        `${where}: has ${n} questions (want ${QUIZ_MIN_QUESTIONS}-${QUIZ_MAX_QUESTIONS})`,
      );
    }
    const english = quizInEnglish(videoId);
    const tf = english ? TRUE_FALSE[0] : TRUE_FALSE[1];
    quiz.questions.forEach((q, i) => {
      const at = `${where} question ${i + 1}`;
      if (!q.question.trim()) problems.push(`${at}: no question`);
      if (!q.explanation.trim()) problems.push(`${at}: no explanation`);
      if (
        q.atSeconds !== undefined &&
        !(Number.isInteger(q.atSeconds) && q.atSeconds >= 0)
      ) {
        problems.push(`${at}: atSeconds must be a whole number of seconds`);
      }
      if (q.options.length === 2) {
        if (q.options[0] !== tf[0] || q.options[1] !== tf[1]) {
          problems.push(
            `${at}: a two-option question must be exactly ["${tf[0]}", "${tf[1]}"]`,
          );
        }
      } else if (q.options.length < 3 || q.options.length > 4) {
        problems.push(
          `${at}: has ${q.options.length} options (want 3-4, or True/False)`,
        );
      }
      if (
        !Number.isInteger(q.answerIndex) ||
        q.answerIndex < 0 ||
        q.answerIndex >= q.options.length
      ) {
        problems.push(`${at}: answerIndex ${q.answerIndex} is out of range`);
      }
      if (
        new Set(q.options.map((o) => o.trim().toLowerCase())).size !==
        q.options.length
      ) {
        problems.push(`${at}: repeats an option`);
      }
    });
  }
  return problems;
}
