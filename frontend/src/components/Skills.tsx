import { motion } from 'framer-motion';
import { Code2, Server, Database, ShoppingCart, Zap, CreditCard, GitBranch, Layers } from 'lucide-react';

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
    skills: ['Shopify', 'WooCommerce', 'Shopify App Store', 'WooCommerce Marketplace'],
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

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            A modern, full-stack toolkit built for shipping production-grade ecommerce and SaaS products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className={`group relative p-5 rounded-2xl bg-dark-800 border border-dark-500 hover:border-dark-400 transition-all duration-300 ${
                cat.wide ? 'col-span-2' : 'col-span-1'
              }`}
            >
              {/* Subtle gradient hover */}
              <div className={`absolute inset-0 rounded-2xl ${cat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-1.5 rounded-lg ${cat.bg} ${cat.border} border`}>
                    <cat.icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${cat.color}`}>
                    {cat.label}
                  </span>
                </div>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-lg bg-dark-700 text-gray-300 border border-dark-500 group-hover:border-dark-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '7+', label: 'Years Experience' },
            { value: '30+', label: 'Technologies Used' },
            { value: '2', label: 'Marketplace Publisher' },
            { value: '50+', label: 'Projects Delivered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-5 px-4 rounded-xl bg-dark-800 border border-dark-500">
              <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
