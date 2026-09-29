import React from 'react';
import { X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoryModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-[#1C1C18]/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl bg-[#FFFFFF] p-8 md:p-10 text-[#1C1C18] rounded-[16px] shadow-xl border border-[#E2DED4] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F7F4EC] transition-colors cursor-pointer"
          aria-label="Close story"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="text-[12px] uppercase font-semibold tracking-wider text-[#66734F]">
          OUR STORY
        </span>
        <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1C1C18] mt-1.5 mb-5 tracking-tight">
          Real food. Full of flavour.
        </h2>

        <div className="space-y-4 text-[15px] md:text-[16px] leading-relaxed text-[#6F7068]">
          <p>
            Healthy Nation was started in J.P. Nagar with a simple purpose: healthy food that you genuinely look forward to eating. We believe balanced nutrition shouldn't mean sacrificing flavour or feeling like a chore.
          </p>
          <p>
            Every dish is made fresh with quality whole ingredients—spiced lean proteins, wholesome grains, crisp vegetables, and handcrafted dressings. No artificial additives or unnecessary shortcuts.
          </p>
          <div className="p-4 bg-[#F7F4EC] border-l-3 border-[#66734F] my-5 rounded-r-[8px]">
            <p className="text-xs uppercase font-semibold text-[#66734F] tracking-wider">
              J.P. Nagar Outpost
            </p>
            <p className="text-xs text-[#1C1C18] mt-1">
              {RESTAURANT_INFO.address} · Open daily 11:00 AM – 10:00 PM
            </p>
          </div>
          <p>
            Whether it's an energizing burrito bowl, slow-steeped overnight oats, a toasted sandwich, or a guilt-free cheesecake, our kitchen is committed to fresh, balanced food for everyday Bengaluru life.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E2DED4] flex justify-end items-center">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#1C1C18] text-white text-sm font-semibold rounded-[8px] hover:bg-[#66734F] transition-colors cursor-pointer"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
}
