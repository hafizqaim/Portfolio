import { profile } from '../data/profile'
import Reveal from './Reveal'
import ContactForm from './ContactForm'
import { DownloadIcon, GitHubIcon, LinkIcon, LinkedInIcon, MailIcon } from './icons'

const links = [
  { label: 'Email', href: `mailto:${profile.links.email}`, Icon: MailIcon },
  { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon, ext: true },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon, ext: true },
  { label: 'Linktree', href: profile.links.linktree, Icon: LinkIcon, ext: true },
  { label: 'Resume', href: profile.resumeUrl, Icon: DownloadIcon, ext: true },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-7">
        <Reveal>
          <div className="gradient-border glass grid overflow-hidden rounded-[32px] shadow-[0_50px_120px_-40px_rgba(0,0,0,.8)] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden border-b border-white/5 p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(124,58,237,.16),transparent_60%),radial-gradient(60%_50%_at_90%_100%,rgba(6,182,212,.1),transparent_60%)]" />
              <div className="relative">
                <span className="eyebrow">Let's build</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-5xl">
                  Have a problem worth <span className="serif-i text-gradient">pointing a model at?</span>
                </h2>
                <p className="mt-5 text-base leading-8 text-muted">
                  I am open to AI/ML Engineer roles and high-signal freelance builds. Send the shape of the problem,
                  the data you have, and what success should look like.
                </p>

                <div className="mt-8 grid gap-2.5">
                  {links.map(({ label, href, Icon, ext }) => (
                    <a
                      key={label}
                      href={href}
                      {...(ext ? { target: '_blank', rel: 'noopener' } : {})}
                      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[.03] px-4 py-3 transition hover:border-violet/30 hover:bg-white/[.06]"
                    >
                      <span className="inline-flex items-center gap-3 text-sm font-semibold text-ink">
                        <span className="text-violet transition group-hover:text-cyan">
                          <Icon width={17} height={17} />
                        </span>
                        {label}
                      </span>
                      <span className="font-mono text-xs text-faint transition group-hover:text-cyan">open</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-xs tracking-widest text-violet uppercase">Contact form</div>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">Tell me the brief.</h3>
                </div>
                <span className="hidden rounded-full border border-emerald/25 bg-emerald/5 px-3 py-1.5 font-mono text-xs text-emerald sm:inline-flex">
                  fast reply
                </span>
              </div>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
