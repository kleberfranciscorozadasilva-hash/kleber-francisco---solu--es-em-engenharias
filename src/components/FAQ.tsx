import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tira-Dúvidas Normativo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121519] tracking-tight [text-wrap:balance]">
            Perguntas Frequentes sobre Laudos e Engenharia
          </h2>
          <p className="mt-3 text-sm text-[#677280] leading-relaxed">
            Respostas claras para as principais questões técnicas, jurídicas e operacionais de nossos clientes.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 bg-[#f7f9fa] hover:bg-slate-100 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#121519]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1867ff] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-6 bg-white border-t border-slate-100 text-sm text-slate-700 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
