// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-1-coletiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { AUDIO_NOTE, VIDEO_NOTE, paras } from "./text";

// Celpe-Bras practice exam 1 (city life) -- Parte Coletiva.
// 3 hours, 4 integrated tasks, as in the real exam: Tarefa 1 from a video
// (here its soundtrack), Tarefa 2 from a radio recording, Tarefas 3 and 4
// from reading texts. Every enunciado names the genre, the writer's role,
// the reader and the purpose; each task is marked holistically.
export const CELPE_BRAS_1_COLETIVA: ExamPaper = {
  id: "coletiva",
  kind: "writing",
  title: "Parte Coletiva",
  minutes: 180,
  group: 1,
  tasks: [
    {
      title: "Tarefa 1",
      instructions:
        "Você vai assistir duas vezes a uma reportagem sobre uma horta comunitária na zona leste de São Paulo. Você mora em um bairro onde existe um terreno público abandonado, ao lado de uma escola. Inspirado pela reportagem, você decidiu propor a criação de um projeto parecido. Escreva um e-mail para a subprefeitura do seu bairro, em nome dos moradores, apresentando a proposta, explicando os benefícios de uma horta comunitária com base na reportagem e solicitando o apoio necessário para que o projeto funcione.",
      instructionsEn: VIDEO_NOTE,
      audio: [
        {
          label: "Vídeo: reportagem sobre hortas comunitárias",
          plays: 2,
          lines: [
            {
              voice: "f",
              text: "Na zona leste de São Paulo, um terreno que durante anos acumulou lixo e entulho virou um ponto de encontro. Há três anos, moradores do bairro se juntaram e criaram ali uma horta comunitária. Hoje, cerca de quarenta famílias cultivam alface, couve, tomate, temperos e até plantas medicinais.",
            },
            {
              voice: "m",
              text: "Antes, ninguém passava por aqui à noite. Era escuro, tinha rato, as pessoas jogavam lixo. Agora tem gente o dia inteiro: o aposentado que vem regar de manhã, a criançada que vem depois da escola. A horta mudou a cara da rua.",
            },
            {
              voice: "f",
              text: "Quem coordena o trabalho é seu Valdir Moreira, de sessenta e oito anos. Tudo é dividido: cada família cuida de um canteiro, e uma parte da colheita vai para a cozinha de uma creche do bairro.",
            },
            {
              voice: "m",
              text: "Aqui ninguém é dono de nada. A gente faz um mutirão no primeiro sábado do mês, e quem tem mais experiência ensina quem está começando. Muita gente nunca tinha plantado nada na vida.",
            },
            {
              voice: "f",
              text: "Para especialistas, os benefícios vão além da comida. O engenheiro agrônomo Marcelo Prado acompanha projetos como esse em várias cidades.",
            },
            {
              voice: "m",
              text: "Uma horta bem cuidada diminui a temperatura do entorno e ajuda o solo a absorver a água da chuva, o que reduz os alagamentos. Ela também incentiva uma alimentação mais saudável, principalmente entre as crianças. Mas o morador sozinho não consegue tudo. É preciso que o poder público garanta o acesso à água, faça a análise do solo, porque muitos terrenos estão contaminados, e dê uma autorização formal de uso do espaço.",
            },
            {
              voice: "f",
              text: "Em muitas cidades brasileiras existem programas de apoio a hortas urbanas, mas os pedidos costumam demorar. Enquanto isso, os moradores da zona leste já planejam a próxima etapa: uma oficina de compostagem aberta a toda a comunidade.",
            },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você mora em um bairro onde existe um terreno público abandonado, ao lado de uma escola. Depois de assistir a uma reportagem sobre uma horta comunitária na zona leste de São Paulo, escreva um e-mail para a subprefeitura do seu bairro, em nome dos moradores, apresentando a proposta de criar uma horta comunitária, explicando os benefícios desse tipo de projeto com base na reportagem e solicitando o apoio necessário para que ele funcione.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a formal e-mail to the \"subprefeitura\", written as a resident on behalf of the neighbours, that proposes a \"horta comunitária\" and asks for support",
            "Uses the report: the benefits it shows (healthy food, a meeting place, rainwater absorbed, cooler streets) and the support it says is needed (authorisation, soil testing, water)",
            "Reworks the report in your own words and ties it to your own neighbourhood and plot of land, instead of retelling the report",
            "\"Adequação discursiva\": a subject line, a formal greeting and sign-off (\"Prezado Senhor Subprefeito, … Atenciosamente\"), paragraphs that lead to a clear request",
            "\"Adequação linguística\": a formal register kept throughout, connectors such as \"além de\", \"no entanto\", \"por isso\", and \"para que\" with the subjunctive",
          ],
          modelAnswer: paras(
            "Assunto: Proposta de horta comunitária no terreno da Rua das Acácias",
            "Prezado Senhor Subprefeito,",
            "Escrevo em nome dos moradores do Jardim das Flores para apresentar uma proposta para o terreno público abandonado da Rua das Acácias, ao lado da Escola Municipal Monteiro Lobato. Hoje o local acumula lixo e entulho, atrai ratos e, à noite, fica escuro e perigoso.",
            "Queremos transformar esse espaço em uma horta comunitária, como a que moradores da zona leste de São Paulo criaram e que foi mostrada recentemente em uma reportagem. Lá, cerca de quarenta famílias cultivam verduras e plantas medicinais, e parte da colheita vai para uma creche. Além de oferecer alimentos saudáveis, a horta virou um ponto de encontro, ajuda o solo a absorver a água da chuva, o que reduz os alagamentos, e deixa a rua menos quente.",
            "Os moradores estão dispostos a cuidar da horta em mutirões mensais, e a escola já demonstrou interesse em levar os alunos para aprender a plantar. No entanto, para que o projeto funcione, precisamos do apoio da subprefeitura: a autorização formal para usar o terreno, uma análise do solo e um ponto de acesso à água.",
            "Contamos com a sua atenção e ficamos à disposição para uma reunião.",
            "Atenciosamente,\nMariana Costa\nAssociação de Moradores do Jardim das Flores",
          ),
        },
      ],
    },
    {
      title: "Tarefa 2",
      instructions:
        "Você vai ouvir duas vezes uma entrevista do programa de rádio Saúde em Dia com uma médica otorrinolaringologista sobre os efeitos do barulho. Você é síndico de um prédio residencial e, nos últimos meses, recebeu muitas reclamações de barulho entre vizinhos. Escreva um comunicado para ser afixado no mural do prédio, dirigido aos moradores, explicando, com base na entrevista, por que o barulho faz mal à saúde e orientando sobre atitudes que melhoram a convivência.",
      instructionsEn: AUDIO_NOTE,
      audio: [
        {
          label: "Áudio: entrevista no programa Saúde em Dia",
          plays: 2,
          lines: [
            {
              voice: "m",
              text: "Bom dia, ouvinte. Hoje o assunto do Saúde em Dia é um problema que muita gente nem percebe: o barulho. Para conversar com a gente, está no estúdio a médica otorrinolaringologista Renata Alves. Bom dia, doutora.",
            },
            { voice: "f", text: "Bom dia. Obrigada pelo convite." },
            { voice: "m", text: "Doutora, barulho faz mal mesmo ou é só um incômodo?" },
            {
              voice: "f",
              text: "Faz mal, sim, e não só ao ouvido. Uma conversa normal fica por volta de sessenta decibéis. O trânsito pesado de uma avenida passa de oitenta. Quando a pessoa fica exposta muitas horas por dia a sons desse nível, ela pode ter perda auditiva, e essa perda não tem volta. Mas o barulho também atrapalha o sono, aumenta o estresse e pode elevar a pressão arterial.",
            },
            { voice: "m", text: "E dentro de casa? Muita gente reclama do vizinho." },
            {
              voice: "f",
              text: "Esse é um ponto importante. O barulho em casa é o que mais incomoda, porque a casa deveria ser o lugar do descanso. Quem é acordado várias vezes durante a noite por música alta, latido de cachorro ou móveis sendo arrastados não chega à fase mais profunda do sono. No dia seguinte, fica irritado, cansado e com dificuldade de concentração. Nas crianças, isso aparece no rendimento escolar.",
            },
            { voice: "m", text: "E o que a gente pode fazer, na prática?" },
            {
              voice: "f",
              text: "Primeiro, cuidar dos próprios ouvidos. Com fone, a dica é não passar de sessenta por cento do volume e fazer pausas. Segundo, pensar no outro: respeitar o horário de silêncio, colocar protetores de feltro nos pés das cadeiras, evitar obras e máquina de lavar tarde da noite. E, se houver um problema com o vizinho, a melhor saída é conversar com calma antes de partir para a reclamação formal.",
            },
            { voice: "m", text: "Doutora Renata Alves, muito obrigado pela conversa." },
            { voice: "f", text: "Eu que agradeço." },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você ouviu uma entrevista de rádio com uma médica otorrinolaringologista sobre os efeitos do barulho. Você é síndico de um prédio residencial e recebeu muitas reclamações de barulho entre vizinhos. Escreva um comunicado para o mural do prédio, dirigido aos moradores, explicando, com base na entrevista, por que o barulho faz mal à saúde e orientando sobre atitudes que melhoram a convivência.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a notice from the building manager (\"síndico\") to all the residents, polite but firm, that informs and gives guidance",
            "Uses the interview: the health effects (hearing loss that doesn't come back, poor sleep, stress, blood pressure, children's concentration) and the practical advice",
            "Turns the doctor's advice into clear requests for this building, without blaming anyone by name",
            "\"Adequação discursiva\": a heading and subject, a short reason for the notice, the information, the requests (a list is fine), a closing and the signature of the \"síndico\"",
            "\"Adequação linguística\": requests in a courteous form (\"pedimos que\" + subjunctive, \"solicitamos\", \"contamos com\"), accurate vocabulary of the topic (\"horário de silêncio\", \"regulamento\", \"reclamação\")",
          ],
          modelAnswer: paras(
            "COMUNICADO AOS MORADORES\nAssunto: Barulho e boa convivência no Edifício Ipê",
            "Prezados moradores,",
            "Nos últimos meses, a administração recebeu várias reclamações de barulho, principalmente à noite. Por isso, gostaríamos de lembrar que o barulho não é apenas um incômodo. Segundo a otorrinolaringologista Renata Alves, entrevistada recentemente no programa de rádio Saúde em Dia, ele pode causar perda auditiva irreversível, atrapalhar o sono, aumentar o estresse e até elevar a pressão arterial. Quem é acordado várias vezes durante a noite passa o dia seguinte cansado e com dificuldade de concentração, e as crianças sentem isso na escola.",
            "Para que todos possam descansar, pedimos que:\n- respeitem o horário de silêncio previsto no regulamento, das 22h às 8h;\n- coloquem protetores de feltro nos pés de cadeiras e mesas;\n- evitem usar a máquina de lavar, a furadeira e aparelhos de som em volume alto tarde da noite;\n- conversem com calma com o vizinho antes de registrar uma reclamação formal.",
            "Pequenas atitudes fazem muita diferença na qualidade de vida de todos. Contamos com a colaboração de cada um.",
            "Atenciosamente,\nCarlos Mendes\nSíndico",
          ),
        },
      ],
    },
    {
      title: "Tarefa 3",
      instructions:
        "Leia a reportagem abaixo, publicada em um jornal de Campinas. Você mora na cidade e acompanha a discussão sobre a ciclofaixa da Avenida dos Ipês. Escreva uma carta de leitor para o jornal, posicionando-se sobre a possível retirada da ciclofaixa. Use informações do texto para sustentar sua opinião e apresente uma proposta que concilie os interesses dos comerciantes e dos ciclistas.",
      texts: [
        {
          title: "Ciclofaixa da Avenida dos Ipês divide opiniões em Campinas",
          body: paras(
            "Dois anos depois de inaugurada, a ciclofaixa de quatro quilômetros e meio da Avenida dos Ipês, em Campinas, pode deixar de existir. A Secretaria de Transportes estuda devolver a faixa aos carros, depois de receber um abaixo-assinado de comerciantes da região, que afirmam ter perdido clientes com o fim das vagas de estacionamento.",
            "“Antes, o cliente parava na porta e comprava. Hoje ele vai para o shopping”, diz Paulo Siqueira, dono de uma loja de material de construção. Segundo a associação comercial do bairro, o movimento caiu cerca de 15% desde a inauguração.",
            "Os ciclistas contestam os números. Um levantamento feito pelo coletivo Pedala Campinas contou, em média, 1.800 bicicletas por dia útil na avenida, o triplo do registrado antes da obra. Muitos são trabalhadores que vão de bicicleta para o emprego, além de entregadores. “Se a ciclofaixa sair, nós voltamos a disputar espaço com ônibus e caminhões”, afirma a enfermeira Juliana Ramos, que pedala doze quilômetros por dia.",
            "Dados da própria prefeitura mostram que o número de acidentes com ciclistas na avenida caiu de 23 para 6 por ano. Para o urbanista Henrique Lago, professor universitário, a discussão precisa ir além do estacionamento. “Pesquisas em várias cidades indicam que quem anda a pé ou de bicicleta passa mais vezes pelo comércio local. O problema pode estar na falta de vagas de carga e descarga e de bicicletários, que poderiam ser criados nas ruas transversais.”",
            "A prefeitura promete realizar uma audiência pública no próximo mês antes de tomar qualquer decisão.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você mora em Campinas e leu uma reportagem sobre a possível retirada da ciclofaixa da Avenida dos Ipês, pedida por comerciantes que perderam vagas de estacionamento. Escreva uma carta de leitor para o jornal que publicou a reportagem, posicionando-se sobre a retirada da ciclofaixa. Use informações do texto para sustentar sua opinião e apresente uma proposta que concilie os interesses dos comerciantes e dos ciclistas.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a letter to the editor (\"carta de leitor\") by a Campinas resident, meant for the newspaper's readers, that takes a clear position",
            "Supports the position with information from the article (1,800 bikes a day, three times as many as before, accidents down from 23 to 6, the shopkeepers' 15 % drop, the urban planner's view)",
            "Acknowledges the other side and proposes a compromise (for example loading bays and bike racks in the side streets)",
            "\"Adequação discursiva\": refers to the article at the start, states the opinion, argues in paragraphs, ends with a conclusion and the writer's name and city",
            "\"Adequação linguística\": argument connectors (\"embora\" + subjunctive, \"além disso\", \"em vez de\", \"portanto\"), the conditional for hypotheses (\"seria\", \"significaria\"), accurate vocabulary",
          ],
          modelAnswer: paras(
            "Retirar a ciclofaixa seria um retrocesso",
            "Li com atenção a reportagem sobre a possível retirada da ciclofaixa da Avenida dos Ipês e, como moradora do bairro, gostaria de manifestar minha opinião contrária a essa ideia.",
            "Embora eu entenda a preocupação dos comerciantes, os números mostram que a ciclofaixa funciona. Hoje passam pela avenida cerca de 1.800 bicicletas por dia útil, o triplo do que se via antes da obra, e o número de acidentes com ciclistas caiu de 23 para 6 por ano. Voltar atrás significaria colocar em risco trabalhadores, entregadores e estudantes que dependem da bicicleta todos os dias.",
            "Além disso, como lembra o urbanista Henrique Lago, quem anda a pé ou de bicicleta costuma passar mais vezes pelo comércio local. Portanto, em vez de eliminar a ciclofaixa, a prefeitura poderia criar vagas de carga e descarga e bicicletários nas ruas transversais. Essa solução atenderia às necessidades das lojas sem sacrificar a segurança de ninguém.",
            "Espero que essa proposta seja discutida na audiência pública do próximo mês e que a cidade não desperdice um investimento que já salvou vidas.",
            "Fernanda Lopes, Campinas (SP)",
          ),
        },
      ],
    },
    {
      title: "Tarefa 4",
      instructions:
        "Leia o texto abaixo sobre as feiras livres. Você colabora com um site de orientação para estrangeiros que acabaram de se mudar para o Brasil. Escreva um texto para a seção Viver no Brasil do site, apresentando a feira livre aos leitores e dando dicas para que eles aproveitem a primeira visita, com base nas informações do texto.",
      texts: [
        {
          title: "A feira livre resiste",
          body: paras(
            "Com a expansão dos supermercados e, mais recentemente, dos aplicativos de entrega, muita gente previu o fim das feiras livres. Mas elas continuam firmes: nas grandes cidades brasileiras, centenas de feiras são montadas toda semana, de madrugada, em ruas que poucas horas depois voltam a ser ocupadas pelos carros.",
            "Cada feira acontece sempre no mesmo dia da semana e no mesmo lugar, e muitos feirantes trabalham há décadas na mesma barraca, às vezes herdada dos pais. Essa continuidade cria uma relação de confiança: o freguês é chamado pelo nome, pode provar uma fruta antes de comprar e recebe dicas sobre o que está mais fresco.",
            "Os preços também atraem. Como os produtos muitas vezes vêm direto do produtor, frutas, verduras e legumes da estação costumam sair mais baratos do que no supermercado. Quem chega no fim da manhã, na hora da xepa, encontra descontos ainda maiores, já que os feirantes preferem vender barato a levar a mercadoria de volta.",
            "Mas a feira não é só um lugar de compras. Para muitos brasileiros, ir à feira é um programa: comer um pastel com caldo de cana, conversar com os vizinhos, ouvir os feirantes anunciando as ofertas aos gritos. Nos últimos anos, várias feiras passaram a aceitar Pix e cartão, e algumas ganharam barracas de produtos orgânicos e de comida pronta.",
            "Para quem vai pela primeira vez, a recomendação é levar sacolas retornáveis ou um carrinho de feira, chegar cedo para encontrar mais variedade e não ter vergonha de pechinchar, principalmente ao comprar em quantidade.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você leu um texto sobre as feiras livres nas cidades brasileiras. Você colabora com um site de orientação para estrangeiros que acabaram de se mudar para o Brasil. Escreva um texto para a seção Viver no Brasil do site, apresentando a feira livre aos leitores e dando dicas para que eles aproveitem a primeira visita, com base nas informações do texto.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": an article for a website for newcomers to Brazil, addressed to them directly (\"você\"), friendly and practical",
            "Uses the text: what a \"feira livre\" is and how it works (same day and place each week), why it's worth going (fresh, cheaper, trust, a social outing), and the practical tips",
            "Explains what a newcomer wouldn't know (\"xepa\", \"pechinchar\", \"pastel com caldo de cana\") instead of assuming it",
            "\"Adequação discursiva\": a title, an introduction that catches the reader's interest, the information, a set of tips and a closing line",
            "\"Adequação linguística\": the imperative for tips (\"chegue\", \"leve\", \"não tenha vergonha\"), \"se\" clauses, a light but correct style",
          ],
          modelAnswer: paras(
            "Feira livre: o melhor do Brasil numa rua só",
            "Se você acabou de chegar ao Brasil, uma das experiências mais autênticas que pode ter é visitar uma feira livre. Apesar dos supermercados e dos aplicativos de entrega, elas continuam vivas nas cidades brasileiras e acontecem sempre no mesmo dia da semana e no mesmo endereço. Pergunte aos vizinhos qual é a feira do seu bairro!",
            "Na feira, você encontra frutas, verduras e legumes da estação, muitas vezes vindos direto do produtor e mais baratos do que no supermercado. Os feirantes costumam deixar o freguês provar antes de comprar, e muitos trabalham há décadas na mesma barraca. Se você voltar sempre, logo vai ser chamado pelo nome.",
            "Algumas dicas para aproveitar a primeira visita:\n- Chegue cedo, se quiser mais variedade, ou no fim da manhã, na hora da xepa, se preferir preços menores.\n- Leve sacolas retornáveis ou um carrinho de feira.\n- Não tenha vergonha de pechinchar, ou seja, de pedir um desconto, principalmente se comprar em quantidade.\n- Muitas barracas já aceitam Pix e cartão, mas é bom levar algum dinheiro.",
            "E não vá embora sem provar o lanche mais tradicional da feira: um pastel quentinho com caldo de cana. Bom passeio!",
          ),
        },
      ],
    },
  ],
};
