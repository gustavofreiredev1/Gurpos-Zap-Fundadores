import React from 'react';
import { Star, Quote, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { TestimonialItem } from '../types';

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      name: 'Lucas Siqueira',
      role: 'Criador de Conteúdo & Infoprodutor',
      community: 'Comunidade Trader de Elite',
      members: '3.400 membros VIPs',
      avatar: 'LS',
      quote: 'Eu gastava 4 horas por dia conferindo comprovantes de PIX no WhatsApp de suporte e adicionando aluno por aluno. Com a plataforma no beta, reduzi isso a ZERO e meu faturamento subiu 45%.',
      metrics: 'R$ 68.000 / mês',
    },
    {
      id: '2',
      name: 'Dra. Camila Nogueira',
      role: 'Mentora de Carreiras Médicas',
      community: 'Club Medicina de Sucesso',
      members: '1.200 membros VIPs',
      avatar: 'CN',
      quote: 'O recurso de links dinâmicos e a remoção educada de inadimplentes é espetacular. Nossos alunos adoram a experiência e a taxa de renovação subiu para 89%.',
      metrics: '89% de Retenção',
    },
    {
      id: '3',
      name: 'Gabriel Arantes',
      role: 'Gestor de Tráfego & Afiliado',
      community: 'Comunidade Tráfego Sem Segredo',
      members: '5.100 membros VIPs',
      avatar: 'GA',
      quote: 'Garantir a vaga de Fundador com a taxa de 2,9% e a comissão de 40% em afiliados foi a melhor decisão do ano. Recomendo de olhos fechados!',
      metrics: '40% Comissão Afiliado',
    },
  ];

  return (
    <section className="py-24 bg-[#050608] relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Provado por Quem Já Testa</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Quem Já Usou no Beta <br />
            <span className="text-gradient-emerald">Não Volta Atrás</span>
          </h2>

          <p className="text-base text-zinc-300">
            Veja o depoimento de líderes de comunidades que testaram nossa tecnologia e já escalaram seus grupos de WhatsApp.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between space-y-6 relative group hover:border-emerald-500/30 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {item.metrics}
                  </span>
                </div>

                <p className="text-sm text-zinc-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold flex items-center justify-center text-sm shrink-0">
                  {item.avatar}
                </div>

                <div>
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-zinc-400">{item.role}</div>
                  <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                    <Users className="w-3 h-3" />
                    <span>{item.community}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
