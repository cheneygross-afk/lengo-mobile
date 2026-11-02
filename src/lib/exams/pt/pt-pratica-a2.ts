// Synced from cheneygross-afk/lengo:src/lib/exams/pt/pt-pratica-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam, ExamPaper } from "../types";
import { paras } from "./text";

// Deep End A2 practice test -- NOT a Celpe-Bras exam. The Celpe-Bras has
// no A1 or A2 (its lowest certificate, Intermediário, sits around B1), so
// this shorter test gives learners below B1 a first taste of its
// integrated style: write a text for a stated reader from something you
// heard or read, then talk about yourself and two short "elementos
// provocadores". Instructions in simple Portuguese with an English gloss;
// rubrics in English, model answers in Portuguese.

const ESCRITA: ExamPaper = {
  id: "escrita",
  kind: "writing",
  title: "Parte escrita",
  minutes: 45,
  group: 1,
  tasks: [
    {
      title: "Tarefa 1",
      instructions:
        "Você vai ouvir duas vezes uma mensagem de voz da sua amiga Carla. Responda à mensagem por escrito. Diga se você vai à festa, o que você vai levar e faça uma pergunta para a Carla.",
      instructionsEn:
        "You'll hear a voice message from your friend Carla, twice. Write her a reply: say whether you're coming to the party, what you'll bring, and ask her one question. The transcript appears when you finish the paper.",
      audio: [
        {
          label: "Áudio: mensagem de voz da Carla",
          plays: 2,
          lines: [
            {
              voice: "f",
              text: "Oi! Aqui é a Carla. Tudo bem? Olha, no sábado é o aniversário do Pedro, e a gente vai fazer um churrasco lá em casa, a partir do meio-dia. Você quer vir? O endereço é Rua Bahia, número duzentos e trinta, apartamento cinquenta e um, no bairro da Graça. É perto do metrô, uns dez minutos a pé. Nós vamos comprar a carne, mas cada pessoa leva uma coisa: uma bebida, uma sobremesa ou uma salada. Ah, e tem piscina no prédio, então leve roupa de banho! Me responde até quinta-feira, combinado? Beijo!",
            },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Sua amiga Carla convidou você para um churrasco no sábado, ao meio-dia, para o aniversário do Pedro. Cada pessoa leva uma bebida, uma sobremesa ou uma salada. Responda à mensagem: diga se você vai à festa, o que você vai levar e faça uma pergunta para a Carla.",
          minWords: 40,
          maxWords: 70,
          rubric: [
            "Covers all three points: whether you're coming, what you'll bring (a drink, a dessert or a salad), one question",
            "Sounds like a message to a friend: \"Oi, Carla! … Beijos\" / \"Um abraço\"",
            "Uses \"vou\" + infinitive for plans (\"vou levar uma sobremesa\")",
            "Asks a real question with a question word (\"Que horas…?\" \"Onde…?\" \"Posso levar…?\")",
            "Mentions something from the message (the birthday, the pool, the address near the metro)",
          ],
          modelAnswer: paras(
            "Oi, Carla! Tudo bem?",
            "Obrigada pelo convite! Eu vou, sim. Adoro churrasco! Vou levar uma sobremesa: um bolo de chocolate, porque o Pedro gosta muito. E vou levar roupa de banho também, claro.",
            "Uma pergunta: posso levar a minha irmã? Ela está aqui em Salvador esta semana.",
            "Até sábado!\nBeijos,\nSophie",
          ),
        },
      ],
    },
    {
      title: "Tarefa 2",
      instructions:
        "Leia o anúncio do Centro Cultural Vila Mar. Escreva um e-mail para o centro cultural. Diga qual oficina você quer fazer e por quê, pergunte uma informação que não está no anúncio e diga quando você pode começar.",
      instructionsEn:
        "Read the community center's ad. Write it an e-mail: say which workshop you want to do and why, ask for one piece of information that isn't in the ad, and say when you can start.",
      texts: [
        {
          title: "Centro Cultural Vila Mar: oficinas de férias",
          body: paras(
            "Samba de roda: terças e quintas, das 19h às 20h30. R$ 80 por mês.",
            "Capoeira para iniciantes: segundas, quartas e sextas, das 7h às 8h. R$ 100 por mês.",
            "Culinária baiana: aprenda a fazer moqueca, acarajé e cocada. Sábados, das 9h às 12h. R$ 60 por aula, ingredientes incluídos.",
            "Para todas as idades. Não é preciso ter experiência. Inscrições pelo e-mail contato@vilamar.org.br.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você leu um anúncio do Centro Cultural Vila Mar, em Salvador, com oficinas de samba de roda, de capoeira e de culinária baiana. Escreva um e-mail para o centro cultural. Diga qual oficina você quer fazer e por quê, pergunte uma informação que não está no anúncio e diga quando você pode começar.",
          minWords: 50,
          maxWords: 80,
          rubric: [
            "Covers all three points: which workshop and why, a question about something not in the ad, when you can start",
            "Polite e-mail to an organization: \"Olá\" / \"Bom dia\" … \"Obrigado\" or \"Obrigada\" / \"Atenciosamente\"",
            "Gives a reason with \"porque\" (\"porque eu adoro cozinhar\")",
            "Uses \"gostaria de\" or \"quero\" politely (\"Gostaria de fazer a oficina de…\")",
            "Uses days and times correctly (\"no sábado\", \"às nove horas\", \"na próxima semana\")",
          ],
          modelAnswer: paras(
            "Bom dia!",
            "Meu nome é Tom Becker e moro em Salvador há três meses. Vi o anúncio das oficinas de férias e gostaria de fazer a oficina de culinária baiana, porque adoro cozinhar e quero aprender a fazer moqueca.",
            "Tenho uma pergunta: as aulas são em grupo? Quantas pessoas tem em cada turma?",
            "Posso começar no próximo sábado, dia 10.",
            "Obrigado e até logo!\nTom Becker",
          ),
        },
      ],
    },
  ],
};

const ORAL: ExamPaper = {
  id: "oral",
  kind: "speaking",
  title: "Parte oral",
  minutes: 10,
  group: 2,
  tasks: [
    {
      title: "Conversa inicial",
      instructions: "O entrevistador vai conversar com você sobre a sua vida, a sua rotina e os seus interesses. Responda com frases completas.",
      instructionsEn:
        "The examiner chats with you about your life, your routine and your interests, for about two minutes. Answer in full sentences and add a detail or two each time.",
      speak: {
        prompt: "Fale sobre você e a sua rotina.",
        points: ["Seu nome, de onde você é e onde mora", "Seu trabalho ou seus estudos", "O que você faz no fim de semana"],
        examinerQuestions: [
          "Como você se chama? De onde você é?",
          "Onde você mora? Você gosta do seu bairro?",
          "O que você faz? Você trabalha ou estuda?",
          "O que você gosta de fazer no fim de semana?",
          "Por que você estuda português?",
        ],
        prepMinutes: 0,
        speakMinutes: 2,
        modelAnswer: paras(
          "– Como você se chama? De onde você é?",
          "– Meu nome é Sophie. Eu sou da França, mas moro em Salvador há seis meses, no bairro do Rio Vermelho. Eu gosto muito do meu bairro, porque é perto da praia e tem muitos restaurantes.",
          "– O que você faz?",
          "– Eu trabalho numa empresa de turismo. Eu ajudo os turistas estrangeiros a organizar as viagens.",
          "– O que você gosta de fazer no fim de semana?",
          "– No sábado eu vou à feira de manhã e depois encontro os meus amigos. No domingo eu vou à praia ou fico em casa e leio um livro. Eu estudo português porque quero conversar com os meus vizinhos e com os meus colegas.",
        ),
      },
    },
    {
      title: "Elemento provocador 1",
      instructions: "Leia o material por um minuto. Depois, fale sobre ele e responda às perguntas do entrevistador.",
      instructionsEn:
        "Read the card for a minute (here the photo is described), then talk about it and answer the examiner's questions, for about three minutes.",
      speak: {
        prompt: "Leia o material e converse com o entrevistador.",
        material: [
          {
            label: "Elemento provocador 1",
            title: "Pão na chapa e cafezinho",
            body: paras(
              "Imagem: o balcão de uma padaria de manhã; um homem toma um café com leite e come um pão na chapa.",
              "Muitos brasileiros tomam o café da manhã na padaria, antes do trabalho. Os favoritos são o pão francês com manteiga, o pão de queijo e o cafezinho. Na padaria também se compram bolos, salgados e frios.",
            ),
          },
        ],
        points: ["O que você vê na imagem", "O que você come no café da manhã", "Como é o café da manhã no seu país"],
        examinerQuestions: [
          "O que você vê na imagem?",
          "O que você come no café da manhã?",
          "Você já foi a uma padaria brasileira? O que comeu?",
          "Como é o café da manhã no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 3,
        modelAnswer: paras(
          "– O que você vê na imagem?",
          "– Eu vejo uma padaria. Um homem está tomando um café com leite e comendo um pão na chapa no balcão. Acho que ele vai trabalhar depois.",
          "– O que você come no café da manhã?",
          "– Normalmente eu como pão com manteiga e uma fruta, e tomo café. No Brasil eu também como mamão e tapioca. Eu adoro tapioca com queijo!",
          "– Como é o café da manhã no seu país?",
          "– Na França, as pessoas comem pão com manteiga e geleia e tomam café com leite numa tigela. É parecido, mas lá ninguém toma café da manhã na padaria todos os dias. As pessoas compram o pão e comem em casa.",
        ),
      },
    },
    {
      title: "Elemento provocador 2",
      instructions: "Leia o material por um minuto. Depois, fale sobre ele e responda às perguntas do entrevistador.",
      instructionsEn:
        "Read the card for a minute (here the photo is described), then talk about it and answer the examiner's questions, for about three minutes.",
      speak: {
        prompt: "Leia o material e converse com o entrevistador.",
        material: [
          {
            label: "Elemento provocador 2",
            title: "Domingo na praia",
            body: paras(
              "Imagem: uma praia cheia num domingo de sol; famílias debaixo de guarda-sóis, um vendedor de milho e crianças jogando bola.",
              "No Brasil, a praia é um lugar de encontro. As pessoas levam a família e os amigos, tomam água de coco, comem petiscos e jogam futebol ou vôlei na areia. Nas cidades sem mar, muita gente vai a rios, lagos e parques.",
            ),
          },
        ],
        points: ["O que as pessoas estão fazendo na imagem", "O que você faz no domingo", "Se você prefere praia, campo ou cidade"],
        examinerQuestions: [
          "O que as pessoas estão fazendo na imagem?",
          "Você gosta de ir à praia? Por quê?",
          "O que você fez no último domingo?",
          "Você prefere praia, campo ou cidade?",
        ],
        prepMinutes: 1,
        speakMinutes: 3,
        modelAnswer: paras(
          "– O que as pessoas estão fazendo na imagem?",
          "– Na imagem tem muita gente na praia. As famílias estão debaixo dos guarda-sóis, as crianças estão jogando bola e um homem está vendendo milho.",
          "– O que você fez no último domingo?",
          "– No último domingo eu fui à praia com dois colegas do trabalho. Nós tomamos água de coco, comemos acarajé e jogamos vôlei. Foi muito divertido, mas estava muito quente!",
          "– Você prefere praia, campo ou cidade?",
          "– Eu prefiro a praia, porque eu gosto de nadar e de sol. Na minha cidade, na França, não tem mar, então para mim a praia é uma coisa especial.",
        ),
      },
    },
  ],
};

export const PT_PRATICA_A2: Exam = {
  slug: "pt-pratica-a2",
  level: "A2",
  title: "Deep End A2 integrated practice test",
  description:
    "A shorter practice test for learners below B1, in the integrated style of the Celpe-Bras but at A2: answer a friend's voice message and write to a community center about its ad, then a short conversation about yourself and two picture cards. Deep End practice, not a Celpe-Bras exam: it gives no certificate level.",
  papers: [ESCRITA, ORAL],
};
