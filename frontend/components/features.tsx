import {
  FileText,
  Brain,
  Layers,
  HelpCircle,
  TrendingUp,
  Clock,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'AI Notes',
    desc: 'Structured, exam-ready notes generated automatically from any lecture — summarized, organized and searchable.',
  },
  {
    icon: Brain,
    title: 'AI Tutor',
    desc: 'Ask questions about the lecture and get instant, context-aware answers from a tutor that actually watched it. [COMING SOON]',
  },
  {
    icon: Layers,
    title: 'Flashcards',
    desc: 'Spaced-repetition flashcards created from key concepts so you remember more with less effort. [COMING SOON]',
  },
  {
    icon: HelpCircle,
    title: 'AI Quiz',
    desc: 'Auto-generated quizzes that test your understanding and pinpoint exactly where you need to review.[COMING SOON]',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    desc: 'A study dashboard that visualizes mastery, streaks and weak spots across every subject you learn.[COMING SOON]',
  },
  {
    icon: Clock,
    title: 'Lecture Timeline',
    desc: 'Jump to any moment with a chapter-by-chapter timeline mapping topics to timestamps.[COMING SOON]',
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-4 py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-cyan">Everything you need</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            One workspace. Every study tool.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            QuickNotesLab AI transforms passive watching into an active,
            structured learning system.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass glow-border group relative rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-purple/10"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/25 to-brand-blue/25 ring-1 ring-inset ring-border transition-all duration-300 group-hover:scale-110 group-hover:ring-brand-purple/40">
                <f.icon className="size-6 text-brand-cyan" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
