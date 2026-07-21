import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Bot, 
  Link2, 
  ShieldCheck, 
  DollarSign, 
  Users, 
  Zap, 
  ArrowUpRight, 
  Lock, 
  CheckCircle,
  Smartphone,
  Sparkles,
  RefreshCw
} from 'lucide-react';

export const ActSolution: React.FC = () => {
  const [activeModule, setActiveModule] = useState<'checkout' | 'bot' | 'links' | 'crm'>('checkout');

  return (
    <section className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Chapter Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Capítulo 02 • A Arquitetura SaaS</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Conheça o Sistema Operacional <br />
            <span className="text-gradient-emerald">Projetado para Criadores de Comunidades</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Nenhuma planilha manual. Nenhum atraso de resposta. Interface fluida com performance de classe mundial.
          </p>
        </motion.div>

        {/* Interactive Glass SaaS Mockup Container */}
        <div className="max-w-5xl mx-auto rounded-3xl glass-panel p-4 sm:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
          
          {/* Mockup Header Window Controls */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs text-zinc-500 font-mono ml-2 hidden sm:inline">zapgroup.vip/dashboard/engine</span>
            </div>

            {/* Interactive Module Selector */}
            <div className="flex flex-wrap items-center gap-1.5 bg-zinc-950/80 p-1.5 rounded-2xl border border-white/10 text-xs font-semibold">
              <button
                onClick={() => setActiveModule('checkout')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 ${
                  activeModule === 'checkout' 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Checkout PIX</span>
              </button>

              <button
                onClick={() => setActiveModule('bot')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 ${
                  activeModule === 'bot' 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Bot Administrador</span>
              </button>

              <button
                onClick={() => setActiveModule('links')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 ${
                  activeModule === 'links' 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Link2 className="w-3.5 h-3.5" />
                <span>Links Anti-Lotação</span>
              </button>

              <button
                onClick={() => setActiveModule('crm')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 ${
                  activeModule === 'crm' 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Gestão VIP</span>
              </button>
            </div>
          </div>

          {/* Module Content Switcher */}
          <AnimatePresence mode="wait">
            {activeModule === 'checkout' && (
              <motion.div 
                key="checkout"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
                    <div className="text-xs text-zinc-400">Conversão PIX em Tempo Real</div>
                    <div className="font-display font-bold text-3xl text-white">94,2%</div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>Confirmação instantânea do BC</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
                    <div className="text-xs text-zinc-400">Tempo Médio de Liberação</div>
                    <div className="font-display font-bold text-3xl text-emerald-300">2,8 Segundos</div>
                    <div className="text-[11px] text-zinc-400">Zero atrito para o aluno</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
                    <div className="text-xs text-zinc-400">Taxa do Fundador</div>
                    <div className="font-display font-bold text-3xl text-amber-300">2,9% Fixa</div>
                    <div className="text-[11px] text-amber-300 font-medium">Economia de 5% sobre cada venda</div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-sm font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Checkout Integrado ao PIX com QR Code Dinâmico</span>
                    </div>
                    <p className="text-xs text-zinc-400">Sem taxas de gateway abusivas. O valor cai diretamente na sua conta configurada.</p>
                  </div>
                  <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30 shrink-0">
                    STATUS: ATIVO & OTIMIZADO
                  </span>
                </div>
              </motion.div>
            )}

            {activeModule === 'bot' && (
              <motion.div 
                key="bot"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-400 pb-3 border-b border-white/10">
                    <span className="flex items-center gap-2 text-emerald-400 font-bold">
                      <Bot className="w-4 h-4" />
                      <span>Execução de Automação de Grupo</span>
                    </span>
                    <span className="text-emerald-400">● 100% On-line</span>
                  </div>

                  <div className="space-y-2 text-zinc-300">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>[14:02:11] PIX Aprovado: Lucas Almeida (R$ 97,00)</span>
                      <span className="text-emerald-400">Convite individual gerado</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>[14:02:14] Entrada confirmada no Grupo VIP #01</span>
                      <span className="text-blue-400">Membro registrado no CRM</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>[14:02:20] Checagem de renovações de vencimento</span>
                      <span className="text-purple-400">3 lembretes enviados no privado</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeModule === 'links' && (
              <motion.div 
                key="links"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-4"
              >
                <div className="flex justify-between items-center text-xs font-bold text-zinc-300 pb-3 border-b border-white/10">
                  <span>Sua Rede de Redirecionamento Inteligente</span>
                  <span className="text-emerald-400">Capacidade Total: 5.120 Membros</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Comunidade VIP #01</div>
                      <div className="text-[11px] text-zinc-400">1.024 / 1.024 membros (Cheio)</div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      Redirecionado
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-emerald-300">Comunidade VIP #02 (Recebendo Tráfego)</div>
                      <div className="text-[11px] text-zinc-300">342 / 1.024 membros • Expandindo</div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-lg bg-emerald-500 text-slate-950">
                      Ativo Agora
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeModule === 'crm' && (
              <motion.div 
                key="crm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-4 text-xs"
              >
                <div className="flex justify-between items-center text-zinc-300 pb-3 border-b border-white/10">
                  <span className="font-bold text-white">Base de Assinantes Ativos</span>
                  <span className="text-zinc-400">Exportar CSV / Webhooks liberados</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                    <div className="font-medium text-white">Ana Paula Mendes</div>
                    <div className="text-zinc-400">(11) 98765-4321</div>
                    <div className="text-emerald-400 font-bold">Plano Trimestral (R$ 297,00)</div>
                    <div className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Renovação em 60 dias</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                    <div className="font-medium text-white">Gustavo Henrique</div>
                    <div className="text-zinc-400">(21) 99812-3344</div>
                    <div className="text-emerald-400 font-bold">Plano Mensal (R$ 97,00)</div>
                    <div className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Aviso Enviado</div>
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
