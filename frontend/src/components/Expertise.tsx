import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Plug,
  CreditCard,
  Store,
  Server,
  LayoutDashboard,
} from 'lucide-react';

const expertise = [
  {
    icon: ShoppingCart,
    title: 'Shopify App Development',
    description:
      'Custom Shopify apps built with React and Node.js. Published on the Shopify App Store. Covers billing, GraphQL, webhooks, metafields, embedded app architecture, and storefront integrations.',
  },
  {
    icon: Plug,
    title: 'WordPress / WooCommerce Plugins',
    description:
      'Custom plugins and WooCommerce extensions published on the marketplace. Covers custom checkout, pricing rules, shipping logic, and admin dashboards.',
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integrations',
    description:
      'Stripe, Authorize.net, PayPal, and MyFatoorah. Dual-gateway fallback systems, dual tokenization, region-specific payment flows.',
  },
  {
    icon: Store,
    title: 'Ecommerce Platform Development',
    description:
      'Full B2B and B2C ecommerce builds for clients across the US, UK, Germany, UAE, and GCC. Custom pricing, inventory, and order management logic.',
  },
  {
    icon: Server,
    title: 'API and Backend Architecture',
    description:
      'REST and GraphQL API design, webhook-driven automation, BullMQ job queuing, and third-party service integrations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboards and Internal Tools',
    description:
      'Custom admin panels, metafield managers, product scoring tools, and internal workflow apps for non-technical teams.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-dark-800 border border-dark-600 transition-all duration-300 hover:border-accent/50 glowing-card"
            >
              <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
