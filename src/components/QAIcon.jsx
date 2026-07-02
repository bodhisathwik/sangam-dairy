const paths = {
  collection: (
    <>
      <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z" />
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  lab: (
    <>
      <path d="M9 2v6.5L4.5 17a3 3 0 0 0 2.6 4.5h9.8A3 3 0 0 0 19.5 17L15 8.5V2" />
      <path d="M9 2h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 15h10" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  processing: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  packaging: (
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4 9-4V7" stroke="#0B45BB" strokeWidth="0" />
      <path d="M12 11v10M3 7l9 4 9-4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  distribution: (
    <>
      <path d="M3 16V6a1 1 0 0 1 1-1h9v11" />
      <path d="M13 9h4l3 3v4h-7" />
      <circle cx="7.5" cy="17.5" r="1.8" fill="#fff" />
      <circle cx="17" cy="17.5" r="1.8" fill="#fff" />
    </>
  ),
  certification: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 20l3-3 3 3-1-6h-4l-1 6z" />
      <path d="M9.5 9l1.7 1.7L14.5 7" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

export default function QAIcon({ name, className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      {paths[name] || paths.certification}
    </svg>
  )
}
