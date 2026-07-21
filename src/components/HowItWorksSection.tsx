import React, { useState } from 'react';
import { 
  QrCode, 
  CreditCard, 
  Bot, 
  Link2, 
  Calculator, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenForm: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenForm }) => {
  // Simulator State
  const [memberCount, setMemberCount] = useState<number>(250);
  const [pricePerMember, setPricePerMember] = useState<number>(97);

  // Calculations
  const grossMonthly = memberCount * pricePerMember;
  const grossYearly = grossMonthly * 12;

  // Founder fee (2.9%) vs Standard fee (7.9%)
  const founderFeeMonthly = grossMonthly * 0.029;
  const standardFeeMonthly = grossMonthly * 0.079;
  const monthlySavings = standardFeeMonthly - founderFeeMonthly;
  const yearlySavings = monthlySavings * 12;

  const netMonthlyFounder = grossMonthly - founderFeeMonthly;

  const steps = [
    {
      number: '01',
      icon: QrCode,
      title: 'Conecte seu WhatsApp em Segundos',
      description: 'Ligue sua conta via QR Code seguro com tecnologia de sincronização rápida. Sem risco de banimento e sem necessidade de configurações complexas.',
    },
    {
      number: '02',
      icon: CreditCard,
      title: 'Crie seu Plano de Acesso VIP',
      description: 'Defina mensalidades, trimestrais ou acessos vitalícios. Defina os valores e receba diretamente na sua chave PIX com taxa zero de intermediação abusiva.',
    },
    {
      number: '03',
      icon: Bot,
      title: 'Bot de Aprovação e Cobrança Automática',
      description: 'Assim que o PIX é pago, o bot aprova a entrada e envia o link temporário de acesso. Quando a assinatura vence, envia lembrete amigável e gerencia inadimplentes.',
    },
    {
      number: '04',
      icon: Link2,
      title: 'Links Dinâmicos Anti-Lotação',
      description: 'Divulgue um único link oficial. Conforme o Grupo #01 atinge 1.024 membros, a plataforma cria e redireciona os novos membros para o Grupo #02 no piloto automático.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#050608] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-teal-400" />
            <span>Simplicidade & Escala</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Como Funciona a <br />
            <span className="text-gradient-emerald">Monetização Sem Estresse</span>
          </h2>

          <p className="text-base text-zinc-300">
            Esqueça conferir comprovantes manuais no WhatsApp de madrugada. Nossa plataforma cuida de todo o funil para você focar apenas em gerar conteúdo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="p-6 rounded-3xl glass-card border border-white/10 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-bold text-2xl text-zinc-700 group-hover:text-emerald-400/40 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SIMULATOR BOX */}
        <div id="simulador" className="max-w-5xl mx-auto rounded-3xl glass-card p-6 sm:p-10 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Calculator className="w-64 h-64 text-emerald-400" />
          </div>

          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Simulador de Faturamento & Economia de Fundador</h3>
              <p className="text-xs text-zinc-400">Ajuste os valores para ver seu lucro com a taxa exclusiva de 2,9%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Members Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-zinc-300">Membros Pagantes VIP nos Grupos</span>
                  <span className="text-emerald-400 font-display font-bold text-base bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {memberCount} membros
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="2000"
                  step="10"
                  value={memberCount}
                  onChange={(e) => setMemberCount(Number(e.target.value))}
                  className="w-full accent-emerald-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>10 membros</span>
                  <span>1.000 membros</span>
                  <span>2.000 membros</span>
                </div>
              </div>

              {/* Price Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-zinc-300">Valor da Assinatura Mensal (R$)</span>
                  <span className="text-emerald-400 font-display font-bold text-base bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    R$ {pricePerMember},00 / mês
                  </span>
                </div>
                <input
                  type="range"
                  min="19"
                  max="497"
                  step="5"
                  value={pricePerMember}
                  onChange={(e) => setPricePerMember(Number(e.target.value))}
                  className="w-full accent-emerald-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>R$ 19/mês</span>
                  <span>R$ 250/mês</span>
                  <span>R$ 497/mês</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Substitui funcionários de suporte para cobrança manual.</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Renovação automática no PIX com alta retenção de membros.</span>
                </div>
              </div>

            </div>

            {/* Right Display Cards */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-white/15 space-y-3">
                <div className="text-xs text-zinc-400 font-medium">Faturamento Bruto Recorrente</div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-white">
                  R$ {grossMonthly.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  <span className="text-xs font-normal text-zinc-400 ml-1">/mês</span>
                </div>
                <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Equivalente a R$ {grossYearly.toLocaleString('pt-BR')} ao ano</span>
                </div>
              </div>

              {/* Founder Savings Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/10 border border-emerald-500/40 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Sua Economia Anual (Taxa 2,9% Fundador)</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                    Sua Vantagem
                  </span>
                </div>

                <div className="font-display font-bold text-2xl sm:text-3xl text-emerald-300">
                  + R$ {yearlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} / ano
                </div>

                <p className="text-[11px] text-zinc-300">
                  Você economiza R$ {monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} todos os meses em relação ao plano público de 7,9%.
                </p>
              </div>

              <button
                onClick={onOpenForm}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>Garantir Taxa de 2,9% Como Fundador</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
