import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBlobProps {
  className?: string;
  /** Vertical travel distance in px across the element's scroll range. */
  distance?: number;
}

/**
 * Decorative background element that drifts vertically as it scrolls through
 * the viewport, adding depth. Purely visual and pointer-events-none.
 */
export default function ParallaxBlob({ className = '', distance = 120 }: ParallaxBlobProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}
