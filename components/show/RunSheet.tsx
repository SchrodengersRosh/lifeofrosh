'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { segments } from '@/content/show'
import { useShow } from './ShowContext'

export function RunSheet() {
  const { currentCue } = useShow()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    if (mobileOpen) {
      window.addEventListener('keydown', onKey)

      return () => {
        window.removeEventListener('keydown', onKey)
      }
    }
  }, [mobileOpen])

  const handleNavClick = useCallback(() => {
    setMobileOpen(false)
  }, [])

  const openSegment = segments.find((segment) => segment.cue === '00')

  return (
    <>
      {/* =======================================================
          MASTHEAD
          Quiet. Fixed. No running-time gimmick.
          ======================================================= */}
      <header className="run-masthead fixed left-0 right-0 top-0 z-50">
        <div className="run-masthead-inner">
          <Link
            href="/"
            className="run-masthead-brand no-underline"
          >
            HEY ROSHAN
          </Link>

          <span
            className="run-masthead-divider"
            aria-hidden="true"
          >
            /
          </span>

          <span className="run-masthead-show">
            RUN OF SHOW
          </span>

          <div className="ml-auto flex items-center">
            <Link
              href="/life"
              className="run-life-link no-underline"
            >
              /LIFE
            </Link>
          </div>
        </div>
      </header>

      {/* =======================================================
          DESKTOP CUE RAIL
          This is now the actual navigation.
          ======================================================= */}
      {isHome && (
        <aside
          className="run-cue-rail fixed left-[2.5vw] top-[28vh] z-40 hidden md:block"
          aria-label="Run of Show cues"
        >
          <div className="run-cue-current">
            <span className="text-cue-sm text-dim block">
              CUE {currentCue}
            </span>

            <span className="text-cue text-dim block mt-1">
              {segments.find((segment) => segment.cue === currentCue)
                ?.timecode ?? openSegment?.timecode}
            </span>

            <span className="text-cue-sm text-amber block mt-2">
              {segments.find((segment) => segment.cue === currentCue)
                ?.label ?? openSegment?.label}
            </span>
          </div>

          <nav
            className="run-cue-index"
            aria-label="Jump to cue"
          >
            {segments.map((segment) => {
              const active = currentCue === segment.cue

              return (
                <a
                  key={segment.id}
                  href={`/#${segment.id}`}
                  className={`run-cue-number ${
                    active
                      ? 'run-cue-number--active'
                      : ''
                  }`}
                  aria-label={`Cue ${segment.cue}: ${segment.label}`}
                  aria-current={active ? 'step' : undefined}
                >
                  {segment.cue}
                  <span className="run-cue-tooltip">
                    {segment.label}
                  </span>
                </a>
              )
            })}
          </nav>
        </aside>
      )}

      {/* =======================================================
          NON-HOME DESKTOP HEADER
          ======================================================= */}
      {!isHome && (
        <div className="run-secondary-nav fixed left-0 right-0 top-0 z-50">
          <Link
            href="/"
            className="text-cue-sm text-dim hover:text-light no-underline transition-colors"
          >
            ← BACK TO THE SHOW
          </Link>
        </div>
      )}

      {/* =======================================================
          MOBILE
          ======================================================= */}
      {isHome && (
        <div className="run-mobile-cue fixed right-4 top-4 z-50 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-cue-sm text-dim hover:text-light transition-colors"
            aria-label="Open cue list"
          >
            CUES
          </button>
        </div>
      )}

      {mobileOpen && (
        <div
          className="run-mobile-overlay fixed inset-0 z-[70] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Cue list"
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute right-5 top-5 text-cue-sm text-dim hover:text-light"
            aria-label="Close cue list"
            autoFocus
          >
            CLOSE
          </button>

          <nav
            className="m-auto flex w-full flex-col px-8"
            aria-label="Cue list"
          >
            {segments.map((segment) => (
              <a
                key={segment.id}
                href={`/#${segment.id}`}
                onClick={handleNavClick}
                className={`run-mobile-cue-item ${
                  currentCue === segment.cue
                    ? 'run-mobile-cue-item--active'
                    : ''
                }`}
              >
                <span className="text-cue">
                  {segment.cue}
                </span>

                <span className="run-mobile-cue-label">
                  {segment.label}
                </span>

                <span className="text-cue text-dim">
                  {segment.timecode}
                </span>
              </a>
            ))}

            <Link
              href="/life"
              onClick={handleNavClick}
              className="mt-8 text-cue-sm text-dim hover:text-light no-underline"
            >
              /LIFE
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}