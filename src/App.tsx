import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  useEffect(() => {
    // Initial loading time
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = () => {
    setIsLanguageChanging(true);
    // Language change processing time
    setTimeout(() => {
      setIsLanguageChanging(false);
    }, 1500);
  };

  return (
    <ThemeProvider>
      <LanguageProvider onLanguageChange={handleLanguageChange}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <LoadingScreen 
            isLoading={isInitialLoading || isLanguageChanging} 
            isInitialLoad={isInitialLoading}
          />
          
          {!isInitialLoading && !isLanguageChanging && (
            <>
              <Header />
              <Menu />
              <Footer />
            </>
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;