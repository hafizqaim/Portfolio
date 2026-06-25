import Reveal from './Reveal'

// Shared section heading + wrapper.
export function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="mb-12 max-w-[680px]">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3.5 font-display text-[clamp(28px,4.5vw,42px)] font-bold leading-[1.05] tracking-[-0.02em]">
        {title}
      </h2>
      {sub && <p className="mt-3.5 text-[16px] text-muted">{sub}</p>}
    </Reveal>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-[1180px] px-7 py-20 ${className}`}>
      {children}
    </section>
  )
}

// Renders **bold** spans inside otherwise plain text.
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <b key={i} className="font-semibold text-ink">
            {p.slice(2, -2)}
          </b>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}
