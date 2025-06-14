export interface MenuItem {
  id: string;
  name: {
    en: string;
    tr: string;
    ar: string;
  };
  description: {
    en: string;
    tr: string;
    ar: string;
  };
  price: number;
  currency: string;
  image?: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: {
    en: string;
    tr: string;
    ar: string;
  };
  icon: string;
  items: MenuItem[];
  color: string;
}

export type Language = 'en' | 'tr' | 'ar';
export type Theme = 'light' | 'dark';