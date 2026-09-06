import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import studioPhoto from '../assets/home/studio-photo.jpg'
import homePhoto from '../assets/home/home-photo.jpg'
import './Home.css'

export default function Home() {
  return (
    <>
      <SEO
        title="Pilates Reformer Hire for Studios & Home, UK"
        description="Reform Rentals supplies and maintains premium Align-Pilates reformers and chairs, hired to studios and homes across the UK. Delivery, setup and maintenance included."
      />

      <h1 className="visually-hidden">
        Reform Rentals — Pilates Reformer Hire for Studios and Homes
      </h1>

      <div className="home">
        <Link
          to="/studios"
          className="panel panel--studio"
          aria-label="Explore Studio Hire"
        >
          <img
            className="panel__photo"
            src={studioPhoto}
            alt="Align-Pilates reformers set up in a studio"
            loading="eager"
          />
          <div className="panel__content">
            <h2 className="panel__title">Studio</h2>
            <span className="eyebrow panel__eyebrow">
              Opening And Expanding
            </span>
            <p className="panel__line">
              Reformers for growing studios, without the upfront capital.
            </p>
            <span className="link-arrow panel__link">Explore →</span>
          </div>
        </Link>

        <Link
          to="/home-use"
          className="panel panel--home"
          aria-label="Explore Home Hire"
        >
          <img
            className="panel__photo"
            src={homePhoto}
            alt="An Align-Pilates reformer set up at home"
            loading="lazy"
          />
          <div className="panel__content">
            <h2 className="panel__title">Home</h2>
            <span className="eyebrow panel__eyebrow">
              Training And Teaching
            </span>
            <p className="panel__line">
              Studio-grade equipment, delivered and set up at home.
            </p>
            <span className="link-arrow panel__link">Explore →</span>
          </div>
        </Link>
      </div>
    </>
  )
}
