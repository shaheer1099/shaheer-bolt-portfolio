import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            How I Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Development Process</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            A structured, repeatable approach that turns ideas into reliable, scalable digital products.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dark-600">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="px-0 md:px-10 first:pl-0 last:pr-0 py-10 md:py-0 flex flex-col justify-between gap-10"
            >
              {/* Large step number — clipped at top to give partial visibility */}
              <div className="overflow-hidden" style={{ height: '110px' }}>
                <span
                  className="font-black leading-none select-none gradient-text"
                  style={{
                    fontSize: '130px',
                    lineHeight: 1,
                    display: 'block',
                    marginTop: '-10px',
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Content */}
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
