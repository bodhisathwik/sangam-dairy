import { useEffect, useState } from 'react'
import { heroSlides } from '../assets/images'
import { ScrollDownIndicator } from './FloatingWidgets'

const captions = [
  { html: ['Products made from', 'Authentic Ingredients', '& Certified Processes'] },
  { html: ['Sangam Milk Producer', 'Company Limited'], sub: '(A Company owned by Milk producers)' },
  { html: ['Goodness', 'you can', 'Trust'] },
  { html: ['Rich in Aroma', 'Great in Taste'] },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[420px] max-h-[720px] w-full overflow-hidden bg-brand-navy">
      {heroSlides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={captions[i]?.html.join(' ')}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      <div className="relative z-10 h-full container-xl flex flex-col justify-center">
        <div key={active} className="max-w-xl animate-fadeInUp">
          {captions[active]?.html.map((line, idx) => (
            <h1
              key={idx}
              className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight drop-shadow-lg"
            >
              {line}
            </h1>
          ))}
          {captions[active]?.sub && (
            <p className="mt-3 text-white/90 text-sm md:text-base">{captions[active].sub}</p>
          )}
        </div>
      </div>

      <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>

      <ScrollDownIndicator />
    </section>
  )
}
