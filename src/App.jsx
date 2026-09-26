import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme || "dark";
  });

  const [timeSpent, setTimeSpent] = useState(0);

  /* ================= THEME ================= */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  /* ================= TIME SPENT ================= */

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      const seconds = Math.floor(
        (Date.now() - startTime) / 1000
      );

      setTimeSpent(seconds);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${String(minutes).padStart(2, "0")}m`;
    }

    if (minutes > 0) {
      return `${minutes}m ${String(remainingSeconds).padStart(2, "0")}s`;
    }

    return `00:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className={`portfolio ${theme}-theme`}>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="nav-container">

          <a href="#home" className="logo">
            ALISHA<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">

            {/* TIME SPENT */}

            <div className="visitor-timer" title="Time spent on portfolio">
              <span className="timer-icon">◷</span>
              <span>{formatTime(timeSpent)}</span>
            </div>

            {/* THEME BUTTON */}

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>

            <a href="#contact" className="nav-button">
              Let's Talk
            </a>

          </div>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div className="hero-container">

            <div className="hero-content">

              <div className="availability">
                <span className="status-dot"></span>
                Available for opportunities
              </div>

              <p className="hero-small">
                PYTHON FULL-STACK DEVELOPER
              </p>

              <h1>
                Building
                <span> intelligent</span>
                <br />
                digital solutions.
              </h1>

              <p className="hero-description">
                I'm Alisha Malik, a Python Full-Stack Developer and AI
                Automation Specialist focused on building modern web
                applications, backend APIs, AI solutions, and workflow
                automation.
              </p>

              <div className="hero-buttons">

                <a
                  href="#projects"
                  className="primary-button"
                >
                  View My Work
                  <span>→</span>
                </a>

                <a
                  href="#contact"
                  className="secondary-button"
                >
                  Let's Work Together
                </a>

              </div>

              <div className="social-links">

                <a
                  href="https://github.com/imalisha"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com/in/alisha-malik-182a18235"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a href="mailto:imalishamalik@gmail.com">
                  Email ↗
                </a>

              </div>

            </div>


            {/* ================= HERO CARD ================= */}

            <div className="hero-visual">

              <div className="glow glow-one"></div>
              <div className="glow glow-two"></div>

              <div className="ai-card">

                <div className="card-top">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="online-status">
                    <span></span>
                    DEVELOPER
                  </div>

                </div>


                <div className="ai-content">

                  <div className="ai-icon">
                    AM
                  </div>

                  <p className="system-label">
                    ALISHA MALIK
                  </p>

                  <h3>
                    Python Full-Stack
                    <br />
                    & AI Automation
                  </h3>


                  <div className="tech-list">

                    <div>
                      <span className="tech-icon python">
                        Py
                      </span>

                      <span>Python</span>

                      <strong>01</strong>
                    </div>

                    <div>
                      <span className="tech-icon django">
                        Dj
                      </span>

                      <span>Django / Flask</span>

                      <strong>02</strong>
                    </div>

                    <div>
                      <span className="tech-icon html">
                        HTML
                      </span>

                      <span>
                        HTML / CSS / Bootstrap / JavaScript
                      </span>

                      <strong>03</strong>
                    </div>

                    <div>
                      <span className="tech-icon react">
                        Re
                      </span>

                      <span>React</span>

                      <strong>04</strong>
                    </div>

                    <div>
                      <span className="tech-icon ai">
                        AI
                      </span>

                      <span>AI + n8n Automation</span>

                      <strong>05</strong>
                    </div>

                  </div>

                </div>


                <div className="card-footer">

                  <span>
                    PERSONAL DEVELOPER SYSTEM
                  </span>

                  <span className="system-online">
                    ● READY
                  </span>

                </div>

              </div>

            </div>

          </div>


          <div className="scroll-indicator">
            <span></span>
            Scroll to explore
          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-heading">

            <p>ABOUT ME</p>

            <h2>
              Turning ideas into
              <span> practical solutions.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p>
                I'm an IT graduate and Python Full-Stack Developer
                with hands-on experience in web development,
                backend APIs, AI solutions, and workflow automation.
              </p>

              <p>
                My work combines Python, Django, Flask, React,
                REST APIs, databases, AI services, and n8n
                automation to build practical full-stack solutions.
              </p>

              <p>
                I enjoy solving repetitive problems through
                automation and creating applications that connect
                modern interfaces, backend systems, APIs, and AI.
              </p>

            </div>


            <div className="about-highlights">

              <div className="highlight-card">
                <span>01</span>

                <h3>
                  Full-Stack Development
                </h3>

                <p>
                  Building frontend interfaces, backend systems
                  and APIs.
                </p>
              </div>

              <div className="highlight-card">
                <span>02</span>

                <h3>
                  AI Solutions
                </h3>

                <p>
                  Integrating AI services into practical
                  applications.
                </p>
              </div>

              <div className="highlight-card">
                <span>03</span>

                <h3>
                  Workflow Automation
                </h3>

                <p>
                  Designing multi-step n8n workflows and
                  API integrations.
                </p>
              </div>

              <div className="highlight-card">
                <span>04</span>

                <h3>
                  Problem Solving
                </h3>

                <p>
                  Turning repetitive manual tasks into
                  automated processes.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-heading">

            <p>TECHNICAL SKILLS</p>

            <h2>
              Technologies I
              <span> work with.</span>
            </h2>

          </div>


          <div className="skills-grid">

            <div className="skill-category">
              <div className="skill-number">01</div>

              <h3>Programming</h3>

              <div className="skill-tags">
                <span>Python</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
            </div>


            <div className="skill-category">
              <div className="skill-number">02</div>

              <h3>Frameworks</h3>

              <div className="skill-tags">
                <span>Django</span>
                <span>Flask</span>
                <span>React</span>
                <span>Bootstrap</span>
                <span>Flutter</span>
              </div>
            </div>


            <div className="skill-category">
              <div className="skill-number">03</div>

              <h3>Backend & APIs</h3>

              <div className="skill-tags">
                <span>REST APIs</span>
                <span>API Integration</span>
                <span>Backend Development</span>
                <span>Flask APIs</span>
              </div>
            </div>


            <div className="skill-category">
              <div className="skill-number">04</div>

              <h3>AI & Automation</h3>

              <div className="skill-tags">
                <span>n8n</span>
                <span>AI Automation</span>
                <span>AI Chatbots</span>
                <span>Gemini API</span>
                <span>AI/ML</span>
                <span>Prompt Engineering</span>
              </div>
            </div>


            <div className="skill-category">
              <div className="skill-number">05</div>

              <h3>Databases</h3>

              <div className="skill-tags">
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>SQLite</span>
                <span>Supabase</span>
              </div>
            </div>


            <div className="skill-category">
              <div className="skill-number">06</div>

              <h3>Tools</h3>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Figma</span>
                <span>Canva</span>
                <span>Copilot</span>
              </div>
            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-heading">

            <p>PROJECTS & WORK</p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>

            <p className="section-description">
              A selection of full-stack applications, AI automation
              workflows, plugins, academic projects, and desktop
              applications.
            </p>

          </div>


          <div className="projects-grid">


            {/* ================= 01 EDUFLOW ================= */}

            <article className="project-card featured-project">

              <div className="project-image">

                <img
                  src="/projects/eduflow.png"
                  alt="EduFlow AI project"
                />

                <div className="image-overlay">
                  <span>LIVE PROJECT</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  FEATURED • LIVE
                </div>

                <h3>EduFlow AI</h3>

                <p className="project-subtitle">
                  AI-Powered Education & Automated Grading Platform
                </p>

                <p>
                  A full-stack teacher and student education
                  platform built with React and Supabase.
                  Includes assignments, submissions, grading,
                  feedback, and automated AI grading using n8n
                  and Gemini.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Supabase</span>
                  <span>n8n</span>
                  <span>Gemini API</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://eduflow-ai-platform.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/imalisha/eduflow-ai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* ================= 02 BARISTA ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/projects/barista-cafe.png"
                  alt="Barista Cafe Django project"
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>LIVE PROJECT</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  DJANGO APPLICATION
                </div>

                <h3>Barista Café</h3>

                <p className="project-subtitle">
                  Django Web Application
                </p>

                <p>
                  A responsive café website built with Django,
                  HTML, CSS, and Bootstrap. Includes dynamic menu,
                  database functionality, backend logic, and
                  database integration.
                </p>

                <div className="project-tech">
                  <span>Django</span>
                  <span>Python</span>
                  <span>Bootstrap</span>
                  <span>SQLite</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://alisha2.pythonanywhere.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/imalisha/barista-cafe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* ================= 03 AUTOMATION ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/projects/automation.png"
                  alt="AI and n8n automation workflows"
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>AI AUTOMATION</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  AI AUTOMATION
                </div>

                <h3>
                  AI & n8n Automation Workflows
                </h3>

                <p className="project-subtitle">
                  LinkedIn Content, Email & Follow-Up Automation
                </p>

                <p>
                  Created multi-step automation workflows for
                  LinkedIn content generation, content pipelines,
                  sales emails, and follow-up processes.
                  Integrated APIs and AI services to automate
                  repetitive business tasks.
                </p>

                <div className="project-tech">
                  <span>n8n</span>
                  <span>APIs</span>
                  <span>AI Automation</span>
                  <span>Workflow Design</span>
                </div>

              </div>

            </article>


            {/* ================= 04 CANVA ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/projects/canva-plugin.png"
                  alt="NowIcon Canva plugin"
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>CANVA PLUGIN</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  CANVA PLUGIN
                </div>

                <h3>
                  NowIcon — Canva Plugin
                </h3>

                <p className="project-subtitle">
                  Canva Plugin & Browser-Based Project
                </p>

                <p>
                  A Canva plugin project developed as part of
                  practical plugin work. The project explores
                  plugin-based functionality and integration
                  with the Canva environment.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Canva</span>
                  <span>APIs</span>
                  <span>Plugin Development</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/imalisha/canva-plugin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* ================= 05 HEALTHBUDDY ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/projects/healthbuddy.png"
                  alt="HealthBuddy healthcare project"
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>UNIVERSITY FYP</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  UNIVERSITY FYP
                </div>

                <h3>HealthBuddy</h3>

                <p className="project-subtitle">
                  Healthcare Web Application
                </p>

                <p>
                  A university final-year project developed as
                  part of my BS Information Technology degree.
                  HealthBuddy focuses on providing a
                  healthcare-oriented web application and
                  user-focused digital experience.
                </p>

                <div className="project-tech">
                  <span>Web Development</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/imalisha/HealthBuddy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* ================= 06 FIGMA ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/projects/figma-plugin.png"
                  alt="NowIcon Figma plugin"
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>FIGMA PLUGIN</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  FIGMA PLUGIN
                </div>

                <h3>
                  NowIcon — Figma Plugin
                </h3>

                <p className="project-subtitle">
                  Figma Plugin & Design Automation Project
                </p>

                <p>
                  A Figma plugin project developed to work with
                  the Figma plugin environment and support
                  design-related functionality and automation.
                </p>

                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>Figma</span>
                  <span>Plugin Development</span>
                  <span>APIs</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/imalisha/nowicon-figma"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* ================= 07 SPEECH EMOTION ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/projects/speech-emotion.jpeg"
                  alt="Speech Emotion Detection application"
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>AI / ML PROJECT</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  AI / ML PROJECT
                </div>

                <h3>
                  Speech Emotion Detection
                </h3>

                <p className="project-subtitle">
                  Emotion Detection from Speech using AI/ML
                </p>

                <p>
                  A speech emotion detection project developed
                  using Flutter with a Flask backend. The
                  application works with speech/audio input
                  and AI/ML functionality to identify emotions
                  from speech.
                </p>

                <div className="project-tech">
                  <span>Flutter</span>
                  <span>Python</span>
                  <span>Flask</span>
                  <span>AI/ML</span>
                  <span>Speech Processing</span>
                </div>

              </div>

            </article>


            {/* ================= 08 NOVA AI ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/projects/nova-ai.png"
                  alt="NOVA AI desktop assistant"
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>IN DEVELOPMENT</span>
                </div>

              </div>


              <div className="project-content">

                <div className="project-label">
                  DESKTOP AI ASSISTANT
                </div>

                <h3>NOVA AI</h3>

                <p className="project-subtitle">
                  Voice-Controlled Windows Desktop Assistant
                </p>

                <p>
                  A Python and PySide6 desktop assistant designed
                  to interact with a Windows computer using voice
                  and text commands. The project combines voice
                  interaction, AI capabilities, application
                  control, and desktop automation.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>PySide6</span>
                  <span>Voice AI</span>
                  <span>Automation</span>
                  <span>Windows</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/imalisha/NOVA-ai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <span className="coming-soon">
                    Live Soon
                  </span>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-heading">

            <p>EXPERIENCE</p>

            <h2>
              Where I've
              <span> worked.</span>
            </h2>

          </div>


          <div className="experience-list">


            {/* SHAYAN SOLUTIONS */}

            <article className="experience-item">

              <div className="experience-date">
                2025 — 2026
              </div>

              <div className="experience-content">

                <div className="experience-top">

                  <div>

                    <h3>
                      Software Developer Intern
                    </h3>

                    <p>
                      Shayan Solutions
                    </p>

                  </div>

                </div>

                <ul>

                  <li>
                    Built 5+ n8n automation workflows for
                    LinkedIn content generation, sales email
                    automation, follow-ups, and content pipelines.
                  </li>

                  <li>
                    Developed React-based browser plugins and
                    web automation tools integrated with APIs.
                  </li>

                  <li>
                    Worked on automation solutions designed to
                    reduce repetitive manual tasks and improve
                    business workflows.
                  </li>

                  <li>
                    Contributed to Figma and Canva plugin-related
                    development and web automation projects.
                  </li>

                </ul>

              </div>

            </article>


            {/* DEEPOXY LOGICS */}

            <article className="experience-item">

              <div className="experience-date">
                2025
              </div>

              <div className="experience-content">

                <div className="experience-top">

                  <div>

                    <h3>
                      Flutter & Web Developer Intern
                    </h3>

                    <p>
                      Depoxy Logics
                    </p>

                  </div>

                </div>

                <ul>

                  <li>
                    Developed a Flutter-based speech emotion
                    detection application using speech processing
                    and AI/ML models.
                  </li>

                  <li>
                    Built and integrated Flask backend APIs with
                    machine learning functionality.
                  </li>

                  <li>
                    Worked on real-time audio processing and
                    chatbot features.
                  </li>

                  <li>
                    Developed and contributed to web applications
                    using modern web technologies.
                  </li>

                </ul>

              </div>

            </article>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}

        <section className="section education-section">

          <div className="education-card">

            <div className="education-icon">
              BS
            </div>

            <div>

              <p className="education-label">
                EDUCATION
              </p>

              <h2>
                Bachelor of Science
                <br />
                in Information Technology
              </h2>

              <p className="education-school">
                University of Agriculture Faisalabad
              </p>

              {/* <p className="education-year">
                2021 — 2025
              </p> */}

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-container">

            <div className="contact-content">

              <p className="contact-label">
                HAVE A PROJECT IN MIND?
              </p>

              <h2>
                Let's build something
                <span> useful together.</span>
              </h2>

              <p>
                Whether you need a full-stack web application,
                backend API, AI-powered feature, or workflow
                automation, let's talk about your idea.
              </p>

              <a
                href="mailto:imalishamalik@gmail.com"
                className="contact-email"
              >
                imalishamalik@gmail.com ↗
              </a>

            </div>


            <div className="contact-links">

              <a
                href="https://linkedin.com/in/alisha-malik-182a18235"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                ↗
              </a>

              <a
                href="https://github.com/imalisha"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                ↗
              </a>

              <a href="mailto:imalishamalik@gmail.com">
                <span>Email</span>
                ↗
              </a>

              <a href="tel:03126765654">
                <span>Phone</span>
                ↗
              </a>

            </div>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="footer">

          <div>

            <a href="#home" className="logo">
              ALISHA<span>.</span>
            </a>

            <p>
              Python Full-Stack Developer
              <br />
              & AI Automation Specialist
            </p>

          </div>


          <div className="footer-right">

            <div className="footer-time">
              ⏱ {formatTime(timeSpent)} on portfolio
            </div>

            <p className="copyright">
              © 2026 Alisha Malik
            </p>

          </div>

        </footer>

      </main>

    </div>
  );
}

export default App;