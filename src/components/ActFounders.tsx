import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Crown, 
  Gift, 
  Rocket, 
  Coins, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  Star
} from 'lucide-react';

export const ActFounders: React.FC = () => {
  const benefits = [
    {
      title: "Selo Fundador Exclusivo",
      desc: "Emblema de verificação permanente exibido nos seus grupos e no seu perfil do painel.",
      icon: Star,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/30"
    },
    {
      title: "Créditos Iniciais Bônus",
      desc: "Pacote bônus de créditos creditados na sua carteira para impulsionar seus grupos imediatamente no lançamento.",
      icon: Gift,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
    },
    {
      title: "Acesso Antecipado",
      desc: "Liberação do painel e cadastro de grupos antes da abertura oficial para o público geral.",
      icon: Rocket,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/30"
    },
    {
      title: "Condições Especiais Congeladas",
      desc: "Garantia das menores taxas de comissão e planos promocionais protegidos contra reajustes.",
      icon: Coins,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/30"
    },
    {
      title: "Benefícios Irrepetíveis",
      desc: "Vantagens estruturais de prioridade que não estarão disponíveis para novos cadastros futuramente.",
      icon: Lock,
      accent: "text-rose-400 bg-rose-500/10 border-rose-500/30"
    }
  ];

  return (
    <section id="founders" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#100d18] to-[#07080a]">
      
      {/* Lighting Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-amber-500/12 blur-[220px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Oportunidade de Lançamento</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Faça parte dos primeiros construtores da plataforma. <br />
            <span className="text-gradient-gold">Programa Fundadores de WhatsApp</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Inscreva-se no pré-cadastro para garantir seu lugar entre os administradores pioneiros que terão vantagens vitalícias no ecossistema.
          </p>
        </motion.div>

        {/* 5 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, idx) => {
            const IconComp = b.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl glass-panel border border-amber-500/30 bg-zinc-950/70 space-y-4 relative overflow-hidden ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`p-3 w-fit rounded-2xl border ${b.accent}`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">{b.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-panel border border-amber-500/50 bg-gradient-to-r from-amber-950/40 via-zinc-950 to-zinc-950 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>VAGAS LIMITADAS PARA O PRÉ-CADASTRO</span>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            As condições de Fundador serão encerradas no dia do lançamento (30/07).
          </h3>

          <div className="pt-2">
            <a 
              href="#register"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 text-slate-950 font-bold text-base hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/25"
            >
              <span>🚀 Quero Ser Fundador</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
