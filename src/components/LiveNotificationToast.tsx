import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, CheckCircle2 } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'Gabriel S.', city: 'São Paulo, SP', slots: '#184' },
  { name: 'Mariana R.', city: 'Rio de Janeiro, RJ', slots: '#185' },
  { name: 'Rodrigo M.', city: 'Belo Horizonte, MG', slots: '#186' },
  { name: 'Camila P.', city: 'Curitiba, PR', slots: '#187' },
  { name: 'Felipe A.', city: 'Florianópolis, SC', slots: '#188' },
];

export const LiveNotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const current = NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass rounded-2xl p-3.5 border border-emerald-500/30 bg-zinc-950/80 shadow-2xl flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Crown className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>{current.name}</span>
                <span className="text-[10px] text-zinc-400 font-normal">({current.city})</span>
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Gantiu a Vaga Fundador {current.slots}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
