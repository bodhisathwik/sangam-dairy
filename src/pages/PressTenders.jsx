import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { tenderNotices, galleryEvents } from '../data/siteData'
import { gallery } from '../assets/images'

export default function PressTenders() {
  return (
    <>
      <PageHero title="Press & Tenders" subtitle="Latest news, events and open tender notices from Sangam Dairy." />

      <section id="press" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container-xl">
          <SectionTitle eyebrow="What's happening" title="Press Room" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {galleryEvents.map((e, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-sm bg-[#f5f9ff]">
                <img src={gallery[i % gallery.length]} alt={e.title} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <p className="text-[11px] text-brand-red font-medium">{e.date}</p>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-2">{e.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tenders" className="py-16 md:py-20 bg-[#f5f9ff] scroll-mt-24">
        <div className="container-xl">
          <SectionTitle eyebrow="Open opportunities" title="Tenders" />
          <div className="max-w-3xl mx-auto space-y-4">
            {tenderNotices.map((notice, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <p className="text-sm text-gray-700 font-medium">{notice}</p>
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-brand-blue border border-brand-blue rounded-full px-4 py-1.5 w-fit">
                  View Details
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
