import React from 'react';

const skillsData = [
  {
    title: 'Agentic AI & LLMs',
    icon: '🤖',
    items: [
      'Multi-Agent Systems & Orchestration',
      'LLMs: Fine-tuning, RAG, Deployment',
      'LangChain · LlamaIndex · OpenAI Codex',
      'MCP (Model Context Protocol)',
      'Vector Databases',
      'Agentic AI Pipelines',
      'Human-in-the-loop Workflows',
      'Prompt Engineering & Evaluation',
    ],
  },
  {
    title: 'ML & Deep Learning',
    icon: '🧠',
    items: [
      'Supervised & Unsupervised Learning',
      'Deep Learning: CNNs, RNNs, Transformers',
      'PyTorch · JAX · TensorFlow · scikit-learn',
      'NLP: Sentiment analysis, language modeling',
      'Computer Vision · OpenCV',
      'WhisperX · Speech / Audio AI',
      'CUDA',
    ],
  },
  {
    title: 'Programming & Frameworks',
    icon: '💻',
    items: [
      'Python — primary language',
      'TypeScript / JavaScript (React, Node.js)',
      'SQL — database management',
      'FastAPI · Flask',
      'R — statistical modeling',
      'n8n — workflow automation',
      'FFmpeg',
    ],
  },
  {
    title: 'MLOps & Cloud',
    icon: '⚙️',
    items: [
      'Docker & containerisation',
      'Azure · GCP',
      'CI/CD Pipelines · GitHub Actions',
      'Azure DevOps · Databricks · Snowflake',
      'REST APIs',
    ],
  },
  {
    title: 'Integrations & APIs',
    icon: '🔗',
    items: [
      'Slack API · Jira API · GitHub API',
      'Confluence API',
      'OpenAI API · Anthropic API',
      'PubMed · Wiley APIs',
      'Bloomberg · Yahoo Finance APIs',
    ],
  },
  {
    title: 'Certifications',
    icon: '🏅',
    items: [
      'OpenAI — Certified',
      'AWS — Certified',
      'Hugging Face — Certified',
      'MIT Energy HackAIthon — Semi-finalist',
      'MIT AI in Education Hackathon — Semi-finalist',
      'OpenAI Global Codex Hackathon — Participant',
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-container">
    <h2 className="section-title">Technical Skills</h2>
    <div className="skills-grid">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>
            <span className="skill-icon">{category.icon}</span>
            {category.title}
          </h3>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
