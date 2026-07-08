import React, { useEffect } from 'react';
import useSEO from '../../hooks/useSEO';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBalanceScale, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

function About() {
  useSEO(
    'About Us',
    'Learn about KDM Associates — a trusted Labour Law Consultancy with years of experience helping Indian businesses stay compliant with all statutory requirements.'
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About KDM Associates</h1>
          <p className="about-hero-subtitle">
            Your Trusted Partner in Labour Law Compliance
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="about-content-section">
        <div className="about-glass-panel">
          <div className="about-intro-grid">
            <div className="about-text-content">
              <h2>Committed to <span className="highlight">Complete Legal Compliance</span></h2>
              <p>
                KDM Associates is a trusted Labour Law Consultancy committed to helping businesses achieve complete legal compliance with confidence and ease. We provide reliable, accurate, and timely consultancy services to organizations of all sizes, ensuring they meet all statutory labour law requirements while focusing on their business growth.
              </p>
              <p>
                With a client-focused approach, we specialize in compliance under EPF, ESIC, Labour Laws, Minimum Wages Act, Factory Act, Professional Tax (PT), Contract Labour Laws, and other statutory regulations. We also offer Digital Signature (DSC) services and complete support for labour law documentation, registrations, inspections, audits, and ongoing compliance.
              </p>
            </div>
            
            <div className="about-images">
              <div className="about-accent-bg"></div>
              <img 
                src="https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Digital%20WOrk%20Place/enterprise-management-service/human-resource/Humanresouce.jpg" 
                alt="Business Discussion" 
                className="img-primary"
              />
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FwgzG9myfpXW4ybl8mW-yfaGkHJQHf16_vvECLCElg&s=10" 
                alt="Documentation and compliance" 
                className="img-secondary"
              />
            </div>
          </div>

          {/* ===== MISSION & VALUES ===== */}
          <div className="about-mission-section">
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">
                  <FontAwesomeIcon icon={faBalanceScale} />
                </div>
                <h3>Our Core Mission</h3>
                <p>
                  At KDM Associates, we believe that legal compliance is not just a requirement—it's the foundation of a successful business. Our mission is to provide transparent, professional, and cost-effective solutions tailored to each client's unique needs.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h3>Expert Consultancy</h3>
                <p>
                  From startups and MSMEs to large factories, contractors, and established enterprises, we provide dependable labour law compliance and statutory consultancy you can trust.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">
                  <FontAwesomeIcon icon={faFileSignature} />
                </div>
                <h3>Comprehensive Support</h3>
                <p>
                  We go beyond basic advice. We offer complete support for labour law documentation, registrations, facility inspections, complex audits, and rigorous ongoing compliance tracking.
                </p>
              </div>
            </div>
          </div>

          {/* ===== PARTNER BANNER ===== */}
          <div className="about-partner-banner">
            <div className="partner-text">
              <h3>Ready to secure your business?</h3>
              <p>Focus on your growth while we handle the complex compliance.</p>
            </div>
            <Link smooth to="/contact" className="partner-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
