
import React from 'react';
import { Tab } from '../App';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 px-8 py-3 pb-8 flex justify-around items-center z-50 max-w-2xl mx-auto shadow-2xl">
      <button 
        onClick={() => onTabChange('menu')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'menu' ? 'text-brand-brown' : 'text-slate-400'}`}
      >
        <span className="material-symbols-outlined text-[24px]">restaurant_menu</span>
        <span className="text-[10px] font-medium">Cardápio</span>
      </button>
      <button 
        onClick={() => onTabChange('pedidos')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'pedidos' ? 'text-brand-brown' : 'text-slate-400'}`}
      >
        <span className="material-symbols-outlined text-[24px]">receipt_long</span>
        <span className="text-[10px] font-medium">Pedidos</span>
      </button>
      <button 
        onClick={() => onTabChange('contato')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'contato' ? 'text-brand-brown' : 'text-slate-400'}`}
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="text-[10px] font-medium">Contato</span>
      </button>
    </nav>
  );
};

export default BottomNav;
