// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-guides-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { PtGrammarGuide } from "./pt-types";

// Brazilian Portuguese grammar guides, C1 (see the notes at the top of ./pt-types.ts).
export const PT_C1_GUIDES: PtGrammarGuide[] = [
  {
    slug: "mood-as-meaning",
    title: "Mood as Meaning: When the Subjunctive Changes the Message",
    description:
      "Advanced indicative vs subjunctive choices where both are grammatical but say different things: relative clauses, superlatives and \"o único que\", \"o fato de que\", \"talvez\" before and after the verb, and verbs whose meaning shifts with the mood.",
    level: "C1",
    intro: [
      `At the Intermediate levels you learned the subjunctive as a list of triggers: "quero que", "espero que", "embora", "para que". At the Advanced level the triggers matter less than the message. The indicative asserts: the speaker presents something as real and known. The subjunctive does not assert: it presents something as hypothetical, unknown, wished for, evaluated or simply not the point of the sentence.`,
      `That is why many sentences can take either mood. "Procuro um apartamento que tem varanda" and "Procuro um apartamento que tenha varanda" are both correct, and a Brazilian hears the difference at once. This guide collects the pairs where the choice is yours, and tells you what each choice says.`,
    ],
    sections: [
      {
        heading: `Relative clauses: the one you know vs any one that fits`,
        body: [
          `In a relative clause, the indicative says the thing exists and you have a particular one in mind. The subjunctive says you are describing a type: you don't know whether such a thing exists, or any example will do. English often makes no difference here (I'm looking for a flat that has a balcony), so English speakers default to the indicative and lose the nuance.`,
          `When the antecedent is negative ("ninguém", "nada", "nenhum") or questioned ("Você conhece alguém que...?"), the subjunctive is the norm, because nothing is being asserted to exist. "Não há ninguém que saiba" is the only written form; "que sabe" here is a slip.`,
        ],
        table: {
          headers: ["Indicative (it exists, I mean this one)", "Subjunctive (any one with this property)"],
          rows: [
            ["Procuro um apartamento que tem varanda. (I saw it online)", "Procuro um apartamento que tenha varanda. (any flat, if there is one)"],
            ["Conheço uma pessoa que fala japonês.", "Você conhece alguém que fale japonês?"],
            ["Contratamos uma assistente que entende de contabilidade.", "Precisamos de uma assistente que entenda de contabilidade."],
            ["Tem um restaurante aqui que abre aos domingos.", "Não há nenhum restaurante aqui que abra aos domingos."],
          ],
        },
        examples: [
          { pt: "Quero morar num bairro que seja tranquilo e tenha boas escolas.", en: "I want to live in a neighbourhood that's quiet and has good schools (whichever one that turns out to be)." },
          { pt: "Moro num bairro que é tranquilo e tem boas escolas.", en: "I live in a neighbourhood that is quiet and has good schools." },
          { pt: "Não encontrei nada que me agradasse.", en: "I didn't find anything I liked." },
          { pt: "Existe algum remédio que funcione para isso?", en: "Is there any medicine that works for this?" },
        ],
      },
      {
        heading: `Superlatives, "o único", "o primeiro"`,
        body: [
          `After a superlative or a word like "o único", "o primeiro", "o último" or "o maior", both moods occur. The indicative states your experience as a fact: "É o melhor filme que eu já vi." This is what you hear in conversation. The subjunctive frames the claim as limited by your knowledge, roughly as far as I've seen: "É o melhor filme que eu já tenha visto." It sounds more careful and more formal, and it is preferred in essays and reviews.`,
          `With "o único que", the indicative states a fact about the world ("Ele é o único que sabe a senha": there is one person, and it's him). The subjunctive turns it into a hedged or hypothetical claim ("Ele é talvez o único que saiba a senha"). Examiners in formal writing often expect the subjunctive in evaluative statements: "a única solução que resolva o problema".`,
        ],
        table: {
          headers: ["Indicative (fact, speech)", "Subjunctive (hedged, formal)"],
          rows: [
            ["É o livro mais bonito que eu já li.", "É o livro mais bonito que eu já tenha lido."],
            ["Ela foi a primeira mulher que governou o estado.", "Ela é, ao que tudo indica, a primeira mulher que tenha governado o estado."],
            ["Ele é o único que conhece o sistema.", "Talvez seja o único que conheça o sistema."],
            ["Foi a pior decisão que o conselho tomou.", "Foi a pior decisão que o conselho já tenha tomado."],
          ],
        },
        examples: [
          { pt: "Esta é, sem dúvida, a obra mais ambiciosa que o autor já tenha publicado.", en: "This is undoubtedly the most ambitious work the author has ever published." },
          { pt: "Você é a única pessoa que me entende.", en: "You're the only person who understands me." },
          { pt: "Não há solução que agrade a todos.", en: "There's no solution that pleases everyone." },
        ],
      },
      {
        heading: `Fact or hypothesis: "o fato de", "talvez", "supondo que", "não sabia que / se"`,
        body: [
          `"O fato de" introduces something that is true, yet the subjunctive is common after "o fato de que", because the clause is the topic being evaluated, not new information: "O fato de que ele tenha mentido não muda nada." The indicative stresses that it really happened: "O fato de que ele mentiu está comprovado." The most natural option in both speech and writing is often the infinitive: "O fato de ele ter mentido não muda nada."`,
          `"Talvez" before the verb takes the subjunctive ("Talvez ele venha"). Put "talvez" after the verb, as an afterthought, and the verb is indicative: "Ele vem, talvez." Hypothesis openers ("supondo que", "admitindo que", "caso", "a não ser que") always take the subjunctive.`,
          `"Não sabia que" presupposes the fact is true: "Não sabia que ela era casada" (she is, and I didn't know). "Não sabia se" leaves it open: "Não sabia se ela era casada."`,
        ],
        examples: [
          { pt: "O fato de o projeto ter atrasado não surpreendeu ninguém.", en: "The fact that the project was delayed surprised no one." },
          { pt: "Talvez a reunião seja adiada.", en: "Perhaps the meeting will be postponed." },
          { pt: "A reunião vai ser adiada, talvez.", en: "The meeting is going to be postponed, maybe." },
          { pt: "Supondo que o orçamento seja aprovado, quando começamos?", en: "Supposing the budget is approved, when do we start?" },
          { pt: "Eu não sabia que você falava alemão.", en: "I didn't know you spoke German." },
        ],
      },
      {
        heading: `Verbs that change meaning with the mood`,
        body: [
          `A handful of verbs take either mood, and the mood changes what the verb means. With the indicative they report or perceive; with the subjunctive they order, regret, allow or sympathise. Reading these correctly is a typical Celpe-Bras comprehension point.`,
        ],
        table: {
          headers: ["Verb", "+ indicative", "+ subjunctive"],
          rows: [
            ["dizer", "Ele disse que você vem. (reports)", "Ele disse que você venha. (tells you to come)"],
            ["sentir", "Sinto que você está triste. (I sense)", "Sinto muito que você esteja triste. (I'm sorry)"],
            ["entender", "Entendo que o prazo é amanhã. (I understand the fact)", "Entendo que você esteja chateado. (I see why you're upset)"],
            ["admitir", "Admito que errei. (I confess)", "Não admito que você fale assim. (I won't allow)"],
            ["insistir", "Ela insiste que está certa. (claims)", "Ela insiste que a gente fique. (demands)"],
          ],
        },
        examples: [
          { pt: "O médico disse que eu estava bem.", en: "The doctor said I was fine." },
          { pt: "O médico disse que eu descansasse por uma semana.", en: "The doctor told me to rest for a week." },
          { pt: "Compreendo que a situação seja difícil para todos.", en: "I appreciate that the situation is difficult for everyone." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Não há ninguém aqui que sabe falar inglês.",
        right: "Não há ninguém aqui que saiba falar inglês.",
        why: `A negative antecedent ("ninguém", "nada", "nenhum") asserts nothing, so the relative clause takes the subjunctive.`,
      },
      {
        wrong: "Talvez ele vem amanhã.",
        right: "Talvez ele venha amanhã.",
        why: `"Talvez" before the verb takes the subjunctive. The indicative is heard in very casual speech but marks a learner in writing.`,
      },
      {
        wrong: "Não acho que é uma boa ideia.",
        right: "Não acho que seja uma boa ideia.",
        why: `"Acho que" asserts, so it takes the indicative; "não acho que" denies, so the norm requires the subjunctive.`,
      },
      {
        wrong: "Supondo que ele aceita a proposta, quem vai assinar?",
        right: "Supondo que ele aceite a proposta, quem vai assinar?",
        why: `"Supondo que" and "admitindo que" introduce a hypothesis: always subjunctive.`,
      },
      {
        wrong: "O chefe disse que eu chego mais cedo amanhã.",
        right: "O chefe disse que eu chegasse mais cedo amanhã.",
        why: `If the boss gave an order, the reported verb is subjunctive (here imperfect, after a past verb). The indicative would mean he simply stated a fact about your arrival.`,
      },
    ],
    faqs: [
      {
        q: `Is "É o melhor filme que eu já vi" wrong?`,
        a: `No. It's what almost everyone says, and it is correct. The subjunctive "que eu já tenha visto" is a stylistic option that hedges the claim and sounds more formal. Use it in essays, reviews and speeches; use either in conversation.`,
      },
      {
        q: `Why is "o fato de que" followed by the subjunctive if it's a fact?`,
        a: `Because the subjunctive in Portuguese marks non-assertion, not unreality. A clause that is already known and is being commented on ("O fato de que ele tenha vindo me deixou feliz") isn't the new information in the sentence, so it isn't asserted. The same logic explains the subjunctive after emotions: "Fico feliz que você tenha vindo."`,
      },
      {
        q: `Which mood should I choose when I'm not sure?`,
        a: `Ask whether you are telling the listener that something is true. If yes, indicative. If you are wishing, supposing, doubting, describing a type, or commenting on something already known, subjunctive.`,
      },
    ],
    related: ["subjunctive-fixed-expressions", "infinitive-or-subjunctive", "present-subjunctive", "imperfect-subjunctive", "future-subjunctive", "subjunctive-in-descriptions"],
    lessons: [
      "c1-mood-meaning",
      "c1-subjunctive-superlatives",
      "c1-contrast-mood-pairs",
      "c1-error-hunt-subjunctive-c1",
      "c1-transform-assertion",
      "c1-spiral-subjunctive-c1",
      "c1-mood-meaning-unit-review",
      "c1-subjunctive-extra-1",
      "c1-subjunctive-extra-2",
    ],
  },
  {
    slug: "subjunctive-fixed-expressions",
    title: "Que Eu Saiba, Seja Como For, Quer Queira Quer Não: Fixed Subjunctive Expressions",
    description:
      "The fixed subjunctive formulas of educated Portuguese: hedges like \"que eu saiba\", the reduplicated concessive (\"aconteça o que acontecer\", \"digam o que disserem\"), \"quer... quer\" and \"seja... seja\", and wishes with \"tomara\", \"quem me dera\", \"oxalá\" and \"Deus queira\".",
    level: "C1",
    intro: [
      `Some of the most useful subjunctives in Portuguese live inside fixed expressions. They are short, frequent, and impossible to build from the rules alone: "que eu saiba" (as far as I know), "seja como for" (be that as it may), "custe o que custar" (whatever it takes), "quer queira, quer não" (like it or not).`,
      `They are also a register marker. Used well, they make your Portuguese sound educated and fluent; used with the wrong tense ("digam o que dizem") they are the clearest sign of a learner. This guide gives you the expressions, the pattern behind the reduplicated ones, and the tense changes in the past.`,
    ],
    sections: [
      {
        heading: `Hedges: "que eu saiba", "que eu me lembre"`,
        body: [
          `"Que" + present subjunctive of a verb of knowing or remembering limits a statement to your own knowledge. These are fixed: the verb is always subjunctive, and they usually come at the start or end of the sentence, separated by a comma.`,
        ],
        table: {
          headers: ["Expression", "Meaning", "Register"],
          rows: [
            ["que eu saiba", "as far as I know", "all registers"],
            ["que eu me lembre", "as far as I remember", "all registers"],
            ["que se saiba", "as far as anyone knows", "formal, press"],
            ["que eu tenha visto / notado", "as far as I've seen / noticed", "neutral"],
            ["pelo que eu sei (indicative)", "from what I know", "everyday alternative"],
          ],
        },
        examples: [
          { pt: "Que eu saiba, a loja abre às nove.", en: "As far as I know, the shop opens at nine." },
          { pt: "Ninguém reclamou, que eu me lembre.", en: "Nobody complained, as far as I remember." },
          { pt: "Que se saiba, o acordo ainda não foi assinado.", en: "As far as anyone knows, the agreement hasn't been signed yet." },
        ],
      },
      {
        heading: `Whatever, whoever, wherever: the reduplicated concessive`,
        body: [
          `Portuguese says whatever happens by repeating the verb: present subjunctive + "o que" / "quem" / "onde" / "como" / "quanto" + future subjunctive of the same verb. "Aconteça o que acontecer" is literally may happen what happens. The first verb is always the present subjunctive, the second always the future subjunctive.`,
          `In a past narrative, both verbs move to the imperfect subjunctive: "Fizesse o que fizesse, ele nunca estava satisfeito." "Ser" has two common fixed forms: "seja como for" (be that as it may) and "seja o que for" (whatever it is), plus the emphatic "seja lá o que for".`,
        ],
        table: {
          headers: ["Expression", "Meaning", "Past narrative"],
          rows: [
            ["aconteça o que acontecer", "whatever happens", "acontecesse o que acontecesse"],
            ["digam o que disserem", "whatever they say", "dissessem o que dissessem"],
            ["faça o que fizer", "whatever you / he does", "fizesse o que fizesse"],
            ["custe o que custar", "whatever it takes / costs", "custasse o que custasse"],
            ["venha quem vier", "whoever comes", "viesse quem viesse"],
            ["esteja onde estiver", "wherever he / she is", "estivesse onde estivesse"],
            ["haja o que houver", "come what may", "houvesse o que houvesse"],
            ["doa a quem doer", "no matter who gets hurt", "doesse a quem doesse"],
            ["seja como for", "be that as it may, anyway", "fosse como fosse"],
          ],
        },
        examples: [
          { pt: "Aconteça o que acontecer, eu vou estar do seu lado.", en: "Whatever happens, I'll be on your side." },
          { pt: "O governo prometeu investigar o caso, doa a quem doer.", en: "The government promised to investigate the case, no matter who gets hurt." },
          { pt: "Seja como for, o prazo continua sendo sexta-feira.", en: "Be that as it may, the deadline is still Friday." },
          { pt: "Dissessem o que dissessem, ela não mudava de opinião.", en: "Whatever they said, she wouldn't change her mind." },
        ],
      },
      {
        heading: `Either way: "quer... quer", "seja... seja"`,
        body: [
          `"Quer... quer" (whether... or) is the subjunctive of "querer" frozen into a conjunction. Each half takes the subjunctive: "Quer chova, quer faça sol, a feira acontece." The most frequent instance is "quer queira, quer não" (whether you like it or not), often shortened to "queira ou não" in speech. In the past: "quisesse ou não".`,
          `"Seja... seja" links two nouns or phrases: "seja no Brasil, seja no exterior" (whether in Brazil or abroad). The norm pairs "quer" with "quer" and "seja" with "seja"; mixing them ("quer... ou") is criticised by grammarians in formal texts.`,
        ],
        examples: [
          { pt: "Quer você goste, quer não, a decisão está tomada.", en: "Whether you like it or not, the decision has been made." },
          { pt: "Queira ou não, vai ter que conversar com ele.", en: "Like it or not, you'll have to talk to him." },
          { pt: "Seja por falta de tempo, seja por falta de interesse, ninguém respondeu.", en: "Whether for lack of time or lack of interest, nobody answered." },
        ],
      },
      {
        heading: `Wishes, blessings and exclamations`,
        body: [
          `"Tomara que" + present subjunctive is the everyday way to hope for something possible: "Tomara que dê certo!" With the imperfect subjunctive it becomes a wish you doubt: "Tomara que fosse verdade." "Tomara!" alone means I hope so.`,
          `"Quem me dera" expresses a wish for something unlikely or impossible (if only): with an infinitive when the subject is "eu" ("Quem me dera ter tempo"), with "que" + imperfect subjunctive otherwise ("Quem me dera que ele voltasse"). "Oxalá" (a word of Arabic origin) is literary or religious; "Deus queira que" (God willing) is common and carries a religious tone that many Brazilians use without thinking about it. Blessings and curses use bare "que" + subjunctive: "Que você seja muito feliz!"`,
        ],
        table: {
          headers: ["Expression", "Use", "Example"],
          rows: [
            ["tomara que + presente", "hope (possible)", "Tomara que não chova amanhã."],
            ["tomara que + imperfeito", "wish (doubtful)", "Tomara que fosse fácil assim."],
            ["quem me dera + infinitivo", "if only (I)", "Quem me dera morar na praia."],
            ["quem me dera que + imperfeito", "if only (someone else)", "Quem me dera que ela ligasse."],
            ["oxalá + subjuntivo", "may it be so (literary)", "Oxalá a paz chegue logo."],
            ["Deus queira que", "God willing", "Deus queira que dê tudo certo."],
            ["que + subjuntivo", "blessing / wish", "Que Deus te abençoe."],
          ],
        },
        examples: [
          { pt: "Tomara que o voo não atrase!", en: "I hope the flight isn't delayed!" },
          { pt: "Quem me dera ter sabido disso antes.", en: "If only I'd known that earlier." },
          { pt: "Que vocês sejam muito felizes juntos!", en: "May you be very happy together!" },
          { pt: "Deus me livre de passar por isso de novo.", en: "God forbid I go through that again." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Que eu sei, ele já foi embora.",
        right: "Que eu saiba, ele já foi embora.",
        why: `The hedge is fixed with the subjunctive. With the indicative, use "pelo que eu sei".`,
      },
      {
        wrong: "Digam o que dizem, eu vou viajar.",
        right: "Digam o que disserem, eu vou viajar.",
        why: `The second verb of the reduplicated concessive is always the future subjunctive ("disserem", "fizer", "vier", "houver").`,
      },
      {
        wrong: "Seja o que seja, precisamos decidir hoje.",
        right: "Seja o que for, precisamos decidir hoje.",
        why: `The repeated verb follows the same pattern: present subjunctive, then future subjunctive ("for").`,
      },
      {
        wrong: "Tomara que você passa na prova!",
        right: "Tomara que você passe na prova!",
        why: `"Tomara que" always takes the subjunctive.`,
      },
      {
        wrong: "Fizesse o que fizer, ele reclamava.",
        right: "Fizesse o que fizesse, ele reclamava.",
        why: `In past narration both verbs are imperfect subjunctive; don't mix tenses.`,
      },
      {
        wrong: "Quer chova ou faça sol, o evento acontece.",
        right: "Quer chova, quer faça sol, o evento acontece.",
        why: `The norm repeats "quer" in both halves. "Ou" belongs with the shortened spoken form "chova ou faça sol".`,
      },
    ],
    faqs: [
      {
        q: `Is "oxalá" still used in Brazil?`,
        a: `Rarely in conversation: it sounds literary or religious, and many people associate the word "Oxalá" with the orixá of Candomblé, a different word with the same spelling. "Tomara que" and "Deus queira que" are the everyday choices.`,
      },
      {
        q: `Can I say "aconteça o que aconteça"?`,
        a: `No. Brazilian Portuguese uses the future subjunctive in the second slot: "aconteça o que acontecer". The pattern applies to every verb.`,
      },
      {
        q: `Is "quem me dera" related to the pluperfect?`,
        a: `Yes. "Dera" is historically the simple pluperfect of "dar", frozen in this expression, like "tomara" and "pudera!". You'll meet the simple pluperfect in its own right in literary texts.`,
      },
    ],
    related: ["mood-as-meaning", "future-subjunctive", "imperfect-subjunctive", "literary-pluperfect", "infinitive-or-subjunctive"],
    lessons: [
      "c1-fixed-subjunctive-expressions",
      "c1-concessive-reduplication",
      "c1-wishes-exclamations",
      "c1-dialogue-negotiating-uncertainty",
      "c1-error-hunt-subjunctive-c1",
      "c1-spiral-subjunctive-c1",
    ],
  },
  {
    slug: "probability-future-conditional",
    title: "Onde Estará Ela? The Future and Conditional of Probability",
    description:
      "Using the future, future perfect, conditional and conditional perfect to guess about the present and past (\"serão umas cinco horas\", \"ela já terá chegado\", \"teria uns trinta anos\"), their spoken alternatives with \"dever\" and \"será que\", and the journalistic conditional for unconfirmed facts.",
    level: "C1",
    intro: [
      `In everyday Brazilian speech the simple future ("farei", "estará") has almost disappeared as a way of talking about the future: people say "vou fazer". But the form is alive with another job. "Onde estará ela?" doesn't ask where she will be; it means I wonder where she is. "Serão umas cinco horas" means it must be about five.`,
      `The conditional does the same job for the past ("Ele teria uns trinta anos" means he must have been about thirty), and the press uses it to report claims it hasn't confirmed: "O suspeito teria fugido para o interior." Recognising these uses is essential for reading; using them puts a written, educated edge on your Portuguese.`,
    ],
    sections: [
      {
        heading: `Guessing about now: future and future perfect`,
        body: [
          `The simple future expresses a guess about the present; the future perfect ("terá" + participle) a guess about something that has probably already happened. In questions they express wondering. In speech, the same ideas are usually expressed with "dever" + infinitive (must) or "será que" + indicative (I wonder if).`,
        ],
        table: {
          headers: ["Written / careful", "Spoken", "English"],
          rows: [
            ["Serão umas cinco horas.", "Devem ser umas cinco horas.", "It must be about five."],
            ["Onde estará a Ana?", "Onde será que a Ana está?", "I wonder where Ana is."],
            ["Ele estará em reunião.", "Ele deve estar em reunião.", "He's probably in a meeting."],
            ["Ela já terá chegado.", "Ela já deve ter chegado.", "She must have arrived by now."],
            ["Terá sido um engano?", "Será que foi um engano?", "Could it have been a mistake?"],
          ],
        },
        examples: [
          { pt: "Quem será a essa hora?", en: "Who could that be at this hour?" },
          { pt: "O pacote já terá saído do depósito, mas ainda não chegou.", en: "The package will have left the warehouse by now, but it hasn't arrived yet." },
          { pt: "Será que vai chover hoje?", en: "Do you think it's going to rain today?" },
        ],
      },
      {
        heading: `Guessing about the past: conditional and conditional perfect`,
        body: [
          `Move the guess one step back and the future becomes the conditional (futuro do pretérito). "Ele teria uns trinta anos quando o conheci" (he must have been about thirty when I met him). The conditional perfect ("teria" + participle) is a guess about something before a past moment: "Ela já teria saído quando você ligou."`,
          `The spoken equivalents use the imperfect of "dever": "Ele devia ter uns trinta anos", "Ela já devia ter saído". In a story, this probability conditional is part of the narrator's voice and sounds polished.`,
        ],
        examples: [
          { pt: "Seriam umas duas da manhã quando ouvimos o barulho.", en: "It must have been about two in the morning when we heard the noise." },
          { pt: "O prédio teria uns cem anos, a julgar pela fachada.", en: "The building must have been about a hundred years old, judging by the façade." },
          { pt: "Ela devia ter uns oito anos quando se mudou para Recife.", en: "She must have been about eight when she moved to Recife." },
          { pt: "Onde estaria ele naquela noite?", en: "Where could he have been that night?" },
        ],
      },
      {
        heading: `The journalistic conditional: reporting without vouching`,
        body: [
          `Brazilian journalism uses the conditional to report information it has not confirmed: "O ministro teria recebido R$ 2 milhões" means the minister allegedly received two million reais. The conditional perfect does this for past events, the simple conditional for present ones ("O grupo estaria negociando um acordo": the group is reportedly negotiating).`,
          `The conditional is usually paired with a source ("segundo a denúncia", "de acordo com fontes do governo") and does the distancing on its own. Adding "supostamente" or "alegadamente" as well is redundant. Never use this conditional for facts you are asserting; in your own argument it makes you sound as if you don't believe yourself.`,
        ],
        examples: [
          { pt: "Segundo a polícia, o suspeito teria fugido para o Paraguai.", en: "According to the police, the suspect allegedly fled to Paraguay." },
          { pt: "A empresa estaria planejando demitir quinhentos funcionários.", en: "The company is reportedly planning to lay off five hundred employees." },
          { pt: "O jogador teria pedido para deixar o clube, informa o jornal.", en: "The player has reportedly asked to leave the club, the paper says." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Deve ser umas cinco horas.",
        right: "Devem ser umas cinco horas.",
        why: `With hours, "ser" agrees with the number ("São cinco horas"), and so does "dever" in front of it.`,
      },
      {
        wrong: "Ele terá uns trinta anos quando eu o conheci.",
        right: "Ele teria uns trinta anos quando eu o conheci.",
        why: `A guess about a past moment uses the conditional, not the future.`,
      },
      {
        wrong: "Será que ele venha amanhã?",
        right: "Será que ele vem amanhã?",
        why: `"Será que" is followed by the indicative. It already carries the doubt.`,
      },
      {
        wrong: "Segundo a denúncia, o deputado supostamente teria recebido propina.",
        right: "Segundo a denúncia, o deputado teria recebido propina.",
        why: `The conditional already marks the claim as unconfirmed; "supostamente" on top is redundant.`,
      },
    ],
    faqs: [
      {
        q: `Isn't the simple future just formal future?`,
        a: `It is that too, in speeches, contracts and the news ("O ministro viajará amanhã"). But in conversation its most common job is probability and wondering. "Será?" alone (really? could it be?) is one of the most frequent words in spoken Brazilian Portuguese.`,
      },
      {
        q: `Is "deve de ser" correct?`,
        a: `In the traditional norm, "dever de" + infinitive marks probability and "dever" alone obligation, but that distinction is no longer observed in Brazil. "Deve ser" covers both, and "deve de ser" sounds regional or old-fashioned.`,
      },
      {
        q: `How do I translate the journalistic conditional into English?`,
        a: `With allegedly, reportedly or is said to: "O prefeito teria mentido" means the mayor allegedly lied. A literal would have is wrong.`,
      },
    ],
    related: ["media-stance-and-distance", "conditional-tense", "future-ir-vs-futuro-simples", "reduced-clauses"],
    lessons: [
      "c1-probability-future",
      "c1-probability-conditional",
      "c1-spiral-probability",
      "c1-probability-future-unit-review",
      "c1-media-misinformation",
    ],
  },
  {
    slug: "reduced-clauses",
    title: "Ao Chegar, Tendo Terminado, Terminada a Reunião: Reduced Clauses",
    description:
      "How formal Portuguese compresses clauses with the infinitive, the gerund and the participle: \"ao\" + infinitive, \"sem\", \"por\" and \"apesar de\", gerund clauses for cause, time and condition, absolute participle clauses with agreement, and the traps of dangling gerunds and \"gerundismo\".",
    level: "C1",
    intro: [
      `"Quando a reunião terminou, todos foram embora" is correct and clear. "Terminada a reunião, todos foram embora" says the same in five words fewer, and it is the version you'll find in reports, news and novels. Portuguese has three ways of reducing a full clause: with the infinitive, the gerund and the past participle.`,
      `Reduced clauses are a mark of Advanced writing: they make a text denser and more cohesive. They also have strict rules about subjects and agreement that English speakers often break, because English -ing clauses are looser.`,
    ],
    sections: [
      {
        heading: `Infinitive clauses: "ao", "sem", "por", "apesar de"`,
        body: [
          `A preposition + infinitive replaces a clause with a conjunction. If the subject of the infinitive is different from the main subject, or if you want to make it explicit, use the personal infinitive: "Ao chegarmos, a festa já tinha começado."`,
          `In the written norm, a subject between the preposition and the infinitive doesn't contract with it: "antes de o ônibus sair", "depois de os alunos saírem". In speech, everyone says "antes do ônibus sair"; in an essay, write "de o".`,
        ],
        table: {
          headers: ["Reduced", "Full clause", "Meaning"],
          rows: [
            ["Ao chegar ao hotel, liguei para casa.", "Quando cheguei ao hotel, liguei para casa.", "time: on arriving"],
            ["Saiu sem dizer nada.", "Saiu e não disse nada.", "manner: without"],
            ["Por ser tarde, fomos embora.", "Como era tarde, fomos embora.", "cause: because"],
            ["Apesar de estar cansada, ela foi.", "Embora estivesse cansada, ela foi.", "concession: despite"],
            ["Depois de os convidados saírem, arrumamos tudo.", "Depois que os convidados saíram, arrumamos tudo.", "time: after"],
            ["Ao ser informado, o diretor reagiu.", "Quando foi informado, o diretor reagiu.", "time, passive"],
          ],
        },
        examples: [
          { pt: "Ao assinarem o contrato, os clientes recebem um desconto.", en: "On signing the contract, clients receive a discount." },
          { pt: "Por não terem recebido o aviso, muitos moradores perderam o prazo.", en: "Because they hadn't received the notice, many residents missed the deadline." },
          { pt: "Antes de o juiz decidir, as partes tentaram um acordo.", en: "Before the judge ruled, the parties tried to reach a settlement." },
        ],
      },
      {
        heading: `Gerund clauses: cause, time, condition, manner`,
        body: [
          `A gerund clause can mean because, when, if or by. Context decides: "Estando doente, faltou à aula" (because he was ill), "Chegando ao escritório, procure a recepção" (when you get to the office), "Estudando todo dia, você passa" (if you study every day). "Sendo assim" (that being so) is a frequent connector.`,
          `The compound gerund ("tendo" + participle) marks an action completed before the main one: "Tendo terminado o relatório, ela saiu." The firm rule: the understood subject of the gerund must be the subject of the main clause. "Andando pela rua, um carro me atropelou" says the car was walking.`,
          `"Gerundismo" is the call-centre habit of "vou estar enviando" for "vou enviar" or "envio". It is widely mocked in Brazil; use the simple future form.`,
        ],
        examples: [
          { pt: "Tendo analisado os dados, a equipe apresentou suas conclusões.", en: "Having analysed the data, the team presented its conclusions." },
          { pt: "Sendo assim, a reunião fica para a próxima semana.", en: "That being so, the meeting is moved to next week." },
          { pt: "Ela saiu correndo para não perder o ônibus.", en: "She ran out so as not to miss the bus." },
          { pt: "Não sendo possível comparecer, avise com antecedência.", en: "If you can't attend, let us know in advance." },
        ],
      },
      {
        heading: `Participle clauses: "terminada a reunião", "feitas as contas"`,
        body: [
          `An absolute participle clause puts the participle first and its noun after it, with a passive meaning: "Terminada a reunião" (the meeting having ended), "Feitas as contas" (once the sums were done), "Dito isso" (that said). The participle agrees in gender and number with the noun that follows: "terminada a reunião", "resolvidos os problemas", "pagas as contas".`,
          `Verbs with a short participle use it here: "aceito", "entregue", "pago", "ganho", "eleito", "preso". This structure is standard in history writing ("Proclamada a República, o imperador partiu para o exílio") and in minutes and reports ("Encerrada a votação, passou-se ao item seguinte").`,
        ],
        table: {
          headers: ["Full", "Infinitive", "Participle"],
          rows: [
            ["Quando a votação terminou, ...", "Ao terminar a votação, ...", "Terminada a votação, ..."],
            ["Depois que os documentos foram entregues, ...", "Depois de entregues os documentos, ...", "Entregues os documentos, ..."],
            ["Assim que as contas foram pagas, ...", "Depois de pagar as contas, ...", "Pagas as contas, ..."],
          ],
        },
        examples: [
          { pt: "Feitas as contas, o prejuízo foi menor do que o esperado.", en: "Once the sums were done, the loss was smaller than expected." },
          { pt: "Dito isso, passo a palavra à professora Beatriz.", en: "That said, I'll hand over to Professor Beatriz." },
          { pt: "Resolvidos os problemas técnicos, a transmissão foi retomada.", en: "With the technical problems solved, the broadcast resumed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Terminado a reunião, todos saíram.",
        right: "Terminada a reunião, todos saíram.",
        why: `The participle agrees with the noun it describes: "a reunião" is feminine singular.`,
      },
      {
        wrong: "Andando pela rua, um carro me atropelou.",
        right: "Andando pela rua, fui atropelado por um carro.",
        why: `The gerund's subject must be the main subject. Make "eu" the subject of both, or use a full clause: "Quando eu andava pela rua, um carro me atropelou."`,
      },
      {
        wrong: "Ao chegar, o porteiro me cumprimentou.",
        right: "Quando cheguei, o porteiro me cumprimentou.",
        why: `As written, the porter arrived. An infinitive clause without its own subject takes the main subject.`,
      },
      {
        wrong: "Vou estar enviando o arquivo amanhã.",
        right: "Vou enviar o arquivo amanhã.",
        why: `"Gerundismo" sounds like a call-centre script. Use "vou enviar" or "envio".`,
      },
      {
        wrong: "Depois dos alunos saírem, a sala foi limpa.",
        right: "Depois de os alunos saírem, a sala foi limpa.",
        why: `In formal writing the subject of an infinitive doesn't contract with the preposition. "Dos" is fine in speech.`,
      },
    ],
    faqs: [
      {
        q: `Is the gerund always -ing?`,
        a: `No. Many English -ing forms are infinitives in Portuguese (after reading is "depois de ler", without knowing is "sem saber"), and many Portuguese gerund clauses are best translated with as, since or by. Translate the meaning, not the form.`,
      },
      {
        q: `Can a participle clause go at the end of the sentence?`,
        a: `It can ("Os convidados saíram, terminada a festa"), but it is far more natural at the start, where it sets the scene for the main clause.`,
      },
      {
        q: `Are reduced clauses too formal for conversation?`,
        a: `Infinitive and gerund clauses are normal in speech ("Saí correndo", "Ao chegar, me liga"). Participle clauses belong mostly to writing, news and formal speeches, though "Dito isso" and "Feito!" are heard everywhere.`,
      },
    ],
    related: ["personal-infinitive", "infinitive-or-subjunctive", "academic-portuguese", "literary-pluperfect", "probability-future-conditional"],
    lessons: [
      "c1-reduced-infinitive",
      "c1-reduced-gerund",
      "c1-reduced-participle",
      "c1-contrast-reduced-full",
      "c1-error-hunt-reduced",
      "c1-transform-compress",
      "c1-reduced-extra-1",
      "c1-reduced-extra-2",
      "c1-contrast-historical-narration",
    ],
  },
  {
    slug: "literary-pluperfect",
    title: "Fizera, Dissera: The Simple Pluperfect and the Language of Literature",
    description:
      "The literary tenses and older usage you meet in Brazilian novels and the press: the simple pluperfect (\"fizera\", \"chegara\") and its forms, its frozen survivors (\"quem me dera\", \"pudera\"), the historical present, free indirect speech, and the nineteenth-century pronouns and mesóclise of Machado de Assis.",
    level: "C1",
    intro: [
      `In conversation, Brazilians express the past before the past with "tinha feito" ("Quando cheguei, ela já tinha saído"). Open a novel, though, and you'll find "Quando cheguei, ela já saíra." This is the simple pluperfect (mais-que-perfeito simples), a single-word tense that survives in literature, in some journalism and in a handful of fixed expressions.`,
      `You will rarely need to produce it, but you must recognise it at once, because some of its forms look exactly like other tenses. This guide also covers the other features that make literary Portuguese read differently: the historical present, free indirect speech, and the older pronoun system of nineteenth-century writers.`,
    ],
    sections: [
      {
        heading: `Forming the simple pluperfect`,
        body: [
          `Take the "eles" form of the preterite, remove "-ram" and add "-ra", "-ra", "-ramos", "-ram". It works for every verb, regular or irregular: "fizeram" → "fizera", "disseram" → "dissera", "foram" → "fora". The "nós" form takes a written accent on the stressed vowel: "fizéramos", "chegáramos", "partíramos".`,
          `Two traps: the "eles" form ("fizeram", "chegaram") is identical to the preterite, so only context tells you which it is. And some singular forms coincide with other words: "vira" (had seen, from "ver") is also "vira" (turns, from "virar"); "fora" (had been / had gone) is also the adverb "fora" (outside).`,
        ],
        table: {
          headers: ["Verb", "Preterite (eles)", "Pluperfect (eu / ele)", "Pluperfect (nós)", "Everyday equivalent"],
          rows: [
            ["chegar", "chegaram", "chegara", "chegáramos", "tinha chegado"],
            ["fazer", "fizeram", "fizera", "fizéramos", "tinha feito"],
            ["dizer", "disseram", "dissera", "disséramos", "tinha dito"],
            ["ser / ir", "foram", "fora", "fôramos", "tinha sido / tinha ido"],
            ["ter", "tiveram", "tivera", "tivéramos", "tinha tido"],
            ["ver", "viram", "vira", "víramos", "tinha visto"],
            ["vir", "vieram", "viera", "viéramos", "tinha vindo"],
            ["sair", "saíram", "saíra", "saíramos", "tinha saído"],
          ],
        },
        examples: [
          { pt: "Quando a polícia chegou, o ladrão já fugira pela janela.", en: "When the police arrived, the thief had already escaped through the window." },
          { pt: "Nunca vira o mar antes daquela viagem.", en: "He had never seen the sea before that trip." },
          { pt: "Voltou à cidade onde nascera.", en: "She went back to the town where she had been born." },
        ],
      },
      {
        heading: `Where it lives: novels, the press, frozen expressions`,
        body: [
          `Novelists from Machado de Assis to contemporary writers use the simple pluperfect for flashbacks inside a past narrative; it is shorter and more elegant than "tinha" + participle, especially in long sentences. Some newspapers use it in features and obituaries. In conversation it sounds bookish, and in a casual email it would sound like a joke.`,
          `Several frozen expressions are historically simple pluperfects: "quem me dera" (if only), "tomara" (I hope; from "tomar"), "pudera!" (no wonder!), and the literary "quisera eu" (I wish I could). Their speakers no longer hear them as past tenses.`,
        ],
        examples: [
          { pt: "Ela estava exausta. Pudera! Trabalhara catorze horas seguidas.", en: "She was exhausted. No wonder! She'd worked fourteen hours straight." },
          { pt: "Quisera eu ter a calma dele.", en: "I wish I had his calm." },
          { pt: "O escritor, que morrera em 1908, deixou um romance inacabado.", en: "The writer, who had died in 1908, left an unfinished novel." },
        ],
      },
      {
        heading: `The historical present and free indirect speech`,
        body: [
          `The historical present narrates past events in the present tense to make them vivid: "Em 1888, a princesa Isabel assina a Lei Áurea." It is standard in history writing, documentaries and anecdotes ("Aí ele chega e me fala..."). Don't mix it randomly with the past: choose one frame and keep it, switching only for effect.`,
          `Free indirect speech (discurso indireto livre), much used by Clarice Lispector and Graciliano Ramos, blends the narrator's voice with a character's thoughts: third person and past tenses, but the character's own words, questions and exclamations, with no "ele pensou que". An invented example: "Joana olhou o céu. Ia chover? Não ia chover nunca mais."`,
        ],
        examples: [
          { pt: "Em 1822, D. Pedro proclama a Independência às margens do Ipiranga.", en: "In 1822, Dom Pedro proclaims Independence on the banks of the Ipiranga." },
          { pt: "Ela parou diante da porta. Entrava ou não entrava? Que vergonha, meu Deus.", en: "She stopped at the door. Should she go in or not? How embarrassing, good grief." },
        ],
      },
      {
        heading: `Older texts: "vós", ênclise and mesóclise`,
        body: [
          `Nineteenth-century Brazilian prose follows the Portuguese norm of its time. Pronouns are placed after the verb wherever no word attracts them ("Disse-lhe a verdade"), the future and conditional split around the pronoun ("dir-lhe-ia", "far-se-á"), and "vós" appears in sermons, speeches and solemn address. Machado's narrators also turn to the reader directly, calling him "leitor" or "leitora".`,
          `The Modernists of 1922 broke with this deliberately. Oswald de Andrade's poem "Pronominais" sets the grammar book's "Dê-me um cigarro" against the Brazilian "Me dá um cigarro", and claims the second as the nation's real language. Reading older texts, recognise these forms; writing today, use the Brazilian norm of the guide on official Portuguese.`,
        ],
        examples: [
          { pt: "Dir-lhe-ia tudo, se ela me ouvisse.", en: "I would tell her everything, if she would listen to me." },
          { pt: "Contou-me o caso com todos os pormenores.", en: "He told me the story in every detail." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Nós já chegaramos quando ela ligou.",
        right: "Nós já chegáramos quando ela ligou.",
        why: `The "nós" form of the simple pluperfect carries a written accent: "chegáramos", "fizéramos", "partíramos".`,
      },
      {
        wrong: "Ontem eu fizera um bolo.",
        right: "Ontem eu fiz um bolo.",
        why: `The simple pluperfect is a past before another past, not a fancy simple past. Without a later past reference point it is wrong.`,
      },
      {
        wrong: "Quando cheguei, ela já saira.",
        right: "Quando cheguei, ela já saíra.",
        why: `As in "saíram", the "i" of "saíra" is in hiatus and takes an accent.`,
      },
    ],
    faqs: [
      {
        q: `Should I use the simple pluperfect in my essays?`,
        a: `Only sparingly. "Tinha feito" (or the formal "havia feito") is the standard choice in essays and reports. The simple form is a stylistic choice for narrative prose; in an argumentative essay it can sound affected.`,
      },
      {
        q: `How do I tell "fizeram" (preterite) from "fizeram" (pluperfect)?`,
        a: `By the timeline. If the action comes before another past event the text is narrating, often with "já" or "antes", it is the pluperfect; if it simply moves the story forward, it is the preterite. Because the plural is ambiguous, many writers use the simple pluperfect only in the singular and write "tinham feito" for the plural.`,
      },
      {
        q: `Does anyone speak like Machado de Assis today?`,
        a: `No. His pronoun placement, mesóclise and "vós" are historical. They survive in laws, some legal and religious language, and in jokes: Brazilians sometimes use mesóclise ironically to sound pompous.`,
      },
    ],
    related: ["official-portuguese", "reduced-clauses", "mais-que-perfeito", "style-and-register", "figures-of-speech", "narrative-tenses"],
    lessons: [
      "c1-literary-pluperfect",
      "c1-lit-machado",
      "c1-lit-romanticism-realism",
      "c1-lit-modernism",
      "c1-lit-clarice-rosa",
      "c1-contrast-literary-everyday",
      "c1-mission-literary-commentary",
      "c1-spiral-literature",
      "c1-literature-extra-1",
      "c1-literature-extra-2",
      "c1-contrast-historical-narration",
    ],
  },
  {
    slug: "academic-portuguese",
    title: "Academic Portuguese: Impersonal Style, Nominalization and Hedging",
    description:
      "The grammar of Brazilian academic writing: the impersonal \"se\" and its agreement, the \"nós de modéstia\", turning verbs into nouns with the right prepositions, hedging claims, citing sources with reporting verbs, and the anglicisms reviewers flag.",
    level: "C1",
    intro: [
      `Brazilian academic Portuguese (in a TCC, a dissertação, an article or a resumo) has its own conventions. The author mostly disappears behind impersonal structures ("analisou-se", "verifica-se que"), ideas are packaged into noun phrases ("a ampliação do acesso à educação"), claims are carefully hedged, and every source is introduced with a precise reporting verb.`,
      `English academic writing shares some of these habits, which helps, but it also tempts you into calques ("endereçar um problema", "é mandatório") that Brazilian readers notice immediately. This guide covers the grammar you need and the traps to avoid.`,
    ],
    sections: [
      {
        heading: `Removing the author: the impersonal "se" and "nós"`,
        body: [
          `The impersonal style uses "se" with the verb in the third person: "Busca-se compreender...", "Verifica-se que...". When the verb has a direct object, the "se" makes it passive and the verb agrees with that object: "Analisaram-se 200 questionários", "Entrevistaram-se 30 professores". With a preposition, the verb stays singular: "Trata-se de", "Precisa-se de mais dados".`,
          `The alternatives are the analytic passive ("Foram entrevistados 30 professores") and the "nós de modéstia", a first person plural even for a single author: "Neste artigo, discutimos...". The first person singular is accepted in some fields (anthropology, education) but not in most; check the journal or your supervisor. Note that in academic writing clitic placement follows the written norm: no sentence starts with "se".`,
        ],
        table: {
          headers: ["Everyday", "Academic"],
          rows: [
            ["Eu queria entender por que...", "O presente trabalho tem como objetivo compreender por que..."],
            ["A gente entrevistou 30 professores.", "Foram entrevistados 30 professores. / Entrevistaram-se 30 professores."],
            ["Dá para ver que os números subiram.", "Verifica-se um aumento dos índices."],
            ["Eu acho que isso mostra...", "Os dados sugerem que..."],
            ["Vou falar primeiro sobre...", "Inicialmente, discute-se..."],
          ],
        },
        examples: [
          { pt: "Busca-se, com este estudo, avaliar o impacto do programa nas escolas públicas.", en: "This study seeks to assess the programme's impact on state schools." },
          { pt: "Analisaram-se os relatórios publicados entre 2015 e 2022.", en: "The reports published between 2015 and 2022 were analysed." },
          { pt: "Trata-se de uma pesquisa qualitativa, de caráter exploratório.", en: "This is qualitative, exploratory research." },
        ],
      },
      {
        heading: `Nominalization: verbs into nouns`,
        body: [
          `Academic Portuguese turns clauses into noun phrases: "os preços aumentaram muito" becomes "o aumento expressivo dos preços". The subject or object of the verb becomes a "de" phrase, adverbs become adjectives, and the noun keeps the preposition its verb or adjective takes ("depender de" → "dependência de", "acessar" → "acesso a", "participar de" → "participação em").`,
          `Nominal style makes texts dense; overused, it makes them unreadable. If a sentence has four nouns in "-ção" and only "ser" or "haver" as verbs, turn one into a clause.`,
        ],
        table: {
          headers: ["Verb / adjective", "Noun + preposition", "Example"],
          rows: [
            ["acessar", "acesso a", "o acesso à internet"],
            ["depender de", "dependência de", "a dependência de importações"],
            ["participar de", "participação em", "a participação em eleições"],
            ["interessar-se por", "interesse por / em", "o interesse por ciência"],
            ["contribuir para", "contribuição para", "a contribuição para o debate"],
            ["ser capaz de", "capacidade de", "a capacidade de adaptação"],
            ["reduzir", "redução de", "a redução de custos"],
          ],
        },
        examples: [
          { pt: "A ampliação do acesso à educação superior foi uma das metas do período.", en: "Widening access to higher education was one of the period's goals." },
          { pt: "Observou-se uma redução significativa da evasão escolar.", en: "A significant reduction in school dropout was observed." },
        ],
      },
      {
        heading: `Hedging: claiming without overclaiming`,
        body: [
          `Brazilian reviewers expect claims to match the evidence. Use a scale: "comprova" and "demonstra" only for strong results; "indica", "aponta para" and "sugere" for most findings; "parece", "tende a", "é possível que" (+ subjunctive) and "em certa medida" for tentative ones. "Pode-se afirmar que" and "é razoável supor que" introduce your own interpretation.`,
        ],
        table: {
          headers: ["Strength", "Expressions", "Mood"],
          rows: [
            ["strong", "os dados comprovam / demonstram que", "indicative"],
            ["moderate", "os resultados indicam / sugerem que; apontam para", "indicative"],
            ["tentative", "parece que; tende a; em certa medida", "indicative"],
            ["possibility", "é possível / provável que", "subjunctive"],
            ["interpretation", "pode-se afirmar que; é razoável supor que", "indicative"],
          ],
        },
        examples: [
          { pt: "Os resultados sugerem que o programa teve efeito positivo, sobretudo nas regiões rurais.", en: "The results suggest the programme had a positive effect, especially in rural areas." },
          { pt: "É possível que a amostra reduzida tenha influenciado os resultados.", en: "The small sample may have influenced the results." },
          { pt: "Em certa medida, a crise acelerou mudanças que já estavam em curso.", en: "To some extent, the crisis accelerated changes already under way." },
        ],
      },
      {
        heading: `Citing sources: "segundo", "para", reporting verbs`,
        body: [
          `Introduce sources with "segundo X", "de acordo com X", "conforme X" or "para X" (the last for a theoretical position: "Para Paulo Freire, ..."). Or make the author the subject with a reporting verb chosen for its nuance: "afirmar" (neutral), "defender" and "sustentar" (argue for a position), "apontar" and "ressaltar" (point out, stress), "questionar" (challenge), "refutar" (refute). The verb that follows is indicative: "Candido (2006) afirma que a literatura é um direito."`,
          `ABNT conventions you'll see: author's surname in capitals inside parentheses "(FREIRE, 1996, p. 25)", "et al." for more than three authors, and "apud" for a source quoted through another ("Bourdieu apud Silva, 2010").`,
        ],
        examples: [
          { pt: "Segundo Freire (1996), ensinar não é transferir conhecimento.", en: "According to Freire (1996), teaching isn't transferring knowledge." },
          { pt: "Holanda (1995) sustenta que a cordialidade marca a sociedade brasileira.", en: "Holanda (1995) argues that cordiality characterises Brazilian society." },
          { pt: "Como ressalta Candido, a literatura humaniza.", en: "As Candido stresses, literature is what makes us human." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Analisou-se os questionários.",
        right: "Analisaram-se os questionários.",
        why: `With a direct object, "se" is passive and the verb agrees with the object ("os questionários" are analysed). The singular is common in speech but marked as an error in academic texts.`,
      },
      {
        wrong: "Este artigo endereça o problema da evasão.",
        right: "Este artigo aborda o problema da evasão.",
        why: `"Endereçar" means to address a letter. For an issue, use "abordar", "tratar de" or "enfrentar".`,
      },
      {
        wrong: "É mandatório citar as fontes.",
        right: "É obrigatório citar as fontes.",
        why: `"Mandatório" is a calque. "Obrigatório", "imprescindível" or "indispensável" are the Portuguese words.`,
      },
      {
        wrong: "O artigo onde o autor discute a questão.",
        right: "O artigo em que o autor discute a questão.",
        why: `"Onde" refers to physical places. For texts, situations and periods, use "em que" or "no qual".`,
      },
      {
        wrong: "Eu acho que os dados mostram uma melhora.",
        right: "Os dados indicam uma melhora.",
        why: `"Eu acho que" is conversational. Let the evidence be the subject and choose a verb of the right strength.`,
      },
      {
        wrong: "A participação de eleições caiu.",
        right: "A participação em eleições caiu.",
        why: `"Participar de" becomes "participação em". Learn the preposition with each noun.`,
      },
    ],
    faqs: [
      {
        q: `Can I use "eu" in a Brazilian dissertation?`,
        a: `It depends on the field. Hard sciences and most social sciences prefer the impersonal or "nós". Education, anthropology and some humanities accept "eu", especially in the methodology of qualitative research. Follow your programme's norms.`,
      },
      {
        q: `"Analisou-se" or "foram analisados"?`,
        a: `Both are correct. The "se" form is shorter and very common in abstracts; the analytic passive with "ser" lets you add the agent ("foram analisados pela equipe"). Vary them.`,
      },
      {
        q: `Is "evidenciar" an anglicism?`,
        a: `No, it's a good Portuguese verb (to make evident, to show). The problem is overuse: it doesn't fit every "show". Alternate with "mostrar", "revelar", "indicar" and "demonstrar".`,
      },
    ],
    related: ["argumentative-connectors", "media-stance-and-distance", "se-passive-and-impersonal-se", "reduced-clauses", "style-and-register"],
    lessons: [
      "c1-academic-abstract",
      "c1-academic-hedging",
      "c1-academic-citation",
      "c1-academic-cohesion",
      "c1-academic-nominal-style",
      "c1-contrast-academic-everyday",
      "c1-dialogue-thesis-defense",
      "c1-error-hunt-academic",
      "c1-mission-literature-review",
      "c1-spiral-academic",
      "c1-academic-abstract-unit-review",
      "c1-academic-extra-1",
      "c1-academic-extra-2",
    ],
  },
  {
    slug: "argumentative-connectors",
    title: "Argumentative Connectors and the ENEM Essay",
    description:
      "The connectors of formal argument by function, with the mood or form each one takes, where to put them and how to punctuate them, plus the five-part proposta de intervenção of the ENEM essay and the clichés that cost points.",
    level: "C1",
    intro: [
      `Brazil's university entrance exam, the ENEM, has turned the dissertative-argumentative essay into a national genre. Its fourth competência grades cohesion: the range and accuracy of the connectors that tie sentences and paragraphs together. Its fifth grades the proposta de intervenção, a concrete proposal with five elements.`,
      `The same toolkit serves the Celpe-Bras and any formal writing. Connectors are not interchangeable: each one belongs to a logical relation, many require a specific mood ("embora" + subjunctive, "visto que" + indicative), and a few change meaning with the mood.`,
    ],
    sections: [
      {
        heading: `Connectors by function`,
        body: [
          `Learn connectors in families, with what follows them. Vary them within a text: three "além disso" in one essay is a cohesion weakness, and so is "porém" at the start of every paragraph.`,
        ],
        table: {
          headers: ["Function", "Connectors", "Followed by"],
          rows: [
            ["addition", "além disso, ademais, outrossim (very formal), não só... como também", "clause"],
            ["contrast", "no entanto, entretanto, contudo, todavia, porém, em contrapartida", "clause"],
            ["concession", "embora, ainda que, mesmo que, conquanto", "subjunctive"],
            ["concession", "apesar de, não obstante", "noun or infinitive"],
            ["cause", "visto que, uma vez que, dado que, já que, porquanto", "indicative"],
            ["cause", "haja vista, em virtude de, devido a, em razão de", "noun"],
            ["consequence", "portanto, por conseguinte, logo, dessa forma, consequentemente", "clause"],
            ["purpose", "a fim de, com o intuito de, para", "infinitive"],
            ["purpose", "a fim de que, para que", "subjunctive"],
            ["conclusion", "em suma, diante do exposto, depreende-se, portanto", "clause"],
            ["example", "a exemplo de, como, tal como", "noun"],
          ],
        },
        examples: [
          { pt: "Embora o acesso à internet tenha crescido, a desigualdade digital persiste.", en: "Although internet access has grown, digital inequality persists." },
          { pt: "O problema, no entanto, não se resume à falta de recursos.", en: "The problem, however, isn't just a lack of resources." },
          { pt: "Haja vista o aumento dos casos, é urgente agir.", en: "Given the rise in cases, action is urgent." },
          { pt: "Diante do exposto, depreende-se que a questão exige uma resposta coordenada.", en: "In view of the above, it follows that the issue requires a coordinated response." },
        ],
      },
      {
        heading: `Placement, punctuation and mood shifts`,
        body: [
          `"Mas" always opens its clause and is preceded by a comma. "Porém", "contudo", "todavia", "entretanto" and "no entanto" can open the sentence or move inside it, between commas: "A proposta, contudo, foi rejeitada." "Pois" before the verb means because; after the verb, between commas, it means therefore: "Choveu muito; a festa foi, pois, cancelada."`,
          `Some connectors change meaning with the mood. "Uma vez que" + indicative is causal (since); + subjunctive it is conditional (once, as long as). "Desde que" + indicative is temporal (since); + subjunctive it means provided that. "Sem que" and "a menos que" always take the subjunctive.`,
        ],
        table: {
          headers: ["Connector", "+ indicative", "+ subjunctive"],
          rows: [
            ["uma vez que", "Uma vez que o prazo acabou, ... (since)", "Uma vez que o contrato seja assinado, ... (once)"],
            ["desde que", "Desde que ele chegou, tudo mudou. (since)", "Pode ir, desde que volte cedo. (provided that)"],
            ["logo", "Ele chega logo. (soon, adverb)", "Penso, logo existo. (therefore, connector)"],
          ],
        },
        examples: [
          { pt: "Uma vez que os dados foram divulgados, não há como negar o problema.", en: "Since the data have been published, there's no denying the problem." },
          { pt: "A medida só funciona desde que haja fiscalização.", en: "The measure only works provided there is enforcement." },
        ],
      },
      {
        heading: `The proposta de intervenção`,
        body: [
          `The ENEM's fifth competência asks for a proposal with five elements: an agent (who acts: a named institution, not "a sociedade"), an action, a means or mode, a purpose, and a detail that develops one of the others. Typical grammar: "Cabe ao/à" + infinitive, "É dever do Estado" + infinitive, "por meio de" or "mediante" for the means, and "a fim de" + infinitive or "a fim de que" + subjunctive for the purpose.`,
        ],
        table: {
          headers: ["Element", "Typical wording", "Example"],
          rows: [
            ["agente", "cabe a, compete a, é dever de", "Cabe ao Ministério da Educação"],
            ["ação", "infinitive", "promover campanhas de educação midiática"],
            ["meio / modo", "por meio de, mediante, via", "por meio de oficinas nas escolas públicas"],
            ["finalidade", "a fim de, com o intuito de, para que", "a fim de que os jovens identifiquem notícias falsas"],
            ["detalhamento", "apposition, relative clause", "oficinas conduzidas por jornalistas e professores"],
          ],
        },
        examples: [
          { pt: "Cabe ao Ministério da Educação, em parceria com as secretarias estaduais, promover oficinas de educação midiática nas escolas públicas, conduzidas por jornalistas e professores, a fim de que os jovens aprendam a identificar notícias falsas.", en: "It falls to the Ministry of Education, together with the state departments, to run media-literacy workshops in state schools, led by journalists and teachers, so that young people learn to spot fake news." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mas porém, o governo não agiu.",
        right: "Porém, o governo não agiu.",
        why: `"Mas" and "porém" mean the same thing; using both is a pleonasm.`,
      },
      {
        wrong: "Haja visto o aumento dos preços, ...",
        right: "Haja vista o aumento dos preços, ...",
        why: `The expression is fixed and invariable: "haja vista", never "haja visto" or "hajam vistas".`,
      },
      {
        wrong: "Afim de resolver o problema, ...",
        right: "A fim de resolver o problema, ...",
        why: `"A fim de" (in order to) is three words. "Afim" is an adjective meaning related ("áreas afins").`,
      },
      {
        wrong: "Para que os jovens reconhecem os riscos, ...",
        right: "Para que os jovens reconheçam os riscos, ...",
        why: `"Para que" and "a fim de que" always take the subjunctive.`,
      },
      {
        wrong: "A sociedade deve fazer algo para resolver isso.",
        right: "Cabe ao Poder Legislativo aprovar leis que garantam a fiscalização.",
        why: `A vague agent and a vague action score poorly. Name the institution and the concrete measure.`,
      },
      {
        wrong: "O desemprego aumentou, onde a violência cresceu.",
        right: "O desemprego aumentou, o que contribuiu para o crescimento da violência.",
        why: `"Onde" is not a general connector. For consequence, use "o que" + verb, "por isso" or "consequentemente".`,
      },
    ],
    faqs: [
      {
        q: `Are "entretanto" and "no entanto" the same?`,
        a: `In the modern norm, yes: both mean however. "Entretanto" can also mean meanwhile in older texts, but in Brazilian writing today it is a contrast connector.`,
      },
      {
        q: `Which clichés should I avoid in the ENEM essay?`,
        a: `"Desde os primórdios da humanidade", "nos dias de hoje", "é de suma importância", "a sociedade deve se conscientizar" and decorative quotations unrelated to the argument. Examiners have seen them thousands of times.`,
      },
      {
        q: `Is "outrossim" too formal?`,
        a: `For an essay it is acceptable but stiff; it is at home in legal and administrative texts. "Além disso" and "ademais" are safer.`,
      },
    ],
    related: ["academic-portuguese", "concession-cause-purpose", "punctuation-norma-culta", "media-stance-and-distance", "mood-as-meaning"],
    lessons: [
      "c1-academic-cohesion",
      "c1-essay-competencies",
      "c1-essay-introduction",
      "c1-essay-development",
      "c1-essay-proposal",
      "c1-essay-repertoire",
      "c1-contrast-weak-strong-paragraph",
      "c1-dialogue-essay-feedback",
      "c1-error-hunt-essay-c1",
      "c1-build-up-essay-c1",
      "c1-spiral-essay",
      "c1-essay-competencies-unit-review",
      "c1-essay-extra-1",
      "c1-essay-extra-2",
    ],
  },
  {
    slug: "official-portuguese",
    title: "Official Portuguese: Vossa Senhoria, Formal Pronoun Placement and Legal Formulas",
    description:
      "The norma culta of institutional texts: forms of address (\"Vossa Senhoria\", \"Vossa Excelência\") with third-person verbs and \"sua\", clitic placement and mesóclise in formal writing, the formulas of requerimentos and official emails, and the structures of laws and contracts.",
    level: "C1",
    intro: [
      `Spoken Brazilian Portuguese and the written norm drift furthest apart in official texts. A Brazilian who says "Me manda o arquivo" at work will write "Encaminho, em anexo, o arquivo solicitado" to a government office, and "Vossa Senhoria" in a formal complaint. Requerimentos, ofícios, contracts and laws follow conventions that Brazilians learn at school and still look up.`,
      `This guide brings together the three areas where learners make the most visible mistakes in such texts: forms of address and their agreement, pronoun placement in the written norm, and the fixed formulas of administrative and legal Portuguese.`,
    ],
    sections: [
      {
        heading: `Forms of address: "Vossa Senhoria", "Vossa Excelência"`,
        body: [
          `The pronomes de tratamento address a person indirectly, through a quality (your Lordship, your Excellency). Although they contain "vossa", the verb is always third person singular and the possessive is "sua" or "seu": "Vossa Senhoria sabe que...", "Vossa Excelência e sua equipe". Adjectives agree with the person's sex: "Vossa Excelência está enganado" (to a man).`,
          `Use "Vossa" when speaking to the person and "Sua" when speaking about them: "Sua Excelência, o Governador, chegou." The federal Manual de Redação da Presidência da República (2018) abolished "Ilustríssimo" and "Digníssimo" and reserved "Excelentíssimo" for the heads of the three branches of power; most officials are simply addressed as "Senhor" + post. It also notes that "doutor" is an academic title, not a form of address.`,
        ],
        table: {
          headers: ["Form", "Abbreviation", "For", "Salutation"],
          rows: [
            ["Vossa Excelência", "V. Exa.", "president, ministers, governors, mayors, members of parliament, judges", "Senhor Ministro, / Excelentíssimo Senhor Presidente da República,"],
            ["Vossa Senhoria", "V. Sa.", "other officials, company directors, private individuals in formal letters", "Senhor Diretor, / Prezado Senhor,"],
            ["Vossa Magnificência", "V. Maga.", "university rectors", "Magnífico Reitor,"],
            ["o senhor / a senhora", "Sr. / Sra.", "formal speech, ordinary formal emails", "Prezada Senhora,"],
          ],
        },
        examples: [
          { pt: "Solicito a Vossa Senhoria que analise o pedido em anexo.", en: "I ask you to examine the attached request." },
          { pt: "Informamos a Vossa Excelência que sua solicitação foi atendida.", en: "We inform Your Excellency that your request has been granted." },
          { pt: "Sua Excelência, o Ministro da Saúde, chegará às dez horas.", en: "His Excellency the Minister of Health will arrive at ten o'clock." },
        ],
      },
      {
        heading: `Pronoun placement in formal writing`,
        body: [
          `Speech places pronouns before the verb almost everywhere ("Me dirijo a vocês"). The written norm used in official texts is stricter. Never start a sentence with an unstressed pronoun: "Dirijo-me a Vossa Senhoria", "Trata-se de". Put it before the verb (próclise) when an attracting word precedes: negatives, relative and interrogative words, conjunctions like "que" and "quando", and adverbs like "já", "sempre", "também", "nunca".`,
          `With the simple future and the conditional, if nothing attracts the pronoun, it goes inside the verb (mesóclise): "Realizar-se-á", "far-se-ia", "informá-lo-emos". With an attractor, it goes before: "Não se realizará". Because mesóclise sounds pompous, modern style guides prefer to avoid it with a passive or another tense: "A assembleia será realizada no dia 5."`,
        ],
        table: {
          headers: ["Situation", "Written norm", "Spoken Brazilian"],
          rows: [
            ["start of sentence", "Encaminho-lhe o documento.", "Te mando o documento."],
            ["after a negative", "Não se admite atraso.", "Não se admite atraso."],
            ["after que, quando, já", "O prazo que se encerra hoje... / Já se encontra disponível.", "same"],
            ["future, no attractor", "Realizar-se-á a reunião. / A reunião será realizada.", "A reunião vai ser realizada."],
            ["future, attractor", "Não se realizará a reunião.", "A reunião não vai acontecer."],
            ["infinitive", "para informá-lo / para lhe informar", "pra te informar / pra informar você"],
          ],
        },
        examples: [
          { pt: "Trata-se de solicitação de revisão de nota.", en: "This is a request for a grade review." },
          { pt: "Informo que não se aceitarão documentos após o prazo.", en: "I wish to inform you that documents won't be accepted after the deadline." },
          { pt: "A votação far-se-á por meio eletrônico.", en: "The vote will be held electronically." },
        ],
      },
      {
        heading: `Formulas: requerimentos, ofícios and emails`,
        body: [
          `A requerimento is written in the third person, even about yourself: "Fulana de Tal, brasileira, portadora do RG nº..., vem, respeitosamente, requerer a Vossa Senhoria..." and ends "Nestes termos, pede deferimento." Letters and institutional emails use the first person with fixed openings and closings: "Venho, por meio deste, solicitar...", "Encaminho, em anexo,...", "Sem mais para o momento,". The federal manual recommends "Respeitosamente" to a higher authority and "Atenciosamente" otherwise; "Cordialmente" is common in business.`,
        ],
        examples: [
          { pt: "Venho, por meio deste, solicitar a segunda via do meu diploma.", en: "I am writing to request a duplicate of my diploma." },
          { pt: "Encaminho, em anexo, o comprovante de pagamento.", en: "Please find attached the proof of payment." },
          { pt: "Nestes termos, pede deferimento.", en: "On these grounds, approval is respectfully requested." },
          { pt: "Sem mais para o momento, colocamo-nos à disposição para esclarecimentos.", en: "With nothing further for now, we remain at your disposal for any clarification." },
        ],
      },
      {
        heading: `The language of laws and contracts`,
        body: [
          `Laws are divided into "artigo" (art. 1º to 9º with an ordinal, then art. 10, art. 11), "parágrafo" (§, or "parágrafo único"), "inciso" (Roman numerals) and "alínea" (letters). Their verbs are impersonal and deontic: "Fica vedado" (it is forbidden), "É facultado" (it is permitted), "Compete a" (it is the responsibility of), "Revogam-se as disposições em contrário". Conditions use the future subjunctive: "O locatário que atrasar o pagamento pagará multa de 2%."`,
          `Contracts add their own vocabulary: "as partes", "o contratante" and "o contratado", "a vigência" (term), "a rescisão" (termination), "a multa" (penalty), "o foro" (jurisdiction), and connectors like "mediante" (upon, by means of), "nos termos de" (under) and "outrossim" (furthermore).`,
        ],
        examples: [
          { pt: "Fica vedada a sublocação do imóvel sem autorização expressa do locador.", en: "Subletting the property without the landlord's express permission is forbidden." },
          { pt: "É facultado ao consumidor desistir do contrato no prazo de sete dias.", en: "The consumer may withdraw from the contract within seven days." },
          { pt: "Nos termos do art. 49 do Código de Defesa do Consumidor, o valor será devolvido.", en: "Under article 49 of the Consumer Protection Code, the amount will be refunded." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vossa Senhoria sabeis que o prazo terminou.",
        right: "Vossa Senhoria sabe que o prazo terminou.",
        why: `Forms of address take third person singular verbs, despite the "vossa".`,
      },
      {
        wrong: "Agradeço a Vossa Excelência e a vossa equipe.",
        right: "Agradeço a Vossa Excelência e a sua equipe.",
        why: `The possessive that goes with "Vossa Excelência" is "sua". "Vossa" survives only inside the form of address itself.`,
      },
      {
        wrong: "Me dirijo a Vossa Senhoria para solicitar...",
        right: "Dirijo-me a Vossa Senhoria para solicitar...",
        why: `In formal writing no sentence begins with an unstressed pronoun.`,
      },
      {
        wrong: "A reunião realizará-se no dia 5.",
        right: "A reunião será realizada no dia 5.",
        why: `A pronoun cannot follow a future form. The norm requires mesóclise ("realizar-se-á"); the passive avoids it and sounds less stiff.`,
      },
      {
        wrong: "Ilustríssimo Senhor Diretor,",
        right: "Senhor Diretor,",
        why: `Federal correspondence dropped "Ilustríssimo" in 2018; "Senhor" + post is the standard salutation. Some private institutions still use the older formula.`,
      },
    ],
    faqs: [
      {
        q: `Do I really need mesóclise?`,
        a: `To read laws, older texts and some official notices, yes. To write, almost never: rephrase with the passive ("será realizada"), another tense or a construction with "vai". Used in conversation, mesóclise is a joke about pomposity.`,
      },
      {
        q: `"O senhor" or "Vossa Senhoria" in a complaint to a company?`,
        a: `In a formal complaint letter, "Vossa Senhoria" is safe and traditional. In an email to a customer service address, "Prezados," and an impersonal style ("Solicito o cancelamento...") are more natural.`,
      },
      {
        q: `What is "linguagem simples"?`,
        a: `A plain-language movement adopted by many Brazilian public bodies: short sentences, everyday words, direct address with "você". It's the opposite pole to traditional bureaucratic style, and you'll see both side by side on government websites.`,
      },
    ],
    related: ["pronoun-placement-in-writing", "legal-and-press-language", "style-and-register", "register-and-the-written-norm"],
    lessons: [
      "c1-official-requerimento",
      "c1-official-correspondence",
      "c1-contracts",
      "c1-legal-texts",
      "c1-forms-of-address",
      "c1-contrast-official-plain",
      "c1-dialogue-consumer-complaint",
      "c1-error-hunt-official",
      "c1-mission-formal-complaint",
      "c1-spiral-official",
      "c1-official-requerimento-unit-review",
      "c1-official-extra-1",
      "c1-official-extra-2",
    ],
  },
  {
    slug: "brazilian-vs-european-portuguese",
    title: "Brazilian vs European Portuguese: Grammar, Words, Spelling and Sound",
    description:
      "A systematic comparison of the two standards: grammar (the progressive, \"tu\" and \"você\", pronoun placement, articles), high-frequency vocabulary and false friends, spelling after the 1990 Acordo Ortográfico, and the pronunciation that makes Lisbon hard to follow at first.",
    level: "C1",
    intro: [
      `Brazilian and European Portuguese are one language with two written standards, more different from each other than American and British English. Educated speakers understand each other's writing without effort; speech is another matter, especially for Brazilians hearing Portugal for the first time.`,
      `This course teaches Brazilian Portuguese, and you should keep writing it. But at the Advanced level you will read Portuguese newspapers, novels and websites, meet Portuguese colleagues, and adapt texts. This guide sets out the differences so you can recognise them, without mixing them into your own Portuguese. All European forms below are labelled and quoted.`,
    ],
    sections: [
      {
        heading: `Grammar`,
        body: [
          `The differences are few but frequent. The European progressive uses "estar a" + infinitive where Brazil uses the gerund. Portugal uses "tu" with second person verbs among friends and family, and "você" can sound distant or even rude when addressed to someone directly; Portuguese speakers often prefer the person's name or "o senhor". Pronouns follow the verb by default in Portugal ("diz-me", "chamo-me") and precede it in Brazilian speech.`,
          `Portugal also uses the article before possessives and first names much more ("o meu carro", "a Ana"), keeps the direct object pronoun in speech ("vi-o" where Brazilians say "vi ele"), and uses the imperfect for polite requests ("queria" in both, but European "gostava de" where Brazil says "gostaria de").`,
        ],
        table: {
          headers: ["Feature", "Brazil", "Portugal"],
          rows: [
            ["progressive", "Estou lendo.", "\"Estou a ler.\""],
            ["informal you", "Você vai? (\"tu vai\" in some regions)", "\"Tu vais?\""],
            ["pronoun at start", "Me diz uma coisa.", "\"Diz-me uma coisa.\""],
            ["object pronoun in speech", "Eu vi ele ontem.", "\"Vi-o ontem.\""],
            ["article + possessive", "Meu carro está na oficina.", "\"O meu carro está na oficina.\""],
            ["obligation", "Tenho que sair.", "\"Tenho de sair.\""],
            ["polite wish", "Gostaria de um café.", "\"Gostava de um café.\""],
          ],
        },
        examples: [
          { pt: "Estou terminando o relatório e já te mando.", en: "I'm finishing the report and I'll send it to you right away." },
          { pt: "Você pode me ajudar com isso?", en: "Can you help me with this?" },
          { pt: "Eu me lembro dela, mas não sei o nome.", en: "I remember her, but I don't know her name." },
        ],
      },
      {
        heading: `Vocabulary and false friends`,
        body: [
          `Most of the vocabulary is shared, but many everyday words differ, and a few shared words mean something quite different, sometimes offensive, on the other side of the Atlantic. Learn to understand the European words without adopting them.`,
        ],
        table: {
          headers: ["Brazil", "Portugal", "English"],
          rows: [
            ["trem", "\"comboio\"", "train"],
            ["ônibus", "\"autocarro\"", "bus"],
            ["celular", "\"telemóvel\"", "mobile phone"],
            ["tela", "\"ecrã\"", "screen"],
            ["mouse", "\"rato\"", "computer mouse"],
            ["banheiro", "\"casa de banho\"", "bathroom"],
            ["café da manhã", "\"pequeno-almoço\"", "breakfast"],
            ["suco", "\"sumo\"", "juice"],
            ["geladeira", "\"frigorífico\"", "fridge"],
            ["legal", "\"fixe\"", "cool"],
            ["terno", "\"fato\"", "suit (clothing)"],
            ["fila", "\"bicha\" (in Brazil a homophobic slur)", "queue"],
            ["mensalidade (escolar)", "\"propina\" (in Brazil: bribe)", "tuition fee"],
            ["garota, moça", "\"rapariga\" (offensive in parts of Brazil)", "girl"],
          ],
        },
        examples: [
          { pt: "Pegamos o trem e depois o ônibus até o centro.", en: "We took the train and then the bus to the centre." },
          { pt: "A fila do banco estava enorme.", en: "The queue at the bank was huge." },
          { pt: "Ele foi preso por receber propina.", en: "He was arrested for taking bribes." },
        ],
      },
      {
        heading: `Spelling and the Acordo Ortográfico`,
        body: [
          `The 1990 Spelling Agreement, in force in Brazil since 2009 and compulsory since 2016 (in Portugal since 2015), brought the two standards closer. Portugal dropped silent consonants ("acção" became "ação", "óptimo" became "ótimo"). Brazil dropped the trema ("linguiça", "tranquilo") and some accents ("ideia", "voo", "para", "leem").`,
          `Differences remain where pronunciation differs. Where Portuguese speakers pronounce a consonant that Brazilians don't, or vice versa, each country writes what it says: "fato" vs "facto" (fact; in Portugal "fato" is a suit), "recepção" vs "receção". And where the vowel quality differs, so does the accent: Brazilian "Antônio", "econômico", "gênero", "bebê" are European "António", "económico", "género", "bebé".`,
        ],
        table: {
          headers: ["Brazil", "Portugal", "Why"],
          rows: [
            ["fato", "\"facto\"", "the c is pronounced in Portugal"],
            ["contato", "\"contacto\"", "the c is pronounced in Portugal"],
            ["recepção", "\"receção\"", "the p is pronounced in Brazil"],
            ["Antônio, econômico", "\"António\", \"económico\"", "closed vs open vowel"],
            ["gênero, bebê", "\"género\", \"bebé\"", "closed vs open vowel"],
            ["registro", "\"registo\"", "different word form"],
          ],
        },
        examples: [
          { pt: "O fato é que ninguém leu o contrato.", en: "The fact is nobody read the contract." },
          { pt: "Deixe seus dados na recepção, por favor.", en: "Please leave your details at reception." },
        ],
      },
      {
        heading: `Pronunciation`,
        body: [
          `European Portuguese reduces or drops unstressed vowels, so words lose syllables: "telefone" sounds roughly like "tlfon", "pequeno" like "pqueno". Brazilians pronounce every vowel clearly, which is why Portuguese people usually understand Brazilians easily (they hear Brazilian television) while the reverse is harder.`,
          `Other cues: in Portugal (and in Rio de Janeiro) "s" before a consonant or at the end of a word sounds like "sh"; most of Brazil palatalises "t" and "d" before an "i" sound ("tia", "dia" with ch and j sounds), while Portugal doesn't; and Brazilians vocalise final "l" to a "u" sound ("Brasil" ends like "-iu"), while Portugal keeps a dark l.`,
        ],
        examples: [
          { pt: "Tia, você viu o meu telefone?", en: "Auntie, have you seen my phone?" },
          { pt: "O Brasil tem sotaques muito diferentes de norte a sul.", en: "Brazil has very different accents from north to south." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Estou a ler o relatório agora.",
        right: "Estou lendo o relatório agora.",
        why: `"Estar a" + infinitive is European. A Brazilian text uses the gerund.`,
      },
      {
        wrong: "Tomei o pequeno-almoço no hotel.",
        right: "Tomei café da manhã no hotel.",
        why: `"Pequeno-almoço" is European. In Brazil: "café da manhã".`,
      },
      {
        wrong: "Tu vais receber a proposta amanhã.",
        right: "Você vai receber a proposta amanhã.",
        why: `In a Brazilian business email "tu" with a second person verb sounds European (or regional); "você" or "o senhor / a senhora" is standard.`,
      },
      {
        wrong: "O facto é que o projeto atrasou.",
        right: "O fato é que o projeto atrasou.",
        why: `Brazilian spelling is "fato". "Facto" is European.`,
      },
      {
        wrong: "Gostava de marcar uma reunião.",
        right: "Gostaria de marcar uma reunião.",
        why: `The imperfect "gostava" for a polite wish is European. Brazil uses the conditional "gostaria" (or "queria").`,
      },
    ],
    faqs: [
      {
        q: `Will people in Portugal understand my Brazilian Portuguese?`,
        a: `Yes, easily. Brazilian television, music and online content are everywhere in Portugal. Expect them to switch a few words for you, and expect to need a few weeks to tune in to their speech.`,
      },
      {
        q: `Which standard is used in Angola, Mozambique and Cabo Verde?`,
        a: `Their schools and press follow the European written standard, with local vocabulary and features. Spoken Angolan and Mozambican Portuguese have their own accents and words, some shared with Brazil through history.`,
      },
      {
        q: `Should I learn to write European Portuguese too?`,
        a: `Only if you live or work in Portugal. Mixing the standards is the real problem: a Brazilian text with "facto" or "estou a fazer" reads as inconsistent. Choose one standard per text.`,
      },
    ],
    related: ["regional-variation-in-brazil", "linguistic-variation", "official-portuguese", "spelling-pairs-and-homophones"],
    lessons: [
      "c1-pt-grammar-differences",
      "c1-pt-vocabulary",
      "c1-pt-spelling",
      "c1-pt-pronunciation",
      "c1-lusophone-world",
      "c1-contrast-br-pt-c1",
      "c1-dialogue-lisbon",
      "c1-error-hunt-varieties",
      "c1-mission-adapt-text",
      "c1-spiral-varieties",
      "c1-pt-grammar-differences-unit-review",
      "c1-varieties-extra-1",
      "c1-varieties-extra-2",
    ],
  },
  {
    slug: "pragmatic-particles",
    title: "Aliás, Afinal, Até, Mesmo, Já: Particles, Intensity and Tact",
    description:
      "The small words that carry attitude in Brazilian Portuguese: \"aliás\", \"afinal\", \"até\", \"mesmo\", contrastive \"já\", \"é que\", \"pois é\" and \"ué\"; intensifiers and downtoners from \"super\" to \"meio\"; connotation; and how Brazilians signal irony and say no without saying it.",
    level: "C1",
    intro: [
      `A sentence like "Afinal, você vem ou não?" contains no difficult grammar, yet "afinal" changes everything: it signals impatience, a demand for a final answer. Brazilian conversation is full of these particles. They are rarely translatable word for word, and textbooks tend to skip them, but native speakers judge your fluency by them.`,
      `The same is true of tact. Brazilians tend to avoid a blunt "não", soften criticism, and use irony and understatement constantly. Understanding "vou ver" (often a polite no) is as important as any tense.`,
    ],
    sections: [
      {
        heading: `"Aliás", "afinal", "até", "mesmo"`,
        body: [
          `Each of these has a basic meaning and a pragmatic one. Position matters: "afinal" at the start of a question demands an answer; at the end of a statement it means after all. "Até" before a noun or pronoun means even; "até que" can mean actually, surprisingly ("Até que foi divertido").`,
        ],
        table: {
          headers: ["Particle", "Use", "Example", "Meaning"],
          rows: [
            ["aliás", "adding a stronger point", "Ela é ótima. Aliás, é a melhor da equipe.", "in fact"],
            ["aliás", "self-correction", "A reunião é terça, aliás, quarta.", "or rather"],
            ["afinal", "demanding an answer", "Afinal, quem vai pagar?", "so (come on)"],
            ["afinal (de contas)", "justification", "Ele merece. Afinal de contas, trabalhou muito.", "after all"],
            ["até", "surprise, inclusion", "Até a minha avó usa o aplicativo.", "even"],
            ["até que", "positive surprise", "Até que o filme não foi ruim.", "actually, not bad"],
            ["mesmo", "emphasis", "Foi ele mesmo que ligou.", "himself, really"],
            ["mesmo", "concession", "Mesmo cansada, ela foi à aula.", "even though"],
          ],
        },
        examples: [
          { pt: "Você vai mesmo pedir demissão?", en: "Are you really going to quit?" },
          { pt: "Afinal, o que aconteceu ontem?", en: "So what actually happened yesterday?" },
          { pt: "Ele chegou atrasado. Aliás, como sempre.", en: "He arrived late. As usual, in fact." },
        ],
      },
      {
        heading: `"Já", "é que", "pois é", "ué" and friends`,
        body: [
          `"Já" contrasts two people or situations, like whereas: "Eu adoro praia; já o meu marido prefere montanha." "É que" introduces an explanation or excuse: "Desculpa o atraso, é que o trânsito estava horrível." "Pois é" agrees or acknowledges (yeah, exactly; tell me about it). "Ué" expresses puzzled surprise. "Sei lá" (I dunno) and "tipo" (like) belong to informal speech.`,
          `These are spoken features. In formal writing, replace them with connectors: "já" becomes "por sua vez" or "enquanto", "é que" becomes "pois" or "porque".`,
        ],
        examples: [
          { pt: "Desculpa não ter respondido, é que eu estava sem bateria.", en: "Sorry I didn't reply, the thing is my battery was dead." },
          { pt: "Ué, cadê a chave? Estava aqui agora mesmo.", en: "Huh, where's the key? It was here a second ago." },
          { pt: "Pois é, ninguém esperava esse resultado.", en: "Yeah, nobody expected that result." },
          { pt: "A Mariana fala alto; já a irmã dela quase não fala.", en: "Mariana talks loudly, whereas her sister hardly speaks." },
        ],
      },
      {
        heading: `Intensity and connotation`,
        body: [
          `"Super" and "mega" are informal intensifiers, written joined to the word ("supercaro", "megaevento"; with a hyphen before h or r: "super-rápido"). "Bem" before an adjective means quite or very ("bem caro"). Downtoners soften: "meio" (a bit; invariable as an adverb: "meio cansada"), "um pouco", "um tanto", "levemente", and the informal "meio que" (sort of). "Nada" intensifies a negative: "Não foi nada fácil."`,
          `Near-synonyms carry different attitudes. "Magro" is neutral, "esbelto" admiring, "raquítico" negative; "persistente" praises what "teimoso" criticises; "em conta" sounds better than "barato" when you're selling. Euphemisms soften sensitive topics: "faleceu" for "morreu", "pessoa em situação de rua" for the homeless.`,
        ],
        table: {
          headers: ["Positive", "Neutral", "Negative"],
          rows: [
            ["esbelto", "magro", "raquítico"],
            ["persistente", "insistente", "teimoso"],
            ["em conta, acessível", "barato", "baratinho, de quinta"],
            ["econômico", "cuidadoso com dinheiro", "pão-duro, mão de vaca"],
          ],
        },
        examples: [
          { pt: "O hotel é bem simples, mas é super bem localizado.", en: "The hotel is very basic, but it's really well located." },
          { pt: "Ela ficou meio chateada com o comentário.", en: "She was a bit upset by the comment." },
          { pt: "O avô dela faleceu no ano passado.", en: "Her grandfather passed away last year." },
        ],
      },
      {
        heading: `Irony, understatement and the polite no`,
        body: [
          `Brazilians rarely refuse directly. "Vou ver", "quem sabe", "vamos marcar" and "te falo depois" often mean no, or not now; "aparece lá em casa" is friendly, not necessarily an invitation with a date. Read the context and the follow-up.`,
          `Irony is signalled by tone and stock phrases: "Que ótimo!" or "Maravilha, hein!" for bad news, "Imagina!" (don't mention it; or, ironically, as if!), "Nada como..." for something unpleasant. Understatement ("não foi dos melhores") is a common polite criticism.`,
        ],
        examples: [
          { pt: "Vou ver se consigo ir, mas acho difícil.", en: "I'll see if I can make it, but I doubt it." },
          { pt: "Choveu o fim de semana inteiro. Que ótimo, hein!", en: "It rained all weekend. Great, wasn't it!" },
          { pt: "Obrigada pela ajuda! Imagina, não foi nada.", en: "Thanks for the help! Don't mention it, it was nothing." },
          { pt: "O almoço não foi dos melhores.", en: "Lunch wasn't exactly the best." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ela ficou meia chateada.",
        right: "Ela ficou meio chateada.",
        why: `As an adverb (a bit), "meio" is invariable. "Meia" is the adjective half: "meia hora".`,
      },
      {
        wrong: "Discutimos, votamos e, afinal, assinamos o acordo.",
        right: "Discutimos, votamos e, por fim, assinamos o acordo.",
        why: `"Afinal" isn't the last step of a sequence. Use "por fim" or "finalmente".`,
      },
      {
        wrong: "Ele mesmo veio à festa, que surpresa!",
        right: "Até ele veio à festa, que surpresa!",
        why: `"Ele mesmo" means he himself. For even he, use "até ele".`,
      },
      {
        wrong: "O restaurante é super muito caro.",
        right: "O restaurante é supercaro.",
        why: `"Super" is a prefix-like intensifier; don't stack it with "muito". Choose one.`,
      },
      {
        wrong: "Ela é muito magra e raquítica, uma modelo linda.",
        right: "Ela é muito magra e esbelta, uma modelo linda.",
        why: `"Raquítico" is negative (sickly, scrawny). For admiration, use "esbelto".`,
      },
    ],
    faqs: [
      {
        q: `Can I use "tipo" and "sei lá" in a Celpe-Bras interview?`,
        a: `Occasional "tipo" for example is normal in spoken Brazilian Portuguese. Constant fillers lower the impression of range. In the written tasks, avoid them completely.`,
      },
      {
        q: `How do I know if "vou ver" means no?`,
        a: `Look for a follow-up: a specific day, a question about details, or "com certeza". Without any of these, and especially with "mas acho difícil", it's a soft no. Brazilians appreciate the same tact back.`,
      },
      {
        q: `Is "super" written separately?`,
        a: `As a prefix it's joined: "supermercado", "supercaro", "superinteressante", with a hyphen before h and r ("super-homem", "super-rápido"). Before a phrase or an adverb, informal writing often separates it ("super bem", "super de boa").`,
      },
    ],
    related: ["word-order-and-emphasis", "spoken-discourse-markers", "style-and-register", "figures-of-speech"],
    lessons: [
      "c1-connotation",
      "c1-euphemism",
      "c1-intensifiers",
      "c1-particles-1",
      "c1-particles-2",
      "c1-irony",
      "c1-contrast-connotation",
      "c1-dialogue-polite-refusal",
      "c1-error-hunt-nuance",
      "c1-spiral-nuance",
      "c1-connotation-unit-review",
      "c1-nuance-extra-1",
      "c1-nuance-extra-2",
    ],
  },
  {
    slug: "word-order-and-emphasis",
    title: "Esse Filme, Eu Nunca Vi: Word Order, Clefts and Emphasis",
    description:
      "How Brazilian Portuguese moves words for emphasis: topics at the front, cleft sentences (\"foi ele que\", \"fomos nós que\") and their agreement, \"é que\" in questions, verb-subject inversion with its agreement trap, focus words like \"só\" and \"até\", and the emphatic double negative.",
    level: "C1",
    intro: [
      `Portuguese word order is freer than English, and Brazilians use that freedom constantly. "Esse filme, eu nunca vi" puts the topic first; "Foi a Ana que ligou" focuses on who; "Chegou o pacote" puts the subject after the verb because the news is the package itself.`,
      `These structures are grammatically simple but have rules of agreement and register that learners break. "Foi nós que pagamos" and "Chegou as encomendas" are among the most frequent non-standard forms, and the norm corrects them.`,
    ],
    sections: [
      {
        heading: `Topics: putting what you're talking about first`,
        body: [
          `Brazilian speech often starts with the topic, followed by a comment about it. In speech, a pronoun may pick the topic up again: "O João, ninguém aguenta ele." In writing, the object pronoun "o" takes that place ("O João, ninguém o aguenta"), or the sentence is rearranged ("Ninguém aguenta o João").`,
          `Topic-first order is a natural way to contrast: "Café eu tomo; chá, não." It also helps to organise a conversation: "Sobre a viagem, a gente decide amanhã."`,
        ],
        examples: [
          { pt: "Esse filme, eu nunca vi.", en: "That film, I've never seen." },
          { pt: "Política, eu prefiro não discutir no trabalho.", en: "Politics I'd rather not discuss at work." },
          { pt: "Quanto ao orçamento, a diretoria ainda não decidiu.", en: "As for the budget, the board hasn't decided yet." },
        ],
      },
      {
        heading: `Cleft sentences and their agreement`,
        body: [
          `A cleft highlights one element with "ser... que" or "ser... quem": "Foi a Ana que ligou", "É no Rio que ela mora", "Foi em 2010 que nos conhecemos". The pseudo-cleft starts with "o que": "O que eu quero é descansar."`,
          `Agreement is the trap. "Ser" agrees with the highlighted pronoun, and with "que" the main verb does too: "Fomos nós que pagamos", "Eram eles que sabiam". With "quem", the verb may stay in the third person singular: "Fomos nós quem pagou" (also accepted: "quem pagamos"). Spoken Brazilian has a short cleft without "ser" that is perfectly natural: "Eu que paguei", "A gente que fez".`,
        ],
        table: {
          headers: ["Highlighted", "Cleft", "Neutral order"],
          rows: [
            ["subject", "Foi a Ana que ligou.", "A Ana ligou."],
            ["pronoun subject", "Fomos nós que pagamos a conta.", "Nós pagamos a conta."],
            ["place", "É em Curitiba que eles moram.", "Eles moram em Curitiba."],
            ["time", "Foi em 2010 que nos conhecemos.", "Nós nos conhecemos em 2010."],
            ["object (pseudo-cleft)", "O que eu preciso é de férias.", "Eu preciso de férias."],
          ],
        },
        examples: [
          { pt: "Não fui eu que quebrei o vaso!", en: "It wasn't me who broke the vase!" },
          { pt: "É por isso que ninguém quis vir.", en: "That's why nobody wanted to come." },
          { pt: "O que mais me incomoda é a falta de respeito.", en: "What bothers me most is the lack of respect." },
        ],
      },
      {
        heading: `"É que" in questions`,
        body: [
          `Question words are often followed by "é que" in speech: "Onde é que você mora?", "O que é que houve?", "Por que é que ninguém avisou?" It makes the question sound natural and slightly emphatic, not formal. Informally, "é" is often dropped: "Quem que ligou?"`,
          `Don't add it to every question, and avoid it in formal writing, where the plain question ("Onde você mora?", "Por que ninguém avisou?") is standard.`,
        ],
        examples: [
          { pt: "Quando é que você volta de Manaus?", en: "When are you coming back from Manaus?" },
          { pt: "O que é que você quer dizer com isso?", en: "What do you mean by that?" },
        ],
      },
      {
        heading: `Inversion, focus words and the double negative`,
        body: [
          `Verbs of arrival, appearance, existence and lack often come before their subject, especially when the subject is new information: "Chegou o pacote", "Faltam dois dias", "Existem muitas dúvidas", "Morreu o cantor". Headlines love this order. The verb still agrees with the subject that follows: "Chegaram as encomendas", not "Chegou as encomendas".`,
          `Focus words attach to what follows them: "Só ele sabe" (only he knows) vs "Ele só sabe isso" (he knows only that); "Até eu entendi" (even I understood). In speech, a second "não" at the end adds emphasis or softens a refusal: "Não quero, não."`,
        ],
        examples: [
          { pt: "Começaram as inscrições para o vestibular.", en: "Registration for the entrance exam has opened." },
          { pt: "Faltam só três dias para o Carnaval.", en: "There are only three days left until Carnival." },
          { pt: "Ela trabalha só às segundas.", en: "She only works on Mondays." },
          { pt: "Não sei, não. Acho melhor esperar.", en: "I'm not so sure. I think it's better to wait." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Foi nós que pagamos a conta.",
        right: "Fomos nós que pagamos a conta.",
        why: `In a cleft, "ser" agrees with the highlighted pronoun.`,
      },
      {
        wrong: "Chegou as encomendas que você pediu.",
        right: "Chegaram as encomendas que você pediu.",
        why: `The subject after the verb still controls agreement. This is one of the most common slips in Brazilian speech and is corrected in writing.`,
      },
      {
        wrong: "Existe muitos problemas no projeto.",
        right: "Existem muitos problemas no projeto.",
        why: `"Existir" agrees with its subject. Only "haver" is impersonal: "Há muitos problemas".`,
      },
      {
        wrong: "Era eles que sabiam a verdade.",
        right: "Eram eles que sabiam a verdade.",
        why: `"Ser" agrees with "eles".`,
      },
      {
        wrong: "O Pedro, ninguém aguenta ele.",
        right: "Ninguém aguenta o Pedro.",
        why: `Fine in conversation, but the resumptive "ele" as an object is spoken style. In an essay, rephrase or use "o": "O Pedro, ninguém o aguenta."`,
      },
    ],
    faqs: [
      {
        q: `"Fomos nós que" or "fomos nós quem"?`,
        a: `Both are correct. With "que", the next verb agrees with the pronoun ("fomos nós que fizemos"). With "quem", the third person singular is the traditional choice ("fomos nós quem fez"), and agreement with the pronoun is also accepted.`,
      },
      {
        q: `Is "Eu que fiz" correct?`,
        a: `It's the normal spoken Brazilian cleft, without "ser", and it's widely used in informal writing. In formal writing use "Fui eu que fiz" or simply "Eu fiz".`,
      },
      {
        q: `Why do Brazilian headlines put the verb first?`,
        a: `Because with verbs of happening, the new information is the subject, and Portuguese puts new information at the end: "Morre aos 90 anos o escritor X" reads as news, while "O escritor X morre aos 90 anos" is equally correct and slightly more neutral.`,
      },
    ],
    related: ["pragmatic-particles", "agreement-traps", "figures-of-speech", "spoken-discourse-markers"],
    lessons: [
      "c1-topicalisation",
      "c1-clefts",
      "c1-e-que-questions",
      "c1-inversion",
      "c1-focus-adverbs",
      "c1-contrast-word-order",
      "c1-dialogue-emphasis",
      "c1-error-hunt-word-order",
      "c1-transform-emphasis",
      "c1-spiral-word-order",
      "c1-topicalisation-unit-review",
      "c1-word-order-extra-1",
      "c1-word-order-extra-2",
    ],
  },
  {
    slug: "media-stance-and-distance",
    title: "Stance, Modality and Distance: Reading and Writing Opinion",
    description:
      "The language of opinion journalism and critical response: stance markers from \"convém lembrar\" to \"é inadmissível\" and the mood each one takes, distancing devices (\"teria\", \"supostamente\", \"segundo\"), loaded reporting verbs, and the Portuguese names of rhetorical devices and fallacies.",
    level: "C1",
    intro: [
      `An editorial and a news report can describe the same event in very different language. The report distances itself from unconfirmed claims ("o suspeito teria fugido") and uses neutral reporting verbs ("disse", "afirmou"). The editorial takes a stance ("é inadmissível que...", "não se pode ignorar...") and chooses verbs that judge ("admitiu", "alegou", "disparou").`,
      `At the Advanced level you need both skills: to read the stance hidden in a text, and to build your own with the right modality and the right mood. Many stance expressions are impersonal, and many of them require the subjunctive.`,
    ],
    sections: [
      {
        heading: `Stance markers and their mood`,
        body: [
          `Impersonal expressions of evaluation and necessity take the subjunctive when followed by "que" ("É fundamental que o governo invista"), or the infinitive when the subject is general ("É fundamental investir"). Expressions of certainty take the indicative ("É evidente que o modelo fracassou"). Negated certainty takes the subjunctive ("Não é verdade que o modelo tenha fracassado").`,
        ],
        table: {
          headers: ["Stance", "Expressions", "Mood after que"],
          rows: [
            ["soft reminder", "convém lembrar, vale ressaltar, cabe destacar", "infinitive (+ que + indicative)"],
            ["necessity", "é fundamental, é imprescindível, é urgente", "subjunctive"],
            ["condemnation", "é inadmissível, é lamentável, é inaceitável", "subjunctive"],
            ["certainty", "é evidente, é inegável, não há dúvida de", "indicative"],
            ["denied certainty", "não é verdade, não é certo", "subjunctive"],
            ["concession", "não se pode negar, é bem verdade", "indicative"],
          ],
        },
        examples: [
          { pt: "Convém lembrar que a lei está em vigor desde 2014.", en: "It's worth remembering that the law has been in force since 2014." },
          { pt: "É inadmissível que hospitais públicos funcionem sem medicamentos básicos.", en: "It is unacceptable for public hospitals to operate without basic medicines." },
          { pt: "É inegável que houve avanços, mas eles são insuficientes.", en: "There has undeniably been progress, but it isn't enough." },
        ],
      },
      {
        heading: `Distance: "segundo", "teria", "supostamente"`,
        body: [
          `A report attributes and distances. Attribution: "segundo", "de acordo com", "conforme", "para" + source. Distance: the conditional ("teria dito", "estaria envolvido"), adjectives such as "suposto" and "alegado" ("o suposto esquema"), and adverbs such as "supostamente". Use one device per claim; stacking them ("supostamente teria") is redundant.`,
          `Reporting verbs carry stance. "Dizer", "afirmar", "declarar" and "informar" are neutral. "Admitir" and "reconhecer" imply the speaker gave something up; "alegar" implies doubt; "confessar" implies guilt; "disparar", "rebater" and "criticar" add drama. A headline with "admite" makes a different claim from one with "diz".`,
        ],
        examples: [
          { pt: "De acordo com o relatório, o desmatamento teria caído 20% no último ano.", en: "According to the report, deforestation reportedly fell 20% last year." },
          { pt: "O ministro admitiu que houve falhas na fiscalização.", en: "The minister admitted there had been failures in oversight." },
          { pt: "A empresa alega que o atraso foi causado pela chuva.", en: "The company claims the delay was caused by the rain." },
        ],
      },
      {
        heading: `Naming rhetoric and fallacies`,
        body: [
          `A critical response names what the author does. Portuguese uses mostly transparent terms, several of them Latin, as in English. Use them with a verb: "O colunista recorre a uma falsa dicotomia", "O argumento incorre em generalização apressada".`,
        ],
        table: {
          headers: ["Term", "English", "Example of the move"],
          rows: [
            ["pergunta retórica", "rhetorical question", "Até quando vamos aceitar isso?"],
            ["apelo à emoção", "appeal to emotion", "Pense nas crianças que sofrem."],
            ["espantalho", "straw man", "Quem defende a reforma quer acabar com a escola pública."],
            ["ad hominem", "attack on the person", "Ele não entende de economia, nunca trabalhou."],
            ["falsa dicotomia", "false dilemma", "Ou aprovamos a lei, ou o país quebra."],
            ["ladeira escorregadia", "slippery slope", "Hoje é o aplicativo, amanhã é a censura total."],
            ["apelo à autoridade", "appeal to authority", "Um famoso disse, então é verdade."],
            ["generalização apressada", "hasty generalisation", "Meu vizinho foi assaltado, a cidade inteira é perigosa."],
          ],
        },
        examples: [
          { pt: "O texto recorre a uma falsa dicotomia ao sugerir que só existem duas opções.", en: "The text resorts to a false dilemma by suggesting there are only two options." },
          { pt: "Em vez de discutir os dados, o autor ataca a pessoa do adversário.", en: "Instead of discussing the data, the author attacks his opponent personally." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "É inadmissível que o governo ignora o problema.",
        right: "É inadmissível que o governo ignore o problema.",
        why: `Expressions of evaluation followed by "que" take the subjunctive.`,
      },
      {
        wrong: "É evidente que o modelo tenha fracassado.",
        right: "É evidente que o modelo fracassou.",
        why: `Expressions of certainty assert, so they take the indicative.`,
      },
      {
        wrong: "Convém de lembrar que o prazo é curto.",
        right: "Convém lembrar que o prazo é curto.",
        why: `"Convém", "cabe" and "vale" take the bare infinitive.`,
      },
      {
        wrong: "O suspeito supostamente teria fugido.",
        right: "O suspeito teria fugido.",
        why: `One distancing device is enough. Use the conditional or "supostamente fugiu", not both.`,
      },
    ],
    faqs: [
      {
        q: `Is "alegadamente" used in Brazil?`,
        a: `It exists and appears in some news, but "supostamente", the journalistic conditional and "segundo" + source are far more common in Brazilian journalism.`,
      },
      {
        q: `"Cabe destacar" or "cabe destacarmos"?`,
        a: `"Cabe destacar" is the standard impersonal form. The inflected infinitive is possible but unnecessary when the subject is general.`,
      },
      {
        q: `How do I distinguish a reportagem from an opinion column?`,
        a: `Look for evaluation (adjectives, "é inadmissível", rhetorical questions), first person or "nós", and loaded reporting verbs. A reportagem attributes every claim and keeps stance to its choice of sources and headline.`,
      },
    ],
    related: ["probability-future-conditional", "argumentative-connectors", "academic-portuguese", "legal-and-press-language"],
    lessons: [
      "c1-media-genres",
      "c1-media-stance",
      "c1-media-rhetoric",
      "c1-media-fallacies",
      "c1-media-misinformation",
      "c1-contrast-report-opinion",
      "c1-dialogue-media-debate",
      "c1-error-hunt-media",
      "c1-mission-critical-response",
      "c1-spiral-media",
      "c1-media-genres-unit-review",
      "c1-media-extra-1",
      "c1-media-extra-2",
    ],
  },
];
