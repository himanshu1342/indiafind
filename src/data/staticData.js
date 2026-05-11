export const CATEGORIES = [
  { slug: 'hospitals', name: 'Hospitals', icon: '🏥', count: '18,400+' },
  { slug: 'doctors', name: 'Doctors', icon: '👨‍⚕️', count: '42,000+' },
  { slug: 'restaurants', name: 'Restaurants', icon: '🍽️', count: '36,000+' },
  { slug: 'schools', name: 'Schools', icon: '🏫', count: '22,000+' },
  { slug: 'colleges', name: 'Colleges', icon: '🎓', count: '9,800+' },
  { slug: 'lawyers', name: 'Lawyers', icon: '⚖️', count: '14,200+' },
  { slug: 'hotels', name: 'Hotels', icon: '🏨', count: '24,000+' },
  { slug: 'shops', name: 'Shops & Retail', icon: '🛒', count: '55,000+' },
  { slug: 'freelancers', name: 'Freelancers', icon: '💼', count: '8,400+' },
  { slug: 'real-estate', name: 'Real Estate', icon: '🏠', count: '19,000+' },
  { slug: 'salons', name: 'Salons & Spas', icon: '💇', count: '11,000+' },
  { slug: 'plumbers', name: 'Plumbers', icon: '🔧', count: '7,200+' },
  { slug: 'electricians', name: 'Electricians', icon: '⚡', count: '6,800+' },
  { slug: 'car-services', name: 'Car Services', icon: '🚗', count: '9,100+' },
  { slug: 'banks', name: 'Banks & ATMs', icon: '🏦', count: '31,000+' },
  { slug: 'coaching', name: 'Coaching', icon: '📚', count: '13,000+' },
  { slug: 'gyms', name: 'Gyms & Fitness', icon: '💪', count: '8,200+' },
  { slug: 'pharmacies', name: 'Pharmacies', icon: '💊', count: '21,000+' },
  { slug: 'petrol-pumps', name: 'Petrol Pumps', icon: '⛽', count: '15,000+' },
  { slug: 'temples', name: 'Temples & Religious', icon: '🛕', count: '45,000+' },
  { slug: 'ca-firms', name: 'CA Firms', icon: '📊', count: '9,600+' },
  { slug: 'dentists', name: 'Dentists', icon: '🦷', count: '12,000+' },
  { slug: 'tailors', name: 'Tailors', icon: '🧵', count: '18,000+' },
  { slug: 'travel-agents', name: 'Travel Agents', icon: '✈️', count: '7,400+' },
]

