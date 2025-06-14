import React, { useState, useEffect } from 'react';
import { Sun, Moon, Coffee, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage, Language } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  useEffect(() => {
    // Trigger welcome text animation after component mounts
    const timer = setTimeout(() => {
      setIsWelcomeVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-cafe-100 via-gold-50 to-cafe-50 dark:from-gray-900 dark:via-gray-800 dark:to-cafe-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
          <div className={`mb-8 ${isWelcomeVisible ? 'animate-welcome-slide-in' : 'opacity-0'}`}>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-cafe-800 dark:text-cafe-200 mb-6 leading-tight">
              {t('welcome.message')}
            </h2>
            <p className="text-xl lg:text-2xl text-cafe-600 dark:text-cafe-400 mb-8 leading-relaxed">
              {t('welcome.subtitle')}
            </p>
            <blockquote className="text-lg lg:text-xl font-medium text-cafe-700 dark:text-cafe-300 italic border-l-4 border-gold-500 pl-6 max-w-2xl mx-auto">
              {t('cafe.quote')}
            </blockquote>
          </div>
          
          {/* Scroll Indicator */}
          <div className={`animate-bounce mt-16 ${isWelcomeVisible ? 'animate-fade-in-delayed' : 'opacity-0'}`}>
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