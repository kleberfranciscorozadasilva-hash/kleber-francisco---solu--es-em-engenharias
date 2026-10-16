import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Download, X, Share2 } from 'lucide-react';
import { ARTICLES_DATA, COMPANY_INFO } from '../data/content';
import { ArticleItem } from '../types';

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="artigos" className="py-20 bg-[#f7f9fa] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] mb-2">
              <span>Artigos Técnicos & Dicas</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Engenharia em Prática</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121519] tracking-tight [text-wrap:balance]">
              Conhecimento Técnico Especializado
            </h2>
            <p className="mt-3 text-sm text-[#677280] max-w-2xl leading-relaxed">
              Orientações práticas elaboradas pelo Eng. Kleber Francisco sobre segurança, dimensionamento elétrico e boas práticas industriais.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between p-6 group hover:border-[#1867ff]"
            >
              <div>
                {/* Unboxed Metadata (Zero-Pill Rule) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                  <span className="text-[#1867ff] font-bold">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-[#121519] group-hover:text-[#1867ff] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#677280] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-[#1867ff] hover:text-[#0e56dc] flex items-center gap-1 group/btn"
                >
                  <span>{article.isEbook ? 'Baixar E-book / Ler' : 'Ler Artigo Completo'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {article.isEbook && (
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                    <Download className="w-3 h-3" /> E-book
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 my-8 animate-fadeIn">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                  <span className="text-[#1867ff] font-bold">{selectedArticle.category}</span>
                  <span>·</span>
                  <span>{selectedArticle.date}</span>
                  <span>·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#121519]">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-slate-700 mt-6">
                <strong className="block text-slate-900 mb-1">Sobre o Autor:</strong>
                Artigo técnico assinado por <strong>{COMPANY_INFO.engineer}</strong>, Engenheiro Eletricista e de Segurança do Trabalho, Professor e Perito Judicial.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {COMPANY_INFO.brandName}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#1867ff] hover:bg-[#0e56dc] rounded-lg transition-colors"
              >
                Fechar Artigo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
