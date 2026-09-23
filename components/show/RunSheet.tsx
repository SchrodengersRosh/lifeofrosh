'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { segments } from '@/content/show'
import { siteConfig } from '@/content/site'
import { useShow } from './ShowContext'

const NAV_CUES = segments.filter((s) => s.cue !== '00')

export function RunSheet() {
  const { currentCue } = useShow()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  // Body scroll lock
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

  // Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    if (mobileOpen) {
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  const handleNavClick = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center px-4 md:px-6 border-b border-faint"
        style={{ backgroundColor: 'var(--color-stage)' }}
        aria-label="Run of Show navigation"
      >
        {/* Left: ROSHAN  RUN OF SHOW */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="text-cue-sm font-bold text-light no-underline">
            ROSHAN
          </Link>
          <span className="text-cue-sm text-dim hidden sm:inline">RUN OF SHOW</span>
        </div>

        {/* Center: cue list (desktop) */}
        {isHome && (
          <div className="hidden md:flex items-center gap-4 mx-auto">
            {NAV_CUES.map((seg) => (
              <a
                key={seg.id}
                href={`/#${seg.id}`}
                onClick={handleNavClick}
                className={`text-cue-sm no-underline transition-colors ${
                  currentCue === seg.cue
                    ? 'text-amber'
                    : 'text-dim hover:text-light'
                }`}
              >
                {seg.cue} {seg.label.replace('THE ', '').replace('ON ', '').trim()}
              </a>
            ))}
          </div>
        )}

        {/* Center: back link (non-home) */}
        {!isHome && (
          <div className="hidden md:flex items-center mx-auto">
            <Link href="/" className="text-cue-sm text-dim hover:text-light no-underline">
              BACK TO THE SHOW
            </Link>
          </div>
        )}

        {/* Right */}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-cue-sm text-dim hidden lg:inline">
            {siteConfig.host.runningTime.toUpperCase()}
          </span>
          {/* Mobile: current cue + CUES button */}
          {isHome && (
            <>
              <span className="text-cue-sm text-amber md:hidden">
                CUE {currentCue}
              </span>
              <button
                onClick={() => setMobileOpen(true)}
                className="text-cue-sm text-dim hover:text-light md:hidden"
                aria-label="Open cue list"
              >
                CUES
              </button>
            </>
          )}
          {!isHome && (
            <Link href="/" className="text-cue-sm text-dim hover:text-light no-underline md:hidden">
              SHOW
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--color-stage)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Cue list"
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-3 right-4 text-cue-sm text-dim hover:text-light"
            aria-label="Close cue list"
            autoFocus
          >
            CLOSE
          </button>
          <div className="flex flex-col items-center gap-6">
            {segments.map((seg) => (
              <a
                key={seg.id}
                href={`/#${seg.id}`}
                onClick={handleNavClick}
                className="flex flex-col items-center gap-1 no-underline group"
              >
                <span className="text-cue text-dim group-hover:text-amber">
                  {seg.timecode}
                </span>
                <span
                  className="text-3xl uppercase tracking-wide group-hover:text-light"
                  style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
                >
                  {seg.label.replace('THE ', '').replace('ON ', '').trim()}
                </span>
              </a>
            ))}
            <a
              href="/life"
              onClick={handleNavClick}
              className="text-cue-sm text-dim hover:text-light no-underline mt-4"
            >
              LIFE
            </a>
          </div>
        </div>
      )}
    </>
  )
}
