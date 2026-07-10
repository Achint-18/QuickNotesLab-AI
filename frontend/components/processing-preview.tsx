'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const stages = [
  'Extracting Transcript',
  'Understanding Lecture',
  'Creating Notes',
  'Building Flashcards',
  'Generating Quiz',
  'Preparing AI Tutor',
]

export function ProcessingPreview() {
  const [done, setDone] = useState(0)
  const [active, setActive] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // start the sequence when scrolled into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // advance the checkmarks, then loop after a pause
  useEffect(() => {
    if (!active) return
    if (done < stages.length) {
      const t = setTimeout(() => setDone((d) => d + 1), 700)
      return () => clearTimeout(t)
    }
    const reset = setTimeout(() => setDone(0), 2600)
    return () => clearTimeout(reset)
  }, [active, done])

  const progress = Math.round((done / stages.length) * 100)
  const complete = done >= stages.length

  return (
    <section className="relative px-4 pb-24 pt-4">
      <div ref={sectionRef} className="mx-auto max-w-2xl">
        <div className="glass glow-border relative overflow-hidden rounded-3xl border border-border p-6 shadow-2xl shadow-black/40 sm:p-8">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <span className="size-3 rounded-full bg-destructive/70" />
            <span className="size-3 rounded-full bg-brand-cyan/50" />
            <span className="size-3 rounded-full bg-brand-blue/50" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              quicknoteslab.ai/workspace
            </span>
          </div>

          {/* status */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {complete ? (
                <Check className="size-4 text-brand-cyan" />
              ) : (
                <Loader2 className="size-4 animate-spin text-brand-cyan" />
              )}
              <span className="text-sm font-medium">
                {complete ? 'Workspace ready' : 'AI Processing...'}
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              {progress}%
            </span>
          </div>

          {/* progress bar */}
          <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* stages */}
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {stages.map((stage, i) => {
              const isDone = i < done
              const isCurrent = i === done && !complete
              return (
                <li
                  key={stage}
                  className={cn(
                    'flex items-center gap-2.5 rounded-xl border border-border px-3 py-2.5 text-sm transition-all duration-500',
                    isDone
                      ? 'bg-brand-purple/10 text-foreground'
                      : 'bg-transparent text-muted-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-5 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                      isDone
                        ? 'scale-100 border-transparent bg-gradient-to-br from-brand-purple to-brand-blue'
                        : 'scale-90 border-border',
                    )}
                  >
                    {isDone ? (
                      <Check className="size-3 text-primary-foreground" />
                    ) : isCurrent ? (
                      <Loader2 className="size-3 animate-spin text-brand-cyan" />
                    ) : null}
                  </span>
                  {stage}
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Here&apos;s exactly what happens the moment you hit{' '}
          <span className="font-medium text-foreground">Start Learning</span>.
        </p>
      </div>
    </section>
  )
}
