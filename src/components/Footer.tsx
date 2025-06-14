import React from 'react';
import { Coffee, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-cafe-800 to-cafe-900 dark:from-gray-900 dark:to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? 'rtl' : 'ltr'}`}>
          {/* Logo & About */}
          <div className={`lg:col-span-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3`}>
              <div className="w-12 h-12 bg-gradient-to-br from-cafe-500 to-gold-500 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">{t('cafe.name')}</h3>
                <p className="text-cafe-200 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {t('cafe.location')}
                </p>
              </div>
            </div>
            <p className="text-cafe-200 leading-relaxed mb-6 max-w-md">
              {t('cafe.quote')}
            </p>
          </div>

          {/* Contact Info */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-xl font-semibold mb-6 text-cafe-100">İletişim</h4>
            <div className="space-y-4">
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3`}>
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-cafe-200">+90 (462) 123 45 67</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3`}>
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-cafe-200">info@gazinocafe.com</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3`}>
                <MapPin className="w-5 h-5 text-gold-400" />
                <span className="text-cafe-200">Vakfıkebir Merkez, Trabzon</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-xl font-semibold mb-6 text-cafe-100">Çalışma Saatleri</h4>
            <div className="space-y-3">
              <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-cafe-200">Pazartesi - Cuma</span>
                <span className="text-gold-400">08:00 - 24:00</span>
              </div>
              <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-cafe-200">Cumartesi</span>
                <span className="text-gold-400">09:00 - 02:00</span>
              </div>
              <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-cafe-200">Pazar</span>
                <span className="text-gold-400">10:00 - 24:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cafe-700 mt-12 pt-8 text-center">
          <p className="text-cafe-300">
            © 2024 {t('cafe.name')}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};