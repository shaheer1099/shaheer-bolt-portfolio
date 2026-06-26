import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Coming Soon',
    role: 'Client',
    quote:
      'Testimonials from satisfied clients will be added here. Stay tuned for feedback from businesses across the US, UK, Europe, and MENA region.',
    avatar: null,
  },
  {
    name: 'Coming Soon',
    role: 'Client',
    quote:
      'More client reviews will appear here soon. Real projects, real results — clients share their experience working with me.',
    avatar: null,
  },
  {
    name: 'Coming Soon',
    role: 'Client',
    quote:
      'Outstanding work on our platform. The attention to detail and technical expertise brought our vision to life flawlessly.',
    avatar: null,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(i => (i + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 px-6 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Real feedback from businesses across the US, UK, Europe, and MENA region.
          </p>
        </motion.div>

        {/* Testimonial body */}
        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-10"
            >
              {/* Quote side */}
              <div className="flex-1">
                {/* Large quotation mark */}
                <div className="font-black leading-none select-none mb-4 gradient-text" style={{ fontSize: '96px', lineHeight: 0.8, opacity: 0.25 }}>
                  "
                </div>
                <p className="text-white font-bold text-xl md:text-2xl leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Avatar + name side */}
              <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                <div className="w-24 h-24 rounded-lg bg-dark-600 border border-dark-500 flex items-center justify-center overflow-hidden">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl text-dark-400">?</span>
                  )}
                </div>
                <div className="md:text-right">
                  <p className="text-white font-bold text-base">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3 mt-12">
          <button
            onClick={prev}
            className="w-11 h-11 flex items-center justify-center rounded bg-accent hover:bg-accent-dark transition-colors text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 flex items-center justify-center rounded bg-accent hover:bg-accent-dark transition-colors text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <span className="text-gray-600 text-sm ml-2">
            {current + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
}
