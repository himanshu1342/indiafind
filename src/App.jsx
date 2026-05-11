import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import ListingDetail from './pages/ListingDetail'
import { CityPage, CategoryPage } from './pages/BrowsePages'
import SubmitListing from './pages/SubmitListing'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/city/:slug" element={<CityPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/submit" element={<SubmitListing />} />
      </Routes>
      <Footer />
    </>
  )
}
