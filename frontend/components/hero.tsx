'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Sparkles, Play, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { api } from '@/services/api'
import LoadingOverlay from '@/components/loading-overlay'




const trust = [
  'Works with any public YouTube lecture',
  'Supports lectures up to 12 hours',
  'Powered by Google Gemini',
  'Built for all type students',
]

export function Hero() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')
  const [completed, setCompleted] = useState(false)


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!url.trim()) return

    try {
      setError('')
      setLoading(true)
      setCompleted(false)
      setNotes('')

      const response = await api.post('/ai/notes', {
        url,
      })

      const generatedNotes = response.data.notes
      setCompleted(true)

      await new Promise((resolve) => setTimeout(resolve, 600))
      localStorage.setItem('notes', generatedNotes)

      router.push('/workspace')
    } catch (err: any) {
      console.error(err)

      if (err.response?.status === 400) {
        setError('Please enter a valid YouTube URL.')
      } else if (err.response?.status === 404) {
        setError('Transcript not found for this video.')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
  <>
    <LoadingOverlay
      loading={loading}
      completed={completed}
    />

    <section id="top" className="relative px-4 pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="animate-fade-up glass mb-7 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-cyan opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-brand-cyan" />
          </span>
          AI Study Workspace for serious learners
        </div>

        <h1 className="animate-fade-up text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl">
          Turn Hours of Learning
          <br className="hidden sm:block" /> Into{' '}
          <span className="text-gradient">
            Minutes of Understanding.
          </span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Paste any YouTube lecture and instantly create an AI-powered study
          workspace with notes, quizzes, flashcards and an intelligent tutor.
        </p>

       

        <form
          
          onSubmit={handleSubmit}
          className="animate-fade-up group mt-10 flex w-full max-w-xl flex-col gap-2 rounded-2xl border border-border bg-card/60 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl transition-colors focus-within:border-brand-purple/50 sm:flex-row sm:items-center"
        >
          <div className="flex flex-1 items-center gap-2.5 px-3">
            <Play className="size-4 shrink-0 fill-brand-cyan text-brand-cyan" />

            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube lecture URL..."
              className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              aria-label="YouTube lecture URL"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="h-12 shrink-0 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue px-6 font-medium text-primary-foreground shadow-lg shadow-brand-purple/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/40 hover:brightness-110 active:scale-[0.98]"
          >
            <Sparkles className="mr-2 size-4" />
            {loading ? 'Generating...' : 'Start Learning'}
          </Button>
        </form>
        {error && (
  <div className="mt-4 max-w-xl rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
    {error}
  </div>
)}


        <div className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-muted-foreground">
          {trust.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5"
            >
              <ArrowRight className="size-3.5 shrink-0 text-brand-cyan" />
              {t}
            </span>
          ))}
        </div>

        {notes && (
          <div className="mt-14 w-full max-w-5xl rounded-2xl border border-border bg-card/70 p-8 text-left shadow-xl backdrop-blur">
            <h2 className="mb-6 text-3xl font-bold">
              📚 AI Notes
            </h2>

            <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-muted-foreground">
              {notes}
            </pre>
          </div>
        )}
      </div>
    </section>
</>
)
  
}