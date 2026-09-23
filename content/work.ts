export interface WorkSection {
  heading: string
  body: string
}

export interface WorkProject {
  slug: string
  title: string
  subtitle?: string
  cue: string
  thesis: string
  role: string
  type: string
  status: string
  year: string
  skills: string[]
  sections: WorkSection[]
  whatIDid: string[]
}

export const projects: WorkProject[] = [
  {
    slug: 'roshan-constructions',
    title: 'Roshan Constructions',
    subtitle: 'Family construction business, Bengaluru',
    cue: '01',
    thesis:
      'A traditional family construction company needed a digital presence that could actually generate leads and explain what the business does to someone who has never heard of it.',
    role: 'Business Development, Web Design & Development',
    type: 'Business / Web',
    status: 'Live',
    year: '2024',
    skills: [
      'Business development',
      'Strategy',
      'Web design',
      'Web development',
      'SEO',
      'Content strategy',
      'Lead generation',
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'Roshan Constructions had been running on referrals for years. The business had no website, no digital footprint, and no way for a stranger to find them, evaluate their work, or make contact without knowing someone who knew someone.',
      },
      {
        heading: 'The approach',
        body: 'I designed and built a website that does three things: explains clearly what the company does, shows evidence of past work, and makes it easy for someone to get in touch. The site is structured around services, not jargon. Every page exists to answer a question a potential customer would actually ask.',
      },
      {
        heading: 'What I learned',
        body: 'Pitching digital work to your own family is different from pitching to a client. The trust is higher but the skepticism is more personal. I had to make a case not just for a website, but for why the business needed to be findable at all.',
      },
    ],
    whatIDid: [
      'Designed and built the company website from scratch',
      'Wrote all page copy and service descriptions',
      'Set up basic SEO and local search visibility',
      'Created a contact and inquiry flow',
      'Documented past projects for the portfolio section',
      'Handled domain, hosting and deployment',
    ],
  },
  {
    slug: 'core',
    title: 'CORE',
    subtitle: 'Campus Oriented Retrieval Engine',
    cue: '02',
    thesis:
      'Every college campus has the same information problem: the answer exists, but it is buried in a forwarded PDF, an old WhatsApp group, or a notice board photograph from two semesters ago. CORE is an AI system that lets a student ask the campus a question in plain language.',
    role: 'Backend & AI Development',
    type: 'AI / Systems',
    status: 'In development',
    year: '2024',
    skills: [
      'Python',
      'Backend architecture',
      'Retrieval-Augmented Generation',
      'Document processing',
      'API design',
      'AI systems',
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'Campus information is scattered across notice boards, WhatsApp groups, PDFs, and word of mouth. A student looking for exam dates, fee structures, club event schedules, or administrative procedures has to know where to look, or know someone who knows. There is no single system that aggregates, indexes, and retrieves this information reliably.',
      },
      {
        heading: 'The system',
        body: 'CORE ingests campus documents, indexes them, and exposes a retrieval-augmented generation interface. A student types a question in plain language and gets an answer grounded in actual documents, not a chatbot hallucination. I built the retrieval pipeline, the document processing layer, and the backend API.',
      },
      {
        heading: 'Where it stands',
        body: 'CORE is currently being developed toward publication. The retrieval system works. The interface layer is functional. The challenge now is coverage, getting enough source documents indexed to make the system genuinely useful across the full range of questions a student might ask.',
      },
    ],
    whatIDid: [
      'Designed the backend architecture for document retrieval',
      'Built the document ingestion and processing pipeline',
      'Implemented retrieval-augmented generation for grounded answers',
      'Developed the API layer for the chat interface',
      'Handled data parsing, chunking and indexing',
    ],
  },
  {
    slug: 'pyray',
    title: 'Pyray',
    subtitle: 'Digital growth and client work',
    cue: '03',
    thesis:
      'Pyray is the name under which Roshan does digital marketing, social media strategy, and growth work for businesses. The work spans content, community, ads, SEO, email and lead generation.',
    role: 'Digital Marketing, Strategy, Execution',
    type: 'Digital Marketing / Growth',
    status: 'Active',
    year: '2023',
    skills: [
      'Social media strategy',
      'Content creation',
      'Community management',
      'Meta Ads',
      'Google Ads',
      'SEO',
      'UGC',
      'Email marketing',
      'Lead generation',
      'Customer outreach',
    ],
    sections: [
      {
        heading: 'What Pyray does',
        body: 'Pyray handles the digital side of business growth. That means social media strategy, content, community management, paid ads on Meta and Google, search engine optimization, user-generated content, email campaigns, and lead generation workflows. The work is about making businesses findable, understandable, and contactable online.',
      },
      {
        heading: 'Client work',
        body: 'I have worked with US-based clients on customer outreach, email campaigns, audience research, sequence writing, list hygiene and lead-generation workflows. The work is hands-on: I write the emails, research the audiences, build the lists, and run the campaigns.',
      },
    ],
    whatIDid: [
      'Built and executed social media strategies for clients',
      'Created content across platforms',
      'Managed community engagement',
      'Ran Meta and Google ad campaigns',
      'Executed SEO and content optimization',
      'Designed and sent email marketing campaigns',
      'Built lead generation and outreach workflows',
      'Handled audience research and list management',
    ],
  },
]

export function getProject(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
