import React from 'react';
import answerEngineImg from '../Images/answer_engine_llm.jpg';
// import ragAppImg from '../Images/rag_app.jpg';
// import azureShoppingBotImg from '../Images/azure_shopping_bot.jpg';
// import stockPreditImg from '../Images/stock_predit.jpg';
// import genaiMfImg from '../Images/genai_mf.jpg';
// import aiDevicesImg from '../Images/ai_devices.jpg';
// import llama3VisionImg from '../Images/llama3_vision.jpg';


const projects = [
  {
    title: "Answer Engine LLM",
    url: "https://github.com/mohankocherlakota/answer-engine-llm",
    img: answerEngineImg, // Place your image in the img folder
    description: "A sophisticated answer engine leveraging LLMs, RAG, and API integrations to deliver curated, source-backed answers and summaries."
  },
  {
    title: "RAG-App",
    url: "https://github.com/mohankocherlakota/RAG-App",
    // img: "rag_app.jpg",
    description: "Retrieval-Augmented Generation (RAG) application for enhanced document QA and multi-source information retrieval."
  },
  {
    title: "Azure Shopping Bot",
    url: "https://github.com/mohankocherlakota/Azure_Shopping_Bot",
    // img: "azure_shopping_bot.jpg",
    description: "Conversational AI shopping assistant deployed on Azure, featuring integration with product catalogs and natural language search."
  },
  {
    title: "Stock Predit",
    url: "https://github.com/mohankocherlakota/stock_predit",
    // img: "stock_predit.jpg",
    description: "Stock price prediction tool using machine learning and technical indicators for multiple tech stocks."
  },
  {
    title: "GenAI Mutual Funds",
    url: "https://github.com/mohankocherlakota/genai_mf",
    // img: "genai_mf.jpg",
    description: "Generative AI-powered analysis and insights platform for mutual funds and financial products."
  },
  {
    title: "AI Devices",
    url: "https://github.com/mohankocherlakota/ai-devices",
    // img: "ai_devices.jpg",
    description: "A collection of AI-powered device applications and prototypes."
  },
  {
    title: "Llama3 Vision",
    url: "https://github.com/mohankocherlakota/llama3_vision",
    // img: "llama3_vision.jpg",
    description: "Vision AI project utilizing Llama-3 and multimodal models for advanced image and document understanding."
  }
];

const Projects = () => (
  <section id="projects" className="section-container">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-img-wrapper">
            {/* Replace src with actual image paths in your project */}
            {/* <img src={project.img} alt={project.title} className="project-img" loading="lazy" /> */}

          </div>
          <div className="project-content">
            <h3 className="project-title">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="project-desc">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
