import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Flame, 
  Zap, 
  FileCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  FileText,
  X,
  PhoneCall
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="solucoes" className="py-20 bg-[#f7f9fa] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Anti-Slop Clean Editorial) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] mb-2">
              <span>Soluções Industriais</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Conformidade e Alta Performance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121519] tracking-tight [text-wrap:balance]">
              Engenharia Orientada de Acordo com Suas Necessidades
            </h2>
            <p className="mt-3 text-sm text-[#677280] max-w-2xl leading-relaxed">
              Fornecemos soluções sob medida, perfeitamente alinhadas às exigências das Normas Regulamentadoras (NRs) e ABNT, com laudos assinados e ART registrada no CREA.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented Bar) */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-slate-200/80 rounded-lg shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-[#1867ff] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Todas as Soluções
            </button>
            <button
              onClick={() => setActiveCategory('seguranca')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'seguranca'
                  ? 'bg-white text-[#1867ff] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              NR-12 & Incêndio
            </button>
            <button
              onClick={() => setActiveCategory('eletrica')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'eletrica'
                  ? 'bg-white text-[#1867ff] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Elétrica & SPDA
            </button>
            <button
              onClick={() => setActiveCategory('laudos')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'laudos'
                  ? 'bg-white text-[#1867ff] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Laudos & Perícias
            </button>
            <button
              onClick={() => setActiveCategory('treinamento')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'treinamento'
                  ? 'bg-white text-[#1867ff] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Treinamentos
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:border-[#1867ff]"
            >
              {/* Service Card Image */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Clean Norm Overlay */}
                <div className="absolute top-3 left-3 bg-[#121519]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded border border-slate-700">
                  {service.norma}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                    <span>Emissão com ART</span>
                    <span aria-hidden="true">·</span>
                    <span>Conformidade ABNT</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#121519] group-hover:text-[#1867ff] transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#677280] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits Preview */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1867ff] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#1867ff] hover:text-[#0e56dc] flex items-center gap-1 group/btn"
                  >
                    <span>Especificação Completa</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-white bg-slate-100 hover:bg-[#1867ff] rounded-md transition-colors"
                  >
                    Orçar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Specification Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 my-8 animate-fadeIn">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1867ff]">
                  Norma de Referência: {selectedService.norma}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#121519] mt-1">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-6 text-sm text-slate-700 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
                  Descrição Técnica do Escopo
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
                  Vantagens & Benefícios para a Empresa
                </h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
                  Entregáveis Oficiais Inclusos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((d, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#1867ff] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Responsável Técnico: {COMPANY_INFO.engineer} ({COMPANY_INFO.crea})
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={() => {
                    const svc = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteModal(svc);
                  }}
                  className="w-1/2 sm:w-auto px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1867ff] hover:bg-[#0e56dc] rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Solicitar Proposta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
