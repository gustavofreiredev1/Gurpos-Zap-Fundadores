import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coins, 
  Share2, 
  Zap, 
  ArrowRight, 
  CreditCard, 
  CheckCircle2, 
  TrendingUp, 
  Plus, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';

export const ActMonetization: React.FC = () => {
  const [creditCardScale, setCreditCardScale] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'affiliate' | 'credits'>('affiliate');

  return (
    <section className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Chapter Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Coins className="w-3.5 h-3.5 text-purple-400" />
            <span>Capítulo 04 • Ecossistema Financeiro</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Duas Formas Brutais de <br />
            <span className="text-gradient-purple">Multiplicar Sua Receita na Plataforma</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Além das assinaturas dos seus grupos VIPs, ative novos fluxos de caixa altamente lucrativos.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full glass border border-white/10 flex items-center gap-2 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('affiliate')}
              className={`px-6 py-2.5 rounded-full transition-all flex items-center gap-2 ${
                activeTab === 'affiliate' 
                  ? 'bg-purple-500 text-white font-bold shadow-lg shadow-purple-500/25' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>Programa de Afiliados (40% Recorrente)</span>
            </button>

            <button
              onClick={() => setActiveTab('credits')}
              className={`px-6 py-2.5 rounded-full transition-all flex items-center gap-2 ${
                activeTab === 'credits' 
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Sistema de Créditos Flexíveis</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'affiliate' ? (
              <motion.div 
                key="affiliate-flow"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-500/30 bg-purple-950/10 space-y-10 relative overflow-hidden"
              >
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
                    COMISSÃO VITALÍCIA
                  </span>
                  <h3 className="font-display font-bold text-3xl text-white">Fluxo de Caixa do Afiliado ZapGroup</h3>
                  <p className="text-xs text-zinc-400">
                    Indique outros administradores de grupos. Toda vez que eles faturarem ou contratarem o sistema, você recebe 40% de comissão direta no PIX.
                  </p>
                </div>

                {/* Animated Interactive Flow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative">
                  
                  {/* Step 1 */}
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-3 text-center relative group hover:border-purple-500/50 transition-all">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="font-bold text-white text-sm">Seu Link de Indicação</div>
                    <p className="text-xs text-zinc-400">
                      Compartilhe seu link exclusivo com donos de comunidades e infoprodutores.
                    </p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="hidden md:flex justify-center text-purple-400">
                    <ArrowRight className="w-6 h-6 animate-pulse" />
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-3 text-center relative group hover:border-purple-500/50 transition-all">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="font-bold text-white text-sm">Adesão & Transações</div>
                    <p className="text-xs text-zinc-400">
                      O indicado automatiza seus grupos e começa a vender assinaturas diariamente.
                    </p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="hidden md:flex justify-center text-purple-400">
                    <ArrowRight className="w-6 h-6 animate-pulse" />
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-zinc-950 border border-purple-500/50 space-y-3 text-center relative group shadow-xl">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500 text-slate-950 flex items-center justify-center font-bold text-lg">
                      40%
                    </div>
                    <div className="font-bold text-amber-300 text-sm">Comissão Automática</div>
                    <p className="text-xs text-zinc-300">
                      Você recebe 40% de todo o volume de licença do indicado direto no seu saldo.
                    </p>
                  </div>

                </div>

              </motion.div>
            ) : (
              <motion.div 
                key="credits-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/30 bg-emerald-950/10 space-y-10 relative overflow-hidden"
              >
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                    SISTEMA DE CRÉDITOS EXPANSÍVEIS
                  </span>
                  <h3 className="font-display font-bold text-3xl text-white">Pague Apenas Pelo Que Usar</h3>
                  <p className="text-xs text-zinc-400">
                    Clique na pílula abaixo para simular a recarga de créditos e veja o seu Cartão Fundador expandir seus recursos.
                  </p>
                </div>

                {/* Interactive Expanding Virtual Card */}
                <div className="flex flex-col items-center justify-center space-y-8">
                  
                  {/* Interactive Buttons to Scale Card */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCreditCardScale(1)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                        creditCardScale === 1 ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Card Inicial (1.000 Créditos)
                    </button>

                    <button
                      onClick={() => setCreditCardScale(1.1)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                        creditCardScale === 1.1 ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      + Recarga 5.000 Créditos
                    </button>

                    <button
                      onClick={() => setCreditCardScale(1.2)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                        creditCardScale === 1.2 ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      ★ Bônus Fundador (10.000 Créditos)
                    </button>
                  </div>

                  {/* The Expanding VIP Card */}
                  <motion.div 
                    animate={{ scale: creditCardScale }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="w-full max-w-md p-8 rounded-3xl glass-panel border border-emerald-500/50 bg-gradient-to-br from-emerald-900/40 via-zinc-950 to-zinc-950 space-y-6 shadow-2xl relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400" />
                        <span className="font-display font-bold text-white text-sm">FOUNDER BLACK CARD</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        NÍVEL 01
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] text-zinc-400 uppercase font-mono">Saldo de Créditos Ativos</div>
                      <div className="font-display font-bold text-4xl text-emerald-300 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-amber-400" />
                        {(1000 * Math.round(creditCardScale * 10)).toLocaleString('pt-BR')} PTS
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-400 space-y-1">
                      <div className="flex justify-between">
                        <span>Checkouts Ilimitados:</span>
                        <span className="text-emerald-400 font-bold">Inclusos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bot Anti-Lotação:</span>
                        <span className="text-emerald-400 font-bold">Sem Limite</span>
                      </div>
                    </div>
                  </motion.div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
