import { useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';
import standingPose from '../assets/images/avatar1.png';
import laptopPose from '../assets/images/avatar3.png';
import techPose from '../assets/images/avatar5.png';
import { getAboutAvatarRect, getHeroAvatarRect, getTechAvatarRect } from '../constants/avatarDimensions';

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
  const [techTransitionStart, setTechTransitionStart] = useState(0.68);
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
      const techStack = document.getElementById('tech-stack');
      if (!wrapper || !about || !techStack) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const wrapperTop = wrapper.getBoundingClientRect().top + scrollY;
      const aboutTop = about.getBoundingClientRect().top + scrollY;
      const techTop = techStack.getBoundingClientRect().top + scrollY;

      const start = wrapperTop;
      const aboutStop = aboutTop - window.innerHeight * 0.28;
      const aboutMoveStart = Math.max(
        aboutStop,
        aboutTop + about.offsetHeight - window.innerHeight * 0.85,
      );
      const end = Math.max(start + 1, techTop - window.innerHeight * 0.18);
      const nextProgress = clamp((scrollY - start) / (end - start));
      const aboutProgress = clamp((aboutStop - start) / (end - start));
      const techStartProgress = clamp((aboutMoveStart - start) / (end - start));
      setProgress(nextProgress);
      setTechTransitionStart(techStartProgress);

      document.documentElement.style.setProperty(
        '--about-avatar-opacity',
        '0',
      );
      document.documentElement.style.setProperty(
        '--tech-avatar-opacity',
        nextProgress >= 0.985 ? '1' : '0',
      );

      const heroImgRect = getHeroAvatarRect();
      const aboutImgRect = getAboutAvatarRect();
      const techImgRect = getTechAvatarRect();
      const startBox = heroImgRect ?? FALLBACK_BOX;
      const midBox = aboutImgRect ?? startBox;
      const endBox = techImgRect ?? midBox;

      const firstLegProgress = aboutProgress > 0 ? clamp(nextProgress / aboutProgress) : 1;
      const secondLegProgress =
        techStartProgress < 1
          ? clamp((nextProgress - techStartProgress) / (1 - techStartProgress))
          : 1;

      const isHeroToAbout = nextProgress <= aboutProgress;
      const isHoldingAbout = nextProgress > aboutProgress && nextProgress <= techStartProgress;
      const fromBox = isHeroToAbout ? startBox : midBox;
      const toBox = isHeroToAbout || isHoldingAbout ? midBox : endBox;
      const legProgress = isHeroToAbout ? firstLegProgress : isHoldingAbout ? 1 : secondLegProgress;

      setBox({
        left: lerp(fromBox.left, toBox.left, legProgress),
        top: lerp(fromBox.top, toBox.top, legProgress),
        width: lerp(fromBox.width, toBox.width, legProgress),
        height: lerp(fromBox.height, toBox.height, legProgress),
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
      document.documentElement.style.removeProperty('--tech-avatar-opacity');
    };
  }, [wrapperRef]);

  const clamp = (value: number) => Math.min(1, Math.max(0, value));
  const fade = (from: number, to: number) => clamp((progress - from) / (to - from));
  const standingOpacity = progress <= 0.985 ? 1 - fade(0.08, 0.24) : 0;
  const sittingOpacity =
    progress <= 0.985
      ? Math.min(fade(0.16, 0.34), 1 - fade(techTransitionStart, techTransitionStart + 0.18))
      : 0;
  const techOpacity = progress <= 0.985 ? fade(techTransitionStart + 0.04, techTransitionStart + 0.24) : 0;
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

        <img
          src={techPose}
          alt=""
          aria-hidden
          decoding="async"
          style={{ opacity: techOpacity }}
          className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}
