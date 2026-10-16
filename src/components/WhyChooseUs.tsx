import React from 'react';
import { ShieldCheck, Gauge, Clock, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] mb-2">
            <span>Diferenciais da Engenharia</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">Por que Empresas Confiam na Nossa Equipe</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121519] tracking-tight [text-wrap:balance]">
            Engenharia que Protege Vidas e Viabiliza Negócios
          </h2>
          <p className="mt-3 text-sm text-[#677280] leading-relaxed">
            Unimos o mais elevado padrão técnico normativo com uma visão prática de chão de fábrica, evitando paralisações desnecessárias e assegurando total respaldo jurídico para sua gestão.
          </p>
        </div>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="p-6 rounded-xl border border-slate-200 bg-[#f7f9fa] hover:border-[#1867ff] transition-all hover:bg-white hover:shadow-md group">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1867ff] flex items-center justify-center mb-4 group-hover:bg-[#1867ff] group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#121519] mb-2">
              Rigor Normativo & ART
            </h3>
            <p className="text-xs sm:text-sm text-[#677280] leading-relaxed">
              100% dos laudos e vistorias acompanhados de Anotação de Responsabilidade Técnica registrada no CREA, garantindo validade perante qualquer fiscalização.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl border border-slate-200 bg-[#f7f9fa] hover:border-[#1867ff] transition-all hover:bg-white hover:shadow-md group">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1867ff] flex items-center justify-center mb-4 group-hover:bg-[#1867ff] group-hover:text-white transition-colors">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#121519] mb-2">
              Instrumentação Calibrada
            </h3>
            <p className="text-xs sm:text-sm text-[#677280] leading-relaxed">
              Utilização de câmeras termográficas de alta resolução e terrômetros digitais com certificados RBC vigentes para diagnósticos quantitativos incontestáveis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl border border-slate-200 bg-[#f7f9fa] hover:border-[#1867ff] transition-all hover:bg-white hover:shadow-md group">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1867ff] flex items-center justify-center mb-4 group-hover:bg-[#1867ff] group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#121519] mb-2">
              Zero Paradas Produtivas
            </h3>
            <p className="text-xs sm:text-sm text-[#677280] leading-relaxed">
              Metodologia de adequação modular: planejamos projetos para intervenções programadas em janelas de manutenção, mantendo a fábrica faturando.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-xl border border-slate-200 bg-[#f7f9fa] hover:border-[#1867ff] transition-all hover:bg-white hover:shadow-md group">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1867ff] flex items-center justify-center mb-4 group-hover:bg-[#1867ff] group-hover:text-white transition-colors">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#121519] mb-2">
              Visão Forense & Judicial
            </h3>
            <p className="text-xs sm:text-sm text-[#677280] leading-relaxed">
              Experiência comprovada como Perito Judicial dos tribunais, antecipando vulnerabilidades e construindo laudos com robustez jurídica de ponta.
            </p>
          </div>
        </div>

        {/* Case Studies Banner (Indusc Project Highlights) */}
        <div className="bg-[#121519] rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Casos de Sucesso Comprovados
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  Resultados Reais em Indústrias Atendidas
                </h3>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#1867ff] hover:bg-[#0e56dc] text-white rounded-lg transition-colors flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>Adequar Minha Empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CASE_STUDIES.map(cs => (
                <div key={cs.id} className="p-5 bg-[#202c3c]/80 border border-slate-700 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      {cs.clientType}
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {cs.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {cs.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-700/80 flex items-center gap-2 text-xs font-semibold text-blue-300">
                    <CheckCircle className="w-4 h-4 text-[#1867ff] shrink-0" />
                    <span>{cs.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
