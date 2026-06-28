import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, Compass, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Plan & Architect',
    desc: 'Clarify the business goal, user flow, data model, third-party systems, and delivery risks before development starts.',
    icon: Compass,
    deliverables: ['Scope map', 'Technical plan', 'Milestones'],
  },
  {
    num: '02',
    title: 'Build & Develop',
    desc: 'Build the frontend, backend, integrations, and admin workflows with maintainable code and frequent visible progress.',
    icon: Code2,
    deliverables: ['UI systems', 'APIs', 'Integrations'],
  },
  {
    num: '03',
    title: 'Launch & Support',
    desc: 'Ship carefully, verify production behavior, and keep improving the product after real users start depending on it.',
    icon: Rocket,
    deliverables: ['QA pass', 'Deployment', 'Iteration'],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative isolate overflow-hidden px-6 py-24">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(340px,0.45fr)] lg:items-end"
        >
          <div>
            <span className="section-eyebrow mb-4 block text-left">How I Work</span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Clear Process, Less Guesswork
            </h2>
            <div className="section-divider my-5" />
            <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
              A practical delivery system for ecommerce products: define the work, build in visible increments, and launch with production behavior verified.
            </p>
          </div>

          <div className="rounded-xl border border-dark-500/70 bg-dark-900/70 p-5 backdrop-blur-xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">Delivery Principle</div>
            <p className="mt-3 text-lg font-semibold leading-snug text-white">
              Every phase should reduce risk, improve clarity, or move the product closer to users.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-dark-500/70 bg-dark-900/76 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-dark-800/82"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gray-600">{step.num}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                  <step.icon className="h-5 w-5 text-accent" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{step.desc}</p>

              <div className="mt-8 space-y-3 border-t border-dark-500/70 pt-5">
                {step.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              {index < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-dark-500 bg-dark-900 text-gray-600 md:flex">
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
