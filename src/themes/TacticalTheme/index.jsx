import { useData } from '../../context/DataContext';
import React from 'react';



export default function TacticalTheme() {
  const data = useData();
  
  
  
  return (
    <>
      {/* WARNING: This is auto-generated JSX. Check for any remaining JSX errors. */}
      
  
  <div className="scanlines"></div>
  <div className="system-status-bar">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="status-left">
        <span className="status-label">IDENTITY:</span> <span className="status-value">SAJID_ISLAM</span>
        <span className="status-sep">|</span>
        <span className="status-label">CLEARANCE:</span> <span className="status-value">LVL_5_ADMIN</span>
        <span className="status-sep">|</span>
        <span className="status-label">TERMINAL:</span> <span className="status-value cursor-pointer text-primary" id="statusTerminalTrigger" aria-label="Open terminal">[ACCESS_GRANTED]</span>
        
      </div>
      <div className="status-right d-none d-md-flex align-items-center gap-3">
        <span className="status-label">SYSTEM_INTEGRITY:</span> <span className="status-value status-online">OPTIMAL</span>
        <span className="status-sep">|</span>
        <div className="digital-clock" id="digitalClock">10:09:13</div>
      </div>
    </div>
  </div>
  <div className="bg-blobs">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
  </div>

  <nav className="navbar navbar-expand-lg fixed-top" id="sideNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="data-name">SAJID ISLAM</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">[ABOUT]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">[EXPERIENCE]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">[EDUCATION]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">[SKILLS]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">[PROJECTS]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onclick="openPortfolioBridge(event, 'https://sajid-ul-islam.vercel.app')">[PORTFOLIO]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">[AWARDS]</a>
          </li>
          <li className="nav-item dropdown ms-lg-3 d-flex align-items-center mt-3 mt-lg-0 gap-2">
            
            <button className="btn-theme-toggle" type="button" id="theme-toggle" title="Toggle Light/Dark Mode" >
              <i className="fas fa-moon"></i>
            </button>
            
            
            <div className="d-flex align-items-center gap-1 mx-2">
              <button className="color-swatch rounded-circle border-0 p-0" data-color="green"  title="Green"></button>
              <button className="color-swatch rounded-circle border-0 p-0" data-color="orange"  title="Orange"></button>
              <button className="color-swatch rounded-circle border-0 p-0" data-color="yellow"  title="Yellow"></button>
              <button className="color-swatch rounded-circle border-0 p-0" data-color="blue"  title="Blue"></button>
              <button className="color-swatch rounded-circle border-0 p-0" data-color="red"  title="Red"></button>
            </div>

            
            <div className="dropdown">
              <button className="btn-theme-toggle dropdown-toggle" type="button" id="themeDropdown" data-bs-toggle="dropdown" aria-expanded="false" title="Switch Theme" >
                <i className="fas fa-layer-group"></i> <span className="d-none d-lg-inline ms-2">THEMES</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="themeDropdown" >
                <li><a className="dropdown-item text-primary font-mono small" href="theme-tactical.html" ><i className="fas fa-terminal me-2"></i> Tactical HUD</a></li>
                <li><a className="dropdown-item text-primary font-mono small" href="theme-ironforge.html" ><i className="fas fa-fire me-2"></i> Ironforge Studio</a></li>
                <li><a className="dropdown-item text-primary font-mono small" href="theme-sketchbook.html" ><i className="fas fa-pen-nib me-2"></i> Sketchbook Ink</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<main className="main-content-wrapper">
    <div className="container-fluid p-0">
    <section className="resume-section p-3 p-lg-5" id="about">
      <div className="row align-items-center g-5">
        <div className="col-lg-8 hero-content order-2 order-lg-1 text-center text-lg-start">
          <div className="mb-4">
            <h1 className="display-2 fw-bold mb-3 stealth-start"><span id="typewriter-h1">{data.info.name}</span></h1>
            <p className="lead text-secondary max-w-700 stealth-start">
              <span id="typewriter-p">{data.info.title}</span>
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mb-4 text-secondary small">
            <span><i className="fas fa-map-marker-alt me-2 text-primary"></i>DHAKA, BANGLADESH</span>
            <span className="text-success"><i className="fas fa-circle me-2 animate-pulse small"></i>AVAILABLE FOR OPS</span>
          </div>

          <div className="social-icons-modern d-flex justify-content-center justify-content-lg-start gap-4 mb-5">
            <a href="https://github.com/Sajid-ul-Islam" target="_blank" rel="noopener" className="social-link" title="GitHub" aria-label="GitHub Profile"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/sajidislamchowdhury/" target="_blank" rel="noopener" className="social-link" title="LinkedIn" aria-label="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.kaggle.com/saajiidi" target="_blank" rel="noopener" className="social-link" title="Kaggle" aria-label="Kaggle Profile"><i className="fab fa-kaggle"></i></a>
            <a href="#" className="social-link" title="Contact Info" aria-label="Contact Information" data-bs-toggle="modal" data-bs-target="#contactModal"><i className="fas fa-terminal"></i></a>
          </div>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <a href="#experience" className="btn btn-primary px-4 py-2">
              INITIATE_INTEL
            </a>
            <a href="resume.html" target="_blank" className="btn btn-outline-light px-4 py-2">
              RESUME
            </a>
          </div>
        </div>
        <div className="col-lg-4 order-1 order-lg-2">
          <div className="hero-image-wrapper mx-auto">
            <div className="scanner-line"></div>
            <div className="frame-corner corner-tl"></div>
            <div className="frame-corner corner-tr"></div>
            <div className="frame-corner corner-bl"></div>
            <div className="frame-corner corner-br"></div>
            <img className="img-fluid profile-image" src="img/profile.jpg" alt="Sajid Islam" />
          </div>
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="experience">
      <div className="w-100">
        <span className="section-label">COMMAND_HISTORY</span>
        <h2 className="mb-5">Work History</h2>

        <div className="timeline-wrapper" id="experience-list">
          {data.experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="resume-item mb-5">
                <div className="resume-content">
                  <h3 className="mb-1 text-light">{exp.title}</h3>
                  <div className="subheading mb-3 text-primary">{exp.company}</div>
                  <ul className="list-unstyled text-secondary">
                    {exp.highlights.map((h, i) => (
                      <li className="mb-2" key={i}><i className="fas fa-microchip text-primary me-2"></i> {h}</li>
                    ))}
                  </ul>
                </div>
                <div className="resume-date"><span>{exp.date}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="education">
      <div className="w-100">
        <span className="section-label">ACADEMIC_INTEL</span>
        <h2 className="mb-5">Education</h2>
        <div className="timeline-wrapper" id="education-list">
          {data.education.map((edu, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="resume-item mb-5">
                <div className="resume-content">
                  <h3 className="mb-1 text-light">{edu.degree}</h3>
                  <div className="subheading mb-3 text-primary">{edu.institution}</div>
                  <p className="text-secondary">{edu.details}</p>
                </div>
                <div className="resume-date"><span>{edu.date}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="skills">
      <div className="w-100">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="section-label mb-0">TECH_STACK_CORE</span>
          <div className="h-px flex-grow-1 bg-primary opacity-10"></div>
        </div>
        <h2 className="mb-5 stealth-reveal">Technical Proficiency</h2>
        
        <div className="row g-4 mb-5 stealth-reveal">
          <div className="col-lg-7">
            <div className="card-glass skills-globe-container" id="canvasParent" >
              <canvas id="skillCanvas"></canvas>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card-glass p-0 h-100 d-flex flex-column justify-content-center align-items-center" >
              <div className="p-3 w-100 border-bottom border-primary border-opacity-10 d-flex justify-content-between align-items-center">
                <span className="font-mono small opacity-50 text-uppercase tracking-widest">Skill_Power_Matrix</span>
                <div className="status-indicator available"></div>
              </div>
              <div className="chart-container w-100 p-4" >
                <canvas id="skillsChart"></canvas>
              </div>
              <div className="p-2 w-100 border-top border-primary border-opacity-10 text-center">
                <span className="font-mono small opacity-30">[HOVERPULSE_ENABLED]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          
          <div className="col-lg-6">
            <div id="skill-group-1" className="mb-5">
              <h3 className="h4 text-primary mb-4 d-flex align-items-center gap-3">
                <span className="h-100 w-1 bg-primary opacity-50" ></span>
                Analytical & Technical
              </h3>
              <div className="d-flex flex-wrap gap-3 skill-chips-container">
                
              </div>
            </div>

            <div id="skill-group-0">
              <h3 className="h4 text-primary mb-4 d-flex align-items-center gap-3">
                <span className="h-100 w-1 bg-primary opacity-50" ></span>
                Business & Strategy
              </h3>
              <div className="d-flex flex-wrap gap-3 skill-chips-container">
                
              </div>
            </div>
          </div>

          
          <div className="col-lg-6">
            <div id="skill-group-2" className="mb-5">
              <h3 className="h4 text-primary mb-4 d-flex align-items-center gap-3">
                <span className="h-100 w-1 bg-primary opacity-50" ></span>
                Web Development
              </h3>
              <div className="d-flex flex-wrap gap-3 skill-chips-container">
                
              </div>
            </div>
            
            <div id="skill-progress-bars" className="mb-5">
              <div className="skill-progress-item">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small font-mono text-secondary">DATA_ANALYTICS_v0.2</span>
                  <span className="small font-mono text-primary">92%</span>
                </div>
                <div className="progress-tactical"><div className="progress-bar-tactical" ></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small font-mono text-secondary">BI_ARCHITECTURE_ALPHA</span>
                  <span className="small font-mono text-primary">88%</span>
                </div>
                <div className="progress-tactical"><div className="progress-bar-tactical" ></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small font-mono text-secondary">MACHINE_LEARNING_UPLINK</span>
                  <span className="small font-mono text-primary">75%</span>
                </div>
                <div className="progress-tactical"><div className="progress-bar-tactical" ></div></div>
              </div>
            </div>

            
            <div className="mt-4 pt-4 border-top border-secondary border-opacity-10">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <span className="badge border border-secondary border-opacity-25 text-secondary px-3 py-2 fw-normal font-mono small">BI_INTELLIGENCE</span>
                <span className="badge border border-secondary border-opacity-25 text-secondary px-3 py-2 fw-normal font-mono small">DATA_ANALYSIS</span>
                <span className="badge border border-secondary border-opacity-25 text-secondary px-3 py-2 fw-normal font-mono small">MARKETPLACE_ANALYTICS</span>
                <span className="badge border border-secondary border-opacity-25 text-secondary px-3 py-2 fw-normal font-mono small">STRATEGIC_PLANNING</span>
                <span className="badge border border-secondary border-opacity-25 text-secondary px-3 py-2 fw-normal font-mono small">AGILE_SCRUM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="projects">
      <div className="w-100">
        <span className="section-label">OPERATIONS_LOG</span>
        <h2 className="mb-4">Featured Work</h2>

        
        <div className="project-filters mb-5" id="projectFilters">
          <button className="filter-btn active" data-filter="all">[ALL_OPS]</button>
          <button className="filter-btn" data-filter="bi-viz">[BI_VIZ]</button>
          <button className="filter-btn" data-filter="ml-ai">[ML_AI]</button>
          <button className="filter-btn" data-filter="web-apps">[WEB_APPS]</button>
          <button className="filter-btn" data-filter="automation">[AUTOMATION]</button>
        </div>

        <div className="row g-4 project-grid" id="project-list">
          <div className="col-lg-6 project-item" data-category="web-apps">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[TOMYINFIDA]</h5>
                <p className="card-text text-secondary">A personalized digital love letter creator with themes and password protection.</p>
                <ul className="case-list">
                  <li><span className="case-label">Impact</span><span className="case-text">Heartfelt digital connection.</span></li>
                  <li><span className="case-label">Tools</span><span className="case-text">HTML, CSS, JS</span></li>
                </ul>
                <a href="https://letter2dear.surge.sh/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">LAUNCH_APP</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="bi-viz">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[E-COMMERCE_DASHBOARD]</h5>
                <p className="card-text text-secondary">Real-time analytics dashboard (2021-2025) for revenue and AOV.</p>
                <ul className="case-list">
                  <li><span className="case-label">Impact</span><span className="case-text">Standardized KPI definitions.</span></li>
                  <li><span className="case-label">Tools</span><span className="case-text">React, Dashboard, Analytics</span></li>
                </ul>
                <a href="https://e-com-dashborad.vercel.app/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_LIVE</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="automation">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[SHEET2WHATSAPP]</h5>
                <p className="card-text text-secondary">Automation tool for generating links from spreadsheets.</p>
                <ul className="case-list">
                  <li><span className="case-label">Impact</span><span className="case-text">Reduced manual outreach effort.</span></li>
                  <li><span className="case-label">Tools</span><span className="case-text">Python, Streamlit, Pandas</span></li>
                </ul>
                <a href="https://sheet2whatsapp.streamlit.app/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_LIVE</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="bi-viz">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[SENTINEL_BANGLADESH]</h5>
                <p className="card-text text-secondary">Interactive security incident mapping with cluster analysis.</p>
                <ul className="case-list">
                  <li><span className="case-label">Impact</span><span className="case-text">Accelerated regional pattern discovery.</span></li>
                  <li><span className="case-label">Tools</span><span className="case-text">Python, Streamlit, Viz</span></li>
                </ul>
                <a href="https://sentinelbangladesh.streamlit.app/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_MAP</a>
                <button className="btn btn-sm btn-outline-primary ms-2" onclick="replayProject('SENTINEL_BANGLADESH')">[REPLAY]</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="automation">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[ORDER_PROCESS_AUTOMATION]</h5>
                <p className="card-text text-secondary">Tool for consolidating and formatting Excel order data.</p>
                <ul className="case-list">
                  <li><span className="case-label">Impact</span><span className="case-text">Faster processing turnaround.</span></li>
                  <li><span className="case-label">Tools</span><span className="case-text">Python, Streamlit</span></li>
                </ul>
                <a href="https://order-process-automation.streamlit.app/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_LIVE</a>
                <button className="btn btn-sm btn-outline-primary ms-2" onclick="replayProject('ORDER_AUTOMATION')">[REPLAY]</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="ml-ai">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[AIR_PASSENGER_FORECASTING]</h5>
                <p className="card-text text-secondary">Time series comparison of ARIMA and Smoothing models.</p>
                <ul className="case-list">
                  <li><span className="case-label">Impact</span><span className="case-text">Data-driven strategic planning models.</span></li>
                  <li><span className="case-label">Tools</span><span className="case-text">Python, ARIMA, Time Series</span></li>
                </ul>
                <a href="https://sajid-ul-islam.github.io/Air_Passengers_Forecasting_Models/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_DATA</a>
                <button className="btn btn-sm btn-outline-primary ms-2" onclick="replayProject('PASSENGER_FORECAST')">[REPLAY]</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="web-apps">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[RAMADAN_COMPASS]</h5>
                <p className="card-text text-secondary">Next.js application for spiritual ritual tracking.</p>
                <ul className="case-list">
                  <li><span className="case-label">Tools</span><span className="case-text">React, TypeScript</span></li>
                </ul>
                <a href="https://ramadan-compass.vercel.app/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">LAUNCH_APP</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="ml-ai">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[CUSTOMER_CHURN_ANALYSIS]</h5>
                <p className="card-text text-secondary">Predictive modeling using Random Forest and XGBoost.</p>
                <ul className="case-list">
                  <li><span className="case-label">Impact</span><span className="case-text">85%+ accuracy.</span></li>
                  <li><span className="case-label">Tools</span><span className="case-text">Python, XGBoost</span></li>
                </ul>
                <a href="https://github.com/Sajid-ul-Islam/Customer-Churn-Prediction/" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_CODE</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="bi-viz">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[SECURITY_MAP_VIZ]</h5>
                <p className="card-text text-secondary">Spatial visualization of security incident data.</p>
                <ul className="case-list">
                  <li><span className="case-label">Tools</span><span className="case-text">R, Leaflet</span></li>
                </ul>
                <a href="https://github.com/Sajid-ul-Islam/Security-Map-Visualization" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_CODE</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 project-item" data-category="bi-viz">
            <div className="card-glass h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">[GDP_VS_DEBT_ANALYSIS]</h5>
                <p className="card-text text-secondary">Economic growth vs national debt comparison.</p>
                <ul className="case-list">
                  <li><span className="case-label">Tools</span><span className="case-text">Matplotlib, Pandas</span></li>
                </ul>
                <a href="https://github.com/Sajid-ul-Islam/Economic-Analysis" target="_blank" rel="noopener" className="btn btn-sm btn-primary">VIEW_INTEL</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="blogs">
      <div className="w-100">
        <span className="section-label">INTEL_REPORTS</span>
        <h2 className="mb-5">Latest Blog Posts</h2>
        <div className="row g-4" id="blog-list">
          
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="learning">
      <div className="w-100">
        <span className="section-label">SKILL_ACQUISITION</span>
        <h2 className="mb-5">Current Learning Track</h2>
        <div className="row g-5" id="learning-list">
          <div className="skeleton skeleton-card"></div>
        </div>
        <div id="geospatial-impact" className="mt-5 stealth-reveal">
           
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="hobbies">
      <div className="w-100">
        <span className="section-label">OFF_DUTY_LOGS</span>
        <h2 className="mb-5">Hobbies & Interests</h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <h4 className="text-primary mb-4">[GAMING_TELEMETRY]</h4>
            <div className="card-glass p-4">
              <div id="gaming-stats" className="mb-4 d-flex justify-content-between">
                
              </div>
              <ul className="list-unstyled" id="favorite-games">
                
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="text-primary mb-4">[MEDIA_INTEL]</h4>
            <div className="row g-3" id="favorite-media">
               
            </div>
          </div>
        </div>
      </div>
    </section>


    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="family">
      <div className="w-100">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="section-label mb-0">KINSHIP_TELEMETRY</span>
          <div className="h-px flex-grow-1 bg-primary opacity-10"></div>
        </div>
        <h2 className="mb-5 stealth-reveal">FAMILY_DOSSIER</h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card-glass p-4 h-100 position-relative">
              <div className="corner-accents"></div>
              <h5 className="text-primary mb-4" >[PRIMARY_UNIT]</h5>
              <div className="family-entry mb-4">
                <div className="small opacity-50 mb-1">PARTNER_ID</div>
                <div className="font-mono text-light">Infida Yesmin (Teacher)</div>
              </div>
              <div className="h-px bg-secondary opacity-10 mb-4"></div>
              <div className="family-entry">
                <div className="small opacity-50 mb-1">CORE_LINEAGE</div>
                <ul className="list-unstyled mb-0 small text-secondary">
                  <li className="mb-2"><i className="fas fa-chevron-right text-primary me-2"></i> Father: Sayed Alam (Businessman)</li>
                  <li className="mb-2"><i className="fas fa-chevron-right text-primary me-2"></i> Mother: Suriya Haque (Housewife)</li>
                  <li className="mb-2"><i className="fas fa-chevron-right text-primary me-2"></i> Brother: Sakib Islam (Social Worker)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-glass p-4 h-100 d-flex flex-column position-relative">
              <div className="corner-accents"></div>
              <h5 className="text-primary mb-4" >[STATION_GEOLOCATION]</h5>
              <div className="mt-auto">
                <div className="d-flex align-items-center gap-4 mb-4">
                  <div className="icon-orb text-primary">
                    <i className="fas fa-home fa-lg"></i>
                  </div>
                  <div>
                    <div className="font-mono small text-light">UTTARA_SECTOR_7</div>
                    <div className="small opacity-50">DHAKA, BANGLADESH</div>
                  </div>
                </div>
                <div className="impact-card py-2 px-3 mb-0" >
                  <div className="small text-secondary">ROOTS: Chatkhil, Noakhali. Unit Sakib Islam (Social Worker) active.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    <section className="resume-section p-3 p-lg-5" id="contact">
      <div className="w-100">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="section-label mb-0">COMM_UPLINK</span>
          <div className="h-px flex-grow-1 bg-primary opacity-10"></div>
        </div>
        <h2 className="mb-5">Contact Intel</h2>
        <div className="card-glass p-5 position-relative overflow-hidden">
          <div className="corner-accents"></div>
          <div className="strobe-light" ></div>
          <div className="row g-5 align-items-center">
             <div className="col-md-7">
                <div className="mb-4">
                   <div className="small text-primary font-mono mb-2">SIGNAL_ORIGIN</div>
                   <div className="p-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                      <span className="font-mono small">sajid.islam.chowdhury@gmail.com</span>
                      <button className="btn btn-sm btn-link text-primary p-0" onclick="copyEmail('sajid.islam.chowdhury@gmail.com', event)"><i className="far fa-copy"></i></button>
                   </div>
                </div>
                <div className="mb-0">
                   <div className="small text-primary font-mono mb-2">ENCRYPTED_VOICE</div>
                   <div className="p-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                      <span className="font-mono small">+880 182-452-6054</span>
                      <i className="fas fa-lock text-success small opacity-50"></i>
                   </div>
                </div>
             </div>
             <div className="col-md-5 text-center text-md-start">
                <p className="text-secondary small mb-4">Direct uplink available for high-priority missions and collaboration requests.</p>
                <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                  <a href="https://wa.me/+8801824526054" className="btn btn-primary px-4">WHATSAPP</a>
                  <a href="https://linkedin.com/in/sajidislamchowdhury" className="btn btn-outline-primary px-4">LINKEDIN</a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section className="resume-section p-3 p-lg-5" id="awards">
      <div className="w-100">
        <span className="section-label">HONORARY_LOGS</span>
        <h2 className="mb-5">Awards & Certifications</h2>
        <div className="timeline-wrapper" id="awards-list">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="resume-item mb-4">
              <h3 className="mb-0">ICT4SD Research Contribution</h3>
              <div className="subheading mb-3 text-primary">Data Mining Techniques Publication</div>
              <p className="text-secondary small">Categorizing single paragraphStories @ ICT Analysis and Applications Proceedings (Dec 2020).</p>
              <a href="https://ict4sd.org/link/proceedings/ICT4SD-2020-VOL2.pdf" target="_blank" rel="noopener" className="btn btn-sm btn-primary">READ_PAPER</a>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="resume-item mb-0">
              <h3 className="mb-0">Professional Certifications</h3>
              <div className="subheading mb-3 text-primary">Data Science & Analytics Credentials</div>
              <div className="d-flex gap-3">
                <a href="https://drive.google.com/file/d/1cJxcJJur1n3MiXFETv5k30SDP0WP9wOm/view?usp=sharing" target="_blank" rel="noopener" className="btn btn-sm btn-outline-light">INTEL_CERT_1</a>
                <a href="https://drive.google.com/file/d/1O7O6jJRN58WGiyJu8hYrGhv-DtP89bEI/view?usp=sharing" target="_blank" rel="noopener" className="btn btn-sm btn-outline-light">INTEL_CERT_2</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr className="m-0 border-secondary opacity-10" />

    
    <section className="resume-section p-3 p-lg-5" id="testimonials">
      <div className="w-100">
        <span className="section-label">FIELD_REPORTS</span>
        <h2 className="mb-5">Testimonials</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="testimonials-carousel"></div>
          </div>
        </div>
      </div>
    </section>

    </div>
  </main>
    </>
  );
}
