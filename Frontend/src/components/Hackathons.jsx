import React from 'react';

const Hackathons = () => {
  const items = [
    {
      title: 'Smart India Hackathon (SIH 2025)',
      summary: 'Selected in the institute-level round representing IIIT Ranchi.',
      highlights: [
        'Collaborated in a team to design a real-world problem solution',
        'Contributed to idea development and system design'
      ],
      badges: ['🏆 Selected', '🚀 Hackathon', '📅 Sep 2025']
    },
    {
      title: 'QUASAR X AI Hackathon — IIIT Ranchi',
      summary: 'Selected among top teams in the internal round.',
      highlights: [
        'Built an AI-based solution for real-world use cases',
        'Worked on problem-solving, ideation, and implementation'
      ],
      badges: ['🏆 Selected', '🚀 Hackathon', '🤖 AI', '📅 Jan 2026']
    }
  ];

  return (
    <section id="hackathons" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Hackathons & Competitions</h2>
        <div
          className="projects-grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {items.map((item, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{item.title}</h3>
                <p className="project-summary">{item.summary}</p>
                <ul className="project-points">
                  {item.highlights.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="project-metrics">
                  {item.badges.map((badge, badgeIndex) => (
                    <span key={badgeIndex} className="project-metric-tag">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
