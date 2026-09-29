import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

interface Props {
  onOpenStory: () => void;
  onOpenMealPlans: () => void;
  onOpenOrder: () => void;
}

export default function Footer({ onOpenStory, onOpenMealPlans, onOpenOrder }: Props) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1C18] text-[#F7F4EC] py-14 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-[#F7F4EC]">
              Healthy Nation
            </h3>
            <p className="text-[16px] font-medium text-[#D8D6CC]">
              Real food. Full of flavour.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#D8D6CC]">
            <button
              onClick={() => scrollTo('our-menu')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Menu
            </button>
            <button
              onClick={onOpenMealPlans}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Meal Plans
            </button>
            <button
              onClick={onOpenStory}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Find Us
            </button>
            <a
              href={RESTAURANT_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[#E4E8D9] hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-3 text-sm text-[#D8D6CC] space-y-1 md:text-right">
            <p className="font-semibold text-[#F7F4EC]">J.P. Nagar, Bengaluru</p>
            <p>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-white transition-colors"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </p>
            <p>11:00 AM – 10:00 PM</p>
          </div>
        </div>

        {/* Simple Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9C978D]">
          <span>© 2026 Healthy Nation</span>
          <span>4, 15th Cross, 17th Main Road, 2nd Phase, J.P. Nagar</span>
        </div>
      </div>
    </footer>
  );
}
