import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Headset, 
  ShieldCheck, 
  Menu, 
  X, 
  FileCode2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onOpenWordPressModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenWordPressModal, 
  onOpenQuoteModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs bg-white">
      {/* Top Industrial Bar (Indusc Style) */}
      <div className="bg-[#121519] text-[#eaf0f2] text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-[#1867ff]" />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Mail className="w-3.5 h-3.5 text-[#1867ff]" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.email}
              </a>
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#1867ff]" />
              {COMPANY_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Headset className="w-3.5 h-3.5 text-[#1867ff]" />
              {COMPANY_INFO.contactApproach}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-wide text-[#1867ff] uppercase">
                {COMPANY_INFO.crea}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark (1-Line Contract) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-[#1867ff] flex items-center justify-center text-white shadow-sm group-hover:bg-[#0e56dc] transition-colors">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#121519] leading-tight group-hover:text-[#1867ff] transition-colors whitespace-nowrap">
                KLEBER FRANCISCO
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#677280] whitespace-nowrap">
                Soluções em Engenharias
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#121519]">
            <a href="#inicio" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">Início</a>
            <a href="#sobre" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">Sobre</a>
            <a href="#solucoes" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">Soluções</a>
            <a href="#diferenciais" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">Diferenciais</a>
            <a href="#calculadora" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">Orçamento</a>
            <a href="#artigos" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">Artigos</a>
            <a href="#faq" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">FAQ</a>
            <a href="#contato" className="hover:text-[#1867ff] transition-colors whitespace-nowrap">Contato</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* WordPress Export Button */}
            <button
              onClick={onOpenWordPressModal}
              className="px-3.5 py-2 text-xs font-semibold text-[#1867ff] bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              title="Ver código WordPress & Elementor Template Kit"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Kit WordPress</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1867ff] hover:bg-[#0e56dc] rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenWordPressModal}
              className="px-2.5 py-1.5 text-xs font-semibold text-[#1867ff] bg-blue-50 rounded-md border border-blue-200"
              title="Kit WordPress"
            >
              <FileCode2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Sobre o Engenheiro
            </a>
            <a 
              href="#solucoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Soluções & NRs
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Diferenciais Técnicos
            </a>
            <a 
              href="#calculadora" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Simulador de Orçamento
            </a>
            <a 
              href="#artigos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Artigos & E-books
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Perguntas Frequentes
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-slate-100 hover:text-[#1867ff]"
            >
              Contato
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#1867ff] rounded-lg shadow-sm"
            >
              Solicitar Orçamento com ART
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWordPressModal();
              }}
              className="w-full py-2 text-center text-xs font-semibold text-[#1867ff] bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center gap-1.5"
            >
              <FileCode2 className="w-4 h-4" />
              Ver Código do Tema WordPress / Elementor
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
