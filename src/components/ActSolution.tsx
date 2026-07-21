import React from 'react';
import { motion } from 'motion/react';
import { 
  PlusCircle, 
  ShieldCheck, 
  Users, 
  Zap, 
  Gift, 
  Sparkles,
  ArrowRight,
  XCircle,
  CheckCircle2,
  BarChart3,
  Coins,
  Share2,
  FolderTree
} from 'lucide-react';

export const ActSolution: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "1. Cadastre seu grupo",
      desc: "Seu grupo entra no ecossistema de crescimento gratuitamente.",
      icon: PlusCircle,
      accent: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
    },
    {
      number: "02",
      title: "2. Ative sua comunidade",
      desc: "Mantenha a máxima qualidade e evite spam na plataforma.",
      icon: ShieldCheck,
      accent: "border-blue-500/30 text-blue-400 bg-blue-500/10"
    },
    {
      number: "03",
      title: "3. Receba visitantes",
      desc: "Seu grupo começa a alcançar novos usuários interessados.",
      icon: Users,
      accent: "border-purple-500/30 text-purple-400 bg-purple-500/10"
    },
    {
      number: "04",
      title: "4. Use impulsionamentos",
      desc: "Aumente sua visibilidade na Home, busca e categorias.",
      icon: Zap,
      accent: "border-amber-500/30 text-amber-400 bg-amber-500/10"
    },
    {
      number: "05",
      title: "5. Ganhe recompensas",
      desc: "Indique usuários e participe ativamente do crescimento.",
      icon: Gift,
      accent: "border-rose-500/30 text-rose-400 bg-rose-500/10"
    }
  ];

  const saasFeatures = [
    {
      title: "Cadastro Inteligente de Grupos",
      desc: "Categorização precisa por nichos e tags de busca para atração segmentada.",
      icon: FolderTree
    },
    {
      title: "Dashboard do Administrador",
      desc: "Painel centralizado para gerenciar múltiplos grupos, saldo de créditos e estatísticas.",
      icon: ShieldCheck
    },
    {
      title: "Analytics de Mídia & Cliques",
      desc: "Métricas transparentes sobre visualizações, taxa de conversão e origem do público.",
      icon: BarChart3
    },
    {
      title: "Sistema de Créditos",
      desc: "Moeda flexível de crescimento para ativar destaques estratégicos a qualquer momento.",
      icon: Coins
    },
    {
      title: "Impulsionamentos de Alcance",
      desc: "Coloque sua comunidade no topo da Home, de categorias e de pesquisas de forma ativa.",
      icon: Zap
    },
    {
      title: "Programa de Afiliados Integrado",
      desc: "Monetize indicações e ganhe comissões diretas e créditos bônus ao expandir a rede.",
      icon: Share2
    }
  ];

  return (
    <section id="ecosystem" className="py-28 relative overflow-hidden bg-[#07080a]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Section 1: Não É Apenas Um Diretório (SaaS Positioning & Comparison) */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Plataforma de Crescimento</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Não somos apenas um diretório. <br />
              <span className="text-gradient-emerald">Somos um ecossistema SaaS de crescimento.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Diferente de listas estáticas passivas, oferecemos infraestrutura completa para transformar seu grupo em uma comunidade altamente engajada.
            </p>
          </motion.div>

          {/* Comparison Cards: Antes vs Depois */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Antes: Diretório Comum */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl glass-panel border border-rose-500/30 bg-rose-950/10 space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
                <span className="font-display font-bold text-xl text-rose-300 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  Diretório Comum (Antes)
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300">
                  PASSIVO
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-zinc-400 font-light">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Apenas divulgar um link solto sem destaque ou controle</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Sem dados ou métricas de quem clicou no seu grupo</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Crescimento lento e dependente da sorte dos buscadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Grupos abandonados misturados com grupos ativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Nenhum retorno financeiro para o esforço do administrador</span>
                </li>
              </ul>
            </motion.div>

            {/* Depois: Nossa Plataforma */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl glass-panel border border-emerald-500/50 bg-emerald-950/20 space-y-6 relative overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4">
                <span className="font-display font-bold text-xl text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Nossa Plataforma (Depois)
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  AUTÔNOMO & ATIVO
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-zinc-200 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Crescimento Ativo:</strong> Atração contínua de visitantes reais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Analytics Completo:</strong> Dados de cliques, origens e conversão</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Impulsionamento Estratégico:</strong> Créditos para topo da Home e Busca</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Recompensas & Afiliados:</strong> Receba comissões ao indicar novos ADMs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Comunidade Qualificada:</strong> Ativação única contra spam</span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* SaaS Core Tools Grid */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {saasFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                  <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">{feat.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Jornada Visual do Administrador (5 Passos) */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              A Jornada Completa do Seu Grupo
            </h2>
            <p className="text-base text-zinc-400 max-w-xl mx-auto font-light">
              Entenda como seu grupo evolui do cadastro até a liderança da categoria.
            </p>
          </motion.div>

          {/* 5 Steps Cards Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4 relative flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl border ${step.accent}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-white transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <span>Etapa {step.number}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
