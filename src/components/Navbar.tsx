import React from 'react';
import { motion } from 'motion/react';
import { Crown, Sparkles, ArrowRight, Shield } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      <div className="glass rounded-full px-5 py-3 border border-white/10 shadow-2xl flex items-center justify-between pointer-events-auto backdrop-blur-xl bg-zinc-950/70">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center font-display shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
            Z
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-tight leading-none">
              ZapGroup<span className="text-emerald-400">.vip</span>
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
              Plataforma Autônoma
            </span>
          </div>
        </a>

        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Clube Fundadores • Vagas Limitadas</span>
        </div>

        {/* Action CTA */}
        <a 
          href="#register"
          className="px-5 py-2 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
        >
          <span>Garantir Pré-Cadastro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

      </div>
    </motion.header>
  );
};
