import React from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Experience from './components/Experience';
import myImage from './Images/myImage.JPG';
import { Link } from 'react-scroll';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <div className="profile-image-wrapper">
            <img src={myImage} alt="Mohan Kocherlakota" className="profile-image" />
          </div>

          <h1 className="header-title">Mohan Kocherlakota</h1>

          <p className="header-role">GenAI Engineer</p>

          <div className="header-tags">
            <span className="header-tag">Multi-Agent AI</span>
            <span className="header-tag">LLM</span>
            <span className="header-tag">RAG</span>
            <span className="header-tag">MCP</span>
          </div>

          <p className="header-company">
            <span className="company-dot" />
            Altimetrik &nbsp;·&nbsp; Boston, MA
          </p>

          <nav className="navbar">
            {['about','experience','skills','projects','blog','contact'].map(section => (
              <Link
                key={section}
                activeClass="active"
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="blog"><Blog /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
