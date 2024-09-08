import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Minutes calculation
  const minutes = Math.floor(time / 60);

  // Seconds calculation
  const seconds = time % 60;

  const handleStartAndStopTimer = () => {
    setIsRunning(!isRunning);
  };

  const Reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>
        Time: {minutes}:{seconds.toString().padStart(2, "0")}
      </p>

      <button onClick={handleStartAndStopTimer}>
        {isRunning ? `Stop` : `Start`}
      </button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
