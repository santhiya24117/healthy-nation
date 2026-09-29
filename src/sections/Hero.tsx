import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface Props {
  onExploreMenu: () => void;
  onOrderOnline: () => void;
}

export default function Hero({ onExploreMenu, onOrderOnline }: Props) {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Ensure video plays smoothly
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled
        });
      }
    }

    // Staggered load trigger
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    // Scroll parallax listener (subtle 1.00 to 1.05 scale)
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute subtle scroll effects
  const scrollProgress = Math.min(scrollY / 800, 1);
  const videoScale = prefersReducedMotion ? 1 : 1 + scrollProgress * 0.05;
  const contentTranslateY = prefersReducedMotion ? 0 : -scrollProgress * 28;

  const scrollToExplore = () => {
    const nextSection = document.getElementById('brand-intro') || document.getElementById('our-menu');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-[#141411] select-none">
      {/* 1. HTML5 Cinematic Background Video */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-700 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: `scale(${videoScale})`,
          transformOrigin: 'center center',
        }}
      >
        <video
          ref={videoRef}
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          poster="/assets/images/healthy-nation-hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/healthy-nation-hero.mp4" type="video/mp4" />
          <source src="/src/assets/videos/healthy-nation-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Hero Overlay - rgba(20,20,17,0.30) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: 'rgba(20, 20, 17, 0.30)' }}
      />

      {/* 3. Hero Content - Lower-left / Center-left Composition */}
      <div
        className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-end pb-24 sm:pb-28 md:pb-24"
        style={{
          transform: `translateY(${contentTranslateY}px)`,
        }}
      >
        <div className="max-w-xl text-left">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '80ms' }}
          >
            <span className="inline-block text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] text-[#E4E8D9] mb-3">
              HEALTHY FOOD · J.P. NAGAR
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-[42px] sm:text-[54px] md:text-[66px] lg:text-[74px] font-bold text-[#FFFFFF] leading-[0.98] tracking-tight transition-all duration-600 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '180ms' }}
          >
            Healthy food.
            <br />
            Full of flavour.
          </h1>

          {/* Description */}
          <p
            className={`mt-4 sm:mt-5 text-[15px] sm:text-[17px] md:text-[18px] text-white/85 font-normal leading-relaxed max-w-[480px] transition-all duration-600 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '280ms' }}
          >
            Real food, balanced meals and bold flavours made fresh in Bengaluru.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 transition-all duration-600 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '380ms' }}
          >
            {/* Primary: Explore Menu → (bg #C85C3A) */}
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center gap-2 bg-[#C85C3A] text-[#FFFFFF] rounded-[8px] px-6 py-3.5 text-[15px] font-semibold hover:bg-[#b54e2e] transition-colors duration-200 cursor-pointer shadow-sm"
            >
              <span>Explore Menu</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Secondary: Order Online → (transparent, 1px solid rgba(255,255,255,0.65)) */}
            <button
              onClick={onOrderOnline}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/65 text-[#FFFFFF] rounded-[8px] px-6 py-3.5 text-[15px] font-semibold hover:bg-white/15 transition-colors duration-200 cursor-pointer"
            >
              <span>Order Online</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Bottom Information Row & Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/25 bg-gradient-to-t from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-3 flex items-center justify-between text-[12px] text-white/75 font-medium">
          {/* Left: 11 AM – 10 PM */}
          <div className="hidden sm:block">
            <span>11 AM – 10 PM</span>
          </div>

          {/* Center: Scroll to explore with gentle arrow animation */}
          <button
            onClick={scrollToExplore}
            className="mx-auto sm:mx-0 flex items-center gap-1.5 text-[11px] sm:text-[12px] uppercase tracking-wider text-white/80 hover:text-white transition-colors cursor-pointer group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="h-3.5 w-3.5 animate-[pulse_2s_ease-in-out_infinite]" />
          </button>

          {/* Right: BOWLS · WRAPS · OATS · DRINKS */}
          <div className="hidden md:flex items-center gap-2">
            <span>BOWLS</span>
            <span className="opacity-50">·</span>
            <span>WRAPS</span>
            <span className="opacity-50">·</span>
            <span>OATS</span>
            <span className="opacity-50">·</span>
            <span>DRINKS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
