// Centralised, structured content extracted from the original Sangam Dairy
// website markup, used across every page/component of the rebuilt app.

export const nav = [
  {
    label: 'Corporate',
    to: '/corporate',
    color: 'bg-[#E51D0E]',
    children: [
      { label: 'Our Founders', to: '/corporate#founders' },
      { label: 'Management', to: '/corporate#management' },
      { label: 'Milestones', to: '/corporate#milestones' },
      { label: 'CSR Activities', to: '/corporate#csr' },
      { label: 'Infrastructure', to: '/corporate#infrastructure' },
    ],
  },
  {
    label: 'Dairy',
    to: '/dairy',
    color: 'bg-[#0B45BB]',
    children: [
      { label: 'Cattle Feed Operations', to: '/dairy#cattle-feed' },
      { label: 'Seeds', to: '/dairy#seeds' },
    ],
  },
  {
    label: 'Products',
    to: '/products',
    color: 'bg-[#A7C13A]',
    children: [
      { label: 'Milk and Milk Products', to: '/products#milk-and-milk-products' },
      { label: 'Sweets', to: '/products#sweets' },
      { label: 'Drinks', to: '/products#drinks' },
      { label: 'Savories', to: '/products#savories' },
      { label: 'Spices', to: '/products#spices' },
      { label: 'Bakery', to: '/products#bakery' },
      { label: 'Other Products', to: '/products#other-products' },
      { label: 'Seeds', to: '/products#seeds' },
    ],
  },
  {
    label: 'Tech. Services & Welfare',
    to: '/services',
    color: 'bg-[#3FB7AE]',
    children: [
      { label: 'Services', to: '/services#services' },
      { label: 'Welfare Schemes', to: '/services#welfare' },
    ],
  },
  {
    label: 'Press & Tenders',
    to: '/press-tenders',
    color: 'bg-[#2F8E9F]',
    children: [
      { label: 'Press Room', to: '/press-tenders#press' },
      { label: 'Tenders', to: '/press-tenders#tenders' },
    ],
  },
  {
    label: 'Contact Us',
    to: '/contact',
    color: 'bg-[#ED745E]',
    children: [
      { label: 'Contact', to: '/contact' },
      { label: 'Parlour', to: '/contact#parlour' },
    ],
  },
  { label: 'Careers', to: '/careers', color: 'bg-[#c56387]' },
  { label: 'Quality Assurance', to: '/quality-assurance', color: 'bg-[#0B45BB]' },
]

export const tenderNotices = [
  'Enquiry/IFB/Tender Notice Number: E092300309',
  'Enquiry/IFB/Tender Notice Number: E087787665',
  'Enquiry/IFB/Tender Notice Number: E445565676',
]

export const aboutUs = {
  title: 'About us',
  paragraphs: [
    'Guntur Co-op Milk Union was initially registered under the APCS Act 1964 in February 1977 and was converted into Mutually Aided Co-operative Union under APMACS Act 1995 in February 1997.',
    'Subsequently, we became a body corporate as Sangam Milk Producer Company Ltd (Sangam Dairy) under Companies Act 1956 in June 2013. The Board of Directors of Sangam Dairy consist 14 members including the chairman. Sangam Dairy is situated at Vadlamudi which is 21 Km from Guntur on the Guntur-Tenali road.',
    'Being a producer owned organisation, our business philosophy is Farmer Centric. Striving continuously to increase the returns for their produce. Empowering them both socially and economically so as to make a collective impact on the society at large. In our endeavour to achieve the above purposes, the company would:',
  ],
  commitments: [
    'Build SANGAM as a Formidable and Trusted brand in the areas that we operate.',
    'Continue to grow through business expansion, while adopting sustainable solutions.',
    'Focus on delivering authentic and best in class products to consumers.',
    'Offer a wide array of products and variants, tuned to the ever increasing and changing aspirations of consumers.',
    'Adopt innovative practices and latest technology as an ongoing process in all our operational functions.',
    'Provide a range of social welfare measures to participating farmers.',
    'Treat all stakeholders with respect and value their services.',
    'Be a responsible corporate citizen.',
  ],
}

export const operationAreas = [
  { year: 1977, place: 'Guntur' },
  { year: 2014, place: 'Chittor, Tirupathi' },
  { year: 2014, place: 'Prakasam, Ongole' },
  { year: 2015, place: 'Nellore, Nellore City' },
  { year: 2016, place: 'Krishna, Vijayawada' },
  { year: 2016, place: 'Kurnool' },
  { year: 2019, place: 'Khammam' },
  { year: 2020, place: 'Cuddapah' },
  { year: 2021, place: 'Ananthapur' },
  { year: 2021, place: 'East Godavari' },
  { year: 2021, place: 'West Godavari, Eluru' },
  { year: 2022, place: 'Hyderabad' },
  { year: 2022, place: 'Rangareddy' },
  { year: 2022, place: 'Nalgonda' },
  { year: 2023, place: 'Mahaboobnagar' },
  { year: 2024, place: 'Kakinada' },
]

