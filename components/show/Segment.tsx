import type { Segment as SegmentType } from '@/content/show'
import { siteConfig } from '@/content/site'
import { ImageSlot } from './ImageSlot'
import Image from 'next/image'

interface SegmentProps {
  segment: SegmentType
  isOpen?: boolean
}

export function Segment({ segment, isOpen }: SegmentProps) {
  /*
   * OPEN is intentionally treated differently from the other segments.
   * It is the visual thesis of the show: Roshan's voice occupies the
   * stage while the portrait occupies the right visual field.
   */
  if (segment.id === 'open') {
    return (
      <section
        id={segment.id}
        data-cue={segment.cue}
        aria-labelledby="open-heading"
        className="open-section relative min-h-[100svh] overflow-hidden border-b border-faint"
      >
        <div className="relative mx-auto min-h-[100svh] w-full max-w-[1440px]">
          {/* =====================================================
              PORTRAIT
              The face is protected. The darker torso is allowed
              to enter the spoken layer.
              ===================================================== */}
          <div className="open-portrait pointer-events-none absolute z-10">
            <div className="relative">
              <Image
                src="/images/image.png"
                alt="Black and white portrait of Roshan"
                width={1327}
                height={1186}
                priority
                sizes="(max-width: 767px) 100vw, 46vw"
                className="open-portrait-image"
              />

              <p className="portrait-annotation absolute bottom-[12%] right-[7%] z-30">
                same person.
                <br />
                different rooms.
              </p>
            </div>
          </div>

          {/* =====================================================
              OPEN SPOKEN VOICE

              The DOM order is intentionally the reading order.
              Desktop CSS handles the stage positioning.
              ===================================================== */}
          <div className="open-copy relative z-30 min-h-[100svh]">
            {segment.spoken.map((line, i) => {
              if (!line) {
                return (
                  <div
                    key={`space-${i}`}
                    aria-hidden="true"
                    className="open-spacer"
                  />
                )
              }

              const className =
                i === 0
                  ? 'open-line open-line--lead'
                  : i === 1
                    ? 'open-line open-line--identity'
                    : i === 2
                      ? 'open-line open-line--habit'
                      : 'open-line'

              return (
                <p
                  key={i}
                  id={i === 0 ? 'open-heading' : undefined}
                  className={`${className} text-light`}
                >
                  {line}
                </p>
              )
            })}

            {segment.after && (
              <p className="open-stage-direction stage-direction">
                {segment.after}
              </p>
            )}

            {segment.links && (
              <div className="open-life-link">
                {segment.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-cue text-light no-underline transition-colors duration-150 hover:text-amber"
                    {...(
                      link.external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {}
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  const isHouseLights = segment.id === 'house-lights'
  const isBench = segment.id === 'bench'

  const socials = Object.entries(siteConfig.socials).filter(
    ([, v]) => typeof v === 'string' && v.length > 0
  ) as [string, string][]

  return (
    <section
      id={segment.id}
      data-cue={segment.cue}
      aria-labelledby={`heading-${segment.id}`}
      className={`relative border-b border-faint ${
        isOpen
          ? 'min-h-[calc(100svh-48px)] flex items-center'
          : 'relative z-20 flex items-start md:min-h-[calc(100svh-48px)] py-12'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`grid grid-cols-1 ${
            isOpen ? '' : 'md:grid-cols-12'
          } gap-8 md:gap-12`}
        >
          {/* Content */}
          <div
            className={
              isOpen
                ? 'max-w-3xl mx-auto text-center'
                : 'md:col-span-9 lg:col-span-10'
            }
          >
            {isOpen && (
              <div className="mb-8">
                <span className="text-cue-sm text-dim">
                  CUE {segment.cue} · {segment.timecode}
                </span>
              </div>
            )}

            {/* Title */}
            {segment.title && (
              <h2
                id={`heading-${segment.id}`}
                className="text-title text-light mb-8 md:mb-12"
              >
                {segment.title}
              </h2>
            )}

            {/* Before */}
            {segment.before && (
              <p className="stage-direction mb-6 text-sm">
                {segment.before}
              </p>
            )}

            {/* Spoken content */}
            {segment.spoken.length > 0 && (
              <div
                className={`space-y-4 mb-8 ${
                  isOpen ? '' : 'max-w-2xl'
                }`}
              >
                {segment.spoken.map((line, i) => (
                  <p key={i} className="text-spoken text-light">
                    {line}
                  </p>
                ))}
              </div>
            )}

            {/* After */}
            {segment.after && (
              <p className="stage-direction mb-8 text-sm">
                {segment.after}
              </p>
            )}

            {/* Evidence */}
            {segment.evidence && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {segment.evidence.images.map((img, i) => (
                  <ImageSlot key={i} image={img} />
                ))}
              </div>
            )}

            {/* What I did */}
            {segment.did && (
              <div className="mb-8">
                <h3 className="text-cue-sm text-amber mb-4">
                  {segment.did.heading.toUpperCase()}
                </h3>

                <div className="space-y-2">
                  {segment.did.bullets.map((bullet, i) => (
                    <p key={i} className="text-body text-dim">
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Aside */}
            {segment.aside && (
              <div className="border-t border-faint pt-8 mt-8 mb-8">
                <h3 className="text-cue-sm text-amber mb-3">
                  {segment.aside.heading.toUpperCase()}
                </h3>

                <p className="text-body text-dim mb-4">
                  {segment.aside.body}
                </p>

                {segment.aside.links?.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-cue text-light hover:text-amber no-underline"
                    {...(
                      link.external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {}
                    )}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}

            {/* Credits */}
            {segment.credits && (
              <div className="mb-8">
                <h3 className="text-cue-sm text-amber mb-4">
                  CREDITS
                </h3>

                <div className="space-y-4">
                  {segment.credits.map((credit, i) => (
                    <div key={i}>
                      <span className="text-cue text-light block">
                        {credit.role}
                      </span>

                      <p className="text-body text-dim">
                        {credit.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modules */}
            {segment.modules && (
              <div className={`space-y-6 ${isBench ? '' : 'mb-8'}`}>
                {segment.modules.map((mod, i) => (
                  <div
                    key={i}
                    className={
                      isBench
                        ? ''
                        : 'border-t border-faint pt-6'
                    }
                  >
                    <h3 className="text-cue-sm text-light mb-2">
                      {mod.heading}
                    </h3>

                    <p className="text-body text-dim">
                      {mod.body}
                    </p>

                    {mod.links?.map((link, j) => (
                      <a
                        key={j}
                        href={link.href}
                        className="text-cue text-light hover:text-amber no-underline block mt-2"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Links */}
            {segment.links && (
              <div className="flex flex-wrap gap-4 mt-6">
                {segment.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-cue text-light hover:text-amber no-underline"
                    {...(
                      link.external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {}
                    )}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}

            {/* House lights */}
            {isHouseLights && (
              <div className="mt-12">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-spoken text-amber hover:text-light no-underline lowercase block mb-6"
                >
                  {siteConfig.email}
                </a>

                {socials.length > 0 && (
                  <div className="flex gap-4">
                    {socials.map(([name, url]) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cue text-dim hover:text-light no-underline capitalize"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}