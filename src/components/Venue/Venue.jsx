import React from 'react';
import './Venue.scss';
import backgroundImage from './image.webp';
import logoImage from './logo.webp';
import naacLogo from './Naac.svg';

const Venue = () => {
  return (
    <section className="venue-section">
      <div className="sponsors-title-container">
        <h2 className="sponsors-section-title">ACADEMIC ATRIUM</h2>
        <h1 className="sponsors-title">VENUE PARTNER</h1>
      </div>
      <div className="venue-content">
        <img src={backgroundImage} alt="Marwadi University" className="background-image" />
        <div className="overlay">
          <div className="content-wrapper">
            <div className="logo-container">
              <a href="https://www.marwadiuniversity.ac.in/" target="_blank" rel="noopener noreferrer">
                <img src={logoImage} alt="Marwadi University Logo" className="Marwadi-logo" />
              </a>
              <div className="university-text">Marwadi Chandarana Group</div>
            </div>
            <div className="vertical-divider"></div>
            <div className="naac-container">
              <div className="naac-title">NAAC</div>
              <img src={naacLogo} alt="NAAC A+ Grade" className="naac-logo" />
            </div>
          </div>
          <a href="https://maps.app.goo.gl/GSHkXE2t8hEyNgxNA" target="_blank" rel="noopener noreferrer" className="get-directions-button">
            GET Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Venue;