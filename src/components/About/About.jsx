import React from 'react';
import './About.scss';
import about from './About.webp';

const About = () => {
  return (
    <section className="htm-about-us-section" id="aboutus">
      <div className="htm-about-content">
        <div className="htm-about-title-container">
          <h2 className="htm-about-section-title">ABOUT US</h2>
          <h1 className="htm-about-title">WHO ARE WE</h1>
        </div>

        <div className="htm-content-wrapper"></div>
        <div className="htm-content-container">
          <div className="htm-image-column">
            <img
              loading="lazy"
              src={about}
              className="htm-about-image"
              alt="About Hack the Mountains"
            />
          </div>
          <div className="htm-text-column">
            <p className="htm-about-description">
              Welcome to HACK THE MOUNTAINS, where innovation meets opportunity. We are thrilled to announce the upcoming 5th season of our globally recognized hackathon, building upon the exceptional success of our previous editions. At Hack The Mountains, we are dedicated to pushing the boundaries of creativity, innovation, and collaboration within the tech industry.<br />
              <br />
              As we gear up for this high-octane event, the 5th season solemnly promises participants an unparalleled experience filled with new challenges and endless possibilities. Our mission remains steadfast, to provide a dynamic platform that not only tests your skills but also surpass personal and professional growth in the world of hacking and technology. Join us on this journey to elevate your potential and make lasting contributions to the tech community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
