import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'O que é o Programa Fundadores e quem pode participar?',
      answer: 'O Programa Fundadores é uma iniciativa limitada aos primeiros 500 gestores de comunidades, infoprodutores e criadores. Ao se cadastrar como Fundador, você garante acesso vitalício com taxa reduzida de 2,9% por venda (em vez de 7,9%), comissão de 40% como afiliado, bônus de 10.000 créditos e suporte VIP prioritário.',
      category: 'Geral',
    },
    {
      id: '2',
      question: 'Preciso pagar algum valor ou inserir cartão de crédito hoje?',
      answer: 'Não! O pré-cadastro de hoje é 100% gratuito e não exige cartão de crédito. Você está reservando a sua vaga e garantindo as condições especiais de Fundador para o momento do lançamento oficial em 30 de Julho.',
      category: 'Pagamentos',
    },
    {
      id: '3',
      question: 'Como funciona a aprovação e remoção de membros automática?',
      answer: 'A plataforma gera um link de checkout próprio para o seu grupo (integrado com pagamento via PIX ou Cartão). Assim que o pagamento é aprovado, nosso bot gera um link temporário individual para o cliente entrar. Caso o cliente cancele ou atrase a mensalidade, o sistema envia avisos amigáveis e realiza a remoção automática.',
      category: 'Funcionamento',
    },
    {
      id: '4',
      question: 'Existe risco de meu número do WhatsApp ser banido?',
      answer: 'Nossa tecnologia utiliza práticas totalmente alinhadas com as diretrizes do WhatsApp, incluindo envio de convites individuais e limitação inteligente de requisições (rate-limiting). Diferente de ferramentas de spam piratas, nosso foco é a gestão profissional de grupos onde o cliente deseja estar.',
      category: 'Segurança',
    },
    {
      id: '5',
      question: 'Como funcionam os 10.000 créditos bônus e a comissão de 40%?',
      answer: 'No dia do lançamento (30/07), sua conta criada com o e-mail cadastrado já estará pré-carregada com 10.000 créditos para você usar livremente. Além disso, seu link de afiliado estará liberado para comissão de 40% recorrente sobre qualquer indicação.',
      category: 'Benefícios',
    },
    {
      id: '6',
      question: 'O que acontece no dia 30 de Julho de 2026?',
      answer: '30 de Julho é a data do Lançamento Oficial. Todos os Fundadores cadastrados receberão em primeira mão o link para ativação da conta no e-mail e WhatsApp, com todos os seus benefícios e selos devidamente ativados.',
      category: 'Lançamento',
    },
    {
      id: '7',
      question: 'Administro mais de 10 grupos de WhatsApp. A plataforma suporta?',
      answer: 'Sim! Nossa arquitetura em nuvem foi construída para suportar desde criadores com 1 grupo único até grandes agências e lançadores que gerenciam centenas de grupos simultâneos com links dinâmicos anti-lotação.',
      category: 'Escala',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Perguntas Frequentes sobre o <br />
            <span className="text-gradient-emerald">Programa Fundadores</span>
          </h2>

          <p className="text-base text-zinc-300">
            Tudo o que você precisa saber para garantir sua vaga com segurança e clareza.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl glass-card border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-emerald-500/40 bg-white/[0.05]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4 animate-fadeUp">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
