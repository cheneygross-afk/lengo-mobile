// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-3-individual.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { ELEMENT_INSTRUCTIONS, ELEMENT_NOTE, INTERVIEW_INSTRUCTIONS, INTERVIEW_NOTE, paras } from "./text";

// Celpe-Bras practice exam 3 (the environment and consumption) -- Parte
// Individual. About 20 minutes, as in the real exam: five minutes of
// conversation about the candidate, then three "elementos provocadores"
// (a photo with a short text), about five minutes each, read in silence
// first. The examiner's questions stand in for the real examiner's roteiro.
export const CELPE_BRAS_3_INDIVIDUAL: ExamPaper = {
  id: "individual",
  kind: "speaking",
  title: "Parte Individual",
  minutes: 20,
  group: 2,
  tasks: [
    {
      title: "Conversa inicial",
      instructions: INTERVIEW_INSTRUCTIONS,
      instructionsEn: INTERVIEW_NOTE,
      speak: {
        prompt: "Fale sobre você, seus interesses e seus planos.",
        points: [
          "De onde você é e o que faz",
          "Seus interesses e passatempos",
          "Sua relação com o Brasil e com a língua portuguesa",
          "Seus planos de estudo ou de trabalho",
        ],
        examinerQuestions: [
          "Você poderia se apresentar, por favor?",
          "No questionário, você escreveu que faz trilhas. Onde você costuma ir?",
          "Como o português entrou na sua vida?",
          "O que você acha mais diferente entre o Brasil e o seu país?",
          "Quais são os seus planos depois do exame?",
        ],
        prepMinutes: 0,
        speakMinutes: 5,
        modelAnswer: paras(
          "– Você poderia se apresentar, por favor?",
          "– Claro. Eu me chamo Minho Park, sou sul-coreano e tenho vinte e seis anos. Sou formado em engenharia ambiental e hoje trabalho numa empresa de consultoria em Seul, com projetos de tratamento de água.",
          "– No questionário, você escreveu que faz trilhas. Onde você costuma ir?",
          "– Na Coreia há muitas montanhas, então quase todo fim de semana eu subo alguma perto de Seul. Quando estive no Brasil, no ano passado, fiz uma trilha na Chapada Diamantina, na Bahia, e fiquei impressionado com as cachoeiras. Foi lá que eu decidi levar o português a sério.",
          "– Quais são os seus planos depois do exame?",
          "– Quero fazer um mestrado em recursos hídricos numa universidade brasileira. O Brasil tem uma das maiores reservas de água doce do mundo e, ao mesmo tempo, problemas de abastecimento nas cidades. Para um engenheiro ambiental, é um lugar fascinante para estudar.",
        ),
      },
    },
    {
      title: "Elemento provocador 1",
      instructions: ELEMENT_INSTRUCTIONS,
      instructionsEn: ELEMENT_NOTE,
      speak: {
        prompt: "Leia o material e converse com o entrevistador sobre o tema.",
        material: [
          {
            label: "Elemento provocador 1",
            title: "Adeus, sacolinha?",
            body: paras(
              "Imagem: uma cliente de supermercado guarda as compras em uma sacola de pano no caixa, ao lado de um cartaz que diz: Traga a sua sacola.",
              "Várias cidades brasileiras proibiram os supermercados de distribuir sacolas plásticas descartáveis gratuitamente. Os defensores da medida lembram que as sacolas levam centenas de anos para se decompor e acabam nos rios e no mar. Muitos consumidores reclamam, porém, que agora precisam comprar sacos de lixo, que também são de plástico.",
            ),
          },
        ],
        points: [
          "Diga do que trata o material",
          "Comente os argumentos a favor e contra a medida",
          "Dê a sua opinião e fale do seu país",
        ],
        examinerQuestions: [
          "O que você vê na imagem e o que diz o texto?",
          "Você acha que proibir as sacolas plásticas resolve o problema?",
          "O que você responderia aos consumidores que reclamam?",
          "Você costuma levar sacola quando vai fazer compras?",
          "Como é essa questão no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– O que você vê na imagem e o que diz o texto?",
          "– A imagem mostra uma cliente usando uma sacola de pano no caixa do supermercado. O texto explica que algumas cidades brasileiras proibiram a distribuição gratuita de sacolas plásticas, por causa da poluição, mas que nem todo mundo gostou.",
          "– Você acha que proibir as sacolas resolve o problema?",
          "– Resolver, não resolve, mas é um começo. O argumento dos consumidores faz sentido: se eu reutilizava a sacolinha do mercado como saco de lixo, agora vou ter que comprar outro plástico. Por outro lado, a maior parte das sacolas era usada por poucos minutos e ia direto para o lixo, ou para o mar. Acho que a medida muda a mentalidade das pessoas.",
          "– Como é essa questão no seu país?",
          "– Na Coreia, os supermercados grandes não oferecem sacolas descartáveis há alguns anos. No começo houve reclamação, mas hoje todo mundo anda com uma sacola dobrada na bolsa. Virou hábito, e ninguém pensa mais nisso.",
        ),
      },
    },
    {
      title: "Elemento provocador 2",
      instructions: ELEMENT_INSTRUCTIONS,
      instructionsEn: ELEMENT_NOTE,
      speak: {
        prompt: "Leia o material e converse com o entrevistador sobre o tema.",
        material: [
          {
            label: "Elemento provocador 2",
            title: "O carro do futuro já chegou?",
            body: paras(
              "Imagem: um carro elétrico ligado a um ponto de recarga no estacionamento de um shopping.",
              "As vendas de carros elétricos crescem no Brasil, mas eles ainda são caros, e os pontos de recarga se concentram nas grandes capitais. Alguns especialistas defendem que o país, que já usa o etanol da cana-de-açúcar há décadas, deveria investir em motores híbridos. Outros lembram que o mais sustentável seria melhorar o transporte público.",
            ),
          },
        ],
        points: [
          "Explique o tema do material",
          "Compare as soluções apresentadas",
          "Diga qual parece mais adequada para o Brasil e para o seu país",
        ],
        examinerQuestions: [
          "Do que trata esse material?",
          "Você compraria um carro elétrico? Por quê?",
          "Na sua opinião, qual é a melhor solução para o Brasil?",
          "O transporte público pode substituir o carro numa cidade grande?",
          "Como as pessoas se deslocam na sua cidade?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– Do que trata esse material?",
          "– Dos carros elétricos no Brasil. Eles estão vendendo mais, mas ainda são caros e só há pontos de recarga nas capitais. O texto apresenta duas alternativas: investir em carros híbridos, aproveitando o etanol, ou no transporte público.",
          "– Na sua opinião, qual é a melhor solução para o Brasil?",
          "– Eu acho que o texto tem razão ao dizer que a solução mais sustentável não é trocar um carro por outro. Um ônibus ou um metrô leva centenas de pessoas e ocupa muito menos espaço. Mas o Brasil tem um território enorme, e no interior o carro continua sendo necessário. Nesse caso, o híbrido com etanol me parece inteligente, porque o país já tem essa tecnologia e a cana é renovável.",
          "– Como as pessoas se deslocam na sua cidade?",
          "– Em Seul, a maioria usa o metrô, que é muito eficiente e barato. Eu mesmo não tenho carro. Mas a energia elétrica lá ainda vem bastante de usinas a carvão, então um carro elétrico não é tão limpo quanto parece.",
        ),
      },
    },
    {
      title: "Elemento provocador 3",
      instructions: ELEMENT_INSTRUCTIONS,
      instructionsEn: ELEMENT_NOTE,
      speak: {
        prompt: "Leia o material e converse com o entrevistador sobre o tema.",
        material: [
          {
            label: "Elemento provocador 3",
            title: "Comida no lixo",
            body: paras(
              "Imagem: um prato de restaurante por quilo cheio de comida, ao lado de uma lixeira com restos de arroz, feijão e salada.",
              "Enquanto milhões de brasileiros não têm o que comer todos os dias, toneladas de alimentos vão para o lixo, das lavouras e feiras até a geladeira de casa. Alguns restaurantes passaram a cobrar uma taxa de quem deixa comida no prato, e uma lei permite que estabelecimentos doem alimentos ainda próprios para consumo. Mesmo assim, o desperdício continua alto.",
            ),
          },
        ],
        points: [
          "Diga do que trata o material",
          "Comente as medidas citadas no texto",
          "Fale de atitudes que podem reduzir o desperdício",
        ],
        examinerQuestions: [
          "O que mostra a imagem? Qual é o assunto do texto?",
          "Por que se desperdiça tanta comida, na sua opinião?",
          "Você acha justo um restaurante cobrar de quem deixa comida no prato?",
          "O que você faz para não desperdiçar comida em casa?",
          "Esse problema existe no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– O que mostra a imagem? Qual é o assunto do texto?",
          "– A imagem mostra um prato exagerado num restaurante por quilo e, do lado, uma lixeira cheia de restos de comida. O texto fala do desperdício de alimentos no Brasil, que é um contraste chocante com a fome que ainda atinge milhões de pessoas.",
          "– Você acha justo um restaurante cobrar de quem deixa comida no prato?",
          "– Acho, sim, desde que o cliente seja avisado antes. No restaurante por quilo a própria pessoa se serve, então ela tem como controlar a quantidade. Muitas vezes a gente coloca no prato com os olhos, como se diz, e não com a fome.",
          "– O que você faz para não desperdiçar comida em casa?",
          "– Eu planejo as refeições da semana e faço uma lista antes de ir ao mercado, para não comprar por impulso. E aprendi com uma amiga brasileira a aproveitar o que sobra: o arroz de ontem vira bolinho, o feijão vira sopa. Na Coreia também se desperdiça muito, mas lá se paga pelo lixo orgânico por peso, e isso faz as pessoas pensarem duas vezes.",
        ),
      },
    },
  ],
};
