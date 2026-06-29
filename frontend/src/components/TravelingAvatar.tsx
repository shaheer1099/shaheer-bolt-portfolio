import { useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';
import standingPose from '../assets/images/hero-designer-coder-full-effect.png';
import laptopPose from '../assets/images/avatar3.png';
import techPose from '../assets/images/avatar5.png';
import deskPose from '../assets/images/avatar4.png';
import {
  getAboutAvatarRect,
  getAboutAvatarStageRect,
  getHeroAvatarRect,
  getServicesAvatarRect,
  getTechAvatarRect,
} from '../constants/avatarDimensions';

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
  const [poseOpacity, setPoseOpacity] = useState({
    standing: 1,
    laptop: 0,
    tech: 0,
    desk: 0,
  });
  const [layerOpacity, setLayerOpacity] = useState(0);
  const [box, setBox] = useState<AvatarBox>(() =>
    typeof window !== 'undefined' ? getHeroAvatarRect() ?? FALLBACK_BOX : FALLBACK_BOX,
  );

  useLayoutEffect(() => {
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

    const update = () => {
      if (window.innerWidth < 768) {
        setLayerOpacity(0);
        setPoseOpacity({ standing: 1, laptop: 0, tech: 0, desk: 0 });
        document.documentElement.style.setProperty('--hero-avatar-opacity', '1');
        document.documentElement.style.setProperty('--about-avatar-opacity', '1');
        document.documentElement.style.setProperty('--tech-avatar-opacity', '1');
        document.documentElement.style.setProperty('--services-avatar-opacity', '1');
        return;
      }

      const wrapper = wrapperRef.current;
      const about = document.getElementById('about');
      const techStack = document.getElementById('tech-stack');
      const services = document.getElementById('expertise');
      if (!wrapper || !about || !techStack || !services) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const wrapperTop = wrapper.getBoundingClientRect().top + scrollY;
      const aboutTop = about.getBoundingClientRect().top + scrollY;
      const techTop = techStack.getBoundingClientRect().top + scrollY;
      const servicesTop = services.getBoundingClientRect().top + scrollY;

      const aboutStop = aboutTop - 30;
      const heroMoveStart = Math.min(
        aboutStop,
        Math.max(wrapperTop, aboutTop - window.innerHeight + 30),
      );
      const aboutMoveStart = Math.max(
        aboutStop,
        aboutTop + about.offsetHeight - window.innerHeight + 30,
      );
      const techStop = Math.max(aboutMoveStart + 1, techTop - window.innerHeight * 0.08);
      const servicesMoveStart = Math.max(techStop, servicesTop - window.innerHeight + 30);
      const servicesStop = Math.max(servicesMoveStart + 1, servicesTop - 30);

      document.documentElement.style.setProperty(
        '--hero-avatar-opacity',
        scrollY >= heroMoveStart && scrollY < aboutStop ? '0' : '1',
      );

      const heroImgRect = getHeroAvatarRect();
      const aboutImgRect = getAboutAvatarRect();
      const aboutStageRect = getAboutAvatarStageRect();
      const techImgRect = getTechAvatarRect();
      const servicesImgRect = getServicesAvatarRect();
      const startBox = heroImgRect ?? FALLBACK_BOX;
      const midBox = aboutImgRect
        ? {
            left: aboutStageRect
              ? aboutStageRect.left + aboutStageRect.width / 2 - aboutImgRect.width / 2
              : aboutImgRect.left,
            top: aboutImgRect.top,
            width: aboutImgRect.width,
            height: aboutImgRect.height,
          }
        : startBox;
      const endBox = techImgRect ?? midBox;
      const servicesBox = servicesImgRect ?? endBox;

      const firstLegProgress = aboutStop > heroMoveStart ? clamp((scrollY - heroMoveStart) / (aboutStop - heroMoveStart)) : 1;
      const secondLegProgress = clamp((scrollY - aboutMoveStart) / (techStop - aboutMoveStart));
      const thirdLegProgress = clamp((scrollY - servicesMoveStart) / (servicesStop - servicesMoveStart));

      const isHeroToAbout = scrollY >= heroMoveStart && scrollY < aboutStop;
      const isHoldingAbout = scrollY >= aboutStop && scrollY < aboutMoveStart;
      const isAboutToTech = scrollY >= aboutMoveStart && scrollY < techStop;
      const isHoldingTech = scrollY >= techStop && scrollY < servicesMoveStart;
      const isTechToServices = scrollY >= servicesMoveStart && scrollY < servicesStop;
      const isHoldingServices = scrollY >= servicesStop;

      document.documentElement.style.setProperty('--about-avatar-opacity', isHoldingAbout ? '1' : '0');
      document.documentElement.style.setProperty('--tech-avatar-opacity', isHoldingTech ? '1' : '0');
      document.documentElement.style.setProperty('--services-avatar-opacity', isHoldingServices ? '1' : '0');

      if (isHeroToAbout) {
        setBox({
          left: lerp(startBox.left, midBox.left, firstLegProgress),
          top: lerp(startBox.top, midBox.top, firstLegProgress),
          width: lerp(startBox.width, midBox.width, firstLegProgress),
          height: lerp(startBox.height, midBox.height, firstLegProgress),
        });
        setLayerOpacity(1);
        setPoseOpacity({
          standing: 1 - clamp((firstLegProgress - 0.2) / 0.45),
          laptop: clamp((firstLegProgress - 0.28) / 0.45),
          tech: 0,
          desk: 0,
        });
        return;
      }

      if (isAboutToTech) {
        setBox({
          left: lerp(midBox.left, endBox.left, secondLegProgress),
          top: lerp(midBox.top, endBox.top, secondLegProgress),
          width: lerp(midBox.width, endBox.width, secondLegProgress),
          height: lerp(midBox.height, endBox.height, secondLegProgress),
        });
        setLayerOpacity(1);
        setPoseOpacity({
          standing: 0,
          laptop: 1 - clamp((secondLegProgress - 0.22) / 0.42),
          tech: clamp((secondLegProgress - 0.3) / 0.42),
          desk: 0,
        });
        return;
      }

      if (isTechToServices) {
        setBox({
          left: lerp(endBox.left, servicesBox.left, thirdLegProgress),
          top: lerp(endBox.top, servicesBox.top, thirdLegProgress),
          width: lerp(endBox.width, servicesBox.width, thirdLegProgress),
          height: lerp(endBox.height, servicesBox.height, thirdLegProgress),
        });
        setLayerOpacity(1);
        setPoseOpacity({
          standing: 0,
          laptop: 0,
          tech: 1 - clamp((thirdLegProgress - 0.2) / 0.45),
          desk: clamp((thirdLegProgress - 0.32) / 0.42),
        });
        return;
      }

      setLayerOpacity(0);
      setPoseOpacity({ standing: 0, laptop: 0, tech: 0, desk: 0 });
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
      document.documentElement.style.removeProperty('--services-avatar-opacity');
      document.documentElement.style.removeProperty('--hero-avatar-opacity');
    };
  }, [wrapperRef]);

  return (
    <div
      style={{ opacity: layerOpacity }}
      className="hidden md:block fixed inset-0 pointer-events-none z-20"
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
          style={{ opacity: poseOpacity.standing }}
          className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
        />

        <img
          src={laptopPose}
          alt=""
          aria-hidden
          decoding="async"
          style={{ opacity: poseOpacity.laptop }}
          className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
        />

        <img
          src={techPose}
          alt=""
          aria-hidden
          decoding="async"
          style={{ opacity: poseOpacity.tech }}
          className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
        />

        <img
          src={deskPose}
          alt=""
          aria-hidden
          decoding="async"
          style={{ opacity: poseOpacity.desk }}
          className="avatar-crisp absolute inset-0 h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}
