import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Announcements — Osprey Cafe',
  description: 'Events, specials, and news from Osprey Cafe on Queen West.',
}

const announcements = [
  {
    date: 'May 19, 2026',
    tag: 'Holiday Hours',
    title: 'Happy Victoria Day!',
    body: "Wishing everyone a happy long weekend! We're open on Victoria Day — come in, slow down, and treat yourself to something good. Whether you're starting the day with an espresso or winding down with a baked good, we've got you covered.",
    details: [
      { label: 'Date', value: 'Monday, May 19, 2026' },
      { label: 'Hours', value: '9:00 AM – 4:00 PM' },
      { label: 'Location', value: '1714 Queen St W, Toronto' },
      { label: 'Note', value: 'Reduced hours for the holiday' },
    ],
    accent: '#C4622F',
  },
  {
    date: 'June 17, 2026',
    tag: 'Event',
    title: 'Comedy Night at Osprey',
    body: "We're hosting a comedy night right here at the cafe — local stand-up comedians, a warm room, and a great excuse to come out on a Tuesday. Doors open at 7 PM. No cover charge. Grab a drink, pull up a seat, and expect to laugh.",
    details: [
      { label: 'Date', value: 'Tuesday, June 17, 2026' },
      { label: 'Time', value: 'Doors 7:00 PM · Show 7:30 PM' },
      { label: 'Location', value: '1714 Queen St W, Toronto' },
      { label: 'Admission', value: 'Free — no tickets required' },
    ],
    accent: '#C4622F',
  },
]

export default function AnnouncementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 bg-[#F7F2E8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C4622F] text-xs uppercase tracking-[0.3em] font-medium mb-4">
            Announcements
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-[#2C1F14] font-bold max-w-2xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What&apos;s on
            <br />
            <em className="text-[#C4622F]">at Osprey.</em>
          </h1>
          <p className="text-[#2C1F14]/50 text-base mt-4 max-w-sm">
            Events, specials, and news. Follow us on{' '}
            <a
              href="https://www.instagram.com/osprey.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4622F] hover:text-[#b05828] transition-colors"
            >
              Instagram
            </a>{' '}
            to stay in the loop.
          </p>
        </div>
      </section>

      {/* Announcements list */}
      <section className="py-16 px-6 bg-[#EEE8D6]">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {announcements.map(({ date, tag, title, body, details }) => (
            <article
              key={title}
              className="bg-[#F7F2E8] rounded-3xl border border-[#2C1F14]/8 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
                {/* Main content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C4622F]/10 text-[#C4622F] uppercase tracking-wider">
                      {tag}
                    </span>
                    <span className="text-[#2C1F14]/35 text-xs">{date}</span>
                  </div>

                  <h2
                    className="text-3xl sm:text-4xl text-[#2C1F14] font-bold mb-5 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {title}
                  </h2>

                  <p className="text-[#2C1F14]/60 text-sm leading-relaxed max-w-xl">{body}</p>
                </div>

                {/* Event details sidebar */}
                <div className="bg-[#2C1F14] p-8 lg:p-10 flex flex-col justify-center gap-5">
                  {details.map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[#F7F2E8]/30 text-xs uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      <p className="text-[#F7F2E8] text-sm font-medium">{value}</p>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-white/8">
                    <a
                      href="https://maps.google.com/?q=1714+Queen+St+W+Toronto+ON+M6R+1B3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#C4622F] text-[#F7F2E8] px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#b05828] transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Social follow CTA */}
      <section className="py-20 px-6 bg-[#F7F2E8] text-center">
        <div className="max-w-md mx-auto">
          <h2
            className="text-3xl sm:text-4xl text-[#2C1F14] font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Stay in the loop.
          </h2>
          <p className="text-[#2C1F14]/45 text-sm mb-8">
            We post updates, daily specials, and event announcements on Instagram and Facebook.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/osprey.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2C1F14] text-[#F7F2E8] px-6 py-2.5 rounded font-semibold text-sm hover:bg-[#3D2B1A] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @osprey.to
            </a>
            <a
              href="https://www.facebook.com/people/Osprey-Parkdale/61553383102264/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#2C1F14]/20 text-[#2C1F14]/70 px-6 py-2.5 rounded font-semibold text-sm hover:border-[#2C1F14]/40 hover:text-[#2C1F14] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
