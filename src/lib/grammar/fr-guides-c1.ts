// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-guides-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { FrGrammarGuide } from "./fr-types";

// French grammar guides, C1 (see ./fr-types.ts and docs/french-course/guide-brief.md).
export const FR_C1_GUIDES: FrGrammarGuide[] = [
  {
    slug: "french-subjunctive-advanced",
    title: "The French Subjunctive at the Advanced level: Superlatives, Que-Fronting and Qui Que",
    description:
      "The subjunctive beyond the usual triggers: after superlatives and le seul, in sentences that open with que, after le fait que, with qui que / quoi que / où que, and as a tool for tactful disagreement.",
    level: "C1",
    intro: [
      "By the Upper-intermediate level you know the subjunctive's big triggers: wishes, emotions, doubt, necessity and conjunctions like \"bien que\" and \"pour que\". At the Advanced level the subjunctive turns up in places where nothing obvious calls for it: after a superlative (\"le meilleur film que j'aie vu\"), at the start of a sentence (\"Qu'il soit compétent, personne n'en doute\"), after \"le fait que\", or in a polite \"je ne dis pas que ce soit faux\".",
      "What these uses share is that the clause is not being asserted as a plain fact. A superlative or \"le seul\" sets up a judgement; a fronted \"que\" clause is taken as given and then commented on; a negated statement keeps its content at arm's length. The indicative says this is the case; the subjunctive says I'm considering this, not reporting it.",
      "English gives you no signal at all here (the best film I've seen, whoever you are), so learners default to the indicative. Several of these choices are also genuine choices: both moods are possible, and the meaning or the register shifts. This guide shows where the line falls.",
    ],
    sections: [
      {
        heading: "After superlatives, \"le seul\", \"le premier\" and \"personne\"",
        body: [
          "A relative clause that follows a superlative or a restrictive word (\"le seul\", \"l'unique\", \"le premier\", \"le dernier\", \"personne\", \"rien\", \"aucun\") normally takes the subjunctive: \"C'est le meilleur restaurant que je connaisse.\" The speaker is making an evaluation limited by their experience, and the subjunctive marks it as a judgement.",
          "The indicative is used when the clause states an objective, checkable fact rather than a judgement: \"C'est le premier coureur qui est arrivé\" simply reports who crossed the line first. \"C'est le seul qui puisse nous aider\" (he's the only one who could, in my view) and \"C'est le seul qui peut entrer sans badge\" (that's the rule) are both correct and mean different things.",
          "With a negative or a there-is-nobody frame, the subjunctive is close to obligatory: \"Il n'y a personne qui sache le faire\", \"Je ne connais rien qui soit plus agaçant.\" In everyday speech many French people slip into the indicative after superlatives, but in writing the subjunctive is what an educated reader expects.",
        ],
        examples: [
          { fr: "C'est le meilleur film que j'aie vu cette année.", en: "It's the best film I've seen this year." },
          { fr: "Vous êtes la seule personne qui puisse m'aider.", en: "You're the only person who can help me." },
          { fr: "Il n'y a personne ici qui sache parler japonais.", en: "There's nobody here who can speak Japanese." },
          { fr: "C'est le premier étudiant qui est arrivé ce matin.", en: "He's the first student who arrived this morning. (a plain fact)" },
          { fr: "C'est le plus beau cadeau qu'on m'ait jamais fait.", en: "It's the most beautiful present anyone has ever given me." },
          { fr: "Je ne vois rien qui puisse justifier un tel retard.", en: "I can't see anything that could justify such a delay." },
        ],
      },
      {
        heading: "A \"que\" clause at the start of the sentence",
        body: [
          "When a \"que\" clause is moved to the front of the sentence, it takes the subjunctive even if the verb that governs it would normally take the indicative. Compare \"Personne ne doute qu'il est compétent\" with \"Qu'il soit compétent, personne n'en doute.\" Fronted, the clause becomes a topic that is held up for comment rather than asserted, and French marks that with the subjunctive. Notice the pronoun \"en\" or \"le\" that picks the clause up again in the main sentence.",
          "The same logic gives the \"whether... or...\" pattern: \"Que tu viennes ou non, on part à huit heures\", \"Qu'il pleuve ou qu'il vente, elle court tous les matins.\" English uses \"whether\" plus an ordinary verb; French uses \"que\" plus the subjunctive in both halves.",
          "\"Le fait que\" sits between the two moods. When you comment on or evaluate the fact, use the subjunctive: \"Le fait qu'il soit parti sans prévenir m'inquiète.\" When you simply state it, especially after the verb, the indicative is possible: \"Cela tient au fait que les prix ont augmenté.\" At the head of a sentence, the subjunctive is the safer and more common choice.",
        ],
        examples: [
          { fr: "Qu'il soit compétent, personne n'en doute.", en: "That he's competent, nobody doubts." },
          { fr: "Que tu viennes ou non, on part à huit heures.", en: "Whether you come or not, we're leaving at eight." },
          { fr: "Qu'elle ait raison sur le fond, je l'admets volontiers.", en: "I readily admit that she's right on the substance." },
          { fr: "Le fait qu'il n'ait rien dit me paraît révélateur.", en: "The fact that he said nothing seems telling to me." },
          { fr: "Cela s'explique par le fait que la demande a doublé.", en: "That's explained by the fact that demand has doubled." },
        ],
      },
      {
        heading: "Present or past subjunctive: aspect, not tense",
        body: [
          "French has only two subjunctive tenses in everyday use, and the choice between them is about completion, not about the tense of the main verb. The present subjunctive covers an action that is simultaneous with or later than the main verb; the past subjunctive (\"avoir\" or \"être\" in the subjunctive plus the participle) covers an action already completed.",
          "\"Je suis ravie qu'elle vienne\" means she is coming now or later; \"je suis ravie qu'elle soit venue\" means she came. The main verb can be in any tense: \"j'étais ravie qu'elle vienne\" still means she was coming at that time. With \"être\" verbs, the past participle agrees as usual: \"qu'elles soient parties\".",
        ],
        table: {
          headers: ["Relation to the main verb", "Form", "Example"],
          rows: [
            ["Same time or later", "present subjunctive", "Je doute qu'il comprenne."],
            ["Already completed", "past subjunctive", "Je doute qu'il ait compris."],
            ["Completed (être verb)", "past subjunctive + agreement", "Je regrette qu'elles soient parties."],
            ["Completed before a future point", "past subjunctive", "Il faut que tu aies fini avant lundi."],
          ],
        },
        examples: [
          { fr: "Je doute qu'il ait compris la question.", en: "I doubt he understood the question." },
          { fr: "Je suis contente que tu sois venu hier.", en: "I'm glad you came yesterday." },
          { fr: "Il faut que le dossier soit envoyé avant vendredi.", en: "The file needs to be sent before Friday." },
          { fr: "Il faut que vous ayez terminé avant la fin du mois.", en: "You need to have finished before the end of the month." },
          { fr: "J'étais surpris qu'elle accepte si vite.", en: "I was surprised she accepted so quickly." },
        ],
      },
      {
        heading: "Qui que, quoi que, où que: the \"-ever\" words",
        body: [
          "English \"whoever\", \"whatever\" and \"wherever\" in a concessive sense (no matter who, what, where) become \"qui que\", \"quoi que\" and \"où que\", always followed by the subjunctive: \"qui que vous soyez\", \"quoi qu'il arrive\", \"où qu'elle aille\". \"Qui que ce soit\" and \"quoi que ce soit\" mean anyone or anything at all, and are common in negative sentences: \"Je n'ai rien dit à qui que ce soit.\"",
          "Do not confuse \"quoi que\" (two words, whatever) with \"quoique\" (one word, although). The trick: if you can replace it with \"bien que\", it's \"quoique\". A few frozen formulas belong here too: \"coûte que coûte\" (at all costs) and \"vaille que vaille\" (somehow or other).",
          "Be careful with \"whatever\" + noun. Before \"être\" French uses \"quel que soit\", which agrees: \"quelles que soient vos raisons\". That family is covered in the guide to concession.",
        ],
        examples: [
          { fr: "Qui que vous soyez, vous devez présenter une pièce d'identité.", en: "Whoever you are, you must show ID." },
          { fr: "Quoi qu'il arrive, je serai là.", en: "Whatever happens, I'll be there." },
          { fr: "Quoi que tu dises, je ne changerai pas d'avis.", en: "Whatever you say, I won't change my mind." },
          { fr: "Où qu'elle aille, elle emporte son appareil photo.", en: "Wherever she goes, she takes her camera." },
          { fr: "Il ne faut en parler à qui que ce soit.", en: "You mustn't mention it to anyone at all." },
          { fr: "Nous finirons ce chantier coûte que coûte.", en: "We'll finish this project at all costs." },
        ],
      },
      {
        heading: "The softening subjunctive and verbs that change meaning",
        body: [
          "In professional French the subjunctive is a tool for tact. Negating an opinion verb pushes its clause into the subjunctive, and that distance makes disagreement sound measured: \"Je ne suis pas sûr que ce soit la meilleure solution\", \"Je ne pense pas qu'il faille tout changer.\" The formulas \"ce n'est pas que\" and the more literary \"non que\" introduce a reason you're setting aside: \"Non que ce soit grave, mais je préfère vérifier.\"",
          "A handful of verbs take either mood with a change of meaning. \"Comprendre que\" + indicative is to realise; + subjunctive, to find something understandable. \"Dire que\" + indicative reports a statement; + subjunctive, an order. \"Admettre que\" + indicative is to acknowledge a fact; + subjunctive, to accept a possibility or tolerate. \"Supposer que\" + indicative is to assume; at the head of a hypothesis, + subjunctive.",
        ],
        table: {
          headers: ["Verb", "+ indicative", "+ subjunctive"],
          rows: [
            ["comprendre que", "Je comprends qu'il est parti. (I realise)", "Je comprends qu'il soit parti. (I can see why)"],
            ["dire que", "Il dit qu'on vient. (he says we're coming)", "Il dit qu'on vienne. (he says we should come)"],
            ["admettre que", "J'admets que j'ai eu tort. (I acknowledge)", "J'admets qu'on puisse hésiter. (I accept it's possible)"],
            ["supposer que", "Je suppose que tu es d'accord. (I assume)", "Supposons qu'il refuse. (let's suppose)"],
          ],
        },
        examples: [
          { fr: "Je ne dis pas que ce soit faux, mais c'est incomplet.", en: "I'm not saying it's wrong, but it's incomplete." },
          { fr: "Ce n'est pas que je refuse, c'est que je n'ai pas le temps.", en: "It's not that I'm refusing, it's that I don't have time." },
          { fr: "Non qu'il soit malhonnête, mais il oublie tout.", en: "Not that he's dishonest, but he forgets everything." },
          { fr: "Je comprends que vous soyez déçus.", en: "I understand why you're disappointed." },
          { fr: "J'ai compris qu'il ne viendrait pas.", en: "I realised he wouldn't come." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "C'est le meilleur livre que j'ai lu.",
        right: "C'est le meilleur livre que j'aie lu.",
        why: "After a superlative that expresses a judgement, written French expects the subjunctive. \"J'ai lu\" is common in speech but marks the writing as careless.",
      },
      {
        wrong: "Qu'il est compétent, personne n'en doute.",
        right: "Qu'il soit compétent, personne n'en doute.",
        why: "A \"que\" clause placed at the head of the sentence always takes the subjunctive, whatever the main verb.",
      },
      {
        wrong: "Quoique tu fasses, il ne sera jamais content.",
        right: "Quoi que tu fasses, il ne sera jamais content.",
        why: "Whatever is \"quoi que\" in two words. \"Quoique\" in one word means although.",
      },
      {
        wrong: "Je suis content qu'il vienne hier.",
        right: "Je suis content qu'il soit venu hier.",
        why: "The visit is over, so it needs the past subjunctive. The present subjunctive would place it now or later.",
      },
      {
        wrong: "Il n'y a personne qui peut m'aider.",
        right: "Il n'y a personne qui puisse m'aider.",
        why: "After \"personne\", \"rien\" or \"aucun\" in a relative clause, the person or thing may not even exist, so French uses the subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Is the indicative after a superlative actually wrong?",
        a: "Not always. It's correct when the clause states a verifiable fact (\"c'est le premier train qui part\"), and it's frequent in casual speech. For judgements, especially in writing, the subjunctive is the norm and sounds more precise.",
      },
      {
        q: "Do I need the past subjunctive just because the main verb is in the past?",
        a: "No. French doesn't shift the subjunctive to follow the main verb's tense. \"J'étais heureux qu'elle soit là\" uses the present subjunctive because her being there was simultaneous. Use the past subjunctive only for an action already completed.",
      },
      {
        q: "Is \"non que\" too formal to use?",
        a: "It's written and formal. In conversation, \"ce n'est pas que\" does the same job: \"Ce n'est pas que je m'ennuie, mais...\" Both take the subjunctive.",
      },
      {
        q: "Why does French put a pronoun back in after a fronted \"que\" clause?",
        a: "The fronted clause is a detached topic, and the main sentence needs its own object. \"En\" replaces it after verbs with \"de\" (\"douter de\" → \"personne n'en doute\"), \"le\" after direct-object verbs (\"je l'admets\").",
      },
    ],
    related: ["concession-in-french", "nominalisation-in-french", "emphasis-pseudo-clefts-and-inversion"],
    lessons: [
      "c1-subjunctive-nuances-1",
      "c1-subjunctive-nuances-2",
      "c1-contrast-subjonctif-present-passe",
      "c1-subjunctive-nuances-3",
      "c1-transform-qui-que-quoi-que",
      "c1-workshop-softening-subjunctive",
    ],
  },
  {
    slug: "concession-in-french",
    title: "Concession in French: Bien Que, Même Si, Avoir Beau and Quel Que Soit",
    description:
      "Every way to say although, even if and however much in French: bien que vs même si, quoique vs quoi que, quel que soit, si... que, avoir beau, quand bien même and the connectors of opposition.",
    level: "C1",
    intro: [
      "Conceding a point before making your own is the backbone of French argument, from the dissertation to the residents' meeting. French has far more tools for it than English \"although\" and \"even if\", and each one comes with its own mood: \"bien que\" takes the subjunctive, \"même si\" the indicative, \"quand bien même\" the conditional, and \"avoir beau\" an infinitive.",
      "The mood is not arbitrary. \"Bien que\" and \"quoique\" introduce a fact the speaker grants but sets aside, and French treats such conceded facts like other non-asserted content, with the subjunctive. \"Même si\" is built on \"si\", and \"si\" in French never takes the subjunctive or the conditional, so it behaves like any if-clause.",
      "On top of that come the look-alikes that trip up even native writers: \"quoique\" and \"quoi que\", \"quel que\" and \"quelque\". Get these right and your written French immediately reads as educated.",
    ],
    sections: [
      {
        heading: "Bien que and quoique + subjunctive, même si + indicative",
        body: [
          "\"Bien que\" and \"quoique\" (one word) both mean although and both take the subjunctive: \"Bien qu'il soit tard, je vais finir ce chapitre.\" \"Quoique\" is slightly more literary. The concession is a real fact; the subjunctive only shows that it's being granted, not asserted.",
          "\"Même si\" means even if or even though and follows the rules of \"si\": present or past indicative for a real situation, imparfait or plus-que-parfait for a hypothetical one. \"Même s'il pleut, on sort\" (it may well rain); \"même s'il pleuvait, on sortirait\" (even if it were to rain). Never put a subjunctive or a conditional straight after \"même si\".",
          "Formal French lets \"bien que\" and \"quoique\" drop the verb when the subject is the same: \"Bien que fatiguée, elle a terminé le marathon\", \"quoique très jeune, il dirige l'équipe\". Note that \"si\" elides only before \"il\" and \"ils\": \"même s'il\" but \"même si elle\".",
        ],
        examples: [
          { fr: "Bien qu'il soit tard, je vais finir ce chapitre.", en: "Although it's late, I'm going to finish this chapter." },
          { fr: "Quoiqu'elle ait beaucoup voyagé, elle n'a jamais pris l'avion.", en: "Although she's travelled a lot, she's never flown." },
          { fr: "Même si tu as raison, ce n'est pas le moment d'en parler.", en: "Even if you're right, this isn't the time to talk about it." },
          { fr: "Même si on me le proposait, je refuserais.", en: "Even if they offered it to me, I'd refuse." },
          { fr: "Bien que malade, il est venu à la réunion.", en: "Although ill, he came to the meeting." },
          { fr: "Même si elle est en retard, attends-la.", en: "Even if she's late, wait for her." },
        ],
      },
      {
        heading: "Quoique, quoi que, quel que, quelque",
        body: [
          "These four are the classic spelling and grammar trap of concession. \"Quoique\" (although) can be swapped for \"bien que\". \"Quoi que\" (whatever) replaces a thing that is the object of the verb: \"quoi que tu fasses\". \"Quel que\" (whatever, whoever) is used only before \"être\" (sometimes \"devoir être\" or \"pouvoir être\"), and \"quel\" agrees with the subject of \"être\", which comes after it: \"quelle que soit la réponse\", \"quels que soient vos projets\".",
          "\"Quelque\" in one word has two concessive uses. Before a noun it agrees and means whatever: \"quelques efforts que tu fasses\" (however much effort you make). Before an adjective it is an adverb meaning however and is invariable: \"quelque riches qu'ils soient\". This second use is very literary; \"si riches qu'ils soient\" is the everyday equivalent.",
        ],
        table: {
          headers: ["Form", "Meaning", "Followed by", "Example"],
          rows: [
            ["quoique", "although", "subjunctive", "Quoiqu'il soit riche, il vit simplement."],
            ["quoi que", "whatever (object)", "subjunctive", "Quoi que vous décidiez, prévenez-moi."],
            ["quel que", "whatever / whoever (+ être)", "subjunctive of être, agreeing", "Quelles que soient vos raisons..."],
            ["quelque + noun + que", "whatever (+ noun)", "subjunctive", "Quelques erreurs qu'il ait commises..."],
            ["quelque + adjective + que", "however (+ adjective)", "subjunctive; quelque invariable", "Quelque habiles qu'ils soient..."],
          ],
        },
        examples: [
          { fr: "Quelle que soit votre décision, nous la respecterons.", en: "Whatever your decision, we'll respect it." },
          { fr: "Quels que soient les risques, il faut agir.", en: "Whatever the risks, we have to act." },
          { fr: "Quoi que vous en pensiez, le projet avance.", en: "Whatever you think of it, the project is moving ahead." },
          { fr: "Quelques précautions que l'on prenne, le risque zéro n'existe pas.", en: "Whatever precautions you take, there's no such thing as zero risk." },
          { fr: "Quoiqu'il ait tout préparé, rien ne s'est passé comme prévu.", en: "Although he'd prepared everything, nothing went to plan." },
        ],
      },
      {
        heading: "However + adjective: si, aussi, pour, tout... que",
        body: [
          "To say however rich or as strange as it may seem, put \"si\", \"aussi\" or (very formal) \"pour\" before the adjective and follow with \"que\" + subjunctive: \"si riche qu'il soit\", \"aussi étrange que cela paraisse\", \"pour intelligent qu'il soit\". Don't confuse this with the consequence pattern \"si... que\" + indicative: \"il est si riche qu'il ne travaille plus\" means he's so rich that he no longer works.",
          "\"Tout... que\" works differently: it takes the indicative, because it concedes a fact presented as obvious. \"Tout ministre qu'il est, il doit respecter la loi\" (minister though he is). \"Tout\" agrees in the feminine before a consonant: \"toute fatiguée qu'elle est\". In modern French the subjunctive is sometimes used after \"tout... que\" too, but the indicative is the classic norm.",
        ],
        examples: [
          { fr: "Si brillant qu'il soit, il ne peut pas tout savoir.", en: "However brilliant he may be, he can't know everything." },
          { fr: "Aussi étrange que cela paraisse, personne n'a rien remarqué.", en: "Strange as it may seem, nobody noticed a thing." },
          { fr: "Pour intéressante que soit cette hypothèse, elle reste à démontrer.", en: "Interesting though this hypothesis may be, it remains to be proven." },
          { fr: "Tout expert qu'il est, il s'est trompé.", en: "Expert though he is, he got it wrong." },
          { fr: "Toute timide qu'elle est, elle a pris la parole.", en: "Shy as she is, she spoke up." },
        ],
      },
      {
        heading: "Avoir beau and quand bien même",
        body: [
          "\"Avoir beau\" + infinitive is the most idiomatic way to say no matter how hard or however much: \"J'ai beau chercher, je ne trouve pas mes clés.\" The concession goes first, the result second, with no conjunction between them. The tense is carried by \"avoir\": \"il a eu beau insister\", \"tu auras beau dire\". English has no word-for-word equivalent, which is why learners avoid it, yet it's extremely frequent in speech and writing.",
          "\"Quand bien même\" + conditional means even if, with a strongly hypothetical flavour: \"Quand bien même il le voudrait, il ne pourrait pas.\" It's formal and emphatic, a step above \"même si\" + imparfait. Both clauses usually take the conditional.",
        ],
        examples: [
          { fr: "J'ai beau chercher, je ne trouve pas mes clés.", en: "No matter how hard I look, I can't find my keys." },
          { fr: "Elle a eu beau insister, il n'a rien voulu entendre.", en: "However much she insisted, he wouldn't listen." },
          { fr: "Tu auras beau dire, il fera ce qu'il veut.", en: "Whatever you say, he'll do what he wants." },
          { fr: "On a beau être en avril, il fait un froid de canard.", en: "It may be April, but it's freezing." },
          { fr: "Quand bien même il s'excuserait, je ne lui ferais plus confiance.", en: "Even if he apologised, I wouldn't trust him any more." },
        ],
      },
      {
        heading: "Opposition with nouns and connectors",
        body: [
          "When you want a noun rather than a clause, use \"malgré\" or the more formal \"en dépit de\": \"malgré la pluie\", \"en dépit des difficultés\". \"Malgré que\" + subjunctive exists in speech but is frowned on in careful writing; use \"bien que\" instead.",
          "To contrast two facts side by side, \"alors que\" and \"tandis que\" + indicative mean whereas. To concede and then reassert, French has a set of sentence-level connectors that are gold in an essay: \"certes... mais\", \"il n'empêche que\" (casual \"n'empêche que\"), \"il n'en reste pas moins que\", \"toujours est-il que\" (the fact remains that), all followed by the indicative.",
        ],
        examples: [
          { fr: "Malgré la pluie, le concert a eu lieu.", en: "Despite the rain, the concert went ahead." },
          { fr: "En dépit de ses efforts, il n'a pas obtenu le poste.", en: "Despite his efforts, he didn't get the job." },
          { fr: "Il adore la ville, alors que sa femme rêve de campagne.", en: "He loves the city, whereas his wife dreams of the countryside." },
          { fr: "Certes, le projet coûte cher, mais il créera des emplois.", en: "Admittedly, the project is expensive, but it will create jobs." },
          { fr: "Je ne sais pas qui a raison ; toujours est-il que le problème demeure.", en: "I don't know who's right; the fact remains that the problem is still there." },
          { fr: "Il n'en reste pas moins que les chiffres sont mauvais.", en: "The fact remains that the figures are bad." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Bien qu'il est fatigué, il continue.",
        right: "Bien qu'il soit fatigué, il continue.",
        why: "\"Bien que\" always takes the subjunctive, even though the fact is true.",
      },
      {
        wrong: "Même s'il soit malade, il viendra.",
        right: "Même s'il est malade, il viendra.",
        why: "\"Même si\" follows the rules of \"si\": indicative, never subjunctive.",
      },
      {
        wrong: "Quelque soit le prix, je l'achète.",
        right: "Quel que soit le prix, je l'achète.",
        why: "Before \"être\", write \"quel que\" in two words, agreeing with the subject: \"quel que soit le prix\", \"quelle que soit l'heure\".",
      },
      {
        wrong: "Même si je le voudrais, je ne pourrais pas.",
        right: "Même si je le voulais, je ne pourrais pas.",
        why: "No conditional after \"si\". If you want the conditional, use \"quand bien même je le voudrais\".",
      },
      {
        wrong: "Malgré qu'il pleuve, on sort.",
        right: "Bien qu'il pleuve, on sort. / Malgré la pluie, on sort.",
        why: "\"Malgré que\" is heard in speech but condemned in formal French. Use \"bien que\" with a clause and \"malgré\" with a noun.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between bien que and même si?",
        a: "\"Bien que\" concedes a fact (although it is the case); \"même si\" can concede a fact or a hypothesis (even if it were the case). \"Bien qu'il pleuve\" says it is raining; \"même s'il pleuvait\" imagines it.",
      },
      {
        q: "Is \"quoique\" + indicative ever acceptable?",
        a: "You'll find it in older literature and in casual speech, but modern written French uses the subjunctive. In speech, \"quoique\" alone is also used as an afterthought meaning mind you: \"Il est sympa. Quoique...\"",
      },
      {
        q: "Which concession structures should I use in a DALF essay?",
        a: "Vary them: \"certes... mais\", \"bien que\" + subjunctive, \"avoir beau\", \"si... que\" + subjunctive and \"il n'en reste pas moins que\". Avoid \"malgré que\" and keep \"quand bien même\" for a strong hypothetical point.",
      },
      {
        q: "Does \"avoir beau\" sound informal?",
        a: "No. It's neutral and works in speech, journalism and literature alike. Only the context around it sets the register.",
      },
    ],
    related: ["french-subjunctive-advanced", "french-discourse-markers", "conjecture-future-perfect-and-conditional"],
    lessons: [
      "c1-concession-1",
      "c1-concession-2",
      "c1-contrast-quoique-quoi-que",
      "c1-concession-3",
      "c1-concession-4",
      "c1-transform-six-ways-to-concede",
    ],
  },
  {
    slug: "nominalisation-in-french",
    title: "Nominalisation in French: Turning Verbs and Adjectives into Nouns",
    description:
      "How French builds nouns from verbs and adjectives (-tion, -ment, -age, -ité, -eur...), their genders, how to turn a whole clause into a noun phrase, the right preposition after the noun, and when to stop.",
    level: "C1",
    intro: [
      "Formal written French loves nouns. Where an English report says the prices rose sharply, a French one is more likely to write \"la forte hausse des prix\". Headlines, administrative letters, academic papers and business reports all rely on this nominal style, and the DALF expects you to read and produce it.",
      "Nominalisation has two halves. First you need the noun itself: \"augmenter\" gives \"l'augmentation\", \"baisser\" gives \"la baisse\", \"lent\" gives \"la lenteur\", and the suffix usually tells you the gender. Then you need to rebuild the sentence around it: the subject becomes \"de\" + noun, an adverb becomes an adjective, and the object keeps or changes its preposition.",
      "Done well, nominalisation makes writing compact and impersonal. Done too much, it produces chains of nouns no one can follow. Knowing when to switch back to verbs is part of the skill.",
    ],
    sections: [
      {
        heading: "Suffixes and the gender they carry",
        body: [
          "Most verb-based nouns are formed with a handful of suffixes, and the suffix decides the gender. \"-ment\" and \"-age\" are masculine (\"le licenciement\", \"le nettoyage\"), except a few short words in \"-age\" that aren't derived from verbs: \"la page\", \"l'image\", \"la plage\", \"la cage\", \"la nage\", \"la rage\". \"-tion\", \"-sion\", \"-ance\", \"-ence\", \"-ure\" and \"-ée\" are feminine (\"la réduction\", \"la croissance\", \"la signature\", \"l'arrivée\").",
          "Nouns from adjectives are overwhelmingly feminine: \"-ité\" (\"la rapidité\"), \"-eur\" (\"la lenteur\", \"la largeur\"), \"-esse\" (\"la faiblesse\"), \"-ise\" (\"la franchise\"), \"-ude\" (\"l'exactitude\"). The exception is \"-isme\", which is masculine: \"le réalisme\".",
          "Which suffix a verb takes can't be fully predicted, and inventing one is a classic error: \"développer\" gives \"le développement\", not \"*la développation\"; \"licencier\" gives \"le licenciement\", not \"*la licenciation\". When in doubt, check.",
        ],
        table: {
          headers: ["Suffix", "Gender", "Examples"],
          rows: [
            ["-tion / -sion", "feminine", "augmenter → l'augmentation, décider → la décision"],
            ["-ment", "masculine", "licencier → le licenciement, développer → le développement"],
            ["-age", "masculine", "nettoyer → le nettoyage, démarrer → le démarrage"],
            ["-ance / -ence", "feminine", "croître → la croissance, préférer → la préférence"],
            ["-ure / -ée", "feminine", "signer → la signature, arriver → l'arrivée"],
            ["-ité / -eur / -esse / -ise / -ude", "feminine", "rapide → la rapidité, lent → la lenteur, faible → la faiblesse, exact → l'exactitude"],
            ["-isme", "masculine", "réel → le réalisme"],
          ],
        },
        examples: [
          { fr: "La réduction des effectifs a été annoncée hier.", en: "The staff cuts were announced yesterday." },
          { fr: "Le nettoyage des locaux aura lieu samedi.", en: "The premises will be cleaned on Saturday." },
          { fr: "La lenteur de la procédure décourage les candidats.", en: "The slowness of the process discourages applicants." },
          { fr: "Le licenciement de trois salariés a provoqué une grève.", en: "The dismissal of three employees triggered a strike." },
          { fr: "L'exactitude des chiffres n'est pas garantie.", en: "The accuracy of the figures isn't guaranteed." },
        ],
      },
      {
        heading: "Nouns with no suffix, and irregular pairs",
        body: [
          "Many very common nouns are simply the verb stem, with no suffix (zero derivation): \"choisir\" → \"le choix\", \"acheter\" → \"l'achat\", \"baisser\" → \"la baisse\", \"hausser\" → \"la hausse\", \"reculer\" → \"le recul\", \"appeler\" → \"l'appel\", \"refuser\" → \"le refus\". Their gender has to be learned word by word.",
          "Others are irregular and simply need memorising: \"mourir\" → \"la mort\", \"naître\" → \"la naissance\", \"perdre\" → \"la perte\", \"vendre\" → \"la vente\", \"offrir\" → \"l'offre\", \"réussir\" → \"la réussite\", \"partir\" → \"le départ\". These are exactly the nouns that headlines use most.",
        ],
        examples: [
          { fr: "La baisse du chômage se confirme.", en: "The fall in unemployment is being confirmed." },
          { fr: "Le refus du syndicat a surpris la direction.", en: "The union's refusal surprised management." },
          { fr: "La vente de l'immeuble est prévue pour juin.", en: "The building is due to be sold in June." },
          { fr: "Le départ du directeur a été annoncé ce matin.", en: "The director's departure was announced this morning." },
          { fr: "La perte de ce contrat serait catastrophique.", en: "Losing this contract would be disastrous." },
        ],
      },
      {
        heading: "From clause to noun phrase",
        body: [
          "To nominalise a whole clause, the verb becomes a noun, its subject becomes \"de\" + noun (or a possessive), and an adverb becomes an adjective: \"Les prix ont fortement augmenté\" → \"la forte augmentation des prix\". An object keeps its link with \"de\" (\"construire un pont\" → \"la construction d'un pont\"), and a verb that takes a preposition usually keeps it (\"participer à\" → \"la participation à\").",
          "This is how French turns subordinate clauses into compact phrases: \"avant qu'il parte\" → \"avant son départ\", \"bien qu'il ait protesté\" → \"malgré ses protestations\", \"pour que le projet réussisse\" → \"pour la réussite du projet\". It's also the logic of headlines and notices, which drop the verb and often the article: \"Grève à la SNCF : report du vote\", \"Fermeture exceptionnelle du guichet\".",
          "Two other nominal tools are worth knowing. Some infinitives are full nouns (\"le savoir-faire\", \"le rire\", \"le devoir\", \"le pouvoir\"), and \"le\" + adjective names an abstract quality or idea: \"l'essentiel\", \"le plus dur\", \"l'important, c'est que...\"",
        ],
        examples: [
          { fr: "La forte augmentation des prix inquiète les ménages.", en: "The sharp rise in prices worries households." },
          { fr: "Avant son départ, il a rangé son bureau.", en: "Before leaving, he tidied his desk." },
          { fr: "Malgré les protestations des riverains, le chantier a commencé.", en: "Despite residents' protests, work has begun." },
          { fr: "Hausse des loyers à Lyon : les étudiants manifestent.", en: "Rents rise in Lyon: students protest." },
          { fr: "Le plus dur, c'est de commencer.", en: "The hardest part is getting started." },
        ],
      },
      {
        heading: "The right preposition after the noun",
        body: [
          "English of or for doesn't always become \"de\" or \"pour\". Each noun has its own preposition, often inherited from its verb: \"l'accès à\", \"le recours à\", \"la participation à\", \"la lutte contre\", \"l'intérêt pour\", \"le respect de\", \"la confiance en\" (or \"dans\" before an article). With figures, \"de\" introduces the amount: \"une hausse de 3 %\".",
          "Watch the nouns where English and French differ: \"une augmentation de salaire\" (a pay rise), \"le goût pour\" or \"le goût de\" (a taste for), \"la demande de\" (demand for), \"l'attention portée à\" (attention paid to). Getting these right is what separates fluent nominal style from translated English.",
        ],
        examples: [
          { fr: "L'accès au bâtiment est réservé au personnel.", en: "Access to the building is restricted to staff." },
          { fr: "La lutte contre la fraude est une priorité.", en: "Fighting fraud is a priority." },
          { fr: "Le recours à l'intérim a doublé.", en: "The use of temporary staff has doubled." },
          { fr: "On note une hausse de 3 % des inscriptions.", en: "Registrations are up 3%." },
          { fr: "Son intérêt pour la politique date de l'université.", en: "Her interest in politics goes back to university." },
        ],
      },
      {
        heading: "When to stop: denominalising for clarity",
        body: [
          "Nominal style is efficient in a report but tiring in a speech, an email to a client or plain-language communication. Chains like \"la mise en œuvre de la réalisation de l'amélioration des processus\" are a known vice of administrative French (sometimes mocked as \"la langue de bois\").",
          "The cure is to put verbs back and give the action a subject: \"nous allons améliorer nos processus\". A good rule: one or two nominalisations per sentence, and never two nouns in a row that both describe actions. For the DALF, use nominal style in summaries, titles and syntheses, and a verbal style when you speak or argue.",
        ],
        examples: [
          { fr: "La mise en œuvre de l'amélioration des processus sera assurée par l'équipe.", en: "The implementation of the improvement of processes will be ensured by the team. (heavy)" },
          { fr: "L'équipe va améliorer les processus.", en: "The team is going to improve the processes. (clear)" },
          { fr: "Suite à la constatation de l'absence de réponse...", en: "Following the observation of the absence of a reply... (heavy)" },
          { fr: "Comme nous n'avons reçu aucune réponse...", en: "As we've had no reply... (clear)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "la développement du projet",
        right: "le développement du projet",
        why: "Nouns in \"-ment\" are masculine.",
      },
      {
        wrong: "la licenciation de 200 salariés",
        right: "le licenciement de 200 salariés",
        why: "Not every verb takes \"-tion\". \"Licencier\" gives \"le licenciement\"; check the established noun rather than inventing one.",
      },
      {
        wrong: "l'augmentation forte des prix",
        right: "la forte augmentation des prix",
        why: "Short evaluative adjectives like \"forte\", \"nette\" or \"légère\" usually go before the noun in nominal style.",
      },
      {
        wrong: "l'accès de l'information",
        right: "l'accès à l'information",
        why: "The noun keeps the preposition of its verb: \"accéder à\" → \"l'accès à\".",
      },
    ],
    faqs: [
      {
        q: "How can I guess the gender of a derived noun?",
        a: "Look at the suffix. \"-ment\", \"-age\" and \"-isme\" are masculine; \"-tion\", \"-sion\", \"-ance\", \"-ence\", \"-ure\", \"-ée\", \"-ité\", \"-esse\", \"-ise\", \"-ude\" and \"-eur\" from adjectives are feminine. Suffixless nouns like \"le choix\" or \"la baisse\" have to be learned.",
      },
      {
        q: "Is nominal style always more formal?",
        a: "It's more impersonal and compact, which suits formal writing. But formality also depends on vocabulary and syntax, and overdone nominalisation reads as bureaucratic rather than elegant.",
      },
      {
        q: "Why do French headlines leave out verbs?",
        a: "Space and impact. A headline like \"Fermeture de l'usine de Dunkerque\" puts the event first as a noun. To read it, rebuild the sentence mentally: l'usine de Dunkerque va fermer, or a fermé.",
      },
    ],
    related: ["french-subjunctive-advanced", "impersonal-constructions-and-passive-alternatives", "french-discourse-markers"],
    lessons: [
      "c1-nominalization-1",
      "c1-nominalization-2",
      "c1-nominalization-3",
      "c1-transform-verb-to-noun",
      "c1-nominalization-5",
      "c1-nominalization-6",
    ],
  },
  {
    slug: "french-participle-and-infinitive-clauses",
    title: "Participle and Infinitive Clauses: Ayant Fait, La Réunion Terminée, Fatigant vs Fatiguant",
    description:
      "The non-finite structures of written French: the perfect participle (ayant terminé, étant arrivée), absolute participial clauses, adjectif verbal vs participe présent spellings, past infinitives, and how to translate English -ing.",
    level: "C1",
    intro: [
      "Written French compresses whole clauses into participles and infinitives: \"Ayant terminé son rapport, elle est partie\", \"La réunion terminée, chacun est rentré chez soi\", \"Il affirme l'avoir vue.\" These structures are the mark of a confident writer and they fill reports, news articles and novels.",
      "They come with strict rules English doesn't have. A participle or a \"gérondif\" at the start of a sentence must share the subject of the main verb. The present participle is invariable, but the adjective that looks almost identical agrees and is sometimes spelled differently: \"fatiguant\" versus \"fatigant\". And an infinitive clause can replace a \"que\" clause only when the subjects match.",
      "Above all, English -ing is not one French form but half a dozen: an infinitive after prepositions and as a subject, a \"gérondif\", a present participle, a relative clause, or simply the present tense. Choosing the right one is most of the battle.",
    ],
    sections: [
      {
        heading: "The perfect participle: ayant / étant + past participle",
        body: [
          "To say having done something before the main action, French uses \"ayant\" or \"étant\" + past participle. \"Ayant\" goes with verbs that take \"avoir\", \"étant\" with verbs that take \"être\", and with \"étant\" the participle agrees with the subject: \"Étant arrivée en retard, elle s'est excusée.\" Pronominal verbs use \"s'étant\": \"S'étant levé tôt, il a pris le premier train.\"",
          "The participial clause must have the same subject as the main clause. It's typical of written French; in speech you'd say \"Quand elle a fini son rapport, elle est partie\" or \"Après avoir fini son rapport...\" The perfect participle often also carries a sense of cause: having missed the train, therefore...",
        ],
        examples: [
          { fr: "Ayant terminé son rapport, elle est partie plus tôt.", en: "Having finished her report, she left early." },
          { fr: "Étant arrivée en retard, elle s'est excusée auprès du jury.", en: "Having arrived late, she apologised to the panel." },
          { fr: "S'étant trompé de quai, il a raté son train.", en: "Having gone to the wrong platform, he missed his train." },
          { fr: "N'ayant reçu aucune réponse, nous vous relançons.", en: "Having received no reply, we are writing to you again." },
          { fr: "Ayant vécu dix ans à Tokyo, il parle japonais couramment.", en: "Having lived in Tokyo for ten years, he speaks fluent Japanese." },
        ],
      },
      {
        heading: "Absolute participial clauses: la réunion terminée",
        body: [
          "An absolute participial clause has its own subject, different from the main clause: \"La réunion terminée, chacun est rentré chez soi.\" The participle agrees with that subject like an adjective. It's the equivalent of English once the meeting was over, or with the children gone.",
          "This construction belongs to written narration, reports and legal texts (\"le délai expiré\", \"toutes choses égales par ailleurs\"). It can also use a present or perfect participle: \"Le soleil se levant, ils reprirent la route\", \"Le contrat ayant été signé, les travaux peuvent commencer.\"",
        ],
        examples: [
          { fr: "La réunion terminée, chacun est rentré chez soi.", en: "Once the meeting was over, everyone went home." },
          { fr: "Les enfants partis, la maison était calme.", en: "With the children gone, the house was quiet." },
          { fr: "Le contrat ayant été signé, les travaux peuvent commencer.", en: "The contract having been signed, work can begin." },
          { fr: "Sa décision prise, elle n'en a plus jamais parlé.", en: "Once her mind was made up, she never mentioned it again." },
          { fr: "Le délai expiré, aucune réclamation ne sera acceptée.", en: "Once the deadline has passed, no claims will be accepted." },
        ],
      },
      {
        heading: "Participe présent or adjectif verbal?",
        body: [
          "The present participle (\"-ant\") is a verb form: it's invariable, can take an object or an adverb after it, and describes an action. The adjectif verbal looks similar but is an adjective: it describes a quality and agrees. \"Des enfants obéissant à leurs parents\" (participle, action) versus \"des enfants obéissants\" (adjective, quality).",
          "For about twenty verbs, the two are also spelled differently, which makes this a favourite dictation trap. The participle keeps the verb's stem (\"-guant\", \"-quant\", \"-ant\"); the adjective drops the \"u\", changes \"qu\" to \"c\", or ends in \"-ent\".",
        ],
        table: {
          headers: ["Verb", "Participe présent (invariable)", "Adjectif verbal (agrees)"],
          rows: [
            ["fatiguer", "fatiguant", "fatigant(e)"],
            ["convaincre", "convainquant", "convaincant(e)"],
            ["provoquer", "provoquant", "provocant(e)"],
            ["différer", "différant", "différent(e)"],
            ["négliger", "négligeant", "négligent(e)"],
            ["précéder", "précédant", "précédent(e)"],
          ],
        },
        examples: [
          { fr: "Ce sont des journées fatigantes.", en: "These are tiring days." },
          { fr: "Se fatiguant vite, il fait des pauses fréquentes.", en: "As he gets tired quickly, he takes frequent breaks." },
          { fr: "Ses arguments étaient très convaincants.", en: "His arguments were very convincing." },
          { fr: "En convainquant le jury, elle a remporté le prix.", en: "By convincing the jury, she won the prize." },
          { fr: "Les années précédant la guerre furent prospères.", en: "The years preceding the war were prosperous." },
          { fr: "L'année précédente, il avait déjà démissionné.", en: "The previous year he had already resigned." },
        ],
      },
      {
        heading: "Infinitive clauses: je crois avoir compris",
        body: [
          "When the subject of a \"que\" clause is the same as the main subject, French often prefers an infinitive, and with \"vouloir\", \"préférer\" or \"souhaiter\" it's obligatory: \"je veux partir\", never \"*je veux que je parte\". With verbs of opinion and declaration (\"croire\", \"penser\", \"affirmer\", \"espérer\", \"reconnaître\") the infinitive is an elegant alternative: \"Je crois avoir compris\", \"Il affirme l'avoir vue.\"",
          "The past infinitive (\"avoir\" or \"être\" + participle) marks an action already completed. It's required after \"après\" (\"après avoir mangé\", \"après être sortie\", \"après s'être levé\"), and common after \"pour\" giving a cause (\"condamné pour avoir menti\") and after \"sans\" (\"sans avoir prévenu\").",
          "The infinitive also works as a subject or noun (\"Fumer tue\", \"Partir, c'est mourir un peu\"), in instructions and signs (\"Laisser reposer dix minutes\", \"Ne pas se pencher au dehors\") and in deliberative questions (\"Que faire ?\", \"Où aller ?\"). Note that \"ne pas\" goes together before an infinitive.",
        ],
        examples: [
          { fr: "Je crois avoir compris le problème.", en: "I think I've understood the problem." },
          { fr: "Il affirme l'avoir vue sortir.", en: "He claims he saw her go out." },
          { fr: "Après s'être reposée, elle a repris le travail.", en: "After resting, she went back to work." },
          { fr: "Il a été sanctionné pour avoir divulgué des informations.", en: "He was disciplined for leaking information." },
          { fr: "Laisser reposer la pâte pendant une heure.", en: "Leave the dough to rest for an hour." },
          { fr: "Que faire face à une telle situation ?", en: "What can one do in such a situation?" },
        ],
      },
      {
        heading: "Translating English -ing",
        body: [
          "English -ing covers at least six French structures. After a preposition, French uses the infinitive (\"avant de partir\", \"sans dire\", \"au lieu de travailler\"), except after \"en\", which gives the gérondif (\"en travaillant\"). A verb used as a noun is an infinitive (\"j'aime nager\", \"nager est bon pour la santé\"). The English progressive is usually a simple tense (\"il lit\" for he's reading), or \"être en train de\" when you insist.",
          "After verbs of perception, French uses an infinitive or a relative clause: \"je l'ai vu partir\" or \"je l'ai vu qui partait\". And a gérondif or participle at the start of a sentence must share the main subject, so English dangling participles don't survive the crossing.",
        ],
        table: {
          headers: ["English", "French structure", "Example"],
          rows: [
            ["before leaving", "avant de + infinitive", "avant de partir"],
            ["by working", "en + present participle (gérondif)", "en travaillant"],
            ["without saying", "sans + infinitive", "sans rien dire"],
            ["I like swimming", "infinitive", "j'aime nager"],
            ["I'm used to working", "avoir l'habitude de + infinitive", "j'ai l'habitude de travailler"],
            ["I saw him leaving", "perception verb + infinitive or qui", "je l'ai vu partir / qui partait"],
          ],
        },
        examples: [
          { fr: "Elle est partie sans dire au revoir.", en: "She left without saying goodbye." },
          { fr: "Au lieu de se plaindre, il a trouvé une solution.", en: "Instead of complaining, he found a solution." },
          { fr: "On apprend beaucoup en voyageant.", en: "You learn a lot by travelling." },
          { fr: "J'entends les voisins se disputer.", en: "I can hear the neighbours arguing." },
          { fr: "Il ne fait que se plaindre depuis lundi.", en: "He's done nothing but complain since Monday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "En sortant du métro, la pluie a commencé.",
        right: "En sortant du métro, j'ai vu qu'il pleuvait. / Quand je suis sorti du métro, il s'est mis à pleuvoir.",
        why: "A gérondif or participle refers to the subject of the main clause. Here it would mean the rain came out of the metro.",
      },
      {
        wrong: "Ce sont des arguments convainquants.",
        right: "Ce sont des arguments convaincants.",
        why: "The adjective is spelled with \"c\" and agrees. \"Convainquant\" with \"qu\" is the invariable participle.",
      },
      {
        wrong: "Après partir, il a appelé sa mère.",
        right: "Après être parti, il a appelé sa mère.",
        why: "\"Après\" takes the past infinitive, with \"être\" for verbs that use it in compound tenses.",
      },
      {
        wrong: "Ayant arrivée en retard, elle s'est excusée.",
        right: "Étant arrivée en retard, elle s'est excusée.",
        why: "\"Arriver\" takes \"être\", so the perfect participle is \"étant arrivée\", agreeing with the subject.",
      },
      {
        wrong: "Je suis habitué à travaillant tard.",
        right: "Je suis habitué à travailler tard.",
        why: "After a preposition other than \"en\", French uses the infinitive, never the \"-ant\" form.",
      },
    ],
    faqs: [
      {
        q: "Is the perfect participle too formal for speech?",
        a: "It sounds written. In conversation, use \"après avoir\" + participle, \"comme\" + a finite verb, or \"quand\" + passé composé. Fixed phrases like \"cela étant dit\" are fine in speech.",
      },
      {
        q: "How do I know whether an -ant word is a participle or an adjective?",
        a: "If it takes an object, an adverb after it or \"ne... pas\", it's a participle and stays invariable. If you can put \"très\" before it or it describes a lasting quality, it's an adjective and agrees.",
      },
      {
        q: "Does the past participle agree before an infinitive?",
        a: "After verbs of perception, it agrees with a preceding direct object when that object is doing the action: \"la chanteuse que j'ai entendue chanter\". When the object undergoes the action, no agreement: \"la chanson que j'ai entendu chanter\". \"Fait\" and, in modern spelling, \"laissé\" never agree before an infinitive.",
      },
    ],
    related: ["nominalisation-in-french", "impersonal-constructions-and-passive-alternatives", "passe-simple-and-literary-narration"],
    lessons: [
      "c1-participles-infinitives-1",
      "c1-participles-infinitives-2",
      "c1-participles-infinitives-3",
      "c1-error-hunt-dangling-participle",
      "c1-participles-infinitives-4",
      "c1-transform-english-ing",
    ],
  },
  {
    slug: "impersonal-constructions-and-passive-alternatives",
    title: "Impersonal Il and the Passive at the Advanced level: Il S'agit De, Se Faire + Infinitive, Ça Ne Se Fait Pas",
    description:
      "How French hides or downplays the agent: the passive in every tense with par or de, impersonal il (il s'agit de, il manque, il est + adjective + de), se faire and se voir + infinitive, and the pronominal passive.",
    level: "C1",
    intro: [
      "English leans on the passive whenever the doer is unknown or unimportant. French has a passive too, but it's only one of five tools, and often not the most natural: \"on\", a pronominal verb (\"ça se vend bien\"), \"se faire\" + infinitive (\"il s'est fait voler son vélo\") and impersonal \"il\" (\"il a été décidé que...\") all compete with it.",
      "Choosing well depends on register and focus. Press releases and administrative notices love impersonal \"il\" and the passive; conversation prefers \"on\" and \"se faire\"; general truths and social norms go into the pronominal passive. There are also hard limits: French can't make a passive out of an indirect object, so English she was given a book has no word-for-word French equivalent.",
      "This guide also covers the impersonal verbs that trip up advanced learners, with \"il s'agit de\" at their head, and the classic \"il est difficile de\" versus \"c'est difficile à\" contrast.",
    ],
    sections: [
      {
        heading: "The passive in every tense, with par or de",
        body: [
          "The passive is \"être\" in the required tense + past participle agreeing with the subject: \"la route sera construite\", \"la maison avait été vendue\", \"le concert aurait été annulé\". The tense lives entirely in \"être\", so the passive passé composé needs two participles: \"a été fermé\".",
          "The agent is introduced by \"par\" for an action and by \"de\" for a state, a feeling or a description: \"Il a été arrêté par la police\" but \"Elle est aimée de tous\", \"La montagne était couverte de neige\", \"Il est accompagné de sa femme\" (in her company).",
          "Only a direct object can become a passive subject. With verbs like \"donner\", \"dire\", \"demander\" or \"permettre\", where the person is an indirect object (\"donner quelque chose à quelqu'un\"), use \"on\": \"On lui a donné un livre\", \"On m'a demandé de patienter.\" Likewise \"obéir à\" and \"répondre à\" have no normal passive.",
        ],
        examples: [
          { fr: "Le pont sera inauguré en mars.", en: "The bridge will be opened in March." },
          { fr: "Le tableau avait été volé par deux hommes masqués.", en: "The painting had been stolen by two masked men." },
          { fr: "Cette chanteuse est admirée de tous.", en: "This singer is admired by everyone." },
          { fr: "Le sol était couvert de feuilles mortes.", en: "The ground was covered with dead leaves." },
          { fr: "On m'a demandé de patienter.", en: "I was asked to wait." },
          { fr: "On leur a promis une augmentation.", en: "They were promised a pay rise." },
        ],
      },
      {
        heading: "Il s'agit de and other impersonal verbs",
        body: [
          "\"Il s'agit de\" (it's about, it's a matter of) only exists with impersonal \"il\": never \"*ce livre s'agit de\" or \"*ça s'agit\". To say what a book or film is about, say \"Dans ce livre, il s'agit de...\" or use \"Ce livre parle de...\", \"traite de...\". Followed by an infinitive, it means what matters is to: \"Il s'agit de ne pas se tromper.\"",
          "Impersonal verbs that introduce a quantity put the logical subject after the verb, and the verb stays singular: \"Il manque deux pages\", \"Il reste trois places\", \"Il est arrivé un accident.\" The same goes for formal \"il existe\" and \"il se passe\". Others introduce a clause: \"il suffit de / que\", \"il arrive que\" + subjunctive (it sometimes happens that), \"il se peut que\" + subjunctive, \"il paraît que\" + indicative, \"il convient de\", \"il importe que\".",
          "In administrative style the impersonal passive is very common: \"il a été décidé que\", \"il est rappelé aux usagers que\", \"il sera procédé à\". It lets an institution announce something without saying who decided.",
        ],
        examples: [
          { fr: "Dans ce roman, il s'agit d'une famille ruinée.", en: "This novel is about a ruined family." },
          { fr: "Il s'agit maintenant de trouver un financement.", en: "Now it's a matter of finding funding." },
          { fr: "Il manque deux chaises dans la salle.", en: "There are two chairs missing in the room." },
          { fr: "Il arrive qu'il oublie ses rendez-vous.", en: "He sometimes forgets his appointments." },
          { fr: "Il a été décidé de reporter la réunion.", en: "It has been decided to postpone the meeting." },
          { fr: "Il est rappelé aux voyageurs que la cigarette est interdite.", en: "Passengers are reminded that smoking is prohibited." },
        ],
      },
      {
        heading: "Il est difficile de... vs c'est difficile à...",
        body: [
          "When the adjective introduces a following infinitive with its own object, use \"il est\" (or \"c'est\" in speech) + adjective + \"de\": \"Il est difficile de répondre à cette question.\" Here \"il\" is empty and points forward.",
          "When the thing being judged has already been mentioned or is the subject, use \"c'est\" (or a noun) + adjective + \"à\", and the infinitive has no object: \"Cette question ? C'est difficile à dire.\", \"Ce texte est facile à lire.\" The \"à\" means to be done.",
          "In writing, keep \"il est... de\" for the impersonal pattern; \"c'est... de\" is fine in conversation. \"C'est... à\" is natural in both.",
        ],
        table: {
          headers: ["Pattern", "Use", "Example"],
          rows: [
            ["il est + adj. + de + infinitive + object", "formal, points forward", "Il est difficile de résoudre ce problème."],
            ["c'est + adj. + de + infinitive + object", "spoken equivalent", "C'est difficile de résoudre ce problème."],
            ["c'est + adj. + à + infinitive (no object)", "the thing is already known", "Ce problème ? C'est difficile à résoudre."],
            ["noun + être + adj. + à + infinitive", "the thing is the subject", "Ce problème est difficile à résoudre."],
          ],
        },
        examples: [
          { fr: "Il est essentiel de vérifier ces chiffres.", en: "It's essential to check these figures." },
          { fr: "Ces chiffres sont faciles à vérifier.", en: "These figures are easy to check." },
          { fr: "Il est impossible de prévoir l'avenir.", en: "It's impossible to predict the future." },
          { fr: "L'avenir ? C'est impossible à prévoir.", en: "The future? It's impossible to predict." },
        ],
      },
      {
        heading: "Se faire and se voir + infinitive",
        body: [
          "\"Se faire\" + infinitive is the everyday passive for something that happens to the subject, usually something unpleasant: \"Il s'est fait voler son vélo\", \"Elle s'est fait renvoyer.\" It can also mean the subject arranged it: \"Je me suis fait couper les cheveux.\" The participle \"fait\" never agrees here: \"elle s'est fait\", not \"*faite\".",
          "\"Se voir\" + infinitive is its formal counterpart, typical of journalism and administrative French, and it neatly gets round the indirect-object problem: \"Il s'est vu refuser l'entrée\" (he was refused entry), \"Elle s'est vu attribuer le prix\" (she was awarded the prize).",
        ],
        examples: [
          { fr: "Il s'est fait voler son portefeuille dans le métro.", en: "He had his wallet stolen on the metro." },
          { fr: "Elle s'est fait renvoyer après deux semaines.", en: "She got fired after two weeks." },
          { fr: "Ils se sont fait avoir par un faux site.", en: "They got scammed by a fake website." },
          { fr: "Le journaliste s'est vu refuser l'accès au tribunal.", en: "The journalist was refused access to the court." },
          { fr: "La lauréate s'est vu remettre un chèque de 5 000 euros.", en: "The winner was presented with a cheque for 5,000 euros." },
        ],
      },
      {
        heading: "The pronominal passive and on",
        body: [
          "A pronominal verb can act as a passive for habitual actions, general truths and social norms, with no agent ever expressed: \"Ce vin se boit frais\", \"Ce livre se lit facilement\", \"Ça ne se fait pas\", \"Ça se dit, mais ça ne s'écrit pas.\" It's a natural way to state how things are done.",
          "\"On\" is the most common way of all to hide the agent in speech: \"On a réparé l'ascenseur.\" In writing, after \"et\", \"où\", \"si\" and \"que\", formal French often adds a euphonic \"l'\": \"si l'on veut\", \"où l'on trouve\". It's optional but marks careful style.",
          "Remember also the state/action contrast with \"être\" + participle: \"Le magasin est fermé\" describes a state (it's closed); \"le magasin a été fermé\" or \"est fermé chaque soir à 20 h\" describes an action.",
        ],
        examples: [
          { fr: "Ce vin se boit frais.", en: "This wine is drunk chilled." },
          { fr: "Ça ne se fait pas de parler la bouche pleine.", en: "It's not done to talk with your mouth full." },
          { fr: "Ce mot ne s'emploie plus guère.", en: "This word is hardly used any more." },
          { fr: "Si l'on considère les chiffres, la situation s'améliore.", en: "If one looks at the figures, the situation is improving." },
          { fr: "Le musée a été fermé pendant les travaux.", en: "The museum was closed during the work." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ce film s'agit d'une histoire d'amour.",
        right: "Dans ce film, il s'agit d'une histoire d'amour. / Ce film raconte une histoire d'amour.",
        why: "\"S'agir de\" is only impersonal: its subject is always \"il\".",
      },
      {
        wrong: "Elle a été donnée un cadeau.",
        right: "On lui a donné un cadeau. / Elle a reçu un cadeau.",
        why: "French can't make a passive subject out of an indirect object. Use \"on\", another verb or \"se voir\" + infinitive.",
      },
      {
        wrong: "Il manquent trois dossiers.",
        right: "Il manque trois dossiers.",
        why: "With impersonal \"il\", the verb agrees with \"il\" and stays singular, whatever follows.",
      },
      {
        wrong: "Elle s'est faite voler son sac.",
        right: "Elle s'est fait voler son sac.",
        why: "\"Fait\" followed by an infinitive never agrees.",
      },
      {
        wrong: "C'est difficile à répondre à cette question.",
        right: "Il est difficile de répondre à cette question.",
        why: "When the infinitive has its own complement, use \"il est / c'est\" + adjective + \"de\".",
      },
    ],
    faqs: [
      {
        q: "Is the French passive less common than the English one?",
        a: "Yes, especially in speech. French uses \"on\" and pronominal verbs where English uses a passive. In formal writing, news and legal texts, the passive is frequent.",
      },
      {
        q: "When do I use \"de\" instead of \"par\" for the agent?",
        a: "Use \"de\" with verbs of feeling (\"aimé de\", \"respecté de\") and with participles describing a state or position (\"couvert de\", \"entouré de\", \"suivi de\"). Use \"par\" for a concrete action.",
      },
      {
        q: "Is \"l'on\" old-fashioned?",
        a: "It's formal rather than old-fashioned. You'll see it in careful writing after \"si\", \"où\", \"et\" and \"que\", but it's never required and would sound stiff in conversation.",
      },
    ],
    related: ["nominalisation-in-french", "french-participle-and-infinitive-clauses", "conjecture-future-perfect-and-conditional"],
    lessons: [
      "c1-passive-impersonal-1",
      "c1-passive-impersonal-2",
      "c1-transform-hide-the-agent",
      "c1-passive-impersonal-3",
      "c1-passive-impersonal-5",
      "c1-passive-impersonal-6",
    ],
  },
  {
    slug: "passe-simple-and-literary-narration",
    title: "The Passé Simple, Passé Antérieur and Free Indirect Style",
    description:
      "How to recognise and use the French passé simple (il fut, il fit, il vint), how it divides the work with the imparfait, the passé antérieur after quand and à peine, free indirect style and inverted reporting verbs.",
    level: "C1",
    intro: [
      "Open any French novel, fairy tale, biography or history book and you'll meet the passé simple: \"Il entra, posa son chapeau et s'assit.\" It is the written narrative counterpart of the passé composé. Nobody uses it in conversation, but every educated reader recognises it instantly, and writing a story without it sounds like an oral anecdote.",
      "You'll mostly need the third person (\"il parla\", \"ils parlèrent\"), which covers the vast majority of narrative. The first and second persons plural (\"nous parlâmes\", \"vous fîtes\") are rare enough that recognising them is all you need, and in a first-person narrative they can even sound slightly comic.",
      "Around the passé simple sits a small literary system: the passé antérieur for an action completed just before another (\"quand il eut fini\"), free indirect style to slip into a character's head without \"il pensa que\", and reporting verbs placed after the quotation with inversion (\"« Non », répliqua-t-elle\").",
    ],
    sections: [
      {
        heading: "Forming the passé simple",
        body: [
          "Regular \"-er\" verbs take \"-a\" in the third person singular and \"-èrent\" in the plural: \"il parla\", \"ils parlèrent\". \"-ir\" verbs like \"finir\" and most \"-re\" verbs take \"-it\" and \"-irent\": \"il finit\", \"ils rendirent\". Note that \"il finit\" is both present and passé simple; context decides.",
          "Irregular verbs mostly follow the vowel of their past participle: \"-u\" verbs give \"il eut\", \"il put\", \"il sut\", \"il dut\", \"il vécut\"; \"-i\" and \"-is\" verbs give \"il prit\", \"il mit\", \"il dit\", \"il fit\". A few are unpredictable: \"il fut\" (être), \"il vint\" and \"il tint\" (venir, tenir), \"il naquit\" (naître), \"il mourut\" (mourir), \"il vit\" (voir).",
          "Watch the look-alikes: \"il fit\" (faire) versus \"il fut\" (être), and \"il vit\" (voir) versus \"il vécut\" (vivre). \"Il vit\" can also be the present of \"vivre\".",
        ],
        table: {
          headers: ["Infinitive", "il / elle", "ils / elles", "Also seen"],
          rows: [
            ["parler", "parla", "parlèrent", "je parlai, nous parlâmes"],
            ["finir", "finit", "finirent", "nous finîmes"],
            ["être", "fut", "furent", "je fus, vous fûtes"],
            ["avoir", "eut", "eurent", "j'eus, nous eûmes"],
            ["faire", "fit", "firent", "je fis, vous fîtes"],
            ["venir", "vint", "vinrent", "je vins, nous vînmes"],
            ["voir", "vit", "virent", "je vis"],
            ["naître / mourir", "naquit / mourut", "naquirent / moururent", ""],
          ],
        },
        examples: [
          { fr: "Il entra, posa son chapeau et s'assit près du feu.", en: "He came in, put down his hat and sat by the fire." },
          { fr: "Victor Hugo naquit à Besançon en 1802.", en: "Victor Hugo was born in Besançon in 1802." },
          { fr: "Ils firent le tour du village sans rencontrer personne.", en: "They walked round the village without meeting anyone." },
          { fr: "Ce fut une soirée inoubliable.", en: "It was an unforgettable evening." },
          { fr: "Elle vint, elle vit, et elle repartit aussitôt.", en: "She came, she saw, and she left again at once." },
        ],
      },
      {
        heading: "Passé simple vs imparfait",
        body: [
          "The division of labour is the same as passé composé versus imparfait. The passé simple carries the foreground: completed events that move the story forward, one after another. The imparfait paints the background: description, ongoing situations, habits. \"Il pleuvait depuis le matin. Soudain, la porte s'ouvrit.\"",
          "Where the passé simple lives today: novels and short stories, tales (\"Il était une fois un roi... Un jour, le roi décida...\"), biographies, history books and some sports and cultural journalism. In speech, emails and most press articles, the passé composé replaces it. Mixing the two in the same narrative layer is a style error.",
          "History writing also uses a narrative imparfait (\"deux jours plus tard, le roi abdiquait\") and the present for vividness; those are covered in the guide to historical narrative tenses.",
        ],
        examples: [
          { fr: "Il pleuvait depuis le matin. Soudain, la porte s'ouvrit.", en: "It had been raining since morning. Suddenly the door opened." },
          { fr: "Il était une fois un roi qui avait trois filles. Un jour, il décida de les marier.", en: "Once upon a time there was a king who had three daughters. One day he decided to marry them off." },
          { fr: "Pendant qu'elle lisait, quelqu'un frappa à la porte.", en: "While she was reading, someone knocked at the door." },
          { fr: "Chaque été, ils allaient en Bretagne ; cette année-là, ils restèrent à Paris.", en: "Every summer they went to Brittany; that year they stayed in Paris." },
          { fr: "La foule criait ; le joueur marqua à la dernière minute.", en: "The crowd was shouting; the player scored in the last minute." },
        ],
      },
      {
        heading: "The passé antérieur: quand il eut fini",
        body: [
          "The passé antérieur is \"avoir\" or \"être\" in the passé simple + past participle: \"il eut fini\", \"elle fut partie\". It marks an action completed immediately before another action in the passé simple, almost always after a time conjunction: \"quand\", \"lorsque\", \"dès que\", \"aussitôt que\", \"après que\", \"à peine... que\".",
          "With \"à peine\" at the head of the sentence, the subject and verb invert: \"À peine eut-il fermé la porte que le téléphone sonna.\" The plus-que-parfait, by contrast, sets an earlier event in the background without that sense of immediate succession, and it's the one to use in a main clause.",
          "In a passé composé narrative, the equivalent is the passé surcomposé (\"quand il a eu fini\"), which is spoken and regional; most speakers simply use \"après avoir\" + participle.",
        ],
        examples: [
          { fr: "Quand il eut fini son discours, la salle applaudit.", en: "When he had finished his speech, the audience applauded." },
          { fr: "Dès qu'elle fut partie, ils se mirent à rire.", en: "As soon as she had left, they started laughing." },
          { fr: "À peine eut-il fermé la porte que le téléphone sonna.", en: "No sooner had he shut the door than the phone rang." },
          { fr: "Après qu'ils eurent dîné, ils sortirent sur la terrasse.", en: "After they had dined, they went out onto the terrace." },
          { fr: "Il avait plu toute la nuit ; les chemins étaient boueux.", en: "It had rained all night; the paths were muddy. (plus-que-parfait, background)" },
        ],
      },
      {
        heading: "Free indirect style",
        body: [
          "Free indirect style (style indirect libre) gives a character's thoughts or words without a reporting verb. It uses the tenses and persons of indirect speech (imparfait, conditional, third person) but keeps the character's exclamations, questions and turns of phrase: \"Il partirait demain. Quelle folie ! Pourquoi l'avait-elle cru ?\"",
          "Flaubert made it famous, and it's everywhere in modern fiction. To spot it, look for exclamations or questions in the narrative past tense with no \"il pensa que\", and deictics from the character's point of view (\"demain\", \"maintenant\", \"ici\") inside a past narration.",
        ],
        examples: [
          { fr: "Elle regarda par la fenêtre. Il ne viendrait plus, maintenant. À quoi bon attendre ?", en: "She looked out of the window. He wouldn't come now. What was the point of waiting?" },
          { fr: "Il relut la lettre. On le renvoyait ! Après vingt ans de service !", en: "He read the letter again. They were firing him! After twenty years of service!" },
          { fr: "Direct : Il se dit : « Je partirai demain. »", en: "Direct: He said to himself, 'I'll leave tomorrow.'" },
          { fr: "Indirect : Il se dit qu'il partirait le lendemain.", en: "Indirect: He told himself he would leave the next day." },
          { fr: "Indirect libre : Il partirait demain, c'était décidé.", en: "Free indirect: He would leave tomorrow, it was decided." },
        ],
      },
      {
        heading: "Reporting verbs and inverted incises",
        body: [
          "When a reporting verb comes after or inside a quotation, French inverts it with its subject: \"« Viens », dit-il\", \"« Non », répliqua-t-elle\", \"« Déjà ? » s'étonna Marie.\" English allows she said; French requires \"dit-elle\". A \"-t-\" is inserted between a vowel and \"il\" or \"elle\".",
          "Good narrative French also varies the verb beyond \"dire\": \"affirmer\", \"répliquer\", \"rétorquer\", \"objecter\", \"avouer\", \"murmurer\", \"s'exclamer\", \"s'enquérir\" (to inquire), \"s'étonner\". Each one adds information about tone.",
        ],
        examples: [
          { fr: "« Viens avec moi », dit-il.", en: "'Come with me,' he said." },
          { fr: "« Jamais », rétorqua-t-elle sèchement.", en: "'Never,' she retorted curtly." },
          { fr: "« Vous êtes sûr ? » s'enquit le médecin.", en: "'Are you sure?' the doctor inquired." },
          { fr: "« Je l'ignorais, avoua-t-il, mais je m'en doutais. »", en: "'I didn't know,' he admitted, 'but I suspected it.'" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "« Je pars », elle dit.",
        right: "« Je pars », dit-elle.",
        why: "A reporting verb after or inside a quotation is inverted with its subject.",
      },
      {
        wrong: "Hier, je fus au cinéma avec Paul.",
        right: "Hier, je suis allé au cinéma avec Paul.",
        why: "The passé simple belongs to written narrative. In conversation, emails and personal accounts, use the passé composé. (\"Je fus\" means I was, not I went, anyway.)",
      },
      {
        wrong: "Il fut la vaisselle puis il sortit.",
        right: "Il fit la vaisselle puis il sortit.",
        why: "\"Fit\" is from \"faire\"; \"fut\" is from \"être\".",
      },
      {
        wrong: "À peine il eut fermé la porte que le téléphone sonna.",
        right: "À peine eut-il fermé la porte que le téléphone sonna.",
        why: "In writing, \"à peine\" at the start of the sentence triggers subject-verb inversion.",
      },
    ],
    faqs: [
      {
        q: "Do I need to learn every person of the passé simple?",
        a: "Learn to produce the third person singular and plural for all common verbs. Recognise the others: \"je fus\", \"nous fûmes\", \"vous fîtes\". They appear in older literature and first-person novels.",
      },
      {
        q: "Can I write a story in the passé composé instead?",
        a: "Yes. It gives an oral, personal, immediate tone; Camus used it in \"L'Étranger\" precisely for that effect. Just don't mix it with the passé simple in the same narrative layer.",
      },
      {
        q: "Is the passé antérieur the same as the plus-que-parfait?",
        a: "Both describe an earlier action, but the passé antérieur appears almost only after time conjunctions and means immediately before, in a passé simple narrative. The plus-que-parfait is for background anteriority and works in any clause.",
      },
    ],
    related: ["french-participle-and-infinitive-clauses", "emphasis-pseudo-clefts-and-inversion", "french-subjunctive-advanced"],
    lessons: [
      "c1-literary-tenses-1",
      "c1-literary-tenses-2",
      "c1-literary-tenses-3",
      "c1-literary-tenses-4",
      "c1-literary-tenses-5",
      "c1-literary-tenses-6",
    ],
  },
  {
    slug: "french-verbs-with-prepositions",
    title: "French Verbs with Prepositions: Penser à, Manquer à, Tenir à and Their Pronouns",
    description:
      "Which French verbs take à, de or nothing, the verbs whose meaning changes with the preposition (penser à / de, manquer à / de, tenir à / de, servir à / de), y and en vs à lui and de lui, and s'attendre à ce que.",
    level: "C1",
    intro: [
      "Many errors that still mark an advanced learner as foreign come from one small word after the verb. English says wait for, look for, listen to; French says \"attendre\", \"chercher\", \"écouter\" with no preposition at all. English says answer, phone, enter with a direct object; French says \"répondre à\", \"téléphoner à\", \"entrer dans\". The pattern of each verb must simply be learned, but there's a logic to the pronouns that follow from it.",
      "The preposition decides the pronoun. Verbs with \"à\" take \"y\" for things and either \"lui / leur\" or \"à lui / à elle\" for people; verbs with \"de\" take \"en\" for things and \"de lui / d'elle\" for people. And several common verbs change meaning completely with the preposition: \"tu me manques\" (I miss you) is the reverse of what English word order suggests.",
      "At the Advanced level you also need the longer patterns: two objects (\"permettre à quelqu'un de faire\"), infinitives after \"à\" or \"de\", and \"à ce que\" / \"de ce que\" + subjunctive when the verb is followed by a whole clause.",
    ],
    sections: [
      {
        heading: "Where English and French disagree",
        body: [
          "These verbs take a direct object in French where English needs a preposition: \"attendre\" (wait for), \"chercher\" (look for), \"écouter\" (listen to), \"regarder\" (look at), \"payer\" (pay for), \"demander\" (ask for). Adding \"pour\" or \"à\" is a pure anglicism.",
          "These go the other way and need a preposition in French: \"répondre à\", \"téléphoner à\", \"obéir à\", \"ressembler à\", \"assister à\" (attend), \"entrer dans\", \"se marier avec\", \"changer de\" (change one's...), \"jouir de\", \"douter de\". With \"demander\", the thing is direct and the person takes \"à\": \"demander un conseil à quelqu'un\".",
        ],
        examples: [
          { fr: "J'attends le bus depuis vingt minutes.", en: "I've been waiting for the bus for twenty minutes." },
          { fr: "Elle cherche un appartement à Lyon.", en: "She's looking for a flat in Lyon." },
          { fr: "Il n'a pas encore répondu à mon message.", en: "He hasn't replied to my message yet." },
          { fr: "Nous avons assisté à la conférence.", en: "We attended the conference." },
          { fr: "Il a demandé une augmentation à son patron.", en: "He asked his boss for a raise." },
          { fr: "Tu ressembles beaucoup à ta mère.", en: "You look a lot like your mother." },
        ],
      },
      {
        heading: "Pronouns: y and en, or à lui and de lui",
        body: [
          "With verbs that take \"à\", a thing becomes \"y\": \"Je pense à mon examen\" → \"J'y pense.\" For a person, most verbs use the indirect pronoun \"lui / leur\" before the verb (\"je lui parle\", \"je leur réponds\"), but a group of verbs refuses it and takes \"à\" + stressed pronoun after the verb: \"penser à\", \"songer à\", \"tenir à\", \"s'intéresser à\", \"faire attention à\", \"s'habituer à\", and all pronominal verbs. So \"je pense à lui\", never \"*je lui pense\".",
          "With verbs that take \"de\", a thing becomes \"en\" (\"Je me souviens de ce voyage\" → \"Je m'en souviens\") and a person stays after the verb as \"de\" + stressed pronoun (\"Je me souviens d'elle\", \"Il se méfie de lui\"). In casual speech \"en\" is sometimes used for people too, but careful French keeps the distinction.",
        ],
        table: {
          headers: ["Verb type", "Thing", "Person"],
          rows: [
            ["parler à, répondre à, plaire à", "y (rare: j'y réponds)", "lui / leur: je lui parle"],
            ["penser à, tenir à, s'intéresser à", "y: j'y pense", "à + stressed pronoun: je pense à elle"],
            ["se souvenir de, parler de, se méfier de", "en: je m'en souviens", "de + stressed pronoun: je me souviens de lui"],
          ],
        },
        examples: [
          { fr: "Ton projet ? J'y pense tous les jours.", en: "Your project? I think about it every day." },
          { fr: "Je pense souvent à elle.", en: "I often think about her." },
          { fr: "Ces photos, j'y tiens beaucoup.", en: "These photos mean a lot to me." },
          { fr: "Ce voyage ? Je m'en souviens très bien.", en: "That trip? I remember it very well." },
          { fr: "Méfie-toi de lui, il ment.", en: "Be wary of him, he lies." },
        ],
      },
      {
        heading: "Verbs that change meaning with the preposition",
        body: [
          "\"Manquer\" is the great trap. \"Manquer à quelqu'un\" means to be missed by someone, so the person who misses is the indirect object: \"Tu me manques\" is I miss you, \"Paris lui manque\" is he misses Paris. \"Manquer de\" means to lack (\"Il manque de patience\"), and \"manquer\" + direct object means to miss a train, a class, a target.",
          "The others follow the same idea: the preposition changes the relationship. \"Penser à\" is to think about; \"penser de\" is to have an opinion of, only in questions (\"Qu'est-ce que tu penses de ce film ?\"). \"Tenir à\" is to care about or insist on; \"tenir de\" is to take after. \"Servir à\" is to be used for; \"servir de\" is to serve as; \"se servir de\" is to use.",
        ],
        table: {
          headers: ["Verb", "+ à", "+ de", "Direct object"],
          rows: [
            ["manquer", "Tu me manques. (I miss you)", "Il manque de temps. (lacks)", "J'ai manqué le train. (missed)"],
            ["penser", "Je pense à toi. (think about)", "Que penses-tu de lui ? (opinion)", "Je pense que... (think that)"],
            ["tenir", "Je tiens à venir. (insist on)", "Elle tient de son père. (takes after)", "Tiens la porte. (hold)"],
            ["servir", "Ça sert à ouvrir les boîtes. (used for)", "Ce canapé sert de lit. (serves as)", "Servir le dîner. (serve)"],
          ],
        },
        examples: [
          { fr: "Ma famille me manque beaucoup.", en: "I miss my family a lot." },
          { fr: "Vous nous avez manqué !", en: "We missed you!" },
          { fr: "Ce rapport manque de clarté.", en: "This report lacks clarity." },
          { fr: "Elle tient de sa grand-mère pour le caractère.", en: "She takes after her grandmother in character." },
          { fr: "Je me sers de cette appli tous les jours.", en: "I use this app every day." },
          { fr: "La salle de réunion sert aussi de cantine.", en: "The meeting room also serves as a canteen." },
        ],
      },
      {
        heading: "Infinitives and two-object patterns",
        body: [
          "Before an infinitive, each verb takes its own link: \"chercher à\", \"hésiter à\", \"s'attendre à\", \"réussir à\", \"tenir à\", but \"s'efforcer de\", \"éviter de\", \"regretter de\", \"décider de\", \"accepter de\". Verbs of wanting, thinking and movement take none: \"vouloir partir\", \"espérer venir\", \"aller voir\".",
          "Verbs that involve getting someone to do something have two complements, and the pattern varies. With \"permettre\", \"conseiller\", \"dire\", \"demander\" and \"interdire\", the person takes \"à\" and the action \"de\": \"permettre à quelqu'un de faire\" → \"je lui permets de partir\". With \"empêcher\", \"prier\" and \"remercier\", the person is direct and the action takes \"de\": \"je l'empêche de partir\". With \"inviter\", \"aider\", \"encourager\" and \"obliger\", the person is direct and the action takes \"à\": \"je l'aide à déménager\".",
        ],
        examples: [
          { fr: "Il cherche à comprendre ce qui s'est passé.", en: "He's trying to understand what happened." },
          { fr: "Évitez de répondre trop vite.", en: "Avoid answering too quickly." },
          { fr: "Le médecin lui a conseillé de se reposer.", en: "The doctor advised him to rest." },
          { fr: "La pluie nous a empêchés de sortir.", en: "The rain stopped us from going out." },
          { fr: "Je les ai invités à dîner samedi.", en: "I invited them to dinner on Saturday." },
        ],
      },
      {
        heading: "À ce que, de ce que, and prepositions in relatives",
        body: [
          "When a verb that takes \"à\" or \"de\" is followed by a whole clause, the preposition can't stand directly before \"que\". French inserts \"ce\": \"s'attendre à ce que\", \"tenir à ce que\", \"veiller à ce que\", \"s'opposer à ce que\", \"consentir à ce que\", all + subjunctive. \"Se plaindre de ce que\" and \"s'étonner de ce que\" accept the indicative too. \"*Je m'attends qu'il vienne\" is a common error.",
          "The verb's preposition also travels into relative clauses: \"penser à\" → \"la chose à laquelle je pense\", \"ce à quoi je tiens\"; \"avoir besoin de\" → \"ce dont j'ai besoin\"; \"compter sur\" → \"la collègue sur qui je compte\". French never strands a preposition at the end of a clause the way English does.",
        ],
        examples: [
          { fr: "Je m'attends à ce qu'il refuse.", en: "I expect him to refuse." },
          { fr: "Elle tient à ce que tout soit prêt à midi.", en: "She insists that everything be ready by noon." },
          { fr: "Veillez à ce que la porte soit fermée.", en: "Make sure the door is closed." },
          { fr: "C'est ce à quoi je pensais.", en: "That's what I was thinking of." },
          { fr: "Voici l'outil dont je me sers.", en: "Here's the tool I use." },
          { fr: "C'est une amie sur qui je peux compter.", en: "She's a friend I can count on." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "J'attends pour le bus.",
        right: "J'attends le bus.",
        why: "\"Attendre\" takes a direct object; wait for is just \"attendre\". The same goes for \"chercher\", \"écouter\" and \"regarder\".",
      },
      {
        wrong: "Je manque mes enfants.",
        right: "Mes enfants me manquent.",
        why: "\"Manquer à\" reverses the English roles: what is missed is the subject, the person who misses is the indirect object.",
      },
      {
        wrong: "Je lui pense souvent.",
        right: "Je pense souvent à lui.",
        why: "\"Penser à\" doesn't take \"lui\". Use \"à\" + stressed pronoun for people and \"y\" for things.",
      },
      {
        wrong: "Ça dépend sur la météo.",
        right: "Ça dépend de la météo.",
        why: "\"Dépendre\" takes \"de\". Similarly \"participer à\", never \"*participer dans\".",
      },
      {
        wrong: "Je m'attends qu'il soit en retard.",
        right: "Je m'attends à ce qu'il soit en retard.",
        why: "Verbs built with \"à\" need \"à ce que\" before a clause.",
      },
    ],
    faqs: [
      {
        q: "How do I know whether a verb takes lui or à lui?",
        a: "Most verbs of communication and giving (\"parler\", \"dire\", \"donner\", \"répondre\", \"plaire\", \"ressembler\") take \"lui\". A smaller list (\"penser\", \"songer\", \"tenir\", \"s'intéresser\", \"faire attention\", \"s'habituer\" and every pronominal verb) takes \"à lui\". Learn that short list.",
      },
      {
        q: "Is \"penser de\" ever used outside questions?",
        a: "Rarely. It asks for or gives an opinion: \"Qu'en penses-tu ?\", \"Je ne sais pas quoi en penser.\" To state your opinion, use \"penser que\" or \"trouver que\".",
      },
      {
        q: "Can I say \"je m'en souviens\" about a person?",
        a: "You'll hear it in casual speech, but standard French prefers \"je me souviens de lui / d'elle\". \"En\" is safest for things and ideas.",
      },
    ],
    related: ["french-subjunctive-advanced", "french-discourse-markers", "nominalisation-in-french"],
    lessons: [
      "c1-verb-prepositions-1",
      "c1-verb-prepositions-2",
      "c1-verb-prepositions-3",
      "c1-sort-verbs-a-de-direct",
      "c1-verb-prepositions-4",
      "c1-verb-prepositions-5",
    ],
  },
  {
    slug: "french-discourse-markers",
    title: "French Discourse Markers: En Outre, Cela Dit, Voire, Si Bien Que and Du Coup",
    description:
      "The connectors that structure advanced French: ordering an argument, nuancing and reformulating, formal cause and consequence, concluding, spoken markers like bon, enfin and du coup, and the false friends (actuellement, éventuellement, d'autre part).",
    level: "C1",
    intro: [
      "At the Upper-intermediate level you learned the core connectors: \"pourtant\", \"en revanche\", \"donc\", \"par conséquent\". At the Advanced level the difference lies in precision and range. A DALF essay or a professional report is judged partly on how its ideas are linked, and French readers expect a wider, more formal toolkit than English: \"en outre\", \"de surcroît\", \"cela dit\", \"voire\", \"dans la mesure où\", \"si bien que\", \"somme toute\".",
      "Each marker has a function (adding, nuancing, reformulating, giving a cause, drawing a consequence, concluding) and a register. Some are written only (\"de surcroît\", \"or\"), some are spoken only (\"du coup\", \"bon\", \"quoi\"), and a few are false friends that mislead English speakers every time: \"actuellement\" means currently, \"éventuellement\" means possibly, and \"d'autre part\" doesn't mean on the other hand.",
      "This guide groups the markers by function, flags the register of each, and covers the grammar some of them bring with them, such as inversion after \"aussi\" and the mood after \"de sorte que\".",
    ],
    sections: [
      {
        heading: "Structuring and adding",
        body: [
          "To order a sequence: \"tout d'abord\", \"en premier lieu\", \"ensuite\", \"en second lieu\", \"enfin\", \"pour finir\". To add a point: \"de plus\", \"par ailleurs\" (besides, on another note), \"en outre\" (furthermore), \"de surcroît\" (moreover, written and emphatic). \"D'une part... d'autre part\" presents two aspects of the same question side by side: it means on the one hand... and also, not a contrast.",
          "For contrast, use \"en revanche\" or \"par contre\" (common, though some purists frown on it in writing). \"Voire\" adds a stronger term: or even, indeed: \"difficile, voire impossible\".",
        ],
        examples: [
          { fr: "En premier lieu, il faut définir le problème.", en: "First of all, we need to define the problem." },
          { fr: "Ce logiciel est cher ; il est, en outre, difficile à utiliser.", en: "This software is expensive; furthermore, it's hard to use." },
          { fr: "D'une part, les coûts augmentent ; d'autre part, la demande baisse.", en: "On the one hand costs are rising, and on the other demand is falling." },
          { fr: "Le projet est risqué, voire irréaliste.", en: "The project is risky, if not unrealistic." },
          { fr: "Par ailleurs, je vous signale que le bureau sera fermé lundi.", en: "Also, I'd like to let you know the office will be closed on Monday." },
        ],
      },
      {
        heading: "Nuancing and reformulating",
        body: [
          "To qualify what you've just said: \"cela dit\" or \"ceci dit\" (that said), \"toutefois\" and \"néanmoins\" (however, nevertheless, more formal than \"pourtant\"), \"du moins\" (at least, correcting yourself downward), \"ou plutôt\" (or rather). These markers can go mid-sentence between commas: \"Il faut, toutefois, rester prudent.\"",
          "To reformulate or specify: \"autrement dit\", \"en d'autres termes\", \"c'est-à-dire\" (explaining), \"à savoir\" (namely, introducing a list or definition). In a report, \"il convient de souligner que\", \"il ressort que\" and \"notons que\" highlight a key point.",
        ],
        examples: [
          { fr: "Le film est un peu long. Cela dit, les acteurs sont excellents.", en: "The film is a bit long. That said, the actors are excellent." },
          { fr: "Il faut, toutefois, rester prudent.", en: "We must, however, remain cautious." },
          { fr: "Tout le monde est d'accord, du moins en apparence.", en: "Everyone agrees, at least on the surface." },
          { fr: "Le chiffre d'affaires a baissé ; autrement dit, l'entreprise perd de l'argent.", en: "Turnover has fallen; in other words, the company is losing money." },
          { fr: "Trois pays ont refusé, à savoir la France, l'Italie et l'Espagne.", en: "Three countries refused, namely France, Italy and Spain." },
          { fr: "Il ressort de l'enquête que les salariés souhaitent plus de télétravail.", en: "The survey shows that staff want more remote working." },
        ],
      },
      {
        heading: "Formal cause and consequence",
        body: [
          "Cause: \"étant donné que\" and \"vu que\" (given that) + indicative; \"dans la mesure où\" (insofar as, since); \"du fait de\", \"en raison de\" + noun (owing to); \"faute de\" + noun or infinitive (for lack of). Consequence: \"si bien que\" + indicative (so that, with the result that), \"d'où\" + noun (hence), \"c'est pourquoi\".",
          "\"De sorte que\" changes meaning with the mood: + indicative it gives a result (\"il a plu, de sorte que le match a été annulé\"); + subjunctive it gives an aim (\"parlez fort, de sorte que tout le monde vous entende\").",
          "\"Aussi\" at the start of a sentence means therefore, and in writing it triggers inversion: \"Aussi faut-il agir vite.\" Don't confuse it with \"aussi\" meaning also, which never starts a sentence in good French.",
        ],
        examples: [
          { fr: "Étant donné que le budget est limité, nous devons faire des choix.", en: "Given that the budget is limited, we have to make choices." },
          { fr: "Faute de moyens, le projet a été abandonné.", en: "For lack of funds, the project was dropped." },
          { fr: "Il a plu toute la journée, si bien que le match a été reporté.", en: "It rained all day, so the match was postponed." },
          { fr: "Les ventes ont chuté, d'où la décision de réduire les effectifs.", en: "Sales fell, hence the decision to cut staff." },
          { fr: "Parlez lentement, de sorte que tout le monde vous comprenne.", en: "Speak slowly so that everyone understands you." },
          { fr: "La situation est grave. Aussi faut-il agir sans attendre.", en: "The situation is serious. We must therefore act without delay." },
        ],
      },
      {
        heading: "Concluding, and the false friends",
        body: [
          "To conclude: \"en somme\", \"somme toute\", \"en définitive\", \"en fin de compte\", \"tout compte fait\", \"pour conclure\", and the conversational \"bref\" (anyway, in short). \"Au final\" is very common but criticised in careful writing. \"Finalement\" means in the end (after hesitation), not finally in a list; for that use \"enfin\".",
          "Several markers mislead English speakers. \"Actuellement\" means currently; actually is \"en fait\". \"Éventuellement\" means possibly, if need be; eventually is \"finalement\" or \"à terme\". \"En fait\" (in fact, contradicting) is not \"en effet\" (indeed, confirming). \"Or\" (formal) means and yet, now, introducing a decisive fact in an argument. \"D'ailleurs\" means besides, incidentally.",
        ],
        table: {
          headers: ["French", "Means", "Not"],
          rows: [
            ["actuellement", "currently, at present", "actually (= en fait)"],
            ["éventuellement", "possibly, if necessary", "eventually (= finalement, à terme)"],
            ["en effet", "indeed (confirms)", "in effect, in fact (= en fait)"],
            ["d'autre part", "and also, moreover", "on the other hand (= en revanche)"],
            ["or", "yet, now (argumentative)", "or (= ou)"],
          ],
        },
        examples: [
          { fr: "Il est actuellement en réunion.", en: "He's in a meeting at the moment." },
          { fr: "Je pourrais éventuellement passer demain.", en: "I could possibly drop by tomorrow." },
          { fr: "Je croyais qu'il était anglais ; en fait, il est irlandais.", en: "I thought he was English; actually, he's Irish." },
          { fr: "Il était fatigué ; en effet, il avait travaillé toute la nuit.", en: "He was tired; indeed, he'd worked all night." },
          { fr: "Tous les hommes sont mortels ; or Socrate est un homme.", en: "All men are mortal; now, Socrates is a man." },
          { fr: "En somme, la réforme a plus d'avantages que d'inconvénients.", en: "All in all, the reform has more advantages than drawbacks." },
        ],
      },
      {
        heading: "Spoken markers: bon, ben, enfin, quoi, du coup",
        body: [
          "Conversation has its own markers, which carry attitude more than logic. \"Bon\" opens or closes a topic (\"Bon, on y va ?\"); \"ben\" (from \"bien\") softens an answer; \"enfin\" corrects yourself or expresses exasperation (\"Il est sympa, enfin, la plupart du temps\"; \"Enfin, tu vois bien que...\"); \"quoi\" closes a statement, summing it up (\"C'était nul, quoi\"); \"en fait\" introduces almost anything; \"genre\" works like English like.",
          "\"Du coup\" (so, as a result) is the most fashionable of all, to the point of being mocked for overuse. These markers are perfectly normal in speech and make you sound natural, but none of them belongs in a formal letter or an essay: replace \"du coup\" with \"par conséquent\" or \"c'est pourquoi\", \"bref\" with \"en somme\".",
        ],
        examples: [
          { fr: "Bon, on commence ?", en: "Right, shall we start?" },
          { fr: "Ben, je sais pas, moi.", en: "Well, I don't know." },
          { fr: "Il est arrivé lundi, enfin, mardi matin.", en: "He arrived on Monday, well, Tuesday morning." },
          { fr: "Le train était annulé, du coup j'ai pris un taxi.", en: "The train was cancelled, so I took a taxi." },
          { fr: "C'était pas terrible, quoi.", en: "It wasn't great, you know." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Actuellement, je ne suis pas d'accord avec vous.",
        right: "En fait, je ne suis pas d'accord avec vous.",
        why: "\"Actuellement\" means currently. Actually, contradicting someone, is \"en fait\".",
      },
      {
        wrong: "Le loyer est élevé. D'autre part, le quartier est très agréable.",
        right: "Le loyer est élevé. En revanche, le quartier est très agréable.",
        why: "\"D'autre part\" adds a point; it doesn't contrast. On the other hand is \"en revanche\" or \"par contre\".",
      },
      {
        wrong: "Aussi il faut agir vite.",
        right: "Aussi faut-il agir vite.",
        why: "In written French, \"aussi\" meaning therefore at the head of a sentence triggers subject-verb inversion. Otherwise use \"c'est pourquoi il faut\".",
      },
      {
        wrong: "Le colis n'est jamais arrivé, du coup je vous demande un remboursement.",
        right: "Le colis n'étant jamais arrivé, je vous demande par conséquent un remboursement.",
        why: "\"Du coup\" is conversational. In a formal letter, use \"par conséquent\", \"c'est pourquoi\" or \"aussi\" + inversion.",
      },
    ],
    faqs: [
      {
        q: "Is \"par contre\" incorrect?",
        a: "No. It's standard and extremely common. Some style guides prefer \"en revanche\" in formal writing, so use \"en revanche\" in an exam essay to be safe.",
      },
      {
        q: "Where do I place markers like toutefois or néanmoins?",
        a: "At the start of the sentence, or after the verb between commas for a more elegant rhythm: \"Il faut, néanmoins, nuancer ce constat.\"",
      },
      {
        q: "How many connectors should a DALF essay use?",
        a: "Enough to make every logical step visible, but varied: don't repeat \"de plus\" five times. Use structure markers for the plan, nuance markers for the concessions, and one clear concluding marker.",
      },
      {
        q: "What's the difference between \"or\" and \"mais\"?",
        a: "\"Mais\" simply contrasts. \"Or\" introduces a new fact that changes the reasoning, often the middle step of an argument: X is true; now Y; therefore Z. It's formal and almost always written.",
      },
    ],
    related: ["concession-in-french", "emphasis-pseudo-clefts-and-inversion", "nominalisation-in-french"],
    lessons: [
      "c1-discourse-markers-1",
      "c1-discourse-markers-2",
      "c1-discourse-markers-3",
      "c1-discourse-markers-4",
      "c1-error-hunt-false-friend-markers",
      "c1-discourse-markers-5",
    ],
  },
  {
    slug: "emphasis-pseudo-clefts-and-inversion",
    title: "Emphasis in French at the Advanced level: Clefts, Pseudo-Clefts, Dislocation and Stylistic Inversion",
    description:
      "How French puts words in focus without raising its voice: c'est... qui / que with prepositions and agreement, ce que... c'est and ce dont... c'est de, dislocation with y and en, inversion (rares sont ceux qui, tel est), and litotes.",
    level: "C1",
    intro: [
      "English emphasises with the voice: I didn't take it, SHE did. French stress always falls at the end of a word group, so it can't move stress onto any word it likes. Instead it moves the words: \"Ce n'est pas moi qui l'ai pris, c'est elle.\" Emphasis in French is a matter of syntax.",
      "At the Upper-intermediate level you met the basic cleft (\"c'est... qui / que\") and simple dislocation (\"moi, je...\"). At the Advanced level the tools get sharper: clefts with prepositions and adverbials, pseudo-clefts that build suspense (\"ce qui m'étonne, c'est que...\"), double dislocation, and the inversions of formal style (\"rares sont ceux qui\", \"reste à savoir si\", \"tel est le problème\").",
      "These structures have grammar traps of their own: verb agreement after \"c'est moi qui\", the right relative pronoun (\"ce dont\", \"ce à quoi\") and the preposition that must be repeated. Get them right and both your speech and your writing will sound distinctly French.",
    ],
    sections: [
      {
        heading: "Clefts with c'est... qui / que, extended",
        body: [
          "\"C'est... qui\" highlights a subject, \"c'est... que\" anything else: an object, a time, a place, a reason, even a gérondif. When the highlighted element has a preposition, it stays inside the cleft and the second half uses plain \"que\": \"C'est à lui que je parle\" (not \"*c'est lui que je parle\" or \"*c'est à lui à qui\"). \"C'est en forgeant qu'on devient forgeron\", \"C'est pour ça que je suis venu.\"",
          "After \"c'est moi qui\", \"c'est nous qui\", the verb agrees with the pronoun, not with \"qui\": \"C'est moi qui ai raison\", \"C'est nous qui sommes en retard.\" With a plural noun or \"eux / elles\", formal French uses \"ce sont\": \"Ce sont eux qui ont gagné.\"",
          "The \"c'est\" part can change tense in careful writing: \"C'était hier que je devais l'appeler\", \"Ce fut lui qui prit la parole.\" In everyday French, \"c'est\" is fine in all cases.",
        ],
        examples: [
          { fr: "C'est à toi que je parle, pas à lui.", en: "I'm talking to YOU, not him." },
          { fr: "C'est moi qui ai réservé l'appartement.", en: "I'M the one who booked the flat." },
          { fr: "Ce sont mes voisins qui m'ont prévenu.", en: "It was my neighbours who warned me." },
          { fr: "C'est en forgeant qu'on devient forgeron.", en: "Practice makes perfect. (It's by forging that you become a blacksmith.)" },
          { fr: "C'est pour cette raison qu'il a démissionné.", en: "That's why he resigned." },
          { fr: "C'est dans ce café que nous nous sommes rencontrés.", en: "It was in this café that we met." },
        ],
      },
      {
        heading: "Pseudo-clefts: ce que je veux, c'est...",
        body: [
          "A pseudo-cleft announces a topic with \"ce qui / ce que / ce dont / ce à quoi\" and delivers the key information after \"c'est\": \"Ce que je veux, c'est partir.\" It creates suspense and is very common in speeches, debates and essays.",
          "Choose the opener from the verb's construction: subject → \"ce qui\" (\"ce qui m'inquiète\"), direct object → \"ce que\" (\"ce que je veux\"), verb + \"de\" → \"ce dont\" (\"ce dont j'ai besoin\"), verb + \"à\" → \"ce à quoi\" (\"ce à quoi je pense\"). After \"c'est\", formal French repeats the preposition: \"Ce dont j'ai besoin, c'est de temps\", \"Ce à quoi je tiens, c'est à ma liberté.\"",
          "When the focus is a clause, the mood follows the meaning of the opener: \"Ce qui m'étonne, c'est qu'il ne soit pas venu\" (subjunctive after a feeling), but \"Ce que je sais, c'est qu'il est parti\" (indicative).",
        ],
        table: {
          headers: ["Verb construction", "Opener", "Example"],
          rows: [
            ["subject", "ce qui", "Ce qui compte, c'est le résultat."],
            ["direct object", "ce que", "Ce que je regrette, c'est son départ."],
            ["verb + de", "ce dont", "Ce dont il a peur, c'est de l'échec."],
            ["verb + à", "ce à quoi", "Ce à quoi je m'attendais, c'est à un refus."],
          ],
        },
        examples: [
          { fr: "Ce que je veux, c'est qu'on me laisse tranquille.", en: "What I want is to be left alone." },
          { fr: "Ce qui m'étonne, c'est qu'il ne soit pas venu.", en: "What surprises me is that he didn't come." },
          { fr: "Ce dont nous avons besoin, c'est de temps.", en: "What we need is time." },
          { fr: "Ce à quoi je pense, c'est à l'avenir de nos enfants.", en: "What I'm thinking about is our children's future." },
          { fr: "Ce qui compte, ce n'est pas de gagner, c'est de participer.", en: "What matters isn't winning, it's taking part." },
        ],
      },
      {
        heading: "Dislocation with pronouns, y and en",
        body: [
          "Dislocation moves an element to the front or the end of the sentence and leaves a pronoun in its place: \"Ce film, je l'ai adoré\" (left), \"Je l'ai adoré, ce film\" (right). Right dislocation is typical of speech and adds an afterthought or an emotional tone: \"Elle est belle, ta veste !\"",
          "The pronoun left behind must match the construction: \"le / la / les\" for a direct object, \"lui / leur\" for a person after \"à\", \"y\" for a place or a thing after \"à\", \"en\" for something after \"de\" or a partitive: \"Paris, j'y vais demain\", \"Du café, j'en veux bien\", \"Ce problème, on en a déjà parlé.\" You can even dislocate two elements at once: \"Pierre, son frère, je le connais bien.\"",
          "A stressed pronoun before the subject pronoun marks contrast: \"Moi, je reste\", \"Lui, il ne dit jamais rien.\" This is completely standard and the main way French contrasts subjects.",
        ],
        examples: [
          { fr: "Ce film, je l'ai vu trois fois.", en: "That film, I've seen it three times." },
          { fr: "Elle est vraiment belle, ta veste.", en: "Your jacket is really nice." },
          { fr: "Le Japon, j'y suis allé l'an dernier.", en: "Japan, I went there last year." },
          { fr: "Des problèmes, on en a tous.", en: "We've all got problems." },
          { fr: "Ta mère, tu lui as dit ?", en: "Have you told your mother?" },
          { fr: "Moi, je trouve que c'est une bonne idée.", en: "Personally, I think it's a good idea." },
        ],
      },
      {
        heading: "Stylistic inversion: rares sont ceux qui, tel est le problème",
        body: [
          "Formal French can put the subject after the verb to give weight to what comes first. Some patterns are set formulas: \"Rares sont ceux qui...\" (few people...), \"Tel est le problème\" (such is the problem), \"Reste à savoir si...\" (it remains to be seen whether), \"Restent deux questions\", \"Peu importe...\", \"Ainsi soit-il.\"",
          "In relative clauses, the subject can follow the verb when it's long or when you want the sentence to end on it: \"le livre qu'a écrit mon père\", \"la maison où vécut Victor Hugo\". This is optional but very common in good writing. Inversion after \"aussi\" (therefore) is covered in the guide to discourse markers, and inversion after \"à peine\", \"sans doute\" or \"peut-être\" in the Mastery guide to rhetorical questions and emphatic inversion.",
        ],
        examples: [
          { fr: "Rares sont ceux qui ont lu ce rapport en entier.", en: "Few people have read this report in full." },
          { fr: "Tel est le principal défi de notre époque.", en: "Such is the main challenge of our time." },
          { fr: "Reste à savoir si le gouvernement tiendra parole.", en: "It remains to be seen whether the government will keep its word." },
          { fr: "Voici la maison où vécut Victor Hugo.", en: "Here is the house where Victor Hugo lived." },
          { fr: "Peu importent les détails, l'essentiel est d'agir.", en: "The details don't matter; what matters is to act." },
        ],
      },
      {
        heading: "Emphatic negation and litotes",
        body: [
          "To strengthen a negation: \"pas du tout\", \"pas le moins du monde\", \"nullement\" and \"aucunement\" (formal), \"ne... guère\" (hardly, literary), \"ne... point\" (archaic or ironic). \"Je n'en ai nullement l'intention.\"",
          "Litotes says less to mean more, and French uses it constantly: \"ce n'est pas mal\" (it's good), \"ce n'est pas faux\" (you're right), \"il n'est pas bête\" (he's clever), \"ce n'est pas sans risque\" (it's risky). In formal style, \"vous n'êtes pas sans savoir que\" means you're certainly aware that. The most famous example is Corneille's \"Va, je ne te hais point\", which means I love you.",
        ],
        examples: [
          { fr: "Je n'en ai pas la moindre idée.", en: "I haven't the faintest idea." },
          { fr: "Il ne s'est nullement excusé.", en: "He didn't apologise in the slightest." },
          { fr: "Ton gâteau ? Ce n'est pas mauvais du tout !", en: "Your cake? It's really good!" },
          { fr: "Vous n'êtes pas sans savoir que les délais sont serrés.", en: "As you're well aware, the deadlines are tight." },
          { fr: "Ce projet n'est pas sans intérêt.", en: "This project is of real interest." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "C'est moi qui a raison.",
        right: "C'est moi qui ai raison.",
        why: "After \"c'est moi qui\", the verb agrees with \"moi\", so it's first person: \"ai\".",
      },
      {
        wrong: "C'est lui que je parle.",
        right: "C'est à lui que je parle.",
        why: "\"Parler à\": the preposition stays in the highlighted part of the cleft.",
      },
      {
        wrong: "Ce que j'ai besoin, c'est de repos.",
        right: "Ce dont j'ai besoin, c'est de repos.",
        why: "\"Avoir besoin de\" requires \"ce dont\", not \"ce que\".",
      },
      {
        wrong: "Paris, je vais demain.",
        right: "Paris, j'y vais demain.",
        why: "A dislocated element must be picked up by a pronoun: here \"y\" for the destination.",
      },
    ],
    faqs: [
      {
        q: "Is dislocation informal?",
        a: "Left dislocation (\"Ce film, je l'ai adoré\") is normal in speech and acceptable in many kinds of writing. Heavy right dislocation (\"Il est beau, ton chien\") is distinctly spoken. Formal writing prefers clefts and inversion.",
      },
      {
        q: "Do I have to repeat the preposition after \"c'est\" in a pseudo-cleft?",
        a: "In careful French, yes: \"Ce dont j'ai besoin, c'est de calme.\" In conversation many people drop it, but repeating it is never wrong.",
      },
      {
        q: "Can I use \"ce sont\" with \"nous\" or \"vous\"?",
        a: "No. \"Ce sont\" is only used with third-person plurals: \"ce sont eux\", \"ce sont mes amis\". With \"nous\" and \"vous\" it's always \"c'est nous\", \"c'est vous\".",
      },
    ],
    related: ["french-discourse-markers", "french-subjunctive-advanced", "french-verbs-with-prepositions"],
    lessons: [
      "c1-emphasis-focus-1",
      "c1-emphasis-focus-2",
      "c1-emphasis-focus-3",
      "c1-contrast-ce-qui-ce-que-ce-dont",
      "c1-emphasis-focus-5",
      "c1-emphasis-focus-6",
    ],
  },
  {
    slug: "conjecture-future-perfect-and-conditional",
    title: "Guessing and Reporting: Il Aura Oublié, Il a Dû, and the Journalistic Conditional",
    description:
      "How French expresses probability and distance: the futur antérieur of conjecture (il aura raté son train), devoir of probability, the journalistic conditional (le suspect aurait pris la fuite), au cas où, and the conditional of indignation.",
    level: "C1",
    intro: [
      "French uses its future and conditional tenses for much more than time. \"Il n'est pas là ? Il aura raté son train\" isn't about the future at all: it's a guess about the past, he must have missed his train. \"Le suspect aurait pris la fuite\" isn't a hypothesis: it's a news report saying the suspect reportedly fled.",
      "These uses all express how sure the speaker is and where the information comes from. English does that with must have, reportedly, allegedly, apparently; French often does it with a tense. That's why they're easy to misread: a learner who sees \"aurait démissionné\" and thinks would have resigned has missed the whole point of the sentence.",
      "This guide sorts out four ways of being unsure (\"il aura\", \"il doit / il a dû\", \"il aurait\", \"il paraît que\"), the conditional in hypotheses without \"si\", and the polite and concessive uses of the future.",
    ],
    sections: [
      {
        heading: "The futur antérieur of probability",
        body: [
          "The futur antérieur (\"avoir\" or \"être\" in the future + participle) can express a guess about something that has already happened, usually to explain a present situation: \"Elle n'a pas répondu ? Elle se sera trompée de numéro.\" It's the speaker's own hypothesis, with a nuance of I bet, no doubt.",
          "The simple future can do the same for the present, especially with \"être\" and \"avoir\": \"On sonne. Ce sera le facteur.\" This use is a little old-fashioned in speech today, where \"ça doit être le facteur\" is more common, but the futur antérieur of probability remains very much alive.",
        ],
        examples: [
          { fr: "Il n'est pas encore là ? Il aura raté son train.", en: "He's not here yet? He must have missed his train." },
          { fr: "Elle se sera trompée de jour.", en: "She must have got the day wrong." },
          { fr: "Je ne trouve pas mes clés. Je les aurai laissées au bureau.", en: "I can't find my keys. I must have left them at the office." },
          { fr: "Ils auront sans doute été retenus par les bouchons.", en: "They were probably held up in traffic." },
          { fr: "On sonne : ce sera le livreur.", en: "Someone's at the door: that'll be the delivery man." },
        ],
      },
      {
        heading: "Devoir of probability",
        body: [
          "\"Devoir\" expresses a strong deduction: present \"il doit être malade\" (he must be ill), passé composé \"il a dû oublier\" (he must have forgotten), imparfait \"il devait être tard\" (it must have been late). The deduction is based on evidence, and it's the most common way to say must in this sense in everyday French.",
          "\"Il a dû\" is ambiguous: it can mean he had to (obligation) or he must have (probability). Context usually decides; \"il a dû partir\" can mean either he had to leave or he must have left. If you need to be unambiguous, use \"il a été obligé de partir\" or \"il est sans doute parti\".",
          "Adverbs do similar work: \"sans doute\" (probably, not without doubt!), \"probablement\", \"vraisemblablement\" (formal), \"à tous les coups\" (casual: I bet).",
        ],
        examples: [
          { fr: "Il ne répond pas ; il doit être en réunion.", en: "He's not answering; he must be in a meeting." },
          { fr: "Elle a dû oublier notre rendez-vous.", en: "She must have forgotten our appointment." },
          { fr: "Il devait être deux heures du matin quand on est rentrés.", en: "It must have been two in the morning when we got home." },
          { fr: "Ils ont dû vendre leur maison pour payer leurs dettes.", en: "They had to sell their house to pay their debts." },
          { fr: "À tous les coups, il a encore perdu son téléphone.", en: "I bet he's lost his phone again." },
        ],
      },
      {
        heading: "The journalistic conditional: distancing from a claim",
        body: [
          "The conditional is used to report information that hasn't been confirmed, so the speaker doesn't take responsibility for it. The present conditional covers present or future facts (\"le ministre démissionnerait dans les jours qui viennent\"), the past conditional covers past facts (\"le suspect aurait pris la fuite\"). English uses reportedly, allegedly, is said to, according to sources.",
          "It's often combined with other distancing markers: \"selon\", \"d'après\", \"à en croire\" (if we're to believe), \"il paraît que\" + indicative, \"soi-disant\" (supposedly, casual), \"prétendument\" (allegedly, formal). Note that it marks distance from someone else's claim: with your own opinion use the indicative, \"selon moi, il a raison\".",
        ],
        table: {
          headers: ["Form", "Who's speaking", "Example"],
          rows: [
            ["il aura oublié", "my own guess", "Il n'est pas venu ; il aura oublié."],
            ["il a dû oublier", "my deduction from evidence", "Il a dû oublier, il n'a pas noté la date."],
            ["il aurait oublié", "someone else's claim, unconfirmed", "Selon sa collègue, il aurait oublié."],
            ["il a oublié", "a fact I'm asserting", "Il a oublié, il me l'a dit."],
          ],
        },
        examples: [
          { fr: "L'incendie aurait été provoqué par un court-circuit.", en: "The fire was reportedly caused by a short circuit." },
          { fr: "Selon nos informations, le PDG quitterait ses fonctions en juin.", en: "According to our information, the CEO is set to step down in June." },
          { fr: "À en croire la presse, le contrat serait déjà signé.", en: "If the press is to be believed, the contract has already been signed." },
          { fr: "Il paraît qu'ils vont divorcer.", en: "Apparently they're getting divorced." },
          { fr: "Il était soi-disant malade, mais on l'a vu à la plage.", en: "He was supposedly ill, but someone saw him at the beach." },
        ],
      },
      {
        heading: "Hypotheses without si, au cas où, and indignant questions",
        body: [
          "The conditional can carry a hypothesis on its own, without \"si\": \"Il viendrait, je ne serais pas surpris\" (if he came...). Children use it to set up a game: \"On serait des pirates, et toi, tu serais le capitaine.\" \"Au cas où\" (in case) and \"dans l'hypothèse où\" take the conditional, not the subjunctive: \"au cas où il pleuvrait\".",
          "In questions, the conditional expresses surprise, suspicion or indignation: \"Tu ne serais pas un peu jaloux ?\", \"Aurait-il menti ?\", \"Serait-ce possible ?\" Asking with the conditional lets you suggest something without accusing outright.",
        ],
        examples: [
          { fr: "Prends un parapluie, au cas où il pleuvrait.", en: "Take an umbrella in case it rains." },
          { fr: "Dans l'hypothèse où le vol serait annulé, vous serez remboursé.", en: "In the event that the flight is cancelled, you'll be refunded." },
          { fr: "Il me le demanderait, je dirais oui.", en: "If he asked me, I'd say yes." },
          { fr: "Tu ne serais pas un peu jaloux, par hasard ?", en: "You wouldn't be a little jealous, by any chance?" },
          { fr: "Aurait-il oublié sa promesse ?", en: "Could he have forgotten his promise?" },
        ],
      },
      {
        heading: "The future of attenuation and the concessive future",
        body: [
          "In formal requests, the simple future softens an order into a polite instruction: \"Je vous demanderai de bien vouloir patienter.\" It's firmer than the conditional \"je vous demanderais\", which sounds more tentative. The two are distinguished in spelling (\"-ai\" vs \"-ais\") and, for many speakers, in pronunciation.",
          "The concessive future anticipates an objection before answering it, a classic move in argument: \"Vous me direz que c'est cher. Certes, mais...\" (You'll say it's expensive...). It's used in speeches and essays to show you've considered the other side.",
        ],
        examples: [
          { fr: "Je vous demanderai de bien vouloir éteindre vos téléphones.", en: "I'll ask you to kindly switch off your phones." },
          { fr: "Je vous demanderais de patienter quelques minutes, si possible.", en: "I'd ask you to wait a few minutes, if possible." },
          { fr: "Vous me direz que ce n'est pas le moment. Pourtant...", en: "You'll tell me this isn't the right time. And yet..." },
          { fr: "On objectera que la mesure est coûteuse.", en: "Some will object that the measure is costly." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Selon moi, le projet serait une erreur.",
        right: "Selon moi, le projet est une erreur.",
        why: "The journalistic conditional marks someone else's unconfirmed claim. For your own opinion, use the indicative.",
      },
      {
        wrong: "Au cas où il pleuve, on restera à l'intérieur.",
        right: "Au cas où il pleuvrait, on restera à l'intérieur.",
        why: "\"Au cas où\" takes the conditional, not the subjunctive.",
      },
      {
        wrong: "Il n'est pas là ; il doit avoir manqué son train hier soir.",
        right: "Il n'est pas là ; il a dû manquer son train hier soir.",
        why: "For a past deduction, French puts \"devoir\" in the passé composé: \"il a dû\" + infinitive. \"Il doit avoir manqué\" exists but is far less natural.",
      },
      {
        wrong: "Sans doute, il a raison.",
        right: "Il a sans doute raison. / Sans doute a-t-il raison.",
        why: "\"Sans doute\" means probably. Put it after the verb, or, in writing, keep it at the head of the sentence and invert the subject.",
      },
    ],
    faqs: [
      {
        q: "Is the futur antérieur of probability still used in speech?",
        a: "Yes, especially in reactions like \"il aura oublié\" or \"j'aurai mal compris\". The simple future for present probability (\"ce sera le facteur\") is more old-fashioned; \"ça doit être\" is the everyday choice.",
      },
      {
        q: "How do I translate the journalistic conditional into English?",
        a: "With reportedly, allegedly, is said to, is understood to, or according to sources. Never translate it as would or would have in a news context.",
      },
      {
        q: "What's the difference between \"sans doute\" and \"sans aucun doute\"?",
        a: "\"Sans doute\" has weakened to mean probably. \"Sans aucun doute\" keeps the strong meaning: without any doubt.",
      },
    ],
    related: ["concession-in-french", "impersonal-constructions-and-passive-alternatives", "french-discourse-markers"],
    lessons: [
      "c1-conjecture-1",
      "c1-conjecture-2",
      "c1-conjecture-3",
      "c1-conjecture-4",
      "c1-contrast-il-aura-il-aurait-il-a-du",
      "c1-conjecture-6",
    ],
  },
];
