'use client'

import { useEffect, useRef } from 'react'
import { useShow } from './ShowContext'

export function CueObserver() {
  const { setCurrentCue } = useShow()
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll('[data-cue]')
    if (!sections.length) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cue = (entry.target as HTMLElement).dataset.cue
            if (cue) setCurrentCue(cue)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    sections.forEach((section) => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [setCurrentCue])

  return null
}
