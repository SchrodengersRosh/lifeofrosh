export const siteConfig = {
  name: 'Roshan',
  title: 'Roshan · Run of show',
  description:
    'Roshan is an engineering student in Bengaluru who does business development for a construction company, builds the backend of a campus retrieval engine, and hosts college events. This is the show.',
  url: 'https://roshanportfolio.com',
  email: 'hey@roshanportfolio.com',
  socials: {
    github: 'https://github.com/roshan',
    linkedin: 'https://linkedin.com/in/roshan',
    twitter: '',
    instagram: '',
  },
  host: {
    name: 'Roshan',
    age: 20, // VERIFY: Roshan must confirm this number before publishing.
    programme: 'Electronics & Telecommunication Engineering',
    college: 'DSCE',
    fullCollege: 'Dayananda Sagar College of Engineering',
    city: 'Bengaluru',
    academicYear: '3rd year', // VERIFY: confirm before publishing if necessary.
    runningTime: 'about 4 minutes',
  },
  flags: {
    showClientNames: false,
  },
} as const

export type SiteConfig = typeof siteConfig
