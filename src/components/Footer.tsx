import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Headset, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onOpenWordPressModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenWordPressModal, 
  onOpenQuoteModal 
}) => {
  return (
    <footer className="bg-[#121519] text-[#eaf0f2] border-t border-slate-800">
      {/* Top Banner (Indusc CTA strip) */}
      <div className="bg-[#1867ff] py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Precisa de Adequação à NR-12 ou Laudo Elétrico com ART?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Fale diretamente com o Engenheiro Especialista e receba sua proposta em até 24 horas úteis.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 bg-[#121519] hover:bg-[#202c3c] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Falar com o Engenheiro</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1867ff] flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-tight">
                  KLEBER FRANCISCO
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Soluções em Engenharias
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Engenharia Elétrica e Segurança do Trabalho com alto padrão técnico e respaldo jurídico. Projetos, vistorias, laudos com ART e perícias judiciais em todo o território nacional.
            </p>

            <div className="p-3 bg-[#202c3c] rounded-lg border border-slate-700 text-xs text-slate-300">
              <div className="font-bold text-white mb-0.5">{COMPANY_INFO.crea}</div>
              <div className="text-slate-400 text-[11px]">Habilitação plena para laudos, projetos e treinamentos normativos.</div>
            </div>
          </div>

          {/* Column 2: Useful Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre o Engenheiro</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Soluções & NRs</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">Simulador de Escopo</a>
              </li>
              <li>
                <a href="#artigos" className="hover:text-white transition-colors">Artigos Técnicos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Soluções de Engenharia (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Soluções Principais
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Adequação de Máquinas NR-12</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Termografia Elétrica Preditiva</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Laudo de SPDA / Para-Raios</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Regularização AVCB Bombeiros</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Laudos Ocupacionais (PGR / LTCAT)</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Perícias Judiciais & Assistência</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Treinamentos NR-10 e NR-35</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Atendimento (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento Técnico
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Headset className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contactApproach}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWordPressModal}
                className="w-full py-2 px-3 text-[11px] font-semibold text-blue-300 bg-[#202c3c] hover:bg-slate-800 rounded border border-slate-700 transition-colors"
              >
                Exportar Código WordPress / Elementor
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.brandName}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-200 cursor-pointer">Política de Privacidade</span>
            <span>·</span>
            <span className="hover:text-slate-200 cursor-pointer">Termos de Uso</span>
            <span>·</span>
            <span className="text-[#1867ff]">Design Industrial Indusc Kit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
