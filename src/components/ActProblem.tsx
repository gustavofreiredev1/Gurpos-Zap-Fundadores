import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Users, 
  Eye, 
  Share2, 
  TrendingUp, 
  Coins 
} from 'lucide-react';

export const ActProblem: React.FC = () => {
  const problems = [
    {
      title: "Poucos Membros Novos",
      desc: "Luta constante para conseguir novas entradas de pessoas reais e ativas todos os dias no seu grupo.",
      icon: Users,
      accent: "bg-rose-500/15 text-rose-400 border-rose-500/30"
    },
    {
      title: "Difícil Encontrar Público Interessado",
      desc: "Gastar tempo divulgando em locais genéricos e atrair pessoas sem o perfil correto da sua comunidade.",
      icon: Eye,
      accent: "bg-purple-500/15 text-purple-400 border-purple-500/30"
    },
    {
      title: "Falta de Divulgação Eficiente",
      desc: "Dependência de links perdidos em redes sociais que são ignorados pelos leitores e punidos pelos algoritmos.",
      icon: Share2,
      accent: "bg-amber-500/15 text-amber-400 border-amber-500/30"
    },
    {
      title: "Sem Dados de Crescimento",
      desc: "Operar no escuro sem saber quantos cliques seu grupo recebeu, de onde vieram ou qual sua taxa de conversão.",
      icon: TrendingUp,
      accent: "bg-blue-500/15 text-blue-400 border-blue-500/30"
    },
    {
      title: "Sem Formas de Monetizar",
      desc: "Trabalho pesado de moderação e curadoria sem nenhum retorno financeiro ou programa de recompensas associado.",
      icon: Coins,
      accent: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0b0d12] to-[#07080a]">
      
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>O Desafio do Administrador</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
            Criar um grupo é fácil. <br />
            <span className="text-gradient-emerald">Fazer ele crescer é difícil.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Administradores enfrentam barreiras diárias que impedem suas comunidades de atingir o potencial máximo. A plataforma resolve cada um desses obstáculos.
          </p>
        </motion.div>

        {/* 5 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-3xl glass-card border border-white/10 space-y-4 relative overflow-hidden ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-bold ${item.accent}`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
