import { useState } from 'react'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const inputClass =
  'w-full rounded-xl border border-white/8 bg-white/[.03] px-4 py-3.5 text-sm text-ink placeholder:text-faint transition focus:border-violet/50 focus:bg-white/[.05] focus:outline-none'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (!ACCESS_KEY) {
      setStatus('error')
      setError('Form is not configured yet - missing Web3Forms access key.')
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
      <div className="rounded-3xl border border-emerald/25 bg-emerald/5 px-5 py-8 text-center">
        <p className="font-display text-2xl font-bold text-emerald">Message sent</p>
        <p className="mt-2 text-sm text-muted">Thanks for reaching out. I will get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 rounded-full border border-line2 px-5 py-2.5 font-display text-sm font-semibold text-ink transition hover:border-cyan/50 hover:text-cyan"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid gap-3 sm:grid-cols-2">
        <input type="text" name="name" placeholder="Your name" required className={inputClass} />
        <input type="email" name="email" placeholder="Your email" required className={inputClass} />
      </div>
      <textarea
        name="message"
        placeholder="What are you building?"
        required
        rows={5}
        className={`${inputClass} mt-3 resize-none`}
      />

      {status === 'error' && (
        <p className="mt-3 rounded-xl border border-rose/25 bg-rose/5 px-4 py-3 text-sm text-rose">{error}</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="button-primary mt-4 disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
