import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const services = [
  { title: 'Artificial Insemination', desc: 'Doorstep AI services to improve herd genetics and productivity.' },
  { title: 'Veterinary Care', desc: 'Mobile veterinary units and regular health camps for cattle.' },
  { title: 'Extension Services', desc: 'Farmer training on best practices in animal husbandry.' },
  { title: 'Milk Testing', desc: 'On-the-spot fat and SNF testing at collection centres.' },
]

const welfareSchemes = [
  { title: 'Bonus Distribution', desc: 'Yearly surpluses from business returned to farmers as bonus.' },
  { title: 'Insurance Support', desc: 'Cattle insurance schemes to protect farmer livelihoods.' },
  { title: 'Education Support', desc: "Scholarships for the children of milk producer families." },
  { title: 'Women Empowerment', desc: 'Programs supporting women-led dairy self-help groups.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        title="Tech. Services & Welfare Schemes"
        subtitle="Supporting our farmer producers with technical services and social welfare programs."
      />

      <section id="services" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container-xl">
          <SectionTitle eyebrow="For our farmer members" title="Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[#f5f9ff] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-semibold text-brand-blue mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="welfare" className="py-16 md:py-20 bg-[#f5f9ff] scroll-mt-24">
        <div className="container-xl">
          <SectionTitle eyebrow="Empowering producers" title="Welfare Schemes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {welfareSchemes.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-semibold text-brand-blue mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
