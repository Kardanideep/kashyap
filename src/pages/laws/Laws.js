import React, { useState, useEffect } from 'react';
import useSEO from '../../hooks/useSEO';
import { HashLink as Link } from 'react-router-hash-link';
import './Laws.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Laws() {
  const [activeIndex, setActiveIndex] = useState(null);

  useSEO(
    'Labour Laws & Acts',
    'Understand key Indian Labour Laws covered by KDM Associates — EPF Act, ESI Act, Factory Act, Minimum Wages Act, Bonus Act, Gratuity Act, Contract Labour Act, and more.',
    '/laws',
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Indian Labour Laws & Acts - KDM Associates",
      "description": "Understand key Indian Labour Laws covered by KDM Associates — EPF Act 1952, ESI Act 1948, Factory Act 1948, Minimum Wages Act 1948, Bonus Act 1965, Gratuity Act 1972, Contract Labour Act 1970, and more.",
      "url": "https://www.kdmassociates.com/laws",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1,  "name": "Employee's Provident Funds & Misc. Provisions Act, 1952" },
          { "@type": "ListItem", "position": 2,  "name": "Employee's State Insurance Act, 1948" },
          { "@type": "ListItem", "position": 3,  "name": "Factories Act, 1948" },
          { "@type": "ListItem", "position": 4,  "name": "Minimum Wages Act, 1948" },
          { "@type": "ListItem", "position": 5,  "name": "Payment Of Bonus Act, 1965" },
          { "@type": "ListItem", "position": 6,  "name": "Payment Of Gratuity Act, 1972" },
          { "@type": "ListItem", "position": 7,  "name": "The Building And Other Construction Workers Act, 1996" },
          { "@type": "ListItem", "position": 8,  "name": "Equal Remuneration Act, 1976" },
          { "@type": "ListItem", "position": 9,  "name": "Contract Labour Act (Regulation & Abolition), 1970" },
          { "@type": "ListItem", "position": 10, "name": "Labour Welfare Fund" },
          { "@type": "ListItem", "position": 11, "name": "Professional Tax Act" },
          { "@type": "ListItem", "position": 12, "name": "Digital Signature" },
          { "@type": "ListItem", "position": 13, "name": "Workmen's Compensation Policy" }
        ]
      }
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const lawsList = [
    { 
      name: "Employee's Provident Funds & Misc. Provisions Act", 
      year: "1952",
      desc: "The EPF Act was introduced to build a secure financial future for employees through regular savings. It creates a retirement fund with contributions from both the employer and the employee. The Act ensures financial stability and social security for the working workforce."
    },
    { 
      name: "Employee's State Insurance Act", 
      year: "1948",
      desc: "Provides comprehensive health insurance and social security benefits to workers in the organized sector, covering medical, sickness, maternity, and disablement benefits."
    },
    { 
      name: "Factories Act", 
      year: "1948",
      desc: "Ensures the occupational safety, health, and welfare of workers employed in manufacturing environments, regulating working hours, hazardous processes, and workplace conditions."
    },
    { 
      name: "Minimum Wages Act", 
      year: "1948",
      desc: "Sets the statutory minimum wage rates for skilled and unskilled labourers across various industries, ensuring workers receive fair compensation for their labor."
    },
    { 
      name: "Payment Of Bonus Act", 
      year: "1965",
      desc: "Regulates the mandatory payment of bonuses to employees based on the profitability of the establishment, ensuring workers share in the company's financial success."
    },
    { 
      name: "Payment Of Gratuity Act", 
      year: "1972",
      desc: "Provides for a lump sum payment to employees upon their retirement, resignation, or termination after completing five continuous years of service as a reward for loyalty."
    },
    { 
      name: "The Building And Other Construction Workers Act", 
      year: "1996",
      desc: "Regulates the employment and conditions of service of building and construction workers, ensuring their safety, health, and welfare measures are prioritized."
    },
    { 
      name: "Equal Remuneration Act", 
      year: "1976",
      desc: "Prohibits discrimination on the ground of gender in the payment of wages, ensuring equal pay for equal work for both men and women."
    },
    { 
      name: "Contract Labour Act (Regulation & Abolition)", 
      year: "1970",
      desc: "Regulates the employment of contract labour in certain establishments, outlining the rights of contract workers, contractor licensing, and principal employer obligations."
    },
    { 
      name: "Labour Welfare Fund", 
      year: "",
      desc: "A statutory contribution by employers, employees, and the state government used to fund amenities, recreation, and social security programs for workers."
    },
    { 
      name: "Professional Tax Act", 
      year: "",
      desc: "A state-level tax levied on income earned by salaried employees and professionals, requiring employers to deduct and remit the tax to the state government."
    },
    { 
      name: "Digital Signature", 
      year: "",
      desc: "Legally recognized electronic signatures required for secure online authentication, e-filing of statutory returns, and digital compliance submissions."
    },
    { 
      name: "Workmen’s Compensation Policy", 
      year: "",
      desc: "Provides financial protection and medical compensation to employees or their dependents in the event of work-related injuries, accidents, or occupational diseases."
    }
  ];

  return (
    <main className="laws-page">
      
      {/* ===== LAWS HEADER ===== */}
      <section className="laws-minimal-header">
        <div className="laws-header-bg"></div>
        <div className="laws-header-content">
          <h1>Legal Frameworks &amp; Acts</h1>
          <p>
            We ensure absolute compliance across this comprehensive spectrum of Indian labour laws, 
            protecting your business from statutory risks and penalties with expert guidance.
          </p>
        </div>
      </section>

      {/* ===== ACCORDION INDEX CARDS ===== */}
      <section className="laws-accordion-container">
        <div className="laws-accordion-list">
          {lawsList.map((law, index) => (
            <div 
              key={index} 
              className={`law-card ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="law-card-header" 
                onClick={() => toggleAccordion(index)}
              >
                <div className="law-card-title-group">
                  <span className="law-card-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3 className="law-card-title">
                    {law.name}
                    {law.year && <span className="law-card-year">{law.year}</span>}
                  </h3>
                </div>
                <div className="law-card-toggle">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              
              <div className="law-card-dropdown">
                <div className="law-card-body">
                  <p>{law.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA BOTTOM SECTION ===== */}
      <section className="laws-bottom-cta">
        <h3>Need Help Navigating These Laws?</h3>
        <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
          Our experts are ready to handle all your compliance needs.
        </p>
        <Link smooth to="/contact" className="btn-laws-primary">
          Get Professional Advice
        </Link>
      </section>

    </main>
  );
}

export default Laws;
