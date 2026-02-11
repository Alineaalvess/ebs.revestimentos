
import React from 'react';
import { HERO_IMAGE, CONTACT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
        <span className="text-blue-400">EBS REVESTIMENTOS</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
        Somos especialistas em recuperação e revestimentos de cilindros para máquinas offset e indústrias. Tecnologia de ponta com revestimentos de alta performance para sua empresas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#products" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Ver Produtos
          </a>
          <a 
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-md border border-white/30 transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            Solicitar Orçamento
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-50 hover:opacity-100 transition-opacity">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
