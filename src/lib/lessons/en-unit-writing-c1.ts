// Synced from cheneygross-afk/lengo:src/lib/lessons/en-unit-writing-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each EN-C1 unit's review lesson (en-unit-reviews.ts),
// keyed by unit id as in en-c1.ts ("u01" to "u18"). Same shape as
// en-unit-writing-a1.ts (write with wr() from ./skills-authoring: prompt,
// [minWords, maxWords], rubric, English modelAnswer, explanation), with the
// prompt, rubric and explanation in English, English examples in "double
// quotes", Spanish words in «guillemets» and a learner's wrong English
// unquoted after an asterisk. Each task only needs the grammar and words of
// its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [160, 240], rubric, modelAnswer, explanation);

export const EN_C1_UNIT_WRITING: Record<string, WriteExercise> = {
  u01: t(
    "Your town council plans to close the public library and turn the building into a parking lot. Write a formal letter to the council objecting to the plan. Use inversion to make your argument forceful and formal.",
    [
      "At least two cases of negative inversion (\"Never before has...\", \"Not only does...\", \"Under no circumstances should...\")",
      "One conditional inversion (\"Should you...\", \"Had the council...\", \"Were the library to...\")",
      "One inversion after \"so\" or \"such\" (\"So great is...\", \"Such was...\")",
      "A formal opening, a clear request and a formal closing",
    ],
    "Dear Council Members,\n\nI am writing to object in the strongest terms to the proposal to close Riverside Library and convert the site into a parking lot.\n\nNever before has this town considered sacrificing a public service on such a scale for so little benefit. Not only does the library lend thousands of books every month, but it also offers free internet access, homework clubs and English classes for newcomers. For many elderly residents, it is the only warm, quiet place where they can meet others.\n\nSo strong is local feeling on this matter that over two thousand people signed our petition in a single week. Such was the turnout at last month's public meeting that dozens of residents had to stand outside.\n\nHad the council consulted the community before publishing the plan, it would have understood how much the library is valued. Were the building to be demolished, the damage would be irreversible. Under no circumstances should a short-term parking problem be solved at the expense of education and culture.\n\nShould you wish to discuss alternatives, our residents' association would be glad to meet you at your earliest convenience.\n\nSincerely,\n\nLucia Romero",
    "After a negative or restrictive adverbial at the start, English inverts the auxiliary and the subject: \"Never before has this town considered\", not *Never before this town has considered. Conditional inversion drops \"if\" and fronts \"had\", \"should\" or \"were\": \"Had the council consulted...\" means «Si el concejo municipal hubiera consultado...»."
  ),
  u02: t(
    "Write a short opinion piece for a language-learning blog titled \"What really makes you fluent\". Use cleft sentences and fronting to highlight the ideas you consider most important.",
    [
      "At least two \"It is/was... that/who\" clefts",
      "At least one wh-cleft (\"What matters is...\", \"What I did was...\") and one all-cleft (\"All you need is...\")",
      "One example of fronting for emphasis (\"This I learned the hard way.\")",
      "A clear position and a short conclusion",
    ],
    "Most people think that fluency comes from studying grammar for hours. In my experience, it is not the amount of grammar you know that makes you fluent; it is how often you actually use the language.\n\nWhat changed everything for me was a six-month exchange in Toronto. Before that, I could conjugate every verb perfectly, but I froze whenever someone spoke to me. What I had never done was have a real conversation in which I could not prepare my answers in advance. It was only when I was forced to order food, argue about soccer and make phone calls that the words started to come out naturally.\n\nMistakes, of course, I made by the hundred. This I learned the hard way: nobody cares about a missing article if your message is clear. The thing that people do notice is whether you are willing to keep talking.\n\nSo, what should learners do? All you need, in my view, is twenty minutes of speaking a day, with a teacher, a friend or even yourself in the mirror. What matters is not perfection but regular, real communication. It is the habit, not the textbook, that eventually makes you fluent.",
    "A cleft splits one idea into two clauses to point at the key element: \"It was only when I was forced to... that the words started to come out\". The Spanish «Lo que importa es...» becomes \"What matters is...\", never *That what matters is or *The that matters is."
  ),
  u03: t(
    "Rewrite this informal summary in English as one formal paragraph for a company report, and then add two or three sentences of your own: «Muchos empleados trabajan desde casa, así que la oficina está medio vacía, gastamos menos en energía, pero la gente se comunica peor y los nuevos tardan más en aprender». Use nominalization throughout.",
    [
      "At least five nominalizations (\"the introduction of\", \"a reduction in\", \"the decline in\"...)",
      "Correct articles with abstract nouns: no \"the\" for general ideas (\"Communication is...\"), \"the\" for specific ones (\"the communication between teams\")",
      "Impersonal, formal tone with no \"we\" or \"you\"",
      "At least one cause-and-effect link (\"has resulted in\", \"has led to\", \"owing to\")",
    ],
    "The widespread adoption of remote working over the past two years has had a significant impact on the organization. The most visible consequence is the low occupancy of the main office, which now rarely exceeds fifty percent on any given day. This reduction in the use of office space has resulted in a considerable decrease in energy costs, estimated at eighteen percent in the last fiscal year.\n\nHowever, these savings have been accompanied by a noticeable decline in the quality of internal communication. The absence of informal contact between departments has made the exchange of information slower and less reliable, and several managers have reported delays in the resolution of routine problems. Of particular concern is the integration of new employees, whose training now takes considerably longer than before.\n\nTo address these issues, the introduction of two compulsory office days per week is recommended, together with the creation of a mentoring program for recent recruits. Regular evaluation of these measures will be essential to ensure that efficiency is not achieved at the expense of collaboration and knowledge-sharing.",
    "Nominalization turns actions into nouns (\"adopt\" becomes \"the adoption of\", \"reduce\" becomes \"a reduction in\"), which makes a text sound objective and formal. With general abstract nouns English uses no article: \"Communication is essential\", not *The communication is essential as in Spanish «La comunicación es esencial»."
  ),
  u04: t(
    "You have received two job offers: one from a large international company and one from a small local start-up. Write a short piece comparing them and explaining which you would choose. Avoid repetition by using substitution, ellipsis and reference words.",
    [
      "Substitution with \"one/ones\", \"so\" or \"do so\" (\"I hope so\", \"if I do so\")",
      "At least two examples of ellipsis (\"I could, but I won't\", \"The salary is higher and the hours longer\")",
      "Reference words to link ideas (\"the former\", \"the latter\", \"this\", \"such\")",
      "A clear final decision",
    ],
    "Last month I received two job offers, and choosing between them has been harder than I expected. The first is from a large international bank; the second, from a small tech start-up in my hometown.\n\nThe former offers a higher salary, a clear career path and the chance to work abroad. The latter cannot compete financially, and its future is far from certain. Its founders believe the company will triple in size within two years, and I hope so, but nobody can guarantee it. Such uncertainty would have put me off a few years ago.\n\nOn the other hand, the bank expects its junior analysts to work very long hours, and I am not sure I want to. At the start-up I would have more responsibility from day one and would be able to see the results of my work. This matters to me more than a bigger salary.\n\nMy parents think I should accept the bank's offer, and many of my friends do too. I understand why: it is the safer of the two. Still, if I am ever going to take a risk, now is the time to do so. I have decided to join the start-up, and I don't think I will regret it.",
    "English avoids repeating words much more than Spanish does: \"I hope so\" replaces a whole clause (Spanish «espero que sí»), \"to do so\" replaces a verb phrase, and \"the former\" and \"the latter\" point back to two things already mentioned. After an auxiliary or \"to\", the rest of the verb phrase can be dropped: \"I am not sure I want to\", not *I am not sure I want."
  ),
  u05: t(
    "Write a short report on the results of a survey about how young adults in your city use social media. Present the findings cautiously, distinguishing what is certain, likely and only possible.",
    [
      "At least three hedging devices (\"appear to\", \"tend to\", \"it would seem that\", \"to some extent\")",
      "At least two expressions of probability (\"are likely to\", \"may well\", \"is bound to\", \"there is a strong chance that\")",
      "A distancing structure (\"is said to\", \"is thought to\", \"It has been suggested that\")",
      "A cautious conclusion that does not overstate the data",
    ],
    "The survey, completed by 412 residents aged between eighteen and twenty-five, provides a useful, if incomplete, picture of social media use in the city.\n\nThe most striking finding is the amount of time spent online. Respondents appear to spend an average of three and a half hours a day on social platforms, although this figure is likely to be an underestimate, since people tend to underreport habits they regard as negative. Women seem to use image-based platforms more than men, while men are somewhat more likely to watch live streams.\n\nIt would seem that heavy use is linked to lower levels of sleep: almost half of those who spend more than four hours online reported sleeping fewer than six hours a night. However, this does not necessarily mean that one causes the other. Social media is often said to increase anxiety, and the data may well support this view to some extent, but other factors, such as exam pressure, could also play a role.\n\nIn conclusion, the results suggest that the issue deserves further attention. A larger, longer study is bound to produce more reliable conclusions, and there is a strong chance that it will also reveal important differences between neighborhoods.",
    "Academic and professional English softens claims that the data cannot fully prove: \"appear to\", \"tend to\" and \"it would seem that\" are much more common than in Spanish reports. Note the word order of \"may well\" (\"the data may well support\"), and that \"is bound to\" means near certainty, not obligation."
  ),
  u06: t(
    "Write a blog post arguing for or against a four-day working week. Organize your argument with a range of written discourse markers, and include one short quoted exchange from a conversation that uses spoken markers.",
    [
      "Written markers to add, contrast and concede (\"Moreover\", \"Nevertheless\", \"Admittedly\", \"That said\")",
      "A marker to give an example and one to conclude (\"For instance\", \"All in all\")",
      "A short dialogue with spoken markers (\"Well\", \"I mean\", \"Anyway\", \"Mind you\")",
      "Correct use of \"actually\", \"currently\" or \"eventually\" (not as false friends)",
    ],
    "Should we all be working four days a week? A few years ago the idea sounded like a fantasy; it is currently being tested by hundreds of companies around the world.\n\nThe main argument in favor is productivity. Several trials have found that employees achieve roughly the same results in four days as in five. Moreover, staff report lower levels of stress and take fewer sick days. For instance, one British trial found that sick days fell by around two thirds.\n\nAdmittedly, the model does not suit every sector. Hospitals, schools and shops cannot simply close for an extra day. Nevertheless, they could introduce rotating schedules so that each employee works four days while the service stays open.\n\nWhen I mentioned this to my manager, her reaction was revealing. \"Well, I mean, it sounds great,\" she said, \"but who's going to answer the phone on Fridays? Mind you, I'd love a long weekend myself.\"\n\nThat said, her concern is a practical one, not an objection in principle. Many people assume the change would cost money; actually, most trials suggest the opposite. All in all, I am convinced that the four-day week will eventually become the norm.",
    "Written markers such as \"Moreover\" and \"Nevertheless\" belong in formal argument, while \"Well\", \"I mean\" and \"Mind you\" belong in speech. Remember the false friends: \"actually\" means «en realidad», not «actualmente» (\"currently\"), and \"eventually\" means «al final», not «eventualmente»."
  ),
  u07: t(
    "Write an entry for a local history website about an old building in your town (real or invented): its origins, the people connected with it and what it is used for today. Use participle clauses and advanced relative clauses to pack information into elegant sentences.",
    [
      "At least two participle clauses (\"Built in 1890, the station...\", \"Having lost its purpose, ...\")",
      "One absolute construction or \"with\" + noun + participle (\"its roof having collapsed\", \"with its windows boarded up\")",
      "Formal relatives with prepositions or quantifiers (\"in which\", \"whose\", \"most of whom\")",
      "Correct commas in non-defining relative clauses",
    ],
    "Built in 1887 to serve the new railway line, the old Valley Station was once the busiest building in our town. Designed by a local architect whose other works include the town hall, it combined red brick with elegant iron columns imported from Scotland.\n\nFor almost eighty years the station welcomed thousands of travelers, many of whom were workers heading for the textile mills further north. Having lost most of its traffic to the highway in the 1960s, the line was finally closed in 1971. The building then stood empty for decades, its roof slowly collapsing and its platforms overgrown with weeds.\n\nThe turning point came in 2009, when a group of residents, led by a retired engineer named Thomas Hale, formed an association whose aim was to save the station. Working mostly at weekends, the volunteers raised enough money to repair the roof and restore the original clock, which had been missing since the closure.\n\nToday the station houses a small museum, in which visitors can see photographs, uniforms and tickets dating back to the nineteenth century, and a coffee shop where the old waiting room used to be. With its clock working again, it has once more become a meeting point for the whole town.",
    "A participle clause shares its subject with the main clause: \"Built in 1887, the old Valley Station was...\" works because the station was built. In formal relatives the preposition goes before \"which\" or \"whom\" (\"in which visitors can see\"), and \"many of whom\" follows the Spanish «muchos de los cuales», never *many of them who."
  ),
  u08: t(
    "A colleague has asked for your feedback on a training program that you found disappointing. Write a reply in which you express regret about what happened and make formal recommendations for next year. Use the unreal past and the English subjunctive.",
    [
      "\"I wish\" or \"If only\" with the past or past perfect",
      "\"It's (high) time\", \"would rather\" or \"as if/as though\" with an unreal past",
      "At least two subjunctive structures (\"I recommend that the course be...\", \"It is essential that every trainer have...\")",
      "A conditional alternative (\"But for\", \"Otherwise\", \"Supposing\", \"Provided that\")",
    ],
    "Hi Daniel,\n\nThanks for asking for my feedback on this year's leadership program. I'll be honest: I wish it had lived up to our expectations, but it didn't.\n\nThe content itself was solid. The problem was the format. The trainer spoke for three hours at a time, as if we were students in a lecture hall rather than managers who wanted to practice. If only we had been given more time for case studies and role plays! Several participants told me they would rather have had two shorter sessions a week than one long day a month. But for the excellent final workshop, I think most of us would have rated the course very poorly.\n\nFor next year, I would make three recommendations. First, I recommend that the course be redesigned around practical tasks, with theory kept to a minimum. Second, it is essential that every trainer have recent management experience of their own. Third, I suggest that each participant receive a short follow-up session three months later; otherwise, much of what we learn is quickly forgotten.\n\nIt's high time we treated training as an investment rather than a box to tick. Provided that these changes are made, I'd be happy to help promote the programme.\n\nBest regards,\nSofia",
    "After \"I wish\", \"If only\", \"as if\" and \"It's high time\" English uses a past form for something unreal (\"It's high time we treated\"), and the past perfect for past regrets (\"I wish it had lived up to\"). The subjunctive after \"recommend\", \"suggest\" or \"It is essential that\" uses the bare verb for every person: \"that every trainer have\", not *has, matching the Spanish subjunctive «que cada formador tenga»."
  ),
  u09: t(
    "Write a short article for a company newsletter about a project that faced serious problems but finally succeeded. Use strong, natural collocations instead of general verbs and adjectives.",
    [
      "At least four verb + noun collocations (\"meet a deadline\", \"pose a threat\", \"take measures\", \"reach a compromise\")",
      "At least three adjective + noun collocations (\"heavy rain\", \"a narrow margin\", \"a steep learning curve\")",
      "At least two adverb + adjective collocations (\"bitterly disappointed\", \"highly unlikely\", \"deeply grateful\")",
      "No Spanish-style collocations such as *make a question or *put attention in place of the English ones",
    ],
    "When our team took on the redesign of the customer app last spring, few of us realized how steep the learning curve would be. Within a month, it became painfully clear that the original deadline was highly unlikely to be met.\n\nThe first setback came when a key supplier went out of business, which posed a serious threat to the whole project. Shortly afterwards, two senior developers left the company, and morale plummeted. Some members of the team were bitterly disappointed, and a few openly questioned whether we should carry on.\n\nIt was at this point that our manager, Elena Ruiz, made a crucial decision. Instead of placing the blame on anyone, she called a meeting, set clear priorities and took immediate measures to reduce the workload. After lengthy negotiations with the board, she reached a compromise: the launch would be postponed by six weeks, but the budget would remain the same.\n\nThe extra time made all the difference. We ran extensive tests, paid close attention to user feedback and fixed hundreds of minor bugs. The new app was launched in October and has already received overwhelmingly positive reviews.\n\nWe are deeply grateful to everyone who stayed on board during those difficult months.",
    "Collocations are the word partners that sound natural to native speakers: English says \"pay attention\" (not *put attention, from «prestar atención»), \"ask a question\" (not *make a question), \"pose a threat\", \"meet a deadline\" and \"bitterly disappointed\". Learning them as chunks is what makes Advanced writing sound fluent rather than translated."
  ),
  u10: t(
    "Write an informal email to an English-speaking friend telling them about a chaotic week in which everything seemed to go wrong (moving house, a new job, a family visit...). Bring the story to life with idioms, binomials, similes and metaphors, but keep them natural.",
    [
      "At least four everyday idioms used correctly (\"the last straw\", \"a blessing in disguise\", \"be over the moon\")",
      "At least one binomial (\"sick and tired\", \"peace and quiet\", \"by and large\")",
      "At least one simile with \"as... as\" or \"like\" (\"as cold as ice\", \"slept like a log\")",
      "An informal tone throughout, with no literal translations of Spanish idioms",
    ],
    "Hi Jake,\n\nSorry I've been so quiet lately. You won't believe the week I've just had!\n\nOn Monday I started my new job, which was a bit of a baptism of fire: my boss threw me in at the deep end with a presentation for the whole department. On Tuesday the movers turned up three hours late, so I was moving boxes until midnight. By Wednesday I was sick and tired of cardboard and bubble wrap.\n\nThen, out of the blue, my aunt called to say she was coming to stay for the weekend. The apartment was in chaos, and the heating had stopped working, so the place was as cold as ice. The last straw came on Friday, when I locked myself out and had to wait two hours in the rain for a locksmith.\n\nStill, it turned out to be a blessing in disguise. My new neighbour saw me standing outside like a drowned rat and invited me in for a cup of tea. We got on like a house on fire, and she's offered to show me around the area.\n\nBy and large, things are looking up. My aunt has gone home, I finally have some peace and quiet, and last night I slept like a log. I'm over the moon with the new job, too.\n\nCatch up soon?\nAna",
    "Idioms only sound natural in their exact form: \"the last straw\" is the English version of «la gota que colmó el vaso», and \"slept like a log\" corresponds to «dormí como un tronco». Binomials have a fixed order (\"peace and quiet\", never *quiet and peace), and idioms like these belong in informal writing, not in a report."
  ),
  u11: t(
    "Write a short article for an international student magazine about your first months studying in an English-speaking country, focusing on the misunderstandings caused by false friends. Use a range of prefixes, suffixes and compound words.",
    [
      "At least four false friends used correctly (\"actually\", \"embarrassed\", \"library\", \"attend\", \"sensible\", \"realise\"...)",
      "At least three words with prefixes or suffixes (\"misunderstanding\", \"unforgettable\", \"homesickness\")",
      "At least two compound nouns or adjectives (\"part-time\", \"bookshop\", \"well-known\")",
      "A light, engaging tone suitable for a student magazine",
    ],
    "When I arrived in Edinburgh last September, I was confident that my English was more than good enough. It took me less than a week to realize how wrong I was.\n\nMy first misunderstanding happened in a bookstore. I asked the assistant whether it was a library, and she patiently explained that in a library you borrow books, whereas here you buy them. The second was far more embarrassing. At a welcome party, I told a group of strangers that I was very \"constipated\" because I had a cold. I meant the Spanish word for a blocked nose, of course, which in English is simply \"I've got a cold\". Their faces were unforgettable.\n\nFalse friends are everywhere. \"Actually\" does not mean \"currently\"; it means \"in fact\". If you \"attend\" a lecture, you are present, not helping anyone; the verb for that is \"assist\". And a \"sensible\" person is not sensitive but reasonable and practical.\n\nThe homesickness of the first weeks has gone, and I now have a part-time job in a well-known coffee shop near the university. My advice to new international students is simple: be patient, laugh at your mistakes and keep a notebook of every false friend you meet. Eventually, they become old friends.",
    "False friends look like Spanish words but mean something different: \"library\" is «biblioteca» (a «librería» is a \"bookshop\"), \"embarrassed\" is «avergonzado», and \"constipated\" refers to the digestive system, not a cold. Prefixes and suffixes let you build precise words from familiar roots: \"misunderstanding\", \"unforgettable\", \"homesickness\"."
  ),
  u12: t(
    "A neighbor has been holding loud parties late at night several times a week. Write a polite but firm note to them asking them to keep the noise down. Use indirect, softened language so that the request does not sound rude, while still making your point clear.",
    [
      "Indirect requests (\"I was wondering if...\", \"Would you mind...\", \"I'd be grateful if...\")",
      "Softeners and downtoners (\"a little\", \"slightly\", \"I'm afraid\", \"it seems that\")",
      "The past or continuous for distance (\"I was hoping...\", \"I wanted to ask...\")",
      "A friendly opening and a positive, cooperative closing",
    ],
    "Hi there,\n\nI'm Carlos from apartment 4B, just below you. I hope you don't mind me leaving this note; I thought it might be easier than knocking on your door late at night.\n\nI wanted to mention something that has been a bit of a problem for me recently. I'm afraid the music from your apartment has been quite loud on several evenings over the last few weeks, sometimes until two or three in the morning. I completely understand that everyone likes to have friends over, and I certainly don't want to spoil anyone's fun.\n\nThe thing is, I start work very early, so I've been finding it rather difficult to get enough sleep. I was wondering if it might be possible to turn the volume down a little after eleven on weeknights. I'd also be really grateful if you could let me know in advance when you're planning a bigger party, so that I can make other arrangements if necessary.\n\nWould you mind sending me a quick message on the number below if there's anything you'd like to discuss? I'm sure we can find a solution that works for both of us.\n\nThanks very much for your understanding.\n\nBest wishes,\nCarlos (flat 4B)\n555-0142",
    "English politeness relies on indirectness much more than Spanish does: a direct request such as *Turn the music down after eleven sounds rude, while \"I was wondering if it might be possible to...\" sounds considerate. The past and continuous forms (\"I wanted to mention\", \"I was wondering\") create polite distance; they do not refer to the past."
  ),
  u13: t(
    "You booked a hotel room for a conference, but on arrival the room was not as described and the staff were unhelpful. Write a formal email of complaint to the hotel's customer relations manager, describing the problems and stating clearly what you expect.",
    [
      "A formal opening and subject line, and the reason for writing in the first paragraph",
      "A clear, factual account of the problems in logical order",
      "A firm statement of the action you expect (\"I would therefore ask you to...\")",
      "Formal closing phrases (\"I look forward to hearing from you\", \"Yours sincerely\")",
    ],
    "Subject: Complaint regarding booking ref. HB-48213\n\nDear Ms. Clarke,\n\nI am writing to express my dissatisfaction with my recent stay at the Harbour View Hotel from March 12 to 15, which I booked to attend an international conference.\n\nI had reserved a quiet double room with a desk and a sea view, as advertised on your website. On arrival, however, I was given a small room overlooking the parking lot, directly above the hotel kitchen. The noise from the extractor fans continued until well after midnight, and there was no desk, which made it impossible for me to prepare my presentation.\n\nWhen I raised the matter at reception, I was told that no other rooms were available and that nothing could be done. The following morning, the duty manager was equally unhelpful and did not offer any form of compensation.\n\nGiven that I paid in full for a room that did not match the description, I would therefore ask you to refund the difference between the room I booked and the one I received, which I estimate at 150 euros. I would also appreciate an explanation of how this situation arose.\n\nI look forward to hearing from you at your earliest convenience.\n\nSincerely,\n\nDiego Morales",
    "A formal complaint states the purpose immediately (\"I am writing to express my dissatisfaction with...\"), gives facts rather than emotions and ends with a concrete request. Note \"Yours sincerely\" when you know the reader's name and \"Yours faithfully\" with \"Dear Sir or Madam\", and avoid the Spanish-style *I write you to complain."
  ),
  u14: t(
    "Your college or company director has invited proposals for improving staff or student wellbeing. Write a proposal with a title and short headed sections (for example Introduction, Current situation, Recommendations, Conclusion).",
    [
      "A title and clear section headings",
      "An introduction stating the purpose of the proposal (\"The aim of this proposal is to...\")",
      "Specific, justified recommendations using formal language (\"It is recommended that...\", \"This would enable...\")",
      "A conclusion that summarises the expected benefits",
    ],
    "Proposal: Improving Student Wellbeing at Northfield College\n\nIntroduction\nThe aim of this proposal is to outline the main problems affecting student wellbeing at the college and to recommend practical measures to address them. It is based on a survey of 230 students carried out in February.\n\nCurrent situation\nThe survey suggests that stress levels are high, particularly during the exam period. Over sixty percent of respondents reported difficulty sleeping, and many felt that they had nowhere quiet to study or rest. In addition, the counseling service currently has a waiting list of almost four weeks, which discourages students from seeking help.\n\nRecommendations\nFirstly, it is recommended that one of the unused classrooms be converted into a quiet room, open from 8 a.m. to 10 p.m. This would enable students to study or relax away from the noise of the canteen. Secondly, the college should consider employing a second part-time counselor, which would reduce waiting times significantly. Finally, a series of short workshops on time management and exam preparation could be offered at the start of each term.\n\nConclusion\nThe measures proposed above are relatively inexpensive and could be introduced within a few months. If implemented, they would be likely to improve both student wellbeing and academic results.",
    "A proposal persuades the reader to act, so it combines facts (\"Over sixty per cent of respondents reported...\") with clear, formal recommendations (\"It is recommended that one of the classrooms be converted...\"). Headings, nominalisation and impersonal structures make it look professional; avoid the informal \"I think we should\" in this genre."
  ),
  u15: t(
    "You have just led a meeting with a supplier in which you negotiated new terms. Write a follow-up email to the supplier summarising what was agreed, confirming the action points and tactfully raising one issue that is still open.",
    [
      "A reference to the meeting and thanks (\"Thank you for taking the time to...\")",
      "A clear summary of the agreements and action points, with names and deadlines",
      "Negotiation language for the open issue (\"We would be prepared to... provided that...\", \"Would you be willing to consider...?\")",
      "Constructive, diplomatic tone and a professional closing",
    ],
    "Subject: Follow-up to our meeting on May 6\n\nDear Mr. Patel,\n\nThank you for taking the time to meet us on Tuesday. I thought it was a very productive discussion, and I'd like to summarize the main points so that we are all on the same page.\n\nFirst, we agreed that the price per unit will be reduced by four percent for all orders above 2,000 units, starting in June. Second, delivery times will be shortened from fifteen to ten working days. Third, your team will provide monthly reports on stock levels.\n\nAs for the action points, your colleague Ms. Grant will send us the revised contract by May 15, and our legal department will review it within a week of receiving it. I will then arrange a short call to sign off on the final version.\n\nThere is one issue that we were not able to resolve: the payment terms. We understand your preference for thirty days, but we would be prepared to accept this provided that the late-delivery penalty we discussed is included in the contract. Would you be willing to consider this as a compromise?\n\nPlease let me know if I have missed anything. Once again, many thanks for your flexibility; we very much look forward to working with you.\n\nKind regards,\n\nEmma Lopez\nPurchasing Manager",
    "A good follow-up email turns a spoken meeting into a written record: \"we agreed that...\", \"will send us... by 15 May\". In negotiation, conditional offers such as \"We would be prepared to accept this provided that...\" keep the door open without giving everything away, and a question (\"Would you be willing to consider...?\") is more diplomatic than a demand."
  ),
  u16: t(
    "Write a short guide for Spanish-speaking students who are about to spend a year in the UK after learning mostly American English (or the other way round). Explain the main differences in vocabulary, spelling, grammar and pronunciation they are likely to notice.",
    [
      "At least four vocabulary pairs (\"flat/apartment\", \"lift/elevator\", \"queue/line\", \"holiday/vacation\")",
      "At least one spelling difference and one grammar difference (\"have got\" vs \"have\", \"at/on the weekend\", present perfect vs past simple)",
      "A comment on pronunciation or accents",
      "Practical, reassuring advice and a clear organisation",
    ],
    "If you have learned mostly American English and are about to spend a year in Britain, don't panic: you will understand almost everything. However, a few differences are worth knowing in advance.\n\nVocabulary is where you will notice the gap first. You will live in a flat, not an apartment, and take the lift rather than the elevator. You will queue at the bus stop instead of standing in line, and in summer you will go on holiday, not on vacation. Be careful with \"pants\": in Britain they are underwear, so ask for trousers in a clothes shop.\n\nSpelling differs slightly, too: \"colour\" and \"centre\" in the UK, \"color\" and \"center\" in the US. Both are correct, but try to be consistent within one text.\n\nGrammar differences are small. British speakers often say \"Have you got a car?\" where Americans say \"Do you have a car?\", and they tend to use the present perfect in sentences such as \"I've just eaten\", where Americans often say \"I just ate\". You will also hear \"at the weekend\" instead of \"on the weekend\".\n\nFinally, accents vary enormously across the UK, from London to Glasgow. In most of England, speakers do not pronounce the r in \"car\" or \"hard\". Give yourself a few weeks; your ear will adjust.",
    "Neither variety is more correct: \"flat\" and \"apartment\", \"colour\" and \"color\", or \"Have you got...?\" and \"Do you have...?\" are all standard. What matters at the Advanced level is recognising both and staying consistent in your own writing, just as a Spanish speaker might choose between «carro» and «coche» depending on the audience."
  ),
  u17: t(
    "Write an essay of opinion on the following question: \"Should universities replace traditional exams with continuous assessment?\" Show your full Advanced range: emphasis, nominalisation, hedging, cohesive markers, participle or relative clauses and the subjunctive.",
    [
      "An introduction that frames the question and a conclusion with a clear, nuanced opinion",
      "At least one inversion or cleft sentence for emphasis",
      "Hedging and nominalisation to sound objective (\"The introduction of...\", \"it would appear that...\")",
      "A participle or formal relative clause, and one subjunctive (\"It is vital that every student be...\")",
    ],
    "For more than a century, final examinations have been the main way of measuring university students' performance. In recent years, however, a growing number of educators have argued for their replacement with continuous assessment.\n\nSupporters of this change point to the considerable pressure created by a single high-stakes test. Not only do exams reward short-term memorization, but they also disadvantage students who suffer from anxiety. Continuous assessment, based on essays, projects and presentations, would appear to offer a fairer picture of a student's abilities, since it measures progress over time rather than performance on a single day.\n\nThat said, the approach is not without its drawbacks. The constant evaluation of coursework may well lead to permanent stress rather than less of it. Moreover, essays written at home are increasingly difficult to verify, a problem made worse by the availability of online writing tools.\n\nWhat seems most reasonable, therefore, is a combination of both methods. Exams, many of which already include practical tasks, could be shortened and complemented by assessed projects carried out in class. Whatever system is chosen, it is vital that every student be given clear criteria and regular feedback.\n\nIn conclusion, abolishing exams entirely would be a mistake, but reducing our dependence on them is long overdue.",
    "An Advanced essay combines several tools at once: \"Not only do exams reward...\" uses inversion for emphasis, \"What seems most reasonable is...\" is a wh-cleft, \"would appear to\" and \"may well\" hedge claims, and \"many of which\" is a formal relative. After \"it is vital that\" the subjunctive keeps the bare verb: \"every student be given\", not *is given."
  ),
  u18: t(
    "You have been awarded a scholarship to study abroad next September, but a family situation means you need to start a year later. Write a formal email to the scholarship committee asking to defer your place. Combine everything you have practised at the Advanced level: formal register, tactful requests, inversion, hedging and precise collocations.",
    [
      "Formal, appropriate register from the subject line to the closing",
      "A tactful, indirect request (\"I would be most grateful if...\", \"I was wondering whether it might be possible...\")",
      "At least one inversion or conditional inversion (\"Should the committee require...\", \"Were it not for...\")",
      "Hedging and precise collocations (\"exceptional circumstances\", \"give due consideration\", \"fully committed\")",
    ],
    "Subject: Request to defer scholarship place (ref. GS-2027-114)\n\nDear Members of the Scholarship Committee,\n\nI would like to begin by thanking you once again for awarding me a Global Scholars grant to pursue a master's degree in environmental engineering. Receiving your letter was one of the proudest moments of my life.\n\nIt is therefore with great regret that I am writing to ask whether it might be possible to defer my place until September of the following year. My father has recently undergone major surgery, and, as the only family member living nearby, I will need to take care of him and support my mother during his recovery, which is expected to last several months.\n\nWere it not for these exceptional circumstances, I would not hesitate to take up the scholarship as planned. I remain fully committed to the program, and I intend to use the coming year to improve my technical skills by working part-time for a local engineering firm.\n\nI fully appreciate that this request may cause some inconvenience, and I would be most grateful if the committee could give it due consideration. Should you require any supporting documents, such as a medical certificate, I would be happy to provide them.\n\nThank you very much for your time and understanding. I look forward to hearing from you.\n\nSincerely,\n\nPablo Ortega",
    "A formal request succeeds through tact: \"I am writing to ask whether it might be possible to...\" is far more effective than a direct *I want to change the date. Conditional inversion (\"Were it not for these exceptional circumstances\", \"Should you require...\") and collocations such as \"give due consideration\" and \"undergo surgery\" give the email the polish expected at the Advanced level."
  ),
};
