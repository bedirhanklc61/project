import { MenuCategory } from '../types/menu';

export const menuCategories: MenuCategory[] = [
  {
    id: 'hot-drinks',
    name: {
      en: 'Hot Drinks',
      tr: 'Sıcak İçecekler',
      ar: 'المشروبات الساخنة'
    },
    icon: 'Coffee',
    color: 'from-amber-500 to-orange-600',
    items: [
      {
        id: 'turkish-coffee',
        name: {
          en: 'Turkish Coffee',
          tr: 'Türk Kahvesi',
          ar: 'قهوة تركية'
        },
        description: {
          en: 'Traditional Turkish coffee served with Turkish delight',
          tr: 'Lokumlu geleneksel Türk kahvesi',
          ar: 'قهوة تركية تقليدية تقدم مع الحلقوم'
        },
        price: 15,
        currency: '₺',
        isPopular: true
      },
      {
        id: 'cappuccino',
        name: {
          en: 'Cappuccino',
          tr: 'Kapuçino',
          ar: 'كابتشينو'
        },
        description: {
          en: 'Rich espresso with steamed milk and foam',
          tr: 'Buharla çekilmiş süt ve köpüklü zengin espresso',
          ar: 'إسبرسو غني مع الحليب المبخر والرغوة'
        },
        price: 20,
        currency: '₺'
      },
      {
        id: 'hot-chocolate',
        name: {
          en: 'Hot Chocolate',
          tr: 'Sıcak Çikolata',
          ar: 'شوكولاتة ساخنة'
        },
        description: {
          en: 'Creamy hot chocolate with whipped cream',
          tr: 'Çırpılmış krema ile kremalı sıcak çikolata',
          ar: 'شوكولاتة ساخنة كريمية مع الكريمة المخفوقة'
        },
        price: 18,
        currency: '₺'
      },
      {
        id: 'chai-latte',
        name: {
          en: 'Chai Latte',
          tr: 'Chai Latte',
          ar: 'تشاي لاتيه'
        },
        description: {
          en: 'Spiced tea blend with steamed milk',
          tr: 'Buharla çekilmiş süt ile baharatlı çay karışımı',
          ar: 'خليط الشاي المتبل مع الحليب المبخر'
        },
        price: 22,
        currency: '₺',
        isSpicy: true
      }
    ]
  },
  {
    id: 'cold-drinks',
    name: {
      en: 'Cold Drinks',
      tr: 'Soğuk İçecekler',
      ar: 'المشروبات الباردة'
    },
    icon: 'Snowflake',
    color: 'from-blue-500 to-cyan-600',
    items: [
      {
        id: 'iced-coffee',
        name: {
          en: 'Iced Coffee',
          tr: 'Buzlu Kahve',
          ar: 'قهوة مثلجة'
        },
        description: {
          en: 'Cold brew coffee served over ice with milk',
          tr: 'Süt ile buzun üzerinde servis edilen soğuk demleme kahve',
          ar: 'قهوة باردة تقدم على الثلج مع الحليب'
        },
        price: 18,
        currency: '₺'
      },
      {
        id: 'fresh-orange-juice',
        name: {
          en: 'Fresh Orange Juice',
          tr: 'Taze Portakal Suyu',
          ar: 'عصير برتقال طازج'
        },
        description: {
          en: 'Freshly squeezed orange juice',
          tr: 'Taze sıkılmış portakal suyu',
          ar: 'عصير برتقال مقلم طازج'
        },
        price: 16,
        currency: '₺',
        isPopular: true
      },
      {
        id: 'mojito',
        name: {
          en: 'Virgin Mojito',
          tr: 'Alkolsüz Mojito',
          ar: 'موهيتو بدون كحول'
        },
        description: {
          en: 'Fresh mint, lime, and soda water',
          tr: 'Taze nane, misket limonu ve soda',
          ar: 'نعناع طازج وليمون وماء الصودا'
        },
        price: 25,
        currency: '₺'
      },
      {
        id: 'ayran',
        name: {
          en: 'Ayran',
          tr: 'Ayran',
          ar: 'عيران'
        },
        description: {
          en: 'Traditional Turkish yogurt drink',
          tr: 'Geleneksel Türk yoğurt içeceği',
          ar: 'مشروب اللبن التركي التقليدي'
        },
        price: 8,
        currency: '₺'
      }
    ]
  },
  {
    id: 'desserts',
    name: {
      en: 'Desserts',
      tr: 'Tatlılar',
      ar: 'الحلويات'
    },
    icon: 'Cake',
    color: 'from-pink-500 to-rose-600',
    items: [
      {
        id: 'baklava',
        name: {
          en: 'Baklava',
          tr: 'Baklava',
          ar: 'بقلاوة'
        },
        description: {
          en: 'Traditional Turkish pastry with nuts and honey',
          tr: 'Cevizli ve ballı geleneksel Türk tatlısı',
          ar: 'معجنات تركية تقليدية بالمكسرات والعسل'
        },
        price: 25,
        currency: '₺',
        isPopular: true
      },
      {
        id: 'kunefe',
        name: {
          en: 'Künefe',
          tr: 'Künefe',
          ar: 'كنافة'
        },
        description: {
          en: 'Sweet cheese pastry with syrup',
          tr: 'Şerbetli peynirli tatlı',
          ar: 'معجنات الجبن الحلوة بالشراب'
        },
        price: 30,
        currency: '₺'
      },
      {
        id: 'tiramisu',
        name: {
          en: 'Tiramisu',
          tr: 'Tiramisu',
          ar: 'تيراميسو'
        },
        description: {
          en: 'Italian coffee-flavored dessert',
          tr: 'İtalyan kahveli tatlı',
          ar: 'حلوى إيطالية بطعم القهوة'
        },
        price: 28,
        currency: '₺'
      },
      {
        id: 'ice-cream',
        name: {
          en: 'Ice Cream Selection',
          tr: 'Dondurma Seçkisi',
          ar: 'تشكيلة المثلجات'
        },
        description: {
          en: 'Choice of vanilla, chocolate, or strawberry',
          tr: 'Vanilya, çikolata veya çilek seçeneği',
          ar: 'اختيار من الفانيليا أو الشوكولاتة أو الفراولة'
        },
        price: 15,
        currency: '₺'
      }
    ]
  },
  {
    id: 'fast-food',
    name: {
      en: 'Fast Food',
      tr: 'Fast Food',
      ar: 'الوجبات السريعة'
    },
    icon: 'Pizza',
    color: 'from-red-500 to-orange-600',
    items: [
      {
        id: 'burger',
        name: {
          en: 'Classic Burger',
          tr: 'Klasik Burger',
          ar: 'برجر كلاسيكي'
        },
        description: {
          en: 'Beef patty with lettuce, tomato, and cheese',
          tr: 'Marul, domates ve peynirli dana köftesi',
          ar: 'قطعة لحم بقري مع الخس والطماطم والجبن'
        },
        price: 45,
        currency: '₺',
        isPopular: true
      },
      {
        id: 'pizza',
        name: {
          en: 'Margherita Pizza',
          tr: 'Margherita Pizza',
          ar: 'بيتزا مارغريتا'
        },
        description: {
          en: 'Fresh tomatoes, mozzarella, and basil',
          tr: 'Taze domates, mozzarella ve fesleğen',
          ar: 'طماطم طازجة وموزاريلا وريحان'
        },
        price: 55,
        currency: '₺',
        isVegetarian: true
      },
      {
        id: 'chicken-wings',
        name: {
          en: 'Spicy Chicken Wings',
          tr: 'Acılı Tavuk Kanatları',
          ar: 'أجنحة دجاج حارة'
        },
        description: {
          en: 'Buffalo-style wings with hot sauce',
          tr: 'Acı soslu Buffalo usulü kanatlar',
          ar: 'أجنحة بأسلوب الجاموس مع الصلصة الحارة'
        },
        price: 40,
        currency: '₺',
        isSpicy: true
      },
      {
        id: 'fries',
        name: {
          en: 'French Fries',
          tr: 'Patates Kızartması',
          ar: 'بطاطس مقلية'
        },
        description: {
          en: 'Crispy golden fries with sea salt',
          tr: 'Deniz tuzu ile çıtır altın patates',
          ar: 'بطاطس مقرمشة ذهبية مع ملح البحر'
        },
        price: 20,
        currency: '₺',
        isVegetarian: true
      }
    ]
  },
  {
    id: 'hookah',
    name: {
      en: 'Hookah',
      tr: 'Nargile',
      ar: 'الشيشة'
    },
    icon: 'Wind',
    color: 'from-purple-500 to-indigo-600',
    items: [
      {
        id: 'apple-hookah',
        name: {
          en: 'Apple Mint',
          tr: 'Elma Nane',
          ar: 'تفاح ونعناع'
        },
        description: {
          en: 'Fresh apple flavor with cool mint',
          tr: 'Serin nane ile taze elma aroması',
          ar: 'طعم التفاح الطازج مع النعناع البارد'
        },
        price: 80,
        currency: '₺',
        isPopular: true
      },
      {
        id: 'grape-hookah',
        name: {
          en: 'Grape',
          tr: 'Üzüm',
          ar: 'عنب'
        },
        description: {
          en: 'Sweet grape flavor',
          tr: 'Tatlı üzüm aroması',
          ar: 'طعم العنب الحلو'
        },
        price: 75,
        currency: '₺'
      },
      {
        id: 'watermelon-hookah',
        name: {
          en: 'Watermelon',
          tr: 'Karpuz',
          ar: 'بطيخ'
        },
        description: {
          en: 'Refreshing watermelon flavor',
          tr: 'Ferahlatıcı karpuz aroması',
          ar: 'طعم البطيخ المنعش'
        },
        price: 78,
        currency: '₺'
      },
      {
        id: 'mixed-hookah',
        name: {
          en: 'Mixed Fruits',
          tr: 'Karışık Meyve',
          ar: 'فواكه مختلطة'
        },
        description: {
          en: 'Blend of tropical fruits',
          tr: 'Tropik meyve karışımı',
          ar: 'خليط من الفواكه الاستوائية'
        },
        price: 85,
        currency: '₺'
      }
    ]
  }
];