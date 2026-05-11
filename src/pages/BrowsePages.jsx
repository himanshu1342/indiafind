import { useParams, Link } from 'react-router-dom'
import { CITIES, CATEGORIES } from '../data/staticData'
import { useListings } from '../hooks/useListings'
import ListingCard from '../components/ListingCard'
import styles from './BrowsePage.module.css'

export function CityPage() {
  const { slug } = useParams()
  const city = CITIES.find(c => c.slug === slug) || { name: slug, state: '' }
  const { listings, loading } = useListings({ city: slug })

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link to="/" className={styles.back}>← Back</Link>
          <div className={styles.icon}>🏙️</div>
          <h1 className={styles.title}>{city.name}</h1>
          <p className={styles.sub}>{city.state} · {city.count || 'Thousands of'} local listings</p>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Browse Categories in {city.name}</h2>
        <div className={styles.catGrid}>
          {CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              to={`/search?city=${slug}&category=${cat.slug}`}
              className={styles.catChip}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        <div className="ad-box">Google AdSense</div>

        <h2 className={styles.sectionTitle} style={{ marginTop: 32 }}>
          All Listings in {city.name}
        </h2>
        {loading ? (
          <div className="spinner-wrap"><div className="spinner" /></div>
        ) : (
          <div className={styles.grid}>
            {listings.map(l => <ListingCard key={l.id} listing={l} />)}
          </div>
        )}
        {!loading && listings.length === 0 && (
          <div className={styles.empty}>
            <p>No listings yet for {city.name}. <Link to="/submit" style={{ color: 'var(--saffron)' }}>Add one!</Link></p>
          </div>
        )}
      </div>
    </div>
  )
}

export function CategoryPage() {
  const { slug } = useParams()
  const cat = CATEGORIES.find(c => c.slug === slug) || { name: slug, icon: '📋' }
  const { listings, loading } = useListings({ category: slug })

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link to="/" className={styles.back}>← Back</Link>
          <div className={styles.icon}>{cat.icon}</div>
          <h1 className={styles.title}>{cat.name}</h1>
          <p className={styles.sub}>{cat.count || 'Thousands of'} listings across India</p>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Browse {cat.name} by City</h2>
        <div className={styles.catGrid}>
          {CITIES.slice(0, 16).map(city => (
            <Link
              key={city.slug}
              to={`/search?city=${city.slug}&category=${slug}`}
              className={styles.catChip}
            >
              🏙️ {city.name}
            </Link>
          ))}
        </div>

        <div className="ad-box">Google AdSense</div>

        <h2 className={styles.sectionTitle} style={{ marginTop: 32 }}>
          Featured {cat.name}
        </h2>
        {loading ? (
          <div className="spinner-wrap"><div className="spinner" /></div>
        ) : (
          <div className={styles.grid}>
            {listings.map(l => <ListingCard key={l.id} listing={l} />)}
          </div>
        )}
        {!loading && listings.length === 0 && (
          <div className={styles.empty}>
            <p>No listings yet. <Link to="/submit" style={{ color: 'var(--saffron)' }}>Add one!</Link></p>
          </div>
        )}
      </div>
    </div>
  )
}
