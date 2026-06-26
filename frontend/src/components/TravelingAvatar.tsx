import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { RefObject } from 'react';
import standingPose from '../assets/images/avatar1.png';
import laptopPose from '../assets/images/avatar3.png';
import { getAboutAvatarRect, getAboutAvatarSize } from '../constants/avatarDimensions';

interface TravelingAvatarProps {
  wrapperRef: RefObject<HTMLElement | null>;
}

/**
 * A single developer avatar that starts standing in the Hero and, as the user
 * scrolls through the Hero -> About range, drifts down the right column while
 * smoothly crossfading into a seated "working on laptop" posture. Rendered as a
 * viewport-fixed overlay (immune to ancestor `overflow` clipping that breaks
 * `position: sticky`), driven entirely by the wrapper's scroll progress. The
 * whole layer fades out once About has been read, so it never trails the page.
 */
export default function TravelingAvatar({ wrapperRef }: TravelingAvatarProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  const [box, setBox] = useState({ left: 0, top: 0, width: 460, height: 307 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

    const update = () => {
      const wrapper = wrapperRef.current;
      const about = document.getElementById('about');
      const heroStage = document.querySelector<HTMLElement>('[data-avatar-hero-stage]');
      const aboutStage = document.querySelector<HTMLElement>('[data-avatar-about-stage]');
      if (!wrapper || !about) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const wrapperTop = wrapper.getBoundingClientRect().top + scrollY;
      const aboutTop = about.getBoundingClientRect().top + scrollY;

      // Start immediately in Hero and complete the morph as About reaches the
      // upper-middle of the viewport. This makes the transition visible and
      // deterministic instead of depending on Framer's target offset heuristics.
      const start = wrapperTop;
      const end = Math.max(start + 1, aboutTop - window.innerHeight * 0.28);
      const nextProgress = clamp((scrollY - start) / (end - start));
      setProgress(nextProgress);

      if (heroStage && aboutStage) {
        const heroRect = heroStage.getBoundingClientRect();
        const aboutRect = aboutStage.getBoundingClientRect();
        const { width: avatarWidth, height: avatarHeight } = getAboutAvatarSize();
        const aboutImgRect = getAboutAvatarRect();

        const startBox = {
          left: heroRect.left + heroRect.width / 2 - avatarWidth / 2,
          top: heroRect.top + (heroRect.height - avatarHeight) / 2,
          width: avatarWidth,
          height: avatarHeight,
        };
        const endBox = aboutImgRect ?? {
          left: aboutRect.left + aboutRect.width / 2 - avatarWidth / 2,
          top: aboutRect.top + (aboutRect.height - avatarHeight) / 2,
          width: avatarWidth,
          height: avatarHeight,
        };

        setBox({
          left: lerp(startBox.left, endBox.left, nextProgress),
          top: lerp(startBox.top, endBox.top, nextProgress),
          width: lerp(startBox.width, endBox.width, nextProgress),
          height: lerp(startBox.height, endBox.height, nextProgress),
        });
      }

      document.documentElement.style.setProperty(
        '--about-avatar-opacity',
        nextProgress >= 0.985 ? '1' : '0',
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.documentElement.style.removeProperty('--about-avatar-opacity');
    };
  }, [wrapperRef]);

  const clamp = (value: number) => Math.min(1, Math.max(0, value));
  const fade = (from: number, to: number) => clamp((progress - from) / (to - from));
  const standingOpacity = progress <= 0.985 ? 1 - fade(0.12, 0.45) : 0;
  const sittingOpacity = progress <= 0.985 ? fade(0.28, 0.65) : 0;
  const layerOpacity = progress < 0.985 ? 1 : 0;

  if (reducedMotion) {
    return (
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-screen relative">
          <div
            className="fixed"
            style={{
              left: box.left,
              top: box.top,
              width: box.width,
              height: box.height,
            }}
          >
            <img
              src={laptopPose}
              alt="Shaheer"
              decoding="async"
              className="avatar-crisp h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      style={{ opacity: layerOpacity }}
      className="hidden lg:block fixed inset-0 pointer-events-none z-30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-screen relative">
        <motion.div
          className="fixed"
          style={{
            left: box.left,
            top: box.top,
            width: box.width,
            height: box.height,
          }}
        >
          {/* Standing pose */}
          <motion.img
            src={standingPose}
            alt="Shaheer"
            decoding="async"
            fetchPriority="high"
            style={{ opacity: standingOpacity }}
            className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Seated working pose */}
          <motion.img
            src={laptopPose}
            alt="Shaheer working on a laptop"
            decoding="async"
            style={{ opacity: sittingOpacity }}
            className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
          />

        </motion.div>
      </div>
    </motion.div>
  );
}
