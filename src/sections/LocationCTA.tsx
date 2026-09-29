import React from 'react';
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface Props {
  onOrderOnline: () => void;
}

export default function LocationCTA({ onOrderOnline }: Props) {
  return (
    <section id="location" className="bg-[#F7F4EC] text-[#1C1C18] py-10 md:py-14 border-b border-[#E2DED4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-7">
            <span className="text-[12px] uppercase font-semibold tracking-wider text-[#66734F]">
              FIND US
            </span>

            <h2 className="text-[34px] sm:text-[40px] md:text-[46px] font-bold text-[#1C1C18] mt-2 mb-8 leading-[1.15] tracking-tight">
              Your next meal is in J.P. Nagar.
            </h2>

            <div className="space-y-6 max-w-lg border-t border-[#E2DED4] pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-[#66734F] shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[16px] text-[#1C1C18]">Healthy Nation</h3>
                  <p className="text-[14px] text-[#6F7068] leading-relaxed mt-1">
                    4, 15th Cross, 17th Main Road,<br />
                    2nd Phase, J.P. Nagar,<br />
                    Bengaluru – 560078
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-[#66734F] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#66734F] font-semibold">Hours</h4>
                  <p className="text-[15px] font-medium text-[#1C1C18] mt-0.5">
                    11:00 AM – 10:00 PM · Every Day
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-[#66734F] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#66734F] font-semibold">Phone</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-[16px] font-semibold text-[#1C1C18] hover:text-[#66734F] mt-0.5 inline-block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={RESTAURANT_INFO.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1C1C18] text-[#FFFFFF] rounded-[8px] px-[22px] py-[14px] text-[15px] font-semibold hover:bg-[#66734F] transition-all duration-200"
              >
                <span>Get Directions</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 bg-transparent border border-[#1C1C18] text-[#1C1C18] rounded-[8px] px-[22px] py-[14px] text-[15px] font-semibold hover:bg-[#E4E8D9] transition-all duration-200"
              >
                <span>Call Us</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOrderOnline}
                className="inline-flex items-center gap-2 bg-[#C85C3A] text-[#FFFFFF] rounded-[8px] px-[22px] py-[14px] text-[15px] font-semibold hover:bg-[#b54e2e] transition-all duration-200 cursor-pointer"
              >
                <span>Order Online</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Location Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] p-8 rounded-[16px] border border-[#E2DED4] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-semibold text-[#66734F] tracking-wider">
                  J.P. Nagar 2nd Phase
                </span>
                <h3 className="text-[26px] font-bold text-[#1C1C18] mt-1.5 leading-snug">
                  Dine-in, takeaway & fast local delivery.
                </h3>
                <p className="text-[14px] text-[#6F7068] mt-3 leading-relaxed">
                  Located near the 15th Cross & 17th Main junction in South Bengaluru. Order fresh bowls, oats, wraps, and juices directly to your home or office.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2DED4] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#6F7068]">
                  <span>Kitchen Status</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 inline-block" />
                    Open today 11:00 AM – 10:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#6F7068]">
                  <span>Location</span>
                  <span className="font-medium text-[#1C1C18]">J.P. Nagar, Bengaluru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
