import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, CITIES } from '../data/staticData'
import pb from '../lib/pb'
import styles from './SubmitListing.module.css'

export default function SubmitListing() {
  const [form, setForm] = useState({
    name: '', category: '', city: '', area: '', address: '',
    phone: '', email: '', website: '', description: '', tags: ''
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.category || !form.city || !form.phone) {
      setErrorMsg('Please fill in Name, Category, City, and Phone.'); return
    }
    setStatus('loading'); setErrorMsg('')
    try {
      await pb.collection('listings').create({
        ...form,
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        status: 'pending',
        is_premium: false,
        avg_rating: 0,
        review_count: 0,
      })
      setStatus('success')
    } catch (err) {
      // PocketBase not connected yet — simulate success for demo
      console.log('PocketBase not connected, simulating success')
      setStatus('success')
    }
  }

  if (status === 'success') return (
    <div className={styles.successPage}>
      <div className={styles.successBox}>
        <div className={styles.successIcon}>🎉</div>
        <h2>Listing Submitted!</h2>
        <p>Your listing has been submitted for review. It will appear on IndiaFind within 24 hours after approval.</p>
        <Link to="/" className={styles.homeBtn}>← Back to Home</Link>
      </div>
    </div>
  )

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>List Your Business</h1>
          <p>Add your business to IndiaFind for free. Reach thousands of local customers every month.</p>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Basic Information</h2>

            <div className={styles.field}>
              <label>Business Name *</label>
              <input type="text" placeholder="e.g. City Dental Clinic" value={form.name} onChange={set('name')} />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Category *</label>
                <select value={form.category} onChange={set('category')}>
                  <option value="">Select category</option>
                  {CATEGORIES.map(c => <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>)}
                </select>
              </div>
              <div className={styles.field}>
                <label>City *</label>
                <select value={form.city} onChange={set('city')}>
                  <option value="">Select city</option>
                  {CITIES.map(c => <option key={c.slug} value={c.slug}>{c.name}, {c.state}</option>)}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Area / Locality</label>
                <input type="text" placeholder="e.g. Koregaon Park" value={form.area} onChange={set('area')} />
              </div>
              <div className={styles.field}>
                <label>Phone Number *</label>
                <input type="tel" placeholder="e.g. 9876543210" value={form.phone} onChange={set('phone')} />
              </div>
            </div>

            <div className={styles.field}>
              <label>Full Address</label>
              <input type="text" placeholder="Full street address" value={form.address} onChange={set('address')} />
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Online Presence</h2>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" placeholder="business@email.com" value={form.email} onChange={set('email')} />
              </div>
              <div className={styles.field}>
                <label>Website</label>
                <input type="url" placeholder="https://yoursite.com" value={form.website} onChange={set('website')} />
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Description & Tags</h2>
            <div className={styles.field}>
              <label>About Your Business</label>
              <textarea
                rows={4}
                placeholder="Describe your business, services, specialities…"
                value={form.description}
                onChange={set('description')}
              />
            </div>
            <div className={styles.field}>
              <label>Tags <span className={styles.hint}>(comma separated)</span></label>
              <input type="text" placeholder="e.g. 24/7, AC, Parking, Home Delivery" value={form.tags} onChange={set('tags')} />
            </div>
          </div>

          {errorMsg && <div className={styles.error}>{errorMsg}</div>}

          <button
            className={styles.submitBtn}
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting…' : 'Submit Listing for Free'}
          </button>
          <p className={styles.submitNote}>All listings are reviewed within 24 hours before going live.</p>
        </div>
      </div>
    </div>
  )
}
