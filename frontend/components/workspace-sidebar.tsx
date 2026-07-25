'use client'

import { FileText, BookOpen, Brain, HelpCircle, Clock3 } from 'lucide-react'

const items = [
  {
    title: 'Notes',
    icon: FileText,
    active: true,
  },
  {
    title: 'Summary',
    icon: BookOpen,
    comingSoon: true,
  },
  {
    title: 'Flashcards',
    icon: Brain,
    comingSoon: true,
  },
  {
    title: 'Quiz',
    icon: HelpCircle,
    comingSoon: true,
  },
]

export default function WorkspaceSidebar() {
  return (
    <aside className="w-72 border-r border-border bg-card/40 backdrop-blur-xl">
      <div className="border-b border-border p-6">
        <h2 className="text-2xl font-bold">
          📚 QuickNotesLab
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          AI Study Workspace
        </p>
      </div>

      <nav className="space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.title}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all ${
                item.active
                  ? 'bg-brand-purple text-white'
                  : 'hover:bg-muted'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                {item.title}
              </div>

              {item.comingSoon && (
                <span className="flex items-center gap-1 rounded-full bg-yellow-500/20 px-2 py-1 text-[10px] font-semibold text-yellow-400">
                  <Clock3 size={10} />
                  Soon
                </span>
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}