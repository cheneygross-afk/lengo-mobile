// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-guides-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { PtGrammarGuide } from "./pt-types";

// Brazilian Portuguese grammar guides, A2 (see the notes at the top of ./pt-types.ts).
export const PT_A2_GUIDES: PtGrammarGuide[] = [
  {
    slug: "preterito-perfeito-regular",
    title: "The Pretérito Perfeito: Regular Verbs",
    description:
      "The main past tense for finished actions (falei, comi, abri): the endings for -ar, -er and -ir verbs, the eu-form spelling changes (cheguei, fiquei, comecei), and já, ainda não and nunca.",
    level: "A2",
    intro: [
      `The "pretérito perfeito" is the past tense for things that happened and finished: "Ontem eu trabalhei até tarde" (yesterday I worked late), "A gente comeu pizza" (we ate pizza). It is the tense you need first to talk about your weekend, a trip or your day.`,
      `One Portuguese tense covers English I spoke, I did speak and very often I have spoken: "Você já comeu?" means have you eaten yet? The English present perfect has no everyday equivalent in Brazilian Portuguese, which makes life simpler.`,
    ],
    sections: [
      {
        heading: `The endings`,
        body: [
          `Take off "-ar", "-er" or "-ir" and add the endings below. The stress always falls on the ending: "fa-LEI", "fa-LOU", "co-MEU", "a-BRIU". This stress is what tells the past "falou" from the present "fala".`,
          `The "nós" form of "-ar" and "-ir" verbs is the same as in the present: "falamos", "abrimos". Context and time words decide: "Hoje a gente estuda" (today we study) but "Ontem a gente estudou". In speech Brazilians often avoid the ambiguity by using "a gente".`,
        ],
        table: {
          headers: ["Subject", "falar", "comer", "abrir"],
          rows: [
            ["eu", "falei", "comi", "abri"],
            ["você, ele, ela, a gente", "falou", "comeu", "abriu"],
            ["nós", "falamos", "comemos", "abrimos"],
            ["vocês, eles, elas", "falaram", "comeram", "abriram"],
          ],
        },
        examples: [
          { pt: "Ontem eu trabalhei até as nove.", en: "Yesterday I worked until nine." },
          { pt: "Você assistiu ao jogo?", en: "Did you watch the game?" },
          { pt: "A gente almoçou num restaurante japonês.", en: "We had lunch at a Japanese restaurant." },
          { pt: "Eles venderam o apartamento no mês passado.", en: "They sold the apartment last month." },
          { pt: "Ela abriu a janela porque estava calor.", en: "She opened the window because it was hot." },
        ],
      },
      {
        heading: `Spelling changes in the eu form`,
        body: [
          `Verbs ending in "-car", "-gar" and "-çar" change their spelling before the "-ei" ending, to keep the same sound: "c" becomes "qu", "g" becomes "gu", "ç" becomes "c". Only the "eu" form changes; the others are regular.`,
        ],
        table: {
          headers: ["Ending", "Infinitive", "eu", "ele, ela"],
          rows: [
            ["-car", "ficar", "fiquei", "ficou"],
            ["-car", "tocar", "toquei", "tocou"],
            ["-gar", "chegar", "cheguei", "chegou"],
            ["-gar", "pagar", "paguei", "pagou"],
            ["-çar", "começar", "comecei", "começou"],
            ["-çar", "almoçar", "almocei", "almoçou"],
          ],
        },
        examples: [
          { pt: "Cheguei em casa à meia-noite.", en: "I got home at midnight." },
          { pt: "Eu fiquei no hotel o dia todo.", en: "I stayed at the hotel all day." },
          { pt: "Já paguei a conta.", en: "I've already paid the bill." },
          { pt: "Comecei a estudar português em março.", en: "I started studying Portuguese in March." },
        ],
      },
      {
        heading: `Já, ainda não and nunca`,
        body: [
          `"Já" with the perfeito means already or ever: "Já comi" (I've already eaten), "Você já foi a Salvador?" (have you ever been to Salvador?). The usual answers are "Já!" or "Ainda não" (not yet). "Já" normally goes before the verb.`,
          `"Nunca" (never) plus the perfeito gives the English I've never: "Nunca comi açaí". No "não" is needed when "nunca" comes before the verb.`,
        ],
        examples: [
          { pt: "Você já almoçou? Ainda não.", en: "Have you had lunch? Not yet." },
          { pt: "Já terminei o relatório.", en: "I've already finished the report." },
          { pt: "Eu nunca viajei para o Nordeste.", en: "I've never travelled to the Northeast." },
          { pt: "Vocês já experimentaram tapioca?", en: "Have you ever tried tapioca?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu chegei tarde.",
        right: "Eu cheguei tarde.",
        why: `"Chegar" adds a "u" in the "eu" form to keep the hard g sound: "cheguei".`,
      },
      {
        wrong: "Nós falemos com ele ontem.",
        right: "Nós falamos com ele ontem.",
        why: `The "nós" form of "-ar" verbs in the past is "-amos", the same as in the present.`,
      },
      {
        wrong: "Ontem eu como feijoada.",
        right: "Ontem eu comi feijoada.",
        why: `"Ontem" (yesterday) needs the past tense. The present "como" means I eat.`,
      },
      {
        wrong: "Você já comeste?",
        right: "Você já comeu?",
        why: `"Comeste" is the "tu" form used in Portugal. With "você" use the ele/ela form, "comeu".`,
      },
      {
        wrong: "Ele falô comigo.",
        right: "Ele falou comigo.",
        why: `People pronounce it like "falô", but it is always written "falou".`,
      },
    ],
    faqs: [
      {
        q: `How do I say I have lived here for two years?`,
        a: `Not with the perfeito. An action that started in the past and is still going on uses the present: "Moro aqui há dois anos." The perfeito is for things that are finished.`,
      },
      {
        q: `Does Brazilian Portuguese have a tense like I have done?`,
        a: `There is a compound form, "tenho feito", but it means I have been doing (repeatedly, lately), not I have done. For I have done something, use the perfeito: "Já fiz".`,
      },
      {
        q: `Is the perfeito different in Portugal?`,
        a: `It is used the same way. Portugal adds the "tu" forms ("tu falaste") and, in the standard spelling there, writes the past "nós" form of "-ar" verbs with an accent, "falámos", to tell it from the present "falamos". Brazil writes both without an accent.`,
      },
    ],
    related: ["preterito-perfeito-irregular", "imperfeito", "perfeito-vs-imperfeito", "preterito-perfeito-composto"],
    lessons: [
      "a2-perfeito-regular-1",
      "a2-perfeito-regular-2",
      "a2-perfeito-pattern-drill",
      "a2-perfeito-spelling-eu",
      "a2-contrast-falamos-present-past",
      "a2-ja-ainda-nao",
      "a2-error-hunt-perfeito",
      "a2-transform-today-yesterday",
    ],
  },
  {
    slug: "preterito-perfeito-irregular",
    title: "Irregular Verbs in the Pretérito Perfeito",
    description:
      "The irregular past forms you need every day (fui, tive, estive, fiz, pude, quis, disse, trouxe, vi, vim, dei, pus, soube), how fui means both was and went, and há and faz for ago.",
    level: "A2",
    intro: [
      `The most frequent verbs are irregular in the past, as in English (went, had, did). The good news is that they share patterns: the "eu" form usually ends in "-e" or "-i" with the stress on the stem ("tive", "fiz", "pude"), and the ele/ela form often differs from it only in the final vowel ("teve", "fez", "pôde").`,
      `One surprise: "ser" (to be) and "ir" (to go) have exactly the same past forms. "Eu fui ao Rio" is I went to Rio; "A festa foi ótima" is the party was great. Context always makes it clear.`,
    ],
    sections: [
      {
        heading: `Fui, tive, estive, fiz`,
        body: [
          `These four come up in almost every conversation about the past. "Estive" is used for having been somewhere ("Estive em Salvador em 2022"), while "fui" is used for going there ("Fui a Salvador"). For saying how something was, use "foi": "Como foi a viagem? Foi incrível."`,
          `"Tive que" means had to: "Tive que trabalhar no sábado." In "fez" the e is closed, like "fêz" without the accent; in "fiz" it is an i.`,
        ],
        table: {
          headers: ["Subject", "ser / ir", "ter", "estar", "fazer"],
          rows: [
            ["eu", "fui", "tive", "estive", "fiz"],
            ["você, ele, ela, a gente", "foi", "teve", "esteve", "fez"],
            ["nós", "fomos", "tivemos", "estivemos", "fizemos"],
            ["vocês, eles, elas", "foram", "tiveram", "estiveram", "fizeram"],
          ],
        },
        examples: [
          { pt: "No sábado eu fui à praia com uns amigos.", en: "On Saturday I went to the beach with some friends." },
          { pt: "O show foi maravilhoso.", en: "The concert was wonderful." },
          { pt: "Tive uma reunião longa hoje.", en: "I had a long meeting today." },
          { pt: "Vocês já estiveram em Manaus?", en: "Have you ever been to Manaus?" },
          { pt: "Fez muito calor no Carnaval.", en: "It was really hot during Carnival." },
        ],
      },
      {
        heading: `The second group: pude, quis, disse, vi, vim...`,
        body: [
          `Learn the "eu" and ele/ela forms of each verb as a pair; the plural forms follow from the ele/ela stem ("disse" gives "dissemos", "disseram"). Watch the accent in "pôde" (could, past), which tells it from the present "pode" (can).`,
          `"Ver" (to see) and "vir" (to come) are easy to confuse: "eu vi" (I saw) but "eu vim" (I came), "ele viu" but "ele veio". "Saber" in the past usually means found out: "Eu soube ontem" (I found out yesterday).`,
        ],
        table: {
          headers: ["Infinitive", "eu", "ele, ela", "eles, elas"],
          rows: [
            ["poder", "pude", "pôde", "puderam"],
            ["querer", "quis", "quis", "quiseram"],
            ["dizer", "disse", "disse", "disseram"],
            ["trazer", "trouxe", "trouxe", "trouxeram"],
            ["saber", "soube", "soube", "souberam"],
            ["ver", "vi", "viu", "viram"],
            ["vir", "vim", "veio", "vieram"],
            ["dar", "dei", "deu", "deram"],
            ["pôr", "pus", "pôs", "puseram"],
          ],
        },
        examples: [
          { pt: "Ela disse que vem amanhã.", en: "She said she's coming tomorrow." },
          { pt: "Não pude ir à festa.", en: "I couldn't go to the party." },
          { pt: "Eu vi o Lucas no metrô.", en: "I saw Lucas on the subway." },
          { pt: "Meus pais vieram de Belém para o casamento.", en: "My parents came from Belém for the wedding." },
          { pt: "A Bia trouxe um bolo de cenoura.", en: "Bia brought a carrot cake with her." },
        ],
      },
      {
        heading: `Ago: "há" and "faz"`,
        body: [
          `To say ago, put "há" or "faz" before the amount of time: "Há dois dias" or "Faz dois dias" (two days ago). It can go at the start or the end: "Cheguei há uma semana", "Faz um mês que eu vi ela." "Faz" is more common in speech, "há" in writing; both are correct.`,
          `Don't confuse "há" (ago, spelled with h) with "a" in "daqui a" (from now, for the future): "Cheguei há dois dias" (two days ago) but "Vou viajar daqui a dois dias" (in two days).`,
        ],
        examples: [
          { pt: "Eu me mudei para cá há três anos.", en: "I moved here three years ago." },
          { pt: "Faz muito tempo que a gente não se vê!", en: "It's been ages since we last saw each other!" },
          { pt: "O ônibus saiu há cinco minutos.", en: "The bus left five minutes ago." },
          { pt: "A reunião é daqui a uma hora.", en: "The meeting is in an hour." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu fazi o jantar.",
        right: "Eu fiz o jantar.",
        why: `"Fazer" is irregular in the past: "eu fiz", "ele fez".`,
      },
      {
        wrong: "Eu teve um problema.",
        right: "Eu tive um problema.",
        why: `"Teve" is the ele/ela form. The "eu" form is "tive".`,
      },
      {
        wrong: "Ele dizeu que sim.",
        right: "Ele disse que sim.",
        why: `"Dizer" has the irregular past "disse", the same for "eu" and "ele".`,
      },
      {
        wrong: "Eu vi aqui ontem.",
        right: "Eu vim aqui ontem.",
        why: `I came is "eu vim" (from "vir"). "Eu vi" means I saw.`,
      },
      {
        wrong: "Ele não pode vir ontem.",
        right: "Ele não pôde vir ontem.",
        why: `The past is "pôde", with a circumflex. "Pode" is the present.`,
      },
    ],
    faqs: [
      {
        q: `How do I know if "foi" means was or went?`,
        a: `Look at what follows. A destination with "a" or "para" means went: "foi ao mercado", "foi para casa". An adjective or noun means was: "foi ótimo", "foi uma surpresa". In practice it is almost never ambiguous.`,
      },
      {
        q: `Is it "fui em" or "fui a"?`,
        a: `In careful Portuguese, "fui a" or "fui para": "fui ao cinema". In casual Brazilian speech "fui no cinema" is extremely common. Use "a" or "para" in writing.`,
      },
      {
        q: `Are these forms the same in Portugal?`,
        a: `Yes, the irregular stems are the same. Portugal also uses the "tu" forms ("tu foste", "tu fizeste") and says "estive" more often where Brazilians might say "fui", but you will be understood everywhere.`,
      },
    ],
    related: ["preterito-perfeito-regular", "perfeito-vs-imperfeito", "prepositions-place-time"],
    lessons: [
      "a2-perfeito-ser-ir",
      "a2-perfeito-ter-estar",
      "a2-perfeito-fazer",
      "a2-ha-faz-ago",
      "a2-irregular-drill-1",
      "a2-contrast-foi-fui",
      "a2-error-hunt-irregular-1",
      "a2-perfeito-irregular-2a",
      "a2-perfeito-irregular-2b",
      "a2-contrast-viu-veio",
      "a2-irregular-drill-2",
      "a2-error-hunt-irregular-2",
    ],
  },
  {
    slug: "imperfeito",
    title: "The Imperfeito: Used To and Was Doing",
    description:
      "The imperfect tense (falava, comia, era, tinha) for past habits, descriptions, age and ongoing situations: the regular endings, the four irregular verbs, and costumar for used to.",
    level: "A2",
    intro: [
      `The "imperfeito" is the past tense for the background: how things used to be, what was going on, what people and places were like. "Quando eu era criança, eu morava em Belém e brincava na rua todo dia." (When I was a child, I lived in Belém and played in the street every day.)`,
      `It is one of the most regular tenses in Portuguese. Every verb but four follows two simple patterns, and even the four irregular verbs are easy.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `"-ar" verbs take "-ava"; "-er" and "-ir" verbs take "-ia". The "eu" and ele/ela forms are the same, so context or the pronoun shows who is meant. The "nós" form has a written accent: "falávamos", "comíamos".`,
          `Only four verbs are irregular: "ser" (era), "ter" (tinha), "vir" (vinha) and "pôr" (punha). Note that "ir" is regular here: "eu ia", "a gente ia".`,
        ],
        table: {
          headers: ["Subject", "falar", "comer", "abrir", "ser", "ter"],
          rows: [
            ["eu", "falava", "comia", "abria", "era", "tinha"],
            ["você, ele, ela, a gente", "falava", "comia", "abria", "era", "tinha"],
            ["nós", "falávamos", "comíamos", "abríamos", "éramos", "tínhamos"],
            ["vocês, eles, elas", "falavam", "comiam", "abriam", "eram", "tinham"],
          ],
        },
        examples: [
          { pt: "Eu morava num apartamento pequeno.", en: "I used to live in a small apartment." },
          { pt: "A gente comia na casa da avó todo domingo.", en: "We used to eat at grandma's every Sunday." },
          { pt: "Eles eram muito amigos.", en: "They were very close friends." },
          { pt: "Nós tínhamos um cachorro chamado Pipoca.", en: "We had a dog called Pipoca." },
        ],
      },
      {
        heading: `Habits: used to and would`,
        body: [
          `For repeated actions in the past, where English says used to or would, Portuguese uses the imperfeito: "Todo verão a gente ia para a praia" (every summer we would go to the beach). Words like "sempre", "todo dia", "toda semana", "antigamente" (in the old days) and "quando eu era..." point to it.`,
          `"Costumar" (to be in the habit of) in the imperfeito plus an infinitive is an exact equivalent of used to: "Eu costumava jogar bola depois da escola."`,
        ],
        examples: [
          { pt: "Antigamente as pessoas escreviam cartas.", en: "In the old days people wrote letters." },
          { pt: "Meu pai sempre acordava às cinco.", en: "My father always got up at five." },
          { pt: "Eu costumava ir à academia de manhã.", en: "I used to go to the gym in the mornings." },
        ],
      },
      {
        heading: `Description, age, time and states`,
        body: [
          `Use the imperfeito to describe people, places, the weather and feelings in the past: "A casa era grande e tinha um quintal", "Estava frio", "Eu estava cansado". Age and the time of day are also description: "Eu tinha oito anos", "Eram dez horas".`,
          `It also describes actions in progress at a past moment, often with "estar": "Eu estava dormindo" (I was sleeping). The next guide shows how this background combines with the perfeito for events.`,
        ],
        examples: [
          { pt: "Quando eu tinha dez anos, eu morava no interior.", en: "When I was ten, I lived in the countryside." },
          { pt: "Era domingo e a rua estava vazia.", en: "It was Sunday and the street was empty." },
          { pt: "Meu avô era alto e muito engraçado.", en: "My grandfather was tall and very funny." },
          { pt: "Eu queria um café, por favor.", en: "I'd like a coffee, please." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quando eu era oito anos...",
        right: "Quando eu tinha oito anos...",
        why: `Age uses "ter" in every tense: "eu tinha oito anos".`,
      },
      {
        wrong: "Nós falavamos muito.",
        right: "Nós falávamos muito.",
        why: `The "nós" form needs its written accent: "falávamos", "comíamos".`,
      },
      {
        wrong: "A gente ía à praia.",
        right: "A gente ia à praia.",
        why: `"Ia" has no accent. Only the "nós" form, "íamos", has one.`,
      },
      {
        wrong: "Ele foi alto e magro.",
        right: "Ele era alto e magro.",
        why: `Describing what someone was like is background, so it takes the imperfeito "era".`,
      },
    ],
    faqs: [
      {
        q: `Why does "eu queria" mean I would like?`,
        a: `Brazilians use the imperfeito of "querer" as a polite request, softer than "eu quero": "Eu queria um pão de queijo." It does not refer to the past at all here. "Eu gostaria" is a little more formal.`,
      },
      {
        q: `Is "eu falava" I spoke or I used to speak?`,
        a: `I used to speak, I was speaking, or I spoke as a habit or background. For a single finished act of speaking, use the perfeito: "Eu falei com ela ontem."`,
      },
      {
        q: `Is the imperfeito used differently in Portugal?`,
        a: `The forms and the past uses are the same. Portugal also uses the imperfeito much more in place of the conditional in speech, as in "gostava de ir" (I'd like to go), and has the "tu" form "falavas".`,
      },
    ],
    related: ["perfeito-vs-imperfeito", "preterito-perfeito-regular", "preterito-perfeito-irregular"],
    lessons: [
      "a2-imperfeito-1",
      "a2-imperfeito-2",
      "a2-imperfeito-habits",
      "a2-imperfeito-description",
      "a2-imperfeito-drill",
      "a2-error-hunt-imperfeito",
      "a2-transform-now-then",
    ],
  },
  {
    slug: "perfeito-vs-imperfeito",
    title: "Perfeito or Imperfeito? Telling a Story in the Past",
    description:
      "How to choose between the two past tenses: events versus background, one-time versus habit, estava + gerúndio interrupted by quando, verbs that change meaning (conheci, sabia, soube), and ia + infinitive.",
    level: "A2",
    intro: [
      `English mostly uses one simple past (I lived, I went) and adds used to or was -ing when needed. Portuguese makes you choose every time: the perfeito for events that happened and finished, the imperfeito for the background around them.`,
      `Picture a film. The imperfeito sets the scene: "Era tarde e estava chovendo." The perfeito moves the story forward: "De repente, alguém bateu na porta." (It was late and it was raining. Suddenly, someone knocked at the door.)`,
    ],
    sections: [
      {
        heading: `Event or background?`,
        body: [
          `Ask yourself whether you are reporting what happened (a completed event, the next step in the story) or describing how things were (a scene, a state, a habit, something in progress). The first is the perfeito, the second the imperfeito.`,
          `Time words help. "Ontem", "no sábado", "em 2019", "de repente", "uma vez" point to single events and the perfeito. "Sempre", "todo dia", "antigamente", "naquela época", "enquanto" point to habits and background and the imperfeito.`,
        ],
        table: {
          headers: ["Perfeito: the event", "Imperfeito: the background"],
          rows: [
            ["Na segunda eu fui à academia.", "Toda segunda eu ia à academia."],
            ["A festa foi ótima.", "As festas dela eram sempre ótimas."],
            ["Teve uma festa ontem.", "Tinha muita gente na festa."],
            ["Choveu o dia todo.", "Estava chovendo quando eu saí."],
            ["Eu morei em Recife por dois anos.", "Eu morava em Recife quando conheci a Ana."],
          ],
        },
        examples: [
          { pt: "Eu estava cansado, então fui dormir cedo.", en: "I was tired, so I went to bed early." },
          { pt: "Quando eu era criança, eu quebrei o braço.", en: "When I was a child, I broke my arm." },
          { pt: "A rua estava vazia e eu ouvi um barulho.", en: "The street was empty and I heard a noise." },
          { pt: "Morei dois anos em Curitiba.", en: "I lived in Curitiba for two years." },
        ],
      },
      {
        heading: `Was doing when...: "estava" + gerúndio and "quando"`,
        body: [
          `An action in progress in the past is "estava" plus the gerúndio: "Eu estava dormindo" (I was sleeping). When something interrupts it, that interruption is in the perfeito, often introduced by "quando": "Eu estava dormindo quando o telefone tocou."`,
          `Two actions going on at the same time are both imperfeito, often joined by "enquanto" (while): "Enquanto eu cozinhava, ela arrumava a mesa."`,
        ],
        examples: [
          { pt: "A gente estava jantando quando a luz acabou.", en: "We were having dinner when the power went out." },
          { pt: "O que você estava fazendo quando eu liguei?", en: "What were you doing when I called?" },
          { pt: "Enquanto ele dirigia, eu olhava o mapa.", en: "While he was driving, I was looking at the map." },
        ],
      },
      {
        heading: `Verbs that change meaning, and "ia" + infinitive`,
        body: [
          `A few verbs mean something different in each tense. The imperfeito describes a state; the perfeito marks the moment it began or a single result.`,
          `"Ia" plus an infinitive means was going to, usually for a plan that did not happen: "Eu ia te ligar, mas esqueci" (I was going to call you, but I forgot).`,
        ],
        table: {
          headers: ["Verb", "Imperfeito (state)", "Perfeito (event)"],
          rows: [
            ["conhecer", "eu já conhecia a Ana (I already knew Ana)", "eu conheci a Ana em 2019 (I met Ana)"],
            ["saber", "eu sabia (I knew)", "eu soube (I found out)"],
            ["querer", "eu queria ir (I wanted to go)", "eu não quis ir (I refused to go)"],
            ["poder", "eu podia (I could, was allowed)", "eu não pude (I couldn't, didn't manage)"],
            ["ter", "eu tinha um carro (I had a car)", "eu tive um problema (I had a problem, it happened)"],
          ],
        },
        examples: [
          { pt: "Eu conheci meu marido numa festa.", en: "I met my husband at a party." },
          { pt: "Você sabia que ela é de Natal?", en: "Did you know she's from Natal?" },
          { pt: "Eu ia viajar, mas fiquei doente.", en: "I was going to travel, but I got sick." },
          { pt: "A gente ia sair, mas começou a chover.", en: "We were going to go out, but it started raining." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quando eu fui criança, eu morava no Rio.",
        right: "Quando eu era criança, eu morava no Rio.",
        why: `Being a child is a state over a period, background, so it takes "era".`,
      },
      {
        wrong: "Eu conhecia ela ontem.",
        right: "Eu conheci ela ontem.",
        why: `Meeting someone for the first time is a one-time event: "conheci".`,
      },
      {
        wrong: "Ontem eu ia ao cinema.",
        right: "Ontem eu fui ao cinema.",
        why: `A single trip yesterday is an event, so it is the perfeito. "Eu ia ao cinema" means I used to go, or I was going to go.`,
      },
      {
        wrong: "Estava chovendo e eu estava sair.",
        right: "Estava chovendo e eu estava saindo.",
        why: `After "estava" the verb takes the gerúndio "-ndo".`,
      },
    ],
    faqs: [
      {
        q: `Can the same sentence take either tense?`,
        a: `Often, with a change of meaning. "A aula foi ótima" says this class was great; "A aula era ótima" describes what the class was like in general, or sets the scene for something else. Choose by what you want to say.`,
      },
      {
        q: `What if I lived somewhere for a fixed time?`,
        a: `A period with clear limits, seen as a whole, takes the perfeito: "Morei dois anos em Lisboa." To describe your life there, switch to the imperfeito: "Eu morava perto do rio e trabalhava num café."`,
      },
      {
        q: `Does Portugal use the tenses the same way?`,
        a: `Yes, the choice works the same way. The only visible difference is the progressive: Portugal says "estava a dormir" where Brazil says "estava dormindo".`,
      },
    ],
    related: ["imperfeito", "preterito-perfeito-regular", "preterito-perfeito-irregular", "present-progressive-estar-gerundio"],
    lessons: [
      "a2-perf-imperf-1",
      "a2-perf-imperf-2",
      "a2-estava-gerundio",
      "a2-meaning-change-verbs",
      "a2-ia-infinitive",
      "a2-contrast-perf-imperf",
      "a2-error-hunt-perf-imperf",
      "a2-build-up-story",
    ],
  },
  {
    slug: "object-pronouns-brazil",
    title: "Object Pronouns the Brazilian Way: Me, Te, Ele, O",
    description:
      "Me, te and nos before the verb (ele me ligou, eu te amo), ele and ela as objects in speech versus o and a in writing, the -lo and -la forms, and where the pronoun goes in Brazil.",
    level: "A2",
    intro: [
      `Object pronouns (me, you, him, her, us, them) are where Brazilian Portuguese differs most from the textbooks of Portugal. Brazilians put the pronoun before the verb ("Ele me ligou", he called me), use "te" for "você" ("Eu te amo"), and in speech say "Eu vi ele" (I saw him) where writing has "Eu o vi".`,
      `This guide covers the forms you will hear and the ones you will read, so you can speak naturally and write correctly.`,
    ],
    sections: [
      {
        heading: `Me, te, nos`,
        body: [
          `For me and us, the pronouns are "me" and "nos". For you, Brazilians say "te", even though the subject pronoun is "você": "Eu te ligo amanhã" (I'll call you tomorrow). Formally, "o" or "a" (written) and "o senhor" or "a senhora" are used instead.`,
          `These pronouns go before the verb in Brazil, both in speech and in most writing: "Ela me ajudou", "A gente te espera". After "não" they also come before the verb: "Não me liga agora."`,
        ],
        table: {
          headers: ["Meaning", "Pronoun", "Example"],
          rows: [
            ["me", "me", "Ele me convidou para a festa."],
            ["you (você)", "te", "Eu te vi no shopping."],
            ["us", "nos", "Ela nos ajudou muito."],
            ["you (o senhor, a senhora)", "o, a", "Eu o espero na recepção."],
          ],
        },
        examples: [
          { pt: "Você me ajuda com as malas?", en: "Can you help me with the bags?" },
          { pt: "Eu te amo.", en: "I love you." },
          { pt: "A Carla nos convidou para jantar.", en: "Carla invited us to dinner." },
          { pt: "Não me esquece, hein!", en: "Don't forget me, OK!" },
        ],
      },
      {
        heading: `Him, her, them: "ele" in speech, "o" in writing`,
        body: [
          `In everyday Brazilian speech, the third-person object is simply the subject pronoun after the verb: "Eu vi ele ontem", "Encontrei elas na festa", "Vou chamar ele". This is what you will hear from everyone, in every region.`,
          `In writing and formal speech the standard forms are "o", "a", "os", "as" before the verb: "Eu o vi ontem", "Eu as encontrei". After an infinitive they become "-lo", "-la", "-los", "-las", and the infinitive loses its "-r": "Vou encontrá-lo" (I'm going to meet him), "Preciso vendê-la". Often Brazilians avoid the question by leaving the object out: "Você viu o filme? Vi."`,
        ],
        table: {
          headers: ["Meaning", "Speech", "Writing"],
          rows: [
            ["I saw him.", "Eu vi ele.", "Eu o vi."],
            ["I know her.", "Eu conheço ela.", "Eu a conheço."],
            ["I'll call them.", "Vou chamar eles.", "Vou chamá-los."],
            ["Did you buy the shoes? Yes.", "Comprei.", "Sim, eu os comprei."],
          ],
        },
        examples: [
          { pt: "Cadê a Ana? Eu não vi ela hoje.", en: "Where's Ana? I haven't seen her today." },
          { pt: "Recebemos o seu pedido e o enviaremos amanhã.", en: "We have received your order and will send it tomorrow." },
          { pt: "Você trouxe o carregador? Trouxe.", en: "Did you bring the charger? Yes, I did." },
          { pt: "É um prazer conhecê-la.", en: "It's a pleasure to meet you." },
        ],
      },
      {
        heading: `Where the pronoun goes`,
        body: [
          `In Brazil the pronoun goes right before the verb it belongs to. With two verbs, it usually goes before the second one, the main verb: "Vou te ligar", "Estou te esperando", "Ela quer me ver". In speech Brazilians even start sentences with it: "Me passa o sal?", "Me ajuda aqui!"`,
          `Formal writing avoids starting a sentence with a pronoun, so a written request might say "Peço que me envie" rather than "Me envie". In conversation and messages, "Me manda uma mensagem" is perfectly natural.`,
        ],
        examples: [
          { pt: "Posso te fazer uma pergunta?", en: "Can I ask you a question?" },
          { pt: "Ela está me esperando lá embaixo.", en: "She's waiting for me downstairs." },
          { pt: "Me manda o endereço, por favor.", en: "Send me the address, please." },
          { pt: "Ninguém me avisou.", en: "Nobody told me." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu amo-te.",
        right: "Eu te amo.",
        why: `Putting the pronoun after the verb is the European order. In Brazil it goes before: "Eu te amo".`,
      },
      {
        wrong: "Ele ligou-me ontem.",
        right: "Ele me ligou ontem.",
        why: `Brazilian Portuguese puts "me" before the verb.`,
      },
      {
        wrong: "Eu vou o ver amanhã.",
        right: "Eu vou vê-lo amanhã.",
        why: `"O" does not go before an infinitive in standard Portuguese; it attaches as "-lo". In speech, say "Eu vou ver ele amanhã".`,
      },
      {
        wrong: "Eu não vi-o.",
        right: "Eu não o vi.",
        why: `After "não" the pronoun comes before the verb. In speech: "Eu não vi ele".`,
      },
    ],
    faqs: [
      {
        q: `Is "eu vi ele" wrong?`,
        a: `It is standard in Brazilian speech and used by educated speakers everywhere, but traditional grammar does not accept it in formal writing. Say "eu vi ele" with friends; write "eu o vi" in an essay or a formal email.`,
      },
      {
        q: `Why "te" with "você"?`,
        a: `"Te" historically belongs to "tu", but in Brazil it has become the object form of "você" in speech and informal writing: "Eu te ligo". In formal writing, use "o" or "a", or "lhe" for to you.`,
      },
      {
        q: `What do object pronouns look like in Portugal?`,
        a: `In Portugal the pronoun normally goes after the verb in a simple statement, joined with a hyphen: "amo-te", "vi-o", "ligou-me". It moves before the verb only after words like "não" or "que". Brazilians find "amo-te" very Portuguese.`,
      },
    ],
    related: ["indirect-objects-lhe", "reflexive-verbs", "imperative-brazil", "spoken-brazilian-portuguese"],
    lessons: [
      "a2-pronouns-me-te-nos",
      "a2-pronouns-third-person",
      "a2-pronoun-placement",
      "a2-contrast-ele-o",
      "a2-dialogue-phone",
      "a2-error-hunt-pronouns",
      "a2-transform-pronouns",
    ],
  },
  {
    slug: "indirect-objects-lhe",
    title: "To Me, For You: Indirect Objects, Lhe and Para Mim",
    description:
      "How to say to someone in Brazil: me and te before the verb, para ele and pra você in speech, lhe in formal writing, and the pronouns after prepositions (para mim, comigo, com a gente).",
    level: "A2",
    intro: [
      `An indirect object is the person something is given, said or sent to: she gave me a present, I'll send it to you. Brazilian Portuguese has two ways to express it. With "me", "te" and "nos" the pronoun goes before the verb: "Ela me deu um presente." For him, her and them speech prefers "para" plus the pronoun: "Dei o livro para ele."`,
      `After any preposition, I and me take special forms: "para mim" (for me), "comigo" (with me). Mixing up "para mim" and "para eu" is a classic mistake even among Brazilians.`,
    ],
    sections: [
      {
        heading: `Me, te, nos, lhe and "para" + pronoun`,
        body: [
          `For me, you and us, the same pronouns as for direct objects work as indirect objects: "Ele me mandou uma mensagem", "Eu te empresto o livro". For him, her and them, everyday speech uses "para ele", "para ela", "para eles", usually shortened to "pra": "Vou mandar pra ela".`,
          `"Lhe" is the standard written indirect pronoun for to him, to her and to you (formal): "Envio-lhe o documento" (in a formal letter), "Ela lhe deu o recado". In speech it sounds formal and is mostly heard in polite service language, as in "Posso lhe oferecer um café?" In conversation, "te", "para você" and "para o senhor" are more common.`,
        ],
        table: {
          headers: ["Meaning", "Everyday", "Formal or written"],
          rows: [
            ["She gave me a present.", "Ela me deu um presente.", "Ela me deu um presente."],
            ["I'll send you the photo.", "Eu te mando a foto.", "Eu lhe envio a foto."],
            ["I gave him the book.", "Dei o livro pra ele.", "Dei-lhe o livro. / Eu lhe dei o livro."],
            ["We told them the news.", "Contamos a notícia pra eles.", "Contamos-lhes a notícia."],
          ],
        },
        examples: [
          { pt: "Minha mãe me ligou de manhã.", en: "My mother called me in the morning." },
          { pt: "Vou mandar o endereço pra você.", en: "I'll send you the address." },
          { pt: "Ele deu flores para ela no aniversário.", en: "He gave her flowers on her birthday." },
          { pt: "Informamos-lhe que o pedido foi enviado.", en: "We inform you that the order has been sent." },
        ],
      },
      {
        heading: `After prepositions: mim, comigo, com a gente`,
        body: [
          `After a preposition, "eu" becomes "mim": "para mim", "de mim", "sem mim", "sobre mim". The other persons keep their ordinary forms: "para você", "de ele" (which contracts to "dele"), "sem nós".`,
          `With "com", Portuguese uses special forms: "comigo" (with me), "com você", "conosco" (with us, written) or "com a gente" (speech). There is no "com mim".`,
          `Careful with "para eu" and "para mim". When the pronoun is the subject of a following infinitive, it stays "eu": "Ele trouxe o livro para eu ler" (for me to read). When it is simply the object of "para", it is "mim": "Ele trouxe o livro para mim".`,
        ],
        table: {
          headers: ["Preposition", "me", "you", "us"],
          rows: [
            ["para", "para mim", "para você", "para nós, pra gente"],
            ["de", "de mim", "de você", "de nós, da gente"],
            ["com", "comigo", "com você", "conosco, com a gente"],
            ["sem", "sem mim", "sem você", "sem nós, sem a gente"],
          ],
        },
        examples: [
          { pt: "Esse presente é para mim?", en: "Is this present for me?" },
          { pt: "Você quer ir comigo?", en: "Do you want to come with me?" },
          { pt: "Eles vão jantar com a gente.", en: "They're going to have dinner with us." },
          { pt: "Ela me deu o livro para eu estudar.", en: "She gave me the book so that I could study." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu lhe vi ontem.",
        right: "Eu o vi ontem.",
        why: `"Lhe" is an indirect object (to him, to you). For I saw him or I saw you, use "o" in writing, or "Eu vi ele" in speech.`,
      },
      {
        wrong: "Ele deu para eu o livro.",
        right: "Ele me deu o livro.",
        why: `After "para" alone, the form is "mim": "Ele deu o livro para mim". The simplest is "me" before the verb.`,
      },
      {
        wrong: "Isso é para mim fazer.",
        right: "Isso é para eu fazer.",
        why: `Before an infinitive the pronoun is its subject, so it stays "eu".`,
      },
      {
        wrong: "Você vem com mim?",
        right: "Você vem comigo?",
        why: `With me is always "comigo".`,
      },
    ],
    faqs: [
      {
        q: `Should I use "lhe" at all?`,
        a: `Recognise it, and use it in formal writing: "Agradeço-lhe a atenção". In conversation, "te", "para você", "para ele" or "para o senhor" sound more natural in most of Brazil.`,
      },
      {
        q: `What is "pra"?`,
        a: `The spoken short form of "para", used constantly and in informal writing: "pra você", "pra casa". It contracts with the article too: "pro" and "pra" (to the): "vou pro trabalho". Write "para" in formal texts.`,
      },
      {
        q: `How does Portugal use "lhe"?`,
        a: `"Lhe" is much more common in European Portuguese, in speech as well as writing, often after the verb: "dei-lhe o livro". It is also the normal indirect form for "você" there.`,
      },
    ],
    related: ["object-pronouns-brazil", "por-vs-para", "reflexive-verbs"],
    lessons: ["a2-indirect-pronouns", "a2-mim-comigo", "a2-error-hunt-pronouns", "a2-transform-pronouns", "a2-spiral-pronouns"],
  },
  {
    slug: "reflexive-verbs",
    title: "Reflexive Verbs: Eu Me Levanto, A Gente Se Vê",
    description:
      "Verbs with me, se and nos (levantar-se, chamar-se, lembrar-se), the Brazilian pronoun-before-verb order, reflexives with two verbs and in the past, reciprocal se, and when Brazilians drop the pronoun.",
    level: "A2",
    intro: [
      `A reflexive verb is one whose action falls back on the subject: "Eu me levanto" (I get up, literally I raise myself), "Ela se veste" (she gets dressed). English uses reflexives far less, so many Portuguese reflexive verbs translate into a simple English verb.`,
      `In Brazil the pronoun goes before the verb: "Eu me chamo Lucas", "Você se lembra?" The order "chamo-me" sounds European or very formal.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `The reflexive pronoun matches the subject: "me" with "eu", "se" with "você", "ele", "ela", "a gente", "vocês", "eles", "elas", and "nos" with "nós". Dictionaries list these verbs with "-se" after the infinitive ("levantar-se"), but in a Brazilian sentence the pronoun comes first.`,
        ],
        table: {
          headers: ["Subject", "Pronoun", "levantar-se", "sentir-se"],
          rows: [
            ["eu", "me", "me levanto", "me sinto"],
            ["você, ele, ela, a gente", "se", "se levanta", "se sente"],
            ["nós", "nos", "nos levantamos", "nos sentimos"],
            ["vocês, eles, elas", "se", "se levantam", "se sentem"],
          ],
        },
        examples: [
          { pt: "Eu me levanto às seis durante a semana.", en: "I get up at six during the week." },
          { pt: "Como você se chama?", en: "What's your name?" },
          { pt: "A gente se arruma rápido.", en: "We get ready quickly." },
          { pt: "Nós nos sentimos em casa aqui.", en: "We feel at home here." },
        ],
      },
      {
        heading: `With two verbs and in other tenses`,
        body: [
          `With two verbs, the pronoun usually goes before the main verb: "Vou me deitar cedo" (I'm going to go to bed early), "Ela está se arrumando" (she's getting ready). In the past it works exactly as in the present: "Eu me levantei às sete", "Eles se mudaram".`,
        ],
        examples: [
          { pt: "Preciso me lembrar de pagar a conta.", en: "I need to remember to pay the bill." },
          { pt: "Ontem eu me deitei muito tarde.", en: "Yesterday I went to bed very late." },
          { pt: "Ela está se sentindo melhor.", en: "She's feeling better." },
          { pt: "A gente se mudou para Floripa em maio.", en: "We moved to Floripa in May." },
        ],
      },
      {
        heading: `Not reflexive in English, each other, and dropping the pronoun`,
        body: [
          `Several common verbs are reflexive in Portuguese but not in English: "lembrar-se de" (to remember), "esquecer-se de" (to forget), "sentar-se" (to sit down), "sentir-se" (to feel), "mudar-se" (to move house), "preocupar-se" (to worry). In casual Brazilian speech the pronoun is often dropped with some of them: "Eu lembro" and "Eu me lembro" are both everyday Portuguese; "Esqueci a chave" is more common than "Me esqueci da chave".`,
          `With a plural subject, "se" and "nos" can mean each other: "Eles se conhecem há anos" (they've known each other for years). "A gente se vê!" (see you!) and "A gente se fala" (talk soon) are everyday goodbyes.`,
        ],
        examples: [
          { pt: "Você se lembra de mim?", en: "Do you remember me?" },
          { pt: "Esqueci o guarda-chuva no ônibus.", en: "I left my umbrella on the bus." },
          { pt: "Não se preocupe, está tudo bem.", en: "Don't worry, everything's fine." },
          { pt: "Eles se falam todo dia.", en: "They talk to each other every day." },
          { pt: "Tchau, a gente se vê amanhã!", en: "Bye, see you tomorrow!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu se levanto cedo.",
        right: "Eu me levanto cedo.",
        why: `The pronoun matches the subject: "eu me", not "eu se".`,
      },
      {
        wrong: "Levanto-me às seis.",
        right: "Eu me levanto às seis.",
        why: `Starting with the verb and adding the pronoun after it is European or very formal. In Brazil, the pronoun comes first.`,
      },
      {
        wrong: "Nós se encontramos no café.",
        right: "Nós nos encontramos no café.",
        why: `"Nós" takes "nos". If you prefer "se", use "a gente": "A gente se encontra no café".`,
      },
      {
        wrong: "Eu me lembro você.",
        right: "Eu me lembro de você.",
        why: `"Lembrar-se" takes "de" before what you remember.`,
      },
    ],
    faqs: [
      {
        q: `Is "nós se" acceptable?`,
        a: `You will hear "nós se encontramos" in very casual speech, but it is nonstandard. Use "nós nos" or, more naturally, "a gente se": "a gente se encontra".`,
      },
      {
        q: `Why is "me chamo" reflexive?`,
        a: `"Chamar" means to call, so "eu me chamo Ana" is literally I call myself Ana. "Meu nome é Ana" means the same and is just as common.`,
      },
      {
        q: `How does Portugal use reflexives?`,
        a: `The same verbs are reflexive, but in a simple statement the pronoun follows the verb: "levanto-me", "chamo-me Ana". Portugal also drops the pronoun less often than Brazil does.`,
      },
    ],
    related: ["object-pronouns-brazil", "indirect-objects-lhe", "regular-present-tense"],
    lessons: [
      "a1-daily-routine",
      "a2-reflexive-1",
      "a2-reflexive-2",
      "a2-reflexive-not-english",
      "a2-reciprocal",
      "a2-routine-drill",
      "a2-error-hunt-reflexive",
      "a2-transform-routine",
    ],
  },
  {
    slug: "comparatives-superlatives",
    title: "Comparatives and Superlatives: Mais, Melhor, -íssimo",
    description:
      "Mais... do que, menos... do que, tão... quanto, the irregular melhor, pior, maior and menor, superlatives with o mais... de, and the -íssimo ending (lindíssimo, caríssimo).",
    level: "A2",
    intro: [
      `Portuguese compares with "mais" (more) and "menos" (less) before the adjective, and "do que" or "que" for than: "São Paulo é maior do que o Rio", "O ônibus é mais barato que o táxi". There is no -er ending as in bigger or cheaper.`,
      `Four common adjectives have their own forms, and using "mais" with them is a classic mistake: "melhor" (better), "pior" (worse), "maior" (bigger), "menor" (smaller).`,
    ],
    sections: [
      {
        heading: `More, less and as... as`,
        body: [
          `For more and less, put "mais" or "menos" before the adjective, adverb or noun, and "do que" or "que" before the second term. Both are correct; "do que" is a little more common in speech. After "que", a pronoun is in the subject form: "Ele é mais alto do que eu".`,
          `For equality use "tão... quanto" with adjectives and adverbs (as tall as), and "tanto, tanta, tantos, tantas... quanto" with nouns (as much, as many); "tanto" agrees with the noun. "Tão... como" also exists but is less common in Brazil.`,
        ],
        table: {
          headers: ["Meaning", "Pattern", "Example"],
          rows: [
            ["more ... than", "mais ... (do) que", "O Rio é mais quente do que Curitiba."],
            ["less ... than", "menos ... (do) que", "O metrô é menos caro que o táxi."],
            ["as ... as", "tão ... quanto", "Ela é tão alta quanto o irmão."],
            ["as much, as many as", "tanto, tanta, tantos, tantas ... quanto", "Não tenho tantas férias quanto você."],
            ["more than (with a verb)", "verb + mais (do) que", "Ele trabalha mais do que eu."],
          ],
        },
        examples: [
          { pt: "Esse apartamento é mais caro do que o outro.", en: "This apartment is more expensive than the other one." },
          { pt: "Hoje está menos quente que ontem.", en: "Today is less hot than yesterday." },
          { pt: "Meu português não é tão bom quanto o seu.", en: "My Portuguese isn't as good as yours." },
          { pt: "Tem tanta gente aqui quanto no Carnaval.", en: "There are as many people here as at Carnival." },
        ],
      },
      {
        heading: `Melhor, pior, maior, menor`,
        body: [
          `"Bom" and "mau" have irregular comparatives: "melhor" (better) and "pior" (worse). They are also the comparatives of the adverbs "bem" and "mal": "Ela canta melhor do que eu". "Grande" and "pequeno" become "maior" and "menor". None of them changes for gender; in the plural they add "-es": "melhores", "maiores".`,
          `With the article, these words also make the superlative: "o melhor restaurante" (the best restaurant), "a maior cidade" (the biggest city).`,
        ],
        table: {
          headers: ["Adjective or adverb", "Comparative", "Superlative"],
          rows: [
            ["bom, bem", "melhor", "o melhor, a melhor"],
            ["mau, mal, ruim", "pior", "o pior, a pior"],
            ["grande", "maior", "o maior, a maior"],
            ["pequeno", "menor", "o menor, a menor"],
          ],
        },
        examples: [
          { pt: "Esse café é melhor do que o da esquina.", en: "This coffee is better than the one on the corner." },
          { pt: "O trânsito hoje está pior do que ontem.", en: "The traffic today is worse than yesterday." },
          { pt: "São Paulo é a maior cidade do Brasil.", en: "São Paulo is the biggest city in Brazil." },
          { pt: "Meu quarto é menor que o seu.", en: "My room is smaller than yours." },
        ],
      },
      {
        heading: `Superlatives and -íssimo`,
        body: [
          `The superlative is the article plus "mais" or "menos", with "de" for in or of: "o prédio mais alto da cidade" (the tallest building in the city). Note the order: the noun comes between the article and "mais".`,
          `For very, Portuguese has two options: "muito" before the adjective, or the ending "-íssimo" on it, which is stronger and very common in speech: "lindo, lindíssimo", "caro, caríssimo", "bom, ótimo" or "boníssimo". Some adjectives change their spelling: "rico, riquíssimo", "feliz, felicíssimo", "fácil, facílimo" (formal; in speech "muito fácil" or "facinho").`,
        ],
        examples: [
          { pt: "É a praia mais bonita do Nordeste.", en: "It's the most beautiful beach in the Northeast." },
          { pt: "Esse foi o dia mais longo da minha vida.", en: "That was the longest day of my life." },
          { pt: "O jantar estava ótimo, e caríssimo!", en: "Dinner was great, and really expensive!" },
          { pt: "A vista daqui é lindíssima.", en: "The view from here is absolutely beautiful." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Esse restaurante é mais bom.",
        right: "Esse restaurante é melhor.",
        why: `Better is "melhor", never "mais bom".`,
      },
      {
        wrong: "São Paulo é mais grande que o Rio.",
        right: "São Paulo é maior que o Rio.",
        why: `Bigger is "maior".`,
      },
      {
        wrong: "Ele é mais alto de mim.",
        right: "Ele é mais alto do que eu.",
        why: `Than is "do que" or "que", followed by the subject pronoun "eu".`,
      },
      {
        wrong: "Ela é tão alta que a mãe.",
        right: "Ela é tão alta quanto a mãe.",
        why: `As... as is "tão... quanto". "Tão... que" means so... that.`,
      },
      {
        wrong: "É o mais grande prédio da cidade.",
        right: "É o maior prédio da cidade.",
        why: `The superlative of "grande" is "o maior".`,
      },
    ],
    faqs: [
      {
        q: `"Do que" or "que"?`,
        a: `Both are correct and mean the same: "mais caro do que" and "mais caro que". Use whichever you like; "do que" is slightly more common in speech.`,
      },
      {
        q: `Can I say "mais pequeno"?`,
        a: `In Brazil, no: use "menor". "Mais pequeno" sounds Portuguese to Brazilians.`,
      },
      {
        q: `Are comparisons different in Portugal?`,
        a: `Mostly the same, but European Portuguese uses "mais pequeno" freely alongside "menor", and prefers "tão... como" where Brazil prefers "tão... quanto".`,
      },
    ],
    related: ["adjective-agreement", "diminutives-augmentatives"],
    lessons: [
      "a2-comparatives-1",
      "a2-comparatives-2",
      "a2-melhor-pior",
      "a2-superlatives",
      "a2-contrast-melhor-mais",
      "a2-dialogue-choosing",
      "a2-error-hunt-comparatives",
      "a2-mission-compare-cities",
    ],
  },
  {
    slug: "diminutives-augmentatives",
    title: "Diminutives and Augmentatives: Cafezinho and Carrão",
    description:
      "The Brazilian diminutive -inho and -zinho (cafezinho, pertinho, um minutinho) for size, affection, politeness and emphasis, how to form it and its plural, and the augmentative -ão (carrão, amigão).",
    level: "A2",
    intro: [
      `Brazilians use diminutives all the time, and not only for small things. "Um cafezinho" is a coffee offered with warmth, "um minutinho" is a polite just a moment, "pertinho" means really close and "rapidinho" means super quick.`,
      `The augmentative "-ão" does the opposite: "um carrão" is a big, impressive car, "um amigão" a great friend. Both endings add colour and feeling, and getting them right makes your Portuguese sound much more Brazilian.`,
    ],
    sections: [
      {
        heading: `Forming the diminutive`,
        body: [
          `Words ending in unstressed "-o" or "-a" drop the vowel and add "-inho" or "-inha": "casa, casinha", "gato, gatinho". The gender stays the same. Spelling adjusts to keep the sound: "amigo, amiguinho", "pouco, pouquinho".`,
          `Words ending in a stressed vowel, a nasal, a diphthong or a consonant add "-zinho" or "-zinha" to the whole word: "café, cafezinho", "pão, pãozinho", "mãe, mãezinha", "flor, florzinha". In the plural, "-zinho" words pluralise both parts: "pães" + "-zinhos" gives "pãezinhos", "flores" gives "florezinhas".`,
        ],
        table: {
          headers: ["Word", "Diminutive", "Rule"],
          rows: [
            ["casa", "casinha", "drop -a, add -inha"],
            ["amigo", "amiguinho", "g becomes gu"],
            ["pouco", "pouquinho", "c becomes qu"],
            ["café", "cafezinho", "stressed vowel: add -zinho"],
            ["pão", "pãozinho (plural: pãezinhos)", "nasal: add -zinho"],
            ["flor", "florzinha", "consonant: add -zinha"],
          ],
        },
        examples: [
          { pt: "Aceita um cafezinho?", en: "Would you like a coffee?" },
          { pt: "Moro numa casinha perto da praia.", en: "I live in a little house near the beach." },
          { pt: "Eu queria quatro pãezinhos, por favor.", en: "I'd like four bread rolls, please." },
          { pt: "Só um pouquinho de açúcar.", en: "Just a little bit of sugar." },
        ],
      },
      {
        heading: `What the diminutive means`,
        body: [
          `Size is only the start. The diminutive also shows affection ("meu filhinho", "a vovozinha"), softens a request ("Um minutinho, por favor", "Me dá uma ajudinha?"), and intensifies adverbs and adjectives: "pertinho" (very close), "cedinho" (nice and early), "devagarinho" (very slowly), "agorinha" (just now), "bonitinho" (cute).`,
          `It can also belittle, depending on the tone: "um empreguinho" is a lousy little job. Listen to how it is said.`,
        ],
        examples: [
          { pt: "A farmácia fica pertinho daqui.", en: "The pharmacy is really close to here." },
          { pt: "Amanhã a gente sai cedinho.", en: "Tomorrow we're leaving nice and early." },
          { pt: "Espera um minutinho, já volto.", en: "Wait just a moment, I'll be right back." },
          { pt: "Vai devagarinho, a rua está molhada.", en: "Go nice and slowly, the road is wet." },
        ],
      },
      {
        heading: `The augmentative "-ão"`,
        body: [
          `"-ão" (and "-zão" after the same endings as "-zinho") makes things big, impressive or intense: "carro, carrão", "amigo, amigão", "calor, calorão", "cachorro, cachorrão". It usually makes the word masculine, though feminine nouns can also take "-ona": "mulherona".`,
          `Some "-ão" words are no longer augmentatives but separate words: "cartão" (card) is not a big "carta" (letter), and "portão" (gate) is not a big "porta" (door). Learn those as new vocabulary.`,
        ],
        examples: [
          { pt: "Nossa, que carrão!", en: "Wow, what a car!" },
          { pt: "O Pedro é um amigão.", en: "Pedro is a great friend." },
          { pt: "Fez um calorão ontem.", en: "It was boiling hot yesterday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quer um cafeinho?",
        right: "Quer um cafezinho?",
        why: `Words ending in a stressed vowel take "-zinho": "cafezinho".`,
      },
      {
        wrong: "Eu quero dois pãozinhos.",
        right: "Eu quero dois pãezinhos.",
        why: `With "-zinho", both parts take the plural: "pães" + "-zinhos".`,
      },
      {
        wrong: "Ele é meu amigoinho.",
        right: "Ele é meu amiguinho.",
        why: `Drop the final vowel before "-inho", and keep the hard g sound with "gu".`,
      },
      {
        wrong: "Só um poucinho.",
        right: "Só um pouquinho.",
        why: `"C" becomes "qu" before i to keep the k sound.`,
      },
    ],
    faqs: [
      {
        q: `Can I put a diminutive on any word?`,
        a: `On most nouns, adjectives and many adverbs, yes, and Brazilians do it freely. Even names get one: "Paulinho", "Aninha". Avoid it in formal writing, where it can sound childish.`,
      },
      {
        q: `Is a "cafezinho" a small coffee?`,
        a: `Not really. It is the normal small, strong black coffee Brazilians drink after meals and offer to visitors. The diminutive expresses warmth and hospitality more than size.`,
      },
      {
        q: `Does Portugal use diminutives too?`,
        a: `Yes, but less freely. European Portuguese has its own favourites, such as "um bocadinho" (a little bit), where Brazil says "um pouquinho".`,
      },
    ],
    related: ["comparatives-superlatives", "adjective-agreement"],
    lessons: ["a2-diminutives", "a2-spiral-comparing"],
  },
  {
    slug: "future-ir-vs-futuro-simples",
    title: "The Future: Vou Falar or Falarei?",
    description:
      "How Brazilians talk about the future: ir + infinitive in speech (vou viajar, vai chover), the present for schedules, and the written futuro simples (falarei, farei, direi) with its three irregular verbs.",
    level: "A2",
    intro: [
      `Brazilian Portuguese has a true future tense, the "futuro do presente" ("falarei", I will speak), but in conversation almost nobody uses it. The everyday future is "ir" plus an infinitive: "Vou viajar amanhã" (I'm going to travel tomorrow), "Vai chover" (it's going to rain).`,
      `The difference is register, not meaning: "Vou te ligar" in a text to a friend, "Entraremos em contato" in a company email. You need to use the first and recognise the second.`,
    ],
    sections: [
      {
        heading: `The everyday future: "ir" + infinitive`,
        body: [
          `Use the present of "ir" (vou, vai, vamos, vão) plus the infinitive for plans, intentions and predictions. The negative puts "não" before "ir": "Não vou sair hoje". Pronouns go before the infinitive: "Vou te ligar".`,
          `For going somewhere in the future, Brazilians usually just say "vou" plus the place: "Amanhã eu vou para a praia". "Vou ir" is common in casual speech but avoided in writing.`,
        ],
        table: {
          headers: ["Subject", "Ir + infinitive", "Example"],
          rows: [
            ["eu", "vou + infinitive", "Vou estudar à noite."],
            ["você, ele, ela, a gente", "vai + infinitive", "A gente vai jantar fora."],
            ["nós", "vamos + infinitive", "Vamos viajar em julho."],
            ["vocês, eles, elas", "vão + infinitive", "Eles vão se casar em março."],
          ],
        },
        examples: [
          { pt: "No ano que vem eu vou aprender a surfar.", en: "Next year I'm going to learn to surf." },
          { pt: "Acho que vai chover à tarde.", en: "I think it's going to rain in the afternoon." },
          { pt: "Vocês vão ficar quanto tempo em Salvador?", en: "How long are you going to stay in Salvador?" },
          { pt: "Não vou poder ir, desculpa.", en: "I won't be able to go, sorry." },
        ],
      },
      {
        heading: `The present for schedules and near plans`,
        body: [
          `As in English, the simple present can refer to the future when something is scheduled or firmly decided: "O voo sai às seis" (the flight leaves at six), "Amanhã eu trabalho" (I'm working tomorrow). It is also the natural way to make a quick promise: "Eu te ligo depois" (I'll call you later).`,
        ],
        examples: [
          { pt: "O ônibus para Ouro Preto sai às oito.", en: "The bus to Ouro Preto leaves at eight." },
          { pt: "Segunda eu começo no emprego novo.", en: "I start my new job on Monday." },
          { pt: "Pode deixar, eu resolvo isso amanhã.", en: "Leave it with me, I'll sort it out tomorrow." },
        ],
      },
      {
        heading: `The written future: "falarei", "farei"`,
        body: [
          `The "futuro do presente" adds the endings "-ei, -á, -emos, -ão" to the whole infinitive, for all three verb groups: "falarei", "comerá", "abriremos", "partirão". Only three verbs are irregular, and they shorten the stem: "fazer" gives "farei", "dizer" gives "direi", "trazer" gives "trarei".`,
          `You will meet it in news, weather forecasts, contracts, instructions, formal promises and speeches: "Amanhã fará calor em todo o estado", "O prazo terminará na sexta-feira". In a text message to a friend it sounds stiff.`,
        ],
        table: {
          headers: ["Subject", "falar", "fazer", "dizer"],
          rows: [
            ["eu", "falarei", "farei", "direi"],
            ["você, ele, ela", "falará", "fará", "dirá"],
            ["nós", "falaremos", "faremos", "diremos"],
            ["vocês, eles, elas", "falarão", "farão", "dirão"],
          ],
        },
        examples: [
          { pt: "O presidente falará à nação hoje à noite.", en: "The president will address the nation tonight." },
          { pt: "Amanhã fará sol em São Paulo.", en: "Tomorrow it will be sunny in São Paulo." },
          { pt: "Entraremos em contato em breve.", en: "We will be in touch shortly." },
          { pt: "O candidato fará uma prova escrita.", en: "The candidate will take a written test." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu vou a falar com ela.",
        right: "Eu vou falar com ela.",
        why: `There is no "a" between "ir" and the infinitive in Portuguese.`,
      },
      {
        wrong: "Eu fazerei o bolo.",
        right: "Eu farei o bolo.",
        why: `"Fazer" has the short future stem "far-": "farei". In speech, "vou fazer" is more natural.`,
      },
      {
        wrong: "Ela dizerá a verdade.",
        right: "Ela dirá a verdade.",
        why: `"Dizer" shortens to "dir-" in the future.`,
      },
      {
        wrong: "Eu irei ir ao mercado.",
        right: "Eu vou ao mercado.",
        why: `One future is enough. For going somewhere, use "vou" plus the place.`,
      },
      {
        wrong: "Oi! Amanhã eu falarei com você.",
        right: "Oi! Amanhã eu falo com você.",
        why: `Not wrong grammatically, but far too formal for a message to a friend. Use the present or "vou falar".`,
      },
    ],
    faqs: [
      {
        q: `Is the futuro simples ever used in speech?`,
        a: `In formal speech, yes: speeches, news, presentations. In conversation you will mostly hear it with "ser" in guesses ("Será que vai chover?", I wonder if it'll rain) and in a few fixed phrases. Otherwise use "ir" + infinitive.`,
      },
      {
        q: `Where do pronouns go with the written future?`,
        a: `In formal writing a pronoun can split the verb ("dir-lhe-ei"), but this is rare and very formal. Most Brazilian writing avoids it by putting the pronoun first ("eu lhe direi") or by using "ir" + infinitive.`,
      },
      {
        q: `Is the future different in Portugal?`,
        a: `Portugal also prefers "ir" + infinitive and the present in speech, and uses the futuro simples in formal contexts. European Portuguese also uses "hei de" + infinitive more often, for something you are determined to do.`,
      },
    ],
    related: ["ir-fazer-querer-poder", "conditional-tense", "imperative-brazil"],
    lessons: [
      "a1-ir-infinitive-plans",
      "a2-future-ir-infinitive",
      "a2-future-simple",
      "a2-future-present",
      "a2-predictions",
      "a2-contrast-future-forms",
      "a2-error-hunt-future",
      "a2-transform-past-future",
    ],
  },
  {
    slug: "imperative-brazil",
    title: "The Imperative in Brazil: Fala! and Fale!",
    description:
      "How Brazilians give commands: the everyday form from the present (fala, come, abre), the standard form (fale, coma, abra) for signs, recipes and o senhor, irregular commands (faça, venha, vá), negatives and polite requests.",
    level: "A2",
    intro: [
      `Brazil has two imperatives for "você". In everyday speech people use a form that looks like the present tense: "Fala mais alto!" (speak louder!), "Espera aí!" (wait!), "Me passa o sal" (pass me the salt). In writing, on signs, in recipes and with "o senhor" and "a senhora", the standard form is used: "Fale", "Espere", "Passe".`,
      `Both are correct Brazilian Portuguese in their own setting, and both mean exactly the same. The important thing is not to mix them in the same sentence.`,
    ],
    sections: [
      {
        heading: `The two forms`,
        body: [
          `The everyday form is the ele/ela present: "fala", "come", "abre". The standard form swaps the vowel of the ending: "-ar" verbs take "-e" and "-er" and "-ir" verbs take "-a", built on the "eu" stem: "falo" gives "fale", "faço" gives "faça", "venho" gives "venha". For "vocês" the plural takes "-em" or "-am": "falem", "comam", "abram".`,
        ],
        table: {
          headers: ["Verb", "Everyday (você)", "Standard (você, o senhor)", "Plural (vocês)"],
          rows: [
            ["falar", "fala", "fale", "falem"],
            ["esperar", "espera", "espere", "esperem"],
            ["comer", "come", "coma", "comam"],
            ["abrir", "abre", "abra", "abram"],
            ["virar", "vira", "vire", "virem"],
          ],
        },
        examples: [
          { pt: "Espera aí, já vou!", en: "Hang on, I'm coming!" },
          { pt: "Abre a janela, tá calor.", en: "Open the window, it's hot." },
          { pt: "Senhora, espere aqui, por favor.", en: "Please wait here, madam." },
          { pt: "Misture bem e leve ao forno.", en: "Mix well and put it in the oven." },
          { pt: "Pessoal, falem mais baixo!", en: "Guys, speak more quietly!" },
        ],
      },
      {
        heading: `Irregular commands`,
        body: [
          `The standard form follows the "eu" stem, so verbs with an irregular "eu" form have irregular commands: "faça", "diga", "venha", "traga", "ponha". A few are fully irregular: "seja" (be), "esteja", "vá" (go), "dê" (give), "saiba" (know).`,
          `The everyday forms of these verbs are short: "faz", "diz", "vem", "traz", "põe", "vai", "dá". "Vem cá!" (come here!) and "Vai com Deus" (go with God, a goodbye) are heard constantly.`,
        ],
        table: {
          headers: ["Verb", "Everyday", "Standard"],
          rows: [
            ["fazer", "faz", "faça"],
            ["dizer", "diz", "diga"],
            ["vir", "vem", "venha"],
            ["trazer", "traz", "traga"],
            ["pôr", "põe", "ponha"],
            ["ir", "vai", "vá"],
            ["dar", "dá", "dê"],
            ["ser", "(seja)", "seja"],
          ],
        },
        examples: [
          { pt: "Vem cá, quero te mostrar uma coisa.", en: "Come here, I want to show you something." },
          { pt: "Faça o favor de fechar a porta.", en: "Please close the door." },
          { pt: "Traz uma cerveja pra mim?", en: "Will you bring me a beer?" },
          { pt: "Seja bem-vindo!", en: "Welcome!" },
        ],
      },
      {
        heading: `Negative commands and polite requests`,
        body: [
          `To say don't, put "não" in front. In speech the everyday form is common ("Não fala isso!", don't say that!), while signs and careful speech use the standard form: "Não fume", "Não esqueça". With pronouns, everyday speech puts the pronoun first: "Me ajuda!", "Não me liga agora."`,
          `For polite requests, Brazilians usually avoid the imperative altogether and ask a question with "poder": "Pode me ajudar?", "Você pode falar mais devagar?" More politely still: "Você poderia...?" or "O senhor poderia...?"`,
        ],
        examples: [
          { pt: "Não esquece o guarda-chuva!", en: "Don't forget your umbrella!" },
          { pt: "Não estacione em frente à garagem.", en: "Do not park in front of the garage." },
          { pt: "Pode repetir, por favor?", en: "Could you repeat that, please?" },
          { pt: "Siga em frente e vire à direita no semáforo.", en: "Go straight ahead and turn right at the traffic light." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vira à direita e depois siga em frente.",
        right: "Vire à direita e depois siga em frente.",
        why: `Keep to one form in the same instruction. "Vire" and "siga" are both standard.`,
      },
      {
        wrong: "Faze o seu trabalho.",
        right: "Faça o seu trabalho.",
        why: `"Faze" is not a Brazilian form. The everyday command is "faz", the standard one "faça".`,
      },
      {
        wrong: "Não fuma aqui.",
        right: "Não fume aqui.",
        why: `On a sign or in a formal instruction, the negative uses the standard form.`,
      },
      {
        wrong: "Dá-me o sal.",
        right: "Me passa o sal.",
        why: `Starting with the verb and attaching the pronoun is European. In Brazil the pronoun comes first: "Me dá", "Me passa".`,
      },
    ],
    faqs: [
      {
        q: `Which form should I use?`,
        a: `With friends and family in speech, the everyday form ("fala", "espera") sounds natural. With "o senhor" and "a senhora", in writing and with strangers in formal situations, use the standard form ("fale", "espere"). If in doubt, a question with "pode" is always polite.`,
      },
      {
        q: `Why does the everyday form look like the present?`,
        a: `Historically it is the "tu" imperative, which happens to look like the ele/ela present. Brazilians use it with "você" in speech, which is why "fala" and "fale" can both mean speak!`,
      },
      {
        q: `How does Portugal handle commands?`,
        a: `In Portugal "fala" is strictly the "tu" command, used with friends, and "fale" goes with "você" and "o senhor". Pronouns follow the verb: "dá-me", "diga-me". Brazilians say "me dá" and "me diz".`,
      },
    ],
    related: ["object-pronouns-brazil", "future-ir-vs-futuro-simples", "present-subjunctive"],
    lessons: [
      "a2-imperative-1",
      "a2-imperative-2",
      "a2-imperative-irregular",
      "a2-imperative-negative",
      "a2-polite-requests",
      "a2-directions",
      "a2-contrast-fala-fale",
      "a2-mission-recipe",
    ],
  },
  {
    slug: "por-vs-para",
    title: "Por vs Para",
    description:
      "When to use para (destination, purpose, recipient, deadline, opinion) and when por (through, along, exchange, cause, per, by means of), the contractions pelo and pela, and the spoken pra and pro.",
    level: "A2",
    intro: [
      `Both "por" and "para" can translate English for, which is why they cause so much trouble. The key idea: "para" points forward to a goal, a destination, a purpose or a recipient; "por" is about the path, the cause or the exchange.`,
      `"Vou para São Paulo" (I'm going to São Paulo, the destination). "Passei por São Paulo" (I went through São Paulo, the path). "Obrigado por tudo" (thanks for everything, the cause).`,
    ],
    sections: [
      {
        heading: `"Para": where to, what for, who for`,
        body: [
          `"Para" marks a destination ("Vou para Manaus"), a purpose before an infinitive ("Estudo para aprender"), a recipient ("Isso é para você"), a deadline ("O relatório é para sexta") and an opinion ("Para mim, é caro", in my opinion it's expensive).`,
          `In speech "para" is almost always shortened to "pra", and contracts with the article: "pro" (para + o), "pra" (para + a), "pros", "pras". You can write them in messages; write "para" in formal texts.`,
        ],
        table: {
          headers: ["Use", "Example", "Meaning"],
          rows: [
            ["destination", "Vou para o Rio amanhã.", "I'm going to Rio tomorrow."],
            ["purpose", "Economizo para viajar.", "I'm saving to travel."],
            ["recipient", "Comprei um presente para você.", "I bought a present for you."],
            ["deadline", "Preciso disso para segunda.", "I need this by Monday."],
            ["opinion", "Para ela, o Rio é a melhor cidade.", "For her, Rio is the best city."],
          ],
        },
        examples: [
          { pt: "Esse ônibus vai para o centro?", en: "Does this bus go downtown?" },
          { pt: "Estou estudando para a prova.", en: "I'm studying for the test." },
          { pt: "Vou pro trabalho de bicicleta.", en: "I'm going to work by bike." },
          { pt: "Liga pra mim mais tarde.", en: "Call me later." },
        ],
      },
      {
        heading: `"Por": through, by, because of, per`,
        body: [
          `"Por" marks movement through or along a place ("Passei pela praia"), a vague location ("Tem um banco por aqui?", is there a bank around here?), a cause ("por causa da chuva", because of the rain; "Obrigado por tudo"), an exchange ("Troquei o carro por uma moto"), a rate ("cem reais por dia") and a means ("por e-mail", "por telefone"). It also marks a length of time: "Fiquei lá por uma semana".`,
          `"Por" contracts with the article: "pelo", "pela", "pelos", "pelas": "Obrigada pela ajuda", "Passamos pelo centro".`,
        ],
        table: {
          headers: ["Use", "Example", "Meaning"],
          rows: [
            ["through, along", "Fomos pela orla.", "We went along the seafront."],
            ["around (place)", "Ele mora por aqui.", "He lives around here."],
            ["cause, thanks", "Obrigado pelo convite.", "Thanks for the invitation."],
            ["exchange", "Paguei cinquenta reais por isso.", "I paid fifty reais for this."],
            ["rate", "Duas vezes por semana.", "Twice a week."],
            ["means", "Mandei por WhatsApp.", "I sent it by WhatsApp."],
          ],
        },
        examples: [
          { pt: "O trem passa por três cidades.", en: "The train goes through three cities." },
          { pt: "Ela chegou atrasada por causa do trânsito.", en: "She arrived late because of the traffic." },
          { pt: "O aluguel é dois mil por mês.", en: "The rent is two thousand a month." },
          { pt: "Obrigada pela paciência!", en: "Thank you for your patience! (a woman speaking)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Obrigado para tudo.",
        right: "Obrigado por tudo.",
        why: `Thanks for something is a cause, so it takes "por".`,
      },
      {
        wrong: "Vou a Portugal por estudar.",
        right: "Vou a Portugal para estudar.",
        why: `Purpose before an infinitive (in order to) is "para".`,
      },
      {
        wrong: "Ganho cem reais para dia.",
        right: "Ganho cem reais por dia.",
        why: `A rate (per day, per hour) uses "por".`,
      },
      {
        wrong: "A gente passou para o Centro Histórico.",
        right: "A gente passou pelo Centro Histórico.",
        why: `Going through or past a place is "passar por", contracted to "pelo" with the article.`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between "para mim" and "por mim"?`,
        a: `"Para mim" means in my opinion or for me (as a recipient): "Para mim, tanto faz". "Por mim" means as far as I'm concerned, I don't mind: "Por mim, tudo bem" (it's fine by me). Both are very common.`,
      },
      {
        q: `Is "pra" correct?`,
        a: `In speech, it is what everyone says, and it is fine in informal writing like messages and social media. In essays, emails at work and formal texts, write "para".`,
      },
      {
        q: `Is it different in Portugal?`,
        a: `The uses of "por" and "para" are the same. Spoken "pra" exists in Portugal too, but "pro" for "para o" is typically Brazilian.`,
      },
    ],
    related: ["prepositions-place-time", "contractions-no-na-do-da", "indirect-objects-lhe"],
    lessons: ["a2-para", "a2-por", "a2-contrast-por-para", "a2-dialogue-travel-plans", "a2-error-hunt-por-para", "a2-spiral-por-para"],
  },
  {
    slug: "prepositions-place-time",
    title: "Prepositions of Place and Time",
    description:
      "Where things are (em cima de, embaixo de, ao lado de, em frente a, perto de) and when (em março, no sábado, de segunda a sexta, das nove às seis), plus desde, até, há with the present, and ir a versus ir para.",
    level: "A2",
    intro: [
      `Portuguese uses "em" for in, on and at alike: "na mesa" (on the table), "no Brasil" (in Brazil), "na escola" (at school). More precise positions are built with "de": "em cima de" (on top of), "perto de" (near), "ao lado de" (next to).`,
      `Time works similarly: "em" for months and years, "no" or "na" for days, "de... a" for from... to. And one structure surprises English speakers: how long you have been doing something takes the present tense, "Moro aqui há três anos".`,
    ],
    sections: [
      {
        heading: `Where: place prepositions`,
        body: [
          `Most place expressions end in "de", which contracts with the article: "perto da praia", "ao lado do banco", "em frente ao mercado" ("em frente a" or "em frente de", both are used). "Entre" (between) takes no "de".`,
          `The adverbs "aqui", "aí" and "ali" or "lá" mean here, there (near you) and over there. Brazilians use them all the time with "perto": "É ali perto", "É bem aqui".`,
        ],
        table: {
          headers: ["Portuguese", "Meaning", "Example"],
          rows: [
            ["em cima de", "on top of", "A chave está em cima da mesa."],
            ["embaixo de", "under", "O gato está embaixo da cama."],
            ["dentro de", "inside", "O celular está dentro da bolsa."],
            ["ao lado de", "next to", "A farmácia fica ao lado do banco."],
            ["em frente a, em frente de", "opposite, in front of", "O ponto é em frente à escola."],
            ["atrás de", "behind", "O estacionamento é atrás do prédio."],
            ["perto de, longe de", "near, far from", "Moro perto do metrô."],
            ["entre", "between", "Fica entre a padaria e o correio."],
          ],
        },
        examples: [
          { pt: "Tem um restaurante bom perto daqui?", en: "Is there a good restaurant near here?" },
          { pt: "O mercado fica em frente à praça.", en: "The market is opposite the square." },
          { pt: "Deixei as compras dentro do carro.", en: "I left the shopping inside the car." },
          { pt: "A estação não é longe do hotel.", en: "The station isn't far from the hotel." },
        ],
      },
      {
        heading: `When: time expressions`,
        body: [
          `"Em" alone goes with months, years and seasons: "em março", "em 2024", "no verão" (seasons take the article). Days and parts of the week take "no" or "na": "no sábado", "na segunda", "no fim de semana", "no Natal". Periods use "de... a" and, with clock times, "das... às": "de segunda a sexta", "das nove às seis".`,
          `For in two weeks' time say "daqui a duas semanas"; for on time "na hora"; and at night "à noite", in the morning "de manhã", in the afternoon "à tarde" or "de tarde".`,
        ],
        examples: [
          { pt: "Eu nasci em 1995, em julho.", en: "I was born in 1995, in July." },
          { pt: "A loja abre de segunda a sábado.", en: "The shop opens Monday to Saturday." },
          { pt: "Trabalho das oito às cinco.", en: "I work from eight to five." },
          { pt: "A gente se vê no fim de semana.", en: "See you at the weekend." },
        ],
      },
      {
        heading: `Desde, até, há: since, until, for`,
        body: [
          `"Desde" (since) gives the starting point: "desde 2020", "desde criança" (since I was a child). "Até" (until, up to) gives the end point: "até amanhã", "até as dez" (also written "até às dez").`,
          `For how long something has been going on, Portuguese uses the present tense with "há" or "faz", where English uses the present perfect: "Moro aqui há três anos" or "Faz três anos que moro aqui" (I've lived here for three years). Using "desde" or "por" here is a typical mistake.`,
          `For going somewhere, "ir para" is the everyday choice; "ir a" sounds more formal or suggests a short visit: "Vou ao médico", "Fui a Paris a trabalho". In casual speech you will hear "ir no", "ir na": "vou no mercado". Write "ao" or "para o".`,
        ],
        examples: [
          { pt: "Estudo português desde o ano passado.", en: "I've been studying Portuguese since last year." },
          { pt: "Nós trabalhamos juntos há cinco anos.", en: "We've been working together for five years." },
          { pt: "Faz duas semanas que está chovendo.", en: "It's been raining for two weeks." },
          { pt: "A promoção vai até domingo.", en: "The sale runs until Sunday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu moro aqui desde três anos.",
        right: "Eu moro aqui há três anos.",
        why: `"Desde" needs a starting point (since 2021). For a length of time, use "há" or "faz".`,
      },
      {
        wrong: "A festa é em sábado.",
        right: "A festa é no sábado.",
        why: `Days of the week take "no" or "na".`,
      },
      {
        wrong: "Trabalho de segunda à sexta.",
        right: "Trabalho de segunda a sexta.",
        why: `After "de... a" with days there is no article, so no crase: "de segunda a sexta".`,
      },
      {
        wrong: "O carro está em frente o prédio.",
        right: "O carro está em frente ao prédio.",
        why: `"Em frente" needs "a" or "de" before the noun: "em frente ao" or "em frente do".`,
      },
      {
        wrong: "Estudo aqui por dois anos.",
        right: "Estudo aqui há dois anos.",
        why: `For something still going on, use "há" or "faz" with the present.`,
      },
    ],
    faqs: [
      {
        q: `"Até as dez" or "até às dez"?`,
        a: `Both are accepted in Brazil. "Até as dez" is the more traditional, "até às dez" is very common. Choose one and stay consistent.`,
      },
      {
        q: `Is "em" ever left out?`,
        a: `With some time phrases, yes: "Segunda eu começo" (on Monday I start), "Semana que vem" (next week). In speech these are very common; "na segunda" and "na semana que vem" are the fuller forms.`,
      },
      {
        q: `Are place words different in Portugal?`,
        a: `Mostly the same, with some local favourites. Portugal often says "ao pé de" for near, "à frente de" for in front of, and writes "debaixo de" for under, where Brazilian speech prefers "embaixo de".`,
      },
    ],
    related: ["por-vs-para", "contractions-no-na-do-da", "numbers-time-dates", "preterito-perfeito-irregular"],
    lessons: [
      "a1-tem-ha-places",
      "a2-ha-faz-ago",
      "a2-time-prepositions",
      "a2-desde-ate-ha",
      "a2-ir-a-para",
      "a2-error-hunt-por-para",
      "a2-transform-time",
    ],
  },
  {
    slug: "indefinite-pronouns-todo-tudo",
    title: "Someone, Nothing, Every: Indefinites and Todo vs Tudo",
    description:
      "Alguém, ninguém, algo, alguma coisa, nada, algum and nenhum, the Brazilian double negative (não vi ninguém), and the difference between tudo (everything) and todo, toda (all, every).",
    level: "A2",
    intro: [
      `Indefinites are the words for someone, something, nobody, nothing, some, none, all and every. Portuguese has neat pairs: "alguém" and "ninguém" (someone, no one), "alguma coisa" and "nada" (something, nothing), "algum" and "nenhum" (some, none).`,
      `Two points need attention. Portuguese uses a double negative as standard: "Não vi ninguém" (I didn't see anyone, literally I didn't see no one). And "tudo" and "todo" look alike but mean different things: "tudo" is everything, "todo" is all or every.`,
    ],
    sections: [
      {
        heading: `The pairs`,
        body: [
          `"Alguém", "ninguém", "algo", "alguma coisa" and "nada" never change. "Algum" and "nenhum" agree with the noun: "algum problema", "alguma ideia", "alguns amigos", "nenhuma notícia". "Nenhum" is almost always singular.`,
          `In speech "alguma coisa" is more common than "algo", which sounds a little more careful.`,
        ],
        table: {
          headers: ["Positive", "Negative", "Example"],
          rows: [
            ["alguém (someone)", "ninguém (no one)", "Tem alguém em casa? Não tem ninguém."],
            ["algo, alguma coisa (something)", "nada (nothing)", "Você quer alguma coisa? Não quero nada."],
            ["algum, alguma, alguns, algumas (some)", "nenhum, nenhuma (no, none)", "Tem alguma pergunta? Nenhuma."],
            ["às vezes, sempre (sometimes, always)", "nunca (never)", "Você já foi? Nunca fui."],
          ],
        },
        examples: [
          { pt: "Alguém viu as minhas chaves?", en: "Has anyone seen my keys?" },
          { pt: "Você precisa de alguma coisa do mercado?", en: "Do you need anything from the market?" },
          { pt: "Tenho alguns amigos em Porto Alegre.", en: "I have some friends in Porto Alegre." },
          { pt: "Nenhuma loja estava aberta.", en: "No shop was open." },
        ],
      },
      {
        heading: `The double negative`,
        body: [
          `When "ninguém", "nada", "nenhum" or "nunca" come after the verb, the verb needs "não" before it: "Não quero nada", "Não conheço ninguém aqui", "Não tem nenhum problema". This is correct, standard Portuguese, not slang.`,
          `When the negative word comes first, before the verb, there is no "não": "Ninguém veio" (nobody came), "Nada aconteceu", "Nunca fui a Manaus".`,
        ],
        examples: [
          { pt: "Eu não entendi nada.", en: "I didn't understand anything." },
          { pt: "Não tem ninguém na fila.", en: "There's nobody in the queue." },
          { pt: "Ninguém me avisou!", en: "Nobody told me!" },
          { pt: "Não comprei nenhum presente ainda.", en: "I haven't bought any presents yet." },
        ],
      },
      {
        heading: `"Tudo" versus "todo"`,
        body: [
          `"Tudo" means everything and stands alone; it never goes before a noun: "Tudo bem?", "Comprei tudo", "Tudo está pronto". "Todo", "toda", "todos" and "todas" go with a noun and agree with it.`,
          `The position of "todo" changes the meaning. "Todo dia" or "todos os dias" means every day; "o dia todo" or "o dia inteiro" means the whole day. "Todo mundo" (everybody) is singular and takes a singular verb: "Todo mundo gosta".`,
        ],
        table: {
          headers: ["Expression", "Meaning"],
          rows: [
            ["tudo", "everything"],
            ["todo dia, todos os dias", "every day"],
            ["o dia todo, o dia inteiro", "all day, the whole day"],
            ["toda semana, todas as semanas", "every week"],
            ["a semana toda", "the whole week"],
            ["todo mundo", "everybody"],
            ["todos, todas", "all of them, everyone (in a group)"],
          ],
        },
        examples: [
          { pt: "Tudo bem com você?", en: "Is everything OK with you?" },
          { pt: "Eu corro todo dia de manhã.", en: "I run every morning." },
          { pt: "Choveu o dia todo.", en: "It rained all day." },
          { pt: "Todo mundo adorou a festa.", en: "Everybody loved the party." },
          { pt: "Obrigado por tudo!", en: "Thanks for everything!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu quero nada.",
        right: "Eu não quero nada.",
        why: `"Nada" after the verb needs "não" before it.`,
      },
      {
        wrong: "Ninguém não veio.",
        right: "Ninguém veio.",
        why: `When the negative word starts the sentence, there is no "não".`,
      },
      {
        wrong: "Tudo os dias eu trabalho.",
        right: "Todos os dias eu trabalho.",
        why: `Before a noun, use "todo", agreeing with it. "Tudo" means everything and stands alone.`,
      },
      {
        wrong: "Todos mundo sabe disso.",
        right: "Todo mundo sabe disso.",
        why: `"Todo mundo" is a fixed expression and stays singular.`,
      },
      {
        wrong: "Não tenho nenhuma coisa.",
        right: "Não tenho nada.",
        why: `Nothing is "nada". "Nenhuma coisa" exists but sounds odd in everyday speech.`,
      },
    ],
    faqs: [
      {
        q: `Does "algum" ever mean none?`,
        a: `Yes, after the noun in a negative sentence it is an emphatic none: "de jeito algum" or "de modo algum" (no way at all). This is formal or set-phrase use; normally "nenhum" means none.`,
      },
      {
        q: `"Todo dia" or "todos os dias"?`,
        a: `Both mean every day and both are correct. "Todo dia" is more common in Brazilian speech.`,
      },
      {
        q: `Is it different in Portugal?`,
        a: `The words are the same, but European Portuguese says "toda a gente" for everybody where Brazil says "todo mundo", and in Portugal "todo o dia" means the whole day.`,
      },
    ],
    related: ["demonstratives-esse-este-aquele", "questions-and-question-words"],
    lessons: ["a2-indefinites-1", "a2-indefinites-2", "a2-todo-tudo", "a2-error-hunt-shopping", "a2-mission-feira"],
  },
  {
    slug: "demonstratives-esse-este-aquele",
    title: "This and That: Esse, Este and Aquele",
    description:
      "Esse and isso as the everyday this and that in Brazil, este and isto in writing, aquele and aquilo for far away, and the contractions nesse, desse, naquele, daquilo.",
    level: "A2",
    intro: [
      `Traditional grammar gives Portuguese three demonstratives: "este" (this, near me), "esse" (that, near you) and "aquele" (that, over there). In Brazilian speech the first two have merged: "esse" is used for both this and that, and "este" is mostly found in writing.`,
      `So in practice you need "esse" for this or that, and "aquele" for things further away: "Esse café está ótimo" (this coffee is great), "Aquele prédio é novo" (that building over there is new).`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `"Esse", "este" and "aquele" agree with the noun. The neuter forms "isso", "isto" and "aquilo" stand alone, for things without a named noun or for ideas: "O que é isso?", "Isso é verdade". They never go before a noun.`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter (alone)"],
          rows: [
            ["this, that (everyday)", "esse, esses", "essa, essas", "isso"],
            ["this (written, near me)", "este, estes", "esta, estas", "isto"],
            ["that (over there)", "aquele, aqueles", "aquela, aquelas", "aquilo"],
          ],
        },
        examples: [
          { pt: "Quanto custa essa camiseta?", en: "How much is this T-shirt?" },
          { pt: "Isso aqui é seu?", en: "Is this yours?" },
          { pt: "Aquela moça ali é a minha prima.", en: "That young woman over there is my cousin." },
          { pt: "O que é aquilo no céu?", en: "What's that in the sky?" },
        ],
      },
      {
        heading: `"Esse" or "este"?`,
        body: [
          `In conversation, "esse" covers both this and that; Brazilians add "aqui" or "aí" when they need to be precise: "esse aqui" (this one here), "esse aí" (that one by you). "Este" appears in writing and formal speech, and in fixed time expressions: "este ano" and "esse ano" are both common for this year.`,
          `In writing, careful style still uses "este" for what is about to be mentioned or is near the writer, and "esse" for what was just mentioned: "Este documento contém..." at the top of a text, "Esse problema" referring back.`,
        ],
        examples: [
          { pt: "Eu quero esse aqui, não aquele.", en: "I want this one here, not that one." },
          { pt: "Esse ano vai ser ótimo.", en: "This year is going to be great." },
          { pt: "Este contrato é válido por um ano.", en: "This contract is valid for one year." },
        ],
      },
      {
        heading: `Contractions`,
        body: [
          `Like articles, demonstratives fuse with "em" and "de": "nesse" (in this), "desse" (of this), "naquele" (in that), "daquele" (of that), "disso", "nisso", "daquilo". "A" + "aquele" becomes "àquele" with a crase: "Fui àquela loja".`,
        ],
        table: {
          headers: ["", "esse", "este", "aquele", "isso", "aquilo"],
          rows: [
            ["em", "nesse", "neste", "naquele", "nisso", "naquilo"],
            ["de", "desse", "deste", "daquele", "disso", "daquilo"],
            ["a", "a esse", "a este", "àquele", "a isso", "àquilo"],
          ],
        },
        examples: [
          { pt: "Eu moro nesse prédio.", en: "I live in this building." },
          { pt: "Eu gosto muito daquele restaurante.", en: "I really like that restaurant." },
          { pt: "Não pensei nisso.", en: "I didn't think of that." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Isso livro é bom.",
        right: "Esse livro é bom.",
        why: `"Isso" stands alone. Before a noun, use "esse" or "essa".`,
      },
      {
        wrong: "Aquilo carro é do João.",
        right: "Aquele carro é do João.",
        why: `"Aquilo" stands alone. With a noun, use "aquele" or "aquela".`,
      },
      {
        wrong: "Eu moro em esse bairro.",
        right: "Eu moro nesse bairro.",
        why: `"Em" + "esse" always contracts to "nesse".`,
      },
      {
        wrong: "Gosto de aquela praia.",
        right: "Gosto daquela praia.",
        why: `"De" + "aquela" always contracts to "daquela".`,
      },
    ],
    faqs: [
      {
        q: `Will I sound wrong if I use "este"?`,
        a: `No, just a bit formal in conversation. In writing it is perfectly normal. In speech, "esse" is what you'll hear.`,
      },
      {
        q: `What do "aqui", "aí" and "lá" add?`,
        a: `Precision about distance: "aqui" here (by me), "aí" there (by you), "ali" and "lá" over there. Brazilians pair them with demonstratives constantly: "isso aí", "aquele lá".`,
      },
      {
        q: `Is the system different in Portugal?`,
        a: `In European Portuguese speech the three-way contrast is alive: "este" for near me, "esse" for near you, "aquele" for far from both. Brazil's merging of "este" and "esse" is one of the clearest differences between the two.`,
      },
    ],
    related: ["indefinite-pronouns-todo-tudo", "contractions-no-na-do-da"],
    lessons: ["a2-demonstratives", "a2-dialogue-restaurant", "a2-spiral-shopping"],
  },
  {
    slug: "ficar-meanings",
    title: "Ficar, Estar Com and Doer: Changes, States and Pain",
    description:
      "The many meanings of ficar (become, stay, be located, suit, keep doing, ficar com), how it differs from estar, estar com for fome, febre and dor, and doer for saying what hurts.",
    level: "A2",
    intro: [
      `"Ficar" is one of the most Brazilian verbs there is. Depending on the context it means to become ("fiquei triste", I got sad), to stay ("fico em casa", I'm staying home), to be located ("onde fica o banco?") and more. English uses a different verb for each.`,
      `This guide also covers the other everyday ways of describing states of the body: "estar com" ("estou com febre", I have a fever) and "doer" ("minha cabeça dói", my head hurts).`,
    ],
    sections: [
      {
        heading: `The meanings of "ficar"`,
        body: [
          `"Ficar" is regular in the present ("fico, fica, ficamos, ficam") and in the past, apart from the spelling of "fiquei". The table shows its main uses. The key to most of them: "estar" describes a state, "ficar" the change into it or staying in it.`,
        ],
        table: {
          headers: ["Meaning", "Example", "English"],
          rows: [
            ["become, get", "Fiquei muito feliz com a notícia.", "I was really happy about the news."],
            ["stay", "Hoje eu fico em casa.", "Today I'm staying at home."],
            ["be located", "Onde fica a rodoviária?", "Where's the bus station?"],
            ["suit, look", "Essa camisa ficou ótima em você.", "That shirt looks great on you."],
            ["keep doing", "Fiquei esperando uma hora.", "I kept waiting for an hour."],
            ["keep, take", "Vou ficar com a azul.", "I'll take the blue one."],
          ],
        },
        examples: [
          { pt: "Ela ficou nervosa antes da entrevista.", en: "She got nervous before the interview." },
          { pt: "Fica mais um pouco!", en: "Don't go yet, stay a little longer!" },
          { pt: "O hotel fica a duas quadras da praia.", en: "The hotel is two blocks from the beach." },
          { pt: "Pode ficar com o troco.", en: "You can keep the change." },
        ],
      },
      {
        heading: `"Estar" or "ficar"?`,
        body: [
          `"Estou doente" (I'm sick) describes the state; "Fiquei doente" (I got sick) describes the change. In the past, use "ficar" for becoming: "Fiquei cansado depois da viagem." With places, "estar" is where a person is now, "ficar" is where they stay or where a building is: "Ele está em casa" (he's at home now), "Ele fica em casa aos domingos" (he stays home on Sundays).`,
        ],
        examples: [
          { pt: "Estou cansado hoje.", en: "I'm tired today." },
          { pt: "Fiquei cansado depois da corrida.", en: "I got tired after the run." },
          { pt: "Ele está no hotel agora.", en: "He's at the hotel now." },
          { pt: "Ele vai ficar no hotel até sexta.", en: "He's staying at the hotel until Friday." },
        ],
      },
      {
        heading: `"Estar com" and "doer"`,
        body: [
          `Temporary physical states often use "estar com" plus a noun: "estou com fome" (hungry), "com sede" (thirsty), "com sono" (sleepy), "com frio" (cold), "com febre" (a fever), "com gripe" (the flu), "com dor de cabeça" (a headache), "com dor nas costas" (backache).`,
          `"Doer" (to hurt) agrees with the part of the body that hurts, which is the subject: "Minha cabeça dói", "Meus pés doem", "Está doendo?" (does it hurt?). The person can be added with "me": "Me dói a garganta", although "Minha garganta está doendo" is more common.`,
        ],
        examples: [
          { pt: "Estou com dor de garganta há dois dias.", en: "I've had a sore throat for two days." },
          { pt: "A criança está com febre.", en: "The child has a fever." },
          { pt: "Minhas costas doem quando eu sento muito.", en: "My back hurts when I sit a lot." },
          { pt: "Onde está doendo?", en: "Where does it hurt?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu fui doente na semana passada.",
        right: "Eu fiquei doente na semana passada.",
        why: `Getting sick is a change of state, which is "ficar".`,
      },
      {
        wrong: "Eu estou dor de cabeça.",
        right: "Eu estou com dor de cabeça.",
        why: `Pain, fever and hunger are nouns, so they need "estar com".`,
      },
      {
        wrong: "Minha cabeça dóis.",
        right: "Minha cabeça dói.",
        why: `The head is the subject: "dói" for one part, "doem" for several.`,
      },
      {
        wrong: "Eu fiquei esperar uma hora.",
        right: "Eu fiquei esperando uma hora.",
        why: `Keep doing is "ficar" + gerúndio.`,
      },
    ],
    faqs: [
      {
        q: `"Onde fica" or "onde está"?`,
        a: `For buildings and places that don't move, "onde fica" is the most natural in Brazil ("Onde fica o museu?"); "onde é" is common too. For people and movable things, "onde está": "Onde está o João?"`,
      },
      {
        q: `What does "ficar" mean between young people?`,
        a: `In Brazilian slang, "ficar com alguém" also means to make out with or have a casual fling with someone. Context makes it clear; it is worth knowing so you are not surprised.`,
      },
      {
        q: `Is "ficar" used the same way in Portugal?`,
        a: `Most meanings are shared, but Brazil uses "ficar" more, especially for locations. In Portugal "estar" or "ser" are often used where Brazilians say "fica".`,
      },
    ],
    related: ["ser-vs-estar", "estar-present-tense", "perfeito-vs-imperfeito"],
    lessons: ["a2-body-doer", "a2-estar-com", "a2-ficar-1", "a2-ficar-2", "a2-contrast-estar-ficar", "a2-dialogue-doctor", "a2-error-hunt-health"],
  },
];
