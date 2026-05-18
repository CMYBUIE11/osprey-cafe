import Link from 'next/link'
import Image from 'next/image'

const hours = [
  { day: 'Monday', time: '7:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '7:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '7:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '7:00 AM – 6:00 PM' },
  { day: 'Friday', time: '7:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
]

const reviews = [
  {
    text: 'Delicious food, well priced drinks and the atmosphere is great!',
    author: 'David',
  },
  {
    text: 'Best place to sit and work with a sweet treat and coffee.',
    author: 'Eva Sofia Flores',
  },
  {
    text: 'Osprey Cafe offers food, cafe beverages, booze and hair salon services.',
    author: 'Nicholas Musilli',
  },
]

const featured = [
  { name: 'Espresso', desc: 'Single or double shot, pulled fresh to order.', price: '$3' },
  { name: 'Oat Latte', desc: 'Silky oat milk steamed with a double espresso.', price: '$5' },
  { name: 'Breakfast Sandwich', desc: 'Egg, cheese, and your choice of fillings on a fresh bun.', price: '$7' },
  { name: 'Baked Good of the Day', desc: 'Ask us what came out of the oven this morning.', price: '$4' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-14 pb-16 overflow-hidden bg-[#2C1F14]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, #3D2B1A 0%, #2C1F14 65%)' }}
        />
        <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#C4622F] text-xs uppercase tracking-[0.3em] font-medium mb-6">
              Queen West · Parkdale · Toronto
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] text-[#F7F2E8] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your neighbourhood
              <br />
              <em className="text-[#C4622F]">coffee shop.</em>
            </h1>
            <p className="text-[#F7F2E8]/50 text-base leading-relaxed mb-8 max-w-md">
              Delicious coffee, fresh baked goods, and breakfast sandwiches at Queen W and
              Roncesvalles. A place to slow down, stay a while, and feel at home.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <Link
                href="/menu"
                className="bg-[#C4622F] text-[#F7F2E8] px-6 py-2.5 rounded font-semibold text-sm hover:bg-[#b05828] transition-colors"
              >
                View Menu
              </Link>
              <Link
                href="/announcements"
                className="text-[#F7F2E8]/55 hover:text-[#F7F2E8] px-2 py-2.5 text-sm transition-colors"
              >
                Upcoming Events →
              </Link>
            </div>
            {/* Quick stats */}
            <div className="flex gap-8 pt-6 border-t border-white/8">
              {[
                { value: '$1–10', label: 'Price range' },
                { value: '6 PM', label: 'Closes daily' },
                { value: 'Q.West', label: 'Roncesvalles' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-bold text-[#F7F2E8] text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {value}
                  </p>
                  <p className="text-[#F7F2E8]/25 text-xs uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — cafe photo */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-white/5">
              <Image
                src="/images/cafe-interior.webp"
                alt="Inside Osprey Cafe"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#2C1F14]/80 backdrop-blur-sm border border-white/5 rounded-xl p-4">
                <p className="text-[#F7F2E8]/50 text-xs uppercase tracking-widest mb-1">Open today until</p>
                <p className="text-[#F7F2E8] font-semibold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  6:00 PM
                </p>
                <p className="text-[#6B8E5E] text-xs mt-0.5">Holiday hours may vary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED MENU ── */}
      <section className="py-20 px-6 bg-[#F7F2E8]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-[#C4622F] text-sm">—</span>
            <span className="text-[#C4622F] text-xs uppercase tracking-[0.25em] font-medium">
              On the Menu
            </span>
          </div>
          <div className="flex items-end justify-between mb-10">
            <h2
              className="text-4xl sm:text-5xl text-[#2C1F14] font-bold leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Good things,<br />simply made.
            </h2>
            <Link
              href="/menu"
              className="hidden sm:inline-flex text-sm text-[#2C1F14]/50 hover:text-[#2C1F14] transition-colors"
            >
              Full menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map(({ name, desc, price }) => (
              <div
                key={name}
                className="bg-[#EEE8D6] rounded-2xl p-6 flex flex-col gap-3 border border-[#2C1F14]/6"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="text-lg font-bold text-[#2C1F14] leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {name}
                  </h3>
                  <span className="text-[#C4622F] font-semibold text-sm shrink-0">{price}</span>
                </div>
                <p className="text-[#2C1F14]/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/menu"
              className="text-sm text-[#2C1F14]/50 hover:text-[#2C1F14] transition-colors"
            >
              See the full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOURS ── */}
      <section className="py-20 px-6 bg-[#EEE8D6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[#C4622F] text-sm">—</span>
              <span className="text-[#C4622F] text-xs uppercase tracking-[0.25em] font-medium">
                Hours
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl text-[#2C1F14] font-bold mb-4 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Come find us.
            </h2>
            <p className="text-[#2C1F14]/50 text-sm leading-relaxed max-w-sm">
              We&apos;re open seven days a week. Pull up a chair, order something warm, and stay as
              long as you like.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#2C1F14]/8">
            {hours.map(({ day, time }) => (
              <div key={day} className="flex items-center justify-between py-3">
                <span className="text-[#2C1F14]/70 text-sm">{day}</span>
                <span className="text-[#2C1F14] text-sm font-medium">{time}</span>
              </div>
            ))}
            <p className="pt-4 text-[#2C1F14]/35 text-xs">Holiday hours may vary.</p>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-20 px-6 bg-[#F7F2E8]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-[#C4622F] text-sm">—</span>
            <span className="text-[#C4622F] text-xs uppercase tracking-[0.25em] font-medium">
              Location
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <h2
                className="text-3xl sm:text-4xl text-[#2C1F14] font-bold mb-4 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Queen West &<br />Roncesvalles.
              </h2>
              <p className="text-[#2C1F14]/50 text-sm leading-relaxed mb-6">
                We&apos;re right at the intersection of two of Toronto&apos;s best neighbourhoods.
                Easy to get to, hard to leave.
              </p>
              <a
                href="https://maps.google.com/?q=1714+Queen+St+W+Toronto+ON+M6R+1B3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#C4622F] hover:text-[#b05828] transition-colors font-medium"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                1714 Queen St W, Toronto, ON M6R 1B3
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#2C1F14]/8 shadow-sm aspect-video lg:aspect-auto lg:h-72">
              <iframe
                src="https://maps.google.com/maps?q=1714+Queen+St+W+Toronto+ON+M6R+1B3&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Osprey Cafe on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 px-6 bg-[#2C1F14]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-10">
            <span className="text-[#C4622F] text-sm">—</span>
            <span className="text-[#C4622F] text-xs uppercase tracking-[0.25em] font-medium">
              What People Say
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(({ text, author }) => (
              <div
                key={author}
                className="bg-[#3D2B1A] border border-white/5 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C4622F">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#F7F2E8]/70 text-sm leading-relaxed">&ldquo;{text}&rdquo;</p>
                <p className="text-[#F7F2E8]/35 text-xs font-medium uppercase tracking-wider">— {author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
