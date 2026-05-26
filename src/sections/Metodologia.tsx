import { useScrollReveal } from '../hooks/useScrollReveal';
import { LogoMark } from '../components/Logo';

const STEPS = [
  {
    num: '01',
    title: 'Primeiro Contato',
    description:
      'Entre em contato pelo formulário, WhatsApp ou telefone. Matheus retorna em até 24 horas úteis para entender sua necessidade.',
  },
  {
    num: '02',
    title: 'Entendimento do Caso',
    description:
      'Na primeira conversa, Matheus ouve atentamente sua situação, coleta informações iniciais e identifica os aspectos jurídicos envolvidos.',
  },
  {
    num: '03',
    title: 'Análise Jurídica',
    description:
      'Matheus realiza uma análise técnica detalhada do caso, examinando documentos, jurisprudência e alternativas estratégicas aplicáveis.',
  },
  {
    num: '04',
    title: 'Direcionamento Estratégico',
    description:
      'Você recebe um plano de ação claro, com orientação sobre os próximos passos, prazos e possíveis cenários jurídicos.',
  },
];

const VALUES = [
  {
    title: 'Confiança',
    text: 'Relação direta e segura do primeiro contato ao fechamento.',
  },
  {
    title: 'Técnica',
    text: 'Análise objetiva, fundamentada e orientada à melhor estratégia.',
  },
  {
    title: 'Clareza',
    text: 'Comunicação simples, sem juridiquês desnecessário.',
  },
  {
    title: 'Compromisso',
    text: 'Acompanhamento cuidadoso e postura responsável em cada etapa.',
  },
];

export function Metodologia() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const stepsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.step-item',
    stagger: 0.15,
    y: 30,
  });

  return (
    <section className="relative bg-navy-deep section-padding overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}images/editorial/abstract-balance.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12] pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none bg-navy-deep/82" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_15%,rgba(216,198,168,0.09),transparent_36%),radial-gradient(ellipse_at_80%_65%,rgba(42,63,106,0.42),transparent_48%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(216,198,168,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(216,198,168,0.2)_1px,transparent_1px)] bg-[size:92px_92px]" />
      <div className="content-max">
        {/* Header */}
        <div ref={headerRef} className="relative text-center mb-12 md:mb-16">
          <span className="label-uppercase text-champagne">METODOLOGIA</span>
          <h2
            className="font-serif text-white mt-3 leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Como funciona o atendimento
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="step-item relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-champagne/30 hover:bg-white/[0.055]"
            >
              {/* Connector line (desktop only) */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+24px)] right-[-50%] z-0">
                  <div className="border-t border-dashed border-champagne/20 w-full" />
                </div>
              )}

              {/* Step number circle */}
              <div className="relative z-10 w-14 h-14 rounded-full border border-champagne/35 bg-navy/50 flex items-center justify-center mb-5">
                <span
                  className="font-serif text-champagne leading-none"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                >
                  {step.num}
                </span>
              </div>

              <h3 className="font-sans text-white font-medium text-lg">
                {step.title}
              </h3>
              <p className="font-sans text-slate text-sm leading-relaxed mt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values System */}
        <div className="relative mt-16 md:mt-20 overflow-hidden rounded-[28px] border border-champagne/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-6 md:p-8 shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(216,198,168,0.12),transparent_45%)]" />
          <div className="absolute left-1/2 top-1/2 hidden h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/10 md:block values-ring" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_260px_1fr] gap-5 md:gap-6 items-center">
            <div className="grid gap-5">
              {VALUES.slice(0, 2).map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-navy/40 p-5 backdrop-blur-md"
                >
                  <p className="font-serif text-champagne text-2xl leading-none">
                    {value.title}
                  </p>
                  <p className="font-sans text-slate text-sm leading-relaxed mt-3">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative min-h-[240px] flex items-center justify-center">
              <div className="absolute w-44 h-44 rounded-full border border-champagne/15 values-pulse" />
              <div className="absolute w-32 h-32 rounded-full border border-white/10" />
              <LogoMark
                variant="dark"
                className="relative w-28 h-28 values-mark opacity-90"
              />
              <span className="absolute bottom-6 label-uppercase text-white/35 tracking-[0.24em]">
                Valores
              </span>
            </div>

            <div className="grid gap-5">
              {VALUES.slice(2).map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-navy/40 p-5 backdrop-blur-md"
                >
                  <p className="font-serif text-champagne text-2xl leading-none">
                    {value.title}
                  </p>
                  <p className="font-sans text-slate text-sm leading-relaxed mt-3">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .values-ring {
          animation: valuesRotate 26s linear infinite;
        }
        .values-ring::before,
        .values-ring::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #D8C6A8;
          box-shadow: 0 0 20px rgba(216,198,168,0.55);
        }
        .values-ring::before {
          top: -4px;
          left: 50%;
        }
        .values-ring::after {
          bottom: -4px;
          left: 50%;
          opacity: 0.45;
        }
        .values-pulse {
          animation: valuesPulse 4.8s ease-in-out infinite;
        }
        .values-mark .logo-m,
        .values-mark .logo-g,
        .values-mark .logo-oath {
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: valuesDraw 4.5s ease-in-out infinite;
        }
        .values-mark .logo-g {
          animation-delay: 0.22s;
        }
        .values-mark .logo-oath {
          animation-delay: 0.44s;
        }
        @keyframes valuesRotate {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes valuesPulse {
          0%, 100% { transform: scale(0.92); opacity: 0.28; }
          50% { transform: scale(1.08); opacity: 0.58; }
        }
        @keyframes valuesDraw {
          0% { stroke-dashoffset: 190; opacity: 0.35; }
          38%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
    </section>
  );
}
