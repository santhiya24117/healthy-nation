import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Check } from 'lucide-react';
import Navbar from './components/Navbar';
import OrderDrawer, { CartItem } from './components/OrderDrawer';
import StoryModal from './components/StoryModal';
import MealPlanModal from './components/MealPlanModal';
import Hero from './sections/Hero';
import BrandStatement from './sections/BrandStatement';
import InteractiveMenu from './sections/InteractiveMenu';
import MealPlanSection from './sections/MealPlanSection';
import LocationCTA from './sections/LocationCTA';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import { MenuItem } from './data/menuData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderDrawerOpen, setOrderDrawerOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [mealPlanModalOpen, setMealPlanModalOpen] = useState(false);
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });

    setLastAddedName(item.name);
    setTimeout(() => {
      setLastAddedName(null);
    }, 2400);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((ci) => {
          if (ci.item.id === id) {
            const newQ = ci.quantity + delta;
            return newQ > 0 ? { ...ci, quantity: newQ } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null);
    });
  };

  const handleClearCart = () => setCart([]);

  const handleExploreMenu = () => {
    const el = document.getElementById('our-menu');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#F7F4EC] text-[#1C1C18] font-sans antialiased selection:bg-[#E4E8D9] selection:text-[#1C1C18]">
      {/* Fixed Navigation */}
      <Navbar
        onOpenOrder={() => setOrderDrawerOpen(true)}
        onOpenStory={() => setStoryModalOpen(true)}
        onOpenMealPlans={() => setMealPlanModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onOrderOnline={() => setOrderDrawerOpen(true)}
        />

        {/* 2. Brand Statement */}
        <BrandStatement onOpenStory={() => setStoryModalOpen(true)} />

        {/* 3. Dedicated Simplified Menu Section (Category Cards) */}
        <InteractiveMenu
          onAddToCart={handleAddToCart}
          onOpenOrder={() => setOrderDrawerOpen(true)}
        />

        {/* 4. Meal Plan Section */}
        <MealPlanSection onOpenMealPlans={() => setMealPlanModalOpen(true)} />

        {/* 5. J.P. Nagar Outpost Location */}
        <LocationCTA onOrderOnline={() => setOrderDrawerOpen(true)} />

        {/* 6. Final Call-to-Action */}
        <FinalCTA
          onExploreMenu={handleExploreMenu}
          onOrderOnline={() => setOrderDrawerOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenStory={() => setStoryModalOpen(true)}
        onOpenMealPlans={() => setMealPlanModalOpen(true)}
        onOpenOrder={() => setOrderDrawerOpen(true)}
      />

      {/* Modals & Drawers */}
      <OrderDrawer
        isOpen={orderDrawerOpen}
        onClose={() => setOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      <StoryModal
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />

      <MealPlanModal
        isOpen={mealPlanModalOpen}
        onClose={() => setMealPlanModalOpen(false)}
        onSelectPlan={() => {
          setOrderDrawerOpen(true);
        }}
      />

      {/* Bottom Floating Order Bar when items are in tray */}
      {totalCartCount > 0 && !orderDrawerOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setOrderDrawerOpen(true)}
            className="flex items-center gap-3 bg-[#1C1C18] text-[#FFFFFF] px-5 py-3 rounded-[8px] shadow-lg hover:bg-[#66734F] transition-all border border-[#E2DED4] cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[#C85C3A] text-[10px] font-bold flex items-center justify-center text-white">
                {totalCartCount}
              </span>
            </div>
            <div className="text-left text-xs">
              <span className="font-semibold block">Order Tray</span>
              <span className="text-[#E4E8D9]">₹{cartSubtotal}</span>
            </div>
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      )}

      {/* Quick Add Notification Toast */}
      {lastAddedName && (
        <div className="fixed bottom-6 left-6 z-40 bg-[#1C1C18] text-white px-4 py-2.5 text-xs rounded-[8px] border border-[#E2DED4] shadow-lg flex items-center gap-2 animate-fadeIn">
          <Check className="h-4 w-4 text-emerald-400" />
          <span>Added <strong className="text-[#E4E8D9]">{lastAddedName}</strong> to tray</span>
        </div>
      )}
    </div>
  );
}
