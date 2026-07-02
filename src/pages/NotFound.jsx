import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="font-heading font-bold text-6xl text-brand-blue mb-4">404</h1>
      <p className="text-gray-600 mb-8">Sorry, we couldn't find the page you were looking for.</p>
      <Link
        to="/"
        className="inline-block bg-brand-blue text-white font-medium px-8 py-3 rounded-full hover:bg-brand-red transition-colors"
      >
        Back to Home
      </Link>
    </section>
  )
}
