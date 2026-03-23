import React from 'react';

const Achievements = () => {
  const LeetCodeIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M15.8 3.7a1 1 0 0 0-1.4 0L7.2 11a1.8 1.8 0 0 0 0 2.5l7.2 7.2a1 1 0 1 0 1.4-1.4L8.9 12l6.9-6.9a1 1 0 0 0 0-1.4Zm-3.1 5.8a1 1 0 0 0 0 2h8.3a1 1 0 1 0 0-2h-8.3Z"
      />
    </svg>
  );

  const CodeChefIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2 4.5 6.2v11.6L12 22l7.5-4.2V6.2L12 2Zm0 2.2 5.5 3.1v8.5L12 18.9l-5.5-3.1V7.3L12 4.2Zm-2.8 4.6v6.4h1.9v-2.1h1.8c1.7 0 2.8-.9 2.8-2.2s-1.1-2.1-2.8-2.1H9.2Zm1.9 1.4h1.6c.7 0 1.2.3 1.2.8 0 .6-.5.9-1.2.9h-1.6v-1.7Z"
      />
    </svg>
  );

  const CodeforcesIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4 17h4v3H4v-3Zm6-6h4v9h-4v-9Zm6-7h4v16h-4V4Z" />
    </svg>
  );

  const items = [
    {
      title: 'Reliance Foundation Undergraduate Scholar (2024–25)',
      summary: 'Recognized as a national-level merit scholar for strong academic performance.',
      icon: '🏆 Scholarship',
      highlights: [
        'Selected among undergraduate students nationwide',
        'Awarded ₹2,00,000 merit-based scholarship',
        'Recognized for academic excellence and leadership potential'
      ],
      metrics: ['₹2,00,000', 'National Selection']
    },
    {
      title: 'AlgoUniversity Technology Fellowship (ATF 2025)',
      summary: 'Strong performance in a large-scale national technology fellowship program.',
      icon: '📊 Rank',
      highlights: [
        'Qualified Stage 1 among 250,000+ participants',
        'Ranked in top 8% nationwide'
      ],
      metrics: ['Top 8%', '250,000+ Participants']
    },
    {
      title: 'Competitive Programming & Problem Solving',
      summary: 'Consistent problem-solving practice across major coding platforms.',
      icon: '💻 Coding',
      highlights: [
        'Solved 500+ problems across platforms',
        'LeetCode rating: 1588 | CodeChef rating: 1519',
        'Solved 350+ questions on Codeforces',
        'Strong understanding of data structures and algorithms'
      ],
      metrics: ['500+ Problems', 'Codeforces 350+', 'LeetCode 1588', 'CodeChef 1519'],
      profiles: [
        { label: 'LeetCode', href: 'https://leetcode.com/u/q23456/', icon: <LeetCodeIcon /> },
        { label: 'CodeChef', href: 'https://www.codechef.com/users/merry_joy_97', icon: <CodeChefIcon /> },
        { label: 'Codeforces', href: 'https://codeforces.com/profile/avinashkumarmgr24', icon: <CodeforcesIcon /> }
      ]
    }
  ];

  return (
    <section id="achievements" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Achievements</h2>
        <div
          className="projects-grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {items.map((item, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>
                  {item.title}
                  <span className="project-type">{item.icon}</span>
                </h3>
                <p className="project-summary">{item.summary}</p>
                <ul className="project-points">
                  {item.highlights.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="project-metrics">
                  {item.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="project-metric-tag">{metric}</span>
                  ))}
                </div>
                {item.profiles ? (
                  <div className="project-links">
                    {item.profiles.map((profile) => (
                      <a
                        key={profile.label}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {profile.icon}
                        {profile.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
