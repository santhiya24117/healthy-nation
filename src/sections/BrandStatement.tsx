import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  onOpenStory?: () => void;
}

export default function BrandStatement({ onOpenStory }: Props) {
  const marqueeItems = [
    { label: 'Bowls', target: 'cat-bowls' },
    { label: 'Wraps', target: 'cat-wraps' },
    { label: 'Oats', target: 'cat-oats' },
    { label: 'Smoothies', target: 'cat-smoothies' },
    { label: 'Sandwiches', target: 'cat-sandwiches' },
    { label: 'Juices', target: 'cat-juices' },
    { label: 'Cheesecakes', target: 'cat-desserts' },
  ];

  const handleScrollToCategory = (targetId: string) => {
    const el = document.getElementById(targetId) || document.getElementById('our-menu');
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="brand-intro" className="bg-[#F7F4EC] text-[#1C1C18] pt-10 pb-8 md:pt-14 md:pb-10 border-b border-[#E2DED4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl">
          <span className="text-[12px] uppercase font-semibold tracking-wider text-[#66734F]">
            OUR STORY
          </span>

          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-[#1C1C18] mt-3 leading-[1.2] tracking-tight">
            Wholesome food with bold flavours.
          </h2>

          <p className="mt-4 text-[16px] md:text-[18px] text-[#6F7068] font-normal leading-relaxed">
            We make wholesome meals with balanced ingredients and enough variety to keep healthy eating enjoyable every day. Freshly prepared in our J.P. Nagar kitchen with honest portions and clean ingredients.
          </p>

          {onOpenStory && (
            <button
              onClick={onOpenStory}
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#66734F] hover:text-[#1C1C18] transition-colors cursor-pointer"
            >
              <span>Read our kitchen story</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Modern Infinite Horizontal Marquee */}
      <div className="relative w-full border-y border-[#E2DED4] bg-[#FFFFFF] py-4.5 overflow-hidden select-none group">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10" />

        {/* Marquee Track (Repeated twice for seamless 50% translation loop) */}
        <div className="animate-marquee items-center gap-8 sm:gap-12">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12 shrink-0">
              <button
                type="button"
                onClick={() => handleScrollToCategory(item.target)}
                className="text-[17px] sm:text-[20px] font-bold tracking-tight text-[#1C1C18] hover:text-[#66734F] transition-colors cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
              <span className="text-[10px] text-[#66734F] opacity-70">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
