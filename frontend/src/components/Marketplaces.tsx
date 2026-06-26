import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight, Package, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ParallaxBlob from './ParallaxBlob';

const marketplaces = [
  {
    name: 'Shopify App Store',
    handle: 'shopify.com/app-store',
    tagline: 'Verified App Developer',
    description:
      'Published production apps on the Shopify App Store, including custom storefront experiences, metafield managers, payment integrations, and merchant-facing dashboards.',
    products: ['Custom Storefront Apps', 'Metafield Manager', 'Payment Gateway Integrations', 'Merchant Dashboards'],
    stat: { value: 'Published', label: 'Apps on Shopify' },
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/25',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-300',
    dotColor: 'bg-emerald-400',
    gradientFrom: 'from-emerald-500/15',
    gradientTo: 'to-emerald-500/0',
  },
  {
    name: 'WooCommerce Marketplace',
    handle: 'woocommerce.com/products',
    tagline: 'Verified Plugin Developer',
    description:
      'Published multiple premium WooCommerce extensions on the official marketplace — covering B2B ecommerce, booking filters, subscription systems, and product table solutions.',
    products: ['Extend B2B – Ecommerce AIO', 'Extend – Booking Filters', 'Extend – Subscriptions Add-On', 'Extend B2B – Product Tables'],
    stat: { value: '4 Live', label: 'Plugins on WooCommerce' },
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/25',
    badgeBg: 'bg-blue-500/15',
    badgeText: 'text-blue-300',
    dotColor: 'bg-blue-400',
    gradientFrom: 'from-blue-500/15',
    gradientTo: 'to-blue-500/0',
  },
];

export default function Marketplaces() {
  return (
    <section className="relative py-24 px-6 bg-dark-800 overflow-hidden">
      <ParallaxBlob className="top-0 right-0 w-80 h-80 bg-accent/5" distance={130} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Official Publications"
          title="Marketplace Publisher"
          description="Officially published and approved products on the world's leading ecommerce marketplaces."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {marketplaces.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-2xl bg-dark-900 border ${m.borderColor} overflow-hidden hover-lift`}
            >
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${m.gradientFrom} ${m.gradientTo} pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${m.badgeBg} ${m.badgeText} border ${m.borderColor}`}>
                      <CheckCircle className="w-3 h-3" />
                      {m.tagline}
                    </div>
                    <h3 className="text-xl font-bold text-white">{m.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{m.handle}</p>
                  </div>

                  <div className={`text-right px-4 py-3 rounded-xl ${m.badgeBg} border ${m.borderColor}`}>
                    <p className={`text-lg font-bold ${m.accentColor}`}>{m.stat.value}</p>
                    <p className="text-xs text-gray-400">{m.stat.label}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">{m.description}</p>

                <div className="space-y-2 mb-6">
                  {m.products.map((product) => (
                    <div key={product} className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${m.dotColor} shrink-0`} />
                      <span className="text-sm text-gray-300">{product}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-dark-600">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`w-3.5 h-3.5 fill-current ${m.accentColor}`} />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">Marketplace rated</span>
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${m.accentColor}`}>
                    <Package className="w-3.5 h-3.5" />
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-8 py-6 px-8 rounded-2xl glass-card"
        >
          {[
            { label: 'Shopify Partner' },
            { label: 'WooCommerce Developer' },
            { label: 'App Store Approved' },
            { label: 'Marketplace Certified' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-sm text-gray-300 font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
