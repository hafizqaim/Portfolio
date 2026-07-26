import { experience } from '../data/experience'
import { Section, SectionHead } from './Section'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHead
        eyebrow="Experience"
        title="A timeline of shipping, learning, and production work."
        sub="Research, freelancing, internships, and teaching experience arranged as one practical engineering path."
      />

      <div className="relative">
        <div className="timeline-line absolute left-5 top-0 hidden h-full w-px md:block" />
        <div className="grid gap-4">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="glass group grid gap-4 rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-violet/30 md:grid-cols-[190px_1fr] md:p-6 md:pl-14">
                <div className="relative">
                  <span className="absolute -left-[41px] top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-bg bg-gradient-to-br from-violet to-cyan shadow-[0_0_14px_rgba(139,92,246,.55)] md:block" />
                  <div className="inline-flex rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1.5 font-mono text-xs text-cyan">
                    {item.when}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <div className="mt-2 font-mono text-sm text-violet">{item.org}</div>
                  <p className="mt-3 max-w-[58rem] text-base leading-7 text-muted">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
