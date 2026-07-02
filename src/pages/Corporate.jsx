import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { operationAreas, aboutUs } from '../data/siteData'
import { whyChoose, gallery } from '../assets/images'

const management = [
  { name: 'Chairman', role: 'Board of Directors', note: 'Leads a 14-member farmer-elected board.' },
  { name: 'Managing Director', role: 'Executive Leadership', note: 'Oversees day-to-day operations across all plants.' },
  { name: 'Director \u2013 Procurement', role: 'Milk Procurement', note: 'Coordinates collection across 1.5 lakh+ producers.' },
  { name: 'Director \u2013 Quality', role: 'Quality Assurance', note: 'Owns lab testing and certification compliance.' },
]

const csrActivities = [
  'Social welfare schemes for milk producer families.',
  'Veterinary camps and cattle health support in villages.',
  "Support for women's self-help groups in operational districts.",
  'Scholarships and education support for farmer children.',
]

export default function Corporate() {
  return (
    <>
      <PageHero
        title="Corporate"
        subtitle="A farmer-owned organisation built on trust, transparency and shared growth."
      />

      <section id="founders" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
          <img src={whyChoose.main} alt="Our Founders" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
          <div>
            <SectionTitle eyebrow="Where it began" title="Our Founders" align="left" />
            <p className="text-gray-600 leading-relaxed">
              {aboutUs.paragraphs[0]} {aboutUs.paragraphs[1]}
            </p>
          </div>
        </div>
      </section>

      <section id="management" className="py-16 md:py-20 bg-[#f5f9ff] scroll-mt-24">
        <div className="container-xl">
          <SectionTitle eyebrow="Guiding the cooperative" title="Management" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((m) => (
              <div key={m.name} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-heading font-bold text-xl mb-4">
                  {m.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </div>
                <h3 className="font-semibold text-gray-800">{m.name}</h3>
                <p className="text-xs text-brand-red font-medium mb-2">{m.role}</p>
                <p className="text-xs text-gray-500">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="milestones" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container-xl">
          <SectionTitle eyebrow="Journey since 1977" title="Milestones" />
          <div className="relative pl-6 border-l-2 border-brand-blue/20 space-y-6 max-w-3xl mx-auto">
            {operationAreas.map((a, i) => (
              <div key={i} className="relative pl-4">
                <span className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-brand-blue" />
                <p className="font-heading font-bold text-brand-blue">{a.year}</p>
                <p className="text-sm text-gray-600">Operations expanded to {a.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="csr" className="py-16 md:py-20 bg-[#f5f9ff] scroll-mt-24">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle eyebrow="Giving back" title="CSR Activities" align="left" />
            <ul className="space-y-3">
              {csrActivities.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-brand-red" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <img src={gallery[1]} alt="CSR activities" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
        </div>
      </section>

      <section id="infrastructure" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container-xl">
          <SectionTitle eyebrow="State of the art facilities" title="Infrastructure" />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 bg-[#f5f9ff]">
              <h3 className="font-heading font-semibold text-brand-blue mb-2">Guntur, Andhra Pradesh</h3>
              <p className="text-sm text-gray-600">
                State of the art dairy with 8.5 lakh litres per day processing capacity.
              </p>
            </div>
            <div className="rounded-xl p-6 bg-[#f5f9ff]">
              <h3 className="font-heading font-semibold text-brand-blue mb-2">Miryalaguda, Telangana</h3>
              <p className="text-sm text-gray-600">
                Satellite dairy with 1.5 lakh litres per day capacity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
