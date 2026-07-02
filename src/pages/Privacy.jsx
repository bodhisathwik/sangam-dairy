import PageHero from '../components/PageHero'

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl max-w-3xl text-sm text-gray-600 leading-relaxed space-y-4">
          <p>
            Sangam Milk Producer Company Limited ("Sangam Dairy") respects your privacy. This
            policy explains what information we collect through this website and how it is used.
          </p>
          <p>
            We only collect information you voluntarily provide, such as through contact or
            careers forms, and use it solely to respond to your enquiry or application. We do not
            sell or share your personal information with third parties for marketing purposes.
          </p>
          <p>
            For any privacy-related questions, please contact us at{' '}
            <a href="mailto:feedback@sangamdairy.com" className="text-brand-blue">feedback@sangamdairy.com</a>.
          </p>
        </div>
      </section>
    </>
  )
}
