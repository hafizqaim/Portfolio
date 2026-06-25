import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-line py-8">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-7">
        <p className="font-mono text-[11px] tracking-[0.04em] text-faint">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-faint">
          <span className="dot" /> {profile.available ? 'Available for new opportunities' : 'Currently busy'}
        </p>
      </div>
    </footer>
  )
}
