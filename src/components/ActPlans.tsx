import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, ArrowRight, Sparkles } from 'lucide-react';

export const ActPlans: React.FC = () => {
  return (
    <section id="plans" className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-emerald-500/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Planos para Administradores</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Evolua no Seu Ritmo <br />
            <span className="text-gradient-emerald">Escolha o Plano Ideal para Sua Comunidade</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Planos voltados para cadastrados da plataforma. Não misturamos planos com impulsionamentos em créditos.
          </p>
        </motion.div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Plan 1: Free */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6 flex flex-col justify-between relative"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-xs font-mono font-bold">
                  FREE
                </span>
                <h3 className="font-display font-bold text-2xl text-white">Comece Gratuitamente</h3>
                <p className="text-xs text-zinc-400">
                  Ideal para cadastrar seus primeiros grupos e conhecer a plataforma.
                </p>
              </div>

              <div className="font-display font-bold text-3xl text-white">
                R$ 0 <span className="text-xs font-normal text-zinc-400">/mês</span>
              </div>

              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cadastro de grupos gratuito</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Painel básico do administrador</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sistema de recompensas e afiliados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Participação no lançamento oficial</span>
                </li>
              </ul>
            </div>

            <a 
              href="#register"
              className="w-full py-3.5 rounded-2xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Começar Grátis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Plan 2: Pro (Featured) */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl glass-panel border border-emerald-500/50 bg-gradient-to-b from-emerald-950/20 via-zinc-950 to-zinc-950 space-y-6 flex flex-col justify-between relative shadow-2xl scale-105"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                  PRO • RECOMENDADO
                </span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-white">Para Administradores que Querem Crescer</h3>
                <p className="text-xs text-zinc-300">
                  Recursos avançados de inteligência, comissão direta e maiores benefícios.
                </p>
              </div>

              <div className="font-display font-bold text-4xl text-emerald-400">
                R$ 47 <span className="text-xs font-normal text-zinc-400">/mês</span>
              </div>

              <ul className="space-y-3 text-xs text-zinc-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mais grupos cadastrados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Analytics detalhado de cliques e origens</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Benefícios exclusivos e prioridade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comissão em dinheiro via PIX</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Descontos especiais em pacotes de créditos</span>
                </li>
              </ul>
            </div>

            <a 
              href="#register"
              className="w-full py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <span>Garantir Condição Pro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Plan 3: Business */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl glass-panel border border-amber-500/40 bg-zinc-950 space-y-6 flex flex-col justify-between relative"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                  BUSINESS
                </span>
                <h3 className="font-display font-bold text-2xl text-white">Para Grandes Comunidades</h3>
                <p className="text-xs text-zinc-400">
                  Infraestrutura de escala ilimitada para redes de grupos e gestores.
                </p>
              </div>

              <div className="font-display font-bold text-3xl text-amber-300">
                R$ 97 <span className="text-xs font-normal text-zinc-400">/mês</span>
              </div>

              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Grupos ilimitados na plataforma</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Recursos avançados de automação e dados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Maior taxa de comissão no programa de afiliados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Benefícios exclusivos e suporte VIP dedicado</span>
                </li>
              </ul>
            </div>

            <a 
              href="#register"
              className="w-full py-3.5 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
            >
              <span>Selecione Business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
