import { profile } from '../data/profile'
import Reveal from './Reveal'
import { GitHubIcon, LinkedInIcon, MailIcon, LinkIcon, DownloadIcon } from './icons'

const links = [
  { label: 'Email', href: `mailto:${profile.links.email}`, Icon: MailIcon },
  { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon, ext: true },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon, ext: true },
  { label: 'Linktree', href: profile.links.linktree, Icon: LinkIcon, ext: true },
  { label: 'Resume', href: profile.resumeUrl, Icon: DownloadIcon, ext: true },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-7 py-20">
      <Reveal>
        <div className="relative mx-auto max-w-[760px] overflow-hidden rounded-[18px] border border-line bg-bg2 p-12 text-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(500px 260px at 50% 0%, rgba(70,224,200,.12), transparent 70%)' }}
          />
          <div className="relative">
            <span className="eyebrow justify-center">Let's talk</span>
            <h2 className="mx-auto mt-4 max-w-[14em] font-display text-[clamp(28px,5vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
              Have a problem worth pointing a model at?
            </h2>
            <p className="mx-auto mb-8 mt-3.5 max-w-[42em] text-[16px] text-muted">
              I'm open to AI/ML Engineer roles and freelance builds. Tell me what you're working on — I usually reply fast.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {links.map(({ label, href, Icon, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: '_blank', rel: 'noopener' } : {})}
                  className="inline-flex items-center gap-2 rounded-[10px] border border-line2 px-5 py-3 font-mono text-[12.5px] tracking-[0.05em] transition hover:-translate-y-0.5 hover:border-teal/35 hover:text-teal"
                >
                  <Icon width={15} height={15} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
