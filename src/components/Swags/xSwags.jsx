import React, { useCallback, useRef, useState } from 'react';
import './Swags.scss';
import selmon from './selmonBhai.png';
import swagCard from './Swag.png';
import * as htmlToImage from "html-to-image";
import { FaHourglassEnd } from "react-icons/fa";

const Swags = () => {
  const [userImage, setUserImage] = useState("");
  const fileInputRef = useRef(null);
  const [name, setName] = useState("Enter your Name");
  const ref = useRef(null);

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUserImage(URL.createObjectURL(event.target.files[0]));
    }
    console.log("Image Uploaded");
  };

  const downloadImage = useCallback(() => {
    const node = document.getElementById("swag-container");

    htmlToImage.toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-swag.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Oops, something went wrong!", error);
      });
  }, []);

  return (
    <section className="prize-section">
      <div className="prize-title-container">
        <h2 className="prize-section-title">HOW TO GENERATE</h2>
        <h1 className="prize-title">DIGITAL BADGE</h1>
      </div>
      
      <div className="swags-container">
      <div className="flex-shrink-0 relative text-white" ref={ref} id="swag-container">
            <div>
              <img
                src={swagCard}
                alt="Badge Image"
                width={449}
                height={550}
              />
              <img
                src={userImage || selmon}
                alt="User Image"
                className="absolute bottom-[6%] md:bottom-10 left-[20%] md:left-1/4 fade-bottom h-[320px] w-[280px] md:h-[380px] md:w-[300px] object-contain md:object-cover"
                height={320}
                width={320}
              />
              <p className="absolute bottom-[10%] left-1/3 font-medium text-3xl md:text-4xl lg:text-4xl tracking-wide opacity-90">{name}</p>
            </div>
          </div>

        <div className="text-column">
          <p className="swags-description">Introducing the HTM 5.0 Digital Badge!</p>
          <p className="swags-content">Celebrate your membership in the prestigious International Hackathon Community with exclusive HTM 5.0 Digital Badge. To get your personalised e-badge, follow these steps:</p>
          <p className="swags-content">
            <ol>
              <li>Enter your name</li>
              <li>Upload your photo</li>
              <li>Download your Badge</li>
            </ol>
          </p>
          <p className="swags-content">This exclusive badge is a great way to showcase your participation and achievements.</p>
          <p className="swags-note">*Note: Your privacy is our priority. We do not store your photos on our servers or use them in any other way that compromises your privacy.</p>
          <div className="swags-action">
            <input className='swags-input' placeholder='Enter Your Name' type="text" value={name} onFocus={e => e.target.select()} onChange={e => setName(e.target.value)} />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
              required={true}
            />
            <button className='swags-btn' type="submit" onClick={() => fileInputRef.current.click()}><FaHourglassEnd />Upload Your Photo</button>
          </div>
          <button className='swags-build' onClick={downloadImage} type="submit"><FaHourglassEnd />Build it</button>
        </div>
      </div>
    </section>
  );
};

export default Swags;
