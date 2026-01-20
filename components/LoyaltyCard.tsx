
import React from 'react';

const LoyaltyCard: React.FC = () => {
  return (
    <section className="my-12 p-8 rounded-3xl bg-brand-brown text-white relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 blur-2xl -ml-10 -mb-10"></div>
      <div className="relative z-10">
        <h4 className="font-display text-xl font-bold mb-2">Clube de Órbita</h4>
        <p className="text-xs text-white/80 mb-5 leading-relaxed max-w-[80%]">
          Acumule estrelas em cada pedido e troque por delícias galácticas gratuitas.
        </p>
        <button className="bg-white text-brand-brown px-6 py-2.5 rounded-full text-xs font-bold shadow-lg hover:bg-slate-50 transition-colors active:scale-95">
          Participar Agora
        </button>
      </div>
    </section>
  );
};

export default LoyaltyCard;
