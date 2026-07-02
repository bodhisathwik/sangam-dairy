import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, tenderNotices } from '../data/siteData'
import { logo } from '../assets/images'

function DropdownMenu({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.to}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium uppercase tracking-wide text-gray-100 transition-colors ${item.color}`}
      >
        {item.label}
        {item.children && (
          <svg
            className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        )}
      </Link>
      {item.children && open && (
        <div className="absolute left-0 top-full min-w-[220px] bg-[#fcd4cf] shadow-lg py-1 z-30 animate-fadeInUp">
          {item.children.map((child) => (
            <Link
              key={child.label}
              to={child.to}
              className="block px-4 py-2 text-sm text-gray-700 border-b border-dashed border-[#797979]/40 last:border-0 hover:bg-black/5"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Tender notice ticker */}
      <div className="bg-brand-navy text-white overflow-hidden">
        <div className="container-xl py-1.5 flex items-center gap-3">
          <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-wide text-brand-red shrink-0">
            Notices
          </span>
          <div className="overflow-hidden flex-1">
            <div className="marquee-track whitespace-nowrap text-[11px] gap-16 pr-16">
              {[...tenderNotices, ...tenderNotices].map((notice, i) => (
                <span key={i} className="inline-block pr-16">
                  {notice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container-xl flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo.svg} alt="Sangam Dairy" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <DropdownMenu key={item.label} item={item} />
            ))}
          </nav>

          <button
            aria-label="Open main menu"
            className="lg:hidden p-2 rounded-md border border-gray-200 text-brand-blue"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinewidth="2" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 max-h-[75vh] overflow-y-auto">
            {nav.map((item) => (
              <MobileMenuItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

function MobileMenuItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        <NavLink to={item.to} onClick={onNavigate} className="text-sm font-medium text-gray-800">
          {item.label}
        </NavLink>
        {item.children && (
          <button onClick={() => setOpen((v) => !v)} className="p-1 text-brand-blue" aria-label="Toggle submenu">
            <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 512 512" fill="currentColor">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </button>
        )}
      </div>
      {item.children && open && (
        <div className="bg-gray-50 pb-2">
          {item.children.map((child) => (
            <Link
              key={child.label}
              to={child.to}
              onClick={onNavigate}
              className="block px-8 py-2 text-sm text-gray-600"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
