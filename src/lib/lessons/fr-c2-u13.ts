// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u13.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 13: Debate & Persuasion.

export const FR_C2_U13: Lesson[] = [
  {
    slug: "c2-debate-1",
    level: "FR-C2",
    number: 1,
    title: "L'Art du Débat et de l'Argumentation, Part 1 of 9",
    summary: "Taking a position the way a French debater does, and choosing indicative or subjunctive after opinion verbs in statements, negations and questions.",
    duration: "19 min",
    sections: [
      {
        heading: "La thèse: say where you stand, early",
        body: [
          "In a French debate, an exam oral or a tribune, the first thing expected of you is \"une thèse\": not a doctoral thesis, but the position you defend, stated clearly and early. French audiences are trained from the lycée to listen for it, and a speaker who circles around the topic before committing is heard as evasive rather than open-minded.",
        ],
        examples: [
          {
            es: "Ma position est la suivante : on ne réforme pas l'hôpital contre ceux qui y travaillent.",
            en: "My position is as follows: you don't reform the hospital against the people who work there.",
          },
          {
            es: "Ma thèse est simple : la ville doit appartenir aux piétons.",
            en: "My position is simple: the city must belong to pedestrians.",
          },
          {
            es: "D'emblée, je le dis : cette réforme est une erreur.",
            en: "Let me say it from the outset: this reform is a mistake.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a French debate or exam oral, when should you state your thèse?",
            options: [
              "Clearly and early, so the audience knows what you defend.",
              "At the very end, after weighing every side.",
              "Never openly: hinting at it sounds more open-minded.",
              "Only if the jury asks for it.",
            ],
            correctIndex: 0,
            explanation: "French audiences listen for \"la thèse\" from the start. A speaker who circles around the topic before committing is heard as evasive, not open-minded.",
          },
        ],
      },
      {
        heading: "Beyond je pense que: four stances",
        body: [
          "\"Je pense que\" is fine in conversation, but at the Mastery level it is the vaguest tool in the box. Each alternative carries its own stance. \"Je soutiens que\" (I maintain that) announces a claim you are ready to defend against objections. \"J'estime que\" (I consider that) is measured and slightly formal, the verb of the reasoned judgement. \"Je suis convaincu(e) que\" stresses personal conviction, and \"il me paraît indéniable que\" (it seems to me undeniable that) combines modesty in the form with force in the content, a typically French move.",
        ],
        examples: [
          {
            es: "Je soutiens que la gratuité des transports publics est une mesure de justice sociale.",
            en: "I maintain that free public transport is a measure of social justice.",
          },
          {
            es: "J'estime que le débat a été mal posé dès le départ.",
            en: "I consider that the debate was badly framed from the outset.",
          },
          {
            es: "Je suis convaincue que l'école doit rester un sanctuaire, à l'abri des écrans.",
            en: "I'm convinced that school must remain a sanctuary, sheltered from screens.",
          },
          {
            es: "Il me paraît indéniable que le télétravail a changé notre rapport à la ville.",
            en: "It seems to me undeniable that remote work has changed our relationship with the city.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You want to sound formal and measured when giving your judgement at a public meeting. Which opener fits best?",
            options: ["J'estime que", "Je suis de l'opinion que", "Je crois bien que", "Moi, je dis que"],
            correctIndex: 0,
            explanation: "\"J'estime que\" is the verb of reasoned judgement. \"Je suis de l'opinion que\" is a calque; \"je crois bien que\" and \"moi, je dis que\" are conversational.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I maintain that this reform is unfair.",
            answer: "Je soutiens que cette réforme est injuste.",
            altAnswers: ["Je soutiens que cette réforme est inéquitable."],
            explanation: "\"Soutenir que\" (to maintain, to argue) + indicative: you present the claim as true and ready to be defended.",
          },
        ],
      },
      {
        heading: "More openers, and a calque to avoid",
        body: [
          "Other openers: \"à mes yeux\" (in my view, more elegant than \"à mon avis\"), \"selon moi\", \"pour ma part\" (marks your position against someone else's), \"je défends l'idée que\", \"ma position est la suivante :\". Note that \"je suis d'avis que\" exists and is formal, but \"*je suis de l'opinion que\" is a calque of I am of the opinion that and sounds foreign.",
        ],
        examples: [
          {
            es: "Pour ma part, je défends l'idée qu'une taxe carbone n'est acceptable que si elle est redistribuée.",
            en: "For my part, I defend the idea that a carbon tax is only acceptable if it is redistributed.",
          },
          {
            es: "À mes yeux, la question n'est pas de savoir si, mais comment.",
            en: "In my view, the question isn't whether, but how.",
          },
          {
            es: "Je suis d'avis que la question mérite un référendum.",
            en: "I am of the view that the question deserves a referendum.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[In my view], the real issue is elsewhere.",
            sentence: "___, le véritable enjeu est ailleurs.",
            answer: "À mes yeux",
            altAnswers: ["Selon moi", "À mon avis", "Pour ma part", "A mes yeux"],
            explanation: "\"À mes yeux\" is the elegant way to say in my view; \"selon moi\" and \"à mon avis\" are also correct, the latter more conversational.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je suis de l'opinion que ce projet coûte trop cher.",
            answer: "Je suis d'avis que ce projet coûte trop cher.",
            altAnswers: [
              "À mon avis, ce projet coûte trop cher.",
              "Selon moi, ce projet coûte trop cher.",
              "À mes yeux, ce projet coûte trop cher.",
            ],
            explanation: "\"Je suis de l'opinion que\" is a word-for-word calque of the English I am of the opinion that. The French formula is \"je suis d'avis que\".",
          },
        ],
      },
      {
        heading: "Conviction: the indicative",
        body: [
          "You learned at the Advanced level that the mood follows the speaker's commitment. In argument this becomes a weapon. An affirmative opinion verb presents the content as true for you, so it takes the indicative: \"je pense qu'il a raison\", \"je suis convaincu que c'est possible\", \"il est évident que\", \"il est clair que\", \"il est certain que\", \"il me paraît indéniable que\".",
        ],
        examples: [
          { es: "Il est évident que cette mesure aura un coût.", en: "It's obvious that this measure will have a cost." },
          { es: "Je suis convaincue que les jeunes iront voter.", en: "I'm convinced young people will go and vote." },
          { es: "Il est clair que la mesure divise le pays.", en: "It's clear the measure divides the country." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It is certain that the reform [will cost] billions.",
            sentence: "Il est certain que la réforme ___ des milliards.",
            answer: "coûtera",
            altAnswers: ["va coûter"],
            explanation: "\"Il est certain que\" asserts the content as true, so it takes the indicative: here the future \"coûtera\". No subjunctive after an expression of certainty.",
          },
        ],
      },
      {
        heading: "Negation and doubt: the subjunctive",
        body: [
          "Negate the verb and the content is no longer asserted: \"je ne pense pas qu'il ait raison\", \"je ne suis pas convaincu que ce soit possible\", \"il n'est pas certain que la mesure suffise\". Verbs and expressions of doubt or denial take the subjunctive even when affirmative: \"je doute que\", \"il est douteux que\", \"je conteste que\", \"je nie que\", \"il est peu probable que\".",
        ],
        examples: [
          {
            es: "Je ne pense pas que cette mesure suffise à rétablir la confiance.",
            en: "I don't think this measure is enough to restore trust.",
          },
          {
            es: "Il est douteux que les entreprises jouent le jeu sans contrainte.",
            en: "It's doubtful that companies will play along without any obligation.",
          },
          {
            es: "Je ne suis pas convaincu que le problème soit d'ordre financier.",
            en: "I'm not convinced the problem is a financial one.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I don't think this argument holds up.",
            answer: "Je ne pense pas que cet argument tienne.",
            altAnswers: [
              "Je ne pense pas que cet argument tienne la route.",
              "Je ne crois pas que cet argument tienne.",
              "Je ne crois pas que cet argument tienne la route.",
              "Je ne pense pas que cet argument soit solide.",
              "Je ne crois pas que cet argument soit solide.",
            ],
            explanation: "Negated \"penser\" no longer asserts the content: subjunctive \"tienne\" (from \"tenir\"). \"Tenir la route\" is the idiomatic hold up.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It is doubtful that the government [will back down].",
            sentence: "Il est douteux que le gouvernement ___.",
            answer: "recule",
            altAnswers: ["fasse marche arrière", "cède"],
            explanation: "\"Il est douteux que\" expresses doubt, so subjunctive: \"recule\". The French subjunctive has no future; the present covers it.",
          },
        ],
      },
      {
        heading: "Je ne doute pas que: doubt removed",
        body: [
          "Two subtleties that natives exploit. First, \"je ne doute pas que\" removes the doubt, so it usually takes the indicative in speech (\"je ne doute pas qu'il viendra\"); formal French also allows the subjunctive, sometimes with the expletive \"ne\" (\"je ne doute pas qu'il ne vienne\").",
        ],
        examples: [
          {
            es: "Je ne doute pas que vous saurez convaincre l'assemblée.",
            en: "I have no doubt you'll manage to convince the assembly.",
          },
          { es: "Nul ne doute que la crise durera.", en: "No one doubts that the crisis will last." },
          {
            es: "Je ne doute pas que vous ayez de bonnes raisons.",
            en: "I don't doubt that you have good reasons. (formal, subjunctive)",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I have no doubt that you [will understand] my position.",
            sentence: "Je ne doute pas que vous ___ ma position.",
            answer: "comprendrez",
            altAnswers: ["compreniez"],
            explanation: "Once the doubt is denied, the indicative (\"comprendrez\") is usual; the subjunctive \"compreniez\" is also accepted in formal French.",
          },
        ],
      },
      {
        heading: "Probable or possible? And the casual slip",
        body: [
          "Second, \"il est probable que\" takes the indicative (probability is close enough to certainty), while \"il est possible que\" takes the subjunctive. English speakers, who have no mood to choose, tend to put the indicative everywhere; a jury hears \"*je ne pense pas que c'est\" as a slip, even though it is common in casual speech.",
        ],
        examples: [
          { es: "Il est probable que la loi sera votée avant l'été.", en: "The law will probably be passed before the summer." },
          { es: "Il est possible que la loi soit votée avant l'été.", en: "The law may be passed before the summer." },
          { es: "Il est peu probable que le texte soit adopté.", en: "It's unlikely that the bill will be passed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct in careful French?",
            options: [
              "Il est probable que le ministre démissionnera.",
              "Il est peu probable que le ministre démissionnera.",
              "Il est possible que le ministre démissionnera.",
              "Il est évident que le ministre démissionne pas.",
            ],
            correctIndex: 0,
            explanation: "\"Il est probable que\" takes the indicative, so the future is fine. \"Il est peu probable que\" and \"il est possible que\" need the subjunctive (\"démissionne\"), and the last option drops the \"ne\" that careful French requires.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It is possible that the minister is lying.",
            answer: "Il est possible que le ministre mente.",
            altAnswers: ["Il se peut que le ministre mente."],
            explanation: "\"Il est possible que\" (and \"il se peut que\") take the subjunctive: \"mente\", from \"mentir\".",
          },
        ],
      },
      {
        heading: "Questions: inversion and the subjunctive cast doubt",
        body: [
          "A question with an opinion verb leaves you a real choice, and the choice says something. With inversion, the formal question form, the subjunctive is the norm and signals genuine doubt or a challenge: \"Pensez-vous qu'il soit trop tard ?\" (do you really think it's too late? I'm not sure it is). The indicative is also correct and sounds more neutral, as if you are simply asking for the other person's view: \"Pensez-vous qu'il est trop tard ?\"",
        ],
        examples: [
          { es: "Pensez-vous qu'il soit trop tard pour agir ?", en: "Do you think it's too late to act? (with doubt)" },
          {
            es: "Croyez-vous sérieusement que les Français soient prêts à travailler plus longtemps ?",
            en: "Do you seriously believe the French are ready to work longer?",
          },
          { es: "Croyez-vous que ce plan soit finançable ?", en: "Do you really think this plan can be financed?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Croyez-vous vraiment que ce soit la solution ?",
            question: "What is the speaker conveying?",
            options: [
              "Doubt: they suspect it is not the solution.",
              "Certainty: they know it is the solution.",
              "A neutral request for information about the plan.",
              "Agreement with the other speaker.",
            ],
            correctIndex: 0,
            explanation: "Inversion, \"vraiment\" and the subjunctive \"soit\" all signal scepticism; a neutral question would say \"Vous croyez que c'est la solution ?\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using inversion and casting doubt on the idea.",
            source: "Do you think this law is necessary? (to an opponent, formal)",
            answer: "Pensez-vous que cette loi soit nécessaire ?",
            altAnswers: [
              "Croyez-vous que cette loi soit nécessaire ?",
              "Estimez-vous que cette loi soit nécessaire ?",
              "Pensez-vous que cette loi soit indispensable ?",
              "Croyez-vous que cette loi soit indispensable ?",
            ],
            explanation: "Inversion + subjunctive \"soit\" turns the question into a challenge: the form itself suggests the law may not be necessary.",
          },
        ],
      },
      {
        heading: "Everyday questions keep the indicative",
        body: [
          "With \"est-ce que\" or intonation, the questions of everyday speech, the indicative is almost always used: \"Tu crois qu'il est trop tard ?\", \"Est-ce que vous pensez que c'est possible ?\". Using the subjunctive there would sound oddly bookish. So in a televised debate, the subjunctive in \"Croyez-vous sérieusement que les Français soient prêts à payer davantage ?\" is a rhetorical weapon: the form itself casts doubt on the claim.",
        ],
        examples: [
          { es: "Tu crois que c'est une bonne idée ?", en: "Do you think it's a good idea?" },
          { es: "Est-ce que vous pensez que la réforme passera ?", en: "Do you think the reform will go through?" },
          { es: "Vous pensez que le maire va céder ?", en: "Do you think the mayor will give in?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which question sounds like a sceptical challenge in a formal debate?",
            options: [
              "Pensez-vous que les électeurs soient dupes ?",
              "Vous pensez que les électeurs sont dupes ?",
              "Est-ce que vous pensez que les électeurs sont dupes ?",
              "Les électeurs sont dupes, vous pensez ?",
            ],
            correctIndex: 0,
            explanation: "Inversion + subjunctive is the formal, doubting form. The others are neutral or conversational questions with the indicative.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a sceptical challenge, using inversion.",
            source: "Vous croyez que ce budget est réaliste ?",
            answer: "Croyez-vous que ce budget soit réaliste ?",
            altAnswers: [
              "Croyez-vous vraiment que ce budget soit réaliste ?",
              "Croyez-vous sérieusement que ce budget soit réaliste ?",
            ],
            explanation: "Inversion is the formal question form, and with it the subjunctive \"soit\" casts doubt on the claim: a rhetorical weapon in a debate.",
          },
        ],
      },
      {
        heading: "Il me semble que or il semble que?",
        body: [
          "The same logic covers \"il semble que\" and \"il me semble que\". \"Il me semble que\" (I have the impression) is close to an assertion and takes the indicative; \"il semble que\" (it appears, it seems) is more impersonal and usually takes the subjunctive, though the indicative is found when the fact is fairly certain. You will meet both in the press; in your own argument, follow the norm: \"il me semble que c'est\", \"il semble que ce soit\".",
        ],
        examples: [
          {
            es: "Il me semble que vous mélangez deux questions distinctes.",
            en: "It seems to me you're mixing up two separate questions.",
          },
          { es: "Il semble que la majorité soit divisée sur ce point.", en: "It appears the majority is divided on this point." },
          { es: "Il me semble que nous sommes d'accord sur l'essentiel.", en: "It seems to me we agree on the essentials." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It seems the two camps [are] irreconcilable.",
            sentence: "Il semble que les deux camps ___ irréconciliables.",
            answer: "soient",
            explanation: "Impersonal \"il semble que\" (it appears) usually takes the subjunctive: \"soient\". \"Il me semble que\" (I have the impression) would take the indicative \"sont\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It seems to me undeniable that the climate is changing.",
        answer: "Il me paraît indéniable que le climat change.",
        altAnswers: [
          "Il me paraît indéniable que le climat est en train de changer.",
          "Il me semble indéniable que le climat change.",
          "Il me semble indéniable que le climat est en train de changer.",
        ],
        explanation: "\"Il me paraît indéniable que\" asserts the content, so the indicative \"change\" follows.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'm not convinced that this solution is realistic.",
        answer: "Je ne suis pas convaincu que cette solution soit réaliste.",
        altAnswers: ["Je ne suis pas convaincue que cette solution soit réaliste."],
        explanation: "Negated conviction: subjunctive \"soit\". A woman writes \"convaincue\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The strike will probably last.",
        answer: "Il est probable que la grève durera.",
        altAnswers: [
          "La grève durera probablement.",
          "Il est probable que la grève va durer.",
          "La grève va probablement durer.",
        ],
        explanation: "\"Il est probable que\" takes the indicative: probability is close enough to certainty. Compare \"il est possible que la grève dure\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[I maintain that] the school must remain free.",
        sentence: "___ l'école doit rester gratuite.",
        answer: "Je soutiens que",
        altAnswers: ["J'affirme que", "Je maintiens que"],
        explanation: "\"Soutenir que\" is the debater's verb for defending a thesis; \"maintenir que\" insists against objections.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it negative.",
        source: "Je pense que ce compromis est équitable.",
        answer: "Je ne pense pas que ce compromis soit équitable.",
        explanation: "Negating the opinion verb means the content is no longer asserted, so the indicative \"est\" becomes the subjunctive \"soit\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It seems to me that you are dodging the question.",
        words: ["Il me semble", "que", "vous", "esquivez", "la question."],
        translation: "It seems to me that you are dodging the question.",
        explanation: "\"Il me semble que\" is close to an assertion, so it takes the indicative \"esquivez\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je ne pense pas que cette réforme est juste.",
        answer: "Je ne pense pas que cette réforme soit juste.",
        explanation: "\"Je ne pense pas que\" no longer asserts the content, so careful French needs the subjunctive \"soit\". \"Que c'est\" or \"qu'elle est\" here is heard as a casual slip by a jury.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je doute que le projet aboutira.",
        answer: "Je doute que le projet aboutisse.",
        explanation: "\"Douter que\" takes the subjunctive even in the affirmative: \"aboutisse\", not the future \"aboutira\".",
      },
      {
        type: "dictation",
        audio: "Il est peu probable que l'opposition cède.",
        explanation: "\"Il est peu probable que\" turns probability into doubt, so it takes the subjunctive \"cède\".",
      },
      {
        type: "speak",
        text: "Pour ma part, je soutiens que cette loi est nécessaire.",
        prompt: "Say it in French: For my part, I maintain that this law is necessary.",
        explanation: "\"Pour ma part\" sets your position against someone else's; \"je soutiens que\" + indicative announces a claim you are ready to defend.",
      },
      {
        type: "matching",
        instructions: "Match each opener to its stance.",
        pairs: [
          { left: "Je soutiens que", right: "I maintain that (ready to defend it)" },
          { left: "J'estime que", right: "I consider that (reasoned judgement)" },
          { left: "Je doute que", right: "I doubt that (+ subjunctive)" },
          { left: "Il est probable que", right: "It is likely that (+ indicative)" },
          { left: "Il se peut que", right: "It may be that (+ subjunctive)" },
        ],
        explanation: "Opinion and probability take the indicative; doubt and mere possibility take the subjunctive.",
      },
    ],
  },
  {
    slug: "c2-concede-then-refute-transformations",
    level: "FR-C2",
    number: 2,
    title: "Transformations: Concéder avant de Réfuter",
    summary: "Turn blunt rebuttals into the classic French move: grant the opponent a point, then dismantle the argument with \"certes... mais\", \"il n'en reste pas moins que\" and \"force est de constater que\".",
    duration: "17 min",
    sections: [
      {
        heading: "Why concede before you refute",
        body: [
          "A blunt rebuttal (\"Vous avez tort, cette mesure est inefficace.\") wins nothing: the opponent digs in and the audience sides with whoever seems more reasonable. French rhetoric, trained by the dissertation, prefers a two-step move: concede what is true in the other argument, then show why it does not settle the matter. The concession makes you look fair; the refutation then hits harder.",
        ],
        examples: [
          { es: "Votre plan ne marchera pas, il est trop cher.", en: "Your plan won't work, it's too expensive. (blunt)" },
          {
            es: "Certes, la mesure coûte cher, mais elle rapportera bien davantage à long terme.",
            en: "Admittedly the measure is expensive, but it will bring in far more in the long run.",
          },
          {
            es: "Certes, nul n'est contre la sécurité ; encore faut-il qu'elle ne se fasse pas au détriment des libertés.",
            en: "Of course nobody is against security; it still mustn't come at the expense of freedom.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your opponent says a new cycle lane will hurt local shops. Which reply follows the French two-step move?",
            options: [
              "Certes, quelques places de parking disparaîtront, mais les cyclistes sont aussi des clients.",
              "Vous avez tort, la piste cyclable aidera les commerces.",
              "Les commerçants se trompent toujours sur ce sujet.",
              "Je ne veux pas en parler.",
            ],
            correctIndex: 0,
            explanation: "The strategic reply grants what is true (some parking will go) and then refutes: concession first, refutation after \"mais\". The blunt \"vous avez tort\" makes the opponent dig in.",
          },
        ],
      },
      {
        heading: "Certes... mais and its variants",
        body: [
          "The basic frame is \"certes... mais\" (admittedly... but). \"Certes\" is written French and formal speech; it is not used in casual chat, where \"c'est vrai que... mais\" does the same job. Variants: \"il est vrai que... cependant / toutefois / pour autant\", \"sans doute... mais\" (here \"sans doute\" means admittedly, not without doubt), \"on peut admettre que... mais\".",
        ],
        examples: [
          {
            es: "Il est vrai que les chiffres sont encourageants ; ils ne disent pas tout pour autant.",
            en: "It's true the figures are encouraging; that said, they don't tell the whole story.",
          },
          {
            es: "Sans doute le texte a-t-il été amélioré, mais il reste profondément déséquilibré.",
            en: "No doubt the text has been improved, but it remains deeply unbalanced.",
          },
          {
            es: "On peut admettre que la concertation a eu lieu ; toutefois, personne n'en a tenu compte.",
            en: "One may grant that consultation took place; however, nobody took any notice of it.",
          },
          { es: "C'est vrai que c'est pratique, mais à quel prix ?", en: "Sure, it's convenient, but at what cost?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (formal register).",
            source: "Admittedly, the project is ambitious, but it is not realistic.",
            answer: "Certes, le projet est ambitieux, mais il n'est pas réaliste.",
            altAnswers: [
              "Certes le projet est ambitieux, mais il n'est pas réaliste.",
              "Il est vrai que le projet est ambitieux, mais il n'est pas réaliste.",
              "Le projet est certes ambitieux, mais il n'est pas réaliste.",
            ],
            explanation: "\"Certes... mais\": grant the point first, put your own claim after \"mais\", in the stressed final position.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[No doubt] the government has made an effort, but it is insufficient.",
            sentence: "___ le gouvernement a-t-il fait un effort, mais il est insuffisant.",
            answer: "Sans doute",
            explanation: "At the start of a clause, \"sans doute\" (admittedly) triggers inversion in formal French: \"sans doute le gouvernement a-t-il\".",
          },
        ],
      },
      {
        heading: "The weight falls after mais",
        body: [
          "The transformation has three steps: identify what is defensible in the opposite view, grant it in a short clause, and put your own point after the connector, where the weight falls. In French, as in English, the end of the sentence is the stressed position: what comes after \"mais\" is what the audience remembers.",
        ],
        examples: [
          {
            es: "Certes, le tramway est coûteux, mais il désengorge le centre.",
            en: "Admittedly the tram is costly, but it relieves congestion in the centre.",
          },
          {
            es: "Le tramway désengorge le centre, mais il est coûteux.",
            en: "The tram relieves congestion in the centre, but it's costly. (now the cost is what people remember)",
          },
          {
            es: "Il est vrai que la loi protège les locataires ; elle décourage toutefois les propriétaires.",
            en: "It's true the law protects tenants; however, it discourages landlords.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it around with \"certes... mais\", so that your own point (remote work cuts commuting) comes last.",
            source: "Le télétravail réduit les trajets, mais il isole les salariés.",
            answer: "Certes, le télétravail isole les salariés, mais il réduit les trajets.",
            altAnswers: ["Certes, le télétravail isole les salariés, mais il réduit les déplacements."],
            explanation: "The end of the sentence is the stressed position: grant the drawback in the \"certes\" clause and put your point after \"mais\", where the audience remembers it.",
          },
        ],
      },
      {
        heading: "Il n'en reste pas moins que, toujours est-il que",
        body: [
          "To grant a whole argument and still win the point, French has fixed phrases that mean nevertheless the fact remains that: \"il n'en reste pas moins que\", \"il n'en demeure pas moins que\" (more formal), \"toujours est-il que\" (be that as it may). They follow the concession and take the indicative: \"J'admets que vos chiffres sont exacts. Il n'en reste pas moins que votre conclusion est fausse.\"",
        ],
        examples: [
          {
            es: "J'admets que vos chiffres sont exacts. Il n'en reste pas moins que votre conclusion est fausse.",
            en: "I grant that your figures are correct. The fact remains that your conclusion is wrong.",
          },
          {
            es: "La réforme a été longuement discutée ; il n'en demeure pas moins qu'elle a été imposée.",
            en: "The reform was discussed at length; it was nonetheless imposed.",
          },
          {
            es: "On peut discuter de la méthode. Toujours est-il que les résultats sont là.",
            en: "The method is open to debate. Be that as it may, the results are there.",
          },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The fact remains that the deficit is growing.",
            words: ["Il n'en reste pas moins", "que", "le déficit", "se creuse."],
            translation: "The fact remains that the deficit is growing.",
            explanation: "\"Il n'en reste pas moins que\" reasserts your point after a concession, and takes the indicative (\"se creuse\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the second sentence so it reasserts the point with \"il n'en reste pas moins que\".",
            source: "Le projet a été voté. Mais il est contesté.",
            answer: "Le projet a été voté. Il n'en reste pas moins qu'il est contesté.",
            altAnswers: [
              "Le projet a été voté ; il n'en reste pas moins qu'il est contesté.",
              "Le projet a été voté. Il n'en demeure pas moins qu'il est contesté.",
            ],
            explanation: "The fixed phrase grants the first fact and still wins the point; it is followed by the indicative \"est\".",
          },
        ],
      },
      {
        heading: "S'il est vrai que: granting inside a clause",
        body: [
          "\"S'il est vrai que...\" opens a sentence by granting the premise inside a subordinate clause: \"S'il est vrai que l'inflation a ralenti, les salaires, eux, n'ont pas rattrapé leur retard.\" Despite the \"si\", this is not a condition: it means while it is true that. The main clause usually contrasts with a stressed pronoun (\"eux\", \"elle\") or a marker like \"en revanche\".",
        ],
        examples: [
          {
            es: "S'il est vrai que l'inflation a ralenti, les salaires, eux, n'ont pas rattrapé leur retard.",
            en: "While it's true that inflation has slowed, wages have not caught up.",
          },
          {
            es: "S'il est vrai que le site est rapide, il reste peu sûr.",
            en: "While it's true the website is fast, it's still not very secure.",
          },
          {
            es: "S'il est vrai que les loyers ont baissé, les charges, elles, ont explosé.",
            en: "While rents have indeed fallen, service charges have soared.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does \"S'il est vrai que le chômage a baissé, la précarité, elle, a augmenté\" mean?",
            options: [
              "While unemployment has indeed fallen, job insecurity has risen.",
              "If unemployment ever falls, job insecurity will rise.",
              "Unemployment fell because job insecurity rose.",
              "It is not true that unemployment has fallen.",
            ],
            correctIndex: 0,
            explanation: "\"S'il est vrai que\" is concessive, not conditional: it grants the first fact and contrasts it with the second.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[While it is true that] growth has returned, inequality has increased.",
            sentence: "___ la croissance est revenue, les inégalités, elles, ont augmenté.",
            answer: "S'il est vrai que",
            explanation: "Concessive \"s'il est vrai que\" grants the first fact; the stressed pronoun \"elles\" sharpens the contrast.",
          },
        ],
      },
      {
        heading: "Force est de constater, je vous accorde que",
        body: [
          "\"Force est de constater que\" (one has to acknowledge that) presents your point as an observation the facts force on everyone, which makes it hard to contest. It is formal and slightly solemn; use it once in a speech, not three times. \"J'admets que... mais\" and \"je vous accorde que... mais\" are the personal versions, perfect in a live exchange: they address the opponent directly.",
        ],
        examples: [
          {
            es: "Force est de constater que les promesses n'ont pas été tenues.",
            en: "One has to acknowledge that the promises were not kept.",
          },
          {
            es: "Je vous accorde que la situation est complexe, mais ce n'est pas une raison pour ne rien faire.",
            en: "I'll grant you that the situation is complex, but that's no reason to do nothing.",
          },
          {
            es: "Je vous accorde que le calendrier est serré, mais il est tenable.",
            en: "I'll grant you the timetable is tight, but it's manageable.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[I'll grant you that] the price is high, but the quality is there.",
            sentence: "___ le prix est élevé, mais la qualité est au rendez-vous.",
            answer: "Je vous accorde que",
            altAnswers: ["J'admets que"],
            explanation: "\"Je vous accorde que\" is the personal concession, addressed straight to the opponent in a live exchange; it takes the indicative.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "One has to acknowledge that the measure has failed.",
            answer: "Force est de constater que la mesure a échoué.",
            altAnswers: ["Force est de constater que cette mesure a échoué.", "Force est de reconnaître que la mesure a échoué."],
            explanation: "\"Force est de constater que\" + indicative presents the failure as an observation nobody can deny.",
          },
        ],
      },
      {
        heading: "One rebuttal, three versions",
        body: [
          "Practise on one blunt sentence and rewrite it at increasing levels of finesse. Blunt: \"Votre plan ne marchera pas, il est trop cher.\" Version 1, conversational: \"C'est vrai que votre plan est séduisant, mais il coûte trop cher.\" Version 2, formal: \"Certes, votre plan ne manque pas d'attrait ; encore faudrait-il pouvoir le financer.\" Version 3, debate: \"Je vous accorde que ce plan est séduisant. Il n'en reste pas moins qu'à ce jour, personne n'a su dire comment le financer.\"",
        ],
        examples: [
          {
            es: "C'est vrai que votre plan est séduisant, mais il coûte trop cher.",
            en: "Your plan is appealing, it's true, but it costs too much.",
          },
          {
            es: "Certes, votre plan ne manque pas d'attrait ; encore faudrait-il pouvoir le financer.",
            en: "Your plan is certainly not without appeal; one would still need to be able to fund it.",
          },
          {
            es: "Je vous accorde que ce plan est séduisant. Il n'en reste pas moins qu'à ce jour, personne n'a su dire comment le financer.",
            en: "I grant that this plan is appealing. The fact remains that to date nobody has been able to say how to fund it.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the two sentences into one conversational rebuttal with \"c'est vrai que... mais\".",
            source: "Votre idée est séduisante. Elle est trop compliquée.",
            answer: "C'est vrai que votre idée est séduisante, mais elle est trop compliquée.",
            explanation: "\"C'est vrai que... mais\" is the spoken counterpart of \"certes... mais\": concession first, objection last.",
          },
        ],
      },
      {
        heading: "Litotes and encore faut-il",
        body: [
          "Notice two refinements in version 2. \"Ne pas manquer de\" is litotes: it grants a quality while keeping your distance. And \"encore faudrait-il que / encore faut-il\" + inversion (it would still be necessary to) is a beautifully French way of refuting without saying no: you accept the idea in principle and point to the condition that has not been met.",
        ],
        examples: [
          {
            es: "L'intention est louable ; encore faut-il se donner les moyens de ses ambitions.",
            en: "The intention is commendable; one still has to give oneself the means to match one's ambitions.",
          },
          { es: "Ce discours ne manque pas de panache.", en: "This speech is not without panache." },
          {
            es: "Le projet est généreux ; encore faut-il qu'il soit financé.",
            en: "The project is generous; it still has to be funded.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The proposal [is not without] merit.",
            sentence: "La proposition ___ mérite.",
            answer: "ne manque pas de",
            explanation: "Litotes: \"ne pas manquer de\" grants a quality while keeping your distance, a polite prelude to a refutation.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the blunt \"mais il faut que\" into the refined \"encore faut-il que\".",
            source: "La réforme est utile, mais il faut que les maires l'appliquent.",
            answer: "La réforme est utile ; encore faut-il que les maires l'appliquent.",
            altAnswers: [
              "La réforme est utile, encore faut-il que les maires l'appliquent.",
              "La réforme est utile ; encore faudrait-il que les maires l'appliquent.",
            ],
            explanation: "\"Encore faut-il que\" (with the subject inverted after \"encore\") accepts the idea in principle and points to the unmet condition; \"que\" takes the subjunctive.",
          },
        ],
      },
      {
        heading: "Don't concede too much",
        body: [
          "A common mistake is to concede too much: the concession must be shorter than the refutation, and it must not include your opponent's conclusion. Grant the facts or the intention (\"l'intention est louable\"), never the conclusion (\"*vous avez raison, mais...\" sounds like surrender, unless you continue \"sur un point\").",
        ],
        examples: [
          {
            es: "Vous avez raison sur un point : le statu quo n'est pas tenable. Mais votre solution aggraverait le problème.",
            en: "You're right on one point: the status quo isn't sustainable. But your solution would make the problem worse.",
          },
          {
            es: "L'intention est louable, mais la méthode est mauvaise.",
            en: "The intention is commendable, but the method is wrong.",
          },
          {
            es: "Vous avez raison sur un point : les délais sont trop longs.",
            en: "You're right on one point: the waiting times are too long.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which reply concedes strategically without giving away the conclusion?",
            options: [
              "Je vous accorde que l'intention est louable ; encore faut-il en mesurer les effets.",
              "Vous avez raison, la mesure est bonne, mais je ne suis pas d'accord.",
              "Vous avez tort, un point c'est tout.",
              "Certes, vous avez entièrement raison, mais votre conclusion est fausse.",
            ],
            correctIndex: 0,
            explanation: "Grant the intention, not the conclusion, then point to the missing condition. The other replies either surrender or contradict themselves.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change \"il est vrai que... pour autant\" into \"certes... mais\".",
        source: "Il est vrai que les sondages sont bons ; ils ne garantissent rien pour autant.",
        answer: "Certes, les sondages sont bons, mais ils ne garantissent rien.",
        explanation: "\"Certes\" grants the point and \"mais\" carries the objection; \"pour autant\" is no longer needed once \"mais\" does the contrast.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Be that as it may, the vote has been postponed.",
        answer: "Toujours est-il que le vote a été reporté.",
        altAnswers: ["Toujours est-il que le scrutin a été reporté."],
        explanation: "\"Toujours est-il que\" (be that as it may) brushes aside what came before and takes the indicative.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change \"mais\" into \"il n'en demeure pas moins que\".",
        source: "Le texte a été amendé, mais il reste injuste.",
        answer: "Le texte a été amendé ; il n'en demeure pas moins qu'il reste injuste.",
        altAnswers: [
          "Le texte a été amendé. Il n'en demeure pas moins qu'il reste injuste.",
          "Le texte a été amendé ; il n'en demeure pas moins qu'il est injuste.",
        ],
        explanation: "\"Il n'en demeure pas moins que\" is the more formal twin of \"il n'en reste pas moins que\": concession granted, point maintained, indicative after it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Certes, la mesure est coûteuse, mais elle soit efficace.",
        answer: "Certes, la mesure est coûteuse, mais elle est efficace.",
        explanation: "After \"mais\" you assert your own point, so the verb is in the indicative: \"elle est efficace\". Nothing here triggers a subjunctive.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Admittedly, the scheme is popular, but it costs a fortune.",
        words: ["Certes,", "le dispositif", "est populaire,", "mais", "il coûte", "une fortune."],
        translation: "Admittedly, the scheme is popular, but it costs a fortune.",
        explanation: "\"Certes\" opens the concession, \"mais\" introduces the refutation, which falls in the stressed final position.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Sans doute le maire a fait des efforts, mais ils restent insuffisants.",
        answer: "Sans doute le maire a-t-il fait des efforts, mais ils restent insuffisants.",
        altAnswers: ["Le maire a sans doute fait des efforts, mais ils restent insuffisants."],
        explanation: "In formal French, \"sans doute\" at the head of the sentence (meaning admittedly) triggers inversion: \"le maire a-t-il fait\". Without inversion, move it after the verb.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Admittedly the bill is imperfect, but it marks a step forward.",
        answer: "Certes, le texte est imparfait, mais il marque un progrès.",
        altAnswers: [
          "Certes, le projet de loi est imparfait, mais il marque un progrès.",
          "Certes, le texte est imparfait, mais il constitue un progrès.",
          "Certes, le projet de loi est imparfait, mais il constitue un progrès.",
          "Certes, le texte est imparfait, mais il représente un progrès.",
        ],
        explanation: "A short concession, then the point that counts after \"mais\".",
      },
      {
        type: "listen-choose",
        audio: "Certes, votre projet ne manque pas d'ambition ; encore faudrait-il convaincre les habitants.",
        question: "What does it mean?",
        options: [
          "Your project is ambitious, but you would still have to win over the residents.",
          "Your project lacks ambition and the residents are against it.",
          "Your project is ambitious and the residents are already convinced.",
          "Your project would be ambitious if the residents agreed.",
        ],
        correctIndex: 0,
        explanation: "\"Ne manque pas d'ambition\" is litotes for it is ambitious; \"encore faudrait-il\" points to the condition not yet met.",
      },
      {
        type: "dictation",
        audio: "Il n'en demeure pas moins que la question reste entière.",
        explanation: "\"Il n'en demeure pas moins que\" + indicative: the formal way to say the fact remains that.",
      },
      {
        type: "speak",
        text: "Force est de constater que le dialogue est rompu.",
        prompt: "Say it in French: One has to acknowledge that the dialogue has broken down.",
        explanation: "\"Force est de constater que\" presents your point as an observation the facts impose; it takes the indicative.",
      },
    ],
  },
  {
    slug: "c2-debate-2",
    level: "FR-C2",
    number: 3,
    title: "L'Art du Débat et de l'Argumentation, Part 2 of 9",
    summary: "Concession in depth: \"bien que\", \"quoique\", \"même si\", \"avoir beau\", \"quand bien même\", \"tout... que\", \"il n'en demeure pas moins que\" and \"toujours est-il que\", each with its mood and its tone.",
    duration: "19 min",
    sections: [
      {
        heading: "Bien que, quoique, même si: the moods",
        body: [
          "You know the rule from the Advanced level; in debate it has to be automatic, because a mood error in the middle of a fine sentence ruins its authority. \"Bien que\" and \"quoique\" concede a fact and take the subjunctive: \"Bien que le texte ait été amendé, il reste inacceptable.\" \"Même si\" concedes a fact or a hypothesis and follows the tense rules of \"si\": present, imparfait or plus-que-parfait indicative, never the subjunctive, never the conditional.",
        ],
        examples: [
          {
            es: "Bien que le texte ait été amendé, il reste inacceptable en l'état.",
            en: "Although the text has been amended, it remains unacceptable as it stands.",
          },
          {
            es: "Quoique les intentions soient bonnes, la méthode laisse à désirer.",
            en: "Although the intentions are good, the method leaves something to be desired.",
          },
          {
            es: "Même si la croissance repartait, le déficit ne se résorberait pas de lui-même.",
            en: "Even if growth picked up again, the deficit wouldn't disappear on its own.",
          },
          {
            es: "Même s'il a raison sur le fond, il a tort sur la forme.",
            en: "Even if he's right on the substance, he's wrong on the form.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Even if he [were] right, he wouldn't admit it.",
            sentence: "Même s'il ___ raison, il ne l'admettrait pas.",
            answer: "avait",
            explanation: "Hypothetical \"même si\" + imparfait, conditional in the main clause. Never \"*même s'il ait\" or \"*même s'il aurait\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"même si\" to \"bien que\".",
            source: "Même si la salle est pleine, le débat reste terne.",
            answer: "Bien que la salle soit pleine, le débat reste terne.",
            explanation: "\"Même si\" takes the indicative (\"est\"); \"bien que\" concedes a fact and takes the subjunctive (\"soit\").",
          },
        ],
      },
      {
        heading: "The long-sentence trap",
        body: [
          "The real trap at this level is not the basic rule but the long sentence. When the concessive clause is long, speakers lose track: \"Bien que la plupart des économistes, y compris ceux qui avaient d'abord soutenu le projet, *sont aujourd'hui sceptiques...\" By the time the verb arrives, the subjunctive \"soient\" has been forgotten. Verbs such as \"reconnaissent\" or \"admettent\" look the same in both moods, so the slip shows only with verbs like \"être\", \"avoir\", \"faire\" or \"pouvoir\". Train yourself to find the verb that \"bien que\" governs before you speak it.",
        ],
        examples: [
          {
            es: "Bien que la plupart des élus, y compris ceux de la majorité, soient sceptiques, le texte passera.",
            en: "Although most elected officials, including those in the majority, are sceptical, the bill will pass.",
          },
          {
            es: "Bien que le rapport, publié après des mois d'enquête, ait été salué, il n'a rien changé.",
            en: "Although the report, published after months of investigation, was praised, it changed nothing.",
          },
          {
            es: "Quoique les syndicats, divisés depuis le début du conflit, puissent encore s'entendre, rien n'est joué.",
            en: "Although the unions, divided since the start of the dispute, may still reach agreement, nothing is settled.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Bien que les opposants, qui avaient pourtant promis de voter le texte, sont aujourd'hui divisés, la loi passera.",
            answer: "Bien que les opposants, qui avaient pourtant promis de voter le texte, soient aujourd'hui divisés, la loi passera.",
            explanation: "Find the verb that \"bien que\" governs: not \"avaient\" (inside the relative clause), but the main verb of the concession, which must be subjunctive: \"soient\".",
          },
        ],
      },
      {
        heading: "Elliptical concession; quoique or quoi que",
        body: [
          "Elliptical concession is elegant in writing: \"bien que\" or \"quoique\" + adjective or participle, without subject or verb, when the subject is the same: \"Bien que minoritaire, ce courant pèse lourd dans le débat.\" \"Quoique discutable, l'argument mérite d'être examiné.\" And remember \"quoique\" (although, one word) vs \"quoi que\" (whatever, two words): \"Quoi que vous disiez, les faits sont têtus.\"",
        ],
        examples: [
          {
            es: "Bien que minoritaire, ce courant pèse lourd dans le débat.",
            en: "Although a minority, this current carries a lot of weight in the debate.",
          },
          {
            es: "Quoique discutable, l'argument mérite d'être examiné.",
            en: "Although debatable, the argument deserves to be examined.",
          },
          { es: "Quoi que vous disiez, les faits sont têtus.", en: "Whatever you say, facts are stubborn things." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: [
              "Quoi que vous en pensiez, la décision est prise.",
              "Quoique vous en pensiez, la décision est prise.",
              "Quoi que vous en pensez, la décision est prise.",
              "Quoi qu'en pensiez-vous, la décision est prise.",
            ],
            correctIndex: 0,
            explanation: "\"Quoi que\" in two words means whatever and takes the subjunctive: \"quoi que vous en pensiez\". In one word, \"quoique\" means although and makes no sense here.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Although exhausted], the negotiators carried on.",
            sentence: "___, les négociateurs ont continué.",
            answer: "Bien qu'épuisés",
            altAnswers: ["Quoique épuisés", "Bien que épuisés"],
            explanation: "Elliptical concession: \"bien que\" + participle, no subject or verb, because the subject is the same as in the main clause. \"Que\" elides before a vowel.",
          },
        ],
      },
      {
        heading: "Avoir beau + infinitive",
        body: [
          "\"Avoir beau\" + infinitive concedes an effort that does not pay off: \"Le ministre a beau multiplier les annonces, personne n'y croit plus\" (however many announcements the minister makes...). It is vivid and common in speech and journalism, and it has no equivalent structure in English, which uses however much, no matter how or try as he might. The subject comes first, \"avoir\" carries the tense, and the second clause gives the disappointing result.",
        ],
        examples: [
          {
            es: "Le ministre a beau multiplier les annonces, personne n'y croit plus.",
            en: "However many announcements the minister makes, nobody believes them anymore.",
          },
          {
            es: "J'ai eu beau lui expliquer, il n'a rien voulu entendre.",
            en: "No matter how much I explained, he wouldn't listen.",
          },
          { es: "Elle a beau être compétente, on ne l'écoute pas.", en: "Competent as she is, nobody listens to her." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French using \"avoir beau\".",
            source: "No matter how much the government explains, nobody believes it anymore.",
            answer: "Le gouvernement a beau expliquer, personne ne le croit plus.",
            altAnswers: [
              "Le gouvernement a beau s'expliquer, personne ne le croit plus.",
              "Le gouvernement a beau expliquer, plus personne ne le croit.",
              "Le gouvernement a beau s'expliquer, plus personne ne le croit.",
            ],
            explanation: "\"Avoir beau\" + infinitive: the effort is real but useless. \"Personne ne... plus\" or \"plus personne ne\" for nobody anymore.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to \"avoir beau\".",
            source: "Même si nous protestons, rien ne change.",
            answer: "Nous avons beau protester, rien ne change.",
            altAnswers: ["On a beau protester, rien ne change."],
            explanation: "\"Avoir beau\" + infinitive concedes an effort that does not pay off: the subject comes first, \"avoir\" carries the tense, the second clause gives the disappointing result.",
          },
        ],
      },
      {
        heading: "Quand bien même + conditional",
        body: [
          "\"Quand bien même\" + conditional is the strongest hypothetical concession: even if, even supposing. \"Quand bien même la mesure serait efficace, elle resterait injuste.\" It is formal and emphatic: you concede the most favourable hypothesis for your opponent and show that your conclusion survives it. Unlike \"même si\", it takes the conditional in both clauses.",
        ],
        examples: [
          {
            es: "Quand bien même la mesure serait efficace, elle resterait injuste.",
            en: "Even supposing the measure were effective, it would still be unfair.",
          },
          {
            es: "Quand bien même vous auriez raison, la méthode serait indéfendable.",
            en: "Even if you were right, the method would be indefensible.",
          },
          {
            es: "Quand bien même le budget serait voté, les travaux ne commenceraient pas avant 2030.",
            en: "Even if the budget were passed, the works wouldn't start before 2030.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Even if the minister [resigned], nothing would change.",
            sentence: "Quand bien même le ministre ___, rien ne changerait.",
            answer: "démissionnerait",
            explanation: "\"Quand bien même\" takes the conditional, unlike \"même si\" (which would give \"démissionnait\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Quand bien même les chiffres seraient bons, la réforme restera injuste.",
            answer: "Quand bien même les chiffres seraient bons, la réforme resterait injuste.",
            explanation: "With \"quand bien même\", both clauses are in the conditional: \"seraient\"... \"resterait\". The future \"restera\" breaks the hypothesis.",
          },
        ],
      },
      {
        heading: "Tout... que and si... que",
        body: [
          "\"Tout + adjective + que\" + indicative concedes a quality: \"Tout brillant qu'il est, cet argument repose sur une erreur\" (brilliant as it is). \"Tout\" agrees only before a feminine adjective starting with a consonant or aspirate h: \"toute convaincante qu'elle est\". In recent usage you will also see the subjunctive (\"tout brillant qu'il soit\"), but the indicative remains the norm. \"Si + adjective + que\" + subjunctive is a close synonym: \"si brillant qu'il soit\".",
        ],
        examples: [
          {
            es: "Tout brillant qu'il est, cet argument repose sur une erreur de calcul.",
            en: "Brilliant as it is, this argument rests on a miscalculation.",
          },
          {
            es: "Toute convaincante qu'elle est, sa démonstration oublie l'essentiel.",
            en: "Convincing as it is, her demonstration leaves out the essential point.",
          },
          {
            es: "Si habile qu'il soit, il n'échappera pas à la question.",
            en: "However skilful he may be, he won't escape the question.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Generous as it is], this proposal is not enough.",
            sentence: "___, cette proposition ne suffit pas.",
            answer: "Toute généreuse qu'elle est",
            altAnswers: ["Si généreuse qu'elle soit", "Toute généreuse qu'elle soit"],
            explanation: "\"Tout + adjective + que\" + indicative concedes a quality. Before a feminine adjective starting with a consonant, \"tout\" agrees: \"toute généreuse\".",
          },
        ],
      },
      {
        heading: "Il n'empêche que: the lively pivot",
        body: [
          "After a concession, you need a pivot back to your point. \"Il n'empêche que\" (all the same, nonetheless) is lively and common in speech and the press: \"Il a présenté ses excuses. Il n'empêche que le mal est fait.\" In casual speech it shrinks to \"n'empêche\": \"N'empêche, il aurait pu prévenir.\"",
        ],
        examples: [
          {
            es: "Il a présenté ses excuses. Il n'empêche que le mal est fait.",
            en: "He apologised. All the same, the damage is done.",
          },
          { es: "N'empêche, tu aurais pu me prévenir.", en: "Still, you could have warned me." },
          { es: "Le match a été serré. Il n'empêche que nous avons perdu.", en: "The match was close. All the same, we lost." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The meeting was cordial; all the same, nothing was decided.",
            words: ["La réunion", "a été cordiale ;", "il n'empêche que", "rien", "n'a été décidé."],
            translation: "The meeting was cordial; all the same, nothing was decided.",
            explanation: "\"Il n'empêche que\" pivots back to your point after a concession; it takes the indicative.",
          },
        ],
      },
      {
        heading: "Toujours est-il que, il n'en demeure pas moins que",
        body: [
          "\"Toujours est-il que\" (be that as it may, the fact remains) sweeps aside an open question to assert a certain fact: \"On ignore qui a donné l'ordre. Toujours est-il que la décision a été prise.\" \"Il n'en demeure pas moins que\" is its most formal relative, at home in an essay or a closing argument.",
        ],
        examples: [
          {
            es: "On ignore qui a donné l'ordre. Toujours est-il que la décision a été prise.",
            en: "Nobody knows who gave the order. Be that as it may, the decision was taken.",
          },
          {
            es: "Le dispositif a ses défauts ; il n'en demeure pas moins qu'il a sauvé des milliers d'emplois.",
            en: "The scheme has its flaws; it nonetheless saved thousands of jobs.",
          },
          {
            es: "On peut discuter des causes. Toujours est-il que le chômage augmente.",
            en: "The causes are open to debate. Be that as it may, unemployment is rising.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Nobody knows who leaked the document. [Be that as it may], the harm is done.",
            sentence: "On ignore qui a divulgué le document. ___ le mal est fait.",
            answer: "Toujours est-il que",
            altAnswers: ["Il n'empêche que", "Il n'en reste pas moins que", "Il n'en demeure pas moins que"],
            explanation: "\"Toujours est-il que\" sets aside the unknown and asserts the certain fact.",
          },
        ],
      },
      {
        heading: "Pour autant: blocking the conclusion",
        body: [
          "\"Pour autant\" is subtler: placed after a negative verb, it means for all that, that doesn't mean: \"Les chiffres sont bons ; la crise n'est pas finie pour autant.\" English speakers often misread \"pour autant\" as therefore; it actually blocks the conclusion the concession seemed to invite. \"Ce n'est pas pour autant que\" + subjunctive is the emphatic form: \"Ce n'est pas pour autant qu'il faille tout abandonner.\"",
        ],
        examples: [
          {
            es: "Les chiffres sont bons ; la crise n'est pas finie pour autant.",
            en: "The figures are good; that doesn't mean the crisis is over.",
          },
          { es: "Ce n'est pas pour autant qu'il faille tout abandonner.", en: "That's no reason to give everything up." },
          {
            es: "Il est jeune ; il n'est pas inexpérimenté pour autant.",
            en: "He's young; that doesn't make him inexperienced.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does « Le chômage baisse ; la précarité n'a pas disparu pour autant » mean?",
            options: [
              "Unemployment is falling, but that doesn't mean insecurity has gone.",
              "Unemployment is falling, therefore insecurity has gone.",
              "Unemployment is falling because insecurity has gone.",
              "Unemployment will fall once insecurity has gone.",
            ],
            correctIndex: 0,
            explanation: "\"Pour autant\" after a negative verb means for all that: it blocks the conclusion the concession seemed to invite. Reading it as therefore is the classic English-speaker mistake.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change \"bien que\" to \"même si\".",
        source: "Bien que le projet soit coûteux, il faut le lancer.",
        answer: "Même si le projet est coûteux, il faut le lancer.",
        explanation: "\"Même si\" follows the tense rules of \"si\": the indicative \"est\", never the subjunctive.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French using \"quoique\".",
        source: "Although the hall is small, the debate drew a crowd.",
        answer: "Quoique la salle soit petite, le débat a attiré la foule.",
        altAnswers: [
          "Quoique la salle soit petite, le débat a attiré beaucoup de monde.",
          "Quoique la salle soit petite, le débat a attiré du monde.",
        ],
        explanation: "\"Quoique\" (one word, although) concedes a fact and takes the subjunctive \"soit\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French using \"avoir beau\".",
        source: "No matter how much the coach shouts, the players don't listen.",
        answer: "L'entraîneur a beau crier, les joueurs n'écoutent pas.",
        altAnswers: ["L'entraîneur a beau crier, les joueurs ne l'écoutent pas."],
        explanation: "\"Avoir beau\" + infinitive: the subject first, \"a beau crier\", then the result that disappoints.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French using \"quand bien même\".",
        source: "Even supposing he apologised, I would not forgive him.",
        answer: "Quand bien même il s'excuserait, je ne lui pardonnerais pas.",
        altAnswers: ["Quand bien même il me présenterait ses excuses, je ne lui pardonnerais pas."],
        explanation: "\"Quand bien même\" takes the conditional in both clauses: \"s'excuserait\", \"pardonnerais\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Although popular, the measure remains fragile.",
        words: ["Bien que", "populaire,", "la mesure", "reste", "fragile."],
        translation: "Although popular, the measure remains fragile.",
        explanation: "Elliptical concession: \"bien que\" + adjective, no subject or verb, because the subject is the same.",
      },
      {
        type: "multiple-choice",
        question: "Which sentence contains a mood error?",
        options: [
          "Même s'il soit tard, je continue.",
          "Bien qu'il soit tard, je continue.",
          "Même s'il est tard, je continue.",
          "Quoiqu'il soit tard, je continue.",
        ],
        correctIndex: 0,
        explanation: "\"Même si\" never takes the subjunctive: \"même s'il est tard\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Ce n'est pas pour autant qu'il faut renoncer à la réforme.",
        answer: "Ce n'est pas pour autant qu'il faille renoncer à la réforme.",
        explanation: "The emphatic \"ce n'est pas pour autant que\" takes the subjunctive: \"qu'il faille\", not \"qu'il faut\".",
      },
      {
        type: "listen-choose",
        audio: "Les syndicats ont beau protester, le gouvernement ne cède pas.",
        question: "What does it mean?",
        options: [
          "However much the unions protest, the government won't give in.",
          "The unions protest beautifully, and the government gives in.",
          "The unions have stopped protesting, so the government holds firm.",
          "The government won't give in unless the unions protest.",
        ],
        correctIndex: 0,
        explanation: "\"Avoir beau\" + infinitive: an effort (protesting) that does not pay off. \"Beau\" has nothing to do with beauty here.",
      },
      {
        type: "dictation",
        audio: "Quoi qu'il arrive, nous tiendrons nos engagements.",
        explanation: "\"Quoi que\" in two words means whatever, and takes the subjunctive (\"arrive\"); \"quoique\" in one word means although.",
      },
      {
        type: "speak",
        text: "Toute modeste qu'elle est, cette avancée compte.",
        prompt: "Say it in French: Modest as it is, this step forward counts.",
        explanation: "\"Tout... que\" + indicative concedes a quality; \"toute\" agrees before the feminine \"modeste\", which starts with a consonant.",
      },
    ],
  },
  {
    slug: "c2-rebuttal-dialogue-lab",
    level: "FR-C2",
    number: 4,
    title: "Dialogue Lab: Le Droit de Réponse",
    summary: "A televised debate on a four-day working week: follow the opponent's arguments and choose, then build, the reply that keeps you in control at each turn.",
    duration: "18 min",
    sections: [
      {
        heading: "The set-up",
        body: [
          "The setting: a prime-time debate on a public channel. The topic: should the four-day week (\"la semaine de quatre jours\") be generalised? You are Claire Morel, an economist in favour; facing you is Bertrand Lacombe, an employers' representative. The moderator, Nadia Benali, gives the floor. Read the first exchange carefully: every reply has to answer what was actually said.",
        ],
        examples: [
          { es: "Nadia : Claire Morel, vous voulez réagir ?", en: "Nadia: Claire Morel, would you like to respond?" },
          {
            es: "Nadia : Bonsoir à tous, ce soir nous débattons de la semaine de quatre jours.",
            en: "Nadia: Good evening, everyone; tonight we're debating the four-day week.",
          },
          { es: "Claire : Merci, Nadia. Bonsoir, monsieur Lacombe.", en: "Claire: Thank you, Nadia. Good evening, Mr Lacombe." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Claire has a prepared speech in favour of the four-day week. What must each of her replies do in this debate?",
            options: [
              "Answer what the opponent has actually just said.",
              "Repeat her prepared speech, whatever is said.",
              "Ignore the opponent and speak only to the moderator.",
              "Agree first with everything, to look reasonable.",
            ],
            correctIndex: 0,
            explanation: "A live debate is a dialogue: every reply has to answer what was actually said, or it sounds evasive.",
          },
        ],
      },
      {
        heading: "Bertrand's opening attack",
        body: [
          "Bertrand opens hard: « Soyons sérieux. La semaine de quatre jours, c'est une idée de bureau parisien. Allez expliquer ça à un boulanger ou à une infirmière ! » Two tactics are mixed here: a caricature (only Paris office workers benefit) and an appeal to concrete professions to make the idea look elitist.",
        ],
        examples: [
          {
            es: "Bertrand : Soyons sérieux. La semaine de quatre jours, c'est une idée de bureau parisien.",
            en: "Bertrand: Let's be serious. The four-day week is an idea dreamt up in a Paris office.",
          },
          {
            es: "Bertrand : Des expériences, toujours des expériences... Moi, je vous parle de la réalité.",
            en: "Bertrand: Trials, always trials... I'm talking to you about reality.",
          },
          {
            es: "Bertrand : Allez expliquer ça à un boulanger ou à une infirmière !",
            en: "Bertrand: Go and explain that to a baker or a nurse!",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Later Bertrand adds: « Allez donc expliquer ça à un agriculteur ! » What is he doing?",
            options: [
              "Appealing to a concrete profession to make the idea look elitist.",
              "Quoting a statistic about farmers.",
              "Conceding a point before refuting it.",
              "Asking Claire a genuine question.",
            ],
            correctIndex: 0,
            explanation: "Like the baker and the nurse, the farmer is summoned to paint the four-day week as an idea for privileged office workers: a caricature, not an argument.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Let's be serious]: who is going to fund this measure?",
            sentence: "___ : qui va financer cette mesure ?",
            answer: "Soyons sérieux",
            altAnswers: ["Soyons sérieuses"],
            explanation: "\"Soyons sérieux\" (imperative of \"être\", nous form) is a debater's way of dismissing the other side as unrealistic.",
          },
        ],
      },
      {
        heading: "Taking the floor",
        body: [
          "A good reply asks for the floor politely, names the tactic without insult, and brings the debate back to facts: \"Permettez-moi de vous répondre\", \"vous oubliez un élément essentiel\", \"c'est précisément l'inverse\". In a live debate, \"permettez-moi de\" is both polite and assertive: you are not asking for permission, you are taking the floor.",
        ],
        examples: [
          {
            es: "Claire : Permettez-moi de vous répondre, car vous oubliez un élément essentiel.",
            en: "Claire: Allow me to answer you, because you're forgetting something essential.",
          },
          {
            es: "Claire : Les premières expériences ont justement été menées dans des hôpitaux et des PME.",
            en: "Claire: The first trials were in fact carried out in hospitals and small businesses.",
          },
          {
            es: "Claire : C'est précisément l'inverse de ce que vous affirmez.",
            en: "Claire: It's exactly the opposite of what you claim.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Bertrand says the four-day week is an idea only Paris office workers like. What is Claire's best first reply?",
            options: [
              "Permettez-moi de vous répondre : les premières expériences ont été menées dans des hôpitaux.",
              "Vous êtes un menteur, monsieur Lacombe.",
              "Bon ben, si vous le dites.",
              "Je ne pense pas que vous avez raison.",
            ],
            correctIndex: 0,
            explanation: "Take the floor courteously and answer with a fact that destroys the caricature. Insult loses the audience; \"je ne pense pas que vous avez\" is also a mood error.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[You are forgetting] one essential fact: the trials were conclusive.",
            sentence: "___ un fait essentiel : les essais ont été concluants.",
            answer: "Vous oubliez",
            explanation: "\"Vous oubliez\" names a missing fact without insulting the opponent: firm, but courteous.",
          },
        ],
      },
      {
        heading: "The ad hominem",
        body: [
          "Bertrand continues: « Et qui va payer ? Les entreprises, comme d'habitude. Vous, les économistes, vous n'avez jamais dirigé une entreprise de votre vie. » This is an ad hominem in miniature: instead of answering on costs, he disqualifies Claire as a person.",
        ],
        examples: [
          {
            es: "Bertrand : Et qui va payer ? Les entreprises, comme d'habitude.",
            en: "Bertrand: And who's going to pay? Businesses, as usual.",
          },
          {
            es: "Bertrand : Vous n'avez jamais dirigé une entreprise de votre vie.",
            en: "Bertrand: You've never run a business in your life.",
          },
          {
            es: "Bertrand : Vous, les universitaires, vous vivez dans les livres.",
            en: "Bertrand: You academics live in books.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which of these lines attacks the person rather than the argument?",
            options: [
              "« Vous n'avez jamais mis les pieds dans une usine. »",
              "« Le coût serait de deux milliards par an. »",
              "« Les PME ne pourront pas suivre le rythme. »",
              "« Les essais ont duré trop peu de temps. »",
            ],
            correctIndex: 0,
            explanation: "An ad hominem disqualifies the speaker (\"vous n'avez jamais...\") instead of answering on costs or results. The other three lines are arguments you can answer with facts.",
          },
        ],
      },
      {
        heading: "Three ways to answer it",
        body: [
          "Claire has three good options. She can ignore the attack and answer the real question (\"Venons-en aux coûts\"), point out that it dodges the argument (\"Ce n'est pas ma biographie qui est en débat\"), or return the question (\"Je vous retourne la question : combien coûte l'épuisement professionnel ?\"). \"Je vous retourne la question\" (I'll put the same question to you) is a classic of French televised debate.",
        ],
        examples: [
          {
            es: "Claire : Ce n'est pas ma biographie qui est en débat ce soir.",
            en: "Claire: It's not my biography that's being debated tonight.",
          },
          {
            es: "Claire : Je vous retourne la question : combien coûte l'épuisement professionnel aux entreprises ?",
            en: "Claire: I'll put the question back to you: how much does burnout cost businesses?",
          },
          {
            es: "Claire : Je vous remercie pour ce portrait flatteur. Venons-en aux coûts, si vous le voulez bien.",
            en: "Claire: Thank you for that flattering portrait. Let's get to the costs, if you don't mind.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your opponent says: « Vous n'avez jamais travaillé dans une usine, vous. » Which reply exposes the tactic without aggression?",
            options: [
              "Ce n'est pas mon parcours qui est en débat, mais vos chiffres.",
              "Et vous, vous n'avez jamais ouvert un livre d'économie !",
              "Tu dis n'importe quoi.",
              "Oui, c'est vrai, donc je retire mon argument.",
            ],
            correctIndex: 0,
            explanation: "Point out that the person is not the topic and return to the argument. Counter-insults and \"tu\" would lose the audience; conceding the attack concedes the debate.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[I'll put the question back to you]: how much does burnout cost?",
            sentence: "___ : combien coûte l'épuisement professionnel ?",
            answer: "Je vous retourne la question",
            explanation: "\"Retourner la question à quelqu'un\" is the set phrase for turning a question back on the person who asked it.",
          },
        ],
      },
      {
        heading: "Register: vous, irony, the moderator",
        body: [
          "Notice the register. Both speakers use \"vous\" throughout, even when the tone hardens; switching to \"tu\" on air would be a scandal. Irony is allowed (\"Je vous remercie pour ce portrait flatteur\"), contempt is not. The moderator steps in with \"Laissez-la répondre\" or \"Monsieur Lacombe, s'il vous plaît\".",
        ],
        examples: [
          {
            es: "Nadia : Monsieur Lacombe, laissez-la répondre, s'il vous plaît.",
            en: "Nadia: Mr Lacombe, let her answer, please.",
          },
          { es: "Claire : Je vous remercie pour cette leçon d'économie.", en: "Claire: Thank you for that economics lesson." },
          { es: "Nadia : Monsieur Lacombe, s'il vous plaît, un peu de calme.", en: "Nadia: Mr Lacombe, please, a little calm." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Merci pour ce compliment, venant de vous, il me touche beaucoup.",
            question: "What is the speaker doing?",
            options: [
              "Answering a personal attack with irony.",
              "Sincerely thanking a friend for a compliment.",
              "Asking the moderator for more time.",
              "Apologising for an earlier remark.",
            ],
            correctIndex: 0,
            explanation: "Irony is allowed on air, contempt is not: thanking the opponent for a \"compliment\" that was really an attack is a classic courteous counter.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Bertrand, tu ne m'as pas laissée finir.",
            answer: "Monsieur Lacombe, vous ne m'avez pas laissée finir.",
            altAnswers: ["Monsieur Lacombe, vous ne m'avez pas laissé finir."],
            explanation: "On air both speakers keep \"vous\" and the title, even when the tone hardens: \"tu\" and a first name would be a scandal.",
          },
        ],
      },
      {
        heading: "The last minute",
        body: [
          "The moderator signals the end: « Il nous reste une minute. Un mot de conclusion chacun. » Bertrand: « Je le répète : c'est une fausse bonne idée. » \"Une fausse bonne idée\" (an idea that sounds good but isn't) is a set phrase worth knowing.",
        ],
        examples: [
          {
            es: "Nadia : Il nous reste une minute. Un mot de conclusion chacun.",
            en: "Nadia: We have one minute left. A final word from each of you.",
          },
          {
            es: "Bertrand : Je le répète : c'est une fausse bonne idée.",
            en: "Bertrand: I'll say it again: it's one of those ideas that sound good but aren't.",
          },
          {
            es: "Nadia : Merci à tous les deux pour ce débat de grande qualité.",
            en: "Nadia: Thank you both for a debate of very high quality.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Bertrand calls the reform « une fausse bonne idée ». What does he mean?",
            options: [
              "It sounds good but would not work.",
              "It is a good idea that has been badly copied.",
              "It is a dishonest idea.",
              "It is a good idea whose time has not come.",
            ],
            correctIndex: 0,
            explanation: "\"Une fausse bonne idée\" is a set phrase: an idea that looks attractive at first sight but turns out to be a bad one.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il nous reste une minute. Un mot de conclusion chaque.",
            answer: "Il nous reste une minute. Un mot de conclusion chacun.",
            explanation: "\"Chaque\" is an adjective and needs a noun after it; on its own, at the end of the sentence, you need the pronoun \"chacun\" (each one).",
          },
        ],
      },
      {
        heading: "Claire's conclusion: concede, refute, look ahead",
        body: [
          "Claire's conclusion must be short and structured: a concession, a refutation, a forward-looking line. « Je ne prétends pas que ce soit la solution miracle. Mais les faits sont là : là où on l'a essayée, la productivité n'a pas baissé. Alors essayons, évaluons, et décidons sur pièces. » The subjunctive after \"je ne prétends pas que\" shows that she refuses to make that claim herself, so nobody can pin an overstatement on her.",
        ],
        examples: [
          {
            es: "Claire : Je ne prétends pas que ce soit la solution miracle.",
            en: "Claire: I'm not claiming it's a miracle cure.",
          },
          {
            es: "Claire : Mais les faits sont là : là où on l'a essayée, la productivité n'a pas baissé.",
            en: "Claire: But the facts are clear: wherever it's been tried, productivity hasn't fallen.",
          },
          { es: "Claire : Je ne dis pas que tout sera simple.", en: "Claire: I'm not saying everything will be simple." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I'm not claiming that the reform [is] perfect.",
            sentence: "Je ne prétends pas que la réforme ___ parfaite.",
            answer: "soit",
            explanation: "\"Je ne prétends pas que\" refuses the claim, so the subjunctive \"soit\" follows: nobody can pin an overstatement on you.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it a refusal to overclaim, starting with \"Je ne prétends pas que\".",
            source: "La mesure peut tout résoudre.",
            answer: "Je ne prétends pas que la mesure puisse tout résoudre.",
            explanation: "After \"je ne prétends pas que\", \"peut\" becomes the subjunctive \"puisse\": you distance yourself from the claim.",
          },
        ],
      },
      {
        heading: "Calm phrases and a ternary ending",
        body: [
          "\"Décider sur pièces\" (to decide on the evidence) and \"les faits sont là\" are both phrases that sound calm and confident. A ternary rhythm (essayons, évaluons, décidons) gives the ending its punch; you will study it in Unit 14.",
        ],
        examples: [
          {
            es: "Claire : Alors essayons, évaluons, et décidons sur pièces.",
            en: "Claire: So let's try it, let's assess it, and let's decide on the evidence.",
          },
          { es: "Écoutons, comparons, puis tranchons.", en: "Let's listen, compare, then decide." },
          { es: "Les chiffres parlent d'eux-mêmes.", en: "The figures speak for themselves." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Let's test, measure and adjust.",
            words: ["Testons,", "mesurons", "et", "ajustons."],
            translation: "Let's test, measure and adjust.",
            explanation: "Three imperatives in the nous form give the ending a ternary rhythm, like \"essayons, évaluons, et décidons\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Bertrand: « Les salariés eux-mêmes n'en veulent pas. » Claire has a survey in which seven employees in ten ask for it. What is her best reply?",
        options: [
          "Au contraire : sept salariés sur dix la réclament.",
          "Vous mentez, comme d'habitude.",
          "C'est votre opinion, j'ai la mienne.",
          "Peut-être, je ne sais pas.",
        ],
        correctIndex: 0,
        explanation: "Claire answers what was said with a fact that contradicts it. Calling him a liar is contempt, and the last two replies give the point away.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[It's exactly the opposite]: wages have gone up.",
        sentence: "___ : les salaires ont augmenté.",
        answer: "C'est précisément l'inverse",
        altAnswers: ["C'est exactement l'inverse", "C'est tout l'inverse"],
        explanation: "\"C'est précisément l'inverse\" contradicts firmly but without insult; the fact that follows does the work.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Let's get back to the subject: the cost for hospitals.",
        answer: "Revenons au sujet : le coût pour les hôpitaux.",
        altAnswers: ["Revenons-en au sujet : le coût pour les hôpitaux.", "Revenons au sujet : le coût pour l'hôpital."],
        explanation: "\"Revenons à\" (nous imperative) steers the debate back to the substance after a personal attack.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The facts are clear: absenteeism has fallen.",
        answer: "Les faits sont là : l'absentéisme a baissé.",
        altAnswers: ["Les faits sont là : l'absentéisme a diminué.", "Les faits sont là : l'absentéisme a reculé."],
        explanation: "\"Les faits sont là\" is a calm, confident formula: the facts speak, not the speaker.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Madame Morel, laissez-lui terminer, je vous prie.",
        answer: "Madame Morel, laissez-le terminer, je vous prie.",
        explanation: "\"Laisser quelqu'un faire quelque chose\" takes a direct object: \"laissez-le terminer\", not \"lui\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: We have thirty seconds left for your conclusion.",
        words: ["Il nous reste", "trente secondes", "pour", "votre conclusion."],
        translation: "We have thirty seconds left for your conclusion.",
        explanation: "\"Il nous reste\" (impersonal \"il\" + indirect \"nous\") is the moderator's way to say we have... left.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Thank you for that lesson, Mr Lacombe, but let's get back to the facts.",
        answer: "Je vous remercie pour cette leçon, monsieur Lacombe, mais revenons aux faits.",
        altAnswers: [
          "Merci pour cette leçon, monsieur Lacombe, mais revenons aux faits.",
          "Je vous remercie de cette leçon, monsieur Lacombe, mais revenons aux faits.",
        ],
        explanation: "Irony (\"je vous remercie pour cette leçon\") answers the attack without contempt, then \"revenons aux faits\" returns to the substance.",
      },
      {
        type: "matching",
        instructions: "Match each debate phrase to its function.",
        pairs: [
          { left: "Permettez-moi de vous répondre", right: "Taking the floor politely" },
          { left: "Je vous retourne la question", right: "Turning the question back" },
          { left: "Vous oubliez un élément essentiel", right: "Pointing to a missing fact" },
          { left: "Un mot de conclusion", right: "The moderator closing the debate" },
          { left: "Venons-en aux faits", right: "Steering back to the substance" },
        ],
        explanation: "Each formula does one job in a live debate; combining them gives you control without rudeness.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It's a caricature, and you know it.",
        words: ["C'est", "une caricature,", "et vous", "le savez."],
        translation: "It's a caricature, and you know it.",
        explanation: "Naming the tactic (\"une caricature\") without insulting the person: the pronoun \"le\" stands for the whole idea.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je ne prétends pas que ce sera facile.",
        answer: "Je ne prétends pas que ce soit facile.",
        explanation: "\"Je ne prétends pas que\" takes the subjunctive: \"ce soit\", not the future \"ce sera\".",
      },
      {
        type: "speak",
        text: "Permettez-moi de terminer : les essais ont été menés dans des usines.",
        prompt: "Say it in French: Allow me to finish: the trials were carried out in factories.",
        explanation: "\"Permettez-moi de\" is polite and assertive: you are not asking for permission, you are keeping the floor.",
      },
    ],
  },
  {
    slug: "c2-debate-3",
    level: "FR-C2",
    number: 5,
    title: "L'Art du Débat et de l'Argumentation, Part 3 of 9",
    summary: "The fallacies by their French names, from \"l'homme de paille\" to \"la pente glissante\", and the difference between a \"sophisme\" and a \"paralogisme\".",
    duration: "19 min",
    sections: [
      {
        heading: "Sophisme or paralogisme: who is cheating?",
        body: [
          "French distinguishes two kinds of bad reasoning, and the distinction is useful in a debate. \"Un sophisme\" is a fallacious argument used knowingly, to mislead: the word comes from the Greek sophists, whom Plato accused of selling persuasion without truth. \"Un paralogisme\" is an honest error of reasoning: the speaker deceives himself first. Accusing someone of a \"sophisme\" accuses them of bad faith; pointing out a \"paralogisme\" only says their logic slipped.",
        ],
        examples: [
          {
            es: "Ce raisonnement est un sophisme : il part d'une prémisse fausse pour aboutir à une conclusion séduisante.",
            en: "This reasoning is a fallacy: it starts from a false premise and arrives at an attractive conclusion.",
          },
          {
            es: "Je ne crois pas qu'il ait voulu tromper qui que ce soit : c'est un paralogisme, pas un sophisme.",
            en: "I don't think he meant to deceive anyone: it's a faulty inference, not a deliberate fallacy.",
          },
          { es: "Il a commis un paralogisme sans s'en rendre compte.", en: "He made a faulty inference without realising it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A colleague made an honest logical error in a report. Which word names it without accusing them of bad faith?",
            options: ["un paralogisme", "un sophisme", "un mensonge", "une mauvaise foi"],
            correctIndex: 0,
            explanation: "\"Un paralogisme\" is an involuntary error of reasoning; \"un sophisme\" implies the intention to mislead.",
          },
        ],
      },
      {
        heading: "Fallacieux, spécieux",
        body: [
          "In everyday French, \"sophisme\" is the common word for both, and \"paralogisme\" belongs to philosophy classes and careful essays. The adjective is \"fallacieux\" (misleading, deceptive): \"un argument fallacieux\", \"un raisonnement fallacieux\". Note also \"spécieux\" (specious: plausible on the surface, false underneath), a favourite of editorialists.",
        ],
        examples: [
          {
            es: "L'argument est spécieux : il a toutes les apparences de la logique, sans en avoir la rigueur.",
            en: "The argument is specious: it has all the appearance of logic without its rigour.",
          },
          { es: "Vous tenez un raisonnement fallacieux.", en: "Your reasoning is misleading." },
          { es: "Ce chiffre est utilisé de façon fallacieuse.", en: "This figure is being used misleadingly." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The minister's reasoning is [specious]: convincing at first sight, false underneath.",
            sentence: "Le raisonnement du ministre est ___ : convaincant à première vue, faux en réalité.",
            answer: "spécieux",
            explanation: "\"Spécieux\" means plausible on the surface and false underneath, exactly what the second half of the sentence spells out. \"Fallacieux\" would simply say misleading.",
          },
        ],
      },
      {
        heading: "Un raccourci, la mauvaise foi",
        body: [
          "Two more expressions you will hear constantly: \"c'est un raccourci\" (that's a shortcut, an oversimplification) and \"c'est de la mauvaise foi\" (that's bad faith, arguing what you know to be unfair). \"Être de mauvaise foi\" is one of the most frequent accusations in French public life, and it is far more common than its English equivalent.",
        ],
        examples: [
          { es: "C'est un raccourci un peu facile.", en: "That's a rather glib oversimplification." },
          { es: "Avouez que vous êtes de mauvaise foi.", en: "Admit that you're arguing in bad faith." },
          {
            es: "Dire que tous les élus sont corrompus, c'est un raccourci.",
            en: "Saying all politicians are corrupt is an oversimplification.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your opponent knowingly quotes half a sentence from your report to make you look absurd. What do you accuse him of?",
            options: [
              "Vous êtes de mauvaise foi.",
              "Vous faites un paralogisme.",
              "Vous êtes de bonne foi.",
              "Vous avez fait une erreur honnête.",
            ],
            correctIndex: 0,
            explanation: "He knows the full sentence and distorts it anyway: that is \"mauvaise foi\", arguing what you know to be unfair. A \"paralogisme\" would be an honest slip of logic.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "You're [arguing in bad faith], and you know it.",
            sentence: "Vous êtes ___, et vous le savez.",
            answer: "de mauvaise foi",
            explanation: "\"Être de mauvaise foi\": to argue what you know to be unfair or untrue.",
          },
        ],
      },
      {
        heading: "Ad hominem and the procès d'intention",
        body: [
          "\"L'attaque ad hominem\" (or \"l'argument ad hominem\") attacks the speaker instead of the argument: \"Vous dites ça parce que vous êtes fonctionnaire.\" A close cousin is \"le procès d'intention\": attributing hidden motives to someone instead of discussing what they said (\"Ce que vous voulez en réalité, c'est privatiser l'hôpital\"). \"Faire un procès d'intention à quelqu'un\" is a very common accusation in French politics.",
        ],
        examples: [
          {
            es: "Vous dites ça parce que vous êtes fonctionnaire : c'est une attaque ad hominem.",
            en: "You say that because you're a civil servant: that's an ad hominem attack.",
          },
          {
            es: "Vous me faites un procès d'intention : je n'ai jamais parlé de privatisation.",
            en: "You're attributing motives to me: I never mentioned privatisation.",
          },
          {
            es: "Ce que vous voulez vraiment, c'est fermer l'école du village.",
            en: "What you really want is to close the village school.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Derrière cette réforme, vous cherchez surtout à plaire aux banques. » Which fallacy is this?",
            options: ["le procès d'intention", "l'homme de paille", "le faux dilemme", "l'argument d'autorité"],
            correctIndex: 0,
            explanation: "The speaker attributes a hidden motive instead of discussing the reform itself: \"un procès d'intention\". The straw man distorts the position; it does not invent a motive.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "You are [attributing hidden motives to him] without the slightest proof.",
            sentence: "Vous lui ___ sans la moindre preuve.",
            answer: "faites un procès d'intention",
            explanation: "\"Faire un procès d'intention à quelqu'un\": the person is an indirect object, so \"lui\" goes before the verb.",
          },
        ],
      },
      {
        heading: "The straw man",
        body: [
          "\"L'homme de paille\" (the straw man; \"l'épouvantail\" is also used) distorts the opponent's position into something easier to knock down: you propose to reduce car traffic in the city centre, and your opponent replies that you want to ban cars. The reply is \"vous caricaturez ma position\" or \"je n'ai jamais dit cela\".",
        ],
        examples: [
          {
            es: "Je propose de limiter la circulation, pas d'interdire la voiture : vous caricaturez ma position.",
            en: "I'm proposing to limit traffic, not to ban cars: you're caricaturing my position.",
          },
          {
            es: "C'est l'argument de l'homme de paille : on combat une thèse que personne ne défend.",
            en: "That's the straw man argument: you attack a position nobody holds.",
          },
          {
            es: "Je n'ai jamais dit cela : je parle de réduire, pas de supprimer.",
            en: "I never said that: I'm talking about reducing, not abolishing.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You propose shorter summer holidays. Your opponent cries: « Vous voulez supprimer les vacances des enfants ! » What do you answer?",
            options: [
              "Vous caricaturez ma position : je propose de les raccourcir, pas de les supprimer.",
              "Vous dites ça parce que vous êtes enseignant.",
              "Des millions de parents sont d'accord avec moi.",
              "Soit on raccourcit les vacances, soit l'école s'effondre.",
            ],
            correctIndex: 0,
            explanation: "He has built a straw man (abolishing instead of shortening). The reply restores your real position. The other answers commit fallacies of their own: ad hominem, popularity, false dilemma.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I never said that: you're distorting my position.",
            answer: "Je n'ai jamais dit cela : vous déformez ma position.",
            altAnswers: [
              "Je n'ai jamais dit ça : vous déformez ma position.",
              "Je n'ai jamais dit cela : vous caricaturez ma position.",
              "Je n'ai jamais dit ça : vous caricaturez ma position.",
              "Je n'ai jamais dit cela : tu déformes ma position.",
              "Je n'ai jamais dit ça : tu déformes ma position.",
              "Je n'ai jamais dit cela, vous déformez ma position.",
            ],
            explanation: "The reply to a straw man: deny the attributed claim, then name the distortion.",
          },
        ],
      },
      {
        heading: "Authority and popularity",
        body: [
          "\"L'argument d'autorité\" relies on who says something rather than on evidence (\"un prix Nobel l'a dit, donc c'est vrai\"), especially when the authority speaks outside their field. \"L'appel à la popularité\" (or \"l'argument ad populum\") takes popularity for proof: \"des millions de gens le pensent, ils ne peuvent pas tous se tromper.\"",
        ],
        examples: [
          {
            es: "Qu'un prix Nobel de physique le dise ne prouve rien en matière d'économie.",
            en: "A Nobel physicist saying so proves nothing about economics.",
          },
          {
            es: "Des millions de gens y croient ? Ce n'est pas un argument, c'est un sondage.",
            en: "Millions of people believe it? That's not an argument, it's an opinion poll.",
          },
          {
            es: "Un acteur célèbre le recommande, mais ce n'est pas un médecin.",
            en: "A famous actor recommends it, but he isn't a doctor.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Des millions de gens y croient, ils ne peuvent pas tous se tromper.",
            question: "Which fallacy is this?",
            options: ["The appeal to popularity", "The straw man", "The slippery slope", "The ad hominem attack"],
            correctIndex: 0,
            explanation: "Taking the number of believers as proof is \"l'appel à la popularité\" (argument ad populum).",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The fact that a Nobel prize winner says so proves nothing: it's [an appeal to authority].",
            sentence: "Qu'un prix Nobel le dise ne prouve rien : c'est ___.",
            answer: "un argument d'autorité",
            explanation: "\"L'argument d'autorité\" relies on the speaker's prestige instead of evidence. Note \"qu'un prix Nobel le dise\": a \"que\" clause as subject takes the subjunctive.",
          },
        ],
      },
      {
        heading: "The false dilemma",
        body: [
          "\"Le faux dilemme\" reduces a range of options to two: \"Soit on baisse les impôts, soit on condamne l'économie.\" The reply: \"Il existe d'autres options\" or \"c'est une fausse alternative\" (in French, \"une alternative\" traditionally means a choice between two options, so \"une fausse alternative\" is a false either/or).",
        ],
        examples: [
          {
            es: "Soit on baisse les impôts, soit on condamne l'économie : c'est une fausse alternative.",
            en: "Either we cut taxes or we doom the economy: that's a false choice.",
          },
          { es: "Soit vous êtes avec nous, soit vous êtes contre nous.", en: "Either you're with us or you're against us." },
          {
            es: "Entre la fermeture et le statu quo, il existe d'autres options.",
            en: "Between closure and the status quo, there are other options.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "There are other options: that's a false choice.",
            answer: "Il existe d'autres options : c'est une fausse alternative.",
            altAnswers: [
              "Il y a d'autres options : c'est une fausse alternative.",
              "Il existe d'autres options : c'est un faux dilemme.",
              "Il y a d'autres options : c'est un faux dilemme.",
              "Il existe d'autres solutions : c'est une fausse alternative.",
              "Il existe d'autres solutions : c'est un faux dilemme.",
            ],
            explanation: "\"Une alternative\" in traditional French is a choice between two things, so \"une fausse alternative\" names a false either/or; \"un faux dilemme\" also works.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Vous nous enfermez dans une fausse dilemme.",
            answer: "Vous nous enfermez dans un faux dilemme.",
            altAnswers: ["Vous nous enfermez dans une fausse alternative."],
            explanation: "\"Dilemme\" is masculine: \"un faux dilemme\". (\"Une fausse alternative\" is feminine, which is where the confusion comes from.)",
          },
        ],
      },
      {
        heading: "Slippery slope and hasty generalisation",
        body: [
          "\"La pente glissante\" (the slippery slope) claims that one step will inevitably lead to a catastrophe: \"Si on autorise ça aujourd'hui, demain on autorisera n'importe quoi.\" \"La généralisation hâtive\" draws a rule from too few cases: \"Mon voisin est au chômage et il part en vacances, donc les chômeurs profitent du système.\"",
        ],
        examples: [
          {
            es: "Si on autorise ça aujourd'hui, demain on autorisera n'importe quoi.",
            en: "If we allow that today, tomorrow we'll allow anything.",
          },
          {
            es: "Vous tirez une règle générale d'un cas isolé : c'est une généralisation hâtive.",
            en: "You're drawing a general rule from an isolated case: that's a hasty generalisation.",
          },
          {
            es: "Deux élèves ont triché, donc toute la classe triche : c'est une généralisation hâtive.",
            en: "Two pupils cheated, so the whole class cheats: that's a hasty generalisation.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Si on légalise le cannabis, dans dix ans on vendra de l'héroïne au supermarché. » Which fallacy is this?",
            options: ["la pente glissante", "l'argument d'autorité", "l'homme de paille", "l'appel à la popularité"],
            correctIndex: 0,
            explanation: "One step is said to lead inevitably to an extreme consequence: \"la pente glissante\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "One rainy summer doesn't prove that the climate is cooling: that's a hasty generalisation.",
            answer: "Un été pluvieux ne prouve pas que le climat se refroidisse : c'est une généralisation hâtive.",
            altAnswers: ["Un été pluvieux ne prouve pas que le climat se refroidit : c'est une généralisation hâtive."],
            explanation: "One case cannot found a rule. \"Ne prouve pas que\" denies the claim, so careful French uses the subjunctive \"se refroidisse\" (the indicative is common in speech).",
          },
        ],
      },
      {
        heading: "Correlation is not causation",
        body: [
          "\"La confusion entre corrélation et causalité\" treats two things that vary together as cause and effect. French teachers love \"l'effet cigogne\" as an example: villages with more storks have more babies, so storks bring babies (both simply correlate with rural areas). The Latin \"post hoc, ergo propter hoc\" (after it, therefore because of it) names the version based on chronology.",
        ],
        examples: [
          {
            es: "Les deux courbes évoluent ensemble, mais corrélation n'est pas causalité.",
            en: "The two curves move together, but correlation isn't causation.",
          },
          {
            es: "C'est l'effet cigogne : les deux phénomènes ont une cause commune.",
            en: "It's the stork effect: both phenomena have a common cause.",
          },
          {
            es: "La criminalité a baissé après l'installation des caméras, mais cela ne prouve pas que les caméras en soient la cause.",
            en: "Crime fell after the cameras were installed, but that doesn't prove the cameras caused it.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Towns with more cafés also have more doctors. A columnist concludes that cafés attract doctors. What is wrong?",
            options: [
              "Correlation taken for causation: both simply follow the size of the town.",
              "A straw man: nobody said cafés attract doctors.",
              "An appeal to authority: the columnist is not a doctor.",
              "Nothing: the figures prove it.",
            ],
            correctIndex: 0,
            explanation: "Like \"l'effet cigogne\", the two figures vary together because of a common cause (population), not because one causes the other.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it cautious, starting with \"Cela ne prouve pas que\".",
            source: "Le nouveau médicament a fait baisser la fièvre.",
            answer: "Cela ne prouve pas que le nouveau médicament ait fait baisser la fièvre.",
            explanation: "\"Cela ne prouve pas que\" refuses to assert the causal claim, so the verb goes into the past subjunctive: \"ait fait baisser\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each French name to the fallacy.",
        pairs: [
          { left: "l'homme de paille", right: "the straw man" },
          { left: "la pente glissante", right: "the slippery slope" },
          { left: "le faux dilemme", right: "the false dichotomy" },
          { left: "la généralisation hâtive", right: "the hasty generalisation" },
          { left: "l'argument d'autorité", right: "the appeal to authority" },
          { left: "le procès d'intention", right: "attacking someone's presumed motives" },
        ],
        explanation: "These names are used in French schools, newspapers and debates; knowing them lets you name a tactic calmly.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This comparison is misleading: the two countries are not comparable.",
        answer: "Cette comparaison est fallacieuse : les deux pays ne sont pas comparables.",
        altAnswers: ["Cette comparaison est trompeuse : les deux pays ne sont pas comparables."],
        explanation: "\"Fallacieux\" agrees with the feminine \"comparaison\": \"fallacieuse\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: This argument rests on a false premise.",
        words: ["Cet argument", "repose sur", "une prémisse", "fausse."],
        translation: "This argument rests on a false premise.",
        explanation: "\"Reposer sur\" (to rest on): the first thing to check in any fallacy is the premise. \"Prémisse\" is feminine, so \"fausse\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It's a fallacy, not an honest mistake.",
        words: ["C'est", "un sophisme,", "pas", "une erreur", "de bonne foi."],
        translation: "It's a fallacy, not an honest mistake.",
        explanation: "\"Sophisme\" implies intent to mislead; \"une erreur de bonne foi\" is an honest mistake.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[That's an oversimplification]: not all young people vote the same way.",
        sentence: "___ : tous les jeunes ne votent pas de la même façon.",
        answer: "C'est un raccourci",
        altAnswers: ["C'est un raccourci un peu facile"],
        explanation: "\"C'est un raccourci\" (a shortcut) is the everyday way to call out an oversimplification in a debate.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Vous êtes de mauvais foi, monsieur le député.",
        answer: "Vous êtes de mauvaise foi, monsieur le député.",
        explanation: "\"La foi\" is feminine, so the set phrase is \"de mauvaise foi\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "You're [confusing] correlation and causation.",
        sentence: "Vous ___ corrélation et causalité.",
        answer: "confondez",
        explanation: "\"Confondre A et B\" (to mix up A and B) is the classic reply to a correlation passed off as a cause.",
      },
      {
        type: "speak",
        text: "Vous caricaturez ma position : je n'ai jamais parlé d'interdire.",
        prompt: "Say it in French: You're caricaturing my position: I never spoke of banning anything.",
        explanation: "The reply to a straw man: name the distortion (\"vous caricaturez ma position\"), then restore what you really said.",
      },
    ],
  },
  {
    slug: "c2-fallacy-error-hunt",
    level: "FR-C2",
    number: 6,
    title: "Error Hunt: Nommer le Sophisme",
    summary: "Arguments heard on talk shows, in op-eds and at a family dinner: name each fallacy, then rewrite the argument honestly in French.",
    duration: "18 min",
    sections: [
      {
        heading: "The task: name it, then rewrite it",
        body: [
          "Each argument below contains one fallacy. Your task: name it in French, then rewrite the argument so that it says something honest and defensible. The rewrite is usually less spectacular and more convincing: it replaces the trick with a real claim and a hedge.",
        ],
        examples: [
          {
            es: "Vous critiquez la personne au lieu de discuter ses arguments.",
            en: "You're criticising the person instead of discussing their arguments.",
          },
          {
            es: "Personne ne propose de revenir à la bougie ; ce n'est pas le sujet.",
            en: "Nobody is proposing a return to candlelight; that's not the issue.",
          },
          { es: "Cet argument repose sur une caricature.", en: "This argument rests on a caricature." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why is the honest rewrite of a fallacy usually more convincing?",
            options: [
              "It replaces the trick with a real claim and a hedge, so there is something to discuss.",
              "It is more spectacular than the original.",
              "It avoids making any claim at all.",
              "It uses more technical vocabulary.",
            ],
            correctIndex: 0,
            explanation: "The rewrite is less spectacular but defensible: a real claim, softened by a hedge (\"risquer de\", \"certains\", \"reste à savoir si\").",
          },
        ],
      },
      {
        heading: "Argument 1: the straw man",
        body: [
          "Argument 1, a pundit on a news channel: « Les écologistes veulent nous ramener à la bougie. » This is \"l'homme de paille\": no environmental party proposes to abolish electricity. Honest version: « Les écologistes proposent de réduire fortement notre consommation d'énergie, ce qui aurait un coût pour les ménages. » Now there is something to discuss.",
        ],
        examples: [
          {
            es: "Les écologistes veulent nous ramener à la bougie.",
            en: "The greens want to take us back to candlelight. (straw man)",
          },
          {
            es: "Les écologistes proposent de réduire fortement notre consommation d'énergie, ce qui aurait un coût pour les ménages.",
            en: "The greens propose to cut our energy consumption sharply, which would come at a cost to households.",
          },
          { es: "Personne ne propose de supprimer l'électricité.", en: "Nobody is proposing to abolish electricity." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Les écologistes veulent nous ramener à l'âge de pierre. » Name the fallacy.",
            options: [
              "l'homme de paille",
              "l'argument d'autorité",
              "la confusion entre corrélation et causalité",
              "la généralisation hâtive",
            ],
            correctIndex: 0,
            explanation: "A position nobody holds is attributed to opponents to make them easy to knock down.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"veulent supprimer\" into the honest \"proposent de limiter\".",
            source: "Les élus veulent supprimer la voiture en ville.",
            answer: "Les élus proposent de limiter la voiture en ville.",
            altAnswers: ["Les élus proposent de limiter la circulation automobile en ville."],
            explanation: "The straw man inflates the position (abolish); the honest version states what is really proposed (limit), which can then be discussed. \"Proposer de\" + infinitive.",
          },
        ],
      },
      {
        heading: "Argument 2: the ad hominem",
        body: [
          "Argument 2, the same evening: « Ce sociologue n'a jamais travaillé dans le privé ; son étude ne vaut rien. » \"Attaque ad hominem\": the study's value depends on its method, not on its author's career. Honest version: « La méthode de cette étude me paraît contestable : l'échantillon est trop réduit. »",
        ],
        examples: [
          {
            es: "Ce sociologue n'a jamais travaillé dans le privé ; son étude ne vaut rien.",
            en: "This sociologist has never worked in the private sector; his study is worthless. (ad hominem)",
          },
          {
            es: "La méthode de cette étude me paraît contestable : l'échantillon est trop réduit.",
            en: "This study's method seems questionable to me: the sample is too small.",
          },
          {
            es: "Ses conclusions se discutent, mais pas à cause de son parcours.",
            en: "Her conclusions can be debated, but not because of her career.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Cette journaliste a vingt-cinq ans : que peut-elle bien savoir des retraites ? » Name the fallacy.",
            options: ["une attaque ad hominem", "une pente glissante", "un faux dilemme", "un appel à la popularité"],
            correctIndex: 0,
            explanation: "Her age says nothing about the quality of her article: the speaker attacks the person instead of the argument.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les conclusions de ce rapport me paraît fragiles : les données sont anciennes.",
            answer: "Les conclusions de ce rapport me paraissent fragiles : les données sont anciennes.",
            explanation: "The subject is \"les conclusions\" (plural), so the verb is \"paraissent\". The honest critique targets the data, not the author.",
          },
        ],
      },
      {
        heading: "Argument 3: after it, therefore because of it",
        body: [
          "Argument 3, a tribune in a weekly: « Depuis l'ouverture de la nouvelle médiathèque, les cambriolages ont augmenté dans le quartier. Les élus devraient en tirer les conséquences. » The error is \"post hoc, ergo propter hoc\", a confusion between chronology and causality. Honest version: « Les cambriolages ont augmenté dans le quartier depuis un an ; il faudrait en rechercher les causes avant de décider. »",
        ],
        examples: [
          {
            es: "Depuis l'ouverture de la médiathèque, les cambriolages ont augmenté dans le quartier.",
            en: "Since the media library opened, burglaries have increased in the area. (post hoc)",
          },
          {
            es: "Les cambriolages ont augmenté ; il faudrait en rechercher les causes avant de décider.",
            en: "Burglaries have increased; their causes should be investigated before any decision.",
          },
          {
            es: "Les ventes ont baissé depuis l'arrivée du nouveau directeur, mais rien ne dit qu'il en soit responsable.",
            en: "Sales have fallen since the new director arrived, but nothing says he is responsible.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Depuis qu'on a changé de maire, il pleut tous les week-ends.",
            question: "What fallacy would this set up, if used as an argument against the mayor?",
            options: [
              "Confusing chronology with causality",
              "Attacking the person",
              "Appealing to authority",
              "Caricaturing the opponent",
            ],
            correctIndex: 0,
            explanation: "Post hoc, ergo propter hoc: the rain came after the new mayor, which proves nothing about cause.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: That doesn't prove the library is responsible.",
            words: ["Cela", "ne prouve pas", "que", "la médiathèque", "soit", "responsable."],
            translation: "That doesn't prove the library is responsible.",
            explanation: "Negated \"prouver que\": subjunctive \"soit\".",
          },
        ],
      },
      {
        heading: "Argument 4: the false dilemma",
        body: [
          "Argument 4, another columnist: « Soit l'État paie, soit nos théâtres ferment. » \"Faux dilemme\": sponsorship, ticket prices, regional funding and cooperation exist. Honest version: « Sans un soutien public suffisant, de nombreux théâtres risquent de fermer. » Note how \"risquer de\" and \"de nombreux\" replace the absolute.",
        ],
        examples: [
          {
            es: "Soit l'État paie, soit nos théâtres ferment.",
            en: "Either the state pays or our theatres close. (false dilemma)",
          },
          {
            es: "Sans un soutien public suffisant, de nombreux théâtres risquent de fermer.",
            en: "Without sufficient public support, many theatres may close.",
          },
          { es: "De nombreux commerces risquent de disparaître sans aide.", en: "Many shops may disappear without help." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Soit on augmente les impôts, soit on ferme les hôpitaux. » What is the best honest rewrite?",
            options: [
              "Sans recettes supplémentaires, certains services hospitaliers risquent d'être réduits.",
              "Soit on augmente les impôts, soit on ferme les écoles aussi.",
              "Tout le monde sait qu'il faut augmenter les impôts.",
              "Ceux qui refusent l'impôt veulent la mort de l'hôpital.",
            ],
            correctIndex: 0,
            explanation: "The honest version names a risk and a condition. The others keep the false dilemma, appeal to popularity, or add a \"procès d'intention\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the false dilemma into a hedged claim, starting with \"Sans subvention\" and using \"risquer de\".",
            source: "Soit on subventionne la ligne de train, soit elle ferme.",
            answer: "Sans subvention, la ligne de train risque de fermer.",
            altAnswers: ["Sans subventions, la ligne de train risque de fermer.", "Sans subvention, la ligne risque de fermer."],
            explanation: "\"Risquer de\" replaces the absolute either/or with a real, arguable risk, as in \"de nombreux théâtres risquent de fermer\".",
          },
        ],
      },
      {
        heading: "Argument 5: authority plus overstatement",
        body: [
          "Argument 5, an editorial: « Tous les grands économistes s'accordent à dire que cette réforme est indispensable. » This is an \"argument d'autorité\" combined with an overstatement (\"tous\"), since economists rarely agree on anything. Honest version: « Plusieurs économistes reconnus, notamment X et Y, estiment que cette réforme est nécessaire, pour les raisons suivantes. »",
        ],
        examples: [
          {
            es: "Tous les grands économistes s'accordent à dire que cette réforme est indispensable.",
            en: "All the great economists agree that this reform is essential. (appeal to authority)",
          },
          {
            es: "Plusieurs économistes reconnus estiment que cette réforme est nécessaire.",
            en: "Several respected economists believe this reform is necessary.",
          },
          {
            es: "Certains spécialistes, notamment au CNRS, jugent cette mesure utile.",
            en: "Some specialists, notably at the CNRS, consider this measure useful.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it honest: change \"Tous les grands juristes s'accordent à dire\" into \"Plusieurs juristes estiment\".",
            source: "Tous les grands juristes s'accordent à dire que cette loi est inconstitutionnelle.",
            answer: "Plusieurs juristes estiment que cette loi est inconstitutionnelle.",
            altAnswers: ["Plusieurs juristes reconnus estiment que cette loi est inconstitutionnelle."],
            explanation: "\"Tous\" is an overstatement and \"les grands\" leans on authority; \"plusieurs juristes estiment\" makes a claim you can defend. \"Estimer que\" takes the indicative.",
          },
        ],
      },
      {
        heading: "Argument 6: the hasty generalisation",
        body: [
          "Argument 6, Uncle Gérard at Sunday lunch: « Les jeunes ne veulent plus travailler. Regarde ton cousin : il a démissionné au bout de trois mois. » \"Généralisation hâtive\" from a single case, plus a sweeping \"les jeunes\". Honest version: « Certains jeunes semblent moins prêts à accepter des conditions de travail difficiles. »",
        ],
        examples: [
          { es: "Les jeunes ne veulent plus travailler.", en: "Young people don't want to work anymore. (hasty generalisation)" },
          {
            es: "Certains jeunes semblent moins prêts à accepter des conditions de travail difficiles.",
            en: "Some young people seem less willing to accept hard working conditions.",
          },
          {
            es: "Mon voisin roule trop vite, donc tous les motards sont dangereux.",
            en: "My neighbour drives too fast, so all bikers are dangerous.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the generalisation into a hedge with \"certains\" and \"semblent\".",
            source: "Les retraités ne s'intéressent pas au numérique.",
            answer: "Certains retraités semblent ne pas s'intéresser au numérique.",
            altAnswers: [
              "Certains retraités ne semblent pas s'intéresser au numérique.",
              "Certains retraités semblent peu s'intéresser au numérique.",
            ],
            explanation: "\"Certains\" replaces the sweeping \"les retraités\", and \"semblent\" turns a verdict into an observation.",
          },
        ],
      },
      {
        heading: "Argument 7: the slippery slope",
        body: [
          "Argument 7, Aunt Sylvie: « Si on laisse les enfants avoir un téléphone à dix ans, à quinze ans ils ne sortiront plus de leur chambre. » \"Pente glissante\". Honest version: « Un téléphone trop tôt peut favoriser l'isolement ; il faudrait au moins fixer des règles. »",
        ],
        examples: [
          {
            es: "Si on leur donne un téléphone à dix ans, à quinze ans ils ne sortiront plus de leur chambre.",
            en: "If we give them a phone at ten, at fifteen they'll never leave their room. (slippery slope)",
          },
          {
            es: "Un téléphone trop tôt peut favoriser l'isolement ; il faudrait au moins fixer des règles.",
            en: "A phone too early can encourage isolation; at the very least there should be rules.",
          },
          {
            es: "Si on supprime une ligne de bus, demain on supprimera toutes les autres.",
            en: "If we cut one bus line, tomorrow we'll cut all the others.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Aujourd'hui on interdit les trottinettes, demain on interdira les vélos ! » Name the fallacy.",
            options: ["la pente glissante", "l'homme de paille", "l'argument d'autorité", "la généralisation hâtive"],
            correctIndex: 0,
            explanation: "One step is said to lead inevitably to a catastrophe, with no evidence for the chain: \"la pente glissante\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Video games [can encourage] isolation.",
            sentence: "Les jeux vidéo ___ l'isolement.",
            answer: "peuvent favoriser",
            explanation: "The honest version claims a possibility, not a certainty: \"pouvoir favoriser\", here in the plural to agree with \"les jeux vidéo\".",
          },
        ],
      },
      {
        heading: "Argument 8: popularity, and reste à savoir si",
        body: [
          "Argument 8, cousin Mehdi, defending a diet he read about: « Tout le monde en parle, ça doit bien marcher. » \"Appel à la popularité\". Honest version: « Ce régime est à la mode ; reste à savoir s'il a fait l'objet d'études sérieuses. » \"Reste à savoir si\" (it remains to be seen whether) is a polite way to raise the real question without humiliating anyone at the table.",
        ],
        examples: [
          {
            es: "Tout le monde en parle, ça doit bien marcher.",
            en: "Everyone's talking about it, so it must work. (appeal to popularity)",
          },
          {
            es: "Ce régime est à la mode ; reste à savoir s'il a fait l'objet d'études sérieuses.",
            en: "This diet is fashionable; it remains to be seen whether it has been properly studied.",
          },
          {
            es: "Ce livre est un best-seller ; reste à savoir s'il dit vrai.",
            en: "This book is a best-seller; it remains to be seen whether it tells the truth.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Tout le monde le fait, alors pourquoi pas nous ?",
            question: "Which fallacy did you hear?",
            options: ["l'appel à la popularité", "le faux dilemme", "l'attaque ad hominem", "la pente glissante"],
            correctIndex: 0,
            explanation: "Popularity is taken as proof: everyone does it, so it must be right.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: It remains to be seen whether it works.",
            words: ["Reste", "à savoir", "si", "ça", "marche."],
            translation: "It remains to be seen whether it works.",
            explanation: "\"Reste à savoir si\" drops the impersonal \"il\" of \"il reste à savoir\": the polite way to raise the real question.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "You're attacking the author instead of answering the study.",
        answer: "Vous attaquez l'auteur au lieu de répondre à l'étude.",
        altAnswers: ["Vous attaquez l'auteur au lieu de répondre aux arguments de l'étude."],
        explanation: "\"Au lieu de\" + infinitive names the ad hominem: the person instead of the argument.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Nobody is proposing to close all the theatres.",
        answer: "Personne ne propose de fermer tous les théâtres.",
        explanation: "The calm reply to a straw man: \"personne ne propose de\" + infinitive restores the real terms of the debate.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Several respected doctors] believe the treatment is effective.",
        sentence: "___ estiment que le traitement est efficace.",
        answer: "Plusieurs médecins reconnus",
        altAnswers: ["Plusieurs médecins réputés"],
        explanation: "\"Plusieurs\" instead of \"tous\", and named, recognised experts instead of an appeal to authority.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "That's a hasty generalisation: [you're drawing a rule from a single case].",
        sentence: "C'est une généralisation hâtive : ___.",
        answer: "vous tirez une règle d'un seul cas",
        altAnswers: [
          "tu tires une règle d'un seul cas",
          "vous tirez une règle générale d'un seul cas",
          "tu tires une règle générale d'un seul cas",
        ],
        explanation: "\"Tirer une règle de\" + the case; \"un seul cas\" stresses how thin the evidence is.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It remains to be seen whether the cameras have reduced crime.",
        answer: "Reste à savoir si les caméras ont fait baisser la délinquance.",
        altAnswers: [
          "Reste à savoir si les caméras ont réduit la délinquance.",
          "Il reste à savoir si les caméras ont fait baisser la délinquance.",
          "Il reste à savoir si les caméras ont réduit la délinquance.",
        ],
        explanation: "\"Reste à savoir si\" raises the real question politely; it is followed by the indicative.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Plusieurs économistes estiment que cette réforme soit nécessaire.",
        answer: "Plusieurs économistes estiment que cette réforme est nécessaire.",
        explanation: "\"Estimer que\" in the affirmative asserts an opinion, so it takes the indicative: \"est\", not \"soit\".",
      },
      {
        type: "speak",
        text: "Reste à savoir si cette méthode a été évaluée.",
        prompt: "Say it in French: It remains to be seen whether this method has been evaluated.",
        explanation: "\"Reste à savoir si\" without \"il\" is the elegant written form; the participle \"évaluée\" agrees with \"la méthode\".",
      },
    ],
  },
  {
    slug: "c2-debate-4",
    level: "FR-C2",
    number: 7,
    title: "L'Art du Débat et de l'Argumentation, Part 4 of 9",
    summary: "Refuting and reframing (\"vous confondez A et B\", \"là n'est pas la question\", \"c'est un raccourci\"), and the formulas for taking and keeping the floor under pressure.",
    duration: "18 min",
    sections: [
      {
        heading: "Vous confondez A et B",
        body: [
          "A refutation in French usually names the logical fault before giving the fact. \"Vous confondez A et B\" (you're confusing A and B) is the most useful frame of all: \"Vous confondez la dette publique et le déficit.\" It sounds factual rather than hostile, and it forces the opponent to defend a distinction instead of a slogan.",
        ],
        examples: [
          { es: "Vous confondez la dette publique et le déficit.", en: "You're confusing public debt with the deficit." },
          { es: "Vous confondez le salaire brut et le salaire net.", en: "You're confusing gross and net pay." },
          {
            es: "Vous confondez le nombre de plaintes et le nombre de délits.",
            en: "You're confusing the number of complaints with the number of offences.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your opponent treats the number of hospital beds as if it were the number of doctors. Which reply names the fault?",
            options: [
              "Vous confondez les lits et les médecins.",
              "Vous mentez, monsieur.",
              "Je termine.",
              "Pardon, je vous laisse terminer.",
            ],
            correctIndex: 0,
            explanation: "\"Vous confondez A et B\" names the logical fault before the fact: it sounds factual, not hostile, and forces the opponent to defend a distinction.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "You're [confusing] inflation and the price of energy.",
            sentence: "Vous ___ l'inflation et le prix de l'énergie.",
            answer: "confondez",
            explanation: "\"Confondre A et B\" (or \"A avec B\"): the most useful refutation frame in a French debate.",
          },
        ],
      },
      {
        heading: "Cool ways to say that's false",
        body: [
          "Other frames: \"c'est inexact\" (that's incorrect, cooler and more formal than \"c'est faux\"), \"les chiffres disent le contraire\", \"c'est un raccourci\" (an oversimplification), \"vous comparez ce qui n'est pas comparable\", \"vous prenez la conséquence pour la cause\". Notice that French debaters rarely say \"vous mentez\" on air: it is a serious accusation, close to an insult. \"Vous travestissez la réalité\" (you're distorting reality) or \"c'est une contre-vérité\" (an untruth) are the formal ways to say it.",
        ],
        examples: [
          {
            es: "C'est inexact : le chômage a baissé de deux points en trois ans.",
            en: "That's incorrect: unemployment has fallen two points in three years.",
          },
          { es: "Vous comparez ce qui n'est pas comparable.", en: "You're comparing things that can't be compared." },
          { es: "Vous prenez la conséquence pour la cause.", en: "You're mistaking the effect for the cause." },
          { es: "C'est une contre-vérité, et vous le savez.", en: "That's an untruth, and you know it." },
          {
            es: "Les chiffres de l'Insee disent exactement le contraire.",
            en: "The figures from INSEE say exactly the opposite.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "That's incorrect: the figures say exactly the opposite.",
            answer: "C'est inexact : les chiffres disent exactement le contraire.",
            altAnswers: [
              "C'est inexact, les chiffres disent exactement le contraire.",
              "C'est inexact : les chiffres disent précisément le contraire.",
              "C'est inexact : les chiffres disent tout le contraire.",
              "C'est faux : les chiffres disent exactement le contraire.",
            ],
            explanation: "\"C'est inexact\" is cooler and more formal than \"c'est faux\", and so more effective on air.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the accusation into the formal on-air version, with \"contre-vérité\".",
            source: "Vous mentez.",
            answer: "C'est une contre-vérité.",
            altAnswers: [
              "Ce que vous dites est une contre-vérité.",
              "Vous dites une contre-vérité.",
              "Vous énoncez une contre-vérité.",
            ],
            explanation: "\"Vous mentez\" is close to an insult on French television; \"c'est une contre-vérité\" (an untruth) says the same thing formally, about the statement rather than the person.",
          },
        ],
      },
      {
        heading: "Words you never said",
        body: [
          "When the opponent attributes words to you, the formula is \"vous me prêtez des propos que je n'ai pas tenus\" (you're attributing words to me that I never said). \"Prêter\" (to lend) here means to attribute, and \"tenir des propos\" is the formal collocation for to say things, make remarks.",
        ],
        examples: [
          {
            es: "Vous me prêtez des propos que je n'ai jamais tenus.",
            en: "You're putting words in my mouth that I never said.",
          },
          { es: "Je n'ai jamais tenu de tels propos.", en: "I never made such remarks." },
          { es: "On me prête des intentions que je n'ai pas.", en: "People attribute intentions to me that I don't have." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your opponent claims you want to abolish a tax you only proposed to reform. What do you say?",
            options: [
              "Vous me prêtez des propos que je n'ai pas tenus.",
              "Vous me prêtez de l'argent que je n'ai pas.",
              "Vous mentez comme vous respirez.",
              "Vous avez raison, je retire ce que j'ai dit.",
            ],
            correctIndex: 0,
            explanation: "\"Prêter des propos\" attributes words falsely; the reply is firm without being an insult.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The minister [made] shocking remarks.",
            sentence: "Le ministre a ___ des propos choquants.",
            answer: "tenu",
            explanation: "\"Tenir des propos\" is the formal collocation for making remarks; its participle is \"tenu\".",
          },
        ],
      },
      {
        heading: "Là n'est pas la question",
        body: [
          "Reframing means refusing the opponent's terms and putting the debate back on your ground. \"Là n'est pas la question\" (that's not the point) uses a fronted \"là\" with inversion of the usual order, which gives it a firm, slightly lofty ring. Its spoken equivalent is \"ce n'est pas le sujet\" or \"ce n'est pas la question\".",
        ],
        examples: [
          { es: "Là n'est pas la question.", en: "That's not the point." },
          { es: "Ce n'est pas le sujet : parlons des salaires.", en: "That's not the issue: let's talk about wages." },
          { es: "Là n'est pas l'enjeu du débat.", en: "That's not what's at stake in this debate." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Là n'est pas l'essentiel.",
            question: "What does it mean?",
            options: [
              "That's not the main point.",
              "The essential is not there yet.",
              "There's nothing essential here.",
              "That's essential over there.",
            ],
            correctIndex: 0,
            explanation: "Fronted \"là\" with inversion (\"là n'est pas...\") gives a firm, slightly lofty reframe: that's not what matters.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the firm, formal version that starts with \"Là\".",
            source: "Ce n'est pas le problème.",
            answer: "Là n'est pas le problème.",
            explanation: "\"Là n'est pas\" fronts \"là\" and inverts the usual order; \"ce n'est pas\" is the everyday spoken equivalent.",
          },
        ],
      },
      {
        heading: "Moving the debate onto your ground",
        body: [
          "Other reframes: \"revenons-en aux faits\" (let's get back to the facts), \"le vrai sujet, c'est...\" (a pseudo-cleft that names the real issue), \"posons le problème autrement\", \"la question n'est pas de savoir si..., mais comment...\". The last one is very French: it concedes the principle in passing and shifts the debate to the method.",
        ],
        examples: [
          { es: "Revenons-en aux faits, si vous le voulez bien.", en: "Let's get back to the facts, if you don't mind." },
          {
            es: "Le vrai sujet, c'est le pouvoir d'achat des retraités.",
            en: "The real issue is the purchasing power of pensioners.",
          },
          {
            es: "La question n'est pas de savoir s'il faut réformer, mais comment.",
            en: "The question isn't whether to reform, but how.",
          },
          {
            es: "Posons le problème autrement : qui paiera, et dans quelle proportion ?",
            en: "Let's put the problem another way: who will pay, and in what proportion?",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The question isn't whether] the factory should close, but when.",
            sentence: "___ l'usine doit fermer, mais quand.",
            answer: "La question n'est pas de savoir si",
            explanation: "\"La question n'est pas de savoir si..., mais...\" concedes the principle in passing and shifts the debate to the timing or the method.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: The real issue is access to healthcare.",
            words: ["Le vrai sujet,", "c'est", "l'accès", "aux soins."],
            translation: "The real issue is access to healthcare.",
            explanation: "The pseudo-cleft \"le vrai sujet, c'est...\" names the real issue and puts it in the stressed final position.",
          },
        ],
      },
      {
        heading: "Au niveau de: the filler to drop",
        body: [
          "Be careful with \"au niveau de\": in a debate it is everywhere (\"au niveau des salaires, au niveau de l'emploi\"), and Mastery examiners notice it as a filler. Prefer \"en matière de\", \"sur le plan de\", \"pour ce qui est de\", \"s'agissant de\" (formal).",
        ],
        examples: [
          {
            es: "S'agissant de la sécurité, les chiffres sont stables depuis dix ans.",
            en: "As far as security is concerned, the figures have been stable for ten years.",
          },
          { es: "En matière d'emploi, le bilan est contrasté.", en: "On employment, the record is mixed." },
          { es: "Sur le plan financier, le projet tient la route.", en: "Financially, the project holds up." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence avoids the filler that Mastery examiners penalise?",
            options: [
              "En matière d'emploi, le bilan est contrasté.",
              "Au niveau de l'emploi, le bilan est contrasté.",
              "Au niveau emploi, le bilan, il est contrasté.",
              "Niveau emploi, c'est contrasté.",
            ],
            correctIndex: 0,
            explanation: "\"En matière de\" is precise and formal; \"au niveau de\" is an overused filler, and \"niveau emploi\" is casual speech.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the filler \"au niveau de\" to \"en matière de\".",
            source: "Au niveau du logement, la ville a pris du retard.",
            answer: "En matière de logement, la ville a pris du retard.",
            altAnswers: [
              "S'agissant du logement, la ville a pris du retard.",
              "Pour ce qui est du logement, la ville a pris du retard.",
              "Sur le plan du logement, la ville a pris du retard.",
            ],
            explanation: "\"Au niveau de\" is the filler Mastery examiners notice; \"en matière de\" (no article after it) is the precise replacement.",
          },
        ],
      },
      {
        heading: "Getting in",
        body: [
          "French televised debates are famous for interruptions; foreign viewers often find them chaotic. You need formulas to get in and to stay in. To get in: \"si vous me permettez\", \"je me permets de vous interrompre\", \"juste un mot\", \"je voudrais réagir sur ce point\". Each sounds polite, even while you are cutting someone off.",
        ],
        examples: [
          {
            es: "Si vous me permettez, je voudrais réagir sur ce point.",
            en: "If you'll allow me, I'd like to respond on that point.",
          },
          {
            es: "Je me permets de vous interrompre, car ce chiffre est faux.",
            en: "Forgive me for interrupting, but that figure is wrong.",
          },
          { es: "Juste un mot sur ce chiffre, si vous permettez.", en: "Just a word on that figure, if I may." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You want to get into a heated exchange without sounding rude. What do you say?",
            options: [
              "Je voudrais réagir sur ce point.",
              "Taisez-vous, c'est mon tour !",
              "Je termine.",
              "Pardon, je vous laisse terminer.",
            ],
            correctIndex: 0,
            explanation: "\"Je voudrais réagir sur ce point\" gets you in politely. \"Je termine\" keeps the floor you already have, and \"je vous laisse terminer\" gives it back.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Forgive me for interrupting you], but the date is wrong.",
            sentence: "___, mais la date est fausse.",
            answer: "Je me permets de vous interrompre",
            explanation: "\"Je me permets de\" is polite even while you are cutting someone off: you announce the interruption instead of simply shouting over them.",
          },
        ],
      },
      {
        heading: "Keeping the floor",
        body: [
          "To keep the floor when interrupted: \"laissez-moi finir\", \"je n'ai pas terminé\", \"je termine\" (I'm finishing, a present with future meaning: give me ten more seconds), \"permettez-moi d'aller au bout de mon raisonnement\". Repeat calmly rather than raising your voice; the moderator usually supports the person who is being interrupted.",
        ],
        examples: [
          {
            es: "Je termine : il nous faut un plan sur dix ans, pas sur dix mois.",
            en: "Let me finish: we need a ten-year plan, not a ten-month one.",
          },
          { es: "Permettez-moi d'aller au bout de mon raisonnement.", en: "Allow me to follow my reasoning through to the end." },
          { es: "Je n'ai pas terminé, monsieur le ministre.", en: "I haven't finished, Minister." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it polite, with \"permettez-moi de\".",
            source: "Je veux terminer ma phrase.",
            answer: "Permettez-moi de terminer ma phrase.",
            altAnswers: ["Permettez-moi de finir ma phrase."],
            explanation: "\"Permettez-moi de\" + infinitive keeps the floor courteously; calm repetition works better than a raised voice.",
          },
        ],
      },
      {
        heading: "Fair play and composure",
        body: [
          "\"Je ne vous ai pas interrompu\" (I didn't interrupt you) is the classic reminder of fair play. And when you have overstepped, the gracious formula is \"pardon, je vous laisse terminer\". Composure is part of the argument: in French debates, the one who loses their temper is usually judged the loser.",
        ],
        examples: [
          { es: "Laissez-moi finir, je ne vous ai pas interrompu.", en: "Let me finish, I didn't interrupt you." },
          { es: "Pardon, je vous laisse terminer.", en: "Sorry, I'll let you finish." },
          { es: "Je ne vous ai pas coupé la parole, moi.", en: "I didn't cut you off, did I?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your opponent keeps interrupting you, though you never interrupted him. Which reminder of fair play fits?",
            options: [
              "Je ne vous ai pas interrompu, moi.",
              "Pardon, je vous laisse terminer.",
              "Revenons-en aux faits.",
              "Vous confondez A et B.",
            ],
            correctIndex: 0,
            explanation: "\"Je ne vous ai pas interrompu\" is the classic appeal to fair play. \"Je vous laisse terminer\" is what you say when you are the one who overstepped.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "You're mistaking a symptom for the cause.",
        answer: "Vous prenez un symptôme pour la cause.",
        explanation: "\"Prendre A pour B\" (to mistake A for B) names a reversal of logic without hostility.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Let's put the problem another way: who benefits from this tax?",
        answer: "Posons le problème autrement : à qui profite cette taxe ?",
        altAnswers: ["Posons le problème autrement : à qui cette taxe profite-t-elle ?"],
        explanation: "\"Posons le problème autrement\" reframes the debate; \"profiter à\" gives \"à qui profite\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[As far as] transport [is concerned], the plan is ambitious.",
        sentence: "___ des transports, le plan est ambitieux.",
        answer: "S'agissant",
        altAnswers: ["Pour ce qui est"],
        explanation: "\"S'agissant de\" (formal) or \"pour ce qui est de\" replace the filler \"au niveau de\"; \"de + les\" contracts to \"des\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Vous me prêtez des intentions que je n'ai jamais eu.",
        answer: "Vous me prêtez des intentions que je n'ai jamais eues.",
        explanation: "With \"avoir\", the participle agrees with a direct object placed before it: \"que\" stands for \"des intentions\" (feminine plural), so \"eues\".",
      },
      {
        type: "matching",
        instructions: "Match each phrase to its use.",
        pairs: [
          { left: "Je termine", right: "Asking for a few more seconds" },
          { left: "Là n'est pas la question", right: "Rejecting the framing" },
          { left: "C'est une contre-vérité", right: "Formally calling a statement false" },
          { left: "Pardon, je vous laisse terminer", right: "Apologising for interrupting" },
          { left: "Vous confondez A et B", right: "Naming a confusion" },
        ],
        explanation: "Courtesy formulas and refutation frames work together: firm on substance, polite in form.",
      },
      {
        type: "dictation",
        audio: "C'est inexact, et les chiffres le prouvent.",
        explanation: "\"C'est inexact\" is cooler and more formal than \"c'est faux\"; \"le\" stands for the whole idea.",
      },
      {
        type: "speak",
        text: "Permettez-moi de terminer : vous confondez le brut et le net.",
        prompt: "Say it in French: Allow me to finish: you're confusing gross and net.",
        explanation: "Keep the floor (\"permettez-moi de terminer\"), then name the confusion (\"vous confondez A et B\").",
      },
    ],
  },
  {
    slug: "c2-defuse-fallacy-dialogue-lab",
    level: "FR-C2",
    number: 8,
    title: "Dialogue Lab: Désamorcer un Sophisme en Direct",
    summary: "A radio debate on banning cars from a city centre: your opponent uses one fallacy after another, and you name each one without aggression and bring the debate back to the arguments.",
    duration: "18 min",
    sections: [
      {
        heading: "The setting",
        body: [
          "A morning radio programme in Lyon. The topic: \"la piétonnisation de la Presqu'île\" (making the central peninsula pedestrian). You are Julien Fabre, a city councillor in favour of the plan. Your opponent is Sandrine Marchal, who represents the shopkeepers' association. The host is Antoine.",
        ],
        examples: [
          { es: "Antoine : Sandrine Marchal, vous vouliez répondre ?", en: "Antoine: Sandrine Marchal, you wanted to respond?" },
          {
            es: "Antoine : Bonjour à tous, ce matin on parle de la piétonnisation de la Presqu'île.",
            en: "Antoine: Good morning, everyone; this morning we're talking about pedestrianising the city-centre peninsula.",
          },
          {
            es: "Julien : Bonjour Antoine, bonjour madame Marchal.",
            en: "Julien: Good morning, Antoine; good morning, Ms Marchal.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "On air, how should Julien address his opponent?",
            options: ["« Madame Marchal », with vous", "« Sandrine », with tu", "« Ma chère », with vous", "« Madame », with tu"],
            correctIndex: 0,
            explanation: "In a public debate, opponents keep the title and \"vous\" throughout, even when the tone hardens.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: Mr Fabre, would you like to answer?",
            words: ["Monsieur Fabre,", "vous", "voulez", "répondre ?"],
            translation: "Mr Fabre, would you like to answer?",
            explanation: "The host gives the floor with a simple intonation question and \"vous\".",
          },
        ],
      },
      {
        heading: "The first trap: two fallacies at once",
        body: [
          "Sandrine opens: « Monsieur Fabre veut tout simplement chasser les voitures de Lyon. Demain, ce sera les livreurs, puis les ambulances ! » Two fallacies at once: a straw man (the plan concerns one district, not the city) and a slippery slope (deliveries, then ambulances).",
        ],
        examples: [
          {
            es: "Sandrine : Monsieur Fabre veut tout simplement chasser les voitures de Lyon.",
            en: "Sandrine: Mr Fabre simply wants to drive cars out of Lyon.",
          },
          {
            es: "Sandrine : Demain, ce sera les livreurs, puis les ambulances !",
            en: "Sandrine: Tomorrow it'll be delivery drivers, then ambulances!",
          },
          { es: "Sandrine : Après les voitures, ce sera les vélos !", en: "Sandrine: After the cars, it'll be bikes!" },
        ],
        checkpoint: [
          {
            type: "multi-select",
            question: "« Vous voulez interdire toutes les voitures en ville, et après ce sera les taxis ! » Which two fallacies does this line combine?",
            options: [
              "l'homme de paille",
              "la pente glissante",
              "l'argument d'autorité",
              "la confusion entre corrélation et causalité",
            ],
            correctIndexes: [0, 1],
            explanation: "\"Toutes les voitures en ville\" inflates the real plan (a straw man), and \"après ce sera les taxis\" predicts an inevitable chain of bans (a slippery slope).",
          },
        ],
      },
      {
        heading: "Defusing: name it, correct it, move on",
        body: [
          "Defusing means naming the tactic in neutral words, correcting the facts, and returning to the real question, in that order and quickly. Shouting \"c'est n'importe quoi !\" would let her win the exchange on tone. Compare: « Vous caricaturez notre projet. Il concerne un seul quartier, et les livraisons comme les secours y resteront autorisés. La vraie question, c'est l'accès des clients : parlons-en. »",
        ],
        examples: [
          {
            es: "Julien : Vous caricaturez notre projet : il concerne un seul quartier.",
            en: "Julien: You're caricaturing our plan: it concerns a single district.",
          },
          {
            es: "Julien : Les livraisons comme les secours y resteront autorisés.",
            en: "Julien: Deliveries and emergency services alike will still be allowed there.",
          },
          {
            es: "Julien : La vraie question, c'est l'accès des clients : parlons-en.",
            en: "Julien: The real question is customer access: let's talk about it.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Sandrine says you want to ban cars from the whole city, then ambulances. Which reply defuses best?",
            options: [
              "Vous caricaturez notre projet : il concerne un seul quartier, et les secours y resteront autorisés.",
              "C'est n'importe quoi, madame !",
              "Et vous, vous voulez transformer Lyon en parking géant !",
              "Je ne pense pas que vous avez lu le projet.",
            ],
            correctIndex: 0,
            explanation: "Name the distortion, correct the facts. The other replies are either insults, a counter-straw man, or contain a mood error (\"je ne pense pas que vous ayez lu\").",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[You're caricaturing] our proposal: it only concerns Sundays.",
            sentence: "___ notre proposition : elle ne concerne que les dimanches.",
            answer: "Vous caricaturez",
            explanation: "Step one of defusing: name the tactic in neutral words. Then the fact (\"ne concerne que\") corrects the distortion.",
          },
        ],
      },
      {
        heading: "The second trap: the person and the crowd",
        body: [
          "Sandrine continues: « Vous, vous habitez à la Croix-Rousse, vous ne savez pas ce que c'est de tenir un commerce. Et puis tous les commerçants sont contre, ça devrait vous faire réfléchir. » Again two moves: an ad hominem (where Julien lives) and an appeal to popularity (all shopkeepers are against).",
        ],
        examples: [
          {
            es: "Sandrine : Vous ne savez pas ce que c'est de tenir un commerce.",
            en: "Sandrine: You don't know what it is to run a shop.",
          },
          {
            es: "Sandrine : Tous les commerçants sont contre, ça devrait vous faire réfléchir.",
            en: "Sandrine: All the shopkeepers are against it; that ought to make you think.",
          },
          {
            es: "Sandrine : Vous n'avez jamais vendu un croissant de votre vie !",
            en: "Sandrine: You've never sold a croissant in your life!",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Tout le quartier est contre vous, ça devrait vous alerter.",
            question: "Which fallacy is this?",
            options: ["An appeal to popularity", "A slippery slope", "A false dilemma", "Confusing correlation and causation"],
            correctIndex: 0,
            explanation: "Numbers are offered as proof: if everyone is against it, it must be bad. That is \"l'appel à la popularité\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "You've never [run] a cafe!",
            sentence: "Vous n'avez jamais ___ un café !",
            answer: "tenu",
            altAnswers: ["dirigé", "géré"],
            explanation: "\"Tenir un commerce, un café, un restaurant\" means to run it; the participle is \"tenu\". The line itself is an ad hominem.",
          },
        ],
      },
      {
        heading: "Deflect, then question the tous",
        body: [
          "A good reply ignores the personal remark or deflects it with one short sentence, then questions the \"tous\": « Mon adresse n'a rien à voir avec le sujet. Quant aux commerçants, ils ne sont pas tous contre : une partie d'entre eux a signé en faveur du projet. Et quand bien même ils le seraient tous, cela ne nous dirait pas si le projet est bon. »",
        ],
        examples: [
          {
            es: "Julien : Mon adresse n'a rien à voir avec le sujet.",
            en: "Julien: My address has nothing to do with the subject.",
          },
          {
            es: "Julien : Les commerçants ne sont pas tous contre : une partie d'entre eux a signé en faveur du projet.",
            en: "Julien: Not all shopkeepers are against it: some of them signed in favour of the plan.",
          },
          {
            es: "Antoine : On ne va pas faire de procès d'intention ce matin.",
            en: "Antoine: Let's not start questioning people's motives this morning.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Vous n'avez jamais tenu un commerce, vous ne pouvez pas comprendre. » Which reply is best on the radio?",
            options: [
              "Mon parcours n'a rien à voir avec le sujet ; parlons plutôt des chiffres de fréquentation.",
              "Et vous, vous n'avez jamais été élue !",
              "C'est vrai, je ne peux pas comprendre, je me tais.",
              "Vous dites n'importe quoi, comme d'habitude.",
            ],
            correctIndex: 0,
            explanation: "Set the ad hominem aside in one sentence and return to the facts.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les habitants ne sont tous pas contre le projet.",
            answer: "Les habitants ne sont pas tous contre le projet.",
            altAnswers: ["Tous les habitants ne sont pas contre le projet."],
            explanation: "The partial negation is \"ne... pas tous\": \"pas\" comes before \"tous\". It is exactly the move that questions an opponent's \"tous\".",
          },
        ],
      },
      {
        heading: "Quand bien même and une partie de",
        body: [
          "Notice \"quand bien même\" + conditional: Julien concedes the most extreme version of her claim and shows that his point still stands. Notice also \"une partie d'entre eux a signé\": with \"une partie de\", the verb can agree with \"partie\" (singular) or with the plural complement; the singular is safer in careful speech.",
        ],
        examples: [
          {
            es: "Julien : Et quand bien même ils le seraient tous, cela ne nous dirait pas si le projet est bon.",
            en: "Julien: And even if they all were, that wouldn't tell us whether the plan is good.",
          },
          { es: "Une partie des habitants a voté pour.", en: "Some of the residents voted in favour." },
          {
            es: "Quand bien même la rue serait déserte, le marché resterait ouvert.",
            en: "Even if the street were deserted, the market would stay open.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Even if] the figures were good, that would prove nothing.",
            sentence: "___ les chiffres seraient bons, cela ne prouverait rien.",
            answer: "Quand bien même",
            explanation: "\"Quand bien même\" + conditional concedes the most extreme version of the claim and shows your point survives it.",
          },
          {
            type: "multiple-choice",
            question: "Which version is the safer choice in careful speech?",
            options: [
              "Une partie des commerçants a signé la pétition.",
              "Une partie des commerçants avons signé la pétition.",
              "Une partie des commerçants a signée la pétition.",
              "Une partie des commerçants ont signés la pétition.",
            ],
            correctIndex: 0,
            explanation: "With \"une partie de\", the verb may agree with \"partie\" (singular) or the plural complement; the singular \"a signé\" is safer. The participle never agrees with the subject after \"avoir\".",
          },
        ],
      },
      {
        heading: "The last trap: the false dilemma",
        body: [
          "Near the end, Sandrine tries a false dilemma: « Il faut choisir : soit vous défendez le commerce de centre-ville, soit vous défendez vos pistes cyclables. » Julien refuses the either/or and reframes: « C'est une fausse alternative. Les deux sont compatibles : à Strasbourg, le chiffre d'affaires des commerces piétonnisés a progressé. La question n'est pas de choisir, mais d'organiser. »",
        ],
        examples: [
          {
            es: "Sandrine : Soit vous défendez le commerce, soit vous défendez vos pistes cyclables.",
            en: "Sandrine: Either you defend local shops or you defend your cycle lanes.",
          },
          {
            es: "Julien : C'est une fausse alternative : les deux sont compatibles.",
            en: "Julien: That's a false choice: the two are compatible.",
          },
          {
            es: "Julien : La question n'est pas de choisir, mais d'organiser.",
            en: "Julien: The question isn't choosing, it's organising.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the either/or into a reframe that starts with \"La question n'est pas de\".",
            source: "Il faut choisir entre les piétons et les commerces.",
            answer: "La question n'est pas de choisir entre les piétons et les commerces.",
            explanation: "Refusing the either/or: \"la question n'est pas de choisir\" denies that the choice exists at all, before you propose how to organise both.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[That's a false choice]: we can protect both shops and pedestrians.",
            sentence: "___ : on peut protéger à la fois les commerces et les piétons.",
            answer: "C'est une fausse alternative",
            altAnswers: ["C'est un faux dilemme"],
            explanation: "\"Une alternative\" traditionally means a choice between two options, so \"une fausse alternative\" is a false either/or.",
          },
        ],
      },
      {
        heading: "Ending constructively",
        body: [
          "Then he ends constructively, which is what listeners remember: « Je vous propose une chose : un comité de suivi avec les commerçants, et un bilan public dans un an. Si les chiffres sont mauvais, nous corrigerons. » Proposing a concrete procedure is the best answer to a series of fallacies: it shows that you are willing to be judged on facts.",
        ],
        examples: [
          {
            es: "Julien : Je vous propose une chose : un bilan public dans un an.",
            en: "Julien: I'll make you one proposal: a public assessment in a year.",
          },
          {
            es: "Julien : Si les chiffres sont mauvais, nous corrigerons.",
            en: "Julien: If the figures are bad, we'll make corrections.",
          },
          {
            es: "Julien : Nous publierons les chiffres chaque trimestre.",
            en: "Julien: We'll publish the figures every quarter.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "After a series of fallacies, what is the strongest way to end?",
            options: [
              "Propose a concrete procedure, so you can be judged on facts.",
              "List every fallacy your opponent committed.",
              "Repeat your opening statement word for word.",
              "Let the opponent have the last word without comment.",
            ],
            correctIndex: 0,
            explanation: "A concrete procedure (a monitoring committee, a public review) shows you accept to be judged on facts, and it is what listeners remember.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "If the results are disappointing, [we will adjust] the plan.",
            sentence: "Si les résultats sont décevants, nous ___ le plan.",
            answer: "ajusterons",
            altAnswers: ["corrigerons", "modifierons", "adapterons", "réviserons"],
            explanation: "\"Si\" + present, then the future in the main clause: \"nous ajusterons\".",
          },
        ],
      },
      {
        heading: "The host's last line",
        body: [
          "Antoine closes: « Merci à tous les deux. On aura compris que le débat est loin d'être clos. » \"Loin d'être clos\" (far from closed) is the journalist's standard final line.",
        ],
        examples: [
          {
            es: "Antoine : On aura compris que le débat est loin d'être clos.",
            en: "Antoine: Clearly, the debate is far from over.",
          },
          { es: "Antoine : Le débat reste ouvert.", en: "Antoine: The debate remains open." },
          { es: "Antoine : Merci à tous les deux, et bonne journée.", en: "Antoine: Thank you both, and have a good day." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "La question est loin d'être réglée.",
            question: "What does the host mean?",
            options: [
              "The question is far from settled.",
              "The question was settled long ago.",
              "The question is too far away to matter.",
              "The question has just been settled.",
            ],
            correctIndex: 0,
            explanation: "\"Loin de\" + infinitive (far from): \"loin d'être réglée\", like \"loin d'être clos\", is the journalist's standard closing line.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Emergency vehicles will still be able to get through.",
        answer: "Les véhicules de secours pourront toujours circuler.",
        altAnswers: [
          "Les véhicules de secours pourront toujours passer.",
          "Les secours pourront toujours circuler.",
          "Les secours pourront toujours passer.",
        ],
        explanation: "Correcting a slippery slope with a fact: the future of \"pouvoir\" is \"pourront\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Not all residents are in favour, but many are.",
        answer: "Les habitants ne sont pas tous pour, mais beaucoup le sont.",
        altAnswers: ["Tous les habitants ne sont pas pour, mais beaucoup le sont."],
        explanation: "\"Ne... pas tous\" is the partial negation; \"le\" stands for the adjective idea (in favour).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Si le bilan sera négatif, nous reviendrons sur la mesure.",
        answer: "Si le bilan est négatif, nous reviendrons sur la mesure.",
        explanation: "After \"si\" expressing a condition, French never uses the future: \"si le bilan est\", then the future \"nous reviendrons\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Let's talk about the figures, not about people.",
        words: ["Parlons", "des chiffres,", "pas", "des personnes."],
        translation: "Let's talk about the figures, not about people.",
        explanation: "Returning to the real question: the \"nous\" imperative \"parlons de\" steers the debate away from the ad hominem.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The question isn't whether to close the street, but how to organise deliveries.",
        answer: "La question n'est pas de savoir s'il faut fermer la rue, mais comment organiser les livraisons.",
        altAnswers: ["La question n'est pas de savoir s'il faut fermer la rue, mais de savoir comment organiser les livraisons."],
        explanation: "\"La question n'est pas de savoir si..., mais comment...\" concedes the principle and moves the debate to the method.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'll make you one proposal: a monitoring committee with the shopkeepers.",
        answer: "Je vous propose une chose : un comité de suivi avec les commerçants.",
        altAnswers: [
          "Je vous fais une proposition : un comité de suivi avec les commerçants.",
          "Je vous propose une chose, un comité de suivi avec les commerçants.",
        ],
        explanation: "\"Un comité de suivi\" is the standard term for a monitoring committee; a concrete proposal ends a run of fallacies.",
      },
      {
        type: "matching",
        instructions: "Match Sandrine's line to the fallacy.",
        pairs: [
          { left: "Demain, ce sera les ambulances !", right: "la pente glissante" },
          { left: "Vous voulez chasser les voitures de Lyon.", right: "l'homme de paille" },
          { left: "Vous habitez à la Croix-Rousse.", right: "l'attaque ad hominem" },
          { left: "Tous les commerçants sont contre.", right: "l'appel à la popularité" },
          { left: "Soit le commerce, soit les pistes cyclables.", right: "le faux dilemme" },
        ],
        explanation: "Recognising the move is the first step; naming it in neutral words is the second.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[The emergency services] will keep permanent access.",
        sentence: "___ garderont un accès permanent.",
        answer: "Les secours",
        altAnswers: ["Les services de secours"],
        explanation: "\"Les secours\" (always plural in this sense) means the emergency services; it takes a plural verb, \"garderont\".",
      },
      {
        type: "speak",
        text: "C'est un faux dilemme : on peut faire les deux.",
        prompt: "Say it in French: That's a false dilemma: we can do both.",
        explanation: "Name the tactic, then give the way out: \"on peut faire les deux\".",
      },
    ],
  },
  {
    slug: "c2-debate-5",
    level: "FR-C2",
    number: 9,
    title: "L'Art du Débat et de l'Argumentation, Part 5 of 9",
    summary: "Degrees of disagreement from \"je nuancerais\" to \"je m'inscris en faux\", and the art of agreeing in part: \"je vous rejoins sur un point\", \"sans aller jusqu'à dire que\".",
    duration: "18 min",
    sections: [
      {
        heading: "A scale of disagreement: the soft end",
        body: [
          "French has a rich gradation of disagreement, and choosing the right degree is a Mastery skill: too soft and you sound as if you agree, too hard and you sound aggressive. At the soft end: \"je nuancerais\" (I'd qualify that a little), \"je ne suis pas tout à fait d'accord\", \"je ne dirais pas exactement cela\", \"c'est un peu plus compliqué que ça\". The conditional does the softening.",
        ],
        examples: [
          {
            es: "Je ne suis pas tout à fait d'accord avec cette lecture des chiffres.",
            en: "I don't entirely agree with that reading of the figures.",
          },
          { es: "Je ne dirais pas exactement cela.", en: "I wouldn't put it quite like that." },
          { es: "C'est un peu plus compliqué que ça.", en: "It's a bit more complicated than that." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A colleague's summary is mostly right but misses a detail. What do you say in a meeting?",
            options: [
              "Je nuancerais un peu.",
              "Je m'inscris totalement en faux.",
              "C'est parfaitement inexact.",
              "Je récuse cette analyse.",
            ],
            correctIndex: 0,
            explanation: "A small disagreement calls for the soft end of the scale; the others are for serious, public disagreement.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it softer, with \"je nuancerais\".",
            source: "Votre bilan est faux.",
            answer: "Je nuancerais votre bilan.",
            altAnswers: ["Je nuancerais un peu votre bilan."],
            explanation: "The conditional does the softening: \"je nuancerais\" signals a qualification, not a rejection.",
          },
        ],
      },
      {
        heading: "Nuancer: the key verb",
        body: [
          "\"Nuancer\" is a key verb of French intellectual life: to qualify, to add shades. \"Je nuancerais votre propos\" means I'd qualify what you said. Its noun gives \"apporter une nuance\" (to add a qualification) and the praise \"un esprit nuancé\". A French audience values nuance highly; \"c'est plus nuancé que ça\" is a polite way of saying your opponent is simplistic.",
        ],
        examples: [
          { es: "Je nuancerais un peu votre propos.", en: "I'd qualify what you've said a little." },
          { es: "Permettez-moi d'apporter une nuance.", en: "Allow me to add a qualification." },
          { es: "C'est plus nuancé que ça.", en: "It's more nuanced than that." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She always [adds a qualification] before answering.",
            sentence: "Elle ___ toujours une nuance avant de répondre.",
            answer: "apporte",
            explanation: "\"Apporter une nuance\" (to add a qualification) is the noun form of \"nuancer\".",
          },
          {
            type: "multiple-choice",
            question: "Your opponent's claim is simplistic. How do you say so politely?",
            options: [
              "C'est plus nuancé que ça.",
              "C'est complètement idiot.",
              "Vous êtes simpliste.",
              "Je m'inscris en faux contre vous.",
            ],
            correctIndex: 0,
            explanation: "\"C'est plus nuancé que ça\" implies the opponent is simplistic without saying it; French audiences value nuance highly.",
          },
        ],
      },
      {
        heading: "The neutral middle",
        body: [
          "\"Je ne partage pas votre point de vue\" (I don't share your view) is the neutral middle of the scale: clear, courteous, no emotion. \"Je ne vous suis pas sur ce terrain\" (I can't follow you there) adds that the opponent has gone too far.",
        ],
        examples: [
          { es: "Je ne partage pas votre point de vue sur la question.", en: "I don't share your view on the matter." },
          { es: "Là, je ne vous suis plus.", en: "That's where you lose me." },
          { es: "Je ne vous suis pas sur ce terrain.", en: "I can't follow you there." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I don't [share] your view on the timetable.",
            sentence: "Je ne ___ pas votre point de vue sur le calendrier.",
            answer: "partage",
            explanation: "\"Je ne partage pas votre point de vue\": the neutral middle of the scale, clear and courteous, with no emotion.",
          },
        ],
      },
      {
        heading: "The hard end: contester, récuser",
        body: [
          "At the hard end, French uses formal verbs that remain courteous in form. \"Je conteste\" (I dispute) is firm. \"Je récuse\" (I reject) is more solemn: \"je récuse cette analyse\", \"je récuse le terme de...\". In legal French, \"récuser\" also means to challenge a judge or a juror, and it keeps that formal colour.",
        ],
        examples: [
          { es: "Je conteste formellement ces chiffres.", en: "I formally dispute these figures." },
          {
            es: "Je récuse le terme de « privilège » pour parler de ces salariés.",
            en: "I reject the term 'privilege' for these employees.",
          },
          { es: "Je récuse cette comparaison.", en: "I reject this comparison." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Je récuse cette analyse.",
            question: "How strong is this disagreement?",
            options: ["Strong and formal", "Mild and friendly", "Partial agreement", "Hesitant, unsure"],
            correctIndex: 0,
            explanation: "\"Récuser\" is solemn and firm, close to the top of the scale.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it more solemn: change \"je conteste\" to \"je récuse\".",
            source: "Je conteste le terme de « crise ».",
            answer: "Je récuse le terme de « crise ».",
            explanation: "\"Contester\" is firm; \"récuser\" (to reject, also to challenge a judge) is more solemn and keeps a formal, legal colour.",
          },
        ],
      },
      {
        heading: "S'inscrire en faux contre",
        body: [
          "\"S'inscrire en faux contre\" (to deny formally, to dispute flatly) comes from legal procedure, where \"l'inscription de faux\" challenges a document as forged. In debate it is the strongest polite denial: \"Je m'inscris en faux contre cette affirmation.\" Learners often get the preposition wrong: it is \"contre\", never \"*à\".",
        ],
        examples: [
          { es: "Je m'inscris en faux contre cette affirmation.", en: "I flatly dispute that claim." },
          { es: "Je m'élève contre cette présentation des faits.", en: "I protest against this presentation of the facts." },
          { es: "L'opposition s'inscrit en faux contre ces accusations.", en: "The opposition flatly denies these accusations." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: [
              "Je m'inscris en faux contre cette affirmation.",
              "Je m'inscris en faux à cette affirmation.",
              "Je m'inscris faux contre cette affirmation.",
              "Je m'écris en faux contre cette affirmation.",
            ],
            correctIndex: 0,
            explanation: "The fixed phrase is \"s'inscrire en faux contre\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je m'inscris en faux à ce chiffre.",
            answer: "Je m'inscris en faux contre ce chiffre.",
            explanation: "The phrase comes from legal procedure and always takes \"contre\": \"s'inscrire en faux contre\", never \"à\".",
          },
        ],
      },
      {
        heading: "Closing the scale",
        body: [
          "\"C'est parfaitement inexact\" and \"c'est totalement faux\" close the scale. \"Parfaitement\" here intensifies: perfectly wrong, not slightly. And \"je ne peux pas laisser dire cela\" (I can't let that go unchallenged) is how French politicians signal that something said is beyond acceptable.",
        ],
        examples: [
          {
            es: "C'est parfaitement inexact, et les comptes rendus le prouvent.",
            en: "That's completely untrue, and the minutes prove it.",
          },
          { es: "Je ne peux pas laisser dire cela sans réagir.", en: "I can't let that be said without responding." },
          { es: "C'est totalement faux, et vous le savez.", en: "That's totally false, and you know it." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[I can't let] such remarks go by.",
            sentence: "___ passer de tels propos.",
            answer: "Je ne peux pas laisser",
            explanation: "\"Je ne peux pas laisser dire / passer\" is how French politicians signal that something said is beyond acceptable.",
          },
        ],
      },
      {
        heading: "Agreeing in part",
        body: [
          "Partial agreement is often the most persuasive position: it shows you have listened. \"Je vous rejoins sur un point\" (I agree with you on one point) uses \"rejoindre\" in its figurative sense of meeting someone's view. \"Je vous suis jusqu'à un certain point\", \"sur le principe, je suis d'accord\", \"je partage votre constat, pas vos conclusions\" are equally useful.",
        ],
        examples: [
          {
            es: "Je vous rejoins sur un point : la situation est urgente.",
            en: "I agree with you on one point: the situation is urgent.",
          },
          {
            es: "Sur le principe, je suis d'accord ; c'est la méthode qui me pose problème.",
            en: "In principle I agree; it's the method I have a problem with.",
          },
          { es: "Je vous suis jusqu'à un certain point.", en: "I'm with you up to a point." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: On this point, I agree with the minister.",
            words: ["Sur ce point,", "je", "rejoins", "le ministre."],
            translation: "On this point, I agree with the minister.",
            explanation: "\"Rejoindre quelqu'un\" in its figurative sense: to meet someone's view. Partial agreement shows you have listened.",
          },
        ],
      },
      {
        heading: "Sans aller jusqu'à dire que",
        body: [
          "\"Sans aller jusqu'à dire que\" (without going so far as to say that) lets you agree with a moderate version and refuse the extreme one: \"Sans aller jusqu'à dire que la réforme est un échec, je constate qu'elle n'a pas tenu ses promesses.\" After it, the indicative is normal, since you are quoting a claim.",
        ],
        examples: [
          {
            es: "Sans aller jusqu'à dire que la réforme est un échec, je constate qu'elle n'a pas tenu ses promesses.",
            en: "Without going so far as to call the reform a failure, I note that it hasn't kept its promises.",
          },
          {
            es: "Sans aller jusqu'à dire qu'il a menti, je constate qu'il a exagéré.",
            en: "Without going so far as to say he lied, I note that he exaggerated.",
          },
          {
            es: "Sans aller jusqu'à tout rejeter, je demande des garanties.",
            en: "Without going so far as to reject it all, I'm asking for guarantees.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Without going so far as to say that] the plan has failed, I note that it is behind schedule.",
            sentence: "___ le plan a échoué, je constate qu'il est en retard.",
            answer: "Sans aller jusqu'à dire que",
            explanation: "You agree with the moderate version (it is late) and refuse the extreme one (it has failed); the indicative follows, since you are quoting a claim.",
          },
        ],
      },
      {
        heading: "Le constat and les solutions",
        body: [
          "The distinction \"le constat\" (the observation, the diagnosis) vs \"les conclusions\" (or \"les remèdes\", \"les solutions\") is central to French debate. Many disputes are framed as \"nous partageons le même constat, mais pas les mêmes solutions\". Using this frame makes you sound reasonable and moves the debate onto your proposals.",
        ],
        examples: [
          { es: "Je partage votre constat, pas vos conclusions.", en: "I share your diagnosis, not your conclusions." },
          {
            es: "Nous partageons le même constat, mais pas les mêmes solutions.",
            en: "We agree on the diagnosis, but not on the solutions.",
          },
          {
            es: "Le constat est partagé ; ce sont les remèdes qui divisent.",
            en: "The diagnosis is shared; it's the remedies that divide people.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Nous sommes d'accord sur le diagnostic, pas sur les remèdes.",
            question: "What does it mean?",
            options: [
              "We agree on the diagnosis, not on the remedies.",
              "We agree on the remedies, not on the diagnosis.",
              "We don't agree on anything.",
              "We agree completely.",
            ],
            correctIndex: 0,
            explanation: "The classic frame: shared \"constat\" or diagnosis, different solutions. It makes you sound reasonable and moves the debate onto your proposals.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The unions and management [share the diagnosis], not the remedies.",
            sentence: "Les syndicats et la direction ___, pas les remèdes.",
            answer: "partagent le constat",
            altAnswers: ["partagent le diagnostic"],
            explanation: "\"Partager le constat\": agree on the observation. The plural subject gives \"partagent\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je ne suis pas tout à fait d'accord à votre conclusion.",
        answer: "Je ne suis pas tout à fait d'accord avec votre conclusion.",
        explanation: "You are \"d'accord avec\" someone or something; \"d'accord à\" does not exist in this sense.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I agree with you on the goal, not on the method.",
        answer: "Je vous rejoins sur l'objectif, pas sur la méthode.",
        altAnswers: [
          "Je suis d'accord avec vous sur l'objectif, pas sur la méthode.",
          "Je vous rejoins sur l'objectif, mais pas sur la méthode.",
        ],
        explanation: "\"Je vous rejoins sur\" signals partial agreement and sets up the disagreement that follows.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Without going so far as to call it a scandal, I find this decision regrettable.",
        answer: "Sans aller jusqu'à parler de scandale, je trouve cette décision regrettable.",
        altAnswers: [
          "Sans aller jusqu'à parler d'un scandale, je trouve cette décision regrettable.",
          "Sans aller jusqu'à dire que c'est un scandale, je trouve cette décision regrettable.",
        ],
        explanation: "\"Sans aller jusqu'à\" + infinitive refuses the extreme label while keeping a firm criticism.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it partial agreement, with \"jusqu'à un certain point\".",
        source: "Je suis d'accord avec vous.",
        answer: "Je suis d'accord avec vous jusqu'à un certain point.",
        altAnswers: ["Je vous suis jusqu'à un certain point."],
        explanation: "\"Jusqu'à un certain point\" limits the agreement: you are with them, but only so far.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: That's completely untrue: the report says the opposite.",
        words: ["C'est", "parfaitement inexact :", "le rapport", "dit", "le contraire."],
        translation: "That's completely untrue: the report says the opposite.",
        explanation: "\"Parfaitement\" intensifies here: perfectly wrong, not slightly. The fact that follows does the work.",
      },
      {
        type: "matching",
        instructions: "Match each phrase to its degree of disagreement.",
        pairs: [
          { left: "Je nuancerais", right: "Very mild: a small qualification" },
          { left: "Je ne partage pas votre point de vue", right: "Clear but neutral" },
          { left: "Je conteste ces chiffres", right: "Firm" },
          { left: "Je m'inscris en faux", right: "Strongest polite denial" },
          { left: "Je vous rejoins sur un point", right: "Partial agreement" },
        ],
        explanation: "Grade disagreement to the stakes: the formal verbs stay courteous even at full strength.",
      },
      {
        type: "speak",
        text: "Je ne partage pas votre point de vue, mais je comprends votre inquiétude.",
        prompt: "Say it in French: I don't share your view, but I understand your concern.",
        explanation: "The neutral middle of the scale (\"je ne partage pas\"), softened by acknowledging the other person's concern.",
      },
    ],
  },
  {
    slug: "c2-disagreement-scale-contrast",
    level: "FR-C2",
    number: 10,
    title: "Contrast Clinic: L'Échelle du Désaccord",
    summary: "Grade disagreement from \"je nuancerais un peu\" to \"je m'inscris totalement en faux\" to suit the stakes and the audience, and decode the French habit of opening with \"oui, mais\" or \"alors, non\".",
    duration: "17 min",
    sections: [
      {
        heading: "One claim, five levels",
        body: [
          "This clinic isolates one variable: how strongly you disagree, with everything else kept constant. The same claim, \"le télétravail fait baisser la productivité\", can be answered at five levels, and each fits a different situation.",
        ],
        examples: [
          {
            es: "Bof, je sais pas, c'est plus compliqué que ça.",
            en: "Meh, I don't know, it's more complicated than that. (coffee break)",
          },
          { es: "Je ne partage pas cette analyse.", en: "I don't share that analysis. (negotiation)" },
          {
            es: "Je m'inscris totalement en faux contre cette affirmation.",
            en: "I completely and formally reject that claim. (formal hearing)",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which reply is the mildest disagreement?",
            options: [
              "Je nuancerais un peu.",
              "Je ne partage pas cette analyse.",
              "C'est inexact.",
              "Je m'inscris en faux contre cette affirmation.",
            ],
            correctIndex: 0,
            explanation: "\"Je nuancerais\" only qualifies, in the conditional. \"Je ne partage pas\" is the neutral middle, \"c'est inexact\" is firm, and \"je m'inscris en faux\" is the top of the scale.",
          },
        ],
      },
      {
        heading: "Five situations, five levels",
        body: [
          "A coffee break: \"Bof, je sais pas, c'est plus compliqué que ça.\" A team meeting: \"Je nuancerais un peu : ça dépend beaucoup des postes.\" A negotiation: \"Je ne partage pas cette analyse.\" A public debate where the claim misrepresents a study: \"C'est inexact : l'étude dit l'inverse.\" A formal hearing where the claim damages your organisation: \"Je m'inscris totalement en faux contre cette affirmation.\"",
        ],
        examples: [
          {
            es: "Je nuancerais un peu : ça dépend beaucoup des postes.",
            en: "I'd qualify that a bit: it depends a lot on the job. (team meeting)",
          },
          { es: "C'est inexact : l'étude dit l'inverse.", en: "That's incorrect: the study says the opposite. (public debate)" },
          { es: "Bof, pas sûr, ça dépend des équipes.", en: "Meh, not sure, it depends on the team. (coffee break)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A journalist falsely claims on air that your NGO misused donations. Which reply fits the stakes?",
            options: [
              "Je m'inscris totalement en faux contre cette affirmation : nos comptes sont publics.",
              "Je nuancerais un peu.",
              "Bof, c'est un peu plus compliqué que ça.",
              "Oui, mais enfin, bon.",
            ],
            correctIndex: 0,
            explanation: "A damaging public falsehood calls for the top of the scale, with a fact to back it.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It's more complicated than that: [it depends a lot on] the team.",
            sentence: "C'est plus compliqué que ça : ___ l'équipe.",
            answer: "ça dépend beaucoup de",
            altAnswers: ["cela dépend beaucoup de"],
            explanation: "The team-meeting level: a qualification, not a rejection. \"Dépendre de\": \"ça dépend beaucoup de l'équipe\".",
          },
        ],
      },
      {
        heading: "Stakes and audience",
        body: [
          "Two variables decide the level: the stakes (does the error matter?) and the audience (a peer, a superior, the public). With a superior, French uses the soft end even for serious disagreement, and lets the conditional and the hedges do the work: \"je me demande si...\", \"ne pourrait-on pas envisager...\". With the public, firmness is expected, but always in formal vocabulary.",
        ],
        examples: [
          {
            es: "Je me demande si nous ne devrions pas attendre les résultats complets.",
            en: "I wonder whether we shouldn't wait for the full results. (to a superior)",
          },
          {
            es: "Ne pourrait-on pas envisager un essai de trois mois ?",
            en: "Couldn't we consider a three-month trial? (to a superior)",
          },
          {
            es: "Je me demande si le calendrier n'est pas un peu serré.",
            en: "I wonder whether the timetable isn't a little tight. (to a superior)",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a meeting, your director says remote work lowers productivity. You disagree, but tactfully. What do you say?",
            options: [
              "Je me demande si les chiffres ne disent pas autre chose.",
              "Je m'inscris totalement en faux contre cette affirmation.",
              "C'est n'importe quoi.",
              "Bof.",
            ],
            correctIndex: 0,
            explanation: "With a superior, a hedged question (\"je me demande si\") disagrees without confrontation.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it tactful for your director, starting with \"Je me demande si\".",
            source: "Ce projet est trop risqué.",
            answer: "Je me demande si ce projet n'est pas trop risqué.",
            altAnswers: [
              "Je me demande si ce projet n'est pas un peu trop risqué.",
              "Je me demande si ce projet est trop risqué.",
              "Je me demande si ce projet n'est pas un peu risqué.",
            ],
            explanation: "With a superior, French stays at the soft end even for serious disagreement: \"je me demande si\" (with an optional \"ne\" in the question) does the work.",
          },
        ],
      },
      {
        heading: "English understatement doesn't travel",
        body: [
          "A frequent mistake for English speakers is to transfer English understatement literally. \"Je ne suis pas sûr que ce soit une bonne idée\" is indeed a polite no, as in English. But \"intéressant...\" said flatly is not as clearly negative in French as interesting can be in British English, and \"je suis d'accord, mais...\" can sound like real agreement. When the stakes are high, French expects you to say it.",
        ],
        examples: [
          { es: "Je ne suis pas sûr que ce soit une bonne idée.", en: "I'm not sure it's a good idea. (a polite no)" },
          { es: "Intéressant... mais je ne suis pas d'accord.", en: "Interesting... but I don't agree." },
          { es: "Sur ce point, je dois être clair : je suis contre.", en: "On this point I must be clear: I'm against it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a high-stakes meeting in Paris, you answer a plan you find dangerous with a flat « Intéressant... ». What is the risk?",
            options: [
              "Your colleagues may take it as mild approval.",
              "Your colleagues will find you rude.",
              "Nobody will understand the word.",
              "It will sound like a formal rejection.",
            ],
            correctIndex: 0,
            explanation: "A flat \"intéressant\" is not as clearly negative in French as interesting can be in British English. When the stakes are high, French expects you to say it.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I'm not sure the timing [is] right.",
            sentence: "Je ne suis pas sûr que le moment ___ bien choisi.",
            answer: "soit",
            explanation: "\"Je ne suis pas sûr que\" + subjunctive: a polite no, which French reads the same way English does.",
          },
        ],
      },
      {
        heading: "Oui, mais: a turn-taking signal",
        body: [
          "French speakers often open a disagreement with \"oui, mais\". English speakers hear the \"oui\" and think they have won a point; in fact it is mostly a turn-taking signal meaning I heard you, now here's my objection. In some contexts \"oui, mais non\" (yes, but no) is used, half-jokingly, to reject something outright.",
        ],
        examples: [
          { es: "Oui, mais ça ne règle pas le problème du financement.", en: "Yes, but that doesn't solve the funding problem." },
          { es: "Oui, mais non : on ne va pas recommencer ce débat.", en: "Yeah, no: we're not starting that debate again." },
          { es: "Oui, mais qui va payer ?", en: "Yes, but who's going to pay?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Oui, mais les délais sont intenables.",
            question: "What is the speaker doing?",
            options: [
              "Objecting: the oui only acknowledges what was said.",
              "Agreeing completely with the previous speaker.",
              "Changing the subject to something unrelated.",
              "Asking a question about the deadlines.",
            ],
            correctIndex: 0,
            explanation: "\"Oui, mais\" is mostly a turn-taking signal: I heard you, now here's my objection. Don't count the \"oui\" as a point won.",
          },
          {
            type: "multiple-choice",
            question: "Your colleague says « Oui, mais le calendrier est trop serré. » What has she done?",
            options: [
              "Raised an objection to your plan.",
              "Approved your plan without reservation.",
              "Asked you to repeat the plan.",
              "Agreed that the calendar is fine.",
            ],
            correctIndex: 0,
            explanation: "The \"oui\" acknowledges; the \"mais\" carries the real message.",
          },
        ],
      },
      {
        heading: "Alors, non",
        body: [
          "\"Alors, non\" (well, no) is the opposite move: a frank, slightly theatrical refusal that sets up a correction. \"Alors, non, ce n'est pas du tout ce que j'ai dit.\" The \"alors\" gives the speaker a beat and adds emphasis; it is common in professional settings and on television, and it is not rude as long as what follows is argued.",
        ],
        examples: [
          { es: "Alors, non, ce n'est pas du tout ce que j'ai dit.", en: "Well, no, that's not at all what I said." },
          { es: "Alors, non, je n'ai jamais parlé de licenciements.", en: "Well, no, I never mentioned redundancies." },
          { es: "Alors, non : le budget n'a pas doublé.", en: "Well, no: the budget hasn't doubled." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Well, no], that's not what the report says.",
            sentence: "___, ce n'est pas ce que dit le rapport.",
            answer: "Alors, non",
            altAnswers: ["Alors non"],
            explanation: "\"Alors, non\" is a frank, slightly theatrical refusal that sets up a correction; it is not rude as long as what follows is argued.",
          },
        ],
      },
      {
        heading: "Non mais, and categorical denials",
        body: [
          "\"Non mais\" (often with \"attendez\" or \"enfin\") is more heated: \"Non mais attendez, on ne peut pas dire ça !\" It signals indignation. \"Pas du tout\", \"absolument pas\" and \"en aucun cas\" are categorical denials, the last one the most formal.",
        ],
        examples: [
          { es: "Non mais attendez, on ne peut pas dire ça !", en: "Hold on, you can't say that!" },
          { es: "En aucun cas nous n'avons approuvé ce budget.", en: "In no way did we approve this budget." },
          {
            es: "Absolument pas : la décision a été prise collectivement.",
            en: "Absolutely not: the decision was taken collectively.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it a formal, categorical denial, starting with \"En aucun cas\".",
            source: "Nous n'avons pas signé cet accord.",
            answer: "En aucun cas nous n'avons signé cet accord.",
            explanation: "\"En aucun cas\" is the most formal categorical denial; at the head of the sentence it still needs \"ne\" with the verb.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Not at all]: the meeting went very well.",
            sentence: "___ : la réunion s'est très bien passée.",
            answer: "Pas du tout",
            altAnswers: ["Absolument pas"],
            explanation: "\"Pas du tout\" and \"absolument pas\" are categorical denials, firm but less formal than \"en aucun cas\".",
          },
        ],
      },
      {
        heading: "Climbing one step at a time",
        body: [
          "In a real exchange, disagreement often climbs as the other person insists. A skilled speaker climbs one step at a time and signals each step: \"Je nuancerais...\" → \"Je ne suis vraiment pas d'accord\" → \"Je ne peux pas laisser dire cela.\" Jumping straight to the top sounds like loss of control; staying at the bottom while being misrepresented sounds like weakness.",
        ],
        examples: [
          {
            es: "Je nuancerais : tous les services ne sont pas concernés.",
            en: "I'd qualify that: not every department is affected.",
          },
          { es: "Là, je ne suis vraiment pas d'accord avec vous.", en: "On that, I really don't agree with you." },
          { es: "Je ne peux pas laisser dire cela.", en: "I can't let that be said." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You said « Je nuancerais... », and your opponent insists, still misrepresenting you. What is the right next step?",
            options: [
              "Là, je ne suis vraiment pas d'accord.",
              "Je m'inscris totalement en faux, c'est scandaleux !",
              "Bof.",
              "Vous avez sans doute raison.",
            ],
            correctIndex: 0,
            explanation: "Climb one step and signal it. Jumping to the top sounds like loss of control; staying at the bottom while misrepresented sounds like weakness.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je suis en totale désaccord avec cette lecture.",
            answer: "Je suis en total désaccord avec cette lecture.",
            explanation: "\"Désaccord\" is masculine, so the intensifier is \"total\": \"en total désaccord\".",
          },
        ],
      },
      {
        heading: "Intensifiers and softeners",
        body: [
          "Intensifiers adjust a level without changing the verb: \"je ne suis pas du tout d'accord\", \"je suis en total désaccord\", \"je conteste formellement\", \"je m'inscris totalement en faux\". Softeners do the opposite: \"un peu\", \"peut-être\", \"il me semble que\", the conditional.",
        ],
        examples: [
          { es: "Je suis en total désaccord avec cette lecture.", en: "I completely disagree with that interpretation." },
          { es: "Je conteste formellement cette version des faits.", en: "I formally dispute this version of events." },
          { es: "Je suis peut-être un peu moins optimiste que vous.", en: "I'm perhaps a little less optimistic than you." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it stronger with an intensifier, without changing the verb.",
            source: "Je ne suis pas d'accord.",
            answer: "Je ne suis pas du tout d'accord.",
            altAnswers: ["Je ne suis absolument pas d'accord.", "Je ne suis vraiment pas d'accord."],
            explanation: "Intensifiers adjust the level and leave the verb alone: \"pas du tout\", \"absolument pas\", \"vraiment pas\".",
          },
        ],
      },
      {
        heading: "Repairing the relationship",
        body: [
          "Finally, a French habit worth copying: after strong disagreement, re-establish the relationship. \"Nous ne serons pas d'accord sur ce point, mais je respecte votre position\" or \"on aura au moins eu le mérite d'en débattre\". It signals that the disagreement is about ideas, not people.",
        ],
        examples: [
          {
            es: "Nous ne serons pas d'accord sur ce point, mais je respecte votre position.",
            en: "We won't agree on this, but I respect your position.",
          },
          { es: "On aura au moins eu le mérite d'en débattre.", en: "At least we'll have had the merit of debating it." },
          { es: "Nous divergeons, mais le débat a été utile.", en: "We differ, but the debate has been useful." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[We won't agree] on the method, but I respect your choice.",
            sentence: "___ sur la méthode, mais je respecte votre choix.",
            answer: "Nous ne serons pas d'accord",
            altAnswers: ["On ne sera pas d'accord"],
            explanation: "After strong disagreement, re-establish the relationship: the disagreement is about ideas, not people. The future \"serons\" accepts it calmly.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Absolutely not: the plan was voted on by the whole team.",
        answer: "Absolument pas : le plan a été voté par toute l'équipe.",
        altAnswers: ["Absolument pas : le plan a été voté par l'ensemble de l'équipe."],
        explanation: "\"Absolument pas\" denies categorically; the passive \"a été voté\" agrees with \"le plan\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "En aucun cas nous avons accepté ces conditions.",
        answer: "En aucun cas nous n'avons accepté ces conditions.",
        explanation: "\"Aucun\" is a negative word and needs \"ne\" with the verb: \"en aucun cas nous n'avons accepté\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I wonder whether we shouldn't consult the team first.",
        answer: "Je me demande si nous ne devrions pas d'abord consulter l'équipe.",
        altAnswers: [
          "Je me demande si nous ne devrions pas consulter l'équipe d'abord.",
          "Je me demande si on ne devrait pas d'abord consulter l'équipe.",
          "Je me demande si on ne devrait pas consulter l'équipe d'abord.",
        ],
        explanation: "The conditional \"devrions\" and \"je me demande si\" soften a disagreement with a superior.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Hold on], you can't compare those two figures!",
        sentence: "___, on ne peut pas comparer ces deux chiffres !",
        answer: "Non mais attendez",
        altAnswers: ["Non mais attends"],
        explanation: "\"Non mais attendez\" signals indignation: hotter than \"alors, non\", so keep it for a real distortion.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: I formally dispute this timetable.",
        words: ["Je conteste", "formellement", "ce calendrier."],
        translation: "I formally dispute this timetable.",
        explanation: "\"Formellement\" intensifies \"contester\" without changing the verb.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Yes, but who is going to maintain the equipment?",
        answer: "Oui, mais qui va entretenir le matériel ?",
        altAnswers: ["Oui, mais qui entretiendra le matériel ?", "Oui, mais qui va entretenir l'équipement ?"],
        explanation: "\"Oui, mais\" acknowledges, then objects: the question after it is the real point.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[In no case] will we sign this contract.",
        sentence: "___ nous ne signerons ce contrat.",
        answer: "En aucun cas",
        explanation: "\"En aucun cas\" + \"ne\": the most formal categorical refusal, fit for a negotiation or a hearing.",
      },
      {
        type: "dictation",
        audio: "Absolument pas, et je le maintiens.",
        explanation: "\"Absolument pas\" is a categorical denial; \"je le maintiens\" (I stand by it) holds the position.",
      },
      {
        type: "speak",
        text: "Alors, non : nous n'avons jamais promis de baisse d'impôts.",
        prompt: "Say it in French: Well, no: we never promised a tax cut.",
        explanation: "\"Alors, non\" gives you a beat and adds emphasis before the correction; \"de\" replaces \"une\" after the negation.",
      },
    ],
  },
];

export const FR_C2_U13_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your town council plans to ban cars from the historic centre on weekends. A local newspaper has invited readers to send a short tribune (opinion piece). Write it: state your thesis clearly, concede at least one of the opponents' arguments before refuting it, name one fallacy you have heard in the debate (without insulting anyone), and end with a concrete proposal.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "A clear thesis with a precise opinion verb (\"je soutiens que\", \"j'estime que\", \"il me paraît indéniable que\") and correct moods after affirmative and negated opinion verbs (\"je ne pense pas que\" + subjunctive).",
    "At least one strategic concession and refutation (\"certes... mais\", \"il est vrai que... il n'en reste pas moins que\", \"s'il est vrai que\") and one advanced concessive (\"bien que\" + subjunctive, \"avoir beau\", \"quand bien même\" + conditional).",
    "One fallacy named courteously (\"c'est un faux dilemme\", \"on caricature\", \"un procès d'intention\", \"la pente glissante\").",
    "Learned connectors and a graded disagreement (\"or\", \"dès lors\", \"je ne partage pas\", \"je nuancerais\"), ending with a concrete proposal (\"il convient de\", \"je propose que\" + subjunctive).",
  ],
  modelAnswer: "Un centre-ville pour tous, le week-end\n\nLe projet municipal de fermer le centre historique aux voitures le samedi et le dimanche suscite, depuis un mois, des réactions passionnées. Je soutiens, pour ma part, qu'il s'agit d'une mesure raisonnable, à condition qu'elle soit conduite avec méthode.\n\nCertes, les commerçants redoutent une baisse de leur chiffre d'affaires, et cette inquiétude mérite d'être entendue. Il n'en reste pas moins que les villes qui ont tenté l'expérience, de Pontevedra à Strasbourg, ont vu la fréquentation de leurs rues commerçantes progresser. Bien que chaque ville soit différente, ces exemples montrent au moins que la catastrophe annoncée n'est pas une fatalité.\n\nOn entend également dire que « si l'on ferme le centre le week-end, on le fermera bientôt toute la semaine ». C'est l'argument de la pente glissante : rien dans le projet ne le prévoit, et le conseil municipal s'est engagé à soumettre toute extension à une nouvelle consultation. De même, je ne crois pas que l'on puisse résumer le débat à un choix entre « les voitures ou la mort du commerce » ; c'est un faux dilemme, qui empêche de discuter des vraies questions : le stationnement en périphérie, les navettes, les livraisons.\n\nJe nuancerais toutefois l'enthousiasme de certains partisans du projet. On a beau multiplier les pistes cyclables, une personne âgée ou un parent avec trois enfants ne viendra pas à vélo. Or, un centre-ville qui exclurait ces habitants perdrait sa raison d'être. Dès lors, il convient de prévoir des navettes gratuites et des places réservées aux personnes à mobilité réduite.\n\nJe propose donc que la mesure soit testée pendant six mois, que ses effets soient mesurés par un organisme indépendant et qu'un bilan public soit présenté aux habitants. Quand bien même les résultats seraient décevants, nous aurions au moins décidé sur pièces, et non sur des impressions.\n\nClaire Fontaine, habitante du quartier Saint-Pierre",
  explanation: "The tribune states its thesis early (\"je soutiens que\"), concedes before refuting (\"certes... il n'en reste pas moins que\"), and uses the concessives with their moods: \"bien que chaque ville soit\", \"on a beau multiplier\", \"quand bien même les résultats seraient\". It names two fallacies calmly (\"la pente glissante\", \"un faux dilemme\") and uses \"je ne crois pas que l'on puisse\" with the subjunctive. \"Or\" introduces the decisive premise, \"dès lors\" the consequence, and \"je propose que\" + subjunctive (\"soit testée\", \"soient mesurés\") the concrete proposal.",
};
