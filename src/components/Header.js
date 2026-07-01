import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo1.png" alt="KDM Associates Logo" className="header-logo-img" />
          <span className="logo-text">KDM Associates</span>
        </Link>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><HashLink smooth to="/#home" onClick={() => setIsOpen(false)}>Home</HashLink></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/laws" onClick={() => setIsOpen(false)}>Laws</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
          {/* CTA button – visible on all screens, but hidden on desktop via CSS (desktop-only) */}
          <Link to="/contact" className="btn-header-cta desktop-only" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;