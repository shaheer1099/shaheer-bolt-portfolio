import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Plug,
  CreditCard,
  Store,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import ParallaxBlob from './ParallaxBlob';

const services = [
  {
    icon: ShoppingCart,
    title: 'Shopify App Development',
    summary: 'React & Node.js apps for the Shopify App Store.',
    description:
      'Billing, GraphQL, webhooks, metafields, embedded architecture, and storefront integrations.',
    tags: ['React', 'GraphQL', 'App Store'],
    outcome: 'Embedded app delivery',
    meta: 'Service 01',
    accent: 'from-blue-500/20 to-blue-600/5',
    iconBg: 'bg-blue-500/15 border-blue-500/25',
    iconColor: 'text-blue-400',
  },
  {
    icon: Plug,
    title: 'WordPress / WooCommerce',
    summary: 'Custom plugins published on the marketplace.',
    description:
      'Custom checkout, pricing rules, shipping logic, and admin dashboards.',
    tags: ['WooCommerce', 'Plugins', 'Checkout'],
    outcome: 'Marketplace-ready plugins',
    meta: 'Service 02',
    accent: 'from-emerald-500/20 to-emerald-600/5',
    iconBg: 'bg-emerald-500/15 border-emerald-500/25',
    iconColor: 'text-emerald-400',
  },
  {
    icon: CreditCard,
    title: 'Payment Integrations',
    summary: 'Multi-gateway flows for global commerce.',
    description:
      'Stripe, Authorize.net, PayPal, and MyFatoorah with dual-gateway fallback and tokenization.',
    tags: ['Stripe', 'PayPal', 'MyFatoorah'],
    outcome: 'Reliable checkout flows',
    meta: 'Service 03',
    accent: 'from-rose-500/20 to-rose-600/5',
    iconBg: 'bg-rose-500/15 border-rose-500/25',
    iconColor: 'text-rose-400',
  },
  {
    icon: Store,
    title: 'Ecommerce Platforms',
    summary: 'Full B2B & B2C builds across regions.',
    description:
      'Custom pricing, inventory, and order management for US, UK, Germany, UAE, and GCC clients.',
    tags: ['B2B', 'B2C', 'Custom Logic'],
    outcome: 'Scalable commerce systems',
    meta: 'Service 04',
    accent: 'from-cyan-500/20 to-cyan-600/5',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25',
    iconColor: 'text-cyan-400',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 px-6 bg-dark-900 overflow-hidden">
      <ParallaxBlob className="top-10 -left-24 w-72 h-72 bg-accent/5" distance={90} />
      <ParallaxBlob className="bottom-0 -right-24 w-80 h-80 bg-cyan/5" distance={140} />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          description="End-to-end ecommerce development — from app architecture to marketplace publication."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group relative min-h-[278px] overflow-hidden rounded-lg border border-dark-500/70 bg-dark-800/80 p-4 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-dark-700/80 hover:shadow-[0_20px_56px_rgba(0,0,0,0.44)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-dark-500/70 bg-dark-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                    {item.meta}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-500/60 bg-dark-900/70">
                    <ArrowUpRight className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </div>

                <div className="mb-4 flex items-start gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border ${item.iconBg} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="text-base font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium leading-relaxed text-gray-300">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-dark-500/60 bg-dark-900/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-gray-400 transition-colors duration-300 group-hover:border-accent/25 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 border-t border-dark-500/50 pt-4 text-xs font-medium text-gray-300">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${item.iconColor}`} />
                  <span>{item.outcome}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
