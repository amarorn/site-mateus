import { LogoMark } from './Logo';

export function LogoKineticMark() {
  return (
    <div className="kinetic-scene" aria-hidden="true">
      <div className="kinetic-axis kinetic-axis-a" />
      <div className="kinetic-axis kinetic-axis-b" />
      <div className="kinetic-orbit" />
      <LogoMark variant="dark" className="kinetic-mark kinetic-shadow" />
      <LogoMark variant="dark" className="kinetic-mark kinetic-main" />
      <div className="kinetic-glint" />
      <div className="kinetic-caption">MG / JURAMENTO</div>

      <style>{`
        .kinetic-scene {
          position: relative;
          width: min(30vw, 380px);
          aspect-ratio: 1;
          pointer-events: none;
          isolation: isolate;
        }

        .kinetic-scene::before {
          content: '';
          position: absolute;
          inset: 18%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(216,198,168,0.12), transparent 64%);
          filter: blur(18px);
          animation: kineticBreath 6s ease-in-out infinite;
        }

        .kinetic-axis {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 86%;
          height: 1px;
          transform-origin: center;
          background: linear-gradient(90deg, transparent, rgba(216,198,168,0.34), transparent);
          opacity: 0.46;
        }

        .kinetic-axis-a {
          transform: translate(-50%, -50%) rotate(-22deg);
        }

        .kinetic-axis-b {
          transform: translate(-50%, -50%) rotate(68deg);
          opacity: 0.18;
        }

        .kinetic-orbit {
          position: absolute;
          inset: 13%;
          border-radius: 999px;
          border: 1px solid rgba(216,198,168,0.18);
          transform: rotate(-16deg) scaleX(1.22);
          animation: kineticOrbit 18s linear infinite;
        }

        .kinetic-orbit::after {
          content: '';
          position: absolute;
          right: 15%;
          top: 5%;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #D8C6A8;
          box-shadow: 0 0 22px rgba(216,198,168,0.65);
        }

        .kinetic-mark {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 48%;
          height: 48%;
          transform: translate(-50%, -50%);
        }

        .kinetic-shadow {
          opacity: 0.16;
          transform: translate(calc(-50% + 10px), calc(-50% + 14px));
          filter: blur(1px);
        }

        .kinetic-main {
          opacity: 1;
          filter:
            drop-shadow(0 18px 26px rgba(0,0,0,0.26))
            drop-shadow(0 0 18px rgba(216,198,168,0.10));
          animation: kineticSettle 7s ease-in-out infinite;
        }

        .kinetic-main .logo-m,
        .kinetic-main .logo-g,
        .kinetic-main .logo-oath {
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: kineticDraw 5.8s cubic-bezier(.19,1,.22,1) infinite;
        }

        .kinetic-main .logo-g {
          animation-delay: 0.18s;
        }

        .kinetic-main .logo-oath {
          animation-delay: 0.36s;
        }

        .kinetic-main .logo-dot {
          transform-origin: 86px 84px;
          animation: kineticDot 5.8s cubic-bezier(.19,1,.22,1) infinite;
        }

        .kinetic-glint {
          position: absolute;
          left: 18%;
          top: 47%;
          width: 64%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.72), rgba(216,198,168,0.85), transparent);
          transform: rotate(-18deg) translateX(-42%);
          opacity: 0;
          animation: kineticGlint 5.8s ease-in-out infinite;
        }

        .kinetic-caption {
          position: absolute;
          left: 50%;
          bottom: 9%;
          transform: translateX(-50%);
          font-family: Inter, system-ui, sans-serif;
          font-size: 9px;
          letter-spacing: 0.36em;
          color: rgba(216,198,168,0.42);
          white-space: nowrap;
        }

        @keyframes kineticDraw {
          0% { stroke-dashoffset: 190; opacity: 0.28; }
          36%, 82% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.78; }
        }

        @keyframes kineticDot {
          0%, 25% { transform: scale(0); opacity: 0; }
          42% { transform: scale(1.34); opacity: 1; }
          56%, 100% { transform: scale(1); opacity: 1; }
        }

        @keyframes kineticSettle {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -52%) scale(1.025); }
        }

        @keyframes kineticGlint {
          0%, 46%, 100% { opacity: 0; transform: rotate(-18deg) translateX(-42%); }
          58% { opacity: 0.72; }
          72% { opacity: 0; transform: rotate(-18deg) translateX(42%); }
        }

        @keyframes kineticOrbit {
          to { transform: rotate(344deg) scaleX(1.22); }
        }

        @keyframes kineticBreath {
          0%, 100% { opacity: 0.38; transform: scale(0.92); }
          50% { opacity: 0.72; transform: scale(1.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .kinetic-scene::before,
          .kinetic-orbit,
          .kinetic-main,
          .kinetic-main .logo-m,
          .kinetic-main .logo-g,
          .kinetic-main .logo-oath,
          .kinetic-main .logo-dot,
          .kinetic-glint {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}