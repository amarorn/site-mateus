import {
  Building2,
  FileCheck,
  HardHat,
  Home,
  Scale,
  ShoppingCart,
  Users,
} from 'lucide-react';

export const practiceAreas = [
  {
    slug: 'direito-civil',
    icon: Scale,
    name: 'Direito Civil',
    shortDesc:
      'Assessoria em contratos, responsabilidade civil, direitos de personalidade e relações jurídicas entre particulares.',
    fullDesc:
      'Atuação em questões de Direito Civil, incluindo elaboração e análise de contratos, responsabilidade civil por danos materiais e morais, proteção de direitos de personalidade, negócios jurídicos, obrigações e contratos em geral.',
    details: [
      'Análise e elaboração de contratos',
      'Responsabilidade civil',
      'Cobranças e obrigações',
      'Prevenção e condução de litígios',
    ],
  },
  {
    slug: 'direito-empresarial',
    icon: Building2,
    name: 'Direito Empresarial',
    shortDesc:
      'Consultoria societária, contratos empresariais, recuperação judicial e planejamento estratégico.',
    fullDesc:
      'Assessoria jurídica para empresas e empresários, abrangendo contratos comerciais, organização societária, prevenção de riscos e suporte jurídico para decisões empresariais relevantes.',
    details: [
      'Contratos empresariais',
      'Consultoria preventiva',
      'Riscos jurídicos do negócio',
      'Estratégias para tomada de decisão',
    ],
  },
  {
    slug: 'direito-trabalhista',
    icon: HardHat,
    name: 'Direito Trabalhista',
    shortDesc:
      'Assessoria preventiva e contenciosa em relações de trabalho, compliance e negociações.',
    fullDesc:
      'Atuação preventiva e contenciosa em matéria trabalhista, com orientação para empresas, trabalhadores e profissionais que precisam compreender riscos e caminhos jurídicos.',
    details: [
      'Análise de vínculo e direitos trabalhistas',
      'Prevenção de passivos',
      'Reclamações trabalhistas',
      'Negociações e acordos',
    ],
  },
  {
    slug: 'direito-familia-sucessoes',
    icon: Users,
    name: 'Direito de Família e Sucessões',
    shortDesc:
      'Planejamento patrimonial, divórcios, guarda, inventários e partilha de bens.',
    fullDesc:
      'Acompanhamento sensível e técnico em questões familiares e sucessórias, com atenção ao contexto humano e patrimonial de cada situação.',
    details: [
      'Divórcio e união estável',
      'Guarda, visitas e alimentos',
      'Inventários e partilhas',
      'Planejamento sucessório',
    ],
  },
  {
    slug: 'direito-imobiliario',
    icon: Home,
    name: 'Direito Imobiliário',
    shortDesc:
      'Compra e venda, locações, condomínios, loteamentos e regularização de imóveis.',
    fullDesc:
      'Assessoria em transações e conflitos imobiliários, incluindo contratos, locações, regularização de imóveis e análise de riscos em operações patrimoniais.',
    details: [
      'Compra e venda de imóveis',
      'Locações residenciais e comerciais',
      'Regularização imobiliária',
      'Contratos e due diligence',
    ],
  },
  {
    slug: 'direito-consumidor',
    icon: ShoppingCart,
    name: 'Direito do Consumidor',
    shortDesc:
      'Defesa dos direitos do consumidor em relações de consumo e responsabilidade do fornecedor.',
    fullDesc:
      'Atuação em relações de consumo, com análise de contratos, práticas comerciais, vícios de produtos e serviços e responsabilidade do fornecedor.',
    details: [
      'Vícios de produtos e serviços',
      'Cobranças indevidas',
      'Contratos de consumo',
      'Responsabilidade do fornecedor',
    ],
  },
  {
    slug: 'consultoria-preventiva',
    icon: FileCheck,
    name: 'Consultoria Jurídica Preventiva',
    shortDesc:
      'Análise de riscos, pareceres, compliance e estratégias para prevenir litígios.',
    fullDesc:
      'A consultoria preventiva identifica riscos jurídicos antes que se tornem problemas. Matheus elabora pareceres técnicos, revisa contratos e orienta estratégias alinhadas aos objetivos de cada cliente.',
    details: [
      'Análise preventiva de riscos',
      'Pareceres jurídicos',
      'Revisão de contratos',
      'Orientação estratégica contínua',
    ],
  },
];

