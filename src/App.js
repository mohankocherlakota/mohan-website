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
        <h1 className="header-title">Mohan Kocherlakota</h1>
        <img src={myImage} width={80} alt="Profile" className="profile-image" />
        <p className="header-subtitle">Machine Learning Engineer | Data Enthusiast</p>
        <nav className="navbar">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >About</Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >Experience</Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >Skills</Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >Projects</Link>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >Blog</Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >Contact</Link>
        </nav>
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
