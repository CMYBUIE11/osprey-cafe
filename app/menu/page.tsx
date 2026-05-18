import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Menu — Osprey Cafe',
  description: 'Coffee, baked goods, and breakfast sandwiches. Everything priced $1–$10.',
}

type MenuItem = {
  name: string
  desc: string
  price: string
}

type Category = {
  title: string
  subtitle: string
  items: MenuItem[]
}

const menu: Category[] = [
  {
    title: 'Coffee & Espresso',
    subtitle: 'All espresso drinks can be made with oat, almond, or whole milk.',
    items: [
      { name: 'Espresso', desc: 'Single or double shot, pulled fresh.', price: '$3' },
      { name: 'Americano', desc: 'Espresso with hot water. Bold and clean.', price: '$3.50' },
      { name: 'Cappuccino', desc: 'Equal parts espresso, steamed milk, and foam.', price: '$4.50' },
      { name: 'Latte', desc: 'Double espresso with silky steamed milk.', price: '$5' },
      { name: 'Flat White', desc: 'Ristretto shots with microfoam. Smooth and strong.', price: '$5' },
      { name: 'Cortado', desc: 'Espresso cut with a small amount of warm milk.', price: '$4' },
    ],
  },
  {
    title: 'Filter & Other Drinks',
    subtitle: 'Rotating single-origin filter coffee and seasonal beverages.',
    items: [
      { name: 'Drip Coffee', desc: 'Fresh brewed, rotating origin. Always a good cup.', price: '$2.50' },
      { name: 'Cold Brew', desc: 'Steeped overnight. Smooth and low-acid.', price: '$5' },
      { name: 'Matcha Latte', desc: 'Ceremonial grade matcha with your choice of milk.', price: '$5.50' },
      { name: 'Chai Latte', desc: 'House-spiced chai with steamed milk.', price: '$5' },
      { name: 'Hot Chocolate', desc: 'Rich, not too sweet. Made with real chocolate.', price: '$4.50' },
      { name: 'Herbal Tea', desc: 'A selection of loose-leaf teas. Ask us what we have today.', price: '$3.50' },
    ],
  },
  {
    title: 'Breakfast Sandwiches',
    subtitle: 'Made fresh every morning. Available until we sell out.',
    items: [
      { name: 'Classic Egg & Cheese', desc: 'Scrambled egg and melted cheddar on a toasted bun.', price: '$7' },
      { name: 'Bacon, Egg & Cheese', desc: 'Crispy bacon with scrambled egg and aged cheddar.', price: '$8' },
      { name: 'Veggie Sandwich', desc: 'Roasted peppers, egg, and brie on sourdough.', price: '$8' },
      { name: 'Avocado Toast', desc: 'Smashed avo on thick sourdough with chili flakes and lemon.', price: '$9' },
    ],
  },
  {
    title: 'Baked Goods',
    subtitle: 'Baked in-house. Selection rotates daily — ask what\'s fresh.',
    items: [
      { name: 'Croissant', desc: 'Buttery, flaky, and made properly. Plain or with jam.', price: '$4' },
      { name: 'Banana Bread', desc: 'A thick slice, lightly toasted if you like.', price: '$4' },
      { name: 'Cookie', desc: 'Rotating flavours. Almost always chocolate chip.', price: '$3' },
      { name: 'Scone', desc: 'Classic and seasonal flavours. Served with clotted cream.', price: '$4.50' },
      { name: 'Muffin', desc: 'Rotating flavours baked fresh each morning.', price: '$3.50' },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 bg-[#F7F2E8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C4622F] text-xs uppercase tracking-[0.3em] font-medium mb-4">
            Menu
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-[#2C1F14] font-bold max-w-2xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Simple food,
            <br />
            <em className="text-[#C4622F]">done well.</em>
          </h1>
          <p className="text-[#2C1F14]/50 text-base mt-4 max-w-sm">
            Everything on our menu is $1–$10. Good ingredients, fair prices, no fuss.
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden w-full max-w-sm aspect-square relative">
            <Image
              src="/images/matcha-latte.webp"
              alt="Matcha latte at Osprey Cafe"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Menu categories */}
      {menu.map((category, i) => (
        <section
          key={category.title}
          className={`py-16 px-6 ${i % 2 === 0 ? 'bg-[#EEE8D6]' : 'bg-[#F7F2E8]'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2
                className="text-2xl sm:text-3xl text-[#2C1F14] font-bold mb-1"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {category.title}
              </h2>
              <p className="text-[#2C1F14]/45 text-sm">{category.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map(({ name, desc, price }) => (
                <div
                  key={name}
                  className="flex items-start justify-between gap-4 py-4 border-b border-[#2C1F14]/8 last:border-0"
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[#2C1F14] font-semibold text-sm"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {name}
                    </span>
                    <span className="text-[#2C1F14]/45 text-xs leading-relaxed">{desc}</span>
                  </div>
                  <span className="text-[#C4622F] font-semibold text-sm shrink-0">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Note */}
      <section className="py-12 px-6 bg-[#2C1F14] text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-[#F7F2E8]/50 text-sm leading-relaxed">
            Menu and daily specials may vary. Seasonal items rotate regularly —
            follow us on{' '}
            <a
              href="https://www.instagram.com/osprey.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4622F] hover:text-[#d4733f] transition-colors"
            >
              Instagram
            </a>{' '}
            to stay up to date.
          </p>
        </div>
      </section>
    </>
  )
}
