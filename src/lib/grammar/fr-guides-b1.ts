// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-guides-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { FrGrammarGuide } from "./fr-types";

// French grammar guides, B1 (see ./fr-types.ts and docs/french-course/guide-brief.md).
export const FR_B1_GUIDES: FrGrammarGuide[] = [
  {
    slug: "french-subjunctive-forms",
    title: "The French Present Subjunctive: How to Form It",
    description:
      "How to build the French present subjunctive: the ils-stem recipe, the nous and vous forms, two-stem verbs and the nine irregulars (sois, aie, aille, fasse, puisse, sache, veuille, faille, vaille).",
    level: "B1",
    intro: [
      `The subjunctive is not a tense but a mood: a set of verb forms French uses when a clause expresses something wanted, required, feared or doubted rather than a plain fact. Compare "Je sais que tu pars" (I know you are leaving, a fact) with "Il faut que tu partes" (you have to leave, a requirement). Same verb, same person, different form.`,
      `The good news is that the forms are very regular. One recipe covers almost every verb, a dozen common verbs use two stems, and only nine are truly irregular. Most of them you will meet after "il faut que", the commonest trigger of all, which is why this guide uses it as a frame.`,
      `English has almost lost its subjunctive (I insist that he be on time sounds stiff), so English speakers tend to skip it in French. In French it is not optional or literary: children use it, and "il faut que tu viennes" is everyday speech.`,
    ],
    sections: [
      {
        heading: `The recipe: the "ils" form minus "-ent"`,
        body: [
          `Take the "ils" form of the present indicative, remove "-ent", and add "-e", "-es", "-e", "-ions", "-iez", "-ent". "Ils finissent" gives "finiss-", so "que je finisse". "Ils écrivent" gives "écriv-", so "que j'écrive". The recipe works for all regular verbs and for many irregular ones too, because the "ils" form already contains the hidden consonant.`,
          `For "-er" verbs, the singular and "ils" forms sound exactly like the present: "il faut que je parle" is pronounced like "je parle". With "-ir" and "-re" verbs you can hear the difference, because the final consonant of the stem is pronounced: "il part" ends in a vowel sound, "qu'il parte" ends in [t].`,
        ],
        table: {
          headers: ["", "parler (ils parlent)", "finir (ils finissent)", "partir (ils partent)", "écrire (ils écrivent)"],
          rows: [
            ["que je", "parle", "finisse", "parte", "écrive"],
            ["que tu", "parles", "finisses", "partes", "écrives"],
            ["qu'il / elle / on", "parle", "finisse", "parte", "écrive"],
            ["que nous", "parlions", "finissions", "partions", "écrivions"],
            ["que vous", "parliez", "finissiez", "partiez", "écriviez"],
            ["qu'ils / elles", "parlent", "finissent", "partent", "écrivent"],
          ],
        },
        examples: [
          { fr: "Il faut que je range ma chambre.", en: "I have to tidy my room." },
          { fr: "Il faut que tu finisses tes devoirs avant le dîner.", en: "You need to finish your homework before dinner." },
          { fr: "Il faut qu'elle parte avant huit heures.", en: "She has to leave before eight." },
          { fr: "Il faut que vous lisiez ce rapport.", en: "You need to read this report." },
          { fr: "Il faut qu'ils mettent la table.", en: "They need to set the table." },
        ],
      },
      {
        heading: `"Nous" and "vous": "-ions" and "-iez"`,
        body: [
          `For regular verbs the "nous" and "vous" forms are identical to the imparfait: "que nous parlions", "que vous finissiez". So if you know the imparfait, you already know them.`,
          `Watch the spelling when the stem already ends in "i" or "y": "que nous étudiions", "que vous riiez", "que nous croyions", "que vous envoyiez". The double letters look odd but they are correct, and they are exactly what you find in the imparfait.`,
        ],
        examples: [
          { fr: "Il faut que nous parlions de ton avenir.", en: "We need to talk about your future." },
          { fr: "Il faut que vous attendiez ici.", en: "You need to wait here." },
          { fr: "Il faut que nous étudiions ce chapitre.", en: "We have to study this chapter." },
          { fr: "Il ne faut pas que vous riiez pendant la cérémonie.", en: "You mustn't laugh during the ceremony." },
          { fr: "Il faut que nous choisissions une date.", en: "We need to choose a date." },
        ],
      },
      {
        heading: `Two-stem verbs: one stem from "ils", one from "nous"`,
        body: [
          `Verbs whose present has two stems keep both in the subjunctive. The forms for "je", "tu", "il" and "ils" come from the "ils" form; "nous" and "vous" come from the "nous" form of the present. "Ils viennent" gives "que je vienne", but "nous venons" gives "que nous venions".`,
          `This is the same pattern as in the present indicative, so it feels natural once you notice it. The common ones are listed below.`,
        ],
        table: {
          headers: ["Verb", "que je / tu / il / ils", "que nous / vous"],
          rows: [
            ["venir", "vienne, viennes, vienne, viennent", "venions, veniez"],
            ["prendre", "prenne, prennes, prenne, prennent", "prenions, preniez"],
            ["boire", "boive, boives, boive, boivent", "buvions, buviez"],
            ["devoir", "doive, doives, doive, doivent", "devions, deviez"],
            ["recevoir", "reçoive, reçoives, reçoive, reçoivent", "recevions, receviez"],
            ["voir", "voie, voies, voie, voient", "voyions, voyiez"],
            ["croire", "croie, croies, croie, croient", "croyions, croyiez"],
            ["appeler", "appelle, appelles, appelle, appellent", "appelions, appeliez"],
            ["acheter", "achète, achètes, achète, achètent", "achetions, achetiez"],
          ],
        },
        examples: [
          { fr: "Il faut que tu viennes à la réunion.", en: "You have to come to the meeting." },
          { fr: "Il faut que nous venions plus tôt.", en: "We need to come earlier." },
          { fr: "Il faut qu'il prenne ses médicaments.", en: "He has to take his medicine." },
          { fr: "Il faut que vous buviez beaucoup d'eau.", en: "You need to drink lots of water." },
          { fr: "Il faut que je voie un médecin.", en: "I need to see a doctor." },
          { fr: "Il faut que tu appelles ta grand-mère.", en: "You need to call your grandmother." },
        ],
      },
      {
        heading: "The nine irregular verbs",
        body: [
          `Nine verbs do not follow the recipe. "Être" and "avoir" are irregular in their endings too: "que je sois", "que j'aie", and the "nous" and "vous" forms have no "i" after the "y" ("soyons", "ayons", never "soyions"). "Faire", "pouvoir" and "savoir" have a single new stem for all persons ("fasse", "puisse", "sache"). "Aller" and "vouloir" have two stems ("aille / allions", "veuille / voulions"). "Falloir" and "valoir" only matter in the "il" form: "qu'il faille", "qu'il vaille".`,
          `Note the sounds: "aille" is pronounced like "ail" [aj], and "aie", "aies", "ait" and "aient" all sound the same, exactly like "ai".`,
        ],
        table: {
          headers: ["", "être", "avoir", "aller", "faire", "pouvoir", "savoir", "vouloir"],
          rows: [
            ["que je", "sois", "aie", "aille", "fasse", "puisse", "sache", "veuille"],
            ["que tu", "sois", "aies", "ailles", "fasses", "puisses", "saches", "veuilles"],
            ["qu'il", "soit", "ait", "aille", "fasse", "puisse", "sache", "veuille"],
            ["que nous", "soyons", "ayons", "allions", "fassions", "puissions", "sachions", "voulions"],
            ["que vous", "soyez", "ayez", "alliez", "fassiez", "puissiez", "sachiez", "vouliez"],
            ["qu'ils", "soient", "aient", "aillent", "fassent", "puissent", "sachent", "veuillent"],
          ],
        },
        examples: [
          { fr: "Il faut que tu sois à l'heure.", en: "You have to be on time." },
          { fr: "Il faut que j'aie mon passeport.", en: "I need to have my passport." },
          { fr: "Il faut que nous allions à la banque.", en: "We need to go to the bank." },
          { fr: "Il faut que vous fassiez attention.", en: "You need to be careful." },
          { fr: "Il faut qu'elle sache la vérité.", en: "She has to know the truth." },
          { fr: "Il vaut mieux que tu puisses le joindre.", en: "It's better if you can reach him." },
        ],
      },
      {
        heading: `"Il faut que" + subjunctive vs "il faut" + infinitive`,
        body: [
          `"Il faut" + infinitive states a general rule or an obligation for whoever is concerned: "Il faut partir" (we have to go, one has to go). "Il faut que" + subjunctive names the person: "Il faut que vous partiez" (you have to leave).`,
          `English uses an infinitive for the second case too (I need you to call), which leads to calques such as "il faut toi partir". French has no such structure: as soon as a different person is involved, you need "que" and a conjugated verb in the subjunctive.`,
        ],
        examples: [
          { fr: "Il faut réserver à l'avance.", en: "You have to book in advance." },
          { fr: "Il faut que tu réserves à l'avance.", en: "You (specifically) have to book in advance." },
          { fr: "Il ne faut pas fumer ici.", en: "Smoking isn't allowed here." },
          { fr: "Il faut qu'on parte maintenant.", en: "We've got to leave now." },
          { fr: "Tu dois partir. / Il faut que tu partes.", en: "You must leave. (two ways to say it)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il faut que tu finis ton assiette.",
        right: "Il faut que tu finisses ton assiette.",
        why: `"Il faut que" always takes the subjunctive. Build it from "ils finissent": "que tu finisses".`,
      },
      {
        wrong: "Il faut que nous parlons.",
        right: "Il faut que nous parlions.",
        why: `The "nous" form of the subjunctive ends in "-ions", like the imparfait, never in "-ons".`,
      },
      {
        wrong: "Il faut que vous soyiez prêts.",
        right: "Il faut que vous soyez prêts.",
        why: `"Être" and "avoir" have no "i" after the "y": "soyons", "soyez", "ayons", "ayez".`,
      },
      {
        wrong: "Il faut toi partir.",
        right: "Il faut que tu partes.",
        why: `French cannot attach a person to "il faut" + infinitive the way English says I need you to go. Use "que" + subjunctive.`,
      },
      {
        wrong: "Il faut que je fais la vaisselle.",
        right: "Il faut que je fasse la vaisselle.",
        why: `"Faire" is irregular in the subjunctive: "que je fasse", "que nous fassions".`,
      },
    ],
    faqs: [
      {
        q: "Is the subjunctive a tense?",
        a: `No, it is a mood. It has a present ("que je fasse") and a past ("que j'aie fait"), and in everyday French those are the only two in use. The present subjunctive covers present and future meaning: "il faut que tu viennes demain".`,
      },
      {
        q: `Why does the "-er" subjunctive look the same as the present?`,
        a: `Because the present of "-er" verbs already ends in "-e", "-es", "-e", "-ent". Only "nous" and "vous" change ("parlions", "parliez"). Since you usually cannot hear the difference, spell the forms carefully and listen for the trigger instead.`,
      },
      {
        q: `Do I always need "que" before a subjunctive?`,
        a: `In practice, yes. The subjunctive appears in clauses introduced by "que" or by a conjunction ending in "que" ("pour que", "avant que", "bien que"). Set phrases such as "Vive la France !" or "Soit !" are the rare exceptions.`,
      },
    ],
    related: ["subjunctive-wishes-and-emotions", "subjunctive-vs-indicative-opinion-doubt", "french-imperative-with-pronouns"],
    lessons: [
      "b1-subjunctive-forms-1",
      "b1-pattern-subjunctive-ir-re-verbs",
      "b1-subjunctive-forms-2",
      "b1-subjunctive-irregulars-1",
      "b1-subjunctive-irregulars-2",
      "b1-circuit-two-stem-subjunctives",
    ],
  },
  {
    slug: "subjunctive-wishes-and-emotions",
    title: "The Subjunctive After Wishes, Necessity and Emotions",
    description:
      "When French needs the subjunctive after vouloir que, il est important que, je suis content que or avoir peur que, when it switches to an infinitive, and why espérer que takes the indicative.",
    level: "B1",
    intro: [
      `The subjunctive is not random. Its first big territory is the will and the feelings: whenever the main verb expresses a wish, a demand, a necessity or an emotion about what someone else does, the verb that follows goes into the subjunctive. "Je veux que tu viennes", "Je suis contente que tu sois là", "J'ai peur qu'il soit en retard".`,
      `The logic is that these verbs do not assert a fact; they react to it or push towards it. That is why "je sais que" (a fact) takes the indicative, while "je veux que" (a wish) takes the subjunctive.`,
      `Two rules prevent most errors. First, if both verbs share the same subject, French uses an infinitive instead of "que" ("je veux partir", not "je veux que je parte"). Second, "espérer" is the famous exception: it takes the indicative.`,
    ],
    sections: [
      {
        heading: "Wishes, demands and preferences",
        body: [
          `"Vouloir", "souhaiter", "désirer", "préférer", "aimer (mieux)", "demander", "exiger", "accepter", "refuser" and "ordonner" all take "que" + subjunctive when the second verb has a different subject. The conditional is common for politeness: "je voudrais que", "j'aimerais que".`,
          `English often uses an object + infinitive here (I want you to come, she'd like us to stay). French never does: the person becomes the subject of a "que" clause.`,
        ],
        examples: [
          { fr: "Je veux que tu viennes avec moi.", en: "I want you to come with me." },
          { fr: "Mes parents préfèrent que je rentre avant minuit.", en: "My parents prefer me to be home before midnight." },
          { fr: "J'aimerais que vous m'envoyiez le dossier.", en: "I'd like you to send me the file." },
          { fr: "Le directeur exige que tout soit prêt lundi.", en: "The director insists that everything be ready on Monday." },
          { fr: "Elle souhaite que ses enfants fassent des études.", en: "She hopes her children will go to university." },
        ],
      },
      {
        heading: "Necessity and importance",
        body: [
          `Besides "il faut que", impersonal expressions of necessity or importance take the subjunctive: "il est nécessaire que", "il est important que", "il est essentiel que", "il est indispensable que", "il vaut mieux que".`,
          `Each of them also works with "de" + infinitive when no particular person is meant: "Il est important de dormir" (it's important to sleep) vs "Il est important que tu dormes" (it's important for you to sleep).`,
        ],
        examples: [
          { fr: "Il est important que tu dormes huit heures.", en: "It's important for you to sleep eight hours." },
          { fr: "Il est nécessaire que nous prenions une décision.", en: "We need to make a decision." },
          { fr: "Il vaut mieux qu'ils partent tôt.", en: "They'd better leave early." },
          { fr: "Il est essentiel que chacun puisse s'exprimer.", en: "It's essential that everyone can speak." },
          { fr: "Il est important de bien dormir.", en: "It's important to sleep well." },
        ],
      },
      {
        heading: "Emotions: joy, sadness, surprise, fear, regret",
        body: [
          `"Être content / heureux / ravi / triste / désolé / surpris / déçu / fier que", "avoir peur que", "craindre que", "regretter que", "s'étonner que" and "c'est dommage que" take the subjunctive, even when the thing you react to is a plain fact. "Je suis content que tu sois là": you are here, but what the sentence says is my feeling about it.`,
          `In careful written French, "avoir peur que" and "craindre que" are often followed by a "ne" that has no negative meaning, the "ne explétif": "J'ai peur qu'il ne soit trop tard". In speech it is usually left out, and it never changes the meaning.`,
        ],
        table: {
          headers: ["Trigger", "Example"],
          rows: [
            ["être content(e) que", "Je suis contente que tu sois venu."],
            ["être désolé(e) que", "Je suis désolé que tu sois malade."],
            ["être surpris(e) que", "Je suis surpris qu'il ne dise rien."],
            ["avoir peur que", "J'ai peur qu'il pleuve demain."],
            ["regretter que", "Je regrette que vous partiez si tôt."],
            ["c'est dommage que", "C'est dommage qu'elle ne puisse pas venir."],
          ],
        },
        examples: [
          { fr: "Je suis ravie que tu aies trouvé du travail.", en: "I'm delighted you've found a job." },
          { fr: "Nous sommes tristes que vous partiez.", en: "We're sad you're leaving." },
          { fr: "J'ai peur qu'il oublie le rendez-vous.", en: "I'm afraid he'll forget the appointment." },
          { fr: "Ça m'étonne qu'elle ne réponde pas.", en: "I'm surprised she isn't answering." },
          { fr: "C'est dommage que tu ne puisses pas rester.", en: "It's a shame you can't stay." },
        ],
      },
      {
        heading: "Same subject: use the infinitive",
        body: [
          `When the person who wants or feels is the same as the person who acts, French drops "que" and uses an infinitive. After verbs of wishing the infinitive follows directly ("je veux partir", "je préfère rester"). After expressions of emotion, add "de" ("je suis content de te voir", "j'ai peur de tomber").`,
          `So "je veux que je parte" or "je suis content que je sois là" are wrong: the subjunctive needs two different subjects.`,
        ],
        examples: [
          { fr: "Je veux partir. / Je veux que tu partes.", en: "I want to leave. / I want you to leave." },
          { fr: "Je suis content de te voir.", en: "I'm happy to see you." },
          { fr: "Je suis content que tu sois là.", en: "I'm glad you're here." },
          { fr: "Elle a peur de rater son train.", en: "She's afraid of missing her train." },
          { fr: "Elle a peur que son fils rate son train.", en: "She's afraid her son will miss his train." },
          { fr: "Nous regrettons de ne pas pouvoir venir.", en: "We're sorry we can't come." },
        ],
      },
      {
        heading: `The exception: "espérer que" + indicative`,
        body: [
          `"Espérer" expresses a wish, yet it takes the indicative, usually the future: "J'espère que tu viendras". The traditional explanation is that hoping leans towards believing something will happen. Whatever the reason, it is one of the most frequently tested points in French.`,
          `Compare "souhaiter que" + subjunctive: "Je souhaite que tu viennes" vs "J'espère que tu viendras" mean nearly the same thing with different moods. In the negative or in a question, "espérer" can take the subjunctive in formal writing, but the indicative is never wrong.`,
        ],
        examples: [
          { fr: "J'espère que tu vas mieux.", en: "I hope you're feeling better." },
          { fr: "J'espère qu'il fera beau ce week-end.", en: "I hope the weather will be nice this weekend." },
          { fr: "On espère que vous avez fait bon voyage.", en: "We hope you had a good trip." },
          { fr: "Je souhaite que tout se passe bien.", en: "I hope everything goes well." },
          { fr: "J'espère te revoir bientôt.", en: "I hope to see you again soon." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je veux toi venir.",
        right: "Je veux que tu viennes.",
        why: `English I want you to come has no word-for-word equivalent. A different subject needs "que" + subjunctive.`,
      },
      {
        wrong: "J'espère que tu viennes.",
        right: "J'espère que tu viendras.",
        why: `"Espérer que" takes the indicative, usually the future or the present.`,
      },
      {
        wrong: "Je suis content que je suis ici.",
        right: "Je suis content d'être ici.",
        why: `With the same subject, use "de" + infinitive after an emotion. And when the subjects differ, it is the subjunctive, not the indicative.`,
      },
      {
        wrong: "Je suis désolé que tu es malade.",
        right: "Je suis désolé que tu sois malade.",
        why: `Emotions take the subjunctive even when the cause is a fact.`,
      },
      {
        wrong: "Il est important que tu fais du sport.",
        right: "Il est important que tu fasses du sport.",
        why: `"Il est important que" is a necessity trigger: subjunctive, and "faire" is irregular ("que tu fasses").`,
      },
    ],
    faqs: [
      {
        q: `Why doesn't "espérer" take the subjunctive?`,
        a: `Grammarians explain it as closer to expectation than to desire. In practice, treat it like "penser que": indicative in the affirmative. Its near-synonym "souhaiter que" takes the subjunctive.`,
      },
      {
        q: `Does "dire que" take the subjunctive?`,
        a: `When it reports a fact, no: "Il dit qu'il vient". When it reports an order, yes: "Dis-lui qu'il vienne" (tell him to come). The same goes for "écrire que". Most of the time, though, an order is reported with "dire de" + infinitive: "Dis-lui de venir".`,
      },
      {
        q: `Is the "ne" in "j'ai peur qu'il ne pleuve" a negation?`,
        a: `No. It is the "ne explétif", a stylistic "ne" found in formal French after "avoir peur que", "craindre que", "avant que" and "à moins que". "J'ai peur qu'il ne pleuve" means I'm afraid it will rain. A real negation needs "pas": "j'ai peur qu'il ne pleuve pas".`,
      },
    ],
    related: ["french-subjunctive-forms", "subjunctive-vs-indicative-opinion-doubt", "subjunctive-after-conjunctions"],
    lessons: [
      "b1-subjunctive-wishes-emotion-1",
      "b1-circuit-emotion-triggers",
      "b1-subjunctive-wishes-emotion-2",
      "b1-error-hunt-esperer-souhaiter",
      "b1-mixed-practice-veux-infinitive-or-que",
    ],
  },
  {
    slug: "subjunctive-vs-indicative-opinion-doubt",
    title: "Je pense que vs Je ne pense pas que: Subjunctive or Indicative?",
    description:
      "Why je pense que takes the indicative but je ne pense pas que takes the subjunctive, plus doubt, possibility vs probability, il me semble que and peut-être que.",
    level: "B1",
    intro: [
      `The second territory of the subjunctive is uncertainty. When you state what you believe, French uses the indicative: "Je pense qu'il a raison". When you deny, doubt or merely consider something possible, it switches to the subjunctive: "Je ne pense pas qu'il ait raison", "Je doute qu'il ait raison", "Il est possible qu'il ait raison".`,
      `The dividing line is the speaker's commitment. The indicative presents a clause as true (or very likely true); the subjunctive presents it as uncertain or rejected. That one idea explains pairs that otherwise look arbitrary, such as "il est probable que" + indicative vs "il est possible que" + subjunctive.`,
      `This is also where native usage is a little fluid: in questions and in relaxed speech you will hear both moods. This guide gives the safe choices first and then the grey areas.`,
    ],
    sections: [
      {
        heading: "Affirmative opinion: indicative",
        body: [
          `"Je pense que", "je crois que", "je trouve que", "je suis sûr(e) que", "il me semble que", "j'ai l'impression que" and "je suppose que" assert what you hold true, so they take the indicative, in whatever tense the meaning needs.`,
          `"Trouver que" is for opinions based on experience ("je trouve que ce film est trop long"), "penser" and "croire" for beliefs in general. All three behave the same way grammatically.`,
        ],
        examples: [
          { fr: "Je pense qu'elle a raison.", en: "I think she's right." },
          { fr: "Je crois qu'il viendra demain.", en: "I believe he'll come tomorrow." },
          { fr: "Je trouve que ce restaurant est trop cher.", en: "I find this restaurant too expensive." },
          { fr: "Je suis sûre que tu as fait de ton mieux.", en: "I'm sure you did your best." },
          { fr: "Il me semble que la réunion est à dix heures.", en: "I think the meeting is at ten." },
        ],
      },
      {
        heading: "Negative opinion and doubt: subjunctive",
        body: [
          `Negate the same verbs and the speaker no longer vouches for the clause, so it takes the subjunctive: "je ne pense pas que", "je ne crois pas que", "je ne suis pas sûr(e) que", "je ne trouve pas que". "Douter que" always takes the subjunctive, since doubting is the opposite of asserting.`,
          `Careful: "je ne doute pas que" (I'm sure that) logically asserts, and in everyday French it is followed by the indicative, though formal writing often keeps the subjunctive.`,
        ],
        examples: [
          { fr: "Je ne pense pas qu'elle ait raison.", en: "I don't think she's right." },
          { fr: "Je ne crois pas qu'il vienne demain.", en: "I don't think he'll come tomorrow." },
          { fr: "Je ne suis pas sûr que ce soit une bonne idée.", en: "I'm not sure it's a good idea." },
          { fr: "Je doute qu'ils puissent finir à temps.", en: "I doubt they can finish in time." },
          { fr: "Je ne trouve pas que ce soit si cher.", en: "I don't think it's that expensive." },
        ],
      },
      {
        heading: "Impersonal expressions: possible vs probable",
        body: [
          `Expressions of possibility, judgement or doubt take the subjunctive: "il est possible que", "il se peut que", "il est impossible que", "il est normal que", "il est rare que", "il est naturel que", "il est étonnant que", "il n'est pas certain que".`,
          `Expressions of certainty or high probability take the indicative: "il est probable que", "il est certain que", "il est clair que", "il est évident que", "il est vrai que", "il est sûr que". So "Il est possible qu'il pleuve" but "Il est probable qu'il pleuvra". A useful test: if you could add I'm convinced, use the indicative.`,
          `With no specific subject, each expression takes "de" + infinitive: "Il est normal d'être fatigué" vs "Il est normal que tu sois fatigué".`,
        ],
        table: {
          headers: ["+ subjunctive", "+ indicative"],
          rows: [
            ["il est possible que", "il est probable que"],
            ["il se peut que", "il est certain / sûr que"],
            ["il est normal / rare que", "il est clair / évident que"],
            ["il n'est pas vrai que", "il est vrai que"],
            ["il semble que (often)", "il me semble que"],
          ],
        },
        examples: [
          { fr: "Il est possible qu'il pleuve cet après-midi.", en: "It may rain this afternoon." },
          { fr: "Il est probable qu'il pleuvra cet après-midi.", en: "It will probably rain this afternoon." },
          { fr: "Il se peut que je sois en retard.", en: "I might be late." },
          { fr: "Il est normal que tu sois fatigué après un tel voyage.", en: "It's normal for you to be tired after a trip like that." },
          { fr: "Il est évident qu'il ment.", en: "It's obvious he's lying." },
          { fr: "Il est vrai que la ville a beaucoup changé.", en: "It's true that the town has changed a lot." },
        ],
      },
      {
        heading: `Questions, "il semble que" and "peut-être que"`,
        body: [
          `In inverted questions ("Penses-tu qu'il ait raison ?") formal French prefers the subjunctive, because the speaker is asking rather than asserting. In everyday questions with intonation or "est-ce que", the indicative is normal: "Tu crois qu'il va venir ?".`,
          `"Il me semble que" (I think) takes the indicative, but impersonal "il semble que" (it seems that) usually takes the subjunctive, since it sounds less certain. "Peut-être que" looks like "il est possible que" but takes the indicative: "Peut-être qu'il viendra".`,
          `Finally, "pourvu que" + subjunctive expresses a fervent hope (let's hope that), and "que" alone + subjunctive can open a wish or a command for a third person: "Qu'il entre !" (let him come in).`,
        ],
        examples: [
          { fr: "Tu crois qu'il va venir ?", en: "Do you think he's going to come?" },
          { fr: "Crois-tu qu'il puisse nous aider ?", en: "Do you believe he could help us?" },
          { fr: "Il semble que le projet soit abandonné.", en: "It seems the project has been dropped." },
          { fr: "Peut-être qu'elle a oublié.", en: "Maybe she forgot." },
          { fr: "Pourvu qu'il fasse beau demain !", en: "Let's hope the weather's nice tomorrow!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je pense qu'il soit malade.",
        right: "Je pense qu'il est malade.",
        why: `An affirmative opinion asserts the clause, so it takes the indicative.`,
      },
      {
        wrong: "Je ne pense pas qu'il est malade.",
        right: "Je ne pense pas qu'il soit malade.",
        why: `Once the opinion is negated, the clause is no longer asserted: subjunctive. You will hear the indicative in casual speech, but write the subjunctive.`,
      },
      {
        wrong: "Il est probable qu'il vienne.",
        right: "Il est probable qu'il viendra.",
        why: `"Probable" leans towards certainty and takes the indicative; "possible" takes the subjunctive.`,
      },
      {
        wrong: "Peut-être qu'il soit en retard.",
        right: "Peut-être qu'il est en retard.",
        why: `"Peut-être que" takes the indicative, unlike "il est possible que".`,
      },
      {
        wrong: "Je doute qu'il a compris.",
        right: "Je doute qu'il ait compris.",
        why: `"Douter que" always takes the subjunctive; here the past subjunctive, since the understanding is in the past.`,
      },
    ],
    faqs: [
      {
        q: `Do French people really use the subjunctive after "je ne pense pas que"?`,
        a: `Yes, overwhelmingly, especially with common forms like "soit", "ait", "puisse" and "fasse". In fast speech you may hear the indicative, but the subjunctive is the standard and is what examiners expect.`,
      },
      {
        q: `What about "je ne dis pas que"?`,
        a: `It behaves like "je ne pense pas que": "Je ne dis pas que tu aies tort" (I'm not saying you're wrong). Affirmative "je dis que" takes the indicative.`,
      },
      {
        q: "Is there a quick test for impersonal expressions?",
        a: `Ask whether the speaker is presenting the clause as true. Certainty, truth, evidence and probability: indicative. Possibility, doubt, judgement, emotion and necessity: subjunctive.`,
      },
    ],
    related: ["french-subjunctive-forms", "subjunctive-wishes-and-emotions", "subjunctive-in-relative-clauses"],
    lessons: [
      "b1-doubt-opinion-1",
      "b1-minimal-pairs-probable-possible",
      "b1-quick-round-pense-ne-pense-pas",
      "b1-doubt-opinion-2",
      "b1-qa-tu-crois-que",
    ],
  },
  {
    slug: "french-imperative-with-pronouns",
    title: "The French Imperative with Pronouns: Donne-le-moi, Ne me le donne pas",
    description:
      "The full French imperative: irregular forms (sois, aie, sache, veuillez), pronominal verbs (lève-toi), pronoun order after the verb (donne-le-moi), the negative (ne me le donne pas) and vas-y, manges-en.",
    level: "B1",
    intro: [
      `You already know the basic imperative: "parle", "parlons", "parlez". At B1 the challenge is everything around it: the handful of irregular forms, reflexive verbs ("lève-toi"), and above all object pronouns, which jump behind the verb in the affirmative ("donne-le-moi") but stay in front in the negative ("ne me le donne pas").`,
      `The rule is easier than it looks. In an affirmative command, pronouns follow the verb, joined by hyphens, in roughly the English order (give it to me: "donne-le-moi"). In a negative command, nothing moves: pronouns sit before the verb exactly as in a normal statement.`,
    ],
    sections: [
      {
        heading: "The forms, including the four irregulars",
        body: [
          `The imperative uses the "tu", "nous" and "vous" forms of the present without the subject. "-er" verbs, and "aller", drop the "-s" of the "tu" form: "tu parles" becomes "parle", "tu vas" becomes "va". Other verbs keep it: "finis", "prends", "viens".`,
          `Four verbs borrow their imperative from the subjunctive: "être" ("sois, soyons, soyez"), "avoir" ("aie, ayons, ayez"), "savoir" ("sache, sachons, sachez") and "vouloir", which is used almost only as "veuillez" in formal requests ("Veuillez patienter"). Remember too "dites" and "faites", not "disez" or "faisez".`,
          `For written instructions (recipes, notices, forms), French often uses the infinitive instead: "Ne pas fumer", "Mélanger la farine et les œufs".`,
        ],
        table: {
          headers: ["", "tu", "nous", "vous"],
          rows: [
            ["parler", "parle", "parlons", "parlez"],
            ["aller", "va", "allons", "allez"],
            ["être", "sois", "soyons", "soyez"],
            ["avoir", "aie", "ayons", "ayez"],
            ["savoir", "sache", "sachons", "sachez"],
            ["vouloir", "(veuille)", "(veuillons)", "veuillez"],
          ],
        },
        examples: [
          { fr: "Sois sage !", en: "Be good!" },
          { fr: "N'ayez pas peur.", en: "Don't be afraid." },
          { fr: "Sachez que la boutique ferme à 19 heures.", en: "Please note that the shop closes at 7 pm." },
          { fr: "Veuillez remplir ce formulaire.", en: "Please fill in this form." },
          { fr: "Allons au cinéma ce soir !", en: "Let's go to the cinema tonight!" },
          { fr: "Préchauffer le four à 180 degrés.", en: "Preheat the oven to 180 degrees." },
        ],
      },
      {
        heading: `Reflexive verbs: "lève-toi" and "ne te lève pas"`,
        body: [
          `With pronominal verbs, the reflexive pronoun follows the affirmative imperative, with a hyphen, and "te" becomes "toi": "lève-toi", "levons-nous", "levez-vous". In the negative it goes back in front and stays "te": "ne te lève pas", "ne vous inquiétez pas".`,
          `"S'asseoir" is worth learning as a set: "assieds-toi", "asseyons-nous", "asseyez-vous" (or "assois-toi" in relaxed speech).`,
        ],
        examples: [
          { fr: "Dépêche-toi, on va rater le bus !", en: "Hurry up, we're going to miss the bus!" },
          { fr: "Ne t'inquiète pas, tout va bien.", en: "Don't worry, everything's fine." },
          { fr: "Asseyez-vous, je vous en prie.", en: "Please sit down." },
          { fr: "Amusez-vous bien !", en: "Have fun!" },
          { fr: "Ne nous énervons pas.", en: "Let's not get worked up." },
        ],
      },
      {
        heading: "Pronouns after an affirmative command",
        body: [
          `In the affirmative, every object pronoun goes after the verb, linked by hyphens. "Me" and "te" become "moi" and "toi" when they come last: "regarde-moi", "donne-le-moi". With two pronouns, the direct object comes first: "donne-le-moi", "envoie-la-lui", "montre-les-leur".`,
          `"En" and "y" always come last, and before them "moi" and "toi" shorten to "m'" and "t'": "donne-m'en", "va-t'en", "occupe-t'en". Before "y" and "en", the "-er" verbs and "va" get their "-s" back so the words can link: "vas-y", "manges-en", "parles-en", "penses-y".`,
        ],
        table: {
          headers: ["Affirmative (after the verb)", "Negative (before the verb)"],
          rows: [
            ["Donne-le-moi.", "Ne me le donne pas."],
            ["Envoie-la-lui.", "Ne la lui envoie pas."],
            ["Montrez-les-leur.", "Ne les leur montrez pas."],
            ["Donne-m'en.", "Ne m'en donne pas."],
            ["Vas-y.", "N'y va pas."],
            ["Parles-en.", "N'en parle pas."],
          ],
        },
        examples: [
          { fr: "Ce livre ? Prête-le-moi, s'il te plaît.", en: "That book? Lend it to me, please." },
          { fr: "Les photos, montre-les-leur ce soir.", en: "Show them the photos tonight." },
          { fr: "Il reste du gâteau ? Donne-m'en un morceau.", en: "Is there any cake left? Give me a piece." },
          { fr: "Va-t'en !", en: "Go away!" },
          { fr: "Tu as un problème avec ton chef ? Parles-en à quelqu'un.", en: "Problem with your boss? Talk to someone about it." },
          { fr: "Le marché est ouvert, vas-y maintenant.", en: "The market's open, go now." },
        ],
      },
      {
        heading: "Negative commands: nothing moves",
        body: [
          `In the negative, the imperative behaves like an ordinary statement without its subject: "ne" + pronouns + verb + "pas". The pronouns keep their normal forms and their normal order ("me / te / se / nous / vous" before "le / la / les", before "lui / leur", before "y", before "en").`,
          `That is why you get "donne-le-moi" but "ne me le donne pas": in the affirmative "le" comes before "moi", in the negative "me" comes before "le". The "-s" added before "y" and "en" disappears in the negative too: "vas-y" but "n'y va pas".`,
        ],
        examples: [
          { fr: "Ne me le dis pas, je ne veux pas savoir !", en: "Don't tell me, I don't want to know!" },
          { fr: "Ne les leur donnez pas tout de suite.", en: "Don't give them to them straight away." },
          { fr: "N'en mange pas trop.", en: "Don't eat too much of it." },
          { fr: "N'y pense plus.", en: "Don't think about it any more." },
          { fr: "Ne lui en parle pas.", en: "Don't mention it to him." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Donne-moi-le.",
        right: "Donne-le-moi.",
        why: `After an affirmative imperative, the direct object pronoun comes first. "Donne-moi-le" is heard in casual speech in some regions, but it is not standard.`,
      },
      {
        wrong: "Ne donne-le-moi pas.",
        right: "Ne me le donne pas.",
        why: `In a negative command the pronouns go back in front of the verb, in their ordinary forms.`,
      },
      {
        wrong: "Va-y !",
        right: "Vas-y !",
        why: `Before "y" and "en", "va" and "-er" verbs take back their "-s" for the liaison: "vas-y", "achètes-en".`,
      },
      {
        wrong: "Lève-te !",
        right: "Lève-toi !",
        why: `"Me" and "te" become "moi" and "toi" when they come after the verb at the end.`,
      },
      {
        wrong: "Soit gentil avec ta sœur.",
        right: "Sois gentil avec ta sœur.",
        why: `The "tu" imperative of "être" is "sois"; "soit" is the "il" form of the subjunctive.`,
      },
    ],
    faqs: [
      {
        q: "How do I make a command sound polite?",
        a: `Use "vous" and soften it: "Pourriez-vous fermer la porte ?", "Merci de fermer la porte", or the formal "Veuillez fermer la porte". A bare imperative plus "s'il vous plaît" is fine for simple everyday requests.`,
      },
      {
        q: `Can I give an order to "il" or "ils"?`,
        a: `Not with the imperative. Use "que" + subjunctive: "Qu'il entre !" (let him come in), "Qu'ils attendent !" (they can wait!).`,
      },
      {
        q: `Why "donne-m'en" and not "donne-moi-en"?`,
        a: `Before "en" and "y", "moi" and "toi" shorten to "m'" and "t'". "Donnez-moi-z-en" is a well-known colloquial mistake, and "donne-moi-en" is avoided in careful French.`,
      },
    ],
    related: ["french-subjunctive-forms", "french-conditional", "possessive-and-demonstrative-pronouns"],
    lessons: [
      "b1-imperative-in-full-1",
      "b1-imperative-in-full-2",
      "b1-imperatives-with-pronouns",
      "b1-vas-y-manges-en",
    ],
  },
  {
    slug: "french-conditional",
    title: "The French Conditional: Je voudrais, Tu devrais, On pourrait",
    description:
      "How to form the French present conditional, its irregular stems, and its main uses: politeness, advice, suggestions, wishes, unconfirmed news, and the future in the past.",
    level: "B1",
    intro: [
      `The present conditional ("je ferais", I would do) is one of the most useful forms in French because it does far more than hypotheses. It softens requests ("je voudrais"), gives advice ("tu devrais"), makes suggestions ("on pourrait"), expresses dreams ("j'aimerais vivre à Paris") and, in the news, signals that a fact is not confirmed.`,
      `The form is a perfect blend of two tenses you already know: the stem of the future and the endings of the imparfait. If you know "je ferai" and "je faisais", you can build "je ferais".`,
      `One warning for English speakers: would does not always mean the conditional. When would describes a past habit (we would go to the beach every summer), French uses the imparfait: "on allait à la plage tous les étés".`,
    ],
    sections: [
      {
        heading: "Future stem + imparfait endings",
        body: [
          `Take the future stem (usually the infinitive; "-re" verbs lose their final "e") and add "-ais", "-ais", "-ait", "-ions", "-iez", "-aient". The stem always ends in "r", so every conditional has an "r" sound before the ending.`,
          `The irregular stems are exactly those of the future: "être" ser-, "avoir" aur-, "aller" ir-, "faire" fer-, "pouvoir" pourr-, "vouloir" voudr-, "devoir" devr-, "savoir" saur-, "venir" viendr-, "voir" verr-, "falloir" faudr-, "envoyer" enverr-.`,
        ],
        table: {
          headers: ["", "parler", "prendre", "être", "pouvoir"],
          rows: [
            ["je", "parlerais", "prendrais", "serais", "pourrais"],
            ["tu", "parlerais", "prendrais", "serais", "pourrais"],
            ["il / elle / on", "parlerait", "prendrait", "serait", "pourrait"],
            ["nous", "parlerions", "prendrions", "serions", "pourrions"],
            ["vous", "parleriez", "prendriez", "seriez", "pourriez"],
            ["ils / elles", "parleraient", "prendraient", "seraient", "pourraient"],
          ],
        },
        examples: [
          { fr: "Je prendrais bien un café.", en: "I could do with a coffee." },
          { fr: "Ce serait génial !", en: "That would be great!" },
          { fr: "Nous aurions besoin d'un peu plus de temps.", en: "We would need a bit more time." },
          { fr: "Elles viendraient avec plaisir.", en: "They would be happy to come." },
          { fr: "Il faudrait réserver.", en: "We ought to book." },
        ],
      },
      {
        heading: "Future or conditional? Hearing the difference",
        body: [
          `In the "je" form, the future ends in "-rai" and the conditional in "-rais": "je parlerai" (I will speak) vs "je parlerais" (I would speak). In standard pronunciation the future ends in a closed [e] and the conditional in an open [ɛ], but many speakers merge them, so context and spelling matter. In the other persons the difference is clear: "il parlera / il parlerait", "nous parlerons / nous parlerions".`,
        ],
        examples: [
          { fr: "J'irai à Lyon demain.", en: "I'll go to Lyon tomorrow." },
          { fr: "J'irais à Lyon si j'avais le temps.", en: "I'd go to Lyon if I had the time." },
          { fr: "Elle viendra ce soir.", en: "She'll come tonight." },
          { fr: "Elle viendrait ce soir, mais elle est malade.", en: "She'd come tonight, but she's ill." },
          { fr: "Nous serons ravis de vous voir.", en: "We'll be delighted to see you." },
        ],
      },
      {
        heading: "Politeness, advice and suggestions",
        body: [
          `The conditional softens anything that might sound too direct. "Je veux" is blunt in a shop; "je voudrais" is the norm. "Pouvez-vous" is fine, "pourriez-vous" is more polite, and "ça vous dérangerait de" is more polite still.`,
          `For advice, use "tu devrais" / "vous devriez" (you should), "tu ferais mieux de" (you'd better), or "à ta place, je..." (if I were you). For suggestions, "on pourrait" (we could) or "ça te dirait de" (do you fancy).`,
        ],
        examples: [
          { fr: "Je voudrais un aller simple pour Bordeaux, s'il vous plaît.", en: "I'd like a single to Bordeaux, please." },
          { fr: "Pourriez-vous m'aider à porter cette valise ?", en: "Could you help me carry this suitcase?" },
          { fr: "Tu devrais te reposer un peu.", en: "You should get some rest." },
          { fr: "À ta place, je lui dirais la vérité.", en: "If I were you, I'd tell him the truth." },
          { fr: "On pourrait aller au restaurant ce soir.", en: "We could go out for dinner tonight." },
          { fr: "Ça te dirait de venir avec nous ?", en: "Do you fancy coming with us?" },
        ],
      },
      {
        heading: "Wishes, unconfirmed news and the future in the past",
        body: [
          `"J'aimerais" and "je voudrais" express wishes; when someone else is involved, they take "que" + subjunctive: "J'aimerais que tu restes".`,
          `Journalists use the conditional for information they have not confirmed, the "conditionnel journalistique": "Le suspect serait en fuite" (the suspect is reportedly on the run). It is often paired with "selon" or "d'après".`,
          `Finally, the conditional is the future seen from the past, as in English: "Il a dit qu'il viendrait" (he said he would come).`,
        ],
        examples: [
          { fr: "J'aimerais vivre au bord de la mer.", en: "I'd like to live by the sea." },
          { fr: "J'aimerais que tu m'appelles plus souvent.", en: "I'd like you to call me more often." },
          { fr: "Selon la police, l'incendie serait d'origine criminelle.", en: "According to the police, the fire was apparently started deliberately." },
          { fr: "Le ministre aurait l'intention de démissionner.", en: "The minister reportedly intends to resign." },
          { fr: "Elle m'a promis qu'elle m'écrirait.", en: "She promised she would write to me." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quand j'étais petit, je jouerais au foot tous les jours.",
        right: "Quand j'étais petit, je jouais au foot tous les jours.",
        why: `English would for a past habit is the imparfait in French, not the conditional.`,
      },
      {
        wrong: "Je vouderais un café.",
        right: "Je voudrais un café.",
        why: `"Vouloir" has the irregular stem "voudr-", as in the future.`,
      },
      {
        wrong: "Tu devras te reposer.",
        right: "Tu devrais te reposer.",
        why: `"Tu devras" is the future (you will have to). Advice needs the conditional "tu devrais".`,
      },
      {
        wrong: "Si j'aurais le temps, je viendrais.",
        right: "Si j'avais le temps, je viendrais.",
        why: `The conditional never goes in the "si" clause; use the imparfait there.`,
      },
    ],
    faqs: [
      {
        q: "Is the conditional a tense or a mood?",
        a: `Traditional grammars call it a mood; many modern ones treat it as a tense of the indicative because it also expresses the future in the past. For a learner the label doesn't matter: learn the forms and the uses.`,
      },
      {
        q: `How do I say could and should?`,
        a: `Could is usually "pourrait" ("tu pourrais m'aider ?"), and should is "devrait" ("tu devrais partir"). In the past they become "aurait pu" and "aurait dû": "tu aurais dû me le dire".`,
      },
      {
        q: `Is "je voudrais" more polite than "j'aimerais"?`,
        a: `Both are polite. "Je voudrais" is the standard request formula in shops and cafés; "j'aimerais" sounds slightly more personal and is common for wishes and plans.`,
      },
    ],
    related: ["french-si-clauses", "french-imperative-with-pronouns", "conditionnel-passe"],
    lessons: [
      "b1-conditional-1",
      "b1-minimal-pairs-parlerai-parlerais",
      "b1-conditional-2",
      "b1-conditional-of-hearsay",
      "b1-transformation-chain-advice",
    ],
  },
  {
    slug: "french-si-clauses",
    title: "French Si Clauses: Si + Present and Si + Imparfait",
    description:
      "French if-clauses: si + present for real conditions, si + imparfait + conditional for imaginary ones, why the future and conditional never follow si, and si vs quand.",
    level: "B1",
    intro: [
      `French if-sentences follow a strict pattern of tenses, stricter than English. The core rule fits on one line: after "si" (if), never put the future or the conditional. The tense in the "si" clause tells you how real the situation is, and the other clause follows from it.`,
      `For a real or likely condition, use "si" + present: "Si tu viens, on ira au parc". For an imaginary or unlikely one, use "si" + imparfait, with the conditional in the main clause: "Si j'étais riche, j'achèterais une maison". (The past version, "si j'avais su, je serais venu", is a B2 topic.)`,
      `English mostly follows the same logic (if you come, if I were rich), so the main danger is transferring the would into the "si" clause, a mistake that even some native speakers make in casual speech and that teachers correct relentlessly.`,
    ],
    sections: [
      {
        heading: `Real conditions: "si" + present`,
        body: [
          `When the condition is possible or likely, "si" takes the present, and the main clause can be in the present (a general truth), the future (a consequence) or the imperative (an instruction). The "futur proche" is common in speech: "si tu continues, tu vas tomber".`,
          `Before "il" and "ils", "si" becomes "s'": "s'il pleut", "s'ils viennent". It does not elide before "elle" or "on": "si elle vient", "si on partait".`,
        ],
        table: {
          headers: ["Si clause", "Main clause", "Example"],
          rows: [
            ["présent", "présent", "Si on chauffe la glace, elle fond."],
            ["présent", "futur", "Si tu viens, on ira au parc."],
            ["présent", "futur proche", "S'il pleut, on va rester à la maison."],
            ["présent", "impératif", "Si tu as faim, prends un fruit."],
          ],
        },
        examples: [
          { fr: "Si tu veux, je peux t'aider.", en: "If you like, I can help you." },
          { fr: "S'il fait beau demain, nous irons à la plage.", en: "If it's nice tomorrow, we'll go to the beach." },
          { fr: "Si vous avez des questions, appelez-moi.", en: "If you have any questions, call me." },
          { fr: "Si elle rate le train, elle prendra un taxi.", en: "If she misses the train, she'll take a taxi." },
          { fr: "Si on mélange du bleu et du jaune, on obtient du vert.", en: "If you mix blue and yellow, you get green." },
        ],
      },
      {
        heading: `Imaginary conditions: "si" + imparfait → conditional`,
        body: [
          `When the condition is unreal, contrary to fact or just unlikely, the "si" clause takes the imparfait and the main clause the present conditional. "Si j'avais une voiture" (if I had a car: I don't), "je t'emmènerais" (I would take you).`,
          `The imparfait here has nothing to do with the past: "si j'avais le temps demain" is about tomorrow. It simply marks distance from reality. "Si j'étais toi" (if I were you) is the classic way to give advice.`,
          `The order of the clauses is free: "Je t'emmènerais si j'avais une voiture" is equally correct. Only the tenses are fixed.`,
        ],
        examples: [
          { fr: "Si j'étais riche, j'achèterais une maison en Provence.", en: "If I were rich, I'd buy a house in Provence." },
          { fr: "Si tu travaillais moins, tu serais moins fatigué.", en: "If you worked less, you'd be less tired." },
          { fr: "Si j'étais toi, je refuserais.", en: "If I were you, I'd refuse." },
          { fr: "Qu'est-ce que tu ferais si tu gagnais au loto ?", en: "What would you do if you won the lottery?" },
          { fr: "Nous viendrions si nous avions une voiture.", en: "We would come if we had a car." },
          { fr: "S'il savait la vérité, il serait furieux.", en: "If he knew the truth, he'd be furious." },
        ],
      },
      {
        heading: "Likely or unlikely? Choosing between the two",
        body: [
          `The same idea can go either way, depending on how likely the speaker thinks it is. "Si je gagne, je t'invite" sounds confident; "si je gagnais, je t'inviterais" sounds like a daydream. English makes exactly the same distinction with if I win and if I won.`,
          `"Si" + imparfait with no main clause is also a friendly way to make a suggestion: "Si on allait au cinéma ?" (how about going to the cinema?). "Et si" works the same way: "Et si on commandait une pizza ?".`,
        ],
        examples: [
          { fr: "Si j'ai le temps, je passerai te voir.", en: "If I have time, I'll drop by." },
          { fr: "Si j'avais le temps, je passerais te voir.", en: "If I had time, I'd drop by." },
          { fr: "Si on allait se promener ?", en: "How about going for a walk?" },
          { fr: "Et si on partait en week-end ?", en: "What if we went away for the weekend?" },
          { fr: "Si seulement il faisait moins froid !", en: "If only it were less cold!" },
        ],
      },
      {
        heading: `"Si" vs "quand": if vs when`,
        body: [
          `"Si" introduces something that may or may not happen; "quand" introduces something you expect to happen. And there is a twist: "quand" about the future takes the future tense in French, unlike English. "Quand tu arriveras, appelle-moi" (when you arrive, call me).`,
          `So the tense rules are opposite: "si" + present for the future, "quand" + future for the future. The same applies to "dès que", "lorsque" and "aussitôt que".`,
          `"Si" can also mean whether, in indirect questions: "Je ne sais pas s'il viendra". In that case the future and conditional are perfectly possible, because this "si" is not a condition.`,
        ],
        examples: [
          { fr: "Si tu vois Marc, dis-lui bonjour.", en: "If you see Marc, say hello." },
          { fr: "Quand tu verras Marc, dis-lui bonjour.", en: "When you see Marc, say hello." },
          { fr: "Je t'appellerai quand je serai à la gare.", en: "I'll call you when I'm at the station." },
          { fr: "Dès qu'elle aura son diplôme, elle partira à l'étranger.", en: "As soon as she gets her degree, she'll go abroad." },
          { fr: "Je me demande s'il pleuvra demain.", en: "I wonder whether it'll rain tomorrow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si tu viendras, on ira au parc.",
        right: "Si tu viens, on ira au parc.",
        why: `A conditional "si" is never followed by the future. Use the present.`,
      },
      {
        wrong: "Si j'aurais de l'argent, je voyagerais.",
        right: "Si j'avais de l'argent, je voyagerais.",
        why: `The conditional goes in the main clause, never after "si". The "si" clause takes the imparfait.`,
      },
      {
        wrong: "Si il pleut, on reste à la maison.",
        right: "S'il pleut, on reste à la maison.",
        why: `"Si" elides before "il" and "ils" only: "s'il", "s'ils", but "si elle", "si on".`,
      },
      {
        wrong: "Quand je suis grand, je serai pilote.",
        right: "Quand je serai grand, je serai pilote.",
        why: `"Quand" referring to the future takes the future tense, unlike English when I grow up.`,
      },
    ],
    faqs: [
      {
        q: `Do French people really never say "si j'aurais"?`,
        a: `You will hear it in casual speech, and there is even a famous joke: "Les si n'aiment pas les -rais" (the ifs don't like "-rais" endings). But it is considered a mistake, so avoid it in exams and writing.`,
      },
      {
        q: `Can the main clause come first?`,
        a: `Yes. "Je viendrai si j'ai le temps" and "Si j'ai le temps, je viendrai" are both correct. Put a comma after the "si" clause when it comes first.`,
      },
      {
        q: "What about if-sentences about the past?",
        a: `For something that didn't happen in the past, French uses "si" + plus-que-parfait with the past conditional: "Si j'avais su, je serais venu" (if I had known, I would have come). See the guide on the conditionnel passé.`,
      },
    ],
    related: ["french-conditional", "futur-anterieur", "conditionnel-passe"],
    lessons: [
      "b1-if-clauses-1",
      "b1-minimal-pairs-si-quand",
      "b1-if-clauses-2",
      "b1-error-hunt-si-quand-future",
    ],
  },
  {
    slug: "french-plus-que-parfait",
    title: "The Plus-que-parfait: The Past Before the Past",
    description:
      "How to form and use the French plus-que-parfait (j'avais fini, elle était partie), agreement rules, and how it works with the passé composé and the imparfait in a story.",
    level: "B1",
    intro: [
      `The plus-que-parfait is the French pluperfect: "j'avais mangé" (I had eaten), "elle était partie" (she had left). It places one past event before another past event, so that a story can step back in time: "Quand je suis arrivé, le film avait déjà commencé".`,
      `It is built exactly like the passé composé, with the auxiliary in the imparfait instead of the present. Everything you know about the passé composé carries over: the same choice between "avoir" and "être", the same participles, the same agreement rules.`,
      `The main difference from English is that French is stricter about it. In English I lost the keys I bought yesterday is fine; in French, once the narrative is in the past, an earlier event usually needs the plus-que-parfait: "J'ai perdu les clés que j'avais achetées la veille".`,
    ],
    sections: [
      {
        heading: `Forming it: "avais" / "étais" + past participle`,
        body: [
          `Use the imparfait of "avoir" or "être" plus the past participle. Verbs that take "être" in the passé composé (movement and change of state verbs like "aller", "venir", "partir", "arriver", "naître", "mourir", and all pronominal verbs) take "être" here too.`,
          `With "être", the participle agrees with the subject: "elle était partie", "ils s'étaient levés". With "avoir", it agrees with a direct object placed before the verb: "les lettres qu'il avait écrites".`,
        ],
        table: {
          headers: ["", "faire (avoir)", "partir (être)", "se lever (être)"],
          rows: [
            ["je", "j'avais fait", "j'étais parti(e)", "je m'étais levé(e)"],
            ["tu", "tu avais fait", "tu étais parti(e)", "tu t'étais levé(e)"],
            ["il / elle / on", "il avait fait", "elle était partie", "il s'était levé"],
            ["nous", "nous avions fait", "nous étions parti(e)s", "nous nous étions levé(e)s"],
            ["vous", "vous aviez fait", "vous étiez parti(e)(s)", "vous vous étiez levé(e)(s)"],
            ["ils / elles", "ils avaient fait", "elles étaient parties", "ils s'étaient levés"],
          ],
        },
        examples: [
          { fr: "J'avais déjà mangé quand il a appelé.", en: "I had already eaten when he called." },
          { fr: "Elle était partie avant la fin du film.", en: "She had left before the end of the film." },
          { fr: "Nous nous étions levés très tôt ce jour-là.", en: "We had got up very early that day." },
          { fr: "Ils n'avaient jamais vu la mer.", en: "They had never seen the sea." },
          { fr: "Tu avais pris ton parapluie ?", en: "Had you taken your umbrella?" },
        ],
      },
      {
        heading: "When to use it: stepping back in a past story",
        body: [
          `Use the plus-que-parfait for an event that happened before the past moment you are talking about. The passé composé (or imparfait) sets the reference point; the plus-que-parfait goes further back.`,
          `It is especially common after "parce que" (explaining a past situation by an earlier cause), in relative clauses ("le livre que j'avais acheté"), and with "déjà", "pas encore" and "jamais": "Il n'était pas encore arrivé".`,
        ],
        examples: [
          { fr: "Quand je suis arrivé à la gare, le train était déjà parti.", en: "When I got to the station, the train had already left." },
          { fr: "Elle était fatiguée parce qu'elle avait mal dormi.", en: "She was tired because she had slept badly." },
          { fr: "J'ai retrouvé le portefeuille que j'avais perdu.", en: "I found the wallet I had lost." },
          { fr: "Il m'a dit qu'il n'avait pas reçu mon message.", en: "He told me he hadn't received my message." },
          { fr: "On n'avait jamais vu autant de neige.", en: "We had never seen so much snow." },
        ],
      },
      {
        heading: "Three pasts together: passé composé, imparfait, plus-que-parfait",
        body: [
          `In a narrative, each past tense has its job. The passé composé moves the story forward (what happened next), the imparfait paints the background (what was going on, what things were like), and the plus-que-parfait looks back (what had happened before).`,
          `Time markers help: "la veille" (the day before), "auparavant" (beforehand), "avant" and "déjà" often signal the plus-que-parfait, while "ce jour-là", "soudain" and "tout à coup" signal the passé composé.`,
        ],
        examples: [
          { fr: "Il pleuvait, j'étais trempé, et j'avais oublié mes clés.", en: "It was raining, I was soaked, and I'd forgotten my keys." },
          { fr: "La veille, nous avions préparé tous les sandwichs.", en: "The day before, we had made all the sandwiches." },
          { fr: "Quand la police est arrivée, les voleurs s'étaient enfuis.", en: "When the police arrived, the thieves had run away." },
          { fr: "Je ne l'ai pas reconnue : elle avait coupé ses cheveux.", en: "I didn't recognise her: she'd cut her hair." },
          { fr: "Il faisait nuit quand ils sont enfin rentrés.", en: "It was dark when they finally got home." },
        ],
      },
      {
        heading: `Regrets with "si seulement"`,
        body: [
          `"Si seulement" + plus-que-parfait expresses regret about the past, like English if only I had: "Si seulement j'avais écouté !". The same structure is the first half of the past conditional sentence ("Si j'avais su, je ne serais pas venu").`,
        ],
        examples: [
          { fr: "Si seulement j'avais su !", en: "If only I'd known!" },
          { fr: "Si seulement tu m'avais prévenu !", en: "If only you had warned me!" },
          { fr: "Si seulement nous étions partis plus tôt !", en: "If only we'd left earlier!" },
          { fr: "Si seulement elle avait pris le train !", en: "If only she had taken the train!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quand je suis arrivé, il a déjà parti.",
        right: "Quand je suis arrivé, il était déjà parti.",
        why: `His leaving came before my arrival, so it needs the plus-que-parfait. And "partir" takes "être".`,
      },
      {
        wrong: "Elle avait tombé dans l'escalier.",
        right: "Elle était tombée dans l'escalier.",
        why: `"Tomber" takes "être" in every compound tense, and the participle agrees with "elle".`,
      },
      {
        wrong: "Les photos qu'il avait pris étaient floues.",
        right: "Les photos qu'il avait prises étaient floues.",
        why: `The direct object "que" (= "les photos") comes before the verb, so the participle agrees: "prises".`,
      },
      {
        wrong: "Je m'avais levé tôt.",
        right: "Je m'étais levé tôt.",
        why: `Pronominal verbs always take "être".`,
      },
    ],
    faqs: [
      {
        q: "Do I always need the plus-que-parfait for an earlier event?",
        a: `Not when the order is obvious from a sequence: "Il s'est levé, il a pris une douche et il est parti" lists events in order with the passé composé. You need the plus-que-parfait when you go back in time relative to the main story line.`,
      },
      {
        q: "Is the plus-que-parfait used in speech?",
        a: `Yes, constantly. It is not a literary tense: "J'avais oublié !" and "Je te l'avais dit !" (I told you so!) are everyday phrases.`,
      },
      {
        q: `What about the passé antérieur ("j'eus fini")?`,
        a: `It is a literary tense that does a similar job after "quand" and "dès que" in texts written in the passé simple. You only need to recognise it; in speech and ordinary writing, use the plus-que-parfait.`,
      },
    ],
    related: ["futur-anterieur", "french-si-clauses", "conditionnel-passe"],
    lessons: [
      "b1-plus-que-parfait-1",
      "b1-timeline-what-happened-first",
      "b1-circuit-pc-imparfait-pqp",
      "b1-plus-que-parfait-2",
      "b1-timeline-three-pasts",
    ],
  },
  {
    slug: "relative-pronouns-qui-que-ou-dont",
    title: "French Relative Pronouns: Qui, Que, Où and Dont",
    description:
      "How to choose between qui, que, où and dont in French: subject vs object, où for time as well as place, dont for de + noun, preposition + qui, and agreement after que.",
    level: "B1",
    intro: [
      `Relative pronouns join two sentences by turning one into a description of a noun: "J'ai un ami. Il habite à Rome." becomes "J'ai un ami qui habite à Rome". English uses who, which, that, where and whose, and often drops the pronoun altogether (the book I read). French never drops it, and it chooses the pronoun by grammar, not by whether the noun is a person or a thing.`,
      `The key question is what job the pronoun does in its own clause. Subject: "qui". Direct object: "que". Place or time: "où". Something introduced by "de": "dont". After another preposition: "preposition + qui" for people (and "lequel", a B2 topic, for things).`,
    ],
    sections: [
      {
        heading: `"Qui" (subject) vs "que" (object)`,
        body: [
          `"Qui" is the subject of the verb that follows, so it is usually followed directly by a verb (or an object pronoun + verb): "la femme qui parle". "Que" is the direct object, so it is followed by its own subject: "la femme que je connais". Both work for people and for things; "qui" does not mean who.`,
          `"Que" becomes "qu'" before a vowel ("le film qu'on a vu"); "qui" never elides ("l'homme qui est là").`,
        ],
        examples: [
          { fr: "C'est le train qui va à Marseille.", en: "That's the train that goes to Marseille." },
          { fr: "C'est le train que je prends tous les jours.", en: "That's the train I take every day." },
          { fr: "J'ai une voisine qui parle quatre langues.", en: "I have a neighbour who speaks four languages." },
          { fr: "La voisine que tu as rencontrée est italienne.", en: "The neighbour you met is Italian." },
          { fr: "Le film qu'on a vu hier était génial.", en: "The film we saw yesterday was brilliant." },
        ],
      },
      {
        heading: `Agreement after "que", and "c'est moi qui"`,
        body: [
          `Because "que" is a direct object placed before the verb, a participle conjugated with "avoir" agrees with the noun "que" stands for: "les chaussures que j'ai achetées", "la lettre qu'il a écrite". You can often hear the agreement when the participle ends in a consonant ("écrite", "prise", "faite").`,
          `After "qui", the verb agrees with the antecedent: "c'est moi qui ai raison", "c'est nous qui avons gagné", "c'est vous qui êtes en retard". English says it's me who is, so learners write "c'est moi qui a".`,
        ],
        examples: [
          { fr: "Voici les photos que j'ai prises en Bretagne.", en: "Here are the photos I took in Brittany." },
          { fr: "La robe qu'elle a mise est superbe.", en: "The dress she put on is gorgeous." },
          { fr: "C'est moi qui ai fait ce gâteau.", en: "I'm the one who made this cake." },
          { fr: "C'est toi qui as les clés ?", en: "Are you the one who has the keys?" },
          { fr: "C'est nous qui sommes arrivés les premiers.", en: "We were the ones who arrived first." },
        ],
      },
      {
        heading: `"Où" for place and time, preposition + "qui" for people`,
        body: [
          `"Où" replaces a place ("la ville où je suis né") and also a moment: "le jour où", "l'année où", "au moment où". English says the day when or just the day; French needs "où", never "quand".`,
          `After a preposition, use "qui" for people: "la personne avec qui je travaille", "l'ami à qui j'ai prêté ma voiture", "les gens pour qui je fais ça". The preposition always comes before the pronoun; French cannot leave it at the end like English the person I work with.`,
        ],
        examples: [
          { fr: "C'est le quartier où j'ai grandi.", en: "That's the neighbourhood where I grew up." },
          { fr: "Je me souviens du jour où on s'est rencontrés.", en: "I remember the day we met." },
          { fr: "Il est arrivé au moment où je partais.", en: "He arrived just as I was leaving." },
          { fr: "La collègue avec qui je déjeune est en vacances.", en: "The colleague I have lunch with is on holiday." },
          { fr: "C'est l'ami à qui j'ai prêté mon vélo.", en: "That's the friend I lent my bike to." },
        ],
      },
      {
        heading: `"Dont": replacing "de" + noun`,
        body: [
          `"Dont" replaces a noun introduced by "de". It appears with verbs and expressions built with "de" ("parler de", "avoir besoin de", "se souvenir de", "avoir peur de", "être fier de") and for possession, where English uses whose: "l'homme dont la fille est médecin".`,
          `Word order after "dont" is always subject + verb + rest: "l'écrivain dont j'ai lu tous les livres" (not "dont tous les livres j'ai lu"). With whose, keep the article: "dont la fille", "dont le frère", never "dont sa fille".`,
        ],
        table: {
          headers: ["Construction", "Example with dont"],
          rows: [
            ["parler de", "le film dont tout le monde parle"],
            ["avoir besoin de", "l'outil dont j'ai besoin"],
            ["se souvenir de", "la chanson dont je me souviens"],
            ["être fier de", "le projet dont elle est fière"],
            ["le fils de l'homme", "l'homme dont le fils est pilote"],
          ],
        },
        examples: [
          { fr: "C'est le livre dont je t'ai parlé.", en: "That's the book I told you about." },
          { fr: "Voilà exactement ce dont j'avais besoin.", en: "That's exactly what I needed." },
          { fr: "J'ai une amie dont le mari est chef.", en: "I have a friend whose husband is a chef." },
          { fr: "C'est un souvenir dont je suis très fier.", en: "It's a memory I'm very proud of." },
          { fr: "La maison dont les volets sont bleus est à vendre.", en: "The house with the blue shutters is for sale." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Le livre j'ai lu était long.",
        right: "Le livre que j'ai lu était long.",
        why: `English can drop the relative pronoun (the book I read); French never can.`,
      },
      {
        wrong: "La femme que habite ici est médecin.",
        right: "La femme qui habite ici est médecin.",
        why: `"La femme" is the subject of "habite", so the pronoun is "qui", even though "que" might feel natural for a person.`,
      },
      {
        wrong: "Le jour quand je suis arrivé, il neigeait.",
        right: "Le jour où je suis arrivé, il neigeait.",
        why: `After a noun of time, the relative pronoun is "où", not "quand".`,
      },
      {
        wrong: "Le film que je t'ai parlé est sorti.",
        right: "Le film dont je t'ai parlé est sorti.",
        why: `"Parler de" takes "de", so the relative pronoun is "dont".`,
      },
      {
        wrong: "C'est moi qui a raison.",
        right: "C'est moi qui ai raison.",
        why: `After "qui", the verb agrees with the person "qui" stands for: "moi qui ai", "toi qui as", "nous qui avons".`,
      },
    ],
    faqs: [
      {
        q: `Does "qui" mean who and "que" mean that?`,
        a: `No. Both refer to people and things alike. "Qui" is the subject of its clause, "que" the object. "Le chat qui dort" (the cat that is sleeping), "la femme que j'aime" (the woman I love).`,
      },
      {
        q: `Can I use "de qui" instead of "dont"?`,
        a: `For people, "de qui" is possible and sometimes heard ("la personne de qui je parle"), but "dont" is far more common and always correct. For whose, only "dont" works.`,
      },
      {
        q: `How do I say the reason why or the pen I write with?`,
        a: `With a preposition and an inanimate noun, French uses "lequel": "la raison pour laquelle", "le stylo avec lequel j'écris". See the guide on "lequel, auquel, duquel".`,
      },
    ],
    related: ["ce-qui-ce-que-ce-dont", "lequel-auquel-duquel", "subjunctive-in-relative-clauses"],
    lessons: [
      "b1-relative-pronouns-1",
      "b1-circuit-ou-and-preposition-qui",
      "b1-minimal-pairs-qui-que",
      "b1-relative-pronouns-2",
      "b1-quick-round-qui-que-ou-dont",
    ],
  },
  {
    slug: "ce-qui-ce-que-ce-dont",
    title: "Ce qui, Ce que, Ce dont: How to Say What in French",
    description:
      "How French says what and which in the middle of a sentence: ce qui, ce que, ce dont and ce à quoi, tout ce que, highlighting with ce que j'aime, c'est..., and the which that refers back to a whole idea.",
    level: "B1",
    intro: [
      `English what in I don't know what happened or what I need is sleep is not a question word, and French does not translate it with "que" or "quoi". It uses "ce" (the thing) plus a relative pronoun: "Je ne sais pas ce qui s'est passé", "Ce dont j'ai besoin, c'est de dormir".`,
      `The choice between "ce qui", "ce que", "ce dont" and "ce à quoi" follows exactly the rules of "qui", "que", "dont" and "à quoi". So the method is simple: work out the role of what in its clause (subject, object, after "de", after "à"), then add "ce".`,
    ],
    sections: [
      {
        heading: `"Ce qui" (subject) and "ce que" (object)`,
        body: [
          `"Ce qui" is the subject of the next verb: "ce qui m'intéresse" (what interests me). "Ce que" is the object, so it is followed by a subject: "ce que je veux" (what I want). As with "qui" and "que", "ce que" elides before a vowel ("ce qu'il dit"), "ce qui" never does.`,
          `A quick test: if a verb comes right after (or an object pronoun and a verb), it is "ce qui"; if a subject like "je", "tu" or "les gens" comes next, it is "ce que".`,
        ],
        examples: [
          { fr: "Ce qui m'énerve, c'est le bruit.", en: "What annoys me is the noise." },
          { fr: "Dis-moi ce qui ne va pas.", en: "Tell me what's wrong." },
          { fr: "Je ne comprends pas ce que tu dis.", en: "I don't understand what you're saying." },
          { fr: "Fais ce que tu veux.", en: "Do what you like." },
          { fr: "Ce qu'il a fait est inacceptable.", en: "What he did is unacceptable." },
        ],
      },
      {
        heading: `"Ce dont" and "ce à quoi"`,
        body: [
          `When the verb is built with "de", use "ce dont": "avoir besoin de" → "ce dont j'ai besoin", "parler de" → "ce dont on parle", "avoir envie de" → "ce dont j'ai envie".`,
          `When the verb is built with "à", use "ce à quoi": "penser à" → "ce à quoi je pense", "s'attendre à" → "ce à quoi je ne m'attendais pas", "s'intéresser à" → "ce à quoi il s'intéresse". Other prepositions work the same way: "ce sur quoi je compte", "ce contre quoi ils se battent".`,
        ],
        table: {
          headers: ["Role of what", "French", "Example"],
          rows: [
            ["subject", "ce qui", "ce qui se passe"],
            ["direct object", "ce que", "ce que je pense"],
            ["after de", "ce dont", "ce dont j'ai besoin"],
            ["after à", "ce à quoi", "ce à quoi je pense"],
          ],
        },
        examples: [
          { fr: "C'est exactement ce dont j'avais envie.", en: "That's exactly what I felt like." },
          { fr: "Je ne sais pas ce dont il parle.", en: "I don't know what he's talking about." },
          { fr: "Ce à quoi je pense, c'est aux vacances.", en: "What I'm thinking about is the holidays." },
          { fr: "C'est ce à quoi on s'attendait.", en: "It's what we expected." },
          { fr: "Ce dont tu as peur n'arrivera pas.", en: "What you're afraid of won't happen." },
        ],
      },
      {
        heading: `"Tout ce qui", "tout ce que": everything that`,
        body: [
          `English everything (that) and all (that) is "tout ce qui" / "tout ce que" / "tout ce dont". The same choice applies: "tout ce qui brille" (everything that glitters, subject), "tout ce que je sais" (everything I know, object), "tout ce dont tu as besoin" (everything you need).`,
        ],
        examples: [
          { fr: "Tout ce qui brille n'est pas or.", en: "All that glitters is not gold." },
          { fr: "Je t'ai dit tout ce que je savais.", en: "I've told you everything I knew." },
          { fr: "Prends tout ce dont tu as besoin.", en: "Take everything you need." },
          { fr: "Tout ce qu'elle veut, c'est un peu de calme.", en: "All she wants is a bit of peace." },
        ],
      },
      {
        heading: "Highlighting and summing up",
        body: [
          `French loves to front "ce qui / ce que / ce dont" and pick it up with "c'est": "Ce que j'aime, c'est voyager". This pseudo-cleft is the natural way to stress something; English does the same with What I love is travelling. In speech, "c'est" stays singular even before a plural noun: "Ce que j'aime, c'est les vacances".`,
          `"Ce qui" and "ce que" also refer back to a whole idea, where English uses which: "Il est parti sans dire au revoir, ce qui m'a vexé" (which upset me). Using "qui" alone there would be wrong, because there is no single noun to refer to.`,
        ],
        examples: [
          { fr: "Ce que je préfère, c'est le petit-déjeuner.", en: "What I like best is breakfast." },
          { fr: "Ce qui compte, c'est la santé.", en: "What matters is your health." },
          { fr: "Ce dont il a besoin, c'est de repos.", en: "What he needs is rest." },
          { fr: "Il a oublié mon anniversaire, ce qui m'a fait de la peine.", en: "He forgot my birthday, which hurt me." },
          { fr: "Elle parle cinq langues, ce que je trouve impressionnant.", en: "She speaks five languages, which I find impressive." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je ne sais pas qu'est-ce qui s'est passé.",
        right: "Je ne sais pas ce qui s'est passé.",
        why: `Inside a sentence, "qu'est-ce qui" and "qu'est-ce que" become "ce qui" and "ce que". The question form is common in casual speech but incorrect in standard French.`,
      },
      {
        wrong: "Quoi tu veux, c'est impossible.",
        right: "Ce que tu veux, c'est impossible.",
        why: `"Quoi" cannot start a relative clause meaning what. Use "ce que".`,
      },
      {
        wrong: "Ce que j'ai besoin, c'est de dormir.",
        right: "Ce dont j'ai besoin, c'est de dormir.",
        why: `"Avoir besoin de" takes "de", so the pronoun is "ce dont".`,
      },
      {
        wrong: "Il pleuvait, qui était dommage.",
        right: "Il pleuvait, ce qui était dommage.",
        why: `When which refers to a whole clause, French needs "ce qui" or "ce que", not "qui" alone.`,
      },
    ],
    faqs: [
      {
        q: `When do I use "quoi" then?`,
        a: `After a preposition: "ce à quoi", "ce sur quoi", "de quoi", and in questions: "À quoi tu penses ?", "Tu fais quoi ?" (casual). It is also used in "il n'y a pas de quoi" (you're welcome) and "avoir de quoi vivre".`,
      },
      {
        q: `Is "ce qui" the same as "qu'est-ce qui"?`,
        a: `They share a meaning, but "qu'est-ce qui" is for direct questions ("Qu'est-ce qui se passe ?") and "ce qui" for embedded ones ("Je me demande ce qui se passe").`,
      },
      {
        q: `"Ce que j'aime, c'est..." or "ce sont..." before a plural?`,
        a: `Formal writing prefers "ce sont" before a plural noun ("ce sont les vacances"); speech almost always uses "c'est". Both are correct.`,
      },
    ],
    related: ["relative-pronouns-qui-que-ou-dont", "indirect-questions", "emphasis-cleft-sentences-dislocation"],
    lessons: [
      "b1-ce-qui-ce-que-1",
      "b1-ce-qui-ce-que-2",
      "b1-quick-round-ce-qui-ce-que-ce-dont",
      "b1-choose-explain-which-relative",
    ],
  },
  {
    slug: "french-passive-voice",
    title: "The French Passive Voice, On and Se: Three Ways to Hide the Doer",
    description:
      "How to form the French passive (être + participle in every tense), par vs de, and why French so often prefers on, the pronominal passive (ça se vend bien) or se faire + infinitive.",
    level: "B1",
    intro: [
      `The French passive is built like the English one: "être" + past participle, with "par" for the doer. "La tour a été construite en 1889" (the tower was built in 1889). The participle agrees with the subject, as it always does after "être".`,
      `The big difference is frequency. French uses the true passive much less than English, especially in speech. To avoid naming who did something, it prefers "on" ("on m'a volé mon vélo"), a pronominal verb ("ça se vend bien") or "se faire" + infinitive ("je me suis fait voler mon vélo").`,
      `There is also one thing French cannot do at all: make a passive from an indirect object. English I was given a present has no passive equivalent; French says "On m'a offert un cadeau".`,
    ],
    sections: [
      {
        heading: "Forming the passive in every tense",
        body: [
          `Put "être" in the tense you need and add the past participle, which agrees with the subject in gender and number. The tense lives entirely in "être": "est construite" (is built), "a été construite" (was built, has been built), "était construite", "sera construite", "avait été construite".`,
          `The doer, if mentioned, is introduced by "par". After verbs of feeling or state ("aimer", "respecter", "connaître", "couvrir", "entourer", "remplir"), French often uses "de" instead: "Il est aimé de tous", "La table était couverte de papiers".`,
        ],
        table: {
          headers: ["Tense", "Passive", "English"],
          rows: [
            ["présent", "la maison est vendue", "the house is sold"],
            ["passé composé", "la maison a été vendue", "the house was / has been sold"],
            ["imparfait", "la maison était vendue", "the house was (already) sold"],
            ["futur", "la maison sera vendue", "the house will be sold"],
            ["plus-que-parfait", "la maison avait été vendue", "the house had been sold"],
          ],
        },
        examples: [
          { fr: "Ce roman a été traduit en trente langues.", en: "This novel has been translated into thirty languages." },
          { fr: "Les résultats seront publiés lundi.", en: "The results will be published on Monday." },
          { fr: "Le voleur a été arrêté par la police.", en: "The thief was arrested by the police." },
          { fr: "Cette chanteuse est adorée de ses fans.", en: "This singer is adored by her fans." },
          { fr: "Le sommet était couvert de neige.", en: "The summit was covered in snow." },
        ],
      },
      {
        heading: `State or action? "La porte est fermée" / "a été fermée"`,
        body: [
          `"Être" + participle in the present can describe a resulting state rather than an action: "La porte est fermée" usually means the door is closed (state). To describe the action of closing at a specific time, use the passé composé of the passive: "La porte a été fermée à minuit".`,
          `The same goes for the past. "Le magasin était fermé" describes how it was; "Le magasin a été fermé" reports that someone closed it.`,
        ],
        examples: [
          { fr: "Le musée est fermé le mardi.", en: "The museum is closed on Tuesdays." },
          { fr: "Le musée a été fermé pour travaux.", en: "The museum has been closed for renovation." },
          { fr: "Quand je suis arrivé, la fenêtre était cassée.", en: "When I arrived, the window was broken." },
          { fr: "La fenêtre a été cassée pendant la nuit.", en: "The window was broken during the night." },
          { fr: "Tout est réservé jusqu'à dimanche.", en: "Everything is booked until Sunday." },
        ],
      },
      {
        heading: `"On": the everyday alternative`,
        body: [
          `In conversation, "on" + active verb is the normal way to say that someone unspecified did something: "On a volé ma voiture" rather than "Ma voiture a été volée". It sounds lighter and more natural.`,
          `"On" is also the only option when the English passive is built on an indirect object. "Donner", "dire", "demander", "offrir", "promettre" and "conseiller" take "à" + person, so the person cannot become a passive subject: "On m'a dit que..." (I was told that...), "On lui a offert un poste" (he was offered a job).`,
        ],
        examples: [
          { fr: "On m'a volé mon portefeuille dans le métro.", en: "My wallet was stolen on the metro." },
          { fr: "On m'a dit que la réunion était annulée.", en: "I was told the meeting was cancelled." },
          { fr: "On lui a proposé un contrat à Montréal.", en: "She was offered a contract in Montreal." },
          { fr: "On parle français au Québec.", en: "French is spoken in Quebec." },
          { fr: "On a construit un nouveau pont l'année dernière.", en: "A new bridge was built last year." },
        ],
      },
      {
        heading: `Pronominal passive and "se faire" + infinitive`,
        body: [
          `A pronominal verb can have a passive meaning for general truths, customs and rules, usually with a thing as subject: "Ce vin se boit frais" (this wine is drunk chilled), "Ça ne se dit pas" (that isn't said), "Ce modèle se vend bien".`,
          `"Se faire" + infinitive is used when something is done to the subject, often something unpleasant ("il s'est fait voler son portefeuille", he had his wallet stolen), or a service the subject arranges ("je me suis fait couper les cheveux", I had my hair cut). The participle "fait" never agrees here: "elle s'est fait arrêter".`,
        ],
        examples: [
          { fr: "Ce plat se mange chaud.", en: "This dish is eaten hot." },
          { fr: "Ça ne se fait pas de parler la bouche pleine.", en: "Talking with your mouth full isn't done." },
          { fr: "Les billets se vendent en ligne.", en: "Tickets are sold online." },
          { fr: "Elle s'est fait renverser par une voiture.", en: "She was knocked over by a car." },
          { fr: "Je me suis fait couper les cheveux hier.", en: "I had my hair cut yesterday." },
          { fr: "Il s'est fait voler son téléphone.", en: "He had his phone stolen." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "J'ai été donné un cadeau.",
        right: "On m'a donné un cadeau.",
        why: `"Donner" takes "à" + person, so the person cannot be the subject of a passive. Use "on".`,
      },
      {
        wrong: "Les lettres ont été écrit par ma grand-mère.",
        right: "Les lettres ont été écrites par ma grand-mère.",
        why: `In the passive the participle agrees with the subject: "les lettres" is feminine plural.`,
      },
      {
        wrong: "La maison a construite en 1900.",
        right: "La maison a été construite en 1900.",
        why: `The passive needs "être" in the right tense: in the passé composé that is "a été" + participle.`,
      },
      {
        wrong: "Elle s'est faite voler son sac.",
        right: "Elle s'est fait voler son sac.",
        why: `"Fait" followed by an infinitive never agrees.`,
      },
    ],
    faqs: [
      {
        q: "Is the passive bad style in French?",
        a: `Not bad, but less common than in English. It is normal in news, history, science and official texts. In speech, "on" and pronominal verbs usually sound more natural.`,
      },
      {
        q: `"Par" or "de"?`,
        a: `"Par" for a doer performing an action ("arrêté par la police"). "De" after verbs of feeling and description ("aimé de tous", "entouré d'arbres", "rempli d'eau"). With "connaître", "respecter" and "aimer", both are possible, "de" being more literary.`,
      },
      {
        q: `Which tense of "être" do I use?`,
        a: `The tense the active sentence would have. "On construit le pont" → "le pont est construit"; "on a construit le pont" → "le pont a été construit"; "on construira le pont" → "le pont sera construit".`,
      },
    ],
    related: ["causative-faire-and-laisser", "relative-pronouns-qui-que-ou-dont", "futur-anterieur"],
    lessons: [
      "b1-passive-voice-1",
      "b1-minimal-pairs-est-fermee-a-ete-fermee",
      "b1-passive-voice-2",
      "b1-pronominal-passive",
      "b1-se-faire-infinitive",
      "b1-contrast-clinic-passive-on-se",
    ],
  },
  {
    slug: "futur-anterieur",
    title: "The Futur Antérieur and Après avoir fait",
    description:
      "How to form and use the French futur antérieur (j'aurai fini, je serai parti) after quand, dès que and une fois que, for deadlines and guesses, plus avant de + infinitive and après avoir + participle.",
    level: "B1",
    intro: [
      `The futur antérieur is the French future perfect: "j'aurai fini" (I will have finished), "elle sera partie" (she will have left). It describes an action that will be complete before another moment in the future.`,
      `English often hides this tense. Call me when you've finished uses a present perfect, but French is strictly logical: the finishing is in the future and comes before the call, so it says "Appelle-moi quand tu auras fini". This is the most common use and the one English speakers most often get wrong.`,
      `This guide also covers two infinitive constructions that order events in time: "avant de partir" (before leaving) and "après être parti" (after leaving), which French uses where English has an -ing form.`,
    ],
    sections: [
      {
        heading: `Forming it: "aurai" / "serai" + past participle`,
        body: [
          `Put "avoir" or "être" in the futur simple and add the past participle. The choice of auxiliary and the agreement rules are those of the passé composé: "j'aurai mangé", "nous serons arrivés", "elle se sera levée".`,
        ],
        table: {
          headers: ["", "finir (avoir)", "partir (être)"],
          rows: [
            ["je", "j'aurai fini", "je serai parti(e)"],
            ["tu", "tu auras fini", "tu seras parti(e)"],
            ["il / elle / on", "il aura fini", "elle sera partie"],
            ["nous", "nous aurons fini", "nous serons parti(e)s"],
            ["vous", "vous aurez fini", "vous serez parti(e)(s)"],
            ["ils / elles", "ils auront fini", "elles seront parties"],
          ],
        },
        examples: [
          { fr: "J'aurai fini ce rapport avant midi.", en: "I'll have finished this report before noon." },
          { fr: "À 20 heures, ils seront déjà partis.", en: "By 8 pm they'll already have left." },
          { fr: "Dans deux ans, nous aurons remboursé le prêt.", en: "In two years we'll have paid back the loan." },
          { fr: "Elle se sera installée avant la rentrée.", en: "She'll have settled in before the start of term." },
          { fr: "D'ici vendredi, tu auras reçu le colis.", en: "By Friday you'll have received the parcel." },
        ],
      },
      {
        heading: `After "quand", "dès que", "une fois que", "lorsque"`,
        body: [
          `After time conjunctions referring to the future, French uses the futur antérieur for the action that must be completed first, and the future (or imperative) in the main clause. English uses the present or present perfect in both cases (when I've finished, as soon as he arrives).`,
          `If the two actions are simultaneous rather than one after the other, use the plain future: "Quand tu seras à Paris, appelle-moi".`,
        ],
        examples: [
          { fr: "Appelle-moi quand tu auras fini.", en: "Call me when you've finished." },
          { fr: "Dès que j'aurai reçu ta réponse, je réserverai.", en: "As soon as I've had your answer, I'll book." },
          { fr: "Une fois que les invités seront partis, on rangera.", en: "Once the guests have left, we'll tidy up." },
          { fr: "Lorsque vous aurez rempli le formulaire, rendez-le à l'accueil.", en: "When you've filled in the form, hand it in at reception." },
          { fr: "Je te prêterai ce livre quand je l'aurai lu.", en: "I'll lend you this book when I've read it." },
        ],
      },
      {
        heading: "Guesses about the past",
        body: [
          `The futur antérieur can also express a supposition about something that has probably happened, like English must have: "Il n'est pas là ? Il aura oublié" (he must have forgotten). This use is common in speech but always optional; "il a dû oublier" means the same.`,
        ],
        examples: [
          { fr: "Elle ne répond pas, elle aura laissé son téléphone chez elle.", en: "She's not answering, she must have left her phone at home." },
          { fr: "Le train est en retard ? Il y aura eu un problème.", en: "The train's late? There must have been a problem." },
          { fr: "Ils auront manqué le bus.", en: "They must have missed the bus." },
          { fr: "J'aurai mal compris.", en: "I must have misunderstood." },
        ],
      },
      {
        heading: `"Avant de" + infinitive, "après avoir" / "être" + participle`,
        body: [
          `When the subject is the same, French orders actions with infinitives: "avant de" + infinitive (before doing) and "après" + past infinitive (after doing). The past infinitive is "avoir" or "être" + participle: "après avoir mangé", "après être sorti", "après s'être levé". English after eating uses a simple -ing, but French needs the compound form.`,
          `Agreement works as usual: with "être", the participle agrees with the subject ("après être arrivées, elles ont dîné").`,
        ],
        examples: [
          { fr: "Lave-toi les mains avant de manger.", en: "Wash your hands before eating." },
          { fr: "Après avoir mangé, on est allés se promener.", en: "After eating, we went for a walk." },
          { fr: "Après être rentrée, elle s'est couchée.", en: "After getting home, she went to bed." },
          { fr: "Après s'être disputés, ils se sont réconciliés.", en: "After arguing, they made up." },
          { fr: "Réfléchis bien avant de répondre.", en: "Think carefully before answering." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Appelle-moi quand tu as fini.",
        right: "Appelle-moi quand tu auras fini.",
        why: `The finishing is in the future and comes before the call, so French uses the futur antérieur after "quand".`,
      },
      {
        wrong: "Je partirai quand j'ai fini.",
        right: "Je partirai quand j'aurai fini.",
        why: `After "quand" about the future, never use the present or passé composé.`,
      },
      {
        wrong: "Après manger, on est partis.",
        right: "Après avoir mangé, on est partis.",
        why: `"Après" takes the past infinitive. ("Après manger" exists in casual speech, but the standard form is "après avoir mangé".)`,
      },
      {
        wrong: "Après avoir arrivé, il m'a appelé.",
        right: "Après être arrivé, il m'a appelé.",
        why: `The past infinitive uses the same auxiliary as the passé composé: "arriver" takes "être".`,
      },
    ],
    faqs: [
      {
        q: "Is the futur antérieur used in speech?",
        a: `Yes, mostly after "quand" and "dès que" ("quand j'aurai fini") and for guesses ("il aura oublié"). For deadlines, speakers often prefer simpler forms, but the futur antérieur is never wrong.`,
      },
      {
        q: `Can I say "quand j'aurai fini" with the futur proche?`,
        a: `No, the futur proche has no compound form. Use the futur antérieur, or rephrase with "une fois que" or "après avoir": "Après avoir fini, je t'appellerai".`,
      },
      {
        q: `Why "avant de partir" but "avant qu'il parte"?`,
        a: `"Avant de" + infinitive is for the same subject; "avant que" + subjunctive introduces a different subject. See the guide on the subjunctive after conjunctions.`,
      },
    ],
    related: ["french-si-clauses", "french-plus-que-parfait", "subjunctive-after-conjunctions"],
    lessons: [
      "b1-futur-anterieur",
      "b1-avant-de-apres-avoir",
      "b1-time-markers-des-que-tant-que",
      "b1-transformation-chain-plans-to-deadlines",
    ],
  },
  {
    slug: "possessive-and-demonstrative-pronouns",
    title: "Le mien, Celui-ci, Ça: Possessive and Demonstrative Pronouns",
    description:
      "French possessive pronouns (le mien, la tienne, les nôtres), c'est à moi, and demonstrative pronouns celui, celle, ceux, celles with -ci / -là, de, qui and que, plus ça, cela and ceci.",
    level: "B1",
    intro: [
      `Possessive and demonstrative pronouns replace a noun you have already mentioned: "C'est ton vélo ? Non, le mien est rouge" (mine is red), "Quelle robe ? Celle-ci ou celle-là ?" (this one or that one?). They are what let you avoid repeating the noun.`,
      `The main difficulty for English speakers is agreement. English mine, this one and the ones never change; French pronouns agree in gender and number with the thing they replace, not with the owner. "La mienne" is mine for a feminine noun, whether the speaker is a man or a woman.`,
    ],
    sections: [
      {
        heading: `Possessive pronouns: "le mien", "la mienne", "les miens"`,
        body: [
          `Each possessive pronoun has an article and agrees with the thing owned. "Le" and "les" contract with "à" and "de" as usual: "au mien", "aux tiens", "du sien", "des nôtres".`,
          `Note the circumflex on "le nôtre" and "le vôtre" (pronounced with a closed [o]), unlike the determiners "notre" and "votre". "Le sien" covers his, hers and its: "Paul a son passeport, Marie a le sien".`,
        ],
        table: {
          headers: ["Owner", "masc. sing.", "fem. sing.", "masc. pl.", "fem. pl."],
          rows: [
            ["je", "le mien", "la mienne", "les miens", "les miennes"],
            ["tu", "le tien", "la tienne", "les tiens", "les tiennes"],
            ["il / elle", "le sien", "la sienne", "les siens", "les siennes"],
            ["nous", "le nôtre", "la nôtre", "les nôtres", "les nôtres"],
            ["vous", "le vôtre", "la vôtre", "les vôtres", "les vôtres"],
            ["ils / elles", "le leur", "la leur", "les leurs", "les leurs"],
          ],
        },
        examples: [
          { fr: "Ma voiture est en panne, je peux prendre la tienne ?", en: "My car's broken down, can I take yours?" },
          { fr: "Ce ne sont pas mes clés, ce sont les siennes.", en: "Those aren't my keys, they're his." },
          { fr: "Leurs enfants sont plus âgés que les nôtres.", en: "Their children are older than ours." },
          { fr: "Notre jardin est petit, le leur est immense.", en: "Our garden is small, theirs is huge." },
          { fr: "Mon téléphone ressemble beaucoup au tien.", en: "My phone looks a lot like yours." },
        ],
      },
      {
        heading: `"C'est le mien" or "c'est à moi"?`,
        body: [
          `To say who something belongs to, the most common structure is "être à" + stressed pronoun or name: "C'est à moi", "Ce sac est à Julie", "À qui est ce manteau ?". It answers the question whose.`,
          `"C'est le mien" is used to pick out your item among several of the same kind, in contrast with someone else's: "Lequel est ton manteau ? — C'est le mien, le bleu".`,
        ],
        examples: [
          { fr: "À qui est ce parapluie ? — Il est à moi.", en: "Whose umbrella is this? — It's mine." },
          { fr: "Ce livre est à ma sœur.", en: "This book is my sister's." },
          { fr: "Ces places sont à nous.", en: "These seats are ours." },
          { fr: "Ton café est froid, le mien est encore chaud.", en: "Your coffee is cold, mine is still hot." },
          { fr: "Un ami à moi habite à Nantes.", en: "A friend of mine lives in Nantes." },
        ],
      },
      {
        heading: `"Celui", "celle", "ceux", "celles"`,
        body: [
          `Demonstrative pronouns mean the one(s) and agree with the noun they replace: "celui" (masc. sing.), "celle" (fem. sing.), "ceux" (masc. pl.), "celles" (fem. pl.). They can never stand alone; they are always followed by "-ci" / "-là", by "de", or by a relative pronoun.`,
          `With "-ci" and "-là" they mean this one / that one. In everyday French "celui-là" is used for both, and "-ci" mainly appears when contrasting two things. With "de" they express possession: "celui de Paul" (Paul's). With "qui", "que" or "dont" they mean the one who / the one that: "celle que je préfère".`,
        ],
        table: {
          headers: ["", "masculine", "feminine"],
          rows: [
            ["singular", "celui (-ci / -là)", "celle (-ci / -là)"],
            ["plural", "ceux (-ci / -là)", "celles (-ci / -là)"],
          ],
        },
        examples: [
          { fr: "Quel gâteau tu veux ? Celui-ci ou celui-là ?", en: "Which cake do you want? This one or that one?" },
          { fr: "Mon ordinateur est lent, celui de mon frère est plus rapide.", en: "My computer is slow, my brother's is faster." },
          { fr: "Ceux qui veulent venir doivent s'inscrire.", en: "Those who want to come must sign up." },
          { fr: "Parmi ces chansons, celle que je préfère, c'est la dernière.", en: "Of these songs, the one I like best is the last one." },
          { fr: "Les places de devant sont prises, mais celles du fond sont libres.", en: "The front seats are taken, but the ones at the back are free." },
        ],
      },
      {
        heading: `"Ça", "cela", "ceci"`,
        body: [
          `When there is no specific noun to agree with (an idea, a situation, something unnamed), French uses the neutral pronouns "ça", "cela" and "ceci". "Ça" is the everyday spoken form of "cela"; "cela" belongs to careful writing. "Ceci" (this) is mostly written and points to what follows: "Retenez bien ceci".`,
          `Do not use "ça" for a noun you have named: "Tu aimes cette veste ? — Oui, je l'aime bien" or "Je prends celle-là", not "je prends ça" if you mean that particular jacket among others (though "ça" is common when pointing in a shop).`,
        ],
        examples: [
          { fr: "Ça ne me dérange pas.", en: "That doesn't bother me." },
          { fr: "Cela fait trois ans que j'habite ici.", en: "I've been living here for three years." },
          { fr: "C'est quoi, ça ?", en: "What's that?" },
          { fr: "Lisez ceci attentivement avant de signer.", en: "Read this carefully before signing." },
          { fr: "Ça te dit, un ciné ce soir ?", en: "Fancy a film tonight?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "C'est ma valise ? Non, c'est mienne.",
        right: "C'est ma valise ? Non, c'est la mienne.",
        why: `French possessive pronouns always include the article: "le mien", "la mienne", "les miens".`,
      },
      {
        wrong: "C'est la voiture de Paul ? Oui, c'est le sien.",
        right: "C'est la voiture de Paul ? Oui, c'est la sienne.",
        why: `The pronoun agrees with the thing owned ("la voiture"), not with the owner. English his leads learners to pick the masculine.`,
      },
      {
        wrong: "Je préfère celui.",
        right: "Je préfère celui-ci.",
        why: `"Celui", "celle", "ceux" and "celles" cannot stand alone; add "-ci" / "-là", "de" or a relative clause.`,
      },
      {
        wrong: "Ce n'est pas mon stylo, c'est le de Marc.",
        right: "Ce n'est pas mon stylo, c'est celui de Marc.",
        why: `To say Marc's, use "celui de Marc" (or "c'est à Marc"). French has no possessive ending like English 's.`,
      },
      {
        wrong: "Leur maison est plus grande que la notre.",
        right: "Leur maison est plus grande que la nôtre.",
        why: `The pronoun "la nôtre" takes a circumflex; the determiner "notre" does not.`,
      },
    ],
    faqs: [
      {
        q: `Does "le sien" mean his or hers?`,
        a: `Both. It agrees with the thing owned, not with the owner: "Paul a pris sa voiture et Marie a pris la sienne" (Marie took hers). Context tells you who the owner is.`,
      },
      {
        q: `"Celui-ci" or "celui-là"?`,
        a: `In theory "-ci" is near and "-là" is far. In practice, "celui-là" is the default in speech, and "-ci" appears when contrasting two items: "Je prends celui-ci, pas celui-là".`,
      },
      {
        q: `Can I say "c'est le mien" and "c'est à moi" interchangeably?`,
        a: `Often, yes, but "c'est à moi" answers whose it is, while "c'est le mien" distinguishes your item from others of the same kind. "À qui est ce sac ? — À moi."`,
      },
    ],
    related: ["relative-pronouns-qui-que-ou-dont", "french-imperative-with-pronouns", "emphasis-cleft-sentences-dislocation"],
    lessons: [
      "b1-possessive-pronouns",
      "b1-pattern-le-mien-la-mienne",
      "b1-demonstrative-pronouns-1",
      "b1-demonstrative-pronouns-2",
      "b1-contrast-clinic-mon-le-mien-ce-celui",
    ],
  },
];
