import React from 'react';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-item">
        <h3>AI Developer Intern, VesterAI <span className="date-range">(Jan 2025 – Mar 2025)</span></h3>
        <ul>
          <li>
            Engineered a multi-agent orchestration platform using Large Language Models (LLMs) and API integrations with PubMed and Wiley to deliver curated, metadata-rich literature summaries for researchers, accelerating scientific discovery and enhancing research workflows.
          </li>
          <li>
            Developed AI pipelines for industrial sensor data from pharmaceutical liquid processing systems, automating control processes and capturing key metrics (e.g., motor speed, amperage) to elevate operational efficiency.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Data Scientist Intern,Traxidty Solution <span className="date-range">(Sep 2024 – Dec 2024)</span></h3>
        <ul>
          <li>
            Built a predictive analytics dashboard for project risk assessment using machine learning, improving decision-making accuracy by 40% compared to traditional methods.
          </li>
          <li>
            Implemented a risk score classification system (Low, Medium, High), enhancing risk management and mitigation strategies.
          </li>
          <li>
            Developed a Flask-based chatbot interface for querying project details, risks, and mitigation strategies, improving user accessibility and engagement.
          </li>
          <li>
            Demonstrated end-to-end AI project development skills, including Python, machine learning libraries, and advanced data manipulation.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>AI Developer Intern, Altimetrik <span className="date-range">(Jul 2024 – Sep 2024)</span></h3>
        <ul>
          <li>
            Developed innovative AI-driven products leveraging React, Python, and OpenAI technologies.
          </li>
          <li>
            Collaborated in agile teams to drive AI solutions and optimize product performance, contributing to product design, development, and deployment.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Senior Software Engineer, Capgemini <span className="date-range">(Jun 2021 – Jul 2023)</span></h3>
        <ul>
          <li>
            Led the development and decommissioning of 25+ applications, resolving browser issues, implementing new admin control systems, and creating Azure DevOps pipelines.
          </li>
          <li>
            Streamlined processes by transitioning legacy applications to Vue.js, improving user experience and adding new features.
          </li>
          <li>
            Managed a team of three, introducing an Excel-based status update system to enhance communication and issue resolution.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
