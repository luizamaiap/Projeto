
import React from 'react';
import { Order } from '../types';

interface OrdersViewProps {
  orders: Order[];
  onGoToMenu: () => void;
  onOrderClick: (order: Order) => void;
}

const OrdersView: React.FC<OrdersViewProps> = ({ orders, onGoToMenu, onOrderClick }) => {
  if (orders.length === 0) {
    return (
      <div className="py-24 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-slate-200">receipt_long</span>
        </div>
        <h2 className="font-display text-xl font-bold text-slate-800">Seu histórico está vazio</h2>
        <p className="text-slate-500 text-sm mt-2 max-w-[200px] mx-auto">Parece que você ainda não fez nenhum pedido estelar.</p>
        <button 
          onClick={onGoToMenu}
          className="mt-8 px-8 py-3 bg-brand-brown text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-all text-sm"
        >
          Explorar Cardápio
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl font-bold text-brand-brown">Meus Pedidos</h2>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{orders.length} pedidos</span>
      </div>

      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm overflow-hidden relative">
          {/* Header do Pedido */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pedido #{order.id}</p>
              <h3 className="font-bold text-slate-800">
                {order.items.length === 1 ? order.items[0].name : `${order.items[0].name} + ${order.items.length - 1} itens`}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-brand-brown block">R$ {order.total.toFixed(2).replace('.', ',')}</span>
              <p className="text-[9px] text-slate-400">{new Date(order.createdAt).toLocaleDateString('pt-BR')}</p>
            </div>
          </div>

          {/* Tracking do Status */}
          <div className="bg-slate-50/50 rounded-2xl p-4 mb-4 border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-center gap-2 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${order.status === 'preparando' ? 'bg-brand-brown text-white shadow-lg' : 'bg-slate-200 text-slate-400'}`}>
                  <span className="material-symbols-outlined text-xl">restaurant</span>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider ${order.status === 'preparando' ? 'text-brand-brown' : 'text-slate-400'}`}>Preparando</span>
              </div>

              <div className="h-px flex-1 bg-slate-200 mx-1 mb-6"></div>

              <div className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${order.status === 'entrega' ? 'bg-orange-500 text-white shadow-lg' : 'bg-slate-200 text-slate-400'}`}>
                  <span className="material-symbols-outlined text-xl">delivery_dining</span>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider ${order.status === 'entrega' ? 'text-orange-500' : 'text-slate-400'}`}>A caminho</span>
              </div>

              <div className="h-px flex-1 bg-slate-200 mx-1 mb-6"></div>

              <div className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${order.status === 'concluido' ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                  <span className="material-symbols-outlined text-xl">check</span>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider ${order.status === 'concluido' ? 'text-green-500' : 'text-slate-400'}`}>Entregue</span>
              </div>
            </div>

            {/* Informações de Tempo e Alertas */}
            <div className="flex items-center gap-3 py-3 px-4 bg-white rounded-xl border border-slate-100">
              <span className={`material-symbols-outlined text-xl ${order.status === 'entrega' ? 'text-orange-500 animate-pulse' : 'text-brand-brown'}`}>
                {order.status === 'entrega' ? 'local_shipping' : 'schedule'}
              </span>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-slate-800">
                  {order.status === 'preparando' && 'Em preparação na nossa cozinha'}
                  {order.status === 'entrega' && 'O motoboy saiu para entrega!'}
                  {order.status === 'concluido' && 'Pedido concluído'}
                </h4>
                <p className="text-[10px] text-slate-500">
                  {order.status === 'preparando' && `Tempo estimado para ficar pronto: ${order.estimatedTime}`}
                  {order.status === 'entrega' && 'Fique atento! Seu pedido chega em instantes.'}
                  {order.status === 'concluido' && 'Esperamos que aproveite cada mordida.'}
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onOrderClick(order)}
            className="w-full py-2.5 text-xs font-bold text-slate-600 border border-slate-100 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
          >
            Ver detalhes do pedido
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrdersView;
