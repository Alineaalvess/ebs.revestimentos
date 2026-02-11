
import React from 'react';
import { COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/assets/rolos.jpeg" 
                alt="Processo Industrial" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#003865] text-white p-8 rounded-xl hidden md:block shadow-2xl">
                <span className="text-4xl font-bold block">10+</span>
                <span className="text-sm uppercase tracking-wider">Anos de Experiência</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Soluções inovadoras em revestimento de cilindros com alta qualidade técnica
            </h3>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed text-justify">
  Somos a <span className="font-bold text-[#003865]">{COMPANY_NAME}</span>  atuando há anos no mercado nacional, com uma equipe altamente capacitada para atender os segmentos offset e industrial. Executamos serviços de revestimento em cilindros e peças em geral, voltados para diversos segmentos industriais, com foco no aumento da durabilidade, na recuperação precisa de medidas e na maior proteção contra o desgaste. Atuamos na manutenção corretiva e preventiva de seus equipamentos. Nossa principal competência é a responsabilidade com o cliente, aliada ao cumprimento rigoroso de prazos, à qualidade dos serviços prestados e à oferta de preços justos.
            </p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Qualidade Garantida', desc: 'Materia prima especializada e processos rigorosos.' },
                { title: 'Entrega Ágil', desc: 'Logística otimizada e eficaz.' },
                { title: 'Tecnologia', desc: 'Fórmulas exclusivas para cada aplicação.' },
                { title: 'Suporte Técnico', desc: 'Equipe especializada para consultoria.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg shrink-0">
                    <i className="fa-solid fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
