import { MonitorPlay, GraduationCap, BookOpen, School, Presentation, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const platforms = [
  { icon: MonitorPlay, name: 'YouTube', desc: 'Any public lecture, tutorial or playlist.', status: 'available' as const },
  { icon: GraduationCap, name: 'Coursera', desc: 'University courses and specializations.', status: 'soon' as const },
  { icon: Presentation, name: 'Udemy', desc: 'Skill courses and bootcamps.', status: 'soon' as const },
  { icon: School, name: 'NPTEL', desc: 'Engineering lectures from IITs & IISc.', status: 'soon' as const },
  { icon: BookOpen, name: 'Khan Academy', desc: 'Foundational concepts and exercises.', status: 'soon' as const },
]

export function Platforms() {
  return (
    <section id="roadmap" className="relative px-4 py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-brand-cyan">Roadmap</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Supported platforms
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Start with YouTube today. We&apos;re expanding to every place you
            learn — one platform at a time.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => {
            const available = p.status === 'available'
            return (
              <div
                key={p.name}
                className={cn(
                  'glass glow-border group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1',
                  available
                    ? 'border-brand-purple/40 shadow-xl shadow-brand-purple/10'
                    : 'border-border',
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/25 to-brand-blue/25 ring-1 ring-inset ring-border transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="size-5 text-brand-cyan" />
                  </div>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
                      available
                        ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-primary-foreground'
                        : 'border border-border text-muted-foreground',
                    )}
                  >
                    {available && <Check className="size-3" />}
                    {available ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            )
          })}

          {/* teaser card */}
          <div className="glass relative flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-6 text-center">
            <p className="text-sm font-medium text-foreground">More on the way</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              edX, MIT OCW, podcasts and your own uploads are next on the
              roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
