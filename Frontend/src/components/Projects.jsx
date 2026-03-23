import React from 'react';

const Projects = () => {
  const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.82c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
      />
    </svg>
  );

  const ExternalIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14 3a1 1 0 0 0 0 2h3.59l-8.3 8.29a1 1 0 1 0 1.42 1.42L19 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6ZM5 5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H5V7h5a1 1 0 1 0 0-2H5Z"
      />
    </svg>
  );

  const projects = [
    {
      title: 'LedgerVault',
      type: 'Ledger-Based Banking Backend · Feb 2026',
      summary: 'Developed a secure backend system inspired by real-world banking architecture.',
      highlights: [
        'Implemented immutable CREDIT/DEBIT ledger architecture for accurate balance computation',
        'Developed REST APIs for account management, transactions, and balance computation; tested using Postman',
        'Designed an idempotent transaction system using MongoDB sessions to prevent duplicate transfers'
      ],
      metrics: ['Immutable ledger (CREDIT/DEBIT)', 'Idempotent transfers with MongoDB sessions'],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer', 'Postman'],
      github: 'https://github.com/Avinash-sdbegin/ledger-vault',
      hideDemo: true
    },
    {
      title: 'Chatify',
      type: 'Real-Time Chat Application · Jan 2026',
      summary: 'Built a real-time chat platform with authentication and online user tracking.',
      highlights: [
        'Implemented JWT auth, private chats, and online presence',
        'Handled 25+ concurrent users with Socket.IO',
        'Integrated Cloudinary for media sharing workflows'
      ],
      metrics: ['Handled 25+ concurrent users', 'Real-time bi-directional messaging'],
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO', 'Tailwind CSS', 'Cloudinary'],
      github: 'https://github.com/Avinash-sdbegin/chatify',
      demo: 'https://chatify-plum.vercel.app'
    },
    {
      title: 'Linkify',
      type: 'URL Shortener Web App',
      summary: 'Built a full-stack URL shortener with authentication and analytics.',
      highlights: [
        'Implemented secure routing, click tracking, and dashboard',
        'Achieved response time under 120ms for URL redirection',
        'Used MVC architecture for cleaner scalability'
      ],
      metrics: ['Response time < 120ms', 'Secure auth + protected routes'],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JWT', 'CSS3'],
      github: 'https://github.com/Avinash-sdbegin/Linkify',
      demo: 'https://linkify-8r5h.onrender.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>
                  {project.title}
                  <span className="project-type">{project.type}</span>
                </h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-points">
                  {project.highlights.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="project-metrics">
                  {project.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="project-metric-tag">{metric}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {!project.hideDemo && (
                    <a
                      href={project.demo || '#'}
                      target={project.demo ? '_blank' : undefined}
                      rel={project.demo ? 'noopener noreferrer' : undefined}
                      className={`project-link ${project.demo ? '' : 'is-disabled'}`}
                      onClick={(event) => {
                        if (!project.demo) {
                          event.preventDefault();
                        }
                      }}
                    >
                      <ExternalIcon />
                      {project.demo ? 'Live Demo' : 'Live Demo Soon'}
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GitHubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
