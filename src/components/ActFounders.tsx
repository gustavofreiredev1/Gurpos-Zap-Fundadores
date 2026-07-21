import React from 'react';
import { motion } from 'motion/react';
import { 
  Crown, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Percent, 
  Zap, 
  Lock, 
  Award,
  ArrowRight
} from 'lucide-react';

export const ActFounders: React.FC = () => {
  return (
    <section id="founders" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0f121a] to-[#07080a]">
      
      {/* Ambient Lighting & Luxury Backlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Chapter Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-widest shadow-lg shadow-amber-500/10">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Capítulo 05 • O Clube de Elite</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Programa Membro Fundador <br />
            <span className="text-gradient-gold">Uma Condição Vitalícia Reservada a Poucos</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Isto não é uma promoção de vendas. É um acordo de parceria para os primeiros administradores que moldarão o futuro do ZapGroup.
          </p>
        </motion.div>

        {/* The VIP Luxury Founders Card Vault */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-14 rounded-3xl glass-panel border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-zinc-950 to-emerald-950/20 relative overflow-hidden shadow-2xl space-y-12"
          >
            
            {/* Top Badge Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-white">CONTRATO DE VANTAGEM VITALÍCIA</div>
                  <div className="text-xs text-amber-300/80">Disponível exclusivamente para quem realizar o pré-cadastro até 30 de Julho</div>
                </div>
              </div>

              <span className="px-4 py-2 rounded-2xl bg-amber-500 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20">
                <Lock className="w-3.5 h-3.5" />
                VAGAS LIMITADAS AOS PRIMEIROS 500
              </span>
            </div>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Perk 1 */}
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/30 space-y-3 relative group hover:border-amber-500/60 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-base">Taxa Congelada em 2.9% Para Sempre</div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Enquanto novos usuários pagarão até 8.9% por transação no lançamento aberto, sua conta terá a menor taxa da história garantida por contrato vitalício.
                </p>
              </div>

              {/* Perk 2 */}
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 space-y-3 relative group hover:border-emerald-500/60 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-base">10.000 Créditos Iniciais de Presente</div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Comece sem gastar um centavo adicional. Sua conta já vem abastecida com 10.000 créditos para gerenciar milhares de novos membros no primeiro mês.
                </p>
              </div>

              {/* Perk 3 */}
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-purple-500/30 space-y-3 relative group hover:border-purple-500/60 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-base">Prioridade de Suporte VIP no WhatsApp</div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Acesso ao canal direto de engenheiros da nossa equipe. Suporte imediato e implementação de sugestões solicitadas por você.
                </p>
              </div>

              {/* Perk 4 */}
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-blue-500/30 space-y-3 relative group hover:border-blue-500/60 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-base">Selo de Verificação de Grupo Oficial</div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Seus links de checkout e páginas de grupo carregarão o selo dourado de comunidade verificada ZapGroup, aumentando sua conversão de vendas.
                </p>
              </div>

            </div>

            {/* Bottom Call to Action inside Founders block */}
            <div className="text-center pt-6 border-t border-white/10">
              <a 
                href="#register"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-500 text-slate-950 font-bold text-sm hover:brightness-110 transition-all shadow-xl shadow-amber-500/20"
              >
                <span>Garantir Minha Vaga no Programa Fundadores</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
