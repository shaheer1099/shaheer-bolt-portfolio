import { useRef } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import TravelingAvatar from './TravelingAvatar';
import { LogoMarquee } from './BrandLogo';

export default function HeroAboutSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef} className="relative">
      <TravelingAvatar wrapperRef={wrapperRef} />
      <Hero />
      <div className="relative isolate overflow-hidden bg-[#06080d]">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[linear-gradient(180deg,rgba(6,8,13,0),rgba(6,8,13,0.22)_34%,rgba(6,8,13,0)),radial-gradient(ellipse_at_74%_18%,rgba(59,130,246,0.075),transparent_46%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[700px] bg-[radial-gradient(ellipse_at_34%_65%,rgba(6,182,212,0.08),transparent_48%)]" />
        <div className="relative z-10">
          <LogoMarquee />
        </div>
        <About />
        <Skills />
      </div>
    </div>
  );
}
