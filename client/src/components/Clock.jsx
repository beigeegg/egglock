import React, { useState } from 'react';
import { clockStyle } from './';

const Clock = () => {

  const [strokeDasharray, setStrokeDasharray] = useState(2 * Math.PI * 20);
  const [strokeDashoffset, setStrokeDashoffset] = useState(141.372);
  const [rotate, setRotate] = useState(270);
  const offset = 2 * Math.PI * 20;

  const handleStrokeDasharray = (e) => {
    setStrokeDasharray(e.target.value);
  }
  const handleStrokeDashoffset = (e) => {
    setStrokeDashoffset(e.target.value);
  }
  const handleRotate = (e) => {
    setRotate(e.target.value);
  }


  return (
    <div className={clockStyle.clockDoc}>
      <svg width="20%" height="20%" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="20" stroke="red" strokeWidth="30" fill="transparent" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} transform={`rotate(${rotate} 50 50)`} />
      </svg>
      <div>
        <input type="range" name="strokeDasharray"
          min="0" max="360" onChange={handleStrokeDasharray} />
        <label htmlFor="strokeDasharray">strokeDasharray : {strokeDasharray}</label>
      </div>
      <div>
        <input type="range" id="strokeDashoffset" name="strokeDashoffset"
          min="0" max={2 * Math.PI * 20} step="0.001" onChange={handleStrokeDashoffset} />
        <label htmlFor="strokeDashoffset">strokeDashoffset : {strokeDashoffset} , {offset}</label>
      </div>
      <div>
        <input type="range" id="rotate" name="rotate"
          min="-90" max="360" onChange={handleRotate} />
        <label htmlFor="rotate">rotate : {rotate}</label>
      </div>
    </div>
  );
};

export default Clock;