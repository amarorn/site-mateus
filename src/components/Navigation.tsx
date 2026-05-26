import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Artigos', href: '#artigos' },
  { label: 'Contato', href: '#contato' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const solidNav = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollY > window.innerHeight * 0.18);
      setScrollProgress(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0);

      const sections = ['#hero', ...NAV_LINKS.map((link) => link.href)];
      let current = sections[0];
      for (const href of sections) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = href;
        }
      }

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[78px] md:h-[86px] flex items-center justify-between transition-all duration-500 ${
          solidNav
            ? 'bg-navy/90 backdrop-blur-xl shadow-[0_16px_40px_rgba(13,21,37,0.22)] border-b border-champagne/10'
            : 'bg-transparent'
        }`}
        style={{ padding: '0 clamp(14px, 4vw, 60px)' }}
      >
        <div
          className="absolute left-0 bottom-0 h-px bg-gradient-to-r from-champagne via-white/40 to-champagne transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="group/nav-logo relative flex items-center pointer-events-auto"
          aria-label="Ir para o início"
        >
          <span className="absolute -inset-2 rounded-2xl bg-champagne/10 blur-xl opacity-25 transition-opacity duration-500 group-hover/nav-logo:opacity-70" />
          <span className="relative flex items-center rounded-xl border border-champagne/30 bg-navy-deep/70 px-2.5 py-1.5 md:px-3 md:py-2 shadow-[0_10px_28px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-500 group-hover/nav-logo:-translate-y-0.5 group-hover/nav-logo:border-champagne/65">
            <Logo variant="dark" className="h-[42px] md:h-[48px] w-auto nav-logo-svg" />
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-2 py-2 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative rounded-full px-4 py-2.5 font-sans text-[12px] font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                activeSection === link.href
                  ? 'text-navy bg-champagne shadow-[0_8px_22px_rgba(216,198,168,0.18)]'
                  : 'text-white/78 hover:text-champagne hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo('#contato')}
          className="hidden xl:inline-flex btn-outline-champagne"
        >
          Falar com Matheus
        </button>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-white p-2 pointer-events-auto"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-navy/98 backdrop-blur-xl flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between h-[86px] px-5 md:px-10">
            <span className="flex items-center rounded-lg border border-champagne/35 bg-navy-deep/60 px-2.5 py-1.5">
              <Logo variant="dark" className="h-11 w-auto" />
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-2"
              aria-label="Fechar menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-serif text-3xl md:text-4xl text-white hover:text-champagne transition-colors duration-300"
                style={{
                  animation: `fadeSlideIn 0.4s ease ${i * 0.08}s both`,
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contato')}
              className="btn-primary mt-6"
              style={{
                animation: `fadeSlideIn 0.4s ease ${NAV_LINKS.length * 0.08}s both`,
              }}
            >
              Falar com Matheus
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .nav-logo-svg .logo-m,
        .nav-logo-svg .logo-g,
        .nav-logo-svg .logo-oath {
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: logoDraw 1.4s ease forwards;
        }
        .nav-logo-svg .logo-g {
          animation-delay: 0.18s;
        }
        .nav-logo-svg .logo-oath {
          animation-delay: 0.34s;
        }
        .nav-logo-svg .logo-dot {
          transform-origin: 86px 84px;
          animation: logoDot 1.2s ease 0.75s both;
        }
        .group\\/nav-logo:hover .nav-logo-svg .logo-oath {
          animation: oathSweep 0.8s ease both;
        }
        @keyframes logoDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes logoDot {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.35); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes oathSweep {
          0% { stroke-dashoffset: 190; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </>
  );
}
