import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface Props {
  onOpenOrder: () => void;
  onOpenStory: () => void;
  onOpenMealPlans: () => void;
  cartCount: number;
}

export default function Navbar({
  onOpenOrder,
  onOpenStory,
  onOpenMealPlans,
  cartCount
}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#E2DED4] py-3.5 shadow-xs text-[#1C1C18]'
            : 'bg-transparent border-b border-white/10 py-5 text-[#FFFFFF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-[#1C1C18] hover:text-[#66734F]' : 'text-[#FFFFFF] hover:text-[#E4E8D9]'
            }`}
          >
            Healthy Nation
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => scrollToSection('our-menu')}
              className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-[#1C1C18] hover:text-[#66734F]' : 'text-[#FFFFFF] hover:text-[#E4E8D9]'
              }`}
            >
              Menu
            </button>
            <button
              onClick={onOpenMealPlans}
              className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-[#1C1C18] hover:text-[#66734F]' : 'text-[#FFFFFF] hover:text-[#E4E8D9]'
              }`}
            >
              Meal Plans
            </button>
            <button
              onClick={onOpenStory}
              className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-[#1C1C18] hover:text-[#66734F]' : 'text-[#FFFFFF] hover:text-[#E4E8D9]'
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-[#1C1C18] hover:text-[#66734F]' : 'text-[#FFFFFF] hover:text-[#E4E8D9]'
              }`}
            >
              Find Us
            </button>
          </nav>

          {/* Right Action: Order Now CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2 bg-[#C85C3A] text-[#FFFFFF] rounded-[8px] px-5 py-2.5 text-sm font-semibold hover:bg-[#b54e2e] transition-colors cursor-pointer shadow-xs"
            >
              <span>Order Now</span>
              <ArrowRight className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#FFFFFF] text-[#C85C3A] text-xs font-bold rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions: Bag + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenOrder}
              className={`p-2 relative rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-[#E4E8D9] text-[#1C1C18]' : 'hover:bg-white/10 text-white'
              }`}
              aria-label="View Order Tray"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-[#C85C3A] text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-[#1C1C18] hover:text-[#66734F]' : 'text-white hover:text-white/80'
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F7F4EC] text-[#1C1C18] flex flex-col justify-between p-8 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#E2DED4] pb-5">
            <span className="text-xl font-bold tracking-tight text-[#1C1C18]">
              Healthy Nation
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1C1C18] hover:text-[#66734F]"
              aria-label="Close navigation overlay"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto text-left">
            <button
              onClick={() => scrollToSection('our-menu')}
              className="text-2xl font-semibold text-[#1C1C18] hover:text-[#66734F] text-left transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMealPlans();
              }}
              className="text-2xl font-semibold text-[#1C1C18] hover:text-[#66734F] text-left transition-colors"
            >
              Meal Plans
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStory();
              }}
              className="text-2xl font-semibold text-[#1C1C18] hover:text-[#66734F] text-left transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-2xl font-semibold text-[#1C1C18] hover:text-[#66734F] text-left transition-colors"
            >
              Find Us
            </button>
          </nav>

          <div className="border-t border-[#E2DED4] pt-6 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3.5 bg-[#C85C3A] text-white text-sm font-semibold rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#b54e2e] transition-colors"
            >
              <span>Order Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-between text-xs text-[#6F7068]">
              <span>J.P. Nagar, Bengaluru</span>
              <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`} className="text-[#1C1C18] font-semibold underline">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
