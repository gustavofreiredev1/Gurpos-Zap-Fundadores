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
  Eye,
  BarChart2,
  Share2,
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

  const growthPillars = [
    {
      title: "Mais Visibilidade",
      desc: "Seu grupo aparece ativamente para pessoas que já estão procurando comunidades no seu nicho.",
      icon: Eye,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
    },
    {
      title: "Mais Alcance",
      desc: "Use créditos para destacar seu grupo nos momentos estratégicos de lançamentos ou campanhas.",
      icon: Zap,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/30"
    },
    {
      title: "Mais Inteligência",
      desc: "Acompanhe métricas detalhadas no painel do administrador para saber exatamente o que funciona.",
      icon: BarChart2,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/30"
    },
    {
      title: "Mais Oportunidades",
      desc: "Participe do programa de afiliados para gerar receita em dinheiro ou créditos por indicação.",
      icon: Share2,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/30"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0e1017] to-[#07080a]">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Pillar 1: COMO VOCÊ CRESCE */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Como Você Cresce</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Os 4 Pilares de Aceleração <br />
              <span className="text-gradient-emerald">Sua comunidade no próximo nível</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Desenvolvemos ferramentas focadas em resolver cada etapa do crescimento do seu grupo de WhatsApp.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {growthPillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3 relative flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`p-3 w-fit rounded-2xl border ${p.accent}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">{p.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pillar 2: CRÉDITOS */}
        <div className="space-y-12 pt-10 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              <span>Moeda da Plataforma</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Sua moeda de crescimento dentro da plataforma. <br />
              <span className="text-gradient-gold">Impulsione nos locais estratégicos</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Os créditos permitem destacar grupos nos locais de maior visibilidade e tráfego da página.
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
                  DISPONÍVEL
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-400 uppercase font-mono">Saldo em Carteira</div>
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
                  <span>Simular Recarga (+50 Créditos)</span>
                </button>
              </div>
            </div>

            {/* Right: Uses List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Locais de Aplicação dos Créditos:
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">🏠 Home Principal</div>
                    <div className="text-xs text-zinc-400">Banner e grade de destaque na página inicial</div>
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
                    <div className="font-bold text-white text-sm">📂 Categorias Específicas</div>
                    <div className="text-xs text-zinc-400">Topo da lista dentro do seu nicho temático</div>
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
                    <div className="font-bold text-white text-sm">🔎 Busca e Pesquisas</div>
                    <div className="text-xs text-zinc-400">Primeiros resultados nas buscas por palavras-chave</div>
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
                    <div className="font-bold text-white text-sm">🔥 Destaque Especial (Selo VIP)</div>
                    <div className="text-xs text-zinc-400">Máxima visibilidade + selo de verificação ativado</div>
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

      </div>
    </section>
  );
};
