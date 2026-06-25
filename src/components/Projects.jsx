import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories } from '../data/projects'
import { Section, SectionHead } from './Section'
import { GitHubIcon, ExternalIcon } from './icons'

function Shot({ p }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg3">
      {!failed && p.image ? (
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        // Fallback placeholder (grid + glyph) when no screenshot is available.
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{
            backgroundColor: 'var(--color-bg3)',
            backgroundImage:
              'linear-gradient(var(--color-line) 1px,transparent 1px),linear-gradient(90deg,var(--color-line) 1px,transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        >
          <span className="relative h-10 w-10 rounded-lg border border-teal/35 opacity-70">
            <span className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-teal/35" />
            <span className="absolute top-1/2 left-2 right-2 h-px -translate-y-1/2 bg-teal/35" />
          </span>
          <span className="px-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
            {p.title}
          </span>
        </div>
      )}
      {p.featured && (
        <span className="absolute left-3 top-3 rounded-md border border-teal/35 bg-[rgba(7,11,18,.8)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-teal">
          Featured
        </span>
      )}
    </div>
  )
}

function Card({ p }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[14px] border border-line bg-bg2 transition duration-300 hover:-translate-y-1 hover:border-teal/35"
    >
      <Shot p={p} />
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber">{p.category}</span>
        <h3 className="my-2.5 font-display text-[21px] font-bold tracking-[-0.01em]">{p.title}</h3>
        <p className="mb-4 flex-1 text-[14.5px] text-muted">{p.desc}</p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md border border-line px-2.5 py-1 font-mono text-[10.5px] text-muted">
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line2 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.04em] transition hover:border-teal/35 hover:text-teal"
            >
              <GitHubIcon width={13} height={13} /> GitHub
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line2 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.04em] transition hover:border-teal/35 hover:text-teal"
            >
              <ExternalIcon width={13} height={13} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <Section id="projects">
      <SectionHead
        eyebrow="Portfolio"
        title="Projects, in detail."
        sub="Curated from my GitHub. Cards show live repo previews — drop your own screenshots into /public/images to override any of them."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`rounded-full border px-4 py-2 font-mono text-[11.5px] uppercase tracking-[0.05em] transition ${
              filter === c.id
                ? 'border-teal bg-teal font-bold text-[#04110e]'
                : 'border-line text-muted hover:text-ink'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 text-center font-mono text-[12px] text-faint">
        + more on{' '}
        <a href="https://github.com/hafizqaim" target="_blank" rel="noopener" className="text-teal hover:underline">
          github.com/hafizqaim
        </a>
      </p>
    </Section>
  )
}
