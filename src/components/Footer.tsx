import React from 'react';
import { Sparkles, ShieldCheck, Lock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030406] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20">
                <Sparkles className="w-5 h-5 fill-slate-950" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">ZapGroup</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Fundadores 2026
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              A solução definitiva para automação, cobrança recorrente, aprovação instantânea e escala de comunidades VIP no WhatsApp.
            </p>

            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>SSL 256-bit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Proteção LGPD</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#beneficios" className="hover:text-emerald-400 transition-colors">Benefícios do Fundador</a></li>
              <li><a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Como Funciona</a></li>
              <li><a href="#simulador" className="hover:text-emerald-400 transition-colors">Simulador de Lucro</a></li>
              <li><a href="#afiliados" className="hover:text-emerald-400 transition-colors">Programa de Afiliados (40%)</a></li>
              <li><a href="#creditos" className="hover:text-emerald-400 transition-colors">Sistema de Créditos</a></li>
              <li><a href="#planos" className="hover:text-emerald-400 transition-colors">Plano Fundador vs. Regular</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Institucional</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Políticas de Segurança</a></li>
              <li><a href="#cadastro" className="hover:text-emerald-400 transition-colors">Formulário de Pré-Cadastro</a></li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-white/5 space-y-4 text-[11px] text-zinc-500 leading-relaxed">
          <p>
            <strong>Aviso Legal Importante:</strong> ZapGroup é uma ferramenta tecnológica independente desenvolvida para gestão, automação de acessos e intermediação de assinaturas de comunidades. Não possui qualquer vínculo comercial, parceria direta ou endosso por parte do WhatsApp Inc., Meta Platforms, Inc. ou de suas subsidiárias. O nome WhatsApp e suas respectivas marcas registradas são de propriedade de Meta Platforms, Inc.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <div>
              © 2026 ZapGroup. Todos os direitos reservados. Programa Fundadores - Lançamento Oficial em 30/07/2026.
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
