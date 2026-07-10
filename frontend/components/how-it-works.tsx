import { Link2, Cpu, GraduationCap } from 'lucide-react'

const steps = [
  {
    icon: Link2,
    step: 'Step 1',
    title: 'Paste URL',
    desc: 'Drop in any YouTube lecture link — a single video or an entire playlist.',
  },
  {
    icon: Cpu,
    step: 'Step 2',
    title: 'AI processes lecture',
    desc: 'Our AI transcribes, understands and structures the content in seconds.',
  },
  {
    icon: GraduationCap,
    step: 'Step 3',
    title: 'Study Workspace ready',
    desc: 'Notes, flashcards, quizzes, a tutor and a timeline — all ready to study.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-cyan">How it works</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            From lecture to mastery in three steps
          </h2>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="glass relative flex size-22 items-center justify-center rounded-2xl border border-border">
                <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue">
                  <s.icon className="size-6 text-primary-foreground" />
                </div>
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-brand-cyan text-xs font-semibold text-background">
                  {i + 1}
                </span>
              </div>
              <span className="mt-6 text-xs font-medium uppercase tracking-widest text-brand-cyan">
                {s.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
