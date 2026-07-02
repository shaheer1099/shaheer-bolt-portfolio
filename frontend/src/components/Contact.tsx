import { useEffect, useState, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowUpRight, CheckCircle2, Send, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const projectTypes = [
  'Shopify App',
  'WordPress Plugin',
  'Ecommerce Platform',
  'API Integration',
  'Other',
];

const contactLinks = [
  { label: 'Email', value: 'shaheerasheikh00@gmail.com', href: 'mailto:shaheerasheikh00@gmail.com' },
  { label: 'LinkedIn', value: 'shaheer-sheikh', href: 'https://www.linkedin.com/in/shaheer-sheikh/' },
  { label: 'Fiverr', value: 'Freelance profile', href: 'https://www.fiverr.com/s/pd7DKGy' },
  { label: 'Upwork', value: 'Freelance profile', href: 'https://www.upwork.com/freelancers/shaheera65' },
];

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || 'http://localhost:5000/api/contact';
const contactRouteToken = import.meta.env.VITE_CONTACT_ROUTE_TOKEN || '';

type ToastState = {
  type: 'success' | 'error';
  message: string;
} | null;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => setToast(null), 5200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        projectType: formData.projectType.trim(),
        message: formData.message.trim(),
        website: formData.website.trim(),
      };

      if (!payload.name || !payload.email || !payload.projectType || !payload.message) {
        throw new Error('All fields are required');
      }

      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(contactRouteToken ? { 'x-contact-token': contactRouteToken } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Contact form submission failed');
      }

      const data = await response.json().catch(() => null);
      setToast({ type: 'success', message: data?.message || 'Message sent. I will get back to you soon.' });
      setFormData({ name: '', email: '', projectType: '', message: '', website: '' });
    } catch (error) {
      setToast({
        type: 'error',
        message: error instanceof Error ? error.message : 'Message could not be sent. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-24">
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className={`fixed bottom-6 right-4 z-[90] flex w-[calc(100vw-2rem)] max-w-md items-start gap-3 rounded-xl border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.46)] backdrop-blur-xl md:right-6 ${
              toast.type === 'success'
                ? 'border-green-400/25 bg-green-500/12 text-green-100'
                : 'border-red-400/25 bg-red-500/12 text-red-100'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
            )}
            <div className="min-w-0">
              <p className="text-sm font-bold text-white">{toast.type === 'success' ? 'Message sent' : 'Message not sent'}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-200">{toast.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-2xl border border-white/10 bg-dark-900/62 p-5 backdrop-blur-xl md:p-6"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Direct Channels</span>
              <h3 className="mt-3 text-2xl font-bold text-white">Pick the fastest route</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Send the project context, timeline, and platform. I will reply with a practical next step instead of a generic sales response.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-[116px] flex-col justify-between rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-all hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.065]"
                >
                  <span className="flex items-center justify-between gap-3">
                    <BrandLogo name={link.label} />
                    <ArrowUpRight className="h-4 w-4 text-gray-600 transition-colors group-hover:text-white" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{link.label}</span>
                    <span className="mt-1 block truncate text-xs text-gray-500">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-dark-900/78 p-5 backdrop-blur-xl md:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

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
