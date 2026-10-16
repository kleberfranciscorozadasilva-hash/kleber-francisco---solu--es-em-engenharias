import React from 'react';
import { Award, FileCheck2, Scale, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Stats: React.FC = () => {
  return (
    <section className="pt-24 pb-12 bg-[#f7f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Stat 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#121519] tabular-nums tracking-tight">
                +{COMPANY_INFO.yearsExperience}
              </div>
              <div className="text-xs font-semibold text-[#677280] uppercase tracking-wider">
                Anos de Experiência
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#121519] tabular-nums tracking-tight">
                +{COMPANY_INFO.laudosCount}
              </div>
              <div className="text-xs font-semibold text-[#677280] uppercase tracking-wider">
                Laudos e ARTs Emitidos
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#121519] tabular-nums tracking-tight">
                {COMPANY_INFO.satisfactionRate}
              </div>
              <div className="text-xs font-semibold text-[#677280] uppercase tracking-wider">
                Conformidade no CREA
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1867ff] flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#121519] tabular-nums tracking-tight">
                {COMPANY_INFO.zeroInfractions}
              </div>
              <div className="text-xs font-semibold text-[#677280] uppercase tracking-wider">
                Em Empresas Atendidas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
