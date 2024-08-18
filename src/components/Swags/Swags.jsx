import React, { useCallback, useRef, useState } from 'react';
import './Swags.scss';
import selmon from './selmonBhai.png';
import swagCard from './Swag.png';
import * as htmlToImage from "html-to-image";
import { FaHourglassEnd } from "react-icons/fa";

const Swags = () => {
  const [userImage, setUserImage] = useState("");
  const [bgRemove, setBgRemove] = useState("");
  const fileInputRef = useRef(null);
  const [name, setName] = useState("Your Name");
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


      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex flex-col items-center w-full max-w-7xl p-6 space-y-8 md:flex-row md:space-y-0 md:space-x-16">
          <div className="flex-shrink-0 relative" ref={ref} id="swag-container">
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

          <div className="flex flex-col items-center w-full space-y-4 md:items-start">
            <h1 className="text-xl font-bold">Introducing the HTM 5.0 Digital Badge!</h1>
            <p className="text-base font-light">Celebrate your membership in the prestigious International Hackathon Community with exclusive HTM 5.0 Digital Badge. To get your personalised e-badge, follow these steps:</p>
            <ol className="list-decimal list-inside text-base font-light">
              <li>Enter your name</li>
              <li>Upload your photo</li>
              <li>Download your Badge</li>
            </ol>
            <p className="text-base font-light">This exclusive badge is a great way to showcase your participation and achievements.</p>
            <p className="text-sm font-extralight text-opacity-70 pt-4 pb-4">*Note: Your privacy is our priority. We do not store your photos on our servers or use them in any other way that compromises your privacy.</p>

            <input
              type="text" placeholder="Enter your Name" className="w-full max-w-xs p-2 rounded text-white text-opacity-40 bg-transparent border border-gray-300"
              value={name}
              onFocus={e => e.target.select()}
              onChange={e => setName(e.target.value)}
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{display: "none"}}
              onChange={handleImageUpload}
              required={true}
            />
            
            <div className="flex space-x-4">
              <button
                className="bg-white p-2 px-4 rounded text-black"
                onClick={() => fileInputRef.current.click()}
              >
                Upload your photo
              </button>
              <button className="bg-gradient-to-b from-[#149087] to-[#0F4945] p-2 px-6 rounded" onClick={downloadImage}>Build it</button>
            </div>
            {bgRemove && (
              <div className="mb-4">
                <a
                  href={bgRemove}
                  download="background_removed_image.png"
                >
                  <button className="bg-[#EE5D4F] p-2 px-4 rounded">
                    Download
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Swags;
