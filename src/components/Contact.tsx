import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Headset } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(initialService || 'Adequação NR-12');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Por favor, preencha os campos obrigatórios (Nome, E-mail e Telefone).');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-[#f7f9fa] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Coordinates & Information */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] mb-2">
              <span>Contato Direto</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Atendimento em Todo o Brasil</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121519] leading-tight mb-4 [text-wrap:balance]">
              Pronto para Elevar o Padrão de Segurança da sua Empresa?
            </h2>

            <p className="text-sm text-[#677280] leading-relaxed mb-8">
              Entre em contato para agendar uma vistoria técnica presencial ou remota, discutir o escopo do seu projeto ou tirar dúvidas sobre notificações fiscais e normas vigentes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">Telefone & WhatsApp</div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-sm sm:text-base font-bold text-[#121519] hover:text-[#1867ff] transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">E-mail Comercial</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm sm:text-base font-bold text-[#121519] hover:text-[#1867ff] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">Sede & Atendimento</div>
                  <div className="text-sm font-semibold text-[#121519]">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
                  <Headset className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">Atendimento</div>
                  <div className="text-sm font-semibold text-[#121519]">
                    {COMPANY_INFO.contactApproach}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Obrigado pelo contato, <strong>{name}</strong>. Nossa equipe técnica analisará sua necessidade e o Eng. Kleber Francisco entrará em contato em breve.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setCompany('');
                      setMessage('');
                    }}
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#121519] mb-4">
                  Envie Sua Mensagem para Análise Técnica
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Silva"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1867ff] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: carlos@empresa.com.br"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1867ff] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Telefone / Celular (com DDD) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (67) 99916-6740"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1867ff] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Nome da Empresa / Indústria
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex: Alfa Metais Indústria"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1867ff] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Solução de Interesse
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1867ff] focus:bg-white"
                  >
                    <option value="Adequação NR-12">Adequação à NR-12 (Máquinas e Equipamentos)</option>
                    <option value="Termografia Elétrica">Termografia Infravermelha em Painéis</option>
                    <option value="Laudo de SPDA">Laudo de SPDA & Aterramento (NBR 5419)</option>
                    <option value="Projetos de Incêndio / AVCB">Projetos de Incêndio / AVCB Bombeiros</option>
                    <option value="Laudos Ocupacionais (PGR/LTCAT)">Laudos Ocupacionais (PGR / LTCAT)</option>
                    <option value="Perícia Judicial / Assistência Técnica">Perícia Judicial / Assistência Técnica</option>
                    <option value="Treinamentos Normativos">Treinamentos Normativos In-Company</option>
                    <option value="Outro Serviço">Outro Serviço de Engenharia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Descreva Brevemente Sua Necessidade
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte-nos detalhes: quantidade de máquinas, se há notificação de fiscalização ou prazo desejado..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1867ff] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#1867ff] hover:bg-[#0e56dc] text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação de Orçamento</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
