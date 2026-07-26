import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { DownloadIcon, MenuIcon, XIcon } from './icons'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-[1140px] items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-line bg-bg/85 shadow-[0_24px_60px_-20px_rgba(0,0,0,.7)]'
            : 'border-white/5 bg-bg/55'
        }`}
      >
        <a href="#home" onClick={go('home')} className="group flex items-center gap-3">
          <span className="gradient-border relative grid h-10 w-10 place-items-center rounded-xl bg-surface">
            <span className="font-display text-base font-bold text-gradient">QA</span>
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-bold tracking-tight">
              {profile.name.split(' ').slice(-2).join(' ')}
            </span>
            <span className="mt-1 block font-mono text-[11px] tracking-wide text-faint">{profile.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={go(section.id)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                active === section.id
                  ? 'bg-white/10 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,.08)]'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener"
            className="button-primary hidden !min-h-0 !w-auto !px-4 !py-2 !text-[13px] sm:inline-flex"
          >
            <DownloadIcon width={14} height={14} /> Resume
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line2 text-ink lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <XIcon width={18} height={18} /> : <MenuIcon width={18} height={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-[1140px] rounded-2xl border border-line bg-bg2/95 p-3 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={go(section.id)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  active === section.id ? 'bg-white/10 text-ink' : 'text-muted'
                }`}
              >
                {section.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-cyan"
            >
              <DownloadIcon width={16} height={16} /> Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
