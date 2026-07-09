import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-border"></div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <img src="/full-logo.png" alt="KDM Associates" className="footer-logo" />
            <h3>KDM Associates</h3>
            <p className="tagline">Your Trusted Partner in Labour Law Compliance</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/1GrN7MeLXN/" aria-label="Facebook" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.instagram.com/kdm_associates/" aria-label="Instagram" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/company/kdm-associates/" aria-label="LinkedIn" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><HashLink smooth to="/#home">Home</HashLink></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/laws">Laws & Policies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              </div>
              <a href="tel:+917575023547">+91 7575023547</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </div>
              <a href="mailto:kdmassociates01@gmail.com">kdmassociates01@gmail.com</a>
            </div>
            <div className="contact-item address">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              </div>
              <span>
                11-12, 1st Floor, Bapa Sitaram Complex,<br />
                Gondal Highway 8-B, near Gondal Chowkdi,<br />
                Rajkot, Gujarat 360004
              </span>
            </div>
          </div>
        </div>

        {/* Copyright – only bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KDM Associates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;