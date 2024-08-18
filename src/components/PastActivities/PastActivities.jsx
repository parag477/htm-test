import React from 'react';
import './PastActivities.scss';
import main from './main.svg'

import { GiOfficeChair } from 'react-icons/gi';
import { MdPeopleAlt, MdOutlineCastForEducation } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { LuTrophy } from "react-icons/lu";
import { FaHourglassEnd } from "react-icons/fa";

const History = () => {
  return (
    <section className="stats-container">
      <div className="stats-wrapper">
        <div className="stats-column">
          <div className="stat-box">
            <MdPeopleAlt className='stat-icon'/>
            <span className='stat-text'>17,000+ HACKERS</span>
          </div>
          <div className="stat-box">
            <BsFilePerson className='stat-icon'/>
            <span className='stat-text'>150+ MEMBERS</span>
          </div>
          <div className="stat-box">
            <BsLaptop className='stat-icon'/>
            <span className='stat-text'>1000+ PROJECTS</span>
          </div>
          <div className="stat-box">
            <FaHourglassEnd className='stat-icon'/>
            <span className='stat-text'>138+ HOURS</span>
          </div>
        </div>
        <div className="center-image">
          <img src={main} alt="Central statistics visualization" />
        </div>
        <div className="stats-column">
          <div className="stat-box">
            <MdOutlineCastForEducation className='stat-icon'/>
            <span className='stat-text'>185+ WORKSHOPS</span>
          </div>
          <div className="stat-box">
            <GiOfficeChair className='stat-icon'/>
            <span className='stat-text'>80+ JUDGES</span>
          </div>
          <div className="stat-box">
            <BsGlobeCentralSouthAsia className='stat-icon'/>
            <span className='stat-text'>100+ COUNTRIES</span>
          </div>
          <div className="stat-box">
            <LuTrophy className='stat-icon'/>
            <span className='stat-text'>45+ WINNERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;