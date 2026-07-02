import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const openings = [
  { title: 'Quality Control Executive', location: 'Guntur, AP', type: 'Full-time' },
  { title: 'Procurement Officer', location: 'Vijayawada, AP', type: 'Full-time' },
  { title: 'Plant Supervisor', location: 'Miryalaguda, TS', type: 'Full-time' },
  { title: 'Distribution Coordinator', location: 'Hyderabad, TS', type: 'Full-time' },
]

export default function Careers() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero title="Careers" subtitle="Build your career with one of South India's most trusted dairy brands." />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <SectionTitle eyebrow="Join our team" title="Current Openings" />
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {openings.map((o) => (
              <div key={o.title} className="bg-[#f5f9ff] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-semibold text-brand-blue mb-1">{o.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{o.location} &bull; {o.type}</p>
                <a
                  href="#apply"
                  className="text-xs font-semibold uppercase tracking-wide text-brand-red"
                >
                  Apply now &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-16 md:py-20 bg-[#f5f9ff] scroll-mt-24">
        <div className="container-xl max-w-2xl">
          <SectionTitle eyebrow="Tell us about yourself" title="Application Form" />
          {submitted ? (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <p className="text-brand-blue font-heading text-xl font-semibold mb-2">
                Thank you for applying!
              </p>
              <p className="text-sm text-gray-500">
                Our HR team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Full Name"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
              </div>
              <input
                required
                placeholder="Position Applying For"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
              />
              <textarea
                rows={4}
                placeholder="Tell us a little about yourself"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
              />
              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-medium py-3 rounded-md hover:bg-brand-blueDark transition-colors"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
