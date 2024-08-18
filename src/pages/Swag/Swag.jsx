import React from 'react';
import './Swag.scss';
import Navbar from '../../components/Navbar/Navbar';
import Swags from '../../components/Swags/Swags';
import img from './swags.png';
import Footer from '../../components/Footer/Footer';

const Swag = () => {
  return (
    <>
      <div className="swag-container">
        <Navbar />
        <section className="swag-section">
          <img
            src={img}
            alt="Speaker session background"
            className="swag-background"
          />
          <div className="whitish-overlay"></div>
          <div className="swag-content">
            <h1 className="swag-title">COLLECT YOUR SWAGS</h1>
            <p className="swag-subtitle">CREATE | COLLABORATE | COMMUNICATE</p>
          </div>
        </section>
        <div className="gradient-overlay"></div>
      </div>
      <Swags />
      <Footer />
    </>
  );
};

export default Swag;
