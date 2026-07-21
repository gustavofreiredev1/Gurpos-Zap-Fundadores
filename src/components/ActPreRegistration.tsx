import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Crown,
  Lock,
  Zap
} from 'lucide-react';

interface ActPreRegistrationProps {
  onSuccess: (data: { name: string; email: string; whatsapp: string; groups: string }) => void;
}

export const ActPreRegistration: React.FC<ActPreRegistrationProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    groups: '1-3'
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(formData);
    }, 1200);
  };

  return (
    <section id="register" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0b0d14] to-[#050608]">
      
      {/* Background Glow & Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/15 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Chapter Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Capítulo Final • O Portal de Acesso</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Garanta Sua Posição no Lançamento <br />
            <span className="text-gradient-emerald">Pré-Cadastro VIP de Membro Fundador</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Preencha seus dados reais para receber o convite prioritário no WhatsApp minutos antes da abertura pública.
          </p>
        </motion.div>

        {/* ULTRA-SLEEK FORM CARD */}
        <div className="max-w-2xl mx-auto">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/40 bg-zinc-950/90 space-y-6 shadow-2xl relative overflow-hidden"
          >
            
            {/* Form Header Info */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-300">
              <Crown className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Ao se cadastrar agora, você garante a <strong>taxa vitalícia de 2.9%</strong> e os <strong>10.000 créditos bônus</strong>.
              </span>
            </div>

            {/* Field 1: Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span>Seu Nome Completo</span>
              </label>
              <input 
                type="text" 
                required
                placeholder="Ex: Gabriel Siqueira"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl glass-input text-sm placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            {/* Field 2: Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Seu Melhor E-mail Profissional</span>
              </label>
              <input 
                type="email" 
                required
                placeholder="Ex: gabriel@suaempresa.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl glass-input text-sm placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            {/* Field 3: WhatsApp */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp com DDD (Para Receber o Acesso)</span>
              </label>
              <input 
                type="tel" 
                required
                placeholder="Ex: (11) 99876-5432"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl glass-input text-sm placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            {/* Field 4: Groups Count */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Quantidade de Grupos Que Pretende Automatizar</span>
              </label>
              <select 
                value={formData.groups}
                onChange={(e) => setFormData({ ...formData, groups: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl glass-input text-sm text-white bg-zinc-950/90 focus:ring-2 focus:ring-emerald-500/30"
              >
                <option value="1-3">1 a 3 grupos (Iniciante VIP)</option>
                <option value="4-10">4 a 10 grupos (Escala Média)</option>
                <option value="11-30">11 a 30 grupos (Grande Produtor)</option>
                <option value="31+">Mais de 30 grupos (Agência / Enterprise)</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 px-8 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-base hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Garantir Acesso Antecipado + Benefícios Fundador</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Security Guarantee Note */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Seus dados estão protegidos por criptografia de ponta a ponta. Zero SPAM.</span>
            </div>

          </motion.form>
        </div>

      </div>
    </section>
  );
};
