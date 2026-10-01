import React from "react";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span /> Available for opportunities
        </p>
        <h1>
          Hello, I’m <span>Darshil Parekh.</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">
          I build modern, responsive web experiences with React and JavaScript.
          Thoughtful details, clean code, and a little bit of personality in
          every pixel.
        </p>
        <div className="hero-buttons">
          <a className="button-primary" href="#projects">
            View my work <span aria-hidden="true">↗</span>
          </a>
          <a className="button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
        <p className="hero-location">
          <span aria-hidden="true">⌖</span> Based in India · Open to remote
        </p>
      </div>
    </section>
  );
}

export default Hero;
