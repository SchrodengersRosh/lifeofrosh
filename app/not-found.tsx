import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dead air',
}

export default function NotFound() {
  return (
    <div className="min-h-[calc(100svh-48px)] flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-cue-sm text-dim block mb-4">
          CUE ?? · --:--
        </span>
        <h1 className="text-title text-light mb-6">DEAD AIR</h1>
        <p className="text-spoken text-dim mb-8">
          This page isn&apos;t in the run sheet.
        </p>
        <Link href="/" className="text-cue text-light hover:text-amber no-underline">
          Back to cue 00 →
        </Link>
      </div>
    </div>
  )
}
