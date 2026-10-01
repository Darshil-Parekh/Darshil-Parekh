import React from 'react'

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive interfaces, reusable components, interactive UI elements, DOM-based functionality, forms, filtering systems, and modern layouts.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Developing backend functionality including authentication, CRUD operations, admin panels, email integration, API handling, and application logic.',
    technologies: ['Python', 'Django', 'Node.js', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Database & Data',
    description: 'Working with structured data, database models, relationships, queries, and dynamic data-driven applications.',
    technologies: ['MySQL', 'JSON', 'POSTGRE SQL','MongoDB'],
  },
  {
    number: '04',
    title: 'Tools & Deployment',
    description: 'Using Git-based workflows, feature branches, version control, API testing, project deployment, and collaborative development practices.',
    technologies: ['Git', 'GitHub', 'VS Code', 'GitHub Pages', 'Vercel', 'Postman'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <header className="skills-heading">
        <div>
          <p className="skills-eyebrow">02 / What I work with</p>
          <h2 id="skills-title">Skills &amp; <span>Technologies</span></h2>
        </div>
        <p className="skills-intro">
          I build responsive and interactive web applications using modern frontend and backend technologies. I enjoy turning ideas into functional digital experiences, working with APIs, authentication, databases, and dynamic user interfaces.
        </p>
      </header>
      <div className="skills-list">
        {skillGroups.map((group) => (
          <article className="skill-row" key={group.number}>
            <div className="skill-description">
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <ul className="technology-list" aria-label={`${group.title} technologies`}>
              {group.technologies.map((technology, index) => (
                <li key={technology} style={{ animationDelay: `${index * 180}ms` }}>
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills