import React from 'react';
import { Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoadingScreenProps {
  isLoading: boolean;
  isInitialLoad?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, isInitialLoad = false }) => {
  const { t } = useLanguage();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cafe-50 to-gold-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50 animate-fade-in">
      <div className="text-center">
        <div className="mb-8 animate-bounce-gentle">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cafe-500 to-gold-500 rounded-full flex items-center justify-center shadow-2xl">
            <Coffee className="w-12 h-12 text-white animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl font-serif font-bold text-cafe-800 dark:text-cafe-200 mb-4 animate-slide-up">
          {t('cafe.name')}
        </h1>
        <p className="text-cafe-600 dark:text-cafe-300 text-lg animate-pulse">
          {isInitialLoad ? t('loading.welcome') : t('loading.language')}
        </p>
        
        {/* Loading dots animation */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-cafe-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-cafe-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-cafe-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};