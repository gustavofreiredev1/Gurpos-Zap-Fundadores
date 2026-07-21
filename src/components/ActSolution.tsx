import React from 'react';
import { motion } from 'motion/react';
import { 
  PlusCircle, 
  ShieldCheck, 
  Users, 
  Zap, 
  Gift, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ActSolution: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "1. Cadastre seu grupo",
      desc: "Adicione seu grupo de WhatsApp gratuitamente na plataforma em menos de 1 minuto.",
      icon: PlusCircle,
      accent: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
    },
    {
      number: "02",
      title: "2. Ative seu grupo",
      desc: "Grupos comerciais possuem uma ativação única para garantir a máxima qualidade da plataforma.",
      icon: ShieldCheck,
      accent: "border-blue-500/30 text-blue-400 bg-blue-500/10"
    },
    {
      number: "03",
      title: "3. Receba visitantes",
      desc: "Seu grupo passa a aparecer em destaque para milhares de pessoas altamente interessadas.",
      icon: Users,
      accent: "border-purple-500/30 text-purple-400 bg-purple-500/10"
    },
    {
      number: "04",
      title: "4. Impulsione quando quiser",
      desc: "Use créditos para destacar seu grupo na Home, em categorias específicas e no topo das buscas.",
      icon: Zap,
      accent: "border-amber-500/30 text-amber-400 bg-amber-500/10"
    },
    {
      number: "05",
      title: "5. Cresça e seja recompensado",
      desc: "Participe do programa de afiliados para indicar novos administradores e ganhar créditos ou comissões.",
      icon: Gift,
      accent: "border-rose-500/30 text-rose-400 bg-rose-500/10"
    }
  ];

  return (
    <section id="ecosystem" className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fluxo de Crescimento</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Uma plataforma completa para <br />
            <span className="text-gradient-emerald">administrar, divulgar e crescer seus grupos</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Veja como a jornada do seu grupo funciona do cadastro ao topo das buscas.
          </p>
        </motion.div>

        {/* Timeline Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4 relative flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border ${step.accent}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <span>Passo {step.number}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
