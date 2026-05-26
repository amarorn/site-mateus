import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const DESTAQUES = [
  {
    icon: GraduationCap,
    label: 'Formação',
    value: 'Direito — USP',
  },
  {
    icon: Award,
    label: 'Registro',
    value: 'OAB/SP 125.847',
  },
  {
    icon: BookOpen,
    label: 'Atuação',
    value: 'Desde 2008',
  },
];

export function Advogado() {
  const textRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const imageRef = useScrollReveal<HTMLDivElement>({ y: 20 });

  return (
    <section id="advogado" className="bg-offwhite section-padding overflow-hidden">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-14 lg:gap-20 items-center">

          {/* Text Column */}
          <div ref={textRef}>
            <span className="label-uppercase text-slate">O ADVOGADO</span>
            <h2
              className="font-serif text-navy mt-3 leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Matheus Giovanne
            </h2>

            <div className="w-10 h-px bg-champagne mt-5" />

            <p
              className="font-sans text-slate leading-relaxed mt-6"
              style={{ fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)' }}
            >
              Advogado com mais de 17 anos de experiência, Matheus Giovanne
              construiu sua carreira sobre uma base sólida de técnica jurídica,
              escuta ativa e compromisso com resultados concretos para seus
              clientes.
            </p>

            <p
              className="font-sans text-slate leading-relaxed mt-4"
              style={{ fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)' }}
            >
              Sua atuação combina consultoria preventiva e contenciosa,
              sempre com foco em soluções personalizadas, comunicação clara e
              respeito absoluto ao sigilo profissional. Para Mateus, cada caso
              carrega uma história que merece atenção individual.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-navy/10">
              {DESTAQUES.map((d) => (
                <div key={d.label} className="flex flex-col gap-2">
                  <d.icon
                    className="text-champagne"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <p className="label-uppercase text-slate/60">{d.label}</p>
                  <p className="font-sans text-navy text-sm font-medium leading-snug">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div ref={imageRef} className="relative">
            {/* Background accent */}
            <div
              className="absolute -bottom-6 -left-6 w-2/3 h-2/3 rounded pointer-events-none"
              style={{ background: 'rgba(216,198,168,0.12)' }}
            />

            {/* Main photo */}
            <div className="relative rounded overflow-hidden shadow-[0_20px_60px_rgba(28,43,72,0.12)]">
              <img
                src={`${import.meta.env.BASE_URL}images/mateus-desk-2.jpg`}
                alt="Matheus Giovanne — advogado em seu ambiente profissional"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
                loading="lazy"
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded px-4 py-3 shadow-lg border border-champagne/20">
              <p className="font-serif text-navy text-sm leading-tight">
                "Cada caso merece<br />atenção individual."
              </p>
              <p className="label-uppercase text-slate/60 mt-1.5">Matheus Giovanne</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
