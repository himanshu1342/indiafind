import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CATEGORIES, CITIES, MOCK_LISTINGS } from '../data/staticData'
import ListingCard from '../components/ListingCard'
import styles from './Home.module.css'

export default function Home() {
  const [query, setQuery] = useState('')
  const [selectedCat, setSelectedCat] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (selectedCat) params.set('category', selectedCat)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>🇮🇳 India's Most Complete Directory</div>
        <h1 className={styles.heroTitle}>
          Find Any Business,<br />
          <em>Anywhere in India</em>
        </h1>
        <p className={styles.heroSub}>
          Doctors, restaurants, schools, shops, lawyers & more —<br />
          across every city & town in India.
        </p>

        <form className={styles.searchBar} onSubmit={handleSearch}>
          <select
            className={styles.searchSelect}
            value={selectedCat}
            onChange={e => setSelectedCat(e.target.value)}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(c => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Business name, city, or area…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.searchBtn}>Search</button>
        </form>

        <p className={styles.popular}>
          Popular:&nbsp;
          <Link to="/search?category=doctors&city=pune">Doctors in Pune</Link> ·&nbsp;
          <Link to="/search?category=restaurants&city=mumbai">Restaurants in Mumbai</Link> ·&nbsp;
          <Link to="/search?category=schools&city=delhi">Schools in Delhi</Link>
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}><strong>2,40,000+</strong><span>Listings</span></div>
          <div className={styles.stat}><strong>800+</strong><span>Cities</span></div>
          <div className={styles.stat}><strong>50+</strong><span>Categories</span></div>
          <div className={styles.stat}><strong>28</strong><span>States Covered</span></div>
        </div>
      </section>

      {/* AD */}
      <div className="ad-box">Google AdSense — 728×90 Banner</div>

      {/* CATEGORIES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Browse by <span>Category</span></h2>
          <Link to="/search" className={styles.seeAll}>See all 50+ →</Link>
        </div>
        <div className={styles.catGrid}>
          {CATEGORIES.map(cat => (
            <Link to={`/category/${cat.slug}`} key={cat.slug} className={styles.catCard}>
              <span className={styles.catIcon}>{cat.icon}</span>
              <span className={styles.catName}>{cat.name}</span>
              <span className={styles.catCount}>{cat.count} listings</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>⭐ Featured <span>Listings</span></h2>
          <Link to="/search" className={styles.seeAll}>View all →</Link>
        </div>
        <div className={styles.listingsGrid}>
          {MOCK_LISTINGS.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* AD */}
      <div className="ad-box">Google AdSense — Responsive Ad</div>

      {/* CITIES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Top <span>Cities</span></h2>
          <Link to="/search" className={styles.seeAll}>All 800+ cities →</Link>
        </div>
        <div className={styles.cityGrid}>
          {CITIES.map(city => (
            <Link to={`/city/${city.slug}`} key={city.slug} className={styles.cityCard}>
              <span className={styles.cityEmoji}>🏙️</span>
              <div>
                <div className={styles.cityName}>{city.name}</div>
                <div className={styles.cityState}>{city.state}</div>
                <div className={styles.cityCount}>{city.count} listings</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center' }}>
          How <span>IndiaFind</span> Works
        </h2>
        <div className={styles.howGrid}>
          {[
            { n: '01', title: 'Search Your City', desc: 'Type any city, town, or locality across India. We cover 800+ cities and thousands of pin codes.' },
            { n: '02', title: 'Pick a Category', desc: 'Choose from 50+ categories — doctors, schools, restaurants, lawyers, shops, and much more.' },
            { n: '03', title: 'Browse Listings', desc: 'See ratings, addresses, and contact details. Premium listings appear at the top.' },
            { n: '04', title: 'Contact Directly', desc: 'Call, message, or visit the business directly. No middlemen, no commissions.' },
          ].map(step => (
            <div key={step.n} className={styles.howCard}>
              <div className={styles.howNum}>{step.n}</div>
              <div className={styles.howTitle}>{step.title}</div>
              <p className={styles.howDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM CTA */}
      <div className={styles.premiumCta}>
        <h2>⭐ Get Your Business to the Top</h2>
        <p>Premium listings get 10× more visibility and appear first in searches — starting at just ₹999/month.</p>
        <Link to="/submit" className={styles.ctaBtn}>List Your Business Free</Link>
      </div>
    </div>
  )
}
