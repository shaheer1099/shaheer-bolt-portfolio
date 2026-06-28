import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  ShoppingCart,
  Zap,
  CreditCard,
  GitBranch,
  Layers,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { BrandLogo } from './BrandLogo';
import techAvatar from '../assets/images/avatar5.png';

const categories = [
  {
    icon: Code2,
    label: 'Frontend',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    wide: false,
  },
  {
    icon: Server,
    label: 'Backend',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    skills: ['Node.js', 'PHP', 'Laravel', 'Express'],
    wide: false,
  },
  {
    icon: Database,
    label: 'Databases',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    skills: ['MySQL', 'PostgreSQL', 'Redis'],
    wide: false,
  },
  {
    icon: ShoppingCart,
    label: 'Ecommerce',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    skills: ['Shopify', 'WooCommerce'],
    wide: true,
  },
  {
    icon: Zap,
    label: 'APIs & Integrations',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    skills: ['REST', 'GraphQL', 'Shopify GraphQL Admin API', 'Webhooks'],
    wide: false,
  },
  {
    icon: CreditCard,
    label: 'Payments',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    skills: ['Stripe', 'Authorize.net', 'PayPal', 'MyFatoorah'],
    wide: false,
  },
  {
    icon: GitBranch,
    label: 'DevOps & Tools',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    skills: ['Git', 'cPanel', 'BullMQ', 'Redis'],
    wide: false,
  },
  {
    icon: Layers,
    label: 'Other',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    skills: ['JWT', 'OAuth', 'Sequelize', 'WordPress', 'Adobe Sign', 'Zoom SDK'],
    wide: true,
  },
];

const bubbles = categories.flatMap((category) =>
  category.skills.slice(0, category.wide ? 3 : 2).map((skill) => ({
    skill,
    icon: category.icon,
    color: category.color,
    bg: category.bg,
    border: category.border,
  })),
);

const bubblePositions = [
  'left-[0%] top-[2%]',
  'left-[18%] top-[13%]',
  'left-[0%] top-[25%]',
  'left-[19%] top-[36%]',
  'left-[0%] top-[48%]',
  'left-[18%] top-[59%]',
  'left-[2%] top-[71%]',
  'left-[17%] top-[82%]',
  'right-[0%] top-[3%]',
  'right-[18%] top-[14%]',
  'right-[0%] top-[26%]',
  'right-[18%] top-[37%]',
  'right-[0%] top-[49%]',
  'right-[18%] top-[60%]',
  'right-[0%] top-[72%]',
  'right-[18%] top-[83%]',
  'right-[2%] top-[92%]',
];

export default function Skills() {
  return (
    <section id="tech-stack" className="relative min-h-screen overflow-hidden bg-dark-900 px-6 py-16 md:h-screen md:max-h-screen md:py-12">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col">
        <SectionHeading
          eyebrow="Technologies"
          title="Tech Stack"
          description="A modern, full-stack toolkit built for shipping production-grade ecommerce and SaaS products."
          className="mb-8 md:mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto mt-8 min-h-[640px] w-full max-w-5xl flex-1 md:mt-2 md:min-h-0"
        >
          <div
            data-avatar-tech-stage
            className="absolute inset-x-0 top-0 flex items-center justify-center md:inset-0"
          >
            <div className="relative flex h-[clamp(250px,48vw,360px)] w-[clamp(250px,48vw,360px)] items-center justify-center rounded-full border border-accent/10 bg-dark-800/20 md:h-[clamp(280px,42vh,400px)] md:w-[clamp(280px,42vh,400px)]">
              <div className="absolute inset-8 rounded-full border border-dashed border-accent/15" />
              <div className="absolute inset-20 rounded-full bg-accent/10 blur-3xl" />
              <img
                data-avatar-tech-img
                src={techAvatar}
                alt="Shaheer presenting his tech stack"
                decoding="async"
                className="avatar-crisp relative z-10 h-[clamp(210px,42vw,310px)] w-auto max-w-none object-contain object-center md:h-[clamp(230px,36vh,340px)] md:opacity-[var(--tech-avatar-opacity,0)]"
              />
            </div>
          </div>

          <div className="absolute inset-x-0 top-[360px] grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden">
            {categories.flatMap((category) => category.skills).slice(0, 12).map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                title={skill}
                className="flex min-h-[78px] items-center justify-center rounded-2xl border border-white/10 bg-dark-800/72 p-3 backdrop-blur-xl"
              >
                <BrandLogo
                  name={skill}
                  showLabel
                  className="w-full justify-start [&>span:first-child]:h-11 [&>span:first-child]:w-11 [&_img]:h-7 [&_img]:w-7 [&>span:last-child]:text-xs"
                />
              </motion.div>
            ))}
          </div>

          {bubbles.map((bubble, index) => (
            <motion.div
              key={`${bubble.skill}-${index}`}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
              transition={{
                opacity: { duration: 0.45, delay: index * 0.04 },
                scale: { duration: 0.45, delay: index * 0.04 },
                y: {
                  duration: 4 + (index % 4) * 0.45,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.15,
                },
              }}
              viewport={{ once: true }}
              className={`absolute ${bubblePositions[index]} z-20 hidden md:block`}
            >
              <div
                title={bubble.skill}
                className={`group flex min-w-[184px] items-center justify-start rounded-full border ${bubble.border} ${bubble.bg} px-3 py-2 shadow-card backdrop-blur-xl hover:border-accent/50 hover:bg-dark-700/70`}
              >
                <BrandLogo
                  name={bubble.skill}
                  showLabel
                  className="[&>span:first-child]:h-9 [&>span:first-child]:w-9 [&>span:first-child]:rounded-full [&_img]:h-6 [&_img]:w-6 [&>span:last-child]:whitespace-nowrap [&>span:last-child]:text-xs"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
