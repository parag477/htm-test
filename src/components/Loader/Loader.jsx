import React from 'react';
import './Loader.scss';
import logo from './logo.png';

const Loader = () => {
  return (
    <div id="preloader">
      <div id="loader">
        <img src={logo} className="loader-logo" alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
