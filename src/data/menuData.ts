export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  type: 'Veg' | 'Non-Veg';
  description: string;
  category: MenuCategory;
  nutrition: Nutrition;
  bestseller?: boolean;
  image?: string;
}

export type MenuCategory =
  | 'Burrito Bowls'
  | 'Salads'
  | 'Overnight Oats'
  | 'Breakfast'
  | 'Smoothies'
  | 'Burrito Wraps'
  | 'Protein Mojito'
  | 'Sandwiches'
  | 'Desserts'
  | 'Cold-Pressed Juices';

export interface CategoryGroup {
  id: string;
  number: string;
  title: MenuCategory;
  filterKey: 'BOWLS' | 'WRAPS' | 'OATS' | 'DRINKS' | 'SANDWICHES' | 'DESSERTS' | 'BREAKFAST' | 'SALADS';
  shortLabel: string;
  image: string;
  items: MenuItem[];
}

export const RESTAURANT_INFO = {
  name: 'Healthy Nation',
  tagline: 'Real food. Clean macros. Global flavours.',
  address: '4, 15th Cross, 17th Main Road, 2nd Phase, J.P. Nagar, Bengaluru, Karnataka 560078',
  phone: '073494 70274',
  cleanPhone: '917349470274',
  hours: '11:00 AM – 10:00 PM',
  coordinates: '12.9081° N, 77.5878° E',
  mapUrl: 'https://maps.google.com/?q=Healthy+Nation+JP+Nagar+Bengaluru',
  instagram: 'https://www.instagram.com/healthynationblr/',
  instagramHandle: '@healthynationblr'
};

