
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  total, 
  onUpdateQuantity, 
  onRemove,
  onCheckout
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="font-display text-xl font-bold text-brand-brown">Seu Carrinho</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-slate-200">shopping_basket</span>
              <p className="text-slate-500 font-medium">Seu carrinho está vazio.</p>
              <button 
                onClick={onClose}
                className="text-brand-brown font-bold text-sm"
              >
                Explorar Cardápio
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full aspect-square object-cover rounded-xl border border-slate-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-sm text-slate-800">{item.name}</h3>
                    <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-red-500">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-brown">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-full px-2 py-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-brand-brown"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-brand-brown"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
            <div className="flex justify-between items-center text-slate-800">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="text-lg font-display font-bold">R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full py-4 bg-brand-brown text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-transform hover:bg-brand-dark-brown"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
