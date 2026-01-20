
import React from 'react';

const ContactView: React.FC = () => {
  const WHATSAPP_NUMBER = "5511999999999"; // Exemplo de número
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre as delícias da Chocoláxia.`;

  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-md mx-auto">
      <div className="text-center mb-10">
        <div className="w-24 h-24 bg-brand-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl text-brand-brown">support_agent</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-brand-brown mb-3">Fale Conosco</h2>
        <p className="text-slate-500 text-sm leading-relaxed px-4">
          Dúvidas sobre produtos, encomendas personalizadas ou apenas quer dizer um oi galáctico? Nossa equipe está pronta para te atender!
        </p>
      </div>

      <div className="space-y-4">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-2xl">chat</span>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-bold text-slate-800 text-sm">WhatsApp Estelar</h3>
            <p className="text-[10px] text-slate-500">Atendimento rápido e direto</p>
          </div>
          <span className="material-symbols-outlined text-slate-300">chevron_right</span>
        </a>

        <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-2xl">camera_alt</span>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-bold text-slate-800 text-sm">Instagram</h3>
            <p className="text-[10px] text-slate-500">Acompanhe nossas novidades</p>
          </div>
          <span className="material-symbols-outlined text-slate-300">chevron_right</span>
        </div>

        <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-bold text-slate-800 text-sm">E-mail</h3>
            <p className="text-[10px] text-slate-500">contato@chocolaxia.com.br</p>
          </div>
          <span className="material-symbols-outlined text-slate-300">chevron_right</span>
        </div>
      </div>

      <div className="mt-12 text-center p-6 bg-brand-brown/5 rounded-3xl border border-brand-brown/10">
        <h4 className="font-display font-bold text-brand-brown mb-1 italic">"Sabor que viaja anos-luz para te fazer sorrir."</h4>
      </div>
    </div>
  );
};

export default ContactView;