export const MENU_ITEMS: MenuItem[] = [
  // 1. Burrito Bowls
  {
    id: 'bowl-paneer',
    category: 'Burrito Bowls',
    name: 'Creamy Paneer Burrito Bowl',
    price: 249,
    type: 'Veg',
    description: 'Mild, creamy paneer bowl balanced with rice, veggies and smooth dressing.',
    nutrition: {
      calories: 540,
      protein: 22,
      carbs: 64,
      fats: 22
    },
    image: '/assets/images/category_bowls_1790678840564.jpg'
  },
  {
    id: 'bowl-chipotle',
    category: 'Burrito Bowls',
    name: 'Chipotle Chicken Burrito Bowl',
    price: 249,
    type: 'Non-Veg',
    description: 'Bold chipotle-flavoured chicken breast with grains, beans and vibrant toppings.',
    nutrition: {
      calories: 580,
      protein: 28,
      carbs: 68,
      fats: 20
    },
    image: '/assets/images/hero_burrito_bowl_1790678825853.jpg'
  },
  {
    id: 'bowl-tandoori',
    category: 'Burrito Bowls',
    name: 'Tandoori Chicken Burrito Bowl',
    price: 249,
    type: 'Non-Veg',
    description: 'Spiced tandoori chicken breast served over rice with beans and refreshing vegetables.',
    nutrition: {
      calories: 600,
      protein: 27,
      carbs: 70,
      fats: 22
    },
    bestseller: true,
    image: '/assets/images/hero_burrito_bowl_1790678825853.jpg'
  },
  {
    id: 'bowl-bbq',
    category: 'Burrito Bowls',
    name: 'BBQ Chicken Burrito Bowl',
    price: 249,
    type: 'Non-Veg',
    description: 'BBQ chicken served with a balanced combination of grains, vegetables and toppings.',
    nutrition: {
      calories: 590,
      protein: 26,
      carbs: 72,
      fats: 21
    },
    image: '/assets/images/category_bowls_1790678840564.jpg'
  },

  // 2. Salads
  {
    id: 'salad-sprouts',
    category: 'Salads',
    name: 'Mixed Sprouts Bowl',
    price: 139,
    type: 'Veg',
    description: 'Fresh mixed sprouts tossed with vegetables and spices for a light, zesty bowl.',
    nutrition: {
      calories: 240,
      protein: 14,
      carbs: 38,
      fats: 4
    },
    image: '/assets/images/menu_salads_1790681380492.jpg'
  },
  {
    id: 'salad-chipotle',
    category: 'Salads',
    name: 'Chipotle Chicken Salad Bowl',
    price: 219,
    type: 'Non-Veg',
    description: 'Smoky chipotle-spiced grilled chicken with crisp vegetables and light dressing.',
    nutrition: {
      calories: 380,
      protein: 29,
      carbs: 24,
      fats: 12
    },
    image: '/assets/images/menu_salads_1790681380492.jpg'
  },

  // 3. Overnight Oats
  {
    id: 'oats-berry',
    category: 'Overnight Oats',
    name: 'Berry Vanilla Whey Oats',
    price: 279,
    type: 'Veg',
    description: 'Berry and vanilla overnight oats with whey protein.',
    nutrition: {
      calories: 510,
      protein: 32,
      carbs: 63,
      fats: 16
    },
    bestseller: true,
    image: '/assets/images/menu_oats_1790681396925.jpg'
  },
  {
    id: 'oats-cocoa',
    category: 'Overnight Oats',
    name: 'Cocoa Banana Oats',
    price: 209,
    type: 'Veg',
    description: 'Cocoa and banana overnight oats.',
    nutrition: {
      calories: 480,
      protein: 20,
      carbs: 70,
      fats: 18
    },
    image: '/assets/images/menu_oats_1790681396925.jpg'
  },
  {
    id: 'oats-apple',
    category: 'Overnight Oats',
    name: 'Apple Cinnamon Oats',
    price: 209,
    type: 'Veg',
    description: 'Apple and cinnamon overnight oats.',
    nutrition: {
      calories: 460,
      protein: 20,
      carbs: 68,
      fats: 17
    },
    image: '/assets/images/menu_oats_1790681396925.jpg'
  },

  // 4. Breakfast
  {
    id: 'bf-omelette',
    category: 'Breakfast',
    name: 'Bread Omelette',
    price: 99,
    type: 'Non-Veg',
    description: 'A classic omelette layered between slices of bread.',
    nutrition: {
      calories: 320,
      protein: 16,
      carbs: 28,
      fats: 16
    },
    image: '/assets/images/menu_breakfast_1790681418119.jpg'
  },

  // 5. Smoothies
  {
    id: 'sm-blueberry',
    category: 'Smoothies',
    name: 'Blueberry Smoothie',
    price: 249,
    type: 'Veg',
    description: 'Smooth blueberry blend.',
    nutrition: {
      calories: 450,
      protein: 20,
      carbs: 45,
      fats: 19
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  },
  {
    id: 'sm-strawberry',
    category: 'Smoothies',
    name: 'Strawberry Smoothie',
    price: 249,
    type: 'Veg',
    description: 'Fresh strawberry smoothie.',
    nutrition: {
      calories: 450,
      protein: 20,
      carbs: 45,
      fats: 19
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  },
  {
    id: 'sm-blackberry',
    category: 'Smoothies',
    name: 'Blackberry Smoothie',
    price: 249,
    type: 'Veg',
    description: 'Rich blackberry smoothie.',
    nutrition: {
      calories: 450,
      protein: 20,
      carbs: 45,
      fats: 19
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  },

  // 6. Burrito Wraps
  {
    id: 'wrap-mixveg',
    category: 'Burrito Wraps',
    name: 'Mix Veg Loaded Burrito Wrap',
    price: 149,
    type: 'Veg',
    description: 'Seasoned vegetables, beans and corn wrapped in a soft tortilla.',
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 64,
      fats: 14
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },
  {
    id: 'wrap-spicy-paneer',
    category: 'Burrito Wraps',
    name: 'Spicy Paneer Burrito Wrap',
    price: 219,
    type: 'Veg',
    description: 'Spiced paneer with crunchy vegetables and creamy dressing.',
    nutrition: {
      calories: 510,
      protein: 22,
      carbs: 52,
      fats: 24
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },
  {
    id: 'wrap-makhani-chicken',
    category: 'Burrito Wraps',
    name: 'Makhani Chicken Burrito Wrap',
    price: 219,
    type: 'Non-Veg',
    description: 'Makhani-style chicken balanced with fresh greens and grains.',
    nutrition: {
      calories: 530,
      protein: 26,
      carbs: 50,
      fats: 24
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },
  {
    id: 'wrap-toasted-paneer',
    category: 'Burrito Wraps',
    name: 'Toasted Paneer Burrito Wrap',
    price: 219,
    type: 'Veg',
    description: 'Smoky roasted paneer with fresh vegetables in a warm tortilla.',
    nutrition: {
      calories: 490,
      protein: 21,
      carbs: 48,
      fats: 23
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },
  {
    id: 'wrap-tandoori-chicken',
    category: 'Burrito Wraps',
    name: 'Tandoori Chicken Burrito Wrap',
    price: 219,
    type: 'Non-Veg',
    description: 'Tandoori chicken with crisp vegetables and yogurt dressing.',
    nutrition: {
      calories: 510,
      protein: 27,
      carbs: 49,
      fats: 22
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },

  // 7. Protein Mojito
  {
    id: 'mojito-watermelon',
    category: 'Protein Mojito',
    name: 'Watermelon Mojito',
    price: 239,
    type: 'Veg',
    description: 'Refreshing watermelon-flavoured whey isolate with real fruit.',
    nutrition: {
      calories: 140,
      protein: 15,
      carbs: 20,
      fats: 0
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  },

  // 8. Sandwiches
  {
    id: 'sand-pb-banana',
    category: 'Sandwiches',
    name: 'Peanut Butter Banana',
    price: 114,
    type: 'Veg',
    description: 'Peanut butter and banana in a simple satisfying combination.',
    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 48,
      fats: 16
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },
  {
    id: 'sand-tandoori-paneer',
    category: 'Sandwiches',
    name: 'Tandoori Paneer Sandwich',
    price: 124,
    type: 'Veg',
    description: 'Soft paneer with smoky tandoori flavour.',
    nutrition: {
      calories: 390,
      protein: 18,
      carbs: 42,
      fats: 16
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },
  {
    id: 'sand-makhani-paneer',
    category: 'Sandwiches',
    name: 'Makhani Paneer Sandwich',
    price: 124,
    type: 'Veg',
    description: 'Creamy makhani paneer filling with mild spices.',
    nutrition: {
      calories: 410,
      protein: 17,
      carbs: 44,
      fats: 18
    },
    image: '/assets/images/category_wraps_1790678854553.jpg'
  },

  // 9. Desserts
  {
    id: 'dessert-blueberry',
    category: 'Desserts',
    name: 'Blueberry Cheesecake',
    price: 239,
    type: 'Veg',
    description: 'Yogurt-based cheesecake with blueberry flavour.',
    nutrition: {
      calories: 280,
      protein: 11,
      carbs: 32,
      fats: 12
    },
    image: '/assets/images/category_dessert_1790678884462.jpg'
  },
  {
    id: 'dessert-strawberry',
    category: 'Desserts',
    name: 'Strawberry Cheesecake',
    price: 239,
    type: 'Veg',
    description: 'Creamy yogurt cheesecake with strawberry flavour.',
    nutrition: {
      calories: 280,
      protein: 11,
      carbs: 32,
      fats: 12
    },
    image: '/assets/images/category_dessert_1790678884462.jpg'
  },
  {
    id: 'dessert-mango',
    category: 'Desserts',
    name: 'Mango Cheesecake',
    price: 239,
    type: 'Veg',
    description: 'Creamy yogurt cheesecake with mango flavour.',
    nutrition: {
      calories: 280,
      protein: 11,
      carbs: 34,
      fats: 11
    },
    image: '/assets/images/category_dessert_1790678884462.jpg'
  },

  // 10. Cold-Pressed Juices
  {
    id: 'juice-burnout',
    category: 'Cold-Pressed Juices',
    name: 'Burnout Booster',
    price: 124,
    type: 'Veg',
    description: 'Apple, pomegranate, beetroot, mint and lemon.',
    nutrition: {
      calories: 85,
      protein: 1,
      carbs: 20,
      fats: 0
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  },
  {
    id: 'juice-gut',
    category: 'Cold-Pressed Juices',
    name: 'Gut Reset',
    price: 124,
    type: 'Veg',
    description: 'Cucumber, pineapple, mint, lemon and ginger.',
    nutrition: {
      calories: 75,
      protein: 1,
      carbs: 17,
      fats: 0
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  },
  {
    id: 'juice-skin',
    category: 'Cold-Pressed Juices',
    name: 'Skin Rejuvenation',
    price: 124,
    type: 'Veg',
    description: 'Orange, carrot, lemon, ginger and mint.',
    nutrition: {
      calories: 82,
      protein: 1,
      carbs: 19,
      fats: 0
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  },
  {
    id: 'juice-afterparty',
    category: 'Cold-Pressed Juices',
    name: 'After Party Repair',
    price: 124,
    type: 'Veg',
    description: 'Apple, beetroot, carrot, lemon and mint.',
    nutrition: {
      calories: 88,
      protein: 1,
      carbs: 21,
      fats: 0
    },
    image: '/assets/images/category_drinks_1790678866171.jpg'
  }
];

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'cat-bowls',
    number: '01 / BOWLS',
    title: 'Burrito Bowls',
    filterKey: 'BOWLS',
    shortLabel: 'Bowls',
    image: '/assets/images/category_bowls_1790678840564.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Burrito Bowls')
  },
  {
    id: 'cat-salads',
    number: '02 / SALADS',
    title: 'Salads',
    filterKey: 'SALADS',
    shortLabel: 'Salads',
    image: '/assets/images/menu_salads_1790681380492.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Salads')
  },
  {
    id: 'cat-oats',
    number: '03 / OATS',
    title: 'Overnight Oats',
    filterKey: 'OATS',
    shortLabel: 'Oats',
    image: '/assets/images/menu_oats_1790681396925.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Overnight Oats')
  },
  {
    id: 'cat-breakfast',
    number: '04 / BREAKFAST',
    title: 'Breakfast',
    filterKey: 'BREAKFAST',
    shortLabel: 'Breakfast',
    image: '/assets/images/menu_breakfast_1790681418119.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Breakfast')
  },
  {
    id: 'cat-smoothies',
    number: '05 / SMOOTHIES',
    title: 'Smoothies',
    filterKey: 'DRINKS',
    shortLabel: 'Smoothies',
    image: '/assets/images/category_drinks_1790678866171.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Smoothies')
  },
  {
    id: 'cat-wraps',
    number: '06 / WRAPS',
    title: 'Burrito Wraps',
    filterKey: 'WRAPS',
    shortLabel: 'Wraps',
    image: '/assets/images/category_wraps_1790678854553.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Burrito Wraps')
  },
  {
    id: 'cat-mojito',
    number: '07 / PROTEIN MOJITO',
    title: 'Protein Mojito',
    filterKey: 'DRINKS',
    shortLabel: 'Mojito',
    image: '/assets/images/category_drinks_1790678866171.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Protein Mojito')
  },
  {
    id: 'cat-sandwiches',
    number: '08 / SANDWICHES',
    title: 'Sandwiches',
    filterKey: 'SANDWICHES',
    shortLabel: 'Sandwiches',
    image: '/assets/images/category_wraps_1790678854553.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Sandwiches')
  },
  {
    id: 'cat-desserts',
    number: '09 / DESSERTS',
    title: 'Desserts',
    filterKey: 'DESSERTS',
    shortLabel: 'Desserts',
    image: '/assets/images/category_dessert_1790678884462.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Desserts')
  },
  {
    id: 'cat-juices',
    number: '10 / JUICES',
    title: 'Cold-Pressed Juices',
    filterKey: 'DRINKS',
    shortLabel: 'Juices',
    image: '/assets/images/category_drinks_1790678866171.jpg',
    items: MENU_ITEMS.filter((i) => i.category === 'Cold-Pressed Juices')
  }
];
