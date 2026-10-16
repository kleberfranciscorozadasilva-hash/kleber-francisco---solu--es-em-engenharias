import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, Scale, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const [showCredentialsModal, setShowCredentialsModal] = useState(false);

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative industrial frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-2xl transform -rotate-1 -z-10" />
              
              {/* Profile Image Container */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src="/src/assets/images/engineer_kleber_profile_1792124518059.jpg"
                  alt="Eng. Kleber Francisco - Engenheiro Eletricista e de Segurança do Trabalho"
                  className="w-full h-auto object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#121519]/95 backdrop-blur-sm border border-slate-700 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#1867ff] flex items-center justify-center text-white shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                        {COMPANY_INFO.crea}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {COMPANY_INFO.engineer}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                    Perito Judicial
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile & Core Differentiators */}
          <div className="lg:col-span-7">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] mb-3">
              <span>Sobre o Especialista</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Trajetória e Atuação</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121519] leading-tight mb-6 [text-wrap:balance]">
              Rigor Técnico, Segurança Humana e Continuidade Operacional
            </h2>

            {/* Direct Quote from kleberfrancisco.com */}
            <blockquote className="p-4 bg-slate-50 border-l-0 border border-slate-200 rounded-lg text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
              &ldquo;Engenheiro eletricista, engenheiro de segurança do trabalho, professor, perito judicial e empreendedor. Com ampla experiência e conhecimento nessas áreas, busco promover segurança, inovação e excelência em seus projetos e serviços.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#677280] leading-relaxed mb-6">
              A <strong className="text-slate-900 font-semibold">{COMPANY_INFO.brandName}</strong> nasceu para fornecer soluções de engenharia sob medida, perfeitamente alinhadas às necessidades específicas de cada empresa, reduzindo riscos trabalhistas, evitando multas e protegendo a integridade física de operadores e o patrimônio das indústrias.
            </p>

            {/* 4 Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#121519]">Habilitação Legal no CREA</h3>
                  <p className="text-xs text-slate-500">Emissão de ART em todas as vistorias, laudos e projetos.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#121519]">Perícias & Assistência Judicial</h3>
                  <p className="text-xs text-slate-500">Elaboração estratégica de quesitos e defesa pericial fundamentada.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#121519]">Foco na Produtividade</h3>
                  <p className="text-xs text-slate-500">Adequações inteligentes que não travam o ritmo dos operadores.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#121519]">Tecnologia Calibrada</h3>
                  <p className="text-xs text-slate-500">Câmeras termográficas e terrômetros com calibração RBC oficial.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1867ff] hover:bg-[#0e56dc] rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <span>Falar com o Engenheiro</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowCredentialsModal(true)}
                className="px-5 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Ver Qualificações & Titulação
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Qualifications Modal */}
      {showCredentialsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 border border-slate-200 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <GraduationCap className="w-5 h-5 text-[#1867ff]" />
                <span>Titulação & Áreas de Competência</span>
              </div>
              <button
                onClick={() => setShowCredentialsModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-sm text-slate-600 leading-relaxed">
              <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100">
                <h4 className="font-bold text-slate-900 mb-1">Graduação e Especializações</h4>
                <p className="text-xs text-slate-600">
                  Graduado em Engenharia Elétrica com pós-graduação em Engenharia de Segurança do Trabalho. Especialista em conformidade com as Normas Regulamentadoras do Ministério do Trabalho e Emprego.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Docência Universitária</h4>
                <p className="text-xs text-slate-600">
                  Professor universitário em cursos de Engenharia e Pós-Graduação em Segurança do Trabalho, ministrando disciplinas de Instalações Elétricas Industriais, NR-10 e NR-12.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Atuação Pericial Forense</h4>
                <p className="text-xs text-slate-600">
                  Perito Judicial cadastrado no Tribunal Regional do Trabalho (TRT) e Tribunal de Justiça, atuando na confecção de laudos periciais de insalubridade, periculosidade e acidentes com maquinário industrial.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowCredentialsModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1867ff] hover:bg-[#0e56dc] rounded-md transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
