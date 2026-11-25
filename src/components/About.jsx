import React from 'react'

function About() {
  return (
    <section id='about' className='about-section'>
      <div className="about-content">
        <div className="about-photo">
          <img src="https://darshil-parekh.github.io/MY_PORTFOLIO/images/myphoto.png" alt="Darshil Parekh" />
        </div>
        <div className="about-copy">
          <h2>About me</h2>
          <p>💻 I’m a Full Stack Developer and Information Technology student currently pursuing a B.E. in Information Technology at Swaminarayan University, with a Diploma in Information Technology from R.C. Technical Institute (GTU), Ahmedabad.</p>
          <p>💼 I worked as a Web Developer at His Gro, where I gained hands-on experience developing web applications using JavaScript, HTML, CSS, Bootstrap, and Django. I worked on projects involving dynamic data handling, API integration, filtering, responsive interfaces, admin panels, e-commerce functionality, lead management, and business operations.</p>
          <p>🚀 I’m passionate about building modern, responsive, interactive, and user-friendly web applications and turning real-world requirements into practical digital solutions.</p>
          <button>Download Resume</button>
        </div>
      </div>
    </section>
  )
}

export default About