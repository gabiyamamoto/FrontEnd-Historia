/**
 * Dados de exemplo usados enquanto o backend não estiver disponível.
 * Seguem exatamente os campos definidos na documentação da API.
 * Ative/desative com NEXT_PUBLIC_USAR_DADOS_EXEMPLO.
 */

const corpoRevolucao = `A Revolução Industrial começou na Inglaterra, por volta da segunda metade do século XVIII. A produção, que antes era feita à mão em pequenas oficinas, passou a acontecer em fábricas movidas por máquinas — primeiro hidráulicas e, depois, a vapor.

Alguns fatores explicam por que a Inglaterra saiu na frente: reservas de carvão e ferro, capital acumulado com o comércio, mão de obra disponível após os cercamentos dos campos e um mercado consumidor em expansão.

## A vida dentro das fábricas

As jornadas podiam passar de 14 horas por dia, inclusive para mulheres e crianças, com salários baixos e ambientes insalubres. Foi nesse contexto que surgiram movimentos como o ludismo, que quebrava máquinas, e o cartismo, que reivindicava direitos políticos para os trabalhadores.

> Pioneirismo inglês: carvão, capital e mão de obra.
> Passagem da manufatura para a maquinofatura.
> Surgimento do proletariado e dos primeiros sindicatos.

## E o que isso tem a ver com hoje?

Automação, inteligência artificial e novas formas de trabalho reabrem perguntas parecidas com as do século XVIII: quem ganha com a tecnologia e como proteger quem trabalha. Entender esse processo ajuda a pensar o futuro das profissões técnicas.`;

const n = (id, categoria, titulo, linhaFina, data) => ({
  id,
  imagem: "",
  categoria,
  titulo,
  linhaFina,
  autor: "Equipe do projeto",
  data,
  corpoTexto: `${linhaFina}\n\nEste é um texto de exemplo. Quando o backend estiver conectado, o conteúdo completo cadastrado no painel administrativo aparecerá aqui.`,
});

export const noticiasExemplo = [
  { ...n(1, "Idade Contemporânea", "Revolução Industrial: como as máquinas mudaram o trabalho", "Da manufatura às fábricas: o que mudou na vida dos trabalhadores ingleses a partir do século XVIII e por que isso ainda importa hoje.", "2026-10-22"), corpoTexto: corpoRevolucao },
  n(2, "Brasil Colônia", "Quilombo dos Palmares: resistência no Brasil colonial", "Como o maior quilombo da América resistiu por quase um século.", "2026-10-21"),
  n(3, "Antiguidade", "A democracia ateniense e seus limites", "Quem podia votar em Atenas — e quem ficava de fora.", "2026-10-20"),
  n(4, "Brasil República", "Era Vargas: a CLT e o trabalho no Brasil", "Direitos trabalhistas, populismo e controle dos sindicatos.", "2026-10-18"),
  n(5, "Idade Média", "Por que 1453 marca o fim da Idade Média", "A tomada de Constantinopla pelos otomanos e suas consequências.", "2026-10-17"),
  n(6, "Idade Moderna", "Grandes Navegações e o Tratado de Tordesilhas", "Portugal, Espanha e a divisão do “Novo Mundo”.", "2026-10-15"),
  n(7, "Idade Contemporânea", "Guerra Fria: o mundo dividido em dois blocos", "Capitalismo x socialismo, corrida espacial e corrida armamentista.", "2026-10-14"),
  n(8, "Brasil Império", "Independência do Brasil além do 7 de setembro", "Guerras de independência na Bahia, no Pará e na Cisplatina.", "2026-10-12"),
  n(9, "Idade Média", "Feudalismo: senhores, servos e a terra", "Como funcionava a sociedade organizada em torno do feudo.", "2026-10-10"),
  n(10, "Idade Moderna", "Renascimento: arte, ciência e humanismo", "O ser humano no centro do pensamento europeu.", "2026-10-08"),
  n(11, "Brasil Império", "Abolição e o pós-1888", "A Lei Áurea e a falta de políticas de integração dos libertos.", "2026-10-06"),
  n(12, "Brasil República", "Da ditadura militar à Constituição de 1988", "AI-5, Diretas Já e a redemocratização.", "2026-10-03"),
  n(13, "Antiguidade", "Mesopotâmia e a invenção da escrita cuneiforme", "Tábuas de argila, códigos de leis e as primeiras cidades.", "2026-10-01"),
  n(14, "Idade Contemporânea", "Revolução Francesa em cinco ideias", "Liberdade, igualdade, fraternidade — e o fim do Antigo Regime.", "2026-09-29"),
  n(15, "História da Tecnologia", "Uma breve história da computação", "De máquinas de calcular mecânicas aos computadores pessoais.", "2026-09-26"),
];

