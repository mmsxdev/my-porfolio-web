
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <span className="font-bold text-xl">
              <span className="mr-1 text-slate-900 dark:text-white">Dev</span>
              <span className="text-highlight">Portfolio</span>
            </span>
          </div>
          
          <div className="text-slate-600 dark:text-slate-400 flex items-center">
            <span>© {currentYear} Feito com</span>
            <Heart className="text-red-500 mx-1" size={16} />
            <span>por John Doe</span>
          </div>
          
          <div className="hidden sm:block">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-600 dark:text-slate-400 hover:text-highlight transition-colors"
            >
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
