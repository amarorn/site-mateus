import { useState } from 'react';
import {
  Scale,
  Building2,
  HardHat,
  Users,
  Home,
  ShoppingCart,
  FileCheck,
  ArrowRight,
  X,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PracticeArea {
  icon: React.ElementType;
  name: string;
  shortDesc: string;
  fullDesc: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    icon: Scale,
    name: 'Direito Civil',
    shortDesc:
      'Assessoria em contratos, responsabilidade civil, direitos de personalidade e relações jurídicas entre particulares.',
    fullDesc:
      'Atuação abrangente em todas as questões de Direito Civil, incluindo elaboração e análise de contratos, responsabilidade civil por danos materiais e morais, proteção de direitos de personalidade, negócios jurídicos, obrigações e contratos em geral. Oferecemos orientação para prevenir litígios e representação quando necessário.',
  },
  {
    icon: Building2,
    name: 'Direito Empresarial',
    shortDesc:
      'Consultoria societária, contratos empresariais, recuperação judicial e planejamento estratégico.',
    fullDesc:
      'Assessoria jurídica completa para empresas de todos os portes, abrangendo constituição e重组 de sociedades, governança corporativa, contratos comerciais, fusões e aquisições, recuperação judicial e extrajudicial, além de consultoria estratégica para tomada de decisões empresariais.',
  },
  {
    icon: HardHat,
    name: 'Direito Trabalhista',
    shortDesc:
      'Assessoria preventiva e contenciosa em relações de trabalho, compliance e negociações.',
    fullDesc:
      'Atuação tanto na esfera preventiva quanto contenciosa em matéria trabalhista. Desenvolvemos programas de compliance trabalhista, assessoramos em negociações coletivas, representamos empresas e trabalhadores em reclamações trabalhistas, sempre buscando soluções eficientes e juridicamente sólidas.',
  },
  {
    icon: Users,
    name: 'Direito de Família e Sucessões',
    shortDesc:
      'Planejamento patrimonial, divórcios, guarda, inventários e partilha de bens.',
    fullDesc:
      'Acompanhamento sensível e técnico em questões familiares, incluindo divórcios consensuais e litigiosos, regulamentação de guarda e visitas, pensão alimentícia, reconhecimento e dissolução de união estável, inventários judiciais e extrajudiciais, testamentos e planejamento sucessório.',
  },
  {
    icon: Home,
    name: 'Direito Imobiliário',
    shortDesc:
      'Compra e venda, locações, condomínios, loteamentos e regularização de imóveis.',
    fullDesc:
      'Assessoria completa em transações imobiliárias, elaboração de contratos de compra e venda, locação comercial e residencial, administração de condomínios, regularização fundiária, usucapião, incorporações imobiliárias, due diligence de imóveis e consultoria em projetos de loteamento.',
  },
  {
    icon: ShoppingCart,
    name: 'Direito do Consumidor',
    shortDesc:
      'Defesa dos direitos do consumidor em relações de consumo e responsabilidade do fornecedor.',
    fullDesc:
      'Atuação na defesa dos direitos do consumidor e assessoria a fornecedores, abrangindo vícios de produtos e serviços, práticas comerciais, contratos de adesão, responsabilidade por informação, revisão de cláusulas contratuais e representação em demandas consumeristas.',
  },
  {
    icon: FileCheck,
    name: 'Consultoria Jurídica Preventiva',
    shortDesc:
      'Análise de riscos, pareceres, compliance e estratégias para prevenir litígios.',
    fullDesc:
      'A consultoria preventiva identifica riscos jurídicos antes que se tornem problemas. Matheus elabora pareceres técnicos, revisa contratos e processos internos, orienta equipes e cria estratégias jurídicas alinhadas aos objetivos de cada cliente.',
  },
];

export function AreasAtuacao() {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.area-card',
    stagger: 0.08,
    y: 30,
  });

  return (
    <section id="areas" className="bg-offwhite section-padding">
      <div className="content-max">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <span className="label-uppercase text-slate">
              ÁREAS DE ATUAÇÃO
            </span>
            <h2
              className="font-serif text-navy mt-3 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Especialidades Jurídicas
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRACTICE_AREAS.map((area, idx) => (
            <div
              key={area.name}
              className={`area-card group bg-white rounded-lg p-6 md:p-8 border border-slate/10 border-l-2 border-l-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-l-champagne cursor-pointer${
                idx === PRACTICE_AREAS.length - 1 && PRACTICE_AREAS.length % 3 === 1
                  ? ' lg:col-start-2'
                  : ''
              }`}
              onClick={() => setSelectedArea(area)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  setSelectedArea(area);
              }}
            >
              <area.icon
                className="text-champagne transition-transform duration-300 group-hover:scale-110"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="font-sans text-navy font-medium text-lg md:text-xl mt-5">
                {area.name}
              </h3>
              <p className="font-sans text-slate text-sm leading-relaxed mt-3 line-clamp-3">
                {area.shortDesc}
              </p>
              <span className="inline-flex items-center gap-2 font-sans text-navy text-sm font-medium mt-5 group-hover:text-champagne transition-colors duration-300">
                Saiba mais
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArea && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedArea(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-lg max-w-[640px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{
              animation: 'modalIn 0.3s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-10">
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-4 right-4 text-slate hover:text-navy transition-colors p-1"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>

              <selectedArea.icon
                className="text-champagne"
                size={36}
                strokeWidth={1.5}
              />
              <h3
                className="font-serif text-navy mt-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                {selectedArea.name}
              </h3>
              <p className="font-sans text-slate leading-relaxed mt-4">
                {selectedArea.fullDesc}
              </p>

              <button
                onClick={() => {
                  setSelectedArea(null);
                  document
                    .querySelector('#contato')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary mt-8"
              >
                Agendar uma conversa
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
