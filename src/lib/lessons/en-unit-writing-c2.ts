// Synced from cheneygross-afk/lengo:src/lib/lessons/en-unit-writing-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each EN-C2 unit's review lesson (en-unit-reviews.ts),
// keyed by unit id as in en-c2.ts ("u01" to "u33"). Same shape as
// en-unit-writing-a1.ts (write with wr() from ./skills-authoring: prompt,
// [minWords, maxWords], rubric, English modelAnswer, explanation), with the
// prompt, rubric and explanation in English, with Spanish words in
// «guillemets» and a learner's wrong English unquoted after an asterisk.
// Each task only needs the language of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [200, 300], rubric, modelAnswer, explanation);

export const EN_C2_UNIT_WRITING: Record<string, WriteExercise> = {
  u01: t(
    `A friend who runs a small holiday flat has just been served with a claim form by a former tenant who wants his deposit back. She is frightened by the legal wording. Write her an email explaining in plain English what has happened, who the parties are, what she must do next and what she may do to get help.`,
    [
      `At least three legal terms explained in plain English ("claimant", "defendant", "served", "judgment")`,
      `Civil and criminal vocabulary kept apart ("sue" vs "prosecute", "charge")`,
      `Clear obligations and options with "must" and "may" (no legalese "shall")`,
      `One Latin term used accurately ("pro bono", "bona fide", "de facto")`,
    ],
    `Hi Lucia,

Please don't panic. Being served with a claim form simply means that the court has formally notified you that someone is taking you to court. In this case your former tenant, Mr. Hale, is the claimant: he is the person bringing the claim. You are the defendant, which in a civil case just means the person being sued. Nobody is prosecuting you or charging you with anything, and you will not end up with a criminal record whatever happens.

He says you kept his deposit without good reason, and he wants it back with interest. The form gives you fourteen days to reply. Within that time you must do one of three things: pay what he claims, admit part of it, or file a defence explaining why you disagree. If you do nothing at all, the court may enter judgment against you by default, which means he wins automatically, without a hearing.

From what you told me, you have a strong case. Keep the inspection report, the photos of the damaged kitchen and the receipts for the repairs, because they are your evidence. You may also want to ask the advice centre in town for help; several lawyers there work pro bono, so it would not cost you anything.

Finally, don't be put off by the old-fashioned wording in the paperwork, with all its herebys and hereinafters. It sounds alarming, but it adds nothing to the meaning.

Call me tonight if you want to go through the form together.

Ana`,
    `Plain English explains each role instead of hiding behind formulas: the claimant sues, the defendant is sued, and "must" and "may" replace the drafting habit "shall". Remember that «demandar» is "sue" or "take someone to court", never *demand someone, and that "prosecute" and "charge" belong to criminal cases.`
  ),
  u02: t(
    `You have received a penalty charge notice for parking in a residents' bay, although you hold a valid permit. Write a formal letter to the council appealing against the decision. Give the reference, set out your grounds precisely, refer to the deadline and the relevant rule, and say what you want the council to do.`,
    [
      `A formal heading with the notice reference and date`,
      `Grounds for appeal set out in a clear order ("First", "Second", "I therefore do not accept")`,
      `Precise notice and contract vocabulary ("within 28 days of", "liable for", "notwithstanding", "enclosed")`,
      `A specific request and a formal close ("Yours faithfully")`,
    ],
    `Dear Sir or Madam,

Re: Penalty Charge Notice HX40721, issued on 12 March

I am writing to appeal formally against the above notice, which was issued for allegedly parking in a residents' bay on Linden Road without a valid permit. I submit this appeal within the period of 28 days stated on the notice, and I respectfully request that the charge be cancelled.

My grounds are as follows. First, I hold a valid residents' permit, number 55218, which was renewed on 1 March and remains in force until 28 February next year. A copy of the permit and of the council's confirmation email is enclosed. Second, the permit was clearly displayed on the dashboard at the time: the photograph attached to the notice itself shows its edge in the lower corner of the windscreen. I therefore do not accept that I am liable for the charge.

I would also draw your attention to section 4.2 of the council's own parking conditions, which states that a permit holder shall not be penalised where a permit is displayed but partially obscured, provided that it can still be identified. Notwithstanding any doubt about its visibility, the permit was valid and identifiable.

Should the council decide to reject this appeal, I would be grateful if you could set out the reasons in writing and inform me of my right to refer the matter to an independent adjudicator.

I look forward to receiving your decision.

Yours faithfully,

Carlos Ruiz`,
    `A formal appeal states the reference, the grounds and the remedy, in that order. Note the prepositions that Spanish speakers often get wrong: "liable for" (not *responsible of), "within 28 days of the notice" (not *in 28 days from), and «recurrir una multa» is "appeal against a fine" in British English and simply "appeal a fine" in American English.`
  ),
  u03: t(
    `You are a family doctor. Write a letter to a patient summarising yesterday's consultation: his symptoms, the diagnosis (with the clinical term explained in lay language), the prescription with exact dosage, and the warning signs that should make him seek help at once.`,
    [
      `Symptoms described precisely ("a burning pain", "bloating", "a sour taste")`,
      `A clinical term glossed in lay language ("in plain terms...")`,
      `Unambiguous dosage: dose, frequency, timing and duration`,
      `Red-flag symptoms and what to do if they appear`,
    ],
    `Dear Mr. Lopez,

Thank you for coming in yesterday. I am writing to summarise what we discussed, as there was a lot to take in.

Your symptoms, namely the burning pain in your upper abdomen, the bloating after meals and the sour taste in your mouth at night, are typical of what doctors call gastro-oesophageal reflux disease. In plain terms, acid from your stomach is flowing back up into your gullet and irritating its lining. It is a very common condition and, in most cases, easily treated.

I have prescribed omeprazole 20 mg capsules. Please take one capsule once a day, thirty to sixty minutes before breakfast, swallowed whole with a glass of water, for eight weeks. Do not stop early just because you feel better, as the lining needs time to heal. You may notice mild side effects such as a headache or an upset stomach; these usually settle within a few days.

A few changes to your routine will also help: avoid large meals late in the evening, cut down on coffee and alcohol, and raise the head of your bed slightly.

Please book a review appointment in two months. However, you should contact the surgery straight away, or go to the emergency department, if you have difficulty swallowing, vomit blood, pass black stools or lose weight without trying. These symptoms are unlikely, but they would need urgent investigation.

Do not hesitate to call if you have any questions.

Yours sincerely,

Dr. Emma Clarke`,
    `Dosage instructions must leave no room for doubt: dose, frequency, timing and duration ("one capsule once a day, before breakfast, for eight weeks"). Watch the medical false friends: «estar constipado» is "have a cold" (being "constipated" is a digestive problem), a patient "takes" tablets rather than *drinks pills, and «receta» here is a "prescription", not a recipe.`
  ),
  u04: t(
    `Tell the story of a time when a plan at work or at school went badly wrong and was rescued at the last minute. Use at least six English idioms naturally, keeping their fixed form, and avoid translating Spanish idioms word for word.`,
    [
      `At least six idioms, each in its fixed form ("at the eleventh hour", not *at the last hour)`,
      `Idioms that fit the register and the situation, not piled up for show`,
      `A coherent narrative in the past with a clear turning point`,
      `No calques of Spanish idioms`,
    ],
    `Last spring my manager asked me to organise our team's stand at a trade fair, and I jumped at the chance, little suspecting what I had let myself in for. Two days before the opening, the supplier rang to say that our display panels were stuck at customs. I was at my wits' end. My first instinct was to blame the supplier, but my colleague Tom pointed out that there was no use crying over spilt milk and that the clock was ticking.

So we bit the bullet and rebuilt the stand from scratch with whatever we could find. Tom knew someone who ran a print shop, and she pulled out all the stops to print new banners overnight. I spent the evening cutting cardboard and, to be honest, by midnight I was running on fumes.

On the morning of the fair, the stand looked surprisingly good, if a little home-made. Then, at the eleventh hour, the original panels arrived. By then we had grown fond of our improvised version, so we kept it. To our amazement, visitors loved it: several told us it stood out a mile from the slick, identical stands around us. Our manager was over the moon, and the whole episode turned out to be a blessing in disguise, because the company now commissions a similar handmade design every year.

The lesson I took away is that you shouldn't count your chickens before they hatch. Then again, you shouldn't give up on them too early either.`,
    `Idioms are fixed expressions: "at the eleventh hour", "bite the bullet" and "a blessing in disguise" lose their meaning if a word is changed. Translating Spanish idioms literally produces calques: «no hay mal que por bien no venga» becomes "every cloud has a silver lining" or "a blessing in disguise", and «estar con el agua al cuello» is "be up to your neck in it".`
  ),
  u05: t(
    `Write a reply for an advice column to a reader who cannot decide whether to leave a secure office job to open a bakery. Quote, half-quote or play with at least four English proverbs, including two that contradict each other, and give practical advice.`,
    [
      `At least four proverbs quoted accurately or deliberately half-quoted`,
      `Two contradictory proverbs set against each other`,
      `Proverbs introduced naturally ("as my grandmother liked to say", "you know how the rest goes")`,
      `Concrete, practical advice beyond the proverbs`,
    ],
    `Dear Hesitant,

You are caught between two proverbs, and they are pulling in opposite directions. On the one hand, a bird in the hand is worth two in the bush: your office job pays the mortgage, and the bakery is, for now, only a dream. On the other, nothing ventured, nothing gained, and you tell me you have been talking about this bakery for ten years. The trouble with proverbs is that there is always another one waiting to contradict the first.

So let me offer something more practical. Before you hand in your notice, test the waters. Run a stall at the weekend market for three months and keep careful accounts. If your bread sells out every Saturday, you will have evidence rather than hope. If it doesn't, you will have lost a few weekends, not your savings. Remember, too, that Rome wasn't built in a day; most successful small businesses start life as side projects.

I would also gently point out that the grass is always greener... You know how the rest goes. Your office may feel grey right now, but a baker's day starts at four in the morning, six days a week. Talk to people who have done it before you romanticise it.

Finally, look before you leap, by all means, but don't look forever. He who hesitates is lost, as my grandmother liked to say, usually while hesitating over the dessert menu.

Whatever you decide, decide it with your eyes open. And save me a loaf.

Margaret`,
    `English speakers often half-quote a proverb ("the grass is always greener...") because everyone knows the ending, and proverbs keep old grammar ("He who hesitates is lost", "Nothing ventured, nothing gained"). Use the English equivalent, not a translation: «más vale pájaro en mano que ciento volando» is "a bird in the hand is worth two in the bush".`
  ),
  u06: t(
    `Write a short, affectionate speech for a colleague's leaving party. Include at least one pun, one clear example of understatement and some gentle irony, and make sure the humour stays kind.`,
    [
      `At least one pun that plays on a double meaning`,
      `Understatement or deadpan ("not ideal" for a disaster)`,
      `Gentle irony that the audience can read correctly`,
      `A sincere moment and a toast to close`,
    ],
    `Good evening, everyone. I have been asked to say a few words about Daniel, which is a challenge, because after twelve years Daniel has said most of the words in this office himself.

When Daniel joined the accounts team, he told us he wanted a job that really counted. He has certainly delivered. He has counted invoices, receipts, expenses and, on one memorable occasion, every paper clip in the stationery cupboard, a shortfall he described in his report as "a modest discrepancy".

Daniel is famous for his calm. When the server crashed the night before the annual audit, he looked at the screen for a long time and said, "Well, that's not ideal." When the coffee machine broke the following week, he took a day off. We all understood. A man has his priorities.

He is also, as many of you know, a keen cyclist. He rides to work in all weathers, which explains why, between November and March, we have rarely seen his face without a faint layer of mud. He calls it his winter tan.

Joking aside, Daniel has been the person we all went to when something didn't add up, whether in a spreadsheet or in life. He was patient with every new starter, including me, and I am fairly sure he quietly fixed half of my formulas without ever mentioning it.

So, Daniel, we will miss you, and that is putting it mildly. Please raise your glasses: to Daniel, and to a retirement that will, I'm reliably informed, be only slightly less thrilling than a budget meeting.`,
    `A pun exploits two meanings at once ("a job that really counted", "didn't add up"), and understatement says far less than the truth ("that's not ideal" about a crashed server), a hallmark of British humour. Irony works only if the audience can see the gap between the words and the facts; note also that «gracioso» is "funny", while "graceful" means elegant.`
  ),
  u07: t(
    `Describe the town or city where you grew up as it was then and as it is now. Use figurative language deliberately: at least one conceptual metaphor, one simile, one example of personification, one of metonymy and one hyperbole, without mixing your metaphors.`,
    [
      `A simile with "like" or "as" and a sustained metaphor`,
      `Personification of a place or object ("the river muttering")`,
      `Metonymy ("the town hall" for the council) and one hyperbole`,
      `Consistent images: no mixed metaphors`,
    ],
    `The town I grew up in used to fall asleep at nine o'clock. By then the shutters were down along the high street, the last bus had sighed its way up the hill, and the only sound was the river muttering under the old stone bridge. Time moved slowly there, like honey off a cold spoon, and we teenagers were convinced that life was happening somewhere else.

Twenty years later, the town is barely recognisable. A tech company opened an office by the station, and new money poured in faster than anyone had expected. The high street is now a parade of glass and brushed steel, and the old bakery has become a cafe that sells coffee at prices that would have given my grandmother a heart attack. On weekday mornings the platform is a sea of laptops and lanyards, and the town hall talks proudly of growth, investment and a bright future.

I am not nostalgic by nature, and I know the old town was quietly dying. Its young people were leaving, its shops were closing one by one, and its school was half empty. Still, something has been lost. The river still runs under the bridge, but nobody seems to hear it now; its voice has been drowned out by the traffic. When I walk down the high street these days, I feel like a guest in a house I once lived in: everything is cleaner, brighter and more comfortable, and none of it is quite mine.`,
    `Metonymy names something by what is associated with it ("the town hall" for the council), personification gives human actions to things ("the river muttering", "the bus sighed"), and hyperbole exaggerates for effect ("would have given my grandmother a heart attack"). Keep each image consistent: switching pictures in mid-sentence (*the new money poured in and took off) gives the mixed metaphors that English readers notice at once.`
  ),
  u08: t(
    `The father of a colleague, Sofia, has died. Write her a message of condolence. Refer to the death tactfully, say something personal about her father, reassure her about work without pressure, and make a concrete offer of help.`,
    [
      `Tactful euphemism ("the loss of your father", "passed away") without sounding evasive`,
      `A personal, specific memory or comment`,
      `Indirect, pressure-free reassurance ("there's no rush", "no need to reply")`,
      `A concrete offer of help and an appropriate closing ("With deepest sympathy")`,
    ],
    `Dear Sofia,

I was so sorry to hear about the loss of your father. I only met him once, at the summer party two years ago, but I remember how proud he was when he talked about you and your work. He struck me as a warm, funny man with a great deal of time for other people, and I can only imagine how much he will be missed.

Please don't feel you need to reply to this, or to anyone else's messages, at the moment. Your only priority now is to look after yourself and your family.

I know this is a difficult time to think about work, so I just wanted to let you know that the team has everything in hand. I have taken over the Henderson report, and Tom is covering your client meetings until the end of the month, so there is nothing waiting on your desk. When you do feel ready to come back, there is no rush at all, and we can talk about easing back in gradually if that would help.

If there is anything practical I can do, whether it's dropping off a meal, walking the dog or simply keeping you company for an hour, please just say the word. I'll check in with you next week in any case, but there's no need to answer if you're not up to it.

With love and deepest sympathy,

Emma`,
    `"The loss of your father" and "passed away" soften the fact without hiding it, and a concrete offer ("dropping off a meal") helps far more than a vague "let me know if you need anything". Here «lo siento mucho» is "I'm so sorry", never *I feel it, and the most common phrase is "condolences on your loss" ("for your loss" is also heard).`
  ),
  u09: t(
    `A friend has just messaged you to say that, after a month of setbacks, she has finally found a flat in her new city. Write an enthusiastic reply. React like a native speaker, use emphatic structures and intensifiers, render at least one Spanish diminutive or augmentative idea in natural English, and include some words built with prefixes and suffixes.`,
    [
      `Exclamations of different shapes ("What fantastic news!", "How on earth...?", "Talk about...!")`,
      `Emphatic "do" and intensifiers matched to the adjective ("absolutely incredible", not *very incredible)`,
      `A Spanish diminutive or augmentative idea in natural English ("a tiny balcony", "a whopping...")`,
      `At least three words built with affixes ("unsure", "hopeless", "misjudged", "oversized")`,
    ],
    `Sofia!

What fantastic news! I've just read your message three times to make sure I wasn't imagining it. You actually got the flat? The one with the tiny balcony and the view of the castle? How on earth did you manage that, after everything that went wrong last month?

I do remember how you felt when the first landlord pulled out at the last minute. You were utterly devastated, and honestly, who could blame you? You'd spent weeks on viewings, and the whole search seemed hopeless. I'm so glad you didn't give up. Such persistence deserves a reward, and a lovely little flat in the old town is a pretty good one.

And the rent! A whopping two hundred pounds a month less than the other place, and it's bigger? That's absolutely incredible. I was half expecting you to tell me there was a catch, like a mysterious smell or a neighbour who practises the trumpet at midnight. (There isn't, is there?)

Seriously, I'm so proud of you. You were so unsure of yourself back in January, convinced you'd misjudged the whole move, and now look at you: new job, new city, new home. Talk about a comeback!

I'm already planning my first visit. I'll bring a ridiculously oversized plant for the balcony, so don't buy anything green. When do you get the keys? Do send me photos the minute you're in, and give me a call this weekend if you're not too busy unpacking.

Huge hugs,

Lucia`,
    `Ungradable adjectives take "absolutely" or "utterly" ("absolutely incredible", "utterly devastated"), not "very", and emphatic "do" stresses a fact ("I do remember"). English has no all-purpose diminutive suffix, so «un balconcito» becomes "a tiny balcony" and «un pisito» "a lovely little flat"; the affection lives in the adjectives.`
  ),
  u10: t(
    `You manage a project whose product launch has had to be postponed because of a last-minute technical problem. Write an email to your team explaining the setback, the plan and the timeline. Use business idioms where they make the message sharper, not where they obscure it.`,
    [
      `At least five business idioms used accurately ("hit a snag", "in the loop", "back to square one", "take stock")`,
      `The problem, the plan and the timeline stated clearly`,
      `An honest, calm, motivating tone`,
      `No empty jargon that hides who does what`,
    ],
    `Subject: Update on the Atlas launch

Hi all,

I want to touch base about the Atlas launch because, as most of you already know, we have hit a snag. Last Friday our payment provider flagged a security issue in the checkout integration, and we have had to put the launch on hold while it is fixed.

Let me be clear: this is a setback, not a disaster. The provider's engineers are working on a patch, and we expect it to be in place by the end of next week. In the meantime, I'd like us to use the time well rather than sit on our hands.

Here is the plan going forward. Mark's team will run a full round of testing as soon as the patch lands, so that we are not back to square one if anything else crops up. Sofia will keep our key accounts in the loop; our three biggest clients have already been told, and so far they have been very understanding. Marketing will push the campaign back two weeks, which, to be honest, gives them some welcome breathing space.

I know many of you have gone the extra mile over the last few months, and it is frustrating to stumble at the final hurdle. But I would rather launch late than launch with a flaw that damages our clients' trust. On that point I am not prepared to compromise.

Let's regroup on Thursday at ten to take stock. If anyone has concerns before then, my door is open.

Thanks for your patience and your hard work,

Diego`,
    `Business idioms earn their place when they make a point faster ("hit a snag", "back to square one", "keep them in the loop"); stacked jargon makes a message vaguer. Watch the false friends that appear in such emails: «actualmente» is "currently", not "actually", and «eventualmente» is "possibly" or "if necessary", whereas "eventually" means "in the end".`
  ),
  u11: t(
    `Write a short blog post for other advanced learners about how you handle unknown words, register shifts and fast speech when you read and listen in English. Give specific examples of the strategies you use.`,
    [
      `At least three distinct strategies (context clues, word parts, register cues, stressed words)`,
      `Concrete examples of words or phrases you worked out`,
      `A warning about cognates and false friends`,
      `A clear structure with signposting ("First", "Second", "Finally")`,
    ],
    `When I moved to Dublin, I discovered that understanding English in a classroom and understanding it in a pub are two very different skills. Here are the strategies that have helped me most.

First, I no longer stop at every unknown word. When I read, I underline it and keep going, because the next sentence often explains it. Last week I came across the word "parsimonious" in a review that called a director parsimonious with dialogue; a few lines later, the critic mentioned that his characters barely speak. I didn't need a dictionary: the context did the work. Word parts help too. If I know "rely", then "unreliable" is not really a new word, and Latin roots we share with Spanish, such as "lucid" or "voracious", are often gifts, as long as I watch out for false friends like "sensible" and "eventually".

Second, I listen for register. When a radio presenter suddenly says "kind of" and "you know", or starts a sentence with "Look,", it usually signals a shift from the script to a more personal opinion. Noticing that shift tells me how seriously to take what follows.

Third, fast speech. Native speakers don't pronounce every word of "what do you want to do"; it comes out closer to "whaddaya wanna do". Instead of trying to catch everything, I now listen for the stressed words, which carry the meaning, and let my brain fill in the weak forms between them.

Finally, I accept that I won't understand everything. Even native speakers miss words; they just don't panic about it. These days, neither do I.`,
    `Skilled readers and listeners infer meaning from context, word parts and register cues instead of stopping at every unknown word, and they follow the stressed words in fast speech. Cognates help Spanish speakers ("lucid", «lúcido»), but false friends such as "sensible" («sensato») mean every guess must be checked against the context.`
  ),
  u12: t(
    `You took these notes on a radio interview. Notes: city of Northbridge, four-day week trial for council staff, six months; Friday rush-hour traffic down 18%; sick days down 12%; small shops: mixed; guest Dr. Helen Ward (advised the council on the trial): very positive but says early days; critics: too short, one city only. Write them up as a summary for a colleague who missed the programme, separating facts from opinions and showing each speaker's stance.`,
    [
      `Facts and figures reported accurately and kept apart from opinion`,
      `Reporting verbs that show stance ("argued", "acknowledged", "insisted", "admitted")`,
      `The speaker's hedging and the critics' objections both reported`,
      `A brief evaluative conclusion about how reliable the source is`,
    ],
    `Summary: radio interview with Dr. Helen Ward on the four-day week trial

Yesterday's interview focused on the six-month trial in which Northbridge City Council's employees worked a four-day week. Dr. Ward, who advised the council during the trial, presented its main findings and offered her own interpretation of them.

The facts first. According to the council's data, rush-hour traffic in the city centre fell by 18 per cent on Fridays during the trial, and staff sickness absence fell by 12 per cent compared with the same period last year. The effect on small businesses was uneven: cafes near office districts reported lower Friday takings, while shops in residential areas reported a modest increase.

Dr. Ward's own view is clearly positive. She described the traffic figures as remarkable and argued that a shorter week could do more for congestion than any new road. She was careful, however, to hedge her claims. She repeatedly said that it was early days and admitted that a single trial in one city could not show whether the results would hold elsewhere.

The interviewer pressed her on this point, citing critics who say that the trial was too short and too small to justify a change in policy. Dr. Ward conceded that the sample was limited but insisted that the findings were strong enough to warrant a larger national pilot.

Overall, the interview was informative, but listeners should bear in mind that Dr. Ward is hardly a neutral observer, since she helped to design the scheme she was evaluating.`,
    `A good summary keeps the data apart from the speaker's interpretation and signals stance through reporting verbs: "argued", "acknowledged" and "insisted" say far more than "said". Spanish speakers often write *the 18% of the traffic; in English a change is expressed as "traffic fell by 18 per cent", with no article.`
  ),
  u13: t(
    `Write a short argumentative essay on whether homework should be abolished in primary schools. Take a clear position, concede at least one opposing point before refuting it, use learned connectors, and identify a logical fallacy in the opposing case.`,
    [
      `A clear thesis and a logical structure`,
      `At least one concession followed by a refutation ("Admittedly... It does not follow, however, that...")`,
      `Learned connectors used precisely ("nevertheless", "hence", "granted", "equally")`,
      `A named fallacy (slippery slope, appeal to tradition, straw man)`,
    ],
    `Few issues divide parents as sharply as homework. Its defenders argue that it builds discipline, reinforces what children learn in class and teaches them that learning does not stop at the school gate. I will argue, nevertheless, that for children under eleven the case for homework is far weaker than it appears.

Admittedly, some practice at home is valuable. A child who reads with a parent for twenty minutes a night will almost certainly read better than one who does not, and nobody would wish to discourage that. It does not follow, however, that worksheets and projects should be compulsory. Beyond reading, research on young children has found little measurable benefit from homework. What it does reliably produce is stress, family conflict and an advantage for children whose parents have the time and education to help.

Opponents often claim that if we abolish homework at seven, children will be unable to cope with it at fourteen. This is a classic slippery slope. There is no evidence that a child who spends her evenings playing, reading and sleeping well becomes an undisciplined teenager; if anything, the reverse seems more plausible. Equally misleading is the appeal to tradition: the assumption that homework must be good because we all did it.

Granted, schools should not simply leave families to their own devices. Instead of setting homework, they could encourage children to read, play and talk with their families. Hence my conclusion: for young children, less homework does not mean lower standards. It simply means better teaching.`,
    `Conceding a point ("Admittedly", "Granted") before refuting it ("It does not follow, however, that...") makes an argument more persuasive, not weaker. Spanish speakers often write *in the other hand or use "on the contrary" where they mean «en cambio»; "on the contrary" only rejects a statement just made, while contrast between two facts takes "on the other hand" or "whereas".`
  ),
  u14: t(
    `Write the closing statement of a formal debate in which you have argued that cities should ban private cars from their historic centres. Answer your opponents' main objections, appeal to ethos, pathos and logos, use at least three rhetorical devices (tricolon, anaphora, antithesis, rhetorical questions) and end with a strong conclusion.`,
    [
      `A summary and rebuttal of the opponents' main points`,
      `Appeals to ethos (credibility), pathos (emotion) and logos (evidence)`,
      `At least three rhetorical devices used with control`,
      `A memorable final line and a call to vote`,
    ],
    `Ladies and gentlemen, over the past hour my opponents have told you that a ban on private cars in the old town would ruin businesses, punish families and turn our historic centre into a museum. Let me answer each of those fears in turn.

First, business. Cities that have pedestrianised their centres, from Pontevedra to Ghent, have generally seen footfall rise, not fall. People do not shop from behind a windscreen; they shop on foot. Second, families. It is our children who breathe the fumes at the school gates, and it is our elderly neighbours who are afraid to cross the street. A ban does not punish families; it protects them. Third, the museum. A museum is a place where nothing moves. A street full of cafes, cyclists and children playing is the very opposite.

I have worked as a children's nurse in this city for fifteen years. I have treated children whose asthma flares up every time the traffic builds, and I have seen what a single car-free Sunday does for them.

So ask yourselves: what is the centre of a city for? Is it for parking, or is it for people? Is it a corridor we hurry through, or a place where we choose to stay?

We can keep the old town as it is: noisy, polluted and congested. Or we can give it back to the people who live in it. The choice before you is not between progress and tradition; it is between a city for cars and a city for citizens. I urge you to vote for the motion.`,
    `Anaphora ("It is our children... it is our elderly neighbours"), tricolon ("noisy, polluted and congested") and antithesis ("a city for cars and a city for citizens") give a closing argument its rhythm, while the speaker's own experience supplies ethos. Spanish oratory tolerates long, ornate periods; in English, short parallel sentences hit harder.`
  ),
  u15: t(
    `Write the script for the opening of a presentation pitching your company's service to a potential client. Include a hook, a brief introduction, a clear roadmap with signposting, a transition into the first section, and at least one piece of data described precisely.`,
    [
      `A hook that engages the audience (a question, a striking figure or a short story)`,
      `A roadmap with signposting ("First... Second... And finally...")`,
      `Data and trends described precisely ("just over", "widened steadily", "almost a third")`,
      `A clear transition into the first section ("So, let's begin with...")`,
    ],
    `Good morning, everyone. Let me start with a question. How many hours did your sales team spend last month copying information from one system into another? If you're not sure, you're not alone. When we asked forty mid-sized retailers that question last year, not one of them knew the answer. When we measured it, the average was just over eleven hours per person per month.

That's eleven hours not spent talking to customers. And that, in a nutshell, is the problem we solve.

My name is Laura Mendez, and I lead client solutions at Linkwise. Over the next twenty minutes, I'd like to do three things. First, I'll show you where those hours go, using data from companies very similar to yours. Second, I'll walk you through how our platform connects your existing tools, so that information is entered once and appears wherever it's needed. And finally, I'll outline what a three-month pilot with your team might look like, including the costs and the results you could realistically expect.

I'll take questions at the end, but if anything is unclear as we go along, please feel free to stop me.

So, let's begin with the problem itself. On this slide you can see a typical week for one of our clients' sales representatives. The blue bars show time spent with customers; the grey bars show administrative work. As you can see, the grey bars are considerably longer, and the gap has widened steadily over the past three years: administration has grown from roughly a quarter of the working week to almost a third.`,
    `Signposting ("First", "Second", "And finally", "So, let's begin with...") lets listeners follow a talk they cannot reread, and precise trend language ("just over", "widened steadily") makes data credible. Note the prepositions "on this slide" and "in the chart", and remember that you "introduce" a speaker or a topic: «presentar a alguien» is not *present someone.`
  ),
  u16: t(
    `After a negotiation with a supplier, write the follow-up email that confirms in writing what was agreed. Set out the concessions each side made and the conditions attached to them, list the points still unresolved with a deadline, and describe the next steps.`,
    [
      `Each agreed term stated precisely, with numbers and dates`,
      `Concessions linked to conditions ("on condition that", "in return for", "provided that")`,
      `Outstanding points and a deadline for resolving them`,
      `A request to confirm or correct the summary`,
    ],
    `Subject: Summary of agreed terms: packaging supply contract

Dear Mr. Brennan,

Thank you for your time on Tuesday. I thought the meeting was very productive, and I would like to confirm in writing the terms we agreed, so that both teams are working from the same understanding.

1. Price. Your company will supply the recycled cardboard packaging at 0.42 euros per unit, down from the 0.47 originally quoted. This price applies on condition that we commit to a minimum annual order of 500,000 units.

2. Contract length. In return for the reduced price, we have agreed to a two-year contract instead of the twelve months we initially proposed. Either party may terminate the contract with ninety days' written notice after the first year.

3. Delivery. You will deliver every two weeks to our warehouse in Valencia. Should a delivery arrive more than three working days late, a discount of 5 per cent will apply to that order.

4. Payment. We agreed to payment within forty-five days of invoice, as a compromise between your standard thirty days and our usual sixty.

Two points remain unresolved. First, you were going to check whether the price can be fixed for the full two years or only for the first. Second, we still need to agree who will bear the cost of the new printing plates. Could you let me know your position on both by Friday 14 June?

Once these are settled, our legal team will draw up the contract for signature. Please let me know if any of the above does not reflect your understanding.

Kind regards,

Sofia Lopez
Purchasing Manager`,
    `A written confirmation ties every concession to its condition ("on condition that", "in return for") so that neither side can later reinterpret the deal. Spanish speakers often write *commit to order; "commit to" takes a noun or an -ing form ("commit to a minimum order", "commit to ordering"), and «plazo de pago» is "payment terms".`
  ),
  u17: t(
    `Write a passage for an academic essay on remote work and productivity that integrates three (invented) sources: one direct quotation with a page number, one paraphrased finding and one claim you disagree with. Use reporting verbs that show your stance and author-date in-text citations, as in APA style.`,
    [
      `A direct quotation integrated grammatically into your sentence, with a page number`,
      `A paraphrased finding with an author-date citation`,
      `Reporting verbs that reveal stance ("found", "suggest", "asserts", "claims")`,
      `Your own evaluative voice linking the sources`,
    ],
    `The effect of remote work on productivity remains contested. Early studies tended to be enthusiastic: Hartley (2021), for example, reported that employees at a large insurance firm handled 13 per cent more calls when working from home, and concluded that "the office, for many routine tasks, is an obstacle rather than an aid" (p. 48). Such findings were widely cited during the pandemic, often with little attention to the kind of work involved.

More recent research paints a more nuanced picture. Osei and Lindqvist (2022) found that while individual output rose among remote workers, collaborative tasks suffered, particularly those that depend on informal exchanges between junior and senior staff. They suggest that the gains documented in earlier studies may reflect the routine nature of the tasks measured rather than any general advantage of working from home. This distinction is, in my view, crucial: productivity is not a single quantity, and a call centre is a poor model for a research laboratory.

Less convincing is the claim by Marsh (2020) that remote work "inevitably erodes organisational culture" (p. 112). Marsh asserts this without offering longitudinal data, and her evidence consists largely of interviews with managers, who may have reasons of their own to prefer a visible workforce. Indeed, Osei and Lindqvist (2022) note that several fully remote teams in their sample reported stronger cohesion than their office-based counterparts.

Taken together, these studies suggest that the question is not whether remote work is productive, but for which tasks, for whom and under what conditions.`,
    `Reporting verbs carry stance: "found" and "note" accept the source's result, "suggest" presents a cautious interpretation, and "asserts" or "claims" signal doubt. In author-date styles the year follows the name and the page follows the quotation; avoid the calque *according with, and use "according to" only for other people's views, never your own.`
  ),
  u18: t(
    `Write a mini literature review on a debated research question of your choice (for example, whether bilingualism delays cognitive decline). Synthesise at least four (invented) sources, paraphrasing rather than quoting, group them by idea rather than by author, and finish by identifying a gap in the research.`,
    [
      `Sources grouped by finding or approach, not summarised one by one`,
      `Paraphrase in your own structure and words, with citations`,
      `Academic nominalisation and collocations ("call into question", "confounding variables", "replicate the effect")`,
      `A clearly identified gap and what research would address it`,
    ],
    `Research on bilingualism and cognitive ageing has produced strikingly mixed results. A number of early studies reported that lifelong bilinguals develop symptoms of dementia several years later than comparable monolinguals (Reyes, 2014; Fischer & Okafor, 2016). The explanation usually offered is that the constant need to manage two languages strengthens the brain's executive control system, building a form of cognitive reserve that delays the outward signs of decline even when the underlying disease is present.

Subsequent work, however, has called this conclusion into question. Larger prospective studies, which follow participants over time rather than relying on hospital records, have generally failed to replicate the effect (Nakamura et al., 2019; Byrne, 2021). Byrne (2021) attributes the earlier findings largely to confounding variables: in many of the original samples, bilingual participants were also more likely to be immigrants with distinctive educational and occupational histories, factors that independently influence cognitive health.

What emerges from this literature is less a contradiction than a problem of definition. Studies differ widely in how they define bilingualism, ranging from the childhood acquisition of two languages to moderate proficiency gained in adulthood, and few distinguish between people who use both languages daily and those who rarely do. Consequently, it remains unclear whether any protective effect depends on the age of acquisition, the frequency of use, or both. Addressing this gap would require longitudinal studies that measure language use directly, rather than treating bilingualism as a simple yes-or-no category.`,
    `A literature review synthesises: it groups sources by idea ("A number of early studies...", "Subsequent work, however...") and ends by identifying a gap. Paraphrasing means changing the structure as well as the words, since synonyms dropped into the original sentence are still plagiarism. Note that "research" is uncountable: *researches is a common error for «investigaciones».`
  ),
  u19: t(
    `Write an opinion piece for a magazine on why adults should learn a new language. Use hypophora (asking a question and answering it yourself), at least one purely rhetorical question, a cleft sentence, a negative inversion and a concessive fronted structure such as "Hard as it is to admit".`,
    [
      `Hypophora: a question you then answer`,
      `A rhetorical question that expects no answer`,
      `A cleft sentence ("What adult learners gain is...", "It is... that...")`,
      `Negative inversion and concessive fronting with correct word order`,
    ],
    `Why would anyone over forty choose to sit in a classroom conjugating irregular verbs? It is a fair question, and one I asked myself when I signed up for Japanese at forty-six. The answer, I have come to believe, has very little to do with being useful.

Hard as it is to admit, the practical arguments for learning a language as an adult are weak. Translation apps get better every year, and most of us will never need to negotiate a contract in Japanese. If usefulness were the only measure, few of us would bother at all.

What adult learners gain is something quite different. It is the experience of being a beginner again that makes the effort worthwhile. Not since childhood had I felt so clumsy, so dependent on other people's patience and so delighted by small victories. The first time I read a menu in a Tokyo backstreet without help, I was as proud as I had been on my graduation day. Who would have thought that a list of noodle dishes could feel like an achievement?

Then there is the matter of the brain. Do we really need research to tell us that learning something difficult keeps the mind supple? Perhaps not, but the research exists, and it is encouraging.

There is a final reward. Never have I learned so much about my own language as when I tried to learn someone else's. Only when you translate do you notice how strange your own grammar is.

So, is it worth it? Absolutely. Just don't do it to be useful. Do it to be a beginner again.`,
    `Negative inversion ("Not since childhood had I felt", "Never have I learned") and clefts ("It is the experience... that makes") put the key idea in focus, while hypophora raises a question in order to answer it. Inversion needs the auxiliary before the subject: *Never I have learned follows Spanish word order and is wrong in English.`
  ),
  u20: t(
    `Write a one-minute speech for a neighbourhood meeting opposing the council's plan to turn an empty plot into a car park instead of a community garden. Reply directly to a rhetorical question the council has asked, use feigned doubt and an attitude tag, and end with a memorable line.`,
    [
      `The opponents' rhetorical question quoted and answered`,
      `Feigned doubt ("I may be wrong, but...") used ironically`,
      `An attitude tag ("Hardly a crisis, is it?")`,
      `A tight structure suitable for about one minute and a strong closing line`,
    ],
    `Good evening, neighbours. Last week, in the local paper, the council asked a question: who really needs a garden when people need somewhere to park? It was meant as a rhetorical question. Tonight I'd like to answer it.

Who needs a garden? The eighty families on Mill Street who have no outdoor space at all. The children at the primary school on Park Lane, whose playground is smaller than this hall. The pensioners who told us at last month's meeting that, some weeks, the only conversation they have is with the bus driver. That's who.

Now, I may be wrong, but I don't remember anyone in this neighbourhood ever asking for a sixth car park. We already have five within ten minutes' walk, and the council's own survey says that three of them are never more than half full. Hardly a parking crisis, is it?

The car park would cost four hundred thousand pounds. The garden would cost a tenth of that, and residents have already offered to build it and run it themselves. I'm no accountant, but even I can see which of those numbers is smaller.

So here is my question, and unlike the council's, it is not rhetorical. When we look back in twenty years' time, what will we be prouder of: the spaces we gave to cars, or the space we gave to each other?

Thank you.`,
    `Answering an opponent's rhetorical question turns their own device against them, and an attitude tag ("Hardly a parking crisis, is it?") invites the audience to agree. Feigned doubt ("I may be wrong, but...", "I'm no accountant, but...") is ironic modesty: delivered flatly, it signals the opposite of what it says.`
  ),
  u21: t(
    `Answer the interview question "Tell me about a time you dealt with a difficult problem at work" in writing, as you would say it. Use the STAR method (Situation, Task, Action, Result), choose precise verbs instead of get, do, make and say, and quantify the result.`,
    [
      `A brief situation and a clearly defined task`,
      `Most of the answer on your own actions, in the first person`,
      `Precise verbs ("mapped", "negotiated", "persuaded", "rescheduled")`,
      `A measurable result and what you learned or changed afterwards`,
    ],
    `Certainly. In my last role I was a logistics coordinator for a food distributor that supplied around two hundred restaurants across the region.

The situation arose in the run-up to Christmas, our busiest period, when our main refrigerated-transport subcontractor went bankrupt with only a week's notice. Overnight we lost almost forty per cent of our delivery capacity, and several of our largest clients had already placed their holiday orders.

My task was to find alternative capacity quickly without compromising the cold chain, and to keep our clients informed so that we didn't lose their trust.

First, I mapped every scheduled delivery for the following three weeks and ranked them by value and perishability. Then I contacted eleven transport firms, negotiated short-term contracts with three of them, and persuaded two of our own drivers to cover extra routes in exchange for time off in January. At the same time, I phoned our twenty biggest clients personally, explained the situation and, wherever possible, rescheduled non-urgent deliveries to quieter days.

As a result, we fulfilled ninety-seven per cent of our orders on time over the holiday period, and we didn't lose a single client. In fact, two of them later extended their contracts, citing the way we had communicated during the crisis. The experience also showed us how dependent we had been on one supplier, so I proposed a policy of splitting transport between at least two firms, which the company adopted the following spring.`,
    `STAR keeps an answer focused: a sentence or two of situation, a clear task, most of the time on your own actions and a measurable result. Precise verbs ("mapped", "negotiated", "persuaded") sound far more capable than "got" or "did", and «realizar una tarea» is "carry out a task", never *realize a task.`
  ),
  u22: t(
    `Write a cover letter for a job you would like. Highlight two achievements with precise figures, link them to the employer's needs, avoid the common pitfalls (empty adjectives, over-modesty, arrogance) and close with a confident request for an interview.`,
    [
      `A clear opening that names the position and why you are a fit`,
      `Two quantified achievements described with action verbs`,
      `Explicit links between your experience and the employer's needs`,
      `A confident, polite close ("I would welcome the opportunity to...")`,
    ],
    `Dear Ms. Patel,

I am writing to apply for the position of Senior Communications Officer at Greenway Housing, as advertised on your website. Having spent the last six years in communications for non-profit organisations, most recently at a regional network of food banks, I was delighted to see a role that combines public engagement with work I care about deeply.

In my current position, I lead a team of three and manage all external communications, from press relations to our social media channels. Two achievements seem particularly relevant to your needs. First, I redesigned our volunteer recruitment campaign, replacing generic appeals with short video stories from existing volunteers. Within a year, sign-ups rose by 60 per cent, and the proportion of volunteers still active after six months rose from roughly half to over two thirds. Second, when a supplier scandal threatened our reputation in 2023, I coordinated our response, briefing journalists, drafting statements and keeping donors informed. Donations actually rose that quarter, which I believe reflects the value of being open early.

Your advertisement emphasises the need to rebuild trust with tenants after recent changes in management. This is exactly the kind of challenge I enjoy: listening carefully, explaining decisions clearly and making sure people feel heard rather than managed. I am also a native Spanish speaker, which I understand would be an asset given the communities you serve.

I would welcome the opportunity to discuss how I could contribute to Greenway's work. Thank you for considering my application.

Yours sincerely,

Diego Romero`,
    `A strong cover letter proves qualities with quantified achievements instead of listing adjectives such as "hard-working" and "dynamic". A «currículum» is a "CV" in British English and a "resume" in American English, and "experience" in the sense of «experiencia laboral» is uncountable: *five years of experiences is wrong.`
  ),
  u23: t(
    `You are a customer relations manager. A customer has written an angry email: his dining table arrived late and damaged, and he says your staff were rude on the phone and promised him compensation. Reply. Acknowledge his frustration, apologise properly for what went wrong, disagree tactfully with the claim you cannot confirm, and offer a fair solution.`,
    [
      `Acknowledgement of feelings that does not concede disputed facts`,
      `A real apology that names the fault and takes responsibility, with no blame-shifting "but"`,
      `Tactful disagreement ("I could find no record of...")`,
      `A concrete middle-ground solution with options`,
    ],
    `Dear Mr. Grant,

Thank you for your email, and I am sorry that it had to be written at all. I can see how frustrating the last two weeks have been for you, and I want to address each of your concerns.

First, the delivery. Your dining table should have arrived on 3 May, in perfect condition. Instead, it arrived six days late, with a damaged leg. That is simply not acceptable, and I apologise without reservation. The delay was caused by our courier, but the responsibility is ours, not yours.

Second, your phone call on Monday. I have listened to the recording, and I understand why you felt you were not being taken seriously: our agent should have offered a solution rather than repeating our policy, and I will be discussing this with the team. I should add, however, that I could find no record of a promise of compensation during that call, so I am unable to honour that particular point.

What I would like to propose instead is this. We will collect the damaged table and deliver a new one, free of charge, on a date that suits you. In addition, we will refund the 60-pound delivery fee and take 15 per cent off the price of the table, in recognition of the inconvenience. Alternatively, if you would prefer not to keep the table at all, we will collect it and give you a full refund.

Please let me know which option you prefer, and I will deal with it personally.

Yours sincerely,

Laura Hughes
Customer Relations Manager`,
    `Acknowledging ("I can see how frustrating...") is not conceding: you can validate feelings while disputing facts ("I could find no record of..."). A real apology names the fault and accepts responsibility without shifting blame. Remember that «molestias» are "inconvenience" and «molestar» is "bother"; the English verb "molest" has a very different, criminal meaning.`
  ),
  u24: t(
    `Write a short historical narrative about an invented event, such as the night a fire destroyed part of a nineteenth-century port town. Use narrative tenses with nuance, at least one future-in-the-past form ("was to", "would"), at least one inverted past perfect ("Hardly had... when", "Had the wind shifted..."), and a passage of free indirect style.`,
    [
      `Past simple, past continuous and past perfect used with nuance`,
      `Future in the past ("was to", "would", "was about to")`,
      `At least one inverted past perfect with correct word order`,
      `A passage of free indirect style that conveys a character's thoughts`,
    ],
    `On the evening of 14 October 1872, the town of Harlow Bay was preparing for its autumn fair. The harbour had been dredged that summer, a new grain warehouse had opened on the quay, and the council had spent months planning what was to be the largest celebration in the town's history. Nobody could have known that, within twelve hours, half the town would lie in ashes.

The fire started shortly after midnight in a bakery on Water Lane. The baker, Thomas Reed, had banked his ovens as usual before going to bed. Hardly had he fallen asleep when his wife woke him, coughing: smoke was already pouring under the bedroom door. By the time the family reached the street, the flames had spread to the timber yard next door.

Reed stood in the lane in his nightshirt and watched. It was his fault. It had to be. But had he not checked the ovens twice, as he always did? And yet there it was, the roof he had mended with his own hands, collapsing into the fire. What would he tell his neighbours in the morning?

A strong wind drove the fire towards the harbour, where the new warehouse, packed with grain for the fair, was to burn for three days. Had the wind shifted an hour earlier, the old quarter might have survived. It did not.

The inquiry that followed was to clear Reed of all blame: the fire, it concluded, had begun in the timber yard. But he would never bake in Harlow Bay again. Within a year, the family had emigrated to Canada.`,
    `Free indirect style blends the narrator's voice with a character's thoughts, keeping the past tense but adopting his questions and exclamations ("It was his fault. It had to be."). "Was to" expresses a future already fixed from the past, and inverted past perfects belong to formal narrative: "Hardly had he fallen asleep when...", with "when", not *than.`
  ),
  u25: t(
    `Write a short historical overview of a long process, such as the spread of the railways in nineteenth-century Britain or the decline of an industry in your region. Write in the voice of a historian: divide the process into periods, link causes and consequences, use a learned register and hedge your judgements.`,
    [
      `Clear periodisation ("The first phase...", "There followed...", "roughly from 1850 to...")`,
      `Connectors of time and cause ("It was only with... that", "Yet, for all its...", "Nevertheless")`,
      `Learned register and the vocabulary of historical processes ("consolidation", "speculation", "by-product")`,
      `Hedged evaluation that acknowledges historical debate ("Some historians have argued...")`,
    ],
    `The coming of the railways transformed nineteenth-century Britain more rapidly, perhaps, than any technological change before it. The process can be divided into three broad phases.

The first, from the opening of the Stockton and Darlington Railway in 1825 to the late 1830s, was essentially experimental. Early lines were short, locally financed and designed above all to carry coal and freight. It was only with the success of the Liverpool and Manchester Railway, opened in 1830, that investors began to grasp the potential of passenger traffic.

There followed, in the mid-1840s, a period of feverish speculation that contemporaries dubbed railway mania. Parliament authorised hundreds of new lines, many of which were never built, and thousands of small investors were ruined when the bubble burst. Yet, for all its excesses, the mania left behind the skeleton of a national network: by 1850 some six thousand miles of track were in operation.

The third phase, roughly from 1850 to the 1870s, was one of consolidation. Smaller companies were absorbed into larger ones, timetables were standardised, and the railways came to shape everyday life in ways that would have been unthinkable a generation earlier. A single national time was itself, to a large extent, a by-product of the need to coordinate trains.

Historians continue to debate the economic impact of the railways. Some have argued that their contribution to growth has been overstated, since canals and roads could have carried much of the same traffic. Nevertheless, their social and cultural consequences are difficult to dispute: they shrank distances, created the commuter and, in a very real sense, invented the modern timetable.`,
    `A historian's voice periodises, links cause and consequence ("It was only with... that...") and hedges judgement ("perhaps", "Some have argued"). Note the formal inversion "There followed a period of...", and remember that "history" in general takes no article: «la historia nos enseña» is "history teaches us", not *the history teaches us.`
  ),
  u26: t(
    `Write a popular-science explainer for a general magazine about a scientific hypothesis, for example the idea that sleep allows the brain to clear away waste. Present the hypothesis, the evidence and its limits, hedge your claims appropriately, and make the idea accessible with an analogy.`,
    [
      `An engaging opening question or puzzle`,
      `The hypothesis and the evidence explained in accessible language`,
      `Appropriate hedging ("suggests", "it would be premature to conclude", "in all likelihood")`,
      `A clear analogy and an honest account of the limits of the evidence`,
    ],
    `Why do we sleep? For most of history the question seemed almost too obvious to ask. Yet from an evolutionary point of view, sleep is a puzzle: for hours every day, animals lie still and unaware of predators, neither eating nor looking for a mate. Whatever sleep does, it must be important enough to justify that risk.

One of the most intriguing answers to emerge in recent years is that sleep allows the brain to clean itself. The hypothesis rests on the discovery of what researchers have called the glymphatic system, a network of channels through which fluid flows around brain cells and carries away waste products. Think of it as a city's street-cleaning service, which works best at night, once the traffic has gone.

The evidence comes mainly from experiments on mice. In a widely cited study published in 2013, researchers found that the spaces between brain cells expanded considerably during sleep, allowing fluid to flow more freely and remove waste more efficiently than during wakefulness. Among the substances cleared was a protein associated with Alzheimer's disease, a finding that attracted enormous attention.

It would be premature, however, to conclude that a good night's sleep protects us against dementia. Mouse brains differ from human ones in important ways, and measuring fluid flow in a living human brain is extremely difficult. Some recent studies have even questioned whether clearance really increases during sleep at all. The hypothesis, in other words, is promising but far from proven.

What does seem clear is that sleep is not simply a matter of switching off. It is, in all likelihood, one of the brain's busiest shifts.`,
    `Popular science presents a hypothesis with appropriate caution ("suggests", "in all likelihood", "it would be premature to conclude") and brings it to life with an analogy. Remember that "evidence" is uncountable: «una evidencia» is "a piece of evidence" and «las evidencias sugieren» is "the evidence suggests", never *evidences.`
  ),
  u27: t(
    `Write an opinion column for a local newspaper on a divisive environmental decision, such as a proposed wind farm on a well-known ridge. Take a clear position, but use deliberative rather than polarised language: acknowledge legitimate concerns, avoid loaded labels, use precise climate vocabulary and propose a constructive way forward.`,
    [
      `A clear position stated plainly`,
      `Legitimate objections acknowledged and taken seriously ("That said...", "seem to me entirely legitimate")`,
      `Loaded labels avoided or explicitly rejected`,
      `Precise climate and energy vocabulary ("net zero", "emissions", "habitat restoration")`,
    ],
    `The wind farm debate deserves better than slogans

Few local issues in recent memory have divided our county as sharply as the proposal for a twelve-turbine wind farm on Carrow Ridge. Listening to the debate, you might think there were only two kinds of people involved: climate heroes facing selfish nimbys, or reckless zealots facing the defenders of the countryside. Neither caricature helps us decide.

Let me state my position plainly: I believe the council should approve the project. The county has committed to reaching net zero by 2040, and on current trends it will miss that target by a wide margin. The wind farm would generate enough electricity for around thirty thousand homes and would cut emissions far more than any of the alternatives the council has considered so far.

That said, the objections raised by residents are not frivolous and should not be dismissed as such. The ridge is a much-loved landscape, and the turbines would be visible for miles. Concerns about the access road, which would cut through a stretch of ancient woodland, seem to me entirely legitimate. A responsible approval would require the developer to reroute that road, fund habitat restoration and share part of its revenue with nearby communities, as several schemes elsewhere already do.

What we need now is not another public meeting at which each side shouts at the other, but a genuine process of deliberation: independent assessments, open data and a willingness on both sides to change their minds when the evidence warrants it. The climate crisis is urgent. That is precisely why we cannot afford to get this decision wrong.`,
    `Deliberative language separates a position from a caricature: it concedes ("That said"), qualifies ("seem to me entirely legitimate") and mentions loaded labels such as "zealots" only to reject them. Note that «polémico» is "controversial" or "divisive", not *polemic, and that «medioambiental» is "environmental".`
  ),
  u28: t(
    `Write a short philosophical essay on whether we can be morally responsible for our choices if every choice is determined by prior causes. Set out the incompatibilist argument as numbered premises and a conclusion, evaluate its weakest premise, and present a compatibilist reply. Use abstract nouns with the correct article.`,
    [
      `The argument reconstructed as premises and a conclusion`,
      `A distinction between validity and the truth of the premises`,
      `A reasoned objection and the compatibilist alternative`,
      `Abstract nouns with no article in general statements ("freedom", "responsibility") and "the" when specified`,
    ],
    `Can we be held responsible for choices we could not have avoided? The question lies at the heart of the debate on free will, and it is worth setting out the argument that seems to force a negative answer.

It runs as follows. First, every event, including every human decision, is the result of prior causes. Second, if a decision is the result of prior causes, the person who makes it could not have chosen otherwise. Third, we can only be morally responsible for actions we could have avoided. It follows that nobody is ever morally responsible for anything.

The argument is valid: if the premises are true, the conclusion must be true as well. The real question is whether they are true, and the weakest, in my view, is the second. It assumes that freedom means the ability to act independently of all causes. But this is a strange conception of freedom. A decision with no causes at all would not be free; it would be random, and randomness offers no better foundation for responsibility than determinism does.

Compatibilists propose a more modest account. On this view, an action is free when it flows from the agent's own reasons, desires and character rather than from coercion or compulsion. The thief who steals out of greed is responsible; the one who steals because someone is holding a gun to his head is not, although both acts have causes.

Whether this account fully answers the determinist is open to dispute. Nonetheless, it captures something on which our moral practices seem to depend: the distinction between being caused and being compelled.`,
    `Abstract nouns used in a general sense take no article ("freedom", "responsibility", "randomness"), but take "the" when they are specified ("the freedom to choose", "the distinction between..."). Spanish uses the article in both cases («la libertad es...»), which is why *The freedom is an illusion is such a common error.`
  ),
  u29: t(
    `Write a letter to a close friend describing a genuinely mixed emotional experience, such as moving away for a new job. Name your feelings precisely, express ambivalence honestly, and include at least two wishes or regrets about the past.`,
    [
      `Precise emotion vocabulary ("wistful", "a pang of", "a flicker of resentment") instead of "sad" or "bad"`,
      `Ambivalence expressed explicitly (two feelings pulling in different directions)`,
      `At least two wishes or regrets ("I wish I had...", "If only I'd...")`,
      `A warm, personal register appropriate for a close friend`,
    ],
    `Dear Clara,

You asked me how I felt about the move, and I realise I gave you a very unsatisfactory answer on the phone. The truth is that I don't entirely know, so let me try to put it into words.

On the surface, I'm relieved. The new job is a genuine step up, the flat is lovely, and after three years of commuting two hours a day I no longer dread Monday mornings. Underneath the relief, though, there's something more complicated. When I packed up my old room, I felt a pang of something I can only describe as homesickness for a place I hadn't yet left. Wistful is probably the right word: not sad exactly, but tender towards everything I was about to lose.

There's guilt in the mix too. Mum was supportive, of course, but I could tell she was hurt, and I keep wondering whether I was too quick to say yes. I wish I had talked to her before accepting the offer rather than after. If only I'd given her time to get used to the idea.

And then, oddly, there's a flicker of resentment, which I'm not proud of. Part of me is irritated that I can't simply be happy about something I worked so hard for. Why does every good thing seem to come with a shadow attached?

I suppose what I'm feeling is ambivalence in its truest sense: two strong feelings pulling in opposite directions, both of them real. I'd rather admit that than pretend to be either thrilled or miserable.

Write soon and tell me how you are.

Love,

Lucia`,
    `Precise emotion words ("wistful", "a pang of homesickness", "a flicker of resentment") say far more than "sad". Regrets about the past take the past perfect after "wish" and "if only" ("I wish I had talked"), not *I wish I talked; and watch the false friends «sensible» ("sensitive") and «emocionado» ("excited" or "touched").`
  ),
  u30: t(
    `Write a review of a film, novel or exhibition, real or invented. Summarise it without spoilers, comment on its technique with precise critical vocabulary (camera work, structure, performance, style), weigh strengths against weaknesses and reach a nuanced verdict.`,
    [
      `A spoiler-free summary of the premise`,
      `Specific comments on technique ("long, unhurried takes", "a muted palette", "the sound design")`,
      `Balanced evaluation with precise evaluative adjectives ("schematic", "restrained", "devastating")`,
      `A nuanced final verdict that says who the work is for`,
    ],
    `The Salt Road, the second feature from director Ana Ferrer, follows a widowed fisherman, played with quiet intensity by Tomas Lind, who sets out to walk the coastal path his late wife always meant to travel. It is a slight premise, and for its first half hour the film seems content to let the landscape do most of the work.

And what a landscape it is. The cinematographer shoots the coast in long, unhurried takes, often holding a wide shot until the tiny figure of the walker almost disappears into the frame. The palette is muted, all slate greys and washed-out greens, so that the few moments of colour, a red scarf caught on a fence or a sudden sunset, land with real force. The sound design is equally restrained: there is no score for long stretches, only wind, gulls and footsteps.

Where the film falters is in its script. The encounters along the way, with a runaway teenager, a talkative innkeeper and an old rival, are well acted but feel schematic, as if each stranger had been sent to teach the hero a particular lesson. The final reconciliation scene, in particular, spells out what the images had already said far more eloquently.

Still, Lind's performance holds the film together. He conveys grief almost entirely through posture and silence, and a late scene in which he finally reads his wife's letters aloud is genuinely devastating.

The Salt Road is not a flawless film, and viewers who need a strong plot may find it trying. But for those willing to slow down to its pace, it is a beautifully crafted, quietly moving meditation on loss.`,
    `Good criticism grounds every judgement in technique ("long, unhurried takes", "a muted palette") and balances praise with reservation ("Where the film falters is..."). Watch the false friends: «el argumento» of a film is its "plot" (an "argument" is a disagreement or a line of reasoning), and «la actuación» is a "performance".`
  ),
  u31: t(
    `Write a short results briefing for shareholders of an invented company. Report revenue, profit and margins, explain the causes of the changes (including the effect of inflation), and comment on a proposed acquisition, using precise cause-and-effect language and accurate figures.`,
    [
      `Accurate figures with the right prepositions ("rose by 9 per cent", "fell to 31 million")`,
      `Cause-and-effect language ("driven by", "attributable to", "weighed on", "give rise to")`,
      `Financial-statement vocabulary ("operating profit", "margin", "net profit", "dividend")`,
      `A balanced outlook including the acquisition and its risks`,
    ],
    `Annual results briefing: Northfield Foods

Northfield Foods reported revenue of 412 million euros for the financial year, up 9 per cent on the previous year. However, much of that growth was driven by price rather than volume: once the effect of price increases is stripped out, sales volumes rose by just 2 per cent.

Profitability came under considerable pressure. Operating profit fell from 38 million to 31 million euros, and the operating margin narrowed from 10 to 7.5 per cent. The decline was largely attributable to soaring input costs. Wheat and energy prices rose sharply in the first half of the year, and although the company passed some of these increases on to customers, it chose to absorb the rest in order to protect its market share against cheaper supermarket own brands.

Inflation also weighed on the bottom line through interest rates. Higher rates pushed up the cost of servicing the company's debt, which stood at 120 million euros at the end of the year, and net profit consequently fell by 22 per cent to 18 million euros. The board has proposed a slightly reduced dividend of 40 cents per share.

Looking ahead, the most significant development is the proposed acquisition of Hillcrest Bakeries, a regional competitor, for 65 million euros. Management argues that the deal will give rise to annual cost savings of around 8 million euros within three years, chiefly through shared distribution. Analysts have broadly welcomed the move, although some warn that integration costs may erode those savings in the short term.

Overall, the company remains fundamentally sound, but these results underline its vulnerability to rising costs.`,
    `Cause-and-effect language ("driven by", "attributable to", "weighed on") lets a report explain the numbers rather than merely list them. "Rose by 9 per cent" gives the change and "rose to 412 million" the new level; and «beneficio» is "profit", not *benefit, while «facturación» is "revenue" or "turnover".`
  ),
  u32: t(
    `Write a short story of 200 to 300 words. Use foreshadowing, sensory imagery involving at least three senses, and dialogue that is correctly punctuated, and show the characters' emotions through action and detail rather than naming them.`,
    [
      `Early details that foreshadow the ending`,
      `Imagery that appeals to at least three senses`,
      `Dialogue punctuated the English way, with a new paragraph for each speaker`,
      `Emotion shown through action and detail, not stated ("I was worried")`,
    ],
    `The radio had been crackling all afternoon, the way it always did before a storm, but Grandpa said it was just the old set getting tired.

"Like me," he said, and laughed, and coughed for a long time afterwards.

I was twelve that summer, and the island smelled of salt, diesel and the lavender soap he kept by the sink. Every evening we climbed the hundred and four steps of the lighthouse together. He counted them aloud. I counted his breaths between them, though I never told him that.

On the last night of August, he stopped at sixty.

"Go on," he said. "You know what to do."

I knew. I had watched him a hundred times: the brass handle, cold and slightly greasy, the hum of the motor, the slow heave of the lens as it began to turn. When the beam swung out over the water for the first time, I felt it in my chest, like a door opening.

Below me, the sea had turned the colour of pewter. A fishing boat was rounding the point, its lights small and wavering.

I ran back down. Grandpa was sitting on the sixtieth step with his eyes closed and his cap in his lap.

"Did they see it?" he asked.

"They saw it."

He nodded. His hand found mine, rough as rope, and held on.

The radio was still crackling in the kitchen when the boat came in. I don't remember turning it off. I only remember that, after that summer, I climbed the steps alone, and I never stopped counting.`,
    `Foreshadowing plants details (the crackling radio, the cough, the counted breaths) that gain meaning later, and showing trusts the reader more than telling. English dialogue goes inside quotation marks, with the comma or full stop inside them ("Like me," he said), and each new speaker starts a new paragraph; Spanish uses dashes instead («—Vamos —dijo»).`
  ),
  u33: t(
    `Show your command of register. Write about the same event, the sudden closure of the town's central library for repairs, twice: first as an official notice from the council, then as a message to a friend. Make each version roughly half of your text, and use the vocabulary and structures that suit each register.`,
    [
      `A formal notice with passives, nominalisations and set phrases ("until further notice", "regrets to announce")`,
      `An informal message with contractions, phrasal verbs and a personal tone`,
      `The same facts conveyed accurately in both versions`,
      `No formal Latinate words carried into the informal version`,
    ],
    `NOTICE OF TEMPORARY CLOSURE: CENTRAL LIBRARY

The council regrets to announce that Central Library will be closed to the public from Monday 3 March until further notice, following the discovery of structural defects in the roof during a routine inspection. Engineers have advised that the building cannot safely remain open while a full assessment is carried out.

During the closure, a reduced lending service will operate from the Community Centre on Bridge Street, Monday to Saturday, from 10 a.m. to 5 p.m. Items currently on loan will be renewed automatically, and no overdue charges will be applied. Online services, including e-books and the reference database, are unaffected.

The council apologises for any inconvenience caused and will provide further updates as soon as the extent of the necessary works has been established.

Hi Tom,

Bad news, I'm afraid: they've shut the library! Apparently someone went up to check the roof and found it was more or less about to fall in, so it's closed until further notice, which in council-speak probably means months.

Don't panic about your books, though. They've renewed everything automatically and they're not charging late fees, so you can hang on to that pile on your desk a bit longer. There's a little temporary library in the community centre on Bridge Street, open every day except Sunday, but I popped in this morning and it's tiny, mostly bestsellers and kids' books.

Such a shame. Where are we going to do our Saturday crosswords now?

Speak soon,

Ana`,
    `Mastery command means choosing register deliberately: the notice uses passives, nominalisations and set phrases ("until further notice", "regrets to announce"), while the message uses contractions, phrasal verbs ("hang on to", "popped in") and humour. Spanish speakers often carry Latinate words into informal English; for «hacer una visita», a friend would say "pop in" or "drop by", not *realise a visit.`
  ),
};
