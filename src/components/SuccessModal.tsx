import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Crown, 
  Copy, 
  Check, 
  Share2, 
  MessageSquare, 
  X,
  ExternalLink
} from 'lucide-react';
import { FounderRegistration } from '../types';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  registration: FounderRegistration | null;
  spotsFilled: number;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  registration,
  spotsFilled
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !registration) return null;

  const shareUrl = `${window.location.origin}?ref=${registration.referralCode}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeUp">
      <div className="relative w-full max-w-lg rounded-3xl glass-card border border-emerald-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden text-center space-y-6">
        
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Icon Badge */}
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-xl shadow-emerald-500/20">
          <Crown className="w-8 h-8 text-amber-400 animate-pulse" />
        </div>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold uppercase">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Vaga de Fundador # {spotsFilled} Confirmada</span>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Parabéns, {registration.name.split(' ')[0]}!
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300">
            Sua vaga com **taxa de 2,9% vitalícia** e **10.000 créditos bônus** foi reservada com sucesso para o dia 30/07.
          </p>
        </div>

        {/* Details Card */}
        <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 text-left space-y-2 text-xs font-mono text-zinc-300">
          <div className="flex justify-between">
            <span className="text-zinc-500">E-mail VIP:</span>
            <span className="text-white font-semibold">{registration.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">WhatsApp:</span>
            <span className="text-white font-semibold">{registration.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Código de Indicação:</span>
            <span className="text-emerald-400 font-bold">{registration.referralCode}</span>
          </div>
        </div>

        {/* Share Link Box */}
        <div className="space-y-2 text-left">
          <label className="block text-xs font-bold text-zinc-300 flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Seu Link de Afiliado Fundador (40% de comissão):</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 px-3 py-2.5 rounded-xl glass-input text-xs font-mono text-emerald-300 truncate select-all"
            />
            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>
        </div>

        {/* Community WhatsApp Button */}
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span>Entrar no Grupo VIP de Fundadores no WhatsApp</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
};
