import React, { useState } from 'react';
import { clockStyle } from './';

const Clock = () => {

  const radius = 30;
  const offset = 2 * Math.PI * radius;
  const minUIoffset = 2 * Math.PI * (radius+2.2);
  const HourUIoffset = 2 * Math.PI * (radius+3.1);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [timerId, setTimerId] = useState(null);
  
  const handleStrokeDashoffset = (e) => {
    setStrokeDashoffset(e.target.value);
  }
  const handleStartTimer = () => {
    const count = offset / 60;
    let time = strokeDashoffset;
    const timerId = setInterval(() => {
      time = time - count;
      setStrokeDashoffset(time);
      if(time <= 0) {
        clearInterval(timerId);
        setStrokeDashoffset(0);
        return;
      }
    }, 1000);
    setTimerId(timerId);
  }
  const handleStopTimer = () => {
    clearInterval(timerId);
  }
  const handleResetTimer = () => {
    clearInterval(timerId);
    setStrokeDashoffset(0);
  }
  // console.log(minUIoffset);

  return (
    <div className={clockStyle.doc_clock}>
      <div className={clockStyle.inner_clock}>
        <div className={clockStyle.clock_ui}>
          <svg className={clockStyle.clock_svg} width="100" height="100" viewBox="0 0 140 140">
            {/* <circle cx="70" cy="70" r={radius+2} stroke="black" strokeWidth="41" fill="transparent" strokeDasharray={`0.6 ${minUIoffset/60}`} transform="rotate(270 70 70)"/> */}
            <circle cx="70" cy="70" r={radius+5} stroke="black" strokeWidth="41" fill="transparent" strokeDasharray={`1 ${HourUIoffset/12}`} strokeDashoffset={0.7} transform="rotate(270 70 70)"/>
            <circle cx="70" cy="70" r={radius} stroke="red" strokeWidth="40" fill="transparent"/>
            <circle cx="70" cy="70" r={radius} stroke="white" strokeWidth="40" fill="transparent" strokeDasharray={offset}  strokeDashoffset={strokeDashoffset} transform="rotate(270 70 70)"/>
              
          </svg>
        </div>
        <div className={clockStyle.test_console}>
          <input type="range" id="strokeDashoffset" name="strokeDashoffset"
            min="0" max={offset} step={offset/60} onChange={handleStrokeDashoffset} />
          <label htmlFor="strokeDashoffset">시간설정 : {(strokeDashoffset / (offset/60/60))/60} , { offset/60/60 }</label>
        </div>
        <div>
          <button onClick={handleStartTimer}>스타트</button>
          <button onClick={handleStopTimer}>정지</button>
          <button onClick={handleResetTimer}>리셋</button>
        </div>
      </div>
    </div>
  );
};

export default Clock;