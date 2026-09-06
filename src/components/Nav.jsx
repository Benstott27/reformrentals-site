import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

const LINKS = [
  { to: '/studios', label: 'Studio Hire' },
  { to: '/home-use', label: 'Home Hire' },
  { to: '/equipment', label: 'Equipment' },
  { to: '/chairs', label: 'Chairs' },
  { to: '/space-planner', label: 'Space Planner' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__bar container">
        <NavLink to="/" className="nav__logo" aria-label="Reform Rentals home">
          Reform Rentals
        </NavLink>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn btn--primary nav__cta">
          Hire Now
        </NavLink>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'nav__burger nav__burger--open' : 'nav__burger'} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={open ? 'nav__mobile nav__mobile--open' : 'nav__mobile'}
      >
        <nav aria-label="Mobile">
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav__mobile-link nav__mobile-link--active'
                      : 'nav__mobile-link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink to="/contact" className="btn btn--primary nav__mobile-cta">
          Hire Now
        </NavLink>
      </div>
    </header>
  )
}