export const whyChooseUs = {
  eyebrow: 'The story of small-time milk producers making a collective impact in the dairy industry.',
  title: 'Why To Choose Us',
  story:
    'The seeds for massive economic and social change were sown some way back in 1977, when small and marginal farmers in and around Guntur began a cooperative movement, realising that they would go on to build one of the most trusted dairy brands in South India.',
  stats: [
    { value: '1.5 Lakh+', label: 'Milk Producers supply milk daily' },
    { value: 'Rs. 1875 Cr', label: "Turnover 23-24 \u2022 CAGR 15.4% in last 5 years" },
    { value: 'Yearly', label: 'Surpluses from business given to farmers as bonus' },
    { value: '7.5 Lakh', label: 'Litres per day average milk procurement' },
    { value: '8.5 Lakh L/day', label: 'State of the art dairy processing capacity at Guntur, Andhra Pradesh' },
    { value: '1.5 Lakh L/day', label: 'Satellite dairy capacity at Miryalaguda, Telangana' },
    { value: '31 / 91 / 185', label: "Products / Variants / SKU's" },
    { value: '1200+', label: 'Employees' },
    { value: '10,000+', label: 'Retail sales points across the region' },
  ],
}

export const productCategories = [
  'Milk and Milk Products',
  'Sweets',
  'Drinks',
  'Savories',
  'Spices',
  'Bakery',
  'Other Products',
  'Seeds',
]

export const products = [
  'Cow Ghee', 'Buffalo Ghee', 'High Aroma Buffalo Ghee', 'Dining Buffalo Ghee',
  'Cooking Butter', 'Pasteurized Table Butter', 'Toned Milk Curd', 'Standardized Milk Curd',
  'Double Toned Milk Curd', 'DTM Tetra Packet', 'Cream Packet', 'TM (3%) Tetra Packet',
  'DTM Cow Tetra Packet', 'Extra Life Tetra Packet', 'Butter Milk', 'Paneer',
  'Ulavacharu', 'Skim Milk Powder', 'Double Toned Milk', 'FCM Gold Plus Milk',
  'Lassi Vanilla', 'Lassi Mango', 'Lassi Pineapple', 'Lassi Strawberry',
  'Vanilla MilkShake', 'Double Chocolate MilkShake', 'Butter Scotch MilkShake',
  'FCM Homogenized Gold Plus Milk', 'Homogenized Whole Milk', 'Lassi Sabja',
  'SF Badam Milk', 'SF Kesar Pista', 'SF Pista Chio', 'SF Pineapple',
  'SF Strawberry', 'SF Badam Nuts Milk', 'SF Chocolate', 'White Butter',
  'Sugar Less Kova', 'Jeera Butter Milk', 'Lassi Vanilla Cup', 'Full Cream Milk',
  'FCM Homogenized (TEA)', 'Pasteurized Toned Milk', 'STM Homogenized (PREMIUM)',
]

export const galleryEvents = [
  { date: '08 March 2024', title: "Women's day celebrations 2023" },
  { date: '07 December 2023', title: 'UAE Team visit' },
  { date: '07 December 2023', title: 'UAE Team plant visit' },
  { date: '08 November 2023', title: 'New product launch event 2023' },
  { date: '08 November 2023', title: 'New product launch event 2023' },
]

export const awards = [
  { year: 2021, title: 'Times Business Awards' },
  { year: 2021, title: 'Times Business Awards' },
  { year: 2023, title: 'Industrial Safety Leadership Award 2023' },
  { year: 2023, title: 'Times Business Awards' },
]

export const qualityAssurance = {
  title: 'Quality Assurance',
  intro:
    'Delivering safe, nutritious and high-quality dairy products through rigorous quality testing and safety standards.',
  pillars: [
    {
      title: 'Milk Collection',
      desc: 'Quality checks at collection centres, right from the farmer\u2019s doorstep, including organoleptic and adulteration screening.',
      icon: 'collection',
    },
    {
      title: 'Laboratory Testing',
      desc: 'Fat, SNF, microbial and adulteration tests performed at every stage using calibrated lab equipment.',
      icon: 'lab',
    },
    {
      title: 'Processing',
      desc: 'Pasteurization, standardization and hygienic handling under strict HACCP-aligned protocols.',
      icon: 'processing',
    },
    {
      title: 'Packaging',
      desc: 'Tamper-proof, food-grade packaging that preserves freshness and extends shelf life.',
      icon: 'packaging',
    },
    {
      title: 'Distribution',
      desc: 'Cold-chain maintained till delivery, with temperature-controlled vehicles and monitored logistics.',
      icon: 'distribution',
    },
    {
      title: 'Certifications',
      desc: 'FSSAI licensed, ISO 22000 and HACCP certified processes across our plants and satellite dairies.',
      icon: 'certification',
    },
  ],
}

export const footerLinks = {
  company: [
    { label: 'Home', to: '/' },
    { label: 'Corporate', to: '/corporate' },
    { label: 'Products', to: '/products' },
    { label: 'Press & Tenders', to: '/press-tenders' },
    { label: 'Admin', to: '/admin' },
  ],
  information: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-conditions' },
  ],
}

export const contactInfo = {
  companyName: 'Sangam Milk Producer Company Limited',
  address:
    '26-39, Tenali to Guntur Main Road, Vadlamudi Village, Chebrolu Mandal, Guntur District, Andhra Pradesh - 522213.',
  phones: ['0863-2025555', '2027777 (PBX)'],
  website: 'https://www.sangamdairy.com',
  email: 'feedback@sangamdairy.com',
}
