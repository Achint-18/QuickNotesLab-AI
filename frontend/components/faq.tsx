'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What kind of videos can I use?',
    a: 'Any public YouTube lecture, tutorial or talk — single videos or full playlists. QuickNotesLab AI transcribes and understands the content automatically.',
  },
  {
    q: 'How accurate are the AI notes and quizzes?',
    a: 'Our models are tuned for educational content and generate structured, source-grounded notes. Every quiz question and flashcard is derived directly from the lecture.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. QuickNotesLab AI runs entirely in your browser. Just paste a URL and your study workspace is ready in seconds.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. The Free plan lets you process up to 3 lectures a month with AI notes and basic flashcards — no credit card required.',
  },
  {
    q: 'Can I use it for competitive exam prep?',
    a: 'Absolutely. Many UPSC, GATE and JEE aspirants use it to convert long lecture series into structured notes, flashcards and quizzes for revision.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-medium text-brand-cyan">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className="glass overflow-hidden rounded-2xl border border-border"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium sm:text-base">{f.q}</span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-brand-cyan transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
