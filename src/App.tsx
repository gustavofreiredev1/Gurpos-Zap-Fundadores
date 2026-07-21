import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActProblem } from './components/ActProblem';
import { ActSolution } from './components/ActSolution';
import { ActGrowth } from './components/ActGrowth';
import { ActMonetization } from './components/ActMonetization';
import { ActPlans } from './components/ActPlans';
import { ActFounders } from './components/ActFounders';
import { ActFAQ } from './components/ActFAQ';
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

  const handlePreRegistrationSuccess = () => {
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f0f0f2] relative selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Storytelling Narrative Flow */}
      <main className="relative z-10">
        
        {/* Entrance: Full Screen Impact Hero */}
        <Hero />

        {/* 01. O Problema */}
        <ActProblem />

        {/* 02. Como Funciona (5 Passos do Ecossistema) */}
        <ActSolution />

        {/* 03. Sistema de Créditos & Carteira Digital */}
        <ActGrowth />

        {/* 04. Impulsionamentos & Programa de Afiliados */}
        <ActMonetization />

        {/* 05. Planos de Acesso (Free, Pro, Business) */}
        <ActPlans />

        {/* 06. Programa Fundadores (Benefícios Exclusivos) */}
        <ActFounders />

        {/* 07. FAQ / Perguntas Frequentes */}
        <ActFAQ />

        {/* 08. Contagem Regressiva para 30/07 */}
        <ActCountdown />

        {/* 09. Cadastro Final de Grupos */}
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
