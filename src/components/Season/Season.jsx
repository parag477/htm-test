import React from 'react';
import './Season.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from './one.webp';
import two from './two.webp';
import three from './three.webp';
import four from './four.webp';

const Links = [
  "https://hackthemountains.netlify.app/",
  "https://hackthemountains2.netlify.app/",
  "https://hackthemountains3.netlify.app/",
  "https://hackthemountains4.netlify.app/"
]

const seasons = [
  { title: "Season 1", status: "Online", imgSrc: one, link: Links[0] },
  { title: "Season 2", status: "Online", imgSrc: two, link: Links[1] },
  { title: "Season 3", status: "Haryana", imgSrc: three, link: Links[2] },
  { title: "Season 4", status: "New Delhi", imgSrc: four, link: Links[3] },
];

const Season = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="season-timeline">
      <div className="past-title-container">
        <h2 className="past-section-title">DISCOVER</h2>
        <h1 className="past-title">A LOOK INTO OUR HISTORY</h1>
      </div>

      <div className="timeline">
        <div className="desktop-view">
          {seasons.map((season, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'high' : 'low'}`} key={index}>
              <div className="image-container">
                <img src={season.imgSrc} alt={season.title} className="season-image" />
              </div>
              <div className="connector">
                <div className="dotted-line"></div>
                <div className="diamond"></div>
              </div>
              <div className="season-info">
                <h3 className="season-text">{season.title}</h3>
                {/* <div className="status-box">
                  <a href={season.link} className="status-box-text">{season.status}</a>
                </div> */}
                <a href={season.link} target="_blank" rel="noreferrer noopener" className="season-btn">{season.status}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mobile-view">
          <Slider {...settings}>
            {seasons.map((season, index) => (
              <div className="timeline-item mobile" key={index}>
                <div className="image-container">
                  <img src={season.imgSrc} alt={season.title} className="season-image" />
                </div>
                <div className="connector">
                  <div className="dotted-line"></div>
                  <div className="diamond"></div>
                </div>
                <div className="season-info">
                  <h3 className="season-text">{season.title}</h3>
                  <a href={season.link} target="_blank" rel="noreferrer noopener" className="season-btn">{season.status}</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Season;
