import React, { useState, useEffect } from 'react';
import { AuroraBackground } from './components/AuroraBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownSection } from './components/CountdownSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AffiliatesSection } from './components/AffiliatesSection';
import { CreditSystemSection } from './components/CreditSystemSection';
import { PlansComparisonSection } from './components/PlansComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { PreRegistrationForm } from './components/PreRegistrationForm';
import { SuccessModal } from './components/SuccessModal';
import { LiveNotificationToast } from './components/LiveNotificationToast';
import { Footer } from './components/Footer';
import { FounderRegistration } from './types';

export default function App() {
  const [maxSpots] = useState<number>(500);
  const [spotsFilled, setSpotsFilled] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('zapgroup_founders');
      const count = saved ? JSON.parse(saved).length : 0;
      return 384 + count;
    } catch {
      return 384;
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [registration, setRegistration] = useState<FounderRegistration | null>(null);

  const scrollToForm = () => {
    const el = document.getElementById('cadastro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSuccessRegistration = (newRegistration: FounderRegistration) => {
    setRegistration(newRegistration);
    setSpotsFilled((prev) => Math.min(prev + 1, maxSpots));
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f0f0f2] relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Aurora Ambient Canvas */}
      <AuroraBackground />

      {/* Main Sticky Header */}
      <Navbar 
        spotsFilled={spotsFilled} 
        maxSpots={maxSpots} 
        onOpenForm={scrollToForm} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          spotsFilled={spotsFilled} 
          maxSpots={maxSpots} 
          onOpenForm={scrollToForm} 
          onOpenSimulator={scrollToSimulator} 
        />

        <CountdownSection onOpenForm={scrollToForm} />

        <BenefitsSection onOpenForm={scrollToForm} />

        <HowItWorksSection onOpenForm={scrollToForm} />

        <AffiliatesSection onOpenForm={scrollToForm} />

        <CreditSystemSection onOpenForm={scrollToForm} />

        <PlansComparisonSection onOpenForm={scrollToForm} />

        <TestimonialsSection />

        <FAQSection />

        <PreRegistrationForm 
          onSuccess={handleSuccessRegistration} 
          spotsFilled={spotsFilled} 
          maxSpots={maxSpots} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Confirmation Modal */}
      <SuccessModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        registration={registration} 
        spotsFilled={spotsFilled} 
      />

      {/* Social Proof Toasts */}
      <LiveNotificationToast />
    </div>
  );
}
