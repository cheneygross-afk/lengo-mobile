// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-guides-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { PtGrammarGuide } from "./pt-types";

// Brazilian Portuguese grammar guides, B2 (see the notes at the top of ./pt-types.ts).
export const PT_B2_GUIDES: PtGrammarGuide[] = [
  {
    slug: "imperfect-subjunctive",
    title: "The Imperfect Subjunctive: Queria Que Você Viesse",
    description:
      "How to form the Brazilian Portuguese imperfect subjunctive from the eles form of the perfeito (fizeram, fizesse; foram, fosse), the accent in -ássemos, and its uses after past triggers, in polite wishes and with quem dera.",
    level: "B2",
    intro: [
      `The imperfect subjunctive is the subjunctive's past form: "eu queria que você viesse" (I wanted you to come), "ela pediu que a gente esperasse" (she asked us to wait), "embora fosse tarde, saímos" (although it was late, we went out). Every trigger you learned with the present subjunctive at B1 also works here, once the main verb moves into the past.`,
      `It is also the subjunctive of imagined situations: "se eu tivesse tempo" (if I had time), "como se nada fosse" (as if nothing were wrong). English often uses its simple past for this (if I had), which is why English speakers tend to write "se eu tinha" instead of "se eu tivesse".`,
    ],
    sections: [
      {
        heading: `Forms: the eles perfeito minus -ram, plus -sse`,
        body: [
          `Take the eles form of the pretérito perfeito, drop "-ram" and add "-sse", "-ssemos", "-ssem". This works for every verb in the language, regular or irregular: "falaram" gives "falasse", "comeram" gives "comesse", "abriram" gives "abrisse". If you know the perfeito, there is nothing new to memorize.`,
          `The nós form takes a written accent on the vowel before "-ssemos", because the stress falls there: "falássemos", "comêssemos", "abríssemos", "fôssemos", "tivéssemos". Leaving it out is a frequent spelling mistake, even among Brazilians.`,
        ],
        table: {
          headers: ["", "falar", "comer", "abrir"],
          rows: [
            ["eles (perfeito)", "falaram", "comeram", "abriram"],
            ["eu, você, ele, ela, a gente", "falasse", "comesse", "abrisse"],
            ["nós", "falássemos", "comêssemos", "abríssemos"],
            ["vocês, eles, elas", "falassem", "comessem", "abrissem"],
          ],
        },
        examples: [
          { pt: "Eu queria que você falasse com ela.", en: "I wanted you to talk to her." },
          { pt: "Minha avó pedia que a gente comesse tudo.", en: "My grandmother used to ask us to eat everything." },
          { pt: "O guia pediu que nós chegássemos às sete.", en: "The guide asked us to arrive at seven." },
          { pt: "Era importante que eles abrissem a loja cedo.", en: "It was important for them to open the store early." },
        ],
      },
      {
        heading: `The irregular stems`,
        body: [
          `Irregular perfeitos give irregular stems, and the same rule applies: "fizeram" gives "fizesse", "tiveram" gives "tivesse", "puderam" gives "pudesse". "Ser" and "ir" share "fosse", just as they share "foram"; context tells you which.`,
          `"Ver" (viram) gives "visse" and "vir" (vieram) gives "viesse": keep them apart. "Dar" gives "desse", "haver" gives "houvesse" (used for there were: "se houvesse mais tempo").`,
        ],
        table: {
          headers: ["Infinitive", "eles (perfeito)", "Imperfect subjunctive", "nós"],
          rows: [
            ["ser, ir", "foram", "fosse", "fôssemos"],
            ["ter", "tiveram", "tivesse", "tivéssemos"],
            ["estar", "estiveram", "estivesse", "estivéssemos"],
            ["fazer", "fizeram", "fizesse", "fizéssemos"],
            ["poder", "puderam", "pudesse", "pudéssemos"],
            ["dizer", "disseram", "dissesse", "disséssemos"],
            ["vir", "vieram", "viesse", "viéssemos"],
            ["ver", "viram", "visse", "víssemos"],
            ["saber", "souberam", "soubesse", "soubéssemos"],
            ["querer", "quiseram", "quisesse", "quiséssemos"],
            ["trazer", "trouxeram", "trouxesse", "trouxéssemos"],
            ["pôr", "puseram", "pusesse", "puséssemos"],
            ["dar", "deram", "desse", "déssemos"],
            ["haver", "houveram", "houvesse", "houvéssemos"],
          ],
        },
        examples: [
          { pt: "Meus pais queriam que eu fosse médico.", en: "My parents wanted me to be a doctor." },
          { pt: "Ela pediu que eu trouxesse uma garrafa de vinho.", en: "She asked me to bring a bottle of wine." },
          { pt: "Não achei que eles pudessem vir.", en: "I didn't think they could come." },
          { pt: "Duvidava que alguém soubesse a resposta.", en: "I doubted anyone knew the answer." },
          { pt: "Se a gente tivesse mais dinheiro, viajaria mais.", en: "If we had more money, we'd travel more." },
        ],
      },
      {
        heading: `Where it's used`,
        body: [
          `After the same triggers as the present subjunctive, when the main verb is in a past tense or the conditional: "pedi que", "queria que", "era importante que", "duvidei que", "fiquei feliz que", and after conjunctions in the past: "para que", "embora", "antes que", "sem que", "caso". Without a trigger of its own it appears after "se" in unreal conditions and after "como se" (as if).`,
          `Polite and wistful wishes use it too. "Eu queria que" and "eu gostaria que" soften requests about the present: "eu queria que você me ajudasse com isso". "Quem dera" expresses an unlikely or impossible wish: "quem dera eu pudesse ficar mais". Compare "tomara que" + present subjunctive, which hopes for something possible: "tomara que dê certo".`,
        ],
        examples: [
          { pt: "Embora estivesse cansada, ela foi à festa.", en: "Although she was tired, she went to the party." },
          { pt: "Saímos cedo para que as crianças não perdessem a escola.", en: "We left early so the children wouldn't miss school." },
          { pt: "Ele fala como se soubesse tudo.", en: "He talks as if he knew everything." },
          { pt: "Eu gostaria que vocês pensassem com calma.", en: "I'd like you to think it over calmly." },
          { pt: "Quem dera eu tivesse férias agora!", en: "If only I were on vacation now!" },
          { pt: "Seria bom se o governo investisse mais em transporte.", en: "It would be good if the government invested more in public transportation." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu queria que você vem comigo.",
        right: "Eu queria que você viesse comigo.",
        why: `After "queria que" with a new subject, the imperfect subjunctive.`,
      },
      {
        wrong: "Se eu fazesse isso, ela ficaria brava.",
        right: "Se eu fizesse isso, ela ficaria brava.",
        why: `The stem comes from the perfeito "fizeram", not from the infinitive.`,
      },
      {
        wrong: "Se nós fossemos mais organizados...",
        right: "Se nós fôssemos mais organizados...",
        why: `The nós form carries a written accent: "fôssemos", "tivéssemos", "falássemos".`,
      },
      {
        wrong: "Eu queria que eu fosse mais alto.",
        right: "Eu queria ser mais alto.",
        why: `Same subject: use the infinitive, as with the present subjunctive.`,
      },
      {
        wrong: "Se eu tinha tempo, eu aprenderia piano.",
        right: "Se eu tivesse tempo, eu aprenderia piano.",
        why: `An imagined condition takes "se" + imperfect subjunctive. English if I had misleads you into the imperfeito.`,
      },
    ],
    faqs: [
      {
        q: `Is it used in everyday speech?`,
        a: `Yes, all the time: "se eu fosse você", "queria que você viesse", "como se fosse fácil", "quem dera". Speech simplifies the main clause of conditions ("se eu tivesse carro, eu ia te buscar") but keeps the imperfect subjunctive after "se".`,
      },
      {
        q: `What is the "-ra" form I see in books?`,
        a: `In older and literary texts the simple mais-que-perfeito ("fizera", "dissera") sometimes replaces the conditional or the imperfect subjunctive: "se eu pudera" for "se eu pudesse". It survives in fixed phrases ("quem dera", "pudera") and is for recognition only.`,
      },
      {
        q: `Is it the same in European Portuguese?`,
        a: `The forms and uses are identical. Spoken European Portuguese uses the tu form more ("se tu quisesses") and the imperfeito in the main clause even more readily: "se eu tivesse tempo, ia contigo".`,
      },
    ],
    related: ["sequence-of-tenses", "conditional-sentences", "compound-subjunctive-tenses", "present-subjunctive", "conditional-tense"],
    lessons: [
      "b2-imperfect-subjunctive-1",
      "b2-imperfect-subjunctive-2",
      "b2-imperfect-subj-drill",
      "b2-polite-wishes",
      "b2-dialogue-family-expectations",
      "b2-error-hunt-imperfect-subj",
      "b2-imperfect-subj-extra-1",
      "b2-imperfect-subj-extra-2",
      "b2-unreal-conditions-1",
      "b2-como-se",
    ],
  },
  {
    slug: "sequence-of-tenses",
    title: "Quero Que Venha, Queria Que Viesse: Sequence of Tenses",
    description:
      "How the tense of the main verb decides the tense of the subjunctive in Brazilian Portuguese: present with present, past with past, the compound forms for earlier actions, and when a request can keep the present.",
    level: "B2",
    intro: [
      `Once you know three subjunctives, you need a rule for choosing between them. The main one is the sequence of tenses (correlação dos tempos verbais): a main verb in the present or future pairs with the present subjunctive, and a main verb in a past tense or the conditional pairs with the imperfect subjunctive. "Quero que você venha"; "queria que você viesse".`,
      `The second axis is time inside the subordinate clause. If its action comes before the main verb's, use the compound form: "espero que você tenha gostado" (I hope you liked it), "não acreditei que ele tivesse dito isso" (I didn't believe he'd said that).`,
    ],
    sections: [
      {
        heading: `The basic pairs`,
        body: [
          `Look at the main verb first. Present, future, imperative, "vou" + infinitive: present subjunctive. Perfeito, imperfeito, mais-que-perfeito, conditional: imperfect subjunctive. The trigger itself doesn't change, only its tense: "é importante que" becomes "era importante que", "peço que" becomes "pedi que", "para que você entenda" becomes "para que você entendesse".`,
          `The future subjunctive stays outside this system. It follows "quando", "se" and similar words when the event is in the future, whatever the main verb: "quando você chegar, me liga".`,
        ],
        table: {
          headers: ["Main verb", "Subordinate verb", "Example"],
          rows: [
            ["present", "present subjunctive", "Quero que você venha."],
            ["future, vou + infinitive", "present subjunctive", "Vou pedir que ele ligue."],
            ["imperative", "present subjunctive", "Fale devagar para que todos entendam."],
            ["perfeito", "imperfect subjunctive", "Pedi que ele ligasse."],
            ["imperfeito", "imperfect subjunctive", "Queria que você viesse."],
            ["conditional", "imperfect subjunctive", "Gostaria que vocês soubessem."],
          ],
        },
        examples: [
          { pt: "É importante que você saiba disso.", en: "It's important that you know about this." },
          { pt: "Era importante que você soubesse disso.", en: "It was important that you knew about this." },
          { pt: "Espero que ela venha à festa.", en: "I hope she comes to the party." },
          { pt: "Eu esperava que ela viesse à festa.", en: "I was hoping she'd come to the party." },
          { pt: "O médico vai pedir que você faça uns exames.", en: "The doctor is going to ask you to have some tests." },
          { pt: "O médico pediu que eu fizesse uns exames.", en: "The doctor asked me to have some tests." },
        ],
      },
      {
        heading: `Earlier actions: tenha feito, tivesse feito`,
        body: [
          `When the subordinate action is already finished at the time of the main verb, use "ter" in the subjunctive + participle. Present main verb: "tenha" + participle ("espero que você tenha chegado bem", I hope you got there safely). Past main verb: "tivesse" + participle ("esperava que você tivesse chegado bem"). English uses a simple past or present perfect here, so learners often write "espero que você chegou", which is wrong.`,
        ],
        table: {
          headers: ["", "Same time or later", "Earlier"],
          rows: [
            ["present main verb", "Duvido que ele saiba.", "Duvido que ele tenha sabido."],
            ["past main verb", "Duvidei que ele soubesse.", "Duvidei que ele tivesse sabido."],
            ["present main verb", "Que bom que você esteja aqui!", "Que bom que você tenha vindo!"],
            ["past main verb", "Fiquei feliz que você estivesse lá.", "Fiquei feliz que você tivesse vindo."],
          ],
        },
        examples: [
          { pt: "Espero que vocês tenham gostado do jantar.", en: "I hope you enjoyed dinner." },
          { pt: "Não acredito que ele tenha dito isso.", en: "I can't believe he said that." },
          { pt: "Não acreditei que ele tivesse dito isso.", en: "I couldn't believe he'd said that." },
          { pt: "Embora tenha chovido muito, a festa foi um sucesso.", en: "Although it rained a lot, the party was a success." },
        ],
      },
      {
        heading: `When the present survives after a past verb`,
        body: [
          `A past main verb can take the present subjunctive when the content is still valid now. A request made yesterday for something still to be done: "ela pediu que você ligue amanhã" (and she still wants it). A recommendation that still applies: "o médico recomendou que ele evite sal" (and he still should). This is normal in Brazil, but if the action is over or the request no longer stands, the imperfect is required: "ela pediu que eu ligasse e eu liguei".`,
          `In speech, people often soften the whole system with "pedir para" + infinitive, which has no tense to match: "ela pediu pra eu ligar" works for any time.`,
        ],
        examples: [
          { pt: "O chefe pediu que todos cheguem cedo amanhã.", en: "The boss has asked everyone to arrive early tomorrow." },
          { pt: "O chefe pediu que todos chegassem cedo, e ninguém chegou.", en: "The boss asked everyone to arrive early, and nobody did." },
          { pt: "Ela pediu pra gente levar sobremesa.", en: "She asked us to bring dessert." },
          { pt: "A escola recomendou que os pais conversem com os filhos.", en: "The school has recommended that parents talk to their children." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Queria que você venha comigo.",
        right: "Queria que você viesse comigo.",
        why: `A past main verb pairs with the imperfect subjunctive.`,
      },
      {
        wrong: "Era importante que vocês saibam a verdade.",
        right: "Era importante que vocês soubessem a verdade.",
        why: `"Era" is past: the subjunctive follows it into the past.`,
      },
      {
        wrong: "Espero que você gostou do presente.",
        right: "Espero que você tenha gostado do presente.",
        why: `"Espero que" always takes the subjunctive; for an action already done, "tenha" + participle.`,
      },
      {
        wrong: "Ontem ela pediu que eu faça o relatório, e eu fiz.",
        right: "Ontem ela pediu que eu fizesse o relatório, e eu fiz.",
        why: `The request belongs to the past and is done: imperfect subjunctive.`,
      },
      {
        wrong: "Gostaria que você me ajude.",
        right: "Gostaria que você me ajudasse.",
        why: `The conditional counts as a past form for the sequence of tenses.`,
      },
    ],
    faqs: [
      {
        q: `Do Brazilians really follow these rules in speech?`,
        a: `Mostly, yes, especially with "queria que" and "era importante que". Mismatches like "queria que você vem" sound clearly foreign. The one widespread relaxation is the present after a past verb when the content still holds, and that is accepted in writing too.`,
      },
      {
        q: `Does the sequence apply to reported requests?`,
        a: `Yes. "Ela disse: me liga" is reported as "ela pediu que eu ligasse" (or "pra eu ligar"). It's the same shift as the indicative tenses in reported speech.`,
      },
    ],
    related: ["imperfect-subjunctive", "compound-subjunctive-tenses", "future-subjunctive", "reported-speech", "present-subjunctive"],
    lessons: [
      "b2-sequence-of-tenses",
      "b2-contrast-venha-viesse",
      "b2-transform-present-past-subj",
      "b2-spiral-imperfect-subj",
      "b2-imperfect-subj-extra-3",
      "b2-perfect-subjunctive",
      "b2-contrast-tenha-tivesse",
      "b2-review-subjunctives",
    ],
  },
  {
    slug: "future-subjunctive",
    title: "Quando Eu For, Se Você Puder: The Future Subjunctive",
    description:
      "The Portuguese tense English doesn't have: how to form the future subjunctive (for, tiver, fizer, puder, vier), when it follows quando, se, assim que, enquanto and open relatives like quem quiser, and the ver/vir trap.",
    level: "B2",
    intro: [
      `Portuguese has a whole tense for future events after words like when and if: "quando eu for ao Rio" (when I go to Rio), "se você puder, me liga" (if you can, call me), "assim que ele chegar, a gente sai" (as soon as he arrives, we'll leave). English uses its present tense here; Portuguese uses the futuro do subjuntivo, and Brazilians use it constantly, in speech as much as in writing.`,
      `For regular verbs it looks just like the infinitive ("quando eu chegar"), so many learners use it without noticing. The challenge is the irregular verbs, where "quando eu fazer" must become "quando eu fizer".`,
    ],
    sections: [
      {
        heading: `Forms: the eles perfeito minus -am`,
        body: [
          `Take the eles form of the perfeito and drop "-am": "falaram" gives "falar", "fizeram" gives "fizer", "foram" gives "for". Then add nothing for eu and você, "-mos" for nós and "-em" for vocês. For regular verbs the result looks like the personal infinitive; for irregular verbs it doesn't.`,
          `The famous trap: "ver" (viram) gives "vir", and "vir" (vieram) gives "vier". So "quando eu vir o João" means when I see João, and "quando o João vier" means when João comes. Many Brazilians say "quando eu ver" in casual speech, but it is marked as wrong.`,
        ],
        table: {
          headers: ["Infinitive", "eles (perfeito)", "eu, você", "nós", "vocês"],
          rows: [
            ["falar", "falaram", "falar", "falarmos", "falarem"],
            ["ser, ir", "foram", "for", "formos", "forem"],
            ["ter", "tiveram", "tiver", "tivermos", "tiverem"],
            ["estar", "estiveram", "estiver", "estivermos", "estiverem"],
            ["fazer", "fizeram", "fizer", "fizermos", "fizerem"],
            ["poder", "puderam", "puder", "pudermos", "puderem"],
            ["querer", "quiseram", "quiser", "quisermos", "quiserem"],
            ["vir", "vieram", "vier", "viermos", "vierem"],
            ["ver", "viram", "vir", "virmos", "virem"],
            ["saber", "souberam", "souber", "soubermos", "souberem"],
            ["dizer", "disseram", "disser", "dissermos", "disserem"],
            ["dar", "deram", "der", "dermos", "derem"],
            ["trazer", "trouxeram", "trouxer", "trouxermos", "trouxerem"],
            ["pôr", "puseram", "puser", "pusermos", "puserem"],
          ],
        },
        examples: [
          { pt: "Quando eu chegar em casa, te mando uma mensagem.", en: "When I get home, I'll send you a message." },
          { pt: "Se você tiver tempo, passa aqui.", en: "If you have time, drop by." },
          { pt: "Quando vocês forem a Salvador, provem o acarajé.", en: "When you go to Salvador, try acarajé." },
          { pt: "Se der, a gente se encontra no fim de semana.", en: "If it works out, we'll meet up on the weekend." },
          { pt: "Quando eu vir a Ana, vou dar o recado.", en: "When I see Ana, I'll pass the message on." },
          { pt: "Quando a Ana vier, a gente janta.", en: "When Ana comes, we'll have dinner." },
        ],
      },
      {
        heading: `After quando, se, assim que, enquanto`,
        body: [
          `Use it after time and condition words when the event is in the future: "quando", "se", "assim que" and "logo que" (as soon as), "depois que", "enquanto" (as long as, while), "sempre que" (whenever), "conforme" and "como" (as, however). The main clause is in the present, the future ("vou" + infinitive) or the imperative.`,
          `For habits and general truths, use the present indicative instead: "quando chego em casa, tomo banho" (whenever I get home, every day) versus "quando eu chegar em casa, vou tomar banho" (today). The same contrast works with "se": "se chove, a rua alaga" (it always floods) versus "se chover amanhã, a gente fica em casa".`,
        ],
        examples: [
          { pt: "Assim que eu souber o resultado, te aviso.", en: "As soon as I know the result, I'll let you know." },
          { pt: "Enquanto você estiver aqui, fica à vontade.", en: "While you're here, make yourself at home." },
          { pt: "Sempre que puder, me liga.", en: "Call me whenever you can." },
          { pt: "Depois que vocês terminarem, podem ir embora.", en: "After you've finished, you can go." },
          { pt: "Quando chego do trabalho, sempre tomo um café.", en: "When I get back from work, I always have a coffee." },
          { pt: "Se chover, o show vai ser adiado.", en: "If it rains, the concert will be postponed." },
        ],
      },
      {
        heading: `Open relatives: quem quiser, o que você precisar`,
        body: [
          `The future subjunctive also follows "quem", "o que", "onde", "como" and "quanto" when they refer to an open, future set: whoever, whatever, wherever, however. "Quem quiser pode vir" (whoever wants to can come), "faça como preferir" (do it however you prefer), "pode pedir o que você quiser".`,
          `These are very common in hospitality and service language: "fica à vontade para fazer o que quiser", "qualquer coisa que você precisar, é só falar". In formal notices they appear as "os interessados que quiserem participar...".`,
        ],
        examples: [
          { pt: "Quem chegar primeiro guarda os lugares.", en: "Whoever gets there first saves the seats." },
          { pt: "Pode pedir o que você quiser, eu pago.", en: "Order whatever you like, I'm paying." },
          { pt: "Onde você estiver, eu vou te encontrar.", en: "Wherever you are, I'll find you." },
          { pt: "Faça como achar melhor.", en: "Do it however you think best." },
          { pt: "Leve quantos livros você quiser.", en: "Take as many books as you want." },
        ],
      },
      {
        heading: `Future subjunctive or personal infinitive?`,
        body: [
          `For regular verbs the two look identical: "quando chegarmos" (future subjunctive) and "ao chegarmos" (personal infinitive) differ only in the word before. With irregular verbs the forms split, and the word before tells you which one you need: conjunctions ("quando", "se", "assim que", "depois que") take the future subjunctive; prepositions ("para", "depois de", "antes de", "ao") take the infinitive.`,
        ],
        table: {
          headers: ["After a conjunction: future subjunctive", "After a preposition: personal infinitive"],
          rows: [
            ["depois que nós fizermos", "depois de nós fazermos"],
            ["quando eles vierem", "para eles virem"],
            ["se você puder", "para você poder"],
            ["quando eu vir o filme", "antes de eu ver o filme"],
            ["assim que vocês souberem", "até vocês saberem"],
          ],
        },
        examples: [
          { pt: "Depois que a gente fizer as compras, vamos almoçar.", en: "After we've done the shopping, we'll have lunch." },
          { pt: "Depois de fazer as compras, vamos almoçar.", en: "After doing the shopping, we'll have lunch." },
          { pt: "Vou deixar a chave com o porteiro para vocês poderem entrar.", en: "I'll leave the key with the doorman so you can get in." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quando eu vou ao Rio, vou te visitar.",
        right: "Quando eu for ao Rio, vou te visitar.",
        why: `A future event after "quando" takes the future subjunctive, not the present.`,
      },
      {
        wrong: "Se você pode amanhã, me liga.",
        right: "Se você puder amanhã, me liga.",
        why: `A real future condition after "se" takes the future subjunctive.`,
      },
      {
        wrong: "Quando eu fazer o jantar, te chamo.",
        right: "Quando eu fizer o jantar, te chamo.",
        why: `The future subjunctive of "fazer" is "fizer", from the perfeito "fizeram".`,
      },
      {
        wrong: "Assim que ele chega, a gente sai.",
        right: "Assim que ele chegar, a gente sai.",
        why: `For one future event, the future subjunctive. "Chega" would mean every time he arrives.`,
      },
      {
        wrong: "Quando eu ver a Beatriz, vou falar com ela.",
        right: "Quando eu vir a Beatriz, vou falar com ela.",
        why: `The future subjunctive of "ver" is "vir". Common in casual speech, but marked as wrong.`,
      },
    ],
    faqs: [
      {
        q: `Is the future subjunctive formal?`,
        a: `Not at all. "Se você quiser", "quando der", "o que você precisar" and "se Deus quiser" are everyday Brazilian Portuguese. It's one of the clearest marks of fluent speech for a learner.`,
      },
      {
        q: `"Se você quer" or "se você quiser"?`,
        a: `Both exist with different meanings. "Se você quer ir, vai" treats the wish as a present fact (if you want to go, as you say you do). "Se você quiser, a gente vai" leaves it open for the future. In offers and suggestions, "se você quiser" is the polite default.`,
      },
      {
        q: `Does European Portuguese use it too?`,
        a: `Exactly the same way; it's a shared feature of both varieties. Only the pronoun habits differ: "quando o vir" (European, and formal Brazilian) versus "quando eu vir ele" (Brazilian speech).`,
      },
    ],
    related: ["conditional-sentences", "sequence-of-tenses", "personal-infinitive", "present-subjunctive", "compound-subjunctive-tenses"],
    lessons: [
      "b2-future-subjunctive-1",
      "b2-future-subjunctive-2",
      "b2-future-subj-conjunctions",
      "b2-future-subj-relatives",
      "b2-se-future-subj",
      "b2-contrast-ver-vir",
      "b2-dialogue-arrangements",
      "b2-error-hunt-future-subj",
      "b2-transform-indicative-future-subj",
      "b2-spiral-future-subj",
      "b2-future-subj-extra-1",
      "b2-future-subj-extra-2",
      "b2-future-subj-extra-3",
    ],
  },
  {
    slug: "compound-subjunctive-tenses",
    title: "Tenha Feito, Tivesse Feito, Teria Feito: Compound Tenses",
    description:
      "The Brazilian Portuguese compound subjunctive and conditional tenses: the perfect subjunctive (espero que tenha gostado), the pluperfect subjunctive (se eu tivesse sabido), the conditional perfect (eu teria ido) and how to express regrets and reproaches.",
    level: "B2",
    intro: [
      `With "ter" in the right form and a participle, Portuguese can talk about past possibilities, regrets and things that didn't happen: "espero que você tenha chegado bem" (I hope you got there safely), "se eu tivesse sabido, teria vindo" (if I had known, I would have come), "você devia ter me avisado" (you should have told me).`,
      `Each compound tense is just "ter" in a tense you already know + the participle. The hard part is choosing, and resisting English, which uses had and would have in ways Portuguese doesn't always mirror.`,
    ],
    sections: [
      {
        heading: `The four compound forms`,
        body: [
          `Perfect subjunctive: "tenha" + participle, for a finished action seen from the present ("espero que tenha dado certo"). Pluperfect subjunctive: "tivesse" + participle, for a finished action seen from the past or for an unreal past ("se eu tivesse estudado"). Conditional perfect: "teria" + participle, would have ("eu teria ido"). Future perfect subjunctive: "tiver" + participle, will have done, after "quando" and "se", mostly in writing ("quando você tiver terminado").`,
        ],
        table: {
          headers: ["Tense", "Form", "Example"],
          rows: [
            ["perfect subjunctive", "tenha + participle", "Espero que você tenha gostado."],
            ["pluperfect subjunctive", "tivesse + participle", "Se eu tivesse sabido, teria vindo."],
            ["conditional perfect", "teria + participle", "Eu teria ligado antes."],
            ["future perfect subjunctive", "tiver + participle", "Quando você tiver terminado, me avisa."],
          ],
        },
        examples: [
          { pt: "Espero que você tenha chegado bem.", en: "I hope you got there safely." },
          { pt: "Embora ele tenha estudado muito, não passou.", en: "Although he studied hard, he didn't pass." },
          { pt: "Ela falou como se nada tivesse acontecido.", en: "She spoke as if nothing had happened." },
          { pt: "Você teria gostado do show.", en: "You would have enjoyed the concert." },
          { pt: "Quando vocês tiverem lido o contrato, a gente conversa.", en: "Once you've read the contract, we'll talk." },
        ],
      },
      {
        heading: `If I had known: past unreal conditions`,
        body: [
          `For a past that didn't happen, pair "se" + pluperfect subjunctive with the conditional perfect: "se a gente tivesse saído mais cedo, não teria perdido o voo". In speech, the main clause usually becomes "tinha" + participle: "se eu soubesse, eu tinha ido" or "se eu tivesse sabido, eu tinha ido". Both are standard spoken Brazilian.`,
          `Mixed conditions combine a past condition with a present result, or the reverse: "se eu tivesse aceitado aquele emprego, hoje moraria em Lisboa"; "se eu fosse mais organizado, não teria perdido o prazo".`,
        ],
        examples: [
          { pt: "Se eu tivesse estudado mais, teria passado na prova.", en: "If I'd studied more, I would have passed the exam." },
          { pt: "Se a gente tivesse saído mais cedo, não tinha perdido o voo.", en: "If we'd left earlier, we wouldn't have missed the flight. (speech)" },
          { pt: "Se você tivesse me avisado, eu teria ido te buscar.", en: "If you'd told me, I would have gone to pick you up." },
          { pt: "Se eu tivesse aceitado a proposta, hoje estaria morando em Recife.", en: "If I'd accepted the offer, I'd be living in Recife now." },
          { pt: "Se ela fosse mais paciente, não teria brigado com o chefe.", en: "If she were more patient, she wouldn't have argued with her boss." },
        ],
      },
      {
        heading: `Regrets and reproaches`,
        body: [
          `For should have and could have, Portuguese puts the modal in the past or conditional and uses "ter" + participle after it: "eu devia ter estudado" or "eu deveria ter estudado" (I should have studied), "você podia ter avisado" (you could have warned me). The modal changes, not "ter": never "devia tinha".`,
          `Other regret frames: "quem me dera ter..." (I wish I had...), "se pelo menos eu tivesse..." (if only I had...), "não devia ter falado aquilo" (I shouldn't have said that). In the news, "teria" + participle reports unconfirmed claims: "o suspeito teria fugido pela janela" (the suspect allegedly escaped through the window).`,
        ],
        examples: [
          { pt: "Eu devia ter saído mais cedo.", en: "I should have left earlier." },
          { pt: "Você podia ter me avisado!", en: "You could have told me!" },
          { pt: "A gente não deveria ter comprado tanta coisa.", en: "We shouldn't have bought so much." },
          { pt: "Se pelo menos eu tivesse guardado o recibo...", en: "If only I'd kept the receipt..." },
          { pt: "Segundo a polícia, o motorista teria avançado o sinal.", en: "According to the police, the driver allegedly ran the red light." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se eu teria sabido, eu teria ido.",
        right: "Se eu tivesse sabido, eu teria ido.",
        why: `After "se" use the pluperfect subjunctive. "Teria" belongs in the main clause.`,
      },
      {
        wrong: "Se eu tinha sabido, teria ido.",
        right: "Se eu tivesse sabido, teria ido.",
        why: `"Tinha" + participle is accepted in the main clause in speech, never after "se".`,
      },
      {
        wrong: "Espero que você teve uma boa viagem.",
        right: "Espero que você tenha tido uma boa viagem.",
        why: `"Espero que" takes the subjunctive; for a finished action, "tenha" + participle.`,
      },
      {
        wrong: "Se eu tivesse sabido, eu teria ir.",
        right: "Se eu tivesse sabido, eu teria ido.",
        why: `Compound tenses take the participle, not the infinitive.`,
      },
      {
        wrong: "Eu devia de ter avisado.",
        right: "Eu devia ter avisado.",
        why: `"Dever de" is common in speech, but the norm is "dever" + infinitive with no preposition.`,
      },
    ],
    faqs: [
      {
        q: `"Teria ido" or "tinha ido" in the main clause?`,
        a: `Both mean would have gone after an unreal "se" clause. "Teria ido" is the written and careful form; "tinha ido" is everyday speech. Outside conditions, "tinha ido" is the mais-que-perfeito (had gone), so in writing keep "teria" to avoid ambiguity.`,
      },
      {
        q: `"Devia ter" or "deveria ter"?`,
        a: `Interchangeable. "Deveria ter" sounds a little more careful; "devia ter" is more common in speech. Both are correct in writing.`,
      },
    ],
    related: ["conditional-sentences", "sequence-of-tenses", "imperfect-subjunctive", "mais-que-perfeito", "conditional-tense"],
    lessons: [
      "b2-perfect-subjunctive",
      "b2-pluperfect-subjunctive",
      "b2-conditional-perfect",
      "b2-past-unreal-conditions",
      "b2-regrets",
      "b2-contrast-tenha-tivesse",
      "b2-dialogue-regrets",
      "b2-error-hunt-compound",
      "b2-build-up-regret",
      "b2-spiral-compound",
      "b2-compound-extra-1",
      "b2-compound-extra-2",
      "b2-compound-extra-3",
    ],
  },
  {
    slug: "conditional-sentences",
    title: "Se Chover, Se Eu Fosse, Se Eu Tivesse Sabido: Conditional Sentences",
    description:
      "Every kind of if-sentence in Brazilian Portuguese: general truths, real future conditions with the future subjunctive, unreal present and past conditions, mixed conditions, the spoken versions, and como se, mesmo que and caso.",
    level: "B2",
    intro: [
      `English if-sentences are built from a small set of tenses (if it rains, if it rained, if it had rained). Portuguese has the same logic, but each type takes a different subjunctive after "se": the future subjunctive for real possibilities ("se chover"), the imperfect for imagined ones ("se chovesse"), the pluperfect for the past that didn't happen ("se tivesse chovido").`,
      `The speaker's view of the chances decides the type, not the facts. "Se você quiser, te levo" offers something likely; "se você quisesse, eu te levaria" sounds hypothetical or slightly doubtful.`,
    ],
    sections: [
      {
        heading: `The types at a glance`,
        body: [
          `Pick the type by meaning, then fit the tenses. The main clause of the unreal types has a written form (the conditional) and a spoken one (the imperfeito, or "tinha" + participle). Either clause can come first; when the "se" clause leads, a comma follows it.`,
        ],
        table: {
          headers: ["Type", "Se clause", "Main clause", "Example"],
          rows: [
            ["general truth", "present indicative", "present", "Se chove, a rua alaga."],
            ["real future", "future subjunctive", "present, future, imperative", "Se chover, a gente fica em casa."],
            ["unreal present", "imperfect subjunctive", "conditional (speech: imperfeito)", "Se eu tivesse carro, te levaria."],
            ["unreal past", "pluperfect subjunctive", "conditional perfect (speech: tinha + participle)", "Se eu tivesse sabido, teria vindo."],
            ["mixed", "pluperfect subjunctive", "conditional", "Se eu tivesse estudado, hoje seria médico."],
          ],
        },
        examples: [
          { pt: "Se você esquenta demais o leite, ele derrama.", en: "If you heat the milk too much, it boils over." },
          { pt: "Se você puder, me manda o arquivo hoje.", en: "If you can, send me the file today." },
          { pt: "Se eu ganhasse mais, moraria perto da praia.", en: "If I earned more, I'd live near the beach." },
          { pt: "Se eu tivesse carro, eu ia te buscar.", en: "If I had a car, I'd come and pick you up. (speech)" },
          { pt: "Se a gente tivesse reservado, não teria ficado sem mesa.", en: "If we'd booked, we wouldn't have ended up without a table." },
        ],
      },
      {
        heading: `Se eu fosse você, and the speaker's view`,
        body: [
          `"Se eu fosse você" (if I were you) is the standard frame for advice, followed by the conditional or, in speech, the imperfeito: "se eu fosse você, eu falaria com ela" or "eu falava com ela". "Eu no seu lugar" is the shorter alternative.`,
          `The same situation can take either real or unreal form, depending on how likely you present it. "Se eu tiver férias em julho, vou à Bahia" (I may well have them); "se eu tivesse férias em julho, iria à Bahia" (I don't, or I doubt it). Mixing the two systems ("se eu tenho dinheiro, compraria") sounds wrong.`,
        ],
        examples: [
          { pt: "Se eu fosse você, aceitaria a proposta.", en: "If I were you, I'd accept the offer." },
          { pt: "Se eu fosse você, eu nem respondia.", en: "If I were you, I wouldn't even reply. (speech)" },
          { pt: "Se eu tiver tempo amanhã, passo na sua casa.", en: "If I have time tomorrow, I'll drop by your place." },
          { pt: "Se eu tivesse tempo, passaria mais vezes na sua casa.", en: "If I had time, I'd come by your place more often." },
        ],
      },
      {
        heading: `Como se, mesmo que, caso and friends`,
        body: [
          `"Como se" (as if) always takes the imperfect or pluperfect subjunctive, even when the main verb is in the present: "ele fala como se fosse o dono", "ela agiu como se nada tivesse acontecido". "Mesmo que" (even if) takes the present subjunctive for a possible future and the imperfect for a hypothesis: "mesmo que chova, eu vou"; "mesmo que chovesse, eu iria". "Mesmo se" works like "se": "mesmo se ele pedir".`,
          `Other conditional conjunctions take the subjunctive in the tense the sequence requires: "caso" (if, in case), "a não ser que" and "a menos que" (unless), "desde que" and "contanto que" (provided that). "Caso" never takes the future subjunctive: "caso você precise", not "caso você precisar".`,
        ],
        examples: [
          { pt: "Ele age como se fosse o chefe.", en: "He acts as if he were the boss." },
          { pt: "Ela me tratou como se nunca tivesse me visto.", en: "She treated me as if she'd never seen me before." },
          { pt: "Mesmo que chova, a gente vai à praia.", en: "Even if it rains, we're going to the beach." },
          { pt: "Mesmo que me pagassem o dobro, eu não aceitaria.", en: "Even if they paid me double, I wouldn't accept." },
          { pt: "Caso o voo atrase, a companhia oferece hotel.", en: "If the flight is delayed, the airline provides a hotel." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se eu teria dinheiro, viajaria.",
        right: "Se eu tivesse dinheiro, viajaria.",
        why: `The conditional never goes after "se"; use the imperfect subjunctive.`,
      },
      {
        wrong: "Se eu tenho tempo, eu te ajudaria.",
        right: "Se eu tivesse tempo, eu te ajudaria.",
        why: `Don't mix systems: the conditional in the main clause needs an imperfect subjunctive after "se". Or, for a real possibility: "se eu tiver tempo, eu te ajudo".`,
      },
      {
        wrong: "Ele fala como se ele é o dono.",
        right: "Ele fala como se fosse o dono.",
        why: `"Como se" always takes the imperfect (or pluperfect) subjunctive.`,
      },
      {
        wrong: "Se eu fosse você, eu faço isso.",
        right: "Se eu fosse você, eu faria isso.",
        why: `An unreal "se" clause pairs with the conditional (or the imperfeito "fazia" in speech), not the present.`,
      },
      {
        wrong: "Caso você precisar, me liga.",
        right: "Caso você precise, me liga.",
        why: `"Caso" takes the present subjunctive; the future subjunctive goes with "se": "se você precisar".`,
      },
    ],
    faqs: [
      {
        q: `"Se eu tinha dinheiro, eu comprava" — is that correct?`,
        a: `As a hypothesis, it's very common in relaxed Brazilian speech, and you'll hear it from educated speakers. In writing and careful speech, use "se eu tivesse dinheiro, eu compraria". As a past habit (whenever I had money, I bought...) it's perfectly correct.`,
      },
      {
        q: `Can I start with the main clause?`,
        a: `Yes: "eu iria se pudesse". No comma is needed when the "se" clause comes second.`,
      },
      {
        q: `Are conditionals different in European Portuguese?`,
        a: `The system is the same. Speech in Portugal uses the imperfeito in the main clause at least as much as Brazil ("se tivesse tempo, ia contigo"), with the tu form for you.`,
      },
    ],
    related: ["future-subjunctive", "imperfect-subjunctive", "compound-subjunctive-tenses", "conditional-tense", "concession-cause-purpose"],
    lessons: [
      "b2-unreal-conditions-1",
      "b2-unreal-conditions-2",
      "b2-como-se",
      "b2-real-vs-unreal",
      "b2-mesmo-que-se",
      "b2-contrast-tiver-tivesse",
      "b2-dialogue-what-if",
      "b2-error-hunt-conditionals",
      "b2-build-up-hypothesis",
      "b2-spiral-conditions",
      "b2-conditions-extra-1",
      "b2-conditions-extra-2",
      "b2-conditions-extra-3",
      "b2-se-future-subj",
      "b2-past-unreal-conditions",
      "b2-review-conditions",
    ],
  },
  {
    slug: "se-passive-and-impersonal-se",
    title: "Vende-Se Casas or Vendem-Se Casas? The Two Kinds of Se",
    description:
      "The passive se (alugam-se quartos) and the impersonal se (precisa-se de, trata-se de, vive-se bem) in Brazilian Portuguese, the agreement debate, what speech does instead, and what to write in exams.",
    level: "B2",
    intro: [
      `"Se" + verb with no named doer appears on every street in Brazil: "aluga-se", "vende-se", "precisa-se de", "conserta-se". Grammars split these into two constructions. With a direct object, "se" makes a passive and the verb agrees with the noun: "vendem-se casas" (houses are sold). With a preposition or no object, "se" makes the subject indeterminate and the verb stays singular: "precisa-se de vendedores", "vive-se bem aqui".`,
      `In real usage the line is blurred: Brazilian signs often say "vende-se casas", and many linguists defend it. This guide gives you the norm, the debate, and the safe choice for formal writing.`,
    ],
    sections: [
      {
        heading: `Passive se: the verb agrees`,
        body: [
          `With a transitive verb and a direct object ("vender casas", "alugar quartos", "discutir problemas"), the norm treats the noun as the grammatical subject of a passive: "vendem-se casas" = "casas são vendidas". So the verb agrees in number: singular noun, singular verb; plural noun, plural verb. "Discutiram-se os problemas", "fizeram-se várias propostas".`,
          `A se-passive can't name the doer. If you want to say by whom, switch to "ser" + participle: "as casas são vendidas pela imobiliária".`,
        ],
        table: {
          headers: ["Se-passive", "Equivalent with ser", "Meaning"],
          rows: [
            ["Vende-se este carro.", "Este carro é vendido.", "This car is for sale."],
            ["Vendem-se casas.", "Casas são vendidas.", "Houses for sale."],
            ["Alugam-se quartos.", "Quartos são alugados.", "Rooms for rent."],
            ["Discutiram-se os problemas.", "Os problemas foram discutidos.", "The problems were discussed."],
          ],
        },
        examples: [
          { pt: "Alugam-se salas comerciais.", en: "Office space for rent." },
          { pt: "Na reunião, discutiram-se os novos prazos.", en: "The new deadlines were discussed at the meeting." },
          { pt: "Ainda não se sabem as causas do acidente.", en: "The causes of the accident are not yet known." },
          { pt: "Fizeram-se muitas promessas durante a campanha.", en: "Many promises were made during the campaign." },
        ],
      },
      {
        heading: `Impersonal se: always singular`,
        body: [
          `With a verb that takes a preposition ("precisar de", "tratar de", "gostar de", "acreditar em"), an intransitive verb ("viver", "trabalhar", "dormir") or a linking verb, there is no noun that could be the subject. "Se" then marks a general, unnamed subject, and the verb is always singular: "precisa-se de funcionários", "trata-se de questões complexas", "aqui se trabalha muito".`,
          `"Trata-se de" (it's a matter of, it's about) is the classic case. It never has a subject: "trata-se de um livro sobre a Amazônia". To say what a book is about, drop the "se": "o livro trata da Amazônia".`,
        ],
        examples: [
          { pt: "Precisa-se de motoristas com experiência.", en: "Experienced drivers wanted." },
          { pt: "Trata-se de um problema antigo.", en: "This is an old problem." },
          { pt: "O artigo trata da desigualdade nas grandes cidades.", en: "The article is about inequality in big cities." },
          { pt: "Em Curitiba se vive bem.", en: "Life is good in Curitiba." },
          { pt: "Não se acredita mais em promessas de campanha.", en: "People don't believe campaign promises anymore." },
        ],
      },
      {
        heading: `The vende-se casas debate, and what to write`,
        body: [
          `Many Brazilians feel "vende-se casas" as someone sells houses, with "se" as an indefinite subject and "casas" as the object, so they keep the verb singular. Linguists point out that this is how the language actually works today, and signs and ads prove it. The prescriptive norm, school grammars, the vestibular and careful editors still require agreement: "vendem-se casas".`,
          `Practical rule: in the Celpe-Bras, in formal emails and reports, make the verb agree. Recognize the singular in the street. And in speech, Brazilians mostly avoid the question altogether by dropping "se" ("aqui vende pão de queijo") or using a plural or general subject ("eles vendem", "a gente vende", "você encontra").`,
        ],
        table: {
          headers: ["Formal writing", "Signs and ads", "Speech"],
          rows: [
            ["Vendem-se casas.", "Vende-se casas.", "Tão vendendo umas casas ali."],
            ["Consertam-se celulares.", "Conserta-se celulares.", "Aqui conserta celular."],
            ["Aqui se fala inglês.", "Fala-se inglês.", "Aqui a gente fala inglês."],
          ],
        },
        examples: [
          { pt: "Aqui conserta bicicleta.", en: "They fix bikes here. (speech)" },
          { pt: "No Brasil se come arroz e feijão quase todo dia.", en: "In Brazil people eat rice and beans almost every day." },
          { pt: "Você não encontra esse queijo em qualquer lugar.", en: "You can't find this cheese just anywhere." },
          { pt: "Dizem que vai faltar água no verão.", en: "They say there'll be water shortages in the summer." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Precisam-se de funcionários.",
        right: "Precisa-se de funcionários.",
        why: `With "precisar de" the "se" is impersonal: the verb never agrees, because "funcionários" is not the subject.`,
      },
      {
        wrong: "O livro trata-se da história do Brasil.",
        right: "O livro trata da história do Brasil.",
        why: `"Trata-se de" has no subject. With a subject, use "tratar de" without "se".`,
      },
      {
        wrong: "Vendem-se casas pela imobiliária.",
        right: "As casas são vendidas pela imobiliária.",
        why: `A se-passive can't name the doer; use "ser" + participle with "por".`,
      },
      {
        wrong: "Na reunião, discutiu-se vários problemas.",
        right: "Na reunião, discutiram-se vários problemas.",
        why: `In formal writing the passive "se" agrees with the plural noun.`,
      },
    ],
    faqs: [
      {
        q: `"Aluga-se" or "se aluga"?`,
        a: `At the start of a sign or sentence, written Portuguese puts the pronoun after the verb: "aluga-se". After an attracting word it comes first: "aqui se aluga", "não se aceitam cheques". In speech Brazilians put it first anyway ("se aluga"), but signs follow the written rule.`,
      },
      {
        q: `Is it different in European Portuguese?`,
        a: `Portugal keeps the "se" in speech ("vende-se pão aqui"; plain "vende pão" is rare there) and makes it agree more consistently. Dropping the "se" with a general meaning ("aqui conserta celular") is typically Brazilian.`,
      },
    ],
    related: ["passive-voice-and-se", "pronoun-placement-in-writing", "register-and-the-written-norm", "spoken-brazilian-portuguese"],
    lessons: [
      "b2-enclise-formal",
      "b2-reading-formal-texts",
      "b2-impersonal-style",
      "b2-contrast-registers",
      "b2-register-extra-1",
      "b2-reports-minutes",
    ],
  },
  {
    slug: "concession-cause-purpose",
    title: "Embora, Por Mais Que, Uma Vez Que, A Fim De Que: Nuanced Connectors",
    description:
      "Upper-intermediate Brazilian Portuguese connectors of concession (ainda que, por mais que, nem que, se bem que), cause (uma vez que, devido a, graças a), purpose and result (a fim de que, de modo que, tanto que), and the mood each one takes.",
    level: "B2",
    intro: [
      `At B2 an argument needs more than "mas", "porque" and "para": it needs although, even though, no matter how, given that, thanks to, so that, so much so that. Portuguese has a rich set of these, and almost every one comes with a fixed mood: the subjunctive for concessions and purposes, the indicative for causes and results.`,
      `Learn each connector with its mood and its grammar: does it introduce a clause ("embora seja"), a noun ("apesar do frio") or an infinitive ("apesar de ser")? Most errors at this level come from mixing these up.`,
    ],
    sections: [
      {
        heading: `Concession: although, even if, no matter how`,
        body: [
          `With the subjunctive: "embora", "ainda que", "mesmo que", "por mais que" (no matter how much), "por menos que", "nem que" (even if, colloquial, often with an extreme: "nem que eu tenha que andar"), and "por mais" + adjective + "que": "por mais difícil que seja". "Se bem que" (although, mind you) is a spoken afterthought, usually with the indicative in Brazil: "se bem que ele é legal".`,
          `With the indicative or a noun: "apesar de" + noun or infinitive ("apesar do trânsito", "apesar de estar cansado"), "apesar disso", "mesmo assim", "ainda assim", "só que" (speech: only, except that), "a despeito de" (formal).`,
        ],
        examples: [
          { pt: "Ainda que o projeto seja caro, vale o investimento.", en: "Even though the project is expensive, it's worth the investment." },
          { pt: "Por mais que eu tente, não consigo acordar cedo.", en: "No matter how hard I try, I can't wake up early." },
          { pt: "Por mais difícil que pareça, a solução é simples.", en: "However difficult it seems, the solution is simple." },
          { pt: "Vou terminar hoje, nem que eu tenha que virar a noite.", en: "I'll finish today, even if I have to stay up all night." },
          { pt: "O filme é longo. Mesmo assim, vale a pena.", en: "The movie is long. Even so, it's worth it." },
          { pt: "Não gostei muito do hotel. Se bem que o café da manhã era ótimo.", en: "I didn't like the hotel much. Mind you, breakfast was great." },
        ],
      },
      {
        heading: `Cause: given that, due to, thanks to`,
        body: [
          `Clauses of cause take the indicative: "porque", "já que", "uma vez que", "visto que", "dado que", "como" (at the start). "Porquanto" is very formal, for recognition. With a noun, use "por causa de", "devido a", "em virtude de", "em razão de" or "graças a", and remember that "a" contracts with the article: "devido ao trânsito", "devido à chuva".`,
          `"Graças a" is positive: thanks to. For a bad cause use "por causa de" or "devido a": "graças à ajuda dos vizinhos" but "por causa da chuva".`,
        ],
        examples: [
          { pt: "Uma vez que o prazo terminou, não aceitamos mais inscrições.", en: "Since the deadline has passed, we're no longer accepting applications." },
          { pt: "Dado que a maioria mora no centro, a mudança não faz sentido.", en: "Given that most people live in the center, the move makes no sense." },
          { pt: "O voo foi cancelado devido ao mau tempo.", en: "The flight was canceled due to bad weather." },
          { pt: "Graças ao apoio da comunidade, a escola foi reformada.", en: "Thanks to the community's support, the school was renovated." },
          { pt: "O jogo foi adiado por causa da chuva.", en: "The game was postponed because of the rain." },
        ],
      },
      {
        heading: `Purpose and result, and a map of moods`,
        body: [
          `Purpose takes the subjunctive: "para que", "a fim de que" (formal) and "de modo que" or "de forma que" in the sense of so that. With one subject, "para" or "a fim de" + infinitive. Result takes the indicative: "tão" + adjective + "que", "tanto" + noun + "que", "de tal modo que", "tanto que" (so much so that), and "de modo que" in the sense of and so.`,
        ],
        table: {
          headers: ["Connector", "Function", "Mood or form"],
          rows: [
            ["embora, ainda que, mesmo que, por mais que, nem que", "concession", "subjunctive"],
            ["apesar de", "concession", "noun or infinitive"],
            ["mesmo assim, ainda assim, apesar disso", "concession", "indicative (new sentence)"],
            ["já que, uma vez que, visto que, dado que", "cause", "indicative"],
            ["devido a, por causa de, graças a", "cause", "noun"],
            ["para que, a fim de que", "purpose", "subjunctive"],
            ["para, a fim de", "purpose", "infinitive"],
            ["tão... que, tanto que, de tal modo que", "result", "indicative"],
            ["de modo que, de forma que", "result or purpose", "indicative or subjunctive"],
          ],
        },
        examples: [
          { pt: "Enviamos o material com antecedência a fim de que todos possam se preparar.", en: "We sent the material in advance so that everyone can prepare." },
          { pt: "Ela estava tão cansada que dormiu no ônibus.", en: "She was so tired that she fell asleep on the bus." },
          { pt: "Ele gostou tanto da cidade que se mudou para lá.", en: "He liked the city so much that he moved there." },
          { pt: "Choveu muito, tanto que as aulas foram canceladas.", en: "It rained a lot, so much so that classes were canceled." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Embora é caro, eu vou comprar.",
        right: "Embora seja caro, eu vou comprar.",
        why: `"Embora" always takes the subjunctive.`,
      },
      {
        wrong: "Apesar que ele é jovem, é muito experiente.",
        right: "Apesar de ele ser jovem, é muito experiente.",
        why: `"Apesar que" is speech only. In writing, "apesar de" + infinitive, or "embora ele seja".`,
      },
      {
        wrong: "O evento foi cancelado devido o trânsito.",
        right: "O evento foi cancelado devido ao trânsito.",
        why: `"Devido" needs "a", which contracts with the article: "ao", "à".`,
      },
      {
        wrong: "Por mais que eu estudo, não aprendo.",
        right: "Por mais que eu estude, não aprendo.",
        why: `"Por mais que" takes the subjunctive.`,
      },
      {
        wrong: "Graças à chuva, o jogo foi cancelado.",
        right: "Por causa da chuva, o jogo foi cancelado.",
        why: `"Graças a" has a positive sense (with a bad cause it sounds ironic); a neutral or negative cause takes "por causa de" or "devido a".`,
      },
    ],
    faqs: [
      {
        q: `"Embora" or "apesar de"?`,
        a: `Same meaning, different grammar. "Embora" + clause with the subjunctive ("embora estivesse chovendo"); "apesar de" + noun or infinitive ("apesar da chuva", "apesar de estar chovendo"). Use whichever lets you keep the sentence simple.`,
      },
      {
        q: `Is "ainda que" different from "embora"?`,
        a: `Very close. "Embora" usually concedes a fact (although it is); "ainda que" and "mesmo que" can also concede a hypothesis (even if it were). "Ainda que fosse de graça, eu não iria" sounds natural; "embora" there would be odd.`,
      },
    ],
    related: ["subjunctive-after-conjunctions", "connectors-for-writing", "conditional-sentences", "regencia-and-crase"],
    lessons: [
      "b2-concession-subjunctive",
      "b2-concession-indicative",
      "b2-cause",
      "b2-purpose-result",
      "b2-connector-mood",
      "b2-contrast-embora-apesar",
      "b2-dialogue-debate-b2",
      "b2-error-hunt-concession",
      "b2-build-up-argument",
      "b2-spiral-concession",
      "b2-concession-extra-1",
      "b2-concession-extra-2",
      "b2-concession-extra-3",
      "b2-counter-arguments",
    ],
  },
  {
    slug: "pronoun-placement-in-writing",
    title: "Me Disseram or Disseram-Me? Pronoun Placement in Writing",
    description:
      "Where object pronouns go in Brazilian Portuguese: proclisis in speech, the written rules (words that attract the pronoun, no pronoun at the start), the -lo and -no forms, two-verb sequences, lhe in formal writing, and mesóclise for recognition.",
    level: "B2",
    intro: [
      `In speech, Brazilians put object pronouns before the verb, almost always: "me disseram", "te ligo amanhã", "se vende". The written norm, inherited from the European grammar tradition, has stricter rules: no pronoun at the start of a sentence ("Disseram-me"), pronoun before the verb after certain words ("não me disse"), and special forms after the verb ("fazê-lo", "compram-no").`,
      `You need both systems. Speech that follows the written rules sounds like a Portuguese newsreader; a formal report that starts "Me informaram" looks careless to a Brazilian editor.`,
    ],
    sections: [
      {
        heading: `Words that pull the pronoun forward`,
        body: [
          `In writing, the pronoun goes before the verb (próclise) when an attracting word precedes it: negatives ("não", "nunca", "jamais", "ninguém", "nada"), relatives ("que", "quem", "onde", "o qual"), subordinating conjunctions ("quando", "se", "porque", "embora", "como"), many adverbs ("já", "sempre", "também", "ainda", "aqui", "talvez", "só"), indefinites ("tudo", "todos", "alguém") and question words. Wishes too: "Deus te abençoe".`,
          `With no attracting word and the verb first in the sentence, the norm puts the pronoun after it, with a hyphen (ênclise): "Disseram-me que...", "Trata-se de...", "Vende-se". Brazilian editors accept proclisis after a subject ("Ele me disse") in all but the most formal texts.`,
        ],
        table: {
          headers: ["Trigger", "Written norm", "Without the trigger"],
          rows: [
            ["não", "Não me disseram nada.", "Disseram-me tudo."],
            ["que", "O livro que me deram é ótimo.", "Deram-me um livro."],
            ["quando", "Quando o vi, sorri.", "Vi-o na rua."],
            ["já", "Já se sabe o resultado.", "Sabe-se o resultado."],
            ["ninguém", "Ninguém me avisou.", "Avisaram-me ontem."],
            ["sempre", "Sempre nos ajudam.", "Ajudam-nos sempre."],
          ],
        },
        examples: [
          { pt: "Não me lembro do nome dele.", en: "I don't remember his name." },
          { pt: "Informaram-me que a reunião foi adiada.", en: "I was told the meeting had been postponed." },
          { pt: "Trata-se de uma decisão difícil.", en: "It's a difficult decision." },
          { pt: "A empresa que nos contratou fica em Campinas.", en: "The company that hired us is in Campinas." },
          { pt: "Quando a encontrei, ela já sabia de tudo.", en: "When I met her, she already knew everything." },
          { pt: "Me disseram que você vai se mudar.", en: "I heard you're moving. (speech)" },
        ],
      },
      {
        heading: `After the verb: -lo, -la, -no, -na`,
        body: [
          `When "o", "a", "os", "as" follow the verb, their shape depends on its ending. After "-r", "-s" or "-z" the consonant drops and the pronoun becomes "-lo", "-la", "-los", "-las": "fazer + o" gives "fazê-lo", "comprar + a" gives "comprá-la", "fiz + o" gives "fi-lo". The verb gains an accent where the stress needs it. After a nasal ending ("-m", "-ão", "-õe") the pronoun becomes "-no", "-na": "compram + o" gives "compram-no", "dão + a" gives "dão-na".`,
          `In Brazilian writing the infinitive forms are by far the most common: "vou ajudá-lo", "é preciso resolvê-lo", "gostaria de convidá-la". "Compram-no" and "fi-lo" are rare outside formal texts.`,
        ],
        table: {
          headers: ["Verb ending", "Pronoun", "Example"],
          rows: [
            ["-ar (infinitive)", "-á-lo, -á-la", "comprá-lo, ajudá-la"],
            ["-er (infinitive)", "-ê-lo, -ê-la", "fazê-lo, vendê-la"],
            ["-ir (infinitive)", "-i-lo, -i-la", "abri-lo, consegui-la"],
            ["-s, -z", "-lo, -la", "compramo-lo, fi-lo"],
            ["-m, -ão, -õe", "-no, -na", "compram-no, dão-na, põe-no"],
          ],
        },
        examples: [
          { pt: "Gostaríamos de convidá-lo para a cerimônia.", en: "We would like to invite you to the ceremony." },
          { pt: "O problema é sério, mas é possível resolvê-lo.", en: "The problem is serious, but it can be solved." },
          { pt: "Recebi o documento e vou analisá-lo hoje.", en: "I've received the document and will go through it today." },
          { pt: "Os moradores encontraram o cachorro e levaram-no ao veterinário.", en: "The residents found the dog and took it to the vet." },
        ],
      },
      {
        heading: `Two verbs, lhe, and mesóclise`,
        body: [
          `With an auxiliary + infinitive or gerund, Brazil puts the pronoun between the verbs, attached to the main verb but written without a hyphen: "vou te dizer", "estou te esperando", "quero lhe agradecer". The norm also allows "vou dizer-lhe". With a participle the pronoun can never follow it: "tenho-o visto" or "o tenho visto" in writing, "tenho visto ele" in speech, never "tenho visto-o".`,
          `In formal writing, "o" and "a" are the direct objects for "você", "o senhor" and "a senhora" ("gostaria de convidá-la"), "lhe" the indirect ("comunicamos-lhe que...", "gostaria de lhe agradecer"). "Lhe" as a direct object ("eu lhe vi") is a regional spoken use, not standard. Mesóclise puts the pronoun inside the future and conditional ("dir-lhe-ei", "far-se-á", "dar-te-ia"); it survives in laws, some very formal texts and old writing, and in conversation Brazilians use it mainly as a joke. Write "eu lhe direi" or rephrase.`,
        ],
        examples: [
          { pt: "Vou te mandar o endereço por mensagem.", en: "I'll send you the address by message." },
          { pt: "Estamos lhe enviando a proposta em anexo.", en: "We're sending you the proposal attached." },
          { pt: "Eu o tenho visto pouco ultimamente.", en: "I haven't been seeing him much lately. (formal)" },
          { pt: "Comunicamos-lhe que o prazo foi prorrogado.", en: "We wish to inform you that the deadline has been extended." },
          { pt: "A lei far-se-á cumprir.", en: "The law will be enforced. (very formal, for recognition)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Não disse-me nada.",
        right: "Não me disse nada.",
        why: `"Não" attracts the pronoun: it goes before the verb.`,
      },
      {
        wrong: "Me informaram que o relatório está pronto.",
        right: "Informaram-me que o relatório está pronto.",
        why: `In a formal report: the written norm doesn't start a sentence with a pronoun. In speech "me informaram" is normal.`,
      },
      {
        wrong: "Vou fazer-lo amanhã.",
        right: "Vou fazê-lo amanhã.",
        why: `After "-r" the consonant drops and the pronoun becomes "lo"; the verb takes an accent.`,
      },
      {
        wrong: "Eles compram-o toda semana.",
        right: "Eles compram-no toda semana.",
        why: `After a nasal ending the pronoun becomes "no". In Brazilian usage, "eles o compram" is more natural.`,
      },
      {
        wrong: "Eu lhe vi ontem no shopping.",
        right: "Eu o vi ontem no shopping.",
        why: `"Ver" takes a direct object: "o" or "a" in writing. "Lhe" is for indirect objects.`,
      },
      {
        wrong: "Tenho visto-o pouco.",
        right: "Tenho-o visto pouco.",
        why: `A pronoun never goes after a participle. Brazilian formal writing also accepts "o tenho visto".`,
      },
    ],
    faqs: [
      {
        q: `Will Brazilians think I'm wrong if I say "Me dá um café"?`,
        a: `No, that's how everyone talks. "Dê-me um café" would sound European or theatrical in a Brazilian bar. The written rules matter in formal texts: reports, letters, exams, journalism.`,
      },
      {
        q: `How does European Portuguese differ?`,
        a: `In Portugal the pronoun goes after the verb by default, in speech too: "dá-me um café", "chamo-me Ana", "vou-te dizer" (with a hyphen). Attracting words work as in the Brazilian written norm, and mesóclise is still used in formal European writing.`,
      },
      {
        q: `What about "enviaremos-lhe"?`,
        a: `That form breaks the rule, because the future doesn't allow a pronoun after it. The norm would require mesóclise ("enviar-lhe-emos"), which Brazilians avoid, so rephrase: "nós lhe enviaremos", "vamos lhe enviar" or "enviaremos a você".`,
      },
    ],
    related: ["register-and-the-written-norm", "se-passive-and-impersonal-se", "regional-variation-in-brazil", "spoken-brazilian-portuguese", "object-pronouns-brazil", "indirect-objects-lhe"],
    lessons: [
      "b2-proclise-attraction",
      "b2-enclise-formal",
      "b2-lo-la-forms",
      "b2-pronouns-compound-verbs",
      "b2-mesoclise",
      "b2-contrast-speech-writing-pronouns",
      "b2-reading-formal-texts",
      "b2-error-hunt-pronouns-writing",
      "b2-transform-register-pronouns",
      "b2-spiral-pronouns",
      "b2-pronouns-writing-extra-1",
      "b2-pronouns-writing-extra-2",
      "b2-pronouns-writing-extra-3",
      "b2-review-writing-norm",
    ],
  },
  {
    slug: "regencia-and-crase",
    title: "Regência and Crase: Prepositions After Verbs, and À",
    description:
      "The Brazilian Portuguese verbs whose prepositions differ from English (gostar de, pensar em, assistir a, preferir... a), the preposition before que and relatives, and the crase: when a + a becomes à, the swap test, and a, à or há.",
    level: "B2",
    intro: [
      `Regência is the grammar of which preposition a verb takes. English and Portuguese often disagree: you like something but "gostar de" something, think about but "pensar em", marry someone but "casar com", watch a movie but, in the norm, "assistir a um filme". These pairs have to be learned verb by verb.`,
      `The crase is the grave accent in "à". It marks the fusion of the preposition "a" with the feminine article "a": "vou a + a praia" gives "vou à praia". Brazilians themselves argue about it, because "a" and "à" sound the same in Brazil; but it's tested everywhere, from school exams to the Celpe-Bras.`,
    ],
    sections: [
      {
        heading: `Verbs and their prepositions`,
        body: [
          `Learn the verb with its preposition as one unit. Several have a spoken variant that the norm rejects: "chegar em" (speech) versus "chegar a" (norm); "assistir o jogo" versus "assistir ao jogo"; "namorar com" versus "namorar alguém". "Preferir" takes "a", never "mais" or "do que": "prefiro café a chá".`,
          `"Lembrar" and "esquecer" have three patterns: "lembrar algo", "lembrar-se de algo" (both standard), and the very common spoken "lembrar de algo" (now widely accepted in Brazil). Avoid the hybrid "me lembrei o nome".`,
        ],
        table: {
          headers: ["Verb", "Preposition", "Example", "English"],
          rows: [
            ["gostar", "de", "Gosto de samba.", "like"],
            ["precisar", "de", "Preciso de ajuda.", "need"],
            ["depender", "de", "Depende do tempo.", "depend on"],
            ["pensar", "em", "Penso muito em você.", "think about"],
            ["sonhar", "com", "Sonhei com a praia.", "dream about"],
            ["casar", "com", "Ela casou com um carioca.", "marry"],
            ["concordar", "com", "Concordo com você.", "agree with"],
            ["assistir (watch)", "a", "Assisti ao jogo.", "watch"],
            ["obedecer", "a", "Obedeça às regras.", "obey"],
            ["chegar", "a (norm), em (speech)", "Chegamos a Belém às dez.", "arrive in"],
            ["preferir", "X a Y", "Prefiro teatro a cinema.", "prefer X to Y"],
            ["namorar", "(none)", "Ela namora o Lucas.", "go out with"],
          ],
        },
        examples: [
          { pt: "A gente assistiu a um documentário sobre o sertão.", en: "We watched a documentary about the sertão." },
          { pt: "Prefiro trabalhar de manhã a trabalhar à noite.", en: "I prefer working in the morning to working at night." },
          { pt: "Você concorda com a proposta?", en: "Do you agree with the proposal?" },
          { pt: "Ela sonha com uma casa na praia.", en: "She dreams of a house by the sea." },
          { pt: "Quando chegamos a Manaus, estava chovendo.", en: "When we arrived in Manaus, it was raining." },
        ],
      },
      {
        heading: `The preposition before que and relatives`,
        body: [
          `The preposition stays when the verb's complement is a clause or a relative. Before "que", strict grammars keep it ("preciso de que você me ajude"), but dropping it is normal in speech and widely accepted even in careful Brazilian writing ("preciso que você me ajude"). With nouns and reflexive verbs, keep it in formal texts: "tenho certeza de que", "lembre-se de que". Before relatives the preposition moves to the front: "o filme a que assisti", "a pessoa de quem gosto", "o projeto em que penso".`,
        ],
        examples: [
          { pt: "O filme a que assistimos ganhou vários prêmios.", en: "The movie we watched won several awards." },
          { pt: "Essa é a cidade com que sempre sonhei.", en: "This is the city I always dreamed of." },
          { pt: "Tenho certeza de que ele vai gostar.", en: "I'm sure he'll like it." },
          { pt: "Lembre-se de que o prazo termina sexta-feira.", en: "Remember that the deadline is Friday." },
        ],
      },
      {
        heading: `The crase: when a + a becomes à`,
        body: [
          `Use "à" when a word that requires the preposition "a" ("ir a", "chegar a", "entregar a", "obedecer a", "referir-se a") meets a feminine noun with the article "a": "vou à farmácia", "entreguei à professora". Swap test: replace the feminine noun with a masculine one. If you get "ao", the feminine takes "à": "vou ao mercado" so "vou à farmácia"; "conheço o mercado" so "conheço a farmácia", no crase.`,
          `Times and fixed phrases take it too: "às três horas", "à noite", "à tarde", "às vezes", "à vista", "à vontade", "à medida que", "à moda mineira". No crase before masculine words ("a pé", "a cavalo"), verbs ("começou a chover"), most pronouns ("a ela", "a você", "a quem") or cities without an article: "vou a Salvador" but "vou à Bahia". Test places with "voltar de": "volto de Salvador" (no article, no crase), "volto da Bahia" (article, crase).`,
        ],
        table: {
          headers: ["With crase", "Without crase", "Why"],
          rows: [
            ["Vou à praia.", "Vou ao clube.", "masculine swap: ao"],
            ["Fui à Bahia.", "Fui a Salvador.", "volto da Bahia, volto de Salvador"],
            ["Chego às oito.", "Chego daqui a pouco.", "hours are feminine"],
            ["Entreguei à diretora.", "Entreguei a ela.", "no crase before pronouns"],
            ["Saímos à noite.", "Saímos a pé.", "no crase before masculine"],
            ["Bife à milanesa.", "Começou a chover.", "no crase before verbs"],
          ],
        },
        examples: [
          { pt: "Amanhã vou à feira bem cedo.", en: "Tomorrow I'm going to the street market very early." },
          { pt: "A reunião começa às nove e meia.", en: "The meeting starts at nine-thirty." },
          { pt: "Às vezes a gente almoça na padaria.", en: "Sometimes we have lunch at the bakery." },
          { pt: "Pode ficar à vontade.", en: "Make yourself at home." },
          { pt: "Ele foi a Recife a trabalho.", en: "He went to Recife on business." },
        ],
      },
      {
        heading: `A, à or há?`,
        body: [
          `Three words, one sound. "Há" (from "haver") marks time already passed, ago: "há dois anos". "A" marks distance or future time: "daqui a dois dias", "a cinco quilômetros daqui", "a partir de amanhã". "À" is the crase: "à tarde". If you can say "faz", write "há".`,
        ],
        examples: [
          { pt: "Moro em Curitiba há cinco anos.", en: "I've lived in Curitiba for five years." },
          { pt: "O resultado sai daqui a duas semanas.", en: "The result comes out in two weeks' time." },
          { pt: "A praia fica a dez minutos daqui.", en: "The beach is ten minutes from here." },
          { pt: "A partir de segunda, o horário muda.", en: "Starting Monday, the schedule changes." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vou à pé.",
        right: "Vou a pé.",
        why: `No crase before a masculine word: "pé" has no feminine article.`,
      },
      {
        wrong: "As vezes eu trabalho em casa.",
        right: "Às vezes eu trabalho em casa.",
        why: `"Às vezes" (sometimes) always carries the crase.`,
      },
      {
        wrong: "Ontem eu assisti o jogo do Flamengo.",
        right: "Ontem eu assisti ao jogo do Flamengo.",
        why: `In the norm "assistir" meaning watch takes "a". "Assistir o jogo" is normal in speech.`,
      },
      {
        wrong: "Prefiro mais café do que chá.",
        right: "Prefiro café a chá.",
        why: `"Preferir" already means like more: no "mais", no "do que"; the second item takes "a".`,
      },
      {
        wrong: "À partir de amanhã, a loja abre às oito.",
        right: "A partir de amanhã, a loja abre às oito.",
        why: `"Partir" is a verb, and there's no crase before verbs.`,
      },
      {
        wrong: "O ônibus chega daqui há dez minutos.",
        right: "O ônibus chega daqui a dez minutos.",
        why: `Future time takes "a"; "há" is for the past (ago).`,
      },
    ],
    faqs: [
      {
        q: `Is the crase optional anywhere?`,
        a: `Before feminine possessives and women's first names: "entreguei à minha chefe" or "entreguei a minha chefe", "entreguei à Ana" or "a Ana". Both are correct, because the article itself is optional there.`,
      },
      {
        q: `"Cheguei em casa" or "cheguei a casa"?`,
        a: `"Casa" meaning your own home takes no article, so there's never a crase: the norm says "cheguei a casa", which sounds European to Brazilians, while "cheguei em casa" is universal in Brazilian speech and increasingly accepted in writing. With another person's house, the article returns: "fui à casa da Ana".`,
      },
      {
        q: `Why do Portuguese people find the crase easier?`,
        a: `In European Portuguese "à" sounds different from "a" (open versus closed vowel), so speakers hear it. In Brazil the two sound the same, which is why Brazilians rely on rules and the swap test.`,
      },
    ],
    related: ["relative-pronouns-in-depth", "register-and-the-written-norm", "concession-cause-purpose", "por-vs-para"],
    lessons: [
      "b2-regencia-1",
      "b2-regencia-2",
      "b2-crase-1",
      "b2-crase-2",
      "b2-regencia-relatives",
      "b2-contrast-a-ha-a",
      "b2-dialogue-weekend-plans",
      "b2-error-hunt-crase-regencia",
      "b2-transform-crase",
      "b2-spiral-regencia",
      "b2-crase-extra-1",
      "b2-crase-extra-2",
      "b2-crase-extra-3",
      "b2-review-writing-norm",
    ],
  },
  {
    slug: "register-and-the-written-norm",
    title: "Tinha Muita Gente or Havia Muitas Pessoas? Speech and the Written Norm",
    description:
      "How to move between spoken Brazilian Portuguese and the norma culta: ter vs haver, impersonal haver and fazer, a gente vs nós, ele vs o, pra mim fazer, formal vocabulary, the impersonal style, nominalization and gerundismo.",
    level: "B2",
    intro: [
      `Brazil has an unusually wide gap between how educated people speak and how they write formally. In speech, "tinha muita gente na festa", "a gente encontrou ele", "pra mim fazer isso" are normal; in a report the same ideas become "havia muitas pessoas", "nós o encontramos", "para eu fazer isso". The written standard is called the norma culta (or norma-padrão).`,
      `Neither register is wrong in its place. A B2 speaker shifts between them on purpose: relaxed in conversation and messages, standard in emails to clients, reports, the Celpe-Bras and anything published.`,
    ],
    sections: [
      {
        heading: `Speech versus the norm: the main switches`,
        body: [
          `A handful of features account for most of the difference. Some spoken forms are accepted in neutral writing too ("a gente" in a friendly email, "ter" for there is in a blog post); others are marked as errors in any written text ("pra mim fazer", "fazem dois anos"). The right-hand column of the table is what an examiner expects.`,
        ],
        table: {
          headers: ["Spoken Brazilian", "Written norm", "Note"],
          rows: [
            ["Tinha muita gente.", "Havia muitas pessoas.", "ter vs haver for there was"],
            ["A gente chegou cedo.", "Nós chegamos cedo.", "a gente is fine in informal writing"],
            ["Eu vi ele ontem.", "Eu o vi ontem.", "ele as object is speech only"],
            ["Vou no mercado.", "Vou ao mercado.", "ir em is speech only"],
            ["É pra mim fazer?", "É para eu fazer?", "subject of an infinitive: eu"],
            ["Me liga amanhã.", "Ligue-me amanhã.", "pronoun at the start"],
            ["Fazem dois anos.", "Faz dois anos.", "impersonal fazer: singular"],
            ["Vou estar enviando.", "Vou enviar.", "gerundismo"],
          ],
        },
        examples: [
          { pt: "Tinha muita gente no show ontem.", en: "There were lots of people at the concert last night. (speech)" },
          { pt: "Havia cerca de dez mil pessoas no evento.", en: "There were about ten thousand people at the event. (written)" },
          { pt: "Nós o encontramos na recepção do hotel.", en: "We met him at the hotel reception. (written)" },
          { pt: "O gerente pediu para eu revisar o contrato.", en: "The manager asked me to review the contract." },
          { pt: "Enviarei o relatório até sexta-feira.", en: "I will send the report by Friday." },
        ],
      },
      {
        heading: `Impersonal haver and fazer`,
        body: [
          `Meaning there is or there are, "haver" has no subject, so it is always singular, in every tense: "há problemas", "havia muitas pessoas", "houve reclamações", "haverá mudanças". The same goes for its auxiliaries: "deve haver", "vai haver", "pode haver", never "devem haver". Speech uses "ter" instead ("tem", "tinha", "teve"), also always singular.`,
          `"Fazer" for time elapsed is impersonal too: "faz dois anos que moro aqui", "fazia meses que não chovia". As an auxiliary, "haver" does agree: "eles haviam saído". Only the there is meaning is frozen in the singular.`,
        ],
        examples: [
          { pt: "Houve muitas reclamações sobre o novo horário.", en: "There were many complaints about the new schedule." },
          { pt: "Deve haver outras soluções.", en: "There must be other solutions." },
          { pt: "Faz três anos que trabalho nessa empresa.", en: "I've been working at this company for three years." },
          { pt: "Haverá alterações no trânsito durante o feriado.", en: "There will be changes to traffic over the holiday." },
          { pt: "Teve um acidente na marginal hoje cedo.", en: "There was an accident on the Marginal expressway this morning. (speech)" },
        ],
      },
      {
        heading: `Formal vocabulary`,
        body: [
          `Formal texts prefer longer, Latin-based verbs. They're not better words, just the expected ones: "solicitar" in an email to a company, "pedir" to a friend. Overusing them in conversation sounds pompous, so keep the pairs in two separate drawers.`,
        ],
        table: {
          headers: ["Everyday", "Formal", "Example"],
          rows: [
            ["comprar", "adquirir", "O cliente adquiriu o produto em março."],
            ["morar", "residir", "Resido em Porto Alegre desde 2019."],
            ["pedir", "solicitar", "Gostaria de solicitar uma segunda via."],
            ["avisar", "informar, comunicar", "Informamos que o sistema estará fora do ar."],
            ["começar", "iniciar", "As obras serão iniciadas em junho."],
            ["acabar", "encerrar, concluir", "A reunião foi encerrada às onze."],
            ["mandar", "enviar, encaminhar", "Encaminho em anexo o documento."],
            ["ajudar", "auxiliar", "A equipe auxiliou os participantes."],
            ["precisar", "necessitar", "O projeto necessita de ajustes."],
          ],
        },
        examples: [
          { pt: "Gostaria de solicitar o cancelamento da minha assinatura.", en: "I would like to request the cancellation of my subscription." },
          { pt: "Informamos que a agência estará fechada no feriado.", en: "Please note that the branch will be closed on the public holiday." },
          { pt: "Encaminho em anexo os documentos solicitados.", en: "Please find attached the documents requested." },
        ],
      },
      {
        heading: `The impersonal style and nominalization`,
        body: [
          `Reports and academic texts avoid "eu" and "a gente". They use impersonal frames with "se" or "é": "observa-se que", "nota-se que", "pode-se afirmar que", "cabe ressaltar que", "é possível concluir que". And they turn verbs into nouns, packing more into each sentence: "quando o projeto foi implementado, os custos caíram" becomes "a implementação do projeto reduziu os custos".`,
          `Avoid gerundismo, the call-center habit of "vou estar + gerund" for a simple future: "vou estar enviando o boleto" should be "vou enviar o boleto" or "enviarei o boleto". It is widely mocked in Brazil.`,
        ],
        examples: [
          { pt: "Observa-se um aumento no número de usuários.", en: "An increase in the number of users can be observed." },
          { pt: "Cabe ressaltar que os dados são preliminares.", en: "It should be stressed that the data are preliminary." },
          { pt: "A aprovação da lei gerou muita polêmica.", en: "The passing of the law caused a lot of controversy." },
          { pt: "A redução das tarifas beneficiou os moradores da periferia.", en: "The fare reduction benefited people living on the outskirts." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Haviam muitos problemas no sistema.",
        right: "Havia muitos problemas no sistema.",
        why: `"Haver" meaning there were is always singular.`,
      },
      {
        wrong: "Fazem dois anos que moro aqui.",
        right: "Faz dois anos que moro aqui.",
        why: `"Fazer" for elapsed time is impersonal: singular.`,
      },
      {
        wrong: "A gente fomos ao cinema.",
        right: "A gente foi ao cinema.",
        why: `"A gente" takes the third-person singular. With "fomos", use "nós".`,
      },
      {
        wrong: "Isso é para mim fazer?",
        right: "Isso é para eu fazer?",
        why: `"Eu" is the subject of "fazer". "Pra mim fazer" is common in speech but marked as an error.`,
      },
      {
        wrong: "Vou estar enviando o relatório amanhã.",
        right: "Vou enviar o relatório amanhã.",
        why: `Gerundismo sounds like a call-center script. Use the plain future.`,
      },
      {
        wrong: "Devem haver outras opções.",
        right: "Deve haver outras opções.",
        why: `The auxiliary of impersonal "haver" stays singular too.`,
      },
    ],
    faqs: [
      {
        q: `Is "ter" for there is wrong?`,
        a: `Not in speech or informal writing: "tem um restaurante ótimo aqui perto" is what everyone says. In formal writing use "haver" or "existir" ("existem várias opções", which, unlike "haver", agrees).`,
      },
      {
        q: `Can I use "a gente" in an email?`,
        a: `In an email to a colleague you know, yes. In a formal letter, a report or the Celpe-Bras, use "nós", and don't mix the two in the same text.`,
      },
      {
        q: `Is the norm closer to European Portuguese?`,
        a: `In some ways: the written rules on pronoun placement and on "haver" match educated European usage, and European speakers use "há" naturally in speech where Brazilians say "tem". But Brazilian formal writing has its own norm (proclisis after a subject, "você" in many contexts), so don't copy European texts.`,
      },
    ],
    related: ["pronoun-placement-in-writing", "se-passive-and-impersonal-se", "regencia-and-crase", "spoken-brazilian-portuguese", "connectors-for-writing", "style-and-register", "academic-portuguese"],
    lessons: [
      "b2-norma-vs-fala",
      "b2-formal-vocabulary",
      "b2-impersonal-style",
      "b2-nominalisation",
      "b2-haver-ter",
      "b2-contrast-registers",
      "b2-dialogue-customer-service",
      "b2-error-hunt-register",
      "b2-transform-register",
      "b2-spiral-register",
      "b2-register-extra-1",
      "b2-register-extra-2",
      "b2-register-extra-3",
      "b2-error-hunt-business",
    ],
  },
  {
    slug: "regional-variation-in-brazil",
    title: "Tu, the Carioca S and the Caipira R: Regional Variation in Brazil",
    description:
      "How Brazilian Portuguese varies across the country: tu in the South, North and Northeast, the Rio chiado, the different r sounds, t and d before i, open vowels in the Northeast, regional words and expressions, and a first look at European Portuguese.",
    level: "B2",
    intro: [
      `Brazil is the size of a continent, and its Portuguese varies like English across the UK and the US: the grammar is shared, but accents, some words and a few pronoun habits change from region to region. A paulistano, a carioca, a gaúcho and a recifense understand each other perfectly, and each can tell where the others are from in a sentence.`,
      `You don't need to imitate any of this. This course teaches a neutral Brazilian standard, close to what you hear on national television. The goal here is recognition: to follow speakers from anywhere, and not be thrown by "tu vai", "oxe" or a chiado.`,
    ],
    sections: [
      {
        heading: `Tu across Brazil`,
        body: [
          `"Você" is the national standard, but "tu" is alive in several regions. In most of Rio Grande do Sul, in much of the Northeast and in Rio de Janeiro speech, "tu" goes with the "você" form of the verb: "tu vai", "tu quer", "tu sabe". In a few places, notably parts of Santa Catarina, Pará and Maranhão, many speakers use "tu" with its own standard ending: "tu vais", "tu queres", "tu sabes".`,
          `Even in "você" regions, "te" is everywhere in speech ("te ligo"), and in many regions "teu" and "tua" are too ("é tua vez"). That's why mixing "você" with "te" sounds normal in Brazil. In this course, write "você" with its verb; recognize the rest.`,
        ],
        table: {
          headers: ["Region", "Everyday you", "Example"],
          rows: [
            ["São Paulo, Minas, Center-West", "você", "Você vai à festa?"],
            ["Rio de Janeiro", "\"você\" and \"tu\"", "\"Tu vai à praia hoje?\""],
            ["Rio Grande do Sul", "\"tu\" with the \"você\" verb", "\"Bah, tu viu o jogo?\""],
            ["parts of Santa Catarina, Pará, Maranhão", "\"tu\" with its own verb", "\"Tu vais comigo?\""],
            ["much of the Northeast", "\"tu\" and \"você\"", "\"Oxe, tu tá doido?\""],
          ],
        },
        examples: [
          { pt: "Você vai com a gente amanhã?", en: "Are you coming with us tomorrow? (neutral)" },
          { pt: "Te espero na saída do metrô.", en: "I'll wait for you at the subway exit." },
          { pt: "É a sua vez de pagar.", en: "It's your turn to pay." },
        ],
      },
      {
        heading: `Sounds: s, r, t and d, open vowels`,
        body: [
          `The chiado: in Rio (and in Belém, Florianópolis and parts of the Northeast) "s" at the end of a syllable sounds like English sh: "festa" sounds like 'fesh-ta', "mesmo" like 'mej-mu'. In São Paulo and most of the country it stays a plain s. The r: at the start of a word and as "rr", most Brazilians use a sound like English h ("Rio" sounds like 'Hee-oo', "carro" like 'ca-hu'). At the end of a syllable, the interior of São Paulo, Goiás, Paraná and parts of Minas use the caipira r, close to an American r ("porta", "interior"); in the South, a tapped or trilled r is common.`,
          `T and d before an i sound become 'tch' and 'dj' in most of Brazil: "tia" sounds like 'tchia', "dia" like 'djia', "leite" like 'leitchi'. Much of the Northeast keeps a plain t and d, and Curitiba is known for a clear final "e" ('leite' with an e). Northeastern speakers also open vowels before the stress: "Recife" with an open e, "colégio" with an open o.`,
        ],
        table: {
          headers: ["Feature", "Where", "Example"],
          rows: [
            ["chiado: s as sh", "Rio, Belém, Florianópolis", "festa, três, mesmo"],
            ["h-like r at the start", "most of Brazil", "Rio, rua, carro"],
            ["caipira r", "interior of São Paulo, Goiás, Paraná, parts of Minas", "porta, interior, mar"],
            ["t and d as tch, dj", "most of Brazil", "tia, dia, leite, cidade"],
            ["plain t and d", "much of the Northeast", "tia, dia"],
            ["open pre-stress vowels", "Northeast", "Recife, colégio, pequeno"],
          ],
        },
        examples: [
          { pt: "Vamos à praia mesmo com esse tempo?", en: "Are we really going to the beach in this weather?" },
          { pt: "Minha tia mora no interior de São Paulo.", en: "My aunt lives in the interior of São Paulo state." },
          { pt: "O carro ficou na rua de trás.", en: "The car is in the street behind." },
        ],
      },
      {
        heading: `Regional words and expressions`,
        body: [
          `Everyday foods and objects can have different names: cassava is "mandioca" in the Southeast, "aipim" in Rio and the South, "macaxeira" in the Northeast. Asking "como vocês chamam isso aqui?" is a good way to start a conversation. Expressions mark identity even more: "oxe" and "visse?" in the Northeast, "bah" and "tchê" in Rio Grande do Sul, "uai" and "trem" (thing) in Minas Gerais, "mano" and "meu" in São Paulo.`,
        ],
        table: {
          headers: ["Thing", "Words around Brazil"],
          rows: [
            ["cassava", "mandioca, aipim, macaxeira"],
            ["traffic light", "semáforo, sinal, farol (São Paulo)"],
            ["cookie, cracker", "biscoito, bolacha"],
            ["bread roll", "pão francês, cacetinho (Porto Alegre), pão de sal (Minas)"],
            ["tangerine", "tangerina, mexerica, bergamota (South)"],
            ["pumpkin", "abóbora, jerimum (Northeast)"],
            ["kid, boy", "menino, guri (South), piá (Paraná)"],
          ],
        },
        examples: [
          { pt: "Oxe, você ainda não provou macaxeira frita?", en: "What? You still haven't tried fried cassava?" },
          { pt: "Bah, que frio hoje!", en: "Wow, it's cold today!" },
          { pt: "Uai, cadê aquele trem que estava aqui?", en: "Hey, where's that thing that was here?" },
          { pt: "Meu, o trânsito tá parado de novo.", en: "Man, the traffic's at a standstill again." },
        ],
      },
      {
        heading: `A first look at European Portuguese`,
        body: [
          `European Portuguese shares the grammar but differs in the points you'll notice first. The progressive uses "a" + infinitive: "estou a trabalhar" where Brazil says "estou trabalhando". "Tu" with its own verb is the everyday informal you, and "você" can sound distant. Pronouns follow the verb by default: "dá-me", "chamo-me". Possessives usually take an article: "o meu carro".`,
          `Vocabulary differs too: "autocarro" for "ônibus", "comboio" for "trem", "telemóvel" for "celular", "pequeno-almoço" for "café da manhã", "casa de banho" for "banheiro". One word to watch: "rapariga" (a girl in Portugal) is offensive in much of Brazil; say "moça" or "garota".`,
        ],
        examples: [
          { pt: "Estou trabalhando de casa esta semana.", en: "I'm working from home this week. (Brazil)" },
          { pt: "Vou pegar o ônibus das sete.", en: "I'm going to catch the seven o'clock bus. (Brazil)" },
          { pt: "Aquela moça é minha colega de trabalho.", en: "That young woman is my colleague. (Brazil)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Tu vai ao cinema amanhã?",
        right: "Você vai ao cinema amanhã?",
        why: `In a written exercise: "tu vai" is regional speech. In writing this course uses "você" with its verb.`,
      },
      {
        wrong: "Estou a estudar português.",
        right: "Estou estudando português.",
        why: `"Estar a" + infinitive is European. Brazil uses the gerund.`,
      },
      {
        wrong: "Aquela rapariga trabalha comigo.",
        right: "Aquela moça trabalha comigo.",
        why: `"Rapariga" is the European word for girl and can be offensive in Brazil.`,
      },
      {
        wrong: "Vou apanhar o autocarro.",
        right: "Vou pegar o ônibus.",
        why: `"Apanhar o autocarro" is European. Brazilians "pegam o ônibus".`,
      },
    ],
    faqs: [
      {
        q: `Which accent should I aim for?`,
        a: `Any consistent Brazilian accent is fine. Most learners end up close to São Paulo or Rio because of the media they consume. What matters is clear vowels, the nasal sounds and natural rhythm, not a particular r or s.`,
      },
      {
        q: `Is any accent considered wrong?`,
        a: `No, though Brazil has a real problem with preconceito linguístico (linguistic prejudice), especially against Northeastern and rural accents. Linguists stress that every regional variety is fully grammatical; the norma culta is a written standard, not an accent.`,
      },
      {
        q: `Will I understand European Portuguese?`,
        a: `Written texts, yes, with a few vocabulary surprises. Speech is harder at first: European Portuguese drops many unstressed vowels, so it sounds faster and more consonant-heavy. Exposure fixes this quickly; the C1 level of this course compares the two varieties in depth.`,
      },
    ],
    related: ["spoken-brazilian-portuguese", "pronoun-placement-in-writing", "register-and-the-written-norm", "pronunciation-and-accents", "brazilian-vs-european-portuguese", "linguistic-variation"],
    lessons: [
      "b2-regional-vocabulary",
      "b2-regional-accents",
      "b2-tu-regional",
      "b2-portugal-vs-brazil-grammar",
      "b2-portugal-vs-brazil-words",
      "b2-contrast-br-pt",
      "b2-dialogue-travel-north",
      "b2-linguistic-prejudice",
      "b2-mission-regional-guide",
      "b2-spiral-varieties",
      "b2-varieties-extra-1",
      "b2-varieties-extra-2",
      "b2-varieties-extra-3",
    ],
  },
  {
    slug: "adjective-position-and-gender-traps",
    title: "Um Grande Homem, Um Homem Grande: Nouns and Adjectives",
    description:
      "The trickier corners of Brazilian Portuguese nouns and adjectives: masculine -ma nouns, nouns whose gender changes their meaning, plurals in -ão and of compound nouns, adjectives that change meaning with position, and augmentatives with attitude.",
    level: "B2",
    intro: [
      `By B2 your basic gender and agreement are solid; what remains are the traps. "O problema" is masculine although it ends in "-a"; "o capital" is money but "a capital" is a city; "um velho amigo" is an old friend you've known for years, while "um amigo velho" is a friend who is old.`,
      `These details rarely block understanding, but they are exactly what separates a fluent B2 text from an intermediate one, and they are favorite targets in exams.`,
    ],
    sections: [
      {
        heading: `Gender traps`,
        body: [
          `Most nouns from Greek ending in "-ma" are masculine: "o problema", "o sistema", "o tema", "o programa", "o clima", "o idioma", "o diploma", "o esquema". So are "o mapa", "o dia" and "o planeta". Nouns in "-gem" are feminine ("a viagem", "a garagem", "a mensagem"; "o personagem" is the common exception, and "a personagem" is also accepted), as are most in "-dade" and "-ção".`,
          `Some nouns change meaning with gender. These are worth learning in pairs.`,
        ],
        table: {
          headers: ["Masculine", "Meaning", "Feminine", "Meaning"],
          rows: [
            ["o capital", "capital (money)", "a capital", "capital city"],
            ["o cabeça", "leader, ringleader", "a cabeça", "head"],
            ["o grama", "gram", "a grama", "grass"],
            ["o rádio", "radio set", "a rádio", "radio station"],
            ["o moral", "morale", "a moral", "morals, moral of a story"],
            ["o caixa", "cashier, checkout", "a caixa", "box"],
            ["o cura", "parish priest (rare in Brazil)", "a cura", "cure"],
          ],
        },
        examples: [
          { pt: "O problema é que o sistema caiu de novo.", en: "The problem is that the system has gone down again." },
          { pt: "Brasília é a capital do Brasil.", en: "Brasília is the capital of Brazil." },
          { pt: "Comprei duzentos gramas de queijo.", en: "I bought two hundred grams of cheese." },
          { pt: "As crianças estão brincando na grama.", en: "The children are playing on the grass." },
          { pt: "Paga no caixa, por favor.", en: "Please pay at the register." },
        ],
      },
      {
        heading: `Plurals: -ão and compound nouns`,
        body: [
          `Nouns in "-ão" have three plurals, and you have to learn which: most take "-ões" ("avião", "aviões"; "coração", "corações"), a few take "-ães" ("pão", "pães"; "capitão", "capitães") and a few "-ãos" ("mão", "mãos"; "irmão", "irmãos"; "cidadão", "cidadãos").`,
          `Compound nouns with a hyphen pluralize the parts that are nouns or adjectives, not verbs or invariable words: "segunda-feira" gives "segundas-feiras", "cachorro-quente" gives "cachorros-quentes", but "guarda-chuva" gives "guarda-chuvas" ("guarda" is a verb here) and "beija-flor" gives "beija-flores". With a preposition inside, only the first noun changes: "pé de moleque", "pés de moleque".`,
        ],
        table: {
          headers: ["Singular", "Plural", "Rule"],
          rows: [
            ["avião", "aviões", "most -ão nouns"],
            ["pão", "pães", "a few: -ães"],
            ["irmão", "irmãos", "a few: -ãos"],
            ["segunda-feira", "segundas-feiras", "numeral + noun: both"],
            ["cachorro-quente", "cachorros-quentes", "noun + adjective: both"],
            ["guarda-chuva", "guarda-chuvas", "verb + noun: noun only"],
            ["arranha-céu", "arranha-céus", "verb + noun: noun only"],
            ["pé de moleque", "pés de moleque", "with a preposition: first only"],
          ],
        },
        examples: [
          { pt: "Tenho reunião todas as segundas-feiras.", en: "I have a meeting every Monday." },
          { pt: "Esqueci os dois guarda-chuvas no carro.", en: "I left both umbrellas in the car." },
          { pt: "Ela tem três irmãos e duas irmãs.", en: "She has three brothers and two sisters." },
          { pt: "Os cidadãos têm direito à informação.", en: "Citizens have the right to information." },
        ],
      },
      {
        heading: `Adjectives that change meaning with position`,
        body: [
          `Most adjectives follow the noun. A few can go before it, and then their meaning shifts, usually from literal to figurative or evaluative. "Um homem grande" is a big man; "um grande homem" is a great man. "Um homem pobre" has no money; "um pobre homem" is a poor wretch you feel sorry for.`,
        ],
        table: {
          headers: ["Before the noun", "Meaning", "After the noun", "Meaning"],
          rows: [
            ["um grande homem", "a great man", "um homem grande", "a big man"],
            ["um pobre homem", "a poor (pitiable) man", "um homem pobre", "a man with no money"],
            ["um velho amigo", "a long-standing friend", "um amigo velho", "an elderly friend"],
            ["um certo dia", "one day, a certain day", "a resposta certa", "the right answer"],
            ["uma simples pergunta", "just a question", "uma pergunta simples", "an easy question"],
            ["a única pessoa", "the only person", "uma pessoa única", "a unique person"],
            ["um novo carro", "another car, a different car", "um carro novo", "a brand-new car"],
          ],
        },
        examples: [
          { pt: "Ela é uma velha amiga da faculdade.", en: "She's an old friend from college." },
          { pt: "Santos Dumont foi um grande inventor.", en: "Santos Dumont was a great inventor." },
          { pt: "Certo dia, ele simplesmente foi embora.", en: "One day, he simply left." },
          { pt: "Comprei um carro usado, mas para mim é um novo carro.", en: "I bought a used car, but for me it's a new car." },
          { pt: "Foi uma simples pergunta, não precisa ficar bravo.", en: "It was just a question, no need to get angry." },
        ],
      },
      {
        heading: `Size and attitude: carrão, jeitinho, filminho`,
        body: [
          `Brazilian augmentatives and diminutives often express attitude more than size. "-ão" can praise ("um carrão", a great car; "um golaço", a superb goal) or simply intensify ("um calorão"). "-inho" can be affectionate ("o cafezinho"), polite ("só um minutinho"), or dismissive ("um filminho qualquer"). "O jeitinho brasileiro", the Brazilian knack for getting around rules, is a whole cultural concept in one diminutive.`,
        ],
        examples: [
          { pt: "Nossa, que carrão!", en: "Wow, what a car!" },
          { pt: "Só um minutinho, já te atendo.", en: "Just a moment, I'll be right with you." },
          { pt: "Foi um filminho bobo, mas a gente riu muito.", en: "It was a silly little movie, but we laughed a lot." },
          { pt: "Com um jeitinho, a gente resolve.", en: "We'll sort it out somehow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A problema é grave.",
        right: "O problema é grave.",
        why: `"Problema" is masculine despite the "-a", like "sistema", "tema" and "clima".`,
      },
      {
        wrong: "Esqueci meus guardas-chuva.",
        right: "Esqueci meus guarda-chuvas.",
        why: `In verb + noun compounds only the noun goes plural.`,
      },
      {
        wrong: "O grama do jardim está alto.",
        right: "A grama do jardim está alta.",
        why: `Grass is feminine: "a grama". "O grama" is the unit of weight.`,
      },
      {
        wrong: "Ele é um amigo velho, a gente se conhece há vinte anos.",
        right: "Ele é um velho amigo, a gente se conhece há vinte anos.",
        why: `A long-standing friend is "um velho amigo"; "um amigo velho" says he's elderly.`,
      },
      {
        wrong: "Isso é inpossível.",
        right: "Isso é impossível.",
        why: `Before "p" and "b", Portuguese writes "m": "impossível", "imbatível".`,
      },
      {
        wrong: "Os cidadões votaram.",
        right: "Os cidadãos votaram.",
        why: `"Cidadão" is one of the few nouns with the plural "-ãos".`,
      },
    ],
    faqs: [
      {
        q: `Is there a rule for the -ão plurals?`,
        a: `Not a reliable one. "-ões" is the default and covers most words, including all those in "-ção". Learn the common exceptions: "pães", "cães", "alemães", "capitães"; "mãos", "irmãos", "cidadãos", "cristãos", "órgãos". A few accept two or three plurals ("verões" or "verãos").`,
      },
      {
        q: `Can any adjective go before the noun?`,
        a: `Many can, for emphasis or style, especially in writing: "uma linda tarde", "um ótimo trabalho". With most of them the meaning doesn't change; it just sounds more subjective. The pairs in the table are the ones where it does.`,
      },
    ],
    related: ["gender-articles-plurals", "adjective-agreement", "comparatives-superlatives", "register-and-the-written-norm", "diminutives-augmentatives"],
    lessons: [
      "b2-gender-traps",
      "b2-compound-plurals",
      "b2-adjective-position",
      "b2-word-formation",
      "b2-augmentatives-attitude",
      "b2-contrast-adjective-position",
      "b2-dialogue-reviews",
      "b2-error-hunt-nouns",
      "b2-transform-word-families",
      "b2-spiral-nouns",
      "b2-nouns-extra-1",
      "b2-nouns-extra-2",
      "b2-nouns-extra-3",
    ],
  },
  {
    slug: "verb-expressions-dar-ficar-pegar",
    title: "Dar Certo, Ficar De, Pegar Mal: Everyday Verb Expressions",
    description:
      "The high-frequency Brazilian Portuguese expressions built on dar, ficar, pegar, levar and fazer (dar certo, dar um jeito, dar uma olhada, ficar de, ficar sabendo, pegar mal, levar a sério, fazer questão), and the English-based traps to avoid.",
    level: "B2",
    intro: [
      `A small set of verbs does an enormous amount of work in Brazilian Portuguese. "Dar" alone gives you "dar certo" (work out), "dar um jeito" (find a way), "não dá" (it's not possible), "dar uma olhada" (have a look). "Ficar" gives you "fiquei de ligar" (I said I'd call) and "fiquei sabendo" (I found out).`,
      `These expressions are grammar as much as vocabulary: each has a fixed structure (a preposition, an infinitive, an article) that has to be right. And English pulls learners toward literal translations that don't exist, like "fazer uma decisão".`,
    ],
    sections: [
      {
        heading: `Dar: it works, it's possible, a quick action`,
        body: [
          `"Dar certo" and "dar errado" (work out, go wrong) take no object: "a viagem deu certo". "Dar para" + infinitive, usually "dá pra", means it's possible: "dá pra ir a pé?" (can you walk there?), "não dá" (it's not possible, I can't make it). With a person, use "dá pra eu", not "dá pra mim": "não dá pra eu ir hoje".`,
          `"Dar uma" + noun describes a quick, casual action, often softening a request: "dar uma olhada" (have a look), "dar uma volta" (go for a walk or a spin), "dar uma passada" (drop by), "dar uma pensada" (give it some thought), "dar uma saída" (step out). The noun is often made from a verb with "-ada".`,
        ],
        table: {
          headers: ["Expression", "Meaning", "Example"],
          rows: [
            ["dar certo, dar errado", "work out, go wrong", "Tomara que dê certo!"],
            ["dá pra, não dá", "it's possible, it's not", "Não dá pra chegar antes das oito."],
            ["dar um jeito", "find a way, sort it out", "A gente dá um jeito."],
            ["dar bola para", "pay attention to, give the time of day", "Ele nem me deu bola."],
            ["dar uma olhada em", "have a look at", "Dá uma olhada nesse relatório?"],
            ["dar uma passada", "drop by", "Vou dar uma passada na sua casa."],
            ["dar de cara com", "run into", "Dei de cara com meu ex no mercado."],
            ["dar-se bem com", "get along with", "Ela se dá bem com todo mundo."],
          ],
        },
        examples: [
          { pt: "No fim, deu tudo certo.", en: "In the end, it all worked out." },
          { pt: "Hoje não dá, mas amanhã eu posso.", en: "Today I can't, but tomorrow I can." },
          { pt: "Você pode dar uma olhada no meu texto?", en: "Can you have a look at my text?" },
          { pt: "Vou dar uma saída e já volto.", en: "I'm just stepping out, I'll be right back." },
          { pt: "Não dá pra eu te encontrar no almoço.", en: "I can't meet you for lunch." },
        ],
      },
      {
        heading: `Ficar: to agree to, find out, stay, become`,
        body: [
          `"Ficar de" + infinitive means to say you'll do something, to agree or promise to: "fiquei de ligar pra ela" (I said I'd call her), "ele ficou de mandar o arquivo" (he was supposed to send the file). "Ficar sabendo" means find out, hear: "fiquei sabendo que você vai se mudar".`,
          `"Ficar" also covers become with feelings and states ("fiquei feliz", "ficou doente"), suit ("essa cor fica bem em você"), be located ("onde fica o banheiro?"), and be postponed ("a reunião ficou para sexta"). "Ficar com" can mean keep ("pode ficar com o troco") or, between young people, hook up with.`,
        ],
        examples: [
          { pt: "Fiquei de passar na casa da minha mãe hoje.", en: "I told my mom I'd drop by today." },
          { pt: "Você ficou sabendo da notícia?", en: "Did you hear the news?" },
          { pt: "A festa ficou para o mês que vem.", en: "The party has been put off until next month." },
          { pt: "Pode ficar com o troco.", en: "Keep the change." },
          { pt: "Esse vestido ficou ótimo em você!", en: "That dress looks great on you!" },
        ],
      },
      {
        heading: `Pegar, levar, fazer, and the English traps`,
        body: [
          `"Pegar mal" (look bad, go down badly), "pegar no pé" (nag, be on someone's case), "pegar fogo" (catch fire); "levar a sério" (take seriously), "levar jeito para" (have a knack for), "levar tempo" (take time); "fazer questão de" (insist on, make a point of), "fazer falta" (be missed), "fazer de conta" (pretend), "fazer sentido" (make sense).`,
          `English collocations don't transfer. You "tomar uma decisão", not "fazer"; "tirar uma foto", not "tomar"; "perceber" something, not "realizar" it ("realizar" means carry out, fulfill); "candidatar-se a uma vaga", not "aplicar para".`,
        ],
        table: {
          headers: ["English", "Not", "Portuguese"],
          rows: [
            ["make a decision", "fazer uma decisão", "tomar uma decisão"],
            ["take a photo", "tomar uma foto", "tirar uma foto"],
            ["realize", "realizar", "perceber, se dar conta"],
            ["apply for a job", "aplicar para uma vaga", "candidatar-se a uma vaga"],
            ["pay attention", "pagar atenção", "prestar atenção"],
            ["have a good time", "ter um bom tempo", "se divertir"],
          ],
        },
        examples: [
          { pt: "Chegar atrasado na entrevista pega muito mal.", en: "Showing up late to the interview looks really bad." },
          { pt: "Minha mãe vive pegando no meu pé.", en: "My mom is always on my case." },
          { pt: "Ela leva jeito para a música.", en: "She has a gift for music." },
          { pt: "Faço questão de pagar o jantar.", en: "I insist on paying for dinner." },
          { pt: "Você faz muita falta aqui no escritório.", en: "We really miss you here at the office." },
          { pt: "Só percebi o erro depois de enviar o e-mail.", en: "I only realized the mistake after sending the email." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Preciso fazer uma decisão.",
        right: "Preciso tomar uma decisão.",
        why: `Decisions are "tomadas" in Portuguese, not "feitas".`,
      },
      {
        wrong: "Eu não realizei que era tão tarde.",
        right: "Eu não percebi que era tão tarde.",
        why: `"Realizar" means carry out or fulfill ("realizar um sonho"). To realize is "perceber" or "se dar conta".`,
      },
      {
        wrong: "Não dá pra mim ir hoje.",
        right: "Não dá pra eu ir hoje.",
        why: `The person is the subject of "ir", so "eu".`,
      },
      {
        wrong: "Vou dar um modo nisso.",
        right: "Vou dar um jeito nisso.",
        why: `The fixed expression is "dar um jeito": the words inside an idiom can't be swapped.`,
      },
      {
        wrong: "Dá uma olhada o relatório.",
        right: "Dá uma olhada no relatório.",
        why: `"Dar uma olhada" takes "em": "no relatório", "nessa foto".`,
      },
    ],
    faqs: [
      {
        q: `Are these expressions informal?`,
        a: `Most are neutral and appear in conversation, messages and informal writing. "Dar certo", "ficar de", "fazer questão" and "levar a sério" are fine in a work email too. Idioms like "pegar no pé" or "dar bola" are casual; leave them out of formal texts.`,
      },
      {
        q: `"Ficar de" or "ficar a"?`,
        a: `In Brazil it's "ficar de" + infinitive for agreeing to do something. "Ficar a" + infinitive is European for a progressive ("ficou a olhar"), which Brazil says with the gerund: "ficou olhando".`,
      },
    ],
    related: ["spoken-brazilian-portuguese", "register-and-the-written-norm", "personal-infinitive", "ficar-meanings"],
    lessons: [
      "b2-dar-expressions",
      "b2-ficar-pegar-levar",
      "b2-idioms-in-context",
      "b2-contrast-literal-idiom",
      "b2-error-hunt-idioms",
      "b2-idioms-extra-1",
      "b2-error-hunt-business",
    ],
  },
  {
    slug: "narrative-tenses",
    title: "Chegou, Chegava, Tinha Chegado: Narrating in Portuguese",
    description:
      "How to tell a story in Brazilian Portuguese with all the past tenses together, the historical present, time connectors like de repente and mal, description with participles and gerunds, and dialogue with the travessão.",
    level: "B2",
    intro: [
      `A good story in Portuguese moves between tenses with purpose: the imperfeito paints the scene ("era uma noite quente"), the perfeito pushes the action forward ("de repente, a luz acabou"), the mais-que-perfeito reaches back ("eu tinha esquecido a lanterna"), and "estava" + gerund catches actions in progress ("estávamos jantando").`,
      `At B2 you also need the tools of style: the historical present that Brazilians use to make anecdotes vivid ("aí ele chega e fala..."), connectors that control pace ("mal", "de repente", "no instante em que"), and the conventions of dialogue in Portuguese texts, which uses a dash, not quotation marks.`,
    ],
    sections: [
      {
        heading: `All the past tenses together`,
        body: [
          `Each tense has a job. Ask what the sentence does in the story: does it move the plot forward, describe the background, go back in time, or show something in progress when something else happened?`,
        ],
        table: {
          headers: ["Tense", "Job in a story", "Example"],
          rows: [
            ["imperfeito", "background, description, habits", "Era tarde e chovia muito."],
            ["estava + gerund", "action in progress", "Eu estava saindo do trabalho..."],
            ["perfeito", "events that move the story on", "...quando o telefone tocou."],
            ["mais-que-perfeito", "something earlier", "Eu tinha deixado o guarda-chuva em casa."],
            ["futuro do pretérito, ia", "the future seen from the past", "Mal sabia eu que aquele dia ia mudar tudo."],
          ],
        },
        examples: [
          { pt: "Era domingo, e a praia estava lotada.", en: "It was Sunday, and the beach was packed." },
          { pt: "A gente estava tomando um mate quando começou a ventar.", en: "We were having a mate tea when the wind picked up." },
          { pt: "De repente, o céu ficou escuro.", en: "Suddenly the sky went dark." },
          { pt: "Ninguém tinha olhado a previsão do tempo.", en: "Nobody had checked the weather forecast." },
          { pt: "Ainda não sabíamos que aquela tarde ia virar história de família.", en: "We didn't know yet that the afternoon would become a family story." },
        ],
      },
      {
        heading: `The historical present and time connectors`,
        body: [
          `In spoken anecdotes Brazilians often switch to the present at the key moment, usually with "aí": "aí ele chega, olha pra mim e fala: cadê o dinheiro?". In writing, the present is also standard for plot summaries of movies and books ("no filme, uma família se muda para o sertão").`,
          `Connectors set the pace: "de repente" (suddenly), "de uma hora para outra" (out of the blue), "no instante em que" (the moment that), "assim que" and "logo que" (as soon as), "mal" + perfeito (no sooner had... than): "mal cheguei, começou a chover". Vary them instead of repeating "e depois".`,
        ],
        examples: [
          { pt: "Aí ela entra na sala e todo mundo fica em silêncio.", en: "Then she walks into the room and everyone goes quiet. (anecdote)" },
          { pt: "Mal saímos de casa, começou a chover.", en: "No sooner had we left the house than it started raining." },
          { pt: "No instante em que abri a porta, o cachorro fugiu.", en: "The moment I opened the door, the dog ran off." },
          { pt: "De uma hora para outra, a rua ficou vazia.", en: "All of a sudden, the street was empty." },
        ],
      },
      {
        heading: `Description, dialogue and speech`,
        body: [
          `Participles and gerunds compress description: "sentado no banco, olhando o mar, ele lembrou da infância" (sitting on the bench, looking at the sea, he remembered his childhood). Participles agree with the noun ("sentada", "sentados"); gerunds never change.`,
          `Portuguese fiction marks dialogue with the travessão, a long dash, at the start of each line, and again before the narrator's words: "— Você vem? — perguntou ela." Indirect speech follows the tense shifts of reported speech ("ela perguntou se eu ia"). Free indirect speech, common in crônicas and novels, slips the character's thoughts into the narration without "disse que": "Ela olhou o relógio. Ia chegar atrasada de novo."`,
        ],
        examples: [
          { pt: "Sentada na varanda, ela observava o movimento da rua.", en: "Sitting on the veranda, she watched the street go by." },
          { pt: "Ele saiu correndo, sem olhar para trás.", en: "He ran off without looking back." },
          { pt: "— Você vem com a gente? — perguntou o Lucas.", en: "'Are you coming with us?' asked Lucas." },
          { pt: "O Lucas perguntou se eu ia com eles.", en: "Lucas asked whether I was going with them." },
          { pt: "Olhou o celular de novo. Nada. Será que ela tinha esquecido?", en: "He looked at his phone again. Nothing. Had she forgotten?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mal eu chego, começou a chover.",
        right: "Mal cheguei, começou a chover.",
        why: `"Mal" in the sense of no sooner than takes the perfeito.`,
      },
      {
        wrong: "Ontem eu ia ao cinema e via um filme ótimo.",
        right: "Ontem eu fui ao cinema e vi um filme ótimo.",
        why: `Single completed events take the perfeito; the imperfeito would describe a habit or background.`,
      },
      {
        wrong: "Quando chegamos, o show já começou.",
        right: "Quando chegamos, o show já tinha começado.",
        why: `An event before another past event takes the mais-que-perfeito.`,
      },
      {
        wrong: "“Você vem?”, ela perguntou.",
        right: "— Você vem? — ela perguntou.",
        why: `Portuguese fiction marks dialogue with the travessão rather than quotation marks.`,
      },
      {
        wrong: "Acordei, e depois tomei café, e depois saí, e depois peguei o ônibus.",
        right: "Acordei, tomei café e saí. Logo depois, peguei o ônibus.",
        why: `Repeating "e depois" flattens a story; vary connectors and let the perfeito carry the sequence.`,
      },
    ],
    faqs: [
      {
        q: `Can I mix the present and past in one story?`,
        a: `In speech, yes: anecdotes often start in the past and jump to the present at the climax. In writing, choose one frame and switch only deliberately, for effect.`,
      },
      {
        q: `What is a crônica?`,
        a: `A short, personal prose piece about everyday life, a very Brazilian genre published in newspapers and collected in books (Rubem Braga, Fernando Sabino, Luis Fernando Verissimo). It's a great model for B2 narrative: conversational, precise and full of free indirect speech.`,
      },
      {
        q: `How do European Portuguese stories differ?`,
        a: `The tenses and dialogue conventions are the same. The visible difference is the progressive: European narrative says "estávamos a jantar" where Brazil says "estávamos jantando".`,
      },
    ],
    related: ["mais-que-perfeito", "perfeito-vs-imperfeito", "reported-speech", "preterito-perfeito-composto"],
    lessons: [
      "b2-narrative-tenses",
      "b2-historical-present",
      "b2-speech-in-stories",
      "b2-time-connectors-narrative",
      "b2-description-participles",
      "b2-cronica",
      "b2-contrast-narrative-tenses",
      "b2-error-hunt-narrative",
      "b2-build-up-cronica",
      "b2-spiral-narrative",
      "b2-narrative-extra-1",
      "b2-narrative-extra-2",
      "b2-narrative-extra-3",
    ],
  },
];
