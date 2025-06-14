import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItem {
  id: string;
  nameKey: string;
  price: number;
  description?: string;
  image: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  icon: React.ReactNode;
  isInitiallyOpen?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ 
  title, 
  items, 
  icon, 
  isInitiallyOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const { t, isRTL } = useLanguage();

  return (
    <div className="mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-cafe-100 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 flex items-center justify-between bg-gradient-to-r from-cafe-50 to-gold-50 dark:from-gray-800 dark:to-gray-700 hover:from-cafe-100 hover:to-gold-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
        aria-expanded={isOpen}
        aria-controls={`menu-section-${title}`}
      >
        <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-4`}>
          <div className="p-3 bg-gradient-to-br from-cafe-500 to-gold-500 rounded-xl text-white">
            {icon}
          </div>
          <h2 className="text-2xl font-serif font-bold text-cafe-800 dark:text-cafe-200">
            {title}
          </h2>
        </div>
        <div className={`p-2 rounded-full bg-white dark:bg-gray-700 ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
          <ChevronDown className="w-6 h-6 text-cafe-600 dark:text-cafe-400" />
        </div>
      </button>

      <div
        id={`menu-section-${title}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-white to-cafe-25 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-cafe-100 dark:border-gray-600 hover:border-cafe-300 dark:hover:border-cafe-600"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'fadeIn 0.6s ease-out forwards' : 'none'
              }}
            >
              <div className="aspect-square w-full bg-gradient-to-br from-cafe-100 to-gold-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={t(item.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="font-semibold text-lg text-cafe-800 dark:text-cafe-200 mb-2 group-hover:text-cafe-600 dark:group-hover:text-cafe-300 transition-colors">
                  {t(item.nameKey)}
                </h3>
                
                {item.description && (
                  <p className="text-sm text-cafe-600 dark:text-cafe-400 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                )}
                
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-xl font-bold text-cafe-800 dark:text-cafe-200">
                    {item.price} {t('currency')}
                  </span>
                  <div className="w-2 h-2 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};