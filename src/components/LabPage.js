import { useState, useEffect } from "react";
import '../styles/LabPage.css'

const LabPage = ({ remainingTime, onExit }) => {
  const [time, setTime] = useState(remainingTime);

  useEffect(() => {
    if (time <= 0) {
      onExit("Time's up! You cannot log in again.");
      return;
    }
    const timer = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time, onExit]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  }

  return (
    <main className="lab-container">
      <h1 className="lab-heading">Welcome to the Lab</h1>
      <div className="lab-page">
        <div className="container-1">
          <select className="lab-select">
            <option value="Programming">Programming</option>
            <option value="Framework">Framework</option>
            <option value="Library">Library</option>
          </select>
          <p className="lab-time">Remaining Time: <span className="time">{formatTime(time)}</span></p>
          <button onClick={() => onExit(time)} className="exit-btn">Exit Lab</button>
        </div>
        <div className="container-2">
          <h1>HTML</h1>
          <h1>TAILWIND CSS</h1>
          <h1>REACT JS</h1>
          <h1>NODE JS</h1>
          <h1>PYTHON</h1>
          <h1>JAVA</h1>
          <h1>SQL</h1>
        </div>
      </div>
    </main>
  );
};

export default LabPage;
