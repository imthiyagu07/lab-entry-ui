import { useState } from "react";
import "../styles/Login.css";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "lab@123") {
      setError("");
      setAnimate(true); // trigger door animation
      setTimeout(() => {
        onLogin(); // navigate after animation finishes
      }, 1500); // same time as CSS animation
    } else {
      setError("Incorrect password!");
    }
  };

  return (
    <main className="login-container">
      <section className={`door left-door ${animate ? "open-left" : ""}`}>
        <h1 className="left-heading">JAVA</h1>
        <p>This course is provisioned by Zicops Labs</p>
        <ul className="unorder-list">
          <li>Labs</li>
          <li>Excercises</li>
          <li>Do it Yourself</li>
        </ul>
        <div>
          <h2>EXCERCISE</h2>
          <p><span className="number">9</span> completed out of 84.</p>
        </div>
        <div>
          <h2>PROJECTS</h2>
          <p><span className="number">2</span> completed out of 84.</p>
        </div>
        <div>
          <h2>TIME SPENT</h2>
          <p><span className="number">5</span> completed out of 84.</p>
        </div>
      </section>
      <section className="login-form-container">
        <form onSubmit={handleSubmit} className={animate ? "fade-rotate" : ""}>
          <label htmlFor="password">Enter Your Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Enter Lab</button>
          {error && <p className="error">{error}</p>}
        </form>
      </section>
      <section className={`door right-door ${animate ? "open-right" : ""}`}>
        <h1 className="right-heading">You Have 10 mintues</h1>
      </section>
    </main>
  );
};

export default Login;