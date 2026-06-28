import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Linkedin, Mail, Send, Sparkles } from 'lucide-react';

const projectTypes = [
  'Shopify App',
  'WordPress Plugin',
  'Ecommerce Platform',
  'API Integration',
  'Other',
];

const contactLinks = [
  { label: 'Email', value: 'contact@solcoders.com', href: 'mailto:contact@solcoders.com', icon: Mail },
  { label: 'LinkedIn', value: 'Professional profile', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', value: 'Code and projects', href: 'https://github.com', icon: Github },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-24">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <span className="section-eyebrow mb-4 block text-left">Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Let Us Build Something That Ships
          </h2>
          <div className="section-divider my-5" />
          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
            Tell me what you are trying to build, what is already in place, and what outcome matters most. I will respond with a practical next step.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-5"
          >
            <div className="rounded-xl border border-dark-500/70 bg-dark-900/76 p-6 backdrop-blur-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">Available for remote ecommerce work</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                I work with teams across the US, UK, Europe, and MENA on Shopify apps, WooCommerce plugins, checkout flows, dashboards, and custom platforms.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Fast scoping', 'Clean delivery', 'Production focus', 'Long-term support'].map((item) => (
                  <div key={item} className="rounded-lg border border-dark-500/70 bg-dark-800/60 px-3 py-2 text-xs font-semibold text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-xl border border-dark-500/70 bg-dark-900/68 p-4 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-accent/35 hover:bg-dark-800/78"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-500 bg-dark-800">
                      <link.icon className="h-4 w-4 text-accent" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">{link.label}</span>
                      <span className="block text-xs text-gray-500">{link.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-600 transition-colors group-hover:text-white" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {['Upwork', 'Fiverr'].map((label) => (
                <a
                  key={label}
                  href={`https://${label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition-all hover:-translate-y-0.5 hover:border-emerald-300/40"
                >
                  {label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-xl border border-dark-500/70 bg-dark-900/78 p-5 backdrop-blur-xl md:p-7"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full rounded-lg border border-dark-500 bg-dark-800/80 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-accent/70 focus:ring-1 focus:ring-accent/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full rounded-lg border border-dark-500 bg-dark-800/80 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-accent/70 focus:ring-1 focus:ring-accent/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  required
                  className="w-full cursor-pointer appearance-none rounded-lg border border-dark-500 bg-dark-800/80 px-4 py-3 text-white outline-none transition-colors focus:border-accent/70 focus:ring-1 focus:ring-accent/30"
                >
                  <option value="" className="text-gray-500">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-dark-500 bg-dark-800/80 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-accent/70 focus:ring-1 focus:ring-accent/30"
                  placeholder="Tell me what you want to build, what stack you use, and what timeline you have in mind."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
