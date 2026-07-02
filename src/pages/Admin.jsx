import PageHero from '../components/PageHero'

export default function Admin() {
  return (
    <>
      <PageHero title="Admin Login" subtitle="Staff access only." />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl max-w-sm">
          <form className="bg-[#f5f9ff] rounded-xl p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
            />
            <button
              type="submit"
              className="w-full bg-brand-blue text-white font-medium py-3 rounded-md hover:bg-brand-blueDark transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
