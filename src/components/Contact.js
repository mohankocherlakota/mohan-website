import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaMedium, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Always open to new opportunities, collaborations, and conversations.
      </p>

      {/* Featured LinkedIn Card */}
      <a
        href="https://linkedin.com/in/mohan-kocherlakota-90b512125/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-featured-card"
      >
        <div className="linkedin-card-glow" />
        <div className="linkedin-card-left">
          <div className="linkedin-logo-wrapper">
            <FaLinkedin className="linkedin-logo-icon" />
          </div>
          <div className="linkedin-card-info">
            <div className="linkedin-card-name">Mohan Kocherlakota</div>
            <div className="linkedin-card-title">Machine Learning Engineer · Data Enthusiast</div>
            <div className="linkedin-card-url">linkedin.com/in/mohan-kocherlakota-90b512125</div>
          </div>
        </div>
        <div className="linkedin-connect-btn">
          Connect <FaExternalLinkAlt className="btn-ext-icon" />
        </div>
      </a>

      {/* Other Contact Methods */}
      <div className="contact-grid">
        <a href="mailto:mohankvsnsk@gmail.com" className="contact-card" title="Email">
          <div className="contact-card-icon-wrap email-wrap">
            <FaEnvelope className="contact-card-icon" />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">mohankvsnsk@gmail.com</span>
          </div>
        </a>

        <a
          href="https://github.com/mohankocherlakota"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          title="GitHub"
        >
          <div className="contact-card-icon-wrap github-wrap">
            <FaGithub className="contact-card-icon" />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">mohankocherlakota</span>
          </div>
        </a>

        <a
          href="https://medium.com/@mohankocherlakota"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          title="Medium"
        >
          <div className="contact-card-icon-wrap medium-wrap">
            <FaMedium className="contact-card-icon" />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">Medium</span>
            <span className="contact-card-value">@mohankocherlakota</span>
          </div>
        </a>

        <a
          href="YourResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          title="Download Resume"
        >
          <div className="contact-card-icon-wrap pdf-wrap">
            <FaFilePdf className="contact-card-icon" />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">Resume</span>
            <span className="contact-card-value">Download PDF</span>
          </div>
        </a>

        <a
          href="https://www.buymeacoffee.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          title="Buy Me a Coffee"
        >
          <div className="contact-card-icon-wrap coffee-wrap">
            <FaCoffee className="contact-card-icon" />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">Support</span>
            <span className="contact-card-value">Buy Me a Coffee</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;
