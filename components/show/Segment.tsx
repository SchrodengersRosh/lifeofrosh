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
   * It is a layered editorial composition rather than a normal grid.
   */
  if (segment.id === 'open') {
    return (
      <section
        id={segment.id}
        data-cue={segment.cue}
        className="relative min-h-[calc(100svh-48px)] overflow-hidden border-b border-faint"
      >
        <div className="relative mx-auto min-h-[calc(100svh-48px)] w-full max-w-[1440px] px-5 md:px-8 lg:px-10">

          {/* Cue rail */}
          <aside className="absolute left-5 top-10 z-40 md:left-8 md:top-12 lg:left-10">
            <div className="md:sticky md:top-[72px]">
              <span className="text-cue-sm text-dim block">
                CUE {segment.cue}
              </span>

              <span className="text-cue text-dim block mt-1">
                {segment.timecode}
              </span>

              <span className="text-cue-sm text-amber block mt-2">
                {segment.label}
              </span>
            </div>
          </aside>

          {/* =====================================================
              PORTRAIT LAYER

              The image is deliberately oversized and offset.
              The face sits in the right visual field while the
              darker torso enters the typography area.
              ===================================================== */}
          <div
            className="
              open-portrait
              pointer-events-none
              absolute
              z-10
              left-[45%]
              top-[14%]
              w-[clamp(620px,58vw,860px)]
              md:left-[45%]
              lg:left-[44%]
              xl:left-[43%]
            "
          >
            <div className="relative">
              <Image
                src="/images/image.png"
                alt="Black and white portrait of Roshan"
                width={1327}
                height={1186}
                priority
                className="open-portrait-image block h-auto w-full"
              />

              <p className="portrait-annotation absolute bottom-[12%] right-[7%] z-30">
                same person.
                <br />
                different rooms.
              </p>
            </div>
          </div>

          {/* =====================================================
              TYPOGRAPHY LAYER

              Above the image, but intentionally allowed to
              overlap the darker shoulder/torso area.
              ===================================================== */}
          <div className="relative z-20 flex min-h-[calc(100svh-48px)] items-center">
            <div
              className="
                open-copy
                ml-[17%]
                w-[52%]
                max-w-[700px]
                py-28
                md:ml-[17%]
                md:w-[52%]
                lg:ml-[17%]
                lg:w-[51%]
              "
            >
              <div className="space-y-6 md:space-y-7">

                {segment.spoken.map((line, i) => {
                  const widthClasses = [
                    'max-w-[610px]',
                    'max-w-[500px]',
                    'max-w-[650px]',
                    'max-w-[620px]',
                    'max-w-[570px]',
                    'max-w-[500px]',
                    'max-w-[430px]',
                    'max-w-[560px]',
                    'max-w-[330px]',
                  ]

                  return (
                    <p
                      key={i}
                      className={`
                        text-light
                        text-[clamp(1.4rem,2.45vw,2.45rem)]
                        leading-[1.14]
                        tracking-[-0.035em]
                        ${widthClasses[i] ?? 'max-w-[600px]'}
                      `}
                    >
                      {line}
                    </p>
                  )
                })}
              </div>

              {segment.after && (
                <p className="stage-direction mt-12 mb-8 max-w-[520px]">
                  {segment.after}
                </p>
              )}

              {segment.links && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {segment.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-cue text-light no-underline transition-colors hover:text-amber"
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
            </div>
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
          : 'py-24 md:py-40'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`grid grid-cols-1 ${
            isOpen ? '' : 'md:grid-cols-12'
          } gap-8 md:gap-12`}
        >

          {/* Cue block */}
          {!isOpen && (
            <div className="md:col-span-3 lg:col-span-2">
              <div className="md:sticky md:top-[72px]">
                <span className="text-cue-sm text-dim block">
                  CUE {segment.cue}
                </span>

                <span className="text-cue text-dim block mt-1">
                  {segment.timecode}
                </span>

                <span className="text-cue-sm text-amber block mt-2">
                  {segment.label}
                </span>
              </div>
            </div>
          )}

          {/* Content */}
          <div
            className={
              isOpen
                ? 'max-w-3xl mx-auto text-center'
                : 'md:col-span-9 lg:col-span-10'
            }
          >

            {/* Open segment: cue info inline */}
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