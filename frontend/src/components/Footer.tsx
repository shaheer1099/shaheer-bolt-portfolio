import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
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
    <footer className="py-8 px-6 bg-dark-900 border-t border-dark-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">Shaheer</span>
            <span className="text-gray-500">/</span>
            <a
              href="https://solcoders.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors"
            >
              SolCoders
            </a>
          </div>

          <nav className="flex items-center gap-6">
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

          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium"
          >
            Available for Remote Work
          </motion.span>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-700 text-center">
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} Shaheer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
