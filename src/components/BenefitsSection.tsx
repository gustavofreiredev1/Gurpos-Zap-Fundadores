import React from 'react';
import { 
  Percent, 
  Award, 
  Coins, 
  Users2, 
  GitPullRequest, 
  TrendingUp, 
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface BenefitsSectionProps {
  onOpenForm: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenForm }) => {
  const benefits = [
    {
      icon: Percent,
      title: 'Taxa Preferencial Vitalícia (2,9%)',
      badge: 'Economia Gigante',
      description: 'Pague apenas 2,9% por venda aprovada no PIX ou Cartão para sempre. No plano público regular pós-lançamento a taxa será de 7,9%.',
      highlight: true,
      accentColor: 'from-emerald-500 to-teal-400',
    },
    {
      icon: Award,
      title: 'Selo Oficial de Fundador',
      badge: 'Autoridade & Prestígio',
      description: 'Sua marca e seus links inteligentes receberão o badge de verificação "Líder Fundador", transmitindo máxima confiança aos seus membros.',
      highlight: false,
      accentColor: 'from-amber-500 to-yellow-300',
    },
    {
      icon: Coins,
      title: '10.000 Créditos Bônus + Recargas em Dobro',
      badge: 'Bônus de Lançamento',
      description: 'Receba 10.000 créditos bônus no dia 30/07 para disparos e validações + bônus de 100% em qualquer recarga efetuada no primeiro ano.',
      highlight: false,
      accentColor: 'from-blue-500 to-cyan-300',
    },
    {
      icon: Users2,
      title: 'Comunidade Fechada VIP no WhatsApp',
      badge: 'Networking de Alto Nível',
      description: 'Acesso liberado ao grupo secreto de Fundadores para trocar estratégias de monetização, copys de vendas e funis com grandes players.',
      highlight: true,
      accentColor: 'from-purple-500 to-indigo-400',
    },
    {
      icon: GitPullRequest,
      title: 'Voto Direto no Roadmap de Recursos',
      badge: 'Co-Criação',
      description: 'Prioridade máxima na implementação de recursos. Sugira e vote nas novas automações direto com os desenvolvedores da plataforma.',
      highlight: false,
      accentColor: 'from-pink-500 to-rose-400',
    },
    {
      icon: TrendingUp,
      title: 'Super Comissões de Afiliado (40%)',
      badge: 'Renda Recorrente',
      description: 'Como Fundador, sua comissão ao indicar outros gestores de grupos salta de 20% para 40% recorrente mensal vitalícia.',
      highlight: true,
      accentColor: 'from-emerald-400 to-emerald-200',
    },
  ];

  return (
    <section id="beneficios" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Vantagens do Lote Inicial</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Por que Fazer Parte do <br />
            <span className="text-gradient-emerald">Programa de Fundadores?</span>
          </h2>

          <p className="text-base text-zinc-300">
            Criamos uma condição inigualável reservada exclusivamente para os primeiros 500 gestores que acreditarem na revolução das comunidades de WhatsApp.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between group ${
                  benefit.highlight ? 'border-emerald-500/30 bg-emerald-500/[0.02]' : 'border-white/10'
                }`}
              >
                {/* Glow bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.accentColor} text-slate-950 font-bold flex items-center justify-center shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {benefit.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center text-xs font-medium text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Incluso no Acesso Fundador</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-3xl glass-card border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-zinc-900/80 to-teal-500/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Ganta essa Vantagem Competitiva Permanente
            </h4>
            <p className="text-sm text-zinc-300 max-w-2xl">
              Quando seus concorrentes começarem a pagar mensalidades de R$ 197 e taxas de 7,9%, você estará faturando com margem máxima e suporte VIP dedicado.
            </p>
          </div>

          <button
            onClick={onOpenForm}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm shrink-0 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            <span>Reservar Vaga Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
