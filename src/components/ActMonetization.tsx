import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Share2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Crown, 
  Award,
  Wallet,
  Users
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
            <span>Alcance & Monetização</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Impulsionamentos & Programa de Afiliados <br />
            <span className="text-gradient-purple">Multiplique seu Alcance e Suas Recompensas</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Destaque seu grupo para milhares de pessoas ou ganhe comissões indicando novos administradores para a plataforma.
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
                    Quer mais alcance? Destaque seu grupo para milhares de pessoas.
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Escolha o pacote ideal de impulsionamentos para acelerar a entrada de novos membros.
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

                        <p className="text-xs text-zinc-400 leading-relaxed">
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
                    Compartilhe a plataforma e seja recompensado.
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Usuários cadastrados podem receber benefícios e comissões ao indicar novos administradores.
                  </p>
                </div>

                {/* Affiliate Flow Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  
                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">1</div>
                    <div className="font-bold text-white text-xs">Seu Link Exclusivo</div>
                    <p className="text-[11px] text-zinc-400">Você compartilha seu link com outros administradores.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">2</div>
                    <div className="font-bold text-white text-xs">Novo Usuário Entra</div>
                    <p className="text-[11px] text-zinc-400">Seu indicado acessa e cria uma conta na plataforma.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">3</div>
                    <div className="font-bold text-white text-xs">Adesão ou Créditos</div>
                    <p className="text-[11px] text-zinc-400">Ele compra créditos ou assina um plano Pro/Business.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-zinc-950 border border-purple-500/50 space-y-2 text-center shadow-lg">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500 text-slate-950 flex items-center justify-center font-bold">4</div>
                    <div className="font-bold text-amber-300 text-xs">Você É Recompensado</div>
                    <p className="text-[11px] text-zinc-300">Receba créditos bônus ou comissão direta no seu saldo.</p>
                  </div>

                </div>

                {/* Affiliate Wallet Visual Mockup */}
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
                  <div className="space-y-1 text-center md:text-left">
                    <div className="text-zinc-400 font-mono">Painel do Afiliado</div>
                    <div className="font-display font-bold text-2xl text-white flex items-center gap-2 justify-center md:justify-start">
                      <Wallet className="w-5 h-5 text-purple-400" />
                      <span>R$ 1.480,00 em comissões acumuladas</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-zinc-400 font-mono">
                    <div className="text-center">
                      <div className="text-white font-bold">34</div>
                      <div>Indicações</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">100%</div>
                      <div>Repasse Automático</div>
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
