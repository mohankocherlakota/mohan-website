import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaMedium, FaCoffee } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-groups">
        {/* Email Row */}
        <div className="contact-row">
          <a href="mailto:mohankvsnsk@gmail.com" className="contact-item" title="Email">
            <FaEnvelope className="contact-icon" />
            mohankvsnsk@gmail.com
          </a>
        </div>
        {/* Social Links Row */}
        <div className="contact-row">
          <a
            href="https://linkedin.com/in/mohan-kocherlakota-90b512125/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            title="LinkedIn"
          >
            <FaLinkedin className="contact-icon" />
            LinkedIn
          </a>
          <a
            href="https://github.com/mohankocherlakota"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            title="GitHub"
          >
            <FaGithub className="contact-icon" />
            GitHub
          </a>
          <a
            href="https://medium.com/@mohankocherlakota"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            title="Medium"
          >
            <FaMedium className="contact-icon" />
            Medium
          </a>
        </div>
        {/* Resume and Buy Coffee Row */}
        <div className="contact-row">
          <a
            href="YourResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            title="Download Resume"
          >
            <FaFilePdf className="contact-icon" />
            Download my resume (PDF)
          </a>
          <a
            href="https://www.buymeacoffee.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            title="Buy Me a Coffee"
          >
            <FaCoffee className="contact-icon" />
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
