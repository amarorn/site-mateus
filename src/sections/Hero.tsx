import { useEffect, useRef, useState } from 'react';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { LogoMark } from '../components/Logo';
import { LogoKineticMark } from '../components/LogoKineticMark';
import gsap from 'gsap';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    // Parallax fade on scroll
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / (vh * 0.8), 1);
      contentRef.current.style.opacity = String(1 - progress);
      contentRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!visible || !contentRef.current) return;

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      '.hero-label',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
      .fromTo(
        '.hero-headline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        '.hero-subheadline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
        '-=0.3'
      )
      .fromTo(
        '.hero-seal',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      );

    return () => { tl.kill(); };
  }, [visible]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-navy-deep overflow-hidden"
      onMouseMove={handleMouseMove}
      style={
        {
          '--mx': '72%',
          '--my': '28%',
        } as React.CSSProperties
      }
    >
      <img
        src={`${import.meta.env.BASE_URL}images/editorial/abstract-commitment.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.28] pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-navy-deep via-navy-deep/86 to-navy-deep/44" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/35" />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_260px_at_var(--mx)_var(--my),rgba(216,198,168,0.12),transparent_68%)] transition-opacity duration-300" />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 62%, rgba(42, 63, 106, 0.55) 0%, transparent 56%), radial-gradient(ellipse at 82% 18%, rgba(216, 198, 168, 0.10) 0%, transparent 36%)',
        }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(rgba(216,198,168,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(216,198,168,0.18)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="absolute left-[16%] top-[14%] w-[520px] h-[520px] rounded-full border border-champagne/10 pointer-events-none hero-orbit" />
      <div className="absolute right-[9%] bottom-[12%] w-[320px] h-[320px] rounded-full border border-white/5 pointer-events-none hero-orbit-slow" />
      <LogoMark
        variant="dark"
        className="hero-floating-mark absolute left-[8%] top-[18%] w-24 h-24 text-white opacity-[0.055] pointer-events-none"
      />
      <LogoMark
        variant="dark"
        className="hero-floating-mark hero-floating-mark-delay absolute right-[26%] bottom-[22%] w-20 h-20 opacity-[0.045] pointer-events-none"
      />
      <div className="absolute right-[9%] top-[18%] hidden xl:block pointer-events-none">
        <div className="relative w-[360px] h-[360px]">
          <div className="absolute inset-0 rounded-full border border-champagne/10" />
          <div className="absolute inset-10 rounded-full border border-champagne/5" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-champagne/20 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
          <LogoMark
            variant="dark"
            className="hero-logo-watermark absolute top-1/2 left-1/2 w-[210px] h-[210px] -translate-x-1/2 -translate-y-1/2 opacity-[0.085]"
          />
        </div>
      </div>
      <div className="absolute right-[7%] top-[26%] hidden 2xl:block z-[2]">
        <LogoKineticMark />
      </div>
      <div className="absolute left-0 bottom-0 w-full h-44 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent pointer-events-none" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Content overlay */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-[100dvh] flex flex-col justify-end pt-28 pb-16 md:pb-24 pointer-events-none"
        style={{ padding: '0 clamp(20px, 4vw, 60px)' }}
      >
        <div className="absolute top-[112px] left-5 md:left-10 lg:left-16 hidden md:flex hero-seal opacity-0 items-center gap-4 rounded-full border border-champagne/15 bg-navy-deep/35 px-4 py-2 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_18px_rgba(216,198,168,0.75)]" />
          <span className="label-uppercase text-white/50 tracking-[0.2em]">
            Atendimento direto com Matheus Giovanne
          </span>
        </div>

        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[720px]">
            <p className="hero-label label-uppercase text-champagne/80 opacity-0">
              Advocacia Estratégica
            </p>

            <h1
              className="hero-headline font-serif text-white mt-4 md:mt-5 leading-[1.0] tracking-[-0.02em] opacity-0"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              }}
            >
              Orientação jurídica com técnica, clareza e responsabilidade
            </h1>

            <p
              className="hero-subheadline font-sans text-slate mt-5 md:mt-6 max-w-[520px] leading-relaxed opacity-0"
              style={{
                fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              }}
            >
              Atuação consultiva e contenciosa para pessoas e empresas que
              buscam segurança em decisões relevantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
              <button
                onClick={() => scrollTo('#contato')}
                className="hero-cta btn-primary pointer-events-auto opacity-0"
              >
                Falar com Matheus
              </button>
              <button
                onClick={() => scrollTo('#areas')}
                className="hero-cta btn-secondary pointer-events-auto opacity-0"
              >
                Conhecer áreas de atuação
              </button>
            </div>

            <div className="hero-seal opacity-0 mt-10 grid grid-cols-3 max-w-[520px] border-y border-champagne/10 divide-x divide-champagne/10">
              {[
                ['17+', 'anos'],
                ['500+', 'casos'],
                ['1:1', 'atendimento'],
              ].map(([value, label]) => (
                <div key={label} className="py-4 px-4 first:pl-0">
                  <p className="font-serif text-champagne text-2xl leading-none">{value}</p>
                  <p className="label-uppercase text-white/35 mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-seal absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <span className="label-uppercase text-white/40 tracking-[0.18em]">Scroll</span>
          <div className="w-px h-10 overflow-hidden relative">
            <div
              className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-champagne/70 to-transparent"
              style={{ animation: 'scrollDrop 1.6s ease-in-out infinite' }}
            />
          </div>
        </div>

        {/* Trust Seal */}
        <div className="hero-seal absolute bottom-6 right-5 md:right-10 lg:right-16 opacity-0">
          <span className="label-uppercase text-white/40">
            Atendimento no RN | Desde 2008
          </span>
        </div>
      </div>
      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes orbitPulse {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.05); opacity: 0.25; }
        }
        @keyframes orbitPulseSlow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.55; }
          50% { transform: scale(1.08) rotate(8deg); opacity: 0.2; }
        }
        .hero-orbit {
          animation: orbitPulse 8s ease-in-out infinite;
        }
        .hero-orbit-slow {
          animation: orbitPulseSlow 12s ease-in-out infinite;
        }
        .hero-logo-watermark .logo-m,
        .hero-logo-watermark .logo-g,
        .hero-logo-watermark .logo-oath,
        .hero-floating-mark .logo-m,
        .hero-floating-mark .logo-g,
        .hero-floating-mark .logo-oath {
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: heroLogoDraw 3.2s ease-in-out infinite alternate;
        }
        .hero-logo-watermark .logo-g,
        .hero-floating-mark .logo-g {
          animation-delay: 0.2s;
        }
        .hero-logo-watermark .logo-oath,
        .hero-floating-mark .logo-oath {
          animation-delay: 0.45s;
        }
        .hero-logo-watermark .logo-dot,
        .hero-floating-mark .logo-dot {
          transform-origin: 86px 84px;
          animation: heroDotPulse 2.8s ease-in-out infinite;
        }
        .hero-floating-mark {
          animation: floatMark 9s ease-in-out infinite;
        }
        .hero-floating-mark-delay {
          animation-delay: -4s;
        }
        @keyframes heroLogoDraw {
          0% { stroke-dashoffset: 190; opacity: 0.35; }
          42%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes heroDotPulse {
          0%, 100% { transform: scale(0.85); opacity: 0.5; }
          50% { transform: scale(1.35); opacity: 1; }
        }
        @keyframes floatMark {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(10px, -18px, 0) rotate(3deg); }
        }
      `}</style>
    </section>
  );
}
