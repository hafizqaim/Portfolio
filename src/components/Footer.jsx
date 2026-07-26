import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[1200px] bg-gradient-to-r from-transparent via-line2 to-transparent" />
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 sm:px-7">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <p className="inline-flex items-center gap-2.5 font-mono text-xs text-faint">
          <span className="status-dot" /> {profile.available ? 'Available for new opportunities' : 'Currently busy'}
        </p>
      </div>
    </footer>
  )
}
