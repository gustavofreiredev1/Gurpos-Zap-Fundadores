import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Crown, Sparkles, X, ArrowRight, ShieldCheck, Copy, Check } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: {
    name: string;
    email: string;
    whatsapp: string;
    groups: string;
  } | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, userData }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !userData) return null;

  const referralLink = `https://zapgroup.vip/invite?ref=${encodeURIComponent(userData.name.toLowerCase().replace(/\s+/g, '-'))}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-lg p-8 rounded-3xl glass-panel border border-emerald-500/50 bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-xl shadow-emerald-500/20">
            <Crown className="w-8 h-8 text-amber-400 animate-bounce" />
          </div>

          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
              PRÉ-CADASTRO CONFIRMADO
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
              Parabéns, {userData.name.split(' ')[0]}!
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Você garantiu sua posição no <strong>Programa Membro Fundador ZapGroup</strong>. Enviamos os detalhes do seu convite para <strong>{userData.whatsapp}</strong>.
            </p>
          </div>

          {/* Perks Summary Box */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-amber-500/30 space-y-2 text-xs">
            <div className="text-amber-300 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Seus Benefícios Garantidos:</span>
            </div>
            <ul className="text-zinc-300 space-y-1 pl-6 list-disc text-left">
              <li>Taxa congelada de <strong>2.9% vitalícia</strong></li>
              <li>Bônus de <strong>10.000 créditos iniciais</strong></li>
              <li>Acesso prioritário no lançamento em <strong>30 de Julho</strong></li>
            </ul>
          </div>

          {/* Referral Link Box */}
          <div className="space-y-2">
            <label className="text-[11px] font-mono text-zinc-400 uppercase">Seu Link de Afiliado Fundador (40% Comissão):</label>
            <div className="flex items-center gap-2 p-2 rounded-2xl glass-input">
              <input 
                type="text" 
                readOnly 
                value={referralLink}
                className="w-full bg-transparent text-xs text-zinc-300 px-2 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-1.5 hover:bg-emerald-400 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all"
          >
            Fechar e Voltar à Experiência
          </button>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
