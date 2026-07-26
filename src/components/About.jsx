import { profile } from '../data/profile'
import { Section, SectionHead, RichText } from './Section'
import Reveal from './Reveal'

const profileRows = [
  ['Role', profile.role],
  ['Education', profile.education],
  ['Base', profile.location],
  ['Work mode', profile.workMode],
  ['GitHub', `@${profile.handle}`],
]

export default function About() {
  return (
    <Section id="about">
      <SectionHead
        eyebrow="About"
        title="I turn research-shaped ideas into systems people can actually use."
        sub="The sweet spot is practical AI: models with a purpose, data pipelines that hold up, and interfaces that make the output legible."
      />

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <Reveal className="grid gap-4">
          {profile.bio.map((paragraph, index) => (
            <article
              key={index}
              className="glass rounded-3xl p-5 transition duration-300 hover:border-violet/25 md:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="gradient-border grid h-9 w-9 place-items-center rounded-full bg-surface font-mono text-xs font-bold text-gradient">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
              </div>
              <p className="text-base leading-8 text-muted">
                <RichText text={paragraph} />
              </p>
            </article>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="lg:sticky lg:top-28 lg:self-start">
          <aside className="gradient-border glass rounded-3xl p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold tracking-tight">Profile</h3>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/5 px-3 py-1.5 font-mono text-xs text-emerald">
                <span className="status-dot" /> Open
              </span>
            </div>

            <div className="grid gap-2.5">
              {profileRows.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/5 bg-white/[.03] p-4">
                  <div className="font-mono text-[11px] tracking-widest text-faint uppercase">{label}</div>
                  <div className="mt-1 text-sm font-semibold text-ink">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-violet/20 bg-violet/5 p-4">
              <div className="font-mono text-[11px] tracking-widest text-violet uppercase">Positioning</div>
              <p className="mt-2 text-sm leading-6 text-muted">{profile.status}</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}
