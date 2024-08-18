import React from 'react';
import './Home.scss';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className="home-container" id="home-section">
      <Navbar />
      <section className="hero-section" id="home">
        <img
          src={require('./HTM.webp')}
          alt="Mountain landscape"
          className="hero-background"
        />
        <div className="hero-content">
          <h2 className="hero-subtitle">
            <div className="brightened">5.0</div>
          </h2>
          <h1 className="hero-title">HACK THE MOUNTAINS</h1>
          <p className="hero-description">Hybrid Mode | 14 - 15 Sept '24 | Marwadi University, Gujarat</p>
          <div className="cta-buttons">
            <a href="https://portal.hackthemountain.tech/" target="_blank" rel="noreferrer noopener" className="register-btn">Register</a>
            <a href="https://discord.gg/hackthemountains-739398445143425124" target="_blank" rel="noreferrer noopener" className="discord-btn">Discord</a>
          </div>
        </div>
      </section>
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default Home;