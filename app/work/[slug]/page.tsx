import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/content/work'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.thesis,
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <div className="pt-20 pb-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-cue-sm text-amber block mb-4">
            FROM THE SHOW · CUE {project.cue}
          </span>
          <h1 className="text-title text-light mb-4">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-spoken text-dim mb-6">{project.subtitle}</p>
          )}
        </div>

        {/* Meta */}
        <div className="border-t border-b border-faint py-6 mb-12 space-y-2">
          <div className="flex gap-2">
            <span className="text-cue-sm text-dim w-16">ROLE</span>
            <span className="text-body text-light">{project.role}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-cue-sm text-dim w-16">TYPE</span>
            <span className="text-body text-light">{project.type}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-cue-sm text-dim w-16">STATUS</span>
            <span className="text-body text-light">{project.status}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-cue-sm text-dim w-16">YEAR</span>
            <span className="text-body text-light">{project.year}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-cue-sm text-dim w-16">SKILLS</span>
            <span className="text-body text-light">
              {project.skills.join(', ')}
            </span>
          </div>
        </div>

        {/* Thesis */}
        <p className="text-spoken text-light mb-12">{project.thesis}</p>

        {/* Sections */}
        {project.sections.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-cue-sm text-amber mb-4">
              {section.heading.toUpperCase()}
            </h2>
            <p className="text-body text-light">{section.body}</p>
          </div>
        ))}

        {/* What I did */}
        <div className="border-t border-faint pt-8 mb-12">
          <h2 className="text-cue-sm text-amber mb-4">WHAT I DID</h2>
          <div className="space-y-2">
            {project.whatIDid.map((item, i) => (
              <p key={i} className="text-body text-dim">{item}</p>
            ))}
          </div>
        </div>

        {/* Next project */}
        {nextProject && (
          <div className="border-t border-faint pt-8">
            <span className="text-cue-sm text-dim block mb-2">NEXT CUE</span>
            <a
              href={`/work/${nextProject.slug}`}
              className="text-spoken text-light hover:text-amber no-underline block"
            >
              {nextProject.title} →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
