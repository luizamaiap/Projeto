
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="mb-8">
      <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-md group">
        <img 
          alt="Banner Chocoláxia" 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPQyyxCd7FQu2dYgTb9FzEEZ_5acVQQb5pnF95qGEDSCMDnggup_ybE64kTqM1BUnSfbZ8t7PjYpjIBM1m0wKXkSFKNuMwfd5Aiy05s4OqPcLVr-T-DbUU6hcf4Chr2qFoxYyCi1OLbrxfI9iZISBja8E1cBgXXHAPah_D3g8ho_WHJz4NtC1vjArFnQP8xPJRaTJLcRpboHD563c0IJENA5qHLtyulWdo1v-WVVIRMoX3hnTugCmmr44potCjaLw7BqIlQi_yYI"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
          <h2 className="font-display text-2xl text-white font-bold">Universo de Sabores</h2>
          <p className="text-white/80 text-xs mt-1">Confeitaria artesanal.</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
