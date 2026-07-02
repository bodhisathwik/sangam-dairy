import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/images'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[52px] right-4 z-50 bg-white text-brand-blue hover:text-brand-red font-medium rounded-full shadow-md hover:shadow-lg p-[10px] transition-all duration-150"
    >
      <svg className="w-4 h-4" viewBox="0 0 448 512" fill="currentColor">
        <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
      </svg>
    </button>
  )
}

export function TenderSideTab() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-40 hidden md:block">
      <Link
        to="/press-tenders#tenders"
        className="flex flex-col items-center bg-brand-blue text-white px-2 py-3 rounded-l-md shadow-lg hover:bg-brand-red transition-colors"
      >
        <img src={logo.tender} alt="logo" className="w-6 h-6 object-contain mb-2" />
        <span
          className="text-xs font-medium whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Tenders
        </span>
      </Link>
    </div>
  )
}

export function ScrollDownIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/90 animate-bounceDown">
      <div className="mousey-down">
        <div className="scroller-down" />
      </div>
    </div>
  )
}
