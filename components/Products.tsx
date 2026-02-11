
import React from 'react';
import { PRODUCTS, CONTACT } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Nossas Soluções</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Especialidades em Revestimentos</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Conheça nossa linha completa de revestimentos técnicos para garantir a performance e durabilidade da sua máquina offset.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{product.name}</h4>
                <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                  {product.description}
                </p>
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de saber mais sobre o ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all underline decoration-blue-200 underline-offset-4"
                >
                  Saiba Mais <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-[#003865] rounded-3xl text-white text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">Fornecemos soluções em revestimentos de cilindros com excelência, inovação e qualidade</h4>
              <p className="mb-8 text-blue-100 max-w-2xl mx-auto text-lg">Nossos revestimentos são desenvolvidos para alta performance mantendo a dureza estável por mais tempo.</p>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de falar com um técnico comercial sobre os revestimentos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-white text-[#003865] font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                  Falar com Técnico Comercial
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