export const CITIES = [
  { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra', count: '32,400+' },
  { slug: 'delhi', name: 'Delhi', state: 'Delhi', count: '28,800+' },
  { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka', count: '24,200+' },
  { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana', count: '19,600+' },
  { slug: 'pune', name: 'Pune', state: 'Maharashtra', count: '18,100+' },
  { slug: 'chennai', name: 'Chennai', state: 'Tamil Nadu', count: '16,900+' },
  { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal', count: '15,400+' },
  { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan', count: '12,800+' },
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', count: '11,200+' },
  { slug: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', count: '9,800+' },
  { slug: 'aurangabad', name: 'Aurangabad', state: 'Maharashtra', count: '6,400+' },
  { slug: 'nagpur', name: 'Nagpur', state: 'Maharashtra', count: '7,200+' },
  { slug: 'indore', name: 'Indore', state: 'Madhya Pradesh', count: '8,100+' },
  { slug: 'surat', name: 'Surat', state: 'Gujarat', count: '8,800+' },
  { slug: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh', count: '6,700+' },
  { slug: 'patna', name: 'Patna', state: 'Bihar', count: '5,900+' },
  { slug: 'vadodara', name: 'Vadodara', state: 'Gujarat', count: '6,100+' },
  { slug: 'agra', name: 'Agra', state: 'Uttar Pradesh', count: '5,400+' },
  { slug: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh', count: '7,800+' },
  { slug: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', count: '6,200+' },
  { slug: 'kochi', name: 'Kochi', state: 'Kerala', count: '7,100+' },
  { slug: 'chandigarh', name: 'Chandigarh', state: 'Chandigarh', count: '5,600+' },
  { slug: 'bhubaneswar', name: 'Bhubaneswar', state: 'Odisha', count: '4,800+' },
  { slug: 'guwahati', name: 'Guwahati', state: 'Assam', count: '4,200+' },
  { slug: 'nashik', name: 'Nashik', state: 'Maharashtra', count: '5,100+' },
  { slug: 'rajkot', name: 'Rajkot', state: 'Gujarat', count: '4,600+' },
  { slug: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', count: '4,900+' },
  { slug: 'amritsar', name: 'Amritsar', state: 'Punjab', count: '4,300+' },
  { slug: 'jodhpur', name: 'Jodhpur', state: 'Rajasthan', count: '4,100+' },
  { slug: 'ranchi', name: 'Ranchi', state: 'Jharkhand', count: '3,900+' },
  { slug: 'meerut', name: 'Meerut', state: 'Uttar Pradesh', count: '3,700+' },
  { slug: 'thiruvananthapuram', name: 'Thiruvananthapuram', state: 'Kerala', count: '4,500+' },
]

export const MOCK_LISTINGS = [
  {
    id: '1', name: 'Kamalnayan Bajaj Hospital', category: { name: 'Hospitals' }, city: { name: 'Aurangabad' },
    area: 'Station Road', phone: '0240-2352222', avg_rating: 4.8, review_count: 312,
    tags: ['Multi-specialty', '24/7 Emergency', 'ICU'], is_premium: true,
    description: 'One of the leading multi-specialty hospitals in Marathwada region offering world-class healthcare services.'
  },
  {
    id: '2', name: 'Trishna Seafood Restaurant', category: { name: 'Restaurants' }, city: { name: 'Mumbai' },
    area: 'Kala Ghoda, Fort', phone: '022-22703214', avg_rating: 4.9, review_count: 1240,
    tags: ['Seafood', 'Dine-in', 'AC'], is_premium: true,
    description: 'Legendary seafood restaurant in the heart of Mumbai, famous for butter garlic crab.'
  },
  {
    id: '3', name: 'Dr. Priya Sharma — Cardiologist', category: { name: 'Doctors' }, city: { name: 'Pune' },
    area: 'Koregaon Park', phone: '9876543210', avg_rating: 4.6, review_count: 89,
    tags: ['Cardiology', 'OPD Available'], is_premium: false,
    description: 'Senior cardiologist with 15+ years of experience. OPD available Monday to Saturday.'
  },
  {
    id: '4', name: 'Delhi Public School R.K. Puram', category: { name: 'Schools' }, city: { name: 'Delhi' },
    area: 'R.K. Puram', phone: '011-26185170', avg_rating: 4.7, review_count: 2100,
    tags: ['CBSE', 'Co-ed', 'Classes 1–12'], is_premium: false,
    description: 'One of the most prestigious schools in Delhi with excellent academic track record.'
  },
  {
    id: '5', name: 'Sharma & Associates Law Firm', category: { name: 'Lawyers' }, city: { name: 'Bangalore' },
    area: 'MG Road', phone: '9845012345', avg_rating: 4.4, review_count: 56,
    tags: ['Civil Law', 'Property', 'Family'], is_premium: false,
    description: 'Full-service law firm specializing in civil, property, and family law matters.'
  },
  {
    id: '6', name: 'Rambagh Palace Hotel', category: { name: 'Hotels' }, city: { name: 'Jaipur' },
    area: 'Bhawani Singh Road', phone: '0141-2385700', avg_rating: 4.9, review_count: 3400,
    tags: ['5-Star', 'Heritage', 'Pool'], is_premium: true,
    description: 'Former residence of the Maharaja of Jaipur, now a luxury heritage hotel.'
  },
]
