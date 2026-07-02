export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative py-16 md:py-24 bg-brand-gradient text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_40%)]" />
      <div className="relative z-10 container-xl text-center">
        <h1 className="font-heading font-bold text-3xl md:text-5xl mb-3">{title}</h1>
        {subtitle && <p className="max-w-2xl mx-auto text-white/90 text-sm md:text-base">{subtitle}</p>}
      </div>
    </section>
  )
}
