import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import SectionTitle from '../components/SectionTitle'
import {
  aboutUs,
  operationAreas,
  whyChooseUs,
  productCategories,
  products,
  galleryEvents,
  awards,
  qualityAssurance,
} from '../data/siteData'
import { whyChoose, gallery, awardImages, productImages } from '../assets/images'
import { useState } from 'react'
import QAIcon from '../components/QAIcon'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <AreaOfOperation />
      <WhyChooseUsSection />
      <ProductsTeaser />
      <ProductsSection />
      <GallerySection />
      <AwardsSection />
      <QualityAssuranceTeaser />
    </>
  )
}

function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-xl grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionTitle eyebrow="Who we are" title={aboutUs.title} align="left" />
          {aboutUs.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {aboutUs.commitments.map((c, i) => (
            <li
              key={i}
              className="flex gap-3 bg-[#f5f9ff] rounded-lg p-4 text-sm text-gray-700 leading-relaxed"
            >
              <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-brand-red" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AreaOfOperation() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f9ff]">
      <div className="container-xl">
        <SectionTitle eyebrow="Andhra Pradesh & Telangana" title="Area of Operation of SMPCL" />
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {operationAreas.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-brand-red font-heading font-bold text-lg">{a.year}</p>
              <p className="text-xs text-gray-600 mt-1">{a.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={whyChoose.main}
            alt="Sangam Dairy"
            className="rounded-2xl w-full h-[420px] object-cover shadow-xl"
          />
        </div>
        <div>
          <SectionTitle eyebrow={whyChooseUs.eyebrow} title={whyChooseUs.title} align="left" />
          <p className="text-gray-600 leading-relaxed mb-8">{whyChooseUs.story}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyChooseUs.stats.map((s, i) => (
              <div key={i} className="border-l-4 border-brand-blue pl-4 py-1">
                <p className="font-heading font-bold text-xl text-brand-blue">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductsTeaser() {
  return (
    <section className="relative py-20 bg-brand-gradient text-white overflow-hidden">
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-heading font-bold text-2xl md:text-4xl max-w-xl leading-tight">
          A wide range of Milk &amp; Milk products for you and your family
        </h2>
        <Link
          to="/products"
          className="inline-block bg-white text-brand-blue font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-brand-red hover:text-white transition-colors shrink-0"
        >
          Order Now
        </Link>
      </div>
    </section>
  )
}

function ProductsSection() {
  const [active, setActive] = useState(productCategories[0])
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <SectionTitle eyebrow="Our goodness comes in many types" title="Our Products" />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide transition-colors ${
                active === cat
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {products.slice(0, 20).map((name, i) => (
            <div
              key={name}
              className="group bg-[#f8fafc] rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={productImages[i % productImages.length]}
                alt={name}
                className="h-28 object-contain mb-3 group-hover:scale-105 transition-transform"
              />
              <p className="text-xs font-medium text-gray-700">{name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block border-2 border-brand-blue text-brand-blue font-medium px-8 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f9ff]">
      <div className="container-xl">
        <SectionTitle eyebrow="Moments from Sangam Dairy" title="Image Gallery" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm">
              <img src={src} alt="gallery" className="w-full h-44 object-cover object-center" />
            </div>
          ))}
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {galleryEvents.map((e, i) => (
            <li key={i} className="text-xs text-gray-500">
              <span className="block text-brand-red font-medium">{e.date}</span>
              {e.title}
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Link
            to="/press-tenders#press"
            className="inline-block border-2 border-brand-blue text-brand-blue font-medium px-8 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

function AwardsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <SectionTitle eyebrow="Recognition" title="Awards" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((a, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md group">
              <div className="overflow-hidden">
                <img
                  src={awardImages[i % awardImages.length]}
                  alt="award"
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-brand-red font-heading font-bold">{a.year}</p>
                <p className="text-sm text-gray-700">{a.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QualityAssuranceTeaser() {
  return (
    <section id="quality-assurance" className="py-16 md:py-24 bg-[#f5f9ff]">
      <div className="container-xl">
        <SectionTitle eyebrow="Uncompromising standards" title={qualityAssurance.title} />
        <p className="text-center text-gray-500 max-w-2xl mx-auto -mt-6 mb-10">
          {qualityAssurance.intro}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {qualityAssurance.pillars.slice(0, 4).map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-6 shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white mb-4">
                <QAIcon name={p.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-brand-blue mb-1">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/quality-assurance"
            className="inline-block bg-brand-blue text-white font-medium px-8 py-3 rounded-full hover:bg-brand-red transition-colors"
          >
            Explore Quality Assurance
          </Link>
        </div>
      </div>
    </section>
  )
}
