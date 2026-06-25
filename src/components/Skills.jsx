import { skillGroups } from '../data/skills'
import { Section, SectionHead } from './Section'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHead
        eyebrow="Toolkit"
        title="Skills & technologies."
        sub="The stack I reach for across research, training, and production."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={(i % 4) * 0.05}>
            <div className="h-full rounded-[14px] border border-line bg-bg2 p-5 transition hover:border-teal/35">
              <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-teal">{g.label}</h4>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[11.5px] text-muted transition hover:border-teal/35 hover:text-teal"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
