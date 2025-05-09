import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      title: 'Core Machine Learning & AI Skills',
      items: [
        'Supervised & Unsupervised Learning: Regression, classification',
        'Deep Learning: CNNs, RNNs, transformers',
        'NLP: Text preprocessing, sentiment analysis, language modeling',
        'LLMs: Fine-tuning, RAG, model deployment'
      ]
    },
    {
      title: 'Programming Languages',
      items: [
        'Python (TensorFlow, PyTorch, scikit-learn)',
        'SQL: Database management',
        'JavaScript/TypeScript: Full-stack development',
        'R: Statistical modeling'
      ]
    },
    {
      title: 'MLOps & Deployment',
      items: [
        'Docker',
        'Azure/GCP',
        'CI/CD Pipelines',
        'REST APIs (Flask/FastAPI)'
      ]
    },
    {
      title: 'Finance-Specific ML',
      items: [
        'Time series analysis',
        'Risk modeling',
        'Financial APIs (Bloomberg, YahooFinance)'
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
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
};

export default Skills;
