import React from 'react';
import { Shield, Zap, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="inicio" className="relative bg-[#121519] text-white overflow-hidden">
      {/* Background Image with Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_industrial_engineering_1792124516783.jpg"
          alt="Engenharia Industrial e Segurança do Trabalho - Kleber Francisco"
          className="w-full h-full object-cover object-center brightness-75 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim Gradient (Indusc dark palette) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121519]/85 via-[#121519]/70 to-[#121519]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121519] via-transparent to-transparent opacity-60" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4">
            <span>Elétrica</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Segurança do Trabalho</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Perícias Judiciais</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-300">CREA com ART Válida</span>
          </div>

          {/* Master Headline (Text-Wrap Balance) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 [text-wrap:balance]">
            Impulsionando Projetos com <span className="text-[#1867ff]">Soluções Inovadoras</span> e Conformidade Legal
          </h1>

          {/* Narrative Body Prose from kleberfrancisco.com */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
            Soluções de engenharia embasadas em análises técnicas rigorosas para impulsionar a produtividade da sua indústria. Especialistas em adequação à NR-12, laudos de instalações elétricas, termografia e perícias judiciais com emissão de ART em todo o Brasil.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenQuoteModal}
              className="px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#1867ff] hover:bg-[#0e56dc] rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Solicitar Orçamento com ART</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#solucoes"
              className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-all duration-200 text-center"
            >
              Conhecer Nossas Soluções
            </a>
          </div>

          {/* Quick Authority Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1867ff] shrink-0" />
              <span>Laudos com ART válida no CREA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1867ff] shrink-0" />
              <span>Sem paralisar a produção</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1867ff] shrink-0" />
              <span>Perito Judicial Nomeado</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Pillar Industrial Feature Box (Indusc Signature Design Pattern) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Pillar 1 */}
          <div className="bg-[#202c3c] border border-slate-700/80 p-6 rounded-xl shadow-xl hover:border-[#1867ff] transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#1867ff]/20 text-[#1867ff] flex items-center justify-center group-hover:bg-[#1867ff] group-hover:text-white transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-slate-600 group-hover:text-blue-400/40 transition-colors font-mono">
                01
              </span>
            </div>
            <h2 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              Adequação à NR-12
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Apreciação de riscos HRN, projetos mecânicos e elétricos de segurança, cortinas de luz e laudo com ART válida em todo o Brasil.
            </p>
            <a href="#solucoes" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1867ff] hover:text-blue-400">
              Ver Detalhes <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#202c3c] border border-slate-700/80 p-6 rounded-xl shadow-xl hover:border-[#1867ff] transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#1867ff]/20 text-[#1867ff] flex items-center justify-center group-hover:bg-[#1867ff] group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-slate-600 group-hover:text-blue-400/40 transition-colors font-mono">
                02
              </span>
            </div>
            <h2 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              Engenharia Elétrica & SPDA
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Termografia infravermelha preditiva, laudos de para-raios NBR 5419, PIE da NR-10 e dimensionamento industrial.
            </p>
            <a href="#solucoes" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1867ff] hover:text-blue-400">
              Ver Detalhes <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#202c3c] border border-slate-700/80 p-6 rounded-xl shadow-xl hover:border-[#1867ff] transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#1867ff]/20 text-[#1867ff] flex items-center justify-center group-hover:bg-[#1867ff] group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-slate-600 group-hover:text-blue-400/40 transition-colors font-mono">
                03
              </span>
            </div>
            <h2 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              Laudos Ocupacionais & AVCB
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              PGR, LTCAT para o eSocial, projetos de prevenção a incêndio, laudos periciais e assistência técnica judicial especializada.
            </p>
            <a href="#solucoes" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1867ff] hover:text-blue-400">
              Ver Detalhes <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
