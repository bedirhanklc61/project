import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Coffee, Snowflake, Cake, Utensils, Wind } from 'lucide-react';
import { MenuSection } from './MenuSection';
import { useLanguage } from '../contexts/LanguageContext';

export const Menu: React.FC = () => {
  const { t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const sectionIndex = parseInt(entry.target.getAttribute('data-section-index') || '0');
      
      if (entry.isIntersecting) {
        setVisibleSections(prev => new Set([...prev, sectionIndex]));
      }
    });
  }, []);

  useEffect(() => {
    // Create observer with optimized options
    observerRef.current = new IntersectionObserver(handleIntersection, { 
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
    });

    const sections = menuRef.current?.querySelectorAll('.menu-section');
    sections?.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection]);

  const menuData = [
    {
      titleKey: 'menu.hot.drinks',
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { id: 'turkish-coffee', nameKey: 'turkish.coffee', price: 25, image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'espresso', nameKey: 'espresso', price: 20, image: 'https://images.pexels.com/photos/1233320/pexels-photo-1233320.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'americano', nameKey: 'americano', price: 22, image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'cappuccino', nameKey: 'cappuccino', price: 28, image: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'latte', nameKey: 'latte', price: 30, image: 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'turkish-tea', nameKey: 'turkish.tea', price: 15, image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'herbal-tea', nameKey: 'herbal.tea', price: 18, image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'hot-chocolate', nameKey: 'hot.chocolate', price: 32, image: 'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&w=400' },
      ]
    },
    {
      titleKey: 'menu.cold.drinks',
      icon: <Snowflake className="w-6 h-6" />,
      items: [
        { id: 'iced-coffee', nameKey: 'iced.coffee', price: 28, image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'iced-tea', nameKey: 'iced.tea', price: 20, image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'fresh-juice', nameKey: 'fresh.juice', price: 25, image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'smoothie', nameKey: 'smoothie', price: 35, image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'milkshake', nameKey: 'milkshake', price: 40, image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'cola', nameKey: 'cola', price: 15, image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'ayran', nameKey: 'ayran', price: 12, image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'mineral-water', nameKey: 'mineral.water', price: 8, image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400' },
      ]
    },
    {
      titleKey: 'menu.desserts',
      icon: <Cake className="w-6 h-6" />,
      items: [
        { id: 'baklava', nameKey: 'baklava', price: 45, image: 'https://images.pexels.com/photos/7474230/pexels-photo-7474230.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'kunefe', nameKey: 'kunefe', price: 50, image: 'https://images.pexels.com/photos/7474230/pexels-photo-7474230.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'tiramisu', nameKey: 'tiramisu', price: 55, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'cheesecake', nameKey: 'cheesecake', price: 48, image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'ice-cream', nameKey: 'ice.cream', price: 35, image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'fruit-salad', nameKey: 'fruit.salad', price: 30, image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400' },
      ]
    },
    {
      titleKey: 'menu.fast.food',
      icon: <Utensils className="w-6 h-6" />,
      items: [
        { id: 'burger', nameKey: 'burger', price: 65, image: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pizza', nameKey: 'pizza', price: 85, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'sandwich', nameKey: 'sandwich', price: 45, image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'fries', nameKey: 'fries', price: 25, image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'chicken-wings', nameKey: 'chicken.wings', price: 55, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'wrap', nameKey: 'wrap', price: 40, image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400' },
      ]
    },
    {
      titleKey: 'menu.shisha',
      icon: <Wind className="w-6 h-6" />,
      items: [
        { id: 'apple-shisha', nameKey: 'apple.shisha', price: 80, image: 'https://images.pexels.com/photos/6544361/pexels-photo-6544361.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'grape-shisha', nameKey: 'grape.shisha', price: 85, image: 'https://images.pexels.com/photos/6544361/pexels-photo-6544361.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'mint-shisha', nameKey: 'mint.shisha', price: 75, image: 'https://images.pexels.com/photos/6544361/pexels-photo-6544361.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'mixed-fruit-shisha', nameKey: 'mixed.fruit.shisha', price: 90, image: 'https://images.pexels.com/photos/6544361/pexels-photo-6544361.jpeg?auto=compress&cs=tinysrgb&w=400' },
      ]
    }
  ];

  return (
    <div ref={menuRef} className="min-h-screen bg-gradient-to-br from-cafe-25 to-gold-25 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-cafe-800 dark:text-cafe-200 mb-4">
            {t('menu')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cafe-500 to-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {menuData.map((section, index) => (
            <div 
              key={section.titleKey} 
              className={`menu-section transition-all duration-700 ease-out ${
                visibleSections.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              data-section-index={index}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <MenuSection
                title={t(section.titleKey)}
                items={section.items}
                icon={section.icon}
                isInitiallyOpen={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};