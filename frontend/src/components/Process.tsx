import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const steps = [
  {
    num: '01',
    title: 'Plan & Architect',
    desc: 'Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints.',
  },
  {
    num: '02',
    title: 'Build & Develop',
    desc: 'Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component — UI or API — is maintainable.',
  },
  {
    num: '03',
    title: 'Launch & Support',
    desc: 'I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="How I Work"
          title="My Development Process"
          description="A structured, repeatable approach that turns ideas into reliable, scalable digital products."
        />

        <div className="grid md:grid-cols-3 rounded-2xl overflow-hidden glass-card">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`px-8 md:px-10 py-10 flex flex-col justify-between gap-10 ${
                i < steps.length - 1 ? 'md:border-r border-dark-500/50' : ''
              }`}
            >
              <div className="overflow-hidden" style={{ height: '110px' }}>
                <span
                  className="font-black leading-none select-none gradient-text"
                  style={{ fontSize: '130px', lineHeight: 1, display: 'block', marginTop: '-10px' }}
                >
                  {step.num}
                </span>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
