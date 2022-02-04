import React, { useEffect, useState } from 'react';
import { clockStyle } from './';

const Clock = () => {

  const [strokeDasharray, setStrokeDasharray] = useState(2 * Math.PI * 20);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [rotate, setRotate] = useState(270);
  const offset = 2 * Math.PI * 20;

  const handleStrokeDasharray = (e) => {
    setStrokeDasharray(e.target.value);
  }
  const handleStrokeDashoffset = (e) => {
    setStrokeDashoffset(e.target.value);
  }

  const handleTimerControl = () => {
    const min = 60;
    const _offset = 2 * Math.PI * 20;
    const plus = _offset / min
    let count = 0;
    const timerId = setInterval(() => {
      count = count + plus;
      setStrokeDashoffset(count);
    }, 1000);
  }

  // useEffect(() => {

  // }, [])


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
      <button onClick={handleTimerControl}>스타트</button>
    </div>
  );
};

export default Clock;