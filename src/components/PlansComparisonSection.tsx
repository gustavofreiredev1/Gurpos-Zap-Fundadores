import React from 'react';
import { 
  Check, 
  X, 
  Crown, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Zap
} from 'lucide-react';

interface PlansComparisonSectionProps {
  onOpenForm: () => void;
}

export const PlansComparisonSection: React.FC<PlansComparisonSectionProps> = ({ onOpenForm }) => {
  const comparisonItems = [
    {
      feature: 'Mensalidade Fixa da Plataforma',
      founder: 'R$ 0,00 / mês (Lote Grátis)',
      regular: 'R$ 197,00 / mês',
      isFounderBetter: true,
    },
    {
      feature: 'Taxa sobre Cobranças Aprovadas',
      founder: '2,9% Vitalícia',
      regular: '7,9% por venda',
      isFounderBetter: true,
    },
    {
      feature: 'Comissão por Indicação de Afiliado',
      founder: '40% Recorrente Vitalícia',
      regular: '20% Padrão',
      isFounderBetter: true,
    },
    {
      feature: 'Créditos Bônus no Lançamento',
      founder: '10.000 Créditos Grátis',
      regular: '0 Créditos',
      isFounderBetter: true,
    },
    {
      feature: 'Bônus em Recargas no 1º Ano',
      founder: '100% de Créditos em Dobro',
      regular: 'Sem bônus',
      isFounderBetter: true,
    },
    {
      feature: 'Selo de Autoridade no Perfil',
      founder: '👑 Badge "Líder Fundador"',
      regular: 'Badge Padrão',
      isFounderBetter: true,
    },
    {
      feature: 'Canal de Suporte e Treinamento',
      founder: 'Suporte VIP 1-a-1 via WhatsApp',
      regular: 'Suporte por Ticket',
      isFounderBetter: true,
    },
    {
      feature: 'Grupo Secreto de Networking',
      founder: 'Acesso Liberado',
      regular: 'Bloqueado',
      isFounderBetter: true,
    },
  ];

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Comparativo Transparente</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Por que se Cadastrar Hoje no <br />
            <span className="text-gradient-emerald">Programa Fundadores?</span>
          </h2>

          <p className="text-base text-zinc-300">
            Veja a comparação direta entre garantir sua vaga agora e contratar após o lançamento oficial de 30 de Julho.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-card border border-white/10 shadow-2xl overflow-hidden mb-12">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-zinc-950/80 p-4 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-bold items-center">
            <div className="col-span-5 text-zinc-300">Funcionalidade / Benefício</div>
            
            <div className="col-span-4 text-center text-emerald-300 font-display text-sm sm:text-base flex items-center justify-center gap-1.5 bg-emerald-500/10 py-2 rounded-xl border border-emerald-500/30">
              <Crown className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Plano Fundador</span>
            </div>

            <div className="col-span-3 text-center text-zinc-400 font-display">
              Plano Regular (30/07)
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5 text-xs sm:text-sm">
            {comparisonItems.map((item) => (
              <div key={item.feature} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/[0.02] transition-colors">
                
                <div className="col-span-5 font-medium text-zinc-200">
                  {item.feature}
                </div>

                <div className="col-span-4 text-center font-bold text-emerald-300 flex items-center justify-center gap-1 bg-emerald-500/[0.03]">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.founder}</span>
                </div>

                <div className="col-span-3 text-center text-zinc-400 font-medium">
                  {item.regular}
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs sm:text-sm text-zinc-400">
            🔒 O pré-cadastro de hoje é 100% gratuito e sem necessidade de cartão de crédito. Sua vaga fica reservada imediatamente até o dia do lançamento.
          </p>

          <button
            onClick={onOpenForm}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-base hover:scale-105 transition-all shadow-xl shadow-emerald-500/20 inline-flex items-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Garantir Todos os Benefícios de Fundador</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
