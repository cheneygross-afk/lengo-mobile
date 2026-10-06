// Synced from cheneygross-afk/lengo:src/lib/lessons/en-unit-writing-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each EN-B2 unit's review lesson (en-unit-reviews.ts),
// keyed by unit id as in en-b2.ts ("u01" to "u30"). Prompt, rubric and
// explanation in English, with Spanish words in «guillemets» (a learner's
// wrong English unquoted, after an asterisk); the model answer in English.
// Each task only needs the grammar and words of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [120, 200], rubric, modelAnswer, explanation);

export const EN_B2_UNIT_WRITING: Record<string, WriteExercise> = {
  u01: t(
    "Write an anecdote about a time when something went wrong on a trip or at an important event. Set the scene, explain what had happened before, and tell the story up to the end.",
    [
      "The past continuous to set the scene (\"It was raining and everyone was waiting\")",
      "The past simple for the main events in order",
      "The past perfect for something earlier (\"I had left my passport at home\")",
      "At least one past perfect continuous (\"We had been driving for hours\")",
      "Time linkers such as \"when\", \"by the time\", \"as soon as\" or \"after\"",
    ],
    "Two years ago I flew to Lisbon for my cousin's wedding. It was a hot Friday afternoon and the airport was packed. I had been looking forward to the trip for months, so I was in a great mood. When I reached the check-in desk, I opened my bag and froze: I had left my passport on the kitchen table. My roommate was still at home, so I called her. She jumped into a taxi and raced to the airport. By the time she arrived, they had already closed the gate. I had been standing at the desk for almost an hour and I was close to tears. In the end, a kind agent found me a seat on the next flight. I landed at midnight, exhausted, but I made it to the wedding the next morning, and nobody had noticed anything.",
    "The past perfect shows that one past action happened before another: \"they had already closed the gate\" when she arrived. Spanish speakers often use the simple past for both (*When she arrived, they closed the gate), which changes the meaning."
  ),
  u02: t(
    "Write about a memorable day from your childhood for a blog about family memories. Explain what you were doing, what had led up to the day, and why you still remember it.",
    [
      "A mix of past simple, past continuous and past perfect",
      "\"used to\" or \"would\" for a childhood habit",
      "\"By the time...\" with the past perfect",
      "At least one past perfect continuous for something that had been going on",
      "A final sentence that explains why the day matters to you",
    ],
    "When I was eight, my grandfather used to take me fishing every summer, but we never caught anything. One August morning we got up before sunrise and drove to a lake in the mountains. It was cold and a light mist was hanging over the water. We had been sitting in the boat for about two hours when my line suddenly went tight. I was so excited that I nearly fell into the lake. My grandfather was laughing and shouting instructions at the same time. By the time I finally pulled the fish out of the water, my hands were shaking. It wasn't a big fish, but it was the first one we had ever caught together. We cooked it that evening and he told the story to everyone in the village. He died a few years later, and that day is still my favorite memory of him.",
    "Use the past continuous for the background (\"a light mist was hanging\") and the past simple for what happened next (\"my line went tight\"). \"It was the first one we had ever caught\" needs the past perfect because the experience stretches up to that moment in the past."
  ),
  u03: t(
    "A friend has asked you about your plans for the next few years. Write an email describing what you have already arranged, what you intend to do, what you predict, and where you think you will be in five years' time.",
    [
      "The present continuous for an arrangement (\"I'm starting a new job in March\")",
      "\"going to\" for an intention and \"will\" for a prediction or decision",
      "The future continuous (\"This time next year I'll be living...\")",
      "The future perfect (\"By 2030 I will have finished...\")",
      "A time clause with the present after \"when\" or \"as soon as\"",
    ],
    "Hi Emma,\n\nThanks for your message! Lots of things are changing for me. I'm starting a new job in Toronto in March, and I'm flying out on the 20th of February. I'm going to rent a small apartment near the office at first, and when I've saved enough money, I'm going to look for something bigger. My English is OK, but I'm going to take a business course as soon as I arrive. This time next year I'll be living in a completely different country, which feels a bit scary. I think I'll miss my family a lot, but I'm sure they'll visit. By 2030 I hope I'll have finished my master's degree, and maybe I'll have bought my own place. Who knows? I'll call you before I leave, I promise.\n\nLove,\nSofia",
    "After \"when\", \"as soon as\" and \"until\" English uses a present tense for the future: \"as soon as I arrive\", not *as soon as I will arrive. Spanish uses the subjunctive here («cuando llegue»), which is why the mistake is so common."
  ),
  u04: t(
    "You are organizing a week-long visit from a group of colleagues from another office. Write an email to them explaining the schedule, the deadlines they need to meet before they come and what will happen while they are with you.",
    [
      "Fixed timetables in the present simple (\"The train leaves at 8:15\")",
      "Arrangements with the present continuous",
      "At least one future perfect for a deadline (\"By Friday we will have sent...\")",
      "At least one future continuous (\"We'll be waiting for you at...\")",
      "Time clauses with \"before\", \"until\" or \"once\" + present",
    ],
    "Dear all,\n\nWe're really looking forward to your visit next week. Here is the plan. Your flight lands at 10:30 on Monday, and one of us will be waiting for you at arrivals. On Monday afternoon we're having a short welcome meeting, and in the evening we're taking you out for dinner. From Tuesday to Thursday you'll be working with our product team, and on Friday morning you're presenting your results to the managers. Before you travel, please send us your presentation slides. We need them by Wednesday, because by Thursday we will have printed all the materials. Once you arrive, you'll get a visitor badge, and you won't be able to enter the building until you have it. The return train to the airport leaves at 4 p.m. on Friday, so we'll finish at lunchtime. Let me know if you have any questions.\n\nBest regards,\nCarlos",
    "Timetables use the present simple (\"The return train leaves at 4 p.m.\"), while personal arrangements use the present continuous (\"we're taking you out\"). After \"once\", \"before\" and \"until\" keep the present: \"until you have it\", not *until you will have it."
  ),
  u05: t(
    "Write about a decision or a chance event that changed your life. Imagine how things would have been different if it hadn't happened, and how your life would be different now.",
    [
      "At least three third conditionals (\"If I hadn't..., I wouldn't have...\")",
      "At least one mixed conditional (\"If I had stayed, I would be... now\")",
      "One linker such as \"unless\", \"as long as\" or \"provided that\"",
      "\"might have\" or \"could have\" in a result clause",
    ],
    "Six years ago I almost missed the bus to a job interview, and that tiny moment changed everything. If the driver hadn't waited for me, I would have arrived late, and they probably wouldn't have given me the job. It was a small company that made educational apps, and that's where I met my partner, Lucas. If I hadn't gotten that job, I would never have met him. I might have stayed in my hometown and I could have ended up working in my father's shop. If I had stayed there, I would probably be bored now, and I wouldn't speak English as well as I do. Of course, I don't think everything happens for a reason. Things can go wrong at any time unless you make the most of your chances. But I always smile when I see a bus driver waiting for a running passenger.",
    "The third conditional is \"if\" + past perfect, then \"would have\" + past participle. Never put \"would\" in the if-clause: *If I would have known is a typical error. A mixed conditional joins a past condition to a present result: \"If I had stayed, I would be bored now.\""
  ),
  u06: t(
    "Someone has posted on an advice forum: they have been offered a well-paid job in another city, but their family and friends are at home. Write a reply giving them advice and telling them about a similar choice you or someone you know made.",
    [
      "Advice with \"If I were you, I would...\"",
      "A first or second conditional about their options",
      "A third conditional about your own (or a friend's) past choice",
      "\"provided that\", \"as long as\", \"unless\" or \"in case\"",
      "A friendly, informal register suitable for a forum",
    ],
    "Hi! I was in almost exactly the same situation three years ago, so I hope this helps. If I were you, I would accept the offer, but only after visiting the new city for a weekend. If you hate the place, you'll know before you sign anything. When I got a job offer in Madrid, I nearly said no because I was afraid of feeling lonely. If I had turned it down, I would have regretted it forever. The first months were hard, I won't lie, but I made friends at work and I went home for a weekend every month. Moving is a good idea provided that you keep in touch with the people you love. Save some money in case things don't work out. And remember: unless you try, you'll never know. If it doesn't go well, you can always come back. Good luck!",
    "\"If I were you, I would...\" is the standard way to give advice; \"were\" is used for every person. Remember that \"in case\" is not the same as \"if\": you save money \"in case\" things go wrong, as a precaution, even before you know whether they will."
  ),
  u07: t(
    "Write a letter to your younger self (at about fifteen). Tell them what you regret, what you wish were different in your life now, and what you hope they will do.",
    [
      "\"I wish\" + past simple for a present wish (\"I wish I spoke...\")",
      "\"I wish\" or \"If only\" + past perfect for a past regret",
      "\"should have\" / \"shouldn't have\" for criticism of past actions",
      "\"I wish you would...\" for something you want someone to do",
      "\"I hope\" for something that is still possible",
    ],
    "Dear fifteen-year-old me,\n\nI'm writing from the future, and I have a few things to tell you. First, I wish you had studied harder at school, especially languages. You spent hours playing video games, and you should have spent some of that time reading. Today I wish I spoke French, because I work with people from Paris every week. Second, if only you had been kinder to Dad. You shouldn't have shouted at him so often; he was only trying to help, and now he lives far away. I also wish I were braver. You never sang in public because you were scared, and I still don't. I wish you would stop worrying about what other people think. Please try new things, travel and keep in touch with your friends. I hope you'll take my advice, even though I know you won't listen.\n\nLove,\nYou, twenty years older",
    "\"I wish\" + past simple talks about the present (\"I wish I spoke French\" = I don't), and \"I wish\" + past perfect about the past (\"I wish you had studied\" = you didn't). Use \"hope\", not \"wish\", for things that are still possible: *I wish you will be happy is wrong; say \"I hope you'll be happy.\""
  ),
  u08: t(
    "You arrive home and find that something strange has happened: the door is open, there is mud on the floor and some food is missing. Describe the scene and speculate about what must, might or can't have happened.",
    [
      "\"must have\" + past participle for a strong deduction",
      "\"can't have\" or \"couldn't have\" for something impossible",
      "\"might have\", \"may have\" or \"could have\" for possibilities",
      "At least one present deduction (\"It must be...\", \"They might be...\")",
      "Evidence that supports each deduction",
    ],
    "When I got home on Saturday evening, the back door was wide open. I definitely locked it this morning, so somebody must have opened it while I was out. There was mud all over the kitchen floor, but the footprints were tiny. It can't have been a burglar, because nothing valuable was missing: my laptop was still on the table and my wallet was in the drawer. However, half a chicken had disappeared from the fridge, which was also open. My neighbor's cat might have come in, but a cat couldn't have opened the fridge. My little brother has a key, so he may have come over with his friends after football. That would explain the mud. Then I heard a noise upstairs. Someone must be in the house right now, I thought. I walked up slowly and found my brother asleep on my bed, with a plate of chicken bones next to him.",
    "For deductions about the past use modal + \"have\" + past participle: \"must have opened\", \"can't have been\". Spanish speakers often say *must opened or use \"mustn't\" for impossibility; the opposite of \"must have\" is \"can't have\", not *mustn't have."
  ),
  u09: t(
    "You had an argument with a close friend and you now feel bad about it. Write them a message: say what you think went wrong, what you should or shouldn't have done, and what you wish had happened.",
    [
      "\"I should have\" / \"I shouldn't have\" for your own mistakes",
      "A deduction about the friend's feelings (\"You must have felt...\")",
      "\"might have\" or \"may have\" for a possible misunderstanding",
      "\"I wish\" or \"If only\" with the past perfect",
      "An apology and a suggestion for the future",
    ],
    "Hi Diego,\n\nI've been thinking about Friday night all weekend, and I owe you an apology. I shouldn't have said those things in front of everyone. You must have felt really embarrassed, and I'm sorry. I was tired and stressed after a long week, but that's no excuse. I should have waited until we were alone to tell you I was upset. I think there may have been a misunderstanding, too. When you didn't answer my calls, I thought you were ignoring me, but you might have been busy at work. I can't have been very easy to talk to that evening. I wish I had listened to you instead of interrupting. If only I had stayed calm! Our friendship is much more important to me than a silly argument. Can we meet for a coffee this week and talk properly? I'll pay.\n\nAll the best,\nTom",
    "\"Should have\" + past participle criticizes a past action that did or didn't happen: \"I should have waited\". Spanish speakers sometimes write *I should waited or *I must have waited for a regret; \"must have\" is a deduction, not a regret."
  ),
  u10: t(
    "Describe a process for a website that explains how everyday things are made or done, for example how chocolate is made, how recycling is processed or how a letter is delivered. Focus on what happens, not on who does it.",
    [
      "The present simple passive for the main steps (\"The beans are dried...\")",
      "A passive with a modal (\"can be stored\", \"must be kept\")",
      "At least one present perfect or past passive for history (\"has been produced\", \"was invented\")",
      "Sequencing words: \"first\", \"then\", \"after that\", \"finally\"",
      "\"by\" + agent only when the agent is important",
    ],
    "Chocolate has been produced for thousands of years, and it was first drunk as a bitter drink in Central America. Today the process is much more industrial. First, the cocoa pods are picked by hand, because the trees are too delicate for machines. The beans are taken out of the pods and left to ferment for about a week. Then they are dried in the sun and packed into large sacks. After that, the beans are shipped to factories all over the world. In the factory they are roasted, and the shells are removed. The inside of the bean is ground into a thick paste, and sugar and milk are added. Next, the mixture is heated, stirred and cooled several times until it becomes smooth. Finally, the chocolate is poured into molds and wrapped. It can be stored for months, but it must be kept in a cool, dry place.",
    "Where Spanish often uses «se» («se secan al sol»), English normally uses the passive: \"they are dried in the sun\". Don't forget the verb \"be\" (*the beans dried in the sun means something different) and use the past participle, not the infinitive."
  ),
  u11: t(
    "Write a short news report about a change in your town or city, for example a new building, a festival or a mysterious event. Then add a paragraph about something you recently had done (a repair, a service) in your own home.",
    [
      "An impersonal passive (\"It is said that...\", \"It is believed that...\")",
      "A personal passive with an infinitive (\"The building is thought to be...\")",
      "A causative with \"have\" or \"get\" + object + past participle",
      "At least one other passive (any tense)",
      "A neutral, news-like style in the first paragraph",
    ],
    "The old train station in the city center is going to be turned into a cultural center, the city council announced yesterday. The building, which was built in 1890, has been closed for almost twenty years. It is said that the project will cost around ten million dollars, and the work is expected to start next spring. The station is believed to be one of the oldest in the country, and some local residents are reported to be worried about the changes. However, it has been promised that the original clock tower will be kept.\n\nThings have been changing in my apartment too. Last month I had my kitchen painted, and I finally got the leaking window fixed. Next week I'm having a new washing machine installed, because the old one kept breaking down. I could do some of these things myself, but it's much easier to get them done by a professional.",
    "\"It is said that...\" and \"He is said to...\" both report what people say without naming them. For services, use \"have/get + object + past participle\": \"I had my kitchen painted\" (someone did it for me). *I painted my kitchen means you did it yourself."
  ),
  u12: t(
    "Write the minutes (a summary) of a meeting at work or at school. Report what different people said, suggested, agreed and refused, using a variety of reporting verbs.",
    [
      "At least five different reporting verbs (\"suggest\", \"agree\", \"refuse\", \"remind\", \"deny\", \"warn\", \"persuade\"...)",
      "The correct pattern after each verb (\"suggest + -ing\", \"refuse + to\", \"remind + object + to\")",
      "Tense changes for reported statements where needed",
      "At least one reported question",
      "A neutral, formal register",
    ],
    "Minutes of the team meeting, Monday 14th April\n\nThe manager, Ms. Lopez, opened the meeting and reminded everyone to submit their monthly reports by Friday. She explained that the budget for the summer project had been reduced. Mark suggested postponing the project until September, but Ana disagreed and argued that the client would be disappointed. After a long discussion, the team agreed to start in July with a smaller budget. Peter asked whether anyone could help him with the new software. Laura offered to show him how it worked. Ms. Lopez then warned the team not to share client information on social media. When she asked who had sent the wrong file to the client last week, Tom admitted making the mistake and apologized for it. He denied deleting the original document, however. Finally, Emma persuaded the manager to organize a training day in May. The meeting ended at 11:30.",
    "Each reporting verb has its own pattern: \"suggest + -ing\" (*suggested to postpone is wrong), \"agree/refuse/offer + to\", \"remind/warn/persuade + object + to\", \"admit/deny + -ing\". Learn the verb and its pattern together."
  ),
  u13: t(
    "You are planning a trip and want information from a hotel or a language school you have never contacted before. Write a polite email asking at least five questions, most of them indirect.",
    [
      "At least four indirect questions (\"Could you tell me what time...\", \"I was wondering whether...\")",
      "Statement word order after the question opener, with no \"do/does/did\"",
      "\"if\" or \"whether\" for yes/no questions",
      "One direct question with correct word order",
      "A polite opening and closing",
    ],
    "Dear Sir or Madam,\n\nI am planning to stay in Dublin for two weeks in July, and I am interested in booking a room at your hotel. I would be grateful if you could answer a few questions. First, could you tell me how much a single room costs per night in July? I would also like to know whether breakfast is included in the price. I was wondering if the hotel has a gym or a swimming pool, because I like to exercise every morning. Do you know how long it takes to get to the city center by bus? I am a vegetarian, so I would also like to ask whether the restaurant offers vegetarian options. Finally, is it possible to check in late? My flight lands at 11 p.m. I look forward to hearing from you.\n\nYours faithfully,\nLucia Romero",
    "In indirect questions the word order is the same as in a statement: \"could you tell me how much a single room costs\", not *how much does a single room cost. For yes/no questions use \"if\" or \"whether\": \"I'd like to know whether breakfast is included.\""
  ),
  u14: t(
    "Write a short profile of a person you admire (a relative, a teacher or a well-known historical figure) for a website about inspiring people. Give extra information about them, their work and the places connected with them.",
    [
      "At least three non-defining relative clauses with commas",
      "\"whose\" at least once",
      "\"which\" referring to a whole idea (\"..., which surprised everyone\")",
      "\"where\" or \"when\" in a relative clause",
      "No \"that\" in non-defining clauses",
    ],
    "My grandmother Carmen, who was born in a small village in Galicia in 1940, is the most inspiring person I know. Her parents, whose farm was very poor, couldn't afford to send her to school after the age of twelve. At eighteen she moved to Madrid, where she worked as a cleaner in a hospital. In the evenings she studied nursing, which was very unusual for a woman in her situation at the time. In 1965, when she finally got her qualification, she was one of the oldest students in her class. She worked as a nurse for forty years, and many of the patients she looked after still send her cards. My grandfather, whom she met at the hospital, died ten years ago. Now she lives with my aunt, whose house is full of photos and books. She still reads every day, which is why she always wins our family quiz nights.",
    "A non-defining clause adds extra information and goes between commas; you cannot use \"that\" in it (*My grandmother, that was born...). Spanish «lo que» referring to a whole sentence becomes \", which\" in English, never *what: \"..., which was very unusual\"."
  ),
  u15: t(
    "Write a short report for your company or school newsletter about a recent event (a new service, a change in the building or an award). Include what was done, what people said about it and some background information.",
    [
      "At least three passive forms in different tenses",
      "At least two reporting verbs with the right pattern",
      "At least two relative clauses (one defining, one non-defining)",
      "A causative (\"have/get something done\") if natural",
      "A clear, neutral register",
    ],
    "Last month a new staff cafeteria was opened on the ground floor of our building. The space, which used to be a storage room, has been completely redesigned. The work was carried out by a local company that specializes in eco-friendly design, and all the furniture was made from recycled wood. At the opening, the director thanked the team who had organized the project and announced that the cafeteria would be open from 8 a.m. to 6 p.m. Several employees suggested adding more vegetarian options, and the manager promised to look into it. Not everyone was happy at first: some people complained that the old coffee machines had been removed. However, it is reported that more than two hundred meals have been served every day since it opened. The company is now having a small terrace built next to the cafeteria, which is expected to be finished by June.",
    "In reports the passive keeps the focus on what happened: \"all the furniture was made from recycled wood\". Remember that \"suggest\" is not followed by an object + infinitive: \"suggested adding\", not *suggested them to add."
  ),
  u16: t(
    "Write about how your life has changed since you moved to a new place, started a new job or began studying. Compare what you used to do with what you do now, and explain what you have got used to and what you are still getting used to.",
    [
      "\"used to\" or \"would\" for past habits",
      "\"be used to\" and \"get used to\" + -ing",
      "At least one verb that changes meaning with -ing or to (\"remember\", \"stop\", \"try\", \"forget\", \"regret\")",
      "Verbs followed by -ing (\"enjoy\", \"avoid\", \"miss\") and by to (\"decide\", \"manage\", \"hope\")",
      "A preposition + -ing (\"before moving\", \"instead of driving\")",
    ],
    "Two years ago I moved from Seville to Manchester to work as an engineer. Before moving, I used to live with my parents, and my mother would cook for the whole family every day. I didn't have to think about shopping or paying bills. Now I live alone, and I've had to learn to cook. At first I missed eating proper Spanish food, so I tried making my own tortilla, which was a disaster. The weather was the hardest thing. I wasn't used to having rain almost every day, but I've gotten used to carrying an umbrella everywhere. I'm still getting used to having dinner at six o'clock, though. I remember feeling very lonely during my first winter, so I decided to join a running club instead of staying at home. I'll never forget meeting my best friend there. I don't regret leaving Spain, but I try to visit my family every few months.",
    "\"Used to + infinitive\" is a past habit (\"I used to live with my parents\"), but \"be/get used to\" means «estar acostumbrado / acostumbrarse» and is followed by -ing: \"I've gotten used to carrying an umbrella\", not *I've gotten used to carry."
  ),
  u17: t(
    "Write a short article for a student magazine about the advantages and disadvantages of studying abroad. Present both sides and give your own opinion at the end.",
    [
      "At least two linkers of contrast (\"although\", \"despite\", \"in spite of\", \"however\", \"whereas\")",
      "At least two linkers of purpose (\"so that\", \"in order to\", \"so as not to\")",
      "\"despite\" or \"in spite of\" + noun or -ing, not + a full clause",
      "\"even though\" or \"even if\"",
      "Correct punctuation with \"however\" and \"therefore\"",
    ],
    "More and more students decide to spend a year at a foreign university. Although it can be expensive, studying abroad has clear advantages. First, many students go abroad in order to improve their language skills, and living in another country is the fastest way to do it. Second, it makes you more independent, because you have to solve problems on your own. However, there are also disadvantages. Despite the scholarships that are available, many families cannot afford the cost of living in cities like London or Paris. Some students also feel lonely, even though they make new friends. Another problem is that courses are different in every country, so students sometimes have to repeat subjects when they return. In my opinion, the benefits are greater than the problems. Students should plan carefully so that they don't spend more than they can afford, and they should keep in touch with home so as not to feel isolated. Even if it is hard at first, it is an experience they will never forget.",
    "\"Although\" and \"even though\" are followed by a clause, but \"despite\" and \"in spite of\" need a noun or an -ing form: \"Despite the scholarships\", never *Despite there are scholarships. \"However\" starts a new sentence and is followed by a comma."
  ),
  u18: t(
    "You bought a product online (for example, headphones or a coat) and it arrived late and damaged. Write a formal complaint email to the company explaining what happened and what you expect them to do.",
    [
      "A formal opening and closing (\"Dear Sir or Madam\", \"Yours faithfully\")",
      "A clear reason for writing in the first paragraph",
      "Formal linkers (\"furthermore\", \"in addition\", \"however\", \"therefore\")",
      "A polite but firm request (\"I would be grateful if you could...\")",
      "No contractions, slang or informal phrases",
    ],
    "Dear Sir or Madam,\n\nI am writing to complain about an order I placed on your website on 3rd March (order number 48215). I ordered a pair of wireless headphones, which were supposed to arrive within three working days. However, the package did not arrive until 17th March, two weeks after the date I had been given. Furthermore, when I opened the box, I discovered that the headphones were damaged. The left earphone does not work at all, and the case is badly scratched. In addition, I contacted your customer service department twice by phone, but nobody was able to help me. I have been a loyal customer for several years, and I am therefore extremely disappointed with the service I have received. I would be grateful if you could send me a full refund or a replacement as soon as possible. I have attached photographs of the damaged product.\n\nI look forward to hearing from you.\n\nYours faithfully,\nDaniel Ortega",
    "Formal emails avoid contractions and informal words: \"I am writing to complain\", not *I'm writing cause I'm angry. \"Yours faithfully\" (British) goes with \"Dear Sir or Madam\"; in American English \"Sincerely\" is used in both cases."
  ),
  u19: t(
    "Write a for-and-against essay on this question: \"Should people work from home more often?\" Discuss both sides and finish with your own conclusion.",
    [
      "An introduction, a paragraph for each side and a conclusion",
      "Linkers of contrast and addition (\"on the one hand\", \"on the other hand\", \"whereas\", \"moreover\")",
      "At least two verb patterns with -ing or to (\"avoid commuting\", \"allow employees to\")",
      "A preposition + -ing (\"instead of traveling\", \"without having to\")",
      "A conclusion that starts with \"To sum up\" or \"All in all\"",
    ],
    "Since 2020, millions of people have started working from home at least part of the week. But is it really a good idea?\n\nOn the one hand, remote work has clear benefits. Employees avoid commuting, which saves time and money and reduces pollution. Many people find it easier to concentrate without being interrupted by colleagues. Moreover, working from home allows parents to spend more time with their children.\n\nOn the other hand, there are important drawbacks. Some workers feel isolated, and young employees miss learning from more experienced colleagues. Whereas an office separates work from private life, at home it is easy to keep checking emails until late at night. In addition, not everyone has a quiet room to work in.\n\nAll in all, I believe that a mix is the best solution. Companies should let employees work from home two or three days a week instead of forcing them to choose. That way, people can enjoy the flexibility without losing contact with their team.",
    "After a preposition English always uses -ing: \"without being interrupted\", \"instead of forcing\". Spanish uses the infinitive («sin ser interrumpido»), so learners often write *without be interrupted or *instead of force."
  ),
  u20: t(
    "Write a message to a friend to clear up a misunderstanding: they think you forgot their birthday party, but something else happened. Explain what really happened and what you feel, using emphatic structures.",
    [
      "At least two cleft sentences with \"What...\" (\"What happened was...\", \"What I want to say is...\")",
      "At least one \"It was... who/that...\" sentence",
      "\"so... that\" or \"such... that\"",
      "Emphatic \"do/did\" (\"I did try to call you\")",
      "At least one extreme adjective with \"absolutely\" (\"absolutely exhausted\")",
    ],
    "Hi Sofia,\n\nI know you're upset, and I completely understand, but I didn't forget your party. What happened was a real disaster. I left work early on Saturday and I did try to call you, but my phone died on the train. Then the train stopped for two hours because of a problem on the line. It was such a long delay that half the passengers got off and walked. By the time I got to your street, it was nearly midnight and all the lights were off. I was absolutely exhausted and so embarrassed that I just went home. It was your brother who told me you thought I didn't care. That's not true at all. What I really want is to take you out for dinner next weekend to celebrate properly. What matters to me is our friendship, not a silly train. Please call me when you can.\n\nLove,\nAna",
    "Cleft sentences put the important information at the end: \"What happened was...\", \"It was your brother who told me...\". Use \"such\" with a noun (\"such a long delay\") and \"so\" with an adjective (\"so embarrassed\"), never *so long delay."
  ),
  u21: t(
    "Write a comparison of two cities or towns you know (or your town now and twenty years ago). Compare housing, transport, cost of living and quality of life.",
    [
      "Comparatives with modifiers (\"far more expensive\", \"slightly cheaper\", \"a lot busier\")",
      "\"not as... as\" at least once",
      "A \"the more..., the more...\" sentence",
      "Quantifiers: \"both\", \"neither\", \"each/every\", \"few/a few\", \"little/a little\"",
      "A superlative with \"by far\" or \"one of the...\"",
    ],
    "I have lived in both Valencia and Berlin, and they are very different places. Housing in Berlin is far more expensive than in Valencia, and it is getting worse every year. In Valencia I paid slightly less for a big apartment than I pay now for a tiny room. However, public transport in Berlin is a lot better. Trains run every few minutes, whereas in Valencia buses are not as frequent as people would like. Neither city has a perfect climate: Valencia is too hot in summer and Berlin is far too cold in winter. The cost of living is higher in Berlin, but salaries are too. Valencia has few big companies, so there are fewer job opportunities, while Berlin has plenty. Each city has its own culture, and both are friendly to foreigners. In my experience, the longer you stay in a place, the more you like it. Still, for quality of life, Valencia is by far the best city I have ever lived in.",
    "Use \"far\", \"much\" or \"a lot\" to make a big difference and \"slightly\" or \"a bit\" for a small one: \"far more expensive\", never *very more expensive. \"Few\" is negative (not many), whereas \"a few\" is positive (some)."
  ),
  u22: t(
    "Write a review of a restaurant, café or food market you have been to. Describe the food, the service and the atmosphere, compare it with other places and say clearly what you loved and what you hated.",
    [
      "At least one cleft sentence (\"What I loved most was...\")",
      "Emphatic comparisons (\"by far the best\", \"much better than\", \"twice as expensive as\")",
      "\"so\" / \"such\" + \"that\"",
      "Extreme adjectives (\"delicious\", \"terrible\", \"tiny\") with suitable modifiers",
      "A recommendation at the end",
    ],
    "Last Friday I finally tried La Huerta, the new tapas bar that everyone in my neighborhood is talking about. What I loved most was the food. The grilled vegetables were absolutely delicious, and the croquettes were by far the best I have ever had outside my grandmother's kitchen. The dishes are a bit smaller than in other tapas bars, but the quality is much higher. The place itself is tiny, with only eight tables, so it gets really crowded. The service, however, was a disappointment. We had to wait such a long time for the bill that we nearly missed our bus. What I really hated was the noise: the music was so loud that we could hardly hear each other. It is also almost twice as expensive as the bar next door. Even so, the cooking is fantastic. The more often you go, the more dishes you will want to try. I would definitely recommend it, but go early and book a table.",
    "Extreme adjectives like \"delicious\" or \"tiny\" go with \"absolutely\" or \"really\", not \"very\": *very delicious sounds wrong to native speakers. \"Twice as... as\" is the natural way to say «el doble de caro que»."
  ),
  u23: t(
    "Write about a travel disaster, real or imagined. Tell the story, say what you should have done differently and imagine what would have happened if things had gone another way.",
    [
      "Narrative tenses (past simple, continuous and perfect)",
      "A third conditional",
      "\"should have\" or \"I wish I had\"",
      "A modal of deduction about the past (\"must have\", \"can't have\")",
      "At least one passive and one linker of contrast",
    ],
    "Last summer my friend Laura and I were traveling around Italy by train. We had been looking forward to the trip for months, but on the third day everything went wrong. We were having lunch in a station cafe in Florence when Laura realized that her bag had disappeared. It must have been stolen while we were looking at the menu, because nobody else was nearby. Her passport, her phone and all her money were in it. Although the police were very kind, they told us that the bag would probably never be found. We should have kept our passports in the hotel safe, and I wish we had paid more attention. If we hadn't stopped for lunch, we would have caught the earlier train, and maybe nothing would have happened. We spent the next two days at the consulate instead of visiting museums. In the end, Laura got an emergency passport and we finished the trip, but we have never eaten in a station cafe again.",
    "This task mixes the whole B2 so far. Notice how each structure has its own job: \"It must have been stolen\" is a deduction, \"We should have kept\" is a regret, and \"If we hadn't stopped, we would have caught\" imagines a different past."
  ),
  u24: t(
    "Write an opinion piece for a local newspaper about one of these issues: the four-day working week, the rising cost of housing, or young people's salaries. Use the vocabulary of work, money and society.",
    [
      "At least six topic words or collocations (\"earn a living\", \"cost of living\", \"pay rise\", \"unemployment\", \"taxes\"...)",
      "\"make\" and \"do\" in correct collocations (\"make a profit\", \"do business\")",
      "At least one phrasal verb about money or work (\"pay off\", \"take on\", \"cut back on\")",
      "A clear opinion and at least one supporting example",
      "No false friends: \"actually\" does not mean «actualmente», and \"assist\" does not mean «asistir» (\"attend\")",
    ],
    "Young people today are better educated than any generation before them, yet many of them struggle to earn a living. In my city, the average rent has doubled in ten years, while salaries have hardly changed. As a result, a lot of graduates in their late twenties still live with their parents. They are not lazy; they simply cannot afford to move out. Many companies take on young workers with short-term contracts and low wages, even when they are making a large profit. A typical graduate has to work long hours and do overtime without any hope of a pay rise. At the same time, the cost of living keeps going up, so they have to cut back on everything, from food to leisure. I believe the government should do more to help. It could lower taxes for young workers and build affordable housing. If nothing changes, our most talented young people will build their careers abroad, and the whole country will pay the price.",
    "Collocations matter more than single words: you \"make a profit\" and \"make money\", but \"do business\" and \"do overtime\". Remember that \"actually\" means «en realidad», not «actualmente» (that is \"currently\" or \"nowadays\")."
  ),
  u25: t(
    "Write a blog post about how technology and social media have changed the way people get the news, and what effect this has on society and the environment. Give your own opinion.",
    [
      "At least six topic words (\"device\", \"headline\", \"fake news\", \"algorithm\", \"carbon footprint\", \"followers\"...)",
      "At least one phrasal verb from the unit (\"log in\", \"scroll through\", \"switch off\", \"look up\")",
      "A noun or adjective formed with a suffix (\"reliable\", \"pollution\", \"awareness\")",
      "A passive and a linker of contrast",
      "A clear personal opinion",
    ],
    "Twenty years ago my parents read a newspaper every morning. Today most people get their news from a screen. When I wake up, the first thing I do is scroll through the headlines on my phone, and I am not alone. Social media has made information faster and free, which is a huge advantage. However, the news we see is chosen by algorithms, and those algorithms show us what we already agree with. As a result, fake news spreads quickly, and it is often shared by millions of users before anyone checks it. It has become harder to know which sources are reliable. There is also an environmental cost that few people think about. Data centers use enormous amounts of electricity, so even streaming a video has a carbon footprint. In my opinion, technology itself is not the problem. We need more awareness: we should check facts before sharing them, follow trustworthy journalists and switch off our devices more often.",
    "Word formation is key at B2: \"rely\" becomes \"reliable\", \"aware\" becomes \"awareness\", \"pollute\" becomes \"pollution\". Note that \"news\" is uncountable and takes a singular verb: \"the news is\", never *the news are."
  ),
  u26: t(
    "Write about a person who has had an important influence on your life or your wellbeing (a friend, a teacher, a coach). Describe their personality, your relationship and how they helped you through a difficult time.",
    [
      "At least five words for personality and feelings (\"reliable\", \"down-to-earth\", \"anxious\", \"relieved\"...)",
      "At least two adjectives or verbs with the right dependent preposition (\"proud of\", \"worried about\", \"rely on\")",
      "At least one idiom from the unit (\"get on like a house on fire\", \"be over the moon\")",
      "No confusion of false friends (\"embarrassed\", \"sensible\", \"sensitive\")",
      "A clear structure: who, what happened, how they helped",
    ],
    "When I was nineteen, I failed my first-year exams at university and felt completely lost. I was ashamed of myself and anxious about telling my parents. That summer I started working at a bookshop, where I met Isabel, the owner. She was sixty, down-to-earth and incredibly patient. We got on like a house on fire from the first day. Isabel was a sensible woman who never gave advice unless you asked for it, but she was a great listener. She was also very sensitive to other people's moods, and she always noticed when I was feeling low. Little by little I told her about my fears. She convinced me that one bad year didn't define me and that I could rely on myself more than I thought. In September I went back to university, and the following June I passed every exam. I was over the moon, and so was she. I'm still grateful to her, and we meet for coffee every month.",
    "Watch the false friends: \"sensible\" means «sensato», while «sensible» is \"sensitive\"; \"embarrassed\" means «avergonzado», not «embarazada». Many adjectives need a fixed preposition: \"ashamed of\", \"anxious about\", \"grateful to\"."
  ),
  u27: t(
    "Write about a holiday or trip you will never forget, or describe the home and neighborhood you would like to live in one day. Use the vocabulary of travel, the city and the home.",
    [
      "At least six topic words or collocations (\"book a room\", \"sightseeing\", \"rush hour\", \"suburbs\", \"rent\", \"landlord\"...)",
      "At least two phrasal verbs (\"set off\", \"check in\", \"get around\", \"put up\")",
      "Correct use of \"trip\", \"travel\" and \"journey\"",
      "No false friends (\"carpet\", \"exit\", \"parents\")",
      "A good mix of past tenses or of future and conditional forms",
    ],
    "Three years ago my parents and I went on a trip to Scotland that none of us will ever forget. We set off from Madrid at six in the morning and landed in Edinburgh just before lunch. After we had checked in at a small guesthouse, we spent the afternoon sightseeing in the old town. The next day we rented a car to get around the Highlands. The journey was long, but the scenery was breathtaking: mountains, lakes and hardly any traffic. On the third night there was no room at the hotel we had booked, because of a mistake with the reservation. Luckily, a farmer and his wife offered to put us up for the night. Their cottage was tiny, with a thick carpet and a fire in the living room, and they cooked us an amazing dinner. We still send them a card every Christmas. That night taught me that the best travel experiences are usually the ones you don't plan.",
    "\"Travel\" is mainly a verb or an uncountable noun, so say \"a trip\" or \"a journey\", not *a travel. Remember the false friends: \"parents\" are only your mother and father, and a \"carpet\" is «alfombra» or «moqueta», not «carpeta»."
  ),
  u28: t(
    "Write an email to a friend describing a busy or difficult week you have just had at work, at school or at home. Use as many phrasal verbs and collocations from the unit as you can, naturally.",
    [
      "At least six phrasal verbs (\"get over\", \"put off\", \"come up with\", \"run out of\", \"look forward to\", \"catch up on\"...)",
      "At least one three-part phrasal verb (\"come up with\", \"get on with\", \"put up with\")",
      "Collocations with \"take\", \"pay\", \"keep\" or \"have\" (\"take a break\", \"pay attention\", \"keep in touch\")",
      "At least one of \"actually\", \"eventually\" or \"hardly\" used correctly",
      "An informal but correct register",
    ],
    "Hi Jake,\n\nSorry I haven't been in touch, but this has been the craziest week! On Monday my boss asked me to come up with a new marketing plan by Thursday, so I had to put off everything else. On Tuesday the printer broke down just as I was printing the final version, and on Wednesday we ran out of coffee, which was a disaster. I hardly slept at all. I also had to put up with my noisy neighbors, who decided to have a party on Wednesday night. Eventually, I finished the plan and presented it on Thursday. Actually, it went really well, and my boss said it was the best proposal she'd seen all year! On Friday I took a day off to get over the stress and catch up on some sleep. Now I'm finally getting on with my own life again. I'm really looking forward to seeing you next weekend. Let's keep in touch more often!\n\nBest,\nMarta",
    "\"Eventually\" means «al final», not «eventualmente», and \"actually\" means «en realidad». \"Hardly\" means «apenas» and already has a negative meaning, so don't add \"not\": *I didn't hardly sleep is wrong."
  ),
  u29: t(
    "Write an opinion essay on this question: \"Is it better to learn a language at school or by living abroad?\" Use a wide range of B2 grammar and vocabulary.",
    [
      "An introduction, two or three body paragraphs and a conclusion",
      "A variety of linkers (contrast, addition, result, purpose)",
      "At least one conditional (second, third or mixed) and one passive",
      "At least one relative clause and one cleft or emphatic sentence",
      "Accurate verb patterns and collocations",
    ],
    "Millions of people learn a foreign language every year, but there is no agreement on the best way to do it. Some people believe that school gives you a solid base, whereas others argue that nothing compares to living abroad.\n\nOn the one hand, school lessons, which are usually free, provide structure. Grammar is explained step by step, and students are encouraged to practice regularly. Without this foundation, many learners would find it difficult to make progress.\n\nOn the other hand, what really makes a difference is using the language every day. People who live abroad are forced to communicate in real situations, so they improve their listening and speaking much faster. If I hadn't spent a year in Dublin, I would never have lost my fear of speaking English. However, moving abroad is expensive, and not everyone can afford it.\n\nIn conclusion, I believe that the two methods work best together. Students should study the basics at school in order to build confidence, and then spend time abroad if they get the chance.",
    "A good B2 essay shows range without losing accuracy. Check the classic errors before you finish: subject always present, \"-s\" with he/she/it, \"people\" with a plural verb, and \"despite\" + noun, never + a clause."
  ),
  u30: t(
    "Write a letter to yourself to read in five years' time. Describe your life now, say what you have achieved in English, what you regret not doing, and what you hope you will have done by the time you read it.",
    [
      "Present perfect for achievements (\"I've finished the B2 course\")",
      "\"I wish\" / \"should have\" for a regret",
      "Future perfect and future continuous (\"By then I will have...\", \"I'll be working...\")",
      "A conditional and a cleft sentence",
      "A wide range of B2 vocabulary and linkers",
    ],
    "Dear future me,\n\nIt's October, and I've just finished the B2 English course. I've been studying for almost two years, and although it hasn't always been easy, I'm really proud of myself. I can now watch series without subtitles, and last month I gave my first presentation at work in English. What surprised me most was that nobody noticed my nerves.\n\nOf course, I have some regrets. I should have started speaking with native speakers much earlier instead of only doing grammar exercises. I wish I had been less afraid of making mistakes. If I had practiced more, I would probably feel more confident now.\n\nBy the time you read this, I hope you will have passed the C1 exam and that you'll be working for an international company. Maybe you'll be living abroad, too. Whatever happens, please don't stop reading in English, and keep in touch with the friends you made in class. Remember how much effort it took to get here.\n\nGood luck,\nMe",
    "This final task brings together the whole B2. Notice the contrast between \"I've finished\" (a result now), \"I should have started\" (a past regret) and \"you will have passed\" (completed before a future moment)."
  ),
};
