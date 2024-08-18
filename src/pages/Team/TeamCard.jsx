import React from 'react';
import './TeamCard.scss';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import mohit from './TeamMembers/mohit.webp';
import anmol from './TeamMembers/anmol.webp';
import avinash from './TeamMembers/avinash.webp';
import varsha from './TeamMembers/varsha.webp';
import ankit from './TeamMembers/ankit.webp';
import krishkhattar from './TeamMembers/krish_khattar.webp';
import krishgupta from './TeamMembers/krish_gupta.webp';
import rachit from './TeamMembers/rachit.webp';
import yashas from './TeamMembers/yashas.webp';
import anshika from './TeamMembers/anshika.webp';
import ayush from './TeamMembers/divy_ayush.webp';
import ananya from './TeamMembers/ananya.webp';
import laksh from './TeamMembers/laksh.webp';
import aryan from './TeamMembers/aryan.webp';
import harsh from './TeamMembers/harsh.webp';
import saumya from './TeamMembers/saumya.webp';
import disha from './TeamMembers/disha.webp';
import parag from './TeamMembers/parag.webp';
import deepanshu from './TeamMembers/deepanshu.webp';
import sahil from './TeamMembers/sahil.webp';
import piyush from './TeamMembers/piyush.webp';
import manas from './TeamMembers/manas.webp';
import kshitij from './TeamMembers/kshitij.webp';
import yash from './TeamMembers/yash.webp';
import khushal from './TeamMembers/khushal.webp';
import kartikaya from './TeamMembers/kartikeya.webp';
import tushar from './TeamMembers/tushar.webp';
import rohit from './TeamMembers/rohit.webp';

const TeamCard = () => {
  const trackData = [
    { image: mohit, name: 'Mohit Sharma', linkedin: 'https://www.linkedin.com/in/mohit-sharma1/', twitter: 'https://x.com/mohitsharma_09' },
    { image: anmol, name: 'Anmol Reshi', linkedin: 'https://www.linkedin.com/in/anmolreshi/', twitter: 'https://x.com/Anmolreshi_21' },
    { image: avinash, name: 'Avinash Koshal', linkedin: 'https://www.linkedin.com/in/avinashkoshal/', twitter: '' },
    { image: varsha, name: 'Varsha Sharma', linkedin: 'https://www.linkedin.com/in/varsha-sharma-2266021a4', twitter: '' },
    { image: ankit, name: 'Ankit Kapoor', linkedin: 'https://www.linkedin.com/in/ankit4kapoor/', twitter: '' },
    { image: krishkhattar, name: 'Krish Khattar', linkedin: 'https://www.linkedin.com/in/krishkhattar/', twitter: 'https://x.com/krish_khattar' },
    { image: krishgupta, name: 'Krish Gupta', linkedin: '', twitter: '' },
    { image: rachit, name: 'Rachit Agarwal', linkedin: 'https://www.linkedin.com/in/rachitag112', twitter: 'https://www.twitter.com/rachitag112' },
    { image: yashas, name: 'Yashas Mittal', linkedin: 'https://www.linkedin.com/in/yashas-mittal-16a840236/', twitter: 'https://x.com/YashasMittal' },
    { image: anshika, name: 'Anshika Arora', linkedin: 'https://www.linkedin.com/in/anshika-arora-863404248', twitter: 'https://x.com/347ansha' },
    { image: ayush, name: 'Divy Ayush Kumar', linkedin: 'https://www.linkedin.com/in/divy-ayush-kumar', twitter: 'https://x.com/AyushDivy' },
    { image: ananya, name: 'Ananya Biswas', linkedin: 'https://www.linkedin.com/in/ananya-biswas888/', twitter: 'https://x.com/Ananya48550553' },
    { image: laksh, name: 'Laksh Kapoor', linkedin: 'https://www.linkedin.com/in/laksh-kapoor/', twitter: 'https://x.com/laksh_kapoor_' },
    { image: aryan, name: 'Aryan Gajjar', linkedin: '', twitter: '' },
    { image: harsh, name: 'Harsh Trivedi', linkedin: 'https://www.linkedin.com/in/harsh-trivedi03', twitter: 'https://x.com/harshh_trivedi' },
    { image: saumya, name: 'Saumya Bhattacharya', linkedin: 'https://www.linkedin.com/in/saumya-bhattacharya-2b6bb522b/', twitter: 'https://x.com/SaumyaB_28' },
    { image: disha, name: 'Disha Verma', linkedin: 'https://www.linkedin.com/in/disha-verma-415435231', twitter: 'https://x.com/theflank08' },
    { image: parag, name: 'Parag Agrawal', linkedin: 'https://www.linkedin.com/in/parag-agrawal-101892202/', twitter: 'https://x.com/Parag_477' },
    { image: deepanshu, name: 'Deepanshu Tyagi', linkedin: 'https://www.linkedin.com/in/deepanshu-tyagi-2122ab268/', twitter: 'https://twitter.com/deepanshu_2910' },
    { image: sahil, name: 'Sahil Panwar', linkedin: 'https://www.linkedin.com/in/sahil-panwar-715370294', twitter: 'https://x.com/sahilpanwa58776?s=21' },
    { image: piyush, name: 'Piyush Sharma', linkedin: 'https://www.linkedin.com/in/piyush-sharma20/', twitter: 'https://x.com/Piysync810' },
    { image: manas, name: 'Manas Jha', linkedin: 'https://www.linkedin.com/in/manasjhamj', twitter: 'https://x.com/manasjhamj' },
    { image: kshitij, name: 'Kshitij Varma', linkedin: 'https://www.linkedin.com/in/kshitijvarma21/', twitter: 'https://twitter.com/kstij21' },
    { image: yash, name: 'Yash Singhal', linkedin: 'https://www.linkedin.com/in/yash-singhal-3bba42272/', twitter: 'https://x.com/YashSinghal2612' },
    { image: khushal, name: 'Khushal Khandelwal', linkedin: 'https://www.linkedin.com/in/khushal-khandelwal/', twitter: 'https://x.com/KhushalK_dev' },
    { image: kartikaya, name: 'Kumar Kartikeya', linkedin: 'https://www.linkedin.com/in/karthicc-bruh/', twitter: '' },
    { image: tushar, name: 'Tushar Gupta', linkedin: 'https://linkedin.com/in/tushar1504', twitter: 'https://x.com/tuszhhar' },
    { image: rohit, name: 'Rohit Kumar', linkedin: '', twitter: '' },
  ];

  return (
    // <section className="team-cards">
    //   <div className="team-content">
    //     <div className="team-grid">
    //         <div className="team-card">
    //           <img src="./TeamMembers/rohit.webp" alt="Rohit" className="team-icon" />
    //           <h2 className="team-card-title">Rohit Kumar</h2>
    //         </div>
    //     </div>
    //   </div>
    // </section>

    <section className="team-cards">
      <div className="team-content">
        <div className="team-grid">
          {trackData.map((track, index) => (
            <div key={index} className="team-card">
              <img src={track.image} alt={track.name} className="team-icon" />
              <h2 className="team-card-title">{track.name}</h2>
              <a href={track.twitter} className="team-link1" target="_blank" rel="noopener noreferrer">
                <i><FaXTwitter/></i>
              </a>
              <a href={track.linkedin} className="team-link2" target="_blank" rel="noopener noreferrer">
                <i><FaLinkedin/></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
