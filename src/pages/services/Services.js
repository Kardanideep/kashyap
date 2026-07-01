import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes, faFileInvoiceDollar, faPiggyBank, faHeartbeat, faBriefcase, faBuilding, faGift, faUsers, faMoneyBillWave, faIndustry, faHandHoldingHeart, faHandshake, faSignature, faUserShield } from '@fortawesome/free-solid-svg-icons';

function Services() {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (index) => {
    setActiveModalIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setActiveModalIndex(null);
    document.body.style.overflow = 'auto';
  };

  const servicesList = [
    {
      title: 'Payroll Related Services',
      icon: faFileInvoiceDollar,
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
      desc: 'Complete end-to-end management of employee payroll, precise tax deductions, structural compliance reporting, and automated salary disbursement.'
    },
    {
      title: 'PF (Provident Fund Act)',
      icon: faPiggyBank,
      img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80',
      desc: 'Expert assistance with EPF registration, accurate monthly challan generation, timely returns filing, and seamless employee claims processing.'
    },
    {
      title: 'ESI (Employee State Insurance Act)',
      icon: faHeartbeat,
      img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80',
      desc: 'Comprehensive management of ESI registrations, monthly contribution processing, and dedicated support for employee medical and benefit claims.'
    },
    {
      title: 'PT (Professional Tax Act)',
      icon: faBriefcase,
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
      desc: 'State-specific professional tax registration, precise deduction calculation per salary slabs, and periodic submission of statutory returns.'
    },
    {
      title: 'Shop And Establishment Act',
      icon: faBuilding,
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
      desc: 'Procurement of initial registration, timely renewals, and rigorous compliance management for your physical business premises and branches.'
    },
    {
      title: 'Bonus Act',
      icon: faGift,
      img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80',
      desc: 'Strategic guidance on act applicability, accurate mathematical calculation, and ensure timely disbursement of statutory employee bonuses.'
    },
    {
      title: 'Contract Labour Act',
      icon: faUsers,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9vOBxMzceOOYix3JkBNc8V_tzyRrhki8tD6Vrg882A&s=10',
      desc: 'Navigating principal employer registration, verifying contractor licensing, and ensuring robust compliance verification across all contracted labour.'
    },
    {
      title: 'Minimum Wage Act',
      icon: faMoneyBillWave,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGcJ6BqGdpScpTWbKbiwUPGeWJFd4hdr9GcNaGim0pw&s=10',
      desc: 'Proactive advisory on state-wise minimum wage rates, D.A. adjustments, and structuring legally compliant salary packages.'
    },
    {
      title: 'Factory Act',
      icon: faIndustry,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaaVUm1VZU134K4sgMXWq4KWeS6JWzjvcVKEfeRIOlQ&s=10',
      desc: 'End-to-end factory license procurement, renewals, maintenance of statutory registers, and adherence to rigorous safety and welfare regulations.'
    },
    {
      title: 'Labour Welfare Fund Act',
      icon: faHandHoldingHeart,
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80',
      desc: 'Accurate calculation and timely submission of both employer and employee contributions to the state-specific welfare board.'
    },
    {
      title: 'Gratuity Act',
      icon: faHandshake,
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80',
      desc: 'Precise calculation of actuarial liabilities, expert guidance on trust formation, and swift processing of eligible employee gratuity claims.'
    },
    {
      title: 'Digital Signature (DSC)',
      icon: faSignature,
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
      desc: 'Fast and secure issuance of Class 3 Digital Signature Certificates required for authenticating and e-filing various statutory returns and forms.'
    },
    {
      title: "Workmen's Compensation Policy",
      icon: faUserShield,
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
      desc: 'Professional assistance in procuring accurate policies and effectively managing compensation claims for unforeseen workplace incidents.'
    }
  ];

  return (
    <main className="services-page">
      {/* ===== HERO SECTION ===== */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Expertise</h1>
          <p className="services-hero-subtitle">
            Comprehensive Labour Law and Statutory Compliance Solutions
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID CONTENT ===== */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-card-grid">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className="service-image-card"
              >
                <div className="service-card-image-wrap">
                  <img src={service.img} alt={service.title} className="service-card-img" />
                  <div className="service-card-icon-overlay">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                </div>
                
                <div 
                  className="service-card-header" 
                  onClick={() => openModal(index)}
                >
                  <h3 className="service-card-title">{service.title}</h3>
                  <div className="service-card-toggle">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL OVERLAY ===== */}
      {activeModalIndex !== null && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="modal-img-wrap">
              <img src={servicesList[activeModalIndex].img} alt={servicesList[activeModalIndex].title} className="modal-img" />
              <div className="modal-img-overlay"></div>
            </div>
            <div className="modal-body">
              <div className="modal-header-flex">
                <div className="modal-icon">
                  <FontAwesomeIcon icon={servicesList[activeModalIndex].icon} />
                </div>
                <h2 className="modal-title">{servicesList[activeModalIndex].title}</h2>
              </div>
              <p className="modal-desc">{servicesList[activeModalIndex].desc}</p>
              
              <div className="modal-more-details">
                <h4>Why Choose KDM Associates?</h4>
                <p>
                  Our dedicated experts ensure complete accuracy, timely compliance, and transparent reporting for your business, eliminating statutory risks and allowing you to focus completely on your core operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CTA BANNER ===== */}
      <section className="services-cta-section">
        <div className="services-cta-banner">
          <div className="cta-text">
            <h2>Need Expert Compliance Assistance?</h2>
            <p>Our team is ready to provide tailored solutions for your business.</p>
          </div>
          <Link smooth to="/contact" className="services-cta-btn">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
