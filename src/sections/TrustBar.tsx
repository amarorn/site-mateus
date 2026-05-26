import { Shield, MessageCircle, Compass, Lock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: 'Atendimento Técnico e Individualizado',
    description:
      'Cada caso recebe análise dedicada e estratégia personalizada.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicação Clara e Transparente',
    description: 'Acompanhamento constante com linguagem acessível.',
  },
  {
    icon: Compass,
    title: 'Atuação Preventiva e Estratégica',
    description: 'Antecipação de riscos e planejamento jurídico.',
  },
  {
    icon: Lock,
    title: 'Ética, Sigilo e Responsabilidade',
    description:
      'Compromisso absoluto com os princípios da advocacia.',
  },
];

export function TrustBar() {
  const ref = useScrollReveal<HTMLDivElement>({
    childSelector: '.trust-item',
    stagger: 0.1,
    y: 20,
  });

  return (
    <section className="bg-navy border-t border-champagne/15 py-12 md:py-14">
      <div
        ref={ref}
        className="content-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-slate/10"
      >
        {TRUST_ITEMS.map((item) => (
          <div key={item.title} className="trust-item flex gap-4 items-start lg:pl-8 first:lg:pl-0">
            <div className="flex-shrink-0 w-9 h-9 rounded-full border border-champagne/25 flex items-center justify-center mt-0.5">
              <item.icon
                className="text-champagne"
                size={16}
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h3 className="font-sans text-white font-medium text-sm md:text-base leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-slate text-xs md:text-sm mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
