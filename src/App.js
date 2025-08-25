import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import LabPage from './components/LabPage';

function App() {
  const [page, setPage] = useState("login");
  const [remainingTime, setRemainingTime] = useState(600); // 10 mins
  const [exitMessage, setExitMessage] = useState("");

  const handleLogin = () => setPage("lab");
  const handleExit = (timeOrMessage) => {
    if (typeof timeOrMessage === "string") {
      setExitMessage(timeOrMessage);
      setPage("login");
      setRemainingTime(0);
    } else {
      setRemainingTime(timeOrMessage);
      setPage("login");
    }
  }

  return (
    <>
      {page === "login" && <Login onLogin={handleLogin} />}
      {page === "lab" && <LabPage remainingTime={remainingTime} onExit={handleExit} />}
      {exitMessage && <p>{exitMessage}</p>}
    </>
  );
}

export default App;