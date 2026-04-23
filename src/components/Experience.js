import React from 'react';

const experiences = [
  {
    role: 'AI Developer Intern',
    company: 'VesterAI',
    date: 'Jan 2025 – Mar 2025',
    badge: 'AI / LLM',
    badgeClass: 'exp-badge-ai',
    bullets: [
      'Engineered a multi-agent orchestration platform using LLMs and API integrations with PubMed and Wiley, delivering curated, metadata-rich literature summaries for researchers and accelerating scientific discovery.',
      'Built AI pipelines for industrial sensor data from pharmaceutical liquid processing systems, automating control processes and capturing key metrics (motor speed, amperage) to elevate operational efficiency.',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Traxidty Solution',
    date: 'Sep 2024 – Dec 2024',
    badge: 'Data Science',
    badgeClass: 'exp-badge-ds',
    bullets: [
      'Built a predictive analytics dashboard for project risk assessment using ML, improving decision-making accuracy by 40% vs. traditional methods.',
      'Implemented a risk score classification system (Low / Medium / High), enhancing risk management and mitigation strategies.',
      'Developed a Flask-based chatbot interface for querying project details, risks, and mitigation strategies, improving accessibility and engagement.',
      'Demonstrated end-to-end AI project skills: Python, ML libraries, and advanced data manipulation.',
    ],
  },
  {
    role: 'AI Developer Intern',
    company: 'Altimetrik',
    date: 'Jul 2024 – Sep 2024',
    badge: 'AI / Product',
    badgeClass: 'exp-badge-ai',
    bullets: [
      'Developed innovative AI-driven products leveraging React, Python, and OpenAI technologies.',
      'Collaborated in agile teams to drive AI solutions and optimise product performance, contributing across design, development, and deployment.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Capgemini',
    date: 'Jun 2021 – Jul 2023',
    badge: 'Engineering',
    badgeClass: 'exp-badge-swe',
    bullets: [
      'Led development and decommissioning of 25+ applications, resolving browser issues, implementing admin control systems, and creating Azure DevOps pipelines.',
      'Streamlined processes by migrating legacy applications to Vue.js, improving UX and adding new features.',
      'Managed a team of three, introducing structured status update workflows to enhance communication and issue resolution.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-role-company">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <span className={`exp-badge ${exp.badgeClass}`}>{exp.badge}</span>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
