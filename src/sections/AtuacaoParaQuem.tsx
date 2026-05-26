import { Briefcase, Home, UserRound, UsersRound } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PUBLICOS = [
  {
    icon: UserRound,
    title: 'Pessoas físicas',
    text: 'Orientação jurídica para decisões pessoais, contratos, conflitos e situações que exigem segurança.',
  },
  {
    icon: Briefcase,
    title: 'Empresários',
    text: 'Apoio consultivo e contencioso para reduzir riscos e tomar decisões com base técnica.',
  },
  {
    icon: UsersRound,
    title: 'Famílias',
    text: 'Atuação cuidadosa em temas sensíveis envolvendo patrimônio, sucessões e relações familiares.',
  },
  {
    icon: Home,
    title: 'Profissionais autônomos',
    text: 'Suporte para contratos, cobranças, relações comerciais e proteção da atividade profissional.',
  },
];

export function AtuacaoParaQuem() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 24 });
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.publico-card',
    stagger: 0.08,
    y: 26,
  });

  return (
    <section className="relative bg-navy section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_16%_20%,rgba(216,198,168,0.08),transparent_34%),radial-gradient(ellipse_at_88%_82%,rgba(42,63,106,0.35),transparent_44%)]" />
      <div className="content-max relative">
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-16 items-end mb-12"
        >
          <div>
            <span className="label-uppercase text-champagne">
              ATUAÇÃO PARA QUEM?
            </span>
            <h2
              className="font-serif text-white mt-3 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Atendimento jurídico para diferentes necessidades
            </h2>
          </div>
          <p className="font-sans text-slate leading-relaxed max-w-[560px] lg:ml-auto">
            O trabalho é conduzido com escuta individual e estratégia adequada
            ao contexto de cada cliente, seja pessoa física, família ou negócio.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PUBLICOS.map((publico) => (
            <div
              key={publico.title}
              className="publico-card group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-champagne/35 hover:bg-white/[0.055]"
            >
              <div className="w-11 h-11 rounded-full border border-champagne/25 flex items-center justify-center mb-5">
                <publico.icon
                  className="text-champagne"
                  size={19}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-sans text-white font-medium text-lg">
                {publico.title}
              </h3>
              <p className="font-sans text-slate text-sm leading-relaxed mt-3">
                {publico.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}