import React from 'react'

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="logo" href="#home" aria-label="Darshil Parekh, home">
        <img className="logo-image" src="https://darshil-parekh.github.io/MY_PORTFOLIO/images/logo.png" alt="" />
        <span className="logo-name">Darshil Parekh</span>
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  )
}

export default Navbar