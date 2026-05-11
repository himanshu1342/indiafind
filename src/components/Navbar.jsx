import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">India<span>Find</span></Link>
      <div className="nav-links">
        <Link to="/search">Browse</Link>
        <Link to="/submit" className="nav-cta">+ List Your Business</Link>
      </div>
    </nav>
  )
}
