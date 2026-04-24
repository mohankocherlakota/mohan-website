import React from 'react';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'Altimetrik',
    date: 'Jan 2026 – Present',
    location: 'Boston, MA (Remote)',
    badge: 'GenAI · Agentic',
    badgeClass: 'exp-badge-genai',
    logo: '/altimetrik.png',
    logoBg: '#fff5eb',
    companyInitial: 'A',
    companyColor: 'exp-company-alt',
    bullets: [
      'Part of an end-to-end AI enablement program training 300+ engineers — spanning GenAI fundamentals through advanced RAG, multi-agent systems, SDLC integration, evaluation frameworks, and observability.',
      'Delivered enterprise Copilot L&D programs covering prompt engineering, multi-agent usage, custom MCP server development, and governance best practices.',
      'Built Labyrinth — an AI-powered engineering workflow automating ticket analysis, code implementation, and PR creation across Slack, Jira, GitHub, Snowflake, and Databricks via OpenAI Codex.',
      'Developed Codex (autonomous code deployment & testing) and an enterprise-scale Copilot Training platform from scratch.',
    ],
  },
  {
    role: 'Associate AI Engineer',
    company: 'Altimetrik',
    date: 'Jul 2025 – Dec 2025',
    location: 'Boston, MA (Remote)',
    badge: 'RAG · MCP',
    badgeClass: 'exp-badge-rag',
    logo: '/altimetrik.png',
    logoBg: '#fff5eb',
    companyInitial: 'A',
    companyColor: 'exp-company-alt',
    bullets: [
      'Developed a multi-agent data pipeline using LangChain, OpenAI, Claude, and open-source models on cloud architectures — ensuring portability and scalability across enterprise environments.',
      'Implemented a full SDLC deployment framework: agents autonomously analyse requirements, generate SQL, validate, auto-generate test cases, and deploy production-ready code to GitHub via MCP.',
      'Built a human-in-the-loop approval framework across each SDLC stage, allowing enterprise reviewers to approve, reject, or inject instructions at every orchestration checkpoint.',
      'Architected version-controlled RAG pipelines and vector databases with automatic document updates triggered by schema, naming, or knowledge changes.',
      'Redesigned custom connectors for Confluence and Jira to enable automated knowledge extraction and retrieval.',
    ],
  },
  {
    role: 'AI Developer Intern',
    company: 'VesterAI',
    date: 'Jan 2025 – Mar 2025',
    location: 'Boston, MA',
    badge: 'LLM · Research',
    badgeClass: 'exp-badge-llm',
    logo: '/vester.png',
    logoBg: '#e8f6fd',
    companyInitial: 'V',
    companyColor: 'exp-company-vester',
    bullets: [
      'Engineered an LLM-based multi-agent orchestration platform with PubMed and Wiley API integrations, delivering curated, metadata-rich literature summaries and accelerating scientific discovery.',
      'Built AI pipelines for industrial sensor data from pharmaceutical liquid processing systems, automating control processes and capturing key metrics (motor speed, amperage).',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Traxidty Solution',
    date: 'Sep 2024 – Dec 2024',
    location: 'Canada (Remote)',
    badge: 'ML · Analytics',
    badgeClass: 'exp-badge-ds',
    companyInitial: 'T',
    companyColor: 'exp-company-trax',
    bullets: [
      'Built a predictive analytics dashboard for project risk assessment using ML, improving decision-making accuracy by 40% over traditional methods.',
      'Implemented a risk score classification system (Low / Medium / High) enhancing risk management capabilities.',
      'Developed a Flask-based chatbot for querying project details, risks, and mitigation strategies.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Capgemini',
    date: 'Jun 2021 – Jul 2023',
    location: 'India',
    badge: 'Engineering',
    badgeClass: 'exp-badge-swe',
    logo: '/capgemini.png',
    logoBg: '#e8f3fb',
    companyInitial: 'C',
    companyColor: 'exp-company-cap',
    bullets: [
      'Led development and decommissioning of 25+ applications, implementing admin control systems and Azure DevOps pipelines.',
      'Migrated legacy applications to Vue.js, improving UX and reducing load times.',
      'Managed a team of three, introducing structured status workflows to enhance communication and issue resolution.',
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
                <div className="exp-left">
                  <div
                    className="exp-company-icon"
                    style={exp.logo ? { background: exp.logoBg, padding: '5px' } : undefined}
                  >
                    {exp.logo
                      ? <img src={exp.logo} alt={exp.company} className="exp-company-logo" />
                      : <span className={exp.companyColor} style={{ color: '#fff', fontWeight: 800 }}>{exp.companyInitial}</span>
                    }
                  </div>
                  <div className="exp-role-company">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <div className="exp-right">
                  <span className="exp-date">{exp.date}</span>
                  <span className={`exp-badge ${exp.badgeClass}`}>{exp.badge}</span>
                </div>
              </div>
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
