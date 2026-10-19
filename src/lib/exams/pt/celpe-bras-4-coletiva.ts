// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-4-coletiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { AUDIO_NOTE, VIDEO_NOTE, paras } from "./text";

// Celpe-Bras practice exam 4 (work, education and culture) -- Parte
// Coletiva. 3 hours, 4 integrated tasks, as in the real exam: Tarefa 1
// from a video (here its soundtrack), Tarefa 2 from a radio recording,
// Tarefas 3 and 4 from reading texts. Every enunciado names the genre, the
// writer's role, the reader and the purpose; each task is marked
// holistically.
export const CELPE_BRAS_4_COLETIVA: ExamPaper = {
  id: "coletiva",
  kind: "writing",
  title: "Parte Coletiva",
  minutes: 180,
  group: 1,
  tasks: [
    {
      title: "Tarefa 1",
      instructions:
        "Você vai assistir duas vezes a uma reportagem sobre jovens que trabalham como entregadores por aplicativo. Você é estudante universitário e colabora com o jornal dos estudantes da sua faculdade. Muitos colegas estão pensando em fazer entregas por aplicativo para pagar os estudos. Escreva um artigo de opinião para o jornal, dirigido aos colegas, discutindo se esse trabalho é uma boa opção para estudantes, com base nas informações da reportagem.",
      instructionsEn: VIDEO_NOTE,
      audio: [
        {
          label: "Vídeo: reportagem sobre entregadores por aplicativo",
          plays: 2,
          lines: [
            {
              voice: "f",
              text: "Mochila térmica nas costas, celular preso no guidão. Em São Paulo, milhares de jovens passam o dia de moto ou de bicicleta entregando comida pedida por aplicativo. Para muitos, é o primeiro trabalho. Para outros, a única saída depois de perder o emprego.",
            },
            {
              voice: "m",
              text: "Eu comecei porque não achava nada com carteira assinada. O lado bom é que eu faço o meu horário: se eu quero folgar na segunda, eu folgo. Mas, para tirar um dinheiro razoável, tenho que rodar doze horas por dia, sete dias por semana. E, se eu cair da moto, ninguém me paga nada enquanto eu estiver parado.",
            },
            {
              voice: "f",
              text: "Wellington Souza tem vinte e quatro anos e faz entregas há três. Ele paga do próprio bolso a gasolina, a manutenção da moto e o plano do celular. Para o economista Rogério Almeida, que pesquisa o mercado de trabalho, o caso dele é típico.",
            },
            {
              voice: "m",
              text: "O aplicativo abriu uma porta de entrada rápida para quem precisava de renda, isso é inegável. O problema é que esses trabalhadores não têm direitos básicos: férias, décimo terceiro, seguro em caso de acidente, contribuição para a aposentadoria. Quando a gente desconta os custos, muitos ganham por hora menos do que ganhariam com carteira assinada.",
            },
            {
              voice: "f",
              text: "As empresas de aplicativo afirmam que oferecem flexibilidade e que boa parte dos entregadores não quer ter vínculo de emprego. Propostas de regulamentação discutidas em Brasília preveem uma remuneração mínima por hora e a contribuição para a previdência.",
            },
            {
              voice: "m",
              text: "Para quem tem dezoito, vinte anos, a entrega pode ser uma boa forma de ganhar o primeiro dinheiro. O risco é passar dez anos nisso sem aprender uma profissão e sem nenhuma proteção.",
            },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você assistiu a uma reportagem sobre jovens que trabalham como entregadores por aplicativo em São Paulo. Você é estudante universitário e colabora com o jornal dos estudantes da sua faculdade. Muitos colegas estão pensando em fazer entregas por aplicativo para pagar os estudos. Escreva um artigo de opinião para o jornal, dirigido aos colegas, discutindo se esse trabalho é uma boa opção para estudantes, com base nas informações da reportagem.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": an opinion piece for the student newspaper, by a student, addressed to fellow students thinking of doing app deliveries",
            "Uses the report on both sides: flexibility and quick income against the costs paid by the rider, twelve-hour days, no paid vacation, no 13th salary, no accident insurance, no pension",
            "Takes a clear, reasoned position and relates it to students' lives (classes, exams, building a career)",
            "\"Adequação discursiva\": a title, an introduction that sets out the question, arguments in paragraphs, a conclusion with your position and your name",
            "\"Adequação linguística\": argument connectors (\"é verdade que … mas\", \"além disso\", \"por isso\", \"na minha opinião\"), rhetorical questions, a neutral, correct register",
          ],
          modelAnswer: paras(
            "Entregar comida para pagar a faculdade: vale a pena?",
            "Nos corredores da faculdade, cada vez mais colegas comentam que estão pensando em se cadastrar num aplicativo de entregas para pagar a mensalidade ou o aluguel. A ideia é tentadora, mas merece ser pensada com calma.",
            "É verdade que o aplicativo oferece algo que poucos empregos oferecem a um estudante: a liberdade de escolher o próprio horário. Quem tem aula de manhã pode trabalhar à noite, e quem tem prova pode tirar folga. Como lembrou um economista numa reportagem recente, é uma porta de entrada rápida para quem precisa de renda.",
            "O problema está no que não aparece na tela do celular. O entregador paga do próprio bolso a gasolina, a manutenção da moto e o plano do celular, e não tem férias, décimo terceiro nem seguro em caso de acidente. Na mesma reportagem, um entregador de vinte e quatro anos contou que precisa rodar doze horas por dia, todos os dias, para ganhar um valor razoável. Como conciliar isso com as aulas e com o estudo?",
            "Por isso, na minha opinião, a entrega pode funcionar como um bico temporário, por algumas horas na semana, mas não como solução. Antes de se cadastrar, vale a pena procurar os estágios e as bolsas da própria universidade, que pagam menos no começo, mas ajudam a construir uma profissão.",
            "Lucas Andrade, estudante de Economia",
          ),
        },
      ],
    },
    {
      title: "Tarefa 2",
      instructions:
        "Você vai ouvir duas vezes uma entrevista do programa de rádio Cultura em Pauta com a fundadora de uma biblioteca comunitária em Salvador. Você é voluntário dessa biblioteca. Escreva um e-mail para o diretor de uma empresa de informática instalada no bairro, apresentando a biblioteca e solicitando o apoio da empresa, com base nas informações da entrevista.",
      instructionsEn: AUDIO_NOTE,
      audio: [
        {
          label: "Áudio: entrevista no programa Cultura em Pauta",
          plays: 2,
          lines: [
            {
              voice: "m",
              text: "No Cultura em Pauta de hoje, a gente vai até o bairro de Cajazeiras, em Salvador, conhecer a Biblioteca Comunitária Palavra Viva. Quem fala com a gente é a fundadora, a professora aposentada Aparecida Santos, a dona Cida. Dona Cida, como começou essa história?",
            },
            {
              voice: "f",
              text: "Começou na minha garagem, há oito anos. Eu tinha uns trezentos livros em casa e via que as crianças da rua não tinham nenhum lugar para ler. A biblioteca pública mais próxima ficava a uma hora de ônibus. Aí eu coloquei uma estante, uma mesa, e abri o portão.",
            },
            { voice: "m", text: "E hoje?" },
            {
              voice: "f",
              text: "Hoje são quase seis mil livros, todos doados, e a gente funciona numa casa alugada. Recebemos umas cento e cinquenta pessoas por semana: crianças depois da escola, adolescentes que vêm fazer trabalho, e adultos também. Temos uma turma de senhoras que estão aprendendo a ler aos sessenta, setenta anos.",
            },
            { voice: "m", text: "Quais são as maiores dificuldades?" },
            {
              voice: "f",
              text: "O dinheiro, sempre. O aluguel e a conta de luz saem de uma vaquinha dos voluntários e de uma feira que a gente faz uma vez por mês. Precisamos muito de livros novos para adolescentes, porque eles já leram tudo o que temos, e de computadores. Muitos jovens fazem a pesquisa da escola pelo celular, com a tela quebrada.",
            },
            { voice: "m", text: "E como as pessoas podem ajudar?" },
            {
              voice: "f",
              text: "Doando livros em bom estado, sendo voluntário para contar histórias ou dar aula de reforço, ou contribuindo com qualquer quantia. E as empresas do bairro podem adotar a biblioteca: uma paga a luz, outra doa um computador. Quando a comunidade abraça, a biblioteca não fecha.",
            },
            { voice: "m", text: "Dona Cida, muito obrigado." },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você ouviu uma entrevista de rádio com a fundadora da Biblioteca Comunitária Palavra Viva, no bairro de Cajazeiras, em Salvador. Você é voluntário dessa biblioteca. Escreva um e-mail para o diretor de uma empresa de informática instalada no bairro, apresentando a biblioteca e solicitando o apoio da empresa, com base nas informações da entrevista.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a formal request e-mail from a volunteer to a local company's director, meant to persuade the company to help",
            "Presents the library with the interview's facts (started in a garage eight years ago, the nearest library an hour away, almost 6,000 donated books, about 150 visitors a week, older women learning to read)",
            "Explains the needs (rent and electricity paid by a collection and a fair, books for teenagers, computers) and makes a concrete request suited to an IT company",
            "\"Adequação discursiva\": a subject line, a formal greeting, who you are and why you're writing, the library, the needs, the request, something in return, a formal close",
            "\"Adequação linguística\": polite requests (\"gostaríamos de saber se\", \"poderia\"), a formal register throughout, accurate vocabulary (\"doação\", \"despesas\", \"parceira\")",
          ],
          modelAnswer: paras(
            "Assunto: Pedido de apoio à Biblioteca Comunitária Palavra Viva",
            "Prezado Senhor Henrique Barreto,",
            "Meu nome é Julia Weber e sou voluntária da Biblioteca Comunitária Palavra Viva, em Cajazeiras. Escrevo para apresentar o nosso trabalho e pedir o apoio da TecnoBahia, que está no bairro há muitos anos.",
            "A biblioteca nasceu há oito anos na garagem da professora aposentada Aparecida Santos, que percebeu que as crianças da rua não tinham onde ler: a biblioteca pública mais próxima fica a uma hora de ônibus. Hoje temos quase seis mil livros, todos doados, e recebemos cerca de cento e cinquenta pessoas por semana, de crianças que vêm depois da escola a senhoras que estão aprendendo a ler aos setenta anos.",
            "Todo esse trabalho é feito por voluntários, e o aluguel e a conta de luz são pagos com uma vaquinha e uma feira mensal. Nossa maior necessidade hoje são computadores: muitos adolescentes fazem as pesquisas da escola pelo celular, às vezes com a tela quebrada.",
            "Por isso, gostaríamos de saber se a TecnoBahia poderia doar dois ou três computadores, novos ou usados em bom estado, ou adotar a biblioteca, assumindo uma das despesas mensais. Em troca, teríamos prazer em divulgar o nome da empresa como parceira.",
            "Ficamos à disposição para uma visita.",
            "Atenciosamente,\nJulia Weber\nVoluntária da Biblioteca Comunitária Palavra Viva",
          ),
        },
      ],
    },
    {
      title: "Tarefa 3",
      instructions:
        "Leia o texto abaixo sobre a semana de quatro dias de trabalho. Você trabalha como coordenador de uma equipe em uma empresa de tecnologia, e a sua equipe anda sobrecarregada. Escreva um e-mail para a diretora de recursos humanos da empresa propondo um teste da semana de quatro dias, com base nas informações do texto, e respondendo às objeções que a proposta pode provocar.",
      texts: [
        {
          title: "Trabalhar quatro dias e ganhar o mesmo",
          body: paras(
            "Folga toda sexta-feira, sem redução de salário. A proposta, que parecia coisa de ficção há alguns anos, está sendo testada por empresas de vários países, inclusive do Brasil. Recentemente, um grupo de empresas brasileiras de diferentes setores, de agências de comunicação a fábricas, participou de um teste de seis meses da semana de quatro dias.",
            "O modelo segue a lógica conhecida como 100-80-100: os funcionários recebem 100% do salário, trabalham 80% do tempo e se comprometem a manter 100% da produtividade. Para isso, as empresas precisaram rever a rotina: reuniões mais curtas e com pauta definida, menos mensagens fora do horário, períodos do dia reservados para o trabalho concentrado.",
            "Os resultados animaram os participantes. A maioria das empresas afirmou que a produtividade se manteve ou aumentou, e os funcionários relataram menos estresse e mais tempo para a família, os estudos e a saúde. Os pedidos de demissão e as faltas por doença também diminuíram. “Descobrimos quanto tempo perdíamos com reuniões inúteis”, conta a diretora de uma agência de São Paulo.",
            "Nem tudo foi fácil. Nas áreas de atendimento ao cliente, foi preciso criar escalas para que a empresa não fechasse às sextas, e alguns gestores tiveram dificuldade para acompanhar as equipes. Os especialistas recomendam começar com um período de teste, definir metas claras para medir os resultados e envolver os funcionários no planejamento. Para eles, a semana de quatro dias não é um presente, mas uma nova forma de organizar o trabalho.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você leu um texto sobre empresas brasileiras que testaram a semana de quatro dias de trabalho, no modelo 100-80-100. Você coordena uma equipe em uma empresa de tecnologia, e a sua equipe anda sobrecarregada. Escreva um e-mail para a diretora de recursos humanos da empresa propondo um teste da semana de quatro dias, com base nas informações do texto, e respondendo às objeções que a proposta pode provocar.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a professional e-mail from a team coordinator to the HR director, a colleague the writer knows: respectful, well argued, constructive",
            "Uses the text: the 100-80-100 model, the results of the Brazilian trial (productivity kept or up, less stress, fewer resignations and sick days), the changes it required",
            "Anticipates the objections the text mentions (customer service on Fridays, managers following the team) and answers them with the text's solutions (rotating schedules, a trial period, clear targets, staff involvement)",
            "\"Adequação discursiva\": a subject line, the problem that motivates the proposal, the arguments, the objections answered, a concrete proposal and a next step",
            "\"Adequação linguística\": a professional register (\"gostaria de propor\", \"seria necessário\"), the conditional and the subjunctive (\"para que houvesse\"), accurate figures and terms",
          ],
          modelAnswer: paras(
            "Assunto: Proposta de teste da semana de quatro dias",
            "Prezada Sílvia,",
            "Como você sabe, nos últimos meses a nossa equipe de desenvolvimento tem sofrido com o excesso de reuniões e com o cansaço, e dois colegas pediram demissão. Por isso, gostaria de propor que a empresa faça um teste da semana de quatro dias.",
            "Li recentemente sobre um teste de seis meses realizado por empresas brasileiras de vários setores, no modelo 100-80-100: salário integral, 80% do tempo de trabalho e a mesma produtividade. A maioria das empresas afirmou que a produtividade se manteve ou até aumentou, e os funcionários relataram menos estresse. Além disso, os pedidos de demissão e as faltas por doença diminuíram, o que seria muito positivo para nós.",
            "Sei que a proposta pode gerar dúvidas, principalmente sobre o atendimento aos clientes. Nesse caso, poderíamos organizar escalas para que sempre houvesse alguém disponível às sextas-feiras. Também seria necessário rever a nossa rotina, com reuniões mais curtas e com pauta definida.",
            "Minha sugestão é começarmos com um piloto de três meses, só na equipe de desenvolvimento, com metas claras para medir os resultados. Os colegas poderiam participar do planejamento.",
            "Se você achar interessante, posso apresentar a proposta com mais detalhes na próxima reunião.",
            "Um abraço,\nRafael Lima\nCoordenador de Desenvolvimento",
          ),
        },
      ],
    },
    {
      title: "Tarefa 4",
      instructions:
        "Leia o texto abaixo sobre as festas de São João no Nordeste. Você foi ao São João de Campina Grande, na Paraíba, no ano passado, e tem um blog de viagens em português. Escreva uma postagem para o blog contando a sua experiência na festa, explicando aos leitores as tradições do São João e recomendando a viagem, com base nas informações do texto.",
      texts: [
        {
          title: "São João: a maior festa do Nordeste",
          body: paras(
            "Em junho, o Nordeste vive a sua festa mais importante. O São João, como é chamado na região, celebra três santos populares: Santo Antônio, no dia 13, São João, no dia 24, e São Pedro, no dia 29. A tradição chegou com os colonizadores portugueses, mas ganhou no sertão uma cara própria, ligada à colheita do milho, que acontece nessa época.",
            "Por isso, o milho está em toda parte: cozido, assado na brasa, em forma de pamonha, de canjica ou de bolo. Nas ruas enfeitadas com bandeirinhas coloridas, as famílias acendem fogueiras, e grupos de quadrilha, com roupas inspiradas no homem do campo, apresentam coreografias que imitam um casamento na roça. A trilha sonora é o forró, tocado com sanfona, zabumba e triângulo, que ficou conhecido no país inteiro graças a Luiz Gonzaga.",
            "Duas cidades disputam o título de maior São João do mundo: Campina Grande, na Paraíba, e Caruaru, em Pernambuco. Durante cerca de um mês, elas recebem centenas de milhares de turistas, e os hotéis ficam lotados com meses de antecedência. Os shows nos grandes palcos são gratuitos, mas muitos visitantes preferem os forrós menores, nas casas de dança e nos sítios ao redor da cidade.",
            "A festa também é uma força econômica: costureiras, vendedores de comida, músicos e artesãos tiram ali boa parte da renda do ano. Para quem vai pela primeira vez, a dica é reservar com antecedência, usar roupas leves e sapatos confortáveis e aprender pelo menos o passo básico do forró, porque é difícil ficar parado.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você leu um texto sobre as festas de São João no Nordeste. Você foi ao São João de Campina Grande, na Paraíba, no ano passado, e tem um blog de viagens em português. Escreva uma postagem para o blog contando a sua experiência na festa, explicando aos leitores as tradições do São João e recomendando a viagem, com base nas informações do texto.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a travel blog post in the first person, for readers who may want to go: personal, lively and useful",
            "Explains the traditions with the text's information (the three saints, the corn harvest and its dishes, \"bandeirinhas\" and \"fogueiras\", the \"quadrilha\", \"forró\" with \"sanfona\", \"zabumba\" and \"triângulo\")",
            "Tells your own experience and turns the text's practical tips into a recommendation (book months ahead, light clothes and comfortable shoes, learn the basic \"forró\" step)",
            "\"Adequação discursiva\": a title, an opening that hooks the reader, the account mixed with explanation, the tips and a closing line",
            "\"Adequação linguística\": past tenses for the story (\"pretérito perfeito\" for events, \"imperfeito\" for background), vivid vocabulary, a light register that stays correct",
          ],
          modelAnswer: paras(
            "Um mês de forró: o meu São João em Campina Grande",
            "Se alguém me perguntar qual foi a melhor viagem que fiz no Brasil, a resposta é fácil: o São João de Campina Grande, na Paraíba, em junho do ano passado.",
            "Eu já tinha ouvido falar das festas juninas, mas não imaginava o tamanho da festa. Durante quase um mês, a cidade recebe centenas de milhares de turistas, e as ruas ficam cobertas de bandeirinhas coloridas. A festa homenageia três santos populares, Santo Antônio, São João e São Pedro, e coincide com a colheita do milho. Por isso, comi milho de todas as formas: assado na brasa, cozido, em pamonha, canjica e bolo. Tudo delicioso!",
            "O que mais me emocionou foram as quadrilhas, grupos que dançam com roupas inspiradas no homem do campo e encenam um casamento na roça. E, claro, o forró, com sanfona, zabumba e triângulo. Os shows nos palcos grandes são de graça, mas os melhores momentos foram nos forrós pequenos, nos sítios perto da cidade.",
            "Se você quiser ir, aqui vão algumas dicas: reserve o hotel com meses de antecedência, porque tudo fica lotado; leve roupas leves e sapatos confortáveis; e faça pelo menos uma aula de forró antes de viajar. Eu não fiz e passei a primeira noite pisando no pé dos outros!",
            "Vale cada centavo. No ano que vem eu volto, desta vez para Caruaru.",
          ),
        },
      ],
    },
  ],
};
