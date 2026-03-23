import React, { useEffect, useState } from 'react';

// Must match the actual DOM order of sections on the page.
const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.33;
      let currentSection = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        const rect = section.getBoundingClientRect();
        if (rect.top <= marker) {
          currentSection = id;
        }
      }

      const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (isAtPageBottom) {
        currentSection = SECTION_IDS[SECTION_IDS.length - 1];
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection
      );
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <div className="navbar-logo">Avinash Kumar</div> */}
        <div className="navbar-menu">
          {SECTION_IDS.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`navbar-link ${activeSection === section ? 'active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
