import { Link } from 'react-router-dom'
import { footerLinks, contactInfo } from '../data/siteData'
import { logo, footerBackground } from '../assets/images'

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      <img
        src={footerBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-10 z-0"
      />
      <div className="relative z-10 container-xl py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img src={logo.footer} alt="Sangam Dairy" className="h-16 w-auto mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              {contactInfo.companyName}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Information</h3>
            <ul className="space-y-2">
              {footerLinks.information.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Get in touch</h3>
            <address className="not-italic text-sm text-gray-400 leading-relaxed space-y-2">
              <p>{contactInfo.address}</p>
              <p>
                {contactInfo.phones.join(' & ')}
              </p>
              <p>
                <a href={contactInfo.website} className="hover:text-white">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>&copy; Copyright {new Date().getFullYear()} {contactInfo.companyName}, All Rights Reserved</p>
          <p>Designed &amp; Developed as a React reproduction</p>
        </div>
      </div>
    </footer>
  )
}