export const articles = [
  {
    slug: 'orientacao-juridica-preventiva',
    title: 'Quando procurar orientação jurídica preventiva?',
    excerpt:
      'A prevenção de conflitos jurídicos pode evitar custos elevados e prolongados. Entenda quando consultar um advogado antes que problemas surjam.',
    category: 'Direito Civil',
    readTime: '5 min',
    date: '15 Jan 2026',
    image: `${import.meta.env.BASE_URL}images/articles/prevention.jpg`,
    content: [
      'A orientação jurídica preventiva é indicada sempre que uma decisão puder gerar efeitos patrimoniais, familiares, profissionais ou empresariais relevantes.',
      'Contratos, negociações, mudanças societárias, acordos familiares e cobranças são exemplos de situações em que a análise prévia ajuda a evitar litígios e reduzir riscos.',
      'O objetivo não é apenas resolver problemas já existentes, mas oferecer clareza para que o cliente tome decisões com maior segurança.',
    ],
  },
  {
    slug: 'cuidados-antes-assinar-contrato',
    title: 'Cuidados antes de assinar um contrato',
    excerpt:
      'Cláusulas, prazos, rescisão e garantias: elementos essenciais que devem ser revisados com atenção em qualquer acordo.',
    category: 'Contratos',
    readTime: '7 min',
    date: '8 Jan 2026',
    image: `${import.meta.env.BASE_URL}images/articles/contracts.jpg`,
    content: [
      'Antes de assinar um contrato, é essencial compreender obrigações, prazos, multas, hipóteses de rescisão, garantias e consequências do descumprimento.',
      'Muitos conflitos surgem porque as partes assinam documentos sem avaliar riscos ocultos ou cláusulas pouco claras.',
      'A revisão jurídica permite identificar pontos sensíveis, sugerir ajustes e proteger melhor os interesses envolvidos.',
    ],
  },
  {
    slug: 'organizar-documentos-consulta-juridica',
    title: 'Como organizar documentos antes de uma consulta jurídica',
    excerpt:
      'Uma documentação bem organizada agiliza a análise do caso e permite um atendimento mais preciso e completo.',
    category: 'Empresarial',
    readTime: '4 min',
    date: '20 Dez 2025',
    image: `${import.meta.env.BASE_URL}images/articles/documents.jpg`,
    content: [
      'Separar contratos, comprovantes, mensagens, notificações e documentos pessoais facilita uma análise jurídica mais precisa.',
      'Também é importante organizar os fatos em ordem cronológica, destacando datas, pessoas envolvidas e principais dúvidas.',
      'Quanto mais claro for o conjunto de informações, mais objetiva tende a ser a orientação jurídica inicial.',
    ],
  },
  {
    slug: 'consultivo-contencioso-diferenca',
    title: 'Diferença entre atuação consultiva e contenciosa',
    excerpt:
      'Entenda as distinções entre a assessoria jurídica preventiva e a representação em processos judiciais ou administrativos.',
    category: 'Família',
    readTime: '6 min',
    date: '10 Dez 2025',
    image: `${import.meta.env.BASE_URL}images/articles/consultation.jpg`,
    content: [
      'A atuação consultiva tem foco preventivo: analisar situações, orientar decisões e reduzir riscos antes que um conflito se agrave.',
      'Já a atuação contenciosa envolve a defesa de interesses em processos judiciais, administrativos ou negociações litigiosas.',
      'Em muitos casos, as duas frentes se complementam para oferecer uma estratégia jurídica mais completa.',
    ],
  },
];