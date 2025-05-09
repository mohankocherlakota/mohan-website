import React from 'react';

function About() {
  return (
<section id="about" className="about-section">
  <h2 className="about-title">About Me</h2>
  <div className="about-content">
    <p className="about-greeting">
      <span role="img" aria-label="wave">👋</span> Hello Enthusiasts,
    </p>
    <p>
      I’m a <strong>Machine Learning Engineer</strong> with a Master’s degree in Applied Machine Intelligence from <strong>Northeastern University</strong>, specializing in finance. My journey bridges the worlds of <strong>data science</strong>, <strong>artificial intelligence</strong>, and <strong>financial analytics</strong>, empowering organizations to make smarter, data-driven decisions.
    </p>
    <ul className="about-highlights">
      <li>
        <strong>Hands-on AI Model Development:</strong> Experienced in building robust machine learning models to solve complex problems-optimizing trading strategies, detecting fraud, and automating risk assessment.
      </li>
      <li>
        <strong>Technical Skills:</strong> Proficient in Python, deep learning frameworks (TensorFlow, PyTorch), and cloud-based deployment.
      </li>
      <li>
        <strong>Collaboration:</strong> Skilled at translating business needs into technical solutions and communicating insights to both technical and non-technical stakeholders.
      </li>
      <li>
        <strong>Continuous Learner:</strong> Always eager to explore and apply the latest advancements in machine learning.
      </li>
    </ul>
    <blockquote className="about-quote">
      “The future of finance is intelligent, transparent, and accessible-and I’m excited to be part of that transformation.”
    </blockquote>
    <p>
      When I’m not coding or exploring new datasets, I’m likely reading about fintech innovations, contributing to open-source projects, or enjoying a good cup of coffee.
    </p>
    <p className="about-connect">
      <strong>Let’s connect</strong> and build the next generation of intelligent financial solutions together.
    </p>
  </div>
</section>

  );
}

export default About;
