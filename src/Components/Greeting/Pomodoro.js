import React, { useState, useEffect } from 'react';
import './Pomodoro.css';
function PomodoroTimer({ initialTime = 25 * 60 }) { // Default to 25 minutes if no initial time is provided
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(intervalId);
        setIsRunning(false);
        alert("Time's up!");
      }
    }, 1000);

    setTimerId(intervalId);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  return (
    <div className="timer-container">
      <div id="pomodoro-timer-display" className="timer-display">{`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}</div>
      <button id="pomodoro-start-btn" className="start-btn" onClick={startTimer}>Start</button>
    </div>
  );
}

export default PomodoroTimer;
