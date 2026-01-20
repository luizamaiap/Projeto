
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="font-display text-xl font-bold text-slate-800 whitespace-nowrap">{title}</h2>
      <div className="h-px flex-1 bg-slate-200 ml-4"></div>
    </div>
  );
};

export default SectionTitle;
