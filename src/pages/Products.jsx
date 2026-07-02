import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { productCategories, products } from '../data/siteData'
import { productImages } from '../assets/images'

// Distribute the flat product list across the category tabs so every
// product appears exactly once, in a stable, deterministic order.
function groupProducts() {
  const groups = Object.fromEntries(productCategories.map((c) => [c, []]))
  products.forEach((name, i) => {
    const cat = productCategories[i % productCategories.length]
    groups[cat].push({ name, image: productImages[i % productImages.length] })
  })
  return groups
}

export default function Products() {
  const groups = groupProducts()

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle={"Our goodness comes in many types \u2014 31 products, 91 variants, 185 SKU's."}
      />

      {productCategories.map((cat, idx) => (
        <section
          key={cat}
          id={cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className={`py-14 md:py-16 scroll-mt-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f5f9ff]'}`}
        >
          <div className="container-xl">
            <SectionTitle title={cat} align="left" />
            {groups[cat].length ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {groups[cat].map((p) => (
                  <div
                    key={p.name}
                    className="group bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-28 object-contain mb-3 group-hover:scale-105 transition-transform"
                    />
                    <p className="text-xs font-medium text-gray-700">{p.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">More {cat.toLowerCase()} coming soon.</p>
            )}
          </div>
        </section>
      ))}
    </>
  )
}
