import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#07080a]">
      
      {/* Background Lighting & Aurora Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-emerald-500/15 blur-[220px] pointer-events-none rounded-full animate-pulseGlow" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/10 blur-[200px] pointer-events-none rounded-full" />

      {/* Grid Pattern with Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 my-auto">
        
        {/* Top Status Capsule */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs font-mono shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">Lançamento Oficial: 30 de Julho</span>
          <span className="text-zinc-500">•</span>
          <span className="text-emerald-400 font-bold">Programa Fundadores Liberado</span>
        </motion.div>

        {/* GIANT IMPACT TITLE */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08] max-w-5xl mx-auto"
        >
          O Futuro das Comunidades <br className="hidden sm:inline" />
          <span className="text-gradient-emerald">No WhatsApp É Autônomo.</span>
        </motion.h1>

        {/* SHORT IMPACT SUBTITLE */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Aprovamos pagamentos via PIX em 3 segundos, removemos inadimplentes automaticamente e eliminamos a gestão manual para sempre.
        </motion.p>

        {/* CTA BUTTONS & TEASER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a 
            href="#register"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-base hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 group"
          >
            <span>Garantir Vaga no Pré-Cadastro</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a 
            href="#founders"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Ver Benefícios Fundador (2.9%)</span>
          </a>
        </motion.div>

        {/* Floating Metrics Teaser */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left"
        >
          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Automação</div>
            <div className="font-display font-bold text-lg text-white">100% Nuvem</div>
          </div>

          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Aprovação PIX</div>
            <div className="font-display font-bold text-lg text-emerald-400">3 Segundos</div>
          </div>

          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Taxa Fundador</div>
            <div className="font-display font-bold text-lg text-amber-300">2.9% Fixa</div>
          </div>

          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Convites VIP</div>
            <div className="font-display font-bold text-lg text-white">Individuais</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
