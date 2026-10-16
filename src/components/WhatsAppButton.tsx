import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent(
      `Olá Eng. Kleber Francisco! Vim pelo seu site e gostaria de solicitar um orçamento para soluções em engenharia / laudos técnicos.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300"
      aria-label="Falar no WhatsApp com o Engenheiro"
      title="Falar com Eng. Kleber Francisco no WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-1">
        Falar no WhatsApp
      </span>
    </button>
  );
};
