import React from 'react';
import { Crown, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#050608] relative z-10 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 font-bold flex items-center justify-center font-display text-xs">
            Z
          </div>
          <span className="font-display font-bold text-white text-sm">
            ZapGroup<span className="text-emerald-400">.vip</span>
          </span>
          <span className="text-zinc-600">|</span>
          <span>© 2026 ZapGroup Technologies Ltd. Todos os direitos reservados.</span>
        </div>

        {/* Security & Scroll Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ambiente Criptografado</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-2 rounded-xl glass border border-white/10 text-zinc-400 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
