import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  Share2, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Wallet,
  PieChart
} from 'lucide-react';

interface AffiliatesSectionProps {
  onOpenForm: () => void;
}

export const AffiliatesSection: React.FC<AffiliatesSectionProps> = ({ onOpenForm }) => {
  const [referredCount, setReferredCount] = useState<number>(10);
  const [avgRevenuePerReferral, setAvgRevenuePerReferral] = useState<number>(15000);

  // Platform revenue from 2.9% fee = avgRevenuePerReferral * 0.029
  // Founder affiliate gets 40% of platform fee revenue
  const platformFee = avgRevenuePerReferral * 0.029;
  const affiliateMonthlyEarning = referredCount * (platformFee * 0.40);
  const affiliateYearlyEarning = affiliateMonthlyEarning * 12;

  return (
    <section id="afiliados" className="py-24 relative overflow-hidden">
      
      {/* Glow ambient background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Programa de Afiliados Fundador</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Crie um Fluxo de <br />
            <span className="text-gradient-emerald">Renda Passiva Recorrente (40%)</span>
          </h2>

          <p className="text-base text-zinc-300">
            Enquanto os usuários padrão receberão 20% de comissão, os Fundadores garantem **40% de comissão recorrente vitalícia** sobre o faturamento de cada gestor indicado.
          </p>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-center font-bold">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Saques Semanais via PIX</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Suas comissões acumuladas são transferidas automaticamente para sua conta bancária sem burocracia ou limites mínimos absurdos.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center justify-center font-bold">
              <PieChart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Dashboard Transparente</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Acompanhe cliques, cadastros, conversões e faturamento de cada comunidade indicada em tempo real no seu painel.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Comissão para Sempre</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Diferente de afiliados de infoprodutos com comissão única, você ganha enquanto a comunidade do gestor indicado continuar faturando.
            </p>
          </div>
        </div>

        {/* Affiliate Calculator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-card p-6 sm:p-10 border border-purple-500/30 shadow-2xl space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Calculadora de Ganhos como Afiliado Fundador</h3>
              <p className="text-xs text-zinc-400">Simule quantos líderes de grupos você pode indicar para a plataforma</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-zinc-300">Gestores / Cursos Indicados</span>
                  <span className="text-purple-300 font-display font-bold text-base bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20">
                    {referredCount} gestores
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={referredCount}
                  onChange={(e) => setReferredCount(Number(e.target.value))}
                  className="w-full accent-purple-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-zinc-300">Faturamento Médio por Grupo Indicado</span>
                  <span className="text-purple-300 font-display font-bold text-base bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20">
                    R$ {avgRevenuePerReferral.toLocaleString('pt-BR')}/mês
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="100000"
                  step="1000"
                  value={avgRevenuePerReferral}
                  onChange={(e) => setAvgRevenuePerReferral(Number(e.target.value))}
                  className="w-full accent-purple-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-purple-500/30 text-center space-y-4">
              <div className="text-xs text-zinc-400 font-medium">Sua Renda Passiva Estimada como Fundador</div>
              
              <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-300">
                R$ {affiliateMonthlyEarning.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                <span className="text-xs font-normal text-zinc-400 ml-1">/ mês</span>
              </div>

              <div className="text-xs text-purple-300 font-medium bg-purple-500/10 p-2.5 rounded-xl border border-purple-500/20">
                📈 Total de R$ {affiliateYearlyEarning.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} / ano pingando na sua conta!
              </div>

              <button
                onClick={onOpenForm}
                className="w-full py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>Garantir Comissão de 40%</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
