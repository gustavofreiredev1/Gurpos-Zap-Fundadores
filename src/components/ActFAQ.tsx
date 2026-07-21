import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const ActFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso pagar para cadastrar meu grupo?",
      a: "Não. O cadastro do seu grupo de WhatsApp na plataforma é 100% gratuito. Grupos comerciais e promocionais possuem uma ativação única para manter o ecossistema com alta qualidade."
    },
    {
      q: "Posso cadastrar mais de um grupo de WhatsApp?",
      a: "Sim! Você pode cadastrar quantos grupos desejar no seu painel de administrador e gerenciá-los centralizadamente."
    },
    {
      q: "Como funcionam os créditos de impulsionamento?",
      a: "Os créditos são a moeda de crescimento da plataforma. Você pode usar seus créditos para colocar seu grupo no topo da Home, em destaque na categoria e nas primeiras posições de busca."
    },
    {
      q: "Como funciona o Programa de Afiliados?",
      a: "Ao se cadastrar, você ganha um link exclusivo. Quando outros administradores criam conta ou compram créditos pelo seu link, você ganha créditos bônus ou comissão em dinheiro via PIX."
    },
    {
      q: "O que é a ativação única de grupos comercial?",
      a: "A taxa de ativação única garante a verificação do grupo, moderação contínua e filtro contra spam, assegurando que o visitante receba um link confiável e ativo."
    },
    {
      q: "Como faço para participar do Programa Fundadores?",
      a: "Basta realizar seu pré-cadastro antes da data oficial de lançamento (30/07). Todos os administradores cadastrados neste período receberão automaticamente o Badge Fundador e os benefícios exclusivos."
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#07080a] via-[#0b0d12] to-[#07080a]">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 max-w-xl mx-auto font-light">
            Tudo o que você precisa saber sobre o cadastro, créditos e o ecossistema de grupos.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
