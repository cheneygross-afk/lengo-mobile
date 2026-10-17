// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-4-individual.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { ELEMENT_INSTRUCTIONS, ELEMENT_NOTE, INTERVIEW_INSTRUCTIONS, INTERVIEW_NOTE, paras } from "./text";

// Celpe-Bras practice exam 4 (work, education and culture) -- Parte
// Individual. About 20 minutes, as in the real exam: five minutes of
// conversation about the candidate, then three "elementos provocadores"
// (a photo with a short text), about five minutes each, read in silence
// first. The examiner's questions stand in for the real examiner's roteiro.
export const CELPE_BRAS_4_INDIVIDUAL: ExamPaper = {
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
          "Quem você é e o que estuda ou faz",
          "Do que você gosta: música, leitura, esporte",
          "Por que você escolheu o Brasil",
          "O que espera dos próximos anos",
        ],
        examinerQuestions: [
          "Para começar, fale um pouco sobre você.",
          "Você escreveu no questionário que toca violão. Que tipo de música você toca?",
          "Por que você quer estudar no Brasil?",
          "Que curso você pretende fazer?",
          "Como você imagina a sua vida daqui a cinco anos?",
        ],
        prepMinutes: 0,
        speakMinutes: 5,
        modelAnswer: paras(
          "– Para começar, fale um pouco sobre você.",
          "– Eu me chamo Amara Diallo, tenho dezenove anos e sou do Senegal, de Dacar. Terminei o ensino médio no ano passado e agora estou me preparando para fazer a graduação no Brasil, pelo programa de estudantes-convênio.",
          "– Você escreveu no questionário que toca violão. Que tipo de música você toca?",
          "– Toco um pouco de tudo, mas comecei a aprender bossa nova há dois anos, com vídeos na internet. Foi assim, aliás, que eu me apaixonei pelo português: queria entender as letras de Tom Jobim e de Vinicius de Moraes. Hoje também escuto muito samba e música popular brasileira.",
          "– Que curso você pretende fazer?",
          "– Quero estudar engenharia agronômica. No meu país, a agricultura é muito importante, mas sofre com a seca, e o Brasil tem muita pesquisa nessa área, principalmente sobre o semiárido nordestino. Depois de formada, gostaria de voltar ao Senegal e trabalhar com pequenos agricultores.",
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
            title: "A sala de aula cabe na tela?",
            body: paras(
              "Imagem: um jovem assiste a uma aula pelo computador, sentado na cama, com fones de ouvido.",
              "Nos últimos anos, o número de estudantes que entram em cursos superiores a distância no Brasil superou o dos que escolhem cursos presenciais. Os cursos on-line costumam ser mais baratos e permitem estudar de qualquer lugar, o que ajuda quem trabalha ou mora longe das universidades. Professores, porém, se preocupam com a evasão e com a falta de contato entre os alunos.",
            ),
          },
        ],
        points: [
          "Diga do que trata o material",
          "Compare o ensino a distância e o presencial",
          "Fale da sua experiência e do seu país",
        ],
        examinerQuestions: [
          "O que mostra a imagem e o que diz o texto?",
          "Quais são as vantagens do ensino a distância?",
          "Por que você acha que muitos alunos abandonam esses cursos?",
          "Você já fez algum curso on-line? Como foi?",
          "Você faria a sua graduação inteira a distância?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– O que mostra a imagem e o que diz o texto?",
          "– A imagem mostra um rapaz assistindo a uma aula pelo computador, na cama. O texto diz que hoje, no Brasil, mais estudantes entram em cursos superiores a distância do que em cursos presenciais, mas que há preocupações com o abandono.",
          "– Por que você acha que muitos alunos abandonam esses cursos?",
          "– Acho que estudar sozinho exige muita disciplina. Em casa, a cama está ali, o celular está ali, e ninguém percebe se você parou de assistir. Na sala de aula, você tem o professor, os colegas, e quando alguém falta, os outros perguntam o que aconteceu. Esse contato faz falta.",
          "– Você faria a sua graduação inteira a distância?",
          "– Para mim, não. Eu aprendi português em grande parte pela internet, então sei que funciona. Mas a universidade é mais do que as aulas: é o laboratório, o grupo de estudo, a amizade. Por outro lado, entendo perfeitamente quem trabalha o dia inteiro ou mora numa cidade pequena do interior, sem faculdade perto. Para essas pessoas, o curso a distância pode ser a única oportunidade.",
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
            title: "Nunca é tarde para aprender",
            body: paras(
              "Imagem: uma senhora de cabelos brancos, com mochila nas costas, conversa com colegas jovens na entrada de uma universidade.",
              "Programas de universidades abertas à terceira idade oferecem cursos de informática, línguas, história e artes para pessoas com mais de sessenta anos. Os participantes contam que voltar a estudar dá mais autonomia, amplia o círculo de amigos e ajuda a manter a memória ativa. Com o envelhecimento da população brasileira, a procura por esses cursos tende a crescer.",
            ),
          },
        ],
        points: [
          "Explique o tema do material",
          "Diga por que as pessoas mais velhas voltam a estudar",
          "Comente a convivência entre gerações",
        ],
        examinerQuestions: [
          "Do que trata esse material?",
          "Por que você acha que tantos idosos querem voltar a estudar?",
          "É bom que jovens e idosos estudem juntos?",
          "Você conhece alguém que voltou a estudar depois de mais velho?",
          "Como é a vida das pessoas idosas no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– Do que trata esse material?",
          "– Fala dos cursos que as universidades oferecem para pessoas com mais de sessenta anos, de informática, línguas, artes. A foto mostra uma senhora conversando com estudantes jovens, e o texto diz que a procura deve aumentar, porque a população brasileira está envelhecendo.",
          "– Por que você acha que tantos idosos querem voltar a estudar?",
          "– Muitos não puderam estudar quando eram jovens, porque precisavam trabalhar cedo. Então é uma forma de realizar um sonho. E, depois da aposentadoria, a pessoa precisa de um motivo para sair de casa, aprender coisas novas, fazer amigos. Isso faz bem para a memória e para o humor.",
          "– É bom que jovens e idosos estudem juntos?",
          "– Acho ótimo. Os jovens ensinam a mexer no celular, e os mais velhos trazem uma experiência de vida que nenhum livro tem. No Senegal, os idosos são muito respeitados, e as famílias costumam morar juntas, então essa troca entre gerações acontece dentro de casa. Mas voltar à escola aos setenta anos ainda é raro por lá.",
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
            title: "Elas entram em campo",
            body: paras(
              "Imagem: jogadoras de futebol comemoram um gol diante de uma arquibancada lotada.",
              "Proibido por lei no Brasil durante quase quarenta anos, até 1979, o futebol feminino vive um momento de crescimento: os jogos têm mais público, as transmissões se multiplicam e o país vai sediar a Copa do Mundo feminina de 2027. Ainda assim, a diferença de salários e de investimento em relação ao futebol masculino continua enorme.",
            ),
          },
        ],
        points: [
          "Diga do que trata o material",
          "Comente a história e a situação atual do futebol feminino",
          "Dê a sua opinião sobre a diferença em relação ao futebol masculino",
        ],
        examinerQuestions: [
          "O que mostra a imagem? O que diz o texto?",
          "O que você achou da informação de que o futebol feminino foi proibido?",
          "Por que você acha que ainda há tanta diferença de salários?",
          "A Copa do Mundo de 2027 pode mudar essa situação?",
          "Como é o futebol feminino no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– O que mostra a imagem? O que diz o texto?",
          "– A imagem mostra jogadoras comemorando um gol com o estádio cheio. O texto conta que o futebol feminino foi proibido no Brasil até 1979 e que hoje está crescendo, com mais público e mais transmissões, mas que as jogadoras ainda ganham muito menos do que os homens.",
          "– O que você achou da informação de que ele foi proibido?",
          "– Fiquei muito surpresa. É difícil imaginar que, no país do futebol, as mulheres não podiam jogar. Isso explica, em parte, por que o futebol feminino começou tão atrasado: foram quarenta anos sem clubes, sem campeonatos, sem formar jogadoras.",
          "– A Copa do Mundo de 2027 pode mudar essa situação?",
          "– Pode ajudar bastante. Quando uma Copa acontece em casa, as meninas veem as jogadoras na televisão todos os dias e começam a sonhar com isso. Mas não basta um mês de festa: é preciso investir nas categorias de base e nos campeonatos nacionais. No Senegal, a seleção feminina também está crescendo, mas quase não tem apoio.",
        ),
      },
    },
  ],
};
