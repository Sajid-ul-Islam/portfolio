import { useData } from '../../context/DataContext';
import React, { useEffect, useRef, useState } from 'react';
import ProjectModal from '../../components/Shared/ProjectModal';
import './IronforgeTheme.css';

export default function IronforgeTheme() {
  const data = useData();
  const sectionRefs = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('forge-visible');
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

  const statItems = [
    { value: data.experiences?.length || 0, label: 'Years Experience', highlight: false },
    { value: data.projects?.length || 0, label: 'Projects Completed', highlight: true },
    { value: data.education?.length || 0, label: 'Academic Milestones', highlight: false },
    { value: data.skillGroups?.flatMap(g => g.skills || []).length || 0, label: 'Technical Skills', highlight: false },
  ];

  return (
    <div className="forge-theme">
      {/* Grain Overlay */}
      <div className="forge-grain" aria-hidden="true" />

      {/* Header */}
      <header className="forge-header">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="forge-logo no-underline">
            <div className="forge-logo-icon">
              <i className="fas fa-bolt" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-xl leading-none tracking-wider text-[var(--forge-fg)]">
                {data.info.name.split(' ')[0]}
              </div>
              <div className="font-mono text-[10px] text-[var(--forge-muted)] tracking-[0.3em] mt-0.5">
                DATA · ANALYTICS
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {['Projects', 'Experience', 'Skills', 'Education', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={`mailto:${data.info.email}`} className="forge-btn forge-btn-primary text-xs">
              <i className="fas fa-bolt" /> HIRE ME
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="forge-hero" id="hero">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center min-h-[90vh] pb-20 pt-32">
          {/* Top right social + marker */}
          <div className="absolute top-28 right-6 lg:right-10 flex items-center gap-3 z-20">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--forge-fg-dim)]">
              <span className="w-2 h-2 bg-[var(--forge-orange)] rounded-full forge-pulse" />
              <span className="tracking-[0.2em]">AVAILABLE</span>
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="forge-section-marker forge-fade-up">
              DATA ANALYST & ML ENGINEER
            </div>
            <h1 className="forge-fade-up forge-delay-1">
              <span className="forge-headline-line"><span>DATA DRIVEN.</span></span>
              <span className="forge-headline-line"><span className="stroke">STRATEGIC.</span></span>
              <span className="forge-headline-line"><span>FORGED BY <span className="highlight">{data.info.name.toUpperCase()}.</span></span></span>
            </h1>
            <p className="forge-fade-up forge-delay-2 mt-6">
              {data.info.heroText || `${data.info.role} — turning complex datasets into strategic growth. Based in Bangladesh.`}
            </p>

            <div className="flex flex-wrap gap-3 mt-8 forge-fade-up forge-delay-3">
              <a href="#experience" className="forge-btn forge-btn-primary">
                <i className="fas fa-arrow-right" /> VIEW WORK
              </a>
              <a href={`mailto:${data.info.email}`} className="forge-btn">
                <i className="fas fa-envelope" /> CONTACT
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 forge-fade-up forge-delay-4">
              {data.info.github && (
                <a href={data.info.github} target="_blank" rel="noopener" className="w-10 h-10 border border-[var(--forge-border-light)] hover:border-[var(--forge-orange)] hover:text-[var(--forge-orange)] transition-all flex items-center justify-center text-[var(--forge-fg-dim)]" title="GitHub">
                  <i className="fab fa-github text-sm" />
                </a>
              )}
              {data.info.linkedin && (
                <a href={data.info.linkedin} target="_blank" rel="noopener" className="w-10 h-10 border border-[var(--forge-border-light)] hover:border-[var(--forge-orange)] hover:text-[var(--forge-orange)] transition-all flex items-center justify-center text-[var(--forge-fg-dim)]" title="LinkedIn">
                  <i className="fab fa-linkedin-in text-sm" />
                </a>
              )}
              {data.info.kaggle && (
                <a href={data.info.kaggle} target="_blank" rel="noopener" className="w-10 h-10 border border-[var(--forge-border-light)] hover:border-[var(--forge-orange)] hover:text-[var(--forge-orange)] transition-all flex items-center justify-center text-[var(--forge-fg-dim)]" title="Kaggle">
                  <i className="fab fa-kaggle text-sm" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Marquee bar */}
        <div className="forge-marquee-bar">
          <div className="forge-marquee">
            <span>DATA ANALYTICS</span><span className="text-[var(--forge-orange)]">/</span>
            <span>MACHINE LEARNING</span><span className="text-[var(--forge-orange)]">/</span>
            <span>BUSINESS INTELLIGENCE</span><span className="text-[var(--forge-orange)]">/</span>
            <span>PYTHON & SQL</span><span className="text-[var(--forge-orange)]">/</span>
            <span>DATA ANALYTICS</span><span className="text-[var(--forge-orange)]">/</span>
            <span>MACHINE LEARNING</span><span className="text-[var(--forge-orange)]">/</span>
            <span>BUSINESS INTELLIGENCE</span><span className="text-[var(--forge-orange)]">/</span>
            <span>PYTHON & SQL</span><span className="text-[var(--forge-orange)]">/</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="forge-stats" ref={el => sectionRefs.current[0] = el}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {statItems.map((stat, idx) => (
              <div className="forge-stat forge-fade-up" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`forge-stat-value ${stat.highlight ? 'highlight' : ''}`}>
                  {stat.value}
                </div>
                <div className="forge-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="forge-section" id="projects" ref={el => sectionRefs.current[1] = el}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="forge-section-marker forge-fade-up">01 — Projects</div>
          <h2 className="forge-fade-up forge-delay-1">
            Complex Data.<br />
            <span className="stroke">Actionable</span>{' '}
            <span className="highlight">Insights.</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects?.filter(p => p.featured).slice(0, 6).map((proj, idx) => (
              <div className="forge-project-card forge-notch forge-fade-up" key={proj.id || idx}
                style={{ animationDelay: `${0.2 + idx * 0.08}s`, cursor: 'pointer' }}
                onClick={() => setSelectedProject(proj)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(proj); } }}
                tabIndex={0}
                role="button"
                aria-label={`View case study: ${proj.title}`}
              >
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                {proj.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.technologies.slice(0, 4).map((t, i) => (
                      <span key={i} className="font-mono text-[10px] text-[var(--forge-orange)] border border-[var(--forge-border)] px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 pt-4 border-t border-[var(--forge-border)] flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--forge-orange)]/60 flex items-center gap-1.5">
                    <i className="fas fa-search-plus" />
                    VIEW CASE STUDY
                  </span>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="forge-link text-sm flex items-center gap-2">
                      <span>View Project</span>
                      <i className="fas fa-arrow-right text-[var(--forge-orange)] text-xs" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="forge-section forge-section-dark" id="experience" ref={el => sectionRefs.current[2] = el}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="forge-section-marker forge-fade-up">02 — Experience</div>
          <h2 className="forge-fade-up forge-delay-1">
            Data that <span className="highlight">drives</span><br />
            decisions that <span className="stroke">transform.</span>
          </h2>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {data.experiences?.map((exp, idx) => (
              <div className="forge-flip-card forge-fade-up" key={idx} style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="forge-flip-inner">
                  <div className="forge-flip-front forge-notch">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--forge-muted)] uppercase mb-4">
                      Experience
                    </div>
                    <h3 className="font-display text-3xl text-[var(--forge-fg)] mb-3">{exp.title}</h3>
                    <div className="text-[var(--forge-orange)] font-semibold tracking-wider text-sm uppercase">{exp.company}</div>
                    <div className="font-mono text-[10px] text-[var(--forge-muted)] tracking-[0.2em] uppercase mt-4">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</div>
                    <div className="text-xs text-[var(--forge-fg-dim)] mt-2">{exp.location || 'Dhaka, BD'}</div>
                  </div>
                  <div className="forge-flip-back forge-notch">
                    <div className="font-mono text-[10px] text-[var(--forge-orange)] tracking-[0.2em] uppercase mb-4">/ Role Details</div>
                    <h3 className="text-xl font-bold text-[var(--forge-fg)] mb-4">Key Contributions</h3>
                    <ul className="space-y-2 text-sm text-[var(--forge-fg-dim)]">
                      {exp.highlights?.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <i className="fas fa-circle-check text-[var(--forge-orange)] text-xs mt-1" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          {data.skillGroups?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {data.skillGroups?.slice(0, 4).map((group, idx) => (
                <div className="forge-icon-box forge-fade-up" key={idx} style={{ animationDelay: `${0.3 + idx * 0.08}s` }}>
                  <i className={`fas ${['fa-brain', 'fa-chart-line', 'fa-code', 'fa-database'][idx]}`} />
                  <span>{group.name}</span>
                  <div className="font-mono text-[10px] text-[var(--forge-muted)] tracking-wider">
                    {group.skills?.length} skills
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="forge-section" id="skills" ref={el => sectionRefs.current[3] = el}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="forge-section-marker forge-fade-up">03 — Skills</div>
          <h2 className="forge-fade-up forge-delay-1">
            Technical <span className="highlight">Proficiency.</span><br />
            Continuous <span className="stroke">Growth.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="forge-fade-up forge-delay-2">
              {data.skillGroups?.map((group, gIdx) => (
                <div key={gIdx} className="mb-8">
                  <h3 className="font-mono text-xs tracking-wider uppercase text-[var(--forge-orange)] mb-3">{group.name}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {group.skills?.map((skill, sIdx) => (
                      <div key={sIdx}
                        className="flex items-center gap-2 p-2 border border-[var(--forge-border)] hover:border-[var(--forge-orange-dim)] transition-colors">
                        <i className="fas fa-cog text-[var(--forge-orange)] text-[10px]" />
                        <span className="text-sm text-[var(--forge-fg-dim)]">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="forge-fade-up forge-delay-3">
              <h3 className="font-mono text-xs tracking-wider uppercase text-[var(--forge-orange)] mb-3">Proficiency Levels</h3>
              <div className="space-y-5">
                {data.skillGroups?.flatMap(g => g.skills || []).slice(0, 8).map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--forge-fg-dim)]">{skill.name}</span>
                      <span className="text-[var(--forge-orange)] font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] bg-[var(--forge-bg-darker)]">
                      <div className="h-full bg-[var(--forge-orange)] transition-all duration-1000"
                        style={{ width: `${skill.level}%`, boxShadow: '0 0 8px rgba(255, 77, 0, 0.4)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="forge-section forge-section-dark" id="education" ref={el => sectionRefs.current[4] = el}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="forge-section-marker forge-fade-up">04 — Education</div>
          <h2 className="forge-fade-up forge-delay-1">
            Continuous <span className="highlight">Learning.</span><br />
            Academic <span className="stroke">Excellence.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.education?.map((edu, idx) => (
              <div className="forge-project-card forge-notch forge-fade-up" key={edu.id || idx}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--forge-bg-darker)] border border-[var(--forge-border-light)] flex items-center justify-center shrink-0">
                    <i className="fas fa-graduation-cap text-[var(--forge-orange)] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl mb-1">{edu.degree}</h3>
                    <div className="font-mono text-xs text-[var(--forge-fg-dim)] mb-2">{edu.institution}</div>
                    <div className="font-mono text-[10px] text-[var(--forge-muted)] tracking-[0.15em] uppercase">{edu.date}</div>
                    {edu.location && (
                      <div className="font-mono text-[10px] text-[var(--forge-muted)] mt-1">{edu.location}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="forge-section" id="contact" ref={el => sectionRefs.current[5] = el}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="forge-section-marker forge-fade-up">05 — Connect</div>
          <h2 className="forge-fade-up forge-delay-1">
            Ready to <span className="highlight">collaborate?</span><br />
            Get in <span className="stroke">touch.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 forge-fade-up forge-delay-2">
            <div className="forge-project-card forge-notch p-8">
              <div className="font-mono text-[10px] text-[var(--forge-orange)] tracking-[0.2em] uppercase mb-4">/ Contact</div>
              <div className="space-y-4">
                {data.info.email && (
                  <div className="flex items-center justify-between p-4 border border-[var(--forge-border)] hover:border-[var(--forge-orange-dim)] transition-colors">
                    <div>
                      <div className="font-mono text-[10px] text-[var(--forge-muted)] tracking-wider uppercase">Email</div>
                      <div className="font-mono text-sm text-[var(--forge-fg-dim)] mt-1">{data.info.email}</div>
                    </div>
                    <a href={`mailto:${data.info.email}`} className="text-[var(--forge-orange)] hover:text-[var(--forge-orange-light)]">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                )}
                {data.info.whatsapp && (
                  <div className="flex items-center justify-between p-4 border border-[var(--forge-border)] hover:border-[var(--forge-orange-dim)] transition-colors">
                    <div>
                      <div className="font-mono text-[10px] text-[var(--forge-muted)] tracking-wider uppercase">Phone</div>
                      <div className="font-mono text-sm text-[var(--forge-fg-dim)] mt-1">{data.info.whatsapp}</div>
                    </div>
                    <a href={`https://wa.me/${data.info.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener"
                      className="text-[var(--forge-orange)] hover:text-[var(--forge-orange-light)]">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="forge-project-card forge-notch p-8">
              <div className="font-mono text-[10px] text-[var(--forge-orange)] tracking-[0.2em] uppercase mb-4">/ Location</div>
              <div className="text-2xl font-bold text-[var(--forge-fg)] mb-3">DHAKA, BANGLADESH</div>
              <p className="text-[var(--forge-fg-dim)] text-sm leading-relaxed mb-6">
                Available for local opportunities and global remote collaboration.
              </p>
              <div className="flex items-center gap-3 font-mono text-xs text-[var(--forge-muted)]">
                <i className="fas fa-globe text-[var(--forge-orange)]" />
                <span>REMOTE / ON-SITE</span>
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
      <footer className="forge-footer">
        <div className="forge-footer-watermark">PORTFOLIO</div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[var(--forge-orange)] flex items-center justify-center">
              <i className="fas fa-bolt text-black" />
            </div>
            <div>
              <div className="font-display text-xl leading-none tracking-wider text-[var(--forge-fg)]">
                {data.info.name}
              </div>
              <div className="font-mono text-[10px] text-[var(--forge-muted)] tracking-[0.3em] mt-0.5">
                EST. 2020 · BD
              </div>
            </div>
          </div>
          <p className="text-[var(--forge-fg-dim)] text-sm max-w-md mb-6">
            {data.info.role} — passionate about turning complex datasets into actionable insights.
          </p>
          <div className="flex gap-3">
            {data.info.linkedin && (
              <a href={data.info.linkedin} target="_blank" rel="noopener"
                className="w-10 h-10 border border-[var(--forge-border-light)] hover:border-[var(--forge-orange)] hover:bg-[var(--forge-orange)] hover:text-black transition-all flex items-center justify-center text-[var(--forge-fg-dim)]">
                <i className="fab fa-linkedin-in text-sm" />
              </a>
            )}
            {data.info.github && (
              <a href={data.info.github} target="_blank" rel="noopener"
                className="w-10 h-10 border border-[var(--forge-border-light)] hover:border-[var(--forge-orange)] hover:bg-[var(--forge-orange)] hover:text-black transition-all flex items-center justify-center text-[var(--forge-fg-dim)]">
                <i className="fab fa-github text-sm" />
              </a>
            )}
          </div>
          <div className="border-t border-[var(--forge-border)] mt-8 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[var(--forge-muted)] font-mono text-[10px] tracking-[0.15em] uppercase">
            <div>© {new Date().getFullYear()} {data.info.name.toUpperCase()}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
