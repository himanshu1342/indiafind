import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CATEGORIES, CITIES } from '../data/staticData'
import { useListings } from '../hooks/useListings'
import ListingCard from '../components/ListingCard'
import styles from './Search.module.css'

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [city, setCity] = useState(searchParams.get('city') || '')
  const [page, setPage] = useState(1)

  const { listings, loading, totalPages } = useListings({ query, category, city, page })

  const applyFilters = () => {
    const params = {}
    if (query) params.q = query
    if (category) params.category = category
    if (city) params.city = city
    setSearchParams(params)
    setPage(1)
  }

  const clearFilters = () => {
    setQuery(''); setCategory(''); setCity('')
    setSearchParams({})
  }

  const activeFilters = [
    category && CATEGORIES.find(c => c.slug === category)?.name,
    city && CITIES.find(c => c.slug === city)?.name,
    query && `"${query}"`,
  ].filter(Boolean)

  return (
    <div className={styles.page}>
      {/* FILTER BAR */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="Search businesses, doctors, schools…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && applyFilters()}
          />
          <select className={styles.filterSelect} value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            {CATEGORIES.map(c => <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>)}
          </select>
          <select className={styles.filterSelect} value={city} onChange={e => setCity(e.target.value)}>
            <option value="">All Cities</option>
            {CITIES.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
          <button className={styles.searchBtn} onClick={applyFilters}>Search</button>
          {activeFilters.length > 0 && (
            <button className={styles.clearBtn} onClick={clearFilters}>✕ Clear</button>
          )}
        </div>
      </div>

      <div className={styles.content}>
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>Categories</h3>
            {CATEGORIES.map(c => (
              <button
                key={c.slug}
                className={`${styles.sideItem} ${category === c.slug ? styles.sideItemActive : ''}`}
                onClick={() => { setCategory(c.slug === category ? '' : c.slug); setPage(1) }}
              >
                <span>{c.icon}</span> {c.name}
              </button>
            ))}
          </div>
        </aside>

        {/* RESULTS */}
        <main className={styles.results}>
          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className={styles.activeFilters}>
              {activeFilters.map((f, i) => (
                <span key={i} className="badge badge-saffron">{f}</span>
              ))}
              <span className={styles.resultCount}>{listings.length} results</span>
            </div>
          )}

          {loading ? (
            <div className="spinner-wrap"><div className="spinner" /></div>
          ) : listings.length === 0 ? (
            <div className={styles.empty}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <h3>No listings found</h3>
              <p>Try a different search or <button onClick={clearFilters} className={styles.linkBtn}>clear filters</button></p>
            </div>
          ) : (
            <>
              <div className="ad-box" style={{ margin: '0 0 20px' }}>Google AdSense</div>
              <div className={styles.grid}>
                {listings.map(l => <ListingCard key={l.id} listing={l} />)}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className={styles.pageBtn}>← Prev</button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button
                      key={p}
                      className={`${styles.pageBtn} ${p === page ? styles.pageBtnActive : ''}`}
                      onClick={() => setPage(p)}
                    >{p}</button>
                  ))}
                  <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className={styles.pageBtn}>Next →</button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
