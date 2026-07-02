export default function SectionTitle({ eyebrow, title, align = 'center', light = false }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left'}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${light ? 'text-white/70' : 'text-brand-red'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading font-semibold text-3xl md:text-4xl title-shape ${
          align !== 'center' ? 'align-left' : ''
        } ${light ? 'text-white' : 'text-brand-blue'}`}
      >
        {title}
      </h2>
    </div>
  )
}
