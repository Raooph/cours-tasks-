import React from 'react';
import './style.css'; // Make sure to create a CSS file for styling

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;