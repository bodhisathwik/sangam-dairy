import SectionTitle from '../components/SectionTitle'
import QAIcon from '../components/QAIcon'
import BatchQualityChecker from '../components/BatchQualityChecker'
import { qualityAssurance } from '../data/siteData'
import { whyChoose } from '../assets/images'

const certifications = [
  'FSSAI License',
  'ISO 22000:2018',
  'HACCP Certified',
  'AGMARK Approved',
]

export default function QualityAssurance() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-brand-gradient text-white overflow-hidden">
        <img
          src={whyChoose.main}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 container-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-3">
            Uncompromising standards, every single day
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">
            {qualityAssurance.title}
          </h1>
          <p className="max-w-2xl mx-auto text-white/90">{qualityAssurance.intro}</p>
        </div>
      </section>

      <section style={{ padding: '70px 20px', background: '#f5f9ff' }}>
        <div style={{ maxWidth: 1200, margin: 'auto' }}>
          <SectionTitle eyebrow="Farm to home" title="Our quality journey" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityAssurance.pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-brand-blue flex items-center justify-center text-white shrink-0">
                    <QAIcon name={p.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-blue mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <BatchQualityChecker />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-xl">
          <SectionTitle eyebrow="Trust, verified" title="Certifications" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((c) => (
              <div
                key={c}
                className="border border-brand-blue/20 rounded-xl p-6 text-center hover:border-brand-blue hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                  <QAIcon name="certification" className="w-7 h-7" />
                </div>
                <p className="font-medium text-gray-700 text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
