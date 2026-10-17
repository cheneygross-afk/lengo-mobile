// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-1-individual.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { ELEMENT_INSTRUCTIONS, ELEMENT_NOTE, INTERVIEW_INSTRUCTIONS, INTERVIEW_NOTE, paras } from "./text";

// Celpe-Bras practice exam 1 (city life) -- Parte Individual.
// About 20 minutes, as in the real exam: five minutes of conversation
// about the candidate, then three "elementos provocadores" (a photo with
// a short text), about five minutes each including a minute to read. The
// examiner's questions stand in for the real examiner's roteiro.
export const CELPE_BRAS_1_INDIVIDUAL: ExamPaper = {
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
          "Quem você é, onde mora e o que faz",
          "O que você gosta de fazer no tempo livre",
          "Por que aprende português e qual é a sua relação com o Brasil",
          "Seus planos para os próximos anos",
        ],
        examinerQuestions: [
          "Para começar, você poderia se apresentar?",
          "Vi no seu questionário que você gosta de cozinhar. Que tipo de comida você costuma fazer?",
          "Como você começou a estudar português?",
          "Você já esteve no Brasil? O que mais chamou a sua atenção?",
          "Por que você decidiu fazer o Celpe-Bras?",
        ],
        prepMinutes: 0,
        speakMinutes: 5,
        modelAnswer: paras(
          "– Para começar, você poderia se apresentar?",
          "– Claro. Meu nome é Daniel, tenho trinta e dois anos e sou engenheiro civil. Moro em Toronto, mas a minha família é de origem portuguesa por parte de mãe, então sempre ouvi falar português em casa, só que nunca tinha estudado de verdade.",
          "– Vi no seu questionário que você gosta de cozinhar. Que tipo de comida você costuma fazer?",
          "– É verdade, cozinhar é o que mais me relaxa. Nos fins de semana eu gosto de testar receitas de outros países. Ultimamente ando fazendo muita comida brasileira: já aprendi a fazer feijoada e pão de queijo, e agora estou tentando acertar a moqueca.",
          "– Por que você decidiu fazer o Celpe-Bras?",
          "– Porque a minha empresa tem um projeto de saneamento em Fortaleza e eu quero participar. Para isso preciso comprovar que falo português. Além disso, quero ter um certificado oficial, porque um dia gostaria de morar no Brasil por alguns anos.",
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
            title: "Casa, escritório ou os dois?",
            body: paras(
              "Imagem: uma mulher trabalha com um notebook na mesa da cozinha, enquanto uma criança desenha ao lado dela.",
              "Depois da pandemia, muitas empresas brasileiras adotaram o trabalho híbrido, com alguns dias em casa e outros no escritório. A maioria dos trabalhadores aprova o modelo: economiza horas de trânsito e ganha flexibilidade. Algumas empresas, porém, voltaram a exigir presença todos os dias, com o argumento de que a convivência estimula a criatividade e ajuda a formar os profissionais mais jovens.",
            ),
          },
        ],
        points: [
          "Diga do que trata o material",
          "Compare as vantagens e as desvantagens do trabalho em casa",
          "Dê a sua opinião e fale da situação no seu país",
        ],
        examinerQuestions: [
          "Do que trata esse material?",
          "Por que tantas pessoas preferem o trabalho híbrido?",
          "E quais são as desvantagens de trabalhar em casa, na sua opinião?",
          "Você acha que as empresas têm razão quando dizem que a convivência é importante para os mais jovens?",
          "Como é essa questão no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– Do que trata esse material?",
          "– O texto fala do trabalho híbrido, que se tornou comum no Brasil depois da pandemia. A imagem mostra justamente uma mãe trabalhando na cozinha enquanto a filha desenha ao lado, o que resume bem as vantagens e as dificuldades desse modelo.",
          "– E quais são as desvantagens de trabalhar em casa, na sua opinião?",
          "– A principal vantagem, sem dúvida, é não perder tempo no trânsito; numa cidade grande isso pode significar duas ou três horas por dia. Mas, como a foto sugere, é difícil separar a vida pessoal do trabalho. Muita gente acaba trabalhando mais horas, e quem mora num apartamento pequeno nem tem um lugar adequado.",
          "– Você acha que as empresas têm razão?",
          "– Em parte, sim. Quando eu comecei a trabalhar, aprendi muito ouvindo os colegas mais experientes, coisa que numa videochamada não acontece. Por isso acho que o modelo híbrido é o mais equilibrado. No meu país, aliás, a discussão é parecida: as empresas de tecnologia deixam as pessoas escolherem, mas os bancos estão exigindo a volta ao escritório.",
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
            title: "Os muros que viraram galeria",
            body: paras(
              "Imagem: um muro alto, todo coberto por um grafite colorido de um rosto de mulher indígena, em uma rua movimentada; algumas pessoas param para tirar fotos.",
              "Em várias capitais brasileiras, prefeituras e coletivos de artistas transformaram muros cinzentos em painéis de grafite, que hoje atraem turistas. Para uns, a arte de rua valoriza o bairro e dá voz à periferia. Para outros, a fronteira entre grafite e pichação é difícil de definir, e o espaço público deveria ser decidido pelos moradores.",
            ),
          },
        ],
        points: [
          "Descreva a imagem e explique o tema do texto",
          "Diga o que você pensa da arte de rua",
          "Fale de exemplos que você conhece",
        ],
        examinerQuestions: [
          "O que você vê na imagem? Do que fala o texto?",
          "Você gosta desse tipo de arte? Por quê?",
          "Na sua opinião, qual é a diferença entre grafite e pichação?",
          "Quem deveria decidir o que é pintado nos muros de uma cidade?",
          "Na sua cidade existe arte de rua? Como as pessoas reagem a ela?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– O que você vê na imagem? Do que fala o texto?",
          "– Na imagem há um muro enorme com o rosto de uma mulher indígena pintado em cores muito vivas, e as pessoas param para fotografar. O texto explica que em várias capitais os muros cinzentos viraram painéis de grafite, mas que nem todo mundo concorda com isso.",
          "– Você gosta desse tipo de arte?",
          "– Gosto muito. Acho que um painel como esse muda a relação das pessoas com a rua: um lugar por onde todo mundo só passava vira um lugar para olhar, conversar. E muitas vezes os artistas são jovens da periferia, que não teriam espaço numa galeria tradicional.",
          "– Quem deveria decidir o que é pintado nos muros?",
          "– Essa é a parte mais complicada. Eu acho que os moradores precisam ser ouvidos, porque são eles que convivem com a obra todos os dias. Já a pichação, para mim, é diferente: é uma assinatura feita sem autorização, normalmente sem preocupação estética. Na minha cidade, por exemplo, há um festival de grafite todo verão, e os donos dos prédios se inscrevem para oferecer as paredes.",
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
            title: "Família de quatro patas",
            body: paras(
              "Imagem: um homem passeia com três cachorros na calçada, em frente a um prédio de apartamentos.",
              "O Brasil está entre os países com mais animais de estimação no mundo, e em muitas cidades já há mais cães e gatos do que crianças nos lares. O mercado acompanha a tendência: crescem as creches para cachorros, os planos de saúde veterinários e os condomínios com espaço para animais. Ao mesmo tempo, aumentam as reclamações de vizinhos sobre latidos e sujeira.",
            ),
          },
        ],
        points: [
          "Explique o que o material mostra",
          "Diga por que você acha que isso acontece",
          "Fale das regras para animais em apartamentos",
        ],
        examinerQuestions: [
          "Do que trata esse material?",
          "Por que você acha que tantas famílias preferem ter animais em vez de filhos?",
          "Você tem ou já teve algum animal de estimação?",
          "Animais grandes deveriam ser permitidos em apartamentos?",
          "Como são tratados os animais de estimação no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– Do que trata esse material?",
          "– Fala do número crescente de animais de estimação no Brasil, que em muitas casas já são mais numerosos do que as crianças. O texto mostra que isso criou um mercado inteiro, de creche a plano de saúde para cachorro, mas também conflitos entre vizinhos.",
          "– Por que você acha que tantas famílias preferem ter animais?",
          "– Acho que há vários motivos. As pessoas estão tendo filhos mais tarde, ou não querem ter, e muitas moram sozinhas. Um cachorro faz companhia e dá menos trabalho e menos despesa do que uma criança, embora hoje em dia não seja barato. Eu mesmo tenho uma gata, e ela faz parte da família.",
          "– Animais grandes deveriam ser permitidos em apartamentos?",
          "– Eu acho que o problema não é o tamanho, e sim o cuidado do dono. Um cachorro grande que passeia duas vezes por dia pode ser mais tranquilo do que um pequeno que fica sozinho o dia inteiro latindo. O ideal seria o condomínio ter regras claras sobre barulho e limpeza, em vez de proibir.",
        ),
      },
    },
  ],
};
