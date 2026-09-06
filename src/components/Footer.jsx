import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Reform Rentals</span>
          <p className="footer__tag">
            Premium Align-Pilates equipment hire for studios and homes across
            the UK.
          </p>
        </div>

        <div className="footer__col">
          <span className="eyebrow eyebrow--muted">Explore</span>
          <ul>
            <li>
              <Link to="/studios">Studio Hire</Link>
            </li>
            <li>
              <Link to="/home-use">Home Hire</Link>
            </li>
            <li>
              <Link to="/equipment">Equipment</Link>
            </li>
            <li>
              <Link to="/chairs">Chairs</Link>
            </li>
            <li>
              <Link to="/space-planner">Space Planner</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <span className="eyebrow eyebrow--muted">Company</span>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="mailto:hello@reformrentals.co.uk">
                hello@reformrentals.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Reform Rentals. All rights reserved.</span>
        <span>United Kingdom</span>
      </div>
    </footer>
  )
}
