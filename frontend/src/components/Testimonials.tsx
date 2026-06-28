import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const stories = [
  {
    title: 'Marketplace plugin delivery',
    role: 'WooCommerce Product Team',
    quote:
      'Built marketplace-ready extensions with the structure, documentation, and stability needed for real merchant installs.',
    impact: 'Published product workflow',
  },
  {
    title: 'Shopify app launch support',
    role: 'Ecommerce Founder',
    quote:
      'Moved from an idea to a working app experience with clear technical decisions and focused implementation cycles.',
    impact: 'Storefront-ready app UX',
  },
  {
    title: 'Custom platform build',
    role: 'SaaS Operator',
    quote:
      'Connected product, admin, payments, and operational workflows into a maintainable platform instead of scattered tools.',
    impact: 'End-to-end system delivery',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const active = stories[current];
  const prev = () => setCurrent((index) => (index - 1 + stories.length) % stories.length);
  const next = () => setCurrent((index) => (index + 1) % stories.length);

  return (
    <section id="testimonials" className="relative isolate overflow-hidden px-6 py-24">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(300px,0.38fr)] lg:items-end"
        >
          <div>
            <span className="section-eyebrow mb-4 block text-left">Client Stories</span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Built For Real Product Pressure
            </h2>
            <div className="section-divider my-5" />
            <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
              A portfolio should show more than screens. These stories focus on the kind of delivery outcomes clients usually need: shipping, stability, and maintainable growth.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-dark-500/70 bg-dark-900/70 backdrop-blur-xl">
            {['Apps', 'Plugins', 'Platforms'].map((label) => (
              <div key={label} className="border-r border-dark-500/70 px-4 py-4 text-center last:border-r-0">
                <div className="text-lg font-bold text-white">{label}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">Delivered</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.74fr)_minmax(280px,0.34fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-xl border border-dark-500/70 bg-dark-900/78 p-6 md:p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Quote className="mb-8 h-10 w-10 text-accent/70" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <p className="max-w-4xl text-2xl font-bold leading-relaxed text-white md:text-3xl">{active.quote}</p>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-dark-500/70 pt-6">
                  <div>
                    <p className="text-lg font-bold text-white">{active.title}</p>
                    <p className="mt-1 text-sm text-gray-500">{active.role}</p>
                  </div>
                  <div className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    {active.impact}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="grid gap-4">
            {stories.map((story, index) => (
              <button
                key={story.title}
                onClick={() => setCurrent(index)}
                className={`rounded-xl border p-5 text-left transition-all duration-300 ${
                  index === current
                    ? 'border-accent/35 bg-accent/10'
                    : 'border-dark-500/70 bg-dark-900/60 hover:border-accent/25 hover:bg-dark-800/70'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">{story.title}</p>
                    <p className="mt-1 text-xs text-gray-500">{story.role}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-600" />
                </div>
              </button>
            ))}
            <div className="flex gap-3 pt-2">
              <button onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-lg border border-dark-500 bg-dark-900 text-gray-300 transition-colors hover:border-accent/40 hover:text-white" aria-label="Previous story">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="flex h-11 w-11 items-center justify-center rounded-lg border border-dark-500 bg-dark-900 text-gray-300 transition-colors hover:border-accent/40 hover:text-white" aria-label="Next story">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
