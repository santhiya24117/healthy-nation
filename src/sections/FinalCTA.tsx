import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  onExploreMenu: () => void;
  onOrderOnline: () => void;
}

export default function FinalCTA({ onExploreMenu, onOrderOnline }: Props) {
  return (
    <section className="bg-[#1C1C18] text-[#F7F4EC] py-12 md:py-16 px-6 md:px-12 lg:px-16 border-b border-white/10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-bold text-[#F7F4EC] tracking-tight leading-[1.15]">
          Ready for your next meal?
        </h2>

        <p className="mt-4 text-[16px] md:text-[18px] text-[#D8D6CC] font-normal max-w-md leading-relaxed">
          Good food, made fresh. Come by or order online.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOrderOnline}
            className="inline-flex items-center gap-2 bg-[#C85C3A] text-[#FFFFFF] rounded-[8px] px-[22px] py-[14px] text-[15px] font-semibold hover:bg-[#b54e2e] transition-all duration-200 cursor-pointer"
          >
            <span>Order Online</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onExploreMenu}
            className="inline-flex items-center gap-2 bg-transparent border border-[#F7F4EC] text-[#F7F4EC] rounded-[8px] px-[22px] py-[14px] text-[15px] font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer"
          >
            <span>View Menu</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
