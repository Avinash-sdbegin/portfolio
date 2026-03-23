import React from 'react';

const Skills = () => {
  const topSkills = [
    { label: 'React', logo: '⚛' },
    { label: 'Node.js', logo: '⬢' },
    { label: 'MongoDB', logo: '🍃' }
  ];

  const primarySkills = new Set(['React.js', 'Node.js', 'MongoDB']);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO']
    },
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Concepts',
      skills: ['Authentication (JWT)', 'REST API Design', 'MVC Architecture']
    },
    {
      title: 'AI / Data Science',
      skills: ['NumPy', 'Pandas', 'Matplotlib (Data Analysis & Visualization)']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-top-stack">
          {topSkills.map((skill) => (
            <span key={skill.label} className="top-skill-chip">
              <span className="top-skill-logo" aria-hidden="true">{skill.logo}</span>
              <span>⭐ {skill.label}</span>
            </span>
          ))}
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className={`skill-item ${primarySkills.has(skill) ? 'skill-item-main' : ''}`}
                  >
                    <span className="skill-bullet"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
