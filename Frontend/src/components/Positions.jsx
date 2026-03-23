import React from 'react';

const Positions = () => {
  const items = [
    {
      role: 'Member — SAAZ (Music Club, IIIT Ranchi)',
      summary: 'Contributed as an active member in club operations and event management.',
      highlights: [
        {
          icon: '🎵',
          keyword: 'Organized',
          text: 'institute-level cultural events and activity plans'
        },
        {
          icon: '🤝',
          keyword: 'Coordinated',
          text: 'with team members for event execution and logistics'
        },
        {
          icon: '📣',
          keyword: 'Boosted',
          text: 'student participation through active club engagement'
        }
      ],
      metrics: ['Organized 3+ events']
    },
    {
      role: 'Mentor — Reliance Foundation Undergraduate Scholarship',
      summary: 'Mentoring first-year scholars through academic and peer support.',
      highlights: [
        {
          icon: '🧭',
          keyword: 'Mentored',
          text: 'first-year students with academic guidance and peer support'
        },
        {
          icon: '📚',
          keyword: 'Shared',
          text: 'learning strategies and experiences to ease college transition'
        },
        {
          icon: '💡',
          keyword: 'Supported',
          text: 'scholars in improving performance and confidence'
        }
      ],
      metrics: ['Mentored 5+ students']
    }
  ];

  return (
    <section id="positions" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Positions of Responsibility</h2>
        <div
          className="projects-grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {items.map((item, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{item.role}</h3>
                <p className="project-summary">{item.summary}</p>
                <ul className="project-points">
                  {item.highlights.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <span className="point-icon" aria-hidden="true">{point.icon}</span>
                      <strong>{point.keyword}</strong> {point.text}
                    </li>
                  ))}
                </ul>
                <div className="project-metrics">
                  {item.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="project-metric-tag">{metric}</span>
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

export default Positions;
