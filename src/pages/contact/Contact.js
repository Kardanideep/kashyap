import React, { useState, useEffect } from 'react';
import useSEO from '../../hooks/useSEO';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  useSEO(
    'Contact Us',
    'Get in touch with KDM Associates for expert Labour Law compliance advice. Call, WhatsApp, or email us today for PF, ESI, Payroll, and statutory compliance services.',
    '/contact',
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact KDM Associates - Labour Law Consultants",
      "description": "Get in touch with KDM Associates for expert Labour Law compliance advice. Call, WhatsApp, or email us for PF, ESI, Payroll, and statutory compliance services.",
      "url": "https://www.kdmassociates.com/contact",
      "mainEntity": {
        "@type": "LegalService",
        "name": "KDM Associates",
        "telephone": "+91-7575023547",
        "email": "kdmassociates01@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11-12, 1st Floor, Bapa Sitaram Complex, Gondal Highway 8-B, Near Gondal Chowkdi",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360004",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.240169",
          "longitude": "70.800054"
        },
        "hasMap": "https://maps.google.com/maps?q=22.240169,70.800054",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      }
    }
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const mailtoLink = `mailto:kdmassociates01@gmail.com?subject=${encodeURIComponent(subject || 'Enquiry from Website')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="contact-page">

      {/* ===== HERO ===== */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>
            Have a question about labour law compliance? Reach out to our expert team — we're here to help your business stay compliant and grow confidently.
          </p>
        </div>
      </section>

      {/* ===== CONTACT LAYOUT ===== */}
      <div className="contact-layout">

        {/* Info Card */}
        <div className="contact-info-card">
          <div className="info-item">
            <div className="info-icon-box">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="info-text">
              <h3>Phone</h3>
              <a href="tel:+917575023547">+91 7575 023 547</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="info-text">
              <h3>Email</h3>
              <a href="mailto:kdmassociates01@gmail.com">kdmassociates01@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="info-text">
              <h3>Office Address</h3>
              <p>
                11-12, 1st Floor, Bapa Sitaram Complex,<br />
                Gondal Highway 8-B, Near Gondal Chowkdi,<br />
                Rajkot, Gujarat 360004
              </p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://wa.me/917575023547" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer  " className="social-circle" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Form Card */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you promptly.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your compliance needs..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '0.5rem' }} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ===== GOOGLE MAP ===== */}
      <section className="contact-map-section">
        <div className="contact-map-wrap">
          <iframe
            title="KDM Associates Office Location"
            src="https://maps.google.com/maps?q=22.240169,70.800054&hl=en&z=14&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </main>
  );
}

export default Contact;
