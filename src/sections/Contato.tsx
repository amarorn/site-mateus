import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  area: string;
  descricao: string;
  lgpd: boolean;
}

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 84 99660-2244',
    href: 'tel:+5584996602244',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@matheusgiovanne.com.br',
    href: 'mailto:contato@matheusgiovanne.com.br',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Atendimento no Rio Grande do Norte e online',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Segunda a Sexta, 9h às 18h',
    href: undefined,
  },
];

const AREAS_SELECT = [
  'Direito Civil',
  'Direito Empresarial',
  'Direito Trabalhista',
  'Direito de Família',
  'Direito Imobiliário',
  'Direito do Consumidor',
  'Consultoria Preventiva',
  'Outro',
];

export function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    area: '',
    descricao: '',
    lgpd: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpd) return;

    setStatus('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contato" className="bg-offwhite section-padding">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div ref={leftRef}>
            <span className="label-uppercase text-slate">CONTATO</span>
            <h2
              className="font-serif text-navy mt-3 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Fale com Matheus Giovanne
            </h2>

            <p
              className="font-sans text-slate leading-relaxed mt-5 max-w-[480px]"
              style={{
                fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              }}
            >
              Matheus está disponível para ouvir sua necessidade e avaliar como
              pode ajudar. O primeiro contato é sem compromisso.
            </p>

            {/* Contact Methods */}
            <div className="flex flex-col gap-5 mt-10 border-t border-navy/10 pt-8">
              {CONTACT_METHODS.map((method) => (
                <div key={method.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded border border-navy/15 flex items-center justify-center mt-0.5">
                    <method.icon
                      className="text-navy/60"
                      size={14}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-sans text-navy font-medium text-sm">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="font-sans text-slate text-sm hover:text-navy transition-colors"
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-sans text-slate text-sm">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5584996602244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-7 py-3.5 rounded-full font-sans text-sm font-medium text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Right Column - Form */}
          <div ref={rightRef}>
            {status === 'success' ? (
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-[0_4px_24px_rgba(28,43,72,0.08)] flex flex-col items-center justify-center min-h-[400px] text-center">
                <CheckCircle className="text-champagne" size={48} strokeWidth={1.5} />
                <h3 className="font-serif text-navy text-xl mt-6">
                  Mensagem enviada com sucesso
                </h3>
                <p className="font-sans text-slate text-sm mt-3">
                  Matheus retornará em breve.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      nome: '',
                      email: '',
                      telefone: '',
                      area: '',
                      descricao: '',
                      lgpd: false,
                    });
                  }}
                  className="btn-outline-champagne mt-6"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 md:p-10 shadow-[0_4px_24px_rgba(28,43,72,0.08)]"
              >
                <div className="flex flex-col gap-5">
                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="nome"
                      className="block font-sans text-navy text-sm font-medium mb-1.5"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full bg-offwhite border border-slate/30 rounded px-4 py-3 font-sans text-navy text-sm placeholder:text-slate/50 focus:border-champagne focus:ring-2 focus:ring-champagne/20 focus:outline-none transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-navy text-sm font-medium mb-1.5"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-offwhite border border-slate/30 rounded px-4 py-3 font-sans text-navy text-sm placeholder:text-slate/50 focus:border-champagne focus:ring-2 focus:ring-champagne/20 focus:outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block font-sans text-navy text-sm font-medium mb-1.5"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full bg-offwhite border border-slate/30 rounded px-4 py-3 font-sans text-navy text-sm placeholder:text-slate/50 focus:border-champagne focus:ring-2 focus:ring-champagne/20 focus:outline-none transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  {/* Área de interesse */}
                  <div>
                    <label
                      htmlFor="area"
                      className="block font-sans text-navy text-sm font-medium mb-1.5"
                    >
                      Área de interesse
                    </label>
                    <select
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full bg-offwhite border border-slate/30 rounded px-4 py-3 font-sans text-navy text-sm focus:border-champagne focus:ring-2 focus:ring-champagne/20 focus:outline-none transition-all appearance-none"
                    >
                      <option value="" disabled>
                        Selecione uma área
                      </option>
                      {AREAS_SELECT.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Descrição */}
                  <div>
                    <label
                      htmlFor="descricao"
                      className="block font-sans text-navy text-sm font-medium mb-1.5"
                    >
                      Descrição do caso
                    </label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      rows={4}
                      value={formData.descricao}
                      onChange={handleChange}
                      className="w-full bg-offwhite border border-slate/30 rounded px-4 py-3 font-sans text-navy text-sm placeholder:text-slate/50 focus:border-champagne focus:ring-2 focus:ring-champagne/20 focus:outline-none transition-all resize-none"
                      placeholder="Descreva brevemente sua necessidade..."
                    />
                  </div>

                  {/* LGPD */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="lgpd"
                      name="lgpd"
                      required
                      checked={formData.lgpd}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 rounded border-slate/30 text-champagne focus:ring-champagne/20"
                    />
                    <label
                      htmlFor="lgpd"
                      className="font-sans text-slate text-xs leading-relaxed"
                    >
                      Concordo com o tratamento dos meus dados conforme a{' '}
                      <button
                        type="button"
                        className="text-navy underline hover:text-champagne transition-colors"
                      >
                        Política de Privacidade
                      </button>
                      .
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-navy text-white font-sans text-sm font-medium py-3.5 rounded hover:bg-navy-light transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Enviar mensagem'
                    )}
                  </button>

                  {/* Disclaimer */}
                  <p className="font-sans text-slate/50 text-[11px] leading-relaxed text-center">
                    O envio de mensagem não estabelece automaticamente relação
                    advogado-cliente. As informações serão tratadas com
                    confidencialidade.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
