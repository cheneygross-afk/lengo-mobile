// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-2-coletiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { AUDIO_NOTE, VIDEO_NOTE, paras } from "./text";

// Celpe-Bras practice exam 2 (health and wellbeing) -- Parte Coletiva.
// 3 hours, 4 integrated tasks, as in the real exam: Tarefa 1 from a video
// (here its soundtrack), Tarefa 2 from a radio recording, Tarefas 3 and 4
// from reading texts. Every enunciado names the genre, the writer's role,
// the reader and the purpose; each task is marked holistically.
export const CELPE_BRAS_2_COLETIVA: ExamPaper = {
  id: "coletiva",
  kind: "writing",
  title: "Parte Coletiva",
  minutes: 180,
  group: 1,
  tasks: [
    {
      title: "Tarefa 1",
      instructions:
        "Você vai assistir duas vezes a uma reportagem sobre uma escola de Curitiba que mudou o horário de entrada dos alunos do ensino médio. Seu filho estuda em uma escola onde as aulas começam às sete horas da manhã, e ele vive cansado. Como membro da associação de pais e mestres, escreva uma carta à diretora da escola propondo que a mudança de horário seja discutida, apresentando os argumentos da reportagem e mostrando que você levou em conta as dificuldades que a mudança pode trazer.",
      instructionsEn: VIDEO_NOTE,
      audio: [
        {
          label: "Vídeo: reportagem sobre o sono dos adolescentes",
          plays: 2,
          lines: [
            {
              voice: "f",
              text: "Sete da manhã. Para muitos adolescentes brasileiros, é a hora em que a aula começa, e também a hora em que o corpo ainda pede cama. Em uma escola estadual de Curitiba, a direção decidiu fazer um teste: no ano passado, a entrada do ensino médio passou das sete para as oito horas.",
            },
            {
              voice: "m",
              text: "No começo, muitos pais ficaram preocupados com o próprio horário de trabalho. Mas os resultados apareceram rápido. As faltas no primeiro horário caíram quase pela metade, e os professores dizem que os alunos estão mais atentos e participam mais das aulas.",
            },
            {
              voice: "f",
              text: "Quem fala é o diretor, o professor Sérgio Antunes. Segundo os especialistas, a explicação está na biologia. O neurologista Ricardo Fontes estuda o sono na adolescência.",
            },
            {
              voice: "m",
              text: "Não é preguiça. Na adolescência, o relógio interno muda, e o corpo só começa a sentir sono por volta das onze horas, meia-noite. Só que um adolescente precisa de oito a dez horas de sono por noite. Se ele tem que acordar às seis para chegar à escola, a conta não fecha. A falta de sono afeta a memória, o humor e aumenta até o risco de acidentes.",
            },
            {
              voice: "f",
              text: "O especialista lembra que mudar o horário da escola não resolve tudo. O uso do celular e do computador à noite também atrasa o sono.",
            },
            {
              voice: "m",
              text: "A luz da tela engana o cérebro. O ideal é desligar os aparelhos pelo menos uma hora antes de deitar e manter o mesmo horário todos os dias, inclusive no fim de semana.",
            },
            {
              voice: "f",
              text: "A mudança exigiu ajustes: o horário do transporte escolar foi alterado, e as aulas agora terminam mais tarde. Mesmo assim, numa consulta feita no fim do ano, oito em cada dez famílias votaram para manter o novo horário.",
            },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você assistiu a uma reportagem sobre uma escola de Curitiba que atrasou em uma hora a entrada dos alunos do ensino médio. Seu filho estuda em uma escola onde as aulas começam às sete horas, e ele vive cansado. Como membro da associação de pais e mestres, escreva uma carta à diretora da escola propondo que a mudança de horário seja discutida, apresentando os argumentos da reportagem e mostrando que você levou em conta as dificuldades que a mudança pode trazer.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a formal letter from a parent on the parents' association to the head teacher, proposing a discussion rather than demanding a change",
            "Uses the report: the Curitiba results (absences nearly halved, more attentive pupils, eight in ten families for the new time) and the neurologist's explanation (later body clock, eight to ten hours of sleep)",
            "Acknowledges the difficulties the report mentions (school transport, lessons ending later, parents' working hours) and suggests a way forward",
            "\"Adequação discursiva\": a formal greeting, who is writing and why, the arguments, the difficulties, a concrete suggestion and a polite close",
            "\"Adequação linguística\": a formal register (\"Prezada Diretora\", \"a senhora\"), the subjunctive after \"propor que\" / \"sugiro que\", cause and consequence connectors (\"portanto\", \"por isso\", \"já que\")",
          ],
          modelAnswer: paras(
            "Prezada Diretora Cláudia Ribeiro,",
            "Escrevo como mãe de um aluno do segundo ano do ensino médio e membro da Associação de Pais e Mestres para propor que a escola discuta a possibilidade de atrasar a entrada das turmas do ensino médio, que hoje começam às sete horas.",
            "Recentemente, uma reportagem mostrou a experiência de uma escola estadual de Curitiba que passou a começar as aulas às oito. Segundo o diretor, as faltas no primeiro horário caíram quase pela metade, e os professores perceberam alunos mais atentos e participativos. De acordo com o neurologista entrevistado, há uma explicação biológica: na adolescência, o sono chega mais tarde, e os jovens precisam de oito a dez horas por noite. Quem acorda às seis, portanto, dorme pouco, o que prejudica a memória e o humor. Vejo isso todos os dias em casa.",
            "Sei que a mudança não é simples: seria preciso rever o transporte escolar, e as aulas terminariam mais tarde, o que afeta a rotina de muitas famílias. Por isso, sugiro que o tema seja apresentado na próxima reunião de pais e que as famílias sejam consultadas, como aconteceu em Curitiba, onde oito em cada dez votaram para manter o novo horário.",
            "Agradeço a atenção e me coloco à disposição para ajudar a organizar essa consulta.",
            "Atenciosamente,\nPatrícia Nogueira",
          ),
        },
      ],
    },
    {
      title: "Tarefa 2",
      instructions:
        "Você vai ouvir duas vezes uma entrevista de rádio com uma nutricionista sobre os alimentos ultraprocessados. Você trabalha no setor de recursos humanos de uma empresa que decidiu mudar a alimentação oferecida aos funcionários: as máquinas de refrigerante e salgadinhos vão ser retiradas. Escreva um texto para o boletim interno da empresa, dirigido aos funcionários, explicando, com base na entrevista, o que são alimentos ultraprocessados e por que convém evitá-los, e apresentando as mudanças que a empresa vai fazer.",
      instructionsEn: AUDIO_NOTE,
      audio: [
        {
          label: "Áudio: entrevista com uma nutricionista",
          plays: 2,
          lines: [
            {
              voice: "m",
              text: "Você sabe o que está comendo? No programa de hoje, a gente conversa com a nutricionista Camila Duarte sobre os alimentos ultraprocessados. Camila, para começar: o que é um alimento ultraprocessado?",
            },
            {
              voice: "f",
              text: "São produtos feitos pela indústria a partir de muitos ingredientes, vários deles que a gente não usa na cozinha de casa: corantes, aromatizantes, adoçantes, conservantes. Refrigerante, biscoito recheado, salgadinho de pacote, macarrão instantâneo, nugget. Uma dica simples: se a lista de ingredientes é longa e tem nomes que você não reconhece, provavelmente é um ultraprocessado.",
            },
            { voice: "m", text: "E por que eles fazem mal?" },
            {
              voice: "f",
              text: "Eles costumam ter muito açúcar, sal e gordura, e pouca fibra. São feitos para a gente comer muito e rápido, sem perceber que já está satisfeito. Os estudos associam o consumo frequente à obesidade, ao diabetes e às doenças do coração. E, no Brasil, o consumo desses produtos vem crescendo, principalmente entre crianças e adolescentes.",
            },
            { voice: "m", text: "Mas é difícil fugir deles, não é? A vida é corrida." },
            {
              voice: "f",
              text: "É, e eu não gosto de discurso de culpa. O Guia Alimentar para a População Brasileira, do Ministério da Saúde, tem uma regra de ouro que eu acho muito sensata: dar preferência a alimentos naturais ou pouco processados e à comida feita na hora, e deixar os ultraprocessados para as exceções. O nosso arroz com feijão, com uma salada e uma carne ou um ovo, é uma refeição excelente.",
            },
            { voice: "m", text: "E no trabalho, onde muita gente almoça e belisca o dia inteiro?" },
            {
              voice: "f",
              text: "Aí as empresas podem ajudar muito. Oferecer frutas na copa no lugar do biscoito, ter água à vontade, um refeitório com comida caseira, e dar tempo para as pessoas almoçarem sem pressa. Comer na frente do computador faz a pessoa comer mais e pior.",
            },
            { voice: "m", text: "Camila Duarte, muito obrigado." },
            { voice: "f", text: "Obrigada a vocês." },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você ouviu uma entrevista de rádio com uma nutricionista sobre os alimentos ultraprocessados. Você trabalha no setor de recursos humanos de uma empresa que vai retirar as máquinas de refrigerante e salgadinhos. Escreva um texto para o boletim interno da empresa, dirigido aos funcionários, explicando, com base na entrevista, o que são alimentos ultraprocessados e por que convém evitá-los, e apresentando as mudanças que a empresa vai fazer.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": an article for the staff newsletter, from the HR team to all employees, that informs and wins them over to a change they may not like",
            "Uses the interview: what ultra-processed foods are (examples, the long ingredient list), why they do harm, and the golden rule of the \"Guia Alimentar\"",
            "Presents the company's changes clearly (fruit, water, home-style food, a proper lunch break), linked to the nutritionist's advice",
            "\"Adequação discursiva\": a title, an opening that explains the reason, the information, the changes, a friendly close and who it's from",
            "\"Adequação linguística\": a neutral, friendly register (\"a gente\" is fine, no slang), the future (\"vai oferecer\"), explanation connectors (\"ou seja\", \"por isso\", \"segundo\")",
          ],
          modelAnswer: paras(
            "Comida de verdade no trabalho",
            "A partir do mês que vem, as máquinas de refrigerante e salgadinhos do segundo andar vão ser retiradas. Antes que alguém sinta falta delas, queremos explicar o motivo.",
            "Refrigerantes, biscoitos recheados, salgadinhos de pacote e macarrão instantâneo são alimentos ultraprocessados, ou seja, produtos industriais feitos com muitos ingredientes que não usamos em casa, como corantes, aromatizantes e conservantes. Segundo a nutricionista Camila Duarte, em uma entrevista recente ao rádio, eles costumam ter muito açúcar, sal e gordura, e são feitos para que a gente coma muito e rápido. O consumo frequente está associado à obesidade, ao diabetes e a doenças do coração.",
            "Não se trata de proibir ninguém de comer o que gosta. Seguindo a regra de ouro do Guia Alimentar para a População Brasileira, a ideia é dar preferência a alimentos naturais e à comida feita na hora. Por isso, a empresa vai:\n- oferecer frutas todos os dias na copa;\n- instalar bebedouros em todos os andares;\n- incluir mais pratos caseiros no cardápio do refeitório.",
            "Também queremos lembrar que o horário de almoço é para almoçar: comer na frente do computador faz a gente comer mais e pior. Bom apetite!",
            "Equipe de Recursos Humanos",
          ),
        },
      ],
    },
    {
      title: "Tarefa 3",
      instructions:
        "Leia o texto abaixo, publicado no site de um projeto social de Salvador. Você mora na cidade e se interessou pelo projeto. Escreva um e-mail para a coordenadora do projeto candidatando-se a uma vaga de voluntário, apresentando-se, explicando sua motivação e a atividade que gostaria de realizar, e mostrando que você atende aos requisitos.",
      texts: [
        {
          title: "Sorriso no Leito procura voluntários",
          body: paras(
            "Há doze anos, o projeto Sorriso no Leito leva histórias, música e brincadeiras às crianças internadas em três hospitais públicos de Salvador. Os voluntários não substituem médicos nem enfermeiros, mas ajudam a tornar a internação menos assustadora. “Uma criança que ri come melhor, aceita melhor o tratamento e dorme melhor”, afirma a pediatra Ana Beatriz Lemos, uma das fundadoras.",
            "Para o segundo semestre, o projeto abre trinta vagas para contadores de histórias, músicos e pessoas que queiram organizar oficinas de desenho e artesanato. Não é preciso ter experiência artística, mas é indispensável gostar de crianças e ter paciência.",
            "Os requisitos são: ter mais de dezoito anos; dispor de pelo menos quatro horas por semana, durante no mínimo seis meses; participar de um curso de formação de vinte horas, aos sábados, sobre o ambiente hospitalar e os cuidados de higiene; e apresentar a carteira de vacinação em dia.",
            "Os interessados devem enviar um e-mail à coordenadora, Vanessa Carvalho, contando quem são, por que querem participar, que atividade gostariam de realizar e em quais dias e horários estão disponíveis. Estrangeiros que falem português são bem-vindos: muitas das famílias atendidas vêm do interior do estado, e conhecer outras culturas faz parte da diversão.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você leu um anúncio do projeto Sorriso no Leito, que leva histórias, música e oficinas a crianças internadas em hospitais públicos de Salvador e procura voluntários. Você mora em Salvador. Escreva um e-mail para a coordenadora do projeto, Vanessa Carvalho, candidatando-se a uma vaga de voluntário, apresentando-se, explicando sua motivação e a atividade que gostaria de realizar, e mostrando que você atende aos requisitos.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": an application e-mail to the coordinator, from someone living in Salvador, meant to convince her to choose you",
            "Answers everything the advert asks for: who you are, why you want to take part, which activity, which days and times",
            "Shows, point by point, that you meet the requirements in the advert (over 18, four hours a week for six months, the Saturday training course, vaccinations up to date)",
            "\"Adequação discursiva\": a subject line, a formal greeting, a clear structure (presentation, motivation, activity, requirements and availability) and a formal close",
            "\"Adequação linguística\": a polite register (\"gostaria de\", \"poderia\"), the past for experience (\"fui voluntária durante três anos\"), accurate vocabulary (\"candidatura\", \"disponibilidade\", \"requisitos\")",
          ],
          modelAnswer: paras(
            "Assunto: Candidatura ao voluntariado: contação de histórias",
            "Prezada Vanessa Carvalho,",
            "Meu nome é Emma Clarke, tenho vinte e nove anos e sou inglesa. Moro em Salvador há um ano e meio e trabalho como professora em uma escola de idiomas. Li o anúncio do projeto Sorriso no Leito e gostaria de me candidatar a uma das vagas de voluntário.",
            "No meu país, fui voluntária durante três anos em uma biblioteca infantil, onde lia histórias para crianças aos sábados. Foi uma das experiências mais bonitas da minha vida, e por isso a contação de histórias é a atividade que eu gostaria de realizar no projeto. Também poderia contar histórias tradicionais da Inglaterra, o que talvez desperte nas crianças a curiosidade por outras culturas.",
            "Atendo a todos os requisitos: tenho mais de dezoito anos, minha carteira de vacinação está em dia e posso me comprometer por, no mínimo, seis meses. Tenho disponibilidade às terças e quintas-feiras, das 14h às 18h, e posso participar do curso de formação aos sábados.",
            "Fico à disposição para uma entrevista e agradeço desde já a atenção.",
            "Atenciosamente,\nEmma Clarke",
          ),
        },
      ],
    },
    {
      title: "Tarefa 4",
      instructions:
        "Leia o texto e a carta abaixo, publicados na seção Família de uma revista. Você é colunista da seção e vai responder à carta da leitora. Escreva a resposta que será publicada na revista, orientando a leitora com base nas informações do texto.",
      texts: [
        {
          title: "Quanto tempo de tela é demais?",
          body: paras(
            "Tablets e celulares chegaram cedo à vida das crianças brasileiras. Em muitas casas, eles ajudam os pais a manter os filhos quietos durante o jantar ou em uma viagem. Os especialistas, porém, alertam que o excesso tem um preço.",
            "A Sociedade Brasileira de Pediatria recomenda evitar as telas antes dos dois anos de idade, limitar o uso a uma hora por dia entre os dois e os cinco anos e a no máximo duas horas por dia entre os seis e os dez anos, sempre com a supervisão de um adulto. Segundo os pediatras, o uso exagerado está ligado a problemas de sono, atraso na fala, dificuldade de concentração e sedentarismo.",
            "Proibir de repente, no entanto, costuma gerar brigas. A psicóloga infantil Lúcia Matos sugere combinar regras claras com a criança, como horários fixos para as telas, e nunca usar o aparelho como prêmio ou castigo. “O mais importante é oferecer alternativas interessantes: brincar ao ar livre, desenhar, cozinhar juntos”, diz.",
            "Ela lembra também que o exemplo vem de casa. “Não adianta pedir que a criança largue o tablet se os pais passam o jantar olhando o celular.” Outra recomendação é desligar todas as telas pelo menos uma hora antes de dormir e não deixar aparelhos no quarto da criança.",
          ),
        },
        {
          title: "Carta da leitora",
          body: "Meu filho Theo tem seis anos e, desde que ganhou um tablet no aniversário, só quer saber de vídeos e joguinhos. Quando eu tiro o aparelho, ele chora e grita. Eu e meu marido trabalhamos o dia todo e, sinceramente, às vezes o tablet é a única forma de termos um pouco de sossego. Estou errada? O que posso fazer?\n\nJuliana, Goiânia",
        },
      ],
      write: [
        {
          prompt:
            "Você é colunista da seção Família de uma revista. Uma leitora, Juliana, escreveu contando que o filho de seis anos só quer saber do tablet, chora quando ela tira o aparelho, e que ela e o marido trabalham o dia todo e às vezes usam o tablet para ter sossego. Ela pergunta se está errada e o que pode fazer. Escreva a resposta que será publicada na revista, orientando a leitora com base nas informações de um texto sobre o tempo de tela das crianças.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": an advice-column reply addressed to Juliana and published for all readers: warm, never judgemental, but clear",
            "Answers both of her questions (is she wrong? what can she do?) with the text's information: the paediatricians' limit for a six-year-old (two hours a day, supervised) and the effects of too much screen time",
            "Turns the psychologist's advice into concrete steps for Theo (agreed rules and fixed times, no tablet as reward or punishment, alternatives, the parents' example, no screens before bed)",
            "\"Adequação discursiva\": a greeting to the reader, empathy first, the information, the advice in a clear order, an encouraging close and the columnist's signature",
            "\"Adequação linguística\": advice forms (\"experimente\", \"evite\", \"vale a pena\", \"o ideal é\"), \"se\" clauses, the subjunctive after \"recomendar que\", consistent \"você\"",
          ],
          modelAnswer: paras(
            "Querida Juliana,",
            "Em primeiro lugar, você não está sozinha: muitos pais que trabalham o dia inteiro usam o tablet para ter um pouco de sossego, e não há motivo para culpa. Mas a sua preocupação faz sentido.",
            "A Sociedade Brasileira de Pediatria recomenda que crianças da idade do Theo, entre seis e dez anos, fiquem no máximo duas horas por dia diante das telas, sempre com a supervisão de um adulto. Em excesso, os aparelhos podem atrapalhar o sono e a concentração e deixar a criança mais parada.",
            "Em vez de tirar o tablet de repente, o que costuma terminar em choro, experimente combinar regras com ele: por exemplo, vídeos só depois do jantar, durante uma hora, com um alarme avisando o fim. Evite usar o aparelho como prêmio ou castigo e ofereça alternativas que o atraiam, como desenhar, brincar no parque ou preparar uma receita juntos no fim de semana.",
            "Também vale olhar para o exemplo que damos em casa: se você e seu marido deixarem o celular de lado no jantar, vai ficar mais fácil para o Theo fazer o mesmo. E nada de telas na hora de dormir: desliguem tudo uma hora antes.",
            "Com paciência, a nova rotina vira hábito. Boa sorte!",
            "Ana Paula, colunista da seção Família",
          ),
        },
      ],
    },
  ],
};
