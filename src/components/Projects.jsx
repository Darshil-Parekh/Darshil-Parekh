import React from 'react'

const projects = [
	{
		number: '01',
		name: 'To-Do Tasks',
		type: 'Productivity app',
		description: 'A focused task manager for capturing work, setting priorities, and tracking pending or completed tasks at a glance.',
		technologies: ['JavaScript', 'Task filters', 'Priority tracking'],
		url: 'https://darshil-parekh.github.io/todo-tasks/',
	},
	{
		number: '02',
		name: 'WeatherNow',
		type: 'Weather dashboard',
		description: 'Search a city for current conditions and a five-day forecast, with location lookup and a Celsius/Fahrenheit switch.',
		technologies: ['JavaScript', 'Weather API', 'Geolocation'],
		url: 'https://darshil-parekh.github.io/Weather-Update-System-/',
	},
	{
		number: '03',
		name: 'Medinova',
		type: 'Healthcare website',
		description: 'A patient-focused healthcare experience presenting medical services, care teams, packages, and appointment options.',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		url: 'https://darshil-parekh.github.io/Medinova/',
		image: 'https://darshil-parekh.github.io/Medinova/images/about.jpg',
	},
	{
		number: '04',
		name: 'Parth Travels',
		type: 'Travel & transport',
		description: 'A fleet and booking website for bus and tempo traveller hire, helping groups compare vehicles and request a quote.',
		technologies: ['HTML', 'CSS', 'TypeScript'],
		url: 'https://darshil-parekh.github.io/Parth-Travels/',
		image: 'https://darshil-parekh.github.io/Parth-Travels/images/9954.jpeg',
		imageFit: 'contain',
	},
	{
		number: '05',
		name: 'Perfect Hair & Beauty Salon',
		type: 'Hair & beauty salon',
		description: 'A responsive salon website with personalized services and galleries, plus appointment requests sent directly through WhatsApp.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
		url: 'https://perfect-hair-beauty-salon.vercel.app/',
		image: '/perfect-hair-beauty-salon-hero.png',
	},
	{
		number: '06',
		name: 'DARVÉ',
		type: 'E-commerce storefront',
		description: 'A refined storefront for watches and fragrances, with curated collections, product details, and a shopping cart.',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		url: 'https://darshil-parekh.github.io/E-Commerce/',
		image: 'https://darshil-parekh.github.io/E-Commerce/Images/chainwatch.png',
		imageFit: 'contain',
	},
]

function Projects() {
	return (
		<section id="projects" className="projects-section" aria-labelledby="projects-title">
			<header className="projects-heading">
				<div>
					<p className="projects-eyebrow">03 / Selected work</p>
					<h2 id="projects-title">Projects in <span>practice</span></h2>
				</div>
				<p className="projects-intro">
					A selection of useful, responsive experiences built around real user needs, from everyday tools to service and commerce websites.
				</p>
			</header>
			<div className="projects-grid">
				{projects.map((project) => (
					<article className="project-card" key={project.number}>
						<a
							className="project-preview"
							href={project.url}
							target="_blank"
							rel="noreferrer"
							aria-label={`Open ${project.name} project`}
						>
							<img
								className={project.imageFit === 'contain' ? 'project-preview-image project-preview-image--contain' : 'project-preview-image'}
								src={project.image ?? `https://image.thum.io/get/width/1200/crop/720/noanimate/${project.url}`}
								alt={`${project.name} website preview`}
								loading="lazy"
							/>
							<span className="preview-open" aria-hidden="true">↗</span>
						</a>
						<div className="project-info">
							<div className="project-meta">
								<span>{project.number} / 06</span>
								<span>{project.type}</span>
							</div>
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							<ul className="project-tech" aria-label={`${project.name} technologies`}>
								{project.technologies.map((technology) => (
									<li key={technology}>{technology}</li>
								))}
							</ul>
							<div className="project-actions">
								<a className="project-link" href={project.url} target="_blank" rel="noreferrer">
									Visit project <span aria-hidden="true">↗</span>
								</a>
								{project.repositoryUrl && (
									<a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
										View source <span aria-hidden="true">↗</span>
									</a>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Projects
