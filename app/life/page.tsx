import type { Metadata } from 'next'
import { lifeSections } from '@/content/life'
import { ImageSlot } from '@/components/show/ImageSlot'

export const metadata: Metadata = {
  title: 'Life',
  description: 'Roshan outside the work: guitar, reading, nature, and the rest of it.',
}

export default function LifePage() {
  return (
    <div className="pt-20 pb-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {lifeSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-20"
            aria-labelledby={`life-${section.id}`}
          >
            <h2
              id={`life-${section.id}`}
              className="text-title text-light mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              {section.heading}
            </h2>

            {section.body.map((p, i) => (
              <p key={i} className="text-spoken text-light mb-4">
                {p}
              </p>
            ))}

            {section.images && (
              <div className="grid grid-cols-1 gap-4 my-6">
                {section.images.map((img, i) => (
                  <ImageSlot
                    key={i}
                    image={img}
                    aspect="3/2"
                  />
                ))}
              </div>
            )}

            {section.items && (
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                {section.items.map((item, i) => (
                  <span key={i} className="text-body text-dim">
                    {item}{i < section.items!.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            )}

            {section.crossLink && (
              <a
                href={section.crossLink.href}
                className="text-cue text-light hover:text-amber no-underline block mt-4"
              >
                {section.crossLink.label} →
              </a>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
