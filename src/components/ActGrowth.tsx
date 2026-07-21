import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Coins, 
  Sparkles, 
  Zap, 
  Home, 
  Layers, 
  Search, 
  TrendingUp, 
  Plus, 
  ArrowRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

export const ActGrowth: React.FC = () => {
  const [balance, setBalance] = useState<number>(150);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const handleSpend = (cost: number, actionName: string) => {
    if (balance >= cost) {
      setBalance(prev => prev - cost);
      setActiveAction(`Ativado: ${actionName} (-${cost} cr)`);
    } else {
      setActiveAction('Créditos insuficientes para este destaque!');
    }
    setTimeout(() => setActiveAction(null), 3000);
  };

  const handleRecharge = () => {
    setBalance(prev => prev + 50);
    setActiveAction('Recarga realizada: +50 créditos adicionados!');
    setTimeout(() => setActiveAction(null), 3000);
  };

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0e1017] to-[#07080a]">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span>Sistema de Créditos</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            A moeda de crescimento da sua comunidade <br />
            <span className="text-gradient-gold">Impulsione com total flexibilidade</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Os créditos permitem direcionar a atenção de milhares de visitantes para o seu grupo exatamente quando e onde você desejar.
          </p>
        </motion.div>

        {/* Digital Wallet Interactive Showcase */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Wallet Dashboard */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-zinc-950 to-zinc-950 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <span className="text-xs font-mono font-bold text-amber-300 uppercase flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-400" />
                Carteira Digital de Créditos
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                CONTA ATIVA
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-zinc-400 uppercase font-mono">Seu Saldo Disponível</div>
              <div className="font-display font-bold text-5xl text-white flex items-center gap-3">
                <Coins className="w-8 h-8 text-amber-400" />
                <span>{balance}</span>
                <span className="text-sm font-normal text-amber-300/80 font-mono">créditos</span>
              </div>
            </div>

            {activeAction && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeAction}</span>
              </motion.div>
            )}

            <div className="pt-2">
              <button
                onClick={handleRecharge}
                className="w-full py-3.5 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Simular Recarga de +50 Créditos</span>
              </button>
            </div>
          </div>

          {/* Right: Actions List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Ações de Destaque Disponíveis na Plataforma:
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Destaque na Home</div>
                  <div className="text-xs text-zinc-400">Banner principal visível na entrada do site</div>
                </div>
              </div>
              <button
                onClick={() => handleSpend(10, 'Destaque na Home')}
                className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer"
              >
                10 Créditos
              </button>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Topo da Categoria</div>
                  <div className="text-xs text-zinc-400">Melhor posição dentro do seu nicho específico</div>
                </div>
              </div>
              <button
                onClick={() => handleSpend(5, 'Topo da Categoria')}
                className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-300 font-mono font-bold text-xs border border-blue-500/30 hover:bg-blue-500 hover:text-slate-950 transition-all cursor-pointer"
              >
                5 Créditos
              </button>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Exposição na Busca</div>
                  <div className="text-xs text-zinc-400">Apareça primeiro nas pesquisas por palavras-chave</div>
                </div>
              </div>
              <button
                onClick={() => handleSpend(3, 'Exposição na Busca')}
                className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 font-mono font-bold text-xs border border-purple-500/30 hover:bg-purple-500 hover:text-white transition-all cursor-pointer"
              >
                3 Créditos
              </button>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Grupo em Destaque Especial</div>
                  <div className="text-xs text-zinc-400">Selo verificado + impulso máximo de alcance</div>
                </div>
              </div>
              <button
                onClick={() => handleSpend(15, 'Destaque Especial')}
                className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 font-mono font-bold text-xs border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer"
              >
                15 Créditos
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
