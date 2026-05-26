import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { practiceAreas } from '../data/content';

type PracticeArea = (typeof practiceAreas)[number];

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
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <span className="label-uppercase text-slate">ÁREAS DE ATUAÇÃO</span>
            <h2
              className="font-serif text-navy mt-3 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Especialidades Jurídicas
            </h2>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {practiceAreas.map((area, idx) => (
            <div
              key={area.name}
              className={`area-card group bg-white rounded-lg p-6 md:p-8 border border-slate/10 border-l-2 border-l-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-l-champagne cursor-pointer${
                idx === practiceAreas.length - 1 && practiceAreas.length % 3 === 1
                  ? ' lg:col-start-2'
                  : ''
              }`}
              onClick={() => setSelectedArea(area)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedArea(area);
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

      {selectedArea && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedArea(null)}
        >
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-lg max-w-[640px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{ animation: 'modalIn 0.3s ease' }}
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

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  to={`/areas/${selectedArea.slug}`}
                  className="btn-outline-champagne justify-center"
                  onClick={() => setSelectedArea(null)}
                >
                  Ver detalhes
                </Link>
                <button
                  onClick={() => {
                    setSelectedArea(null);
                    document
                      .querySelector('#contato')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                >
                  Solicitar orientação jurídica
                </button>
              </div>
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
