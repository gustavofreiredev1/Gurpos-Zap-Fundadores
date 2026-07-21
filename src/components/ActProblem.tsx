import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Users, 
  Eye, 
  Share2, 
  TrendingUp, 
  Coins, 
  Zap, 
  ShieldAlert 
} from 'lucide-react';

export const ActProblem: React.FC = () => {
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
            Ter um grupo é fácil. <br />
            <span className="text-gradient-emerald">Fazer ele crescer é o desafio.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Administradores criam comunidades incríveis todos os dias, mas enfrentam barreiras constantes para manter o grupo ativo, relevante e rentável.
          </p>
        </motion.div>

        {/* 5 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Problem 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl glass-card border border-white/10 space-y-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Encontrar Novos Membros</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dificuldade constante para atrair pessoas realmente interessadas e qualificadas sem gastar fortunas em anúncios.
            </p>
          </motion.div>

          {/* Problem 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl glass-card border border-white/10 space-y-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Divulgar Seus Grupos</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dependência de links soltos e sem destaque em redes sociais que são ignorados pelo público e pelos algoritmos.
            </p>
          </motion.div>

          {/* Problem 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl glass-card border border-white/10 space-y-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Falta de Visibilidade</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sem um canal centralizado e organizado, seu grupo fica perdido entre milhares de outros e nunca alcança o topo.
            </p>
          </motion.div>

          {/* Problem 4 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl glass-card border border-white/10 space-y-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Estratégias sem Dados</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sem métricas claras para entender de onde vêm os participantes, quais temas convertem melhor e como escalar.
            </p>
          </motion.div>

          {/* Problem 5 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl glass-card border border-white/10 space-y-4 relative overflow-hidden md:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Monetizar Seu Crescimento</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Trabalho contínuo de moderação e conteúdo sem um programa de recompensas que remunere o esforço do administrador.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
