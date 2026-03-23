import React, { useState } from 'react';

const Contact = () => {
  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.13 2.13 0 1 0 5.3 7.25 2.13 2.13 0 0 0 5.25 3Zm15.19 9.9c0-3.18-1.7-4.66-3.98-4.66-1.84 0-2.66 1.02-3.12 1.73V8.5H9.96V20h3.38v-5.7c0-1.5.28-2.96 2.13-2.96 1.82 0 1.85 1.7 1.85 3.06V20h3.38l-.01-7.1Z"
      />
    </svg>
  );

  const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.82c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
      />
    </svg>
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const apiBaseUrl = "https://portfolio-yfur.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: 'pending', message: 'Sending your message...' });

    try {
      const res = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Failed to send message. Please try again.');
      }

      setStatus({ type: 'success', message: 'Message sent successfully. I will contact you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong while sending your message.'
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out!
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-label">📧 Email</span>
                <span>
                  <a href="mailto:avinashkumarmgr24@gmail.com">avinashkumarmgr24@gmail.com</a>
                </span>
              </li>
              <li>
                <span className="contact-label">🌐 LinkedIn</span>
                <span>
                  <a href="https://www.linkedin.com/in/avinash-kumar-32020232a/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/avinash-kumar-32020232a
                  </a>
                </span>
              </li>
              <li>
                <span className="contact-label">💻 GitHub</span>
                <span>
                  <a href="https://github.com/Avinash-sdbegin" target="_blank" rel="noopener noreferrer">
                    github.com/Avinash-sdbegin
                  </a>
                </span>
              </li>
            </ul>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/avinash-kumar-32020232a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a href="https://github.com/Avinash-sdbegin" target="_blank" rel="noopener noreferrer" className="social-link">
                <GitHubIcon />
              </a>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}Avinash_Kumar_Resume_pdf.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download="Avinash_Kumar_Resume.pdf"
              className="resume-cta"
              aria-label="Download Resume"
            >
              <span>📄</span>
              <span>Download Resume</span>
            </a>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  placeholder="Enter your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  rows="4"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn-submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
