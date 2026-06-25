import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { ArrowIcon, DownloadIcon } from './icons'

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const go = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="mx-auto max-w-[1180px] px-7 pt-16 pb-12">
      <div className="grid items-center gap-14 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.span custom={0} variants={item} initial="hidden" animate="show" className="eyebrow">
            {profile.location} · Remote — Global
          </motion.span>

          <motion.h1
            custom={1}
            variants={item}
            initial="hidden"
            animate="show"
            className="mt-5 font-display text-[clamp(38px,6vw,66px)] font-extrabold leading-[1.02] tracking-[-0.03em]"
          >
            I build <span className="text-teal">AI systems</span> that see, reason, and ship.
          </motion.h1>

          <motion.p
            custom={2}
            variants={item}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-[32em] text-[17.5px] text-muted"
          >
            {profile.lede}
          </motion.p>

          <motion.div custom={3} variants={item} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={go('projects')}
              className="inline-flex items-center gap-2 rounded-[10px] bg-teal px-5 py-3 font-mono text-[12.5px] font-bold uppercase tracking-[0.06em] text-[#04110e] transition hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(70,224,200,.18)]"
            >
              View the work <ArrowIcon width={15} height={15} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-[10px] border border-line2 px-5 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-ink transition hover:border-teal/35 hover:text-teal"
            >
              <DownloadIcon width={15} height={15} /> Resume
            </a>
            <a
              href="#contact"
              onClick={go('contact')}
              className="inline-flex items-center gap-2 rounded-[10px] border border-line2 px-5 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-ink transition hover:border-teal/35 hover:text-teal"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={item}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-8 border-t border-line pt-6"
          >
            {profile.stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-[25px] font-bold">{s.n}</div>
                <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-faint">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signature diagnostic viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="viewport mx-auto w-full max-w-[440px]"
          aria-hidden="true"
        >
          <div className="grid" />
          <div className="scan-obj" />
          <div className="cross-v" />
          <div className="cross-h" />
          <div className="scanline" />
          <span className="corner" style={{ top: 10, left: 10, borderRight: 0, borderBottom: 0 }} />
          <span className="corner" style={{ top: 10, right: 10, borderLeft: 0, borderBottom: 0 }} />
          <span className="corner" style={{ bottom: 10, left: 10, borderRight: 0, borderTop: 0 }} />
          <span className="corner" style={{ bottom: 10, right: 10, borderLeft: 0, borderTop: 0 }} />
          <span className="tick" style={{ top: 14, left: 16 }}>SEQ // 3D-VLM<br />MODEL: PAB-MRI</span>
          <span className="tick" style={{ top: 14, right: 16, textAlign: 'right' }}>SLICE 064 / 128<br />AXIAL</span>
          <span className="tick" style={{ bottom: 14, left: 16 }}>SEG: U-NET<br />MASK: ✓</span>
          <span className="tick" style={{ bottom: 14, right: 16, textAlign: 'right', color: 'var(--color-amber)' }}>
            STATUS: GENERATING<br />REPORT ▸
          </span>
        </motion.div>
      </div>

      {/* Focus strip */}
      <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-[14px] border border-line md:grid-cols-4">
        {profile.focus.map((f, i) => (
          <div
            key={f.k}
            className={`p-5 ${i < profile.focus.length - 1 ? 'border-line md:border-r' : ''} ${
              i % 2 === 0 ? 'border-r' : ''
            } ${i < 2 ? 'border-b md:border-b-0' : ''}`}
            style={{ borderColor: 'var(--color-line)' }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-teal">{f.k}</div>
            <div className="mt-1.5 font-display text-[16px] font-semibold">{f.v}</div>
            <div className="mt-1 text-[13px] text-muted">{f.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
