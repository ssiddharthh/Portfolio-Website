import React, { useState, useEffect } from 'react'
import {
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Award,
  Terminal,
  Database,
  BarChart3,
  Menu,
  X,
  FileText,
  Server,
  Activity,
  ShoppingCart
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // Form State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  // Listen to scroll to update nav style and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 1000)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Sticky Navigation Bar */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <a href="#home" className="logo-text" onClick={closeMenu}>
            <Terminal size={24} className="gradient-text" />
            <span>SIDDHARTH<span className="gradient-text">.Y</span></span>
          </a>

          {/* Hamburger Menu Toggle */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Nav Links */}
          <nav>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <a 
                  href="#home" 
                  className={activeSection === 'home' ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={activeSection === 'experience' ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === 'projects' ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={activeSection === 'skills' ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className={activeSection === 'education' ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Education & Certifications
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home">
        <div className="glow-blur glow-purple"></div>
        <div className="glow-blur glow-blue"></div>
        <div className="container hero-wrapper">
          <div className="hero-content">
            <span className="hero-subtitle">Welcome to my space</span>
            <h1 className="hero-title">
              Hi, I am <br />
              <span className="gradient-text">Siddharth Yadav</span>
            </h1>
            <p className="hero-description">
              A highly motivated Data Analyst and Data Engineer with a strong foundation in IT. 
              I design robust ETL pipelines, orchestrate automated reporting systems, and construct high-fidelity Power BI dashboards that turn raw datasets into strategic business decisions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
                <Mail size={18} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View Resume
                <FileText size={18} />
              </a>
            </div>
          </div>

          <div className="hero-graphics">
            <div className="avatar-orbit">
              <div className="avatar-inner">
                <Database size={100} />
              </div>
              <div className="orbit-badge orbit-badge-1" title="Python Development">
                <Terminal size={20} />
              </div>
              <div className="orbit-badge orbit-badge-2" title="Data Warehousing & SQL">
                <Server size={20} />
              </div>
              <div className="orbit-badge orbit-badge-3" title="BI Dashboards">
                <BarChart3 size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey in data engineering and analysis</p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <span className="timeline-date">August 2025</span>
                <h3 className="timeline-title">Industrial Training (Data Analyst Intern)</h3>
                <h4 className="timeline-company">Codinova Technologies Pvt. Ltd.</h4>
                <p className="timeline-description">
                  Focused on generating data-driven insights for real-world projects. Designed and optimized data collection, cleaning, and transformation pipelines to enhance usability. Conducted thorough exploratory data analysis (EDA) and built visual analytics reports to drive strategic decisions for dev and product teams.
                </p>
                <div className="tech-list">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">NumPy</span>
                  <span className="tech-tag">Matplotlib</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Power BI</span>
                  <span className="tech-tag">Excel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world projects showcasing engineering and analytical skills</p>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card glass-card">
              <div className="project-icon">
                <Activity size={24} />
              </div>
              <h3 className="project-title">Availability Monitoring & Analytics Tool</h3>
              <p className="project-description">
                An end-to-end data pipeline designed to continuously ingest, clean, and transform system availability metrics. Resolves reliability issues and alerts teams proactively.
              </p>
              <ul className="project-bullets">
                <li>Built pipeline infrastructure to aggregate raw system logs.</li>
                <li>Automated report compilation via Python, saving hours of manual audit weekly.</li>
                <li>Designed Power BI dashboards to track historical metrics and flag anomalies.</li>
              </ul>
              <div className="project-footer">
                <span className="project-tools">Python • SQL • Power BI</span>
                <span className="project-link">
                  Active
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass-card">
              <div className="project-icon">
                <ShoppingCart size={24} />
              </div>
              <h3 className="project-title">E-commerce Analytics End-to-End</h3>
              <p className="project-description">
                A retail intelligence analytics solution designed to process transaction data and expose key business performance indicators.
              </p>
              <ul className="project-bullets">
                <li>Developed full ETL workflows to ingest sales records and cleanse discrepancies.</li>
                <li>Engineered MySQL relational schema using Star Schema (Fact and Dimension tables).</li>
                <li>Created interactive visual dashboards highlighting profits, refunds, and segment performance.</li>
              </ul>
              <div className="project-footer">
                <span className="project-tools">Python • MySQL • Power BI</span>
                <span className="project-link">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">The technical toolkit I bring to data engineering and analysis</p>

          <div className="skills-wrapper">
            {/* Programming */}
            <div className="skills-category glass-card">
              <h3 className="skills-category-title">
                <Terminal size={20} />
                <span>Programming</span>
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Python (Pandas, NumPy, Scikit-learn)</span>
                    <span className="skill-val">90%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">SQL (Queries, Joins, Aggregations)</span>
                    <span className="skill-val">85%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Databases & Engineering */}
            <div className="skills-category glass-card">
              <h3 className="skills-category-title">
                <Database size={20} />
                <span>Data Engineering</span>
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">MySQL & Relational Modeling</span>
                    <span className="skill-val">80%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">ETL Pipelines & Transformations</span>
                    <span className="skill-val">85%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visualization & Tools */}
            <div className="skills-category glass-card">
              <h3 className="skills-category-title">
                <BarChart3 size={20} />
                <span>Visualization & Tools</span>
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Power BI (DAX, Power Query)</span>
                    <span className="skill-val">90%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Tableau</span>
                    <span className="skill-val">75%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Git, Excel & Sheets</span>
                    <span className="skill-val">85%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education">
        <div className="glow-blur glow-purple" style={{ right: '5%', top: '20%' }}></div>
        <div className="container">
          <div className="edu-cert-grid">
            {/* Education Column */}
            <div className="education-column">
              <h2 className="skills-category-title">
                <GraduationCap size={24} />
                <span>Education</span>
              </h2>
              
              <div className="edu-card glass-card">
                <span className="edu-year">2022 - 2026</span>
                <h3 className="edu-degree">B.Tech in Information Technology</h3>
                <p className="edu-school">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
              </div>

              <div className="edu-card glass-card">
                <span className="edu-year">2020 - 2022</span>
                <h3 className="edu-degree">Senior Secondary & Secondary (CBSE)</h3>
                <p className="edu-school">Seth Anandram Jaipuria School, Vasundhara, Ghaziabad</p>
              </div>
            </div>

            {/* Certifications Column */}
            <div className="certifications-column">
              <h2 className="skills-category-title">
                <Award size={24} />
                <span>Certifications</span>
              </h2>

              <div className="certifications-grid">
                <div className="cert-card glass-card">
                  <div className="cert-icon"><Award size={18} /></div>
                  <div className="cert-info">
                    <span className="cert-title">Intro to Generative AI Studio</span>
                    <span className="cert-issuer">Google Cloud / Simplilearn</span>
                  </div>
                </div>

                <div className="cert-card glass-card">
                  <div className="cert-icon"><Award size={18} /></div>
                  <div className="cert-info">
                    <span className="cert-title">Power BI for Beginners</span>
                    <span className="cert-issuer">Microsoft / Simplilearn</span>
                  </div>
                </div>

                <div className="cert-card glass-card">
                  <div className="cert-icon"><Award size={18} /></div>
                  <div className="cert-info">
                    <span className="cert-title">Business Analytics with Excel</span>
                    <span className="cert-issuer">Microsoft / Simplilearn</span>
                  </div>
                </div>

                <div className="cert-card glass-card">
                  <div className="cert-icon"><Award size={18} /></div>
                  <div className="cert-info">
                    <span className="cert-title">Data Analytics Job Simulation</span>
                    <span className="cert-issuer">Deloitte</span>
                  </div>
                </div>

                <div className="cert-card glass-card">
                  <div className="cert-icon"><Award size={18} /></div>
                  <div className="cert-info">
                    <span className="cert-title">Introduction to Data Science</span>
                    <span className="cert-issuer">Infosys Springboard</span>
                  </div>
                </div>

                <div className="cert-card glass-card">
                  <div className="cert-icon"><Award size={18} /></div>
                  <div className="cert-info">
                    <span className="cert-title">Machine Learning with Scikit-learn</span>
                    <span className="cert-issuer">Infosys Springboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss data pipelines, analytics workloads, or internships!</p>

          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info-cards">
              <div className="contact-info-card glass-card">
                <div className="contact-info-icon">
                  <Mail />
                </div>
                <div className="contact-info-content">
                  <h3>Email Me</h3>
                  <a href="mailto:siddharthyadav200411@gmail.com">siddharthyadav200411@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-card glass-card">
                <div className="contact-info-icon">
                  <Phone />
                </div>
                <div className="contact-info-content">
                  <h3>Call / WhatsApp</h3>
                  <a href="tel:+919136543165">+91 9136543165</a>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'normal', marginTop: '0.25rem' }}>
                    Alt: +91 9797919962
                  </p>
                </div>
              </div>

              <div className="contact-info-card glass-card">
                <div className="contact-info-icon">
                  <Calendar />
                </div>
                <div className="contact-info-content">
                  <h3>Available For</h3>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Full-Time Opportunities & Freelance Projects</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container glass-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="form-name">Name</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Message</label>
                  <textarea
                    id="form-message"
                    required
                    className="form-control"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn btn-primary form-submit-btn"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <div className="form-status success">
                    Thank you! Your message was sent successfully. I'll get back to you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-wrapper">
          <a href="#home" className="footer-logo">
            SIDDHARTH YADAV
          </a>
          <p className="footer-text">
            © {new Date().getFullYear()} Siddharth Yadav. Built with React & TypeScript. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
