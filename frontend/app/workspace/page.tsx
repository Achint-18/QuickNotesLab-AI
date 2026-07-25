'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import WorkspaceSidebar from '@/components/workspace-sidebar'
import WorkspaceHeader from '@/components/workspace-header'

export default function WorkspacePage() {
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes')

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  return (
    <main className="flex h-screen bg-background text-foreground">
      <WorkspaceSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <WorkspaceHeader />

        <div className="flex-1 overflow-y-auto p-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card/50 p-10 shadow-2xl">

            {notes ? (
              <article
                className="
                max-w-none
                space-y-4
                leading-8

                [&_h1]:mb-6
                [&_h1]:text-5xl
                [&_h1]:font-bold

                [&_h2]:mt-10
                [&_h2]:mb-4
                [&_h2]:text-3xl
                [&_h2]:font-semibold

                [&_h3]:mt-8
                [&_h3]:mb-3
                [&_h3]:text-2xl
                [&_h3]:font-semibold

                [&_p]:text-gray-300

                [&_strong]:text-white

                [&_li]:my-2

                [&_pre]:overflow-x-auto
                [&_pre]:rounded-xl
                [&_pre]:border
                [&_pre]:border-neutral-700
                [&_pre]:bg-neutral-950
                [&_pre]:p-5

                [&_code]:rounded
                [&_code]:bg-neutral-900
                [&_code]:px-1
                [&_code]:py-0.5
                [&_code]:text-cyan-400

                [&_table]:w-full
                [&_table]:border-collapse

                [&_th]:border
                [&_th]:p-2

                [&_td]:border
                [&_td]:p-2

                [&_blockquote]:border-l-4
                [&_blockquote]:border-brand-purple
                [&_blockquote]:pl-4
                "
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {notes}
                </ReactMarkdown>
              </article>
            ) : (
              <div className="flex h-96 items-center justify-center text-muted-foreground">
                Loading Notes...
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  )
}