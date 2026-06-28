import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Code2, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'SolCoders',
    duration: 'Jan 2024 - Present',
    tenure: '2 yrs 6 mos',
    location: 'On-site',
    title: 'Senior Software Engineer | Shopify App & WordPress Plugin Specialist',
    type: 'Full-time',
    summary:
      'Building custom ecommerce solutions across Shopify, WordPress, and BigCommerce, with a strong focus on Shopify public apps, custom integrations, and scalable full-stack platforms.',
    points: [
      'Development and publication of Shopify public apps approved on the Shopify App Marketplace',
      'Custom Shopify apps for automation and merchant-specific workflows',
      'WordPress payment gateway integrations and product customization tools',
      'Full-stack development using React, Next.js, Node.js, MongoDB, and Laravel',
      'Leadership on internal platforms including HRM and enterprise systems',
    ],
    skills: 'Shopify App Development, Shopify Public App Development, WordPress Plugins',
    accent: 'from-red-500/20 to-cyan-500/10',
    logo: 'SC',
  },
  {
    company: 'Codup',
    duration: 'Jan 2023 - Nov 2023',
    tenure: '11 mos',
    location: '',
    title: 'Software Engineer II | Ecommerce & WordPress Solutions',
    type: 'Full-time',
    summary:
      'Worked on B2B and B2C ecommerce solutions for WordPress, focusing on custom business logic and scalable frontend/backend implementations.',
    points: [
      'Built custom payment methods, shipping logic, role-based pricing, and permissions',
      'Implemented split-order functionality based on real-time stock availability',
      'Led complete frontend design for B2B platforms',
      'Delivered end-to-end features using PHP, JavaScript, React, and modern UI practices',
    ],
    skills: 'Skill Development, Web Design, WordPress, PHP, React',
    accent: 'from-lime-500/20 to-emerald-500/10',
    logo: '</>',
  },
  {
    company: 'Codup',
    duration: 'Feb 2020 - Dec 2022',
    tenure: '2 yrs 11 mos',
    location: 'Karachi, Sindh, Pakistan',
    title: 'Software Engineer | Ecommerce & Platform Development',
    type: 'Full-time',
    summary:
      'Contributed to the development of custom ecommerce products and platforms across B2B and B2C use cases.',
    points: [
      'Developed reusable frontend and backend components',
      'Worked on business requirement analysis, debugging, and performance improvements',
      'Collaborated closely with product and design teams to deliver production-ready features',
    ],
    skills: 'MongoDB, Redux.js, Ecommerce Systems, Backend Logic',
    accent: 'from-blue-500/20 to-cyan-500/10',
    logo: 'C',
  },
  {
    company: 'Codup',
    duration: 'Aug 2019 - Feb 2020',
    tenure: '7 mos',
    location: 'Karachi, Sindh, Pakistan',
    title: 'Software Engineer | Backend & Ecommerce Systems',
    type: 'Part-time',
    summary:
      'Worked on B2B and B2C product development with a focus on backend logic, APIs, and application workflows.',
    points: [
      'Worked on B2B and B2C product development',
      'Contributed to backend logic, APIs, and application workflows',
    ],
    skills: 'Backend Development, APIs, Ecommerce Workflows',
    accent: 'from-orange-500/20 to-rose-500/10',
    logo: 'BE',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative isolate overflow-hidden px-6 py-24">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <span className="section-eyebrow mb-4 block text-left">Work Experience</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Ecommerce Engineering In Production Teams
          </h2>
          <div className="section-divider my-5" />
          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
            A focused timeline of product engineering roles across Shopify apps, WordPress plugins,
            B2B ecommerce systems, and full-stack platform development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-10 left-6 top-6 hidden w-px bg-gradient-to-b from-accent/50 via-dark-500 to-transparent md:block" />

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="relative grid gap-4 rounded-2xl border border-white/10 bg-dark-900/72 p-5 backdrop-blur-xl md:grid-cols-[64px_minmax(0,1fr)] md:p-6"
              >
                <div className="relative">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${item.accent} text-sm font-black text-white shadow-card`}
                  >
                    {item.logo}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-bold text-accent">{item.company}</p>
                      <h3 className="mt-1 text-xl font-bold leading-tight text-white">{item.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-400">
                        <span>{item.type}</span>
                        <span>{item.duration}</span>
                        <span>{item.tenure}</span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <Briefcase className="hidden h-5 w-5 text-gray-600 lg:block" />
                  </div>

                  <p className="mt-5 max-w-4xl text-sm leading-relaxed text-gray-300 md:text-base">
                    {item.summary}
                  </p>

                  <div className="mt-5 grid gap-3 lg:grid-cols-2">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm leading-relaxed text-gray-400">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-gray-300">
                    <Code2 className="h-4 w-4 shrink-0 text-accent" />
                    <span className="truncate">{item.skills}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
