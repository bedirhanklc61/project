import React from 'react';
import { Star, Leaf, Flame, Sparkles } from 'lucide-react';
import { MenuItem as MenuItemType, Language, Theme } from '../types/menu';

interface MenuItemProps {
  item: MenuItemType;
  language: Language;
  theme: Theme;
  delay?: number;
}

const itemImages = {
  'turkish-coffee': 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'cappuccino': 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'hot-chocolate': 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'chai-latte': 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'iced-coffee': 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'fresh-orange-juice': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'mojito': 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'ayran': 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'baklava': 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'kunefe': 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'tiramisu': 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'ice-cream': 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'burger': 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'pizza': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'chicken-wings': 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'fries': 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'apple-hookah': 'https://images.pexels.com/photos/6249437/pexels-photo-6249437.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'grape-hookah': 'https://images.pexels.com/photos/6249437/pexels-photo-6249437.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'watermelon-hookah': 'https://images.pexels.com/photos/6249437/pexels-photo-6249437.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  'mixed-hookah': 'https://images.pexels.com/photos/6249437/pexels-photo-6249437.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
};

export default function MenuItem({ item, language, theme, delay = 0 }: MenuItemProps) {
  const itemImage = itemImages[item.id as keyof typeof itemImages];

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in border border-gray-100 dark:border-gray-700"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"></div>
      
      <div className={`relative z-10 flex ${language === 'ar' ? 'flex-row-reverse' : ''} p-6`}>
        {/* Item Image */}
        <div className="flex-shrink-0 mr-6 rtl:mr-0 rtl:ml-6">
          <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
            <img 
              src={itemImage} 
              alt={item.name[language]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Popular Badge on Image */}
            {item.isPopular && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-2 rounded-full shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 min-w-0 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-start justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className="flex-1">
              {/* Item Name */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 mb-2">
                {item.name[language]}
              </h3>
              
              {/* Badges */}
              <div className={`flex items-center space-x-2 rtl:space-x-reverse mb-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                {item.isPopular && (
                  <div className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-semibold shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Popular</span>
                  </div>
                )}
                {item.isVegetarian && (
                  <div className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold shadow-sm">
                    <Leaf className="w-3 h-3" />
                    <span>Veg</span>
                  </div>
                )}
                {item.isSpicy && (
                  <div className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold shadow-sm">
                    <Flame className="w-3 h-3" />
                    <span>Spicy</span>
                  </div>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {item.description[language]}
              </p>
            </div>

            {/* Price */}
            <div className={`flex-shrink-0 ml-6 rtl:ml-0 rtl:mr-6 ${language === 'ar' ? 'text-left' : 'text-right'}`}>
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-red-600 dark:group-hover:from-orange-400 dark:group-hover:to-red-400 transition-all duration-300">
                  {item.price}{item.currency}
                </div>
                {item.isPopular && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-orange-500/0 to-red-500/0 group-hover:from-amber-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-100/50 dark:from-amber-900/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}