export const carreirasExemplo = [
  { id: 1, numero: 1, titulo: "Professor de História", descricao: "Ensina na educação básica e em cursinhos, ajudando estudantes a interpretar o passado e o presente.", ondeAtua: "Escolas, cursinhos e plataformas de ensino" },
  { id: 2, numero: 2, titulo: "Historiador e pesquisador", descricao: "Investiga fontes, escreve estudos e produz conhecimento novo sobre o passado.", ondeAtua: "Universidades, institutos e centros de pesquisa" },
  { id: 3, numero: 3, titulo: "Arqueólogo", descricao: "Estuda sociedades a partir de vestígios materiais encontrados em escavações.", ondeAtua: "Sítios arqueológicos, órgãos de patrimônio e consultorias" },
  { id: 4, numero: 4, titulo: "Museólogo", descricao: "Cuida de acervos, organiza exposições e cria ações educativas.", ondeAtua: "Museus, centros culturais e fundações" },
  { id: 5, numero: 5, titulo: "Arquivista", descricao: "Organiza e preserva documentos físicos e digitais para que possam ser consultados.", ondeAtua: "Arquivos públicos, empresas e cartórios" },
  { id: 6, numero: 6, titulo: "Produtor de conteúdo histórico", descricao: "Transforma pesquisa em vídeos, podcasts, jogos e materiais didáticos.", ondeAtua: "Editoras, mídias digitais e estúdios de games" },
];

export const cursosExemplo = [
  { id: 1, numero: 1, nome: "Desenvolvimento de Sistemas", descricao: "Acervos digitais, sites de museus, jogos educativos e a própria história da computação." },
  { id: 2, numero: 2, nome: "Mecânica e Mecatrônica", descricao: "Da máquina a vapor à automação: patrimônio industrial e a evolução das fábricas." },
  { id: 3, numero: 3, nome: "Administração e Logística", descricao: "História do trabalho, das rotas comerciais e das relações entre empresas e sociedade." },
];

export const dicasExemplo = {
  "como-estudar": [
    { id: 1, numero: 1, nome: "Monte linhas do tempo", descricao: "Organize os fatos em ordem e marque o que acontecia ao mesmo tempo em lugares diferentes." },
    { id: 2, numero: 2, nome: "Faça mapas de causa e consequência", descricao: "Pergunte sempre: por que isso aconteceu e o que mudou depois?" },
    { id: 3, numero: 3, nome: "Revise em ciclos curtos", descricao: "Retome o conteúdo no dia seguinte, na semana seguinte e no mês seguinte." },
    { id: 4, numero: 4, nome: "Explique em voz alta", descricao: "Se você consegue ensinar o tema para alguém, é porque entendeu." },
  ],
  aprendizagem: [
    { id: 1, numero: 1, nome: "Leia fontes históricas", descricao: "Cartas, jornais, imagens e leis da época mostram como as pessoas pensavam." },
    { id: 2, numero: 2, nome: "Desconfie de visões únicas", descricao: "Compare autores e pontos de vista diferentes sobre o mesmo fato." },
    { id: 3, numero: 3, nome: "Ligue o passado ao presente", descricao: "Procure no noticiário de hoje temas que têm raízes históricas." },
    { id: 4, numero: 4, nome: "Use vídeos e museus virtuais", descricao: "Recursos visuais ajudam a fixar contextos e personagens." },
  ],
  vestibulares: [
    { id: 1, numero: 1, nome: "ENEM: leia o enunciado inteiro", descricao: "As questões trazem textos e imagens — a resposta costuma estar na interpretação." },
    { id: 2, numero: 2, nome: "Fuvest e Unicamp: treine a escrita", descricao: "Na segunda fase, respostas dissertativas exigem argumentos claros e conceitos corretos." },
    { id: 3, numero: 3, nome: "Resolva provas anteriores", descricao: "Faça com tempo marcado e revise cada erro anotando o tema." },
    { id: 4, numero: 4, nome: "Priorize História do Brasil", descricao: "Colônia, Império e República aparecem em praticamente todas as provas." },
  ],
};

export const estagioExemplo = [
  { id: 1, numero: 1, titulo: "Monte seu currículo", descricao: "Inclua curso, projetos da escola e habilidades. Uma página basta." },
  { id: 2, numero: 2, titulo: "Cadastre-se em agentes de integração", descricao: "Plataformas como CIEE divulgam vagas para estudantes técnicos." },
  { id: 3, numero: 3, titulo: "Fale com a coordenação", descricao: "A escola recebe oportunidades de empresas parceiras da região." },
  { id: 4, numero: 4, titulo: "Prepare-se para a entrevista", descricao: "Pesquise a empresa e tenha exemplos de projetos que você fez." },
];

const q = (id, enunciado, explicacao, alternativas, indiceCorreto) => ({
  id,
  enunciado,
  explicacao,
  alternativas: alternativas.map((texto, i) => ({ id: id * 10 + i, texto, correta: i === indiceCorreto })),
});

export const questoesExemplo = [
  q(1, "Em 13 de maio de 1888, a Lei Áurea extinguiu oficialmente a escravidão no Brasil. Um dos principais problemas enfrentados pela população liberta nos anos seguintes foi:",
    "A abolição não veio acompanhada de acesso à terra, à educação ou a trabalho digno, o que manteve a população negra marginalizada no pós-abolição.",
    ["a garantia de terras distribuídas pelo governo imperial aos libertos.", "a ausência de políticas de integração, como acesso à terra, à educação e ao trabalho.", "o pagamento de indenizações aos ex-escravizados pelos antigos senhores.", "a proibição da imigração europeia para as lavouras de café.", "a concessão imediata do direito de voto a toda a população liberta."], 1),
  q(2, "Na democracia ateniense do século V a.C., tinham direito de participar da Assembleia (Eclésia):",
    "Apenas homens adultos, livres e filhos de pais atenienses eram cidadãos. Mulheres, estrangeiros (metecos) e escravizados ficavam de fora.",
    ["todos os habitantes de Atenas, inclusive escravizados.", "homens e mulheres livres maiores de 18 anos.", "apenas os homens adultos, livres e filhos de atenienses.", "somente os aristocratas proprietários de terras.", "estrangeiros que pagassem impostos à cidade."], 2),
  q(3, "A tomada de Constantinopla pelos turcos otomanos, em 1453, é considerada um marco porque:",
    "A queda do Império Bizantino dificultou as rotas comerciais com o Oriente, estimulando a busca por caminhos marítimos — e é usada como marco do fim da Idade Média.",
    ["marcou o início do feudalismo na Europa Ocidental.", "levou ao fim do Império Bizantino e estimulou a busca de novas rotas para o Oriente.", "garantiu aos europeus o controle do comércio no Mediterrâneo.", "provocou a Reforma Protestante na Alemanha.", "encerrou as Grandes Navegações portuguesas."], 1),
  q(4, "Um dos fatores que explicam o pioneirismo inglês na Revolução Industrial foi:",
    "A Inglaterra reunia carvão e ferro, capital acumulado com o comércio e mão de obra liberada pelos cercamentos.",
    ["a ausência de comércio marítimo.", "a abundância de carvão e ferro e o capital acumulado.", "a proibição de máquinas a vapor no continente.", "a economia baseada exclusivamente na agricultura de subsistência.", "o isolamento em relação às colônias."], 1),
  q(5, "A Consolidação das Leis do Trabalho (CLT), de 1943, está associada a qual período da história brasileira?",
    "A CLT foi criada durante o Estado Novo (1937–1945), na Era Vargas, reunindo a legislação trabalhista do período.",
    ["Primeira República.", "Era Vargas.", "Ditadura Militar.", "Período Regencial.", "Nova República."], 1),
  q(6, "O Quilombo dos Palmares, localizado na Serra da Barriga, é símbolo de:",
    "Palmares resistiu por quase um século no século XVII e se tornou símbolo da resistência negra à escravidão.",
    ["colaboração entre colonos e bandeirantes.", "resistência à escravidão no Brasil colonial.", "expansão da pecuária no sertão.", "missões jesuíticas no Sul.", "ocupação holandesa na Bahia."], 1),
  q(7, "O Tratado de Tordesilhas (1494) estabeleceu:",
    "O tratado dividiu as terras 'descobertas e a descobrir' entre Portugal e Espanha por um meridiano a 370 léguas de Cabo Verde.",
    ["a independência das colônias espanholas.", "a divisão das terras entre Portugal e Espanha por um meridiano.", "o fim do tráfico de escravizados no Atlântico.", "a união das coroas ibéricas.", "a partilha da África entre potências europeias."], 1),
  q(8, "A Guerra Fria (1947–1991) caracterizou-se principalmente por:",
    "Foi uma disputa ideológica, política, militar e tecnológica entre EUA e URSS, sem confronto direto entre as duas potências.",
    ["confronto militar direto entre EUA e URSS.", "disputa ideológica entre os blocos capitalista e socialista.", "aliança entre EUA e URSS contra o nazismo.", "expansão do Império Otomano.", "fim da corrida armamentista."], 1),
  q(9, "No sistema feudal, a principal fonte de riqueza e poder era:",
    "A posse da terra definia a posição social: senhores feudais controlavam terras trabalhadas pelos servos.",
    ["o comércio marítimo.", "a posse da terra.", "a indústria têxtil.", "o capital bancário.", "a mineração de ouro."], 1),
  q(10, "O movimento Diretas Já (1983–1984) reivindicava:",
    "O movimento pedia eleições diretas para presidente. A emenda Dante de Oliveira foi rejeitada, mas o movimento acelerou a redemocratização.",
    ["o fim da monarquia.", "eleições diretas para presidente da República.", "a volta do voto censitário.", "a criação do AI-5.", "a independência do Brasil."], 1),
];

export const videosExemplo = [
  { id: 1, url: "", categoria: "Idade Contemporânea", titulo: "Revolução Industrial em resumo", descricao: "Uma revisão das causas, fases e consequências da industrialização para quem vai prestar ENEM.", fonte: "[NOME DO CANAL]" },
  { id: 2, url: "", categoria: "Brasil Colônia", titulo: "Brasil Colônia: ciclos econômicos e sociedade", descricao: "Açúcar, ouro e a formação da sociedade colonial.", fonte: "[NOME DO CANAL]" },
  { id: 3, url: "", categoria: "Idade Contemporânea", titulo: "Guerra Fria explicada", descricao: "Blocos, corrida espacial e o fim da URSS.", fonte: "[NOME DO CANAL]" },
];

export const integrantesExemplo = [
  { id: 1, urlFoto: "", nome: "[Nome]", cargo: "Coordenação", descricaoCargo: "Organiza as entregas e o cronograma." },
  { id: 2, urlFoto: "", nome: "[Nome]", cargo: "Design", descricaoCargo: "Cuida da identidade visual e das telas." },
  { id: 3, urlFoto: "", nome: "[Nome]", cargo: "Front-end", descricaoCargo: "Transforma o design em páginas." },
  { id: 4, urlFoto: "", nome: "[Nome]", cargo: "Back-end", descricaoCargo: "Desenvolve o painel e o banco de notícias." },
  { id: 5, urlFoto: "", nome: "[Nome]", cargo: "Conteúdo", descricaoCargo: "Pesquisa e escreve as notícias e questões." },
];