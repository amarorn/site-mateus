import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

const ARTICLES: Article[] = [
  {
    title: 'Quando procurar orientação jurídica preventiva?',
    excerpt:
      'A prevenção de conflitos jurídicos pode evitar custos elevados e prolongados. Entenda quando consultar um advogado antes que problemas surjam.',
    category: 'Direito Civil',
    readTime: '5 min',
    date: '15 Jan 2026',
    image: `${import.meta.env.BASE_URL}images/articles/prevention.jpg`,
  },
  {
    title: 'Cuidados antes de assinar um contrato',
    excerpt:
      'Cláusulas, prazos, rescisão e garantias: elementos essenciais que devem ser revisados com atenção em qualquer acordo.',
    category: 'Contratos',
    readTime: '7 min',
    date: '8 Jan 2026',
    image: `${import.meta.env.BASE_URL}images/articles/contracts.jpg`,
  },
  {
    title: 'Como organizar documentos antes de uma consulta jurídica',
    excerpt:
      'Uma documentação bem organizada agiliza a análise do caso e permite um atendimento mais preciso e completo.',
    category: 'Empresarial',
    readTime: '4 min',
    date: '20 Dez 2025',
    image: `${import.meta.env.BASE_URL}images/articles/documents.jpg`,
  },
  {
    title: 'Diferença entre atuação consultiva e contenciosa',
    excerpt:
      'Entenda as distinções entre a assessoria jurídica preventiva e a representação em processos judiciais ou administrativos.',
    category: 'Família',
    readTime: '6 min',
    date: '10 Dez 2025',
    image: `${import.meta.env.BASE_URL}images/articles/consultation.jpg`,
  },
];

export function Artigos() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const featuredRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const listRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.article-side',
    stagger: 0.1,
    y: 20,
  });

  const [featured, ...rest] = ARTICLES;

  return (
    <section id="artigos" className="bg-navy section-padding">
      <div className="content-max">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <span className="label-uppercase text-champagne">
              CONTEÚDO JURÍDICO
            </span>
            <h2
              className="font-serif text-white mt-3 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Artigos e Insights
            </h2>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">
          {/* Featured Article */}
          <article ref={featuredRef} className="group cursor-pointer">
            <div className="overflow-hidden rounded">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 border border-champagne/40 text-champagne text-[10px] font-sans uppercase tracking-wider rounded-full">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-slate/50 text-xs">
                  <Clock size={11} />
                  {featured.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-slate/50 text-xs">
                  <Calendar size={11} />
                  {featured.date}
                </span>
              </div>
              <h3
                className="font-serif text-white group-hover:text-champagne transition-colors duration-300 leading-[1.15]"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
              >
                {featured.title}
              </h3>
              <p className="font-sans text-slate text-sm leading-relaxed mt-3 max-w-[560px]">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-sans text-champagne text-sm mt-4 group-hover:underline">
                Ler artigo
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </article>

          {/* Side Articles */}
          <div ref={listRef} className="flex flex-col divide-y divide-slate/10">
            {rest.map((article) => (
              <article
                key={article.title}
                className="article-side group cursor-pointer py-6 first:pt-0 last:pb-0 flex gap-4"
              >
                <div className="overflow-hidden rounded flex-shrink-0 w-[88px] h-[72px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-champagne/70 text-[10px] font-sans uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="font-sans text-white text-sm font-medium leading-snug mt-1 group-hover:text-champagne transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-slate/50">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock size={10} />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar size={10} />
                      {article.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
