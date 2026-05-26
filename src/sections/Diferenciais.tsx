import { Eye, LockKeyhole, MessageCircle, Scale } from 'lucide-react';
import { LogoMark } from '../components/Logo';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DIFERENCIAIS = [
  {
    icon: MessageCircle,
    title: 'Atendimento direto pelo advogado',
    text: 'O contato é conduzido diretamente por Matheus, sem camadas desnecessárias.',
  },
  {
    icon: Eye,
    title: 'Comunicação clara',
    text: 'Explicações objetivas sobre riscos, possibilidades e próximos passos.',
  },
  {
    icon: Scale,
    title: 'Análise técnica individual',
    text: 'Cada demanda é examinada conforme documentos, contexto e objetivo do cliente.',
  },
  {
    icon: LockKeyhole,
    title: 'Sigilo e responsabilidade',
    text: 'Tratamento cuidadoso das informações e respeito às normas éticas da advocacia.',
  },
];

export function Diferenciais() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 28 });

  return (
    <section className="bg-offwhite section-padding overflow-hidden">
      <div className="content-max">
        <div
          ref={sectionRef}
          className="relative rounded-[28px] bg-navy-deep p-6 md:p-10 lg:p-12 overflow-hidden"
        >
          <div className="absolute right-[-40px] top-[-40px] w-80 h-80 rounded-full border border-champagne/10" />
          <LogoMark
            variant="dark"
            className="absolute right-8 bottom-8 w-32 h-32 opacity-[0.045] hidden md:block"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-14 items-start">
            <div>
              <span className="label-uppercase text-champagne">
                DIFERENCIAIS PESSOAIS
              </span>
              <h2
                className="font-serif text-white mt-3 leading-[1.1] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
              >
                Proximidade, técnica e responsabilidade
              </h2>
              <p className="font-sans text-slate leading-relaxed mt-5">
                Um atendimento jurídico individual permite compreender melhor a
                situação do cliente e construir uma orientação mais precisa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIFERENCIAIS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <item.icon
                    className="text-champagne"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-sans text-white font-medium mt-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-slate text-sm leading-relaxed mt-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}