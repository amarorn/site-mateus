import { LogoMark } from './Logo';

export function Logo3D() {
  return (
    <div className="logo-3d-scene" aria-hidden="true">
      <div className="logo-3d-stage">
        <div className="logo-3d-halo" />
        <div className="logo-3d-card">
          <div className="logo-3d-glass" />
          <div className="logo-3d-grid" />
          <LogoMark variant="dark" className="logo-3d-mark logo-3d-depth-1" />
          <LogoMark variant="dark" className="logo-3d-mark logo-3d-depth-2" />
          <LogoMark variant="dark" className="logo-3d-mark logo-3d-depth-3" />
          <LogoMark variant="dark" className="logo-3d-mark logo-3d-main" />
          <div className="logo-3d-line logo-3d-line-a" />
          <div className="logo-3d-line logo-3d-line-b" />
        </div>
        <div className="logo-3d-shadow" />
      </div>

      <style>{`
        .logo-3d-scene {
          width: min(34vw, 430px);
          aspect-ratio: 1;
          perspective: 1100px;
          pointer-events: none;
        }

        .logo-3d-stage {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: logoSceneFloat 8s ease-in-out infinite;
        }

        .logo-3d-card {
          position: absolute;
          inset: 10%;
          border-radius: 34px;
          transform-style: preserve-3d;
          transform: rotateX(58deg) rotateZ(-18deg);
          animation: logoGlassTurn 10s ease-in-out infinite;
          border: 1px solid rgba(216,198,168,0.25);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.025)),
            linear-gradient(180deg, rgba(28,43,72,0.16), rgba(13,21,37,0.34));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.28),
            inset 0 -20px 60px rgba(216,198,168,0.05),
            0 42px 90px rgba(0,0,0,0.34);
          backdrop-filter: blur(14px);
          overflow: hidden;
        }

        .logo-3d-glass {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            radial-gradient(circle at 28% 22%, rgba(255,255,255,0.28), transparent 28%),
            linear-gradient(120deg, transparent 18%, rgba(255,255,255,0.22) 34%, transparent 47%);
          opacity: 0.72;
          transform: translateZ(18px);
        }

        .logo-3d-grid {
          position: absolute;
          inset: 12%;
          border-radius: 24px;
          opacity: 0.18;
          background:
            linear-gradient(rgba(216,198,168,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(216,198,168,0.35) 1px, transparent 1px);
          background-size: 34px 34px;
          transform: translateZ(12px);
        }

        .logo-3d-mark {
          position: absolute;
          width: 46%;
          height: 46%;
          left: 27%;
          top: 25%;
          filter: drop-shadow(0 18px 22px rgba(0,0,0,0.25));
          transform-style: preserve-3d;
        }

        .logo-3d-depth-1 {
          opacity: 0.12;
          transform: translateZ(22px) translate(10px, 10px);
        }

        .logo-3d-depth-2 {
          opacity: 0.18;
          transform: translateZ(34px) translate(6px, 6px);
        }

        .logo-3d-depth-3 {
          opacity: 0.26;
          transform: translateZ(46px) translate(3px, 3px);
        }

        .logo-3d-main {
          opacity: 0.98;
          transform: translateZ(64px);
        }

        .logo-3d-main .logo-m,
        .logo-3d-main .logo-g,
        .logo-3d-main .logo-oath {
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: logo3DDraw 4.8s ease-in-out infinite;
        }

        .logo-3d-main .logo-g {
          animation-delay: 0.18s;
        }

        .logo-3d-main .logo-oath {
          animation-delay: 0.36s;
        }

        .logo-3d-main .logo-dot {
          transform-origin: 86px 84px;
          animation: logo3DDot 4.8s ease-in-out infinite;
        }

        .logo-3d-line {
          position: absolute;
          height: 1px;
          width: 72%;
          left: 14%;
          background: linear-gradient(90deg, transparent, rgba(216,198,168,0.7), transparent);
          transform: translateZ(72px);
          opacity: 0.45;
        }

        .logo-3d-line-a {
          top: 34%;
          animation: logoLineSweep 5.4s ease-in-out infinite;
        }

        .logo-3d-line-b {
          bottom: 30%;
          animation: logoLineSweep 5.4s ease-in-out 1.2s infinite;
        }

        .logo-3d-halo {
          position: absolute;
          inset: 12%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(216,198,168,0.16), transparent 62%);
          filter: blur(14px);
          animation: logoHaloPulse 5.2s ease-in-out infinite;
        }

        .logo-3d-shadow {
          position: absolute;
          left: 18%;
          right: 18%;
          bottom: 4%;
          height: 16%;
          border-radius: 999px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.38), transparent 68%);
          filter: blur(18px);
          animation: logoShadowFloat 8s ease-in-out infinite;
        }

        @keyframes logoSceneFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }

        @keyframes logoGlassTurn {
          0%, 100% { transform: rotateX(58deg) rotateZ(-18deg) rotateY(-10deg); }
          50% { transform: rotateX(54deg) rotateZ(-11deg) rotateY(13deg); }
        }

        @keyframes logo3DDraw {
          0% { stroke-dashoffset: 190; opacity: 0.25; }
          34%, 78% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 190; opacity: 0.35; }
        }

        @keyframes logo3DDot {
          0%, 22% { transform: scale(0); opacity: 0; }
          42% { transform: scale(1.35); opacity: 1; }
          56%, 100% { transform: scale(1); opacity: 1; }
        }

        @keyframes logoLineSweep {
          0%, 100% { transform: translateZ(72px) translateX(-32%) rotate(-12deg); opacity: 0; }
          38%, 62% { opacity: 0.48; }
          50% { transform: translateZ(72px) translateX(32%) rotate(-12deg); }
        }

        @keyframes logoHaloPulse {
          0%, 100% { opacity: 0.45; transform: scale(0.92); }
          50% { opacity: 0.85; transform: scale(1.06); }
        }

        @keyframes logoShadowFloat {
          0%, 100% { transform: scale(1); opacity: 0.62; }
          50% { transform: scale(0.86); opacity: 0.38; }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-3d-stage,
          .logo-3d-card,
          .logo-3d-main .logo-m,
          .logo-3d-main .logo-g,
          .logo-3d-main .logo-oath,
          .logo-3d-main .logo-dot,
          .logo-3d-line,
          .logo-3d-halo,
          .logo-3d-shadow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}