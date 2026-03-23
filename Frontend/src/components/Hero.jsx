import React from 'react';
import profileImg from '../assets/Avinash_Profeesional_photo.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-layout">
          <div className="hero-image-wrap">
            <img
            src={profileImg}
            alt="Profile"
            className="hero-image"
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              Hello, I'm <span className="hero-name">Avinash Kumar</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer | MERN Stack | Problem Solver
            </p>
            <p className="hero-description">
              I build fast, scalable, and user-friendly web applications using modern technologies.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Contact Me
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                View Projects
              </button>
              <a
                href={`${import.meta.env.BASE_URL}Avinash_Kumar_Resume_pdf.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download="Avinash_Kumar_Resume.pdf"
                className="btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
