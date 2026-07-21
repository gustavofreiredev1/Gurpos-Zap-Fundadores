import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  // Target Launch Date: July 30, 2026 00:00:00
  const targetDate = new Date('2026-07-30T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#07080a]">
      
      {/* Live Ambient Glow & Dynamic Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[550px] bg-emerald-500/15 blur-[220px] pointer-events-none rounded-full animate-pulseGlow" />
      <div className="absolute top-1/3 left-8 w-[450px] h-[450px] bg-amber-500/10 blur-[190px] pointer-events-none rounded-full" />
      <div className="absolute bottom-12 right-12 w-[550px] h-[550px] bg-purple-500/12 blur-[210px] pointer-events-none rounded-full" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 my-auto">
        
        {/* Top Live Launch Capsule */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs font-mono shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">🚀 Lançamento Oficial: 30/07</span>
          <span className="text-zinc-500">•</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Programa Fundadores
          </span>
        </motion.div>

        {/* REFINED HERO TITLE */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.08] max-w-5xl mx-auto"
        >
          Faça seu grupo de WhatsApp <br className="hidden sm:inline" />
          <span className="text-gradient-emerald">crescer todos os dias.</span>
        </motion.h1>

        {/* REFINED SUBTITLE */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          A plataforma criada para administradores divulgarem comunidades, conquistarem novos membros, impulsionarem grupos e participarem de um ecossistema de recompensas.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a 
            href="#register"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-base hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 group"
          >
            <span>Cadastrar meu grupo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a 
            href="#founders"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Conhecer Programa Fundadores</span>
          </a>
        </motion.div>

        {/* Integrated Live Countdown Timer Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-6 max-w-xl mx-auto"
        >
          <div className="p-4 rounded-2xl glass border border-emerald-500/30 bg-zinc-950/70 space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                Contagem Regressiva para o Lançamento:
              </span>
              <span className="text-amber-300 font-bold">30 de Julho</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-2xl text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-[10px] font-mono uppercase text-zinc-400">Dias</div>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-2xl text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[10px] font-mono uppercase text-zinc-400">Horas</div>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-2xl text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] font-mono uppercase text-zinc-400">Minutos</div>
              </div>
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="font-display font-bold text-2xl text-amber-300 animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] font-mono uppercase text-amber-300 font-bold">Segundos</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Metrics Teaser Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Cadastro</div>
            <div className="font-display font-bold text-lg text-white">100% Gratuito</div>
          </div>

          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Atração</div>
            <div className="font-display font-bold text-lg text-emerald-400">Novos Membros</div>
          </div>

          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Impulsionamento</div>
            <div className="font-display font-bold text-lg text-amber-300">Créditos de Alcance</div>
          </div>

          <div className="p-4 rounded-2xl glass border border-white/10 space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase font-mono">Recompensas</div>
            <div className="font-display font-bold text-lg text-white">Afiliados & Comissão</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
