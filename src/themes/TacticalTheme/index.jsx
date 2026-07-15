import { useData } from '../../context/DataContext';
import React, { useEffect, useRef, useState } from 'react';
import ProjectModal from '../../components/Shared/ProjectModal';
import './TacticalTheme.css';

export default function TacticalTheme() {
  const data = useData();
  const sectionRefs = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tact-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Overlays */}
      <div className="tact-scanlines" aria-hidden="true" />
      <div className="tact-grid" aria-hidden="true" />
      <div className="tact-crt" aria-hidden="true" />

      {/* Status Bar */}
      <div className="tact-status-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="status-label">IDENTITY:</span>
              <span className="status-value">{data.info.name.toUpperCase().replace(/\s+/g, '_')}</span>
              <span className="text-white/10 hidden sm:inline">|</span>
              <span className="status-label hidden sm:inline">CLEARANCE:</span>
              <span className="status-value hidden sm:inline">LVL_5_ADMIN</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="status-dot" />
              <span className="status-label">SYSTEM:</span>
              <span className="status-value text-[var(--tactical-green-light)]">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="tact-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#about" className="text-[var(--tactical-green-light)] text-sm font-bold tracking-wider">
              {data.info.name}
            </a>
            <div className="hidden md:flex items-center gap-1">
              {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map(section => (
                <a key={section} href={`#${section}`} className="px-3 py-2 text-xs hover:text-[var(--tactical-green-light)] transition-colors">
                  {section.toUpperCase()}
                </a>
              ))}
            </div>
            <div />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="tact-hero" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="tact-section-label tact-fade-up">OPERATIVE_DOSSIER</div>
              <h1 className="tact-fade-up tact-fade-up-d1">
                <span className="tact-reveal">{data.info.role?.split(' ')[0] || 'DATA'}</span>
                {' '}
                <span className="highlight tact-reveal" style={{ animationDelay: '0.3s' }}>
                  & {data.info.role?.split('& ')[1] || 'ANALYTICS'}
                </span>
              </h1>
              <p className="tact-typewriter tact-fade-up tact-fade-up-d2 mt-4">
                {data.info.heroText || data.info.role}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 tact-fade-up tact-fade-up-d3">
                {data.info.github && (
                  <a href={data.info.github} target="_blank" rel="noopener" className="tact-social-link" title="GitHub">
                    <i className="fab fa-github" />
                  </a>
                )}
                {data.info.linkedin && (
                  <a href={data.info.linkedin} target="_blank" rel="noopener" className="tact-social-link" title="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                )}
                {data.info.kaggle && (
                  <a href={data.info.kaggle} target="_blank" rel="noopener" className="tact-social-link" title="Kaggle">
                    <i className="fab fa-kaggle" />
                  </a>
                )}
                {data.info.email && (
                  <a href={`mailto:${data.info.email}`} className="tact-social-link" title="Email">
                    <i className="fas fa-envelope" />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 tact-fade-up tact-fade-up-d4">
                <a href="#experience" className="tact-btn tact-btn-primary">
                  <i className="fas fa-terminal" /> VIEW_MISSION_LOG
                </a>
                <a href={`mailto:${data.info.email}`} className="tact-btn">
                  <i className="fas fa-radio" /> ESTABLISH_LINK
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2 tact-fade-up tact-fade-up-d2">
              <div className="tact-profile-frame">
                <div className="tact-scan-line" />
                <div className="tact-corner tact-corner-tl" />
                <div className="tact-corner tact-corner-tr" />
                <div className="tact-corner tact-corner-bl" />
                <div className="tact-corner tact-corner-br" />
                <img src={data.info.photo || 'img/profile.jpg'} alt={data.info.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="tact-section" id="experience" ref={el => sectionRefs.current[0] = el}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tact-section-label">COMMAND_HISTORY</div>
          <h2>Work History</h2>
          <div className="tact-timeline">
            {data.experiences?.map((exp, idx) => (
              <div className="tact-timeline-item tact-fade-up" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="tact-timeline-date">{exp.startDate} — {exp.current ? 'PRESENT' : exp.endDate}</div>
                <h3>{exp.title}</h3>
                <div className="company">{exp.company} · {exp.location || 'Dhaka, BD'}</div>
                <ul className="space-y-1 mt-2">
                  {exp.highlights?.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--tactical-text-dim)]">
                      <i className="fas fa-microchip text-[var(--tactical-green)] mt-1 text-[10px]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="tact-section" id="projects" ref={el => sectionRefs.current[1] = el}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tact-section-label">OPERATIONS_LOG</div>
          <h2>Featured Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.projects?.filter(p => p.featured).slice(0, 6).map((proj, idx) => (
              <div className="tact-card tact-fade-up" key={proj.id || idx}
                style={{ animationDelay: `${idx * 0.08}s`, cursor: 'pointer' }}
                onClick={() => setSelectedProject(proj)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(proj); } }}
                tabIndex={0}
                role="button"
                aria-label={`View case study: ${proj.title}`}
              >
                <h3 className="flex items-center gap-2">
                  <i className="fas fa-folder-open text-xs" />
                  {proj.title}
                </h3>
                <p className="mt-2">{proj.description}</p>
                {proj.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {proj.technologies.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] font-mono text-[var(--tactical-green)] border border-[var(--tactical-border)] px-1.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--tactical-green-light)] opacity-70">
                    <i className="fas fa-search-plus" /> VIEW CASE STUDY
                  </span>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--tactical-green-light)] hover:underline">
                      <i className="fas fa-external-link-alt text-[10px]" /> LAUNCH
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="tact-section" id="skills" ref={el => sectionRefs.current[2] = el}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tact-section-label">TECH_STACK</div>
          <h2>Technical Proficiency</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              {data.skillGroups?.map((group, gIdx) => (
                <div key={gIdx} className="mb-6">
                  <h3 className="text-sm font-mono text-[var(--tactical-green)] mb-3 tracking-wider">{group.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills?.map((skill, sIdx) => (
                      <span key={sIdx} className="tact-skill-chip tact-fade-up" style={{ animationDelay: `${0.1 + sIdx * 0.05}s` }}>
                        <i className="fas fa-code text-[10px]" /> {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-mono text-[var(--tactical-green)] mb-3 tracking-wider">PROFICIENCY_MATRIX</h3>
              <div className="space-y-4">
                {data.skillGroups?.flatMap(g => g.skills || []).slice(0, 6).map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[var(--tactical-text-dim)]">{skill.name}</span>
                      <span className="text-[var(--tactical-green)]">{skill.level}%</span>
                    </div>
                    <div className="tact-progress">
                      <div className="tact-progress-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="tact-section" id="education" ref={el => sectionRefs.current[3] = el}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tact-section-label">ACADEMIC_INTEL</div>
          <h2>Education</h2>
          <div className="tact-timeline">
            {data.education?.map((edu, idx) => (
              <div className="tact-timeline-item tact-fade-up" key={edu.id || idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="tact-timeline-date">{edu.date}</div>
                <h3>{edu.degree}</h3>
                <div className="company">{edu.institution} · {edu.location || 'Dhaka, BD'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="tact-section" id="contact" ref={el => sectionRefs.current[4] = el}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tact-section-label">COMM_UPLINK</div>
          <h2>Contact Intel</h2>
          <div className="max-w-2xl">
            <div className="tact-card p-6">
              <div className="space-y-4">
                {data.info.email && (
                  <div className="flex items-center justify-between p-3 bg-black/40 border border-[var(--tactical-border)]">
                    <span className="font-mono text-sm text-[var(--tactical-text-dim)]">{data.info.email}</span>
                    <a href={`mailto:${data.info.email}`} className="text-[var(--tactical-green-light)] hover:underline text-xs font-mono">
                      <i className="fas fa-reply" /> SEND
                    </a>
                  </div>
                )}
                {data.info.whatsapp && (
                  <div className="flex items-center justify-between p-3 bg-black/40 border border-[var(--tactical-border)]">
                    <span className="font-mono text-sm text-[var(--tactical-text-dim)]">{data.info.whatsapp}</span>
                    <a href={`https://wa.me/${data.info.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener"
                      className="text-[var(--tactical-green-light)] hover:underline text-xs font-mono">
                      <i className="fab fa-whatsapp" /> CHAT
                    </a>
                  </div>
                )}
              </div>
              <div className="mt-4 text-xs font-mono text-[var(--tactical-text-dim)] opacity-60">
                <i className="fas fa-lock text-[var(--tactical-green)] mr-1" />
                ENCRYPTED_CHANNEL_ACTIVE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Footer */}
      <footer className="border-t border-[var(--tactical-border)] py-8 text-center">
        <p className="font-mono text-xs text-[var(--tactical-text-dim)] opacity-50">
          © {new Date().getFullYear()} {data.info.name.toUpperCase()} — MISSION_ACTIVE
        </p>
      </footer>
    </>
  );
}
