import React, { useState, useEffect } from 'react';
import useSEO from '../../hooks/useSEO';
import { HashLink as Link } from 'react-router-hash-link';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes, faFileInvoiceDollar, faPiggyBank, faHeartbeat, faBriefcase, faBuilding, faGift, faUsers, faMoneyBillWave, faIndustry, faHandHoldingHeart, faHandshake, faSignature, faUserShield, faCheck, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function Services() {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  useSEO(
    'Our Services',
    'Explore KDM Associates\u2019 comprehensive Labour Law services — Payroll, PF, ESI, PT, Shop Act, Bonus Act, Contract Labour, Factory Act, Gratuity, DSC, and more.'
  );

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
      desc: 'Complete end-to-end management of employee payroll, precise tax deductions, structural compliance reporting, and automated salary disbursement.',
      benefits: [
        { title: '100% Accuracy & Confidentiality', desc: 'Error-free payroll processing with complete data security.' },
        { title: 'End-to-End Management', desc: 'From attendance integration to final salary disbursement.' },
        { title: 'Expert Support', desc: 'Dedicated professionals with deep expertise in payroll laws and latest updates.' },
        { title: 'Transparent Reporting', desc: 'Clear, detailed, and on-time payroll and compliance reports.' },
        { title: 'Focus on Your Business', desc: 'We handle the complexities so you can focus on growth and core operations.' },
      ]
    },
    {
      title: 'PF (Provident Fund Act)',
      icon: faPiggyBank,
      img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80',
      desc: 'Expert assistance with EPF registration, accurate monthly challan generation, timely returns filing, and seamless employee claims processing.',
      benefits: [
        { title: 'EPF Registration', desc: 'Hassle-free initial registration and code number generation.' },
        { title: 'Monthly Challan Generation', desc: 'Accurate calculation and timely generation of monthly EPF challans.' },
        { title: 'Returns Filing', desc: 'Prompt filing of periodic statutory returns to avoid penalties.' },
        { title: 'Claims Processing', desc: 'Efficient handling of employee PF withdrawals, transfers, and settlements.' },
        { title: 'Expert Advisory', desc: 'Continuous guidance on EPF updates and regulatory changes.' },
      ]
    },
    {
      title: 'ESI (Employee State Insurance Act)',
      icon: faHeartbeat,
      img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80',
      desc: 'Comprehensive management of ESI registrations, monthly contribution processing, and dedicated support for employee medical and benefit claims.',
      benefits: [
        { title: 'ESI Registration', desc: 'Seamless employer and employee registrations under the ESI Act.' },
        { title: 'Monthly Contributions', desc: 'Accurate computation and timely deposit of ESI contributions.' },
        { title: 'Benefit Claims', desc: 'End-to-end assistance for employees in claiming ESI benefits.' },
        { title: 'Record Maintenance', desc: 'Proper maintenance of statutory registers and records required under the Act.' },
        { title: 'Regulatory Updates', desc: 'Proactive alerts on changes in ESI wage limits and contribution rates.' },
      ]
    },
    {
      title: 'PT (Professional Tax Act)',
      icon: faBriefcase,
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
      desc: 'State-specific professional tax registration, precise deduction calculation per salary slabs, and periodic submission of statutory returns.',
      benefits: [
        { title: 'State-specific Registration', desc: 'Obtaining PT registration certificate in applicable states.' },
        { title: 'Precise Deductions', desc: 'Accurate PT deduction based on current state-specific salary slabs.' },
        { title: 'Statutory Returns', desc: 'Timely filing of monthly/annual Professional Tax returns.' },
        { title: 'Compliance Tracking', desc: 'Monitoring PT liabilities across multiple branches/states.' },
        { title: 'Audit Support', desc: 'Assistance during PT assessments and departmental inspections.' },
      ]
    },
    {
      title: 'Shop And Establishment Act',
      icon: faBuilding,
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
      desc: 'Procurement of initial registration, timely renewals, and rigorous compliance management for your physical business premises and branches.',
      benefits: [
        { title: 'Initial Registration', desc: 'Procuring new registration certificates for your business premises.' },
        { title: 'Timely Renewals', desc: 'Proactive tracking and processing of license renewals.' },
        { title: 'Compliance Management', desc: 'Ensuring adherence to working hours, holidays, and leave rules.' },
        { title: 'Branch Management', desc: 'Centralized compliance handling for multiple branches and locations.' },
        { title: 'Legal Advisory', desc: 'Expert consultation on local shop and establishment laws.' },
      ]
    },
    {
      title: 'Bonus Act',
      icon: faGift,
      img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80',
      desc: 'Strategic guidance on act applicability, accurate mathematical calculation, and ensure timely disbursement of statutory employee bonuses.',
      benefits: [
        { title: 'Act Applicability', desc: 'Guidance on applicability of Payment of Bonus Act to your establishment.' },
        { title: 'Accurate Calculations', desc: 'Precise calculation of allocable surplus and bonus amounts.' },
        { title: 'Timely Disbursement', desc: 'Ensuring bonus payouts within statutory time limits.' },
        { title: 'Record Maintenance', desc: 'Upkeeping Form A, B, and C as per the Payment of Bonus Rules.' },
        { title: 'Dispute Resolution', desc: 'Assistance in handling employee queries and disputes related to bonus.' },
      ]
    },
    {
      title: 'Contract Labour Act',
      icon: faUsers,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9vOBxMzceOOYix3JkBNc8V_tzyRrhki8tD6Vrg882A&s=10',
      desc: 'Navigating principal employer registration, verifying contractor licensing, and ensuring robust compliance verification across all contracted labour.',
      benefits: [
        { title: 'Principal Employer Registration', desc: 'Obtaining registration for engaging contract labour.' },
        { title: 'Contractor Licensing', desc: 'Ensuring contractors obtain and renew valid licenses.' },
        { title: 'Compliance Verification', desc: 'Auditing contractor records for PF, ESI, and Minimum Wages compliance.' },
        { title: 'Risk Mitigation', desc: 'Protecting principal employer from liabilities arising from contractor default.' },
        { title: 'Statutory Record Keeping', desc: 'Maintaining registers of contractors and contract labour.' },
      ]
    },
    {
      title: 'Minimum Wage Act',
      icon: faMoneyBillWave,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGcJ6BqGdpScpTWbKbiwUPGeWJFd4hdr9GcNaGim0pw&s=10',
      desc: 'Proactive advisory on state-wise minimum wage rates, D.A. adjustments, and structuring legally compliant salary packages.',
      benefits: [
        { title: 'State-wise Rate Updates', desc: 'Timely tracking of minimum wage revisions across all states.' },
        { title: 'D.A. Adjustments', desc: 'Accurate calculation of Dearness Allowance (VDA) updates.' },
        { title: 'Compliant Salary Structuring', desc: 'Designing compensation structures that comply with minimum wage norms.' },
        { title: 'Arrears Calculation', desc: 'Computing and managing arrears resulting from retrospective wage revisions.' },
        { title: 'Inspection Support', desc: 'Representation and support during labour department inspections.' },
      ]
    },
    {
      title: 'Factory Act',
      icon: faIndustry,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaaVUm1VZU134K4sgMXWq4KWeS6JWzjvcVKEfeRIOlQ&s=10',
      desc: 'End-to-end factory license procurement, renewals, maintenance of statutory registers, and adherence to rigorous safety and welfare regulations.',
      benefits: [
        { title: 'License Procurement', desc: 'End-to-end support in obtaining new factory licenses.' },
        { title: 'Renewals Management', desc: 'Timely renewal of factory licenses and building plan approvals.' },
        { title: 'Statutory Registers', desc: 'Maintenance of various registers (Adult workers, leave, accidents etc.).' },
        { title: 'Safety Regulations', desc: 'Advisory on safety, health, and welfare provisions under the Act.' },
        { title: 'Return Filing', desc: 'Preparation and submission of half-yearly and annual returns.' },
      ]
    },
    {
      title: 'Labour Welfare Fund Act',
      icon: faHandHoldingHeart,
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80',
      desc: 'Accurate calculation and timely submission of both employer and employee contributions to the state-specific welfare board.',
      benefits: [
        { title: 'Applicability Check', desc: 'Determining applicability of LWF in respective states.' },
        { title: 'Accurate Calculations', desc: 'Precise computation of employer and employee contributions.' },
        { title: 'Timely Submissions', desc: 'Remitting contributions to the Welfare Board within due dates.' },
        { title: 'State-specific Compliance', desc: 'Adhering to varied LWF rules and frequencies across different states.' },
        { title: 'Return Filing', desc: 'Filing statement of employer and employee contributions.' },
      ]
    },
    {
      title: 'Gratuity Act',
      icon: faHandshake,
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80',
      desc: 'Precise calculation of actuarial liabilities, expert guidance on trust formation, and swift processing of eligible employee gratuity claims.',
      benefits: [
        { title: 'Actuarial Liabilities', desc: 'Assistance with actuarial valuation of gratuity liability.' },
        { title: 'Trust Formation', desc: 'Expert guidance on creating and managing an approved Gratuity Trust.' },
        { title: 'Claims Processing', desc: 'Swift and accurate processing of employee gratuity claims upon exit.' },
        { title: 'Nomination Tracking', desc: 'Maintaining up-to-date employee nomination records (Form F).' },
        { title: 'Notice Display', desc: 'Ensuring display of statutory notices under the Gratuity Act.' },
      ]
    },
    {
      title: 'Digital Signature (DSC)',
      icon: faSignature,
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
      desc: 'Fast and secure issuance of Class 3 Digital Signature Certificates required for authenticating and e-filing various statutory returns and forms.',
      benefits: [
        { title: 'Fast Issuance', desc: 'Quick processing and issuance of new Digital Signature Certificates.' },
        { title: 'Class 3 Certificates', desc: 'Providing highly secure Class 3 DSCs required for compliance.' },
        { title: 'Secure Authentication', desc: 'Ensuring safe digital signing of statutory forms and returns.' },
        { title: 'e-Filing Support', desc: 'Assistance in utilizing DSC on EPFO, ESIC, and MCA portals.' },
        { title: 'Renewal Reminders', desc: 'Proactive alerts before DSC expiration to avoid compliance delays.' },
      ]
    },
    {
      title: "Workmen's Compensation Policy",
      icon: faUserShield,
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
      desc: 'Professional assistance in procuring accurate policies and effectively managing compensation claims for unforeseen workplace incidents.',
      benefits: [
        { title: 'Accurate Policies', desc: 'Professional assistance in procuring comprehensive WC insurance policies.' },
        { title: 'Claims Management', desc: 'End-to-end support in filing and processing compensation claims.' },
        { title: 'Workplace Incident Support', desc: 'Guidance on immediate steps and reporting after an accident.' },
        { title: 'Risk Assessment', desc: 'Advising on risk factors and adequate coverage amounts.' },
        { title: 'Legal Compliance', desc: 'Ensuring adherence to the Workmen\'s Compensation Act requirements.' },
      ]
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
                <div className="modal-header-text">
                  <h2 className="modal-title">{servicesList[activeModalIndex].title}</h2>
                  <p className="modal-desc">{servicesList[activeModalIndex].desc}</p>
                </div>
              </div>
              
              <hr className="modal-divider" />
              
              <div className="modal-more-details">
                <div className="modal-more-details-header">
                  <div className="modal-more-details-icon">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                  <h4>Why Choose KDM Associates?</h4>
                </div>
                <ul className="modal-benefits-list">
                  {servicesList[activeModalIndex].benefits && servicesList[activeModalIndex].benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <div className="benefit-check-icon-wrapper">
                        <FontAwesomeIcon icon={faCheck} className="benefit-check-icon" />
                      </div>
                      <span><strong>{benefit.title}</strong> - {benefit.desc}</span>
                    </li>
                  ))}
                </ul>
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
