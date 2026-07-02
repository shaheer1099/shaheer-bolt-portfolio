import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const sectionIds = [
  'hero',
  'brand-slider',
  'about',
  'tech-stack',
  'expertise',
  'process',
  'projects',
  'testimonials',
  'experience',
  'contact',
];

const isNativeScrollTarget = (target: EventTarget | null) => {
  const element = target as HTMLElement | null;
  return Boolean(
    element?.closest(
      'input, textarea, select, option, [contenteditable="true"], [data-native-scroll], [data-scroll-modal]',
    ),
  );
};

const scrollToHash = (hash: string) => {
  const id = hash.replace('#', '');
  const element = id ? document.getElementById(id) : null;
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const getSectionTop = (section: HTMLElement) => section.getBoundingClientRect().top + window.scrollY;

export default function SmoothScroll() {
  const location = useLocation();
  const lockUntilRef = useRef(0);

  useEffect(() => {
    if (location.pathname === '/projects' || location.pathname.startsWith('/projects/')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    if (location.pathname === '/' && location.hash) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToHash(location.hash));
      });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine) and (min-width: 768px)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!supportsFinePointer.matches || prefersReducedMotion.matches) {
      return;
    }

    const getSections = () => {
      const firstSection = document.querySelector<HTMLElement>('section');
      return sectionIds
        .map((id) => (id === 'hero' ? document.getElementById('hero') ?? firstSection : document.getElementById(id)))
        .filter((section): section is HTMLElement => Boolean(section));
    };

    const getCurrentIndex = (sections: HTMLElement[]) => {
      const sliderIndex = sections.findIndex((section) => section.id === 'brand-slider');

      if (sliderIndex >= 0 && Math.abs(window.scrollY - getSnapTop(sections[sliderIndex])) <= 48) {
        return sliderIndex;
      }

      const anchor = window.scrollY + window.innerHeight * 0.42;
      let current = 0;

      sections.forEach((section, index) => {
        const top = getSectionTop(section);
        if (top <= anchor) {
          current = index;
        }
      });

      return current;
    };

    const getSnapTop = (section: HTMLElement) => {
      if (section.id !== 'brand-slider') {
        return getSectionTop(section);
      }

      const hero = document.getElementById('hero');
      const sliderTop = getSectionTop(section);
      const sliderHeight = section.offsetHeight;
      const framedTop = sliderTop - Math.max(0, window.innerHeight - sliderHeight);

      return Math.max(hero ? getSectionTop(hero) : 0, framedTop);
    };

    const scrollToSection = (section: HTMLElement) => {
      window.scrollTo({ top: getSnapTop(section), behavior: 'smooth' });
    };

    const handleWheel = (event: WheelEvent) => {
      if (
        location.pathname !== '/' ||
        event.ctrlKey ||
        event.shiftKey ||
        isNativeScrollTarget(event.target) ||
        Math.abs(event.deltaY) < 14
      ) {
        return;
      }

      const now = performance.now();
      if (now < lockUntilRef.current) {
        event.preventDefault();
        return;
      }

      const sections = getSections();
      if (sections.length < 2) {
        return;
      }

      const currentIndex = getCurrentIndex(sections);
      const currentSection = sections[currentIndex];
      const currentTop = getSectionTop(currentSection);
      const currentBottom = currentTop + currentSection.offsetHeight;
      const canScrollWithinCurrentSection = currentSection.offsetHeight > window.innerHeight + 16;
      const boundaryTolerance = 24;

      if (canScrollWithinCurrentSection) {
        const sectionStart = currentTop + boundaryTolerance;
        const sectionEnd = currentBottom - window.innerHeight - boundaryTolerance;
        const isNearSectionStart = window.scrollY <= sectionStart + boundaryTolerance;

        if (event.deltaY > 0 && window.scrollY < sectionEnd) {
          return;
        }

        if (event.deltaY < 0 && window.scrollY > sectionStart && !isNearSectionStart) {
          return;
        }
      }

      const nextIndex = Math.max(
        0,
        Math.min(sections.length - 1, currentIndex + (event.deltaY > 0 ? 1 : -1)),
      );
      const nextSection = sections[nextIndex];

      if (!nextSection || nextIndex === currentIndex) {
        return;
      }

      event.preventDefault();
      lockUntilRef.current = now + 720;
      scrollToSection(nextSection);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [location.pathname]);

  return null;
}
