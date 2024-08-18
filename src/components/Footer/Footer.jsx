import React from 'react';
import './Footer.scss';
import logoImage from './logo.png';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
     <div className="body-hr"></div>
    <footer className="footer-distributed" id="footer">
     
      <div className="footer-left">
        <img
          src={logoImage}
          alt="Hack The Mountains Logo"
          className="footer-logo-image"
        />

        <p className='footer-text'>Hack The Mountains is A Global Community Run Hackathon Organized by Sudans Techocrats Foundation Every Year</p>

        <div className="footer-icons">
          <a href="https://www.linkedin.com/company/hackmountains/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/HackMountains" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/hackmountains/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/@HackTheMountains" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-center">
          <h2 className='footer-mid-text'>USEFUL LINKS</h2>
          <ul className="footer-links">
            <li><a href='/team'>Team</a></li>
            <li><a href='https://medium.com/@sudanstech'>Blog</a></li>
            <li><a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target="_blank" rel="noopener noreferrer">MLH Code Of Conduct</a></li>
            <li><a href='https://linktr.ee/hackmountains'>Other Links</a></li>
            <li><a href='mailto:hackthemountains@gmail.com'>Email: hackthemountains@gmail.com</a></li>
            
            <li><a href="https://portal.hackthemountain.tech/" target="_blank" rel="noreferrer noopener" className="footer-btn">Register</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © Copyright <a href="https://www.sudanstech.com/"><span>Sudans Tech</span></a>. All Rights Reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;