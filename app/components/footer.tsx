import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2C1F14] border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <p className="text-[#F7F2E8] font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Osprey Cafe
          </p>
          <p className="text-[#F7F2E8]/40 text-sm leading-relaxed">
            Coffee, baked goods, and breakfast sandwiches on Queen West.
          </p>
        </div>

        {/* Hours */}
        <div>
          <p className="text-[#F7F2E8]/25 text-xs uppercase tracking-widest font-medium mb-3">Hours</p>
          <div className="flex flex-col gap-1 text-sm text-[#F7F2E8]/60">
            <div className="flex justify-between gap-4">
              <span>Mon – Fri</span>
              <span>7:00 AM – 6:00 PM</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Sat – Sun</span>
              <span>8:00 AM – 6:00 PM</span>
            </div>
            <p className="text-[#F7F2E8]/30 text-xs mt-1">Holiday hours may vary.</p>
          </div>
        </div>

        {/* Visit & Social */}
        <div>
          <p className="text-[#F7F2E8]/25 text-xs uppercase tracking-widest font-medium mb-3">Find Us</p>
          <a
            href="https://maps.google.com/?q=1714+Queen+St+W+Toronto+ON+M6R+1B3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7F2E8]/60 text-sm hover:text-[#F7F2E8] transition-colors block mb-3"
          >
            1714 Queen St W<br />Toronto, ON M6R 1B3
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/osprey.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F2E8]/40 hover:text-[#C4622F] transition-colors text-sm flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Osprey-Parkdale/61553383102264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F2E8]/40 hover:text-[#C4622F] transition-colors text-sm flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#F7F2E8]/20 text-xs">
          © {new Date().getFullYear()} Osprey Cafe. All rights reserved.
        </p>
        <p className="text-[#F7F2E8]/15 text-xs">
          Site by{' '}
          <a href="https://clw-designs.com" className="hover:text-[#F7F2E8]/35 transition-colors">
            CLW Designs
          </a>
        </p>
      </div>
    </footer>
  )
}
