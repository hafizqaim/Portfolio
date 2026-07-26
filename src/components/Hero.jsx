import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from './icons'

const avatarUrl = 'https://avatars.githubusercontent.com/u/133333459?v=4'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  }),
}

const metricCards = [
  ['100+', 'delivered projects'],
  ['4K+', 'MRI scans studied'],
  ['AWS', 'production systems'],
]

const ticker = [
  'PyTorch',
  'Computer Vision',
  'RAG & LLMs',
  'MLOps',
  'FastAPI',
  'AWS',
  'YOLOv8',
  'LangChain',
  'Qdrant',
  'Docker',
  'Airflow',
  'DICOM',
]

function HeroVisual() {
  const [pos, setPos] = useState({ x: 50, y: 40 })

  function move(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({
      x: Math.round(((e.clientX - rect.left) / rect.width) * 100),
      y: Math.round(((e.clientY - rect.top) / rect.height) * 100),
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={move}
      className="hero-visual p-5 sm:p-6"
      style={{ '--mx': `${pos.x}%`, '--my': `${pos.y}%` }}
    >
      <div className="relative z-10 grid gap-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[.03] px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="status-dot" />
            <span className="font-mono text-xs tracking-wide text-emerald">Available for roles</span>
          </div>
          <span className="font-mono text-xs text-faint">Islamabad / Remote</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
          <div className="avatar-ring h-full">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[22px] bg-bg2">
              <img src={avatarUrl} alt="Muhammad Qaim Ali" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg/90 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-bg/70 p-3 backdrop-blur">
                <div className="font-display text-base font-bold leading-tight">{profile.name}</div>
                <div className="mt-0.5 font-mono text-[11px] text-cyan">{profile.role}</div>
              </div>
            </div>
          </div>

          <div className="grid content-between gap-4">
            <div className="gradient-border rounded-2xl bg-white/[.02] p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-violet uppercase">Model console</span>
                <span className="rounded-full border border-cyan/25 bg-cyan/5 px-2.5 py-1 font-mono text-[11px] text-cyan">
                  live
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs leading-relaxed text-muted">
                <p>
                  <span className="text-cyan">input</span> medical imaging, RAG, MLOps
                </p>
                <p>
                  <span className="text-violet">process</span> train, evaluate, deploy
                </p>
                <p>
                  <span className="text-pink">output</span> useful AI systems
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {metricCards.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/5 bg-white/[.03] p-3">
                  <div className="font-display text-xl font-bold text-gradient sm:text-2xl">{value}</div>
                  <div className="mt-1 text-[11px] leading-snug text-faint">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[.02] p-4">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="font-mono text-xs tracking-widest text-violet uppercase">Current focus</span>
            <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {profile.focus.map((f) => (
              <div key={f.k} className="rounded-xl border border-white/5 bg-surface/70 p-3 transition hover:border-violet/30">
                <div className="font-mono text-[11px] text-cyan">{f.k}</div>
                <div className="mt-1 font-display text-[15px] font-bold">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const go = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [first, ...rest] = profile.name.split(' ')

  return (
    <section id="home" className="relative">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-10 pt-32 sm:px-7 lg:min-h-screen lg:grid-cols-[1.02fr_0.98fr] lg:pb-16 lg:pt-36">
        <div>
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate="show" className="eyebrow">
            AI / ML Engineer
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-[clamp(2.9rem,7.2vw,5.2rem)] font-bold leading-[1.02] tracking-tight text-ink"
          >
            {first}
            <span className="serif-i block text-gradient pr-2 pb-1">{rest.join(' ')}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-[38rem] text-lg leading-8 text-muted"
          >
            {profile.lede}
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" onClick={go('projects')} className="button-primary">
              View projects <ArrowIcon width={16} height={16} />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener" className="button-secondary">
              <DownloadIcon width={16} height={16} /> Resume
            </a>
            <a href="#contact" onClick={go('contact')} className="button-secondary">
              Contact me
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            {profile.stats.map((s) => (
              <div key={s.l} className="gradient-border rounded-2xl bg-surface/60 p-4 backdrop-blur">
                <div className="font-display text-xl font-bold text-gradient">{s.n}</div>
                <div className="mt-1 text-sm leading-snug text-muted">{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="mt-7 flex flex-wrap gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-cyan"
            >
              <GitHubIcon width={17} height={17} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-cyan"
            >
              <LinkedInIcon width={17} height={17} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <HeroVisual />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="marquee border-y border-white/5 bg-white/[.015] py-4"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={index} className="flex items-center">
              <span className="px-6 font-mono text-xs tracking-[0.22em] text-faint uppercase">{item}</span>
              <span className="h-1 w-1 rounded-full bg-violet/50" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
