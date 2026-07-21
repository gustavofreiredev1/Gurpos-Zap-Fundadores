import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Crown, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  DollarSign, 
  Zap, 
  Bot, 
  Link2, 
  BarChart3, 
  Lock,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  spotsFilled: number;
  maxSpots: number;
  onOpenForm: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  spotsFilled, 
  maxSpots, 
  onOpenForm,
  onOpenSimulator 
}) => {
  const percentage = Math.round((spotsFilled / maxSpots) * 100);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'automation' | 'links'>('dashboard');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Radial Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-500/5">
            <Crown className="w-4 h-4 text-amber-400 animate-bounce" />
            <span className="text-xs font-semibold text-amber-200 tracking-wide uppercase">
              Programa Fundadores 2026 • Lote Limitado
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 space-y-4">
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
            Transforme Grupos de WhatsApp em <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Comunidades VIPs de Alta Lucratividade</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed">
            A plataforma automatizada que aprova pagamentos via PIX, adiciona e remove membros automaticamente, redireciona links dinâmicos e escala seu negócio no WhatsApp.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-base hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Garantir Vaga de Fundador</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSimulator}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl glass hover:bg-white/10 text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 border border-white/10 hover:border-emerald-500/30"
          >
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>Simular Faturamento</span>
          </button>
        </div>

        {/* Progress Bar & Trust Badges */}
        <div className="max-w-md mx-auto mb-16 p-4 rounded-2xl glass border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center text-xs font-semibold mb-2">
            <span className="text-zinc-400 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>Vagas de Fundador Preenchidas</span>
            </span>
            <span className="text-amber-300 font-display font-bold">
              {spotsFilled} de {maxSpots} ({percentage}%)
            </span>
          </div>

          <div className="w-full h-2.5 bg-zinc-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-teal-300 rounded-full transition-all duration-1000 shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="text-[11px] text-zinc-400 text-center mt-2.5">
            🔥 Restam apenas <span className="text-amber-300 font-bold">{maxSpots - spotsFilled} vagas</span> com taxa preferencial de 2,9% vitalícia.
          </p>
        </div>

        {/* Interactive Dashboard Preview Mockup */}
        <div className="relative max-w-5xl mx-auto rounded-3xl glass-card p-3 sm:p-6 border border-white/15 shadow-2xl">
          
          {/* Top Bar Window Controls */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs text-zinc-400 font-mono ml-2 hidden sm:inline">app.zapgroup.vip/dashboard</span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-xl border border-white/10 text-xs font-medium">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'dashboard' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Dashboard VIP</span>
              </button>

              <button
                onClick={() => setActiveTab('automation')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'automation' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Automação</span>
              </button>

              <button
                onClick={() => setActiveTab('links')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'links' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Link2 className="w-3.5 h-3.5" />
                <span>Links Inteligentes</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fadeUp">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
                  <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
                    <span>Faturamento Recorrente</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="font-display font-bold text-xl sm:text-2xl text-white">R$ 24.850,00</div>
                  <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+32% este mês</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
                  <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
                    <span>Membros Ativos VIP</span>
                    <Users className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="font-display font-bold text-xl sm:text-2xl text-white">497 alunos</div>
                  <div className="text-[11px] text-zinc-400 mt-1">em 3 Grupos de WhatsApp</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
                  <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
                    <span>Aprovações Hoje</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="font-display font-bold text-xl sm:text-2xl text-white">28 entradas</div>
                  <div className="text-[11px] text-amber-400 font-medium mt-1">100% via PIX automático</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
                  <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
                    <span>Taxa Fundador</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="font-display font-bold text-xl sm:text-2xl text-emerald-300">2,9% Vitalícia</div>
                  <div className="text-[11px] text-zinc-400 mt-1">Economia de R$ 1.242/mês</div>
                </div>
              </div>

              {/* Activity & Group Stream */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* Left: Active Groups */}
                <div className="lg:col-span-2 p-4 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-semibold text-zinc-300 flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>Grupos Sincronizados ao Vivo</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                      ● API Conectada
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs border border-emerald-500/30">
                          G1
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Comunidade Cripto VIP #01</div>
                          <div className="text-[11px] text-zinc-400">982 / 1.024 membros • R$ 97,00/mês</div>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                        Ativo
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center text-xs border border-teal-500/30">
                          G2
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Comunidade Cripto VIP #02 (Redirecionado)</div>
                          <div className="text-[11px] text-zinc-[400]">412 / 1.024 membros • Auto-Expandindo</div>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                        Redirecionando
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Live Activity Queue */}
                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>Fila de Automação</span>
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-zinc-200">PIX Pago por <strong>Felipe M.</strong></span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">Aprovado</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="text-zinc-200">Convite gerado no WhatsApp</span>
                      </div>
                      <span className="text-[10px] text-blue-400 font-mono">Enviado</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="text-zinc-200">Remoção de inadimplente</span>
                      </div>
                      <span className="text-[10px] text-purple-300 font-mono">Agendado</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 animate-fadeUp">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <Bot className="w-6 h-6 text-emerald-400" />
                <div>
                  <h3 className="font-display font-bold text-base text-white">Bot Administrador de Aprovação e Cobrança</h3>
                  <p className="text-xs text-zinc-400">Zero intervenção manual: cobrança, convite e remoção 100% no automático.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-emerald-400">1. Cobrança PIX/Cartão</div>
                  <p className="text-xs text-zinc-300">Gera QR Code do PIX com baixa imediata. Notifica o cliente na hora.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-teal-400">2. Adição Instantânea</div>
                  <p className="text-xs text-zinc-300">Envia link temporário individual para impedir vazamento e compartilhamento.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-amber-400">3. Gestão de Inadimplência</div>
                  <p className="text-xs text-zinc-300">Envia aviso de renovação. Se não renovar, remove do grupo com educação.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'links' && (
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 animate-fadeUp">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <Link2 className="w-6 h-6 text-teal-400" />
                <div>
                  <h3 className="font-display font-bold text-base text-white">Sistema Inteligente de Links Dinâmicos</h3>
                  <p className="text-xs text-zinc-400">Nunca mais perca vendas por grupo cheio (1.024 membros).</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Seu Link Único de Campanha:</span>
                  <span className="text-emerald-400">https://zapgroup.vip/l/comunidade-vip</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                  ⚡ O sistema monitora a lotação do Grupo 1 (998/1024). Quando atingir o limite, o próximo clique vai automaticamente para o Grupo 2!
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
