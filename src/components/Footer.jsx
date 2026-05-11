import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="nav-logo" style={{ marginBottom: 12 }}>India<span style={{ color: 'var(--saffron)' }}>Find</span></div>
          <p>India's most complete local business directory. Find doctors, restaurants, schools, lawyers & more across every city in India.</p>
        </div>
        <div className="footer-col">
          <h4>Categories</h4>
          <Link to="/category/hospitals">Hospitals</Link>
          <Link to="/category/doctors">Doctors</Link>
          <Link to="/category/restaurants">Restaurants</Link>
          <Link to="/category/schools">Schools</Link>
          <Link to="/category/lawyers">Lawyers</Link>
          <Link to="/search">All Categories</Link>
        </div>
        <div className="footer-col">
          <h4>Top Cities</h4>
          <Link to="/city/mumbai">Mumbai</Link>
          <Link to="/city/delhi">Delhi</Link>
          <Link to="/city/bangalore">Bangalore</Link>
          <Link to="/city/pune">Pune</Link>
          <Link to="/city/aurangabad-mh">Aurangabad</Link>
          <Link to="/search">All Cities</Link>
        </div>
        <div className="footer-col">
          <h4>For Businesses</h4>
          <Link to="/submit">Free Listing</Link>
          <Link to="/submit">Get Premium</Link>
          <a href="mailto:hello@indiafind.in">Contact Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>🇮🇳 Made with pride in India — IndiaFind © 2025</span>
        <span>Privacy Policy · Terms of Use</span>
      </div>
    </footer>
  )
}
