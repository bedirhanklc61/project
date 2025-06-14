import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Language } from '../types/menu';

interface FooterProps {
  language: Language;
}

const translations = {
  contact: {
    en: 'Contact Us',
    tr: 'İletişim',
    ar: 'اتصل بنا'
  },
  address: {
    en: 'Vakfıkebir, Trabzon, Turkey',
    tr: 'Vakfıkebir, Trabzon, Türkiye',
    ar: 'واقف كبير، طرابزون، تركيا'
  },
  hours: {
    en: 'Open Daily: 8:00 AM - 2:00 AM',
    tr: 'Her Gün Açık: 08:00 - 02:00',
    ar: 'مفتوح يومياً: 8:00 ص - 2:00 ص'
  },
  followUs: {
    en: 'Follow Us',
    tr: 'Bizi Takip Edin',
    ar: 'تابعنا'
  },
  copyright: {
    en: '© 2024 Gazino. All rights reserved.',
    tr: '© 2024 Gazino. Tüm hakları saklıdır.',
    ar: '© 2024 غازينو. جميع الحقوق محفوظة.'
  }
};

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">
              {translations.contact[language]}
            </h3>
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 rtl:space-x-reverse ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">{translations.address[language]}</span>
              </div>
              <div className={`flex items-center space-x-3 rtl:space-x-reverse ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">+90 462 555 0123</span>
              </div>
              <div className={`flex items-center space-x-3 rtl:space-x-reverse ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">{translations.hours[language]}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">
              {translations.followUs[language]}
            </h3>
            <div className={`flex space-x-4 rtl:space-x-reverse ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center md:justify-end">
            <div className={`text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Gazino
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Authentic Turkish Experience
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {translations.copyright[language]}
          </p>
        </div>
      </div>
    </footer>
  );
}