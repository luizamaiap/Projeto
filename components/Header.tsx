
import React from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="px-6 py-6 flex justify-between items-center sticky top-0 z-40 bg-background-light/95 backdrop-blur-md max-w-2xl mx-auto w-full">
      <div className="flex flex-col">
        <h1 className="font-display text-2xl font-bold text-brand-brown tracking-tight">Chocoláxia</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Doçura das Estrelas</p>
      </div>
      
      <div className="flex gap-3 items-center">
        <button 
          onClick={onCartClick}
          className="p-2 rounded-full bg-white shadow-sm border border-slate-100 relative active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[22px] block">shopping_bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
