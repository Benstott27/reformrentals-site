import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import studioPhoto from '../assets/home/studio-photo.jpg'
import homePhoto from '../assets/home/home-photo.jpg'
import './Home.css'

export default function Home() {
  return (
    <>
      <SEO
        title="Pilates Reformer Hire & Rental | Reformrentals UK"
        description="Professional Pilates equipment rental for studios, instructors and home users. Reformers, studio equipment, delivery, setup and ongoing support."
      />

      <main className="rr-home">
        <section className="rr-home__hero">
          <div className="rr-home__overlay" />

          <div className="rr-home__hero-content">
            <span className="rr-home__eyebrow">REFORMRENTALS</span>

            <h1>Reformer Rentals</h1>

            <p>Professional Align-Pilates reformer hire</p>
          </div>

          <div className="rr-home__choices">
            <Link to="/studios" className="rr-home__choice">
              <span>Studio Use</span>
              <span className="rr-home__arrow">→</span>
            </Link>

            <Link to="/home-use" className="rr-home__choice">
              <span>Home Use</span>
              <span className="rr-home__arrow">→</span>
            </Link>

            <Link to="/space-planner" className="rr-home__choice">
              <span>Space Planner</span>
              <span className="rr-home__arrow">→</span>
            </Link>
          </div>

          <div className="rr-home__images" aria-hidden="true">
            <img src={studioPhoto} alt="" />
            <img src={homePhoto} alt="" />
          </div>
        </section>
      </main>
    </>
  )
}
