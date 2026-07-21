import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, X } from 'lucide-react';
import { NotificationToastData } from '../types';

export const LiveNotificationToast: React.FC = () => {
  const notifications: NotificationToastData[] = [
    { id: '1', name: 'Rodrigo M.', location: 'São Paulo, SP', groups: '11-50 grupos', timeAgo: 'há 2 minutos' },
    { id: '2', name: 'Mariana V.', location: 'Belo Horizonte, MG', groups: '4-10 grupos', timeAgo: 'há 4 minutos' },
    { id: '3', name: 'Felipe T.', location: 'Rio de Janeiro, RJ', groups: 'Mais de 50 grupos', timeAgo: 'há 6 minutos' },
    { id: '4', name: 'Guilherme K.', location: 'Curitiba, PR', groups: '1-3 grupos', timeAgo: 'há 9 minutos' },
    { id: '5', name: 'Beatriz C.', location: 'Salvador, BA', groups: '11-50 grupos', timeAgo: 'há 12 minutos' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Rotate toasts every 12 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const toast = notifications[currentIndex];

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-40 max-w-xs sm:max-w-sm w-full animate-fadeUp">
      <div className="p-4 rounded-2xl glass-card border border-emerald-500/30 bg-[#07080a]/90 shadow-2xl flex items-start gap-3 relative group">
        
        {/* Avatar Badge */}
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center justify-center shrink-0">
          <Crown className="w-5 h-5 text-amber-400" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-0.5 pr-4 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">{toast.name}</span>
            <span className="text-[10px] text-zinc-500">{toast.timeAgo}</span>
          </div>

          <p className="text-zinc-300">
            Garantiu vaga de Fundador em <strong className="text-emerald-300">{toast.location}</strong>
          </p>

          <div className="text-[10px] font-semibold text-amber-300 pt-0.5">
            ● Gestor de {toast.groups}
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-zinc-500 hover:text-white p-1 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
