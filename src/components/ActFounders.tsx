import React from 'react';
import { motion } from 'motion/react';
import { Crown, Sparkles, Zap, ShieldCheck, Gift, CheckCircle2, Calendar } from 'lucide-react';

export const ActFounders: React.FC = () => {
  const benefits = [
    {
      title: "Badge Fundador Exclusivo",
      desc: "Selo permanente de verificação e autoridade em todos os seus grupos."
    },
    {
      title: "Créditos Iniciais Bônus",
      desc: "Pacote de créditos liberados no dia do lançamento para começar impulsionando."
    },
    {
      title: "Benefícios Especiais",
      desc: "Descontos vitrenos em planos Pro/Business e taxas reduzidas em impulsionamentos."
    },
    {
      title: "Participação Antecipada",
      desc: "Acesso antes do público geral para cadastrar e posicionar seus grupos no topo."
    },
    {
      title: "Condições Especiais de Afiliado",
      desc: "Maior comissão para convites realizados durante o período de pré-lançamento."
    }
  ];

  return (
    <section id="founders" className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-amber-500/15 blur-[220px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Special Glass Container */}
        <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-zinc-950 to-zinc-950 space-y-12 relative overflow-hidden shadow-2xl">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>Oportunidade de Pré-Lançamento</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Programa Fundadores <br />
              <span className="text-gradient-gold">Benefícios Exclusivos antes do Lançamento</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Os primeiros administradores que entrarem antes de <strong className="text-amber-300 font-bold">30/07</strong> garantirão vantagens vitalícias no ecossistema.
            </p>

            <div className="pt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Data do Lançamento Oficial: 30 de Julho</span>
            </div>
          </div>

          {/* Benefits Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-zinc-950/90 border border-amber-500/30 space-y-3 relative overflow-hidden group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}

            {/* Special Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 space-y-3 flex flex-col justify-between md:col-span-2 lg:col-span-1 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Garanta sua Vaga</span>
                </div>
                <div className="font-display font-bold text-xl leading-snug">
                  Seja um dos Primeiros Administradores Fundadores
                </div>
                <p className="text-xs text-slate-950/80 font-medium">
                  Cadastre-se agora gratuitamente para garantir todas as vantagens ativas na abertura do sistema.
                </p>
              </div>

              <a 
                href="#register"
                className="w-full py-3 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
              >
                <span>Quero Ser Fundador</span>
                <Crown className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
