import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories } from '../data/projects'
import { Section, SectionHead } from './Section'
import { ExternalIcon, GitHubIcon, SparkIcon } from './icons'

function ProjectVisual({ project }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="project-image-mask relative aspect-[16/10] overflow-hidden">
      {!failed && project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div>
            <div className="gradient-border mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-bg/60 text-violet">
              <SparkIcon width={24} height={24} />
            </div>
            <div className="mt-4 font-display text-xl font-bold text-ink">{project.title}</div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-bg3/60 mix-blend-multiply transition duration-500 group-hover:bg-bg3/30" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-bg/70 px-3 py-1.5 font-mono text-[11px] text-ink backdrop-blur">
          {project.category}
        </span>
        {project.featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/15 px-3 py-1.5 font-mono text-[11px] text-violet backdrop-blur">
            <SparkIcon width={12} height={12} /> Featured
          </span>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.12), ease: [0.22, 1, 0.36, 1] }}
      className={`glass group flex min-h-[520px] flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-violet/35 hover:shadow-[0_30px_80px_-30px_rgba(124,58,237,.35)] ${
        project.featured ? 'lg:first:col-span-2' : ''
      }`}
    >
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink">{project.title}</h3>
          <span className="rounded-full border border-white/8 bg-white/[.03] px-2.5 py-1 font-mono text-xs text-faint">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-muted md:text-base">{project.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/8 bg-white/[.03] px-3 py-1.5 text-xs font-medium text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" className="button-secondary !min-h-0 !w-auto !px-4 !py-2 !text-[13px]">
              <GitHubIcon width={14} height={14} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener" className="button-primary !min-h-0 !w-auto !px-4 !py-2 !text-[13px]">
              <ExternalIcon width={14} height={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter((project) => project.tags.includes(filter))

  return (
    <Section id="projects">
      <SectionHead
        eyebrow="Portfolio"
        title="Selected builds with enough depth to matter."
        sub="A filterable showcase spanning medical AI, vision, MLOps, agents, and full-stack systems."
      />

      <div className="scrollbar-hidden mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`shrink-0 rounded-full border px-4 py-2.5 font-mono text-xs tracking-wide uppercase transition ${
              filter === category.id
                ? 'border-violet/50 bg-gradient-to-r from-violet/25 to-cyan/20 text-ink shadow-[0_10px_30px_-10px_rgba(124,58,237,.5)]'
                : 'border-line bg-white/[.02] text-muted hover:border-line2 hover:text-ink'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 flex justify-center">
        <a href="https://github.com/hafizqaim" target="_blank" rel="noopener" className="button-secondary">
          <GitHubIcon width={16} height={16} /> More on GitHub
        </a>
      </div>
    </Section>
  )
}
