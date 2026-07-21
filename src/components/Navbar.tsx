import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, Menu, X, Users, ChevronRight } from 'lucide-react';

interface NavbarProps {
  spotsFilled: number;
  maxSpots: number;
  onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ spotsFilled, maxSpots, onOpenForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Afiliados', href: '#afiliados' },
    { label: 'Créditos', href: '#creditos' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07080a]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 fill-slate-950" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg tracking-tight text-white">ZapGroup</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Fundadores
                </span>
              </div>
              <span className="text-xs text-zinc-400 font-medium hidden sm:block">Plataforma de Grupos VIP</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-badge px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Spots Counter */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
              <Users className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>
                <strong className="text-amber-200">{spotsFilled}</strong>/{maxSpots} Vagas
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenForm}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-full animate-pulse opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[#07080a] text-xs font-semibold text-emerald-300 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                <span>Garantir Vaga</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenForm}
              className="px-3 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-semibold text-xs flex items-center gap-1 shadow-lg shadow-emerald-500/20"
            >
              <span>Vaga VIP</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 animate-fadeUp">
          <div className="flex items-center justify-between px-2 py-2 mb-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Vagas Reservadas:</span>
            </div>
            <span className="font-bold">{spotsFilled} de {maxSpots}</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenForm();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Garantir Vaga de Fundador</span>
          </button>
        </div>
      )}
    </header>
  );
};
