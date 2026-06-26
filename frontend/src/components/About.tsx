import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { Calendar, Briefcase, Store, Globe } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 7, suffix: '+', icon: Calendar },
  { label: 'Projects Delivered', value: 50, suffix: '+', icon: Briefcase },
  { label: 'Marketplaces Published', value: 4, suffix: '', icon: Store },
  { label: 'Countries Served', value: 10, suffix: '+', icon: Globe },
];

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useAnimatedCounter(stat.value, 2000, isVisible);

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-dark-700/50 border border-dark-500">
      <div className="p-3 rounded-lg bg-accent/10">
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
    <section id="about" className="relative py-24 px-6 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
              <span className="px-3 py-1 rounded-full bg-dark-600 text-sm">
                Available Remotely
              </span>
              <span className="text-sm">Pakistan (Full Time)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
