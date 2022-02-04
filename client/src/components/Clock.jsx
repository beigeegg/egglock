import React from 'react';
import { clockStyle } from './';

const Clock = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1728" height="1117" viewBox="0 0 1728 1117" fill="none" className="">
        <rect width="1728" height="1117" fill="#E5E5E5" />
        <rect width="1728" height="1117" fill="white" />
        <rect x="489" y="184" width="750" height="750" fill="#C4C4C4" />
        <circle
          cx="864"
          cy="559"
          r="1"
          fill="#CA3E3E"
          stroke="blue"
          stroke-width="200"
          stroke-dasharray="300 300"
        />
        {/* <ellipse cx="864" cy="559" rx="300" ry="300" fill="white" /> */}
      </svg>
    </div>
  );
};

export default Clock;