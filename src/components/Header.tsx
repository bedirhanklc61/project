import React from 'react';
import { Sun, Moon, Globe, MapPin } from 'lucide-react';
import { Language, Theme } from '../types/menu';

interface HeaderProps {
  language: Language;
  theme: Theme;
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
}

const translations = {
  title: {
    en: 'Gazino',
    tr: 'Gazino',
    ar: 'غازينو'
  },
  subtitle: {
    en: 'Authentic Turkish Experience',
    tr: 'Otantik Türk Deneyimi',
    ar: 'تجربة تركية أصيلة'
  },
  location: {
    en: 'Vakfıkebir, Trabzon',
    tr: 'Vakfıkebir, Trabzon',
    ar: 'واقف كبير، طرابزون'
  },
  welcome: {
    en: 'Welcome',
    tr: 'Hoş Geldiniz',
    ar: 'أهلاً وسهلاً'
  }
};

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' }
];

export default function Header({ language, theme, onLanguageChange, onThemeToggle }: HeaderProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden hero-section">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-orange-900/30" />
        
        {/* Floating Navigation */}
        <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center space-x-6 rtl:space-x-reverse px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <Globe className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
              </button>
              
              <div className="absolute top-full mt-3 right-0 rtl:right-auto rtl:left-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`flex items-center space-x-3 rtl:space-x-reverse px-6 py-3 text-sm hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-200 w-full ${
                      language === lang.code ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="whitespace-nowrap font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6">
            {/* Animated Logo */}
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">☪</span>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
                {translations.title[language]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {translations.subtitle[language]}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-white/80 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{translations.location[language]}</span>
            </div>

            {/* Welcome Message */}
            <div className="welcome-message animate-slide-in-left" style={{ animationDelay: '1s' }}>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
                {translations.welcome[language]}
              </h2>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </>
  );
}