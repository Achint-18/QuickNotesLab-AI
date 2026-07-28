'use client'

import { Copy, Download } from 'lucide-react'

export default function WorkspaceHeader() {
  const copyNotes = async () => {
    const notes = localStorage.getItem('notes')

    if (!notes) return

    await navigator.clipboard.writeText(notes)
    alert('Notes copied to clipboard!')
  }

  const downloadMarkdown = () => {
    const notes = localStorage.getItem('notes')

    if (!notes) return

    const blob = new Blob([notes], {
      type: 'text/markdown',
    })

    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'QuickNotesLab-Notes.md'
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <header className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-b border-border bg-background/80 px-4 md:px-8 py-5 backdrop-blur-xl">
      <div>
        <h1 className="text-3xl font-bold">
          📝 AI Generated Notes
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Generated from your YouTube lecture.
        </p>
      </div>

      <div className="flex w-full md:w-auto gap-3">
        <button
          onClick={copyNotes}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 transition hover:bg-muted"
        >
          <Copy size={18} />
          Copy
        </button>

        <button
          onClick={downloadMarkdown}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl bg-brand-purple px-4 py-2 text-white transition hover:opacity-90"
        >
          <Download size={18} />
          Download
        </button>
      </div>
    </header>
  )
}