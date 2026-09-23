export interface LifeSection {
  id: string
  heading: string
  body: string[]
  images?: {
    src: string
    alt: string
    caption?: string
    temporary?: boolean
  }[]
  items?: string[]
  crossLink?: {
    label: string
    href: string
  }
}

export const lifeSections: LifeSection[] = [
  {
    id: 'intro',
    heading: 'LIFE',
    body: [
      // DRAFT: rewrite in Roshan's spoken voice before publishing
      'The other page is the work. This one is the rest of it.',
    ],
  },
  {
    id: 'guitar',
    heading: 'GUITAR',
    body: [
      'I play guitar. Fingerstyle mostly, on a steel-string. Nobody taught me a curriculum. I just kept picking things up.',
    ],
    images: [
      {
        src: '/images/life-guitar.jpg',
        alt: 'Roshan playing guitar',
        caption: 'Steel-string guitar',
        temporary: true,
      },
    ],
  },
  {
    id: 'reading',
    heading: 'READING',
    body: [
      'Nonfiction, mostly. The kind of books that change how you see systems, people and decisions.',
    ],
    items: ['Robert Greene', 'Marcus Aurelius'],
  },
  {
    id: 'watching',
    heading: 'WATCHING',
    body: [
      'Anime and manga that take their stories seriously.',
    ],
    items: [
      'Berserk',
      'Monster',
      'Death Note',
      'Attack on Titan',
      'Chainsaw Man',
      'Jujutsu Kaisen',
    ],
  },
  {
    id: 'outdoors',
    heading: 'OUTSIDE',
    body: [
      'When the screen gets too close, I go somewhere with more sky than ceiling.',
    ],
    images: [
      {
        src: '/images/life-outdoors.jpg',
        alt: 'Nature, outdoors',
        caption: 'Somewhere outside',
        temporary: true,
      },
    ],
  },
  {
    id: 'stage',
    heading: 'STAGE',
    body: [
      'Public speaking and emceeing are covered in the show.',
    ],
    crossLink: {
      label: 'See the Stage',
      href: '/#stage',
    },
  },
]
