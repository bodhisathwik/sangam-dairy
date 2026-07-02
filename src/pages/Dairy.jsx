import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { whyChoose, gallery } from '../assets/images'

export default function Dairy() {
  return (
    <>
      <PageHero title="Dairy" subtitle={"Beyond milk \u2014 cattle feed and seed operations that support our farmer community."} />

      <section id="cattle-feed" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle eyebrow="Nourishing the herd" title="Cattle Feed Operations" align="left" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Sangam Dairy operates cattle feed manufacturing facilities that produce balanced,
              nutrient-rich feed for our farmer members, helping improve milk yield and animal
              health across our operational districts.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>&bull; Scientifically formulated compound feed</li>
              <li>&bull; Mineral mixture and feed supplements</li>
              <li>&bull; Subsidised distribution to member farmers</li>
            </ul>
          </div>
          <img src={gallery[2]} alt="Cattle feed operations" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
        </div>
      </section>

      <section id="seeds" className="py-16 md:py-20 bg-[#f5f9ff] scroll-mt-24">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
          <img src={whyChoose.main} alt="Seeds" className="rounded-2xl w-full h-80 object-cover shadow-lg order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <SectionTitle eyebrow="Better fodder, better yield" title="Seeds" align="left" />
            <p className="text-gray-600 leading-relaxed">
              High-yield fodder seed varieties are made available to our farmer producers, improving
              the quality and availability of green fodder throughout the year.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
