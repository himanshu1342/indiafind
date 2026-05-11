import { useParams, Link } from 'react-router-dom'
import { useListing } from '../hooks/useListings'
import styles from './ListingDetail.module.css'

export default function ListingDetail() {
  const { id } = useParams()
  const { listing, loading } = useListing(id)

  if (loading) return <div className="spinner-wrap"><div className="spinner" /></div>
  if (!listing) return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <div style={{ fontSize: 48 }}>😕</div>
      <h2>Listing not found</h2>
      <Link to="/" style={{ color: 'var(--saffron)' }}>← Back to home</Link>
    </div>
  )

  const stars = (r) => '★'.repeat(Math.floor(r || 0)) + '☆'.repeat(5 - Math.floor(r || 0))

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* BREADCRUMB */}
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link> /&nbsp;
          <Link to={`/category/${listing.category?.slug}`}>{listing.category?.name}</Link> /&nbsp;
          <Link to={`/city/${listing.city?.slug}`}>{listing.city?.name}</Link> /&nbsp;
          <span>{listing.name}</span>
        </div>

        <div className={styles.layout}>
          {/* MAIN */}
          <div className={styles.main}>
            <div className={styles.header}>
              <div className={styles.headerTop}>
                <span className={styles.catTag}>{listing.category?.name}</span>
                {listing.is_premium && <span className="badge badge-gold">⭐ Premium</span>}
              </div>
              <h1 className={styles.name}>{listing.name}</h1>
              <div className={styles.meta}>
                <span>📍 {listing.area ? `${listing.area}, ` : ''}{listing.city?.name}</span>
                {listing.avg_rating > 0 && (
                  <span className={styles.rating}>
                    <span className={styles.stars}>{stars(listing.avg_rating)}</span>
                    {Number(listing.avg_rating).toFixed(1)}
                    {listing.review_count > 0 && <span className={styles.reviewCount}>({listing.review_count} reviews)</span>}
                  </span>
                )}
              </div>
            </div>

            {listing.tags?.length > 0 && (
              <div className={styles.tags}>
                {listing.tags.map((t, i) => <span key={i} className={styles.tag}>{t}</span>)}
              </div>
            )}

            {listing.description && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>About</h2>
                <p className={styles.description}>{listing.description}</p>
              </div>
            )}

            <div className="ad-box" style={{ margin: '24px 0' }}>Google AdSense</div>
          </div>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Contact Information</h3>

              {listing.phone && (
                <a href={`tel:${listing.phone}`} className={styles.contactBtn}>
                  📞 Call Now — {listing.phone}
                </a>
              )}

              {listing.email && (
                <a href={`mailto:${listing.email}`} className={styles.contactBtnOutline}>
                  ✉️ Send Email
                </a>
              )}

              {listing.website && (
                <a href={listing.website} target="_blank" rel="noopener noreferrer" className={styles.contactBtnOutline}>
                  🌐 Visit Website
                </a>
              )}

              {listing.address && (
                <div className={styles.addressBox}>
                  <div className={styles.addressLabel}>📍 Address</div>
                  <div className={styles.addressText}>{listing.address}</div>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(listing.name + ' ' + listing.city?.name)}`}
                    target="_blank" rel="noopener noreferrer"
                    className={styles.mapsLink}
                  >Open in Google Maps →</a>
                </div>
              )}
            </div>

            <div className={styles.claimBox}>
              <p>Is this your business?</p>
              <Link to="/submit" className={styles.claimBtn}>Claim this listing</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
