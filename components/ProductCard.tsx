
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <div className="group flex flex-col h-full">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-3 shadow-sm border border-slate-50">
        <img 
          alt={product.name} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
          src={product.image}
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-slate-100 shadow-sm">
          <span className="text-[10px] font-bold text-brand-brown">R$ {product.price.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
      <h3 className="font-display font-bold text-sm leading-tight text-slate-800 line-clamp-1">{product.name}</h3>
      <p className="text-[10px] text-slate-500 mt-1 mb-3 line-clamp-2 min-h-[2.5em]">{product.description}</p>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onAdd();
        }}
        className="mt-auto w-full py-2 bg-brand-brown text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1 active:scale-95 transition-transform hover:bg-brand-dark-brown"
      >
        <span className="material-symbols-outlined text-sm">add</span> Adicionar
      </button>
    </div>
  );
};

export default ProductCard;
