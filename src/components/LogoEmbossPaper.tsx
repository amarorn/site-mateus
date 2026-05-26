import { LogoMark } from './Logo';

export function LogoEmbossPaper() {
  return (
    <div className="emboss-scene" aria-hidden="true">
      <div className="emboss-paper">
        <div className="emboss-paper-texture" />
        <div className="emboss-light" />
        <LogoMark variant="light" className="emboss-logo emboss-shadow" />
        <LogoMark variant="light" className="emboss-logo emboss-highlight" />
        <LogoMark variant="light" className="emboss-logo emboss-main" />
        <div className="emboss-seal" />
      </div>

      <style>{`
        .emboss-scene {
          width: min(34vw, 420px);
          aspect-ratio: 1.24;
          perspective: 1000px;
          pointer-events: none;
        }

        .emboss-paper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 28px;
          overflow: hidden;
          transform: rotateX(62deg) rotateZ(-12deg);
          animation: embossFloat 8s ease-in-out infinite;
          background:
            radial-gradient(circle at 24% 18%, rgba(255,255,255,0.94), transparent 34%),
            linear-gradient(135deg, #fbf7ee 0%, #e7dcc8 48%, #cdbfA5 100%);
          box-shadow:
            0 44px 90px rgba(0,0,0,0.34),
            inset 0 1px 0 rgba(255,255,255,0.92),
            inset 0 -28px 70px rgba(28,43,72,0.08);
        }

        .emboss-paper::before {
          content: '';
          position: absolute;
          inset: 8%;
          border: 1px solid rgba(28,43,72,0.08);
          border-radius: 20px;
        }

        .emboss-paper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 18%, rgba(255,255,255,0.52) 34%, transparent 47%);
          transform: translateX(-78%);
          animation: embossSweep 6s ease-in-out infinite;
        }

        .emboss-paper-texture {
          position: absolute;
          inset: 0;
          opacity: 0.26;
          background:
            linear-gradient(rgba(28,43,72,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,43,72,0.045) 1px, transparent 1px);
          background-size: 28px 28px;
          mix-blend-mode: multiply;
        }

        .emboss-light {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 32% 24%, rgba(255,255,255,0.54), transparent 34%);
        }

        .emboss-logo {
          position: absolute;
          width: 44%;
          height: 44%;
          left: 28%;
          top: 27%;
        }

        .emboss-logo .logo-m,
        .emboss-logo .logo-g,
        .emboss-logo .logo-oath {
          stroke-width: 3.4;
        }

        .emboss-shadow {
          opacity: 0.22;
          transform: translate(4px, 5px);
          filter: blur(0.4px);
        }

        .emboss-shadow .logo-m,
        .emboss-shadow .logo-g,
        .emboss-shadow .logo-oath {
          stroke: rgba(28,43,72,0.34);
        }

        .emboss-shadow .logo-dot {
          fill: rgba(28,43,72,0.34);
        }

        .emboss-highlight {
          opacity: 0.52;
          transform: translate(-3px, -3px);
          filter: blur(0.2px);
        }

        .emboss-highlight .logo-m,
        .emboss-highlight .logo-g,
        .emboss-highlight .logo-oath {
          stroke: rgba(255,255,255,0.9);
        }

        .emboss-highlight .logo-dot {
          fill: rgba(255,255,255,0.9);
        }

        .emboss-main {
          opacity: 0.2;
          mix-blend-mode: multiply;
        }

        .emboss-main .logo-m,
        .emboss-main .logo-g,
        .emboss-main .logo-oath {
          stroke: rgba(28,43,72,0.72);
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: embossDraw 5.4s ease-in-out infinite;
        }

        .emboss-main .logo-g {
          animation-delay: 0.16s;
        }

        .emboss-main .logo-oath {
          animation-delay: 0.32s;
        }

        .emboss-main .logo-dot {
          fill: rgba(28,43,72,0.6);
          transform-origin: 86px 84px;
          animation: embossDot 5.4s ease-in-out infinite;
        }

        .emboss-seal {
          position: absolute;
          left: 50%;
          bottom: 13%;
          width: 36%;
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(28,43,72,0.14), transparent);
        }

        @keyframes embossFloat {
          0%, 100% { transform: rotateX(62deg) rotateZ(-12deg) translate3d(0, 0, 0); }
          50% { transform: rotateX(59deg) rotateZ(-8deg) translate3d(0, -10px, 0); }
        }

        @keyframes embossSweep {
          0%, 48%, 100% { transform: translateX(-78%); opacity: 0; }
          62% { opacity: 0.56; }
          76% { transform: translateX(78%); opacity: 0; }
        }

        @keyframes embossDraw {
          0% { stroke-dashoffset: 190; opacity: 0.1; }
          36%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes embossDot {
          0%, 24% { transform: scale(0); opacity: 0; }
          42% { transform: scale(1.28); opacity: 1; }
          58%, 100% { transform: scale(1); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .emboss-paper,
          .emboss-paper::after,
          .emboss-main .logo-m,
          .emboss-main .logo-g,
          .emboss-main .logo-oath,
          .emboss-main .logo-dot {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}