import { Link } from 'react-router-dom'
import styles from './ListingCard.module.css'

export default function ListingCard({ listing }) {
  const { id, name, category, city, area, phone, avg_rating, review_count, tags, is_premium } = listing

  const stars = (rating) => {
    const full = Math.floor(rating || 0)
    return '★'.repeat(full) + '☆'.repeat(5 - full)
  }

  return (
    <Link to={`/listing/${id}`} className={`${styles.card} ${is_premium ? styles.premium : ''}`}>
      {is_premium && <span className={`badge badge-gold ${styles.premiumBadge}`}>⭐ Premium</span>}

      <div className={styles.categoryTag}>{category?.name || 'Business'}</div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.addr}>
        📍 {area ? `${area}, ` : ''}{city?.name || ''}
      </p>

      {tags?.length > 0 && (
        <div className={styles.tags}>
          {tags.slice(0, 3).map((t, i) => (
            <span key={i} className={styles.tag}>{t}</span>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.rating}>
          <span className={styles.stars}>{stars(avg_rating)}</span>
          <span>{avg_rating ? Number(avg_rating).toFixed(1) : 'New'}</span>
          {review_count > 0 && <span className={styles.reviewCount}>({review_count})</span>}
        </div>
        {phone && (
          <span className={styles.phone} onClick={e => { e.preventDefault(); window.open(`tel:${phone}`) }}>
            📞 Call
          </span>
        )}
      </div>
    </Link>
  )
}
