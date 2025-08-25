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
      <section className={`door left-door ${animate ? "open-left" : ""}`}></section>
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
      <section className={`door right-door ${animate ? "open-right" : ""}`}></section>
    </main>
  );
};

export default Login;