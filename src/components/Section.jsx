import Reveal from './Reveal'

export function SectionHead({ eyebrow, title, sub, align = 'left' }) {
  const centered = align === 'center'

  return (
    <Reveal className={`mb-14 ${centered ? 'mx-auto max-w-[780px] text-center' : 'max-w-[760px]'}`}>
      <span className={`eyebrow ${centered ? 'justify-center' : ''}`}>{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-base leading-7 text-muted md:text-lg">{sub}</p>}
    </Reveal>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-7">{children}</div>
    </section>
  )
}

export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <b key={index} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </b>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  )
}
