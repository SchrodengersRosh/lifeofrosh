export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 md:px-6 border-t border-faint">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-cue-sm text-dim">
          Roshan · Bengaluru · {year}
        </span>
        <a
          href="#main"
          className="text-cue-sm text-dim hover:text-light no-underline"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
