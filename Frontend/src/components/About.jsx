import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-facts">
            <h3>Education</h3>
            <ul>
              <li className="edu-item">
                <span className="edu-icon">🎓</span>
                <span className="edu-content">
                  <strong>Indian Institute of Information Technology, Ranchi</strong>
                  <small>Bachelor of Technology - Computer Science and Engineering (D.S.A.I)</small>
                  <span className="edu-year">2024-2028</span>
                </span>
              </li>
              <li className="edu-item">
                <span className="edu-icon">🏫</span>
                <span className="edu-content">
                  <strong>U.P VERMA INTER COLLEGE, MUNGER</strong>
                  <small>Bihar Board of Secondary Education, Bihar</small>
                  <span className="edu-year">2023</span>
                </span>
              </li>
              <li className="edu-item">
                <span className="edu-icon">🌍</span>
                <span className="edu-content">
                  <strong>Location</strong>
                  <small>India</small>
                </span>
              </li>
            </ul>
          </div>
          <div className="about-text">
            <p>
              I am a B.Tech student in Computer Science and Engineering (Data Science &amp; AI) at IIIT Ranchi.
            </p>
            <p>
              I specialize in <strong>full-stack development (MERN stack)</strong> and enjoy solving problems through <strong>competitive programming</strong>.
            </p>
            <p>
              I build <strong>scalable, reliable, and user-friendly web applications</strong> that solve real-world problems.
            </p>
            <p>
              Currently, I am focused on improving my <strong>backend development skills</strong> and becoming a strong software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
