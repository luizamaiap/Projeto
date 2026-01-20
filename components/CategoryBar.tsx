
import React from 'react';
import { Category } from '../types';

interface CategoryBarProps {
  categories: string[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <section className="mb-8 overflow-x-auto no-scrollbar flex gap-3 -mx-6 px-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat as Category)}
          className={`px-5 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
            activeCategory === cat
              ? 'bg-brand-brown text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-100 hover:border-brand-brown/30'
          }`}
        >
          {cat}
        </button>
      ))}
    </section>
  );
};

export default CategoryBar;
