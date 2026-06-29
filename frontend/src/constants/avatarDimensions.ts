/** PNG canvas ratio (1536×1024 landscape). */
const CANVAS_WIDTH_RATIO = 1536 / 1024;

/** Target display height from viewport — height drives size so the character reads larger. */
export function getAvatarDisplayHeight(viewportWidth = window.innerWidth, viewportHeight = window.innerHeight): number {
  if (viewportWidth >= 1280) {
    return Math.min(Math.round(viewportHeight * 0.66), 680);
  }
  if (viewportWidth >= 1024) {
    return Math.min(Math.round(viewportHeight * 0.62), 640);
  }
  if (viewportWidth >= 640) {
    return Math.min(Math.round(viewportHeight * 0.48), 480);
  }
  return Math.min(Math.round(viewportHeight * 0.4), 380);
}

/** Read the live on-screen box of the Hero-section static reference image. */
export function getHeroAvatarRect(): { left: number; top: number; width: number; height: number } | null {
  const ref = document.querySelector<HTMLImageElement>('[data-avatar-hero-img]');

  if (ref && ref.offsetWidth > 0 && ref.offsetHeight > 0) {
    const rect = ref.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  return null;
}

/** Read the live on-screen box of the About-section reference image. */
export function getAboutAvatarRect(): { left: number; top: number; width: number; height: number } | null {
  const ref = document.querySelector<HTMLImageElement>('[data-avatar-about-img]');

  if (ref && ref.offsetWidth > 0 && ref.offsetHeight > 0) {
    const rect = ref.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  return null;
}

/** Read the live on-screen box of the About-section avatar column. */
export function getAboutAvatarStageRect(): { left: number; top: number; width: number; height: number } | null {
  const ref = document.querySelector<HTMLElement>('[data-avatar-about-stage]');

  if (ref && ref.offsetWidth > 0 && ref.offsetHeight > 0) {
    const rect = ref.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  return null;
}

/** Read the live on-screen box of the Tech Stack center avatar. */
export function getTechAvatarRect(): { left: number; top: number; width: number; height: number } | null {
  const ref = document.querySelector<HTMLImageElement>('[data-avatar-tech-img]');

  if (ref && ref.offsetWidth > 0 && ref.offsetHeight > 0) {
    const rect = ref.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  return null;
}

/** Read the live on-screen box of the Services-section desk avatar. */
export function getServicesAvatarRect(): { left: number; top: number; width: number; height: number } | null {
  const ref = document.querySelector<HTMLImageElement>('[data-avatar-services-img]');

  if (ref && ref.offsetWidth > 0 && ref.offsetHeight > 0) {
    const rect = ref.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  return null;
}

/** Read the live rendered size of the About-section reference image. */
export function getAboutAvatarSize(): { width: number; height: number } {
  const ref = document.querySelector<HTMLImageElement>('[data-avatar-about-img]');

  if (ref && ref.offsetWidth > 0 && ref.offsetHeight > 0) {
    return { width: ref.offsetWidth, height: ref.offsetHeight };
  }

  const height = getAvatarDisplayHeight();
  const width = Math.round(height * CANVAS_WIDTH_RATIO);
  return { width, height };
}

/** Tailwind height classes shared by Hero + About avatar images. */
export const AVATAR_HEIGHT_CLASS =
  'h-[clamp(380px,min(58vh,680px),680px)] sm:h-[clamp(420px,min(60vh,640px),640px)] lg:h-[clamp(480px,min(66vh,680px),680px)]';
