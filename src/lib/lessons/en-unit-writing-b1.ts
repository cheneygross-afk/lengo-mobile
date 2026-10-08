// Synced from cheneygross-afk/lengo:src/lib/lessons/en-unit-writing-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each EN-B1 unit's review lesson (en-unit-reviews.ts),
// keyed by unit id as in en-b1.ts ("u01" to "u35"). Prompt, rubric and
// explanation in English, with English target forms in "double quotes",
// Spanish words in «guillemets» and a learner's wrong English unquoted after
// an asterisk; the model answer in English. Each task only needs the grammar
// and words of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [80, 140], rubric, modelAnswer, explanation);

export const EN_B1_UNIT_WRITING: Record<string, WriteExercise> = {
  u01: t(
    "Write an email to a friend you haven't seen for a long time. Tell them what you have been doing recently: your job or studies, a hobby you have been practicing and where you have been living.",
    [
      "At least three verbs in the present perfect continuous (\"I've been working\")",
      "\"for\" with a period of time and \"since\" with a starting point",
      "A question with \"How long have you been...?\"",
      "The present perfect simple with a state verb (\"I've known\", \"I've had\"), not the continuous",
    ],
    "Hi Lucia,\n\nIt's been ages! I've been working at a new company since March, and I really like it. I've been learning to play the guitar for about six months, so my neighbors have heard a lot of noise! I've also been living in a new apartment near the river since the summer. It's small, but I've had a great view from day one. My brother has been staying with me for two weeks because he's looking for a job here. What about you? How long have you been living in Toronto now? Write soon!\n\nCarlos",
    "Spanish says «llevo seis meses aprendiendo» or «estudio aquí desde marzo», but English needs the present perfect continuous: \"I've been learning for six months\", not *I learn since six months. State verbs like \"know\" and \"have\" (possession) stay simple: \"I've known her for years\"."
  ),
  u02: t(
    "Write a short post for a travel blog about the places you have visited. Talk about your experiences in general, then describe one trip in detail: when you went, what you did and what happened.",
    [
      "The present perfect for experiences with no time (\"I've been to\", \"I've never tried\")",
      "\"ever\", \"never\", \"already\" or \"yet\" at least twice",
      "The past simple for the trip with a finished time (\"last year\", \"in 2019\", \"two years ago\")",
      "At least one question to the readers with \"Have you ever...?\"",
    ],
    "I love traveling, and I've been to eleven countries so far. I've slept in a tent in the desert, I've swum in three different oceans and I've tried some very strange food. But I've never been to Asia, and I haven't learned to ski yet!\n\nMy favorite trip was to Peru. I went there two years ago with my sister. We spent a week in Cusco and then we walked to Machu Picchu. It took four days. On the last morning we got up at four, and when we arrived, the clouds disappeared. It was the best moment of my life.\n\nHave you ever done a long walk like that?",
    "Use the present perfect when the time is not said or is still open (\"I've been to eleven countries\"). As soon as you say when, switch to the past simple: \"I went there two years ago\", not *I have gone there two years ago."
  ),
  u03: t(
    "Tell the story of a day when something went wrong: you missed a train, lost something or got lost. Set the scene, say what happened and explain what had happened before.",
    [
      "The past continuous to set the scene (\"It was raining\", \"I was walking\")",
      "The past simple for the main events",
      "The past perfect for something that happened earlier (\"I had left my keys\")",
      "Time words like \"when\", \"while\", \"suddenly\" or \"by the time\"",
    ],
    "Last winter I had a terrible morning. It was raining and I was running to the station because I had an important interview at nine. When I got to the platform, the train was leaving. I had missed it by ten seconds! While I was waiting for the next one, I looked in my bag and realized I had left my phone at home. I couldn't call the company. By the time I arrived, the interview had already started. Luckily, the manager was very kind. She listened to my story, laughed and gave me the job anyway.",
    "The past perfect shows an earlier past: \"I realized I had left my phone\" (first I left it, then I realized). The past continuous paints the background, while the past simple moves the story forward: \"I was running when the train left\"."
  ),
  u04: t(
    "Compare your life as a child with your life now. Write about where you lived, what you used to do on weekends and something new in your life that you are getting used to.",
    [
      "\"used to\" + base verb for past habits and states, and \"didn't use to\" once",
      "\"would\" for at least one repeated action in the past",
      "\"be used to\" or \"get used to\" + noun or -ing",
      "\"not anymore\" or \"no longer\" to contrast with now",
    ],
    "When I was a child, we used to live in a small village by the sea. I didn't use to watch much TV because I was always outside. On Saturdays my grandfather would take me fishing, and on Sundays we would have a big lunch with all the family. Life was very slow.\n\nNow I live in a big city and everything is different. I don't go fishing anymore, and I work in an office all day. I'm used to the noise now, but I'm still getting used to the long commute. I'm also getting used to cooking for myself!",
    "\"used to\" + base verb is only for the past (\"I used to live\"). For something that is normal now, use \"be used to\" + -ing: \"I'm used to working late\", not *I use to work late. Spanish «soler» in the present is usually just \"usually\"."
  ),
  u05: t(
    "A friend is visiting your city next month. Write them a message about your plans for the visit, what you predict about the weather and what you will be doing or will have done by then.",
    [
      "\"be going to\" or the present continuous for plans and arrangements",
      "\"will\" for a prediction, an offer or a quick decision",
      "The present simple for a timetable (\"the museum opens at ten\")",
      "One example of the future continuous or the future perfect",
    ],
    "Hi Emma!\n\nI'm so happy you're coming! Your flight lands at six on Friday, right? I'll pick you up at the airport. On Saturday we're having lunch with my parents, and in the afternoon I'm going to show you the old town. The cathedral closes at five, so we need to go early. I think it'll be sunny, but bring a jacket because it gets cold at night.\n\nOn Monday I'll be working until three, but by then I'll have finished my big project, so I'll be free all week. I can't wait!\n\nDiego",
    "English uses different futures for different ideas: an arrangement with a time is \"we're having lunch\", a plan is \"I'm going to show you\", and a promise or offer is \"I'll pick you up\". Avoid *I pick you up for the future: use \"I'll pick you up\"."
  ),
  u06: t(
    "You are lending your apartment to a friend for a week. Write a note with instructions: what to do when they arrive, what to do if there is a problem and what to take in case something happens.",
    [
      "Time clauses with the present simple (\"when you arrive\", \"as soon as you get in\")",
      "A first conditional (\"If the heating doesn't work, call...\")",
      "\"unless\" at least once",
      "\"in case\" at least once",
    ],
    "Hi Tom,\n\nWelcome! When you arrive, the keys will be under the blue plant pot. As soon as you get in, please turn off the alarm. The code is 1234. If the heating doesn't work, call Mr. Smith on the second floor. He'll help you. Don't open the balcony door unless it's really hot, because the cat likes to escape! Take an umbrella when you go out, in case it rains. It changes very quickly here. Before you leave on Sunday, please water the plants and leave the keys with Mr. Smith. Enjoy your stay!\n\nSofia",
    "After \"when\", \"as soon as\", \"if\", \"unless\" and \"in case\" English uses the present, even for the future: \"when you arrive\", not *when you will arrive. Spanish uses the subjunctive here («cuando llegues»), but English does not."
  ),
  u07: t(
    "Write a short biography of someone you admire (a relative, a teacher or a friend). Talk about their past, what they have done in their life, what they are doing now and their plans for the future.",
    [
      "The past simple and past continuous for the past",
      "The present perfect or present perfect continuous for life up to now",
      "The present simple or continuous for their life now",
      "At least one future form (\"is going to\", \"will\", \"is starting\")",
    ],
    "My aunt Ana is the person I admire most. She grew up on a farm, and when she was fifteen she was working in a shop after school to help her parents. Later she moved to the city and studied nursing.\n\nShe has worked in the same hospital for thirty years, and she has helped thousands of people. For the last two years she has been teaching young nurses, and she loves it. Now she lives in a small house with a garden and two dogs.\n\nNext year she's going to retire, but she won't stop. She's planning to volunteer for a charity in Africa. I think she'll be great at it.",
    "Choose the tense by the time you are talking about: finished past (\"she grew up\"), life up to now (\"she has worked there for thirty years\"), now (\"she lives\") and the future (\"she's going to retire\"). Don't use the present for a duration: not *she works there for thirty years."
  ),
  u08: t(
    "Imagine you won a big prize: a free year with no work and plenty of money. Write about what you would do, where you would go and how your life would be different.",
    [
      "Second conditionals with \"If I had...\" / \"If I won...\" + \"I would\"",
      "\"were\" in \"If I were...\" at least once",
      "\"would\" in the main clause, never in the \"if\" clause",
      "\"could\" or \"might\" for a possibility",
    ],
    "If I had a whole year with no work, I would travel around South America first. I would start in Mexico and go south by bus, because if I flew everywhere, I wouldn't see the real countries. If I had enough time, I might learn to surf in Peru.\n\nAfter that, I would come home and do something useful. I could volunteer at an animal shelter, or I might help my old school. If I were braver, I would write a book about my trip!\n\nOf course, my life would be very different. I wouldn't get up at six every day, and I would be much less stressed.",
    "The second conditional is \"if\" + past simple, then \"would\" + base verb: \"If I had time, I would travel\". Spanish uses «tuviera», but English never puts \"would\" after \"if\": not *If I would have time."
  ),
  u09: t(
    "Write about a decision in your past that changed your life, or a mistake you regret. Explain what would have happened if things had been different, and add a wish about the past or the present.",
    [
      "At least two third conditionals (\"If I had..., I would have...\")",
      "\"I wish\" or \"If only\" + past perfect for a regret",
      "\"I wish\" + past simple for a present situation",
      "The past simple to tell what really happened",
    ],
    "Ten years ago I failed my driving test, so I took the train to work every day. On the train I met Diego, who is now my husband. If I had passed the test, I would have driven to work, and I would never have met him! So I'm happy I failed.\n\nBut I do have one regret. At school I stopped studying French because it was hard. I wish I hadn't stopped. If I had continued, I could have worked in Paris for a year when my company offered me a job there. I wish I spoke another language now. If only I had been more patient!",
    "The third conditional imagines a different past: \"If I had passed, I would have driven\". For regrets, use \"I wish\" + past perfect (\"I wish I hadn't stopped\"); for the present, \"I wish\" + past simple (\"I wish I spoke French\"), not *I wish I speak."
  ),
  u10: t(
    "Write advice for a friend who is moving to a new country next month. Give real tips, imagine some situations and tell them what you learned from your own experience.",
    [
      "A zero conditional for a general truth (\"If you..., you...\")",
      "A first conditional for a real possibility",
      "A second conditional for advice (\"If I were you, I would...\")",
      "A third conditional about your own past",
    ],
    "Moving abroad is exciting, but it's not easy. If you don't speak the language, everything takes twice as long, so start studying now. If you open a bank account in the first week, you'll find an apartment more easily. If I were you, I would join a sports club or a language exchange, because that's the fastest way to make friends.\n\nWhen I moved to Dublin, I didn't know anyone for months. If I had joined a club earlier, I wouldn't have felt so lonely. And if you feel homesick, don't worry. It happens to everybody, and it gets better!",
    "Each conditional has its own job: zero for things that are always true, first for real future situations, second for advice and imaginary present, and third for an imaginary past. Remember: no \"will\" or \"would\" after \"if\"."
  ),
  u11: t(
    "A new student is joining your school or a new colleague is starting at your workplace. Write a message explaining the rules: what they must do, what they don't have to do, what they can't do and some advice.",
    [
      "\"have to\" or \"must\" for obligation",
      "\"don't have to\" for something that is not necessary",
      "\"mustn't\" or \"can't\" for a prohibition",
      "\"should\", \"ought to\" or \"had better\" for advice",
    ],
    "Hi Sofia, welcome to the team!\n\nHere are the main rules. You have to sign in at reception every morning, and you must wear your ID card all the time. You don't have to wear a suit, so casual clothes are fine. You mustn't use your phone in the lab, and you can't eat at your desk, only in the kitchen.\n\nSome advice: you should bring your own mug, because there are never enough. You'd better arrive early on Monday, because there's a team meeting at nine. And you ought to talk to Tom in IT. He's very helpful.\n\nSee you soon!",
    "\"don't have to\" means «no hace falta», not «no debes»: \"You don't have to wear a suit\". For a prohibition use \"mustn't\" or \"can't\". After \"must\", \"should\" and \"had better\" there is no \"to\": not *you must to wear."
  ),
  u12: t(
    "You come home and find your house in a strange state: the door is open, there is food on the table and the cat is missing. Write what you think must have happened, might have happened or can't have happened.",
    [
      "\"must\" or \"must have\" for a strong deduction",
      "\"might\", \"may\" or \"could\" (have) for a possibility",
      "\"can't\" or \"can't have\" for something impossible",
      "\"be able to\" or \"could\" for ability at least once",
    ],
    "When I got home yesterday, the front door was open. Somebody must have opened it with a key, because it wasn't broken. It can't have been a thief, because my laptop was still there. There was half a pizza on the table, so it might have been my brother. He has a key, and he can't resist pizza!\n\nBut the cat was missing. She could have escaped through the door, or she may be hiding under the bed. I called her, but I wasn't able to find her. Then my brother texted me: \"Sorry, I took the cat to the vet!\" Mystery solved.",
    "For deductions about the past, use modal + \"have\" + past participle: \"he must have opened it\", \"it can't have been a thief\". Spanish says «debe de haber sido», but English does not use \"to\": not *must to have been."
  ),
  u13: t(
    "Write an email to your landlord or your manager. You need to ask for permission for something and make two polite requests. Be clear but polite.",
    [
      "A polite request with \"Could you...?\" or \"Would you mind + -ing?\"",
      "A request for permission with \"Could I...?\" or \"Would it be OK if I...?\"",
      "\"Do you mind if I...?\" or \"I was wondering if...\"",
      "A polite opening and closing",
    ],
    "Dear Mr. Brown,\n\nI hope you are well. I'm writing because I have a couple of small problems in the apartment. Could you send someone to look at the kitchen tap? It has been leaking for a week. Would you mind also checking the heating before the winter? It makes a strange noise at night.\n\nI also have a question. My sister is coming to stay for a month in November. Would it be OK if she stayed with me? I was wondering if I could also put a small table on the balcony.\n\nThank you very much for your help.\n\nBest regards,\nLucia Garcia",
    "\"Would you mind\" is followed by -ing (\"Would you mind checking\"), not by \"to\". Polite English often uses past forms to sound softer: \"I was wondering if I could...\" is more polite than \"I want...\"."
  ),
  u14: t(
    "Write a short article about your town or city for a tourist website. Describe its history and some famous places: when they were built, who they were designed by and what is done there today.",
    [
      "The present simple passive (\"is visited\", \"are sold\")",
      "The past simple passive (\"was built\", \"were destroyed\")",
      "\"by\" to say who did the action, at least once",
      "At least one passive with a modal or present perfect (\"can be seen\", \"has been restored\")",
    ],
    "Valencia is a city on the east coast of Spain. It was founded by the Romans more than two thousand years ago. Its famous cathedral was built in the thirteenth century, and its tower can be seen from almost everywhere in the old town.\n\nThe City of Arts and Sciences is very different. It was designed by Santiago Calatrava, and it was opened in 1998. Today it is visited by millions of people every year.\n\nThe Central Market has been restored recently. Fresh fish, fruit and local rice are sold there every morning. And of course, paella was invented here, so don't forget to try it!",
    "The passive is \"be\" + past participle: \"it was built\", \"it is visited\". Spanish often uses «se»: «se construyó en el siglo XIII» becomes \"it was built in the thirteenth century\". Use \"by\" only when the person who did it is important."
  ),
  u15: t(
    "You are getting ready for an important event (a wedding, a party or a new job). Write about the things you are having done by other people and the things you are doing yourself.",
    [
      "\"have something done\" at least three times (\"I'm having my hair cut\")",
      "\"get something done\" at least once",
      "Passive structures like \"it is said that\" or \"he is supposed to\"",
      "A contrast between what you do yourself and what others do for you",
    ],
    "My best friend's wedding is on Saturday, and I'm very busy! Yesterday I had my suit cleaned, and tomorrow I'm having my hair cut at a salon in the center. I also need to get my shoes repaired, because one of them is broken.\n\nI'm doing some things myself, too. I'm writing a speech, which is supposed to be funny. I'm a bit nervous, because it's said that the groom's family is very serious!\n\nThe couple are having the cake made by a famous baker, and they're having the photos taken by a professional. It's going to be a beautiful day.",
    "\"I cut my hair\" means you cut it yourself. If someone else does it for you, say \"I have my hair cut\" or \"I get my hair cut\": \"have\" + object + past participle. Spanish says «me corto el pelo» for both."
  ),
  u16: t(
    "Write a description of your neighborhood for someone who is going to move there. Talk about the people who live there, the places where you can go and the things that make it special.",
    [
      "\"who\" or \"that\" for people",
      "\"which\" or \"that\" for things",
      "\"where\" for places and \"whose\" for possession",
      "At least one relative clause without a pronoun (\"the cafe I like\")",
    ],
    "I live in a quiet neighborhood which is about ten minutes from the center. There's a small square where children play every afternoon, and there's a bakery that sells the best bread in the city.\n\nThe people who live here are very friendly. My neighbor Tom, whose garden is full of flowers, always says hello. There's also an old man who has lived here for sixty years. He knows everyone!\n\nThe place I like most is a little cafe on the corner. The woman who runs it makes amazing cakes. It's a neighborhood where you can really feel at home.",
    "Use \"who\" for people, \"which\" for things and \"that\" for both. When the relative is the object, you can leave it out: \"the place I like\". Don't repeat the object: not *the cafe that I like it."
  ),
  u17: t(
    "Write about a person or a place that is important to you. Give extra information with non-defining relative clauses and add your comments with \"which\" at the end of a sentence.",
    [
      "At least two non-defining relative clauses between commas",
      "\"which\" at the end of a sentence to comment on the whole idea",
      "\"what\" meaning «lo que» (\"What I love is...\")",
      "No \"that\" in non-defining clauses",
    ],
    "My grandmother, who is eighty-five, lives in a small town in the mountains. Her house, which her father built, has a big garden full of fruit trees. I visit her every summer, which is the best part of my year.\n\nWhat I love most about her is her energy. She still walks to the market every day, which surprises everyone. Her best friend, whose name is Rosa, often comes for lunch, and they talk for hours.\n\nWhat I remember most from my childhood is her kitchen. It always smelled of bread, which made me feel safe and happy.",
    "Non-defining clauses add extra information between commas and use \"who\" or \"which\", never \"that\". For Spanish «lo que», use \"what\" (\"What I love is...\") or \", which\" when it refers to a whole sentence, not *that what."
  ),
  u18: t(
    "Write a short story about an unexpected visitor. Mix the grammar of the first half of B1: narrative tenses, a conditional, a modal of deduction, a passive and a relative clause.",
    [
      "Narrative tenses (past simple, past continuous, past perfect)",
      "A conditional (second or third)",
      "A modal of deduction (\"must\", \"might\", \"can't\")",
      "A passive and a relative clause",
    ],
    "It was a stormy night, and I was reading in the living room when someone knocked at the door. It was nearly midnight, so it couldn't be the mailman. I opened the door and saw an old man who was holding a small box. He said he had found it in the street.\n\nInside the box there was a letter which had been written fifty years before. It was addressed to my grandmother! She must have lost it when she lived here as a girl. The letter was from a young man who loved her.\n\nIf the old man hadn't knocked, I would never have known this story.",
    "Good stories mix tenses: the past continuous for the background (\"I was reading\"), the past simple for events (\"someone knocked\") and the past perfect for earlier events (\"he had found it\")."
  ),
  u19: t(
    "Yesterday you had a long conversation with an old friend. Write an email to another friend reporting what your old friend said about their life, their job and their plans.",
    [
      "\"said (that)\" and \"told me (that)\" correctly (\"told\" + person)",
      "Backshift of tenses (\"is\" -> \"was\", \"will\" -> \"would\", \"has\" -> \"had\")",
      "Changes of time words (\"tomorrow\" -> \"the next day\")",
      "At least four reported statements",
    ],
    "Hi Emma,\n\nGuess who I saw yesterday? Diego from school! We had coffee and talked for two hours. He told me that he was living in Berlin now and that he worked for a big tech company. He said he had been there for three years and that he loved it.\n\nHe also told me he had met his wife at work, and that she was a doctor. He said they would probably move to Canada next year. Then he said he was flying back the next day, so we couldn't meet again.\n\nHe said he would visit us in the summer. I really hope he does!\n\nLucia",
    "\"tell\" always needs a person (\"He told me\"), and \"say\" does not (\"He said\"). Not *He said me. When you report, the tense usually moves back: \"I live in Berlin\" becomes \"He said he lived in Berlin\"."
  ),
  u20: t(
    "You went to a job interview or a meeting with a new teacher. Write to a friend about it: report the questions they asked you, what they asked you to do and what they advised you.",
    [
      "Reported yes/no questions with \"if\" or \"whether\"",
      "Reported wh- questions with statement word order (\"asked me where I lived\")",
      "\"asked/told me to\" + verb for requests and orders",
      "Reporting verbs like \"advised\", \"suggested\", \"promised\" or \"offered\"",
    ],
    "Hi Tom,\n\nThe interview went well, I think! First the manager asked me where I had studied and why I wanted the job. Then she asked me if I could speak French. I told her I was learning it.\n\nAfter that she asked me to describe a difficult situation at work. It was hard! She also wanted to know whether I could start in June.\n\nAt the end she told me not to worry about the test, and she advised me to read about the company's new projects. She promised to call me before Friday. Wish me luck!\n\nSofia",
    "In reported questions, the word order is like a statement and there is no \"do\": \"she asked me where I had studied\", not *she asked me where had I studied. Orders use \"to\" + verb: \"she told me not to worry\"."
  ),
  u21: t(
    "Write about your free time. Say what activities you enjoy, what you want to try in the future, what you avoid and what you are interested in.",
    [
      "Verbs + -ing (\"enjoy\", \"avoid\", \"don't mind\", \"can't stand\")",
      "Verbs + \"to\" (\"want\", \"decide\", \"hope\", \"plan\")",
      "A preposition + -ing (\"interested in learning\", \"good at cooking\")",
      "-ing as the subject of a sentence (\"Running helps me relax\")",
    ],
    "I really enjoy spending my free time outside. On weekends I go hiking with friends, and I don't mind getting up early for it. Walking in the mountains helps me forget about work. I can't stand staying at home all day!\n\nI'm also interested in learning to cook. I'm not very good at making desserts, but I want to improve. Last month I decided to take a cooking class, and I'm planning to make a cake for my mother's birthday.\n\nI try to avoid watching too much TV. In the future, I hope to learn to dance, too.",
    "After a preposition English always uses -ing: \"interested in learning\", not *interested in learn. Some verbs take -ing (\"enjoy\", \"avoid\") and others take \"to\" (\"want\", \"decide\"): learn them in pairs."
  ),
  u22: t(
    "Write about your childhood and your parents' rules. What did your parents make you do, what did they let you do, and what do you remember doing? What would you like to do differently with your own children?",
    [
      "\"make\" + person + base verb and \"let\" + person + base verb",
      "\"remember\" or \"stop\" + -ing and + \"to\" with the right meaning",
      "\"would like to\" for a wish and \"like\" + -ing for a general preference",
      "\"be allowed to\" at least once",
    ],
    "My parents were quite strict. They made me do my homework before dinner, and they never let me watch TV on school nights. I wasn't allowed to go out alone until I was fourteen.\n\nBut I have happy memories too. I remember going to the beach every August and building sand castles with my father. I also remember my mother stopping to talk to everyone in the street!\n\nNow I understand why they had rules. I like being organized, and that's thanks to them. But with my own children, I'd like to be a bit more flexible. I would like to let them choose their own hobbies.",
    "\"make\" and \"let\" are followed by the base verb with no \"to\": \"they made me do my homework\", not *made me to do. \"I remember going\" is a memory; \"Remember to go\" is something not to forget."
  ),
  u23: t(
    "You are writing to a hotel or a language school to ask for information. Ask at least four questions politely, using indirect questions, and add one question tag at the end.",
    [
      "At least three indirect questions (\"Could you tell me where...?\", \"Do you know if...?\")",
      "Statement word order inside indirect questions",
      "A subject question (\"Who teaches...?\", \"What happens if...?\")",
      "A question tag (\"..., isn't it?\", \"..., don't you?\")",
    ],
    "Dear Sir or Madam,\n\nI'm interested in your summer English course, and I have a few questions. Could you tell me when the next course starts? I would also like to know how many students there are in each class.\n\nDo you know if there is accommodation near the school? I'd prefer to stay with a family. Who organizes the weekend trips, and what happens if I need to cancel?\n\nFinally, I was wondering whether the price includes the books. The course lasts four weeks, doesn't it?\n\nThank you in advance.\n\nBest regards,\nCarlos Ruiz",
    "In indirect questions there is no \"do\" and no inversion: \"Could you tell me when the course starts?\", not *when does the course start. Question tags repeat the auxiliary: \"It lasts four weeks, doesn't it?\""
  ),
  u24: t(
    "Write a review of a trip, a hotel or a restaurant that disappointed you. Explain what was wrong using quantifiers and intensifiers.",
    [
      "\"too\" + adjective and \"(not) enough\" correctly placed",
      "\"so\" + adjective and \"such (a)\" + noun",
      "Quantifiers: \"a few\", \"a little\", \"few\", \"little\", \"plenty of\" or \"hardly any\"",
      "\"so... that\" or \"such... that\" for a result",
    ],
    "Last month we stayed at a hotel by the beach, and it was such a disappointment. The room was too small for three people, and there weren't enough towels. The walls were so thin that we could hear our neighbors all night.\n\nThe breakfast had very little choice: a few pieces of bread, a little cheese and hardly any fruit. Few guests seemed happy. The pool was nice, but it wasn't big enough for everyone, so it was always full.\n\nThe staff were very kind, and there were plenty of restaurants nearby. But for such a high price, I expected much more.",
    "\"enough\" goes after an adjective (\"big enough\") but before a noun (\"enough towels\"). Use \"so\" with adjectives (\"so thin\") and \"such a\" with nouns (\"such a disappointment\"), not *so disappointment."
  ),
  u25: t(
    "Write a short text giving your opinion about life in big cities. Talk about people, nature, money and work in general, and give some specific examples.",
    [
      "No \"the\" for general ideas (\"Life is...\", \"People...\", \"Nature...\")",
      "\"the\" for specific things (\"the people in my building\")",
      "Uncountable nouns without \"a\" or plural (\"advice\", \"information\", \"news\", \"traffic\")",
      "Correct agreement with \"people\", \"everyone\" and \"news\"",
    ],
    "Many people think life in big cities is better, but I'm not sure. Of course, there is more work, and salaries are usually higher. But money isn't everything. Rent is very expensive, and traffic is terrible.\n\nIn my city, the people in my building hardly know each other. Everyone is always in a hurry. The news is full of stories about stress and pollution.\n\nI think nature is important for our health. When I need advice, I go to my grandparents' village. The air is clean there, and life is slower. Maybe the best option is a small city near the countryside.",
    "Spanish says «la vida» and «la gente» for general ideas, but English uses no article: \"Life is better\", not *The life is better. \"News\", \"advice\" and \"traffic\" are uncountable: \"The news is\", \"some advice\", never *advices."
  ),
  u26: t(
    "Write about a busy week at work or at home. Describe the things you had to do using phrasal verbs and expressions with \"make\", \"do\" and \"get\".",
    [
      "At least four phrasal verbs (\"set up\", \"put off\", \"run out of\", \"look after\")",
      "Correct collocations with \"make\" (\"a mistake\", \"a decision\") and \"do\" (\"homework\", \"the shopping\")",
      "At least two uses of \"get\" (\"get home\", \"get better\", \"get ready\")",
      "An object pronoun in the right place with a separable phrasal verb (\"put it off\")",
    ],
    "Last week was crazy. On Monday I had to set up a new computer system at work, and I made a lot of mistakes at first. On Tuesday my boss asked me to give a presentation, but I put it off until Thursday because I wasn't ready.\n\nAt home it was just as busy. My mother was sick, so I looked after her and did the shopping for her. On Wednesday we ran out of milk, and I had to go out again at ten at night!\n\nI didn't get home before eight any day. Luckily, my mother is getting better now, and I've made a decision: next week I'm going to slow down.",
    "\"make\" is for creating or producing (\"make a mistake\", \"make a decision\") and \"do\" for tasks and work (\"do the shopping\"). With a pronoun, a separable phrasal verb splits: \"put it off\", not *put off it."
  ),
  u27: t(
    "Compare two places you know well (two cities, two schools or two jobs). Describe them, say how you felt there and explain which one you prefer.",
    [
      "-ed and -ing adjectives used correctly (\"bored\" / \"boring\", \"interested\" / \"interesting\")",
      "Two or more adjectives in the right order (\"a lovely old stone house\")",
      "Advanced comparisons (\"much bigger\", \"not as... as\", \"the more..., the more...\")",
      "At least two adverbs (\"quickly\", \"hard\", \"well\")",
    ],
    "I've lived in two very different cities: Madrid and a small town in Ireland. Madrid is much bigger and far more exciting. There's always something interesting to do, and people stay out late. But it's not as relaxing as the town, and I was often tired after work.\n\nThe Irish town was quiet. I lived in a lovely old stone house near a beautiful green park. At first I was a bit bored, because the shops closed early. But the more time I spent there, the more I liked it. People spoke slowly and smiled a lot.\n\nIn the end, I prefer the town. My life there was simpler and much healthier.",
    "\"bored\" describes how you feel and \"boring\" describes what causes the feeling: \"I was bored\", not *I was boring (unless you mean you were a dull person!). Opinion adjectives go before size, age, color and material: \"a lovely old stone house\"."
  ),
  u28: t(
    "Write an opinion paragraph: \"Should children have a mobile phone before they are twelve?\" Give arguments for and against and finish with your own opinion. Link your ideas with connectors.",
    [
      "Contrast: \"although\", \"despite\" / \"in spite of\", \"however\"",
      "Addition: \"moreover\", \"in addition\" or \"what's more\"",
      "Purpose: \"so that\" or \"in order to\"",
      "A conclusion with \"To sum up\" or \"All in all\"",
    ],
    "Many parents give their children a phone at a young age so that they can contact them at any time. In addition, a phone can be useful for school projects. However, there are also important problems. Although phones are practical, many children spend too many hours on social media. What's more, they often stop playing outside and see their friends less.\n\nDespite the advantages, I believe children under twelve don't really need a smartphone. Parents could give them a simple phone in order to stay in touch. To sum up, I think it is better to wait until they are older and more responsible.",
    "\"although\" is followed by a full clause (\"Although phones are practical\"), while \"despite\" and \"in spite of\" take a noun or -ing (\"Despite the advantages\"). Not *Despite phones are practical."
  ),
  u29: t(
    "A newspaper is collecting opinions about working from home. Write a short letter. Report what other people have told you, ask a question, and use verb patterns and correct nouns.",
    [
      "Reported speech (\"My friend told me that...\")",
      "Verb patterns (\"avoid + -ing\", \"decide to\", \"let\" + base verb)",
      "An indirect or tag question",
      "Correct use of uncountable nouns and articles (\"work\", \"information\", \"the office\")",
    ],
    "Dear Editor,\n\nI'd like to share my opinion about working from home. Last year my company let us choose, and I decided to stay at home three days a week. I enjoy avoiding the traffic, and I have more time for my family.\n\nHowever, not everyone agrees. A colleague told me she felt lonely and that she missed the office. My manager said that communication had become harder, because people don't share information as easily.\n\nI think a mix is the best solution. But I wonder whether companies will really listen to their workers. That's the important question, isn't it?\n\nYours faithfully,\nAna Lopez",
    "This task mixes the second half of B1: reported speech moves the tense back (\"she felt lonely\"), \"let\" takes the base verb, and \"information\" is uncountable, so never *informations."
  ),
  u30: t(
    "You have just moved into a rented apartment and there are problems: the heating doesn't work and the bank hasn't sent your new card. Write a message to your landlord and a short note for yourself about a phone call you need to make.",
    [
      "A polite request with \"Could you...?\" or \"Would you mind...?\"",
      "A clear description of the problem with the present perfect (\"It hasn't worked since...\")",
      "Vocabulary for renting or banking (\"deposit\", \"lease\", \"account\", \"card\")",
      "A polite closing and a suggested time or solution",
    ],
    "Hello Mrs. Wilson,\n\nI moved into the apartment on Monday, and I'm very happy with it. However, the heating hasn't worked since I arrived, and it's very cold at night. Could you send a plumber this week? I'm at home every afternoon after four.\n\nAlso, I paid the deposit by bank transfer last Friday. Would you mind checking that you have received it? My bank still hasn't sent my new card, so I can't pay the first month's rent by card yet, but I can transfer it.\n\nThank you for your help.\n\nBest wishes,\nDiego\n\nNote: call the bank tomorrow at nine. Ask when the card will arrive.",
    "In real situations, be clear and polite: describe the problem (\"the heating hasn't worked since I arrived\"), make a request (\"Could you send...?\") and offer a time. Remember: \"assist\" is a false friend; to say «asistir» use \"attend\"."
  ),
  u31: t(
    "You bought a laptop online and it arrived broken. Write a complaint email to the customer service department. Explain the problem, say what you want and stay polite.",
    [
      "A clear subject and a formal opening (\"Dear Sir or Madam\")",
      "The facts in the past simple (\"I ordered\", \"it arrived\") and a present perfect",
      "A polite but firm request (\"I would like a refund\", \"I would be grateful if...\")",
      "A formal closing (\"I look forward to hearing from you\")",
    ],
    "Subject: Damaged laptop, order number 45821\n\nDear Sir or Madam,\n\nI am writing to complain about a laptop I ordered from your website on May 3rd. It arrived yesterday, but the screen was broken and the box was damaged. I have tried to turn it on several times, but it does not work.\n\nI have attached some photos of the damage. I would like a full refund or a replacement as soon as possible. I would be grateful if you could also arrange for someone to collect the broken laptop.\n\nI look forward to hearing from you.\n\nYours faithfully,\nSofia Martin",
    "Formal emails avoid contractions and use soft but firm phrases: \"I would like...\", \"I would be grateful if you could...\". Remember: \"I look forward to hearing\" takes -ing, not *I look forward to hear."
  ),
  u32: t(
    "Write a short news report for a local website about a recent event in your town: a sports match, a concert, a crime or a protest. Answer the questions who, what, where, when and why.",
    [
      "Topic vocabulary from the unit (news, sport, arts, crime or politics)",
      "The past simple and the passive for events (\"was arrested\", \"was won\")",
      "At least one quotation reported with \"said\" or \"told\"",
      "A headline and a neutral, factual tone",
    ],
    "Local Team Wins the Cup\n\nOn Saturday afternoon, our town's football team won the regional cup for the first time in thirty years. The final was played at the city stadium in front of more than five thousand fans.\n\nThe only goal was scored by Lucas Moreno, a nineteen-year-old player, in the last minute of the match. The referee was criticized by the other team, who said the goal was offside.\n\nAfter the match, the coach told reporters that he was very proud of his players. The fans celebrated in the main square until midnight. The trophy will be shown at the town hall next week.",
    "News reports use the past simple and many passives, because the event matters more than who did it: \"The final was played at the stadium\". Reported speech keeps the tone neutral: \"the coach told reporters that he was proud\"."
  ),
  u33: t(
    "You are going to travel alone for the first time. Write a blog post about how you are preparing: transport, where you are going to stay, the nature you hope to see and good manners in the country you are visiting.",
    [
      "Vocabulary from at least two themes (transport, housing, nature, manners)",
      "Future forms for plans (\"I'm going to\", \"I'm taking\")",
      "Advice or obligation with modals (\"should\", \"have to\")",
      "At least one relative clause and one connector (\"although\", \"however\")",
    ],
    "Next month I'm traveling alone for the first time, and I'm excited and a bit nervous. I'm going to Norway for ten days. I'm flying to Oslo and then taking the train to the west coast, which is supposed to be one of the most beautiful train journeys in the world.\n\nI've booked a room in a hostel, and later I'm staying in a small wooden cabin by a lake. I hope to see whales and maybe even the northern lights.\n\nI've also read about local manners. You should take your shoes off when you enter someone's home, and you shouldn't be late. Although I'm a little scared, I know it will be an amazing adventure.",
    "Use the present continuous for arranged travel (\"I'm flying to Oslo\") and \"going to\" for plans. A non-defining clause with \"which\" adds extra information about a place: \"the west coast, which is...\"."
  ),
  u34: t(
    "Write an email to your English teacher looking back on this year. Explain what you have learned, what was difficult, what you would do differently and what you are going to do next.",
    [
      "The present perfect and past simple for your learning (\"I've improved\", \"In March I started\")",
      "A conditional (\"If I had more time...\" or \"If I had practiced more...\")",
      "\"used to\" or \"be used to\" for change",
      "Future plans and at least two connectors",
    ],
    "Dear Mrs. Taylor,\n\nI wanted to thank you for this year. I've learned so much! I used to be afraid of speaking, but now I'm used to having conversations in English, even on the phone. I've also read three novels, which I never imagined.\n\nThe most difficult part was the conditionals. In February I made a lot of mistakes, and I felt quite frustrated. However, after a lot of practice, they finally became easier. If I had practiced listening more, I would have understood films better. If I had more time, I would watch a series in English every day.\n\nNext year I'm going to start B2, and I hope to take an official exam.\n\nBest wishes,\nCarlos",
    "This task mixes the whole of B1. Check the classic traps: \"used to\" + base verb but \"be used to\" + -ing, no \"would\" after \"if\", and the past simple with a finished time like \"in February\"."
  ),
  u35: t(
    "Write an essay of your own: \"The most important lesson I have learned in my life.\" Tell a short story to support your idea, reflect on it and explain how it will affect your future.",
    [
      "A clear introduction, a story and a conclusion",
      "Narrative tenses and at least one third conditional",
      "A relative clause, a passive and reported speech",
      "Connectors of contrast and result (\"however\", \"although\", \"so\", \"as a result\")",
    ],
    "The most important lesson I have learned is that asking for help is not a weakness.\n\nWhen I started university, I was living alone in a new city. I had always been a good student, so I didn't want anyone to know I was struggling. I was failing two subjects, but I didn't tell anyone. One day a teacher who had noticed my problems asked me to stay after class. She told me that many students felt the same way. I was given extra classes, and as a result I passed everything.\n\nIf she hadn't spoken to me, I would have left university. Although it was hard, I now ask for help when I need it, and I will always do so.",
    "A good B1 essay combines structure and grammar: narrative tenses for the story (\"I was living\", \"I had always been\"), a third conditional for reflection and connectors to link ideas. Check every verb before you finish."
  ),
};
