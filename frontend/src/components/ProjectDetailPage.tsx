import { MouseEvent, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { projects } from '../data/projects';
import { getProjectImages } from '../data/projectImages';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);
  const images = project ? getProjectImages(project.id) : [];
  const [activeImage, setActiveImage] = useState(0);

  const moveImage = (event: MouseEvent<HTMLButtonElement>, direction: 1 | -1) => {
    event.preventDefault();
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark-900">
        <div className="text-center">
          <p className="mb-4 text-gray-400">Project not found.</p>
          <Link to="/" className="text-accent hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  const activeScreenshot = images[activeImage];

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-8">
        <div className={`absolute inset-x-0 top-0 -z-10 h-[620px] bg-gradient-to-br ${project.gradient} opacity-25`} />
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-gradient-to-b from-dark-900/30 via-dark-900/78 to-dark-900" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-7xl">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </motion.button>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(520px,1.2fr)] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-accent">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-300">{project.subtitle}</p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-dark-900 transition-all hover:-translate-y-0.5 hover:bg-white/90"
                >
                  View Live
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-dark-900/80 p-3 shadow-[0_34px_120px_rgba(0,0,0,0.46)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
                {activeScreenshot ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeScreenshot}
                      src={activeScreenshot}
                      alt={`${project.title} screenshot ${activeImage + 1}`}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </AnimatePresence>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-black/8" />

                {images.length > 1 && (
                  <div className="absolute right-4 top-4 flex gap-2">
                    <button type="button" onClick={(event) => moveImage(event, -1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-dark-900 text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent" aria-label="Previous project image">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={(event) => moveImage(event, 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-dark-900 text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent" aria-label="Next project image">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {images.slice(0, 6).map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() => setActiveImage(index)}
                      className={`h-16 overflow-hidden rounded-md border bg-white transition-all ${
                        index === activeImage ? 'border-accent opacity-100' : 'border-white/8 opacity-48 hover:opacity-80'
                      }`}
                      aria-label={`Show screenshot ${index + 1}`}
                    >
                      <img src={image} alt="" className="h-full w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-24">
        {project.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="grid gap-4 border-y border-dark-500/70 py-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className={`text-3xl font-bold ${project.accentColor}`}>{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(320px,0.32fr)]">
          <div className="space-y-12">
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <span className="section-eyebrow mb-4 block text-left">Overview</span>
              <h2 className="text-3xl font-bold text-white">What this project solved</h2>
              <p className="mt-5 text-base leading-relaxed text-gray-300">{project.description}</p>
            </motion.section>

            {project.solutions.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.28 }}>
                <span className="section-eyebrow mb-4 block text-left">Delivery</span>
                <h2 className="text-3xl font-bold text-white">Key build decisions</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.solutions.map((solution) => (
                    <article key={solution.num} className="rounded-xl border border-dark-500/70 bg-dark-800/55 p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <span className={`text-sm font-bold ${project.accentColor}`}>{solution.num}</span>
                        <h3 className="text-base font-bold text-white">{solution.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-400">{solution.desc}</p>
                    </article>
                  ))}
                </div>
              </motion.section>
            )}

            {images.length > 1 && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }}>
                <span className="section-eyebrow mb-4 block text-left">Screens</span>
                <h2 className="text-3xl font-bold text-white">Product interface snapshots</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {images.slice(0, 4).map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => {
                        setActiveImage(index);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group overflow-hidden rounded-xl border border-dark-500/70 bg-dark-800/50 text-left transition-all hover:-translate-y-1 hover:border-accent/35"
                    >
                      <div className="aspect-[16/10] bg-white">
                        <img src={image} alt={`${project.title} interface ${index + 1}`} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          <aside className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="rounded-xl border border-dark-500/70 bg-dark-800/55 p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Project Info</h3>
              <div className="mt-5 space-y-5">
                {[
                  ['Technology', project.technology],
                  ['Service', project.service],
                  ['Category', project.category],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{label}</p>
                    <p className="mt-1 text-sm font-medium text-gray-200">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {project.features.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="rounded-xl border border-dark-500/70 bg-dark-800/55 p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Key Features</h3>
                <ul className="mt-5 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${project.accentColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            <Link to="/#projects" className="group flex items-center justify-between rounded-xl border border-accent/25 bg-accent/10 p-5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-accent/45 hover:bg-accent/15">
              Back to all projects
              <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
