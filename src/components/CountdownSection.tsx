import React, { useState, useEffect } from 'react';
import { Timer, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';

interface CountdownSectionProps {
  onOpenForm: () => void;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ onOpenForm }) => {
  // Target date: July 30, 2026 at 23:59:59
  const targetDate = new Date('2026-07-30T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative py-16 bg-gradient-to-b from-zinc-950 via-[#0a0c10] to-[#07080a] border-y border-white/10 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Timer className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Contagem Regressiva para o Lançamento Oficial</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            As Condições Especiais de Fundador Expiram em <br />
            <span className="text-gradient-gold">30 de Julho de 2026</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300">
            Após essa data ou assim que as 500 vagas forem preenchidas, o cadastro será encerrado e a plataforma passará a cobrar mensalidade padrão (R$ 197/mês + 7,9% de taxa).
          </p>
        </div>

        {/* Timer Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto mb-10">
          
          {/* Days */}
          <div className="p-4 sm:p-6 rounded-2xl glass-card border border-amber-500/30 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-300" />
            <div className="font-display font-bold text-3xl sm:text-5xl text-amber-300 tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-2">
              Dias
            </div>
          </div>

          {/* Hours */}
          <div className="p-4 sm:p-6 rounded-2xl glass-card border border-amber-500/30 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-emerald-400" />
            <div className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-2">
              Horas
            </div>
          </div>

          {/* Minutes */}
          <div className="p-4 sm:p-6 rounded-2xl glass-card border border-amber-500/30 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-300" />
            <div className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-2">
              Minutos
            </div>
          </div>

          {/* Seconds */}
          <div className="p-4 sm:p-6 rounded-2xl glass-card border border-amber-500/30 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-amber-400 animate-pulse" />
            <div className="font-display font-bold text-3xl sm:text-5xl text-amber-400 tracking-tight">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-2">
              Segundos
            </div>
          </div>

        </div>

        {/* Urgency Alert Card */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-200">Atenção para a Escassez Real</div>
              <div className="text-xs text-zinc-300">As vagas estão sendo preenchidas por ordem de chegada.</div>
            </div>
          </div>

          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Pré-Cadastrar Agora</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
