import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'tr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Header
    'cafe.name': 'Gazino Cafe',
    'cafe.location': 'Vakfıkebir, Trabzon',
    'cafe.quote': 'Her yudum bir hikaye, her kahve bir anı...',
    'welcome.message': 'Gazino Cafe\'ye Hoş Geldiniz',
    'welcome.subtitle': 'Karadeniz\'in kalbinde, geleneksel lezzetlerle buluşun',
    
    // Menu Categories
    'menu.hot.drinks': 'Sıcak İçecekler',
    'menu.cold.drinks': 'Soğuk İçecekler',
    'menu.desserts': 'Tatlılar',
    'menu.fast.food': 'Fast Food',
    'menu.shisha': 'Nargile',
    
    // Hot Drinks
    'turkish.coffee': 'Türk Kahvesi',
    'espresso': 'Espresso',
    'americano': 'Americano',
    'cappuccino': 'Cappuccino',
    'latte': 'Latte',
    'turkish.tea': 'Türk Çayı',
    'herbal.tea': 'Bitki Çayı',
    'hot.chocolate': 'Sıcak Çikolata',
    
    // Cold Drinks
    'iced.coffee': 'Buzlu Kahve',
    'iced.tea': 'Buzlu Çay',
    'fresh.juice': 'Taze Meyve Suyu',
    'smoothie': 'Smoothie',
    'milkshake': 'Milkshake',
    'cola': 'Kola',
    'ayran': 'Ayran',
    'mineral.water': 'Maden Suyu',
    
    // Desserts
    'baklava': 'Baklava',
    'kunefe': 'Künefe',
    'tiramisu': 'Tiramisu',
    'cheesecake': 'Cheesecake',
    'ice.cream': 'Dondurma',
    'fruit.salad': 'Meyve Salatası',
    
    // Fast Food
    'burger': 'Burger',
    'pizza': 'Pizza',
    'sandwich': 'Sandviç',
    'fries': 'Patates Kızartması',
    'chicken.wings': 'Tavuk Kanatları',
    'wrap': 'Wrap',
    
    // Shisha
    'apple.shisha': 'Elma Nargile',
    'grape.shisha': 'Üzüm Nargile',
    'mint.shisha': 'Nane Nargile',
    'mixed.fruit.shisha': 'Karışık Meyve Nargile',
    
    // Currency
    'currency': '₺',
    
    // Common
    'loading': 'Yükleniyor...',
    'loading.language': 'Dil değiştiriliyor...',
    'menu': 'Menü',
  },
  en: {
    // Header
    'cafe.name': 'Gazino Cafe',
    'cafe.location': 'Vakfıkebir, Trabzon',
    'cafe.quote': 'Every sip tells a story, every coffee creates a memory...',
    'welcome.message': 'Welcome to Gazino Cafe',
    'welcome.subtitle': 'Meet traditional flavors in the heart of the Black Sea',
    
    // Menu Categories
    'menu.hot.drinks': 'Hot Drinks',
    'menu.cold.drinks': 'Cold Drinks',
    'menu.desserts': 'Desserts',
    'menu.fast.food': 'Fast Food',
    'menu.shisha': 'Shisha',
    
    // Hot Drinks
    'turkish.coffee': 'Turkish Coffee',
    'espresso': 'Espresso',
    'americano': 'Americano',
    'cappuccino': 'Cappuccino',
    'latte': 'Latte',
    'turkish.tea': 'Turkish Tea',
    'herbal.tea': 'Herbal Tea',
    'hot.chocolate': 'Hot Chocolate',
    
    // Cold Drinks
    'iced.coffee': 'Iced Coffee',
    'iced.tea': 'Iced Tea',
    'fresh.juice': 'Fresh Juice',
    'smoothie': 'Smoothie',
    'milkshake': 'Milkshake',
    'cola': 'Cola',
    'ayran': 'Ayran',
    'mineral.water': 'Mineral Water',
    
    // Desserts
    'baklava': 'Baklava',
    'kunefe': 'Künefe',
    'tiramisu': 'Tiramisu',
    'cheesecake': 'Cheesecake',
    'ice.cream': 'Ice Cream',
    'fruit.salad': 'Fruit Salad',
    
    // Fast Food
    'burger': 'Burger',
    'pizza': 'Pizza',
    'sandwich': 'Sandwich',
    'fries': 'French Fries',
    'chicken.wings': 'Chicken Wings',
    'wrap': 'Wrap',
    
    // Shisha
    'apple.shisha': 'Apple Shisha',
    'grape.shisha': 'Grape Shisha',
    'mint.shisha': 'Mint Shisha',
    'mixed.fruit.shisha': 'Mixed Fruit Shisha',
    
    // Currency
    'currency': '$',
    
    // Common
    'loading': 'Loading...',
    'loading.language': 'Changing language...',
    'menu': 'Menu',
  },
  ar: {
    // Header
    'cafe.name': 'مقهى غازينو',
    'cafe.location': 'واقف كبير، طرابزون',
    'cafe.quote': 'كل رشفة تحكي قصة، كل قهوة تخلق ذكرى...',
    'welcome.message': 'مرحباً بكم في مقهى غازينو',
    'welcome.subtitle': 'التقوا بالنكهات التقليدية في قلب البحر الأسود',
    
    // Menu Categories
    'menu.hot.drinks': 'المشروبات الساخنة',
    'menu.cold.drinks': 'المشروبات الباردة',
    'menu.desserts': 'الحلويات',
    'menu.fast.food': 'الوجبات السريعة',
    'menu.shisha': 'الشيشة',
    
    // Hot Drinks
    'turkish.coffee': 'القهوة التركية',
    'espresso': 'اسبريسو',
    'americano': 'أمريكانو',
    'cappuccino': 'كابتشينو',
    'latte': 'لاتيه',
    'turkish.tea': 'الشاي التركي',
    'herbal.tea': 'شاي الأعشاب',
    'hot.chocolate': 'الشوكولاتة الساخنة',
    
    // Cold Drinks
    'iced.coffee': 'قهوة مثلجة',
    'iced.tea': 'شاي مثلج',
    'fresh.juice': 'عصير طازج',
    'smoothie': 'سموثي',
    'milkshake': 'ميلك شيك',
    'cola': 'كولا',
    'ayran': 'آيران',
    'mineral.water': 'مياه معدنية',
    
    // Desserts
    'baklava': 'بقلاوة',
    'kunefe': 'كنافة',
    'tiramisu': 'تيراميسو',
    'cheesecake': 'تشيزكيك',
    'ice.cream': 'آيس كريم',
    'fruit.salad': 'سلطة فواكه',
    
    // Fast Food
    'burger': 'برجر',
    'pizza': 'بيتزا',
    'sandwich': 'ساندويتش',
    'fries': 'بطاطس مقلية',
    'chicken.wings': 'أجنحة الدجاج',
    'wrap': 'راب',
    
    // Shisha
    'apple.shisha': 'شيشة تفاح',
    'grape.shisha': 'شيشة عنب',
    'mint.shisha': 'شيشة نعناع',
    'mixed.fruit.shisha': 'شيشة فواكه مشكلة',
    
    // Currency
    'currency': 'ل.ت',
    
    // Common
    'loading': 'جاري التحميل...',
    'loading.language': 'جاري تغيير اللغة...',
    'menu': 'القائمة',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
  onLanguageChange?: () => void;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, onLanguageChange }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('gazino-cafe-language');
    return (saved as Language) || 'tr';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('gazino-cafe-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage !== language) {
      onLanguageChange?.();
      setTimeout(() => {
        setLanguage(newLanguage);
      }, 100);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};