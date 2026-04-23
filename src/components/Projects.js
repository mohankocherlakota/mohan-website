import React from 'react';

const projects = [
  {
    title: 'Answer Engine LLM',
    url: 'https://github.com/mohankocherlakota/answer-engine-llm',
    tags: ['LLM', 'RAG', 'TypeScript', 'React'],
    description:
      'Perplexity-inspired answer engine leveraging LLMs and RAG to deliver precise, source-backed, context-aware responses with a React frontend and Node.js backend.',
  },
  {
    title: 'Multi-Speaker Transcription',
    url: 'https://github.com/mohankocherlakota/multi_speaker_transcription',
    tags: ['WhisperX', 'NER', 'Python', 'Audio AI'],
    description:
      'Advanced Multiple Speaker Diarization (MSD) application using WhisperX with Named Entity Recognition for audio tagging and speaker identification.',
  },
  {
    title: 'RAG Application',
    url: 'https://github.com/mohankocherlakota/RAG-App',
    tags: ['RAG', 'Vector DB', 'Python'],
    description:
      'Retrieval-Augmented Generation application for enhanced document Q&A and multi-source information retrieval using vector databases.',
  },
  {
    title: 'Azure OpenAI Shopping Bot',
    url: 'https://github.com/mohankocherlakota/AzureOpenAI_Shopping_Bot',
    tags: ['Azure', 'OpenAI', 'Chatbot'],
    description:
      'Conversational AI shopping assistant deployed on Azure with OpenAI integration, product catalogue search, and natural language query handling.',
  },
  {
    title: 'Azure OpenAI Cognitive Search',
    url: 'https://github.com/mohankocherlakota/Azure_OpenAI_CognitiveSearch',
    tags: ['Azure', 'OpenAI', 'Cognitive Search', 'Python'],
    description:
      'Enterprise search solution combining Azure Cognitive Search with OpenAI for intelligent document retrieval and question answering over large knowledge bases.',
  },
  {
    title: 'GenAI Mutual Funds',
    url: 'https://github.com/mohankocherlakota/genai_mf',
    tags: ['GenAI', 'Finance', 'Python'],
    description:
      'Generative AI-powered analysis and insights platform for mutual funds and financial products, combining LLMs with financial data APIs.',
  },
  {
    title: 'Llama3 Vision',
    url: 'https://github.com/mohankocherlakota/llama3_vision',
    tags: ['Llama-3', 'Vision AI', 'Multimodal', 'Python'],
    description:
      'Vision AI project utilising Llama-3 and multimodal models for advanced image and document understanding tasks.',
  },
  {
    title: 'Stock Prediction',
    url: 'https://github.com/mohankocherlakota/stock_predit',
    tags: ['ML', 'Finance', 'Time Series'],
    description:
      'Stock price prediction tool using machine learning and technical indicators across multiple tech stocks, with backtesting and performance visualisation.',
  },
];

const tagColors = {
  'Multi-Agent': '#ebf8ff',
  'LLM': '#e9d8fd',
  'RAG': '#c6f6d5',
  'TypeScript': '#bee3f8',
  'React': '#fed7e2',
  'Python': '#fefcbf',
  'WhisperX': '#e2e8f0',
  'NER': '#fed7aa',
  'Audio AI': '#e2e8f0',
  'Vector DB': '#c6f6d5',
  'Azure': '#bee3f8',
  'OpenAI': '#d6bcfa',
  'Chatbot': '#fed7aa',
  'Cognitive Search': '#bee3f8',
  'GenAI': '#e9d8fd',
  'Finance': '#c6f6d5',
  'Llama-3': '#fed7e2',
  'Vision AI': '#fefcbf',
  'Multimodal': '#e2e8f0',
  'ML': '#bee3f8',
  'Time Series': '#fed7aa',
  'Node.js': '#c6f6d5',
};

const Projects = () => (
  <section id="projects" className="section-container">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-content">
            <h3 className="project-title">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className="project-tag"
                  style={{ background: tagColors[tag] || '#e2e8f0' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
            title="View on GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
