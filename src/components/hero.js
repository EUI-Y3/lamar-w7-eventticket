import React from 'react';
import "./hero.css";
import logo from "../assets/logo.png";
import heroBg from "../assets/herobackground.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
    
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Events</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="lang-btn">EN</button>
      </nav>

      <div className="hero-content">
        <p className="badge">✨ New events added daily</p>

        <h1>
          Discover <span>Amazing</span> Events
        </h1>

        <p className="subtext">
          Join thousands of students and young professionals at concerts,
          workshops, talks, and community gatherings
        </p>

        <button className="cta-btn">Explore Events →</button>

        <div className="stats">
          <div>
            <h3>50K+</h3>
            <p>Happy Users</p>
          </div>
          <div>
            <h3>1000+</h3>
            <p>Events Hosted</p>
          </div>
          <div>
            <h3>4.9</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;