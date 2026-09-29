import React from 'react';
import { X, Check, MessageCircle, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan?: (planName: string) => void;
}

export default function MealPlanModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-[#1C1C18]/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl bg-[#FFFFFF] p-6 sm:p-8 md:p-10 text-[#1C1C18] rounded-[16px] shadow-xl border border-[#E2DED4] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F7F4EC] transition-colors cursor-pointer"
          aria-label="Close meal plans"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="text-[12px] uppercase font-semibold tracking-wider text-[#66734F]">
          MEAL PLANS
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1C1C18] mt-1.5 mb-2 tracking-tight">
          Eating well, made easier.
        </h2>
        <p className="text-[15px] text-[#6F7068] mb-8">
          Weekly and monthly meal plans for convenient, balanced everyday eating. Dispatched freshly from 17th Main Road, J.P. Nagar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`bg-[#F7F4EC] border ${
                p.featured ? 'border-[#66734F] ring-1 ring-[#66734F]' : 'border-[#E2DED4]'
              } p-6 flex flex-col justify-between rounded-[12px] hover:border-[#66734F] transition-colors`}
            >
              <div>
                {p.featured && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#66734F] bg-[#E4E8D9] px-2 py-0.5 rounded-full mb-2">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[18px] font-bold text-[#1C1C18] leading-tight mb-2">{p.title}</h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-[24px] font-bold text-[#1C1C18]">{p.price}</span>
                  <span className="text-xs text-[#6F7068] font-medium">{p.unit}</span>
                </div>
                <p className="text-[13px] text-[#6F7068] mb-4 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2 border-t border-[#E2DED4] pt-3">
                  {p.features.map((f, i) => (
                    <li key={i} className="text-xs text-[#1C1C18] flex items-start gap-1.5">
                      <Check className="h-3.5 w-3.5 text-[#66734F] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleInquireWhatsApp(p.whatsappMsg)}
                className="mt-6 w-full py-2.5 bg-[#1C1C18] text-white text-xs font-semibold uppercase tracking-wider rounded-[8px] hover:bg-[#66734F] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                <span>Inquire Plan →</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#E2DED4] flex flex-wrap items-center justify-between gap-3 text-xs text-[#6F7068]">
          <span>
            Custom preferences or corporate orders? Call or WhatsApp our kitchen at{' '}
            <span className="font-semibold text-[#1C1C18]">{RESTAURANT_INFO.phone}</span>.
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.cleanPhone}?text=${encodeURIComponent('Hi Healthy Nation, I would like to inquire about corporate orders or custom meal plans.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#66734F] font-semibold hover:underline"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <span>·</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1 text-[#1C1C18] font-semibold hover:underline"
            >
              <Phone className="h-3 w-3" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
