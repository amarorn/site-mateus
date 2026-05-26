import { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { TrustBar } from './sections/TrustBar';
import { AreasAtuacao } from './sections/AreasAtuacao';
import { AtuacaoParaQuem } from './sections/AtuacaoParaQuem';
import { Sobre } from './sections/Sobre';
import { Advogado } from './sections/Advogado';
import { Diferenciais } from './sections/Diferenciais';
import { RegistroVisual } from './sections/RegistroVisual';
import { Metodologia } from './sections/Metodologia';
import { Artigos } from './sections/Artigos';
import { AvisoEtico } from './sections/AvisoEtico';
import { Contato } from './sections/Contato';
import { Footer } from './sections/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { articles, practiceAreas } from './data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AreasAtuacao />
      <AtuacaoParaQuem />
      <Sobre />
      <Advogado />
      <Diferenciais />
      <RegistroVisual />
      <Metodologia />
      <Artigos />
      <AvisoEtico />
      <Contato />
    </main>
  );
}

function PageShell({
  children,
  image,
}: {
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <main className="relative bg-offwhite min-h-screen pt-[120px] pb-20 overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[420px] w-full object-cover opacity-20"
          />
          <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-navy-deep/80 via-offwhite/75 to-offwhite" />
        </>
      )}
      <div className="content-max relative">{children}</div>
    </main>
  );
}

function ArticlesPage() {
  return (
    <PageShell image={`${import.meta.env.BASE_URL}images/editorial/legal-book.jpg`}>
      <span className="label-uppercase text-slate">CONTEÚDO JURÍDICO</span>
      <h1
        className="font-serif text-navy mt-3 leading-[1.05]"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
      >
        Artigos e orientações
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/artigos/${article.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-slate/10 shadow-[0_8px_30px_rgba(28,43,72,0.06)]"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="p-6">
              <span className="label-uppercase text-champagne">
                {article.category}
              </span>
              <h2 className="font-serif text-navy text-2xl mt-3 group-hover:text-champagne transition-colors">
                {article.title}
              </h2>
              <p className="font-sans text-slate text-sm leading-relaxed mt-3">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) return <NotFoundPage />;

  return (
    <PageShell image={article.image}>
      <Link to="/artigos" className="font-sans text-slate text-sm hover:text-navy">
        ← Voltar para artigos
      </Link>
      <article className="max-w-[860px] mt-8">
        <span className="label-uppercase text-champagne">{article.category}</span>
        <h1
          className="font-serif text-navy mt-3 leading-[1.05]"
          style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
        >
          {article.title}
        </h1>
        <p className="font-sans text-slate leading-relaxed mt-5 max-w-[720px]">
          {article.excerpt}
        </p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full aspect-[16/9] object-cover rounded-2xl mt-10"
        />
        <div className="prose-none mt-10 space-y-5">
          {article.content.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-slate leading-relaxed text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}

function AreasPage() {
  return (
    <PageShell image={`${import.meta.env.BASE_URL}images/editorial/abstract-balance.jpg`}>
      <span className="label-uppercase text-slate">ÁREAS DE ATUAÇÃO</span>
      <h1
        className="font-serif text-navy mt-3 leading-[1.05]"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
      >
        Especialidades jurídicas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {practiceAreas.map((area) => (
          <Link
            key={area.slug}
            to={`/areas/${area.slug}`}
            className="group bg-white rounded-2xl p-7 border border-slate/10 shadow-[0_8px_30px_rgba(28,43,72,0.06)]"
          >
            <area.icon className="text-champagne" size={30} strokeWidth={1.5} />
            <h2 className="font-serif text-navy text-2xl mt-5 group-hover:text-champagne transition-colors">
              {area.name}
            </h2>
            <p className="font-sans text-slate text-sm leading-relaxed mt-3">
              {area.shortDesc}
            </p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

function AreaPage() {
  const { slug } = useParams();
  const area = practiceAreas.find((item) => item.slug === slug);

  if (!area) return <NotFoundPage />;

  return (
    <PageShell image={`${import.meta.env.BASE_URL}images/editorial/contract-stack.jpg`}>
      <Link to="/areas" className="font-sans text-slate text-sm hover:text-navy">
        ← Voltar para áreas
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 mt-8 items-start">
        <div>
          <area.icon className="text-champagne" size={38} strokeWidth={1.5} />
          <h1
            className="font-serif text-navy mt-5 leading-[1.05]"
            style={{ fontSize: 'clamp(2.3rem, 5vw, 4.3rem)' }}
          >
            {area.name}
          </h1>
          <p className="font-sans text-slate leading-relaxed mt-5">
            {area.fullDesc}
          </p>
          <a
            href="https://wa.me/5584996602244"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex mt-8"
          >
            Falar com Matheus
          </a>
        </div>
        <div className="bg-white rounded-2xl p-7 border border-slate/10">
          <h2 className="font-serif text-navy text-2xl">Pontos de atuação</h2>
          <ul className="mt-6 space-y-4">
            {area.details.map((detail) => (
              <li key={detail} className="flex gap-3 font-sans text-slate">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-champagne flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}

function LegalPage({ type }: { type: 'privacidade' | 'termos' }) {
  const isPrivacy = type === 'privacidade';

  return (
    <PageShell>
      <span className="label-uppercase text-slate">INFORMAÇÕES LEGAIS</span>
      <h1
        className="font-serif text-navy mt-3 leading-[1.05]"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
      >
        {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
      </h1>
      <div className="max-w-[860px] mt-8 space-y-5 font-sans text-slate leading-relaxed">
        {isPrivacy ? (
          <>
            <p>
              Os dados enviados por formulário ou WhatsApp são utilizados apenas
              para retorno de contato e análise inicial da solicitação.
            </p>
            <p>
              As informações recebidas são tratadas com confidencialidade,
              respeitando a legislação aplicável e as normas éticas da advocacia.
            </p>
            <p>
              O usuário pode solicitar atualização ou exclusão de dados de
              contato por meio dos canais informados neste site.
            </p>
          </>
        ) : (
          <>
            <p>
              O conteúdo deste site tem finalidade exclusivamente informativa e
              não substitui consulta jurídica individual.
            </p>
            <p>
              O envio de mensagens não estabelece automaticamente relação
              advogado-cliente.
            </p>
            <p>
              A atuação profissional depende de análise específica do caso,
              documentos e circunstâncias apresentadas pelo interessado.
            </p>
          </>
        )}
      </div>
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell>
      <span className="label-uppercase text-slate">404</span>
      <h1
        className="font-serif text-navy mt-3"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
      >
        Página não encontrada
      </h1>
      <Link to="/" className="btn-primary inline-flex mt-8">
        Voltar para o início
      </Link>
    </PageShell>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-[100dvh]">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artigos" element={<ArticlesPage />} />
        <Route path="/artigos/:slug" element={<ArticlePage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/areas/:slug" element={<AreaPage />} />
        <Route path="/privacidade" element={<LegalPage type="privacidade" />} />
        <Route path="/termos" element={<LegalPage type="termos" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
