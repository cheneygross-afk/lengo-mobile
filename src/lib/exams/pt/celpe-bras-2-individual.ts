// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-2-individual.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { ELEMENT_INSTRUCTIONS, ELEMENT_NOTE, INTERVIEW_INSTRUCTIONS, INTERVIEW_NOTE, paras } from "./text";

// Celpe-Bras practice exam 2 (health and wellbeing) -- Parte Individual.
// About 20 minutes, as in the real exam: five minutes of conversation
// about the candidate, then three "elementos provocadores" (a photo with
// a short text), about five minutes each including a minute to read. The
// examiner's questions stand in for the real examiner's roteiro.
export const CELPE_BRAS_2_INDIVIDUAL: ExamPaper = {
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
          "Sua formação e o seu trabalho",
          "Como você cuida da saúde e o que faz para relaxar",
          "Sua experiência com a língua portuguesa",
          "O que você pretende fazer com o certificado",
        ],
        examinerQuestions: [
          "Você poderia me contar um pouco sobre a sua formação?",
          "No questionário, você disse que corre todos os dias. Desde quando você faz isso?",
          "Como é a sua rotina hoje?",
          "O que é mais difícil para você no português?",
          "Para que você vai usar o certificado do Celpe-Bras?",
        ],
        prepMinutes: 0,
        speakMinutes: 5,
        modelAnswer: paras(
          "– Você poderia me contar um pouco sobre a sua formação?",
          "– Claro. Eu me formei em enfermagem na Nigéria e trabalhei seis anos em um hospital em Lagos, no setor de emergência. Há dois anos me mudei para o Brasil com o meu marido, que é brasileiro.",
          "– No questionário, você disse que corre todos os dias. Desde quando você faz isso?",
          "– Desde a faculdade, mais ou menos. Trabalhando em emergência, a gente vive estressada, e correr foi a forma que eu encontrei de desligar a cabeça. Aqui em Recife eu corro de manhã cedinho na beira-mar, antes de o sol ficar forte demais.",
          "– Para que você vai usar o certificado do Celpe-Bras?",
          "– Eu quero revalidar o meu diploma e voltar a trabalhar como enfermeira. Para isso preciso comprovar que tenho um bom nível de português. E, sinceramente, no hospital é fundamental entender bem o paciente: muitas vezes ele descreve a dor com expressões populares, e eu preciso saber o que significam.",
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
            title: "Ginástica na praça",
            body: paras(
              "Imagem: idosos fazem exercícios em aparelhos de ginástica coloridos instalados em uma praça arborizada, de manhã.",
              "Nos últimos anos, muitas prefeituras brasileiras instalaram academias ao ar livre em praças e parques. Os aparelhos são gratuitos e fáceis de usar, e atraem principalmente pessoas mais velhas, que encontram ali exercício e companhia. Em alguns bairros, porém, os equipamentos estão quebrados por falta de manutenção, e quase ninguém sabe usá-los sem orientação de um profissional.",
            ),
          },
        ],
        points: [
          "Diga do que trata o material",
          "Comente as vantagens e os problemas dessas academias",
          "Fale da prática de exercícios no seu país",
        ],
        examinerQuestions: [
          "O que mostra a imagem? Do que fala o texto?",
          "Por que você acha que essas academias atraem tantas pessoas mais velhas?",
          "Quem deveria cuidar desses equipamentos?",
          "É importante ter um professor para orientar quem usa os aparelhos?",
          "No seu país, as pessoas costumam fazer exercício ao ar livre?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– O que mostra a imagem? Do que fala o texto?",
          "– A imagem mostra idosos se exercitando em aparelhos coloridos numa praça. O texto explica que essas academias ao ar livre se espalharam pelas cidades brasileiras, porque são gratuitas, mas que muitas estão abandonadas.",
          "– Por que você acha que elas atraem tantas pessoas mais velhas?",
          "– Acho que não é só pelo exercício. Para quem está aposentado, ir à praça de manhã é um motivo para sair de casa e encontrar gente. A solidão é um problema sério de saúde na terceira idade, então esse lado social me parece tão importante quanto a ginástica.",
          "– Quem deveria cuidar desses equipamentos?",
          "– A prefeitura, claro, porque instalar e depois abandonar é desperdício de dinheiro público. Mas eu também acho que seria importante ter um educador físico em alguns horários, porque um movimento errado pode machucar. No meu país quase não existe isso; as pessoas correm nos parques, mas as academias são todas pagas.",
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
            title: "Remédio sem receita",
            body: paras(
              "Imagem: o balcão de uma farmácia, com prateleiras cheias de caixas de remédios; um cliente conversa com o balconista.",
              "Dor de cabeça, gripe, dor nas costas: muitos brasileiros resolvem o problema com um remédio comprado sem receita, às vezes por indicação de um parente ou de um vídeo na internet. Com uma farmácia em quase cada esquina, é fácil. Médicos alertam, no entanto, que a automedicação pode esconder doenças, provocar intoxicações e tornar alguns medicamentos menos eficazes.",
            ),
          },
        ],
        points: [
          "Explique o tema do material",
          "Diga por que as pessoas se automedicam",
          "Dê a sua opinião sobre os riscos",
        ],
        examinerQuestions: [
          "Do que trata esse material?",
          "Por que tantas pessoas tomam remédio sem ir ao médico?",
          "Você já tomou algum remédio por conta própria?",
          "Os vídeos de saúde na internet ajudam ou atrapalham?",
          "Como funciona a venda de remédios no seu país?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– Do que trata esse material?",
          "– Da automedicação, quer dizer, do costume de tomar remédio sem orientação médica. O texto diz que no Brasil isso é muito comum, porque as farmácias estão em todo lugar, mas que pode ser perigoso.",
          "– Por que tantas pessoas tomam remédio sem ir ao médico?",
          "– Primeiro, por falta de tempo: marcar uma consulta pode demorar semanas. Depois, porque a gente acha que conhece o próprio corpo. Eu mesma, quando tenho dor de cabeça, tomo um analgésico sem pensar duas vezes. O problema é quando a dor volta sempre e a pessoa continua tomando o remédio, porque pode estar escondendo uma doença mais séria.",
          "– Os vídeos de saúde na internet ajudam ou atrapalham?",
          "– Depende muito de quem fala. Há médicos que explicam coisas importantes de um jeito simples. Mas há muita gente vendendo soluções milagrosas. Como enfermeira, eu já vi pacientes chegando ao hospital intoxicados por causa de uma receita da internet.",
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
            title: "Respire fundo: você está no trabalho",
            body: paras(
              "Imagem: funcionários de um escritório sentados em almofadas, de olhos fechados, durante uma sessão de meditação.",
              "Preocupadas com o aumento dos casos de esgotamento profissional, a chamada síndrome de burnout, empresas brasileiras passaram a oferecer aulas de meditação, ioga e salas de descanso durante o expediente. Os funcionários costumam aprovar a iniciativa. Críticos, porém, afirmam que meditar dez minutos não resolve o problema quando a carga de trabalho continua excessiva.",
            ),
          },
        ],
        points: [
          "Diga do que trata o material",
          "Comente as iniciativas das empresas e as críticas",
          "Fale de como se pode evitar o esgotamento",
        ],
        examinerQuestions: [
          "Do que fala esse material?",
          "Na sua opinião, por que o burnout está aumentando?",
          "Você participaria de uma aula de meditação no trabalho?",
          "Você concorda com os críticos?",
          "O que uma empresa deveria fazer para proteger a saúde dos funcionários?",
        ],
        prepMinutes: 1,
        speakMinutes: 4,
        modelAnswer: paras(
          "– Do que fala esse material?",
          "– Fala das empresas que oferecem meditação e ioga durante o expediente para combater o burnout, o esgotamento causado pelo trabalho. Mas o texto também traz a crítica de que isso pode ser só uma solução superficial.",
          "– Você concorda com os críticos?",
          "– Em boa parte, sim. Acho ótimo que uma empresa ofereça meditação, eu mesma participaria. Mas, se a pessoa medita dez minutos e depois volta para uma jornada de doze horas, com metas impossíveis e mensagens do chefe à meia-noite, nada muda. Seria como tratar a febre sem tratar a infecção.",
          "– O que uma empresa deveria fazer, então?",
          "– Começar pelo básico: equipes do tamanho certo, respeito ao horário de descanso, um chefe que perceba quando alguém não está bem. Na área da saúde, onde eu trabalho, o burnout é muito comum, e o que mais ajuda é poder conversar com alguém e ter folgas de verdade.",
        ),
      },
    },
  ],
};
