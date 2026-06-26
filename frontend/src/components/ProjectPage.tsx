import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Project not found.</p>
          <Link to="/" className="text-accent hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero band */}
      <div className={`relative bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-16">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-10 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-white/70 mb-8">{project.subtitle}</p>

            <div className="flex flex-wrap gap-3 items-center">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-white/80 border border-white/20 font-medium">
                  {tag}
                </span>
              ))}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-dark-900 text-sm font-semibold hover:bg-white/90 transition-colors ml-auto"
                >
                  View Live <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Stats */}
        {project.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {project.stats.map(stat => (
              <div key={stat.label} className="p-5 rounded-xl bg-dark-800 border border-dark-500 text-center">
                <p className={`text-3xl font-bold mb-2 ${project.accentColor}`}>{stat.value}</p>
                <p className="text-xs text-gray-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        <div className="grid md:grid-cols-5 gap-12">
          {/* Main content */}
          <div className="md:col-span-3 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed text-[15px]">{project.description}</p>
            </motion.section>

            {/* Solutions */}
            {project.solutions.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl font-bold text-white mb-6">Solutions Delivered</h2>
                <div className="space-y-6">
                  {project.solutions.map(s => (
                    <div key={s.num} className="flex gap-4">
                      <span className={`text-sm font-bold ${project.accentColor} shrink-0 w-8 mt-0.5`}>{s.num}</span>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1.5">{s.title}</p>
                        <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">
            {/* Project info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-6 rounded-xl bg-dark-800 border border-dark-500"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Technology</p>
                  <p className="text-sm font-medium text-gray-200">{project.technology}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Service</p>
                  <p className="text-sm font-medium text-gray-200">{project.service}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Category</p>
                  <p className="text-sm font-medium text-gray-200">{project.category}</p>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            {project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="p-6 rounded-xl bg-dark-800 border border-dark-500"
              >
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Features</h3>
                <ul className="space-y-2.5">
                  {project.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${project.accentColor}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-dark-600"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
