import { ReactNode, useRef } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import TravelingAvatar from './TravelingAvatar';
import { LogoMarquee } from './BrandLogo';

interface HeroAboutSectionProps {
  children?: ReactNode;
}

export default function HeroAboutSection({ children }: HeroAboutSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef} className="relative">
      <TravelingAvatar wrapperRef={wrapperRef} />
      <Hero />
      <div className="relative isolate overflow-hidden bg-[#06080d]">
        <div
          className="absolute inset-0 -z-10 opacity-[0.075]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-[980px] bg-[radial-gradient(ellipse_at_72%_0%,rgba(6,182,212,0.14),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.56),rgba(6,8,13,0))]" />
        <div className="absolute inset-x-0 top-[24%] -z-10 h-[900px] bg-[radial-gradient(ellipse_at_18%_48%,rgba(59,130,246,0.085),transparent_48%)]" />
        <div className="absolute inset-x-0 top-[52%] -z-10 h-[900px] bg-[radial-gradient(ellipse_at_82%_54%,rgba(6,182,212,0.07),transparent_46%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[820px] bg-[radial-gradient(ellipse_at_48%_84%,rgba(59,130,246,0.07),transparent_52%)]" />
        <section id="brand-slider" className="relative z-10 scroll-mt-20">
          <LogoMarquee />
        </section>
        <About />
        <Skills />
        {children}
      </div>
    </div>
  );
}
