import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  UserX, 
  ShieldAlert, 
  Sparkles, 
  Zap, 
  Bot, 
  ArrowRight 
} from 'lucide-react';

export const ActProblem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'old' | 'new'>('new');

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0b0d12] to-[#07080a]">
      
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Chapter Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>Capítulo 01 • A Ruptura</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
            Por que administrar comunidades no WhatsApp <br />
            <span className="text-gradient-emerald">sempre foi um pesadelo manual?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Se você já gerencia ou deseja criar grupos VIPs pagantes, sabe exatamente o custo invisível que consome suas madrugadas.
          </p>
        </motion.div>

        {/* Toggle Control for Modern Experience */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full glass border border-white/10 flex items-center gap-2 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('old')}
              className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-2 ${
                activeTab === 'old' 
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-lg' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <XCircle className="w-4 h-4 text-rose-400" />
              <span>A Era do Caos Manual</span>
            </button>

            <button
              onClick={() => setActiveTab('new')}
              className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-2 ${
                activeTab === 'new' 
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>O Sistema Autônomo ZapGroup</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Cards Comparison */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'old' ? (
            <motion.div 
              key="old-tab"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl glass-panel border border-rose-500/30 bg-rose-950/10 space-y-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 pb-6 border-b border-rose-500/20">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-rose-200">A Rotina Exaustiva Sem Automação</h3>
                  <p className="text-xs text-rose-300/80">Onde você perde mais de 3 horas por dia e deixa até 40% das renovações na mesa.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-zinc-950/60 border border-rose-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase">
                    <Clock className="w-4 h-4" />
                    <span>Conferência Manual</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Verificar comprovantes de PIX no privado do WhatsApp de madrugada enquanto os clientes reclamam de demora na aprovação.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950/60 border border-rose-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase">
                    <UserX className="w-4 h-4" />
                    <span>Inadimplentes Fantasmas</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Membros que pararam de pagar continuam dentro dos seus grupos VIPs consumindo seu conteúdo exclusivo sem que você perceba.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950/60 border border-rose-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Gargalo de 1.024 Membros</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    O grupo enche, seus links de vendas quebram e você precisa criar manualmente o "Grupo #2" enquanto perde vendas quentes.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="new-tab"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/40 bg-emerald-950/10 space-y-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 pb-6 border-b border-emerald-500/20">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-bold">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">A Nova Era: Execução Autônoma em Nuvem</h3>
                  <p className="text-xs text-emerald-300/80">Sua comunidade roda no piloto automático 24 horas por dia, 7 dias por semana.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Aprovação em 3 Segundos</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    O cliente paga no PIX, nosso bot confirma no banco e entrega um convite individual temporário imune a vazamentos.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Gestão Inteligente de Ciclo</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Avisos preventivos de renovação e remoção cortês e imediata de quem decidir não renovar a assinatura VIP.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Links com Auto-Expansão</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Um único link oficial redireciona para os grupos subsequentes assim que atingem a capacidade máxima do WhatsApp.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};
