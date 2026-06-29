import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const canUseCursor = window.matchMedia('(pointer: fine) and (min-width: 768px)').matches;
    if (!canUseCursor) return;

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setIsInteractive(Boolean(target?.closest('a, button, input, textarea, select, [role="button"]')));
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ${
          isInteractive
            ? 'h-10 w-10 border-blue-400/70 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.28)]'
            : 'h-5 w-5 border-blue-500/70 bg-cyan-400/10 shadow-[0_0_18px_rgba(59,130,246,0.22)]'
        }`}
      />
      <div className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400" />
    </div>
  );
}
