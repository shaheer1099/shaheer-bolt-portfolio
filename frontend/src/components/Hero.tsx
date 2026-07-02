import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mouse, ArrowUpRight } from 'lucide-react';
import heroPortrait from '../assets/images/hero-designer-coder-full-effect.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex h-screen flex-col overflow-hidden bg-[#050608] px-6 pt-20 text-white"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_50%_18%,rgba(59,130,246,0.14),transparent_38%),radial-gradient(ellipse_at_50%_78%,rgba(6,182,212,0.09),transparent_42%),linear-gradient(180deg,#050608_0%,#070a10_54%,#06080d_100%)]" />
      <div
        className="absolute inset-0 -z-30 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div className="absolute -left-28 top-[-9rem] -z-20 h-[620px] w-[620px] rounded-full border border-white/[0.08]" />
      <div className="absolute left-[22%] top-[-5rem] -z-20 hidden h-[520px] w-[520px] rounded-full border border-white/[0.045] lg:block" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-56 bg-gradient-to-b from-transparent via-[#06080d]/75 to-[#06080d]" />

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="pt-2 lg:pt-4"
        >
          <div className="flex items-center gap-3 lg:pl-[6vw]">
            <span className="h-4 w-4 rounded-full bg-white/55" />
            <span className="h-4 w-4 rounded-full bg-white" />
            <span className="h-4 w-4 rounded-full bg-white/10" />
            <span className="ml-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Ecommerce product engineering
            </span>
          </div>
        </motion.div>

        <div className="grid min-h-0 flex-1 items-end pb-0 pt-0">
          <div className="grid items-end [grid-area:1/1]">
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.14 }}
              className="z-30 -mx-6 flex h-[min(70vh,760px)] min-h-[430px] w-screen items-end justify-center md:mx-auto md:h-[min(78vh,840px)] md:min-h-[520px] md:w-[min(78vw,780px)] [grid-area:1/1]"
            >
              <div
                data-avatar-hero-stage
                className="hidden h-full w-full items-end justify-center overflow-visible md:flex"
                aria-hidden
              >
                <img
                  data-avatar-hero-img
                  src={heroPortrait}
                  alt=""
                  decoding="async"
                  fetchPriority="high"
                  style={{ opacity: 'var(--hero-avatar-opacity, 1)' }}
                  className="avatar-crisp h-[clamp(560px,78vh,860px)] w-auto max-w-none object-contain object-bottom"
                />
              </div>
              <motion.img
                src={heroPortrait}
                alt="Shaheer designer and coder portrait"
                decoding="async"
                fetchPriority="high"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="avatar-crisp w-screen max-w-none object-contain object-bottom md:hidden"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="pointer-events-none z-20 grid h-full select-none [grid-area:1/1]"
              style={{
                gridTemplateRows:
                  'minmax(1rem,0.58fr) auto clamp(7.5rem,16vh,11rem) auto minmax(1rem,0.52fr)',
              }}
            >
              <h1 className="row-start-2">
                <span
                  className="block whitespace-nowrap pl-[max(1rem,3.6vw)] text-[clamp(3.4rem,15vw,6rem)] font-extrabold leading-[0.84] tracking-[-0.065em] text-white md:text-[clamp(4.2rem,8vw,9.2rem)]"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(241,245,249,0.95), 0 2px 0 rgba(203,213,225,0.9), 0 3px 0 rgba(148,163,184,0.74), 0 5px 0 rgba(71,85,105,0.68), 0 18px 34px rgba(0,0,0,0.56)',
                  }}
                >
                  Full stack
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="pointer-events-none z-50 grid h-full select-none [grid-area:1/1]"
              style={{
                gridTemplateRows:
                  'minmax(1rem,0.58fr) auto clamp(7.5rem,16vh,11rem) auto minmax(1rem,0.52fr)',
              }}
            >
              <h1 className="row-start-4 translate-y-3 lg:translate-y-5">
                <span
                  className="block whitespace-nowrap pr-[max(1rem,3.6vw)] text-right text-[clamp(3.4rem,15vw,6rem)] font-extrabold leading-[0.84] tracking-[-0.065em] text-white md:text-[clamp(4.2rem,7.8vw,9rem)]"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(241,245,249,0.95), 0 2px 0 rgba(203,213,225,0.9), 0 3px 0 rgba(148,163,184,0.74), 0 5px 0 rgba(71,85,105,0.68), 0 18px 34px rgba(0,0,0,0.56)',
                  }}
                >
                  Developer
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
              className="pointer-events-none z-50 hidden h-full select-none [grid-area:1/1] lg:block"
            >
              <div className="absolute right-[max(1rem,3.6vw)] top-[50%] max-w-[390px] -translate-y-1/2 text-right text-sm text-gray-400 xl:top-[51%] 2xl:top-[50%]">
                <p className="font-semibold italic text-gray-200">WordPress Plugins</p>
                <p className="mt-1 leading-6">Checkout systems and marketplace extensions.</p>
              </div>

              <div className="absolute left-[max(1rem,3.6vw)] top-[70%] max-w-[360px] -translate-y-1/2 text-sm text-gray-400 xl:top-[72%] 2xl:top-[70%]">
                <p className="font-semibold italic text-gray-200">Shopify Apps</p>
                <p className="mt-1 leading-6">Embedded apps, merchant workflows, and admin dashboards.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.24 }}
        className="hidden"
      >
        <div className="hidden items-center gap-3 sm:flex">
          <span className="h-3 w-3 rounded-full bg-white" />
          <span className="h-3 w-3 rounded-full bg-white/45" />
          <span className="h-3 w-3 rounded-full bg-white/12" />
          <span className="ml-2 font-medium text-gray-300">
            7+ years / 50+ builds / remote-first ecommerce engineering
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-200"
          >
            View Work
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.035] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
          >
            Contact
          </button>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { delay: 1.1, duration: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-24 left-1/2 z-50 hidden h-12 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/45 bg-blue-500/[0.08] text-blue-500 backdrop-blur transition hover:border-blue-400/70 hover:bg-blue-500/[0.14] xl:flex"
        aria-label="Scroll to about"
      >
        <Mouse className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
