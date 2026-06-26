import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase } from 'lucide-react';
import portraitImg from '../assets/images/avatar.png';

function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const c = canvasEl;
    const draw2d = c.getContext('2d')!;
    const SPACING = 38;
    const RADIUS = 1.5;
    const MAX_DIST = 140;
    let dots: { x: number; y: number; baseX: number; baseY: number; vx: number; vy: number }[] = [];

    function resize() {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
      const cols = Math.ceil(c.width / SPACING) + 1;
      const rows = Math.ceil(c.height / SPACING) + 1;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let col = 0; col < cols; col++) {
          dots.push({ x: col * SPACING, y: r * SPACING, baseX: col * SPACING, baseY: r * SPACING, vx: 0, vy: 0 });
        }
      }
    }

    function draw() {
      draw2d.clearRect(0, 0, c.width, c.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      for (const dot of dots) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const prox = Math.max(0, 1 - dist / MAX_DIST);
        if (prox > 0) {
          const force = prox * prox * 6;
          const angle = Math.atan2(dy, dx);
          dot.vx += Math.cos(angle) * force;
          dot.vy += Math.sin(angle) * force;
        }
        dot.vx += (dot.baseX - dot.x) * 0.08;
        dot.vy += (dot.baseY - dot.y) * 0.08;
        dot.vx *= 0.78;
        dot.vy *= 0.78;
        dot.x += dot.vx;
        dot.y += dot.vy;
        const alpha = 0.12 + prox * 0.7;
        const r2 = RADIUS + prox * 2.5;
        draw2d.beginPath();
        draw2d.arc(dot.x, dot.y, r2, 0, Math.PI * 2);
        if (prox > 0.05) {
          const grad = draw2d.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, r2 * 2);
          grad.addColorStop(0, `rgba(59,130,246,${alpha})`);
          grad.addColorStop(0.5, `rgba(6,182,212,${alpha * 0.6})`);
          grad.addColorStop(1, 'rgba(59,130,246,0)');
          draw2d.fillStyle = grad;
        } else {
          draw2d.fillStyle = `rgba(255,255,255,${alpha})`;
        }
        draw2d.fill();
        if (prox > 0.3) {
          for (const other of dots) {
            const odx = other.x - dot.x;
            const ody = other.y - dot.y;
            const odist = Math.sqrt(odx * odx + ody * ody);
            if (odist > 0 && odist < SPACING * 1.5) {
              const lineAlpha = prox * 0.15 * (1 - odist / (SPACING * 1.5));
              draw2d.beginPath();
              draw2d.moveTo(dot.x, dot.y);
              draw2d.lineTo(other.x, other.y);
              draw2d.strokeStyle = `rgba(59,130,246,${lineAlpha})`;
              draw2d.lineWidth = 0.5;
              draw2d.stroke();
            }
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = c.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleTouch = (e: TouchEvent) => {
      const rect = c.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };
    const handleLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    resize();
    draw();
    window.addEventListener('resize', resize);
    c.addEventListener('mousemove', handleMouse);
    c.addEventListener('touchmove', handleTouch, { passive: true });
    c.addEventListener('mouseleave', handleLeave);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      c.removeEventListener('mousemove', handleMouse);
      c.removeEventListener('touchmove', handleTouch);
      c.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: 'block' }} />;
}

export default function Hero() {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)' }} />
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)' }} />
      </div>

      {/* Interactive dot grid */}
      <div className="absolute inset-0">
        <InteractiveCanvas />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left — text */}
        <div className="pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-700/60 border border-dark-500/80 backdrop-blur-sm pointer-events-auto"
          >
            <Briefcase className="w-4 h-4 text-cyan" />
            <span className="text-sm text-gray-300">Open to Remote Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Hi, I'm</span>
            <span className="gradient-text">Shaheer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-3 font-medium"
          >
            Senior Full-Stack Ecommerce Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 mb-8 max-w-lg"
          >
            Shopify App Development · WordPress/WooCommerce Plugin Development
            <br />
            <span className="text-gray-500 text-sm">7+ Years Experience · SolCoders</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border border-gray-600 hover:border-accent text-white font-semibold rounded-lg transition-all duration-300 hover:bg-dark-700/60 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex items-end justify-center"
        >
          <div className="relative">
            {/* Glow rings */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(6,182,212,0.10) 50%, transparent 75%)' }} />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' }} />

            {/* Portrait image */}
            <motion.img
              src={portraitImg}
              alt="Shaheer"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-[340px] xl:w-[400px] object-contain drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 60px rgba(59,130,246,0.25))' }}
            />

            {/* Floating badge — experience */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-16 -left-10 z-20 px-3 py-2 rounded-xl bg-dark-700/90 border border-dark-500 backdrop-blur-sm shadow-xl"
            >
              <p className="text-xs text-gray-400">Experience</p>
              <p className="text-base font-bold text-white">7+ Years</p>
            </motion.div>

            {/* Floating badge — published */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-32 -right-8 z-20 px-3 py-2 rounded-xl bg-dark-700/90 border border-accent/30 backdrop-blur-sm shadow-xl"
            >
              <p className="text-xs text-gray-400">Published</p>
              <p className="text-base font-bold gradient-text">5 Products</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 cursor-pointer"
          onClick={scrollToProjects}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
