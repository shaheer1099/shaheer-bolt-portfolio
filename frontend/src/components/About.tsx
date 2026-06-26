import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { Calendar, Briefcase, Store, Globe } from 'lucide-react';
import SectionHeading from './SectionHeading';
import laptopPose from '../assets/images/avatar-2.png';

const stats = [
  { label: 'Years Experience', value: 7, suffix: '+', icon: Calendar },
  { label: 'Projects Delivered', value: 50, suffix: '+', icon: Briefcase },
  { label: 'Marketplaces Published', value: 4, suffix: '', icon: Store },
  { label: 'Countries Served', value: 10, suffix: '+', icon: Globe },
];

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useAnimatedCounter(stat.value, 2000, isVisible);

  return (
    <div className="glass-card flex items-center gap-4 p-4 rounded-xl hover-lift">
      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
        <stat.icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-bold text-white">
          {count}
          {stat.suffix}
        </div>
        <div className="text-sm text-gray-400">{stat.label}</div>
      </div>
    </div>
  );
};

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section id="about" className="relative py-24 px-6 bg-dark-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Building Ecommerce That Scales"
          description="From Shopify apps to WooCommerce plugins — I help businesses ship products that perform."
        />

        <div ref={ref} className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* Text — animates in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:pr-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Senior full-stack ecommerce developer with{' '}
              <span className="text-white font-semibold">7+ years of experience</span> building
              custom Shopify apps and WordPress plugins. I work with startups and established
              businesses across the <span className="text-accent">US, UK, Europe</span>, and the{' '}
              <span className="text-accent">MENA region</span> to build ecommerce tools that are
              fast, maintainable, and actually solve problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I work at <span className="text-cyan font-semibold">SolCoders</span> as a senior full-stack developer, where I have published
              apps on the Shopify App Store and plugins on the WooCommerce Marketplace.
            </p>
            <div className="mt-6 flex items-center gap-3 text-gray-400">
              <span className="px-3 py-1.5 rounded-full glass text-sm">Available Remotely</span>
              <span className="text-sm">Pakistan (Full Time)</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StatCard stat={stat} isVisible={isVisible} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — landing pedestal for the traveling avatar (desktop).
              On smaller screens it shows the seated pose statically. */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            data-avatar-about-stage
            className="relative min-h-[420px] lg:min-h-[520px] flex items-end justify-center"
          >
            {/* Soft platform glow */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-8 w-72 rounded-[100%] bg-black/40 blur-xl" aria-hidden />

            {/* Static seated pose is the final stopped state. The moving avatar
                fades into this as About arrives. */}
            <img
              src={laptopPose}
              alt="Shaheer working on a laptop"
              className="relative z-10 w-[320px] sm:w-[380px] lg:w-[460px] max-w-full object-contain lg:opacity-[var(--about-avatar-opacity,0)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
