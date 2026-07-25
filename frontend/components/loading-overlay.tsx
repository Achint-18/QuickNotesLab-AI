'use client'

import { Loader2, CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const steps = [
  'Validating YouTube URL',
  'Extracting transcript',
  'Understanding concepts',
  'Writing structured notes',
  'Preparing your workspace',
]

interface LoadingOverlayProps {
  loading: boolean
  completed: boolean
}

export default function LoadingOverlay({
  loading,
  completed,
}: LoadingOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (!loading) {
      setCurrentStep(0)
      return
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 2200)

    return () => clearInterval(interval)
  }, [loading])

  useEffect(() => {
    if (completed) {
      setCurrentStep(steps.length)
    }
  }, [completed])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background/90 backdrop-blur-xl">

      <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-10 shadow-2xl">

        <div className="flex flex-col items-center">

          <Loader2 className="mb-6 h-12 w-12 animate-spin text-brand-cyan" />

          <h2 className="text-3xl font-bold">
            QuickNotesLab AI
          </h2>

          <p className="mt-2 text-muted-foreground">
            Analyzing your lecture...
          </p>

        </div>

        <div className="mt-10 space-y-4">

          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3"
            >
              {index < currentStep ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : index === currentStep && !completed ? (
                <Loader2 className="h-5 w-5 animate-spin text-brand-cyan" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-muted-foreground/30" />
              )}

              <span
                className={
                  index <= currentStep
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }
              >
                {step}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-10">

          <div className="h-2 overflow-hidden rounded-full bg-secondary">

            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan transition-all duration-700"
              style={{
                width: `${(currentStep / steps.length) * 100}%`,
              }}
            />

          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            This usually takes 10–30 seconds.
          </p>

        </div>

      </div>

    </div>
  )
}