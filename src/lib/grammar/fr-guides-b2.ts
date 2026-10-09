// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-guides-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { FrGrammarGuide } from "./fr-types";

// French grammar guides, B2 (see ./fr-types.ts and docs/french-course/guide-brief.md).
export const FR_B2_GUIDES: FrGrammarGuide[] = [
  {
    slug: "subjunctive-in-relative-clauses",
    title: "The Subjunctive in Relative Clauses: Je cherche quelqu'un qui sache",
    description:
      "When a French relative clause takes the subjunctive: sought or hypothetical antecedents, negatives (il n'y a personne qui), superlatives and le seul, and the n'importe qui / qui que ce soit family.",
    level: "B2",
    intro: [
      `Relative clauses normally take the indicative: "J'ai un collègue qui parle chinois". But change "j'ai" to "je cherche" and French switches mood: "Je cherche un collègue qui parle chinois" can become "Je cherche quelqu'un qui sache parler chinois". The relative clause now describes someone who may not exist.`,
      `That is the whole principle: the indicative describes a real, identified person or thing; the subjunctive describes a profile, a requirement, something whose existence is uncertain or denied. English has no mood difference here (someone who speaks Chinese in both cases), so learners default to the indicative.`,
      `This is a nuance rather than a rigid rule. In many sentences both moods are possible, with a shift in meaning, and the subjunctive also has a more formal ring. The patterns below are where it is expected.`,
    ],
    sections: [
      {
        heading: "Known vs sought: the article is the clue",
        body: [
          `After verbs of searching, wanting or needing ("chercher", "vouloir", "avoir besoin de", "rêver de", "souhaiter trouver"), the relative clause takes the subjunctive if the thing is not yet identified. The indefinite article ("un", "une", "des") often signals this; the definite article usually signals something known, so the indicative.`,
          `"Je cherche un appartement qui a un balcon" (indicative) suggests such flats exist and you are looking for one. "Je cherche un appartement qui ait un balcon" (subjunctive) presents it as a requirement that may be hard to meet. Classified ads are full of this: "Famille cherche baby-sitter qui puisse travailler le soir".`,
        ],
        examples: [
          { fr: "Je connais quelqu'un qui sait réparer les vélos.", en: "I know someone who can fix bikes." },
          { fr: "Je cherche quelqu'un qui sache réparer les vélos.", en: "I'm looking for someone who can fix bikes." },
          { fr: "Nous voulons une maison qui soit proche de l'école.", en: "We want a house that's close to the school." },
          { fr: "J'ai trouvé la maison qui est près de l'école.", en: "I found the house that's near the school." },
          { fr: "Entreprise recherche un comptable qui ait au moins cinq ans d'expérience.", en: "Company seeks an accountant with at least five years' experience." },
        ],
      },
      {
        heading: "Negative and doubtful antecedents",
        body: [
          `When the antecedent is denied or questioned, the relative clause takes the subjunctive: "il n'y a personne qui", "je ne connais personne qui", "il n'y a rien qui", "je ne vois aucune solution qui", and in questions "connais-tu quelqu'un qui... ?", "y a-t-il un endroit où... ?".`,
          `In everyday questions the indicative is common too: "Tu connais quelqu'un qui parle russe ?". The subjunctive sounds more doubtful or more formal.`,
        ],
        examples: [
          { fr: "Il n'y a personne qui puisse m'aider.", en: "There's no one who can help me." },
          { fr: "Je ne connais aucun restaurant qui soit ouvert le lundi.", en: "I don't know any restaurant that's open on Mondays." },
          { fr: "Il n'y a rien qui me fasse plus plaisir.", en: "Nothing would make me happier." },
          { fr: "Connaissez-vous un hôtel qui accepte les chiens ?", en: "Do you know a hotel that accepts dogs?" },
          { fr: "Y a-t-il quelqu'un qui veuille prendre la parole ?", en: "Is there anyone who wishes to speak?" },
        ],
      },
      {
        heading: `After superlatives, "le seul", "le premier", "le dernier"`,
        body: [
          `After a superlative or "le seul", "l'unique", "le premier", "le dernier", the relative clause usually takes the subjunctive, because the speaker is giving a subjective judgement: "C'est le meilleur film que j'aie jamais vu".`,
          `If you are stating an objective fact, the indicative is possible: "C'est le premier train qui part demain matin" (a timetable fact). For a learner, the subjunctive is the safe choice when expressing an opinion, especially with "jamais".`,
        ],
        examples: [
          { fr: "C'est le meilleur livre que j'aie lu cette année.", en: "It's the best book I've read this year." },
          { fr: "Tu es la seule personne qui me comprenne.", en: "You're the only person who understands me." },
          { fr: "C'est la ville la plus belle que je connaisse.", en: "It's the most beautiful city I know." },
          { fr: "C'est le premier roman qu'elle ait écrit en français.", en: "It's the first novel she has written in French." },
          { fr: "C'est le dernier bus qui part ce soir.", en: "It's the last bus leaving tonight. (fact: indicative)" },
        ],
      },
      {
        heading: `"N'importe qui", "qui que ce soit", "quoi que"`,
        body: [
          `"N'importe qui / quoi / où / quand / comment" mean anyone, anything, anywhere, at any time, any old how. They behave like ordinary pronouns or adverbs and take no special mood: "Il parle à n'importe qui".`,
          `"Qui que ce soit" (anyone at all, whoever it may be) and "quoi que ce soit" (anything at all) are emphatic and often appear in negative or conditional contexts: "Je n'ai pas besoin de quoi que ce soit". The concessive forms "qui que", "quoi que" and "où que" take the subjunctive: "Quoi que tu fasses, je te soutiendrai", "Où que tu ailles". Don't confuse "quoi que" (whatever) with "quoique" (although).`,
        ],
        examples: [
          { fr: "Ne parle pas à n'importe qui.", en: "Don't talk to just anyone." },
          { fr: "Tu peux venir n'importe quand.", en: "You can come any time." },
          { fr: "Si vous avez besoin de quoi que ce soit, appelez-moi.", en: "If you need anything at all, call me." },
          { fr: "Quoi que tu dises, il ne changera pas d'avis.", en: "Whatever you say, he won't change his mind." },
          { fr: "Où que vous alliez, vous trouverez une boulangerie.", en: "Wherever you go, you'll find a bakery." },
          { fr: "Il refuse de parler à qui que ce soit.", en: "He refuses to speak to anyone at all." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il n'y a personne qui peut m'aider.",
        right: "Il n'y a personne qui puisse m'aider.",
        why: `A denied antecedent ("personne") calls for the subjunctive in the relative clause.`,
      },
      {
        wrong: "C'est le plus beau pays que j'ai jamais visité.",
        right: "C'est le plus beau pays que j'aie jamais visité.",
        why: `After a superlative expressing a judgement, the relative takes the subjunctive, here the past subjunctive "j'aie visité". The two sound identical, so this is a spelling trap.`,
      },
      {
        wrong: "Je connais quelqu'un qui sache coder.",
        right: "Je connais quelqu'un qui sait coder.",
        why: `This person exists and is identified, so the indicative is required.`,
      },
      {
        wrong: "Quoique tu fasses, je t'aime.",
        right: "Quoi que tu fasses, je t'aime.",
        why: `Whatever is "quoi que" in two words. "Quoique" in one word means although.`,
      },
    ],
    faqs: [
      {
        q: `Is the indicative ever wrong after "je cherche"?`,
        a: `No, it is not wrong, just different. "Je cherche un livre qui parle de l'Égypte" is perfectly natural. The subjunctive adds the idea that you are describing an ideal or a requirement, and it is common in written ads and formal speech.`,
      },
      {
        q: `"Que j'ai vu" or "que j'aie vu" after a superlative?`,
        a: `In speech you cannot hear the difference. In writing, the subjunctive "j'aie" is the norm when the superlative expresses an opinion, especially with "jamais".`,
      },
      {
        q: `What's the difference between "n'importe qui" and "qui que ce soit"?`,
        a: `"N'importe qui" means anyone, with no distinction, sometimes with a negative judgement ("il sort avec n'importe qui"). "Qui que ce soit" is more emphatic and often negative: "je n'ai pas vu qui que ce soit" (I didn't see a single soul).`,
      },
    ],
    related: ["subjunctive-after-conjunctions", "lequel-auquel-duquel", "relative-pronouns-qui-que-ou-dont", "subjunctive-vs-indicative-opinion-doubt"],
    lessons: [
      "b2-subjunctive-relatives-1",
      "b2-minimal-pairs-jai-un-ami-je-cherche-un-ami",
      "b2-circuit-il-ny-a-personne-qui",
      "b2-subjunctive-relatives-2",
      "b2-choose-explain-nimporte-qui",
      "b2-contrast-qui-sait-qui-sache",
    ],
  },
  {
    slug: "lequel-auquel-duquel",
    title: "Lequel, Auquel, Duquel: Relative Pronouns After Prepositions",
    description:
      "How to use preposition + lequel in French (la raison pour laquelle, le stylo avec lequel), the contractions auquel and duquel, when dont is impossible, and à qui vs auquel for people.",
    level: "B2",
    intro: [
      `English happily leaves a preposition at the end of a clause: the pen I write with, the friends I count on. French never does. The preposition moves to the front and is followed by a relative pronoun: "le stylo avec lequel j'écris", "les amis sur lesquels je compte".`,
      `For things, that pronoun is "lequel", which agrees with the noun ("lequel", "laquelle", "lesquels", "lesquelles") and contracts with "à" and "de" ("auquel", "duquel"). For people, "qui" is usually preferred after a simple preposition: "la collègue avec qui je travaille".`,
      `"Lequel" is not just formal: "la raison pour laquelle" and "le problème auquel je pense" are everyday French. But it does dominate written French, where it is also used to avoid ambiguity.`,
    ],
    sections: [
      {
        heading: `Preposition + "lequel" / "laquelle" / "lesquels" / "lesquelles"`,
        body: [
          `After prepositions such as "avec", "pour", "sur", "dans", "sans", "par", "chez", "entre" and "parmi", use the form of "lequel" that agrees with the antecedent. With people, "qui" is the usual choice after these prepositions; "lequel" is used for people mainly after "entre" and "parmi" ("parmi lesquels") and in formal writing.`,
          `"Où" can replace "dans lequel" or "sur lequel" for a place or time: "la maison où j'ai grandi" = "la maison dans laquelle j'ai grandi".`,
        ],
        table: {
          headers: ["", "+ lequel", "+ à", "+ de"],
          rows: [
            ["masc. sing.", "lequel", "auquel", "duquel"],
            ["fem. sing.", "laquelle", "à laquelle", "de laquelle"],
            ["masc. pl.", "lesquels", "auxquels", "desquels"],
            ["fem. pl.", "lesquelles", "auxquelles", "desquelles"],
          ],
        },
        examples: [
          { fr: "Voici le stylo avec lequel j'ai signé le contrat.", en: "Here's the pen I signed the contract with." },
          { fr: "C'est la raison pour laquelle je suis parti.", en: "That's why I left." },
          { fr: "Les amis sur lesquels je compte sont rares.", en: "The friends I can count on are few." },
          { fr: "La boîte dans laquelle je range mes photos est pleine.", en: "The box I keep my photos in is full." },
          { fr: "J'ai invité vingt personnes, parmi lesquelles mon ancien prof.", en: "I invited twenty people, including my old teacher." },
        ],
      },
      {
        heading: `"Auquel", "à laquelle", "auxquels": verbs with "à"`,
        body: [
          `With verbs built with "à" ("penser à", "s'intéresser à", "participer à", "s'habituer à", "faire attention à", "assister à"), the pronoun is "auquel" / "à laquelle" / "auxquels" / "auxquelles" for things. Note that "à laquelle" does not contract.`,
          `For people, use "à qui": "la personne à qui j'ai écrit". "Auquel" for a person is possible but sounds formal.`,
        ],
        examples: [
          { fr: "C'est un projet auquel je pense depuis longtemps.", en: "It's a project I've been thinking about for a long time." },
          { fr: "La conférence à laquelle j'ai assisté était passionnante.", en: "The conference I attended was fascinating." },
          { fr: "Ce sont des détails auxquels il faut faire attention.", en: "These are details you need to pay attention to." },
          { fr: "Les questions auxquelles tu dois répondre sont au verso.", en: "The questions you have to answer are on the back." },
          { fr: "Le collègue à qui j'ai envoyé le dossier est absent.", en: "The colleague I sent the file to is away." },
        ],
      },
      {
        heading: `"Duquel" after compound prepositions; "dont" everywhere else`,
        body: [
          `With a simple "de" (a verb like "parler de", "avoir besoin de", or whose), the relative pronoun is "dont", not "duquel": "le livre dont je parle", "l'auteur dont j'ai lu le roman".`,
          `"Duquel", "de laquelle", "desquels" and "desquelles" are needed after compound prepositions ending in "de": "à côté de", "près de", "au cours de", "à cause de", "au bord de", "en face de", "au milieu de", "autour de". "Dont" is impossible there: "le parc près duquel j'habite", "la réunion au cours de laquelle il a démissionné".`,
          `For people after such prepositions, "de qui" is also possible: "la femme à côté de qui j'étais assis".`,
        ],
        examples: [
          { fr: "Le parc près duquel j'habite est magnifique.", en: "The park I live near is beautiful." },
          { fr: "La réunion au cours de laquelle il a démissionné a duré trois heures.", en: "The meeting during which he resigned lasted three hours." },
          { fr: "Les grèves à cause desquelles nous sommes en retard continuent.", en: "The strikes that made us late are still going on." },
          { fr: "C'est le lac au bord duquel nous avons campé.", en: "That's the lake we camped beside." },
          { fr: "Le roman dont je t'ai parlé vient d'être adapté au cinéma.", en: "The novel I told you about has just been made into a film." },
        ],
      },
      {
        heading: `"Lequel" for clarity, and "dont" with quantities`,
        body: [
          `In formal writing, "lequel" can even replace "qui" as a subject to remove ambiguity: "J'ai parlé au frère de Julie, lequel m'a dit..." makes clear that the brother spoke, not Julie.`,
          `"Dont" also introduces part of a group, like English including or of whom: "J'ai trois enfants, dont deux filles". This use is frequent in news and statistics: "Vingt blessés, dont cinq graves".`,
        ],
        examples: [
          { fr: "Il a écrit au directeur de l'école, lequel n'a jamais répondu.", en: "He wrote to the head of the school, who never replied." },
          { fr: "Elle a trois frères, dont deux vivent à l'étranger.", en: "She has three brothers, two of whom live abroad." },
          { fr: "L'accident a fait dix blessés, dont trois graves.", en: "The accident left ten injured, three of them seriously." },
          { fr: "Il y avait plusieurs candidats, parmi lesquels une ancienne ministre.", en: "There were several candidates, among them a former minister." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Le stylo que j'écris avec est bleu.",
        right: "Le stylo avec lequel j'écris est bleu.",
        why: `French cannot leave a preposition at the end of a clause. Move it to the front with "lequel".`,
      },
      {
        wrong: "C'est la raison pour lequel je suis venu.",
        right: "C'est la raison pour laquelle je suis venu.",
        why: `"Lequel" agrees with its antecedent: "la raison" is feminine.`,
      },
      {
        wrong: "Le parc près dont j'habite est grand.",
        right: "Le parc près duquel j'habite est grand.",
        why: `"Dont" cannot follow a compound preposition like "près de". Use "duquel".`,
      },
      {
        wrong: "Le film duquel je parle est sorti hier.",
        right: "Le film dont je parle est sorti hier.",
        why: `With a simple "de" ("parler de"), the normal pronoun is "dont". "Duquel" is reserved for compound prepositions.`,
      },
      {
        wrong: "Le concours à lequel j'ai participé était difficile.",
        right: "Le concours auquel j'ai participé était difficile.",
        why: `"À" + "lequel" contracts to "auquel", like "à le" → "au".`,
      },
    ],
    faqs: [
      {
        q: `"À qui" or "auquel" for people?`,
        a: `"À qui" is the normal choice: "l'ami à qui j'ai prêté ma voiture". "Auquel" for a person is correct but formal. For things, only "auquel" works.`,
      },
      {
        q: `"Où" or "dans lequel"?`,
        a: `For places and times, "où" is simpler and more common: "la ville où je vis". "Dans lequel" is more precise and slightly more formal. For abstract ideas, use "dans lequel": "le contexte dans lequel il a écrit".`,
      },
      {
        q: `Is "lequel" also a question word?`,
        a: `Yes: "Lequel tu préfères ?" (which one do you prefer?), "Auquel tu penses ?". It agrees with the noun it refers to, exactly as in relative clauses.`,
      },
    ],
    related: ["relative-pronouns-qui-que-ou-dont", "ce-qui-ce-que-ce-dont", "subjunctive-in-relative-clauses"],
    lessons: [
      "b2-lequel-auquel-duquel",
      "b2-dont-duquel-lequel-1",
      "b2-circuit-compound-prepositions",
      "b2-dont-duquel-lequel-2",
    ],
  },
  {
    slug: "subjunctive-after-conjunctions",
    title: "Bien que, Pour que, Avant que: The Subjunctive After Conjunctions",
    description:
      "Which French conjunctions take the subjunctive (pour que, bien que, avant que, à condition que, sans que...), which take the indicative (après que, parce que, pendant que), the ne explétif, and when to use an infinitive instead.",
    level: "B2",
    intro: [
      `A whole family of conjunctions ending in "que" trigger the subjunctive: "pour que", "afin que", "avant que", "jusqu'à ce que", "bien que", "à condition que", "à moins que", "sans que" and a few more. Others, just as common, take the indicative: "parce que", "pendant que", "après que", "dès que", "alors que", "même si".`,
      `There is a logic. Conjunctions of purpose, condition, concession and anticipation introduce something not (yet) real: what you aim at, what has to happen, what you concede despite your argument, what has not happened yet. Conjunctions of cause, time and opposition introduce facts. "Avant que" (it hasn't happened yet) takes the subjunctive; "après que" (it has happened) takes the indicative.`,
      `Many of these conjunctions have a preposition twin used with an infinitive when both clauses share the same subject: "pour que tu partes" / "pour partir", "avant qu'il parte" / "avant de partir". Using the right one is a hallmark of Upper-intermediate French.`,
    ],
    sections: [
      {
        heading: "The conjunctions that take the subjunctive",
        body: [
          `Learn them by meaning. The table shows each conjunction with the preposition to use when the subject is the same. Where there is no preposition, keep the conjunction or rephrase.`,
        ],
        table: {
          headers: ["Meaning", "+ subjunctive", "Same subject: + infinitive"],
          rows: [
            ["purpose", "pour que, afin que", "pour, afin de"],
            ["purpose (fear)", "de peur que, de crainte que", "de peur de, de crainte de"],
            ["before", "avant que", "avant de"],
            ["until", "jusqu'à ce que, en attendant que", "en attendant de"],
            ["concession", "bien que, quoique", "(bien que + adjective)"],
            ["condition", "à condition que, pourvu que, à supposer que", "à condition de"],
            ["exception", "à moins que", "à moins de"],
            ["without", "sans que", "sans"],
          ],
        },
        examples: [
          { fr: "Je t'explique pour que tu comprennes.", en: "I'm explaining so that you understand." },
          { fr: "Rentre avant qu'il fasse nuit.", en: "Come home before it gets dark." },
          { fr: "On attendra jusqu'à ce qu'il revienne.", en: "We'll wait until he comes back." },
          { fr: "Bien qu'il soit malade, il est venu travailler.", en: "Although he's ill, he came to work." },
          { fr: "Je viendrai à condition que tu m'invites.", en: "I'll come provided you invite me." },
          { fr: "Il est sorti sans que personne le voie.", en: "He went out without anyone seeing him." },
        ],
      },
      {
        heading: "Same subject: switch to the infinitive",
        body: [
          `When the two clauses have the same subject, French prefers (and often requires) the preposition + infinitive. "Je travaille pour gagner ma vie", not "je travaille pour que je gagne ma vie". "Appelle-moi avant de partir", not "avant que tu partes" if "tu" calls and "tu" leaves.`,
          `"Bien que" and "quoique" have no infinitive twin, so they keep the subjunctive even with the same subject ("Bien qu'elle soit fatiguée, elle continue"), or shorten with an adjective: "Bien que fatiguée, elle continue".`,
        ],
        examples: [
          { fr: "Je travaille le week-end pour payer mes études.", en: "I work at weekends to pay for my studies." },
          { fr: "Je travaille le week-end pour que mes enfants puissent faire des études.", en: "I work at weekends so my children can go to university." },
          { fr: "Il est parti sans dire au revoir.", en: "He left without saying goodbye." },
          { fr: "Il est parti sans que je lui dise au revoir.", en: "He left without my saying goodbye to him." },
          { fr: "Je n'irai pas, à moins d'être invité.", en: "I won't go unless I'm invited." },
          { fr: "Bien que très jeune, elle dirige déjà une équipe.", en: "Although very young, she already runs a team." },
        ],
      },
      {
        heading: "Conjunctions that take the indicative",
        body: [
          `Conjunctions of cause ("parce que", "puisque", "comme", "étant donné que", "vu que"), time ("quand", "lorsque", "dès que", "pendant que", "depuis que", "tant que", "après que"), opposition ("alors que", "tandis que") and result ("si bien que") take the indicative, because they introduce facts. About the future, the time conjunctions take the future: "Dès qu'il arrivera, on partira".`,
          `"Même si" means even if and takes the indicative, never the subjunctive: "Même s'il pleut, on sortira". Compare "bien qu'il pleuve" (although it is raining, a fact you concede) with "même s'il pleut" (even if it rains, a hypothesis).`,
          `"De sorte que" takes the subjunctive when it means so that (purpose) and the indicative when it means so (result). "Après que" officially takes the indicative, although "après qu'il soit parti" is very widespread in speech; write the indicative.`,
        ],
        examples: [
          { fr: "Je suis resté parce qu'il pleuvait.", en: "I stayed because it was raining." },
          { fr: "Après qu'il est parti, tout le monde s'est détendu.", en: "After he left, everyone relaxed." },
          { fr: "Même si tu insistes, je ne changerai pas d'avis.", en: "Even if you insist, I won't change my mind." },
          { fr: "Il parle fort de sorte que tout le monde l'entend.", en: "He speaks loudly, so everyone hears him." },
          { fr: "Parle fort de sorte que tout le monde t'entende.", en: "Speak loudly so that everyone can hear you." },
          { fr: "Elle travaille alors que son frère dort encore.", en: "She's working while her brother is still asleep." },
        ],
      },
      {
        heading: `The "ne" explétif`,
        body: [
          `After "avant que", "à moins que", "de peur que" and "de crainte que", careful written French often adds a "ne" that is not a negation: "Partons avant qu'il ne soit trop tard". It is optional, more common in writing, and does not change the meaning.`,
          `Never add "pas" unless you mean a real negative. And do not use the "ne explétif" after "sans que": it already means without, so "sans que personne le voie" needs no "ne".`,
        ],
        examples: [
          { fr: "Partons avant qu'il ne soit trop tard.", en: "Let's go before it's too late." },
          { fr: "Je viendrai, à moins qu'il ne pleuve.", en: "I'll come, unless it rains." },
          { fr: "Il a fermé la fenêtre de peur que le bébé ne prenne froid.", en: "He closed the window for fear the baby would catch cold." },
          { fr: "Je pars avant qu'il arrive.", en: "I'm leaving before he arrives. (no ne: equally correct)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Bien qu'il est riche, il vit simplement.",
        right: "Bien qu'il soit riche, il vit simplement.",
        why: `"Bien que" always takes the subjunctive, even though his being rich is a fact.`,
      },
      {
        wrong: "Même s'il fasse froid, on ira se baigner.",
        right: "Même s'il fait froid, on ira se baigner.",
        why: `"Même si" behaves like "si": never the subjunctive.`,
      },
      {
        wrong: "Je suis venu pour que je te voie.",
        right: "Je suis venu pour te voir.",
        why: `Same subject in both clauses: use "pour" + infinitive.`,
      },
      {
        wrong: "Attends jusqu'à ce qu'il revient.",
        right: "Attends jusqu'à ce qu'il revienne.",
        why: `"Jusqu'à ce que" introduces something that hasn't happened yet: subjunctive.`,
      },
      {
        wrong: "Je partirai avant que je finis.",
        right: "Je partirai avant de finir.",
        why: `With the same subject use "avant de" + infinitive; with a different subject it would be "avant qu'il finisse".`,
      },
    ],
    faqs: [
      {
        q: `Why does "avant que" take the subjunctive but "après que" doesn't?`,
        a: `What comes after "avant que" has not happened yet at that point, so it is not a fact; what comes after "après que" has already happened. Many speakers use the subjunctive after "après que" by analogy, but the indicative remains the standard.`,
      },
      {
        q: `"Bien que" or "malgré"?`,
        a: `"Bien que" introduces a clause with a verb: "bien qu'il pleuve". "Malgré" is a preposition followed by a noun: "malgré la pluie". "Malgré que" exists in speech but is frowned upon in careful French.`,
      },
      {
        q: `Is "quoique" the same as "bien que"?`,
        a: `Yes, both mean although and take the subjunctive; "quoique" is slightly more literary. Don't confuse it with "quoi que" (whatever).`,
      },
      {
        q: `Does "pourvu que" always take the subjunctive?`,
        a: `Yes, in both of its uses: provided that ("tu peux sortir pourvu que tu rentres tôt") and let's hope that ("Pourvu qu'il fasse beau !").`,
      },
    ],
    related: ["subjunctive-in-relative-clauses", "french-past-subjunctive", "french-connectors"],
    lessons: [
      "b2-subjunctive-conjunctions-1",
      "b2-circuit-avant-que-jusqua-ce-que",
      "b2-subjunctive-conjunctions-2",
      "b2-contrast-sans-sans-que",
      "b2-indicative-or-subjunctive-conjunctions",
      "b2-transformations-infinitive-or-que",
    ],
  },
  {
    slug: "french-past-subjunctive",
    title: "The Past Subjunctive and the Sequence of Tenses",
    description:
      "How to form the French past subjunctive (que j'aie fini, qu'elle soit partie), when to choose it over the present subjunctive, and why modern French says je voulais qu'il vienne.",
    level: "B2",
    intro: [
      `The past subjunctive ("subjonctif passé") is the subjunctive of "avoir" or "être" plus a past participle: "que j'aie fini", "qu'elle soit partie". It is used in exactly the same contexts as the present subjunctive, but for an action completed before the moment of the main verb.`,
      `Its role is not to put the sentence in the past; it marks anteriority. "Je suis content que tu viennes" (you're coming) vs "Je suis content que tu sois venu" (you came). What decides the choice is whether the action is simultaneous or later (present subjunctive) or already completed (past subjunctive).`,
      `That also explains the sequence of tenses in modern French: after a main verb in the past, you still use the present subjunctive for a simultaneous or later action. "Je voulais qu'il vienne" is correct, everyday French. The imperfect subjunctive ("qu'il vînt") survives only in literature.`,
    ],
    sections: [
      {
        heading: `Forming it: "aie" / "sois" + past participle`,
        body: [
          `Use the present subjunctive of "avoir" or "être" and the past participle. The choice of auxiliary and the agreements follow the passé composé: "être" for movement and change-of-state verbs and all pronominal verbs, with agreement with the subject.`,
          `Watch the spelling of "avoir": "que j'aie", "que tu aies", "qu'il ait", "qu'ils aient". All four sound like "ai" and "est" can sound similar too, so these are classic dictation traps.`,
        ],
        table: {
          headers: ["", "finir (avoir)", "partir (être)", "se tromper (être)"],
          rows: [
            ["que je (j')", "aie fini", "sois parti(e)", "me sois trompé(e)"],
            ["que tu", "aies fini", "sois parti(e)", "te sois trompé(e)"],
            ["qu'il / elle", "ait fini", "soit partie (elle)", "se soit trompé"],
            ["que nous", "ayons fini", "soyons parti(e)s", "nous soyons trompé(e)s"],
            ["que vous", "ayez fini", "soyez parti(e)(s)", "vous soyez trompé(e)(s)"],
            ["qu'ils / elles", "aient fini", "soient partis", "se soient trompés"],
          ],
        },
        examples: [
          { fr: "Je suis content que tu aies réussi ton examen.", en: "I'm glad you passed your exam." },
          { fr: "C'est dommage qu'elle soit partie si tôt.", en: "It's a shame she left so early." },
          { fr: "Je ne crois pas qu'ils se soient trompés.", en: "I don't think they made a mistake." },
          { fr: "Il faut que vous ayez rendu le dossier avant lundi.", en: "You must have handed in the file by Monday." },
          { fr: "Bien qu'il ait beaucoup plu, la fête était réussie.", en: "Although it rained a lot, the party was a success." },
        ],
      },
      {
        heading: "Present or past subjunctive? Simultaneous vs completed",
        body: [
          `Use the present subjunctive when the action happens at the same time as the main verb or later. Use the past subjunctive when it is completed before the main verb, or will be completed before a future point ("il faut que tu aies fini avant midi").`,
          `The tense of the main verb does not matter: "je suis désolé qu'il soit malade" (he is ill now) vs "je suis désolé qu'il ait été malade" (he was ill).`,
        ],
        examples: [
          { fr: "Je suis surpris qu'il vienne.", en: "I'm surprised he's coming." },
          { fr: "Je suis surpris qu'il soit venu.", en: "I'm surprised he came." },
          { fr: "Je doute qu'elle comprenne.", en: "I doubt she understands." },
          { fr: "Je doute qu'elle ait compris.", en: "I doubt she understood." },
          { fr: "Il faut que le rapport soit terminé avant vendredi.", en: "The report must be finished before Friday." },
          { fr: "C'est le plus beau voyage que nous ayons fait.", en: "It's the best trip we've ever taken." },
        ],
      },
      {
        heading: `Sequence of tenses: "je voulais qu'il vienne"`,
        body: [
          `In modern French, the subjunctive has only two forms in use, present and past, whatever the tense of the main verb. After a past main verb, use the present subjunctive for a simultaneous or later action, and the past subjunctive for an earlier one.`,
          `English shifts tense (I wanted him to come, I was afraid he had left). French doesn't: "Je voulais qu'il vienne", "J'avais peur qu'il soit parti". Never use the imparfait or plus-que-parfait in a subjunctive clause.`,
        ],
        examples: [
          { fr: "Je voulais qu'il vienne avec nous.", en: "I wanted him to come with us." },
          { fr: "Il fallait que je parte tôt.", en: "I had to leave early." },
          { fr: "J'avais peur qu'il soit déjà parti.", en: "I was afraid he'd already left." },
          { fr: "Elle était contente que nous soyons venus.", en: "She was pleased we had come." },
          { fr: "On attendait qu'il finisse de parler.", en: "We were waiting for him to finish talking." },
        ],
      },
      {
        heading: "The imperfect subjunctive: recognise it only",
        body: [
          `Classical literature uses the imperfect subjunctive after a past main verb: "Il fallait qu'il vînt", "Je voulais qu'elle fût là". It is formed from the passé simple ("il vint" → "qu'il vînt"). You need to recognise it in novels, particularly the "il" forms with a circumflex ("qu'il eût", "qu'il fût", "qu'il fît"), but never use it in speech or ordinary writing, where it would sound pompous or comic.`,
          `"Eût" and "fût" also appear as the literary past conditional ("il eût été préférable" = "il aurait été préférable"), which you may meet in formal texts.`,
        ],
        examples: [
          { fr: "Il fallait qu'il vînt. (literary)", en: "He had to come." },
          { fr: "Il fallait qu'il vienne. (modern)", en: "He had to come." },
          { fr: "Elle craignait qu'on ne la reconnût. (literary)", en: "She feared she would be recognised." },
          { fr: "Il eût été préférable de se taire. (literary)", en: "It would have been better to keep quiet." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je suis content que tu as réussi.",
        right: "Je suis content que tu aies réussi.",
        why: `An emotion triggers the subjunctive; for a completed action, use the past subjunctive "que tu aies réussi".`,
      },
      {
        wrong: "Je voulais qu'il venait.",
        right: "Je voulais qu'il vienne.",
        why: `The subjunctive does not shift into the imparfait after a past verb. Use the present subjunctive.`,
      },
      {
        wrong: "Bien qu'elle a fini, elle reste au bureau.",
        right: "Bien qu'elle ait fini, elle reste au bureau.",
        why: `"Bien que" takes the subjunctive; "ait" (subjunctive) and "a" (indicative) must not be confused.`,
      },
      {
        wrong: "Je regrette qu'elle soit parti.",
        right: "Je regrette qu'elle soit partie.",
        why: `With "être", the participle agrees with the subject, in the subjunctive as elsewhere.`,
      },
    ],
    faqs: [
      {
        q: `Is "qu'il ait" pronounced like "il est"?`,
        a: `In most accents "ait" sounds like "ai" [e] or [ɛ], and so does "est" for many speakers. That's why grammar alone decides the spelling: after a subjunctive trigger, it is "ait".`,
      },
      {
        q: "Do I need the imperfect subjunctive for the DELF B2?",
        a: `No. You may meet it in a literary reading text, so recognise forms like "qu'il fût" and "qu'il eût", but you are never expected to produce it.`,
      },
      {
        q: `What about the future? Is there a future subjunctive?`,
        a: `No. The present subjunctive covers the future ("je doute qu'il vienne demain"), and the past subjunctive covers the future perfect ("il faut que tu aies fini demain").`,
      },
    ],
    related: ["subjunctive-after-conjunctions", "subjunctive-in-relative-clauses", "french-subjunctive-forms", "conditionnel-passe"],
    lessons: [
      "b2-past-subjunctive-1",
      "b2-pattern-que-jaie-que-je-sois",
      "b2-minimal-pairs-quil-vienne-quil-soit-venu",
      "b2-past-subjunctive-2",
      "b2-transformations-sequence-of-tenses",
    ],
  },
  {
    slug: "conditionnel-passe",
    title: "The Conditionnel Passé: J'aurais dû, Si j'avais su",
    description:
      "How to form the French past conditional (j'aurais fait, je serais venu), si + plus-que-parfait, mixed conditionals, regrets and reproaches (j'aurais dû, tu aurais pu), and comme si, même si and au cas où.",
    level: "B2",
    intro: [
      `The conditionnel passé is would have: "j'aurais fait" (I would have done), "elle serait venue" (she would have come). It talks about what did not happen: missed chances, regrets, reproaches and alternative histories.`,
      `Its most famous partner is "si" + plus-que-parfait: "Si j'avais su, je ne serais pas venu" (if I had known, I wouldn't have come). The rule from Intermediate still holds: no conditional after "si". English speakers are tempted by if I would have known, which is a mistake in both languages.`,
      `Add the modal verbs and you get some of the most useful phrases in French: "j'aurais dû" (I should have), "tu aurais pu" (you could have), "il aurait fallu" (we should have), "j'aurais mieux fait de" (I'd have done better to).`,
    ],
    sections: [
      {
        heading: `Forming it: "aurais" / "serais" + past participle`,
        body: [
          `Put "avoir" or "être" in the present conditional and add the past participle. The auxiliary and agreement rules are those of the passé composé: "j'aurais pris", "nous serions partis", "elle se serait levée".`,
        ],
        table: {
          headers: ["", "faire (avoir)", "venir (être)", "se lever (être)"],
          rows: [
            ["je", "j'aurais fait", "je serais venu(e)", "je me serais levé(e)"],
            ["tu", "tu aurais fait", "tu serais venu(e)", "tu te serais levé(e)"],
            ["il / elle", "il aurait fait", "elle serait venue", "il se serait levé"],
            ["nous", "nous aurions fait", "nous serions venu(e)s", "nous nous serions levé(e)s"],
            ["vous", "vous auriez fait", "vous seriez venu(e)(s)", "vous vous seriez levé(e)(s)"],
            ["ils / elles", "ils auraient fait", "elles seraient venues", "ils se seraient levés"],
          ],
        },
        examples: [
          { fr: "J'aurais aimé te voir.", en: "I would have liked to see you." },
          { fr: "Elle serait venue, mais elle était malade.", en: "She would have come, but she was ill." },
          { fr: "Sans ton aide, nous aurions perdu.", en: "Without your help, we would have lost." },
          { fr: "À ta place, je me serais excusé.", en: "In your shoes, I would have apologised." },
          { fr: "Ils n'auraient jamais imaginé ça.", en: "They would never have imagined that." },
        ],
      },
      {
        heading: `"Si" + plus-que-parfait, and mixed conditionals`,
        body: [
          `For an unreal past condition, the "si" clause takes the plus-que-parfait and the main clause the conditionnel passé: "Si tu m'avais appelé, je serais venu".`,
          `The two halves can be mixed across time, exactly as in English. A past condition with a present result: "Si j'avais accepté ce poste, je serais riche aujourd'hui" (plus-que-parfait + present conditional). A present condition with a past result: "Si j'étais courageux, je l'aurais fait" (imparfait + conditionnel passé).`,
        ],
        table: {
          headers: ["Si clause", "Main clause", "Example"],
          rows: [
            ["présent", "futur", "Si tu viens, je serai content."],
            ["imparfait", "conditionnel présent", "Si tu venais, je serais content."],
            ["plus-que-parfait", "conditionnel passé", "Si tu étais venu, j'aurais été content."],
            ["plus-que-parfait", "conditionnel présent", "Si tu étais venu, je serais moins seul aujourd'hui."],
          ],
        },
        examples: [
          { fr: "Si j'avais su, je ne serais pas venu.", en: "If I'd known, I wouldn't have come." },
          { fr: "Si nous étions partis plus tôt, nous n'aurions pas raté le train.", en: "If we'd left earlier, we wouldn't have missed the train." },
          { fr: "Qu'est-ce que tu aurais fait si tu avais été à ma place ?", en: "What would you have done if you'd been in my place?" },
          { fr: "Si j'avais fait médecine, je serais médecin aujourd'hui.", en: "If I'd studied medicine, I'd be a doctor today." },
          { fr: "Si elle parlait anglais, elle aurait eu le poste.", en: "If she spoke English, she would have got the job." },
        ],
      },
      {
        heading: "Regrets and reproaches",
        body: [
          `"Devoir" and "pouvoir" in the conditionnel passé are the everyday tools for regrets and reproaches. "J'aurais dû" = I should have; "je n'aurais pas dû" = I shouldn't have; "tu aurais pu" = you could have (often a reproach); "il aurait fallu" + infinitive or + "que" + subjunctive = it would have been necessary.`,
          `Other common frames: "j'aurais mieux fait de" + infinitive (I'd have done better to), "j'aurais aimé" / "j'aurais voulu que" + subjunctive (I wish... had), and "regretter de" + past infinitive ("je regrette d'être parti").`,
        ],
        examples: [
          { fr: "J'aurais dû t'écouter.", en: "I should have listened to you." },
          { fr: "Tu aurais pu me prévenir !", en: "You could have warned me!" },
          { fr: "Il aurait fallu réserver plus tôt.", en: "We should have booked earlier." },
          { fr: "J'aurais mieux fait de me taire.", en: "I'd have done better to keep quiet." },
          { fr: "J'aurais voulu que tu sois là.", en: "I wish you had been there." },
          { fr: "Je regrette de ne pas avoir accepté.", en: "I regret not accepting." },
        ],
      },
      {
        heading: `Beyond "si": "comme si", "même si", "au cas où"`,
        body: [
          `"Comme si" (as if) takes the imparfait for a simultaneous situation and the plus-que-parfait for an earlier one, never the conditional: "Il parle comme s'il savait tout", "Elle me regarde comme si elle avait vu un fantôme".`,
          `"Même si" (even if) follows the "si" rules: "Même si j'avais eu le temps, je ne serais pas venu". "Au cas où" (in case) takes the conditional, unlike English: "Prends un parapluie au cas où il pleuvrait".`,
          `Finally, the conditionnel passé also reports unconfirmed past facts in the news: "L'incendie aurait fait trois victimes" (the fire reportedly killed three people).`,
        ],
        examples: [
          { fr: "Il me parle comme si j'étais un enfant.", en: "He talks to me as if I were a child." },
          { fr: "Elle a réagi comme si elle n'avait rien entendu.", en: "She reacted as if she hadn't heard anything." },
          { fr: "Même si tu m'avais demandé, je n'aurais pas pu t'aider.", en: "Even if you had asked me, I couldn't have helped you." },
          { fr: "Garde mon numéro au cas où tu aurais besoin de quelque chose.", en: "Keep my number in case you need anything." },
          { fr: "Le suspect aurait quitté le pays hier soir.", en: "The suspect reportedly left the country last night." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si j'aurais su, je serais venu.",
        right: "Si j'avais su, je serais venu.",
        why: `No conditional after "si": the past "si" clause takes the plus-que-parfait.`,
      },
      {
        wrong: "J'ai dû t'appeler.",
        right: "J'aurais dû t'appeler.",
        why: `"J'ai dû" means I had to (or I must have). The regret should have is "j'aurais dû".`,
      },
      {
        wrong: "Il parle comme s'il serait le chef.",
        right: "Il parle comme s'il était le chef.",
        why: `"Comme si" takes the imparfait or plus-que-parfait, never the conditional.`,
      },
      {
        wrong: "Prends ta veste au cas où il fasse froid.",
        right: "Prends ta veste au cas où il ferait froid.",
        why: `"Au cas où" takes the conditional, not the subjunctive.`,
      },
      {
        wrong: "Elle serait venu si elle avait pu.",
        right: "Elle serait venue si elle avait pu.",
        why: `With "être", the participle agrees with the subject.`,
      },
    ],
    faqs: [
      {
        q: `"J'aurais dû" or "je devrais avoir"?`,
        a: `Only "j'aurais dû" + infinitive. French puts the past on the modal, while English puts it on the following verb (should have done): "J'aurais dû partir", not "je devrais être parti" for a regret.`,
      },
      {
        q: `Can I say "si j'avais su" without the rest?`,
        a: `Yes. "Si j'avais su !" on its own means if only I'd known, and "si seulement" makes it stronger: "Si seulement j'avais su !".`,
      },
      {
        q: `Is "j'eusse aimé" correct?`,
        a: `It is the literary second form of the past conditional, identical in form to the pluperfect subjunctive. You will meet it in classic literature and very formal writing; use "j'aurais aimé" yourself.`,
      },
    ],
    related: ["french-si-clauses", "french-plus-que-parfait", "french-past-subjunctive", "reported-speech"],
    lessons: [
      "b2-circuit-comme-si",
      "b2-si-clauses-in-depth-2",
      "b2-conditionnel-passe-1",
      "b2-conditionnel-passe-2",
      "b2-fix-paragraph-si-jaurais-su",
      "b2-regrets-reproaches",
    ],
  },
  {
    slug: "reported-speech",
    title: "Reported Speech in French: Il a dit que... and Tense Changes",
    description:
      "How to report statements in French: when tenses shift (il a dit qu'il viendrait), pronoun and time-marker changes (le lendemain, la veille), reporting verbs, and dire que vs dire de.",
    level: "B2",
    intro: [
      `Reported speech ("le discours indirect") turns someone's words into a clause introduced by a verb like "dire", "expliquer" or "annoncer": "Je suis fatigué" becomes "Il dit qu'il est fatigué". The mechanics are close to English, with two differences that cause most mistakes: "que" can never be dropped, and the tense rules are applied more strictly.`,
      `If the reporting verb is in the present or future, nothing shifts: "Il dit qu'il viendra". If it is in a past tense, the reported verbs move one step back: present → imparfait, passé composé → plus-que-parfait, futur → conditionnel. "Il a dit qu'il viendrait".`,
      `Reporting also changes the point of view: pronouns, possessives and time words have to be adapted to the new speaker and moment, exactly as in English (tomorrow becoming the next day).`,
    ],
    sections: [
      {
        heading: "Reporting verb in the present: no change",
        body: [
          `With "il dit que", "elle explique que", "ils annoncent que" in the present (or future), keep the tenses of the original words; only pronouns and possessives change. "Que" is compulsory: English he says he's coming drops that, French never drops "que".`,
        ],
        examples: [
          { fr: "« Je suis malade. » → Elle dit qu'elle est malade.", en: "She says she's ill." },
          { fr: "« J'ai perdu mes clés. » → Il dit qu'il a perdu ses clés.", en: "He says he's lost his keys." },
          { fr: "« Nous partirons demain. » → Ils disent qu'ils partiront demain.", en: "They say they'll leave tomorrow." },
          { fr: "Le ministre affirme que la réforme sera votée.", en: "The minister states that the reform will be passed." },
        ],
      },
      {
        heading: "Reporting verb in the past: the backshift",
        body: [
          `After "il a dit que", "elle a expliqué que", "il disait que", the tenses of the original words shift back, as in English. The present becomes imparfait, the passé composé becomes plus-que-parfait, the future becomes conditional, the futur antérieur becomes conditionnel passé, and "aller" + infinitive becomes "allait" + infinitive.`,
          `The imparfait, plus-que-parfait, conditional and subjunctive do not change. In speech, French speakers sometimes skip the shift when the fact is still true ("il m'a dit qu'il habite à Lyon"), but the shifted form is always correct and expected in writing.`,
        ],
        table: {
          headers: ["Direct speech", "Reported after a past verb"],
          rows: [
            ["présent: « Je suis prêt. »", "imparfait: il a dit qu'il était prêt"],
            ["passé composé: « J'ai fini. »", "plus-que-parfait: il a dit qu'il avait fini"],
            ["futur: « Je viendrai. »", "conditionnel: il a dit qu'il viendrait"],
            ["futur proche: « Je vais partir. »", "imparfait d'aller: il a dit qu'il allait partir"],
            ["futur antérieur: « J'aurai fini. »", "conditionnel passé: il a dit qu'il aurait fini"],
            ["imparfait: « J'étais seul. »", "unchanged: il a dit qu'il était seul"],
          ],
        },
        examples: [
          { fr: "Elle m'a dit qu'elle était fatiguée.", en: "She told me she was tired." },
          { fr: "Il a expliqué qu'il avait raté son train.", en: "He explained that he had missed his train." },
          { fr: "Ils ont promis qu'ils nous aideraient.", en: "They promised they would help us." },
          { fr: "Tu m'avais dit que tu allais changer de travail.", en: "You'd told me you were going to change jobs." },
          { fr: "Elle a annoncé qu'elle aurait terminé avant l'été.", en: "She announced she would have finished before the summer." },
        ],
      },
      {
        heading: "Time and place markers",
        body: [
          `When the original moment is over, time words are recalculated from the original speaker's day: "aujourd'hui" → "ce jour-là", "hier" → "la veille", "demain" → "le lendemain", "la semaine prochaine" → "la semaine suivante", "il y a deux jours" → "deux jours plus tôt", "maintenant" → "à ce moment-là", "ici" → "là".`,
          `If you report something said today about today, keep the ordinary words: "Il m'a dit ce matin qu'il viendrait demain" is natural if tomorrow is still tomorrow.`,
        ],
        table: {
          headers: ["Direct speech", "Reported (past context)"],
          rows: [
            ["aujourd'hui", "ce jour-là"],
            ["hier", "la veille"],
            ["demain", "le lendemain"],
            ["la semaine dernière", "la semaine précédente"],
            ["la semaine prochaine", "la semaine suivante"],
            ["dans trois jours", "trois jours plus tard"],
          ],
        },
        examples: [
          { fr: "Il a dit qu'il partirait le lendemain.", en: "He said he would leave the next day." },
          { fr: "Elle m'a raconté qu'elle avait vu Paul la veille.", en: "She told me she had seen Paul the day before." },
          { fr: "Ils ont dit qu'ils n'étaient pas libres ce jour-là.", en: "They said they weren't free that day." },
          { fr: "Il m'a expliqué qu'il avait déménagé deux mois plus tôt.", en: "He explained he had moved two months earlier." },
        ],
      },
      {
        heading: `Reporting verbs, and "dire que" vs "dire de"`,
        body: [
          `"Dire" is fine, but a precise reporting verb makes your French richer and conveys attitude: "affirmer" (state), "prétendre" (claim, often doubtful), "avouer" (confess), "admettre" (admit), "nier" (deny), "promettre" (promise), "ajouter" (add), "expliquer", "annoncer", "se plaindre" (complain), "répondre".`,
          `"Dire que" + indicative reports a statement; "dire de" + infinitive reports an order or advice: "Il m'a dit qu'il partait" (he told me he was leaving) vs "Il m'a dit de partir" (he told me to leave). Note "il m'a dit", never "il a dit à moi".`,
        ],
        examples: [
          { fr: "Il prétend qu'il n'était pas au courant.", en: "He claims he didn't know." },
          { fr: "Elle a avoué qu'elle avait menti.", en: "She confessed she had lied." },
          { fr: "Le suspect nie avoir volé la voiture.", en: "The suspect denies stealing the car." },
          { fr: "Il s'est plaint que le service était trop lent.", en: "He complained that the service was too slow." },
          { fr: "Le médecin m'a dit de rester au lit.", en: "The doctor told me to stay in bed." },
          { fr: "Elle m'a dit qu'elle restait au lit.", en: "She told me she was staying in bed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il a dit il viendrait.",
        right: "Il a dit qu'il viendrait.",
        why: `English often drops that; French never drops "que".`,
      },
      {
        wrong: "Elle a dit qu'elle viendra.",
        right: "Elle a dit qu'elle viendrait.",
        why: `After a past reporting verb, the future becomes the conditional. (Speakers sometimes keep the future if the event is still to come, but the conditional is the standard.)`,
      },
      {
        wrong: "Il a dit à moi qu'il était fatigué.",
        right: "Il m'a dit qu'il était fatigué.",
        why: `"À" + person becomes an indirect object pronoun before the verb: "il m'a dit", "il lui a dit".`,
      },
      {
        wrong: "Il m'a dit que je pars.",
        right: "Il m'a dit de partir.",
        why: `To report a command, use "dire de" + infinitive, not "dire que" + indicative.`,
      },
      {
        wrong: "Elle a dit qu'elle partirait demain. (said last month)",
        right: "Elle a dit qu'elle partirait le lendemain.",
        why: `When the original moment is in the past, "demain" becomes "le lendemain".`,
      },
    ],
    faqs: [
      {
        q: "Is the backshift compulsory?",
        a: `In writing and exams, yes. In conversation, speakers often keep the present for something still true ("il m'a dit qu'il est végétarien"), and that is acceptable. The shifted form is never wrong.`,
      },
      {
        q: `What happens to the subjunctive and conditional?`,
        a: `They stay as they are. "Il faut que tu partes" becomes "Il a dit qu'il fallait que je parte" (only "faut" shifts, the subjunctive stays). "Je voudrais venir" becomes "Il a dit qu'il voudrait venir".`,
      },
      {
        q: `How do I report questions?`,
        a: `With "demander si" or a question word, without inversion or "est-ce que": "Il m'a demandé si je venais". See the guide on indirect questions.`,
      },
    ],
    related: ["indirect-questions", "conditionnel-passe", "french-plus-que-parfait"],
    lessons: [
      "b2-reported-speech-1",
      "b2-circuit-time-markers",
      "b2-reporting-verbs",
      "b2-choose-explain-dire-que-dire-de",
      "b2-reported-speech-2",
    ],
  },
  {
    slug: "indirect-questions",
    title: "Indirect Questions and Reported Commands: Il m'a demandé si...",
    description:
      "How to report questions and orders in French: demander si, ce que and ce qui instead of qu'est-ce que, no inversion or est-ce que, tense shifts, and dire / demander de + infinitive.",
    level: "B2",
    intro: [
      `An indirect question is a question embedded in a sentence: "Il m'a demandé où j'habitais", "Je ne sais pas si elle viendra", "Dis-moi ce que tu veux". You use them constantly, not only when reporting what someone asked but also to ask politely ("Pourriez-vous me dire où se trouve la gare ?").`,
      `Three changes turn a direct question into an indirect one: word order goes back to normal (no inversion, no "est-ce que"), yes/no questions are introduced by "si", and "qu'est-ce que" / "qu'est-ce qui" become "ce que" / "ce qui". After a past verb, the tenses shift exactly as in reported statements.`,
      `Reported commands follow a different pattern: "dire", "demander", "conseiller" or "ordonner" + "de" + infinitive. "Viens !" becomes "Il m'a dit de venir".`,
    ],
    sections: [
      {
        heading: `Yes/no questions: "si"`,
        body: [
          `A question that expects yes or no is reported with "si" (whether, if). "Si" elides before "il" and "ils" only: "s'il", "s'ils". The word order is the normal statement order, with no inversion and no "est-ce que".`,
          `Remember that this "si" means whether, not a condition, so it can be followed by the future or the conditional: "Je me demande s'il viendra".`,
        ],
        examples: [
          { fr: "« Tu viens ce soir ? » → Il m'a demandé si je venais ce soir.", en: "He asked me if I was coming tonight." },
          { fr: "« Est-ce que vous avez réservé ? » → Elle veut savoir si vous avez réservé.", en: "She wants to know whether you've booked." },
          { fr: "Je ne sais pas s'il est au courant.", en: "I don't know whether he knows." },
          { fr: "Je me demande si elle acceptera.", en: "I wonder whether she'll accept." },
          { fr: "Ils m'ont demandé si j'avais déjà travaillé à l'étranger.", en: "They asked me if I had ever worked abroad." },
        ],
      },
      {
        heading: `"Qu'est-ce que" → "ce que", "qu'est-ce qui" → "ce qui"`,
        body: [
          `What in an indirect question is "ce que" (object) or "ce qui" (subject). "Qu'est-ce que tu fais ?" becomes "Il m'a demandé ce que je faisais"; "Qu'est-ce qui se passe ?" becomes "Je ne sais pas ce qui se passe". "Que fais-tu ?" (inverted "que") also becomes "ce que".`,
          `After a preposition, "quoi" stays: "À quoi tu penses ?" → "Il m'a demandé à quoi je pensais".`,
        ],
        table: {
          headers: ["Direct question", "Indirect question"],
          rows: [
            ["Tu viens ? / Est-ce que tu viens ?", "... si tu viens"],
            ["Qu'est-ce que tu veux ? / Que veux-tu ?", "... ce que tu veux"],
            ["Qu'est-ce qui se passe ?", "... ce qui se passe"],
            ["Où vas-tu ? / Tu vas où ?", "... où tu vas"],
            ["Quand est-ce qu'il arrive ?", "... quand il arrive"],
            ["À quoi tu penses ?", "... à quoi tu penses"],
          ],
        },
        examples: [
          { fr: "Dis-moi ce que tu en penses.", en: "Tell me what you think about it." },
          { fr: "Elle m'a demandé ce que je faisais dans la vie.", en: "She asked me what I did for a living." },
          { fr: "Personne ne comprend ce qui s'est passé.", en: "Nobody understands what happened." },
          { fr: "Il voulait savoir ce qui me plaisait dans ce métier.", en: "He wanted to know what I liked about the job." },
          { fr: "Je me demande à quoi elle pense.", en: "I wonder what she's thinking about." },
        ],
      },
      {
        heading: "Question words stay, word order changes",
        body: [
          `"Où", "quand", "comment", "pourquoi", "combien", "qui" and "quel" are kept, but the question becomes a statement: subject + verb. "Où vas-tu ?" → "où tu vas", "Pourquoi est-ce qu'il est parti ?" → "pourquoi il est parti". English does exactly the same (where are you going? → where you were going).`,
          `In formal writing, a short noun subject can be placed after the verb after "où", "quand" and "comment": "Je ne sais pas où habite Paul" (or "où Paul habite"). This is stylistic inversion, not question inversion.`,
          `Polite requests often use this structure: "Pourriez-vous me dire où se trouve la mairie ?", "Savez-vous à quelle heure part le train ?".`,
        ],
        examples: [
          { fr: "« Où habites-tu ? » → Il m'a demandé où j'habitais.", en: "He asked me where I lived." },
          { fr: "Je ne comprends pas pourquoi elle est fâchée.", en: "I don't understand why she's angry." },
          { fr: "Pouvez-vous me dire combien coûte ce billet ?", en: "Can you tell me how much this ticket costs?" },
          { fr: "On ne sait pas encore quand les travaux commenceront.", en: "We don't know yet when the work will start." },
          { fr: "Elle m'a demandé quel âge j'avais.", en: "She asked me how old I was." },
        ],
      },
      {
        heading: `Reported commands: "dire de" + infinitive`,
        body: [
          `An order, request or piece of advice is reported with "dire", "demander", "conseiller", "ordonner", "interdire", "proposer" or "rappeler" + "à" + person + "de" + infinitive. The person usually becomes a pronoun: "Il m'a dit de me taire".`,
          `In the negative, "ne pas" goes together before the infinitive: "Ne bouge pas !" → "Il m'a dit de ne pas bouger". "Demander que" + subjunctive also exists, especially in formal contexts: "Le directeur demande que chacun soit présent".`,
        ],
        examples: [
          { fr: "« Viens ici ! » → Elle m'a dit de venir.", en: "She told me to come." },
          { fr: "« Ne touchez à rien ! » → Le policier nous a dit de ne toucher à rien.", en: "The police officer told us not to touch anything." },
          { fr: "Mon médecin m'a conseillé de faire du sport.", en: "My doctor advised me to exercise." },
          { fr: "Je lui ai demandé de m'appeler ce soir.", en: "I asked him to call me tonight." },
          { fr: "La direction demande que tous les employés soient présents.", en: "Management requests that all staff attend." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il m'a demandé est-ce que je venais.",
        right: "Il m'a demandé si je venais.",
        why: `"Est-ce que" belongs only in direct questions. Indirect yes/no questions use "si".`,
      },
      {
        wrong: "Je ne sais pas qu'est-ce que tu veux.",
        right: "Je ne sais pas ce que tu veux.",
        why: `In an indirect question, "qu'est-ce que" becomes "ce que". The direct form is common in casual speech but non-standard.`,
      },
      {
        wrong: "Elle m'a demandé où allais-je.",
        right: "Elle m'a demandé où j'allais.",
        why: `No question inversion in indirect questions: use subject + verb.`,
      },
      {
        wrong: "Il m'a demandé si il pouvait venir.",
        right: "Il m'a demandé s'il pouvait venir.",
        why: `"Si" elides before "il" and "ils".`,
      },
      {
        wrong: "Il m'a dit que je ne bouge pas.",
        right: "Il m'a dit de ne pas bouger.",
        why: `Report a command with "de" + infinitive, and put "ne pas" together before the infinitive.`,
      },
    ],
    faqs: [
      {
        q: `"Demander" or "poser une question"?`,
        a: `"Demander" introduces the reported question itself ("il m'a demandé si..."). "Poser une question" means to ask a question, without reporting its content: "Il m'a posé une question difficile". Never "demander une question".`,
      },
      {
        q: `Do tenses shift in indirect questions?`,
        a: `Yes, exactly as in statements, after a past reporting verb: "Tu viendras ?" → "Il m'a demandé si je viendrais"; "Tu as fini ?" → "Il m'a demandé si j'avais fini".`,
      },
      {
        q: `"Demander à" or "demander de"?`,
        a: `"Demander à quelqu'un de faire quelque chose": "J'ai demandé à Paul de m'aider". "Demander à" + infinitive with no other person means asking permission: "Il a demandé à partir" (he asked if he could leave).`,
      },
    ],
    related: ["reported-speech", "ce-qui-ce-que-ce-dont", "french-si-clauses"],
    lessons: [
      "b2-indirect-questions-commands",
      "b2-error-hunt-reported-speech",
      "b2-qa-il-ma-demande-si",
      "b2-quick-round-backshift",
    ],
  },
  {
    slug: "gerondif-and-present-participle",
    title: "The Gérondif and the Present Participle: En faisant, Ayant fait",
    description:
      "How to form and use the French gérondif (en + -ant) and present participle, tout en for contrast, participle vs adjective (fatiguant / fatigant), and how to translate English -ing.",
    level: "B2",
    intro: [
      `The French "-ant" form looks like the English -ing, but it is used far less. English -ing turns up everywhere (after prepositions, as a noun, for actions in progress), while French "-ant" has two precise jobs: the gérondif ("en mangeant", while eating / by eating) and the present participle ("une personne parlant trois langues", a person speaking three languages).`,
      `The gérondif is everyday French, spoken and written. The present participle without "en" is mostly written and formal. And for many English -ing forms French uses something else entirely: an infinitive ("avant de partir", "j'aime nager"), a noun, or "être en train de".`,
    ],
    sections: [
      {
        heading: `Formation: the "nous" stem + "-ant"`,
        body: [
          `Take the "nous" form of the present, remove "-ons" and add "-ant": "nous parlons" → "parlant", "nous finissons" → "finissant", "nous faisons" → "faisant", "nous prenons" → "prenant". Spelling changes in "nous" carry over: "mangeant", "commençant".`,
          `Only three verbs are irregular: "être" → "étant", "avoir" → "ayant", "savoir" → "sachant". The compound form, for an earlier action, is "ayant" / "étant" + past participle: "ayant fini", "étant parti".`,
        ],
        examples: [
          { fr: "Il est tombé en descendant l'escalier.", en: "He fell going down the stairs." },
          { fr: "J'ai appris l'anglais en regardant des séries.", en: "I learnt English by watching series." },
          { fr: "Étant malade, elle n'a pas pu venir.", en: "Being ill, she couldn't come." },
          { fr: "Ayant fini son travail, il est rentré chez lui.", en: "Having finished his work, he went home." },
          { fr: "Ne sachant pas quoi dire, je me suis tu.", en: "Not knowing what to say, I kept quiet." },
        ],
      },
      {
        heading: `The gérondif: "en" + "-ant"`,
        body: [
          `The gérondif ("en" + "-ant") describes an action done by the subject of the main verb at the same time. Depending on context it expresses simultaneity (while), manner or means (by), condition (if), or cause.`,
          `Its subject must be the same as the main verb's. "En sortant, il pleuvait" is wrong because the rain isn't going out; say "Quand je suis sorti, il pleuvait". The gérondif never changes form.`,
        ],
        table: {
          headers: ["Meaning", "Example", "English"],
          rows: [
            ["simultaneity", "Je chante en cuisinant.", "I sing while I cook."],
            ["manner / means", "Il a réussi en travaillant dur.", "He succeeded by working hard."],
            ["condition", "En partant maintenant, tu arriveras à l'heure.", "If you leave now, you'll be on time."],
            ["cause", "Elle s'est blessée en tombant.", "She hurt herself falling."],
          ],
        },
        examples: [
          { fr: "Ne parle pas en mangeant.", en: "Don't talk while you're eating." },
          { fr: "C'est en forgeant qu'on devient forgeron.", en: "Practice makes perfect." },
          { fr: "En prenant le métro, tu gagneras du temps.", en: "If you take the metro, you'll save time." },
          { fr: "Elle a trouvé du travail en envoyant des dizaines de CV.", en: "She found a job by sending out dozens of CVs." },
          { fr: "Je l'ai croisé en sortant de la boulangerie.", en: "I bumped into him as I was leaving the bakery." },
        ],
      },
      {
        heading: `"Tout en": while, and yet`,
        body: [
          `"Tout en" + "-ant" stresses that two actions happen at the same time ("Elle écoutait tout en prenant des notes"), and often adds a contrast or concession, like although or while still: "Tout en étant riche, il vit très simplement".`,
        ],
        examples: [
          { fr: "Il travaille tout en écoutant de la musique.", en: "He works while listening to music." },
          { fr: "Tout en reconnaissant ses qualités, je ne suis pas d'accord avec lui.", en: "While I recognise his qualities, I don't agree with him." },
          { fr: "Elle sourit tout en sachant que c'est fini.", en: "She smiles even though she knows it's over." },
          { fr: "Tout en étant très occupé, il trouve du temps pour sa famille.", en: "Though very busy, he finds time for his family." },
        ],
      },
      {
        heading: "Present participle vs verbal adjective",
        body: [
          `Without "en", the present participle replaces a relative clause or gives a cause, mostly in writing: "les personnes souhaitant s'inscrire" (= "qui souhaitent"), "Les trains circulant sur cette ligne". It is invariable, like a verb.`,
          `Many "-ant" forms are also adjectives ("adjectifs verbaux") that describe a quality and agree: "une soirée intéressante", "des enfants obéissants". Some pairs differ in spelling: the participle keeps the verb's spelling and the adjective changes. "Fatiguant" (tiring someone, participle) vs "fatigant" (tiring, adjective); "convainquant" / "convaincant"; "précédant" / "précédent"; "différant" / "différent"; "négligeant" / "négligent".`,
        ],
        table: {
          headers: ["Participle (verb, invariable)", "Adjective (agrees)"],
          rows: [
            ["fatiguant", "fatigant(e)(s)"],
            ["convainquant", "convaincant(e)(s)"],
            ["précédant", "précédent(e)(s)"],
            ["différant", "différent(e)(s)"],
            ["négligeant", "négligent(e)(s)"],
          ],
        },
        examples: [
          { fr: "Les personnes souhaitant participer doivent s'inscrire.", en: "People wishing to take part must sign up." },
          { fr: "C'est un travail très fatigant.", en: "It's very tiring work." },
          { fr: "En fatiguant ses joueurs, l'entraîneur a perdu le match.", en: "By tiring out his players, the coach lost the match." },
          { fr: "Ses arguments sont convaincants.", en: "Her arguments are convincing." },
          { fr: "La semaine précédant les examens, je dors mal.", en: "The week before exams, I sleep badly." },
        ],
      },
      {
        heading: "Translating English -ing",
        body: [
          `Most English -ing forms are not "-ant" in French. After a preposition, French uses an infinitive ("avant de partir", "sans rien dire", "au lieu de travailler"; but "après avoir mangé"). As a subject or object, use the infinitive or a noun ("Nager est bon pour la santé", "J'aime lire"). For an action in progress, use a simple present or "être en train de": "Je suis en train de travailler" (I'm working right now). After verbs of perception, use the infinitive: "Je l'ai vu partir".`,
        ],
        examples: [
          { fr: "Il est parti sans dire au revoir.", en: "He left without saying goodbye." },
          { fr: "J'adore faire la cuisine.", en: "I love cooking." },
          { fr: "Fumer tue.", en: "Smoking kills." },
          { fr: "Je ne peux pas te parler, je suis en train de conduire.", en: "I can't talk, I'm driving." },
          { fr: "Je l'ai entendue chanter.", en: "I heard her singing." },
          { fr: "Merci d'être venus.", en: "Thank you for coming." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je suis travaillant.",
        right: "Je travaille. / Je suis en train de travailler.",
        why: `French has no progressive tense with "être" + "-ant". Use the simple present or "être en train de".`,
      },
      {
        wrong: "Merci pour venir.",
        right: "Merci d'être venu.",
        why: `Thank you for coming is "merci de" + infinitive, and since the coming has already happened, the past infinitive "d'être venu".`,
      },
      {
        wrong: "En arrivant à la gare, le train était parti.",
        right: "En arrivant à la gare, j'ai vu que le train était parti.",
        why: `The gérondif must have the same subject as the main verb. The train didn't arrive at the station.`,
      },
      {
        wrong: "Ce voyage était très fatiguant.",
        right: "Ce voyage était très fatigant.",
        why: `As an adjective the spelling is "fatigant"; "fatiguant" is the verb form.`,
      },
      {
        wrong: "J'aime nageant.",
        right: "J'aime nager.",
        why: `After verbs of liking, French uses the infinitive.`,
      },
    ],
    faqs: [
      {
        q: "Is the gérondif formal?",
        a: `No, it is used constantly in speech: "en rentrant", "en attendant", "en passant". The present participle without "en" ("souhaitant", "ayant") is the formal, written one.`,
      },
      {
        q: `What's the difference between "en partant" and "partant"?`,
        a: `"En partant" is a gérondif and must refer to the subject of the main verb. "Partant" alone is a participle that can describe a noun and belongs to written style: "les trains partant de Lyon".`,
      },
      {
        q: `Can I put a pronoun in a gérondif?`,
        a: `Yes, between "en" and the verb: "en le voyant" (when I saw him), "en y pensant", "en s'excusant". The negative is "en ne... pas": "en ne disant rien".`,
      },
    ],
    related: ["causative-faire-and-laisser", "futur-anterieur", "french-connectors"],
    lessons: [
      "b2-gerondif-participe-present-1",
      "b2-minimal-pairs-en-tout-en",
      "b2-choose-explain-translating-ing",
      "b2-gerondif-participe-present-2",
      "b2-contrast-fatiguant-fatigant",
    ],
  },
  {
    slug: "causative-faire-and-laisser",
    title: "Causative Faire and Laisser, and Verbs of Change",
    description:
      "How to say have something done and make someone do in French (faire réparer, faire rire), where the pronouns go, laisser + infinitive, and how to say become and make + adjective (devenir, rendre, se mettre à).",
    level: "B2",
    intro: [
      `English has several ways to express causing: I had my car repaired, she made me laugh, they got him to sign. French uses one verb for all of them: "faire" + infinitive. "J'ai fait réparer ma voiture", "Elle m'a fait rire", "Ils lui ont fait signer le contrat".`,
      `The construction is tight: "faire" and the infinitive stay together, and any object pronouns go before "faire". Its counterpart "laisser" + infinitive means to let: "Laisse-moi parler".`,
      `This guide also covers the verbs English speakers need for change, where English uses make, get and become very freely: "rendre" + adjective (it makes me happy: "ça me rend heureux"), "devenir", "se mettre à", "tomber malade", and the "-ir" verbs built on adjectives ("grossir", "vieillir").`,
    ],
    sections: [
      {
        heading: `"Faire" + infinitive: having something done`,
        body: [
          `To say that you have a service done by someone else, put "faire" in the right tense and add the infinitive: "Je fais construire une maison" (I'm having a house built). The person who does the work can be added with "par": "J'ai fait réparer la voiture par un garagiste".`,
          `"Se faire" + infinitive is used when the action is done to yourself: "Je me suis fait couper les cheveux". "Faire faire" (to have something done) is perfectly correct French: "Je vais faire faire une copie".`,
        ],
        examples: [
          { fr: "Nous faisons repeindre la cuisine.", en: "We're having the kitchen repainted." },
          { fr: "Elle a fait venir un plombier.", en: "She got a plumber in." },
          { fr: "Il faut que je fasse vérifier mes freins.", en: "I need to have my brakes checked." },
          { fr: "Je me suis fait faire une nouvelle paire de lunettes.", en: "I had a new pair of glasses made." },
          { fr: "Ils ont fait faire des travaux dans leur appartement.", en: "They had work done on their flat." },
        ],
      },
      {
        heading: `Making someone do something`,
        body: [
          `"Faire" + infinitive also means to make or get someone to do something. If the infinitive has no object, the person is a direct object: "Il fait rire les enfants" → "Il les fait rire". If the infinitive has its own object, the person becomes indirect, with "à" (or "par"): "Il fait lire le texte aux élèves" → "Il leur fait lire le texte".`,
          `Pronouns always go before "faire", never before the infinitive: "Je la fais réparer", "Je le lui ai fait lire". In the affirmative imperative they follow "faire": "Fais-le entrer".`,
          `In compound tenses, "fait" followed by an infinitive never agrees: "la voiture que j'ai fait réparer", "elle s'est fait opérer".`,
        ],
        examples: [
          { fr: "Ce film m'a fait pleurer.", en: "That film made me cry." },
          { fr: "Le prof nous a fait réécrire la rédaction.", en: "The teacher made us rewrite the essay." },
          { fr: "J'ai fait signer le contrat au client.", en: "I got the client to sign the contract." },
          { fr: "Je le lui ai fait signer.", en: "I got him to sign it." },
          { fr: "Fais-la entrer, s'il te plaît.", en: "Show her in, please." },
          { fr: "Les lettres que j'ai fait envoyer sont arrivées.", en: "The letters I had sent have arrived." },
        ],
      },
      {
        heading: `"Laisser" + infinitive: letting`,
        body: [
          `"Laisser" + infinitive means to let or allow. It works like "faire" for pronouns ("Laisse-moi parler", "Je les ai laissés partir"), but the noun can also come between "laisser" and the infinitive: "Laisse les enfants jouer" or "Laisse jouer les enfants".`,
          `The contrast with "faire" is the classic exam pair: "Il m'a fait partir" (he made me leave) vs "Il m'a laissé partir" (he let me leave). "Se laisser" + infinitive means to let oneself be: "Ne te laisse pas faire !" (don't let them push you around).`,
        ],
        examples: [
          { fr: "Laisse-moi finir ma phrase !", en: "Let me finish my sentence!" },
          { fr: "Mes parents ne me laissaient pas sortir le soir.", en: "My parents didn't let me go out in the evenings." },
          { fr: "Laissez les enfants jouer dehors.", en: "Let the children play outside." },
          { fr: "Il m'a laissé partir plus tôt.", en: "He let me leave early." },
          { fr: "Elle s'est laissé convaincre.", en: "She let herself be persuaded." },
        ],
      },
      {
        heading: `Verbs of change: "devenir", "rendre", "se mettre à"`,
        body: [
          `To become is "devenir" ("il est devenu médecin", with "être" in compound tenses). To make + adjective is "rendre" + adjective, never "faire" + adjective: "Ça me rend triste" (it makes me sad), "Le soleil rend les gens heureux".`,
          `To start doing, especially suddenly, is "se mettre à" + infinitive: "Il s'est mis à pleuvoir". Other key expressions: "se mettre en colère" (to get angry), "tomber malade / amoureux" (to fall ill / in love), "finir par" + infinitive (to end up doing), "changer de" + noun without article ("changer d'avis", "changer de travail"), "se transformer en".`,
          `French also has a set of "-ir" verbs formed on adjectives that express a change of state: "grossir" (to put on weight), "maigrir", "vieillir", "rajeunir", "grandir", "rougir", "pâlir", "brunir".`,
        ],
        examples: [
          { fr: "Ce travail me rend fou.", en: "This job is driving me mad." },
          { fr: "Elle est devenue célèbre du jour au lendemain.", en: "She became famous overnight." },
          { fr: "Le bébé s'est mis à pleurer.", en: "The baby started crying." },
          { fr: "Il a fini par accepter.", en: "He ended up accepting." },
          { fr: "J'ai changé d'avis.", en: "I've changed my mind." },
          { fr: "Tu as grandi depuis l'année dernière !", en: "You've grown since last year!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "J'ai eu ma voiture réparée.",
        right: "J'ai fait réparer ma voiture.",
        why: `English have something done is "faire" + infinitive in French.`,
      },
      {
        wrong: "Je fais la réparer.",
        right: "Je la fais réparer.",
        why: `With causative "faire", pronouns go before "faire", not before the infinitive.`,
      },
      {
        wrong: "Ça me fait heureux.",
        right: "Ça me rend heureux.",
        why: `Make + adjective is "rendre" + adjective. "Faire" + adjective is not possible.`,
      },
      {
        wrong: "Elle s'est faite opérer.",
        right: "Elle s'est fait opérer.",
        why: `"Fait" followed by an infinitive never agrees.`,
      },
      {
        wrong: "Il a devenu professeur.",
        right: "Il est devenu professeur.",
        why: `"Devenir" takes "être" in compound tenses.`,
      },
    ],
    faqs: [
      {
        q: `"Faire faire" sounds odd. Is it really correct?`,
        a: `Yes. The first "faire" is causative, the second is the action: "Je fais faire un gâteau pour son anniversaire" (I'm having a cake made). It is perfectly standard.`,
      },
      {
        q: `Does "laissé" agree before an infinitive?`,
        a: `Since the 1990 spelling recommendations, "laissé" + infinitive can stay invariable, like "fait": "Je les ai laissé partir". The older rule (agreement when the object performs the action: "je les ai laissés partir") is still widely taught; both are accepted.`,
      },
      {
        q: `How do I say to get someone to do something?`,
        a: `Usually with "faire": "J'ai fait venir le médecin". If persuasion is involved, use "convaincre" or "persuader de": "Je l'ai convaincu de venir".`,
      },
    ],
    related: ["french-passive-voice", "gerondif-and-present-participle", "french-imperative-with-pronouns"],
    lessons: [
      "b2-causatives-change-1",
      "b2-pattern-faire-faire",
      "b2-minimal-pairs-faire-laisser",
      "b2-causatives-change-2",
      "b2-circuit-devenir-rendre-se-mettre",
      "b2-choose-explain-which-change-verb",
    ],
  },
  {
    slug: "french-connectors",
    title: "French Connectors: Cependant, Pourtant, Donc, En revanche",
    description:
      "The French linking words you need for Upper-intermediate writing and debate: contrast (cependant, pourtant, en revanche), cause (car, puisque, comme), consequence (donc, par conséquent, c'est pourquoi), addition and conclusion, with register and placement.",
    level: "B2",
    intro: [
      `Connectors ("connecteurs logiques") are what make an argument easy to follow: but, however, so, therefore, moreover. At the Upper-intermediate level you are expected to move beyond "mais", "parce que" and "alors" and choose connectors that are precise and suit the register. In the DELF B2, the "essai argumenté" is marked partly on this.`,
      `French connectors differ from English ones in three ways: some belong strictly to speech ("par contre", "du coup") or to writing ("toutefois", "néanmoins", "or"); several have a fixed position (for example, "car" always opens its clause, while "donc" can sit after the verb); and a few near-synonyms carry different logic ("pourtant" vs "en revanche").`,
    ],
    sections: [
      {
        heading: "Contrast and concession",
        body: [
          `"Mais" is the basic but. "Cependant", "toutefois" and "néanmoins" mean however and are more formal; they can start a sentence or follow the verb ("Il a, cependant, refusé"). "Pourtant" means and yet: it signals that something is surprising given what came before. "En revanche" (and informal "par contre") means on the other hand: it compares two different things without any surprise.`,
          `"Certes... mais" (admittedly... but) concedes a point before countering it. "Quand même" is the spoken equivalent of all the same. "Or" is a written connector that introduces a new, decisive fact (now, yet): "Il dit qu'il était chez lui. Or, on l'a vu en ville".`,
        ],
        examples: [
          { fr: "Il a beaucoup travaillé ; pourtant, il a échoué.", en: "He worked hard; and yet he failed." },
          { fr: "Le centre-ville est cher. En revanche, la banlieue est abordable.", en: "The city centre is expensive. On the other hand, the suburbs are affordable." },
          { fr: "Ce projet est ambitieux ; toutefois, il reste réalisable.", en: "This project is ambitious; it nevertheless remains feasible." },
          { fr: "Certes, la solution est coûteuse, mais elle est efficace.", en: "Admittedly the solution is expensive, but it works." },
          { fr: "Il pleuvait, mais on est sortis quand même.", en: "It was raining, but we went out all the same." },
        ],
      },
      {
        heading: `Cause: "car", "puisque", "comme", "étant donné que"`,
        body: [
          `"Parce que" answers why. "Car" (for) gives an explanation, is more written, and never starts a sentence. "Puisque" (since) gives a cause the listener already knows or must accept. "Comme" (as) gives a cause and always starts the sentence. "Étant donné que" and "vu que" (given that) are common in argument, "vu que" being more casual.`,
          `For a cause expressed by a noun, use "grâce à" for a positive cause and "à cause de" for a negative one: "grâce à toi" (thanks to you), "à cause de la grève" (because of the strike). "En raison de" is the neutral, formal version.`,
        ],
        examples: [
          { fr: "Je reste à la maison, car je suis malade.", en: "I'm staying home, as I'm ill." },
          { fr: "Puisque tu es là, aide-moi.", en: "Since you're here, help me." },
          { fr: "Comme il pleuvait, nous avons annulé le pique-nique.", en: "As it was raining, we cancelled the picnic." },
          { fr: "Étant donné que les prix augmentent, il faut agir.", en: "Given that prices are rising, we need to act." },
          { fr: "Grâce à ton aide, j'ai réussi.", en: "Thanks to your help, I passed." },
          { fr: "Le vol a été annulé en raison du mauvais temps.", en: "The flight was cancelled due to bad weather." },
        ],
      },
      {
        heading: `Consequence: "donc", "par conséquent", "c'est pourquoi"`,
        body: [
          `"Donc" (so) is neutral and can follow the verb ("Il est donc parti") or start the clause. "Alors" is the spoken so. "Par conséquent", "c'est pourquoi" and "c'est la raison pour laquelle" are formal. "Si bien que" (so that, with the result that) links two clauses and takes the indicative.`,
          `"Ainsi" (thus) at the start of a sentence can trigger subject-verb inversion in very formal writing ("Ainsi a-t-il décidé de partir"), though "ainsi, il a décidé" is also correct.`,
        ],
        examples: [
          { fr: "Je pense, donc je suis.", en: "I think, therefore I am." },
          { fr: "Les loyers sont trop élevés ; par conséquent, beaucoup de jeunes partent.", en: "Rents are too high; as a result, many young people leave." },
          { fr: "Il était malade, c'est pourquoi il n'est pas venu.", en: "He was ill, which is why he didn't come." },
          { fr: "Elle a beaucoup révisé, si bien qu'elle a eu une excellente note.", en: "She revised a lot, so she got an excellent mark." },
          { fr: "Le train avait du retard, alors on a pris un taxi.", en: "The train was late, so we took a taxi." },
        ],
      },
      {
        heading: "Adding, structuring and concluding",
        body: [
          `To add: "de plus", "en outre" (formal), "par ailleurs" (moreover, also introduces a new angle), "d'ailleurs" (besides, by the way, supporting what you've just said). To confirm or explain: "en effet" (indeed, as it happens), which in French explains rather than just agrees.`,
          `To structure: "d'abord / ensuite / enfin", "d'une part... d'autre part", "premièrement / deuxièmement". To conclude: "en conclusion", "pour conclure", "bref" (in short, spoken), "en somme", "finalement" (in the end).`,
        ],
        examples: [
          { fr: "D'une part, c'est trop cher ; d'autre part, ce n'est pas pratique.", en: "On the one hand it's too expensive; on the other, it's not practical." },
          { fr: "Ce quartier est calme. De plus, il est bien desservi.", en: "This area is quiet. What's more, it has good transport links." },
          { fr: "Je ne viendrai pas. D'ailleurs, je n'ai pas été invité.", en: "I won't come. Besides, I wasn't invited." },
          { fr: "Il a refusé le poste. En effet, le salaire était trop bas.", en: "He turned the job down. The salary was, in fact, too low." },
          { fr: "Bref, c'était une soirée ratée.", en: "In short, the evening was a flop." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Car il pleuvait, nous sommes restés.",
        right: "Comme il pleuvait, nous sommes restés.",
        why: `"Car" can never start a sentence. To put the cause first, use "comme".`,
      },
      {
        wrong: "Il est riche. En revanche, il n'est pas heureux.",
        right: "Il est riche. Pourtant, il n'est pas heureux.",
        why: `You'd expect a rich man to be happy, so this is a surprising contrast: "pourtant". "En revanche" just compares two different things.`,
      },
      {
        wrong: "Par contre, je pense que la proposition est intéressante.",
        right: "En revanche, je pense que la proposition est intéressante.",
        why: `"Par contre" is accepted in speech but frowned upon in formal writing. Use "en revanche" in an essay.`,
      },
      {
        wrong: "En effet, je ne suis pas d'accord.",
        right: "En fait, je ne suis pas d'accord.",
        why: `"En effet" confirms or explains what was just said. To correct or contrast (actually), use "en fait".`,
      },
      {
        wrong: "À cause de toi, j'ai gagné !",
        right: "Grâce à toi, j'ai gagné !",
        why: `"À cause de" introduces a negative cause; for a positive one, use "grâce à".`,
      },
    ],
    faqs: [
      {
        q: `"Parce que" or "car"?`,
        a: `"Parce que" answers why and can start a reply ("Pourquoi ? — Parce que..."). "Car" adds a justification after the main clause and is more written. In conversation, "parce que" is more natural.`,
      },
      {
        q: `Is "du coup" acceptable?`,
        a: `In casual speech, very much so: it means so or as a result and is extremely common. In writing and in exams, replace it with "donc", "alors" or "par conséquent".`,
      },
      {
        q: `How do I punctuate connectors?`,
        a: `At the start of a sentence most connectors take a comma ("Cependant, ..."). Inside a sentence, a semicolon before and a comma after is the classic written choice ("...; pourtant, ..."). "Donc" placed after the verb usually takes no commas.`,
      },
    ],
    related: ["subjunctive-after-conjunctions", "emphasis-cleft-sentences-dislocation", "gerondif-and-present-participle"],
    lessons: [
      "b2-advanced-connectors-1",
      "b2-minimal-pairs-pourtant-en-revanche",
      "b2-circuit-cause-consequence",
      "b2-advanced-connectors-2",
      "b2-error-hunt-connectors",
      "b2-transformations-informal-to-formal",
    ],
  },
  {
    slug: "emphasis-cleft-sentences-dislocation",
    title: "Emphasis in French: C'est... qui, Dislocation and Ce que j'aime, c'est",
    description:
      "How French stresses a word without raising the voice: stressed pronouns (moi, je...), dislocation (ce film, je l'ai vu), c'est... qui / c'est... que with correct agreement, pseudo-clefts and exclamatives.",
    level: "B2",
    intro: [
      `English stresses a word with the voice: I didn't say that, She broke it. French word stress is weak and always falls at the end of a phrase, so French moves words instead. It puts the important element at the start or the end of the sentence and picks it up with a pronoun ("Ce film, je l'ai adoré"), or frames it with "c'est... qui / que" ("C'est elle qui l'a cassé").`,
      `These structures are not just stylistic decoration. Dislocation is the normal way to speak in everyday French, and clefts are the standard way to contrast or correct. Mastering them makes your French sound much more natural, and getting their agreements right ("c'est moi qui ai") makes it sound accurate.`,
    ],
    sections: [
      {
        heading: "Stressed pronouns and dislocation",
        body: [
          `To highlight a pronoun subject, add the stressed pronoun ("moi", "toi", "lui", "elle", "nous", "vous", "eux", "elles") at the start or the end: "Moi, je préfère le thé", "Il est fou, lui !".`,
          `To highlight a noun, place it at the start (left dislocation) or the end (right dislocation) of the sentence and repeat it with a pronoun in the clause: "Mon frère, je l'adore", "Je l'ai déjà vu, ce film". With "en" and "y" the same works: "Du café, j'en bois trois par jour", "À Paris, j'y vais souvent". Left dislocation announces the topic; right dislocation adds it as an afterthought.`,
        ],
        examples: [
          { fr: "Moi, je trouve ça ridicule.", en: "I think it's ridiculous." },
          { fr: "Ta sœur, je l'aime beaucoup.", en: "Your sister, I really like her." },
          { fr: "Je l'ai trouvé génial, ce livre.", en: "I thought that book was brilliant." },
          { fr: "Du chocolat, j'en mange tous les jours.", en: "Chocolate, I eat it every day." },
          { fr: "Les vacances, on en parle depuis des mois.", en: "We've been talking about the holidays for months." },
          { fr: "Eux, ils ne sont jamais à l'heure.", en: "They're never on time." },
        ],
      },
      {
        heading: `"C'est... qui" and "c'est... que"`,
        body: [
          `To single out one element, frame it with "c'est... qui" when it is the subject, and "c'est... que" for anything else. "C'est Marie qui a gagné" (it was Marie who won), "C'est ce livre que je cherchais" (that's the book I was looking for), "C'est demain que je pars" (it's tomorrow that I leave).`,
          `After "c'est moi qui", the verb agrees with the stressed pronoun: "c'est moi qui ai", "c'est toi qui as", "c'est nous qui sommes", "c'est vous qui avez". If the element has a preposition, keep it after "c'est": "C'est à toi que je parle", "C'est de lui qu'on parle".`,
        ],
        table: {
          headers: ["Neutral", "Emphasis"],
          rows: [
            ["J'ai raison.", "C'est moi qui ai raison."],
            ["Vous êtes en retard.", "C'est vous qui êtes en retard."],
            ["Je parle à toi.", "C'est à toi que je parle."],
            ["Je pars demain.", "C'est demain que je pars."],
            ["On a besoin de calme.", "C'est de calme qu'on a besoin."],
          ],
        },
        examples: [
          { fr: "C'est moi qui ai payé l'addition.", en: "I'm the one who paid the bill." },
          { fr: "C'est nous qui avons organisé la fête.", en: "We're the ones who organised the party." },
          { fr: "C'est à vous que je m'adresse.", en: "It's you I'm talking to." },
          { fr: "C'est en 1789 que la Révolution a commencé.", en: "It was in 1789 that the Revolution began." },
          { fr: "Ce sont eux qui ont raison. / C'est eux qui ont raison.", en: "They're the ones who are right. (formal / spoken)" },
        ],
      },
      {
        heading: `Pseudo-clefts: "ce qui..., c'est" / "ce que..., c'est"`,
        body: [
          `To build suspense or announce a topic, start with "ce qui", "ce que", "ce dont" or "ce à quoi" and reveal the key element after "c'est": "Ce qui m'inquiète, c'est le prix", "Ce que je veux, c'est partir", "Ce dont j'ai besoin, c'est d'un bon café", "Ce à quoi je pense, c'est à ton avenir".`,
          `Notice that the preposition is repeated after "c'est" with "ce dont" and "ce à quoi" ("c'est d'un bon café", "c'est à ton avenir"). Before an infinitive, "de" is optional after "ce que... c'est": "Ce que je veux, c'est (de) partir".`,
        ],
        examples: [
          { fr: "Ce qui me plaît dans ce métier, c'est le contact humain.", en: "What I like about this job is the human contact." },
          { fr: "Ce que je ne comprends pas, c'est pourquoi il a menti.", en: "What I don't understand is why he lied." },
          { fr: "Ce dont il a peur, c'est de l'échec.", en: "What he's afraid of is failure." },
          { fr: "Ce à quoi on ne s'attendait pas, c'est à sa démission.", en: "What we didn't expect was his resignation." },
          { fr: "Ce qu'il faut, c'est de la patience.", en: "What you need is patience." },
        ],
      },
      {
        heading: `Exclamations: "qu'est-ce que", "comme", "quel"`,
        body: [
          `Exclamative sentences are another way to add emphasis. "Qu'est-ce que" (spoken), "comme" and "que" (more written) are followed by a normal clause: "Qu'est-ce que c'est beau !", "Comme il chante bien !", "Que c'est difficile !". "Ce que" is also very common in speech: "Ce qu'il est bête !".`,
          `"Quel" + noun agrees with the noun: "Quel talent !", "Quelle chance !", "Quels idiots !". Intensifiers "tellement" and "si" also add emphasis: "Il est tellement gentil !", "C'est si beau !".`,
        ],
        examples: [
          { fr: "Qu'est-ce qu'il fait chaud aujourd'hui !", en: "It's so hot today!" },
          { fr: "Comme tu as grandi !", en: "How you've grown!" },
          { fr: "Quelle belle surprise !", en: "What a lovely surprise!" },
          { fr: "Ce qu'elle est drôle !", en: "She's so funny!" },
          { fr: "Il est tellement têtu !", en: "He's so stubborn!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "C'est moi qui a raison.",
        right: "C'est moi qui ai raison.",
        why: `After "c'est moi qui", the verb agrees with "moi" (first person): "ai".`,
      },
      {
        wrong: "C'est toi que je parle.",
        right: "C'est à toi que je parle.",
        why: `"Parler à": the preposition stays with the highlighted element after "c'est".`,
      },
      {
        wrong: "Ce film, j'ai vu.",
        right: "Ce film, je l'ai vu.",
        why: `A dislocated noun must be picked up by a pronoun in the clause.`,
      },
      {
        wrong: "Ce que j'ai besoin, c'est de repos.",
        right: "Ce dont j'ai besoin, c'est de repos.",
        why: `"Avoir besoin de" requires "ce dont".`,
      },
      {
        wrong: "Qu'est-ce que c'est est beau !",
        right: "Qu'est-ce que c'est beau !",
        why: `"Qu'est-ce que" is followed by an ordinary clause ("c'est beau"); nothing else is added.`,
      },
    ],
    faqs: [
      {
        q: "Is dislocation incorrect in writing?",
        a: `Not incorrect, but it is a feature of speech. In formal writing, use it sparingly; clefts ("c'est... qui") and pseudo-clefts are fine in all registers.`,
      },
      {
        q: `"C'est eux" or "ce sont eux"?`,
        a: `"Ce sont eux" is the formal norm before a third-person plural; "c'est eux" is normal in speech. With "nous" and "vous" it is always "c'est": "c'est nous", "c'est vous".`,
      },
      {
        q: "Can I just stress a word with my voice in French?",
        a: `You can, a little, but it sounds less natural than in English. French prefers structure: "C'est lui qui l'a dit" rather than stressing he.`,
      },
    ],
    related: ["ce-qui-ce-que-ce-dont", "relative-pronouns-qui-que-ou-dont", "french-connectors"],
    lessons: [
      "b2-emphasis-word-order-1",
      "b2-pattern-dislocation",
      "b2-chain-cest-qui-que",
      "b2-emphasis-word-order-2",
      "b2-transformations-cleft-sentences",
      "b2-circuit-exclamatives",
    ],
  },
];
