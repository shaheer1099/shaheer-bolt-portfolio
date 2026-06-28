import { MouseEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, projects } from '../data/projects';
import { getProjectImages } from '../data/projectImages';

type Tab = 'shopify' | 'wordpress' | 'saas';

const tabs: { id: Tab; label: string }[] = [
  { id: 'shopify', label: 'Shopify' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'saas', label: 'SaaS & Apps' },
];

function EditorialCover({ project, compact = false }: { project: Project; compact?: boolean }) {
  const images = getProjectImages(project.id);
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = images[activeImage];

  const moveImage = (event: MouseEvent<HTMLButtonElement>, direction: 1 | -1) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  if (currentImage) {
    return (
      <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-white ${compact ? 'aspect-[16/10]' : 'aspect-[16/10]'}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={`${project.title} screenshot ${activeImage + 1}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/10" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
          <div className="rounded-full border border-black/10 bg-white/88 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-dark-900 shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-md">
            {project.category}
          </div>
          {images.length > 1 && (
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={(event) => moveImage(event, -1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-dark-900 text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent"
                aria-label={`Previous ${project.title} image`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(event) => moveImage(event, 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-dark-900 text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent"
                aria-label={`Next ${project.title} image`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-1.5 rounded-full bg-black/24 p-1.5 backdrop-blur-sm w-fit">
            {images.map((image, index) => (
              <span
                key={image}
                className={`h-1 rounded-full transition-all duration-300 ${index === activeImage ? 'w-8 bg-white' : 'w-3 bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#090d14] ${compact ? 'min-h-[190px]' : 'min-h-[420px]'}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <div className="absolute inset-0 bg-black/35" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
          backgroundSize: compact ? '22px 22px' : '34px 34px',
        }}
        aria-hidden
      />

      <div className="absolute left-5 right-5 top-5 overflow-hidden rounded-lg border border-white/12 bg-black/28 backdrop-blur-md">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate text-[10px] font-medium text-white/48">{project.url.replace('https://', '')}</span>
        </div>
        <div className={compact ? 'p-4' : 'p-6'}>
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">{project.category}</div>
          <div className={`${compact ? 'mt-3 text-xl' : 'mt-5 text-4xl'} max-w-xl font-bold leading-tight text-white`}>
            {project.title}
          </div>
        </div>
      </div>

      {!compact && (
        <div className="absolute bottom-7 left-7 grid w-[min(520px,calc(100%-56px))] grid-cols-3 gap-3">
          {project.stats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/12 bg-black/24 p-4 backdrop-blur-md">
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 line-clamp-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/52">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EditorialFeature({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group grid overflow-hidden rounded-xl border border-dark-500/70 bg-dark-900/80 shadow-[0_34px_110px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/35 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]"
    >
      <EditorialCover project={project} />

      <div className="relative flex flex-col p-6 md:p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            Featured Case Study
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-500 bg-dark-800 text-gray-500 transition-all duration-300 group-hover:border-accent/30 group-hover:text-white">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>

        <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">{project.title}</h3>
        <p className="mt-3 text-sm font-semibold text-gray-300">{project.subtitle}</p>
        <p className="mt-6 line-clamp-5 text-sm leading-relaxed text-gray-400">{project.description}</p>

        <div className="mt-8 space-y-3">
          {project.solutions.slice(0, 3).map((solution) => (
            <div key={solution.num} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-gray-300">{solution.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            View Project Detail
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function EditorialCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block h-full overflow-hidden rounded-xl border border-dark-500/70 bg-dark-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-dark-800/82"
      >
        <EditorialCover project={project} compact />
        <div className="p-5">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">{project.service}</div>
              <h4 className="mt-2 text-lg font-bold leading-snug text-white">{project.title}</h4>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-600 transition-colors group-hover:text-white" />
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('shopify');
  const filtered = projects.filter((project) => project.tab === activeTab);
  const featured = filtered[0];
  const supporting = filtered.slice(1);

  if (!featured) return null;

  return (
    <section id="projects" className="relative isolate overflow-hidden px-6 py-24">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="section-eyebrow mb-4 block">Projects</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Selected Work Worth Opening
          </h2>
          <div className="section-divider mx-auto my-5" />
          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            A focused look at shipped ecommerce products, plugins, and platforms. Each case opens into the product story behind the build.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="flex gap-1 rounded-xl border border-dark-500/70 bg-dark-900/75 p-1 shadow-card backdrop-blur-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 md:px-5 ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'text-gray-500 hover:bg-dark-700/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3 }}
          >
            <EditorialFeature project={featured} />

            {supporting.length > 0 && (
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {supporting.map((project, index) => (
                  <EditorialCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
