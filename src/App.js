import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import logo from "./images/logo.svg";
import dashboardImg from "./images/illustration-dashboard.png";

const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function App() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !emailRegx.test(email)) {
      console.log("wrong email");
      setIsError(true);
    } else {
      setEmail("");
      setIsError(false);
    }
  };

  return (
    <>
      <main className="container">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="header">
          <span className="light">We are launching</span> soon!
        </h1>
        <p className="subheading">Subscribe and get notified</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            className={`${isError && "error-input"}`}
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
          />
          {isError && (
            <p className="error-message">
              Please provide a valid email address
            </p>
          )}
          <button htmlFor="email" type="submit">
            Notify Me
          </button>
        </form>
        <img className="dashboard-image" src={dashboardImg} alt="dashboard" />
        <section className="social">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </section>
        <section className="copyright">
          &copy; Copyright Ping. All rights reserved.
        </section>
      </main>
      <footer>
        <p className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/codemonchallenger">Codemon Challenger</a>.
        </p>
      </footer>
    </>
  );
}
