import React from 'react';

const skillsData = [
  {
    title: 'Core ML & AI',
    icon: '🤖',
    items: [
      'Supervised & Unsupervised Learning',
      'Deep Learning: CNNs, RNNs, Transformers',
      'NLP: Sentiment analysis, language modeling',
      'LLMs: Fine-tuning, RAG, model deployment',
      'Multi-agent orchestration',
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    items: [
      'Python (TensorFlow, PyTorch, scikit-learn)',
      'SQL — database management',
      'JavaScript / TypeScript — full-stack',
      'R — statistical modeling',
    ],
  },
  {
    title: 'MLOps & Cloud',
    icon: '⚙️',
    items: [
      'Docker & containerisation',
      'Azure / GCP',
      'CI/CD Pipelines',
      'REST APIs (Flask / FastAPI)',
      'Azure DevOps',
    ],
  },
  {
    title: 'Finance & Domain',
    icon: '📈',
    items: [
      'Time series analysis',
      'Risk modeling & classification',
      'Financial APIs (Bloomberg, YahooFinance)',
      'Quantitative trading strategies',
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
