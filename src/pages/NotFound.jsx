import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
      />
      <section className="hero container" style={{ textAlign: 'center' }}>
        <span className="eyebrow eyebrow--red">404</span>
        <h1>Page Not Found</h1>
        <p className="hero__intro" style={{ margin: '20px auto 0' }}>
          The page you’re looking for doesn’t exist.
        </p>
        <div className="hero__actions" style={{ justifyContent: 'center' }}>
          <Link to="/" className="btn btn--primary">
            Back To Home
          </Link>
        </div>
      </section>
    </>
  )
}
