import { SiteBackground } from '@/components/site-background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProcessingPreview } from '@/components/processing-preview'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { WhatYouGet } from '@/components/what-you-get'
import { Platforms } from '@/components/platforms'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteBackground />
      <Navbar />
      <Hero />
      <ProcessingPreview />
      <Features />
      <HowItWorks />
      <WhatYouGet />
      <Platforms />
      <FAQ />
      <Footer />
    </main>
  )
}
