import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { contactInfo } from '../data/siteData'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero title="Contact Us" subtitle="We would love to hear from you." />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle eyebrow="Reach out" title="Get in Touch" align="left" />
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <span className="block text-brand-blue font-semibold mb-1">Address</span>
                {contactInfo.address}
              </li>
              <li>
                <span className="block text-brand-blue font-semibold mb-1">Phone</span>
                {contactInfo.phones.join(' & ')}
              </li>
              <li>
                <span className="block text-brand-blue font-semibold mb-1">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-red">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <span className="block text-brand-blue font-semibold mb-1">Website</span>
                <a href={contactInfo.website} className="hover:text-brand-red">
                  {contactInfo.website}
                </a>
              </li>
            </ul>

            <div className="mt-8 rounded-xl overflow-hidden shadow-sm h-64">
              <iframe
                title="Sangam Dairy Location"
                className="w-full h-full border-0"
                loading="lazy"
                src="https://maps.google.com/maps?q=Vadlamudi%2C%20Guntur%2C%20Andhra%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          <div>
            {sent ? (
              <div className="bg-[#f5f9ff] rounded-xl p-8 text-center">
                <p className="text-brand-blue font-heading text-xl font-semibold mb-2">
                  Message sent!
                </p>
                <p className="text-sm text-gray-500">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="bg-[#f5f9ff] rounded-xl p-8 space-y-4"
              >
                <input
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
                <input
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white font-medium py-3 rounded-md hover:bg-brand-blueDark transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="parlour" className="py-16 md:py-20 bg-[#f5f9ff] scroll-mt-24">
        <div className="container-xl text-center">
          <SectionTitle eyebrow="Visit us" title="Parlour" />
          <p className="text-gray-600 max-w-xl mx-auto">
            Visit our Sangam Dairy parlour outlets for fresh milk, curd, sweets and a full range of
            dairy products, available daily at our retail counters near you.
          </p>
        </div>
      </section>
    </>
  )
}
