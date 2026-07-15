import React, { useEffect, useCallback, useRef } from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Trigger entrance animation
    requestAnimationFrame(() => {
      if (dialogRef.current) dialogRef.current.classList.add('pm-entered');
    });

    // Focus trap — focus the close button on mount
    const closeBtn = dialogRef.current?.querySelector('.pm-close');
    closeBtn?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="pm-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <div className="pm-dialog" ref={dialogRef}>
        {/* Close Button */}
        <button className="pm-close" onClick={onClose} aria-label="Close case study">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="pm-header">
          <div className="flex items-center gap-3 mb-2">
            <span className="pm-badge">{project.category?.replace(/-/g, ' ').toUpperCase() || 'PROJECT'}</span>
            {caseStudy?.role && <span className="pm-role">{caseStudy.role}</span>}
          </div>
          <h2 className="pm-title">{project.title}</h2>
          {caseStudy?.timeline && (
            <div className="pm-timeline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{caseStudy.timeline}</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="pm-body">
          {/* Description */}
          {project.description && (
            <p className="pm-desc">{project.description}</p>
          )}

          {/* Problem & Solution */}
          <div className="pm-grid">
            {caseStudy?.problem && (
              <div className="pm-card">
                <div className="pm-card-icon pm-icon-problem">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3>Problem</h3>
                <p>{caseStudy.problem}</p>
              </div>
            )}
            {caseStudy?.solution && (
              <div className="pm-card">
                <div className="pm-card-icon pm-icon-solution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                  </svg>
                </div>
                <h3>Solution</h3>
                <p>{caseStudy.solution}</p>
              </div>
            )}
          </div>

          {/* Impact */}
          {caseStudy?.impact?.length > 0 && (
            <div className="pm-section">
              <h3>Impact & Results</h3>
              <ul className="pm-impact-list">
                {caseStudy.impact.map((item, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {caseStudy?.metrics?.length > 0 && (
            <div className="pm-section">
              <h3>Key Metrics</h3>
              <div className="pm-metrics">
                {caseStudy.metrics.map((m, i) => (
                  <div key={i} className="pm-metric">
                    <div className="pm-metric-value">{m.value}</div>
                    <div className="pm-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.technologies?.length > 0 && (
            <div className="pm-section">
              <h3>Tech Stack</h3>
              <div className="pm-techs">
                {project.technologies.map((t, i) => (
                  <span key={i} className="pm-tech">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pm-footer">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener" className="pm-btn pm-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener" className="pm-btn pm-btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
