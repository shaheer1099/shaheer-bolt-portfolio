import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { getProjectImages } from '../data/projectImages';

const groups: { label: string; value: Project['tab']; description: string }[] = [
  { label: 'Shopify', value: 'shopify', description: 'Custom storefront and app workflows built around merchant operations.' },
  { label: 'WordPress', value: 'wordpress', description: 'WooCommerce and WordPress plugin work with admin-friendly product flows.' },
  { label: 'Custom Apps', value: 'saas', description: 'Bespoke platforms, integrations, and operational software.' },
];

function ProjectCatalogCard({ project, index }: { project: Project; index: number }) {
  const images = getProjectImages(project.id);
  const cover = images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2), ease: 'easeOut' }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-dark-500/70 bg-dark-900/72 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-dark-800/80"
      >
        <div className="relative aspect-[16/10] bg-white">
          {cover ? (
            <img src={cover} alt={`${project.title} preview`} className="absolute inset-0 h-full w-full object-contain" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          )}
          <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-dark-900">
            {project.category}
          </div>
        </div>

        <div className="flex flex-col p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">{project.service}</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-white">{project.title}</h2>
              <p className="mt-2 text-sm font-semibold text-gray-300">{project.subtitle}</p>
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-gray-600 transition-colors group-hover:text-white" />
          </div>

          <p className="mt-5 line-clamp-4 text-sm leading-relaxed text-gray-400">{project.description}</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.solutions.slice(0, 2).map((solution) => (
              <div key={solution.num} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${project.accentColor}`} />
                <span>{solution.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-dark-900 px-6 pb-24 pt-28 text-white">
      <main className="mx-auto max-w-7xl">
        <Link to="/#projects" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-14 max-w-4xl"
        >
          <span className="section-eyebrow mb-4 block text-left">Project Catalog</span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">Detailed work across apps, plugins, and platforms</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-400">
            A broader look at selected builds, organized by platform so each project has room for context, screenshots, and delivery details.
          </p>
        </motion.header>

        <div className="space-y-16">
          {groups.map((group) => {
            const groupProjects = projects.filter((project) => project.tab === group.value);

            return (
              <section key={group.value}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-dark-500/70 pb-5">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{group.label}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">{group.description}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                    {groupProjects.length} Projects
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {groupProjects.map((project, index) => (
                    <ProjectCatalogCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
