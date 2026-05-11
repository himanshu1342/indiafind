import { useState, useEffect } from 'react'
import pb from '../lib/pb'
import { MOCK_LISTINGS } from '../data/staticData'

// Returns listings from PocketBase; falls back to mock data if PocketBase isn't set up yet
export function useListings({ category, city, query, page = 1, perPage = 12 } = {}) {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    async function fetch() {
      try {
        const filters = []
        if (category) filters.push(`category.slug = "${category}"`)
        if (city) filters.push(`city.slug = "${city}"`)
        if (query) filters.push(`name ~ "${query}" || area ~ "${query}" || description ~ "${query}"`)
        filters.push(`status = "active"`)

        const result = await pb.collection('listings').getList(page, perPage, {
          filter: filters.join(' && '),
          expand: 'category,city',
          sort: '-is_premium,-created',
        })

        if (!cancelled) {
          setListings(result.items)
          setTotalPages(result.totalPages)
          setError(null)
        }
      } catch (err) {
        // PocketBase not connected yet — use mock data
        if (!cancelled) {
          let filtered = MOCK_LISTINGS
          if (category) filtered = filtered.filter(l => l.category?.name?.toLowerCase() === category)
          if (query) filtered = filtered.filter(l => l.name.toLowerCase().includes(query.toLowerCase()))
          setListings(filtered)
          setTotalPages(1)
          setError(null)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    return () => { cancelled = true }
  }, [category, city, query, page, perPage])

  return { listings, loading, error, totalPages }
}

export function useListing(id) {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    async function fetch() {
      try {
        const result = await pb.collection('listings').getOne(id, { expand: 'category,city' })
        setListing(result)
      } catch {
        // Fallback to mock
        const found = MOCK_LISTINGS.find(l => l.id === id)
        setListing(found || null)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [id])

  return { listing, loading }
}
