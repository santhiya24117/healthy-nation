import React, { useState } from 'react';
import { ArrowRight, Plus, Info, X } from 'lucide-react';
import { CATEGORY_GROUPS, CategoryGroup, MenuItem } from '../data/menuData';

interface Props {
  onAddToCart: (item: MenuItem) => void;
  onOpenOrder: () => void;
}

type FilterKey = 'ALL' | 'BOWLS' | 'WRAPS' | 'OATS' | 'DRINKS' | 'SANDWICHES' | 'DESSERTS';

export default function InteractiveMenu({ onAddToCart, onOpenOrder }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('ALL');
  const [activeNutritionItem, setActiveNutritionItem] = useState<MenuItem | null>(null);
  const [hoveredNutritionId, setHoveredNutritionId] = useState<string | null>(null);

  const filterTabs: { label: string; key: FilterKey }[] = [
    { label: 'ALL', key: 'ALL' },
    { label: 'BOWLS', key: 'BOWLS' },
    { label: 'WRAPS', key: 'WRAPS' },
    { label: 'OATS', key: 'OATS' },
    { label: 'DRINKS', key: 'DRINKS' },
    { label: 'SANDWICHES', key: 'SANDWICHES' },
    { label: 'DESSERTS', key: 'DESSERTS' },
  ];

  const handleFilterClick = (key: FilterKey) => {
    setActiveFilter(key);
    if (key !== 'ALL') {
      const match = CATEGORY_GROUPS.find((cg) => cg.filterKey === key);
      if (match) {
        const el = document.getElementById(match.id);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  const displayedCategories = CATEGORY_GROUPS;

  return (
    <section id="our-menu" className="bg-[#F7F4EC] text-[#1C1C18] py-10 md:py-14 border-b border-[#E2DED4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-[12px] uppercase font-semibold tracking-wider text-[#66734F]">
            OUR MENU
          </span>
          <h2 className="text-[34px] sm:text-[40px] md:text-[46px] font-bold text-[#1C1C18] mt-2 tracking-tight">
            Our Menu
          </h2>
          <p className="text-[18px] md:text-[20px] font-medium text-[#1C1C18] mt-2">
            Good food, simply organised.
          </p>
          <p className="mt-1 text-[15px] md:text-[16px] text-[#6F7068] font-normal leading-relaxed">
            Explore bowls, wraps, oats, drinks and desserts made for everyday eating.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E2DED4]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleFilterClick(tab.key)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-[8px] transition-colors duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#66734F] text-[#FFFFFF]'
                    : 'bg-transparent text-[#1C1C18] border border-[#E2DED4] hover:bg-[#E4E8D9]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Grid of Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedCategories.map((catGroup) => {
            const isHighlight = activeFilter !== 'ALL' && catGroup.filterKey === activeFilter;
            return (
              <div
                key={catGroup.id}
                id={catGroup.id}
                className={`bg-[#FFFFFF] border transition-all duration-200 rounded-[16px] p-7 sm:p-8 flex flex-col justify-between shadow-xs ${
                  isHighlight
                    ? 'border-[#66734F] ring-2 ring-[#66734F]/20'
                    : 'border-[#E2DED4] hover:border-[#66734F]/50'
                }`}
              >
                <div>
                  {/* Category Card Image Banner */}
                  <div className="h-[140px] sm:h-[160px] w-full overflow-hidden rounded-[10px] bg-[#F7F4EC] mb-6 border border-[#E2DED4]">
                    <img
                      src={catGroup.image}
                      alt={catGroup.title}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Category Header */}
                  <div className="flex items-baseline justify-between mb-4 border-b border-[#E2DED4] pb-3">
                    <div>
                      <span className="text-[12px] font-semibold tracking-wider text-[#66734F] uppercase block">
                        {catGroup.number}
                      </span>
                      <h3 className="text-[28px] font-semibold text-[#1C1C18] leading-tight mt-0.5">
                        {catGroup.title}
                      </h3>
                    </div>
                    <span className="text-xs text-[#6F7068] font-medium">
                      {catGroup.items.length} {catGroup.items.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>

                  {/* Compact Food Items Rows */}
                  <div className="divide-y divide-[#E2DED4]">
                    {catGroup.items.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onAddToCart(item)}
                        className="group relative py-3.5 px-3 -mx-3 rounded-[8px] flex items-center justify-between gap-4 transition-all duration-200 hover:bg-[#F7F4EC] cursor-pointer"
                        title="Click row to add to tray"
                      >
                        {/* Left: Item Name, Veg/Non-Veg & Short Description */}
                        <div className="flex-1 pr-2 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-2 w-2 rounded-full shrink-0 ${
                                item.type === 'Veg' ? 'bg-emerald-600' : 'bg-[#C85C3A]'
                              }`}
                              title={item.type}
                            />
                            <h4 className="text-[17px] font-semibold text-[#1C1C18] leading-snug truncate">
                              {item.name}
                            </h4>

                            {/* Info icon button for Nutrition Facts */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveNutritionItem(item);
                              }}
                              onMouseEnter={() => setHoveredNutritionId(item.id)}
                              onMouseLeave={() => setHoveredNutritionId(null)}
                              className="text-[#6F7068] hover:text-[#1C1C18] p-1 rounded-[4px] hover:bg-[#E4E8D9] transition-colors shrink-0 cursor-pointer"
                              title="View nutrition facts"
                              aria-label={`Nutrition facts for ${item.name}`}
                            >
                              <Info className="h-3.5 w-3.5" />
                            </button>

                            {/* Hover Tooltip Preview (Desktop only) */}
                            {hoveredNutritionId === item.id && (
                              <div className="hidden sm:flex absolute left-4 bottom-full mb-1 z-30 bg-[#1C1C18] text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-md pointer-events-none items-center gap-2">
                                <span>{item.nutrition.calories} kcal</span>
                                <span className="text-[#66734F]">·</span>
                                <span>{item.nutrition.protein}g protein</span>
                                <span className="text-[#66734F]">·</span>
                                <span>{item.nutrition.carbs}g carbs</span>
                                <span className="text-[#66734F]">·</span>
                                <span>{item.nutrition.fats}g fat</span>
                              </div>
                            )}
                          </div>
                          <p className="text-[14px] text-[#6F7068] font-normal mt-0.5 leading-relaxed line-clamp-1">
                            {item.description}
                          </p>
                        </div>

                        {/* Right: Price & Plus Icon */}
                        <div className="flex items-center gap-3 shrink-0 text-right">
                          <span className="text-[16px] font-semibold text-[#C85C3A]">
                            ₹{item.price}
                          </span>
                          <div className="h-7 w-7 rounded-full bg-[#E4E8D9] flex items-center justify-center text-[#1C1C18] transition-all duration-200 group-hover:bg-[#66734F] group-hover:text-white">
                            <Plus className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Menu CTA at Bottom */}
        <div className="mt-14 pt-8 border-t border-[#E2DED4] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FFFFFF] p-8 rounded-[16px] border border-[#E2DED4]">
          <div>
            <h4 className="text-[22px] font-bold text-[#1C1C18]">Ready to order?</h4>
            <p className="text-[15px] text-[#6F7068] mt-1">
              Assemble your custom meal or view your order tray for delivery in J.P. Nagar.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2 bg-[#1C1C18] text-[#FFFFFF] rounded-[8px] px-[22px] py-[14px] text-[15px] font-semibold hover:bg-[#66734F] transition-all duration-200 cursor-pointer"
            >
              <span>View Order Tray</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Clean, Non-Intrusive Nutrition Facts Popup Modal */}
      {activeNutritionItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Subtle backdrop */}
          <div
            className="fixed inset-0 bg-[#1C1C18]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveNutritionItem(null)}
          />

          {/* Minimal Popup Card */}
          <div className="relative z-10 w-full max-w-sm bg-[#FFFFFF] rounded-[16px] p-6 shadow-xl border border-[#E2DED4] text-[#1C1C18] animate-fadeIn">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-[#E2DED4] pb-3.5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#66734F] block">
                  {activeNutritionItem.category} · Nutrition
                </span>
                <h3 className="text-[18px] font-bold text-[#1C1C18] mt-0.5 leading-snug">
                  {activeNutritionItem.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveNutritionItem(null)}
                className="p-1.5 rounded-full hover:bg-[#F7F4EC] text-[#6F7068] hover:text-[#1C1C18] transition-colors cursor-pointer"
                aria-label="Close nutrition facts"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nutrition Facts 4-Grid */}
            <div className="my-5 grid grid-cols-4 gap-2 bg-[#F7F4EC] p-3.5 rounded-[10px] border border-[#E2DED4]">
              <div className="text-center">
                <span className="block text-[18px] font-bold text-[#1C1C18] leading-tight">
                  {activeNutritionItem.nutrition.calories}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#66734F]">
                  Kcal
                </span>
              </div>
              <div className="text-center border-l border-[#E2DED4]">
                <span className="block text-[18px] font-bold text-[#1C1C18] leading-tight">
                  {activeNutritionItem.nutrition.protein}g
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#66734F]">
                  Protein
                </span>
              </div>
              <div className="text-center border-l border-[#E2DED4]">
                <span className="block text-[18px] font-bold text-[#1C1C18] leading-tight">
                  {activeNutritionItem.nutrition.carbs}g
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#66734F]">
                  Carbs
                </span>
              </div>
              <div className="text-center border-l border-[#E2DED4]">
                <span className="block text-[18px] font-bold text-[#1C1C18] leading-tight">
                  {activeNutritionItem.nutrition.fats}g
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#66734F]">
                  Fat
                </span>
              </div>
            </div>

            {/* Description note */}
            <p className="text-[13px] text-[#6F7068] leading-relaxed mb-5">
              {activeNutritionItem.description}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onAddToCart(activeNutritionItem);
                  setActiveNutritionItem(null);
                }}
                className="flex-1 py-2.5 bg-[#1C1C18] text-white text-xs font-semibold rounded-[8px] hover:bg-[#66734F] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add to Tray · ₹{activeNutritionItem.price}</span>
              </button>
              <button
                onClick={() => setActiveNutritionItem(null)}
                className="px-3.5 py-2.5 bg-transparent border border-[#E2DED4] text-[#1C1C18] text-xs font-semibold rounded-[8px] hover:bg-[#F7F4EC] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
