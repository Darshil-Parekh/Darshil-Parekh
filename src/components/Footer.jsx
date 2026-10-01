import React from 'react'

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-main">
          <a className="footer-brand" href="#home">
            <span>Darshil Parekh</span>
            <span className="footer-tagline">Building thoughtful digital experiences.</span>
          </a>

          <nav className="footer-links" aria-label="Footer quick links">
            <h2>Quick links</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h2>Get in touch</h2>
            <a href="mailto:darshilparekh956@gmail.com">darshilparekh956@gmail.com</a>
            <a href="tel:+917201094379">+91 72010 94379</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Darshil Parekh</span>
          <span>Designed &amp; developed by <strong>Darshil Parekh</strong></span>
          <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer