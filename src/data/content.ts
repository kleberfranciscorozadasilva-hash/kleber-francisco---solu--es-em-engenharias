import { ServiceItem, ArticleItem, CaseStudy, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Kleber Francisco',
  brandName: 'Kleber Francisco - Soluções em Engenharias',
  tagline: 'Elétrica & Segurança do Trabalho',
  engineer: 'Eng. Kleber Francisco',
  crea: 'CREA-MS Ativo com Emissão de ART',
  phone: '(67) 99916-6740',
  phoneRaw: '5567999166740',
  email: 'contato@kleberfrancisco.com',
  address: 'Três Lagoas - MS | Atendimento em todo o Brasil',
  contactApproach: 'Atendimento técnico personalizado',
  yearsExperience: 15,
  laudosCount: 680,
  satisfactionRate: '100%',
  zeroInfractions: '0 Interdições',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'nr12',
    title: 'Adequação à NR-12 para Máquinas e Equipamentos',
    category: 'seguranca',
    shortDesc: 'Apreciação completa de riscos (HRN), projetos de segurança mecânica e elétrica, instalação de proteções e emissão de Laudo Técnico com ART.',
    fullDesc: 'A Norma Regulamentadora NR-12 exige que todas as máquinas e equipamentos industriais ofereçam proteção efetiva aos trabalhadores. Desenvolvemos o ciclo completo de conformidade: diagnóstico e apreciação de riscos conforme ABNT NBR ISO 12100, dimensionamento de dispositivos de parada de emergência, relés de segurança cat. 4, cortinas de luz, intertravamentos com chave de segurança, projeto elétrico de comando e emissão do Laudo de Conformidade com ART válida em todo o Brasil.',
    norma: 'NR-12 / NBR ISO 12100',
    image: '/src/assets/images/service_nr12_adequacy_1792124516845.jpg',
    benefits: [
      'Eliminação imediata do risco de interdição ou autuação pelo MTE',
      'Projetos elaborados para não comprometer o ritmo de produção do operador',
      'ART emitida por Engenheiro de Segurança do Trabalho legalmente habilitado',
      'Manual de instruções e procedimentos de trabalho seguro inclusos',
    ],
    deliverables: [
      'Relatório de Apreciação de Riscos (Matriz HRN)',
      'Esquemas unifilares e diagramas elétricos de segurança',
      'Projeto mecânico 3D das proteções físicas',
      'Laudo Conclusivo de Adequação assinado com ART',
    ],
  },
  {
    id: 'termografia',
    title: 'Laudo de Termografia Infravermelha em Painéis Elétricos',
    category: 'eletrica',
    shortDesc: 'Inspeção não destrutiva com câmera térmica infravermelha calibrada para detecção precoce de aquecimentos anômalos e prevenção de incêndios.',
    fullDesc: 'A termografia elétrica é uma técnica preditiva essencial que detecta sobrecargas, desbalanceamentos de fases, conexões frouxas e fadiga de componentes antes que ocorra uma falha catastrófica ou incêndio. Realizamos varreduras com painéis sob carga nominal conforme as normas NBR 15572 e NBR 15424, gerando relatórios quantitativos com gradiente de temperatura e plano de ação corretivo prioritário.',
    norma: 'NBR 15572 / NR-10',
    image: '/src/assets/images/service_termografia_1792124518054.jpg',
    benefits: [
      'Prevenção de paradas não programadas na linha de produção',
      'Redução do risco de princípios de incêndio em até 95%',
      'Atendimento às exigências de seguradoras industriais para apólices de seguro patrimonial',
      'Diagnóstico sem necessidade de desligamento das instalações',
    ],
    deliverables: [
      'Termogramas radiométricos com pontos quentes identificados',
      'Classificação de severidade térmica conforme norma',
      'Recomendações técnicas detalhadas de intervenção',
      'Laudo Pericial com ART do Engenheiro Eletricista',
    ],
  },
  {
    id: 'spda',
    title: 'Laudo de SPDA & Sistema de Aterramento (Para-Raios)',
    category: 'eletrica',
    shortDesc: 'Inspeção completa de captores, descidas, malha de aterramento e medição de resistência ôhmica em conformidade rigorosa com a NBR 5419:2015.',
    fullDesc: 'O Sistema de Proteção contra Descargas Atmosféricas (SPDA) protege vidas, estruturas e equipamentos sensíveis contra os efeitos devastadores de raios. Realizamos inspeção visual, teste de continuidade elétrica das armaduras, medição de resistência de aterramento com terrômetro digital calibrado e gerenciamento de risco (Parte 2 da NBR 5419), garantindo aprovação junto ao Corpo de Bombeiros e órgãos ambientais.',
    norma: 'ABNT NBR 5419:2015',
    image: '/src/assets/images/hero_industrial_engineering_1792124516783.jpg',
    benefits: [
      'Documento obrigatório para renovação do AVCB (Auto de Vistoria do Corpo de Bombeiros)',
      'Proteção de equipamentos eletrônicos sensíveis contra surtos transitórios',
      'Comprovação de integridade da malha de aterramento industrial',
      'Equipamentos de medição com certificado de calibração RBC',
    ],
    deliverables: [
      'Planta esquemática com pontos de descida e captores',
      'Tabela de medições de continuidade e resistência ôhmica',
      'Relatório fotográfico de inconformidades e plano de adequação',
      'Laudo Técnico Conclusivo e ART no CREA',
    ],
  },
  {
    id: 'incendio',
    title: 'Projetos e Auditoria de Prevenção e Combate a Incêndio',
    category: 'seguranca',
    shortDesc: 'Regularização e aprovação de AVCB / CLCB junto ao Corpo de Bombeiros, projetos de hidrantes, sinalização e auditoria preventiva.',
    fullDesc: 'Garantimos a regularidade predial e industrial de empresas com o Corpo de Bombeiros Militar. Atuamos desde a elaboração do Projeto Técnico (PT) ou Projeto Técnico Simplificado (PTS), dimensionamento de rede de hidrantes, extintores, iluminação de emergência, rotas de fuga até o acompanhamento presencial na vistoria oficial e obtenção do Auto de Vistoria do Corpo de Bombeiros (AVCB).',
    norma: 'Decreto Estadual Bombeiros / NBR 13714',
    image: '/src/assets/images/showcase_prototypes_1792124218425.jpg',
    benefits: [
      'Regularização de alvará de funcionamento e licença municipal',
      'Conformidade com os padrões das principais seguradoras multinacionais',
      'Adequação eficiente para evitar gastos desnecessários em obras',
      'Segurança total para colaboradores e visitantes',
    ],
    deliverables: [
      'Projeto Técnico aprovado pelo Corpo de Bombeiros',
      'Memoriais de cálculo de vazão e pressão de bombas',
      'Laudo de comissionamento de iluminação e alarme',
      'Acompanhamento de vistoria até emissão final do AVCB',
    ],
  },
  {
    id: 'laudos-ocupacionais',
    title: 'Laudos Ocupacionais, Perícias Judiciais & Assistência Técnica',
    category: 'laudos',
    shortDesc: 'Elaboração de PGR, LTCAT, Laudo de Insalubridade, Periculosidade e atuação especializada como Perito Judicial e Assistente Técnico.',
    fullDesc: 'Com vasta experiência como Perito Judicial e Engenheiro de Segurança do Trabalho, o Eng. Kleber Francisco elabora laudos com sólido embasamento científico, normativo e jurisprudencial. Oferecemos suporte para empresas em defesas trabalhistas, formulação de quesitos, impugnações e confecção de Programas de Gerenciamento de Riscos (PGR) e LTCAT para o eSocial.',
    norma: 'NR-01, NR-09, NR-15, NR-16',
    image: '/src/assets/images/engineer_kleber_profile_1792124518059.jpg',
    benefits: [
      'Blindagem jurídica contra passivos e ações trabalhistas indevidas',
      'Alinhamento com eventos S-2240 do eSocial',
      'Assistência pericial presencial com formulação estratégica de quesitos',
      'Pareceres técnicos claros, fundamentados e inquestionáveis',
    ],
    deliverables: [
      'LTCAT (Laudo Técnico das Condições Ambientais de Trabalho)',
      'PGR (Programa de Gerenciamento de Riscos com inventário e plano)',
      'Laudo Pericial de Insalubridade e Periculosidade',
      'Parecer Técnico Pericial para processos judiciais com ART',
    ],
  },
  {
    id: 'treinamentos',
    title: 'Treinamentos e Capacitações Normativas In-Company',
    category: 'treinamento',
    shortDesc: 'Capacitação prática e teórica de equipes nas normas NR-10, NR-12, NR-35 e NR-33 com material didático e certificados válidos.',
    fullDesc: 'Treinamentos estruturados com metodologia dinâmica para engenheiros, operadores, técnicos de manutenção e eletricistas. Ministrados por professor e engenheiro habilitado, com ênfase na prática operacional diária, prevenção de acidentes, uso correto de EPIs/EPCs e protocolos de emergência, emitindo certificados registrados em conformidade com as exigências do MTE.',
    norma: 'NR-10, NR-12, NR-35, NR-33',
    image: '/src/assets/images/service_nr12_adequacy_1792124516845.jpg',
    benefits: [
      'Conscientização real da equipe com redução do índice de absenteísmo e acidentes',
      'Certificados válidos perante qualquer fiscalização do trabalho',
      'Conteúdo customizado para a realidade das máquinas da sua empresa',
      'Treinamentos in-company no próprio chão de fábrica ou online',
    ],
    deliverables: [
      'Apostila técnica e material didático completo',
      'Lista de presença e diário de classe arquivável',
      'Certificados individuais com carga horária e conteúdo programático',
      'Anotação de Responsabilidade Técnica (ART) do instrutor',
    ],
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'wd40-equipamentos-eletricos',
    title: 'WD-40 em Equipamentos Elétricos: Um Alerta Sobre Propagandas e Recomendações',
    category: 'Elétrica',
    date: '10 de Julho, 2024',
    readTime: '5 min de leitura',
    summary: 'Embora amplamente comercializado como desengripante milagroso, o uso indiscriminado de sprays em painéis energizados apresenta sérios riscos dielétricos e inflamáveis.',
    content: [
      'No meio da manutenção industrial e predial, o uso de aerossóis multiuso como o WD-40 tornou-se comum para tentar destravar disjuntores, contatos elétricos e chaves seccionadoras. No entanto, é fundamental esclarecer as propriedades físico-químicas desses produtos sob a ótica da Engenharia Elétrica.',
      'O WD-40 convencional contém solventes orgânicos e hidrocarbonetos que podem ser inflamáveis durante a evaporação dos propelentes. Aplicar o produto diretamente sobre componentes sob tensão pode gerar arcos elétricos (flashover), degradação dos plásticos isolantes e até princípios de incêndio em painéis confinados.',
      'A recomendação técnica da Engenharia é utilizar exclusivamente limpa-contatos de secagem rápida, não inflamáveis, com alta rigidez dielétrica e sempre com o circuito desenergizado, seguindo os procedimentos seguros da NR-10.',
      'Evite confiar cegamente em tutoriais de internet. A manutenção preventiva de equipamentos elétricos deve seguir as recomendações expressas dos fabricantes (Schneider, WEG, ABB) e laudos termográficos periódicos.',
    ],
  },
  {
    id: 'guia-cabos-eletricos-ebook',
    title: 'Um Guia para Escolha Certa de Cabos Elétricos – Baixe Nosso E-book',
    category: 'E-book & Dicas',
    date: '18 de Agosto, 2024',
    readTime: '8 min de leitura',
    isEbook: true,
    summary: 'Critérios técnicos indispensáveis para dimensionamento por capacidade de condução de corrente, queda de tensão e sobrecarga segundo a NBR 5410.',
    content: [
      'O dimensionamento incorreto de condutores elétricos é o vilão número um de contas de energia elevadas, aquecimentos anômalos em calhas e desarmes intempestivos de proteção.',
      'Neste guia prático elaborado pelo Eng. Kleber Francisco, você aprenderá a aplicar os seis critérios de dimensionamento da norma NBR 5410: seção mínima, capacidade de condução de corrente, queda de tensão máxima admissível, sobrecarga, curto-circuito e proteção contra choques elétricos.',
      'Descubra também os fatores de correção por agrupamento de circuitos e temperatura ambiente, que na prática industrial frequentemente reduzem a capacidade nominal de um cabo em mais de 40%.',
      'Material indispensável para projetistas, engenheiros de manutenção e eletricistas instaladores industriais.',
    ],
  },
  {
    id: 'passo-a-passo-nr12',
    title: 'Passo a Passo Para Adequação à NR-12 Sem Paralisar a Linha de Produção',
    category: 'Segurança do Trabalho',
    date: '02 de Setembro, 2024',
    readTime: '6 min de leitura',
    summary: 'Como planejar a conformidade das máquinas industriais em etapas progressivas, priorizando riscos críticos com validação técnica e ART.',
    content: [
      'Muitos gestores industriais adiam a adequação à NR-12 por receio de que as modificações causem gargalos ou diminuam a produtividade dos operadores. No entanto, um bom projeto de engenharia atua como facilitador da produção.',
      'O primeiro passo é o Inventário de Máquinas e a Apreciação de Riscos com a metodologia HRN (Hazard Rating Number). Essa etapa classifica as máquinas mais perigosas e que exigem intervenção imediata.',
      'O segundo passo é a concepção de proteções físicas inteligentes: uso de portas com sensores codificados de segurança, cortinas de luz ópticas em zonas de carga/descarga e paradas de emergência de fácil acesso.',
      'Por fim, a emissão do laudo conclusivo com Anotação de Responsabilidade Técnica (ART) confere respaldo legal definitivo perante o Ministério do Trabalho e Emprego.',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Adequação Completa NR-12 em Parque de Prensas Hidráulicas',
    clientType: 'Indústria Metalúrgica Automotiva',
    service: 'Adequação NR-12 & Projetos Elétricos',
    metric: '100% de Conformidade Sem Parada de Turno',
    desc: 'Diagnóstico de 14 prensas excêntricas e hidráulicas, instalação de cortinas de luz cat. 4, válvulas de segurança bi-estáveis e elaboração de laudos com ART.',
  },
  {
    id: '2',
    title: 'Laudo Termográfico e Manutenção Preditiva em Subestação 13.8kV',
    clientType: 'Centro Logístico & Armazenagem',
    service: 'Termografia e Laudo do PIE (NR-10)',
    metric: 'Eliminação de 6 Pontos de Aquecimento Crítico',
    desc: 'Varredura completa em transformadores a seco, barramentos e quadros de distribuição QGBT, prevenindo sinistro iminente em horário de pico.',
  },
  {
    id: '3',
    title: 'Projeto e Laudo de SPDA com Gerenciamento de Risco',
    clientType: 'Planta Industrial de Produtos Químicos',
    service: 'NBR 5419:2015 & Regularização AVCB',
    metric: 'Aprovação Direta no Corpo de Bombeiros',
    desc: 'Dimensionamento de malha de aterramento profunda, captores Franklin e gaiola de Faraday, com emissão de laudo técnico para renovação de licença ambiental.',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'O que é a ART e por que ela é indispensável em laudos de engenharia?',
    answer: 'A ART (Anotação de Responsabilidade Técnica) é o documento legal registrado no CREA que vincula formalmente o Engenheiro responsável ao serviço executado. Um laudo sem ART não possui validade jurídica perante o Ministério do Trabalho, Corpo de Bombeiros, seguradoras ou perícias judiciais, deixando a empresa desprotegida.',
  },
  {
    question: 'Qual é a periodicidade recomendada para o Laudo de SPDA (Para-Raios)?',
    answer: 'Segundo a norma ABNT NBR 5419:2015, as inspeções visuais devem ser anuais. A inspeção completa com medição da resistência ôhmica de aterramento deve ser realizada a cada 1 ano para estruturas com risco de explosão ou expostas a corrosão severa, e a cada 3 anos para demais estruturas industriais e comerciais.',
  },
  {
    question: 'A adequação à NR-12 exige a substituição de máquinas antigas?',
    answer: 'Não. A grande maioria das máquinas antigas pode ser plenamente adequada com a instalação de dispositivos de segurança adequados (cortinas de luz, proteções físicas móveis com intertravamento, relés de segurança e botoeiras de emergência monitoradas), sem necessidade de descartar o equipamento.',
  },
  {
    question: 'A termografia elétrica necessita desligar as máquinas durante a inspeção?',
    answer: 'Pelo contrário: para que a inspeção termográfica seja conclusiva e precisa, os painéis elétricos devem estar energizados e operando sob carga normal ou pico (mínimo de 40% da carga nominal). A medição é 100% não invasiva e não interfere no fluxo de produção.',
  },
  {
    question: 'Como funciona a atuação como Perito Judicial e Assistente Técnico?',
    answer: 'O Eng. Kleber Francisco atua tanto como Perito de confiança do juiz em processos trabalhistas e cíveis, quanto como Assistente Técnico contratado por empresas para acompanhar perícias presenciais, elaborar quesitos técnicos estratégicos e emitir pareceres para impugnação de laudos desfavoráveis.',
  },
];
