
import React, { useState, useEffect } from 'react';
import { COMPANY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="h-12 w-auto flex items-center">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ebs-logo-placeholder.png" 
              alt="EBS Logo" 
              className={`h-10 w-auto object-contain transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className={`font-black text-xl tracking-tighter ml-2 ${isScrolled ? 'text-[#003865]' : 'text-white'}`}>
              {COMPANY_NAME}
            </span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-8 font-semibold uppercase text-xs tracking-widest ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
          <a href="#home" className="hover:text-blue-500 transition-colors">Início</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">Quem Somos</a>
          <a href="#products" className="hover:text-blue-500 transition-colors">Produtos</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contato</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-[#003865]' : 'text-white'}`}
            >
                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 py-6 px-4 flex flex-col space-y-4 font-bold text-slate-800">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Início</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Quem Somos</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Produtos</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false) } className="hover:text-blue-600">Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
