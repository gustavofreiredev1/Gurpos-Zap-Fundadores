import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, User, Mail, MessageSquare, Phone } from 'lucide-react';

interface ActPreRegistrationProps {
  onSuccess: () => void;
}

export const ActPreRegistration: React.FC<ActPreRegistrationProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [groupCategory, setGroupCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email && whatsapp) {
      onSuccess();
    }
  };

  return (
    <section id="register" className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-emerald-500/15 blur-[220px] pointer-events-none rounded-full animate-pulseGlow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-zinc-950 to-zinc-950 space-y-10 relative overflow-hidden shadow-2xl">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Garantir Acesso de Fundador</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Seu grupo já existe. <br />
              <span className="text-gradient-emerald">Agora é hora de fazer ele crescer.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Cadastre seu grupo gratuitamente hoje mesmo e garanta todos os benefícios do lançamento em <strong className="text-emerald-400">30/07</strong>.
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            
            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-400" />
                <span>Seu Nome Completo</span>
              </label>
              <input 
                type="text" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Carlos Silva"
                className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 text-sm transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Seu Melhor E-mail</span>
                </label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="carlos@email.com"
                  className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp (DDD + Número)</span>
                </label>
                <input 
                  type="tel" 
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 text-sm transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Nicho / Categoria do Seu Grupo</span>
              </label>
              <select 
                value={groupCategory}
                onChange={(e) => setGroupCategory(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-white focus:outline-none focus:border-emerald-500 text-sm transition-all"
              >
                <option value="">Selecione uma categoria (opcional)</option>
                <option value="negocios">Negócios & Empreendedorismo</option>
                <option value="promocoes">Cupons, Ofertas & Promoções</option>
                <option value="tecnologia">Tecnologia, IA & Programação</option>
                <option value="marketing">Marketing Digital & Vendas</option>
                <option value="investimentos">Investimentos & Cripto</option>
                <option value="educacao">Cursos, Educação & Concursos</option>
                <option value="outros">Outra Categoria</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-base hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Cadastrar meu grupo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-zinc-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Cadastro Gratuito
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Badge Fundador Garantido
              </span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
