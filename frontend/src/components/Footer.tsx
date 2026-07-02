import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Skills', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const contactLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shaheer-sheikh/' },
  { name: 'Upwork', href: 'https://www.upwork.com/freelancers/shaheera65' },
  { name: 'Fiverr', href: 'https://www.fiverr.com/s/pd7DKGy' },
];

const serviceLinks = ['Shopify Apps', 'WordPress Plugins', 'API Integrations', 'Ecommerce Platforms'];

export default function Footer() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-dark-500/60 bg-[#05070c] px-6 py-14">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-[min(780px,90vw)] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(180px,0.55fr)_minmax(180px,0.55fr)_minmax(260px,0.75fr)]">
          <div>
            <span className="section-eyebrow mb-4 block text-left">Shaheer Sheikh</span>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-4xl">
              Full stack ecommerce product engineering for apps, plugins, and platforms.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-400">
              I build practical systems for Shopify, WordPress, and custom ecommerce workflows with a focus on shipping, maintainability, and clean product execution.
            </p>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollTo('#contact')}
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-bold text-dark-900 transition-colors hover:bg-accent hover:text-white"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </motion.button>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Navigate</h3>
            <nav className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="w-fit text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h3>
            <div className="mt-5 grid gap-3">
              {serviceLinks.map((service) => (
                <span key={service} className="text-sm text-gray-400">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
            <a
              href="mailto:shaheerasheikh00@gmail.com"
              className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white transition-colors hover:border-accent/35 hover:bg-white/[0.07]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/12 text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.16em] text-gray-500">Email</span>
                <span className="mt-1 block truncate">shaheerasheikh00@gmail.com</span>
              </span>
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-bold text-gray-300 transition-colors hover:border-accent/35 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-dark-500/60 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Shaheer Sheikh. All rights reserved.
          </p>
          <p className="font-medium text-gray-600">
            Shopify Apps / WordPress Plugins / Custom Platforms
          </p>
        </div>
      </div>
    </footer>
  );
}
