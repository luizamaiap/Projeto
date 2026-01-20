
import React, { useState } from 'react';

const RegisterView: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold text-brand-brown mb-2">
          {isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}
        </h2>
        <p className="text-slate-500 text-sm">
          {isLogin 
            ? 'Entre para acompanhar seus pedidos.' 
            : 'Cadastre-se para uma experiência galáctica completa.'}
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {!isLogin && (
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Ex: Maria das Estrelas"
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-brand-brown focus:border-brand-brown outline-none transition-all"
            />
          </div>
        )}

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">E-mail</label>
          <input 
            type="email" 
            placeholder="seu@email.com"
            className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-brand-brown focus:border-brand-brown outline-none transition-all"
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">WhatsApp</label>
            <input 
              type="tel" 
              placeholder="(00) 00000-0000"
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-brand-brown focus:border-brand-brown outline-none transition-all"
            />
          </div>
        )}

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Senha</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-brand-brown focus:border-brand-brown outline-none transition-all"
            />
            {isLogin && (
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-brand-brown hover:underline">
                Esqueceu?
              </button>
            )}
          </div>
        </div>

        <button className="w-full py-4 bg-brand-brown text-white font-bold rounded-2xl shadow-lg active:scale-[0.98] transition-all hover:bg-brand-dark-brown mt-6">
          {isLogin ? 'Entrar na Conta' : 'Criar minha Conta'}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-slate-500 text-sm">
          {isLogin ? 'Novo por aqui?' : 'Já possui uma conta?'}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-bold text-brand-brown hover:underline"
          >
            {isLogin ? 'Criar conta' : 'Fazer login'}
          </button>
        </p>
      </div>

      <div className="mt-12 flex items-center gap-4 text-slate-300">
        <div className="h-px flex-1 bg-slate-200"></div>
        <span className="text-[10px] font-bold uppercase tracking-widest">ou</span>
        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
          <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
          <span className="text-xs font-semibold text-slate-600">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-blue-600 text-lg">facebook</span>
          <span className="text-xs font-semibold text-slate-600">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterView;
