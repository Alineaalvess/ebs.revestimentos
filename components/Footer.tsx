
import React from 'react';
import { COMPANY_NAME, CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 items-start justify-items-center md:justify-items-start">
          <div className="w-full max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start text-white mb-4">
              <span className="font-bold text-xl tracking-tight">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Referência nacional em revestimentos para os segmentos industrial e gráfico, desenvolvemos soluções personalizadas que aumentam o desempenho dos cilindros, prolongam sua vida útil e garantem máxima eficiência, durabilidade e confiabilidade.
            </p>
          </div>
          
          <div className="w-full max-w-sm text-center md:text-left">
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Atendimento</h4>
            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-phone text-blue-500 mt-1"></i>
                <span className="text-slate-300">{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-envelope text-blue-500 mt-1"></i>
                <span className="text-slate-300">{CONTACT.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-blue-500 mt-1"></i>
                <span className="text-slate-300">{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-sm text-center md:text-right flex flex-col items-center md:items-end">
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Redes Sociais</h4>
            <div className="flex space-x-3 justify-center md:justify-end">
              <a 
                href="https://www.instagram.com/ebsrevest/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
                title="Instagram EBS REVEST"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/EBSREVEST"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all"
                title="Facebook EBS REVEST"
              >
                <i className="fa-brands fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/ebs-revestimentos/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all"
                title="LinkedIn EBS REVEST"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-900 text-center text-[10px] text-slate-600">
          <p>
            &copy; 2025 {COMPANY_NAME} | Todos os Direitos Reservados | Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/santech.s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Santech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
