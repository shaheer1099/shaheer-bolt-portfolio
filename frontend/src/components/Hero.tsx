import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import heroPortrait from '../assets/images/hero-designer-coder-natural.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
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

        <div className="grid min-h-0 flex-1 items-center pb-3 pt-0 lg:pb-4">
          <div className="grid items-end [grid-area:1/1]">
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.14 }}
              className="z-20 mx-auto flex h-[min(54vh,610px)] min-h-[380px] w-[min(70vw,700px)] translate-y-12 items-end justify-center lg:h-[min(62vh,680px)] lg:min-h-[460px] [grid-area:1/1]"
            >
              <div
                data-avatar-hero-stage
                className="hidden h-full w-full items-end justify-center overflow-visible lg:flex"
                aria-hidden
              >
                <img
                  data-avatar-hero-img
                  src={heroPortrait}
                  alt=""
                  decoding="async"
                  fetchPriority="high"
                  style={{ opacity: 'var(--hero-avatar-opacity, 1)' }}
                  className="avatar-crisp h-[clamp(470px,64vh,720px)] w-auto max-w-none object-contain object-bottom"
                />
              </div>
              <img
                src={heroPortrait}
                alt="Shaheer designer and coder portrait"
                decoding="async"
                fetchPriority="high"
                style={{ opacity: 'var(--hero-avatar-opacity, 1)' }}
                className="avatar-crisp h-[min(520px,64vh)] w-auto max-w-none object-contain object-bottom lg:hidden"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="pointer-events-none z-40 grid grid-cols-1 select-none gap-y-5 self-center [grid-area:1/1] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-y-3"
            >
              <h1 className="contents">
                <span
                  className="block pl-[max(1rem,3.6vw)] text-[clamp(3.8rem,9.2vw,10.4rem)] font-extrabold leading-[0.84] tracking-[-0.065em] text-white lg:[grid-column:1] lg:[grid-row:1]"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(241,245,249,0.95), 0 2px 0 rgba(203,213,225,0.9), 0 3px 0 rgba(148,163,184,0.74), 0 5px 0 rgba(71,85,105,0.68), 0 18px 34px rgba(0,0,0,0.56)',
                  }}
                >
                  Full stack
                </span>
                <span
                  className="block pr-[max(1rem,2.8vw)] text-right text-[clamp(3.8rem,9.2vw,10.4rem)] font-extrabold leading-[0.84] tracking-[-0.065em] text-white lg:[grid-column:2] lg:[grid-row:2]"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(241,245,249,0.95), 0 2px 0 rgba(203,213,225,0.9), 0 3px 0 rgba(148,163,184,0.74), 0 5px 0 rgba(71,85,105,0.68), 0 18px 34px rgba(0,0,0,0.56)',
                  }}
                >
                  Developer
                </span>
              </h1>

              <div className="hidden max-w-[390px] self-end justify-self-end pr-[max(1rem,2.8vw)] text-right text-sm text-gray-400 lg:block [grid-column:2] [grid-row:1]">
                <p className="font-semibold italic text-gray-200">WordPress Plugins</p>
                <p className="mt-1 leading-6">Checkout systems and marketplace extensions.</p>
              </div>

              <div className="hidden max-w-[360px] self-center justify-self-start pl-[max(1rem,3.6vw)] text-sm text-gray-400 lg:block [grid-column:1] [grid-row:2]">
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
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-24 left-1/2 z-50 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-gray-400 backdrop-blur transition hover:border-accent/40 hover:text-white xl:flex"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
