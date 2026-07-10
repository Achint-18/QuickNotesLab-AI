import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'How it Works', 'Roadmap', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'Community', 'Privacy', 'Terms'],
  },
]

export function Footer() {
  return (
    <footer id="about" className="relative px-4 pb-12 pt-8 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        {/* CTA band */}
        <div className="glass relative overflow-hidden rounded-3xl border border-border p-10 text-center sm:p-16">
          <div className="absolute -left-16 -top-16 size-64 rounded-full bg-brand-purple/25 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 size-64 rounded-full bg-brand-blue/25 blur-3xl" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to build your smartest study workspace?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Paste a lecture and let QuickNotesLab AI do the rest — notes,
              quizzes, flashcards and a tutor in seconds.
            </p>
            <Button className="mt-8 h-12 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue px-8 text-primary-foreground shadow-lg shadow-brand-purple/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/40 hover:brightness-110 active:scale-[0.98]">
              <Sparkles className="size-4" />
              Start Learning
            </Button>
          </div>
        </div>

        {/* links */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple via-brand-blue to-brand-cyan">
                <Sparkles className="size-4 text-primary-foreground" />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                QuickNotesLab <span className="text-gradient">AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI-powered study workspace that turns YouTube lectures into
              notes, quizzes, flashcards and an intelligent tutor.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} QuickNotesLab AI. All rights reserved.</p>
          <p>Built for curious minds everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
