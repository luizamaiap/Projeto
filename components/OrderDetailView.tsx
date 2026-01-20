
import React from 'react';
import { Order } from '../types';

interface OrderDetailViewProps {
  order: Order;
  onBack: () => void;
}

const OrderDetailView: React.FC<OrderDetailViewProps> = ({ order, onBack }) => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-right-4 duration-500 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-white border border-slate-100 shadow-sm text-brand-brown active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined block">arrow_back</span>
        </button>
        <div>
          <h2 className="font-display text-2xl font-bold text-brand-brown">Detalhes do Pedido</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pedido #{order.id}</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-50">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              order.status === 'concluido' ? 'bg-green-100 text-green-600' : 'bg-brand-brown/10 text-brand-brown'
            }`}>
              <span className="material-symbols-outlined text-xl">
                {order.status === 'concluido' ? 'check_circle' : 'pending_actions'}
              </span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Status</p>
              <h3 className="text-sm font-bold text-slate-800 capitalize">{order.status}</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Data</p>
            <h3 className="text-sm font-bold text-slate-800">{new Date(order.createdAt).toLocaleDateString('pt-BR')}</h3>
          </div>
        </div>

        <div className="space-y-8">
          {order.items.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="space-y-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-2xl border border-slate-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-slate-800">{item.quantity}x {item.name}</h4>
                    <span className="text-xs font-bold text-brand-brown">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">{item.description}</p>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-4">
                <h5 className="text-[9px] font-bold text-brand-brown uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">nutrition</span>
                  Ingredientes Principais
                </h5>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients?.map((ing, i) => (
                    <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded-md text-[9px] text-slate-600 font-medium">
                      {ing}
                    </span>
                  )) || <span className="text-[9px] text-slate-400 italic">Informação indisponível</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-600">Valor Total</span>
            <span className="text-xl font-display font-bold text-brand-brown">R$ {order.total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de ajuda com meu pedido #${order.id}`, '_blank')}
        className="w-full py-4 bg-white border border-brand-brown text-brand-brown font-bold rounded-2xl shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-xl">help</span>
        Preciso de ajuda com este pedido
      </button>
    </div>
  );
};

export default OrderDetailView;
