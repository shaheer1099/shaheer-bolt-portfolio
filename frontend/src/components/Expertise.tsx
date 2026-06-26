import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Plug,
  CreditCard,
  Store,
  Server,
  LayoutDashboard,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import ParallaxBlob from './ParallaxBlob';

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
    <section id="expertise" className="relative py-24 px-6 bg-dark-900 overflow-hidden">
      <ParallaxBlob className="top-10 -left-24 w-72 h-72 bg-accent/5" distance={90} />
      <ParallaxBlob className="bottom-0 -right-24 w-80 h-80 bg-cyan/5" distance={140} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          description="End-to-end ecommerce development — from app architecture to marketplace publication."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl glass-card glowing-card"
            >
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 w-fit mb-4 group-hover:bg-accent/20 transition-colors duration-300">
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
