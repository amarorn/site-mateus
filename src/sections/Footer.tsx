import { useEffect, useRef } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router';
import { Logo } from '../components/Logo';

function RibbonCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let animId: number;
    let time = 0;

    interface RibbonData {
      points: { x: number; yBase: number; y: number; phase: number; speed: number; amplitude: number }[];
      color: [number, number, number];
      speed: number;
      phase: number;
    }

    let ribbons: RibbonData[] = [];

    function resize() {
      if (!canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx!.scale(dpr, dpr);
      createRibbons();
    }

    function createRibbons() {
      if (!canvas) return;
      ribbons = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = 3;

      for (let i = 0; i < count; i++) {
        const phase = (i / count) * Math.PI * 2;
        const yOffset = (Math.random() - 0.5) * h * 0.3;
        const speed = 0.3 + Math.random() * 0.3;
        const points: RibbonData['points'] = [];

        for (let j = 0; j < 20; j++) {
          points.push({
            x: (j / 19) * w,
            yBase: h * 0.7 + yOffset,
            y: 0,
            phase: phase + j * 0.5,
            speed: speed,
            amplitude: 30 + Math.random() * 50,
          });
        }

        ribbons.push({
          points,
          color: [0.847, 0.776, 0.659],
          speed,
          phase,
        });
      }
    }

    function updatePoints(t: number) {
      for (const ribbon of ribbons) {
        for (const p of ribbon.points) {
          p.y = p.yBase + Math.sin(t * p.speed * 0.001 + p.phase) * p.amplitude;
        }
      }
    }

    function drawRibbon(ribbon: RibbonData) {
      if (!ctx || !canvas) return;
      const points = ribbon.points;
      const width = 60;

      if (points.length < 3) return;

      const leftPoints: { x: number; y: number }[] = [];
      const rightPoints: { x: number; y: number }[] = [];

      for (let i = 1; i < points.length - 1; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const p2 = points[i + 1];

        const dx = p2.x - p0.x;
        const dy = p2.y - p0.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        const cw = width * (0.5 + 0.5 * Math.sin(i * 0.3 + ribbon.phase));

        leftPoints.push({ x: p1.x + nx * cw, y: p1.y + ny * cw });
        rightPoints.push({ x: p1.x - nx * cw, y: p1.y - ny * cw });
      }

      if (leftPoints.length === 0) return;

      const r = Math.floor(ribbon.color[0] * 255);
      const g = Math.floor(ribbon.color[1] * 255);
      const b = Math.floor(ribbon.color[2] * 255);

      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.12)`;
      ctx.beginPath();
      ctx.moveTo(leftPoints[0].x, leftPoints[0].y);
      for (let i = 1; i < leftPoints.length; i++) {
        ctx.lineTo(leftPoints[i].x, leftPoints[i].y);
      }
      ctx.lineTo(
        rightPoints[rightPoints.length - 1].x,
        rightPoints[rightPoints.length - 1].y
      );
      for (let i = rightPoints.length - 2; i >= 0; i--) {
        ctx.lineTo(rightPoints[i].x, rightPoints[i].y);
      }
      ctx.closePath();
      ctx.fill();
    }

    function draw() {
      if (!ctx || !canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      time += 16;
      updatePoints(time);

      for (const ribbon of ribbons) {
        drawRibbon(ribbon);
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-navy pt-16 md:pt-20 pb-8 overflow-hidden">
      {/* Ribbon Background */}
      <RibbonCanvas />

      {/* Content */}
      <div className="relative z-10 content-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Logo variant="dark" stacked className="h-20 w-auto" />
            <p className="font-sans text-slate text-sm mt-4">Registro OAB</p>
            <p className="font-sans text-slate text-sm">
              Rio Grande do Norte | Online
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-white font-medium text-sm mb-4">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Áreas de Atuação', href: '#areas' },
                { label: 'Artigos', href: '#artigos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-slate text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/areas"
                  className="font-sans text-slate text-sm hover:text-white transition-colors duration-200"
                >
                  Todas as áreas
                </Link>
              </li>
              <li>
                <Link
                  to="/artigos"
                  className="font-sans text-slate text-sm hover:text-white transition-colors duration-200"
                >
                  Todos os artigos
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-sans text-white font-medium text-sm mb-4">
              Áreas de Atuação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Direito Civil',
                'Direito Empresarial',
                'Direito Trabalhista',
                'Direito de Família',
                'Direito Imobiliário',
                'Direito do Consumidor',
              ].map((area) => (
                <li key={area}>
                  <span className="font-sans text-slate text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-white font-medium text-sm mb-4">
              Informações Legais
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="/privacidade"
                  className="font-sans text-slate text-sm cursor-pointer hover:text-white transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="font-sans text-slate text-sm cursor-pointer hover:text-white transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
            <p className="font-sans text-slate/50 text-[11px] leading-relaxed mt-4 max-w-[280px]">
              As informações deste site têm caráter informativo e não
              substituem consulta jurídica individual.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate/20 my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-slate text-xs text-center sm:text-left">
            © 2026 Matheus Giovanne Advocacia. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
