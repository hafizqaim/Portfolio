import { experience } from '../data/experience'
import { Section, SectionHead } from './Section'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <Section id="experience" className="!py-20">
      <SectionHead
        eyebrow="Experience"
        title="Where I've built things."
        sub="Roles, research, and the work that shaped how I ship."
      />
      <div>
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <div className="grid gap-6 border-t border-line py-6 md:grid-cols-[170px_1fr]">
              <div className="font-mono text-[12px] tracking-[0.04em] text-amber">{e.when}</div>
              <div>
                <h4 className="font-display text-[19px] font-bold">{e.title}</h4>
                <div className="mb-2.5 mt-1 font-mono text-[12px] text-teal">{e.org}</div>
                <p className="text-[14.5px] text-muted">{e.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
