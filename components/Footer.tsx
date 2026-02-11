
import React from 'react';
import { COMPANY_NAME, CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          <div className="col-span-1">
            <div className="flex items-center text-white mb-4">
              <span className="font-bold text-xl tracking-tight">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Referência brasileira em revestimentos para indústrias e gráficas. Desenvolvendo aplicações personalizadas que ampliam a funcionalidade dos cilindros e prolongam sua vida útil, sempre com foco em eficiência e confiabilidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Produtos</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Atendimento</h4>
            <ul className="space-y-2 text-sm">
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

          <div className="md:text-right flex flex-col items-start md:items-end">
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Redes Sociais</h4>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/ebs_revestimentos/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
                title="Instagram EBS Revestimentos"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/ebs-revestimentos/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all"
                title="LinkedIn EBS Revestimentos"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-900 text-center text-[10px] text-slate-600">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} | Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
