import { profile } from '../data/profile'
import { Section, SectionHead, RichText } from './Section'
import Reveal from './Reveal'

const profileRows = [
  ['ROLE', profile.role],
  ['EDU', profile.education],
  ['BASE', profile.location],
  ['WORK', profile.workMode],
  ['GITHUB', `@${profile.handle}`],
]

export default function About() {
  return (
    <Section id="about">
      <SectionHead
        eyebrow="About"
        title="Engineer at the intersection of ML research and shipping."
      />
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4">
          {profile.bio.map((p, i) => (
            <p key={i} className="text-[16px] text-muted">
              <RichText text={p} />
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[14px] border border-line bg-bg2 p-6">
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-teal">// Profile</h4>
            {profileRows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3.5 border-b border-line py-2.5 text-[14px] last:border-0">
                <span className="font-mono text-[12px] text-faint">{k}</span>
                <span className="text-right font-medium">{v}</span>
              </div>
            ))}
            <div className="flex justify-between gap-3.5 py-2.5 text-[14px]">
              <span className="font-mono text-[12px] text-faint">STATUS</span>
              <span className="flex items-center gap-2 text-right font-medium text-teal">
                <span className="dot" /> {profile.available ? 'Open to roles' : 'Busy'}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
