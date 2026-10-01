import React from 'react'
import logoImage from '../Images/logo.png'

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="logo" href="#home" aria-label="Darshil Parekh, home">
        <img className="logo-image" src={logoImage} alt="" />
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