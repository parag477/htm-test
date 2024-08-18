import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from './logo.png';
import mlh from './mlh.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <nav className={`nav-container ${isOpen ? 'open' : ''}`}>
          <div className="nav-wrapper">
            <ul className="nav-menu">
              <li className="nav-item"><a href="/">Home</a></li>
              <li className="nav-item"><a href="#tracksection">Tracks</a></li>
              <li className="nav-item"><a href="/workshops">Workshops</a></li>
              {/* <li className="nav-item"><a href="/swags">Swags</a></li> */}
              <li className="nav-item"><a href="/team">Team</a></li>
              <li className="nav-item"><a href="#footer">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="menu-toggle">
          {!isOpen ? (
            <button className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          ) : (
            <button className="cross" onClick={toggleMenu}>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
        <Link to="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white">
          <img src={mlh} alt="Secondary Logo" className="logo-image desktop-logo" />
        </Link>
        
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item"><a href="/" onClick={closeMenu}>Home</a></li>
            <li className="mobile-nav-item"><a href="#tracksection" onClick={closeMenu}>Tracks</a></li>
            <li className="mobile-nav-item"><a href="/workshops" onClick={closeMenu}>Workshops</a></li>
            {/* <li className="mobile-nav-item"><a href="/swags" onClick={closeMenu}>Swags</a></li> */}
            <li className="mobile-nav-item"><a href="/team" onClick={closeMenu}>Team</a></li>
            <li className="mobile-nav-item"><a href="#footer" onClick={closeMenu}>Contact</a></li>
            <li><a href="https://portal.hackthemountain.tech/" target="_blank" rel="noreferrer noopener" className="nav-btn">Register</a></li>
          </ul>
          
        </div>

      )}
    </header>
  );
};

export default Navbar;
