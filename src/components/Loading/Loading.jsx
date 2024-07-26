// WaveLoader.js

import React from 'react';
import './Loading.css'; // Import the CSS file for styling

const Loading = () => {
  return (
    <div className="center">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="wave"></div>
      ))}
    </div>
  );
};

export default Loading;
