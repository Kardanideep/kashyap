import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faUsers,
  faFileInvoice,
  faScaleBalanced,
  faHandshake,
  faFileContract,
  faCoins,
  faBuilding,
  faUserTie,
  faCalculator,
  faSignature,
  faShieldAlt,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  // Full services data
  const allServices = [
    { icon: faCalculator, title: 'Payroll Related Services', desc: 'Complete payroll management and statutory deductions.' },
    { icon: faBriefcase, title: 'PF (Provident Fund Act)', desc: 'Compliance and registration under EPF Act, 1952.' },
    { icon: faUsers, title: 'ESI (Employee State Insurance Act)', desc: 'ESI registration, returns, and compliance.' },
    { icon: faFileInvoice, title: 'PT (Professional Tax Act)', desc: 'Professional tax registration and monthly filing.' },
    { icon: faBuilding, title: 'Shop And Establishment Act', desc: 'Registration and compliance for shops and establishments.' },
    { icon: faCoins, title: 'Bonus Act', desc: 'Payment of Bonus Act compliance and calculations.' },
    { icon: faHandshake, title: 'Contract Labour Act', desc: 'Regulation and abolition of contract labour.' },
    { icon: faScaleBalanced, title: 'Minimum Wage Act', desc: 'Minimum wages compliance and record maintenance.' },
    { icon: faIndustry, title: 'Factory Act', desc: 'Factory registration, licensing, and safety compliance.' },
    { icon: faUserTie, title: 'Labour Welfare Fund Act', desc: 'LWF registration and timely contributions.' },
    { icon: faShieldAlt, title: 'Gratuity Act', desc: 'Gratuity calculation and compliance under Payment of Gratuity Act.' },
    { icon: faSignature, title: 'Digital Signature', desc: 'DSC issuance and renewal for various purposes.' },
    { icon: faFileContract, title: 'Workmen\'s Compensation Policy', desc: 'Policy assistance and claims management.' },
  ];

  // Show only first 6 on homepage
  const displayedServices = allServices.slice(0, 8);

  // Full acts list
  const allActs = [
    'Employee\'s Provident Funds & Misc. Provisions Act, 1952',
    'Employee\'s State Insurance Act, 1948',
    'Factories Act, 1948',
    'Minimum Wages Act, 1948',
    'Payment Of Bonus Act, 1965',
    'Payment Of Gratuity Act, 1972',
    'The Building And Other Construction Workers Act, 1996',
    'Equal Remuneration Act, 1976',
    'Contract Labour Act (Regulation & Abolition), 1970',
    'Labour Welfare Fund',
    'Professional Tax Act',
    'Digital Signature',
    'Workmen\'s Compensation Policy',
  ];

  const displayedActs = allActs.slice(0, 6);

  // Full links data
  const allLinks = [
    { label: 'PAY EPF CHALLAN', url: 'https://unifiedportal-emp.epfindia.gov.in/epfo/' },
    { label: 'PAY ESI CHALLAN', url: 'https://portal.esic.gov.in/ESICInsurance1/RevenueOne/MonthlyContribution/eChallan.aspx' },
    { label: 'UAN MEMBER PORTAL', url: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/' },
    { label: 'EPF TRRN QUARRY', url: 'https://www.epfindia.gov.in/site_en/trrn_maintenance.php' },
    { label: 'EPF CLAIM STATUS', url: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/claimStatus' },
    { label: 'LABOUR AND EMPLOYMENT', url: 'https://ifp.gujarat.gov.in/DIGIGOV/' },
    { label: 'UMANG MOBILE APPLICATION', url: 'https://web.umang.gov.in/web_new/login' },
    { label: 'MEMBERS EPF PASSBOOK', url: 'https://passbook.epfindia.gov.in/MemberPassBook/login' }
  ];

  const displayedLinks = allLinks.slice(0, 8);

  // View-all page URLs (change these to match your actual routes)
  const viewAllUrls = {
    services: '/services',
    laws: '/laws',
    links: '/links',
  };

  return (
    <main className="home">
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">Welcome to KDM Associates</span>
          </div>
          <h1 className="hero-title">
            Your Trusted Partner in <span className="hero-highlight">Labour Law Compliance</span>
          </h1>
          <p className="hero-description">
            Reliable, accurate, and timely consultancy for all statutory labour law requirements, ensuring your business is always protected.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary btn-glow">
              Explore Services <span className="arrow">→</span>
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT (image + short text) ===== */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Discover</span>
            <h2>About KDM Associates</h2>
            <div className="header-underline"></div>
          </div>
          <div className="about-grid">
            <div className="about-image-container">
              <div className="about-image-backdrop"></div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShijp9Erib5Bggiuo0hphewoDB4iFdzxt5lmaftwUAvA&s=10"
                alt="Legal team meeting"
                className="about-image-main"
              />
              <div className="about-image-accent"></div>
            </div>
            <div className="about-text">
              <p className="about-lead">
                KDM Associates is a trusted Labour Law Consultancy helping businesses
                achieve complete legal compliance with confidence.
              </p>
              <div className="about-divider"></div>
              <p className="about-tagline">
                KDM Associates – Your Trusted Partner in Labour Law Compliance.
              </p>
              <div className="view-all-wrapper about-cta">
                <Link to="/about" className="btn-view-all btn-glow">
                  Learn More About Us <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION (limited) ===== */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Expertise</span>
            <h2>Our Services</h2>
            <div className="header-underline"></div>
            <p className="section-subtitle" style={{ marginTop: '1.5rem', marginBottom: '0' }}>
              Comprehensive labour law and statutory compliance solutions
            </p>
          </div>
          <div className="services-grid">
            {displayedServices.map((service, index) => (
              <Link to="/services" className="service-card" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="view-all-wrapper">
            <Link to="/services" className="btn-view-all">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ACTS / LAWS SECTION (limited) ===== */}
      <section id="laws" className="laws">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Compliance</span>
            <h2>Laws &amp; Policies We Cover</h2>
            <div className="header-underline"></div>
            <p className="section-subtitle" style={{ marginTop: '1.5rem', marginBottom: '0' }}>
              We ensure complete compliance with all major labour legislations
            </p>
          </div>
          <div className="laws-grid">
            {displayedActs.map((act, index) => (
              <Link to="/laws" className="law-item" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="law-icon-wrapper">
                  <span className="law-icon">✓</span>
                </div>
                <span className="law-text">{act}</span>
              </Link>
            ))}
          </div>
          <div className="view-all-wrapper laws-cta">
            <Link to={viewAllUrls.laws} className="btn-view-all btn-glow">
              View All Laws <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== IMPORTANT LINKS SECTION (limited) ===== */}
      <section id="links" className="links">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Free Open Access</span>
            <h2>Essential Gov Portals</h2>
            <div className="header-underline"></div>
            <p className="section-subtitle" style={{ marginTop: '1.5rem', marginBottom: '0' }}>
              We provide direct, free-of-cost access to all important government portals, ensuring the best and most convenient experience for you.
            </p>
          </div>
          <div className="links-grid">
            {displayedLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <div className="link-content">
                  <span className="link-text">{link.label}</span>
                  <span className="link-icon">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT / CTA SECTION (with background image) ===== */}
      <section id="contact" className="contact-cta">
        <div className="cta-overlay"></div>
        <div className="container cta-wrapper">
          <div className="cta-content glass-panel">
            <span className="section-badge badge-light">Get Started</span>
            <h2 className="cta-title">KDM ASSOCIATES IS READY TO</h2>
            <h3 className="cta-highlight">simplify labour law for modern businesses</h3>
            <p className="cta-description">
              Ensure your business is fully compliant and protected with our expert services.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta btn-glow-white">
                CONTACT US NOW <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;