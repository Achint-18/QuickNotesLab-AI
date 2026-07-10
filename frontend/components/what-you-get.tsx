import {
  FileText,
  Brain,
  HelpCircle,
  Layers,
  BarChart3,
  Clock,
  Search,
  BookMarked,
} from 'lucide-react'

const items = [
  { icon: FileText, title: 'Smart Notes', desc: 'Structured, exam-ready notes from any lecture.' },
  { icon: Brain, title: 'AI Tutor', desc: 'Ask anything and get context-aware answers.' },
  { icon: HelpCircle, title: 'AI Quiz', desc: 'Auto-generated quizzes that test real understanding.' },
  { icon: Layers, title: 'Flashcards', desc: 'Spaced-repetition cards built from key concepts.' },
  { icon: BarChart3, title: 'Progress Dashboard', desc: 'Track mastery, streaks and weak spots.' },
  { icon: Clock, title: 'Lecture Timeline', desc: 'Jump to any topic with chapter timestamps.' },
  { icon: Search, title: 'Semantic Search', desc: 'Find any moment by meaning, not keywords.' },
  { icon: BookMarked, title: 'Source References', desc: 'Every answer is grounded in the lecture.' },
]

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative px-4 py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-cyan">What you get</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A complete study workspace, generated for you
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every lecture becomes an interactive set of tools designed to help
            you learn faster and remember longer.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="glass glow-border group relative rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/25 to-brand-blue/25 ring-1 ring-inset ring-border transition-transform duration-300 group-hover:scale-110">
                <item.icon className="size-5 text-brand-cyan" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
