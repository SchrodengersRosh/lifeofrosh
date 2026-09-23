import type { EvidenceImage } from '@/content/show'
import Image from 'next/image'

interface ImageSlotProps {
  image: EvidenceImage
  aspect?: string
}

export function ImageSlot({ image, aspect = '16/10' }: ImageSlotProps) {
  if (image.temporary) {
    return (
      <figure className="flex flex-col gap-2">
        <div
          className="border border-faint flex flex-col items-center justify-center gap-2 p-6"
          style={{ aspectRatio: aspect, backgroundColor: 'var(--color-stage-2)' }}
        >
          <span className="text-cue-sm text-dim">TEMP IMAGE · REPLACE</span>
          <span className="text-cue text-dim text-center max-w-[20rem]">
            {image.alt}
          </span>
        </div>
        {image.caption && (
          <figcaption className="text-cue-sm text-dim">{image.caption}</figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className="flex flex-col gap-2 relative">
      <Image
        src={image.src}
        alt={image.alt}
        className="w-full border border-faint"
        style={{ position: 'absolute', inset: 0 }}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
      {image.caption && (
        <figcaption className="text-cue-sm text-dim">{image.caption}</figcaption>
      )}
    </figure>
  )
}
