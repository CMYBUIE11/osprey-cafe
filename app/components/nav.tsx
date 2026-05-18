'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/announcements', label: 'Announcements' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F2E8]/95 backdrop-blur-md border-b border-[#2C1F14]/8">
      <div className="max-w-6xl mx-auto px-6 h-14 grid grid-cols-3 items-center">
        {/* Left — Logo */}
        <Link
          href="/"
          className="text-[#2C1F14] font-semibold tracking-tight text-sm"
          style={{ fontFamily: 'Playfair Display, serif' }}
          onClick={() => setOpen(false)}
        >
          Osprey Cafe
        </Link>

        {/* Center — Nav links */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                href === '/'
                  ? pathname === '/'
                    ? 'text-[#2C1F14] font-medium'
                    : 'text-[#2C1F14]/45 hover:text-[#2C1F14]'
                  : pathname === href || pathname.startsWith(href + '/')
                  ? 'text-[#2C1F14] font-medium'
                  : 'text-[#2C1F14]/45 hover:text-[#2C1F14]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right — Address */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <a
            href="https://maps.google.com/?q=1714+Queen+St+W+Toronto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C1F14]/40 hover:text-[#2C1F14]/70 text-xs transition-colors"
          >
            1714 Queen St W
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex justify-end md:hidden">
          <button
            className="p-2 text-[#2C1F14]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F7F2E8] border-t border-[#2C1F14]/8">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#2C1F14]/70 hover:text-[#2C1F14] text-base transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#2C1F14]/8">
              <a
                href="https://maps.google.com/?q=1714+Queen+St+W+Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C1F14]/40 text-sm"
              >
                1714 Queen St W, Toronto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
