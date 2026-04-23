import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <p className="about-greeting">
          <span role="img" aria-label="wave">👋</span> Hello, I'm Mohan —
        </p>
        <p>
          An <strong>AI Developer & Machine Learning Engineer</strong> with a Master's in Applied Machine Intelligence from <strong>Northeastern University</strong>. I specialise in building intelligent systems that sit at the intersection of <strong>Large Language Models</strong>, <strong>multi-agent orchestration</strong>, and <strong>financial analytics</strong> — turning research-grade AI into production-ready tools.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-num">3+</span>
            <span className="about-stat-label">Years Experience</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">4</span>
            <span className="about-stat-label">AI Roles</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">7+</span>
            <span className="about-stat-label">Projects Shipped</span>
          </div>
        </div>

        <ul className="about-highlights">
          <li>
            <strong>Multi-Agent & LLM Systems:</strong> Built orchestration platforms integrating LLMs with real-world APIs (PubMed, Wiley) to automate scientific literature workflows and industrial sensor data pipelines.
          </li>
          <li>
            <strong>Predictive & Risk ML:</strong> Engineered ML dashboards improving decision-making accuracy by 40%, with end-to-end pipelines covering data ingestion, model training, and deployment.
          </li>
          <li>
            <strong>Full-Stack AI:</strong> Comfortable across the stack — from React frontends and Flask/FastAPI services to Docker, Azure, and CI/CD pipelines.
          </li>
          <li>
            <strong>Continuous Builder:</strong> Always exploring the frontier — RAG architectures, vision models, generative AI for finance, and agentic workflows.
          </li>
        </ul>

        <blockquote className="about-quote">
          "The most impactful AI isn't the most complex — it's the one that makes the right decision at the right moment."
        </blockquote>

        <p>
          Outside of work I'm exploring the latest in LLM research, contributing to open-source projects, and occasionally buying too much coffee.
        </p>
        <p className="about-connect">
          <strong>Let's build something intelligent together.</strong>
        </p>
      </div>
    </section>
  );
}

export default About;
