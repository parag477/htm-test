import React from 'react';
import './Prize.scss';

const PrizeSection = () => {
  return (
    <section className="prize-section-container" id="prize">
      <div className="prize-section-content">
        <h2 className="prize-section-background-text prize-section-background-text-top">CHAMPION'S REWARD</h2>
        <h1 className="prize-section-main-title">PRIZE POOL</h1>
        <h3 className="prize-section-amount-text">PRIZES WORTH ₹30 LAKHS</h3>
        <p className="prize-section-footnote">*Total Prize Pool for HTM 5.0 including Online and Offline</p>
      </div>

    </section>
  );
};

export default PrizeSection;