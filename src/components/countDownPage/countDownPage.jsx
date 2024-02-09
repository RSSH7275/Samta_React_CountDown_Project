import React, { useEffect, useState } from "react";
import "./countDownPage.css";

const CountDownPage = () => {
  const [timeHours, setHours] = useState(0);
  const [timeMins, setMins] = useState(0);
  const [timeSecs, setSecs] = useState(0);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    let createTimerId;
    if (isActive) {
      createTimerId = setInterval(() => {
        if (timeSecs > 0 && timeSecs < 60) {
          setSecs((seconds) => seconds - 1);
        } else if (timeMins > 0 && timeMins < 60) {
          setMins((mins) => mins - 1);
          setSecs(59);
        } else if (timeHours > 0 && timeHours < 13) {
          setHours((hours) => hours - 1);
          setMins(59);
          setSecs(59);
        }
      }, 1000);
    }
    return () => clearInterval(createTimerId);
  }, [isActive, timeHours, timeMins, timeSecs]);

  //   console.log(timeHours,timeMins,timeSecs);

  const handleBtnStart = (e) => {
    // console.log(e.target.value);
    if (timeSecs < 60 && timeMins < 60 && timeHours < 13) {
      setIsActive(true);
    } else {
      alert("SELECT VALID TIME!!");
      setHours(0);
      setMins(0);
      setSecs(0);
    }
  };

  function handleBtnStop() {
    setIsActive(false);
  }

  function handleResetBtn() {
    setHours(0);
    setMins(0);
    setSecs(0);
    setIsActive(false);
  }

  //   console.log(timeHours,timeMins,timeSecs);

  return (
    <div className="timer">
      <div style={{ textAlign: "center" }}>
        <h2>CountDown Timer</h2>
      </div>

      <div className="timerBox">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h4>Hours</h4>
          <h4>Minutes</h4>
          <h4>Seconds</h4>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="number"
            value={timeHours}
            onChange={(e) => setHours(e.target.value)}
            maxLength="2"
            onInput={(e) => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
              }
            }}
            className="inpStyler"
            placeholder="00"
          />
          <input
            type="number"
            value={timeMins}
            onChange={(e) => setMins(e.target.value)}
            maxLength="2"
            onInput={(e) => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
              }
            }}
            className="inpStyler"
            placeholder="00"
          />
          <input
            type="number"
            value={timeSecs}
            onChange={(e) => setSecs(e.target.value)}
            maxLength="2"
            onInput={(e) => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
              }
            }}
            className="inpStyler"
            placeholder="00"
          />
        </div>
      </div>

      <div className="btnStyler">
        <button className="btn start" onClick={handleBtnStart} value="start">
          Start
        </button>
        <button className="btn stop" onClick={handleBtnStop} value="stop">
          Stop
        </button>
        <button className="btn reset" onClick={handleResetBtn} value="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountDownPage;
