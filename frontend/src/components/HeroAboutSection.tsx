import { useRef } from 'react';
import Hero from './Hero';
import About from './About';
import TravelingAvatar from './TravelingAvatar';

export default function HeroAboutSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef} className="relative">
      <TravelingAvatar wrapperRef={wrapperRef} />
      <Hero />
      <About />
    </div>
  );
}
