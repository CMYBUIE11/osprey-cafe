import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About — Osprey Cafe',
  description: 'A neighbourhood coffee shop at Queen W and Roncesvalles, Toronto.',
}

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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 bg-[#2C1F14]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C4622F] text-xs uppercase tracking-[0.3em] font-medium mb-4">
            About
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-[#F7F2E8] font-bold max-w-3xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A place to
            <br />
            <em className="text-[#C4622F]">slow down.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F7F2E8] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl sm:text-4xl text-[#2C1F14] font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Rooted in Queen West.
            </h2>
            <p className="text-[#2C1F14]/55 text-sm leading-relaxed mb-4">
              Osprey Cafe sits at the corner of Queen St W and Roncesvalles — right where two of
              Toronto&apos;s most beloved neighbourhoods meet. We opened because we believe every
              community deserves a place that feels genuinely local: somewhere you can get a
              really good coffee, grab something fresh to eat, and actually enjoy being.
            </p>
            <p className="text-[#2C1F14]/55 text-sm leading-relaxed mb-4">
              Our menu is simple by design. We source good ingredients, bake in-house every
              morning, and keep prices honest. Everything is $1–$10 — because great coffee
              shouldn&apos;t be a luxury.
            </p>
            <p className="text-[#2C1F14]/55 text-sm leading-relaxed">
              Whether you&apos;re here for a quick espresso before work, a slow Saturday morning
              with a baked good, or an afternoon with your laptop — we&apos;re glad you&apos;re
              here.
            </p>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image
              src="/images/owners.jpg"
              alt="The owners of Osprey Cafe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 px-6 bg-[#EEE8D6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-[#C4622F] text-sm">—</span>
            <span className="text-[#C4622F] text-xs uppercase tracking-[0.25em] font-medium">
              What We Offer
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#2C1F14] font-bold mb-14"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            More than coffee.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Espresso & Filter',
                desc: 'Single-origin filter coffee and espresso drinks made with care. Oat, almond, and whole milk available.',
              },
              {
                title: 'Baked In-House',
                desc: 'Croissants, banana bread, scones, and muffins baked fresh each morning. Selection rotates daily.',
              },
              {
                title: 'Breakfast Sandwiches',
                desc: 'Simple, satisfying breakfast sandwiches on fresh buns and sourdough. Available until sold out.',
              },
              {
                title: 'Drinks & More',
                desc: 'Matcha, chai, cold brew, and seasonal specials. Plus cafe beverages and a laid-back vibe.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-3 border-t border-[#2C1F14]/12 pt-5">
                <h3
                  className="text-lg font-bold text-[#2C1F14]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {title}
                </h3>
                <p className="text-[#2C1F14]/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-[#2C1F14]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-[#C4622F] text-sm">—</span>
            <span className="text-[#C4622F] text-xs uppercase tracking-[0.25em] font-medium">
              Neighbours Love It
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#F7F2E8] font-bold mb-14"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Rated 5/5 on blogTO.
          </h2>

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
                <p className="text-[#F7F2E8]/35 text-xs font-medium uppercase tracking-wider">
                  — {author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 text-center px-6 bg-[#F7F2E8]">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl text-[#2C1F14] font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Come say hello.
          </h2>
          <p className="text-[#2C1F14]/45 mb-8 text-sm">
            1714 Queen St W — open daily, closing at 6 PM.
          </p>
          <a
            href="https://maps.google.com/?q=1714+Queen+St+W+Toronto+ON+M6R+1B3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C4622F] text-[#F7F2E8] px-8 py-3 rounded font-semibold text-sm hover:bg-[#b05828] transition-colors"
          >
            Get Directions →
          </a>
        </div>
      </section>
    </>
  )
}
