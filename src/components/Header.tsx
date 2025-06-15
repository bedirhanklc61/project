import React, { useState, useEffect } from 'react';
import { Sun, Moon, Coffee, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage, Language } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const quotes = [
    'cafe.quote',
    'cafe.quote2',
    'cafe.quote3'
  ];

  useEffect(() => {
    // Start the quote animation after component mounts
    const initialTimer = setTimeout(() => {
      setIsQuoteVisible(true);
    }, 500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isQuoteVisible) return;

    const quoteTimer = setInterval(() => {
      // Start exit animation
      setIsAnimatingOut(true);
      
      setTimeout(() => {
        // Change quote and start enter animation
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsAnimatingOut(false);
      }, 800); // Wait for exit animation to complete
    }, 30000); // 30 seconds

    return () => clearInterval(quoteTimer);
  }, [isQuoteVisible, quotes.length]);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-cafe-100 via-gold-50 to-cafe-50 dark:from-gray-900 dark:via-gray-800 dark:to-cafe-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 lg:p-8">
        <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
          <div className="w-12 h-12 bg-gradient-to-br from-cafe-500 to-gold-500 rounded-full flex items-center justify-center">
            <Coffee className="w-6 h-6 text-white" />
          </div>
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-xl font-serif font-bold text-cafe-800 dark:text-cafe-200">
              {t('cafe.name')}
            </h1>
            <p className="text-sm text-cafe-600 dark:text-cafe-400 flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {t('cafe.location')}
            </p>
          </div>
        </div>

        <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
          {/* Language Switcher */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-white dark:bg-gray-800 border border-cafe-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-500 transition-colors"
              aria-label="Language selector"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-cafe-200 dark:border-gray-600 hover:bg-cafe-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cafe-500"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-cafe-600 dark:text-cafe-400" />
            ) : (
              <Sun className="w-5 h-5 text-cafe-600 dark:text-cafe-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className={`text-center max-w-4xl ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="mb-8">
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-cafe-800 dark:text-cafe-200 mb-6 leading-tight">
              {t('welcome.message')}
            </h2>
            <p className="text-xl lg:text-2xl text-cafe-600 dark:text-cafe-400 mb-8 leading-relaxed">
              {t('welcome.subtitle')}
            </p>
            
            {/* Rotating Quote */}
            <div className="relative h-20 flex items-center justify-center overflow-hidden">
              <blockquote 
                className={`absolute text-lg lg:text-xl font-medium text-cafe-700 dark:text-cafe-300 italic border-l-4 border-gold-500 pl-6 max-w-2xl transition-all duration-800 ease-in-out ${
                  isQuoteVisible && !isAnimatingOut
                    ? 'opacity-100 translate-x-0' 
                    : isAnimatingOut
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                {t(quotes[currentQuoteIndex])}
              </blockquote>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <div className="w-6 h-10 border-2 border-cafe-400 dark:border-cafe-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cafe-400 dark:bg-cafe-500 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-sm text-cafe-500 dark:text-cafe-400 mt-2">{t('menu')}</p>
          </div>
        </div>
      </div>
    </header>
  );
};