import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { BackToTopButton, TenderSideTab } from './components/FloatingWidgets'

import Home from './pages/Home'
import Corporate from './pages/Corporate'
import Dairy from './pages/Dairy'
import Products from './pages/Products'
import Services from './pages/Services'
import PressTenders from './pages/PressTenders'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import QualityAssurance from './pages/QualityAssurance'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/press-tenders" element={<PressTenders />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <TenderSideTab />
      <BackToTopButton />
    </div>
  )
}
