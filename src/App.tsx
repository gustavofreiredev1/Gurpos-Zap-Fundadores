import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActProblem } from './components/ActProblem';
import { ActSolution } from './components/ActSolution';
import { ActGrowth } from './components/ActGrowth';
import { ActMonetization } from './components/ActMonetization';
import { ActFounders } from './components/ActFounders';
import { ActCountdown } from './components/ActCountdown';
import { ActPreRegistration } from './components/ActPreRegistration';
import { SuccessModal } from './components/SuccessModal';
import { LiveNotificationToast } from './components/LiveNotificationToast';
import { Footer } from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    whatsapp: string;
    groups: string;
  } | null>(null);

  const handlePreRegistrationSuccess = (data: { name: string; email: string; whatsapp: string; groups: string }) => {
    setUserData(data);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f0f0f2] relative selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Storytelling Narrative Flow */}
      <main className="relative z-10">
        
        {/* Entrance: 100vh Full Screen Impact Hero */}
        <Hero />

        {/* Capítulo 01: O Problema (Caos Manual vs Sistema Autônomo) */}
        <ActProblem />

        {/* Capítulo 02: A Solução (SaaS Interface Mockup Interativo) */}
        <ActSolution />

        {/* Capítulo 03: Quanto Pode Crescer (Simulador de Expansão & MRR) */}
        <ActGrowth />

        {/* Capítulo 04: Como Ganhar Dinheiro (Afiliados 40% & Cartão de Créditos) */}
        <ActMonetization />

        {/* Capítulo 05: Programa Fundadores (Clube VIP Dourado & Vantagens Vitalícias) */}
        <ActFounders />

        {/* Capítulo 06: Contagem Regressiva para 30 de Julho */}
        <ActCountdown />

        {/* Capítulo Final: Pré-Cadastro VIP */}
        <ActPreRegistration onSuccess={handlePreRegistrationSuccess} />

      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Confirmation Modal */}
      <SuccessModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        userData={userData}
      />

      {/* Real-time Ticker Toasts */}
      <LiveNotificationToast />

    </div>
  );
}
