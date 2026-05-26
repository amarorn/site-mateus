import { useScrollReveal } from '../hooks/useScrollReveal';

const IMAGES = [
  {
    src: `${import.meta.env.BASE_URL}images/mateus-desk-1.jpg`,
    alt: 'Matheus Giovanne durante atendimento jurídico individual',
    label: 'Atendimento individual',
  },
  {
    src: `${import.meta.env.BASE_URL}images/articles/contracts.jpg`,
    alt: 'Documentos e contratos analisados em mesa de trabalho',
    label: 'Análise documental',
  },
  {
    src: `${import.meta.env.BASE_URL}images/articles/documents.jpg`,
    alt: 'Organização de documentos jurídicos',
    label: 'Estratégia e preparo',
  },
];

export function RegistroVisual() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 24 });
  const galleryRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.visual-card',
    stagger: 0.1,
    y: 30,
  });

  return (
    <section className="bg-navy section-padding overflow-hidden">
      <div className="content-max">
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-end mb-12 md:mb-14"
        >
          <div>
            <span className="label-uppercase text-champagne">
              ATENDIMENTO PERSONALIZADO
            </span>
            <h2
              className="font-serif text-white mt-3 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Uma atuação próxima, técnica e discreta
            </h2>
          </div>

          <p
            className="font-sans text-slate leading-relaxed max-w-[560px] lg:ml-auto"
            style={{ fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)' }}
          >
            O atendimento é conduzido diretamente por Matheus Giovanne, com
            escuta cuidadosa, análise objetiva e orientação construída para a
            realidade de cada cliente.
          </p>
        </div>

        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className={`visual-card group relative overflow-hidden rounded border border-champagne/15 bg-navy-deep ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                  index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3] md:aspect-[8/9]'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              <figcaption className="absolute left-5 bottom-5">
                <span className="label-uppercase text-champagne">
                  {image.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}