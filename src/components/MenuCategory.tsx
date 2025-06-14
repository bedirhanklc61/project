import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import { MenuCategory as MenuCategoryType, Language, Theme } from '../types/menu';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
  language: Language;
  theme: Theme;
  isOpen: boolean;
  onToggle: () => void;
}

const categoryImages = {
  'hot-drinks': 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'cold-drinks': 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'desserts': 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'fast-food': 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'hookah': 'https://images.pexels.com/photos/6249437/pexels-photo-6249437.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
};

export default function MenuCategory({ category, language, theme, isOpen, onToggle }: MenuCategoryProps) {
  const IconComponent = (Icons as any)[category.icon] || Icons.Coffee;
  const backgroundImage = categoryImages[category.id as keyof typeof categoryImages];

  return (
    <div className="mb-8 group">
      <button
        onClick={onToggle}
        className={`w-full relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] ${
          isOpen ? 'rounded-b-none' : ''
        }`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        
        {/* Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-90`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Content */}
        <div className={`relative z-10 flex items-center justify-between p-8 text-white ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center space-x-6 rtl:space-x-reverse ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {/* Icon with Glow Effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
                <IconComponent className="w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
            
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">
                {category.name[language]}
              </h2>
              <p className="text-white/90 text-lg font-medium">
                {category.items.length} {language === 'en' ? 'items' : language === 'tr' ? 'öğe' : 'عنصر'}
              </p>
            </div>
          </div>
          
          {/* Animated Chevron */}
          <div className={`transform transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            <div className="p-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </button>

      {/* Menu Items Container */}
      <div className={`overflow-hidden transition-all duration-700 ease-out ${
        isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-b-3xl shadow-2xl border-t border-white/20">
          <div className="p-8 space-y-6">
            {category.items.map((item, index) => (
              <MenuItem
                key={item.id}
                item={item}
                language={language}
                theme={theme}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}