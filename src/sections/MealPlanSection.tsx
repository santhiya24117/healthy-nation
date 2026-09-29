import React from 'react';
import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface Props {
  onOpenMealPlans?: () => void;
}

export default function MealPlanSection({ onOpenMealPlans }: Props) {
  const plans = [
    {
      title: '5-Day Lunch Bowl Pass',
      price: '₹1,199',
      unit: '/ week',
      desc: 'Chef-crafted daily Burrito Bowl delivered hot to your office or home in J.P. Nagar.',
      features: [
        'Choose between Tandoori Chicken & Creamy Paneer',
        'Free daily delivery',
        'Clean, balanced nutrition',
      ],
      whatsappMsg: 'Hi Healthy Nation, I would like to inquire about the 5-Day Lunch Bowl Pass (₹1,199 / week) in J.P. Nagar.',
    },
    {
      title: 'High Protein Athlete Plan',
      price: '₹2,499',
      unit: '/ 6 days',
      desc: 'Dual-meal power stack: Overnight Whey Oats for breakfast + Burrito Bowl & Cold-Pressed Juice for lunch.',
      features: [
        '50g+ total daily protein',
        'Includes 4 Cold-Pressed Juices',
        'Priority delivery from J.P. Nagar',
      ],
      whatsappMsg: 'Hi Healthy Nation, I would like to inquire about the High Protein Athlete Plan (₹2,499 / 6 days) in J.P. Nagar.',
      featured: true,
    },
    {
      title: 'Clean Reset Bundle',
      price: '₹1,449',
      unit: '/ week',
      desc: 'Morning fuel and evening cold-pressed juices to reset your routine effortlessly.',
      features: [
        'Berry Vanilla & Cocoa Banana Oats',
        'Gut Reset & Burnout Booster juices',
        'No refined sugars',
      ],
      whatsappMsg: 'Hi Healthy Nation, I would like to inquire about the Clean Reset Bundle (₹1,449 / week) in J.P. Nagar.',
    },
  ];

  const handleInquireWhatsApp = (message: string) => {
    const url = `https://wa.me/${RESTAURANT_INFO.cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-[#E4E8D9] text-[#1C1C18] py-10 md:py-14 border-b border-[#E2DED4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[12px] uppercase font-semibold tracking-wider text-[#66734F]">
            MEAL PLANS
          </span>

          <h2 className="text-[34px] sm:text-[40px] md:text-[46px] font-bold text-[#1C1C18] mt-2 leading-[1.15] tracking-tight">
            Eating well, made easier.
          </h2>

          <p className="mt-2 text-[15px] sm:text-[17px] text-[#1C1C18]/80 font-normal leading-relaxed">
            Weekly and monthly meal plans for convenient, balanced everyday eating. Dispatched freshly from 17th Main Road, J.P. Nagar.
          </p>
        </div>

        {/* 3 Meal Plan Cards with WhatsApp Inquire Integration */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`bg-[#FFFFFF] p-6 sm:p-7 rounded-[12px] border ${
                plan.featured ? 'border-[#66734F] ring-1 ring-[#66734F]' : 'border-[#E2DED4]'
              } shadow-xs flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5`}
            >
              <div>
                {plan.featured && (
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#66734F] bg-[#E4E8D9] px-2.5 py-0.5 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1C1C18] leading-tight">
                  {plan.title}
                </h3>

                <div className="flex items-baseline gap-1 mt-3 mb-3">
                  <span className="text-[28px] font-bold text-[#1C1C18]">{plan.price}</span>
                  <span className="text-[14px] text-[#6F7068] font-medium">{plan.unit}</span>
                </div>

                <p className="text-[14px] text-[#6F7068] leading-relaxed mb-5">
                  {plan.desc}
                </p>

                <ul className="space-y-2.5 border-t border-[#E2DED4] pt-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-[13px] text-[#1C1C18] flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#66734F] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire Plan WhatsApp Integration */}
              <div className="mt-6 pt-4 border-t border-[#E2DED4]">
                <button
                  type="button"
                  onClick={() => handleInquireWhatsApp(plan.whatsappMsg)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1C1C18] hover:bg-[#66734F] text-[#FFFFFF] rounded-[8px] py-3 text-[14px] font-semibold transition-colors duration-200 cursor-pointer shadow-xs group"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" />
                  <span>Inquire Plan</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate / Custom Preferences Notice with WhatsApp link */}
        <div className="mt-8 pt-5 border-t border-[#E2DED4]/60 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#1C1C18]/80">
          <div>
            Custom preferences or corporate orders? Call or WhatsApp our kitchen at{' '}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.cleanPhone}?text=${encodeURIComponent('Hi Healthy Nation, I would like to inquire about custom meal plans / corporate orders.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1C1C18] underline hover:text-[#66734F] transition-colors"
            >
              {RESTAURANT_INFO.phone}
            </a>.
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.cleanPhone}?text=${encodeURIComponent('Hi Healthy Nation, I have an inquiry about your meal plans.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#FFFFFF] border border-[#E2DED4] text-[#1C1C18] font-semibold text-xs hover:border-[#66734F] transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp Kitchen</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#FFFFFF] border border-[#E2DED4] text-[#1C1C18] font-semibold text-xs hover:border-[#66734F] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#66734F]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
