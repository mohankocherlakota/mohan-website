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
          An <strong>AI Engineer</strong> specialising in <strong>multi-agent systems</strong>, <strong>RAG pipelines</strong>, and production-grade <strong>LLM architectures</strong> — with a Master's in Applied Machine Intelligence from <strong>Northeastern University</strong> (GPA 3.8). Currently at <strong>Altimetrik</strong>, I design and deliver agentic AI systems that operate at enterprise scale across the full SDLC lifecycle.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-num">4+</span>
            <span className="about-stat-label">Years Experience</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">300+</span>
            <span className="about-stat-label">Engineers Trained</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">9+</span>
            <span className="about-stat-label">Projects Shipped</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">3.8</span>
            <span className="about-stat-label">GPA</span>
          </div>
        </div>

        <ul className="about-highlights">
          <li>
            <strong>Agentic AI at Scale:</strong> Built multi-agent data pipelines (OpenAI, Claude, open-source), MCP-based autonomous SDLC deployment to GitHub, and version-controlled RAG systems with vector databases — all with human-in-the-loop governance.
          </li>
          <li>
            <strong>AI Enablement:</strong> Trained 300+ engineers on GenAI fundamentals through advanced multi-agent architectures, evaluation frameworks, and observability. Delivered enterprise Copilot L&D programs covering prompt engineering, custom MCP servers, and governance.
          </li>
          <li>
            <strong>LLM Research & Orchestration:</strong> Built LLM-based research orchestration at VesterAI and ML-driven risk analytics at Traxidty — end-to-end from data ingestion to production.
          </li>
          <li>
            <strong>Recognised Builder:</strong> OpenAI Global Codex Hackathon participant; semi-finalist at MIT Energy HackAIthon and MIT AI in Education Hackathon. Certified by OpenAI, AWS, and Hugging Face.
          </li>
        </ul>

        <blockquote className="about-quote">
          "The most impactful AI isn't the most complex — it's the one that makes the right decision at the right moment, with humans always in control."
        </blockquote>

        <p>
          Outside work I'm exploring the frontier of agentic AI, contributing to open-source, and occasionally buying too much coffee.
        </p>
        <p className="about-connect">
          <strong>Let's build something intelligent together.</strong>
        </p>
      </div>
    </section>
  );
}

export default About;
