import React from 'react';
import './Speaker.scss';
import Navbar from '../../components/Navbar/Navbar';
import Cards from '../../components/speakerCard/Card';
import img from './speakers.webp';
import Footer from '../../components/Footer/Footer';

const Speaker = () => {
  return (
    <>
      <div className="speaker-container">
        <Navbar />
        <section className="speaker-section">
          <img
            src={img}
            alt="Speaker session background"
            className="speaker-background"
          />
          <div className="whitish-overlay"></div>
          <div className="speaker-content">
            <h1 className="speaker-title">SPEAKERS SESSION</h1>
            <p className="speaker-subtitle">CREATE | COLLABORATE | COMMUNICATE</p>
          </div>
        </section>
        <div className="gradient-overlay"></div>
      </div>
      <Cards />
      <Footer />
    </>
  );
};

export default Speaker;
