import React, { useState } from 'react';
import { 
  Calculator as CalcIcon, 
  Send, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Building,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Calculator: React.FC = () => {
  const [service, setService] = useState('nr12');
  const [quantity, setQuantity] = useState('1 a 5');
  const [urgency, setUrgency] = useState('padrao');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');

  // Service configuration details
  const serviceDetailsMap: Record<string, {
    title: string;
    norma: string;
    prazoMedio: string;
    entregaveis: string[];
  }> = {
    nr12: {
      title: 'Adequação à NR-12 (Máquinas)',
      norma: 'NR-12 / ABNT NBR ISO 12100',
      prazoMedio: '5 a 15 dias úteis (conforme parque fabril)',
      entregaveis: ['Apreciação de Riscos HRN', 'Projetos Mecânicos e Elétricos', 'Laudo com ART no CREA'],
    },
    termografia: {
      title: 'Laudo de Termografia Elétrica',
      norma: 'NBR 15572 / NR-10',
      prazoMedio: '3 a 7 dias úteis após medição in-loco',
      entregaveis: ['Varredura Radiométrica dos Painéis', 'Classificação de Severidade Térmica', 'Laudo Conclusivo com ART'],
    },
    spda: {
      title: 'Laudo de SPDA & Aterramento',
      norma: 'ABNT NBR 5419:2015',
      prazoMedio: '3 a 5 dias úteis',
      entregaveis: ['Medição Ôhmica de Aterramento', 'Inspeção de Captores e Descidas', 'Relatório Técnico para AVCB'],
    },
    incendio: {
      title: 'Projetos e Regularização AVCB / Bombeiros',
      norma: 'Instruções Técnicas do Corpo de Bombeiros',
      prazoMedio: '10 a 20 dias úteis',
      entregaveis: ['Projeto Técnico de Incêndio', 'Comissionamento de Equipamentos', 'Acompanhamento na Vistoria'],
    },
    laudos: {
      title: 'Laudos Ocupacionais (PGR / LTCAT)',
      norma: 'NR-01 / NR-09 / eSocial S-2240',
      prazoMedio: '5 a 10 dias úteis',
      entregaveis: ['Inventário de Riscos Ocupacionais', 'LTCAT Assinado por Eng. Segurança', 'Dados para Envio ao eSocial'],
    },
    treinamento: {
      title: 'Treinamentos Normativos In-Company',
      norma: 'NR-10, NR-12, NR-35 ou NR-33',
      prazoMedio: 'Agendamento flexível (inclusive aos sábados)',
      entregaveis: ['Apostilas e Conteúdo Programático', 'Certificados Individuais Válidos', 'ART do Instrutor'],
    },
  };

  const currentConfig = serviceDetailsMap[service] || serviceDetailsMap.nr12;

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Eng. Kleber Francisco! Gostaria de um orçamento para minha empresa.\n\n` +
      `📌 *Serviço de Interesse:* ${currentConfig.title}\n` +
      `🔢 *Volume / Quantidade:* ${quantity}\n` +
      `⏱️ *Urgência:* ${urgency === 'imediata' ? 'URGENTE (Notificação / Fiscalização)' : 'Padrão / Preventivo'}\n` +
      `🏢 *Empresa:* ${company || 'Não informada'}\n` +
      `📍 *Cidade/Estado:* ${city || 'São Paulo / Região'}\n\n` +
      `Poderia nos orientar sobre valores e disponibilidade de vistoria técnica? Obrigado!`
    );

    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-20 bg-[#121519] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1867ff] mb-3">
              <CalcIcon className="w-4 h-4" />
              <span>Simulador de Escopo Técnico</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 [text-wrap:balance]">
              Planeje Sua Vistoria Técnica e Obtenha uma Pré-Estimativa
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Selecione os parâmetros da sua indústria para receber a recomendação normativa exata e agilizar o contato com o Eng. Kleber Francisco.
            </p>

            <div className="p-4 bg-[#202c3c] border border-slate-700 rounded-xl space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  Diagnóstico rápido sem compromisso de contratação.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  Resposta direta do Engenheiro Responsável via WhatsApp ou E-mail.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1867ff] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  Emissão de ART em 100% das propostas homologadas.
                </span>
              </div>
            </div>
          </div>

          {/* Right Form & Summary Card */}
          <div className="lg:col-span-7 bg-[#202c3c] border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 pb-3 border-b border-slate-700">
              <Building className="w-5 h-5 text-[#1867ff]" />
              Configurar Especificação do Serviço
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Service Select */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Tipo de Solução Desejada:
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#121519] border border-slate-600 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#1867ff]"
                >
                  <option value="nr12">Adequação à NR-12 (Máquinas e Equipamentos)</option>
                  <option value="termografia">Laudo de Termografia Elétrica Preditiva</option>
                  <option value="spda">Laudo de SPDA & Aterramento (NBR 5419)</option>
                  <option value="incendio">Projetos de Incêndio / AVCB Bombeiros</option>
                  <option value="laudos">Laudos Ocupacionais (PGR / LTCAT / Perícias)</option>
                  <option value="treinamento">Treinamento In-Company (NR-10, NR-12, NR-35)</option>
                </select>
              </div>

              {/* Volume / Quantity */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Volume / Quantidade Estimada:
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-[#121519] border border-slate-600 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#1867ff]"
                >
                  <option value="1 a 3">1 a 3 itens / máquinas / painéis</option>
                  <option value="4 a 10">4 a 10 itens / máquinas / painéis</option>
                  <option value="11 a 30">11 a 30 itens / máquinas / painéis</option>
                  <option value="Mais de 30">Mais de 30 itens (Planta Industrial Completa)</option>
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Prazo de Necessidade:
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full bg-[#121519] border border-slate-600 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#1867ff]"
                >
                  <option value="padrao">Padrão (Manutenção Preventiva / Renovação)</option>
                  <option value="imediata">Urgente (Notificação de Auditor Fiscal do Trabalho)</option>
                </select>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Nome da Empresa:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Indústria Metalúrgica Ltda"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#121519] border border-slate-600 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#1867ff] placeholder:text-slate-600"
                />
              </div>

              {/* City / State */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Cidade e Estado:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Campinas - SP"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#121519] border border-slate-600 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#1867ff] placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Dynamic Scope Summary Box */}
            <div className="p-4 bg-[#121519] rounded-xl border border-slate-700/80 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase text-blue-400">
                  Resumo do Escopo: {currentConfig.title}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Norma: {currentConfig.norma}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
                <Clock className="w-4 h-4 text-[#1867ff]" />
                <span>Prazo Médio Estimado: <strong>{currentConfig.prazoMedio}</strong></span>
              </div>

              <div className="space-y-1 text-xs text-slate-400">
                <span className="block font-semibold text-slate-300">Entregáveis Oficiais Inclusos:</span>
                {currentConfig.entregaveis.map((ent, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1867ff] shrink-0" />
                    <span>{ent}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Send CTA */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 px-6 rounded-lg bg-[#1867ff] hover:bg-[#0e56dc] text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Especificação Diretamente no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
