import { motion } from 'framer-motion';
import {
  CheckCircle2,
  CreditCard,
  Plug,
  ShoppingCart,
  Store,
} from 'lucide-react';
import avatarDesk from '../assets/images/avatar4.png';

const services = [
  {
    icon: ShoppingCart,
    title: 'Shopify App Development',
    summary: 'Embedded apps built with React, Node.js, GraphQL, webhooks, and merchant-first workflows.',
    outcome: 'Embedded app delivery',
    meta: 'Service 01',
    accent: 'from-blue-500/20 to-blue-600/5',
    iconBg: 'bg-blue-500/15 border-blue-500/25',
    iconColor: 'text-blue-400',
  },
  {
    icon: Plug,
    title: 'WordPress / WooCommerce',
    summary: 'Custom plugins, checkout logic, B2B pricing, product tables, and marketplace-ready extensions.',
    outcome: 'Production plugin systems',
    meta: 'Service 02',
    accent: 'from-emerald-500/20 to-emerald-600/5',
    iconBg: 'bg-emerald-500/15 border-emerald-500/25',
    iconColor: 'text-emerald-400',
  },
  {
    icon: CreditCard,
    title: 'Payment Integrations',
    summary: 'Stripe, Authorize.net, PayPal, MyFatoorah, tokenized checkout, and resilient billing flows.',
    outcome: 'Reliable checkout flows',
    meta: 'Service 03',
    accent: 'from-rose-500/20 to-rose-600/5',
    iconBg: 'bg-rose-500/15 border-rose-500/25',
    iconColor: 'text-rose-400',
  },
  {
    icon: Store,
    title: 'Ecommerce Platforms',
    summary: 'Full B2B and B2C builds with inventory, pricing, ordering, dashboards, and regional logic.',
    outcome: 'Scalable commerce systems',
    meta: 'Service 04',
    accent: 'from-cyan-500/20 to-cyan-600/5',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25',
    iconColor: 'text-cyan-400',
  },
];

export default function ServicesPortfolio() {
  return (
    <section id="expertise" className="relative isolate overflow-hidden px-6 pb-24 pt-24">
      <div className="absolute left-1/2 top-28 -z-10 h-px w-[min(1120px,calc(100%-48px))] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,0.7fr)] lg:items-end"
        >
          <div>
            <span className="section-eyebrow mb-4 block text-left">Services</span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Commerce Systems Built From Strategy To Launch
            </h2>
            <div className="section-divider my-5" />
            <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
              I design and build the ecommerce machinery behind serious stores: apps, plugins, checkout systems, dashboards, and full-stack platforms that stay maintainable after launch.
            </p>
          </div>

          <div className="relative hidden min-h-[330px] lg:block">
            <div className="absolute bottom-0 right-6 h-[250px] w-[340px] rounded-2xl border border-white/8 bg-dark-800/35 backdrop-blur-sm" />
            <div className="absolute inset-x-0 bottom-10 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
            <img
              data-avatar-services-img
              src={avatarDesk}
              alt="Shaheer working at a desk"
              style={{ opacity: 'var(--services-avatar-opacity, 0)' }}
              className="avatar-crisp pointer-events-none absolute -bottom-3 -right-16 z-10 w-[470px] max-w-none drop-shadow-[0_34px_64px_rgba(0,0,0,0.52)] transition-opacity duration-200 xl:w-[520px]"
            />
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="hidden border-l border-accent/30 pl-5 lg:block"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500">Capability Map</div>
            <div className="mt-6 space-y-5">
              {['Architecture', 'Integrations', 'Publishing', 'Scale'].map((label, index) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-dark-500 bg-dark-800 text-[10px] font-bold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </motion.aside>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="group relative min-h-[268px] overflow-hidden rounded-lg border border-dark-500/70 bg-dark-900/80 p-4 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-dark-800/90 hover:shadow-[0_22px_64px_rgba(0,0,0,0.48)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-75 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gray-600">{item.meta.replace('Service ', '')}</span>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg border ${item.iconBg}`}>
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.summary}</p>
                  <div className="mt-auto flex items-center gap-2 border-t border-dark-500/60 pt-4 text-xs font-medium text-gray-300">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 ${item.iconColor}`} />
                    <span>{item.outcome}</span>
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
