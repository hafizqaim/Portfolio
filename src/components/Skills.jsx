import { skillGroups } from '../data/skills'
import { Section, SectionHead } from './Section'
import Reveal from './Reveal'

const accents = [
  'text-violet border-violet/20 bg-violet/5',
  'text-cyan border-cyan/20 bg-cyan/5',
  'text-pink border-pink/20 bg-pink/5',
]

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHead
        eyebrow="Toolkit"
        title="A stack built for models that leave the notebook."
        sub="From training and retrieval to APIs, cloud deployment, and monitoring."
        align="center"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const accent = accents[index % accents.length]
          return (
            <Reveal key={group.label} delay={(index % 4) * 0.04}>
              <article className="glass group h-full overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-violet/30">
                <div className="flex items-center justify-between gap-4 border-b border-white/5 px-5 py-4">
                  <span className={`inline-flex rounded-full border px-3 py-1.5 font-mono text-xs tracking-widest uppercase ${accent}`}>
                    {group.label}
                  </span>
                  <span className="font-display text-3xl font-bold text-white/10 transition group-hover:text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 p-5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/8 bg-white/[.03] px-3 py-2 text-sm font-medium text-muted transition group-hover:border-white/15 group-hover:text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
