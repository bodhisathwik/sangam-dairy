import PageHero from '../components/PageHero'

export default function Terms() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl max-w-3xl text-sm text-gray-600 leading-relaxed space-y-4">
          <p>
            By using this website you agree to these terms. All content, trademarks and logos are
            the property of Sangam Milk Producer Company Limited unless otherwise noted.
          </p>
          <p>
            Product availability, specifications and pricing may vary by region and are subject to
            change without prior notice. Tender notices published on this site are indicative;
            please refer to the official tender documents for full terms.
          </p>
          <p>
            For any questions regarding these terms, please contact{' '}
            <a href="mailto:feedback@sangamdairy.com" className="text-brand-blue">feedback@sangamdairy.com</a>.
          </p>
        </div>
      </section>
    </>
  )
}
