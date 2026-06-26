import { useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';
import standingPose from '../assets/images/avatar1.png';
import laptopPose from '../assets/images/avatar3.png';
import { getAboutAvatarRect, getHeroAvatarRect } from '../constants/avatarDimensions';

interface TravelingAvatarProps {
  wrapperRef: RefObject<HTMLElement | null>;
}

type AvatarBox = { left: number; top: number; width: number; height: number };

const FALLBACK_BOX: AvatarBox = { left: 0, top: 0, width: 460, height: 307 };

/**
 * Scroll-driven avatar overlay. A hidden Hero `<img>` provides the layout box;
 * this layer is always mounted and pinned to that box until scroll moves it.
 */
export default function TravelingAvatar({ wrapperRef }: TravelingAvatarProps) {
  const [progress, setProgress] = useState(0);
  const [box, setBox] = useState<AvatarBox>(() =>
    typeof window !== 'undefined' ? getHeroAvatarRect() ?? FALLBACK_BOX : FALLBACK_BOX,
  );

  useLayoutEffect(() => {
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

    const update = () => {
      const wrapper = wrapperRef.current;
      const about = document.getElementById('about');
      if (!wrapper || !about) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const wrapperTop = wrapper.getBoundingClientRect().top + scrollY;
      const aboutTop = about.getBoundingClientRect().top + scrollY;

      const start = wrapperTop;
      const end = Math.max(start + 1, aboutTop - window.innerHeight * 0.28);
      const nextProgress = clamp((scrollY - start) / (end - start));
      setProgress(nextProgress);

      document.documentElement.style.setProperty(
        '--about-avatar-opacity',
        nextProgress >= 0.985 ? '1' : '0',
      );

      const heroImgRect = getHeroAvatarRect();
      const aboutImgRect = getAboutAvatarRect();
      const startBox = heroImgRect ?? FALLBACK_BOX;
      const endBox = aboutImgRect ?? startBox;

      setBox({
        left: lerp(startBox.left, endBox.left, nextProgress),
        top: lerp(startBox.top, endBox.top, nextProgress),
        width: lerp(startBox.width, endBox.width, nextProgress),
        height: lerp(startBox.height, endBox.height, nextProgress),
      });
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

  return (
    <div
      style={{ opacity: layerOpacity }}
      className="hidden lg:block fixed inset-0 pointer-events-none z-30"
    >
      <div
        className="fixed will-change-[left,top,width,height]"
        style={{
          left: box.left,
          top: box.top,
          width: box.width,
          height: box.height,
        }}
      >
        <img
          src={standingPose}
          alt="Shaheer"
          decoding="async"
          fetchPriority="high"
          style={{ opacity: standingOpacity }}
          className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
        />

        <img
          src={laptopPose}
          alt=""
          aria-hidden
          decoding="async"
          style={{ opacity: sittingOpacity }}
          className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}
