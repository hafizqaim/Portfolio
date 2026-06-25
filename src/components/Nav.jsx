import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

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
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
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
    <header
      className="sticky top-0 z-50 border-b transition-colors"
      style={{
        backdropFilter: 'blur(14px)',
        background: scrolled ? 'rgba(10,14,23,.82)' : 'rgba(10,14,23,.55)',
        borderColor: 'var(--color-line)',
      }}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-7 py-3.5">
        <a href="#home" onClick={go('home')} className="flex items-center gap-3">
          <span className="relative h-[30px] w-[30px] flex-none rounded-[7px] border border-teal/35"
            style={{ background: 'radial-gradient(circle at 50% 50%,rgba(70,224,200,.18),transparent 70%)' }}>
            <span className="absolute left-1/2 top-[5px] bottom-[5px] w-px -translate-x-1/2 bg-teal/80" />
            <span className="absolute top-1/2 left-[5px] right-[5px] h-px -translate-y-1/2 bg-teal/80" />
          </span>
          <span className="font-display text-[17px] font-bold tracking-tight leading-none">
            {profile.name.split(' ').slice(-2).join(' ')}
            <small className="mt-0.5 block font-mono text-[9.5px] font-normal uppercase tracking-[0.18em] text-faint">
              {profile.role}
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={go(s.id)}
              className={`rounded-lg px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.06em] transition ${
                active === s.id
                  ? 'bg-teal/12 text-teal'
                  : 'text-muted hover:bg-bg3 hover:text-ink'
              }`}
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener"
            className="ml-1.5 rounded-lg border border-line2 px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.06em] text-ink transition hover:border-teal/35 hover:text-teal"
          >
            Resume
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-line px-3 py-2 font-mono text-[12px] text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-bg2 px-5 py-3 md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={go(s.id)}
              className="rounded-lg px-3 py-2.5 font-mono text-[13px] uppercase tracking-[0.06em] text-muted"
            >
              {s.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noopener"
            className="rounded-lg px-3 py-2.5 font-mono text-[13px] uppercase tracking-[0.06em] text-teal">
            Download Resume
          </a>
        </nav>
      )}
    </header>
  )
}
