import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Sobre() {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, start: 'top 80%' });

  const stat1 = useCountUp(17, { suffix: '+' });
  const stat2 = useCountUp(500, { suffix: '+' });
  const stat3 = useCountUp(7);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="bg-navy section-padding"
    >
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <span className="label-uppercase text-champagne">
              SOBRE MATHEUS
            </span>
            <h2
              className="font-serif text-white mt-4 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Compromisso com a excelência jurídica
            </h2>

            <p
              className="font-sans text-slate leading-relaxed mt-6"
              style={{
                fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              }}
            >
              Com atuação pautada pela ética, análise técnica e comunicação
              clara, Matheus Giovanne oferece orientação jurídica personalizada
              para clientes que buscam segurança em decisões relevantes.
            </p>

            <p
              className="font-sans text-slate leading-relaxed mt-4"
              style={{
                fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              }}
            >
              Cada caso é tratado com atenção individual, respeito ao sigilo
              profissional e compromisso com soluções juridicamente consistentes.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-0 mt-10 md:mt-12 divide-x divide-slate/20">
              <div ref={stat1.ref} className="pr-8 md:pr-12">
                <span
                  className="font-serif text-champagne leading-none"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  }}
                >
                  {stat1.display}
                </span>
                <p className="label-uppercase text-slate mt-2">
                  Anos de Atuação
                </p>
              </div>
              <div ref={stat2.ref} className="px-8 md:px-12">
                <span
                  className="font-serif text-champagne leading-none"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  }}
                >
                  {stat2.display}
                </span>
                <p className="label-uppercase text-slate mt-2">
                  Casos Atendidos
                </p>
              </div>
              <div ref={stat3.ref} className="pl-8 md:pl-12">
                <span
                  className="font-serif text-champagne leading-none"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  }}
                >
                  {stat3.display}
                </span>
                <p className="label-uppercase text-slate mt-2">
                  Áreas de Especialidade
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-champagne/20 rounded pointer-events-none" />
              <div className="relative border border-champagne/20 rounded overflow-hidden">
                <img
                  src="/images/mateus-desk-1.jpg"
                  alt="Matheus Giovanne em atendimento jurídico individual"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                {/* Champagne overlay tint at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
