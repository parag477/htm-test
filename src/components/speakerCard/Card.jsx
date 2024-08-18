import React, { useState, useEffect } from 'react';
import './Card.scss';

import aditya from './aditya.webp';
import sambhrant from './Sambhrant Tiwari.webp';
import shubhendra from './shubhendra.webp';
import navika from './Navika Chhauda .webp'
import Bhargav from './Bhargav Patel.webp';
import Mohit from './Mohit.webp';


const TruncatedTitle = ({ title, desktopMaxLength, mobileMaxLength, isHovered }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxLength = isMobile ? mobileMaxLength : desktopMaxLength;
    setIsTruncated(title.length > maxLength);
  }, [title, desktopMaxLength, mobileMaxLength, isMobile]);

  const displayTitle = isTruncated && !isHovered
    ? `${title.slice(0, isMobile ? mobileMaxLength : desktopMaxLength)}...`
    : title;

  return (
    <div className={`event-title ${isTruncated ? 'truncated' : ''}`}>
      <span>{displayTitle}</span>
    </div>
  );
};

const SpeakerCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="event-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="event-img-card">
        <img src={event.image} alt={event.speaker} className="event-image" />
      </div>
      <div className="event-details">
        <h2 className="event-speaker">{event.speaker}</h2>
        <TruncatedTitle 
          title={event.title} 
          desktopMaxLength={50} 
          mobileMaxLength={20}
          isHovered={isHovered}
        />
        <p className="event-datetime">{event.date} | {event.time}</p>
        <a href={event.link} target="_blank" rel="noopener noreferrer">
          <button className="watch-button">Watch More</button>
        </a>
      </div>
    </div>
  );
};

const SpeakerCards = () => {
  const speakerData = [
    {
      speaker: "Aditya Oberai",
      title: "Busting Hackathon Myths: A Beginner's Guide",
      date: "July 12th 2024",
      time: "7:30 PM - 8:15 PM",
      image: aditya,
      link: "https://x.com/i/spaces/1YqGoDlRQolJv"
    },
    {
      speaker: "Sambhrant Tiwari",
      title: "Hackathon Heroes: Crafting the ultimate team!",
      date: "July 17th 2024",
      time: "7:30 PM - 8:15 PM",
      image: sambhrant,
      link: "https://www.linkedin.com/events/hackathonheroes-craftingtheulti7218502080045465601/theater/"
    },
    {
      speaker: "Shubhendra Singh Chauhan",
      title: "Open Source Opportunities Unleashed",
      date: "July 20th 2024",
      time: "8:00 PM - 9:00 PM",
      image: shubhendra,
      link:"https://x.com/i/spaces/1MnxnDRbnnBGO"
    },
    {
      speaker: "Navika Chhauda ",
      title: "Cloud Basics: Unveiling Azure and Its Compute Services",
      date: "July 27th 2024",
      time: "8:00 PM - 9:00 PM",
      image: navika,
      link:"https://discord.gg/GesEwBJU?event=1266094211497984112"
    },
    {
      speaker: "Bhargav Patel",
      title: "ML launchpad : Your journey begins",
      date: "July 31th 2024",
      time: "8:00 PM - 9:00 PM",
      image: Bhargav,
      link:"https://discord.gg/GesEwBJU?event=1267769873543725067"
    },
    {
      speaker: "Mohit Bhat ",
      title: "Web3 Wizard: Mastering Blockchain and App Development",
      date: "August 3rd 2024",
      time: "8:00 PM - 9:00 PM",
      image: Mohit,
      link:"https://www.linkedin.com/events/web3wizardry-masteringblockchai7225094554553565184/theater/"
    }
  ];

  return (
    <section className="speaker-cards">
      <div className="cards-container">
        {speakerData.map((event, index) => (
          <SpeakerCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default SpeakerCards;
