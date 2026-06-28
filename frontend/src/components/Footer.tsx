import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Skills', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070c] px-6 py-10 border-t border-dark-500/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="block text-lg font-semibold text-white">Shaheer Sheikh</span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
              Ecommerce Product Engineer
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('#contact')}
            className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold transition-colors hover:border-green-400/45 hover:bg-green-500/15 hover:text-green-300"
          >
            Contact Us
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-500/50 text-center">
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} Shaheer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
