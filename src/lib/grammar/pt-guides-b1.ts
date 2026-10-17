// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-guides-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { PtGrammarGuide } from "./pt-types";

// Brazilian Portuguese grammar guides, B1 (see the notes at the top of ./pt-types.ts).
export const PT_B1_GUIDES: PtGrammarGuide[] = [
  {
    slug: "present-subjunctive",
    title: "The Present Subjunctive: How to Form It",
    description:
      "How to build the Brazilian Portuguese present subjunctive from the eu form of the present, the spelling changes, and the seven verbs that break the rule: seja, esteja, vá, haja, saiba, queira, dê.",
    level: "B1",
    intro: [
      `The subjunctive is a mood, not a tense: a way of presenting an action as wanted, hoped for, doubted or not yet real, rather than as a plain fact. English has almost lost it (it survives in 'if I were you' and 'I suggest he be told'), so English speakers tend to skip it. Portuguese uses it all day long: "Quero que você venha" (I want you to come), "Espero que dê certo" (I hope it works out), "Tomara que não chova" (I really hope it doesn't rain).`,
      `This guide is about the forms; the guides on wishes, on opinions and doubt, on conjunctions and on descriptions cover when to use them. The good news: if you know the present tense and the polite imperative ("fale", "coma", "venha"), you already know most of the present subjunctive.`,
    ],
    sections: [
      {
        heading: `Regular verbs: swap the vowel`,
        body: [
          `Take the eu form of the present, drop the final "-o" and add the opposite vowel: -ar verbs take "-e", -er and -ir verbs take "-a". "Falo" gives "fale", "como" gives "coma", "abro" gives "abra". The eu form and the você form are identical, which context sorts out.`,
          `In Brazil the persons you actually need are eu, você (with ele, ela and "a gente", which share its form), nós, and vocês (with eles and elas). Nós ends in "-emos" or "-amos", the plural in "-em" or "-am". Notice the swap: "eles comem" is the indicative (they eat), "que eles comam" the subjunctive.`,
        ],
        table: {
          headers: ["", "falar", "comer", "abrir"],
          rows: [
            ["eu", "fale", "coma", "abra"],
            ["você, ele, ela, a gente", "fale", "coma", "abra"],
            ["nós", "falemos", "comamos", "abramos"],
            ["vocês, eles, elas", "falem", "comam", "abram"],
          ],
        },
        examples: [
          { pt: "Quero que você fale mais devagar.", en: "I want you to speak more slowly." },
          { pt: "Prefiro que a gente coma em casa hoje.", en: "I'd rather we ate at home today." },
          { pt: "A professora pede que vocês abram o livro na página dez.", en: "The teacher is asking you to open the book at page ten." },
          { pt: "É importante que nós estudemos juntos.", en: "It's important that we study together." },
          { pt: "Tomara que eles não cheguem atrasados.", en: "I really hope they won't be late." },
        ],
      },
      {
        heading: `Irregular eu forms carry over`,
        body: [
          `Because the subjunctive is built on the eu form, any irregularity there carries into every person: "faço" gives "faça", "digo" gives "diga", "tenho" gives "tenha", "venho" gives "venha", "ponho" gives "ponha", "vejo" gives "veja", "posso" gives "possa", "peço" gives "peça", "ouço" gives "ouça", "durmo" gives "durma", "trago" gives "traga", "perco" gives "perca". A learner who knows the present well finds the subjunctive easy.`,
          `Spelling changes keep the consonant's sound before the new vowel: -car becomes "-que" ("ficar", "fique"), -gar becomes "-gue" ("chegar", "chegue"), -çar becomes "-ce" ("começar", "comece"), and -ger or -gir become "-ja" ("proteger", "proteja"; "dirigir", "dirija"). These are spellings, not new sounds: say them exactly as you would expect.`,
        ],
        table: {
          headers: ["Infinitive", "Present (eu)", "Subjunctive (eu, você)", "Subjunctive (vocês)"],
          rows: [
            ["fazer", "faço", "faça", "façam"],
            ["dizer", "digo", "diga", "digam"],
            ["ter", "tenho", "tenha", "tenham"],
            ["vir", "venho", "venha", "venham"],
            ["pôr", "ponho", "ponha", "ponham"],
            ["ver", "vejo", "veja", "vejam"],
            ["poder", "posso", "possa", "possam"],
            ["pedir", "peço", "peça", "peçam"],
            ["ouvir", "ouço", "ouça", "ouçam"],
            ["dormir", "durmo", "durma", "durmam"],
            ["trazer", "trago", "traga", "tragam"],
            ["ficar", "fico", "fique", "fiquem"],
            ["chegar", "chego", "chegue", "cheguem"],
            ["começar", "começo", "comece", "comecem"],
          ],
        },
        examples: [
          { pt: "Espero que você tenha um ótimo fim de semana.", en: "I hope you have a great weekend." },
          { pt: "Minha mãe quer que eu faça o jantar hoje.", en: "My mum wants me to make dinner tonight." },
          { pt: "Não quero que ninguém veja isso.", en: "I don't want anyone to see this." },
          { pt: "Tomara que vocês venham para o meu aniversário.", en: "I really hope you come to my birthday." },
          { pt: "Prefiro que você diga a verdade.", en: "I'd rather you told the truth." },
          { pt: "É melhor que a gente comece cedo.", en: "We'd better start early." },
        ],
      },
      {
        heading: `The seven verbs that break the rule`,
        body: [
          `Seven very common verbs do not build the subjunctive from the eu form: "ser", "estar", "ir", "haver", "saber", "querer" and "dar". Learn them as a set; "seja", "esteja" and "vá" turn up in every conversation.`,
          `Three details. "Dê" (from "dar") carries a circumflex to keep it apart from the preposition "de", and its plural is "deem". "Haja" (from "haver") is used almost only as there be: "espero que haja lugar" (I hope there's room). The nós form of "ir" is "vamos", the same word as let's go.`,
        ],
        table: {
          headers: ["Infinitive", "eu, você", "nós", "vocês, eles"],
          rows: [
            ["ser", "seja", "sejamos", "sejam"],
            ["estar", "esteja", "estejamos", "estejam"],
            ["ir", "vá", "vamos", "vão"],
            ["haver", "haja", "hajamos", "hajam"],
            ["saber", "saiba", "saibamos", "saibam"],
            ["querer", "queira", "queiramos", "queiram"],
            ["dar", "dê", "demos", "deem"],
          ],
        },
        examples: [
          { pt: "Espero que a prova seja fácil.", en: "I hope the exam is easy." },
          { pt: "Tomara que ele esteja bem.", en: "I hope he's OK." },
          { pt: "Não quero que você vá sozinha.", en: "I don't want you to go alone. (to a woman)" },
          { pt: "Que vocês sejam muito felizes!", en: "May you be very happy!" },
          { pt: "É bom que eles saibam a verdade.", en: "It's good that they know the truth." },
          { pt: "Tomara que dê tudo certo!", en: "Fingers crossed it all works out!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quero que você fala comigo.",
        right: "Quero que você fale comigo.",
        why: `After "quero que" with a new subject the verb goes into the subjunctive; -ar verbs switch to "-e".`,
      },
      {
        wrong: "Espero que ele faze o trabalho.",
        right: "Espero que ele faça o trabalho.",
        why: `The subjunctive is built on the eu form "faço", so every person has "faç-".`,
      },
      {
        wrong: "Tomara que eles comem bem.",
        right: "Tomara que eles comam bem.",
        why: `"Comem" is the indicative. -er verbs take "-a" in the subjunctive.`,
      },
      {
        wrong: "Espero que você é feliz.",
        right: "Espero que você seja feliz.",
        why: `"Ser" is one of the seven verbs with its own subjunctive: "seja".`,
      },
      {
        wrong: "Tomara que de certo.",
        right: "Tomara que dê certo.",
        why: `The subjunctive of "dar" is "dê", with a circumflex; "de" is the preposition.`,
      },
      {
        wrong: "Quero que ele chega cedo.",
        right: "Quero que ele chegue cedo.",
        why: `Two fixes: subjunctive mood, and the spelling "gu" that keeps the hard g before "e".`,
      },
    ],
    faqs: [
      {
        q: `Isn't this just the polite imperative?`,
        a: `The forms are the same: "fale", "coma", "venha", "seja" are the commands you give with "você" in writing and with "o senhor" or "a senhora". If you can give a polite instruction, you can already conjugate the subjunctive for eu and você.`,
      },
      {
        q: `Do Brazilians really use the subjunctive when they speak?`,
        a: `Constantly: "tomara que", "espero que", "quer que eu te ajude?", "pode ser que chova". A few contexts allow the indicative in casual speech (after "não acho que", or "talvez" placed after the verb), but the core uses are alive in every register, from a WhatsApp message to a news broadcast.`,
      },
      {
        q: `What about the tu forms in grammar books, and European Portuguese?`,
        a: `Grammar tables also list "que tu fales" and "que vós faleis". "Vós" is dead in Brazil outside church language, and "tu" is regional (see the guide on regional variation). European Portuguese has exactly the same subjunctive forms and triggers; the difference is that everyday European speech uses the tu form ("espero que tu venhas") where Brazilians say "espero que você venha".`,
      },
    ],
    related: ["subjunctive-wishes-and-hopes", "subjunctive-opinions-emotions-doubt", "subjunctive-after-conjunctions", "subjunctive-in-descriptions", "imperfect-subjunctive", "imperative-brazil"],
    lessons: [
      "b1-subjunctive-intro-1",
      "b1-subjunctive-intro-2",
      "b1-subjunctive-pattern",
      "b1-error-hunt-subjunctive-1",
      "b1-subjunctive-1-extra-1",
      "b1-subjunctive-1-extra-2",
      "b1-subjunctive-irregular-1",
      "b1-subjunctive-irregular-2",
      "b1-irregular-subj-drill",
      "b1-error-hunt-subjunctive-2",
      "b1-subjunctive-2-extra-1",
      "b1-subjunctive-2-extra-2",
    ],
  },
  {
    slug: "subjunctive-wishes-and-hopes",
    title: "Quero Que, Espero Que, Tomara Que: Wishes and Hopes",
    description:
      "When wanting, asking and hoping take the subjunctive in Brazilian Portuguese: quero sair vs quero que você saia, pedir para, espero que and tomara que, and wishes like que você seja feliz.",
    level: "B1",
    intro: [
      `English builds wishes about other people with an object and an infinitive: I want you to come, she asked me to call. Portuguese cannot do that with "querer". It needs a new clause with "que" and the subjunctive: "Quero que você venha". Saying "quero você vir" is the single most common B1 mistake made by English speakers.`,
      `The logic is simple once you see it. A verb of wanting, preferring, asking or hoping looks at something that is not yet real, so the action it points to goes into the subjunctive. If you are wishing for your own action, there is no second subject and you use the plain infinitive: "quero sair".`,
    ],
    sections: [
      {
        heading: `Same subject or different subject?`,
        body: [
          `This is the first decision every time. One subject, the one who wants and the one who acts: infinitive ("quero viajar", I want to travel). Two different subjects: "que" + subjunctive ("quero que você viaje", I want you to travel). The same split works for "preferir", "precisar", "esperar" and "desejar".`,
          `Brazilian speech has two shortcuts with the infinitive. "Pedir para" + subject + infinitive is the everyday way to report a request: "ele pediu pra eu ligar" (he asked me to call), more formally "ele pediu que eu ligasse". And "deixar" takes a subject and an infinitive: "deixa eu ver" (let me see), where the norm writes "deixe-me ver". Note "eu", not "mim": the person is the subject of the infinitive.`,
        ],
        table: {
          headers: ["Verb", "Same subject: infinitive", "Different subject: que + subjunctive"],
          rows: [
            ["querer", "Quero sair agora.", "Quero que você saia agora."],
            ["preferir", "Prefiro ficar em casa.", "Prefiro que vocês fiquem em casa."],
            ["precisar", "Preciso falar com ela.", "Preciso que você fale com ela."],
            ["esperar", "Espero passar na prova.", "Espero que você passe na prova."],
            ["pedir", "Pedi para sair mais cedo.", "Peço que vocês cheguem no horário."],
          ],
        },
        examples: [
          { pt: "Você quer que eu te ajude com as malas?", en: "Do you want me to help you with the bags?" },
          { pt: "Meus pais preferem que eu more perto deles.", en: "My parents prefer me to live near them." },
          { pt: "Preciso que alguém me explique isso.", en: "I need someone to explain this to me." },
          { pt: "Ela pediu pra gente não fazer barulho.", en: "She asked us not to make any noise." },
          { pt: "Deixa eu pensar um pouco.", en: "Let me think it over." },
        ],
      },
      {
        heading: `Hopes: espero que, tomara que`,
        body: [
          `"Espero que" + subjunctive is the neutral I hope: "espero que você goste" (I hope you like it). "Tomara que" is warmer and more spoken, closer to I really hope or fingers crossed: "tomara que não chova no sábado". "Tomara!" on its own means let's hope so.`,
          `When the hope is about your own action, use "espero" + infinitive: "espero conseguir a vaga" (I hope to get the job). You will also read "oxalá" + subjunctive, an old word of Arabic origin meaning may God grant; in Brazil it is literary or playful, so recognise it but use "tomara" yourself.`,
        ],
        examples: [
          { pt: "Espero que vocês gostem da comida.", en: "I hope you like the food." },
          { pt: "Tomara que o voo não atrase.", en: "Fingers crossed the flight isn't delayed." },
          { pt: "Espero que ela consiga o visto.", en: "I hope she gets the visa." },
          { pt: "Espero conseguir uma vaga em São Paulo.", en: "I hope to get a job in São Paulo." },
          { pt: "Vai fazer sol amanhã? Tomara!", en: "Is it going to be sunny tomorrow? Let's hope so!" },
        ],
      },
      {
        heading: `Wishes: que você seja feliz!`,
        body: [
          `A wish can start straight with "que" + subjunctive, with the I hope left unsaid: "Que você seja muito feliz!" (may you be very happy), "Que dê tudo certo!" (I hope everything goes well). This is the language of toasts, birthday messages and cards. "Deus queira que..." (God willing) and "Que Deus te abençoe" belong here too.`,
          `For a card, combine a greeting with a wish: "Parabéns! Que este ano seja incrível", "Felicidades aos noivos! Que vocês sejam muito felizes juntos". In these wishes the indicative is never possible: "que você está feliz" is not a wish at all.`,
        ],
        table: {
          headers: ["Occasion", "A typical wish"],
          rows: [
            ["aniversário", "Que você tenha um ano maravilhoso!"],
            ["casamento", "Que vocês sejam muito felizes!"],
            ["emprego novo", "Que dê tudo certo no novo trabalho!"],
            ["doença", "Que você se recupere logo!"],
            ["viagem", "Que você faça uma ótima viagem!"],
            ["ano-novo", "Que o ano novo traga muita paz e saúde!"],
          ],
        },
        examples: [
          { pt: "Parabéns, Mariana! Que todos os seus sonhos se realizem!", en: "Happy birthday, Mariana! May all your dreams come true!" },
          { pt: "Que vocês aproveitem muito a lua de mel!", en: "Enjoy your honeymoon to the full!" },
          { pt: "Melhoras! Que você fique bom logo.", en: "Get well soon! I hope you're better quickly." },
          { pt: "Boa sorte na entrevista! Que dê tudo certo.", en: "Good luck in the interview! I hope it all goes well." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quero você falar com ele.",
        right: "Quero que você fale com ele.",
        why: `English word order (I want you to speak) doesn't work with "querer": use "que" + subjunctive.`,
      },
      {
        wrong: "Quero que eu saia cedo.",
        right: "Quero sair cedo.",
        why: `Same subject (I want, I leave): the infinitive, not "que" + subjunctive.`,
      },
      {
        wrong: "Espero que você vai gostar.",
        right: "Espero que você goste.",
        why: `Hoping points to something not yet real: subjunctive. You may hear the indicative in very casual speech, but don't write it.`,
      },
      {
        wrong: "Tomara que não chove.",
        right: "Tomara que não chova.",
        why: `"Tomara que" always takes the subjunctive; -er verbs take "-a".`,
      },
      {
        wrong: "Ela pediu pra mim ligar.",
        right: "Ela pediu pra eu ligar.",
        why: `The person is the subject of "ligar", so it's "eu". "Pra mim ligar" is common in speech but marked as wrong in writing.`,
      },
    ],
    faqs: [
      {
        q: `Is "tomara que" too informal for an email?`,
        a: `It is fine in friendly emails and messages. In formal writing prefer "espero que" or "desejo que" ("desejamos que o senhor tenha uma ótima estadia").`,
      },
      {
        q: `What tense comes after "eu queria que" or "eu gostaria que"?`,
        a: `The imperfect subjunctive: "eu queria que você viesse", "eu gostaria que vocês soubessem". The main verb is in a past or conditional form, so the subjunctive moves into the past too. It is taught at B2; at B1 learn these as fixed polite phrases.`,
      },
      {
        q: `Is any of this different in European Portuguese?`,
        a: `The structures are identical. The word choice differs: "tomara que" is typically Brazilian, while "oxalá" is heard much more in Portugal; and "pedir para" + infinitive is more Brazilian than European, where "pedir que" is more usual.`,
      },
    ],
    related: ["present-subjunctive", "subjunctive-opinions-emotions-doubt", "personal-infinitive", "imperfect-subjunctive"],
    lessons: [
      "b1-subjunctive-intro-1",
      "b1-infinitive-or-que",
      "b1-contrast-fala-fale",
      "b1-dialogue-favours",
      "b1-transform-requests",
      "b1-mission-house-rules",
      "b1-subjunctive-1-extra-3",
      "b1-hopes-espero-tomara",
      "b1-wishes-que",
      "b1-dialogue-farewell",
      "b1-mission-card",
      "b1-subjunctive-2-extra-3",
    ],
  },
  {
    slug: "subjunctive-opinions-emotions-doubt",
    title: "Acho Que or Não Acho Que? Feelings, Opinions and Doubt",
    description:
      "Which mood after é importante que, fico feliz que, acho que, não acho que, duvido que and talvez in Brazilian Portuguese, and when the infinitive replaces que.",
    level: "B1",
    intro: [
      `The subjunctive also appears when you react to something, judge it, or are not sure about it. "É importante que você descanse", "Que pena que você não possa vir", "Duvido que ele aceite". The common thread: the clause is not being asserted as news; it is being evaluated, felt or questioned.`,
      `The other side of the coin matters just as much. Belief and certainty take the indicative: "acho que ele vem", "tenho certeza que é aqui". English speakers who have just learnt the subjunctive tend to put it everywhere, including after "acho que", where it is wrong.`,
    ],
    sections: [
      {
        heading: `Impersonal expressions: é importante que`,
        body: [
          `"É importante que", "é bom que", "é melhor que", "é necessário que", "é possível que", "é provável que", "é uma pena que" all take the subjunctive. When you mean people in general, drop "que" and use the infinitive: "é importante descansar" (it's important to rest) versus "é importante que você descanse" (it's important that you rest).`,
          `The exception is any expression of fact or certainty: "é verdade que", "é claro que", "é óbvio que" take the indicative ("é claro que ele sabe"). Negate them and they flip to the subjunctive: "não é verdade que ele saiba".`,
        ],
        examples: [
          { pt: "É importante que você beba bastante água.", en: "It's important that you drink plenty of water." },
          { pt: "É importante beber bastante água.", en: "It's important to drink plenty of water." },
          { pt: "É melhor que a gente espere aqui.", en: "We'd better wait here." },
          { pt: "É possível que o show seja cancelado.", en: "The concert may be cancelled." },
          { pt: "É claro que ela tem razão.", en: "Of course she's right." },
        ],
      },
      {
        heading: `Emotions: fico feliz que, que pena que`,
        body: [
          `Feelings about another person's action take the subjunctive, even when the action is a known fact: "fico feliz que você esteja aqui" (I'm glad you're here; you obviously are). Portuguese marks the clause as the object of a feeling, not as information. Common triggers: "fico feliz que", "que bom que", "que pena que", "tenho medo que", "me preocupa que", "me incomoda que", "adoro que", "odeio que".`,
          `With one subject, use "de" + infinitive: "fico feliz de te ver" (I'm glad to see you), "tenho medo de esquecer". For something already done you'll meet "tenha" + participle: "que bom que você tenha vindo" (it's great that you came), the perfect subjunctive, taught at B2. In speech "que bom que você veio" with the indicative is very common too.`,
        ],
        examples: [
          { pt: "Fico feliz que vocês estejam gostando do Brasil.", en: "I'm glad you're enjoying Brazil." },
          { pt: "Que pena que você não possa vir à festa!", en: "What a shame you can't come to the party!" },
          { pt: "Tenho medo que ela fique chateada.", en: "I'm afraid she'll be upset." },
          { pt: "Me incomoda que ninguém lave a louça.", en: "It bothers me that nobody washes the dishes." },
          { pt: "Fiquei muito feliz de te encontrar.", en: "I was really happy to run into you." },
        ],
      },
      {
        heading: `Belief versus doubt, and talvez`,
        body: [
          `Belief and certainty take the indicative: "acho que", "creio que", "acredito que", "tenho certeza (de) que", "sei que". Doubt and denial take the subjunctive: "não acho que", "duvido que", "não acredito que", "não tenho certeza (de) que". So the mood follows the speaker's commitment, not the verb: "acho que ele vem" but "não acho que ele venha". In relaxed speech "não acho que ele vem" is common, but write the subjunctive.`,
          `"Talvez" (maybe) takes the subjunctive when it comes before the verb: "talvez ele venha". Placed after the verb, as an afterthought, it takes the indicative: "ele vem, talvez". "Pode ser que" (it could be that) always takes the subjunctive: "pode ser que chova".`,
        ],
        table: {
          headers: ["Indicative: belief, certainty", "Subjunctive: doubt, denial, possibility"],
          rows: [
            ["Acho que ele está em casa.", "Não acho que ele esteja em casa."],
            ["Tenho certeza que é aqui.", "Duvido que seja aqui."],
            ["É verdade que ela tem dois filhos.", "Não é verdade que ela tenha dois filhos."],
            ["Sei que você pode.", "Talvez você possa."],
            ["Com certeza vai chover.", "Pode ser que chova."],
          ],
        },
        examples: [
          { pt: "Acho que o restaurante fecha às dez.", en: "I think the restaurant closes at ten." },
          { pt: "Duvido que ele chegue no horário.", en: "I doubt he'll arrive on time." },
          { pt: "Talvez a gente vá para a praia no domingo.", en: "Maybe we'll go to the beach on Sunday." },
          { pt: "Não acredito que ela queira sair do emprego.", en: "I don't believe she wants to leave her job." },
          { pt: "Pode ser que o ônibus esteja atrasado.", en: "The bus might be running late." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Acho que ele venha amanhã.",
        right: "Acho que ele vem amanhã.",
        why: `"Acho que" expresses belief: indicative. The subjunctive only comes with "não acho que".`,
      },
      {
        wrong: "É importante que estudar todos os dias.",
        right: "É importante estudar todos os dias.",
        why: `A general statement takes the plain infinitive, with no "que". Use "que" only with a subject: "é importante que você estude".`,
      },
      {
        wrong: "Duvido que ele vem.",
        right: "Duvido que ele venha.",
        why: `Doubt always takes the subjunctive.`,
      },
      {
        wrong: "Talvez ele vem hoje.",
        right: "Talvez ele venha hoje.",
        why: `"Talvez" before the verb takes the subjunctive, especially in writing.`,
      },
      {
        wrong: "É melhor que você vai de táxi.",
        right: "É melhor que você vá de táxi.",
        why: `"É melhor que" takes the subjunctive. In speech, "é melhor você ir de táxi" is the lighter option.`,
      },
    ],
    faqs: [
      {
        q: `"Tenho certeza que" or "tenho certeza de que"?`,
        a: `The written norm wants "de que", because you have certainty of something: "tenho certeza de que ele vem". In speech almost everyone drops the "de". Use "de que" in formal texts and the Celpe-Bras.`,
      },
      {
        q: `Why does "fico feliz que" take the subjunctive if the thing is true?`,
        a: `Because Portuguese is not asking whether it's true; it's showing the clause as the cause of a feeling. The same happens after "que pena que" and "que bom que". Speech often uses the indicative for past events ("que bom que você veio"), but the subjunctive is always correct.`,
      },
      {
        q: `How do you say maybe in European Portuguese?`,
        a: `"Talvez" works the same way in Portugal, but everyday European speech prefers "se calhar" with the indicative: "se calhar ele vem". In Brazil "se calhar" sounds foreign; say "talvez", "pode ser que" or "de repente" (very colloquial).`,
      },
    ],
    related: ["present-subjunctive", "subjunctive-wishes-and-hopes", "subjunctive-after-conjunctions", "compound-subjunctive-tenses"],
    lessons: [
      "b1-impersonal-expressions",
      "b1-emotions-subjunctive",
      "b1-acho-que",
      "b1-certainty",
      "b1-talvez",
      "b1-contrast-indicative-subjunctive",
      "b1-dialogue-reacting",
      "b1-error-hunt-opinions",
      "b1-transform-certainty",
      "b1-opinions-extra-1",
      "b1-opinions-extra-2",
      "b1-opinions-extra-3",
      "b1-contrast-acho-nao-acho",
    ],
  },
  {
    slug: "subjunctive-after-conjunctions",
    title: "Para Que, Embora, Caso: Conjunctions with the Subjunctive",
    description:
      "Which Brazilian Portuguese conjunctions take the subjunctive (para que, antes que, até que, sem que, a não ser que, caso, embora, desde que), when a preposition + infinitive replaces them, and the ones that stay indicative.",
    level: "B1",
    intro: [
      `Some conjunctions introduce actions that haven't happened, might not happen or are being conceded rather than stated: so that, before, unless, in case, although. In Portuguese these always take the subjunctive: "vou explicar de novo para que você entenda", "embora seja caro, vale a pena".`,
      `Two habits make this manageable. First, learn each conjunction with its mood, as a chunk. Second, notice that most of them have a twin preposition used with the infinitive when there is only one subject: "para que você entenda" but "para entender".`,
    ],
    sections: [
      {
        heading: `The conjunctions that always take the subjunctive`,
        body: [
          `Purpose, time-before, condition and concession make up the list. "Desde que" deserves a note: with the subjunctive it means provided that ("desde que você avise"); with the indicative it means since, as in time ("desde que cheguei, não parei"). "Caso" means in case or if; it never takes the indicative.`,
        ],
        table: {
          headers: ["Conjunction", "Meaning", "Example"],
          rows: [
            ["para que", "so that", "Falo devagar para que todos entendam."],
            ["antes que", "before", "Vamos sair antes que chova."],
            ["até que", "until", "Espere aqui até que ela chegue."],
            ["sem que", "without", "Ele sai sem que ninguém perceba."],
            ["a não ser que", "unless", "Vamos à praia, a não ser que chova."],
            ["caso", "in case, if", "Caso você precise, me liga."],
            ["embora", "although", "Embora seja caro, vale a pena."],
            ["desde que", "provided that", "Pode ir, desde que volte cedo."],
            ["contanto que", "as long as", "Empresto o carro, contanto que você tome cuidado."],
          ],
        },
        examples: [
          { pt: "Vou mandar o endereço para que vocês não se percam.", en: "I'll send the address so you don't get lost." },
          { pt: "Leva um casaco caso esfrie à noite.", en: "Take a jacket in case it gets cold at night." },
          { pt: "Embora ela more longe, vem sempre nos visitar.", en: "Although she lives far away, she always comes to visit us." },
          { pt: "A gente pode jantar fora, desde que não seja muito caro.", en: "We can eat out, provided it isn't too expensive." },
          { pt: "Não vou sair até que você me explique tudo.", en: "I'm not leaving until you explain everything to me." },
        ],
      },
      {
        heading: `One subject: preposition + infinitive`,
        body: [
          `When the subject of both clauses is the same person, Portuguese prefers a preposition with the infinitive: "para" (to, in order to), "antes de", "sem", "até". "Estudo para passar" (I study to pass), not "para que eu passe". Using "para que" with the same subject sounds clumsy, much like English so that I can when to would do.`,
          `With a different subject you have two options: the conjunction + subjunctive, or the preposition + personal infinitive, which is lighter and very common in speech: "para que vocês entendam" or "para vocês entenderem"; "antes que eles cheguem" or "antes de eles chegarem". See the guide on the personal infinitive.`,
        ],
        table: {
          headers: ["Same subject: infinitive", "Different subject: subjunctive", "Different subject: personal infinitive"],
          rows: [
            ["Estudo para passar.", "Explico para que você entenda.", "Explico para você entender."],
            ["Liga antes de sair.", "Liga antes que ele saia.", "Liga antes de ele sair."],
            ["Saio sem falar nada.", "Saio sem que ela veja.", "Saio sem ela ver."],
          ],
        },
        examples: [
          { pt: "Acordei cedo para pegar o primeiro ônibus.", en: "I got up early to catch the first bus." },
          { pt: "Toma um café antes de sair.", en: "Have a coffee before you go." },
          { pt: "Ele saiu sem pagar a conta.", en: "He left without paying the bill." },
          { pt: "Vou falar mais alto para todo mundo ouvir.", en: "I'll speak louder so everyone can hear." },
        ],
      },
      {
        heading: `Embora, mas, apesar de; caso or se?`,
        body: [
          `Three ways to concede the same point. "Embora" + subjunctive: "embora esteja cansado, vou sair". "Mas" + indicative, joining two main clauses: "estou cansado, mas vou sair". "Apesar de" + noun or infinitive: "apesar do cansaço, vou sair", "apesar de estar cansado, vou sair". "Apesar de que" + clause exists but is heavier; "apesar que" is speech only.`,
          `"Caso" + present subjunctive and "se" are near-synonyms for if. In speech "se" dominates, and for a future possibility it takes the future subjunctive: "se você precisar, me liga" (taught at B2; learn it as a chunk now). "Se" + present indicative is for general truths: "se você precisa de ajuda, é só pedir". "Caso" sounds a little more careful and is common in instructions.`,
        ],
        examples: [
          { pt: "Embora o apartamento seja pequeno, é muito bem localizado.", en: "Although the flat is small, it's very well located." },
          { pt: "O apartamento é pequeno, mas é muito bem localizado.", en: "The flat is small, but it's very well located." },
          { pt: "Apesar de ser pequeno, o apartamento é muito bem localizado.", en: "Despite being small, the flat is very well located." },
          { pt: "Caso o sistema esteja fora do ar, ligue para este número.", en: "If the system is down, call this number." },
          { pt: "Se você precisar de alguma coisa, me avisa.", en: "If you need anything, let me know." },
        ],
      },
      {
        heading: `The ones that stay indicative`,
        body: [
          `Conjunctions that present facts take the indicative: "porque", "já que", "como" (since, at the start of a sentence), "depois que", "desde que" (since, in time), "enquanto" for a past or habitual while, "quando" for habits and past events. Compare "antes que ele chegue" (before he arrives: not yet real) with "depois que ele chegou" (after he arrived: a fact).`,
        ],
        examples: [
          { pt: "Depois que ele chegou, a festa ficou mais animada.", en: "After he arrived, the party livened up." },
          { pt: "Desde que me mudei para Curitiba, ando mais de bicicleta.", en: "Since I moved to Curitiba, I cycle more." },
          { pt: "Já que você está aqui, me ajuda com isso?", en: "Since you're here, can you help me with this?" },
          { pt: "Enquanto eu cozinhava, ela arrumava a mesa.", en: "While I was cooking, she was setting the table." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Estudo muito para que eu possa passar.",
        right: "Estudo muito para passar.",
        why: `Same subject: use "para" + infinitive, not "para que" + subjunctive.`,
      },
      {
        wrong: "Embora é caro, eu gosto.",
        right: "Embora seja caro, eu gosto.",
        why: `"Embora" always takes the subjunctive.`,
      },
      {
        wrong: "Vamos sair antes que você sai.",
        right: "Vamos sair antes que você saia.",
        why: `"Antes que" points to something not yet real: subjunctive. Or lighter: "antes de você sair".`,
      },
      {
        wrong: "Caso você precisa, me liga.",
        right: "Caso você precise, me liga.",
        why: `"Caso" is always followed by the subjunctive.`,
      },
      {
        wrong: "Apesar que estava chovendo, fomos à praia.",
        right: "Apesar de estar chovendo, fomos à praia.",
        why: `"Apesar que" is heard in speech but not accepted in writing. Use "apesar de" + infinitive or "embora" + subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `How do I remember which conjunctions take the subjunctive?`,
        a: `Ask whether the clause is a fact. Purpose (it hasn't happened), before and until (not yet), unless, in case and provided that (hypothetical), although (conceded, not asserted): subjunctive. Because, after, since: facts, so indicative.`,
      },
      {
        q: `Is "embora" ever used with the indicative?`,
        a: `Not as although. "Embora" has a second, everyday meaning, away, as in "vamos embora!" (let's go) and "ele foi embora" (he left), where no clause follows.`,
      },
      {
        q: `What about these conjunctions in the past?`,
        a: `After a past main verb the subjunctive moves into the past: "expliquei para que ela entendesse", "embora fosse caro, comprei". That is the imperfect subjunctive, taught at B2.`,
      },
    ],
    related: ["present-subjunctive", "personal-infinitive", "connectors-for-writing", "concession-cause-purpose", "future-subjunctive"],
    lessons: [
      "b1-conjunctions-1",
      "b1-conjunctions-2",
      "b1-que-or-infinitive",
      "b1-embora-mas-apesar",
      "b1-caso-se",
      "b1-contrast-conjunctions",
      "b1-dialogue-arrangements",
      "b1-error-hunt-conjunctions",
      "b1-build-up-instructions",
      "b1-spiral-conjunctions",
      "b1-conjunctions-extra-1",
      "b1-conjunctions-extra-2",
      "b1-conjunctions-extra-3",
    ],
  },
  {
    slug: "subjunctive-in-descriptions",
    title: "Procuro Alguém Que Fale Inglês: The Subjunctive in Descriptions",
    description:
      "Why Brazilian Portuguese uses the subjunctive to describe people and things that may not exist (procuro um apartamento que tenha varanda, não conheço ninguém que saiba), and the indicative for known ones.",
    level: "B1",
    intro: [
      `A relative clause usually describes something real: "moro num apartamento que tem varanda" (I live in a flat that has a balcony). But when you're looking for something, asking whether it exists, or saying it doesn't, Portuguese switches the description to the subjunctive: "procuro um apartamento que tenha varanda". The flat is still hypothetical.`,
      `English makes no such distinction (a flat that has a balcony works for both), so this is pure Portuguese logic. The question to ask is always: does the speaker have a specific, real person or thing in mind?`,
    ],
    sections: [
      {
        heading: `Known or unknown?`,
        body: [
          `Known, specific, real: indicative. Wanted, hypothetical, any one that fits: subjunctive. The verbs that typically introduce an unknown antecedent are "procurar", "precisar de", "querer", "preferir" and questions with "algum" or "existe". The article often helps too: a definite article ("o médico que") usually points to someone known.`,
          `The choice can change the meaning of the same sentence: "procuro uma secretária que fala alemão" means you're looking for a particular secretary who speaks German; "procuro uma secretária que fale alemão" means you need anyone who does.`,
        ],
        table: {
          headers: ["Known: indicative", "Unknown or wanted: subjunctive"],
          rows: [
            ["Moro num apartamento que tem varanda.", "Quero um apartamento que tenha varanda."],
            ["Conheço um lugar que abre cedo.", "Procuro um lugar que abra cedo."],
            ["Tenho um carro que é econômico.", "Preciso de um carro que seja econômico."],
            ["Ela tem uma amiga que fala japonês.", "Ela precisa de alguém que fale japonês."],
          ],
        },
        examples: [
          { pt: "Estou procurando um apartamento que seja perto do metrô.", en: "I'm looking for a flat that's close to the metro." },
          { pt: "A empresa precisa de alguém que tenha experiência com vendas.", en: "The company needs someone with sales experience." },
          { pt: "Queremos um hotel que aceite cachorro.", en: "We want a hotel that takes dogs." },
          { pt: "Conheço um dentista que atende aos sábados.", en: "I know a dentist who sees patients on Saturdays." },
          { pt: "Existe algum restaurante aqui que abra no domingo?", en: "Is there a restaurant around here that opens on Sundays?" },
        ],
      },
      {
        heading: `No one who, nothing that`,
        body: [
          `When you deny that something exists, the description is necessarily unreal, so it takes the subjunctive: "não conheço ninguém que fale russo", "não tem nada que eu possa fazer", "não há nenhum ônibus que vá direto". In everyday Brazilian speech "não tem" replaces "não há"; both trigger the subjunctive.`,
          `Questions about existence work the same way: "você conhece alguém que saiba consertar isso?" The speaker doesn't know whether such a person exists. If you then find one, you switch back: "conheço, sim, um rapaz que conserta".`,
        ],
        examples: [
          { pt: "Não conheço ninguém que more em Manaus.", en: "I don't know anyone who lives in Manaus." },
          { pt: "Não tem nada que eu possa fazer agora.", en: "There's nothing I can do now." },
          { pt: "Não há nenhuma farmácia que esteja aberta a essa hora.", en: "There isn't a single chemist open at this time." },
          { pt: "Você conhece alguém que saiba consertar celular?", en: "Do you know anyone who can fix phones?" },
          { pt: "Não encontrei nenhum livro que explique isso bem.", en: "I haven't found a single book that explains this well." },
        ],
      },
      {
        heading: `Qualquer, and open descriptions`,
        body: [
          `"Qualquer" means any, as in any at all: "qualquer pessoa", "qualquer coisa", "a qualquer hora", "qualquer um" (anyone). It doesn't change for gender, and its rare plural is "quaisquer". A clause after "qualquer" is open by definition, so it takes the subjunctive: "qualquer pessoa que queira participar".`,
          `You will also meet open relatives with the future subjunctive: "o que você quiser" (whatever you want), "quem quiser" (whoever wants to), "onde você estiver" (wherever you are). Treat them as chunks for now; the forms come at B2. And in ads and signs, "procura-se", "aluga-se" and "precisa-se de" + a subjunctive description are standard: "Precisa-se de vendedor que tenha carro".`,
        ],
        examples: [
          { pt: "Qualquer pessoa que queira participar pode se inscrever.", en: "Anyone who wants to take part can sign up." },
          { pt: "Pode me ligar a qualquer hora.", en: "You can call me any time." },
          { pt: "Qualquer um pode aprender a nadar.", en: "Anyone can learn to swim." },
          { pt: "Fica à vontade para pedir o que você quiser.", en: "Feel free to order whatever you want." },
          { pt: "Precisa-se de garçom que fale inglês.", en: "Waiter who speaks English wanted." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Procuro alguém que fala inglês.",
        right: "Procuro alguém que fale inglês.",
        why: `You don't have a specific person in mind: the description takes the subjunctive.`,
      },
      {
        wrong: "Não tem ninguém que sabe a resposta.",
        right: "Não tem ninguém que saiba a resposta.",
        why: `Denying that someone exists makes the description unreal: subjunctive.`,
      },
      {
        wrong: "Conheço um médico que atenda aos sábados.",
        right: "Conheço um médico que atende aos sábados.",
        why: `You know this doctor: a real, specific person takes the indicative.`,
      },
      {
        wrong: "Você pode escolher qualquer livros.",
        right: "Você pode escolher qualquer livro.",
        why: `"Qualquer" usually goes with a singular noun; the plural is "quaisquer", and it's rare.`,
      },
    ],
    faqs: [
      {
        q: `Does this work with "que" only?`,
        a: `With any relative: "procuro uma cidade onde eu possa trabalhar remotamente", "preciso de alguém com quem eu possa conversar". The mood depends on whether the thing described is known, not on the pronoun.`,
      },
      {
        q: `Will Brazilians understand me if I use the indicative?`,
        a: `Yes, and you'll hear the indicative in relaxed speech. But the subjunctive is what an educated speaker uses, and it carries meaning: it tells the listener you don't have a particular one in mind.`,
      },
    ],
    related: ["present-subjunctive", "relative-pronouns-in-depth", "future-subjunctive", "passive-voice-and-se"],
    lessons: [
      "b1-subjunctive-relative-1",
      "b1-subjunctive-relative-2",
      "b1-contrast-tem-tenha",
      "b1-qualquer",
      "b1-ads-and-requests",
      "b1-dialogue-flat-hunting",
      "b1-error-hunt-relative-subj",
      "b1-transform-known-unknown",
      "b1-mission-ad",
      "b1-descriptions-extra-1",
      "b1-descriptions-extra-2",
      "b1-descriptions-extra-3",
    ],
  },
  {
    slug: "conditional-tense",
    title: "The Futuro do Pretérito: Would, Could and Polite Requests",
    description:
      "How to form the Brazilian Portuguese conditional (falaria, faria, diria, traria), its uses for politeness, hypothesis, advice and the future in the past, and why speech so often uses eu queria and eu ia instead.",
    level: "B1",
    intro: [
      `The futuro do pretérito is the Portuguese would: "eu gostaria de um café" (I'd like a coffee), "eu moraria na praia" (I'd live by the sea), "ela disse que ligaria" (she said she would call). Grammar books also call it the condicional.`,
      `It is one of the most regular forms in the language, but spoken Brazilian Portuguese often replaces it with the imperfeito: "eu queria um café", "eu ia adorar", "você podia me ajudar?". You need both: the futuro do pretérito for writing and careful speech, the imperfeito to sound natural in conversation.`,
    ],
    sections: [
      {
        heading: `Forms: the infinitive + -ia`,
        body: [
          `Add "-ia", "-íamos", "-iam" to the whole infinitive, for all three verb groups. These are the endings of the imperfeito of -er verbs, stuck onto the infinitive. Only three verbs are irregular, and they are the same three as in the simple future: "fazer" becomes "far-", "dizer" becomes "dir-", "trazer" becomes "trar-".`,
          `Watch the accent: "falaríamos" has an acute on the "í" because the stress falls there. "Pôr" is regular from its infinitive: "poria", and so are its compounds: "proporia", "suporia".`,
        ],
        table: {
          headers: ["", "falar", "comer", "partir", "fazer"],
          rows: [
            ["eu", "falaria", "comeria", "partiria", "faria"],
            ["você, ele, ela, a gente", "falaria", "comeria", "partiria", "faria"],
            ["nós", "falaríamos", "comeríamos", "partiríamos", "faríamos"],
            ["vocês, eles, elas", "falariam", "comeriam", "partiriam", "fariam"],
          ],
        },
        examples: [
          { pt: "Eu gostaria de reservar uma mesa para quatro.", en: "I'd like to book a table for four." },
          { pt: "Com mais tempo, eu viajaria pelo Nordeste inteiro.", en: "With more time, I'd travel all over the North-East." },
          { pt: "Eu nunca diria uma coisa dessas.", en: "I would never say a thing like that." },
          { pt: "O que você faria no meu lugar?", en: "What would you do in my place?" },
          { pt: "Eles disseram que trariam a sobremesa, mas esqueceram.", en: "They said they would bring dessert, but they forgot." },
        ],
      },
      {
        heading: `Four uses`,
        body: [
          `Politeness: "você poderia...?", "eu gostaria de...", "seria possível...?", "você se importaria de...?" soften any request. Hypothesis: what would happen in an imagined situation ("eu compraria uma casa"); with an "if" clause it pairs with the imperfect subjunctive ("se eu ganhasse na loteria", B2; learn it as a chunk). Advice: "eu no seu lugar falaria com ela", "você deveria descansar", "seria bom você ir ao médico".`,
          `The future in the past: what was going to happen, seen from a past moment. "Ela disse que ligaria" (she said she would call) is the past of "ela diz que vai ligar". In speech "ela disse que ia ligar" is more common.`,
        ],
        examples: [
          { pt: "Você poderia falar um pouco mais devagar?", en: "Could you speak a little more slowly?" },
          { pt: "Seria possível mudar a data da reunião?", en: "Would it be possible to change the date of the meeting?" },
          { pt: "Eu no seu lugar aceitaria a proposta.", en: "If I were you, I'd accept the offer." },
          { pt: "Você deveria conversar com o seu chefe.", en: "You should talk to your boss." },
          { pt: "Ele prometeu que chegaria antes das oito.", en: "He promised he would arrive before eight." },
        ],
      },
      {
        heading: `The spoken would: eu queria, eu ia, você podia`,
        body: [
          `In everyday speech the imperfeito does much of the conditional's work. "Eu queria um pão de queijo" is the normal way to order at a padaria; "eu gostaria" is a touch more formal. "Eu ia adorar" (I'd love it), "você podia me dar uma carona?" (could you give me a lift?), "seria bom" alongside "era bom". "Ir" in the imperfeito + infinitive also replaces it for the future in the past: "ele disse que ia chegar cedo".`,
          `None of this is wrong; it is simply the spoken register. In emails, essays and the Celpe-Bras, use the futuro do pretérito.`,
        ],
        table: {
          headers: ["Written, careful", "Spoken, everyday", "Meaning"],
          rows: [
            ["Eu gostaria de um café.", "Eu queria um café.", "I'd like a coffee."],
            ["Você poderia me ajudar?", "Você podia me ajudar?", "Could you help me?"],
            ["Eu adoraria ir.", "Eu ia adorar ir.", "I'd love to go."],
            ["Ela disse que viria.", "Ela disse que ia vir.", "She said she'd come."],
            ["Seria melhor esperar.", "Era melhor esperar.", "It would be better to wait."],
          ],
        },
        examples: [
          { pt: "Oi, eu queria dois pães de queijo, por favor.", en: "Hi, I'd like two cheese breads, please." },
          { pt: "Você podia fechar a janela?", en: "Could you close the window?" },
          { pt: "Uma viagem pra Bahia? Eu ia adorar!", en: "A trip to Bahia? I'd love that!" },
          { pt: "Ele falou que ia passar aqui mais tarde.", en: "He said he'd drop by later." },
        ],
      },
      {
        heading: `Faria, fará, faz or vai fazer?`,
        body: [
          `Keep the four apart. "Faz" is the present (he does), "vai fazer" the everyday future (he's going to do), "fará" the written future (he will do), and "faria" the conditional (he would do). In the past, "ia fazer" (he was going to do) is the spoken partner of "faria".`,
        ],
        examples: [
          { pt: "Ele faz isso todo dia.", en: "He does this every day." },
          { pt: "Ele vai fazer isso amanhã.", en: "He's going to do it tomorrow." },
          { pt: "O governo fará uma reforma no sistema.", en: "The government will reform the system." },
          { pt: "Ele faria isso se tivesse tempo.", en: "He would do it if he had time." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu fazeria isso.",
        right: "Eu faria isso.",
        why: `"Fazer" is one of the three irregulars: the stem is "far-".`,
      },
      {
        wrong: "O que você dizeria?",
        right: "O que você diria?",
        why: `"Dizer" uses the short stem "dir-".`,
      },
      {
        wrong: "Você poderia de me ajudar?",
        right: "Você poderia me ajudar?",
        why: `"Poder" takes the infinitive directly, with no preposition; "gostar de" is the one that needs "de".`,
      },
      {
        wrong: "Ele disse que vai vir, mas não veio.",
        right: "Ele disse que viria, mas não veio.",
        why: `Seen from the past, the future becomes the conditional (or "ia vir" in speech).`,
      },
      {
        wrong: "Quando eu era criança, eu brincaria na rua.",
        right: "Quando eu era criança, eu brincava na rua.",
        why: `English would for past habits is the imperfeito in Portuguese, never the conditional.`,
      },
    ],
    faqs: [
      {
        q: `How do I say could?`,
        a: `It depends. A polite request or a possibility: "poderia" or "podia" ("você poderia...?", "isso poderia ser um problema"). Ability in the past: "conseguia" or "podia" ("eu não conseguia dormir"). A single past success: "consegui" ("consegui o emprego"). Don't use the conditional for the last two.`,
      },
      {
        q: `What about pronouns with the conditional in formal writing?`,
        a: `In very formal or old texts you'll see the pronoun inside the verb ("dir-se-ia", "far-se-ia"), a construction called mesóclise. In Brazil it's for recognition only; normal written Brazilian puts the pronoun before the verb ("se diria") or rephrases.`,
      },
      {
        q: `Is the spoken imperfeito the same in European Portuguese?`,
        a: `It's even more widespread there. In Portugal the standard polite order is "eu queria" or "gostava de um café", with "gostava" where Brazilians say "gostaria"; "você podia" becomes "podia ajudar-me?", with the pronoun after the verb.`,
      },
    ],
    related: ["conditional-sentences", "imperfect-subjunctive", "reported-speech", "subjunctive-wishes-and-hopes", "future-ir-vs-futuro-simples", "probability-future-conditional"],
    lessons: [
      "b1-conditional-1",
      "b1-conditional-2",
      "b1-conditional-speech",
      "b1-polite-requests-b1",
      "b1-advice-conditional",
      "b1-contrast-faria-faz",
      "b1-dialogue-dream-life",
      "b1-error-hunt-conditional",
      "b1-mission-advice-column",
      "b1-conditional-extra-1",
      "b1-conditional-extra-2",
      "b1-conditional-extra-3",
    ],
  },
  {
    slug: "preterito-perfeito-composto",
    title: "Tenho Feito: The Pretérito Perfeito Composto",
    description:
      "Why the Brazilian Portuguese tenho feito does not mean I have done: the perfeito composto for things repeated or ongoing lately, how to form it, irregular participles, and how to translate the English present perfect.",
    level: "B1",
    intro: [
      `"Tenho feito" looks exactly like English I have done, and that is the trap. In Portuguese, "ter" in the present + participle describes something repeated or continuing over a recent stretch of time, up to now: "tenho trabalhado muito" (I've been working a lot lately), "a gente tem se visto pouco" (we haven't been seeing much of each other).`,
      `A single completed action, however recent, is the simple pretérito perfeito: "já fiz" (I've already done it), "você já comeu?" (have you eaten?), "nunca fui a Manaus" (I've never been to Manaus). Most English present perfects are the simple past in Portuguese.`,
    ],
    sections: [
      {
        heading: `Form: ter + participle`,
        body: [
          `Use the present of "ter" and the participle, which never changes for gender or number in this tense. Watch "têm" with a circumflex for vocês and eles. Regular participles end in "-ado" (-ar verbs) and "-ido" (-er and -ir verbs).`,
          `The common irregular participles are worth learning as a list, because they appear in every compound tense and in the passive.`,
        ],
        table: {
          headers: ["Infinitive", "Participle", "Infinitive", "Participle"],
          rows: [
            ["fazer", "feito", "abrir", "aberto"],
            ["dizer", "dito", "escrever", "escrito"],
            ["ver", "visto", "vir", "vindo"],
            ["pôr", "posto", "cobrir", "coberto"],
            ["ganhar", "ganho", "gastar", "gasto"],
            ["pagar", "pago", "descobrir", "descoberto"],
          ],
        },
        examples: [
          { pt: "Tenho dormido mal esta semana.", en: "I've been sleeping badly this week." },
          { pt: "Ela tem feito muito exercício.", en: "She's been doing a lot of exercise." },
          { pt: "Nós temos visto muitos filmes brasileiros.", en: "We've been watching a lot of Brazilian films." },
          { pt: "Eles têm vindo aqui todo fim de semana.", en: "They've been coming here every weekend." },
          { pt: "Tenho gasto muito com transporte.", en: "I've been spending a lot on transport." },
        ],
      },
      {
        heading: `What it means: lately, again and again`,
        body: [
          `The perfeito composto needs repetition or continuity over a period that reaches the present. That's why it sits naturally with "ultimamente", "nos últimos tempos", "nos últimos meses", "este ano", "desde" + a time. It often implies the situation may carry on: "tem chovido muito" (it's been raining a lot, and it may keep raining).`,
          `"Tenho estado" and "tenho sido" follow the same logic: "tenho estado cansado" (I've been tired lately), "ele tem sido muito gentil comigo" (he's been very kind to me lately). The classic catch-up question is "O que você tem feito?", What have you been up to?`,
        ],
        examples: [
          { pt: "O que você tem feito de bom?", en: "What have you been up to?" },
          { pt: "Tem chovido muito em São Paulo.", en: "It's been raining a lot in São Paulo." },
          { pt: "Ultimamente tenho lido mais no celular do que em papel.", en: "Lately I've been reading more on my phone than on paper." },
          { pt: "A gente tem se falado pouco desde que você se mudou.", en: "We haven't been talking much since you moved." },
          { pt: "Tenho estado muito ocupada no trabalho.", en: "I've been very busy at work. (a woman speaking)" },
        ],
      },
      {
        heading: `Translating the English present perfect`,
        body: [
          `Ask what the English is doing. A single event or experience, with or without already, ever, never, yet, just: simple perfeito. Repetition or a trend up to now: perfeito composto. A state that started in the past and is still true (I've lived here for five years): the present with "há" or "faz", "moro aqui há cinco anos". English speakers who translate word for word get all three wrong.`,
        ],
        table: {
          headers: ["English", "Portuguese", "Why"],
          rows: [
            ["I've been to Rio twice.", "Já fui ao Rio duas vezes.", "single experiences: perfeito"],
            ["Have you eaten yet?", "Você já comeu?", "one action: perfeito"],
            ["I've just arrived.", "Acabei de chegar.", "acabar de + infinitive"],
            ["I've been working a lot lately.", "Tenho trabalhado muito.", "repeated up to now: composto"],
            ["I've lived here for five years.", "Moro aqui há cinco anos.", "still true: present + há"],
            ["I haven't seen Ana for ages.", "Faz tempo que eu não vejo a Ana.", "still true: present + faz"],
          ],
        },
        examples: [
          { pt: "Já li esse livro.", en: "I've already read that book." },
          { pt: "Tenho lido muito sobre a história do Brasil.", en: "I've been reading a lot about Brazilian history." },
          { pt: "Você já experimentou açaí?", en: "Have you ever tried açaí?" },
          { pt: "Estudo português há dois anos.", en: "I've been studying Portuguese for two years." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu tenho visitado Paris uma vez.",
        right: "Eu já visitei Paris uma vez.",
        why: `One single experience is the simple perfeito. The composto needs repetition up to now.`,
      },
      {
        wrong: "Eu tenho fazido muita coisa.",
        right: "Eu tenho feito muita coisa.",
        why: `"Fazer" has the irregular participle "feito".`,
      },
      {
        wrong: "Já tenho comido.",
        right: "Já comi.",
        why: `I've already eaten is one finished action: perfeito.`,
      },
      {
        wrong: "Eles tem feito muito barulho.",
        right: "Eles têm feito muito barulho.",
        why: `The plural of "tem" is "têm", with a circumflex.`,
      },
      {
        wrong: "Tenho morado aqui por cinco anos.",
        right: "Moro aqui há cinco anos.",
        why: `A state that's still true takes the present with "há" or "faz". The composto would stress the recent period and sounds odd with a fixed span.`,
      },
    ],
    faqs: [
      {
        q: `Can the perfeito composto ever refer to a single action?`,
        a: `Not in modern Brazilian or European Portuguese. If you can add once, or the action is clearly finished, use the simple perfeito. This is one of the few points where both varieties of Portuguese agree and both differ from English.`,
      },
      {
        q: `"Tenho pago" or "tenho pagado"?`,
        a: `Both are heard. The grammar rule assigns the long participle to "ter" ("tenho pagado"), but in Brazil the short forms "pago", "ganho" and "gasto" dominate with every auxiliary. See the guide on the passive for double participles.`,
      },
    ],
    related: ["mais-que-perfeito", "perfeito-vs-imperfeito", "passive-voice-and-se", "compound-subjunctive-tenses", "narrative-tenses"],
    lessons: [
      "b1-perfeito-composto-1",
      "b1-perfeito-composto-2",
      "b1-contrast-fiz-tenho-feito",
      "b1-participles-drill",
      "b1-catching-up",
      "b1-dialogue-catching-up",
      "b1-error-hunt-composto",
      "b1-transform-lately",
      "b1-mission-update-email",
      "b1-spiral-composto",
      "b1-composto-extra-1",
      "b1-composto-extra-2",
      "b1-composto-extra-3",
    ],
  },
  {
    slug: "mais-que-perfeito",
    title: "Tinha Feito: The Mais-Que-Perfeito (Had Done)",
    description:
      "How to form and use the Brazilian Portuguese past perfect: tinha + participle in speech, havia + participle in writing, the simple form fizera in books and news, and how to put past events in order.",
    level: "B1",
    intro: [
      `The mais-que-perfeito is the past of the past, the Portuguese had done: "quando cheguei, o filme já tinha começado" (when I arrived, the film had already started). It places one past event before another.`,
      `Brazilians build it with the imperfeito of "ter" + participle in speech and most writing, and with "haver" in more formal writing. There is also a one-word form ("fizera", "chegara") that you need to recognise in literature and journalism, but not to use.`,
    ],
    sections: [
      {
        heading: `Tinha or havia + participle`,
        body: [
          `Use "tinha", "tínhamos", "tinham" + participle. The participle doesn't change, and the irregular ones are the same as everywhere else: "tinha feito", "tinha dito", "tinha visto", "tinha aberto". "Havia feito" means exactly the same and is the choice in formal reports, news and essays.`,
        ],
        table: {
          headers: ["", "spoken and neutral", "formal writing"],
          rows: [
            ["eu", "tinha saído", "havia saído"],
            ["você, ele, ela, a gente", "tinha saído", "havia saído"],
            ["nós", "tínhamos saído", "havíamos saído"],
            ["vocês, eles, elas", "tinham saído", "haviam saído"],
          ],
        },
        examples: [
          { pt: "Quando cheguei no aeroporto, o check-in já tinha fechado.", en: "When I got to the airport, check-in had already closed." },
          { pt: "Eu nunca tinha visto o mar antes daquela viagem.", en: "I had never seen the sea before that trip." },
          { pt: "Ela percebeu que tinha esquecido o passaporte em casa.", en: "She realised she had left her passport at home." },
          { pt: "A gente já tinha jantado quando eles chegaram.", en: "We had already had dinner when they arrived." },
          { pt: "A empresa havia anunciado a mudança em março.", en: "The company had announced the change in March." },
        ],
      },
      {
        heading: `One past or two?`,
        body: [
          `With two past events, the perfeito gives a sequence (this, then that) and the mais-que-perfeito reaches back before the other. "Quando cheguei, ele saiu" means he left when I got there, as a reaction. "Quando cheguei, ele tinha saído" means he'd already gone. "Já" and "ainda não" are its natural partners: "eles ainda não tinham chegado".`,
          `Sequencing words help tell events out of order: "antes de" / "depois de" + infinitive ("depois de jantar, saímos"), "assim que" and "logo que" (as soon as), "quando". It's also the tense of explanations in stories: "eu não sabia que ela tinha se mudado" (I didn't know she had moved).`,
        ],
        examples: [
          { pt: "Quando cheguei, ele saiu.", en: "When I arrived, he left." },
          { pt: "Quando cheguei, ele já tinha saído.", en: "When I arrived, he had already left." },
          { pt: "Eles ainda não tinham terminado quando a luz acabou.", en: "They hadn't finished yet when the power went off." },
          { pt: "Ninguém tinha me avisado que a loja ia fechar.", en: "Nobody had told me the shop was going to close." },
          { pt: "Assim que terminou a reunião, ela foi embora.", en: "As soon as the meeting ended, she left." },
        ],
      },
      {
        heading: `The simple form: fizera, dissera (recognition)`,
        body: [
          `The one-word mais-que-perfeito is built from the eles form of the perfeito by replacing "-ram" with "-ra": "fizeram" gives "fizera", "chegaram" gives "chegara", "foram" gives "fora". In Brazil it lives in novels, formal journalism and fixed expressions; in speech it sounds bookish. Learn to recognise it, and write "tinha" or "havia" + participle yourself.`,
          `Some everyday expressions are fossils of this form: "Quem dera!" (if only!), "Tomara!" (let's hope so) and "Pudera!" (no wonder!) are all old mais-que-perfeitos.`,
        ],
        table: {
          headers: ["Infinitive", "Simple form", "Compound equivalent"],
          rows: [
            ["fazer", "fizera", "tinha feito"],
            ["dizer", "dissera", "tinha dito"],
            ["chegar", "chegara", "tinha chegado"],
            ["ser, ir", "fora", "tinha sido, tinha ido"],
            ["ter", "tivera", "tinha tido"],
            ["ver", "vira", "tinha visto"],
          ],
        },
        examples: [
          { pt: "Ele voltou à cidade onde nascera.", en: "He returned to the town where he had been born. (literary)" },
          { pt: "O ministro afirmou que nunca dissera tal coisa.", en: "The minister stated that he had never said such a thing. (news)" },
          { pt: "Quem dera eu tivesse mais tempo!", en: "If only I had more time!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quando cheguei, ele já saiu.",
        right: "Quando cheguei, ele já tinha saído.",
        why: `"Já" with an earlier past event calls for the mais-que-perfeito.`,
      },
      {
        wrong: "Eu tinha fazido tudo.",
        right: "Eu tinha feito tudo.",
        why: `"Fazer" has the irregular participle "feito".`,
      },
      {
        wrong: "Eu tive ido lá antes.",
        right: "Eu tinha ido lá antes.",
        why: `The auxiliary is the imperfeito "tinha", never the perfeito "tive".`,
      },
      {
        wrong: "Eles haviam muitos problemas.",
        right: "Havia muitos problemas.",
        why: `As an auxiliary "haver" agrees ("eles haviam saído"), but meaning there was or there were it stays singular.`,
      },
    ],
    faqs: [
      {
        q: `"Tinha" or "havia": is one more correct?`,
        a: `Both are correct. "Tinha" is neutral and used in speech and most writing; "havia" adds formality. In an essay or report either works; in conversation "havia saído" sounds stiff.`,
      },
      {
        q: `Does Portuguese use it as often as English uses had done?`,
        a: `Roughly, but Portuguese is a little stricter about it in writing. English often lets the simple past do the job (after he left, I called her); Portuguese can too with "depois que ele saiu", but where the order is otherwise unclear, use "tinha" + participle.`,
      },
      {
        q: `What about "se eu tivesse sabido"?`,
        a: `That's the pluperfect subjunctive, used for regrets and past unreal conditions ("se eu tivesse sabido, eu teria ido"). Learn it as a chunk at B1; it's taught fully at B2.`,
      },
    ],
    related: ["preterito-perfeito-composto", "perfeito-vs-imperfeito", "compound-subjunctive-tenses", "reported-speech", "narrative-tenses", "literary-pluperfect"],
    lessons: [
      "b1-mais-que-perfeito-1",
      "b1-mais-que-perfeito-2",
      "b1-sequencing-past",
      "b1-contrast-saiu-tinha-saido",
      "b1-regrets",
      "b1-dialogue-mishap",
      "b1-error-hunt-mais-que-perfeito",
      "b1-build-up-anecdote",
      "b1-mission-incident-report",
      "b1-spiral-past-before",
      "b1-mqp-extra-1",
      "b1-mqp-extra-2",
      "b1-mqp-extra-3",
    ],
  },
  {
    slug: "personal-infinitive",
    title: "The Personal Infinitive: Para Vocês Entenderem",
    description:
      "The infinitive that conjugates, a feature almost unique to Portuguese: its forms (falarmos, falarem), when to use it after prepositions and impersonal expressions, and when not to inflect.",
    level: "B1",
    intro: [
      `Portuguese has an infinitive that takes person endings: "para vocês entenderem" (so that you understand), "antes de eles chegarem" (before they arrive), "é melhor a gente ir" (we'd better go). Almost no other language does this, so English speakers are often surprised to learn it's an everyday, spoken structure, not a literary one.`,
      `It solves a practical problem: it lets you give an infinitive its own subject, and so avoid a "que" + subjunctive clause. "Para que vocês entendam" and "para vocês entenderem" mean the same; the second is lighter and more common in conversation.`,
    ],
    sections: [
      {
        heading: `Forms: the infinitive + -mos, -em`,
        body: [
          `Start from the infinitive and add nothing for eu and você, "-mos" for nós and "-em" for vocês and eles. There are no irregular verbs: "fazer" gives "fazermos", "ser" gives "sermos", "ir" gives "irem", "pôr" gives "pormos" and "porem". Only the stress needs care: "saírem", "caírem" take an accent, like "saíram".`,
          `The subject usually comes before the infinitive and is a subject pronoun: "para eu entender", "antes de eles chegarem". Never "para mim entender" in writing, though you'll hear it.`,
        ],
        table: {
          headers: ["", "falar", "fazer", "ir", "sair"],
          rows: [
            ["eu", "falar", "fazer", "ir", "sair"],
            ["você, ele, ela, a gente", "falar", "fazer", "ir", "sair"],
            ["nós", "falarmos", "fazermos", "irmos", "sairmos"],
            ["vocês, eles, elas", "falarem", "fazerem", "irem", "saírem"],
          ],
        },
        examples: [
          { pt: "Vou repetir para vocês entenderem melhor.", en: "I'll say it again so you understand better." },
          { pt: "Liga pra mim antes de vocês saírem.", en: "Call me before you leave." },
          { pt: "Depois de a gente comer, vamos dar uma volta.", en: "After we eat, let's go for a walk." },
          { pt: "Ela fechou a porta para as crianças não ouvirem.", en: "She closed the door so the children wouldn't hear." },
          { pt: "Até nós terminarmos, ninguém sai.", en: "Nobody leaves until we finish." },
        ],
      },
      {
        heading: `Where it's used`,
        body: [
          `After prepositions, when the infinitive has a subject different from the main verb's: "para", "antes de", "depois de", "sem", "até", "por" ("obrigado por vocês virem", thanks for coming). After impersonal expressions, to say who: "é melhor vocês irem" (you'd better go), "é importante nós sabermos", "é hora de a gente ir".`,
          `In each case there's an alternative with "que" + subjunctive or another conjunction, which sounds more formal: "é importante que nós saibamos", "antes que eles cheguem". Both are correct; choose by register.`,
        ],
        table: {
          headers: ["Que + subjunctive", "Personal infinitive"],
          rows: [
            ["para que vocês saibam", "para vocês saberem"],
            ["antes que eles cheguem", "antes de eles chegarem"],
            ["sem que ela perceba", "sem ela perceber"],
            ["é melhor que vocês vão", "é melhor vocês irem"],
            ["é importante que nós estudemos", "é importante nós estudarmos"],
          ],
        },
        examples: [
          { pt: "É melhor vocês levarem um casaco.", en: "You'd better take a jacket." },
          { pt: "É hora de a gente ir embora.", en: "It's time for us to go." },
          { pt: "Eles saíram sem ninguém perceber.", en: "They left without anyone noticing." },
          { pt: "Obrigada por vocês terem vindo!", en: "Thank you for coming! (a woman speaking)" },
          { pt: "É importante os alunos lerem em voz alta.", en: "It's important for the students to read aloud." },
        ],
      },
      {
        heading: `When not to inflect`,
        body: [
          `When the infinitive has the same subject as the main verb, or no particular subject, use the plain form: "vamos sair antes de comer" (we'll leave before we eat), "é importante dormir bem". "Antes de comermos" is possible here, but the plain form is more natural.`,
          `Never inflect after verbs that form a unit with the infinitive: "querer", "poder", "dever", "ir", "conseguir", "precisar", "começar a", "acabar de". "Eles querem sair", "nós podemos ir", "vocês vão gostar". The second verb belongs to the first, so it can't take its own subject.`,
        ],
        examples: [
          { pt: "Eles querem sair mais cedo.", en: "They want to leave earlier." },
          { pt: "Nós precisamos conversar.", en: "We need to talk." },
          { pt: "Vamos tomar um café antes de começar.", en: "Let's have a coffee before we start." },
          { pt: "É bom falar com calma.", en: "It's good to speak calmly." },
          { pt: "É bom vocês falarem com calma com ele.", en: "It's a good idea for you to speak to him calmly." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eles querem saírem.",
        right: "Eles querem sair.",
        why: `After "querer", "poder", "dever" and "ir" the infinitive never inflects.`,
      },
      {
        wrong: "Para eles entendem, fale devagar.",
        right: "Para eles entenderem, fale devagar.",
        why: `After a preposition you need the infinitive ("entenderem"), not the present indicative ("entendem").`,
      },
      {
        wrong: "É melhor vocês vão agora.",
        right: "É melhor vocês irem agora.",
        why: `"É melhor" + subject + personal infinitive, or "é melhor que vocês vão" with the subjunctive.`,
      },
      {
        wrong: "Me dá o livro para mim ler.",
        right: "Me dá o livro para eu ler.",
        why: `The subject of an infinitive is "eu", not "mim". "Pra mim ler" is very common in speech but marked as wrong.`,
      },
      {
        wrong: "Antes deles chegarem, vamos arrumar a casa.",
        right: "Antes de eles chegarem, vamos arrumar a casa.",
        why: `In careful writing the preposition doesn't contract with the subject of an infinitive. "Deles" is normal in speech.`,
      },
    ],
    faqs: [
      {
        q: `Isn't "fazermos" the future subjunctive?`,
        a: `For regular verbs the personal infinitive and the future subjunctive look the same ("quando chegarmos", "para chegarmos"). With irregular verbs they differ: "para fazermos" (personal infinitive) but "quando fizermos" (future subjunctive). The B2 guide on the future subjunctive goes through the pairs.`,
      },
      {
        q: `Is it formal?`,
        a: `No. "É melhor a gente ir", "pra vocês verem" and "antes de vocês chegarem" are everyday speech. It's actually less formal than the "que" + subjunctive alternative.`,
      },
      {
        q: `Does European Portuguese use it differently?`,
        a: `It uses it even more, and with one extra form, because "tu" is everyday there: "para tu saberes", "antes de tu saíres". In Brazil the tu form appears only in regions where "tu" is used, and often without the ending in speech.`,
      },
    ],
    related: ["subjunctive-after-conjunctions", "subjunctive-wishes-and-hopes", "future-subjunctive", "reduced-clauses"],
    lessons: [
      "b1-personal-infinitive-1",
      "b1-personal-infinitive-2",
      "b1-personal-inf-or-subjunctive",
      "b1-personal-inf-when-not",
      "b1-personal-inf-drill",
      "b1-contrast-falar-falarem",
      "b1-dialogue-group-trip",
      "b1-error-hunt-personal-inf",
      "b1-transform-personal-inf",
      "b1-spiral-personal-inf",
      "b1-personal-inf-extra-1",
      "b1-personal-inf-extra-2",
      "b1-personal-inf-extra-3",
    ],
  },
  {
    slug: "relative-pronouns-in-depth",
    title: "Em Que, Com Quem, O Qual, Cujo: Relative Pronouns",
    description:
      "How to use Brazilian Portuguese relative pronouns after prepositions (a cidade em que nasci, a pessoa com quem falei), o qual and a qual, cujo for whose, o que for a whole idea, and onde vs aonde.",
    level: "B1",
    intro: [
      `At A2 you met "que" and "onde": "o livro que eu comprei", "a cidade onde eu moro". At B1 relative clauses get longer and more precise, and the big difference from English shows up: Portuguese never leaves a preposition at the end. English says the person I spoke to; Portuguese must say "a pessoa com quem eu falei", the person with whom I spoke.`,
      `Five tools cover almost everything: "que" (things, and people without a preposition), "quem" (people after a preposition), "o qual" (after longer prepositions and in formal writing), "cujo" (whose) and "o que" (referring to a whole idea).`,
    ],
    sections: [
      {
        heading: `The preposition goes first`,
        body: [
          `If the verb in the relative clause needs a preposition ("falar de", "morar em", "trabalhar com", "gostar de"), that preposition moves to the front of the relative pronoun. With things, use "que" after short prepositions: "o assunto de que falamos", "a casa em que moro". With people, use "quem": "o colega com quem trabalho", "a amiga de quem te falei".`,
          `In relaxed speech Brazilians very often drop the preposition: "o filme que eu te falei", "a empresa que eu trabalho". Recognise it, but in writing and the Celpe-Bras keep the preposition.`,
        ],
        table: {
          headers: ["Verb + preposition", "Relative clause", "Meaning"],
          rows: [
            ["morar em", "a cidade em que moro", "the city I live in"],
            ["falar de", "o livro de que te falei", "the book I told you about"],
            ["trabalhar com", "o colega com quem trabalho", "the colleague I work with"],
            ["gostar de", "a pessoa de quem mais gosto", "the person I like most"],
            ["pensar em", "a viagem em que estou pensando", "the trip I'm thinking about"],
            ["sair com", "o rapaz com quem ela saiu", "the guy she went out with"],
          ],
        },
        examples: [
          { pt: "Esse é o colega com quem eu divido a sala.", en: "This is the colleague I share an office with." },
          { pt: "O assunto de que vamos tratar hoje é importante.", en: "The subject we're going to deal with today is important." },
          { pt: "A cidade em que nasci fica no interior de Minas.", en: "The town I was born in is in the interior of Minas Gerais." },
          { pt: "Não conheço a pessoa de quem vocês estão falando.", en: "I don't know the person you're talking about." },
          { pt: "Aquele é o restaurante que eu te falei.", en: "That's the restaurant I told you about. (casual speech)" },
        ],
      },
      {
        heading: `O qual, a qual, os quais, as quais`,
        body: [
          `"O qual" agrees with the noun it refers to and contracts with the preposition before it: "do qual", "no qual", "pelo qual", "ao qual", "à qual". It is the normal choice after longer prepositions ("durante", "sobre", "entre", "segundo", "contra") and after "para" and "por": "a empresa para a qual trabalho", "os motivos pelos quais saí".`,
          `It also clears up ambiguity, because it shows gender and number: "o pai da Ana, o qual mora em Recife" can only be the father. Outside these cases it sounds formal, so don't use it where "que" or "quem" works.`,
        ],
        table: {
          headers: ["Preposition", "masculine", "feminine", "masculine plural", "feminine plural"],
          rows: [
            ["de", "do qual", "da qual", "dos quais", "das quais"],
            ["em", "no qual", "na qual", "nos quais", "nas quais"],
            ["por", "pelo qual", "pela qual", "pelos quais", "pelas quais"],
            ["a", "ao qual", "à qual", "aos quais", "às quais"],
            ["para", "para o qual", "para a qual", "para os quais", "para as quais"],
            ["sobre", "sobre o qual", "sobre a qual", "sobre os quais", "sobre as quais"],
          ],
        },
        examples: [
          { pt: "A empresa para a qual eu trabalho tem escritório em Curitiba.", en: "The company I work for has an office in Curitiba." },
          { pt: "Esses são os motivos pelos quais eu pedi demissão.", en: "These are the reasons why I resigned." },
          { pt: "Foi uma reunião durante a qual ninguém disse nada de útil.", en: "It was a meeting during which nobody said anything useful." },
          { pt: "O tema sobre o qual vou falar é a mobilidade urbana.", en: "The topic I'm going to talk about is urban mobility." },
        ],
      },
      {
        heading: `Cujo: whose`,
        body: [
          `"Cujo" means whose and agrees with the thing possessed, not with the owner: "o professor cujo livro usamos", "o professor cuja filha estuda comigo", "a vizinha cujos filhos são barulhentos". It never takes an article after it: "cujo o" is a classic error, even among Brazilians.`,
          `"Cujo" is standard in writing; in speech many Brazilians avoid it with "que" + possessive ("o professor que a gente usa o livro dele"). Use "cujo" in anything written; it is one of the marks of a good B1 text.`,
        ],
        examples: [
          { pt: "Conheci uma escritora cujo livro ganhou o prêmio Jabuti.", en: "I met a writer whose book won the Jabuti prize." },
          { pt: "É uma empresa cuja sede fica em Belo Horizonte.", en: "It's a company whose head office is in Belo Horizonte." },
          { pt: "Tenho uma vizinha cujos filhos tocam bateria.", en: "I have a neighbour whose children play the drums." },
          { pt: "O autor de cuja obra falamos morreu em 1908.", en: "The author whose work we talked about died in 1908." },
        ],
      },
      {
        heading: `O que, onde and aonde`,
        body: [
          `"O que" refers back to a whole idea, the English which after a comma: "ele não ligou, o que me preocupou" (he didn't call, which worried me). It also means what, the thing that: "tudo o que eu sei", "o que eu mais gosto é a praia".`,
          `"Onde" is for places, where something is: "a cidade onde moro" (in writing also "em que"). "Aonde" adds the idea of motion to, with verbs like "ir" and "chegar": "aonde você vai?", "o lugar aonde vamos". In writing, don't use "onde" for times or abstract situations: "a época em que eu morava lá", not "a época onde".`,
        ],
        examples: [
          { pt: "Ela chegou atrasada de novo, o que irritou todo mundo.", en: "She arrived late again, which annoyed everyone." },
          { pt: "Tudo o que eu quero agora é dormir.", en: "All I want now is to sleep." },
          { pt: "O bairro onde ela mora é bem tranquilo.", en: "The neighbourhood she lives in is very quiet." },
          { pt: "Aonde vocês vão no Carnaval?", en: "Where are you going for Carnival?" },
          { pt: "Lembro bem da época em que a gente morava no Rio.", en: "I remember the time when we lived in Rio well." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "O livro cujo o autor é brasileiro.",
        right: "O livro cujo autor é brasileiro.",
        why: `"Cujo" is never followed by an article.`,
      },
      {
        wrong: "A pessoa que eu falei com.",
        right: "A pessoa com quem eu falei.",
        why: `Portuguese never leaves a preposition at the end: it moves before the relative pronoun.`,
      },
      {
        wrong: "Foi uma época onde eu era muito feliz.",
        right: "Foi uma época em que eu era muito feliz.",
        why: `In writing "onde" is only for places. For time use "em que" (or "quando").`,
      },
      {
        wrong: "O carro o que eu comprei.",
        right: "O carro que eu comprei.",
        why: `"O que" refers to a whole idea or means what. After a noun, "que" alone.`,
      },
      {
        wrong: "A empresa cujo dono é a Ana.",
        right: "A empresa cuja dona é a Ana.",
        why: `"Cujo" agrees with the thing it introduces, here "dona", not with "empresa".`,
      },
    ],
    faqs: [
      {
        q: `"Que" or "quem" for people?`,
        a: `Without a preposition, use "que": "a moça que trabalha aqui", "o médico que eu conheci". After a preposition, use "quem" (or "o qual"): "a moça com quem eu trabalho". "Quem" without a preposition only appears in sentences like "quem sabe é ela" (the one who knows is her).`,
      },
      {
        q: `Is dropping the preposition in speech really accepted?`,
        a: `In conversation it's the norm for many speakers, and nobody will notice it. Grammar books and examiners do. Keep "em que", "de que" and "com quem" in emails, essays and anything formal.`,
      },
    ],
    related: ["subjunctive-in-descriptions", "regencia-and-crase", "connectors-for-writing", "register-and-the-written-norm"],
    lessons: [
      "b1-relatives-prepositions",
      "b1-relatives-o-qual",
      "b1-relatives-cujo",
      "b1-relatives-o-que",
      "b1-onde-aonde",
      "b1-contrast-relatives",
      "b1-dialogue-recommendations",
      "b1-error-hunt-relatives",
      "b1-build-up-relatives",
      "b1-spiral-relatives",
      "b1-relatives-extra-1",
      "b1-relatives-extra-2",
      "b1-relatives-extra-3",
    ],
  },
  {
    slug: "reported-speech",
    title: "Ela Disse Que...: Reported Speech",
    description:
      "How to report statements, questions and requests in Brazilian Portuguese: the tense shifts (é becomes era, vou becomes ia), perguntar se, pedir para + infinitive, and the time and place words that change.",
    level: "B1",
    intro: [
      `Reported speech in Portuguese works much like in English: when the reporting verb is in the past, the tenses step back. "Estou cansada", she says; later you report "ela disse que estava cansada". The good news is that Portuguese has no special mood for reported speech; you only need the tenses you already know.`,
      `What does take practice: requests (Portuguese uses "pedir para" + infinitive or "pedir que" + subjunctive, never an English-style object + infinitive), questions with "se", and the time and place words that change when the moment of speaking changes.`,
    ],
    sections: [
      {
        heading: `Statements: the tenses step back`,
        body: [
          `With a past reporting verb ("disse", "falou", "contou", "explicou"), the present becomes the imperfeito, the perfeito becomes the mais-que-perfeito, and the future (with "vou" or "-rei") becomes "ia" + infinitive or the conditional. The imperfeito and the mais-que-perfeito stay as they are.`,
          `In conversation the perfeito often stays as it is: "ele disse que fez tudo" is as normal as "que tinha feito tudo". If the statement is still true or still to happen, you can keep the original tense: "ela disse que vem amanhã" (and she still plans to).`,
        ],
        table: {
          headers: ["She says", "Ela disse que..."],
          rows: [
            ["Estou cansada.", "estava cansada."],
            ["Moro em Recife.", "morava em Recife."],
            ["Fiz tudo.", "tinha feito tudo."],
            ["Vou viajar.", "ia viajar."],
            ["Farei o possível.", "faria o possível."],
            ["Eu estava dormindo.", "estava dormindo."],
          ],
        },
        examples: [
          { pt: "O Rafael disse que estava com dor de cabeça.", en: "Rafael said he had a headache." },
          { pt: "Ela contou que tinha conhecido o namorado no trabalho.", en: "She told me she had met her boyfriend at work." },
          { pt: "Eles falaram que iam chegar mais tarde.", en: "They said they would get here later." },
          { pt: "O diretor afirmou que faria mudanças na equipe.", en: "The director stated he would make changes to the team." },
          { pt: "A Beatriz disse que vem amanhã.", en: "Beatriz said she's coming tomorrow." },
        ],
      },
      {
        heading: `Questions and requests`,
        body: [
          `Yes/no questions are reported with "se" (whether, if): "Você vem?" becomes "ele perguntou se eu ia". Questions with a question word keep it: "ela perguntou onde eu morava", "perguntou por que eu tinha saído". The word order is normal statement order, as in English.`,
          `Requests and commands in speech use "pedir para" + subject + infinitive: "Me liga!" becomes "ela pediu pra eu ligar". "Mandar" works the same for orders: "o chefe mandou a gente refazer". In writing, "pedir que" + subjunctive: present if the request still holds ("ela pede que você ligue"), imperfect after a past verb ("ela pediu que eu ligasse", taught at B2).`,
        ],
        examples: [
          { pt: "Ele perguntou se a reunião ainda estava de pé.", en: "He asked whether the meeting was still on." },
          { pt: "A moça perguntou quanto custava a passagem.", en: "The young woman asked how much the ticket cost." },
          { pt: "Minha mãe pediu pra eu comprar pão.", en: "My mum asked me to buy bread." },
          { pt: "A professora mandou os alunos fazerem silêncio.", en: "The teacher told the students to be quiet." },
          { pt: "A empresa pede que os clientes guardem o comprovante.", en: "The company asks customers to keep the receipt." },
        ],
      },
      {
        heading: `Time, place and reporting verbs`,
        body: [
          `When the report is made on another day or in another place, the reference words change, just as in English. Choose a precise reporting verb, too: "avisou que" (warned, let know), "prometeu que", "explicou que", "reclamou que", "comentou que", "respondeu que", "confessou que". "Falar que" is the everyday synonym of "dizer que".`,
        ],
        table: {
          headers: ["Direct speech", "Reported later"],
          rows: [
            ["hoje", "naquele dia"],
            ["ontem", "no dia anterior, na véspera"],
            ["amanhã", "no dia seguinte"],
            ["semana que vem", "na semana seguinte"],
            ["agora", "naquele momento"],
            ["aqui", "lá, ali"],
            ["este, esta, isto", "aquele, aquela, aquilo"],
          ],
        },
        examples: [
          { pt: "Ele prometeu que ia terminar no dia seguinte.", en: "He promised he would finish the next day." },
          { pt: "Ela avisou que não ia estar no escritório naquele dia.", en: "She let us know she wouldn't be in the office that day." },
          { pt: "O cliente reclamou que tinha esperado duas horas.", en: "The customer complained that he had waited two hours." },
          { pt: "Eles explicaram que o voo tinha sido cancelado na véspera.", en: "They explained that the flight had been cancelled the day before." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ontem ela disse que vou ao médico.",
        right: "Ontem ela disse que ia ao médico.",
        why: `The person changes (she, not I) and, in a past report, the tense steps back: "vou" becomes "ia".`,
      },
      {
        wrong: "Ele perguntou que se eu queria café.",
        right: "Ele perguntou se eu queria café.",
        why: `Reported yes/no questions take "se" alone, without "que".`,
      },
      {
        wrong: "Ela pediu que eu ligo para ela.",
        right: "Ela pediu pra eu ligar para ela.",
        why: `A request is not a fact: use "pedir para" + infinitive, or "pedir que" + subjunctive ("que eu ligasse").`,
      },
      {
        wrong: "Ela me pediu ligar.",
        right: "Ela me pediu para ligar.",
        why: `"Pedir" needs "para" before the infinitive.`,
      },
      {
        wrong: "Ele disse para mim que vinha.",
        right: "Ele me disse que vinha.",
        why: `"Disse para mim" is possible in speech, but sounds heavy. The natural order puts the pronoun before the verb: "ele me disse".`,
      },
    ],
    faqs: [
      {
        q: `Do I always have to shift the tense?`,
        a: `No. Shift when you report from a past point of view, which is most of the time in stories. Keep the original tense when the content is still true ("ele disse que mora em Salvador") or when the reporting verb is in the present ("ela diz que está cansada").`,
      },
      {
        q: `"Dizer" or "falar"?`,
        a: `In Brazil "falar que" is the everyday way to report: "ele falou que vinha". "Dizer que" is neutral and safer in writing. With a person, "falar com" means talk to and "dizer a" or "dizer para" means tell.`,
      },
    ],
    related: ["conditional-tense", "mais-que-perfeito", "subjunctive-wishes-and-hopes", "sequence-of-tenses"],
    lessons: [
      "b1-reported-statements",
      "b1-reported-questions",
      "b1-reported-requests",
      "b1-reporting-verbs",
      "b1-time-place-shifts",
      "b1-contrast-disse-que",
      "b1-dialogue-voicemail",
      "b1-error-hunt-reported",
      "b1-transform-direct-indirect",
      "b1-spiral-reported",
      "b1-reported-extra-1",
      "b1-reported-extra-2",
      "b1-reported-extra-3",
    ],
  },
  {
    slug: "passive-voice-and-se",
    title: "Foi Construído, Está Fechado, Aluga-Se: The Passive",
    description:
      "How Brazilian Portuguese says what is done without saying who does it: the passive with ser and agreement, estar for the resulting state, double participles (pago, entregue), the se of signs and ads, and the spoken alternatives.",
    level: "B1",
    intro: [
      `Portuguese has a passive just like English: "Brasília foi inaugurada em 1960" (Brasília was inaugurated in 1960). The one big difference is agreement: the participle agrees with the subject in gender and number, "a casa foi vendida", "os ingressos foram vendidos".`,
      `But the passive with "ser" is mainly written. In speech Brazilians prefer other ways to leave the doer out: the third-person plural with no subject ("roubaram meu celular", someone stole my phone), "a gente" and "você" as general subjects, and the "se" of signs and ads ("aluga-se"), which in speech often loses its "se" ("aluga apartamento").`,
    ],
    sections: [
      {
        heading: `Ser + participle, and the agent with por`,
        body: [
          `Conjugate "ser" in any tense and add the participle, agreeing with the subject: "foi construído", "foi construída", "foram construídos", "foram construídas". The doer, if mentioned, comes with "por", which contracts with the article: "pelo", "pela", "pelos", "pelas".`,
          `The passive works in every tense: "vai ser reformada" (is going to be renovated), "está sendo construído" (is being built), "tinha sido vendido" (had been sold). It's the language of news, history and reports.`,
        ],
        examples: [
          { pt: "Brasília foi inaugurada em 1960.", en: "Brasília was inaugurated in 1960." },
          { pt: "Os ingressos foram vendidos em duas horas.", en: "The tickets were sold in two hours." },
          { pt: "Dom Casmurro foi escrito por Machado de Assis.", en: "Dom Casmurro was written by Machado de Assis." },
          { pt: "O ladrão foi preso pela polícia ontem à noite.", en: "The thief was arrested by the police last night." },
          { pt: "A ponte vai ser reformada no ano que vem.", en: "The bridge is going to be renovated next year." },
          { pt: "Um novo hospital está sendo construído no bairro.", en: "A new hospital is being built in the neighbourhood." },
        ],
      },
      {
        heading: `Foi fechada or está fechada?`,
        body: [
          `"Ser" + participle describes the action; "estar" + participle describes the state that results from it. "A loja foi fechada às dez" (someone closed it at ten); "a loja está fechada" (it's closed now). English uses is closed for both, so English speakers tend to reach for "é fechada", which means something like is (habitually) closed by someone.`,
        ],
        examples: [
          { pt: "A porta foi fechada pelo segurança.", en: "The door was closed by the security guard." },
          { pt: "A porta está fechada.", en: "The door is closed." },
          { pt: "O jantar já está pronto e a mesa está posta.", en: "Dinner is ready and the table is laid." },
          { pt: "A conta já está paga.", en: "The bill has already been paid." },
        ],
      },
      {
        heading: `Double participles: pago or pagado?`,
        body: [
          `Some verbs have two participles. The rule in grammar books: the regular long form goes with "ter" and "haver" ("tinha aceitado"), the short form with "ser" and "estar" ("foi aceito"). In Brazil the short forms of "pagar", "ganhar" and "gastar" have taken over everywhere: "tenho pago", "tinha ganho" and "já tinha gasto" are normal, and "pagado" sounds old-fashioned.`,
          `For other verbs the split still holds: "foi eleito" but "tinham elegido"; "está aceso" (the light is on) but "tinha acendido"; "foi preso" but "tinha prendido". "Entregue" has nearly replaced "entregado" with every auxiliary.`,
        ],
        table: {
          headers: ["Infinitive", "With ter, haver", "With ser, estar", "Brazilian usage"],
          rows: [
            ["pagar", "pagado", "pago", "pago everywhere"],
            ["ganhar", "ganhado", "ganho", "ganho everywhere"],
            ["gastar", "gastado", "gasto", "gasto everywhere"],
            ["aceitar", "aceitado", "aceito", "both with ter"],
            ["entregar", "entregado", "entregue", "entregue nearly everywhere"],
            ["eleger", "elegido", "eleito", "split kept"],
            ["acender", "acendido", "aceso", "split kept"],
            ["prender", "prendido", "preso", "split kept"],
            ["imprimir", "imprimido", "impresso", "split kept"],
          ],
        },
        examples: [
          { pt: "O prefeito foi eleito com sessenta por cento dos votos.", en: "The mayor was elected with sixty per cent of the vote." },
          { pt: "O pedido já foi entregue.", en: "The order has already been delivered." },
          { pt: "Eu já tinha pago a conta quando eles chegaram.", en: "I'd already paid the bill when they arrived." },
          { pt: "A luz da sala ficou acesa a noite toda.", en: "The living-room light stayed on all night." },
        ],
      },
      {
        heading: `Aluga-se, vende-se, and the spoken alternatives`,
        body: [
          `Signs and ads use "se" + verb: "aluga-se apartamento", "vende-se esta casa", "fala-se inglês". The grammar treats this as a passive, so the verb agrees with a plural noun in careful writing: "vendem-se casas", "alugam-se quartos". With a preposition there is nothing to agree with, so it stays singular: "precisa-se de vendedores". Many Brazilians write "vende-se casas"; the B2 guide on "se" explains the debate.`,
          `Speech drops the "se" or rephrases: "aluga apartamento", "aqui vende pão de queijo", "eles dizem que vai chover", "a gente nunca sabe", "você não pode fumar aqui". Third person plural with no subject is the most common spoken passive of all: "roubaram minha bicicleta", "me disseram que ia ter greve".`,
        ],
        examples: [
          { pt: "Aluga-se apartamento de dois quartos.", en: "Two-bedroom flat to let." },
          { pt: "Vendem-se bicicletas usadas.", en: "Used bicycles for sale." },
          { pt: "Precisa-se de cozinheiro com experiência.", en: "Experienced cook wanted." },
          { pt: "Roubaram o celular dele no ônibus.", en: "His phone got stolen on the bus." },
          { pt: "Aqui na padaria vende bolo de milho.", en: "They sell corn cake here at the bakery. (speech)" },
          { pt: "Dizem que esse restaurante é ótimo.", en: "They say this restaurant is great." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A casa foi vendido.",
        right: "A casa foi vendida.",
        why: `In the passive the participle agrees with the subject: "casa" is feminine.`,
      },
      {
        wrong: "A conta foi pagada.",
        right: "A conta foi paga.",
        why: `With "ser" and "estar" use the short participle; in Brazil "pago" is used with every auxiliary.`,
      },
      {
        wrong: "O livro foi escrito de Machado de Assis.",
        right: "O livro foi escrito por Machado de Assis.",
        why: `The agent takes "por" (or "pelo", "pela"), not "de".`,
      },
      {
        wrong: "O presidente foi elegido em outubro.",
        right: "O presidente foi eleito em outubro.",
        why: `With "ser", the short participle "eleito".`,
      },
      {
        wrong: "A loja é fechada agora.",
        right: "A loja está fechada agora.",
        why: `A present state takes "estar" + participle. "Ser" + participle describes an action.`,
      },
    ],
    faqs: [
      {
        q: `Does the participle agree in "tinha vendido"?`,
        a: `No. With "ter" (and "haver") in compound tenses the participle never changes: "ela tinha vendido a casa". It only agrees with "ser", "estar" and "ficar", and when it's used as an adjective.`,
      },
      {
        q: `Which spoken passive should I use?`,
        a: `For an unknown doer, the plain third person plural: "consertaram a rua". For people in general, "a gente" or "você": "você não pode estacionar aqui". Keep "ser" + participle and "aluga-se" for writing.`,
      },
      {
        q: `What's different in European Portuguese?`,
        a: `European Portuguese keeps the "se" in speech ("vende-se pão", never "vende pão" alone) and makes it agree more consistently. The progressive passive is "estão a ser construídas" where Brazil says "estão sendo construídas".`,
      },
    ],
    related: ["se-passive-and-impersonal-se", "preterito-perfeito-composto", "spoken-brazilian-portuguese", "register-and-the-written-norm"],
    lessons: [
      "b1-ads-and-requests",
      "b1-passive-ser",
      "b1-passive-estar",
      "b1-double-participles",
      "b1-se-passive",
      "b1-impersonal-subjects",
      "b1-contrast-passive-active",
      "b1-dialogue-news",
      "b1-error-hunt-passive",
      "b1-transform-passive",
      "b1-spiral-passive",
      "b1-passive-extra-1",
      "b1-passive-extra-2",
      "b1-passive-extra-3",
      "b1-news-reporting",
    ],
  },
  {
    slug: "connectors-for-writing",
    title: "Além Disso, No Entanto, Portanto: Connectors",
    description:
      "The Brazilian Portuguese connectors that organise a paragraph (adding, contrasting, cause, result, examples, sequence, conclusion), their register, their position, and the mood each one takes.",
    level: "B1",
    intro: [
      `A B1 text is judged less by its vocabulary than by how its ideas connect. The Celpe-Bras and every Brazilian workplace expect writing in which each sentence is linked to the last: "além disso" to add, "no entanto" to contrast, "já que" to give a cause, "portanto" to draw a conclusion.`,
      `Many connectors come in pairs: a spoken one and a written one. "Mas" and "porque" are fine everywhere, but a formal text that uses only them sounds flat; "porém", "no entanto", "visto que" and "portanto" are what readers expect in an email to a client or an essay.`,
    ],
    sections: [
      {
        heading: `A map of connectors`,
        body: [
          `Learn connectors by function. Within each line, the first ones are the most neutral and the later ones more formal. "Inclusive" in Brazil means even, including ("ela fala várias línguas, inclusive russo"), and "aliás" means by the way or actually, correcting or adding.`,
        ],
        table: {
          headers: ["Function", "Connectors", "Example"],
          rows: [
            ["adding", "também, além disso, inclusive, aliás", "Além disso, o aluguel é barato."],
            ["contrasting", "mas, porém, no entanto, contudo, entretanto, mesmo assim", "No entanto, o bairro é longe do centro."],
            ["whereas", "enquanto", "Eu prefiro praia, enquanto ela prefere montanha."],
            ["cause", "porque, já que, visto que, uma vez que, como", "Como estava chovendo, ficamos em casa."],
            ["result", "por isso, portanto, assim, de modo que", "Portanto, a proposta deve ser aprovada."],
            ["example, rephrasing", "por exemplo, ou seja, isto é", "Ou seja, ninguém sabia de nada."],
            ["sequence", "em primeiro lugar, em seguida, depois, por fim", "Em seguida, apresento os resultados."],
            ["conclusion", "enfim, em resumo, em suma", "Em resumo, o projeto foi um sucesso."],
          ],
        },
        examples: [
          { pt: "O apartamento é amplo. Além disso, tem uma vista linda.", en: "The flat is spacious. On top of that, it has a lovely view." },
          { pt: "O curso é caro. No entanto, vale cada centavo.", en: "The course is expensive. However, it's worth every penny." },
          { pt: "Já que você vai ao centro, pode deixar esse documento no cartório?", en: "Since you're going into town, can you drop this document off at the registry office?" },
          { pt: "O trânsito estava parado, por isso cheguei atrasado.", en: "The traffic was at a standstill, so I arrived late." },
          { pt: "Ela fala várias línguas, inclusive japonês.", en: "She speaks several languages, including Japanese." },
        ],
      },
      {
        heading: `Position and punctuation`,
        body: [
          `"Mas" always opens its clause. "Porém", "no entanto", "contudo" and "portanto" are more mobile: at the start of a sentence followed by a comma, or inside the clause between commas: "O projeto, porém, atrasou". "Como" for cause only works at the start of the sentence: "como estava cansado, fui dormir"; at the end use "porque" or "já que".`,
          `Don't join two full sentences with just a comma when a connector or a full stop is needed: "Choveu muito, a festa foi cancelada" reads as a run-on; write "Choveu muito, por isso a festa foi cancelada" or use a full stop.`,
        ],
        examples: [
          { pt: "O projeto, porém, não foi aprovado.", en: "The project, however, was not approved." },
          { pt: "Como era feriado, os bancos estavam fechados.", en: "As it was a holiday, the banks were closed." },
          { pt: "Os bancos estavam fechados porque era feriado.", en: "The banks were closed because it was a holiday." },
          { pt: "Choveu muito. Por isso, a festa foi cancelada.", en: "It rained a lot. So the party was cancelled." },
        ],
      },
      {
        heading: `Mood after connectors`,
        body: [
          `Most connectors introduce facts and take the indicative: "já que", "visto que", "uma vez que", "porque", "como", "portanto", "por isso", "no entanto". Concession with "embora" and purpose with "para que" take the subjunctive. "De modo que" has two meanings: with the indicative it's a result (so, and as a result), with the subjunctive a purpose (so that).`,
        ],
        table: {
          headers: ["Connector", "Mood", "Example"],
          rows: [
            ["já que, visto que, uma vez que", "indicative", "Visto que o prazo acabou, não é possível mudar."],
            ["no entanto, porém, contudo", "indicative", "No entanto, a decisão foi mantida."],
            ["embora", "subjunctive", "Embora o prazo tenha acabado, vamos tentar."],
            ["de modo que (result)", "indicative", "Saí cedo, de modo que cheguei a tempo."],
            ["de modo que (purpose)", "subjunctive", "Fale alto, de modo que todos ouçam."],
          ],
        },
        examples: [
          { pt: "Uma vez que todos concordam, podemos começar.", en: "Since everyone agrees, we can begin." },
          { pt: "O texto é curto, porém muito denso.", en: "The text is short but very dense." },
          { pt: "Organizei as cadeiras de modo que todos possam ver a tela.", en: "I've arranged the chairs so that everyone can see the screen." },
          { pt: "Choveu a semana inteira, de modo que adiamos a viagem.", en: "It rained all week, so we postponed the trip." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mas porém o resultado foi bom.",
        right: "Porém, o resultado foi bom.",
        why: `"Mas" and "porém" mean the same: use one.`,
      },
      {
        wrong: "O hotel é ótimo. Além de que, é barato.",
        right: "O hotel é ótimo. Além disso, é barato.",
        why: `To add a new sentence, use "além disso". "Além de" takes a noun or infinitive: "além de ser ótimo, é barato".`,
      },
      {
        wrong: "No entanto ele seja jovem, é muito experiente.",
        right: "Embora ele seja jovem, é muito experiente.",
        why: `"No entanto" links two sentences and takes the indicative; to concede inside one sentence use "embora" + subjunctive.`,
      },
      {
        wrong: "Fiquei em casa, como estava chovendo.",
        right: "Fiquei em casa porque estava chovendo.",
        why: `Causal "como" only opens the sentence: "Como estava chovendo, fiquei em casa".`,
      },
    ],
    faqs: [
      {
        q: `Is "pois" a good connector to use?`,
        a: `Yes, "pois" (because, for) is common in writing and fine in speech: "não fui, pois estava doente". Placed after the verb between commas it means therefore, a very formal use you'll read rather than write: "é, pois, necessário agir".`,
      },
      {
        q: `"Entretanto" means meanwhile, doesn't it?`,
        a: `In Brazil "entretanto" is a formal however, a synonym of "no entanto". The meaning meanwhile is European; in Brazil say "enquanto isso" or "nesse meio-tempo".`,
      },
      {
        q: `How many connectors should a Celpe-Bras text have?`,
        a: `There's no quota, but every paragraph should show the logic between its sentences. Varied, precise connectors (not "e" and "mas" every time) are part of what examiners call coesão.`,
      },
    ],
    related: ["subjunctive-after-conjunctions", "concession-cause-purpose", "relative-pronouns-in-depth", "register-and-the-written-norm", "argumentative-connectors"],
    lessons: [
      "b1-connectors-adding-contrast",
      "b1-connectors-cause-result",
      "b1-connectors-sequence",
      "b1-paragraph-structure",
      "b1-contrast-mas-porem",
      "b1-error-hunt-connectors",
      "b1-build-up-paragraph",
      "b1-mission-celpe-task",
      "b1-spiral-connectors",
      "b1-connectors-extra-1",
      "b1-connectors-extra-2",
      "b1-connectors-extra-3",
      "b1-hedging",
    ],
  },
  {
    slug: "spoken-brazilian-portuguese",
    title: "Tá, Pra, A Gente, Né: How Brazilians Really Talk",
    description:
      "The features of everyday spoken Brazilian Portuguese: reductions like tá, tô, cê and pra, a gente for we, ele as an object, te with você, fillers like né and tipo, and how far to use them yourself.",
    level: "B1",
    intro: [
      `The Portuguese of textbooks and the Portuguese of a São Paulo bar are the same language, but you'd be forgiven for doubting it. "Cê tá onde? Tô chegando, pera aí" is "Você está onde? Estou chegando, espere aí", said at speed. If you can't hear the reductions, you can't follow real conversations, films or voice messages.`,
      `None of this is slang or bad Portuguese: these are the normal spoken forms of educated Brazilians. The skill is knowing where they belong. Use them in conversation and chat; keep them out of emails to clients, essays and the Celpe-Bras written tasks.`,
    ],
    sections: [
      {
        heading: `Reductions: tá, tô, cê, pra`,
        body: [
          `The forms of "estar" lose their first syllable ("tá", "tô", "tava", "tão"), "você" shrinks to "cê" (and "vocês" to "cês"), and "para" becomes "pra", fused with the article into "pro" and "pra". "Em um" and "de um" become "num" and "dum". "Não é?" becomes "né?".`,
          `In messages, people write many of these as they say them, plus abbreviations: "vc", "pq" (porque), "tb" (também), "blz" (beleza), "kkkk" (laughter). "Pra" is also accepted in informal writing, and "num" is standard Portuguese, so it can be written anywhere.`,
        ],
        table: {
          headers: ["Written", "Spoken", "Example"],
          rows: [
            ["está, estou, estava", "tá, tô, tava", "Tô cansado. Cê tá bem?"],
            ["você, vocês", "cê, cês", "Cês vão na festa?"],
            ["para, para o, para a", "pra, pro, pra", "Vou pro trabalho."],
            ["não é?", "né?", "Tá quente hoje, né?"],
            ["em um, em uma", "num, numa", "Moro num prédio antigo."],
            ["espere aí", "pera aí, pera", "Pera aí, já volto."],
          ],
        },
        examples: [
          { pt: "Cê tá onde? Tô te esperando há meia hora.", en: "Where are you? I've been waiting for you for half an hour." },
          { pt: "Tava pensando em ir pra praia amanhã.", en: "I was thinking of going to the beach tomorrow." },
          { pt: "Vou levar as crianças pro parque.", en: "I'm going to take the kids to the park." },
          { pt: "Ela mora num apartamento pequenininho.", en: "She lives in a tiny flat." },
          { pt: "Tá tudo bem? Tá, sim.", en: "Is everything OK? Yes, it is." },
        ],
      },
      {
        heading: `The spoken pronoun system`,
        body: [
          `"A gente" (literally the people) is the normal spoken we, used by everyone, with the third-person singular verb: "a gente vai", "a gente se vê". "A gente vamos" is heavily stigmatised. In formal writing switch to "nós".`,
          `As an object, speech uses "ele" and "ela" instead of "o" and "a": "eu vi ele ontem" (writing: "eu o vi ontem"). "Te" is the object pronoun for "você" in speech: "eu te ligo", "te amo", "te vejo amanhã". Mixing "você" and "te" in one sentence is normal in Brazil, though the written norm would say "eu lhe ligo" or "eu ligo para você".`,
        ],
        examples: [
          { pt: "A gente se fala depois.", en: "We'll talk later." },
          { pt: "A gente foi ao cinema e depois jantou fora.", en: "We went to the cinema and then had dinner out." },
          { pt: "Encontrei ela no shopping.", en: "I ran into her at the shopping centre. (speech)" },
          { pt: "Te mando o endereço por mensagem.", en: "I'll send you the address by message." },
          { pt: "Você sabe que eu te adoro, né?", en: "You know I adore you, right?" },
        ],
      },
      {
        heading: `Fillers, tags and everyday slang`,
        body: [
          `"Né?" (right?) ends half the statements in Brazil and invites agreement. "Tipo" works like English like: "tipo, ele nem me respondeu". "Aí" and "então" move a story on (and then, so). "Sabe?" and "entendeu?" check the listener is following; "olha" announces what comes next.`,
          `Everyday slang is mostly neutral and safe: "legal", "bacana" and "show" (great), "beleza" (fine, OK), "valeu" (thanks, cheers), "de boa" (chilled, fine), "nossa!" (wow), "caramba!". "Cara" (mate, dude) is very casual. Regional words ("mano" in São Paulo, "massa" in the Nordeste, "bah" in the South, "uai" in Minas) are fun to recognise but sound odd from a foreigner who overuses them.`,
        ],
        examples: [
          { pt: "O show foi incrível, né?", en: "The concert was amazing, wasn't it?" },
          { pt: "Aí ele chegou e, tipo, nem falou com ninguém.", en: "Then he turned up and, like, didn't even speak to anyone." },
          { pt: "Beleza, então a gente se encontra às oito.", en: "OK, so we'll meet at eight." },
          { pt: "Valeu pela ajuda, cara!", en: "Thanks for the help, mate!" },
          { pt: "Nossa, que calor!", en: "Wow, it's so hot!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A gente vamos sair mais tarde.",
        right: "A gente vai sair mais tarde.",
        why: `"A gente" takes the third-person singular, like "ele". With the "-mos" ending, use "nós".`,
      },
      {
        wrong: "Prezado senhor, tô te escrevendo pra pedir uma informação.",
        right: "Prezado senhor, estou escrevendo para solicitar uma informação.",
        why: `"Tô", "te" and "pra" are spoken forms: keep them out of formal emails.`,
      },
      {
        wrong: "Oi, pessoal! Prezados membros do grupo, gostaria de convidá-los para um churrasco.",
        right: "Oi, pessoal! Bora fazer um churrasco no sábado?",
        why: `The opposite trap: formal language in a friends' group chat sounds stiff or ironic.`,
      },
      {
        wrong: "Conforme combinado, envio o contrato e peço que o senhor assine ele.",
        right: "Conforme combinado, envio o contrato e peço que o senhor o assine.",
        why: `In formal writing the object pronoun is "o" or "a", not "ele" or "ela".`,
      },
    ],
    faqs: [
      {
        q: `Should I speak like this?`,
        a: `Use the mainstream features: "a gente", "pra", "tá" and "né" are what everyone says, and avoiding them makes you sound like a book. Be more careful with slang and regional words; they depend on the person, the city and your relationship.`,
      },
      {
        q: `What is "tu vai"?`,
        a: `In parts of the South, the North and the Nordeste people say "tu" with the "você" form of the verb: "tu vai", "tu quer". It's normal regional speech, but this course uses "você"; recognise it rather than copy it. The B2 guide on regional variation goes further.`,
      },
      {
        q: `Does European Portuguese reduce words the same way?`,
        a: `It reduces differently: unstressed vowels almost disappear ("telefone" sounds like 'tlfon'), while forms like "cê" and "né" are typically Brazilian. In Portugal the everyday informal you is "tu" with its own verb ("tu vais"), and "a gente" exists but is less frequent than in Brazil.`,
      },
    ],
    related: ["regional-variation-in-brazil", "register-and-the-written-norm", "passive-voice-and-se", "personal-infinitive", "object-pronouns-brazil"],
    lessons: [
      "b1-register-switch",
      "b1-spoken-reductions",
      "b1-fillers",
      "b1-slang-basics",
      "b1-regional-brazil",
      "b1-tu-in-brazil",
      "b1-dialogue-whatsapp",
      "b1-error-hunt-register",
      "b1-transform-register",
      "b1-mission-chat",
      "b1-spiral-spoken",
      "b1-spoken-extra-1",
      "b1-spoken-extra-2",
      "b1-spoken-extra-3",
    ],
  },
];
