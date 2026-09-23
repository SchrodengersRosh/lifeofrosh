export interface EvidenceImage {
  src: string
  alt: string
  caption?: string
  temporary?: boolean
}

export interface EvidenceBlock {
  images: EvidenceImage[]
  pendingNote: string
}

export interface SegmentLink {
  label: string
  href: string
  external?: boolean
}

export interface SegmentDid {
  heading: string
  bullets: string[]
}

export interface Segment {
  id: string
  cue: string
  timecode: string
  label: string
  title?: string
  before?: string
  spoken: string[]
  after?: string
  evidence?: EvidenceBlock
  did?: SegmentDid
  links?: SegmentLink[]
  aside?: {
    heading: string
    body: string
    links?: SegmentLink[]
  }
  credits?: { role: string; detail: string }[]
  modules?: {
    heading: string
    body: string
    links?: SegmentLink[]
  }[]
}

export const segments: Segment[] = [
   {
    id: 'open',
    cue: '00',
    timecode: '00:00',
    label: 'OPEN',
    spoken: [
      "Right. You've got about four minutes.",
      "I'll show you around.",
      "",
      "I'm Roshan. I'm 20, studying electronics and telecom at DSCE, Bengaluru.",
      "",
      "I build software. I work on digital projects. I get on stages. I play guitar.",
      "",
      "And I have a habit of getting very interested in things I probably could have left alone.",
      "",
      "Most of the time, I'm just trying to figure something out.",
      "",
      "Let's begin."
    ],
    after:
      '[Yes, this is technically a portfolio. Moving on.]',
    links: [
      { label: 'Life outside the show →', href: '/life' },
    ],
  },
  {
    id: 'business',
    cue: '01',
    timecode: '00:30',
    label: 'THE BUSINESS',
    title: 'ROSHAN CONSTRUCTIONS',
    // DRAFT: rewrite in Roshan's spoken voice before publishing
    spoken: [
      "First act. A construction company in Bengaluru: residential builds, renovation and remodeling, interiors, commercial work. It's my family's business, and I'm its business development lead, which is a grand way of saying I'm the one who has to make the phone ring.",
    ],
    after:
      'Pitching a website to your own family is harder than pitching to a stranger. They know where you sleep.',
    evidence: {
      images: [
        {
          src: '/images/rc-website.jpg',
          alt: 'Roshan Constructions website screenshot',
          caption: 'Roshan Constructions, website',
          temporary: true,
        },
        {
          src: '/images/rc-project.jpg',
          alt: 'Roshan Constructions project photograph',
          caption: 'Project work, Bengaluru',
          temporary: true,
        },
      ],
      pendingNote:
        'Replace with actual website screenshots and project photographs',
    },
    did: {
      heading: 'What I actually did',
      bullets: [
        'Designed and built the company website from scratch',
        'Wrote all page copy and service descriptions',
        'Set up basic SEO and local search visibility',
        'Created a contact and inquiry flow',
        'Documented past projects for the portfolio section',
        'Handled domain, hosting and deployment',
      ],
    },
    links: [
      { label: 'Full case study', href: '/work/roshan-constructions' },
    ],
  },
  {
    id: 'system',
    cue: '02',
    timecode: '01:15',
    label: 'THE SYSTEM',
    title: 'CORE',
    before:
      'Same host. Different room. Bear with the vocabulary for ninety seconds.',
    // DRAFT: rewrite in Roshan's spoken voice before publishing
    spoken: [
      "Second act. Every college has the same problem: the information exists, but it's in a PDF someone forwarded on WhatsApp two years ago. CORE, the Campus Oriented Retrieval Engine, lets a student ask the campus a question in plain language and get an answer grounded in the actual documents. I built the part underneath the chat box.",
    ],
    evidence: {
      images: [
        {
          src: '/images/core-ui.jpg',
          alt: 'CORE retrieval engine interface',
          caption: 'CORE, retrieval interface',
          temporary: true,
        },
        {
          src: '/images/core-architecture.jpg',
          alt: 'CORE system architecture',
          caption: 'System architecture',
          temporary: true,
        },
      ],
      pendingNote:
        'Replace with actual UI screenshots and architecture diagrams',
    },
    did: {
      heading: 'What I actually built',
      bullets: [
        'Designed the backend architecture for document retrieval',
        'Built the document ingestion and processing pipeline',
        'Implemented retrieval-augmented generation for grounded answers',
        'Developed the API layer for the chat interface',
        'Handled data parsing, chunking and indexing',
      ],
    },
    links: [
      { label: 'Full case study', href: '/work/core' },
    ],
    modules: [
      {
        heading: 'REVENANT',
        body: 'An AI and backend systems project. Details when it\'s ready to be talked about properly.',
      },
    ],
  },
  {
    id: 'pyray',
    cue: '03',
    timecode: '02:00',
    label: 'THE DIGITAL WORK',
    title: 'PYRAY',
    // DRAFT: rewrite in Roshan's spoken voice before publishing
    spoken: [
      "I did digital growth work under the name Pyray: social media strategy, content, community, Meta and Google ads, SEO, UGC, email and lead generation. I worked with US-based clients on customer outreach, email campaigns, audience research, and lead-generation workflows."
    ],
  },
  {
    id: 'stage',
    cue: '04',
    timecode: '02:45',
    label: 'THE STAGE',
    title: 'THE STAGE',
    // DRAFT: rewrite in Roshan's spoken voice before publishing
    spoken: [
      "Third act, and the reason the first two were easy to follow. I've worked college events at DSCE on the marketing, PR and fashion teams, and I've hosted them. Emcee means keeping a few hundred people with you when the schedule slips and the mic cuts out.",
    ],
    after: 'He will not be reading from cards.',
    evidence: {
      images: [
        {
          src: '/images/stage-event.jpg',
          alt: 'Roshan at a DSCE event',
          caption: 'DSCE event',
          temporary: true,
        },
        {
          src: '/images/stage-emcee.jpg',
          alt: 'Roshan emceeing',
          caption: 'Emcee',
          temporary: true,
        },
      ],
      pendingNote:
        'Replace with actual event and emcee photographs',
    },
    credits: [
      {
        role: 'Emcee',
        detail:
          'Hosted college events at DSCE, keeping audiences engaged through schedule changes and technical failures.',
      },
      {
        role: 'Marketing',
        detail:
          'Worked on event marketing and promotion for college festivals and departmental events.',
      },
      {
        role: 'Public Relations',
        detail:
          'Handled PR for campus events, managing outreach and communications.',
      },
      {
        role: 'Fashion',
        detail:
          'Part of the fashion team for campus events and shows.',
      },
    ],
  },
  {
    id: 'bench',
    cue: '05',
    timecode: '03:30',
    label: 'ON THE BENCH',
    title: 'ON THE BENCH',
    before: 'Interlude. Two lines, house lights half up.',
    spoken: [],
    modules: [
      {
        heading: 'CORE',
        body: 'Toward publication.',
      },
      {
        heading: 'REVENANT',
        body: 'An AI and backend systems project. Details when it\'s ready to be talked about properly.',
      },
    ],
  },
  {
    id: 'house-lights',
    cue: '06',
    timecode: '04:15',
    label: 'HOUSE LIGHTS',
    title: 'HOUSE LIGHTS',
    // DRAFT: rewrite in Roshan's spoken voice before publishing
    spoken: [
      "That's the show. If you run a business and suspect that your website, or the lack of one, is costing you customers, I'd like to hear about it. If you're building something technical and want someone who also understands the business side, same email.",
    ],
    after: 'Exit, stage left. Replies within a day or two.',
  },
]

export function getSegment(id: string): Segment | undefined {
  return segments.find((s) => s.id === id)
}

export function getSegmentByCue(cue: string): Segment | undefined {
  return segments.find((s) => s.cue === cue)
}
