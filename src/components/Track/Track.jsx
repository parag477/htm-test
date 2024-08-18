import React from 'react';
import './Track.scss';
import blockchain from './blockchain.svg';
import arVr from './ar-vr.svg';
import education from './education.svg';
import environment from './environment.svg';
import diversity from './diversity.svg';
import healthcare from './healthcare.svg';
import energy from './energy.svg';
import openInnovation from './openinnovation.svg';

const Track = () => {
  const trackData = [
    { title: 'Blockchain', icon: blockchain },
    { title: 'AR/VR', icon: arVr },
    { title: 'Education', icon: education },
    { title: 'Environment', icon: environment },
    { title: 'Diversity', icon: diversity },
    { title: 'Health Care', icon: healthcare },
    { title: 'Energy', icon: energy },
    { title: 'Open Innovation', icon: openInnovation },
  ];

  return (
    <div className="track-section" id="tracksection">
      <div className="track-title-container">
        <h2 className="track-section-title">LET'S CLIMB</h2>
        <h1 className="track-title">TRACKS</h1>
      </div>
      
      <div className="track-content">
        <div className="track-grid">
          {trackData.map((track, index) => (
            <div key={index} className="track-card">
              <img src={track.icon} alt={track.title} className="track-icon" />
              <h2 className="track-card-title">{track.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;