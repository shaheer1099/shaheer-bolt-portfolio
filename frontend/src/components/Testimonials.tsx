import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const stories = [
  {
    title: 'Looking for shopify App developer to completely develop app using latest technology',
    period: 'Feb 23, 2026 - Mar 5, 2026',
    rating: '5.0',
    quote:
      'Shaheer is very professional and good communicator. I will definitely hire him again for future work',
    endorsements: ['Committed to Quality', 'Solution Oriented', 'Clear Communicator', 'Professional'],
    impact: 'Shopify app delivery',
  },
  {
    title: 'Quick WordPress Fixes for Event Manager Plugin',
    period: 'Mar 10, 2024 - Mar 16, 2024',
    rating: '5.0',
    quote:
      'It was a pleasure to work with Shaheer. He understood the error and fixed it within the given time. Will definitely hire him again.',
    endorsements: ['Collaborative', 'Solution Oriented'],
    impact: 'Fast WordPress fix',
  },
  {
    title: 'WordPress Plugin Customization',
    period: 'Mar 8, 2024 - Mar 11, 2024',
    rating: '5.0',
    quote:
      'Working with Shaheer on my project was a great experience. Despite being new to Upwork, his professionalism and skill were impressive. He communicated clearly and was very responsive, delivering high-quality work on time. I highly recommend Shaheer for anyone looking for a skilled and dedicated freelancer. Looking forward to our next project together.',
    endorsements: ['Professional', 'Clear Communicator', 'Reliable', 'Committed to Quality'],
    impact: 'Plugin customization',
  },
];

function UpworkLogo() {
  return (
    <div className="inline-flex items-center rounded-full border border-[#14a800]/25 bg-[#14a800]/10 px-3 py-1.5">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Upwork_Logo.svg/250px-Upwork_Logo.svg.png"
        alt="Upwork"
        className="h-5 w-auto"
      />
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const active = stories[current];
  const prev = () => setCurrent((index) => (index - 1 + stories.length) % stories.length);
  const next = () => setCurrent((index) => (index + 1) % stories.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % stories.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative isolate overflow-hidden px-6 py-24">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <div>
            <span className="section-eyebrow mb-4 block text-left">Client Stories</span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Upwork Clients, Real Feedback
            </h2>
            <div className="section-divider my-5" />
            <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
              Recent client reviews highlighting communication, reliability, and practical delivery across Shopify and WordPress work.
            </p>
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
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <UpworkLogo />
              <Quote className="h-10 w-10 text-accent/70" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-300">
                  <span className="flex items-center gap-1 text-[#ff5f1f]">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                  <span className="text-lg font-bold text-white">{active.rating}</span>
                  <span className="h-5 w-px bg-white/18" />
                  <span>{active.period}</span>
                </div>
                <p className="max-w-4xl text-xl font-bold italic leading-relaxed text-white md:text-2xl">"{active.quote}"</p>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-dark-500/70 pt-6">
                  <div>
                    <p className="text-lg font-bold text-white">{active.title}</p>
                    <p className="mt-1 text-sm text-gray-500">Endorsed by client</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {active.endorsements.map((endorsement) => (
                        <span key={endorsement} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-gray-200">
                          {endorsement}
                        </span>
                      ))}
                    </div>
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
                    <p className="mt-1 text-xs text-gray-500">{story.period}</p>
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
