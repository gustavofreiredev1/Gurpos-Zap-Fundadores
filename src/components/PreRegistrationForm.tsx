import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Crown, 
  Sparkles, 
  User, 
  Mail, 
  Phone, 
  Users, 
  Tag, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { FounderRegistration } from '../types';

interface PreRegistrationFormProps {
  onSuccess: (registration: FounderRegistration) => void;
  spotsFilled: number;
  maxSpots: number;
}

export const PreRegistrationForm: React.FC<PreRegistrationFormProps> = ({
  onSuccess,
  spotsFilled,
  maxSpots
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupCount: '1 a 3 grupos',
    niche: 'Infoprodutos & Cursos',
    acceptTerms: true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 2) {
      if (value.length > 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      }
    }
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (!formData.name.trim() || formData.name.trim().split(' ').length < 2) {
      setErrorMsg('Por favor, informe seu nome e sobrenome completo.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Informe um endereço de e-mail válido.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Informe um número de WhatsApp válido com DDD (mínimo 10 dígitos).');
      return;
    }

    if (!formData.acceptTerms) {
      setErrorMsg('Você precisa concordar em receber os avisos sobre o lançamento no WhatsApp.');
      return;
    }

    setLoading(true);

    // Simulate network submission
    setTimeout(() => {
      const referralCode = 'FUNDADOR-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      const newRegistration: FounderRegistration = {
        id: 'reg-' + Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
        groupCount: formData.groupCount,
        niche: formData.niche,
        createdAt: new Date().toISOString(),
        referralCode,
      };

      // Save locally
      try {
        const existing = JSON.parse(localStorage.getItem('zapgroup_founders') || '[]');
        existing.push(newRegistration);
        localStorage.setItem('zapgroup_founders', JSON.stringify(existing));
      } catch (err) {
        console.error('Error saving registration', err);
      }

      setLoading(false);
      onSuccess(newRegistration);
    }, 900);
  };

  return (
    <section id="cadastro" className="py-24 bg-gradient-to-b from-[#07080a] via-[#090b0e] to-zinc-950 relative overflow-hidden border-t border-white/10">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Reserva de Vaga de Fundador</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Formulário VIP de Pré-Cadastro
          </h2>

          <p className="text-base text-zinc-300 max-w-xl mx-auto">
            Preencha abaixo em menos de 1 minuto e garanta permanentemente sua taxa preferencial de 2,9% e os 10.000 créditos bônus.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl glass-card p-6 sm:p-10 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Garantia de Condição de Fundador</div>
                <div className="text-xs text-zinc-400">100% Gratuito • Sem Cartão de Crédito</div>
              </div>
            </div>

            <div className="hidden sm:block text-right">
              <div className="text-xs text-zinc-400">Vagas Restantes</div>
              <div className="font-display font-bold text-base text-amber-300">{maxSpots - spotsFilled} de {maxSpots}</div>
            </div>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 animate-fadeUp">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Nome Completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-zinc-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Seu Melhor E-mail *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="exemplo@seuemail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-zinc-500"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  WhatsApp com DDD *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="(11) 99999-8888"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-zinc-500"
                  />
                </div>
              </div>

              {/* Number of Groups */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Quantos Grupos Administra Atualmente?
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.groupCount}
                    onChange={(e) => setFormData({ ...formData, groupCount: e.target.value })}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white bg-[#0e0f12] cursor-pointer"
                  >
                    <option value="1 a 3 grupos">1 a 3 grupos</option>
                    <option value="4 a 10 grupos">4 a 10 grupos</option>
                    <option value="11 a 50 grupos">11 a 50 grupos</option>
                    <option value="Mais de 50 grupos">Mais de 50 grupos</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Niche Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Nicho Principal do seu Grupo ou Comunidade
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Tag className="w-4 h-4" />
                </div>
                <select
                  value={formData.niche}
                  onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white bg-[#0e0f12] cursor-pointer"
                >
                  <option value="Infoprodutos & Cursos">Infoprodutos, Cursos & Treinamentos</option>
                  <option value="Investimentos & Cripto">Investimentos, Cripto & Mercado Financeiro</option>
                  <option value="Esportes & Apostas">Esportes, Tips & Apostas Esportivas</option>
                  <option value="Vendas & E-commerce">Vendas, E-commerce & Dropshipping</option>
                  <option value="Mentoria & Networking">Mentoria, Mastermind & Networking</option>
                  <option value="Outro">Outro segmento</option>
                </select>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                className="mt-1 w-4 h-4 rounded accent-emerald-500 bg-zinc-800 border-white/20"
              />
              <label htmlFor="terms" className="text-xs text-zinc-400 leading-relaxed cursor-pointer">
                Concordo em receber atualizações do lançamento no meu WhatsApp e e-mail. Posso me descadastrar a qualquer momento.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-base hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Reservando sua vaga...</span>
                </div>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Garantir Minha Vaga de Fundador Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Security Guarantee Note */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Seus dados estão 100% seguros sob criptografia de 256 bits.</span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
