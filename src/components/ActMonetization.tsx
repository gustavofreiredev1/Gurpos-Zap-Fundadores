import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Share2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Wallet,
  Users,
  Coins,
  TrendingUp
} from 'lucide-react';

export const ActMonetization: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'boosts' | 'affiliate'>('boosts');

  const boostPackages = [
    {
      name: "Bronze",
      boosts: "10 Impulsionamentos",
      desc: "Ideal para testar novos grupos e pequenas comunidades em início.",
      badge: "Iniciante",
      border: "border-amber-700/40 bg-amber-950/10"
    },
    {
      name: "Prata",
      boosts: "25 Impulsionamentos",
      desc: "Para grupos em constante aceleração que querem membros diários.",
      badge: "Mais Popular",
      border: "border-slate-400/40 bg-slate-900/20"
    },
    {
      name: "Ouro",
      boosts: "50 Impulsionamentos",
      desc: "Alcance massivo para comunidades consolidadas e lançamentos.",
      badge: "Alta Performance",
      border: "border-amber-400/50 bg-amber-900/20"
    },
    {
      name: "Diamante",
      boosts: "100 Impulsionamentos",
      desc: "Exposição ilimitada e prioridade máxima em todas as seções.",
      badge: "Empresarial",
      border: "border-cyan-400/50 bg-cyan-950/20"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>Impulsionamentos & Recompensas</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Coloque sua comunidade em destaque. <br />
            <span className="text-gradient-purple">Quanto mais destaque, maior a exposição.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Aumente exponencialmente a entrada de novos participantes no seu grupo ou receba recompensas no programa de afiliados.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full glass border border-white/10 flex items-center gap-2 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('boosts')}
              className={`px-6 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'boosts' 
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Pacotes de Impulsionamento</span>
            </button>

            <button
              onClick={() => setActiveTab('affiliate')}
              className={`px-6 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'affiliate' 
                  ? 'bg-purple-500 text-white font-bold shadow-lg shadow-purple-500/25' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>Programa de Afiliados (Recompensas)</span>
            </button>
          </div>
        </div>

        {/* Content Display Area */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'boosts' ? (
              <motion.div 
                key="boosts"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white">
                    Coloque sua comunidade em destaque.
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Quanto mais impulsionamentos ativados, maior o tempo e a posição do seu grupo frente a milhares de visitantes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {boostPackages.map((pkg, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6 }}
                      className={`p-6 rounded-3xl glass-panel border ${pkg.border} space-y-4 flex flex-col justify-between relative overflow-hidden`}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-display font-bold text-xl text-white">{pkg.name}</span>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-300">
                            {pkg.badge}
                          </span>
                        </div>

                        <div className="font-display font-bold text-2xl text-amber-300">
                          {pkg.boosts}
                        </div>

                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          {pkg.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <a 
                          href="#register"
                          className="w-full py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Ativar Pacote</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="affiliate"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-500/30 bg-purple-950/10 space-y-10 relative overflow-hidden"
              >
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
                    PROGRAMA DE RECOMPENSAS
                  </span>
                  <h3 className="font-display font-bold text-3xl text-white">
                    Cresça com a comunidade e seja recompensado.
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Indique novos administradores e ganhe comissões recorrentes em dinheiro via PIX ou créditos bônus para seu próprio grupo.
                  </p>
                </div>

                {/* Affiliate Flow Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  
                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">1</div>
                    <div className="font-bold text-white text-xs">Compartilhe seu link</div>
                    <p className="text-[11px] text-zinc-400">Divulgue seu link exclusivo de indicação para outros administradores.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">2</div>
                    <div className="font-bold text-white text-xs">Novos usuários entram</div>
                    <p className="text-[11px] text-zinc-400">O administrador indicado cria uma conta gratuita na plataforma.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">3</div>
                    <div className="font-bold text-white text-xs">Eles usam a plataforma</div>
                    <p className="text-[11px] text-zinc-400">Ao assinar um plano Pro/Business ou comprar pacotes de créditos.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-zinc-950 border border-purple-500/50 space-y-2 text-center shadow-lg">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500 text-slate-950 flex items-center justify-center font-bold">4</div>
                    <div className="font-bold text-amber-300 text-xs">Você recebe recompensas</div>
                    <p className="text-[11px] text-zinc-300">Sua comissão cai direto na carteira em dinheiro ou créditos.</p>
                  </div>

                </div>

                {/* Affiliate Wallet Visual Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Comissões Acumuladas</div>
                    <div className="font-display font-bold text-xl text-emerald-400 flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-emerald-400" />
                      <span>R$ 1.480,00</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Créditos Bônus Gerados</div>
                    <div className="font-display font-bold text-xl text-amber-300 flex items-center gap-2">
                      <Coins className="w-4 h-4 text-amber-400" />
                      <span>+350 Créditos</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Total de Indicações Ativas</div>
                    <div className="font-display font-bold text-xl text-purple-300 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span>34 Administradores</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
