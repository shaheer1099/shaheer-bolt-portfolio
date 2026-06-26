import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeading from './SectionHeading';
import ParallaxBlob from './ParallaxBlob';

type Tab = 'shopify' | 'wordpress' | 'saas';

const tabs: { id: Tab; label: string }[] = [
  { id: 'shopify', label: 'Shopify' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'saas', label: 'SaaS & Apps' },
];

function BrowserMockup({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '62%' }}>
      <div className="absolute inset-0 bg-[#0d1117] rounded-xl border border-white/5">
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5 bg-[#161b22]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-3 h-4 rounded-full bg-[#1f2937] flex items-center px-2">
            <span className="text-[8px] text-gray-500 truncate">{project.url.replace('https://', '')}</span>
          </div>
        </div>
        <div className={`absolute inset-x-0 bottom-0 top-[34px] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="relative z-10 text-center px-4">
            <div className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-lg">{project.title}</div>
            <div className="flex items-center justify-center gap-1.5 mt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-white/15 text-white/80 border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-3 left-3 w-12 h-8 rounded bg-white/10 border border-white/15" />
          <div className="absolute bottom-3 right-3 w-16 h-5 rounded bg-white/10 border border-white/15" />
          <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 border border-white/15" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('shopify');

  const filtered = projects.filter(p => p.tab === activeTab);

  return (
    <section id="projects" className="relative py-24 px-6 bg-dark-800 overflow-hidden">
      <ParallaxBlob className="top-20 -left-24 w-72 h-72 bg-accent/5" distance={110} />
      <ParallaxBlob className="bottom-10 -right-24 w-80 h-80 bg-cyan/5" distance={150} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Real-world products built and shipped — from Shopify apps to WooCommerce plugins and custom SaaS platforms."
          className="mb-10"
        />

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-1 p-1 glass rounded-xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block bg-[#0d1117] border border-white/6 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1"
                >
                  <div className="p-3 pb-0">
                    <BrowserMockup project={project} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-bold text-white leading-snug group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors shrink-0 ml-2 mt-0.5" />
                    </div>
                    <p className="text-[13px] text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {project.subtitle} — {project.description.split('.')[0]}.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[11px] font-medium rounded-full bg-dark-700 text-gray-300 border border-dark-500"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-3 py-1 text-[11px] font-medium rounded-full bg-dark-700 text-gray-300 border border-dark-500">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
