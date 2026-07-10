export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base deep-black gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,oklch(0.2_0.06_285)_0%,var(--background)_45%)]" />

      {/* floating blurred circles — extremely subtle */}
      <div className="animate-float-slow absolute -left-24 top-24 size-[26rem] rounded-full bg-brand-purple/15 blur-[140px]" />
      <div className="animate-float-slower absolute -right-20 top-40 size-[24rem] rounded-full bg-brand-blue/15 blur-[140px]" />
      <div className="animate-float-slow absolute left-1/3 top-[70%] size-[22rem] rounded-full bg-brand-cyan/10 blur-[150px]" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
    </div>
  )
}
