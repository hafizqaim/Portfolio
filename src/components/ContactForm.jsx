import { useState } from 'react'

// Submits straight to Web3Forms (no backend needed) — free, unlimited,
// delivers to your email. Get a key at https://web3forms.com (instant,
// no account) and put it in .env as VITE_WEB3FORMS_KEY. See .env.example.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const inputClass =
  'w-full rounded-[10px] border border-line2 bg-bg px-4 py-3 text-[14.5px] text-ink placeholder:text-faint transition focus:border-teal/50 focus:outline-none'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (!ACCESS_KEY) {
      setStatus('error')
      setError('Form is not configured yet — missing Web3Forms access key.')
      return
    }

    setStatus('sending')
    setError('')

    const form = e.target
    const data = new FormData(form)
    data.append('access_key', ACCESS_KEY)
    data.append('subject', `Portfolio contact from ${data.get('name')}`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please try again, or email me directly.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-[10px] border border-teal/35 bg-teal/10 px-5 py-6 text-center">
        <p className="font-display text-[17px] font-semibold text-teal">Message sent ✓</p>
        <p className="mt-1.5 text-[14px] text-muted">Thanks for reaching out — I'll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 font-mono text-[12px] uppercase tracking-[0.06em] text-faint underline-offset-4 hover:text-teal hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <input type="text" name="name" placeholder="Your name" required className={inputClass} />
        <input type="email" name="email" placeholder="Your email" required className={inputClass} />
      </div>
      <textarea
        name="message"
        placeholder="What are you working on?"
        required
        rows={4}
        className={`${inputClass} mt-3.5 resize-none`}
      />

      {status === 'error' && <p className="mt-3 text-[13px] text-amber">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-teal px-5 py-3 font-mono text-[12.5px] font-bold uppercase tracking-[0.06em] text-[#04110e] transition hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(70,224,200,.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
