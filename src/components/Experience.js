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
      'Leading an end-to-end AI enablement program training 300+ engineers — covering GenAI fundamentals, advanced RAG, multi-agent systems, SDLC integration, evaluation frameworks, and observability.',
      'Delivered enterprise Copilot L&D programs on prompt engineering, multi-agent usage, custom MCP server development, and governance — rolling out across multiple business units.',
      'Built Labyrinth — an AI-powered engineering workflow that automates the full ticket-to-PR cycle across Slack, Jira, GitHub, Snowflake, and Databricks via OpenAI Codex, eliminating hours of manual handoff per sprint.',
      'Developed Codex (autonomous code deployment & testing) and an enterprise-scale Copilot Training platform from scratch — both now in active production use.',
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
      'Developed a multi-agent data pipeline using LangChain, OpenAI, Claude, and open-source models on cloud architectures — designed for portability and enterprise scale.',
      'Implemented a full SDLC deployment framework: agents autonomously analyse requirements, generate and validate SQL, auto-generate test cases, and deploy production-ready code to GitHub via MCP — reducing deployment prep time significantly.',
      'Built a human-in-the-loop approval framework across each SDLC stage, giving enterprise reviewers structured control to approve, reject, or redirect agent actions at every checkpoint.',
      'Architected version-controlled RAG pipelines and vector databases with automatic re-indexing triggered by schema, naming, or knowledge changes — keeping retrieval always in sync.',
      'Redesigned custom Confluence and Jira connectors to enable automated, real-time knowledge extraction and retrieval across enterprise wikis.',
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
      'Engineered an LLM-based multi-agent orchestration platform integrating PubMed and Wiley APIs — delivering curated, metadata-rich literature summaries that accelerated researchers\' literature review process.',
      'Built AI pipelines for industrial sensor data from pharmaceutical liquid processing systems, automating control decisions and capturing key operational metrics (motor speed, amperage) in real time.',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Traxidy Solutions',
    date: 'Sep 2024 – Dec 2024',
    location: 'Canada (Remote)',
    badge: 'ML · Analytics',
    badgeClass: 'exp-badge-ds',
    logo: '/traxidy.png',
    logoBg: '#fff8f0',
    companyInitial: 'T',
    companyColor: 'exp-company-trax',
    bullets: [
      'Built a predictive analytics dashboard for project risk assessment using ML, improving decision-making accuracy by 40% over traditional methods.',
      'Implemented a three-tier risk score classification system (Low / Medium / High) that became the standard risk management interface for project stakeholders.',
      'Developed a Flask-based chatbot for querying live project details, risks, and mitigation strategies — reducing time spent on manual status reporting.',
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
      'Led development and decommissioning of 25+ enterprise applications, implementing admin control systems and Azure DevOps CI/CD pipelines that cut release cycle time.',
      'Migrated legacy applications to Vue.js, delivering measurable improvements in UX and page load performance.',
      'Managed a cross-functional team of three, introducing structured status workflows that reduced issue resolution time and improved stakeholder communication.',
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
