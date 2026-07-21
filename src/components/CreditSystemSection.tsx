import React from 'react';
import { 
  Coins, 
  Zap, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Gift, 
  ArrowRight 
} from 'lucide-react';

interface CreditSystemSectionProps {
  onOpenForm: () => void;
}

export const CreditSystemSection: React.FC<CreditSystemSectionProps> = ({ onOpenForm }) => {
  const creditRates = [
    { action: 'Aprovação e Adição no Grupo VIP', cost: '1 Crédito', desc: 'Processamento completo com verificação antibot' },
    { action: 'Disparo de Notificação de Cobrança', cost: '1 Crédito', desc: 'Lembrete amigável enviado direto no privado' },
    { action: 'Verificação de Inadimplência', cost: '0.1 Crédito', desc: 'Checagem de pagamento e expiração no banco' },
    { action: 'Redirecionamento de Link Dinâmico', cost: 'Gratuito', desc: 'Sempre gratuito sem consumir seu saldo' },
  ];

  return (
    <section id="creditos" className="py-24 bg-[#050608] relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span>Sistema de Créditos Inteligente</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Economia Transparente de <br />
            <span className="text-gradient-gold">Créditos de Automação</span>
          </h2>

          <p className="text-base text-zinc-300">
            Você paga apenas pelo uso real da infraestrutura de servidores, mantendo seu custo operacional previsível e justo.
          </p>
        </div>

        {/* Bonus Highlight Card */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl glass-card border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-zinc-900/90 to-amber-500/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>Presente de Boas-Vindas aos 500 Fundadores</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                10.000 Créditos Bônus + Recargas em Dobro
              </h3>

              <p className="text-sm text-zinc-300 max-w-2xl">
                No dia 30/07 você já entra com **10.000 créditos bônus** totalmente grátis para iniciar suas automações. Além disso, todas as suas compras de novos créditos terão **100% de bônus adicional** durante 12 meses.
              </p>
            </div>

            <button
              onClick={onOpenForm}
              className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shrink-0 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <span>Garantir Bônus de 10k</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Credit Rate Table Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {creditRates.map((rate) => (
            <div key={rate.action} className="p-5 rounded-2xl glass border border-white/10 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">{rate.action}</div>
                <div className="text-xs text-zinc-400">{rate.desc}</div>
              </div>

              <span className="text-xs font-display font-bold px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shrink-0">
                {rate.cost}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
