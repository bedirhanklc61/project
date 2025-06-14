import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import MenuCategory from './components/MenuCategory';
import Footer from './components/Footer';
import { menuCategories } from './data/menuData';
import { Language, Theme } from './types/menu';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [language, setLanguage] = useLocalStorage<Language>('language', 'en');
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  // Initialize the app
  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Set RTL for Arabic
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    
    // Update document title
    const titles = {
      en: 'Gazino - Authentic Turkish Experience',
      tr: 'Gazino - Otantik Türk Deneyimi',
      ar: 'غازينو - تجربة تركية أصيلة'
    };
    document.title = titles[language];

    // Simulate loading and show menu after intro animations
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show menu after intro animations complete
      setTimeout(() => {
        setMenuVisible(true);
      }, 2000); // Wait for intro animations to finish
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [language, theme]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [menuVisible]);

  const handleLanguageChange = (newLanguage: Language) => {
    setIsLoading(true);
    setTimeout(() => {
      setLanguage(newLanguage);
      setIsLoading(false);
    }, 500);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleCategoryToggle = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="text-center relative z-10">
          {/* Loading Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-amber-200/30 border-t-amber-500 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-r-orange-500 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          
          {/* Loading Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
              Gazino
            </h2>
            <p className="text-white/70 font-medium animate-pulse">
              Preparing your authentic experience...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-red-50'
    }`}>
      {/* Hero Section - Always Visible */}
      <Header
        language={language}
        theme={theme}
        onLanguageChange={handleLanguageChange}
        onThemeToggle={handleThemeToggle}
      />

      {/* Menu Section with Slide-up Animation */}
      <main 
        ref={menuRef}
        className={`relative menu-section transition-all duration-1000 ${
          menuVisible ? 'menu-visible' : 'menu-hidden'
        }`}
      >
        {/* Menu Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-2xl mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                {language === 'en' && 'Our Menu'}
                {language === 'tr' && 'Menümüz'}
                {language === 'ar' && 'قائمتنا'}
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {language === 'en' && 'Discover our carefully crafted selection of authentic Turkish flavors and international favorites, each dish prepared with passion and tradition'}
              {language === 'tr' && 'Özenle hazırlanmış otantik Türk lezzetleri ve uluslararası favorilerimizi keşfedin, her yemek tutku ve gelenekle hazırlanmıştır'}
              {language === 'ar' && 'اكتشف مجموعتنا المختارة بعناية من النكهات التركية الأصيلة والمفضلات العالمية، كل طبق محضر بشغف وتقليد'}
            </p>
          </div>

          {/* Menu Categories */}
          <div className="space-y-8">
            {menuCategories.map((category, index) => (
              <div
                key={category.id}
                className="menu-item opacity-0 transform translate-y-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <MenuCategory
                  category={category}
                  language={language}
                  theme={theme}
                  isOpen={openCategories.includes(category.id)}
                  onToggle={() => handleCategoryToggle(category.id)}
                />
              </div>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-20 text-center menu-item opacity-0 transform translate-y-8" style={{ animationDelay: '1s' }}>
            <div className="inline-flex flex-col sm:flex-row gap-6 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl">
              <button
                onClick={() => setOpenCategories(menuCategories.map(c => c.id))}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                  {language === 'en' && 'View All Categories'}
                  {language === 'tr' && 'Tüm Kategorileri Görüntüle'}
                  {language === 'ar' && 'عرض جميع الفئات'}
                </span>
              </button>
              <button
                onClick={() => setOpenCategories([])}
                className="group relative px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                  {language === 'en' && 'Collapse All'}
                  {language === 'tr' && 'Tümünü Daralt'}
                  {language === 'ar' && 'طي الكل'}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Decorative Background Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-red-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;