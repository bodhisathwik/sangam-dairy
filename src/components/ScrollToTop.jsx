import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls the window to the top on every route change, and to an anchor
// element when the URL contains a hash (e.g. /corporate#founders).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}
