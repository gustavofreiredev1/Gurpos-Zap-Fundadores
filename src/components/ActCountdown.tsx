import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, Sparkles, AlertCircle } from 'lucide-react';

export const ActCountdown: React.FC = () => {
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
    <section className="py-24 relative overflow-hidden bg-[#07080a]">
      
      {/* Neon Lighting Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/15 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        
        {/* Story Chapter Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
            <span>Capítulo 06 • A Fagulha do Lançamento</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            O Lançamento Oficial Acontece em <br />
            <span className="text-gradient-emerald">30 de Julho</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            As portas do sistema autônomo e as condições do Programa Fundadores serão fechadas assim que a contagem zerar.
          </p>
        </motion.div>

        {/* GIANT COUNTDOWN NUMERALS GRID */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Days */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-500/30 bg-zinc-950/80 space-y-2 shadow-2xl relative overflow-hidden"
          >
            <div className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-xs font-mono uppercase text-emerald-400 tracking-widest font-bold">
              Dias
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-500/30 bg-zinc-950/80 space-y-2 shadow-2xl relative overflow-hidden"
          >
            <div className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs font-mono uppercase text-emerald-400 tracking-widest font-bold">
              Horas
            </div>
          </motion.div>

          {/* Minutes */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-500/30 bg-zinc-950/80 space-y-2 shadow-2xl relative overflow-hidden"
          >
            <div className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs font-mono uppercase text-emerald-400 tracking-widest font-bold">
              Minutos
            </div>
          </motion.div>

          {/* Seconds (Pulsing Accent) */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-amber-500/40 bg-zinc-950/80 space-y-2 shadow-2xl relative overflow-hidden"
          >
            <div className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-amber-300 tracking-tight animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs font-mono uppercase text-amber-300 tracking-widest font-bold">
              Segundos
            </div>
          </motion.div>

        </div>

        {/* Live Status Note */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Servidores em preparação final • Infraestrutura em Nuvem na AWS Brasil</span>
        </div>

      </div>
    </section>
  );
};
