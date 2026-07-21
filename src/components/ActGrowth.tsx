import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calculator, 
  Sparkles, 
  Zap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ActGrowth: React.FC = () => {
  const [memberCount, setMemberCount] = useState<number>(350);
  const [monthlyPrice, setMonthlyPrice] = useState<number>(87);

  // Math Calculations
  const grossMRR = memberCount * monthlyPrice;
  const standardGatewayFee = grossMRR * 0.079; // ~7.9% average competitor
  const zapGroupFounderFee = grossMRR * 0.029; // 2.9% Founder privilege
  const monthlySavings = standardGatewayFee - zapGroupFounderFee;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0e1017] to-[#07080a]">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Chapter Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Capítulo 03 • Simulador de Expansão</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Quanto o seu negócio pode faturar <br />
            <span className="text-gradient-gold">com recorrência em automático?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Arraste os seletores para simular seu faturamento mensal e veja o impacto financeiro do Programa Fundadores.
          </p>
        </motion.div>

        {/* Interactive Calculator Panel */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl space-y-8 border border-white/10">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-400" />
                Simulador Dinâmico ZapGroup
              </span>
              <span className="text-xs font-mono text-zinc-400">Valores em Reais (BRL)</span>
            </div>

            {/* Slider 1: Member Count */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-300 font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  Membros VIPs Ativos:
                </span>
                <span className="font-display font-bold text-xl text-emerald-400">
                  {memberCount.toLocaleString('pt-BR')} membros
                </span>
              </div>

              <input 
                type="range" 
                min="50" 
                max="5000" 
                step="50"
                value={memberCount}
                onChange={(e) => setMemberCount(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>50 membros</span>
                <span>2.500 membros</span>
                <span>5.000 membros</span>
              </div>
            </div>

            {/* Slider 2: Ticket Price */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-300 font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  Valor da Assinatura Mensal:
                </span>
                <span className="font-display font-bold text-xl text-amber-400">
                  R$ {monthlyPrice},00 /mês
                </span>
              </div>

              <input 
                type="range" 
                min="20" 
                max="500" 
                step="5"
                value={monthlyPrice}
                onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>R$ 20</span>
                <span>R$ 250</span>
                <span>R$ 500</span>
              </div>
            </div>

            {/* Comparison Badge */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2 text-xs">
              <div className="text-zinc-400 flex items-center justify-between">
                <span>Taxa Padrão Outras Plataformas (~7.9%):</span>
                <span className="text-rose-400 line-through">R$ {Math.round(standardGatewayFee).toLocaleString('pt-BR')}/mês</span>
              </div>
              <div className="text-zinc-200 font-bold flex items-center justify-between">
                <span className="text-amber-300 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Taxa do Programa Fundadores (2.9%):
                </span>
                <span className="text-emerald-400 font-display font-bold text-sm">R$ {Math.round(zapGroupFounderFee).toLocaleString('pt-BR')}/mês</span>
              </div>
            </div>

          </div>

          {/* Right Results Dashboard */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Projected MRR Card */}
            <div className="p-8 rounded-3xl glass-panel border border-emerald-500/40 bg-gradient-to-br from-emerald-950/30 to-zinc-950 space-y-4 relative overflow-hidden shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Faturamento Recorrente Projetado (MRR)</span>
              </div>

              <div className="font-display font-bold text-4xl sm:text-5xl text-white">
                R$ {grossMRR.toLocaleString('pt-BR')},00
                <span className="text-xs text-zinc-400 font-normal block sm:inline sm:ml-2">/mês</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Dinheiro pingando no seu bolso todos os meses via PIX automático com renovação preditiva.
              </p>
            </div>

            {/* Yearly Savings Badge */}
            <div className="p-6 rounded-3xl glass-panel border border-amber-500/40 bg-gradient-to-br from-amber-950/30 to-zinc-950 space-y-3 relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Economia Anual do Membro Fundador</span>
              </div>

              <div className="font-display font-bold text-3xl text-amber-300">
                + R$ {Math.round(yearlySavings).toLocaleString('pt-BR')},00
              </div>

              <p className="text-xs text-zinc-400">
                Mais capital líquido no seu caixa para reinvestir em tráfego e escalar ainda mais.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
